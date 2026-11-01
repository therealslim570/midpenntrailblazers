const calendarGrid = document.querySelector("#calendar-grid");
const monthHeading = document.querySelector("#calendar-title");
const previousButton = document.querySelector("#previous-month");
const nextButton = document.querySelector("#next-month");

const calendarEvents = [
  {
    date: "2026-01-10",
    title: "Loops of Hope",
    shortTitle: "Loops of Hope",
    kind: "race",
    detail: "9:00 am · Free event",
    page: "races/loops-of-hope.html",
    url: "https://www.facebook.com/events/1267805342049212",
  },
  {
    date: "2026-02-22",
    title: "Snow Fest",
    shortTitle: "Snow Fest",
    kind: "race",
    detail: "1:00 pm",
    page: "races/snow-fest.html",
    url: "https://my.raceresult.com/322246/",
  },
  {
    date: "2026-04-04",
    title: "Night Flight",
    shortTitle: "Night Flight",
    kind: "race",
    detail: "8:30 pm",
    page: "races/night-flight.html",
    url: "https://runsignup.com/Race/Results/Overview/46440",
  },
  {
    date: "2026-04-22",
    title: "Fun run · Camp Mt. Luther",
    shortTitle: "Fun run",
    kind: "fun",
    detail: "6:00 pm · Camp Mt. Luther",
    url: "https://www.facebook.com/groups/MidPennTrailblazers/",
  },
  {
    date: "2026-05-13",
    title: "Fun run · Montour Preserve",
    shortTitle: "Fun run",
    kind: "fun",
    detail: "6:00 pm · Montour Preserve",
    url: "https://www.facebook.com/groups/MidPennTrailblazers/",
  },
  {
    date: "2026-05-27",
    title: "Fun run · Montour Preserve",
    shortTitle: "Fun run",
    kind: "fun",
    detail: "6:00 pm · Montour Preserve",
    url: "https://www.facebook.com/groups/MidPennTrailblazers/",
  },
  {
    date: "2026-06-10",
    title: "Fun run · Smith’s Knob",
    shortTitle: "Fun run",
    kind: "fun",
    detail: "6:00 pm · Smith’s Knob, Montoursville",
    url: "https://www.facebook.com/groups/MidPennTrailblazers/",
  },
  {
    date: "2026-06-13",
    title: "Smith’s Knob Scramble",
    shortTitle: "Smith’s Knob Scramble",
    kind: "race",
    detail: "9:00 am",
    page: "races/smiths-knob-scramble.html",
    url: "https://ultrasignup.com/register.aspx?did=136546",
  },
  {
    date: "2026-06-24",
    title: "Fun run · Rider Park",
    shortTitle: "Fun run",
    kind: "fun",
    detail: "6:00 pm · Rider Park, Montoursville",
    url: "https://www.facebook.com/groups/MidPennTrailblazers/",
  },
  {
    date: "2026-07-22",
    title: "Fun run · The Sick family farm",
    shortTitle: "Fun run",
    kind: "fun",
    detail: "6:00 pm · The Sick family farm",
    url: "https://www.facebook.com/groups/MidPennTrailblazers/",
  },
  {
    date: "2026-08-12",
    title: "Fun run · Camp Mt. Luther",
    shortTitle: "Fun run",
    kind: "fun",
    detail: "6:00 pm · Camp Mt. Luther",
    url: "https://www.facebook.com/groups/MidPennTrailblazers/",
  },
  {
    date: "2026-08-26",
    title: "Fun run · Camp Mt. Luther",
    shortTitle: "Fun run",
    kind: "fun",
    detail: "6:00 pm · Camp Mt. Luther",
    url: "https://www.facebook.com/groups/MidPennTrailblazers/",
  },
  {
    date: "2026-09-05",
    title: "Dandelion Run",
    shortTitle: "Dandelion Run",
    kind: "race",
    detail: "9:00 am",
    page: "races/dandelion-run.html",
    url: "https://runsignup.com/Race/PA/Mifflinburg/DandelionRun5k10kTrailRace",
  },
  {
    date: "2026-09-09",
    title: "Fun run · R.B. Winter State Park",
    shortTitle: "Fun run",
    kind: "fun",
    detail: "6:00 pm · R.B. Winter State Park",
    url: "https://www.facebook.com/groups/MidPennTrailblazers/",
  },
  {
    date: "2026-09-23",
    title: "Fun run · R.B. Winter State Park",
    shortTitle: "Fun run",
    kind: "fun",
    detail: "6:00 pm · R.B. Winter State Park",
    url: "https://www.facebook.com/groups/MidPennTrailblazers/",
  },
  {
    date: "2026-09-27",
    title: "Dam Half",
    shortTitle: "Dam Half",
    kind: "race",
    detail: "8:00 am · Half marathon and 4-mile-ish trail race",
    page: "races/dam-half.html",
    url: "https://runsignup.com/Race/PA/Mifflinburg/DamHalfDamFullTrailMarathon",
  },
  {
    date: "2026-10-14",
    title: "Fun run · Montour Preserve or Camp Mt. Luther",
    shortTitle: "Fun run",
    kind: "fun",
    detail: "6:00 pm · Location to be confirmed",
    url: "https://www.facebook.com/groups/MidPennTrailblazers/",
  },
  {
    date: "2026-10-28",
    title: "Fun run · Montour Preserve",
    shortTitle: "Fun run",
    kind: "fun",
    detail: "6:00 pm · Montour Preserve, Danville, PA",
    url: "https://www.facebook.com/groups/MidPennTrailblazers/",
  },
  {
    date: "2026-11-11",
    title: "Fun run · Hess Field",
    shortTitle: "Fun run",
    kind: "fun",
    detail: "6:00 pm · Hess Field, Danville, PA",
    url: "https://www.facebook.com/groups/MidPennTrailblazers/",
  },
  {
    date: "2026-12-09",
    title: "Fun run · Buffalo Valley Rail Trail",
    shortTitle: "Fun run",
    kind: "fun",
    detail: "6:00 pm · Buffalo Valley Rail Trail, Mifflinburg, PA",
    url: "https://www.facebook.com/groups/MidPennTrailblazers/",
  },
  {
    date: "2027-01-09",
    title: "Loops of Hope",
    shortTitle: "Loops of Hope",
    kind: "race",
    detail: "R.B. Winter State Park",
    page: "races/loops-of-hope.html",
  },
  {
    date: "2027-02-21",
    title: "Snow Fest",
    shortTitle: "Snow Fest",
    kind: "race",
    detail: "R.B. Winter State Park",
    page: "races/snow-fest.html",
  },
  {
    date: "2027-04-03",
    title: "Night Flight",
    shortTitle: "Night Flight",
    kind: "race",
    detail: "Camp Mt. Luther, Mifflinburg, PA",
    page: "races/night-flight.html",
  },
  {
    date: "2027-09-04",
    title: "Dandelion",
    shortTitle: "Dandelion",
    kind: "race",
    detail: "Camp Mt. Luther, Mifflinburg, PA",
    page: "races/dandelion-run.html",
  },
  {
    date: "2027-01-13",
    title: "Fun run · Camp Mt. Luther",
    shortTitle: "Fun run",
    kind: "fun",
    detail: "6:00 pm · Camp Mt. Luther, Mifflinburg, PA",
    url: "https://www.facebook.com/groups/MidPennTrailblazers/",
  },
  {
    date: "2027-01-27",
    title: "Fun run · Camp Mt. Luther",
    shortTitle: "Fun run",
    kind: "fun",
    detail: "6:00 pm · Camp Mt. Luther, Mifflinburg, PA",
    url: "https://www.facebook.com/groups/MidPennTrailblazers/",
  },
  {
    date: "2027-02-10",
    title: "Fun run · Sick Family Farm",
    shortTitle: "Fun run",
    kind: "fun",
    detail: "6:00 pm · Sick Family Farm, Millville, PA",
    url: "https://www.facebook.com/groups/MidPennTrailblazers/",
  },
  {
    date: "2027-02-24",
    title: "Fun run · Sick Family Farm",
    shortTitle: "Fun run",
    kind: "fun",
    detail: "6:00 pm · Sick Family Farm, Millville, PA",
    url: "https://www.facebook.com/groups/MidPennTrailblazers/",
  },
  {
    date: "2027-03-10",
    title: "Fun run · Camp Mt. Luther",
    shortTitle: "Fun run",
    kind: "fun",
    detail: "6:00 pm · Camp Mt. Luther, Mifflinburg, PA",
    url: "https://www.facebook.com/groups/MidPennTrailblazers/",
  },
  {
    date: "2027-03-24",
    title: "Fun run · Camp Mt. Luther",
    shortTitle: "Fun run",
    kind: "fun",
    detail: "6:00 pm · Camp Mt. Luther, Mifflinburg, PA",
    url: "https://www.facebook.com/groups/MidPennTrailblazers/",
  },
  {
    date: "2027-04-14",
    title: "Fun run · Sick Family Farm",
    shortTitle: "Fun run",
    kind: "fun",
    detail: "6:00 pm · Sick Family Farm, Millville, PA",
    url: "https://www.facebook.com/groups/MidPennTrailblazers/",
  },
  {
    date: "2027-04-28",
    title: "Fun run · Sick Family Farm",
    shortTitle: "Fun run",
    kind: "fun",
    detail: "6:00 pm · Sick Family Farm, Millville, PA",
    url: "https://www.facebook.com/groups/MidPennTrailblazers/",
  },
  {
    date: "2027-05-12",
    title: "Fun run · Montour Preserve",
    shortTitle: "Fun run",
    kind: "fun",
    detail: "6:00 pm · Montour Preserve, Danville, PA",
    url: "https://www.facebook.com/groups/MidPennTrailblazers/",
  },
  {
    date: "2027-05-26",
    title: "Fun run · Montour Preserve",
    shortTitle: "Fun run",
    kind: "fun",
    detail: "6:00 pm · Montour Preserve, Danville, PA",
    url: "https://www.facebook.com/groups/MidPennTrailblazers/",
  },
  {
    date: "2027-06-09",
    title: "Fun run · Milton State Park",
    shortTitle: "Fun run",
    kind: "fun",
    detail: "6:00 pm · Milton State Park, Milton, PA",
    url: "https://www.facebook.com/groups/MidPennTrailblazers/",
  },
  {
    date: "2027-06-23",
    title: "Fun run · Milton State Park",
    shortTitle: "Fun run",
    kind: "fun",
    detail: "6:00 pm · Milton State Park, Milton, PA",
    url: "https://www.facebook.com/groups/MidPennTrailblazers/",
  },
  {
    date: "2027-07-14",
    title: "Fun run · Sick Family Farm",
    shortTitle: "Fun run",
    kind: "fun",
    detail: "6:00 pm · Sick Family Farm, Millville, PA",
    url: "https://www.facebook.com/groups/MidPennTrailblazers/",
  },
  {
    date: "2027-07-28",
    title: "Fun run · Sick Family Farm",
    shortTitle: "Fun run",
    kind: "fun",
    detail: "6:00 pm · Sick Family Farm, Millville, PA",
    url: "https://www.facebook.com/groups/MidPennTrailblazers/",
  },
  {
    date: "2027-08-11",
    title: "Fun run · Camp Mt. Luther",
    shortTitle: "Fun run",
    kind: "fun",
    detail: "6:00 pm · Camp Mt. Luther, Mifflinburg, PA",
    url: "https://www.facebook.com/groups/MidPennTrailblazers/",
  },
  {
    date: "2027-08-25",
    title: "Fun run · Camp Mt. Luther",
    shortTitle: "Fun run",
    kind: "fun",
    detail: "6:00 pm · Camp Mt. Luther, Mifflinburg, PA",
    url: "https://www.facebook.com/groups/MidPennTrailblazers/",
  },
  {
    date: "2027-09-08",
    title: "Fun run · R.B. Winter State Park",
    shortTitle: "Fun run",
    kind: "fun",
    detail: "6:00 pm · R.B. Winter State Park, Mifflinburg, PA",
    url: "https://www.facebook.com/groups/MidPennTrailblazers/",
  },
  {
    date: "2027-09-22",
    title: "Fun run · R.B. Winter State Park",
    shortTitle: "Fun run",
    kind: "fun",
    detail: "6:00 pm · R.B. Winter State Park, Mifflinburg, PA",
    url: "https://www.facebook.com/groups/MidPennTrailblazers/",
  },
  {
    date: "2027-10-13",
    title: "Fun run · Montour Preserve",
    shortTitle: "Fun run",
    kind: "fun",
    detail: "6:00 pm · Montour Preserve, Danville, PA",
    url: "https://www.facebook.com/groups/MidPennTrailblazers/",
  },
  {
    date: "2027-10-27",
    title: "Fun run · Montour Preserve",
    shortTitle: "Fun run",
    kind: "fun",
    detail: "6:00 pm · Montour Preserve, Danville, PA",
    url: "https://www.facebook.com/groups/MidPennTrailblazers/",
  },
  {
    date: "2027-11-10",
    title: "Fun run · Hess Field",
    shortTitle: "Fun run",
    kind: "fun",
    detail: "6:00 pm · Hess Field, Danville, PA",
    url: "https://www.facebook.com/groups/MidPennTrailblazers/",
  },
  {
    date: "2027-12-08",
    title: "Fun run · Buffalo Valley Rail Trail",
    shortTitle: "Fun run",
    kind: "fun",
    detail: "6:00 pm · Buffalo Valley Rail Trail, Mifflinburg, PA",
    url: "https://www.facebook.com/groups/MidPennTrailblazers/",
  },
  {
    date: "2027-09-26",
    title: "Dam Half & Dam 4-Milish",
    shortTitle: "Dam Half & 4-Milish",
    kind: "race",
    detail: "R.B. Winter State Park",
    page: "races/dam-half.html",
  },
];

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const firstCalendarMonth = new Date(2026, 0, 1);
const lastCalendarMonth = new Date(2027, 11, 1);
const today = new Date();
const currentMonth = new Date(today.getFullYear(), today.getMonth(), 1);
let displayedMonth =
  currentMonth < firstCalendarMonth
    ? firstCalendarMonth
    : currentMonth > lastCalendarMonth
      ? lastCalendarMonth
      : currentMonth;

