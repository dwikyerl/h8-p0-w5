/**

Drone Position
==============

Implementasikan function dronePosition untuk mencari koordinat drone yang
ada di dalam `grid`. Drone akan direpresentasikan sebagai karakter '*'.

Format koordinat: <baris>, <kolom>

# Asumsi:
- Drone ('*') selalu berjumlah 1, tidak mungkin ada drone lain

Contoh input ada di test case.

# Aturan coding:
- WAJIB menyertakan algoritma / pseudocode

*/

/*
  PSUDOCODE :
  FOR i = 0 to grid's length - 1
    FOR j = 0 to grid child's length - 1
      IF element at grid[i][j] is '*' THEN
        RETURN i, j
      ENDIF
    ENDFOR
  ENDFOR

  RETURN 'No drone'
*/

function dronePosition(grid) {
  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      if (grid[i][j] === '*') return `${i}, ${j}`;
    }
  }
  return 'No drone';
}

console.log(dronePosition([['', '', ''], ['', '', ''], ['', '', '*']])); // 2, 2

console.log(dronePosition([['', '', ''], ['', '*', ''], ['', '', '']])); // 1, 1

console.log(dronePosition([['', '', '*'], ['', '', ''], ['', '', '']])); // 0, 2

console.log(dronePosition([['', '', ''], ['', '', ''], ['', '', '']])); // No drone
