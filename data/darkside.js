// ============================================================
// THE DARK SIDE — narcissism, fearless dominance and hubris
// ============================================================
// Three published lenses on the traits that make leaders bold and
// the traits that make them dangerous, which are often the same
// traits. Two come from Scott Lilienfeld's group at Emory; the third
// from David Owen, a doctor who became Foreign Secretary.
//
// 1. GRANDIOSE NARCISSISM — Watts, Lilienfeld, Smith, Miller,
//    Campbell, Waldman, Rubenzer & Faschingbauer, "The double-edged
//    sword of grandiose narcissism: Implications for successful and
//    unsuccessful leadership among U.S. presidents", Psychological
//    Science 24 (2013).
// 2. FEARLESS DOMINANCE — Lilienfeld, Waldman, Landfield, Watts,
//    Rubenzer & Faschingbauer, "Fearless dominance and the U.S.
//    presidency", Journal of Personality and Social Psychology 103
//    (2012).
//    Both re-score the expert NEO-PI-R ratings Rubenzer and
//    Faschingbauer collected (see rubenzer.js): 121 biographers and
//    specialists, 177 ratings, one to thirteen raters per president
//    (mean 4.2). Each expert rated his president's personality over
//    the five years BEFORE he took office. No clinician examined
//    anyone, and none of it is a diagnosis: these are trait estimates
//    built from facet scores with published formulas.
// 3. HUBRIS SYNDROME — Owen & Davidson, "Hubris syndrome: An acquired
//    personality disorder? A study of US Presidents and UK Prime
//    Ministers over the last 100 years", Brain 132 (2009); Owen, The
//    Hubris Syndrome: Bush, Blair and the Intoxication of Power (2007)
//    and In Sickness and in Power (2008, rev. 2016); Owen, "Hubris
//    syndrome", Clinical Medicine 8 (2008). Not a score: a
//    clinical-style judgement from the biographical record, made by a
//    medically trained former Foreign Secretary and a Duke
//    psychiatrist.
//
// WHAT IS PUBLISHED. Both Lilienfeld-group papers print a Table 4
// listing all 42 presidents, Washington to George W. Bush, as mean
// z-scores ranked from highest to lowest. LEADER_DARK reproduces those
// numbers exactly, to the paper's three decimals. Rank is the position
// in the printed table; two ties are kept in the paper's order
// (B. Harrison and Pierce on narcissism, Fillmore and Polk on fearless
// dominance). Obama, Trump and Biden were never rated, so they have no
// entry. Watts's Table 4 also prints columns for NPD features and
// vulnerable narcissism; only grandiose narcissism is carried here.
// The 2012 paper's other psychopathy scores (impulsive antisociality
// and the two PCL-R-style factors) were "available from the first
// author on request" and were never published per president.
// Owen's verdicts come from Tables 2 and 3 of the 2009 paper and its
// text, with dates for Thatcher and Blair cross-checked against
// Garrard, Rentoumi, Lambert & Owen, "Linguistic biomarkers of Hubris
// syndrome", Cortex 55 (2014). Owen never itemises which of the 14
// criteria a given leader met, so every `symptoms` array is empty
// rather than guessed.
//
// CAVEATS.
//   Not nested. Each expert rated only his own president or
//   presidents, so the gap between two presidents partly reflects
//   different raters. Both papers say to compare individual means
//   with caution.
//   Before, not during. The Lilienfeld scores describe the man who
//   arrived; Owen describes what office did to him. The two can
//   disagree, and should: LBJ tops the narcissism table and gets no
//   hubris diagnosis, while George W. Bush sits eleventh and is
//   Owen's one definite American case.
//   Diagnosis at a distance. The American Psychiatric Association's
//   Goldwater rule (1973) bars its members from giving a professional
//   opinion on a public figure they have not examined. Owen and
//   Davidson concede that "any attempt to identify disorder at a
//   distance must be treated with caution", and the same applies to
//   every number here.
//   "Acquired". Owen's syndrome is something power does to a person.
//   It appears only after power has been held for a while (one to
//   nine years in his cases) and usually remits when power goes. He
//   excludes anyone with a history of major depression that could be
//   bipolar disorder, which is why Theodore Roosevelt and LBJ get "no"
//   despite obvious traits. "No" therefore means no syndrome, not no
//   hubris: every leader in his tables is marked as having hubristic
//   traits. By 2016 Owen suggested the syndrome might be better seen
//   as an acquired personality trait than a disorder.
//   Small numbers. Fourteen leaders tabled, five diagnosed, two
//   probable. In Owen and Davidson's words, conclusions from "such a
//   small sample ... have to be treated with caution".
// ============================================================

