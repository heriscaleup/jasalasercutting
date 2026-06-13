---
title: "Tips File CorelDRAW & Illustrator untuk Laser Cutting"
description: "Panduan teknis menyiapkan file desain di CorelDRAW dan Illustrator agar hasil laser cutting presisi, minim error, dan siap produksi tanpa revisi berulang."
pubDate: 2026-06-12T07:00:00.000Z
category: "Tips"
tags: ["laser cutting", "CorelDRAW", "Illustrator"]
image: "/images/blog/tips-desain-file-coreldraw-illustrator-laser-cutting-2026-06.jpg"
readTime: "7 min read"
author: "Tim Jasalasercutting"
draft: false
---

File desain yang rapi adalah separuh dari kualitas hasil laser cutting. Mesin bisa sangat presisi, tetapi jika file CorelDRAW atau Illustrator berisi path terbuka, ukuran tidak 1:1, layer berantakan, atau stroke terlalu tebal, hasil produksi tetap berisiko meleset.

Panduan ini dibuat sebagai checklist praktis sebelum kamu mengirim file ke jasa laser cutting. Bahasanya teknis, tetapi fokusnya sederhana: mengurangi revisi, mempercepat proses quote, dan membuat hasil potong lebih presisi.

## Checklist Cepat Sebelum Kirim File

Pastikan lima hal ini sudah benar:

- Ukuran desain sudah skala **1:1** dalam satuan milimeter.
- Jalur potong memakai stroke hairline atau sangat tipis.
- Area cut, engrave, dan raster dipisahkan dengan warna/layer jelas.
- Semua teks sudah diubah menjadi curve/path.
- Tidak ada duplicate path, hidden object, atau clipping mask yang belum di-expand.

Kalau checklist ini aman, file biasanya jauh lebih cepat masuk proses produksi.

## Kenapa Setting File Sangat Penting?

Mesin laser cutting tidak membaca "gambar" seperti mata manusia. Mesin membaca data vektor — path, node, dan koordinat — lalu mengikuti jalur tersebut dengan beam laser. Kesalahan kecil dalam file desain bisa berakibat:

- Jalur potong yang tidak tersambung sempurna
- Elemen yang dipotong ganda (double cut) sehingga boros material
- Ukuran tidak akurat karena skala tidak di-set dengan benar
- Mesin gagal membaca file karena format atau layer yang salah

Berikut panduan lengkapnya.

## Setup Dokumen yang Benar

**Ukuran Dokumen = Ukuran Material**
Set ukuran halaman/artboard sesuai ukuran material yang akan digunakan. Ini membantu operator memastikan desainmu muat di material yang tersedia dan memudahkan nesting (penempatan beberapa desain dalam satu lembar material).

**Satuan Ukuran**
Gunakan milimeter (mm) sebagai satuan. Ini standar industri laser cutting di Indonesia. Jangan gunakan pixel — pixel adalah satuan layar, bukan ukuran fisik, dan nilainya bergantung pada DPI yang bisa berbeda-beda.

**Skala 1:1**
Pastikan desainmu berada pada skala 1:1. Apa yang kamu lihat di layar harus sama persis dengan ukuran produk jadi. Gunakan fitur "Transform" atau "Object Properties" untuk verifikasi dimensi.

## Pengaturan Warna untuk Membedakan Operasi

Ini adalah kesalahan paling umum yang kami temui: semua elemen desain berwarna hitam tanpa pembedaan.

Dalam laser cutting, warna digunakan untuk membedakan jenis operasi mesin:

- **Merah (255, 0, 0) — Cut/Potong**: Jalur yang akan dipotong tembus oleh laser
- **Biru (0, 0, 255) — Engrave/Ukir**: Area yang akan diukir atau di-mark
- **Hitam atau abu — Raster engrave**: Untuk gambar atau teks yang di-raster

Konvensi warna ini bisa berbeda di setiap jasa laser cutting, jadi selalu konfirmasi dengan operator sebelum mengirim file. Tapi memisahkan cut dan engrave ke layer/warna berbeda adalah keharusan universal.

## Pengaturan Stroke dan Fill

**Untuk Jalur Potong (Cut Lines)**
- Stroke: warna sesuai konvensi (biasanya merah)
- Stroke width: **0.001 mm** atau "hairline" — ini menandakan bahwa ini adalah jalur vektor untuk dipotong, bukan elemen dekoratif
- Fill: **None/No fill** — jalur potong tidak boleh memiliki fill

**Untuk Area Ukir (Engrave)**
- Fill: warna engrave (biasanya biru atau hitam)
- Stroke: biasanya None, atau sama dengan fill

