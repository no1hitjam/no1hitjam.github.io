const refreshRate = 1000 / 60;
const height = 0.7;
let time = 0;
let containers = document.getElementsByClassName('WavyContainer');
function step() {
  time += 1;
  for (let h = 0; h < containers.length; h++) {
    let container = containers[h];
    for (let i = 0; i < container.children.length; i++) {
      pos = (Math.sin((time + i * 10) * 0.1) + 1.0) * height / 2.0;
      container.children[i].style.lineHeight = pos + 'em';
    }
  }
  window.requestAnimationFrame(step);
}
window.requestAnimationFrame(step);