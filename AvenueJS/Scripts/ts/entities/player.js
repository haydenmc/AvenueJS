var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Player = (function (_super) {
    __extends(Player, _super);
    function Player(world) {
        _super.call(this, world);
        this.speed = 10;
        this.wKey = 87;
        this.aKey = 65;
        this.sKey = 83;
        this.dKey = 68;
        this.wKeyDown = false;
        this.aKeyDown = false;
        this.sKeyDown = false;
        this.dKeyDown = false;
        this.graphics.f("#f00").dc(0, 0, 20);
    }
    Player.prototype._tick = function (event) {
        //smooth movement
        //this.x += (this.dKeyDown) ?
    };

    Player.prototype.keydown = function (e) {
        switch (e.keyCode) {
            case this.wKey:
                this.wKeyDown = true;
                break;
            case this.aKey:
                this.aKeyDown = true;
                break;
            case this.sKey:
                this.sKeyDown = true;
                break;
            case this.dKey:
                this.dKeyDown = true;
                break;
        }
    };

    Player.prototype.keyup = function (e) {
        switch (e.keyCode) {
            case this.wKey:
                this.wKeyDown = false;
                break;
            case this.aKey:
                this.aKeyDown = false;
                break;
            case this.sKey:
                this.sKeyDown = false;
                break;
            case this.dKey:
                this.dKeyDown = false;
                break;
        }
    };
    return Player;
})(Character);
//# sourceMappingURL=player.js.map
