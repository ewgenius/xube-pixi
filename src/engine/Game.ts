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
import {
  System,
  Component,
  Entity,
  World
} from './ecs'

const texture1: string = require<string>('../../assets/texture1.jpg')


export class Game {
  private renderer = autoDetectRenderer(800, 600, { backgroundColor: 0x000000 })
  private stage = new Container()
  private world = new World()

  run() {
    document.body.appendChild(this.renderer.view)

    const texture = Texture.fromImage(texture1)
    const sprite = new Sprite(texture)
    sprite.anchor.set(texture.width, texture.height)
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
