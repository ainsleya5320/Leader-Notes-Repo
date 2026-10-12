// ============================================================
// FEAR & SPIN — Guriev & Treisman; regime types after Geddes, Wright & Frantz
// ============================================================
// Sergei Guriev & Daniel Treisman, Spin Dictators: The Changing Face of
// Tyranny in the 21st Century (2022), and "Informational Autocrats",
// Journal of Economic Perspectives 33:4 (2019).
//
// The argument. Every dictator wants to monopolise power; what differs is
// how he keeps the public in line. A FEAR dictator does it by intimidation:
// he kills and imprisons opponents and makes sure people see it, censors
// everything in the open, imposes an ideology or a cult, derides liberal
// democracy and often closes the borders. A SPIN dictator does it by
// deception: he manipulates information so that people believe he is
// competent, spends the popularity that buys on consolidating his power,
// pretends to be a democrat, opens the country to the world, and avoids
// violence or hides it when he uses it. Fear was the twentieth-century norm.
// By their count spin dictators rose from 13 to 53 per cent of each new
// cohort of dictators between the 1970s and the 2000s, while fear
// dictators fell from 60 per cent to under a tenth. Their explanation is
// modernisation: as more people are educated and connected, open terror
// costs more and manipulation pays better. They treat the two as poles of
// a spectrum, not boxes. Some 29 per cent of dictators in 1946–2015 are
// hybrids, and leaders can move in either direction during a reign.
//
// Their rule of thumb (book ch. 1; online supplement, Table OS1.2), for
// leaders in power at least five years in a nondemocracy:
//   spin — national elections in which at least one opposition party runs;
//          a few critical media outlets every year; fewer than 10 state
//          political killings a year on average; fewer than 1,000 political
//          prisoners in any year.
//   fear — 10 or more state political killings a year on average and/or
//          1,000 or more political prisoners in some year, with few or no
//          critical media outlets in at least one year.
//   Everyone else is a hybrid ("mixed" here).
// The counts come from their Authoritarian Control Techniques database
// (V.2, January 2022), which covers leaders who took office after 1945.
//
// Per-leader fields:
//   type      "fear" | "spin" | "mixed": the main type over the reign
//   path      optional: how the leader moved between the poles
//   violence  0–100  overt violence against the population: killing,
//             torture, mass imprisonment, colonial reprisals included
//             (estimate). Narrower than the Svolik 'rep' score, which also
//             counts surveillance, detention and the threat of force.
//   disguise  0–100  how far the regime imitated democracy: elections with
//             plausible margins, a working legislature, nominal courts and
//             press (estimate)
//   markers   keys from SPIN_MARKERS that clearly apply at some point in
//             the reign. A fear dictator can carry spin markers and the
//             reverse; the overlap is part of the reading.
//   gt        "named": Guriev & Treisman name and place this leader
//             themselves, in the book, the JEP article or their published
//             classification table. "": my reading in their framework.
//   gtNote    what they say, in one sentence, when named
//   gwf       regime type, a key of GWF_TYPES
//   gwfRegime the regime as Geddes, Wright & Frantz code it
//   gwfSrc    "GWF": the regime is a case in the GWF Autocratic Regimes
//             data (v1.2, 1946–2010). "estimate": not in it; my
//             classification by analogy with cases that are.
//   note      the reading
//
// How I scored. Where Guriev & Treisman classify a leader, the type follows
// them, with one exception argued in its note (Gorbachev). For Putin and
// Erdoğan, whom they class as spin dictators who later turned or slid
// towards fear, the type is the main one and the path records the turn.
// For the two leaders they do not discuss (Atatürk, Ho Chi Minh) I applied
// their rule of thumb to standard historical counts. Violence and disguise
// are my estimates, anchored on their counts where those exist (killings a
// year, peak political prisoners), kept in line with each other across the
// 25 leaders and with the atlas's Svolik scores. Like Svolik's, these
// numbers are estimates in the framework, not the authors' data.
//
// Regime types follow Barbara Geddes, Joseph Wright & Erica Frantz, How
// Dictatorships Work (2018), and their Autocratic Regimes data (v1.2). GWF
// classify REGIMES, meaning the group that chooses the leader and controls
// policy, not individual leaders. A regime's type is "time invariant across
// regime spell" (GWF codebook). Guriev & Treisman call the GWF typology
// "orthogonal" to theirs: GWF ask who rules, fear and spin ask how the
// rulers handle the public. Both kinds of dictator turn up in every GWF type.
// Coverage:
//   - GWF date a regime from its real start, so the Soviet regime (1917–91)
//     and Turkey's single-party regime (1923–50) are cases in the data even
//     though Lenin and Atatürk ruled before 1946. Their codes are GWF's.
//   - Germany 1933–45 and Italy 1922–43 ended before 1946: estimates.
//   - Xi: GWF code the People's Republic as one party-based regime from
//     1949, still in power when the data end in 2010. I keep that code
//     (gwfSrc "GWF"). The rules for choosing the leader have been bent, not
//     replaced, and a time-invariant type cannot register a personalisation
//     inside a regime. The note gives the drift to party-personal rule as my
//     reading.
//   - Erdoğan: GWF code Turkey a democracy to 2010, so his regime is an
//     estimate.
//   - Perón: GWF code 1946–51 as democratic and date the autocracy from the
//     "internal war" decree of 28 September 1951.
//   - Chiang: GWF leave China 1946–49 out (no government controlled the
//     territory). The coded regime is Taiwan 1949–2000.
//
// Sources: Spin Dictators ch. 1, Table 1.1 and index (Princeton UP sample);
// the online supplement (spindictators.com, January 2022), Table OS1.2; the
// Authoritarian Control Techniques database V.2; "Informational Autocrats"
// (JEP 2019) and its Table A1; Guriev, Democracy Paradox interview (July
// 2023); Treisman, Meduza interview (July 2023); GWF Autocratic Regimes 1.2
// data and codebook (case list and start/end narratives).
// ============================================================

