// StickNext Wiki Data
const wikiData = {
  factions: [
    {
      id: 'celestian-order',
      name: 'Celestian Order',
      emoji: '🌌',
      type: 'Protagonis',
      color: '#FFD700',
      origin: 'Lahir dari sisa‑sisa manusia terakhir yang berevolusi menjadi Stickman Elite. Membawa cahaya kosmik sebagai warisan terakhir umat manusia.',
      identity: {
        race: 'Stickman Elite (manusia terakhir yang berevolusi)',
        role: 'Guardian cahaya, pelindung Vextoria',
        symbol: 'Sigil berbentuk bintang kosmik dengan lingkaran emas',
        philosophy: 'Semua telah membelot dan cahaya adalah warisan terakhir, kami adalah penjaganya.'
      },
      leaders: [
        { name: 'Lumirelia', role: 'High Guardian', desc: 'Pemimpin elegan penuh cahaya' },
        { name: 'Auremelis', role: 'Sorceress kosmik', desc: 'Pengendali energi bintang' },
        { name: 'Arvenor', role: 'Komandan heroik', desc: 'Pemimpin pasukan Stickman Elite' },
        { name: 'Valtheris', role: 'Knight of Radiance', desc: 'Rival yang akhirnya jadi sekutu setia' },
        { name: 'Mr sovie7', role: 'Pengamat & detektif', desc: 'Sering menyamar dan menyusup' },
        { name: 'Velanora & Verliana', role: 'Twin Protectors', desc: 'Saudari cahaya yang menjaga harmoni' }
      ],
      missions: [
        'Melindungi Vextoria dari serangan Dominion Abyss dan para pembelot',
        'Membimbing Dummy agar tidak jatuh ke dalam pengaruh abyss',
        'Menjaga cahaya kosmik sebagai warisan terakhir umat manusia',
        'Menghadapi Chaos Rebels dengan diplomasi atau pertempuran',
        'Menyelamatkan sandra di X00X dan menjadi pelindung tambahan dummy'
      ],
      conflicts: [
        'Rivalitas dengan Dominion Abyss → perang abadi antara cahaya dan kegelapan',
        'Hubungan rumit dengan Chaos Rebels → kadang sekutu, kadang musuh',
        'Aliansi dengan Dummy → sering jadi partner Dummy rank tinggi',
        'X00X menjadi ancaman tambahan sebagai terorris berdasi dingin'
      ]
    },
    {
      id: 'dominion-abyss',
      name: 'Dominion Abyss',
      emoji: '🌑',
      type: 'Antagonis',
      color: '#8B0000',
      origin: 'Lahir dari Stickman Elite yang menolak cahaya kosmik. Memilih kegelapan, menyatu dengan energi abyss dan virus digital.',
      identity: {
        race: 'Stickman Elite Abyss',
        role: 'Antagonis utama, penguasa kegelapan dan penghancur cahaya',
        symbol: 'Mahkota hitam dengan mata merah menyala',
        philosophy: 'Cahaya adalah kelemahan. Abyss adalah kekuatan sejati.'
      },
      leaders: [
        { name: 'Valdrex', role: 'Overlord Abyss', desc: 'Pemimpin brutal, komandan penghancur' },
        { name: 'Devastator', role: 'Titan Abyss', desc: 'Mesin perang Stickman Elite' },
        { name: 'Darkmela', role: 'Sorceress bayangan', desc: 'Pengendali kutukan abyss' },
        { name: 'Vexstarna', role: 'Mistress of Void', desc: 'Ahli manipulasi energi gelap' },
        { name: 'Ventagonis', role: 'Strategis abyss', desc: 'Mastermind perang' },
        { name: 'Zeravon & Drovianth', role: 'Jenderal abyss', desc: 'Komandan pasukan' },
        { name: 'Abyssinia & Veldraxna', role: 'High Priestess abyss', desc: 'Pemuja kegelapan kosmik' }
      ],
      missions: [
        'Menguasai Vextoria dengan menyebarkan Manipulasi dan energi abyss',
        'Menghancurkan Celestian Order sebagai simbol cahaya terakhir',
        'Menguasai Dummy dengan korupsi rank tinggi agar jadi pasukan abyss',
        'Menciptakan dunia baru di mana hanya kegelapan yang berkuasa'
      ],
      conflicts: [
        'Perang abadi dengan Celestian Order → cahaya vs kegelapan',
        'Aliansi gelap dengan Devibot → bekerja sama dengan Dummy jahat',
        'Chaos Rebels sebagai wildcard → kadang membantu, kadang menghancurkan'
      ]
    },
    {
      id: 'chaos-rebels',
      name: 'Chaos Rebels',
      emoji: '⚡',
      type: 'Wildcard',
      color: '#9D4EDD',
      origin: 'Lahir dari Stickman Elite yang menolak aturan cahaya maupun kegelapan. Ras stickman, hasil benturan energi kosmik dengan sistem digital Vextoria.',
      identity: {
        race: 'Stickman Elite Chaos',
        role: 'Wildcard faction, unpredictable, penuh twist',
        symbol: 'Sigil glitch neon dengan garis patah',
        philosophy: 'Kami bukan cahaya, bukan gelap. Kami adalah kebebasan.'
      },
      leaders: [
        { name: 'Luckdrose & LuckNova', role: 'Trickster kosmik', desc: 'Suka main peluang dan nasib' },
        { name: 'Skyskan & Bluenaste', role: 'Rebel glitch', desc: 'Suka bikin Dummy bingung' },
        { name: 'Robix & Amongveldra', role: 'Hacker chaos', desc: 'Bisa merusak sistem digital Vextoria' },
        { name: 'Strablacks & Godorwickeds', role: 'Komandan chaos', desc: 'Brutal tapi penuh humor gelap' },
        { name: 'Lovine, Pinkila, euphoria', role: 'Rebel feminin', desc: 'Genit, penuh drama' },
        { name: 'Touiswiki Anvar', role: 'Rebel eksperimental', desc: 'Simbol chaos murni' }
      ],
      missions: [
        'Mengacaukan perang antara Celestian Order dan Dominion Abyss',
        'Menguji Dummy dengan rintangan dan sabotase',
        'Mencari kebebasan tanpa aturan, tanpa hierarki',
        'Menciptakan twist yang bikin semua pihak tidak bisa memprediksi'
      ],
      conflicts: [
        'Sekutu sementara Celestian Order → kadang bantu, tapi demi kepentingan sendiri',
        'Pengkhianatan brutal → bisa gabung Dominion Abyss untuk chaos lebih besar',
        'Dummy sebagai korban glitch → sering bikin Dummy rank rendah jadi rusak sistem'
      ]
    },
    {
      id: 'x00x-mafia',
      name: 'X00X (Thardensi Vex Lee Light Black)',
      emoji: '🎩',
      type: 'Terorisme',
      color: '#1C1C1C',
      origin: 'Aliansi mafia yang tersebar luas dengan struktur hierarki ketat. Mereka adalah terorisme yang ditakuti oleh seluruh negara Vextoria.',
      identity: {
        race: 'Stickman & Manusia (bukan robot)',
        role: 'Teroris, pengghasut untuk tindakan jahat',
        symbol: 'Seragam putih dengan dasi hitam dan jas hitam',
        philosophy: 'Suara tembakan senjata api adalah penyemangat bagi kami'
      },
      leaders: [
        { name: 'Trovans Ben', role: 'Pemimpin', desc: 'Kepala aliansi X00X' },
        { name: 'Rommance garben', role: 'Komandan', desc: 'Koordinator operasi' },
        { name: 'Belion Loken', role: 'Panglima', desc: 'Pemimpin pertempuran' }
      ],
      missions: [
        'Merebut kekayaan Vextoria',
        'Menjatuhkan presiden dan mengambil alih negara',
        'Menghasut semua orang untuk bertindak kejam dan sadis',
        'Merusuh dan membuat kekacauan di tempat‑tempat penting'
      ],
      ranks: [
        { title: 'TrhadenSen', desc: 'Tingkat atas/pemimpin - bijak, licik, sangat jahat' },
        { title: 'Trhadelite', desc: 'Tingkat tertinggi - sangat baik, presisi, elite, profesional' },
        { title: 'TrhadenBill', desc: 'Tingkat tinggi - sangat licik, egois, jahat' },
        { title: 'TrhadenVil', desc: 'Tingkat sedang - cukup baik dalam mengerjakan misi' },
        { title: 'Trhaden', desc: 'Pemula - masih mencoba‑coba dan berlatih' }
      ],
      weapons: ['MP5', 'AK47', 'M16', 'SCAR', 'Thomson', 'KV74', 'SP1', 'Glock17', 'Lostent 12B (custom)'],
      headquarters: 'Pesawat super besar di luar angkasa, seukuran bulan - menjadi pusat komando, pelatihan, dan pembuatan senjata'
    }
  ],
  world: {
    name: 'Vextoria',
    description: 'Kota teknologi tinggi yang dipenuhi ancaman digital. Virus seperti malware, trojan, ransomware, dan spyware menyebar cepat.',
    features: [
      'Setiap robot memiliki Firewall Chip di kepala mereka',
      'Jika waktu chip habis, mereka rentan terhadap infeksi',
      'Transportasi unik: mobil, helikopter, tank punya kesadaran dan bisa berbicara',
      'Kereta tidak hidup karena terlalu rentan terhadap virus digital'
    ],
    zones: [
      {
        name: 'Zona Freeze',
        desc: 'Sangat dingin, penuh teknologi beku dan kereta penghancur es'
      },
      {
        name: 'Zona Heat',
        desc: 'Sangat panas, banyak robot overheat dan rel memuai'
      },
      {
        name: 'Zona Netral',
        desc: 'Tempat aman bagi manusia, dummy, dan drone hidup'
      }
    ],
    technology: {
      trains: 'Dikendalikan AI, tidak punya kesadaran, rel berliku, roda memakai magnet super kuat, rem menggunakan gaya tarik medan magnetik',
      vehicles: 'Mobil, tank, drone bisa berbicara dan punya emosi. Drone dianggap seperti kucing oleh manusia',
      tpz: 'Terror Plane Zones - pesawat super sebesar roket luar angkasa, tajam dan aerodinamis, sering melewati zona Freeze'
    }
  },
  characters: {
    dummy: {
      title: 'Dummy',
      description: 'Makhluk digital yang punya kesadaran, berjuang melindungi manusia',
      notable: [
        { name: 'Rinabot', status: 'Hidup kembali', role: 'Protector' },
        { name: 'Limenbot', status: 'Hidup kembali', role: 'Protector' },
        { name: 'Bluenbot', status: 'Hidup kembali', role: 'Protector' },
        { name: 'Devibot', status: 'Antagonis', desc: 'Dummy bermata merah, brutal dan sadis, dengan mahkota hitam' },
        { name: 'Delvanbot', status: 'Tragedy', desc: 'Anak Devibot, punya luka di wajah, baik tapi dipaksa jahat' },
        { name: 'Verliabot', status: 'Antagonis', desc: 'Dummy perempuan kejam, sadis dan genit' }
      ]
    }
  },
  motto: 'Go To Future',
  tagline: 'Dunia Digital Penuh Jiwa dan Ancaman'
};