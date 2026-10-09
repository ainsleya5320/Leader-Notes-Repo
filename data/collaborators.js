// ============================================================
// KEY SUBORDINATES & COLLABORATORS — keyed by leader id
// ============================================================
// The lieutenants, ministers, generals, rivals-in-harness, and
// partners through whom each leader actually exercised power.
// Shown as a list in each profile. Precedence in the app:
//   a leader's own `collaborators` field (your edits)
//     >  COLLABORATORS[id]  >  none
// Each entry: { name, role }. If a name matches an indexed
// leader, the app auto-links it to that profile.
// Add or edit these here, or per-leader via the ✎ Edit form.
// ============================================================

window.COLLABORATORS = {

  // ---------------- ANCIENTS ----------------
  ramesses2: [
    { name: "Nefertari", role: "Great Royal Wife and diplomatic partner" },
    { name: "Khaemwaset", role: "Son; high priest of Ptah and restorer of monuments" },
    { name: "Merneptah", role: "Thirteenth son and eventual successor" },
    { name: "Paser", role: "Vizier who ran the civil administration" }
  ],
  cyrus: [
    { name: "Harpagus", role: "Median-born general who subdued the Ionian coast" },
    { name: "Croesus", role: "Deposed king of Lydia, kept on as counselor (per Herodotus)" }
  ],
  darius1: [
    { name: "Gobryas", role: "Fellow conspirator, general, and father-in-law" },
    { name: "Mardonius", role: "Son-in-law and leading general" },
    { name: "Datis & Artaphernes", role: "Commanders of the Marathon expedition" }
  ],
  pericles: [
    { name: "Aspasia", role: "Partner and influential intellectual advisor" },
    { name: "Phidias", role: "Master sculptor directing the Acropolis building program" },
    { name: "Anaxagoras", role: "Philosopher and formative mentor" }
  ],
  alexander: [
    { name: "Parmenion", role: "Senior general and second-in-command (later executed)" },
    { name: "Hephaestion", role: "Closest companion and cavalry commander" },
    { name: "Ptolemy", role: "General; later founder of Ptolemaic Egypt" },
    { name: "Antipater", role: "Regent of Macedon during the eastern campaigns" }
  ],
  chandragupta: [
    { name: "Chanakya (Kautilya)", role: "Chancellor and strategist; author of the Arthashastra" }
  ],
  qinshihuang: [
    { name: "Li Si", role: "Chancellor and legalist architect of the unified state" },
    { name: "Meng Tian", role: "General who fought the Xiongnu and built the early Great Wall" },
    { name: "Zhao Gao", role: "Powerful eunuch who engineered the succession crisis" }
  ],
  hannibal: [
    { name: "Maharbal", role: "Cavalry commander — 'you know how to win, but not to use victory'" },
    { name: "Mago Barca", role: "Brother and subordinate commander" },
    { name: "Hasdrubal Barca", role: "Brother who led the reinforcements lost at the Metaurus" }
  ],
  jcaesar: [
    { name: "Mark Antony", role: "Chief lieutenant and cavalry commander" },
    { name: "Titus Labienus", role: "Best legate in Gaul (later defected to Pompey)" },
    { name: "Cleopatra VII", role: "Ally, lover, and client monarch" }
  ],
  augustus: [
    { name: "Marcus Agrippa", role: "General and son-in-law; won Actium and built much of Rome" },
    { name: "Maecenas", role: "Cultural minister and patron of Virgil and Horace" },
    { name: "Livia", role: "Empress and closest political confidante" },
    { name: "Tiberius", role: "Stepson, general, and eventual successor" }
  ],
  marcusaurelius: [
    { name: "Lucius Verus", role: "Adoptive brother and co-emperor" },
    { name: "Commodus", role: "Son and successor — his great failure of judgment" }
  ],
  cleopatra: [
    { name: "Julius Caesar", role: "Patron and ally who restored her throne" },
    { name: "Mark Antony", role: "Partner and co-ruler of the Roman East" }
  ],

  // ---------------- WARLORDS ----------------
  caocao: [
    { name: "Xun Yu", role: "Chief strategist and administrator" },
    { name: "Guo Jia", role: "Brilliant young strategist (died on campaign)" },
    { name: "Xiahou Dun", role: "Trusted general and kinsman" }
  ],
  attila: [
    { name: "Bleda", role: "Brother and co-ruler, whom he had killed" },
    { name: "Onegesius", role: "Chief minister and closest advisor" }
  ],
  genghis: [
    { name: "Subutai", role: "Greatest general; campaigned as far as Europe" },
    { name: "Jebe", role: "General who ran independent long-range campaigns" },
    { name: "Muqali", role: "Commander entrusted with the war in North China" },
    { name: "Yelü Chucai", role: "Khitan advisor who urged governing rather than pillaging" }
  ],
  kublai: [
    { name: "Bayan", role: "Top general who conquered the Southern Song" },
    { name: "Ahmad Fanakati", role: "Finance minister — effective and widely hated" },
    { name: "Liu Bingzhong", role: "Advisor and architect of Yuan institutions" }
  ],
  nobunaga: [
    { name: "Toyotomi Hideyoshi", role: "Sandal-bearer risen to top general and successor-unifier" },
    { name: "Tokugawa Ieyasu", role: "Key ally who would ultimately win the peace" },
    { name: "Akechi Mitsuhide", role: "General who betrayed and killed him at Honnō-ji" }
  ],
  shaka: [
    { name: "Dingane", role: "Half-brother who assassinated and succeeded him" },
    { name: "Mkabayi", role: "Aunt and power-broker within the royal house" }
  ],

  // ---------------- MEDIEVAL ----------------
  justinian: [
    { name: "Theodora", role: "Empress and full political partner" },
    { name: "Belisarius", role: "Greatest general; led the reconquests" },
    { name: "Narses", role: "Eunuch general who completed the conquest of Italy" },
    { name: "Tribonian", role: "Jurist who directed the codification of Roman law" }
  ],
  charlemagne: [
    { name: "Alcuin of York", role: "Scholar who ran the palace school and Carolingian revival" },
    { name: "Einhard", role: "Courtier and biographer" }
  ],
  harun: [
    { name: "Yahya the Barmakid", role: "Vizier who ran the machinery of state" },
    { name: "Ja'far al-Barmaki", role: "Courtier and companion (later executed)" }
  ],
  alfred: [
    { name: "Asser", role: "Bishop, tutor, and biographer" }
  ],
  william1: [
    { name: "Odo of Bayeux", role: "Half-brother and bishop; behind the Bayeux Tapestry" },
    { name: "Lanfranc", role: "Archbishop of Canterbury and church reformer" },
    { name: "William FitzOsbern", role: "Steward and chief lieutenant" }
  ],
  eleanor: [
    { name: "Richard I", role: "Favored son, whose realm she governed during his crusade" },
    { name: "John", role: "Youngest son, whom she backed to the throne" }
  ],
  saladin: [
    { name: "al-Adil (Saphadin)", role: "Brother, commander, and diplomat" },
    { name: "al-Fadil", role: "Chief secretary and administrator" }
  ],
  frederick2: [
    { name: "Pier della Vigna", role: "Chancellor and voice of the crown (later disgraced)" }
  ],
  louis9: [
    { name: "Blanche of Castile", role: "Mother and twice regent" },
    { name: "Jean de Joinville", role: "Companion, crusader, and biographer" }
  ],
  mansamusa: [
    { name: "Abu Ishaq al-Sahili", role: "Andalusian poet-architect brought back to build in Mali" }
  ],

  // ---------------- RENAISSANCE ----------------
  mehmed2: [
    { name: "Çandarlı Halil Pasha", role: "Grand vizier, executed after the fall of Constantinople" },
    { name: "Mahmud Pasha", role: "Grand vizier and leading commander" },
    { name: "Zaganos Pasha", role: "Hardline general who urged the final assault" }
  ],
  lorenzo: [
    { name: "Angelo Poliziano", role: "Poet and tutor to his children" },
    { name: "Marsilio Ficino", role: "Platonist philosopher at the heart of his circle" },
    { name: "Sandro Botticelli", role: "Painter patronized by the Medici circle" }
  ],
  cesareborgia: [
    { name: "Pope Alexander VI", role: "Father and the source of all his power" },
    { name: "Remirro de Orco", role: "Brutal governor of the Romagna, executed as a scapegoat" }
  ],
  isabella: [
    { name: "Ferdinand II of Aragon", role: "Husband and co-monarch ('tanto monta')" },
    { name: "Cardinal Cisneros", role: "Confessor, reformer, and later regent" },
    { name: "Christopher Columbus", role: "Explorer she funded" },
    { name: "Tomás de Torquemada", role: "First Grand Inquisitor" }
  ],
  henry8: [
    { name: "Cardinal Wolsey", role: "All-powerful chief minister (fell from favor)" },
    { name: "Thomas Cromwell", role: "Chief minister who engineered the break with Rome (executed)" },
    { name: "Thomas More", role: "Lord Chancellor (executed for refusing the oath)" },
    { name: "Thomas Cranmer", role: "Archbishop of Canterbury" }
  ],
  suleiman: [
    { name: "Ibrahim Pasha", role: "Boyhood friend raised to grand vizier (later strangled)" },
    { name: "Hürrem Sultan (Roxelana)", role: "Wife and unprecedented political force" },
    { name: "Mimar Sinan", role: "Chief imperial architect" },
    { name: "Rüstem Pasha", role: "Grand vizier and financial administrator" }
  ],
  charles5: [
    { name: "Mercurino di Gattinara", role: "Grand chancellor and imperial ideologist" },
    { name: "Nicolas Perrenot de Granvelle", role: "Chief minister and diplomat" },
    { name: "Philip II", role: "Son who inherited Spain and the Indies" }
  ],
  elizabeth1: [
    { name: "William Cecil", role: "Lord Burghley — chief minister for forty years" },
    { name: "Francis Walsingham", role: "Spymaster and secretary" },
    { name: "Robert Dudley", role: "Earl of Leicester — favorite and confidant" },
    { name: "Robert Cecil", role: "Burghley's son and successor as secretary" }
  ],

  // ---------------- EARLY MODERN ----------------
  akbar: [
    { name: "Bairam Khan", role: "Regent and general during his minority" },
    { name: "Abu'l-Fazl", role: "Vizier and chronicler (the Akbarnama)" },
    { name: "Raja Todar Mal", role: "Finance minister who built the revenue system" },
    { name: "Raja Man Singh", role: "Rajput general and provincial governor" }
  ],
  ieyasu: [
    { name: "Honda Tadakatsu", role: "One of the 'Four Guardians' — undefeated general" },
    { name: "Ii Naomasa", role: "Commander of the fearsome 'Red Devils'" },
    { name: "Tokugawa Hidetada", role: "Son and successor as shogun" },
    { name: "Tenkai", role: "Monk-advisor on ideology and statecraft" }
  ],
  richelieu: [
    { name: "Père Joseph", role: "The 'Grey Eminence' — confidant and spymaster" },
    { name: "Cardinal Mazarin", role: "Protégé and hand-picked successor" }
  ],
  cromwell: [
    { name: "Thomas Fairfax", role: "Commander-in-chief of the New Model Army" },
    { name: "Henry Ireton", role: "Son-in-law and leading political-military strategist" },
    { name: "John Lambert", role: "General and drafter of constitutions" }
  ],
  louis14: [
    { name: "Cardinal Mazarin", role: "Mentor and chief minister until 1661" },
    { name: "Jean-Baptiste Colbert", role: "Controller of finances and builder of the economy" },
    { name: "Marquis de Louvois", role: "War minister who built the standing army" },
    { name: "Vauban", role: "Military engineer of fortresses and sieges" }
  ],
  kangxi: [
    { name: "Ferdinand Verbiest", role: "Jesuit astronomer and trusted technical advisor" },
    { name: "Songgotu", role: "Powerful minister and negotiator of the Nerchinsk treaty" }
  ],
  peter1: [
    { name: "Alexander Menshikov", role: "Closest favorite, risen from commoner to prince" },
    { name: "Franz Lefort", role: "Early mentor and companion of his youth" },
    { name: "Feofan Prokopovich", role: "Churchman and ideologist of the reforms" }
  ],
  frederick2p: [
    { name: "Kurt von Schwerin", role: "Field marshal of the early campaigns" },
    { name: "Hans Joachim von Zieten", role: "Cavalry general" },
    { name: "Voltaire", role: "Intellectual correspondent and guest (later estranged)" }
  ],
  mariatheresa: [
    { name: "Wenzel Anton von Kaunitz", role: "State chancellor; architect of the Diplomatic Revolution" },
    { name: "Friedrich Wilhelm von Haugwitz", role: "Administrative and tax reformer" },
    { name: "Joseph II", role: "Son and co-regent from 1765" }
  ],
  catherine2: [
    { name: "Grigory Potemkin", role: "Favorite and general; effectively co-ruled the south" },
    { name: "Grigory Orlov", role: "Favorite who helped her seize the throne" },
    { name: "Alexander Suvorov", role: "Great field commander" },
    { name: "Nikita Panin", role: "Foreign-affairs advisor" }
  ],

  // ---------------- COLONIAL ----------------
  washington: [
    { name: "Alexander Hamilton", role: "Wartime aide, then Treasury Secretary and policy engine" },
    { name: "Thomas Jefferson", role: "Secretary of State and rival within the cabinet" },
    { name: "Henry Knox", role: "Artillery chief, then Secretary of War" },
    { name: "Marquis de Lafayette", role: "Aide-de-camp and French ally" }
  ],
  jefferson: [
    { name: "James Madison", role: "Secretary of State and closest political ally" },
    { name: "Albert Gallatin", role: "Treasury Secretary and fiscal manager" },
    { name: "Meriwether Lewis", role: "Private secretary and expedition leader" }
  ],
  toussaint: [
    { name: "Jean-Jacques Dessalines", role: "Top general who completed the revolution" },
    { name: "Henri Christophe", role: "General and later king of northern Haiti" }
  ],
  bolivar: [
    { name: "Antonio José de Sucre", role: "Ablest lieutenant; won Ayacucho, first president of Bolivia" },
    { name: "Francisco de Paula Santander", role: "Vice-president of Gran Colombia (later rival)" },
    { name: "Manuela Sáenz", role: "Partner and confidante, 'Libertadora del Libertador'" }
  ],
  sanmartin: [
    { name: "Bernardo O'Higgins", role: "Chilean ally and co-liberator" },
    { name: "Juan Gregorio de Las Heras", role: "General of the Army of the Andes" }
  ],

  // ---------------- 19TH CENTURY ----------------
  napoleon: [
    { name: "Talleyrand", role: "Foreign minister and consummate survivor (later betrayer)" },
    { name: "Joseph Fouché", role: "Minister of police and intelligence" },
    { name: "Louis-Alexandre Berthier", role: "Indispensable chief of staff" },
    { name: "Louis-Nicolas Davout", role: "Ablest and most loyal of the marshals" },
    { name: "Michel Ney", role: "'Bravest of the brave' — superb under orders, erratic in independent command" },
    { name: "Joachim Murat", role: "Brother-in-law, cavalry commander, and king of Naples" }
  ],
  jackson: [
    { name: "Martin Van Buren", role: "Secretary of State, party architect, and successor" },
    { name: "Amos Kendall", role: "Editor and central figure of the 'Kitchen Cabinet'" },
    { name: "Roger Taney", role: "Treasury Secretary, later Chief Justice" }
  ],
  victoria: [
    { name: "Prince Albert", role: "Husband and de facto private secretary" },
    { name: "Lord Melbourne", role: "First prime minister and early political mentor" },
    { name: "Benjamin Disraeli", role: "Favorite prime minister and flatterer-in-chief" }
  ],
  lincoln: [
    { name: "William Seward", role: "Secretary of State; rival turned indispensable ally" },
    { name: "Edwin Stanton", role: "Secretary of War" },
    { name: "Ulysses S. Grant", role: "The general who finally delivered victory" }
  ],
  juarez: [
    { name: "Sebastián Lerdo de Tejada", role: "Chief minister and successor" },
    { name: "Melchor Ocampo", role: "Liberal ally behind the Reform Laws" }
  ],
  bismarck: [
    { name: "Wilhelm I", role: "The king (then Kaiser) whom he served and managed" },
    { name: "Helmuth von Moltke", role: "Chief of staff behind the wars of unification" },
    { name: "Albrecht von Roon", role: "War minister who rebuilt the Prussian army" }
  ],
  walpole: [
    { name: "Queen Caroline", role: "George II's consort and his indispensable ally in the closet from 1727 until her death in 1737; Walpole managed the King largely through her" },
    { name: "George II", role: "King from 1727; meant to replace him with Spencer Compton, was won over by the civil list and the Queen, and kept him until the Commons would not" },
    { name: "Charles, 2nd Viscount Townshend", role: "Brother-in-law and senior partner of the early years as Northern Secretary; forced out in 1730 when the partnership reversed" },
    { name: "Thomas Pelham-Holles, Duke of Newcastle", role: "Southern Secretary from 1724 and the ministry's electoral and patronage manager — the borough-monger of the Whig system" },
    { name: "Henry Pelham", role: "Newcastle's brother and Walpole's protégé in the Commons; Paymaster, and prime minister from 1743, carrying the Walpole system on" },
    { name: "Archibald Campbell, Earl of Ilay", role: "Manager of Scotland — its patronage, its sixteen representative peers and most of its forty-five MPs" },
    { name: "Edmund Gibson", role: "Bishop of London and Walpole's adviser on church patronage ('Walpole's pope') until they split in 1736" },
    { name: "John, Lord Hervey", role: "Vice-Chamberlain and confidant of the Queen, Walpole's link to her rooms, and the memoirist who recorded how the system worked; Lord Privy Seal 1740" },
    { name: "Philip Yorke, Lord Hardwicke", role: "Attorney-General, Lord Chief Justice and from 1737 Lord Chancellor; the ministry's lawyer in the Lords" },
    { name: "Nicholas Paxton", role: "Solicitor to the Treasury, who handled press prosecutions and secret-service payments; jailed in 1742 for refusing to tell the Committee of Secrecy what he knew" },
    { name: "William Pulteney", role: "Former Whig ally turned leader of the opposition Whigs and co-founder of The Craftsman; brought him down in 1742, then took an earldom and lost his following" },
    { name: "Henry St John, Viscount Bolingbroke", role: "The Tory enemy: pardoned but kept out of the Lords, he ran the Craftsman's campaign against 'the Robinocracy' and wrote the opposition's theory of patriot government" }
  ],
  pittyounger: [
    { name: "George III", role: "The King whose confidence made him prime minister in 1783 and carried the 1784 election; whose refusal of Catholic emancipation ended the first ministry in 1801" },
    { name: "Henry Dundas", role: "His closest colleague and drinking companion: manager of Scotland and India, Treasurer of the Navy and Secretary for War; impeached in 1805 (as Lord Melville) and acquitted in 1806" },
    { name: "William Grenville", role: "Cousin; Speaker, Home Secretary and Foreign Secretary 1791–1801, the hard-liner of the war cabinet; refused to rejoin him in 1804" },
    { name: "George Rose", role: "Secretary to the Treasury 1782–1801, who handled patronage, the government's boroughs and the elections" },
    { name: "William Wilberforce", role: "Friend from Cambridge, whom Pitt urged in 1787 to take up the abolition of the slave trade; an independent ally whose votes he could not always command" },
    { name: "Henry Addington", role: "Speaker from 1789 and friend; his successor in 1801, whose government Pitt then helped to bring down in 1804" },
    { name: "Lord Shelburne", role: "Prime minister who made him Chancellor of the Exchequer at twenty-three in 1782; never given office by Pitt afterwards" },
    { name: "Charles James Fox", role: "The great rival for twenty years: leader of the Whig opposition, of the Fox–North coalition he displaced in 1783 and of the party that cheered the French Revolution" },
    { name: "George Pretyman Tomline", role: "His Cambridge tutor, then private secretary and lifelong adviser; Bishop of Lincoln from 1787, later his first biographer" },
    { name: "Lord Spencer", role: "First Lord of the Admiralty 1794–1801, through the naval mutinies of 1797 and the victories of St Vincent, Camperdown and the Nile" },
    { name: "George Canning", role: "Protégé and under-secretary at the Foreign Office from 1796; the most gifted of the young Pittites, who kept his name as a cause after 1806" },
    { name: "Lady Hester Stanhope", role: "Niece who kept house for him at Walmer Castle and Putney from 1803 to his death" }
  ],
  peel: [
    { name: "Duke of Wellington", role: "His senior partner in 1828–30 — together they carried Catholic emancipation — caretaker for him in 1834 and Leader of the Lords in his cabinets; backed repeal in 1846" },
    { name: "Sir James Graham", role: "Home Secretary 1841–46 and his closest cabinet confidant; a former Whig who had left Grey's government in 1834" },
    { name: "Lord Aberdeen", role: "Foreign Secretary 1841–46, who settled the Oregon and Maine boundaries with the United States; later led the Peelites into coalition as prime minister (1852–55)" },
    { name: "William Ewart Gladstone", role: "Protégé: Vice-President, then President, of the Board of Trade, who did the detailed work on the 1842 tariff; carried Peel's finance into the Liberal party" },
    { name: "Henry Goulburn", role: "Chancellor of the Exchequer 1841–46 and a friend since the Irish years — though Peel presented the great budget of 1842 himself" },
    { name: "Edward Stanley (later Earl of Derby)", role: "Colonial Secretary who resigned in December 1845 rather than repeal the Corn Laws, and became leader of the protectionist majority of the party" },
    { name: "Benjamin Disraeli", role: "Backbencher refused office in 1841, whose speeches in 1845–46 savaged Peel's 'organised hypocrisy' and led the revolt that destroyed the ministry" },
    { name: "Lord George Bentinck", role: "Racing aristocrat who organised the protectionist rebellion of 1846 and led it in the Commons" },
    { name: "Queen Victoria", role: "Refused to change her Whig ladies in 1839, which kept him out; came, with Prince Albert, to rely on him by 1846" },
    { name: "Prince Albert", role: "The Queen's consort, who shared his administrative temper; under Peel the court ceased to be a Whig preserve" },
    { name: "F. R. Bonham", role: "The party's election agent at the Carlton Club in the 1830s and 1840s, who ran registration and candidates so that Peel did not have to" },
    { name: "Edward Drummond", role: "His private secretary, shot in Whitehall on 20 January 1843 by Daniel M'Naghten, who mistook him for Peel" }
  ],
  disraeli: [
    { name: "Lord Derby", role: "Party leader and three-time prime minister above him" },
    { name: "Montagu Corry", role: "Private secretary and gatekeeper" }
  ],
  palmerston: [
    { name: "Emily, Lady Palmerston", role: "Lord Melbourne's sister, the great Whig hostess, married in 1839; her salons at Cambridge House let him test ideas on foreign diplomats before committing to them, and she was his closest adviser and amanuensis" },
    { name: "Lord John Russell", role: "Whig leader and rival-in-harness: prime minister when he dismissed Palmerston in 1851, his Foreign Secretary in 1859–65, and his successor in 1865" },
    { name: "William Ewart Gladstone", role: "Chancellor of the Exchequer 1859–65, whose economies and reform schemes Palmerston contained; Palmerston joked that Gladstone's resignation letters might set the chimney on fire" },
    { name: "Lord Clarendon", role: "Foreign Secretary 1853–58 — Palmerston would not take office in 1855 under Derby unless Clarendon stayed at the Foreign Office, and kept him there as prime minister" },
    { name: "Lord Shaftesbury", role: "Evangelical reformer and his stepson-in-law, who guided his ecclesiastical patronage — the 'Shaftesbury bishops'" },
    { name: "Sir George Cornewall Lewis", role: "Chancellor of the Exchequer 1855–58, then Home and War Secretary; a steady administrator in both his cabinets" },
    { name: "Lord Granville", role: "Lord President and Liberal leader in the Lords in both his governments; the Queen's first choice for prime minister in June 1859" },
    { name: "Lord Lyons", role: "Minister at Washington during the American Civil War, whose confidential correspondence with Palmerston helped settle the Trent affair peacefully" },
    { name: "Algernon Borthwick", role: "Managing editor, later proprietor, of the Morning Post from 1852 — the paper most closely associated with the Palmerston ministry in the 1850s" },
    { name: "Prince Albert", role: "The Queen's husband and Palmerston's most effective critic at Court, who complained in 1851 that despatches went out without the sovereign seeing them" },
    { name: "Benjamin Disraeli", role: "Conservative leader in the Commons and his sharpest parliamentary critic — who nonetheless offered him the Conservative leadership in 1859 and admired his 'pluck' in 1864" }
  ],
  gladstone: [
    { name: "Catherine Gladstone", role: "Wife from 1839 (née Glynne), through whose family he lived at Hawarden; constant companion on campaign, including Midlothian" },
    { name: "Sir Robert Peel", role: "His political master, who made him President of the Board of Trade and turned him from theology to finance; Gladstone called himself 'a Peel–Cobden man' to the end" },
    { name: "Lord Granville", role: "Foreign Secretary 1870–74 and 1880–85 and Liberal leader in the Lords — the colleague who handled both the Queen and foreign affairs for him" },
    { name: "Lord Hartington", role: "Liberal leader in the Commons during his retirement (1875–80), who stood aside in 1880; led the Liberal Unionists against Home Rule from 1886" },
    { name: "Joseph Chamberlain", role: "Radical organiser of the National Liberal Federation and President of the Board of Trade 1880–85; broke with him over Home Rule in 1886 and took the Liberal Unionists into alliance with Salisbury" },
    { name: "Lord Rosebery", role: "Organised and paid for the Midlothian campaign of 1879–80; Foreign Secretary in 1886 and 1892–94, and his successor as prime minister in 1894 — the Queen's choice, not his" },
    { name: "Sir William Harcourt", role: "Home Secretary 1880–85 and Chancellor of the Exchequer 1886 and 1892–95; his graduated death duties of 1894 Gladstone thought 'too violent'" },
    { name: "John Morley", role: "Chief Secretary for Ireland in 1886 and 1892–95, the most committed Home Ruler in his cabinets, and his official biographer (1903)" },
    { name: "Charles Stewart Parnell", role: "Leader of the Irish Parliamentary Party, whose 86 seats held the balance after 1885; ally on Home Rule until the O'Shea divorce scandal of 1890 ended the alliance" },
    { name: "Herbert Gladstone", role: "Youngest son and aide; his 'Hawarden Kite' of December 1885 revealed his father's conversion to Home Rule" },
    { name: "Edward Hamilton", role: "Private secretary in the 1880s and lifelong Treasury confidant, whose diaries are a principal record of his premierships" },
    { name: "Benjamin Disraeli", role: "His great rival from the Reform Act of 1867 to Disraeli's death in 1881; Gladstone's Midlothian campaign was an assault on 'Beaconsfieldism'" }
  ],
  salisbury: [
    { name: "Arthur Balfour", role: "Nephew; Chief Secretary for Ireland from 1887, Leader of the Commons from 1891 and his successor as prime minister in 1902 — the appointment folk etymology connects with 'Bob's your uncle'" },
    { name: "Georgina, Lady Salisbury", role: "Wife from 1857, who helped him with his journalism in the lean years, ran the political hospitality at Hatfield and in London that he disliked, and advised him closely; died in 1899" },
    { name: "W. H. Smith", role: "Newsagent-turned-minister; First Lord of the Treasury and Leader of the House of Commons 1887–91, who managed the Commons for a prime minister in the Lords" },
    { name: "Lord Randolph Churchill", role: "Chancellor of the Exchequer and Leader of the Commons in 1886, whose resignation that December over the army estimates Salisbury accepted, ending his career" },
    { name: "George Goschen", role: "Liberal Unionist brought in as Chancellor of the Exchequer in January 1887 to replace Churchill; First Lord of the Admiralty 1895–1900" },
    { name: "Lord Hartington (Duke of Devonshire)", role: "Leader of the Liberal Unionists, whose votes sustained the 1886–92 government; joined the cabinet in 1895 as Lord President" },
    { name: "Joseph Chamberlain", role: "Liberal Unionist Colonial Secretary 1895–1903, the most energetic minister of the third government and the driving force behind the Boer War" },
    { name: "Sir Michael Hicks Beach", role: "Chief Secretary for Ireland 1886–87 and Chancellor of the Exchequer 1895–1902, who resisted the cost of empire and war" },
    { name: "Aretas Akers-Douglas", role: "Conservative chief whip from 1885, who managed the party in the Commons through the Unionist alliance" },
    { name: "Richard Middleton", role: "The party's principal agent from 1885, who ran Conservative Central Office and the constituency organisation through the election victories of 1886, 1895 and 1900" },
    { name: "Lord Lansdowne", role: "Liberal Unionist; War Secretary 1895–1900 and his successor at the Foreign Office from November 1900" },
    { name: "Benjamin Disraeli", role: "The leader he denounced in 1867 for 'political betrayal' and then served as India and Foreign Secretary, beside him at the Congress of Berlin in 1878" }
  ],
  cavour: [
    { name: "Victor Emmanuel II", role: "The king he steered toward a unified Italy" },
    { name: "Giuseppe Garibaldi", role: "Radical whose conquests he co-opted for the crown" }
  ],
  cixi: [
    { name: "Li Hongzhang", role: "Leading statesman-general of the self-strengthening era" },
    { name: "Ronglu", role: "Manchu general and loyal power-base" },
    { name: "Li Lianying", role: "Chief eunuch and confidant" }
  ],
  meiji: [
    { name: "Itō Hirobumi", role: "First prime minister; author of the constitution" },
    { name: "Yamagata Aritomo", role: "Builder of the modern army and bureaucracy" },
    { name: "Ōkubo Toshimichi", role: "Driving statesman of the early Restoration" }
  ],
  menelik2: [
    { name: "Empress Taytu Betul", role: "Wife and key strategist at Adwa" },
    { name: "Ras Makonnen", role: "General and governor (father of Haile Selassie)" },
    { name: "Ras Alula", role: "Ethiopia's foremost battlefield commander" }
  ],

  // ---------------- 20TH CENTURY ----------------
  troosevelt: [
    { name: "Elihu Root", role: "Secretary of War and State; institutional reformer" },
    { name: "William Howard Taft", role: "Trusted administrator and hand-picked successor" },
    { name: "Gifford Pinchot", role: "Chief forester and partner in conservation" }
  ],
  lenin: [
    { name: "Leon Trotsky", role: "Organized the October rising and founded the Red Army" },
    { name: "Felix Dzerzhinsky", role: "Founder of the Cheka secret police" },
    { name: "Joseph Stalin", role: "General Secretary who accumulated the party machine" }
  ],
  ataturk: [
    { name: "İsmet İnönü", role: "Chief lieutenant, prime minister, and successor" },
    { name: "Fevzi Çakmak", role: "Long-serving chief of the general staff" }
  ],
  stalin: [
    { name: "Vyacheslav Molotov", role: "Foreign minister and loyal right hand" },
    { name: "Lavrentiy Beria", role: "Secret-police chief and terror manager" },
    { name: "Georgy Zhukov", role: "Foremost marshal of the Great Patriotic War" }
  ],
  fdr: [
    { name: "Harry Hopkins", role: "Closest advisor and personal envoy" },
    { name: "Frances Perkins", role: "Labor Secretary and New Deal architect" },
    { name: "George Marshall", role: "Army chief of staff" },
    { name: "Eleanor Roosevelt", role: "Political partner and public conscience" },
    { name: "Harry S. Truman", role: "Vice president in 1945 who succeeded him" }
  ],
  hitler: [
    { name: "Joseph Goebbels", role: "Propaganda minister" },
    { name: "Hermann Göring", role: "Designated deputy and Luftwaffe chief" },
    { name: "Heinrich Himmler", role: "SS chief and architect of the camps" },
    { name: "Albert Speer", role: "Architect and armaments minister" }
  ],
  churchill: [
    { name: "Alan Brooke", role: "Chief of the Imperial General Staff who could tell him 'no'" },
    { name: "Lord Beaverbrook", role: "Dynamic minister of aircraft production" },
    { name: "Lord Cherwell", role: "Personal scientific advisor (Lindemann)" },
    { name: "Clement Attlee", role: "Deputy prime minister in the war coalition" }
  ],
  degaulle: [
    { name: "Georges Pompidou", role: "Prime minister and successor" },
    { name: "Michel Debré", role: "Prime minister and principal author of the constitution" },
    { name: "André Malraux", role: "Minister of culture and loyalist" }
  ],
  mao: [
    { name: "Zhou Enlai", role: "Premier; the indispensable administrator and diplomat" },
    { name: "Lin Biao", role: "Marshal and designated heir (died fleeing)" },
    { name: "Liu Shaoqi", role: "Head of state, purged in the Cultural Revolution" },
    { name: "Jiang Qing", role: "Wife and leader of the Gang of Four" }
  ],
  hochiminh: [
    { name: "Vo Nguyen Giap", role: "General of Dien Bien Phu and the wars that followed" },
    { name: "Le Duan", role: "Party first secretary who held real power in the 1960s" },
    { name: "Pham Van Dong", role: "Long-serving premier" }
  ],
  bengurion: [
    { name: "Moshe Dayan", role: "Rising general and protégé" },
    { name: "Shimon Peres", role: "Young defense-ministry protégé" },
    { name: "Levi Eshkol", role: "Financial organizer and eventual successor" }
  ],
  nasser: [
    { name: "Anwar Sadat", role: "Fellow Free Officer and successor" },
    { name: "Abdel Hakim Amer", role: "Army chief whose failures produced the 1967 rout" }
  ],
  leekuanyew: [
    { name: "Goh Keng Swee", role: "Economic architect and deputy prime minister" },
    { name: "S. Rajaratnam", role: "Foreign minister and party ideologue" },
    { name: "Goh Chok Tong", role: "Groomed and tested successor" }
  ],
  tito: [
    { name: "Edvard Kardelj", role: "Chief ideologist of self-management socialism" },
    { name: "Aleksandar Ranković", role: "Security chief (later purged)" },
    { name: "Milovan Đilas", role: "Deputy turned dissident" }
  ],
  jfk: [
    { name: "Robert Kennedy", role: "Brother, Attorney General, and closest advisor" },
    { name: "Robert McNamara", role: "Secretary of Defense" },
    { name: "Ted Sorensen", role: "Counselor and speechwriter" }
  ],
  lbj: [
    { name: "Robert McNamara", role: "Defense Secretary and manager of the Vietnam War" },
    { name: "McGeorge Bundy", role: "National security advisor" },
    { name: "Richard Russell", role: "Senate mentor and power-broker" }
  ],
  goldameir: [
    { name: "Moshe Dayan", role: "Defense minister during the 1973 war" },
    { name: "Israel Galili", role: "Minister and closest kitchen-cabinet confidant" }
  ],
  indira: [
    { name: "P. N. Haksar", role: "Principal secretary and chief strategist" },
    { name: "Sanjay Gandhi", role: "Son and ruthless enforcer during the Emergency" },
    { name: "Rajiv Gandhi", role: "Son and successor" }
  ],
  deng: [
    { name: "Hu Yaobang", role: "Reformist party chief (purged in 1987)" },
    { name: "Zhao Ziyang", role: "Premier and party chief, ousted after Tiananmen" },
    { name: "Chen Yun", role: "Conservative economic counterweight" }
  ],
  thatcher: [
    { name: "Geoffrey Howe", role: "Chancellor and deputy whose resignation triggered her fall" },
    { name: "Nigel Lawson", role: "Chancellor of the tax-cutting years" },
    { name: "Keith Joseph", role: "Ideological mentor" },
    { name: "Willie Whitelaw", role: "Loyal deputy — 'every prime minister needs a Willie'" }
  ],
  reagan: [
    { name: "James Baker", role: "Chief of staff and operational manager" },
    { name: "Edwin Meese", role: "Counselor and later Attorney General" },
    { name: "Michael Deaver", role: "Image-maker and stagecraft chief" },
    { name: "George Shultz", role: "Secretary of State" }
  ],
  gorbachev: [
    { name: "Eduard Shevardnadze", role: "Foreign minister of the new thinking" },
    { name: "Alexander Yakovlev", role: "The 'godfather of glasnost'" },
    { name: "Boris Yeltsin", role: "Protégé turned rival who outflanked him" }
  ],
  mandela: [
    { name: "Thabo Mbeki", role: "Deputy who ran the government and succeeded him" },
    { name: "Cyril Ramaphosa", role: "Chief constitutional negotiator" },
    { name: "F. W. de Klerk", role: "Deputy president and former adversary" },
    { name: "Walter Sisulu", role: "Lifelong mentor and comrade" }
  ],
  castro: [
    { name: "Che Guevara", role: "Revolutionary commander and minister" },
    { name: "Raúl Castro", role: "Brother, army chief, and successor" },
    { name: "Camilo Cienfuegos", role: "Popular revolutionary commander" }
  ],

  // ---- completing the 20th-century U.S. presidents ----
  mckinley: [
    { name: "Mark Hanna", role: "Political manager and kingmaker" },
    { name: "John Hay", role: "Secretary of State of the 'Open Door'" }
  ],
  taft: [
    { name: "Philander Knox", role: "Secretary of State ('dollar diplomacy')" },
    { name: "Henry Stimson", role: "Secretary of War" }
  ],
  wilson: [
    { name: "Edward 'Colonel' House", role: "Closest advisor and diplomatic envoy" },
    { name: "William Jennings Bryan", role: "Secretary of State (resigned over neutrality)" },
    { name: "Edith Wilson", role: "Wife who screened the presidency after his stroke" }
  ],
  harding: [
    { name: "Charles Evans Hughes", role: "Secretary of State" },
    { name: "Andrew Mellon", role: "Treasury Secretary across three presidencies" },
    { name: "Albert Fall", role: "Interior Secretary convicted in Teapot Dome" }
  ],
  coolidge: [
    { name: "Andrew Mellon", role: "Treasury Secretary and architect of tax cuts" },
    { name: "Frank Kellogg", role: "Secretary of State (Kellogg-Briand Pact)" }
  ],
  hoover: [
    { name: "Henry Stimson", role: "Secretary of State" },
    { name: "Andrew Mellon", role: "Treasury Secretary in the crash years" }
  ],
  truman: [
    { name: "George Marshall", role: "Secretary of State then Defense; the Marshall Plan" },
    { name: "Dean Acheson", role: "Secretary of State and Cold War architect" },
    { name: "Clark Clifford", role: "White House counsel and political strategist" }
  ],
  eisenhower: [
    { name: "John Foster Dulles", role: "Secretary of State of 'massive retaliation'" },
    { name: "Richard Nixon", role: "Active vice president" },
    { name: "Sherman Adams", role: "Powerful White House chief of staff" }
  ],
  nixon: [
    { name: "Henry Kissinger", role: "National security advisor and Secretary of State" },
    { name: "H. R. Haldeman", role: "Chief of staff and gatekeeper" },
    { name: "John Ehrlichman", role: "Chief domestic advisor" },
    { name: "John Mitchell", role: "Attorney General (jailed over Watergate)" }
  ],
  ford: [
    { name: "Henry Kissinger", role: "Secretary of State, carried over from Nixon" },
    { name: "Donald Rumsfeld", role: "Chief of staff, then Secretary of Defense" },
    { name: "Dick Cheney", role: "Chief of staff" },
    { name: "Nelson Rockefeller", role: "Appointed vice president" }
  ],
  carter: [
    { name: "Zbigniew Brzezinski", role: "National security advisor" },
    { name: "Cyrus Vance", role: "Secretary of State (resigned over the Iran raid)" },
    { name: "Walter Mondale", role: "Vice president, redefining the office" }
  ],
  ghwbush: [
    { name: "James Baker", role: "Secretary of State and closest friend" },
    { name: "Brent Scowcroft", role: "National security advisor" },
    { name: "Dick Cheney", role: "Secretary of Defense" },
    { name: "Colin Powell", role: "Chairman of the Joint Chiefs" }
  ],
  clinton: [
    { name: "Al Gore", role: "Consequential vice president" },
    { name: "Robert Rubin", role: "Treasury Secretary of the boom" },
    { name: "Madeleine Albright", role: "First woman Secretary of State" },
    { name: "Hillary Clinton", role: "First Lady who led the health-care push" }
  ],

  // ---------------- 21ST CENTURY ----------------
  gwbush: [
    { name: "Dick Cheney", role: "Unusually powerful vice president" },
    { name: "Donald Rumsfeld", role: "Secretary of Defense" },
    { name: "Colin Powell", role: "Secretary of State" },
    { name: "Condoleezza Rice", role: "National security advisor, then Secretary of State" },
    { name: "Karl Rove", role: "Chief political strategist" }
  ],
  putin: [
    { name: "Nikolai Patrushev", role: "Security Council secretary and hardline silovik" },
    { name: "Sergei Shoigu", role: "Long-serving defense minister" },
    { name: "Dmitry Medvedev", role: "Placeholder president and prime minister" },
    { name: "Yevgeny Prigozhin", role: "Wagner chief who mounted a 2023 mutiny" }
  ],
  obama: [
    { name: "Joe Biden", role: "Vice president and Senate go-between" },
    { name: "Hillary Clinton", role: "Secretary of State (a 'team of rivals' pick)" },
    { name: "Rahm Emanuel", role: "First chief of staff" },
    { name: "David Axelrod", role: "Chief campaign and message strategist" }
  ],
  xi: [
    { name: "Wang Qishan", role: "Enforcer of the anti-corruption campaign" },
    { name: "Wang Huning", role: "Chief ideologist across three leaders" },
    { name: "Li Keqiang", role: "Premier, increasingly sidelined" },
    { name: "Li Qiang", role: "Loyalist premier from 2023" }
  ],
  merkel: [
    { name: "Wolfgang Schäuble", role: "Finance minister of the euro crisis" },
    { name: "Ursula von der Leyen", role: "Long-serving minister, later EU Commission president" },
    { name: "Peter Altmaier", role: "Chief of staff and economics minister" }
  ],
  erdogan: [
    { name: "Ahmet Davutoğlu", role: "Foreign minister and PM (later broke away)" },
    { name: "Ali Babacan", role: "Economic architect (later broke away)" },
    { name: "Berat Albayrak", role: "Son-in-law and finance minister" },
    { name: "Hakan Fidan", role: "Intelligence chief, then foreign minister" }
  ],
  abe: [
    { name: "Yoshihide Suga", role: "Chief cabinet secretary and successor" },
    { name: "Taro Aso", role: "Deputy prime minister and finance minister" },
    { name: "Haruhiko Kuroda", role: "Bank of Japan governor behind Abenomics" }
  ],
  modi: [
    { name: "Amit Shah", role: "Home minister and chief political strategist" },
    { name: "Ajit Doval", role: "National security advisor" },
    { name: "Nirmala Sitharaman", role: "Finance minister" }
  ],
  trump: [
    { name: "Mike Pence", role: "Vice president in the first term" },
    { name: "Steve Bannon", role: "Chief strategist of the 2016 movement" },
    { name: "Jared Kushner", role: "Son-in-law and senior advisor" },
    { name: "JD Vance", role: "Vice president in the second term" }
  ],
  ardern: [
    { name: "Grant Robertson", role: "Finance minister, deputy, and closest ally" },
    { name: "Winston Peters", role: "Coalition partner and foreign minister" },
    { name: "Chris Hipkins", role: "Minister and successor" }
  ],
  zelensky: [
    { name: "Andriy Yermak", role: "Head of the presidential office and right hand" },
    { name: "Valerii Zaluzhnyi", role: "Wartime commander-in-chief (later friction)" },
    { name: "Dmytro Kuleba", role: "Foreign minister of the alliance campaign" }
  ],
  lula: [
    { name: "Dilma Rousseff", role: "Chief of staff and hand-picked successor" },
    { name: "Antonio Palocci", role: "Orthodox finance minister of the first term" },
    { name: "Fernando Haddad", role: "Finance minister of the third term" }
  ],
  taizong: [
    { name: "Wei Zheng", role: "Chief remonstrator — a former enemy kept on to say what others wouldn't" },
    { name: "Fang Xuanling", role: "Chancellor who generated the options" },
    { name: "Du Ruhui", role: "Chancellor who chose among them — the other half of the pair" },
    { name: "Li Jing", role: "Greatest Tang general; destroyed the Eastern Turks" },
    { name: "Empress Zhangsun", role: "Consort and restraining political counsel" }
  ],
  robertbruce: [
    { name: "James Douglas", role: "'Black Douglas' — ran the raiding war; carried Bruce's heart on crusade" },
    { name: "Thomas Randolph", role: "Nephew, Earl of Moray, and independent commander" },
    { name: "Bernard de Linton", role: "Chancellor, associated with the Declaration of Arbroath" }
  ],
  chiang: [
    { name: "Soong Mei-ling", role: "Wife and indispensable envoy to American opinion" },
    { name: "T. V. Soong", role: "Brother-in-law; financier of the Nationalist state" },
    { name: "Chen Cheng", role: "Loyal general and architect of Taiwan's land reform" },
    { name: "Chiang Ching-kuo", role: "Son, security chief, and eventual liberalizing successor" }
  ],
  hueylong: [
    { name: "Seymour Weiss", role: "Hotelier and bagman who ran the machine's money" },
    { name: "Earl Long", role: "Brother, rival, and later governor in his own right" },
    { name: "Gerald L. K. Smith", role: "Preacher who organized Share Our Wealth clubs" },
    { name: "O. K. Allen", role: "Hand-picked governor who signed what he was sent" }
  ],
  rjdaley: [
    { name: "Jacob Arvey", role: "County chairman before him, whose 1948 reform slate (Stevenson, Douglas) gave the machine a respectable face" },
    { name: "Adlai Stevenson II", role: "Governor who made him state revenue director — his step into administration" },
    { name: "William L. Dawson", role: "Congressman and boss of the Black South Side submachine, until Daley subordinated it" },
    { name: "Thomas Keane", role: "Alderman and City Council floor leader who ran the council for him; convicted of mail fraud in 1974" },
    { name: "Vito Marzullo", role: "Committeeman of the 25th Ward — the machine's model precinct deliverer" },
    { name: "Earl Bush", role: "Press secretary for two decades; convicted of mail fraud in 1974" },
    { name: "Michael Bilandic", role: "Alderman chosen as his successor; lost the machine's 1979 primary to Jane Byrne" },
    { name: "Richard M. Daley", role: "Son; mayor of Chicago 1989–2011, longer than his father" }
  ],
  suharto: [
    { name: "Ali Moertopo", role: "Intelligence chief and political fixer of the palace 'Aspri' circle; built Golkar's early machinery" },
    { name: "Widjojo Nitisastro", role: "Head of the 'Berkeley Mafia' economists; architect of the stabilisation and the five-year Repelita plans" },
    { name: "Sarwo Edhie Wibowo", role: "Para-commando commander whom Suharto used in Central Java and Bali in 1965–66" },
    { name: "Leonardus Benny Moerdani", role: "Armed forces commander from 1983 and the regime's security hardliner; a Catholic, so no political threat to Suharto" },
    { name: "Liem Sioe Liong", role: "Businessman and old associate; his Salim Group held state-backed monopolies and partnered the president's children" },
    { name: "Hamengkubuwono IX", role: "Sultan of Yogyakarta and vice-president 1973–78; lent the New Order legitimacy in Java's cultural heartland" },
    { name: "B. J. Habibie", role: "Technology minister for two decades, vice-president from March 1998 and Suharto's successor on 21 May 1998" },
    { name: "Prabowo Subianto", role: "Special-forces officer and then son-in-law; Kostrad commander in May 1998; president of Indonesia since 2024" }
  ],
  parkchunghee: [
    { name: "Kim Jong-pil", role: "Relative by marriage and coup planner; founded the KCIA and the Democratic Republican Party, and was prime minister 1971–75" },
    { name: "Kim Jae-gyu", role: "Military-academy classmate and KCIA director from December 1976; shot him on 26 October 1979 and was hanged in May 1980" },
    { name: "Cha Ji-chul", role: "Chief of the Presidential Security Service from 1974; hardline rival of Kim Jae-gyu, shot dead at the same dinner" },
    { name: "Lee Hu-rak", role: "Presidential chief of staff and later KCIA director; ran the secret 1972 talks with the North and is credited as a chief architect of Yushin" },
    { name: "Park Tae-joon", role: "Founding head of POSCO, the state steel company created in 1968 at the centre of heavy industrialisation" },
    { name: "Chung Ju-yung", role: "Founder of Hyundai; built the Seoul–Busan expressway and the shipyards of the heavy-industry drive — the archetypal favoured chaebol" },
    { name: "Yuk Young-soo", role: "Wife; killed by a stray bullet in the August 1974 assassination attempt" },
    { name: "Park Geun-hye", role: "Daughter; acted as first lady after 1974 and was president of South Korea 2013–17, impeached and removed" }
  ],
  mussolini: [
    { name: "Galeazzo Ciano", role: "Son-in-law (married Edda Mussolini in 1930), head of the press office, then foreign minister 1936–43; voted against him in the Grand Council and was shot at Verona on 11 January 1944" },
    { name: "Dino Grandi", role: "Squadrist leader from Bologna, foreign minister 1929–32 and ambassador in London; author of the Grand Council motion of 24–25 July 1943" },
    { name: "Italo Balbo", role: "One of the four quadrumvirs of the March on Rome, air minister and leader of the transatlantic formation flights, sent to govern Libya in 1933; killed when Italian anti-aircraft guns shot down his plane over Tobruk on 28 June 1940" },
    { name: "Arnaldo Mussolini", role: "Younger brother; ran Il Popolo d'Italia from 1922 until his death in December 1931, and the confidant he trusted most" },
    { name: "Achille Starace", role: "Party secretary 1931–39, who organised the rallies, the uniforms and the rituals of the Duce cult; shot by partisans in April 1945" },
    { name: "Roberto Farinacci", role: "Intransigent squadrist boss of Cremona, party secretary 1925–26, removed when his radicalism became a liability" },
    { name: "Giovanni Gentile", role: "Philosopher and education minister 1922–24; drafted the philosophical part of the 1932 'Doctrine of Fascism' published under Mussolini's name" },
    { name: "Victor Emmanuel III", role: "King of Italy; appointed him in October 1922 and dismissed him on 25 July 1943 — the one power the regime never removed" },
    { name: "Pietro Badoglio", role: "Army chief of staff and commander who took Addis Ababa in 1936; succeeded him as head of government in July 1943" }
  ],
  berlusconi: [
    { name: "Fedele Confalonieri", role: "School friend and bandmate from the 1950s; ran the television business for decades and chaired Mediaset" },
    { name: "Marcello Dell'Utri", role: "Head of Publitalia and co-founder of Forza Italia, whose sales managers he turned into the party's first organisers; definitively convicted in 2014 of external association with the Mafia" },
    { name: "Gianni Letta", role: "Former newspaper editor; undersecretary to the prime minister's office in all four governments and his envoy to the Vatican, the Quirinale and the opposition" },
    { name: "Giulio Tremonti", role: "Economy minister in 2001–04, 2005–06 and 2008–11; the coalition's link to the Northern League and the brake on its spending promises" },
    { name: "Umberto Bossi", role: "Leader of the Northern League; brought down the first government in December 1994, then returned as an ally from 2000 and served as a minister in the second and fourth governments" },
    { name: "Gianfranco Fini", role: "Leader of the post-fascist National Alliance, deputy prime minister and foreign minister; merged his party into the People of Freedom in 2009 and broke with Berlusconi in 2010" },
    { name: "Cesare Previti", role: "Fininvest lawyer and defence minister in 1994; definitively convicted in May 2006 of bribing judges in the IMI-SIR case" },
    { name: "Angelino Alfano", role: "Justice minister from 2008 and party secretary from 2011, the designated heir who broke away in November 2013 to found the New Centre-Right" }
  ],
  franco: [
    { name: "Luis Carrero Blanco", role: "Naval officer; under-secretary of the presidency from 1941, minister from 1951, vice-president from 1967 and prime minister from June 1973 — the indispensable aide, killed by an ETA bomb in Madrid on 20 December 1973" },
    { name: "Ramón Serrano Suñer", role: "Brother-in-law (the 'cuñadísimo'); interior minister 1938–40 and foreign minister 1940–42, builder of the single party's institutions; dropped in September 1942 after the Begoña incident" },
    { name: "Emilio Mola", role: "The 'director' of the July 1936 military conspiracy, commander in the north; killed in an air crash on 3 June 1937, leaving Franco without a rival among the generals" },
    { name: "Nicolás Franco", role: "Elder brother; ran his political secretariat in 1936–37 and was ambassador to Portugal from 1938 to 1957" },
    { name: "Carmen Polo", role: "Wife from 1923; a presence at El Pardo whose circle and family connections shaped the court of his later years" },
    { name: "Agustín Muñoz Grandes", role: "Commander of the Blue Division in Russia 1941–42, army minister 1951–57 and vice-president 1962–67" },
    { name: "Alberto Martín-Artajo", role: "Catholic Action leader brought in as foreign minister in 1945 to give the regime a Catholic rather than a fascist face; negotiated the 1953 Concordat" },
    { name: "Laureano López Rodó", role: "Opus Dei-linked technocrat; ran the development plans from 1962 and, with Carrero Blanco, steered the choice of Juan Carlos as successor" },
    { name: "Manuel Fraga", role: "Minister of information and tourism 1962–69; author of the 1966 Press Law, which replaced prior censorship with penalties after publication" },
    { name: "Juan Carlos de Borbón", role: "Educated in Spain under Franco's supervision from 1948, named his successor on 22 July 1969, king on 22 November 1975 — and the man who dismantled the regime" }
  ],
  salazar: [
    { name: "Óscar Carmona", role: "General and president of the republic 1926–51; appointed him finance minister in 1928 and prime minister in 1932, and kept the army behind him" },
    { name: "Manuel Gonçalves Cerejeira", role: "Friend and fellow Catholic activist from Coimbra; Cardinal Patriarch of Lisbon 1929–71" },
    { name: "António Ferro", role: "Journalist whose 1932 interviews made Salazar's public image; director of the Secretariat of National Propaganda (SPN, later SNI) 1933–49" },
    { name: "Duarte Pacheco", role: "Minister of public works 1932–36 and 1938–43, builder of the regime's roads, stadium and Lisbon works; killed in a car crash in 1943" },
    { name: "Fernando Santos Costa", role: "Army officer; under-secretary and then minister of war 1936–58, Salazar's guarantor inside the army" },
    { name: "Marcelo Caetano", role: "Coimbra-trained law professor and architect of corporative law; colonies minister 1944–47, minister of the presidency 1955–58, and his successor in September 1968" },
    { name: "Américo Tomás", role: "Admiral; navy minister 1944–58, president of the republic 1958–74, who replaced him with Caetano in 1968" },
    { name: "Alberto Franco Nogueira", role: "Foreign minister 1961–69, defender of the African policy at the UN, and later author of a six-volume biography" },
    { name: "Maria de Jesus Caetano Freire", role: "Housekeeper from his Coimbra years who ran the São Bento household for the rest of his life" },
    { name: "Humberto Delgado", role: "Air force general and former regime official who ran against the regime's candidate in 1958 ('Obviously, I'll sack him' — of Salazar); murdered by PIDE agents in Spain in 1965" }
  ],
  pinochet: [
    { name: "Gustavo Leigh", role: "Air force commander and junta member from 1973; pressed hardest for the coup, then clashed with Pinochet over the junta's direction and the 1978 'consulta', and was forced out on 24 July 1978" },
    { name: "José Toribio Merino", role: "Navy commander who fixed the date of the coup and sat on the junta from 1973 to 1990, overseeing much of its economic legislation" },
    { name: "César Mendoza", role: "Director of the Carabineros and junta member 1973–85; resigned after the 'degollados' case, the murder of three Communists by Carabineros" },
    { name: "Fernando Matthei", role: "Air force commander and junta member 1978–90; on the night of the 1988 plebiscite told reporters arriving at La Moneda that the No had won" },
    { name: "Manuel Contreras", role: "Army officer who headed DINA from 1973 to 1977, answering to Pinochet personally; convicted for the Letelier and Prats murders, and serving sentences totalling more than 500 years when he died in 2015" },
    { name: "Sergio de Castro", role: "Chicago-trained economist; economy minister from 1975 and finance minister 1976–82, architect of the opening and of the fixed exchange rate that broke in 1982" },
    { name: "Jaime Guzmán", role: "Lawyer and leader of the gremialista movement; the regime's chief constitutional thinker and a principal designer of the 1980 constitution; assassinated by the FPMR on 1 April 1991" },
    { name: "José Piñera", role: "Labour and then mining minister; author of the 1979 Plan Laboral and of the 1980 reform that moved pensions into private individual accounts (the AFPs)" },
    { name: "Hernán Büchi", role: "Finance minister 1985–89, who managed the recovery after the crash; the regime's candidate in the 1989 presidential election" },
    { name: "Sergio Fernández", role: "Interior minister 1978–82 and 1987–88, who managed the government's side of the 1988 plebiscite" },
    { name: "Lucía Hiriart", role: "Wife from 1943; head of the CEMA-Chile network of mothers' centres, the regime's social face" },
    { name: "Carlos Prats", role: "His predecessor as army commander, who recommended him to Allende; murdered with his wife by a DINA car bomb in Buenos Aires on 30 September 1974" }
  ],
  peron: [
    { name: "Eva Perón", role: "Wife from 1945; ran the Eva Perón Foundation (1948) and the Peronist Women's Party (1949), received union delegations and petitioners at the Labour Secretariat, and was the movement's most powerful voice until her death on 26 July 1952" },
    { name: "Domingo Mercante", role: "Army officer and his right hand at the Labour Secretariat in 1943–45, the link to the union leaders; governor of Buenos Aires province 1946–52, then dropped" },
    { name: "Cipriano Reyes", role: "Meatpackers' leader who helped bring the workers to the Plaza on 17 October 1945 and founded the Labour Party that elected Perón; resisted its absorption into the Peronist party and was jailed from 1948 to 1955" },
    { name: "Miguel Miranda", role: "Industrialist who ran economic policy from the central bank and the IAPI in 1946–49, until the reserves ran out" },
    { name: "Ramón Carrillo", role: "Neurosurgeon; health secretary and then minister 1946–54, who led a large hospital-building programme and the campaigns against endemic disease" },
    { name: "Raúl Apold", role: "Head of the information undersecretariat — press, radio, newsreels and propaganda — from 1949 to 1955" },
    { name: "John William Cooke", role: "Peronist deputy, named by Perón in 1956 as his delegate in Argentina and his successor in case of death; led the early resistance and moved to the revolutionary left" },
    { name: "Augusto Vandor", role: "Metalworkers' (UOM) leader who built the union machine of the 1960s and flirted with 'Peronism without Perón', which Perón undermined from Madrid; murdered in 1969" },
    { name: "Héctor Cámpora", role: "Personal delegate from 1971 and president from 25 May to 13 July 1973 under the slogan 'Cámpora to government, Perón to power'; resigned to make way for him" },
    { name: "José López Rega", role: "Former police corporal and astrologer; his secretary in Madrid, minister of social welfare 1973–75 and organiser of the Triple A death squads" },
    { name: "Isabel Perón", role: "Third wife (married 1961), his envoy to Argentina in 1965, vice-president from 1973 and his successor on his death; overthrown on 24 March 1976" },
    { name: "José Ignacio Rucci", role: "CGT secretary-general and pillar of the union right; murdered on 25 September 1973, two days after Perón's election" }
  ],
  asquith: [
    { name: "Margot Asquith", role: "Second wife (married 1894); hostess, diarist and fierce partisan, whose indiscretions were a political liability and whose diaries are a principal source" },
    { name: "Venetia Stanley", role: "Confidante to whom he wrote some 560 letters in 1912–15, some during cabinet meetings, sharing war secrets; her engagement to Edwin Montagu in May 1915 devastated him" },
    { name: "David Lloyd George", role: "Chancellor 1908–15 and author of the People's Budget; Minister of Munitions and War Secretary, then the rival who replaced him in December 1916" },
    { name: "Winston Churchill", role: "President of the Board of Trade, Home Secretary and First Lord of the Admiralty under him (1908–15); demoted after the Dardanelles as a price of the 1915 coalition" },
    { name: "Sir Edward Grey", role: "Foreign Secretary throughout (1905–16); his Liberal Imperialist ally of the 1890s and the minister who took Britain into war" },
    { name: "R. B. Haldane", role: "His oldest political friend; War Secretary 1905–12, who created the Expeditionary Force and the Territorials, then Lord Chancellor — dropped in May 1915 after a press campaign against his supposed German sympathies" },
    { name: "Reginald McKenna", role: "First Lord of the Admiralty, Home Secretary and Chancellor (1915–16); the Asquithian loyalist most opposed to Lloyd George" },
    { name: "Edwin Montagu", role: "Protégé and minister who married Venetia Stanley in 1915; later moved toward Lloyd George" },
    { name: "Maurice Bonham Carter", role: "Principal private secretary 1910–16, and from 1915 his son-in-law through his daughter Violet" },
    { name: "Lord Kitchener", role: "Secretary of State for War from August 1914 until his death in June 1916; the national icon Asquith could neither manage nor remove" },
    { name: "John Redmond", role: "Leader of the Irish Parliamentary Party, whose votes kept the government in office after 1910 and whose price was Home Rule" },
    { name: "Andrew Bonar Law", role: "Conservative leader from 1911 and fierce opponent over Ulster; Colonial Secretary in the 1915 coalition, whose shift to Lloyd George in December 1916 decided Asquith's fall" }
  ],
  lloydgeorge: [
    { name: "Frances Stevenson", role: "Secretary from 1913 and long-term mistress, whose diary is a major source; his second wife from 1943" },
    { name: "Margaret Lloyd George", role: "Wife from 1888; kept the family home and his constituency base in Criccieth and North Wales" },
    { name: "Andrew Bonar Law", role: "Conservative leader and Chancellor 1916–19; the partner who made his premiership possible and whose return in 1922 helped end it" },
    { name: "Maurice Hankey", role: "Secretary of the War Cabinet from December 1916 and creator of the Cabinet Secretariat — agendas, minutes and follow-up for the first time" },
    { name: "Philip Kerr", role: "Private secretary 1916–21 and a leading member of the 'Garden Suburb', especially on foreign and imperial policy; later Lord Lothian" },
    { name: "Lord Milner", role: "War Cabinet member from 1916 and War Secretary in 1918; the imperial administrator he brought in to strengthen the war machine" },
    { name: "Winston Churchill", role: "Friend and ally from the radical years; Minister of Munitions (1917), War and Air Secretary (1919–21) and Colonial Secretary (1921–22) in his governments" },
    { name: "Lord Riddell", role: "Owner of the News of the World, golfing companion and confidant; his diaries record Lloyd George's private talk" },
    { name: "Lord Beaverbrook", role: "Press baron who helped broker the December 1916 crisis; Minister of Information in 1918" },
    { name: "Lord Northcliffe", role: "Owner of The Times and the Daily Mail; ally against Asquith, then enemy after 1918" },
    { name: "Freddie Guest", role: "Coalition Liberal chief whip 1917–21, who ran the party's finances during the years of honours sales" },
    { name: "Christopher Addison", role: "Lieutenant at the Ministry of Munitions and first Minister of Health (1919–21), whose housing programme was cut back and who was dropped in 1921" }
  ],
  baldwin: [
    { name: "Lucy Baldwin", role: "Wife from 1892; campaigner for maternity care and safer childbirth, and his constant companion on holidays and walks" },
    { name: "J. C. C. Davidson", role: "Parliamentary private secretary and confidant; Conservative Party chairman 1926–30, who modernised Central Office" },
    { name: "Thomas Jones", role: "Deputy Secretary to the Cabinet 1916–30, who drafted many of his speeches and was his link to Labour and Welsh opinion" },
    { name: "Neville Chamberlain", role: "Minister of Health 1924–29 and Chancellor 1931–37; the administrator of his governments and his successor" },
    { name: "Ramsay MacDonald", role: "Labour prime minister whose National Government Baldwin joined in 1931 as Lord President, holding its majority while MacDonald held the title" },
    { name: "Winston Churchill", role: "Chancellor of the Exchequer 1924–29, who returned sterling to gold in 1925 and edited the British Gazette in the General Strike; later his critic over India and rearmament" },
    { name: "Rudyard Kipling", role: "First cousin and lifelong friend, who supplied the 'harlot' line of 1931" },
    { name: "Lord Beaverbrook", role: "Owner of the Daily Express, whose Empire Crusade tried to unseat him in 1929–31" },
    { name: "Lord Rothermere", role: "Owner of the Daily Mail, Beaverbrook's ally against him in 1929–31" },
    { name: "Lord Irwin (Edward Wood)", role: "Viceroy of India 1926–31, whose policy of eventual dominion status for India he defended against the party's right" },
    { name: "Samuel Hoare", role: "Secretary of State for India and then Foreign Secretary, sacrificed over the Hoare–Laval pact in December 1935" },
    { name: "Geoffrey Dawson", role: "Editor of The Times, his ally in managing the abdication crisis of 1936" }
  ],
  attlee: [
    { name: "Ernest Bevin", role: "Minister of Labour in the war coalition and Foreign Secretary 1945–51; the ally whose refusal to stand against him defeated every plot" },
    { name: "Herbert Morrison", role: "Lord President and Leader of the House who steered the nationalisation programme — and the rival who tried to take the leadership on the day of victory in 1945" },
    { name: "Hugh Dalton", role: "Chancellor 1945–47; resigned in November 1947 after disclosing budget details to a journalist before the speech" },
    { name: "Stafford Cripps", role: "Board of Trade, then Minister for Economic Affairs and from November 1947 Chancellor — the austere planner of the devaluation years, who in September 1947 had asked Attlee to stand aside for Bevin" },
    { name: "Aneurin Bevan", role: "Minister of Health who founded the National Health Service in 1948; resigned in April 1951 over charges for teeth and spectacles" },
    { name: "Hugh Gaitskell", role: "Chancellor from 1950 whose rearmament budget provoked Bevan's resignation; Attlee's successor as leader in 1955" },
    { name: "Harold Wilson", role: "President of the Board of Trade at thirty-one in 1947; resigned with Bevan in 1951" },
    { name: "Arthur Greenwood", role: "Deputy leader from 1935, member of Churchill's war cabinet in 1940–42, and Lord Privy Seal 1945–47" },
    { name: "Winston Churchill", role: "The wartime chief he served as deputy prime minister, and his opponent in the elections of 1945, 1950 and 1951" },
    { name: "Lord Mountbatten", role: "Last Viceroy of India, sent out in 1947 with a deadline to transfer power" },
    { name: "Norman Brook", role: "Cabinet Secretary from 1947, who ran the committee system the government depended on" },
    { name: "Violet Attlee", role: "Wife; drove him around the country in the 1945 campaign and to the Palace to take office" }
  ],
  macmillan: [
    { name: "R. A. Butler", role: "Rival for the succession in 1957 and again in 1963; Home Secretary and the government's domestic manager" },
    { name: "Selwyn Lloyd", role: "Foreign Secretary 1955–60 and Chancellor 1960–62; sacked in the Night of the Long Knives" },
    { name: "Peter Thorneycroft", role: "Chancellor who resigned with his Treasury ministers, Enoch Powell and Nigel Birch, in January 1958 over public spending" },
    { name: "Iain Macleod", role: "Colonial Secretary 1959–61 who accelerated independence in Africa" },
    { name: "Duncan Sandys", role: "Defence Secretary whose 1957 white paper ended national service and bet on nuclear deterrence" },
    { name: "Edward Heath", role: "Lord Privy Seal who negotiated the first application to the European Economic Community, 1961–63" },
    { name: "Ernest Marples", role: "Junior minister in the housing drive of 1951–54 and later Minister of Transport" },
    { name: "Alec Douglas-Home", role: "Foreign Secretary from 1960, and the successor Macmillan helped choose in October 1963" },
    { name: "Dwight D. Eisenhower", role: "Wartime colleague at Algiers and, as president, the partner with whom he repaired the alliance after Suez" },
    { name: "John F. Kennedy", role: "The president with whom he made the Nassau agreement on Polaris in December 1962" },
    { name: "Harold Evans", role: "Press secretary at Downing Street, 1957–64" },
    { name: "Philip de Zulueta", role: "Private secretary for foreign affairs in the small private office on which he relied" }
  ],
  blair: [
    { name: "Gordon Brown", role: "Chancellor for all ten years, partner in the New Labour project and rival for its leadership; succeeded him in 2007" },
    { name: "Alastair Campbell", role: "Press secretary and then director of communications, 1994–2003; ran the grid, the rebuttal operation and the lobby" },
    { name: "Peter Mandelson", role: "Strategist of the 1997 campaign; twice resigned from cabinet and twice brought back" },
    { name: "Jonathan Powell", role: "Chief of staff for the whole premiership and chief negotiator in Northern Ireland" },
    { name: "Philip Gould", role: "Pollster and strategist whose focus groups and memos shaped New Labour's message" },
    { name: "Anji Hunter", role: "Gatekeeper and adviser from his earliest days in politics until 2001" },
    { name: "Sally Morgan", role: "Political secretary and later director of government relations at Number 10" },
    { name: "John Prescott", role: "Deputy prime minister and the link to Labour's traditional base" },
    { name: "Derry Irvine", role: "Head of the chambers where he trained, and his Lord Chancellor 1997–2003" },
    { name: "Michael Barber", role: "Head of the Prime Minister's Delivery Unit, 2001–05" },
    { name: "Robin Cook", role: "Foreign Secretary 1997–2001; resigned from the cabinet in March 2003 over Iraq" },
    { name: "George W. Bush", role: "The president with whom he went to war in Afghanistan and Iraq" }
  ],
  goh: [
    { name: "Lee Kuan Yew", role: "Predecessor, retained in his cabinet as Senior Minister" },
    { name: "Lee Hsien Loong", role: "Deputy, groomed successor, and the founder's son" },
    { name: "Tony Tan", role: "Deputy prime minister across the crisis years" }
  ],
  kissinger: [
    { name: "Richard Nixon", role: "The principal — an intensely co-dependent partnership" },
    { name: "Gerald Ford", role: "Second principal, who kept him on at State" },
    { name: "Alexander Haig", role: "Deputy, then Nixon's last chief of staff" },
    { name: "Zhou Enlai", role: "Counterpart in the secret opening to Beijing" },
    { name: "Anatoly Dobrynin", role: "Soviet ambassador and the détente back-channel" }
  ],
  biden: [
    { name: "Kamala Harris", role: "Vice president" },
    { name: "Antony Blinken", role: "Secretary of State" },
    { name: "Jake Sullivan", role: "National security advisor" },
    { name: "Ron Klain", role: "First chief of staff" }
  ]
};
