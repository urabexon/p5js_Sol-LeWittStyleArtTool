class GUI {
    constructor() {
        // GUI
        let displayGridOnChange;
        let thicknessOnchange;
        let chanceHalfCircleOnChange;
        let chanceLineOnChange;
        let chanceDashedLineOnChange;
        let chanceNoisyLineChange;
        let chanceMidHalfCircleChange;

        this.parameters = function () {
            this.displayGrid = true;
            this.percentHalfCircle = 75.0;
            this.percentStraightLine = 80.0;
            this.percentDashedLine = 85.0;
            this.percentNoisyLine = 95.0;
            this.percentMidHalfCircle = 100.0;

            this.generateArt = function () {
                generateArcs();
            }

            this.Save = function () {
                const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
                saveCanvas('artwork_' + timestamp, 'png');
            }

            this.thickness = 1;
        }

        // GUI
        var gui = new dat.GUI({ name: 'Sol Lewitt Wall Drawings Generator', width: '27' });
        this.p = new this.parameters();

        displayGridOnChange = gui.add(this.p, "displayGrid").name("Display Bg Grid");
        displayGridOnChange.onChange(() => draw());

        thicknessOnchange = gui.add(this.p, "thickness").name("Stroke Thickness").min(1).max(8).step(1);
        thicknessOnchange.onFinishChange((value) => {
            clear();
            for (let i = 0; i < SHAPES.length; i++)
                SHAPES[i].setStrokeW(value);
            draw();
        });

        chanceHalfCircleOnChange = gui.add(this.p, "percentHalfCircle").min(0).max(100);
        chanceHalfCircleOnChange.onChange(() => generateArcs());

        chanceLineOnChange = gui.add(this.p, "percentStraightLine").min(0).max(100);
        chanceLineOnChange.onChange(() => generateArcs());

        chanceDashedLineOnChange = gui.add(this.p, "percentDashedLine").min(0).max(100);
        chanceDashedLineOnChange.onChange(() => generateArcs());

        chanceNoisyLineChange = gui.add(this.p, "percentNoisyLine").min(0).max(100);
        chanceNoisyLineChange.onChange(() => generateArcs());

        chanceMidHalfCircleChange = gui.add(this.p, "percentMidHalfCircle").min(0).max(100);
        chanceMidHalfCircleChange.onChange(() => generateArcs());

        gui.add(this.p, "generateArt").name("Generate Artwork");
        gui.add(this.p, "Save").name("Save As PNG");
    }
}
