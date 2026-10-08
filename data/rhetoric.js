// ============================================================
// RHETORIC — communication, propaganda and the press
// ============================================================
// Organised for comparison rather than biography:
//   RHET_STYLES   ten recognisable ways leaders have communicated, each with
//                 its mechanism, techniques, strengths, failure modes, exemplars
//   RHET_MAP      leaders placed on three axes (my estimates):
//                   register  0 plain speech → 100 elevated oratory
//                   route     0 through the press → 100 direct to the public
//                   control   0 open, competitive media → 100 state-controlled information
//   RHET_CASES    set pieces: famous speeches and moments, analysed for technique
//   RHET_PRESS    six models of handling the press, from courting to owning it
//   RHET_CHANNELS how each new medium changed what worked
//   RHET_TOOLKIT  the vocabulary (also feeds the hover glossary)
// ============================================================

window.RHET_STYLES = [
  { key: "orator", name: "The orator", color: "var(--reg-motivate)",
    def: "Prepared, elevated speech for a chamber, a hall or a nation — rhythm, imagery and memorable lines built to be quoted.",
    mechanism: "A great speech gives an audience words for what it feels and a reason to act, and the best lines travel far beyond the room.",
    techniques: ["Anaphora and tricolon for rhythm", "Antithesis and chiasmus for quotable lines", "Long preparation of a full text", "Historical and moral framing"],
    strengths: "Defines a moment and outlives it; can carry a nation through a crisis.",
    failure: "Grandiloquence that rings hollow when deeds do not match; length (Castro's hours-long addresses); distance from ordinary speech.",
    exemplars: ["churchill", "lincoln", "jfk", "obama", "ataturk", "castro", "mandela"] },
  { key: "fireside", name: "The fireside", color: "var(--reg-trust)",
    def: "An intimate tone carried by a mass medium — speaking to millions as if to one family at a time.",
    mechanism: "The listener at home hears a person, not a crowd; explanation and reassurance build trust that rallies cannot.",
    techniques: ["Plain words and second person", "Explaining the problem before the policy", "Regular, predictable appointments", "Calm delivery"],
    strengths: "Trust and comprehension; it lowers fear in a crisis.",
    failure: "Overuse wears it out — FDR rationed his fireside chats for that reason.",
    exemplars: ["fdr", "reagan", "zelensky", "ardern", "clinton"] },
  { key: "plain", name: "The plain speaker", color: "var(--good)",
    def: "Deliberately unadorned speech: understatement, directness, and a refusal of oratorical display.",
    mechanism: "Restraint reads as honesty; when the speaker rarely raises the temperature, it matters when they do.",
    techniques: ["Short sentences, few figures", "Admitting limits and uncertainty", "Speaking from the file rather than from emotion"],
    strengths: "Credibility and endurance; it ages well.",
    failure: "Can fail to inspire or to rally in a crisis that demands a voice.",
    exemplars: ["truman", "coolidge", "merkel", "gwbush", "biden", "lula", "gorbachev"] },
  { key: "spectacle", name: "The spectacle", color: "var(--reg-fear)",
    def: "Politics as staged mass experience — rallies, light, music, uniforms, the crowd itself as the message.",
    mechanism: "Belonging is felt before it is argued; the scale of the crowd persuades those watching that the movement is unstoppable.",
    techniques: ["Choreographed rallies and set designs", "Call-and-response with the crowd", "Repetition of slogans", "Film and broadcast of the crowd"],
    strengths: "Mobilises intense loyalty and fear of being left out.",
    failure: "Rewards the already committed; in its extreme forms it served totalitarian movements.",
    exemplars: ["hitler", "nkrumah", "erdogan", "modi", "trump"] },
  { key: "press", name: "The press manager", color: "var(--reg-loyalty)",
    def: "Working through journalists — access, briefings, leaks and the daily story — rather than around them.",
    mechanism: "Whoever supplies reporters with the story they need on deadline shapes how it is told.",
    techniques: ["Regular briefings and press conferences", "Off-the-record and background guidance", "A 'line of the day'", "Strategic leaks"],
    strengths: "Shapes coverage without confrontation; builds credibility with the people who write the first draft of history.",
    failure: "Spin discovered becomes the story; and the dark versions — paid coverage, as in Bismarck's 'reptile fund' — corrupt the press.",
    exemplars: ["troosevelt", "fdr", "reagan", "thatcher", "kissinger", "bismarck", "leekuanyew"] },
  { key: "bypass", name: "The bypasser", color: "var(--accent)",
    def: "Going over the heads of the press and the intermediaries straight to the public, through whatever new channel allows it.",
    mechanism: "A direct channel removes the editor's filter and lets the leader set the agenda before anyone can frame it.",
    techniques: ["Adopting the newest medium early", "Volume and frequency", "Casting the press as an obstacle", "Speaking in the audience's own idiom"],
    strengths: "Speed and control of the agenda; an unfiltered bond with supporters.",
    failure: "Without editors, errors and excess go straight out; and casting the press as an enemy damages the institution.",
    exemplars: ["hueylong", "nasser", "trump", "modi", "indira"] },
  { key: "control", name: "The controlled information state", color: "var(--bad)",
    def: "Owning the channels: censorship, state media, repetition and the cult of the leader, so that rival versions cannot circulate.",
    mechanism: "When there is only one story, repetition makes it familiar and familiarity makes it feel true; dissent becomes invisible.",
    techniques: ["State ownership or capture of media", "Censorship and self-censorship", "The cult of personality", "In newer forms, flooding the space with contradictory claims"],
    strengths: "Near-total short-run control of what most people hear.",
    failure: "The leader stops hearing the truth too; trust collapses when reality breaks through.",
    exemplars: ["stalin", "mao", "xi", "putin", "hitler"] },
  { key: "pen", name: "The pen", color: "var(--era-c19)",
    def: "Leading through the written word — public letters, bulletins, pamphlets and memoirs that set the terms of debate.",
    mechanism: "Writing can be prepared, reread and reprinted, and a published text outlasts the news cycle that prompted it.",
    techniques: ["Public letters to make an argument", "Controlling the official account", "Writing one's own history"],
    strengths: "Precision and permanence; the record itself becomes an argument.",
    failure: "Slow, and limited to the literate; official accounts invite doubt ('to lie like a bulletin').",
    exemplars: ["lincoln", "napoleon", "lenin", "wilson", "churchill"] },
  { key: "majesty", name: "Majesty and scarcity", color: "var(--era-c20)",
    def: "Rarity as power: appearing seldom, speaking from a height, and letting the image do the work.",
    mechanism: "What is scarce is valued; a leader who is rarely heard is listened to closely when they speak.",
    techniques: ["Rare, set-piece appearances", "Controlled images", "Distance from daily politics"],
    strengths: "Authority above the fray; every appearance becomes an event.",
    failure: "Remoteness; when the image and the reality diverge, the distance makes it hard to repair.",
    exemplars: ["degaulle", "meiji", "victoria"] },
  { key: "gesture", name: "The gesture", color: "var(--era-c21)",
    def: "A single symbolic act that communicates more than any speech.",
    mechanism: "A picture of an action is understood instantly across languages and remembered for decades.",
    techniques: ["Choosing a symbol the other side owns", "Being physically present where it is risky or painful", "Saying little and letting the image speak"],
    strengths: "Cuts through division and suspicion where words would not be believed.",
    failure: "A gesture without follow-through is theatre.",
    exemplars: ["mandela", "ardern", "zelensky"] }
];

