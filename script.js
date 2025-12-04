// --- GÜNCELLENMİŞ OYUN VERİLERİ ---
const kartKatalogu = [
    { isim: "Bakır", tur: "puan", deger: 5, renk: "type-puan", aciklama: "Küçük bir hazine getirir.", img: `<div class="card-img"><svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="26" fill="#e6b04a" stroke="#b27a2b" stroke-width="3"/><circle cx="32" cy="32" r="10" fill="#fff3d6" opacity="0.3"/></svg></div>`, tekrar: 30, calisma: "Hazine puanınıza +5 eklenir." },
    { isim: "Gümüş", tur: "puan", deger: 15, renk: "type-puan", aciklama: "Orta seviye bir hazine getirir.", img: `<div class="card-img"><svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="26" fill="#cfd6db" stroke="#8f9aa0" stroke-width="3"/><circle cx="32" cy="32" r="8" fill="#ffffff" opacity="0.2"/></svg></div>`, tekrar: 20, calisma: "Hazine puanınıza +15 eklenir." },
    { isim: "Altın", tur: "puan", deger: 35, renk: "type-puan", aciklama: "Büyük bir hazine getirir.", img: `<div class="card-img"><svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M8 44c8 8 20 12 24 12s16-4 24-12V20H8v24z" fill="#ffd66b" stroke="#c79b2a" stroke-width="2"/><circle cx="32" cy="28" r="6" fill="#fff" opacity="0.25"/></svg></div>`, tekrar: 10, calisma: "Hazine puanınıza +35 eklenir." },
    { isim: "Elmas", tur: "puan", deger: 75, renk: "type-puan", aciklama: "Çok değerli bir hazine getirir.", img: `<div class="card-img"><svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><polygon points="32,8 52,28 32,56 12,28" fill="#9ce0ff" stroke="#4ea4d6" stroke-width="2"/><polygon points="32,14 46,28 32,48 18,28" fill="#e6fbff" opacity="0.6"/></svg></div>`, tekrar: 5, calisma: "Hazine puanınıza +75 eklenir." },
    
    { isim: "Yakut", tur: "yakut", deger: 100, renk: "type-yakut", aciklama: "Muazzam hazine ve çarpan.", img: `<div class="card-img"><svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><polygon points="32,6 52,26 32,58 12,26" fill="#d84b4b" stroke="#8f1f1f" stroke-width="2"/><polygon points="32,14 46,28 32,48 18,28" fill="#ffbdbd" opacity="0.25"/></svg></div>`, tekrar: 1, calisma: "Hazineye +100 ekler. Sonraki KARTIN puanını 2 kat yapar." },
    
    { isim: "Ateş Topu", tur: "ates", deger: -20, renk: "type-ates", aciklama: "Rakibe büyük hasar verir.", img: `<div class="card-img"><svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M34 8c-4 8 4 12 2 22 6-2 10 2 10 8-6-2-12 0-16 4-4-6-12-8-18-6 6-6 6-18 16-26 2 4 2 4 4 4z" fill="#ff7a2a" stroke="#b04510" stroke-width="2"/></svg></div>`, tekrar: 7, calisma: "Rakibin hazinesinden 20 puan düşer. (Kalkan yarı yarıya engeller)." },
    
    { isim: "Buz Mührü", tur: "dondurma", deger: 0, renk: "type-buz", aciklama: "Rakibin kartını dondurur.", img: `<div class="card-img"><svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M32 6l4 18 18 4-18 4-4 18-4-18-18-4 18-4 4-18z" fill="#d0f0ff" stroke="#5aa7d6" stroke-width="2"/></svg></div>`, tekrar: 4, calisma: "Rakibin elindeki bir kartı dondurur, 20 saniye kullanılamaz." },
    
    { isim: "Kalkan", tur: "kalkan", deger: 0, renk: "type-kalkan", aciklama: "Hasarı hafifletir.", img: `<div class="card-img"><svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M32 6l14 6v14c0 12-9 22-14 26-5-4-14-14-14-26V12l14-6z" fill="#dfe6ea" stroke="#6b6f73" stroke-width="2"/></svg></div>`, tekrar: 3, calisma: "Gelen hasarın bir kısmını engeller (Örn: Ateş Topu 10 vurur)." },
    
    // GÜNCELLENMİŞ HIRSIZ:
    { isim: "Hırsız", tur: "hirsiz", deger: 0, renk: "type-hirsiz", aciklama: "Rakibin bir kartını çalıp eline ekler. Elin 4 kart olur. Çalınan kart oynandığında yeni kart çekilmez.", img: `<div class="card-img"><svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M20 18c0-6 6-10 12-10s12 4 12 10c0 4-3 6-6 6H26c-3 0-6-2-6-6z" fill="#333"/><path d="M18 44c6 6 20 8 28 0-8 2-20 2-28 0z" fill="#555"/></svg></div>`, tekrar: 3, calisma: "Rakibinizden 1 kart çalar. Oynadığınızda eliniz 4 karta çıkar. Çaldığınız kartı kullanınca tekrar 3 karta düşersiniz." }
];

