/*
  Logic Challenge - Naik Angkot
*/

function naikAngkot(arrPenumpang) {
  const rute = ["A", "B", "C", "D", "E", "F"];
  let output = [];

  for (let passenger of arrPenumpang) {
    if (passenger.length === 3) {
      let passengerObj = {};
      let from = rute.indexOf(passenger[1]);
      let to = rute.indexOf(passenger[2]);
      let distance = to - from;
      let cost = 2000 * distance;
      passengerObj["penumpang"] = passenger[0];
      passengerObj["naikDari"] = passenger[1];
      passengerObj["tujuan"] = passenger[2];
      passengerObj["bayar"] = cost;
      output.push(passengerObj);
    }
  }

  return output;
}

//TEST CASE
console.log(naikAngkot([["Dimitri", "B", "F"], ["Icha", "A", "B"]]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
