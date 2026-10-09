// ============================================================
// POLITICAL TIME — Stephen Skowronek
// The Politics Presidents Make (1993; 2nd ed. 1997);
// Presidential Leadership in Political Time (2008; 3rd ed. 2020)
// ============================================================
// Every other framework in the atlas measures the leader. This one
// measures the leader's POSITION: where they stand in the life of
// the governing order they inherit. Two questions decide it —
//   (1) is the leader affiliated with the established order, or opposed to it?
//   (2) is that order resilient, or vulnerable?
// The four answers are four recurring situations, each with its own
// characteristic opportunity and its own characteristic way of failing.
//
// domain:  "core"     — a U.S. president; the type is Skowronek's own or follows his scheme directly
//          "adapted"  — a modern executive; the "order" is a party or constitutional regime
//          "extended" — pre-modern; the "order" is a dynasty or imperial settlement,
//                       and the reading is by analogy (the dynastic cycle is the old name for it)
// contested: where serious readers place the leader differently
// ============================================================

window.TIME_TYPES = [
  {
    key: "reconstruct", name: "Reconstruction", posture: "Opposed to a vulnerable order",
    color: "var(--pt-rec)",
    def: "The old order is discredited and the leader is not implicated in it. That is the one situation in which a leader can repudiate the past outright and found a new order — new commitments, a new coalition, new institutions — which successors will then inherit and have to live inside.",
    authority: "The warrant to repudiate: 'the old way failed, and I am not part of it.'",
    failure: "Only one: the reconstruction does not take, and the leader is remembered as a disruptor rather than a founder.",
    q: "What exactly did they repudiate — and what did the next three leaders have to keep?"
  },
  {
    key: "articulate", name: "Articulation", posture: "Affiliated with a resilient order",
    color: "var(--pt-art)",
    def: "The leader belongs to an order that is still strong. The task is to complete it, update it and deliver on its promises — the 'orthodox innovator.' Authority is borrowed from the founder; so is the trap.",
    authority: "Faithful continuation: 'I will finish what the founder began.'",
    failure: "Schism. Innovating in the name of orthodoxy splits the coalition between those who want purity and those who want results (LBJ, Taft).",
    q: "Where did 'completing the vision' start to look like betraying it — and who said so first?"
  },
  {
    key: "preempt", name: "Preemption", posture: "Opposed to a resilient order",
    color: "var(--pt-pre)",
    def: "The leader comes from outside or against a governing order that is still strong. They cannot repudiate it, so they triangulate — a 'third way', a personal brand, a coalition borrowed from the other side. The freest position tactically, and the most exposed.",
    authority: "Independence: 'I am not bound by either side's orthodoxy.'",
    failure: "Personalisation and isolation. With no order of their own behind them, preemptive leaders are unusually likely to face impeachment, rebellion within their own camp, or a legacy that evaporates.",
    q: "What did they borrow from the order they opposed — and who did that make an enemy of?"
  },
  {
    key: "disjunct", name: "Disjunction", posture: "Affiliated with a vulnerable order",
    color: "var(--pt-dis)",
    def: "The leader is bound to an order that is failing. They cannot repudiate it — it is theirs — and they cannot make it work. Skill does not rescue this position; often the most technically competent leaders hold it. They become the face of the failure that the next reconstructor runs against.",
    authority: "Almost none: they can only claim competence, which the moment does not reward.",
    failure: "The characteristic one: blamed for a collapse that predates them, and used as the foil for the reconstruction that follows.",
    q: "Was the failure theirs — or the order's? What would a better leader have done differently in the same chair?"
  }
];

// The U.S. sequence Skowronek built the theory on — used for the cycle strip
window.TIME_ORDERS_US = [
  { name: "Jeffersonian", from: 1801, to: 1828 },
  { name: "Jacksonian", from: 1829, to: 1860 },
  { name: "Republican", from: 1861, to: 1932 },
  { name: "New Deal", from: 1933, to: 1980 },
  { name: "Reagan", from: 1981, to: 2030 }
];

