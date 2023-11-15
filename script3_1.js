//Arrow function
// const tampilNama = function (nama) {
//     return `Hello ${nama}`;
// }

// console.log(tampilNama(prompt('input name :')))

// const tampilNama = (nama) => { return `Hello ${nama}`; }
// console.log(tampilNama('aldo'));

// const tampilNama = (nama, jurusan) => { return `nama:${nama} dan jurusan:${jurusan}` }
// console.log(tampilNama('aldo', ' PPLG'));

//Implisit return
// const viewName = myName => `Halo ${myName}`;
// console.log(viewName('Aldo'))

// const hello = () => `Hello World`;
// console.log(hello());

let siswa = ['Aldo Wiranata', 'Ulti', 'Pawai'];
// let jumlahHuruf = siswa.map(function (nama) {
//     return nama.length
// })
// console.log(jumlahHuruf)

// const jumlahHuruf = siswa.map(nama => nama.length);
// console.log(jumlahHuruf);

const jumlahHuruf = siswa.map(nama => ({ nama: nama, jmlHuruf: nama.length }))
console.table(jumlahHuruf)