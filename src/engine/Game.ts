import * as PIXI from 'pixi.js'
import {
  autoDetectRenderer,
  Container,
  Texture,
  Sprite
} from 'pixi.js'

const a:string = require<string>('../../assets/texture1.jpg')

export class Game {
  private renderer = autoDetectRenderer(800, 600, { backgroundColor: 0x000000 })
  private stage = new Container()

  private texture = Texture.fromImage(a)
  private sprite = new Sprite(this.texture)

  run() {
    document.body.appendChild(this.renderer.view)

    this.stage.addChild(this.sprite)

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
