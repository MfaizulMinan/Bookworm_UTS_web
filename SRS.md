# Software Requirements Specification (SRS)
## Proyek Website BookWorm

### 1. Pendahuluan

#### 1.1 Tujuan
Dokumen ini merinci spesifikasi kebutuhan perangkat lunak untuk proyek BookWorm. Tujuannya adalah untuk menciptakan antarmuka website (front-end) sebagai platform pembaca buku digital yang interaktif dan mudah digunakan, yang dikembangkan untuk memenuhi tugas Ujian Tengah Semester mata kuliah Pemrograman Web.

#### 1.2 Lingkup Proyek
Proyek ini mencakup pengembangan sisi klien (client-side) dari aplikasi web. Lingkupnya meliputi:
-   Tampilan halaman utama, koleksi buku, dan informasi tentang tim.
-   Fitur untuk menampilkan, mencari, dan memfilter koleksi buku.
-   Fungsionalitas untuk melacak status baca buku dan progressnya.
-   Fitur personalisasi tampilan melalui beberapa pilihan tema.
-   Tidak termasuk pengembangan sisi server (back-end), database, atau sistem otentikasi pengguna.

---

### 2. Deskripsi Umum

Aplikasi BookWorm adalah antarmuka web halaman tunggal (Single-Page Application) yang memungkinkan pengguna berinteraksi dengan koleksi buku digital. Data buku bersifat statis dan semua data interaksi pengguna (progress baca, pilihan tema) disimpan secara lokal di browser pengguna menggunakan `localStorage`.

---

### 3. Kebutuhan Fungsional

-   **F-01: Menampilkan Koleksi Buku**
    - Sistem harus dapat menampilkan semua buku yang tersedia dalam format galeri (grid).
    - Setiap buku harus menampilkan gambar sampul, judul, dan nama penulis.

-   **F-02: Pencarian Buku**
    - Sistem harus menyediakan kolom input untuk mencari buku berdasarkan judul atau nama penulis.
    - Daftar buku yang ditampilkan harus diperbarui secara real-time sesuai dengan kata kunci pencarian.

-   **F-03: Filter Buku Berdasarkan Genre**
    - Sistem harus menyediakan menu dropdown untuk memfilter buku berdasarkan genre.
    - Daftar buku yang ditampilkan harus sesuai dengan genre yang dipilih.

-   **F-04: Membaca Buku**
    - Sistem harus memungkinkan pengguna membuka file PDF buku di tab browser baru saat tombol "Baca Buku" diklik.

-   **F-05: Melacak Buku yang Sedang Dibaca**
    - Saat pengguna mulai membaca buku, buku tersebut harus muncul di bagian "Sedang Dibaca" di halaman Beranda.
    - Pengguna harus dapat memperbarui progress baca (dalam persen) secara manual.

-   **F-06: Menandai Buku Selesai Dibaca**
    - Pengguna harus dapat memindahkan buku dari bagian "Sedang Dibaca" ke bagian "Selesai Dibaca".

-   **F-07: Mengganti Tema Tampilan**
    - Sistem harus menyediakan slider untuk memilih salah satu dari enam tema yang tersedia.
    - Perubahan tema harus diterapkan ke seluruh halaman secara instan.

### 4. Kebutuhan Non-Fungsional

-   **NF-01: Responsif**
    - Tampilan aplikasi harus dapat beradaptasi dengan baik pada berbagai ukuran layar, termasuk desktop, tablet, dan mobile.

-   **NF-02: Kompatibilitas Browser**
    - Aplikasi harus berfungsi dengan baik pada versi terbaru browser modern seperti Google Chrome, Mozilla Firefox, dan Microsoft Edge.

-   **NF-03: Ketergunaan (Usability)**
    - Antarmuka pengguna harus intuitif dan mudah dipahami oleh pengguna baru.

-   **NF-04: Persistensi Data Sesi**
    - Pilihan tema dan data progress baca pengguna harus tetap tersimpan di browser bahkan setelah tab ditutup dan dibuka kembali, dengan memanfaatkan `localStorage`.