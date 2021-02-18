const string = `
 .cat {
  width: 400px;
  height: 340px;
  margin: 100px auto;
  position: relative;
}
/* 制作头部*/
.head {
  width: 400px;
  height: 340px;
  background: white;
  border: 2px solid #000;
  border-radius: 50% 50% 35% 35%;
  position: relative;
  overflow: hidden;
  z-index: 10;
}
/* 脑袋花纹*/
.figure {
  position: absolute;
  height: 160px;
  width: 180px;
  left: 110px;
  background: #8d8d8d;
  border-radius: 0% 0% 50% 50%;
  overflow: hidden;
}
.figure > .left-figure {
  height: 160px;
  width: 90px;
  background: #f0ac6b;
}
/* 制作耳朵*/
.ear {
  width: 374px;
  height: 120px;
  position: absolute;
  top: -6px;
  left: 50%;
  margin-left: -187px;
}

.ear > .left {
  width: 160px;
  height: 200px;
  background: white;
  border: 2px solid #000;
  position: absolute;
  left: -20px;
  top: 0;
  border-radius: 4% 80% 0% 50%;
  transform: rotate(-15deg);
}
.ear > .right {
  width: 160px;
  height: 200px;
  background: white;
  border: 2px solid #000;
  position: absolute;
  right: -20px;
  top: 0;
  border-radius: 80% 4% 50% 0%;
  transform: rotate(15deg);
}
.ear > div {
  transition: all 1s linear;
}
/* 眼睛*/
.eye {
  width: 300px;
  height: 60px;
  position: absolute;
  top: 200px;
  left: 50%;
  margin-left: -150px;
  z-index: 20;
  overflow: hidden;
}
/* 眼圈 */
.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  border: 2px solid #000;
  overflow: hidden;
}
.circle > div:first-child {
  width: 30px;
  height: 100px;
  background: #000;
  margin-left: 35px;
  transition: all 1s linear;
}
/* 眼睛 底部的月牙 */
.bottom {
  width: 180px;
  height: 100px;
  border: 2px solid #000;
  border-radius: 50%;
  top: 50px;
  left: -40px;
  position: absolute;
  background: white;
  transition: all 1s linear;
}

.eye > .right {
  left: 196px;
  top: 0;
  position: absolute;
}
/* 脸部花纹 */
.face {
  width: 380px;
  height: 80px;
  position: absolute;
  top: 190px;
  left: 50%;
  margin-left: -190px;
  z-index: 20;
}
.face-figure > div:first-child {
  width: 30px;
  height: 10px;
  border-top: 6px #e53941 solid;
  border-radius: 30% 80% 20% 50%;
  margin-left: 20px;
  transform: rotate(25deg);
}
.face-figure > div:nth-child(2) {
  width: 20px;
  height: 6px;
  border-radius: 50%;
  background: #e53941;
  margin-left: 20px;
  transform: rotate(25deg);
}
.face-figure > div:nth-child(3) {
  width: 32px;
  height: 10px;
  border-bottom: 4px #e53941 solid;
  border-radius: 30% 0% 90% 30%;
  transform: rotate(25deg);
  margin-left: 8px;
}
.face-figure > div:nth-child(4) {
  width: 26px;
  height: 20px;
  border-bottom: 4px #e53941 solid;
  border-radius: 30% 0% 90% 30%;
  transform: rotate(25deg);
  margin-left: 28px;
  margin-top: 20px;
}
.face-figure > div:last-child {
  width: 20px;
  height: 10px;
  border-bottom: 4px #e53941 solid;
  border-radius: 0% 0% 50% 50%;
  transform: rotate(-15deg);
  margin-top: -8px;
  margin-left: 40px;
}
.face-figure-right {
  position: absolute;
  right: 0;
  top: 0;
  transform: rotateY(180deg);
}
/* 制作鼻子 */
.nose {
  width: 30px;
  height: 36px;
  position: absolute;
  left: 50%;
  margin-left: -15px;
  top: 260px;
  z-index: 30;
}
.nose > div:first-child {
  width: 30px;
  height: 10px;
  border-bottom: 8px solid #000;
  border-radius: 0% 0% 50% 50%;
  margin-top: -10px;
}
/* 嘴巴 */
.mouth {
  width: 200px;
  height: 36px;
  position: absolute;
  left: 50%;
  margin-left: -100px;
  top: 260px;
  z-index: 30;
  overflow: hidden;
}
.mouth > .wrapper {
  margin-left: 85px;
  margin-top: 6px;
}
.wrapper > div:first-child {
  width: 4px;
  height: 8px;
  background: #000;
  margin-left: 13px;
}
.wrapper > div:nth-child(2) {
  width: 50px;
  height: 40px;
  border-bottom: 4px solid #000;
  border-left: 4px solid #000;
  border-radius: 40% 0% 20% 50%;
  margin-left: 13px;
  margin-top: -26px;
  position: absolute;
  transition: all 1s linear;
}
.wrapper > div:nth-child(3) {
  width: 50px;
  height: 40px;
  border-bottom: 4px solid #000;
  border-right: 4px solid #000;
  border-radius: 0% 40% 50% 20%;
  margin-left: -38px;
  margin-top: -26px;
  position: absolute;
  transition: all 1s linear;
}
/* 脸部 红晕 */
.red {
  position: absolute;
  height: 28px;
  width: 70px;
  background: red;
  top: 34px;
  left: 18px;
  border-radius: 50%;
  opacity: 0;
  transition: all 1s linear;
}

.cat:hover .ear > .left {
  left: -10px;
  transform: rotate(0deg);
  border-radius: 4% 80% 0% 60%;
}
.cat:hover .ear > .right {
  right: -10px;
  transform: rotate(0deg);
  border-radius: 80% 4% 60% 0%;
}
.cat:hover .circle > div:first-child {
  height: 100px;
  width: 40px;
  margin-left: 30px;
}

.cat:hover .bottom {
  top: 30px;
}
.cat:hover .red {
  opacity: 0.8;
}

.cat:hover .wrapper > div:nth-child(2) {
  border-radius: 50%;
  width: 40px;
}
.cat:hover .wrapper > div:nth-child(3) {
  border-radius: 50%;
  width: 40px;
  margin-left: -30px;
}

`;