window.SPIN_TYPES = [
  { key: "fear", name: "Fear dictator", color: "var(--reg-fear)", def: "Rules by intimidation. Violent repression is extensive and publicised to deter others, censorship is comprehensive and open, an official ideology or cult is often imposed, liberal democracy is derided and borders are often closed. Guriev & Treisman's rule of thumb: 10 or more state political killings a year on average and/or 1,000 or more political prisoners in some year, with few or no critical media outlets in at least one year." },
  { key: "spin", name: "Spin dictator", color: "var(--reg-motivate)", def: "Rules by deception. He manipulates information to seem competent and win real popularity, then spends it on consolidating power, while pretending to be a democrat, opening the country to the world and avoiding violence or concealing it. Rule of thumb: national elections in which at least one opposition party runs, a few critical media outlets every year, fewer than 10 state political killings a year on average and fewer than 1,000 political prisoners in any year." },
  { key: "mixed", name: "Mixed", color: "var(--reg-loyalty)", def: "Guriev & Treisman's hybrids, 29 per cent of dictators in 1946–2015, meet neither rule. Some bar opposition parties and public criticism without much violence; others use considerable violence while tolerating, or failing to suppress, opposition media. Here it also covers a ruler whose reign began on one side and ended on the other." }
];

// The observable markers Guriev & Treisman use to tell the two apart
// (their Table 1.1 and five 'rules of spin'). pole: "fear" | "spin"
window.SPIN_MARKERS = {
  masskilling: { label: "Mass political killing", pole: "fear", def: "The state kills unarmed opponents, protesters or targeted groups for political reasons: 10 or more a year on average by Guriev & Treisman's rule of thumb, and in the worst cases millions. Killing in two-sided fighting does not count; civilians deliberately targeted do." },
  prisoners: { label: "Mass political imprisonment", pole: "fear", def: "A thousand or more political prisoners or detainees (held more than a few hours) in some year: camps, prisons, internal exile. The second half of their fear threshold." },
  showtrials: { label: "Show trials and public violence", pole: "fear", def: "Violence staged to be seen, because deterrence needs an audience: show trials, public executions, televised confessions, bodies put on display. Fear dictators publicise their brutality; spin dictators hide it." },
  censorship: { label: "Overt censorship", pole: "fear", def: "Comprehensive and openly announced: censorship offices, bans and closures, book-burnings, no critical outlets at all. Obeying the rules on speech becomes a public test of loyalty." },
  ideology: { label: "Official ideology or personality cult", pole: "fear", def: "A doctrine written into law, or a cult of the leader, imposed through loyalty rituals and heavy-handed propaganda that defines opponents as enemies and helps motivate the people who punish them." },
  closed: { label: "Closed borders", pole: "fear", def: "Travel abroad needs permission or is impossible, foreign broadcasts are jammed, foreign newspapers banned: the country quarantined from outside people and information." },
  cooptedmedia: { label: "Co-opted or bought media", pole: "spin", def: "Private media kept but steered through friendly owners, state advertising, licences, tax cases and libel suits. Critical outlets survive at the margins, so the public thinks the press is fairly free; the censorship itself is censored." },
  elections: { label: "Elections won with plausible margins", pole: "spin", def: "Regular multiparty elections in which the opposition is allowed to run and loses: landslides large but believable, secured by harassment, media bias and rule-bending rather than by banning rivals or announcing 99 per cent." },
  performance: { label: "Performance legitimacy", pole: "spin", def: "Propaganda of competence rather than of threat: growth, wages, services and order claimed as the leader's work, failures blamed on outside conditions or enemies. Their speech analysis finds spin dictators talk like democrats about the economy." },
  institutions: { label: "Imitation of democratic institutions", pole: "spin", def: "Constitutions, parliaments, courts, parties and referendums kept in working form, then hollowed out: courts packed, districts gerrymandered, constitutions rewritten with a popular mandate." },
  deniable: { label: "Targeted, deniable repression", pole: "spin", def: "Few victims, carefully chosen, charged with non-political offences such as fraud, tax evasion, defamation or something embarrassing. Violence, when used, is concealed or denied, because visible brutality would puncture the image of enlightened rule." },
  openness: { label: "Openness to the world", pole: "spin", def: "Trade, investment, travel and tourism welcomed; international bodies joined; Western elites courted and offshore finance used. Spin dictators profit from openness where fear dictators quarantined their countries." }
};

