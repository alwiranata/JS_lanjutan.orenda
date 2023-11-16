//1.HTML fragments
// const siswa = {
//     nama: 'alwi',
//     umur: '33',
//     nisn: '2019193011',
//     email: 'Aldowiranata16@gmail.com',
// };
// const element = `<div class="mhs">
// <h2>${siswa.nama}</h2>
// </br>
// <span class="nrp">${siswa.nisn}</span>
// </div>`
// console.log(element);

//2.Looping
// const mhs = [
//   {
//     nama: "Aldo Wiranata",
//     email: "aldowiranata16@gmail.com",
//   },
//   {
//     nama: "Dio",
//     email: "diowiranata16@gmail.com",
//   },
//   {
//     nama: "Erika",
//     email: "erikanata16@gmail.com",
//   }
// ];

// const element = `<div class="mhs">
  
//     ${mhs.map(m => `<ol>
//       <ul>${m.nama}</ul>
//       <ul>${m.email}</ul>
//       </ol>`).join('')}
  
// </div>`;

//3.conditions
// const lagu = {
//   judul : 'apa',
//   singer : 'who?',
//   feat: 'Ray!Putra',
// }

// const element = `<div class="lagu">
//   <ul>
//      <li>${lagu.judul}</li>
//      <li>${lagu.singer} ${lagu.feat ? `(feat.${lagu.feat})`:''}</li>
//   </ul>
// </div>`;



// //4.Nested
// //HTML Fragment bersarang
// // Definisikan fungsi cetakMataKuliah


// Objek mahasiswa
const mhs = {
  nama: 'Aldo Wiranata',
  semester: 'akhir',
  mataKuliah: [
    'Rekayasa Web',
    'PPLG',
  ],
};

function cetakMataKuliah(mataKuliah){
  return`
  <ol>
   ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
  </ol>
  `;
}

// Template string yang menggunakan fungsi cetakMataKuliah
const el = `<div class="mhs">
  <h2>${mhs.nama}</h2>

  <span class="semester">Semester : ${mhs.semester}</span>

  <h4>Mata Kuliah :</h4>

  ${cetakMataKuliah(mhs.mataKuliah)}
</div>`;

// Mengganti isi dari body dokumen dengan HTML yang telah dibuat

document.body.innerHTML = el;

