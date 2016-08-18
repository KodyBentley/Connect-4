import gridOverlay from 'objects/gridOverlay';
import Birds from 'objects/Birds';
import Grid from 'objects/Grid';



export default class Game extends Phaser.State {

	init() {}



	create() {
		//Create background image
		let background = this.add.image(0, 0, 'gameBackground');


		//Create object to hold birds
		this.birds = {
			0: {
				type: 'penguin',
				value: 0,
				frame: 'penguin'
			},
			1: {
				type: 'parrot',
				value: 0,
				frame: 'parrot'
			}
		}


		//Create variable to hold player counter
		this.playerCurrent = 0;


		//Create bird group
		this.birdsGroup = this.game.add.group();


		//Adding input of cursor on x, y
		this.game.input.onDown.add(() => {
			let x = this.game.input.x;
			let y = this.game.input.y;
			this.addBird(x);
		});


		//Create grid from Grid.js
		this.grid = new Grid(this.game, this);


		//Create grid overlay from gridoverlay.js
		this.gridOverlay = new gridOverlay(this, 'gridOverlay12');


		//Create penguin drop sound and set volume 
		this.penguinFx = this.game.add.audio('penguinFx');
		this.penguinFx.volume = 5;


		//Create parrot drop sound, and set volume
		this.parrotFx = this.game.add.audio('parrotFx');
		this.parrotFx.volume = 2;

		


	}



	//Function to add bird to particular column that has been clicked
	addBird(x) {
		//Checking to see if any one column is full and if not add a bird to that column
		let data = this.grid.getColumn(x);

		//Switching bird by adding 1 to counter when 'penguin' is dropped and subtracting 1 from counter when 'parrot' is dropped
		if (this.playerCurrent === 0) {
			let bird = this.birdsGroup.add(new Birds(this.game, data.x, data.y, this.birds[0].frame, this, data.pos));
			this.grid.gridArr[data.pos.gX][data.pos.gY] = bird;

			this.penguinFx.play();
			this.playerCurrent += 1;

		} else {
			let bird = this.birdsGroup.add(new Birds(this.game, data.x, data.y, this.birds[1].frame, this, data.pos));
			this.grid.gridArr[data.pos.gX][data.pos.gY] = bird;


			this.parrotFx.play();
			this.playerCurrent -= 1;

		}

		//Call checMatch function from Grid.js
		this.grid.checkMatch();


	}



}