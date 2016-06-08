export const HELLO_WORLD_CHANGE_COLOR = 'HELLO_WORLD/CHANGE_COLOR';
const colors = ['red', 'blue', 'green', 'orange', 'purple', 'turquoise', 'black'];

export function changeColor() {
  return {
    type: HELLO_WORLD_CHANGE_COLOR,
    color: pickRandomArrayElement(colors)
  }
}

export function pickRandomArrayElement(elements) {
  return elements[Math.floor(Math.random() * elements.length)];
}