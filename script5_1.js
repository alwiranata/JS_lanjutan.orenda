//template literal /template string
// const nama = 'Aldo';
// const umur = 33;
// console.log(`Nama : ${nama}
// umur : ${umur} tahun`)

//Embeded Expression
//console.log('$(1+1)');
// console.log(`${alert('hai')}`)

// const x = parseFloat(prompt('Input Angka : '));
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);

const mhs = {
    nama: 'Aldo Wiranata',
    umur: 33,
    nrp: 31090301,
    email: 'awiranata163@gmail.com',
}
const element = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nrp">${mhs.nrp}</span>
</div>`

console.log(element);


