# Mid Penn Trailblazers

A responsive static website for the Mid Penn Trailblazers trail running club, including a month-view event calendar and individual race profiles. The visual identity uses Central Pennsylvania forest tones and blaze-orange trail markers. Built with plain HTML, CSS, and a small amount of JavaScript—no build step or dependencies required.

## Preview locally

Open `index.html` in a browser, or use the VS Code Live Server extension for a local preview.

## Project files

- `index.html` — page structure and club content
- `calendar.html` — dedicated 2026–2027 month-view events calendar
- `calendar.ics` — calendar feed for Apple Calendar and Google Calendar subscriptions
- `results.html` — race results grouped by year, with expandable historic results
- `results-data.js` — locally archived finisher results from the linked timing providers
- `results.js` — renders expandable local finisher tables on the results page
- `races/` — individual profiles for Loops of Hope, Snow Fest, Night Flight, Smith’s Knob Scramble, Dandelion Run, and Dam Half
- `styles.css` — responsive layout, colors, and typography
- `script.js` — accessible mobile navigation and current copyright year
- `calendar.js` — month navigation and calendar event rendering
- `assets/` — locally stored photos, course maps, navigation files, and profile images

The race dates, fun-run schedule, and results were adapted from the legacy club website. Schedules may change; the site directs visitors to the club’s Facebook page to confirm current details. Homepage photography is stored in the repository; fonts continue to load from Google Fonts.

To add results for a new season, add a year section and official timing links to `results.html`, then add the locally archived finisher data to `results-data.js`. Each data entry matches a result-card URL and contains one or more result tables with place, bib, name, age, gender, city, age group, time, and pace fields.

When changing calendar events in `calendar.js`, update `calendar.ics` as well. The downloadable iCalendar file uses all-day entries to avoid assuming event durations; listed event times and locations are included in each event’s details. iOS and calendar apps that support `.ics` imports can open the download. Google Calendar’s Android app does not import downloaded `.ics` files; import it in Google Calendar on a computer, then sync the account to Android.