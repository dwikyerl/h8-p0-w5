/**

How Many Gifts
==============

Anastasia meminta Sergei untuk membeli daftar oleh-oleh saat trip berikutnya, sekarang Sergei ingin tahu berapa jumlah oleh-oleh PALING BANYAK yang bisa dia beli.

Implementasikan function dibawah untuk membantu Sergei:

function howManyGifts(maxBudget, gifts)
  Parameter pertama adalah budget Sergei, yang kedua adalah sebuah Array yang berisi harga setiap oleh-oleh. Function ini harus mengembalikan nilai yang mewakili jumlah maksimum oleh-oleh yang Sergei dapat beli.


# Contoh:
Maximum budget: 25000
Daftar harga oleh-oleh: [20000, 5000, 10000, 6000, 4000 ]
Maka akan mengembalikan 4 karena bisa membeli oleh-oleh dengan harga 5000, 10000, 6000, 4000

# Asumsi:
- `maxBudget` akan memiliki nilai >= 0, dan array `gifts` tidak akan pernah kosong.

# Aturan coding:
- WAJIB menyertakan algoritma / pseudocode

*/

/*
  PSEUDOCODE :
  STORE maxGifts with value of 0
  SORT gifts with ASCENDING values
  FOR i = 0 to gifts array's length
    IF gifts[i] >= maxBudget THEN
      CONTINUE to next iteration
    ENDIF
    STORE bugdet with value from maxBugdet
    STORE boughtGifts with an array whose first element is gifts[i]
    COMPUTE budget = budget - gift[i]
    FOR j = 0 to gifts array's length
      IF i !== j AND gifts[j] <= budget THEN
        PUSH gifts[j] to boughtGifts array
        COMPUTE budget = budget - gift[j]
      ENDIF
    ENDFOR

    IF boughtGifts's length > maxGifts THEN
      SET maxGifts with value of boughtGifts's length
    ENDIF
  ENDFOR

  RETURN maxGifts
*/

function howManyGifts(maxBudget, gifts) {
  let maxGifts = 0;
  gifts.sort((a, b) => a - b);
  for (let i = 0; i < gifts.length; i += 1) {
    let budget = maxBudget;
    if (gifts[i] > maxBudget) continue;
    const boughtGifts = [gifts[i]];
    budget -= gifts[i];
    for (let j = 0; j < gifts.length; j += 1) {
      if (i !== j && gifts[j] <= budget) {
        boughtGifts.push(gifts[j]);
        budget -= gifts[j];
      }
    }

    if (boughtGifts.length > maxGifts) {
      maxGifts = boughtGifts.length;
    }
  }

  return maxGifts;
}

console.log(howManyGifts(30000, [15000, 12000, 5000, 3000, 10000])); // 4
console.log(howManyGifts(10000, [2000, 2000, 3000, 1000, 2000, 10000])); // 5
console.log(howManyGifts(4000, [7500, 1500, 2000, 3000])); // 2
console.log(howManyGifts(50000, [25000, 25000, 10000, 15000])); // 3
console.log(howManyGifts(0, [10000, 3000])); // 0
