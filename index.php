<?php
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");

$v = time();
$requestPath = parse_url($_SERVER['REQUEST_URI'] ?? '', PHP_URL_PATH) ?? '';
if (strpos($requestPath, '/app/loop') !== false) {
    $baseDir = '/app/loop/';
} else {
    $baseDir = rtrim(dirname($_SERVER["SCRIPT_NAME"] ?? '/'), "/\\") . "/";
}

$googleClientId = '86183940183-qegicgt1h8biud5vagdhuuug6i68q5km.apps.googleusercontent.com';
$keepConfig = __DIR__ . '/../keepai/api/config.php';
if (file_exists($keepConfig)) {
    $cfg = file_get_contents($keepConfig);
    if (preg_match("/define\(\s*'GOOGLE_CLIENT_ID'\s*,\s*'([^']+)'\s*\)/i", $cfg, $m)) {
        $googleClientId = $m[1];
    }
}
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>Loop - Mensageiro com IA & Criptografia</title>
  <base href="<?php echo htmlspecialchars($baseDir); ?>">
  <link rel="icon" type="image/png" sizes="128x128" href="assets/icon128.png?v=<?php echo $v; ?>">
  <link rel="apple-touch-icon" href="assets/icon128.png?v=<?php echo $v; ?>">
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Orbitron:wght@400;500;700;900&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">
  
  <!-- Estilos customizados (Padrão PowerCalc OLED & Neon) -->
  <link rel="stylesheet" href="style.css?v=<?php echo $v; ?>">
  
  <!-- PWA Manifest -->
  <link rel="manifest" href="manifest.json?v=<?php echo $v; ?>">
  
  <!-- Pre-define Google GSI Callback -->
  <script>
    window._pendingGoogleResponse = null;
    window.handleGoogleLoginResponse = function(response) {
      if (typeof window._realGoogleLoginHandler === 'function') {
        window._realGoogleLoginHandler(response);
      } else {
        window._pendingGoogleResponse = response;
      }
    };
  </script>
  
  <!-- Google Identity Services (Google One Tap & OAuth) -->
  <script src="https://accounts.google.com/gsi/client" async defer></script>
  
  <!-- JavaScript Frontend -->
  <script src="app.js?v=<?php echo $v; ?>" defer></script>
  
  <!-- Service Worker Registration -->
  <script>
    function showUpdateBanner(worker) {
      const banner = document.createElement('div');
      banner.id = 'pwa-update-banner';
      banner.style.position = 'fixed';
      banner.style.bottom = '20px';
      banner.style.right = '20px';
      banner.style.background = 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)';
      banner.style.color = '#fff';
      banner.style.padding = '16px 20px';
      banner.style.borderRadius = '12px';
      banner.style.border = '1px solid #00f0ff';
      banner.style.boxShadow = '0 10px 25px -5px rgba(0, 240, 255, 0.3)';
      banner.style.zIndex = '99999';
      banner.style.display = 'flex';
      banner.style.alignItems = 'center';
      banner.style.gap = '16px';
      banner.style.fontFamily = 'system-ui, -apple-system, sans-serif';
      banner.style.fontSize = '14px';
      
      const text = document.createElement('span');
      text.textContent = 'Uma nova versão do Loop está disponível!';
      
      const btn = document.createElement('button');
      btn.textContent = 'Atualizar';
      btn.style.background = 'linear-gradient(90deg, #00f0ff 0%, #9c27b0 100%)';
      btn.style.border = 'none';
      btn.style.color = '#fff';
      btn.style.padding = '8px 16px';
      btn.style.borderRadius = '8px';
      btn.style.cursor = 'pointer';
      btn.style.fontWeight = 'bold';
      btn.style.transition = 'opacity 0.2s';
      btn.addEventListener('mouseover', () => btn.style.opacity = '0.9');
      btn.addEventListener('mouseout', () => btn.style.opacity = '1');
      
      btn.addEventListener('click', () => {
        worker.postMessage({ action: 'skipWaiting' });
        banner.remove();
      });
      
      banner.appendChild(text);
      banner.appendChild(btn);
      document.body.appendChild(banner);
    }

    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js', { updateViaCache: 'none' })
          .then(reg => {
            console.log('PWA Service Worker registered:', reg.scope);
          })
          .catch(err => console.log('PWA Service Worker registration notice:', err));
      });
    }
  </script>
