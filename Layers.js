class arcShape extends Shapes {
    constructor(_x, _y, _strokeColor, _strokeW, _fillMode, _fillColor, _frameStrokeCl) {
        super(_x, _y, _strokeColor, _strokeW, _fillMode, _fillColor, _frameStrokeCl);
        this.id = floor(random(0, 4));
    }

    render() {
        super.render();
        push();
        stroke(this.strokeColor);
        strokeWeight(this.strokeW);
        arc(this.posX, this.posY, this.gridSize, this.gridSize, this.randRot[this.id], this.randRot[this.id] + 180);
        pop();
    }
}

class semiArcShape extends Shapes {
    constructor(_x, _y, _strokeColor, _strokeW, _fillMode, _fillColor, _frameStrokeCl) {
        super(_x, _y, _strokeColor, _strokeW, _fillMode, _fillColor, _frameStrokeCl);
        this.id = floor(random(0, 4));
    }


}

class lineShape extends Shapes {
    constructor(_x, _y, _strokeColor, _strokeW, _fillMode, _fillColor, _frameStrokeCl) {
        super(_x, _y, _strokeColor, _strokeW, _fillMode, _fillColor, _frameStrokeCl);
        this.id = floor(random(0, 4));
    }


}

class noisyLineShape extends Shapes {
    constructor(_x, _y, _strokeColor, _strokeW, _fillMode, _fillColor, _frameStrokeCl) {
        super(_x, _y, _strokeColor, _strokeW, _fillMode, _fillColor, _frameStrokeCl);
        noiseSeed(random(this.gridSize));
        this.id = floor(random(0, 4));
        this.rand = random(0.005, 0.03);
        this.yThres = floor(random(7, 16));
    }


}

class dashedLineShape extends Shapes {
    constructor(_x, _y, _strokeColor, _strokeW, _fillMode, _fillColor, _frameStrokeCl) {
        super(_x, _y, _strokeColor, _strokeW, _fillMode, _fillColor, _frameStrokeCl);
        this.id = floor(random(0, 4));
    }

    
}