const fusionMap = {
    "Bakır": "Gümüş",
    "Gümüş": "Altın",
    "Altın": "Elmas"
};

let playerHand = [], cpuHand = [], playerScore = 50, cpuScore = 50, turn = "player", anaDeste = [], gameActive = true, lastPlayedCard = null;
let playerMultiplierTurns = 0, cpuMultiplierTurns = 0, cpuHasShield = false, playerHasShield = false;
let isProcessingMove = false; 
let selectedCardIndex = -1; 
let freezeCheckInterval = null; 
const MAX_HAND_SIZE = 3; 

function playSound(id) {
    const audio = document.getElementById(id);
    if (audio) { audio.currentTime = 0; audio.play().catch(e => {}); }
}

function createAndShuffleDeck() {
    anaDeste = [];
    kartKatalogu.forEach(kart => { for (let i = 0; i < kart.tekrar; i++) anaDeste.push({...kart, frozenUntil: 0, isStolen: false}); });
    for (let i = anaDeste.length-1; i>0; i--) {
        const j = Math.floor(Math.random()*(i+1));
        [anaDeste[i], anaDeste[j]] = [anaDeste[j], anaDeste[i]];
    }
}

function drawCard() { 
    let card = anaDeste.length ? anaDeste.pop() : null; 
    if(card) { card.frozenUntil = 0; card.isStolen = false; } 
    return card;
}

function triggerShake() {
    const board = document.getElementById("game-board");
    board.classList.remove("shake-effect");
    void board.offsetWidth; 
    board.classList.add("shake-effect");
}

function spawnFloatingText(targetId, text, color) {
    const targetEl = document.getElementById(targetId);
    if (!targetEl) return;
    const rect = targetEl.getBoundingClientRect();
    
    const floatEl = document.createElement("div");
    floatEl.className = "floating-text";
    floatEl.innerText = text;
    floatEl.style.color = color;
    floatEl.style.left = (rect.left + rect.width / 2 - 20) + "px";
    floatEl.style.top = (rect.top + rect.height / 2) + "px";
    
    document.body.appendChild(floatEl);
    
    requestAnimationFrame(() => {
        floatEl.style.transform = "translateY(-60px) scale(1.2)";
        floatEl.style.opacity = "0";
    });
    
    setTimeout(() => floatEl.remove(), 1000);
}

function spawnParticles(x, y, type) {
    const colors = {
        "gold": ["#ffd700", "#fff"],
        "damage": ["#ff4500", "#8b0000"],
        "ice": ["#00ffff", "#fff"],
        "heal": ["#ff69b4", "#fff"]
    };
    const palette = colors[type] || colors["gold"];
    
    for (let i = 0; i < 12; i++) {
        const p = document.createElement("div");
        p.className = "particle";
        p.style.backgroundColor = palette[Math.floor(Math.random() * palette.length)];
        p.style.left = x + 'px'; 
        p.style.top = y + 'px';
        document.body.appendChild(p);
        
        const angle = Math.random() * Math.PI * 2;
        const velocity = 20 + Math.random() * 60;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        
        requestAnimationFrame(() => {
            p.style.transform = `translate(${tx}px, ${ty}px) scale(0)`;
            p.style.opacity = "0";
        });
        setTimeout(() => p.remove(), 600);
    }
}

let logTimeout = null;
function log(msg){
    const DURATION = 1500; 
    const el = document.getElementById("log-area"); 
    if (msg === "Sıra sende!" || msg.includes("KAZANDIN") || msg.includes("KAYBETTİN") || msg.includes("BERABERE") || msg.includes("Oyun Başladı") || msg.includes("Sıra rakipte")) {
        el.innerText = msg;
        el.style.opacity = '1';
        if (logTimeout) clearTimeout(logTimeout); 
        logTimeout = setTimeout(()=>{ el.style.opacity = '0'; }, DURATION);
    }
}

