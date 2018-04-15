/*
  Logic Challenge - Naik Angkot
*/

function naikAngkot(arrPenumpang) {
  if (arrPenumpang.length === 0) return [];
  const rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  const output = [];

  arrPenumpang.forEach(passenger => {
    if (passenger.length === 3) {
      const passengerObj = {};
      const from = rute.indexOf(passenger[1]);
      const to = rute.indexOf(passenger[2]);
      const distance = to - from;
      const cost = Math.abs(2000 * distance);
      [passengerObj.penumpang, passengerObj.naikDari, passengerObj.tujuan] = passenger;
      passengerObj.bayar = cost;
      output.push(passengerObj);
    }
  });

  return output;
}

// TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

// console.log(naikAngkot([['Aloy', 'C', 'A'], ['Nathan', 'F', 'B']]));
// [ { penumpang: 'Aloy', naikDari: 'C', tujuan: 'A', bayar: 4000 },
//   { penumpang: 'Nathan', naikDari: 'F', tujuan: 'B', bayar: 8000 } ]

console.log(naikAngkot([])); // []
