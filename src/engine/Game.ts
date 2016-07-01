import * as PIXI from 'pixi.js'
import {
  autoDetectRenderer,
  Container,
  Texture,
  Sprite
} from 'pixi.js'

const image: string = require<string>('../../assets/texture1.jpg')
console.log(image)

function createSprite(path): Sprite {
  const image: string = require<string>(path)
  const texture = Texture.fromImage(image)
  const sprite = new Sprite(texture)
  return sprite
}

export class Game {
  private renderer = autoDetectRenderer(800, 600, { backgroundColor: 0x000000 })
  private stage = new Container()

  run() {
    document.body.appendChild(this.renderer.view)

    //const sprite = createSprite('../../assets/texture1.jpg')

    //this.stage.addChild(sprite)

    this.loop()
  }

  private loop() {
    requestAnimationFrame(() => this.loop())

    this.renderer.render(this.stage)
  }

  static main() {
    const game = new Game()
    game.run()
  }
}