// --- ANIMASYONLAR ---
async function animateCardFusion(index1, index2) {
    const pArea = document.getElementById("player-hand");
    const cardEl1 = pArea.children[index1];
    const cardEl2 = pArea.children[index2];
    if (!cardEl1 || !cardEl2) return;

    const rect1 = cardEl1.getBoundingClientRect();
    const rect2 = cardEl2.getBoundingClientRect();
    const centerX = (rect1.left + rect2.left) / 2;
    const centerY = (rect1.top + rect2.top) / 2;

    const clone1 = cardEl1.cloneNode(true);
    const clone2 = cardEl2.cloneNode(true);
    clone1.classList.add('animated-card');
    clone2.classList.add('animated-card');
    clone1.classList.remove('selected', 'drop-target-fusion');
    clone2.classList.remove('selected', 'drop-target-fusion');

    clone1.style.left = rect1.left + 'px'; clone1.style.top = rect1.top + 'px';
    clone2.style.left = rect2.left + 'px'; clone2.style.top = rect2.top + 'px';
    cardEl1.remove(); cardEl2.remove();

    document.body.appendChild(clone1); document.body.appendChild(clone2);
    playSound('sound-score');

    requestAnimationFrame(() => {
        const translate1X = centerX - rect1.left; const translate1Y = centerY - rect1.top;
        const translate2X = centerX - rect2.left; const translate2Y = centerY - rect2.top;
        clone1.style.transform = `translate(${translate1X}px, ${translate1Y}px) scale(0.8) rotate(-10deg)`;
        clone2.style.transform = `translate(${translate2X}px, ${translate2Y}px) scale(0.8) rotate(10deg)`;
    });
    
    await new Promise(r => setTimeout(r, 400));
    spawnParticles(centerX + rect1.width / 2, centerY + rect1.height / 2, "gold");
    clone1.style.opacity = '0'; clone2.style.opacity = '0';
    await new Promise(r => setTimeout(r, 200));
    clone1.remove(); clone2.remove();
    return { centerX, centerY };
}

async function animateNewCardPopup(newCardEl, startPos) {
    if (!newCardEl || !startPos) return;
    const targetRect = newCardEl.getBoundingClientRect();
    newCardEl.style.position = 'fixed';
    newCardEl.style.left = startPos.centerX + 'px'; newCardEl.style.top = startPos.centerY + 'px';
    newCardEl.style.zIndex = 1000; newCardEl.style.opacity = '0';
    newCardEl.style.transform = 'scale(0.1) rotateY(180deg)'; 
    void newCardEl.offsetWidth; 
    requestAnimationFrame(() => {
        newCardEl.style.transition = 'transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55), opacity 0.4s ease-out';
        newCardEl.style.left = targetRect.left + 'px'; newCardEl.style.top = targetRect.top + 'px';
        newCardEl.style.opacity = '1'; newCardEl.style.transform = 'scale(1.0) rotateY(0deg)';
    });
    await new Promise(r => setTimeout(r, 600));
    newCardEl.style.position = ''; newCardEl.style.left = ''; newCardEl.style.top = ''; newCardEl.style.zIndex = '';
    newCardEl.style.transition = 'transform 0.18s ease, opacity 0.18s ease';
}

async function drawNewCardAnimated(owner) {
    return new Promise(resolve => {
        const newCard = drawCard();
        if (!newCard) { resolve(null); return; }

        const isPlayer = owner === 'player';
        const deckArea = document.getElementById("deck-area");
        const deckRect = deckArea.getBoundingClientRect();
        
        if (isPlayer) playerHand.push(newCard); else cpuHand.push(newCard);
        renderHands(); 
        
        const targetHandArea = isPlayer ? document.getElementById("player-hand") : document.getElementById("cpu-hand");
        const targetCardEl = targetHandArea.children[targetHandArea.children.length - 1];
        if (!targetCardEl) { resolve(newCard); return; } 
        
        const animCard = document.createElement("div");
        animCard.className = `card animated-card card-back`;
        animCard.innerHTML = `<div class="card-img"><svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="10" width="52" height="44" rx="6" fill="#6b6b6b"/></svg></div>`;
        document.body.appendChild(animCard);

        const cardWidth = targetCardEl.offsetWidth; const cardHeight = targetCardEl.offsetHeight;
        const startLeft = deckRect.left + (deckRect.width - cardWidth) / 2;
        const startTop = deckRect.top + (deckRect.height - cardHeight) / 2;

        animCard.style.left = startLeft + 'px'; animCard.style.top = startTop + 'px';
        animCard.style.transform = 'translate(0, 0) scale(1.0) rotate(2deg)';
        const targetRect = targetCardEl.getBoundingClientRect();
        targetCardEl.style.opacity = '0';
        
        requestAnimationFrame(() => {
            const translateX = targetRect.left - startLeft; const translateY = targetRect.top - startTop;
            animCard.style.transform = `translate(${translateX}px, ${translateY}px) scale(1.0) rotate(5deg)`;
        });

        setTimeout(() => {
            animCard.remove(); targetCardEl.style.opacity = '1';
            renderHands(); resolve(newCard);
        }, 600);
    });
}