// [register, route, control, style] — my estimates, for comparison only
window.RHET_MAP = {
  lincoln: [75, 40, 10, "orator"], churchill: [95, 45, 15, "orator"], jfk: [85, 50, 10, "orator"], obama: [85, 65, 10, "orator"],
  ataturk: [80, 55, 60, "orator"], castro: [80, 85, 90, "orator"], mandela: [65, 40, 5, "gesture"],
  fdr: [45, 80, 10, "fireside"], reagan: [50, 60, 10, "fireside"], zelensky: [45, 90, 30, "fireside"], ardern: [30, 80, 5, "fireside"], clinton: [50, 60, 10, "fireside"],
  truman: [20, 40, 10, "plain"], coolidge: [25, 50, 10, "plain"], merkel: [15, 30, 5, "plain"], gwbush: [25, 45, 10, "plain"], biden: [30, 50, 10, "plain"], lula: [45, 70, 15, "plain"], gorbachev: [50, 45, 45, "plain"],
  hitler: [90, 85, 95, "spectacle"], nkrumah: [70, 75, 60, "spectacle"], erdogan: [60, 80, 75, "spectacle"],
  troosevelt: [70, 55, 10, "press"], thatcher: [55, 35, 15, "press"], kissinger: [40, 15, 20, "press"], bismarck: [50, 20, 55, "press"], leekuanyew: [60, 40, 75, "press"],
  hueylong: [40, 90, 40, "bypass"], nasser: [70, 85, 80, "bypass"], trump: [15, 95, 20, "bypass"], modi: [55, 90, 55, "bypass"], indira: [55, 70, 65, "bypass"],
  stalin: [35, 70, 100, "control"], mao: [70, 80, 100, "control"], xi: [40, 70, 95, "control"], putin: [35, 75, 85, "control"],
  napoleon: [70, 70, 75, "pen"], lenin: [60, 60, 80, "pen"], wilson: [85, 55, 45, "pen"],
  degaulle: [90, 60, 40, "majesty"], meiji: [90, 20, 60, "majesty"], victoria: [70, 20, 20, "majesty"]
};

