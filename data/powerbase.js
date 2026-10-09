// ============================================================
// POWER BASE — selectorate analysis, keyed by leader id
// ============================================================
// After Bueno de Mesquita, Smith, Siverson & Morrow, The Logic of
// Political Survival (2003), and The Dictator's Handbook (2011).
//
// The three circles:
//   N  nominal selectorate — the INTERCHANGEABLES. Everyone with at
//      least a nominal say in choosing the leader.
//   S  real selectorate — the INFLUENTIALS. Those whose support
//      actually matters in choosing.
//   W  winning coalition — the ESSENTIALS. The subset whose support
//      is NECESSARY to keep power; their defection ends the reign.
//
// The theory's engine is the ratio W/S — the LOYALTY NORM. A small
// W drawn from a large S means every essential knows they are
// easily replaced and unlikely to be in a challenger's coalition,
// so they cling to the incumbent. Small W ⇒ pay essentials in
// private goods and ignore the public; large W ⇒ you cannot afford
// to buy millions individually, so you must deliver public goods.
//
// Fields:
//   system    one-line regime classification in W/S terms
//   w_scale   1–5 for the meter: 1 = dozens · 2 = hundreds ·
//             3 = thousands · 4 = hundreds of thousands · 5 = millions
//   sizes     numeric estimates for the ring diagram (log scale)
//   n, s, w   { who, size } — who was in each circle
//   loyalty   the W/S ratio and what it meant in practice
//   currency  what the essentials were paid in (private vs public goods)
//   revenue   where the money came from — and how free that made the
//             leader of the productive population
//   shuffle   how essentials were replaced (the coalition-management method)
//   danger    the moments the coalition wobbled
//   verdict   how the framework explains tenure and exit
//
// Own field on a leader (`powerbase`) overrides this map.
// ============================================================

