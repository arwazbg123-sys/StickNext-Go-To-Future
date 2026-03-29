// StickNext Wiki - Main Application

class StickNextWiki {
  constructor() {
    this.currentPage = 'home';
    this.searchResults = [];
    this.currentTheme = localStorage.getItem('theme') || 'dark';
    this.init();
  }

  init() {
    this.setupTheme();
    this.setupEventListeners();
    this.setupScrollReveal();
    this.setupScrollToTop();
    this.render('home');
  }

  // Theme Toggle
  setupTheme() {
    const isDarkMode = this.currentTheme === 'dark';
    document.body.classList.toggle('dark-mode', isDarkMode);
    document.body.classList.toggle('light-mode', !isDarkMode);
    
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
      themeBtn.textContent = isDarkMode ? '☀️' : '🌙';
      themeBtn.addEventListener('click', () => this.toggleTheme());
    }
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', this.currentTheme);
    this.setupTheme();
  }

  // Scroll to Top
  setupScrollToTop() {
    const scrollBtn = document.getElementById('scrollToTop');
    if (!scrollBtn) return;

    window.addEventListener('scroll', () => {
      scrollBtn.classList.toggle('show', window.scrollY > 300);
    });

    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Scroll Reveal Animation
  setupScrollReveal() {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, { threshold: 0.05, rootMargin: '0px' });

      // Observe all reveal elements that exist now
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(el => {
        observer.observe(el);
        // If element is already in viewport, add active immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('active');
        }
      });
    }
  }

  setupEventListeners() {
    // Hamburger Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle) {
      menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
      });
    }
    
    // Close menu when link is clicked
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.dataset.page;
        
        // Close menu
        if (menuToggle) {
          menuToggle.classList.remove('active');
          navMenu.classList.remove('active');
        }
        
        this.render(page);
      });
    });

    // Search
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    if (searchBtn) {
      searchBtn.addEventListener('click', () => this.search());
    }
    if (searchInput) {
      searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') this.search();
      });
    }

    // Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => this.switchTab(e));
    });

    // Faction Quick Select (if exists)
    document.querySelectorAll('.faction-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        document.querySelectorAll('.faction-tab').forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        const factionId = e.target.dataset.faction;
        this.renderFactionDetail(factionId);
      });
    });
  }

  render(page) {
    this.currentPage = page;
    const content = document.getElementById('content');
    
    // Update nav active state
    document.querySelectorAll('nav a').forEach(link => {
      link.classList.remove('active');
      if (link.dataset.page === page) link.classList.add('active');
    });

    if (page === 'home') {
      content.innerHTML = this.renderHome();
    } else if (page === 'factions') {
      content.innerHTML = this.renderFactions();
    } else if (page === 'characters') {
      content.innerHTML = this.renderCharacters();
    } else if (page === 'world') {
      content.innerHTML = this.renderWorld();
    }

    // Re-setup event listeners for new content
    setTimeout(() => {
      this.setupEventListeners();
      this.setupScrollReveal();
    }, 100);
    window.scrollTo(0, 0);
  }

  renderHome() {
    return `
      <div class="hero reveal">
        <h1>STICkNEXT</h1>
        <p class="tagline">${wikiData.tagline}</p>
        <p class="motto">🚀 ${wikiData.motto}</p>
      </div>

      <div class="search-box reveal">
        <input type="text" id="searchInput" placeholder="Cari faction, karakter, atau lore...">
        <button id="searchBtn">🔍 Cari</button>
      </div>

      <section>
        <h2 class="reveal">📚 Tentang StickNext</h2>
        <div class="faction-detail reveal card-glow">
          <p>StickNext adalah dunia digital penuh dengan jiwa dan ancaman. Tiga aliansi utama berjuang untuk menguasai negara <span class="highlight">Vextoria</span>:</p>
          <ul style="margin-top: 20px;">
            <li><span class="highlight">🌌 Celestian Order</span> - Guardian cahaya yang melindungi keseimbangan dengan filosofi harapan</li>
            <li><span class="highlight">🌑 Dominion Abyss</span> - Kekuatan kegelapan yang ingin menghancurkan cahaya terakhir</li>
            <li><span class="highlight">⚡ Chaos Rebels</span> - Wildcard faction yang mencari kebebasan tanpa aturan</li>
            <li><span class="highlight">🎩 X00X Mafia</span> - Terorisme yang mengacaukan seluruh negara</li>
          </ul>
        </div>
      </section>

      <!-- Quick Faction Selector -->
      <div class="faction-tabs">
        ${wikiData.factions.map(f => `
          <button class="faction-tab ${f.id === 'celestian-order' ? 'active' : ''}" data-faction="${f.id}">
            ${f.emoji} ${f.name}
          </button>
        `).join('')}
      </div>

      <section>
        <h2 class="reveal">⚔️ Aliansi Utama</h2>
        <div class="card-grid">
          ${wikiData.factions.map((faction, idx) => `
            <div class="card card-glow reveal ${idx % 2 === 0 ? 'left' : 'right'}" onclick="wiki.renderFactionDetail('${faction.id}')">
              <div class="card-header">
                <div class="card-emoji">${faction.emoji}</div>
                <div>
                  <div class="card-title">${faction.name}</div>
                  <div class="card-type">${faction.type}</div>
                </div>
              </div>
              <div class="card-content" style="margin-top: 15px;">
                ${faction.origin}
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <section>
        <h2 class="reveal">🌍 Dunia Vextoria</h2>
        <div class="faction-detail reveal card-glow">
          <h3>Tentang Vextoria</h3>
          <p>${wikiData.world.description}</p>
          <h3 style="margin-top: 20px;">Fitur Utama:</h3>
          <ul>
            ${wikiData.world.features.map(f => `<li>${f}</li>`).join('')}
          </ul>
        </div>
      </section>
    `;
  }

  renderFactions() {
    return `
      <section>
        <h2>⚔️ Semua Aliansi</h2>
        <div class="search-box reveal">
          <input type="text" id="searchInput" placeholder="Cari aliansi...">
          <button id="searchBtn">Cari</button>
        </div>

        <!-- Faction Quick Select -->
        <div class="faction-tabs">
          ${wikiData.factions.map(f => `
            <button class="faction-tab" data-faction="${f.id}">
              ${f.emoji} ${f.name}
            </button>
          `).join('')}
        </div>

        ${wikiData.factions.map((faction, idx) => `
          <div class="card card-glow reveal ${idx % 2 === 0 ? 'left' : 'right'}" style="margin-bottom: 20px; cursor: pointer;" onclick="wiki.renderFactionDetail('${faction.id}')">
            <div class="card-header">
              <div class="card-emoji" style="font-size: 3em;">${faction.emoji}</div>
              <div>
                <div class="card-title" style="font-size: 1.8em;">${faction.name}</div>
                <div class="card-type">${faction.type}</div>
              </div>
            </div>
          </div>
        `).join('')}
      </section>
    `;
  }

  renderFactionDetail(factionId) {
    const faction = wikiData.factions.find(f => f.id === factionId);
    if (!faction) return;

    const content = document.getElementById('content');
    content.innerHTML = `
      <section>
        <div class="faction-detail reveal card-glow">
          <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 30px;">
            <div style="font-size: 4em; animation: float 3s ease-in-out infinite;">${faction.emoji}</div>
            <div>
              <h1 style="font-size: 2.5em; color: var(--secondary); margin: 0;">${faction.name}</h1>
              <p style="color: var(--primary); font-size: 1.2em; margin-top: 10px;">${faction.type}</p>
            </div>
          </div>

          <h3 class="reveal">📖 Asal Usul</h3>
          <p class="reveal">${faction.origin}</p>

          <h3 class="reveal">✨ Identitas</h3>
          <div class="reveal" style="background: rgba(255, 255, 255, 0.03); padding: 20px; border-radius: 8px; margin: 15px 0; border-left: 4px solid var(--primary);">
            <p><strong>Ras:</strong> ${faction.identity.race}</p>
            <p><strong>Peran:</strong> ${faction.identity.role}</p>
            <p><strong>Simbol:</strong> ${faction.identity.symbol}</p>
            <p><strong>Filosofi:</strong> <em>"${faction.identity.philosophy}"</em></p>
          </div>

          ${faction.leaders ? `
            <h3 class="reveal">⚔️ Tokoh Utama</h3>
            <div class="leader-grid">
              ${faction.leaders.map(leader => `
                <div class="leader-card reveal card-glow">
                  <div class="leader-name">${leader.name}</div>
                  <div class="leader-role">${leader.role}</div>
                  <div class="leader-desc">${leader.desc}</div>
                </div>
              `).join('')}
            </div>
          ` : ''}

          ${faction.missions ? `
            <h3 class="reveal">🔥 Misi Utama</h3>
            <ol class="reveal" style="margin-left: 20px;">
              ${faction.missions.map(m => `<li style="margin: 10px 0;">${m}</li>`).join('')}
            </ol>
          ` : ''}

          ${faction.conflicts ? `
            <h3 class="reveal">🎬 Konflik Utama</h3>
            <ul class="reveal">
              ${faction.conflicts.map(c => `<li>${c}</li>`).join('')}
            </ul>
          ` : ''}

          ${faction.ranks ? `
            <h3 class="reveal">📊 Struktur Hierarki</h3>
            <div class="reveal" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; margin: 15px 0;">
              ${faction.ranks.map(r => `
                <div class="card-glow" style="background: rgba(255, 255, 255, 0.05); padding: 15px; border-radius: 8px; border-left: 3px solid var(--primary); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'">
                  <strong style="color: var(--secondary);">${r.title}</strong>
                  <p style="margin-top: 8px; color: var(--text);">${r.desc}</p>
                </div>
              `).join('')}
            </div>
          ` : ''}

          ${faction.weapons ? `
            <h3 class="reveal">🔫 Senjata</h3>
            <p class="reveal">${faction.weapons.join(', ')}</p>
          ` : ''}

          ${faction.headquarters ? `
            <h3 class="reveal">🏰 Markas</h3>
            <p class="reveal">${faction.headquarters}</p>
          ` : ''}
        </div>

        <div class="reveal" style="margin-top: 30px;">
          <button onclick="wiki.render('factions')" style="padding: 12px 25px; background: var(--primary); color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 1em;">
            ← Kembali ke Aliansi
          </button>
        </div>
      </section>
    `;

    window.scrollTo(0, 0);
    this.setupScrollReveal();
  }

  renderCharacters() {
    return `
      <section>
        <h2 class="reveal">👥 Karakter</h2>
        <div class="search-box reveal">
          <input type="text" id="searchInput" placeholder="Cari karakter...">
          <button id="searchBtn">Cari</button>
        </div>

        <div class="faction-detail reveal card-glow">
          <h3>🤖 Dummy</h3>
          <p>${wikiData.characters.dummy.description}</p>
          
          <h4 style="margin-top: 20px;">Tokoh Penting Dummy:</h4>
          <div class="leader-grid">
            ${wikiData.characters.dummy.notable.map(char => `
              <div class="leader-card reveal card-glow">
                <div class="leader-name">${char.name}</div>
                <div class="leader-role">${char.status}</div>
                <div class="leader-desc">${char.desc || char.role}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="faction-detail reveal card-glow" style="margin-top: 30px;">
          <h3>🧬 Lemari Karakter - Semua Tokoh Utama</h3>
          <p style="margin-bottom: 20px;">Daftar lengkap semua tokoh utama dari masing-masing aliansi:</p>
          
          ${wikiData.factions.filter(f => f.leaders).map(faction => `
            <div class="reveal" style="background: rgba(255, 255, 255, 0.03); padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h4 style="color: var(--secondary); margin-bottom: 15px;">
                ${faction.emoji} ${faction.name}
              </h4>
              <div class="leader-grid">
                ${faction.leaders.map(leader => `
                  <div class="leader-card card-glow">
                    <div class="leader-name">${leader.name}</div>
                    <div class="leader-role">${leader.role}</div>
                    <div class="leader-desc">${leader.desc}</div>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }

  renderWorld() {
    return `
      <section>
        <h2 class="reveal">🌍 Dunia Vextoria</h2>
        
        <div class="faction-detail reveal card-glow">
          <h3>🏙️ Tentang Vextoria</h3>
          <p style="font-size: 1.1em; color: var(--secondary); margin-bottom: 20px;">
            "${wikiData.world.description}"
          </p>

          <h3 style="margin-top: 30px;">⚙️ Fitur Teknologi & Sistem</h3>
          <ul>
            ${wikiData.world.features.map(f => `<li>${f}</li>`).join('')}
          </ul>

          <h3 style="margin-top: 30px;">🚄 Sistem Transportasi</h3>
          <div class="reveal" style="background: rgba(255, 255, 255, 0.05); padding: 20px; border-radius: 8px; margin: 15px 0; border-left: 4px solid var(--primary);">
            <p><strong>Kereta & Rel:</strong> ${wikiData.world.technology.trains}</p>
          </div>
          <div class="reveal" style="background: rgba(255, 255, 255, 0.05); padding: 20px; border-radius: 8px; margin: 15px 0; border-left: 4px solid var(--primary);">
            <p><strong>Kendaraan Hidup:</strong> ${wikiData.world.technology.vehicles}</p>
          </div>
          <div class="reveal" style="background: rgba(255, 255, 255, 0.05); padding: 20px; border-radius: 8px; margin: 15px 0; border-left: 4px solid var(--primary);">
            <p><strong>TPZ (Terror Plane Zones):</strong> ${wikiData.world.technology.tpz}</p>
          </div>
        </div>

        <div class="faction-detail reveal card-glow" style="margin-top: 30px;">
          <h3>🗺️ Zona-Zona Vextoria</h3>
          ${wikiData.world.zones.map(zone => `
            <div class="zone-card reveal">
              <h4>${zone.name}</h4>
              <p>${zone.desc}</p>
            </div>
          `).join('')}
        </div>

        <div class="faction-detail reveal card-glow" style="margin-top: 30px;">
          <h3>⚠️ Ancaman Digital</h3>
          <p>Vextoria adalah kota yang penuh ancaman digital. Virus seperti:</p>
          <ul>
            <li>Malware - Perangkat lunak berbahaya yang merusak sistem</li>
            <li>Trojan - Program yang menyamar untuk masuk ke sistem</li>
            <li>Ransomware - Virus yang memeras dengan mengenkripsi data</li>
            <li>Spyware - Program yang memata-matai aktivitas pengguna</li>
          </ul>
          <p style="margin-top: 20px;">Itulah mengapa setiap robot dilengkapi dengan <span class="highlight">Firewall Chip</span> untuk melindungi diri dari infeksi digital.</p>
        </div>
      </section>
    `;
  }

  search() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    if (!query) return;

    const results = [];

    // Cari di factions
    wikiData.factions.forEach(faction => {
      if (faction.name.toLowerCase().includes(query) ||
          faction.origin.toLowerCase().includes(query)) {
        results.push({
          type: 'Aliansi',
          title: faction.name,
          content: faction.origin,
          emoji: faction.emoji,
          action: `wiki.renderFactionDetail('${faction.id}')`
        });
      }

      // Cari di leaders
      faction.leaders?.forEach(leader => {
        if (leader.name.toLowerCase().includes(query) ||
            leader.desc.toLowerCase().includes(query)) {
          results.push({
            type: 'Karakter',
            title: leader.name,
            content: `${leader.role} - ${leader.desc}`,
            emoji: faction.emoji,
            faction: faction.name
          });
        }
      });
    });

    // Tampilkan hasil
    const content = document.getElementById('content');
    if (results.length === 0) {
      content.innerHTML = `
        <section>
          <h2>🔍 Hasil Pencarian</h2>
          <div class="warning reveal">
            <p>Tidak ada hasil untuk "<span class="highlight">${query}</span>"</p>
          </div>
        </section>
      `;
    } else {
      content.innerHTML = `
        <section>
          <h2 class="reveal">🔍 Hasil Pencarian (${results.length})</h2>
          <p class="reveal" style="margin-bottom: 20px;">Ditemukan <span class="highlight">${results.length}</span> hasil untuk "<span class="highlight">${query}</span>"</p>
          <div class="card-grid">
            ${results.map((result, idx) => `
              <div class="card card-glow reveal ${idx % 2 === 0 ? 'left' : 'right'}" ${result.action ? `onclick="${result.action}"` : ''}>
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                  <span>${result.emoji}</span>
                  <span style="color: var(--primary); font-size: 0.85em; font-weight: bold;">${result.type}</span>
                </div>
                <h3 style="color: var(--secondary); margin: 10px 0;">${result.title}</h3>
                <p>${result.content.substring(0, 150)}...</p>
                ${result.faction ? `<p style="color: var(--primary); font-size: 0.9em; margin-top: 10px;">📍 ${result.faction}</p>` : ''}
              </div>
            `).join('')}
          </div>
        </section>
      `;
    }

    window.scrollTo(0, 0);
    this.setupScrollReveal();
  }

  switchTab(event) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    
    event.target.classList.add('active');
    const tabId = event.target.dataset.tab;
    document.getElementById(tabId)?.classList.add('active');
  }
}

// Initialize wiki when page loads
let wiki;
document.addEventListener('DOMContentLoaded', () => {
  wiki = new StickNextWiki();
});