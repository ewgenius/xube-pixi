import * as PIXI from 'pixi.js'
import {
  Container,
  autoDetectRenderer
} from 'pixi.js'

class Game {
  private renderer = autoDetectRenderer(800, 600, { backgroundColor: 0x000000 })
  private stage = new Container()

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

Game.main()
