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

class TransformComponent extends Component {
  position: Point = new Point(0, 0)
}

class SpriteComponent extends Component {
  sprite: Sprite

  constructor(sprite: Sprite) {
    super()
    this.sprite = sprite
  }
}

class RenderingSystem extends System {
  private renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer
  private root: Container

  constructor(root: Container, renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer) {
    super()
    this.renderer = renderer
    this.root = root
  }

  update() {
    this.renderer.render(this.root)
  }
}

export class Game {
  private renderer = autoDetectRenderer(800, 600, { backgroundColor: 0x000000 })
  private stage = new Container()
  private world = new World()

  run() {
    document.body.appendChild(this.renderer.view)

    // testing components

    const texture = Texture.fromImage(texture1)
    const sprite = new Sprite(texture)
    sprite.anchor.set(texture.width, texture.height)

    const world = new World()
      .addSystem(new RenderingSystem(this.stage, this.renderer), [
        SpriteComponent.name,
        TransformComponent.name
      ])

    const player = world.createEntity()
    player
      .add(new SpriteComponent(sprite))
      .add(new TransformComponent())
      .register()

    // test
    //this.stage.addChild(sprite)

    this.loop()
  }

  private loop() {
    requestAnimationFrame(() => this.loop())
    this.world.update()
  }

  static main() {
    const game = new Game()
    game.run()
  }
}
