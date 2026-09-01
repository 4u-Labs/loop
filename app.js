// ── CONSTANTS ────────────────────────────────────────────────
const DEFAULT_AI_AVATAR = "assets/icone_ia.png";
const DEFAULT_AVATAR = "data:image/png;base64,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";

function getAvatarHtml(avatarString, className = "", defaultIcon = null, name = "") {
  let avatar = avatarString || "";
  let cleanName = (name || "").trim();
  
  // Check if it's the default robot avatar or empty
  const isDefault = !avatar || avatar === "DEFAULT" || avatar.startsWith('data:image/png;base64,iVBORw0KGgoAAAANS');

  if (isDefault && cleanName) {
    // Generate initials text avatar with a distinct HSL background color based on name
    const initials = cleanName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    let hash = 0;
    for (let i = 0; i < cleanName.length; i++) {
      hash = cleanName.charCodeAt(i) + ((hash << 5) - hash);
    }
    const h = Math.abs(hash % 360);
    const bgColor = `hsl(${h}, 65%, 40%)`;
    return `<div class="${className}" style="width:100%;height:100%;background:${bgColor};color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:14px;user-select:none;text-shadow:0 1px 2px rgba(0,0,0,0.2);">${initials}</div>`;
  }

  if (avatar === "DEFAULT" || !avatar) {
    avatar = DEFAULT_AVATAR;
  }
  // If in extension mode and it's a local asset URL, map it to the parent directory
  if (document.documentElement && document.documentElement.classList.contains('extension-mode') && avatar.startsWith('assets/')) {
    avatar = '../' + avatar;
  }
  // If it's a raw base64 string without data URL prefix, prepend it
  if (avatar.length > 8 && !avatar.startsWith('data:') && !avatar.includes('/') && !avatar.includes('.')) {
    const trimmed = avatar.trim();
    if (/^[A-Za-z0-9+/=]+$/.test(trimmed)) {
      avatar = 'data:image/png;base64,' + trimmed;
    } else {
      avatar = DEFAULT_AVATAR;
    }
  }
  if (avatar.startsWith('data:') || avatar.includes('/') || avatar.includes('.')) {
    if (cleanName) {
      const initials = cleanName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
      let hash = 0;
      for (let i = 0; i < cleanName.length; i++) {
        hash = cleanName.charCodeAt(i) + ((hash << 5) - hash);
      }
      const h = Math.abs(hash % 360);
      const bgColor = `hsl(${h}, 65%, 40%)`;
      return `<img src="${avatar}" class="${className}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;display:block;" onerror="this.outerHTML = '<div class=\'${className}\' style=\'width:100%;height:100%;background:${bgColor};color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:14px;text-shadow:0 1px 2px rgba(0,0,0,0.2);\'>${initials}</div>';">`;
    }
    return `<img src="${avatar}" class="${className}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;display:block;" onerror="this.onerror=null; this.src='${DEFAULT_AVATAR}';">`;
  }
  return `<span class="${className}">${avatar || defaultIcon || '👨‍💻'}</span>`;
}
// Loop Messaging App - Extension Frontend Logic
// Path on Server: https://4u.ia.br/app/loop/api/

const API_BASE = (window.location.origin.includes('localhost') || window.location.origin.includes('127.0.0.1'))
  ? window.location.origin + '/app/loop/api'
  : (window.location.protocol.startsWith('http') ? window.location.origin + '/app/loop/api' : 'https://4u.ia.br/app/loop/api');

// ── REAL E2EE CRYPTOGRAPHY (WEB CRYPTO API) ────────────────────
const E2EE = {
  async generateKeyPair() {
    return await window.crypto.subtle.generateKey(
      { name: "ECDH", namedCurve: "P-256" },
      true,
      ["deriveKey", "deriveBits"]
    );
  },
  async exportKey(key) {
    const jwk = await window.crypto.subtle.exportKey("jwk", key);
    return JSON.stringify(jwk);
  },
  async importPublicKey(jwkStr) {
    const jwk = JSON.parse(jwkStr);
    return await window.crypto.subtle.importKey(
      "jwk",
      jwk,
      { name: "ECDH", namedCurve: "P-256" },
      true,
      []
    );
  },
  async importPrivateKey(jwkStr) {
    const jwk = JSON.parse(jwkStr);
    return await window.crypto.subtle.importKey(
      "jwk",
      jwk,
      { name: "ECDH", namedCurve: "P-256" },
      true,
      ["deriveKey", "deriveBits"]
    );
  },
  async deriveSharedKey(privateKey, publicKey) {
    return await window.crypto.subtle.deriveKey(
      { name: "ECDH", public: publicKey },
      privateKey,
      { name: "AES-GCM", length: 256 },
      true,
      ["encrypt", "decrypt"]
    );
  },
  async encrypt(plaintext, sharedKey) {
    const iv = window.crypto.getRandomValues(new Uint8Array(12));
    const enc = new TextEncoder();
    const ciphertext = await window.crypto.subtle.encrypt(
      { name: "AES-GCM", iv: iv },
      sharedKey,
      enc.encode(plaintext)
    );
    const ivBase64 = btoa(String.fromCharCode(...iv));
    
    // Avoid call stack size exceeded error for large payloads by avoiding spread operator (...)
    const ciphertextBytes = new Uint8Array(ciphertext);
    let binary = "";
    for (let i = 0; i < ciphertextBytes.length; i++) {
      binary += String.fromCharCode(ciphertextBytes[i]);
    }
    const ciphertextBase64 = btoa(binary);
    
    return { ciphertext: ciphertextBase64, iv: ivBase64 };
  },
  async decrypt(ciphertextBase64, ivBase64, sharedKey) {
    const ivBinary = atob(ivBase64);
    const iv = new Uint8Array(ivBinary.length);
    for (let i = 0; i < ivBinary.length; i++) {
      iv[i] = ivBinary.charCodeAt(i);
    }
    
    const cipherBinary = atob(ciphertextBase64);
    const ciphertext = new Uint8Array(cipherBinary.length);
    for (let i = 0; i < cipherBinary.length; i++) {
      ciphertext[i] = cipherBinary.charCodeAt(i);
    }
    
    const decrypted = await window.crypto.subtle.decrypt(
      { name: "AES-GCM", iv: iv },
      sharedKey,
      ciphertext
    );
    const dec = new TextDecoder();
    return dec.decode(decrypted);
  }
};

async function initE2EEKeys() {
  if (state.apiOffline || !state.user) return;
  let pubJwk = localStorage.getItem('loop_e2ee_pub');
  let privJwk = localStorage.getItem('loop_e2ee_priv');
  
  if (!pubJwk || !privJwk) {
    console.log("Generating new ECDH P-256 key pair...");
    try {
      const pair = await E2EE.generateKeyPair();
      pubJwk = await E2EE.exportKey(pair.publicKey);
      privJwk = await E2EE.exportKey(pair.privateKey);
      localStorage.setItem('loop_e2ee_pub', pubJwk);
      localStorage.setItem('loop_e2ee_priv', privJwk);
      
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${state.user.email}`
      };
      await fetch(`${API_BASE}/auth.php?action=update_public_key`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ publicKey: pubJwk })
      });
    } catch (e) {
      console.error("Error generating/registering E2EE keys:", e);
    }
  } else {
    if (!state.user.publicKey || state.user.publicKey !== pubJwk) {
      try {
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${state.user.email}`
        };
        await fetch(`${API_BASE}/auth.php?action=update_public_key`, {
          method: 'POST',
          headers,
          body: JSON.stringify({ publicKey: pubJwk })
        });
        state.user.publicKey = pubJwk;
        saveUserSession(state.user);
      } catch (e) {
        console.error("Error re-registering public key on server:", e);
      }
    }
  }
  
  const pubEl = document.getElementById('e2ee-public-key');
  const privEl = document.getElementById('e2ee-private-key');
  if (pubEl && privEl) {
    pubEl.value = pubJwk;
    privEl.value = privJwk;
  }
}

async function getActiveSharedKey() {
  const roomId = state.activeChatId;
  if (!roomId || typeof roomId !== 'string' || !roomId.startsWith('p2p-')) {
    return null;
  }
  if (state.activeSharedKeyRoomId === roomId && state.activeSharedKey) {
    return state.activeSharedKey;
  }
  const activeRoom = state.rooms.find(r => r.id === roomId);
  const otherPublicKeyJwk = activeRoom ? activeRoom.otherPublicKey : null;
  if (!otherPublicKeyJwk) {
    return null;
  }
  try {
    const privJwkStr = localStorage.getItem('loop_e2ee_priv');
    if (!privJwkStr) return null;
    const myPrivateKey = await E2EE.importPrivateKey(privJwkStr);
    const otherPublicKey = await E2EE.importPublicKey(otherPublicKeyJwk);
    const sharedKey = await E2EE.deriveSharedKey(myPrivateKey, otherPublicKey);
    state.activeSharedKeyRoomId = roomId;
    state.activeSharedKey = sharedKey;
    return sharedKey;
  } catch (err) {
    console.error("Failed to derive shared key:", err);
    return null;
  }
}

async function getSharedKeyForRoom(roomId) {
  if (!roomId || typeof roomId !== 'string' || !roomId.startsWith('p2p-')) {
    return null;
  }
  const room = state.rooms.find(r => r.id === roomId);
  const otherPublicKeyJwk = room ? room.otherPublicKey : null;
  if (!otherPublicKeyJwk) {
    return null;
  }
  try {
    const privJwkStr = localStorage.getItem('loop_e2ee_priv');
    if (!privJwkStr) return null;
    const myPrivateKey = await E2EE.importPrivateKey(privJwkStr);
    const otherPublicKey = await E2EE.importPublicKey(otherPublicKeyJwk);
    return await E2EE.deriveSharedKey(myPrivateKey, otherPublicKey);
  } catch (err) {
    console.error("Failed to derive shared key for room:", roomId, err);
    return null;
  }
}

// ── TYPING INDICATOR ──────────────────────────────────────────
let _typingDebounceTimer = null;
let _isCurrentlyTyping = false;
let _lastTypingSendTime = 0;

// Create a single persistent element that lives outside the message render cycle
function getTypingIndicatorEl() {
  let el = document.getElementById('typing-indicator');
  if (!el) {
    el = document.createElement('div');
    el.id = 'typing-indicator';
    el.className = 'typing-indicator-wrap hidden';
    el.innerHTML = `
      <div class="typing-bubble">
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      </div>`;
    // Insert right after messages-container (before translation-bar)
    const msgContainer = document.getElementById('chat-messages-history');
    if (msgContainer && msgContainer.parentNode) {
      msgContainer.parentNode.insertBefore(el, msgContainer.nextSibling);
    } else {
      document.body.appendChild(el);
    }
  }
  return el;
}

function showTypingIndicator(name) {
  const el = getTypingIndicatorEl();
  // Update name label
  let label = el.querySelector('.typing-name');
  if (name) {
    if (!label) {
      label = document.createElement('span');
      label.className = 'typing-name';
      el.querySelector('.typing-bubble').after(label);
    }
    label.textContent = name + ' está digitando...';
  } else if (label) {
    label.remove();
  }
  el.classList.remove('hidden');
  // Scroll messages area to bottom so indicator is visible
  const msgContainer = document.getElementById('chat-messages-history');
  if (msgContainer) msgContainer.scrollTop = msgContainer.scrollHeight;
}

function hideTypingIndicator() {
  const el = document.getElementById('typing-indicator');
  if (el) el.classList.add('hidden');
}

function handleTypingInput() {
  if (!state.activeChatId || state.apiOffline) return;
  const now = Date.now();
  if (!_isCurrentlyTyping || (now - _lastTypingSendTime > 2000)) {
    _isCurrentlyTyping = true;
    _lastTypingSendTime = now;
    sendTypingStatus(true);
  }
  clearTimeout(_typingDebounceTimer);
  _typingDebounceTimer = setTimeout(() => {
    _isCurrentlyTyping = false;
    sendTypingStatus(false);
  }, 3000);
}

