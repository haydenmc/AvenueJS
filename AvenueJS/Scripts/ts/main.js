var Main = (function () {
    function Main() {
        Main.instance = this;
        this.canvas = document.getElementsByTagName("canvas")[0];
        this.init();
    }
    Main.prototype.init = function () {
        this.resizeCanvas();
        this.world = new World(this.canvas);
    };

    Main.prototype.resizeCanvas = function () {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
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
