// ===============================
// SCATTER REGRESSION STUDIO
// ===============================

let chartInstance = null;
// ===============================
// QUOTES DATA
// ===============================

const quotes = {
  matematika: [
    "Apa beda kamu dan teorema?<br><br>Kalau teorema harus dibuktikan.<br>Kalau kamu… cukup hadir saja sudah meyakinkan.",

    "Apa beda kamu dan limit?<br><br>Kalau limit mendekati tak hingga.<br>Kalau kamu… mendekati hati.",

    "Apa beda kamu dan konstanta?<br><br>Kalau konstanta nilainya tetap.<br>Kalau kamu… tetap istimewa.",

    "Apa beda kamu dan fungsi?<br><br>Kalau fungsi punya domain.<br>Kalau kamu… punya ruang di pikiran.",

    "Apa beda kamu dan grafik naik?<br><br>Kalau grafik naik karena data.<br>Kalau kamu… naikkan semangat.",

    "Apa beda kamu dan variabel?<br><br>Kalau variabel bisa berubah.<br>Kalau kamu… tetap berharga.",

    "Apa beda kamu dan integral?<br><br>Kalau integral menjumlahkan bagian kecil.<br>Kalau kamu… menyempurnakan keseluruhan.",

    "Apa beda kamu dan sudut lancip?<br><br>Kalau sudut lancip kurang dari 90°.<br>Kalau kamu… lebih dari cukup.",

    "Apa beda kamu dan matriks?<br><br>Kalau matriks tersusun rapi.<br>Kalau kamu… tersusun di hati.",

    "Apa beda kamu dan regresi?<br><br>Kalau regresi mencari pola.<br>Kalau kamu… memberi makna.",

    "Apa beda kamu dan statistik?<br><br>Kalau statistik berbasis data.<br>Kalau kamu… berbasis rasa.",

    "Apa beda kamu dan peluang?<br><br>Kalau peluang dihitung.<br>Kalau kamu… diperjuangkan.",

    "Apa beda kamu dan persamaan?<br><br>Kalau persamaan butuh solusi.<br>Kalau kamu… sudah solusi.",

    "Apa beda kamu dan diagram?<br><br>Kalau diagram visualisasi data.<br>Kalau kamu… visualisasi bahagia.",

    "Apa beda kamu dan angka prima?<br><br>Kalau prima hanya dibagi satu dan dirinya.<br>Kalau kamu… tak tergantikan.",

    "Apa beda kamu dan akar kuadrat?<br><br>Kalau akar kuadrat hasil perhitungan.<br>Kalau kamu… hasil pilihan.",

    "Apa beda kamu dan turunan?<br><br>Kalau turunan perubahan kecil.<br>Kalau kamu… perubahan besar.",

    "Apa beda kamu dan peluang 100%?<br><br>Kalau peluang bisa dihitung.<br>Kalau kamu… pasti berharga.",

    "Apa beda kamu dan grafik parabola?<br><br>Kalau parabola punya puncak.<br>Kalau kamu… selalu di atas.",

    "Apa beda kamu dan skala?<br><br>Kalau skala memperjelas data.<br>Kalau kamu… memperjelas tujuan.",

    "Apa beda kamu dan data?<br><br>Kalau data dianalisis.<br>Kalau kamu… diapresiasi.",

    "Apa beda kamu dan koordinat?<br><br>Kalau koordinat menentukan posisi.<br>Kalau kamu… menentukan motivasi.",

    "Apa beda kamu dan distribusi normal?<br><br>Kalau distribusi normal punya puncak.<br>Kalau kamu… selalu menonjol.",

    "Apa beda kamu dan mean?<br><br>Kalau mean nilai rata-rata.<br>Kalau kamu… luar biasa.",

    "Apa beda kamu dan median?<br><br>Kalau median di tengah data.<br>Kalau kamu… di tengah semangat.",
  ],

  motivasi: [
    "Setiap titik kecil hari ini,<br>bisa menjadi garis besar masa depan.",

    "Grafik hidup mungkin naik turun,<br>yang penting arahmu tetap maju.",

    "Kesalahan itu seperti data awal,<br>penting untuk menemukan pola.",

    "Belajar bukan soal cepat,<br>tapi soal konsisten.",

    "Jangan takut grafikmu rendah,<br>yang penting trennya naik.",

    "Kamu tidak harus sempurna,<br>cukup terus bertumbuh.",

    "Nilai bukan segalanya,<br>proseslah yang membentuk segalanya.",

    "Satu langkah kecil hari ini,<br>lebih baik dari nol langkah.",

    "Semangat itu seperti garis lurus,<br>terus maju tanpa ragu.",

    "Setiap usaha meninggalkan jejak.",

    "Grafik terbaik pun dimulai dari nol.",

    "Kesulitan hanyalah data sementara.",

    "Teruslah belajar,<br>karena masa depan tidak menunggu.",

    "Kamu lebih kuat dari yang kamu kira.",

    "Kesalahan bukan akhir,<br>itu awal perbaikan.",

    "Belajar hari ini,<br>memimpin esok hari.",

    "Tidak ada usaha yang sia-sia.",

    "Kamu bukan sekadar angka.",

    "Setiap hari adalah kesempatan baru.",

    "Terus naik meski perlahan.",

    "Percaya prosesmu.",

    "Data bisa berubah,<br>potensimu juga bisa berkembang.",

    "Kerja keras mengalahkan bakat.",

    "Kamu mampu lebih dari yang kamu bayangkan.",

    "Langkah kecil tetap langkah maju.",
  ],

  humor: [
    "Tenang saja,<br>nilai bisa diperbaiki…<br>asal bukan perasaan.",

    "Kalau grafik turun,<br>itu bukan gagal… cuma lagi istirahat.",

    "Matematika sulit?<br>Coba jatuh cinta, lebih rumit.",

    "Belajar dulu,<br>nanti pusingnya belakangan.",

    "Jangan takut salah,<br>yang penting jangan salah jurusan.",

    "Kalau rumus bikin pusing,<br>tidur dulu, bukan menyerah.",

    "Ulangan itu seperti hujan,<br>datangnya tiba-tiba.",

    "Statistika mengolah data,<br>kita mengolah rasa.",

    "Kalau belum paham,<br>berarti belum kopi.",

    "Matematika itu logis,<br>yang nggak logis kadang perasaan.",

    "Nilai kecil bukan akhir dunia.",

    "Kalau grafik naik,<br>itu bukan karena kamu berdiri.",

    "Belajar pelan-pelan,<br>yang penting bukan lari dari soal.",

    "Kalau salah hitung,<br>jangan salahkan kalkulator.",

    "Regresi mencari pola,<br>kita mencari jodoh.",

    "Kalau datanya banyak,<br>jangan ikut pusing.",

    "Jangan takut angka besar,<br>tagihan lebih besar.",

    "Kalau belum bisa,<br>artinya belum waktunya bisa.",

    "Belajar itu berat,<br>tapi tidak seberat move on.",

    "Statistik tidak bohong,<br>kecuali datanya salah.",

    "Kalau grafik lurus,<br>itu bukan berarti hidup mulus.",

    "Jangan panik dulu,<br>biasanya cuma kurang fokus.",

    "Kalau salah jawab,<br>anggap saja latihan.",

    "Belajar bukan untuk nilai,<br>tapi supaya nggak malu.",

    "Kalau stres,<br>ingat masih ada tombol reset.",
  ],
};

