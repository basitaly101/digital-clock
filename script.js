
const cardEl = document.querySelector('.cards h2');
setInterval(() => {let time = new Date().toLocaleTimeString();
    cardEl.textContent = time;
    
}, 1000);