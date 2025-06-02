let currentQuestion = 0;
let answers = [];

const questions = [
  {
    question: "Berapa usia Anda saat ini?",
    options: [
      { text: "Di atas 55 tahun", value: 1 },
      { text: "46–55 tahun", value: 2 },
      { text: "36–45 tahun", value: 3 },
      { text: "26–35 tahun", value: 4 },
      { text: "18–25 tahun", value: 5 }
    ]
  },
  {
    question: "Apa status pekerjaan Anda saat ini?",
    options: [
      { text: "Tidak bekerja / pensiun", value: 1 },
      { text: "Ibu rumah tangga / pelajar / mahasiswa", value: 2 },
      { text: "Karyawan tetap / PNS / profesional", value: 3 },
      { text: "Wirausaha / pekerja lepas", value: 4 },
      { text: "Punya lebih dari satu sumber penghasilan", value: 5 }
    ]
  },
  {
    question: "Berapa besar pendapatan rutin Anda per bulan?",
    options: [
      { text: "Kurang dari Rp2 juta", value: 1 },
      { text: "Rp2 juta – Rp5 juta", value: 2 },
      { text: "Rp5 juta – Rp10 juta", value: 3 },
      { text: "Rp10 juta – Rp20 juta", value: 4 },
      { text: "Lebih dari Rp20 juta", value: 5 }
    ]
  },
  {
    question: "Berapa persen dari pendapatan yang siap Anda investasikan?",
    options: [
      { text: "< 5%", value: 1 },
      { text: "5–10%", value: 2 },
      { text: "11–20%", value: 3 },
      { text: "21–30%", value: 4 },
      { text: "> 30%", value: 5 }
    ]
  },
  {
    question: "Apa tujuan utama Anda berinvestasi?",
    options: [
      { text: "Menjaga nilai dana tetap aman", value: 1 },
      { text: "Dana darurat / jangka pendek", value: 2 },
      { text: "Penghasilan tambahan", value: 3 },
      { text: "Pertumbuhan kekayaan jangka panjang", value: 4 },
      { text: "Keuntungan maksimal/pertumbuhan agresif", value: 5 }
    ]
  },
  {
    question: "Berapa lama rencana Anda untuk berinvestasi?",
    options: [
      { text: "Kurang dari 1 tahun", value: 1 },
      { text: "1–3 tahun", value: 2 },
      { text: "3–5 tahun", value: 3 },
      { text: "5–10 tahun", value: 4 },
      { text: "Lebih dari 10 tahun", value: 5 }
    ]
  },
  {
    question: "Pengalaman investasi Anda sebelumnya?",
    options: [
      { text: "Belum pernah", value: 1 },
      { text: "Baru mencoba, <1 tahun", value: 2 },
      { text: "Pernah investasi produk sederhana", value: 3 },
      { text: "Sudah pernah investasi berbagai produk", value: 4 },
      { text: "Berpengalaman & aktif investasi", value: 5 }
    ]
  },
  {
    question: "Jika investasi Anda turun 10% dalam 6 bulan, apa tindakan Anda?",
    options: [
      { text: "Langsung jual seluruh investasi", value: 1 },
      { text: "Kurangi sebagian investasi", value: 2 },
      { text: "Diamkan & pantau situasi", value: 3 },
      { text: "Tetap bertahan & tambah investasi sedikit", value: 4 },
      { text: "Tambah investasi karena harga turun", value: 5 }
    ]
  },
  {
    question: "Bagaimana reaksi Anda terhadap peluang investasi baru yang berisiko tinggi?",
    options: [
      { text: "Menghindari sama sekali", value: 1 },
      { text: "Sangat hati-hati, lebih memilih yang pasti", value: 2 },
      { text: "Pertimbangkan jika potensinya jelas", value: 3 },
      { text: "Cukup tertarik dan akan mencoba sebagian", value: 4 },
      { text: "Langsung ambil peluang besar", value: 5 }
    ]
  },
  {
    question: "Seberapa siap Anda menghadapi fluktuasi nilai investasi dalam waktu singkat?",
    options: [
      { text: "Tidak siap sama sekali", value: 1 },
      { text: "Cukup siap, asal tidak terlalu besar", value: 2 },
      { text: "Siap jika untuk jangka panjang", value: 3 },
      { text: "Siap, demi hasil lebih tinggi", value: 4 },
      { text: "Sangat siap, fluktuasi besar bukan masalah", value: 5 }
    ]
  },
  {
    question: "Jika ada dana mendadak, apakah Anda tetap mempertahankan investasi?",
    options: [
      { text: "Langsung cairkan seluruh investasi", value: 1 },
      { text: "Cairkan sebagian besar", value: 2 },
      { text: "Cairkan sesuai kebutuhan", value: 3 },
      { text: "Cari alternatif dulu sebelum cairkan", value: 4 },
      { text: "Usahakan tetap invest, dana darurat sudah tersedia", value: 5 }
    ]
  },
  {
    question: "Seberapa sering Anda memantau perkembangan investasi?",
    options: [
      { text: "Hampir tidak pernah", value: 1 },
      { text: "1–2 kali setahun", value: 2 },
      { text: "Setiap 3 bulan", value: 3 },
      { text: "Setiap bulan", value: 4 },
      { text: "Setiap minggu/hari", value: 5 }
    ]
  },
  {
    question: "Bagaimana pengetahuan Anda tentang produk investasi syariah?",
    options: [
      { text: "Tidak tahu sama sekali", value: 1 },
      { text: "Tahu sedikit, pernah dengar", value: 2 },
      { text: "Pernah belajar/punya pengalaman terbatas", value: 3 },
      { text: "Cukup paham dan rutin baca info", value: 4 },
      { text: "Sangat paham & sering edukasi orang lain", value: 5 }
    ]
  },
  {
    question: "Seberapa besar ketergantungan Anda pada hasil investasi untuk kebutuhan hidup?",
    options: [
      { text: "Sangat tergantung, tanpa investasi ekonomi terganggu", value: 1 },
      { text: "Cukup tergantung, investasi untuk penghasilan utama", value: 2 },
      { text: "Butuh tambahan dari investasi", value: 3 },
      { text: "Tidak terlalu tergantung", value: 4 },
      { text: "Tidak tergantung sama sekali", value: 5 }
    ]
  },
  {
    question: "Bagaimana cara Anda mengambil keputusan investasi?",
    options: [
      { text: "Sangat hati-hati, menghindari risiko", value: 1 },
      { text: "Cukup hati-hati, konsultasi dulu", value: 2 },
      { text: "Ikut rekomendasi terpercaya", value: 3 },
      { text: "Riset mandiri & ambil keputusan sendiri", value: 4 },
      { text: "Langsung eksekusi jika yakin, suka eksperimen", value: 5 }
    ]
  },
  {
    question: "Jika muncul berita buruk tentang pasar, apa langkah Anda?",
    options: [
      { text: "Langsung jual semua investasi", value: 1 },
      { text: "Jual sebagian investasi", value: 2 },
      { text: "Pantau situasi dulu", value: 3 },
      { text: "Tetap bertahan, yakin akan pulih", value: 4 },
      { text: "Tambah investasi saat harga turun", value: 5 }
    ]
  },
  {
    question: "Seberapa sering Anda mengubah rencana investasi?",
    options: [
      { text: "Sangat sering, mudah panik", value: 1 },
      { text: "Sering jika ada berita buruk", value: 2 },
      { text: "Kadang-kadang saja", value: 3 },
      { text: "Jarang, rencana jangka panjang", value: 4 },
      { text: "Hampir tidak pernah, sangat konsisten", value: 5 }
    ]
  },
  {
    question: "Jika Anda mengalami kerugian investasi, bagaimana perasaan Anda?",
    options: [
      { text: "Sangat menyesal dan takut investasi lagi", value: 1 },
      { text: "Menyesal, jadi lebih hati-hati", value: 2 },
      { text: "Biasa saja, belajar dari pengalaman", value: 3 },
      { text: "Anggap sebagai risiko wajar", value: 4 },
      { text: "Jadi makin semangat belajar & mencoba lagi", value: 5 }
    ]
  },
  {
    question: "Bagaimana Anda menghadapi risiko secara umum?",
    options: [
      { text: "Selalu menghindari risiko", value: 1 },
      { text: "Lebih suka yang pasti", value: 2 },
      { text: "Risiko diterima jika terukur", value: 3 },
      { text: "Tidak masalah dengan risiko tinggi", value: 4 },
      { text: "Suka tantangan, risiko dianggap peluang", value: 5 }
    ]
  },
  {
    question: "Apakah Anda sudah punya dana darurat minimal 3x pengeluaran bulanan?",
    options: [
      { text: "Belum sama sekali", value: 1 },
      { text: "Baru sedikit (<1 bulan)", value: 2 },
      { text: "1–2 bulan", value: 3 },
      { text: "2–3 bulan", value: 4 },
      { text: "Sudah lebih dari 3 bulan", value: 5 }
    ]
  }
];

