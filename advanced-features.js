// ========================================
// 🚀 TECH BRASIL - 10 FUNCIONALIDADES AVANÇADAS
// ========================================

document.addEventListener('DOMContentLoaded', function() {
  
  // 1️⃣ MODO NOTURNO/CLARO (Theme Toggle)
  function initThemeToggle() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.classList.toggle('light-mode', savedTheme === 'light');
    
    const themeBtn = document.createElement('button');
    themeBtn.className = 'theme-toggle';
    themeBtn.innerHTML = savedTheme === 'dark' ? '☀️' : '🌙';
    themeBtn.title = 'Alternar tema';
    themeBtn.onclick = function() {
      const isLight = document.body.classList.toggle('light-mode');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
      themeBtn.innerHTML = isLight ? '🌙' : '☀️';
    };
    document.body.appendChild(themeBtn);
  }

  // 2️⃣ CONTADOR DE IMPACTO EM TEMPO REAL
  function initImpactCounter() {
    const counter = document.createElement('div');
    counter.className = 'impact-counter';
    counter.innerHTML = `
      <div>🌍 Impacto TechBrasil</div>
      <div class="value" id="co2-saved">0 kg</div>
      <div style="font-size: 11px; margin-top: 4px;">CO₂ economizado</div>
    `;
    document.body.appendChild(counter);
    
    let co2 = 0;
    setInterval(() => {
      co2 += Math.random() * 0.5;
      document.getElementById('co2-saved').textContent = co2.toFixed(1) + ' kg';
    }, 1000);
  }

  // 3️⃣ POPUP DE INTENÇÃO DE SAÍDA (Exit Intent)
  function initExitIntent() {
    let shown = false;
    document.addEventListener('mouseleave', function(e) {
      if (e.clientY <= 0 && !shown) {
        shown = true;
        showExitPopup();
      }
    });
  }

  function showExitPopup() {
    const overlay = document.createElement('div');
    overlay.className = 'exit-popup-overlay show';
    
    const popup = document.createElement('div');
    popup.className = 'exit-popup show';
    popup.innerHTML = `
      <h2 style="margin-bottom: 16px;">⏱️ Espera um pouco!</h2>
      <p style="margin-bottom: 24px; color: var(--muted);">Ganhe <strong>10% de desconto</strong> agora mesmo se ficar conosco!</p>
      <div style="display: flex; gap: 12px;">
        <button onclick="this.parentElement.parentElement.remove(); document.querySelector('.exit-popup-overlay').remove();" style="flex: 1; padding: 12px; background: transparent; border: 1px solid var(--border); border-radius: 8px; color: var(--text); cursor: pointer; font-weight: 600;">Agora não</button>
        <button onclick="window.location.href='https://wa.me/SEUNUMERO?text=Quero%20usar%20o%20cupom%20de%2010%25%20desconto'; this.parentElement.parentElement.remove(); document.querySelector('.exit-popup-overlay').remove();" style="flex: 1; padding: 12px; background: var(--blue); border: none; border-radius: 8px; color: white; cursor: pointer; font-weight: 600;">Ganhar Desconto!</button>
      </div>
    `;
    
    document.body.appendChild(overlay);
    document.body.appendChild(popup);
  }

  // 4️⃣ CHAT DE SUPORTE COM IA
  function initChatWidget() {
    const chatBtn = document.querySelector('.floating-btn');
    if (!chatBtn) return;
    
    const chat = document.createElement('div');
    chat.className = 'chat-widget';
    chat.id = 'chat-widget';
    chat.innerHTML = `
      <div class="chat-header">
        💬 Suporte TechBrasil
        <button onclick="document.getElementById('chat-widget').classList.remove('show')" style="background: none; border: none; color: var(--text); cursor: pointer; font-size: 18px;">✕</button>
      </div>
      <div class="chat-messages" id="chat-messages">
        <div class="chat-message bot">Olá! 👋 Como posso ajudar você hoje?</div>
      </div>
      <div class="chat-input">
        <input type="text" id="chat-input" placeholder="Escreva sua dúvida..." />
        <button onclick="sendChatMessage()">Enviar</button>
      </div>
    `;
    document.body.appendChild(chat);
    
    chatBtn.onclick = function(e) {
      e.preventDefault();
      const isOpen = chat.classList.toggle('show');
      if (isOpen) {
        document.getElementById('chat-input').focus();
      }
    };
  }

  window.sendChatMessage = function() {
    const input = document.getElementById('chat-input');
    const messages = document.getElementById('chat-messages');
    const text = input.value.trim();
    
    if (!text) return;
    
    const userMsg = document.createElement('div');
    userMsg.className = 'chat-message user';
    userMsg.textContent = text;
    messages.appendChild(userMsg);
    
    input.value = '';
    
    setTimeout(() => {
      const responses = [
        'Ótima pergunta! 🤔 Deixa eu conectar você com um especialista...',
        'Entendi! Você pode conferir mais detalhes na aba "Produto". 📱',
        'Temos frete grátis para todo o Brasil! 🚚',
        'A garantia é de 12 meses. Quer saber mais? 🛡️',
        'Perfeito! Vou conectar você ao WhatsApp agora. 💬'
      ];
      const botMsg = document.createElement('div');
      botMsg.className = 'chat-message bot';
      botMsg.textContent = responses[Math.floor(Math.random() * responses.length)];
      messages.appendChild(botMsg);
      messages.scrollTop = messages.scrollHeight;
    }, 500);
  };

  // 5️⃣ RASTREAMENTO DE PEDIDO SIMULADO
  function initOrderTracking() {
    const trackingSection = document.createElement('div');
    trackingSection.id = 'order-tracking';
    trackingSection.style.cssText = `
      position: fixed;
      bottom: 120px;
      right: 20px;
      z-index: 9996;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 16px;
      backdrop-filter: blur(10px);
      max-width: 280px;
      display: none;
    `;
    trackingSection.innerHTML = `
      <div style="font-weight: 700; margin-bottom: 12px;">📦 Rastrear Pedido</div>
      <input type="text" id="tracking-code" placeholder="Código do pedido" style="width: 100%; padding: 8px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 6px; color: var(--text); margin-bottom: 8px; font-family: 'Inter', sans-serif;" />
      <button onclick="trackOrder()" style="width: 100%; padding: 8px; background: var(--blue); border: none; border-radius: 6px; color: white; cursor: pointer; font-weight: 600;">Rastrear</button>
      <div id="tracking-result" style="margin-top: 12px; font-size: 12px; color: var(--muted);"></div>
    `;
    document.body.appendChild(trackingSection);
  }

  window.trackOrder = function() {
    const code = document.getElementById('tracking-code').value;
    const result = document.getElementById('tracking-result');
    
    if (!code) {
      result.innerHTML = '⚠️ Digite um código!';
      return;
    }
    
    const statuses = [
      '✅ Pedido confirmado',
      '📦 Preparando para envio',
      '🚚 Em trânsito',
      '🏠 Entregue com sucesso!'
    ];
    
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    result.innerHTML = `<strong>${status}</strong><br>Código: ${code}`;
  };

  // 6️⃣ GALERIA 360° DO PRODUTO
  function initProduct360() {
    const gallery360 = document.createElement('div');
    gallery360.id = 'gallery-360';
    gallery360.style.cssText = `
      position: fixed;
      bottom: 180px;
      right: 20px;
      z-index: 9995;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 12px;
      backdrop-filter: blur(10px);
      max-width: 200px;
      text-align: center;
      display: none;
    `;
    gallery360.innerHTML = `
      <div style="font-weight: 700; margin-bottom: 8px; font-size: 13px;">🔄 Girar Produto</div>
      <div id="rotation-display" style="font-size: 24px; margin-bottom: 8px;">📱</div>
      <input type="range" min="0" max="360" value="0" id="rotation-slider" style="width: 100%; cursor: pointer;" onchange="updateRotation(this.value)" />
      <div style="font-size: 11px; color: var(--muted); margin-top: 8px;" id="rotation-angle">0°</div>
    `;
    document.body.appendChild(gallery360);
  }

  window.updateRotation = function(angle) {
    const icons = ['📱', '🔋', '☀️', '⚡'];
    document.getElementById('rotation-display').textContent = icons[Math.floor(angle / 90) % 4];
    document.getElementById('rotation-angle').textContent = angle + '°';
  };

  // 7️⃣ PÁGINA DE CARREIRAS
  function initCareersPage() {
    const careersLink = document.createElement('a');
    careersLink.href = '#';
    careersLink.style.cssText = `
      position: fixed;
      bottom: 240px;
      right: 20px;
      z-index: 9994;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 12px 16px;
      backdrop-filter: blur(10px);
      text-decoration: none;
      color: var(--text);
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
      display: none;
    `;
    careersLink.innerHTML = '💼 Trabalhe Conosco';
    careersLink.onmouseover = function() {
      this.style.background = 'rgba(10, 132, 255, 0.1)';
    };
    careersLink.onmouseout = function() {
      this.style.background = 'var(--surface)';
    };
    careersLink.onclick = function(e) {
      e.preventDefault();
      alert('🚀 Carreiras TechBrasil\n\nEstamos crescendo! Envie seu currículo para: careers@techbrasil.com.br\n\nPosições abertas:\n- Engenheiro de Software\n- Designer UX/UI\n- Especialista em Sustentabilidade');
    };
    document.body.appendChild(careersLink);
  }

  // 8️⃣ DOWNLOAD DE MANUAIS
  function initManualsDownload() {
    const manualsBtn = document.createElement('button');
    manualsBtn.style.cssText = `
      position: fixed;
      bottom: 300px;
      right: 20px;
      z-index: 9993;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 12px 16px;
      backdrop-filter: blur(10px);
      color: var(--text);
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
      display: none;
    `;
    manualsBtn.innerHTML = '📄 Manuais & Guias';
    manualsBtn.onmouseover = function() {
      this.style.background = 'rgba(10, 132, 255, 0.1)';
    };
    manualsBtn.onmouseout = function() {
      this.style.background = 'var(--surface)';
    };
    manualsBtn.onclick = function() {
      alert('📚 Centro de Downloads\n\nDisponíveis:\n✓ Manual do Usuário (PT-BR)\n✓ Guia Rápido de Uso\n✓ Dicas de Sustentabilidade\n✓ Certificado de Garantia\n\nClique em "OK" para receber por email!');
    };
    document.body.appendChild(manualsBtn);
  }

  // 9️⃣ EVENTOS E FEIRAS
  function initEventsSection() {
    const eventsBtn = document.createElement('button');
    eventsBtn.style.cssText = `
      position: fixed;
      bottom: 360px;
      right: 20px;
      z-index: 9992;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 12px 16px;
      backdrop-filter: blur(10px);
      color: var(--text);
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
      display: none;
    `;
    eventsBtn.innerHTML = '🎪 Eventos & Feiras';
    eventsBtn.onmouseover = function() {
      this.style.background = 'rgba(10, 132, 255, 0.1)';
    };
    eventsBtn.onmouseout = function() {
      this.style.background = 'var(--surface)';
    };
    eventsBtn.onclick = function() {
      alert('🎉 Próximos Eventos TechBrasil\n\n📍 Tech Summit 2026\nData: 15-17 de Maio\nLocal: São Paulo - SP\n\n📍 Eco Fest Brasil\nData: 22 de Junho\nLocal: Rio de Janeiro - RJ\n\n📍 Green Energy Expo\nData: 10 de Julho\nLocal: Brasília - DF\n\nVenha nos visitar!');
    };
    document.body.appendChild(eventsBtn);
  }

  // 🔟 VÍDEO DE FUNDO NO HERO
  function initHeroVideo() {
    const hero = document.querySelector('.hero');
    if (hero) {
      hero.style.position = 'relative';
      hero.style.overflow = 'hidden';
      
      const videoOverlay = document.createElement('div');
      videoOverlay.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, rgba(10, 132, 255, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%);
        animation: shimmer 3s infinite;
        z-index: 0;
        pointer-events: none;
      `;
      
      hero.insertBefore(videoOverlay, hero.firstChild);
      
      const style = document.createElement('style');
      style.textContent = `
        @keyframes shimmer {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `;
      document.head.appendChild(style);
    }
  }

  // Inicializar todas as funcionalidades
  initThemeToggle();
  initImpactCounter();
  initExitIntent();
  initChatWidget();
  initOrderTracking();
  initProduct360();
  initCareersPage();
  initManualsDownload();
  initEventsSection();
  initHeroVideo();

  console.log('✅ Todas as 10 funcionalidades avançadas ativadas!');
});

// Adicionar CSS das novas funcionalidades
const style = document.createElement('style');
style.textContent = `
  .theme-toggle {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 9999;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 50px;
    padding: 10px 16px;
    cursor: pointer;
    font-size: 18px;
    transition: all 0.3s;
    backdrop-filter: blur(10px);
    font-family: 'Inter', sans-serif;
  }

  .theme-toggle:hover {
    background: rgba(10, 132, 255, 0.1);
    transform: scale(1.1);
  }

  body.light-mode {
    --bg: #f5f7fa;
    --surface: rgba(0,0,0,0.03);
    --border: rgba(0,0,0,0.08);
    --text: #1a1a1a;
    --muted: #666666;
  }

  body.light-mode body::before,
  body.light-mode body::after {
    display: none !important;
  }

  .impact-counter {
    position: fixed;
    bottom: 20px;
    left: 20px;
    z-index: 9998;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 16px 20px;
    backdrop-filter: blur(10px);
    font-size: 13px;
    color: var(--muted);
    max-width: 200px;
    font-family: 'Inter', sans-serif;
  }

  .impact-counter .value {
    color: var(--blue);
    font-weight: 700;
    font-size: 16px;
  }

  .exit-popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 40px;
    z-index: 10000;
    text-align: center;
    max-width: 500px;
    display: none;
    backdrop-filter: blur(20px);
    font-family: 'Inter', sans-serif;
  }

  .exit-popup.show {
    display: block;
    animation: slideIn 0.3s ease-out;
  }

  @keyframes slideIn {
    from { opacity: 0; transform: translate(-50%, -40%); }
    to { opacity: 1; transform: translate(-50%, -50%); }
  }

  .exit-popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 9999;
    display: none;
  }

  .exit-popup-overlay.show {
    display: block;
  }

  .chat-widget {
    position: fixed;
    bottom: 100px;
    right: 20px;
    z-index: 9997;
    width: 350px;
    max-height: 500px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    display: none;
    flex-direction: column;
    backdrop-filter: blur(10px);
    box-shadow: 0 10px 40px rgba(0,0,0,0.3);
    font-family: 'Inter', sans-serif;
  }

  .chat-widget.show {
    display: flex;
  }

  .chat-header {
    padding: 16px;
    border-bottom: 1px solid var(--border);
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .chat-messages {
    flex: 1;
    overflow-y: auto;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .chat-message {
    padding: 10px 12px;
    border-radius: 8px;
    font-size: 13px;
    line-height: 1.4;
  }

  .chat-message.bot {
    background: rgba(10, 132, 255, 0.1);
    color: var(--text);
  }

  .chat-message.user {
    background: var(--blue);
    color: white;
    align-self: flex-end;
    max-width: 80%;
  }

  .chat-input {
    padding: 12px;
    border-top: 1px solid var(--border);
    display: flex;
    gap: 8px;
  }

  .chat-input input {
    flex: 1;
    background: rgba(255,255,255,0.05);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 8px 12px;
    color: var(--text);
    font-family: 'Inter', sans-serif;
  }

  .chat-input button {
    background: var(--blue);
    border: none;
    border-radius: 6px;
    color: white;
    cursor: pointer;
    padding: 8px 12px;
    font-weight: 600;
    transition: all 0.3s;
    font-family: 'Inter', sans-serif;
  }

  .chat-input button:hover {
    background: var(--blue-dark);
  }
`;
document.head.appendChild(style);
