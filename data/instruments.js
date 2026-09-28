// ============================================================
// CARROTS & STICKS — the instruments of rule
// ============================================================
// Two structures live here.
//
// 1. window.INSTRUMENTS — the taxonomy. Every tool of rule, filed
//    under the register it serves:
//      trust    · getting people to believe you
//      loyalty  · binding them to you
//      fear     · making them afraid to cross you
//      motivate · making them act
//    Each carries a definition, the diagnostic question, and —
//    the most useful field — `cost`: how the instrument fails,
//    because every one of these has a characteristic failure mode.
//
// 2. window.LEADER_INSTRUMENTS — the catalogue. Per leader:
//      creed     what they SAID moved people (where recorded)
//      practice  what they actually did — often the contradiction
//      tools     [{ reg, key, detail }] concrete instances
//
// `key` points at the taxonomy, so the Instruments view can show
// every leader who used a given tool side by side.
// Quotes flagged "attributed" are traditional; "apocryphal" means
// the attribution is known to be false but the saying is famous.
// ============================================================

window.INSTRUMENTS = [
  // ---------------------------------------------------------- TRUST
  { key: "t_selfbind", reg: "trust", name: "Self-Binding / The Costly Signal",
    def: "Giving up power, or tying your own hands, to prove you can be trusted with what remains. The signal works precisely because it is expensive and hard to fake.",
    cost: "Only credible if the relinquishment is real. A theatrical handover — a placeholder successor, a term limit amended away — teaches the opposite lesson and cannot be un-taught.",
    q: "What has this leader given up that they could have kept, and could they take it back?" },
  { key: "t_hardship", reg: "trust", name: "Shared Hardship",
    def: "Eating the men's rations, sleeping in the field, standing in the same danger. The oldest and most reliable way for a commander to be believed.",
    cost: "Does not scale past the people who can see you. A leader of sixty million cannot share their hardship, only perform it — and performance is detectable.",
    q: "Does this leader run the risk they are asking others to run?" },
  { key: "t_justice", reg: "trust", name: "Conspicuous Justice",
    def: "Judging in person and in public, accessible to the ordinary petitioner. The ruler as the last court of appeal against their own officials.",
    cost: "Bounded by one person's attention. It builds enormous legitimacy and delivers justice to a rounding error of the population.",
    q: "Can an ordinary subject get a hearing — and against whom?" },
  { key: "t_clemency", reg: "trust", name: "Keeping Faith with the Defeated",
    def: "Clemency as a credible commitment: surrender to me and you will live, and here is the proof. It converts enemies into subjects faster than any army.",
    cost: "Can be read as weakness by those who never intended to keep faith. Caesar's clementia spared the men who killed him.",
    q: "What happened to the last people who lost to this leader?" },
  { key: "t_audit", reg: "trust", name: "Verification & Audit",
    def: "Trust made safe by information — the survey, the inspector, the sealed report. It lets a ruler delegate widely because they can check.",
    cost: "Expensive, resented, and one step from surveillance. The apparatus built to verify officials ends up watching everyone.",
    q: "How does this leader find out what their own government is doing?" },
  { key: "t_publicrule", reg: "trust", name: "The Published Rule",
    def: "Visible, predictable, written law — the stele, the code, the edict pillar. You can trust a ruler whose rules you can read.",
    cost: "It binds the ruler too. That is the whole point, and the reason most rulers publish rules they intend to hold others to.",
    q: "Is the rule the same when it is inconvenient to the one who wrote it?" },

  // ---------------------------------------------------------- LOYALTY
  { key: "l_honors", reg: "loyalty", name: "Honors, Ribbons and Titles",
    def: "Symbolic currency that reliably outperforms cash — the decoration, the standard, the title, the place in the procession. Astonishingly cheap for what it buys.",
    cost: "Inflates. Honors given freely become worthless, and the leader who debases them destroys a currency they cannot re-mint.",
    q: "What is the scarcest honor here, and who decides who gets it?" },
  { key: "l_spoils", reg: "loyalty", name: "Patronage & Spoils",
    def: "Office, contracts, licences and jobs distributed for political support. The oldest machine fuel there is.",
    cost: "Creates a clientele that must be fed forever, and an administration selected for loyalty rather than competence. It runs out exactly when you need it most.",
    q: "What does this machine run on, and what happens when the money stops?" },
  { key: "l_kinship", reg: "loyalty", name: "Fictive Kinship & Brotherhood",
    def: "Making the band a family — Companions, comitatus, sworn brothers, the band of brothers, the Party as kin. Obligation felt as love rather than contract.",
    cost: "Does not scale past the number of people who can know one another, and turns every political disagreement into a betrayal.",
    q: "Is disloyalty here a policy difference or a family crime?" },
  { key: "l_marriage", reg: "loyalty", name: "Marriage & Hostage Bonds",
    def: "Binding elites by blood and by held children — dynastic marriage, fostering, the hostage kept at court in honorable comfort.",
    cost: "Every alliance-by-marriage manufactures heirs with claims. The instrument that secures this generation arms the succession crisis in the next.",
    q: "Whose children are living at this court, and what are they owed?" },
  { key: "l_mobility", reg: "loyalty", name: "Careers Open to Talent",
    def: "Loyalty bought with mobility — promotion by demonstrated ability, regardless of birth. The strongest anti-aristocratic technology ever invented.",
    cost: "Threatens the existing elite immediately, and within two generations the promoted have become a new aristocracy defending its own children.",
    q: "Who is the lowest-born person with real power here, and how did they get it?" },
  { key: "l_complicity", reg: "loyalty", name: "Binding by Complicity",
    def: "Making subordinates accomplices so that defection is impossible — the shared signature, the joint order, the crime committed together.",
    cost: "Guarantees that nobody around the leader can ever tell the truth, including to the leader. The most effective loyalty tool and the most corrosive to information.",
    q: "What does this inner circle know about each other that would destroy them all?" },
  { key: "l_attention", reg: "loyalty", name: "Personal Attention",
    def: "The remembered name, the recalled battle, the hand on the arm, the letter in your own hand. Being known by the powerful is its own payment.",
    cost: "Entirely unscalable and wholly personal — it dies with the leader and cannot be inherited or institutionalized.",
    q: "How many people does this leader know by name, and how do they use it?" },
  { key: "l_debt", reg: "loyalty", name: "The Unrepayable Favor",
    def: "The rescue, the pardon, the debt paid, the career made. Obligation deliberately created and never quite discharged.",
    cost: "Debt breeds resentment as often as gratitude. The rescued sometimes hate the rescuer for knowing what they were.",
    q: "Who owes this leader something they can never pay back?" },

  // ---------------------------------------------------------- FEAR
  { key: "f_exemplary", reg: "fear", name: "Exemplary Terror",
    def: "Atrocity as communication. The destroyed city is not punished for its own sake; it is a message to the next city, which is the actual audience. Timur's skull towers were policy announcements.",
    cost: "Works on those who hear and can still surrender. It hardens anyone with nothing left to lose, and it produces the peace Tacitus named: 'they make a desert and call it peace.'",
    q: "Who was the intended audience for this violence — and did they have the option of submitting?" },
  { key: "f_unpredict", reg: "fear", name: "Calculated Unpredictability",
    def: "Selecting victims arbitrarily, so that innocence offers no protection. This maximises fear per unit of violence: if the blameless are taken, no behaviour is safe, and everyone polices themselves.",
    cost: "Destroys initiative completely. When no action is provably safe, subordinates stop deciding anything and push every choice upward — the leader drowns in decisions and the state stops functioning.",
    q: "Can anyone here work out what would keep them safe?" },
  { key: "f_purgefavorite", reg: "fear", name: "Destroying the Indispensable Servant",
    def: "Executing your own most powerful deputy — the one everybody thought untouchable. Nothing else communicates so economically that there is no safe distance from the throne.",
    cost: "You lose the competence you built the regime on, and you teach every able person that serving you well is the most dangerous career available.",
    q: "What happened to the last person who became genuinely necessary?" },
  { key: "f_scapegoat", reg: "fear", name: "The Deniable Delegate",
    def: "Appoint a brutal agent, let them do the necessary cruelty, then destroy them publicly and take credit for the justice. Machiavelli's model: the people were left 'satisfied and stupefied.'",
    cost: "Works once per audience. After the second Remirro, everyone understands the sequence, and no competent agent will take the job.",
    q: "Who is doing this regime's dirty work, and what is their life expectancy?" },
  { key: "f_surveillance", reg: "fear", name: "Surveillance & the Informer",
    def: "The belief that one is watched does nearly all the work; actual coverage can be remarkably thin. The lion's mouth, the Cheka, the block warden, the file.",
    cost: "Floods the centre with denunciation, score-settling and noise. You build it to learn the truth and it becomes the most reliable machine for hiding the truth from you.",
    q: "What proportion of what reaches the top is denunciation rather than information?" },
  { key: "f_collective", reg: "fear", name: "Collective Liability",
    def: "Punishing the group for the individual — decimation, the mutual-responsibility household group, the village reprisal. It converts your subjects into each other's guards.",
    cost: "Turns private deterrence into public grievance, and creates the one thing a regime cannot survive: a population with a shared enemy and nothing to lose.",
    q: "Who is punished here for what someone else did?" },
  { key: "f_legal", reg: "fear", name: "Terror in Legal Dress",
    def: "Repression wearing the costume of law — the show trial, the bill of attainder, the emergency decree, the confession read aloud. Legitimacy laundering.",
    cost: "Spends the law's credibility to buy the terror's respectability. Afterwards the courts are useless for the ordinary business of governing, because nobody believes them.",
    q: "Does this regime still need its courts for anything other than punishment?" },
  { key: "f_hostage", reg: "fear", name: "Hostages & Family Liability",
    def: "Holding the children, wives and heirs of the powerful — at court, in honorable custody, as the price of a lord's good behaviour.",
    cost: "Only credible while the hostages are visibly well treated and only useful while they are alive. Killing them ends the system's value in a single afternoon.",
    q: "Whose family is the guarantee of whose obedience?" },
  { key: "f_majesty", reg: "fear", name: "Awe & Majesty",
    def: "Terror without violence — the throne that rises, the prostration, the unbearable silence, the torchlit parade, the etiquette so intricate that error is humiliation. Fear manufactured out of theatre.",
    cost: "Ruinously expensive, and punctured permanently by a single moment of farce. Majesty cannot survive being laughed at.",
    q: "What does it feel like to be in this leader's physical presence, and who designed that?" },
  { key: "f_denunciation", reg: "fear", name: "Encouraged Denunciation",
    def: "Inviting the population to inform on one another — the committee, the struggle session, the hotline. Repression devolved to volunteers, who do it for free and with enthusiasm.",
    cost: "Cannot be switched off. Once neighbours have destroyed neighbours, the grievances outlive the campaign and the regime owns all of them.",
    q: "Who benefits personally from denouncing someone here?" },
  { key: "f_discipline", reg: "fear", name: "Routine Corporal Discipline",
    def: "Fear as constant background rather than spectacle — the lash, the drill, the standing punishment applied predictably and often. Distinct from exemplary terror: the point is not to be remembered but to be expected.",
    cost: "Produces obedience and kills initiative at the same time. It builds armies that manoeuvre beautifully under supervision and dissolve when the officers fall.",
    q: "What happens to an ordinary subordinate here who makes an ordinary mistake?" },
  { key: "f_deportation", reg: "fear", name: "Deportation & Dispersal",
    def: "Breaking a community by moving it — transferring populations, resettling elites in the capital, scattering a defeated people so they cannot reassemble.",
    cost: "Destroys the productive capacity you just conquered, and creates a permanent diaspora with an inherited grievance and a long memory.",
    q: "Which communities here were moved, and who now lives where they lived?" },

  // ---------------------------------------------------------- MOTIVATE
  { key: "m_glory", reg: "motivate", name: "Glory & Posterity",
    def: "Making the follower feel they are inside an epic — that this hour will be remembered and they were in it. The cheapest and most powerful motivator ever found, and the one cynics consistently underrate.",
    cost: "Requires a story people already want to be in, and it inflates: every campaign must be more glorious than the last. When the epic finally fails, the disillusion is proportional to the height.",
    q: "What story are this leader's followers telling themselves about what they are part of?" },
  { key: "m_plunder", reg: "motivate", name: "Plunder & Material Stake",
    def: "The sack, the donative, land for veterans, the bonus, the cash transfer. Direct, legible, and immediately effective.",
    cost: "Finite, and habit-forming. An army paid in plunder needs a war to be paid, which means the instrument eventually chooses your foreign policy for you.",
    q: "What is the material return here, and what happens the year it does not arrive?" },
  { key: "m_emulation", reg: "motivate", name: "Emulation & Engineered Rivalry",
    def: "Setting people and units against each other for the leader's benefit — prizes, competing agencies, parallel commands, promotion by visible result.",
    cost: "Buys energy with duplication and sabotage. At the extreme it becomes institutional darwinism, where rivals destroy the state's capacity to act while competing to serve it.",
    q: "Are subordinates here competing to serve the mission, or to survive each other?" },
  { key: "m_intent", reg: "motivate", name: "Intent & Mission Clarity",
    def: "Telling people what you are trying to achieve and why, then releasing them to work out how. People work harder and better on a problem they understand.",
    cost: "Requires shared doctrine and people you can trust with discretion. Applied to unreliable or untrained subordinates it simply produces confident, coordinated failure.",
    q: "Could a subordinate here explain the leader's actual objective in their own words?" },
  { key: "m_shame", reg: "motivate", name: "Shame & Peer Judgment",
    def: "The eye of your equals — regimental honour, face, the disgrace that outlives you. The strongest small-group motivator known, and the real mechanism behind most 'discipline'.",
    cost: "Cruel, hard to aim, and indiscriminate. It drives people to die pointlessly rather than be thought cowards, and it destroys the ones it does not motivate.",
    q: "Whose opinion here is the one a follower cannot bear to lose?" },
  { key: "m_conviction", reg: "motivate", name: "Conviction & Political Religion",
    def: "Belief that makes sacrifice rational — dhamma, the Party, the nation, the faith. It motivates when there is no reward and no one watching.",
    cost: "Outlasts the leader and outruns their control. The true believer eventually judges the leader against the creed, and the creed usually wins.",
    q: "What here would a follower die for if the leader were dead?" },
  { key: "m_ownership", reg: "motivate", name: "Ownership & the Stake",
    def: "Turning subjects into stakeholders — land reform, the equal-field allotment, shareholding, a house, a plot. People defend what they own.",
    cost: "Expensive, slow, and nearly impossible to reverse. It also creates a propertied class with interests of its own that will one day obstruct you.",
    q: "What does an ordinary person here own that they would fight to keep?" }
];

