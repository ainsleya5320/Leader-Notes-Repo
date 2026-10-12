// ============================================================
// COMMAND — John Keegan, The Mask of Command (1987)
// ============================================================
// Keegan's starting point: a commander who sends other men to risk
// their lives can show himself to them only through a mask — a face
// made in the form that his own time and place expect of a leader.
// What he shows, what he hides and what he invents is the subject.
// He reads the mask through four commanders, each a different answer:
//   HEROIC        Alexander — at the head of every decisive charge,
//                 wrapped in theatre, armour and gods
//   ANTI-HEROIC   Wellington — present at every crisis and under fire,
//                 but there to see and decide; contemptuous of display
//   UNHEROIC      Grant — the plain professional of a citizen army,
//                 commanding from behind the line by staff and telegraph
//   FALSE HEROIC  Hitler — a real front-fighter's past, worn as a mask
//                 by a man who commanded from bunkers
// The book opens with "Pre-Heroic Leadership" and closes with
// "Post-Heroic: Command in the Nuclear World": leaders who hold nuclear
// weapons must give up the heroic ethic altogether. His model is
// Kennedy in the Cuban missile crisis, and his last word is that
// mankind, if it is to survive, must choose its leaders by the test of
// their intellectuality.
//
// The conclusion sets out five imperatives every commander must meet:
//   KINSHIP       leave the troops in no doubt that he is one of them
//                 and cares what happens to them
//   PRESCRIPTION  speak to them — addresses, orders of the day, clear
//                 orders — in a personal, authoritative voice
//   SANCTION      a visible, cogent theory of reward and punishment
//   ACTION        know how and when to fight — strategy, intelligence,
//                 the choice of when and where to give battle
//   EXAMPLE       share the risk: those who impose risk must be seen
//                 to share it
// and asks where the commander should stand: in front always, sometimes
// or never? Reviewers summarise his answers as Alexander always,
// Wellington often, Grant no more than he had to, Hitler never. As
// weapons reached further and the telegraph, telephone and radio let a
// general command from afar, the answer moved from front to rear.
//
// Why it is in the atlas: the lens works from conduct — where a ruler
// stood, what he said to soldiers, whom he rewarded and punished — not
// from speeches to voters or psychological instruments, so it can read
// ancient and medieval rulers that the psychology lenses cannot.
//
// Per-leader fields:
//   mask      heroic | antiheroic | unheroic | falseheroic — the closest
//             fit; most leaders are not pure types, and the note says
//             what does not fit
//   front     always | sometimes | never — where he habitually stood
//             while commanding (see COMMAND_FRONT)
//   imp       0–100 for each imperative: how fully he met it.
//             50 = adequate, not notable either way; 90+ = exemplary;
//             under 30 = a real failure
//   keegan    true only for leaders Keegan analyses himself
//   wounded   wounded in battle at least once
//   battle    one battle or campaign that shows the mask
//   instance  one concrete scene that shows the reading
//   note      the reading, and where it is debatable
//
// Keegan's four cases are Alexander, Wellington, Grant and Hitler; only
// Alexander and Hitler are in the atlas, and only they carry keegan: true.
// Every other reading, and every number including theirs, is my estimate
// in his framework, not his. Civilian war leaders are coded only where
// the lens says something about their relationship with armies (Lincoln,
// Churchill, Ho Chi Minh); leaders whose record is too thin, or for whom
// the lens has nothing to read, are listed in COMMAND_NA.
// ============================================================

window.COMMAND_MASKS = [
  { key: "heroic", name: "Heroic", exemplar: "Alexander", color: "var(--reg-fear)",
    def: "The commander as the army's champion: he leads from the front, fights in person, takes the risks of the front rank and more, and wraps it in theatre — armour, speeches, sacrifices, gods and omens — that marks him out as more than a man. The troops follow because they see him go first.",
    risk: "The commander's body is the army's single point of failure, and the habit of danger crowds out the work of seeing the whole field — and of leaving anyone able to take over when he falls." },
  { key: "antiheroic", name: "Anti-heroic", exemplar: "Wellington", color: "var(--reg-trust)",
    def: "The commander present at every crisis, within range and exposed, but there to see and decide rather than to fight. He scorns display and self-dramatisation, keeps his distance from his men, and runs the battle through his own eye and close supervision, backed by hard discipline.",
    risk: "Everything runs through one man: subordinates learn obedience but not initiative, and an army that respects its commander without loving him can come apart when he is not there to watch." },
  { key: "unheroic", name: "Unheroic", exemplar: "Grant", color: "var(--reg-motivate)",
    def: "The commander as plain professional and fellow citizen: he commands from behind the line through staff, written orders and the telegraph, goes forward to see rather than to be seen, wears no costume, and leads by clear instruction and the consent of the men he leads.",
    risk: "Distance. A commander who no longer shares the danger can come to treat casualties as a cost to be paid, and the troops can come to see him that way — the 'butcher' charge that followed Grant after Cold Harbor." },
  { key: "falseheroic", name: "False heroic", exemplar: "Hitler", color: "var(--reg-loyalty)",
    def: "The commander who wears the hero's mask — front-line credentials, the soldier's uniform, the language of sacrifice — while directing from a headquarters far from the fighting, and who demands of his troops a heroism he no longer shares.",
    risk: "The mask cuts him off from what his armies can actually do: stand-fast orders from hundreds of miles away, generals sacked for telling the truth, and theatre in place of information." }
];

window.COMMAND_IMPERATIVES = [
  { key: "kinship", name: "Kinship",
    def: "The bond that makes the troops believe the commander is one of them: that he knows them, cares what becomes of them and will not spend their lives cheaply. Shared hardship, names remembered, the wounded visited, pay and food secured.",
    question: "Did his soldiers believe he was one of them, and that he cared whether they lived?" },
  { key: "prescription", name: "Prescription",
    def: "Speaking to the army: telling it what he wants and why, in his own authoritative voice — addresses before battle, orders of the day, proclamations, and written orders clear enough to act on.",
    question: "Could he tell the army, in words it believed, what it was to do and why?" },
  { key: "sanction", name: "Sanction",
    def: "A visible and consistent theory of reward and punishment, so that fighting well pays and failing to fight costs: promotion, plunder, land, decorations and pensions on one side; disgrace, flogging and execution on the other.",
    question: "Did his men know what fighting well would earn them, and what failing would cost?" },
  { key: "action", name: "Action",
    def: "Knowing how and when to fight: strategy, intelligence and the judgement of the moment — when to give battle and when to refuse it, where to strike. The troops must see that the man who sends them in knows his business.",
    question: "Did he choose the right fights, and show his men that he knew how to win them?" },
  { key: "example", name: "Example",
    def: "Sharing the risk he imposes, and being seen to share it. The further a commander stands from the fire, the harder this imperative is to meet — which is why Keegan's story runs from Alexander's wounds to Hitler's bunkers.",
    question: "Did his men see him take the risks he asked of them?" }
];

window.COMMAND_FRONT = {
  always: { name: "Always in front", def: "Fought in, or led from, the front of the decisive attack as a habit; the commander's own body was part of the battle. Keegan's Alexander." },
  sometimes: { name: "Sometimes in front", def: "On the field and within range, directing from where he could see; went forward into the fighting at a crisis or where the men needed to see him. Keegan's Wellington." },
  never: { name: "Never in front", def: "Commanded from headquarters or the capital, by staff, telegraph, telephone or radio; the troops saw him, if at all, on visits. Keegan's Hitler, and by necessity every leader of his nuclear age." }
};

