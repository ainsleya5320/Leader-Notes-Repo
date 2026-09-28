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
        summary: "Still dominant, but challenged: the first GRC lost in 2011, a minister jailed in 2024 for taking gifts and obstructing justice, new laws on online falsehoods and foreign interference, and a managed handover to Lawrence Wong.",
        events: ["2011 — vote share 60%; Aljunied GRC lost to the Workers' Party; ministers dropped; pay cut in 2012", "2019 — online falsehoods law (POFMA); 2021 — foreign interference law", "2020 — vote share 61%; Sengkang GRC lost", "2023–24 — Transport Minister S. Iswaran charged; in 2024 convicted of obtaining gifts as a public servant and obstructing justice, and jailed; the Speaker resigns over an affair", "2024 — Lawrence Wong becomes prime minister; 2025 — the PAP wins about two-thirds of the vote"],
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
      rotted: "High graft and capture — among the most expensive politics in any democracy, with a closed hereditary class at the top — but democratic and reversible: voters removed it twice and prosecutors broke its factions."
    },
    glue: {
      ladder: "Inherited more than earned. Roughly a third of LDP Diet members have been hereditary, carrying the 'three bans': jiban (the support base), kanban (the name) and kaban (the bag of money). The rest came as former bureaucrats, prefectural politicians or Diet members' secretaries. Advancement ran through the factions by seniority — in the classic era a first cabinet post came after about five or six terms, allocated by faction quota.",
      money: "Expensive politics. Personal support organisations cost fortunes to maintain — weddings, funerals, constituency trips — and factions raised money through ticketed fundraising parties and paid it out to members; that dependence was the factions' power. Corporate money flowed in return for public works, regulation and protection. The 1994 reform added public subsidies of ¥250 per citizen a year and restricted corporate donations, but the fundraising parties continued, and the 2023–24 kickback scandal was their unreported surplus.",
      structure: "A party of parties. Five or six factions (habatsu), each with its own boss, money and quota of posts, bargained over the party presidency and therefore the premiership. Policy ran through the Policy Research Council, where members of 'policy tribes' (zoku) pre-screened every bill before cabinet saw it.",
      society: "The kōenkai tied voters to individual politicians rather than to the party. Organised interests tied themselves to the party: the agricultural cooperatives (JA), construction, small business, doctors, the postmasters' network, religious groups. The bureaucracy, whose senior retirees moved into corporate posts (amakudari), completed the 'iron triangle'.",
      threat: "Formed in 1955, with business pressing the conservatives to merge against a newly reunited Socialist Party; the Cold War and the U.S. alliance made it the only acceptable government. When the threat faded after 1989, discipline faded with it.",
      succession: "Faction bargaining produced orderly transfers and short tenures. The party president — and so the prime minister — is chosen by Diet members and party members, so premierships rose and fell with faction alignments; two-year terms were the norm, and Satō, Nakasone, Koizumi and Abe the exceptions."
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
        summary: "Koizumi ran against his own party and purged its postal rebels; then six prime ministers in six years, three of them hereditary, and defeat in 2009.",
        events: ["2001 — Koizumi promises to 'destroy the LDP'", "2005 — snap election on postal privatisation; rebels denied endorsement", "2006–09 — Abe, Fukuda, Asō: a year each", "2009 — loses power to the Democratic Party of Japan"],
        rot: { graft: 45, capture: 60, closure: 70, suppression: 15, feedback: 45, sclerosis: 60, succession: 75 }, leakage: 60, reversibility: 85 },
      { name: "The Kantei era and the slush funds", from: 2012, to: 2026,
        summary: "Abe's return centralised power in the prime minister's office; bureaucratic deference produced falsified records; then the faction kickback scandal broke the factions and the party lost its majority.",
        events: ["2014 — Cabinet Bureau of Personnel Affairs gives the Kantei control of senior appointments", "2017–18 — Moritomo and Kake scandals; Finance Ministry documents altered", "2022 — Abe assassinated; the party's ties to the Unification Church exposed", "2023–24 — faction fundraising kickback scandal; most factions dissolve", "2024 — loses its lower-house majority; 2025 — Komeito ends a 26-year coalition"],
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
      money: "Party capitalism and state rents. From the 1970s UMNO held a corporate empire directly — Fleet Holdings, later Renong and associated companies — and the New Economic Policy's allocation of licences, contracts, shares and privatised utilities to Malay businessmen, often party figures or their proxies, built a patronage economy. Under Najib, 1MDB turned the pattern into direct theft.",
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
        events: ["1969 — election setback, the 13 May riots, emergency rule", "1971 — New Economic Policy; Sedition Act amended to bar questioning Malay privileges", "1973–74 — Barisan Nasional absorbs former opposition parties"],
        rot: { graft: 40, capture: 50, closure: 45, suppression: 70, feedback: 50, sclerosis: 40, succession: 30 }, leakage: 65, reversibility: 30 },
      { name: "Mahathir: money politics and the executive state", from: 1981, to: 2003,
        summary: "Privatisation to party-linked businessmen, a party split and refounding, the humbling of the judiciary, and the sacking and jailing of the deputy prime minister.",
        events: ["1987 — the Team A–Team B split; Operation Lalang detains 106", "1988 — UMNO declared unlawful by the High Court; refounded as 'UMNO Baru'; the Lord President removed", "1990s — privatised utilities and contracts to party-linked tycoons", "1998 — Anwar Ibrahim sacked and jailed; the reformasi protests"],
        rot: { graft: 75, capture: 80, closure: 55, suppression: 80, feedback: 70, sclerosis: 60, succession: 60 }, leakage: 85, reversibility: 25 },
      { name: "Erosion and 1MDB", from: 2003, to: 2018,
        summary: "Electoral erosion, then theft on a sovereign scale: 1MDB, the sacking of those who investigated it, and a lost popular vote held off by malapportionment — until 2018.",
        events: ["2008 — loses its two-thirds majority", "2009 — 1MDB founded under Najib Razak", "2013 — loses the popular vote but keeps power through malapportioned seats", "2015 — hundreds of millions of dollars reported in Najib's accounts; the attorney-general and deputy prime minister removed", "2018 — loses federal power for the first time since independence"],
        rot: { graft: 95, capture: 80, closure: 60, suppression: 70, feedback: 85, sclerosis: 75, succession: 55 }, leakage: 90, reversibility: 45 },
      { name: "Out, back and diminished", from: 2018, to: 2026,
        summary: "Removed by voters, returned through elite realignment, and reduced to a junior partner — with its former leader convicted and its current leader's charges dropped.",
        events: ["2020 — Najib convicted in the SRC International case; jailed in 2022", "2020 — back in government after the 'Sheraton Move'; 2021–22 — Ismail Sabri prime minister", "2022 — Barisan Nasional wins only 30 seats; joins Anwar's unity government", "2023 — charges against party president Zahid Hamidi discharged; 2024 — Najib's sentence halved"],
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
      held: "Anti-communism, a Leninist apparatus copied from the Soviets, and — on Taiwan — control of an entire society's organisations and one of the largest party fortunes in the world.",
      worked: "Not on the mainland, where it reached neither the villages nor the inflation. Spectacularly on Taiwan, where land reform, technocrats and export growth built an economic miracle — and where it then gave up its monopoly while it could still win elections.",
      rotted: "Two different rots. On the mainland, graft and a collapse of feedback that cost it China; on Taiwan, martial-law suppression and a party fortune built from state assets — the second reversed, in the end, by the party's own decision to democratise."
    },
    glue: {
      ladder: "Two ladders. At the centre, the Whampoa military academy, party schools and — on Taiwan — the Revolutionary Practice Institute trained a mainlander cadre that monopolised national office for decades. Taiwanese rose separately, through local elections the party sponsored. From 1952 Chiang Ching-kuo's China Youth Corps recruited a new generation, and from the 1970s he deliberately promoted Taiwanese technocrats — Lee Teng-hui among them — in what became 'Taiwanisation'.",
      money: "Reputedly the richest party in the world. On Taiwan it took over Japanese-era enterprises and property, ran party-owned businesses in media, finance and industry, and drew state subsidies — assets that a government committee began seizing as 'ill-gotten' in 2016. On the mainland, finance ran through the Soong and Kung families and the state banks, and the wartime inflation and the 1948 gold yuan destroyed the savings of the class that might have supported it.",
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
        events: ["1949 — martial law declared (it would last 38 years)", "1950–52 — the party reform; the Revolutionary Practice Institute", "1949–53 — land reform: 'land to the tiller'", "1950 onward — local elections co-opt Taiwanese factions", "1950s–60s — the White Terror; American aid until 1965"],
        rot: { graft: 40, capture: 50, closure: 65, suppression: 90, feedback: 60, sclerosis: 45, succession: 45 }, leakage: 90, reversibility: 10 },
      { name: "Taiwanisation and democratisation from strength", from: 1975, to: 2000,
        summary: "Chiang Ching-kuo opened the party to Taiwanese, tolerated an opposition and lifted martial law; Lee Teng-hui carried democratisation through — while 'black gold' ties between local factions and organised crime grew.",
        events: ["1978 — Chiang Ching-kuo becomes president", "1979 — the Kaohsiung Incident; opposition leaders tried", "1986 — the Democratic Progressive Party founded and tolerated", "1987 — martial law lifted; 1988 — Lee Teng-hui succeeds", "1991 — the legislators elected on the mainland retire; 1996 — first direct presidential election, won by Lee"],
        rot: { graft: 60, capture: 60, closure: 45, suppression: 45, feedback: 45, sclerosis: 50, succession: 35 }, leakage: 70, reversibility: 50 },
      { name: "A party among parties", from: 2000, to: 2026,
        summary: "Out of power, back in power, out again — and made to account for its fortune: an ordinary competitive party with an unusual past.",
        events: ["2000 — loses the presidency after a split", "2008–16 — Ma Ying-jeou in office", "2014 — the Sunflower Movement against a trade pact with China", "2016 — the Ill-gotten Party Assets committee begins freezing and seizing party assets", "2024 — wins the most legislative seats but loses the presidency again"],
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
        summary: "The regime's vehicle reinvented itself as a party, lost the first free election narrowly and won the second.",
        events: ["1998–99 — B. J. Habibie, a Golkar president, oversees the transition", "1999 — second place with 22%", "2002 — chairman Akbar Tandjung convicted over state logistics funds; acquitted on appeal in 2004", "2004 — first place in the legislative election"],
        rot: { graft: 70, capture: 60, closure: 50, suppression: 20, feedback: 50, sclerosis: 60, succession: 45 }, leakage: 55, reversibility: 70 },
      { name: "The party of every government", from: 2004, to: 2026,
        summary: "A party that no longer needs to win the presidency to share power — joining almost every coalition, with its leaders' business empires and a steady line of corruption cases.",
        events: ["2004–09 — chairman Jusuf Kalla serves as vice-president", "2016 — joins President Jokowi's coalition, having backed his rival in 2014", "2018 — former chairman and parliamentary speaker Setya Novanto jailed for fifteen years over the e-ID card scandal", "2024 — joins the Prabowo government"],
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
  }
};