window.DARK_STUDIES = {
  narc: {
    name: "Grandiose narcissism",
    short: "Narcissism",
    cite: "Watts, Lilienfeld et al. 2013, Psychological Science",
    def: "The bold, dominant, attention-seeking form of narcissism, as against the fragile, thin-skinned 'vulnerable' form. Scored by adding up, unweighted, the NEO PI-R facets that correlate .3 or more with grandiose narcissism in Campbell and Miller's meta-analysis: extraversion facets such as assertiveness, and agreeableness facets such as modesty, reversed.",
    findings: [
      "Presidents higher in grandiose narcissism were rated greater overall in Simonton's composite of 12 historians' polls.",
      "It went with C-SPAN historians' ratings of public persuasiveness, crisis management and agenda setting, and with Siena ratings of leadership ability, willingness to take risks and imagination.",
      "On the record rather than in ratings, it went with winning the popular vote and with initiating new legislation and programmes.",
      "The dark edge: more congressional impeachment resolutions, more impeachment proceedings, more unethical behaviour, and more placing of political success over effective policy.",
      "One-term or partial-term presidents high on it were more likely to be defeated for re-election.",
      "Vulnerable narcissism predicted none of the good outcomes.",
      "Presidents score well above the general population on grandiose narcissism (d = 0.78) but not on vulnerable narcissism (d = 0.01).",
      "It has risen across the presidency from Washington to George W. Bush (p = .031), though the rise disappears once extraversion is controlled.",
      "With fearless dominance controlled, most links to historians' ratings fade, but the links to the popular vote, impeachment and unethical behaviour remain."
    ],
    units: "Mean z-scores, averaged across each president's raters, from Table 4 of the paper. They are relative to the 42 presidents, not to the general population; higher means more grandiose. Published range: 1.652 (L. B. Johnson) to −1.366 (Fillmore). Rank 1 = highest of 42."
  },
  fd: {
    name: "Fearless dominance",
    short: "Fearless dominance",
    cite: "Lilienfeld, Waldman et al. 2012, Journal of Personality and Social Psychology",
    def: "The bold face of psychopathy: social dominance, charm, physical fearlessness and immunity to anxiety, measured apart from impulsive antisociality (egocentricity, manipulativeness, poor impulse control). Estimated from the experts' 30 NEO PI-R facet scores with Ross et al.'s (2009) regression formula, which reproduces 68–79% of the variance in Psychopathic Personality Inventory scores.",
    findings: [
      "Bolder presidents were rated better overall in the 2009 C-SPAN and 2010 Siena surveys and in Simonton's 12-poll composite.",
      "It went with rated leadership, persuasiveness and communication, crisis management, congressional relations, agenda setting and willingness to take risks.",
      "On the record, it went with Simonton's six-item greatness equation, with initiating new legislation and programmes, and with being seen as a world figure. It did not predict re-election or landslides.",
      "It was unrelated to the ethical measures (moral authority, integrity, tolerating unethical subordinates, negative character) and to impeachment resolutions.",
      "The other half of psychopathy, impulsive antisociality, predicted no rated success but went with impeachment resolutions, tolerating unethical behaviour in subordinates and negative character.",
      "The link held in two British polls whose raters had no part in the personality ratings: The Times's 2008 ranking, and the 2011 USPC survey for vision and domestic leadership.",
      "Most associations survived controls for intellectual brilliance, the Big Five traits and need for power.",
      "Presidents score above the general population on fearless dominance (d = 0.42) but not on impulsive antisociality (d = 0.06).",
      "Theodore Roosevelt stands more than three standard deviations above Taft, the lowest scorer."
    ],
    units: "Mean z-scores, averaged across raters and standardised within the 42 presidents, from Table 4 of the paper. Higher means bolder. Published range: 1.462 (T. Roosevelt) to −1.579 (Taft). Rank 1 = highest of 42."
  }
};

