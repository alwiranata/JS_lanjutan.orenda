//konsep this pada arrow function
//Constructor Function
const Mahasiswa = function () {

    this.nama = 'Aldo Wiranata';
    this.jurusan = 'PPLG';
    this.sayHello = function () {
        console.log(`Halo my name ${this.nama}, and my study ${this.jurusan}`);
    }

}

const Aldo = new Mahasiswa();

