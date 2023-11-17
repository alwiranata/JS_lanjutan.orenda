//Spread Operator
//memecah iterables menajdi single element
// const mhs = ['Aldo Wiranata' , 'deo' ,'saskia'];
// // console.log(...mhs[0])

//Menggabungkan 2 arrayconst mhs = ['Aldo Wiranata' , 'deo' ,'saskia'];
// const mhs = ['Aldo Wiranata' , 'deo' ,'saskia'];
// const dosen = ['Adi' , 'do' ,'skia'];
// const orang = [...mhs,'aji', ...dosen];
// console.log(orang)

//mengcopy array

// const mhs = ['Aldo Wiranata' , 'deo' ,'saskia'];
// // const mhs1 = mhs;
// // console.log(mhs)
// const mhs1 =[...mhs];
// mhs1[0]='fajar';
// console.log(mhs)

// const liMhs = document.querySelectorAll('li');
// // const mhs  =[];
// // for(let i = 0; i< liMhs.length; i++){
// //     mhs.push(liMhs[i].textContent);
// // }
// // console.log(mhs);

// const mhs =[...liMhs].map(m => m.textContent);
// console.log(mhs);

const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h=>`<span>${h}</span>`).join('');
nama.innerHTML = huruf;