// Regime types after Geddes, Wright & Frantz, How Dictatorships Work (2018)
// and the GWF Autocratic Regimes data. Definitions are my one-sentence
// summaries of theirs, not quotations.
window.GWF_TYPES = [
  { key: "party", name: "Dominant-party", def: "A party organisation controls access to office, the careers of officials and the choice of leader, and can constrain him; other parties may exist only as minor players." },
  { key: "personal", name: "Personalist", def: "One man controls policy, appointments and the security forces, and neither a party nor the officer corps can constrain him; office and its rewards depend on his discretion." },
  { key: "military", name: "Military", def: "A group of senior officers decides who leads and has real influence over policy; the officer corps can remove the leader." },
  { key: "monarchy", name: "Monarchy", def: "A royal family decides who rules, and the succession runs through the dynasty." },
  { key: "party-personal", name: "Party-personalist", def: "A ruling party organises the regime, but the leader has taken personal control of it and of the security forces." },
  { key: "military-personal", name: "Military-personalist", def: "The regime rests on the army, but one officer has escaped the junta's control and rules in his own name." },
  { key: "party-military", name: "Party-military", def: "A ruling party and the officer corps share power over the choice of leader and over policy." },
  { key: "party-personal-military", name: "Party-personal-military", def: "All three at once: a regime party, an army that remains a political base, and a dominant individual over both." }
];

