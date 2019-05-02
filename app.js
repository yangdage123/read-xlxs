var xlsx = require('xlsx');
var fs = require('fs');
const work = xlsx.readFile('target/中英文国家对照表.xlsx');
const tabName = work.SheetNames[0];
const sheets = work.Sheets[tabName];
const obj = {};
for (let i = 2; i < 228; i++) {
  const ACol = sheets[`A${i}`] || { v: '' };
  const BCol = sheets[`B${i}`] || { v: '' };
  const CCol = sheets[`C${i}`] || { v: '' };
  obj[ACol.v.trim()] = CCol.v.trim();
}
fs.writeFileSync('result.json', JSON.stringify(obj));
console.log('json write success!');
