// ============================================================
// ORGANIZATION DOSSIERS — the deep layer for dominant parties
// ============================================================
// Four lenses on each organization:
//   glue    what held it together (ladder, money, structure, society, threat, succession)
//   engine  what made it effective, scored 0–100 with the reasoning
//   rot     seven kinds of decay, scored per PHASE so the slope is visible,
//           plus two axes that decide how pernicious the rot is:
//             leakage       — how far it spread from the party into the state, economy and society
//             reversibility — whether voters, courts or the press could remove it
//   arc     the phases, with the events that moved the scores
// plus a schematic money map, the career ladder, a three-part verdict and
// sources. All scores are my estimates; the events are the evidence.
// ============================================================

window.ROT_TYPES = [
  { key: "graft", name: "Graft", def: "Money diverted to insiders — bribes, kickbacks, slush funds, theft from the state." },
  { key: "capture", name: "Capture", def: "Narrow groups own policy — protected sectors, cronies, state rents allocated to the party's networks." },
  { key: "closure", name: "Closure", def: "The career ladder locks — hereditary seats, self-selecting elites, no way in for outsiders." },
  { key: "suppression", name: "Suppression", def: "Competition made unsafe or unfair — detention, defamation suits, gerrymanders, press control." },
  { key: "feedback", name: "Feedback decay", def: "The top stops hearing — deference, fear, controlled media, officials telling leaders what they want." },
  { key: "sclerosis", name: "Sclerosis", def: "Olson's distributional coalitions accumulate — the organization can no longer reallocate away from its own clients." },
  { key: "succession", name: "Succession fragility", def: "Leadership transfers split the organization or depend on one person." }
];
window.ROT_AXES = [
  { key: "leakage", name: "Leakage", def: "How far the rot spread from the party into the state, the economy and society. High = the institutions themselves were bent." },
  { key: "reversibility", name: "Reversibility", def: "Whether voters, courts or the press could remove the rot. High = it could be — and sometimes was — undone." }
];
window.ENGINE_KEYS = [
  { key: "policy", name: "Policy capacity", def: "Can it formulate and deliver policy?" },
  { key: "adapt", name: "Adaptability", def: "Can it renew itself and absorb shocks and challengers?" },
  { key: "feedback", name: "Feedback", def: "Does bad news reach the top?" },
  { key: "bargain", name: "Programme over patronage", def: "Does it bind voters by performance and policy (high) or by particular benefits (low)?" }
];
window.GLUE_KEYS = [
  { key: "ladder", name: "The career ladder" }, { key: "money", name: "Money" }, { key: "structure", name: "Internal structure" },
  { key: "society", name: "Hooks into society" }, { key: "threat", name: "The founding threat" }, { key: "succession", name: "Succession" }
];