function sendTypingStatus(isTyping) {
  if (!state.user || !state.activeChatId || state.apiOffline) return;
  fetch(`${API_BASE}/chat.php?action=typing`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${state.user.email}`
    },
    body: JSON.stringify({ room_id: state.activeChatId, typing: isTyping })
  }).catch(() => {});
}

function handleTypingEvent(typingByRoom) {
  if (!state.activeChatId) return;
  // Don't overwrite the AI indicator
  const el = document.getElementById('typing-indicator');
  if (el && el._aiActive) return;

  const typers = typingByRoom[state.activeChatId];
  if (typers && typers.length > 0) {
    showTypingIndicator(typers.join(', '));
  } else {
    hideTypingIndicator();
  }
}

// ── SERVER-SENT EVENTS REAL-TIME SYNC ──────────────────────────
let paymentPollingInterval = null;

function initRealTimeSync() {
  if (state.sseSource) {
    state.sseSource.close();
    state.sseSource = null;
  }
  if (state.user && !state.apiOffline) {
    const sseUrl = `${API_BASE}/sync_sse.php?email=${encodeURIComponent(state.user.email)}`;
    console.log("Connecting to SSE:", sseUrl);
    const source = new EventSource(sseUrl);
    state.sseSource = source;
    
    source.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        handleSsePayload(data);
      } catch (err) {
        console.error("Error parsing SSE data:", err);
      }
    };
    // Typing indicator SSE event
    source.addEventListener('typing', (event) => {
      try {
        const typingByRoom = JSON.parse(event.data);
        handleTypingEvent(typingByRoom);
      } catch (err) {}
    });
    source.onerror = (err) => {
      // Standard EventSource auto-reconnect cycle
    };
  }
}

function handleSsePayload(data) {
  const prevMsgCount = state.activeChatId && state.messages[state.activeChatId] ? state.messages[state.activeChatId].length : 0;
  
  // Preserve local unsaved p2p- rooms
  const localUnsavedRooms = state.rooms.filter(r => {
    return (r.id && typeof r.id === 'string' && r.id.startsWith('p2p-')) && 
           !data.rooms.some(sr => sr.id === r.id);
  });
  
  state.rooms = [...data.rooms, ...localUnsavedRooms];
  localUnsavedRooms.forEach(r => {
    if (!data.messages[r.id] && state.messages[r.id]) {
      data.messages[r.id] = state.messages[r.id];
    }
  });
  state.messages = data.messages;
  
  if (data.credits !== undefined && state.user) {
    state.user.credits = data.credits;
    saveUserSession(state.user);
    updateCreditsUI();
  }
  
  if (data.signals && data.signals.length > 0) {
    data.signals.forEach(sig => {
      if (typeof WebRTC !== 'undefined' && WebRTC.handleIncomingSignal) {
        WebRTC.handleIncomingSignal(sig);
      }
    });
  }
  
  renderChatList();
  renderCommunitiesList();
  
  if (state.activeChatId) {
    const newMsgCount = state.messages[state.activeChatId] ? state.messages[state.activeChatId].length : 0;
    if (newMsgCount !== prevMsgCount) {
      renderActiveChatMessages();
    }
  }
}

// ── STATE ENGINE ──────────────────────────────────────────────
const state = {
  user: null,          // { email, username, displayName, avatar, isPremium }
  activeView: 'chats', // chats, communities, search, profile
  activeChatId: null,  // Selected room ID
  rooms: [],           // Chat rooms / channels
  messages: {},        // Messages cached by room ID: { roomId: [msgs] }
  otpSentTo: null,     // Email address where OTP was sent
  verificationCode: "",// 6-digit OTP
  translationActive: false,
  apiOffline: true,    // Fallback to local storage/mock mode if server not deployed
  selfDestructTimer: 0,// Destruct timer (0 = Off, 5 = 5s, 10 = 10s, 30 = 30s, 60 = 1m)
};

// ── LOCAL STORAGE KEYS ────────────────────────────────────────
const STORAGE_KEYS = {
  USER: 'loop_user_session',
  ROOMS: 'loop_rooms_data',
  MSGS: 'loop_messages_data',
};

// ── MOCK/SEED DATA (FALLBACK) ─────────────────────────────────
const MOCK_ROOMS = [
  { id: 'loop-ai', type: 'ai', name: 'Loop AI Assistant', avatar: DEFAULT_AI_AVATAR, lastMsg: 'Olá! Como posso ajudar você hoje?', time: 'Agora', unread: false }
];

const MOCK_MESSAGES = {
  'loop-ai': [
    { id: 901, sender: 'Loop AI', senderAvatar: DEFAULT_AI_AVATAR, content: 'Olá! Sou o Loop AI. Posso resumir seus grupos, transcrever áudios, traduzir chats e extrair tarefas. Como posso ajudar você?', time: 'Agora', isMe: false }
  ]
};

const MOCK_COMMUNITIES = [];

// ── INITIALIZATION ────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Check if running in Chrome Extension popup context
  if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.id) {
    document.documentElement.classList.add('extension-mode');
  }
  setupEventHandlers();
  loadUserSession();
  checkServerConnectivity();
  
  // Register hash join listener
  window.addEventListener('hashchange', checkHashJoin);
  
  // Create the persistent typing indicator element early
  getTypingIndicatorEl();
  
  // Start the rolling deletion scheduler (Ultra Secure Mode)
  pruneOldMessages();
  setInterval(pruneOldMessages, 60000); // Check every minute
});

// ── CONNECTIVITY CHECK ────────────────────────────────────────
async function checkServerConnectivity() {
  try {
    const res = await fetch(`${API_BASE}/auth.php?action=ping`, { method: 'GET' });
    if (res.ok) {
      state.apiOffline = false;
      console.log("Loop API is online. Using remote database.");
      if (state.user) {
        syncAppState();
        initRealTimeSync();
      }
    }
  } catch (err) {
    state.apiOffline = true;
    console.log("Loop API is offline. Operating in Local Mock Mode.");
  }
}

// ── SESSION MANAGEMENT ────────────────────────────────────────
function loadUserSession() {
  const savedUserVal = localStorage.getItem(STORAGE_KEYS.USER);
  if (savedUserVal) {
    try {
      const u = JSON.parse(savedUserVal);
      if (u && (u.avatar === '👨‍💻' || u.avatar === '🛡️' || !u.avatar || u.avatar === 'DEFAULT' || u.avatar.startsWith('temp'))) {
        u.avatar = DEFAULT_AVATAR;
        localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(u));
      }
    } catch(e) {}
  }

  const savedRooms = localStorage.getItem(STORAGE_KEYS.ROOMS);
  if (savedRooms) {
    try {
      const rooms = JSON.parse(savedRooms);
      let changed = false;
      rooms.forEach(r => {
        if (r.id === 'loop-ai' && (r.avatar === '🧠' || r.avatar !== DEFAULT_AI_AVATAR || r.name.includes('🧠'))) {
          r.avatar = DEFAULT_AI_AVATAR;
          r.name = 'Loop AI Assistant';
          changed = true;
        }
      });
      if (changed) {
        localStorage.setItem(STORAGE_KEYS.ROOMS, JSON.stringify(rooms));
      }
    } catch(e) {}
  }

  const savedUser = localStorage.getItem(STORAGE_KEYS.USER);
  if (savedUser) {
    state.user = JSON.parse(savedUser);
    
    // Check if PIN lock is active
    const pinLocked = localStorage.getItem('loop_app_pin_lock') === 'true';
    if (pinLocked) {
      showPinLockScreen();
    } else {
      showAppScreen();
      syncAppState();
    }
  } else {
    showAuthScreen();
  }
}

async function handleInviteLinkParam() {
  let inviteUser = null;

  // If in Chrome Extension popup context, check active tab URL
  if (typeof chrome !== 'undefined' && chrome.tabs && chrome.tabs.query) {
    try {
      const tabs = await new Promise((resolve) => {
        chrome.tabs.query({ active: true, currentWindow: true }, (result) => {
          resolve(result);
        });
      });
      if (tabs && tabs[0] && tabs[0].url) {
        const activeUrl = new URL(tabs[0].url);
        if (activeUrl.hostname === '4u.ia.br' && activeUrl.pathname.includes('/app/loop')) {
          let userParam = activeUrl.searchParams.get('user');
          if (!userParam) {
            const pathParts = activeUrl.pathname.split('/');
            const lastPart = pathParts[pathParts.length - 1] || pathParts[pathParts.length - 2];
            if (lastPart && lastPart.startsWith('@')) {
              userParam = lastPart.substring(1);
            }
          }
          if (userParam) {
            inviteUser = userParam;
          }
        }
      }
    } catch (e) {
      console.error("Error querying active tab in extension:", e);
    }
  }

  if (!inviteUser) {
    const urlParams = new URLSearchParams(window.location.search);
    inviteUser = urlParams.get('user');
  }

  // Fallback to pretty URL path parsing (e.g. /app/loop/@username)
  if (!inviteUser) {
    const pathParts = window.location.pathname.split('/');
    const lastPart = pathParts[pathParts.length - 1] || pathParts[pathParts.length - 2];
    if (lastPart && lastPart.startsWith('@')) {
      inviteUser = lastPart.substring(1);
    }
  }

  if (inviteUser && state.user && inviteUser !== state.user.username) {
    // Clean up username by removing any special chars or trailing slash
    inviteUser = inviteUser.replace(/[^A-Za-z0-9_]/g, '');
    if (!inviteUser) return;

    const sortedUsernames = [state.user.username, inviteUser].sort();
    const p2pRoomId = `p2p-${sortedUsernames[0]}-${sortedUsernames[1]}`;

    let room = state.rooms.find(r => r.id === p2pRoomId);
    if (!room) {
      room = {
        id: p2pRoomId,
        type: 'private',
        name: `@${inviteUser}`,
        avatar: '👤',
        lastMsg: 'Chat iniciado via link de convite.',
        time: getCurrentTime(),
        unread: false
      };
      state.rooms.push(room);
      state.messages[room.id] = [
        { id: Date.now(), sender: 'Sistema', senderAvatar: '🛡️', content: `Chat criptografado iniciado com @${inviteUser}.`, time: getCurrentTime(), isMe: false }
      ];
      
      // Try to fetch real name and avatar from server if online
      if (!state.apiOffline) {
        try {
          const headers = { 'Authorization': `Bearer ${state.user.email}` };
          const res = await fetch(`${API_BASE}/chat.php?action=get_user&username=${inviteUser}`, { headers });
          if (res.ok) {
            const userData = await res.json();
            room.name = `${userData.displayName} (@${userData.username})`;
            room.avatar = userData.avatar;
            renderChatList();
            if (state.activeChatId === p2pRoomId) {
              document.getElementById('chat-window-avatar').innerHTML = getAvatarHtml(room.avatar, '', '💬', room.name);
              document.getElementById('chat-window-title').textContent = room.name;
            }
          }
        } catch (e) {
          console.error("Failed to fetch invite user details:", e);
        }
      } else {
        // Local mode fallback
        try {
          const localUsers = JSON.parse(localStorage.getItem('loop_users_db') || '{}');
          const foundUser = Object.values(localUsers).find(u => u.username === inviteUser);
          if (foundUser) {
            room.name = `${foundUser.displayName} (@${foundUser.username})`;
            room.avatar = foundUser.avatar;
          }
        } catch (e) {
          console.error("Failed to fetch user details locally:", e);
        }
      }

      if (state.apiOffline) {
        localStorage.setItem(STORAGE_KEYS.ROOMS, JSON.stringify(state.rooms));
        localStorage.setItem(STORAGE_KEYS.MSGS, JSON.stringify(state.messages));
      }
      renderChatList();
    }
    
    setTimeout(() => {
      selectChat(room.id);
    }, 500);
  }
}

function saveUserSession(user) {
  state.user = user;
  localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
}

function showAuthScreen() {
  document.getElementById('auth-screen').classList.add('active');
  document.getElementById('app-container').classList.add('hidden');
}

function showAppScreen() {
  document.getElementById('auth-screen').classList.remove('active');
  document.getElementById('app-container').classList.remove('hidden');
  
  // Hydrate header
  document.getElementById('header-user-pill').innerHTML = `
    <span class="user-avatar-emoji" style="display:flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;overflow:hidden;">${getAvatarHtml(state.user.avatar, '', '👤', state.user.displayName)}</span>
    <span class="user-username">@${state.user.username}</span>
  `;
  
  const premBadge = document.getElementById('user-premium-badge');
  if (state.user.isPremium) {
    premBadge.classList.remove('hidden');
  } else {
    premBadge.classList.add('hidden');
  }

  // Generate real ECDH keys and register them on server + start SSE sync
  initE2EEKeys();
  initRealTimeSync();
  updatePinLockUI();

  // Cancel background Google prompts if already in app
  if (window.google && window.google.accounts && window.google.accounts.id) {
    try { google.accounts.id.cancel(); } catch(e) {}
  }

  // Handle invitation link if present or hash join
  handleInviteLinkParam();
  checkHashJoin();

  const pendingUsername = localStorage.getItem('loop_pending_chat_username');
  if (pendingUsername) {
    localStorage.removeItem('loop_pending_chat_username');
    setTimeout(() => openDirectChatWithUsername(pendingUsername), 600);
  }
  
  // Update Keep AI credits UI
  updateCreditsUI();
}

// ── STATE SYNCING ─────────────────────────────────────────────
async function syncAppState() {
  if (state.apiOffline) {
    // Load local mock data
    const savedRooms = localStorage.getItem(STORAGE_KEYS.ROOMS);
    const savedMsgs = localStorage.getItem(STORAGE_KEYS.MSGS);
    
    state.rooms = savedRooms ? JSON.parse(savedRooms) : [...MOCK_ROOMS];
    state.messages = savedMsgs ? JSON.parse(savedMsgs) : {...MOCK_MESSAGES};
    
    if (!savedRooms) {
      localStorage.setItem(STORAGE_KEYS.ROOMS, JSON.stringify(state.rooms));
      localStorage.setItem(STORAGE_KEYS.MSGS, JSON.stringify(state.messages));
    }
    
    renderChatList();
    renderCommunitiesList();
  } else {
    // Fetch from remote SQLite API
    await fetchRoomsAndMessages();
    checkHashJoin();
  }
}

async function fetchRoomsAndMessages() {
  try {
    const headers = { 'Authorization': `Bearer ${state.user.email}` };
    const res = await fetch(`${API_BASE}/chat.php?action=sync`, { headers });
    if (res.status === 401) {
      showToast("Sessão inválida ou usuário não encontrado. Faça login novamente.");
      handleLogout();
      return;
    }
    if (res.ok) {
      const data = await res.json();
      
      const prevMsgCount = state.activeChatId && state.messages[state.activeChatId] ? state.messages[state.activeChatId].length : 0;
      
      // Preserve local unsaved p2p- rooms (e.g. rooms initiated via invite links but not yet saved on DB)
      const localUnsavedRooms = state.rooms.filter(r => {
        return (r.id && typeof r.id === 'string' && r.id.startsWith('p2p-')) && 
               !data.rooms.some(sr => sr.id === r.id);
      });
      
      state.rooms = [...data.rooms, ...localUnsavedRooms];
      
      localUnsavedRooms.forEach(r => {
        if (!data.messages[r.id] && state.messages[r.id]) {
          data.messages[r.id] = state.messages[r.id];
        }
      });
      state.messages = data.messages;
      
      // Save credits if returned from server
      if (data.credits !== undefined) {
        state.user.credits = data.credits;
        saveUserSession(state.user);
        updateCreditsUI();
      }
      
      if (data.signals && data.signals.length > 0) {
        data.signals.forEach(sig => {
          if (typeof WebRTC !== 'undefined' && WebRTC.handleIncomingSignal) {
            WebRTC.handleIncomingSignal(sig);
          }
        });
      }
      
      renderChatList();
      renderCommunitiesList();
      
      if (state.activeChatId) {
        const newMsgCount = state.messages[state.activeChatId] ? state.messages[state.activeChatId].length : 0;
        if (newMsgCount !== prevMsgCount) {
          renderActiveChatMessages();
        }
      }
    }
  } catch (err) {
    console.error("Erro ao sincronizar dados com o servidor:", err);
  }
}

// ── EVENT ROUTERS ─────────────────────────────────────────────
function setupEventHandlers() {
  // Invite Click Handler
  const btnInviteChat = document.getElementById('btn-invite-chat');
  if (btnInviteChat) {
    btnInviteChat.addEventListener('click', () => {
      if (!state.activeChatId) return;
      const inviteLink = `${window.location.origin}${window.location.pathname}#join-${state.activeChatId}`;
      navigator.clipboard.writeText(inviteLink).then(() => {
        showToast("Link de convite do grupo copiado com sucesso!");
      }).catch(err => {
        showToast("Erro ao copiar link de convite.");
      });
    });
  }

  // Members Modal Handlers
  const btnMembersChat = document.getElementById('btn-members-chat');
  const modalMembers = document.getElementById('group-members-modal');
  const btnCloseMembersModal = document.getElementById('btn-close-members-modal');
  
  if (btnMembersChat && modalMembers) {
    btnMembersChat.addEventListener('click', () => {
      if (!state.activeChatId) return;
      loadAndRenderGroupMembers(state.activeChatId);
      modalMembers.classList.add('show');
    });
  }
  if (btnCloseMembersModal && modalMembers) {
    btnCloseMembersModal.addEventListener('click', () => {
      modalMembers.classList.remove('show');
    });
  }

  // Emoji Picker Panel Logic
  const btnEmojiPicker = document.getElementById('btn-emoji-picker');
  const emojiPickerPanel = document.getElementById('emoji-picker-panel');
  const messageInput = document.getElementById('message-input');
  
  if (btnEmojiPicker && emojiPickerPanel && messageInput) {
    btnEmojiPicker.addEventListener('click', (e) => {
      e.stopPropagation();
      emojiPickerPanel.classList.toggle('hidden');
    });

    emojiPickerPanel.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    document.addEventListener('click', () => {
      emojiPickerPanel.classList.add('hidden');
    });

    emojiPickerPanel.querySelectorAll('.emoji-item').forEach(item => {
      item.addEventListener('click', () => {
        const emoji = item.textContent;
        const start = messageInput.selectionStart;
        const end = messageInput.selectionEnd;
        const text = messageInput.value;
        const before = text.substring(0, start);
        const after = text.substring(end, text.length);
        messageInput.value = before + emoji + after;
        messageInput.selectionStart = messageInput.selectionEnd = start + emoji.length;
        messageInput.focus();
        handleTypingInput();
      });
    });
  }

  // Custom Registration Avatar Select Upload
  const btnCustomAvatar = document.getElementById('btn-custom-avatar');
  const regAvatarInput = document.getElementById('reg-avatar-input');
  if (btnCustomAvatar && regAvatarInput) {
    btnCustomAvatar.addEventListener('click', () => regAvatarInput.click());
    regAvatarInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function(event) {
        const img = new Image();
        img.onload = function() {
          const canvas = document.createElement('canvas');
          canvas.width = 96;
          canvas.height = 96;
          const ctx = canvas.getContext('2d');
          const size = Math.min(img.width, img.height);
          const xOffset = (img.width - size) / 2;
          const yOffset = (img.height - size) / 2;
          ctx.drawImage(img, xOffset, yOffset, size, size, 0, 0, 96, 96);
          const base64Url = canvas.toDataURL('image/png');
          
          btnCustomAvatar.innerHTML = `<img src="${base64Url}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">`;
          btnCustomAvatar.dataset.avatar = base64Url;
          btnCustomAvatar.click(); // trigger selection
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    });
  }

  // Profile Page Click-to-Change Avatar
  const profileAvatarEmoji = document.getElementById('profile-avatar-emoji');
  const profileAvatarInput = document.getElementById('profile-avatar-input');
  if (profileAvatarEmoji && profileAvatarInput) {
    profileAvatarEmoji.addEventListener('click', () => profileAvatarInput.click());
    profileAvatarInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function(event) {
        const img = new Image();
        img.onload = async function() {
          const canvas = document.createElement('canvas');
          canvas.width = 96;
          canvas.height = 96;
          const ctx = canvas.getContext('2d');
          const size = Math.min(img.width, img.height);
          const xOffset = (img.width - size) / 2;
          const yOffset = (img.height - size) / 2;
          ctx.drawImage(img, xOffset, yOffset, size, size, 0, 0, 96, 96);
          const base64Url = canvas.toDataURL('image/png');
          
          await updateAvatarOnServer(base64Url);
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    });
  }

  // Navigation
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.dataset.view;
      if (view) {
        switchView(view);
        // Clear chat active state when switching views
        document.getElementById('app-container').classList.remove('chat-active');
      }
    });
  });

  // Mobile Back Button click handler
  const btnBack = document.getElementById('btn-back-to-list');
  if (btnBack) {
    btnBack.addEventListener('click', () => {
      state.activeChatId = null;
      document.getElementById('app-container').classList.remove('chat-active');
      document.getElementById('no-chat-selected').classList.remove('hidden');
      document.getElementById('active-chat-window').classList.add('hidden');
      renderChatList();
    });
  }

  // Auth flows
  const btnGoogle = document.getElementById('btn-google-login');
  if (btnGoogle) {
    btnGoogle.addEventListener('click', () => {
      if (window.google && window.google.accounts && window.google.accounts.id) {
        window.google.accounts.id.prompt((notification) => {
          if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
            const renderContainer = document.getElementById('g_id_signin_rendered');
            if (renderContainer) {
              renderContainer.style.display = 'block';
              window.google.accounts.id.renderButton(renderContainer, {
                theme: 'filled_black',
                size: 'large',
                shape: 'rectangular',
                width: 280
              });
              const innerBtn = renderContainer.querySelector('div[role="button"]');
              if (innerBtn) innerBtn.click();
            }
          }
        });
      } else {
        showToast("Carregando serviços Google... Tente novamente em alguns segundos.");
      }
    });
  }

  document.getElementById('btn-send-otp').addEventListener('click', handleSendOTP);
  document.getElementById('btn-verify-otp').addEventListener('click', handleVerifyOTP);
  document.getElementById('auth-form').addEventListener('submit', handleCompleteRegister);

  // Allow pressing Enter on email field to trigger OTP
  const emailInput = document.getElementById('auth-email');
  if (emailInput) {
    emailInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSendOTP();
      }
    });
  }
  
  // OTP digits auto-focus chain
  const digits = document.querySelectorAll('.otp-digit');
  digits.forEach((digit, idx) => {
    digit.addEventListener('input', (e) => {
      if (e.target.value.length === 1 && idx < 5) {
        digits[idx + 1].focus();
      }
    });
    digit.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !e.target.value && idx > 0) {
        digits[idx - 1].focus();
      } else if (e.key === 'Enter') {
        e.preventDefault();
        handleVerifyOTP();
      }
    });
  });

  document.getElementById('btn-resend-otp').addEventListener('click', handleSendOTP);

  // Avatar select
  document.querySelectorAll('.avatar-option').forEach(opt => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('.avatar-option').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
    });
  });

  // Chat window actions
  document.getElementById('btn-send-msg').addEventListener('click', handleSendMessage);
  if (messageInput) {
    messageInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSendMessage();
      }
    });
    messageInput.addEventListener('input', () => {
      handleTypingInput();
      messageInput.style.height = 'auto';
      const newHeight = Math.min(messageInput.scrollHeight, 120);
      messageInput.style.height = newHeight + 'px';
      const parentBar = messageInput.closest('.chat-input-bar');
      if (parentBar) {
        parentBar.style.height = (newHeight + 16) + 'px';
      }
    });
  }
  
  document.getElementById('btn-summarize').addEventListener('click', handleAISummarize);
  document.getElementById('btn-translate-chat').addEventListener('click', toggleRealTimeTranslation);
  document.getElementById('btn-close-translation').addEventListener('click', disableTranslation);
  document.getElementById('btn-close-tasks').addEventListener('click', () => {
    document.getElementById('task-detector-box').classList.add('hidden');
  });

  // Voice recording simulation
  document.getElementById('btn-voice-msg').addEventListener('click', handleVoiceSimulation);

  // Community modals
  document.getElementById('btn-open-create-channel').addEventListener('click', () => {
    document.getElementById('create-channel-modal').classList.add('show');
  });
  document.getElementById('btn-close-create-modal').addEventListener('click', () => {
    document.getElementById('create-channel-modal').classList.remove('show');
  });
  document.getElementById('channel-premium-flag').addEventListener('change', (e) => {
    document.getElementById('channel-price-wrap').classList.toggle('hidden', !e.target.checked);
  });
  document.getElementById('btn-submit-create-channel').addEventListener('click', handleCreateChannel);

  // Checkout pix actions
  document.getElementById('btn-close-checkout-modal').addEventListener('click', () => {
    document.getElementById('premium-checkout-modal').classList.remove('show');
    if (paymentPollingInterval) {
      clearInterval(paymentPollingInterval);
      paymentPollingInterval = null;
    }
  });
  document.getElementById('btn-copy-pix').addEventListener('click', () => {
    navigator.clipboard.writeText(document.getElementById('pix-copia-cola').value);
    showToast("Código PIX Copia e Cola copiado!");
  });
  document.getElementById('btn-confirm-payment').addEventListener('click', handleConfirmPayment);

  // Search Engine
  document.getElementById('btn-ai-search').addEventListener('click', handleAISearch);
  document.getElementById('ai-search-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleAISearch();
  });
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      handleAISearch();
    });
  });

  // Live sidebar chat search input and start conversation event
  const chatSearch = document.getElementById('chat-search');
  const btnClearSearch = document.getElementById('btn-clear-chat-search');
  if (chatSearch) {
    chatSearch.addEventListener('input', () => {
      renderChatList();
      if (btnClearSearch) {
        btnClearSearch.style.display = chatSearch.value ? 'block' : 'none';
      }
    });
    chatSearch.addEventListener('keydown', async (e) => {
      if (e.key === 'Enter') {
        const query = chatSearch.value.trim();
        if (query.startsWith('@')) {
          const username = query.substring(1).replace(/[^A-Za-z0-9_]/g, '');
          if (username) {
            await startP2PChatWithUsername(username);
          }
        } else if (query.includes('@')) {
          const cleanEmail = query.replace(/[^A-Za-z0-9_@.-]/g, '');
          await startP2PChatWithUsername(cleanEmail);
        } else {
          const username = query.replace(/[^A-Za-z0-9_]/g, '');
          if (username) {
            await startP2PChatWithUsername(username);
          }
        }
      }
    });
  }
  if (btnClearSearch && chatSearch) {
    btnClearSearch.addEventListener('click', () => {
      chatSearch.value = "";
      btnClearSearch.style.display = 'none';
      renderChatList();
      chatSearch.focus();
    });
  }

  // Join group via link/code input handler
  const btnJoinViaInput = document.getElementById('btn-join-via-input');
  const joinInviteInput = document.getElementById('join-invite-input');
  if (btnJoinViaInput && joinInviteInput) {
    btnJoinViaInput.addEventListener('click', () => {
      let rawVal = joinInviteInput.value.trim();
      if (!rawVal) {
        showToast("Digite o link ou código de convite.");
        return;
      }
      
      // Extract room ID from link if user pasted the full link
      let roomId = rawVal;
      if (rawVal.includes('#join-')) {
        roomId = rawVal.split('#join-')[1];
      } else if (rawVal.includes('/')) {
        // e.g. path format link
        const parts = rawVal.split('/');
        const lastPart = parts[parts.length - 1];
        if (lastPart.startsWith('#join-')) {
          roomId = lastPart.replace('#join-', '');
        } else {
          roomId = lastPart;
        }
      }
      
      // Ensure clean room ID format starting with 'ch-'
      if (!roomId.startsWith('ch-') && /^\d+$/.test(roomId)) {
        roomId = `ch-${roomId}`;
      }
      
      joinGroupById(roomId);
      joinInviteInput.value = "";
    });
  }

  // Helper to process, compress and send images (shared by file input & drag-and-drop)
  async function handleImageFileUpload(file) {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      showToast("Por favor, selecione apenas arquivos de imagem.");
      return;
    }

    showToast("Processando imagem...");
    
    // Show local placeholder if online
    if (!state.apiOffline && state.activeChatId) {
      const placeholderMsg = {
        id: `temp-img-${Date.now()}`,
        sender: state.user.displayName,
        senderAvatar: state.user.avatar || DEFAULT_AVATAR,
        content: "",
        isPlaceholder: true,
        placeholderType: 'image',
        time: getCurrentTime(),
        isMe: true
      };
      if (!state.messages[state.activeChatId]) {
        state.messages[state.activeChatId] = [];
      }
      state.messages[state.activeChatId].push(placeholderMsg);
      renderActiveChatMessages();
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 1200;
        let width = img.width;
        let height = img.height;

        if (width > MAX_WIDTH) {
          height = Math.round((height * MAX_WIDTH) / width);
          width = MAX_WIDTH;
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        const webpDataUrl = canvas.toDataURL('image/webp', 0.7);
        sendImageMessage(webpDataUrl);
      };
    };
  }

  // Send Image event handlers
  const btnSendImg = document.getElementById('btn-send-img');
  const imgInput = document.getElementById('img-input');
  if (btnSendImg && imgInput) {
    btnSendImg.addEventListener('click', () => {
      imgInput.click();
    });

    imgInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      handleImageFileUpload(file);
      imgInput.value = "";
    });
  }

  // Drag and Drop files upload
  const chatHistory = document.getElementById('chat-messages-history');
  if (chatHistory) {
    chatHistory.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.stopPropagation();
      chatHistory.classList.add('drag-over');
    });

    chatHistory.addEventListener('dragleave', (e) => {
      e.preventDefault();
      e.stopPropagation();
      chatHistory.classList.remove('drag-over');
    });

    chatHistory.addEventListener('drop', (e) => {
      e.preventDefault();
      e.stopPropagation();
      chatHistory.classList.remove('drag-over');
      
      const files = e.dataTransfer.files;
      if (files && files.length > 0) {
        handleImageFileUpload(files[0]);
      }
    });
  }

  // Click image to enlarge (Lightbox)
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('chat-msg-img')) {
      const src = e.target.src;
      showImageLightbox(src);
    }
  });

  // Profile actions
  document.getElementById('btn-copy-invite').addEventListener('click', () => {
    navigator.clipboard.writeText(document.getElementById('profile-invite-link').value);
    showToast("Link de convite copiado!");
  });
  document.getElementById('btn-logout').addEventListener('click', handleLogout);

  // Edit Username Modal Handlers
  let usernameCheckTimer = null;
  const btnOpenEditUsername = document.getElementById('btn-open-edit-username');
  const modalEditUsername = document.getElementById('edit-username-modal');
  const inputEditUsername = document.getElementById('input-edit-username');
  const statusUsername = document.getElementById('username-availability-status');
  const btnSaveUsername = document.getElementById('btn-save-username');
  const btnCloseUsernameModal = document.getElementById('btn-close-username-modal');

  if (btnOpenEditUsername && modalEditUsername) {
    btnOpenEditUsername.addEventListener('click', () => {
      if (state.user) {
        inputEditUsername.value = state.user.username || '';
        statusUsername.innerHTML = '<span style="color:var(--text-muted)">Digite seu novo @usuario...</span>';
        modalEditUsername.classList.add('show');
        inputEditUsername.focus();
      }
    });

    if (btnCloseUsernameModal) {
      btnCloseUsernameModal.addEventListener('click', () => {
        modalEditUsername.classList.remove('show');
      });
    }

    inputEditUsername.addEventListener('input', () => {
      clearTimeout(usernameCheckTimer);
      const val = inputEditUsername.value.trim().toLowerCase().replace(/^@+/, '');
      if (val.length < 3) {
        statusUsername.innerHTML = '<span style="color:var(--text-muted)">Mínimo de 3 caracteres.</span>';
        btnSaveUsername.disabled = true;
        return;
      }
      statusUsername.innerHTML = '<span style="color:var(--accent-cyan)">Verificando disponibilidade...</span>';
      usernameCheckTimer = setTimeout(async () => {
        try {
          const res = await fetch(`${API_BASE}/auth.php?action=check_username&username=${encodeURIComponent(val)}`, {
            headers: state.user ? { 'Authorization': `Bearer ${state.user.email}` } : {}
          });
          const data = await res.json();
          if (data.available) {
            statusUsername.innerHTML = `<span style="color:#10b981; font-weight:bold;">✅ @${val} está disponível!</span>`;
            btnSaveUsername.disabled = false;
          } else {
            statusUsername.innerHTML = `<span style="color:#ef4444; font-weight:bold;">❌ ${data.error || 'Indisponível'}</span>`;
            btnSaveUsername.disabled = true;
          }
        } catch(e) {
          statusUsername.innerHTML = '<span style="color:var(--text-muted)">Erro ao verificar.</span>';
        }
      }, 300);
    });

    btnSaveUsername.addEventListener('click', async () => {
      const val = inputEditUsername.value.trim().toLowerCase().replace(/^@+/, '');
      if (!val || val.length < 3 || !state.user) return;
      btnSaveUsername.disabled = true;
      btnSaveUsername.textContent = "Salvando...";
      try {
        const res = await fetch(`${API_BASE}/auth.php?action=update_username`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${state.user.email}`
          },
          body: JSON.stringify({ username: val })
        });
        const data = await res.json();
        if (data.success && data.user) {
          saveUserSession(data.user);
          modalEditUsername.classList.remove('show');
          updateProfileUI();
          showToast(`Seu @usuario foi alterado para @${data.user.username}! 🎉`);
        } else {
          showToast(data.error || "Erro ao salvar @usuario.");
        }
      } catch(e) {
        showToast("Erro de conexão ao salvar.");
      } finally {
        btnSaveUsername.disabled = false;
        btnSaveUsername.textContent = "Salvar Novo @usuario";
      }
    });
  }

  // Start Chat Modal Handlers
  let targetUserCheckTimer = null;
  let selectedTargetUsername = null;
  const btnOpenStartChat = document.getElementById('btn-open-start-chat');
  const modalStartChat = document.getElementById('start-chat-modal');
  const inputSearchUsername = document.getElementById('input-search-username');
  const statusStartChat = document.getElementById('start-chat-user-status');
  const btnConfirmStartChat = document.getElementById('btn-confirm-start-chat');
  const btnCloseStartChatModal = document.getElementById('btn-close-start-chat-modal');

  if (btnOpenStartChat && modalStartChat) {
    btnOpenStartChat.addEventListener('click', () => {
      inputSearchUsername.value = '';
      statusStartChat.innerHTML = '';
      btnConfirmStartChat.disabled = true;
      selectedTargetUsername = null;
      modalStartChat.classList.add('show');
      inputSearchUsername.focus();
    });

    if (btnCloseStartChatModal) {
      btnCloseStartChatModal.addEventListener('click', () => {
        modalStartChat.classList.remove('show');
      });
    }

    inputSearchUsername.addEventListener('input', () => {
      clearTimeout(targetUserCheckTimer);
      const val = inputSearchUsername.value.trim().toLowerCase().replace(/^@+/, '');
      if (!val) {
        statusStartChat.innerHTML = '';
        btnConfirmStartChat.disabled = true;
        selectedTargetUsername = null;
        return;
      }
      if (state.user && val === state.user.username.toLowerCase()) {
        statusStartChat.innerHTML = '<span style="color:#ef4444">Você não pode iniciar conversa consigo mesmo.</span>';
        btnConfirmStartChat.disabled = true;
        selectedTargetUsername = null;
        return;
      }
      statusStartChat.innerHTML = '<span style="color:var(--accent-cyan)">Buscando @usuario...</span>';
      targetUserCheckTimer = setTimeout(async () => {
        try {
          const res = await fetch(`${API_BASE}/chat.php?action=get_user&username=${encodeURIComponent(val)}`, {
            headers: state.user ? { 'Authorization': `Bearer ${state.user.email}` } : {}
          });
          if (res.ok) {
            const u = await res.json();
            selectedTargetUsername = u.username;
            statusStartChat.innerHTML = `
              <div style="display:flex; align-items:center; gap:10px; background:rgba(0,240,255,0.08); border:1px solid var(--accent-cyan); border-radius:8px; padding:10px;">
                <div style="width:36px; height:36px; border-radius:50%; overflow:hidden;">${getAvatarHtml(u.avatar, '', null, u.displayName)}</div>
                <div>
                  <div style="font-weight:bold; font-size:13px; color:#fff;">${u.displayName}</div>
                  <div style="font-size:11px; color:var(--accent-cyan);">@${u.username}</div>
                </div>
              </div>
            `;
            btnConfirmStartChat.disabled = false;
          } else {
            statusStartChat.innerHTML = `<span style="color:#ef4444">Usuário @${val} não encontrado.</span>`;
            btnConfirmStartChat.disabled = true;
            selectedTargetUsername = null;
          }
        } catch(e) {
          statusStartChat.innerHTML = '<span style="color:var(--text-muted)">Erro ao buscar usuário.</span>';
        }
      }, 300);
    });

    btnConfirmStartChat.addEventListener('click', () => {
      if (selectedTargetUsername) {
        modalStartChat.classList.remove('show');
        openDirectChatWithUsername(selectedTargetUsername);
      }
    });
  }

  // Custom reset and ultra secure handlers
  const btnReset = document.getElementById('btn-reset-app');
  if (btnReset) {
    btnReset.addEventListener('click', handleResetApp);
  }
  const chkUltraSecure = document.getElementById('chk-ultra-secure');
  if (chkUltraSecure) {
    chkUltraSecure.addEventListener('change', handleToggleUltraSecure);
  }

  // Theme toggle
  document.getElementById('btn-theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    showToast(`Tema ${document.body.classList.contains('light-theme') ? 'Claro' : 'Escuro'} ativo!`);
  });

  // Self destruct toggle (legacy / fallback)
  const btnSelfDestruct = document.getElementById('btn-self-destruct');
  if (btnSelfDestruct) {
    btnSelfDestruct.addEventListener('click', handleSelfDestructToggle);
  }

  // Magic Wand AI Rewrite Handlers
  const btnMagicWand = document.getElementById('btn-magic-wand');
  const magicWandPopover = document.getElementById('magic-wand-popover');
  if (btnMagicWand && magicWandPopover) {
    btnMagicWand.addEventListener('click', (e) => {
      e.stopPropagation();
      magicWandPopover.classList.toggle('hidden');
    });

    document.querySelectorAll('.tone-option-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const tone = btn.getAttribute('data-tone');
        handleMagicWandRewrite(tone);
      });
    });

    document.addEventListener('click', (e) => {
      if (!magicWandPopover.contains(e.target) && e.target !== btnMagicWand) {
        magicWandPopover.classList.add('hidden');
      }
    });
  }

  // Ephemeral TTL Header Dropdown Handlers
  const btnEphemeralMenu = document.getElementById('btn-ephemeral-menu');
  const ephemeralPopover = document.getElementById('ephemeral-popover');
  if (btnEphemeralMenu && ephemeralPopover) {
    btnEphemeralMenu.addEventListener('click', (e) => {
      e.stopPropagation();
      ephemeralPopover.classList.toggle('hidden');
    });

    document.querySelectorAll('.ephemeral-opt').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const ttl = parseInt(btn.getAttribute('data-ttl') || '0', 10);
        handleSetEphemeralTTL(ttl);
        ephemeralPopover.classList.add('hidden');
      });
    });

    document.addEventListener('click', (e) => {
      if (!ephemeralPopover.contains(e.target) && e.target !== btnEphemeralMenu) {
        ephemeralPopover.classList.add('hidden');
      }
    });
  }

  // Poll Creation Modal Handlers
  const btnOpenPollModal = document.getElementById('btn-open-poll-modal');
  const modalCreatePoll = document.getElementById('create-poll-modal');
  const btnClosePollModal = document.getElementById('btn-close-poll-modal');
  const btnAddPollOpt = document.getElementById('btn-add-poll-option');
  const btnSubmitPoll = document.getElementById('btn-submit-poll');

  if (btnOpenPollModal && modalCreatePoll) {
    btnOpenPollModal.addEventListener('click', () => {
      if (!state.activeChatId) {
        showToast("Selecione uma conversa primeiro.");
        return;
      }
      document.getElementById('input-poll-question').value = '';
      document.getElementById('poll-options-container').innerHTML = `
        <input type="text" class="form-input poll-opt-input" placeholder="Opção 1" autocomplete="off">
        <input type="text" class="form-input poll-opt-input" placeholder="Opção 2" autocomplete="off">
      `;
      modalCreatePoll.classList.add('show');
      document.getElementById('input-poll-question').focus();
    });

    if (btnClosePollModal) {
      btnClosePollModal.addEventListener('click', () => modalCreatePoll.classList.remove('show'));
    }

    if (btnAddPollOpt) {
      btnAddPollOpt.addEventListener('click', () => {
        const container = document.getElementById('poll-options-container');
        const count = container.querySelectorAll('.poll-opt-input').length + 1;
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'form-input poll-opt-input';
        input.placeholder = `Opção ${count}`;
        input.autocomplete = 'off';
        container.appendChild(input);
        input.focus();
      });
    }

    if (btnSubmitPoll) {
      btnSubmitPoll.addEventListener('click', handleCreatePoll);
    }
  }

  // WebRTC Call Controls & Buttons
  const btnAudioCall = document.getElementById('btn-audio-call');
  const btnVideoCall = document.getElementById('btn-video-call');
  if (btnAudioCall) btnAudioCall.addEventListener('click', () => WebRTC.startCall(false));
  if (btnVideoCall) btnVideoCall.addEventListener('click', () => WebRTC.startCall(true));

  document.getElementById('btn-accept-call')?.addEventListener('click', () => WebRTC.acceptCall());
  document.getElementById('btn-decline-call')?.addEventListener('click', () => WebRTC.declineCall());
  document.getElementById('btn-call-hangup')?.addEventListener('click', () => WebRTC.endCall());
  document.getElementById('btn-call-toggle-mic')?.addEventListener('click', () => WebRTC.toggleMic());
  document.getElementById('btn-call-toggle-cam')?.addEventListener('click', () => WebRTC.toggleCam());

  // Message area event delegation (for voting in polls and creating reminders)
  const chatHistoryContainer = document.getElementById('chat-messages-history');
  if (chatHistoryContainer) {
    chatHistoryContainer.addEventListener('click', (e) => {
      // Poll option click
      const pollRow = e.target.closest('.poll-option-row');
      if (pollRow) {
        const pollId = parseInt(pollRow.getAttribute('data-poll-id'), 10);
        const optId = parseInt(pollRow.getAttribute('data-opt-id'), 10);
        if (pollId && optId) {
          handleVotePoll(pollId, optId);
        }
        return;
      }

      // Reminder chip click
      const reminderChip = e.target.closest('.reminder-chip');
      if (reminderChip) {
        const rawText = reminderChip.getAttribute('data-reminder');
        if (rawText) {
          handleCreateReminder(decodeURIComponent(rawText));
        }
      }
    });
  }

  // E2EE Reveal key
  document.getElementById('btn-reveal-private-key').addEventListener('click', handleRevealPrivateKey);

  // PIN security settings toggle
  document.getElementById('btn-toggle-pin-lock').addEventListener('click', handleTogglePinLock);

  // Modal pin set closing
  document.getElementById('btn-close-pin-modal').addEventListener('click', () => {
    document.getElementById('pin-set-modal').classList.remove('show');
  });

  // Save PIN
  document.getElementById('btn-save-pin').addEventListener('click', handleSavePin);

  // PIN set auto-focus chain
  const pinSetDigits = document.querySelectorAll('.pin-set-digit');
  pinSetDigits.forEach((digit, idx) => {
    digit.addEventListener('input', (e) => {
      if (e.target.value.length === 1 && idx < 3) {
        pinSetDigits[idx + 1].focus();
      }
    });
    digit.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !e.target.value && idx > 0) {
        pinSetDigits[idx - 1].focus();
      }
    });
  });

  // PIN unlock auto-focus chain
  const pinDigits = document.querySelectorAll('.pin-digit');
  pinDigits.forEach((digit, idx) => {
    digit.addEventListener('input', (e) => {
      if (e.target.value.length === 1) {
        if (idx < 3) {
          pinDigits[idx + 1].focus();
        } else {
          verifyAndUnlock();
        }
      }
    });
    digit.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !e.target.value && idx > 0) {
        pinDigits[idx - 1].focus();
      }
    });
  });

  // Biometric unlock
  document.getElementById('btn-biometric-unlock').addEventListener('click', handleBiometricUnlock);

  // --- EASTER EGG LOGO (5 CLIQUES PARA O LOGIN ADMIN / KEEPAI) ---
  const logoLink = document.getElementById('logo-link');
  if (logoLink) {
    logoLink.addEventListener('click', function(e) {
      const now = Date.now();
      let clicks = parseInt(localStorage.getItem('logo_clicks') || '0');
      let lastClick = parseInt(localStorage.getItem('logo_last_click') || '0');

      if (now - lastClick < 2000) {
        clicks++;
      } else {
        clicks = 1;
      }

      localStorage.setItem('logo_clicks', clicks);
      localStorage.setItem('logo_last_click', now);

      if (clicks >= 5) {
        e.preventDefault();
        localStorage.removeItem('logo_clicks');
        localStorage.removeItem('logo_last_click');
        if (typeof chrome !== 'undefined' && chrome.tabs && chrome.tabs.create) {
          chrome.tabs.create({ url: 'https://4u.ia.br/app/keepai/' });
        } else {
          window.location.href = 'https://4u.ia.br/app/keepai/';
        }
        return;
      }
    });
  }
}

// ── AUTH LOGIC (GOOGLE & OTP) ──────────────────────────────────
window._realGoogleLoginHandler = async function(response) {
  if (!response || !response.credential) {
    showToast("Falha na autenticação Google.");
    return;
  }
  showToast("Autenticando com sua conta Google...");
  try {
    const res = await fetch(`${API_BASE}/auth.php?action=google_login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ credential: response.credential })
    });
    const data = await res.json();
    if (data.success && data.user) {
      saveUserSession(data.user);
      
      // Auto-generate E2EE keypair if not present
      ensureE2EEKeyPair(data.user.email);
      
      showAppScreen();
      syncAppState();
      showToast(`Bem-vindo, ${data.user.displayName}! 🚀`);
    } else {
      showToast(data.error || "Erro ao autenticar com Google.");
    }
  } catch (err) {
    console.error("Google Auth error:", err);
    showToast("Erro de conexão ao autenticar com Google.");
  }
};
window.handleGoogleLoginResponse = window._realGoogleLoginHandler;

