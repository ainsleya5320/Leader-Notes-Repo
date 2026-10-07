// ============================================================
// PRACTICES — the blocking and tackling
// ============================================================
// Not traits or styles: the repeatable behaviours a leader actually did, how
// often, what they cost, and who says they mattered. Each practice records:
//   cat        one of PRACTICE_CATS
//   stage      the career stage it belongs to
//   what       the concrete behaviour
//   volume     the number, if there is one (calls, cards, hours)
//   mechanism  why it worked — the link to political success (my reading)
//   cost       what it took out of them, or out of others
//   tryit      the transferable version for someone building a practice today
//   attrib     who credits it: "self" (they said so), "witness" (people who
//              watched), "biographer" (a biographer's interpretation)
//   grade      documented | reported | legend — how solid the evidence is
//   source     where it comes from
// The template is meant to be filled from your own reading; the two leaders
// here are worked examples.
// ============================================================

window.PRACTICE_CATS = [
  { key: "network", name: "Network", q: "Who did they keep in touch with, how often, and how did they keep track?" },
  { key: "patrons", name: "Patrons", q: "Whose sponsorship did they cultivate, and how?" },
  { key: "intel", name: "Intelligence", q: "How did they know what others wanted, feared and would do?" },
  { key: "persuasion", name: "Persuasion", q: "What did they actually do in the room, on the phone or at the podium?" },
  { key: "prep", name: "Preparation & learning", q: "How did they study, rehearse, and correct themselves after failing?" },
  { key: "energy", name: "Energy & routine", q: "How did they structure the day, sleep and recover?" },
  { key: "machine", name: "Machinery", q: "What systems and staff turned their effort into output — or failed to?" }
];

window.PRACTICE_GRADES = {
  documented: { name: "Documented", def: "Contemporary records, recordings, or several independent witnesses." },
  reported: { name: "Reported", def: "A biographer or a few witnesses; plausible, not independently cross-checked." },
  legend: { name: "Legend", def: "Widely repeated with thin or no primary source. Kept, and labelled." }
};

window.PRACTICE_ATTRIB = {
  self: "They credited it",
  witness: "Witnesses describe it",
  biographer: "A biographer's reading"
};

