import { System, Component } from 'ecs-ts'
import RenderSystem from './render/render-system'
import RenderComponent from './render/render-component'
import TimerEntity from './entityes/timer-entity'

export default class Game {

  ctx: any
  systems: System<Component>[] = []

  constructor(context) {
    this.ctx = context
    this.init()
  }

  init() {
    let c1 = new RenderComponent(100, 200, this.ctx);
    let s1 = new RenderSystem();

    let c2 = new RenderComponent(200, 200, this.ctx);


    let e1 = new TimerEntity(c1);
    let e2 = new TimerEntity(c2);
    s1.register(c1);
    s1.register(c2);
    this.systems.push(s1);

  }

  private loop = (timestamp: number): void => {
    // this.loopStartCallback();

    for (const system of this.systems) {
      system.update(timestamp);
    }

    // this.loopEndCallback();

    // requestAnimationFrame(this.loop);
    // this.ctx.fillStyle = "#FF0000";
    // this.ctx.fillRect(0, 0, 100, 100);


    //console.log("timestamp=>", timestamp);
    //requestAnimationFrame(this.loop);
  }

  public run() {
    this.loop(null)
  }

}