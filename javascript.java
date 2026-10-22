window.addEventListener('offline', () => {
    showToast('Você está offline! O jogo do dinossauro foi ativado.');
    // Aqui você pode exibir a caixa do jogo caso ela esteja oculta
    document.getElementById('offline-game-box').style.display = 'block';
});

window.addEventListener('online', () => {
    showToast('Conexão restabelecida!');
});
