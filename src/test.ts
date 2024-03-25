interface Mahasiswa {
    [key: string]: string | number
}

let mhs1: Mahasiswa = {
    name: "John",
    result: 80,
    presence: 90
}

let mhs2: Mahasiswa = {
    name: "Jane",
    result: 60,
    presence: 65
}

let mhs3: Mahasiswa = {
    name: "Alice",
    result: 100,
    presence: 85
}

function prosessTypeof(mahasiswa: Mahasiswa) {
    if (typeof mahasiswa.result === 'number' && typeof mahasiswa.presence === 'number') {
        if (mahasiswa.result === 100 && mahasiswa.presence > 80) {
            return 'lulus dengan cumlaude';
        }
        else if (mahasiswa.result >= 70 && mahasiswa.presence >= 70) {
            return 'lulus';
        }
        else {
            return 'tidak lulus';
        }
    }
}

console.log(`${mhs1.name} ${prosessTypeof(mhs1)}`);
console.log(`${mhs2.name} ${prosessTypeof(mhs2)}`);
console.log(`${mhs3.name} ${prosessTypeof(mhs3)}`);