window.RHET_CASES = [
  { id: "gettysburg", leader: "lincoln", title: "The Gettysburg Address", date: "19 November 1863", channel: "Oration, then print", style: "orator",
    quote: "…that government of the people, by the people, for the people, shall not perish from the earth.",
    context: "Asked for 'a few appropriate remarks' at the dedication of a war cemetery, after a two-hour oration by Edward Everett.",
    technique: ["Brevity: about 272 words, two to three minutes", "A tricolon to close ('of… by… for')", "Antithesis ('The world will little note… but it can never forget')", "Reframing: the war as a test of whether democracy can survive"],
    look: "How a short text reinterprets the meaning of a whole war — Garry Wills argues it redefined the nation around the Declaration's equality.",
    effect: "Little noticed at first by some, it became the most quoted speech in American history." },
  { id: "beaches", leader: "churchill", title: "We shall fight on the beaches", date: "4 June 1940", channel: "House of Commons, later read on radio", style: "orator",
    quote: "We shall fight on the beaches, we shall fight on the landing grounds…",
    context: "After the evacuation from Dunkirk, with France collapsing and invasion feared.",
    technique: ["Anaphora: 'we shall fight' repeated", "Honest bad news before resolve — he called Dunkirk a 'colossal military disaster'", "Escalating sequence of places", "Hours of preparation and a speech typed in 'psalm form'"],
    look: "The balance of candour and defiance: he does not pretend the news is good.",
    effect: "Steeled Parliament and, through press and later broadcast, the public, at the moment a negotiated peace was being discussed." },
  { id: "fireside1", leader: "fdr", title: "The first fireside chat", date: "12 March 1933", channel: "Radio", style: "fireside",
    quote: "I want to talk for a few minutes with the people of the United States about banking.",
    context: "Eight days into his presidency, during a national bank holiday and a run on the banks.",
    technique: ["Plain, conversational explanation of how banks work", "Second person — 'you' and 'your money'", "A specific, practical ask: keep your money in the reopened banks", "Calm, measured delivery"],
    look: "Explaining the mechanism, not just announcing the policy — he treats listeners as able to understand.",
    effect: "Deposits returned when the banks reopened; FDR gave some thirty such talks over twelve years, rationing them to keep their force." },
  { id: "inaugural61", leader: "jfk", title: "The 1961 inaugural address", date: "20 January 1961", channel: "Oration, television", style: "orator",
    quote: "Ask not what your country can do for you — ask what you can do for your country.",
    context: "The youngest elected president, opening the 1960s in the Cold War.",
    technique: ["Chiasmus ('ask not… ask')", "Antithesis throughout", "Generational framing ('the torch has been passed')", "Short, drafted with Ted Sorensen"],
    look: "How many lines are built as balanced pairs — that is what makes them quotable.",
    effect: "Among the most quoted inaugurals; it set the tone for a presidency defined by image." },
  { id: "debate60", leader: "nixon", title: "The first televised debate", date: "26 September 1960", channel: "Television", style: "fireside",
    quote: null,
    context: "Kennedy and Nixon met in the first televised presidential debate.",
    technique: ["Kennedy prepared for the camera, rested and made up", "Nixon, recovering from illness, looked pale and declined proper make-up"],
    look: "The medium changed the criteria: how a candidate looked became part of the argument. The often-repeated claim that radio listeners thought Nixon had won rests on thin polling evidence.",
    effect: "Kennedy gained; televised debates did not return until 1976." },
  { id: "notforturning", leader: "thatcher", title: "The lady's not for turning", date: "10 October 1980", channel: "Party conference, television", style: "press",
    quote: "You turn if you want to. The lady's not for turning.",
    context: "Under pressure for a 'U-turn' on economic policy as unemployment rose.",
    technique: ["A pun on Christopher Fry's play The Lady's Not for Burning, written in by speechwriter Ronald Millar", "Contrast ('you turn… the lady's not')", "Built for the evening news clip"],
    look: "The line is designed for television — a short, self-contained contrast that a bulletin can lift out.",
    effect: "Became the defining phrase of her premiership's resolve." },
  { id: "wall", leader: "reagan", title: "Tear down this wall", date: "12 June 1987", channel: "Speech at the Brandenburg Gate, television", style: "fireside",
    quote: "Mr. Gorbachev, tear down this wall!",
    context: "A speech in West Berlin during the late Cold War.",
    technique: ["A direct imperative to a named opponent", "The setting as message — the Gate and the Wall behind him", "Kept in over objections from State Department and NSC officials who thought it provocative"],
    look: "How the visual staging and one sentence carry the speech; most people remember nothing else from it.",
    effect: "Little immediate effect; after the Wall fell in 1989 it became an iconic line." },
  { id: "appeal18", leader: "degaulle", title: "The Appeal of 18 June", date: "18 June 1940", channel: "BBC radio from London", style: "majesty",
    quote: "Whatever happens, the flame of French resistance must not and shall not die.",
    context: "A little-known brigadier-general, just arrived in London, refused France's armistice.",
    technique: ["Radio across enemy lines", "Claiming national legitimacy from outside the country", "Framing defeat as a lost battle, not a lost war"],
    look: "Few heard it live and it was not recorded; its power grew through retelling — the founding myth of Free France.",
    effect: "Made de Gaulle the voice of resistance and, eventually, of France." },
  { id: "rivonia", leader: "mandela", title: "Statement from the dock", date: "20 April 1964", channel: "Courtroom, then press", style: "orator",
    quote: "It is an ideal which I hope to live for and to achieve. But if needs be, it is an ideal for which I am prepared to die.",
    context: "Facing a possible death sentence at the Rivonia trial.",
    technique: ["Turning a trial into a platform", "Reasoned account of why the ANC turned to sabotage", "A closing statement of principle, risking his life on the record"],
    look: "A defendant speaking past the judge to the world and to history.",
    effect: "He was sentenced to life, not death; the speech became a founding text of the struggle." },
  { id: "jersey", leader: "mandela", title: "The Springbok jersey", date: "24 June 1995", channel: "Gesture, live television", style: "gesture",
    quote: null,
    context: "The Rugby World Cup final in Johannesburg; the Springboks had been a symbol of white South Africa.",
    technique: ["Wearing the symbol of the other side", "Presence at the moment of maximum attention", "No speech needed"],
    look: "How one act addressed white South Africans' fears more effectively than any speech could.",
    effect: "One of the defining images of reconciliation." },
  { id: "perfectunion", leader: "obama", title: "A More Perfect Union", date: "18 March 2008", channel: "Speech, online video", style: "orator",
    quote: null,
    context: "A campaign crisis over sermons by his former pastor, Jeremiah Wright.",
    technique: ["Addressing a controversy at length rather than in a soundbite", "Complexity: acknowledging grievances on several sides", "Watched millions of times online — a speech that lived on YouTube"],
    look: "A long, argumentative speech used to defuse a scandal — the opposite of the soundbite instinct.",
    effect: "Steadied his campaign; widely studied as a speech on race." },
  { id: "brothers", leader: "stalin", title: "'Brothers and sisters'", date: "3 July 1941", channel: "Radio", style: "control",
    quote: "Comrades! Citizens! Brothers and sisters!",
    context: "His first broadcast after the German invasion, eleven days in.",
    technique: ["A sudden change of register — the language of family, not of party", "Appeal to nation over ideology", "Scorched-earth instructions"],
    look: "A dictator's propaganda shifting tone when the regime's survival was at stake.",
    effect: "Marked the turn to patriotic, 'Great Patriotic War' rhetoric." },
  { id: "nuremberg", leader: "hitler", title: "The Nuremberg rallies and Triumph of the Will", date: "1933–1938; film 1935", channel: "Rally, film", style: "spectacle",
    quote: null,
    context: "Annual Nazi party congresses staged as mass ritual; Leni Riefenstahl's film of the 1934 rally was released in 1935.",
    technique: ["Architecture of light and columns", "Massed ranks as the message", "Film to multiply the effect beyond those present"],
    look: "How spectacle replaces argument entirely. Studied as a warning, not a model.",
    effect: "A central instrument of the regime's propaganda." },
  { id: "suez", leader: "nasser", title: "Nationalising the canal", date: "26 July 1956", channel: "Mass rally, radio", style: "bypass",
    quote: null,
    context: "In Alexandria, after the West withdrew funding for the Aswan Dam.",
    technique: ["Announcing a decisive act live to a crowd", "The name 'de Lesseps' in the speech reportedly served as the signal for engineers to seize the canal", "Broadcast across the Arab world"],
    look: "Speech as the trigger of an action, carried by radio beyond national borders.",
    effect: "Made Nasser the hero of Arab nationalism; led to the Suez crisis." },
  { id: "nutuk", leader: "ataturk", title: "The Great Speech (Nutuk)", date: "15–20 October 1927", channel: "Party congress, then print", style: "pen",
    quote: null,
    context: "A speech of some thirty-six hours over six days to his party's congress.",
    technique: ["An exhaustive personal narrative of the war of independence", "Documents read into the record", "Published as the official history"],
    look: "A leader writing the national story with himself at its centre — at a length no one could rebut.",
    effect: "Became the canonical account of the republic's founding." },
  { id: "kyivnight", leader: "zelensky", title: "Nightly video addresses", date: "From 24 February 2022", channel: "Phone video, social media", style: "fireside",
    quote: null,
    context: "Russia's full-scale invasion; reports said he had been offered evacuation.",
    technique: ["Short videos filmed on a phone, often outdoors in Kyiv to prove he had stayed", "Regular nightly appointment", "Tailored addresses to foreign parliaments invoking their own histories"],
    look: "Presence as message: the setting answered the rumour that he had fled.",
    effect: "Rallied Ukrainians and Western publics in the first weeks of the war." },
  { id: "directline", leader: "putin", title: "Direct Line", date: "Most years from 2001", channel: "State television", style: "control",
    quote: null,
    context: "An annual televised call-in show in which Putin answers questions for hours.",
    technique: ["Staged accessibility", "Questions screened in advance", "Ordinary people's problems solved on air"],
    look: "The form of accountability without its substance — a ritual of the controlled information state.",
    effect: "A fixture of his public image." },
  { id: "twitter", leader: "trump", title: "Governing by tweet", date: "2015–2021", channel: "Social media", style: "bypass",
    quote: null,
    context: "Tens of thousands of tweets, many as president, until his account was suspended in January 2021.",
    technique: ["Setting the day's agenda before the press", "Nicknames and repetition", "Attacks on the press as 'fake news'"],
    look: "How a direct channel shifts power from editors to the speaker — and what is lost when no one edits.",
    effect: "Dominated news coverage; ended with the suspension of his account." }
];