window.PRACTICES = {

  // ================================================================
  lbj: {
    oneLine: "Contact volume, backed by intelligence: Johnson met, called and studied more people than anyone around him, and never asked for a vote he had not counted.",
    ownWords: [
      { text: "There is but one way for a President to deal with the Congress, and that is continuously, incessantly, and without interruption.", src: "Johnson to Doris Kearns Goodwin; quoted in Jeff Shesol, Mutual Contempt (1997)" },
      { text: "The relationship had to be almost incestuous: he had to know members even better than they knew themselves.", src: "Paraphrase of the same passage", para: true }
    ],
    rhythm: [
      { t: "6:30–7:00", d: "Awake; newspapers and overnight reports, often still in bed. In the Oval Office a console of three televisions let him watch all three network newscasts at once." },
      { t: "Morning–2:00", d: "First shift: meetings, calls, the Congress." },
      { t: "≈2:00", d: "Exercise — a swim or a brisk walk — then into pyjamas for a nap." },
      { t: "≈4:00", d: "Up, clean clothes, and a second working day." },
      { t: "Evening–1:00 or 2:00", d: "Second shift: more calls, memos, night reading of the day's paper." }
    ],
    rhythmSrc: "Kearns Goodwin, Lyndon Johnson and the American Dream; accounts of aides. The 'two-shift day' is his presidential routine.",
    practices: [
      { id: "dodge", cat: "network", name: "Four showers on the first night", stage: "1931 — new congressional secretary",
        what: "Moved into the Dodge Hotel, home to dozens of other congressional secretaries. On his first night he went to the communal bathroom four times and took four showers to meet as many of them as possible; the next morning he went back five times at ten-minute intervals to wash and brush his teeth. Before he had unpacked he was knocking on doors down the hall.",
        volume: "4 showers, 5 tooth-brushings, one hallway",
        mechanism: "Proximity is a channel. He was learning how Washington worked from the people who ran its offices; a veteran secretary concluded that within months he knew how to operate better than some who had been there twenty years.",
        cost: "Transparent calculation. People noticed the eagerness, and not everyone liked it.",
        tryit: "Go where your peers already gather, repeatedly, before you need anything from them — and make the early encounters about learning how the place works.",
        attrib: ["self", "witness"], grade: "reported", source: "Johnson's own later account, via Kearns Goodwin; Caro, The Path to Power" },
      { id: "littlecongress", cat: "machine", name: "Taking over the Little Congress", stage: "1933",
        what: "The Little Congress was a moribund debating society for congressional aides. Johnson packed its election with newcomers and got himself elected speaker, then used it as a stage and a training ground — inviting real members to speak and running it like a legislature.",
        volume: null,
        mechanism: "It taught him to organise and count votes years before he had any to count, and it put him in front of the members whose staff he was.",
        cost: "Older members resented being outmanoeuvred by a newcomer.",
        tryit: "Join the association everyone else ignores and make it work; it is the cheapest platform there is.",
        attrib: ["witness", "biographer"], grade: "documented", source: "Caro, The Path to Power; Dallek, Lone Star Rising" },
      { id: "mail", cat: "machine", name: "Every letter answered", stage: "1931–48 — aide, then congressman",
        what: "Insisted that constituent mail be answered fast — ideally the day it arrived — and drove his staff late into the night to do it. Constituent service was treated as the foundation of everything else.",
        volume: null,
        mechanism: "Responsiveness compounds: each answered letter is a small favour that the voter, and the voter's neighbours, remember at the next election.",
        cost: "Staff worked punishing hours; the standard was enforced by fear as much as by example.",
        tryit: "Set a response-time standard — a same-day reply rule — and hold it when it is inconvenient.",
        attrib: ["witness", "biographer"], grade: "reported", source: "Caro, The Path to Power" },
      { id: "patrons", cat: "patrons", name: "The professional son", stage: "1937–1954",
        what: "Attached himself to older, powerful, often lonely men and made himself indispensable to them. In the House it was Speaker Sam Rayburn; in the Senate it was Richard Russell, the bachelor who ran the Southern caucus, whom Johnson drew into his home for meals and whose devotion to the Senate's rules he shared and studied.",
        volume: null,
        mechanism: "Sponsorship shortcuts seniority. Russell's backing helped make Johnson party whip in 1951 and leader in 1953, after only four years in the Senate.",
        cost: "Instrumental relationships can break: Johnson's civil-rights turn as president left Russell feeling betrayed.",
        tryit: "Identify the two or three senior people whose sponsorship matters. Serve their interests — and their company — not only their power.",
        attrib: ["biographer"], grade: "documented", source: "Caro, Master of the Senate ('professional son' is Caro's phrase)" },
      { id: "readingmen", cat: "intel", name: "Reading men", stage: "1949–1960 — the Senate",
        what: "Studied every senator: what each wanted, feared and drank, whom he listened to, what he needed for re-election. Johnson collected this the way others collected stamps — in conversation, from staff, from the cloakroom.",
        volume: null,
        mechanism: "Persuasion is cheap once you know what the other person needs. The Treatment worked because it was aimed.",
        cost: "Everyone became a file; friendships blurred into leverage.",
        tryit: "Keep a one-page profile of each key relationship: what they want, what they fear, how they measure themselves. Update it after every conversation.",
        attrib: ["witness", "biographer"], grade: "documented", source: "Caro, Master of the Senate; Evans & Novak, The Exercise of Power" },
      { id: "count", cat: "intel", name: "Never call a vote you haven't counted", stage: "1955–1960 — Majority Leader",
        what: "With his aide Bobby Baker keeping the tally, Johnson knew where each senator stood before a roll call, and delayed votes until he had the numbers.",
        volume: null,
        mechanism: "A leader who never loses a vote acquires authority that wins the next one.",
        cost: "Baker's later scandal showed what an indispensable fixer could do with the access.",
        tryit: "Before any decision meeting, know where each decision-maker stands — and do not call the question until you do.",
        attrib: ["witness", "biographer"], grade: "documented", source: "Caro, Master of the Senate" },
      { id: "treatment", cat: "persuasion", name: "The Treatment", stage: "1950s–1960s",
        what: "One-on-one persuasion at close range: Evans and Novak described it lasting from ten minutes to four hours, in a tone that could move from supplication through cajolery and tears to the hint of threat, his face inches from the target's. Photographs of Johnson bearing down on Senator Theodore Green (1957) made it famous.",
        volume: "10 minutes to 4 hours per session",
        mechanism: "Information, emotional intensity and total attention, delivered in private where the target could not posture for an audience.",
        cost: "It intimidated more than it convinced, and it did not scale to a television audience or to Vietnam, where no one-on-one could fix the war.",
        tryit: "The transferable part is not the lapel-grabbing. It is doing important persuasion in person, one at a time, armed with knowledge of what the other person needs.",
        attrib: ["witness"], grade: "documented", source: "Rowland Evans & Robert Novak, Lyndon B. Johnson: The Exercise of Power (1966). For a systematic look, see Beckmann, Chaturvedi & Garcia, 'Targeting the Treatment' (Legislative Studies Quarterly, 2017), which codes every contact Johnson had with members of Congress as president." },
      { id: "phone", cat: "network", name: "The telephone, incessantly", stage: "Throughout; documented as president",
        what: "Johnson governed by phone. He secretly recorded his calls throughout his presidency — the only president of the six who taped to do so — and the surviving tapes run to nearly 850 hours, including more than 9,400 telephone conversations.",
        volume: "≈9,400 recorded calls in just over five years",
        mechanism: "Continuous contact keeps relationships warm and information current; his own rule was 'continuously, incessantly, and without interruption'.",
        cost: "Recording people without their knowledge; and the habit filled every hour.",
        tryit: "Volume of contact is a strategy, not a by-product. Count your calls.",
        attrib: ["self", "witness"], grade: "documented", source: "Miller Center, Presidential Recordings of Lyndon B. Johnson; LBJ Library" },
      { id: "twoshift", cat: "energy", name: "The two-shift day", stage: "Presidency (1963–69)",
        what: "Up at 6:30 or 7, worked until about 2, exercised, changed into pyjamas and napped, rose around 4 in fresh clothes and worked a second day until 1 or 2 in the morning.",
        volume: "Two working days in one",
        mechanism: "The nap reset his energy for a second shift — more hours of contact than anyone in Washington could match.",
        cost: "His 1955 heart attack, at 46 and while Majority Leader, was the warning about his pace; staff paid for the second shift too.",
        tryit: "If your work runs late, split the day deliberately rather than grinding through it.",
        attrib: ["witness", "biographer"], grade: "documented", source: "Kearns Goodwin, Lyndon Johnson and the American Dream; aides' accounts" },
      { id: "staff", cat: "machine", name: "A staff on call at every hour", stage: "Throughout",
        what: "Demanded total loyalty and availability, alternating generosity with humiliation. Aides worked his hours and absorbed his rages.",
        volume: null,
        mechanism: "Throughput: a devoted staff multiplied the contact he could sustain.",
        cost: "The humiliation is the lesson not to copy; turnover and fear distorted what reached him.",
        tryit: "Keep the throughput and drop the abuse: high standards and fast turnaround do not require fear.",
        attrib: ["witness", "biographer"], grade: "documented", source: "Caro; Randall Woods, LBJ: Architect of American Ambition" }
    ],
    books: ["caro-path-to-power", "master-of-the-senate", "kearns-american-dream", "evans-novak-exercise", "woods-lbj", "leadership-turbulent-times"]
  },

  // ================================================================
  clinton: {
    oneLine: "A memory system and an appetite for people: Clinton recorded everyone he met, called them late at night for decades, and turned the result into the national network that carried him to the presidency.",
    ownWords: [
      { text: "He called himself a compulsive person who would always think of another phone call that needed to be made, another thing to read.", src: "Paraphrase of a 1980s interview as governor of Arkansas", para: true },
      { text: "Most of the mistakes I made, I made when I was too tired.", src: "Clinton in interviews in 2007–08, reflecting on his career" }
    ],
    rhythm: [
      { t: "Day", d: "Meetings that ran long: his attention to whoever was in front of him made schedules slip ('Clinton Standard Time')." },
      { t: "Evening", d: "Reading — policy, history, whatever was at hand — and talking." },
      { t: "After 11 pm", d: "Calls: friends, supporters, cabinet members and senators, often well past 1 a.m." },
      { t: "Night", d: "Short sleep, commonly reported at five or six hours or less." }
    ],
    rhythmSrc: "Less precisely documented than Johnson's: assembled from staff and cabinet accounts. Treat the hours as indicative.",
    practices: [
      { id: "cards", cat: "network", name: "The card file", stage: "From his student years",
        what: "Recorded the people he met — first, in some accounts, in a notebook at Oxford; in others on cards from Georgetown — and kept a growing file of 3x5 index cards with each person's details, where they had met, and something personal to remember.",
        volume: "Reportedly about 10,000 cards by 1980",
        mechanism: "Memory, externalised. Every later call or rope-line greeting could be personal, which is what turned acquaintances into a network.",
        cost: "Little, in itself — the cost came from what it fed: a life organised around contact.",
        tryit: "A personal CRM with the personal context, not just the contact details. Write the card the same day, and read it before you call.",
        attrib: ["witness"], grade: "reported", source: "Widely reported; accounts differ on where it began. Maraniss, First in His Class, on the Georgetown and Oxford networks" },
      { id: "cohort", cat: "network", name: "Building the cohort in his twenties", stage: "1964–1974",
        what: "Treated each stage — Georgetown, a Rhodes scholarship at Oxford, Yale Law School, running George McGovern's 1972 campaign in Texas — as a place to make friends who would be useful for decades. The 'Friends of Bill' became the core of his 1992 campaign and fundraising.",
        volume: null,
        mechanism: "A national network built before he needed it, from people who themselves rose.",
        cost: "Loyalty ran both ways: friends expected access, and some brought trouble with them.",
        tryit: "The people you meet in your twenties are your network at fifty. Keep up with them before there is a reason to.",
        attrib: ["witness", "biographer"], grade: "documented", source: "Maraniss, First in His Class" },
      { id: "fulbright", cat: "patrons", name: "Working for Fulbright", stage: "1966–1968",
        what: "As a Georgetown student he worked as a clerk for the Senate Foreign Relations Committee under J. William Fulbright of Arkansas, the senator he admired, watching the Vietnam hearings from the inside.",
        volume: null,
        mechanism: "A patron's office teaches how power works and lends a young man a name to trade on at home.",
        cost: "None obvious; it also shaped his early opposition to the war, which followed him in 1992.",
        tryit: "Work close to someone whose career you want to understand, early, even in a junior role.",
        attrib: ["self", "biographer"], grade: "documented", source: "Clinton, My Life; Maraniss" },
      { id: "calls", cat: "network", name: "Late-night calls", stage: "Governor through post-presidency",
        what: "Called friends, supporters and officials at all hours. Cabinet members recalled that a call after 1 a.m. was always the president; his chief of staff John Podesta remembered a 2:30 a.m. call asking him to phone a senator to correct something Clinton had seen on C-SPAN. Politicians still describe late-night calls from him decades later.",
        volume: "Often several calls after midnight",
        mechanism: "Contact as maintenance: the network stayed warm because he never stopped tending it, and he heard things from outside the official channels.",
        cost: "His staff's sleep as well as his own.",
        tryit: "Block time every day for calls that have no transactional purpose. The network is what you maintain when you don't need it.",
        attrib: ["self", "witness"], grade: "documented", source: "Bill Richardson and John Podesta, quoted in press accounts" },
      { id: "attention", cat: "persuasion", name: "Total attention on the rope line", stage: "Throughout",
        what: "Eye contact, the hand on the arm, remembering names and stories, and the ability to make the person in front of him feel like the only one in the room — described by supporters and opponents alike.",
        volume: null,
        mechanism: "The card file and the calls supplied the memory; the attention made it feel like intimacy rather than technique.",
        cost: "It made him chronically late and hard to schedule.",
        tryit: "Give the person in front of you your whole attention, and come prepared with one thing you remember about them.",
        attrib: ["witness"], grade: "documented", source: "Many accounts; Maraniss; John F. Harris, The Survivor" },
      { id: "wonk", cat: "prep", name: "Reading, and knowing the policy cold", stage: "Throughout",
        what: "A voracious reader who mastered policy detail and liked to explain it — the trait that made him a convincing governor at education and welfare reform and, later, the party's 'explainer-in-chief'.",
        volume: null,
        mechanism: "Command of substance made his charm credible with elites as well as voters.",
        cost: "He could talk too long and decide too slowly.",
        tryit: "Know the substance better than the people you are persuading — then say it in plain words.",
        attrib: ["witness", "biographer"], grade: "documented", source: "Maraniss; Harris" },
      { id: "defeat", cat: "prep", name: "Learning from the 1980 defeat", stage: "1980–1982",
        what: "Lost the governorship in 1980 after one term, apparently out of touch. In 1982 he apologised to voters on television — his daddy, he said, never had to whip him twice for the same thing — and won the office back, then governed in permanent-campaign mode with the pollster Dick Morris.",
        volume: null,
        mechanism: "A public post-mortem turned the defeat into a story of growth, and constant polling kept him from being surprised again.",
        cost: "Governing by poll invited the charge that he believed in nothing he had not tested.",
        tryit: "After a loss, do the post-mortem honestly and say what you learned out loud.",
        attrib: ["self", "witness"], grade: "documented", source: "1982 campaign; Maraniss" },
      { id: "speech", cat: "persuasion", name: "Turning a bad speech into a joke on himself", stage: "1988–1992",
        what: "His nominating speech for Michael Dukakis at the 1988 convention ran 33 minutes, double his slot; delegates cheered when he said 'in closing'. Soon afterwards he was on Johnny Carson laughing about it, and in 1992 he opened his acceptance speech by saying he had come back to finish it.",
        volume: "33 minutes — about double his slot",
        mechanism: "Self-deprecation converted a humiliation into likeability and a story people retold.",
        cost: "The long-windedness never entirely went away.",
        tryit: "When you fail in public, be the first to make the joke — then fix the habit that caused it.",
        attrib: ["witness"], grade: "documented", source: "Press accounts of the 1988 and 1992 conventions" },
      { id: "sleep", cat: "energy", name: "Running short on sleep", stage: "Throughout",
        what: "Slept little for most of his career, by his own account and his staff's.",
        volume: "Commonly reported at 5–6 hours or less",
        mechanism: "More hours for people, reading and calls — the raw material of everything else above.",
        cost: "He drew the lesson himself: most of his mistakes, he said, were made when he was too tired.",
        tryit: "The one habit here its owner later disowned. Take the rest of his system and keep your sleep.",
        attrib: ["self"], grade: "documented", source: "Clinton, interviews 2007–08" },
      { id: "late", cat: "machine", name: "The missing machinery", stage: "Governor and early presidency",
        what: "Chronically late, with meetings that overran and a White House in its first year that was loosely run until Leon Panetta became chief of staff in 1994.",
        volume: null,
        mechanism: "The negative case: a people-first temperament without a strong chief of staff loses time and discipline.",
        cost: "Lost time and early stumbles in 1993.",
        tryit: "If you are the people-person, hire the scheduler and the chief of staff who will say no to you.",
        attrib: ["witness", "biographer"], grade: "documented", source: "Harris, The Survivor; Bob Woodward, The Agenda" }
    ],
    books: ["first-in-his-class", "clinton-my-life", "harris-survivor", "branch-clinton-tapes"]
  }
};

// What the worked examples share — my synthesis, not a finding
window.PRACTICE_PATTERNS = [
  { name: "Volume is the strategy", text: "Both maximised the number of human contacts — Johnson's 9,400 recorded calls in five years, Clinton's card file and midnight phone list. The habit Ari Emanuel credits (some 200 calls a day, by his account) belongs to the same family." },
  { name: "A memory system behind the charm", text: "Clinton externalised it on cards; Johnson held it in his head and in his staff. Neither relied on charm alone: the personal touch was prepared." },
  { name: "Intelligence before persuasion", text: "Johnson counted votes and read men before he gave the Treatment; Clinton knew the policy and the person before the rope line. The visible skill sat on invisible preparation." },
  { name: "Patrons early, cohort early", text: "Johnson found older sponsors; Clinton built a network of peers who rose with him. Both started in their twenties, long before they needed it." },
  { name: "They paid in sleep, health and staff", text: "Johnson's heart attack at 46; Clinton's own verdict on fatigue; staffs worn down by both. The practices worked, and they were not free." }
];
