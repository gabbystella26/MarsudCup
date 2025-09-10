function startCountdown() {
    // Tanggal: Selasa, 11 November 2025 - 07:00 WIB (GMT+7)
    const targetDate = new Date("2025-11-11T07:00:00+07:00"); // Format ISO + Zona waktu
  
    function updateCountdown() {
      const now = new Date();
      const diff = targetDate - now;
  
      if (diff <= 0) {
        document.getElementById('countdown-timer').innerHTML = "<span>Registration Started!</span>";
        clearInterval(timerInterval);
        return;
      }
  
      const weeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
      const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
      document.getElementById('weeks').textContent = String(weeks).padStart(2, '0');
      document.getElementById('days').textContent = String(days).padStart(2, '0');
      document.getElementById('hours').textContent = String(hours).padStart(2, '0');
      document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
      document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }
  
    updateCountdown();
    const timerInterval = setInterval(updateCountdown, 1000);
  }
  
  document.addEventListener("DOMContentLoaded", startCountdown);