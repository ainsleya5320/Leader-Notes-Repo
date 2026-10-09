// ============================================================
// TEMPERAMENT — the Rubenzer facet profile
// ============================================================
// After Rubenzer, Faschingbauer & Ones, "Personality, Character,
// and Leadership in the White House" (2004), which had presidential
// biographers complete NEO-PI-R instruments on their subjects and
// then regressed historical greatness ratings on the results.
// Nine facets survived as the assets-and-liabilities profile,
// reproduced here in the book's own order and grouping (Chart 12.2).
//
// SCALE: percentile against U.S. PRESIDENTS — not the general
// population. The reference class is already extraordinary, so a
// 50 here is the median of people who became president. Two facets
// are reverse-coded by the model, because the trait that predicts
// greatness is the absence of the thing: "Not Vulnerable" (low
// neurotic vulnerability) and "Not Straightforward" (low candour).
//
// SOURCING — every entry is marked:
//   published  values read off the book's own published charts.
//              Only Theodore Roosevelt here; treat as the anchor
//              the other profiles are calibrated against.
//   user       your own assessments, kept in your words.
//   estimate   mine, in the same framework. Ranges are real
//              disagreement among historians, not decoration —
//              wide bands mean the scholarship is genuinely split.
//
// NOT SCOREABLE: many leaders in this index cannot be responsibly
// scored. Facet-level personality inference needs letters, reported
// speech, eyewitness description of behaviour under stress. For
// Hammurabi, Mansa Musa or Attila we have monuments and hostile
// summaries. Those leaders are listed in UNSCOREABLE below with
// the reason, which is itself information about the record.
// ============================================================

window.RUBENZER_GROUPS = [
  { key: "achievement", label: "Achievement Potential", blurb: "the engine — how hard, how capably, and how cleverly they drove",
    note: "The four facets that describe capacity for work. They are separable in ways people routinely conflate: you can be driven and slow (Augustus), frantic and aimless, or brilliant and idle (Taft). Treat a high group score as the raw horsepower, and the Leadership group as the transmission." },
  { key: "leadership", label: "Leadership & Influence", blurb: "the operating temperament — nerve, dominance, and willingness to dissemble",
    note: "The three facets that decide whether the engine reaches the ground. This group carries the model's most uncomfortable finding: low candour tracks *with* greatness ratings, not against them." },
  { key: "misc", label: "Misc. Assets", blurb: "the social register — warmth outward, and whether suffering registered",
    note: "The two facets with the weakest predictive relationship to greatness and the strongest relationship to whether you would want to be governed by the person. The gap between those two things is the most interesting fact the model produces." }
];

window.RUBENZER_FACETS = [
  { key: "ach", short: "Achieve. Striving", name: "Achievement Striving", group: "achievement", neo: "C4 · Conscientiousness",
    def: "Ambition with a direction attached — the need to set demanding goals and drive at them without being asked. The most consistent single correlate of greatness ratings in the presidential data, and the facet that most reliably separates the remembered from the merely elected.",
    adjHigh: ["driven", "purposeful", "ambitious", "industrious", "enterprising", "aspiring", "unrelenting"],
    adjLow: ["complacent", "unambitious", "easygoing", "contented", "aimless", "unhurried", "satisfied"],
    high: "Cannot leave a thing unfinished; treats the office as a set of problems rather than a position.",
    low: "Content to hold the job rather than to use it; occupies rather than pursues.",
    misread: "Constantly confused with Activity. Striving is *direction*; Activity is *tempo*. Augustus is high-striving and only moderately active; a frantic administrator with no objective is the reverse." },

  { key: "com", short: "Competence", name: "Competence", group: "achievement", neo: "C1 · Conscientiousness",
    def: "Self-efficacy — the settled belief that one is capable, prepared and equal to the situation. Note carefully what this measures: the conviction, not the capability. The two usually travel together, which is exactly why the cases where they part company are so destructive.",
    adjHigh: ["assured", "capable", "efficient", "prepared", "sensible", "resourceful", "unhesitating"],
    adjLow: ["hesitant", "unsure", "unprepared", "self-doubting", "tentative", "deferential", "second-guessing"],
    high: "Trusts their own judgement, and is usually right enough for the habit to survive.",
    low: "Defers to expertise, revisits decisions, needs the room's agreement.",
    misread: "Mistaken for demonstrated skill. It is the belief, which can run ahead of the evidence — Napoleon in 1812 and Bush on Iraq intelligence are both high-Competence readings, and that is the point rather than a flaw in the scoring." },

  { key: "act", short: "Activity", name: "Activity", group: "achievement", neo: "E4 · Extraversion",
    def: "Sheer pace and output — hours worked, ground covered, things simultaneously in hand. The most physically observable facet, and the one contemporaries record most reliably, because everyone around a high-Activity leader is exhausted and says so.",
    adjHigh: ["energetic", "vigorous", "tireless", "brisk", "restless", "rapid", "prolific"],
    adjLow: ["leisurely", "languid", "unhurried", "placid", "sedentary", "measured", "conserving"],
    high: "Generates more output than subordinates can absorb; the bottleneck is everyone else.",
    low: "Paces themselves, delegates by necessity or temperament, and sleeps.",
    misread: "Treated as a proxy for seriousness. Reagan sits near the floor and is highly rated; Coolidge slept eleven hours a day on principle. High Activity is an asset, not a requirement." },

  { key: "int", short: "Intell. & Smart", name: "Intellectual Brilliance", group: "achievement", neo: "O5 · Openness to Ideas, with rated intelligence",
    def: "Curiosity plus horsepower — appetite for ideas, abstraction, argument and revision, combined with the raw intellect to act on it. Rubenzer's team blended openness to ideas with biographer-rated intelligence, which is why the facet catches both the thinker and the quick study.",
    adjHigh: ["curious", "analytical", "inventive", "wide-ranging", "theoretical", "quick", "revisionary"],
    adjLow: ["incurious", "concrete", "conventional", "practical", "narrow", "impatient with theory", "unreflective"],
    high: "Reads, argues, and changes their mind on evidence; interested in ideas beyond their use.",
    low: "Wants the answer, not the reasoning; bored by abstraction.",
    misread: "Confused with education. Akbar was probably dyslexic and scores near the top; Genghis was illiterate and scored well above several university-trained presidents. Schooling is not the variable." },

  { key: "nvul", short: "Not Vulnerable", name: "Not Vulnerable (low neurotic vulnerability)", group: "leadership", neo: "N6 · Neuroticism, reverse-coded",
    def: "Composure under load — the absence of panic, paralysis or collapse when the situation turns. Reverse-coded, so a high score means low vulnerability. This is the facet most often *revealed* rather than developed: it stays invisible until the week everything goes wrong.",
    adjHigh: ["composed", "unflappable", "steady", "resilient", "stoic", "clear-headed", "imperturbable"],
    adjLow: ["panicky", "overwhelmed", "brittle", "despairing", "paralysed", "rattled", "dependent in crisis"],
    high: "Cold at the worst moment; the decision still gets made on schedule.",
    low: "Freezes, breaks down, or is consumed by the strain and stops functioning.",
    misread: "Confused with courage. It is not about fearlessness but about not being *overwhelmed* — Lincoln's documented melancholy sits beside four years of war conducted without collapse, which is why his band is wide rather than low." },

  { key: "ass", short: "Assertiveness", name: "Assertiveness", group: "leadership", neo: "E3 · Extraversion",
    def: "Social dominance — taking charge of a room, a cabinet or a country without waiting to be invited. Distinct from both aggression and effectiveness: it measures the impulse to lead from the front, not whether doing so works.",
    adjHigh: ["dominant", "forceful", "commanding", "take-charge", "decisive", "confrontational", "imposing"],
    adjLow: ["retiring", "deferential", "self-effacing", "reticent", "yielding", "consultative", "persuaded"],
    high: "Assumes command by default and is surprised when others don't defer.",
    low: "Waits to be asked; wins by argument, alliance or attrition instead.",
    misread: "Equated with effectiveness. Jefferson scored low, avoided confrontation, spoke rarely in public, and doubled the size of the country. Merkel is the modern demonstration that a low score can be a deliberate strategy." },

  { key: "nstr", short: "Not Straightforward", name: "Not Straightforward (low candour)", group: "leadership", neo: "A2 · Agreeableness, reverse-coded",
    def: "Willingness to manipulate, flatter, conceal and mislead in pursuit of an end. Reverse-coded, so a high score means low candour. This is the model's most uncomfortable result and it is not an artefact: in the presidential data, guile tracks *with* greatness ratings.",
    adjHigh: ["calculating", "guileful", "politic", "opaque", "flattering", "devious", "managed"],
    adjLow: ["frank", "candid", "blunt", "transparent", "plain-dealing", "ingenuous", "artless"],
    high: "The record is curated; what is said is chosen for its effect rather than its accuracy.",
    low: "Says the inconvenient thing, including when it costs them the room.",
    misread: "Read as a moral score. It is not a measure of lying so much as of comfort with instrumental communication — and the model's finding is that democratic politics rewards it. Marcus Aurelius near the floor and Clinton near the ceiling is a fact about the scale, not a verdict on the men." },

  { key: "pos", short: "Positive Emotions", name: "Positive Emotions", group: "misc", neo: "E6 · Extraversion",
    def: "Dispositional cheerfulness — zest, buoyancy, the visible capacity for enjoyment. The warmth that makes people want to be in the room, and that survives contact with bad news.",
    adjHigh: ["cheerful", "buoyant", "zestful", "high-spirited", "enthusiastic", "convivial", "warm"],
    adjLow: ["sober", "flat", "grave", "undemonstrative", "dour", "brooding", "joyless"],
    high: "Enjoys the job and shows it; magnetic in person, and it is not manufactured.",
    low: "Grim, or simply absent — the work is performed rather than relished.",
    misread: "Confused with likeability or with policy optimism. It is temperament, not popularity: Harding was enormously likeable and near the ceiling here while scoring in the bottom quartile on almost everything else." },

  { key: "ten", short: "Tender-Mindedness", name: "Tender-Mindedness", group: "misc", neo: "A6 · Agreeableness",
    def: "Sympathy — whether the human cost of a decision registers *as* a cost. The facet where the great and the monstrous diverge most cleanly, and the one with the weakest relationship to greatness ratings, which is itself worth sitting with.",
    adjHigh: ["compassionate", "sympathetic", "humane", "merciful", "soft-hearted", "moved by suffering"],
    adjLow: ["hard-headed", "unsentimental", "ruthless", "callous", "indifferent", "cost-blind"],
    high: "The bill in lives is felt and counted before it is paid.",
    low: "Costs are arithmetic; people are inputs to a calculation.",
    misread: "Confused with policy positions or with softness. It is dispositional sympathy and coexists comfortably with hard policy — Lincoln pardoned deserters at a rate that infuriated his generals while prosecuting the bloodiest war in American history." }
];

