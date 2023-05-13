const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');
const tickSound = new Audio('./Clock-Ticking-C-www.fesliyanstudios.com.mp3');
const dateDisplay = document.querySelector('#date-display');

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
  mn.style.transform = `rotateZ(${(mm)}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;

  tickSound.play();

  // Retrieve current date and display it on the page
  const year = day.getFullYear();
  const month = day.toLocaleString('default', { month: 'long' });
  const date = day.getDate();
  const dayOfWeek = day.toLocaleString('default', { weekday: 'long' });

  dateDisplay.textContent = `${dayOfWeek}, ${month} ${date}, ${year}`;
}, 1000);