function renderCalendar() {
  const year = displayedMonth.getFullYear();
  const month = displayedMonth.getMonth();
  const monthName = new Intl.DateTimeFormat("en", { month: "long" }).format(
    displayedMonth,
  );
  monthHeading.textContent = `${monthName} ${year}`;
  calendarGrid.replaceChildren();

  weekdays.forEach((weekday) => {
    const heading = document.createElement("div");
    heading.className = "calendar-weekday";
    heading.setAttribute("role", "columnheader");
    heading.setAttribute("aria-label", weekday);
    heading.innerHTML = `<span class="weekday-long">${weekday}</span><span class="weekday-short">${weekday.slice(0, 3)}</span>`;
    calendarGrid.append(heading);
  });

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cellCount = Math.ceil((firstDay + daysInMonth) / 7) * 7;

  for (let index = 0; index < cellCount; index += 1) {
    const dateNumber = index - firstDay + 1;
    const cell = document.createElement("div");
    cell.className = "calendar-day";
    cell.setAttribute("role", "gridcell");

    if (dateNumber < 1 || dateNumber > daysInMonth) {
      cell.classList.add("calendar-day--outside");
      cell.setAttribute("aria-hidden", "true");
    } else {
      const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(dateNumber).padStart(2, "0")}`;
      const dayNumber = document.createElement("span");
      dayNumber.className = "calendar-day-number";
      dayNumber.textContent = String(dateNumber);
      cell.append(dayNumber);

      calendarEvents
        .filter((event) => event.date === dateKey)
        .forEach((event) => {
          const link = document.createElement("a");
          link.className = `calendar-event calendar-event--${event.kind}`;
          link.href = event.page || event.url;
          if (!event.page) {
            link.target = "_blank";
            link.rel = "noreferrer";
          }
          link.textContent = event.shortTitle;
          link.setAttribute("aria-label", `${event.title}, ${event.detail}`);
          link.title = `${event.title} — ${event.detail}`;
          cell.append(link);
        });
    }

    calendarGrid.append(cell);
  }

  previousButton.disabled = displayedMonth <= firstCalendarMonth;
  nextButton.disabled = displayedMonth >= lastCalendarMonth;
}

previousButton.addEventListener("click", () => {
  if (displayedMonth > firstCalendarMonth) {
    displayedMonth = new Date(
      displayedMonth.getFullYear(),
      displayedMonth.getMonth() - 1,
      1,
    );
  }
  renderCalendar();
});

nextButton.addEventListener("click", () => {
  if (displayedMonth < lastCalendarMonth) {
    displayedMonth = new Date(
      displayedMonth.getFullYear(),
      displayedMonth.getMonth() + 1,
      1,
    );
  }
  renderCalendar();
});

renderCalendar();