window.ORG_DOSSIERS = {

  // ================================================================
  pap: {
    verdict: {
      held: "Fusion with a rich, competent state; a closed talent ladder that recruits the country's best administrators; and a survival narrative that made discipline feel like prudence.",
      worked: "Because the party functions as the state's personnel department, not its patronage office: it wins by delivering housing, growth and order, and it renews its leadership on purpose.",
      rotted: "Low graft, high control. The rot is of closure and suppression rather than greed — contained within a small elite, fused with the state, and only slowly reversible through elections that are real but tilted."
    },
    glue: {
      ladder: "Talent-spotted, not climbed. Candidates are identified among government scholars, senior armed-forces officers, top civil servants and professionals, then put through rounds of 'tea sessions' with ministers and a final panel — closer to executive hiring than a party career. The cadre corps, whose size is not published, is appointed by the Central Executive Committee and in turn elects it — a closed loop often compared to cardinals electing the pope who appoints them.",
      money: "The party is cheap and the state is rich. Campaigns are short and spending is capped by law; the party needs little money because the government delivers what patronage buys elsewhere. Anti-graft is built in: the Corrupt Practices Investigation Bureau reports to the prime minister, and from 1994 ministerial salaries were pegged to top private-sector earnings (cut substantially in 2012) on the theory that well-paid ministers need not steal.",
      structure: "One hierarchy and no factions. Policy is made in cabinet and the civil service, not in party organs; the party exists mainly to select candidates and run branches. Disagreement stays inside closed meetings, and the whip is almost never lifted.",
      society: "Fused with the state's own grassroots. The People's Association runs community centres and grassroots organisations whose advisers are PAP MPs — and, in opposition wards, defeated PAP candidates. The labour movement is led by a PAP minister under a symbiosis dating to the late 1960s. About four in five citizens live in Housing Board flats, and in 1997 estate upgrading was explicitly tied to how a constituency voted.",
      threat: "Founded amid a struggle with the communist-aligned left and the failed Malaysian merger; after 1965 the vulnerability narrative — a small, Chinese-majority city between larger neighbours, without water or hinterland — justified discipline. The threat has been renewed rather than retired: survival remains the governing vocabulary.",
      succession: "The most deliberate in the atlas. Each generation of ministers chooses its leader by internal consensus — Goh Chok Tong in 1990, Lee Hsien Loong in 2004, Lawrence Wong in 2024 after Heng Swee Keat stepped aside in 2021. Orderly, and closed."
    },
    engine: {
      policy: { score: 95, text: "Party and state are fused: the cabinet is the party's leadership and the civil service is its talent pool. Implementation — public housing, compulsory savings, water, industrial policy — is world-class." },
      adapt: { score: 75, text: "Renews by design, bringing in a new cohort at every election, and adjusts after shocks: the 2011 result brought ministerial pay cuts, a national consultation and more social spending." },
      feedback: { score: 50, text: "The weak spot. A narrow press, defamation law and grassroots channels that report upward through the party filter what reaches the top; the 2011 swing was a feedback failure the leadership admitted." },
      bargain: { score: 80, text: "Performance legitimacy — housing, growth, order — with a patronage edge: the understanding that opposition wards come last." }
    },
    phases: [
      { name: "Founding and the struggle with the left", from: 1954, to: 1963,
        summary: "An alliance of English-educated moderates and the Chinese-educated left that the moderates won by building a closed cadre system and, in the end, by detention.",
        events: ["1954 — founded by Lee Kuan Yew, Toh Chin Chye, Goh Keng Swee and left-wing unionists including Lim Chin Siong", "1957 — the left briefly wins control of the Central Executive Committee; its leaders are detained, and the cadre system follows", "1959 — wins 43 of 51 seats; self-government", "1961 — the left splits away to form the Barisan Sosialis", "1963 — Operation Coldstore detains more than 100 left-wing figures"],
        rot: { graft: 15, capture: 10, closure: 40, suppression: 75, feedback: 40, sclerosis: 10, succession: 70 }, leakage: 45, reversibility: 55 },
      { name: "Merger, separation and the survival state", from: 1963, to: 1968,
        summary: "Two years inside Malaysia, expulsion in 1965, and the forging of the survival narrative; the opposition's boycott handed the PAP every seat.",
        events: ["1963 — Singapore joins Malaysia; the PAP contests the 1964 federal election against UMNO's hold", "1964 — communal riots", "1965 — separation", "1966 — Barisan Sosialis boycotts Parliament", "1968 — the PAP wins all 58 seats"],
        rot: { graft: 10, capture: 20, closure: 55, suppression: 80, feedback: 45, sclerosis: 15, succession: 50 }, leakage: 60, reversibility: 35 },
      { name: "The developmental machine", from: 1968, to: 1990,
        summary: "A one-party Parliament until 1981, the state-capitalist economy built through Temasek and government-linked companies, the labour movement brought inside, and the rules of competition rewritten.",
        events: ["1974 — Temasek Holdings founded; newspaper licensing law", "1981 — J. B. Jeyaretnam wins Anson, the first opposition seat since 1968", "1984 — first generational handover begins; non-constituency MPs introduced", "1987 — Operation Spectrum detains 22 alleged 'Marxist conspirators'", "1988 — Group Representation Constituencies introduced"],
        rot: { graft: 10, capture: 40, closure: 70, suppression: 80, feedback: 55, sclerosis: 25, succession: 30 }, leakage: 70, reversibility: 20 },
      { name: "The managed state under Goh", from: 1990, to: 2004,
        summary: "A softer style over the same architecture: salary benchmarks, upgrading tied to votes, defamation suits against opposition figures, and many seats left uncontested.",
        events: ["1994 — ministerial pay pegged to private-sector benchmarks", "1997 — upgrading linked to constituency votes; the PAP is returned on nomination day in a majority of seats", "1997 — defamation suits against Tang Liang Hong and J. B. Jeyaretnam", "2001 — Chee Soon Juan sued for defamation by Lee Kuan Yew and Goh Chok Tong"],
        rot: { graft: 10, capture: 45, closure: 75, suppression: 70, feedback: 60, sclerosis: 35, succession: 25 }, leakage: 70, reversibility: 25 },
      { name: "Contested dominance", from: 2004, to: 2026,
        summary: "Still dominant, but challenged: the first GRC lost in 2011, a former minister jailed in 2024 for taking gifts and obstructing justice, new laws on online falsehoods and foreign interference, and a managed handover to Lawrence Wong.",
        events: ["2011 — vote share 60%; Aljunied GRC lost to the Workers' Party; ministers dropped; pay cut in 2012", "2019 — online falsehoods law (POFMA); 2021 — foreign interference law", "2020 — vote share 61%; Sengkang GRC lost", "2023–24 — Transport Minister S. Iswaran investigated, then charged; in 2024 he pleads guilty to obtaining gifts as a public servant and obstructing justice, and is jailed for 12 months; the Speaker resigns over an affair", "2024 — Lawrence Wong becomes prime minister; 2025 — the PAP wins 87 of 97 seats on 65.6% of the vote, a rebound from 2020; the Workers' Party leader Pritam Singh is convicted of lying to a parliamentary committee and loses his appeal"],
        rot: { graft: 15, capture: 45, closure: 70, suppression: 55, feedback: 50, sclerosis: 40, succession: 30 }, leakage: 65, reversibility: 40 }
    ],
    money: {
      inflows: [
        { label: "The state's budget and reserves", note: "funds the delivery the party runs on — housing, services, growth", w: 5 },
        { label: "Government-linked companies and Temasek", note: "state capitalism managed by the party's own elite", w: 3 },
        { label: "Members' dues and small donations", note: "a cheap party by design", w: 1 }
      ],
      outflows: [
        { label: "Estate upgrading and town services", note: "targeted by constituency after 1997", w: 4 },
        { label: "Grassroots organisations", note: "via the People's Association, advised by PAP MPs", w: 2 },
        { label: "High official salaries", note: "anti-graft pay for ministers and senior civil servants", w: 2 },
        { label: "Campaigns", note: "short and legally capped", w: 1 }
      ]
    },
    ladder: [
      { stage: "Spotted", text: "A government scholar, senior officer, top civil servant or professional is noticed by ministers or party talent-spotters." },
      { stage: "Tea sessions", text: "Rounds of interviews with ministers, then a panel chaired by the prime minister." },
      { stage: "Grassroots attachment", text: "Months helping an MP in a ward and at Meet-the-People Sessions." },
      { stage: "Fielded", text: "Usually in a multi-member GRC team led by a minister, which lowers the risk of losing." },
      { stage: "Office", text: "Parliamentary secretary, then minister of state, then minister — promoted on the civil service's logic." },
      { stage: "Leadership", text: "The cohort of ministers chooses one of its own as leader." }
    ],
    books: ["from-third-world-to-first", "barr-ruling-elite", "george-air-conditioned", "slater-ordering-power", "slater-wong-development"],
    reading: ["Chan Heng Chee, The Dynamics of One Party Dominance (1976)", "Garry Rodan, Participation without Democracy (2018)", "Cherian George, Singapore, Incomplete (2017)"]
  },

  // ================================================================
  ldp: {
    verdict: {
      held: "Factions, personal support machines and organised interests, bound together by money and public works inside a Cold War consensus that made it the only acceptable government.",
      worked: "Because it absorbed its challengers, shared power with a capable bureaucracy and could reinvent itself — losing office twice and coming back both times.",
      rotted: "High graft and capture — among the most expensive politics in any democracy, with a closed hereditary class at the top — but democratic and reversible: voters removed it twice and a prosecutors' slush-fund case pushed most of its factions to disband."
    },
    glue: {
      ladder: "Inherited more than earned. Roughly a third of LDP Diet members have been hereditary, carrying the 'three bans': jiban (the support base), kanban (the name) and kaban (the bag of money). The rest came as former bureaucrats, prefectural politicians or Diet members' secretaries. Advancement ran through the factions by seniority — in the classic era a first cabinet post came after about five or six terms, allocated by faction quota.",
      money: "Expensive politics. Personal support organisations cost fortunes to maintain — weddings, funerals, constituency trips — and factions raised money through ticketed fundraising parties and paid it out to members; that dependence was the factions' power. Corporate money flowed in return for public works, regulation and protection. The 1994 reform added public subsidies of ¥250 per citizen a year and restricted corporate donations, but the fundraising parties continued, and the 2023–24 kickback scandal was their unreported surplus.",
      structure: "A party of parties. Five or six factions (habatsu), each with its own boss, money and quota of posts, bargained over the party presidency and therefore the premiership. Policy ran through the Policy Research Council, where members of 'policy tribes' (zoku) pre-screened every bill before cabinet saw it.",
      society: "The kōenkai tied voters to individual politicians rather than to the party. Organised interests tied themselves to the party: the agricultural cooperatives (JA), construction, small business, doctors, the postmasters' network, religious groups. The bureaucracy, whose senior retirees moved into corporate posts (amakudari), completed the 'iron triangle'.",
      threat: "Formed in 1955, with business pressing the conservatives to merge against a newly reunited Socialist Party; the Cold War and the U.S. alliance made it the only acceptable government. When the threat faded after 1989, discipline faded with it.",
      succession: "Faction bargaining produced orderly transfers and short tenures. The party president — and so the prime minister — is chosen by Diet members and party members, so premierships rose and fell with faction alignments; two-year terms were the norm, and Satō, Nakasone, Koizumi and Abe the exceptions, with Takaichi, in office since October 2025, the newest test."
    },
    engine: {
      policy: { score: 70, text: "In the growth era a division of labour with an elite bureaucracy (Finance, MITI) that wrote policy while the party distributed its benefits; policy-tribe members acquired real expertise. Weak at hard reallocation — cutting protected sectors." },
      adapt: { score: 85, text: "Its greatest strength: 'creative conservatism' — absorbing opposition issues like welfare and pollution in the 1970s, losing power in 1993 and 2009 and returning, and reinventing itself under Koizumi and Abe." },
      feedback: { score: 55, text: "Competitive elections and a free press supply feedback, but multi-member districts rewarded personal service over policy, and bureaucratic deference to the top (sontaku) — the Moritomo document tampering — shows feedback bent to please the leader." },
      bargain: { score: 35, text: "Patronage and growth: public works, subsidies and protection delivered through personal networks, underwritten by high growth — a clientelist bargain inside a rich democracy." }
    },
    phases: [
      { name: "The 1955 system", from: 1955, to: 1972,
        summary: "The conservative merger, the U.S. alliance and high growth; factions and personal machines take shape; the bureaucracy leads policy.",
        events: ["1955 — Liberal and Democratic parties merge", "1960 — Kishi forces through the security treaty and resigns; Ikeda's income-doubling plan", "1964–72 — Satō's long premiership; Okinawa's reversion", "1966 — 'Black Mist' scandals"],
        rot: { graft: 45, capture: 45, closure: 40, suppression: 20, feedback: 40, sclerosis: 30, succession: 35 }, leakage: 50, reversibility: 60 },
      { name: "Tanaka's construction state", from: 1972, to: 1993,
        summary: "Public works as the party's lifeblood, the Tanaka faction as kingmaker even after its leader's arrest, and a run of scandals that implicated the whole leadership.",
        events: ["1972 — Tanaka Kakuei's plan to remodel the archipelago", "1976 — Tanaka arrested in the Lockheed scandal; remains the 'shadow shogun' for a decade", "1988–89 — Recruit scandal; Prime Minister Takeshita resigns", "1992 — Sagawa Kyūbin scandal; kingmaker Kanemaru Shin resigns, later arrested for tax evasion"],
        rot: { graft: 85, capture: 85, closure: 55, suppression: 20, feedback: 55, sclerosis: 75, succession: 40 }, leakage: 75, reversibility: 55 },
      { name: "Collapse and reform", from: 1993, to: 2001,
        summary: "Defections cost it power for the first time; electoral reform replaced the multi-member districts; the bubble's aftermath exposed the construction state's costs.",
        events: ["1993 — Ozawa and Hata defect; a non-LDP coalition takes power", "1994 — electoral reform: single-member districts plus proportional representation, public party subsidies", "1994 — returns to power in coalition with the Socialists", "1996 — bailout of the housing-loan companies (jūsen)"],
        rot: { graft: 65, capture: 75, closure: 60, suppression: 15, feedback: 50, sclerosis: 80, succession: 60 }, leakage: 70, reversibility: 80 },
      { name: "Koizumi and the revolving door", from: 2001, to: 2012,
        summary: "Koizumi ran against his own party and purged its postal rebels; then Abe, Fukuda and Aso in three years, all hereditary, and defeat in 2009.",
        events: ["2001 — Koizumi promises to 'destroy the LDP'", "2005 — snap election on postal privatisation; rebels denied endorsement", "2006–09 — Abe, Fukuda, Asō: a year each", "2009 — loses power to the Democratic Party of Japan"],
        rot: { graft: 45, capture: 60, closure: 70, suppression: 15, feedback: 45, sclerosis: 60, succession: 75 }, leakage: 60, reversibility: 85 },
      { name: "The Kantei era and the slush funds", from: 2012, to: 2026,
        summary: "Abe's return centralised power in the prime minister's office; bureaucratic deference produced falsified records; then the faction kickback scandal broke the factions and the party lost its majority in 2024 — before a 2026 landslide under Takaichi restored it.",
        events: ["2014 — Cabinet Bureau of Personnel Affairs gives the Kantei control of senior appointments", "2017–18 — Moritomo and Kake scandals; Finance Ministry documents altered", "2022 — Abe assassinated; the party's ties to the Unification Church exposed", "2023–24 — faction fundraising kickback scandal; most factions dissolve", "2024 — loses its lower-house majority; 2025 — Komeito ends a 26-year coalition and Sanae Takaichi becomes the first woman prime minister, governing with Ishin; February 2026 — a snap election returns the LDP with 316 of 465 seats, the first single-party two-thirds majority since the war"],
        rot: { graft: 70, capture: 55, closure: 70, suppression: 20, feedback: 60, sclerosis: 60, succession: 45 }, leakage: 60, reversibility: 75 }
    ],
    money: {
      inflows: [
        { label: "Corporate donations and fundraising parties", note: "tickets bought by firms that wanted access", w: 4 },
        { label: "Public party subsidies (from 1995)", note: "¥250 per citizen per year", w: 3 },
        { label: "Organised interests' votes and money", note: "JA, construction, postmasters, doctors", w: 2 }
      ],
      outflows: [
        { label: "Kōenkai upkeep", note: "gifts, events, constituency service", w: 3 },
        { label: "Faction payouts to members", note: "the source of the factions' discipline", w: 3 },
        { label: "Campaigns", note: "expensive under multi-member districts", w: 2 },
        { label: "Unreported kickbacks", note: "the 2023–24 slush-fund scandal", w: 1 }
      ]
    },
    ladder: [
      { stage: "Inherit or apprentice", text: "The child of a Diet member, a Diet member's secretary, a senior bureaucrat or a prefectural assembly member." },
      { stage: "Endorsement", text: "Win the party's nomination — before 1994, often by running as an independent and joining after winning." },
      { stage: "Kōenkai", text: "Build or inherit a personal support organisation in the district." },
      { stage: "Faction", text: "Join a faction for money, election help and a place in the queue." },
      { stage: "Seniority", text: "Party and Diet posts, specialisation in a policy tribe, a vice-ministership." },
      { stage: "Cabinet", text: "A first cabinet post after about five or six terms, by faction quota." },
      { stage: "Presidency", text: "Faction boss, then party president through a coalition of factions." }
    ],
    books: ["krauss-pekkanen-ldp", "scheiner-democracy", "calder-crisis", "johnson-miti"],
    reading: ["Gerald Curtis, The Japanese Way of Politics (1988)", "T. J. Pempel (ed.), Uncommon Democracies (1990)"]
  },

  // ================================================================
  umno: {
    verdict: {
      held: "Malay identity and the promise of Malay political primacy, fused with patronage from a state the party had run since independence.",
      worked: "For two decades it delivered rural development, poverty reduction and ethnic peace, while growth paid for the rents and co-opted rivals joined its coalition.",
      rotted: "The most pernicious of the three: graft and capture that leaked into the courts, the police and a sovereign investment fund, reversible only when the electorate finally broke through in 2018."
    },
    glue: {
      ladder: "Through the divisions. UMNO's roughly 190 divisions elect the delegates who elect the supreme council and the president; to rise, a politician builds a division base, wins its chairmanship and delivers its delegates. From the 1980s the ladder was priced: party elections became notorious for 'money politics' — cash for delegates' votes — which the party's own disciplinary board repeatedly punished.",
      money: "Party capitalism and state rents. From the 1970s UMNO held a corporate empire directly — Fleet Holdings, later Renong and associated companies — and the New Economic Policy's allocation of licences, contracts, shares and privatised utilities to Malay businessmen, often party figures or their proxies, built a patronage economy. Under Najib, 1MDB turned the pattern into the direct diversion of state funds — for which he was convicted in 2025, and is appealing.",
      structure: "A mass party with a dominant president: the party president is the prime minister, and the supreme council and division chiefs form a pyramid of patrons. Factions exist — 'Team A' and 'Team B' in 1987 — but they are personal, not institutions like the LDP's.",
      society: "Malay identity at the core. The party reached every village through its branches, village development committees and the FELDA land-settlement schemes, whose settlers were long reliable voters, alongside an overwhelmingly Malay civil service. Coalition partners — the MCA and MIC — delivered Chinese and Indian votes.",
      threat: "Founded in 1946 against the British Malayan Union, and sustained by the claim that Malays needed one party to protect their position against Chinese economic power; after the riots of 13 May 1969, that claim became governing doctrine.",
      succession: "Contested and often brutal. Mahathir fell out with successive deputies — Musa Hitam resigned in 1986; Anwar Ibrahim was sacked and jailed in 1998 — and later turned on his own successor; Najib sacked his deputy Muhyiddin in 2015. Power transferred, but each transfer left a split."
    },
    engine: {
      policy: { score: 60, text: "A capable civil service delivered rural development and the New Economic Policy's poverty reduction — Malay poverty fell sharply — but policy was bent to distribute rents to the party's own networks." },
      adapt: { score: 45, text: "Co-opted opponents into the Barisan Nasional after 1973 and survived 1987–88 by refounding itself, but it could not adapt to an urban, multiracial electorate — as 2008 and 2018 showed." },
      feedback: { score: 35, text: "Detention without trial, press licensing, the Sedition Act and a judiciary bent after 1988 cut the feedback; the leadership learned of its own decay from election results." },
      bargain: { score: 20, text: "Communal patronage: Malay preference, rural development and rents channelled through party networks, with loyalty expected in return." }
    },
    phases: [
      { name: "Malay nationalism and the Alliance", from: 1946, to: 1969,
        summary: "The party of independence, governing through a consociational Alliance with Chinese and Indian parties; Singapore's challenge ended by expulsion.",
        events: ["1946 — founded against the Malayan Union", "1955–57 — the Alliance wins the first elections; independence under Tunku Abdul Rahman", "1960 — Internal Security Act replaces Emergency powers", "1963–65 — Malaysia formed; Singapore expelled"],
        rot: { graft: 25, capture: 30, closure: 35, suppression: 40, feedback: 40, sclerosis: 20, succession: 35 }, leakage: 40, reversibility: 55 },
      { name: "May 13 and the NEP state", from: 1969, to: 1981,
        summary: "The 1969 riots and emergency rule remade the bargain: Malay economic preferences under the New Economic Policy, opponents co-opted into the Barisan Nasional, and 'sensitive issues' removed from debate.",
        events: ["1969 — election setback, the 13 May riots, emergency rule", "1970–71 — Sedition Act amended and Constitution entrenched to bar questioning Malay privileges; 1971 — New Economic Policy", "1973–74 — Barisan Nasional absorbs former opposition parties"],
        rot: { graft: 40, capture: 50, closure: 45, suppression: 70, feedback: 50, sclerosis: 40, succession: 30 }, leakage: 65, reversibility: 30 },
      { name: "Mahathir: money politics and the executive state", from: 1981, to: 2003,
        summary: "Privatisation to party-linked businessmen, a party split and refounding, the humbling of the judiciary, and the sacking and jailing of the deputy prime minister.",
        events: ["1987 — the Team A–Team B split; Operation Lalang detains 106", "1988 — UMNO declared unlawful by the High Court; refounded as 'UMNO Baru'; the Lord President removed", "1990s — privatised utilities and contracts to party-linked tycoons", "1998 — Anwar Ibrahim sacked and jailed; the reformasi protests"],
        rot: { graft: 75, capture: 80, closure: 55, suppression: 80, feedback: 70, sclerosis: 60, succession: 60 }, leakage: 85, reversibility: 25 },
      { name: "Erosion and 1MDB", from: 2003, to: 2018,
        summary: "Electoral erosion, then the diversion of state funds on a sovereign scale: 1MDB, the sacking of those who investigated it, and a lost popular vote held off by malapportionment — until 2018.",
        events: ["2008 — loses its two-thirds majority", "2009 — 1MDB created under Najib Razak", "2013 — loses the popular vote but keeps power through malapportioned seats", "2015 — hundreds of millions of dollars reported in Najib's accounts; the attorney-general and deputy prime minister removed", "2018 — loses federal power for the first time since independence"],
        rot: { graft: 95, capture: 80, closure: 60, suppression: 70, feedback: 85, sclerosis: 75, succession: 55 }, leakage: 90, reversibility: 45 },
      { name: "Out, back and diminished", from: 2018, to: 2026,
        summary: "Removed by voters, returned through elite realignment, and reduced to a junior partner — with its former leader twice convicted, one sentence commuted to house arrest, and its current leader's graft charges dropped without an acquittal.",
        events: ["2020 — Najib convicted in the SRC International case; jailed in 2022", "2020 — back in government after the 'Sheraton Move'; 2021–22 — Ismail Sabri prime minister", "2022 — Barisan Nasional wins only 30 seats; joins Anwar's unity government", "2023 — 47 charges against party president Zahid Hamidi dropped (a discharge not amounting to acquittal; the prosecution was halted for good in 2026)", "2024 — Najib's SRC sentence halved to six years", "December 2025 — Najib convicted in the main 1MDB trial and sentenced to a further 15 years (under appeal)", "September 2026 — a conditional pardon lets him serve the SRC term at home"],
        rot: { graft: 60, capture: 55, closure: 55, suppression: 40, feedback: 60, sclerosis: 70, succession: 60 }, leakage: 55, reversibility: 65 }
    ],
    money: {
      inflows: [
        { label: "State rents under the NEP", note: "contracts, licences, share allocations, privatisations", w: 5 },
        { label: "Party-owned companies", note: "Fleet Holdings, Renong and associates", w: 3 },
        { label: "Diversion from state funds", note: "1MDB, 2009–15", w: 3 },
        { label: "Donations from beneficiaries", note: "returned from the rents", w: 2 }
      ],
      outflows: [
        { label: "Divisional patronage and delegates", note: "the 'money politics' of party elections", w: 4 },
        { label: "Rural development and FELDA", note: "targeted to loyal areas", w: 3 },
        { label: "Personal enrichment of leaders", note: "exposed by 1MDB", w: 3 },
        { label: "Campaigns and coalition partners", note: "the Barisan Nasional machine", w: 2 }
      ]
    },
    ladder: [
      { stage: "Branch", text: "Join the branch; become a branch official in your village or neighbourhood." },
      { stage: "Division", text: "Build a division base and win its chairmanship." },
      { stage: "Delegates", text: "Deliver your division's delegates in party elections — from the 1980s, often with cash." },
      { stage: "Supreme council", text: "A council seat and a ministry, as patron of your division." },
      { stage: "Vice-presidency", text: "A network of contracts and positions of your own." },
      { stage: "The deputy presidency", text: "The most dangerous office in the party: Musa Hitam resigned from it, Anwar was sacked from it, Muhyiddin was removed from it." }
    ],
    books: ["gomez-jomo-malaysia", "billion-dollar-whale", "crouch-malaysia", "slater-ordering-power"],
    reading: ["Barry Wain, Malaysian Maverick: Mahathir Mohamad in Turbulent Times (2009)"]
  },
  // ================================================================
  kmt: {
    verdict: {
      held: "Anti-communism, a Leninist apparatus copied from the Soviets, and — on Taiwan — control of an entire society's organisations and, reputedly, one of the largest party fortunes in the world.",
      worked: "Not on the mainland, where it reached neither the villages nor the inflation. Spectacularly on Taiwan, where land reform, technocrats and export growth built an economic miracle — and where it then gave up its monopoly while it could still win elections.",
      rotted: "Two different rots. On the mainland, graft and a collapse of feedback that cost it China; on Taiwan, martial-law suppression and a party fortune built from state assets — the second reversed, in the end, by the party's own decision to democratise."
    },
    glue: {
      ladder: "Two ladders. At the centre, the Whampoa military academy, party schools and — on Taiwan — the Revolutionary Practice Institute trained a mainlander cadre that monopolised national office for decades. Taiwanese rose separately, through local elections the party sponsored. From 1952 Chiang Ching-kuo's China Youth Corps recruited a new generation, and from the 1970s he deliberately promoted Taiwanese technocrats — Lee Teng-hui among them — in what became 'Taiwanisation'.",
      money: "Reputedly the richest party in the world. On Taiwan it took over Japanese-era enterprises and property, ran party-owned businesses in media, finance and industry, and drew state subsidies — assets that a government committee began freezing and ruling on as 'ill-gotten' in 2016, with the courts later overturning several of its biggest rulings. On the mainland, finance ran through the Soong and Kung families and the state banks, and the wartime inflation and the 1948 gold yuan destroyed the savings of the class that might have supported it.",
      structure: "Leninist in form — democratic centralism, a Central Standing Committee, party cells in the army, schools and state enterprises, political commissars in the military. Leader-centred in practice: Chiang Kai-shek ruled by balancing the CC Clique, the Whampoa generals and the Political Study clique against one another.",
      society: "Thin on the mainland, where it never reached the villages the communists organised. Deep on Taiwan, where farmers' and fishermen's associations, labour unions, the youth corps and the army were party-organised, and Taiwanese local factions were co-opted by sponsoring rival factions against each other in every county's elections.",
      threat: "The communists — first as rivals inside the United Front, then as the enemy across the strait. 'Recover the mainland' justified martial law, a national legislature frozen since the 1947–48 elections, and the party's claim to everything for forty years.",
      succession: "Dynastic, then institutional. Chiang Kai-shek handed power to his son Chiang Ching-kuo; Chiang Ching-kuo declared in 1985 that no member of his family would succeed him and left a Taiwanese technocrat, Lee Teng-hui, as his vice-president and heir. Since 1996 the party's leaders have faced voters."
    },
    engine: {
      policy: { score: 65, text: "Weak on the mainland, where it could not collect the land tax or control inflation. Formidable on Taiwan, where land reform and technocrats such as K. T. Li built one of the fastest-growing economies in the world." },
      adapt: { score: 85, text: "The great case of adaptation: a party that lost a civil war, rebuilt itself on an island, democratised from strength, won Taiwan's first free presidential election in 1996, lost power in 2000 and returned in 2008." },
      feedback: { score: 45, text: "Martial law filtered bad news through the garrison command and party cells, but local elections from 1950 gave the party a real if controlled reading of Taiwanese opinion — a channel that helped it adapt when the mainland party had none." },
      bargain: { score: 55, text: "On Taiwan, performance and anti-communism — land, growth, security — with local-faction patronage underneath." }
    },
    phases: [
      { name: "Revolutionary party and Leninist reorganisation", from: 1919, to: 1928,
        summary: "Sun Yat-sen's party rebuilt on the Soviet model, with its own army; after Sun's death, Chiang Kai-shek used the army to take the party and purge its communist allies.",
        events: ["1919 — the Kuomintang refounded", "1923–24 — reorganised with Soviet advisers; the First Congress; the Whampoa academy founded", "1925 — Sun Yat-sen dies", "1926–28 — the Northern Expedition", "1927 — the Shanghai massacre of communists ends the First United Front"],
        rot: { graft: 30, capture: 25, closure: 30, suppression: 60, feedback: 45, sclerosis: 20, succession: 70 }, leakage: 30, reversibility: 40 },
      { name: "The Nanjing decade and the war", from: 1928, to: 1949,
        summary: "One-party 'tutelage', factions balanced by the leader, family finance, eight years of war and a hyperinflation that ended the regime's credibility on the mainland.",
        events: ["1928 — the Nationalist government in Nanjing; 'political tutelage' proclaimed", "1936 — the Xi'an Incident: Chiang kidnapped by his own generals", "1937–45 — war with Japan", "1947 — the 28 February massacre on Taiwan", "1948 — the gold yuan collapses; 1949 — the mainland lost"],
        rot: { graft: 80, capture: 75, closure: 55, suppression: 75, feedback: 80, sclerosis: 60, succession: 40 }, leakage: 80, reversibility: 15 },
      { name: "Martial-law Taiwan", from: 1949, to: 1975,
        summary: "A party reformed in exile, ruling an island under martial law: land reform, American aid and growth above; the White Terror, a frozen legislature and a mainlander monopoly of national power below.",
        events: ["1949 — martial law declared (it would last 38 years)", "1949 — the Revolutionary Practice Institute founded; 1950–52 — the party reform", "1949–53 — land reform: 'land to the tiller'", "1950 onward — local elections co-opt Taiwanese factions", "1950s–60s — the White Terror; American aid until 1965"],
        rot: { graft: 40, capture: 50, closure: 65, suppression: 90, feedback: 60, sclerosis: 45, succession: 45 }, leakage: 90, reversibility: 10 },
      { name: "Taiwanisation and democratisation from strength", from: 1975, to: 2000,
        summary: "Chiang Ching-kuo opened the party to Taiwanese, tolerated an opposition and lifted martial law; Lee Teng-hui carried democratisation through — while 'black gold' ties between local factions and organised crime grew.",
        events: ["1978 — Chiang Ching-kuo becomes president", "1979 — the Kaohsiung Incident; opposition leaders tried", "1986 — the Democratic Progressive Party founded and tolerated", "1987 — martial law lifted; 1988 — Lee Teng-hui succeeds", "1991 — the legislators elected on the mainland retire; 1996 — first direct presidential election, won by Lee"],
        rot: { graft: 60, capture: 60, closure: 45, suppression: 45, feedback: 45, sclerosis: 50, succession: 35 }, leakage: 70, reversibility: 50 },
      { name: "A party among parties", from: 2000, to: 2026,
        summary: "Out of power, back in power, out again — and made to account for its fortune: an ordinary competitive party with an unusual past.",
        events: ["2000 — loses the presidency after a split", "2008–16 — Ma Ying-jeou in office", "2014 — the Sunflower Movement against a trade pact with China", "2016 — the Ill-gotten Party Assets Settlement Committee is set up; it freezes and rules against party assets, though courts reversed several of its largest rulings in 2024", "2024 — wins the most legislative seats but loses the presidency again", "2025 — the mass recall campaign against KMT legislators fails; Cheng Li-wun elected chair", "2026 — Cheng meets Xi Jinping in Beijing (April); local elections due in November"],
        rot: { graft: 30, capture: 35, closure: 40, suppression: 10, feedback: 45, sclerosis: 55, succession: 50 }, leakage: 35, reversibility: 90 }
    ],
    money: {
      inflows: [
        { label: "Party-owned enterprises and Japanese-era assets", note: "media, finance, industry — the 'richest party' fortune", w: 4 },
        { label: "The state and its enterprises", note: "subsidies and a party-state budget until the 1990s", w: 3 },
        { label: "Local factions and business", note: "contributions returned as local patronage", w: 2 },
        { label: "American aid (1950–65)", note: "to the state the party ran", w: 2 }
      ],
      outflows: [
        { label: "Local factions and election patronage", note: "farmers' associations, credit co-operatives, county posts", w: 3 },
        { label: "The party apparatus", note: "cadres, schools, the youth corps", w: 3 },
        { label: "Security and political warfare", note: "the garrison command, commissars", w: 2 },
        { label: "'Black gold' in the 1990s", note: "local factions tied to organised crime", w: 1 }
      ]
    },
    ladder: [
      { stage: "Recruited", text: "Through school, the army or the China Youth Corps." },
      { stage: "Trained", text: "At the party schools — on Taiwan, the Revolutionary Practice Institute." },
      { stage: "Placed", text: "In the state, the military's political-commissar system or a state enterprise." },
      { stage: "The local route", text: "For Taiwanese before the 1970s: a county post won with party sponsorship and a local faction's backing." },
      { stage: "Taiwanisation", text: "From the 1970s, promotion as a technocrat into the cabinet and the Central Standing Committee." },
      { stage: "The top", text: "Until 1988, the Chiang family; after that, contested inside the party and, from 1996, at the polls." }
    ],
    books: ["chiang-fenby", "eastman-abortive", "taylor-generalissimo", "rigger-taiwan", "dickson-leninist", "slater-wong-development"],
    reading: []
  },

  // ================================================================
  golkar: {
    verdict: {
      held: "The army, the civil service and the president's patronage, fused into an electoral machine that could not lose and did not need to — founded on the destruction of its rival.",
      worked: "At stability and growth for thirty years, with technocrats running the economy; and then, remarkably, at survival — it outlived its dictator by becoming an ordinary party that has sat in almost every government since.",
      rotted: "The deepest leakage in the dossiers: graft and capture fused with the Suharto family's businesses, a state that answered to the organisation, and a founding in mass killing. The rot became reversible only when the regime fell."
    },
    glue: {
      ladder: "Through three 'paths' — A for the armed forces, B for the bureaucracy, G for Golkar's own mass organisations — which divided candidate lists and posts among them. Officers moved into governorships and district posts under the army's 'dual function' doctrine; civil servants rose by loyalty as members of the Korpri corps. After 1998 the ladder turned to money: chairmanships and candidacies were contested with cash.",
      money: "The state and the president's patronage machine. Suharto's charitable foundations (yayasan), funded by levies on business and state banks, financed Golkar and rewarded loyalists; cronies such as the Salim group and Bob Hasan, and from the late 1980s the Suharto children's companies, took monopolies, licences and contracts. After 1998 the party financed itself through its leaders' business empires and state contracts.",
      structure: "Under the New Order not formally a party but a federation of 'functional groups' — civil servants, workers, farmers, youth, women — under a Board of Patrons chaired by Suharto, whose decisions overrode the formal leadership. After 1998, a conventional party with regional boards and fierce leadership contests.",
      society: "Everywhere the state was. Every civil servant belonged to Korpri and was expected to vote Golkar — 'monoloyalty'. Village heads and the army's territorial commands delivered rural votes, and the 'floating mass' doctrine barred other parties from organising below the district level between elections.",
      threat: "Founded in 1964 as the army's counterweight to the Indonesian Communist Party, and legitimated by the killings of 1965–66 and the ban on communism. 'Pancasila' and development became the justifying ideology.",
      succession: "None under Suharto: the organisation existed to renew his presidency every five years. When he fell in May 1998, Golkar survived him by converting itself into an ordinary party — the rare regime party that outlived its dictator by joining the democracy."
    },
    engine: {
      policy: { score: 55, text: "Technocrats — the 'Berkeley mafia' — ran macroeconomic policy well: stabilisation after 1966, rice self-sufficiency by the mid-1980s, poverty falling sharply. The organisation delivered votes, not policy." },
      adapt: { score: 80, text: "Its striking strength: it survived the fall of its patron, came second in 1999 and first in 2004, and has sat in almost every coalition since." },
      feedback: { score: 30, text: "Elections with a guaranteed result and a licensed press meant the regime learned of its own decay from the 1997–98 financial crisis." },
      bargain: { score: 30, text: "Development in exchange for obedience: roads, rice, schools and civil-service careers, delivered through the state to those who voted right." }
    },
    phases: [
      { name: "The army's answer to the communists", from: 1964, to: 1971,
        summary: "A joint secretariat of army-sponsored 'functional groups', then the vehicle of a general who came to power over the destruction of the communist party.",
        events: ["1964 — Sekber Golkar founded with army backing", "1965 — the failed 30 September movement; the army blames the PKI", "1965–66 — mass killings of hundreds of thousands of alleged communists", "1966–67 — Suharto takes power", "1971 — first New Order election: Golkar wins 62.8%"],
        rot: { graft: 40, capture: 40, closure: 45, suppression: 95, feedback: 55, sclerosis: 20, succession: 40 }, leakage: 70, reversibility: 10 },
      { name: "Floating mass and forced fusion", from: 1971, to: 1983,
        summary: "The rules of competition rewritten so that Golkar could not lose: other parties forced into two, barred from the villages, and civil servants bound to vote for the government.",
        events: ["1971 — Korpri, the civil-service corps, founded; 'monoloyalty' demanded", "1973 — the other parties fused into the PPP and PDI", "1975 — the Pertamina crisis: the state oil company's roughly $10 billion of debt", "1977, 1982 — Golkar wins 62% and 64%"],
        rot: { graft: 65, capture: 60, closure: 55, suppression: 90, feedback: 65, sclerosis: 40, succession: 50 }, leakage: 90, reversibility: 5 },
      { name: "Suharto Inc.", from: 1983, to: 1998,
        summary: "Pancasila as the only permitted ideology, the presidential family's businesses at the centre of the economy, a record 74.5% in 1997 — and collapse within a year.",
        events: ["1985 — every organisation required to adopt Pancasila as its sole foundation", "Late 1980s–90s — monopolies and contracts for the Suharto children and cronies", "1996 — the 'national car' monopoly for Tommy Suharto", "1997 — Golkar wins 74.5%; the Asian financial crisis", "May 1998 — riots; Suharto resigns"],
        rot: { graft: 95, capture: 90, closure: 70, suppression: 80, feedback: 85, sclerosis: 75, succession: 85 }, leakage: 95, reversibility: 10 },
      { name: "Survival in democracy", from: 1998, to: 2004,
        summary: "The regime's vehicle reinvented itself as a party, lost the first free election clearly (about 22% to the PDI-P's 34%) and topped the second legislative vote.",
        events: ["1998–99 — B. J. Habibie, Suharto's vice-president and a Golkar figure, oversees the transition", "1999 — second place with 22%", "2002 — chairman and House speaker Akbar Tandjung convicted over Bulog state logistics funds; cleared by the Supreme Court in February 2004", "2004 — first place in the legislative election"],
        rot: { graft: 70, capture: 60, closure: 50, suppression: 20, feedback: 50, sclerosis: 60, succession: 45 }, leakage: 55, reversibility: 70 },
      { name: "The party of every government", from: 2004, to: 2026,
        summary: "A party that no longer needs to win the presidency to share power — joining almost every coalition, with its leaders' business empires and a steady line of corruption cases.",
        events: ["2004–09 — chairman Jusuf Kalla serves as vice-president", "2016 — joins President Jokowi's coalition, having backed his rival in 2014", "2018 — former chairman and parliamentary speaker Setya Novanto jailed for fifteen years over the e-ID card scandal (cut to twelve and a half in 2025; paroled that August)", "2024 — backs Prabowo; Bahlil Lahadalia replaces Airlangga Hartarto as chair in August, and Golkar ministers join the Prabowo cabinet"],
        rot: { graft: 65, capture: 60, closure: 50, suppression: 15, feedback: 50, sclerosis: 55, succession: 40 }, leakage: 50, reversibility: 75 }
    ],
    money: {
      inflows: [
        { label: "Suharto's foundations (yayasan)", note: "levies on business and state banks", w: 4 },
        { label: "State banks and state enterprises", note: "Pertamina, the logistics agency Bulog", w: 4 },
        { label: "Crony conglomerates", note: "returns on monopolies and licences", w: 3 },
        { label: "Leaders' business empires (after 1998)", note: "the party of tycoons", w: 2 }
      ],
      outflows: [
        { label: "Civil-service and village patronage", note: "development funds delivered through the state", w: 4 },
        { label: "Monopolies for cronies and the Suharto family", note: "licences, contracts, the national car", w: 4 },
        { label: "Election machinery and functional groups", note: "the organisation that could not lose", w: 3 },
        { label: "Party congresses (after 1998)", note: "leadership contests fought with cash", w: 2 }
      ]
    },
    ladder: [
      { stage: "Enter by a path", text: "A — the armed forces; B — the bureaucracy; G — Golkar's mass organisations." },
      { stage: "Korpri or the functional groups", text: "Loyalty measured in votes delivered." },
      { stage: "Regional office", text: "District head or governor — often an officer, under the dual-function doctrine." },
      { stage: "The list", text: "Candidate slots divided among the A, B and G paths." },
      { stage: "The patron's favour", text: "The Board of Patrons — in effect Suharto — decided who rose." },
      { stage: "After 1998", text: "The chairmanship bought and bargained at party congresses." }
    ],
    books: ["reeve-golkar", "tomsa-golkar", "elson-suharto", "crouch-army-indonesia", "winters-oligarchy", "slater-ordering-power"],
    reading: []
  },

  // ================================================================
  congress: {
    verdict: {
      held: "A movement that had organised the whole country before it took power, then a system of factions and state bosses in which almost every ambition could be pursued inside the party — until the high command and the family replaced the bosses.",
      worked: "For its first generation, when the state it built — planning, public heavy industry, the IITs, a universal franchise — was India's main institutional asset, and its own factions did the work that an opposition does elsewhere.",
      rotted: "Serious but democratic and largely reversible: a licence-and-patronage economy, the end of internal party democracy after 1969, and twenty-one months of Emergency rule — each undone at the polls or in the courts, while the party's own organisation was never rebuilt."
    },
    glue: {
      ladder: "Two ladders, one laid over the other. In the Congress system a career rose through the organisation — district committee, Pradesh committee, a faction, a ticket — and a strong party boss could displace his own chief minister: Kamaraj in Madras in 1953, C. B. Gupta in Uttar Pradesh in 1961 (against Nehru's wishes), Biju Patnaik in Orissa in 1962, all cited in Kothari's 1964 footnotes. After 1969 the ladder ran through Delhi: Paul Brass describes Indira Gandhi removing every chief minister with an independent base and replacing them with loyalists. The Nehru–Gandhi family has led the party for most of the years since 1978 and continuously from 1998 to 2022.",
      money: "Business and the state. In the licence era a firm needed permits to build, import or expand, and donations were widely held to buy access — the arrangement Rajagopalachari's Swatantra Party was founded against in 1959. While Congress ran nearly every state, contracts, posts and licences were the currency that faction chains passed downward. Liberalisation after 1991 shrank the licence rents without ending patronage; the UPA-era cases (2G spectrum, coal blocks, the Commonwealth Games) were about how state assets were allocated, and Congress-run Karnataka has faced its own inquiries since 2024.",
      structure: "A federation of state parties under a high command. Kothari's picture: a Congress president and Parliamentary Board who mediated faction fights, 'observers' who supervised state organisational elections, and a national organisation that Nehru, by his own dominance, had kept weak until the Kamaraj Plan of 1963 restored it. In practice the Working Committee has since been largely appointed: by one count the party has held only six contested presidential elections (1939, 1950, 1977, 1997, 2000, 2022), and the Working Committee went without an election between 1998 and 2022.",
      society: "The widest hooks of any party in the atlas, laid down by the 1920 Nagpur constitution — provincial committees on linguistic lines, a four-anna membership, committees down to the village — and proven by the 1937 elections, after which it formed ministries in eight of eleven provinces. Local notables, caste and kin networks and the 'link men' Kothari describes carried it into the countryside, and Congress-linked unions such as INTUC into the factories. It absorbed rather than represented: when opposition agitations won a group's demands, Kothari notes, the group tended to end up inside Congress.",
      threat: "The freedom movement, then nation-building. Kothari reports the Congress claim that only Congress could be trusted with the country, and adds that after 1947 it went on behaving as a movement with a charter of modernisation. The founding threat was revived in 1975, when the Emergency was proclaimed under Article 352 for 'internal disturbance'; since 2014 the party's stated aim has been to counter what it calls the BJP's 'divisive politics'.",
      succession: "Managed by the organisation until 1966 and by the family after. In 1964 Kamaraj sounded out MPs, chief ministers and Pradesh chiefs and announced that Shastri had the majority; in 1966 the parliamentary party voted 355 to 169 for Indira Gandhi over Morarji Desai. Sanjay Gandhi, her first chosen heir, died in 1980 and Rajiv Gandhi, brought in from 1981, became prime minister on the day she was assassinated. Sonia Gandhi declined the premiership in 2004; Rahul Gandhi resigned as president in 2019; Mallikarjun Kharge, elected in 2022, is the first president outside the family since Sitaram Kesri."
    },
    engine: {
      policy: { score: 65, text: "Strong at building institutions: the Planning Commission (1950), five-year plans, the 1956 resolution reserving seventeen industries for the state, the IITs from 1951. Weak at removing what it built: the licensing regime that Rajagopalachari called licence-permit-quota raj, and Bardhan's finding that policy was hostage to bargaining among industrial capitalists, rich farmers and public-sector professionals. The 1991 reforms (licensing abolished for all but 18 industries) came under crisis, and UPA passed the RTI Act and MGNREGA in 2005." },
      adapt: { score: 55, text: "It absorbed every new group until 1967, survived the 1969 split by rebuilding round one leader, and came back after 1977 and 1996. But it has not won a Lok Sabha majority on its own since 1984, and its recoveries since 2014 — 99 seats in 2024, Kerala and Karnataka — have been partial." },
      feedback: { score: 45, text: "In the Congress system the factions were the feedback channel: a disgruntled boss could take the state party and topple his chief minister. After 1969 that channel gave way to a high command hearing what loyalists relayed; Indira Gandhi called the 1977 election possibly having misjudged her standing from a censored press. Later episodes — the 2021 Punjab change of chief minister months before an election AAP won, the 2026 Kerala deadlock — show a centre still deciding for the states." },
      bargain: { score: 35, text: "Mixed and mostly patronage: 'Garibi hatao' in 1971 and the rights-based laws of 2005 were programme, but the countryside was held by notables and brokers who exchanged particular benefits for votes." }
    },
    phases: [
      { name: "Movement and the Congress system", from: 1885, to: 1964,
        summary: "A movement that became the state: an annual assembly of educated Indians from 1885, a mass organisation after the 1920 constitution, and after 1947 a dominant party whose factions carried the competition that elsewhere happens between parties. It built planning, public industry and the IITs, and the licence system with them. Rot is low and mostly of capture; Kothari's own reservation is that Nehru's dominance left the national organisation weak.",
        events: ["1885 — founded in Bombay, with 72 delegates; A. O. Hume, a retired British civil servant, and W. C. Bonnerjee the first president", "1920 — Nagpur constitution: provincial committees on linguistic lines, a four-anna membership, a Working Committee", "1937 — provincial elections; ministries formed in eight of eleven provinces", "1950 — Planning Commission; 1951–52 — first general election: 364 of 489 seats on 45% of the vote", "1953–62 — party bosses displace chief ministers: Kamaraj, C. B. Gupta, Biju Patnaik", "1956 — Second Plan and Industrial Policy Resolution; 1957–58 — the LIC–Mundhra affair costs Finance Minister T. T. Krishnamachari his post", "1959 — Kerala's elected communist government dismissed under Article 356, with Indira Gandhi, then party president, among those pressing for it; Rajagopalachari leaves to found the Swatantra Party", "1963–64 — Kamaraj Plan; Kairon resigns after the Das Commission finds him guilty on eight of 31 charges; Nehru dies and Shastri succeeds"],
        rot: { graft: 20, capture: 30, closure: 25, suppression: 30, feedback: 30, sclerosis: 25, succession: 40 }, leakage: 30, reversibility: 75 },
      { name: "The high command and the Emergency", from: 1964, to: 1977,
        summary: "The system's thermostat broke: after the 1967 losses Indira Gandhi split the party, personalised it and ruled through a high command, until in 1975 a court verdict against her was answered with the Emergency. Suppression and feedback decay peak here; the voters reversed it in 1977, but internal party democracy was not restored.",
        events: ["1966 — parliamentary party elects Indira Gandhi over Morarji Desai, 355 to 169", "1967 — 283 of 520 seats on 41%; power lost in nine states, including Madras to the DMK and Kerala to a left coalition", "1969 — bank nationalisation; Indira backs V. V. Giri against the party's candidate Sanjiva Reddy; the organisation expels her and Congress splits into (O) and (R)", "1971 — 'Garibi hatao': Congress (R) wins 352 seats on 43.7%; the war that creates Bangladesh", "1974 — Bihar student agitation, Jayaprakash Narayan's 'total revolution', a railway strike", "12 June 1975 — Allahabad High Court voids Indira Gandhi's election and bars her from elected office for six years; 25 June — Emergency proclaimed under Article 352, with the cabinet told the next morning; press censored and more than 100,000 detained", "1976 — 42nd Amendment; the Supreme Court upholds the suspension of habeas corpus in ADM Jabalpur, 4 to 1; 8.3 million sterilisations in 1976–77", "1977 — elections called in January; Congress falls to 154 seats on 34.5%, wins nothing in Bihar or Uttar Pradesh, and Indira and Sanjay Gandhi lose their seats"],
        rot: { graft: 45, capture: 55, closure: 55, suppression: 85, feedback: 75, sclerosis: 45, succession: 60 }, leakage: 80, reversibility: 55 },
      { name: "Restoration, the family and the end of dominance", from: 1977, to: 1996,
        summary: "The Janata government's attempts to try the Emergency's architects largely failed; Indira Gandhi split the party again, won in 1980 and was assassinated in 1984; Rajiv Gandhi took the largest majority in the country's history and lost it in 1989 after the Bofors affair; P. V. Narasimha Rao then ran a minority government that liberalised the economy and during whose term the Babri Masjid was demolished. The 1984 violence and the family succession lift suppression and closure; voters removed the party in 1989 and 1996.",
        events: ["1978 — Indira Gandhi splits the party again; Congress (I) returns in 1980 with over 350 seats; Sanjay Gandhi dies in a plane crash in June", "1984 — Operation Blue Star (June); Indira Gandhi assassinated (31 October); anti-Sikh violence in Delhi kills 2,733 by the Ahuja Committee's count, with Congress figures implicated (Sajjan Kumar sentenced to life in 2018, acquitted in another case in 2023); Rajiv Gandhi wins about 414 seats on 49%", "1985 — anti-defection law; 1986 — Muslim Women (Protection of Rights on Divorce) Act nullifies the Shah Bano judgment", "1987 — Swedish Radio alleges Bofors kickbacks; the Delhi High Court quashes the bribery charges against Rajiv Gandhi in 2004", "1989 — 197 seats on 39.5%; V. P. Singh's National Front takes office", "1991 — Rajiv Gandhi assassinated during the campaign; Rao forms a minority government on 244 seats; devaluation and licensing abolished for all but 18 industries", "1992–93 — Babri Masjid demolished, with the government's responsibility contested; the JMM bribery case (Rao convicted in 2000, acquitted in 2002)", "1996 — 140 seats on 28.8%; Rao resigns"],
        rot: { graft: 60, capture: 60, closure: 65, suppression: 55, feedback: 55, sclerosis: 60, succession: 65 }, leakage: 65, reversibility: 75 },
      { name: "The coalition years", from: 1996, to: 2014,
        summary: "From dominant party to coalition anchor. Sonia Gandhi took over in 1998, the party split over her foreign birth in 1999 and fell to 114 seats, then led the UPA governments of 2004 and 2009, which passed the RTI Act and MGNREGA and then met the 2G, coal and Commonwealth Games cases. The rot is graft and closure rather than suppression; the voters and the Supreme Court both acted.",
        events: ["1998 — Kesri removed, Sonia Gandhi becomes president; 141 seats", "1999 — Pawar, Sangma and Tariq Anwar expelled after disputing that a foreign-born person could lead; they form the NCP; Congress wins 114 seats", "2004 — 145 seats and the UPA; Sonia Gandhi declines the premiership and Manmohan Singh becomes prime minister; 2005 — RTI Act and MGNREGA; 2009 — 206 seats", "2010–11 — 2G spectrum (CAG estimate Rs 1.76 lakh crore; all 18 accused acquitted in December 2017; the Supreme Court cancelled 122 licences); Ashok Chavan resigns over the Adarsh flats (November 2010); Suresh Kalmadi arrested over the Commonwealth Games (April 2011); Anna Hazare's Lokpal agitation begins", "2014 — 44 seats on 19.3%, too few for official opposition status; in September the Supreme Court cancels 214 coal-block allocations made since 1993 as arbitrary and illegal"],
        rot: { graft: 65, capture: 55, closure: 65, suppression: 20, feedback: 55, sclerosis: 60, succession: 55 }, leakage: 50, reversibility: 85 },
      { name: "Opposition and partial recovery", from: 2014, to: 2026,
        summary: "A national opposition with a record of losing to the BJP, a leadership that resigned and returned, and real recoveries in the states: Himachal, Karnataka and Telangana in 2022–23, 99 seats in 2024 and Kerala in 2026 — beside heavy defeats in Haryana, Maharashtra, Delhi, Bihar, Assam and Bengal. As of May 2026 it governs alone in Karnataka, Telangana and Himachal, leads Kerala, and is a junior partner in Jharkhand and Jammu and Kashmir. Suppression is scored low because Congress holds little power to suppress with; the party's own allegations of an uneven field ('vote theft', the Enforcement Directorate cases) are contested by the Election Commission and the government and are not scored here.",
        events: ["2019 — 52 seats on 19.5%; Rahul Gandhi loses Amethi and resigns as president; Sonia Gandhi interim until 2022", "2020 — Jyotiraditya Scindia and 22 MLAs quit, helping bring down the Madhya Pradesh government", "2021–22 — the high command replaces Punjab's chief minister, Amarinder Singh, in September 2021; AAP wins 92 of 117 seats", "2022 — Kharge elected president with 7,897 votes to Shashi Tharoor's 1,072; the Bharat Jodo Yatra (September–January); Himachal Pradesh won", "2023 — Rahul Gandhi convicted of criminal defamation and disqualified (March), the conviction stayed by the Supreme Court in August; Karnataka won with 135 of 224 and Telangana with 64 of 119; Madhya Pradesh, Rajasthan and Chhattisgarh lost", "2024 — 99 seats on 21.2%, Rahul Gandhi Leader of the Opposition; Haryana lost (37 seats to the BJP's 48 on 39.1% against 39.9%); Maharashtra (16 seats)", "2025 — 0 seats in Delhi; 'vote theft' allegations against the Election Commission, which asked for sworn evidence; 6 of 61 seats contested in Bihar; the Enforcement Directorate charges Sonia and Rahul Gandhi in the National Herald case (April; Congress calls it political), and a Delhi court refuses to take cognisance in December", "2026 — Kerala won (63 seats, UDF 102 of 140) after a public dispute over the chief ministership that the high command settled on 14 May; Assam lost (19 seats, its lowest there) and West Bengal returned only a handful of Congress MLAs; Siddaramaiah resigns in Karnataka on 28 May under a reported power-sharing deal and D. K. Shivakumar is sworn in on 3 June"],
        rot: { graft: 35, capture: 30, closure: 70, suppression: 10, feedback: 55, sclerosis: 60, succession: 60 }, leakage: 20, reversibility: 90 }
    ],
    money: {
      inflows: [
        { label: "State power in the states", note: "contracts, posts and licences, passed down the faction chains while Congress ran nearly every state", w: 4 },
        { label: "Business donations in the licence era", note: "access to permits and quotas, in the arrangement the Swatantra Party opposed", w: 3 },
        { label: "Central resources in office", note: "development schemes, and after 2004 rights-based programmes", w: 3 },
        { label: "Membership and small donations", note: "the four-anna membership of 1920 built the base rather than the budget", w: 1 }
      ],
      outflows: [
        { label: "Local notables and their vote banks", note: "the countryside's patronage economy that Kothari describes", w: 4 },
        { label: "Faction chains from district to Delhi", note: "brokers and 'link men' between the organisation and the voter", w: 3 },
        { label: "Campaigns and, since 2022, the yatras", note: "the Bharat Jodo Yatra and its successor", w: 2 },
        { label: "Seats ceded to allies", note: "the price of the UPA, UDF and INDIA-bloc arrangements", w: 1 }
      ]
    },
    ladder: [
      { stage: "Movement worker or local notable", text: "Freedom-movement service before 1947; afterwards a caste or kin base in the village or town." },
      { stage: "District and Pradesh committee", text: "Become an officer of the district Congress, then of the Pradesh committee — Kothari's 'managerial class' of politicians." },
      { stage: "A faction chain", text: "Attach to a patron who can carry your district to the state, and the state to Delhi." },
      { stage: "The ticket", text: "Chosen by the Parliamentary Board and, after 1969, effectively by the high command." },
      { stage: "State power", text: "Chief minister — won by a party boss under Nehru, appointed by Delhi under Indira Gandhi." },
      { stage: "The top", text: "The Working Committee and the presidency, held by the Nehru–Gandhi family for most of the years since 1978." }
    ],
    books: ["kothari-politics-in-india", "guha-india-after-gandhi", "bardhan-political-economy", "kohli-democracy-discontent", "tudor-promise-of-power", "prakash-emergency-chronicles", "indira-frank", "chandra-democratic-dynasties", "hasan-congress-after-indira"],
    reading: ["Rajni Kothari, 'The Congress \"System\" in India', Asian Survey (1964)", "Myron Weiner, Party Building in a New Nation: The Indian National Congress (1967)", "Paul R. Brass, The Politics of India since Independence (1990)", "Christophe Jaffrelot and Pratinav Anil, India's First Dictatorship: The Emergency, 1975–1977 (2020)"]
  },

  // ================================================================
  pri: {
    verdict: {
      held: "The presidency as the only prize, rationed by a six-year clock: no re-election, a hand-picked successor, and sectors — labour, peasants, the 'popular' classes — that reached the state only through the party.",
      worked: "Twice, and differently. From the 1930s it turned a country of warring generals into a stable civilian state with real social reforms; from the 1940s it delivered decades of fast growth. It stopped working when the growth ended and the technocrats it promoted cut the resources the sectors lived on.",
      rotted: "Broad graft and capture, and lethal suppression at the peaks — 1968, 1971, the Dirty War — spread through unions, governorships and the security forces. Yet it was reversible in the end: an election authority the president no longer controlled removed the party from the presidency in 2000, and voters removed it again in 2018."
    },
    glue: {
      ladder: "The sexenio was the ladder. Careers ran through a sector, a governor's office or a minister's personal network, and the presidential ban on re-election — with deputies and senators barred from succeeding themselves until 2018 — meant that every six years the whole stock of posts turned over, so ambitious people waited their turn rather than defected. From the 1980s the entry ticket changed: Sarah Babb's Managing Mexico traces the displacement of the lawyers who dominated the political elite by US-trained economists.",
      money: "The state itself. Oil under Pemex, public enterprises (about 1,155 in 1982) and the federal budget supplied jobs, credit, land and licences to the sectors, and rents at every level were the unwritten pay of office; Paul Gillingham argues that this corruption underwrote the regime's legitimacy rather than merely eroding it. The bill came due when the resource base shrank — enterprises were cut to about 412 by 1988 and Telmex and the banks were sold in 1990–92. By the 2010s the money came from state governments' discretionary budgets and contracts, which is where the ex-governors' cases begin.",
      structure: "A presidential party. In practice the president chose his successor, and governors and congressional candidates were widely understood to be his picks; the party's national leadership ratified. The sector structure — created under Cárdenas in 1938 with labour, peasant, popular and military wings — let the president arbitrate among competing interests instead of negotiating with a party of members. The military sector did not survive the 1940s.",
      society: "The sectors did the work. The CTM (labour, founded 1936) was led by Fidel Velázquez, who headed it for most of the period from 1941 until his death in June 1997; the CNC organised the ejidos created by the land reform; the CNOP (1943) gathered teachers, civil servants and the middle classes. Government-backed 'charro' leaders replaced independent unionists from 1948, when Jesús Díaz de León was imposed on the railway workers' union. Cárdenas's redistribution of roughly 180,000 square kilometres of hacienda land through ejidos gave the regime peasants who owed it their land.",
      threat: "The generals. The revolution left a decade of civil war, the Cristero war of 1926–29 and the assassination of president-elect Álvaro Obregón in 1928; the party was founded in 1929 to end the fight for the presidency by giving every faction a place inside one organisation. From the late 1940s anti-communism supplied a second justification.",
      succession: "The dedazo. From 1934 to 1994, as Jorge Castañeda describes it, each president effectively picked his successor and the party ratified him, with losing pretenders compensated rather than exiled. Salinas picked Colosio, who was assassinated in March 1994, and then Zedillo; Zedillo ended the practice with an open presidential primary in November 1999. The system gave orderly transfers, but the 1987 Democratic Current split and the murders of 1994 show what happened when the pick was contested."
    },
    engine: {
      policy: { score: 70, text: "Real capacity in two eras: Cárdenas's land reform, oil nationalisation and labour incorporation in the 1930s, and 'stabilising development' from the 1950s — growth of around 6.8% a year from 1954 to 1970 with low inflation. But crises followed or accompanied the handovers of 1976, 1982 and 1994, and the later economic model was imposed by technocrats rather than negotiated through the sectors." },
      adapt: { score: 65, text: "Reinvented itself repeatedly — the PNR, the PRM in 1938, the PRI in 1946 — and absorbed new groups: the 1977 electoral reform opened seats to the opposition, and the party turned technocratic after 1982. Joy Langston argues it survived defeat in 2000 because its vote-winning factions could adapt to the ballot faster than their internal rivals, and it returned in 2012. But adaptation stalled after 2018: press accounts describe a sharp fall in registered membership." },
      feedback: { score: 45, text: "The sexenio was a feedback device — a new president could see the old one's mistakes, and Zedillo blamed Salinas for the crisis — but inside each term the top was surrounded by loyalists. The 1968 crackdown, the 1985 earthquake response, the 1988 count and the 1994 devaluation each show an administration learning from events, not from its channels." },
      bargain: { score: 30, text: "Particular benefits over programme. Beatriz Magaloni's 'punishment regime' and Kenneth Greene's 'resource advantage' both describe voters held by transfers the party controlled, not by policy agreement; the sectors were how those benefits reached people. Cárdenas-era reforms and the growth years made the bargain real, but it weakened as the transfers shrank." }
    },
    phases: [
      { name: "From caudillos to sectors", from: 1929, to: 1946,
        summary: "A party founded to stop the generals killing each other over the presidency, turned by Cárdenas into a corporatist organisation with sectors, a land reform and an oil nationalisation that gave the regime social roots.",
        events: ["1928 — president-elect Obregón assassinated", "1929 — Calles founds the National Revolutionary Party (PNR)", "1934 — Cárdenas takes office, setting the precedent of a single six-year term; forces Calles out in 1935–36", "1936 — the CTM is founded", "1938 — oil nationalised (18 March); the PNR becomes the Party of the Mexican Revolution with labour, peasant, popular and military sectors (30 March)", "1940 — Ávila Camacho succeeds Cárdenas peacefully", "1943 — CNOP formed"],
        rot: { graft: 30, capture: 30, closure: 45, suppression: 45, feedback: 40, sclerosis: 20, succession: 40 }, leakage: 40, reversibility: 40 },
      { name: "The miracle and the machine", from: 1946, to: 1968,
        summary: "The party takes its permanent name, the presidency passes to civilians, and growth funds a bargain in which the sectors deliver votes and the leaders are policed from above.",
        events: ["1946 — renamed the Institutional Revolutionary Party; Miguel Alemán, the first civilian president after a string of revolutionary generals, takes office in December", "1948 — 'charrazo': a government-backed leader imposed on the railway workers' union", "1954–70 — 'stabilising development', growth of about 6.8% a year", "1946–52 — Alemán's administration is remembered for the personal enrichment of the president and his circle"],
        rot: { graft: 55, capture: 55, closure: 60, suppression: 55, feedback: 50, sclerosis: 40, succession: 25 }, leakage: 60, reversibility: 30 },
      { name: "Crackdown, populist spending and debt", from: 1968, to: 1988,
        summary: "The state kills students in 1968 and 1971, then buys legitimacy with spending it cannot afford; the debt crisis of 1982 forces the technocratic turn, and the opposition — now on the ballot — reaches the party's own ranks.",
        events: ["1968 — Tlatelolco, 2 October: the army fires on a student rally ten days before the Olympics; the government first reports about 20–28 dead, later estimates run to hundreds, and archival work by Kate Doyle documented at least 44 by name", "1970–76 — Echeverría: the 'Halconazo' of 10 June 1971; the Dirty War; public spending nearly quadruples in 1971–75 and external debt rises from about $6 billion to $20 billion; the peso is devalued 59% in August 1976", "1977 — Reyes Heroles's electoral reform: proportional-representation seats and easier registration for opposition parties", "1982 — debt default, banks nationalised, Miguel de la Madrid becomes the first technocrat president; state enterprises fall from about 1,155 to 412 by 1988", "1985 — the earthquake response damages the government's standing", "1986 — Chihuahua governorship: alleged fraud against Francisco Barrio of the PAN", "1987 — the Democratic Current under Cuauhtémoc Cárdenas and Muñoz Ledo, refused an open candidate selection, leaves the party"],
        rot: { graft: 60, capture: 60, closure: 60, suppression: 70, feedback: 65, sclerosis: 60, succession: 45 }, leakage: 70, reversibility: 35 },
      { name: "Technocrats, privatisation and the opening", from: 1988, to: 2000,
        summary: "A contested count in 1988 brings the technocrats to the presidency; Salinas sells the state's assets and builds the institutions that will later count votes honestly; 1994 shocks the party and Zedillo, who hands the count to citizens, loses the presidency.",
        events: ["1988 — Salinas is declared winner (officially about 50.7%; Cárdenas about 31%): the count halts on election night, the 'system crashed', and the results are widely regarded as fraudulent; the ballots were destroyed in 1991 by agreement of the PRI and PAN, so no full recount is possible", "1989 — Ernesto Ruffo (PAN) takes Baja California, the first non-PRI governor since 1929", "1990 — the Federal Electoral Institute (IFE) is created (11 October); Telmex sold to a group led by Carlos Slim with SBC and France Télécom; banks reprivatised 1991–92", "1994 — NAFTA and the Zapatista uprising on 1 January; Colosio assassinated in March and party secretary-general Ruiz Massieu in September; the peso is devalued in December and the Fobaproa bank rescue follows", "1996 — reform cuts the executive out of the IFE, leaving voting power with citizen councillors; Mexico City's mayor becomes elective", "1997 — the PRI loses its Chamber majority for the first time (239 of 500 seats, 39%); Cuauhtémoc Cárdenas wins Mexico City", "1999 — open presidential primary: Labastida 58%, Madrazo 31%", "2000 — Vicente Fox wins with about 43%; Zedillo acknowledges the result on television the same night"],
        rot: { graft: 75, capture: 80, closure: 55, suppression: 45, feedback: 60, sclerosis: 50, succession: 80 }, leakage: 80, reversibility: 55 },
      { name: "Opposition, return and collapse", from: 2000, to: 2026,
        summary: "Out of the presidency, the party keeps the governorships and returns in 2012 under Peña Nieto; a run of scandals and the collapse of 2018 follow. It ends this period holding two states and a fraction of its old membership, in alliances it does not control.",
        events: ["2012 — Peña Nieto wins with about 38%; the Pact for Mexico; the 2013 energy reform opens oil fields to foreign investment for the first time in 75 years", "2012 — allegations that the party bought votes with Soriana store cards, which it denied", "2014 — Iguala, 26 September: 43 students disappear; the January 2015 'historic truth' is rejected by international experts as scientifically impossible; Iguala's mayor was of the PRD, but the federal handling was the PRI government's; a November exposé reveals a roughly $7 million house registered to a company linked to the contractor Grupo Higa", "2016–21 — governors' cases: Javier Duarte of Veracruz pleads guilty to money laundering and criminal association (nine years); Roberto Borge of Quintana Roo arrested in Panama in 2017; Tomás Yarrington of Tamaulipas arrested in Italy in 2017, later pleads guilty in the US to a money-laundering charge. Pemex's former chief Emilio Lozoya is accused of taking Odebrecht bribes and is not convicted", "2018 — Meade third with about 16%, the party's worst presidential result; Peña Nieto's approval had fallen to about 12% in 2017", "2019 — Alejandro Moreno becomes party president; 2021 — 'Va por México' with the PAN and PRD, PRI wins 70 seats; 2022 — Hidalgo and Oaxaca lost; 2023 — Estado de México lost", "2024 — the PRI-PAN-PRD ticket loses to Sheinbaum 61% to 28%; the PRI wins 35 deputies on about 11.6%; Moreno re-elected party president and becomes a senator", "2025 — the PAN announces an end to its national alliance with the PRI (October), which the PRI disputes", "2026 — in June the PRI-led coalition wins all 16 district seats in Coahuila; in September the party holds two governorships (Coahuila, Durango)"],
        rot: { graft: 70, capture: 55, closure: 50, suppression: 30, feedback: 55, sclerosis: 60, succession: 55 }, leakage: 50, reversibility: 80 }
    ],
    money: {
      inflows: [
        { label: "The state's budget, oil and enterprises", note: "Pemex, public companies, federal transfers — the hegemonic era's fuel", w: 5 },
        { label: "Sector funds and affiliation", note: "union dues and ejido, peasant and popular-sector networks", w: 2 },
        { label: "Privatisation and business ties", note: "Telmex, the banks and the contractors of the Salinas and Peña Nieto years", w: 3 },
        { label: "State governments' discretionary budgets", note: "the ex-governors' cases", w: 3 }
      ],
      outflows: [
        { label: "Land, credit, jobs and licences through the sectors", note: "ejidos, union posts, subsidies, withdrawn from places that voted wrong", w: 4 },
        { label: "The rotation of offices every six years", note: "the currency of the ladder", w: 4 },
        { label: "The electoral machine", note: "sector mobilisation, later store cards and alleged vote buying", w: 3 },
        { label: "Personal enrichment by officials", note: "from Alemán's circle to the governors' shell companies", w: 3 }
      ]
    },
    ladder: [
      { stage: "A sector or a patron", text: "Enter through a union, an ejido or the popular sector, or attach yourself to a rising politician's personal network." },
      { stage: "The clock", text: "Wait: deputies and senators could not succeed themselves until 2018, so posts came around every three or six years." },
      { stage: "Local and state office", text: "A municipal presidency, a congressional seat, a state post — allocated by the party's leaders, not by the district." },
      { stage: "The governorship", text: "The main prize below the presidency; the governor's budget was the local party's chief resource." },
      { stage: "The cabinet", text: "A place beside the president; from the 1980s, increasingly reached through an economics degree." },
      { stage: "The dedazo", text: "The outgoing president chooses the candidate; from 1999, the party holds a primary." }
    ],
    books: ["magaloni-voting", "greene-why-dominant", "gillingham-unrevolutionary", "langston-democratization", "castaneda-perpetuating", "krauze-mexico-biography", "collier-shaping-arena", "trejo-ley-votes", "babb-managing-mexico"],
    reading: ["Kate Doyle's archival work on the 1968 Tlatelolco killings (National Security Archive)", "Mario Vargas Llosa's 'perfect dictatorship' remark, Mexico City, 30 August 1990"]
  },

  // ================================================================
  drp: {
    verdict: {
      held: "A party built inside the junta, with the KCIA, to turn a coup into an election win — then kept as the legislative wing of a presidency whose real levers were the Blue House, the intelligence agency and a small group of economic technocrats.",
      worked: "Not as a party but as a fence: it gave Park a civilian face and an assembly majority while growth — about 10% a year in real terms over 1962–79 on World Bank figures — was delivered by the Economic Planning Board, the banks and the export drive, all outside it.",
      rotted: "Most of the rot sat in the state around the party rather than in it: KCIA suppression, business money extracted through the finance chairman, and a Yushin order that made party competition optional. It was undone not by voters but by an assassination — and the party, never the source of Park's power, went down with the regime."
    },
    glue: {
      ladder: "Short and personal. The first cohort came from the junta, the officer corps and the KCIA, with academics and officials added; older politicians were barred from organising. After 1963 a party career meant a safe district — above all in Park's south-east — or, after 1972, one of the seats Park nominated. The ceiling was low, because cabinet, governorships and the Blue House were staffed by officers, technocrats and agency men. Kim Jong-pil, the party's ablest organiser, was premier from 1971 to 1975 as Park's appointee and was checked repeatedly: out of the party chair in 1964, and in 1971 his allies were punished for a revolt in the assembly.",
      money: "Business paid, and was paid. The finance chairman, Kim Sung-kon of the Ssangyong group, pressed Gulf Oil for contributions; its chairman told a US Senate subcommittee in 1975 that it had paid $1 million in 1966 and $3 million in 1970 (Kim had asked for $10 million). Exporters, for their part, got low-interest bank credit, import privileges, foreign-borrowing rights and tax benefits from a state that controlled the banks; the 1961 arrests of 'illicit' businessmen mostly ended in fines, which set the terms — the state could ruin a firm, so firms bought insurance. The reverse flow, funds for the party, is poorly documented and mostly known from later testimony and memoirs. The 1965 settlement with Japan (about $300 million in grants and $200 million in loans) went largely into steel, dams and roads; whether any of it fed political funds is contested.",
      structure: "A presidential party. Park became its president in 1963, and policy was made in the Blue House and the Economic Planning Board — set up in 1961, headed by a deputy prime minister — with the party ratifying it: the reverse of the PAP's fusion of cabinet and party. Beneath Park it was a coalition of blocs (Kim Jong-pil's group, rival ex-officers, civilian politicians) that he balanced against one another and disciplined from outside. Dozens of members were reportedly punished after a censure vote on a minister in April 1969 (the numbers and the sequence are contested), and in October 1971 allies of Kim Jong-pil who voted with the opposition to dismiss the home minister were, by several accounts, beaten by security men. After 1972 the party was doubled by the Yujeonghoe, the third of the assembly Park nominated.",
      society: "Thin. It never became a mass organisation on the KMT or PRI model. Its reach below the district came through the state — governors, county heads and, from 1971, the government's Saemaul movement — and the base was regional: the south-east for Park, the south-west and Seoul for the opposition. Farmers were squeezed by low grain prices until the policy turned in 1971.",
      threat: "North Korea, and the memory of the students who toppled Syngman Rhee in 1960 and the civilian government that followed, which the junta had overthrown in 1961 on the argument that it could neither keep order nor build an economy. Each tightening — the 1971 emergency, the 1972 martial law, the 1974–75 emergency decrees — was justified by an alleged northern threat.",
      succession: "None. Yushin lifted the limit on terms, and the party had no means of choosing another leader; the two men who might have counted — Kim Jong-pil, repeatedly checked, and the KCIA director Kim Jae-gyu — sat under a presidential security chief, Cha Ji-chul, who outranked both in Park's confidence. When Kim Jae-gyu shot Park and Cha on 26 October 1979 the party had only a nominal existence, the Yushin assembly was a rubber stamp, and the army, not the party, settled what came next."
    },
    engine: {
      policy: { score: 60, text: "The state's capacity was very high — export incentives, five-year plans, the heavy and chemical drive — but it sat in the Economic Planning Board, the Blue House and the banks, not in the party. The organisation delivered seats, not policy." },
      adapt: { score: 30, text: "It changed its rules rather than itself: a third-term amendment in 1969, Yushin in 1972. After the 1978 election it had no answer but emergency decrees and the expulsion of an opposition leader; the call for 'rectification' after Park's death came too late." },
      feedback: { score: 35, text: "Real if tilted elections until 1971 — Park won only 53.2% against Kim Dae-jung — told the regime the truth. Yushin shut that channel, and when the message came back in 1978 the ruling party trailed the opposition in the popular vote and the reply was repression. Cha and Kim Jae-gyu split on how to treat the Busan protests, and one of them shot the other." },
      bargain: { score: 65, text: "Growth, exports and jobs, with a patronage edge: credit and licences for favoured firms, the south-east as heartland, and farmers and workers paying for it in the early years." }
    },
    phases: [
      { name: "Built inside the junta", from: 1961, to: 1963,
        summary: "A party assembled inside a military government, from the KCIA and the officer corps, to give the coup an electoral cloak — after Park said he would stay out of civilian politics, proposed extending military rule by referendum, and dropped the plan under domestic and American pressure.",
        events: ["June 1961 — the KCIA is created under Kim Jong-pil, weeks after the 16 May coup", "1961 — the Economic Planning Board is established; the first Five-Year Plan (1962–66) follows", "1961–62 — Kim Jong-pil is said to organise a covert pre-party from inside the agency while former politicians are barred from organising; how far the KCIA, rather than the junta's wider circle, built it is contested", "December 1962 — the presidential constitution is approved in a referendum with a reported 78.8%", "26 February 1963 — the DRP is founded; Kim Jong-pil steps back and goes abroad, by most accounts under pressure from rival officers", "15 October 1963 — Park, retired from the army, beats Yun Po-sun 46.6% to 45.1%, a margin of about 156,000 votes", "26 November 1963 — the DRP wins 110 of 175 seats on about a third of the vote"],
        rot: { graft: 55, capture: 40, closure: 35, suppression: 65, feedback: 45, sclerosis: 5, succession: 50 }, leakage: 40, reversibility: 55 },
      { name: "The developmental bargain", from: 1963, to: 1969,
        summary: "Civilian rule under a strong president: the party held the assembly, the Economic Planning Board ran the plans, and exports, Japanese money and the Vietnam deployment paid for the bargain, while the KCIA and the police set the limits of dissent.",
        events: ["1963–64 — Kim Jong-pil, elected to the assembly, is party chairman from December 1963 and resigns the chair in February 1964 amid internal conflict", "1964–65 — student protests against the talks with Japan; the treaty is signed on 22 June 1965", "1965 onward — combat troops are sent to Vietnam", "1966 — Gulf Oil pays $1 million to the party (later disclosed in Senate testimony)", "1967 — Park is re-elected with 51.4% to Yun Po-sun's 40.9%; the DRP wins 129 of 175 seats", "Under the first two plans manufacturing is reported to grow by 15% and 21%"],
        rot: { graft: 55, capture: 55, closure: 40, suppression: 45, feedback: 40, sclerosis: 15, succession: 55 }, leakage: 50, reversibility: 55 },
      { name: "The third term", from: 1969, to: 1972,
        summary: "The party amends the constitution so Park can run a third time, Park nearly loses to Kim Dae-jung, and the party's own factions are broken to keep it loyal — a run that ends in a declared emergency.",
        events: ["April 1969 — after a censure vote on a minister in which some DRP members defy the leadership, Park disciplines dozens of members; sources differ on the count and on what the dissent was over", "1969 — the DRP-controlled assembly amends the constitution to allow a third consecutive term (proposed on 7 August; promulgated on 21 October after a referendum; protests run from June to December)", "27 April 1971 — Park beats Kim Dae-jung 53.2% to 45.3%; in May the DRP wins 113 of 204 seats", "June 1971 — Kim Jong-pil becomes prime minister", "October 1971 — allies of Kim Jong-pil vote with the opposition to dismiss the home minister and are punished; by several accounts they were beaten (contested in detail)", "December 1971 — Park proclaims a national emergency and gets a law giving him sweeping powers over the economy, the press and public life"],
        rot: { graft: 60, capture: 60, closure: 45, suppression: 60, feedback: 50, sclerosis: 20, succession: 65 }, leakage: 60, reversibility: 45 },
      { name: "Yushin", from: 1972, to: 1979,
        summary: "Park suspended the constitution and wrote himself an unlimited presidency. The DRP kept its seats but shared the assembly with a third Park nominated himself; the KCIA, emergency decrees and the courts did the work elections had done, until the opposition finished ahead in the popular vote in 1978.",
        events: ["17 October 1972 — martial law; the assembly dissolved, universities closed, the press censored", "21 November 1972 — the Yushin constitution is approved in a referendum with a reported 92.3%; in December the National Conference for Unification elects Park with 2,357 of 2,359 votes", "1973 — the DRP wins 73 of 146 elected seats; the heavy and chemical industry drive begins", "August 1973 — KCIA agents abduct Kim Dae-jung from a Tokyo hotel; Korea's intelligence service concluded in 2007 that Park gave at least tacit backing", "January 1974 — Emergency Decree No. 1 outlaws campaigns to revise the constitution; May 1975 — Emergency Measure No. 9 makes criticism of it a crime", "April 1975 — eight men are hanged in the People's Revolutionary Party case within about a day of the Supreme Court ruling; a Seoul court acquitted them posthumously in 2007", "December 1978 — the opposition New Democratic Party finishes ahead of the DRP in the popular vote; the DRP still wins more seats (68 to 61) and Park's nominees fill a further 77"],
        rot: { graft: 55, capture: 70, closure: 55, suppression: 90, feedback: 70, sclerosis: 40, succession: 85 }, leakage: 85, reversibility: 15 },
      { name: "Assassination and dissolution", from: 1979, to: 1980,
        summary: "The system had no escape valve. Park was shot by his own intelligence chief; a party with only a nominal existence was handed to Kim Jong-pil, then dissolved by the officers who inherited the state.",
        events: ["August 1979 — about 1,000 riot police break up the YH Company women workers' sit-in at the opposition headquarters; one worker dies", "4 October 1979 — the assembly, under DRP control, expels the opposition leader Kim Young-sam; all opposition members resign on 13 October", "16–20 October 1979 — the Busan–Masan uprising; martial law in Busan on 18 October and a garrison decree in Masan on 20 October", "26 October 1979 — Kim Jae-gyu shoots Park and Cha Ji-chul; the motives are contested — a quarrel over how to answer the protests, rivalry with Cha, or a planned coup; he is hanged in May 1980", "November 1979 — Kim Jong-pil becomes DRP president; 12 December — Chun Doo-hwan takes control of the army", "17 May 1980 — martial law is extended nationwide; Kim Jong-pil is arrested and forced to surrender his wealth", "27 October 1980 — the DRP is dissolved with every other party, under a clause of the new constitution (approved on 22 October by a reported 91.6%)", "15 January 1981 — Chun founds the Democratic Justice Party, which takes in many former DRP politicians; how much organisational continuity that represents is contested. By merger and rename it leads to the Democratic Liberal Party (1990), the Grand National Party (1997), Saenuri (2012), the Liberty Korea Party (2017) and the People Power Party (2020)"],
        rot: { graft: 50, capture: 60, closure: 55, suppression: 75, feedback: 75, sclerosis: 50, succession: 95 }, leakage: 65, reversibility: 30 }
    ],
    money: {
      inflows: [
        { label: "Export credit and licences, repaid as funds", note: "the bargain at the centre of the money — mechanics poorly documented", w: 4 },
        { label: "Business contributions", note: "solicited through the finance chairman; Gulf Oil's $1 million (1966) and $3 million (1970) are the documented tip", w: 3 },
        { label: "Japanese and American money to the state", note: "the 1965 settlement, Vietnam-era earnings — reaching the party, if at all, only through the state", w: 3 }
      ],
      outflows: [
        { label: "Growth policy: the Planning Board, banks and exporters", note: "the state's spending, not the party's", w: 5 },
        { label: "Heavy-industry rents to favoured firms", note: "steel, shipbuilding, machinery — and a rising concentration of market power in the chaebol", w: 3 },
        { label: "The KCIA and the security services", note: "surveillance, detention and the machinery of suppression", w: 3 },
        { label: "Campaigns and district machinery", note: "the 1963 vote had reported irregularities; the detail of the later elections is contested", w: 2 }
      ]
    },
    ladder: [
      { stage: "Recruited", text: "Ex-officers, KCIA staff, academics and officials brought in as the party was formed in 1962–63; older politicians were barred from organising." },
      { stage: "A safe district", text: "A seat in the south-east, where Park took 64% and 68.6% in North and South Gyeongsang in 1967, or one of the 44 proportional seats in 1963 and 1967." },
      { stage: "Party office", text: "Finance chairman, secretary or faction leader — posts that carried money and, in the 1960s, real influence." },
      { stage: "Cabinet or the KCIA", text: "The real ladder ran through the government: cabinet, governorships, the Blue House staff. The KCIA director and the presidential security chief outranked most party figures." },
      { stage: "The Yujeonghoe", text: "After 1972, a nominated seat, confirmed by the National Conference for Unification, instead of an election for a third of the assembly." },
      { stage: "The top", text: "Only Park, until 1979. The party's organiser Kim Jong-pil was premier from 1971 to 1975 and party president only after Park was dead." }
    ],
    books: ["kohli-state-directed", "amsden-asias-next-giant", "woo-race-to-the-swift", "eckert-park-chung-hee", "kim-vogel-park-era", "kim-hyunga-korea-development", "eunmee-kim-big-business", "slater-wong-development"],
    reading: ["Hyung-A Kim & Clark W. Sorensen (eds), Reassessing the Park Chung Hee Era, 1961–1979 (2011)", "Stephan Haggard, Pathways from the Periphery (1990)", "U.S. Library of Congress, South Korea: A Country Study (1990)"]
  },
};
