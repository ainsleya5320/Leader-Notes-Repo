// ============================================================
// LEADERSHIP STYLE — Dean Keith Simonton's five factors
// ============================================================
// After Simonton, "Presidential style: Personality, biography and
// performance" (JPSP, 1988) and Why Presidents Succeed (1987).
//
// WHAT MAKES THIS DIFFERENT FROM RUBENZER. The two frameworks in
// this atlas measure different objects and should not be merged:
//
//   Rubenzer  personality TRAITS — what the person IS. Built by
//             having biographers complete NEO-PI-R inventories.
//   Simonton  leadership STYLES — what the person DOES in office.
//             Built by factor-analysing ~80 behavioural descriptors
//             drawn from biographical sources.
//
// A leader can be temperamentally warm (high Rubenzer Positive
// Emotions) and still govern without working through relationships
// (low Simonton Interpersonal). Obama is close to that case. The
// interesting leaders are the ones where trait and style diverge.
//
// DOMAIN WARNING. Simonton derived these factors from U.S.
// presidents, and several underlying items presuppose a
// constitutional electoral executive — "keeps in contact with party
// leaders", "initiates new legislation". Every entry is therefore
// marked:
//   core      a U.S. president; Simonton's actual population
//   adapted   a modern constitutional or parliamentary executive;
//             the factors transfer with little strain
//   extended  an autocrat or pre-modern ruler; the behaviour is
//             legible but we are outside the validated domain, and
//             the scores should be read as analogy not measurement
//
// Scores are 0–100 estimates in Simonton's framework. They are not
// his published factor scores, which exist only for presidents
// through the 1980s.
// ============================================================

window.SIMONTON_STYLES = [
  { key: "inter", name: "Interpersonal", color: "var(--reg-loyalty)",
    blurb: "governs through relationships",
    def: "Works the human machinery: keeps personal contact with legislators and party leaders, charms, trades, and makes decisions with the relationship in view. The style of the operator rather than the orator — it happens in rooms, not on platforms.",
    items: ["keeps in contact with party leaders", "is charming and personally persuasive", "uses personal contacts to get things done", "is flexible in negotiation"],
    greatness: "Weakly related to greatness ratings in Simonton's data — the surprise of the model. It reliably passes legislation and does not by itself make a reputation.",
    adj: ["gregarious", "charming", "clubbable", "flexible", "personally persuasive", "well-connected"],
    high: "Knows everyone, works the phone, and decides with a specific person's needs in mind.",
    low: "Governs through structure and argument; finds the schmoozing part of the job a chore." },

  { key: "charis", name: "Charismatic", color: "var(--era-c21)",
    blurb: "governs through the public",
    def: "Performance as an instrument: dynamic speaking, a flair for the dramatic, enjoyment of the ceremonial half of the office, and a direct line to the public over the heads of institutions. Simonton's items emphasise showmanship and publicity rather than magnetism in private.",
    items: ["is a dynamic and effective speaker", "has a flair for the dramatic", "enjoys the ceremonial aspects of the office", "keeps direct contact with the public"],
    greatness: "Positively related to greatness ratings, and one of the two styles Simonton found most predictive.",
    adj: ["dramatic", "magnetic", "theatrical", "rhetorical", "public-facing", "ceremonial"],
    high: "Plays to the country directly and enjoys it; the speech is the policy instrument.",
    low: "Uncomfortable on a platform; would rather send a memorandum than make a broadcast." },

  { key: "delib", name: "Deliberative", color: "var(--reg-motivate)",
    blurb: "governs through analysis",
    def: "Intellectual rigour applied to decisions: visualises alternatives, understands second-order consequences, weighs the long term, and is cautious in action. The nearest thing in the model to a measure of how a decision actually gets made.",
    items: ["understands the implications of his decisions", "is able to visualise alternatives", "weighs long-term consequences", "is cautious and conservative in action"],
    greatness: "Positively related to greatness ratings — with Charismatic, the strongest predictor in Simonton's analysis.",
    adj: ["analytical", "systematic", "far-sighted", "cautious", "rigorous", "second-order"],
    high: "Maps the options, war-games the consequences, and moves once.",
    low: "Decides from the gut and defends it afterwards; impatient with staffwork." },

  { key: "creat", name: "Creative", color: "var(--reg-trust)",
    blurb: "governs by redefining the job",
    def: "Innovation in the executive role itself: initiates new programmes and institutions, departs from precedent, and uses the powers of the office to their fullest extent — often beyond where a predecessor thought they stopped.",
    items: ["initiates new legislation and programmes", "is innovative in his role as executive", "uses the full powers of the office", "departs from precedent"],
    greatness: "Positively related to greatness ratings. It is also the style most likely to produce a constitutional argument.",
    adj: ["innovative", "precedent-breaking", "institution-building", "expansive", "unconventional"],
    high: "Leaves the office structurally different from how they found it.",
    low: "Administers the inheritance; a custodian by temperament or by choice." },

  { key: "neuro", name: "Neurotic", color: "var(--era-warlords)",
    blurb: "governs around a personal wound",
    def: "The liability factor: thin skin, defensiveness, a personal need for power, sensitivity to criticism, and the subordination of policy to the leader's own psychological requirements. Simonton's one unambiguously negative style.",
    items: ["is sensitive to criticism", "has a strong personal need for power", "places political success above effective policy", "is dominated by a single overriding trait"],
    greatness: "Negatively related to greatness ratings — the clearest negative finding in the model, and the one that most often explains a gifted presidency going wrong.",
    adj: ["thin-skinned", "defensive", "grievance-driven", "self-referential", "score-settling", "rigid"],
    high: "Policy bends around the leader's needs; criticism becomes a personal emergency.",
    low: "Absorbs attack without reorganising the government around it." }
];