// Per president. Every one of the 42 presidents in both papers has a
// published value and rank on both measures. Values are copied from
// the two Table 4s; non-atlas presidents carry a slug id, a name and
// inAtlas: false. Listed in order of presidency.
window.LEADER_DARK = {
  washington: { narc: -0.212, narcRank: 19, fd:  0.302, fdRank: 11, inAtlas: true },
  jadams:     { narc: -0.057, narcRank: 17, fd: -0.927, fdRank: 37, inAtlas: false, name: "John Adams" },
  jefferson:  { narc: -0.481, narcRank: 30, fd: -0.056, fdRank: 21, inAtlas: true },
  madison:    { narc: -1.088, narcRank: 36, fd: -0.355, fdRank: 25, inAtlas: false, name: "James Madison" },
  monroe:     { narc: -1.340, narcRank: 41, fd: -0.636, fdRank: 32, inAtlas: false, name: "James Monroe" },
  jqadams:    { narc: -0.425, narcRank: 27, fd: -1.234, fdRank: 41, inAtlas: false, name: "John Quincy Adams" },
  jackson:    { narc:  1.311, narcRank:  3, fd:  0.516, fdRank:  9, inAtlas: true },
  vanburen:   { narc:  0.105, narcRank: 14, fd:  0.554, fdRank:  8, inAtlas: false, name: "Martin Van Buren" },
  whharrison: { narc: -0.001, narcRank: 16, fd: -0.158, fdRank: 23, inAtlas: false, name: "William Henry Harrison" },
  tyler:      { narc:  0.277, narcRank: 12, fd:  0.283, fdRank: 13, inAtlas: false, name: "John Tyler" },
  polk:       { narc: -0.293, narcRank: 22, fd: -0.388, fdRank: 27, inAtlas: false, name: "James K. Polk" },
  taylor:     { narc:  0.238, narcRank: 13, fd:  0.671, fdRank:  6, inAtlas: false, name: "Zachary Taylor" },
  fillmore:   { narc: -1.366, narcRank: 42, fd: -0.388, fdRank: 26, inAtlas: false, name: "Millard Fillmore" },
  pierce:     { narc: -0.478, narcRank: 29, fd: -0.553, fdRank: 29, inAtlas: false, name: "Franklin Pierce" },
  buchanan:   { narc: -0.385, narcRank: 25, fd: -0.942, fdRank: 38, inAtlas: false, name: "James Buchanan" },
  lincoln:    { narc: -0.495, narcRank: 32, fd: -0.321, fdRank: 24, inAtlas: true },
  ajohnson:   { narc:  0.556, narcRank:  9, fd: -0.728, fdRank: 35, inAtlas: false, name: "Andrew Johnson" },
  grant:      { narc: -1.139, narcRank: 39, fd: -0.084, fdRank: 22, inAtlas: false, name: "Ulysses S. Grant" },
  hayes:      { narc: -0.995, narcRank: 35, fd:  0.824, fdRank:  5, inAtlas: false, name: "Rutherford B. Hayes" },
  garfield:   { narc: -0.637, narcRank: 33, fd: -0.664, fdRank: 33, inAtlas: false, name: "James A. Garfield" },
  arthur:     { narc:  0.635, narcRank:  8, fd:  0.267, fdRank: 14, inAtlas: false, name: "Chester A. Arthur" },
  cleveland:  { narc: -1.234, narcRank: 40, fd: -0.624, fdRank: 31, inAtlas: false, name: "Grover Cleveland" },
  bharrison:  { narc: -0.478, narcRank: 28, fd:  0.032, fdRank: 17, inAtlas: false, name: "Benjamin Harrison" },
  mckinley:   { narc: -0.717, narcRank: 34, fd: -0.996, fdRank: 39, inAtlas: true },
  troosevelt: { narc:  1.641, narcRank:  2, fd:  1.462, fdRank:  1, inAtlas: true },
  taft:       { narc: -1.114, narcRank: 37, fd: -1.579, fdRank: 42, inAtlas: true },
  wilson:     { narc:  0.542, narcRank: 10, fd: -0.032, fdRank: 19, inAtlas: true },
  harding:    { narc: -0.313, narcRank: 24, fd: -0.036, fdRank: 20, inAtlas: true },
  coolidge:   { narc: -1.126, narcRank: 38, fd: -1.175, fdRank: 40, inAtlas: true },
  hoover:     { narc: -0.299, narcRank: 23, fd: -0.866, fdRank: 36, inAtlas: true },
  fdr:        { narc:  0.952, narcRank:  4, fd:  1.079, fdRank:  3, inAtlas: true },
  truman:     { narc: -0.154, narcRank: 18, fd: -0.668, fdRank: 34, inAtlas: true },
  eisenhower: { narc: -0.240, narcRank: 21, fd:  0.297, fdRank: 12, inAtlas: true },
  jfk:        { narc:  0.890, narcRank:  5, fd:  1.408, fdRank:  2, inAtlas: true },
  lbj:        { narc:  1.652, narcRank:  1, fd:  0.173, fdRank: 15, inAtlas: true },
  nixon:      { narc:  0.864, narcRank:  6, fd: -0.544, fdRank: 28, inAtlas: true },
  ford:       { narc: -0.492, narcRank: 31, fd:  0.157, fdRank: 16, inAtlas: true },
  carter:     { narc: -0.220, narcRank: 20, fd:  0.007, fdRank: 18, inAtlas: true },
  reagan:     { narc:  0.085, narcRank: 15, fd:  0.912, fdRank:  4, inAtlas: true },
  ghwbush:    { narc: -0.399, narcRank: 26, fd: -0.619, fdRank: 30, inAtlas: true },
  clinton:    { narc:  0.730, narcRank:  7, fd:  0.569, fdRank:  7, inAtlas: true },
  gwbush:     { narc:  0.489, narcRank: 11, fd:  0.391, fdRank: 10, inAtlas: true }
};