</head>
<body class="selection:bg-cyan-500 selection:text-white">

  <!-- AUTH SCREEN (OTP Login) -->
  <div id="auth-screen" class="auth-overlay active">
    <div class="auth-card">
      <div class="auth-logo">
        <img src="assets/icon128.png" alt="Loop" class="logo-img">
      </div>
      <h2>Bem-vindo ao Loop</h2>
      <p id="auth-subtitle">Mensagens descentralizadas, comunidades premium e IA integrada.</p>
      
      <form id="auth-form" class="auth-form">
        <!-- Step 1: Email Request / Google Login -->
        <div id="auth-step-email" class="form-step">
          <!-- Google One Tap & Sign-in Button -->
          <div class="google-auth-container" id="google-auth-container">
            <div id="g_id_onload"
                 data-client_id="<?php echo htmlspecialchars($googleClientId); ?>"
                 data-context="signin"
                 data-ux_mode="popup"
                 data-callback="handleGoogleLoginResponse"
                 data-auto_prompt="false">
            </div>
            <button type="button" class="btn-google-login" id="btn-google-login">
              <svg width="20" height="20" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/><path fill="#FF3D00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"/><path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/></svg>
              <span>Continuar com o Google</span>
            </button>
            <div id="g_id_signin_rendered" style="display:none;"></div>
          </div>

          <div class="auth-divider">
            <span>OU COM E-MAIL E CÓDIGO</span>
          </div>

          <label class="form-label" for="auth-email">E-MAIL INSTITUCIONAL OU PESSOAL</label>
          <div class="input-container">
            <input type="email" id="auth-email" class="form-input" placeholder="exemplo@4u.ia.br" required autocomplete="email">
          </div>
          <button type="button" id="btn-send-otp" class="submit-btn">Receber Código de Acesso</button>
        </div>

        <!-- Step 2: OTP Verification -->
        <div id="auth-step-otp" class="form-step hidden">
          <label class="form-label">DIGITE O CÓDIGO DE 6 DÍGITOS</label>
          <div class="otp-inputs">
            <input type="text" maxlength="1" class="otp-digit" data-idx="0">
            <input type="text" maxlength="1" class="otp-digit" data-idx="1">
            <input type="text" maxlength="1" class="otp-digit" data-idx="2">
            <input type="text" maxlength="1" class="otp-digit" data-idx="3">
            <input type="text" maxlength="1" class="otp-digit" data-idx="4">
            <input type="text" maxlength="1" class="otp-digit" data-idx="5">
          </div>
          <p class="resend-text">Não recebeu? <span id="btn-resend-otp">Enviar novamente</span></p>
          <button type="button" id="btn-verify-otp" class="submit-btn">Verificar e Acessar</button>
        </div>

        <!-- Step 3: Registration Profile -->
        <div id="auth-step-register" class="form-step hidden">
          <label class="form-label" for="reg-username">NOME DE USUÁRIO ÚNICO (@username)</label>
          <input type="text" id="reg-username" class="form-input" placeholder="ex: fabio" required>
          
          <label class="form-label" for="reg-name" style="margin-top: 10px;">NOME DE EXIBIÇÃO</label>
          <input type="text" id="reg-name" class="form-input" placeholder="ex: Fabio Braga" required>

          <label class="form-label" style="margin-top: 10px;">FOTO DE PERFIL (AVATAR)</label>
          <div class="avatar-select-grid">
            <div class="avatar-option selected" data-avatar="DEFAULT">👤</div>
            <div class="avatar-option" data-avatar="👨‍💻">👨‍💻</div>
            <div class="avatar-option" data-avatar="🚀">🚀</div>
            <div class="avatar-option" data-avatar="🤖">🤖</div>
            <div class="avatar-option" data-avatar="⚡">⚡</div>
            <div class="avatar-option" id="btn-custom-avatar" style="border: 1px dashed var(--accent-cyan); font-size: 20px; display: flex; align-items: center; justify-content: center;" title="Enviar imagem própria">➕</div>
            <input type="file" id="reg-avatar-input" accept="image/*" style="display: none;">
          </div>
          
          <button type="submit" id="btn-complete-register" class="submit-btn" style="margin-top: 15px;">Criar Conta Instantânea</button>
        </div>
      </form>
      <div class="auth-footer" style="text-align: center; margin-top: 20px; padding-top: 15px; border-top: 1px dashed var(--border-color);">
        <p style="font-size: 10px; color: var(--text-muted); line-height: 1.5; margin: 0;">
          &copy; 2026 Loop. Todos os direitos reservados.<br>
          Desenvolvido com amor por <a href="https://4u.ia.br" target="_blank" style="color: var(--accent-cyan); font-weight: bold; text-decoration: none; transition: color 0.2s;" class="hover:text-cyan-400">4u.ia.br</a>
        </p>
      </div>
    </div>
  </div>

  <!-- MAIN APP CONTAINER -->
  <div id="app-container" class="app-container">
    
    <!-- SIDEBAR NAV (Padrão PowerCalc) -->
    <aside class="sidebar">
      <div class="logo-area" id="logo-link">
        <img src="assets/icon128.png" alt="Loop" class="logo-img">
      </div>
      <div class="sidebar-divider"></div>
      
      <!-- NAV ITEMS -->
      <button class="nav-item active" data-view="chats" title="Chats">
        <span class="nav-icon"><img src="assets/nav_chats.png" alt="Chats" class="nav-img-icon"></span>
        <span class="nav-label">Chats</span>
      </button>
      <button class="nav-item" data-view="communities" title="Grupos">
        <span class="nav-icon"><img src="assets/nav_grupos.png" alt="Grupos" class="nav-img-icon"></span>
        <span class="nav-label">Grupos</span>
      </button>
      <button class="nav-item" data-view="search" title="Busca IA">
        <span class="nav-icon"><img src="assets/nav_buscar.png" alt="Buscar" class="nav-img-icon"></span>
        <span class="nav-label">Buscar</span>
      </button>
      <button class="nav-item" data-view="profile" title="Meu Perfil">
        <span class="nav-icon"><img src="assets/nav_perfil.png" alt="Perfil" class="nav-img-icon"></span>
        <span class="nav-label">Perfil</span>
      </button>
      
      <div class="sidebar-divider" style="margin-top: auto;"></div>
      <button class="nav-item" id="btn-theme-toggle" title="Alterar Tema">
        <span class="nav-icon">🌓</span>
        <span class="nav-label">Tema</span>
      </button>
    </aside>

    <!-- CONTENT PANES -->
    <main class="main-content">
      
      <!-- HEADER -->
      <header class="app-header">
        <div class="header-left">
          <h1 id="view-title" class="view-title font-orbitron">Loop</h1>
          <span class="e2ee-status" title="Chaves locais seguras"><span class="e2ee-dot"></span> E2EE<span class="hide-mobile"> Ativo</span></span>
        </div>
        <div class="header-actions">
          <span class="premium-badge hidden" id="user-premium-badge">⚡ PREMIUM</span>
          <span class="credits-badge hidden" id="user-credits-badge" style="background: rgba(0, 210, 255, 0.1); border: 1px solid var(--accent-cyan); color: var(--accent-cyan); padding: 4px 10px; border-radius: 20px; font-size: 10px; font-weight: bold; font-family: monospace; margin-right: 8px;">🪙 <span class="hide-mobile">Saldo: </span>0</span>
          <div class="user-pill" id="header-user-pill">
            <span class="user-avatar-emoji">👨‍💻</span>
            <span class="user-username">@carregando</span>
          </div>
        </div>
      </header>

      <!-- VIEW: CHATS -->
      <section id="pane-chats" class="view-pane active">
        <div class="pane-split">
          <!-- Chat list (Left) -->
          <div class="chat-list-sidebar">
            <div class="chat-search-header-row" style="display: flex; gap: 8px; margin-bottom: 8px;">
              <div class="search-bar-wrap" style="flex: 1; position: relative; display: flex; align-items: center;">
                <input type="text" id="chat-search" class="recessed-input" placeholder="Buscar ou @usuario..." style="padding-right: 30px;" autocomplete="off" spellcheck="false">
                <span id="btn-clear-chat-search" style="position: absolute; right: 12px; z-index: 10; cursor: pointer; color: var(--text-muted); font-size: 18px; display: none; user-select: none; font-weight: bold;">&times;</span>
              </div>
              <button class="submit-btn" id="btn-open-start-chat" title="Conversar com @usuario" style="width: auto; padding: 0 12px; font-size: 12px; white-space: nowrap; display: flex; align-items: center; gap: 4px;">➕ @</button>
            </div>
            <div class="chat-items-container" id="chat-list-items">
              <!-- Dynamically populated -->
            </div>
          </div>

          <!-- Chat window (Right) -->
          <div class="chat-window-container">
            <div id="no-chat-selected" class="no-chat-state">
              <span class="logo-watermark">∞</span>
              <h3>Selecione uma conversa para começar</h3>
              <p>Suas mensagens estão protegidas por chaves ponta a ponta locais.</p>
            </div>
            
            <div id="active-chat-window" class="active-chat-state hidden">
              <!-- Chat Header -->
              <div class="chat-header">
                <div class="chat-header-left">
                  <button class="back-btn" id="btn-back-to-list">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="font-size: 20px;"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"></path></svg>
                  </button>
                  <div class="chat-avatar" id="chat-window-avatar">💬</div>
                  <div class="chat-header-info">
                    <h3 id="chat-window-title">Conversa</h3>
                    <span id="chat-window-subtitle" class="text-muted">online</span>
                  </div>
                </div>
                <div class="chat-header-actions">
                  <button class="header-btn" id="btn-audio-call" title="Chamada de Voz P2P">📞<span class="btn-text"> Voz</span></button>
                  <button class="header-btn" id="btn-video-call" title="Chamada de Vídeo P2P">📹<span class="btn-text"> Vídeo</span></button>
                  <div class="ephemeral-dropdown-wrap" style="position: relative; display: inline-block;">
                    <button class="header-btn" id="btn-ephemeral-menu" title="Mensagens Temporárias">⏳<span class="btn-text" id="lbl-ephemeral-status"> Off</span></button>
                    <div class="ephemeral-popover hidden" id="ephemeral-popover">
                      <div class="popover-header">⏳ Autodestruição</div>
                      <button class="ephemeral-opt" data-ttl="0">Desativado</button>
                      <button class="ephemeral-opt" data-ttl="30">⏱️ 30 segundos</button>
                      <button class="ephemeral-opt" data-ttl="300">⏱️ 5 minutos</button>
                      <button class="ephemeral-opt" data-ttl="3600">⏱️ 1 hora</button>
                      <button class="ephemeral-opt" data-ttl="86400">⏱️ 24 horas</button>
                    </div>
                  </div>
                  <button class="header-btn hidden" id="btn-invite-chat" title="Copiar Link de Convite">🔗<span class="btn-text"> Convidar</span></button>
                  <button class="header-btn hidden" id="btn-members-chat" title="Ver Membros e Moderação">👥<span class="btn-text"> Membros</span></button>
                  <button class="header-btn" id="btn-summarize" title="Resumir conversa por IA">✨<span class="btn-text"> Resumir</span></button>
                  <button class="header-btn" id="btn-translate-chat" title="Traduzir em Tempo Real">🌐<span class="btn-text"> Traduzir</span></button>
                </div>
              </div>

              <!-- Pinned Message Header Banner -->
              <div id="pinned-message-bar" class="pinned-message-bar hidden">
                <span class="pin-icon">📌</span>
                <div class="pin-info" id="pin-info-text">
                  <span class="pin-title">Mensagem Fixada:</span>
                  <span class="pin-snippet" id="pin-snippet-text">...</span>
                </div>
                <button class="pin-close-btn" id="btn-unpin-current" title="Desafixar mensagem">×</button>
              </div>

              <!-- Message History -->
              <div class="messages-container" id="chat-messages-history">
                <!-- Dynamically populated messages -->
              </div>

              <!-- Translation Status bar -->
              <div id="translation-bar" class="translation-bar hidden">
                <span>🌐 Tradução simultânea ativa: <strong>Português ⇄ Inglês</strong></span>
                <span class="translation-close" id="btn-close-translation">×</span>
              </div>

              <!-- AI Tasks & Events Notification box -->
              <div id="task-detector-box" class="task-detector-box hidden">
                <div class="task-box-header">
                  <span>🧠 Tarefas e Compromissos detectados por IA</span>
                  <span class="task-box-close" id="btn-close-tasks">×</span>
                </div>
                <div class="task-box-list" id="detected-tasks-list">
                  <!-- Auto populated tasks -->
                </div>
              </div>

              <!-- Smart reply options -->
              <div class="smart-replies" id="smart-replies-container">
                <!-- Suggestion pills -->
              </div>

              <!-- Chat Input bar -->
              <div class="chat-input-bar">
                <!-- Magic Wand Popover -->
                <div id="magic-wand-popover" class="magic-wand-popover hidden">
                  <div class="popover-header">🪄 Reescrever com Loop AI</div>
                  <button class="tone-option-btn" data-tone="professional">👔 Mais Profissional</button>
                  <button class="tone-option-btn" data-tone="friendly">😊 Mais Simpático</button>
                  <button class="tone-option-btn" data-tone="concise">⚡ Curto & Direto</button>
                  <button class="tone-option-btn" data-tone="grammar">✍️ Corrigir Português</button>
                  <button class="tone-option-btn" data-tone="en">🇺🇸 Traduzir para Inglês</button>
                  <button class="tone-option-btn" data-tone="es">🇪🇸 Traduzir para Espanhol</button>
                </div>

                <div class="input-pill-wrapper">
                  <button class="chat-action-btn inner-btn" id="btn-magic-wand" title="Varinha Mágica IA (Reescrever)">🪄</button>
                  <button class="chat-action-btn inner-btn" id="btn-open-poll-modal" title="Criar Enquete">📊</button>
                  <button class="chat-action-btn inner-btn" id="btn-emoji-picker" title="Emojis">😀</button>
                  <textarea id="message-input" class="message-input" placeholder="Mensagem..." rows="1"></textarea>
                  <button class="chat-action-btn inner-btn" id="btn-send-img" title="Enviar Imagem">🖼️</button>
                  <button class="chat-action-btn inner-btn" id="btn-voice-msg" title="Gravar voz">🎤</button>
                </div>
                <input type="file" id="img-input" accept="image/*" style="display: none;">
                
                <!-- Emoji Picker Panel -->
                <div class="emoji-picker-panel hidden" id="emoji-picker-panel">
                  <span class="emoji-item">😂</span>
                  <span class="emoji-item">❤️</span>
                  <span class="emoji-item">👍</span>
                  <span class="emoji-item">😍</span>
                  <span class="emoji-item">🙏</span>
                  <span class="emoji-item">😊</span>
                  <span class="emoji-item">🎉</span>
                  <span class="emoji-item">🔥</span>
                  <span class="emoji-item">😭</span>
                  <span class="emoji-item">👏</span>
                  <span class="emoji-item">🤔</span>
                  <span class="emoji-item">✨</span>
                  <span class="emoji-item">😎</span>
                  <span class="emoji-item">🙄</span>
                  <span class="emoji-item">👀</span>
                  <span class="emoji-item">💡</span>
                  <span class="emoji-item">🚀</span>
                  <span class="emoji-item">🔑</span>
                  <span class="emoji-item">🛡️</span>
                  <span class="emoji-item">🧠</span>
                  <span class="emoji-item">💬</span>
                  <span class="emoji-item">💯</span>
                  <span class="emoji-item">😜</span>
                  <span class="emoji-item">🥰</span>
                  <span class="emoji-item">😢</span>
                  <span class="emoji-item">😡</span>
                  <span class="emoji-item">😱</span>
                  <span class="emoji-item">💪</span>
                  <span class="emoji-item">🙌</span>
                  <span class="emoji-item">🤝</span>
                  <span class="emoji-item">👋</span>
                  <span class="emoji-item">✌️</span>
                  <span class="emoji-item">👇</span>
                  <span class="emoji-item">👉</span>
                  <span class="emoji-item">✅</span>
                  <span class="emoji-item">❌</span>
                  <span class="emoji-item">⚠️</span>
                  <span class="emoji-item">⚙️</span>
                  <span class="emoji-item">📲</span>
                  <span class="emoji-item">💰</span>
                </div>
                <button class="send-circle-btn" id="btn-send-msg" title="Enviar">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- VIEW: COMMUNITIES -->
      <section id="pane-communities" class="view-pane">
        <div class="communities-layout">
          <div class="communities-header-bar">
            <h2>Grupos do Loop</h2>
            <button class="submit-btn inline-btn" id="btn-open-create-channel">🏗️ Criar Grupo</button>
          </div>

          <div class="communities-join-box" style="margin-bottom: 20px; display: flex; gap: 10px; background: var(--bg-card); padding: 12px; border-radius: 12px; border: 1px solid var(--border-color); align-items: center;">
            <input type="text" id="join-invite-input" class="recessed-input" placeholder="Colar link ou código de convite para entrar no grupo..." style="flex: 1; height: 34px;">
            <button class="submit-btn inline-btn" id="btn-join-via-input" style="padding: 0 16px; height: 34px; margin-top: 0; white-space: nowrap; width: auto !important;">Entrar no Grupo</button>
          </div>
          
          <div class="communities-grid" id="communities-list-grid">
            <!-- Dynamically populated communities -->
          </div>
        </div>
      </section>

      <!-- VIEW: SEARCH -->
      <section id="pane-search" class="view-pane">
        <div class="search-layout">
          <div class="search-input-wrap">
            <input type="text" id="ai-search-input" class="search-input" placeholder="Busque mensagens, áudios transcritos ou anexos...">
            <button class="submit-btn search-submit-btn" id="btn-ai-search">Buscar com IA</button>
          </div>

          <div class="search-filters-row">
            <span class="filter-chip active" data-filter="all">Tudo</span>
            <span class="filter-chip" data-filter="text">Mensagens</span>
            <span class="filter-chip" data-filter="audio">Áudios Transcritos</span>
            <span class="filter-chip" data-filter="image">Imagens (OCR/Vision)</span>
            <span class="filter-chip" data-filter="file">Documentos PDF</span>
          </div>

          <div class="search-results-container">
            <!-- AI Answer block -->
            <div id="search-ai-answer" class="search-ai-answer-card hidden">
              <div class="ai-answer-header">
                <span>🧠 Loop AI Responde</span>
              </div>
              <p id="search-ai-answer-text"></p>
            </div>

            <!-- List results -->
            <div class="search-results-list" id="search-results-list">
              <div class="empty-state-search">
                <span class="search-watermark">🔍</span>
                <p>Busque por conteúdos históricos. Loop indexa textos, áudios transcritos e mídias.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- VIEW: PROFILE -->
      <section id="pane-profile" class="view-pane">
        <div class="profile-layout">
          <div class="profile-card">
            <div class="profile-header-meta">
              <div class="profile-avatar-large" id="profile-avatar-emoji" style="cursor: pointer; position: relative;" title="Clique para alterar foto de perfil">👨‍💻</div>
              <input type="file" id="profile-avatar-input" accept="image/*" style="display: none;">
              <div class="profile-names">
                <h2 id="profile-display-name">Carregando...</h2>
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span id="profile-username" class="text-cyan font-mono" style="font-weight: 600;">@username</span>
                  <button type="button" id="btn-open-edit-username" title="Alterar seu @usuario" style="background: rgba(0, 240, 255, 0.1); border: 1px solid rgba(0, 240, 255, 0.3); border-radius: 6px; padding: 2px 6px; font-size: 10px; color: var(--accent-cyan); cursor: pointer;">✏️ Alterar</button>
                </div>
              </div>
            </div>
            
            <div class="profile-details-grid">
              <div class="detail-item">
                <span class="detail-label">E-MAIL CADASTRADO</span>
                <span class="detail-val" id="profile-email">---</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">STATUS DA ASSINATURA</span>
                <span class="detail-val text-cyan" id="profile-premium-status">Loop Premium Ativo</span>
              </div>
              <div class="detail-item" id="profile-credits-wrap" style="display: none;">
                <span class="detail-label">SALDO KEEP AI</span>
                <span class="detail-val text-cyan" id="profile-credits-val">0 créditos</span>
              </div>
            </div>

            <div class="profile-qr-box">
              <div id="profile-qr-placeholder" class="qr-placeholder">
                <!-- Simulated QR Code -->
                <div class="qr-square"></div>
              </div>
              <p class="qr-help">Aponte a câmera para ler o QR Code de perfil e adicionar este contato instantaneamente.</p>
            </div>

            <div class="invite-link-wrap">
              <label class="form-label">SEU LINK DE CONVITE PÚBLICO</label>
              <div class="invite-input-row">
                <input type="text" readonly id="profile-invite-link" class="recessed-input" value="https://4u.ia.br/app/loop/@username">
                <button class="submit-btn copy-btn" id="btn-copy-invite">Copiar</button>
              </div>
            </div>

            <div class="profile-security-box">
              <label class="form-label">🔒 SEGURANÇA DO APLICATIVO</label>
              <div class="security-row">
                <span class="detail-label" id="lbl-pin-status" style="font-size: 10px; font-weight: 600;">BLOQUEIO POR PIN: INATIVO</span>
                <button class="submit-btn inline-btn" id="btn-toggle-pin-lock" style="width: auto; padding: 4px 10px; font-size: 9px;">Configurar PIN</button>
              </div>
              <div class="security-row" style="margin-top: 6px;">
                <span class="detail-label" style="font-size: 10px; font-weight: 600;">MODO ULTRA SEGURO (AUTO-DESTRUIR EM 24H)</span>
                <label class="switch-container">
                  <input type="checkbox" id="chk-ultra-secure">
                  <span class="switch-slider"></span>
                </label>
              </div>
              <div class="security-row" style="margin-top: 6px;">
                <span class="detail-label" style="font-size: 10px; font-weight: 600;">LIMPAR TODAS AS CONVERSAS E CONTATOS</span>
                <button class="danger-btn inline-btn" id="btn-reset-app" style="width: auto; padding: 4px 10px; font-size: 9px; background: linear-gradient(90deg, #ef4444 0%, #b91c1c 100%); border: none; color: #ffffff;">Resetar</button>
              </div>
            </div>

            <div class="profile-e2ee-box">
              <label class="form-label">🔑 CHAVES CRIPTOGRÁFICAS (E2EE)</label>
              <div class="e2ee-keys-container">
                <div class="key-item">
                  <span class="key-label">Chave Pública Local (Curve25519)</span>
                  <input type="text" readonly id="e2ee-public-key" class="recessed-input key-input-code" value="ecdh_pub_...">
                </div>
                <div class="key-item" style="margin-top: 6px;">
                  <span class="key-label">Chave Privada Local (Curve25519)</span>
                  <div class="invite-input-row">
                    <input type="password" readonly id="e2ee-private-key" class="recessed-input key-input-code" value="ecdh_priv_secret_key_placeholder">
                    <button class="submit-btn copy-btn" id="btn-reveal-private-key" style="width: 70px; padding: 4px; font-size: 10px;">Revelar</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="profile-actions">
              <button class="danger-btn" id="btn-logout">Sair do Loop</button>
            </div>
            
            <div class="profile-footer" style="text-align: center; margin-top: 25px; padding-top: 15px; border-top: 1px dashed var(--border-color);">
              <p style="font-size: 10px; color: var(--text-muted); line-height: 1.5;">
                &copy; 2026 Loop. Todos os direitos reservados.<br>
                Desenvolvido com amor por <a href="https://4u.ia.br" target="_blank" style="color: var(--accent-cyan); font-weight: bold; text-decoration: none; transition: color 0.2s;" class="hover:text-cyan-400">4u.ia.br</a>
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  </div>

  <!-- MODAL: CREATE CHANNEL -->
  <div id="create-channel-modal" class="modal-overlay">
    <div class="modal-card">
      <div class="modal-header">
        <h3>Criar Novo Grupo</h3>
        <span class="modal-close" id="btn-close-create-modal">×</span>
      </div>
      <div class="modal-body">
        <label class="form-label" for="channel-name">NOME DO GRUPO</label>
        <input type="text" id="channel-name" class="form-input" placeholder="ex: Desenvolvimento 4uLabs">

        <label class="form-label" for="channel-desc" style="margin-top: 10px;">DESCRIÇÃO</label>
        <textarea id="channel-desc" class="form-input" style="height: 60px; resize: none;" placeholder="ex: Grupo focado no desenvolvimento de novos PWAs por IA."></textarea>

        <div class="form-row-checkbox" style="margin-top: 15px;">
          <input type="checkbox" id="channel-private-flag">
          <label for="channel-private-flag" class="form-label-checkbox">🔒 GRUPO PRIVADO (OCULTO NA LISTA PÚBLICA)</label>
        </div>

        <div class="form-row-checkbox" style="margin-top: 10px;">
          <input type="checkbox" id="channel-premium-flag">
          <label for="channel-premium-flag" class="form-label-checkbox">CONTEÚDO MONETIZADO (GRUPO PAGO)</label>
        </div>

        <div id="channel-price-wrap" class="hidden" style="margin-top: 10px;">
          <label class="form-label" for="channel-price">VALOR DA ASSINATURA MENSAL (R$)</label>
          <input type="number" id="channel-price" class="form-input" value="9.90" min="1.00" step="0.10">

          <label class="form-label" for="channel-pix" style="margin-top: 10px;">CHAVE PIX DO RECEBEDOR</label>
          <input type="text" id="channel-pix" class="form-input" placeholder="Chave PIX (E-mail, CPF, Celular ou Aleatória)">
        </div>
      </div>
      <div class="modal-footer" style="margin-top: 15px;">
        <button class="submit-btn" id="btn-submit-create-channel">Criar Grupo Instantaneamente</button>
      </div>
    </div>
  </div>

  <!-- MODAL: PREMIUM CHECKOUT (SIMULADO) -->
  <div id="premium-checkout-modal" class="modal-overlay">
    <div class="modal-card">
      <div class="modal-header">
        <h3>Loop Premium / Assinatura de Grupo</h3>
        <span class="modal-close" id="btn-close-checkout-modal">×</span>
      </div>
      <div class="modal-body text-center">
        <h4 id="checkout-item-title">Assinatura Mensal Grupo Premium</h4>
        <p class="text-muted" style="font-size: 0.85rem; margin-bottom: 15px;">Apoie o criador e tenha acesso total ao grupo premium.</p>
        
        <div class="pix-price-box">
          <span class="pix-price-label">VALOR DA OPERAÇÃO</span>
          <span class="pix-price-amount" id="checkout-item-price">R$ 9,90</span>
        </div>

        <div class="qr-pix-container">
          <div class="qr-placeholder-pix">
            <!-- Simulated PIX QR Code -->
            <div class="qr-pix-blocks"></div>
          </div>
          <p class="qr-help">Escaneie o QR Code PIX com o app do seu banco ou use a chave abaixo.</p>
        </div>

        <div class="invite-link-wrap">
          <label class="form-label">CHAVE PIX COPIA E COLA</label>
          <div class="invite-input-row">
            <input type="text" readonly id="pix-copia-cola" class="recessed-input" value="00020101021226870014br.gov.bcb.pix0158pix-pay.4u.ia.br">
            <button class="submit-btn copy-btn" id="btn-copy-pix">Copiar</button>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="submit-btn" id="btn-confirm-payment">Simular Confirmação de Pagamento</button>
      </div>
    </div>
  </div>

  <!-- PIN LOCK SCREEN OVERLAY -->
  <div id="pin-lock-screen" class="auth-overlay">
    <div class="auth-card">
      <div class="auth-logo">
        <span>🔒</span>
      </div>
      <h2>Loop Bloqueado</h2>
      <p>Insira seu PIN de 4 dígitos para acessar suas chaves locais ou use biometria.</p>
      
      <div class="otp-inputs" style="margin-top: 10px; margin-bottom: 15px;">
        <input type="password" maxlength="1" class="pin-digit" data-idx="0">
        <input type="password" maxlength="1" class="pin-digit" data-idx="1">
        <input type="password" maxlength="1" class="pin-digit" data-idx="2">
        <input type="password" maxlength="1" class="pin-digit" data-idx="3">
      </div>
      
      <button type="button" id="btn-biometric-unlock" class="submit-btn">Simular Biometria (FaceID/TouchID)</button>
    </div>
  </div>

  <!-- PIN SET MODAL -->
  <div id="pin-set-modal" class="modal-overlay">
    <div class="modal-card">
      <div class="modal-header">
        <h3>Definir PIN de Segurança</h3>
        <span class="modal-close" id="btn-close-pin-modal">×</span>
      </div>
      <div class="modal-body text-center" style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
        <p class="text-muted" style="font-size: 0.85rem;">Defina um PIN de 4 dígitos para proteger este dispositivo.</p>
        <div class="otp-inputs" style="margin-bottom: 5px;">
          <input type="password" maxlength="1" class="pin-set-digit" data-idx="0">
          <input type="password" maxlength="1" class="pin-set-digit" data-idx="1">
          <input type="password" maxlength="1" class="pin-set-digit" data-idx="2">
          <input type="password" maxlength="1" class="pin-set-digit" data-idx="3">
        </div>
      </div>
      <div class="modal-footer">
        <button class="submit-btn" id="btn-save-pin">Salvar PIN de Acesso</button>
      </div>
    </div>
  </div>

  <!-- MODAL: GROUP MEMBERS & MODERATION -->
  <div id="group-members-modal" class="modal-overlay">
    <div class="modal-card" style="max-height: 80vh; display: flex; flex-direction: column;">
      <div class="modal-header">
        <h3>Membros do Grupo</h3>
        <span class="modal-close" id="btn-close-members-modal">×</span>
      </div>
      <div class="modal-body" style="flex: 1; overflow-y: auto; padding: 15px 10px;" id="group-members-list">
        <!-- Dynamically populated members list -->
      </div>
    </div>
  </div>

  <!-- MODAL: EDIT USERNAME -->
  <div id="edit-username-modal" class="modal-overlay">
    <div class="modal-card">
      <div class="modal-header">
        <h3>Definir seu @usuario único</h3>
        <span class="modal-close" id="btn-close-username-modal">×</span>
      </div>
      <div class="modal-body">
        <p class="text-muted" style="font-size: 0.85rem; margin-bottom: 12px;">
          Seu <strong>@usuario</strong> é seu identificador público exclusivo no Loop. Compartilhe-o para conversar com amigos sem precisar informar seu e-mail!
        </p>
        <label class="form-label" for="input-edit-username">ESCOLHA SEU @USUARIO</label>
        <div class="input-container" style="position: relative;">
          <span style="position: absolute; left: 14px; top: 11px; color: var(--accent-cyan); font-weight: bold; font-size: 15px;">@</span>
          <input type="text" id="input-edit-username" class="form-input" style="padding-left: 32px;" placeholder="meunome" autocomplete="off" spellcheck="false">
        </div>
        <div id="username-availability-status" style="font-size: 11px; margin-top: 6px; min-height: 18px;"></div>
      </div>
      <div class="modal-footer">
        <button class="submit-btn" id="btn-save-username">Salvar Novo @usuario</button>
      </div>
    </div>
  </div>

  <!-- MODAL: START CHAT BY @USERNAME -->
  <div id="start-chat-modal" class="modal-overlay">
    <div class="modal-card">
      <div class="modal-header">
        <h3>Iniciar Conversa Criptografada</h3>
        <span class="modal-close" id="btn-close-start-chat-modal">×</span>
      </div>
      <div class="modal-body">
        <p class="text-muted" style="font-size: 0.85rem; margin-bottom: 12px;">
          Digite o <strong>@usuario</strong> do seu amigo para iniciar uma conversa direta privada protegida por criptografia de ponta a ponta.
        </p>
        <label class="form-label" for="input-search-username">@USUÁRIO DO CONTATO</label>
        <div class="input-container" style="position: relative;">
          <span style="position: absolute; left: 14px; top: 11px; color: var(--accent-cyan); font-weight: bold; font-size: 15px;">@</span>
          <input type="text" id="input-search-username" class="form-input" style="padding-left: 32px;" placeholder="ex: fabio" autocomplete="off" spellcheck="false">
        </div>
        <div id="start-chat-user-status" style="margin-top: 12px;"></div>
      </div>
      <div class="modal-footer">
        <button class="submit-btn" id="btn-confirm-start-chat" disabled>Iniciar Chat Seguro</button>
      </div>
    </div>
  </div>

  <!-- MODAL: CREATE POLL -->
  <div id="create-poll-modal" class="modal-overlay">
    <div class="modal-card">
      <div class="modal-header">
        <h3>📊 Criar Nova Enquete</h3>
        <span class="modal-close" id="btn-close-poll-modal">×</span>
      </div>
      <div class="modal-body">
        <label class="form-label" for="input-poll-question">PERGUNTA DA ENQUETE</label>
        <input type="text" id="input-poll-question" class="form-input" placeholder="Ex: Qual o melhor dia para o lançamento?" autocomplete="off">
        
        <label class="form-label" style="margin-top: 14px;">OPÇÕES DE RESPOSTA</label>
        <div id="poll-options-container" style="display: flex; flex-direction: column; gap: 8px;">
          <input type="text" class="form-input poll-opt-input" placeholder="Opção 1" autocomplete="off">
          <input type="text" class="form-input poll-opt-input" placeholder="Opção 2" autocomplete="off">
        </div>
        <button type="button" id="btn-add-poll-option" style="margin-top: 8px; background: transparent; border: 1px dashed var(--accent-cyan); color: var(--accent-cyan); padding: 6px; border-radius: 6px; font-size: 11px; cursor: pointer; width: 100%;">+ Adicionar Opção</button>
        
        <div style="margin-top: 14px; display: flex; align-items: center; justify-content: space-between;">
          <span class="detail-label" style="font-size: 11px;">Permitir múltiplas escolhas</span>
          <label class="switch-container">
            <input type="checkbox" id="chk-poll-multiple">
            <span class="switch-slider"></span>
          </label>
        </div>
      </div>
      <div class="modal-footer">
        <button class="submit-btn" id="btn-submit-poll">Lançar Enquete 🚀</button>
      </div>
    </div>
  </div>

  <!-- MODAL: WEBRTC CALL OVERLAY -->
  <div id="webrtc-call-modal" class="webrtc-modal-overlay hidden">
    <div class="webrtc-call-card">
      <div class="call-header">
        <div class="caller-avatar-wrap" id="call-peer-avatar">👤</div>
        <h3 id="call-peer-name">Chamada com Contato</h3>
        <span class="call-status-badge" id="call-status-badge">Conectando P2P...</span>
        <span class="call-timer" id="call-duration-timer">00:00</span>
      </div>
      
      <div class="video-streams-container" id="video-streams-container">
        <video id="remote-video" autoplay playsinline class="remote-video-feed"></video>
        <video id="local-video" autoplay playsinline muted class="local-video-feed"></video>
      </div>

      <div class="call-controls-bar">
        <button class="call-btn btn-mute" id="btn-call-toggle-mic" title="Silenciar Microfone">🎙️</button>
        <button class="call-btn btn-cam" id="btn-call-toggle-cam" title="Alternar Câmera">📷</button>
        <button class="call-btn btn-hangup" id="btn-call-hangup" title="Desligar Chamada">🔴</button>
      </div>
    </div>
  </div>

  <!-- INCOMING CALL TOAST BANNER -->
  <div id="incoming-call-banner" class="incoming-call-banner hidden">
    <div class="incoming-call-info">
      <span class="call-ringing-icon">📞</span>
      <div>
        <strong id="incoming-caller-name">Chamada recebida...</strong>
        <p style="margin:0; font-size:11px; color:var(--text-muted);">Chamada de voz/vídeo P2P criptografada</p>
      </div>
    </div>
    <div class="incoming-call-actions">
      <button class="call-accept-btn" id="btn-accept-call">Atender 📞</button>
      <button class="call-decline-btn" id="btn-decline-call">Recusar ✖</button>
    </div>
  </div>

  <!-- MODAL: MEDIA LIGHTBOX / FULLSCREEN VIEWER -->
  <div id="media-lightbox-modal" class="lightbox-overlay hidden">
    <div class="lightbox-container">
      <button class="lightbox-close-btn" id="btn-lightbox-close" title="Fechar">×</button>
      <img id="lightbox-img" src="" alt="Visualização de Mídia" class="lightbox-image">
      <div class="lightbox-actions">
        <a id="lightbox-download-link" href="#" download="loop-media.png" class="lightbox-action-btn">⬇ Baixar Imagem</a>
      </div>
    </div>
  </div>

  <!-- GLOBAL TOAST NOTIFICATION -->
  <div id="toast-notification" class="toast-notification">Notificação</div>

</body>
</html>
