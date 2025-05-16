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

    render() {
        super.render();
        push();
        stroke(this.strokeColor);
        strokeWeight(this.strokeW);
        translate(this.posX, this.posY);

        var firstPx = 0;
        var firstPy = -this.gridSize * 0.5;
        var lastPx = firstPx;
        var lastPy = firstPy * -1;
        var firstCPx = -this.gridSize - this.gridSize * 0.5 - 6;
        var firstCPy = -this.gridSize * 0.5;
        var lastCPx = firstCPx;
        var lastCPy = firstCPy * -1;

        rotate(this.randRot[this.id]);
        curve(firstCPx, firstCPy, firstPx, firstPy, lastPx, lastPy, lastCPx, lastCPy)
        pop();
    }
}

class lineShape extends Shapes {
    constructor(_x, _y, _strokeColor, _strokeW, _fillMode, _fillColor, _frameStrokeCl) {
        super(_x, _y, _strokeColor, _strokeW, _fillMode, _fillColor, _frameStrokeCl);
        this.id = floor(random(0, 4));
    }

    render() {
        super.render();
        push();
        translate(this.posX, this.posY);
        stroke(this.strokeColor);
        strokeWeight(this.strokeW);

        if (this.randRotLn[this.id] == 45 || this.randRotLn[this.id] == -45) {
            //line(-this.gridSize*0.5,0,this.dDist-this.gridSize*0.5,0);
            rotate(this.randRotLn[this.id] - 45);
            line(-this.gridSize * 0.5, -this.gridSize * 0.5, this.gridSize * 0.5, this.gridSize * 0.5);
        } else {
            rotate(this.randRotLn[this.id]);
            line(-this.gridSize * 0.5, 0, this.gridSize * 0.5, 0);
        }
        pop();
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
