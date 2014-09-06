var World = (function () {
    function World(canvas) {
        var _this = this;
        this.worldObjects = new Array();

        this.stage = new createjs.Stage(canvas); // Create a 'stage' on this canvas.
        this.stage.autoClear = true; // Automatically clear redraws.
        this.stage.enableMouseOver(20); // Enable mouseover events
        this.container = new createjs.Container(); // Create a global container
        this.stage.addChild(this.container); // Add global container to stage.

        this.initWorld();

        createjs.Ticker.setFPS(60);
        var tick_bind = this.tick.bind(this);
        createjs.Ticker.addEventListener("tick", tick_bind);

        window.onkeydown = function (e) {
            _this.keydown(e);
        };
        window.onkeyup = function (e) {
            _this.keyup(e);
        };

        console.log("WORLD");
    }
    World.prototype.initWorld = function () {
        this.initPlayer();
        this.initTerrain();
    };

    World.prototype.initPlayer = function () {
        this.playerCharacter = new Player(this);
        this.controllerEntity = this.playerCharacter;
        this.addChild(this.playerCharacter);
    };

    World.prototype.initTerrain = function () {
        this.addChild(new Rock(500, 500, this));
        this.addChild(new Rock(500, -500, this));
        this.addChild(new Rock(-500, 500, this));
        this.addChild(new Rock(-500, -500, this));
    };

    World.prototype.addChild = function (child) {
        this.container.addChild(child);
        this.worldObjects.push(child);
    };

    World.prototype.tick = function (event) {
        this.container.x = -this.controllerEntity.x + this.stage.canvas.width / 2;
        this.container.y = -this.controllerEntity.y + this.stage.canvas.height / 2;
        this.stage.update();
    };

    World.prototype.keydown = function (e) {
        this.controllerEntity.keydown(e);
        console.log("Key Down: " + e.keyCode);
    };

    World.prototype.keyup = function (e) {
        this.controllerEntity.keyup(e);
        console.log("Key Up: " + e.keyCode);
    };
    return World;
})();
//# sourceMappingURL=world.js.map
