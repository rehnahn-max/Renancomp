// Detecta automaticamente se o usuário ficou offline
window.addEventListener('offline', () => {
    showToast('Você está offline! Divirta-se com o jogo.');
    document.getElementById('offline-game-box').style.display = 'block';
});

window.addEventListener('online', () => {
    showToast('Conexão restabelecida!');
    document.getElementById('offline-game-box').style.display = 'none';
});
