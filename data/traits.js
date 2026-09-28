// ============================================================
// TRAITS & FRAMEWORKS — the analytical vocabulary
// ============================================================
// This file is a growing library of concepts. Each SECTION is a
// category (a tile in the Traits view). Add a new category by
// appending an object here — the UI builds itself from this array.
//
// Section fields:
//   id      unique slug
//   title   category name (shown on its tile)
//   icon    an emoji for the tile
//   blurb   one-line description of the category
//   traits  the concepts inside it
//
// Concept fields:
//   key       slug. If present, the concept is TAGGABLE — it can be
//             attached to leaders (in their `tags`) and used to filter
//             the atlas. Omit `key` (or set taggable:false) for a
//             purely explanatory / diagnostic concept.
//   name      concept name
//   def       definition
//   question  the diagnostic question to ask of any leader
//   taggable  set false to keep a keyed concept out of the tag picker
// ============================================================

window.TRAIT_SECTIONS = [
  {
    id: "style",
    title: "Leadership Style",
    icon: "♚", // king
    blurb: "The register in which authority is exercised — how the leader gets others to act. Most great leaders blend two or three; the blend is the fingerprint.",
    traits: [
      { key: "charismatic", name: "Charismatic / Personalist",
        def: "Authority flows from the person — presence, oratory, myth. Powerful and fast, but hard to institutionalize and brittle at succession (Weber's core problem: routinizing charisma).",
        question: "If this person vanished tomorrow, what would be left?" },
      { key: "transformational", name: "Transformational",
        def: "Changes what followers want, not just what they do — redefines the group's identity and goals. Distinct from charisma: Atatürk had both; Deng had transformation with almost no charisma.",
        question: "Did they change the game, or just win at it?" },
      { key: "transactional", name: "Transactional / Broker",
        def: "Leadership as continuous exchange — favors, offices, tariffs, coalitions. Underrated: Bismarck, LBJ and Lula got more done than most visionaries.",
        question: "What is their currency, and who holds their debts?" },
      { key: "coercive", name: "Coercive / Autocratic",
        def: "Compliance through fear and force. Effective for speed and shock; corrodes information flow — people stop telling the leader the truth, which is usually how it ends.",
        question: "Can bad news still reach the top?" },
      { key: "collegial", name: "Collegial / Consensus",
        def: "Decisions built through genuine deliberation among near-equals — Pericles, Lincoln's cabinet, Merkel's coalitions. Slower, stickier decisions; vulnerable to groupthink (Golda 1973) without engineered dissent (JFK post-1961).",
        question: "Who can change this leader's mind, and has anyone actually done it?" },
      { key: "steward", name: "Steward / Servant",
        def: "Power held as trust for something beyond the self — the state, the law, the next generation. The tell is voluntary relinquishment: Washington, San Martín, Mandela.",
        question: "What have they given up that they could have kept?" },
      { key: "warrior", name: "Warrior-Ruler",
        def: "Legitimacy earned and renewed on the battlefield; leads from the front. The recurring failure mode: brilliance at war, no design for peace (Alexander, Bolívar).",
        question: "What happens to this leadership when the fighting stops?" }
    ]
  },
  {
    id: "structure",
    title: "Organizational Structure",
    icon: "🏛️", // classical building
    blurb: "The machine the leader builds — or inherits and bends. Structure outlasts style: the Ottoman devshirme, the Table of Ranks and the Leninist party all outlived their creators.",
    traits: [
      { key: "court", name: "Personal Court",
        def: "Power organized around physical/social proximity to the ruler — Versailles, the Forbidden City, any modern palace clique. Access is the real org chart.",
        question: "Who sees the leader daily, and what did they trade for it?" },
      { key: "feudal", name: "Feudal / Contractual",
        def: "Layered personal obligations — land or privilege for service. Cheap to run, hard to command centrally; watch how strong rulers add audit mechanisms on top (Domesday, missi dominici).",
        question: "What does the center actually control, versus rent from intermediaries?" },
      { key: "bureaucratic", name: "Bureaucratic State",
        def: "Rule through files, offices and procedure — impersonal, durable, slow. From Hammurabi's scribes to the modern civil service; the leader's challenge flips from building it to steering it (Abe's kantei reforms).",
        question: "Does the machine serve the leader, or has the leader become its clerk?" },
      { key: "meritocracy", name: "Meritocratic Service Elite",
        def: "Advancement by measured ability — Chinese examinations, the devshirme, Napoleon's marshals, Singapore's mandarins. The strongest anti-aristocratic technology ever invented; its failure mode is gaming the measure.",
        question: "What is actually being selected for — and who defined the test?" },
      { key: "partystate", name: "Party-State Apparatus",
        def: "A disciplined ideological party fused with (and above) government organs — Lenin's design, the 20th century's most consequential org innovation. Control of personnel files beats control of policy (Stalin's insight).",
        question: "Where does the party end and the state begin?" },
      { key: "cabinet", name: "Cabinet / Ministerial Government",
        def: "Formal collective executive with distributed portfolios. The interesting variable is whether it's real (Washington, Merkel) or theater around a dominant principal (Thatcher's later years).",
        question: "When did the cabinet last change the leader's decision?" },
      { key: "machine", name: "Political Machine",
        def: "Power maintained through systematic patronage — jobs, contracts, favors flowing down; votes and loyalty flowing up. Jackson's spoils, Lorenzo's Florence, coalition presidentialism in Brasília.",
        question: "What does the machine run on, and what happens when the fuel runs short?" },
      { key: "hubspoke", name: "Hub-and-Spoke",
        def: "All significant lines converge on the leader; lieutenants relate to the center, not each other. Maximizes control and information advantage (FDR), guarantees a bottleneck and a succession crisis (Napoleon, Castro).",
        question: "Can any two subordinates solve a problem without going through the top?" }
    ]
  },
  {
    id: "delegation",
    title: "Delegation Patterns",
    icon: "🕸️", // web
    blurb: "The most revealing single variable. How a leader uses subordinates exposes their theory of other people — and predicts how the regime ends.",
    traits: [
      { key: "micromanage", name: "Micromanager",
        def: "Reads everything, decides everything — Philip II drowning in paper, Frederick's cabinet orders, Churchill's 'Action This Day'. Works when the leader is genuinely the best mind in the system; catastrophic when they only think they are.",
        question: "What's the smallest decision this leader has personally made this month?" },
      { key: "dividerule", name: "Divide and Rule",
        def: "Deliberately overlapping mandates and rival subordinates so only the top can arbitrate — FDR's benign version, Stalin's lethal one, Hitler's chaotic one. Buys security at the price of coordination.",
        question: "Are subordinates competing to serve the mission, or to survive each other?" },
      { key: "viziers", name: "Trusted Vizier(s)",
        def: "One or two immensely empowered deputies — Agrippa, the Barmakids, Richelieu, Cecil. The recurring pattern: the vizier's power grows until the principal must destroy them (Harun, Henry VIII, Suleiman) or be eclipsed.",
        question: "Could the deputy survive the principal's displeasure — and vice versa?" },
      { key: "missioncommand", name: "Mission Command",
        def: "Intent set at the top, execution genuinely released — Genghis's generals a continent away, Lincoln to Grant, Reagan's 'don't interfere'. Requires trust, shared doctrine and tolerance for method-variance. Rarest and, when the people are good, strongest.",
        question: "When did a subordinate last make a major call the leader learned about afterward — and keep their job?" },
      { key: "institutional", name: "Institutional Delegation",
        def: "Authority vested in offices and procedures, not persons — succession, audit and law designed to run without the founder (Augustus, Ieyasu, Lee Kuan Yew). The only pattern that reliably survives its author.",
        question: "Has power ever transferred peacefully under rules this leader wrote?" }
    ]
  },
  {
    id: "culture",
    title: "Political Culture",
    icon: "🏛️", // building
    blurb: "The shared beliefs, rituals and expectations that decide what a people will obey and what they will not. The water the leader swims in — and sometimes reshapes.",
    traits: [
      { key: "politicalreligion", name: "Political Religion",
        def: "Ideology or the state itself made sacred — Ashoka's dhamma, revolutionary cults, Kemalist secularism as a faith. Binds populations tighter than law, and turns dissent into heresy.",
        question: "What is treated as sacred here, and who gets to define blasphemy?" },
      { key: "clientelism", name: "Patronage & Clientelism",
        def: "Loyalty exchanged for particular benefits — jobs, protection, favors — running down informal networks beneath the formal state. The default operating system of politics before (and often after) the impersonal bureaucracy.",
        question: "Do citizens relate to the state as rights-holders, or as clients of a patron?" },
      { key: "nationalism", name: "Nationalism & Identity",
        def: "The nation as the supreme political community — mobilizing, homogenizing, and defining who belongs. The 19th–21st century's most powerful legitimating force, wielded by liberators and tyrants alike.",
        question: "Whom does 'the people' include here — and whom does it silently exclude?" },
      { name: "Civic vs. Subject Culture",
        def: "Almond & Verba's spectrum: do the governed see themselves as participants who shape power (civic), or as subjects who receive it (subject/parochial)? Shapes what leadership styles even work.",
        question: "Do people expect to be consulted, commanded, or simply left alone?" },
      { name: "Sources of Legitimacy",
        def: "Blood, God, law, ballot, victory, prosperity, fear — every regime rests on a claim about why obedience is owed. Trouble comes when a leader's behavior undermines their own claim.",
        question: "Why do people obey — and what event would break that reason?" }
    ]
  },
  {
    id: "propaganda",
    title: "Propaganda & Communication",
    icon: "📯", // postal horn
    blurb: "How power talks to the governed — and manufactures the story of itself. From Ramesses' temple walls to the algorithmic feed, the medium is half the message.",
    traits: [
      { key: "propaganda", name: "State Propaganda",
        def: "The deliberate, organized shaping of mass belief in the regime's favor — Ramesses' Kadesh reliefs, Augustus' coinage and Aeneid, the 20th-century total-media state. Oldest of the arts of rule.",
        question: "What image of itself is this regime broadcasting, and what does the image conceal?" },
      { key: "spectacle", name: "Spectacle & Theater State",
        def: "Governing through staged magnificence — Versailles' etiquette, Nuremberg's rallies, the televised rally. Clifford Geertz: sometimes the ceremony is not decoration on power but the substance of it.",
        question: "What is being performed, for whom, and what would happen if the show stopped?" },
      { key: "mythmaking", name: "Myth-Making & Founding Story",
        def: "The origin legend that makes a regime feel inevitable and right — Augustus' Rome reborn, Gloriana, Uncle Ho, the Meiji restoration-as-renewal. Control the founding story, control the future's claim on the past.",
        question: "What story does this power tell about where it came from — and who wrote it?" },
      { key: "cultpersonality", name: "Cult of Personality",
        def: "The leader themselves rendered superhuman — omnipresent portrait, invented biography, engineered adoration. Stalin, Mao, and their heirs. The final stage of personalism, and usually of information collapse.",
        question: "Is it still possible, inside this system, to describe the leader as an ordinary human?" },
      { name: "Censorship & Information Control",
        def: "The suppression half of communication — what may not be said, printed, or searched. From the burning of books to the firewall; the negative space that defines the permitted message.",
        question: "What can't be said here, and how does unwelcome truth still travel?" }
    ]
  },
  {
    id: "machines",
    title: "Political Machines",
    icon: "⚙️", // gear
    blurb: "The organized apparatus that turns loyalty into power and back again — parties, patronage networks, coalition-brokerage. How leaders actually assemble and hold a durable base.",
    traits: [
      { key: "spoils", name: "Spoils & Patronage System",
        def: "Public office distributed as reward for political support — Jackson's 'to the victor belong the spoils'. Builds ferocious loyalty and, eventually, ferocious corruption; the reason civil-service reform exists.",
        question: "Are offices here filled by merit, by loyalty, or by purchase?" },
      { key: "bossism", name: "Boss & Urban Machine",
        def: "A durable local organization trading services (jobs, aid, protection) for reliable votes — Tammany Hall, the Daley machine. Democratic in form, oligarchic in operation; often the immigrant's first ladder.",
        question: "Who delivers the votes on the ground, and what do they get in return?" },
      { key: "coalitionbrokerage", name: "Coalition Brokerage",
        def: "Governing by continuously assembling a majority from fractious parts — coalition presidentialism (Lula), Cavour co-opting Garibaldi, Merkel's grand coalitions. The core craft of multiparty and federal systems.",
        question: "What is the price of the majority, and who can withdraw and collapse it?" },
      { name: "Selectorate Theory (W · S · N)",
        def: "Bueno de Mesquita's engine: every leader survives by paying a winning coalition (W, the essentials) drawn from a selectorate (S, the influentials) inside a nominal selectorate (N, the interchangeables). Small W means private goods for the few and neglect of the many; large W forces public goods because you cannot buy millions one at a time. The loyalty norm W/S — how replaceable each essential is — predicts purges, patronage, and how the reign ends. Leaders with a Power Base section on their profile are analysed through it; Survival › Selectorate has the five rules of The Dictator's Handbook, every leader's power base side by side, and the theory's propositions tested on the whole atlas.",
        question: "Whose defection would end this leader tomorrow — and how easily could each of them be replaced?" },
      { name: "Party Apparatus",
        def: "The disciplined mass party as a permanent power-machine — from cadre selection to message discipline. See also the Party-State (Structure): the apparatus can be a tool of government or a rival to it.",
        question: "Does the party choose the leader, or has the leader captured the party?" },
      { name: "Succession Machinery",
        def: "The rules and rituals for transferring power — the final exam of any machine, usually failed. Designed-against (Augustus, Ieyasu, Lee) it endures; left to chance (Alexander, Tito) the machine dies with the operator.",
        question: "What is the plan for the day after — and has it ever been rehearsed?" }
    ]
  },
  {
    id: "diagnostics",
    title: "Questions to Ask of Any Leader",
    icon: "❓", // question
    blurb: "A standing checklist for reading any biography — the questions that expose the operating system beneath the narrative.",
    traits: [
      { name: "Source of Legitimacy",
        def: "Blood, God, law, ballot, victory, prosperity, fear — every regime rests on a claim about why obedience is owed. Leaders get in trouble when their behavior undermines their own claim.",
        question: "Why do people obey — and what event would break that reason?" },
      { name: "Information Flow",
        def: "The quality of a leader's decisions is capped by the quality of what reaches them. Watch for engineered channels: Kangxi's palace memorials, Darius's inspectors, FDR's rival aides — versus courts where the messenger gets shot.",
        question: "How does unwelcome truth travel to the top, and who carried it last?" },
      { name: "Succession Design",
        def: "The final exam of leadership, usually failed. Alexander, Attila, Timur, Tito — the empire that dies with the founder is the default outcome unless explicitly engineered against (Augustus, Ieyasu, Lee).",
        question: "What is the plan for the day after — and has it ever been rehearsed?" },
      { name: "Behavior Under Crisis",
        def: "Crisis compresses character: some centralize (Zelensky's office, Lincoln's war powers), some freeze, some improvise institutions on the spot. The pre-crisis org chart rarely survives contact.",
        question: "In their worst week, did they reach for control, counsel, or scapegoats?" },
      { name: "Relationship to Power's End",
        def: "How a leader imagines leaving tells you what power is for. Voluntary exits (Washington, San Martín, Ardern) are rare enough to be data; 'indispensable' leaders manufacture the conditions of their indispensability.",
        question: "Can they imagine themselves as a private citizen — and does the system permit it?" }
    ]
  },
  {
    id: "regimes",
    title: "Regimes, Time & Survival",
    icon: "⏳", // hourglass
    blurb: "Political science on the leader's situation rather than their character — where they stand in the life of an order, how rulers without an enforcer share and hold power, and what becomes of them afterwards. The first five are scored in the atlas; the last three are lenses to apply by hand.",
    traits: [
      { name: "Political Time (Skowronek)",
        def: "Stephen Skowronek, The Politics Presidents Make (1993). A leader is either affiliated with the governing order they inherit or opposed to it, and that order is either resilient or vulnerable. The four combinations — reconstruction, articulation, preemption, disjunction — recur across U.S. history, and each has a characteristic opportunity and failure. Talent does not rescue a disjunctive leader; Hoover and Carter were among the ablest men to hold the office. Scored for 119 leaders — see the Political Time view.",
        question: "What order did they inherit — was it still working, and were they its heir or its opponent?" },
      { name: "Power-Sharing & Control (Svolik)",
        def: "Milan Svolik, The Politics of Authoritarian Rule (2012). With no independent enforcer, a dictator faces two separate problems: sharing power with the allies who could remove him (contested vs. established autocracy), and controlling the population by repression — which empowers the armed agents who do it — or by co-optation. Most dictators removed unconstitutionally are removed by insiders. Scored for 73 autocrats — see the Survival view.",
        question: "Who could remove this ruler tomorrow — and who holds the guns he uses on everyone else?" },
      { name: "Leadership Trait Analysis (Hermann)",
        def: "Margaret G. Hermann's seven traits scored at a distance from spontaneous speech — belief in control over events, need for power, conceptual complexity, self-confidence, task focus, distrust, in-group bias — combined into three questions (challenge or respect constraints; open or closed to information; problem or relationship focus) and eight styles. Scored as estimates for 72 leaders — see the Hermann mode in Temperament.",
        question: "When this leader hits a constraint, do they go through it, around it, or stop?" },
      { name: "Entry, Exit & Fate (Archigos · Goemans)",
        def: "The Archigos dataset (Goemans, Gleditsch & Chiozza) codes every leader's entry (regular or irregular) and fate after office (unpunished, exile, prison, death). Goemans's argument: leaders who expect punishment after losing power gamble harder to keep it, including by prolonging losing wars. Recorded for all 123 leaders — see the Survival view.",
        question: "What happens to this leader the day after they lose — and how does knowing that change what they do now?" },
      { name: "Stationary vs. Roving Bandit (Olson)",
        def: "Mancur Olson, 'Dictatorship, Democracy, and Development' (1993) and Power and Prosperity (2000). A roving bandit takes everything and moves on; a stationary bandit who expects to stay has an interest in his subjects' productivity, so he limits his theft and supplies order. The longer the ruler's horizon, the more he behaves like a (self-interested) government. Explains why warlords become kings — and why insecure rulers loot. His second idea, from The Rise and Decline of Nations (1982): stable societies accumulate narrow 'distributional coalitions' that slow growth until defeat or revolution sweeps them away. Scored for 122 leaders — see Survival › Bandits.",
        question: "How long did this ruler expect to stay — and did they tax like someone who meant to?" },
      { name: "Three Types of Legitimate Authority (Weber)",
        def: "Max Weber: obedience rests on tradition (it has always been so), charisma (this person is extraordinary) or legal-rational rules (the office, not the person, commands). Charisma is the revolutionary force and the unstable one; its 'routinisation' into tradition or law is the central succession problem. See also Charismatic / Personalist under Leadership Style.",
        question: "Which of the three did this leader rest on — and which did they try to convert it into before they died?" },
      { name: "Why Leaders Fight (Horowitz, Stam & Ellis)",
        def: "Michael Horowitz, Allan Stam and Cali Ellis, Why Leaders Fight (2015). Leaders' life experiences predict their belligerence: former rebels are markedly more conflict-prone; military service without combat experience is associated with more aggression than combat experience itself; age and background matter differently in different regimes. The leader, not only the state, starts wars.",
        question: "What did this leader learn about violence before they had power — and did they see it up close?" },
      { name: "Operational Code (Leites · George · Walker)",
        def: "Nathan Leites's study of the Bolshevik code, generalised by Alexander George into ten questions: five philosophical (is the political universe essentially harmonious or conflictual? is the future predictable? how much control does one have?) and five instrumental (what are the best strategies and tactics, how to manage risk, timing, the utility of means). Stephen Walker's VICS codes them from speeches. The instrumental half is the theory behind a leader's carrots and sticks.",
        question: "Does this leader believe the world is fundamentally hostile — and what does that make the best move?" }
    ]
  }
];
