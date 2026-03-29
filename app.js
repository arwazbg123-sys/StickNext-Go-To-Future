// StickNext Wiki - Main Application

class StickNextWiki {
  constructor() {
    this.currentPage = 'home';
    this.searchResults = [];
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.render('home');
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
    setTimeout(() => this.setupEventListeners(), 100);
    window.scrollTo(0, 0);
  }

  renderHome() {
    return `
      <div class="hero">
        <h1>STICkNEXT</h1>
        <p class="tagline">${wikiData.tagline}</p>
        <p class="motto">🚀 ${wikiData.motto}</p>
      </div>

      <div class="search-box">
        <input type="text" id="searchInput" placeholder="Cari faction, karakter, atau lore...">
        <button id="searchBtn">Cari</button>
      </div>

      <section>
        <h2>📚 Tentang StickNext</h2>
        <div class="faction-detail">
          <p>StickNext adalah dunia digital penuh dengan jiwa dan ancaman. Tiga aliansi utama berjuang untuk menguasai negara <span class="highlight">Vextoria</span>:</p>
          <ul style="margin-top: 20px;">
            <li><span class="highlight">🌌 Celestian Order</span> - Guardian cahaya yang melindungi keseimbangan dengan filosofi harapan</li>
            <li><span class="highlight">🌑 Dominion Abyss</span> - Kekuatan kegelapan yang ingin menghancurkan cahaya terakhir</li>
            <li><span class="highlight">⚡ Chaos Rebels</span> - Wildcard faction yang mencari kebebasan tanpa aturan</li>
            <li><span class="highlight">🎩 X00X Mafia</span> - Terorisme yang mengacaukan seluruh negara</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>⚔️ Aliansi Utama</h2>
        <div class="card-grid">
          ${wikiData.factions.map(faction => `
            <div class="card" onclick="wiki.renderFactionDetail('${faction.id}')">
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
        <h2>🌍 Dunia Vextoria</h2>
        <div class="faction-detail">
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
        <div class="search-box">
          <input type="text" id="searchInput" placeholder="Cari aliansi...">
          <button id="searchBtn">Cari</button>
        </div>
        ${wikiData.factions.map(faction => `
          <div class="card" style="margin-bottom: 20px; cursor: pointer;" onclick="wiki.renderFactionDetail('${faction.id}')">
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
        <div class="faction-detail">
          <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 30px;">
            <div style="font-size: 4em;">${faction.emoji}</div>
            <div>
              <h1 style="font-size: 2.5em; color: var(--secondary); margin: 0;">${faction.name}</h1>
              <p style="color: var(--primary); font-size: 1.2em; margin-top: 10px;">${faction.type}</p>
            </div>
          </div>

          <h3>📖 Asal Usul</h3>
          <p>${faction.origin}</p>

          <h3>✨ Identitas</h3>
          <div style="background: rgba(255, 255, 255, 0.03); padding: 20px; border-radius: 8px; margin: 15px 0;">
            <p><strong>Ras:</strong> ${faction.identity.race}</p>
            <p><strong>Peran:</strong> ${faction.identity.role}</p>
            <p><strong>Simbol:</strong> ${faction.identity.symbol}</p>
            <p><strong>Filosofi:</strong> <em>"${faction.identity.philosophy}"</em></p>
          </div>

          ${faction.leaders ? `
            <h3>⚔️ Tokoh Utama</h3>
            <div class="leader-grid">
              ${faction.leaders.map(leader => `
                <div class="leader-card">
                  <div class="leader-name">${leader.name}</div>
                  <div class="leader-role">${leader.role}</div>
                  <div class="leader-desc">${leader.desc}</div>
                </div>
              `).join('')}
            </div>
          ` : ''}

          ${faction.missions ? `
            <h3>🔥 Misi Utama</h3>
            <ol style="margin-left: 20px;">
              ${faction.missions.map(m => `<li style="margin: 10px 0;">${m}</li>`).join('')}
            </ol>
          ` : ''}

          ${faction.conflicts ? `
            <h3>🎬 Konflik Utama</h3>
            <ul>
              ${faction.conflicts.map(c => `<li>${c}</li>`).join('')}
            </ul>
          ` : ''}

          ${faction.ranks ? `
            <h3>📊 Struktur Hierarki</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; margin: 15px 0;">
              ${faction.ranks.map(r => `
                <div style="background: rgba(255, 255, 255, 0.05); padding: 15px; border-radius: 8px; border-left: 3px solid var(--primary);">
                  <strong style="color: var(--secondary);">${r.title}</strong>
                  <p style="margin-top: 8px; color: var(--text);">${r.desc}</p>
                </div>
              `).join('')}
            </div>
          ` : ''}

          ${faction.weapons ? `
            <h3>🔫 Senjata</h3>
            <p>${faction.weapons.join(', ')}</p>
          ` : ''}

          ${faction.headquarters ? `
            <h3>🏰 Markas</h3>
            <p>${faction.headquarters}</p>
          ` : ''}
        </div>

        <div style="margin-top: 30px;">
          <button onclick="wiki.render('factions')" style="padding: 12px 25px; background: var(--primary); color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 1em;">
            ← Kembali ke Aliansi
          </button>
        </div>
      </section>
    `;

    window.scrollTo(0, 0);
  }

  renderCharacters() {
    return `
      <section>
        <h2>👥 Karakter</h2>
        <div class="search-box">
          <input type="text" id="searchInput" placeholder="Cari karakter...">
          <button id="searchBtn">Cari</button>
        </div>

        <div class="faction-detail">
          <h3>🤖 Dummy</h3>
          <p>${wikiData.characters.dummy.description}</p>
          
          <h4 style="margin-top: 20px;">Tokoh Penting Dummy:</h4>
          <div class="leader-grid">
            ${wikiData.characters.dummy.notable.map(char => `
              <div class="leader-card">
                <div class="leader-name">${char.name}</div>
                <div class="leader-role">${char.status}</div>
                <div class="leader-desc">${char.desc || char.role}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="faction-detail" style="margin-top: 30px;">
          <h3>🧬 Lemari Karakter - Semua Tokoh Utama</h3>
          <p style="margin-bottom: 20px;">Daftar lengkap semua tokoh utama dari masing-masing aliansi:</p>
          
          ${wikiData.factions.filter(f => f.leaders).map(faction => `
            <div style="background: rgba(255, 255, 255, 0.03); padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h4 style="color: var(--secondary); margin-bottom: 15px;">
                ${faction.emoji} ${faction.name}
              </h4>
              <div class="leader-grid">
                ${faction.leaders.map(leader => `
                  <div class="leader-card">
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
        <h2>🌍 Dunia Vextoria</h2>
        
        <div class="faction-detail">
          <h3>🏙️ Tentang Vextoria</h3>
          <p style="font-size: 1.1em; color: var(--secondary); margin-bottom: 20px;">
            "${wikiData.world.description}"
          </p>

          <h3 style="margin-top: 30px;">⚙️ Fitur Teknologi & Sistem</h3>
          <ul>
            ${wikiData.world.features.map(f => `<li>${f}</li>`).join('')}
          </ul>

          <h3 style="margin-top: 30px;">🚄 Sistem Transportasi</h3>
          <div style="background: rgba(255, 255, 255, 0.05); padding: 20px; border-radius: 8px; margin: 15px 0; border-left: 4px solid var(--primary);">
            <p><strong>Kereta & Rel:</strong> ${wikiData.world.technology.trains}</p>
          </div>
          <div style="background: rgba(255, 255, 255, 0.05); padding: 20px; border-radius: 8px; margin: 15px 0; border-left: 4px solid var(--primary);">
            <p><strong>Kendaraan Hidup:</strong> ${wikiData.world.technology.vehicles}</p>
          </div>
          <div style="background: rgba(255, 255, 255, 0.05); padding: 20px; border-radius: 8px; margin: 15px 0; border-left: 4px solid var(--primary);">
            <p><strong>TPZ (Terror Plane Zones):</strong> ${wikiData.world.technology.tpz}</p>
          </div>
        </div>

        <div class="faction-detail" style="margin-top: 30px;">
          <h3>🗺️ Zona-Zona Vextoria</h3>
          ${wikiData.world.zones.map(zone => `
            <div class="zone-card">
              <h4>${zone.name}</h4>
              <p>${zone.desc}</p>
            </div>
          `).join('')}
        </div>

        <div class="faction-detail" style="margin-top: 30px;">
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
          <div class="warning">
            <p>Tidak ada hasil untuk "<span class="highlight">${query}</span>"</p>
          </div>
        </section>
      `;
    } else {
      content.innerHTML = `
        <section>
          <h2>🔍 Hasil Pencarian (${results.length})</h2>
          <p style="margin-bottom: 20px;">Ditemukan <span class="highlight">${results.length}</span> hasil untuk "<span class="highlight">${query}</span>"</p>
          <div class="card-grid">
            ${results.map(result => `
              <div class="card" ${result.action ? `onclick="${result.action}"` : ''}>
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
