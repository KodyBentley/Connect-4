export default class Preload extends Phaser.State {

    create() {
        this.game.load.onLoadStart.add(this.loadStart, this);
        this.game.load.onFileComplete.add(this.fileComplete, this);
        this.game.load.onLoadComplete.add(this.loadComplete, this);
        this.start();
    }

    start() {
        //load game buttons
        this.game.load.spritesheet('playButton', 'assets/main/playButton2.png', 300, 102, 2);
        

        //Load background images
        this.game.load.image('menuBackground', 'assets/main/bg.png');
        this.game.load.image('gameBackground', 'assets/main/gameBackground2.png');

        //Load grid overlay
        this.game.load.image('gridOverlay12', 'assets/main/gridOverlay12.png');


        //Load Birds
        this.game.load.image('penguin', 'assets/main/penguin.png');
        this.game.load.image('parrot', 'assets/main/parrot.png');


        //load audio
        this.load.audio('penguinFx', 'assets/main/penguin.wav');
        this.load.audio('parrotFx', 'assets/main/parrot.wav');
        this.load.audio('menuFx', 'assets/main/menuFx.mp3');

        //Load menu title image
        this.game.load.image('menuText', 'assets/main/menuText.png');



        this.loadStart();
    }

    loadStart() {
        this.game.load.start();

    }

    fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {
        console.log("File Complete: " + progress + "% - " + totalLoaded + " out of " + totalFiles)
    }

    loadComplete() {
        console.log('preload complete')
           
        this.game.stateChange.fadeOut(null, 'Menu');
    }
}