if (window._pendingGoogleResponse) {
  const pending = window._pendingGoogleResponse;
  window._pendingGoogleResponse = null;
  window._realGoogleLoginHandler(pending);
}

async function ensureE2EEKeyPair(userEmail) {
  try {
    await initE2EEKeys();
  } catch (e) {
    console.warn("E2EE key generation notice:", e);
  }
}

async function handleSendOTP() {
  const email = document.getElementById('auth-email').value.trim();
  if (!email || !email.includes('@')) {
    showToast("Por favor, informe um e-mail válido.");
    return;
  }

  const btn = document.getElementById('btn-send-otp');
  const originalText = btn ? btn.textContent : "Receber Código";
  if (btn) {
    btn.disabled = true;
    btn.textContent = "Enviando...";
  }

  // Generate 6 random digits
  const isBypassEmail = (email === 'revisor@4u.ia.br');
  if (isBypassEmail) {
    state.verificationCode = "123456";
  } else {
    state.verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
  }
  state.otpSentTo = email;

  showToast(`Enviando código OTP para ${email}...`);

  if (isBypassEmail) {
    setTimeout(() => {
      showToast(`[MODO TESTE] Use o código: ${state.verificationCode}`);
    }, 1000);
  } else if (!state.apiOffline) {
    try {
      const res = await fetch(`${API_BASE}/auth.php?action=send_otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code: state.verificationCode })
      });
      if (res.ok) {
        showToast("Código OTP enviado por e-mail!");
      }
    } catch (e) {
      console.log("Failed to send remote request, falling back.");
    }
  } else {
    // Simulated OTP toast in offline/mock mode
    setTimeout(() => {
      showToast(`[MOCK OTP] Código: ${state.verificationCode}`);
    }, 1000);
  }

  if (btn) {
    btn.disabled = false;
    btn.textContent = originalText;
  }

  document.getElementById('auth-step-email').classList.add('hidden');
  document.getElementById('auth-step-otp').classList.remove('hidden');
  
  // Auto-focus first digit input of OTP step
  setTimeout(() => {
    const firstDigit = document.querySelector('.otp-digit');
    if (firstDigit) firstDigit.focus();
  }, 100);
}

async function handleVerifyOTP() {
  let userCode = "";
  document.querySelectorAll('.otp-digit').forEach(input => {
    userCode += input.value.trim();
  });

  if (userCode.length < 6) {
    showToast("Por favor, digite os 6 dígitos.");
    return;
  }

  const btn = document.getElementById('btn-verify-otp');
  const originalText = btn ? btn.textContent : "Verificar e Acessar";
  if (btn) {
    btn.disabled = true;
    btn.textContent = "Verificando...";
  }

  // Offline / mock mode: validate locally
  if (state.apiOffline) {
    const localExpected = state.verificationCode;
    if (userCode !== localExpected) {
      showToast("Código inválido! Tente novamente.");
      if (btn) { btn.disabled = false; btn.textContent = originalText; }
      return;
    }
    const localUsers = JSON.parse(localStorage.getItem('loop_users_db') || '{}');
    if (localUsers[state.otpSentTo]) {
      saveUserSession(localUsers[state.otpSentTo]);
      showAppScreen();
      syncAppState();
    } else {
      document.getElementById('auth-step-otp').classList.add('hidden');
      document.getElementById('auth-step-register').classList.remove('hidden');
    }
    if (btn) { btn.disabled = false; btn.textContent = originalText; }
    return;
  }

  // Online mode: server is the single source of truth for OTP validation
  try {
    const res = await fetch(`${API_BASE}/auth.php?action=verify_otp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: state.otpSentTo, code: userCode })
    });
    const data = await res.json();

    if (!res.ok) {
      // Server returned 4xx: show the server error message
      showToast(data.error || "Código inválido! Tente novamente.");
      return;
    }

    showToast("Código verificado com sucesso! ✅");

    if (data.registered) {
      saveUserSession(data.user);
      showAppScreen();
      syncAppState();
    } else {
      document.getElementById('auth-step-otp').classList.add('hidden');
      document.getElementById('auth-step-register').classList.remove('hidden');
    }
  } catch (err) {
    showToast("Erro de comunicação com o servidor. Tente novamente.");
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.textContent = originalText;
    }
  }
}