window.LEADER_TIME = {
  // ---------- U.S. presidents (core) ----------
  washington: { t: "reconstruct", domain: "core", order: "Founding — no prior order", note: "Strictly outside the cycle: there was no order to repudiate, only one to invent. Skowronek treats the founding as the baseline every later reconstruction measures itself against." },
  jefferson: { t: "reconstruct", domain: "core", order: "Federalist → Jeffersonian", note: "The 'revolution of 1800' is Skowronek's first full reconstruction: repudiated Federalist consolidation, rebuilt the coalition around agrarian republicanism, and bound his successors Madison and Monroe to it." },
  jackson: { t: "reconstruct", domain: "core", order: "Jeffersonian → Jacksonian", note: "Ran against the 'corrupt bargain' and the Bank as the rot of the old order; the veto and the mass party were the instruments of a new one that lasted to the Civil War." },
  lincoln: { t: "reconstruct", domain: "core", order: "Jacksonian → Republican", note: "The order that died was the Jacksonian slavery compromise; Lincoln's authority to wage the war rested on repudiating it. The Republican order he founded governed, with interruptions, until 1932." },
  mckinley: { t: "articulate", domain: "core", order: "Republican", note: "Consolidated the Republican order for the industrial age — tariff, gold and empire — and reset its coalition after the 1896 realignment. The orthodox innovator at his most successful." },
  troosevelt: { t: "articulate", domain: "core", order: "Republican", note: "Skowronek's classic orthodox innovator: governed as the heir of the Republican order while pushing its limits — and the progressive innovations that made him great also split the party behind him in 1912." },
  taft: { t: "articulate", domain: "core", order: "Republican", note: "Tried to be faithful to both TR and the party's Old Guard and found they were no longer compatible; the articulation position's characteristic schism fell on him." },
  wilson: { t: "preempt", domain: "core", order: "Republican (opposed)", note: "A Democrat elected only because the Republicans split; preempted the order with his own progressive programme. Classic preemptive ending: a personalised crusade (the League) that his own coalition would not follow." },
  harding: { t: "articulate", domain: "core", order: "Republican", note: "'Return to normalcy' was articulation in its purest form — restoring the order after the Wilson interruption." },
  coolidge: { t: "articulate", domain: "core", order: "Republican", note: "The order at its most orthodox and most comfortable. Skowronek's point is that the comfort was borrowed — Coolidge inherited a working order and handed on a brittle one." },
  hoover: { t: "disjunct", domain: "core", order: "Republican", note: "The textbook disjunctive president: the most technically qualified man of his era, bound to an order the Depression broke. His competence counted for nothing because it was the order's competence that had failed." },
  fdr: { t: "reconstruct", domain: "core", order: "Republican → New Deal", note: "Reconstruction on the largest scale: repudiated the Republican order as the cause of the Depression and built a coalition and a state that bound every successor for forty-eight years — including the Republicans." },
  truman: { t: "articulate", domain: "core", order: "New Deal", note: "The loyal successor who had to make the New Deal durable and fight the Cold War at once; the Fair Deal stalled and his party began to fracture along the lines that would later break it." },
  eisenhower: { t: "preempt", domain: "core", order: "New Deal (opposed)", note: "A Republican who accepted the New Deal state rather than fight it — the 'hidden-hand' preemptive president. Unusually successful for the type because he never tried to make the preemption into an order of his own." },
  jfk: { t: "articulate", domain: "core", order: "New Deal", note: "Ran to 'get the country moving again' inside New Deal commitments; the articulation agenda he could not pass became Johnson's inheritance." },
  lbj: { t: "articulate", domain: "core", order: "New Deal", note: "The orthodox innovator par excellence — the Great Society as the New Deal completed — and the clearest case of the type's trap: fulfilling the order's promises (civil rights, war in Asia) broke its coalition." },
  nixon: { t: "preempt", domain: "core", order: "New Deal (opposed)", note: "Governed a still-strong liberal order by triangulating — the EPA, wage-price controls, China — while building a personal 'new majority'. The preemptive type's characteristic ending: impeachment proceedings and resignation." },
  ford: { t: "preempt", domain: "core", order: "New Deal (opposed)", note: "Inherited Nixon's preemptive position without the mandate or the coalition; the pardon spent what authority he had." },
  carter: { t: "disjunct", domain: "core", order: "New Deal", note: "Skowronek's other textbook disjunctive president: a Democrat bound to a New Deal order that stagflation had broken, trying to govern by competence and candour. The 'malaise' speech is the disjunctive position speaking aloud." },
  reagan: { t: "reconstruct", domain: "core", order: "New Deal → Reagan", note: "Repudiated the New Deal order — 'government is the problem' — and built the coalition and commitments his successors of both parties have governed inside since." },
  ghwbush: { t: "articulate", domain: "core", order: "Reagan", note: "The faithful son who could not keep faith: raising taxes to govern responsibly broke the 'no new taxes' pledge and split the coalition — the articulation schism." },
  clinton: { t: "preempt", domain: "core", order: "Reagan (opposed)", note: "The 'third way' is preemption made into a doctrine — 'the era of big government is over' said by a Democrat. And the type's ending arrived on schedule: impeachment." },
  gwbush: { t: "articulate", domain: "core", order: "Reagan", note: "Skowronek read him as an articulator in real time — tax cuts, an assertive presidency, the 'ownership society' as the Reagan order completed. Iraq and 2008 made him, in retrospect, look closer to the disjunctive position." , contested: "Some read the late Bush years as the start of the Reagan order's disjunction." },
  obama: { t: "preempt", domain: "core", order: "Reagan (opposed)", note: "Ran as a reconstructor after 2008 and governed as a preempter: the ACA was built on Republican designs and the coalition did not realign. Skowronek has treated him as the case of reconstructive ambition in a preemptive position.", contested: "Read as a failed reconstruction by some; as the preemptive type by Skowronek's later work." },
  trump: { t: "disjunct", domain: "core", order: "Reagan", note: "Skowronek's own framing is that Trump combines a reconstructive posture — repudiating his party's establishment — with a disjunctive situation, affiliated with an order in decay. Which one it proves to be depends on whether a durable new order follows.", contested: "Reconstruction or disjunction is the open question; the classification is placed here provisionally." },
  biden: { t: "preempt", domain: "core", order: "Reagan (opposed) — or its aftermath", note: "Governed with reconstructive ambitions (industrial policy, the largest spending since the Great Society) on a coalition too thin to realign anything — the preemptive situation. If the Reagan order was already over, the reading changes.", contested: "Depends on whether 2016–24 is read as an order's disjunction or already an interregnum." },
  kissinger: null, hueylong: null,

  // ---------- modern executives (adapted) ----------
  napoleon: { t: "reconstruct", domain: "adapted", order: "Directory → Consulate/Empire", note: "Repudiated the Directory's chaos without repudiating the Revolution — the Code as the Revolution made permanent. The order he founded (prefects, Code, Bank) outlived him everywhere except in its dynasty." },
  victoria: { t: "articulate", domain: "adapted", order: "Constitutional monarchy", note: "Presided over the completion of the order the 1832 settlement began — a monarchy that reigned rather than ruled — and made it popular." },
  juarez: { t: "reconstruct", domain: "adapted", order: "Conservative → Liberal Reforma", note: "La Reforma repudiated the colonial church-army order and, after defeating Maximilian, made the liberal republic the baseline every later Mexican regime claimed." },
  bismarck: { t: "reconstruct", domain: "adapted", order: "German Confederation → Reich", note: "Founded the order, then spent twenty years as its guardian — the rare reconstructor who also governed the articulation phase, which is why his successors could not." },
  disraeli: { t: "preempt", domain: "adapted", order: "Liberal-Peelite order (opposed)", note: "The Tory who passed a Reform Act and built 'one-nation' conservatism out of Liberal materials — preemption as statecraft." },
  cavour: { t: "reconstruct", domain: "adapted", order: "Restoration Italy → Kingdom of Italy", note: "Built the new order by diplomacy rather than repudiation, and died three months after it was proclaimed — the reconstruction completed by others." },
  cixi: { t: "disjunct", domain: "adapted", order: "Qing", note: "Bound to a dynasty losing the mandate; her skill kept it alive and could not make it work. The 1898 reforms she crushed and the 1901 reforms she then adopted are the disjunctive oscillation." },
  meiji: { t: "reconstruct", domain: "adapted", order: "Tokugawa → Meiji", note: "The Restoration repudiated the shogunate in the name of the emperor; the order it founded lasted until 1945." },
  menelik2: { t: "reconstruct", domain: "adapted", order: "Zemene Mesafint aftermath → modern Ethiopia", note: "Consolidated the empire and founded its modern state; Adwa made the order unimpeachable." },
  lenin: { t: "reconstruct", domain: "adapted", order: "Tsarist / Provisional → Soviet", note: "The most complete repudiation in the index; the order he founded bound every successor until 1991." },
  ataturk: { t: "reconstruct", domain: "adapted", order: "Ottoman → Republic", note: "Repudiated the sultanate, the caliphate and the script. Kemalism was the order Turkish politics ran inside until Erdoğan." },
  stalin: { t: "articulate", domain: "adapted", order: "Soviet (Leninist)", note: "Governed as Lenin's faithful executor while transforming the order beyond recognition — orthodox innovation taken to its limit, with the schism resolved by killing the other side of it." },
  hitler: { t: "reconstruct", domain: "adapted", order: "Weimar → Nazi", note: "Repudiated Weimar as the order of defeat and 'November criminals'; the reconstruction was total and lasted twelve years." },
  churchill: { t: "preempt", domain: "adapted", order: "Appeasement consensus (1940); postwar Labour settlement (1951)", note: "Twice preemptive: in 1940 a leader against his own party's orthodoxy, and in 1951 a Conservative governing inside Attlee's welfare-state settlement rather than repealing it.", contested: "1940 can also be read as a reconstructive moment in war policy." },
  degaulle: { t: "reconstruct", domain: "adapted", order: "Fourth Republic → Fifth Republic", note: "The purest modern reconstruction in a democracy: the Fourth Republic's collapse in 1958 gave him the warrant, and the constitution he wrote still governs France." },
  mao: { t: "reconstruct", domain: "adapted", order: "Republican China → PRC", note: "Founded the order; then, in the Great Leap and the Cultural Revolution, tried to reconstruct against his own party-state — a founder refusing to let the order settle." },
  hochiminh: { t: "reconstruct", domain: "adapted", order: "French colonial → DRV", note: "Founded the order and, unusually, let the party institutionalise around him in his lifetime." },
  bengurion: { t: "reconstruct", domain: "adapted", order: "Yishuv → State of Israel", note: "Built the Labor-Zionist state order — army, bureaucracy, mamlachtiyut — that dominated Israel until 1977." },
  nasser: { t: "reconstruct", domain: "adapted", order: "Monarchy → Free Officers' republic", note: "Repudiated the monarchy and the British; the military-republican order he founded still rules Egypt." },
  nkrumah: { t: "reconstruct", domain: "adapted", order: "Colonial Gold Coast → Ghana", note: "Founded the order and then tried to make it a one-party state; the reconstruction did not take, and the army removed him." },
  leekuanyew: { t: "reconstruct", domain: "adapted", order: "Colonial / Malaysian merger → independent Singapore", note: "Founded the order from an unwanted independence; the PAP state he built is the most durable reconstruction in the modern index." },
  tito: { t: "reconstruct", domain: "adapted", order: "Royal Yugoslavia / occupation → socialist federation", note: "Founded an order that depended on him more than he admitted; it outlived him by a decade." },
  goldameir: { t: "disjunct", domain: "adapted", order: "Labor Zionist", note: "The last prime minister of the Labor order at full strength; the Yom Kippur War exposed its complacency, and Begin's 1977 victory ran against exactly that failure." },
  indira: { t: "articulate", domain: "adapted", order: "Nehruvian Congress", note: "Governed as Nehru's heir while rebuilding Congress around herself — the 1969 split is the articulation schism, and the Emergency the moment the orthodox innovator broke the order's own rules.", contested: "Often read as a reconstruction of Congress into a personal party." },
  deng: { t: "reconstruct", domain: "adapted", order: "Maoist → Reform era", note: "Repudiated the Cultural Revolution while keeping Mao as founder — reconstruction disguised as restoration. The order he built governed China until Xi." },
  thatcher: { t: "reconstruct", domain: "adapted", order: "Postwar consensus → market order", note: "The 'winter of discontent' discredited the postwar settlement; she repudiated it, and Blair governed inside what she built — the British Reagan in Skowronek's terms." },
  gorbachev: { t: "disjunct", domain: "adapted", order: "Soviet", note: "The disjunctive position in its most dramatic form: bound to an order he wanted to save, trying reforms that exposed how little of it still worked. The reconstruction that followed was Yeltsin's, not his." },
  mandela: { t: "reconstruct", domain: "adapted", order: "Apartheid → constitutional democracy", note: "Founded the order and — unusually for a reconstructor — deliberately left after one term so that it would not depend on him." },
  castro: { t: "reconstruct", domain: "adapted", order: "Batista → revolutionary Cuba", note: "Founded the order and governed it for half a century, so the articulation phase never really began in his lifetime." },
  chiang: { t: "disjunct", domain: "adapted", order: "Nationalist (KMT) China", note: "On the mainland, bound to a Nationalist order that the war and inflation broke — the disjunctive leader Mao ran against. On Taiwan, arguably a second reconstruction.", contested: "Taiwan 1949–75 reads as reconstruction; the mainland years as disjunction." },
  suharto: { t: "reconstruct", domain: "adapted", order: "Sukarno's Guided Democracy → the New Order", note: "Repudiated Guided Democracy's hyperinflation, its Communist pillar and its foreign policy while claiming to restore the 1945 constitution and Pancasila. The army–Golkar–technocrat order he built bound Indonesian politics until 1998.", contested: "Scholars who stress continuity — the army's political role, the 1945 constitution and presidential dominance all predate 1966 — read him as a coup inside the order rather than the founder of a new one." },
  parkchunghee: { t: "reconstruct", domain: "adapted", order: "Second Republic → the developmental state", note: "The Second Republic's paralysis was the warrant: he repudiated party politics and the 1950s economy and built the export-led state that Korean politics has run inside ever since. The Yushin constitution did not outlast him; the developmental state did.", contested: "Some scholars stress continuity with the 1950s state and with Japanese colonial-era institutions; others read Yushin in 1972 as a second, separate reconstruction." },
  mussolini: { t: "reconstruct", domain: "adapted", order: "Liberal Italy → the Fascist state", note: "Ran against the liberal parliamentary order as the regime of the 'mutilated victory', strikes and weak coalitions, and replaced it with a one-party state — but left the monarchy, the army and, after 1929, the Church in place. Those surviving pillars of the old order removed him in 1943.", contested: "Historians who stress continuity — the liberal elites, the King and the courts that let him in and stayed — read the regime as a compromise with the old order rather than its replacement." },
  franco: { t: "reconstruct", domain: "adapted", order: "The Second Republic → the Francoist state", note: "Rose against the Republic of 1931 as the order of anticlericalism, land reform, regional autonomy and revolutionary violence, and built on its ruins a Catholic, centralist, military state — legitimated not by an election but by victory in the civil war. His reconstruction was so personal that it did not survive him: the successor he chose dismantled it.", contested: "Read as a restoration rather than a reconstruction, the regime gave back to the army, the Church and the landowners the places they had held under the monarchy before 1931 — the old order's revenge rather than a new one." },
  salazar: { t: "reconstruct", domain: "adapted", order: "The First Republic and the military dictatorship → the Estado Novo", note: "Replaced the unstable liberal First Republic of 1910–26 — some 45 governments in sixteen years — with a corporative constitution and a balanced budget; the officers who had made the 1926 coup handed him the state to fix and stayed to guard it. The order he built lasted until the army ended it in 1974.", contested: "Since he was appointed by, and always answerable to, the military dictatorship of 1926, some read him as that regime's articulator — its most capable servant — rather than the founder of a new order." },
  pinochet: { t: "reconstruct", domain: "adapted", order: "The 1925 constitutional order and state-led development → 'protected democracy' and the market model", note: "Ran against the order of party competition and import-substituting, state-led development that had culminated in Allende's Popular Unity, and built in its place the 1980 constitution, privatised pensions, open trade and an independent central bank. Skowronek's test — what did successors have to keep? — is unusually clear: the centre-left Concertación governed inside the model for twenty years, the binomial electoral system lasted until 2015, and Chilean voters rejected two drafts to replace the constitution in 2022 and 2023.", contested: "Read as a restoration — of property and of the right's position before the reforms of 1964–73 — rather than a new order; but the Chicago model was new to Chile, and the old right had not asked for it." },
  peron: { t: "reconstruct", domain: "adapted", order: "The 'Infamous Decade' of the conservative Concordancia → Peronism", note: "Ran against the restored oligarchic order of 1930–43, which governed through electoral fraud, and built a new one on the industrial working class, the unions and state-led industrialisation. The proof is the next half-century: every Argentine government after 1955 had to govern either through Peronism or by banning it.", contested: "Read through the 1973–74 return, he is a different type — a founder recalled to manage an order he had built and that had split into armed left and right — closer to Skowronek's late-regime affiliates than to a reconstructor." },
  goh: { t: "articulate", domain: "adapted", order: "PAP", note: "The faithful successor who softened the style without touching the order — articulation executed with unusual care, with the founder still in the cabinet." },
  putin: { t: "reconstruct", domain: "adapted", order: "Yeltsin's 1990s → 'vertical of power'", note: "Ran against the 1990s as the order of chaos and humiliation; the restored state he built is the baseline Russian politics now runs inside." },
  merkel: { t: "articulate", domain: "adapted", order: "Federal Republic consensus", note: "Governed as the steward of the postwar settlement — the social market, Europe, consensus — and completed it rather than challenging it." },
  erdogan: { t: "reconstruct", domain: "adapted", order: "Kemalist → AKP", note: "Repudiated the Kemalist tutelary order — army, judiciary, secularist establishment — and has rebuilt the state around a new coalition." },
  abe: { t: "articulate", domain: "adapted", order: "LDP", note: "Restored the LDP order after the 2009–12 interruption and completed long-held party goals (security legislation, Kantei control of appointments)." },
  modi: { t: "reconstruct", domain: "adapted", order: "Congress order → Hindu-nationalist order", note: "Ran against the Congress order as dynastic and corrupt; the BJP system he built is the new baseline — the 2024 coalition result the first sign of its limits." },
  xi: { t: "reconstruct", domain: "adapted", order: "Deng's collective leadership → Xi Thought", note: "Presented as articulation — the continuation of the Party's mission — but repudiates the core of Deng's order: term limits, collective leadership and the separation of party and state.", contested: "Many read him as an orthodox innovator of the Party order rather than a reconstructor." },
  ardern: { t: "articulate", domain: "adapted", order: "Post-1984 New Zealand settlement", note: "Labour governing inside the market settlement Labour itself built in 1984 — softened, not repudiated." },
  zelensky: { t: "reconstruct", domain: "adapted", order: "Post-Soviet oligarchic order", note: "Elected as the outsider against the whole political class; the invasion turned a reconstructive mandate into a war government, so the order he founds will be defined by the war." , contested: "Too early to say whether a new order follows." },
  lula: { t: "preempt", domain: "adapted", order: "Real Plan / Cardoso order (opposed)", note: "The opposition leader who promised, in the 'Letter to the Brazilian People', to keep the order's economics — preemption as a campaign pledge, and a personal brand larger than his party." },

  // ---------- pre-modern (extended — the dynastic cycle) ----------
  hammurabi: { t: "reconstruct", domain: "extended", order: "Old Babylonian", note: "Turned a city-state among rivals into the Mesopotamian order; the code announced it." },
  ramesses2: { t: "articulate", domain: "extended", order: "Egyptian New Kingdom (19th Dynasty)", note: "The dynasty's great completer — monuments, Kadesh as propaganda, sixty-six years of an order at its height." },
  cyrus: { t: "reconstruct", domain: "extended", order: "Median → Achaemenid", note: "Founded the order and its governing idea — tolerant imperial rule — which every successor claimed." },
  darius1: { t: "articulate", domain: "extended", order: "Achaemenid", note: "Seized the throne and then governed as Cyrus's faithful systematiser — satrapies, roads, coinage. The orthodox innovator who made the founder's order work.", contested: "His usurpation and reorganisation are sometimes read as a second founding." },
  pericles: { t: "articulate", domain: "extended", order: "Athenian democracy (post-Ephialtes)", note: "Completed the democratic order — pay for office, the building programme — and led it into the war that exposed its limits." },
  alexander: { t: "articulate", domain: "extended", order: "Argead Macedon (Philip's order)", note: "Inherited the army and the plan from Philip and executed it beyond anything Philip imagined — innovation in the founder's name." },
  chandragupta: { t: "reconstruct", domain: "extended", order: "Nanda → Mauryan", note: "Overthrew the Nandas and founded the first pan-Indian empire, with Kautilya's doctrine as its operating code." },
  ashoka: { t: "articulate", domain: "extended", order: "Mauryan", note: "Inherited the order at full strength and remade its ethic (dhamma) without changing its structure — the order did not survive his redefinition by long." },
  qinshihuang: { t: "reconstruct", domain: "extended", order: "Warring States → Qin empire", note: "The most total repudiation in the pre-modern index — script, weights, feudalism, books. The order outlived the dynasty: the Han governed inside it." },
  jcaesar: { t: "reconstruct", domain: "extended", order: "Late Republic", note: "Opposed to a Republic that no longer worked; the reconstruction was cut off at the Ides and completed by his heir." },
  augustus: { t: "reconstruct", domain: "extended", order: "Republic → Principate", note: "Reconstruction disguised as restoration — res publica restituta — which is why it lasted." },
  marcusaurelius: { t: "articulate", domain: "extended", order: "Antonine Principate", note: "The last articulator of the Antonine order; the plague and the northern wars began its unravelling on his watch, and the succession of Commodus completed it." },
  cleopatra: { t: "disjunct", domain: "extended", order: "Ptolemaic", note: "The disjunctive position exactly: talented, bound to a dynasty that was already a Roman client, and remembered as its end." },
  caocao: { t: "reconstruct", domain: "extended", order: "Han collapse → Wei", note: "Governed nominally in the Han emperor's name while building the order his son declared as Wei — reconstruction behind a preemptive mask." },
  attila: { t: "articulate", domain: "extended", order: "Hunnic confederation", note: "Inherited the confederation from Rua and Bleda and pushed it to its maximum; it did not survive him by two years." },
  genghis: { t: "reconstruct", domain: "extended", order: "Steppe clans → Mongol empire", note: "Dissolved the tribal order into decimal military units — the most complete reconstruction of a society in the index." },
  kublai: { t: "reconstruct", domain: "extended", order: "Mongol empire → Yuan dynasty", note: "Refounded the Mongol order as a Chinese dynasty; the steppe traditionalists read it as betrayal, which is the reconstructor's price." },
  timur: { t: "reconstruct", domain: "extended", order: "Chagatai Khanate → Timurid", note: "Built an order entirely around himself; it fragmented at his death." },
  nobunaga: { t: "reconstruct", domain: "extended", order: "Ashikaga / Sengoku → unification", note: "Began the reconstruction — destroyed the shogunate and the militant monasteries — and was killed before it could be institutionalised." },
  shaka: { t: "reconstruct", domain: "extended", order: "Nguni chiefdoms → Zulu kingdom", note: "Rebuilt the society around age-regiments; the order survived his assassination." },
  justinian: { t: "articulate", domain: "extended", order: "Roman empire (East)", note: "Governed as the restorer of Rome — the Code, the reconquest — and exhausted the order doing it." },
  charlemagne: { t: "reconstruct", domain: "extended", order: "Merovingian → Carolingian empire", note: "Refounded the Western empire; the order outlived its partition." },
  harun: { t: "articulate", domain: "extended", order: "Abbasid", note: "The caliphate at its most splendid and most orthodox; the succession he divided between two sons produced the civil war." },
  alfred: { t: "reconstruct", domain: "extended", order: "Heptarchy → Wessex-led England", note: "Rebuilt the order after the Viking conquest — burhs, navy, law, learning — on which his heirs built England." },
  william1: { t: "reconstruct", domain: "extended", order: "Anglo-Saxon → Norman", note: "Replaced a ruling class; Domesday is the inventory of the new order." },
  saladin: { t: "reconstruct", domain: "extended", order: "Fatimid / Zengid → Ayyubid", note: "Founded a dynasty from a lieutenancy; the order split among his heirs at once." },
  frederick2: { t: "preempt", domain: "extended", order: "Papal-imperial order (opposed)", note: "The emperor against the papal order at its height — personally brilliant, excommunicated repeatedly, with no settlement to leave behind: the preemptive fate in medieval form." },
  louis9: { t: "articulate", domain: "extended", order: "Capetian", note: "Completed the Capetian monarchy morally rather than territorially — royal justice as the order's legitimacy." },
  mansamusa: { t: "articulate", domain: "extended", order: "Mali (Keita)", note: "The empire at its height; his pilgrimage advertised an order his successors could not hold together." },
  mehmed2: { t: "reconstruct", domain: "extended", order: "Frontier sultanate → Ottoman empire", note: "Constantinople turned a sultanate into an empire; the kanunname and the law of fratricide were the new order's rules." },
  lorenzo: { t: "articulate", domain: "extended", order: "Medici Florence", note: "Governed the Medici order within republican forms; two years after his death it collapsed." },
  cesareborgia: { t: "reconstruct", domain: "extended", order: "Papal States (Romagna)", note: "An attempted reconstruction that depended entirely on his father's papacy; when Alexander VI died, so did it." },
  isabella: { t: "reconstruct", domain: "extended", order: "Castile/Aragon → Spanish monarchy", note: "Built the unified monarchy, the Inquisition and the Atlantic empire." },
  henry8: { t: "reconstruct", domain: "extended", order: "Catholic England → royal supremacy", note: "The break with Rome was a reconstruction of church-state relations that lasted, whatever his motives." },
  suleiman: { t: "articulate", domain: "extended", order: "Ottoman", note: "The Lawgiver: the order codified at its height." },
  charles5: { t: "articulate", domain: "extended", order: "Habsburg universal monarchy", note: "Tried to hold together an order the Reformation had made impossible, and abdicated by dividing it." },
  elizabeth1: { t: "articulate", domain: "extended", order: "Tudor / Protestant settlement", note: "Settled and preserved rather than founded — the via media as orthodoxy." },
  akbar: { t: "reconstruct", domain: "extended", order: "Babur's conquest → Mughal state", note: "The real founder of the Mughal order — mansabdari, Rajput alliance, sulh-i kull — built on his grandfather's conquest." },
  ieyasu: { t: "reconstruct", domain: "extended", order: "Sengoku → Tokugawa", note: "Completed Nobunaga's and Hideyoshi's reconstruction and designed it to last 250 years." },
  richelieu: { t: "articulate", domain: "extended", order: "Bourbon absolutism", note: "The minister who built the order his king's son would perfect." },
  cromwell: { t: "reconstruct", domain: "extended", order: "Stuart monarchy → Protectorate", note: "A reconstruction that did not take: the order died with him and the monarchy returned in two years." },
  louis14: { t: "articulate", domain: "extended", order: "Bourbon absolutism", note: "The order completed and displayed — and financially exhausted." },
  kangxi: { t: "articulate", domain: "extended", order: "Qing", note: "Consolidated the conquest dynasty into a stable Confucian order." },
  peter1: { t: "reconstruct", domain: "extended", order: "Muscovy → Russian empire", note: "Repudiated Muscovite custom by decree — beards, calendar, capital. The order he founded lasted until 1917." },
  frederick2p: { t: "articulate", domain: "extended", order: "Hohenzollern Prussia", note: "Inherited his father's army and treasury and used them to raise Prussia to a great power — the orthodox innovator." },
  berlusconi: { t: "reconstruct", domain: "adapted", order: "First Republic (DC–PSI) → the bipolar 'Second Republic'", note: "Ran against the parties destroyed by the Tangentopoli scandals while inheriting much of their electorate, and for seventeen years Italian politics divided into his camp and the camp against him.", contested: "The bipolar order did not outlast his party's decline after 2013; readers who see no durable new order place him as preemptive — an outsider exploiting a collapse — rather than as a reconstructor." },
  mariatheresa: { t: "articulate", domain: "extended", order: "Habsburg monarchy", note: "Inherited a failing order in 1740 and saved it by reform rather than repudiation — the articulator who works under disjunctive pressure." },
  catherine2: { t: "articulate", domain: "extended", order: "Petrine empire", note: "Governed as Peter's heir and completed his project with Enlightenment vocabulary." },
  nzinga: { t: "reconstruct", domain: "extended", order: "Ndongo under Portuguese pressure → Matamba", note: "Rebuilt her state in a new territory and a new alliance system when the old one could not be defended." },
  toussaint: { t: "reconstruct", domain: "extended", order: "Colonial slave society → Saint-Domingue autonomy", note: "Destroyed the old order and was captured before his own could be established; Dessalines completed the break." },
  bolivar: { t: "reconstruct", domain: "extended", order: "Spanish empire → Gran Colombia", note: "Liberated the continent and could not found an order to hold it; the reconstruction fragmented before his death." },
  sanmartin: { t: "reconstruct", domain: "extended", order: "Spanish viceroyalty → independent Peru", note: "Delivered the break and withdrew rather than try to govern the new order." },
  taizong: { t: "reconstruct", domain: "extended", order: "Sui collapse → Tang", note: "His father proclaimed the dynasty; Taizong built its order — the Zhenguan institutions, remonstrance, the equal-field and fubing systems — which is why the reign became the model later dynasties measured themselves by." },
  robertbruce: { t: "reconstruct", domain: "extended", order: "English overlordship → independent Scottish kingship", note: "Built a new royal order out of civil war and English occupation; Arbroath is its charter." },
  hannibal: null, eleanor: null
};

// leaders the framework does not apply to, and why
window.TIME_NA = {
  kissinger: "Never held the executive; the position framework is about the person who holds the order's highest office.",
  hueylong: "A governor and senator, not a national executive. His relationship to the New Deal order — a rival reconstructor FDR had to outflank — is interesting, but it is not his position.",
  rjdaley: "A mayor, not a national executive. His machine's place in political time is still worth reading: it was one of the New Deal order's great vote engines, and it decayed with that order.",
  hannibal: "A general of Carthage, not its government; the Barcid faction's relation to the Carthaginian order is too thinly recorded to classify.",
  eleanor: "A queen consort and regent whose power ran through three kings' reigns rather than an office of her own."
};
