document.addEventListener('DOMContentLoaded', () => {
    const cube = document.querySelector(".cube");
    const cubeFaces = document.querySelectorAll('.cube-face');
    const hoverText = document.getElementById('hoverText');
    let rotateX = 0;
    let rotateY = 0;
    let clickCounts = {}; // 用于记录每个面的点击次数

    // 初始化每个面的点击次数
    cubeFaces.forEach(face => clickCounts[face.classList[1]] = 0);

    const updateCubeRotation = () => {
        cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleKeyDown = (event) => {
        switch (event.key) {
            case "ArrowUp":
                rotateX -= 45;
                break;
            case "ArrowDown":
                rotateX += 45;
                break;
            case "ArrowLeft":
                rotateY -= 45;
                break;
            case "ArrowRight":
                rotateY += 45;
                break;
        }
        updateCubeRotation();
    };

    window.addEventListener("keydown", handleKeyDown);

    const faceTexts = {
        'front':'<h2>Changed States</h2><p>This game consists of two parts. The first part involves eliminating circles; as the cursor changes color, circles that match the cursors color on the screen are eliminated. The second part is a circular ping-pong game. After the player loses, the game automatically reverts to the first part.</p>',
        'back': '<h2>Changed States</h2><pThis game consists of two parts. The first part involves eliminating circles; as the cursor changes color, circles that match the cursors color on the screen are eliminated. The second part is a circular ping-pong game. After the player loses, the game automatically reverts to the first part.</p>',
        'left': '<h2>Fragmented perceotion</h2><p>This project presents a camera that captures images as fragments. Users can either take photos or upload images to the p5.js platform, and receive their pictures in a creatively fragmented format. </p>',
        'right': '<h2>Fragmented perceotion</h2><p>This project presents a camera that captures images as fragments. Users can either take photos or upload images to the p5.js platform, and receive their pictures in a creatively fragmented format.</p>',
        'top': '<h2>Time Visualizer</h2><p>This is a visualize clock, whcih combimed with API, after users type the time in the search box, the time of that city will appear, and when cursor close to the rings, the color will changes too. Also the two circles on the ring moved as the speed of one second and one minute.</p>',
        'bottom':'<h2>Time Visualizer</h2><p>This is a visualize clock, whcih combimed with API, after users type the time in the search box, the time of that city will appear, and when cursor close to the rings, the color will changes too. Also the two circles on the ring moved as the speed of one second and one minute.</p>'
    };

    const faceUrls = {
        'front': 'https://ruin65.github.io/javascript-ballgame/',
        'back': 'https://ruin65.github.io/javascript-ballgame/',
        'left': 'https://editor.p5js.org/ruin650/full/2XItMCCy-',
        'right': 'https://editor.p5js.org/ruin650/full/2XItMCCy-',
        'top': 'https://ruin65.github.io/js-final/',
        'bottom': 'https://ruin65.github.io/js-final/',
    };

    cubeFaces.forEach(face => {
        face.addEventListener('click', () => {
            const faceClass = face.classList[1]; // 获取面的类（例如：'front', 'back'等）

            clickCounts[faceClass]++;
            if (clickCounts[faceClass] === 1) {
                // 第一次点击显示文本
                hoverText.innerHTML = faceTexts[faceClass];
                hoverText.style.display = 'block';
            } else if (clickCounts[faceClass] === 2) {
                // 第二次点击导航到URL
                window.location.href = faceUrls[faceClass];
                clickCounts[faceClass] = 0; // 重置点击计数器
            }
        });
    });
});
