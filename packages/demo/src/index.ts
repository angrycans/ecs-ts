import Game from './game'

const canvas = document.body.querySelector('#ctx') as HTMLCanvasElement;
const context = canvas.getContext('2d');
console.log("game start");
(new Game(context)).run();