window.RHET_PRESS = [
  { key: "court", name: "Court the press", def: "Give reporters access, time and a room of their own, and win them over.",
    cases: [
      { id: "troosevelt", how: "Made the presidency the 'bully pulpit'; the new West Wing of 1902 included a press room, and he briefed reporters freely, often while being shaved.", when: "1901–09" },
      { id: "wilson", how: "Held the first regular presidential press conferences, from 15 March 1913 — though he grew stiff and suspicious of them.", when: "1913–17" },
      { id: "fdr", how: "Nearly a thousand informal press conferences in twelve years, with rules on what could be quoted and what was background.", when: "1933–45" },
      { id: "jfk", how: "The first live televised press conferences, from January 1961, using wit before an audience of millions.", when: "1961–63" }
    ] },
  { key: "manage", name: "Manage the press", def: "Supply the story: the daily line, the briefing, the off-the-record guidance and the leak.",
    cases: [
      { id: "reagan", how: "His aides set a single 'line of the day' and staged visuals for the evening news.", when: "1981–89" },
      { id: "thatcher", how: "Her press secretary Bernard Ingham ran unattributable lobby briefings that told political journalists what she thought.", when: "1979–90" },
      { id: "kissinger", how: "Cultivated reporters with background briefings as a 'senior official'.", when: "1969–77" },
      { id: "bismarck", how: "The dark version: a secret 'reptile fund' paid for friendly coverage.", when: "1868–90" }
    ] },
  { key: "ration", name: "Ration the press", def: "Appear seldom and on your own terms; make every appearance an event.",
    cases: [
      { id: "degaulle", how: "Staged grand press conferences in the Élysée, with questions effectively arranged in advance, at which major policy was announced.", when: "1958–69" },
      { id: "eisenhower", how: "Allowed the first filmed press conference in January 1955, with his press secretary editing the footage before release.", when: "1955" }
    ] },
  { key: "bypass", name: "Bypass the press", def: "Go straight to the public through a channel the press does not control.",
    cases: [
      { id: "hueylong", how: "Radio broadcasts and his own newspaper and circulars, going around a hostile Louisiana press.", when: "1928–35" },
      { id: "nasser", how: "Voice of the Arabs radio, from 1953, carried his speeches over the heads of other Arab governments.", when: "1953–70" },
      { id: "modi", how: "A monthly radio address, Mann Ki Baat, from 2014, and very few open press conferences.", when: "2014–" },
      { id: "trump", how: "Tweets that set the news agenda directly.", when: "2015–21" }
    ] },
  { key: "attack", name: "Attack the press", def: "Treat the press as an enemy and make the fight itself the message.",
    cases: [
      { id: "nixon", how: "An 'enemies list' that included journalists, and his vice-president's attacks on the networks.", when: "1969–74" },
      { id: "trump", how: "Called the news media 'the enemy of the American people' in February 2017.", when: "2017–" }
    ] },
  { key: "own", name: "Own the press", def: "Control the channels outright through state ownership, capture or censorship.",
    cases: [
      { id: "stalin", how: "A party-state monopoly of print and radio, with censorship and a cult of the leader.", when: "1920s–53" },
      { id: "mao", how: "The People's Daily and the Little Red Book (1964); campaigns against dissent.", when: "1949–76" },
      { id: "putin", how: "Took control of the independent channel NTV in 2001, and launched the foreign channel RT in 2005.", when: "2000–" },
      { id: "xi", how: "Told state media to 'tell China's story well' and tightened controls on media and the internet.", when: "2012–" }
    ] }
];

