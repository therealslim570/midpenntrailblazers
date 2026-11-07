const resultArchive = window.raceResults;

if (!Array.isArray(resultArchive)) {
  throw new Error("The local race results data did not load.");
}

const resultColumns = [
  ["place", "Place"],
  ["bib", "Bib"],
  ["name", "Name"],
  ["age", "Age"],
  ["gender", "Gender"],
  ["city", "City"],
  ["ageGroup", "Age group"],
  ["time", "Time"],
  ["pace", "Pace"],
];

const resultCards = [...document.querySelectorAll(".year-result")];

resultArchive.forEach((event) => {
  const card = resultCards.find(
    (resultCard) => resultCard.href === event.cardUrl,
  );

  if (!card) {
    console.error(`No result card matches ${event.cardUrl}.`);
    return;
  }

  const totalResults = event.tables.reduce(
    (total, table) => total + table.results.length,
    0,
  );
  const details = document.createElement("details");
  details.className = "local-results";

  const summary = document.createElement("summary");
  summary.textContent = `View ${totalResults} local finishers`;
  details.append(summary);

  const content = document.createElement("div");
  content.className = "local-results-content";

  details.append(content);

  const cardItem = document.createElement("div");
  cardItem.className = "year-result-item";
  card.parentNode.insertBefore(cardItem, card);
  cardItem.append(card, details);

  details.addEventListener("toggle", () => {
    cardItem.classList.toggle("is-expanded", details.open);
    if (!details.open || details.dataset.loaded) return;

    event.tables.forEach((resultSet) => {
      const section = document.createElement("section");
      section.className = "local-results-set";

      const heading = document.createElement("h3");
      heading.textContent = `${resultSet.title} (${resultSet.results.length})`;
      section.append(heading);

      if (resultSet.status) {
        const status = document.createElement("p");
        status.className = "local-results-status";
        status.textContent = resultSet.status;
        section.append(status);
      }

      const source = document.createElement("a");
      source.className = "local-results-source";
      source.href = resultSet.sourceUrl;
      source.target = "_blank";
      source.rel = "noreferrer";
      source.textContent = "Official source ↗";
      section.append(source);

      const tableWrap = document.createElement("div");
      tableWrap.className = "local-results-table-wrap";

      const table = document.createElement("table");
      const caption = document.createElement("caption");
      caption.textContent = `${resultSet.results.length} results`;
      table.append(caption);

      const head = document.createElement("thead");
      const headerRow = document.createElement("tr");
      resultColumns.forEach(([, label]) => {
        const cell = document.createElement("th");
        cell.scope = "col";
        cell.textContent = label;
        headerRow.append(cell);
      });
      head.append(headerRow);
      table.append(head);

      const body = document.createElement("tbody");
      resultSet.results.forEach((result) => {
        const row = document.createElement("tr");
        resultColumns.forEach(([key]) => {
          const cell = document.createElement("td");
          cell.textContent = result[key] || "—";
          row.append(cell);
        });
        body.append(row);
      });
      table.append(body);
      tableWrap.append(table);
      section.append(tableWrap);
      content.append(section);
    });

    details.dataset.loaded = "true";
  });
});
