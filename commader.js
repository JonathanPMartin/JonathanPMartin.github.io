const lifeStartingTotal = 40;
const commanderDamageThreshold = 21;
let playerCount;

const initContainer = document.getElementById('init-container');
const playerContainer = document.getElementById('player-container');

const players = [];

document.getElementById('init-form').addEventListener('submit', function(event) {
    event.preventDefault();
    playerCount = parseInt(document.getElementById('player-count').value);
    startGame();
});

function startGame() {
    initContainer.style.display = 'none';
    playerContainer.style.display = 'grid';
    
    // Adjust grid layout based on player count
    adjustGridLayout();
    
    initializePlayers();
}

function adjustGridLayout() {
    const adjustedPlayerCount = playerCount % 2 === 0 ? playerCount : playerCount + 1;
    const rows = Math.ceil(adjustedPlayerCount / 2);
    const columns = adjustedPlayerCount > 2 ? 2 : 1;

    playerContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    playerContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
}

function initializePlayers() {
    for (let i = 1; i <= playerCount; i++) {
        players.push({
            id: `player${i}`,
            lifeTotal: lifeStartingTotal,
            commanderDamage: {}
        });
        
        createPlayerUI(i);
    }
}

function createPlayerUI(playerNumber) {
    const playerDiv = document.createElement('div');
    playerDiv.className = 'player';
    playerDiv.id = `player${playerNumber}`;
    
    const rotationClass = getRotationClass(playerNumber);
    playerDiv.classList.add(rotationClass);
    
    playerDiv.innerHTML = `
        <div class="life-total" id="player${playerNumber}-life">${lifeStartingTotal}</div>
        <button onmousedown="startLifeUpdate(${playerNumber}, 1)" onmouseup="stopLifeUpdate()">+1</button>
        <button onmousedown="startLifeUpdate(${playerNumber}, -1)" onmouseup="stopLifeUpdate()">-1</button>
        <h3>Commander Damage</h3>
        ${generateCommanderDamageUI(playerNumber)}
    `;
    
    playerContainer.appendChild(playerDiv);
}

function getRotationClass(playerNumber) {
    const halfPlayers = Math.ceil(playerCount / 2);
    
    if (playerNumber <= halfPlayers) {
        return 'rotate-180';
    } else {
        return 'rotate-0';
    }
}

function generateCommanderDamageUI(playerNumber) {
    let html = '';
    html += `<select id="player${playerNumber}-commander-source" class="commander-source">`;
    for (let i = 1; i <= playerCount; i++) {
        if (i !== playerNumber) {
            html += `<option value="${i}">Player ${i}</option>`;
        }
    }
    html += `</select>`;
    
    html += `
        <div>
            <span>Damage: </span>
            <span class="commander-damage" id="player${playerNumber}-commander-damage">0</span>
            <button onclick="updateCommanderDamage(${playerNumber}, 1)">+1</button>
            <button onclick="updateCommanderDamage(${playerNumber}, -1)">-1</button>
        </div>
    `;
    
    return html;
}

// Handle Life Tracking
let lifeInterval;

function startLifeUpdate(playerNumber, amount) {
    updateLife(playerNumber, amount);
    lifeInterval = setInterval(() => updateLife(playerNumber, amount), 200);
}

function stopLifeUpdate() {
    clearInterval(lifeInterval);
}

function updateLife(playerNumber, amount) {
    const player = players[playerNumber - 1];
    player.lifeTotal += amount;
    
    if (player.lifeTotal < 0) {
        player.lifeTotal = 0;
    }
    
    document.getElementById(`player${playerNumber}-life`).textContent = player.lifeTotal;
}

// Handle Commander Damage Tracking
function updateCommanderDamage(playerNumber, amount) {
    const player = players[playerNumber - 1];
    const sourcePlayerId = parseInt(document.getElementById(`player${playerNumber}-commander-source`).value);
    
    if (!player.commanderDamage[sourcePlayerId]) {
        player.commanderDamage[sourcePlayerId] = 0;
    }
    
    player.commanderDamage[sourcePlayerId] += amount;
    
    if (player.commanderDamage[sourcePlayerId] < 0) {
        player.commanderDamage[sourcePlayerId] = 0;
    }
    
    document.getElementById(`player${playerNumber}-commander-damage`).textContent = player.commanderDamage[sourcePlayerId];
    
    if (player.commanderDamage[sourcePlayerId] >= commanderDamageThreshold) {
        alert(`Player ${playerNumber} has been defeated by Commander damage from Player ${sourcePlayerId}!`);
    }
}
