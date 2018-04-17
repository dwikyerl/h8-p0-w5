/**

Virus Percentage
================

Implementasikan function virusPercentage untuk menghitung
persentase virus yang ada. Hanya akan ada 4 tipe virus, yaitu:
- *
- #
- @
- $

# Contoh:
- `input` -> **##@
  output -> 40% *, 40% #, 20% @
- `input` -> **#*##
  output -> 50% *, 50% #

Contoh lain ada di test case

# Asumsi:
- `input` tidak akan pernah kosong
- `input` pasti berisi virus

# Aturan coding:
- DILARANG menggunakan regex

*/

function virusPercentage(input) {
  const virusList = '*#@$';
  const virusesObj = {};
  let total = 0;
  for (let i = 0; i < input.length; i += 1) {
    const el = input[i];
    if (virusList.includes(el)) {
      if (!virusesObj[el]) virusesObj[el] = 0;
      virusesObj[el] += 1;
      total += 1;
    }
  }

  const percentages = Object.keys(virusesObj)
    .map(virus => {
      const percentage = virusesObj[virus] / total * 100;
      return { virus, percentage };
    })
    .sort((a, b) => a.percentage < b.percentage);

  return percentages.reduce((acc, virus, i) => {
    let str = `${acc}${virus.percentage}% ${virus.virus}`;
    if (percentages[i + 1] !== undefined) str += ', ';
    return str;
  }, '');
}

console.log(virusPercentage('**#*##')); // 50% *, 50% #
console.log(virusPercentage('**######')); // 75% #, 25% *
console.log(virusPercentage('**##@')); // 40% *, 40% #, 20% @
console.log(virusPercentage('@')); // 100% @
console.log(virusPercentage('#$*@')); // 25% #, 25% $, 25% *, 25% @