// Leaders the record cannot support at facet level, with the reason.
window.UNSCOREABLE = {
  hammurabi: "A law code, a stele and administrative letters. No reported speech, no eyewitness on temperament.",
  ramesses2: "Monumental self-presentation almost exclusively. The temple walls describe a persona, not a person.",
  cyrus: "Xenophon's Cyropaedia is a didactic fiction and Herodotus is a story-collector. The man is unrecoverable behind the model prince.",
  darius1: "The Behistun inscription is a legitimacy document. Little else in his own voice.",
  chandragupta: "Known chiefly through Kautilya's treatise and much later legend.",
  ashoka: "The edicts are extraordinary evidence of stated values and almost none of temperament under stress.",
  caocao: "Better documented than most here — poems survive — but the Three Kingdoms novel has contaminated the record beyond separation.",
  attila: "Priscus gives one banquet. Everything else is hostile summary.",
  kublai: "Substantial administrative record, thin personal one; Marco Polo is not a witness to interiority.",
  timur: "Chronicles written for him or against him, with nothing in between.",
  shaka: "The oral tradition was collected late and heavily shaped by Ritter's romance.",
  alfred: "Asser is a court biography written to a hagiographic template.",
  william1: "Deeds are exceptionally well recorded; inner life is not.",
  eleanor: "Most of the personal record is later invention.",
  louis9: "Joinville is a real eyewitness, which makes him a borderline case — arguably scoreable, but on one friendly source.",
  mansamusa: "The hajj is recorded by Egyptian chroniclers describing a spectacle, not a man.",
  frederick2: "Rich record, but Kantorowicz's mythologising sits on top of most of it.",
  harun: "The Thousand and One Nights has effectively overwritten the historical caliph.",
  nzinga: "Portuguese sources are hostile and interested; the internal record is oral.",
  menelik2: "Adwa is well documented; the temperament is not.",
  meiji: "Deliberately screened by the genrō. Keene's biography documents a man kept opaque by design.",
  hochiminh: "Decades of assumed names and constructed persona; the ascetic image was itself the instrument.",
  nkrumah: "Scoreable in principle from his own writings, but the record is thin on behaviour under stress.",
  goh: "Living, and the record is institutional rather than personal.",
  abe: "Well documented publicly, but Japanese political convention keeps the interior life largely private.",
  robertbruce: "Barbour's Brus is a verse romance composed two generations later."
};

// ============================================================
// THE PROFILES
// f: [low, high] percentile bands. notes: evidence where it matters.
// ============================================================

