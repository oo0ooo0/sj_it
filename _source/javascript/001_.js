var position = 20;
var speed = 3;

draw = function() {
    background(202, 255, 97);
    
    fill(66, 66, 66);
    position = position + speed;
    ellipse(position, 200, 50, 50);
    
    if (position > 375) {
        speed = -5;
    }
    if (position < 25) {
        speed = 5;
    }
};
