import * as PIXI from 'pixi.js'
import {
  autoDetectRenderer,
  Container,
  Texture
} from 'pixi.js'

const a:string = require<string>('../../assets/texture1.jpg')

export class Game {
  private renderer = autoDetectRenderer(800, 600, { backgroundColor: 0x000000 })
  private stage = new Container()

  private texture = Texture.fromImage(a)

  run() {
    document.body.appendChild(this.renderer.view)



    this.loop()
  }

  private loop() {
    requestAnimationFrame(() => this.loop())
  }

  static main() {
    const game = new Game()
    game.run()
  }
}
