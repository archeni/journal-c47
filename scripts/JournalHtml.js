export const JournalHtml = (entry) => {
  return `
    <section id="entry--${entry.id}" class="journalEntry">
      <div>${entry.concept} on the ${entry.date}</div>
      <div>${entry.entry}</div>
      <div>I felt ${entry.mood} about the project.</div>
    </section>
  `
}