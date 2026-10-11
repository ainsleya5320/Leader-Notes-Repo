// ============================================================
// SELECTORATE THEORY — Bruce Bueno de Mesquita
// with Alastair Smith, Randolph Siverson & James Morrow,
// The Logic of Political Survival (2003); with Smith,
// The Dictator's Handbook (2011); and his wider work.
// ============================================================
// Every leader answers to three nested groups:
//   N  the nominal selectorate — everyone with a formal say (the interchangeables)
//   S  the real selectorate — those whose say actually counts (the influentials)
//   W  the winning coalition — those whose support the leader cannot survive without (the essentials)
// W decides what a leader must pay for: with a small W it is cheaper to
// buy the essentials privately; with a large W only public goods reach
// enough of them. W/S — how easily an essential can be replaced —
// is the "loyalty norm": the smaller it is, the more afraid each
// essential is of being dropped, and the longer a bad leader lasts.
// Per-leader W, S and N live in powerbase.js; this file holds the
// theory, the five rules, the wider work, and tenure corrections.
// ============================================================

window.BDM_PROPOSITIONS = [
  { key: "goods", claim: "Small coalitions are paid in private goods; large coalitions can only be paid in public goods.", test: "goods" },
  { key: "loyalty", claim: "The smaller W is relative to S, the stronger the loyalty norm — and the longer leaders survive even when they govern badly. Bad policy can be good politics.", test: "badpolicy" },
  { key: "tenure", claim: "Leaders of small-coalition systems survive in office longer than leaders of large-coalition systems.", test: "tenure" },
  { key: "fate", claim: "Deposed small-coalition leaders face worse fates — exile, prison, death — which is part of why they cling to office.", test: "fate" },
  { key: "war", claim: "Large-coalition leaders fight only wars they expect to win and try harder once in them; that, not shared values, is the democratic peace.", test: null },
  { key: "rents", claim: "Resource rents and foreign aid let a leader pay the coalition without the population, so they shrink W and entrench autocracy.", test: null },
  { key: "early", claim: "New autocrats are most vulnerable early, before their supporters can be sure they will be kept on; established autocrats are hard to remove.", test: null }
];

// The Dictator's Handbook's five rules, read through the atlas
window.BDM_RULES = [
  { n: 1, rule: "Keep your winning coalition as small as possible.",
    gloss: "Every essential must be paid; fewer essentials leave more for each of them and for the ruler.",
    followed: [
      { id: "stalin", how: "The Terror shrank the essentials to a Politburo that met at his dacha — about 25 people who counted." },
      { id: "xi", how: "Power concentrated in a Standing Committee of seven, reshaped in 2022 to contain no one who was not his." },
      { id: "louis14", how: "Moved the court to Versailles so that the few dozen grandees who mattered lived where he could pay and watch them." }
    ],
    broke: [
      { id: "gorbachev", how: "Widened W with contested elections in 1989 and a presidency chosen by a congress, giving up the small coalition without acquiring a mass one." },
      { id: "diocletian", how: "Broke it on purpose: four emperors, four courts and four sets of essentials, so that no army lacked an emperor of its own. It worked while he arbitrated. Within a year of his retirement the four coalitions were at war." }
    ] },
  { n: 2, rule: "Keep your nominal selectorate as large as possible.",
    gloss: "A vast pool of interchangeables makes every essential replaceable — and so loyal.",
    followed: [
      { id: "napoleon", how: "Universal male suffrage in the plebiscites of 1799, 1802 and 1804: millions of nominal voters behind a coalition of marshals and notables." },
      { id: "stalin", how: "The 1936 constitution gave every adult a vote in single-candidate elections, and the party admitted millions — N as large as the country." },
      { id: "xi", how: "Nearly a hundred million party members as the pool from which a handful are chosen." }
    ],
    broke: [
      { id: "cromwell", how: "His selectorate was essentially the Army, so the officers who mattered could not be replaced — and they vetoed him when he considered the crown." }
    ] },
  { n: 3, rule: "Control the flow of revenue.",
    gloss: "Money that comes from rents, aid or confiscation does not require the people's cooperation, so the people need not be paid.",
    followed: [
      { id: "putin", how: "Oil and gas rents, with Yukos as the lesson in 2003–04 of what happens to anyone else who controls a revenue stream." },
      { id: "castro", how: "Nationalised almost everything in 1959–60, then lived on Soviet sugar prices and subsidy." },
      { id: "cixi", how: "Kept the court's revenues under her own hand; the navy's money rebuilding the Summer Palace is the famous, and disputed, emblem of it." },
      { id: "constantine", how: "Took the gold of the pagan temples, which needed no one's consent, and minted it into the solidus that paid his army and his court." }
    ],
    broke: [
      { id: "leekuanyew", how: "The counter-case: a state with no rents to live on had to grow the economy to pay anyone — which pushed Singapore toward public goods despite a small party elite." }
    ] },
  { n: 4, rule: "Pay your key supporters just enough to keep them loyal.",
    gloss: "Pay too little and they defect; pay too much and they can afford to wait you out.",
    followed: [
      { id: "napoleon", how: "Titles, dotations of land in conquered territory and the Légion d'honneur — generous, and dependent on him staying in power." },
      { id: "augustus", how: "Made the soldiers' pensions an institution (the aerarium militare, AD 6), so they were paid by the state he controlled rather than by a general who might rival him." },
      { id: "louis14", how: "Pensions, offices and precedence at Versailles, rationed so that no one had enough to stop competing." }
    ],
    broke: [
      { id: "nkrumah", how: "Starved the regular army while favouring his own guard regiment; the army removed him in 1966 while he was abroad." },
      { id: "aurelian", how: "Squeezed his own officials and officers for graft. A secretary caught in a lie forged a list of officers marked for death, and they killed him first." }
    ] },
  { n: 5, rule: "Don't take money out of your supporters' pockets to make the people's lives better.",
    gloss: "Reform that transfers from the coalition to the population is the classic way good rulers fall.",
    followed: [
      { id: "stalin", how: "Special shops and dachas for the nomenklatura while the collective farms starved." },
      { id: "putin", how: "The rents stay with the coalition; pensions and wages rise only when the oil price leaves room." }
    ],
    broke: [
      { id: "gorbachev", how: "Cut into the nomenklatura's privileges and power to reform the system; the August 1991 coup was organised by his own appointees." }
    ] }
];

