
export default class gridOverlay extends Phaser.Sprite {
	constructor(parent) {
		super(parent, 800, 500, 'gridOverlay12');
		this._parent = parent;
		this._parent.add.existing(this);
		this.setup();

	}

	setup() {
		this._parent.physics.arcade.enable(this);
		this.inputEnabled = true;
		this.anchor.setTo(0.5);

	}



}