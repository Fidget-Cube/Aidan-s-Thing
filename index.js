function setPos(x, y) {
    document.getElementById("coon").style.top = y + "px";
    document.getElementById("coon").style.left = x + "px";
}

function update() {
    var x = 0;
    var right = true;
    var y = 0;
    var down = true;
    var id = setInterval(frame, 5);
    function frame() {
        // Sets Direction
        if (x >= 1720) {
            right = false;
        } else if (x <= 0) {
            right = true;
        }
        if (y >= 880) {
            down = false;
        } else if (y <= 0) {
            down = true;
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
    }
}

update();