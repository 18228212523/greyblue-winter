document.addEventListener('DOMContentLoaded', function() {

    var startBtn = document.getElementById('btn-start');
    var settingsBtn = document.getElementById('btn-settings');
    var quitBtn = document.getElementById('btn-quit');

    // ===== 开始游戏 =====
    startBtn.addEventListener('click', function() {
        alert('进入游戏第一幕！');
        // 后续有了game.html，改成：
        // window.location.href = 'game.html';
    });

    // ===== 设置 =====
    settingsBtn.addEventListener('click', function() {
        alert('设置功能待开发');
    });

    // ===== 退出 =====
    quitBtn.addEventListener('click', function() {
        if (confirm('确定要退出吗？')) {
            window.close();
        }
    });

});