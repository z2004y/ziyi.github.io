// js/login.js

document.getElementById('submit').addEventListener('click', function() {
    const predefinedUser = {
        username: 'zzy',
        password: '666666'
    };

    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    if (usernameInput === predefinedUser.username && passwordInput === predefinedUser.password) {
        alert('登录成功');
        // 登录成功后，可以跳转到主页或进行其他操作
        window.location.href = 'blog_list.html';
    } else {
        alert('用户名或密码错误');
    }
});
