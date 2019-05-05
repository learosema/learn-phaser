/// <reference path="../../lib/phaser.d.ts" />

class PongScene extends Phaser.Scene {



  constructor() {
    super({key: 'PongScene'});

    this.width = 800; // this.game.width?
    this.height = 600; // this.game.height?

    this.y1 = this.height / 2;
    this.y2 = this.height / 2;
    this.panelHeight = 150;
    this.panelWidth = 30;
    this.ballRadius = 20;
  }

  create() {
    const { y1, y2, panelHeight, panelWidth, width, height, ballRadius } = this
    this.playerOne = this.add.rectangle(50, y1, panelWidth, panelHeight, 0xff00ff, 1.0);
    this.playerTwo = this.add.rectangle(width - 50, y2, panelWidth, panelHeight, 0x00ff00, 1.0);
    this.ball = this.add.ellipse((width - ballRadius) / 2, (height - ballRadius) / 2, ballRadius * 2, ballRadius * 2, 0xffffff, 1.0);
    // todo: how to add physics to game objects?
    this.ballPhysics = this.physics.add.existing(this.ball);
    // this.ballPhysics.setVelocity(10, 10);
    // this.ballPhysics.setBounce(1, 1);
  }
}


const game = new Phaser.Game({
  width: 800,
  height: 600, 
  type: Phaser.AUTO,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false
    }
  },
  scene: [PongScene]
});

