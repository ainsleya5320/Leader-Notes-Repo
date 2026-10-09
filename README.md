# The Leadership Atlas

**Live site: https://ainsleya5320.github.io/Leader-Notes-Repo/** — a static page served by GitHub Pages; every push to `main` redeploys it within about a minute.

> Your shelf ratings, notes, insights and custom leaders live only in the browser you type them into (localStorage) and are never part of this repository. Use **Export** in the app now and then to back them up, and **Import** to move them to another browser or device.

A personal instrument for understanding political leadership — a 132-leader index read through a dozen frameworks, plus the analytical machinery to compare leaders, find the patterns across them, test hypotheses against outcomes, and record your own theses.

## Running it

From an interactive session, ask Claude to start the **leader-atlas** preview, or run manually:

```
python -m http.server 4520 --directory leader-atlas
```

then open http://localhost:4520. D3, TopoJSON, the world map and the fonts (Fraunces, Source Serif 4, Inter) are vendored in `vendor/`, so the core app works offline. Leader **portraits** are fetched live from Wikipedia when online (cached after first view); offline you get a monogram avatar.

## Layout

A left-hand navigation grouped into **Browse**, **Analyse** and **Reference**; a top bar with the **jump search** (press `/` or Ctrl/⌘-K — finds leaders, views, concepts, carrots-and-sticks tools, Rubenzer facets and books), **＋ Add leader**, export/import, and a **light/dark** switch (defaults to your system setting; the choice is remembered). Every view has its own address — `#/index`, `#/convergence`, `#/leader/napoleon` — so the browser's Back button works and any page can be bookmarked. Era chips, ★ Presidents, the text filter and concept filters sit above the three Browse views and apply to all of them.

## The views

