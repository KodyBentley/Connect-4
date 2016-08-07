import Boot from 'states/Boot';
import Preload from 'states/Preload';
import Menu from 'states/Menu';
import GameState from 'states/Game';



class Game extends Phaser.Game {

	constructor() {
		super(1600, 960, Phaser.Canvas, 'content', null, true);
		this.state.add('Boot', Boot, false);
		this.state.add('Preload', Preload, false);
		this.state.add('Menu', Menu, false);
		this.state.add('Game', GameState, false);
		this.state.start('Boot');
	}
}

new Game(); 