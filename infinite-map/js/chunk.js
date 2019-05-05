/// <reference path="../../lib/phaser.d.ts" />

class Chunk {
  constructor(scene, x, y) {
    this.scene = scene;
    this.x = x;
    this.y = y;
    // Each chunk will contain a Phaser group, which will store all of the tiles for that specific chunk.  We will also want to add a boolean property which will
    // determine whether the chunk is loaded or not.
    this.tiles = this.scene.add.group();
    this.isLoaded = false;
  }

  unload() {
    if (this.isLoaded) {
      // this is slow: > 500ms per chunk :/
      // this.tiles.clear(true, true);
      this.tiles.destroy();
      this.tiles = this.scene.add.group();
      this.isLoaded = false;
    }
  }

  load() {
    if (!this.isLoaded) {
      let key = '';
      for (let x = 0; x < this.scene.chunkSize; x++) {
        for (let y = 0; y < this.scene.chunkSize; y++) {
          const tileX =
            this.x * (this.scene.chunkSize * this.scene.tileSize) +
            x * this.scene.tileSize;
          const tileY =
            this.y * (this.scene.chunkSize * this.scene.tileSize) +
            y * this.scene.tileSize;
          const perlinValue = noise.perlin2(tileX / 100, tileY / 100);
          if (perlinValue < 0.2) {
            key = 'water';
          } else if (perlinValue >= 0.2 && perlinValue < 0.3) {
            key = 'sand';
          } else if (perlinValue >= 0.3) {
            key = 'grass';
          }
          this.tiles.add(new Tile(this.scene, tileX, tileY, key));
        }
      }
      this.isLoaded = true;
    }
  }
}