// Owen & Davidson's 14 criteria, Table 1 of the 2009 paper, in their
// order and words. Seven map onto DSM-IV narcissistic personality
// disorder (1–4, 7–9), one onto antisocial (11), one onto histrionic
// (14). The other five are the ones they call unique.
window.HUBRIS_SYMPTOMS = [
  { n: 1,  short: "Sees the world as a stage for power and glory", text: "A narcissistic propensity to see their world primarily as an arena in which to exercise power and seek glory", unique: false },
  { n: 2,  short: "Acts to enhance personal image", text: "A predisposition to take actions which seem likely to cast the individual in a good light — i.e. in order to enhance image", unique: false },
  { n: 3,  short: "Disproportionate concern with image", text: "A disproportionate concern with image and presentation", unique: false },
  { n: 4,  short: "Messianic manner; exaltation", text: "A messianic manner of talking about current activities and a tendency to exaltation", unique: false },
  { n: 5,  short: "Identifies self with the nation", text: "An identification with the nation, or organisation, to the extent that the individual regards his or her outlook and interests as identical", unique: true },
  { n: 6,  short: "Third person or royal 'we'", text: "A tendency to speak in the third person or use the royal 'we'", unique: true },
  { n: 7,  short: "Excessive confidence; contempt for advice", text: "Excessive confidence in the individual's own judgement and contempt for the advice or criticism of others", unique: false },
  { n: 8,  short: "Self-belief bordering on omnipotence", text: "Exaggerated self-belief, bordering on a sense of omnipotence, in what they personally can achieve", unique: false },
  { n: 9,  short: "Answers only to History or God", text: "A belief that rather than being accountable to the mundane court of colleagues or public opinion, the court to which they answer is History or God", unique: false },
  { n: 10, short: "Certain of vindication", text: "An unshakable belief that in that court they will be vindicated", unique: true },
  { n: 11, short: "Loses contact with reality", text: "Loss of contact with reality; often associated with progressive isolation", unique: false },
  { n: 12, short: "Restless, reckless, impulsive", text: "Restlessness, recklessness and impulsiveness", unique: true },
  { n: 13, short: "Moral vision overrides practicality", text: "A tendency to allow their 'broad vision', about the moral rectitude of a proposed course, to obviate the need to consider practicality, cost or outcomes", unique: true },
  { n: 14, short: "Hubristic incompetence", text: "Hubristic incompetence, where things go wrong because too much self-confidence has led the leader not to worry about the nuts and bolts of policy", unique: false }
];

window.HUBRIS_RULE = "Owen and Davidson propose that at least 3 of the 14 criteria be present, at least one of them among the five unique ones (5, 6, 10, 12, 13), and only in someone who has held substantial power for a period and has no history of major depression that could be bipolar disorder.";

