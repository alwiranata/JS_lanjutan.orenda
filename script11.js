// fetch('http://www.omdbapi.com/?apikey=f19947ab&s=avengers')
// .then(response => response.json())
// .then(response => console.log(response));

//Promoise
/*object yang mempersentasikan keberhasilan /kegagalan sebuah event
 yang asyncronus di masa yang akan datang*/



//contoh 1
// let ditepati = false;
// const  janji1 = new Promise((resolve,rejected) =>{
//     if(ditepati){
//         resolve('janji ditepati');
//     } else{
//         rejected('Ingkar janji')
//     }
// } )



// janji1
// .then(response => console.log('Ok!'  + response))
// .catch(response => console.log('NOT OK!'  + response))

// let ditepati = 'false';
// const  janji2 = new Promise((resolve, rejected) => {
//     if( ditepati){
//         setTimeout(() => {
//             resolve('Ditepati setelah beberapa waktu');
//         },2000)
//     } else {
//         setTimeout(() => {
//             resolve('Tidak Ditepati setelah beberapa waktu');
//         },2000);
//     }
// })

// console.log('mulai');
// // console.log(janji2.then(() => console.log(janji2))

// janji2
// .finally(() => console.log('Proses Selesai'))
// .then(response => console.log('OK!' + response))
// .catch(response => console.log('NOT OK!' + response))

// console.log('selesai');

const film = new Promise (resolve =>{
    setTimeout(()=> {
      resolve([{
        judul: "avengers",
        sutradara: 'Aldo Wiranata',
        pemeran : 'DEO ,Saskia',
      }]);
    },1000);
})

const cuaca = new Promise(resolve => {
    setTimeout(()=> {
        resolve([{
            kota :'Pekanabru',
            temp : 30,
            kondisi : 'cerah',
        }]);
    },10000);
});

// film.then(response=> console.log(response));
// cuaca.then(response => console.log(response))

Promise.all([film, cuaca])
// .then(response => console.log(response))
.then(response => {
    const[film,cuaca] = response;
    console.log(film);
    console.log(cuaca);
})