var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var GameEntity = (function (_super) {
    __extends(GameEntity, _super);
    function GameEntity(world) {
        _super.call(this);
        this.speed = 0;
        this.controllerXOffset = 0;
        this.controllerYOffest = 0;
        this.world = world;
        this.graphics = new createjs.Graphics();

        console.log("ENTITY");
    }
    GameEntity.prototype.keydown = function (e) {
    };

    GameEntity.prototype.keyup = function (e) {
    };

    GameEntity.prototype.centerOnEntity = function () {
        this.parent.x = -this.x + this.getStage().canvas.width / 2;
        this.parent.y = -this.y + this.getStage().canvas.height / 2;

        console.log("X GameEntity offset: " + this.controllerXOffset);
    };
    return GameEntity;
})(createjs.Shape);
//# sourceMappingURL=gameentity.js.map