// ============================================================
// THE CATALOGUE — what each leader actually reached for
// ============================================================

window.LEADER_INSTRUMENTS = {

  napoleon: {
    creed: "“Men are moved by two levers only: fear and self-interest.” (attributed) — and, on being told the Légion d'honneur was a mere bauble: “It is with such baubles that men are led.”",
    practice: "The most cynical stated theory in the index, contradicted by the most sophisticated honour-economy anyone has ever built. Fear and money were the smaller half of what he actually used; the larger half was glory, intimacy and the sense of being inside a classical epic — his men did not fight for francs, they fought to be the kind of men Plutarch wrote about, and he knew exactly what he was doing.",
    tools: [
      { reg: "loyalty", key: "l_honors", detail: "Founded the Légion d'honneur in 1802 — open to any rank, deliberately not hereditary — and distributed eagles to regiments as objects to die for." },
      { reg: "loyalty", key: "l_attention", detail: "Walked the bivouacs before battle recalling individual veterans' names and the actions they had fought in; the ear-pull and the pinch as public marks of favour." },
      { reg: "loyalty", key: "l_mobility", detail: "'Every soldier carries a marshal's baton in his knapsack' — marshals raised from innkeepers' and coopers' sons, visibly." },
      { reg: "motivate", key: "m_glory", detail: "'Soldiers, forty centuries look down upon you' at the Pyramids; the Bulletins de la Grande Armée written to be read aloud, casting each unit as an actor in a classical epic." },
      { reg: "motivate", key: "m_plunder", detail: "Italian campaigns explicitly funded by requisition and paid in arrears from conquest; donatives and estates for the marshalate." },
      { reg: "fear", key: "f_surveillance", detail: "Fouché's police ministry and a systematic cabinet noir opening the mail of his own elite." },
      { reg: "trust", key: "t_hardship", detail: "Shared the bivouac, the bad weather and the retreat; conspicuously rode where he could be shot at." }
    ]
  },

  qinshihuang: {
    creed: "Legalism's doctrine of the Two Handles (Han Feizi): the ruler controls subordinates by exactly two instruments — punishment and favour — and must never let anyone else hold either.",
    practice: "The purest written statement of carrots-and-sticks in the ancient world, applied literally. Han Feizi's insistence that the ruler must monopolise both handles — never delegating the power to reward or to punish — is the theoretical root of centralised autocracy in East Asia.",
    tools: [
      { reg: "fear", key: "f_collective", detail: "Mutual-responsibility groups of five and ten households, each liable for the others' offences — the population deputised as its own police." },
      { reg: "fear", key: "f_deportation", detail: "120,000 aristocratic families of the conquered states forcibly resettled in the capital, where they could be watched and could not raise their own regions." },
      { reg: "fear", key: "f_exemplary", detail: "The burning of the books and the killing of scholars as a demonstration that the past would not be permitted to criticise the present." },
      { reg: "loyalty", key: "l_mobility", detail: "Commandery officials appointed and removable on performance, replacing hereditary lords entirely — service as the only route to standing." },
      { reg: "motivate", key: "m_plunder", detail: "Shang Yang's ranking system: military rank, land and tax relief awarded by a literal count of enemy heads." }
    ]
  },

  chandragupta: {
    creed: "Kautilya's four upayas in the Arthashastra — sāma (conciliation), dāna (gift), bheda (division), daṇḍa (force) — to be tried in that order, and the fourth only when the first three fail.",
    practice: "The most systematic carrots-and-sticks manual ever written, and notable for putting force last: the Arthashastra treats violence as an admission that the cheaper instruments were used badly.",
    tools: [
      { reg: "fear", key: "f_surveillance", detail: "A vast codified espionage apparatus — wandering ascetics, householders and courtesans as standing intelligence assets, including spies set to watch the other spies." },
      { reg: "loyalty", key: "l_spoils", detail: "Graded salaries set out in the Arthashastra down to the rupee, deliberately high for officials with the most opportunity to steal." },
      { reg: "trust", key: "t_publicrule", detail: "Written, published administrative and commercial law — weights, tolls, wages and penalties fixed in advance." },
      { reg: "fear", key: "f_scapegoat", detail: "The text advises removing an unpopular collector and publicly restoring what he extracted — the deniable delegate, prescribed in writing." }
    ]
  },

  taizong: {
    creed: "“With bronze as a mirror one can correct one's appearance; with history as a mirror one can understand the rise and fall of a state; with a man as a mirror one can see whether one is right or wrong.” His explicit doctrine was that fear silences, and a silenced court blinds the emperor.",
    practice: "The index's strongest counter-case to rule-by-fear: a man who took the throne by killing his brothers and then spent twenty-three years engineering an environment in which people would contradict him. Remonstrance was not tolerated, it was somebody's actual job.",
    tools: [
      { reg: "trust", key: "t_justice", detail: "Personally reviewed capital cases and required repeated re-confirmation before an execution could proceed." },
      { reg: "trust", key: "t_audit", detail: "The Chancellery held the formal power to refuse and return his own edicts — audit built into the constitution rather than bolted on." },
      { reg: "loyalty", key: "l_mobility", detail: "Widened the examination route and took ministers from defeated rivals' households, including Wei Zheng, who had urged his brother to kill him." },
      { reg: "motivate", key: "m_ownership", detail: "The equal-field system allotted land to peasant households, tying the tax base and the militia to people with something of their own to defend." },
      { reg: "motivate", key: "m_intent", detail: "The Zhenguan court debates — recorded and later compiled — worked through the reasoning behind policy so officials understood the objective, not just the order." }
    ]
  },

  cesareborgia: {
    creed: "Machiavelli's verdict on him: it is far safer to be feared than loved, if one cannot be both — because love is held by a chain of obligation which men break whenever it suits them, and fear by a dread of punishment that never fails.",
    practice: "The textbook case, literally: Machiavelli watched him work and built The Prince around him. His signature was cruelty 'well used' — concentrated, fast, and then visibly disowned.",
    tools: [
      { reg: "fear", key: "f_scapegoat", detail: "Installed Remirro de Orco to pacify the Romagna by terror, then had him cut in two and left in the piazza with a block and a bloody knife — the people, Machiavelli wrote, were left 'satisfied and stupefied'." },
      { reg: "fear", key: "f_exemplary", detail: "The Senigallia trap: lured his mutinous captains to a friendly conference and strangled them, ending the condottieri problem in one night." },
      { reg: "trust", key: "t_justice", detail: "Followed the terror with a genuine civil court in the Romagna — the population got real justice, which is why parts of it stayed loyal after his fall." }
    ]
  },

  stalin: {
    creed: "“Death solves all problems — no man, no problem.” (apocryphal: from Rybakov's novel, not the record.) What he actually left in writing is more chilling and more useful: cadres decide everything.",
    practice: "The most complete fear apparatus ever assembled, and the clearest demonstration of its central defect. By 1941 he had made honest reporting lethal, and the intelligence warning him of the German invasion reached him marked with his own instruction to disregard it.",
    tools: [
      { reg: "fear", key: "f_unpredict", detail: "Quotas for arrest issued by region — victims selected to fill a number, which made blamelessness irrelevant and self-policing total." },
      { reg: "fear", key: "f_legal", detail: "The Moscow show trials: old Bolsheviks publicly confessing to fantastical crimes, repression laundered as jurisprudence." },
      { reg: "fear", key: "f_purgefavorite", detail: "Shot Yezhov, the man who ran the Terror for him, and then Beria's predecessors in turn — proximity to the throne as the most dangerous position in the state." },
      { reg: "loyalty", key: "l_complicity", detail: "Required politburo members to co-sign execution lists, making every colleague an accomplice who could never afterwards testify against him." },
      { reg: "fear", key: "f_deportation", detail: "Whole nations — Chechens, Crimean Tatars, Volga Germans — deported wholesale as collective punishment." },
      { reg: "loyalty", key: "l_spoils", detail: "Controlled appointments as General Secretary before he controlled anything else; the nomenklatura owed its entire existence to him." }
    ]
  },

  timur: {
    creed: "No doctrine survives in his own voice; the instrument was the doctrine.",
    practice: "Terror used with unusual clarity about its audience. The towers of skulls outside a destroyed city were not for that city — they were addressed to the next one down the road, which frequently opened its gates.",
    tools: [
      { reg: "fear", key: "f_exemplary", detail: "Minarets built of the heads of the massacred at Isfahan and Delhi — atrocity as an advertisement aimed at cities not yet reached." },
      { reg: "loyalty", key: "l_marriage", detail: "Took the title Gurkani, 'son-in-law', by marrying into Genghis's line — borrowed legitimacy through a wife." },
      { reg: "motivate", key: "m_plunder", detail: "An army paid almost entirely in sack; the campaigns had to continue because the payroll depended on them." },
      { reg: "fear", key: "f_deportation", detail: "Deported the artisans of conquered cities to beautify Samarkand — the skills extracted, the cities left as ruins." }
    ]
  },

  genghis: {
    creed: "The Yassa: loyalty absolutely rewarded, betrayal absolutely punished — including the betrayal of someone else's lord, which he executed people for even when it benefited him.",
    practice: "Unusually legible incentives. Submit and you are taxed; resist and you are destroyed; betray your own master and you are killed no matter whose side it helped. That third rule is the interesting one — it made his word a reliable instrument.",
    tools: [
      { reg: "fear", key: "f_exemplary", detail: "The annihilation of resisting cities — Nishapur, Urgench — publicised deliberately, so that submission became the rational choice for everyone downstream." },
      { reg: "loyalty", key: "l_mobility", detail: "Promoted herders, shepherds and defeated enemies to command tumens; Jebe had shot Genghis's horse from under him before being made a general." },
      { reg: "loyalty", key: "l_kinship", detail: "The nökör bond and the decimal units deliberately cut across tribal lines, so the unit replaced the clan as the object of loyalty." },
      { reg: "motivate", key: "m_plunder", detail: "Systematic, rule-bound division of spoil — including shares for the widows and orphans of the dead, which made the contract credible." },
      { reg: "trust", key: "t_publicrule", detail: "The Yassa as portable written law applied to the ruling family too — Mongol princes executed under it." }
    ]
  },

  henry8: {
    creed: "No stated theory; his practice was legible enough without one.",
    practice: "Serial consumption of ministers. Each was given everything, did the work, absorbed the blame, and was destroyed — which kept the court terrified and progressively stripped the crown of competence.",
    tools: [
      { reg: "fear", key: "f_purgefavorite", detail: "Wolsey broken, More beheaded, Cromwell attainted and executed — the three ablest servants of the reign, each destroyed at the height of their usefulness." },
      { reg: "fear", key: "f_legal", detail: "The bill of attainder: condemnation by act of parliament without trial, used to kill people against whom there was no case." },
      { reg: "loyalty", key: "l_spoils", detail: "The dissolution of the monasteries transferred a fifth of England's land to the gentry, buying a whole class into the irreversibility of the break with Rome." },
      { reg: "fear", key: "f_majesty", detail: "A court where physical access to the king's person was the only real currency, and where a misjudged word at the wrong hour was fatal." }
    ]
  },

  suleiman: {
    creed: "The Kanuni tradition: the sultan's word is law, and the sultan's law binds the sultan's servants absolutely.",
    practice: "The kul system made fear and opportunity the same instrument. A slave-born administrator could rise to grand vizier and be strangled on a word — total mobility and total precarity, deliberately combined.",
    tools: [
      { reg: "fear", key: "f_purgefavorite", detail: "Had Ibrahim Pasha — boyhood friend, grand vizier, effectively co-ruler — strangled in the palace after thirteen years of intimacy." },
      { reg: "loyalty", key: "l_mobility", detail: "The devshirme: Christian-born boys raised as the sultan's slaves and promoted to the highest offices, owing everything to him and nothing to any family." },
      { reg: "trust", key: "t_publicrule", detail: "The kanunname codified secular administrative law alongside the sharia, published and intended to outlast him — hence 'Kanuni', the Lawgiver." },
      { reg: "fear", key: "f_majesty", detail: "An imperial audience conducted in absolute silence, with the sultan mute behind a lattice — awe engineered as procedure." }
    ]
  },

  harun: {
    creed: "—",
    practice: "Delegated more completely than almost any ruler in the index, then destroyed the delegates overnight — which is the fear instrument in its purest political form, applied to a family that had governed for him for seventeen years.",
    tools: [
      { reg: "fear", key: "f_purgefavorite", detail: "The Barmakid family — who had effectively run the caliphate — annihilated in a single night in 803, with no warning and no stated charge." },
      { reg: "loyalty", key: "l_honors", detail: "Court patronage of poets and scholars on an enormous scale, making Baghdad the place ambitious talent had to be." },
      { reg: "trust", key: "t_justice", detail: "The legend of the caliph walking Baghdad in disguise to hear his subjects — probably fiction, and a deliberate and effective piece of image-making either way." }
    ]
  },

  shaka: {
    creed: "—",
    practice: "Reorganised an entire society around the regiment, then used escalating terror on his own people until the instrument turned on him: he was killed by his half-brothers.",
    tools: [
      { reg: "fear", key: "f_exemplary", detail: "Mass executions on the parade ground for trivial or invented offences, including during the mourning terror after his mother's death." },
      { reg: "loyalty", key: "l_kinship", detail: "Age-set regiments (amabutho) quartered together and forbidden to marry until released — clan identity dissolved into the unit." },
      { reg: "motivate", key: "m_shame", detail: "Regimental honour and the public disgrace of the coward as the central discipline; warriors who hesitated were killed in front of their peers." }
    ]
  },

  frederick2p: {
    creed: "“The common soldier must fear his officer more than the enemy.” (attributed) — alongside his own self-description as 'the first servant of the state'.",
    practice: "Held both ideas simultaneously without apparent discomfort: brutal mechanical discipline for the ranks, enlightened duty for himself, and a personal reputation for sharing every hardship of the campaign.",
    tools: [
      { reg: "fear", key: "f_discipline", detail: "Corporal punishment as routine drill discipline — the Prussian army's manoeuvre superiority bought with the lash." },
      { reg: "trust", key: "t_hardship", detail: "Slept in the open with his troops, ate the same rations, and was visibly present at the worst moments of the Seven Years' War." },
      { reg: "loyalty", key: "l_honors", detail: "Founded the Pour le Mérite and distributed it by demonstrated valour rather than birth." },
      { reg: "motivate", key: "m_intent", detail: "Wrote and circulated his own military instructions so officers understood the reasoning behind the system they were executing." }
    ]
  },

  louis14: {
    creed: "—",
    practice: "Replaced the fear of violence with the fear of exclusion. A nobility that had raised armies against the crown within living memory was reduced to competing over who handed the king his shirt — and the competition was entirely voluntary.",
    tools: [
      { reg: "fear", key: "f_majesty", detail: "Versailles etiquette so elaborate that every gesture ranked you publicly; the ultimate punishment was not the Bastille but being told 'I do not know him'." },
      { reg: "loyalty", key: "l_honors", detail: "The lever, the ceremonial offices, the right to sit on a stool — a manufactured currency of precedence, infinitely divisible and costing nothing." },
      { reg: "loyalty", key: "l_spoils", detail: "Pensions and offices distributed to nobles whose provincial power had been dismantled, making them financially dependent on attendance." },
      { reg: "motivate", key: "m_emulation", detail: "Deliberately rivalrous ministries — Colbert against Louvois — so that only the king saw the whole board." }
    ]
  },

  washington: {
    creed: "—",
    practice: "Built authority almost entirely out of visible self-restraint. He understood that in a republic the most powerful thing available to him was the demonstration that he would let go, and he performed it twice.",
    tools: [
      { reg: "trust", key: "t_selfbind", detail: "Resigned his commission in 1783 and the presidency in 1797 — each relinquishment permanently enlarging the office he left." },
      { reg: "trust", key: "t_hardship", detail: "Wintered at Valley Forge with the army; at Newburgh disarmed a mutiny of his own officers by fumbling for his spectacles — 'I have grown grey in your service'." },
      { reg: "loyalty", key: "l_kinship", detail: "The wartime military 'family' of aides — Hamilton, Laurens, Tilghman — bound by shared danger and lifelong obligation." },
      { reg: "motivate", key: "m_conviction", detail: "Framed the army's suffering as service to a cause that would be judged by posterity, when there was no money to pay them with." }
    ]
  },

  lincoln: {
    creed: "“With malice toward none, with charity for all” — and, on Grant, 'I can't spare this man; he fights.'",
    practice: "Almost no fear instruments, unusually for a wartime leader, and an extraordinary tolerance for being insulted by subordinates he found useful. He paid in patronage, pardons and attention, and spent his own dignity freely.",
    tools: [
      { reg: "trust", key: "t_clemency", detail: "Pardoned deserters and sleeping sentries at a rate that infuriated his generals; the Second Inaugural extended the same principle to the defeated South." },
      { reg: "loyalty", key: "l_debt", detail: "Kept the cabinet posts for defeated rivals — Seward, Chase, Bates — and absorbed their condescension until it turned into loyalty." },
      { reg: "loyalty", key: "l_spoils", detail: "Worked the patronage system relentlessly to hold a fractious coalition together through two elections and a war." },
      { reg: "motivate", key: "m_glory", detail: "Gettysburg and the Second Inaugural reframed a grinding war as the test of whether self-government could survive at all." },
      { reg: "motivate", key: "m_intent", detail: "To Grant: 'The particulars of your plan I neither know nor seek to know' — intent set, execution released." }
    ]
  },

  lbj: {
    creed: "Politics as the direct application of what a man needs, fears and owes — applied at a range of about six inches.",
    practice: "The most physically coercive persuader in the modern index, using no violence whatsoever. The Treatment was fear and obligation delivered through proximity, information and stamina.",
    tools: [
      { reg: "loyalty", key: "l_attention", detail: "'The Treatment': looming, gripping lapels, alternating flattery and threat, calibrated to a specific senator's specific vulnerability." },
      { reg: "loyalty", key: "l_debt", detail: "Ran the Senate campaign committee's money so that a majority of his colleagues owed him their seats before he ever needed their votes." },
      { reg: "fear", key: "f_surveillance", detail: "Cultivated an unmatched private intelligence on colleagues' debts, affairs and ambitions, and let them know he had it." },
      { reg: "motivate", key: "m_glory", detail: "Sold the Great Society and the Voting Rights Act to wavering legislators as the thing their obituary would lead with." }
    ]
  },

  leekuanyew: {
    creed: "“Between being loved and being feared, I have always believed Machiavelli was right. If nobody is afraid of me, I'm meaningless.”",
    practice: "Unusual in the index for stating the fear doctrine plainly and then applying it through courts and process rather than violence — defamation suits and bankruptcy rather than prisons, plus enough delivered prosperity that the fear rarely had to be used.",
    tools: [
      { reg: "fear", key: "f_legal", detail: "Defamation and bankruptcy proceedings against opposition politicians — repression conducted entirely within a functioning legal system." },
      { reg: "loyalty", key: "l_mobility", detail: "A mandarinate recruited from the top of each cohort and paid private-sector salaries, making public service the elite career." },
      { reg: "motivate", key: "m_ownership", detail: "Mass public housing sold rather than rented — a population of owners with a direct stake in the regime's stability." },
      { reg: "trust", key: "t_publicrule", detail: "Predictable, enforced, genuinely non-corrupt administration as the regime's core promise to investors and citizens alike." },
      { reg: "trust", key: "t_selfbind", detail: "Tested and installed a successor generation and actually handed over in 1990 — the rarest move available to a founder." }
    ]
  },

  elizabeth1: {
    creed: "“Video et taceo” — I see and say nothing.",
    practice: "Ruled a poor country with a small army by managing expectation rather than compelling obedience: ambiguity, spectacle, and a spy service that made the state seem omniscient when it was mostly improvising.",
    tools: [
      { reg: "fear", key: "f_surveillance", detail: "Walsingham's intelligence network, whose reputation for knowing everything did far more work than its actual coverage." },
      { reg: "loyalty", key: "l_honors", detail: "Withheld titles and honours deliberately — scarcity kept the currency valuable across a forty-five-year reign." },
      { reg: "fear", key: "f_majesty", detail: "The Accession Day tilts and the summer progresses: the Gloriana cult as both affection and intimidation, staged annually." },
      { reg: "loyalty", key: "l_attention", detail: "Nicknames, personal letters and calculated flirtation binding courtiers to her person rather than her office." }
    ]
  },

  augustus: {
    creed: "The Res Gestae — his own account, carved across the empire, of a man who was given everything because he deserved it and took nothing he was not offered.",
    practice: "The most successful piece of political framing ever executed: absolute power presented as restored liberty. He spent the proscriptions' violence early, then never needed it again.",
    tools: [
      { reg: "fear", key: "f_exemplary", detail: "The proscriptions of 43 BC — hundreds of senators and equestrians killed and their property seized — done young, done once, and thereafter never repeated." },
      { reg: "motivate", key: "m_plunder", detail: "Land and cash settlement for veterans, formalised into a military treasury so soldiers' loyalty ran to the state's pension rather than a general's promise." },
      { reg: "loyalty", key: "l_honors", detail: "Invented an entire ladder of titles and priesthoods, and took 'princeps' — first citizen — rather than any title that sounded like a crown." },
      { reg: "trust", key: "t_publicrule", detail: "Restored the forms of the republic meticulously: elections held, senate consulted, offices filled, with the substance quietly relocated." }
    ]
  },

  jcaesar: {
    creed: "Clementia — publicised, deliberate, and understood by him as an instrument rather than a virtue.",
    practice: "The clearest demonstration of clemency's payoff and its price: it gave him Italy almost without a fight, and it gave his assassins their opportunity.",
    tools: [
      { reg: "trust", key: "t_clemency", detail: "Pardoned Pompeians repeatedly and restored them to office — Brutus and Cassius among them." },
      { reg: "loyalty", key: "l_attention", detail: "Addressed his legionaries as 'comrades', knew centurions by name, and doubled their pay." },
      { reg: "motivate", key: "m_glory", detail: "Wrote and circulated his own Commentaries in the third person, making his soldiers characters in a narrative the whole of Rome was reading." },
      { reg: "fear", key: "f_exemplary", detail: "Against non-citizens the restraint vanished: the mass enslavement of Gaul and the mutilation of the Uxellodunum garrison." }
    ]
  },

  mao: {
    creed: "“Political power grows out of the barrel of a gun” — and 'a revolution is not a dinner party'.",
    practice: "Uniquely, turned the fear apparatus against his own party rather than only the population, and outsourced the violence to volunteers — which made it enormously powerful and completely uncontrollable.",
    tools: [
      { reg: "fear", key: "f_denunciation", detail: "Struggle sessions and the Red Guards: repression devolved to millions of unpaid enthusiasts with personal scores to settle." },
      { reg: "fear", key: "f_unpredict", detail: "The Hundred Flowers campaign invited criticism and then used the responses as the arrest list." },
      { reg: "motivate", key: "m_conviction", detail: "The Little Red Book and a genuine mass faith that made extraordinary sacrifice feel rational to those making it." },
      { reg: "fear", key: "f_purgefavorite", detail: "Liu Shaoqi destroyed, Lin Biao — his own designated heir, written into the party constitution — dead fleeing the country." }
    ]
  },

  hitler: {
    creed: "Explicit in Mein Kampf on the mass rally, repetition and the emotional over the rational as the instruments of mass persuasion.",
    practice: "Built the most elaborate awe-machinery of the modern era and paired it with a deliberately chaotic administration in which subordinates competed to anticipate him — fear and ambition harnessed to the same shaft.",
    tools: [
      { reg: "fear", key: "f_majesty", detail: "Nuremberg: Speer's cathedral of light, the choreography of hundreds of thousands, designed as overwhelming spectacle." },
      { reg: "motivate", key: "m_emulation", detail: "Overlapping party, state and SS jurisdictions with no clear boundaries — 'working towards the Führer' as a career strategy." },
      { reg: "fear", key: "f_exemplary", detail: "The Night of the Long Knives: killing the SA leadership, including old comrades, to demonstrate that nothing was owed to anyone." },
      { reg: "fear", key: "f_collective", detail: "Sippenhaft — family liability — applied to the relatives of the July 1944 plotters." }
    ]
  },

  ieyasu: {
    creed: "“The cuckoo will sing if you wait.”",
    practice: "Designed a machine that made rebellion arithmetically impossible rather than frightening, and it worked for two and a half centuries after he died.",
    tools: [
      { reg: "fear", key: "f_hostage", detail: "Sankin-kōtai: every daimyo's wife and heir resident in Edo permanently, as honoured hostages." },
      { reg: "loyalty", key: "l_spoils", detail: "Domains graded and geographically interleaved by loyalty history, so the unreliable were surrounded by the trusted." },
      { reg: "trust", key: "t_publicrule", detail: "The Buke Shohatto — written rules for the military houses, published and enforced uniformly." },
      { reg: "fear", key: "f_collective", detail: "Alternate attendance drained domain treasuries by design, making the cost of rebellion unaffordable before it was frightening." }
    ]
  },

  akbar: {
    creed: "Sulh-i-kul — universal peace — as an explicit governing doctrine rather than a sentiment.",
    practice: "Bought a subcontinent's elite into the empire with rank, marriage and religious tolerance, converting potential enemies into stakeholders with numerical positions in a single hierarchy.",
    tools: [
      { reg: "loyalty", key: "l_marriage", detail: "Married Rajput princesses whose fathers and brothers then held high mansabs — the alliance made literal and hereditary." },
      { reg: "loyalty", key: "l_honors", detail: "The mansabdari system: every noble held a public numerical rank determining pay and obligation, making status legible and grantable." },
      { reg: "trust", key: "t_clemency", detail: "Abolished the jizya and the pilgrim tax, removing the standing grievance of the majority of his subjects." },
      { reg: "loyalty", key: "l_mobility", detail: "Rotated and transferred officials deliberately so that no mansabdar built a regional base of his own." }
    ]
  },

  putin: {
    creed: "The case officer's doctrine, never stated publicly: everyone has an interest and a vulnerability, and the job is to find both.",
    practice: "Fear applied selectively and demonstratively to elites rather than broadly to the population — one oligarch in a glass cage taught the rest the rule without needing a terror.",
    tools: [
      { reg: "fear", key: "f_legal", detail: "Khodorkovsky's prosecution and imprisonment: the richest man in Russia convicted in open court as a demonstration to every other oligarch." },
      { reg: "loyalty", key: "l_complicity", detail: "Wealth held on licence and dependent on continued loyalty — everyone's fortune is documentable and therefore revocable." },
      { reg: "fear", key: "f_unpredict", detail: "Defenestrations and poisonings that are never quite attributable, producing fear without the state ever having to claim it." },
      { reg: "motivate", key: "m_glory", detail: "Restored-great-power narrative offering ordinary Russians a place in a story of national recovery after the humiliation of the 1990s." }
    ]
  },

  mandela: {
    creed: "“If you talk to a man in a language he understands, that goes to his head. If you talk to him in his language, that goes to his heart.”",
    practice: "Almost the entire toolkit is in the trust register — remarkable for a leader who had every warrant for retribution and a constituency expecting it.",
    tools: [
      { reg: "trust", key: "t_clemency", detail: "The Truth and Reconciliation Commission traded prosecution for public testimony — amnesty as a deliberate instrument of stability." },
      { reg: "trust", key: "t_selfbind", detail: "Served a single term and left, in a continent where liberators routinely stayed." },
      { reg: "loyalty", key: "l_attention", detail: "Learned Afrikaans in prison, studied rugby, and met his jailers and enemies individually and by name." },
      { reg: "motivate", key: "m_glory", detail: "The Springbok jersey at the 1995 final — a single gesture that made a shared national story available to people who had none." }
    ]
  },

  hueylong: {
    creed: "“Every Man a King.”",
    practice: "Ran the fullest carrot-and-stick machine in American history simultaneously: free textbooks and paved roads in one hand, the tax rolls and the state police in the other.",
    tools: [
      { reg: "loyalty", key: "l_spoils", detail: "Every job in Louisiana held at his discretion, with state employees assessed a percentage of salary for the machine." },
      { reg: "fear", key: "f_legal", detail: "Used tax investigations, redistricting and control of the courts to destroy opponents with entirely legal instruments." },
      { reg: "motivate", key: "m_ownership", detail: "Share Our Wealth promised a homestead, a car and a radio to every family — a concrete stake, promised in objects." },
      { reg: "trust", key: "t_justice", detail: "Delivered visibly and fast — roads, bridges, free textbooks, night schools — to people the state had never delivered anything to before." }
    ]
  },
  rjdaley: {
    creed: "“Good government is good politics.”",
    practice: "Never separated the two: the precinct captain who delivered the vote was on the city payroll, and the city payroll collected the garbage. Loyalty was bought with jobs and kept with attention; fear was administered by inspectors, and once, in 1968, by the police.",
    tools: [
      { reg: "loyalty", key: "l_spoils", detail: "Some 35,000 city and county patronage jobs, every holder expected to deliver a precinct — and to lose the job if it went wrong." },
      { reg: "loyalty", key: "l_attention", detail: "Went to the wakes, knew the committeemen's families, returned the calls — the boss as neighbour, never as celebrity." },
      { reg: "fear", key: "f_legal", detail: "Building inspectors, zoning boards and licences as the quiet penalty for a disloyal ward, business or alderman." },
      { reg: "fear", key: "f_exemplary", detail: "After the April 1968 riots he publicly ordered police to 'shoot to kill any arsonist' and 'shoot to maim or cripple' looters; four months later his police beat protesters at the Democratic convention." },
      { reg: "trust", key: "t_justice", detail: "Delivered the services voters could see — snow cleared, garbage collected, O'Hare, the expressways — so that 'the city that works' was itself the argument for the machine." }
    ]
  },

  chiang: {
    creed: "The New Life Movement's Confucian moral discipline, imposed as national policy.",
    practice: "Reached for fear and factional balance where trust would have served better, and the instruments consumed the competence he needed to survive the civil war.",
    tools: [
      { reg: "fear", key: "f_exemplary", detail: "The 1927 Shanghai purge: thousands of Communists and unionists killed in days, ending the united front in a single stroke." },
      { reg: "fear", key: "f_surveillance", detail: "Dai Li's Juntong secret police, feared throughout the Nationalist state and inside its own officer corps." },
      { reg: "motivate", key: "m_emulation", detail: "Deliberately balanced the CC Clique, the Whampoa network and the Political Study group, arbitrating between them personally." },
      { reg: "loyalty", key: "l_kinship", detail: "The Whampoa Academy cadet bond — 'the Generalissimo's students' — as his only genuinely reliable constituency." }
    ]
  },

  thatcher: {
    creed: "“To me, consensus seems to be the process of abandoning all beliefs, principles, values and policies. So it is something in which no one believes and to which no one objects.”",
    practice: "Used almost no patronage and enormous quantities of argument and stamina — she out-prepared and out-lasted people rather than buying or frightening them, until the cabinet she had exhausted removed her.",
    tools: [
      { reg: "motivate", key: "m_conviction", detail: "Made ideological clarity the organising instrument — 'the lady's not for turning' as a standing signal that pressure would not work." },
      { reg: "fear", key: "f_purgefavorite", detail: "Purged the 'wets' from cabinet and publicly humiliated ministers in front of colleagues, making dissent professionally costly." },
      { reg: "motivate", key: "m_ownership", detail: "Right to Buy sold council houses to their tenants, converting a million-plus voters into property owners." },
      { reg: "trust", key: "t_hardship", detail: "Worked on four hours' sleep and mastered the brief better than the minister responsible — authority earned by visible preparation." }
    ]
  },

  fdr: {
    creed: "“Take a method and try it. If it fails, admit it frankly and try another.”",
    practice: "Manufactured rivalry rather than fear. Subordinates competed for access and information, and only he ever saw the whole board — control achieved without a single threat.",
    tools: [
      { reg: "motivate", key: "m_emulation", detail: "Assigned the same task to competing agencies and aides, so that information flowed upward and no deputy became indispensable." },
      { reg: "loyalty", key: "l_attention", detail: "The fireside chats and a legendary personal warmth that left visitors convinced of agreement he had never given." },
      { reg: "motivate", key: "m_ownership", detail: "Social Security, the FHA mortgage and rural electrification gave tens of millions a personal stake in the new order." },
      { reg: "loyalty", key: "l_spoils", detail: "Relief programmes administered with an unsentimental eye to the electoral map." }
    ]
  },

  churchill: {
    creed: "“I have nothing to offer but blood, toil, tears and sweat.”",
    practice: "Governed almost entirely through language at the moment when he had almost nothing else — the clearest demonstration in the index that the glory register is a material instrument, not decoration.",
    tools: [
      { reg: "motivate", key: "m_glory", detail: "Speeches that reframed imminent defeat as the most memorable hour in the nation's history, delivered when the rational case was surrender." },
      { reg: "trust", key: "t_hardship", detail: "Walked bombed streets in the East End; stayed in London through the Blitz when he could have governed from safety." },
      { reg: "loyalty", key: "l_attention", detail: "The 'Action This Day' minutes — relentless, personal, and evidence to every recipient that the centre was awake." },
      { reg: "motivate", key: "m_intent", detail: "Insisted on written argument and gave commanders his strategic reasoning, even while interfering with their execution of it." }
    ]
  },

  william1: {
    creed: "—",
    practice: "Conquest secured by terror and then made permanent by information — the rare pairing of maximum violence with meticulous administrative record.",
    tools: [
      { reg: "fear", key: "f_exemplary", detail: "The Harrying of the North: systematic destruction of crops, stock and villages, depopulating the region for a generation." },
      { reg: "trust", key: "t_audit", detail: "The Domesday Book: every holding, plough and pig counted, making delegated lordship verifiable." },
      { reg: "loyalty", key: "l_spoils", detail: "Redistributed nearly all English land to followers — deliberately scattered, so no baron could raise a single region." },
      { reg: "fear", key: "f_majesty", detail: "Stone castles planted in every subdued town as permanent architectural statements of who had won." }
    ]
  },

  peter1: {
    creed: "Service to the state as an obligation binding on everyone including the tsar — he worked as a shipwright under an assumed name to make the point.",
    practice: "Coerced an entire nobility into becoming a bureaucracy, with the lash and the ladder applied simultaneously.",
    tools: [
      { reg: "loyalty", key: "l_mobility", detail: "The Table of Ranks made nobility earnable by service and forfeitable by its absence — status detached from birth by statute." },
      { reg: "fear", key: "f_exemplary", detail: "Personally participated in the interrogation and execution of the Streltsy, and had his own son tortured to death." },
      { reg: "trust", key: "t_hardship", detail: "Worked with his own hands in the shipyards of Zaandam and Deptford, and served in his own army from the lowest rank upward." },
      { reg: "fear", key: "f_majesty", detail: "The shaved beard and Western dress imposed personally on boyars at court — humiliation as a tool of cultural compliance." }
    ]
  },

  ashoka: {
    creed: "The dhamma edicts — an explicit renunciation of conquest as an instrument, published on rock across the empire.",
    practice: "The only leader in the index who publicly documented his own remorse and then rebuilt his entire toolkit around persuasion, while keeping the army he no longer used.",
    tools: [
      { reg: "trust", key: "t_publicrule", detail: "Edicts carved on pillars and rock faces in local languages — the ruler's promises made permanent and publicly checkable." },
      { reg: "motivate", key: "m_conviction", detail: "Dhamma as a shared ethical programme binding a religiously diverse empire without requiring conversion." },
      { reg: "trust", key: "t_audit", detail: "Dhamma-mahamatras: a dedicated cadre inspecting officials' treatment of subjects and reporting back." },
      { reg: "trust", key: "t_justice", detail: "Ordered that petitioners be admitted to him at any hour, 'whether I am eating or in the harem'." }
    ]
  },

  bismarck: {
    creed: "“Politics is the art of the possible” — and his own description of himself as a man who could only wait for God's footsteps and then leap to catch His coat-tails.",
    practice: "Bought off his most dangerous opponents by giving them what they wanted before they could organise around wanting it — the most cold-blooded use of the carrot in the index.",
    tools: [
      { reg: "motivate", key: "m_ownership", detail: "Invented state health, accident and old-age insurance in the 1880s explicitly to drain support from the socialists." },
      { reg: "fear", key: "f_legal", detail: "The Anti-Socialist Laws banning party organisation and press, running simultaneously with the welfare programme." },
      { reg: "loyalty", key: "l_debt", detail: "Managed Wilhelm I through decades of manufactured resignation threats — obligation weaponised against his own sovereign." },
      { reg: "motivate", key: "m_glory", detail: "Three short victorious wars in seven years supplied a unifying national story that no domestic opponent could argue with." }
    ]
  },

  robertbruce: {
    creed: "—",
    practice: "Won by refusing the instrument his enemies expected. Having murdered his way to a crown he could not hold, he rebuilt legitimacy by absorbing rather than destroying the men who had fought him.",
    tools: [
      { reg: "trust", key: "t_clemency", detail: "Systematically restored former enemies to their lands once they submitted, buying a fractured nobility into a single cause." },
      { reg: "fear", key: "f_exemplary", detail: "Slighted captured castles rather than garrisoning them — denying strongholds to the English and demonstrating permanence." },
      { reg: "trust", key: "t_publicrule", detail: "The Declaration of Arbroath framed his own kingship as revocable by the community of the realm — self-binding in writing." },
      { reg: "motivate", key: "m_intent", detail: "Released Douglas and Randolph to run independent raiding campaigns deep into England for years at a time." }
    ]
  },

  kissinger: {
    creed: "“Power is the ultimate aphrodisiac” — and a scholar's conviction that stability, not justice, is what foreign policy can actually deliver.",
    practice: "The purest courtier's toolkit in the index: flattery upward, information hoarded sideways, and the channel never delegated.",
    tools: [
      { reg: "loyalty", key: "l_attention", detail: "Calibrated flattery of his principal, and a celebrity charm deployed on journalists that made him personally unreportable-against for years." },
      { reg: "fear", key: "f_surveillance", detail: "Wiretapped his own NSC staff and journalists to trace leaks — fear applied inside his own office." },
      { reg: "motivate", key: "m_emulation", detail: "Controlled who saw which cable, making access to information the currency subordinates and rivals competed for." }
    ]
  },

  castro: {
    creed: "“History will absolve me.”",
    practice: "Endurance itself as the instrument — outlasting eleven American presidents became the regime's central claim, and the speeches were the delivery mechanism.",
    tools: [
      { reg: "motivate", key: "m_glory", detail: "Four- and five-hour speeches casting a small island's survival as a world-historical drama with the audience inside it." },
      { reg: "motivate", key: "m_conviction", detail: "Literacy campaigns, rural medicine and international medical missions as tangible proof the creed delivered." },
      { reg: "fear", key: "f_denunciation", detail: "Committees for the Defence of the Revolution on every block — neighbours as the primary surveillance layer." },
      { reg: "loyalty", key: "l_kinship", detail: "The Sierra Maestra veterans as a permanent inner caste, with his brother holding the army." }
    ]
  },

  saladin: {
    creed: "—",
    practice: "Built a reputation as an instrument. Generosity and restraint were practised so consistently that they became strategically useful: cities surrendered to him expecting to be spared, and were.",
    tools: [
      { reg: "trust", key: "t_clemency", detail: "Jerusalem in 1187 taken with ransoms and safe conduct rather than massacre — in deliberate contrast to 1099, and known to every subsequent defender." },
      { reg: "loyalty", key: "l_spoils", detail: "Gave away so much that he died without enough to pay for his own funeral — generosity as a systematic and publicised policy." },
      { reg: "loyalty", key: "l_kinship", detail: "Brothers and sons holding Egypt, Damascus and Aleppo as linked appanages." },
      { reg: "motivate", key: "m_conviction", detail: "Jihad preached and organised as a unifying cause across rival Muslim polities that had no other reason to cooperate." }
    ]
  },

  deng: {
    creed: "“It doesn't matter whether the cat is black or white, so long as it catches mice.”",
    practice: "Motivated a fifth of humanity with permission rather than pressure — then drew one hard line and enforced it absolutely.",
    tools: [
      { reg: "motivate", key: "m_ownership", detail: "The household responsibility system let peasants keep and sell surplus — output rose without anyone being ordered to work harder." },
      { reg: "motivate", key: "m_emulation", detail: "Special Economic Zones as competing experiments, with successful models copied and failures quietly abandoned." },
      { reg: "fear", key: "f_exemplary", detail: "Tiananmen in 1989: a single demonstration that economic liberty did not extend to political challenge." },
      { reg: "trust", key: "t_selfbind", detail: "Restored term norms and collective leadership, and gave up his own formal offices while retaining authority." }
    ]
  },

  ataturk: {
    creed: "Six Arrows — republicanism, nationalism, populism, statism, secularism, revolutionism — published as doctrine.",
    practice: "Changed what people believed rather than only what they did, using law, alphabet and dress as instruments of identity rather than of punishment.",
    tools: [
      { reg: "motivate", key: "m_conviction", detail: "Nationalism supplied as a replacement identity for a population that had just lost an empire and a caliphate." },
      { reg: "fear", key: "f_legal", detail: "Independence Tribunals and the Hat Law: dress and script enforced with criminal penalties." },
      { reg: "trust", key: "t_hardship", detail: "Gallipoli and the War of Independence gave him a battlefield reputation no domestic opponent could match." },
      { reg: "loyalty", key: "l_mobility", detail: "A new republican elite of teachers, officers and officials whose entire careers were creations of the revolution." }
    ]
  },

  cixi: {
    creed: "—",
    practice: "Held power for half a century with no formal right to it, entirely through court instruments — access, faction and the careful management of who saw whom.",
    tools: [
      { reg: "fear", key: "f_majesty", detail: "Ruled literally from behind a screen, unseen — invisibility as a source of authority rather than a limit on it." },
      { reg: "motivate", key: "m_emulation", detail: "Balanced Han provincial strongmen like Li Hongzhang against Manchu princes, arbitrating between them personally." },
      { reg: "fear", key: "f_purgefavorite", detail: "Ended the Hundred Days' Reform by placing the Guangxu Emperor under palace arrest and executing its leading advocates." }
    ]
  },

  justinian: {
    creed: "—",
    practice: "Codified law as the empire's most durable export while governing a court in which no servant was ever allowed to feel secure.",
    tools: [
      { reg: "trust", key: "t_publicrule", detail: "The Corpus Juris Civilis — Roman law consolidated, published, and still the foundation of European civil law." },
      { reg: "fear", key: "f_exemplary", detail: "The Nika riots ended by trapping and killing tens of thousands of spectators in the Hippodrome." },
      { reg: "fear", key: "f_purgefavorite", detail: "Recalled, disgraced and stripped Belisarius — the general who had won him an empire — more than once." },
      { reg: "fear", key: "f_majesty", detail: "A court ceremonial of prostration and mechanical theatre designed to make the emperor seem more than human." }
    ]
  },

  mehmed2: {
    creed: "—",
    practice: "Fear and opportunity issued from the same office. The kul system offered a slave boy the empire and offered the grand vizier the bowstring.",
    tools: [
      { reg: "fear", key: "f_purgefavorite", detail: "Executed Çandarlı Halil Pasha, the grand vizier, within weeks of taking Constantinople." },
      { reg: "loyalty", key: "l_mobility", detail: "The devshirme levy raised Christian-born boys to the highest offices of state as the sultan's personal property." },
      { reg: "trust", key: "t_clemency", detail: "Guaranteed the Orthodox patriarchate and Jewish and Armenian communities their own law and worship — the millet settlement." },
      { reg: "fear", key: "f_exemplary", detail: "The fratricide law formalised the killing of a new sultan's brothers as legal state policy, to prevent civil war." }
    ]
  },

  marcusaurelius: {
    creed: "The Meditations — an emperor's private argument with himself about the corrupting effect of holding power.",
    practice: "The inverse of every other entry here: the instrument he worked hardest on was himself. Almost nothing in the fear register, and a reign spent trying not to be changed by what he could do.",
    tools: [
      { reg: "trust", key: "t_hardship", detail: "Spent most of his reign in camp on the Danube frontier rather than in Rome; sold imperial treasures rather than raise taxes for the war." },
      { reg: "trust", key: "t_clemency", detail: "Pardoned the family and supporters of Avidius Cassius, who had declared himself emperor against him." },
      { reg: "trust", key: "t_justice", detail: "Extended the hours of the courts and personally heard appeals, including from slaves against masters." }
    ]
  }
};
