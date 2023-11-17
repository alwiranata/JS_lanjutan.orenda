//callback
// function halo(nama){
//     alert(`halo ${nama}`);
// }

// function tampilkanPesan(callback){
//  const nama = prompt('Masukkan Nama :');
//  callback(nama);
// }

// tampilkanPesan(nama => alert(`Halo ${nama}`));

// const mhs = [
//     {
//         "nama" : "aldo",
//         "nrp" : "910910",
//         "email" : "al@gmail.com",
//         "Jurusan": "teknik industri",
//         "Id": 2,
        
//     },
//     {
//         "nama" : "alos",
//         "nrp" : "91091000",
//         "email" : "als@gmail.com",
//         "Jurusan": "teknik ao",
//         "Id": 3,
        
//     }

// ];

// console.log('mulai');
// mhs.forEach(m => {
//  for ( let i = 0; i< 10000000; i++){
//     let date = new Date();
//  }
//  console.log(m.nama)
// });
// console.log('selesai');


//Assycronus Callback
// function getDataMahasiswa(url, success ,error){
//     let xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 success(xhr.response);
//             } else if (xhr.status === 404) {
//                 error();
//             } 
            
//         }
//     }
//  xhr.open('get',url);
//  xhr.send();
// }
// console.log('mulai');
// getDataMahasiswa('mahasiswa.json',results =>{
//  const mhs =JSON.parse(results);
//  mhs.forEach(m => console.log(m.nama))
// }, () =>{
// });
// console.log('selesai');

//Jquery
console.log('mulai');
$.ajax ({
    url : 'mahasiswa.json',
    success : (mhs)=>{
        mhs.forEach(m=> console.log(m.nama) )
   
    },
    error :() =>{

    }

});
console.log('selesai');

