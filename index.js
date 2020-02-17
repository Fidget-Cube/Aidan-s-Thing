function setPos(x, y) {
    document.getElementById("coon").style.top = y + "px";
    document.getElementById("coon").style.left = x + "px";
}

function setRotation(angle) {
    document.getElementById("coon").style.transform = "rotate(" + angle + "deg)";
}

function update() {
    var x = 0;
    var right = true;
    var y = 0;
    var down = true;
    var angle = 0;
    var rotate = 0;

    var id = setInterval(frame, 5);
    function frame() {
        // Sets Direction
        if (x >= 1720) {
            right = false;
            rotate++;
        } else if (x <= 0) {
            right = true;
            rotate++;
        }
        if (y >= 880) {
            down = false;
            rotate++;
        } else if (y <= 0) {
            down = true;
            rotate++;
        }

        // Updates position
        if (right) {
            x++;
        } else {
            x--;
        }
        if (down) {
            y++;
        } else {
            y--;
        }
        setPos(x, y);

        // Updates rotation
        if (rotate % 2 == 0) {
            angle++;
        } else {
            angle--;
        }
        setRotation(angle);
    }
}

update();