# BookWorm - Proyek UTS Pemrograman Web

BookWorm adalah sebuah antarmuka website (front-end) yang dirancang sebagai proyek Ujian Tengah Semester untuk mata kuliah Pemrograman Web. Aplikasi ini mensimulasikan platform pembaca buku digital, di mana pengguna dapat melihat koleksi buku, melakukan pencarian, dan melacak progress baca mereka. Proyek ini dibangun sepenuhnya menggunakan HTML, CSS, dan JavaScript.

## Tautan Demo via GitHub Pages

Proyek ini telah di-hosting dan dapat diakses secara publik melalui **GitHub Pages**, sebuah layanan hosting situs statis dari GitHub.

**Alamat Domain:** **[https://mfaizulminan.github.io/Bookworm_UTS_web/](https://mfaizulminan.github.io/Bookworm_UTS_web/)**

---
## Fitur Utama

- **Koleksi Buku Dinamis:** Daftar buku di-generate secara otomatis dari data array di JavaScript.
- **Pencarian dan Filter:** Pengguna dapat mencari buku berdasarkan judul atau penulis, serta memfilternya berdasarkan genre.
- **Pelacakan Progress Baca:** Pengguna dapat menandai buku yang sedang dibaca, memperbarui progress, dan menandai buku yang telah selesai dibaca. Data ini disimpan di `localStorage` browser.
- **Slider Tema Interaktif:** Terdapat enam pilihan tema (Light, Dark, Sepia, Slate, Winter, Matcha) yang dapat diganti melalui slider untuk meningkatkan pengalaman pengguna.
- **Desain Responsif:** Tampilan website dirancang untuk berfungsi dengan baik pada perangkat desktop maupun mobile.

---
## Penjelasan Teknis

#### Struktur HTML

[cite_start]Struktur file `index.html` dibangun menggunakan tag HTML semantik untuk memastikan aksesibilitas, SEO, dan keterbacaan kode yang baik[cite: 39].

- **`<header>`:** Berisi logo, menu navigasi utama, dan slider tema. Header dibuat `sticky` agar selalu terlihat saat halaman di-scroll.
- **`<main>`:** Menjadi wadah untuk semua konten utama website.
- **`<section>`:** Setiap bagian utama halaman (Beranda, Koleksi Buku, Tentang Kami) dipisahkan ke dalam tag `<section>` dengan ID unik untuk memungkinkan navigasi internal.
- **`<footer>`:** Didesain dengan layout tiga kolom menggunakan CSS Grid untuk menyajikan informasi tambahan seperti deskripsi, tautan cepat, dan kontak.

#### Desain dan Styling (CSS)

[cite_start]Desain antarmuka bertujuan untuk menjadi bersih, modern, dan fungsional[cite: 40].

- **Variabel CSS (`:root`)**: Menjadi inti dari fitur slider tema. Dengan mendefinisikan skema warna sebagai variabel, perubahan tema dapat dilakukan dengan efisien hanya dengan mengubah atribut `data-theme` pada `<body>`.
- **Layout Responsif**: Penggunaan **Flexbox** dan **Grid** memastikan semua elemen tersusun rapi dan dapat beradaptasi secara otomatis pada berbagai ukuran layar.
- **Efek Interaktif**: Efek transisi dan `:hover` diterapkan pada tombol, tautan, dan kartu buku untuk memberikan umpan balik visual yang intuitif kepada pengguna.

#### Fungsionalitas dan Interaktivitas (JavaScript)

[cite_start]Semua interaktivitas website dikelola oleh JavaScript dengan fokus pada praktik modern untuk meningkatkan pengalaman pengguna[cite: 43].

- **Manipulasi DOM**: Daftar buku di halaman koleksi dan beranda tidak ditulis secara manual di HTML. JavaScript secara dinamis membuat elemen kartu untuk setiap buku dari *array of objects*, lalu menyisipkannya ke dalam DOM.
- **Penanganan Event (`Event Handling`)**: Website ini merespon berbagai interaksi pengguna melalui `addEventListener`. Ini mencakup input pada *search bar*, perubahan pada filter genre, dan gerakan pada *slider* tema.
- **Manajemen State dengan `localStorage`**: Untuk menyimpan data progress baca dan pilihan tema pengguna, kami memanfaatkan Web Storage API (`localStorage`). Data disimpan sebagai string JSON, memungkinkan informasi tetap ada bahkan setelah pengguna menutup dan membuka kembali browser.

---
## Cara Menjalankan Proyek Secara Lokal

Meskipun proyek ini dapat dilihat langsung melalui tautan demo, Anda juga dapat menjalankannya di komputer lokal Anda dengan langkah-langkah berikut:

1.  **Clone Repositori**
    Buka terminal atau Git Bash dan jalankan perintah berikut:
    ```bash
    git clone [https://github.com/MfaizulMinan/Bookworm_UTS_web.git](https://github.com/MfaizulMinan/Bookworm_UTS_web.git)
    ```

2.  **Masuk ke Direktori Proyek**
    ```bash
    cd Bookworm_UTS_web
    ```

3.  **Buka File `index.html`**
    Buka file `index.html` langsung di browser pilihan Anda. Untuk pengalaman pengembangan terbaik, disarankan menggunakan ekstensi **Live Server** di Visual Studio Code.

---
## Tim Pengembang

Proyek ini dikerjakan oleh:

| Nama Anggota             | NIM          |
| ------------------------ | ------------ |
| Muhammad Faizul Minan    | 24091397048  |
| Faizul Kamil             | 24091397045  |
| Tafrih Humaidi           | 24091397030  |