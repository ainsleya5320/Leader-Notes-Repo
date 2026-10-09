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
  { key: "coercion", name: "Negative inducements", def: "Threats to withdraw welfare, jobs or services — or worse — from those who fail to support.", distinct: "Mares and Young find threats are an important and often effective tool of electoral clientelism — and a threat that works costs nothing to carry out." },
  { key: "capture", name: "State capture and wholesale patronage", def: "Networks shaping laws, procurement and state firms to extract rents at scale.", distinct: "Wholesale rather than retail: the currency is a contract, a licence or a state company, and the client is a firm or an oligarch, not a voter." },
  { key: "neopatrimonialism", name: "Neopatrimonialism", def: "A state with rational-legal forms — ministries, laws, elections — run on personal loyalty to a ruler.", distinct: "Eisenstadt's term, applied to Africa by Bratton and van de Walle (1997); the forms are real, which is why the patronage is hard to see from outside." }
];

window.PAT_DEBATES = [
  { key: "enforcement", q: "With a secret ballot, how does a patron enforce the deal?",
    answers: [
      { view: "Monitoring through brokers and small electorates", who: "Larreguy, Marshall & Querubín (Mexico); Stokes et al.", cases: ["mexico", "argentina"] },
      { view: "Reciprocity and norms — clients feel obliged", who: "Auyero; Finan & Schechter", cases: ["argentina"] },
      { view: "Self-interest: jobholders campaign to keep their jobs", who: "Oliveros", cases: ["argentina"] },
      { view: "Threats rather than promises", who: "Mares & Young; Frye, Reuter & Szakonyi", cases: ["hungary", "russia"] },
      { view: "It often isn't enforced at all — the payment is a signal", who: "Kramon; Muñoz; Aspinall & Berenschot; Hicken & Nathan", cases: ["kenya", "indonesia"] }
    ] },
  { key: "targeting", q: "Who gets targeted — core supporters or swing voters?",
    answers: [
      { view: "Swing or weakly opposed voters, where money changes votes", who: "Stokes (2005)", cases: [] },
      { view: "Core supporters, to get them to the polls", who: "Nichter (2008); Cox & McCubbins", cases: ["argentina", "brazil"] },
      { view: "Loyalists — because brokers, not parties, choose", who: "Stokes, Dunning, Nazareno & Brusco (2013)", cases: ["argentina"] },
      { view: "It depends on the party's goal — attracting marginal voters, consolidating its own community, or mobilising supporters", who: "Cammett (2014)", cases: ["lebanon"] }
    ] },
  { key: "works", q: "Does electoral clientelism actually work?",
    answers: [
      { view: "Often not as bribery: paying supporters to turn out, not persuading opponents to switch", who: "Nichter (2008)", cases: ["brazil"] },
      { view: "Used even where it cannot be monitored — so 'does it enforce the vote?' is the wrong question", who: "Hicken & Nathan (2020)", cases: ["indonesia", "kenya"] },
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
      { view: "It doesn't end — it moves up to wholesale capture and regime-level patronage", who: "Magyar; Hale; Pei", cases: ["hungary", "russia", "turkey", "china"] },
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
      { view: "In divided societies, sharing posts buys peace: Arriola finds cabinet expansion lowers coup risk; Francois, Rainer & Trebbi find cabinet posts shared roughly in proportion to ethnic group size", who: "Arriola (2009); Francois, Rainer & Trebbi (2015)", cases: ["kenya"] },
      { view: "The cost is capture, fiscal fragility and a state that cannot reform", who: "Chipkin & Swilling; Pei", cases: ["southafrica", "china"] }
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
      { study: "Oliveros, Patronage at Work (2021)", finding: "Public employees hired through patronage campaign for incumbents because they expect to lose their jobs if the incumbent loses — a shared fate that enforces the exchange." },
      { study: "Weitz-Shapiro, Curbing Clientelism in Argentina (2014)", finding: "Mayors facing competition curb clientelism where middle-class voters would punish it — and keep it where they would not." },
      { study: "Auyero, Poor People's Politics (2000)", finding: "For clients, the exchange is experienced as help, friendship and loyalty to Evita's memory — not as a bribe." }
    ],
    nuance: "This is a relationship, not a transaction. With a secret ballot, enforcement rests on reciprocity and self-interest rather than surveillance — and the system is limited less by law than by the middle class's disapproval.",
    trajectory: "In 2024 the Milei government abolished Potenciar Trabajo and paid beneficiaries directly, cutting the social organisations and municipalities out of distribution — a deliberate attempt to break the broker layer. In April 2026 it went further, replacing the successor programme's payments with training vouchers for about 900,000 people.",
    orgs: ["peronism"], leaders: ["peron"], books: ["auyero-poor", "stokes-brokers", "szwarcberg-mobilizing", "oliveros-patronage", "weitz-shapiro-curbing"] },

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
    nuance: "'Programmatic' is not the opposite of 'electorally useful.' The test is contingency — whether a benefit can be withdrawn from those who vote wrong. Morena's model removes the traditional broker but personalises the credit — and critics argue its enrolment corps functions as a partisan broker layer, which the literature is still learning how to classify.",
    trajectory: "Universal, direct and presidential: a hybrid of programmatic delivery and personalist credit-claiming, with continuing controversy over whether the state enrolment corps doubles as a party machine.",
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
    trajectory: "Infrastructure and national transfers erode the demand for patrons; local elections keep the supply, while at the top patronage runs through legislators' budget amendments (emendas), which the Supreme Court has repeatedly tried to make transparent.",
    orgs: ["pt"], leaders: ["lula"], books: ["nichter-votes"] },

  { id: "india", country: "India", title: "Patronage democracy — brokers, legislators and the new welfarism", period: "2000s–present",
    scale: 35, centre: 60, coercion: 20,
    summary: "Kanchan Chandra called India a 'patronage democracy': the state is the main source of jobs and services and officials have discretion over who gets them, so voters choose the party whose elites are likeliest to favour people like them. The 21st-century story is the rewiring of that system.",
    how: "Slum leaders and party workers broker water, electricity and documents; legislators hold daily open houses where citizens petition directly. Caste-based parties offered elite representation; the BJP recruited poor voters through the service organisations of the Sangh Parivar. Since 2014 the Modi government has expanded direct benefit transfers through Aadhaar-linked bank accounts (a scheme begun in 2013), alongside schemes for gas connections, toilets, housing and free grain — all branded with the prime minister.",
    brokers: "Slum leaders, party workers, caste and community leaders — and, increasingly, none at all.",
    targeting: "Ethnic and caste communities historically; individual 'beneficiaries' under direct transfers.",
    evidence: [
      { study: "Chandra, Why Ethnic Parties Succeed (2004)", finding: "Voters in a patronage democracy count heads: they back parties where their group's elites are well represented, expecting favour." },
      { study: "Bussell, Clients and Constituents (2019)", finding: "Senior politicians personally provide individual help, often bypassing brokers — and with less partisan bias than the clientelism model predicts." },
      { study: "Auerbach, Demanding Development (2019)", finding: "Slums with dense, competitive party networks and slum leaders get more public goods — brokers as channels of development, not only of capture." },
      { study: "Thachil, Elite Parties, Poor Voters (2014)", finding: "An upper-caste party won poor voters not by transfers but by outsourcing social services to its movement's affiliates." }
    ],
    nuance: "The 'beneficiary' constituency built by direct transfers is neither classic clientelism — there is no contingent exchange and no broker — nor pure programmatic politics, because the benefit is branded to a leader. Scholars disagree whether it weakens local brokers or simply moves patronage up to the national level.",
    trajectory: "Centralised credit-claiming, copied by state governments running their own branded schemes — most visibly pre-election cash transfers to women, as in Bihar in 2025 — which blur the line between programmatic welfare and electoral inducement.",
    orgs: ["congress", "bjp"], leaders: ["modi", "indira"], books: ["chandra-ethnic", "bussell-clients", "auerbach-demanding", "thachil-elite"] },

  { id: "indonesia", country: "Indonesia", title: "Candidate-centred clientelism and the 'dawn attack'", period: "2004–present",
    scale: 25, centre: 90, coercion: 15,
    summary: "Since open-list elections were adopted in 2009, Indonesian candidates compete as hard against their own party-mates as against other parties, and each builds a personal 'success team' of brokers to distribute cash, goods and village projects — among the most candidate-centred patronage systems in the large democracies.",
    how: "Success teams (tim sukses) are assembled from community leaders, religious figures and village heads; the 'dawn attack' (serangan fajar) delivers cash envelopes before polling; communities receive club goods such as mosque repairs and roads. Village funds, introduced in 2015, made village heads richer brokers; costly direct elections for regional heads leave winners with debts repaid through licences and contracts.",
    brokers: "Personal success teams — ad hoc, rented for the campaign, with loyalties that float.",
    targeting: "Communities as much as individuals, through leaders who can claim to speak for a village or congregation.",
    evidence: [
      { study: "Aspinall & Berenschot, Democracy for Sale (2019)", finding: "Networks are candidate-owned and temporary; brokers skim and defect; vote buying is widespread but often inefficient — candidates pay because their rivals do." },
      { study: "Berenschot & Aspinall (Democratization, 2020)", finding: "Comparing Indonesia with Argentina and India: whether networks are party- or community-centred, what benefits are offered, and how much discretion politicians have over state resources, decides the form patronage takes." }
    ],
    nuance: "Weak parties do not mean weak patronage; they mean personalised patronage. The high cost of campaigns ties electoral clientelism to corruption in office — the permit and the procurement contract repay the campaign.",
    trajectory: "Rising campaign costs, and an anti-corruption commission whose independence was curtailed by a 2019 revision of its law. Under Prabowo the ruling coalition has floated ending direct regional elections to cut costs — a plan reportedly shelved after public opposition, though the idea is not dead — and flagship programmes such as free meals have drawn patronage-appointment criticism.",
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
      { study: "The flood-control scandal (2025)", finding: "The president said 15 contractors had won about a fifth of roughly ₱545 billion in flood-control projects (2022–May 2025), alongside legislators' budget insertions and paid-for 'ghost' projects that were never built; a presidential Independent Commission for Infrastructure was created in September 2025, just before mass anti-corruption protests." },
      { study: "Hicken, Aspinall & Weiss (eds.), Electoral Dynamics in the Philippines (2019)", finding: "Grassroots studies of how brokers, money and machines work in local contests." }
    ],
    nuance: "Pork survives its abolition: after 2013, discretionary allocations reappeared as legislators' insertions into agency budgets — the route exposed by the 2025 flood-control scandal. Patronage flows to whoever holds the presidency, because parties are vehicles, not organisations — and the constitution's 1987 ban on dynasties still awaits an enabling law despite an August 2026 Supreme Court order.",
    trajectory: "The flood-control scandal made pork the national issue again: the Independent Commission for Infrastructure, created by executive order, wound up in March 2026 after referring cases to the Ombudsman. Dynasties persist: the Supreme Court ruled unanimously in August 2026 that Congress must enact the constitution's anti-dynasty law, but no such law has yet cleared both houses.",
    orgs: [], leaders: [], books: ["philippines-electoral-dynamics"] },

  { id: "hungary", country: "Hungary", title: "The patronal state and wholesale patronage", period: "2010–2026",
    scale: 85, centre: 85, coercion: 45,
    summary: "Where the classic machine buys voters one at a time, Orbán's Hungary became the European model of wholesale patronage: procurement, EU funds, land and media redistributed to a loyal business elite that financed the regime's media and campaigns — above a local layer where mayors made public-works jobs conditional on loyalty.",
    how: "EU-funded public tenders won by allied firms; Lőrinc Mészáros — a gas-fitter, Orbán's childhood friend and the mayor of his home village — became the country's richest man; hundreds of pro-government outlets were pooled into a single foundation in 2018; universities were transferred to trusts in 2021; mayors run the public-works programme that employs the rural poor.",
    brokers: "At the top, the leader's inner circle; at the bottom, mayors who control public-works places and welfare.",
    targeting: "Loyal firms at the top; dependent welfare and public-works recipients at the bottom.",
    evidence: [
      { study: "Magyar, Post-Communist Mafia State (2016)", finding: "An 'adopted political family' around a chief patron uses the state to accumulate and redistribute wealth — patronage as the regime's organising principle." },
      { study: "Mares & Young, Conditionality and Coercion (2019)", finding: "Mayors' threats to withdraw public-works jobs and benefits are cheap and, they argue, often more effective than rewards." },
      { study: "EU rule-of-law conditionality (2022)", finding: "The Council suspended about €6.3 billion over procurement and corruption concerns — the first use of the mechanism." }
    ],
    nuance: "Most of it is legal in form — procurement law, foundations, trusts — which is why outside institutions struggled to act. This is patronage as regime-building rather than vote buying: control of the economy, not the purchase of ballots. And its defeat at the polls in 2026 is often read as evidence against the strongest version of the 'mafia state' thesis: the machine could not fully neutralise elections.",
    trajectory: "Frozen EU funds and the rise of Péter Magyar's Tisza — a small party he took over in 2024 after leaving Fidesz's orbit — made the system itself the issue. On 12 April 2026 Tisza won about 53% of the list vote and a two-thirds majority on record turnout, ending sixteen years of Orbán government. The new government has since scrapped the non-university public-interest trusts (the university foundations follow by August 2027), and in September 2026 the Commission proposed unlocking about €4.2 billion of frozen funds. The open question is whether the unwinding stays rule-of-law-bound, and whether the new majority resists building patronage of its own.",
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
    trajectory: "Since 2022, war has militarised patronage — regional payments to soldiers' families, defence contracts, and assets of departing Western firms transferred to loyalists. The September 2026 Duma election returned United Russia with a record 349 of 450 seats — the workplace machine delivering as designed.",
    orgs: ["unitedrussia"], leaders: ["putin"], books: ["hale-patronal", "ledeneva-sistema"] },

  { id: "turkey", country: "Turkey", title: "Neighbourhood welfare and the construction coalition", period: "2002–present",
    scale: 60, centre: 70, coercion: 40,
    summary: "The AKP built two layers: a retail layer of municipal social aid delivered door to door by neighbourhood party workers, and a wholesale layer of public housing, infrastructure and public-private partnerships concentrated among a small circle of construction groups.",
    how: "Municipal aid — food, coal, school supplies — distributed through neighbourhood representatives and women's branches; mass housing through the state agency TOKİ; megaprojects such as the new Istanbul airport, bridges and tunnels built under partnership contracts with revenue guarantees; media ownership shifted toward allied conglomerates.",
    brokers: "Neighbourhood party representatives, women's branches, municipal officials.",
    targeting: "Poor urban neighbourhoods; allied construction groups at the top.",
    evidence: [
      { study: "White, Islamist Mobilization in Turkey (2002)", finding: "The Islamist movement's neighbourhood networks began as the opposition's answer to state neglect, before they became a governing machine." },
      { study: "Yıldırım, Democratization (2020)", finding: "Fieldwork in an Istanbul neighbourhood: where regulatory institutions cannot restrain an incumbent's discretion over state resources, monopolistic control gives the ruling party a decisive clientelist advantage over opposition parties." }
    ],
    nuance: "Much of the aid is not contingent in practice, but its political framing — and voters' uncertainty about losing it — matters. The retail and wholesale layers reinforce each other: contracts finance the party and media that sustain the vote.",
    trajectory: "Inflation strained the model, and opposition wins in Istanbul and Ankara (2019, held in 2024) turned municipal social aid into a competitive arena. Since March 2025 the state has answered with prosecutions of opposition mayors — Istanbul's İmamoğlu was jailed and, from March 2026, is on trial with some 400 co-defendants — putting control of municipal budgets itself at stake.",
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
    trajectory: "The 2024 Finance Bill protests (the bill was withdrawn after Parliament was stormed) and the 2025 protests mobilised a young generation against corruption, police violence and the fiscal costs of the patronage state. With Raila Odinga's death in October 2025, Ruto is courting his Nyanza base ahead of the August 2027 election.",
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
    trajectory: "The ANC lost its majority in 2024 and governs in a coalition with the DA; local elections due 4 November 2026 will test it.",
    orgs: ["anc"], leaders: [], books: ["shadow-state"] },

  { id: "lebanon", country: "Lebanon", title: "Sectarian welfare and the limits of patronage", period: "2005–present",
    scale: 50, centre: 45, coercion: 35,
    summary: "Lebanon's sectarian parties are welfare states in miniature — hospitals, schools, clinics, jobs — binding communities to their leaders, while the post-war power-sharing settlement divided the state itself among sectarian patrons.",
    how: "Party-linked charities and health networks; public-sector jobs apportioned by sect; hiring surges before elections; external patrons financing domestic parties.",
    brokers: "Sectarian leaders (zu'ama), party welfare organisations.",
    targeting: "The party's own community — and others, when competing for mixed districts.",
    evidence: [
      { study: "Cammett, Compassionate Communalism (2014)", finding: "Parties deploy welfare for different political ends — attracting marginal voters, consolidating their own community, mobilising supporters — so some spread services beyond their sect and others confine them to their base." }
    ],
    nuance: "Communal welfare is genuine social provision and political control at once — and its dependence on state and foreign money made it fiscally fragile.",
    trajectory: "The 2019 financial collapse destroyed much of the capacity to fund patronage; the protests that October targeted the sectarian system as a whole. In March 2026 parliament extended its own term by two years, citing the war with Israel, leaving the sectarian distribution of power untested at the polls until 2028.",
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
    nuance: "Both accounts have evidence behind them: it is systemic discipline and factional purge. The result is patronage concentrated at the top, not patronage abolished.",
    trajectory: "Centralisation under Xi, with documented risk aversion among officials as a side-effect. In January 2026 the campaign reached the Central Military Commission's first vice-chairman, Zhang Youxia, and the Joint Staff chief, Liu Zhenli.",
    orgs: ["ccp"], leaders: ["xi", "deng"], books: ["pei-crony"] },

  { id: "richdemocracies", country: "Rich democracies", title: "Patronage as control", period: "2000s–present",
    scale: 60, centre: 65, coercion: 10,
    summary: "Patronage has not disappeared in wealthy democracies; it has changed purpose. Kopecký, Mair and Spirova found European parties use appointments less to reward voters than to control the state — trusted people in ministries, agencies and state firms.",
    how: "Appointments to agencies, boards and state companies; honours; emergency procurement.",
    brokers: "Ministers' offices, party networks.",
    targeting: "Loyal appointees and, in crises, connected suppliers.",
    evidence: [
      { study: "Kopecký, Mair & Spirova (eds.), Party Patronage and Party Government in European Democracies (2012)", finding: "Across Europe, party patronage is chiefly a tool of governing and control rather than electoral reward." },
      { study: "The UK's 'VIP lane' (2020)", finding: "Pandemic protective-equipment suppliers referred by politicians were fast-tracked; the High Court ruled in January 2022 that the lane breached the equal-treatment obligation and was unlawful, though it withheld relief because the contracts would probably have been awarded anyway." },
      { study: "Schedule F (United States, 2020; reinstated 2025)", finding: "An executive order to reclassify policy-influencing civil servants as removable at will — revived by executive order in January 2025, formalised by an OPM rule in February 2026 (renamed Schedule Policy/Career), and applied to roughly 8,000 positions from June 2026 while court challenges continue." }
    ],
    nuance: "Where political control of the bureaucracy ends and patronage begins is itself contested: democratic governments are entitled to loyal policy staff. The argument is about scale and the protection of merit.",
    trajectory: "Growing contestation over the civil service's independence — in the US, the 2026 Schedule Policy/Career rule and its legal challenges.",
    orgs: [], leaders: [], books: ["kopecky-party-patronage"] },
  { id: "nigeria", country: "Nigeria", title: "Godfathers, governors and the prebendal state", period: "1999–present",
    scale: 55, centre: 70, coercion: 50,
    summary: "Since the return to civilian rule in 1999, Nigerian elections have been fought less between parties than between the networks that use them: state governors who control the money, 'godfathers' who sponsor a candidate and expect to run the office he wins, and a presidency that by convention rotates between north and south. Cash and threats at the ballot are the visible part; the structure underneath is the prebend — public office treated as an entitlement to be shared out.",
    how: "Oil revenue is paid into the federation account and shared each month between the federal, state and local tiers, so a governor holds a large, discretionary budget and a party machine to go with it. In states dominated by one party the nomination is the real gate, which is why the sponsor who can decide who is nominated matters more than any single voter. 'Zoning' is the informal rule, originating in the PDP, that the presidency and other top offices rotate between north and south and among the six geopolitical zones; it is a party convention, not a constitutional rule. At the bottom, party agents offer cash, food and jobs to voters, and in rougher settings youths are hired as muscle. At the top the currency is wholesale: oil blocks, contracts and appointments. A July 2024 Supreme Court judgment ordered local-government allocations to be paid directly to the councils, a ruling aimed at the governors' hold on the third tier.",
    brokers: "Godfathers and the 'godsons' they sponsor; governors and their local-government chairmen; party officials at ward and local level; traditional rulers; party agents at polling units; and, in the rougher settings, unemployed youths recruited as private security.",
    targeting: "In the retail layer, the rural and the poor: Afrobarometer respondents who lacked basic needs were over four times as likely to be approached often with an offer, and offers were mostly cash. In the elite layer, nomination slots, commissionerships and contracts go to the sponsor's own people.",
    evidence: [
      { study: "Joseph, Democracy and Prebendal Politics in Nigeria: The Rise and Fall of the Second Republic (1987)", finding: "Applied 'prebendalism' to Nigeria: state offices are treated as prebends that holders may appropriate to generate benefits for themselves, their constituents and their kin, so elections become contests for access to resources rather than for policy. The book studies the failed Second Republic of 1979–83, so it is the concept, not the period, that carries into the Fourth Republic." },
      { study: "Albert, 'Explaining godfatherism in Nigerian politics' (African Sociological Review, 2005)", finding: "Defines political godfathers as gatekeepers who decide who is nominated and who wins, and builds the case from Chris Uba and Chris Ngige in Anambra. On his account Uba backed Ngige for governor in 2003 on an understanding that he would name most of the commissioners (seven of ten), then fell out with him over appointments and state money; a police-assisted attempt to remove Ngige on 10 July 2003, and violence in Awka and Onitsha in November 2004, followed, and both sides raised private armies of unemployed youths. Albert notes that big backers of candidates exist in many democracies; what he finds distinctive in Nigeria is that godfathers treat sponsorship as an investment to be repaid and rig elections to install a pre-selected candidate." },
      { study: "Bratton, 'Vote buying and violence in Nigerian election campaigns' (Electoral Studies, 2008)", finding: "In an Afrobarometer survey of 2,410 Nigerians in early 2007, about 12 per cent said they had been offered something for their vote (16 per cent recalled the 2003 campaign), mostly cash, and about 4 per cent reported threats — over three times the national rate in the Niger Delta. The poor and rural were targeted most; the ruling PDP made about 40 per cent of the offers reported, the opposition parties the rest. Vote buying did not measurably raise turnout, while a threat of violence cut the odds of intending to vote by about half; an offer from the incumbent raised the probability of intending to vote for it by about 38 per cent. Asked what they would do if offered money, 8 per cent said they would comply, 42 per cent said they would take it and vote as they pleased and 41 per cent said they would refuse — stated intentions, not observed votes." },
      { study: "Collier & Vicente, 'Votes and violence: evidence from a field experiment in Nigeria' (Economic Journal, 2014)", finding: "A nationwide anti-violence campaign of town meetings, popular theatre and door-to-door visits reduced perceptions of violence and raised voters' sense of empowerment and turnout; journalists' reports also recorded less actual violence, and the authors report that voters' experience of intimidation became less associated with incumbents. Intimidation can be resisted collectively, which a pure coercion story would not predict." },
      { study: "Smith, A Culture of Corruption: Everyday Deception and Popular Discontent in Nigeria (2007)", finding: "Drawing on fieldwork in south-eastern Nigeria, an attempt to understand the dilemmas ordinary Nigerians face in getting ahead, or just surviving, in a society riddled with corruption: the fuel shortages, the police checkpoints, the email scams. Ordinary people take part in the corruption they condemn, so popular discontent and popular participation coexist." },
      { study: "Iwuoha, 'Rethinking the patron–client politics of oil block allocation' (Review of African Political Economy, 2021)", finding: "In the wholesale layer, the indigenous firms awarded oil blocks kept a degree of control over the ruling elite that awarded them: they earned more of the rents and had leverage over their patrons' decisions. The result was poor development of the upstream sector, defaults on remittances and falling production — patrons are not always the senior partner." }
    ],
    nuance: "Voters are not puppets. In the best-known survey, most people condemned vote buying, most said they would take the money and vote their conscience, and threats depressed turnout rather than delivering votes. 'Godfather' is also a relationship with a shelf life: Ngige; Rashidi Ladoja in Oyo (impeached in January 2006 in a feud with the broker Lamidi Adedibu, reinstated after court rulings in December 2006); and, nearly two decades later, Siminalayi Fubara against his sponsor Nyesom Wike in Rivers all show godsons turning on their sponsors, with the courts, the federal government and the legislatures deciding who wins. Competition is real: the 2023 presidential race was a three-way contest won with 36.6 per cent, and the states split 12 (Tinubu), 12 (Atiku), 11 plus the FCT (Obi) and one (Kwankwaso) — no machine delivered a majority. Zoning is contested: defenders see a device for keeping a plural country together, critics say it guarantees that whichever region holds the presidency 'eats'. Finally, the systematic evidence on vote buying is survey-based and mostly from the 2003 and 2007 campaigns; work on 2019 and 2023 rests largely on observer reports, so how far the pattern has changed is harder to say.",
    trajectory: "Bola Tinubu won in 2023 with about 36.6 per cent of the vote, in a count marred by the electoral commission's failure to upload results to its online portal; observer groups including Yiaga Africa reported vote buying. Since then the party system has narrowed: Rivers State spent six months under federal emergency rule in 2025, and governors have defected to the ruling APC in large numbers — a shift APC officials call voluntary and critics call drift towards one-party dominance. The opposition has scattered across vehicles: for the presidential election scheduled for 16 January 2027, INEC's final list of 18 candidates has Tinubu (APC), Atiku Abubakar (ADC, with Rotimi Amaechi) and Peter Obi (NDC, with Rabiu Kwankwaso) among the leading contenders. Whether the governors' defection is consolidation or another turn of the prebendal wheel is a question the January vote will begin to answer.",
    orgs: [], leaders: [], books: ["joseph-prebendal", "smith-culture-corruption", "bratton-vandewalle-experiments", "kramon-money"] },
  { id: "venezuela", country: "Venezuela", title: "Chavismo: oil-funded welfare, blacklists and the food box", period: "2003–present",
    scale: 40, centre: 80, coercion: 80,
    summary: "For two decades chavismo ran the most conspicuous contingent-benefit system in Latin America: oil-funded social programmes (the misiones) that reached millions of poor Venezuelans, a blacklist of the people who signed the 2003–04 recall petition, and — once oil income and output collapsed — a food-box and digital-ID system run through party structures. In January 2026 US forces seized Nicolás Maduro; his vice-president, Delcy Rodríguez, took over as acting president with much of the apparatus still in place.",
    how: "The system was built on oil rents and on control of the company that earns them. After the 2002 coup attempt and the 2002–03 oil strike, Chávez dismissed some 18,000 employees of the state oil company PDVSA, about 40 per cent of its workforce, and used its revenue directly for the misiones launched in 2003 (Barrio Adentro for health, Robinson and Ribas for literacy and schooling, Mercal for food). Over 2003–04 the signatures of the 4.7 million people who signed one or more recall petitions were published, and in 2004 the third petition's signers were packaged, with data on social-programme participation, into a searchable programme called Maisanta that circulated through the public sector. From 2016, as shortages deepened, the government concentrated its social effort on the CLAP food-box programme, begun in April 2016 and run through neighbourhood committees; the Carnet de la Patria, announced in December 2016 and built with the Chinese firm ZTE, linked pensions, bonuses and access to the boxes to registration on a state database, which by January 2018 the government said held about 16 million people. Colectivos — armed, pro-government neighbourhood groups — sit at the coercive end.",
    brokers: "The ruling PSUV's neighbourhood structures and the CLAP committees; state ministries and public employers; and colectivos. At the top, the president's circle, the military and PDVSA management, who control the rents that pay for the lower tiers.",
    targeting: "Presumed opponents (through the recall lists) and the poor who depend on boxes, bonuses and subsidised services. Access is conditioned on being registered, and on being thought loyal.",
    evidence: [
      { study: "Hsieh, Miguel, Ortega & Rodríguez, 'The Price of Political Opposition: Evidence from Venezuela's Maisanta' (American Economic Journal: Applied Economics, 2011)", finding: "Matching the recall-petition list to a national household survey, they find that signers suffered about a 5 per cent fall in earnings and a 1.3 percentage point fall in employment after the list circulated, with no pre-trend before 2004. The working paper adds that the loss was concentrated among signers of the third petition, the one packaged into Maisanta, that signers left public-sector jobs disproportionately, and that in a 2008 survey about 10 per cent of job changers said politics had played a part. Their back-of-envelope estimate of the productivity cost of mismatched workers is about 3 per cent of GDP." },
      { study: "Penfold-Becerra, 'Clientelism and social funds: evidence from Chávez's Misiones' (Latin American Politics and Society, 2007)", finding: "Using subnational data on some of the misiones, he finds that funds were influenced by political variables: given intense electoral competition and weak institutional constraints, the government used them clientelistically — even while distributing oil income to the very poor. The misiones served two purposes at once, to shape the political context and to reach low-income households." },
      { study: "Corrales & Penfold, Dragon in the Tropics: Hugo Chávez and the Political Economy of Revolution in Venezuela (2011)", finding: "Argue that liberal democracy as an institution was not to blame for chavismo's rise, and that oil dependence alone did not determine the outcome; what mattered was the weakness of checks and balances, which let the executive distribute oil rents widely and build an asymmetry of political power." },
      { study: "UN Office of the High Commissioner for Human Rights, Human rights violations in the Bolivarian Republic of Venezuela: a downward spiral with no end in sight (June 2018)", finding: "Reports that CLAP operates through the PSUV's local structures, that people described being threatened with losing boxes if they did not vote for the party or after joining protests, and that they had been discriminated against in access because of perceived lack of support. It also records that the carnet had been requested as a condition for a CLAP box, that people were asked to activate it at 'red spots' near polling stations, and that Maduro promised a special gift through the carnet to those who voted for him. The government said the vote remains confidential. OHCHR also found the boxes nutritionally inadequate and the programme lacking accountability." },
      { study: "Hawkins, Venezuela's Chavismo and Populism in Comparative Perspective (2010)", finding: "Treats chavismo as a populist movement defined by a Manichaean discourse, and argues on cross-country evidence that such movements respond to widespread corruption and economic crisis; he analyses the Bolivarian Circles and the misiones as cases of how populist ideas shape political organisation and policy. On this reading the corruption of the old order is part of what has to be explained, not just the background." },
      { study: "The Carter Center, statement on the 28 July 2024 presidential election", finding: "As the only international observer body present, it said it could not verify or corroborate the results declared by the National Electoral Council, calling the failure to release precinct-level results a serious breach of electoral principles. The opposition had collected tally sheets from about 80 per cent of precincts, which showed Edmundo González with about 67 per cent, and the Center concluded that the election could not be considered democratic." }
    ],
    nuance: "Chavismo was not only a coercive machine. It won elections that were competitive enough to matter — Chávez took about 56 per cent in 1998 — and Penfold-Becerra's finding that misiones were used politically also says they reached very poor households. The old order had its own patronage: the AD and COPEI parties controlled appointments, unions and rents (Coppedge's 'partyarchy'), and Hawkins reads chavismo partly as a response to that corruption. What is contested is enforcement: OHCHR gathered accounts of boxes being withheld, but also notes that many people simply believe they could be excluded — when the belief is widespread and the state holds the data, monitoring is barely needed — and how many were actually denied benefits is documented mostly by testimony, not counts. The economic collapse is contested too: it began well before the 2019 oil sanctions, though some economists argue sanctions deepened it and the government blames them. One reading is that as oil income fell, patronage narrowed from broad distribution to rationing and surveillance, which is why the carnet and the boxes matter more than the misiones by the late 2010s.",
    trajectory: "The 2024 election left the system contested rather than settled: the electoral council declared a Maduro win without publishing precinct tallies, the opposition's collected tally sheets showed a large lead for Edmundo González, and about 2,000 people were arrested in the following weeks. In January 2026 US forces seized Maduro and Delcy Rodríguez became acting president, with the security services and the PSUV's structures still in place. In September 2026 a UN fact-finding mission said the institutions behind repression remain intact despite limited changes; prisoner releases have followed talks with the opposition, and elections have been promised without a date. Reports suggest CLAP deliveries had largely stopped by early 2026 without any formal announcement. Whether the system is being dismantled or handed to a different owner is the open question.",
    orgs: [], leaders: [], books: ["corrales-penfold-dragon", "hawkins-chavismo-populism", "corrales-autocracy-rising", "karl-paradox-plenty", "coppedge-lame-ducks", "stokes-brokers"] }
];