| View | What it's for |
|---|---|
| **Index** *(home)* | A sortable register of every leader — filterable by era, concept, country, and two presidents buckets (★ **U.S. Presidents**, ☆ **Other presidents** — anyone else who held the title, from Juárez to Zelensky) — tenure, era, country, dominant Simonton style, Rubenzer composite, convergence score, how power ended, books linked. Click any column to sort; chronological order groups by era. Table or cards. Above it, a **contradiction of the day** drawn from the leaders the frameworks disagree about most. |
| **Chronicle** | Every leader on one timeline, in regional lanes (Americas, Europe, Russia & the Steppe, Middle East & North Africa, Sub-Saharan Africa, South Asia, East Asia & Pacific). **Hover a bar to light up everyone in power at the same time** — the contemporaries. Presets: all history (axis compressed before 1800), since 1400, 1800, 1900. |
| **Organizations** | Machines, parties, cadres and courts as first-class records — 44 of them, from the Roman clientela and the Janissaries to Tammany Hall, the Daley machine, the PRI, the LDP, the CPSU and the PAP. Each has its own page. Four modes: a **Catalogue** by kind, **Compare the dossiers** (see below), **The science of machines** (ten theory cards — Merton, Plunkitt, Erie, Stokes, Michels, Duverger, Kitschelt & Wilkinson, Magaloni & Greene, Svolik, Finer), and **Patterns** (patronage × discipline scatter, how machines die, lifespan by kind, which leaders built, were made by, used or fought them). See below. |
| **Map** | The world map (shading = leaders per country under the active filters) beside the chronological list. Click a country to filter. |
| **Convergence** | Do the seven frameworks agree about a leader? See below. |
| **Political Time** | Skowronek's four positions — reconstruction, articulation, preemption, disjunction — as a 2×2 of *affiliated/opposed* × *resilient/vulnerable order*, with every classified leader placed in it; the **American cycle** strip showing each governing order opening with a reconstruction and closing with a disjunction; and a table testing position against temperament, succession and fate. See below. |
| **Survival** | Four tabs. **Autocracy** — Svolik: contested vs. established power-sharing, a **repression × co-optation** scatter of 80 autocrats, the moral hazard of the armed agent, and how autocrats actually fell. **Selectorate** — Bueno de Mesquita: *The Dictator's Handbook*'s five rules matched to leaders who followed and broke them, all 132 power bases on one log-scale chart of coalition size against loyalty norm, his propositions tested on the whole atlas using each leader's estimated W, and the five books. **Bandits** — Olson: roving, settling, stationary and insecure rulers and democratic majorities, a **horizon × public goods** scatter, the markers of a short horizon, and distributional coalitions. **Entry, exit & fate** — for all 132 leaders, with Goemans's punishment hypothesis tested against the carrots-and-sticks toolkits. See below. |
| **Compare** | Structured comparison. Two leaders side by side across every vector, shared concepts highlighted. **Most similar to A** fills the second slot with the closest case by shared concepts (a most-similar-systems design — isolate the one variable that differed); **Most different** does the opposite. |
| **Patterns** | The index as a dataset. *Concept → How Power Ends*: for each concept, the succession-crisis rate and exit distribution against the **base rate**. *Era → How Power Ends*. *Concept Co-occurrence* matrix: which traits travel together, which never do (empty cells). Click any row or cell to see those leaders in the Index. All computed live from your tags and outcomes. |
| **Temperament** | The nine facets Rubenzer, Faschingbauer & Ones found predict presidential greatness, scored as **percentiles against U.S. presidents**. Five modes: a **Ranked** chart of all 106 scored leaders, re-ranked by one click on any of thirteen pills — composite, any of the three groups, or **any single facet** (rank the whole index by Activity alone, or by Tender-Mindedness alone), a **Profile chart** replicating the book's own Chart 12.2 — line, markers, group brackets, diamonds for sub-50 liabilities — with overlay for comparing two leaders, an **Anecdotes** library of 145 sourced stories that illustrate a facet at its high or low end, a **facets** reference showing definitions, adjectives and the highest and lowest on each, **Simonton styles** — a second, independent framework categorising 80 leaders by dominant leadership style — and **Hermann traits**, a third: Leadership Trait Analysis for 81 leaders, grouped into her eight styles or ranked by any of the seven traits. |
| **Carrots & Sticks** | The instruments of rule, filed by register — **trust** (getting believed), **loyalty** (binding), **fear** (deterring), **motivation** (making people act). 33 tools, each with its definition, its diagnostic question, and its **cost** — the characteristic failure mode, which is usually the useful column. Every tool lists the leaders who used it *with their specific instance*, so you can read one instrument across twenty centuries. **Creeds** mode sets what a leader *said* moved people against what they actually reached for. |
| **Patronage** | Twenty-first-century patronage in depth. **Case studies** — sixteen systems (Argentina, Mexico, Brazil, India, Indonesia, the Philippines, Hungary, Russia, Turkey, Kenya, South Africa, Lebanon, China, Nigeria, Venezuela, rich democracies), each with how it works, brokers, targeting, what particular studies found, the nuance and the trajectory, placed on scale (retail → wholesale), network (party → leader) and coercion. **Anatomy & debates** — ten concepts the literature distinguishes, seven open debates with who argues what and which cases bear on it, six lessons (my synthesis), key articles. **Typology** — the cases on two maps with computed quadrant captions. **Rot ledger** — each system scored on the party dossiers' seven kinds of decay and two axes (my estimates), charted with the party peaks as rings and ranked by entrenched rot. **Reading** — 40 books added to the Library. Linked from org pages and leader profiles. |
| **Essays** | Not a view but a profile section: long-form analytical pieces on a single leader live in `data/essays.js` (light Markdown) and render collapsed under **Essays** on that leader's page — currently Julius Caesar on Gaul and governance, and Augustus compared with Caesar (shown on both pages via `also`). |
| **Practices** | The blocking and tackling — the daily habits behind political success. **Every 19th-, 20th- and 21st-century leader (71) plus James Baker and the first worked examples: 76 people, ~533 practices**, each recording what they did, how often, why it worked, what it cost and a 'try it', tagged by who credits it (they did / witnesses / a biographer) and graded documented / reported / legend. Modes: one leader (grouped picker), **browse all** (filter every practice by category, grade, era, self-credited, or search — e.g. everyone's sleep habits), compare up to six, and the template with seven questions to ask of any biography. Linked from each leader's profile. Researched by parallel agents with web verification; where search ran short, claims were graded conservatively and doubtful stories labelled legend. |
| **Glossary** | Hover definitions everywhere: any term of art with a dotted underline shows its definition (with its framework, and every sense where a term means different things in different frameworks). Built at load from the definitions already in the framework files plus `data/glossary.js` for the rest; distinctive terms are marked on first use in running text, ordinary words only where they stand alone as labels (max eight per page). The Glossary page lists all ~200 definitions, searchable, in seven groups. |
| **Rhetoric** | Communication, propaganda and the press, organised by **style** rather than person: ten styles (orator, fireside, plain speaker, spectacle, press manager, bypasser, controlled information state, the pen, majesty and scarcity, the gesture) with mechanism, techniques, strengths, failure modes, exemplars and links to their persuasion practices; **compare** up to four styles; a **map** of 48 leaders by route (press ↔ direct) × register or control (my estimates); 68 **set pieces** analysed for technique, in date order (Cooper Union and Gettysburg to Ardern's 'They are us' and Zelensky's addresses); six models of handling **the press** (court, manage, ration, bypass, attack, own) with 56 cases; the **channels** from voice and print to social media; a **toolkit** of 38 terms (Aristotle, the figures, claptrap, the 1937 propaganda devices, Lippmann, Bernays, Ellul, agenda-setting, framing) that also feeds the hover glossary; and reading. Linked from leader profiles. |
| **Library** | Your reading index — 367 seeded books covering all 132 leaders. Shelve them (to read / reading / read / reference), rate them, and record **the one thing each taught you**. Filter by shelf, leader, or search; *Reading gaps* lists leaders with no book attached. |
| **Insights** | Your theses. Cross-cutting conclusions linked to the leaders and concepts they draw on; each also appears on those leaders' profiles. Press **＋ Insight** on any profile to start one from there. |
| **Frameworks** | The concept library, tiled by category — definitions, diagnostic questions, exemplars. |

## A leader's profile

A full page, not a pop-over. Portrait, era, outcome chips and actions (✎ Edit · ⇄ Compare · ＋ Insight · ↗ Wikipedia) at the top; a sticky section bar that follows you down the page; then **Portrait** (biography, how they led, organisation, delegation, concept tags) · **Convergence** (the five-signal panel) · **Temperament** (the nine-facet chart, bands, evidence notes, anecdotes) · **Leadership style** (Simonton) · **Trait analysis** (Hermann — style, the three questions, seven trait bars) · **Political time** (Skowronek — position, the order inherited, its characteristic failure) · **Power base** (selectorate analysis) · **Bandit & horizon** (Olson — type, horizon, take, public goods, short-horizon markers, how they raised money) · **Autocratic survival** (Svolik — power-sharing, repression vs. co-optation, the armed agent, how it ended) · **Carrots & sticks** (creed vs. practice, tools by register) · **People** (key subordinates and collaborators — indexed names are links) · **Organizations & machines** (the apparatus they built, were made by, used or fought — each links to its page) · **Reading** · **My notes**. A right-hand rail holds the vitals, **entry & exit** (how they came to power, how it ended, what happened to them afterwards), an at-a-glance summary across frameworks, **contemporaries** (whoever else held power during the same years), the most similar leaders by shared concepts, and any insights that cite this leader.

## Convergence — where the frameworks agree and contradict

Seven independent readings of a leader: **Rubenzer's traits**, **Simonton's styles**, **Hermann's trait analysis**, the **carrots and sticks** they reached for, the **selectorate** they answered to, **Svolik's** account of how they held an autocracy, and **how their power ended**. Each is asked the same five questions (not every framework can answer every one):

| Signal | Rubenzer | Simonton | Hermann | Carrots & Sticks | Power Base | Svolik | Outcome |
|---|---|---|---|---|---|---|---|
| **Rules by fear** | low Tender-Mindedness | — | distrust | fear share of their tools | small winning coalition | reliance on repression | — |
| **Rules through people** | Positive Emotions | Interpersonal | relationship focus | trust + loyalty share | — | reliance on co-optation | — |
| **Governs by thinking** | Intellectual Brilliance | Deliberative | conceptual complexity | — | — | — | — |
| **Force of personality** | Assertiveness | Charismatic | need for power | — | — | — | — |
| **Holds steady** | Not Vulnerable | low Neurotic | — | — | — | — | orderly (85) vs. crisis (15) succession |

Every reading is converted to a **percentile rank among the leaders in this atlas** who have it, so the units match. On each signal, agreement is 100 minus the gap between the highest and lowest reading; a leader's **convergence** is the mean over the signals at least two frameworks answer. Leaders qualify with three or more frameworks **and** at least three signals answered twice or more (92 at present) — agreement on only two signals is too easy. Scores run roughly 45–93 with a median near 71; green is the top fifth (78+) and red the bottom fifth (61 or below). Skowronek's political time and the fate data are deliberately *not* inputs: they describe a leader's situation and aftermath, which is what convergence should be tested against, not built from.

The view shows the six most convergent and six most contradictory leaders (each with its strips and an auto-written sentence naming the largest split), lets you judge agreement on a single signal, lists every qualifying leader in a sortable table, and asks the meta-question — **do the frameworks measure the same thing?** — by correlating each pair of readings across the whole atlas. This scoring is my construction, not any of the authors'. Treat a low score as *look here*: either one lens misreads the leader, or the leader really was two things at once.

## Temperament — the Rubenzer facets

Built on Rubenzer, Faschingbauer & Ones, *Personality, Character, and Leadership in the White House* (2004), which had presidential biographers complete NEO-PI-R instruments on their subjects and regressed historical greatness ratings on the results. Nine facets survived, in three groups, reproduced here in the book's own order (Chart 12.2).

**The scale is percentiles against U.S. presidents, not the general population.** The reference class is already extraordinary, so a 50 is the median of people who became president. Two facets are reverse-coded because the asset is the absence of the thing: *Not Vulnerable* and *Not Straightforward*.

Every entry is marked by source:

- **published** — read from the book's own chart. Only Theodore Roosevelt, and he is the anchor the rest are calibrated against (Activity ~100, Assertiveness ~99, Not Straightforward ~62, Tender-Mindedness ~42 and plotted as a liability).
- **user** — your own assessments, kept in your words (Napoleon, Julius Caesar).
Each facet carries a full definition: its NEO-PI-R source code, what it actually measures, adjective sets for the high and low ends (124 adjectives across the nine), a description of behaviour at each extreme, and — the most useful field — **what the facet is commonly misread as**. Ranking by a facet shows that whole definition above the ranking, so the numbers arrive with their meaning attached.

### Anecdotes — the evidence layer

A facet score is an assertion; an anecdote is the reason. `data/anecdotes.js` holds **114 stories across all nine facets and 64 leaders**, each tied to one facet at its **high** or **low** end — so Activity runs from Napoleon bolting meals in fifteen minutes and rising through the night to dictate, through Clinton testing how little sleep he could run on, down to Taft asleep in cabinet and Coolidge's eleven hours a day.

They appear in three places: a browsable **Anecdotes** mode filtered by the same facet pills, three **inline illustrations** on each facet card, and an **Illustrations** block on each leader's own profile showing every anecdote recorded for them, tagged by facet and end.

Seven entries are flagged **apocryphal** — Alexander weeping for want of worlds, Stalin's "one death is a tragedy", Coolidge's "you lose", Jackson on spelling. They are kept and labelled rather than dropped, because what a culture invents about a leader is evidence of a kind, just not evidence of the thing it appears to be.

The misread notes exist because these facets are routinely confused with their neighbours: Achievement Striving is *direction* while Activity is *tempo*; Competence measures the **belief** in one's capability rather than the capability (which is why Napoleon in 1812 reads high); Intellectual Brilliance is not education (Akbar was probably dyslexic and scores near the top); Assertiveness is not effectiveness (Jefferson scored low and doubled the country); and Not Straightforward is not a moral score.

- **estimate** — mine, in the same framework. **Bands are real scholarly disagreement**, not decoration: a wide band means the historians are split, and the band narrows where they aren't.

**Coverage is complete across all 132 leaders**: 106 scored, and 26 listed as *not responsibly scoreable* with the reason. Facet-level personality inference needs letters, reported speech, and eyewitness description of behaviour under stress; where the record is monuments and hostile summaries, a number would be invention. That list is information about the historical record rather than a gap in the index.

Two cautions carried in the UI. The **composite** is an unweighted mean of the nine facets — my construction, not Rubenzer's regression weights. And the model's most uncomfortable finding is load-bearing: in the presidential data, *low* candour tracks with greatness. Bill Clinton ranks first on the composite here largely because of it, which is the model working as designed rather than a bug in the scoring.

## Leadership style — Simonton's five factors

A second psychology of leadership, deliberately kept separate from the first. After Dean Keith Simonton, *Why Presidents Succeed* (1987) and "Presidential style" (JPSP, 1988), which factor-analysed some eighty behavioural descriptors of presidents into five style factors.

**The distinction is the point.** Rubenzer measures personality **traits** — what a leader *is*, from NEO-PI-R inventories. Simonton measures leadership **styles** — what a leader *does in office*, from behavioural descriptors. They are different objects, and the atlas computes where they diverge:

| Style | Governs through | Simonton on greatness |
|---|---|---|
| **Interpersonal** | relationships — contacts, charm, trades | weakly related, which is the model's surprise |
| **Charismatic** | the public — rhetoric, drama, ceremony | positively related |
| **Deliberative** | analysis — alternatives, consequences, caution | positively related |
| **Creative** | redefining the office — new programmes, precedent-breaking | positively related |
| **Neurotic** | a personal wound — thin skin, need for power | **negatively** related |

**80 leaders categorised by dominant style**: Deliberative 24, Charismatic 18, Creative 17, Interpersonal 14, Neurotic 7.

Every entry is marked for domain, because Simonton derived these factors from U.S. presidents and several underlying items assume an electoral executive ("keeps in contact with party leaders", "initiates new legislation"):

- **core** (26) — U.S. presidents, Simonton's actual population
- **adapted** (21) — modern constitutional or parliamentary executives, where the factors transfer with little strain
- **extended** (24) — autocrats and pre-modern rulers, where the behaviour is legible but we are outside the validated domain. Read as analogy, not measurement.

Scores are estimates in his framework, not his published factor scores.

## Trait analysis — Hermann's seven traits

Margaret Hermann's Leadership Trait Analysis scores seven traits from what a leader says off-script — **belief in ability to control events**, **need for power**, **conceptual complexity**, **self-confidence**, **task focus**, **distrust of others**, **in-group bias** — against a norm of world leaders (50 here). They answer three questions: does the leader *challenge or respect constraints* (control + power), are they *open or closed to information* (complexity against confidence), are they moved by *the problem or by relationships* (task focus)? The eight combinations are her eight styles — Expansionistic, Evangelistic, Incremental, Charismatic, Directive, Consultative, Reactive, Accommodative. 81 leaders, all my estimates, with a domain label for how much spontaneous speech survives (*modern*, *letters & recorded speech*, *analogy only*). Where Rubenzer says what a leader is like and Simonton what they did in office, Hermann says how they *handle* a situation.

## Political time — Skowronek

The one lens that measures position rather than person. Is the leader **affiliated** with the governing order they inherited, or **opposed** to it — and is that order **resilient** or **vulnerable**? Reconstruction (opposed, vulnerable: Jefferson, Jackson, Lincoln, FDR, Reagan — and de Gaulle, Deng, Thatcher), articulation (affiliated, resilient: TR, LBJ — the "orthodox innovator" whose innovations split the party), preemption (opposed, resilient: Wilson, Eisenhower, Nixon, Clinton, Lula — the third way, and the type most prone to impeachment), disjunction (affiliated, vulnerable: Hoover, Carter, Gorbachev, Golda Meir — able leaders in the worst chair). U.S. presidents follow Skowronek's own classifications; modern executives are my extension (the "order" is a party or constitutional regime); pre-modern rulers are read by analogy with the dynastic cycle. Contested placements (Obama, Trump, Biden, Xi, Chiang, Indira Gandhi…) are marked and argued. 127 leaders; five are outside the framework, with the reason.

## Autocratic survival — Svolik

For the 80 leaders who ruled without an independent enforcer. **Power-sharing**: contested autocracy (ruler and allies balanced) or established (the ruler can no longer be threatened), and whether the reign moved between them. **Control**: reliance on **repression** and on **co-optation**, 0–100 each. **The armed agent**: the army as the ruler's own, as a partner (the moral hazard of repression), as arbiter, or subordinated. **How it ended**: insiders, popular uprising, foreign force, natural death, voluntary exit. All my estimates in Svolik's framework, not his data.

## Selectorate — Bueno de Mesquita

The Power Base sections on every profile carry the per-leader analysis; the Survival tab puts them side by side and extends the theory across the atlas. **The five rules** of *The Dictator's Handbook* (keep W small, keep N large, control the revenue, pay the essentials just enough, never take from supporters to help the people) are each matched to leaders who followed them and who broke them — Gorbachev breaks two and fell. **The chart** plots W against W/S on log scales: the loyalty trap (Stalin, Putin, Gorbachev) at bottom left, the court (Louis XIV, Cixi, Cromwell, and Xi as his profile measures S) at top left, the democracies at top right — and Zelensky's wartime coalition landing beside Stalin's, a limit of the measure. **The propositions** are tested on every leader with a regime-type proxy (Svolik-scored autocrats as small-coalition, Olson's democratic majorities as large — the same kind of proxy the authors built W from), with tenures corrected for the dozen leaders whose dates are lifetimes. Verdicts are *consistent*, *weak or mixed*, *not consistent* or *not testable here*, and each says which inputs are recorded facts and which are my estimates. **The work**: *The War Trap* (1981), *The Logic of Political Survival* (2003), *The Predictioneer's Game* (2009), *The Dictator's Handbook* (2011), *The Invention of Power* (2022) — all in the Library.

