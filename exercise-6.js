/*
  Logic Challenge: Melee Ranged Grouping
*/

function meleeRangedGrouping(str) {
  const output = [];

  if (str.length === 0) return output;

  const heroes = str.split(',');

  output.push([], []);

  heroes.forEach(hero => {
    const [name, type] = hero.split('-');
    if (type.trim() === 'Ranged') {
      output[0].push(name);
    } else if (type.trim() === 'Melee') {
      output[1].push(name);
    }
  });

  return output;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
