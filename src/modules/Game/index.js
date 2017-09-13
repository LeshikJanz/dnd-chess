let knightPosition = [0, 0];
let observer = null;

function emitChange() {
  observer(knightPosition);
}

export function observe(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }

  observer = o;
  emitChange();
}

/**
 * С помощью этого метода будем перемещать Коня
 * в выбранную ячейку
 */
export function moveKnight(toX, toY) {
  knightPosition = [toX, toY];
  emitChange();
}


/**
 * Allow Knight get only L-shape positions
 *
 */
export function canMoveKnight(toX, toY) {
  const [x, y] = knightPosition;
  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}