window.POWER_BASE = {

  stalin: {
    system: "Single-party autocracy — a tiny winning coalition drawn from a very large selectorate",
    w_scale: 1,
    sizes: { n: 100000000, s: 1900000, w: 25 },
    n: { who: "Every Soviet adult. Universal suffrage in single-candidate elections made all citizens formally interchangeable — pure theatre, but structurally important theatre: it advertised how replaceable everyone was.", size: "~100 million" },
    s: { who: "Party members eligible to select delegates, and above them the Central Committee that formally elected the Politburo.", size: "~1.9 million members; ~140 on the Central Committee" },
    w: { who: "The Politburo and the security and military chiefs whose active cooperation was indispensable at any given moment — Molotov, Kaganovich, Beria, Malenkov, and in wartime Zhukov.", size: "a dozen to a few dozen men" },
    loyalty: "W/S was microscopic. Any essential knew two things: if Stalin fell, his chance of being in a successor's coalition was small; and the pool of men who could replace him was vast. That asymmetry — not ideology — is why members of the Politburo co-signed one another's death lists.",
    currency: "Private goods almost entirely: dachas, cars, special stores, foreign travel, protection from the purge, and life itself. The population received public goods — literacy, electrification, heavy industry — only as by-products of war-readiness, never as coalition payment.",
    revenue: "Extracted from the peasantry by collectivisation and grain requisition, plus forced-labour output from the Gulag. Revenue that required no consent from the taxed left the leadership free to starve the countryside without political cost.",
    shuffle: "The Great Terror as coalition management at industrial scale: 1,108 of the 1,966 delegates to the 1934 'Congress of Victors' were arrested; 98 of 139 Central Committee members were shot. Constant replacement from the enormous selectorate kept every survivor's loyalty at maximum.",
    danger: "June 1941. The military catastrophe was the one moment the essentials could have replaced him — he withdrew to his dacha, reportedly expecting arrest. Instead the Politburo came to ask him to lead. The theory's prediction exactly: essentials with no alternative paymaster rally to the incumbent.",
    verdict: "Died in office after twenty-nine years — the expected outcome for a small-W ruler who survives the early consolidation years. The succession crisis that followed (Beria shot within months) is equally predicted: nothing institutional existed to transfer the coalition, because building such a thing would have threatened him."
  },

  lincoln: {
    system: "Mass electoral democracy under wartime stress — large coalition, large selectorate, weak loyalty norm",
    w_scale: 5,
    sizes: { n: 7000000, s: 4700000, w: 1900000 },
    n: { who: "Adult white male citizens with the franchise, structured through the Electoral College and state party machinery.", size: "~7 million eligible in 1860" },
    s: { who: "Those who actually cast ballots — in 1864, only in the loyal states, with the Confederacy's electorate excised.", size: "~4.7 million voters (1860)" },
    w: { who: "An Electoral College majority assembled from a four-way split with 39.8% of the popular vote — in coalition terms the Republican organisation, the Northern press, the War Democrats and the border-state Unionists, and by 1864 the soldiers' vote.", size: "~1.9 million voters plus the party apparatus and the army" },
    loyalty: "W/S was large, so the loyalty norm was weak: any essential could plausibly be in a challenger's coalition, and in 1864 one existed (McClellan). He therefore had to keep delivering — which is why the most idealised president in American history was also one of its most relentless patronage managers.",
    currency: "Both currencies at once, and he had to buy both. Public goods at scale — the war itself, the Homestead Act, the transcontinental railroad, land-grant colleges, national banking, emancipation — and private goods for the party: postmasterships, army contracts, and commissions for political generals.",
    revenue: "War taxation, tariffs, greenbacks and bond sales to the public — dependent on a productive and consenting Northern economy. A leader who must borrow from his own citizens cannot ignore their welfare, which is the mechanism that forces large-W rulers toward public goods.",
    shuffle: "He could not purge essentials, so he co-opted them: the cabinet of rivals gave defeated opponents the great departments. Where he did remove people — McClellan, Frémont — it was by political timing, never by fiat, and always with an eye to which coalition members the removal would cost him.",
    danger: "August 1864. He wrote the 'blind memorandum' expecting to lose the election, and had his cabinet sign it unread. Sherman's capture of Atlanta a week later saved the coalition. Large-W leaders are removed by performance, and he was within one campaign of it.",
    verdict: "Re-elected on delivered results, then assassinated; orderly constitutional succession within hours. The theory predicts exactly this pairing for large-W systems — short, performance-contingent tenures for the leader, high stability for the state."
  },

  leekuanyew: {
    system: "Dominant-party electoral state — universal compulsory suffrage, a genuinely contested but structurally tilted electorate, and a revenue base with no rents that forced public goods on a managed coalition",
    w_scale: 4,
    sizes: { n: 2000000, s: 1900000, w: 900000 },
    n: { who: "Every adult citizen — and, because voting is compulsory, nearly every one of them actually turned out. The nominal selectorate and the real one are almost the same set, which is the first thing that makes Singapore look like a democracy in the diagram.", size: "~2 million by the late 1980s" },
    s: { who: "Voters in contested seats. Elections were real in the sense that mattered to the theory — seats could be lost, and in 1981 and 1984 they were — but the field was tilted by defamation law, media ownership, and from 1988 the Group Representation Constituency, which raised the cost of an opposition win from one seat to a slate of four or five.", size: "~1.9 million (compulsory turnout)" },
    w: { who: "The PAP's reliable electoral majority, resting on two pillars the theory would call coalition-management devices: the HDB flat-owning households whose principal asset was tied to the regime's continuity, and a small technocratic elite — ministers, permanent secretaries, the scholarship pipeline — paid at private-sector rates. The engineered core inside a large vote.", size: "~900,000 voters, organised around perhaps a few hundred essentials" },
    loyalty: "W/S looks democratic — roughly half the electorate — but the effective norm was tightened two ways. The GRC and the defamation suit made an alternative winning coalition almost impossible to assemble, so the essentials' probability of being in a challenger's coalition was near zero regardless of the arithmetic. And ministerial pay pegged to top private earners (formalised in 1994) turned the elite into recipients of private goods who were nonetheless replaceable, because the scholarship system kept the bench deep.",
    currency: "The theory's celebrated anomaly: a leader who paid in public goods — housing, order, schooling, infrastructure, a clean administration — despite a coalition he could have paid privately. The public goods were also targeted like private ones: HDB upgrading was scheduled by constituency, and opposition wards went to the back of the queue, a policy Goh Chok Tong later stated aloud.",
    revenue: "This is the explanation the theory offers for the anomaly. No oil, no aid, no rents — only a taxable productive population and mobile foreign capital that could leave. A leader whose revenue depends on people choosing to work and invest in his country cannot loot them. He must deliver the conditions of prosperity or the coalition's paymaster runs dry. Small W plus a productive-economy tax base is the combination that produces developmental autocracy rather than kleptocracy; small W plus resource rents produces the opposite.",
    shuffle: "'Self-renewal': the old guard retired systematically and replaced with technocrats from the scholarship pipeline, so that no minister's tenure ever became a claim. Potential builders of a rival coalition were removed from the field rather than the country — Jeyaretnam and Chee bankrupted by defamation judgments, the Barisan Sosialis left detained under Operation Coldstore in 1963.",
    danger: "1961: thirteen PAP assemblymen defected to the Barisan Sosialis, leaving him a one-seat majority — the genuine coalition crisis of his career, and the origin of everything that followed. 1965: expulsion from Malaysia, an existential shock he converted into the founding myth. 1981–84: the first opposition seat and a twelve-point fall in vote share, answered with the GRC.",
    verdict: "Thirty-one years, then a voluntary handover in 1990 — rare for a small-W leader, and the theory accounts for it: he had institutionalised the coalition into a self-renewing machine that no longer depended on him, so leaving did not collapse it. The theory would also note the small print — he stayed in cabinet as Senior Minister for fourteen more years. Orderly succession, twice."
  },

  napoleon: {
    system: "Military-plebiscitary empire — a vast ratifying electorate, a coalition of marshals, notables and prefects, and a revenue base that required continuous conquest",
    w_scale: 2,
    sizes: { n: 7000000, s: 30000, w: 500 },
    n: { who: "Every adult French male, through the plebiscites of 1800, 1802 and 1804 — universal male suffrage used exactly as the theory says autocrats use it: to make the selectorate feel enormous and every influential feel replaceable. The plebiscites ratified; they never chose.", size: "~7 million" },
    s: { who: "The officer corps, the lists of notables from which the electoral colleges and legislative bodies were filled, the prefects, and the financiers who bought the state's paper. Those whose opinion actually bore on whether the regime continued.", size: "~30,000" },
    w: { who: "The marshalate and senior generals, the ministers — Talleyrand, Fouché, Cambacérès — the Senate's leadership, the bankers, and beneath all of them the army as a body, whose collective loyalty was the coalition's true substrate. He could lose any individual; he could not lose the army.", size: "a few hundred essentials, resting on the army" },
    loyalty: "A small W from a large S gave a strong loyalty norm — and the marshals' defection in 1814 shows precisely what that norm depends on. Essentials cling to an incumbent who can pay. When Ney, Macdonald and Oudinot told him at Fontainebleau that the army would not march on Paris, they were not betraying the norm; they were obeying it, transferring to whichever coalition could still deliver. Marmont's defection at Essonnes the same week is the same calculation.",
    currency: "Both currencies, on a scale no one else in the index matches. Private goods for the essentials: batons, dukedoms and principalities carved from conquered territory, dotations of foreign estates, the Légion d'honneur. Public goods for the state he needed to tax and conscript: the Civil Code, the prefects, the Bank of France, the lycées, the roads. The private goods bought the coalition; the public goods bought the country's cooperation with the coalition.",
    revenue: "The theory's cleanest case of a revenue source choosing a foreign policy. 'War must pay for war' — requisitions, indemnities (Prussia alone was assessed 120 million francs in 1807), plunder, and the dotations paid in conquered land. A coalition paid from conquest must be paid by more conquest; the empire had to expand to meet its own payroll. Russia in 1812 was not a strategic aberration but the revenue model's logical destination.",
    shuffle: "Almost no fear applied to his own essentials — the one register he claimed to believe in was the one he used least on them. Marshals were rotated between commands and balanced against one another; ministers were dismissed, not destroyed (Talleyrand in 1807, Fouché in 1810). The coalition was managed by posting and promotion, with the promise that every soldier carried a baton in his knapsack keeping the wider selectorate hopeful.",
    danger: "Brumaire 1799, a coup that nearly failed in the room. 1804, the Cadoudal plot, answered by the execution of the Duc d'Enghien — his one exemplary killing, aimed at the royalist alternative coalition. October 1812, the Malet conspiracy: a single general announced Napoleon's death in Russia and Paris briefly began arranging a successor, revealing how conditional the coalition had become. April 1814, Fontainebleau. June 1815, Waterloo.",
    verdict: "Deposed twice by the withdrawal of his own essentials, each time within weeks of the revenue source failing. The Hundred Days is the counter-experiment: when he returned promising the coalition's restoration, the army rallied to him again — proof that the loyalty had been real and had been priced. He died in exile and the empire did not outlive him; the public goods he built survived intact under every regime that followed, because they had constituencies of their own."
  },

  gorbachev: {
    system: "Party-state in transition — a leader who dismantled the coalition that chose him before acquiring one that could keep him, and spent twenty-one months essential to neither",
    w_scale: 2,
    sizes: { n: 200000000, s: 19000000, w: 300 },
    n: { who: "Every Soviet adult, still voting in the single-candidate rituals he inherited. Until 1989 the nominal selectorate was exactly what it had been under Stalin: enormous, formally universal, and structurally meaningless — its function was to advertise how replaceable every influential was.", size: "~200 million" },
    s: { who: "The CPSU membership, and above it the Central Committee that formally elected the General Secretary — the body that had actually removed Khrushchev in 1964, which every occupant of the office understood.", size: "~19 million members; 307 full Central Committee members" },
    w: { who: "The Politburo's dozen voting members and the institutional barons whose machinery made rule possible: the KGB, the Defence Ministry, the Interior Ministry, the party apparatus, and Gosplan. A small coalition resting on four or five institutions rather than on individuals.", size: "a dozen at the core, ~300 who could formally remove him" },
    loyalty: "He inherited Stalin's loyalty norm — microscopic W from a vast S — and then deliberately destroyed it. The 1988 Party Conference and the 1989 Congress of People's Deputies moved the source of authority out of the party; the repeal of Article 6 in March 1990 finished the job. But he had himself made President by the Congress rather than by the electorate, and that is the decisive fact in the whole analysis: he gave up the small coalition's near-unbreakable loyalty without ever acquiring a large coalition's mandate. Yeltsin took the opposite route and won the Russian presidency by direct popular vote in June 1991. One of them had essentials; the other had admirers.",
    currency: "The transition is visible in the currency. He began by paying the old coalition in the usual private goods — position, access, the closed distribution system — and then spent his tenure withdrawing them: anti-alcohol revenue losses, cooperative competition, glasnost stripping the apparatus of its immunity from criticism. He offered public goods instead — openness, truth, the end of the arms race — to a public that was not yet his winning coalition and could not protect him.",
    revenue: "The precondition for everything. Soviet hard currency came overwhelmingly from oil and gas, and the 1986 price collapse cut that stream roughly in half. The theory's sharpest prediction about reform is that leaders attempt it when they can no longer pay: a small-W ruler with rents loots comfortably, a small-W ruler whose rents fail must either shrink the coalition or change the system. Perestroika was not primarily a moral awakening but the response of a man who had run out of money to pay his essentials — which is also why it could not be halted once begun.",
    shuffle: "Replaced the Brezhnev generation wholesale in his first two years — Gromyko, Grishin, Romanov, Kunaev removed, a majority of the Central Committee turned over by 1988. But he replaced them through persuasion and reassignment rather than terror, which meant the displaced remained alive, connected and available to a rival coalition. Every one of the August 1991 plotters was his own appointee.",
    danger: "August 1991 is the textbook event: the coup was mounted by the exact institutional essentials of the old coalition — Kryuchkov at the KGB, Yazov at Defence, Pugo at Interior, Pavlov as premier — whose private goods he had been withdrawing for three years. The theory predicts that precisely. What it also predicts is the sequel: the coup was broken not by Gorbachev's coalition but by Yeltsin's, and a leader rescued by someone else's essentials has already been superseded. Belovezha followed in December, and he had no one left to appeal to.",
    verdict: "Six years, then resignation into a state that no longer existed — the framework's cleanest demonstration that coalition size cannot be changed mid-flight. He is also the standing reminder that foreign audiences are not in your winning coalition: a Nobel Peace Prize in 1990, single-digit approval at home, and 0.5% when he ran for the Russian presidency in 1996. The restraint that made him admired abroad — refusing force in Eastern Europe, where the outer empire had become a net fiscal drain rather than a revenue source — is the same restraint that left him with nothing to pay anyone with."
  },

  taizong: {
    system: "Dynastic empire with a narrow coalition and a deliberately widened pool of replacements — the structural conditions that made institutionalised criticism affordable",
    w_scale: 1,
    sizes: { n: 200000, s: 15000, w: 30 },
    n: { who: "The literate gentry and the great clans — everyone from whom an official could conceivably be drawn. The examination route was still a narrow supplement to aristocratic birth and hereditary yin privilege in his reign, producing only a few dozen jinshi a year, but its existence made the pool formally open in a way no previous dynasty's had been.", size: "~200,000 gentry and clan elite" },
    s: { who: "The ranked officialdom of the Three Departments and Six Ministries, the provincial prefects, and the great aristocratic blocs — the Guanlong military nobility that had founded the dynasty and the Shandong clans it never fully absorbed.", size: "~15,000 ranked officials" },
    w: { who: "The chancellors and the great council, the commanders of the capital armies, and the senior princes of the Li clan. Fang Xuanling, Du Ruhui, Li Jing, Zhangsun Wuji — perhaps thirty men whose combined withdrawal would have ended him, as their equivalents had ended his brother.", size: "~30 men" },
    loyalty: "This is where the framework earns its keep, because it resolves what otherwise looks like a paradox. Taizong institutionalised criticism — the Chancellery could refuse his edicts, Wei Zheng was employed to contradict him — and that looks like the opposite of autocratic logic. In selectorate terms it is straightforward: criticism is cheap for a leader with a strong loyalty norm and ruinous for one without. His W was tiny and his S was large and deliberately widening, so every essential knew he was replaceable and that no rival coalition existed to defect to — the Xuanwu Gate had eliminated the alternatives personally. A remonstrance from a man with nowhere else to go is information. The same words from an essential who could defect would be the opening move of a conspiracy. He could afford to hear the truth precisely because he had made it safe to hear.",
    currency: "Unusually public-goods-heavy for a coalition this small: land allotment, famine relief, a codified and deliberately lenient penal code, canal and granary works, and a court that reviewed capital sentences repeatedly before execution. The essentials were paid in rank, precedence, and portraits in the Lingyan Pavilion — honour rather than plunder, which is cheap and which the revenue base could sustain indefinitely.",
    revenue: "The mechanism behind the public goods, and the same one that explains Lee Kuan Yew thirteen centuries later. Under the equal-field system the state allotted land to peasant households and taxed them in grain, labour and cloth; under the fubing militia those same households supplied and equipped the army. Revenue and manpower came from one source, and that source had to stay solvent. A ruler who taxes and conscripts the same free peasantry cannot loot it — the constraint is structural, not moral, and it produces good government for reasons that have nothing to do with the ruler's character.",
    shuffle: "Recruited essentials from defeated rivals' households — Wei Zheng had served the brother he killed — which simultaneously removed talent from any surviving opposition and demonstrated that submission was survivable. Rotated and transferred officials to prevent regional entrenchment, and used the widening examination pool to keep the bench deep. The Louis XIV move without Versailles: enlarge the pool of replacements, and every essential becomes loyal by arithmetic.",
    danger: "626, the Xuanwu Gate, which was the coalition seizure itself — he killed both brothers and compelled his father's abdication, and the reign that followed was an exercise in retrospectively earning the legitimacy that act destroyed. 643, the far more revealing crisis: his own crown prince Li Chengqian plotted against him, and the succession fight threatened to split the coalition between the Zhangsun and rival factions. He deposed Chengqian, removed the obvious alternative in Li Tai as well, and settled on the compromise candidate Li Zhi — coalition management taking priority over the better heir. 645, the failed Goguryeo campaign, which cost him prestige and nothing else, because unlike Napoleon his revenue never depended on conquest.",
    verdict: "Twenty-three years, death in office, orderly succession — everything the framework predicts for a small-W ruler with a strong loyalty norm and a revenue base that rewards competence. The elegant coda is that the instrument which secured him eventually armed someone else: the examination system he widened became, under his own former concubine Wu Zetian, the weapon used to break the Guanlong aristocracy that had been his founding coalition. Enlarging the selectorate makes your essentials replaceable — and it makes your successors' essentials replaceable too, including by people you never imagined in the pool."
  },

  // ============================================================
  // 21ST CENTURY — the full era. Useful because it holds every
  // regime type at once: rent-funded autocracy, party-state,
  // competitive authoritarianism, parliamentary and presidential
  // democracy, coalitional presidentialism, and a state at war
  // whose coalition is partly foreign.
  // ============================================================

  putin: {
    system: "Electoral authoritarianism funded by resource rents — the framework's paradigm case, and the exact structural inverse of Lee Kuan Yew",
    w_scale: 2,
    sizes: { n: 110000000, s: 70000000, w: 600 },
    n: { who: "Every Russian adult, voting in elections that are real events with unreal outcomes. The nominal selectorate is enormous and its function is the classic one: to demonstrate to every influential how easily replaced they are.", size: "~110 million eligible" },
    s: { who: "Those whose support is worth managing — the administered electorate delivered by governors and state employers, plus the regional machines that produce the required turnout.", size: "~70 million voters" },
    w: { who: "The siloviki of the security services, the heads of the resource companies (Rosneft, Gazprom), the Presidential Administration, the general staff, a handful of regional strongmen including Kadyrov, and the licensed oligarchs.", size: "a few hundred essentials" },
    loyalty: "A very strong norm, maintained by making every essential's wealth documentable and therefore revocable. Nobody in the coalition holds anything they could keep in a successor's Russia, which is why exit is unattractive even when policy is catastrophic. Khodorkovsky in a glass cage in 2003 taught the rule once and it has not needed re-teaching.",
    currency: "Private goods on an enormous scale: company control, state contracts, tolerated corruption, protection from prosecution. The public did receive real goods in the first decade — rising wages and restored order on the back of the oil boom — which bought genuine popularity, but those were the by-product of high prices, not a coalition obligation.",
    revenue: "Oil and gas rents, which is the single fact that explains the regime. Put Putin's revenue base under Lee Kuan Yew's small coalition and you get Singapore; put Singapore's coalition over Russia's rents and you get this. A leader whose money comes out of the ground rather than out of his citizens' productivity owes those citizens nothing, and the theory predicts he will act accordingly.",
    shuffle: "Governors made appointed rather than elected in 2004; the Medvedev tandem of 2008–12 as a constitutional workaround that kept the coalition intact; Prigozhin killed in 2023 two months after a mutiny that briefly revealed how conditional the security barons' loyalty is.",
    danger: "The Bolotnaya protests of 2011–12, answered by a decisive tightening; the 2023 Wagner mutiny, the one occasion an essential physically moved against the centre; and the 2022 invasion, which the theory reads as the information failure of a long-tenure autocrat whose apparatus had stopped telling him the truth.",
    verdict: "Incumbent after twenty-five years — precisely what the framework predicts for a small-coalition ruler sitting on rents. The unanswered question is the one small-W systems always defer: nothing exists to transfer the coalition, because building it would create an alternative to himself."
  },

  gwbush: {
    system: "Mass electoral democracy — very large coalition, weak loyalty norm, and a rally effect that briefly suspended both",
    w_scale: 5,
    sizes: { n: 215000000, s: 122000000, w: 62000000 },
    n: { who: "Adult citizens eligible to vote, filtered through fifty separate state franchises and the Electoral College.", size: "~215 million" },
    s: { who: "Those who actually voted — about 122 million in 2004, distributed across states in a way that makes the raw national total analytically misleading.", size: "~122 million voters" },
    w: { who: "An Electoral College majority: roughly 62 million voters in 2004, organised through the Republican party apparatus, the evangelical mobilisation, the business coalition, and a congressional majority.", size: "~62 million voters" },
    loyalty: "Weak, as in any large-coalition system — and 2000 is the textbook demonstration that W is a *distribution*, not a total. He took office having won half a million fewer votes than his opponent, because the winning coalition in a federal system is assembled state by state and 537 votes in Florida were worth more than a national plurality. September 11 then produced a rally effect that lifted approval to ninety per cent and temporarily insulated him from the accountability the system is built to impose.",
    currency: "Public goods at scale — Medicare Part D, No Child Left Behind, and PEPFAR, which remains one of the most effective public-health programmes any government has run — alongside tax cuts weighted toward the upper brackets, which functioned as targeted goods for a coalition segment.",
    revenue: "Income and payroll taxes plus very large borrowing. A leader who must tax a productive population and borrow from it is structurally compelled toward public goods, which is why even a small-government presidency expanded entitlements.",
    shuffle: "First term deference to heavyweight deputies, second-term correction once the coalition's patience expired: Rumsfeld replaced by Gates after the 2006 midterms, Powell out, Rice moved to State, and the surge ordered against most advice.",
    danger: "The 2000 recount and the Supreme Court; the 2004 re-election; the 2006 midterms, when both chambers were lost — the coalition's verdict on Iraq delivered through the only mechanism it has; and the 2008 financial crisis, which ended the presidency at twenty-five per cent approval.",
    verdict: "Term-limited out after eight years, orderly succession, and a ninety-to-twenty-five approval arc that is the large-W pattern in a single line: these leaders are rented, not owned, and the rent is performance."
  },

  erdogan: {
    system: "Competitive authoritarianism — genuinely contested elections on a systematically tilted field, funded by a taxed economy rather than rents",
    w_scale: 4,
    sizes: { n: 61000000, s: 52000000, w: 27000000 },
    n: { who: "Every Turkish adult, in a country with turnout consistently above eighty per cent — one of the highest in the world, and not manufactured.", size: "~61 million eligible" },
    s: { who: "Actual voters, whose choices are real but whose information environment is not: broadcast media overwhelmingly aligned, opposition politicians prosecuted, and electoral boards responsive to the centre.", size: "~52 million voters" },
    w: { who: "His electoral majority — the pious Anatolian middle class and the urban poor — plus the AKP organisation, the post-2016 judiciary and security apparatus, and a construction-and-media business class dependent on state contracts.", size: "~27 million voters, resting on a few hundred essentials" },
    loyalty: "The norm tightened steadily. The 2017 referendum converted a parliamentary system into an executive presidency; the post-coup purge removed roughly 150,000 people from public employment and made the judiciary and officer corps dependencies rather than checks. The genius of the competitive-authoritarian design is that W stays formally huge — he must still win real elections — while the possibility of an *alternative* coalition is dismantled.",
    currency: "Both, in sequence. The first decade delivered genuine public goods: hospitals, roads, housing, and a tripling of income per head, which built a mass coalition that was earned rather than bought. The second decade leaned on private goods — construction concessions, media ownership transfers, and a crony class whose fortunes are entirely contingent.",
    revenue: "Taxes on a productive economy plus heavy foreign borrowing. No rents, which is the constraint that matters: he cannot ignore the material welfare of his voters, and the lira crisis and inflation of the 2020s therefore threaten him in a way no amount of judicial control offsets.",
    shuffle: "Serially discarded the co-founders — Gül, Davutoğlu, Babacan all pushed out and all now running rival parties; son-in-law Albayrak installed at Finance and then removed; central bank governors fired until one would cut rates into an inflation spiral.",
    danger: "Gezi in 2013; the July 2016 coup attempt, which was the old essentials of the officer corps moving against him and which he converted into the instrument of their destruction; the 2019 loss of Istanbul and Ankara, rerun and lost again; and the 2023 election, the first ever forced to a runoff.",
    verdict: "Incumbent after twenty-two years. The competitive authoritarian's method is not to abolish the winning coalition but to make any rival one unassemblable — and the recurring municipal losses show the limit of that, because the one thing he cannot manufacture is delivered prosperity."
  },

  lula: {
    system: "Coalitional presidentialism — two winning coalitions at once, one electoral and one legislative, bought in different currencies",
    w_scale: 5,
    sizes: { n: 156000000, s: 124000000, w: 60000000 },
    n: { who: "Every Brazilian adult; voting is compulsory, so the nominal and real selectorates nearly coincide.", size: "~156 million registered" },
    s: { who: "Actual voters — around 124 million, in a two-round system that forces a genuine majority rather than a plurality.", size: "~124 million voters" },
    w: { who: "The structural peculiarity of Brazil, and the key to him: two distinct coalitions. The electoral one — the Northeast, the poor, the unions, about 60 million votes — and the legislative one, a majority assembled from twenty-odd parties in a fragmented Congress, without which he cannot govern at all.", size: "~60 million voters plus ~300 legislators" },
    loyalty: "Weak in both coalitions and for different reasons. The electorate can replace him at fixed intervals; the legislature can paralyse him at any moment and has no ideological reason not to. Brazilian presidents are therefore permanently purchasing a majority they have already won, which is the structural fact behind every corruption scandal of the era, his own included.",
    currency: "Cleanly split by coalition. The electoral coalition is paid in public goods — Bolsa Família, minimum-wage rises, university expansion, which lifted tens of millions and remains the most efficient anti-poverty programme of its generation. The legislative coalition is paid in private goods: ministries, budget amendments, appointments — and, in the mensalão, cash, which is what happens when the legitimate currency runs short.",
    revenue: "A taxed productive economy, with the first presidency riding a commodity supercycle that made the public goods affordable without confronting anyone. That windfall was a partial rent, and its end under his successor is a large part of why her presidency collapsed and his did not.",
    shuffle: "Kept political brokerage personal and delegated economic policy to orthodox ministers to hold the market coalition — a two-track method that required him to be the only person able to speak to both. Hand-picked Dilma Rousseff as successor, which preserved the coalition and then failed to survive without him in it.",
    danger: "The mensalão in 2005, which nearly ended the first term; Lava Jato and 580 days in prison; the 2022 runoff won by 50.9 to 49.1, one of the narrowest mandates in the index; and the 8 January 2023 assault on the capital, an attempt to prevent the coalition's transfer.",
    verdict: "Incumbent in a third term, having returned from a prison cell — a coalition rebuilt from nothing, which the framework says should be nearly impossible and which happened because the electoral coalition's memory of delivered goods outlasted the legal verdict."
  },

  merkel: {
    system: "Parliamentary democracy with an intermediate coalition — the essentials are not voters but coalition partners, parliamentary groups and the Länder",
    w_scale: 5,
    sizes: { n: 62000000, s: 44000000, w: 24000000 },
    n: { who: "All German adults eligible for the Bundestag vote, under a mixed-member proportional system that makes single-party majorities effectively unobtainable.", size: "~62 million eligible" },
    s: { who: "Actual voters — around 44 million — whose proportional votes determine not a government but the bargaining positions from which one is assembled.", size: "~44 million voters" },
    w: { who: "The Bundestag majority, which in practice means the CDU/CSU parliamentary group, whichever partner is in the coalition (SPD for three of four terms, FDP once), the CSU leadership in Bavaria as a permanent semi-independent veto, and the Länder minister-presidents controlling the Bundesrat.", size: "~24 million coalition voters; a few hundred decisive parliamentarians" },
    loyalty: "Weak by design — a coalition partner can leave, and the CSU repeatedly threatened to. This is why her method was not command but de-dramatisation: a leader whose essentials can walk cannot win by confrontation, only by making every issue small enough that leaving over it looks disproportionate. 'Merkeln' became a verb for exactly this.",
    currency: "Public goods almost exclusively — fiscal consolidation, the energy transition, the euro rescue, the 2015 refugee decision — with the coalition paid in portfolios and policy concessions rather than in anything resembling patronage. One of the lowest private-goods profiles in the index.",
    revenue: "Taxes on a highly productive export economy. Germany's revenue depends on manufacturers choosing to invest and workers choosing to stay, and no chancellor can be indifferent to either — the structural reason German politics is so relentlessly consensual.",
    shuffle: "Outlasted rather than purged. Merz, Koch, Wulff and a generation of CDU rivals were allowed to leave or fail on their own schedule while she remained; she gave up the party chairmanship in 2018 and kept the chancellery, separating the two offices that every predecessor had held together.",
    danger: "The 2015 refugee decision, which cost her coalition support and midwifed the AfD; the 2017 election, after which coalition formation took nearly six months and the Jamaica talks collapsed entirely; and the 2018 Bavarian revolt over migration that nearly broke the CDU/CSU union itself.",
    verdict: "Sixteen years, voluntary exit at a time of her choosing, orderly handover — extraordinarily long for a large-W leader, and achieved by never spending coalition capital she did not have to. The criticism that she managed rather than shaped is, in framework terms, simply a description of what survival requires when your essentials can leave the room."
  },

  abe: {
    system: "Parliamentary democracy where the real coalition sits inside the governing party — and a prime minister who relocated it",
    w_scale: 4,
    sizes: { n: 105000000, s: 57000000, w: 25000000 },
    n: { who: "Japanese adults eligible to vote, in a system where the electorate chooses a party and the party chooses the prime minister.", size: "~105 million eligible" },
    s: { who: "Voters delivering LDP majorities, plus the Komeito partnership that supplies the marginal seats, and behind them the organised interests — agriculture, construction, business federations — that make the machine work.", size: "~57 million voters" },
    w: { who: "Historically the LDP's factional bosses, who could and routinely did replace a prime minister without any election at all — which is why Japan cycled through six premiers in the six years before his second term. After 2014, decisively, the Kantei itself.", size: "~25 million LDP voters; a few dozen faction leaders" },
    loyalty: "His achievement, in framework terms, was to change who his essentials were. The 2014 Cabinet Bureau of Personnel Affairs gave the prime minister's office control over roughly six hundred senior bureaucratic appointments, which had previously been the ministries' own. That single institutional change moved the winning coalition from the factions and the bureaucracy to the Kantei, and it is the reason he became the longest-serving prime minister in Japanese history after having been one of the shortest-serving.",
    currency: "Public goods framed as a programme — the three arrows of Abenomics, the childcare and labour-market reforms, the security legislation — with factional essentials paid in cabinet posts on the traditional rotation.",
    revenue: "A taxed advanced economy plus government borrowing at a scale no other democracy attempts, which gave him unusual room to buy time without confronting his coalition over consumption-tax rises he twice postponed.",
    shuffle: "Balanced the factions by distributing posts rather than destroying rivals — Aso kept close as deputy, Suga installed as chief cabinet secretary and gatekeeper for nearly eight years, and the Bank of Japan captured through the Kuroda appointment rather than coerced.",
    danger: "2007, the whole first term: he lost the upper house and resigned within two months, the classic Japanese pattern of a premier removed by his own party. 2018, the Moritomo and Kake favouritism scandals, survived because by then the party no longer chose the prime minister in the way it once had.",
    verdict: "Longest-serving premier, voluntary exit on health grounds, orderly succession to his own chief cabinet secretary. The contrast between his two terms is the cleanest natural experiment in the index for the proposition that a leader's tenure is a property of the coalition structure rather than of the leader."
  },

  obama: {
    system: "Mass electoral democracy — a very large coalition, spent deliberately on public goods, and punished for it on schedule",
    w_scale: 5,
    sizes: { n: 235000000, s: 131000000, w: 69000000 },
    n: { who: "Adult citizens eligible to vote, filtered again through the state-by-state Electoral College arithmetic.", size: "~235 million" },
    s: { who: "The 131 million who voted in 2008 — a turnout surge concentrated among young and minority voters that expanded the real selectorate itself.", size: "~131 million voters" },
    w: { who: "An electoral majority of some 69.5 million, plus the congressional majorities of 2009–10 that briefly included a filibuster-proof Senate, and the party and donor apparatus behind them.", size: "~69 million voters" },
    loyalty: "Weak, and he chose to spend it. The theory says large-W leaders must deliver public goods and will be judged on them; it does not promise the judgment will be favourable in the short run. He used a sixty-seat Senate window on the Affordable Care Act knowing the cost, and the cost arrived in November 2010 as sixty-three House seats — the largest midterm loss since 1938.",
    currency: "Public goods almost throughout: the stimulus, the auto rescue, Dodd-Frank, the ACA, the Paris accord, and the Iran agreement. Very little in the way of private goods, which is part of why his relations with his own congressional coalition were so consistently cool.",
    revenue: "Taxes plus post-crisis borrowing, in a system where the leader's fiscal room is a direct function of the productive economy's health — hence a first term defined almost entirely by restoring it.",
    shuffle: "A team-of-rivals homage with Clinton at State; foreign policy centralised in a tight NSC over the departments, which gave him control and cost him departmental goodwill.",
    danger: "The 2010 midterms, which ended his legislative presidency after twenty-one months; the 2011 debt-ceiling standoff; the 2014 midterms, which took the Senate; and the 2016 election, which delivered the coalition's verdict on the succession.",
    verdict: "Term-limited out, orderly succession, and a legacy of public goods that his coalition could not protect — the ACA survived, most of the executive-action layer did not. The framework's flat lesson: in a large-W system, what you build is only as durable as the coalition that comes after you."
  },

  xi: {
    system: "Party-state with no franchise at all — the smallest winning coalition in the modern index, resting on a productive tax base rather than rents",
    w_scale: 1,
    sizes: { n: 99000000, s: 376, w: 7 },
    n: { who: "The Communist Party's membership, in whose name authority is exercised. Note what is absent: the 1.1 billion adults outside the Party have no nominal role whatever in choosing national leadership, which makes China's nominal selectorate smaller in principle than the Soviet Union's was.", size: "~99 million party members" },
    s: { who: "The Central Committee — 205 full and 171 alternate members after the 20th Congress — together with the senior military command and the retired elders whose acquiescence still matters at successions.", size: "~376 Central Committee members" },
    w: { who: "The Politburo Standing Committee, now seven men chosen for loyalty rather than balance, the wider Politburo of twenty-four, and the Central Military Commission he chairs personally.", size: "7 at the core" },
    loyalty: "The strongest norm in the contemporary index, and deliberately strengthened. The anti-corruption campaign has disciplined well over a million officials, which serves the textbook double function: it removes rivals and it establishes that everyone is permanently prosecutable, since nobody at that level is genuinely clean. Abolishing the presidential term limit in 2018 removed the one mechanism that gave essentials a date to organise around.",
    currency: "Private goods to the party elite — position, promotion, immunity — and simultaneously public goods at a scale nobody else in the small-W category attempts: the poverty-elimination campaign, high-speed rail, universal-ish healthcare expansion. The reason is the revenue row, not benevolence.",
    revenue: "Taxes, SOE profits and local-government land sales drawn from a productive economy — not rents. This is the Lee Kuan Yew mechanism at 1.4 billion scale: a regime whose money depends on continued productivity cannot loot the producers, and must deliver performance because performance is the whole legitimating claim in the absence of a ballot.",
    shuffle: "Bo Xilai removed in 2012, Zhou Yongkang — the first Standing Committee-level target ever prosecuted — in 2014, Sun Zhengcai in 2017; Li Keqiang progressively sidelined and then dropped; the 20th Congress in 2022 staffed entirely with loyalists, punctuated by Hu Jintao's escorted removal from the hall on camera.",
    danger: "The Bo Xilai affair in 2012, which was a genuine rival coalition forming in public; and the white-paper protests of late 2022, which produced an abrupt reversal of zero-COVID — evidence that even a regime with no electoral accountability has a performance constraint it cannot ignore.",
    verdict: "Incumbent after thirteen years, having dismantled the succession norms Deng built specifically to prevent another Mao. The framework's verdict is not moral but structural: he has traded the one thing small-W systems can build — an orderly transfer — for maximum personal security, and the bill for that trade is always presented to somebody."
  },

  modi: {
    system: "The largest electorate on earth — and the most sophisticated use yet of state capacity to make public goods feel like personal gifts",
    w_scale: 5,
    sizes: { n: 970000000, s: 650000000, w: 240000000 },
    n: { who: "Roughly 970 million eligible voters, the largest nominal selectorate in human history.", size: "~970 million eligible" },
    s: { who: "The 650-odd million who actually vote, distributed across 543 constituencies where first-past-the-post makes vote share and seat share diverge sharply.", size: "~650 million voters" },
    w: { who: "The BJP's plurality and its NDA allies — and since June 2024, decisively, those allies as individuals: Naidu's TDP and Nitish Kumar's JD(U) now hold the arithmetic that the BJP lost when it fell to 240 seats, below the 272 needed alone.", size: "~240 million NDA voters" },
    loyalty: "Until 2024 the norm was unusually strong for a democracy, because he had made the coalition depend on him personally rather than on the party: direct-to-voter communication over the heads of both the organisation and the press meant BJP legislators owed their seats to his name. The 2024 result is the framework operating in real time — the electorate enlarged his effective winning coalition against his will, and two regional leaders now hold a veto they did not have in May.",
    currency: "The signature innovation, and worth studying closely: public goods delivered with the recipient's name and the leader's name attached. Jan Dhan bank accounts, Ujjwala cooking-gas cylinders, toilets, housing, free grain and PM-Kisan transfers are universal programmes, but direct benefit transfer lets them land like personal gifts. It is the loyalty payoff of private goods at public-goods scale — something no pre-digital leader could achieve.",
    revenue: "A taxed and rapidly growing economy, formalised through GST and digital payments — which is also what made the direct-transfer machinery possible. No rents; the growth has to be real.",
    shuffle: "Power concentrated in the PMO and in Amit Shah; state chief ministers rotated and occasionally replaced without warning to prevent regional power centres; no successor groomed, which is the standing question about the arrangement.",
    danger: "The Delhi and Bihar defeats of 2015; the farmers' protest of 2020–21, which forced an outright repeal of three farm laws — a rare and instructive climbdown, and exactly what the theory predicts when a large-W leader's essentials mobilise; and June 2024, the loss of the single-party majority.",
    verdict: "Incumbent after eleven years, now governing in genuine coalition for the first time. The interesting stretch of his career starts here: every instrument he built assumed he would not need partners."
  },

  trump: {
    system: "Mass democracy in which the binding coalition is not the electorate but the party primary electorate — a winning coalition nested inside a much larger one",
    w_scale: 5,
    sizes: { n: 255000000, s: 156000000, w: 77000000 },
    n: { who: "Adult citizens eligible to vote, through the Electoral College.", size: "~255 million" },
    s: { who: "General-election voters — about 156 million in 2024 — whose verdict determines who holds the office.", size: "~156 million voters" },
    w: { who: "An Electoral College majority of roughly 77 million voters. But the operative coalition for *governing* is smaller and different: the Republican primary electorate, perhaps 35 million, which decides whether any given legislator keeps their career.", size: "~77 million voters; ~35 million primary voters" },
    loyalty: "This is the structural insight and it is not a partisan one. In a safe-seat system, a legislator's real selectorate is their primary electorate, not their district. A leader who commands that primary electorate can therefore impose an autocrat's loyalty norm inside a democracy at almost no cost — the threat is not violence but a primary challenge. The two impeachment acquittals are the cleanest available evidence of where W actually sits: senators who publicly criticised the conduct voted to acquit, because the body that can remove *them* had made its preference clear.",
    currency: "Tax cuts and deregulation as targeted goods for the business coalition; judicial appointments as a durable, non-reversible payment to the religious-conservative bloc; tariffs as visible protection for particular industries and regions. Comparatively little in the way of broad public goods.",
    revenue: "Taxes, borrowing and tariffs — with tariffs notable in framework terms because they are a revenue source that can be directed at specific constituencies, which most modern tax instruments cannot.",
    shuffle: "The highest cabinet turnover of any modern presidency; loyalty tested continuously and publicly; the second term staffed from the outset with appointees selected against the criterion the first term revealed to be missing.",
    danger: "The 2018 midterms; the 2020 defeat and its aftermath; two impeachments, both survived; four indictments, none of which prevented renomination — each an instance of the general electorate and the primary electorate delivering opposite verdicts.",
    verdict: "Incumbent in a non-consecutive second term, the first since Cleveland. The framework's observation is that he did not change American institutions to achieve this; he correctly identified which coalition inside them actually binds."
  },

  ardern: {
    system: "Proportional parliamentary democracy — where a kingmaker holding seven per cent of the vote can assemble the winning coalition",
    w_scale: 4,
    sizes: { n: 3900000, s: 2900000, w: 1400000 },
    n: { who: "Enrolled New Zealand adults, in a mixed-member proportional system adopted specifically to prevent single-party dominance.", size: "~3.9 million enrolled" },
    s: { who: "Actual voters — under three million, one of the smallest real selectorates in the index, which is part of why the politics is so unusually intimate.", size: "~2.9 million voters" },
    w: { who: "In 2017: Labour, the Greens and New Zealand First — an arrangement in which her party had come *second* in votes and governed anyway. In 2020: Labour alone, the first single-party majority in MMP's history.", size: "~1.4 million coalition voters" },
    loyalty: "The 2017 formation is one of the best illustrations of the framework available anywhere. National won 44.4 per cent and lost power; Labour won 36.9 and took it, because Winston Peters held the only arithmetic that mattered and chose. For three years the single most essential person in New Zealand politics led a party with seven per cent of the vote. In 2020 that dependency vanished overnight — and, the theory would note, so did much of the discipline that dependency had imposed.",
    currency: "Public goods throughout — the Christchurch gun reform passed in twenty-six days, the COVID elimination strategy, child-poverty targets, wellbeing budgeting — with essentially no private-goods dimension, which is normal for small, high-trust, large-W polities.",
    revenue: "Taxes on a small productive economy heavily exposed to trade, which constrains the range of available policy far more than any coalition partner does.",
    shuffle: "Minimal. A collaborative cabinet, a stable deputy in Grant Robertson, and a successor in Chris Hipkins already visible before she went.",
    danger: "The 2017 negotiation itself; the 2022 polling collapse as inflation and the long tail of the COVID restrictions arrived together; and a level of personal threat that had become a live security consideration.",
    verdict: "Voluntary resignation in January 2023 — 'nothing left in the tank' — which the framework reads without sentiment: a large-W leader whose ability to deliver had ended, reading the position early and leaving before the coalition removed her. Orderly succession, and the party lost the subsequent election anyway."
  },

  zelensky: {
    system: "Wartime presidential republic whose winning coalition is partly foreign — the most structurally unusual case in the index",
    w_scale: 2,
    sizes: { n: 35000000, s: 18000000, w: 500 },
    n: { who: "Ukrainian adults eligible to vote, in a competitive democracy where elections have been suspended under martial law since 2022.", size: "~35 million eligible (pre-war)" },
    s: { who: "The 18 million or so who voted in 2019, when he took the runoff with 73 per cent — one of the largest mandates in the index, and now four years past its expiry with no lawful mechanism to renew it.", size: "~18 million voters" },
    w: { who: "The composite that makes him unusual: the presidential office under Yermak, the senior military command, the security services — and a set of *foreign governments*. Western states supplying weapons and roughly half the national budget are functionally essential, because their withdrawal ends the state's capacity to fight. The armed forces are the substrate beneath all of it, as Napoleon's were.", size: "a few hundred essentials, resting on ~800,000 under arms" },
    loyalty: "Domestically very strong while the war continues — no rival coalition can form around anything but victory, and the one figure with an independent constituency was a general. Externally the norm is weak and getting weaker: foreign essentials face their own electorates, and a US or European election can remove an essential from his coalition without any Ukrainian having a say. This is a leader who must campaign continuously in countries where he cannot vote.",
    currency: "Public goods of the most elemental kind — national survival, territorial defence, the electricity grid — plus, for the foreign essentials, a currency nobody else in this index has had to pay in: moral legitimacy, narrative, and the sense of participating in something historically significant.",
    revenue: "Roughly half the state budget externally financed, which is the single most consequential fact about his position. The framework is unambiguous that revenue determines accountability — and his revenue comes from abroad, which is precisely why he addresses foreign parliaments the way domestic leaders address their own.",
    shuffle: "Reznikov replaced over procurement corruption in 2023; Zaluzhnyi — genuinely popular, and therefore the only plausible alternative coalition in the country — removed from command in February 2024 and sent to London as ambassador, which is the classic disposal of a rival essential.",
    danger: "February 2022, when the coalition could have collapsed in seventy-two hours and did not; the Zaluzhnyi rivalry; and the recurring congressional and European funding fights, each of which is an essential publicly reconsidering its membership.",
    verdict: "Incumbent, governing on a 2019 mandate under martial law. The framework offers an uncomfortable prediction rather than a verdict: leaders whose revenue is foreign are accountable to foreigners, and the day the external funding decides its own domestic politics matter more, the coalition changes shape regardless of what any Ukrainian wants."
  },

  biden: {
    system: "Mass electoral democracy in which the effective legislative coalition briefly narrowed to two individuals",
    w_scale: 5,
    sizes: { n: 258000000, s: 158000000, w: 81000000 },
    n: { who: "Adult citizens eligible to vote, through the Electoral College.", size: "~258 million" },
    s: { who: "The 158 million who voted in 2020, the highest turnout rate in over a century.", size: "~158 million voters" },
    w: { who: "An electoral majority of 81 million — and then, for legislative purposes, a Senate split 50–50. Which meant that for two years the winning coalition for any bill was fifty senators, and any single one of them held a veto.", size: "~81 million voters; 50 senators" },
    loyalty: "The 50–50 Senate is worth dwelling on because it is so rare: a mass-democratic leader whose effective coalition for governing had shrunk to a number small enough to name. Joe Manchin and Kyrsten Sinema were, in the strict technical sense, essentials — irreplaceable, unpunishable, and aware of it. Build Back Better died in that arithmetic; the Inflation Reduction Act is what Manchin agreed to. No amount of presidential authority substitutes for a fifty-first vote.",
    currency: "Public goods at a scale unusual for a divided era — the American Rescue Plan, the bipartisan infrastructure law, the CHIPS Act, the IRA — plus the alliance rebuilding that constituted the foreign-policy programme.",
    revenue: "Taxes and borrowing, with the inflation of 2021–23 functioning politically as a tax nobody voted for and for which the coalition held him responsible regardless of cause.",
    shuffle: "Almost none. A cabinet of long-standing associates and a White House staffed by aides of decades' standing — the lowest turnover of any recent presidency, and the mirror image of his predecessor's method.",
    danger: "The Afghanistan withdrawal in August 2021, after which his approval never recovered; the inflation peak of 2022; the 2022 midterms, which went far better than the pattern predicted; and June 2024.",
    verdict: "The most unusual exit in the modern index: withdrawn from the 2024 race in July by his own coalition — donors, congressional leadership, and eventually Pelosi — through a mechanism that does not formally exist. American presidents cannot be deselected; this one effectively was, which is a reminder that the essentials' power does not depend on there being a procedure for it."
  },

  berlusconi: {
    system: "Parliamentary democracy with a fragmented coalition — a personal party whose leader was also the country's largest private broadcaster",
    w_scale: 5,
    sizes: { n: 49000000, s: 40000000, w: 18000000 },
    n: { who: "Italian adults eligible to vote for the Chamber of Deputies, under the mixed electoral law of 1993 and, from 2006, a proportional law with a majority bonus.", size: "~49 million (2001)" },
    s: { who: "Those who voted — turnout above 80 per cent in each of his victories.", size: "~40 million voters (2001)" },
    w: { who: "The House of Freedoms vote in 2001 — Forza Italia, the National Alliance, the Northern League and the Christian Democratic splinters — and in parliament the leaders of those parties, each able to withdraw a majority.", size: "~18 million voters (estimate); a handful of party leaders" },
    loyalty: "Weak by the arithmetic of a mass electorate, but tightened by dependence: his partners needed his votes and his television audience, and Forza Italia's own deputies had no organisation that did not run through him. The partners could still leave — the League did in December 1994, Fini's followers in 2010.",
    currency: "Public goods promised as tax cuts (the 2001 contract; abolition of the property tax on first homes in 2008) and delivered partly as tax amnesties; private goods in candidacies and ministries for allies and for managers from his own companies.",
    revenue: "Taxes on a slow-growing economy carrying public debt above 100 per cent of GDP — which left the government exposed to the bond market in 2011.",
    shuffle: "Allies dropped and re-adopted as needed: the League walked out in 1994 and returned in 2000; the National Alliance was merged into the People of Freedom in 2009 and Fini's group pushed out in 2010.",
    danger: "December 1994, when the League withdrew; 14 December 2010, a confidence vote won 314 to 311 after Fini's split; and November 2011, when the bond spread and defections ended the government.",
    verdict: "About nine years as prime minister across seventeen, ended once by a coalition partner, once by the voters and once by defections under market pressure — the large-W pattern of performance-contingent tenure, with the unusual feature that the leader's private media empire was part of what held the coalition together."
  },

  // ============================================================
  // THREE ANOMALIES — the succession problem, solved and failed
  // Every small-coalition entry above ends the same way: nothing
  // exists to transfer the coalition, because building it would
  // create an alternative to the leader. Augustus is the man who
  // solved that problem. Cromwell and Cixi are the two instructive
  // ways of failing it.
  // ============================================================

  augustus: {
    system: "Military autocracy inside republican forms — and the only small-coalition regime in the index that successfully transferred its coalition to a successor",
    w_scale: 2,
    sizes: { n: 5000000, s: 20000, w: 200 },
    n: { who: "Roman citizens, some five million after the enfranchisement of Italy, still voting in assemblies he kept carefully alive and steadily drained of content. The forms mattered enormously to him: a nominal selectorate that believes itself sovereign is the cheapest legitimacy available.", size: "~5 million citizens" },
    s: { who: "The Senate — reduced from roughly a thousand members to six hundred by three personal purges — together with the equestrian order he turned into a salaried administrative class, and the officer corps of twenty-eight legions.", size: "~600 senators, ~20,000 equestrians" },
    w: { who: "The legates and governors of the armed provinces, the praetorian prefects commanding the guard he created in 27 BC, the leading senatorial houses, and his own family. A few hundred men resting on roughly a quarter of a million soldiers — structurally the same arrangement as Napoleon's, as the ring diagram shows.", size: "~200 essentials, resting on ~250,000 under arms" },
    loyalty: "Strong, and deliberately strengthened by widening the pool rather than by terror. He multiplied suffect consulships so that far more men could hold the supreme honour, opened the Senate to Italians and later provincials, and built an equestrian career ladder that had not previously existed. Every one of those moves made an individual essential more replaceable — the Versailles logic and the Taizong logic, arrived at independently and a millennium and a half earlier.",
    currency: "Both, at scale. Private goods for the coalition: commands, priesthoods, multiplied consulships, and marriage into his house. Public goods for the city and the provinces: the grain dole, the aqueducts, the vigiles as a fire brigade, the roads, and above all the peace — which counted as a public good precisely because it was what the previous century had lacked.",
    revenue: "Egypt, annexed as personal property and closed to senators without his permission, plus provincial taxation and a private fortune larger than the treasury. That looks like a rent, and should have produced the usual results — except for what he did with it, which is this entry's whole point.",
    shuffle: "Three revisions of the Senate roll; rivals eliminated early in the proscriptions of 43 BC and never afterwards; and the one structural masterstroke, the aerarium militare of AD 6 — a military treasury funded by inheritance and sales taxes, paying fixed discharge bonuses on a published schedule. Before it, a soldier's loyalty ran to the general who promised him land. After it, it ran to an institution. That single act converted personal patronage into bureaucratic entitlement, and it is the most consequential piece of coalition engineering in this file.",
    danger: "23 BC, when he nearly died and the Murena conspiracy surfaced — answered by restructuring his own powers rather than by killing anyone. The repeated destruction of his succession plans: Marcellus in 23, Agrippa in 12, Gaius and Lucius in AD 2 and 4. And AD 9, the loss of three legions in the Teutoburg Forest, which cost him a tenth of the army and, by Suetonius's account, his composure.",
    verdict: "Died in bed after forty-one years, and Tiberius succeeded without a civil war — the first peaceful transfer of autocratic power in Roman history. The real proof is what came after: the system absorbed Caligula, Claudius and Nero without collapsing, because the coalition was being paid by an institution rather than by a man. Compare Napoleon, whose rings are almost identical — 77/54/36 against this 76/52/32 — and whose coalition was paid from conquest. Same shape, opposite ending, and the difference is not character or luck but where the money came from and whose name was on it."
  },

  cromwell: {
    system: "Military republic — a leader whose essentials were the army that had destroyed every available source of legitimacy, including, eventually, his own",
    w_scale: 2,
    sizes: { n: 250000, s: 5000, w: 200 },
    n: { who: "The forty-shilling freeholders and borough electors of the old franchise, revised under the Instrument of Government to a £200 property qualification — a nominal selectorate that was, if anything, narrower than the one the King had worked with.", size: "~250,000 eligible" },
    s: { who: "The political nation: the county gentry, the borough corporations, the members of the successive Parliaments — and, decisively and separately, the New Model Army.", size: "~5,000 of the political nation" },
    w: { who: "The senior officer corps of the New Model Army, and the Council of State drawn largely from it. Perhaps two hundred men, resting on an army of forty thousand that had already removed two governments and executed a king.", size: "~200 officers, resting on ~40,000 soldiers" },
    loyalty: "Structurally weak, and this is the entry's core. His selectorate was tiny — there was no reservoir of alternative officers loyal to him personally — so his essentials were hard to replace and knew it. A small W drawn from a small S is the monarch's problem, and Louis XIV answered it by manufacturing a larger selectorate at Versailles. Cromwell never found an equivalent. He could purge Parliaments endlessly and did; he could not purge the Army, because the Army was the regime.",
    currency: "Private goods, largely in confiscated land — royalist estates sold, and above all the Cromwellian settlement of Ireland, where soldiers were paid their arrears in Irish acres because there was no coin. A coalition paid in other people's land is cheap in the short run and creates a class whose title depends absolutely on the regime surviving.",
    revenue: "The monthly assessment, a land tax levied at rates Charles I would not have dared attempt, plus excise, customs, and the sale of Crown and Church property. The irony is exact and worth sitting with: a revolution fought against arbitrary taxation produced far heavier taxation than the monarchy had managed, because the Army had to be paid, and the Army was the only thing holding the regime up.",
    shuffle: "He shuffled the wrong circle. The Rump dissolved in 1653, the Barebones surrendering its own authority, the First Protectorate Parliament dissolved in 1655, the Second in 1658; the Major-Generals installed over England in 1655 and abandoned in 1657 when Parliament refused to fund them. Each dissolution removed another civilian body that might have made his authority transferable, and left the Army standing more visibly alone.",
    danger: "The Leveller mutinies of 1649, ended by shooting the ringleaders at Burford — coalition discipline applied to his own side. And then the decisive episode: the Humble Petition and Advice of 1657, in which the civilian gentry offered him the Crown. Monarchy was the one form that was known, lawful and inheritable, and taking it would have made his position transferable. His own officers refused, Lambert and others threatening to go, and he declined. His essentials vetoed the institution that could have outlived him, because it would have made them less necessary.",
    verdict: "Died in office in September 1658 and was succeeded by his son Richard, who lasted eight months. Richard had no independent standing with the Army, the Army removed him in May 1659, and the Restoration followed within the year; Cromwell's body was exhumed and posthumously hanged in 1661. The framework's reading is unsentimental: a coalition paid personally, whose legitimating claim its own leader has spent a decade dismantling, cannot be inherited by anyone. He is the photographic negative of Augustus, who was offered no crown and did not need one."
  },

  cixi: {
    system: "Regency autocracy with no formal claim to power at all — half a century held by controlling the succession mechanism itself",
    w_scale: 1,
    sizes: { n: 40000, s: 200, w: 20 },
    n: { who: "There is no franchise and no nominal selectorate in any ordinary sense — the emperor rules by the Mandate of Heaven. The nearest equivalent is the pool from which power-holders could conceivably be drawn: the Manchu banner nobility, the imperial clan, and the ranked officialdom produced by the examinations.", size: "~40,000 banner elite and ranked officials" },
    s: { who: "The Grand Council and Grand Secretaries, the senior imperial princes, the viceroys and governors-general of the provinces, and the palace eunuch establishment that controlled physical access to the throne.", size: "~200" },
    w: { who: "A Grand Council of five or six, the key princes — Gong, later Qing — the Han provincial viceroys who commanded the only effective armies and revenues after the Taiping, above all Li Hongzhang, the Peking field commander Ronglu, and the chief eunuchs.", size: "~20 men" },
    loyalty: "Weak by the arithmetic and repaired by other means. Her W and S were both tiny, which by the Louis XIV logic left her essentials hard to replace and gave her little leverage — and the Taiping rebellion had made it worse, devolving armies and likin revenue to Han provincial officials she could not remove. Her substitute for a loyalty norm was permanent arbitration: Manchu princes balanced against Han viceroys, reformers against conservatives, with herself as the only point at which the balance could be struck. Divide and rule as a structural replacement for replaceability.",
    currency: "Private goods almost exclusively — appointments, titles, the sale of offices, and a large tolerance of provincial autonomy and provincial corruption as the price of provincial loyalty. Public goods were whatever the self-strengthening viceroys built on their own initiative: arsenals, shipyards, telegraphs, the customs service. The Summer Palace reconstruction, funded partly from money raised for the navy, is the standing charge against her, though the sum actually diverted is still disputed.",
    revenue: "Land tax, likin transit duties increasingly retained by the provinces, and the Maritime Customs Service — the most reliable revenue the dynasty had, and run by an Englishman. After 1901 the Boxer indemnity of 450 million taels mortgaged decades of future receipts to foreign powers. A shrinking, pledged, progressively decentralised revenue base is the framework's recipe for a weakening centre, and the centre weakened exactly as predicted.",
    shuffle: "The instrument was the succession itself, used three times. In 1861 she destroyed the eight regents her husband had appointed and took the regency for her five-year-old son. In 1875, when he died childless at eighteen, she chose a three-year-old nephew of the same generation — breaking the dynastic rule requiring an heir of the next generation, because a generational heir would have ended her regency. In 1898 she ended his Hundred Days' Reform by coup, imprisoned him for the remaining ten years of his life, and executed its leading advocates. She also removed Prince Gong, her own co-architect of 1861, in 1884, once he had grown substantial enough to matter.",
    danger: "1861, the seizure itself; 1884, the Sino-French war and Prince Gong's fall; 1898, the Hundred Days, when the adult emperor moved independently and she had to take the throne back by force; and 1900, when she backed the Boxers, declared war on eight foreign powers simultaneously, lost the capital and fled to Xi'an — and still returned to rule for eight more years.",
    verdict: "Forty-seven years of power without ever holding an office that entitled her to it, and death in her own bed at seventy-two, having named the next emperor the day before — Guangxu having died one day earlier, of arsenic, as forensic testing confirmed in 2008. The framework's verdict separates the two things people usually conflate: she was an exceptional coalition manager and a catastrophic steward. Every move that secured her removed a degree of freedom from the state — a broken succession rule, an imprisoned emperor, executed reformers, capable men discarded once they grew useful enough to be dangerous. The dynasty fell three years after her, and the reason is legible in her own shuffle column: by 1908 there was nobody left with the standing to govern."
  },

  louis14: {
    system: "Absolutist court monarchy — tiny coalition, tiny selectorate, and a king who deliberately enlarged the selectorate to gain leverage",
    w_scale: 1,
    sizes: { n: 400, s: 150, w: 40 },
    n: { who: "The great noble houses, the princes of the blood and the senior clergy — those with any conceivable claim to a voice in a succession or a regency.", size: "a few hundred families" },
    s: { who: "Those who could actually shape who governed: the high nobility, the parlements until he muzzled them, the Church hierarchy, the great financiers.", size: "a hundred or two" },
    w: { who: "Those whose active cooperation kept him in power: the ministerial clans (Colbert, Le Tellier–Louvois), the army high command, the financiers who lent to the crown, the provincial governors.", size: "perhaps thirty to fifty men" },
    loyalty: "The monarch's structural problem: when S is as small as W, essentials are hard to replace, and hard-to-replace essentials have leverage. Louis solved it architecturally. Versailles pulled thousands of nobles into competition for a few dozen positions of favour — enlarging the effective selectorate and making every essential replaceable. The Dictator's Handbook's second rule, executed in stone.",
    currency: "Private goods almost entirely: pensions, offices, precedence, tax exemptions, the right to hold the candle at the coucher. Public goods — roads, Vauban's fortresses — were incidental to military capacity, never coalition payment.",
    revenue: "The taille and gabelle extracted from the peasantry through tax farmers, plus the sale of venal offices. A revenue system requiring no consent from the taxed left him free to ignore the population's welfare — and the fiscal exhaustion of the 1690s and 1709 shows what happened when that revenue failed.",
    shuffle: "Ministerial families balanced against one another so that no clan became indispensable; the old sword nobility excluded from office and paid in precedence instead. The coalition was reshuffled continuously through the etiquette of favour — 'I do not know him' was a demotion from the winning coalition, delivered in public.",
    danger: "The Fronde (1648–53): the essentials' revolt during his childhood, which defined his entire strategy of coalition management. Later, the revenue crises of the 1690s and the famine winter of 1709 strained the coalition to its limit without breaking it — because the essentials still had nowhere else to go.",
    verdict: "Seventy-two years — the longest reign in European history — matching the theory's prediction that small-W rulers who survive consolidation become nearly unremovable. Orderly succession to a great-grandson under regency, because the coalition's paymaster had simply changed names."
  }
};
