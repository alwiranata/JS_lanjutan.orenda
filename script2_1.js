//execution context, hoisting ,scope;

// console.log(nama);
// var nama = 'aldo';

//creation phase pada Global Context


// console.log(sayHello())
// var nama = 'aldo';
// var umur = '33';


// function sayHello() {
//     return `nama saya ${nama} dan umur saya ${umur} th`;
// }


var nama = 'Aldo Wiranata';
var email = 'Aldo Wiranata 16';

function cetakUrl(email) {
    var emailIg = "@gmail.com"
    return email + emailIg;
}
console.log(cetakUrl(email)); 