window.RHET_CHANNELS = [
  { key: "voice", name: "Voice and print", years: "to the 1920s",
    def: "Speeches reached those in the hall; everyone else read them, often in full, in the newspapers.",
    shift: "Rewarded endurance, argument and the written word; a speech's real audience was its readers.",
    cases: [{ id: "lincoln", how: "The 1858 debates with Douglas ran three hours each and were printed in full." }, { id: "napoleon", how: "Army bulletins and his own newspapers set the story of each campaign." }, { id: "lenin", how: "The newspaper Iskra (1900) as the organiser of a party." }] },
  { key: "radio", name: "Radio", years: "1920s–1950s",
    def: "The leader's own voice in every home, live.",
    shift: "Intimacy at scale — and, in dictatorships, cheap receivers for mass propaganda.",
    cases: [{ id: "fdr", how: "The fireside chats, from 1933." }, { id: "hitler", how: "The regime subsidised cheap 'people's receivers' from 1933." }, { id: "churchill", how: "Wartime broadcasts on the BBC." }, { id: "degaulle", how: "The Appeal of 18 June 1940." }, { id: "nasser", how: "Voice of the Arabs, from 1953." }] },
  { key: "tv", name: "Television", years: "1950s–2000s",
    def: "The image joined the voice; the evening news became the arena.",
    shift: "Appearance, setting and the soundbite mattered; politics became staged for the camera.",
    cases: [{ id: "eisenhower", how: "The first filmed press conference, 1955." }, { id: "jfk", how: "The 1960 debates and live press conferences from 1961." }, { id: "reagan", how: "The 'line of the day' and visuals built for the news." }, { id: "degaulle", how: "Mastered television addresses and staged press conferences." }] },
  { key: "digital", name: "Digital and social", years: "2000s–",
    def: "Anyone can publish; the leader can reach followers directly and constantly.",
    shift: "Volume, speed and direct contact; the editor's filter weakened, and so did shared facts.",
    cases: [{ id: "obama", how: "The 2008 campaign's online organising and viral speeches." }, { id: "modi", how: "Early adoption of social media and hologram rallies in 2014." }, { id: "trump", how: "Twitter as the main channel." }, { id: "zelensky", how: "Phone videos from wartime Kyiv." }, { id: "ardern", how: "Facebook Live addresses during the pandemic." }] }
];

