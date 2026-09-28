// ============================================================
// PATRONAGE — a deep dive on 21st-century patronage systems
// ============================================================
// Three layers:
//   PAT_CONCEPTS  — a precise vocabulary (the literature's distinctions matter)
//   PAT_DEBATES   — the questions the research is still arguing about
//   PAT_CASES     — fourteen systems, each with mechanics, brokers, targeting,
//                   what particular studies found, the nuance, and the trajectory
// Case placement (0–100, my estimates):
//   scale     retail (individual voters) → wholesale (firms, elites, whole sectors)
//   centre    party-centred networks → candidate- or leader-centred networks
//   coercion  inducements only → threats, conditionality, violence
// ============================================================

window.PAT_CONCEPTS = [
  { key: "patronage", name: "Patronage", def: "Politicians' discretionary allocation of public jobs, contracts and resources to supporters.", distinct: "Defined by the resource (the state's) and the discretion, not by elections — a minister appointing loyalists to agency boards is patronage even if no vote is bought." },
  { key: "clientelism", name: "Clientelism", def: "An exchange of benefits for political support between unequal parties, where the benefit is contingent on the support.", distinct: "Contingency is the defining feature: the benefit can be withdrawn from those who do not deliver. Allen Hicken adds hierarchy and iteration — patron and client meet again." },
  { key: "votebuying", name: "Vote, turnout and abstention buying", def: "Payments at election time: to change a vote, to get a supporter to the polls, or to keep an opponent's supporter at home.", distinct: "Nichter showed much of what looks like vote buying is turnout buying — rewarding people who would vote for you anyway for actually showing up." },
  { key: "relational", name: "Relational clientelism", def: "An ongoing exchange that runs between elections — help with water, medicine, documents, jobs — sustained by declared loyalty.", distinct: "The relationship, not the election-day payment, is the unit. Clients seek it out as insurance against shocks." },
  { key: "pork", name: "Pork barrel", def: "Projects and spending steered to a district or group, not contingent on any individual's vote.", distinct: "Targeted but not contingent: everyone in the district gets the road, however they voted." },
  { key: "programmatic", name: "Programmatic distribution", def: "Benefits allocated by public, rules-based criteria that the politician cannot bend for supporters.", distinct: "Can still reward incumbents electorally — voters thank the government for a pension — without being clientelist, because nobody loses the benefit for voting wrong." },
  { key: "brokers", name: "Brokers", def: "Intermediaries who know voters personally, distribute benefits and report on behaviour.", distinct: "They solve the party's information problem and create an agency problem: brokers have interests of their own." },
  { key: "coercion", name: "Negative inducements", def: "Threats to withdraw welfare, jobs or services — or worse — from those who fail to support.", distinct: "Mares and Young find threats are often cheaper and more effective than rewards, because they cost nothing when they work." },
  { key: "capture", name: "State capture and wholesale patronage", def: "Networks shaping laws, procurement and state firms to extract rents at scale.", distinct: "Wholesale rather than retail: the currency is a contract, a licence or a state company, and the client is a firm or an oligarch, not a voter." },
  { key: "neopatrimonialism", name: "Neopatrimonialism", def: "A state with rational-legal forms — ministries, laws, elections — run on personal loyalty to a ruler.", distinct: "Bratton and van de Walle's term for much of post-colonial Africa; the forms are real, which is why the patronage is hard to see from outside." }
];

