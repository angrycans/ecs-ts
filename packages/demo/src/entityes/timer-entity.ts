
import { Entity } from 'ecs-ts'
import RenderComponent from '../render/render-component'

export default class TimerEnity extends Entity {
  renderComponent: RenderComponent;

  constructor(_t: RenderComponent) {
    super();
    this.renderComponent = this.renderComponent;
  }
}