// ===== FUNGSI QUIZ =====

  function showQuestion(index) {
    const quizDiv = document.getElementById('quiz');
    const q = questions[index];
    let html = `<h3>${q.question}</h3>`;
    html += '<ul style="list-style:none; padding:0;">';
    q.options.forEach((opt, i) => {
      // Gunakan == agar checked tetap walau tipe data beda (number/string)
      const checked = (answers[index] == opt.value) ? "checked" : "";
      html += `
        <li>
          <label>
            <input type="radio" name="option" value="${opt.value}" onchange="selectOption()" ${checked} />
            ${opt.text}
          </label>
        </li>`;
    });
    html += '</ul>';
    quizDiv.innerHTML = html;

  // Navigasi nomor soal
    let navHTML = '<div class="question-nav-row">';
    for (let i = 0; i < 10; i++) {
      navHTML += `<button class="${i === index ? 'active' : ''}${answers[i] ? ' answered' : ''}" onclick="jumpToQuestion(${i})">${i + 1}</button>`;
    }
    navHTML += '</div><div class="question-nav-row">';
    for (let i = 10; i < 20; i++) {
      navHTML += `<button class="${i === index ? 'active' : ''}${answers[i] ? ' answered' : ''}" onclick="jumpToQuestion(${i})">${i + 1}</button>`;
    }
    navHTML += '</div>';
    document.getElementById('question-nav').innerHTML = navHTML;


  // Progress bar
  const progress = document.getElementById('progress');
  progress.style.width = `${((index + 1) / questions.length) * 100}%`;

  // Tampilkan/sembunyikan tombol Back
  document.getElementById('back-btn').style.display = (index > 0) ? 'inline-block' : 'none';

  // Reset/aktifkan tombol Lanjut sesuai status jawaban
  if (answers[index]) {
    document.getElementById('next-btn').disabled = false;
  } else {
    document.getElementById('next-btn').disabled = true;
  }
}

