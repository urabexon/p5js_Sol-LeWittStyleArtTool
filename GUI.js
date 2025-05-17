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
                saveSVG();
            }

            this.thickness = 1;
        }

        // GUI
        var gui = new dat.GUI({ name: 'Sol Lewitt Wall Drawings Generator', width: '27' });
        this.p = new this.parameters();
        displayGridOnChange = gui.add(this.p, "displayGrid").name("Display Bg Grid");
        displayGridOnChange.onChange(function (value) {
            draw();
        });

        thicknessOnchange = gui.add(this.p, "thickness").name("Stroke Thickness").min(1).max(8).step(1);
        thicknessOnchange.onFinishChange(function (value) {
            clear();
            for (let i = 0; i < SHAPES.length; i++)
                SHAPES[i].setStrokeW(value);
            draw();
        });

        // Half circle chance
        chanceHalfCircleOnChange = gui.add(this.p, "percentHalfCircle").min(0).max(100);
        chanceHalfCircleOnChange.onChange(function (value) {
            generateArcs();
            clear();
        });

        // Straight Line Shape
        chanceLineOnChange = gui.add(this.p, "percentStraightLine").min(0).max(100);
        chanceLineOnChange.onChange(function (value) {
            generateArcs();
            clear();
        });

        // Dashed Line Shape
        chanceDashedLineOnChange = gui.add(this.p, "percentDashedLine").min(0).max(100);
        chanceDashedLineOnChange.onChange(function (value) {
            generateArcs();
            clear();
        });

        // chanceNoisyLineChange Line Shape
        chanceNoisyLineChange = gui.add(this.p, "percentNoisyLine").min(0).max(100);
        chanceNoisyLineChange.onChange(function (value) {
            generateArcs();
            clear();
        });

        // chanceMidHalfCircleChange Line Shape

    }
}
