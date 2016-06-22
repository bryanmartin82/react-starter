import getRandomColor from 'utils/getRandomColor';
export const HELLO_WORLD_CHANGE_COLOR = 'HELLO_WORLD/CHANGE_COLOR';

export function changeColor() {
  return {
    type: HELLO_WORLD_CHANGE_COLOR,
    color: getRandomColor()
  }
}
