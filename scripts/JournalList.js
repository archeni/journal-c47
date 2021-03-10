import { getJournalEntries } from "./JournalData.js";
import { JournalHtml } from "./JournalHtml.js";

export const addJournalDom = () => {
  const journalElement = document.querySelector(".journal");
  let journalHTMLRep = "<h3>Entries</h3>";
  const journalArray = getJournalEntries();
  for (const journal of journalArray) {
    journalHTMLRep += JournalHtml(journal)
  }
  journalElement.innerHTML = journalHTMLRep;
};