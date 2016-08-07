export default class Birds extends Phaser.Sprite {

    constructor(game, x, y, frame, parent, pos) {
        super(game, x, 150, frame);
        this._game = game;
        this._parent = parent;
        this._position = pos;
        this.initSetup(y);
    }

    initSetup(y) {
        this.anchor.setTo(0.5);
        this.scale.setTo(0.5);
        this._position.sprite = this;
        this.game.add.tween(this).to({
            y: y
        }, 500, Phaser.Easing.Bounce.Out, true);
    }

    
}