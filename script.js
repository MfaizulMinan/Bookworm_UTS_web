// --- 5. FUNGSI YANG DIPANGGIL DARI HTML (HARUS GLOBAL) ---
// Kita letakkan di luar agar bisa diakses oleh 'onclick'
window.readBook = function(pdfPath, bookId) {
    window.open(pdfPath, '_blank');

    let currentlyReading = getFromStorage('currentlyReading');
    let finishedBooks = getFromStorage('finishedBooks');

    // Jika buku belum ada di daftar manapun, tambahkan ke 'sedang dibaca'
    if (!currentlyReading[bookId] && !finishedBooks.includes(bookId.toString())) {
        currentlyReading[bookId] = { progress: 0 };
        saveToStorage('currentlyReading', currentlyReading);
        displayReadingStatus(); // Perbarui tampilan di Beranda
    }
}

window.updateProgress = function(bookId) {
    const currentlyReading = getFromStorage('currentlyReading');
    const currentProgress = currentlyReading[bookId].progress;
    const newProgress = prompt(`Masukkan progress baru untuk buku ini (0-100):`, currentProgress);

    if (newProgress !== null && !isNaN(newProgress) && newProgress >= 0 && newProgress <= 100) {
        currentlyReading[bookId].progress = parseInt(newProgress);
        saveToStorage('currentlyReading', currentlyReading);
        displayReadingStatus(); // Perbarui tampilan
    }
}

window.markAsFinished = function(bookId) {
    let currentlyReading = getFromStorage('currentlyReading');
    let finishedBooks = getFromStorage('finishedBooks');

    // Hapus dari 'sedang dibaca'
    delete currentlyReading[bookId];
    
    // Tambahkan ke 'selesai dibaca' jika belum ada
    if (!finishedBooks.includes(bookId.toString())) {
        finishedBooks.push(bookId.toString());
    }

    saveToStorage('currentlyReading', currentlyReading);
    saveToStorage('finishedBooks', finishedBooks);
    displayReadingStatus(); // Perbarui tampilan
}

// --- FUNGSI HELPER UNTUK LOCALSTORAGE (Bisa ditaruh di sini) ---
const getFromStorage = (key) => JSON.parse(localStorage.getItem(key)) || (key === 'finishedBooks' ? [] : {});
const saveToStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));
let displayReadingStatus; // Deklarasi agar bisa diakses global oleh fungsi di atas

