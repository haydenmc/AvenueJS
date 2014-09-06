var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Rock = (function (_super) {
    __extends(Rock, _super);
    function Rock(x, y, size, world) {
        _super.call(this, world);
        this.size = 200;
        this.graphics.f("#000").dc(x, y, size = (size <= 0) ? this.size : size);
    }
    return Rock;
})(Terrain);
//# sourceMappingURL=rock.js.map
