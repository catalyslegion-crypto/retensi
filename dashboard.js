// Ambil data dari LocalStorage atau default kosong
let pekerjaan = JSON.parse(localStorage.getItem("pekerjaan")) || [];
let permintaan = JSON.parse(localStorage.getItem("permintaan")) || [];
let peminjaman = JSON.parse(localStorage.getItem("peminjaman")) || [];

// Fungsi render semua tabel
function renderTabel() {
  // Pekerjaan
  const pekerjaanTable = document.getElementById("pekerjaanTable");
  pekerjaanTable.innerHTML = "";
  pekerjaan.forEach((p, i) => {
    pekerjaanTable.innerHTML += `
      <tr>
        <td>${p.judul}</td>
        <td>${p.status}</td>
        <td><button onclick="hapusPekerjaan(${i})">Hapus</button></td>
      </tr>`;
  });
  document.getElementById("totalPekerjaan").innerText = pekerjaan.length;

  // Permintaan
  const permintaanTable = document.getElementById("permintaanTable");
  permintaanTable.innerHTML = "";
  permintaan.forEach((p, i) => {
    permintaanTable.innerHTML += `
      <tr>
        <td>${p.nama}</td>
        <td>${p.status}</td>
        <td><button onclick="hapusPermintaan(${i})">Hapus</button></td>
      </tr>`;
  });
  document.getElementById("totalPermintaan").innerText = permintaan.length;

  // Peminjaman
  const peminjamanTable = document.getElementById("peminjamanTable");
  peminjamanTable.innerHTML = "";
  peminjaman.forEach((p, i) => {
    peminjamanTable.innerHTML += `
      <tr>
        <td>${p.barang}</td>
        <td>${p.peminjam}</td>
        <td>${p.status}</td>
        <td><button onclick="hapusPeminjaman(${i})">Hapus</button></td>
      </tr>`;
  });
  document.getElementById("totalPeminjaman").innerText = peminjaman.length;
}

// Fungsi tambah
document.getElementById("formTambahPekerjaan").addEventListener("submit", function(e){
  e.preventDefault();
  const judul = document.getElementById("judulPekerjaan").value;
  const status = document.getElementById("statusPekerjaan").value;
  pekerjaan.push({judul, status});
  localStorage.setItem("pekerjaan", JSON.stringify(pekerjaan));
  renderTabel();
  this.reset();
});

document.getElementById("formTambahPermintaan").addEventListener("submit", function(e){
  e.preventDefault();
  const nama = document.getElementById("namaPermintaan").value;
  const status = document.getElementById("statusPermintaan").value;
  permintaan.push({nama, status});
  localStorage.setItem("permintaan", JSON.stringify(permintaan));
  renderTabel();
  this.reset();
});

document.getElementById("formTambahPeminjaman").addEventListener("submit", function(e){
  e.preventDefault();
  const barang = document.getElementById("namaPeminjaman").value;
  const peminjam = document.getElementById("peminjam").value;
  const status = document.getElementById("statusPeminjaman").value;
  peminjaman.push({barang, peminjam, status});
  localStorage.setItem("peminjaman", JSON.stringify(peminjaman));
  renderTabel();
  this.reset();
});

// Fungsi hapus
function hapusPekerjaan(i){
  pekerjaan.splice(i,1);
  localStorage.setItem("pekerjaan", JSON.stringify(pekerjaan));
  renderTabel();
}

function hapusPermintaan(i){
  permintaan.splice(i,1);
  localStorage.setItem("permintaan", JSON.stringify(permintaan));
  renderTabel();
}

function hapusPeminjaman(i){
  peminjaman.splice(i,1);
  localStorage.setItem("peminjaman", JSON.stringify(peminjaman));
  renderTabel();
}

// Render tabel saat pertama load
renderTabel();
