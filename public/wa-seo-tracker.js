/**
 * WA SEO Tracker - jasalasercutting.com
 * Menambahkan baris "Kode konsultasi: JLC-<HALAMAN>-SEO" ke setiap pesan WhatsApp
 * supaya chat yang masuk dari website ini bisa dikenali di CRM.
 *   - Organik (tanpa gclid/UTM berbayar) : JLC-<HALAMAN>-SEO
 *   - Terdeteksi klik iklan Google       : JLC-<HALAMAN>-ADS (website ini tidak diiklankan, jaga-jaga)
 * Prefix JLC- membedakan dari tepatlaser.com (TL-).
 * Juga mengirim event wa_click ke dataLayer (siap dipakai GTM) dan gtag (GA4).
 */
(function () {
  'use strict';
  var SITE = 'JLC';
  var DEFAULT_GREETING = 'Halo Jasa Cutting Laser, saya ingin konsultasi proyek. Bisa dibantu?';
  var WA_RE = /(?:wa\.me\/|api\.whatsapp\.com\/send|web\.whatsapp\.com\/send)/i;

  function pageTag() {
    var clean = (window.location.pathname || '/').replace(/^\/+|\/+$/g, '');
    if (!clean) return SITE + '-HOME';
    if (clean.indexOf('blog/') === 0) return SITE + '-BLOG';
    var seg = clean.split('/').pop();
    var short = seg.toLowerCase().replace(/^(jasa-)?laser-cutting-?/, '') || 'layanan';
    var tag = short.replace(/[^a-z0-9-]/g, '').replace(/-+/g, '-').toUpperCase().slice(0, 24) || 'PAGE';
    return SITE + '-' + tag;
  }

  function isAds() {
    try {
      var p = new URLSearchParams(window.location.search);
      if (p.get('gclid') || p.get('wbraid') || p.get('gbraid') || p.get('gad_source') || p.get('gad_campaignid')) return true;
      var med = (p.get('utm_medium') || '').toLowerCase();
      return med === 'cpc' || med === 'ppc' || med === 'paid';
    } catch (e) { return false; }
  }

  function code() { return pageTag() + (isAds() ? '-ADS' : '-SEO'); }

  function stamp(url) {
    try {
      var u = new URL(url, window.location.origin);
      var text = u.searchParams.get('text') || DEFAULT_GREETING;
      text = text.replace(/\n*Kode konsultasi\s*:.*$/gim, '').trim();
      u.searchParams.set('text', text + '\n\nKode konsultasi: ' + code());
      return u.toString();
    } catch (e) { return url; }
  }

  function track(href, source) {
    var c = code();
    var label = [source || 'wa_click', c, window.location.pathname].join(' | ');
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'wa_click',
      event_category: 'lead',
      event_label: label,
      wa_source: source || 'wa_click',
      traffic_source: isAds() ? 'google_ads' : 'organic_seo',
      consultation_code: c,
      wa_href: href || '',
      landing_page: window.location.href
    });
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'wa_click', {
        event_category: 'lead',
        event_label: label,
        traffic_source: isAds() ? 'google_ads' : 'organic_seo',
        consultation_code: c,
        page_path: window.location.pathname
      });
    }
  }

  function hook() {
    document.querySelectorAll('a[href*="wa.me"], a[href*="api.whatsapp.com"]').forEach(function (a) {
      var orig = a.getAttribute('data-wa-orig-href') || a.getAttribute('href');
      if (!orig || !WA_RE.test(orig)) return;
      a.setAttribute('data-wa-orig-href', orig);
      a.setAttribute('href', stamp(orig));
      if (a._waSeo) return;
      a._waSeo = true;
      a.addEventListener('click', function () {
        track(a.getAttribute('href'), a.getAttribute('data-wa-label') || 'anchor');
      });
    });
  }

  // Tombol/form yang memakai window.open (mis. form kontak & quote builder)
  var origOpen = window.open;
  window.open = function (url, target, features) {
    if (typeof url === 'string' && WA_RE.test(url)) {
      track(url, 'window_open');
      return origOpen.call(window, stamp(url), target || '_blank', features || 'noopener,noreferrer');
    }
    return origOpen.apply(window, arguments);
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', hook);
  else hook();
  if (window.MutationObserver) {
    new MutationObserver(hook).observe(document.documentElement, { childList: true, subtree: true });
  }

  window.JlcWaTracker = { code: code, stamp: stamp };
})();
