// ============================================================
// LEADERSHIP TRAIT ANALYSIS — Margaret G. Hermann
// "Assessing Leadership Style: Trait Analysis", in Post (ed.),
// The Psychological Assessment of Political Leaders (2005)
// ============================================================
// Seven traits, scored "at a distance" from what a leader says —
// originally from spontaneous material such as interview answers
// and press conferences, where speechwriters cannot help.
// Hermann compares scores against a reference group of world
// leaders; here 50 = that group's norm, and each score is my
// ESTIMATE of where the leader would fall, not a coded result.
//
// The traits combine into three questions, and the answers into
// eight leadership styles:
//   1. Does the leader CHALLENGE or RESPECT constraints?
//        ← belief in ability to control events + need for power
//   2. Is the leader OPEN or CLOSED to incoming information?
//        ← conceptual complexity against self-confidence
//   3. Is the leader motivated by the PROBLEM or by RELATIONSHIPS?
//        ← task focus (in-group bias and distrust colour how they see the world)
//
// domain: "core"     — modern leader with a large record of spontaneous speech
//         "adapted"  — pre-1900 leader with letters, recorded conversation or dictation
//         "extended" — early leader whose words survive mostly through others; analogy only
// ============================================================

window.LTA_TRAITS = [
  { key: "bace", name: "Belief in ability to control events", short: "Control", def: "How far the leader believes they can influence what happens. High: takes initiative, acts on the world. Low: waits for others or the situation to move first.", high: "proactive, interventionist", low: "reactive, fatalist" },
  { key: "pwr", name: "Need for power", short: "Power", def: "The desire to establish, keep or restore influence over others. High: skilled at manipulation behind the scenes, works the room, tests limits. Low: less concerned with who gets the credit or control.", high: "dominant, manipulative, controlling", low: "delegating, empowering" },
  { key: "cc", name: "Conceptual complexity", short: "Complexity", def: "The ability to see several dimensions in a situation — to distinguish shades of grey and hold more than one explanation. High: flexible, seeks information. Low: black-and-white, decisive, sometimes rigid.", high: "nuanced, curious, ambivalent", low: "decisive, categorical" },
  { key: "sc", name: "Self-confidence", short: "Confidence", def: "The leader's sense of their own importance and ability to cope. High: stable, less swayed by context. Low: responsive to others and to the moment.", high: "self-assured, unmovable", low: "sensitive to context, needing validation" },
  { key: "ta", name: "Task focus", short: "Task", def: "Whether the leader's attention goes to solving the problem or to keeping the group together. High: the problem first. Low: morale, loyalty and relationships first.", high: "problem-solving, efficient", low: "relationship-building, group-maintaining" },
  { key: "dis", name: "Distrust of others", short: "Distrust", def: "General suspicion of others' motives — a tendency to doubt and to guard against disloyalty.", high: "suspicious, vigilant, secretive", low: "trusting, open" },
  { key: "igb", name: "In-group bias", short: "In-group", def: "How strongly the leader sees the world as 'us' against 'them' — the group's identity, culture and status placed at the centre.", high: "nationalist, identity-centred", low: "cosmopolitan, pragmatic about identity" }
];

// Hermann's eight styles, from the three questions
window.LTA_STYLES = [
  { key: "expansionistic", name: "Expansionistic", c: "challenges", o: "closed", m: "problem", def: "Focus on expanding the leader's, the government's or the nation's span of control.", color: "var(--reg-fear)" },
  { key: "evangelistic", name: "Evangelistic", c: "challenges", o: "closed", m: "relationship", def: "Focus on persuading others to join the leader's mission and mobilising them around a message.", color: "var(--era-c19)" },
  { key: "incremental", name: "Incremental", c: "challenges", o: "open", m: "problem", def: "Focus on improving the state's economy and security in steps, keeping room to manoeuvre and avoiding obstacles.", color: "var(--reg-motivate)" },
  { key: "charismatic", name: "Charismatic", c: "challenges", o: "open", m: "relationship", def: "Focus on achieving an agenda by engaging others in the process and persuading them to act.", color: "var(--era-c21)" },
  { key: "directive", name: "Directive", c: "respects", o: "closed", m: "problem", def: "Focus on guiding policy along lines consistent with the leader's own views while working within the rules.", color: "var(--reg-loyalty)" },
  { key: "consultative", name: "Consultative", c: "respects", o: "closed", m: "relationship", def: "Focus on monitoring that important others will support — or not actively oppose — what the leader wants to do.", color: "var(--era-medieval)" },
  { key: "reactive", name: "Reactive", c: "respects", o: "open", m: "problem", def: "Focus on assessing what is possible given the situation and what important constituencies will allow.", color: "var(--era-colonial)" },
  { key: "accommodative", name: "Accommodative", c: "respects", o: "open", m: "relationship", def: "Focus on reconciling differences and building consensus, empowering others and sharing accountability.", color: "var(--reg-trust)" }
];

