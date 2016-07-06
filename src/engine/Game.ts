import * as PIXI from 'pixi.js'
import {
  autoDetectRenderer,
  Container,
  Texture,
  DisplayObject,
  Sprite,
  EventEmitter,
  Point
} from 'pixi.js'

const texture1: string = require<string>('../../assets/texture1.jpg')

export class Game {
  private renderer = autoDetectRenderer(800, 600, { backgroundColor: 0x000000 })
  private stage = new Container()

  run() {
    document.body.appendChild(this.renderer.view)

    document.addEventListener('keydown', e => this.onKeyDown(e))
    document.addEventListener('keypress', e => this.onKeyPress(e))
    document.addEventListener('keyup', e => this.onKeyUp(e))

    const texture = Texture.fromImage(texture1)
    const sprite = new Sprite(texture)
    sprite.anchor.set(texture.width, texture.height)
    this.stage.addChild(sprite)

    this.loop()
  }

  onKeyDown(key) {
    console.log(key)
  }

  onKeyUp(key) {
    console.log(key)
  }

  onKeyPress(key) {
    console.log(key)
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
