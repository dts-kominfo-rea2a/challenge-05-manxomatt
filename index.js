const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (names, cbSort) => {
  let res = [];
  for (let i = 0; i < names.length; i++) {
    res.push(`${i + 1}. ${cbSort(names)[i]}`);
  }
  return res;
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (eachName) => eachName.sort();

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (eachName) => eachName.sort().reverse();

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