// --- BİRLEŞTİRME (FUSION) ---
function getCardByName(isim) { return kartKatalogu.find(k => k.isim === isim); }

async function fusionCards(cardName1, cardName2, hand, index1, index2) {
    if (cardName1 !== cardName2 || !fusionMap[cardName1] || isProcessingMove) return false;
    if (hand[index1].frozenUntil > Date.now() || hand[index2].frozenUntil > Date.now()) return false;

    isProcessingMove = true; 
    resetSelectionState();

    const newCardName = fusionMap[cardName1];
    const newCard = getCardByName(newCardName);
    if (!newCard) { isProcessingMove = false; return false; }

    const fusionPos = await animateCardFusion(index1, index2);
    const indices = [index1, index2].sort((a, b) => b - a);
    hand.splice(indices[0], 1); hand.splice(indices[1], 1); 
    hand.push({...newCard, frozenUntil: 0, isStolen: false}); 

    await drawNewCardAnimated('player'); 
    
    const newCardIndex = playerHand.length - 1; 
    const newCardEl = document.getElementById("player-hand").children[newCardIndex];
    if (newCardEl && fusionPos) { await animateNewCardPopup(newCardEl, fusionPos); }
    
    turn = "cpu";
    updateUI(false); 
    isProcessingMove = false; 
    renderHands();
    log("Sıra rakipte!");
    setTimeout(cpuTurn, 1000); 
    return true;
}

// --- SEÇİM & TIKLAMA ---
function resetSelectionState() {
    if (selectedCardIndex !== -1) {
        const selectedEl = document.getElementById("player-hand").children[selectedCardIndex];
        if (selectedEl) selectedEl.classList.remove('selected');
    }
    selectedCardIndex = -1;
    document.getElementById("discard-pile").classList.remove('drop-target-play');
    document.getElementById("player-hand").querySelectorAll('.card').forEach((cardEl) => {
        cardEl.classList.remove('drop-target-fusion');
    });
}

function highlightFusionTargets(selectedName, selectedIndex) {
    if (fusionMap[selectedName]) {
        document.getElementById("player-hand").querySelectorAll('.card').forEach((cardEl, index) => {
            if (index !== selectedIndex && cardEl.dataset.name === selectedName && playerHand[index].frozenUntil <= Date.now()) {
                cardEl.classList.add('drop-target-fusion');
            }
        });
    }
}

function handleCardClick(clickedIndex) {
    if (turn !== 'player' || isProcessingMove) return;
    
    if (playerHand[clickedIndex].frozenUntil > Date.now()) {
        const remainingTime = Math.ceil((playerHand[clickedIndex].frozenUntil - Date.now()) / 1000);
        spawnFloatingText("player-hand", `DONMUŞ! (${remainingTime}s)`, "#00ced1");
        return;
    }

    if (selectedCardIndex === -1) {
        selectedCardIndex = clickedIndex;
        document.getElementById("player-hand").children[clickedIndex].classList.add('selected');
        document.getElementById("discard-pile").classList.add('drop-target-play'); 
        highlightFusionTargets(playerHand[clickedIndex].isim, clickedIndex); 
        
    } else {
        const selectedCard = playerHand[selectedCardIndex];
        const clickedCard = playerHand[clickedIndex];

        if (selectedCardIndex === clickedIndex) {
            resetSelectionState();
            return;
        }

        if (selectedCard.isim === clickedCard.isim && selectedCard.isim in fusionMap) {
             fusionCards(selectedCard.isim, clickedCard.isim, playerHand, selectedCardIndex, clickedIndex);
        } else {
            resetSelectionState(); 
            selectedCardIndex = clickedIndex;
            document.getElementById("player-hand").children[clickedIndex].classList.add('selected');
            document.getElementById("discard-pile").classList.add('drop-target-play'); 
            highlightFusionTargets(playerHand[clickedIndex].isim, clickedIndex); 
        }
    }
}

function handleDiscardPileClick() {
    if (turn === 'player' && selectedCardIndex !== -1 && !isProcessingMove) {
        const indexToPlay = selectedCardIndex;
        resetSelectionState();
        playCard(indexToPlay, 'player'); 
    } 
}