// ============================================================
// THE PROFILES
// s: the five style scores. domain: core | adapted | extended.
// ============================================================

window.LEADER_STYLES = {

  // ---------------- U.S. presidents — Simonton's own population ----------------
  washington:  { domain: "core", s: { inter: 55, charis: 62, delib: 88, creat: 85, neuro: 12 },
    note: "Almost everything he did was precedent-setting, which scores as Creative even though his intent was conservative. The near-floor Neurotic reading is the whole man: he was attacked viciously in the press and did not reorganise the government around it." },
  jefferson:   { domain: "core", s: { inter: 78, charis: 30, delib: 92, creat: 82, neuro: 45 },
    note: "The clearest split in the presidential set between Interpersonal and Charismatic: he governed through dinners and through Madison while delivering exactly two public speeches in eight years." },
  jackson:     { domain: "core", s: { inter: 62, charis: 90, delib: 25, creat: 88, neuro: 78 },
    note: "Charismatic and Creative at the top, Deliberative near the bottom, and a Neurotic score driven by how much policy followed personal grievance — the Eaton affair reorganised a cabinet." },
  lincoln:     { domain: "core", s: { inter: 85, charis: 78, delib: 95, creat: 90, neuro: 18 },
    note: "The profile Simonton's model would predict for the highest-rated president: top decile on Deliberative and Creative, high Interpersonal, and almost nothing in the liability factor." },
  mckinley:    { domain: "core", s: { inter: 88, charis: 45, delib: 68, creat: 52, neuro: 22 },
    note: "A pure Interpersonal presidency — consensus assembled person by person, with none of the platform work his successor made the job's centre." },
  troosevelt:  { domain: "core", s: { inter: 75, charis: 98, delib: 60, creat: 95, neuro: 50 },
    note: "The bully pulpit is Charismatic style in its definitional form, and the stewardship theory is Creative style: he left the office structurally larger than he found it." },
  taft:        { domain: "core", s: { inter: 78, charis: 18, delib: 82, creat: 30, neuro: 30 },
    note: "High Deliberative, near-floor Charismatic and Creative — a judicial style misfiled into an executive job, and the reason the succession from Roosevelt failed." },
  wilson:      { domain: "core", s: { inter: 22, charis: 85, delib: 82, creat: 88, neuro: 88 },
    note: "The model's textbook tragedy: three strong assets undone by the fourth factor. High Neurotic rigidity turned the League fight from a negotiation into a matter of personal vindication." },
  harding:     { domain: "core", s: { inter: 95, charis: 55, delib: 15, creat: 18, neuro: 45 },
    note: "Near-ceiling Interpersonal with the floor of the set on Deliberative and Creative — the clearest demonstration that being liked by everyone is not a governing style on its own." },
  coolidge:    { domain: "core", s: { inter: 25, charis: 15, delib: 55, creat: 8, neuro: 35 },
    note: "The lowest overall style profile in the presidential set, and deliberately so. Creative at 8 is the reading of a man who believed the office should do as little as possible." },
  hoover:      { domain: "core", s: { inter: 22, charis: 10, delib: 85, creat: 62, neuro: 72 },
    note: "High Deliberative and genuinely Creative in programme terms, wrecked by the two lowest social factors in the modern set and a defensiveness that read to the country as indifference." },
  fdr:         { domain: "core", s: { inter: 95, charis: 97, delib: 62, creat: 98, neuro: 35 },
    note: "Ceiling on three of the four assets simultaneously, which no other president in the set manages. The relatively modest Deliberative score is the deliberate improvisation — try something, and if it fails admit it and try another." },
  truman:      { domain: "core", s: { inter: 72, charis: 38, delib: 70, creat: 78, neuro: 52 },
    note: "The Neurotic score is real and small-scale: he wrote furious letters, including to a music critic who reviewed his daughter's singing, and sometimes sent them." },
  eisenhower:  { domain: "core", s: { inter: 82, charis: 75, delib: 88, creat: 45, neuro: 15 },
    note: "High on everything except Creative, and that was policy: he thought the New Deal settled and his job consolidation. The near-floor Neurotic score is the hidden-hand temperament." },
  jfk:         { domain: "core", s: { inter: 85, charis: 96, delib: 75, creat: 68, neuro: 48 },
    note: "Charismatic style at nearly the presidential ceiling, and a Deliberative score that belongs to the second half of the presidency rather than the first — the Bay of Pigs and the missile crisis are different readings." },
  lbj:         { domain: "core", s: { inter: 98, charis: 32, delib: 55, creat: 96, neuro: 90 },
    note: "The widest spread in the file: the highest Interpersonal score of any president and one of the lowest Charismatic, because the talent that worked at six inches did not survive a television camera." },
  nixon:       { domain: "core", s: { inter: 20, charis: 45, delib: 85, creat: 85, neuro: 98 },
    note: "The model's definitive Neurotic presidency, and the reason the factor exists. Strategically gifted — the Deliberative and Creative scores are genuine — and destroyed entirely by the liability factor." },
  ford:        { domain: "core", s: { inter: 82, charis: 30, delib: 58, creat: 28, neuro: 15 },
    note: "High Interpersonal, low everything else, and the lowest Neurotic reading of the modern era — which was the specific quality he had been appointed for." },
  carter:      { domain: "core", s: { inter: 28, charis: 32, delib: 92, creat: 78, neuro: 70 },
    note: "Near-ceiling Deliberative with the two social factors near the floor. Simonton's model predicts exactly the presidency that followed: analytically excellent, politically isolated." },
  reagan:      { domain: "core", s: { inter: 85, charis: 98, delib: 25, creat: 80, neuro: 20 },
    note: "The mirror image of Carter, and the sharpest test of the model: Charismatic at the ceiling, Deliberative near the floor, and a far higher greatness rating." },
  ghwbush:     { domain: "core", s: { inter: 92, charis: 25, delib: 82, creat: 35, neuro: 40 },
    note: "Interpersonal diplomacy conducted by personal telephone call, with the lowest Creative score of any post-war president — 'the vision thing' is a style reading rather than a gaffe." },
  clinton:     { domain: "core", s: { inter: 98, charis: 95, delib: 82, creat: 78, neuro: 75 },
    note: "The highest combined asset profile in the set and a Neurotic score high enough to cost him half of it. Simonton's model predicts both the achievement and the self-inflicted damage." },
  gwbush:      { domain: "core", s: { inter: 78, charis: 62, delib: 30, creat: 68, neuro: 52 },
    note: "Strong Interpersonal loyalty networks and a low Deliberative score — the 'decider' framing is an explicit rejection of the deliberative style rather than a failure to achieve it." },
  obama:       { domain: "core", s: { inter: 42, charis: 92, delib: 95, creat: 78, neuro: 25 },
    note: "The instructive divergence in the file: near-ceiling Charismatic in public and a modest Interpersonal score, criticised by his own party for not working the relationships. Warmth on a platform and warmth in a room are different instruments." },
  trump:       { domain: "core", s: { inter: 55, charis: 98, delib: 10, creat: 88, neuro: 95 },
    note: "The most extreme profile in the presidential set: Charismatic at the ceiling, Deliberative at the floor, and both liability-adjacent factors maximal. Simonton's framework has no precedent for this combination in a scored president." },
  biden:       { domain: "core", s: { inter: 92, charis: 45, delib: 68, creat: 72, neuro: 45 },
    note: "A half-century of Senate relationships converted into legislative output — high Interpersonal and Creative with a Charismatic score that was never the instrument." },

  // ---------------- modern constitutional executives ----------------
  churchill:   { domain: "adapted", s: { inter: 72, charis: 96, delib: 70, creat: 88, neuro: 68 },
    note: "Charismatic style in the purest form available — the speeches were the war policy in 1940. The Neurotic score carries the grievance politics, the obsessions, and the wilderness years." },
  thatcher:    { domain: "adapted", s: { inter: 35, charis: 78, delib: 82, creat: 92, neuro: 62 },
    note: "Creative style at the top — she left the British state structurally transformed — with a low Interpersonal score that eventually cost her the cabinet that removed her." },
  degaulle:    { domain: "adapted", s: { inter: 22, charis: 92, delib: 80, creat: 90, neuro: 55 },
    note: "The lowest Interpersonal reading among major democratic leaders, by design: The Edge of the Sword argues that distance is an instrument. He wrote a constitution around his own style." },
  merkel:      { domain: "adapted", s: { inter: 68, charis: 25, delib: 96, creat: 45, neuro: 18 },
    note: "The highest Deliberative score in the file and one of the lowest Charismatic — governing as applied analysis. 'Merkeln' is a word for the deliberative style taken to its limit." },
  ardern:      { domain: "adapted", s: { inter: 88, charis: 85, delib: 62, creat: 58, neuro: 35 },
    note: "High on both social factors simultaneously, which is rare: the Christchurch response worked in the room and on the platform at once." },
  zelensky:    { domain: "adapted", s: { inter: 75, charis: 95, delib: 50, creat: 72, neuro: 35 },
    note: "A professional performer's Charismatic score, deployed at foreign parliaments because a meaningful part of his coalition sits in them." },
  lula:        { domain: "adapted", s: { inter: 96, charis: 90, delib: 55, creat: 78, neuro: 40 },
    note: "Near-ceiling on both social factors — a union negotiator's Interpersonal style scaled to coalition presidentialism, where a congressional majority has to be assembled continuously." },
  mandela:     { domain: "adapted", s: { inter: 95, charis: 92, delib: 82, creat: 85, neuro: 12 },
    note: "The strongest overall style profile in the file, and the lowest Neurotic score: a man with every warrant for grievance politics who declined to practise any." },
  gorbachev:   { domain: "adapted", s: { inter: 78, charis: 72, delib: 70, creat: 95, neuro: 45 },
    note: "Creative style near the ceiling and the clearest case of that factor's danger: he redefined the office and the state so thoroughly that neither survived the redefinition." },
  leekuanyew:  { domain: "adapted", s: { inter: 45, charis: 55, delib: 96, creat: 88, neuro: 40 },
    note: "Deliberative and Creative both near the ceiling with modest social factors — technocratic style in its most successful documented form." },
  ataturk:     { domain: "adapted", s: { inter: 55, charis: 92, delib: 62, creat: 98, neuro: 55 },
    note: "The highest Creative score in the file. Alphabet, calendar, law, dress and the caliphate itself were all redefined inside fifteen years." },
  bengurion:   { domain: "adapted", s: { inter: 58, charis: 78, delib: 72, creat: 95, neuro: 55 },
    note: "Creative style applied to founding rather than reforming — every institution of the state was an invention, including the decision to make the army a monopoly by force." },
  disraeli:    { domain: "adapted", s: { inter: 88, charis: 85, delib: 65, creat: 70, neuro: 45 },
    note: "The parliamentary Interpersonal style at its most literary: he managed the Queen, the chamber and the press as three distinct audiences." },
  goldameir:   { domain: "adapted", s: { inter: 78, charis: 62, delib: 48, creat: 55, neuro: 50 },
    note: "The kitchen cabinet is Interpersonal style institutionalised — and the low Deliberative score is the 'conception' that missed 1973." },
  tito:        { domain: "adapted", s: { inter: 75, charis: 82, delib: 82, creat: 80, neuro: 40 },
    note: "Unusually balanced across all four assets, which is most of how a federation of six quarrelling republics held together for thirty-five years." },
  hueylong:    { domain: "adapted", s: { inter: 85, charis: 96, delib: 45, creat: 90, neuro: 82 },
    note: "American demagogic style with the machinery to match: ceiling-level Charismatic and Creative, and a Neurotic score that made every obstruction a personal enemy." },
  rjdaley:     { domain: "adapted", s: { inter: 88, charis: 30, delib: 55, creat: 60, neuro: 55 },
    note: "Huey Long's opposite in style: all Interpersonal and almost no Charismatic. He governed through the committeemen, the aldermen and the wakes, and could barely give a speech." },
  kissinger:   { domain: "adapted", s: { inter: 62, charis: 68, delib: 95, creat: 85, neuro: 65 },
    note: "Not a head of government, and included because the Deliberative style has no better modern exemplar — the back-channel is deliberation conducted in private by design." },
  nasser:      { domain: "adapted", s: { inter: 68, charis: 95, delib: 50, creat: 80, neuro: 62 },
    note: "Charismatic style delivered by radio at continental scale, and a Deliberative score that the 1967 catastrophe retrospectively confirms." },
  modi:        { domain: "adapted", s: { inter: 45, charis: 90, delib: 45, creat: 82, neuro: 60 },
    note: "High Charismatic and Creative with a low Deliberative reading — demonetisation was decided in a very small room and announced to the country directly." },
  erdogan:     { domain: "adapted", s: { inter: 55, charis: 88, delib: 45, creat: 78, neuro: 72 },
    note: "Charismatic majoritarian style, with a Neurotic score that rose sharply after 2016 as criticism became prosecutable." },
  berlusconi:  { domain: "adapted", s: { inter: 85, charis: 95, delib: 35, creat: 72, neuro: 72 },
    note: "The salesman's pairing of near-ceiling Interpersonal and Charismatic styles — the dinner, the telephone call, the camera — with a low Deliberative score. The Neurotic reading carries two decades of open conflict with prosecutors, which shaped much of his legislative agenda." },
  indira:      { domain: "adapted", s: { inter: 40, charis: 78, delib: 60, creat: 72, neuro: 85 },
    note: "The Emergency is the highest-consequence Neurotic reading in a democracy in this file — an institutional suspension driven substantially by a personal legal defeat." },

  // ---------------- extended: autocrats and pre-modern rulers ----------------
  jcaesar:     { domain: "extended", s: { inter: 85, charis: 92, delib: 82, creat: 92, neuro: 30 },
    note: "Strong on all four assets and low on the liability — which is why the model cannot explain his assassination, and the Rubenzer profile can." },
  augustus:    { domain: "extended", s: { inter: 62, charis: 45, delib: 96, creat: 95, neuro: 35 },
    note: "Deliberative and Creative both near the ceiling with a modest Charismatic score — he invented an entire constitutional order and let other people be magnificent in it." },
  napoleon:    { domain: "extended", s: { inter: 65, charis: 95, delib: 78, creat: 98, neuro: 68 },
    note: "Creative style at the ceiling: the Code, the prefects, the Bank, the Légion d'honneur. The Neurotic reading rises steeply after 1810 as contradiction became intolerable." },
  taizong:     { domain: "extended", s: { inter: 72, charis: 62, delib: 95, creat: 85, neuro: 25 },
    note: "The institutionalised remonstrance system is Deliberative style built into the constitution — he made the weighing of alternatives somebody's formal job." },
  elizabeth1:  { domain: "extended", s: { inter: 78, charis: 88, delib: 90, creat: 62, neuro: 42 },
    note: "High Deliberative expressed as deliberate delay, and a Charismatic score carried by the Gloriana progresses — spectacle as a substitute for an army she could not afford." },
  louis14:     { domain: "extended", s: { inter: 55, charis: 88, delib: 72, creat: 85, neuro: 25 },
    note: "Versailles is the Charismatic style rendered in architecture, and the etiquette machine is Creative style: he redefined what a monarch's daily routine was for." },
  frederick2p: { domain: "extended", s: { inter: 30, charis: 62, delib: 88, creat: 85, neuro: 52 },
    note: "Cabinet government by written order is Deliberative style at its most extreme — and its failure mode, since the system could not survive a successor who was merely competent." },
  catherine2:  { domain: "extended", s: { inter: 78, charis: 72, delib: 85, creat: 80, neuro: 35 },
    note: "The only ruler here whose Interpersonal style ran through her correspondence with philosophers as well as her court." },
  peter1:      { domain: "extended", s: { inter: 55, charis: 78, delib: 55, creat: 98, neuro: 68 },
    note: "Creative style at the ceiling and Deliberative in the middle: he rebuilt a country by decree and personal example, frequently without working out the second-order consequences first." },
  akbar:       { domain: "extended", s: { inter: 82, charis: 72, delib: 88, creat: 92, neuro: 22 },
    note: "The mansabdari system, the religious debates and the abolition of the jizya are three separate Creative interventions, each argued through first." },
  ieyasu:      { domain: "extended", s: { inter: 52, charis: 35, delib: 96, creat: 82, neuro: 18 },
    note: "The highest Deliberative score among pre-modern rulers, and it shows in the outcome: a settlement designed to run for centuries, which did." },
  cromwell:    { domain: "extended", s: { inter: 48, charis: 75, delib: 60, creat: 85, neuro: 72 },
    note: "Creative in the destructive direction — he dissolved every constitutional form he tried and never found one that fitted, which the Neurotic score partly explains." },
  richelieu:   { domain: "extended", s: { inter: 35, charis: 45, delib: 95, creat: 90, neuro: 58 },
    note: "Raison d'état is Deliberative style elevated to doctrine: the state's interest calculated coldly and followed past religion, kinship and the given word." },
  bismarck:    { domain: "extended", s: { inter: 68, charis: 60, delib: 92, creat: 88, neuro: 78 },
    note: "High Deliberative and Creative with a Neurotic score that most historians underrate — the resignation threats, the sleeplessness, and the vendettas were a governing method." },
  lenin:       { domain: "extended", s: { inter: 45, charis: 70, delib: 82, creat: 95, neuro: 62 },
    note: "Creative style in its most consequential twentieth-century form: the vanguard party and democratic centralism were organisational inventions that outlived him by seventy years." },
  stalin:      { domain: "extended", s: { inter: 40, charis: 45, delib: 75, creat: 72, neuro: 92 },
    note: "A high Deliberative score sits oddly beside the Terror until you read the factor properly: he calculated consequences with great care, for himself." },
  mao:         { domain: "extended", s: { inter: 45, charis: 85, delib: 45, creat: 92, neuro: 88 },
    note: "Creative and Neurotic both near the ceiling, which is close to a definition of the Cultural Revolution — institutional invention driven by personal grievance against his own party." },
  hitler:      { domain: "extended", s: { inter: 30, charis: 95, delib: 25, creat: 75, neuro: 96 },
    note: "Included because omitting it would flatter the framework. Ceiling Charismatic, floor Deliberative, ceiling Neurotic — Simonton's liability factor with nothing restraining it." },
  chiang:      { domain: "extended", s: { inter: 32, charis: 45, delib: 55, creat: 52, neuro: 82 },
    note: "Low on all four assets and high on the liability — on this framework the weakest profile of any leader who held power for four decades." },
  suharto:     { domain: "extended", s: { inter: 62, charis: 30, delib: 70, creat: 65, neuro: 40 },
    note: "Low Charismatic and low Neurotic: a man who governed without oratory and rarely visibly lost his composure. The Creative score reflects institutional invention — Golkar, the party fusion, the five-year plans — rather than personal style." },
  parkchunghee: { domain: "extended", s: { inter: 35, charis: 55, delib: 65, creat: 85, neuro: 58 },
    note: "Creative near the ceiling — the export-led state, Saemaul and the heavy-industry drive were his inventions and his instruments — with a weak Interpersonal style: he governed through institutions and two rival security chiefs rather than through relationships. The Neurotic score rises after 1972, as dissent became a threat to be removed." },
  mussolini:   { domain: "extended", s: { inter: 45, charis: 97, delib: 25, creat: 78, neuro: 85 },
    note: "Charismatic at the ceiling — the balcony, the newsreel, the journalist's instinct for the day's effect — with a low Deliberative score: Ethiopia, the racial laws and the June 1940 declaration were each decided by a man who consulted little and weighed the long term less. The Creative score is the one-party state and the corporative apparatus, more announced than realised." },
  franco:      { domain: "extended", s: { inter: 40, charis: 15, delib: 70, creat: 40, neuro: 15 },
    note: "Low Charismatic and very low Neurotic: a ruler who governed through silence, delay and arbitration among the regime's 'families' rather than through oratory. The Deliberative score is the caution — Hendaye, the slow succession — not a habit of open debate." },
  salazar:     { domain: "extended", s: { inter: 25, charis: 20, delib: 85, creat: 60, neuro: 40 },
    note: "Deliberative near the ceiling and Interpersonal near the floor: decisions taken alone at the desk, after reading everything, and communicated one minister at a time. The Creative score is institutional — the 1933 constitution and the corporative state — not personal flair." },
  cixi:        { domain: "extended", s: { inter: 52, charis: 48, delib: 72, creat: 45, neuro: 75 },
    note: "Deliberative in the service of personal survival and Creative near the floor: she managed a court superbly and reformed almost nothing until it was too late." },
  putin:       { domain: "extended", s: { inter: 40, charis: 55, delib: 78, creat: 70, neuro: 65 },
    note: "The case officer's Deliberative style — patient, calculating, and increasingly degraded by the information isolation that long tenure produces." },
  xi:          { domain: "extended", s: { inter: 35, charis: 40, delib: 75, creat: 82, neuro: 55 },
    note: "Creative style applied to the Party itself: term limits abolished, leading small groups chaired personally, and an ideology inserted into the constitution under his own name." },
  deng:        { domain: "extended", s: { inter: 62, charis: 35, delib: 88, creat: 92, neuro: 25 },
    note: "Deliberative and Creative both near the ceiling with almost no Charismatic component — reform by reversible experiment, conducted by a man who never wanted the microphone." },
  victoria:    { domain: "extended", s: { inter: 55, charis: 62, delib: 45, creat: 30, neuro: 72 },
    note: "The decade of seclusion after Albert's death is a high Neurotic reading with constitutional consequences: it made republicanism a live movement." }
};