// ===============================
// INITIAL ROWS
// ===============================

function createInitialRows() {
  const tbody = document.querySelector("#dataTable tbody");
  tbody.innerHTML = "";

  for (let i = 0; i < 10; i++) {
    const row = tbody.insertRow();
    row.innerHTML = `
            <td><input type="number"></td>
            <td><input type="number"></td>
        `;
  }
}

// ===============================
// DARK MODE
// ===============================

function toggleDark() {
  document.body.classList.toggle("dark");

  // Re-render chart agar warna axis ikut berubah
  if (chartInstance) {
    generateChart();
  }
}

// ===============================
// TAMBAH ROW
// ===============================

function addRow() {
  const row = document.querySelector("#dataTable tbody").insertRow();
  row.innerHTML = `
        <td><input type="number"></td>
        <td><input type="number"></td>
    `;
}

// ===============================
// RESET
// ===============================

function resetAll() {
  createInitialRows();

  if (chartInstance) {
    chartInstance.destroy();
    chartInstance = null;
  }

  document.getElementById("count").innerText = 0;
  document.getElementById("slope").innerText = "-";
  document.getElementById("intercept").innerText = "-";
  document.getElementById("r2").innerText = "-";
  document.getElementById("equation").innerText = "-";

  document.getElementById("interpretationContent").innerText =
    "Masukkan data dan tampilkan diagram untuk melihat interpretasi.";
}