async function handleCompleteRegister(e) {
  e.preventDefault();
  const username = document.getElementById('reg-username').value.trim().replace('@', '');
  const displayName = document.getElementById('reg-name').value.trim();
  let avatar = document.querySelector('.avatar-option.selected')?.dataset.avatar || 'DEFAULT';
  if (avatar === 'DEFAULT') avatar = DEFAULT_AVATAR;

  if (!username || !displayName) return;

  const newUser = {
    email: state.otpSentTo,
    username,
    displayName,
    avatar,
    isPremium: false
  };

  if (state.apiOffline) {
    // Save user locally
    const localUsers = JSON.parse(localStorage.getItem('loop_users_db') || '{}');
    localUsers[state.otpSentTo] = newUser;
    localStorage.setItem('loop_users_db', JSON.stringify(localUsers));
    
    saveUserSession(newUser);
    showToast("Conta criada em 9 segundos! Bem-vindo.");
    showAppScreen();
    syncAppState();
  } else {
    try {
      const res = await fetch(`${API_BASE}/auth.php?action=register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)
      });
      if (res.ok) {
        const data = await res.json();
        saveUserSession(data.user);
        showToast("Registro concluído!");
        showAppScreen();
        syncAppState();
      }
    } catch (err) {
      showToast("Falha ao registrar no banco de dados remoto.");
    }
  }
}

function handleLogout() {
  if (confirm("Deseja realmente sair da conta?")) {
    localStorage.removeItem(STORAGE_KEYS.USER);
    state.user = null;
    showAuthScreen();
    showToast("Sessão finalizada.");
  }
}

async function handleResetApp() {
  if (confirm("ATENÇÃO: Isso apagará permanentemente todas as suas conversas, contatos, mídias e chaves de criptografia locais. Essa ação NÃO pode ser desfeita. Deseja continuar?")) {
    showToast("Resetando dados...");
    
    // Call server to reset data if online
    if (!state.apiOffline && state.user) {
      try {
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${state.user.email}`
        };
        await fetch(`${API_BASE}/chat.php?action=reset_data`, {
          method: 'POST',
          headers
        });
      } catch (err) {
        console.error("Erro ao resetar dados remotos:", err);
      }
    }
    
    // Clear local storage loop-related keys
    localStorage.removeItem(STORAGE_KEYS.USER);
    localStorage.removeItem(STORAGE_KEYS.ROOMS);
    localStorage.removeItem(STORAGE_KEYS.MSGS);
    localStorage.removeItem('loop_joined_channels');
    localStorage.removeItem('loop_e2ee_pub');
    localStorage.removeItem('loop_e2ee_priv');
    localStorage.removeItem('loop_app_pin');
    localStorage.removeItem('loop_app_pin_lock');
    
    // Reset state
    state.user = null;
    state.rooms = [];
    state.messages = {};
    state.activeChatId = null;
    
    showToast("Aplicativo resetado com sucesso!");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
}

async function handleToggleUltraSecure(e) {
  if (!state.user) return;
  const isChecked = e.target.checked;
  const previousValue = state.user.ultraSecure;
  
  state.user.ultraSecure = isChecked;
  saveUserSession(state.user);
  
  if (!state.apiOffline) {
    showToast("Sincronizando configuração...");
    try {
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${state.user.email}`
      };
      const res = await fetch(`${API_BASE}/auth.php?action=update_ultra_secure`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ ultraSecure: isChecked ? 1 : 0 })
      });
      if (!res.ok) {
        throw new Error("Erro na resposta do servidor");
      }
      showToast(isChecked ? "Modo Ultra Seguro ativo. Mensagens com +24h serão excluídas." : "Modo Ultra Seguro inativo.");
    } catch (err) {
      console.error("Erro ao salvar configuração do modo seguro:", err);
      state.user.ultraSecure = previousValue;
      saveUserSession(state.user);
      e.target.checked = !!previousValue;
      showToast("Erro ao sincronizar com o servidor. Ação desfeita.");
      return;
    }
  } else {
    showToast(isChecked ? "Modo Ultra Seguro ativo localmente. Mensagens com +24h serão excluídas." : "Modo Ultra Seguro inativo.");
  }
  
  if (isChecked) {
    pruneOldMessages();
  }
}

function pruneOldMessages() {
  if (!state.user || !state.user.ultraSecure) return;
  
  const cutoff = Date.now() - 24 * 60 * 60 * 1000;
  let modified = false;
  
  for (const roomId in state.messages) {
    const originalLength = state.messages[roomId].length;
    state.messages[roomId] = state.messages[roomId].filter(m => {
      if (m.id < 1000000000000) return true; // Preserve mock/seed data for onboarding demo
      return m.id >= cutoff;
    });
    if (state.messages[roomId].length !== originalLength) {
      modified = true;
    }
  }
  
  if (modified) {
    console.log("Modo Ultra Seguro: Mensagens com mais de 24 horas foram removidas.");
    if (state.activeChatId) {
      renderActiveChatMessages();
    }
    renderChatList();
    if (state.apiOffline) {
      localStorage.setItem(STORAGE_KEYS.MSGS, JSON.stringify(state.messages));
    }
  }
}

// ── NAVIGATION & RENDERING ────────────────────────────────────
function switchView(viewName) {
  state.activeView = viewName;
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === viewName);
  });
  document.querySelectorAll('.view-pane').forEach(pane => {
    pane.classList.toggle('active', pane.id === `pane-${viewName}`);
  });
  
  // Format view title
  const titles = { chats: 'Loop Chats', communities: 'Grupos', search: 'Busca com IA', profile: 'Minha Identidade' };
  document.getElementById('view-title').textContent = titles[viewName] || 'Loop';

  // Clear search on switch
  const chatSearch = document.getElementById('chat-search');
  const btnClearSearch = document.getElementById('btn-clear-chat-search');
  if (chatSearch) {
    chatSearch.value = "";
    if (btnClearSearch) btnClearSearch.style.display = 'none';
    renderChatList();
  }

  if (viewName === 'profile') renderProfileDetails();
}

function renderProfileDetails() {
  document.getElementById('profile-display-name').textContent = state.user.displayName;
  document.getElementById('profile-username').textContent = `@${state.user.username}`;
  document.getElementById('profile-email').textContent = state.user.email;
  document.getElementById('profile-avatar-emoji').innerHTML = getAvatarHtml(state.user.avatar, '', '👤', state.user.displayName);
  
  const status = document.getElementById('profile-premium-status');
  if (state.user.isPremium) {
    status.textContent = "Assinatura Loop Premium Ativa";
    status.style.color = "var(--accent-cyan)";
  } else {
    status.textContent = "Plano Gratuito";
    status.style.color = "var(--text-muted)";
  }

  const inviteLink = (window.location.origin.includes('localhost') ? window.location.origin + '/app/loop/' : 'https://4u.ia.br/app/loop/') + `#@${state.user.username}`;
  document.getElementById('profile-invite-link').value = inviteLink;

  // Render a real neon cyan QR Code unique to the user's invite link
  document.getElementById('profile-qr-placeholder').innerHTML = `
    <img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(inviteLink)}&color=00f0ff&bgcolor=030508" 
         alt="QR Code" style="width:120px;height:120px;display:block;margin:0 auto;border-radius:4px;">
  `;
  
  // Set checked state for Ultra Secure Mode toggle
  const chkUltraSecure = document.getElementById('chk-ultra-secure');
  if (chkUltraSecure) {
    chkUltraSecure.checked = !!(state.user && state.user.ultraSecure);
  }

  // Update Keep AI credits UI
  updateCreditsUI();
}

// ── CHATS VIEW LOGIC ──────────────────────────────────────────
function renderChatList() {
  const container = document.getElementById('chat-list-items');
  container.innerHTML = "";
  
  const filterVal = document.getElementById('chat-search').value.toLowerCase().trim();
  
  state.rooms.forEach(room => {
    if (filterVal && !room.name.toLowerCase().includes(filterVal)) return;

    const div = document.createElement('div');
    div.className = `chat-item ${room.unread ? 'unread' : ''} ${state.activeChatId === room.id ? 'active' : ''}`;
    div.dataset.id = room.id;
    
    div.innerHTML = `
      <div class="chat-avatar">${getAvatarHtml(room.avatar, '', '💬', room.name)}</div>
      <div class="chat-item-meta">
        <div class="chat-item-title-row">
          <h4>${room.name}</h4>
          <span class="chat-item-time">${room.time}</span>
        </div>
        <div class="chat-item-last-msg">${room.lastMsg.startsWith('data:image/') ? '🖼️ Imagem' : room.lastMsg}</div>
      </div>
    `;

    div.addEventListener('click', () => selectChat(room.id));
    container.appendChild(div);
  });

  // Visual search action for new contact/user
  if (filterVal) {
    const cleanSearch = filterVal.startsWith('@') ? filterVal.substring(1) : filterVal;
    if (cleanSearch.match(/^[a-zA-Z0-9_.-]+$/)) {
      const searchItem = document.createElement('div');
      searchItem.className = 'chat-item search-action-item';
      searchItem.style.border = '1px dashed var(--accent-cyan)';
      searchItem.style.margin = '6px 0';
      searchItem.style.background = 'rgba(0, 240, 255, 0.05)';
      searchItem.innerHTML = `
        <div class="chat-avatar">🔍</div>
        <div class="chat-item-meta">
          <h4 style="color: var(--accent-cyan);">Buscar "@${cleanSearch}"</h4>
          <div class="chat-item-last-msg" style="color: var(--text-muted);">Clique para iniciar conversa privada</div>
        </div>
      `;
      searchItem.addEventListener('click', async () => {
        await startP2PChatWithUsername(cleanSearch);
      });
      container.appendChild(searchItem);
    }
  }
}

async function selectChat(roomId) {
  state.activeChatId = roomId;
  document.getElementById('no-chat-selected').classList.add('hidden');
  document.getElementById('active-chat-window').classList.remove('hidden');
  document.getElementById('app-container').classList.add('chat-active');
  
  // Clear search on chat select
  const chatSearch = document.getElementById('chat-search');
  const btnClearSearch = document.getElementById('btn-clear-chat-search');
  if (chatSearch) {
    chatSearch.value = "";
    if (btnClearSearch) btnClearSearch.style.display = 'none';
  }
  
  // Update header in chat window
  const activeRoom = state.rooms.find(r => r.id === roomId);
  if (!activeRoom) return; // Guard clause in case room isn't found
  
  document.getElementById('chat-window-avatar').innerHTML = getAvatarHtml(activeRoom.avatar, '', '💬', activeRoom.name);
  document.getElementById('chat-window-title').textContent = activeRoom.name;
  document.getElementById('chat-window-subtitle').textContent = activeRoom.type === 'ai' ? 'Loop Assistant' : 'criptografado ponta a ponta';

  const inviteBtn = document.getElementById('btn-invite-chat');
  const membersBtn = document.getElementById('btn-members-chat');
  if (inviteBtn) {
    if (activeRoom.type === 'group') {
      inviteBtn.classList.remove('hidden');
    } else {
      inviteBtn.classList.add('hidden');
    }
  }
  if (membersBtn) {
    if (activeRoom.type === 'group') {
      membersBtn.classList.remove('hidden');
    } else {
      membersBtn.classList.add('hidden');
    }
  }

  // Mark read
  activeRoom.unread = false;
  renderChatList();
  
  renderActiveChatMessages();
}


async function updateAvatarOnServer(base64Url) {
  if (state.apiOffline) {
    state.user.avatar = base64Url;
    saveUserSession(state.user);
    renderProfileDetails();
    return;
  }
  
  showToast("Atualizando foto de perfil...");
  try {
    const response = await fetch(`${API_BASE}/auth.php?action=update_avatar`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${state.user.email}`
      },
      body: JSON.stringify({ avatar: base64Url })
    });
    
    if (response.ok) {
      state.user.avatar = base64Url;
      saveUserSession(state.user);
      renderProfileDetails();
      
      // Update header user pill
      document.getElementById('header-user-pill').innerHTML = `
        <span class="user-avatar-emoji" style="display:flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;overflow:hidden;">${getAvatarHtml(state.user.avatar, '', '👤', state.user.displayName)}</span>
        <span class="user-username">@${state.user.username}</span>
      `;
      
      showToast("Foto de perfil atualizada!", "success");
      
      // Request active sync or refresh to reload message list showing the new avatar
      if (!state.apiOffline) {
        const resSync = await fetch(`${API_BASE}/chat.php?action=sync`, {
          headers: { 'Authorization': `Bearer ${state.user.email}` }
        });
        if (resSync.ok) {
          const syncData = await resSync.json();
          handleSsePayload(syncData);
        }
      }
    } else {
      const err = await response.json();
      showToast(`Erro: ${err.error || "falha ao atualizar"}`, "error");
    }
  } catch (err) {
    console.error("Error updating avatar:", err);
    showToast("Erro de conexão.", "error");
  }
}

async function renderActiveChatMessages() {
  const container = document.getElementById('chat-messages-history');
  container.innerHTML = "";
  
  const currentRoom = state.rooms.find(r => r.id === state.activeChatId);
  const messages = state.messages[state.activeChatId] || [];
  const sharedKey = await getActiveSharedKey();

  // Update Pinned Message Banner
  const pinBar = document.getElementById('pinned-message-bar');
  if (pinBar) {
    if (currentRoom && currentRoom.pinned_message_id) {
      const pinnedMsg = messages.find(m => m.id === currentRoom.pinned_message_id);
      if (pinnedMsg) {
        let pinSnippet = pinnedMsg.isAudio ? "🎤 Mensagem de voz" : (pinnedMsg.content || "");
        if (pinSnippet.length > 50) pinSnippet = pinSnippet.substring(0, 50) + "...";
        document.getElementById('pin-snippet-text').textContent = pinSnippet;
        pinBar.classList.remove('hidden');
        pinBar.onclick = (e) => {
          if (e.target.id === 'btn-unpin-current') {
            e.stopPropagation();
            handlePinMessage(null);
            return;
          }
          const targetEl = document.getElementById(`msg-${pinnedMsg.id}`);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
            targetEl.style.transition = 'all 0.3s';
            targetEl.style.boxShadow = '0 0 15px var(--accent-cyan)';
            setTimeout(() => targetEl.style.boxShadow = '', 1500);
          }
        };
      } else {
        pinBar.classList.add('hidden');
      }
    } else {
      pinBar.classList.add('hidden');
    }
  }
  
  for (const msg of messages) {
    const wrap = document.createElement('div');
    wrap.className = `msg-bubble-wrap ${msg.isMe ? 'sent' : 'received'} message-wrapper`;
    
    let contentHtml = "";
    let isDecryptedPlaceholder = false;
    let decryptedContent = msg.content;
    
    if (msg.isPlaceholder) {
      if (msg.placeholderType === 'image') {
        contentHtml = `
          <div class="message-spinner-container">
            <div class="message-spinner"></div>
            <span class="message-placeholder">🖼️ Processando imagem...</span>
          </div>
        `;
      } else {
        contentHtml = `
          <div class="message-spinner-container">
            <div class="message-spinner"></div>
            <span class="message-placeholder">🎤 Transcrevendo áudio...</span>
          </div>
        `;
      }
      isDecryptedPlaceholder = true;
    } else if (msg.isEncrypted) {
      if (!sharedKey) {
        decryptedContent = "🔒 [Mensagem criptografada - chave indisponível]";
      } else {
        try {
          decryptedContent = await E2EE.decrypt(msg.content, msg.iv, sharedKey);
        } catch (err) {
          decryptedContent = "🔒 [Mensagem de sessão anterior]";
        }
      }
    }
    
    if (!isDecryptedPlaceholder) {
      if (msg.isPoll && msg.poll) {
        const p = msg.poll;
        let optsHtml = p.options.map(opt => `
          <div class="poll-option-row ${opt.hasVoted ? 'voted' : ''}" data-poll-id="${p.id}" data-opt-id="${opt.id}">
            <div class="poll-fill-bar" style="width: ${opt.percentage}%;"></div>
            <span class="poll-opt-text">${opt.hasVoted ? '✓ ' : ''}${escapeHtml(opt.text)}</span>
            <span class="poll-opt-pct">${opt.percentage}% (${opt.votes})</span>
          </div>
        `).join('');
        contentHtml = `
          <div class="poll-card-container">
            <div class="poll-question">📊 ${escapeHtml(p.question)}</div>
            <div class="poll-options-list">${optsHtml}</div>
            <div class="poll-footer-info">${p.totalVotes} voto${p.totalVotes === 1 ? '' : 's'} • ${p.isMultiple ? 'Múltipla escolha' : 'Escolha única'}</div>
          </div>
        `;
      } else if (msg.isAudio) {
        contentHtml = `
          <div class="audio-card-simulated" data-audio-src="${decryptedContent || ''}">
            <div class="play-btn-circle">▶</div>
            <div class="audio-timeline-bar">
              <div class="audio-timeline-fill" style="width: 0%;"></div>
            </div>
            <span style="font-size: 8px; color: var(--accent-cyan); font-family: monospace;">${msg.audioDuration}</span>
          </div>
        `;
      } else if (decryptedContent && decryptedContent.startsWith('data:image/')) {
        contentHtml = `
          <div class="msg-image-wrap">
            <img src="${decryptedContent}" alt="Imagem" class="chat-msg-img" style="max-width: 100%; max-height: 250px; border-radius: 8px; cursor: pointer; display: block; margin-bottom: 4px;">
          </div>
        `;
      } else {
        // Check for links to preview
        let previewPlaceholder = "";
        if (decryptedContent && (decryptedContent.includes('http://') || decryptedContent.includes('https://'))) {
          previewPlaceholder = `<div class="link-preview-container" id="preview-${msg.id}"></div>`;
        }
        contentHtml = `<span>${decryptedContent || ''}</span>${previewPlaceholder}`;
      }
    }

    // Add translation if active
    let translationHtml = "";
    if (state.translationActive && !msg.isMe && decryptedContent) {
      const translations = {
        'Pessoal, precisamos finalizar os testes de segurança amanhã.': 'Guys, we need to finalize the security tests tomorrow.',
        'De acordo. Já ativei o Modo Ultra Seguro em homologação.': 'Agreed. I have already activated Ultra Secure Mode in staging.',
        'Fábio, as chaves Curve25519 foram geradas localmente com sucesso.': 'Fabio, the Curve25519 keys were successfully generated locally.',
        'Olá Fábio, fiz a verificação da auditoria de criptografia do Loop.': 'Hello Fabio, I completed the audit for Loop\'s encryption.',
        'Sim! Tivemos que ajustar a criptografia simétrica AES-GCM 256 bits, mas passou sem erros.': 'Yes! We had to adjust the AES-GCM 256-bit symmetric encryption, but it passed without errors.',
        'Enviei os relatórios de segurança do código-fonte.': 'I sent the source code security reports.',
        'Fábio, as novas correções do layout responsivo PWA chegaram hoje.': 'Fabio, the new fixes for the responsive PWA layout arrived today.',
      };
      const translated = translations[decryptedContent] || "AI: [Translation simulated into English]";
      translationHtml = `<div class="msg-translation-txt">${translated}</div>`;
    }

    // Add audio transcription if applicable
    let transcriptionHtml = "";
    if (msg.isAudio && !msg.isPlaceholder) {
      const transcriptText = msg.transcription || "Mensagem de voz recebida e processada.";
      transcriptionHtml = `
        <button class="btn-toggle-transcription" data-msg-id="${msg.id}">📝 Ler transcrição</button>
        <div class="audio-transcript-box hidden" id="transcript-${msg.id}">"${transcriptText}"</div>
      `;
    }

    // Reminder chip detector
    let reminderChipHtml = "";
    if (decryptedContent && !msg.isAudio && !msg.isPoll && typeof decryptedContent === 'string') {
      const reminderRegex = /(amanh[aã]|hoje|segunda|ter[çc]a|quarta|quinta|sexta|s[aá]bado|domingo|[0-3]?[0-9]\/[0-1]?[0-9]|às\s+[0-2]?[0-9](?:[:h][0-5]?[0-9])?|reuni[aã]o|lembr(?:e|ar)|compromisso|or[çc]amento|relat[oó]rio|prazo|entrega)/i;
      if (reminderRegex.test(decryptedContent)) {
        const cleanMsg = encodeURIComponent(decryptedContent.substring(0, 120));
        reminderChipHtml = `<div class="reminder-chip" data-reminder="${cleanMsg}">⏰ Criar Lembrete</div>`;
      }
    }

    // Message reactions row
    let reactionsHtml = "";
    if (msg.reactions && msg.reactions.length > 0) {
      reactionsHtml = `<div class="message-reactions-row">` + msg.reactions.map(r => `
        <span class="reaction-pill ${r.hasReacted ? 'active-reacted' : ''}" data-msg-id="${msg.id}" data-emoji="${r.emoji}" title="${(r.users || []).join(', ')}">
          <span>${r.emoji}</span>
          <span class="reaction-count">${r.count}</span>
        </span>
      `).join('') + `</div>`;
    }

    // Hover toolbar
    const hoverToolbar = `
      <div class="message-hover-toolbar">
        <button class="reaction-quick-btn" data-msg-id="${msg.id}" data-emoji="❤️">❤️</button>
        <button class="reaction-quick-btn" data-msg-id="${msg.id}" data-emoji="👍">👍</button>
        <button class="reaction-quick-btn" data-msg-id="${msg.id}" data-emoji="😂">😂</button>
        <button class="reaction-quick-btn" data-msg-id="${msg.id}" data-emoji="🔥">🔥</button>
        <button class="reaction-quick-btn" data-msg-id="${msg.id}" data-emoji="🚀">🚀</button>
        <button class="toolbar-action-btn btn-pin-msg" data-msg-id="${msg.id}" title="Fixar Mensagem">📌</button>
      </div>
    `;

    // Ephemeral expiration countdown
    let ephemeralBadge = "";
    if (msg.expiresAt) {
      const expDate = new Date(msg.expiresAt.replace(' ', 'T') + 'Z');
      const diffSec = Math.max(0, Math.floor((expDate.getTime() - Date.now()) / 1000));
      if (diffSec <= 0 && !msg.isPlaceholder) {
        return; // Message is already expired
      }
      const mins = Math.floor(diffSec / 60);
      const secs = diffSec % 60;
      const timeStr = mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
      ephemeralBadge = `<span class="ephemeral-badge ${diffSec < 15 ? 'expiring-soon' : ''}">⏳ ${timeStr}</span>`;
    }

    let destructHtml = "";
    if (msg.destructTime) {
      destructHtml = `<div class="msg-destruct-timer" id="timer-${msg.id}">⏳ ${msg.destructTime}s</div>`;
    }

    wrap.id = `msg-${msg.id}`;
    wrap.innerHTML = `
      ${hoverToolbar}
      ${!msg.isMe ? `<span class="msg-sender-name">${msg.sender}</span>` : ''}
      <div class="msg-bubble">
        <div>${contentHtml}</div>
        ${reminderChipHtml}
        ${translationHtml}
        ${transcriptionHtml}
        ${reactionsHtml}
        ${destructHtml}
        <div class="msg-meta-row">
          <span>${msg.time}</span>
          ${ephemeralBadge}
          ${msg.isMe ? '<span style="color: var(--accent-cyan);">✓✓</span>' : ''}
        </div>
      </div>
    `;
    container.appendChild(wrap);

    // Fetch link preview asynchronously if URL detected
    if (decryptedContent && (decryptedContent.includes('http://') || decryptedContent.includes('https://'))) {
      const match = decryptedContent.match(/(https?:\/\/[^\s]+)/);
      if (match && match[0]) {
        fetchLinkPreview(match[0], msg.id);
      }
    }

    // Active countdown timer trigger
    if (msg.destructTime && !state.activeTimers?.[msg.id]) {
      state.activeTimers = state.activeTimers || {};
      let timeLeft = msg.destructTime;
      state.activeTimers[msg.id] = setInterval(() => {
        timeLeft--;
        const timerEl = document.getElementById(`timer-${msg.id}`);
        if (timerEl) {
          timerEl.innerHTML = `⏳ ${timeLeft}s`;
        }
        if (timeLeft <= 0) {
          clearInterval(state.activeTimers[msg.id]);
          delete state.activeTimers[msg.id];
          
          // Remove from screen with animation
          const msgEl = document.getElementById(`msg-${msg.id}`);
          if (msgEl) {
            msgEl.style.transition = "all 0.3s ease";
            msgEl.style.opacity = "0";
            msgEl.style.transform = "scale(0.8)";
            setTimeout(() => msgEl.remove(), 300);
          }
          
          // Remove from state
          if (state.messages[state.activeChatId]) {
            state.messages[state.activeChatId] = state.messages[state.activeChatId].filter(m => m.id !== msg.id);
            if (state.apiOffline) {
              localStorage.setItem(STORAGE_KEYS.ROOMS, JSON.stringify(state.rooms));
              localStorage.setItem(STORAGE_KEYS.MSGS, JSON.stringify(state.messages));
            }
          }
        }
      }, 1000);
    }
  }

  // Attach Reaction Click Handlers
  container.querySelectorAll('.reaction-quick-btn, .reaction-pill').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const msgId = parseInt(btn.dataset.msgId);
      const emoji = btn.dataset.emoji;
      if (msgId && emoji) {
        handleMessageReaction(msgId, emoji);
      }
    });
  });

  // Attach Pin Message Handlers
  container.querySelectorAll('.btn-pin-msg').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const msgId = parseInt(btn.dataset.msgId);
      if (msgId) {
        handlePinMessage(msgId);
      }
    });
  });

  // Attach Audio Transcription Toggle Handlers
  container.querySelectorAll('.btn-toggle-transcription').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const msgId = btn.dataset.msgId;
      const box = document.getElementById(`transcript-${msgId}`);
      if (box) {
        box.classList.toggle('hidden');
        btn.textContent = box.classList.contains('hidden') ? '📝 Ler transcrição' : '📝 Ocultar transcrição';
      }
    });
  });
  
  // Attach real audio players to audio cards
  container.querySelectorAll('.audio-card-simulated').forEach(card => {
    const src = card.dataset.audioSrc;
    if (!src || !src.startsWith('data:audio/')) return;

    const playBtn = card.querySelector('.play-btn-circle');
    const timelineFill = card.querySelector('.audio-timeline-fill');
    
    let audio = card.audioObject;
    if (!audio) {
      try {
        audio = new Audio(src);
        card.audioObject = audio;

        audio.addEventListener('timeupdate', () => {
          if (audio.duration) {
            const pct = (audio.currentTime / audio.duration) * 100;
            timelineFill.style.width = `${pct}%`;
          }
        });

        audio.addEventListener('ended', () => {
          playBtn.textContent = '▶';
          timelineFill.style.width = '0%';
        });
      } catch (err) {
        console.error("Failed to initialize audio object:", err);
      }
    }

    if (audio) {
      playBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        
        // Stop all other playing audios
        container.querySelectorAll('.audio-card-simulated').forEach(otherCard => {
          if (otherCard !== card && otherCard.audioObject && !otherCard.audioObject.paused) {
            otherCard.audioObject.pause();
            otherCard.querySelector('.play-btn-circle').textContent = '▶';
          }
        });

        if (audio.paused) {
          audio.play().then(() => {
            playBtn.textContent = '⏸';
          }).catch(err => {
            console.error("Audio play failed:", err);
          });
        } else {
          audio.pause();
          playBtn.textContent = '▶';
        }
      });
    }
  });

  // Scroll to bottom
  container.scrollTop = container.scrollHeight;
  renderSmartReplies();
}

async function handleMessageReaction(msgId, emoji) {
  if (!msgId || !emoji || state.apiOffline) return;
  try {
    const res = await fetch(`${API_BASE}/chat.php?action=react`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${state.user.email}`
      },
      body: JSON.stringify({ message_id: msgId, emoji })
    });
    const data = await res.json();
    if (data.success) {
      const msgs = state.messages[state.activeChatId] || [];
      const m = msgs.find(x => x.id === msgId);
      if (m) {
        m.reactions = data.reactions;
        renderActiveChatMessages();
      }
    }
  } catch (err) {
    console.error("Error reacting to message:", err);
  }
}

