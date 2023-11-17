// //rest Parameter

// function myFunc(){
// // return `a = ${a} , b= ${b}, myArgs = ${myArgs}`;
// // return arguments;
// //  return Array.from(arguments);
// // return [...arguments];
// }

// console.log(myFunc(1,2,3,4,5));

// function jumlahkan(...angka){
// // let total = 0;
// // for( const a of angka){
// //     total += a;
// // }
// // return total;
// return angka.reduce((a, b)=> a+ b);
// }
// console.log(jumlahkan(1,2,3,4,5));

//array detructuring

// const  kelompok1 = ['ALdo','wiranata', 'erik'];
// const [ketua, wakil ,...anggota] = kelompok1;
// console.log(wakil);

//Object destructuring

// const team = {
//     pm : 'aldo',
//     frontEnd: 'wi',
//     backEnd : 'na',
//     ux : 'ow',

// }

// const {pm, ...myTeam} = team;
// console.log(myTeam);

//filtering

function filterBy(type, ...values){
    return values.filter (v => typeof v === type)

}
console.log(filterBy('boolean',1,2,3,4,'aldo',true,'alwi'));


