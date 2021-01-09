// 게임 캐릭터
var player = {
    x: 0,
    y: 0,
    speed: 5,
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
    };
}

function createSlime() {
    return {
        x: 0,
        y: 0,
        name: "슬라임",
        level: 4,
        power: 8,
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

function draw() {
    // 전체 화면 초기화
    context.clearRect(0, 0, 1200, 1200);
    // 캔버스야 펜 들어!
    // 플레이어 그리기
    context.beginPath();
    // 사각형 너비 몇 높이는 몇
    context.rect(player.x, player.y, 50, 50);
    // 무슨 색으로 칠한건지
    context.fillStyle = "red";
    // 사각형 채워서 그릴 것인지, 외곽선만 그릴 것인지
    context.fill();

    for (var i = 0; i < field.length; i += 1) {
        var monster = field[i];
        context.beginPath();
        context.rect(monster.x, monster.y, 50, 50);
        switch (monster.name) {
            case "주황버섯":
                context.fillStyle = "orange";
                break;
            case "슬라임":
                context.fillStyle = "green";
                break;
        }
        context.fill();
    }
}

window.onload = function () {
    initScreen();
    draw();
};

window.onkeydown = function (event) {
    switch (event.keyCode) {
        case 37: // 왼쪽
            player.x -= player.speed;
            break;
        case 38: // 위
            player.y -= player.speed;
            break;
        case 39: // 오른쪽
            player.x += player.speed;
            break;
        case 40: // 아래
            player.y += player.speed;
            break;
    }
    draw();
};
