document.addEventListener("DOMContentLoaded", () => {
  // ===== FORM KUIS =====
  const quizForm = document.getElementById("quizForm");

  if (quizForm) {
    quizForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const usia = document.querySelector('input[name="usia"]:checked');
      const risiko = document.querySelector('input[name="risiko"]:checked');

      if (!usia || !risiko) return; // Validasi minimal

      localStorage.setItem("usia", usia.value);
      localStorage.setItem("risiko", risiko.value);

      window.location.href = "result.html";
    });
  }

  // ===== HASIL PROFIL RISIKO =====
  const hasilBox = document.getElementById("hasilRisiko");
  const rekomBox = document.getElementById("rekomendasiInvestasi");

  if (hasilBox && rekomBox) {
    const usia = localStorage.getItem("usia");
    const risiko = localStorage.getItem("risiko");

    hasilBox.textContent = `Usia: ${usia || "-"}, Risiko: ${risiko || "-"}`;

    const rekomendasi = {
      rendah: "Deposito Syariah & Sukuk Ritel",
      sedang: "Reksadana Syariah Pasar Uang & Pendapatan Tetap",
      tinggi: "Reksadana Syariah Saham & Saham Syariah"
    };

    rekomBox.textContent = risiko && rekomendasi[risiko]
      ? `Rekomendasi: ${rekomendasi[risiko]}`
      : "Rekomendasi belum tersedia.";
  }

  // ===== FORM NAMA & EMAIL =====
  const userForm = document.getElementById("userForm");
  const ucapanBox = document.getElementById("ucapanSelamat");

  if (userForm && ucapanBox) {
    const namaTersimpan = localStorage.getItem("userNama");
    if (namaTersimpan) {
      ucapanBox.textContent = `Selamat datang kembali, ${namaTersimpan}!`;
    }

    userForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const namaInput = document.getElementById("nama");
      const emailInput = document.getElementById("email");

      const nama = namaInput.value.trim();
      const email = emailInput.value.trim();

      // Reset pesan dan style error
      ucapanBox.textContent = "";
      namaInput.classList.remove("input-error");
      emailInput.classList.remove("input-error");

      // Validasi isi
      if (!nama || !email) {
        ucapanBox.textContent = "Nama dan Email wajib diisi!";
        if (!nama) namaInput.classList.add("input-error");
        if (!email) emailInput.classList.add("input-error");
        return;
      }

      // Validasi format email
      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!emailValid) {
        ucapanBox.textContent = "Format email tidak valid.";
        emailInput.classList.add("input-error");
        return;
      }

      // Simpan data
      localStorage.setItem("userNama", nama);
      localStorage.setItem("userEmail", email);
      ucapanBox.textContent = `Terima kasih sudah bergabung, ${nama}!`;

      // Reset form
      userForm.reset();
    });
  }
});

