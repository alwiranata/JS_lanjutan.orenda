//Destructiong variabel Asigment

//Destructuring Array

// const perkenalan = ['halo','nama', 'saya' , 'Aldo Wiranata'];
// // const salam = perkenalan[0];
// // const nama = perkenalan[3];

// // const[salam,satu,dua,nama] = perkenalan;
// //skip items
// const [salam,,,nama] = perkenalan;
// console.log(salam);

//swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a,b] =[b,a];
// console.log(a);
// console.log(b);

//const value pada function
// function coba(){
//     return[1,2];

// }

// const [a,b] = coba();
// console.log(a);

//rest Parameter
// const [a, ...values]= [1,2,3,4,5];
// console.log(a)
// console.log(values)

//Derecturing Object
// const mhs = {
//     nama : 'Aldo Wiranata',
//     umur : 33,
// }

// const {nama , umur} = mhs;
// console.log(nama)


// //assigment tanpa deklarasi object;
// ({nama, umur} ={
//      nama: 'Aldo Wiranata',
//      umur: 33,
// });
// console.log(umur);

//Assign ke variabel baru
// const mhs = {
//     nama : 'Aldo Wiranata',
//     umur : 17,
// };

// const {nama: a, umur : n,} = mhs;
// console.log(n);

//Memeberikan default ke value 
// const mhs = {
//     nama : 'Aldo Wiranata',
//     umur : 17,
//     email : 'aldowrianata16@gmail.com'
// };

// const{nama, umur, email = 'email@default.com'} =mhs;
// console.log(email);

//memebrikan nilai default dan assign ke variabel baru

// const mhs = {
//     nama : 'Aldo Wiranata',
//     umur : 17,
//     email : 'aldowrianata16@gmail.com'
// };

// const{nama : n, umur : u, email: e = 'email@default.com'} =mhs;
// console.log(e);

//rest Parameter
// const mhs ={
//     nama : 'Aldo wiranata',
//     umur : '33',
//     email : 'aldowiranata16@gmail.com',
// }

// const{nama,...value} = mhs;
// console.log(value);

//mengambil field pada object ,setelah dikirim sebagi parameter pada function;
const mhs ={
    nama : 'Aldo wiranata',
    umur : '33',
    email : 'aldowiranata16@gmail.com',
}

function getIdMhs({nama}){
    return nama;
}

console.log(getIdMhs(mhs));



