import intro from './intro.json';

function chunks(text: string, sizes: number[]) {
  const words = text.split(/\s+/);
  let offset = 0;
  return sizes.map((size) => {
    const chunk = words.slice(offset, offset + size).join(' ');
    offset += size;
    return chunk;
  });
}

const psychologyText = intro.boredom.paragraphs[0];
const psychologyCitation = psychologyText.match(
  /\((Westgate & Wilson 2018; Eastwood et al\. 2012);/
);
const formulaMatch = intro.boredom.paragraphs[2].match(/\((B = [^)]+)\)/);
const eventSummary = intro.event.summary.split('): ').at(-1);

if (!psychologyCitation || !formulaMatch || !eventSummary) {
  throw new Error('The embedded intro.json is missing required demo copy.');
}

export const hookParts = chunks(intro.replay.title, [7, 7, 4]);
export const hookTag = 'tongue-in-cheek headline — real results follow';
export const eventLine = `${intro.event.title} · ${intro.event.dates} · hosted by ${intro.event.host}`;
export const eventSummaryParts = chunks(
  `Built in one weekend: ${eventSummary.replace(/ and changes approach\.$/, '.')}`,
  [8, 6]
);
export const toolCards = [
  `Thinking Machines ${intro.tools.find((tool) => tool.kind === 'llm')!.tinkerName} — Kimi K3.1 Pro runs every researcher`,
  `${intro.tools.find((tool) => tool.kind === 'exa')!.name} — searches prior work and public datasets`,
  `${intro.tools.find((tool) => tool.kind === 'memory')!.name} — shared memory across the swarm`,
  `${intro.tools.find((tool) => tool.name === 'Devin')!.name} — built and tested the swarm, Lab and site`
];
export const authorNames = intro.authors.names;
const psychologyLine = psychologyText
  .replace('is not laziness. It is', "isn't laziness — it's")
  .replace(/ and that it is time to look for something new.*$/, '.');
export const psychologyParts = [
  "In psychology, boredom isn't laziness —",
  psychologyLine.replace("In psychology, boredom isn't laziness — ", ''),
  `(${psychologyCitation[1]}).`
];
export const boredomLead = 'We turned it into a number that steers the swarm:';
export const boredomFormula = formulaMatch[1];
export const boredomConclusion = 'Deterministic from the ledger — any agent can recompute it.';
