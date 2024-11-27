const daysContainer = document.querySelector(".days"),
  nextBtn = document.querySelector(".next-btn"),
  prevBtn = document.querySelector(".prev-btn"),
  month = document.querySelector(".month"),
  calendarIcon = document.querySelector("#calender-icon");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();

function renderCalendar() {
  date.setDate(1);
  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);
  const lastDayIndex = lastDay.getDay();
  const lastDayDate = lastDay.getDate();
  const prevLastDay = new Date(currentYear, currentMonth, 0);
  const prevLastDayDate = prevLastDay.getDate();
  const nextDays = 7 - lastDayIndex - 1;

  month.textContent = `${months[currentMonth]} ${currentYear}`;

  let daysHTML = "";

  for (let x = firstDay.getDay(); x > 0; x--) {
    daysHTML += `<div class="day prev">${prevLastDayDate - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDayDate; i++) {
    if (
      i === new Date().getDate() &&
      currentMonth === new Date().getMonth() &&
      currentYear === new Date().getFullYear()
    ) {
      daysHTML += `<div class="day today">${i}</div>`;
    } else {
      daysHTML += `<div class="day">${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    daysHTML += `<div class="day next">${j}</div>`;
  }

  daysContainer.innerHTML = daysHTML;
}

renderCalendar();

nextBtn.addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar();
});

prevBtn.addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar();
});

calendarIcon.addEventListener("click", () => {
  const currentDate = new Date();
  currentYear = currentDate.getFullYear();
  currentMonth = currentDate.getMonth();
  renderCalendar();
});
