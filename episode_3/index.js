// 게임 캐릭터
var player = {
    x: 0,
    y: 0,
    speedX: 0,
    speedY: 0,
    nickname: "곱창전골",
    level: 250,
    power: 1000,
    stemina: 500,
    dex: 500,
};

function createMushroom() {
    return {
        x: 0,
        y: 0,
        name: "주황버섯", // 속성 property
        level: 5,
        power: 10,
        move: function () {
            // 오브젝트의 동작은 오브젝트 스스로가 구현함으로써
            // 객체지향적으로 구현하였다.
            if (this.x < player.x) {
                this.x += 1;
            } else {
                this.x -= 1;
            }
            if (this.y < player.y) {
                this.y += 1;
            } else {
                this.y -= 1;
            }
        },
    };
}

function createSlime() {
    return {
        x: 0,
        y: 0,
        name: "슬라임",
        level: 4,
        power: 8,
        move: function () {
            if (this.x < player.x) {
                this.x += 2;
            } else {
                this.x -= 2;
            }
            if (this.y < player.y) {
                this.y += 2;
            } else {
                this.y -= 2;
            }
        },
    };
}

var field = [];
field.push(createMushroom());
field.push(createSlime());

var context;
function initScreen() {
    var canvas = document.querySelector("canvas");
    context = canvas.getContext("2d");
    canvas.width = 1200;
    canvas.height = 1200;
}

function update() {
    // 전체 화면 초기화
    context.clearRect(0, 0, 1200, 1200);
    // 캔버스야 펜 들어!
    // 플레이어 그리기
    context.beginPath();
    // 사각형 너비 몇 높이는 몇
    context.ellipse(player.x, player.y, 25, 25, 0, 0, Math.PI * 2, false);

    // 무슨 색으로 칠한건지
    context.fillStyle = "red";
    // 사각형 채워서 그릴 것인지, 외곽선만 그릴 것인지
    context.fill();

    for (var i = 0; i < field.length; i += 1) {
        var monster = field[i];
        switch (monster.name) {
            case "주황버섯":
                context.fillStyle = "orange";
                // 따라 다니기
                break;
            case "슬라임":
                context.fillStyle = "green";
                break;
        }

        monster.move();

        context.beginPath();
        context.ellipse(monster.x, monster.y, 25, 25, 0, 0, Math.PI * 2, false);
        context.fill();
    }

    player.x += player.speedX;
    player.y += player.speedY;

    requestAnimationFrame(update);
}

window.onload = function () {
    initScreen();
    update();
};

window.onkeydown = function (event) {
    switch (event.keyCode) {
        case 37: // 왼쪽
            player.speedX = -3;
            break;
        case 38: // 위
            player.speedY = -3;
            break;
        case 39: // 오른쪽
            player.speedX = 3;
            break;
        case 40: // 아래
            player.speedY = 3;
            break;
    }
};

window.onkeyup = function (event) {
    switch (event.keyCode) {
        case 37: // 왼쪽
            player.speedX = 0;
            break;
        case 38: // 위
            player.speedY = 0;
            break;
        case 39: // 오른쪽
            player.speedX = 0;
            break;
        case 40: // 아래
            player.speedY = 0;
            break;
    }
};
