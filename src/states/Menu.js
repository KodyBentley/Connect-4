import MenuButton from 'objects/MenuButton';

export default class Menu extends Phaser.State {

	create() {
		//Create background
		let background = this.game.add.image(0, 0, 'menuBackground');


		//Create menu button
		let buttonPlay = new MenuButton(this.game, this.game.width * 0.5, 800, 'playButton', 'Game');

		//Create sound button and set the tint
		let soundToggle = this.game.add.button(1450, 10, 'soundButton');
		soundToggle.tint = null;



		//Create player images on menu screen
		let penguin = this.game.add.sprite(100, -200, 'penguin');
		let parrot = this.game.add.sprite(1205, -200, 'parrot');


		//Create title sprite and set anchor and alpha
		let title = this.game.add.sprite(800, 250, 'menuText');
		title.alpha = 0;
		title.anchor.set(0.5);



		//Add tweens for title fade and player images
		this.game.add.tween(title).to({
			alpha: 1
		}, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);

		this.game.add.tween(parrot).to({
			y: 300
		}, 1000, Phaser.Easing.Bounce.Out).to({
			x: 815
		}, 500, Phaser.Easing.Linear.In).to({
			x: 1205
		}, 500, Phaser.Easing.Linear.In, true);

		this.game.add.tween(penguin).to({
			y: 300
		}, 1000, Phaser.Easing.Bounce.Out).to({
			x: 585
		}, 500, Phaser.Easing.Linear.In).to({
			x: 100
		}, 500, Phaser.Easing.Linear.In, true);;


		//Added onOver and onOut tweens for play button
		buttonPlay.events.onInputOver.add(this.onOver, this);
		buttonPlay.events.onInputOut.add(this.onOut, this);

		//Event for sound button click to mute game sound
		soundToggle.onInputDown.add(this.muteSound, this);
		

		//Add background music for menu screen
		this.menuFx = this.game.add.audio('menuFx');
		this.menuFx.loopFull();


	}

	//Tween play button when the mouse is over
	onOver(buttonPlay) {
		this.game.add.tween(buttonPlay.scale).to({
			x: 2.5,
			y: 2.5
		}, 350, Phaser.Easing.Linear.In).start();

	}

	//Tween play button when mouse is no longer over
	onOut(buttonPlay) {
		this.game.add.tween(buttonPlay.scale).to({
			x: 2,
			y: 2
		}, 350, Phaser.Easing.Linear.In).start();

	}

	//Function to mute sound when sound button is clicked
	muteSound(soundToggle) {
			if (this.game.sound.mute === false) {
			this.game.sound.mute = true;
			soundToggle.tint = 16711680;
		} else {
			this.game.sound.mute = false;
			soundToggle.tint = null;
		} 

	}

}