Mengapa stroke harus hairline? Karena mesin membaca tengah stroke sebagai jalur potong. Stroke tebal 2mm berarti jalur potong akan bergeser 1mm dari posisi yang kamu maksud.

## Memastikan Path Tersambung (Closed Path)

Untuk objek yang akan dipotong (huruf, bentuk, lubang), semua path **harus closed** — tidak ada node yang menggantung atau jalur yang terbuka.

**Di CorelDRAW:**
1. Pilih objek
2. Gunakan "Close Path" di Object Properties
3. Atau gunakan Shape Tool (F10), klik kanan pada node terbuka → "Close Curve"

**Di Illustrator:**
1. Gunakan Direct Selection Tool (A)
2. Pilih endpoint yang terbuka
3. Object → Path → Join (Ctrl+J)

Path yang tidak closed menyebabkan mesin berhenti di tengah jalur atau memotong dalam arah yang salah.

## Menghapus Elemen yang Tidak Diperlukan

Sebelum mengirim file, hapus:

- **Duplicate paths** tersembunyi: Ini sering terjadi saat copy-paste. Path ganda menyebabkan double-cut yang boros waktu dan merusak material. Gunakan Edit → Select All Duplicates untuk menemukan dan menghapusnya
- **Hidden layers**: Pastikan semua layer yang tidak ingin dipotong benar-benar dihapus, bukan hanya di-hide
- **Clipping masks**: Jika ada, expand terlebih dahulu dan hapus elemen yang tersembunyi di balik mask
- **Teks yang belum di-convert**: Semua teks harus di-convert ke kurva/path sebelum dikirim ke mesin

**Di CorelDRAW:** Select teks → Object → Convert to Curves (Ctrl+Q)
**Di Illustrator:** Select teks → Type → Create Outlines (Shift+Ctrl+O)

## Toleransi Kerf (Laser Kerf)

Laser memiliki lebar potongan (kerf) sekitar 0.1–0.3mm tergantung material dan mesin. Untuk part yang harus fit sempurna (misalnya sambungan jigsaw atau slot), kamu perlu memperhitungkan kerf ini dalam desain.

Kompensasi kerf dilakukan dengan:
- Memperbesar desain inner part sebesar setengah nilai kerf
- Memperkecil outer path sebesar setengah nilai kerf

Untuk pekerjaan presisi tinggi, konsultasikan nilai kerf dengan operator sebelum finalisasi desain.

## Format File yang Direkomendasikan

| Format | Rekomendasi |
|--------|------------|
| .CDR (CorelDRAW) | Terbaik untuk mesin berbasis CorelDRAW |
| .AI (Illustrator) | Umum diterima hampir semua mesin |
| .DXF | Universal, tapi periksa versi kompatibilitasnya |
| .SVG | Alternatif modern yang banyak didukung |
| .PDF (vektor) | Umumnya aman, tapi konfirmasi terlebih dahulu |

Hindari mengirim file dalam format raster seperti JPG, PNG, atau BMP untuk pekerjaan laser cutting vektor.

## Checklist Akhir Sebelum Kirim File

Sebelum mengirimkan file desainmu, pastikan:

- [ ] Satuan mm, skala 1:1
- [ ] Semua teks sudah di-convert ke kurva
- [ ] Jalur potong berwarna sesuai konvensi, stroke hairline, no fill
- [ ] Semua path closed, tidak ada open node
- [ ] Tidak ada duplicate paths
- [ ] Layer hidden sudah dihapus
- [ ] Format file sesuai yang diminta operator
- [ ] Ukuran dokumen sesuai ukuran material

---

Sudah siap kirim file desainmu? **Tim Jasalasercutting** siap membantu mewujudkan proyek laser cutting kamu dengan hasil yang presisi dan rapi. Kami melayani cutting acrylic, MDF, kayu, dan berbagai material non-logam lainnya.

**Hubungi kami via WhatsApp** untuk konsultasi desain, estimasi biaya, dan informasi material. Kirim file desainmu sekarang dan dapatkan preview hasil cutting sebelum produksi!

## FAQ File Laser Cutting

### Format file apa yang paling aman untuk laser cutting?

File vektor seperti CDR, AI, SVG, DXF, atau PDF vektor biasanya paling aman. Untuk produksi presisi, hindari mengirim JPG/PNG sebagai file utama karena itu raster, bukan jalur potong.

### Kenapa teks harus di-convert ke curve?

Agar bentuk huruf tidak berubah saat file dibuka di komputer operator. Font yang tidak terpasang bisa membuat layout bergeser atau karakter berubah.

### Apakah semua warna punya arti yang sama di setiap workshop?

Tidak selalu. Warna merah untuk cut dan biru untuk engrave adalah konvensi umum, tetapi tetap konfirmasi standar warna/layer ke operator sebelum produksi.
