# Mid Penn Trailblazers

A responsive static website for the Mid Penn Trailblazers trail running club, including a month-view event calendar and individual race profiles. The visual identity uses Central Pennsylvania forest tones and blaze-orange trail markers. Built with plain HTML, CSS, and a small amount of JavaScript—no build step or dependencies required.

## Preview locally

Open `index.html` in a browser, or use the VS Code Live Server extension for a local preview.

## Project files

- `index.html` — page structure and club content
- `calendar.html` — dedicated 2026 month-view events calendar
- `results.html` — race results grouped by year, with expandable historic results
- `races/` — individual profiles for Loops of Hope, Snow Fest, Night Flight, Smith’s Knob Scramble, Dandelion Run, and Dam Half
- `styles.css` — responsive layout, colors, and typography
- `script.js` — accessible mobile navigation and current copyright year
- `calendar.js` — month navigation and calendar event rendering
- `assets/` — locally stored homepage background photos

The race dates, fun-run schedule, and results were adapted from the legacy club website. Schedules may change; the site directs visitors to the club’s Facebook page to confirm current details. Homepage photography is stored in the repository; fonts continue to load from Google Fonts.

To add results for a new season, add a year section to `results.html` and link each posted result to its official timing provider.