const player = {
    id: undefined,
    timing: 0,
    ui: {
        demo: document.querySelector("#demo"),
        demo2: document.querySelector("#demo2")
    },
    events: {
        "#btnPause": "pause",
        "#btnPlay": "play",
        "#btnSlow": "slow",
        "#btnNormal": "normal",
        "#btnFast": "fast",
    },
    n: 0,
    init: () => {
        demo.innerHTML = string.substr(0, player.n);
        demo2.innerText = string.substr(0, player.n);
        player.play();
        player.bindEvents();
    },
    text: "",
    run: () => {
        player.n += 1;
        //停止
        if (player.n > string.length -1) {
            window.clearInterval(player.id);
            return;
        }
        if (string[player.n] === "\n") {
            player.text += "<br>";
        } else if (string[player.n] === " ") { // CSS代码中遇到空格
            player.text += "&nbsp;";
        } else {
            player.text += string[player.n];
        }
        demo.innerHTML = string.substr(0, player.n);
        demo2.innerHTML = player.text;
        demo2.scrollTop = demo2.scrollHeight;
    },
    bindEvents: () => {
        for (let key in player.events) {
            document.querySelector(key).onclick = player[player.events[key]];
        }
    },
    play: () => {
        clearInterval(player.id);
        player.id = setInterval(player.run, player.timing);
    },
    pause: () => {
        window.clearInterval(player.id);
    },
    slow: () => {
        player.pause();
        player.timing = 100;
        player.play();
    },
    normal: () => {
        player.pause();
        player.timing = 50;
        player.play();
    },
    fast: () => {
        player.pause();
        player.timing = 0;
        player.play();
    }
};

player.init();