// --- OYUN MANTIĞI ---
function startGame(){
    createAndShuffleDeck(); playerScore = 50; cpuScore = 50;
    playerHand=[]; cpuHand=[]; turn="player"; gameActive=true; lastPlayedCard=null;
    playerMultiplierTurns = cpuMultiplierTurns = 0; cpuHasShield = playerHasShield = false; isProcessingMove = false;
    resetSelectionState(); 
    for(let i=0;i<MAX_HAND_SIZE;i++){ const p=drawCard(); if(p) playerHand.push(p); const c=drawCard(); if(c) cpuHand.push(c); }
    renderHands(); renderCenterArea(); updateUI(true); log("Oyun Başladı!");
    if (freezeCheckInterval) clearInterval(freezeCheckInterval);
    freezeCheckInterval = setInterval(checkFrozenCards, 1000); 
}

function checkFrozenCards() {
    const now = Date.now();
    let changed = false;

    playerHand.forEach(card => {
        if (card.frozenUntil > 0 && card.frozenUntil <= now) {
            card.frozenUntil = 0;
            changed = true;
            spawnFloatingText("player-hand", "BUZ ÇÖZÜLDÜ!", "#00ffff");
        }
    });

    cpuHand.forEach(card => {
        if (card.frozenUntil > 0 && card.frozenUntil <= now) {
            card.frozenUntil = 0;
            changed = true;
        }
    });

    if (changed) {
        renderHands();
    }
}

function checkZeroScore(){
    if (playerScore <= 0 || cpuScore <= 0) {
        if (gameActive) { const winner = playerScore > cpuScore ? 'Sen' : 'CPU'; endGame(`ANI ÖLÜM! ${winner} kazandı!`, true); }
        return true;
    } return false;
}

function applyMultiplier(score, multiplierTurns){ return multiplierTurns>0 ? score*2 : score; }

// --- RENDER HANDS (ÇALINTI KART İKONU GÜNCELLENDİ) ---
function renderHands(){
    const pArea = document.getElementById("player-hand"); 
    const cArea = document.getElementById("cpu-hand");
    pArea.innerHTML = ""; 
    cArea.innerHTML = "";
    
    const now = Date.now();

    playerHand.forEach((card, index) => {
        const div = document.createElement("div"); 
        div.className = `card ${card.renk}`;
        div.dataset.name = card.isim; 
        
        if (card.frozenUntil > now) div.classList.add('frozen'); 
        // YENİ: Çalıntı kart ise sınıf ekle
        if (card.isStolen) div.classList.add('stolen');

        div.innerHTML = `${card.img}<div style="font-weight:700;">${card.isim}</div><div style="font-size:10px;">${card.deger!=0 ? (card.deger>0? '+'+card.deger : card.deger) : ''}</div>`;
        
        if (index === selectedCardIndex) {
             div.classList.add('selected');
             highlightFusionTargets(card.isim, index); 
        }
        div.onclick = () => handleCardClick(index); 
        pArea.appendChild(div);
    });
    
    cpuHand.forEach((card) => {
        const div = document.createElement("div"); 
        div.className = "card card-back"; 
        if (card.frozenUntil > now) div.classList.add('frozen'); 
        div.innerHTML = `<div class="card-img"><svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="10" width="52" height="44" rx="6" fill="#6b6b6b"/></svg></div>`;
        cArea.appendChild(div);
    });
}

