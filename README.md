# 🚀 StickNext Wiki - Go To Future

**Dunia Digital Penuh Jiwa dan Ancaman**

Wiki interaktif untuk animasi universe **StickNext** dengan konten lengkap tentang aliansi, karakter, dan dunia Vextoria.

---

## 📋 Daftar Isi

- [Fitur Utama](#fitur-utama)
- [Struktur Folder](#struktur-folder)
- [Cara Menggunakan](#cara-menggunakan)
- [Dukungan Browser](#dukungan-browser)
- [Pengembangan Lebih Lanjut](#pengembangan-lebih-lanjut)

---

## ✨ Fitur Utama

### 🌌 **4 Aliansi Utama**
1. **Celestian Order** - Guardian cahaya, pelindung Vextoria
2. **Dominion Abyss** - Kekuatan kegelapan, penghancur cahaya
3. **Chaos Rebels** - Wildcard faction yang mencari kebebasan
4. **X00X (Mafia Thardensi)** - Terorisme yang mengacaukan Vextoria

### 👥 **Database Karakter Lengkap**
- Tokoh utama dari setiap aliansi
- Peran dan deskripsi detail
- Status dan hubungan antar karakter

### 🌍 **Informasi Dunia Vextoria**
- Zona-zona penting (Freeze, Heat, Netral)
- Sistem transportasi unik
- Ancaman digital dan perlindungan

### 🔍 **Pencarian Interaktif**
- Cari faction, karakter, atau lore
- Hasil real-time instant
- Filter berdasarkan tipe

### 📱 **Design Responsif**
- Desktop, tablet, dan mobile friendly
- Animasi smooth dan loading cepat
- Dark theme cyberpunk futuristik

---

## 📁 Struktur Folder

```
wiki/
├── index.html                 # Halaman utama
├── assets/
│   ├── css/
│   │   └── styles.css        # Styling keseluruhan
│   ├── js/
│   │   ├── data.js           # Data konten (factions, characters, world)
│   │   └── app.js            # Logika aplikasi & interaktivitas
│   └── images/               # Folder untuk gambar (untuk expansion futur)
└── pages/                    # Folder untuk halaman individual (expansion futur)
```

---

## 🚀 Cara Menggunakan

### **Opsi 1: Buka langsung di browser**
1. Buka folder `wiki/`
2. Double-click pada file `index.html`
3. Wiki akan terbuka secara otomatis di browser default Anda

### **Opsi 2: Server lokal (Recommended)**

**Menggunakan Python:**
```bash
# Python 3.x
python -m http.server 8000

# Atau Python 2.x
python -m SimpleHTTPServer 8000
```
Lalu akses `http://localhost:8000/wiki/`

**Menggunakan Node.js (http-server):**
```bash
npm install -g http-server
http-server wiki
```

**Menggunakan Live Server (VS Code Extension):**
- Install extension "Live Server"
- Right-click `index.html` → "Open with Live Server"

---

## 🎮 Navigasi Wiki

### **Menu Utama**
- 🏠 **Home** - Halaman utama dengan overview
- ⚔️ **Aliansi** - Daftar semua 4 aliansi utama
- 👥 **Karakter** - Database lengkap semua tokoh penting
- 🌍 **Dunia** - Informasi mengenai Vextoria dan teknologinya

### **Fitur Interaktif**
- Click kartu untuk detail lengkap
- Gunakan search bar untuk pencarian cepat
- Hover effect untuk visual feedback
- Smooth animations dan transitions

---

## 🌐 Dukungan Browser

| Browser | Status |
|---------|--------|
| Chrome | ✅ Full Support |
| Firefox | ✅ Full Support |
| Safari | ✅ Full Support |
| Edge | ✅ Full Support |
| IE 11 | ❌ Not Supported |

---

## 🔮 Pengembangan Lebih Lanjut

### **Fitur yang bisa ditambahkan (TODO):**

#### 🎨 **Frontend Enhancements**
```
- [ ] Dark/Light theme toggle
- [ ] Modal popup untuk detail karakter
- [ ] Timeline interaktif peristiwa penting
- [ ] Gallery gambar/artwork
- [ ] Video embeds dari youtube
- [ ] Rating & bookmark favorit
```

#### 📊 **Backend Features (Python)**
```
- [ ] Database MySQL/PostgreSQL untuk data
- [ ] API REST untuk mobile app
- [ ] Admin panel untuk mengelola konten
- [ ] User authentication & profiles
- [ ] Comment system & forum
- [ ] Export konten ke PDF
```

#### 🔧 **Technical Improvements**
```
- [ ] Service Worker untuk offline mode
- [ ] Progressive Web App (PWA)
- [ ] Multi-language support (EN, ID, JP, etc)
- [ ] SEO optimization
- [ ] Analytics integration
- [ ] Performance optimization (lazy loading)
```

---

### **Contoh Script Python untuk Backend Analytics**

```python
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Simple visitor counter
visitors = 0

@app.route('/api/visitors', methods=['GET'])
def get_visitors():
    global visitors
    visitors += 1
    return jsonify({'count': visitors})

@app.route('/api/factions', methods=['GET'])
def get_factions():
    # Redirect ke data.js atau database
    return jsonify({'status': 'ok'})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
```

---

### **Setup Python Backend (Optional)**

Jika ingin menambah backend Python:

```bash
# Install Flask
pip install flask flask-cors

# Buat file app.py di folder wiki/
# Jalankan:
python app.py
```

---

## 🎯 Konten Utama

### **Celestian Order 🌌**
- Protagonis utama
- Guardian cahaya terakhir
- Leader: Lumirelia, Auremelis, Arvenor
- Misi: Melindungi Vextoria dari kegelapan

### **Dominion Abyss 🌑**
- Antagonis utama  
- Penguasa kegelapan
- Leader: Valdrex, Devastator, Darkmela
- Misi: Menguasai dan menghancurkan cahaya

### **Chaos Rebels ⚡**
- Wildcard faction
- Pembuat kacau & penghibur
- Leader: Luckdrose, Skyskan, Robix
- Misi: Mencari kebebasan absolut

### **X00X Mafia 🎩**
- Organisasi terorisme
- Terstruktur hierarki
- Leader: Trovans Ben
- Misi: Menguasai Vextoria melalui kejahatan

---

## 📞 Support & Kontribusi

Jika ada bug atau ingin menambah fitur:
1. Create issue baru
2. Explain bug/request dengan detail
3. Berikan screenshot jika diperlukan

---

## 📝 License

Konten ini mengikuti universe StickNext karya **Growmelia Lea**

Wiki dibuat dengan ❤️ menggunakan HTML5, CSS3, dan JavaScript Vanilla

---

**🚀 Selamat menjelajahi dunia StickNext!**

*"Go To Future"* 🌟
