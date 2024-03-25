"use strict";
let mhs1 = {
    name: "John",
    result: 80,
    presence: 90
};
let mhs2 = {
    name: "Jane",
    result: 60,
    presence: 65
};
let mhs3 = {
    name: "Alice",
    result: 100,
    presence: 85
};
function prosessTypeof(mahasiswa) {
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
// // Mahasiswa 1
// if (prosessTypeof(mhs1) === 'cumlaude') {
//     console.log(`${mhs1.name} lulus dengan predikat cumlaude`);
// } else if (prosessTypeof(mhs1) === 'lulus') {
//     console.log(`${mhs1.name} lulus dengan nilai bagus`);
// } else {
//     console.log(`${mhs1.name} tidak lulus`);
// }
// // Mahasiswa 2
// if (prosessTypeof(mhs2) === 'cumlaude') {
//     console.log(`${mhs2.name} lulus dengan predikat cumlaude`);
// } else if (prosessTypeof(mhs2) === 'lulus') {
//     console.log(`${mhs2.name} lulus dengan nilai bagus`);
// } else {
//     console.log(`${mhs2.name} tidak lulus`);
// }
// //Mahasiswa 3
// if (prosessTypeof(mhs3) === 'cumlaude') {
//     console.log(`${mhs3.name} lulus dengan predikat cumlaude`);
// } else if (prosessTypeof(mhs3) === 'lulus') {
//     console.log(`${mhs3.name} lulus dengan nilai bagus`);
// } else {
//     console.log(`${mhs3.name} tidak lulus`);
// }
