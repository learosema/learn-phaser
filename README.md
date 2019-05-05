
# Learning phaser using Phaser 3

I'm just working through tutorials and making some notes.

USAGE: just `npm start` to start a [local webserver](http://localhost:8000/) using the built-in PHP server.  
Alternatively, this repo is also pushed as a [github page](https://terabaud.github.io/learn-phaser/).

For simplicity, this repo uses no bundling nor transpilers while using modern JavaScript ES6+.
Ancient browsers like Internet Explorer are not supported.

## Tutorials

 * [hello-phaser](hello-phaser/) by [Phaser official documentation](https://phaser.io/tutorials/getting-started-phaser3/part5)
 * [first-game](first-game/) by [Phaser first game tutorial](http://phaser.io/tutorials/making-your-first-phaser-3-game/part1)
 * [infinite map](infinite-map/) by Jared York ([article](https://yorkcs.com/2019/02/25/top-down-infinite-terrain-generation-with-phaser-3/))

## Lea's own projects

* [PONG](pong/) (WIP)

## Hints

### Better Autocomplete

For a better AutoComplete experience, you can use the type definitions
from the [phaser3-docs](https://github.com/photonstorm/phaser3-docs/tree/master/typescript) repository. 
If your project uses plain JavaScript (like here), you can still use type definitions by referencing them in your JavaScript file like this:

`/// <reference path="lib/phaser.d.ts" />`

This is a feature of [TypeScript](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html).
Visual Studio Code (and Visual Studio) support triple-slash reference directives out-of-the box.
