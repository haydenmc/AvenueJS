﻿var Main = (function () {
    function Main() {
        Main.instance = this;
        this.canvas = document.getElementsByTagName("canvas")[0];
    }
    Main.prototype.init = function () {
        this.resizeCanvas();
        this.stage = new createjs.Stage(this.canvas); // Create a 'stage' on this canvas.
        this.stage.autoClear = true; // Automatically clear redraws.
        this.stage.enableMouseOver(20); // Enable mouseover events
        this.container = new createjs.Container(); // Create a global container
        this.stage.addChild(this.container); // Add global container to stage.
        createjs.Ticker.setFPS(60);
        createjs.Ticker.addEventListener("tick", this.tick);
    };

    Main.prototype.resizeCanvas = function () {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    };

    Main.prototype.tick = function (event) {
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
