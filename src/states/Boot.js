import StateChange from 'objects/GUI/StateChange';

export default class Boot extends Phaser.State {

    init() {
        this.game.orientation = 'landscape';
        this.game.scale.trackParentInterval = 1;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;

        window.addEventListener('resize', () => this.customScale());

        this.game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
        this.game.stage.disableVisibilityChange = true;

        this.customScale();

        this.game.time.advancedTiming = true;
        this.game.time.desiredFps = 60;
    }

    customScale() {
        let w = window.innerWidth;
        let h = window.innerHeight;

        let widthScale = w / this.game.width;
        let heightScale = h / this.game.height;

        if (widthScale > heightScale) {
            this.game.scale.setUserScale(heightScale, heightScale, 0, 0);
        } else {
            this.game.scale.setUserScale(widthScale, widthScale, 0, 0);
        }
        //By default if the browser tab loses focus the game will pause. You can stop that behaviour by setting this property to true.
        this.game.scale.refresh();
    }

   

    create() {
        this.game.stateChange = new StateChange(this.game);
        this.game.state.start('Preload');
    }
}