// --- KART OYNAMA (CORE LOGIC - DÜZELTİLMİŞ) ---
async function playCard(index, owner){
    if (!gameActive || turn !== owner || isProcessingMove) return;
    isProcessingMove = true;
    
    let isPlayer = owner === 'player';
    let currentHand = isPlayer ? playerHand : cpuHand;
    let opponentHand = isPlayer ? cpuHand : playerHand;
    
    if (currentHand[index].frozenUntil > Date.now()) {
        isProcessingMove = false;
        return;
    }

    const card = currentHand[index];
    const playerHandEl = document.getElementById("player-hand");
    const cpuHandEl = document.getElementById("cpu-hand");
    const cardElement = isPlayer ? playerHandEl.children[index] : cpuHandEl.children[index];

    if (!cardElement) { isProcessingMove = false; renderHands(); return; }

    const discardPile = document.getElementById("discard-pile");
    const discardRect = discardPile.getBoundingClientRect();
    const cardRect = cardElement.getBoundingClientRect();
    
    const cloneCard = cardElement.cloneNode(true);
    cloneCard.classList.add('animated-card');
    cloneCard.classList.remove('card-back', 'selected', 'stolen', 'frozen');
    
    if (!isPlayer) {
        cloneCard.className = `card animated-card ${card.renk}`; 
        cloneCard.innerHTML = `${card.img}<div style="font-weight:700;">${card.isim}</div><div style="font-size:10px;">${card.deger>0? '+'+card.deger : card.deger}</div>`;
        cloneCard.style.transform = `rotateY(180deg)`;
    }

    cloneCard.style.left = cardRect.left + 'px'; cloneCard.style.top = cardRect.top + 'px';
    document.body.appendChild(cloneCard);
    cardElement.style.opacity = '0';

    const targetCenterX = discardRect.left + discardRect.width / 2;
    const targetCenterY = discardRect.top + discardRect.height / 2;
    const currentCenterX = cardRect.left + cardRect.width / 2;
    const currentCenterY = cardRect.top + cardRect.height / 2;

    requestAnimationFrame(() => {
        const translateX = targetCenterX - currentCenterX; const translateY = targetCenterY - currentCenterY;
        if (!isPlayer) cloneCard.style.transform = `translate(${translateX}px, ${translateY}px) scale(0.95) rotateY(0deg) rotate(5deg)`;
        else cloneCard.style.transform = `translate(${translateX}px, ${translateY}px) scale(0.95) rotate(5deg)`;
        cloneCard.style.opacity = '1';
    });

    await new Promise(r => setTimeout(r, 600)); 
    
    currentHand.splice(index,1); 
    cardElement.remove(); 

    lastPlayedCard = card;
    playSound('sound-play'); cloneCard.remove();
    
    // --- ETKİ HESAPLAMA ---
    let finalValue = card.deger; 
    const centerEffectX = discardRect.left + discardRect.width/2;
    const centerEffectY = discardRect.top + discardRect.height/2;
    let isOpponentShielded = isPlayer ? cpuHasShield : playerHasShield;

    if (card.tur === "puan" || card.tur === "yakut"){
        finalValue = applyMultiplier(finalValue, isPlayer ? playerMultiplierTurns : cpuMultiplierTurns);
        
        if (isPlayer) { playerScore += finalValue; spawnFloatingText("player-stats", `+${finalValue}`, "#ffd700"); spawnParticles(centerEffectX, centerEffectY, "gold"); } 
        else { cpuScore += finalValue; spawnFloatingText("cpu-stats", `+${finalValue}`, "#ffd700"); spawnParticles(centerEffectX, centerEffectY, "gold"); }
        
        if (card.tur === "yakut"){ 
            if (isPlayer) playerMultiplierTurns = 1; else cpuMultiplierTurns = 1; 
        }
    } 
    else if (card.tur === "ates"){
        finalValue = applyMultiplier(finalValue, isPlayer ? playerMultiplierTurns : cpuMultiplierTurns);
        let damage = Math.abs(finalValue); 

        if (isOpponentShielded){
            damage = Math.floor(damage / 2); 
            spawnFloatingText(isPlayer ? "cpu-stats" : "player-stats", "KALKAN!", "#aaa");
            if (isPlayer) cpuHasShield = false; else playerHasShield = false; 
        }

        if (isPlayer) {
            cpuScore -= damage; 
            spawnFloatingText("cpu-stats", `-${damage}`, "#ff4444");
            spawnParticles(centerEffectX, centerEffectY, "damage");
        } else {
            playerScore -= damage; 
            spawnFloatingText("player-stats", `-${damage}`, "#ff4444");
            spawnParticles(centerEffectX, centerEffectY, "damage");
        }
        triggerShake();
    }
    else if (card.tur === "dondurma"){
        if (opponentHand.length > 0) {
            const randIdx = Math.floor(Math.random() * opponentHand.length);
            opponentHand[randIdx].frozenUntil = Date.now() + 20000; 
            spawnFloatingText(isPlayer ? "cpu-hand" : "player-hand", "DONDU! (20s)", "#00ced1");
            spawnParticles(centerEffectX, centerEffectY, "ice");
        } else {
            spawnFloatingText("log-area", "BOŞA GİTTİ", "#fff");
        }
    }
    else if (card.tur === "kalkan"){ 
        if (isPlayer) playerHasShield = true; else cpuHasShield = true; 
        spawnFloatingText(isPlayer ? "player-stats" : "cpu-stats", "KALKAN", "#88ccff");
    } 
    // GÜNCELLENMİŞ HIRSIZ MANTIĞI
    else if (card.tur === "hirsiz"){
        if (opponentHand.length > 0){ 
            const stolenIndex = Math.floor(Math.random()*opponentHand.length);
            const stolenCard = opponentHand.splice(stolenIndex,1)[0]; 
            
            stolenCard.isStolen = true; // Kartı işaretle
            currentHand.push(stolenCard);
            
            const opponentDraw = drawCard();
            if (opponentDraw) opponentHand.push(opponentDraw);
            
            spawnFloatingText(isPlayer ? "player-stats" : "cpu-stats", "HIRSIZ!", "#800080");
            spawnFloatingText(isPlayer ? "cpu-stats" : "player-stats", "Kart Çalındı!", "#800080");

            // Oyuncunun elini 4 karta çıkarmak için ekstra çekim
            await drawNewCardAnimated(owner); 
        } else {
             spawnFloatingText(isPlayer ? "cpu-stats" : "player-stats", "BOŞA GİTTİ!", "#fff");
             await drawNewCardAnimated(owner);
        }
    }
    
    if (card.tur === "puan" || card.tur === "ates" || card.tur === "yakut" || card.tur === "hirsiz") {
         if (isPlayer && playerMultiplierTurns > 0 && card.tur !== "yakut") playerMultiplierTurns--; 
         if (!isPlayer && cpuMultiplierTurns > 0 && card.tur !== "yakut") cpuMultiplierTurns--;
    }

    updateUI(false); 

    if (checkZeroScore()) { isProcessingMove = false; return; }
    
    // KART ÇEKME KURALI:
    // Hırsız oynayınca yukarıda çektik.
    // Çalıntı (isStolen) kart oynayınca ÇEKMİYORUZ (El 3'e düşsün diye).
    // Normal kart oynayınca çekiyoruz.
    if (card.tur !== "hirsiz" && !card.isStolen) { 
        await drawNewCardAnimated(owner); 
    } else if (card.isStolen) {
         spawnFloatingText(isPlayer ? "player-hand" : "cpu-hand", "TÜKENDİ", "#800080");
    }

    renderCenterArea();
    
    if (anaDeste.length === 0) { endGame("DESTEDE KART BİTTİ!", false); isProcessingMove = false; return; }
    
    if (isPlayer){ 
        turn = "cpu"; isProcessingMove = false; 
        renderHands(); 
        log("Sıra rakipte!");
        setTimeout(cpuTurn, 1000); 
    } else { 
        turn = "player"; isProcessingMove = false; 
        renderHands();
        log("Sıra sende!"); 
    }
}