window.LEADER_COMMAND = {

  ramesses2: {
    mask: "heroic", front: "always",
    imp: { kinship: 35, prescription: 70, sanction: 50, action: 40, example: 85 },
    keegan: false, wounded: false,
    battle: "Kadesh, 1274 BC",
    instance: "When Hittite chariots broke through the Re division and into his camp, by his own account he mounted his chariot and charged them with only his household troops around him, until the Ne'arin relief column arrived and turned the fight. Afterwards he had the charge, and his rebuke of the soldiers who had run, carved on temples from Abu Simbel to the Ramesseum.",
    note: "The heroic mask in its pharaonic form, and the only witness is the pharaoh: the Poem and the reliefs are his own account. He walked into the ambush on the word of two planted Bedouin, which is why action scores low, and the 'victory' was a draw settled fifteen years later by treaty. How much of the charge happened as carved is unknowable; read it as the heroic mask advertised." },

  cyrus: {
    mask: "heroic", front: "sometimes",
    imp: { kinship: 75, prescription: 75, sanction: 70, action: 85, example: 70 },
    keegan: false, wounded: true,
    battle: "Sardis, c. 547 BC",
    instance: "Before Sardis, Herodotus says, he put the baggage camels in front of his line on Harpagus's advice, because horses cannot bear their smell, and Croesus's cavalry broke. At the citadel he offered a reward to the first man over the wall; a Mardian soldier who had watched a Lydian climb down the cliff for a dropped helmet led the way up.",
    note: "Coded heroic because he led his campaigns in person and, in Herodotus's account, died fighting the Massagetae; Ctesias has him die of a battle wound, Xenophon in his bed. Every scene comes from Greeks writing generations later, and Xenophon's Education of Cyrus is a novel about how a commander should treat his men — the first essay on Keegan's imperatives, not evidence for them. What is certain is the result: armies of conquered Medes and Lydians that kept fighting for him." },

  darius1: {
    mask: "heroic", front: "sometimes",
    imp: { kinship: 40, prescription: 70, sanction: 75, action: 60, example: 50 },
    keegan: false, wounded: false,
    battle: "The Scythian campaign, 513 BC",
    instance: "In Scythia, after weeks chasing an enemy that would not stand, he slipped away by night. He left the sick and the weakest men in camp with the donkeys tethered, so that their braying would keep the Scythians thinking the army was still there, and told the men left behind that he was going out to attack.",
    note: "The Behistun inscription has him fight nineteen battles and capture nine rebel kings in his first year, some in person, and its text was copied and sent round the empire — prescription on a monumental scale. After the Scythian failure he made war through generals; Marathon was Datis and Artaphernes's battle. Coded heroic because a Persian king's place was in the centre of the battle line, but his real mask was majesty, which none of Keegan's four quite names." },

  alexander: {
    mask: "heroic", front: "always",
    imp: { kinship: 90, prescription: 85, sanction: 75, action: 95, example: 100 },
    keegan: true, wounded: true,
    battle: "Gaugamela, 331 BC",
    instance: "At the Malli town in 325 BC he went up the scaling ladder first and, when it broke behind him, jumped down inside the wall with three companions. An arrow went through his chest; the soldiers who broke in after him, believing him dead, spared no one in the town.",
    note: "Keegan's own model of the heroic: Alexander led the Companion cavalry into the decisive gap himself, was wounded, by one count, eight times, and staged his kingship — armour, sacrifices, speeches — for an army that expected its king in the front rank. The limits of kinship show at the Hyphasis, where the army refused to march further, and at Opis, where it mutinied. The cost of example is the Malli wound, which nearly ended the campaign, and an empire left to 'the strongest'." },

  hannibal: {
    mask: "heroic", front: "sometimes",
    imp: { kinship: 95, prescription: 80, sanction: 70, action: 95, example: 85 },
    keegan: false, wounded: true,
    battle: "Cannae, 216 BC",
    instance: "At Cannae he placed himself, with his brother Mago, in the centre among the Gauls and Spaniards — the part of the line he had designed to give way — and kept it bending without breaking until the African infantry closed on the Roman flanks.",
    note: "The heroic mask on a director: Livy has him dressed no better than his men, sleeping in his cloak on the ground among the sentries, first into battle and last out, and he took a javelin in the thigh under the walls of Saguntum. Polybius marvels that in all his years in Italy his army of Africans, Spaniards, Gauls and Italians never once mutinied — kinship without a common language. Where he falls short is action above the battlefield: he could win in Italy but could not make Carthage reinforce him." },

  jcaesar: {
    mask: "heroic", front: "sometimes",
    imp: { kinship: 95, prescription: 95, sanction: 90, action: 95, example: 85 },
    keegan: false, wounded: false,
    battle: "The Sambre, 57 BC",
    instance: "On the Sambre, with the Twelfth legion packed together and most of its centurions down, he took a shield from a man at the rear — he had come up without his own — pushed into the front rank, called the centurions by name and ordered the ranks to open out. He wrote the scene himself, in the third person.",
    note: "The heroic mask worn by a director who wrote his own reviews: his usual post was a vantage point behind the line, and he went to the front at the crisis — the Sambre, Alesia in his scarlet cloak, Munda on foot. Kinship and sanction were his genius: he called the soldiers 'comrades', judged them by their fighting rather than their morals, and broke the Tenth legion's mutiny in 47 BC by addressing them as 'citizens' instead. No source has him wounded, which for his exposure was luck." },

  augustus: {
    mask: "unheroic", front: "sometimes",
    imp: { kinship: 50, prescription: 70, sanction: 90, action: 65, example: 40 },
    keegan: false, wounded: true,
    battle: "Actium, 31 BC",
    instance: "At Metulum in Illyricum in 35 BC, when his soldiers hung back from the assault gangways, he took a shield and ran out on one himself; it collapsed under the men who followed and he was hurt in the leg and both arms. It was the last time. From then on Agrippa fought his battles, Actium included, and the victories were announced as his.",
    note: "Coded unheroic: the commander as organiser, who left the fighting to Agrippa and later Tiberius and Drusus, and made the army an institution — fixed terms of service and a discharge fund, the aerarium militare of AD 6. Suetonius says that after the civil wars he stopped calling the soldiers 'comrades', thinking it too flattering for discipline. The Prima Porta statue, in a breastplate celebrating the return of the Parthian standards — got back by treaty, not battle — is the false-heroic touch." },

  marcusaurelius: {
    mask: "unheroic", front: "never",
    imp: { kinship: 65, prescription: 55, sanction: 65, action: 60, example: 55 },
    keegan: false, wounded: false,
    battle: "The Marcomannic Wars, 168–180",
    instance: "When his victorious army asked for a donative, he refused: whatever they received beyond their pay, he said, would be wrung from the blood of their parents and kinsmen. He had already sold the palace's gold plate and the empress's silk robes at auction in the Forum of Trajan to pay for the war rather than raise taxes.",
    note: "A philosopher who learned command late and did it as a duty: most of a decade in the Danube camps at Carnuntum and Sirmium, the fighting run through professionals such as Pompeianus and Pertinax, and no theatre. Keegan's unheroic mask fits better than the heroic one Roman emperors were expected to wear — his column in Rome shows him addressing the troops and sacrificing, never fighting. The near-disaster of 170, when the Marcomanni and Quadi crossed the Alps and besieged Aquileia, came early in his command." },

  aurelian: {
    mask: "heroic", front: "sometimes",
    imp: { kinship: 50, prescription: 50, sanction: 80, action: 85, example: 80 },
    keegan: false, wounded: false,
    battle: "Immae and Emesa, 272",
    instance: "At Tyana in 272, which he had sworn to leave without a dog alive, he forbade the sack when the town surrendered. When his soldiers protested that he had promised them the place, he answered that he had promised to kill the dogs — so they should kill the dogs.",
    note: "A soldier-emperor who campaigned on every front in person and was the army's hardest disciplinarian; the Historia Augusta has a soldier torn apart between two bent trees for adultery with his host's wife. Sanction ran on fear, and fear killed him: officers who believed, on a forged list, that he was about to execute them struck first. Almost every scene, the Tyana story included, passes through the Historia Augusta, so the mask is better known than the man." },

  diocletian: {
    mask: "unheroic", front: "never",
    imp: { kinship: 45, prescription: 45, sanction: 80, action: 70, example: 35 },
    keegan: false, wounded: false,
    battle: "The Persian war, 296–298",
    instance: "After Galerius lost to the Persians near Callinicum in 297, Diocletian met him in Syria and made him walk a mile in his purple robes in front of the imperial carriage. Galerius raised a new army on the Danube and in 298 broke the Persian camp, capturing the king's family.",
    note: "Coded unheroic: the soldier-emperor who stopped being the army's champion and became its system — four emperors so that every frontier army had one to see, and the great wars handed where he could to colleagues. But the mask was anything but plain: the purple, the jewelled robes and the prostration (adoratio) put the emperor out of the soldiers' reach, which Grant would not recognise. The Galerius scene is sanction used on a colleague, and it worked." },

  constantine: {
    mask: "heroic", front: "always",
    imp: { kinship: 75, prescription: 80, sanction: 70, action: 85, example: 85 },
    keegan: false, wounded: true,
    battle: "Milvian Bridge, 312",
    instance: "At Verona in 312 he fought in the press himself, and the orator who praised him the next year scolded him for it — an emperor should not risk the state on his own sword arm. Weeks later at the Milvian Bridge his soldiers carried on their shields a sign he had ordered painted there.",
    note: "The heroic mask with a new god in it: personal combat, a vision, a sign the whole army carried, and the promise that this god gave victory. He fought in person through eighteen years of civil war and was wounded in the thigh at Adrianople in 324. Lactantius and Eusebius tell the sign story differently, and Eusebius had his version from Constantine himself decades later." },

  caocao: {
    mask: "antiheroic", front: "sometimes",
    imp: { kinship: 65, prescription: 75, sanction: 85, action: 80, example: 70 },
    keegan: false, wounded: true,
    battle: "Guandu, 200",
    instance: "On campaign he ordered death for anyone whose horse trampled the standing wheat. When his own horse shied into a field, he called for his punishment; told that the law could not touch the commander, he cut off his hair instead and had it shown round the army. The story comes from a hostile source quoted by Pei Songzhi.",
    note: "Anti-heroic in Keegan's sense: present and exposed — arrow wounds at Xingyang in 190 and Wancheng in 197 — but there to direct, not to perform. At Guandu he led the night raid that burned Yuan Shao's grain at Wuchao himself, and he wrote the earliest surviving commentary on Sunzi. The wheat story reads either as respect for his own law or as a cynic's theatre, which is the argument about Cao Cao generally." },

  attila: {
    mask: "heroic", front: "sometimes",
    imp: { kinship: 70, prescription: 60, sanction: 70, action: 60, example: 70 },
    keegan: false, wounded: false,
    battle: "The Catalaunian Plains, 451",
    instance: "After the Catalaunian Plains, Jordanes says, with the Romans and Goths outside his wagon-laager, he had a pyre built of horse saddles and meant to throw himself into the fire rather than be taken alive or killed by an enemy.",
    note: "The war-leader of a confederacy bound to his person: Priscus, who dined with him in 449, saw guests served on silver and gold while Attila ate meat from a wooden plate and wore plain clothes — the plainest man in his own hall. The check on the Catalaunian Plains shows the limit of his action: extortion worked as long as he did not have to win a pitched battle. The battle accounts come from Jordanes, a century later, and the speeches he gives Attila are invented." },

  genghis: {
    mask: "heroic", front: "sometimes",
    imp: { kinship: 90, prescription: 60, sanction: 95, action: 95, example: 75 },
    keegan: false, wounded: true,
    battle: "The Khwarazmian campaign, 1219–1221",
    instance: "Beaten by the Kereit in 1203 and down to a handful of followers, he drank the muddy water of Lake Baljuna with them and swore that if he won he would share the sweet and the bitter with them. The men of Baljuna were remembered and rewarded for the rest of his life.",
    note: "Heroic as a young man — an arrow in the neck in 1201, the wound Jelme sucked clean — and after 1206 a director on a scale no one had tried, with Jebe and Subotai on independent commands thousands of kilometres away. What makes him a Keegan case is kinship and sanction: decimal units that cut across the tribes, the Baljuna men rewarded for life, failure punished by unit. Debatable whether the older Genghis wore a mask at all; by Khwarazm he rode with the reserve and let the system fight." },

  kublai: {
    mask: "unheroic", front: "sometimes",
    imp: { kinship: 50, prescription: 45, sanction: 60, action: 60, example: 45 },
    keegan: false, wounded: false,
    battle: "The campaign against Nayan, 1287",
    instance: "In 1287, past seventy and gouty, he went in person against his rebel kinsman Nayan, and Marco Polo describes him directing the battle from a wooden tower carried by four elephants, with his standard flying above it.",
    note: "Coded unheroic: the conqueror's grandson who treated war as policy, led armies himself in Yunnan in 1253 and against his brother Ariq Böke, but gave the conquest of the Song to Bayan and the invasions of Japan, Vietnam and Java to others. Marco Polo's elephant tower is the exception that shows the rule: when he did go, it was to be seen, not to fight. The Japanese disasters of 1274 and 1281 belong to his action score." },

  timur: {
    mask: "heroic", front: "sometimes",
    imp: { kinship: 80, prescription: 55, sanction: 90, action: 95, example: 80 },
    keegan: false, wounded: true,
    battle: "Ankara, 1402",
    instance: "When Isfahan rose in 1387 and killed his garrison, each unit of his army was given a quota of heads to deliver and the clerks counted them; soldiers who would not kill bought heads from those who would. The towers went up outside the walls.",
    note: "Heroic in the field from his youth — arrows in the leg and arm in Sistan left him lame for life, hence 'Timur the Lame' — and never beaten in a major battle in thirty-five years. Sanction was total: plunder shared, failure punished, and terror counted out by quota, aimed at the next city on the road. How much he still fought in person by Ankara, in his late sixties, is doubtful; by then he directed." },

  nobunaga: {
    mask: "heroic", front: "sometimes",
    imp: { kinship: 50, prescription: 60, sanction: 85, action: 90, example: 70 },
    keegan: false, wounded: true,
    battle: "Okehazama, 1560",
    instance: "Before Okehazama he danced and sang the passage from the play Atsumori — 'Man's fifty years...' — ate standing, and rode out of Kiyosu with a handful of horsemen, the army gathering behind him. He caught Imagawa Yoshimoto's headquarters resting in a gorge during a storm, and his men took Yoshimoto's head.",
    note: "Heroic at the start and a director later: at Nagashino in 1575 he commanded from behind the palisades that sheltered his arquebusiers, and he was grazed in the leg by a bullet at Tennōji in 1576. Sanction was performance and nothing else — in 1580 he exiled Sakuma Nobumori, one of his oldest generals, with a written list of five years' failures before Ishiyama Honganji. Kinship was thin enough that a general he had humiliated, Akechi Mitsuhide, killed him at Honnō-ji." },

  shaka: {
    mask: "heroic", front: "sometimes",
    imp: { kinship: 55, prescription: 55, sanction: 90, action: 85, example: 75 },
    keegan: false, wounded: false,
    battle: "Gqokli Hill, 1818",
    instance: "The tradition has him as the young champion of Dingiswayo's army who threw away the throwing spear for a short stabbing one, and as king reviewing his returning regiments to pick out the men said to have shown fear, who were killed, while those who had killed were rewarded with cattle.",
    note: "Heroic in the founding legend, and the most complete system of sanction in the index: regiments quartered in royal barracks, marriage only by royal leave, death for cowardice. But much of what is told about Shaka comes from traders such as Henry Francis Fynn, who had reasons to make him monstrous, and from tradition collected a century later; the outline — new regiments, close-quarter fighting, extreme severity — is accepted, the scenes are not certain. The severity ended with his half-brothers killing him in 1828." },

  justinian: {
    mask: "falseheroic", front: "never",
    imp: { kinship: 20, prescription: 40, sanction: 40, action: 60, example: 10 },
    keegan: false, wounded: false,
    battle: "The Vandal war, 533–534",
    instance: "In 534 Belisarius, back from Carthage, walked on foot in the first triumph granted to a subject in five centuries and, beside the captured Vandal king, prostrated himself before Justinian in the Hippodrome. The emperor, who never went to war, had himself set up in the Augustaeum on a bronze horse, dressed, Procopius says, like Achilles.",
    note: "Coded false heroic for the gap between image and risk, not for any front-fighter past: he took the triumph for his generals' victories, starved them of men and pay, and recalled Belisarius whenever his fame grew. The alternative is unheroic — a desk commander who ran wars by dispatch — but Grant lived with his army, and Justinian left the capital only to inspect the Long Walls in 559, at seventy-seven. The African and Italian reconquests were real; so were the unpaid mutinies that followed them." },

  charlemagne: {
    mask: "heroic", front: "sometimes",
    imp: { kinship: 70, prescription: 70, sanction: 75, action: 80, example: 65 },
    keegan: false, wounded: false,
    battle: "The siege of Pavia, 773–774",
    instance: "Notker, writing some seventy years after his death, has the Lombard king Desiderius watching from a tower at Pavia as the Frankish host comes on, until Charles himself appears all in iron — iron helmet, iron mail, iron lance — and, the monk says, the fields fill with iron.",
    note: "Thirty years of war led in person, nearly every summer, and a king who, Einhard says, swam at Aachen with a hundred of his men — kinship as a way of life. Sanction was land for the loyal and terror for the rest: the Frankish annals count 4,500 Saxons beheaded at Verden in 782. But the battle scenes are legends written later, and the one defeat the sources admit, Roncesvalles in 778, fell on the rearguard while he was ahead with the army." },

  harun: {
    mask: "heroic", front: "never",
    imp: { kinship: 50, prescription: 65, sanction: 55, action: 55, example: 50 },
    keegan: false, wounded: false,
    battle: "Heraclea, 806",
    instance: "When the emperor Nikephoros I refused the tribute in 803, Harun wrote back to the 'dog of the Romans' that the answer was what he would see, not what he would hear, and led the army into Anatolia himself. He wore, the chroniclers say, a cap inscribed 'warrior and pilgrim'.",
    note: "He went to war in person — as heir to the Bosporus in 782, as caliph into Anatolia, campaigning and making the pilgrimage in alternate years — which later Abbasid caliphs stopped doing. But no source places him in a fight: the heroic mask was worn on campaign, not in battle, and his generals did the fighting. The record of his command is thin and the reading tentative." },

  alfred: {
    mask: "heroic", front: "always",
    imp: { kinship: 80, prescription: 65, sanction: 70, action: 80, example: 90 },
    keegan: false, wounded: false,
    battle: "Edington, 878",
    instance: "At Ashdown in 871, Asser says, his brother King Æthelred stayed in his tent hearing Mass while the Danes came on, so Alfred, then second in command, led the whole army uphill against them 'like a wild boar' before the king arrived.",
    note: "Heroic in the shield wall, at Ashdown and again at Edington after the winter in the Athelney marshes. His larger contribution sits under action and sanction: the burhs, and an army split in two so that half was always at home — service men could bear. Asser was his friend and biographer, so the boar is a portrait he approved." },

  william1: {
    mask: "heroic", front: "always",
    imp: { kinship: 60, prescription: 65, sanction: 85, action: 90, example: 95 },
    keegan: false, wounded: true,
    battle: "Hastings, 1066",
    instance: "At Hastings, when the rumour went round that he was dead and the Normans began to run, he pushed back his helmet and rode across their front bareheaded, shouting that he was alive. William of Poitiers says three horses were killed under him that day; the Bayeux Tapestry stitches the scene with the words 'Here is Duke William'.",
    note: "The heroic mask in its Norman form: at the front of the charges at Hastings, and unhorsed and wounded by his own son, Robert, at Gerberoy in 1079. Sanction was the conquest itself — the land of England for those who followed him, the Harrying of the North for those who resisted. Kinship was thinner: he held his barons by reward and fear rather than affection." },

  saladin: {
    mask: "antiheroic", front: "sometimes",
    imp: { kinship: 85, prescription: 70, sanction: 65, action: 75, example: 80 },
    keegan: false, wounded: false,
    battle: "Hattin, 1187",
    instance: "His son al-Afdal, standing beside him at Hattin, told Ibn al-Athir what he saw: as each Frankish charge came up the hill his father went pale and pulled at his beard, crying 'Give the devil the lie!', and the Muslims drove it back. Only when the king's tent fell did he dismount, bow to the ground and weep.",
    note: "Anti-heroic in position and manner: on the field and within reach of the fighting, directing rather than fighting, plain in dress and contemptuous of wealth. Where he differs from Wellington is warmth — he listened to petitioners in camp, and Baha al-Din's portrait is of a commander loved as well as obeyed. Sanction was his weakness: he rewarded generously but could not keep his emirs' contingents in the field through the long winters before Acre." },

  frederick2: {
    mask: "heroic", front: "sometimes",
    imp: { kinship: 40, prescription: 65, sanction: 65, action: 55, example: 50 },
    keegan: false, wounded: false,
    battle: "Cortenuova, 1237",
    instance: "Besieging Parma in 1247–48, he built a siege city outside the walls and named it Victoria. On 18 February 1248, while he was out hawking, the Parmesans sallied, burned it, and carried off his treasury, his crown and his seal.",
    note: "He did command in person — at Cortenuova in 1237 he caught the Milanese army on the march and sent its war-cart to Rome as a trophy — and dressed his rule as a Roman Caesar's, down to the gold coins. But his most famous campaign, the crusade of 1228–29, recovered Jerusalem by treaty without a battle, and his contemporaries found that disgraceful. Coded heroic for the mask he chose; his practice was nearer a director's, and Victoria shows what absence cost." },

  louis9: {
    mask: "heroic", front: "always",
    imp: { kinship: 85, prescription: 55, sanction: 45, action: 30, example: 95 },
    keegan: false, wounded: false,
    battle: "Mansurah, 1250",
    instance: "At Damietta in June 1249 he jumped from his boat into the sea, armed, his shield at his neck and the water up to his armpits, and waded ashore towards the Saracens; Joinville, who was there, says he would have charged them alone if the men around him had let him.",
    note: "Heroic in the crusading form, and Keegan's imperatives split cleanly: example and kinship as high as anyone's, action among the lowest. At Mansurah his brother Robert of Artois charged into the town against orders and died, and on the retreat disease destroyed the army; offered a galley to escape, Louis stayed with his men and was captured with them. His second crusade ended with his death from disease at Tunis in 1270." },

  taizong: {
    mask: "heroic", front: "always",
    imp: { kinship: 85, prescription: 70, sanction: 75, action: 85, example: 90 },
    keegan: false, wounded: false,
    battle: "Hulao, 621",
    instance: "In Goguryeo in 645, now emperor, he carried earth on his own saddle to fill the moat at Liaodong, and when the general Li Simo was hit by a crossbow bolt he sucked the blood from the wound himself.",
    note: "As prince he led the Tang cavalry in person — he scouted the enemy lines himself before Hulao — and he had his six warhorses carved for his tomb, one with an arrow being drawn from its chest. As emperor he went to Goguryeo himself and failed before Anshi. The court histories, which he made sure to read, give him the best of every scene." },

  robertbruce: {
    mask: "heroic", front: "always",
    imp: { kinship: 85, prescription: 70, sanction: 70, action: 90, example: 95 },
    keegan: false, wounded: false,
    battle: "Bannockburn, 1314",
    instance: "On the first day at Bannockburn the English knight Henry de Bohun saw the king riding along his lines on a small horse and charged him. Bruce stood in his stirrups and split Bohun's head with his axe; when his captains scolded him for the risk, Barbour says, he answered only that he had broken his good axe.",
    note: "The single combat is the heroic mask in its purest form, and Barbour has his own captains rebuking it. The eight years before were the opposite: castles slighted rather than held, pitched battle refused until the ground — the carse and the burn at Bannockburn — was his. Heroic in person, cautious in strategy; and the raiding war he left to Douglas and Randolph." },

  mehmed2: {
    mask: "heroic", front: "sometimes",
    imp: { kinship: 60, prescription: 70, sanction: 90, action: 85, example: 75 },
    keegan: false, wounded: true,
    battle: "Constantinople, 1453",
    instance: "On 20 April 1453, as three Genoese ships and a Byzantine transport fought their way past his fleet into the Golden Horn, he rode his horse into the sea, shouting at his admiral Baltoghlu. The next day Baltoghlu was beaten before him and stripped of his command.",
    note: "Heroic in the Ottoman form: the sultan at the head of a slave army that belonged to him — kinship by ownership as much as affection — with sanction his strongest imperative. He promised the army three days' plunder of Constantinople, and he fought in person and was wounded in the thigh before Belgrade in 1456. The ships hauled overland into the Golden Horn are action at its most inventive; Belgrade, where Hunyadi beat him, is the limit." },

  suleiman: {
    mask: "heroic", front: "sometimes",
    imp: { kinship: 70, prescription: 60, sanction: 80, action: 75, example: 70 },
    keegan: false, wounded: false,
    battle: "Mohács, 1526",
    instance: "At seventy-one, gouty, he went on his thirteenth campaign and died in his tent before Szigetvár in September 1566. His grand vizier, Sokollu Mehmed, hid the death from the army for weeks so that it would finish the siege and march home in order.",
    note: "Thirteen campaigns in person, from Belgrade in 1521 to Szigetvár, and at Mohács he stood in the battle line with the janissaries. The mask was majesty — in 1532 he paraded a Venetian-made jewelled helmet-crown on the march into Hungary to outshine Charles V — and the practice a sultan commanding from his tent. Coded heroic for the tradition of the sultan with his army, not for any fighting of his own; the retreat from Vienna in 1529 belongs to his action score." },

  charles5: {
    mask: "heroic", front: "sometimes",
    imp: { kinship: 55, prescription: 50, sanction: 50, action: 55, example: 70 },
    keegan: false, wounded: false,
    battle: "Mühlberg, 1547",
    instance: "At Mühlberg in April 1547, so ill with gout that he had been carried in a litter on the march, he rode with his cavalry across the Elbe at a ford a local peasant showed them. Titian then painted him alone on horseback in the armour he wore that day, which is still in the royal armoury in Madrid.",
    note: "A chivalric emperor who in 1528 challenged Francis I to single combat, and went to war in person at Tunis, Algiers, Ingolstadt and Mühlberg. But his greatest victory, Pavia in 1525, was won while he was in Spain, and the worst disgrace of his reign, the sack of Rome in 1527, was done by his own unpaid army: sanction fails where the money does. Coded heroic for the mask; the empire itself was run by correspondence." },

  henry8: {
    mask: "falseheroic", front: "never",
    imp: { kinship: 45, prescription: 60, sanction: 55, action: 35, example: 30 },
    keegan: false, wounded: false,
    battle: "The Battle of the Spurs, 1513",
    instance: "At Guinegate in August 1513 the French cavalry ran before they reached him; the king, with the main body, saw no fighting, and the rout was celebrated at home as a royal victory. Three weeks later, while he was still in France, his lieutenant Surrey destroyed the Scots at Flodden, and the queen sent Henry a piece of James IV's bloodstained coat.",
    note: "Coded false heroic: a king who modelled himself on Henry V, wore the armour and had his campaigns celebrated as triumphs, while the fighting was done by others. He did go to war — Thérouanne and Tournai in 1513, Boulogne in 1544 at fifty-three and too heavy to ride far — but stood back from the danger. Not Hitler's falseness, since he never claimed a front-fighter's past; the same gap between costume and risk." },

  akbar: {
    mask: "heroic", front: "always",
    imp: { kinship: 80, prescription: 60, sanction: 85, action: 90, example: 90 },
    keegan: false, wounded: false,
    battle: "The Gujarat campaign, 1572–73",
    instance: "At the siege of Chittor in February 1568, watching the breach at night, he shot with his own matchlock a man directing the repairs — the fortress commander, Jaimal — and the defence collapsed by morning.",
    note: "Heroic in the Timurid way: he rode fighting elephants for sport, shot Jaimal himself, and in 1573 rode from Fatehpur Sikri to Ahmedabad in eleven days to fall on the Gujarat rebels with a few thousand horsemen. Sanction became a system in the mansabdari ranks, where every noble's pay and troops were a number the emperor could raise or cut. Chittor's end — the massacre of its people after the fall — is sanction as terror, aimed at every Rajput fortress still holding out." },

  ieyasu: {
    mask: "antiheroic", front: "sometimes",
    imp: { kinship: 70, prescription: 50, sanction: 85, action: 90, example: 60 },
    keegan: false, wounded: false,
    battle: "Sekigahara, 1600",
    instance: "At Sekigahara, with the battle stalled and Kobayakawa Hideaki sitting on the hill above the flank despite his promise to change sides, Ieyasu moved his headquarters forward and — in the traditional account — had his arquebusiers fire on Kobayakawa's position to force a decision. Kobayakawa came down against the western army, and the battle was over by afternoon.",
    note: "Anti-heroic rather than heroic: present on the field and moving his headquarters forward when it mattered, but the battle had been won in advance by letters arranging defections. He learned caution the hard way, routed by Takeda Shingen at Mikatagahara in 1573, and his patience is the action imperative as waiting. The loyalty of the Mikawa retainers is his kinship; the domains ranked by where their lords stood in 1600 are sanction that lasted 250 years." },

  cromwell: {
    mask: "heroic", front: "always",
    imp: { kinship: 85, prescription: 85, sanction: 80, action: 90, example: 90 },
    keegan: false, wounded: true,
    battle: "Dunbar, 1650",
    instance: "At Dunbar in September 1650, his army sick and penned against the sea, he watched the Scots come down off Doon Hill and attacked before dawn; as the sun rose over the sea he was heard to say 'Let God arise, let his enemies be scattered'. When the Scots broke, the pursuit halted long enough for the men to sing the 117th Psalm.",
    note: "Heroic by position — he led his cavalry in person at Marston Moor, where he was wounded in the neck, and at Naseby — but the mask was godly plainness: victory was Providence's, not his, and he wanted captains who knew what they fought for. Kinship and sanction ran together in the New Model Army, and so did their limits: at Burford in 1649 he had Leveller mutineers shot. Drogheda, where he led the final assault through the breach and then refused quarter, is the dark side of the same conviction." },

  louis14: {
    mask: "falseheroic", front: "never",
    imp: { kinship: 50, prescription: 60, sanction: 80, action: 60, example: 30 },
    keegan: false, wounded: false,
    battle: "The crossing of the Rhine, 1672",
    instance: "In June 1672 his cavalry swam a ford of the Rhine at Tolhuis against a few Dutch squadrons while he watched from the bank. Boileau wrote a verse epistle on it, and Le Brun painted 'the crossing of the Rhine in the presence of the enemy' on the ceiling of the Hall of Mirrors as the king's own triumph.",
    note: "Coded false heroic: a king who went on campaign, sat before fortresses Vauban was taking for him and was painted as a conqueror, but never commanded in a pitched battle — in 1693 he left the army in Flanders just as Luxembourg had a chance to fight William III. He was serious about kinship and sanction as institutions: the Invalides for old soldiers, and the Order of Saint-Louis of 1693, open to officers who were not noble. On his deathbed he told his great-grandson he had loved war too much." },

  peter1: {
    mask: "antiheroic", front: "sometimes",
    imp: { kinship: 80, prescription: 80, sanction: 85, action: 75, example: 85 },
    keegan: false, wounded: false,
    battle: "Poltava, 1709",
    instance: "At Poltava he rode with his infantry under fire: one bullet went through his hat, another lodged in his saddle, and a third flattened against the cross he wore at his neck. Nine years earlier, the night before the Swedes attacked at Narva, he had left the army.",
    note: "Coded anti-heroic, against his own taste for triumphs: a tsar who threw off the sacred Muscovite majesty, served as a bombardier under a false name at Azov, and was present and exposed where the battle was decided — but as a director, not a champion. Sanction was harsh and systematic, from the executions of the streltsy in 1698 to promotion by merit. Narva, where he left the night before the battle, is the scene that argues against the reading; Poltava is the one that supports it." },

  frederick2p: {
    mask: "antiheroic", front: "sometimes",
    imp: { kinship: 65, prescription: 85, sanction: 85, action: 85, example: 90 },
    keegan: false, wounded: true,
    battle: "Leuthen, 1757",
    instance: "At Parchwitz on 3 December 1757, before Leuthen, he told his generals that any cavalry regiment that did not charge at once would be dismounted and made a garrison regiment, and any battalion that faltered would lose its colours and swords and have the braid cut from its coats. Then he bade them farewell: they would soon have beaten the enemy, or they would never see each other again.",
    note: "The nearest thing to Wellington before Wellington: a worn, snuff-stained uniform, no theatre, exposure in almost every battle — two horses killed under him at Kunersdorf, where a snuffbox stopped a bullet, and a spent canister ball that knocked him down at Torgau — and a discipline built on the soldier fearing his officer more than the enemy. At his first battle, Mollwitz, he left the field on Schwerin's advice and it was won without him; he never left one again. Kinship came late and grudgingly, as 'Old Fritz'." },

  nzinga: {
    mask: "heroic", front: "always",
    imp: { kinship: 80, prescription: 70, sanction: 70, action: 75, example: 85 },
    keegan: false, wounded: false,
    battle: "Kombi, 1647",
    instance: "Portuguese who fought her describe a queen in her sixties at the head of her troops, dressed as a man and armed with bow and battleaxe, ruling a war-camp of runaway slaves and soldiers under the Imbangala warrior code she had adopted.",
    note: "Heroic by necessity as well as choice: a woman whose right to rule the Mbundu nobles rejected, who took the Imbangala's code and rites so that the army was hers by their law rather than by lineage, and led it in person for decades. Most of what is known comes from her enemies — the soldier-chronicler Cadornega — and from the Capuchin Cavazzi, who knew her late in life, so the battlefield portrait may owe something to their wish to explain their defeats. Kombi, won with Dutch allies in 1647, is her high point." },

  toussaint: {
    mask: "heroic", front: "always",
    imp: { kinship: 85, prescription: 80, sanction: 75, action: 85, example: 90 },
    keegan: false, wounded: true,
    battle: "The war against the British in Saint-Domingue, 1794–98",
    instance: "On 29 August 1793, from Camp Turel, he announced himself to the colony: 'Brothers and friends, I am Toussaint Louverture; perhaps my name has made itself known to you. I have undertaken vengeance. I want liberty and equality to reign in Saint-Domingue.' He harangued his soldiers in Kreyòl.",
    note: "Heroic in the most literal sense: seventeen wounds, dozens of horses killed under him, and most of his front teeth lost when a cannonball burst nearby. The aura was cultivated, and French officers wrote that his soldiers thought him more than a man. Sanction is where the reading turns: his labour code drove the freed workers back to the plantations, and in 1801 he had his own nephew and best general, Moïse, shot after a revolt against it." },

  bolivar: {
    mask: "heroic", front: "sometimes",
    imp: { kinship: 75, prescription: 90, sanction: 70, action: 75, example: 85 },
    keegan: false, wounded: false,
    battle: "Boyacá, 1819",
    instance: "In June and July 1819 he took some 2,000 men across the Andes by the Páramo de Pisba in the rainy season — plainsmen who had never seen mountains, many of whom died of cold — and came down on the royalists in New Granada, who had not believed an army could come that way. Boyacá followed on 7 August.",
    note: "The heroic mask worn self-consciously — the oath on Monte Sacro, the laurels, the theatrical entries into liberated cities — and backed by real exposure, though he was never wounded. Prescription was his strongest weapon; the 1813 decree of war to the death, promising death to Spaniards who did not join and life to Americans even if guilty, was propaganda and sanction in one. Action is the debatable part: he lost the first two republics in 1812 and 1814, and Sucre, not he, won Ayacucho." },

  sanmartin: {
    mask: "unheroic", front: "sometimes",
    imp: { kinship: 80, prescription: 75, sanction: 75, action: 90, example: 70 },
    keegan: false, wounded: true,
    battle: "The crossing of the Andes and Chacabuco, 1817",
    instance: "At Mendoza in 1815–16 he spent two years building the Army of the Andes before risking it: an arsenal under the friar Luis Beltrán, mules and horseshoes counted, the passes surveyed, and a parley with the Pehuenche at which he named the route he did not mean to take, knowing it would reach the royalists. In January 1817 he crossed in several columns at once.",
    note: "The unheroic professional: twenty-two years in the Spanish army, then two years of preparation, and command from behind the line at Chacabuco and Maipú. His one fight from the front came early, at San Lorenzo in 1813, when his horse fell on him and he was cut in the face, and a soldier, Juan Bautista Cabral, died pulling him free. The Guayaquil renunciation of 1822 is the unheroic mask at its purest: he judged Bolívar better placed to finish the war and left it to him." },

  washington: {
    mask: "antiheroic", front: "sometimes",
    imp: { kinship: 75, prescription: 80, sanction: 70, action: 65, example: 90 },
    keegan: false, wounded: false,
    battle: "Princeton, 1777",
    instance: "At Princeton on 3 January 1777, with the militia breaking, he rode forward between the lines to within about thirty yards of the British and disappeared in the smoke of their volley. When it cleared he was still on his horse, and the line went forward.",
    note: "Anti-heroic in Wellington's sense: a gentleman's reserve, no theatre beyond dignity, hard discipline, and constant exposure under fire — four bullets through his coat at the Monongahela in 1755 and never a wound. His imperatives were example and kinship, and the Newburgh address of 1783, which stopped an officers' conspiracy when he paused to put on his spectacles, is prescription at its best. Action is mixed: he lost New York and Philadelphia, and won the war by keeping the army in being." },

  jackson: {
    mask: "heroic", front: "sometimes",
    imp: { kinship: 85, prescription: 75, sanction: 80, action: 75, example: 80 },
    keegan: false, wounded: false,
    battle: "New Orleans, 1815",
    instance: "Ordered in 1813 to disband his Tennessee volunteers at Natchez, far from home and unpaid, he refused, marched them home on his own credit, gave up his horses to the sick and walked. The men said he was as tough as hickory, and the name stuck.",
    note: "Heroic in the frontier style, and kinship was his great asset with volunteers who could go home when their terms ran out. Sanction was severe to the point of scandal: six militiamen shot for mutiny and desertion in 1815 became the 'Coffin Handbill' of the 1828 campaign. New Orleans was a director's victory, fought from behind the earthworks on the Rodriguez Canal, which makes 'sometimes' the honest answer to Keegan's question." },

  napoleon: {
    mask: "heroic", front: "sometimes",
    imp: { kinship: 95, prescription: 100, sanction: 95, action: 95, example: 75 },
    keegan: false, wounded: true,
    battle: "Austerlitz, 1805",
    instance: "On the eve of Austerlitz his proclamation told the army that he would direct every battalion himself and keep away from the fire if they broke the enemy, but that if victory were in doubt for a moment they would see their Emperor expose himself to the first blows. That night, as he rode through the bivouacs, the soldiers lit torches of straw to mark the anniversary of his coronation.",
    note: "The heroic mask remade for a mass conscript army — the bridge at Arcole, the 'little corporal' of Lodi, the bulletins and proclamations, the Legion of Honour, a marshal's baton in every knapsack — by a commander who in fact stood where he could see the whole field. Keegan uses him chiefly as the theatre Wellington refused, not as a case of his own. Debatable: twice he left an army to its fate, in Egypt in 1799 and in Russia in December 1812." },

  menelik2: {
    mask: "heroic", front: "sometimes",
    imp: { kinship: 70, prescription: 85, sanction: 70, action: 80, example: 60 },
    keegan: false, wounded: false,
    battle: "Adwa, 1896",
    instance: "In September 1895 he called the country to war: an enemy had come across the sea to destroy the land and change its religion; the strong should come with their strength and the weak help with prayer — and anyone who stayed at home without cause would be punished, with no plea accepted.",
    note: "Heroic in the Ethiopian tradition of the king at the head of the national host, but at Adwa he commanded a coalition of great lords from the rear, with his own Shewan troops as reserve, and the Empress Taytu led her own force. Kinship and prescription were his imperatives: perhaps 100,000 men answered the call and stayed in the field. Action was sound — years of buying rifles from Italy's rivals, and letting the Italians attack on ground of his choosing." },

  ataturk: {
    mask: "antiheroic", front: "sometimes",
    imp: { kinship: 75, prescription: 85, sanction: 70, action: 85, example: 80 },
    keegan: false, wounded: true,
    battle: "Gallipoli, 1915",
    instance: "On 25 April 1915, riding ahead of his regiment to the ridge above the landings, he met Turkish soldiers falling back out of ammunition, told them to fix bayonets and lie down, and the advancing Australians lay down too — minutes that let his 57th Regiment arrive. His order to it, as he later recalled it: 'I don't order you to attack; I order you to die.'",
    note: "Anti-heroic in Keegan's sense: a professional who went forward to see and decide for himself, exposed often enough — a left-eye wound at Derna in Libya in 1912, a shrapnel fragment stopped by the watch in his breast pocket at Conkbayırı in 1915 — and who led from the front only at the crisis. As commander-in-chief in 1921–22 he directed from headquarters at Sakarya and from the hill at Kocatepe. The theatre came later and was political." },

  stalin: {
    mask: "falseheroic", front: "never",
    imp: { kinship: 30, prescription: 65, sanction: 80, action: 50, example: 25 },
    keegan: false, wounded: false,
    battle: "Moscow, 1941",
    instance: "In October 1941, with the government evacuating to Kuibyshev, he stayed in Moscow, and on 7 November took the anniversary parade in Red Square with the Germans less than a hundred kilometres away; the troops marched off the square to the front. Nine months later Order No. 227 — 'Not a step back' — put blocking detachments behind the line to stop those who retreated.",
    note: "Coded false heroic for the gap between mask and risk rather than any front-fighter past: he went to the front once, for a few days in August 1943, then told Roosevelt he had to visit the front often, and after 1945 had himself made Generalissimo and filmed as the war's hero. In 1941 he did what Hitler did at Stalingrad — forbade the withdrawal from Kiev that cost some 600,000 men — and Order No. 270 branded those who surrendered as deserters and punished their families. From late 1942 he learned to listen to Zhukov and Vasilevsky, and his headquarters command of 1943–45 is nearer the unheroic." },

  hitler: {
    mask: "falseheroic", front: "never",
    imp: { kinship: 55, prescription: 60, sanction: 45, action: 30, example: 15 },
    keegan: true, wounded: true,
    battle: "Stalingrad, 1942–43",
    instance: "On 1 September 1939 he told the Reichstag that he had put on again the coat that was most sacred and dear to him — the soldier's field grey — and would not take it off until victory. From 1941 he ran the war from the Wolfsschanze bunkers in East Prussia, and in November 1942 ordered Sixth Army, encircled at Stalingrad more than 1,500 kilometres away, to stand where it was.",
    note: "Keegan's own case. He takes Hitler's courage in 1914–18 seriously — the Iron Cross First Class, a wound on the Somme, gassing in 1918 — and finds the falseness in what came after: propaganda made him the suffering front-fighter, while from 1941 he hardly saw the front, commanded by radio and telephone, sacked the generals who disagreed and forbade retreats he could not see. Debatable: the stand-fast order before Moscow in December 1941 is still argued to have saved the army, and his early judgement — backing Manstein's plan in 1940 — was sometimes better than his generals'." },

  churchill: {
    mask: "heroic", front: "never",
    imp: { kinship: 65, prescription: 100, sanction: 60, action: 55, example: 65 },
    keegan: false, wounded: false,
    battle: "The Rhine crossing, 1945",
    instance: "On 25 March 1945, the day after the Rhine crossing, he clambered onto the wrecked railway bridge at Wesel while German shells fell in the river nearby, until the American general Simpson asked him to leave. The year before, only the King had stopped him watching D-Day from a cruiser off the beaches.",
    note: "Coded although he commanded no army in the war, because the lens fits him: a former cavalry subaltern who rode in the charge at Omdurman and commanded a battalion in the trenches in 1916, he kept the heroic temperament as a minister and kept trying to get to the front. Prescription was his supreme imperative — the speeches of 1940 spoke to soldiers and civilians alike. Action is the debatable one: Gallipoli, Norway, Greece and the Dodecanese against his grip on grand strategy, and a constant interference that Alan Brooke checked." },

  mao: {
    mask: "unheroic", front: "never",
    imp: { kinship: 80, prescription: 90, sanction: 75, action: 85, example: 55 },
    keegan: false, wounded: false,
    battle: "Northern Shaanxi, 1947–48",
    instance: "When Hu Zongnan's army took Yan'an in March 1947, he refused to leave the province: with a headquarters of a few hundred people he moved from village to village in northern Shaanxi for a year, sometimes a few kilometres from the pursuing columns, drafting the telegrams that directed the war across China.",
    note: "Coded unheroic: the guerrilla director and theorist, plain in dress, commanding by doctrine and telegram rather than presence. Kinship and sanction were written down — the Three Main Rules of Discipline and Eight Points for Attention told the soldiers how to treat peasants and what would happen if they did not — and prescription was his strongest imperative. The cult of later years belongs to politics, not command; Korea, where he ordered mass assaults and lost his own son, is the hard case for his kinship score." },

  tito: {
    mask: "heroic", front: "sometimes",
    imp: { kinship: 85, prescription: 75, sanction: 70, action: 75, example: 75 },
    keegan: false, wounded: true,
    battle: "Neretva and Sutjeska, 1943",
    instance: "On the Neretva in March 1943, trapped with some 4,000 wounded and typhus cases, he blew the bridges to make the Germans think he was breaking out northward, then threw a makeshift bridge back across the river and took the wounded with him. At the Sutjeska three months later a bomb splinter wounded him in the arm; his dog Lux and the British officer Bill Stuart, beside him, were killed.",
    note: "Heroic in the partisan form: he moved with the main body and the Supreme Staff inside the encircled army, under the same bombs, though he directed rather than fought. Refusing to abandon the wounded, which a guerrilla army usually must, was kinship as policy and the reason men followed him. The heroic risk was literal: the German airborne raid on Drvar in May 1944 was aimed at him alone, and he escaped through a cave." },

  castro: {
    mask: "heroic", front: "sometimes",
    imp: { kinship: 80, prescription: 95, sanction: 70, action: 70, example: 85 },
    keegan: false, wounded: false,
    battle: "Bay of Pigs, 1961",
    instance: "At the Bay of Pigs in April 1961 he went to the front himself, directed the counter-attack in person and was photographed jumping down from a tank near Playa Girón; by Cuban accounts he directed fire on the invaders' ships himself.",
    note: "Heroic from Moncada in 1953 to the Sierra Maestra, where he fought with a telescopic rifle, and prescription was his genius — 'History will absolve me', and speeches of five hours. In Angola in 1987–88 the same commander ran the Cuito Cuanavale campaign from a map room in Havana down to the movement of units, the kind of remote control Keegan's Hitler chapter is about. The fatigues stayed on for fifty years." },

  degaulle: {
    mask: "heroic", front: "sometimes",
    imp: { kinship: 45, prescription: 95, sanction: 60, action: 55, example: 65 },
    keegan: false, wounded: true,
    battle: "Montcornet, 1940",
    instance: "On 26 August 1944, when shots rang out inside Notre-Dame as he arrived for the Magnificat, the crowd threw itself to the floor and he walked on up the nave, upright, to his place.",
    note: "His own book on command, The Edge of the Sword (1932), argues for prestige through mystery and distance — the mask of command written by a man who meant to wear it, which makes the heroic mask a fit even without the front line. He had earned it: three wounds in 1914–16 and capture at Douaumont, then command of an armoured division at Montcornet and Abbeville in May 1940. From London and Algiers he led Free France without commanding its battles; kinship is the low score, by design." },

  eisenhower: {
    mask: "unheroic", front: "never",
    imp: { kinship: 80, prescription: 85, sanction: 70, action: 75, example: 45 },
    keegan: false, wounded: false,
    battle: "Normandy, 1944",
    instance: "On the evening of 5 June 1944 he went to the 101st Airborne at Greenham Common and walked among the paratroopers with their blackened faces, asking where they were from. He had already written the note he would issue if the landings failed: the troops had done all that bravery could do, and 'if any blame or fault attaches to the attempt it is mine alone.'",
    note: "The unheroic mask in its modern form: plain, accessible, commanding a coalition from headquarters by consent and staff work, with kinship and prescription his strongest imperatives — the Order of the Day for D-Day was read to every man. He had never seen combat before 1942 and rarely saw the fighting after it, so example scores low by the nature of the job, not from want of nerve. Action is debatable: the broad-front strategy of 1944–45 is still argued over." },

  franco: {
    mask: "unheroic", front: "never",
    imp: { kinship: 60, prescription: 45, sanction: 85, action: 65, example: 45 },
    keegan: false, wounded: true,
    battle: "The Ebro, 1938",
    instance: "In September 1936, with Madrid apparently open, he turned his columns aside to relieve the besieged Alcázar of Toledo, and the meeting with its defenders was staged again for the newsreel cameras when he arrived. Madrid did not fall for two and a half years.",
    note: "Coded unheroic for the Civil War general: methodical, taciturn, commanding from headquarters at Salamanca and Burgos, and willing to fight slow battles of attrition, as on the Ebro in 1938, rather than risk a stroke. Before that he had been the opposite — the Legion officer of the Moroccan war, shot in the abdomen at El Biutz in 1916, whose men believed he had baraka, a luck that bullets respected. Sanction was the regime's core, through military courts that went on sentencing long after the war." },

  mussolini: {
    mask: "falseheroic", front: "never",
    imp: { kinship: 35, prescription: 70, sanction: 35, action: 15, example: 20 },
    keegan: false, wounded: false,
    battle: "Greece and Albania, 1940–41",
    instance: "In June 1942 he flew to Libya to ride into Alexandria behind Rommel — with, the story goes, a white horse for the entry. He waited three weeks at Derna while the advance stalled at El Alamein, and flew home.",
    note: "Coded false heroic: a former Bersagliere who made himself First Marshal of the Empire, took Italy into a war its armed forces were not ready for, and showed himself to the troops in reviews and balcony speeches rather than in command; in March 1941 he watched the failed spring offensive in Albania from an observation post and went home. He did serve at the front in 1915–17 and was hurt there, but by the accidental burst of an Italian mortar during firing practice, not by the enemy — hence 'wounded' is false here." },

  chiang: {
    mask: "unheroic", front: "never",
    imp: { kinship: 35, prescription: 55, sanction: 60, action: 40, example: 30 },
    keegan: false, wounded: false,
    battle: "Shanghai, 1937",
    instance: "In August 1937 he sent his German-trained divisions into three months of street fighting at Shanghai, in part so that the foreign powers would see China fight; they were destroyed. In January 1938 he had General Han Fuju shot for giving up Shandong without orders.",
    note: "Coded unheroic — a professional commander-in-chief working from headquarters — but its characteristic failure took the false heroic's form: orders telephoned to divisions over the heads of their army commanders, and stand-fast orders from far away. His real kinship was with the Whampoa officers he had taught; the conscripts, often roped together on the march, were another matter. Sanction ran on executions of generals and the Northern Expedition rule that a commander whose unit fell back without orders would be shot." },

  hochiminh: {
    mask: "unheroic", front: "never",
    imp: { kinship: 95, prescription: 85, sanction: 60, action: 65, example: 45 },
    keegan: false, wounded: false,
    battle: "Dien Bien Phu, 1954",
    instance: "Sending Giap to command at Dien Bien Phu in December 1953, he told him that the general at the front had full authority, and to fight only if he was sure of winning. In January Giap called off the planned quick assault for a slow siege — the hardest decision of his life, he said — and Ho backed him.",
    note: "Coded although he never commanded — Giap did — because his bond with the army is the clearest case of Keegan's kinship in the index: soldiers were 'Uncle Ho's soldiers', and he lived with the army's headquarters in the Viet Bac jungle through the war against France. The mask was the unheroic citizen's — sandals, a plain tunic, letters to soldiers and their families. After 1954 Le Duan's Politburo made the hard decisions, so this reading belongs to the French war." },

  nasser: {
    mask: "falseheroic", front: "never",
    imp: { kinship: 55, prescription: 85, sanction: 25, action: 25, example: 30 },
    keegan: false, wounded: true,
    battle: "The Six-Day War, 1967",
    instance: "While the air force was being destroyed on its airfields on the morning of 5 June 1967, Cairo radio announced victories, and Amer's headquarters kept the scale of the disaster even from Nasser for hours. On 9 June he went on television, took responsibility and resigned; crowds in the streets brought him back.",
    note: "An officer who had been wounded in the chest and besieged in the Faluja pocket in 1948, and who as president wore the hero's mask on the radio while leaving the army to his friend Abd al-Hakim Amer as a private fief. Sanction is the failure: Amer's incompetence went unpunished until it cost the Sinai in six days. Coded false heroic for the gap between the broadcasts and the army; the War of Attrition of 1967–70, when he took the army back in hand, is the case against." },

  lincoln: {
    mask: "unheroic", front: "never",
    imp: { kinship: 85, prescription: 95, sanction: 70, action: 75, example: 45 },
    keegan: false, wounded: false,
    battle: "Fort Stevens, 1864",
    instance: "On 11 July 1864, with Early's Confederates at the edge of Washington, he stood on the parapet of Fort Stevens in his tall hat to watch the fighting while bullets struck around him and a surgeon beside him was hit. An officer — tradition says the young Oliver Wendell Holmes — shouted at him to get down.",
    note: "Coded although he never commanded, because his relationship with the armies is the subject: he haunted the War Department telegraph office, visited the Army of the Potomac again and again, pardoned sleeping sentries, and dismissed McClellan when the soldiers' affection for their general was not matched by action. He appears in Keegan's Grant chapter as the civilian Grant deliberately served. His mask was the unheroic citizen's; the soldiers called him Father Abraham, and in 1864 they voted for him by a wide margin." }
};

window.COMMAND_NA = {
  hammurabi: "The Mari letters show his armies, sieges and alliances, but nothing about where he stood in battle or how he dealt with his soldiers; the law code is about subjects, not troops.",
  chandragupta: "His wars against the Nandas and Seleucus are known only as outcomes; no source shows him in a battle or with his troops, and the Arthashastra is a manual of uncertain date, not a record of his command.",
  ashoka: "The Kalinga war is known from his own Thirteenth Rock Edict, which records his remorse for its dead and deported but not whether he led the army or how; there is no other campaign to read.",
  fdr: "Directed grand strategy — Germany first, North Africa in 1942, unconditional surrender — but left the armies entirely to Marshall and his theatre commanders and had almost no relationship with the troops beyond the radio and a few reviews, so Keegan's imperatives of kinship and example have nothing to read."
};