window.PAT_DEBATES = [
  { key: "enforcement", q: "With a secret ballot, how does a patron enforce the deal?",
    answers: [
      { view: "Monitoring through brokers and small electorates", who: "Larreguy, Marshall & Querubín (Mexico); Stokes et al.", cases: ["mexico", "argentina"] },
      { view: "Reciprocity and norms — clients feel obliged", who: "Auyero; Finan & Schechter", cases: ["argentina"] },
      { view: "Self-interest: jobholders campaign to keep their jobs", who: "Oliveros", cases: ["argentina"] },
      { view: "Community-level rewards and punishments", who: "Aspinall & Berenschot", cases: ["indonesia"] },
      { view: "Threats rather than promises", who: "Mares & Young; Frye, Reuter & Szakonyi", cases: ["hungary", "russia"] },
      { view: "It often isn't enforced at all — the payment is a signal", who: "Kramon; Muñoz; Hicken & Nathan", cases: ["kenya", "indonesia"] }
    ] },
  { key: "targeting", q: "Who gets targeted — core supporters or swing voters?",
    answers: [
      { view: "Swing or weakly opposed voters, where money changes votes", who: "Stokes (2005)", cases: [] },
      { view: "Core supporters, to get them to the polls", who: "Nichter (2008); Cox & McCubbins", cases: ["argentina", "brazil"] },
      { view: "Loyalists — because brokers, not parties, choose", who: "Stokes, Dunning, Nazareno & Brusco (2013)", cases: ["argentina"] }
    ] },
  { key: "works", q: "Does electoral clientelism actually work?",
    answers: [
      { view: "Often not as bribery: many recipients vote as they would have anyway", who: "Hicken & Nathan (2020)", cases: ["indonesia", "kenya"] },
      { view: "It persists because every candidate fears being the one who didn't pay", who: "Aspinall & Berenschot", cases: ["indonesia", "philippines"] },
      { view: "It buys other things: turnout, rally audiences, credibility", who: "Nichter; Muñoz; Kramon", cases: ["kenya", "argentina"] }
    ] },
  { key: "demand", q: "Is it imposed from above or sought from below?",
    answers: [
      { view: "Demand-driven: vulnerable citizens seek patrons as insurance", who: "Nichter (2018)", cases: ["brazil"] },
      { view: "Experienced as problem-solving, not bribery", who: "Auyero (2001)", cases: ["argentina"] },
      { view: "Citizens work many channels — brokers are one", who: "Kruks-Wisner; Bussell", cases: ["india"] }
    ] },
  { key: "development", q: "Does economic development end it?",
    answers: [
      { view: "Yes, as votes get expensive and the middle class objects", who: "Kitschelt & Wilkinson; Weitz-Shapiro", cases: ["argentina"] },
      { view: "It changes form: retail vote buying gives way to wholesale capture", who: "Magyar; Hale; Pei", cases: ["hungary", "russia", "turkey", "china"] },
      { view: "In rich democracies it becomes a tool of control over the state", who: "Kopecký, Mair & Spirova", cases: ["richdemocracies"] }
    ] },
  { key: "programmes", q: "Can rules-based programmes replace it?",
    answers: [
      { view: "Conditional cash transfers cut contingency — and still reward incumbents, legitimately", who: "De La O; Zucco", cases: ["mexico", "brazil"] },
      { view: "Direct transfers remove the broker but can personalise the credit", who: "the 'new welfarism' debate in India; Morena's programmes", cases: ["india", "mexico"] },
      { view: "Public goods can undercut patrons directly — cisterns instead of water trucks", who: "Bobonis, Gertler, González-Navarro & Nichter (2022)", cases: ["brazil"] }
    ] },
  { key: "stability", q: "Is patronage a disease or a stabiliser?",
    answers: [
      { view: "In divided societies, sharing posts buys peace: Arriola finds cabinet expansion lowers coup risk; Francois, Rainer & Trebbi find cabinet posts shared roughly in proportion to ethnic group size", who: "Arriola (2009); Francois, Rainer & Trebbi (2015)", cases: ["kenya", "lebanon"] },
      { view: "The cost is capture, fiscal fragility and a state that cannot reform", who: "Cammett; Chipkin & Swilling", cases: ["lebanon", "southafrica"] }
    ] }
];