// ===============================
// INTERPRETASI
// ===============================

function generateInterpretation(slope, r2) {
  let direction =
    slope > 0
      ? "Hubungan Positif"
      : slope < 0
        ? "Hubungan Negatif"
        : "Tidak ada hubungan linear yang jelas";

  let strength =
    r2 > 0.75
      ? "sangat kuat"
      : r2 > 0.4
        ? "sedang"
        : r2 > 0.1
          ? "lemah"
          : "sangat lemah";

  return `
        <strong>Arah Hubungan:</strong> ${direction}<br><br>
        <strong>Kekuatan Hubungan:</strong> ${strength}<br><br>
        <strong>Makna R²:</strong> ${(r2 * 100).toFixed(1)}% variasi Y dijelaskan oleh X.
    `;
}

// ===============================
// GENERATE CHART + REGRESI
// ===============================

function generateChart() {
  const rows = document.querySelectorAll("#dataTable tbody tr");
  let data = [];

  rows.forEach((r) => {
    const x = parseFloat(r.cells[0].children[0].value);
    const y = parseFloat(r.cells[1].children[0].value);

    if (!isNaN(x) && !isNaN(y)) {
      data.push({ x, y });
    }
  });

  if (data.length < 2) {
    alert("Minimal 2 data diperlukan");
    return;
  }

  // ==========================
  // HITUNG REGRESI
  // ==========================

  let sumX = 0,
    sumY = 0,
    sumXY = 0,
    sumXX = 0,
    sumYY = 0;

  data.forEach((p) => {
    sumX += p.x;
    sumY += p.y;
    sumXY += p.x * p.y;
    sumXX += p.x * p.x;
    sumYY += p.y * p.y;
  });

  const n = data.length;

  const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);

  const intercept = (sumY - slope * sumX) / n;

  const r2 = Math.pow(
    (n * sumXY - sumX * sumY) /
      Math.sqrt((n * sumXX - sumX * sumX) * (n * sumYY - sumY * sumY)),
    2,
  );

  // ==========================
  // UPDATE PANEL
  // ==========================

  document.getElementById("count").innerText = n;
  document.getElementById("slope").innerText = slope.toFixed(4);
  document.getElementById("intercept").innerText = intercept.toFixed(4);
  document.getElementById("r2").innerText = r2.toFixed(4);
  document.getElementById("equation").innerText =
    "ŷ = " + slope.toFixed(4) + "X + " + intercept.toFixed(4);

  document.getElementById("interpretationContent").innerHTML =
    generateInterpretation(slope, r2);

  // ==========================
  // RANGE DINAMIS
  // ==========================

  const minX = Math.min(...data.map((p) => p.x));
  const maxX = Math.max(...data.map((p) => p.x));
  const minY = Math.min(...data.map((p) => p.y));
  const maxY = Math.max(...data.map((p) => p.y));

  const paddingY = (maxY - minY) * 0.1 || 1;

  const regression = [
    { x: minX, y: slope * minX + intercept },
    { x: maxX, y: slope * maxX + intercept },
  ];

  const isDark = document.body.classList.contains("dark");
  const axisColor = isDark ? "#ffffff" : "#1e293b";
  const gridColor = isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.08)";

  if (chartInstance) {
    chartInstance.destroy();
  }

  // ==========================
  // RENDER CHART
  // ==========================

  chartInstance = new Chart(document.getElementById("scatterChart"), {
    type: "scatter",
    data: {
      datasets: [
        {
          label: "Data",
          data: data,
          backgroundColor: "#3b82f6",
          pointRadius: 6,
        },
        {
          label: "Regresi",
          data: regression,
          type: "line",
          borderColor: "#ef4444",
          borderWidth: 2,
          fill: false,
        },
      ],
    },
    options: {
      animation: false,
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          type: "linear",
          ticks: { color: axisColor },
          title: {
            display: true,
            text: "X",
            color: axisColor,
          },
          grid: { color: gridColor },
        },
        y: {
          min: minY - paddingY,
          max: maxY + paddingY,
          ticks: { color: axisColor },
          title: {
            display: true,
            text: "Y",
            color: axisColor,
          },
          grid: { color: gridColor },
        },
      },
      plugins: {
        legend: {
          labels: { color: axisColor },
        },
      },
    },
  });
}