## Bandits & horizons — Olson

Mancur Olson's founding scene of government ("Dictatorship, Democracy, and Development", 1993): a **roving bandit** takes everything and moves on; one who **settles** acquires an interest in his subjects' productivity, so he takes less than everything and supplies order. What decides behaviour is the **horizon** — a secure ruler invests, an insecure one confiscates, debases and defaults however long he has reigned. A democratic **encompassing majority**, which also earns market income, takes less still. Every ruler (131 — Kissinger never held the power to tax) is typed and scored 0–100 on **horizon**, **take** and **public goods**, with the observable **markers** (plunder, confiscation, debasement, default, forced labour on the short side; published law, sound money, public works, secure property, binding tax commitments on the long side) and **how they actually raised money**. Olson's second idea, from *The Rise and Decline of Nations* (1982), is marked where clear-cut: leaders who **swept away**, **fought**, or **governed through** distributional coalitions. All scores are my estimates; the view says plainly that correlations between them partly measure my own reading of Olson, and that the tests against outcomes are not blind because I knew how each reign ended.

## Organizations & machines

An organization outlives its leaders and serves several of them, so — like a book — it is a record of its own rather than a field on a leader. `data/organizations.js` holds 44, in five kinds: **urban & state machines** (Tammany, the Albany Regency, Daley, Pendergast, Long, Byrd, Hague, Crump, Parr), **dominant & regime parties** (PRI, LDP, PAP, CPSU, CCP, KMT, Congress, NSDAP, ANC, CHP, AKP, United Russia, Mussolini's National Fascist Party, Franco's Falange and National Movement, Salazar's National Union), **mass & clientelist parties** (BJP–RSS, Mapai and the Histadrut, Peronism, Italian Christian Democracy, Berlusconi's Forza Italia, the PT), **revolutionary & cadre organizations** (Jacobins, Viet Minh, Free Officers, 26th of July, Muslim Brotherhood) and **courts, guards & patronage networks** (Roman clientela, Praetorians, the kheshig, Janissaries, the Medici network, Versailles).

