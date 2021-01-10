window.onload = function () {
    var input = document.querySelector("input");
    var button = document.querySelector("button");

    var talk = document.querySelector(".talk");
    var msgTemplate = document.querySelector(".template");
    var templateYou = msgTemplate.querySelector(".msg");
    var templateMe = msgTemplate.querySelector(".msg.me");

    input.onkeyup = function (e) {
        if (e.key == "Enter") {
            sendMessage();
        }
    };

    button.onclick = function () {
        sendMessage();
    };

    function sendMessage() {
        if (input.value.trim().length == 0) {
            input.value = "";
            return;
        }

        var msg = input.value;
        var template = templateMe.cloneNode(true);
        template.querySelector(".content").innerHTML = msg;
        template.querySelector(".time").innerHTML = new Date().toISOString().substring(11, 19);
        talk.appendChild(template);

        template = templateYou.cloneNode(true);

        if (input.value == "안녕") {
            template.querySelector(".content").innerHTML = "그래 안녕";
        } else if (input.value == "잘있어") {
            template.querySelector(".content").innerHTML = "수고했어";
        } else {
            template.querySelector(".content").innerHTML = "뭐라는거야 ㅋ";
        }
        template.querySelector(".time").innerHTML = new Date().toISOString().substring(11, 19);
        talk.appendChild(template);

        input.value = "";
        scrollToBottom();
    }

    function scrollToBottom() {
        talk.scrollTop = talk.scrollHeight;
    }
};