window.PAT_CASES = [
  { id: "argentina", country: "Argentina", title: "Peronist brokers and the politics of problem-solving", period: "2001–present",
    scale: 25, centre: 35, coercion: 30,
    summary: "The most closely studied patronage system in the world: neighbourhood brokers (punteros) in the Peronist networks of Greater Buenos Aires distribute food, places in work programmes and help with the state, and deliver votes and rally crowds in return.",
    how: "After the 2001–02 collapse, workfare and food programmes — Jefes y Jefas de Hogar, later Argentina Trabaja and Potenciar Trabajo — became the brokers' currency. The mayors (intendentes) of the Buenos Aires conurbation control distribution; punteros run neighbourhood base units; the piquetero movements became co-administrators of programmes, and brokers in their own right.",
    brokers: "Punteros, municipal employees, and the leaders of social movements who manage programme places.",
    targeting: "Mostly loyalists and the reliably poor — the people brokers already know and can count on.",
    evidence: [
      { study: "Stokes, Dunning, Nazareno & Brusco, Brokers, Voters, and Clientelism (2013)", finding: "Brokers target loyal voters and skim resources for their own ends; party leaders tolerate it because they cannot monitor them." },
      { study: "Szwarcberg, Mobilizing Poor Voters (2015)", finding: "Brokers compete to fill rally buses, because a full bus is how a broker proves capacity to the party." },
      { study: "Oliveros, Patronage at Work (2021)", finding: "Public employees hired through patronage campaign for incumbents without being told to, because their jobs depend on the incumbent surviving — clientelism that enforces itself." },
      { study: "Weitz-Shapiro, Curbing Clientelism in Argentina (2014)", finding: "Mayors facing competition curb clientelism where middle-class voters would punish it — and keep it where they would not." },
      { study: "Auyero, Poor People's Politics (2001)", finding: "For clients, the exchange is experienced as help, friendship and loyalty to Evita's memory — not as a bribe." }
    ],
    nuance: "This is a relationship, not a transaction. With a secret ballot, enforcement rests on reciprocity and self-interest rather than surveillance — and the system is limited less by law than by the middle class's disapproval.",
    trajectory: "In 2024 the Milei government moved to cut the social organisations out of welfare distribution — paying beneficiaries directly and auditing the movements that had managed programme places — a deliberate attempt to break the broker layer.",
    orgs: ["peronism"], leaders: [], books: ["auyero-poor", "stokes-brokers", "szwarcberg-mobilizing", "oliveros-patronage", "weitz-shapiro-curbing"] },

  { id: "mexico", country: "Mexico", title: "From the PRI's machine to rules-based transfers — and personal credit", period: "2000–present",
    scale: 40, centre: 60, coercion: 35,
    summary: "The PRI's corporatist machine lost the presidency in 2000, but the programmes that followed are the more interesting story: Progresa was designed to be immune to clientelism, and the Morena governments since 2018 built universal cash transfers delivered without intermediaries — and credited to the president.",
    how: "Progresa/Oportunidades (1997–2019) paid conditional cash by technocratic, means-tested rules with independent evaluation, while governors kept discretionary programmes and local vote buying continued — gift cards in the 2012 campaign drew national scandal. Morena replaced it with universal programmes such as the senior pension, paid directly into bank accounts and enrolled by a corps of government 'Servants of the Nation' whom critics tie to the ruling party.",
    brokers: "Historically the PRI's union and peasant sectors and local operators; now fewer intermediaries, but a state enrolment corps close to the governing party.",
    targeting: "Programmatic in rule; the political question is who gets the credit.",
    evidence: [
      { study: "De La O, Crafting Policies to End Poverty in Latin America (2015)", finding: "Early enrolment in Progresa raised turnout and support for the incumbent — rules-based transfers reward governments without making benefits contingent on votes; design decides whether a programme becomes clientelist." },
      { study: "Larreguy, Marshall & Querubín (APSR, 2016)", finding: "Parties' turnout buying works where they can monitor their brokers' performance at the polling-station level." },
      { study: "Magaloni, Voting for Autocracy (2006)", finding: "Under the PRI, voters supported the party for fear of losing transfers — a punishment regime." }
    ],
    nuance: "'Programmatic' is not the opposite of 'electorally useful.' The test is contingency — whether a benefit can be withdrawn from those who vote wrong. Morena's model removes the broker but personalises the credit, which the literature is still learning how to classify.",
    trajectory: "Universal, direct and presidential: a hybrid of programmatic delivery and personalist credit-claiming.",
    orgs: ["pri"], leaders: [], books: ["delao-crafting", "magaloni-voting"] },

  { id: "brazil", country: "Brazil", title: "Relational clientelism in the Northeast, and the Bolsa Família alternative", period: "2003–present",
    scale: 30, centre: 75, coercion: 20,
    summary: "Brazil runs two systems at once. Nationally, Bolsa Família delivers rules-based transfers to tens of millions with no broker in the way. Locally — above all in the semi-arid Northeast — mayors and councillors sustain long relationships of help, from water trucks to medicine, in exchange for declared support.",
    how: "Open-list proportional representation and weak parties push candidates to build personal networks of vote brokers (cabos eleitorais). Municipal elections are where most distribution happens; citizens display flags and stickers to declare loyalty; the exchange continues between elections.",
    brokers: "Cabos eleitorais, local councillors, municipal officials.",
    targeting: "Declared supporters — public declaration is how clients make their loyalty credible.",
    evidence: [
      { study: "Nichter, Votes for Survival (2018)", finding: "Relational clientelism is driven from below: citizens facing drought and health shocks seek patrons as insurance and declare support publicly to be credible clients." },
      { study: "Zucco (AJPS, 2013)", finding: "Conditional cash transfers produced electoral gains for incumbents — a programmatic, non-contingent payoff." },
      { study: "Hunter & Power (2007)", finding: "Bolsa Família helped realign Lula's support toward the poor Northeast in 2006." },
      { study: "Bobonis, Gertler, González-Navarro & Nichter (AER, 2022)", finding: "A randomised programme building household water cisterns in the semi-arid Northeast reduced citizens' requests for private help from politicians — lower vulnerability, less clientelism." }
    ],
    nuance: "Programmatic national welfare coexists with local clientelism rather than replacing it — and where public goods reach people directly, the patron loses leverage: in a randomised trial, household cisterns reduced dependence on the politicians who controlled the water trucks.",
    trajectory: "Infrastructure and national transfers erode the demand for patrons; local elections keep the supply.",
    orgs: ["pt"], leaders: ["lula"], books: ["nichter-votes"] },

  { id: "india", country: "India", title: "Patronage democracy — brokers, legislators and the new welfarism", period: "2000s–present",
    scale: 35, centre: 60, coercion: 20,
    summary: "Kanchan Chandra called India a 'patronage democracy': the state is the main source of jobs and services and officials have discretion over who gets them, so voters choose the party whose elites are likeliest to favour people like them. The 21st-century story is the rewiring of that system.",
    how: "Slum leaders and party workers broker water, electricity and documents; legislators hold daily open houses where citizens petition directly. Caste-based parties offered elite representation; the BJP recruited poor voters through the service organisations of the Sangh Parivar. Since 2014, direct benefit transfers through Aadhaar-linked bank accounts have paid for gas connections, toilets, housing and free grain — branded with the prime minister.",
    brokers: "Slum leaders, party workers, caste and community leaders — and, increasingly, none at all.",
    targeting: "Ethnic and caste communities historically; individual 'beneficiaries' under direct transfers.",
    evidence: [
      { study: "Chandra, Why Ethnic Parties Succeed (2004)", finding: "Voters in a patronage democracy count heads: they back parties where their group's elites are well represented, expecting favour." },
      { study: "Bussell, Clients and Constituents (2019)", finding: "Senior politicians personally provide individual help, often bypassing brokers — and with less partisan bias than the clientelism model predicts." },
      { study: "Auerbach, Demanding Development (2019)", finding: "Slums with dense, competitive party networks and slum leaders get more public goods — brokers as channels of development, not only of capture." },
      { study: "Thachil, Elite Parties, Poor Voters (2014)", finding: "An upper-caste party won poor voters not by transfers but by outsourcing social services to its movement's affiliates." }
    ],
    nuance: "The 'beneficiary' constituency built by direct transfers is neither classic clientelism — there is no contingent exchange and no broker — nor pure programmatic politics, because the benefit is branded to a leader. Scholars disagree whether it weakens local brokers or simply moves patronage up to the national level.",
    trajectory: "Centralised credit-claiming, copied by state governments running their own branded schemes.",
    orgs: ["congress", "bjp"], leaders: ["modi", "indira"], books: ["chandra-ethnic", "bussell-clients", "auerbach-demanding", "thachil-elite"] },

  { id: "indonesia", country: "Indonesia", title: "Candidate-centred clientelism and the 'dawn attack'", period: "2004–present",
    scale: 25, centre: 90, coercion: 15,
    summary: "Since open-list elections were adopted in 2009, Indonesian candidates compete as hard against their own party-mates as against other parties, and each builds a personal 'success team' of brokers to distribute cash, goods and village projects — the most candidate-centred patronage system among the large democracies.",
    how: "Success teams (tim sukses) are assembled from community leaders, religious figures and village heads; the 'dawn attack' (serangan fajar) delivers cash envelopes before polling; communities receive club goods such as mosque repairs and roads. Village funds, introduced in 2015, made village heads richer brokers; costly direct elections for regional heads leave winners with debts repaid through licences and contracts.",
    brokers: "Personal success teams — ad hoc, rented for the campaign, with loyalties that float.",
    targeting: "Communities as much as individuals, through leaders who can claim to speak for a village or congregation.",
    evidence: [
      { study: "Aspinall & Berenschot, Democracy for Sale (2019)", finding: "Networks are candidate-owned and temporary; brokers skim and defect; vote buying is widespread but often inefficient — candidates pay because their rivals do." },
      { study: "Berenschot & Aspinall (Democratization, 2020)", finding: "Comparing Indonesia with Argentina and India: whether networks are party- or candidate-centred, and how much discretion politicians have over state resources, decides the form patronage takes." }
    ],
    nuance: "Weak parties do not mean weak patronage; they mean personalised patronage. The high cost of campaigns ties electoral clientelism to corruption in office — the permit and the procurement contract repay the campaign.",
    trajectory: "Rising campaign costs, and an anti-corruption commission whose independence was curtailed by a 2019 revision of its law.",
    orgs: ["golkar"], leaders: [], books: ["aspinall-democracy-sale"] },

  { id: "philippines", country: "Philippines", title: "Dynasties, pork and the local boss", period: "2000s–present",
    scale: 45, centre: 90, coercion: 55,
    summary: "Weak parties and strong families: most legislators and governors belong to political dynasties, and national politics runs on bargains between the president and local bosses who deliver votes in exchange for discretionary funds.",
    how: "Congressional pork — the Priority Development Assistance Fund — gave legislators money to steer to projects; presidents controlled further discretionary funds; after each election, legislators switch to the new president's party. At the barangay level, leaders distribute cash; in some provinces, bosses keep private armies.",
    brokers: "Barangay captains and leaders (liders) working for the local family.",
    targeting: "Localities controlled by allied families.",
    evidence: [
      { study: "The PDAF scandal (2013)", finding: "Pork funds channelled through fake NGOs led to the Supreme Court declaring the fund unconstitutional in November 2013." },
      { study: "The Maguindanao massacre (2009)", finding: "58 people, 32 of them journalists, were killed by a ruling clan's men — the violent extreme of local bossism." },
      { study: "The flood-control scandal (2025)", finding: "Investigations found a handful of contractors had won a large share of a roughly ₱545 billion flood-control budget, with legislators' budget insertions and paid-for 'ghost' projects that were never built; mass protests in September led to an Independent Commission for Infrastructure." },
      { study: "Hicken, Aspinall & Weiss (eds.), Electoral Dynamics in the Philippines (2019)", finding: "Grassroots studies of how brokers, money and machines work in local contests." }
    ],
    nuance: "Pork survives its abolition: after 2013, discretionary allocations reappeared as legislators' insertions into agency budgets — the route exposed by the 2025 flood-control scandal. Patronage flows to whoever holds the presidency, because parties are vehicles, not organisations — and the constitution's 1987 ban on dynasties still awaits an enabling law.",
    trajectory: "The flood-control scandal made pork the national issue again, but the investigating commission was created by executive order, and dynasties persist with the anti-dynasty provision still unenacted.",
    orgs: [], leaders: [], books: ["philippines-electoral-dynamics"] },

  { id: "hungary", country: "Hungary", title: "The patronal state and wholesale patronage", period: "2010–2026",
    scale: 85, centre: 85, coercion: 45,
    summary: "Where the classic machine buys voters one at a time, Orbán's Hungary became the European model of wholesale patronage: procurement, EU funds, land and media redistributed to a loyal business elite that financed the regime's media and campaigns — above a local layer where mayors made public-works jobs conditional on loyalty.",
    how: "EU-funded public tenders won by allied firms; Lőrinc Mészáros — a gas-fitter, Orbán's childhood friend and the mayor of his home village — became the country's richest man; hundreds of pro-government outlets were pooled into a single foundation in 2018; universities were transferred to trusts in 2021; mayors run the public-works programme that employs the rural poor.",
    brokers: "At the top, the leader's inner circle; at the bottom, mayors who control public-works places and welfare.",
    targeting: "Loyal firms at the top; dependent welfare and public-works recipients at the bottom.",
    evidence: [
      { study: "Magyar, Post-Communist Mafia State (2016)", finding: "An 'adopted political family' around a chief patron uses the state to accumulate and redistribute wealth — patronage as the regime's organising principle." },
      { study: "Mares & Young, Conditionality and Coercion (2019)", finding: "Mayors' threats to withdraw public-works jobs and benefits are cheap and effective — negative inducements outperform rewards." },
      { study: "EU rule-of-law conditionality (2022)", finding: "The Council suspended about €6.3 billion over procurement and corruption concerns — the first use of the mechanism." }
    ],
    nuance: "Most of it is legal in form — procurement law, foundations, trusts — which is why outside institutions struggled to act. This is patronage as regime-building rather than vote buying: control of the economy, not the purchase of ballots. And its defeat at the polls in 2026 is evidence against the strongest version of the 'mafia state' thesis — the machine could not fully neutralise elections.",
    trajectory: "Frozen EU funds and the rise of Péter Magyar's Tisza, a party founded by a former Fidesz insider, made the system itself the issue. On 12 April 2026 Tisza won about 54% of the vote and a two-thirds majority on record turnout, ending sixteen years of Orbán government. The open question is now the reverse one: can wholesale patronage built into foundations, trusts and two-thirds laws be unwound, and will the new majority resist building its own?",
    orgs: [], leaders: [], books: ["magyar-mafia", "mares-young-coercion"] },

  { id: "russia", country: "Russia", title: "Patronal presidentialism and the workplace machine", period: "2000–present",
    scale: 70, centre: 80, coercion: 70,
    summary: "Henry Hale's 'patronal presidentialism': politics as a pyramid of personal networks under one chief patron. Elections are delivered through employers, governors and the public sector rather than through party members.",
    how: "The 'administrative resource': governors — appointed from 2004 to 2012, filtered since — deliver regional results; state institutions and large firms instruct employees to vote and to report; teachers and other public-sector workers staff election commissions; United Russia houses governors and officials; loyal oligarchs finance and own the media.",
    brokers: "Employers, governors, heads of public institutions.",
    targeting: "Economically dependent employees and public-sector workers.",
    evidence: [
      { study: "Hale, Patronal Politics (2014)", finding: "Regimes in patronal societies cycle between a single pyramid of networks and competing pyramids; elites' expectations about the chief patron's future decide whether they defect." },
      { study: "Ledeneva, Can Russia Modernise? (2013)", finding: "Sistema — informal networks that both make the state work and block its modernisation; officials are bound by collective complicity, which makes loyalty enforceable." },
      { study: "Frye, Reuter & Szakonyi (World Politics, 2014)", finding: "Workplace mobilisation is widespread, and most likely where workers depend on their employer and cannot easily leave — the employer as broker." }
    ],
    nuance: "The machine is hierarchical and coercive rather than reciprocal, and it rests on expectations: while elites expect the chief patron to last, the pyramid holds.",
    trajectory: "Since 2022, war has militarised patronage — regional payments to soldiers' families, defence contracts, and assets of departing Western firms transferred to loyalists.",
    orgs: ["unitedrussia"], leaders: ["putin"], books: ["hale-patronal", "ledeneva-sistema"] },

  { id: "turkey", country: "Turkey", title: "Neighbourhood welfare and the construction coalition", period: "2002–present",
    scale: 60, centre: 70, coercion: 40,
    summary: "The AKP built two layers: a retail layer of municipal social aid delivered door to door by neighbourhood party workers, and a wholesale layer of public housing, infrastructure and public-private partnerships concentrated among a small circle of construction groups.",
    how: "Municipal aid — food, coal, school supplies — distributed through neighbourhood representatives and women's branches; mass housing through the state agency TOKİ; megaprojects such as the new Istanbul airport, bridges and tunnels built under partnership contracts with revenue guarantees; media ownership shifted toward allied conglomerates.",
    brokers: "Neighbourhood party representatives, women's branches, municipal officials.",
    targeting: "Poor urban neighbourhoods; allied construction groups at the top.",
    evidence: [
      { study: "White, Islamist Mobilization in Turkey (2002)", finding: "The Islamist movement's neighbourhood networks began as the opposition's answer to state neglect, before they became a governing machine." },
      { study: "Yıldırım (2020)", finding: "Neighbourhood-level clientelism under a dominant incumbent depends on local competition — who is targeted shifts with the threat." }
    ],
    nuance: "Much of the aid is not contingent in practice, but its political framing — and voters' uncertainty about losing it — matters. The retail and wholesale layers reinforce each other: contracts finance the party and media that sustain the vote.",
    trajectory: "Inflation strained the model, and opposition wins in Istanbul and Ankara (2019, 2024) turned municipal social aid into a competitive arena.",
    orgs: ["akp"], leaders: ["erdogan"], books: ["white-islamist", "erdogan-rising"] },

  { id: "kenya", country: "Kenya", title: "'Our turn to eat' — ethnic coalitions and campaign handouts", period: "2002–present",
    scale: 55, centre: 75, coercion: 30,
    summary: "Kenyan politics is organised around ethnic coalitions competing for the presidency, on a shared expectation that the winners' regions and elites 'eat'; campaigns run on handouts at rallies and door to door.",
    how: "Presidential tickets assemble ethnic leaders; the Constituency Development Fund (2003) gives MPs money for local projects; the 2010 constitution's devolution to 47 counties created governors with budgets of their own.",
    brokers: "Ethnic and regional leaders, MPs, county officials.",
    targeting: "Co-ethnic regions for spending; everyone at rallies for handouts.",
    evidence: [
      { study: "Wrong, It's Our Turn to Eat (2009)", finding: "A reform government's own networks reproduced the grand corruption it promised to end — told through the whistleblower John Githongo." },
      { study: "Kramon, Money for Votes (2018)", finding: "Handouts work less as bribes than as signals: they show a candidate is credible and attentive to the poor." },
      { study: "The 2007–08 post-election violence", finding: "More than 1,100 people were killed — the stakes of winner-take-all patronage made visible." }
    ],
    nuance: "Vote buying persists though it cannot be enforced, because it carries information. Devolution, meant to lower the stakes of the presidency, also decentralised patronage.",
    trajectory: "The 2024 protests against the Finance Bill mobilised a young generation against the fiscal costs of the patronage state.",
    orgs: [], leaders: [], books: ["kramon-money", "wrong-our-turn"] },

  { id: "southafrica", country: "South Africa", title: "Cadre deployment, tenderpreneurs and state capture", period: "2009–present",
    scale: 85, centre: 60, coercion: 25,
    summary: "The ANC's cadre deployment placed party loyalists across the state; under Jacob Zuma, networks around the Gupta family 'repurposed' state-owned enterprises — Eskom, Transnet, Denel — through appointments and contracts. Patronage became state capture.",
    how: "A deployment committee recommended cadres for public posts; tenders and state-company boards were the prize; black-economic-empowerment partnerships gave politically connected firms entry; Gupta-linked companies won contracts from the state firms whose boards had been reshaped.",
    brokers: "Deployment structures, board appointees, 'tenderpreneurs'.",
    targeting: "Connected firms and the party's own networks.",
    evidence: [
      { study: "Public Protector, State of Capture (2016)", finding: "The first official report on the Guptas' influence over appointments and contracts." },
      { study: "Chipkin & Swilling et al., Shadow State (2018)", finding: "A power elite repurposed state institutions through legal instruments, in the language of transformation." },
      { study: "The Zondo Commission (2018–22)", finding: "Detailed findings on capture across state firms and government — with Eskom's decline and years of power cuts as the public cost." }
    ],
    nuance: "Capture ran through legal forms — appointments, procurement — and the counter-institutions partly worked: the Public Protector, the courts and the press exposed and reversed much of it. South Africa is the democratic case where the immune system responded.",
    trajectory: "The ANC lost its majority in 2024 and now governs in a coalition.",
    orgs: ["anc"], leaders: [], books: ["shadow-state"] },

  { id: "lebanon", country: "Lebanon", title: "Sectarian welfare and the limits of patronage", period: "2005–present",
    scale: 50, centre: 45, coercion: 35,
    summary: "Lebanon's sectarian parties are welfare states in miniature — hospitals, schools, clinics, jobs — binding communities to their leaders, while the post-war power-sharing settlement divided the state itself among sectarian patrons.",
    how: "Party-linked charities and health networks; public-sector jobs apportioned by sect; hiring surges before elections; external patrons financing domestic parties.",
    brokers: "Sectarian leaders (zu'ama), party welfare organisations.",
    targeting: "The party's own community — and others, when competing for mixed districts.",
    evidence: [
      { study: "Cammett, Compassionate Communalism (2014)", finding: "Parties target services strategically: they reach beyond their sect when competing for mixed constituencies and restrict them when mobilising their base." }
    ],
    nuance: "Communal welfare is genuine social provision and political control at once — and its dependence on state and foreign money made it fiscally fragile.",
    trajectory: "The 2019 financial collapse destroyed much of the capacity to fund patronage; the protests that October targeted the sectarian system as a whole.",
    orgs: [], leaders: [], books: ["cammett-compassionate"] },

  { id: "china", country: "China", title: "Networks, promotion and the anti-corruption campaign", period: "2000–present",
    scale: 70, centre: 50, coercion: 60,
    summary: "Inside a single party, patronage takes the form of networks: who promotes whom, and which officials collude with which businesses over land and state assets. Since 2012 an anti-corruption campaign has both disciplined the system and dismantled rival networks.",
    how: "The Organization Department manages cadre careers; local governments finance themselves through land sales in partnership with developers; state-company management is a political appointment; the discipline commission investigates and punishes.",
    brokers: "Patrons in the cadre hierarchy; local officials and their business partners.",
    targeting: "Officials' own networks and collaborators.",
    evidence: [
      { study: "Li & Zhou (2005) vs Shih, Adolph & Liu (APSR, 2012)", finding: "A live debate: growth performance predicted provincial leaders' promotion in one study; factional ties to top leaders, not growth, predicted Central Committee rank in another." },
      { study: "Pei, China's Crony Capitalism (2016)", finding: "Decentralised collusion between officials and businessmen over land and state assets as a form of regime decay." }
    ],
    nuance: "Both accounts of the campaign are true: it is systemic discipline and factional purge. The result is patronage concentrated at the top, not patronage abolished.",
    trajectory: "Centralisation under Xi, with documented risk aversion among officials as a side-effect.",
    orgs: ["ccp"], leaders: ["xi", "deng"], books: ["pei-crony"] },

  { id: "richdemocracies", country: "Rich democracies", title: "Patronage as control", period: "2000s–present",
    scale: 60, centre: 65, coercion: 10,
    summary: "Patronage has not disappeared in wealthy democracies; it has changed purpose. Kopecký, Mair and Spirova found European parties use appointments less to reward voters than to control the state — trusted people in ministries, agencies and state firms.",
    how: "Appointments to agencies, boards and state companies; honours; emergency procurement.",
    brokers: "Ministers' offices, party networks.",
    targeting: "Loyal appointees and, in crises, connected suppliers.",
    evidence: [
      { study: "Kopecký, Mair & Spirova (eds.), Party Patronage and Party Government in European Democracies (2012)", finding: "Across Europe, party patronage is chiefly a tool of governing and control rather than electoral reward." },
      { study: "The UK's 'VIP lane' (2020)", finding: "Pandemic protective-equipment suppliers referred by politicians were fast-tracked; the High Court ruled in 2022 that the operation of the lane was unlawful." },
      { study: "Schedule F (United States, 2020; reinstated 2025)", finding: "An executive order to reclassify policy-influencing civil servants as removable at will — revived by executive order in January 2025." }
    ],
    nuance: "Where political control of the bureaucracy ends and patronage begins is itself contested: democratic governments are entitled to loyal policy staff. The argument is about scale and the protection of merit.",
    trajectory: "Growing contestation over the civil service's independence.",
    orgs: [], leaders: [], books: ["kopecky-party-patronage"] }
];