// t: [bace, pwr, cc, sc, ta, dis, igb]  (50 = world-leader norm)
window.LEADER_LTA = {
  washington: { domain: "adapted", t: [45, 50, 50, 60, 60, 45, 50], note: "Deliberately bound himself by constitutional form and precedent; closed in the sense of settled judgement rather than rigidity — the Directive president who respected constraints he could have broken." },
  jefferson: { domain: "adapted", t: [60, 50, 85, 60, 55, 55, 60], note: "The most complex mind among the founders, working through indirection — dinners, anonymous allies, the Louisiana purchase justified against his own constitutional scruples." },
  jackson: { domain: "adapted", t: [80, 80, 35, 85, 50, 80, 80], note: "Categorical, suspicious, certain; the Bank War as a personal fight. Expansionistic in Hermann's exact sense — enlarging the presidency's reach." },
  lincoln: { domain: "adapted", t: [60, 65, 85, 55, 45, 35, 40], note: "Exceptional complexity with modest self-display, and a working method built on persuading rivals inside his own cabinet — challenge to constraints carried out by engagement." },
  mckinley: { domain: "adapted", t: [45, 45, 50, 55, 40, 30, 55], note: "A consummate reader of Congress who moved only when his coalition would follow — consultation as a method." },
  troosevelt: { domain: "core", t: [90, 80, 60, 85, 60, 45, 70], note: "Maximum belief in his capacity to shape events; the 'stewardship theory' of the presidency is the challenge to constraints written as doctrine." },
  taft: { domain: "core", t: [35, 30, 65, 45, 70, 35, 45], note: "A lawyer's respect for limits — the 'literalist' theory of the presidency — with genuine openness and little appetite for power." },
  wilson: { domain: "core", t: [75, 70, 70, 85, 45, 70, 65], note: "Self-confidence high enough to close him to advice in the League fight; his politics was a mission to be preached, not a deal to be made." },
  harding: { domain: "core", t: [25, 30, 35, 40, 25, 25, 55], note: "Relationship-first, low in confidence and initiative — delegated to friends who betrayed him." },
  coolidge: { domain: "core", t: [30, 35, 50, 60, 60, 40, 55], note: "Minimal initiative by conviction, not weakness: 'four-fifths of all our troubles would disappear if we would sit down and keep still.'" },
  hoover: { domain: "core", t: [55, 40, 60, 70, 85, 55, 50], note: "The engineer's task focus and a self-confidence that exceeded his openness — rigid when the facts turned." },
  fdr: { domain: "core", t: [85, 80, 75, 70, 45, 40, 50], note: "Deliberately open — competing advisers, overlapping jobs — and relationship-driven in execution. Hermann's Charismatic style almost by definition." },
  truman: { domain: "core", t: [55, 40, 45, 70, 65, 50, 60], note: "Decisive and task-driven within the rules — 'the buck stops here' is the Directive style's motto." },
  eisenhower: { domain: "core", t: [50, 40, 65, 65, 60, 40, 50], note: "The 'hidden hand': worked through constraints rather than against them, gathered information systematically, let others take the credit." },
  jfk: { domain: "core", t: [65, 65, 70, 70, 50, 45, 50], note: "Open to competing counsel after the Bay of Pigs — the ExComm is incremental decision-making under maximum pressure." },
  lbj: { domain: "core", t: [85, 90, 55, 55, 45, 60, 55], note: "Extreme need for power expressed through people — 'the Treatment'. Challenged every constraint by engaging, bargaining and overwhelming individuals." },
  nixon: { domain: "core", t: [70, 85, 55, 60, 65, 90, 65], note: "Very high distrust with high power need — the enemies list, the taping system. Strategic complexity in foreign policy sat beside a closed, suspicious inner world." },
  ford: { domain: "core", t: [40, 40, 50, 55, 45, 25, 45], note: "Trusting, consultative, uninterested in power for its own sake — the qualities that made him the right man to follow Nixon and a weak one to win." },
  carter: { domain: "core", t: [65, 50, 75, 65, 85, 35, 40], note: "Very high task focus — reading the details, the White House tennis court schedule — with low interest in the relationships that pass legislation." },
  reagan: { domain: "core", t: [70, 55, 30, 85, 35, 35, 65], note: "Low complexity and high confidence: a few convictions held without doubt and communicated to move people. Hermann's Evangelistic style in its most effective form." },
  ghwbush: { domain: "core", t: [45, 50, 50, 55, 45, 35, 50], note: "Personal diplomacy by telephone and handwritten note; watched carefully that important others would come along — the Gulf coalition as consultation." },
  clinton: { domain: "core", t: [70, 70, 80, 65, 35, 40, 40], note: "High complexity, very high relationship focus — the listener who could take any side of an argument and win the room." },
  gwbush: { domain: "core", t: [75, 65, 30, 85, 60, 55, 70], note: "Decisiveness as a value — 'I'm the decider' — with low complexity and very high confidence: closed to information that did not fit a decision already made." },
  obama: { domain: "core", t: [60, 55, 85, 70, 60, 40, 30], note: "The most complex speaker among modern presidents and the lowest in in-group bias; deliberation as a method, sometimes read as detachment." },
  trump: { domain: "core", t: [80, 90, 20, 95, 45, 90, 80], note: "Near-maximal self-confidence and power need, minimal complexity, very high distrust and in-group bias. Motivated by loyalty and audience more than by the problem." },
  biden: { domain: "core", t: [50, 45, 50, 60, 40, 40, 50], note: "A legislator's instincts: relationships, counting votes, checking that the caucus would follow before moving." },
  napoleon: { domain: "adapted", t: [95, 90, 60, 95, 75, 65, 60], note: "Near-maximal control belief and confidence; genuinely complex militarily but closed politically — the dictated letters leave no room for other views." },
  victoria: { domain: "adapted", t: [40, 45, 40, 65, 45, 50, 70], note: "Strong opinions pressed through her ministers rather than against them, and a sharp sense of 'us' — dynasty, empire, Church." },
  bismarck: { domain: "adapted", t: [85, 85, 80, 85, 75, 85, 70], note: "Very high complexity used strategically, very high distrust — alliance systems as a machine for keeping everyone uncertain." },
  disraeli: { domain: "adapted", t: [60, 70, 75, 65, 40, 45, 55], note: "Politics as performance and flattery — of the Queen, of the party, of the new electorate." },
  lenin: { domain: "core", t: [85, 85, 65, 85, 80, 85, 85], note: "Total belief that history could be forced, suspicion of every ally, and a party built to exclude the unreliable." },
  ataturk: { domain: "core", t: [90, 80, 65, 90, 75, 60, 80], note: "Remade a country's script, dress and calendar by decree — the challenge to constraints at its limit." },
  stalin: { domain: "core", t: [80, 95, 35, 70, 75, 98, 85], note: "The highest distrust in the index. Administrative, patient, categorical — and certain that the enemy was already inside." },
  hitler: { domain: "core", t: [90, 95, 20, 95, 40, 90, 98], note: "Minimal complexity, maximal certainty and in-group bias, motivated by mobilising a following rather than by any problem he meant to solve." },
  churchill: { domain: "core", t: [85, 80, 60, 90, 55, 45, 75], note: "Enormous self-confidence and appetite for control, closed to contrary advice once committed — which was his greatness in 1940 and his danger at Gallipoli." },
  degaulle: { domain: "core", t: [80, 80, 65, 98, 60, 70, 95], note: "The highest self-confidence here — 'a certain idea of France' — and in-group bias raised to the level of national identity." },
  mao: { domain: "core", t: [90, 95, 55, 95, 40, 90, 85], note: "Mobilisation as method: campaigns, struggle sessions, the Red Guards. The problem mattered less than keeping the revolution moving." },
  hochiminh: { domain: "core", t: [65, 60, 60, 60, 50, 55, 75], note: "Patient, flexible in means and fixed in ends — negotiated when it bought time, fought when it did not." },
  bengurion: { domain: "core", t: [80, 80, 60, 85, 70, 60, 90], note: "Statism (mamlachtiyut) imposed on every faction — the Altalena as the challenge to constraints in one afternoon." },
  nasser: { domain: "core", t: [75, 80, 45, 75, 45, 75, 90], note: "Pan-Arab mission broadcast by radio across a region — mobilisation over problem-solving, and very high suspicion of the West and of rivals." },
  nkrumah: { domain: "core", t: [75, 85, 55, 85, 40, 70, 75], note: "A mission — African unity — that outran the state he actually governed." },
  leekuanyew: { domain: "core", t: [85, 85, 80, 90, 85, 60, 75], note: "High complexity overridden by higher confidence: he gathered information widely and then decided alone, and rarely changed his mind in public." },
  tito: { domain: "core", t: [70, 80, 55, 80, 55, 65, 60], note: "Defied Stalin and survived — the challenge to constraints as a national identity." },
  goldameir: { domain: "core", t: [55, 45, 45, 70, 60, 70, 90], note: "Firm, categorical and suspicious of the Arab states' intentions — which made her unusually slow to read the signals of 1973." },
  indira: { domain: "core", t: [80, 90, 50, 80, 60, 80, 70], note: "Very high power need and distrust; the Emergency as the moment she stopped respecting any constraint." },
  deng: { domain: "core", t: [80, 75, 80, 75, 85, 55, 65], note: "'Crossing the river by feeling the stones' is Hermann's Incremental style as a slogan: challenge the constraints, one step at a time, keep options open." },
  thatcher: { domain: "core", t: [90, 80, 40, 95, 85, 60, 75], note: "Conviction politics — low complexity by choice, very high confidence and task focus. 'The lady's not for turning.'" },
  gorbachev: { domain: "core", t: [70, 55, 75, 70, 45, 25, 30], note: "Open, trusting, relationship-driven — the qualities that made glasnost possible and made him slow to see the August plotters." },
  mandela: { domain: "core", t: [60, 55, 75, 70, 35, 35, 45], note: "Challenged the constraints by engaging the enemy — the Rugby World Cup, tea with Betsie Verwoerd. Hermann's Charismatic style exactly." },
  castro: { domain: "core", t: [90, 95, 55, 95, 50, 85, 85], note: "Hours-long speeches without notes, total certainty, and suspicion justified by six hundred alleged assassination plots." },
  chiang: { domain: "core", t: [75, 85, 40, 80, 60, 85, 80], note: "Rigid, suspicious and faction-minded; distrusted his own generals as much as his enemies." },
  suharto: { domain: "adapted", t: [65, 80, 50, 85, 65, 70, 55], note: "Very high confidence and need for power with unremarkable complexity: he consulted widely and decided alone. The record is thin for Hermann's method — scripted speeches and an autobiography dictated to a ghostwriter, with little spontaneous speech — so this is an estimate by analogy." },
  parkchunghee: { domain: "adapted", t: [85, 85, 45, 85, 85, 80, 85], note: "Development as a campaign of numerical targets: very high belief in control, task focus and nationalism, with low complexity by choice and high distrust of opponents. Estimated from speeches, diaries and reported conversation, not coded from spontaneous speech." },
  goh: { domain: "core", t: [40, 40, 60, 55, 45, 30, 55], note: "The 'kinder, gentler' successor: consultation, consensus and a deliberate step back from his predecessor's style." },
  kissinger: { domain: "core", t: [75, 80, 85, 85, 70, 80, 50], note: "Very high complexity paired with equally high distrust — the secret channels were a way of keeping information to himself." },
  hueylong: { domain: "core", t: [85, 95, 55, 85, 40, 70, 60], note: "Share Our Wealth as a crusade, run by a man who wanted total control of the state that funded it." },
  rjdaley: { domain: "core", t: [75, 90, 30, 85, 70, 70, 85], note: "Very high need for power and in-group attachment — Bridgeport, the Irish, the organisation — with low complexity in public and a task focus on the city's services. The machine as a way of extending control." },
  putin: { domain: "core", t: [75, 90, 45, 80, 70, 95, 90], note: "Very high distrust — the KGB lens — and in-group bias around Russian civilisation; the style is to expand control where resistance is weakest." },
  xi: { domain: "core", t: [80, 95, 45, 85, 70, 85, 90], note: "Discipline, control and a closed inner circle; the anti-corruption campaign is need for power as a governing method." },
  merkel: { domain: "core", t: [45, 50, 85, 65, 85, 40, 30], note: "Very high complexity and task focus with little need for display — waiting, gathering information and deciding late. Hermann's Reactive style made into a virtue." },
  erdogan: { domain: "core", t: [85, 95, 35, 90, 40, 90, 95], note: "Mobilisation of a religious-conservative 'us' against a secular 'them' — Evangelistic, with very high distrust hardened by 2016." },
  abe: { domain: "core", t: [70, 65, 55, 70, 55, 55, 80], note: "A nationalist programme (constitutional revision, security laws) pursued with patience and control of appointments." },
  modi: { domain: "core", t: [85, 90, 45, 90, 55, 65, 90], note: "Centralised, confident and identity-centred; decisions such as demonetisation announced without consultation." },
  ardern: { domain: "core", t: [50, 45, 65, 65, 35, 25, 35], note: "Empathy as a governing method — Christchurch, the pandemic briefings. Hermann's Accommodative style: consensus, shared accountability." },
  zelensky: { domain: "core", t: [70, 60, 55, 80, 45, 55, 80], note: "The wartime communicator: persuading parliaments, publics and allies to join a mission is the job, and he does it daily." },
  lula: { domain: "core", t: [70, 75, 50, 80, 35, 45, 60], note: "The union negotiator who governs by personal relationships and a story about who he is." },
  jcaesar: { domain: "extended", t: [95, 90, 80, 95, 70, 35, 50], note: "Speed, certainty and clemency — low distrust was his fatal trait. The Commentaries are self-presentation, not spontaneous speech, so this is analogy." },
  marcusaurelius: { domain: "extended", t: [35, 20, 90, 45, 70, 30, 25], note: "The Meditations are the rare record of a ruler's private reasoning: very high complexity, low need for power, cosmopolitan to the core. Reactive by philosophy." },
  aurelian: { domain: "extended", t: [92, 85, 35, 92, 90, 70, 72], note: "Analogy only: almost nothing he said survives that the Historia Augusta did not write for him. The deeds read as a challenger of every constraint with a closed information loop and a pure task focus: restore the frontiers, punish the corrupt, move on. High distrust was earned; his officers were plotting, and he knew it." },
  diocletian: { domain: "extended", t: [90, 70, 72, 75, 85, 78, 80], note: "Analogy from edicts and rescripts drafted in his name. Very high belief in control, the Prices Edict assumes the market will obey, with a power need that was real but not personal, since he shared the title three ways and gave it up. Distrust built into the design: four emperors watching one another. In-group bias is the persecution and the edict against the 'Persian' Manichaeans." },
  constantine: { domain: "extended", t: [92, 92, 50, 95, 75, 60, 75], note: "His own letters survive in unusual numbers, a better record of an emperor's voice than any but Marcus's, though still analogy. Belief in control and self-confidence at the ceiling (God chose him, and he says so). Complexity is middling: he wanted theological disputes settled, not understood." },
  taizong: { domain: "extended", t: [75, 70, 80, 70, 70, 45, 55], note: "The Zhenguan Zhengyao records his conversations with his ministers — the closest pre-modern equivalent to Hermann's interview material. Institutionalised openness to criticism, with firm control of the agenda." },
  elizabeth1: { domain: "extended", t: [60, 65, 80, 75, 50, 70, 60], note: "Famous for delay, ambiguity and keeping every option open — Hermann's Incremental style exactly." },
  louis14: { domain: "extended", t: [85, 95, 50, 95, 65, 55, 90], note: "L'état c'est moi is probably apocryphal, but the Mémoires he wrote for his son are the Expansionistic style in the ruler's own words." },
  peter1: { domain: "extended", t: [95, 90, 55, 90, 85, 70, 40], note: "Relentless control belief and task focus, and — unusually for an autocrat — low in-group bias: he imported the foreign wholesale." },
  frederick2p: { domain: "extended", t: [90, 85, 85, 90, 80, 80, 60], note: "The philosopher-king with a suspicious, closed decision style: very complex, and entirely sure of himself." },
  catherine2: { domain: "extended", t: [80, 85, 80, 80, 55, 55, 45], note: "Enlightened correspondence with Voltaire and Diderot alongside patient, step-by-step accumulation of power." },
  cromwell: { domain: "extended", t: [75, 55, 55, 70, 45, 60, 90], note: "Providentialist certainty that God's cause and the army's were the same — the mission came before the constitution." }
};
