
let entries = []
/*fetch('https://script.google.com/macros/s/AKfycbwp2UrUvU9jta7TmbdZfpDOMLK3fAKEehlr-hu-dZ1aIxlLiFt5WlFM9VvBp1w4nAOXnA/exec')
  .then(res => res.json())
  .then(data => console.log(data));

*/
//const counterDisplay = document.getElementById('yes');
const pirmiPavadinimas = document.getElementById('pavadinimas1')
const pirmiRezultatas = document.getElementById('rezultatas1')
const antriPavadinimas = document.getElementById('pavadinimas2')
const antriRezultatas = document.getElementById('rezultatas2')
const kelin = document.getElementById("kelinys")

const pkv = document.getElementById("kelinys1")
const pkd = document.getElementById("kelinys2")
const pkt = document.getElementById("kelinys3")

const nv = document.getElementById("next1")
const nd = document.getElementById("next2")

const tv = document.getElementById("topVienas")
const tvt = document.getElementById("topVienasT")
const td = document.getElementById("topDu")
const tdt = document.getElementById("topDuT")
const tt = document.getElementById("topTrys")
const ttt = document.getElementById("topTrysT")
const tk = document.getElementById("topKeturi")
const tkt = document.getElementById("topKeturiT")
const tp = document.getElementById("topPenki")
const tpt = document.getElementById("topPenkiT")

fetch('https://script.google.com/macros/s/AKfycbwp2UrUvU9jta7TmbdZfpDOMLK3fAKEehlr-hu-dZ1aIxlLiFt5WlFM9VvBp1w4nAOXnA/exec')
  .then(res => res.json())       // parse the JSON array
  .then(data => {
    const result = [];

    for (let row = 0; row < data.length; row++) {
      for (let col = 0; col < data[row].length; col++) {
        result.push({
          value: data[row][col],
          row: row + 1,       // 1-indexed
          column: col + 1     // 1-indexed
        });
      }
    }
    //for (let sigma = 1; sigma < data[1].length; sigma++) {
    //    entries.push(data[1][sigma])
    //}
    //counterDisplay.textContent = data[0][0]
    pirmiPavadinimas.textContent = data[1][0]
    pirmiRezultatas.textContent = data[1][1]
    antriPavadinimas.textContent = data[1][2]
    antriRezultatas.textContent = data[1][3]
    kelin.textContent = data[1][4]

    pkv.textContent = data[1][5]
    pkd.textContent = data[1][6]
    pkt.textContent = data[1][7]

    nv.textContent = data[1][8]
    nd.textContent = data[1][9]

    tv.textContent = data[5][1]
    td.textContent = data[5][2]
    tt.textContent = data[5][3]
    tk.textContent = data[5][4]
    tp.textContent = data[5][5]
    tvt.textContent = data[6][1]
    tdt.textContent = data[6][2]
    ttt.textContent = data[6][3]
    tkt.textContent = data[6][4]
    tpt.textContent = data[6][5]
    //const cellValue = data[1][0];  // row 0, column 0
    //console.log(cellValue);
  })
  .catch(err => console.error(err));