// Cross-cutting works, not tied to one case
window.PAT_GENERAL = ["kitschelt-wilkinson-patrons", "stokes-brokers", "mares-young-coercion", "munoz-buying-audiences", "hale-patronal", "kopecky-party-patronage"];

// Articles worth knowing that are not books (so not in the Library)
window.PAT_ARTICLES = [
  { cite: "Hicken & Nathan, \"Clientelism's Red Herrings\", Annual Review of Political Science (2020)", note: "Argues that much of what we believe about vote buying is wrong: most payments go to people who would have voted for the candidate anyway, and campaigns pay for reasons other than persuasion." },
  { cite: "Hicken, \"Clientelism\", Annual Review of Political Science (2011)", note: "The standard definition: contingency, hierarchy and iteration." },
  { cite: "Stokes, \"Perverse Accountability\", APSR (2005)", note: "Clientelism reverses democratic accountability: parties hold voters accountable rather than voters holding parties accountable." },
  { cite: "Nichter, \"Vote Buying or Turnout Buying?\", APSR (2008)", note: "Much apparent vote buying is paying supporters to turn out." },
  { cite: "Berenschot & Aspinall, \"How Clientelism Varies\", Democratization (2020)", note: "A comparative framework for Indonesia, India and Argentina based on network type and control over state resources." },
  { cite: "Arriola, \"Patronage and Political Stability in Africa\", Comparative Political Studies (2009)", note: "Cabinet expansion as a coup-proofing tool." }
];
