import {
  EventEmitter
} from 'pixi.js'


export class System {
  public update() {

  }

  public onEntityAdded(entity) {

  }
}

export class Entity {
  private components: Array<Component> = []
  private onRegister: Function

  constructor(onRegister: Function) {
    this.onRegister = onRegister
  }

  public add(component: Component): Entity {
    this.components.push(component)
    return this
  }

  public register() {
    this.onRegister(this)
    return this
  }
}

export class Component {

}

export class World {
  private systems: Array<System> = []
  private tags: Map<string, Array<System>> = new Map()

  private onComponentAdded(entity, component, type) {
    //console.log(component, type)
    if(this.tags[type]) {
      this.tags[type].forEach(system => {

      })
    }
  }

  private onEntityRegistered(entity) {
    entity.components.forEach(component => {
      console.log(component.constructor.name)
    })
  }

  public createEntity() {
    const entity = new Entity(
      (entity) => this.onEntityRegistered(entity)
    )
    return entity
  }

  public addSystem(system: System, tags?: Array<string>) {
    this.systems.push(system)
    if (tags)
      tags.forEach(tag => {
        if (!this.tags[tag])
          this.tags[tag] = []
        if (this.tags[tag].indexOf(system) === -1)
          this.tags[tag].push(system)
      })
    return this
  }

  public removeSystem(system: System) {
    const index = this.systems.indexOf(system)
    if (index !== -1)
      this.systems.splice(index, 1)
    return this
  }

  public update() {
    this.systems.forEach(system => system.update())
  }
}