function cpuTurn(){
    if (!gameActive || cpuHand.length===0){ turn="player"; isProcessingMove=false; renderHands(); log("Sıra sende!"); return; }
    
    const now = Date.now();
    let validIndices = cpuHand.map((c, i) => c.frozenUntil > now ? -1 : i).filter(i => i !== -1);
    if (validIndices.length === 0) {
        log("Rakip Dondu!");
        turn="player"; isProcessingMove=false; renderHands(); log("Sıra sende!");
        return;
    }

    let idx = -1;
    const playableHand = validIndices.map(i => ({...cpuHand[i], originalIndex: i}));
    
    const lethal = playableHand.find(c => c.tur==="ates" && playerScore <= Math.abs(applyMultiplier(c.deger, cpuMultiplierTurns))); 
    if (lethal) idx = lethal.originalIndex;
    
    if (idx === -1){ const y = playableHand.find(c=>c.tur==="yakut"); if (y) idx = y.originalIndex; }
    if (idx === -1 && !cpuHasShield && cpuScore < 20){ const s = playableHand.find(c=>c.tur==="kalkan"); if (s) idx = s.originalIndex; }
    // CPU Çalıntı kartları öncelikli harcasın
    if (idx === -1){ const st = playableHand.find(c=>c.isStolen); if(st) idx = st.originalIndex; }
    if (idx === -1 && playerHand.length > 2){ const h = playableHand.find(c=>c.tur==="hirsiz"); if (h) idx = h.originalIndex; }
    if (idx === -1){ const d = playableHand.find(c=>c.tur==="dondurma"); if (d) idx = d.originalIndex; }
    
    if (idx === -1) {
        const puanKartlari = playableHand.filter(c => c.tur === "puan");
        if (puanKartlari.length > 0) {
            idx = puanKartlari[Math.floor(Math.random() * puanKartlari.length)].originalIndex;
        } else {
            idx = validIndices[Math.floor(Math.random()*validIndices.length)]; 
        }
    }
    
    playCard(idx, 'cpu');
}

