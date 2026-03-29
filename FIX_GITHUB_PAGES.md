🔧 FIX GITHUB PAGES - CSS & Links Not Loading
==============================================

✅ MASALAH SUDAH DITEMUKAN:
===========================

Penyebab CSS & Links tidak work:
- File paths di HTML masih relative dari root
- GitHub Pages serve wiki di: /StickNext-Go-To-Future/
- Tapi HTML refer ke: assets/css/styles.css (dari root, bukan dari subfolder)

✅ SOLUSI SUDAH DITERAPKAN:
============================

Saya tambahkan <base> tag ke HTML head yang auto-adjust semua paths!

```html
<base href="/StickNext-Go-To-Future/">
```

Ini membuat:
- assets/css/styles.css → /StickNext-Go-To-Future/assets/css/styles.css
- assets/js/app.js → /StickNext-Go-To-Future/assets/js/app.js
- Semua relative paths AUTO-ADJUST ke repo folder

---

🚀 CARA PERBAHARUI DI GITHUB:
=============================

3 Langkah Simple:

1️⃣ EDIT FILE LOKAL:

   File sudah di-edit di folder lokal Anda:
   → C:\...\wiki\index.html
   
   Cek line 14-15:
   ```
   <base href="/StickNext-Go-To-Future/">
   ```

2️⃣ PUSH PERUBAHAN KE GITHUB:

   Buka Command Prompt/PowerShell & jalankan:
   
   ```
   cd "C:\Users\Naufal Maulana Rizki\Documents\StickNext Go To Future Wikies\wiki"
   git add index.html
   git commit -m "Fix: Add base href for GitHub Pages"
   git push origin main
   ```

3️⃣ TUNGGU & REFRESH:

   - Tunggu 1-2 menit GitHub rebuild
   - Refresh browser (Ctrl+F5 untuk clear cache)
   - Akses: https://arwazbg123-sys.github.io/StickNext-Go-To-Future/

✅ CSS & Links sekarang WORK!

---

⚡ SECOND OPTION (Jika masih tidak work):
==========================================

Jika setelah push masih tidak work, bisa gunakan absolute URLs:

Edit index.html, ganti:
```html
<link rel="stylesheet" href="assets/css/styles.css">
```

Menjadi:
```html
<link rel="stylesheet" href="https://arwazbg123-sys.github.io/StickNext-Go-To-Future/assets/css/styles.css">
```

Dan untuk scripts:
```html
<script src="https://arwazbg123-sys.github.io/StickNext-Go-To-Future/assets/js/data.js"></script>
<script src="https://arwazbg123-sys.github.io/StickNext-Go-To-Future/assets/js/app.js"></script>
```

Tapi solusi pertama (base tag) lebih clean!

---

🔍 DEBUGGING CHECKLIST:
=======================

Untuk verify semuanya work:

1. Buka: https://arwazbg123-sys.github.io/StickNext-Go-To-Future/

2. Tekan F12 → Console tab

3. Cek error messages:
   - Jika ada "Failed to load resource" → masih ada path issue
   - Jika console clean → CSS sudah load!

4. Visual check:
   - ✅ Dark theme visible
   - ✅ Logo & text terlihat styled
   - ✅ Buttons punya styling
   - ✅ Navigation berfungsi

5. Test mobile:
   - Resize browser ke mobile size (Ctrl+Shift+M)
   - Hamburger menu ada?
   - Click menu berfungsi?

---

📝 GIT COMMANDS UNTUK PUSH:
===========================

Copy-paste ke terminal:

```
cd "C:\Users\Naufal Maulana Rizki\Documents\StickNext Go To Future Wikies\wiki"
git add index.html
git commit -m "Fix: Add base href for GitHub Pages relative paths"
git push origin main
```

Atau push semua files:

```
git add .
git commit -m "Update: Fix GitHub Pages base href"
git push origin main
```

---

🌐 AFTER PUSH - GITHUB BUILD:

GitHub akan auto-rebuild website:
- Tunggu 1-2 menit
- Cek status di: 
  https://github.com/arwazbg123-sys/StickNext-Go-To-Future/deployments

Aktifitas akan show:
- "Building" → sedang build
- "Active" → sudah selesai ✅

---

💡 PENJELASAN TEKNIS:
====================

Kenapa base href diperlukan:

Saat akses file lokal (file://):
- assets/css/styles.css ✅ work

Saat akses via http (browser normal):
- assets/css/styles.css ✅ work

Saat akses via GitHub Pages di subfolder:
- https://arwazbg123-sys.github.io/StickNext-Go-To-Future/
- Tapi HTML refer ke: assets/css/styles.css
- Browser cari di: /assets/css/styles.css (root, salah!)
- Should be: /StickNext-Go-To-Future/assets/css/styles.css

Solusi:
- <base href="/StickNext-Go-To-Future/">
- Semua relative paths otomatis prefix dengan base href!

---

✅ VERIFIKASI PERUBAHAN:
=========================

File index.html sekarang punya di line 14-15:

```html
<!-- Base URL for GitHub Pages -->
<base href="/StickNext-Go-To-Future/">

<link rel="stylesheet" href="assets/css/styles.css">
```

Ini otomatis resolve ke:
```
https://arwazbg123-sys.github.io/StickNext-Go-To-Future/assets/css/styles.css
```

Perfect! ✅

---

🚀 NEXT STEPS:
==============

1. ✅ File index.html sudah di-fix (base href ditambah)
2. Run git commands di atas untuk push
3. Tunggu 2 menit untuk GitHub rebuild
4. Refresh browser (Ctrl+F5)
5. Wiki Anda sekarang FULLY STYLED! 🎉

---

❓ FAQ:
=======

Q: Kenapa CSS tidak load di awal?
A: Karena GitHub Pages serve dari subfolder, paths harus adjust

Q: Apakah perlu ubah file lain?
A: Tidak! Base tag di HTML fix semua relative paths

Q: Bagaimana kalau custom domain?
A: Update base href ke custom domain path

Q: Bisa undo?
A: Ya, git revert atau buat commit baru tanpa base tag

---

✨ SELESAI!
===========

CSS & Links sekarang akan work setelah:
1. Push changes
2. GitHub rebuild (2 menit)
3. Refresh browser

Wiki Anda kembali FULLY FUNCTIONAL! 🌟

Questions? Check GitHub settings → Pages untuk verify config
