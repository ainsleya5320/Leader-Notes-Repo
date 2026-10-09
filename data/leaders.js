// ============================================================
// THE LEADERSHIP ATLAS — leader index
// ============================================================
// Add your own entries to this array. Fields:
//   id         unique slug (used for your saved notes — don't change once set)
//   name       display name
//   years      reign/tenure or life dates (free text)
//   title      office or role
//   country    modern country used for map placement
//   iso        3-digit ISO-3166 numeric code AS A STRING (see README for list)
//   era        one of: ancients | warlords | medieval | renaissance |
//              earlymodern | colonial | c19 | c20 | c21
//   president  true if you want them under the Presidents toggle
//   style      leadership style, in a sentence
//   structure  how they organized power
//   delegation how they used (or refused to use) subordinates
//   tags       trait keys — see data/traits.js for the vocabulary
// ============================================================

window.LEADERS = [

  // ---------------- ANCIENTS ----------------
  { id: "hammurabi", name: "Hammurabi", years: "r. 1792–1750 BC", title: "King of Babylon", country: "Iraq", iso: "368", era: "ancients", president: false,
    style: "Legalist codifier — authority projected through written, publicly displayed law rather than personal whim.",
    structure: "Centralized scribal bureaucracy; the code standardized justice across conquered city-states.",
    delegation: "Provincial governors bound to written standards; letters show him ruling on minor disputes personally.",
    tags: ["bureaucratic", "institutional", "micromanage"] },

  { id: "ramesses2", name: "Ramesses II", years: "r. 1279–1213 BC", title: "Pharaoh of Egypt", country: "Egypt", iso: "818", era: "ancients", president: false,
    style: "Master propagandist god-king — turned the draw at Kadesh into a personal epic carved on every temple wall.",
    structure: "Theocratic court fused with a temple-and-granary bureaucracy.",
    delegation: "Ran Egypt through viziers of Upper and Lower Egypt while monopolizing the image of power.",
    tags: ["charismatic", "court", "viziers", "propaganda"] },

  { id: "cyrus", name: "Cyrus the Great", years: "r. 559–530 BC", title: "Founder, Achaemenid Persia", country: "Iran", iso: "364", era: "ancients", president: false,
    style: "Tolerant imperial federalist — kept local gods, elites and customs in place in exchange for loyalty and tribute.",
    structure: "Satrapy system: semi-autonomous provinces under a light imperial umbrella.",
    delegation: "Genuinely devolved authority to satraps; Xenophon made him the ancient world's leadership case study.",
    tags: ["transformational", "steward", "institutional", "missioncommand"] },

  { id: "darius1", name: "Darius I", years: "r. 522–486 BC", title: "Persian Great King", country: "Iran", iso: "364", era: "ancients", president: false,
    style: "The administrator who consolidated what the conqueror won — standardized coinage, tribute, roads.",
    structure: "Twenty satrapies with fixed assessments; royal road and courier network as the empire's nervous system.",
    delegation: "Delegated widely but audited relentlessly via inspectors — 'the King's Eyes and Ears'.",
    tags: ["bureaucratic", "institutional", "dividerule"] },

  { id: "pericles", name: "Pericles", years: "c. 461–429 BC", title: "Strategos of Athens", country: "Greece", iso: "300", era: "ancients", president: false,
    style: "Rule by persuasion in a radical democracy — Thucydides: 'the first citizen' who led rather than flattered the assembly.",
    structure: "No formal supremacy; power renewed annually through election and oratory.",
    delegation: "Worked through fellow generals and allies; authority died the moment persuasion failed.",
    tags: ["charismatic", "collegial", "cabinet"] },

  { id: "alexander", name: "Alexander the Great", years: "r. 336–323 BC", title: "King of Macedon", country: "Greece", iso: "300", era: "ancients", president: false,
    style: "Charismatic warrior-king who led from the front — shared wounds, hunger and glory with the men.",
    structure: "Hub-and-spoke around his person and the Companions; adopted Persian court forms as he went.",
    delegation: "Brilliant tactical delegation to Parmenion, Craterus, Ptolemy — but no succession plan: 'to the strongest'.",
    tags: ["warrior", "charismatic", "hubspoke", "missioncommand"] },

  { id: "chandragupta", name: "Chandragupta Maurya", years: "r. 321–297 BC", title: "Founder, Mauryan Empire", country: "India", iso: "356", era: "ancients", president: false,
    style: "Empire-builder guided by a theorist — Kautilya's Arthashastra as operating manual.",
    structure: "Dense bureaucratic state with departments, spies, and standardized administration.",
    delegation: "The archetypal ruler–vizier partnership; Kautilya as chancellor and system designer.",
    tags: ["viziers", "meritocracy", "bureaucratic"] },

  { id: "ashoka", name: "Ashoka", years: "r. 268–232 BC", title: "Mauryan Emperor", country: "India", iso: "356", era: "ancients", president: false,
    style: "Transformational moral governance — after Kalinga, swapped conquest for dhamma as the empire's legitimating idea.",
    structure: "Inherited Mauryan bureaucracy repurposed for welfare works and edict pillars as mass communication.",
    delegation: "Appointed dhamma-mahamatras — a dedicated cadre to propagate policy and audit officials.",
    tags: ["transformational", "steward", "bureaucratic", "politicalreligion"] },

  { id: "qinshihuang", name: "Qin Shi Huang", years: "r. 221–210 BC", title: "First Emperor of China", country: "China", iso: "156", era: "ancients", president: false,
    style: "Legalist centralizer — standardized script, weights, axle-widths; burned dissenting books.",
    structure: "Abolished feudalism outright; replaced lords with appointed commandery officials answerable to the throne.",
    delegation: "Trusted process over people; reviewed a fixed weight of documents daily — the original micromanaging workaholic.",
    tags: ["coercive", "meritocracy", "micromanage", "bureaucratic"] },

  { id: "hannibal", name: "Hannibal Barca", years: "247–183 BC", title: "Carthaginian General", country: "Tunisia", iso: "788", era: "ancients", president: false,
    style: "Operational genius sustaining a multi-ethnic army in enemy territory for 15 years on personal credibility alone.",
    structure: "A field army as a state-in-motion — with almost no support from Carthage's merchant oligarchy.",
    delegation: "High-trust mission command to subordinate commanders (Maharbal, Mago); undone by strategy beyond his control.",
    tags: ["warrior", "missioncommand", "charismatic"] },

  { id: "jcaesar", name: "Julius Caesar", years: "100–44 BC", title: "Dictator of Rome", country: "Italy", iso: "380", era: "ancients", president: false,
    style: "Populist general — combined battlefield charisma, calculated clemency, and direct appeal over the Senate's head.",
    structure: "Personal loyalty networks (legions, clients, debtors) layered over decaying republican institutions.",
    delegation: "Superb with lieutenants in war (Labienus, Antony); in politics kept every thread in his own hands — fatally.",
    tags: ["charismatic", "warrior", "hubspoke"] },

  { id: "augustus", name: "Augustus", years: "r. 27 BC–AD 14", title: "First Roman Emperor", country: "Italy", iso: "380", era: "ancients", president: false,
    style: "Institutional genius disguised as restoration — revolutionary power wrapped in republican language ('first among equals').",
    structure: "The principate: monarchy assembled from stacked republican offices, plus a professional standing army and civil service.",
    delegation: "The great two-lieutenant model: Agrippa for war and works, Maecenas for culture and soft power.",
    tags: ["transformational", "institutional", "viziers", "bureaucratic", "mythmaking", "propaganda"] },

  { id: "marcusaurelius", name: "Marcus Aurelius", years: "r. AD 161–180", title: "Roman Emperor", country: "Italy", iso: "380", era: "ancients", president: false,
    style: "Stoic steward — power as duty; the Meditations are a leader auditing himself nightly.",
    structure: "Ruled through the imperial council and initially a co-emperor (Lucius Verus).",
    delegation: "Consultative and trusting of the senatorial class; his one great failure of judgment was his successor, Commodus.",
    tags: ["steward", "collegial", "institutional"] },

  { id: "cleopatra", name: "Cleopatra VII", years: "r. 51–30 BC", title: "Pharaoh of Egypt", country: "Egypt", iso: "818", era: "ancients", president: false,
    style: "Statecraft through personal alliance — bound Egypt's survival to Caesar, then Antony, playing kingdom-scale diplomacy in person.",
    structure: "Hellenistic court monarchy sitting atop Egypt's ancient temple bureaucracy; spoke Egyptian, unlike her predecessors.",
    delegation: "Kept diplomacy, finance and self-presentation in her own hands; ministers ran the grain state beneath her.",
    tags: ["charismatic", "court", "transactional"] },

  // ---------------- WARLORDS ----------------
  { id: "caocao", name: "Cao Cao", years: "155–220", title: "Warlord, Chancellor of Han", country: "China", iso: "156", era: "warlords", president: false,
    style: "Ruthless pragmatist and poet — issued edicts recruiting the talented regardless of virtue or birth.",
    structure: "Military-agricultural colonies (tuntian) to feed armies; held the emperor as legitimacy shield.",
    delegation: "Promoted commoners and defectors on ability; kept strategic decisions tightly personal.",
    tags: ["meritocracy", "warrior", "coercive", "missioncommand"] },

  { id: "attila", name: "Attila", years: "r. 434–453", title: "Ruler of the Huns", country: "Hungary", iso: "348", era: "warlords", president: false,
    style: "Extortion as grand strategy — fear of the horde converted into Roman gold and tribute treaties.",
    structure: "A tribute-fed confederacy of tribes bound to his person; no bureaucracy, no capital, no succession.",
    delegation: "Ruled through kin and sworn chieftains; the empire evaporated within a year of his death — the personalist cautionary tale.",
    tags: ["coercive", "charismatic", "hubspoke"] },

  { id: "genghis", name: "Genghis Khan", years: "r. 1206–1227", title: "Founder, Mongol Empire", country: "Mongolia", iso: "496", era: "warlords", president: false,
    style: "Radical meritocrat — smashed tribal aristocracy, promoted herders to generals, rewarded loyalty over kinship.",
    structure: "Decimal army (10/100/1,000/10,000) cross-cutting tribal lines; the Yassa as portable law.",
    delegation: "True mission command: Subotai and Jebe ran independent campaigns thousands of miles from him.",
    tags: ["transformational", "meritocracy", "missioncommand", "warrior"] },

  { id: "kublai", name: "Kublai Khan", years: "r. 1260–1294", title: "Great Khan, Yuan Emperor", country: "China", iso: "156", era: "warlords", president: false,
    style: "Conqueror turned administrator — the pivot from extracting a civilization to governing it.",
    structure: "Dual system: Mongol military caste over a Chinese-style civil bureaucracy, staffed heavily with foreigners.",
    delegation: "Delegated administration to non-Chinese specialists (Marco Polo's era) to avoid capture by local elites.",
    tags: ["institutional", "bureaucratic", "dividerule"] },

  { id: "timur", name: "Timur (Tamerlane)", years: "r. 1370–1405", title: "Amir of the Timurid Empire", country: "Uzbekistan", iso: "860", era: "warlords", president: false,
    style: "Terror as communication — towers of skulls were policy announcements to the next city on the route.",
    structure: "Pure personalist empire; Samarkand adorned by deported artisans, but no lasting institutions.",
    delegation: "Family appanages and personal command of every major campaign; the state fragmented at his death.",
    tags: ["coercive", "hubspoke", "court", "warrior"] },

  { id: "nobunaga", name: "Oda Nobunaga", years: "1534–1582", title: "Unifier of Japan (first phase)", country: "Japan", iso: "392", era: "warlords", president: false,
    style: "Ruthless innovator — massed arquebuses at Nagashino, burned the warrior-monasteries, freed markets (rakuichi-rakuza).",
    structure: "Conquest coalition run on performance; castles and commerce as power base.",
    delegation: "Promoted a sandal-bearer (Hideyoshi) to general — spectacular talent-spotting; betrayed by another lieutenant.",
    tags: ["meritocracy", "coercive", "missioncommand", "warrior"] },

  { id: "shaka", name: "Shaka Zulu", years: "r. 1816–1828", title: "King of the Zulu", country: "South Africa", iso: "710", era: "warlords", president: false,
    style: "Total military reorganizer — new weapons (iklwa), new tactics (bull horns), society restructured around the regiment.",
    structure: "Age-set regiments (amabutho) dissolving clan loyalty into loyalty to the king.",
    delegation: "Concentrated command personally; escalating coercion ended in assassination by his own brothers.",
    tags: ["warrior", "coercive", "transformational"] },

  // ---------------- MEDIEVAL ----------------
  { id: "justinian", name: "Justinian I", years: "r. 527–565", title: "Byzantine Emperor", country: "Turkey", iso: "792", era: "medieval", president: false,
    style: "The sleepless emperor — reconquest, Hagia Sophia, and the recodification of all Roman law in one reign.",
    structure: "Dense imperial bureaucracy; law (Corpus Juris Civilis) as the empire's export product to all later Europe.",
    delegation: "World-class picks — Tribonian for law, Belisarius for war, Theodora as full political partner — yet trusted none of them entirely.",
    tags: ["bureaucratic", "viziers", "micromanage", "institutional"] },

  { id: "charlemagne", name: "Charlemagne", years: "r. 768–814", title: "King of the Franks, Emperor", country: "France", iso: "250", era: "medieval", president: false,
    style: "Itinerant warrior-king and patron of learning — the court itself traveled as the government.",
    structure: "Counties held by appointed counts; capitularies as written policy in a mostly oral world.",
    delegation: "Missi dominici — paired royal envoys (one cleric, one layman) auditing the counts. Delegation with verification.",
    tags: ["feudal", "institutional", "warrior", "steward"] },

  { id: "harun", name: "Harun al-Rashid", years: "r. 786–809", title: "Abbasid Caliph", country: "Iraq", iso: "368", era: "medieval", president: false,
    style: "Golden-age court monarch — Baghdad as the world's intellectual capital, the caliph as its dazzling center.",
    structure: "Sophisticated vizieral government; the Barmakid family ran the machinery of state.",
    delegation: "Delegated almost everything to the Barmakids for 17 years — then annihilated them overnight when they grew too powerful.",
    tags: ["court", "viziers", "dividerule"] },

  { id: "alfred", name: "Alfred the Great", years: "r. 871–899", title: "King of Wessex", country: "United Kingdom", iso: "826", era: "medieval", president: false,
    style: "Steward-king — survived catastrophe, then rebuilt: fortified towns, a navy, law code, and translated books himself.",
    structure: "The burh network: mutually supporting fortified towns with assessed garrison duties (the Burghal Hidage).",
    delegation: "Grew capacity deliberately — required his ealdormen and reeves to become literate or lose office.",
    tags: ["steward", "institutional", "transformational"] },

  { id: "william1", name: "William the Conqueror", years: "r. 1066–1087", title: "King of England", country: "United Kingdom", iso: "826", era: "medieval", president: false,
    style: "Conquest followed by audit — harried the North brutally, then counted every pig in the kingdom.",
    structure: "Imported feudalism with a twist: all land held ultimately from the king; scattered baronial holdings to prevent regional blocs.",
    delegation: "The Domesday Book (1086): delegation made safe by total information. Verify, then trust.",
    tags: ["feudal", "coercive", "institutional"] },

  { id: "eleanor", name: "Eleanor of Aquitaine", years: "1122–1204", title: "Queen of France, then England", country: "France", iso: "250", era: "medieval", president: false,
    style: "Dynastic network-builder — queen of two kingdoms, mother of two kings, power broker across sixty years.",
    structure: "Held Aquitaine in her own right; operated through marriage alliances, courts and her sons.",
    delegation: "Effectively regent of England during Richard I's crusade and captivity — the trusted-family model at its peak.",
    tags: ["court", "charismatic", "transactional"] },

  { id: "saladin", name: "Saladin", years: "r. 1174–1193", title: "Sultan of Egypt and Syria", country: "Egypt", iso: "818", era: "medieval", president: false,
    style: "Legitimacy through generosity — piety, clemency at Jerusalem, and famously dying almost penniless from giving.",
    structure: "Family confederation: brothers and sons held Egypt, Damascus, Aleppo as linked appanages.",
    delegation: "High-trust family delegation; held the coalition together by personal reputation more than institutions.",
    tags: ["charismatic", "steward", "feudal"] },

  { id: "frederick2", name: "Frederick II Hohenstaufen", years: "r. 1220–1250", title: "Holy Roman Emperor, King of Sicily", country: "Italy", iso: "380", era: "medieval", president: false,
    style: "'Stupor mundi' — polyglot rationalist who recovered Jerusalem by negotiation while excommunicated.",
    structure: "In Sicily, Europe's first proto-modern state: salaried officials, standing courts, state monopolies (Constitutions of Melfi).",
    delegation: "Salaried professional administrators instead of feudal magnates — meritocracy two centuries early.",
    tags: ["bureaucratic", "meritocracy", "institutional"] },

  { id: "louis9", name: "Louis IX (St. Louis)", years: "r. 1226–1270", title: "King of France", country: "France", iso: "250", era: "medieval", president: false,
    style: "Saint-king as arbiter — justice under the oak at Vincennes; other monarchs chose him as their referee.",
    structure: "Strengthened royal justice over feudal courts; the crown as final court of appeal.",
    delegation: "Sent enquêteurs to investigate his own officials' abuses — internal affairs, 13th-century style.",
    tags: ["steward", "institutional", "feudal"] },

  { id: "mansamusa", name: "Mansa Musa", years: "r. 1312–1337", title: "Emperor of Mali", country: "Mali", iso: "466", era: "medieval", president: false,
    style: "Wealth as soft power — the 1324 hajj distributed so much gold it depressed Cairo's market for a decade and put Mali on Europe's maps.",
    structure: "Provincial governors over a trade empire built on gold and salt routes; Timbuktu endowed as a scholarly capital.",
    delegation: "Left the empire to deputies for over a year during the hajj — and it held. Institutions outran the person.",
    tags: ["court", "steward", "institutional"] },

  // ---------------- RENAISSANCE ----------------
  { id: "mehmed2", name: "Mehmed II", years: "r. 1451–1481", title: "Ottoman Sultan", country: "Turkey", iso: "792", era: "renaissance", president: false,
    style: "The Conqueror — took Constantinople at 21 with engineering audacity (ships hauled overland), then codified imperial law.",
    structure: "The kul system: slave-recruited elite (devshirme) owing everything to the sultan — meritocracy without aristocracy.",
    delegation: "Grand viziers held real power but served at the bowstring's pleasure. High delegation, higher accountability.",
    tags: ["meritocracy", "coercive", "warrior", "viziers"] },

  { id: "lorenzo", name: "Lorenzo de' Medici", years: "1449–1492", title: "De facto ruler of Florence", country: "Italy", iso: "380", era: "renaissance", president: false,
    style: "Power without office — 'Il Magnifico' governed a republic through patronage, marriage brokering and the family bank.",
    structure: "A political machine inside republican forms: packed councils, clients in every guild, art as reputation strategy.",
    delegation: "Ran diplomacy personally (his ride to Naples ended a war); let the bank rot under weak managers — a telling gap.",
    tags: ["machine", "charismatic", "hubspoke", "transactional", "clientelism"] },

  { id: "cesareborgia", name: "Cesare Borgia", years: "1475–1507", title: "Duke of Valentinois", country: "Italy", iso: "380", era: "renaissance", president: false,
    style: "Machiavelli's model prince — speed, secrecy, and cruelty 'well used'; unified the Romagna in months.",
    structure: "Personal duchy carved by force and papal money; hostage to his father's papacy.",
    delegation: "The Remirro de Orco playbook: delegate the brutal work, then publicly destroy the delegate and harvest the credit.",
    tags: ["coercive", "hubspoke", "dividerule"] },

  { id: "isabella", name: "Isabella I of Castile", years: "r. 1474–1504", title: "Queen of Castile", country: "Spain", iso: "724", era: "renaissance", president: false,
    style: "Partnership monarchy — 'tanto monta' with Ferdinand; personally administered justice on royal progresses.",
    structure: "Rebuilt crown authority via councils and the Santa Hermandad (royal constabulary) over feudal magnates.",
    delegation: "Picked consequential agents: Columbus funded, Cisneros empowered, the Inquisition unleashed — vision and shadow alike.",
    tags: ["collegial", "institutional", "steward"] },

  { id: "henry8", name: "Henry VIII", years: "r. 1509–1547", title: "King of England", country: "United Kingdom", iso: "826", era: "renaissance", president: false,
    style: "Rule by devouring ministers — magnificent, willful, allergic to paperwork, lethal to those who did it for him.",
    structure: "Tudor court politics: faction access to the king's person (the Privy Chamber) was power itself.",
    delegation: "Serial all-powerful ministers — Wolsey then Cromwell — each granted everything, then executed. Delegation as consumption.",
    tags: ["court", "viziers", "coercive", "dividerule"] },

  { id: "suleiman", name: "Suleiman the Magnificent", years: "r. 1520–1566", title: "Ottoman Sultan", country: "Turkey", iso: "792", era: "renaissance", president: false,
    style: "The Lawgiver (Kanuni) — apex Ottoman power codified into administrative law meant to outlast him.",
    structure: "Mature imperial machine: grand vizier, divan council, devshirme elite, provincial timar system.",
    delegation: "Elevated boyhood friend Ibrahim Pasha to near co-rule — then had him strangled. Trust in the palace had a ceiling.",
    tags: ["bureaucratic", "institutional", "viziers"] },

  { id: "charles5", name: "Charles V", years: "r. 1519–1556", title: "Holy Roman Emperor, King of Spain", country: "Spain", iso: "724", era: "renaissance", president: false,
    style: "Manager of an inheritance too big to govern — the first empire 'on which the sun never set', ruled by correspondence.",
    structure: "Composite monarchy: each realm kept its own laws; councils for each, viceroys everywhere, the emperor perpetually traveling.",
    delegation: "Delegated to regents (often family) yet decided too much himself, too slowly; abdicated exhausted, splitting the empire.",
    tags: ["bureaucratic", "feudal", "micromanage"] },

  { id: "elizabeth1", name: "Elizabeth I", years: "r. 1558–1603", title: "Queen of England", country: "United Kingdom", iso: "826", era: "renaissance", president: false,
    style: "Strategic ambiguity as doctrine — 'video et taceo'; kept suitors, parliaments and Spain guessing for 45 years.",
    structure: "Small, stable Privy Council; the cult of Gloriana as national brand management.",
    delegation: "One great minister (Burghley) for 40 years, balanced against rivals (Leicester, Walsingham, Essex) — stability plus creative tension.",
    tags: ["charismatic", "cabinet", "viziers", "dividerule", "propaganda", "mythmaking"] },

  // ---------------- EARLY MODERN ----------------
  { id: "akbar", name: "Akbar", years: "r. 1556–1605", title: "Mughal Emperor", country: "India", iso: "356", era: "earlymodern", president: false,
    style: "Pluralist integrator — married Rajput princesses, abolished the jizya, hosted inter-faith debates; empire as coalition.",
    structure: "Mansabdari system: every noble held a numerical rank defining pay and troop obligations — a unified service hierarchy.",
    delegation: "Ranked, rotated and transferred officials to prevent regional entrenchment; illiterate himself, ran it all by memory and council.",
    tags: ["transformational", "meritocracy", "institutional", "collegial"] },

  { id: "ieyasu", name: "Tokugawa Ieyasu", years: "1543–1616", title: "Shogun, unifier of Japan", country: "Japan", iso: "392", era: "earlymodern", president: false,
    style: "Patience as strategy — 'the cuckoo will sing if you wait'; outlasted Nobunaga's fire and Hideyoshi's cunning.",
    structure: "Bakuhan system: domains ranked by loyalty history, hostage residence in Edo (sankin-kotai) draining lords' treasuries by design.",
    delegation: "Institutional design over personal brilliance — the machine he built ran Japan for 250 years of peace.",
    tags: ["institutional", "feudal", "transactional", "steward"] },

  { id: "richelieu", name: "Cardinal Richelieu", years: "in office 1624–1642", title: "Chief Minister of France", country: "France", iso: "250", era: "earlymodern", president: false,
    style: "Raison d'état incarnate — the state's interest above religion, nobility, even the king's family.",
    structure: "Bypassed the feudal nobility with intendants — removable royal agents in the provinces; razed nobles' castles.",
    delegation: "The vizier perfected: total power wielded in another's name, secured by making himself indispensable to a weaker king.",
    tags: ["viziers", "bureaucratic", "dividerule", "coercive"] },

  { id: "cromwell", name: "Oliver Cromwell", years: "1599–1658", title: "Lord Protector", country: "United Kingdom", iso: "826", era: "earlymodern", president: false,
    style: "Godly meritocrat — 'I had rather have a plain russet-coated captain that knows what he fights for' than a gentleman without conviction.",
    structure: "The New Model Army: promotion by ability and zeal, not birth — then found no constitutional form that fit and ruled by sword.",
    delegation: "Mission command in war; in peace, cycled through parliaments and constitutions, dissolving each that crossed him.",
    tags: ["meritocracy", "missioncommand", "coercive", "charismatic"] },

  { id: "louis14", name: "Louis XIV", years: "r. 1643–1715", title: "King of France", country: "France", iso: "250", era: "earlymodern", president: false,
    style: "The theater state — Versailles as a gilded cage where the nobility competed to hand him his shirt instead of raising armies.",
    structure: "After Mazarin: 'no first minister, ever again.' All spokes met at the king; etiquette itself was an instrument of control.",
    delegation: "Great ministers in silos — Colbert (money) against Louvois (war), deliberately rivalrous; worked the files daily for 54 years.",
    tags: ["court", "hubspoke", "micromanage", "dividerule", "spectacle", "propaganda"] },

  { id: "kangxi", name: "Kangxi Emperor", years: "r. 1661–1722", title: "Qing Emperor", country: "China", iso: "156", era: "earlymodern", president: false,
    style: "Scholar-emperor — 61 years of disciplined personal rule; patronized both Confucian learning and Jesuit science.",
    structure: "Manchu conquest elite balanced atop the Chinese examination bureaucracy.",
    delegation: "Invented the palace memorial: sealed reports direct from provincial officials, bypassing the bureaucracy — a private intelligence channel.",
    tags: ["meritocracy", "bureaucratic", "micromanage", "steward"] },

  { id: "peter1", name: "Peter the Great", years: "r. 1682–1725", title: "Tsar of Russia", country: "Russia", iso: "643", era: "earlymodern", president: false,
    style: "Forced modernization from above — shaved boyars' beards personally, built a capital on a swamp, worked as a shipwright incognito.",
    structure: "Table of Ranks (1722): state service graded by merit, nobility earnable through performance — aristocracy conscripted into bureaucracy.",
    delegation: "Promoted talent from nowhere (Menshikov, a pie-seller's boy) but flogged and executed failures — including his own son.",
    tags: ["coercive", "transformational", "meritocracy", "micromanage"] },

  { id: "frederick2p", name: "Frederick the Great", years: "r. 1740–1786", title: "King of Prussia", country: "Germany", iso: "276", era: "earlymodern", president: false,
    style: "'First servant of the state' — enlightened absolutism with a soldier's discipline and a philosopher's correspondence.",
    structure: "Kabinettsregierung: governed from his desk by written order, ministers reduced to executors.",
    delegation: "Notoriously low — read everything, decided everything; the system's dependence on one genius broke his successors.",
    tags: ["steward", "micromanage", "bureaucratic", "warrior"] },

  { id: "mariatheresa", name: "Maria Theresa", years: "r. 1740–1780", title: "Habsburg Empress", country: "Austria", iso: "040", era: "earlymodern", president: false,
    style: "Pragmatic reformer — inherited a collapsing state under invasion at 23, left a modernized great power and sixteen children.",
    structure: "Centralized administration and tax reform via chosen reformers (Haugwitz), diplomacy revolutionized by Kaunitz.",
    delegation: "The rare monarch who found, trusted and retained great ministers for decades without turning on them.",
    tags: ["collegial", "viziers", "institutional", "steward"] },

  { id: "catherine2", name: "Catherine the Great", years: "r. 1762–1796", title: "Empress of Russia", country: "Russia", iso: "643", era: "earlymodern", president: false,
    style: "Enlightened absolutist and master of self-presentation — corresponded with Voltaire while partitioning Poland.",
    structure: "Court politics of favorites, formalized provincial administration after Pugachev's revolt scared her.",
    delegation: "Favorites as ministers — Potemkin effectively co-ruled the south, a genuine delegated viceroyalty built on personal trust.",
    tags: ["charismatic", "viziers", "court", "transactional"] },

  // ---------------- COLONIAL ----------------
  { id: "nzinga", name: "Nzinga of Ndongo and Matamba", years: "r. 1624–1663", title: "Queen, Ndongo & Matamba", country: "Angola", iso: "024", era: "colonial", president: false,
    style: "Adaptive resistance — four decades switching between war, alliance and trade negotiation against the Portuguese.",
    structure: "Rebuilt a state in exile (Matamba) as a haven for escaped slaves and soldiers; legitimacy by performance, not lineage.",
    delegation: "Personally led armies into her sixties; diplomacy conducted face-to-face — the famous chair incident at Luanda.",
    tags: ["charismatic", "transactional", "warrior"] },

  { id: "washington", name: "George Washington", years: "in office 1789–1797", title: "1st U.S. President", country: "United States", iso: "840", era: "colonial", president: true,
    style: "Power by relinquishing it — resigned his commission, then the presidency; every exit made the office stronger than the man.",
    structure: "Invented the cabinet; treated the presidency as precedent-setting performance, aware every act would be copied.",
    delegation: "Harnessed rivals deliberately — Hamilton and Jefferson in the same room — and extracted decisions from their collisions.",
    tags: ["steward", "cabinet", "institutional", "collegial"] },

  { id: "jefferson", name: "Thomas Jefferson", years: "in office 1801–1809", title: "3rd U.S. President", country: "United States", iso: "840", era: "colonial", president: true,
    style: "Ideological vision executed through informal machinery — small-government philosopher who doubled the country with one purchase.",
    structure: "Governed through the first organized party (Democratic-Republicans) and dinner-table diplomacy rather than formal command.",
    delegation: "Loose with process, deft with people: Madison and Gallatin as a genuine executive team.",
    tags: ["machine", "cabinet", "transformational"] },

  { id: "toussaint", name: "Toussaint Louverture", years: "c. 1743–1803", title: "Leader, Haitian Revolution", country: "Haiti", iso: "332", era: "colonial", president: false,
    style: "From enslaved coachman to statesman — outmaneuvered Spain, Britain and France in turn; discipline and literacy as weapons.",
    structure: "Militarized labor state trying to keep plantation economy alive under Black self-rule — the revolution's hardest tradeoff.",
    delegation: "Grew generals (Dessalines, Christophe) who finished the revolution after his betrayal and death in a French prison.",
    tags: ["charismatic", "transformational", "missioncommand", "coercive"] },

  { id: "bolivar", name: "Simón Bolívar", years: "1783–1830", title: "The Liberator", country: "Venezuela", iso: "862", era: "colonial", president: false,
    style: "Romantic liberator — six countries freed by audacity (the Andes crossing) and relentless personal will.",
    structure: "Gran Colombia held together by his prestige alone; drifted toward personal dictatorship as it fractured.",
    delegation: "Inspired lieutenants (Sucre, the best of them) but built no institutions — 'those who serve a revolution plough the sea.'",
    tags: ["charismatic", "hubspoke", "missioncommand", "warrior"] },

  { id: "sanmartin", name: "José de San Martín", years: "1778–1850", title: "Liberator of the South", country: "Argentina", iso: "032", era: "colonial", president: false,
    style: "The methodical liberator — professional soldier who planned the Andes crossing like an engineering project.",
    structure: "Built and trained the Army of the Andes as a modern professional force before risking a single battle.",
    delegation: "The Guayaquil renunciation: judged Bolívar better placed to finish the job, handed him the war, and sailed into exile. Ego subordinated to mission.",
    tags: ["steward", "missioncommand", "warrior"] },

  // ---------------- 19TH CENTURY ----------------
  { id: "napoleon", name: "Napoleon Bonaparte", years: "r. 1799–1815", title: "Emperor of the French", country: "France", iso: "250", era: "c19", president: false,
    style: "'Careers open to talent' — meritocratic empire run at the tempo of one incandescent mind.",
    structure: "The Napoleonic Code, prefects, the Bank of France — administrative machinery that outlived the empire everywhere it touched.",
    delegation: "Marshals promoted from the ranks executed brilliantly under his eye but withered independent of it — the genius-bottleneck problem.",
    tags: ["charismatic", "meritocracy", "hubspoke", "micromanage", "warrior", "propaganda"] },

  { id: "jackson", name: "Andrew Jackson", years: "in office 1829–1837", title: "7th U.S. President", country: "United States", iso: "840", era: "c19", president: true,
    style: "Populist force of nature — the presidency as direct tribune of the (white male) people against elites and banks.",
    structure: "The spoils system: party loyalty rewarded with office — mass patronage as a governing machine; Indian Removal its darkest use of power.",
    delegation: "Bypassed his official cabinet for an informal 'Kitchen Cabinet' of cronies and editors.",
    tags: ["charismatic", "machine", "hubspoke", "coercive", "spoils", "clientelism"] },

  { id: "victoria", name: "Queen Victoria", years: "r. 1837–1901", title: "Queen of the United Kingdom", country: "United Kingdom", iso: "826", era: "c19", president: false,
    style: "Constitutional symbol perfected — Bagehot's trio: the right to be consulted, to encourage, to warn.",
    structure: "Reigned while ministers ruled; the crown as continuity above the party churn of Gladstone and Disraeli.",
    delegation: "Influence through longevity, family networks across Europe's thrones, and sheer institutional memory.",
    tags: ["institutional", "steward", "court"] },

  { id: "lincoln", name: "Abraham Lincoln", years: "in office 1861–1865", title: "16th U.S. President", country: "United States", iso: "840", era: "c19", president: true,
    style: "Persuasion, patience and timing — moved on emancipation exactly when the coalition could bear it, not before.",
    structure: "The 'team of rivals' cabinet: his defeated opponents given the great departments and out-argued in their own rooms.",
    delegation: "Suffered through McClellan's caution for years, then found Grant and stepped back: 'The particulars of your plan I neither know nor seek to know.'",
    tags: ["collegial", "cabinet", "steward", "missioncommand"] },

  { id: "juarez", name: "Benito Juárez", years: "in office 1858–1872", title: "President of Mexico", country: "Mexico", iso: "484", era: "c19", president: true,
    style: "Legalist endurance — a Zapotec shepherd boy turned jurist who carried the republic in a black carriage through years of French occupation.",
    structure: "La Reforma: liberal constitution, church-state separation, rule of law as the national project.",
    delegation: "The constitution as the true leader; his own austere persistence its guarantee.",
    tags: ["institutional", "steward", "bureaucratic"] },

  { id: "bismarck", name: "Otto von Bismarck", years: "in office 1862–1890", title: "Chancellor of Germany", country: "Germany", iso: "276", era: "c19", president: false,
    style: "The honest broker who was neither — realpolitik improviser keeping 'many irons in the fire' and choosing late.",
    structure: "A constitution custom-built around himself: chancellor answerable only to a king he could manage.",
    delegation: "Delegated little that mattered; invented welfare-state insurance to outflank socialists — tactics without ideology. The system collapsed under successors who inherited the machine but not the mechanic.",
    tags: ["transactional", "dividerule", "viziers", "hubspoke"] },

  { id: "disraeli", name: "Benjamin Disraeli", years: "PM 1868, 1874–1880", title: "UK Prime Minister", country: "United Kingdom", iso: "826", era: "c19", president: false,
    style: "Novelist's imagination in politics — 'One Nation' Toryism, empire as theater, flattery as statecraft ('everyone likes flattery; with royalty lay it on with a trowel').",
    structure: "Cabinet government, mastered through parliamentary performance and the management of Victoria.",
    delegation: "Big strokes delegated to able ministers; kept the narrative — and the Queen — for himself.",
    tags: ["charismatic", "cabinet", "transactional"] },

  { id: "cavour", name: "Camillo di Cavour", years: "in office 1852–1861", title: "Prime Minister of Piedmont-Sardinia", country: "Italy", iso: "380", era: "c19", president: false,
    style: "Diplomatic engineer of unification — achieved with newspapers, railways, alliances and other people's revolutions what armies alone couldn't.",
    structure: "Parliamentary liberalism as the respectable vehicle; Garibaldi's radicalism as the deniable instrument.",
    delegation: "Used forces he didn't control — masterfully co-opting Garibaldi's conquests for the Piedmontese crown.",
    tags: ["transactional", "cabinet", "dividerule", "coalitionbrokerage"] },

  { id: "cixi", name: "Empress Dowager Cixi", years: "in power 1861–1908", title: "Regent of Qing China", country: "China", iso: "156", era: "c19", president: false,
    style: "Power from behind the screen — a concubine who ruled the world's most populous state for half a century through regencies.",
    structure: "Court faction management: eunuchs, censors and princes balanced against reformers and generals.",
    delegation: "Empowered provincial strongmen (Li Hongzhang) when useful, crushed reform (the Hundred Days) when it threatened her position.",
    tags: ["court", "dividerule", "coercive"] },

  { id: "meiji", name: "Meiji Emperor (and the genrō)", years: "r. 1867–1912", title: "Emperor of Japan", country: "Japan", iso: "392", era: "c19", president: false,
    style: "Symbolic center of a managed revolution — feudal Japan to great power in one generation, in his name.",
    structure: "The genrō: an informal oligarch collegium (Itō, Yamagata) steering constitution, army and industry behind the throne.",
    delegation: "The emperor reigned as sacred legitimacy while the oligarchs governed — perhaps history's most effective figurehead arrangement.",
    tags: ["institutional", "collegial", "transformational"] },

  { id: "menelik2", name: "Menelik II", years: "r. 1889–1913", title: "Emperor of Ethiopia", country: "Ethiopia", iso: "231", era: "c19", president: false,
    style: "Modernizing coalition-builder — stockpiled European rifles by playing rival powers, then crushed Italy at Adwa (1896).",
    structure: "Imperial confederation of regional rases (lords) bound by marriage, conquest and shared victory.",
    delegation: "Mobilized near-feudal levies into a coordinated national campaign — coalition warfare as statecraft.",
    tags: ["transactional", "feudal", "warrior", "transformational"] },

  // ---------------- 20TH CENTURY ----------------
  { id: "troosevelt", name: "Theodore Roosevelt", years: "in office 1901–1909", title: "26th U.S. President", country: "United States", iso: "840", era: "c20", president: true,
    style: "The bully pulpit — the presidency as a platform of pure energy; trust-busting, canal-digging, peace-brokering.",
    structure: "Stewardship theory: the president may do anything the Constitution doesn't forbid — a permanent expansion of the office.",
    delegation: "Hyperactive hub; strong personalities around him, but the motor and the message were always TR.",
    tags: ["charismatic", "hubspoke", "steward"] },

  { id: "lenin", name: "Vladimir Lenin", years: "in power 1917–1924", title: "Premier, Soviet Russia", country: "Russia", iso: "643", era: "c20", president: false,
    style: "The professional revolutionary — 'What Is To Be Done': a disciplined vanguard party as the instrument of history.",
    structure: "Democratic centralism: total debate until decision, total obedience after — the org-design that defined a century of parties.",
    delegation: "Won arguments by threat of resignation rather than purge; his Testament warning about Stalin went unheeded — a fatal succession failure.",
    tags: ["transformational", "partystate", "coercive"] },

  { id: "ataturk", name: "Mustafa Kemal Atatürk", years: "in office 1923–1938", title: "Founder-President of Turkey", country: "Turkey", iso: "792", era: "c20", president: true,
    style: "Revolutionary state-builder — alphabet, calendar, dress, law and caliphate all remade in fifteen years by decree and will.",
    structure: "Single-party republic (CHP) as modernization machine; the army as guardian of the secular settlement.",
    delegation: "İnönü as loyal executor; but the six arrows of Kemalism were drawn by one hand.",
    tags: ["transformational", "coercive", "partystate", "warrior", "nationalism", "politicalreligion"] },

  { id: "stalin", name: "Joseph Stalin", years: "in power 1924–1953", title: "General Secretary, USSR", country: "Russia", iso: "643", era: "c20", president: false,
    style: "Personnel is policy — won power not by oratory but by controlling appointments as the 'grey blur' General Secretary.",
    structure: "Party-state with overlapping secret-police hierarchies; terror as a system of management, not just repression.",
    delegation: "Subordinates kept in deliberate insecurity — competing, informing, expendable; the Great Terror consumed his own instrument.",
    tags: ["coercive", "partystate", "dividerule", "micromanage", "cultpersonality"] },

  { id: "fdr", name: "Franklin D. Roosevelt", years: "in office 1933–1945", title: "32nd U.S. President", country: "United States", iso: "840", era: "c20", president: true,
    style: "Deliberate administrative chaos — overlapping agencies and rival aides so all information and final choices flowed to him; serene public confidence over private opacity.",
    structure: "The alphabet agencies: institutional experimentation at scale — 'try something; if it fails, admit it frankly and try another.'",
    delegation: "Assigned the same task to competing subordinates; nobody but FDR ever saw the whole board.",
    tags: ["charismatic", "dividerule", "hubspoke", "transformational"] },

  { id: "hitler", name: "Adolf Hitler", years: "in power 1933–1945", title: "Dictator of Germany", country: "Germany", iso: "276", era: "c20", president: false,
    style: "Charismatic authority in its most destructive form — legitimacy staked entirely on the Führer myth and escalating gambles.",
    structure: "Deliberate institutional darwinism: overlapping fiefdoms (party, SS, state) competing for favor — chaos as a control mechanism.",
    delegation: "'Working towards the Führer' — subordinates radicalized policy guessing at his wishes; a system engineered for catastrophe without written orders.",
    tags: ["charismatic", "coercive", "dividerule", "hubspoke", "propaganda", "cultpersonality"] },

  { id: "churchill", name: "Winston Churchill", years: "PM 1940–45, 1951–55", title: "UK Prime Minister", country: "United Kingdom", iso: "826", era: "c20", president: false,
    style: "Language mobilized as a weapon — defiance made national policy in 1940 when the rational case was surrender.",
    structure: "Fused PM with Minister of Defence; war cabinet plus a personal statistical office (Lindemann) as private analytics.",
    delegation: "Bombarded commanders with 'Action This Day' minutes — famously demanding everything in writing; interfered constantly, but took 'no' from Brooke.",
    tags: ["charismatic", "cabinet", "micromanage", "warrior"] },

  { id: "degaulle", name: "Charles de Gaulle", years: "in office 1959–1969", title: "President of France", country: "France", iso: "250", era: "c20", president: true,
    style: "Aloof grandeur as method — 'a certain idea of France'; distance and mystery cultivated deliberately (read his The Edge of the Sword).",
    structure: "The Fifth Republic: a presidential constitution written around his own conception of leadership; referendum as direct bond with the nation.",
    delegation: "Set the line, left execution to premiers (Pompidou); resigned — twice — rather than govern without genuine mandate.",
    tags: ["charismatic", "institutional", "hubspoke", "steward"] },

  { id: "mao", name: "Mao Zedong", years: "in power 1949–1976", title: "Chairman, People's Republic of China", country: "China", iso: "156", era: "c20", president: false,
    style: "Permanent revolution — governance by mass campaign; deliberately wielded chaos (the Cultural Revolution) against his own party machine.",
    structure: "Party-state he repeatedly attacked from above and below whenever it constrained him.",
    delegation: "Retreated to the 'second line' then destroyed the delegates (Liu Shaoqi, Lin Biao) when they accumulated standing.",
    tags: ["charismatic", "coercive", "partystate", "dividerule", "cultpersonality", "propaganda"] },

  { id: "hochiminh", name: "Ho Chi Minh", years: "in office 1945–1969", title: "President of North Vietnam", country: "Vietnam", iso: "704", era: "c20", president: true,
    style: "Ascetic symbol — 'Uncle Ho', sandals and simplicity as political weapons; thirty years abroad building networks first.",
    structure: "Collective politburo made the hard calls (Le Duan increasingly so); Ho as unifying face and diplomat.",
    delegation: "Genuine collective leadership behind a personalist facade — the inverse of most autocracies.",
    tags: ["steward", "collegial", "partystate", "charismatic", "mythmaking"] },

  { id: "bengurion", name: "David Ben-Gurion", years: "PM 1948–54, 1955–63", title: "Founding PM of Israel", country: "Israel", iso: "376", era: "c20", president: false,
    style: "State-building pragmatist — declared independence against advice, then made the state supreme over every pre-state militia and faction (mamlachtiyut).",
    structure: "Dismantled Palmach and absorbed Irgun into one army under civilian command — the founding act of institutional monopoly on force.",
    delegation: "Domineering in security, delegating in economics; retired to a desert kibbutz, twice, as deliberate example.",
    tags: ["institutional", "transformational", "coercive", "steward"] },

  { id: "nasser", name: "Gamal Abdel Nasser", years: "in office 1954–1970", title: "President of Egypt", country: "Egypt", iso: "818", era: "c20", president: true,
    style: "Pan-Arab charisma at radio scale — Voice of the Arabs made him a transnational leader beyond any border.",
    structure: "Officer network turned single-party state; nationalization (Suez, 1956) as sovereignty theater that made him a colossus.",
    delegation: "Trusted the army to Amer with disastrous 1967 results — charisma's blind spot for institutional rot.",
    tags: ["charismatic", "hubspoke", "partystate", "nationalism", "propaganda"] },

  { id: "nkrumah", name: "Kwame Nkrumah", years: "in office 1957–1966", title: "First President of Ghana", country: "Ghana", iso: "288", era: "c20", president: true,
    style: "Independence charisma — first sub-Saharan colony freed; 'seek ye first the political kingdom.'",
    structure: "Mass party (CPP) drifting to one-party state and personality cult as pan-African ambitions outran Ghana's economy.",
    delegation: "Increasingly isolated hub; deposed by coup while abroad — the postcolonial founder's arc in miniature.",
    tags: ["charismatic", "partystate", "transformational", "cultpersonality", "nationalism"] },

  { id: "leekuanyew", name: "Lee Kuan Yew", years: "in office 1959–1990", title: "Founding PM of Singapore", country: "Singapore", iso: "702", era: "c20", president: false,
    style: "Clean technocratic pragmatism — 'poetry is a luxury we cannot afford'; survival economics for a city-state with no hinterland.",
    structure: "Meritocratic mandarinate paid private-sector wages; the PAP as a disciplined governing instrument, dissent managed through courts.",
    delegation: "Systematized succession — groomed and tested a second generation for decades, then actually handed over.",
    tags: ["meritocracy", "institutional", "coercive", "bureaucratic"] },

  { id: "tito", name: "Josip Broz Tito", years: "in power 1945–1980", title: "President of Yugoslavia", country: "Serbia", iso: "688", era: "c20", president: true,
    style: "The great balancer — defied Stalin (1948), co-founded the Non-Aligned Movement, rode East-West rivalry for aid from both.",
    structure: "Rotating federalism among six republics; self-management socialism as a third way brand.",
    delegation: "Balanced nationalities against each other with himself as the indispensable arbiter — the glue died with him, and so eventually did the country.",
    tags: ["charismatic", "dividerule", "partystate", "transactional"] },

  { id: "jfk", name: "John F. Kennedy", years: "in office 1961–1963", title: "35th U.S. President", country: "United States", iso: "840", era: "c20", president: true,
    style: "Cool rationalist glamour — but the real lesson is the learning curve from the Bay of Pigs to the missile crisis.",
    structure: "After 1961's groupthink disaster, redesigned his own decision process: ExComm with devil's advocates, sub-groups, and the president sometimes absent to free debate.",
    delegation: "Brother Bobby as unofficial deputy and back-channel; the case study in engineering better group decisions.",
    tags: ["collegial", "cabinet", "charismatic"] },

  { id: "lbj", name: "Lyndon B. Johnson", years: "in office 1963–1969", title: "36th U.S. President", country: "United States", iso: "840", era: "c20", president: true,
    style: "'The Treatment' — persuasion as full-contact sport; mastery of every senator's fears, debts and ambitions (read Caro).",
    structure: "Legislative machine politics elevated to the presidency: the Great Society passed by knowing the process better than anyone alive.",
    delegation: "Domestic policy delegated to task forces he drove hard; Vietnam micromanaged — picking bombing targets at Tuesday lunch.",
    tags: ["transactional", "machine", "micromanage"] },

  { id: "goldameir", name: "Golda Meir", years: "in office 1969–1974", title: "PM of Israel", country: "Israel", iso: "376", era: "c20", president: false,
    style: "Blunt grandmother of the state — decisions brewed over midnight sessions in her actual kitchen.",
    structure: "The 'kitchen cabinet': an inner circle of trusted ministers pre-cooking decisions before formal cabinet.",
    delegation: "Deferred to the defense establishment's 'conception' before 1973 — the Yom Kippur intelligence failure as the cost of consensus among insiders.",
    tags: ["collegial", "hubspoke", "cabinet"] },

  { id: "indira", name: "Indira Gandhi", years: "PM 1966–77, 1980–84", title: "PM of India", country: "India", iso: "356", era: "c20", president: false,
    style: "Centralized personalism inside a democracy — from 'dumb doll' to 'India is Indira'; the Emergency (1975–77) as democratic suspension.",
    structure: "Hollowed her own party into a personal vehicle; loyalty displaced the Congress machine's federal depth.",
    delegation: "Kitchen cabinet of aides and her sons; institutional degradation as the price of command.",
    tags: ["hubspoke", "coercive", "machine", "charismatic"] },

  { id: "deng", name: "Deng Xiaoping", years: "in power 1978–1992", title: "Paramount Leader of China", country: "China", iso: "156", era: "c20", president: false,
    style: "Pragmatism as ideology — 'it doesn't matter whether the cat is black or white'; ruled without holding the top titles.",
    structure: "Special Economic Zones as reversible experiments — 'crossing the river by feeling the stones'; collective leadership restored, term norms instituted.",
    delegation: "Real delegation to reformers (Hu Yaobang, Zhao Ziyang) — until they crossed political lines and were discarded; Tiananmen the hard boundary.",
    tags: ["transformational", "institutional", "missioncommand", "partystate"] },

  { id: "thatcher", name: "Margaret Thatcher", years: "in office 1979–1990", title: "UK Prime Minister", country: "United Kingdom", iso: "826", era: "c20", president: false,
    style: "Conviction politics — 'the lady's not for turning'; consensus dismissed as 'the absence of leadership.'",
    structure: "Cabinet as battlefield: 'wets' purged, argument won by stamina and preparation at 4 hours' sleep.",
    delegation: "Dominated ministers on substance; the style that won three elections eventually triggered the cabinet revolt that ended her.",
    tags: ["transformational", "cabinet", "micromanage", "coercive"] },

  { id: "reagan", name: "Ronald Reagan", years: "in office 1981–1989", title: "40th U.S. President", country: "United States", iso: "840", era: "c20", president: true,
    style: "Vision plus radical delegation — 'surround yourself with the best people, delegate authority, and don't interfere.'",
    structure: "The troika (Baker, Meese, Deaver) running operations; the president supplying narrative, nerve and the few big calls.",
    delegation: "The style's ceiling and floor in one presidency: Cold War endgame and tax reform — and Iran-Contra flourishing in the unattended spaces.",
    tags: ["charismatic", "missioncommand", "cabinet"] },

  { id: "gorbachev", name: "Mikhail Gorbachev", years: "in power 1985–1991", title: "General Secretary, USSR", country: "Russia", iso: "643", era: "c20", president: false,
    style: "The reformer who lost control of the reform — glasnost and perestroika unleashed forces no center could ride.",
    structure: "Tried to shift legitimacy from party to elected state institutions mid-flight; the party was the load-bearing wall.",
    delegation: "Persuader not purger — refused the Tiananmen option in Eastern Europe, and the empire dissolved almost bloodlessly. A world-historical choice of restraint.",
    tags: ["transformational", "collegial", "partystate", "steward"] },

  { id: "mandela", name: "Nelson Mandela", years: "in office 1994–1999", title: "President of South Africa", country: "South Africa", iso: "710", era: "c20", president: true,
    style: "Reconciliation as strategy, not sentiment — learned Afrikaans in prison to understand his jailers; the Springbok jersey as statecraft.",
    structure: "Government of National Unity with the old enemy; the Truth and Reconciliation Commission trading justice for truth.",
    delegation: "Delegated governance heavily to Mbeki while carrying the symbolic and moral load; served one term and left — the Washington move, repeated.",
    tags: ["steward", "transformational", "collegial", "institutional"] },

  { id: "castro", name: "Fidel Castro", years: "in power 1959–2008", title: "Leader of Cuba", country: "Cuba", iso: "192", era: "c20", president: true,
    style: "Marathon personalism — five-hour speeches, guerrilla fatigues for fifty years, survival of eleven U.S. presidents as the core narrative.",
    structure: "Party-state fused with the Castro persona; brother Raúl running the one solid institution, the army.",
    delegation: "Interfered everywhere from cattle genetics to coffee planting; succession solved by fraternal handoff after a half-century.",
    tags: ["charismatic", "hubspoke", "partystate", "micromanage"] },

  // ---------------- 21ST CENTURY ----------------
  { id: "gwbush", name: "George W. Bush", years: "in office 2001–2009", title: "43rd U.S. President", country: "United States", iso: "840", era: "c21", president: true,
    style: "'The decider' — MBA presidency: gut calls, clear lanes, loyalty prized; transformed by 9/11 into a wartime executive.",
    structure: "Strong-viceroy model: enormous delegated power to Cheney, Rumsfeld — with contested consequences for the intelligence-to-decision pipeline.",
    delegation: "First-term deference to heavyweight deputies, second-term correction (Gates for Rumsfeld, the surge decision made against most advice).",
    tags: ["missioncommand", "cabinet", "hubspoke"] },

  { id: "putin", name: "Vladimir Putin", years: "in power 2000–present", title: "President of Russia", country: "Russia", iso: "643", era: "c21", president: true,
    style: "The vertical of power — KGB case-officer method scaled to a state: cultivate, compromise, control.",
    structure: "Formal institutions hollowed; real power in a court of siloviki, oligarchs-on-license and personal networks from St. Petersburg.",
    delegation: "Balances rival clans (FSB, army, Gazprom, mercenaries) as sole arbiter; information isolation in long-tenure autocracy as a strategic vulnerability — see 2022.",
    tags: ["coercive", "hubspoke", "dividerule", "court"] },

  { id: "obama", name: "Barack Obama", years: "in office 2009–2017", title: "44th U.S. President", country: "United States", iso: "840", era: "c21", president: true,
    style: "Deliberative professor — long option-mapping sessions, comfort with probabilistic thinking ('a 55-45 call'), rhetorical set-pieces at hinge moments.",
    structure: "Team-of-rivals homage (Clinton at State); centralized foreign policy in a tight NSC over the departments.",
    delegation: "The bin Laden raid as decision-style exhibit: red-teamed estimates, dissent solicited, lonely final call.",
    tags: ["collegial", "cabinet", "charismatic"] },

  { id: "xi", name: "Xi Jinping", years: "in power 2012–present", title: "General Secretary, CCP", country: "China", iso: "156", era: "c21", president: true,
    style: "Recentralization — reversed Deng's collective-leadership norms; anticorruption campaign as both cleanup and purge.",
    structure: "Party over state, everywhere: leading small groups chaired personally, term limits abolished, 'Xi Jinping Thought' in the constitution.",
    delegation: "Chairman of everything — a deliberate bet that concentrated authority beats institutionalized succession; the single-point-of-failure question reopened.",
    tags: ["partystate", "coercive", "micromanage", "institutional"] },

  { id: "merkel", name: "Angela Merkel", years: "in office 2005–2021", title: "Chancellor of Germany", country: "Germany", iso: "276", era: "c21", president: false,
    style: "The scientist's patience — quantum chemist's method in politics: wait, gather data, exhaust opponents, move last ('Merkeln' became a verb).",
    structure: "Coalition management as core craft: grand coalitions held together by de-dramatizing everything.",
    delegation: "Consensus-driven, low-ego, famously unpretentious; criticized precisely for managing rather than shaping — the steward's tradeoff.",
    tags: ["collegial", "steward", "cabinet", "bureaucratic", "coalitionbrokerage"] },

  { id: "erdogan", name: "Recep Tayyip Erdoğan", years: "in power 2003–present", title: "President of Turkey", country: "Turkey", iso: "792", era: "c21", president: true,
    style: "Majoritarian personalism — from reformist PM to executive president; the ballot box as the sole legitimacy that counts.",
    structure: "Post-2016-coup consolidation: presidential system, judiciary and media aligned, party as extension of leader.",
    delegation: "Technocrats empowered then discarded (Babacan, Davutoğlu); son-in-law economics; loyalty over expertise as the visible pattern.",
    tags: ["charismatic", "hubspoke", "coercive", "machine"] },

  { id: "abe", name: "Shinzo Abe", years: "PM 2006–07, 2012–2020", title: "PM of Japan", country: "Japan", iso: "392", era: "c21", president: false,
    style: "The comeback institutionalist — failed first term, returned to become Japan's longest-serving PM by strengthening the office itself.",
    structure: "Kantei-centered government: cabinet personnel bureau took senior bureaucratic appointments — the PM's office finally mastering the ministries.",
    delegation: "Abenomics' three arrows delegated to a captured Bank of Japan and empowered aides; foreign policy run personally.",
    tags: ["institutional", "cabinet", "bureaucratic"] },

  { id: "modi", name: "Narendra Modi", years: "in office 2014–present", title: "PM of India", country: "India", iso: "356", era: "c21", president: false,
    style: "Centralized communicator — direct-to-voter channels (Mann Ki Baat, social media) around party and press alike.",
    structure: "PMO-centric government; power concentrated with Amit Shah as enforcer-organizer; Hindutva as mobilizing frame.",
    delegation: "Trusted bureaucrats from Gujarat days over cabinet ministers; big-bang decisions (demonetization) taken in tiny circles.",
    tags: ["charismatic", "hubspoke", "machine", "nationalism"] },

  { id: "trump", name: "Donald Trump", years: "in office 2017–21, 2025–present", title: "45th & 47th U.S. President", country: "United States", iso: "840", era: "c21", president: true,
    style: "Disruption as method — dominance framing, unpredictability prized as leverage, direct mass communication displacing institutional channels.",
    structure: "Hub-and-spoke with competing courtiers; formal process subordinated to personal loyalty and televised performance.",
    delegation: "Serial turnover as management tool; delegates execution, never the narrative — every storyline returns to the principal.",
    tags: ["charismatic", "hubspoke", "dividerule", "transactional", "spectacle"] },

  { id: "ardern", name: "Jacinda Ardern", years: "in office 2017–2023", title: "PM of New Zealand", country: "New Zealand", iso: "554", era: "c21", president: false,
    style: "Empathetic crisis communication — Christchurch and COVID handled with a 'team of five million' framing; kindness asserted as strategy.",
    structure: "Coalition and consensus politics; policy delivery lagging communicative excellence became the standard critique.",
    delegation: "Collaborative cabinet style; resigned citing 'nothing left in the tank' — a rare voluntary exit at peak fame.",
    tags: ["collegial", "steward", "charismatic"] },

  { id: "zelensky", name: "Volodymyr Zelensky", years: "in office 2019–present", title: "President of Ukraine", country: "Ukraine", iso: "804", era: "c21", president: true,
    style: "Communicator-in-chief under fire — 'I need ammunition, not a ride'; a performer's toolkit (timing, staging, audience) applied to wartime alliance management.",
    structure: "Wartime centralization around the presidential office; nightly video address as the institution binding nation and allies.",
    delegation: "Military operations left to professional command (Zaluzhnyi era) while he ran the global persuasion campaign — then the friction when those lanes crossed.",
    tags: ["charismatic", "missioncommand", "hubspoke"] },

  { id: "lula", name: "Luiz Inácio Lula da Silva", years: "in office 2003–10, 2023–present", title: "President of Brazil", country: "Brazil", iso: "076", era: "c21", president: true,
    style: "Negotiator's charisma — metalworker-unionist who bargains with everyone; Bolsa Família as signature pragmatic redistribution.",
    structure: "Coalition presidentialism: governing means perpetually buying a congressional majority from a dozen parties — the system that also produced its scandals.",
    delegation: "Political brokerage kept personal; economic policy delegated to orthodox ministers to calm markets — the two-track formula.",
    tags: ["transactional", "charismatic", "machine", "collegial", "coalitionbrokerage", "clientelism"] },

  { id: "biden", name: "Joe Biden", years: "in office 2021–2025", title: "46th U.S. President", country: "United States", iso: "840", era: "c21", president: true,
    style: "Senate-relationship politics scaled up — a half-century of personal capital spent assembling legislative and alliance coalitions.",
    structure: "Restorationist process: empowered cabinet, disciplined NSC, decades-long aides in key seats.",
    delegation: "High trust in a small veteran circle; the age question became the delegation question in the end.",
    tags: ["transactional", "cabinet", "collegial", "institutional"] },

  { id: "berlusconi", name: "Silvio Berlusconi", years: "PM 1994–95, 2001–06, 2008–11", title: "PM of Italy; founder of Fininvest and Forza Italia", country: "Italy", iso: "380", era: "c21", president: false,
    style: "The salesman in politics — a builder and television owner who announced his candidacy on videotape, sold his programme as a contract signed on air, and made the polls, the camera and his own life story the campaign.",
    structure: "A personal party assembled in weeks from his own companies — Publitalia's sales managers chose the candidates and a company-founded pollster did the research — at the head of centre-right coalitions that depended on the Northern League and the post-fascist National Alliance.",
    delegation: "Kept the brand, the candidate lists and the coalition bargains to himself; left economic policy to Giulio Tremonti and the running of the prime minister's office to Gianni Letta; never built a successor who lasted, so the party rose and fell with him.",
    tags: ["charismatic", "transactional", "hubspoke", "spectacle", "coalitionbrokerage"] },

  // ---- Completing the 20th-century U.S. presidents (biographies in data/bios.js) ----
  { id: "mckinley", name: "William McKinley", years: "in office 1897–1901", title: "25th U.S. President", country: "United States", iso: "840", era: "c20", president: true,
    style: "Genial consensus-builder — quiet mastery over bombast; expanded American power abroad while projecting Midwestern calm.",
    structure: "Disciplined 'front-porch' operation and a professionalizing executive; the presidency turning outward toward empire.",
    delegation: "Worked through Mark Hanna's party machine and a competent cabinet; assassinated in 1901, handing the century to TR.",
    tags: ["transactional", "machine", "cabinet", "steward"] },

  { id: "taft", name: "William Howard Taft", years: "in office 1909–1913", title: "27th U.S. President", country: "United States", iso: "840", era: "c20", president: true,
    style: "Judicial temperament in an executive job — legalist and deliberate, politically tin-eared after TR's showmanship.",
    structure: "Governed by the book and the cabinet; trust-busting by literal statute (more suits than TR) rather than bully-pulpit theater.",
    delegation: "Deferred to department heads and the courts; his split with Roosevelt fractured the GOP and lost 1912.",
    tags: ["cabinet", "bureaucratic", "institutional", "steward"] },

  { id: "wilson", name: "Woodrow Wilson", years: "in office 1913–1921", title: "28th U.S. President", country: "United States", iso: "840", era: "c20", president: true,
    style: "Moralist visionary — a professor governing by principle and soaring rhetoric, with a rigid, uncompromising streak.",
    structure: "Strengthened the presidency as legislative leader; progressive machinery — the Fed, FTC, income tax.",
    delegation: "Relied on a tiny circle (Colonel House); his refusal to compromise doomed the League, and a stroke left his wife screening the office.",
    tags: ["transformational", "charismatic", "cabinet", "hubspoke"] },

  { id: "harding", name: "Warren G. Harding", years: "in office 1921–1923", title: "29th U.S. President", country: "United States", iso: "840", era: "c20", president: true,
    style: "Affable 'return to normalcy' — genial, hands-off, out of his depth; popular in life, buried by scandal.",
    structure: "Delegated to a cabinet mixing stars (Hughes, Hoover, Mellon) with the crooks of the 'Ohio Gang'.",
    delegation: "Over-trusted cronies — Teapot Dome and the graft flourished in the space he left unwatched.",
    tags: ["cabinet", "machine", "clientelism"] },

  { id: "coolidge", name: "Calvin Coolidge", years: "in office 1923–1929", title: "30th U.S. President", country: "United States", iso: "840", era: "c20", president: true,
    style: "'Silent Cal' — minimalist by conviction; believed most problems solved themselves if a president resisted meddling.",
    structure: "Restored probity after Harding; laissez-faire economics and a deliberately light federal touch.",
    delegation: "Trusted the market and a small competent cabinet; did and said as little as the office allowed.",
    tags: ["steward", "cabinet", "institutional"] },

  { id: "hoover", name: "Herbert Hoover", years: "in office 1929–1933", title: "31st U.S. President", country: "United States", iso: "840", era: "c20", president: true,
    style: "The engineer-administrator — brilliant technocrat whose faith in voluntarism froze before the Depression.",
    structure: "Managerial presidency of data and expert commissions; reluctant to wield federal power directly as the economy collapsed.",
    delegation: "Trusted associational, business-led solutions; the mismatch between competence and catastrophe defined his fall.",
    tags: ["bureaucratic", "steward", "institutional", "micromanage"] },

  { id: "truman", name: "Harry S. Truman", years: "in office 1945–1953", title: "33rd U.S. President", country: "United States", iso: "840", era: "c20", president: true,
    style: "Plain-spoken decisiveness — 'The buck stops here'; an accidental president who grew into consequential, gutsy calls.",
    structure: "Built the Cold War state — the NSC, CIA, and Department of Defense (1947 National Security Act).",
    delegation: "Leaned on strong figures (Marshall, Acheson) but asserted civilian control decisively — firing MacArthur was the defining act.",
    tags: ["missioncommand", "cabinet", "institutional", "steward"] },

  { id: "eisenhower", name: "Dwight D. Eisenhower", years: "in office 1953–1961", title: "34th U.S. President", country: "United States", iso: "840", era: "c20", president: true,
    style: "The organized supreme commander — 'hidden-hand' leadership behind a genial, golfing image.",
    structure: "Imported military staff structure — a strong chief of staff, formal NSC process, clear chains of command.",
    delegation: "Real delegation within tight strategic intent; let subordinates absorb blame while he ran policy closely — deliberate deniability.",
    tags: ["missioncommand", "cabinet", "institutional", "steward"] },

  { id: "nixon", name: "Richard Nixon", years: "in office 1969–1974", title: "37th U.S. President", country: "United States", iso: "840", era: "c20", president: true,
    style: "Brilliant, secretive, resentful strategist — visionary abroad (China, détente), self-destructive in his siege mentality.",
    structure: "Centralized foreign policy in the White House (Kissinger) over the State Department; a fortress West Wing.",
    delegation: "Trusted a small palace guard (Haldeman, Ehrlichman) and bypassed the cabinet; the insularity that bred Watergate forced his resignation.",
    tags: ["hubspoke", "coercive", "transactional", "dividerule"] },

  { id: "ford", name: "Gerald Ford", years: "in office 1974–1977", title: "38th U.S. President", country: "United States", iso: "840", era: "c20", president: true,
    style: "Steady, decent caretaker — the only unelected president, tasked with restoring normalcy: 'our long national nightmare is over.'",
    structure: "Open, collegial cabinet government as deliberate contrast to Nixon's bunker.",
    delegation: "Trusting and consultative; the Nixon pardon, taken alone on principle, probably cost him 1976.",
    tags: ["steward", "cabinet", "collegial", "institutional"] },

  { id: "carter", name: "Jimmy Carter", years: "in office 1977–1981", title: "39th U.S. President", country: "United States", iso: "840", era: "c20", president: true,
    style: "Engineer-moralist — a nuclear engineer and devout outsider who mastered detail but struggled with Washington's transactional grammar.",
    structure: "Anti-machine outsider; governed against his own party's barons as often as with them.",
    delegation: "Famously immersed in minutiae; the micromanagement crowded out strategy. Camp David and human rights were the high notes.",
    tags: ["micromanage", "steward", "collegial", "institutional"] },

  { id: "ghwbush", name: "George H. W. Bush", years: "in office 1989–1993", title: "41st U.S. President", country: "United States", iso: "840", era: "c20", president: true,
    style: "Prudent, patrician internationalist — a deep résumé and a Rolodex diplomacy conducted by personal phone calls.",
    structure: "Seasoned foreign-policy team (Baker, Scowcroft, Powell) run as a tight, collegial national-security machine.",
    delegation: "High trust in professionals; steered the Cold War's end and the Gulf War coalition with deliberate restraint.",
    tags: ["transactional", "cabinet", "collegial", "missioncommand", "institutional"] },

  { id: "clinton", name: "Bill Clinton", years: "in office 1993–2001", title: "42nd U.S. President", country: "United States", iso: "840", era: "c20", president: true,
    style: "Empathetic policy omnivore — 'I feel your pain'; a voracious, undisciplined intellect governing by triangulation and permanent campaign.",
    structure: "Early chaos giving way to a disciplined, poll-tested operation; New Democrat centrism splitting the difference between parties.",
    delegation: "Ran freewheeling late-night policy seminars; strong on ideas, loose on process — the indiscipline that led to impeachment.",
    tags: ["charismatic", "transactional", "collegial", "machine"] },

  // ---- Added from the reading index: figures the library covers that the atlas lacked ----
  { id: "taizong", name: "Tang Taizong", years: "r. 626–649", title: "Emperor of Tang China", country: "China", iso: "156", era: "medieval", president: false,
    style: "Rule by institutionalized criticism — solicited remonstrance as a standing duty and made rebuke a job description: 'with a man as a mirror one can see whether one is right or wrong.'",
    structure: "Three Departments and Six Ministries, with the Chancellery empowered to reject the emperor's own edicts; the examination system widened, equal-field land allotment and fubing militia beneath it.",
    delegation: "Promoted Wei Zheng — who had served the brother he killed — to chief remonstrator, and paired Fang Xuanling's ideas with Du Ruhui's decisions as the model chancellorship.",
    tags: ["meritocracy", "bureaucratic", "institutional", "collegial", "warrior", "mythmaking"] },

  { id: "robertbruce", name: "Robert the Bruce", years: "r. 1306–1329", title: "King of Scots", country: "United Kingdom", iso: "826", era: "medieval", president: false,
    style: "The comeback king — crowned as a hunted fugitive, he learned to refuse battle until the ground was his, then took it at Bannockburn.",
    structure: "Rebuilt a fractured kingdom by absorbing former enemies instead of destroying them; the Declaration of Arbroath (1320) framed kingship as a contract the community could revoke.",
    delegation: "Handed the relentless raiding war to James Douglas and Thomas Randolph while he held the political centre — genuine independent commands.",
    tags: ["warrior", "charismatic", "feudal", "missioncommand", "nationalism"] },

  { id: "chiang", name: "Chiang Kai-shek", years: "in power 1928–1975", title: "Leader of the Republic of China", country: "Taiwan", iso: "158", era: "c20", president: true,
    style: "Military-Confucian disciplinarian — the New Life Movement's moral austerity fused to a soldier's contempt for politics he could not command.",
    structure: "A Leninist party-state built with Soviet help, resting on the Whampoa officer network and layered over warlords he never fully absorbed.",
    delegation: "Balanced rival cliques against each other and distrusted able subordinates, while directing troop movements down to division level by telephone — micromanagement that helped lose the civil war.",
    tags: ["partystate", "coercive", "dividerule", "micromanage", "warrior", "nationalism"] },

  { id: "hueylong", name: "Huey Long", years: "in power 1928–1935", title: "Governor & Senator, Louisiana", country: "United States", iso: "840", era: "c20", president: false,
    style: "The Kingfish — demagogic energy at a scale no American state had seen; 'Every Man a King' and Share Our Wealth aimed straight past the elites at the dispossessed.",
    structure: "The most complete political machine in American state history: legislature, courts, police, tax boards and parish patronage all held in one hand.",
    delegation: "Dictated bills and bullied them through in person; the machine was an extension of his body, and it fractured into scandal within four years of his death.",
    tags: ["charismatic", "machine", "spoils", "clientelism", "bossism", "coercive", "hubspoke"] },

  { id: "rjdaley", name: "Richard J. Daley", years: "mayor 1955–1976", title: "Mayor of Chicago & Cook County Democratic Chairman", country: "United States", iso: "840", era: "c20", president: false,
    style: "The last great American boss — unglamorous, inarticulate in public, relentless in private; 'good government is good politics' meant that the garbage got collected and the precinct got delivered, and he saw no difference between the two.",
    structure: "Held the mayoralty and the county party chairmanship at once for twenty-one years, so the same man slated every candidate, controlled some 35,000 patronage jobs and ran the city they worked for.",
    delegation: "Delegated the precincts to 50 ward committeemen and kept everything else: reviewed appointments and the budget himself, met the aldermen on the fifth floor, and groomed no successor who could hold both offices.",
    tags: ["machine", "bossism", "spoils", "clientelism", "transactional", "micromanage", "coalitionbrokerage"] },

  { id: "suharto", name: "Suharto", years: "in power 1966–1998", title: "President of Indonesia (the New Order)", country: "Indonesia", iso: "360", era: "c20", president: true,
    style: "The 'Smiling General' — patient, opaque and unemotional; took power from Sukarno in stages between 1965 and 1968 so that no single act looked like a seizure, then governed by keeping every institution dependent on the presidency.",
    structure: "Three pillars under one chair: an army with officers at every level of government (the 'dual function'), Golkar as an electoral machine that won every election from 1971 to 1997, and a technocratic economic team insulated from politics.",
    delegation: "Left the economy to the 'Berkeley Mafia' economists and internal security to the army, and kept appointments, rotation and the final word himself; from the 1980s he extended the same latitude to his children's and friends' conglomerates.",
    tags: ["coercive", "partystate", "clientelism", "bureaucratic", "dividerule", "hubspoke"] },

  { id: "parkchunghee", name: "Park Chung-hee", years: "in power 1961–1979", title: "President of South Korea", country: "South Korea", iso: "410", era: "c20", president: true,
    style: "Soldier-modernizer — ran development as a military campaign of numerical targets and treated dissent as a threat to the campaign; 'Korean-style democracy' meant a strong presidency first and liberal politics later.",
    structure: "A junta that turned itself into a civilian presidency: the KCIA and the Presidential Security Service for control, the Economic Planning Board and state-directed credit for the five-year plans, and after the 1972 Yushin constitution an electoral college and a third of the National Assembly filled on his nomination.",
    delegation: "Left economic detail to technocrats and the chaebol but chaired the monthly export-promotion meetings himself, and kept the KCIA and the Presidential Security Service as rivals — the feud between their two chiefs ended in his death.",
    tags: ["coercive", "transformational", "bureaucratic", "micromanage", "dividerule", "nationalism"] },

  { id: "mussolini", name: "Benito Mussolini", years: "in power 1922–1943", title: "Prime Minister & Duce of Italy; head of the Salò republic 1943–45", country: "Italy", iso: "380", era: "c20", president: false,
    style: "The journalist as dictator — a former socialist editor who governed through headlines, balcony speeches and the photograph, improvised policy for the day's effect, and let 'Mussolini is always right' become the regime's slogan.",
    structure: "A one-party state built inside a surviving monarchy: the Fascist party, its militia and the corporations on one side; the King, the army and, after 1929, the Church left standing on the other. The Grand Council of Fascism, created as his instrument, was the body that voted against him in July 1943.",
    delegation: "Held as many as seven ministries himself at once and rotated ministers and party secretaries in periodic 'changings of the guard' so that none built a base; decisions were his, but the information that reached him was filtered by courtiers, and the armed forces he claimed to command were unready for the war he declared.",
    tags: ["charismatic", "coercive", "propaganda", "cultpersonality", "spectacle", "hubspoke", "micromanage", "nationalism"] },

  { id: "franco", name: "Francisco Franco", years: "in power 1936–1975", title: "Head of State (Caudillo) of Spain; also head of government until 1973", country: "Spain", iso: "724", era: "c20", president: false,
    style: "The cautious general — taciturn, patient and suspicious, a colonial officer who won a civil war slowly, said as little as possible, let rivals wear each other out, and outlasted every ally and enemy he had for almost forty years.",
    structure: "A military dictatorship that called itself a kingdom from 1947: a single 'Movement' (the merged Falange and Carlists), an advisory Cortes, the Church given education and morals, and the army as final guarantor — with every institution answering to the Caudillo, 'responsible before God and History'.",
    delegation: "Balanced the regime's 'families' — army, Falange, Catholics, monarchists and, from 1957, the Opus Dei technocrats — by giving each ministries and none control; let ministers run their departments with wide latitude, reshuffled at long intervals, and from 1941 relied on one indispensable aide, Luis Carrero Blanco.",
    tags: ["coercive", "warrior", "dividerule", "hubspoke", "politicalreligion", "nationalism", "clientelism"] },

  { id: "salazar", name: "António de Oliveira Salazar", years: "in power 1932–1968", title: "President of the Council of Ministers of Portugal (the Estado Novo); finance minister from 1928", country: "Portugal", iso: "620", era: "c20", president: false,
    style: "The professor as dictator — a Coimbra economist who came in to balance the budget, made the Treasury's veto the centre of the state, and ruled for four decades from his desk: ascetic, reclusive, legalistic and unbending.",
    structure: "A corporative 'New State' under the 1933 constitution: a single 'non-party', the National Union; a president, always a military officer, who formally appointed and could dismiss him; corporations in place of free unions; the Church under the 1940 Concordat; and behind it censorship and the PVDE/PIDE political police.",
    delegation: "Governed through bilateral meetings with each minister rather than a working cabinet, kept finance, and at times war and foreign affairs, in his own hands, read the files himself, and chose loyal technicians over politicians — which left the regime without a successor he trusted until a fall in 1968 decided it for him.",
    tags: ["bureaucratic", "micromanage", "hubspoke", "politicalreligion", "nationalism", "coercive"] },

  { id: "pinochet", name: "Augusto Pinochet", years: "in power 1973–1990", title: "Head of Chile's military junta and President of Chile (1974–90); army commander-in-chief 1973–98", country: "Chile", iso: "152", era: "c20", president: false,
    style: "The late joiner who ended up owning the coup — a career staff officer with a name for obedience who signed on two days before 11 September 1973, then outmanoeuvred the other commanders, kept the army and the secret police answering to him alone, and ruled for sixteen and a half years behind dark glasses.",
    structure: "A junta of the four service chiefs turned into a personal presidency: Pinochet head of state and army commander at once, the junta reduced to a legislature, DINA (from 1977 the CNI) as the instrument of terror, and from 1981 a constitution of the regime's own design whose timetable promised a plebiscite in 1988.",
    delegation: "Handed the economy almost wholesale to the Chicago-trained economists and the constitution's design to lawyers such as Jaime Guzmán, but kept security, the army command and senior appointments to himself; DINA's chief, Manuel Contreras, answered to him personally.",
    tags: ["coercive", "hubspoke", "institutional", "nationalism"] },

  { id: "peron", name: "Juan Domingo Perón", years: "President 1946–55, 1973–74", title: "President of Argentina; founder of Peronism (Justicialism)", country: "Argentina", iso: "032", era: "c20", president: false,
    style: "The colonel as labour leader — a staff officer and teacher of military history who built a mass following from the Labour Secretariat in 1943–45, governed from the balcony and through the unions with Eva Perón at his side, and then led a banned movement for seventeen years from exile by letter, tape and envoy, playing its wings against each other.",
    structure: "An elected presidency with a movement behind it — the CGT unions, the men's and women's Peronist parties and the Eva Perón Foundation — under a 1949 constitution that allowed his re-election, and increasingly a purged Supreme Court, a captured press and jailed opponents. The army remained a separate power, and removed him in 1955.",
    delegation: "Kept the 'conducción' — strategy and the last word — strictly personal and delegated the rest: Eva took the unions' petitions and the poor, Miguel Miranda the economy until 1949, and in exile a series of personal delegates (John William Cooke, later Jorge Daniel Paladino and Héctor Cámpora) whom he raised and dropped.",
    tags: ["charismatic", "transformational", "machine", "clientelism", "spectacle", "cultpersonality", "nationalism", "hubspoke"] },

  { id: "goh", name: "Goh Chok Tong", years: "PM 1990–2004", title: "PM of Singapore", country: "Singapore", iso: "702", era: "c20", president: false,
    style: "Deliberately consultative — promised a 'kinder, gentler' Singapore and ran national conversations, defining himself against the founder without repudiating him.",
    structure: "Inherited the PAP mandarinate intact and governed as first among equals — in a cabinet that still contained Lee Kuan Yew as Senior Minister.",
    delegation: "Took the hardest delegation problem in the index — succeeding a living founder — and solved it by consultation, then groomed and handed over to Lee Hsien Loong.",
    tags: ["collegial", "institutional", "meritocracy", "bureaucratic", "steward"] },

  { id: "kissinger", name: "Henry Kissinger", years: "in office 1969–1977", title: "U.S. National Security Advisor & Secretary of State", country: "United States", iso: "840", era: "c20", president: false,
    style: "Realpolitik as performance — secrecy, back-channels and a scholar's taste for the balance of power, practiced with a courtier's instinct for the principal's mood.",
    structure: "Concentrated foreign policy in the NSC staff around the State Department, then uniquely held both offices at once — the apparatus reshaped to fit one man.",
    delegation: "Ran the openings to Beijing and the Paris talks personally, keeping cabinet colleagues uninformed; delegated implementation, never the channel.",
    tags: ["viziers", "hubspoke", "transactional", "dividerule", "micromanage"] }
];