async function handlePinMessage(msgId) {
  if (!state.activeChatId || state.apiOffline) return;
  const currentRoom = state.rooms.find(r => r.id === state.activeChatId);
  const targetId = (currentRoom && currentRoom.pinned_message_id === msgId) ? null : msgId;
  
  try {
    const res = await fetch(`${API_BASE}/chat.php?action=pin_message`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${state.user.email}`
      },
      body: JSON.stringify({ room_id: state.activeChatId, message_id: targetId })
    });
    const data = await res.json();
    if (data.success) {
      if (currentRoom) {
        currentRoom.pinned_message_id = data.pinned_message_id;
      }
      renderActiveChatMessages();
      showToast(targetId ? "Mensagem fixada no topo! 📌" : "Mensagem desafixada.");
    }
  } catch (err) {
    console.error("Error pinning message:", err);
  }
}

const previewCache = {};
async function fetchLinkPreview(url, msgId) {
  const container = document.getElementById(`preview-${msgId}`);
  if (!container) return;
  
  if (previewCache[url]) {
    renderLinkPreviewCard(container, previewCache[url]);
    return;
  }

  try {
    const res = await fetch(`${API_BASE}/chat.php?action=link_preview`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${state.user.email}`
      },
      body: JSON.stringify({ url })
    });
    const data = await res.json();
    if (data.success && data.preview) {
      previewCache[url] = data.preview;
      renderLinkPreviewCard(container, data.preview);
    }
  } catch (err) {
    // Ignore silent link preview failures
  }
}

function renderLinkPreviewCard(container, p) {
  if (!container || !p) return;
  container.innerHTML = `
    <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="link-preview-card">
      ${p.image ? `<img src="${p.image}" alt="Preview" class="link-preview-img" onerror="this.style.display='none';">` : ''}
      <div class="link-preview-details">
        <span class="link-preview-site">${p.url.replace(/https?:\/\//, '').split('/')[0]}</span>
        <div class="link-preview-title">${p.title || 'Link'}</div>
        ${p.description ? `<div class="link-preview-desc">${p.description}</div>` : ''}
      </div>
    </a>
  `;
}

function renderSmartReplies() {
  const container = document.getElementById('smart-replies-container');
  container.innerHTML = "";

  const messages = state.messages[state.activeChatId] || [];
  if (messages.length === 0) return;

  const lastMsg = messages[messages.length - 1];
  if (lastMsg.isMe) return; // Only suggest replies to others

  let suggestions = ["Entendido!", "Vou verificar agora", "Excelente!"];
  
  if (lastMsg.content.includes("criptografia") || lastMsg.content.includes("e2ee")) {
    suggestions = ["Chaves geradas localmente!", "Protocolo Curve25519 verificado.", "AES-GCM está ativo?"];
  } else if (lastMsg.content.includes("ultra") || lastMsg.content.includes("autodestruir")) {
    suggestions = ["Limpeza em 24h ativada", "Apaga do servidor também?", "Tudo limpo com sucesso!"];
  } else if (lastMsg.content.includes("pin") || lastMsg.content.includes("bloqueio")) {
    suggestions = ["PIN definido no perfil", "Bloqueio por inatividade ativo", "Como altero o PIN?"];
  } else if (lastMsg.isAudio) {
    suggestions = ["Transcrição lida!", "Pode repetir por favor?", "Ok, anotado!"];
  }

  suggestions.forEach(txt => {
    const pill = document.createElement('div');
    pill.className = 'smart-reply-pill';
    pill.textContent = txt;
    pill.addEventListener('click', () => {
      document.getElementById('message-input').value = txt;
      handleSendMessage();
    });
    container.appendChild(pill);
  });
}

// ── SEND MESSAGE FLOW ─────────────────────────────────────────
async function handleSendMessage() {
  const input = document.getElementById('message-input');
  const txt = input.value.trim();
  if (!txt) return;

  input.value = "";
  input.style.height = 'auto';
  const parentBar = input.closest('.chat-input-bar');
  if (parentBar) {
    parentBar.style.height = 'auto';
  }

  const newMsg = {
    id: Date.now(),
    sender: state.user.displayName,
    senderAvatar: state.user.avatar || DEFAULT_AVATAR,
    content: txt,
    time: getCurrentTime(),
    isMe: true
  };

  // Self destruct timer integration
  if (state.selfDestructTimer > 0) {
    newMsg.destructTime = state.selfDestructTimer;
    // Reset timer state after sending
    state.selfDestructTimer = 0;
    const sdBtn = document.getElementById('btn-self-destruct');
    sdBtn.textContent = '⏱️ Off';
    sdBtn.classList.remove('active');
  }

  // Add locally
  state.messages[state.activeChatId].push(newMsg);
  
  // Update last message in room list
  const activeRoom = state.rooms.find(r => r.id === state.activeChatId);
  activeRoom.lastMsg = `Você: ${txt}`;
  activeRoom.time = getCurrentTime();

  renderActiveChatMessages();
  renderChatList();

  // Save changes locally
  if (state.apiOffline) {
    localStorage.setItem(STORAGE_KEYS.ROOMS, JSON.stringify(state.rooms));
    localStorage.setItem(STORAGE_KEYS.MSGS, JSON.stringify(state.messages));
  } else {
    // Send to remote SQLite
    await sendRemoteMessage(state.activeChatId, txt);
  }

  // Stop typing indicator on send
  clearTimeout(_typingDebounceTimer);
  if (_isCurrentlyTyping) {
    _isCurrentlyTyping = false;
    sendTypingStatus(false);
  }

  // Trigger NLP tasks extraction simulation
  triggerNLPDetection(txt);

  // Trigger AI assistant automated response if chatting with AI
  if (state.activeChatId === 'loop-ai') {
    // Show WhatsApp-style typing indicator (AI mode — no name label)
    const typingEl = getTypingIndicatorEl();
    typingEl._aiActive = true;
    showTypingIndicator(null); // no name for AI
    setTimeout(triggerAIAssistantResponse, 1800);
  }
}

