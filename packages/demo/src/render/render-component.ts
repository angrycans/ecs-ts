
import { Component } from 'ecs-ts';
import { System } from 'ecs-ts'

class RenderComponent extends Component {

  public _ctx: CanvasRenderingContext2D
  public _position: { x: number, y: number };

  constructor(x: number, y: number, ctx: CanvasRenderingContext2D) {
    super();
    this._position = { x, y }
    this._ctx = ctx

  }

  setPostion(x: number, y: number) {
    this._position.x = x;
    this._position.y = y;

  }

}

export default RenderComponent;