window.RHET_TOOLKIT = [
  { group: "Aristotle's appeals", intro: "Aristotle's Rhetoric (4th century BC) identified three ways a speaker persuades, plus the sense of timing that decides whether they work.",
    terms: [
      { term: "Ethos", def: "Persuasion through the speaker's character and credibility — why the audience should trust this person." },
      { term: "Pathos", def: "Persuasion through the audience's emotions — fear, pride, anger, hope." },
      { term: "Logos", def: "Persuasion through argument and evidence." },
      { term: "Kairos", def: "The opportune moment: saying the right thing at the right time, when the audience is ready for it." }
    ] },
  { group: "The five canons", intro: "Classical rhetoric divided the making of a speech into five stages; Churchill's hour-per-minute preparation spans all of them.",
    terms: [
      { term: "Invention", def: "Finding the arguments: what can be said on this subject to this audience." },
      { term: "Arrangement", def: "Ordering them: opening, statement, proof, refutation, close." },
      { term: "Style", def: "Choosing the words and figures." },
      { term: "Memory", def: "Committing the speech to memory — or, since the printing press, managing the text." },
      { term: "Delivery", def: "Voice, pace, gesture and presence in the moment." }
    ] },
  { group: "Figures of speech", intro: "The devices that make lines memorable — most famous political quotations use one of these.",
    terms: [
      { term: "Anaphora", def: "Repeating the same words at the start of successive clauses: 'We shall fight on the beaches, we shall fight on the landing grounds…' (Churchill, 1940)." },
      { term: "Epistrophe", def: "Repeating the same words at the end of successive clauses: '…of the people, by the people, for the people' (Lincoln, 1863)." },
      { term: "Tricolon", def: "A series of three parallel elements, the most common rhythmic unit in oratory." },
      { term: "Antithesis", def: "Setting opposites side by side in parallel form: 'The world will little note… but it can never forget…' (Lincoln)." },
      { term: "Chiasmus", def: "Reversing the order of terms in a second clause: 'Ask not what your country can do for you — ask what you can do for your country' (Kennedy, 1961)." }
    ] },
  { group: "Applause and the soundbite", intro: "Max Atkinson's studies of political speeches found that audiences clap at moments speakers build for them.",
    terms: [
      { term: "Claptrap", def: "Atkinson's term, from the original sense, for a device that invites applause — above all the contrast and the three-part list, which let the audience anticipate the end of a point." },
      { term: "Soundbite", def: "A short, self-contained line designed to be lifted into a news bulletin." },
      { term: "Line of the day", def: "A single message that a whole administration repeats in a given news cycle — a technique associated with Reagan's White House." }
    ] },
  { group: "The propaganda devices (1937)", intro: "The Institute for Propaganda Analysis, founded in 1937, taught the public to spot seven devices — illustrated in The Fine Art of Propaganda (1939) with the radio sermons of Father Coughlin.",
    terms: [
      { term: "Name-calling", def: "Attaching a bad label to a person or idea so it is rejected without examining the evidence." },
      { term: "Glittering generalities", def: "Virtue words — freedom, honour, the people — used so the audience approves without asking what is meant." },
      { term: "Transfer", def: "Borrowing the prestige of something respected (a flag, a church) for a cause." },
      { term: "Testimonial", def: "Having an admired or hated figure endorse or attack an idea." },
      { term: "Plain folks", def: "Presenting the speaker as an ordinary person who shares the audience's values." },
      { term: "Card stacking", def: "Selecting only the facts that favour one side and omitting the rest." },
      { term: "Bandwagon", def: "Urging people to join because everyone else is." }
    ] },
  { group: "Propaganda theory", intro: "How twentieth-century writers explained mass persuasion.",
    terms: [
      { term: "Manufacture of consent", def: "Walter Lippmann's phrase (Public Opinion, 1922) for the shaping of opinion by elites in a world too complex for citizens to see directly; later the title of Herman and Chomsky's critique of the media (1988)." },
      { term: "Engineering of consent", def: "Edward Bernays's term for public relations as the deliberate, scientific shaping of public opinion." },
      { term: "Agitation propaganda", def: "Jacques Ellul's term for propaganda that stirs people to action against an enemy." },
      { term: "Integration propaganda", def: "Ellul's term for the quieter, continuous propaganda that makes people conform to the society and its values." },
      { term: "Big lie", def: "The idea, from a passage in Mein Kampf where Hitler accused others of it, that a lie can be believed because it is so large; it describes Nazi propaganda itself." },
      { term: "Illusory truth effect", def: "Psychologists' finding (Hasher and colleagues, 1977) that repeated statements are rated as more likely to be true — the basis of repetition in propaganda and advertising." },
      { term: "Firehose of falsehood", def: "A RAND Corporation description (2016) of Russian state propaganda: high-volume, multichannel, rapid and repetitive, with no commitment to consistency or truth." },
      { term: "Cult of personality", def: "The glorification of the leader as an infallible, quasi-sacred figure through art, media and ritual." }
    ] },
  { group: "The press and politics", intro: "How political scientists describe the relationship between leaders, the media and the public.",
    terms: [
      { term: "Agenda-setting", def: "The finding, from McCombs and Shaw's 1968 Chapel Hill study published in 1972, that the media do not tell people what to think but strongly influence what they think about." },
      { term: "Framing", def: "Choosing which aspects of an issue to emphasise so as to promote a particular interpretation (Robert Entman, 1993)." },
      { term: "Priming", def: "The media's influence on the standards by which the public judges leaders (Iyengar and Kinder, News That Matters, 1987)." },
      { term: "Going public", def: "Samuel Kernell's term (1986) for presidents appealing directly to the public to pressure Congress, instead of bargaining privately." },
      { term: "Rhetorical presidency", def: "Jeffrey Tulis's term (1987) for the twentieth-century transformation of the presidency into an office that leads through public speech." },
      { term: "Bully pulpit", def: "Theodore Roosevelt's phrase for the presidency as a superb ('bully') platform for advocacy." }
    ] }
];

window.RHET_BOOKS = ["aristotle-rhetoric", "leith-talkin", "farnsworth-classical-rhetoric", "atkinson-masters-voices", "wills-lincoln-gettysburg", "lippmann-public-opinion", "bernays-propaganda", "ellul-propaganda", "kershaw-hitler-myth", "pomerantsev-nothing-true", "herman-chomsky-consent", "tulis-rhetorical-presidency", "kernell-going-public", "bully-pulpit"];