async function sendRemoteMessage(roomId, content) {
  try {
    let payload = { room_id: roomId, content: content };
    
    // Encrypt if room is P2P private room
    if (typeof roomId === 'string' && roomId.startsWith('p2p-')) {
      const sharedKey = await getActiveSharedKey();
      if (sharedKey) {
        const encrypted = await E2EE.encrypt(content, sharedKey);
        payload.content = encrypted.ciphertext;
        payload.iv = encrypted.iv;
        payload.is_encrypted = 1;
      }
    }
    
    const res = await fetch(`${API_BASE}/chat.php?action=send_message`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${state.user.email}`
      },
      body: JSON.stringify(payload)
    });
    if (res.status === 401) {
      showToast("Sessão inválida ou usuário não encontrado. Faça login novamente.");
      handleLogout();
      return;
    }
  } catch (e) {
    console.error("Failed to post message to remote server:", e);
  }
}

function triggerNLPDetection(txt) {
  const detected = [];
  const lower = txt.toLowerCase();

  if (lower.includes("entregar") || lower.includes("enviar") || lower.includes("fazer")) {
    detected.push({ task: txt, type: 'TAREFA' });
  }
  if (lower.includes("reunião") || lower.includes("compromisso") || lower.includes("amanhã às") || lower.includes("hoje às")) {
    detected.push({ task: txt, type: 'COMPROMISSO' });
  }

  if (detected.length > 0) {
    const list = document.getElementById('detected-tasks-list');
    list.innerHTML = "";
    
    detected.forEach(item => {
      const div = document.createElement('div');
      div.className = 'detected-task-item';
      div.innerHTML = `
        <span>📌 ${item.task}</span>
        <span class="task-tag">${item.type}</span>
      `;
      list.appendChild(div);
    });

    document.getElementById('task-detector-box').classList.remove('hidden');
    showToast("🧠 IA: Nova tarefa/compromisso detectado na mensagem!");
  }
}

function triggerAIAssistantResponse() {
  // Hide typing indicator and release AI lock
  const typingEl = getTypingIndicatorEl();
  typingEl._aiActive = false;
  hideTypingIndicator();

  const msgs = state.messages['loop-ai'];
  const lastUserMsg = msgs[msgs.length - 1].content.toLowerCase();
  
  // Normalize user message to remove accents/diacritics
  const cleanMsg = lastUserMsg.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  
  let aiText = "Sou o assistente oficial do Loop! Posso ajudar com dúvidas sobre: 1. Criptografia E2EE (segurança); 2. Modo Ultra Seguro; 3. Reset de Dados; 4. Transcrição de Áudio; 5. Tradução em Tempo Real; 6. Extração de Tarefas; 7. Bloqueio por PIN; 8. Busca Inteligente OCR; 9. Saldo e Recargas Pix. Como posso ajudar?";

  if (cleanMsg.includes("resumo") || cleanMsg.includes("resumir")) {
    aiText = "Loop AI: Posso resumir qualquer chat ou grupo. Ao clicar no botão 'Resumo por IA' no cabeçalho do chat, eu analiso as últimas mensagens e apresento os pontos principais de forma resumida de modo a poupar seu tempo.";
  } else if (cleanMsg.includes("grupo") || cleanMsg.includes("grupos") || cleanMsg.includes("criar")) {
    aiText = "Loop AI: No Loop, você pode criar grupos clicando no ícone '+' na barra de navegação superior, selecionando 'Criar Grupo'. Os membros podem conversar, compartilhar mídias e gerar resumos automáticos por IA.";
  } else if (cleanMsg.includes("tarefa") || cleanMsg.includes("extrair") || cleanMsg.includes("nlp") || cleanMsg.includes("compromisso")) {
    aiText = "Loop AI: A extração automática de tarefas analisa o fluxo das mensagens usando processamento de linguagem natural (NLP). Quando mensagens com verbos de ação ('enviar', 'fazer', 'entregar') ou agendamentos ('amanhã', 'hoje às 15h') são enviadas, as pendências aparecem no painel de tarefas no topo do chat ativo.";
  } else if (cleanMsg.includes("traduzir") || cleanMsg.includes("traducao") || cleanMsg.includes("idioma")) {
    aiText = "Loop AI: A tradução em tempo real permite que você converse com pessoas de outros países de forma fluida. Ao ativar o botão 'Traduzir' no cabeçalho do chat ativo, as mensagens enviadas e recebidas são traduzidas instantaneamente entre português e inglês.";
  } else if (cleanMsg.includes("audio") || cleanMsg.includes("transcrever") || cleanMsg.includes("transcricao")) {
    aiText = "Loop AI: O Loop AI transcreve automaticamente mensagens de voz enviadas no chat. O texto transcrito é exibido logo abaixo do áudio e é totalmente indexado na busca, permitindo que você encontre áudios antigos pesquisando pelas palavras faladas.";
  } else if (cleanMsg.includes("criptografia") || cleanMsg.includes("e2ee") || cleanMsg.includes("seguranca")) {
    aiText = "Loop AI: Todas as conversas privadas e arquivos do Loop são protegidos com criptografia de ponta a ponta (E2EE) utilizando chaves Curve25519 e cifra AES-GCM geradas localmente. Isso significa que apenas você e o destinatário possuem as chaves para ler as mensagens.";
  } else if (cleanMsg.includes("ultra seguro") || cleanMsg.includes("ultra") || cleanMsg.includes("24h") || cleanMsg.includes("autodestruir") || cleanMsg.includes("self-destruct")) {
    aiText = "Loop AI: O Modo Ultra Seguro é um mecanismo de auto-destruição em 24h. Quando ativado nas configurações do Perfil, qualquer mensagem e anexo com mais de 24 horas é deletado de forma permanente e definitiva do seu dispositivo e dos servidores do Loop.";
  } else if (cleanMsg.includes("reset") || cleanMsg.includes("resetar") || cleanMsg.includes("limpar")) {
    aiText = "Loop AI: O botão 'Resetar' no Perfil apaga de forma permanente todos os dados do dispositivo (localStorage, chaves de criptografia, sessões) e do servidor (mensagens, salas privadas, tokens de notificação), realizando um logout completo.";
  } else if (cleanMsg.includes("pin") || cleanMsg.includes("bloqueio") || cleanMsg.includes("senha")) {
    aiText = "Loop AI: Você pode ativar o Bloqueio por PIN nas configurações de Perfil para proteger o app. Sempre que você fechar e reabrir o app (ou após inatividade), o Loop exigirá o código PIN de 4 dígitos definido.";
  } else if (cleanMsg.includes("buscar") || cleanMsg.includes("pesquisa") || cleanMsg.includes("ocr")) {
    aiText = "Loop AI: A busca integrada do Loop permite filtrar o histórico por texto, transcrições de áudio e até texto extraído de imagens/anexos PDF usando reconhecimento óptico de caracteres (OCR).";
  } else if (cleanMsg.includes("saldo") || cleanMsg.includes("credito") || cleanMsg.includes("pix") || cleanMsg.includes("recarga")) {
    aiText = "Loop AI: O uso de recursos de IA consome créditos. Você pode consultar seu saldo, gerar um QR Code Pix para recarga instantânea ou gerenciar suas transações na aba de Perfil.";
  } else if (cleanMsg.includes("revisor") || cleanMsg.includes("revisao") || cleanMsg.includes("google") || cleanMsg.includes("otp")) {
    aiText = "Loop AI: Para as equipes de revisão das lojas de aplicativos, o Loop suporta um bypass de testes seguro. Utilizando o e-mail cadastrado do revisor e o código OTP padrão de homologação, o app é carregado em ambiente seguro com todas as funções de IA e criptografia ativas.";
  } else if (cleanMsg.includes("suporte") || cleanMsg.includes("contato") || cleanMsg.includes("ajuda")) {
    aiText = "Loop AI: Se precisar de suporte adicional, entre em contato conosco preenchendo o formulário de contato em nosso site oficial: https://4u.ia.br/#contact. Não exibimos e-mails de suporte direto dentro do app para evitar spam.";
  }

  const aiMsg = {
    id: Date.now() + 1,
    sender: 'Loop AI',
    senderAvatar: DEFAULT_AI_AVATAR,
    content: aiText,
    time: getCurrentTime(),
    isMe: false
  };

  state.messages['loop-ai'].push(aiMsg);
  
  const aiRoom = state.rooms.find(r => r.id === 'loop-ai');
  aiRoom.lastMsg = aiText;
  aiRoom.time = getCurrentTime();

  renderActiveChatMessages();
  renderChatList();

  if (state.apiOffline) {
    localStorage.setItem(STORAGE_KEYS.ROOMS, JSON.stringify(state.rooms));
    localStorage.setItem(STORAGE_KEYS.MSGS, JSON.stringify(state.messages));
  }
}

// ── IA FEATURES ───────────────────────────────────────────────
async function handleAISummarize() {
  if (!state.activeChatId || !state.messages[state.activeChatId] || state.messages[state.activeChatId].length === 0) {
    showToast("Nenhuma mensagem nesta conversa para resumir.");
    return;
  }
  
  showToast("Resumindo conversa com IA...");
  
  // Extract rendered / decrypted text messages from the chat DOM or state
  const chatMessages = [];
  const renderedBubbles = document.querySelectorAll('#chat-history .msg-row');
  if (renderedBubbles.length > 0) {
    renderedBubbles.forEach(row => {
      const sender = row.querySelector('.msg-sender')?.textContent?.trim() || (row.classList.contains('me') ? (state.user ? state.user.displayName : 'Eu') : 'Contato');
      const textSpan = row.querySelector('.msg-bubble > span');
      const text = textSpan ? textSpan.textContent?.trim() : '';
      if (text && !text.startsWith('🔒') && !text.startsWith('✨ Loop AI') && !text.startsWith('Loop AI:')) {
        chatMessages.push({ sender, content: text });
      }
    });
  }
  
  if (chatMessages.length === 0) {
    state.messages[state.activeChatId].forEach(m => {
      if (m.content && !m.content.startsWith('data:image/') && !m.isEncrypted) {
        chatMessages.push({ sender: m.sender || 'Usuário', content: m.content });
      }
    });
  }
  
  if (chatMessages.length === 0) {
    showToast("Não há mensagens de texto legíveis para resumir.");
    return;
  }

  try {
    const res = await fetch(`${API_BASE}/ai.php?action=summarize`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': state.user ? `Bearer ${state.user.email}` : ''
      },
      body: JSON.stringify({
        room_id: state.activeChatId,
        messages: chatMessages
      })
    });
    
    const data = await res.json();
    const summaryText = data.summary || "Loop AI: Não foi possível gerar o resumo.";
    
    const aiMsg = {
      id: Date.now(),
      sender: 'Loop AI (Resumo)',
      senderAvatar: DEFAULT_AI_AVATAR,
      content: summaryText,
      time: getCurrentTime(),
      isMe: false
    };

    state.messages[state.activeChatId].push(aiMsg);
    renderActiveChatMessages();
    showToast("Resumo gerado com sucesso! ✨");
  } catch (err) {
    console.error("Error summarizing chat:", err);
    showToast("Erro de conexão ao gerar resumo.");
  }
}

function toggleRealTimeTranslation() {
  state.translationActive = !state.translationActive;
  document.getElementById('translation-bar').classList.toggle('hidden', !state.translationActive);
  renderActiveChatMessages();
  showToast(state.translationActive ? "Tradução em tempo real ativa!" : "Tradução desativada.");
}

function disableTranslation() {
  state.translationActive = false;
  document.getElementById('translation-bar').classList.add('hidden');
  renderActiveChatMessages();
}

async function handleVoiceSimulation() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || typeof MediaRecorder === 'undefined') {
    showToast("Gravação de áudio não suportada neste navegador.");
    return;
  }

  const micBtn = document.getElementById('btn-voice-msg');

  if (!isRecordingAudio) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioChunks = [];
      mediaRecorder = new MediaRecorder(stream);
      
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunks.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        stream.getTracks().forEach(track => track.stop());
        
        const mimeType = mediaRecorder.mimeType || 'audio/webm';
        const audioBlob = new Blob(audioChunks, { type: mimeType });
        
        const reader = new FileReader();
        reader.readAsDataURL(audioBlob);
        reader.onloadend = async () => {
          const base64Audio = reader.result;
          
          const durationSeconds = Math.max(1, Math.round((Date.now() - audioStartTime) / 1000));
          const formattedDuration = formatDuration(durationSeconds);
          
          const transcriptionText = transcriptionResult.trim() || "Mensagem de voz gravada";
          
          const newMsg = {
            id: Date.now(),
            sender: state.user.displayName,
            senderAvatar: state.user.avatar || DEFAULT_AVATAR,
            content: base64Audio,
            isAudio: true,
            audioDuration: formattedDuration,
            transcription: state.apiOffline ? transcriptionText : "Processando transcrição...",
            isPlaceholder: !state.apiOffline,
            placeholderType: 'audio',
            time: getCurrentTime(),
            isMe: true
          };

          if (!state.messages[state.activeChatId]) {
            state.messages[state.activeChatId] = [];
          }
          state.messages[state.activeChatId].push(newMsg);
          
          const activeRoom = state.rooms.find(r => r.id === state.activeChatId);
          if (activeRoom) {
            activeRoom.lastMsg = `Você: 🎤 Áudio de ${formattedDuration}`;
            activeRoom.time = getCurrentTime();
          }

          renderActiveChatMessages();
          renderChatList();

          if (state.apiOffline) {
            localStorage.setItem(STORAGE_KEYS.ROOMS, JSON.stringify(state.rooms));
            localStorage.setItem(STORAGE_KEYS.MSGS, JSON.stringify(state.messages));
          } else {
            try {
              let payload = {
                room_id: state.activeChatId,
                content: base64Audio,
                is_audio: 1,
                audio_duration: formattedDuration,
                transcription: transcriptionText
              };
              
              // Encrypt if room is P2P private room
              if (typeof state.activeChatId === 'string' && state.activeChatId.startsWith('p2p-')) {
                const sharedKey = await getActiveSharedKey();
                if (sharedKey) {
                  const encrypted = await E2EE.encrypt(base64Audio, sharedKey);
                  payload.content = encrypted.ciphertext;
                  payload.iv = encrypted.iv;
                  payload.is_encrypted = 1;
                }
              }
              
              await fetch(`${API_BASE}/chat.php?action=send_message`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${state.user.email}`
                },
                body: JSON.stringify(payload)
              });
            } catch (e) {
              console.error("Error sending remote audio message:", e);
            }
          }
          
          showToast("Áudio enviado e transcrito!");
        };
      };

      transcriptionResult = "";
      try {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
          const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
          recognitionInstance = new SpeechRecognition();
          recognitionInstance.lang = 'pt-BR';
          recognitionInstance.continuous = true;
          recognitionInstance.interimResults = false;
          
          recognitionInstance.onresult = (event) => {
            for (let i = event.resultIndex; i < event.results.length; ++i) {
              if (event.results[i].isFinal) {
                transcriptionResult += event.results[i][0].transcript + " ";
              }
            }
          };

          recognitionInstance.onerror = (e) => {
            console.error("Speech recognition error:", e);
          };

          recognitionInstance.start();
        }
      } catch (recognitionErr) {
        console.error("Failed to start SpeechRecognition:", recognitionErr);
      }

      mediaRecorder.start();
      isRecordingAudio = true;
      audioStartTime = Date.now();
      
      micBtn.textContent = '🛑';
      micBtn.style.color = '#ff3b30';
      micBtn.title = 'Parar e enviar áudio';
      showToast("🎙️ Gravando áudio... Clique de novo para enviar.");
      
    } catch (err) {
      console.error("Error accessing microphone:", err);
      showToast("Erro ao acessar o microfone.");
    }
  } else {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder.stop();
    }
    if (recognitionInstance) {
      try {
        recognitionInstance.stop();
      } catch (e) {
        console.error(e);
      }
    }
    isRecordingAudio = false;
    
    micBtn.textContent = '🎤';
    micBtn.style.color = '';
    micBtn.title = 'Gravar mensagem de voz';
  }
}

// ── COMMUNITIES & CHECKOUT ────────────────────────────────────
async function renderCommunitiesList() {
  const grid = document.getElementById('communities-list-grid');
  if (!grid) return;
  grid.innerHTML = "";

  let groups = [...MOCK_COMMUNITIES];

  if (!state.apiOffline) {
    try {
      const headers = { 'Authorization': `Bearer ${state.user.email}` };
      const res = await fetch(`${API_BASE}/chat.php?action=get_public_groups`, { headers });
      if (res.ok) {
        const serverGroups = await res.json();
        serverGroups.forEach(sg => {
          const cleanSgId = sg.id.toString().replace('ch-', '');
          const exists = groups.some(g => g.id.toString().replace('ch-', '') === cleanSgId);
          if (!exists) {
            groups.push(sg);
          }
        });
      }
    } catch (e) {
      console.error("Failed to load public groups from server:", e);
    }
  }

  const joined = JSON.parse(localStorage.getItem('loop_joined_channels') || '[]');
  
  // Clear grid right before rendering to avoid race condition duplicates
  grid.innerHTML = "";
  groups.forEach(ch => {
    const hasJoined = joined.includes(ch.id) || joined.includes(ch.id.toString().replace('ch-', '')) || state.rooms.some(r => r.id === ch.id || r.id === `ch-${ch.id}`);
    const card = document.createElement('div');
    card.className = `community-card ${ch.isPremium ? 'premium-channel' : ''}`;
    
    card.innerHTML = `
      <span class="channel-badge ${ch.isPremium ? 'badge-premium' : 'badge-free'}">
        ${ch.isPremium ? `Premium · R$ ${ch.price.toFixed(2)}` : 'Livre'}
      </span>
      <h3>${ch.name}</h3>
      <p>${ch.desc}</p>
      <div class="community-meta-row">
        <span>👥 ${ch.members} membros</span>
        <button class="btn-join-channel" data-id="${ch.id}">
          ${hasJoined ? 'Entrar' : (ch.isPremium ? 'Assinar' : 'Inscrição')}
        </button>
      </div>
    `;

    card.querySelector('.btn-join-channel').addEventListener('click', () => handleJoinChannel(ch));
    grid.appendChild(card);
  });
}

function handleJoinChannel(channel) {
  const isJoined = state.rooms.some(r => r.id === channel.id || r.id === `ch-${channel.id}`);
  
  if (isJoined) {
    openChannelChat(channel);
  } else {
    if (channel.isPremium) {
      openCheckout(channel);
    } else {
      const joined = JSON.parse(localStorage.getItem('loop_joined_channels') || '[]');
      if (!joined.includes(channel.id)) {
        joined.push(channel.id);
        localStorage.setItem('loop_joined_channels', JSON.stringify(joined));
      }
      
      if (!state.apiOffline) {
        fetch(`${API_BASE}/chat.php?action=join_room`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${state.user.email}`
          },
          body: JSON.stringify({ room_id: channel.id.toString().startsWith('ch-') ? channel.id : `ch-${channel.id}` })
        }).then(res => {
          if (res.ok) {
            showToast(`Inscrito no grupo ${channel.name}!`);
            fetchRoomsAndMessages();
          }
        }).catch(err => console.error("Error joining group on server:", err));
      } else {
        showToast(`Inscrito no grupo ${channel.name}!`);
        addChannelToActiveChats(channel);
        renderCommunitiesList();
      }
    }
  }
}

function openChannelChat(channel) {
  // Check if room already in state
  const cleanId = channel.id.toString().startsWith('ch-') ? channel.id : `ch-${channel.id}`;
  let room = state.rooms.find(r => r.id === cleanId);
  if (!room) {
    room = {
      id: cleanId,
      type: 'group',
      name: channel.name,
      avatar: 'assets/nav_grupos.png',
      lastMsg: 'Seja bem-vindo ao grupo!',
      time: 'Agora',
      unread: false
    };
    state.rooms.push(room);
    state.messages[room.id] = [
      { id: Date.now(), sender: 'Sistema', senderAvatar: 'assets/nav_grupos.png', content: `Bem-vindo ao grupo ${channel.name}!`, time: getCurrentTime(), isMe: false }
    ];
  }
  
  switchView('chats');
  selectChat(room.id);
}

async function openCheckout(channel) {
  document.getElementById('checkout-item-title').textContent = `Assinatura: ${channel.name}`;
  document.getElementById('checkout-item-price').textContent = `R$ ${channel.price.toFixed(2)}`;
  document.getElementById('btn-confirm-payment').dataset.channelId = channel.id;
  
  const qrHolder = document.querySelector('.qr-placeholder-pix');
  const copyInput = document.getElementById('pix-copia-cola');
  const confirmBtn = document.getElementById('btn-confirm-payment');
  
  if (paymentPollingInterval) {
    clearInterval(paymentPollingInterval);
    paymentPollingInterval = null;
  }
  
  if (state.apiOffline) {
    qrHolder.innerHTML = '<div class="qr-pix-blocks"></div>';
    const randomKey = `00020101021226870014br.gov.bcb.pix0158pix-pay.4u.ia.br-loop-${channel.id}-${Math.floor(Math.random() * 10000)}`;
    copyInput.value = randomKey;
    confirmBtn.textContent = 'Simular Confirmação de Pagamento';
    confirmBtn.disabled = false;
  } else {
    qrHolder.innerHTML = '<span class="text-muted" style="font-size:10px;">Gerando Pix...</span>';
    copyInput.value = 'Aguarde...';
    confirmBtn.textContent = 'Aguardando Pagamento...';
    confirmBtn.disabled = true;
    
    try {
      const res = await fetch(`${API_BASE}/payment.php?action=create_pix`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${state.user.email}`
        },
        body: JSON.stringify({ room_id: channel.id.toString().startsWith('ch-') ? channel.id : `ch-${channel.id}` })
      });
      
      const data = await res.json();
      if (data.success) {
        if (data.status === 'approved') {
          showToast("Você já está inscrito neste canal!");
          handleSuccessfulSubscription(channel.id);
          return;
        }
        
        qrHolder.innerHTML = `<img src="data:image/png;base64,${data.qr_code_base64}" style="width: 100%; height: 100%; object-fit: contain;">`;
        copyInput.value = data.qr_code;
        confirmBtn.dataset.paymentId = data.payment_id;
        
        paymentPollingInterval = setInterval(() => {
          checkPaymentStatus(data.payment_id, channel);
        }, 3000);
      } else {
        showToast("Erro ao gerar Pix: " + (data.error || "tente novamente"));
      }
    } catch (e) {
      console.error(e);
      showToast("Falha de rede ao gerar checkout Pix.");
    }
  }
  
  document.getElementById('premium-checkout-modal').classList.add('show');
}

function handleConfirmPayment() {
  if (!state.apiOffline) {
    showToast("Aguardando liquidação automática via Pix Mercado Pago...");
    return;
  }
  const btn = document.getElementById('btn-confirm-payment');
  const channelId = btn.dataset.channelId;
  
  showToast("Verificando liquidação simulada...");
  setTimeout(() => {
    handleSuccessfulSubscription(channelId);
  }, 1000);
}

async function checkPaymentStatus(paymentId, channel) {
  if (state.apiOffline) return;
  try {
    const res = await fetch(`${API_BASE}/payment.php?action=check_status&payment_id=${paymentId}`, {
      headers: {
        'Authorization': `Bearer ${state.user.email}`
      }
    });
    const data = await res.json();
    if (data.success && data.status === 'approved') {
      if (paymentPollingInterval) {
        clearInterval(paymentPollingInterval);
        paymentPollingInterval = null;
      }
      showToast("Pagamento liquidado com sucesso!");
      handleSuccessfulSubscription(channel.id);
    }
  } catch (e) {
    console.error("Error checking payment status:", e);
  }
}

function handleSuccessfulSubscription(channelId) {
  const joined = JSON.parse(localStorage.getItem('loop_joined_channels') || '[]');
  if (!joined.includes(channelId)) {
    joined.push(channelId);
    localStorage.setItem('loop_joined_channels', JSON.stringify(joined));
  }

  state.user.isPremium = true;
  saveUserSession(state.user);
  showAppScreen();

  let channel = MOCK_COMMUNITIES.find(c => c.id === channelId || c.id === `ch-${channelId}` || c.id.toString() === channelId.toString());
  if (!channel) {
    const room = state.rooms.find(r => r.id === channelId || r.id === `ch-${channelId}` || r.id.toString() === channelId.toString());
    if (room) {
      channel = {
        id: room.id,
        name: room.name,
        desc: room.desc || "Grupo premium.",
        isPremium: true,
        price: parseFloat(room.price || 0)
      };
    } else {
      channel = {
        id: channelId,
        name: "Grupo Premium",
        desc: "Acesso Premium",
        isPremium: true,
        price: 0
      };
    }
  }

  if (channel) {
    if (!state.apiOffline) {
      fetch(`${API_BASE}/chat.php?action=join_room`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${state.user.email}`
        },
        body: JSON.stringify({ room_id: channel.id.toString().startsWith('ch-') ? channel.id : `ch-${channel.id}` })
      }).then(res => {
        if (res.ok) {
          showToast(`Bem-vindo ao grupo premium ${channel.name}!`);
          fetchRoomsAndMessages();
        }
      }).catch(err => console.error("Error joining group on server:", err));
    } else {
      addChannelToActiveChats(channel);
      showToast(`Bem-vindo ao grupo premium ${channel.name}!`);
    }
  }
  
  document.getElementById('premium-checkout-modal').classList.remove('show');
  renderCommunitiesList();
  
  if (!state.apiOffline) {
    fetchRoomsAndMessages();
  }
}

function addChannelToActiveChats(channel) {
  const roomId = channel.id.toString().startsWith('ch-') ? channel.id : `ch-${channel.id}`;
  if (!state.rooms.some(r => r.id === roomId)) {
    state.rooms.push({
      id: roomId,
      type: 'group',
      name: channel.name,
      avatar: 'assets/nav_grupos.png',
      lastMsg: 'Assinatura confirmada. Bem-vindo!',
      time: getCurrentTime(),
      unread: true
    });
    state.messages[roomId] = [
      { id: Date.now(), sender: 'Moderador', senderAvatar: 'assets/nav_grupos.png', content: `Olá! Este é o feed exclusivo do grupo ${channel.name}.`, time: getCurrentTime(), isMe: false }
    ];
    
    if (state.apiOffline) {
      localStorage.setItem(STORAGE_KEYS.ROOMS, JSON.stringify(state.rooms));
      localStorage.setItem(STORAGE_KEYS.MSGS, JSON.stringify(state.messages));
    }
    renderChatList();
  }
}

function handleCreateChannel() {
  const name = document.getElementById('channel-name').value.trim();
  const desc = document.getElementById('channel-desc').value.trim();
  const isPrivate = document.getElementById('channel-private-flag').checked;
  const isPremium = document.getElementById('channel-premium-flag').checked;
  const priceVal = parseFloat(document.getElementById('channel-price').value);
  const pixKey = document.getElementById('channel-pix').value.trim();

  if (!name || !desc) {
    showToast("Preencha o nome e a descrição do grupo.");
    return;
  }

  if (isPremium && !pixKey) {
    showToast("É necessário informar uma chave PIX para grupos pagos.");
    return;
  }

  const newChannel = {
    id: Date.now(),
    name,
    desc,
    isPremium,
    price: isPremium ? priceVal : 0,
    isPrivate,
    pixKey: isPremium ? pixKey : '',
    members: 1
  };

  if (!state.apiOffline) {
    fetch(`${API_BASE}/chat.php?action=create_room`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${state.user.email}`
      },
      body: JSON.stringify({
        id: `ch-${newChannel.id}`,
        name: newChannel.name,
        desc: newChannel.desc,
        avatar: '🛡️',
        is_premium: newChannel.isPremium ? 1 : 0,
        price: newChannel.price,
        is_private: newChannel.isPrivate ? 1 : 0,
        pix_key: newChannel.pixKey
      })
    }).then(res => {
      if (res.ok) {
        showToast("Grupo criado e sincronizado no servidor!");
        fetchRoomsAndMessages();
      }
    }).catch(err => console.error("Error creating group on server:", err));
  } else {
    MOCK_COMMUNITIES.unshift(newChannel);
    const joined = JSON.parse(localStorage.getItem('loop_joined_channels') || '[]');
    joined.push(newChannel.id);
    localStorage.setItem('loop_joined_channels', JSON.stringify(joined));
    addChannelToActiveChats(newChannel);
    showToast("Grupo criado localmente (Offline)!");
    renderCommunitiesList();
  }

  document.getElementById('create-channel-modal').classList.remove('show');
  
  // Clear inputs
  document.getElementById('channel-name').value = "";
  document.getElementById('channel-desc').value = "";
  document.getElementById('channel-private-flag').checked = false;
  document.getElementById('channel-pix').value = "";
}

