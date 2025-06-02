const towers = document.querySelectorAll('.tower');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const diskSelect = document.getElementById('diskCount');
const moveCounter = document.getElementById('moveCounter');

let totalDisks = 3;
let moves = 0;

function createDisks(n) {
  towers.forEach(t => t.innerHTML = '');
  for (let i = n; i >= 1; i--) {
    const disk = document.createElement('div');
    disk.classList.add('disk');
    disk.dataset.size = i;
    disk.draggable = true;
    disk.addEventListener('dragstart', onDragStart);
    towers[0].appendChild(disk);
  }
}

function onDragStart(e) {
  const disk = e.target;
  const parent = disk.parentElement;
  const topDisk = Array.from(parent.children).at(-1);
  if (disk !== topDisk) {
    e.preventDefault();
    return;
  }
  e.dataTransfer.setData('text/plain', disk.dataset.size);
}

function onDrop(e) {
  e.preventDefault();
  const tower = e.currentTarget;
  const size = e.dataTransfer.getData('text/plain');
  const disk = document.querySelector(`.disk[data-size="${size}"]`);
  const topDisk = Array.from(tower.children).at(-1);
  if (!topDisk || parseInt(size) < parseInt(topDisk.dataset.size)) {
    tower.appendChild(disk);
    moves++;
    updateMoveCounter();
    checkVictory();
  }
}

function updateMoveCounter() {
  moveCounter.textContent = `Movimientos: ${moves}`;
}

function checkVictory() {
  const lastTower = towers[2];
  if (lastTower.children.length === totalDisks) {
    const ordered = Array.from(lastTower.children).every((disk, i, arr) => {
      if (i === 0) return true;
      return parseInt(disk.dataset.size) < parseInt(arr[i - 1].dataset.size);
    });
    if (ordered) {
      setTimeout(() => {
        alert(`¡Ganaste en ${moves} movimientos!`);
      }, 100);
    }
  }
}

function startGame() {
  totalDisks = parseInt(diskSelect.value);
  moves = 0;
  updateMoveCounter();
  createDisks(totalDisks);
}

startBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click', startGame);

towers.forEach(t => {
  t.addEventListener('dragover', e => e.preventDefault());
  t.addEventListener('drop', onDrop);
});