window.TEMPERAMENT = {

  // ---------------- the published anchor ----------------
  troosevelt: {
    source: "published", era_note: "Read from Chart 12.2 of Rubenzer & Faschingbauer (2004).",
    profile: "The book's own worked example, and the calibration point for every other profile here. A ceiling-level Activity score, near-ceiling Assertiveness and Positive Emotions, and one conspicuous dip.",
    f: { ach: [94, 98], com: [80, 84], act: [98, 100], int: [83, 87], nvul: [88, 92], ass: [97, 100], nstr: [60, 64], pos: [96, 100], ten: [40, 44] },
    notes: {
      act: "At or above the presidential ceiling — the chart puts him at 100. Everything later in this file that claims a 98+ on Activity is claiming parity with TR, which should be a high bar.",
      nstr: "Only ~62, which is the interesting number: markedly more candid than the Kennedys, Johnsons and Clintons of the distribution, and still above the presidential median.",
      ten: "~42, plotted as a liability in the original chart. The trust-busting progressive was also the man who relished San Juan Hill."
    }
  },

  // ---------------- your own assessments ----------------
  napoleon: {
    source: "user",
    profile: "Less a profile than a series of clipped data points. The wide bands are a real split between admirers (Roberts) and sceptics (Zamoyski, Englund) — and partly a disagreement about which Napoleon is being scored.",
    contested: "Rate him by era. Bonaparte 1796–1807 would score higher on stress resistance, competence and judgement than the Emperor of 1810–15, when illness, weight and the habit of never being contradicted had set in.",
    f: { ach: [98, 99], com: [93, 99], act: [98, 99], int: [88, 99], nvul: [70, 95], ass: [98, 99], nstr: [92, 99], pos: [40, 75], ten: [10, 35] },
    notes: {
      act: "16–18 hour days, tens of thousands of letters, dictation to several secretaries at once. By comparison TR looks like he was napping.",
      nvul: "The widest real split. Ice-calm at Lodi, Arcole and Austerlitz; but he nearly fumbled Brumaire before a hostile chamber, attempted suicide at Fontainebleau, and was oddly lethargic at Waterloo — illness or nerves is still argued.",
      nstr: "Maxed. The bulletins were so reliably spun that 'to lie like a bulletin' entered the language; the religious positioning ran from a Muslim-friendly posture in Egypt to the Concordat.",
      ten: "Metternich reports him saying he cared little for a million men's lives — a hostile source, but plausible. The high end credits meritocracy, legal equality under the Code, and Jewish emancipation in conquered territory; sceptics say those served order and state power rather than compassion."
    }
  },

  jcaesar: {
    source: "user",
    profile: "Napoleon with better social skills and worse personal security. One caveat contaminates everything: much of the evidence is his own Commentaries, so the high Not-Straightforward score partly infects every other rating.",
    contested: "Tender-mindedness is the real fight. The fair answer may be that he was tender-minded toward Romans and indifferent toward everyone else.",
    f: { ach: [98, 99], com: [95, 99], act: [97, 99], int: [92, 99], nvul: [85, 97], ass: [97, 99], nstr: [85, 98], pos: [70, 95], ten: [25, 60] },
    notes: {
      com: "Captured by pirates, he demanded they raise his ransom and promised to crucify them, then did exactly that. Self-efficacy bordering on performance art.",
      nvul: "Composed at the pirate episode, at Alesia with enemies inside and outside his lines, and at the Rubicon. The dents are Dyrrachium and the remark after Munda that he had fought for his life rather than for victory. Steadier across a career than Napoleon.",
      pos: "His clearest advantage over Napoleon — witty, convivial, lavishly generous, genuinely loved by his soldiers. The sources describe a man who enjoyed being Caesar.",
      ten: "High end: the clementia, pardoning Brutus and Cassius, and popular policy on land, grain and debt. Low end: Gaul. Pliny passes on Caesar's own figure of over a million killed; the hands cut off at Uxellodunum; the Usipetes and Tencteri massacre that made Cato propose handing him to the enemy. Cicero privately called the clemency insidiosa."
    }
  },

  // ---------------- ancients ----------------
  alexander: {
    source: "estimate",
    profile: "The purest achievement-striving profile in the index and the least regulated. Everything in the engine group is at ceiling; everything that would have restrained it is missing.",
    contested: "The sources are late (Arrian and Plutarch write four centuries on) and split between a Hellenising hero and an increasingly paranoid drunk. The Not-Vulnerable and Tender-Mindedness bands carry that split.",
    f: { ach: [98, 99], com: [95, 99], act: [95, 99], int: [75, 92], nvul: [60, 90], ass: [98, 99], nstr: [55, 80], pos: [60, 85], ten: [15, 45] },
    notes: {
      int: "Aristotle's pupil, and he carried the Iliad on campaign — but his curiosity was appetitive rather than analytic, and the Persian-dress experiment was political rather than intellectual.",
      nvul: "The low end is real: the murder of Cleitus in a drunken rage, the days of collapse after Hephaestion's death, and the mutiny at the Hyphasis where he sulked in his tent for three days.",
      ten: "Shared his men's wounds and hunger, which is genuine; also razed Thebes, crucified the defenders of Tyre and burned Persepolis."
    }
  },

  augustus: {
    source: "estimate",
    profile: "The index's most important low-flamboyance profile. Moderate on the showy facets and extreme on the two that actually compound — patience and calculation — which is why he beat both Caesar and Napoleon on the only metric that includes dying in bed.",
    f: { ach: [90, 97], com: [88, 96], act: [70, 88], int: [65, 85], nvul: [90, 98], ass: [80, 92], nstr: [95, 99], pos: [30, 55], ten: [15, 40] },
    notes: {
      nstr: "Near the ceiling and arguably above Napoleon. The Res Gestae is a masterpiece of misdirection, and the entire principate was absolute power described as restored liberty. He is the model case for the model's uncomfortable finding.",
      act: "Deliberately lower than Caesar or Napoleon — chronically ill, frequently absent, and content to let Agrippa do the work. Durability was purchased partly with conserved energy.",
      pos: "Cold and reserved by every account, with a reputation for cruelty in youth that he spent forty years editing out. Not a man anyone describes as warm."
    }
  },

  marcusaurelius: {
    source: "estimate",
    profile: "The inverse of nearly every other high scorer here — the Meditations give us the only leader in the index whose private self-assessment survives, and it is one long argument against his own vulnerability.",
    contested: "The Meditations are evidence of values and of effort, not necessarily of achieved temperament. A man who writes that much about staying calm may be telling us he found it hard.",
    f: { ach: [55, 75], com: [60, 80], act: [60, 80], int: [90, 98], nvul: [70, 92], ass: [50, 72], nstr: [10, 30], pos: [15, 40], ten: [80, 95] },
    notes: {
      nstr: "Near the floor, and the clearest low score in this file. A ruler who privately rehearsed honesty as a discipline and left the record to prove it — which by Rubenzer's model is a liability, and is exactly why the model makes people uncomfortable.",
      ten: "The highest tender-mindedness of any ruler scored here: extended the courts to slaves, sold imperial treasure rather than raise war taxes, pardoned the family of a usurper.",
      pos: "Low. The Meditations are not a cheerful document; duty is performed, not enjoyed."
    }
  },

  cleopatra: {
    source: "estimate",
    profile: "Scored almost entirely through hostile Roman sources, which systematically coded a competent Hellenistic monarch as a seductress. The bands are wide because the correction is contested.",
    f: { ach: [85, 96], com: [82, 95], act: [75, 90], int: [85, 96], nvul: [70, 90], ass: [85, 96], nstr: [80, 95], pos: [70, 92], ten: [30, 60] },
    notes: {
      int: "Reportedly spoke nine languages and was the first of her dynasty to learn Egyptian; wrote or sponsored technical works. The Roman caricature obscures a formidably educated administrator.",
      nstr: "The staged arrival in the carpet, the barge at Tarsus, the pearl dissolved in vinegar — self-presentation as statecraft, though the anecdotes are Roman and may be invention."
    }
  },

  hannibal: {
    source: "estimate",
    profile: "Sustained a multi-ethnic army in enemy territory for fifteen years on personal credibility alone, which is the single most demanding leadership feat in the index. Scored through Roman sources that respected him.",
    f: { ach: [92, 98], com: [90, 97], act: [85, 95], int: [80, 93], nvul: [88, 97], ass: [88, 96], nstr: [88, 97], pos: [30, 60], ten: [25, 55] },
    notes: {
      nstr: "Livy makes deception his signature — the oxen with burning horns at Ager Falernus, the feigned retreats, the ambush at Trasimene. Roman writers called it Punic faith and meant it as an insult.",
      nvul: "Fifteen years without reinforcement or a secure base, ending in exile and suicide by poison to avoid capture. The composure is not in doubt."
    }
  },

  pericles: {
    source: "estimate",
    profile: "The only leader here whose power depended on annual re-election by an assembly that could exile him, which caps Assertiveness structurally and pushes everything into the persuasion register.",
    f: { ach: [80, 92], com: [82, 94], act: [70, 88], int: [88, 97], nvul: [80, 94], ass: [78, 90], nstr: [60, 85], pos: [35, 60], ten: [45, 70] },
    notes: {
      int: "The circle around him — Anaxagoras, Protagoras, Phidias, Herodotus — is the densest intellectual milieu any leader in this index moved in.",
      pos: "Plutarch stresses his gravity and remoteness: he was seen to laugh rarely and took no part in ordinary sociability. Olympian rather than warm."
    }
  },

  qinshihuang: {
    source: "estimate",
    profile: "Scored with an explicit warning: the record is overwhelmingly Han-dynasty and written to justify the succeeding regime. The extremity may be partly editorial.",
    contested: "Sima Qian wrote a century later for a dynasty whose legitimacy required the Qin to have been monstrous. The bands are wide accordingly.",
    f: { ach: [95, 99], com: [85, 96], act: [88, 97], int: [55, 80], nvul: [55, 80], ass: [96, 99], nstr: [70, 90], pos: [10, 35], ten: [2, 15] },
    notes: {
      act: "Reportedly weighed his daily documents and refused sleep until he had processed a fixed weight of them — the original micromanaging workaholic.",
      ten: "The lowest band in the file alongside Timur and Hitler. Burning the books, burying the scholars, and the Great Wall's mortality rate; the late obsession with immortality suggests fear rather than sympathy.",
      nvul: "Multiple assassination attempts produced escalating paranoia — moving nightly between palaces, concealing his location. Composure under threat was not his register."
    }
  },

  // ---------------- warlords & medieval ----------------
  genghis: {
    source: "estimate",
    profile: "The Secret History gives unusually direct access for a steppe conqueror, and what it shows is a systems-builder rather than a berserker: rule-bound, loyal to loyalty, and startlingly unsentimental about kin.",
    f: { ach: [95, 99], com: [92, 98], act: [88, 96], int: [65, 88], nvul: [88, 97], ass: [96, 99], nstr: [50, 75], pos: [40, 70], ten: [10, 35] },
    notes: {
      nstr: "Lower than most conquerors here, and deliberately so: his word was an instrument. He executed men who betrayed their own lords even when the betrayal helped him, which only works if the rule is known to be real.",
      int: "Illiterate, and yet adopted the Uyghur script, took Yelü Chucai's advice to tax rather than pillage, and questioned foreign clerics about their doctrines. Curiosity without literacy.",
      ten: "Toward his own, high; toward the resisting cities, the annihilation of Nishapur and Urgench was policy."
    }
  },

  nobunaga: {
    source: "estimate",
    profile: "Japanese and Jesuit sources converge on a man who was genuinely strange to his contemporaries — contemptuous of convention, fascinated by novelty, and casually lethal.",
    f: { ach: [92, 98], com: [88, 96], act: [85, 95], int: [75, 92], nvul: [80, 94], ass: [95, 99], nstr: [70, 90], pos: [40, 70], ten: [3, 20] },
    notes: {
      int: "Massed arquebuses at Nagashino, freed the markets, wore European clothes and kept an African retainer. Luís Fróis found him unusually willing to be argued with.",
      ten: "Near the floor. The burning of Enryaku-ji killed thousands of non-combatants; the Ikkō-ikki campaigns were extermination. Even allies found the cruelty excessive."
    }
  },

  justinian: {
    source: "estimate",
    profile: "Uniquely well documented for the period, and uniquely contaminated: Procopius wrote both the official panegyric and the Secret History, which calls him a demon in human form. The bands hold that gap.",
    contested: "Every facet here is bracketed by Procopius's two mutually exclusive portraits.",
    f: { ach: [92, 98], com: [70, 90], act: [92, 99], int: [75, 92], nvul: [45, 78], ass: [75, 92], nstr: [80, 95], pos: [20, 50], ten: [15, 45] },
    notes: {
      act: "'The emperor who never sleeps' — contemporaries reported him walking the palace at night. Codified all Roman law, rebuilt Hagia Sophia and attempted the reconquest of the West in one reign.",
      nvul: "The low band is the Nika riots, when he had packed to flee and was stopped by Theodora's refusal — the single most consequential recorded instance of a ruler's nerve failing and a consort's holding."
    }
  },

  charlemagne: {
    source: "estimate",
    profile: "Einhard is a court biography on a Suetonian template, so the warmth may be convention. What survives independently is the scale of the administrative effort and the Saxon campaigns.",
    f: { ach: [88, 96], com: [82, 94], act: [85, 95], int: [70, 88], nvul: [82, 94], ass: [88, 96], nstr: [45, 70], pos: [60, 85], ten: [25, 55] },
    notes: {
      int: "Collected scholars, tried to learn to write in later life and reportedly kept tablets under his pillow, drove the Carolingian renaissance — genuine intellectual appetite without formal training.",
      ten: "The Massacre of Verden, where 4,500 Saxon captives were reportedly beheaded in a day, sits against the alms, the famine relief and the missi sent to police his own officials."
    }
  },

  saladin: {
    source: "estimate",
    profile: "The rare case where hostile sources are the flattering ones — Crusader chroniclers built the chivalric legend, and Arabic sources are more measured about his political ruthlessness.",
    f: { ach: [80, 92], com: [78, 92], act: [70, 88], int: [65, 85], nvul: [82, 94], ass: [75, 90], nstr: [40, 65], pos: [65, 88], ten: [80, 95] },
    notes: {
      ten: "Among the highest here and unusually well evidenced: ransoms waived at Jerusalem in deliberate contrast to 1099, ice and doctors sent to Richard, and a treasury too empty at his death to pay for his funeral.",
      nstr: "Notably low for a successful conqueror. His reputation for keeping terms was strategically valuable precisely because it was reliable — cities surrendered expecting to be spared."
    }
  },

  taizong: {
    source: "estimate",
    profile: "The Zhenguan Zhengyao records his court debates in unusual detail, and the portrait it gives is of a man who engineered his own contradiction — an autocrat who institutionalised being told he was wrong.",
    contested: "He pressured the court diarists to let him read and shape the record, so the most admired reign in Chinese history is also one of its most carefully edited.",
    f: { ach: [90, 97], com: [88, 96], act: [85, 95], int: [85, 95], nvul: [85, 95], ass: [90, 97], nstr: [65, 88], pos: [55, 78], ten: [55, 80] },
    notes: {
      int: "Sustained genuine intellectual exchange with Wei Zheng and Fang Xuanling across decades, and the debates recorded are substantive rather than ceremonial.",
      ten: "Mid-to-high and genuinely puzzling next to the Xuanwu Gate, where he killed both brothers. Repeated review of capital sentences and a deliberately lenient code against a fratricidal seizure of power.",
      nstr: "The editing of his own historical record is the main evidence for a high score — a man managing posterity in real time."
    }
  },

  // ---------------- renaissance & early modern ----------------
  mehmed2: {
    source: "estimate",
    profile: "A conqueror at twenty-one who was also a genuine polymath, and whose cruelty was administrative rather than hot-tempered.",
    f: { ach: [93, 98], com: [88, 96], act: [82, 94], int: [82, 95], nvul: [85, 95], ass: [93, 98], nstr: [75, 92], pos: [35, 65], ten: [10, 35] },
    notes: {
      int: "Read Greek and Latin, commissioned Gentile Bellini's portrait, collected classical texts, and reportedly had Ptolemy's Geography translated. The most intellectually serious of the great conquerors.",
      ten: "Codified fratricide as state policy — a new sultan's brothers legally killed to prevent civil war. Cruelty as legislation rather than temper."
    }
  },

  cesareborgia: {
    source: "estimate",
    profile: "Scored with the loudest caveat in the file: our main witness is Machiavelli, who was building a theory and needed an exemplar. The man may be partly a literary construction.",
    contested: "Almost everything vivid about him comes from a writer with a thesis. Burckhardt amplified it; modern historians find a more conventional and less demonic condottiere.",
    f: { ach: [88, 97], com: [80, 95], act: [82, 94], int: [65, 88], nvul: [78, 93], ass: [92, 98], nstr: [95, 99], pos: [30, 60], ten: [2, 18] },
    notes: {
      nstr: "At the ceiling. The Senigallia trap — luring his mutinous captains to a friendly conference and strangling them — is the single most economical act of deception in the index.",
      ten: "Remirro de Orco cut in two and displayed in the piazza with a block and a bloody knife, to leave the people 'satisfied and stupefied'."
    }
  },

  elizabeth1: {
    source: "estimate",
    profile: "The most sophisticated use of deliberate ambiguity in the index, sustained for forty-five years. High on everything that serves delay and low on everything that forces a decision.",
    f: { ach: [70, 88], com: [78, 92], act: [65, 85], int: [85, 96], nvul: [75, 92], ass: [80, 93], nstr: [90, 98], pos: [60, 85], ten: [45, 72] },
    notes: {
      nstr: "'Video et taceo' as an explicit governing doctrine. She kept suitors, parliaments and Spain guessing for four decades; the marriage negotiations were conducted in earnest with men she never intended to marry.",
      int: "Fluent in six languages, translated Boethius for pleasure, and out-argued her own bishops. Among the best-educated rulers here.",
      ach: "Deliberately lower than the conquerors: her strategic instinct was to defer, underspend and survive, which is achievement of a kind the facet does not reward."
    }
  },

  henry8: {
    source: "estimate",
    profile: "A profile that shifts more across a single reign than any other here — the accomplished Renaissance prince of 1515 and the paranoid invalid of 1542 are barely the same instrument.",
    contested: "The 1536 jousting accident and subsequent decline are increasingly treated as a genuine inflection point; scoring the whole reign averages two different men.",
    f: { ach: [65, 88], com: [70, 90], act: [55, 80], int: [70, 90], nvul: [30, 62], ass: [92, 98], nstr: [80, 95], pos: [45, 78], ten: [8, 30] },
    notes: {
      nvul: "The lowest band among major Western monarchs. Escalating suspicion, rages, and a willingness to destroy intimates — Wolsey, More, Cromwell, two wives — on evidence he had arranged.",
      int: "Real: composed music, argued theology well enough to earn Defender of the Faith, read widely. The intellect was genuine and the use of it self-serving."
    }
  },

  louis14: {
    source: "estimate",
    profile: "Saint-Simon gives us more hostile close observation than almost any other monarch receives, and even he concedes the relentless application. Moderate intellect, extreme discipline.",
    f: { ach: [82, 94], com: [78, 92], act: [80, 93], int: [45, 70], nvul: [85, 96], ass: [88, 96], nstr: [82, 95], pos: [55, 80], ten: [15, 42] },
    notes: {
      act: "Worked the files with his ministers for several hours daily for fifty-four years without material interruption. The discipline is the achievement.",
      int: "Deliberately mid-range. A great patron who was not himself a notable intellect; Saint-Simon thought him of ordinary mind and extraordinary application, which most historians have accepted.",
      nvul: "Famously even-tempered in public across seven decades — the etiquette machine required a man who never visibly cracked, and he didn't."
    }
  },

  cromwell: {
    source: "estimate",
    profile: "The only leader here whose letters record genuine agonised uncertainty about whether he was doing right — which, on this scale, is measured as a liability.",
    f: { ach: [80, 93], com: [72, 90], act: [78, 92], int: [55, 78], nvul: [55, 82], ass: [88, 96], nstr: [35, 65], pos: [25, 55], ten: [25, 55] },
    notes: {
      nstr: "Notably low. Contemporaries and modern historians divide on whether the providentialism was sincere or convenient, but the letters read as a man genuinely arguing with himself, which is rare in this file.",
      ten: "The band spans Drogheda and Wexford on one side and his repeated interventions for individual tenderness of conscience on the other. He is the clearest case of high in-group and floor-level out-group sympathy."
    }
  },

  peter1: {
    source: "estimate",
    profile: "Extreme on the engine facets and near the floor on sympathy — the profile of someone who treated a country as a workshop, including the people in it.",
    f: { ach: [95, 99], com: [85, 95], act: [95, 99], int: [80, 94], nvul: [55, 80], ass: [96, 99], nstr: [60, 85], pos: [50, 78], ten: [3, 20] },
    notes: {
      act: "Worked as a shipwright under an assumed name in Zaandam and Deptford, learned fourteen trades, and personally performed dentistry on his courtiers. Near-TR on Activity.",
      ten: "Had his own son tortured to death for suspected disloyalty, and personally took part in the Streltsy interrogations and executions.",
      nvul: "Documented convulsive fits and rages; the composure was not reliable."
    }
  },

  frederick2p: {
    source: "estimate",
    profile: "The most intellectually distinguished ruler in the index and among the coldest — a flute-playing correspondent of Voltaire who described his own soldiers as men who must fear their officers more than the enemy.",
    f: { ach: [92, 98], com: [88, 96], act: [90, 97], int: [92, 98], nvul: [80, 94], ass: [90, 97], nstr: [70, 90], pos: [20, 48], ten: [10, 32] },
    notes: {
      int: "Wrote philosophy and history in French, composed over a hundred sonatas, corresponded with Voltaire for forty years. The Anti-Machiavel argues against exactly the conduct he then pursued.",
      pos: "Sardonic rather than warm, increasingly misanthropic, and by the end keeping the company of his dogs in preference to people.",
      nvul: "The exception is the 1757 crisis, when he carried poison and wrote what amounted to suicide notes — real vulnerability under sustained pressure, followed by recovery."
    }
  },

  catherine2: {
    source: "estimate",
    profile: "Her own memoirs plus a vast correspondence make her one of the better-evidenced rulers here, and the picture is of a genuinely enlightened intellect governing a system she declined to reform.",
    f: { ach: [85, 95], com: [82, 94], act: [80, 93], int: [88, 97], nvul: [82, 94], ass: [85, 95], nstr: [78, 93], pos: [70, 90], ten: [40, 68] },
    notes: {
      int: "Corresponded with Voltaire and Diderot, bought Diderot's library and paid him to keep it, drafted the Nakaz from Beccaria and Montesquieu. The intellect is not a pose.",
      ten: "The mid band is the gap between the Nakaz's humane principles and the tightening of serfdom that actually happened under her; Pugachev's rebellion was answered with severity."
    }
  },

  akbar: {
    source: "estimate",
    profile: "Illiterate and among the most intellectually curious rulers in the index — Abu'l-Fazl records a man who had books read to him nightly and convened debates between religions for the pleasure of the argument.",
    f: { ach: [85, 95], com: [85, 95], act: [82, 94], int: [85, 97], nvul: [85, 95], ass: [88, 96], nstr: [55, 80], pos: [65, 88], ten: [65, 88] },
    notes: {
      int: "The Ibadat Khana debates brought Muslims, Hindus, Jains, Zoroastrians and Jesuits into argument before him. Probably dyslexic, and had a library of 24,000 volumes read aloud to him.",
      ten: "High for a conqueror: abolished the jizya and the pilgrim tax, banned forced sati and child marriage where he could enforce it. Against it stands the massacre at Chittorgarh."
    }
  },

  ieyasu: {
    source: "estimate",
    profile: "The patience profile. Low on flamboyance, extreme on self-control, and the only leader here whose signature quality is the willingness to wait decades for an outcome.",
    f: { ach: [82, 94], com: [85, 95], act: [65, 85], int: [60, 82], nvul: [92, 98], ass: [78, 92], nstr: [85, 96], pos: [30, 58], ten: [20, 48] },
    notes: {
      nvul: "The highest composure band in the file. Spent his childhood as a hostage, lost a wife and son to political necessity, and waited out two more capable rivals without a visible crack.",
      nstr: "The Osaka campaigns turned on a deliberately bad-faith reading of a temple bell inscription and a truce whose terms he broke as soon as the moat was filled."
    }
  },

  kangxi: {
    source: "estimate",
    profile: "The rare pre-modern ruler who left a first-person record — Spence assembled his own words into an autobiography, and they show self-awareness unusual at this altitude.",
    f: { ach: [88, 96], com: [85, 95], act: [88, 96], int: [85, 96], nvul: [85, 95], ass: [88, 96], nstr: [55, 80], pos: [55, 80], ten: [50, 78] },
    notes: {
      int: "Studied Euclid and algebra with the Jesuits, practised dissection, sponsored the Kangxi Dictionary, and wrote about the pleasure of getting a calculation right.",
      act: "Invented the palace memorial system to read provincial reports personally and unfiltered, and worked through them daily for six decades."
    }
  },

  mariatheresa: {
    source: "estimate",
    profile: "Inherited a collapsing state at twenty-three under invasion and left a modernised great power, while bearing sixteen children — the achievement facets are earned in the least forgiving circumstances in the file.",
    f: { ach: [85, 95], com: [80, 93], act: [82, 94], int: [60, 82], nvul: [85, 95], ass: [82, 94], nstr: [50, 75], pos: [55, 80], ten: [55, 80] },
    notes: {
      nvul: "The 1741 appeal to the Hungarian Diet, pregnant and with her capital threatened, is the set-piece: composure converted directly into a coalition.",
      nstr: "Notably lower than her rivals. Frederick thought her sincerity a weakness; the Diplomatic Revolution was Kaunitz's guile rather than hers."
    }
  },

  richelieu: {
    source: "estimate",
    profile: "The vizier profile in its purest form — everything optimised for indispensability to a weaker principal, with none of the warmth that would have made him loved.",
    f: { ach: [90, 97], com: [88, 96], act: [85, 95], int: [82, 94], nvul: [78, 92], ass: [85, 95], nstr: [93, 99], pos: [10, 35], ten: [8, 28] },
    notes: {
      nstr: "Near the ceiling with Cesare Borgia and Augustus. Raison d'état as an explicit doctrine that the state's interest overrides religion, kinship and the given word.",
      pos: "Among the lowest in the file. Chronically ill, feared rather than liked, and by his own account without a single friend at the end."
    }
  },

  // ---------------- colonial & 19th century ----------------
  washington: {
    source: "estimate",
    profile: "The reference case for restraint as an asset. Mid-range on the showy facets, near ceiling on composure, and famously unremarkable on intellect — which did not stop him being the most consequential president.",
    f: { ach: [80, 92], com: [75, 90], act: [65, 85], int: [35, 58], nvul: [92, 98], ass: [82, 94], nstr: [60, 82], pos: [25, 52], ten: [50, 75] },
    notes: {
      nvul: "Near the top of the presidential distribution. Valley Forge, the Newburgh confrontation, and the retreat from New York were all handled without visible crack.",
      int: "His own contemporaries — Adams, Jefferson — thought him of ordinary mind and extraordinary judgement, a distinction the facet does not capture well.",
      pos: "Reserved to the point of coldness; Gouverneur Morris's famous wager on slapping him on the back is the standing anecdote."
    }
  },

  jefferson: {
    source: "estimate",
    profile: "Probably the highest intellect in the presidential distribution and among the least straightforward — a combination Rubenzer's model reads as near-optimal, which is itself worth sitting with.",
    f: { ach: [80, 93], com: [72, 88], act: [70, 88], int: [95, 99], nvul: [70, 88], ass: [55, 78], nstr: [80, 94], pos: [45, 70], ten: [45, 72] },
    notes: {
      int: "Architecture, paleontology, linguistics, law, horticulture, the University of Virginia. Kennedy's line about the greatest concentration of talent dining alone is the standing tribute.",
      ass: "The weak facet: he avoided confrontation, spoke rarely in public, and preferred to work through Madison and through dinner-table persuasion.",
      nstr: "The Callender payments, the anonymous attacks on Hamilton and Adams while serving with them, and a lifetime of writing one thing and doing another on slavery."
    }
  },

  jackson: {
    source: "estimate",
    profile: "The temperamental extreme of the presidential distribution — the highest assertiveness and among the lowest impulse control, in a profile that Rubenzer's team found predicted greatness ratings anyway.",
    f: { ach: [88, 96], com: [82, 94], act: [82, 94], int: [25, 50], nvul: [65, 88], ass: [97, 99], nstr: [55, 80], pos: [50, 78], ten: [3, 20] },
    notes: {
      ass: "At or near the presidential ceiling. He fought duels, carried bullets in his body, and in office simply asserted powers no predecessor had claimed.",
      ten: "Near the floor of the presidential distribution: Indian Removal pursued in defiance of the Supreme Court, with the Trail of Tears the direct consequence."
    }
  },

  lincoln: {
    source: "estimate",
    profile: "The profile that best explains why this model is interesting: mid-range on assertiveness and activity, ceiling on intellect and tender-mindedness, and consistently ranked the greatest president.",
    contested: "The melancholy is the live question. Shenk argues it was clinical and formative; others read ordinary grief. The Not-Vulnerable band carries that.",
    f: { ach: [82, 94], com: [78, 92], act: [65, 85], int: [92, 98], nvul: [55, 85], ass: [72, 88], nstr: [70, 90], pos: [30, 60], ten: [85, 97] },
    notes: {
      ten: "Among the highest in the file. Pardoned deserters at a rate that infuriated his generals; the Second Inaugural extended the same disposition to the defeated South.",
      nvul: "Two documented breakdowns as a young man and a lifelong melancholy, set against four years of war conducted without collapse. The band is genuinely wide.",
      nstr: "Higher than his reputation. He was a working politician who managed men, timed emancipation to the coalition rather than the principle, and let people believe what was useful."
    }
  },

  bismarck: {
    source: "estimate",
    profile: "The highest Not-Straightforward score outside the outright deceivers, combined with genuine hypochondria and rages — a manipulator who was himself poorly regulated.",
    f: { ach: [90, 97], com: [88, 96], act: [78, 92], int: [82, 94], nvul: [45, 75], ass: [93, 98], nstr: [95, 99], pos: [30, 58], ten: [12, 38] },
    notes: {
      nstr: "The Ems Dispatch — editing a telegram to provoke a war — is the cleanest single act of documented manipulation by a statesman in the index.",
      nvul: "Chronic insomnia, eating and drinking to excess, weeping fits, and repeated resignation threats as emotional blackmail. Composed in crisis, poorly regulated in ordinary life."
    }
  },

  victoria: {
    source: "estimate",
    profile: "Scored through an enormous surviving journal and correspondence, which shows a far more emotionally volatile and politically interfering monarch than the constitutional-symbol version.",
    f: { ach: [50, 72], com: [55, 78], act: [50, 75], int: [40, 65], nvul: [30, 58], ass: [72, 90], nstr: [35, 62], pos: [35, 65], ten: [45, 72] },
    notes: {
      nvul: "The lowest band among long-reigning monarchs here: a decade of seclusion after Albert's death that seriously damaged the monarchy's standing.",
      nstr: "Unusually low — the journals show a woman who said exactly what she thought to her ministers, frequently and at length."
    }
  },

  disraeli: {
    source: "estimate",
    profile: "The novelist in politics: the highest positive-emotion and flattery scores of any 19th-century figure here, with achievement facets well below his rival Gladstone.",
    f: { ach: [72, 88], com: [65, 85], act: [55, 78], int: [80, 93], nvul: [70, 88], ass: [75, 90], nstr: [92, 98], pos: [80, 95], ten: [40, 68] },
    notes: {
      nstr: "'Everyone likes flattery; and when you come to royalty you should lay it on with a trowel' — a stated method, applied successfully to Victoria for years.",
      pos: "Wit, charm and visible enjoyment of the game; he is among the few in this file whose company people actively sought."
    }
  },

  bolivar: {
    source: "estimate",
    profile: "Romantic in the technical sense — extreme swings, enormous eloquence, and a body of writing that predicts his own failure with unusual clarity.",
    f: { ach: [92, 98], com: [75, 92], act: [88, 96], int: [80, 93], nvul: [45, 75], ass: [92, 98], nstr: [55, 80], pos: [55, 82], ten: [45, 72] },
    notes: {
      nvul: "Alternating exaltation and despair across the campaigns; the late letters — 'those who serve a revolution plough the sea' — are a collapse in slow motion.",
      int: "The Jamaica Letter and the Angostura Address are serious political theory, and he read Rousseau and Montesquieu with attention."
    }
  },

  // ---------------- 20th century ----------------
  wilson: {
    source: "estimate",
    profile: "Rubenzer's team found him a study in rigidity: high intellect and conviction, very low flexibility, and a refusal to compromise that cost him the thing he wanted most.",
    f: { ach: [88, 96], com: [85, 95], act: [70, 88], int: [90, 97], nvul: [35, 65], ass: [80, 93], nstr: [55, 80], pos: [25, 52], ten: [40, 68] },
    notes: {
      nvul: "The band is wide because of the stroke, but the rigidity predates it: the refusal to accept Senate reservations on the League was a temperamental act, not a strategic one.",
      ten: "The high end is the Fourteen Points and self-determination; the low end is the re-segregation of the federal civil service, which was his own decision."
    }
  },

  coolidge: {
    source: "estimate",
    profile: "The useful low-end anchor for the presidential distribution. Near the floor on Activity and Positive Emotions, and content there on principle rather than by incapacity.",
    f: { ach: [20, 45], com: [50, 72], act: [3, 18], int: [45, 68], nvul: [65, 88], ass: [30, 55], nstr: [30, 58], pos: [5, 25], ten: [30, 58] },
    notes: {
      act: "Slept eleven hours a day and napped in the afternoon. The deliberate minimalism makes him the counterweight to TR at the other end of the same scale.",
      pos: "'Silent Cal.' Alice Roosevelt Longworth said he looked as if he had been weaned on a pickle, and he thought the remark fair."
    }
  },

  hoover: {
    source: "estimate",
    profile: "Extremely high competence and achievement with almost no political or emotional register — the engineer's profile, and a demonstration that the engine facets alone do not produce greatness.",
    f: { ach: [90, 97], com: [88, 96], act: [85, 95], int: [78, 92], nvul: [50, 75], ass: [55, 78], nstr: [40, 68], pos: [8, 30], ten: [45, 75] },
    notes: {
      pos: "Near the floor. Famously humourless in office, unable to project warmth or hope at the moment both were the job.",
      ten: "The band is the gap between the man who fed millions in wartime Europe and the president who could not make federal relief feel like compassion."
    }
  },

  fdr: {
    source: "estimate",
    profile: "The profile most often paired with TR's, and the contrast is instructive: comparable warmth and assertiveness, markedly lower candour, and far greater opacity.",
    f: { ach: [88, 96], com: [88, 96], act: [78, 92], int: [60, 82], nvul: [92, 98], ass: [90, 97], nstr: [90, 98], pos: [92, 98], ten: [70, 90] },
    notes: {
      nvul: "Polio at thirty-nine and a public serenity never broken in twelve years of depression and war. Among the highest composure scores in the presidential set.",
      nstr: "Very high. He let visitors leave convinced of agreement he had never given, ran rival agencies against each other, and concealed the extent of his disability for a decade.",
      int: "Deliberately mid-range. Holmes's verdict — a second-class intellect but a first-class temperament — is the standing judgement and roughly what this model measures."
    }
  },

  churchill: {
    source: "estimate",
    profile: "Everything at the extremes. Among the highest intellect, activity and assertiveness in the file, and a vulnerability score that is genuinely contested because of the 'black dog'.",
    contested: "Whether the depression was clinical or a rhetorical habit is disputed; Storr's psychiatric reading is influential and not universally accepted.",
    f: { ach: [92, 98], com: [88, 97], act: [92, 98], int: [92, 98], nvul: [50, 85], ass: [95, 99], nstr: [70, 90], pos: [70, 92], ten: [50, 78] },
    notes: {
      int: "A Nobel Prize in Literature, a working historian's output, and the only leader here whose principal weapon was his own prose.",
      nvul: "The wide band is the whole argument: 1940 shows extraordinary nerve, and the private correspondence shows a man who described despair in clinical terms.",
      ten: "The band spans the social reformer of 1908 and the Bengal famine of 1943."
    }
  },

  stalin: {
    source: "estimate",
    profile: "Near-ceiling on the engine and control facets, floor on sympathy, and a paranoia that the model registers only obliquely — the scale was built for presidents and strains here.",
    f: { ach: [92, 98], com: [85, 95], act: [85, 95], int: [65, 88], nvul: [55, 85], ass: [88, 97], nstr: [96, 99], pos: [15, 45], ten: [1, 12] },
    notes: {
      nstr: "At the ceiling of the file. The show trials, the fabricated confessions, and the systematic editing of photographs and history.",
      ten: "The lowest band assigned here. Collectivisation, the Terror, and the signature on execution lists in his own hand.",
      nvul: "The low end is the fortnight of collapse after 22 June 1941; the high end is everything before and after it."
    }
  },

  hitler: {
    source: "estimate",
    profile: "Scored with explicit unease. The model was built to predict greatness ratings among presidents and is not designed to accommodate this; the profile is included because omitting it would flatter the scale.",
    f: { ach: [90, 98], com: [70, 92], act: [50, 80], int: [40, 70], nvul: [35, 70], ass: [95, 99], nstr: [92, 99], pos: [25, 55], ten: [1, 10] },
    notes: {
      act: "Markedly lower than the other dictators here. Kershaw documents a chronically disordered work routine — late rising, long monologues, avoidance of paperwork — which is part of how the polycratic chaos arose.",
      int: "The low band is deliberate: a retentive memory and real rhetorical skill, with no capacity for revision in the face of evidence.",
      ten: "Floor."
    }
  },

  lenin: {
    source: "estimate",
    profile: "The professional-revolutionary profile: ascetic, tireless, intellectually formidable within a closed system, and entirely instrumental about people.",
    f: { ach: [95, 99], com: [88, 96], act: [90, 97], int: [82, 95], nvul: [78, 92], ass: [92, 98], nstr: [80, 95], pos: [30, 60], ten: [5, 25] },
    notes: {
      int: "Genuinely wide reading and a serious polemicist, but the intellect operated strictly inside doctrine — high capability, low openness to disconfirmation.",
      ten: "The telegrams ordering hangings 'so the people see' are in his own hand. The personal austerity was real and did not extend to sympathy."
    }
  },

  mao: {
    source: "estimate",
    profile: "A poet and a theorist with a near-total indifference to the human cost of his own theories, and an unusual willingness to destroy his own institutions.",
    f: { ach: [92, 98], com: [85, 96], act: [70, 90], int: [70, 90], nvul: [70, 90], ass: [95, 99], nstr: [88, 97], pos: [40, 70], ten: [2, 15] },
    notes: {
      int: "A capable classical poet and a genuinely original strategist of peasant revolution; also the man whose economic beliefs produced the Great Leap.",
      ten: "The famine of 1959–61 was reported to him and the policy continued. Dikötter's archival work makes the indifference documentable rather than inferred."
    }
  },

  ataturk: {
    source: "estimate",
    profile: "A revolutionary who changed a society's alphabet, dress, law and calendar in fifteen years, with the heavy drinking and restlessness of a man who could not stop.",
    f: { ach: [93, 98], com: [88, 96], act: [88, 96], int: [78, 92], nvul: [80, 93], ass: [95, 99], nstr: [70, 90], pos: [55, 82], ten: [30, 60] },
    notes: {
      ass: "Told the Turkish parliament what the nation would become and then did it, against clerical, dynastic and popular resistance simultaneously.",
      ten: "The band is the gap between genuine reform for women's legal status and the treatment of Kurdish and Armenian populations."
    }
  },

  degaulle: {
    source: "estimate",
    profile: "The most deliberately constructed personality in the file — aloofness as a written doctrine, published before he had the chance to practise it.",
    f: { ach: [88, 96], com: [92, 98], act: [70, 88], int: [85, 95], nvul: [90, 97], ass: [95, 99], nstr: [75, 92], pos: [15, 42], ten: [30, 58] },
    notes: {
      com: "Very high, bordering on the delusional at the moment it mattered: in June 1940 he declared himself the embodiment of France while holding no office and commanding nobody.",
      pos: "Cold by design. The Edge of the Sword argues explicitly that distance and mystery are instruments of authority, and he lived by it.",
      nvul: "Resigned twice rather than govern without a mandate, which on this scale reads as composure rather than fragility."
    }
  },

  truman: {
    source: "estimate",
    profile: "The plain-dealing anchor at the other end of the candour scale from Nixon and Johnson — and evidence that the model's low-straightforwardness finding is a correlation, not a requirement.",
    f: { ach: [70, 88], com: [72, 90], act: [70, 88], int: [55, 78], nvul: [82, 94], ass: [80, 93], nstr: [15, 40], pos: [55, 80], ten: [55, 80] },
    notes: {
      nstr: "Among the lowest in the presidential set. 'The buck stops here' was a working practice, and he was disliked in Washington partly for saying what he meant.",
      nvul: "Inherited the bomb, the occupation and the Cold War with no preparation and made the decisions on schedule; firing MacArthur at enormous political cost is the set-piece."
    }
  },

  eisenhower: {
    source: "estimate",
    profile: "The hidden-hand profile: genuinely high on control and calculation, deliberately presented as low on both. Greenstein's revision is essentially an argument about this facet set.",
    f: { ach: [78, 92], com: [88, 96], act: [65, 85], int: [60, 82], nvul: [92, 98], ass: [82, 94], nstr: [82, 95], pos: [70, 90], ten: [50, 78] },
    notes: {
      nstr: "The core of the Greenstein thesis. The genial golfer was a deliberate construction concealing a controlling operator who let subordinates absorb blame — high concealment in the service of low visible ego.",
      nvul: "Held a coalition of prima donnas together through D-Day and wrote the note taking sole blame for failure in advance. Near the top of the distribution."
    }
  },

  jfk: {
    source: "estimate",
    profile: "Among the highest positive-emotion and lowest candour scores in the presidential set, with a concealed medical history that makes the vulnerability facet genuinely hard to score.",
    f: { ach: [75, 90], com: [70, 88], act: [60, 85], int: [78, 92], nvul: [65, 88], ass: [72, 90], nstr: [90, 98], pos: [88, 97], ten: [55, 80] },
    notes: {
      nstr: "Rubenzer's team found him among the least straightforward presidents. Addison's disease, the back, the amphetamines and the private life were all concealed while projecting vigour.",
      pos: "Wit, charm and visible enjoyment, largely genuine and heavily produced.",
      com: "The band is the distance between the Bay of Pigs and the missile crisis thirteen months later — the clearest learning curve in the file."
    }
  },

  lbj: {
    source: "estimate",
    profile: "The most extreme assertiveness and lowest candour combination in the presidential distribution, and the best single illustration of what the model's uncomfortable finding actually looks like in a room.",
    f: { ach: [95, 99], com: [82, 94], act: [95, 99], int: [55, 78], nvul: [40, 70], ass: [98, 99], nstr: [95, 99], pos: [60, 85], ten: [55, 82] },
    notes: {
      ass: "'The Treatment' — physical looming, lapel-gripping, alternating flattery and threat, calibrated to a specific senator's specific vulnerability. At the ceiling.",
      nstr: "Caro documents systematic deception including a stolen election, sustained over decades.",
      ten: "Genuinely high and genuinely inconsistent: the Civil Rights and Voting Rights Acts and the Great Society, against the escalation in Vietnam."
    }
  },

  nixon: {
    source: "estimate",
    profile: "High engine facets, ceiling-level concealment, and the lowest social comfort of any modern president — the profile Barber's 'active-negative' category was built to describe.",
    f: { ach: [92, 98], com: [80, 94], act: [85, 95], int: [80, 93], nvul: [20, 50], ass: [78, 92], nstr: [96, 99], pos: [10, 35], ten: [20, 50] },
    notes: {
      nstr: "At or near the ceiling of the presidential set, and self-documented on his own tapes.",
      nvul: "The lowest band among modern presidents: the resentment, the drinking in the final months, the enemies list, and a siege mentality that produced the coverup rather than the break-in.",
      int: "Genuinely high and consistently underrated — the China opening and the geopolitical restructuring were his own strategic conception."
    }
  },

  carter: {
    source: "estimate",
    profile: "Very high conscientiousness and intellect with low assertiveness and low political guile — close to the inverse of the model's greatness profile, which is roughly what the ratings reflect.",
    f: { ach: [85, 95], com: [78, 92], act: [82, 94], int: [82, 94], nvul: [70, 90], ass: [35, 60], nstr: [10, 32], pos: [35, 62], ten: [82, 95] },
    notes: {
      nstr: "Among the lowest in the set — the 'I will never lie to you' pledge was meant and largely kept, and the malaise speech told voters something they did not want to hear.",
      ten: "Among the highest: human rights as doctrine, and a post-presidency of disease eradication and house-building that is the most admired in American history.",
      ass: "The weak facet. He struggled to impose himself on his own party's congressional barons."
    }
  },

  reagan: {
    source: "estimate",
    profile: "Very high warmth and conviction with unusually low activity and detail-engagement — a profile that contradicts the achievement cluster and produced a highly-rated presidency anyway.",
    f: { ach: [55, 80], com: [70, 90], act: [25, 55], int: [35, 65], nvul: [85, 96], ass: [75, 90], nstr: [60, 85], pos: [92, 98], ten: [50, 78] },
    notes: {
      act: "Napped, delegated radically, and worked notably short days. The lowest Activity of any modern president and the clearest counter-example to the facet's predictive claim.",
      pos: "Near the ceiling. Optimism as the entire political method, and it survived being shot.",
      int: "Contested. The diaries and the pre-presidential radio scripts show more independent thought than the amiable-dunce caricature allowed."
    }
  },

  thatcher: {
    source: "estimate",
    profile: "The highest achievement-striving and lowest agreeableness combination among modern democratic leaders — conviction politics as a measurable temperament rather than a slogan.",
    f: { ach: [95, 99], com: [90, 97], act: [95, 99], int: [75, 90], nvul: [88, 96], ass: [95, 99], nstr: [45, 72], pos: [30, 58], ten: [15, 42] },
    notes: {
      act: "Four hours of sleep, mastery of the brief beyond the responsible minister's, and a work rate that exhausted two generations of cabinet colleagues.",
      nstr: "Notably lower than most high scorers: she told people what she thought, which is why the cabinet revolt when it came was total.",
      ten: "The band spans the conviction that the miners' strike had to be broken and a private record of individual kindness her colleagues attest to."
    }
  },

  mandela: {
    source: "estimate",
    profile: "The file's outlier: ceiling-level tender-mindedness combined with high assertiveness and real political guile — the combination the model says should not co-occur, and the reason he is interesting.",
    f: { ach: [80, 93], com: [85, 95], act: [65, 85], int: [72, 88], nvul: [92, 99], ass: [85, 95], nstr: [70, 90], pos: [82, 95], ten: [92, 99] },
    notes: {
      nvul: "Twenty-seven years, much of it breaking rocks, emerging without visible damage or bitterness. The highest composure band assigned in this file.",
      ten: "At the ceiling. The Truth and Reconciliation Commission, learning Afrikaans to understand his jailers, and inviting his prosecutor to lunch.",
      nstr: "Higher than the saintly image allows, and deliberately so — he was a practised negotiator who concealed the ANC talks from his own organisation for years."
    }
  },

  gorbachev: {
    source: "estimate",
    profile: "High intellect and openness with mid-range assertiveness — the profile of a reformer who could start a process and not command it.",
    f: { ach: [78, 92], com: [60, 82], act: [75, 90], int: [82, 94], nvul: [70, 88], ass: [60, 82], nstr: [45, 72], pos: [60, 85], ten: [70, 90] },
    notes: {
      ten: "High, and consequential: he refused the Tiananmen option in Eastern Europe in 1989 when it was available to him, and the empire dissolved almost without blood.",
      ass: "The decisive weakness. He persuaded rather than purged, which left his displaced opponents alive, connected, and available for August 1991.",
      com: "The low band reflects a man who repeatedly misjudged how his own reforms would run."
    }
  },

  leekuanyew: {
    source: "estimate",
    profile: "Extremely high on every engine facet and explicit about his low tender-mindedness as a governing principle rather than a failing.",
    f: { ach: [93, 98], com: [95, 99], act: [90, 97], int: [88, 96], nvul: [90, 97], ass: [95, 99], nstr: [65, 88], pos: [25, 55], ten: [15, 42] },
    notes: {
      com: "Near the ceiling. He believed his own judgement superior to the alternatives and was, on the evidence of the outcome, largely right — which is what makes the profile uncomfortable.",
      ten: "Stated rather than inferred: 'Between being loved and being feared, I have always believed Machiavelli was right.' Detention without trial and ruinous defamation suits followed the principle.",
      nstr: "Mid-high but lower than most autocrats — he was notoriously, deliberately blunt about his own methods."
    }
  },

  castro: {
    source: "estimate",
    profile: "Ceiling-level assertiveness and activity with a theatrical streak — a man who spoke for four hours at a time because he enjoyed it.",
    f: { ach: [92, 98], com: [90, 97], act: [90, 97], int: [70, 88], nvul: [85, 95], ass: [97, 99], nstr: [85, 96], pos: [65, 88], ten: [20, 50] },
    notes: {
      com: "Survived the Bay of Pigs, the Missile Crisis, an embargo and a reported six hundred assassination plots, and treated each as confirmation of his own judgement.",
      ten: "The band spans the literacy campaign and rural medicine against the firing squads of 1959, the UMAP camps and the treatment of dissidents."
    }
  },

  // ---------------- 21st century ----------------
  gwbush: {
    source: "estimate",
    profile: "High decisiveness and warmth with mid-to-low intellectual engagement — the 'decider' profile, and one where the post-9/11 rally effect distorts contemporaneous ratings badly.",
    f: { ach: [60, 82], com: [78, 92], act: [55, 78], int: [35, 62], nvul: [78, 92], ass: [78, 92], nstr: [55, 82], pos: [72, 90], ten: [50, 78] },
    notes: {
      ten: "The high end is PEPFAR, which is among the most effective public-health interventions any government has run; the low end is the interrogation programme.",
      com: "High self-efficacy with limited appetite for contrary detail, which is the combination the Iraq intelligence failure turned on."
    }
  },

  obama: {
    source: "estimate",
    profile: "High intellect and composure with notably lower assertiveness and warmth-in-private than the public performance suggests.",
    f: { ach: [78, 92], com: [82, 94], act: [65, 85], int: [90, 97], nvul: [88, 96], ass: [65, 85], nstr: [55, 80], pos: [65, 88], ten: [70, 90] },
    notes: {
      nvul: "'No Drama Obama' was an accurate description; the bin Laden decision week is the documented set-piece.",
      ass: "The weaker facet — cool, deliberative, and criticised by his own party for insufficient willingness to twist arms.",
      int: "Among the highest in the modern set: a constitutional-law lecturer who wrote his own books and thought in probabilities."
    }
  },

  putin: {
    source: "estimate",
    profile: "The case-officer profile: high control, high concealment, low warmth, and a composure that has visibly degraded with tenure and isolation.",
    f: { ach: [82, 94], com: [85, 96], act: [70, 88], int: [55, 80], nvul: [78, 93], ass: [90, 97], nstr: [95, 99], pos: [15, 42], ten: [3, 20] },
    notes: {
      nstr: "Near the ceiling. Professional training in exactly this, applied to a state: cultivate, compromise, control, and deny.",
      nvul: "The high band is twenty years of calculated patience; the lower end is the visible isolation and the 2022 miscalculation, which the framework reads as information failure rather than nerve failure."
    }
  },

  xi: {
    source: "estimate",
    profile: "Scored with low confidence and wide bands — the Chinese leadership is the least personally documented modern subject in this file by a wide margin.",
    contested: "Almost nothing reliable exists on his private temperament. These are inferences from behaviour, not evidence about interiority.",
    f: { ach: [85, 96], com: [82, 95], act: [70, 90], int: [55, 82], nvul: [80, 95], ass: [88, 97], nstr: [85, 96], pos: [20, 50], ten: [10, 40] },
    notes: {
      ach: "The anti-corruption campaign, the term-limit abolition and the poverty programme are all consistent with very high striving; the band is wide because the man is opaque.",
      nvul: "His father's purge and his own years in a rural cave village are the standard explanation for the composure, but the causal story is speculative."
    }
  },

  merkel: {
    source: "estimate",
    profile: "The lowest assertiveness of any highly-rated leader here, combined with top-decile composure and intellect — a profile the model would under-predict and the outcomes vindicate.",
    f: { ach: [70, 88], com: [85, 95], act: [70, 88], int: [85, 95], nvul: [92, 98], ass: [45, 70], nstr: [40, 68], pos: [30, 58], ten: [65, 88] },
    notes: {
      ass: "Deliberately low and strategically chosen: 'Merkeln' became a German verb for waiting an opponent out rather than facing them down.",
      int: "A quantum chemist by training, and the analytic habit is visible in the way she handled the euro and the pandemic.",
      nvul: "Sixteen years of consecutive crises without a visible loss of composure."
    }
  },

  trump: {
    source: "estimate",
    profile: "Scored structurally rather than politically. Ceiling-level assertiveness and near-ceiling concealment on a scale where both predict greatness ratings — which is the sharpest available test of whether the model measures effectiveness or something narrower.",
    contested: "Contemporaneous assessment of a sitting figure is the least reliable exercise in this file, and readers will disagree about every band here for reasons that are not psychometric.",
    f: { ach: [80, 95], com: [88, 98], act: [65, 88], int: [25, 55], nvul: [75, 92], ass: [97, 99], nstr: [92, 99], pos: [60, 85], ten: [5, 30] },
    notes: {
      com: "Very high self-efficacy, which is what the facet measures — conviction of one's own capability, independent of whether it is warranted.",
      ass: "At the presidential ceiling with Jackson and Johnson.",
      nvul: "High: two impeachments, four indictments, an assassination attempt and an electoral defeat, followed by a return."
    }
  },

  zelensky: {
    source: "estimate",
    profile: "The clearest case in the file of a profile revealed rather than developed — the facets that mattered were invisible until February 2022.",
    f: { ach: [78, 92], com: [70, 90], act: [82, 94], int: [60, 82], nvul: [92, 99], ass: [82, 94], nstr: [50, 78], pos: [70, 90], ten: [70, 90] },
    notes: {
      nvul: "Among the highest bands assigned. Declining evacuation and remaining in Kyiv with a column advancing on the city is as clean a test of the facet as the historical record offers.",
      pos: "A professional performer's warmth, deployed as an instrument of alliance management."
    }
  },

  lula: {
    source: "estimate",
    profile: "The highest positive-emotion score among living leaders here, with the negotiating temperament of a union organiser and no formal education past primary school.",
    f: { ach: [85, 95], com: [80, 93], act: [78, 92], int: [45, 75], nvul: [85, 96], ass: [82, 94], nstr: [65, 88], pos: [90, 98], ten: [78, 93] },
    notes: {
      pos: "Near the ceiling. Warmth as the entire political method, and it survived 580 days in prison and a return to office.",
      int: "The band is wide and the low end is formal: he left school early and lost a finger in a factory. The political intelligence is not in question."
    }
  },

  ardern: {
    source: "estimate",
    profile: "The file's highest tender-mindedness among heads of government, and a resignation that the model reads as a rare accurate self-assessment.",
    f: { ach: [65, 85], com: [70, 88], act: [70, 88], int: [65, 85], nvul: [65, 88], ass: [55, 80], nstr: [25, 55], pos: [80, 95], ten: [92, 99] },
    notes: {
      ten: "At the ceiling. Christchurch and the pandemic were both handled in an explicitly empathetic register, and she named kindness as a governing strategy.",
      nvul: "The band's low end is her own account: 'nothing left in the tank' is a candid statement of depletion that most leaders in this file would not have made."
    }
  },

  biden: {
    source: "estimate",
    profile: "High warmth and relationship capital with mid-range engine facets — and the only profile here where the scoring period matters as much as it does for Henry VIII.",
    contested: "Scoring him across fifty years averages two very different instruments. The 2021 profile and the 2024 profile diverge sharply on Activity and Competence.",
    f: { ach: [65, 85], com: [62, 85], act: [45, 75], int: [50, 75], nvul: [80, 94], ass: [70, 88], nstr: [50, 78], pos: [80, 94], ten: [85, 96] },
    notes: {
      ten: "Very high and the defining facet — grief-informed empathy is the through-line of the public persona and is generally judged genuine.",
      act: "The widest intra-career band in the modern set, and the reason his own coalition removed him in July 2024."
    }
  },

  // ---------------- renaissance additions ----------------
  lorenzo: {
    source: "estimate",
    profile: "Power without office, which requires concealment as a permanent condition. Very high intellect and charm, and achievement facets dragged down by the thing he actually neglected — the bank that paid for all of it.",
    f: { ach: [70, 88], com: [72, 90], act: [65, 85], int: [88, 96], nvul: [78, 92], ass: [80, 93], nstr: [82, 95], pos: [78, 93], ten: [45, 72] },
    notes: {
      int: "A serious poet in his own right, and the convenor of Ficino's Platonic circle. Among the best-educated laymen of the century.",
      ach: "The low band is the Medici bank, which rotted under managers he did not supervise while his attention was on diplomacy and art.",
      nstr: "Governing a republic without holding office meant packed councils, brokered marriages and clients in every guild — the machinery had to stay invisible."
    }
  },
  isabella: {
    source: "estimate",
    profile: "Among the highest achievement scores of any monarch here and one of the lowest tender-mindedness scores — a combination she understood as piety rather than as a tension.",
    f: { ach: [88, 96], com: [85, 95], act: [82, 94], int: [62, 85], nvul: [85, 95], ass: [88, 96], nstr: [55, 80], pos: [40, 68], ten: [10, 35] },
    notes: {
      ach: "Completed the Reconquista, funded Columbus, rebuilt royal authority over the magnates and standardised Castilian law inside thirty years.",
      ten: "Near the floor. The Inquisition and the 1492 expulsion were her decisions, made over objections. The high end credits her will's instruction that indigenous peoples be well treated.",
      nvul: "Campaigned while pregnant and rode to besieged towns in person; contemporaries remarked on the absence of visible fear."
    }
  },
  suleiman: {
    source: "estimate",
    profile: "A working poet who wrote over two thousand verses and had his closest friend and his own heir strangled. The facets do not resolve the contradiction; they locate it.",
    f: { ach: [85, 95], com: [85, 95], act: [78, 92], int: [78, 92], nvul: [85, 95], ass: [90, 97], nstr: [75, 92], pos: [40, 70], ten: [15, 45] },
    notes: {
      int: "Wrote under the pen name Muhibbi and was a discriminating patron of Sinan; the intellectual seriousness is documented rather than courtly convention.",
      ten: "Ibrahim Pasha, his boyhood friend and grand vizier, strangled in the palace after thirteen years; his son Mustafa executed within sight of his own tent."
    }
  },
  charles5: {
    source: "estimate",
    profile: "The only ruler in the file whose defining act was quitting from exhaustion, which makes him the most useful low-composure case among the genuinely capable.",
    f: { ach: [78, 92], com: [65, 85], act: [70, 88], int: [55, 78], nvul: [50, 78], ass: [72, 88], nstr: [55, 80], pos: [25, 55], ten: [40, 68] },
    notes: {
      nvul: "Gout, depression and a documented inability to decide at speed, ending in the abdication of 1556 and retirement to Yuste — an admission no other ruler here made.",
      com: "The low band is real: he consistently took on more obligations than the machinery could serve and knew it."
    }
  },

  // ---------------- colonial & 19th-century additions ----------------
  toussaint: {
    source: "estimate",
    profile: "From enslaved coachman to head of state, which is the steepest achievement gradient in the index. Very high on every engine facet and on concealment, which was survival rather than style.",
    f: { ach: [92, 98], com: [88, 96], act: [88, 96], int: [78, 92], nvul: [85, 96], ass: [90, 97], nstr: [82, 95], pos: [40, 70], ten: [45, 75] },
    notes: {
      nstr: "Outmanoeuvred Spain, Britain and France in turn by changing sides at the right moment, and wrote letters deliberately ambiguous enough to be read two ways.",
      int: "Self-taught, and read Epictetus and the Abbé Raynal; the 1801 constitution is his own political thinking.",
      ten: "The band is the gap between abolishing slavery and imposing militarised plantation labour to keep the economy alive."
    }
  },
  sanmartin: {
    source: "estimate",
    profile: "The anti-Napoleon: nearly identical achievement and composure, and the opposite score on candour and ego. He is the file's cleanest demonstration that the model rewards traits which are not virtues.",
    f: { ach: [82, 94], com: [85, 95], act: [72, 90], int: [65, 85], nvul: [88, 96], ass: [75, 90], nstr: [35, 62], pos: [25, 55], ten: [55, 80] },
    notes: {
      nstr: "Low, and decisively so. At Guayaquil he judged Bolívar better placed to finish the war, handed over his army and sailed into voluntary exile.",
      nvul: "Planned and executed the Andes crossing like an engineering project, and bore the subsequent obscurity without public complaint."
    }
  },
  juarez: {
    source: "estimate",
    profile: "Composure as the entire political method — a Zapotec shepherd boy who carried the republic in a moving carriage for years and simply declined to stop being the government.",
    f: { ach: [85, 95], com: [80, 93], act: [70, 88], int: [72, 90], nvul: [92, 98], ass: [78, 92], nstr: [40, 68], pos: [20, 50], ten: [55, 80] },
    notes: {
      nvul: "Among the highest bands in the file. Years of French occupation spent governing from a black carriage without a capital, and without visible despair.",
      pos: "Formal, austere and undemonstrative by every account; the dignity was the point and the warmth was not there."
    }
  },
  cavour: {
    source: "estimate",
    profile: "The highest manipulation score of any 19th-century liberal here, and it is the reason Italy exists. Rubenzer's uncomfortable finding in constitutional dress.",
    f: { ach: [88, 96], com: [85, 95], act: [85, 95], int: [82, 94], nvul: [75, 90], ass: [78, 92], nstr: [92, 98], pos: [55, 80], ten: [35, 62] },
    notes: {
      nstr: "Plombières, the engineered Crimean intervention, and the co-opting of Garibaldi's conquests for a crown Garibaldi did not serve. He manufactured the conditions for wars he intended to win.",
      int: "A serious student of political economy and agricultural improvement who ran his own newspaper before running a state."
    }
  },
  cixi: {
    source: "estimate",
    profile: "Scored despite a wrecked source base, because the eyewitness record from the court is unusually direct. Very high assertiveness and concealment; the rest is contested to the point of uselessness.",
    contested: "The traditional portrait is a hostile Western and reformist caricature; Jung Chang's revisionism over-corrects. Almost every band here is wide for that reason.",
    f: { ach: [78, 92], com: [75, 90], act: [70, 88], int: [50, 78], nvul: [82, 94], ass: [88, 96], nstr: [88, 97], pos: [45, 75], ten: [15, 45] },
    notes: {
      nstr: "Three manufactured minority regencies, a broken succession rule and a coup against a reigning adult emperor — concealment as the governing instrument.",
      nvul: "Seized power in 1861, took it back by coup in 1898, lost her capital in 1900 and returned to rule for eight more years."
    }
  },

  // ---------------- 20th-century additions ----------------
  mckinley: {
    source: "estimate",
    profile: "The warmth-and-consensus profile: high positive emotion and tender-mindedness, low assertiveness, and a presidency that expanded American power anyway.",
    f: { ach: [62, 82], com: [70, 88], act: [50, 75], int: [45, 70], nvul: [82, 94], ass: [55, 78], nstr: [60, 85], pos: [70, 90], ten: [65, 88] },
    notes: {
      pos: "Genuinely and unusually kind — his attentiveness to his epileptic wife at state functions was remarked on by everyone who saw it.",
      ass: "The weak facet. He governed by quiet consensus; Roosevelt's jibe about a chocolate éclair backbone was unfair but reflects a real difference in register."
    }
  },
  taft: {
    source: "estimate",
    profile: "High competence and intellect married to the lowest activity and near-lowest assertiveness among modern presidents — a judicial temperament misfiled into an executive job.",
    f: { ach: [50, 75], com: [72, 90], act: [30, 58], int: [70, 88], nvul: [70, 90], ass: [40, 65], nstr: [25, 52], pos: [65, 88], ten: [60, 85] },
    notes: {
      act: "Among the lowest in the presidential set — he slept prodigiously, reportedly including in meetings, and disliked the pace of the office.",
      ass: "He had no appetite for the political combat TR relished, which is most of why the succession failed.",
      int: "Genuinely high, and vindicated later: he was a better Chief Justice than president, and knew it."
    }
  },
  harding: {
    source: "estimate",
    profile: "The file's clearest case of high warmth carrying a man past every other facet. Near-ceiling positive emotions, bottom-quartile everything in the engine group, and he said so himself.",
    f: { ach: [35, 60], com: [40, 68], act: [35, 62], int: [30, 58], nvul: [55, 80], ass: [40, 65], nstr: [45, 72], pos: [85, 96], ten: [70, 90] },
    notes: {
      com: "'I am not fit for this office and should never have been here' is his own assessment, and unusually candid for the genre.",
      pos: "Genuinely liked by almost everyone who met him, which was the whole basis of the nomination."
    }
  },
  ford: {
    source: "estimate",
    profile: "The lowest concealment score of any modern president and among the highest composure — a decency profile that the model predicts will not produce greatness ratings, and did not.",
    f: { ach: [50, 75], com: [62, 85], act: [55, 80], int: [45, 70], nvul: [85, 95], ass: [55, 78], nstr: [20, 48], pos: [70, 90], ten: [70, 90] },
    notes: {
      nstr: "Near the floor with Truman and Carter. He was appointed precisely because he was believed incapable of the thing his predecessor had done.",
      nvul: "Took the office in a constitutional crisis and issued the pardon knowing the cost, without visible strain."
    }
  },
  ghwbush: {
    source: "estimate",
    profile: "Very high composure and warmth with a conspicuously low assertiveness score — the 'vision thing' is legible as a facet reading rather than a gaffe.",
    f: { ach: [72, 88], com: [82, 94], act: [72, 90], int: [60, 82], nvul: [88, 96], ass: [60, 82], nstr: [62, 85], pos: [72, 90], ten: [70, 90] },
    notes: {
      nvul: "Managed the end of the Cold War and a coalition war without a misstep, and deliberately declined to celebrate at the Wall so as not to humiliate Gorbachev.",
      ten: "High and well evidenced — the handwritten notes are a documented lifelong habit, and the letter he left in the Oval Office desk is the standing example."
    }
  },
  clinton: {
    source: "estimate",
    profile: "Rubenzer's team found him at or near the bottom of the presidential distribution on straightforwardness and the top on positive emotions. Both readings survive contact with the record.",
    f: { ach: [88, 96], com: [82, 94], act: [82, 94], int: [88, 96], nvul: [78, 92], ass: [78, 92], nstr: [96, 99], pos: [92, 98], ten: [78, 93] },
    notes: {
      nstr: "At the ceiling of the presidential set. The parsing, the deposition, and a lifelong pattern that long predated the presidency.",
      pos: "Also at the ceiling — the retail political talent is the standard against which other American politicians are measured.",
      ten: "'I feel your pain' was mocked and was not fake; the empathy is generally judged genuine even by hostile biographers."
    }
  },
  bengurion: {
    source: "estimate",
    profile: "Extreme assertiveness and achievement with a genuine autodidact's intellect — a man who declared a state against the advice of nearly everyone and then turned the guns on his own side.",
    f: { ach: [92, 98], com: [88, 96], act: [85, 95], int: [78, 92], nvul: [88, 96], ass: [92, 98], nstr: [65, 88], pos: [30, 60], ten: [30, 60] },
    notes: {
      ass: "Declared independence over the objections of most of his cabinet, then dismantled the rival militias — including shelling the Altalena — to establish a monopoly on force.",
      int: "Taught himself Greek to read Plato and Spanish for Don Quixote; the library at Sde Boker is not decorative."
    }
  },
  nasser: {
    source: "estimate",
    profile: "Radio charisma at continental scale, with the vulnerability the 1967 collapse exposed. The positive-emotion score is the highest among the Arab nationalists here and it was the instrument.",
    f: { ach: [88, 96], com: [80, 94], act: [80, 93], int: [60, 85], nvul: [65, 88], ass: [90, 97], nstr: [78, 93], pos: [70, 90], ten: [40, 68] },
    notes: {
      pos: "The Voice of the Arabs broadcasts worked because the warmth carried; he was, by hostile and friendly accounts alike, magnetic in person.",
      nvul: "The low band is June 1967 — he resigned on television and was visibly broken; the crowds demanded his return, and he died three years later at fifty-two."
    }
  },
  tito: {
    source: "estimate",
    profile: "The highest composure among the communist leaders here and the most skilful balancer. He is the only man in the file who told Stalin to stop sending assassins and was obeyed.",
    f: { ach: [85, 95], com: [88, 96], act: [78, 92], int: [55, 80], nvul: [90, 97], ass: [92, 98], nstr: [85, 96], pos: [65, 88], ten: [25, 55] },
    notes: {
      nvul: "The 1948 break with Stalin, made with no external guarantee, is one of the coolest calculated risks in the twentieth century.",
      nstr: "Played East against West for aid from both for three decades while presenting as the honest broker of the Non-Aligned Movement."
    }
  },
  goldameir: {
    source: "estimate",
    profile: "Low concealment and high assertiveness — the blunt profile. The 1973 failure was not a candour problem but a closed-circle openness problem, which this scale captures only obliquely.",
    f: { ach: [78, 92], com: [70, 88], act: [75, 90], int: [55, 78], nvul: [78, 92], ass: [82, 94], nstr: [40, 68], pos: [45, 72], ten: [50, 78] },
    notes: {
      nstr: "Notably low. She was famously, sometimes damagingly, direct — 'we can forgive you for killing our sons, but not for making us kill yours' is characteristic.",
      com: "The band's low end is the 'conception' — the deference to a defence establishment consensus that missed the Yom Kippur attack."
    }
  },
  indira: {
    source: "estimate",
    profile: "Near-ceiling assertiveness and concealment with low warmth — the profile of someone who was underestimated, resented it permanently, and governed accordingly.",
    f: { ach: [88, 96], com: [82, 94], act: [78, 92], int: [60, 82], nvul: [70, 90], ass: [92, 98], nstr: [85, 96], pos: [30, 58], ten: [25, 55] },
    notes: {
      ass: "From the 'dumb doll' the party bosses installed to 'India is Indira' in six years, via the splitting of her own party.",
      nstr: "The Emergency, the hollowing-out of Congress, and the cultivation of Bhindranwale as a counterweight she then had to destroy.",
      pos: "Isolated and reserved by every account, with very few people she trusted and fewer she enjoyed."
    }
  },
  deng: {
    source: "estimate",
    profile: "The highest composure of any communist leader here, and the most consequential low-flamboyance profile in the modern file — purged twice, restored twice, and back at seventy-three without visible bitterness.",
    f: { ach: [88, 96], com: [90, 97], act: [72, 90], int: [70, 88], nvul: [92, 98], ass: [85, 95], nstr: [70, 90], pos: [50, 78], ten: [25, 55] },
    notes: {
      nvul: "Two purges, a son crippled by Red Guards, internal exile to a tractor factory, and a return to power without evident rancour. Near the top of the file.",
      ten: "The widest morally consequential band here: the reforms lifted several hundred million people out of poverty, and he ordered the tanks in 1989."
    }
  },
  chiang: {
    source: "estimate",
    profile: "Austere, humourless and relentlessly self-disciplining — the diaries are forty years of a man grading his own moral performance — with near-floor sympathy for anyone outside the circle.",
    f: { ach: [85, 95], com: [75, 92], act: [78, 92], int: [45, 72], nvul: [78, 92], ass: [88, 96], nstr: [78, 93], pos: [15, 45], ten: [10, 35] },
    notes: {
      pos: "Among the lowest in the file. Contemporaries on all sides describe a remote, rigid, joyless man; the Confucian self-cultivation was sincere and not warming.",
      ten: "The 1927 Shanghai purge, and the 1938 breach of the Yellow River dikes, which drowned several hundred thousand of his own citizens to slow the Japanese advance."
    }
  },
  hueylong: {
    source: "estimate",
    profile: "Ceiling-level assertiveness and activity with genuine warmth toward his own constituency — the American demagogue profile, and closer to LBJ's shape than to any dictator's.",
    f: { ach: [92, 98], com: [88, 96], act: [92, 98], int: [60, 85], nvul: [75, 92], ass: [97, 99], nstr: [88, 97], pos: [80, 95], ten: [50, 78] },
    notes: {
      ass: "At the presidential ceiling with Jackson and Johnson. He did not persuade the Louisiana legislature so much as acquire it.",
      ten: "Genuinely high toward poor whites — free textbooks, night schools, paved roads delivered to people the state had never served — and near zero toward anyone who obstructed him.",
      nstr: "The tax investigations, the redistricting, the captured courts: legal instruments used with complete instrumentality."
    }
  },
  rjdaley: {
    source: "estimate",
    profile: "An administrator's profile inside a boss's body: ceiling-level assertiveness and achievement, high competence, a public intellect far below his private shrewdness, and a temper that broke through on camera at least once.",
    f: { ach: [88, 96], com: [85, 95], act: [82, 93], int: [30, 60], nvul: [40, 72], ass: [92, 98], nstr: [85, 96], pos: [55, 80], ten: [18, 48] },
    notes: {
      int: "The low band is his public speech — the malapropisms were famous — and the high end his private mastery of budgets and people. Few leaders in the index show a larger gap between the two.",
      nvul: "Composed for decades; publicly out of control at least once, on the convention floor in 1968.",
      ten: "Warm toward his own — the neighbourhood, the committeemen's families — and hard toward those outside: the public-housing sites, the open-housing marchers, the 1968 orders."
    }
  },
  suharto: {
    source: "estimate",
    profile: "A patient, opaque operator: low display and high control — a man who built a regime without ever appearing to reach for it — with very low tender-mindedness where the 1965–66 record is concerned. The intellectual band is wide because his public speech was scripted and his autobiography was dictated to a ghostwriter.",
    f: { ach: [75, 90], com: [82, 94], act: [55, 78], int: [35, 65], nvul: [80, 94], ass: [72, 90], nstr: [90, 98], pos: [30, 62], ten: [8, 38] },
    notes: {
      nstr: "Took power in stages over two-odd years so that Sukarno remained head of state throughout; the 11 March 1966 order that transferred effective power is under 200 words, its original has never been found, and the surviving copies differ.",
      nvul: "Spent the night of 30 September 1965 at his scalded son's hospital bed, and by dawn was at Kostrad headquarters; within a day he had retaken central Jakarta without a fight.",
      ten: "The 1965–66 killings, the 1983–85 'mysterious shootings' and the occupation of East Timor. The band reaches up at the top because the same government built schools, clinics and a family-planning programme that reached most villages."
    }
  },
  parkchunghee: {
    source: "estimate",
    profile: "An austere, disciplined organiser — the officer's profile — with near-ceiling assertiveness and achievement, high concealment, and low tender-mindedness toward opponents, though a private diary shows real grief.",
    f: { ach: [88, 97], com: [82, 94], act: [78, 92], int: [50, 75], nvul: [72, 90], ass: [90, 98], nstr: [80, 94], pos: [15, 45], ten: [10, 40] },
    notes: {
      pos: "Austere in public. The one glimpse of feeling is private: a year after his wife's death he wrote in his diary that he had 'cried alone in secret' too many times to count.",
      ten: "The 1973 kidnapping of Kim Dae-jung, the 1975 executions, and opponents held without trial and tortured. The band reaches upward because the poverty he set out to end was real, and his rural and industrial programmes reached most of the country.",
      nstr: "Agreed under American pressure to restore civilian rule and then won the 1963 election as a civilian; promised after his 1967 victory to stand down in 1971, and then had the constitution amended to let him run a third time."
    }
  },
  mussolini: {
    source: "estimate",
    profile: "A journalist's temperament in a dictator: ceiling-level assertiveness and concealment, real warmth before a crowd, a quick and unstable intellect, and very low tender-mindedness. Included, as Hitler is, because leaving him out would flatter the scale.",
    f: { ach: [85, 96], com: [80, 95], act: [78, 93], int: [55, 80], nvul: [30, 62], ass: [93, 99], nstr: [88, 98], pos: [55, 85], ten: [4, 22] },
    notes: {
      int: "Read widely, wrote fast and spoke French and some German; the band is wide because quickness and consistency point different ways — positions shifted with the day's effect.",
      nvul: "Steady through the March on Rome gamble; visibly shaken in the Matteotti crisis of 1924, and in 1943, ill with a stomach complaint, he let the Grand Council meet and vote against him without trying to stop it.",
      ten: "Poison gas in Ethiopia, which he authorised himself, the racial laws of 1938 and internal exile for opponents."
    }
  },
  kissinger: {
    source: "estimate",
    profile: "The highest combination of intellect and concealment in the file. On Rubenzer's scale that is close to an optimal profile, which is precisely why the man remains contested.",
    f: { ach: [90, 97], com: [92, 98], act: [85, 95], int: [88, 96], nvul: [80, 93], ass: [82, 94], nstr: [95, 99], pos: [55, 82], ten: [10, 38] },
    notes: {
      nstr: "At the ceiling with Stalin and Richelieu — the back-channels, the concealment from his own cabinet colleagues, and the wiretaps on his own staff.",
      com: "Enormous self-regard, substantially earned; the China opening was conceived and executed largely by two men.",
      ten: "Cambodia, the 1971 tilt toward Pakistan during the Bangladesh atrocities, and Chile. The low band is the durable charge against him."
    }
  },

  // ---------------- 21st-century additions ----------------
  erdogan: {
    source: "estimate",
    profile: "High assertiveness and concealment with a populist's warmth, and a composure repeatedly tested by imprisonment and a coup attempt.",
    f: { ach: [88, 96], com: [85, 95], act: [80, 93], int: [50, 75], nvul: [82, 94], ass: [92, 98], nstr: [85, 96], pos: [60, 85], ten: [25, 55] },
    notes: {
      nvul: "Jailed in 1999 for reciting a poem and returned stronger; in July 2016 he broke the coup by appearing on a phone camera while its outcome was still open.",
      nstr: "The reformist European-facing posture of the 2000s and the majoritarian consolidation after 2016 are hard to read as the same stated programme."
    }
  },
  modi: {
    source: "estimate",
    profile: "Extreme activity and assertiveness with a communicator's discipline — and the lowest intellectual-openness band among the major democratic leaders here.",
    f: { ach: [90, 97], com: [88, 96], act: [88, 96], int: [45, 72], nvul: [85, 95], ass: [92, 98], nstr: [80, 94], pos: [55, 82], ten: [20, 50] },
    notes: {
      act: "Reportedly works eighteen-hour days and takes essentially no holidays; the sheer output is not in dispute even among critics.",
      int: "The low band reflects a closed advisory circle and a documented impatience with contrary expertise — demonetisation was decided by very few people.",
      ten: "The band spans the welfare delivery to hundreds of millions and Gujarat in 2002."
    }
  },
  berlusconi: {
    source: "estimate",
    profile: "The salesman's profile: ceiling-level warmth and self-belief, very high energy and concealment, and a composure that survived three falls from office, a definitive conviction and expulsion from parliament.",
    contested: "A recent and polarising figure, and readers will disagree about several bands here for reasons that are not psychometric.",
    f: { ach: [88, 97], com: [92, 99], act: [85, 96], int: [40, 70], nvul: [80, 95], ass: [88, 97], nstr: [85, 97], pos: [92, 99], ten: [30, 62] },
    notes: {
      pos: "Jokes, songs, compliments and the public show of enjoyment were his trademark from the cruise ships onward — the least disputed band in the profile.",
      nvul: "Lost office in 1995, 2006 and 2011 and came back after the first two; after the 2013 conviction and expulsion from the Senate he returned to the European Parliament at 82 and the Senate at 85.",
      nstr: "The unresolved conflict of interest, and the 2001 'Contract with the Italians', signed with a promise not to stand again unless at least four of its five pledges were met — he stood again in 2006, and the extent of fulfilment is disputed."
    }
  }
};