// ── AI SEARCH ENGINE ──────────────────────────────────────────
async function handleAISearch() {
  const input = document.getElementById('ai-search-input').value.trim().toLowerCase();
  const list = document.getElementById('search-results-list');
  const answerCard = document.getElementById('search-ai-answer');
  const answerText = document.getElementById('search-ai-answer-text');

  if (!input) {
    list.innerHTML = `
      <div class="empty-state-search">
        <span class="search-watermark">🔍</span>
        <p>Busque por conteúdos históricos. Loop indexa textos, áudios transcritos e mídias.</p>
      </div>`;
    answerCard.classList.add('hidden');
    return;
  }

  list.innerHTML = "";
  answerCard.classList.add('hidden');

  const activeFilter = document.querySelector('.filter-chip.active').dataset.filter;

  // Search Mock Assets Database
  const searchDB = [
    { source: 'Ana Silva (Desenvolvedora)', type: 'text', content: 'Fábio, terminei os testes de criptografia de ponta a ponta (E2EE) no navegador.', time: 'Ontem' },
    { source: 'Ana Silva (Desenvolvedora)', type: 'text', content: 'O Modo Ultra Seguro está funcionando perfeitamente, limpando mensagens após 24 horas.', time: 'Ontem' },
    { source: 'Roberto Lima (Design)', type: 'audio', content: 'Gravação: "Fábio, confirme por favor as cores do switch de Modo Ultra Seguro antes das 15h."', time: 'Ontem' },
    { source: 'Relatorio_Auditoria_Seguranca.pdf', type: 'file', content: 'Arquivo PDF: "Auditoria do protocolo Curve25519 e AES-GCM concluída com sucesso no Loop."', time: 'Há 2 dias' },
    { source: 'Mockup_Interface_PIN.jpg', type: 'image', content: 'Reconhecimento Visual: Captura de tela da caixa de diálogo para bloqueio de código PIN de 4 dígitos.', time: 'Há 3 dias' }
  ];

  // Dynamic Search through actual E2EE decrypted chat messages
  for (const roomId of Object.keys(state.messages)) {
    const msgs = state.messages[roomId] || [];
    const room = state.rooms.find(r => r.id === roomId);
    const roomName = room ? room.name : (roomId === 'loop-ai' ? 'Loop AI Assistant' : 'Conversa');
    
    let sharedKey = null;
    if (roomId.startsWith('p2p-')) {
      sharedKey = await getSharedKeyForRoom(roomId);
    }

    for (const msg of msgs) {
      if (msg.isPlaceholder) continue;

      let content = msg.content || "";
      if (msg.isEncrypted && sharedKey) {
        try {
          content = await E2EE.decrypt(msg.content, msg.iv, sharedKey);
        } catch(e) {
          content = "";
        }
      }

      let matches = false;
      let matchedContent = content;

      if (content.toLowerCase().includes(input)) {
        matches = true;
      } else if (msg.isAudio && msg.transcription && msg.transcription.toLowerCase().includes(input)) {
        matches = true;
        matchedContent = `[Transcrição de Áudio] ${msg.transcription}`;
      }

      if (matches) {
        searchDB.push({
          source: `${roomName} - ${msg.sender || (msg.isMe ? 'Você' : 'Outro')}`,
          type: msg.isAudio ? 'audio' : (content.startsWith('data:image/') ? 'image' : 'text'),
          content: matchedContent,
          time: msg.time || 'Agora'
        });
      }
    }
  }

  const filtered = searchDB.filter(item => {
    const matchesQuery = item.content.toLowerCase().includes(input) || item.source.toLowerCase().includes(input);
    const matchesFilter = activeFilter === 'all' || item.type === activeFilter;
    return matchesQuery && matchesFilter;
  });

  if (filtered.length === 0) {
    list.innerHTML = `
      <div class="empty-state-search">
        <span class="search-watermark">❌</span>
        <p>Nenhum resultado encontrado para o termo pesquisado.</p>
      </div>`;
    return;
  }

  // Populate list
  filtered.forEach(item => {
    const div = document.createElement('div');
    div.className = 'search-result-item';
    
    const icons = { text: '💬 Mensagem', audio: '🎤 Áudio Transcrito', image: '🖼️ Imagem OCR', file: '📄 Anexo PDF' };
    const label = icons[item.type] || '📎 Item';

    div.innerHTML = `
      <div class="search-result-header">
        <span class="search-result-source">${item.source}</span>
        <span>${item.time}</span>
      </div>
      <div class="search-result-text">${item.content}</div>
      <span class="search-result-match-type" style="color: var(--accent-cyan);">${label}</span>
    `;
    list.appendChild(div);
  });

  // Generate AI answers for specific queries
  if (input.includes("criptografia") || input.includes("segurança") || input.includes("e2ee")) {
    answerText.textContent = "Loop AI: Com base no histórico de conversas e auditoria de segurança, todos os canais privados utilizam chaves Curve25519 e cifra AES-GCM 256 bits, garantindo criptografia ponta a ponta total.";
    answerCard.classList.remove('hidden');
  } else if (input.includes("ultra") || input.includes("autodestruir") || input.includes("24h")) {
    answerText.textContent = "Loop AI: Conforme confirmado nos testes de desenvolvimento, o Modo Ultra Seguro exclui de forma irreversível todas as mensagens e mídias antigas (mais de 24 horas) do app e do servidor.";
    answerCard.classList.remove('hidden');
  } else if (input.includes("pin") || input.includes("bloqueio")) {
    answerText.textContent = "Loop AI: De acordo com a imagem Mockup_Interface_PIN, a proteção extra por PIN bloqueia a tela do app após inatividade, exigindo o código secreto para acesso.";
    answerCard.classList.remove('hidden');
  }
}

