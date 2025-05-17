class arcShape extends Shapes {
    constructor(...args) {
        super(...args);
        this.id = floor(random(0, 4));
    }

    render(p = window) {
        super.render(p);
        p.push();
        p.stroke(this.strokeColor);
        p.strokeWeight(this.strokeW);
        p.arc(this.posX, this.posY, this.gridSize, this.gridSize, this.randRot[this.id], this.randRot[this.id] + 180);
        p.pop();
    }
}

class semiArcShape extends Shapes {
    constructor(...args) {
        super(...args);
        this.id = floor(random(0, 4));
    }

    render(p = window) {
        super.render(p);
        p.push();
        p.stroke(this.strokeColor);
        p.strokeWeight(this.strokeW);
        p.translate(this.posX, this.posY);

        const firstPx = 0;
        const firstPy = -this.gridSize * 0.5;
        const lastPx = firstPx;
        const lastPy = -firstPy;
        const firstCPx = -this.gridSize * 1.5 - 6;
        const firstCPy = firstPy;
        const lastCPx = firstCPx;
        const lastCPy = -firstCPy;

        p.rotate(this.randRot[this.id]);
        p.curve(firstCPx, firstCPy, firstPx, firstPy, lastPx, lastPy, lastCPx, lastCPy);
        p.pop();
    }
}

class lineShape extends Shapes {
    constructor(...args) {
        super(...args);
        this.id = floor(random(0, 4));
    }

    render(p = window) {
        super.render(p);
        p.push();
        p.translate(this.posX, this.posY);
        p.stroke(this.strokeColor);
        p.strokeWeight(this.strokeW);

        if (this.randRotLn[this.id] === 45 || this.randRotLn[this.id] === -45) {
            p.rotate(this.randRotLn[this.id] - 45);
            p.line(-this.gridSize * 0.5, -this.gridSize * 0.5, this.gridSize * 0.5, this.gridSize * 0.5);
        } else {
            p.rotate(this.randRotLn[this.id]);
            p.line(-this.gridSize * 0.5, 0, this.gridSize * 0.5, 0);
        }
        p.pop();
    }
}

class noisyLineShape extends Shapes {
    constructor(...args) {
        super(...args);
        noiseSeed(random(this.gridSize));
        this.id = floor(random(0, 4));
        this.rand = random(0.005, 0.03);
        this.yThres = floor(random(7, 16));
    }

    render(p = window) {
        super.render(p);
        p.push();
        p.translate(this.posX, this.posY);
        p.stroke(this.strokeColor);
        p.strokeWeight(this.strokeW);

        const noiseScale = 0.08;
        const xRes = 5;
        let px = -this.gridSize * 0.5;
        let py = -this.gridSize * 0.5;
        let xp = 0;
        let yp = 0;
        let diagonalFac = 0;
        let diagonalLen;

        if (this.randRotLn[this.id] === 45 || this.randRotLn[this.id] === -45) {
            diagonalLen = floor(p.dist(-this.gridSize * 0.5, -this.gridSize * 0.5, this.gridSize * 0.5, this.gridSize * 0.5));
            diagonalFac = 20;
        } else {
            diagonalLen = CRYSTAL_SIZE + 1;
        }

        p.rotate(this.randRotLn[this.id]);

        for (let x = 0; x < diagonalLen; x += xRes) {
            const noiseVal = p.noise(x * noiseScale, this.rand * noiseScale);
            xp = x - this.gridSize * 0.5 - diagonalFac;
            yp = noiseVal * this.yThres;

            if (x === xRes)
                p.line(-this.gridSize * 0.5 - diagonalFac, 0, xp, yp);
            else if (x > diagonalLen - xRes)
                p.line(px, py, diagonalLen * 0.5, 0);
            else
                p.line(px, py, xp, yp);

            px = xp;
            py = yp;
        }

        p.pop();
    }
}

class dashedLineShape extends Shapes {
    constructor(...args) {
        super(...args);
        this.id = floor(random(0, 4));
    }

    render(p = window) {
        super.render(p);
        p.push();
        p.translate(this.posX, this.posY);
        p.stroke(this.strokeColor);
        p.strokeWeight(this.strokeW);

        const g = 3;
        const l = 4;

        if (this.randRotLn[this.id] === 45 || this.randRotLn[this.id] === -45) {
            p.rotate(this.randRotLn[this.id] - 45);
            this.dashedLine(p, -this.gridSize * 0.5, -this.gridSize * 0.5, this.gridSize * 0.5, this.gridSize * 0.5, l, g);
        } else {
            p.rotate(this.randRotLn[this.id]);
            this.dashedLine(p, -this.gridSize * 0.5, 0, this.gridSize * 0.5, 0, l, g);
        }

        p.pop();
    }

    dashedLine(p, x1, y1, x2, y2, l, g) {
        const totalDist = p.dist(x1, y1, x2, y2);
        const dashCount = Math.floor(totalDist / (l + g));
        for (let i = 0; i < dashCount; i++) {
            const start = i * (l + g);
            const end = start + l;
            const t1 = start / totalDist;
            const t2 = Math.min(end / totalDist, 1);
            const xx1 = p.lerp(x1, x2, t1);
            const yy1 = p.lerp(y1, y2, t1);
            const xx2 = p.lerp(x1, x2, t2);
            const yy2 = p.lerp(y1, y2, t2);
            p.line(xx1, yy1, xx2, yy2);
        }
    }
}
