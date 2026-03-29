📱 TESTING GUIDE - MOBILE RESPONSIVENESS
=========================================

Panduan lengkap untuk menguji wiki StickNext di berbagai ukuran dan orientasi layar.

🎯 RESPONSIVE BREAKPOINTS:
==========================

✅ Desktop (1200px+)
   - Navbar dengan menu horizontal penuh
   - Grid cards 3 kolom
   - Layout normal

✅ Laptop/Desktop Kecil (1024px - 1199px)
   - Navbar menu masih horizontal
   - Grid cards auto-fit
   - Padding berkurang sedikit

✅ Tablet (768px - 1023px)
   - Navbar menu masih horizontal tapi lebih compact
   - Grid cards 2 kolom
   - Padding & font ukuran sedang

✅ Large Phone/Tablet Portrait (481px - 767px)
   - HAMBURGER MENU AKTIF ☰
   - Grid cards 1 kolom
   - Font lebih kecil tapi tetap readable
   - Touch-friendly buttons (min 44px)

✅ Small Phone Portrait (320px - 480px)
   - HAMBURGER MENU AKTIF ☰
   - Grid cards 1 kolom
   - Font sangat kecil tapi tetap readable
   - Maximum padding reduction

✅ Tablet Landscape (768px+ width, landscape)
   - Navbar menu horizontal
   - Grid cards 2 kolom
   - Compact layout

✅ Phone Landscape (max 767px width, landscape)
   - HAMBURGER MENU AKTIF ☰
   - Grid cards 1 kolom
   - Kompak vertikal ukuran minimal

---

🧪 CARA TESTING DI BROWSER:
============================

1️⃣ GOOGLE CHROME / EDGE / FIREFOX:
   
   a) Buka wiki di browser
   b) Tekan F12 (atau Ctrl+Shift+I) → DevTools terbuka
   c) Klik icon "Toggle device toolbar" (simbol 📱)
      atau Ctrl+Shift+M
   d) Pilih device dari dropdown atau resize manual
   
   Device Presets yang bisa dicoba:
   - iPhone SE (375 x 667)
   - iPhone 12 (390 x 844)
   - iPhone 14 Pro Max (430 x 932)
   - iPad (768 x 1024)
   - iPad Air (820 x 1180)
   - Galaxy S21 (360 x 800)
   - Pixel 7 (412 x 915)
   - Custom: 320x568, 481x854, 768x1024, dst

2️⃣ SAFARI (Mac):
   - Buka Preferences → Advanced → Show Develop menu
   - Menu Develop → Enter Responsive Design Mode
   - Pilih device atau custom size

3️⃣ MANUAL BROWSER RESIZE:
   - Resize browser window ke ukuran custom
   - Perhatikan perubahan layout di berbagai breakpoints

---

✨ HAL-HAL YANG HARUS DICEK:
===========================

📌 NAVIGATION
   ✓ Desktop (1200px+): Menu horizontal penuh, tidak ada hamburger
   ✓ Tablet (768-1023px): Menu masih horizontal, compact
   ✓ Large Phone (481-767px): Hamburger menu aktif ☰
   ✓ Small Phone (max 480px): Hamburger menu aktif ☰
   ✓ Landscape: Menu responsive sesuai orientasi
   
   Testing hamburger:
   - Click hamburger icon
   - Menu dropdown smooth
   - Click link → menu tutup otomatis
   - X icon hamburger rotate smooth

📌 LAYOUT & SPACING
   ✓ Tidak ada horizontal scrollbar
   ✓ Content tidak tercerter keluar layar
   ✓ Padding konsisten di semua ukuran
   ✓ Text tidak terlalu rapat atau berserakan

📌 TYPOGRAPHY
   ✓ Text readable di semua ukuran
   ✓ Heading ukuran sesuai
   ✓ Body text tidak terlalu kecil (<12px)
   ✓ Kontras warna cukup

📌 BUTTONS & INTERACTIVE ELEMENTS
   ✓ Min height 44px untuk touch devices
   ✓ Spacing antar tombol cukup
   ✓ Hover/active states terlihat jelas
   ✓ Search button & input responsive

📌 CARDS & GRIDS
   ✓ Desktop: 3 kolom
   ✓ Tablet: 2 kolom
   ✓ Phone: 1 kolom
   ✓ Cards tidak terlalu besar/kecil

📌 MODAL & DETAIL PAGES
   ✓ Faction detail readable di mobile
   ✓ Leader cards stacked di phone
   ✓ Scroll smooth tanpa jitter
   ✓ Footer tidak overlapping content

📌 FORMS & INPUT
   ✓ Search input full width di mobile
   ✓ Font size 16px+ (prevent zoom on iOS)
   ✓ Keyboard tidak hide content penting
   ✓ Submit button easy to tap

📌 IMAGES (Saat ditambah nanti)
   ✓ Responsive sizes
   ✓ Tidak load oversized images
   ✓ Lazy loading untuk kecepatan

📌 ACCESSIBILITY
   ✓ Touch target min 44x44px
   ✓ Color contrast WCAG AA minimum
   ✓ Text readable without zoom
   ✓ Semantic HTML structure

---

🔄 ORIENTATION TESTING:
=======================

