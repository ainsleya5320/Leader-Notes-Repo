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
  disraeli: [
    { name: "Lord Derby", role: "Party leader and three-time prime minister above him" },
    { name: "Montagu Corry", role: "Private secretary and gatekeeper" }
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
