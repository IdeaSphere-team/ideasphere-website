const sloganElement = document.getElementById('slogan');
const slogans = ['开源至上，配置随心', '功能卓越，定制无限'];
const gradients = [
    'linear-gradient(97deg,#0096FF,#BB64FF 42%,#F2416B 74%,#EB7500)',
    'linear-gradient(270deg,#EB7500,#F2416B 42%,#BB64FF 74%,#0096FF)'
];
let currentSloganIndex = 0;
let currentGradientIndex = 0;

// 打字函数
function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
        sloganElement.innerHTML = text.substring(0, i + 1);
        setTimeout(function () {
            typeWriter(text, i + 1, fnCallback);
        }, 100);
    } else if (typeof fnCallback === 'function') {
        setTimeout(fnCallback, 500);
    }
}

// 删除函数
function deleteText(fnCallback) {
    const text = sloganElement.innerHTML;
    if (text.length > 0) {
        sloganElement.innerHTML = text.substring(0, text.length - 1);
        setTimeout(function () {
            deleteText(fnCallback);
        }, 50);
    } else if (typeof fnCallback === 'function') {
        setTimeout(fnCallback, 500);
    }
}

// 切换标语函数
function changeSlogan() {
    deleteText(() => {
        currentSloganIndex = (currentSloganIndex + 1) % slogans.length;
        currentGradientIndex = (currentGradientIndex + 1) % gradients.length;
        sloganElement.style.backgroundImage = gradients[currentGradientIndex];
        typeWriter(slogans[currentSloganIndex], 0, () => {
            // 每 8 秒后再次调用 changeSlogan 函数
            setTimeout(changeSlogan, 8000); 
        });
    });
}

// 初始化打字
typeWriter(slogans[currentSloganIndex], 0, () => {
    // 初始显示 8 秒后开始切换
    setTimeout(changeSlogan, 8000); 
});