function selectOption() {
  document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
  // Simpan jawaban
  const radios = document.getElementsByName('option');
  let selected = null;
  for (let r of radios) {
    if (r.checked) {
      selected = r.value;
      break;
    }
  }
  if (selected === null) {
    // Tidak ada opsi yang dipilih, jangan lanjut!
    alert("Silakan pilih salah satu jawaban.");
    return;
  }

  answers[currentQuestion] = Number(selected);

  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion(currentQuestion);
  } else {
    showResult();
  }
  document.getElementById('next-btn').disabled = true;
}


function backQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion(currentQuestion);
    if (answers[currentQuestion]) {
      document.getElementById('next-btn').disabled = false;
    } else {
      document.getElementById('next-btn').disabled = true;
    }
  }
}

function jumpToQuestion(idx) {
  currentQuestion = idx;
  showQuestion(currentQuestion);
  if (answers[currentQuestion]) {
    document.getElementById('next-btn').disabled = false;
  } else {
    document.getElementById('next-btn').disabled = true;
  }
}

function showResult() {
  const total = answers.reduce((a, b) => a + b, 0);
  let profile = "";
  const minScore = questions.length * 1;
  const maxScore = questions.length * 5;
  const range = maxScore - minScore;

  if (total <= minScore + range * 0.3) profile = "Konservatif";
  else if (total <= minScore + range * 0.7) profile = "Moderat";
  else profile = "Agresif";

  document.getElementById('quiz').innerHTML = `
    <h3>Hasil Profil Risiko Anda: <span style="color:#047857">${profile}</span></h3>
    <p>Skor total: <b>${total}</b></p>
    <p>Rekomendasi alokasi investasi syariah akan diberikan sesuai profil ini.</p>
  `;
  document.getElementById('progress').style.width = `100%`;
  document.getElementById('back-btn').style.display = 'none';
  document.getElementById('next-btn').style.display = 'none';
}

// Tampilkan pertanyaan pertama saat load
window.onload = () => showQuestion(0);

