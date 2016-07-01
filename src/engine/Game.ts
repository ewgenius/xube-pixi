import * as PIXI from 'pixi.js'
import {
  autoDetectRenderer,
  Container,
  Texture,
  Sprite
} from 'pixi.js'

const texture1: string = require<string>('../../assets/texture1.jpg')


export class Game {
  private renderer = autoDetectRenderer(800, 600, { backgroundColor: 0x000000 })
  private stage = new Container()

  run() {
    document.body.appendChild(this.renderer.view)

    const texture = Texture.fromImage(texture1)
    const sprite = new Sprite(texture)
    sprite.anchor.set(texture.width, texture.height)
    sprite.position.set(20, 40)

    this.stage.addChild(sprite)

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
