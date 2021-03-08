const journal = [
  {
    id: 1,
    date: "02/19/2021",
    concept: "HTML components",
    entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
    mood: "good"
  },
  {
    id: 2,
    date: "02/23/2021",
    concept: "Javascript",
    entry: "We talked about basic Javascript and getting html to show through it.",
    mood: "good"
  },
  {
    id: 3,
    date: "03/3/2021",
    concept: "JAvascript modules",
    entry: "We learned to have multiple js files that focus on one thing",
    mood: "good"
  }
]

/*
  You export a function that provides a version of the
  raw data in the format that you want
*/
export const getJournalEntries = () => {
  const sortedByDate = journal.sort(
    (currentEntry, nextEntry) =>
      Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
  )
  return sortedByDate
}