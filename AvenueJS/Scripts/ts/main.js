var Main = (function () {
    function Main() {
        Main.instance = this;
        this.canvas = document.getElementsByTagName("canvas")[0];
    }
    Main.prototype.init = function () {
        // Initialize the canvas size.
        this.resizeCanvas();

        // Create and initialize the stage.
        this.stage = new createjs.Stage(this.canvas); // Create a 'stage' on this canvas.
        this.stage.autoClear = true; // Automatically clear redraws.
        this.stage.enableMouseOver(20); // Enable mouseover events
        this.container = new createjs.Container(); // Create a global container
        this.stage.addChild(this.container); // Add global container to stage.

        // Set up the ticker
        createjs.Ticker.setFPS(60);
        createjs.Ticker.addEventListener("tick", this.tick);

        // Bind window key events
        window.onkeydown = this.keydown;
        window.onkeyup = this.keyup;
    };

    Main.prototype.resizeCanvas = function () {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    };

    Main.prototype.tick = function (event) {
    };

    Main.prototype.keydown = function (e) {
        console.log("Key Down: " + e.keyCode);
    };

    Main.prototype.keyup = function (e) {
        console.log("Key Up: " + e.keyCode);
    };
    return Main;
})();

window.onload = function () {
    (new Main()).init();
};

window.onresize = function () {
    Main.instance.resizeCanvas();
};
//# sourceMappingURL=main.js.map