// Cross-cutting works, not tied to one case
window.PAT_GENERAL = ["kitschelt-wilkinson-patrons", "stokes-brokers", "mares-young-coercion", "munoz-buying-audiences", "hale-patronal", "kopecky-party-patronage"];

// Articles worth knowing that are not books (so not in the Library)
window.PAT_ARTICLES = [
  { cite: "Hicken & Nathan, \"Clientelism's Red Herrings\", Annual Review of Political Science (2020)", note: "Argues that the field's long focus on how politicians solve the commitment problem — monitoring and enforcing individual votes — is a red herring: clientelism is used even where voters cannot be monitored, so the live questions are why politicians choose it, whom they target and what it buys." },
  { cite: "Hicken, \"Clientelism\", Annual Review of Political Science (2011)", note: "The standard definition: contingency, hierarchy and iteration." },
  { cite: "Stokes, \"Perverse Accountability\", APSR (2005)", note: "Clientelism reverses democratic accountability: parties hold voters accountable rather than voters holding parties accountable." },
  { cite: "Nichter, \"Vote Buying or Turnout Buying?\", APSR (2008)", note: "Much apparent vote buying is paying supporters to turn out." },
  { cite: "Berenschot & Aspinall, \"How Clientelism Varies\", Democratization (2020)", note: "A comparative framework for Indonesia, India and Argentina: network type (party- versus community-centred), the benefits offered, and how far parties control state resources." },
  { cite: "Arriola, \"Patronage and Political Stability in Africa\", Comparative Political Studies (2009)", note: "Cabinet expansion as a coup-proofing tool." }
];

