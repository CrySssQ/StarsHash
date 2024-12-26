let stars = 0;
let energy = 0;
let temperature = 30;
let battery = 100;
let hashRate = 0;


function startMining() {
    hashRate = Math.floor(Math.random() * 100) + 1;
    const interval = setInterval(() => {
        if (battery <= 0 || temperature >= 100) {
            clearInterval(interval);
            alert('Mining stopped due to overheating or battery depletion.');
            return;
        }
        stars += hashRate;
        energy += 0.1;
        temperature += Math.random() * 1;
        battery -= 0.5;
        updateStats();
    }, 1000);
}
function coolDown() {
    temperature = Math.max(5, Math.random() * 20);
    updateStats();
}

function submitPromoCode() {
    const code = document.getElementById('code-input').value;
    if (code === 'SECRET') {
        alert('Promo code accepted! Bonus stars awarded.');
        stars += 100;
        updateStats();
    } else {
        alert('Invalid promo code.');
    }
}

function switchTab(tabName) {
    alert(`Switched to ${tabName} tab!`);
}

function updateStats() {
    document.getElementById('stars').textContent = stars;
    document.getElementById('energy').textContent = energy.toFixed(1);
    document.getElementById('temperature').textContent = temperature.toFixed(1);
    document.getElementById('battery').textContent = battery.toFixed(1);
    document.getElementById('hashrate').textContent = hashRate;

    const tempElement = document.getElementById('temperature');
    if (temperature < 50) {
        tempElement.className = 'temperature';
    } else if (temperature < 71) {
        tempElement.className = 'temperature yellow';
    } else {
        tempElement.className = 'temperature red';
    }

    const batteryElement = document.getElementById('battery');
    if (battery > 50) {
        batteryElement.className = 'battery';
    } else if (battery > 20) {
        batteryElement.className = 'battery yellow';
    } else {
        batteryElement.className = 'battery red';
    }
}