Each is read the same way — **who it mobilised**, **what it traded**, **the brokerage chain** from the top to the voter, **how it kept people in line**, **where the money came from**, **how it ended**, and **the lesson** — with estimated scores for patronage, discipline, reach and coercion, its linkage type (clientelistic, programmatic, charismatic, cadre), the leaders it touched and how (*built*, *led*, *made by*, *used*, *fought* — Truman made by Pendergast, LBJ by the Parr machine's Box 13, FDR fighting Tammany while needing it), concept tags, reading, and your own notes (saved as `atlas-note-org:<id>`, so they travel with Export). Concept cards in Frameworks now list the organizations that exemplify them. `ORG_THEORIES` holds the ten theory cards, each linked to the organizations it explains best.

### Deep dossiers — PAP, LDP, UMNO, KMT, Golkar, Congress, PRI, DRP

Eight dominant parties carry a second layer (`data/org-dossiers.js`) built around four questions:

- **The glue** — the career ladder, money, internal structure, hooks into society, the founding threat, succession.
- **The engine** — policy capacity, adaptability, feedback and programme-over-patronage, each scored with its reasoning.
- **The rot ledger** — seven kinds of decay (graft, capture, closure, suppression, feedback decay, sclerosis, succession fragility) scored for each of five historical phases, plus two axes that decide how *pernicious* the rot was: **leakage** into the state, economy and society, and **reversibility** by voters, courts or the press. **Entrenched rot** = mean rot × leakage × (1 − reversibility) — my construction, separating how much rot a party carried from how hard it was to remove.
- **The arc** — the five phases with the events that moved the scores, a schematic **money map**, the **career ladder**, a three-part **verdict**, and dossier reading (around fifty new books in the Library).

**Compare the dossiers** plots each party's history as a trajectory — mean rot across, reversibility up, point size for leakage — and ranks them by peak entrenched rot: **Golkar** under 'Suharto Inc.' (71), the **KMT** of the Nanjing decade and martial-law Taiwan (45), **UMNO** under Mahathir (44), the **PAP**'s developmental machine (25 — clean, but hard to dislodge) and the **LDP**'s construction state (20 — dirtier, but removable), with every lens side by side below. The trajectories are the argument: Golkar and the KMT both fall into the rotten-and-entrenched corner and both climb out — Golkar by surviving its dictator as an ordinary party, the KMT by democratising from strength — while the PAP never gets rotten and never gets removable. UMNO, added as the PAP's foil, is linked to Lee Kuan Yew — the Malaysia years of 1963–65; Golkar was added as organisation 39 and the DRP as organisation 40.

**Three later dossiers** — the Indian National Congress, Mexico's PRI and South Korea's DRP under Park Chung-hee — sit on the same scale (all scores my estimates). By peak entrenched rot the eight rank Golkar 71, the DRP 48, the KMT 45, UMNO 44, the PRI 27, the PAP 25, Congress 22 and the LDP 20. The ordering says something about what the formula rewards: Congress and the PRI carried real rot but were removed by voters, so their entrenched scores are low, while the DRP's short life under Yushin scores high because nothing inside the system could remove it. The DRP is linked to Park Chung-hee and Golkar to Suharto, both added as full leader entries. Some 2025–26 details in these dossiers rest on a single reference source and are hedged in the text.


## Patronage — 21st-century systems (`data/patronage.js`)

The organizations catalogue asks how machines were built; this view asks how patronage works now, from the in-depth literature rather than corruption indices. Its organising claims, each carried by specific studies in the cases: much election-time clientelism buys turnout, credibility or rally audiences rather than switched votes, and persists even where it cannot be monitored (Nichter; Kramon; Aspinall & Berenschot; Hicken & Nathan); enforcement under a secret ballot runs on reciprocity, self-interested jobholders, community rewards and threats rather than surveillance (Auyero; Oliveros; Mares & Young); clientelism is often sought from below as insurance (Nichter), and falls when vulnerability does (the Brazilian cistern experiment); and development moves patronage from the voter to the contract (Magyar, Hale, Pei, the Zondo Commission). Placements (scale, network, coercion, 0–100) are my estimates; the typology view says so and computes its captions from them. Current as of September 2026 — Hungary's entry records Tisza's April 2026 two-thirds win, the Philippines entry the 2025 flood-control scandal.

## Entry, exit & fate — Archigos and Goemans

For all 132 leaders: how they came to power (by the regime's rules, irregularly, or installed by a foreign power) and what became of them — died in power, killed, exiled, imprisoned, or lived on unpunished. Goemans's hypothesis is that leaders who expect punishment after losing office fight harder to keep it. The Survival view tests it against the toolkits, and reports what the data shows either way. So far it doesn't hold: fear-heavy rulers here end badly *less* often, because most of them died in power.

### Two computed findings

**Dominant style × how power ended.** Simonton tested his styles against greatness ratings; this atlas has succession outcomes instead, so the view asks the same question of a harder dependent variable. Interpersonal and Deliberative leaders show a **0% succession-crisis rate**; Creative and Neurotic show **43%**. Small samples, but the direction is consistent with his negative finding on Neurotic — and it suggests the Creative style, which he found positively related to *greatness*, may be actively bad for *continuity*. Redefining an office is not the same as leaving one that works.

**Where trait and style diverge.** Warmth as a disposition and warmth as a governing method are not the same variable. Obama is **+35** — temperamentally far warmer than his working style, and criticised by his own party for exactly that. Lincoln is **−40** in the other direction: a melancholy man who governed almost entirely through relationships.

## Power Base — selectorate analysis

**Every leader** has a **Power Base** section — the original 23 in depth in `data/powerbase.js`, the other 101 in `powerbase-ancient.js`, `powerbase-early.js` and `powerbase-c20.js` with the same fields at a sentence or two each — built on Bueno de Mesquita et al.'s *The Logic of Political Survival* (the argument for the record) and *The Dictator's Handbook* (the same argument for readers). It's the one framework in the atlas that turns *how power ends* into a prediction, and it uses the Outcomes data directly.

Conventions for the extension: for monarchies without elections, **N is the political elite with any recognised say** (nobility, priesthood, officialdom, the army assembly), not the whole population — the convention the Louis XIV entry already used. For elected leaders, N is the eligible electorate, S those who voted and W the winning vote of the election that defined their power. For **machine bosses** (Huey Long, Daley), W is the patronage organisation that delivered the vote, which is what puts them in the thousands rather than the hundreds of thousands. **Ford**'s W is the Congress that confirmed him; **Richelieu**'s and **Kissinger**'s is the one or two people they served. All sizes are order-of-magnitude estimates — the ratios matter more than the digits.

The layout forces the analysis through the theory's own questions:

- **The three circles**, drawn as concentric rings on a log scale — **N** the interchangeables (nominal selectorate), **S** the influentials (real selectorate), **W** the essentials (winning coalition) — with who was in each and how many. The ring geometry reads the regime at a glance: a pinprick W inside a vast N is an autocracy's signature; three near-identical rings is a democracy's.
- **A W-scale meter** (dozens → millions) for cross-leader comparison.
- **Loyalty norm (W/S)** — how replaceable each essential was, which is the theory's engine: it predicts purges, patronage, and clinging.
- **Paid in** — private goods to the few or public goods to the many.
- **Revenue** — where the money came from, and therefore how free the leader was of the productive population's consent.
- **Coalition shuffle** — the method for replacing essentials.
- **Danger moments** — when the coalition wobbled.
- **Survival verdict** — how the framework accounts for the tenure and the exit.

Seven entries stress-test the layout across regime types: **Stalin** (tiny W inside a vast S), **Lincoln** (large W, weak loyalty norm, removed-by-performance), **Louis XIV** (tiny everything — and a king who *enlarged his selectorate* by building Versailles, the Handbook's second rule executed in stone), **Lee Kuan Yew** (the theory's celebrated anomaly — a small coalition that delivered public goods, explained by a revenue base with no rents), **Napoleon** (the cleanest case of a revenue source choosing a foreign policy — a coalition paid from conquest that defected the week conquest stopped paying), **Gorbachev** (the cautionary tale: dismantled the coalition that chose him before acquiring one that could keep him), and **Tang Taizong** (why institutionalised criticism is *cheap* for a leader with a strong loyalty norm — the same revenue logic as Lee, thirteen centuries earlier).

**The whole 21st century is covered** — all thirteen c21 leaders — which makes the era a natural laboratory, because it holds every regime type at once: rent-funded autocracy (Putin), party-state (Xi), competitive authoritarianism (Erdoğan), parliamentary democracy (Merkel, Abe, Ardern), presidential democracy (Bush, Obama, Trump, Biden), coalitional presidentialism (Lula), the world's largest electorate (Modi), and a state at war whose coalition is partly foreign (Zelensky).

Three deliberate anomalies extend the set beyond the modern era, all addressing the succession problem the small-coalition entries otherwise leave hanging: **Augustus** (the only regime here that successfully *transferred* its coalition — the aerarium militare converted personal patronage into a bureaucratic entitlement, so the army's loyalty ran to an institution rather than a man), **Cromwell** (the photographic negative: his own officers vetoed the Crown in 1657, refusing the one form that would have made his authority inheritable — his son lasted eight months), and **Cixi** (forty-seven years held by controlling the succession mechanism itself, manufacturing minority regencies three times).

The ring geometry reads the regime before the prose does. Current radii: Modi 99/97/93 · Obama, Trump, Biden 93/91/88 · Bush 92/90/87 · Gorbachev 92/82/34 · Lula 91/90/87 · Stalin 89/72/23 · Putin 89/87/37 · Abe 89/87/83 · Xi 89/35/17 · Merkel 87/85/83 · Erdoğan 87/86/83 · Zelensky 84/82/36 · Napoleon 77/54/36 · Lincoln 77/76/72 · Augustus 76/52/32 · Ardern 75/74/70 · Lee Kuan Yew 72/72/69 · Cromwell 63/46/32 · Taizong 62/51/24 · Cixi 55/32/22 · Louis XIV 35/31/25.

Read the third number against the first two: where all three are close the regime is genuinely mass-based; where the third collapses away (Xi 89/**35**/17, Putin 89/87/**37**, Stalin 89/72/**23**) you are looking at a small coalition wearing a large one's clothes. A leader's own `powerbase` field overrides the seeded entry, so the section follows the same layered pattern as biographies and outcomes; it isn't in the ✎ form yet.

## The library

Books are **first-class objects**, not a text field on a leader — because one book often covers several leaders ("Team of Rivals" is Lincoln *and* his cabinet), and the theory books belong to **concepts** rather than to any one person (Weber's *Politics as a Vocation* sits with Charismatic Authority; Elias' *The Court Society* with Personal Court). So a concept card in Frameworks shows its own reading, and a leader profile shows its own bibliography, from the same data.

Each book carries a seeded **note** — what it's known for, and whether it's contested (Jung Chang's Cixi, Chang & Halliday's Mao, Ritter's Shaka are all flagged) — and a **takeaway**, which is yours: the one thing it taught you. The UI shows them differently; the takeaway is in accent, in quotes.

Shelving is fast: click the shelf badge on any card or reading row to cycle unmarked → read → reading → to read → reference, without opening the editor. Insights can cite **source books**, so a thesis carries its provenance from reading to conclusion.

### Importing your own shelf

The 159 seeded books are a starter canon (one or two per leader, plus theory) — not your collection. **⤒ Import shelf** in the Library toolbar loads the real thing:

- a **Goodreads or LibraryThing CSV export** — shelves (`read` / `currently-reading` / `to-read`) and star ratings come across automatically;
- a **Notion database export** — a `Historical Figures` (or `Figures` / `People` / `Leaders`) column is used to link leaders *exactly*, which beats guessing from the title, and a `Genre` / `Category` column becomes a filter in the Library;
- any CSV with Title/Author columns;
- or **one book per line**: `Title — Author`, `Title by Author`, `Title, Author`, or just the title.

> Legacy binary `.xls` can't be read in the browser. Export as **CSV** (Notion and Goodreads both do this natively). If you only have an `.xls`, convert it first — `scratchpad/convert_library.py` in this session did exactly that, including flattening Notion's `Name (url)` link cells to plain names.

Every book is **auto-matched to the leaders it names**, so an import lands on the right profiles. The matcher knows full names, regnal names, and the shorthand people actually write (`FDR`, `JFK`, `Ike`, `Theodore Rex`, `LKY`, `Bonaparte`, `Kingfish`, `Li Shimin`). It is deliberately biased toward precision over recall:

- ambiguous surnames that map to two leaders (Roosevelt, Bush) never match on the surname alone;
- surnames that are ordinary English words or common forenames (`Long`, `Ford`, `King`, `Grant`, `Bruce`) are excluded — otherwise *Long Walk to Freedom* becomes a Huey Long book and every author named Bruce becomes Robert the Bruce;
- word boundaries are enforced, so "Elizabeth II" never matches Elizabeth I and "Oxford" never matches Ford;
- the **author field matches only on full names and aliases, never a bare surname** — an author named Bruce is not a king of Scots — while a book whose author *is* an indexed leader still links as an autobiography.

Books already present are **merged, not duplicated** — they keep their entry and seeded note, and take on your shelf and rating. Matching tolerates subtitle differences, so your "Master of the Senate" finds the seeded "Master of the Senate (The Years of Lyndon Johnson, Vol. 3)". Crucially it dedupes on **title *and* author**, so three different "Napoleon" biographies (Chandler, Herold, Ludwig) stay three books. Unmatched books still import; you can attach leaders later.

A preview step shows the counts (found / matched / unlinked / already in library) before anything is written, plus a list of **named people who aren't in the atlas** — the figures your own tagging says you read about but who have no profile yet. That's a reading-driven to-do list for growing the index.

Tested on a real 1,797-book Notion export: ~280ms to parse and match, ~510KB of storage. The grid renders 150 at a time with a *show more* control.

## Outcomes — the dependent variables

Every other vector describes *how* a leader led. Two fields in `data/outcomes.js` record *what happened*, which is what lets Patterns test hypotheses:

- **exit** — `voluntary` · `defeated` · `termlimit` · `died` · `assassinated` · `deposed` · `incumbent`
- **succession** — `orderly` · `crisis` · `na`

These are judgment calls (the file explains each); edit them per-leader in the ✎ form. Interpret the cross-tabs with care: a concept "predicts" a crisis only if its rate sits meaningfully above the base rate *and* the sample is big enough — rows under 5 known cases are flagged "low n". Watch for confounds (a trait that co-occurs with founder-conquerors will inherit their crisis rate).

## Adding & editing (no coding)

**＋ Add leader** in the toolbar, or **✎ Edit** on any profile. The form covers every field — country dropdown (ISO and map placement automatic), exit/succession selects, biography, the three analytical fields, collaborators (one per line: `Name — role`), portrait URL, and a click-to-toggle concept picker.

- Your additions and edits live in the browser (localStorage). Editing a **built-in** leader stores *your* version locally; **Reset to original** removes it. List badges: ● added by you, ✎ edited by you.
- **⤓ Export** downloads *everything you've written* — added/edited leaders, all notes, all insights, and your shelves/ratings/takeaways — as one JSON backup. **⤒ Import** merges a backup (or a plain JSON array of leaders) back in.

## Adding leaders in the data file

Edit `data/leaders.js` — fields are documented at the top. `iso` is the 3-digit ISO-3166 numeric code *as a string* (US `840`, UK `826`, France `250`, Germany `276`, Italy `380`, China `156`, Russia `643`, Japan `392`, India `356`…; full list: https://en.wikipedia.org/wiki/ISO_3166-1_numeric — for historical figures use the modern country of their power base). `tags` come from the concept keys in `data/traits.js`. Bios, collaborators and outcomes live in their own files keyed by leader `id`. Don't rename an `id` once you've written notes on it.

## Growing the frameworks

`data/traits.js` is a library of concept **categories** (the tiles). Append a section object to add a whole new lens; give a concept a `key` to make it taggable (it then appears in the picker, the filters, and the Patterns cross-tabs), omit `key` for a discussion-only concept.

## Files

| File | What it is |
|---|---|
| `data/leaders.js` | The seeded leader index — name, era, country, style/structure/delegation, tags |
| `data/bios.js` | Narrative biographies, keyed by leader `id` |
| `data/collaborators.js` | Key subordinates & collaborators, keyed by leader `id` |
| `data/outcomes.js` | Exit and succession outcomes, keyed by leader `id` |
| `data/library.js` | The seeded reading list — books with `leaders`, `tags`, and a `note` |
| `data/instruments.js` | The carrots-and-sticks taxonomy (33 tools) plus the per-leader catalogue |
| `data/powerbase.js` | Selectorate analysis (W/S/N, loyalty norm, revenue, verdict), keyed by leader `id` — the original 23 in depth |
| `data/powerbase-ancient.js` · `-early.js` · `-c20.js` | The other 101 power bases, merged into the same map |
| `data/rubenzer.js` | The nine facets, the 98 scored profiles, and the not-scoreable list |
| `data/anecdotes.js` | 114 sourced anecdotes illustrating each facet at its high and low ends |
| `data/simonton.js` | Simonton's five leadership-style factors and 80 categorised leaders |
| `data/hermann.js` | Hermann's seven LTA traits, eight styles, and 81 scored leaders |
| `data/politicaltime.js` | Skowronek's four positions, the U.S. order sequence, 127 classified leaders and the not-applicable list |
| `data/svolik.js` | Svolik's power-sharing, army-role and end categories, and 80 autocrats |
| `data/fate.js` | Entry, fate and a note for all 132 leaders (after Archigos) |
| `data/selectorate.js` | Bueno de Mesquita's propositions, the five rules with atlas cases, his books, and tenure corrections for leaders whose dates are lifetimes |
| `data/rhetoric.js` | Rhetoric view — styles, map placements, set pieces, press models, channels, toolkit, reading |
| `data/glossary.js` | Hand-written definitions for terms of art with no definition elsewhere (selectorate, sexenio, prebendalism…) |
| `data/practices.js` | Practices layer — categories, evidence grades, worked examples (LBJ, Clinton, Churchill, Napoleon, Baker) and cross-leader patterns |
| `data/patronage.js` | Patronage view — concepts, debates, sixteen 21st-century case studies, cross-cutting reading and articles |
| `data/org-dossiers.js` | Deep dossiers for the PAP, LDP, UMNO, KMT and Golkar — glue, engine, rot by phase, arc, money map, career ladder, verdict |
| `data/organizations.js` | 44 machines, parties, cadres and courts; their kinds, endings and the ten theory cards |
| `data/olson.js` | Olson's bandit types, horizon markers and coalition categories, and 131 scored rulers |
| `data/traits.js` | Concept categories, definitions, diagnostic questions |
| `app.js` | Everything: routing, index, chronicle, map, convergence, profile page, jump search, form, compare, patterns, insights, backup |
| `index.html` / `styles.css` | Shell and theme — colour tokens for light and dark live at the top of `styles.css` (script tags carry a `?v=` cache-buster — bump it after big edits) |
| `vendor/` | Offline copies of D3, TopoJSON, the world map, and the three variable fonts |

Your personal data (added/edited leaders, notes, insights, cached portraits) lives in the browser's localStorage — use **Export** regularly.
