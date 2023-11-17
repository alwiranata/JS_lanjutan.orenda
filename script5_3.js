//Togged template
const nama = 'aldo Wiranata';
const umur = ' 33';
const email = 'Aldo Wiranata16@ gmail.com'

function coba(strings,...values){
    // let result ='';
    // strings.forEach((str,i) => {
    //     result += `${str}${values[i] || ''} `;
    // });
    // return result;
    return strings.reduce((result,str ,i) => `${result}${str}<span class="h1">${values[i] || ''}</span>`,'')
}

const str = coba`halo nama saya ${nama} dan umur ${umur} tahun  dan email saya ${email}`;
console.log(str);

document.body.innerHTML = str;