// ============================================================
// PAT_ROT — the rot ledger for each patronage system
// ============================================================
// Same seven kinds of decay and two axes as the party dossiers (ROT_TYPES, ROT_AXES
// in org-dossiers.js), scored 0-100 for the system at its most developed within the
// period shown. My estimates: the reasoning is the evidence, and a different reader
// would move several of these by 10-15 points. 'why' says what drove the scores.
//   rot order: graft, capture, closure, suppression, feedback, sclerosis, succession
// Entrenched rot = mean rot x leakage x (1 - reversibility), as in the dossiers.
// ============================================================
(function () {
  const K = ["graft", "capture", "closure", "suppression", "feedback", "sclerosis", "succession"];
  const mk = (r, leakage, reversibility, why) => ({ rot: Object.fromEntries(K.map((k, i) => [k, r[i]])), leakage, reversibility, why });
  window.PAT_ROT = {
    argentina: mk([55, 50, 40, 25, 45, 70, 55], 45, 70, "Graft and capture are real but bounded: brokers skim and programme places are rationed politically, yet the state's institutions are not systematically bent. The rot that matters is sclerosis — entitlements and organisations no government could reallocate — and it proved removable at the polls (2015, 2023)."),
    mexico: mk([55, 50, 45, 40, 45, 45, 35], 60, 65, "Lower than the PRI's own peak: rules-based transfers cut contingency and alternation is real. What remains is local — criminal penetration of state and municipal politics and violence around elections, both widely documented — which keeps suppression and leakage above the other large Latin American cases."),
    brazil: mk([60, 55, 40, 25, 40, 60, 35], 55, 75, "Patronage runs through legislators' budget amendments and coalition-building, with recurrent corruption scandals. Courts, prosecutors and the press are strong enough to expose and sometimes punish, and voters do remove incumbents, so reversibility stays high."),
    india: mk([60, 55, 55, 35, 45, 55, 40], 60, 70, "Discretion over jobs, licences and welfare is widespread and dynasties are common in party leadership. But state and national governments change hands regularly, courts and a free press bite, and the exchange is spread across many channels, so leakage is moderate and reversibility high."),
    indonesia: mk([70, 55, 55, 35, 45, 55, 45], 65, 65, "Candidate-owned networks make campaigns expensive, and the cost is repaid in permits and contracts: high graft and capture, with oligarchs inside the coalition. Elections are competitive and turnover is real, so the rot is pervasive but not sealed."),
    philippines: mk([80, 75, 85, 60, 50, 55, 45], 70, 50, "The highest closure here: political families hold a large share of seats and pass them on, and pork and contract rents flow to them. Violence in some provinces pushes suppression up; elections are real but reproduce the same families, which caps reversibility."),
    hungary: mk([75, 90, 55, 60, 70, 55, 60], 90, 45, "Wholesale patronage bent the institutions themselves — procurement, media, foundations and the electoral rules — so capture and leakage sit near the top. Reversibility is scored 45 because voters did remove the government in 2026; much lower would contradict that, much higher would ignore how tilted the field was."),
    russia: mk([85, 90, 70, 85, 85, 60, 85], 95, 10, "One pyramid with no mechanism for removing its head; elections deliver results through employers and officials, and suppression, feedback decay and succession risk are all high. Reversibility is near the floor because no election has removed the network in over two decades."),
    turkey: mk([65, 75, 55, 70, 65, 50, 75], 80, 35, "Retail aid and wholesale contracts reinforce each other, and prosecutions of opposition mayors since 2025 show the state tilting the field. Elections stay competitive enough that the opposition won Istanbul and Ankara, which holds reversibility above the Russian case."),
    kenya: mk([80, 65, 60, 45, 50, 65, 50], 65, 60, "Grand corruption scandals recur across governments and ethnic coalitions share the spoils; post-election violence in 2007-08 marks the suppression risk. Presidential turnover has nonetheless happened peacefully, which puts reversibility in the middle."),
    southafrica: mk([80, 85, 45, 20, 55, 65, 50], 75, 70, "Capture went deep — state companies, procurement and appointments — yet the counter-institutions worked: the Public Protector, the courts, the Zondo Commission and the press exposed and partly reversed it, and voters ended the ANC's majority in 2024. High leakage, high reversibility: the democratic case where the immune system responded."),
    lebanon: mk([85, 90, 75, 45, 65, 90, 60], 90, 20, "The sectarian settlement divides the state itself among patrons, so capture, closure and sclerosis sit near the ceiling. Elections exist but cannot dislodge the arrangement — parliament extended its own term in 2026 — so reversibility is very low even though there is no single ruler."),
    china: mk([75, 65, 75, 90, 75, 55, 80], 90, 5, "Patronage sits inside a single party with no electoral removal: the anti-corruption campaign is real discipline and factional purge at once, but it is run by the hierarchy it disciplines. Suppression and feedback decay are high; scored as a regime, not as a local machine."),
    richdemocracies: mk([30, 45, 50, 10, 35, 45, 20], 35, 85, "Patronage persists as control over appointments and, in emergencies, procurement, but courts, audit bodies, a free press and turnover make it visible and reversible. These are scores for a typical case; individual countries vary widely.")
  };
})();