window.LEADER_SPIN = {
  lenin: {
    type: "fear", path: "", violence: 88, disguise: 10,
    markers: ["masskilling", "prisoners", "showtrials", "censorship", "ideology"],
    gt: "named",
    gtNote: "His Bolsheviks are one of the two new tyrannies of mass politics that, on taking power, 'forced the public to adopt an ideology distilled from the leader's scribblings', Raymond Aron's 'secular religions', and inspired imitators.",
    gwf: "party", gwfRegime: "Soviet Union 1917–1991", gwfSrc: "GWF",
    note: "The template for twentieth-century fear: the Cheka and the Red Terror from 1918, hostages shot and the lists printed, camps, the elected Constituent Assembly dispersed after one sitting, and the opposition parties and newspapers closed. Nothing was disguised; the regime called itself a dictatorship of the proletariat. GWF date the party regime from the seizure of the Winter Palace, so his years belong to a case in their data although they fall before 1946."
  },
  ataturk: {
    type: "fear", path: "", violence: 65, disguise: 25,
    markers: ["masskilling", "showtrials", "censorship", "ideology", "institutions"],
    gt: "", gtNote: "",
    gwf: "party", gwfRegime: "Turkey 1923–1950", gwfSrc: "GWF",
    note: "My reading by their rule of thumb. The opposition press was closed under the 1925 Law on the Maintenance of Order, the Independence Tribunals hanged opponents in public, the İzmir trials of 1926 disposed of old comrades, and thousands of civilians were killed at Dersim in 1937–38. Kemalism was written into the constitution in 1937; Guriev & Treisman list it among official ideologies but do not discuss him. Two licensed opposition parties (1924–25 and 1930) were the regime's only gestures towards spin, and both were shut once they drew support."
  },
  stalin: {
    type: "fear", path: "", violence: 98, disguise: 5,
    markers: ["masskilling", "prisoners", "showtrials", "censorship", "ideology", "closed"],
    gt: "named",
    gtNote: "Their archetype: in 1937 he ordered 'two to three open show trials in each district' with the executions reported in the local press, and his broadcast speeches score about as violent as a war-crimes prosecutor's closing argument.",
    gwf: "party", gwfRegime: "Soviet Union 1917–1991", gwfSrc: "GWF",
    note: "Every fear marker at full strength: millions shot or dead in the camps, terror staged in public through show trials, total censorship through Glavlit, a compulsory ideology with a cult of the leader, and a sealed border. The 1936 constitution was decoration rather than disguise; its elections had one candidate per seat. GWF code the regime party-based throughout, although the Terror made it personal in practice, as the Svolik note records."
  },
  hitler: {
    type: "fear", path: "", violence: 96, disguise: 15,
    markers: ["masskilling", "prisoners", "showtrials", "censorship", "ideology", "closed"],
    gt: "named",
    gtNote: "One of their three 'classic tyrants', with Stalin and Mao: Kristallnacht is their example of violence made 'deliberately public', and the Nazi book-burnings of censorship done in the open.",
    gwf: "party-personal", gwfRegime: "Germany 1933–1945", gwfSrc: "estimate",
    note: "Fear in its most extreme form, aimed at whole categories of people as well as at opponents: the camps from 1933, the Nuremberg Laws, Kristallnacht and the Holocaust. He came to power by the constitutional route and held plebiscites with 99 per cent majorities, but that was acclamation, not disguise. The GWF type is my estimate by analogy with their party-personal codes for Cuba and North Korea: a mass party took the state, but nothing in it could constrain the leader."
  },
  mao: {
    type: "fear", path: "", violence: 95, disguise: 5,
    markers: ["masskilling", "prisoners", "showtrials", "censorship", "ideology", "closed"],
    gt: "named",
    gtNote: "Quoted on the logic of terror, 'kill a few, scare them … We want to be shocking', and coded fear in their database with an estimated 4–5 million political killings and 2.5 million political prisoners at the peak.",
    gwf: "party", gwfRegime: "China 1949–", gwfSrc: "GWF",
    note: "Fear with mass participation: the land-reform and counter-revolutionary campaigns of the early 1950s, the anti-rightist purge, the labour camps, and the Cultural Revolution's struggle sessions held before crowds, with the cult and the Little Red Book as loyalty rituals. GWF code the People's Republic party-based even at the height of his personal power, a reminder that their type describes the regime, not the man."
  },
  hochiminh: {
    type: "fear", path: "", violence: 60, disguise: 15,
    markers: ["masskilling", "prisoners", "showtrials", "censorship", "ideology", "closed"],
    gt: "", gtNote: "",
    gwf: "party", gwfRegime: "Vietnam 1954– (North Vietnam until 1976)", gwfSrc: "GWF",
    note: "My reading; Guriev & Treisman do not discuss him, and their database starts with leaders who took office after 1945. The land reform of 1953–56, with village denunciation tribunals and thousands of executions, and the silencing of the Nhân Văn–Giai Phẩm writers meet the fear rule, alongside re-education camps, single-list elections and a closed border. The cult of 'Uncle Ho' was gentle in tone but a cult all the same. GWF date the party regime from the Geneva Accords of July 1954; the war years of the Democratic Republic from 1945 fall outside the case."
  },
  nasser: {
    type: "fear", path: "", violence: 50, disguise: 20,
    markers: ["prisoners", "censorship", "ideology"],
    gt: "named",
    gtNote: "Their mobilising 'socialist revolutionary' of the postwar authoritarian surge, coded fear in their database: few killings (about two dozen) but as many as 20,000 political prisoners at a time.",
    gwf: "party-personal-military", gwfRegime: "Egypt 1952–2011", gwfSrc: "GWF",
    note: "Fear by imprisonment rather than by killing: Muslim Brothers and communists held by the thousand in desert camps, routine torture, Sayyid Qutb hanged in 1966, and the press nationalised in 1960. Plebiscites returned 99 per cent and the single party (from 1962 the Arab Socialist Union) organised rallies: mobilisation, not disguise. The regime GWF code ran from the Free Officers' coup to Mubarak's fall, with army, party and president all mattering."
  },
  nkrumah: {
    type: "fear", path: "elected leader (1951–60) → one-party state (1964)", violence: 35, disguise: 30,
    markers: ["prisoners", "censorship", "ideology"],
    gt: "named",
    gtNote: "Quoted as the postcolonial leader who saw multiparty elections as an imperial legacy, offering only 'chaos, confusion, corruption, nepotism, and misery'; their table codes him fear from 1960, on about 1,100 political detainees.",
    gwf: "party-personal", gwfRegime: "Ghana 1960–1966", gwfSrc: "GWF",
    note: "Won three competitive elections before independence, then crossed the line by stages: the Preventive Detention Act of 1958, the 1960 republican referendum that GWF take as the start of the autocracy, and a one-party state confirmed by a 99.9 per cent vote in 1964. Killing was rare, but detention without trial, a controlled press and the cult of the Osagyefo with Nkrumaism as doctrine put him on the fear side. The disguise score reflects the early elections, which were real."
  },
  leekuanyew: {
    type: "spin", path: "harder start (Operation Coldstore, 1963) → spin model from about 1970", violence: 20, disguise: 85,
    markers: ["cooptedmedia", "elections", "performance", "institutions", "deniable", "openness"],
    gt: "named",
    gtNote: "Their pioneer of spin, who 'helped develop the model between about 1970 and 1990', steering the press through shareholders and lawsuits rather than bans, and asking a critic, 'do I need to be a dictator when I can win, hands down?'",
    gwf: "party", gwfRegime: "Singapore 1965–", gwfSrc: "GWF",
    note: "Every spin marker, worked out early and taught to others: after Tiananmen he told Li Peng how he had broken up a student sit-in by cutting off water and power instead of staging 'this grand show' for the cameras. Their database records no political killings and a peak of about 130 political prisoners, mostly from the early years of detention without trial; later the tools were libel suits, press licences and electoral engineering. GWF treat Singapore as autocratic from independence, because the earlier elections excluded the left, and code it party-based: the PAP, not Lee personally, picks the leader."
  },
  tito: {
    type: "fear", path: "fear (1945–1950s) → open to the West from the 1960s", violence: 60, disguise: 20,
    markers: ["masskilling", "prisoners", "showtrials", "censorship", "ideology", "openness"],
    gt: "named",
    gtNote: "The book's index files him as a 'fear dictator' in the chapter on dealing with the outside world, where his defiance of Stalin, his courting of the West and Yugoslav tourism also appear (pp. 136–39).",
    gwf: "party", gwfRegime: "Yugoslavia 1945–1990", gwfSrc: "GWF",
    note: "Fear at the start: the mass killing of surrendered soldiers and civilians in 1945, the Mihailović and Stepinac trials, and Goli Otok, the island camp where thousands of suspected Cominformists were broken after 1948. Then an unusual combination: still a one-party state without a free press, but with open borders, about a million workers abroad and Western tourists at home from the 1960s. That openness is a spin trait in a regime that never adopted the others."
  },
  deng: {
    type: "fear", path: "", violence: 60, disguise: 15,
    markers: ["masskilling", "prisoners", "showtrials", "censorship", "ideology", "performance", "openness"],
    gt: "named",
    gtNote: "Coded fear in their database (about 1,400 political killings, mostly Tiananmen and Tibet, and some 25,000 political prisoners after 1989), while the book notes his interest in Lee Kuan Yew's Singapore model.",
    gwf: "party", gwfRegime: "China 1949–", gwfSrc: "GWF",
    note: "Fear held in reserve behind reform. He opened China to trade and investment and staked the party's claim on growth, two spin traits, but kept the Four Cardinal Principles, the censors and the camps, and in 1989 he sent the army in with the world's press still in Beijing. Lee Kuan Yew's verdict, as Guriev & Treisman retell it, was that the leadership had staged 'this grand show' where a quiet siege would have done."
  },
  gorbachev: {
    type: "mixed", path: "fear (inherited) → glasnost, prisoner releases and contested elections, 1986–91", violence: 15, disguise: 50,
    markers: ["prisoners", "censorship", "elections", "institutions", "openness"],
    gt: "named",
    gtNote: "Their rule-of-thumb table codes him fear, because he inherited some 2,750 political prisoners and a censored press; the book discusses him through glasnost and as the fate Xi is determined to avoid.",
    gwf: "party", gwfRegime: "Soviet Union 1917–1991", gwfSrc: "GWF",
    note: "I depart from their table here, as they say their rules of thumb 'may get the odd case wrong'. The prisoners were freed in 1986–87, the jamming of Western radio ended in 1987–88, and the 1989 Congress elections were contested; the deaths in Tbilisi, Baku and Vilnius were the old repertoire returning at the edges. He did not use spin to hold power; he dismantled fear and lost it. 'Mixed' records a reign that began on one side and ended outside the framework."
  },
  castro: {
    type: "fear", path: "", violence: 65, disguise: 10,
    markers: ["masskilling", "prisoners", "showtrials", "censorship", "ideology", "closed", "performance"],
    gt: "named",
    gtNote: "A fear dictator in the JEP article and their tables, with public executions by firing squad, prison terms of more than ten years, some 9,000 political killings and 20,000 political prisoners at the peak, though of the overt dictators they studied his speeches leaned most on economic performance and public services.",
    gwf: "party-personal", gwfRegime: "Cuba 1959–", gwfSrc: "GWF",
    note: "Public trials and firing squads in 1959, then decades of long sentences, the UMAP labour camps of the 1960s, single-list elections and an exit-permit system that let emigration out on the state's terms (Camarioca, Mariel). The spin traits are in the rhetoric, with health and literacy offered as proof of competence, not in the methods. GWF code the regime party-personal: the Communist Party was rebuilt around the Castro brothers, not the other way round."
  },
  putin: {
    type: "spin", path: "spin from 2000 → harder after 2012 → fear from 2022", violence: 45, disguise: 70,
    markers: ["cooptedmedia", "elections", "performance", "institutions", "deniable", "openness", "prisoners", "censorship"],
    gt: "named",
    gtNote: "The case that started their project: a spin dictator from 2000, 'clearly operating from a different playbook' by 2012; after the invasion of Ukraine Guriev said the regime changed 'literally one week after the war', and Treisman that it is 'only reasonable to classify this now as a fear dictatorship'.",
    gwf: "personal", gwfRegime: "Russia 1993–", gwfSrc: "GWF",
    note: "For two decades a textbook of spin: television brought under friendly owners, elections won by large but believable margins, a boom credited to the leader, opponents prosecuted for fraud, and killings the Kremlin always denied. Guriev calls even the 2014 seizure of Crimea 'a typical spin dictator war' (quick, bloodless, deniable). The break came with the full-scale invasion in 2022: war censorship, independent media shut, about 20,000 detained for protesting, and Navalny dead in an Arctic prison. So the main type is spin and the path records the reversion. GWF date the personalist regime from Yeltsin's dissolution of parliament in 1993; Putin inherited it."
  },
  xi: {
    type: "fear", path: "reversed the post-Mao drift towards spin after 2012", violence: 70, disguise: 10,
    markers: ["prisoners", "showtrials", "censorship", "ideology", "performance", "openness"],
    gt: "named",
    gtNote: "Xi, 'who took over in 2012, reversed course': China under him is 'a strange mix of ruthless repression, outdated ideology, modern stagecraft, and cutting-edge information technology' that remains 'wedded to rule by fear'.",
    gwf: "party", gwfRegime: "China 1949–", gwfSrc: "GWF",
    note: "Fear updated rather than replaced: more than a million Uighurs and others held in camps in Xinjiang, chilling televised confessions, more than 10,000 Hong Kong protesters arrested, journalists jailed and a leader's 'Thought' written into the party and state constitutions, while trade, investment and slick propaganda continue. GWF code the People's Republic as one party-based regime and do not change a type within a regime. I keep their code, but on my reading the end of term limits in 2018 and a 2022 Standing Committee of loyalists with no successor have moved it towards party-personal rule."
  },
  erdogan: {
    type: "spin", path: "spin from 2003 → backsliding towards fear after the 2016 coup attempt", violence: 40, disguise: 80,
    markers: ["cooptedmedia", "elections", "performance", "institutions", "deniable", "openness", "prisoners"],
    gt: "named",
    gtNote: "Listed as a spin dictator from 2003 'until at least 2016, when massive arrests following a failed coup suggest possible backsliding to fear dictatorship'.",
    gwf: "personal", gwfRegime: "Turkey under Erdoğan, after 2010 (outside the data)", gwfSrc: "estimate",
    note: "The spin repertoire through the 2000s and early 2010s: the largest media group fined until it sold out to friendly owners, the courts and the army brought to heel through referendums he won, growth claimed as his own, and critics charged with terrorism or with insulting the president. After July 2016 the scale changed, with some 150,000 people detained and as many purged from public jobs, Kurdish party leaders jailed and, in 2025, the opposition mayor of Istanbul. Yet elections stay competitive enough for the opposition to win Istanbul and Ankara, so the main type is still spin, with a fear path. GWF's data end in 2010 with Turkey a democracy; the personalist code is my estimate, in line with Kendall-Taylor, Frantz and Wright's later account of Turkey as a case of personalisation (2017)."
  },
  chiang: {
    type: "fear", path: "", violence: 75, disguise: 20,
    markers: ["masskilling", "prisoners", "censorship", "ideology", "closed"],
    gt: "named",
    gtNote: "In the JEP article Taiwan under him was 'an overt dictatorship' that became an informational autocracy only under his son Chiang Ching-kuo; their table codes him fear, with 3,000–4,000 political killings and some 23,000 political prisoners on Taiwan.",
    gwf: "party", gwfRegime: "Taiwan 1949–2000", gwfSrc: "GWF",
    note: "Fear on the mainland and on Taiwan: the Shanghai purge of 1927, the killings that followed the February 1947 uprising on Taiwan, then martial law from 1949 to 1987 and the White Terror, with military courts, the Green Island prison and a press under Kuomintang control. Local elections were held from 1950, but the national bodies elected on the mainland in 1947–48 sat unrenewed for decades. GWF leave out China in 1946–49, when no government controlled the territory, and code the party regime on Taiwan, which outlasted him by twenty-five years."
  },
  suharto: {
    type: "fear", path: "", violence: 85, disguise: 55,
    markers: ["masskilling", "prisoners", "showtrials", "censorship", "ideology", "elections", "performance", "institutions", "openness"],
    gt: "named",
    gtNote: "Coded fear in their database, on half a million to a million killed in 1965–66 and some half a million political prisoners, with his Pancasila named among the official ideologies of the period.",
    gwf: "party-personal-military", gwfRegime: "Indonesia 1966–1999", gwfSrc: "GWF",
    note: "The clearest case of fear and disguise together. The New Order began with one of the century's great massacres and held tens of thousands of prisoners on Buru and elsewhere for years, yet it ran elections every five years in which Golkar took 62–75 per cent, margins that looked plausible, and sold itself on development and foreign investment. The army's 'mysterious shootings' of 1983–85, with bodies left in public as a warning, show the fear logic alive in the regime's middle age. GWF run the regime on past his fall to the 1999 election, because Habibie kept his cabinet and command."
  },
  parkchunghee: {
    type: "fear", path: "contested elections 1963–71 → Yushin constitution 1972", violence: 40, disguise: 50,
    markers: ["prisoners", "showtrials", "censorship", "elections", "performance", "institutions", "openness"],
    gt: "named",
    gtNote: "Not discussed in the book's text, but their online supplement codes him fear: only nine political killings, yet some 2,000 politicians arrested by the 1961 junta and torture of dissidents.",
    gwf: "military", gwfRegime: "South Korea 1961–1987", gwfSrc: "GWF",
    note: "A developmental dictator with a split reign. Until 1971 he won contested presidential elections (Kim Dae-jung took 45 per cent that year) and rested his claim on growth and exports. The Yushin constitution of 1972 then made the presidency indirect and indefinite, and emergency decrees made criticising it a crime. The 1975 People's Revolutionary Party executions, carried out within a day of the verdict, were fear's signature. GWF code the whole 1961–87 regime as military, Chun Doo-hwan's years included."
  },
  mussolini: {
    type: "fear", path: "", violence: 65, disguise: 25,
    markers: ["masskilling", "prisoners", "showtrials", "censorship", "ideology", "closed"],
    gt: "named",
    gtNote: "In the JEP article's table of dictators who publicised their violence: he wanted to turn Italians from 'mandolin players' into 'fearsome, conquering warriors' with 'bastone, bastone, bastone' (the club), and by 1940 Italy was dotted with camps, political prisons and confinement colonies.",
    gwf: "party-personal", gwfRegime: "Italy 1922–1943", gwfSrc: "estimate",
    note: "Less killing at home than his reputation suggests and more in the colonies. Squad violence and the murder of Matteotti carried him to full power; the Special Tribunal and confino sent thousands of opponents to islands and remote villages; Libya and Ethiopia saw camps, gas and massacre. The monarchy, the Senate and a Chamber chosen on a single list survived as relics of the old state, not as disguise. The GWF type is my estimate: the party mattered (its Grand Council voted him out in 1943), but he made and unmade its leaders."
  },
  franco: {
    type: "fear", path: "fear → softer after 1959; Guriev calls late Franco 'more of a spin dictatorship'", violence: 85, disguise: 15,
    markers: ["masskilling", "prisoners", "showtrials", "censorship", "ideology", "closed", "performance", "openness"],
    gt: "named",
    gtNote: "Their example of a dictator who 'came in with a bang', with a special sentence (garrote y prensa, 'strangulation by garotte with press coverage') for enemies whose fate he wanted known; Guriev has since said that 'late Franco was more of a spin dictatorship'.",
    gwf: "personal", gwfRegime: "Spain 1939–1976", gwfSrc: "GWF",
    note: "The killing was front-loaded: tens of thousands executed during and after the Civil War, hundreds of thousands through camps and prisons, then censorship and National Catholicism. From 1959 the technocrats opened Spain to tourism and investment, the 1966 press law ended prior censorship and growth became the regime's case for itself, which is the drift Guriev describes. But no opposition party ever ran, and the garrotte was still in use in 1974. GWF date the regime from the fall of Madrid in March 1939, not from 1936 as the atlas does, and code it personalist."
  },
  salazar: {
    type: "fear", path: "", violence: 50, disguise: 30,
    markers: ["prisoners", "showtrials", "censorship", "ideology"],
    gt: "named",
    gtNote: "Cited in the JEP article as a dictator who publicised his violence (passers-by outside police headquarters 'were allowed to hear the screams of detainees'), and in the book as a corporatist who, with Franco, sought 'to restore social deference and Catholic hierarchy'.",
    gwf: "personal", gwfRegime: "Portugal 1926–1974", gwfSrc: "GWF",
    note: "Fear at a lower temperature at home: the PIDE, prior censorship, the Tarrafal camp in Cape Verde and the murder of the opposition candidate Humberto Delgado in 1965, but few killings by the standards of the period. The reprisals in northern Angola in 1961 raise the violence score. Presidential elections let the opposition campaign at times (Delgado was credited with a quarter of the vote in 1958), which gives some disguise, though Salazar never pretended to admire liberal democracy."
  },
  pinochet: {
    type: "fear", path: "terror of 1973–77 → the 1980 constitution and the 1988 plebiscite he lost", violence: 82, disguise: 25,
    markers: ["masskilling", "prisoners", "censorship", "performance", "institutions", "openness"],
    gt: "named",
    gtNote: "Their 'reactionary general', who 'stationed censors in every newspaper, magazine, radio station, and television channel' and 'sent soldiers to sanitize the bookstores'; Fujimori's spymaster later warned his men, 'Remember why Pinochet had his problems. We will not be so clumsy.'",
    gwf: "military-personal", gwfRegime: "Chile 1973–1989", gwfSrc: "GWF",
    note: "Their database records 3,000–5,000 political killings and tens of thousands of political prisoners, most in the first four years: the National Stadium, the Caravan of Death and the DINA. Much of the killing was then hidden as disappearance, concealed but never deniable. The later regime borrowed spin's tools (free-market growth sold as a miracle, a constitution approved by plebiscite in 1980) and the 1988 plebiscite proved real enough to lose. GWF use Chile as their own illustration of a military-personalist regime."
  },
  peron: {
    type: "fear", path: "clean election in 1946 → harder from 1949–51: the press, prisoners, the 'internal war' decree", violence: 30, disguise: 70,
    markers: ["prisoners", "censorship", "ideology", "elections", "performance", "institutions"],
    gt: "named",
    gtNote: "The book places his regime as a 'distant echo' of Salazar's and Franco's corporatism, and their table codes his 1946–55 government fear, not for killing (their database finds one or two cases) but for an estimated 14,500 political prisoners by 1955 and the torture of opponents.",
    gwf: "personal", gwfRegime: "Argentina 1951–1955", gwfSrc: "GWF",
    note: "First presidency only (1946–55), and a hard case for the binary. He was elected cleanly in 1946 and re-elected with 62 per cent in 1951, popular on wages and welfare, yet he purged the Supreme Court, expropriated La Prensa, jailed opposition leaders such as Balbín, filled the prisons by 1955 and made the cult of Perón and Evita compulsory in schools. Their rule of thumb puts him on the fear side and I follow it, but the low violence and high disguise scores show how much spin was in the method. GWF code 1946–51 as democratic and date the autocracy from the 'internal war' decree of 28 September 1951."
  },
  goh: {
    type: "spin", path: "", violence: 5, disguise: 88,
    markers: ["cooptedmedia", "elections", "performance", "institutions", "deniable", "openness"],
    gt: "named",
    gtNote: "Named among the successors who 'embraced Lee's style of rule'; their database records no political killings and no political prisoners under him, the last two detainees having been released in 1990.",
    gwf: "party", gwfRegime: "Singapore 1965–", gwfSrc: "GWF",
    note: "Spin without the early coercion: no detentions, but the same instruments, among them defamation suits that bankrupted opposition figures such as J. B. Jeyaretnam and Chee Soon Juan, estate upgrading promised to wards that voted PAP, and boundaries redrawn before each election. The PAP took 61–75 per cent of the vote in his three elections. GWF code no change of regime between Lee and Goh: the party chose him, and his predecessor stayed in cabinet."
  }
};