// Every atlas president or prime minister the 2009 paper classifies,
// plus Neville Chamberlain (not in the atlas) to complete the five
// diagnoses. Anthony Eden, the other non-atlas leader in Table 3, is
// marked there as having hubristic traits but not the syndrome, with
// amphetamine use explaining some of his Suez behaviour; he is left out.
window.LEADER_HUBRIS = {

  // ---------------- DIAGNOSED ----------------
  lloydgeorge: {
    owen: "diagnosed",
    inAtlas: true,
    onset: "After the 1918 election; marked by 1920–22",
    trigger: "Victory in the war and the 1918 election, which loosened the constraints on him",
    symptoms: [],
    abated: null,
    illness: "None listed in the table. Kenneth Morgan, quoted by Owen, records a 'temporary physical breakdown' in 1921–22.",
    note: "As war leader he ran a consensual War Cabinet, and daily talks with the sceptical Bonar Law at No. 11 helped curb his hubristic tendencies. After the 1918 election he pulled more and more power into No. 10; by 1920 Churchill wrote that he was virtually running the Foreign Office, and Beaverbrook and Morgan describe the arrogance and 'Caesarism' of 1921–22. Withdrawal of support by MPs forced him out.",
    src: "Owen & Davidson 2009 (Table 3); Owen 2008, Clinical Medicine"
  },
  nchamberlain: {
    owen: "diagnosed",
    inAtlas: false,
    name: "Neville Chamberlain",
    onset: "Summer 1938, a year after taking office",
    trigger: "Personal summitry with Hitler, culminating at Munich in September 1938",
    symptoms: [],
    abated: null,
    illness: "None listed in the table. After Munich he told his sister he had come nearer to a nervous breakdown 'than I have ever been in my life'.",
    note: "He had been covering for a depressed Baldwin since 1936 and developed the syndrome a year into his own premiership. He personalised power in No. 10, worked with a small group of ministers who agreed with him and marginalised the rest, and came home from Munich exultant, even triumphalist. The historian David Reynolds, quoted by Owen, likens Blair's summitry to his.",
    src: "Owen & Davidson 2009 (Table 3)"
  },
  thatcher: {
    owen: "diagnosed",
    inAtlas: true,
    onset: "1988, nine years into office",
    trigger: "A third election victory in 1987 and the loss of Whitelaw's restraining counsel; then the poll tax and Europe",
    symptoms: [],
    abated: null,
    illness: "None listed in the table.",
    note: "Owen and Davidson judge that she did not develop the syndrome until 1988, though some think she was hubristic throughout; Willie Whitelaw's counsel helped contain her traits for two terms, and she was cautious and controlled over the Falklands. After 1987 came the poll tax, a view of German reunification as a potential Fourth Reich, the royal 'we' ('We have become a grandmother') and the 'No, no, no' performance in the Commons, before her own MPs forced her out in 1990. Garrard, Owen and colleagues (2014) add a first flicker of hubris in the 1982 victory celebrations, which then subsided.",
    src: "Owen & Davidson 2009 (Table 3); Owen 2008, Clinical Medicine; Garrard, Rentoumi, Lambert & Owen 2014"
  },
  blair: {
    owen: "diagnosed",
    inAtlas: true,
    onset: "1999, two years into office",
    trigger: "NATO's bombing of Kosovo, then 9/11 and Iraq",
    symptoms: [],
    abated: "Possibly. Garrard, Owen and colleagues (2014) suggest it may have subsided by the time he left office in 2007, while noting that Blair's own memoir speaks of 'the final hubris' overwhelming him.",
    illness: "None listed in the table.",
    note: "Owen dates the start to Kosovo, when Clinton told him to 'pull himself together' and a Clinton aide accused him of 'sprinkling too much adrenalin on his cornflakes'. After 9/11 came hyperactive travel and hyperbolic speeches; over Iraq he told Parliament the intelligence was 'extensive, detailed and authoritative' a month after being told 'we know little'. His 2006 remark that judgement on Iraq is made 'by God as well' is taken as evidence the syndrome was still present then.",
    src: "Owen & Davidson 2009 (Table 3); Owen 2007; Garrard, Rentoumi, Lambert & Owen 2014"
  },
  gwbush: {
    owen: "diagnosed",
    inAtlas: true,
    onset: "2003, a little more than two years into office",
    trigger: "9/11, Afghanistan, then the decision to invade Iraq",
    symptoms: [],
    abated: null,
    illness: "A history of alcohol-related problems (Table 2).",
    note: "Owen and Davidson place the onset in the exceptional climate after the 11 September attacks. They mark the high point as 1 May 2003, the 'Mission Accomplished' appearance in flying gear on the carrier Abraham Lincoln, set against John Sawers's report to Blair ten days later of no serious planning for the aftermath in Baghdad. He is the only president in their table given a definite diagnosis.",
    src: "Owen & Davidson 2009 (Table 2); Owen 2007"
  },

  // ---------------- PROBABLE ("?" in the table) ----------------
  wilson: {
    owen: "possible",
    inAtlas: true,
    onset: "1917–19",
    trigger: "None named; Owen and Davidson suggest his developing dementia may have intensified the traits",
    symptoms: [],
    abated: null,
    illness: "Anxiety disorder, major depressive disorder, and personality change due to stroke (Table 2); cerebrovascular disease and failing memory complicate the reading.",
    note: "Marked '?' (uncertain, probable) because his cerebrovascular decline muddies the diagnosis, yet Owen and Davidson see a progression. By early 1917 he was stubbornly self-righteous and rigid, by 1918 acting to exercise authority 'without any restrictions', and at Paris he was described as secretive, petulant and paranoid, felt in Europe to be talking to the conference 'like Jesus Christ'. All of this came before his severe stroke in September 1919.",
    src: "Owen & Davidson 2009 (Table 2)"
  },
  nixon: {
    owen: "possible",
    inAtlas: true,
    onset: "Summer and autumn 1972",
    trigger: "The run-up to a 49-state re-election landslide",
    symptoms: [],
    abated: null,
    illness: "Alcohol abuse (Table 2). Owen and Davidson say depression, drink and hubris all played their part in the Watergate cover-up.",
    note: "Marked '?' because his drinking complicates the diagnosis. He behaved ever more hubristically as a second-term landslide came into view, then showed hubris and paranoia: 'the press is the enemy … the professors are the enemy', he told Kissinger in December 1972.",
    src: "Owen & Davidson 2009 (Table 2)"
  },

  // ---------------- NO SYNDROME ----------------
  troosevelt: {
    owen: "no",
    inAtlas: true,
    onset: null,
    trigger: null,
    symptoms: [],
    abated: "Not applicable, but Owen says he stayed hubristic out of office, citing the 1912 third-party run that split the Republican vote, and to the end of his life.",
    illness: "Bipolar disorder (Table 2); Davidson and colleagues (2006) judge it bipolar I, and Goodwin and Jamison call him 'chronically hypomanic'.",
    note: "Hubristic traits all his life but little sign of progression in office, and he kept his promise not to stand for a second full term. Owen and Davidson withhold the diagnosis because of the evidence of bipolar disorder.",
    src: "Owen & Davidson 2009 (Table 2)"
  },
  fdr: {
    owen: "no",
    inAtlas: true,
    onset: null,
    trigger: null,
    symptoms: [],
    abated: null,
    illness: "None listed in the table.",
    note: "In 1937 he 'came close to being taken over by hubris' when he fought and lost his battle with Congress over the plan to reorganise the judiciary and the Supreme Court. Raymond Moley described a 'kind of mental intoxication', but Owen credits his humour and a certain cynicism with keeping him moored in the democratic system.",
    src: "Owen & Davidson 2009 (Table 2)"
  },
  jfk: {
    owen: "no",
    inAtlas: true,
    onset: null,
    trigger: null,
    symptoms: [],
    abated: null,
    illness: "Addison's disease and amphetamine abuse (Table 2), with high doses of cortisone.",
    note: "Occasional hubris, above all over the Bay of Pigs in 1961, which Owen links partly to amphetamines and cortisone; an amphetamine injection before meeting Khrushchev in Vienna very likely explains his poor showing there. By the Cuban Missile Crisis his medication was under far better control and his steadiness helped defuse it.",
    src: "Owen & Davidson 2009 (Table 2)"
  },
  lbj: {
    owen: "no",
    inAtlas: true,
    onset: null,
    trigger: null,
    symptoms: [],
    abated: null,
    illness: "Bipolar I disorder (Table 2): severe depression and a family history suggestive of bipolar illness.",
    note: "The table records hubristic traits but no syndrome, because evidence of bipolar disorder rules the diagnosis out. Owen and Davidson leave open whether his megalomania was bipolar, hubristic or both.",
    src: "Owen & Davidson 2009 (Table 2)"
  },
  truman: {
    owen: "no",
    inAtlas: true,
    onset: null,
    trigger: null,
    symptoms: [],
    abated: null,
    illness: null,
    note: "Named with Eisenhower, Ford and Reagan as widely judged non-hubristic and without substantial pathology. Owen and Davidson count him, with Attlee, among the least hubristic leaders despite highly controversial decisions, and cite his firing of MacArthur as a military chief cut down to size for hubris.",
    src: "Owen & Davidson 2009"
  },
  eisenhower: {
    owen: "no",
    inAtlas: true,
    onset: null,
    trigger: null,
    symptoms: [],
    abated: null,
    illness: null,
    note: "Named with Truman, Ford and Reagan as widely judged non-hubristic and without substantial pathology.",
    src: "Owen & Davidson 2009"
  },
  ford: {
    owen: "no",
    inAtlas: true,
    onset: null,
    trigger: null,
    symptoms: [],
    abated: null,
    illness: null,
    note: "Named with Truman, Eisenhower and Reagan as widely judged non-hubristic and without substantial pathology.",
    src: "Owen & Davidson 2009"
  },
  reagan: {
    owen: "no",
    inAtlas: true,
    onset: null,
    trigger: null,
    symptoms: [],
    abated: null,
    illness: "Owen notes his Alzheimer's disease was not evident when he was examined at the Mayo Clinic in the summer of 1990, a year after he left office.",
    note: "Named with Truman, Eisenhower and Ford as widely judged non-hubristic and without substantial pathology.",
    src: "Owen & Davidson 2009"
  },
  asquith: {
    owen: "no",
    inAtlas: true,
    onset: null,
    trigger: null,
    symptoms: [],
    abated: null,
    illness: "Alcohol abuse (Table 3); his doctor warned him to cut his drinking in 1911.",
    note: "Hubristic traits but not the syndrome, and the traits were overlaid by heavy drinking. Owen quotes Haig's 1916 letter on the prime minister's appetite for 'our old brandy' at headquarters.",
    src: "Owen & Davidson 2009 (Table 3)"
  },
  churchill: {
    owen: "no",
    inAtlas: true,
    onset: null,
    trigger: null,
    symptoms: [],
    abated: null,
    illness: "Major depressive disorder with cyclothymic features (Table 3); in old age, vascular dementia and excessive alcohol.",
    note: "Where some psychiatrists see bipolar disorder, Owen and Davidson see hubristic traits and perhaps hypomania, and apply no diagnosis beyond his undoubted periodic depressions. Age, vascular dementia and drink took their toll, but there was no progression to hubris syndrome.",
    src: "Owen & Davidson 2009 (Table 3)"
  },
  baldwin: {
    owen: "no",
    inAtlas: true,
    onset: null,
    trigger: null,
    symptoms: [],
    abated: null,
    illness: "Depressed from the summer of 1936, when Chamberlain was covering for him.",
    note: "A hedged no. After naming the prime ministers who showed little tendency to hubris, Owen and Davidson add that 'less confidence can be placed on the judgement of some others, including Stanley Baldwin'.",
    src: "Owen & Davidson 2009"
  },
  attlee: {
    owen: "no",
    inAtlas: true,
    onset: null,
    trigger: null,
    symptoms: [],
    abated: null,
    illness: null,
    note: "Named among the prime ministers who showed little tendency to hubris or excessive narcissism. Owen and Davidson pair him with Truman as among the least hubristic of leaders, despite highly influential and controversial decisions at home and abroad.",
    src: "Owen & Davidson 2009"
  },
  macmillan: {
    owen: "no",
    inAtlas: true,
    onset: null,
    trigger: null,
    symptoms: [],
    abated: null,
    illness: null,
    note: "Named among the prime ministers who showed little tendency to hubris or excessive narcissism, with Campbell-Bannerman, Attlee, Douglas-Home, Callaghan and Major.",
    src: "Owen & Davidson 2009"
  }
};