// Menjalankan semua skrip setelah seluruh konten HTML selesai dimuat
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. DATA BUKU ---
    const books = [
        { id: 1, title: "Akatsuki Hiden", author: "Masashi Kishimoto", year: 2015, genre: "Fiksi", cover: "assets/images/akatsuki-hiden.png", pdf: "assets/books/akatsuki-hiden.pdf" },
        { id: 2, title: "Aksi Massa", author: "Tan Malaka", year: 1926, genre: "Sejarah", cover: "assets/images/aksi-massa-tan-malaka-1926.png", pdf: "assets/books/aksi-massa-tan-malaka-1926.pdf" },
        { id: 3, title: "Anti Malas dan Suka Menunda", author: "Penerbit C-Klik Media", year: 2021, genre: "Self-Help", cover: "assets/images/anti-malas-dan-suka-menunda.png", pdf: "assets/books/anti-malas-dan-suka-menunda.pdf" },
        { id: 4, title: "Atomic Habits", author: "James Clear", year: 2018, genre: "Self-Help", cover: "assets/images/atomic-habbit.png", pdf: "assets/books/atomic-habbit.pdf" },
        { id: 5, title: "Berdamai Dengan Diri Sendiri", author: "Muthia Sayekti", year: 2018, genre: "Self-Help", cover: "assets/images/berdamai-dengan-diri-sendiri.png", pdf: "assets/books/berdamai-dengan-diri-sendiri.pdf" },
        { id: 6, title: "Bicara itu ada seninya", author: "Oh Su Hyang", year: 2016, genre: "Self-Help", cover: "assets/images/bicara-itu-ada-seninya.png", pdf: "assets/books/bicara-itu-ada-seninya.pdf" },
        { id: 7, title: "Filosofi Teras", author: "Henry Manampiring", year: 2018, genre: "Filsafat", cover: "assets/images/filosofi-teras.png", pdf: "assets/books/filosofi-teras.pdf" },
        { id: 8, title: "Itachi Shinden", author: "Masashi Kishimoto", year: 2015, genre: "Fiksi", cover: "assets/images/itachi-shinden.png", pdf: "assets/books/itachi-shinden.pdf" },
        { id: 9, title: "Kakashi Hiden", author: "Masashi Kishimoto", year: 2015, genre: "Fiksi", cover: "assets/images/kakashi-hiden.png", pdf: "assets/books/kakashi-hiden.pdf" },
        { id: 10, title: "Sejarah Dunia yang Disembunyikan", author: "Jonathan Black", year: 2007, genre: "Sejarah", cover: "assets/images/sejarah-dunia-yang-disembunyikan.png", pdf: "assets/books/sejarah-dunia-yang-disembunyikan.pdf" }
    ];

    // --- 2. PEMILIHAN ELEMEN DOM ---
    const collectionContainer = document.getElementById('book-collection-list');
    const searchInput = document.getElementById('search-input');
    const genreFilter = document.getElementById('genre-filter');
    const currentlyReadingList = document.getElementById('currently-reading-list');
    const finishedReadingList = document.getElementById('finished-reading-list');
    // Elemen baru untuk slider tema
    const themeSlider = document.getElementById('theme-slider');
    const themeLabel = document.getElementById('theme-label');
    
    // --- 4. DEFINISI FUNGSI UTAMA ---
    function displayBooks(bookList) {
        collectionContainer.innerHTML = '';
        bookList.forEach(book => {
            const bookCard = document.createElement('div');
            bookCard.className = 'book-card';
            bookCard.innerHTML = `
                <img src="${book.cover}" alt="Sampul buku ${book.title}">
                <h3>${book.title}</h3>
                <p>${book.author} (${book.year})</p>
                <button class="read-button" onclick="window.readBook('${book.pdf}', ${book.id})">Baca Buku</button>
            `;
            collectionContainer.appendChild(bookCard);
        });
    }

    displayReadingStatus = function() { // Assign ke variabel global
        const currentlyReading = getFromStorage('currentlyReading');
        const finishedBooks = getFromStorage('finishedBooks');

        currentlyReadingList.innerHTML = '';
        finishedReadingList.innerHTML = '';

        for (const bookId in currentlyReading) {
            const book = books.find(b => b.id == bookId);
            if (book) {
                const progress = currentlyReading[bookId].progress;
                const bookElement = document.createElement('div');
                bookElement.className = 'reading-card';
                bookElement.innerHTML = `
                    <img src="${book.cover}" alt="${book.title}">
                    <div class="reading-info">
                        <h4>${book.title}</h4>
                        <p>Progress: ${progress}%</p>
                        <progress value="${progress}" max="100"></progress>
                        <div class="reading-actions">
                            <button onclick="window.updateProgress(${book.id})">Update</button>
                            <button onclick="window.markAsFinished(${book.id})">Selesai</button>
                        </div>
                    </div>
                `;
                currentlyReadingList.appendChild(bookElement);
            }
        }

        finishedBooks.forEach(bookId => {
            const book = books.find(b => b.id == bookId);
            if (book) {
                const bookElement = document.createElement('div');
                bookElement.className = 'reading-card simple';
                bookElement.innerHTML = `
                    <img src="${book.cover}" alt="${book.title}">
                    <h4>${book.title}</h4>
                `;
                finishedReadingList.appendChild(bookElement);
            }
        });
    }

    function filterBooks() {
        const searchText = searchInput.value.toLowerCase();
        const selectedGenre = genreFilter.value;
        const filteredBooks = books.filter(book => {
            const matchesSearch = book.title.toLowerCase().includes(searchText) || book.author.toLowerCase().includes(searchText);
            const matchesGenre = selectedGenre === 'all' || book.genre === selectedGenre;
            return matchesSearch && matchesGenre;
        });
        displayBooks(filteredBooks);
    }
    
    function populateGenreFilter() {
        const genres = ['all', ...new Set(books.map(book => book.genre))];
        genreFilter.innerHTML = '';
        genres.forEach(genre => {
            const option = document.createElement('option');
            option.value = genre;
            option.textContent = genre === 'all' ? 'Semua Genre' : genre;
            genreFilter.appendChild(option);
        });
    }

    // --- 5. LOGIKA BARU UNTUK SLIDER TEMA ---
    const themes = ['light', 'dark', 'sepia', 'slate', 'winter', 'matcha'];

    function applyTheme(themeIndex) {
        const themeName = themes[themeIndex];
        document.body.setAttribute('data-theme', themeName);
        themeLabel.textContent = themeName.charAt(0).toUpperCase() + themeName.slice(1);
        localStorage.setItem('selectedThemeIndex', themeIndex);
    }

    themeSlider.addEventListener('input', () => {
        applyTheme(themeSlider.value);
    });
    
    // --- 6. EVENT LISTENERS & INISIALISASI ---
    searchInput.addEventListener('input', filterBooks);
    genreFilter.addEventListener('change', filterBooks);

    // Memuat tema yang tersimpan dan inisialisasi halaman
    const savedThemeIndex = localStorage.getItem('selectedThemeIndex') || 0;
    themeSlider.value = savedThemeIndex;
    applyTheme(savedThemeIndex);

    populateGenreFilter();
    displayBooks(books);
    displayReadingStatus();
});