document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("quizForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const usia = document.querySelector('input[name="usia"]:checked')?.value;
      const risiko = document.querySelector('input[name="risiko"]:checked')?.value;

      localStorage.setItem("usia", usia);
      localStorage.setItem("risiko", risiko);
      window.location.href = "result.html";
    });
  }

  const hasil = document.getElementById("hasilRisiko");
  const rekom = document.getElementById("rekomendasiInvestasi");

  if (hasil && rekom) {
    const usia = localStorage.getItem("usia");
    const risiko = localStorage.getItem("risiko");

    hasil.textContent = `Usia: ${usia}, Risiko: ${risiko}`;

    if (risiko === "rendah") {
      rekom.textContent = "Rekomendasi: Deposito Syariah & Sukuk Ritel";
    } else if (risiko === "sedang") {
      rekom.textContent = "Rekomendasi: Reksadana Syariah Pasar Uang & Pendapatan Tetap";
    } else {
      rekom.textContent = "Rekomendasi: Reksadana Syariah Saham & Saham Syariah";
    }
  }
});