function endGame(message, isSudden){
    if (!gameActive) return; gameActive = false; isProcessingMove = false; playSound('sound-win');
    if (freezeCheckInterval) clearInterval(freezeCheckInterval); 
    
    let result = ""; if (isSudden) result = message; else { if (playerScore > cpuScore) result = "🏆 KAZANDIN! 🏆"; else if (cpuScore > playerScore) result = "💀 KAYBETTİN..."; else result = "🤝 BERABERE!"; }
    log(result);
    setTimeout(() => { alert(result + "\n\nOyun 2 saniye içinde otomatik olarak yeniden başlayacak..."); setTimeout(startGame, 2000); }, 500);
}

function renderCenterArea(){
    const discardPile = document.getElementById("discard-pile"); discardPile.innerHTML = '';
    if (lastPlayedCard){
        const div = document.createElement("div"); div.className = `card discarded-card ${lastPlayedCard.renk}`;
        div.innerHTML = `${lastPlayedCard.img}<div style="font-size:11px;margin-top:6px;font-weight:700;">${lastPlayedCard.isim}</div>`; 
        discardPile.appendChild(div);
    } else { discardPile.innerHTML = `<span id="discard-text">ATILAN</span>`; }
    document.getElementById("deck-count").innerText = anaDeste.length;
}

function updateUI(skip=false){
    const pStats = document.getElementById("player-stats"); 
    const cStats = document.getElementById("cpu-stats");

    let pM = playerMultiplierTurns>0 ? `<div class="multiplier">2X</div>` : ''; 
    let cM = cpuMultiplierTurns>0 ? `<div class="multiplier">2X</div>` : '';
    if (playerHasShield) pM += `<div class="shield-icon">🛡️</div>`; 
    if (cpuHasShield) cM += `<div class="shield-icon">🛡️</div>`;
    
    pStats.innerHTML = `<span>👑 SEN (${playerHand.length} Kart)</span><span id="player-score">Hazine: ${playerScore}</span>${pM}`;
    cStats.innerHTML = `<span>🤴 RAKİP</span><span id="cpu-score">Hazine: ${cpuScore}</span>${cM}`;
}

// --- MENÜLER ---
function hideAllMenus() {
    document.getElementById('main-menu').classList.add('hidden');
    document.getElementById('game-board').classList.add('hidden');
    document.getElementById('catalog-menu').classList.add('hidden');
}
function showMenu() { hideAllMenus(); document.getElementById('main-menu').classList.remove('hidden'); }
function confirmExit() { 
    if (gameActive && confirm("Oyundan çıkıp ana menüye dönmek istiyor musun?")) { 
        if (freezeCheckInterval) clearInterval(freezeCheckInterval);
        showMenu(); 
    } else if (!gameActive) {
        showMenu();
    }
}
function showGame(){ hideAllMenus(); document.getElementById('game-board').classList.remove('hidden'); startGame(); }
function showCatalog() {
    hideAllMenus(); document.getElementById('catalog-menu').classList.remove('hidden');
    renderCatalogList();
    document.getElementById('catalog-detail').innerHTML = '<p style="font-style:italic;">Detayları görmek için listeden bir kart seçin.</p>';
}

function renderCatalogList() {
    const list = document.getElementById("catalog-list"); list.innerHTML = "";
    kartKatalogu.forEach(k => {
        const el = document.createElement("div"); el.className = "card-list-item";
        el.innerText = k.isim; el.onclick = () => showCardDetail(k);
        list.appendChild(el);
    });
}
function showCardDetail(card) {
    const d = document.getElementById("catalog-detail");
    d.innerHTML = `
        <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
            <div class="card ${card.renk}" style="transform:scale(0.8); margin:0;">${card.img}</div>
            <div><h3 style="margin:0; color:var(--gold);">${card.isim}</h3></div>
        </div>
        <div class="card-detail">
            <strong>Değer:</strong> <span class="detail-value">${card.deger}</span><br>
            <strong>Etki:</strong> <span class="detail-value">${card.calisma}</span><br>
            <strong>Açıklama:</strong> <span class="detail-value">${card.aciklama}</span>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', ()=>{
    const discardPile = document.getElementById('discard-pile');
    discardPile.addEventListener('click', handleDiscardPileClick);
    const splash = document.getElementById('splash-screen'); splash.style.opacity = '1';
    setTimeout(() => { 
        splash.style.opacity = '0'; 
        setTimeout(() => { 
            splash.style.display = 'none'; 
            showMenu(); 
        }, 1000); 
    }, 2000);
});