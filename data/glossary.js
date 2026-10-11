// ============================================================
// GLOSSARY — hand-written definitions for terms of art
// ============================================================
// Most definitions come from the framework data files (Hermann's traits,
// Rubenzer's facets, Skowronek's positions, the rot ledger…) and are gathered
// by app.js at load. This file adds the terms that have no definition of their
// own elsewhere. Fields:
//   term     the term as it appears in the text
//   aliases  other spellings or forms
//   src      the framework or context it comes from
//   def      one or two plain sentences
//   prose    true = mark it inside running text (default: only multi-word terms are)
//   cs       true = match case-sensitively (for phrases that are also ordinary English)
// ============================================================

window.GLOSSARY_EXTRA = [
  // --- Bueno de Mesquita: selectorate theory
  { term: "Selectorate", aliases: ["selectorate theory"], src: "Bueno de Mesquita et al.", prose: true,
    def: "Everyone with a formal say in choosing the leader — all voters in a democracy; the party elite, army officers or royal family in an autocracy." },
  { term: "Winning coalition", src: "Bueno de Mesquita et al.",
    def: "The part of the selectorate whose support a leader actually needs to stay in power. Small coalitions can be bought with private goods; large ones only with public goods." },
  { term: "Loyalty norm", aliases: ["W/S"], src: "Bueno de Mesquita et al.",
    def: "The winning coalition's size relative to the selectorate (W/S). When it is small, each member is easily replaced and so stays loyal — the dictator's advantage." },
  { term: "Private goods", src: "Bueno de Mesquita et al.",
    def: "Benefits that go only to the leader's supporters — contracts, jobs, licences, the right to loot." },
  { term: "Public goods", src: "Bueno de Mesquita et al.",
    def: "Benefits everyone shares whether or not they backed the leader — the rule of law, roads, defence, sound money." },

  // --- other frameworks
  { term: "Political time", src: "Skowronek",
    def: "Stephen Skowronek's idea that a leader's opportunities depend on where they stand relative to the governing order they inherit — affiliated with it or opposed, with the order resilient or vulnerable." },
  { term: "Archigos", src: "Goemans, Gleditsch & Chiozza", prose: true,
    def: "A dataset recording how national leaders since 1875 came to power, how they left office, and what happened to them afterwards." },
  { term: "NEO-PI-R", src: "Rubenzer & Faschingbauer", prose: true,
    def: "The Revised NEO Personality Inventory, a standard questionnaire for the Big Five personality domains and thirty facets. Rubenzer and Faschingbauer had experts complete it for each U.S. president." },
  { term: "Big Five", src: "Personality psychology", cs: true,
    def: "The five broad dimensions of personality in modern psychology: openness, conscientiousness, extraversion, agreeableness and neuroticism." },
  { term: "Leadership Trait Analysis", aliases: ["LTA"], src: "Hermann", prose: true,
    def: "Margaret Hermann's method of scoring seven traits from what leaders say off-script — interview answers and press conferences rather than prepared speeches." },
  { term: "Encompassing interest", src: "Olson",
    def: "An interest large enough to bear a big share of the costs of its own actions — so it has reason to care about the whole economy, as a secure stationary bandit or a broad majority does." },
  { term: "Distributional coalitions", aliases: ["distributional coalition"], src: "Olson",
    def: "Organised interest groups that fight for a bigger share of output rather than more output. Olson argued they accumulate in long-stable societies and slow growth." },
  { term: "Moral hazard", src: "Svolik",
    def: "In Svolik's account of dictatorship, the danger that the army or police a ruler relies on for repression gain leverage over him — the more he needs them, the more they can demand, or remove him." },
  { term: "Co-optation", aliases: ["co-opt", "co-opts", "co-opted"], src: "Svolik", prose: true,
    def: "Controlling a population by buying support — party membership, jobs, benefits — rather than by repression." },
  { term: "Routinization of charisma", aliases: ["routinizing charisma", "routinisation of charisma"], src: "Max Weber",
    def: "Weber's problem: authority resting on one person's extraordinary qualities must be turned into rules, offices or a succession procedure, or it dies with him." },
  { term: "Iron law of oligarchy", src: "Robert Michels",
    def: "Michels's claim that every organisation, however democratic in intent, ends up run by a small, self-perpetuating leadership." },
  { term: "Agreement", src: "Convergence view",
    def: "100 minus the spread of a leader's percentile ranks across the frameworks. High means the frameworks tell the same story about that leader." },
  { term: "Entrenched rot", src: "This atlas (my construction)",
    def: "Mean rot × leakage × (1 − reversibility): how much decay an organisation carried, how far it spread into the state, and how hard it was to remove." },
  { term: "Linkage", src: "Kitschelt & Wilkinson",
    def: "How a party binds voters to it: clientelistic (contingent, individual benefits), programmatic (policies that apply to everyone), or a mix." },
  { term: "Clientelistic linkage", src: "Kitschelt & Wilkinson",
    def: "Binding voters with benefits that are targeted and contingent on support — jobs, favours, goods — rather than with policy." },
  { term: "Programmatic linkage", src: "Kitschelt & Wilkinson",
    def: "Binding voters with policies whose benefits apply to everyone in a category, whether or not they voted for the party." },

  // --- domain labels used on scores
  { term: "U.S. president", src: "Domain label", prose: false,
    def: "Scored on the population the instrument was built and validated on — U.S. presidents. The most reliable kind of score in the atlas." },
  { term: "Modern executive", src: "Domain label", prose: false,
    def: "Applied beyond the original sample but to a comparable role — a prime minister or president of a modern state. Readable, with care." },
  { term: "Outside validated domain", src: "Domain label", prose: false,
    def: "Applied well beyond the population the instrument was validated on — monarchs, warlords, autocrats. A structured estimate, not a measurement." },

  // --- patronage and party terms
  { term: "Patronage democracy", src: "Kanchan Chandra",
    def: "A democracy in which the state is the main source of jobs and services and officials have discretion over who gets them — so voters back the party most likely to favour people like them." },
  { term: "Prebendalism", aliases: ["prebendal", "prebend", "prebends"], src: "Richard Joseph", prose: true,
    def: "Treating public office as a 'prebend' — an entitlement its holder may use to benefit himself, his supporters and his kin. Joseph's term for Nigerian politics." },
  { term: "Godfatherism", aliases: ["godfathers", "political godfathers"], src: "Nigerian politics", prose: true,
    def: "Political sponsors who fund a candidate and secure his nomination, then expect to control the office — appointments, contracts — once he wins." },
  { term: "Zoning", src: "Nigerian politics",
    def: "An informal party convention, begun in the PDP, rotating the presidency and other top offices between north and south and among the six geopolitical zones." },
  { term: "Club goods", src: "Patronage",
    def: "Benefits given to a group — a village road, a mosque repair — rather than to individuals; common where candidates rather than parties run the networks." },
  { term: "Open list", aliases: ["open-list"], src: "Electoral systems",
    def: "A proportional system in which voters choose individual candidates within a party's list, so candidates compete against their own party-mates." },
  { term: "Malapportionment", src: "Electoral systems", prose: true,
    def: "Electoral districts of very unequal population, which give some voters' ballots more weight than others'." },
  { term: "Gerrymander", aliases: ["gerrymandering", "gerrymanders"], src: "Electoral systems", prose: true,
    def: "Drawing electoral boundaries to favour one party." },
  { term: "Sexenio", src: "Mexico", prose: true,
    def: "Mexico's single six-year presidential term, with no re-election — the clock around which careers turned under the PRI." },
  { term: "Dedazo", src: "Mexico", prose: true,
    def: "'The big finger': the outgoing Mexican president's personal choice of the PRI's next presidential candidate, ratified by the party, until an open primary replaced it in 1999." },
  { term: "Cadre deployment", src: "South Africa",
    def: "The ANC's policy of placing party loyalists in posts across the state and state-owned enterprises." },
  { term: "Dawn attack", aliases: ["serangan fajar"], src: "Indonesia",
    def: "Cash handed out to voters in the hours before polling opens." },
  { term: "Punteros", aliases: ["puntero"], src: "Argentina", prose: true,
    def: "Neighbourhood brokers in Argentina's Peronist networks who distribute benefits and mobilise voters." },
  { term: "Yushin", src: "South Korea", prose: true,
    def: "Park Chung-hee's 1972 constitution, which let him be re-elected indefinitely by an electoral college he controlled and gave him sweeping emergency powers." },
  { term: "Floating mass", src: "Indonesia",
    def: "The Suharto-era doctrine barring political parties from organising in villages between elections, leaving the state-backed Golkar network unchallenged." },
  { term: "Dual function", aliases: ["dwifungsi"], src: "Indonesia",
    def: "The Suharto-era doctrine that the army had a political and administrative role as well as a military one." },
  { term: "Licence raj", aliases: ["licence-permit raj", "license raj"], src: "India",
    def: "The permits and quotas needed to start, expand or import in India from the 1950s to 1991 — a rich source of patronage." },
  { term: "Kantei", src: "Japan", prose: true,
    def: "The Japanese prime minister's official residence and office — shorthand for the prime minister's centralised staff." },
  { term: "Koenkai", aliases: ["kōenkai"], src: "Japan", prose: true,
    def: "A Japanese politician's personal support organisation, which mobilises voters for the candidate rather than the party." },
  { term: "GRC", aliases: ["Group Representation Constituency", "GRCs"], src: "Singapore", prose: true, cs: true,
    def: "A multi-member constituency contested by party teams, winner takes all — introduced in 1988 and widely seen as favouring the PAP." },

  // --- the late Roman state (Aurelian, Diocletian, Constantine)
  { term: "Tetrarchy", aliases: ["tetrarchs", "tetrarchic"], src: "Late Roman Empire", prose: true,
    def: "Diocletian's 'rule of four' (293–c. 308): two senior emperors (Augusti) and two juniors (Caesars), each with his own court and army, the Caesars chosen in advance to succeed." },
  { term: "Dominate", src: "Late Roman Empire", prose: true, cs: true,
    def: "Older scholars' name for the late Roman monarchy from Diocletian on, after dominus ('lord'): the emperor as a remote, sacred master rather than Augustus's 'first citizen'. Now used with caution, since the break was less sharp than the word suggests." },
  { term: "Soldier-emperors", aliases: ["soldier-emperor", "barracks emperors"], src: "Late Roman Empire",
    def: "The emperors of 235–284, most of them army officers acclaimed by their troops; some twenty reigned in fifty years, and most died violently." },
  { term: "Iugatio–capitatio", aliases: ["iugatio-capitatio", "capitatio"], src: "Late Roman Empire", prose: true,
    def: "Diocletian's tax system: land assessed in fiscal units (iuga) and labour in heads (capita), with the rate per unit published each year and collected largely in kind." },
  { term: "Indiction", aliases: ["indictions"], src: "Late Roman Empire", prose: true,
    def: "The annual published tax assessment of the late empire; from 312 counted in fifteen-year cycles, which became a standard way of dating documents." },
  { term: "Solidus", aliases: ["solidi"], src: "Late Roman Empire", prose: true,
    def: "Constantine's gold coin, struck at 72 to the Roman pound from about 309. It kept its weight and purity for some seven centuries." },
  { term: "Comitatenses", src: "Late Roman Empire", prose: true,
    def: "The late Roman mobile field armies that travelled with the emperor or his generals, as opposed to the limitanei who held the frontiers." },
  { term: "Limitanei", src: "Late Roman Empire", prose: true,
    def: "Late Roman frontier troops, settled along the borders; lower in pay and prestige than the field armies." },
  { term: "Adoratio", aliases: ["proskynesis"], src: "Late Roman Empire", prose: true,
    def: "The prostration before the emperor, with a kiss of the hem of his purple robe, required at court from Diocletian on." },
  { term: "Labarum", src: "Late Roman Empire", prose: true,
    def: "Constantine's military standard, topped with the Chi-Rho (the first two Greek letters of 'Christ'), carried before the army after 312." },
  { term: "Episcopalis audientia", aliases: ["bishops' courts"], src: "Late Roman Empire",
    def: "The hearing of civil cases by bishops, given legal force by Constantine (318): their judgments were enforced by the state and could not be appealed." },

  // --- practices
  { term: "Directed telescope", src: "Martin van Creveld",
    def: "Trusted officers a commander sends to see for themselves and report directly to him, bypassing the chain of command." },
  { term: "The Treatment", aliases: ["Johnson Treatment"], src: "Lyndon Johnson", cs: true,
    def: "Johnson's close-range, one-on-one persuasion — flattery, argument, pleading and threat delivered inches from the target's face." },
  { term: "Five Ps", src: "James Baker", cs: true,
    def: "'Prior preparation prevents poor performance' — the maxim Baker took from his father." }
];
