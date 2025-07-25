let remainingCount = 5;
const statusText = document.getElementById('status');
const resultText = document.getElementById('result');
const openBtn = document.getElementById('openBtn');
const openGif = document.getElementById('openGif');
const openSound = document.getElementById('openSound');

openBtn.addEventListener('click', () => {
    if (remainingCount <= 0) {
        resultText.textContent = "오늘 박스를 더 이상 열 수 없습니다!";
        return;
    }

    // GIF 보이게 + 텍스트 초기화
    openGif.src = 'img/box_open.gif';
    openGif.classList.remove('hidden');
    openGif.classList.add('show');
    resultText.textContent = ""; // 텍스트 잠깐 지움 (결과가 겹치지 않게)

    // 0.5초 후 사운드 재생
    setTimeout(() => {
        openSound.currentTime = 0;
        openSound.play();
    }, 500);

    // 1.5초 후 결과 보여주기 (기존보다 1초 빠르게)
    setTimeout(() => {
        const isRare = Math.random() < 0.005;
        const result = isRare ? '이 확률을 뚫고 마검을 뽑는다고?' : 'ㅋㅋ쓰레기 ㅊㅊ';
        const gifPath = isRare ? 'img/rare.gif' : 'img/fail.gif';

        openGif.src = gifPath;
        resultText.innerHTML = `<span style="font-weight: bold; color: black;">${result}</span>`;

        remainingCount--;
        updateStatus();
    }, 1500); // 기존 2000ms → 1500ms로 조정
});

function updateStatus() {
    statusText.textContent = `오늘 남은 기회: ${remainingCount}회`;
}

function reset() {
    remainingCount = 5;
    updateStatus();
    resultText.textContent = "결과가 여기에 표시됩니다";
    openGif.classList.add('hidden');
}
