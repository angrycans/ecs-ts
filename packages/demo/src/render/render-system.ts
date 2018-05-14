import { System } from 'ecs-ts'
import RenderComponent from "./render-component"

export default class RenderSystem extends System<RenderComponent> {

  protected next(component: RenderComponent, deltaTime: number): void {

    console.log("component", component);
    component._ctx.fillStyle = "#FF0000";
    component._ctx.fillRect(component._position.x, component._position.y, 25, 25);
    // console.log("rendersystem");

  };
}