// ===============================
// FIREBASE VISITOR COUNTER
// ===============================

async function initVisitorCounter() {
  const { initializeApp } =
    await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js");

  const { getDatabase, ref, get, set } =
    await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js");

  const firebaseConfig = {
    apiKey: "AIzaSyDvS4TXiU9xZjaz_vMBB9DrXBupvNYwXSg",
    authDomain: "regresi-counter.firebaseapp.com",
    databaseURL:
      "https://regresi-counter-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "regresi-counter",
    storageBucket: "regresi-counter.firebasestorage.app",
    messagingSenderId: "91363432209",
    appId: "1:91363432209:web:5b44642ed75ddadb899eb0",
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const counterRef = ref(db, "visits");

  function animateCounter(target) {
    let current = 0;
    const duration = 800;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      current += increment;

      if (current >= target) {
        current = target;
        clearInterval(timer);
      }

      document.getElementById("visitorCount").innerText =
        Math.floor(current).toLocaleString("id-ID");
    }, 16);
  }

  const snapshot = await get(counterRef);
  let current = snapshot.exists() ? snapshot.val() : 0;

  current++;
  await set(counterRef, current);

  animateCounter(current);
}
// ===============================
// POPUP QUOTE
// ===============================

function showRandomQuote() {
  const categories = Object.keys(quotes);

  const randomCategory =
    categories[Math.floor(Math.random() * categories.length)];

  const categoryQuotes = quotes[randomCategory];

  const randomQuote =
    categoryQuotes[Math.floor(Math.random() * categoryQuotes.length)];

  const overlay = document.getElementById("quoteOverlay");
  const modal = document.querySelector(".quote-modal");
  const textElement = document.getElementById("quoteText");
  const categoryElement = document.getElementById("quoteCategory");
  const iconElement = document.getElementById("quoteIcon");

  // Reset class kategori
  modal.classList.remove("matematika", "motivasi", "humor");
  modal.classList.add(randomCategory);

  // Set ikon
  const icons = {
    matematika: "📐",
    motivasi: "🚀",
    humor: "😄",
  };

  iconElement.innerText = icons[randomCategory];
categoryElement.innerText = randomCategory;

// Trigger bounce animation
iconElement.classList.remove("bounce");
void iconElement.offsetWidth; // reset animation
iconElement.classList.add("bounce");

  // Typing effect
  textElement.innerHTML = "";
  typeWriterEffect(textElement, randomQuote, 20);

  overlay.classList.add("show");
}
function typeWriterEffect(element, htmlText, speed) {
  let i = 0;

  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlText;
  const text = tempDiv.innerHTML; // tetap mempertahankan <br>

  function typing() {
    if (i < text.length) {
      element.innerHTML = text.substring(0, i + 1);
      i++;
      setTimeout(typing, speed);
    }
  }

  typing();
}

function closeQuote() {
  document.getElementById("quoteOverlay").classList.remove("show");
}

// klik di luar modal untuk close
document.addEventListener("click", function (e) {
  const overlay = document.getElementById("quoteOverlay");
  if (e.target === overlay) {
    closeQuote();
  }
});
// ===============================
// ON LOAD
// ===============================

window.onload = function () {
  createInitialRows();
  initVisitorCounter();

  setTimeout(() => {
    showRandomQuote();
  }, 400);
};