// ---- additions: Nigeria and Venezuela ----
(function () {
  const add = (key, ans) => window.PAT_DEBATES.find(d => d.key === key).answers.push(ans);
  add("enforcement", { view: "Most voters take the money and vote as they please, and threats depress turnout rather than delivering votes", who: "Bratton (2008)", cases: ["nigeria"] });
  add("enforcement", { view: "A database of who signed turns a threat into a credible one: signers of the 2004 recall petition lost about 5 per cent of earnings once the list circulated", who: "Hsieh, Miguel, Ortega & Rodríguez (2011)", cases: ["venezuela"] });
  add("demand", { view: "Clients are not always the junior partner: firms awarded oil blocks kept leverage over the elite that awarded them", who: "Iwuoha (2021)", cases: ["nigeria"] });
  add("programmes", { view: "Programmes that look rules-based can still be steered: the misiones reached the very poor and were used clientelistically under electoral competition and weak constraints", who: "Penfold-Becerra (2007)", cases: ["venezuela"] });
  add("development", { view: "Oil rents do not decide the outcome by themselves: weak checks on the executive let leaders distribute rents widely and build an asymmetry of power", who: "Corrales & Penfold (2011)", cases: ["venezuela"] });
  add("stability", { view: "Sponsor-and-protégé patronage is unstable: godfathers who treat sponsorship as an investment fall out with godsons over appointments and money", who: "Albert (2005)", cases: ["nigeria"] });
  const K = ["graft", "capture", "closure", "suppression", "feedback", "sclerosis", "succession"];
  const mk = (r, leakage, reversibility, why) => ({ rot: Object.fromEntries(K.map((k, i) => [k, r[i]])), leakage, reversibility, why });
  Object.assign(window.PAT_ROT, {
    nigeria: mk([80, 75, 55, 50, 50, 60, 55], 70, 55, "Governors' budgets and oil rents fund a prebendal system in which sponsors control nominations, so graft and capture are high. The ballot is competitive enough that the ruling party lost the presidency in 2015 and 2023 was a three-way race, which keeps reversibility in the middle; violence and godfather feuds hold suppression at 50."),
    venezuela: mk([85, 85, 65, 90, 85, 60, 75], 90, 15, "Oil rents, the security services and a benefit system tied to registration and loyalty were fused with the state, and elections were not able to remove the ruling network. The head was removed by foreign force in January 2026, not by voters, and the apparatus largely survived, so reversibility stays near the floor.")
  });
})();