PORTRAIT (0°):
- Normal orientation
- Height 2x width
- Contoh: 390px width, 844px height

LANDSCAPE (90°):
- Rotated 90 derajat
- Width 2x height
- Contoh: 844px width, 390px height

Testing:
1. Buka wiki di device/browser mobile
2. Rotate device dari portrait ke landscape
3. Perhatikan layout berubah smooth
4. Click hamburger menu di landscape
5. Content tetap accessible

---

🚀 COMMON ISSUES & FIXES:
=========================

❌ Horizontal scrollbar muncul
   ✓ Check CSS max-width: 100% pada body
   ✓ Pastikan padding tidak melebihi width
   ✓ Remove overflow-x atau set ke hidden

❌ Text terlalu kecil di mobile
   ✓ Check media queries font-size
   ✓ Min font-size 12px untuk body text
   ✓ Heading min 1.2em

❌ Hamburger menu tidak work
   ✓ Check app.js setupEventListeners()
   ✓ Verify menu-toggle & navMenu IDs
   ✓ Check CSS display: flex di mobile

❌ Content terpotong di landscape kecil
   ✓ Set max-height pada nav-menu
   ✓ Add overflow: auto untuk scrollable menu
   ✓ Reduce padding di landscape

❌ Buttons terlalu kecil
   ✓ Min height/width 44px
   ✓ Adequate padding
   ✓ Check touch target size

❌ Input field zoom di iOS
   ✓ Set font-size minimum 16px
   ✓ Use -webkit-appearance: none
   ✓ Set initial-scale=1.0

---

📊 DEVICE TESTING CHECKLIST:
=============================

[ ] iPhone SE (375 x 667) - Portrait
[ ] iPhone SE (667 x 375) - Landscape
[ ] iPhone 12 (390 x 844) - Portrait
[ ] iPhone 12 (844 x 390) - Landscape
[ ] iPhone 14 Pro Max (430 x 932) - Portrait
[ ] iPhone 14 Pro Max (932 x 430) - Landscape
[ ] iPad (768 x 1024) - Portrait
[ ] iPad (1024 x 768) - Landscape
[ ] iPad Air (820 x 1180) - Portrait
[ ] iPad Air (1180 x 820) - Landscape
[ ] Galaxy S21 (360 x 800) - Portrait
[ ] Galaxy S21 (800 x 360) - Landscape
[ ] Pixel 7 (412 x 915) - Portrait
[ ] Pixel 7 (915 x 412) - Landscape
[ ] Custom 320px (Phone 6) - Portrait & Landscape
[ ] Custom 480px (Phone 7+) - Portrait & Landscape
[ ] Custom 1920px (Desktop) - Full size

---

📝 PERFORMANCE TESTING:
=======================

DevTools Performance:
1. F12 → Performance tab
2. Record page load
3. Look for:
   - First Contentful Paint (FCP)
   - Largest Contentful Paint (LCP)
   - Cumulative Layout Shift (CLS)

Target:
- LCP < 2.5s
- CLS < 0.1
- No janky scrolling

Network Throttling:
1. DevTools → Network tab
2. Set throttling ke "Slow 4G"
3. Test page loading & interactions
4. Should load in <5s

---

✅ SUCCESS CRITERIA:
====================

Wiki dianggap responsive jika:

1. ✅ Tidak ada horizontal scrollbar pada semua ukuran
2. ✅ Navigation beradaptasi (horizontal di desktop, hamburger di mobile)
3. ✅ Hamburger menu smooth open/close
4. ✅ Grid layout berubah sesuai breakpoints (3→2→1 kolom)
5. ✅ Text readable di semua ukuran (min 12px)
6. ✅ Buttons & links min 44x44px
7. ✅ Search input full width di mobile
8. ✅ Tidak ada zooming otomatis di iOS
9. ✅ Layout smooth saat rotate device
10. ✅ Footer tidak overlapping content
11. ✅ Performance acceptable (LCP < 2.5s)
12. ✅ No layout shift saat load

---

🎯 SCREENSHOT POINTS:
====================

Untuk dokumentasi, ambil screenshot di:
- 1920px (Desktop full)
- 1024px (Tablet portrait)
- 768px (Tablet landscape)
- 390px (Phone portrait)
- 844px (Phone landscape)
- 480px landscape
- 320px portrait

---

💡 TESTING TIPS:
================

✓ Test di real device jika bisa (tidak hanya browser)
✓ Test di berbagai browser (Chrome, Safari, Firefox, Edge)
✓ Test dengan different network speeds
✓ Test dengan different OS (iOS, Android, Windows, macOS)
✓ Ask people tapi test devices yourself
✓ Test dengan real content (bukan lorem ipsum)
✓ Test dengan browser extensions enabled
✓ Clear cache sebelum testing (Ctrl+Shift+Del)

---

🚀 SEUPPORT BROWSER REALITY:
============================

✅ Fully Supported:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Android Browser
- Samsung Internet

⚠️ Limited Support:
- IE 11 (NOT supported - too old)
- Opera Mobile (mostly works)

---

Selamat testing! Jika ada issue resistive, report dengan:
- Browser & version
- Device & OS
- Screenshot
- Steps to reproduce

🎮 Happy Testing! 🚀
