export default function getRandomColor() {
  const random = () => Math.floor(Math.random() * 150);
  return `rgba(${random()}, ${random()}, ${random()}, .5)`;
}