// ── AUXILIARY UTILS ───────────────────────────────────────────
function formatDuration(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function getCurrentTime() {
  const d = new Date();
  return d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}

function showToast(msg) {
  const toast = document.getElementById('toast-notification');
  toast.textContent = msg;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

// ── ITEM 5: PRIVACY & SECURITY LOGIC ────────────────────────────
function handleSelfDestructToggle() {
  const sdBtn = document.getElementById('btn-self-destruct');
  const timerCycle = [0, 5, 10, 30, 60];
  let currIdx = timerCycle.indexOf(state.selfDestructTimer);
  let nextIdx = (currIdx + 1) % timerCycle.length;
  state.selfDestructTimer = timerCycle[nextIdx];
  
  if (state.selfDestructTimer > 0) {
    sdBtn.textContent = `⏱️ ${state.selfDestructTimer}s`;
    sdBtn.classList.add('active');
    showToast(`Timer de autodestruição: ${state.selfDestructTimer} segundos.`);
  } else {
    sdBtn.textContent = '⏱️ Off';
    sdBtn.classList.remove('active');
    showToast("Autodestruição desativada.");
  }
}

function showPinLockScreen() {
  document.getElementById('auth-screen').classList.add('hidden');
  document.getElementById('app-container').classList.add('hidden');
  
  const pinScreen = document.getElementById('pin-lock-screen');
  pinScreen.classList.add('active');
  pinScreen.classList.remove('hidden');
  
  const digits = pinScreen.querySelectorAll('.pin-digit');
  digits.forEach(d => d.value = "");
  state.tempPinInput = "";
  setTimeout(() => digits[0].focus(), 100);
}

function verifyAndUnlock() {
  const digits = document.querySelectorAll('.pin-digit');
  let pin = "";
  digits.forEach(d => pin += d.value);
  
  const savedPin = localStorage.getItem('loop_app_pin');
  if (pin === savedPin) {
    document.getElementById('pin-lock-screen').classList.remove('active');
    document.getElementById('pin-lock-screen').classList.add('hidden');
    showAppScreen();
    syncAppState();
    showToast("Aplicativo desbloqueado!");
  } else {
    showToast("PIN incorreto! Tente novamente.");
    digits.forEach(d => d.value = "");
    digits[0].focus();
  }
}

async function handleBiometricUnlock() {
  const btn = document.getElementById('btn-biometric-unlock');
  const oldText = btn.textContent;
  btn.textContent = "🧬 Escaneando biometria...";
  btn.disabled = true;
  
  await new Promise(resolve => setTimeout(resolve, 1200));
  
  btn.textContent = oldText;
  btn.disabled = false;
  
  document.getElementById('pin-lock-screen').classList.remove('active');
  document.getElementById('pin-lock-screen').classList.add('hidden');
  showAppScreen();
  syncAppState();
  showToast("Biometria autorizada. Bem-vindo!");
}

function updatePinLockUI() {
  const pinLocked = localStorage.getItem('loop_app_pin_lock') === 'true';
  const lbl = document.getElementById('lbl-pin-status');
  const btn = document.getElementById('btn-toggle-pin-lock');
  
  if (pinLocked) {
    lbl.textContent = "BLOQUEIO POR PIN: ATIVO";
    lbl.classList.add('text-cyan');
    btn.textContent = "Desativar PIN";
  } else {
    lbl.textContent = "BLOQUEIO POR PIN: INATIVO";
    lbl.classList.remove('text-cyan');
    btn.textContent = "Configurar PIN";
  }
}

function handleTogglePinLock() {
  const pinLocked = localStorage.getItem('loop_app_pin_lock') === 'true';
  if (pinLocked) {
    if (confirm("Deseja realmente desativar o bloqueio por PIN?")) {
      localStorage.removeItem('loop_app_pin');
      localStorage.setItem('loop_app_pin_lock', 'false');
      updatePinLockUI();
      showToast("Bloqueio por PIN desativado.");
    }
  } else {
    const modal = document.getElementById('pin-set-modal');
    modal.classList.add('show');
    
    const digits = modal.querySelectorAll('.pin-set-digit');
    digits.forEach(d => d.value = "");
    setTimeout(() => digits[0].focus(), 100);
  }
}

function handleSavePin() {
  const digits = document.querySelectorAll('.pin-set-digit');
  let pin = "";
  digits.forEach(d => pin += d.value);
  
  if (pin.length < 4) {
    showToast("O PIN deve conter 4 dígitos.");
    return;
  }
  
  localStorage.setItem('loop_app_pin', pin);
  localStorage.setItem('loop_app_pin_lock', 'true');
  
  document.getElementById('pin-set-modal').classList.remove('show');
  updatePinLockUI();
  showToast("PIN de segurança ativado com sucesso!");
}

function handleRevealPrivateKey() {
  const keyInput = document.getElementById('e2ee-private-key');
  const btn = document.getElementById('btn-reveal-private-key');
  if (keyInput.type === 'password') {
    keyInput.type = 'text';
    btn.textContent = 'Ocultar';
  } else {
    keyInput.type = 'password';
    btn.textContent = 'Revelar';
  }
}

function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let res = "";
  for (let i = 0; i < 4; i++) {
    const val = (hash >> (i * 8)) & 0xff;
    res += ('00' + val.toString(16)).slice(-2);
  }
  return res.repeat(8);
}

// ── KEEP AI CREDITS RENDERING ────────────────────────────────
function updateCreditsUI() {
  if (!state.user) return;
  const credits = state.user.credits !== undefined ? state.user.credits : 0;
  
  // Header badge
  const badge = document.getElementById('user-credits-badge');
  if (badge) {
    badge.textContent = `🪙 Saldo: ${credits}`;
    badge.classList.remove('hidden');
  }
  
  // Profile card details
  const wrap = document.getElementById('profile-credits-wrap');
  const val = document.getElementById('profile-credits-val');
  if (wrap && val) {
    wrap.style.display = 'block';
    val.textContent = `${credits} ${credits === 1 ? 'crédito' : 'créditos'}`;
  }
}

// ── P2P CONTACT DIRECT LOOKUP ────────────────────────────────
async function startP2PChatWithUsername(username) {
  if (!state.user) return;
  
  const cleanUsername = username.trim().replace('@', '');
  if (!cleanUsername) return;
  
  if (cleanUsername.toLowerCase() === state.user.username.toLowerCase()) {
    showToast("Você não pode iniciar um chat com você mesmo.");
    return;
  }

  showToast(`Buscando usuário @${cleanUsername}...`);

  const sortedUsernames = [state.user.username.toLowerCase(), cleanUsername.toLowerCase()].sort();
  const p2pRoomId = `p2p-${sortedUsernames[0]}-${sortedUsernames[1]}`;

  let room = state.rooms.find(r => r.id === p2pRoomId);
  if (room) {
    selectChat(room.id);
    document.getElementById('chat-search').value = "";
    renderChatList();
    return;
  }

  if (!state.apiOffline) {
    try {
      const headers = { 'Authorization': `Bearer ${state.user.email}` };
      const res = await fetch(`${API_BASE}/chat.php?action=get_user&username=${cleanUsername}`, { headers });
      if (res.ok) {
        const userData = await res.json();
        const newRoom = {
          id: p2pRoomId,
          type: 'private',
          name: `${userData.displayName} (@${userData.username})`,
          avatar: userData.avatar,
          lastMsg: 'Chat iniciado via busca.',
          time: getCurrentTime(),
          unread: false
        };
        state.rooms.push(newRoom);
        state.messages[newRoom.id] = [
          { id: Date.now(), sender: 'Sistema', senderAvatar: '🛡️', content: `Chat criptografado iniciado com ${userData.displayName}.`, time: getCurrentTime(), isMe: false }
        ];
        
        renderChatList();
        selectChat(newRoom.id);
        document.getElementById('chat-search').value = "";
        showToast(`Chat iniciado com @${cleanUsername}!`);
      } else {
        showToast("Usuário não encontrado no servidor.");
      }
    } catch (e) {
      console.error("Error searching user:", e);
      showToast("Erro ao conectar com o servidor.");
    }
  } else {
    // Local offline lookup
    try {
      const localUsers = JSON.parse(localStorage.getItem('loop_users_db') || '{}');
      const foundUser = Object.values(localUsers).find(u => u.username.toLowerCase() === cleanUsername.toLowerCase());
      if (foundUser) {
        const newRoom = {
          id: p2pRoomId,
          type: 'private',
          name: `${foundUser.displayName} (@${foundUser.username})`,
          avatar: foundUser.avatar,
          lastMsg: 'Chat iniciado localmente.',
          time: getCurrentTime(),
          unread: false
        };
        state.rooms.push(newRoom);
        state.messages[newRoom.id] = [
          { id: Date.now(), sender: 'Sistema', senderAvatar: '🛡️', content: `Chat local iniciado com ${foundUser.displayName}.`, time: getCurrentTime(), isMe: false }
        ];
        localStorage.setItem(STORAGE_KEYS.ROOMS, JSON.stringify(state.rooms));
        localStorage.setItem(STORAGE_KEYS.MSGS, JSON.stringify(state.messages));
        
        renderChatList();
        selectChat(newRoom.id);
        document.getElementById('chat-search').value = "";
        showToast(`Chat local iniciado com @${cleanUsername}!`);
      } else {
        showToast("Usuário não encontrado localmente.");
      }
    } catch (e) {
      console.error(e);
    }
  }
}

// Global Audio Recording Variables
let mediaRecorder = null;
let audioChunks = [];
let isRecordingAudio = false;
let audioStartTime = null;
let recognitionInstance = null;
let transcriptionResult = "";

// ── IMAGE MESSAGING FUNCTIONS ───────────────────────────────
async function sendImageMessage(webpDataUrl) {
  const newMsg = {
    id: Date.now(),
    sender: state.user.displayName,
    senderAvatar: state.user.avatar || DEFAULT_AVATAR,
    content: webpDataUrl,
    time: getCurrentTime(),
    isMe: true
  };

  if (!state.messages[state.activeChatId]) {
    state.messages[state.activeChatId] = [];
  }
  state.messages[state.activeChatId].push(newMsg);
  
  const activeRoom = state.rooms.find(r => r.id === state.activeChatId);
  if (activeRoom) {
    activeRoom.lastMsg = `Você: 🖼️ Imagem`;
    activeRoom.time = getCurrentTime();
  }

  renderActiveChatMessages();
  renderChatList();

  if (state.apiOffline) {
    localStorage.setItem(STORAGE_KEYS.ROOMS, JSON.stringify(state.rooms));
    localStorage.setItem(STORAGE_KEYS.MSGS, JSON.stringify(state.messages));
  } else {
    await sendRemoteMessage(state.activeChatId, webpDataUrl);
  }
}

function showImageLightbox(src) {
  const modal = document.getElementById('media-lightbox-modal');
  if (modal) {
    const img = document.getElementById('lightbox-img');
    const dl = document.getElementById('lightbox-download-link');
    const closeBtn = document.getElementById('btn-lightbox-close');
    
    if (img) img.src = src;
    if (dl) dl.href = src;
    
    modal.classList.remove('hidden');
    
    modal.onclick = (e) => {
      if (e.target === modal || e.target === closeBtn) {
        modal.classList.add('hidden');
      }
    };
    if (closeBtn) {
      closeBtn.onclick = () => modal.classList.add('hidden');
    }
  }
}

function checkHashJoin() {
  const hash = window.location.hash;
  if (!hash) return;
  
  if (hash.startsWith('#join-')) {
    const roomId = hash.replace('#join-', '');
    joinGroupById(roomId);
  } else if (hash.startsWith('#@') || hash.startsWith('#!@') || hash.startsWith('#p2p-') || hash.startsWith('#user-')) {
    const username = hash.replace(/^[#@!p2puser\-]+/, '');
    openDirectChatWithUsername(username);
  }
}

async function openDirectChatWithUsername(targetUsername) {
  targetUsername = (targetUsername || '').replace(/^[@#!]+/, '').trim().toLowerCase();
  if (!targetUsername) return;
  if (!state.user) {
    localStorage.setItem('loop_pending_chat_username', targetUsername);
    showToast(`Faça login para conversar com @${targetUsername}`);
    return;
  }
  if (targetUsername === state.user.username.toLowerCase()) {
    showToast("Você não pode iniciar uma conversa consigo mesmo.");
    return;
  }

  showToast(`Conectando com @${targetUsername}...`);
  try {
    const res = await fetch(`${API_BASE}/chat.php?action=get_user&username=${encodeURIComponent(targetUsername)}`, {
      headers: { 'Authorization': `Bearer ${state.user.email}` }
    });
    if (!res.ok) {
      showToast(`Usuário @${targetUsername} não foi encontrado.`);
      return;
    }
    const targetUser = await res.json();
    
    // Canonical sorted P2P room ID
    const sorted = [state.user.username.toLowerCase(), targetUsername].sort();
    const roomId = `p2p-${sorted[0]}-${sorted[1]}`;
    
    let room = state.rooms.find(r => r.id === roomId);
    if (!room) {
      room = {
        id: roomId,
        type: 'private',
        name: `${targetUser.displayName} (@${targetUser.username})`,
        avatar: targetUser.avatar || DEFAULT_AVATAR,
        lastMsg: 'Conversa segura E2EE iniciada',
        time: 'Agora',
        unread: false,
        otherPublicKey: targetUser.publicKey
      };
      state.rooms.unshift(room);
    }
    
    switchView('chats');
    renderChatList();
    selectChat(roomId);
    showToast(`Conversa com @${targetUsername} aberta!`);
  } catch (err) {
    console.error("Error starting direct chat:", err);
    showToast("Erro de conexão ao abrir conversa.");
  }
}

async function joinGroupById(roomId) {
  if (!state.user) {
    showToast("Faça login para entrar no grupo.");
    return;
  }
  
  if (state.apiOffline) {
    showToast("Não é possível entrar em grupos privados no modo offline.");
    return;
  }
  
  showToast("Entrando no grupo...");
  
  try {
    const res = await fetch(`${API_BASE}/chat.php?action=join_room`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${state.user.email}`
      },
      body: JSON.stringify({ room_id: roomId })
    });
    
    if (res.ok) {
      showToast("Você entrou no grupo com sucesso!");
      history.replaceState(null, null, window.location.pathname);
      
      await fetchRoomsAndMessages();
      selectChat(roomId);
    } else {
      const data = await res.json().catch(() => ({}));
      showToast(data.error || "Grupo não encontrado ou erro ao entrar.");
    }
  } catch (err) {
    console.error("Error joining group:", err);
    showToast("Erro de conexão ao entrar no grupo.");
  }
}

async function loadAndRenderGroupMembers(roomId) {
  const listContainer = document.getElementById('group-members-list');
  if (!listContainer) return;
  listContainer.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 20px;">Carregando membros...</div>`;

  if (state.apiOffline) {
    listContainer.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 20px;">Modo offline. Lista de membros indisponível.</div>`;
    return;
  }

  try {
    const headers = { 'Authorization': `Bearer ${state.user.email}` };
    const res = await fetch(`${API_BASE}/chat.php?action=get_members&room_id=${roomId}`, { headers });
    if (res.ok) {
      const members = await res.json();
      
      const activeRoom = state.rooms.find(r => r.id === roomId);
      const myRole = activeRoom ? (activeRoom.role || 'member') : 'member';

      listContainer.innerHTML = "";
      if (members.length === 0) {
        listContainer.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 20px;">Nenhum membro encontrado.</div>`;
        return;
      }

      members.forEach(m => {
        const item = document.createElement('div');
        item.className = 'member-item';

        let badgeClass = 'role-member';
        let roleName = 'Membro';
        if (m.role === 'owner') {
          badgeClass = 'role-owner';
          roleName = 'Proprietário';
        } else if (m.role === 'moderator') {
          badgeClass = 'role-moderator';
          roleName = 'Moderador';
        }

        let actionButtonsHtml = "";
        
        if (m.email !== state.user.email) {
          if (myRole === 'owner') {
            if (m.role === 'member') {
              actionButtonsHtml += `<button class="member-action-btn btn-promote-member" data-email="${m.email}">Promover</button>`;
            } else if (m.role === 'moderator') {
              actionButtonsHtml += `<button class="member-action-btn btn-demote-member" data-email="${m.email}">Rebaixar</button>`;
            }
            actionButtonsHtml += `<button class="member-action-btn btn-kick-member" data-email="${m.email}">Remover</button>`;
          } else if (myRole === 'moderator') {
            if (m.role === 'member') {
              actionButtonsHtml += `<button class="member-action-btn btn-kick-member" data-email="${m.email}">Remover</button>`;
            }
          }
        }

        item.innerHTML = `
          <div class="member-info">
            <div class="member-avatar" style="width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: var(--accent-glow); font-size: 18px; overflow:hidden;">
              ${getAvatarHtml(m.avatar, '', '👤', m.displayName)}
            </div>
            <div class="member-details">
              <span class="member-name">${m.displayName}</span>
              <span class="member-username">@${m.username}</span>
              <span class="member-role ${badgeClass}">${roleName}</span>
            </div>
          </div>
          <div class="member-actions">
            ${actionButtonsHtml}
          </div>
        `;

        item.querySelectorAll('.btn-kick-member').forEach(btn => {
          btn.addEventListener('click', () => {
            if (confirm(`Tem certeza que deseja remover ${m.displayName} do grupo?`)) {
              manageGroupMember(roomId, m.email, 'kick');
            }
          });
        });

        item.querySelectorAll('.btn-promote-member').forEach(btn => {
          btn.addEventListener('click', () => {
            if (confirm(`Deseja promover ${m.displayName} a Moderador?`)) {
              manageGroupMember(roomId, m.email, 'promote');
            }
          });
        });

        item.querySelectorAll('.btn-demote-member').forEach(btn => {
          btn.addEventListener('click', () => {
            if (confirm(`Deseja rebaixar ${m.displayName} para Membro normal?`)) {
              manageGroupMember(roomId, m.email, 'demote');
            }
          });
        });

        listContainer.appendChild(item);
      });

      // Show Delete Button if Owner
      if (myRole === 'owner') {
        const deleteDiv = document.createElement('div');
        deleteDiv.style.cssText = "margin-top: 20px; padding-top: 15px; border-top: 1px solid rgba(255, 0, 0, 0.3); text-align: center;";
        deleteDiv.innerHTML = `<button id="btn-delete-group" class="member-action-btn" style="background: linear-gradient(135deg, #dc3545, #bd2130) !important; border: 1px solid #bd2130 !important; color: #fff !important; width: 100%; height: 36px; border-radius: 8px; font-weight: 700; cursor: pointer;">🚨 Excluir Grupo Permanentemente</button>`;
        deleteDiv.querySelector('#btn-delete-group').addEventListener('click', () => {
          if (confirm("🚨 ATENÇÃO: Tem certeza que deseja EXCLUIR permanentemente este grupo? Todos os membros serão removidos, todas as mensagens serão apagadas e esta ação não poderá ser desfeita!")) {
            deleteGroup(roomId);
          }
        });
        listContainer.appendChild(deleteDiv);
      }
    } else {
      listContainer.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 20px;">Erro ao carregar membros.</div>`;
    }
  } catch (e) {
    console.error("Error loading group members:", e);
    listContainer.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 20px;">Erro de rede ao carregar membros.</div>`;
  }
}

async function deleteGroup(roomId) {
  try {
    const res = await fetch(`${API_BASE}/chat.php?action=delete_room`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${state.user.email}`
      },
      body: JSON.stringify({ room_id: roomId })
    });
    const data = await res.json();
    if (res.ok && data.success) {
      showToast("Grupo excluído com sucesso!", "success");
      document.getElementById('group-members-modal').classList.remove('show');
      if (state.activeChatId === roomId) {
        state.activeChatId = null;
        renderActiveChat();
      }
      await fetchRoomsAndMessages();
    } else {
      showToast(data.error || "Erro ao excluir grupo.");
    }
  } catch (e) {
    console.error("Error deleting group:", e);
    showToast("Erro de conexão ao excluir grupo.");
  }
}

async function manageGroupMember(roomId, targetEmail, manageAction) {
  try {
    const res = await fetch(`${API_BASE}/chat.php?action=manage_member`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${state.user.email}`
      },
      body: JSON.stringify({
        room_id: roomId,
        target_email: targetEmail,
        manage_action: manageAction
      })
    });
    const data = await res.json();
    if (res.ok && data.success) {
      showToast(data.message || "Ação realizada com sucesso!", "success");
      loadAndRenderGroupMembers(roomId);
    } else {
      showToast(data.error || "Erro ao realizar ação.");
    }
  } catch (e) {
    console.error("Error managing member:", e);
    showToast("Erro de conexão ao gerenciar membro.");
  }
}

// ── MAGIC WAND AI REWRITE ─────────────────────────────────────
async function handleMagicWandRewrite(tone) {
  const inputEl = document.getElementById('message-input');
  const text = (inputEl ? inputEl.value : '').trim();
  const popover = document.getElementById('magic-wand-popover');
  if (popover) popover.classList.add('hidden');

  if (!text) {
    showToast("Digite uma mensagem primeiro para reescrever.");
    return;
  }

  showToast("Reescrevendo mensagem com IA...");
  try {
    const res = await fetch(`${API_BASE}/ai.php?action=rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': state.user ? `Bearer ${state.user.email}` : ''
      },
      body: JSON.stringify({ text, tone })
    });
    const data = await res.json();
    if (res.ok && data.rewritten) {
      inputEl.value = data.rewritten;
      inputEl.focus();
      showToast("Mensagem reescrita com sucesso! ✨");
    } else {
      showToast("Não foi possível reescrever no momento.");
    }
  } catch (err) {
    console.error("Error rewriting message:", err);
    showToast("Erro ao conectar com a IA.");
  }
}

// ── POLLS MANAGEMENT ──────────────────────────────────────────
async function handleCreatePoll() {
  const questionInput = document.getElementById('input-poll-question');
  const question = (questionInput ? questionInput.value : '').trim();
  const optionInputs = document.querySelectorAll('.poll-opt-input');
  const options = [];
  optionInputs.forEach(inp => {
    const val = inp.value.trim();
    if (val) options.push(val);
  });
  const isMultiple = document.getElementById('chk-poll-multiple')?.checked ? 1 : 0;

  if (!question) {
    showToast("Informe a pergunta da enquete.");
    return;
  }
  if (options.length < 2) {
    showToast("Preencha pelo menos 2 opções.");
    return;
  }
  if (!state.activeChatId) {
    showToast("Selecione uma conversa.");
    return;
  }

  const btnSubmit = document.getElementById('btn-submit-poll');
  if (btnSubmit) {
    btnSubmit.disabled = true;
    btnSubmit.textContent = "Lançando...";
  }

  try {
    const res = await fetch(`${API_BASE}/chat.php?action=create_poll`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${state.user.email}`
      },
      body: JSON.stringify({
        room_id: state.activeChatId,
        question: question,
        options: options,
        is_multiple: isMultiple
      })
    });

    const data = await res.json();
    if (res.ok && data.success) {
      showToast("Enquete criada com sucesso! 📊");
      document.getElementById('create-poll-modal')?.classList.remove('show');
      await fetchRoomsAndMessages();
    } else {
      showToast(data.error || "Erro ao criar enquete.");
    }
  } catch (err) {
    console.error("Error creating poll:", err);
    showToast("Erro de rede ao criar enquete.");
  } finally {
    if (btnSubmit) {
      btnSubmit.disabled = false;
      btnSubmit.textContent = "Lançar Enquete 🚀";
    }
  }
}

async function handleVotePoll(pollId, optionId) {
  if (!state.user) return;
  try {
    const res = await fetch(`${API_BASE}/chat.php?action=vote_poll`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${state.user.email}`
      },
      body: JSON.stringify({
        poll_id: pollId,
        option_id: optionId
      })
    });
    const data = await res.json();
    if (res.ok && data.success) {
      // Refresh messages to show updated vote counts and bars
      await fetchRoomsAndMessages();
    } else {
      showToast(data.error || "Erro ao registrar voto.");
    }
  } catch (err) {
    console.error("Error voting poll:", err);
  }
}

// ── EPHEMERAL TTL ─────────────────────────────────────────────
async function handleSetEphemeralTTL(ttl) {
  if (!state.activeChatId || !state.user) return;
  try {
    const res = await fetch(`${API_BASE}/chat.php?action=set_ephemeral_ttl`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${state.user.email}`
      },
      body: JSON.stringify({
        room_id: state.activeChatId,
        ttl: ttl
      })
    });
    const data = await res.json();
    if (res.ok && data.success) {
      const room = state.rooms.find(r => r.id === state.activeChatId);
      if (room) room.ephemeral_ttl = ttl;
      
      const lbl = document.getElementById('lbl-ephemeral-status');
      if (lbl) {
        if (ttl === 30) lbl.textContent = " 30s";
        else if (ttl === 300) lbl.textContent = " 5m";
        else if (ttl === 3600) lbl.textContent = " 1h";
        else if (ttl === 86400) lbl.textContent = " 24h";
        else lbl.textContent = " Off";
      }

      showToast(ttl > 0 ? `Autodestruição configurada para ${ttl < 60 ? ttl + 's' : (ttl < 3600 ? (ttl/60) + 'm' : (ttl/3600) + 'h')} ⏱️` : "Autodestruição desativada.");
    }
  } catch (err) {
    console.error("Error setting ephemeral TTL:", err);
  }
}

// ── SMART REMINDER CREATOR ────────────────────────────────────
function handleCreateReminder(rawText) {
  const text = (rawText || '').trim();
  if (!text) return;

  // Format a standard iCalendar event string (.ics)
  const now = new Date();
  const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
  const formatDate = (d) => d.toISOString().replace(/-|:|\.\d+/g, '');
  
  const icsData = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Loop Messenger//Intelligent Task Reminder//PT",
    "BEGIN:VEVENT",
    `UID:loop-${Date.now()}@loop.ia.br`,
    `DTSTAMP:${formatDate(now)}`,
    `DTSTART:${formatDate(tomorrow)}`,
    `DTEND:${formatDate(new Date(tomorrow.getTime() + 60 * 60 * 1000))}`,
    `SUMMARY:Loop Lembrete: ${text.substring(0, 40)}`,
    `DESCRIPTION:${text}`,
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `lembrete-loop-${Date.now()}.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast("📅 Lembrete gerado e salvo para sua agenda!");
}

// ── WEBRTC P2P CALL ENGINE ────────────────────────────────────
const WebRTC = {
  peerConnection: null,
  localStream: null,
  activeCallRoomId: null,
  targetEmail: null,
  callTimerInterval: null,
  callStartTime: null,
  isAudioMuted: false,
  isVideoDisabled: false,

  config: {
    iceServers: [
      { urls: 'stun:stun.l.google.com:19302' },
      { urls: 'stun:stun1.l.google.com:19302' },
      { urls: 'stun:stun2.l.google.com:19302' }
    ]
  },

  async startCall(isVideo = false) {
    if (!state.activeChatId || !state.activeChatId.startsWith('p2p-')) {
      showToast("Chamadas de voz/vídeo disponíveis em conversas diretas privadas.");
      return;
    }

    const parts = state.activeChatId.split('-');
    const otherUsername = (parts[1] === state.user.username) ? parts[2] : parts[1];

    const modal = document.getElementById('webrtc-call-modal');
    document.getElementById('call-peer-name').textContent = `@${otherUsername}`;
    document.getElementById('call-status-badge').textContent = "Chamando...";
    modal.classList.remove('hidden');

    try {
      this.localStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: isVideo ? { width: { ideal: 640 }, height: { ideal: 480 } } : false
      });

      const localVideo = document.getElementById('local-video');
      if (localVideo) localVideo.srcObject = this.localStream;

      this.createPeerConnection(state.activeChatId, otherUsername);
      this.localStream.getTracks().forEach(track => {
        this.peerConnection.addTrack(track, this.localStream);
      });

      const offer = await this.peerConnection.createOffer();
      await this.peerConnection.setLocalDescription(offer);

      await this.sendSignal('offer', offer, state.activeChatId, otherUsername);
      showToast("Iniciando chamada criptografada P2P...");
    } catch (err) {
      console.error("WebRTC getUserMedia error:", err);
      showToast("Não foi possível acessar áudio/câmera.");
      this.endCall();
    }
  },

  createPeerConnection(roomId, targetUsername) {
    this.peerConnection = new RTCPeerConnection(this.config);
    this.activeCallRoomId = roomId;
    this.targetEmail = targetUsername;

    this.peerConnection.onicecandidate = (event) => {
      if (event.candidate) {
        this.sendSignal('candidate', event.candidate, roomId, targetUsername);
      }
    };

    this.peerConnection.ontrack = (event) => {
      const remoteVideo = document.getElementById('remote-video');
      if (remoteVideo && remoteVideo.srcObject !== event.streams[0]) {
        remoteVideo.srcObject = event.streams[0];
        document.getElementById('call-status-badge').textContent = "🟢 Conectado (P2P)";
        WebRTC.startCallTimer();
      }
    };

    this.peerConnection.onconnectionstatechange = () => {
      const stateBadge = document.getElementById('call-status-badge');
      if (stateBadge && this.peerConnection) {
        if (this.peerConnection.connectionState === 'connected') {
          stateBadge.textContent = "🟢 Conectado (P2P)";
          WebRTC.startCallTimer();
        } else if (this.peerConnection.connectionState === 'disconnected' || this.peerConnection.connectionState === 'failed') {
          stateBadge.textContent = "🔴 Desconectado";
          setTimeout(() => WebRTC.endCall(), 1500);
        }
      }
    };
  },

  async sendSignal(type, payload, roomId, toEmail) {
    if (!state.user) return;
    try {
      await fetch(`${API_BASE}/chat.php?action=webrtc_signal`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${state.user.email}`
        },
        body: JSON.stringify({
          room_id: roomId,
          to_email: toEmail,
          type: type,
          payload: payload
        })
      });
    } catch (e) {
      console.error("Error sending signal:", e);
    }
  },

  async handleIncomingSignal(sig) {
    const fromName = sig.from_name || 'Contato';
    const fromEmail = sig.from_email;
    const roomId = sig.room_id;
    let payload = sig.payload;
    if (typeof payload === 'string') {
      try { payload = JSON.parse(payload); } catch(e) {}
    }

    if (sig.type === 'offer') {
      state.pendingCallOffer = { sig, payload, roomId, fromEmail, fromName };
      document.getElementById('incoming-caller-name').textContent = `${fromName} está chamando...`;
      document.getElementById('incoming-call-banner').classList.remove('hidden');
    } else if (sig.type === 'answer' && this.peerConnection) {
      await this.peerConnection.setRemoteDescription(new RTCSessionDescription(payload));
      document.getElementById('call-status-badge').textContent = "🟢 Conectado (P2P)";
      WebRTC.startCallTimer();
    } else if (sig.type === 'candidate' && this.peerConnection) {
      try {
        await this.peerConnection.addIceCandidate(new RTCIceCandidate(payload));
      } catch(e) {
        console.error("Error adding candidate:", e);
      }
    } else if (sig.type === 'hangup') {
      this.endCall();
      showToast("Chamada encerrada.");
    }
  },

  async acceptCall() {
    const banner = document.getElementById('incoming-call-banner');
    if (banner) banner.classList.add('hidden');
    if (!state.pendingCallOffer) return;

    const { payload, roomId, fromEmail, fromName } = state.pendingCallOffer;
    state.pendingCallOffer = null;

    const modal = document.getElementById('webrtc-call-modal');
    document.getElementById('call-peer-name').textContent = fromName;
    document.getElementById('call-status-badge').textContent = "Conectando P2P...";
    modal.classList.remove('hidden');

    try {
      this.localStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true
      });
      const localVideo = document.getElementById('local-video');
      if (localVideo) localVideo.srcObject = this.localStream;

      this.createPeerConnection(roomId, fromEmail);
      this.localStream.getTracks().forEach(track => {
        this.peerConnection.addTrack(track, this.localStream);
      });

      await this.peerConnection.setRemoteDescription(new RTCSessionDescription(payload));
      const answer = await this.peerConnection.createAnswer();
      await this.peerConnection.setLocalDescription(answer);

      await this.sendSignal('answer', answer, roomId, fromEmail);
    } catch (err) {
      console.error("Error answering call:", err);
      showToast("Erro ao atender chamada.");
      this.endCall();
    }
  },

  declineCall() {
    const banner = document.getElementById('incoming-call-banner');
    if (banner) banner.classList.add('hidden');
    if (state.pendingCallOffer) {
      const { roomId, fromEmail } = state.pendingCallOffer;
      this.sendSignal('hangup', {}, roomId, fromEmail);
      state.pendingCallOffer = null;
    }
  },

  endCall() {
    if (this.peerConnection) {
      this.sendSignal('hangup', {}, this.activeCallRoomId, this.targetEmail || '');
      this.peerConnection.close();
      this.peerConnection = null;
    }
    if (this.localStream) {
      this.localStream.getTracks().forEach(t => t.stop());
      this.localStream = null;
    }
    const modal = document.getElementById('webrtc-call-modal');
    if (modal) modal.classList.add('hidden');
    const banner = document.getElementById('incoming-call-banner');
    if (banner) banner.classList.add('hidden');
    clearInterval(this.callTimerInterval);
    const durationEl = document.getElementById('call-duration-timer');
    if (durationEl) durationEl.textContent = "00:00";
  },

  startCallTimer() {
    clearInterval(this.callTimerInterval);
    this.callStartTime = Date.now();
    this.callTimerInterval = setInterval(() => {
      const diff = Math.floor((Date.now() - this.callStartTime) / 1000);
      const mins = String(Math.floor(diff / 60)).padStart(2, '0');
      const secs = String(diff % 60).padStart(2, '0');
      const durationEl = document.getElementById('call-duration-timer');
      if (durationEl) durationEl.textContent = `${mins}:${secs}`;
    }, 1000);
  },

  toggleMic() {
    if (!this.localStream) return;
    this.isAudioMuted = !this.isAudioMuted;
    this.localStream.getAudioTracks().forEach(t => t.enabled = !this.isAudioMuted);
    document.getElementById('btn-call-toggle-mic')?.classList.toggle('active', this.isAudioMuted);
    showToast(this.isAudioMuted ? "Microfone silenciado 🔇" : "Microfone ativado 🎙️");
  },

  toggleCam() {
    if (!this.localStream) return;
    this.isVideoDisabled = !this.isVideoDisabled;
    this.localStream.getVideoTracks().forEach(t => t.enabled = !this.isVideoDisabled);
    document.getElementById('btn-call-toggle-cam')?.classList.toggle('active', this.isVideoDisabled);
    showToast(this.isVideoDisabled ? "Câmera desligada 📷" : "Câmera ligada 📷");
  }
};
