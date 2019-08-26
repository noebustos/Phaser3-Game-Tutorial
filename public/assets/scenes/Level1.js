// After the "class" keyword, you write the name you choose for the file. 
export default class Level1 extends Phaser.Scene {
	constructor() {
		super({
			//the key is basically the name you choose for the export file. it has to be the same name you give on the export. 
			key: 'Level1'
		});
	}


	// All the Phaser files will have theese 3 functions, that are needed to run the game.
	// The "preload" function is ran before the game loads up on the screen. is loads and gets all files, imgs, text, sounds, media etc.
	preload() {
		//"this.load" loads  an asset.
		//The first parameter on the methods are the "keys" or the names you want to give to you files.
		// 2nd parameter is the file location.
		this.load.image('star', '/assets/img/star.png');
		this.load.spritesheet('dude','assets/img/dude.png', {
			//Each one of the sprite imgs is a certain size and each one of the characters or sequence is considered a frame.
			//This key value pairs tells Phaser how to break down a sprite img to use on our game
			frameWidth: 32,
			frameHeight: 48
		})
	}


	//The "create" function's job is to create and display things on the window screens. you preload a sprite and then the create function displays it on the window screen.
	create() {
		//First parameter on the methods is the x-axis(horizontal)
		//2nd param is the y-axis(vertical)
		//3rd param is the "key"
		//IMAGE STAR SECTION
		this.star = this.add.image(100, 250, 'star');

		this.star.setScale(1.5, 1.5);

		//setAlpha( [topLeft] [, topRight] [, bottomLeft] [, bottomRight])
		this.star.setAlpha(1, 0.5, 0.5, 0.2);

		//The 4th param in the sprite method is the frame that we want.
		//Sprites can be played as animations
		//SPRITE SECTION
		this.dude = this.add.sprite(200, 150, 'dude', 4).setScale(2, 2);
		
		this.anims.create({
			key: 'left',
			frames: this.anims.generateFrameNumbers('dude', {
				start: 0,
				end: 3
			})
		})
		
		//left of at 6.39
		// console.log(this.star.originY);
		// console.log(this.star.originX);
		// console.log('this is the height: ' + this.star.height);
		// console.log(this.star.height);
		// console.log(this.star.setScale);
		console.log(this.star.width);
		console.log(this.star.height);
	}
	

	// The "update" function is needed for... This function is constantly running in the background all the time. sec by sec. "constanly updating"
	update(time, delta) {}
}