// the body of work
window.BDM_WORKS = [
  { title: "The War Trap", year: 1981, book: "war-trap",
    claim: "Wars are started by leaders who expect to gain from them: an expected-utility theory in which a state's power, its allies and the leader's attitude to risk decide whether fighting pays.",
    atlas: "The first half of the argument that war is a leader's choice, not a state's." },
  { title: "The Logic of Political Survival", year: 2003, book: "logic-political-survival",
    claim: "With Smith, Siverson and Morrow: the size of the winning coalition and the selectorate explains taxation, public goods, corruption, war-fighting and leader survival across regime types.",
    atlas: "The Power Base section on every profile, and the tests on this tab." },
  { title: "The Predictioneer's Game", year: 2009, book: "predictioneers-game",
    claim: "Politics as a game among self-interested players: map who wants what, how much they care and how much clout they have, and a forecasting model predicts the negotiated outcome.",
    atlas: "The method behind Compare and Coalition Brokerage — who needs whom, and at what price." },
  { title: "The Dictator's Handbook", year: 2011, book: "dictators-handbook",
    claim: "With Smith: the selectorate theory written for general readers, as five rules every ruler follows — and why bad behaviour is almost always good politics.",
    atlas: "The five rules above, matched to leaders in the atlas." },
  { title: "The Invention of Power", year: 2022, book: "invention-of-power",
    claim: "The Concordat of Worms (1122) gave kings a veto over bishops' appointments and the pope a stake in rich dioceses; the competition it set up between church and crown seeded Western secularism, representative institutions and prosperity.",
    atlas: "A selectorate argument applied to the medieval church — relevant to Frederick II, Louis IX and every ruler who fought Rome over appointments." }
];

// power years for leaders whose `years` field records a lifetime, not a tenure
// (null = not a ruler; excluded from tenure tests)
window.TENURE_YEARS = {
  hannibal: null, eleanor: null, kissinger: null,
  jcaesar: [-49, -44], caocao: [196, 220], nobunaga: [1568, 1582], lorenzo: [1469, 1492],
  cesareborgia: [1498, 1503], ieyasu: [1600, 1616], cromwell: [1653, 1658], toussaint: [1797, 1802],
  bolivar: [1813, 1830], sanmartin: [1817, 1822]
};
