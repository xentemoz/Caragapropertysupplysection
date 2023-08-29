function updateTime() {
  const now = new Date();
  const hours = now.getHours() % 12 || 12; // Convert to 12-hour format
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const period = now.getHours() < 12 ? 'AM' : 'PM';

  const timeString = `${hours}:${minutes}:${seconds} ${period}`;
  document.getElementById('timeDisplay').textContent = timeString;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initial update
updateTime();