// import { Game } from './phaser.min.js';
import Intro from './scenes/Intro.js';
import Level1 from './scenes/Level1.js';

var config = {
	type: Phaser.AUTO,
	//screen size of the game.
	width: 640,
	height: 360,
	scale: {
		scale: 'SHOW_ALL',
		orientation: 'LANDSCAPE'
	},
	resolution: window.devicePixelRatio,
	pixelArt: true,
	// ALL games need a physics engine in order to work. Phaser 3 comes with a prebuild physics engine. This makes our lives easier.
	physics: {
		default: 'arcade',
		arcade: {
			debug: true,
			gravity: {
				y: 500
			}
		}
	},
	// The scenes  are our other js files that have game functions.
	scene: [Level1]
};

var game = new Phaser.Game(config);

