// ============================================================
// ESSAYS — long-form analytical pieces, keyed by leader id
// ============================================================
// Each leader can carry one or more essays. They render in their
// own "Essays" section on the leader's profile, collapsed by
// default. `body` is light Markdown: "## " headings, paragraphs,
// "- " bullets, "1. " numbered lists, pipe tables, **bold**, *italic*.
// An optional `also: [ids]` shows the essay on those leaders' pages too.
// ============================================================

window.ESSAYS = {

  jcaesar: [
    {
      title: "Caesar's Power: Gaul and Beyond",
      dek: "How he governed Gaul, handled its nobles, saw other peoples, staffed his army, and kept the province quiet through the civil war — and what changed when he turned the same toolkit on Rome.",
      date: "2026-10-02",
      body: `## The short version

Caesar treated power as a personal balance sheet: every pardon, gift, seat, and grant of citizenship was a loan of gratitude owed to him, and every betrayal was a default to be punished in public. In Gaul that model worked brilliantly, because Gallic politics already ran on patrons, clients, and armed retinues. In Rome it got him killed, because his peers read the same generosity as a master's condescension.

**A caveat on sources.** Most of what we know about Gaul comes from Caesar's own *Commentaries*, which are campaign journalism written to be read aloud in Rome by voters and senators. They are precise about logistics and suspiciously vague about anything that makes him look bad. Book 8 is by his officer Aulus Hirtius; the *Civil War* is again Caesar. Suetonius, Plutarch, Appian, and Cassius Dio write a century or more later, and Cicero's letters give the best contemporary view from Rome. Treat every number below as approximate, and every motive as reconstructed.

## What "governing Gaul" actually meant

Legally, Caesar governed three provinces from 58 to 50 BC: Cisalpine Gaul (northern Italy), Illyricum (the Dalmatian coast), and Transalpine Gaul (roughly Provence and Languedoc, the old "Province"). Everything else he fought over, *Gallia Comata* or "long-haired Gaul," was never formally organized by him. Augustus did that around 27 BC, creating the Three Gauls.

So for most of the decade, Caesar's "government" of free Gaul was really a protection racket run by an army. He wintered his legions among the tribes (feeding them at Gallic expense), held annual assizes in Cisalpine Gaul, took hostages from every significant state, and summoned the leading men of Gaul to councils where he announced decisions and heard disputes. He worked through the existing *civitates* (tribal states like the Aedui, Remi, Sequani, Arverni) rather than replacing them. Those same units later became the civic districts of Roman Gaul, and many survive as French dioceses and city names (Paris from the Parisii, Reims from the Remi).

The real settlement came at the end, in 51–50 BC. Hirtius says Caesar spent his last winter in Gaul with one goal: leave no state with a reason or a hope for war as he departed. He addressed the states with honor, gave large gifts to their leading men, and imposed no new burdens. Suetonius gives the tribute as 40 million sesterces a year, billed as a "stipend" rather than a conqueror's levy. That is a meaningful sum but modest for a region of several million people that had just been stripped of its temple gold.

The pattern is worth noticing: heavy coercion while the outcome was in doubt, then a deliberately light hand once it wasn't. Caesar understood that a settlement is only as durable as the incentives of the people who have to live under it.

## How he handled Gallic nobles

Caesar's core technique was to pick a winner in every tribe's internal feud and make that winner owe him. He says so himself, more or less: in his ethnographic digression (BG 6.11) he notes that factions run through every Gallic state, village, and even household, each led by a great man whose clients look to him for protection. He did not need to invent divide-and-rule. He just had to buy into a market that already existed.

| Noble | Tribe | What Caesar did | How it ended |
| --- | --- | --- | --- |
| Diviciacus | Aedui | Made him his chief Gallic intermediary; pardoned his brother Dumnorix at his request (58 BC) | Stayed loyal; the model client |
| Dumnorix | Aedui | Watched him, then forced him to come on the Britain expedition | Fled in 54 BC, shouting that he was a free man of a free state; cut down on Caesar's orders |
| Ariovistus | Suebi (German) | As consul in 59, had him recognized as "king and friend" of Rome | Defeated by Caesar in 58 when he became an obstacle |
| Commius | Atrebates | Installed him as king; sent him as envoy to Britain | Joined Vercingetorix in 52; survived a Roman assassination attempt; surrendered on condition he never again see a Roman |
| Tasgetius | Carnutes | Restored him to his ancestors' throne | Murdered by his own people in his third year |
| Cingetorix vs Indutiomarus | Treveri | Backed the pro-Roman son-in-law over the father-in-law | Indutiomarus revolted and was killed (53 BC) |
| Convictolitavis vs Cotus | Aedui | In 52 BC personally adjudicated a disputed election under Aeduan law, ruling for Convictolitavis | Convictolitavis took the Aedui into Vercingetorix's revolt within months |
| Vercingetorix | Arverni | Dio says he had once been Caesar's friend | Led the great revolt; held six years, paraded in the triumph of 46 BC, then executed |

Two lessons jump out. First, Caesar's interventions were legalistic when it suited him: he went out of his way to rule on the Aeduan election by Aeduan constitutional rules, because legitimacy in the client's own terms was worth more than a bare appointment. Second, gratitude in Gaul had a short half-life. The men he made were also the men best placed to lead a revolt, and several did.

**Mercy and terror were one policy, not two.** Caesar's famous *clementia* was real, but it was the clemency of someone who had already demonstrated he could annihilate you. The record is grim:

- **57 BC, Atuatuci:** after a surrender followed by a night attack, he sold about 53,000 people into slavery.
- **56 BC, Veneti:** for detaining Roman envoys, he executed their entire council and sold the rest.
- **55 BC, Usipetes and Tencteri:** he attacked two German tribes during a negotiation and massacred them, women and children included. Cato proposed in the Senate that Caesar be handed over to the Germans as a war criminal.
- **53 BC, Eburones:** after they destroyed fifteen cohorts, he invited neighboring tribes to plunder them, aiming to erase the tribe's very name.
- **52 BC, Avaricum:** of roughly 40,000 inside, Caesar says barely 800 escaped.
- **51 BC, Uxellodunum:** he cut off the hands of every man who had borne arms, and Hirtius explains why: Caesar's leniency was so well known that no one would think it cruelty, and the mutilated survivors would be walking advertisements.

Plutarch claims a million killed and a million enslaved over the war; Pliny gives 1,192,000 dead. Those figures are inflated triumph-boasts, but even halving them, this was one of the most destructive conquests in ancient history. The calibration was cold and explicit: forgive the first defeat, destroy the oath-breaker, and make the punishment visible.

## What he thought of other peoples

Caesar was not a racist in the modern sense, because Romans did not think in terms of biological race. He was something more flexible and arguably more useful to an empire-builder: a civilizational chauvinist who believed almost anyone could be made Roman, and that it was his job to decide who.

**The ethnography is strategic.** The famous opening of the *Gallic War* ranks the peoples of Gaul, and says the Belgae are the bravest because they live farthest from the refinements of the Province and traders rarely bring them the luxuries that soften men's spirits. That cuts both ways: civilization is superior, but it corrupts courage. His set-piece comparison of Gauls and Germans (Book 6) does similar work. Gauls are portrayed as politically sophisticated, priest-ridden, and factional; Germans as austere, warlike, and barely agricultural. Many scholars think Caesar essentially invented the clean Rhine boundary between "Gaul" and "Germany," because a neat frontier made his conquest look complete and his stopping point look natural.

**The stereotypes are justifications.** He repeatedly calls the Gauls fickle, quick to make plans, and hungry for revolution. Every time a tribe wavers, that trait explains it, and it conveniently explains why Roman supervision is necessary. Meanwhile his portraits of the Germans include an animal that sleeps leaning against trees because it has no knee joints, which hunters catch by sawing the trees nearly through. Even great generals copy from bad travel writers.

**He respected courage, and said so.** He gives the Nervii, who nearly destroyed his army at the Sambre in 57 BC, a genuinely admiring passage, and he lets Vercingetorix speak with dignity. This was partly literary: a worthy enemy makes a bigger victory.

**In practice, he integrated elites aggressively.** This is where Caesar was unusual by Roman standards:

- He enfranchised the Transpadane Gauls of northern Italy in 49 BC, a cause he had championed for twenty years.
- He raised a legion, the *Alaudae* ("Larks"), from Transalpine Gauls and later gave all of them citizenship.
- His right-hand money man, Lucius Cornelius Balbus, was a Spaniard from Gades; Balbus later became the first foreign-born consul.
- As dictator he put Gauls into the Senate. Romans responded with mocking verses about Gauls swapping their trousers for the senator's purple stripe, and joke placards asking that nobody show the new senators the way to the Senate house.

So the honest answer is: contempt for the generic "barbarian," admiration for individual courage, and a strikingly open door for any provincial grandee who would become his man. Integration was not tolerance for its own sake. It was a way of converting conquered aristocracies into personal clients.

## How Gallic was his army?

Best estimate: his cavalry was almost entirely Gallic and German, one legion was raised from Transalpine Gauls, and the bulk of his legionaries were Celtic-descended northern Italians. No muster rolls survive, so everything here is inference from the narrative.

**The legions.** Caesar started in 58 BC with four legions (VII–X) and grew to roughly ten by 52, raising most of the new ones in Cisalpine Gaul. The Transpadanes north of the Po held Latin rights, not full citizenship, until 49 BC, so Caesar was very likely enrolling men who were not technically citizens and treating them as if they were. Ethnically, many were descendants of Celts settled in the Po valley for centuries. His "Roman" army was, in a real sense, a Gallic-Italian frontier army.

The one clear case of Transalpine natives in a legion is the *Alaudae*, later Legio V. Suetonius says Caesar raised it at his own expense, trained and armed it Roman-style, and later gave the whole unit citizenship. The date is disputed, anywhere from the mid-50s to 49 BC.

**The cavalry.** Here the Gallic share was dominant. In 58 BC he had about 4,000 horse drawn from the Province, the Aedui, and their allies. From 52 BC he increasingly hired German cavalry from across the Rhine, and rated them so highly he remounted them on his own officers' horses. When he marched to Spain in 49 BC, he took the 3,000 cavalry that had served in all his previous wars plus an equal number newly raised in Gaul, with the noblest and bravest men summoned by name. At Pharsalus in 48 BC his roughly 1,000 horse were largely Gallic and German.

**A rough proportion.** On a field army of ten legions at realistic strength (perhaps 35,000–40,000 men) plus 4,000–6,000 cavalry and light troops, Transalpine Gauls might have been 10–20% of the total. If you count the Cisalpine recruits as Gauls, as a Roman snob of the time might have, the figure goes past half. The other auxiliaries were specialists from elsewhere: Cretan archers, Balearic slingers, Numidian light troops.

**The cautionary tale.** Two Allobrogian brothers, Roucillus and Egus, commanded Gallic horse for Caesar. He had given them top offices in their home state, extraordinary Senate seats there, land confiscated from enemies, and money. In 48 BC, caught embezzling their troopers' pay, they defected to Pompey with their followers. Patronage bought loyalty only as long as it stayed the best deal available.

## Why Gaul stayed quiet during the civil war

Gaul stayed mostly quiet from 49 to 44 BC for five reasons that reinforced each other. "Mostly" matters: the Bellovaci rose in 46 BC and were put down by Decimus Brutus, Caesar's governor. But there was no second Vercingetorix while Caesar was fighting in Spain, Greece, Egypt, and Africa, which is remarkable for a country conquered barely two years earlier.

1. **Exhaustion.** Eight years of war had killed or enslaved a huge share of the fighting population, burned the harvests of rebel tribes, and drained the temple treasuries. Alesia and Uxellodunum had shown what happened to the last big coalition. Most of the men capable of leading a revolt were dead, captive, or in exile.
2. **A settlement designed to be tolerable.** The 51–50 BC terms (honor for the states, gifts for the chiefs, no new burdens, a modest tribute) gave the surviving elites more to lose from revolt than to gain. Caesar wrote the peace for the specific purpose of leaving.
3. **Exporting the warrior class.** This is the cleverest move. By recruiting young Gallic nobles and their retinues as cavalry, summoned by name, he removed precisely the men who would have led a rising and gave them pay, loot, and prestige in his service. They were simultaneously soldiers, clients, and hostages for their tribes' good behavior.
4. **Loyalty to Caesar, not to Rome.** The pro-Roman factions now running the tribes owed their position to him personally. A Pompeian victory threatened them as much as it threatened Caesar. Pompey, meanwhile, had no Gallic constituency and fought from Spain and the East.
5. **Visible punishment nearby.** Massilia, the old Greek ally on the coast, backed Pompey in 49 BC. Caesar besieged it, and it lost its fleet, its treasury, and much of its territory. Every Gallic leader watched what happened to the one local power that chose the wrong side.

Underneath all five is money. Caesar sold Gallic gold in such quantity that, Suetonius says, its price in Italy fell to 3,000 sesterces a pound. Gaul financed the army, paid off Roman politicians like the tribune Curio, and funded his building programme. A province that pays for your war is one you take great care to keep calm.

## Elsewhere: Spain, the East, and Rome

Outside Gaul, the same instincts show up in a more administrative register: fix the debt problem, cut out the middlemen, reward the communities that backed you, and plant settlers.

**Further Spain (61–60 BC).** As governor he fought the Lusitanians for loot and glory, partly to pay his own spectacular debts. His most interesting act was a debt settlement: creditors were to take two-thirds of a debtor's annual income until the debt was paid, and the debtor kept the rest. Rather than cancel debts or let creditors seize everything, he set up a structured workout that kept both sides solvent and grateful. Gades (Cádiz) became a lasting power base, and it gave him Balbus.

**Egypt, Asia, and Judaea (48–47 BC).** He settled the Egyptian succession in favor of Cleopatra and left legions to guarantee it. In Asia, by the account of Appian and Dio, he took direct-tax collection away from the Roman tax-farming companies and reduced the burden, likely by about a third. That move undercut a lucrative Roman business interest in favor of provincial goodwill. He rewarded Hyrcanus and Antipater in Judaea for their help in Egypt with confirmed rule and privileges, including exemption from billeting troops. Josephus preserves decrees protecting Jewish communities' right to assemble across the diaspora.

**Rome (49–44 BC).** As dictator, his measures read like a crisis manager's checklist:

- **Debt (49 BC):** property to be valued at pre-war prices for repaying creditors, and interest already paid deducted from principal. Suetonius estimates this wiped out about a quarter of outstanding debt. He also limited how much cash anyone could hoard, to push money back into circulation.
- **Colonies:** about 80,000 citizens resettled overseas, including at Carthage and Corinth, two cities Rome had destroyed in 146 BC.
- **Citizenship:** extended to whole communities and to doctors and teachers practicing in Rome.
- **The calendar:** the Julian calendar, a 365-day year with a leap day, from 45 BC.
- **Clemency for Roman enemies:** he pardoned Pompeians wholesale, including Brutus and Cassius. In a letter preserved by Cicero, he described mercy and generosity as a new method of conquest.

## The toolkit that won Gaul and lost Rome

Put the pieces together and Caesar's theory of power looks like this: power is personal, it is held through obligation, and obligation is created by a carefully priced mix of generosity and demonstrated ruthlessness. He picked winners inside existing structures rather than tearing them down, he paid people in the currency they valued (land, office, citizenship, a share of loot), and he made defectors into public examples.

In Gaul this fit the terrain almost perfectly. Gallic aristocrats already lived inside patron-client hierarchies; becoming Caesar's client was a familiar move up the ladder, and his clemency read as a great lord's generosity. Even the failures (Dumnorix, Commius, Convictolitavis) were failures within a system the Gauls understood.

In Rome the same moves were poison. A Roman noble's whole identity rested on *dignitas*, the standing of an equal among equals. Being pardoned by Caesar meant admitting he had the right to decide whether you lived. Cato killed himself in 46 BC rather than accept that gift, and many of the men Caesar spared were among the men who stabbed him. Suetonius records a jibe that Sulla had not known his political ABCs when he resigned the dictatorship. Caesar never resigned; he became dictator for life in early 44 BC and was dead within weeks.

The nuance worth keeping is that Caesar was neither a genocidal brute nor an enlightened integrator. He was both, deliberately, depending on what the situation would pay. His great blind spot was assuming that a method that works on clients will also work on peers.

## Further reading

- Caesar, *The Gallic War* and *The Civil War*. Read *The Landmark Julius Caesar* (ed. Kurt Raaflaub, 2017) for maps and excellent appendices.
- Suetonius, *Divus Julius*; Plutarch, *Life of Caesar*; Cassius Dio, books 38–44.
- Adrian Goldsworthy, *Caesar: Life of a Colossus* (2006). The best modern military-political biography.
- Christian Meier, *Caesar* (1982). Excellent on why Rome's political class could not accommodate him.
- Greg Woolf, *Becoming Roman: The Origins of Provincial Civilization in Gaul* (1998). What happened to the Gallic elites after the conquest.
- Andrew Riggsby, *Caesar in Gaul and Rome: War in Words* (2006). How the *Commentaries* built Caesar's image and Roman ideas of the barbarian.

Figures and quotations above are from memory of the ancient sources, not freshly checked; treat specific numbers as approximate.`
    }
  ],

  augustus: [
    {
      title: "Augustus and Caesar: Two Theories of Power",
      dek: "A companion to the Caesar essay: the same machine of army, money, clients and crowd, wired the opposite way — why one man's rule lasted five years and the other's forty-four.",
      date: "2026-10-02",
      also: ["jcaesar"],
      body: `## The short version

Augustus ran Caesar's machine with the wiring reversed. Both men held power through the same four assets: an army loyal to them personally, a mountain of money, a popular following, and a vast web of clients. Caesar displayed that ownership and governed by personal obligation, which his peers experienced as humiliation. Augustus hid the ownership inside republican forms and converted personal obligation into institutions (salaries, pensions, career ladders, a cult), so that loyalty attached to the position rather than the man.

The result: Caesar had about five years of sole rule and left thirteen years of civil war. Augustus had forty-four years and left a system that survived Tiberius, Caligula, and Nero.

This is a companion to the essay on Caesar's governance of Gaul, and it uses the same idea of power as a balance sheet. The difference is that Caesar kept lending, while Augustus refinanced the whole book into long-dated paper nobody could call.

**Sources.** The main ancient witnesses are Augustus's own *Res Gestae* (his inscribed autobiography, a masterpiece of selective truth), Suetonius's *Life of Augustus*, Cassius Dio books 45–56, Appian on the triumviral years, and the opening of Tacitus's *Annals*, which is the cynic's verdict. As before, numbers are approximate and motives reconstructed.

## The heir who inverted the clemency

Octavian learned from the Ides of March that mercy to surviving enemies is a loan they repay with a knife. So he ran Caesar's sequence backwards: ruthless while winning, merciful only once no one was left who could threaten him.

He started with almost nothing but a name. At eighteen, adopted in Caesar's will, he raised a private army on his own initiative and money (the *Res Gestae* opens by boasting of exactly this illegality). Within eighteen months he had marched on Rome, extorted a consulship, and joined Antony and Lepidus in the Second Triumvirate.

Then came the proscriptions of 43 BC. Appian puts the death list at around 300 senators and 2,000 equestrians; Cicero was among them, and Octavian gave him up to Antony. Suetonius says Octavian resisted the killing at first but, once started, pursued it more relentlessly than his colleagues. After the siege of Perusia in 40 BC, some sources claimed he sacrificed several hundred prisoners at an altar to the deified Caesar on the Ides of March. That story may be hostile invention, but people found it believable.

After Actium and Alexandria (31–30 BC) he had Caesarion, Caesar's son by Cleopatra, killed. Plutarch has an adviser quip that too many Caesars is not a good thing. Only then, with every rival dead or exiled, did the clemency appear, and the *Res Gestae* claims he spared all citizens who asked for pardon.

The contrast with Caesar is exact. Caesar pardoned enemies during the civil war, as a strategy for winning it, and they killed him. Octavian killed enemies during the civil war, and pardoned only those who no longer mattered. Tacitus makes the point sourly: by the time Augustus offered peace, the boldest men had already fallen in battle or the proscriptions.

## The mask: titles, the Senate, and dignitas

Caesar's fatal problem was that he made the Senate watch him be king. Augustus's solution was to own the substance of power while letting the aristocracy keep its forms, offices, and self-respect.

**What Caesar did.** He took the dictatorship for life in early 44 BC, sat on a golden chair, and (Suetonius says) failed to rise when a delegation of senators came to him. Whether or not he wanted the crown Antony offered at the Lupercalia, he let the question be asked in public.

**What Augustus did instead.**

- **The "restoration" of 27 BC.** He formally handed the state back to Senate and people, and was handed back most of it in return, plus the name Augustus ("revered"), a religious honorific rather than a title of office.
- **The settlement of 23 BC.** He stopped holding the consulship every year, which freed up the top office for nobles who wanted it. In its place he took tribunician power (the people's protector, sacred and inviolable) and an overriding military command, neither of which required a magistracy.
- **Refusing the dictatorship.** When the people pressed it on him in 22 BC, he publicly declined. He called himself *princeps*, "first citizen."
- **The key sentence.** Near the end of the *Res Gestae* he claims he surpassed everyone in *auctoritas* (influence, standing) but held no more formal power than his colleagues. It is technically defensible and fundamentally false, which is the whole art.

**Managing dignitas.** Senators got consulships, priesthoods, governorships of the peaceful provinces, and seats at his table. What they lost was the chance at independent military glory: after 19 BC, no one outside the imperial family celebrated a full triumph. Augustus also trimmed the Senate from about 1,000 members to 600, removing many of Caesar's appointees, which flattered the old families even as it reduced the body to his preferred size.

The principle is that a defeated elite can bear losing power far more easily than losing face. Caesar took both; Augustus took only the first.

## Army and money: from personal army to pension fund

This is the biggest structural difference, and the one a financial planner will appreciate most. Caesar's soldiers were loyal because Caesar paid them, led them, and promised them land. Augustus turned that into a defined-benefit plan with a dedicated funding source.

**Caesar's model.** A personal army, raised partly at his own expense, paid from Gallic plunder, held together by his presence and charisma, and owed land at the end. It worked spectacularly and was inherently unstable: the next ambitious general could copy it, which is exactly what Octavian, Antony, and Sextus Pompey did after 44 BC.

**Augustus's model.**

- **Downsize.** After Actium he cut roughly sixty legions to twenty-eight, settling the surplus veterans. The *Res Gestae* claims he paid about 860 million sesterces for Italian land and 260 million for provincial land, rather than confiscating it as the triumvirs had.
- **Professionalize.** Fixed terms of service (sixteen years from 13 BC, raised to twenty plus five in reserve in AD 5), standard pay, and a cash bonus at discharge instead of land.
- **Fund it.** In AD 6 he created the *aerarium militare*, a military treasury, seeded with 170 million sesterces of his own money and fed by a 5% inheritance tax and a 1% sales tax. Veterans' pensions now came from a dedicated fund, not a general's promise.
- **Remove the rivals.** Armies sat in "imperial" provinces governed by his appointed legates. The legions' oaths ran to him. A praetorian guard stood in Italy.
- **Outsource the glory, to family.** Augustus was a mediocre general and knew it. Agrippa won his battles, then his stepsons Tiberius and Drusus. Triumphs went to the family, and every victory was formally won under his auspices.

The effect was to make a soldier's retirement depend on the system rather than on any one commander's success. No future general could promise more than the treasury already guaranteed, which quietly removed the economic engine of the late Republic's civil wars.

## Provinces and elites: Gaul organized, citizenship rationed

Caesar conquered Gaul and left it as a network of personal clients. Augustus turned it into a province with a census, a tax base, and a ceremonial home for its aristocracy, and he was noticeably stingier than Caesar about making outsiders Roman.

**Gaul, finished.** Augustus formally organized the conquered territory as the Three Gauls (Aquitania, Lugdunensis, Belgica), ran a census from 27 BC to fix tribute on a measured basis, and made Lugdunum (Lyon) the administrative center. In 12 BC his stepson Drusus dedicated an altar to Rome and Augustus there, with an annual council of delegates from some sixty Gallic states. That council is the institutional heir to the assemblies Caesar used to summon. Under Caesar, Gallic nobles competed for his personal favor; under Augustus, they competed for priesthoods in an imperial cult, which bound them to the office rather than the man.

**A salaried administration.** Augustus split provinces between those with armies (governed by his legates, on longer terms) and peaceful ones (governed by senatorial proconsuls). He built out a cadre of equestrian officials, procurators and prefects, who managed revenues and were paid salaries. Egypt became a personal domain under an equestrian prefect, and senators needed permission even to visit. Extortion did not disappear, but governors now answered to a single permanent boss who cared about the long-run tax base.

**Citizenship, rationed.** This is where Augustus most visibly broke with Caesar. Suetonius says he was very sparing with citizenship, and tells a story in which Livia asked it for a Gallic client. Augustus refused, but offered tax exemption instead, saying he would rather lose revenue than cheapen the citizenship. He purged many of Caesar's provincial senators, framed his war against Antony as all Italy swearing loyalty to him, and passed marriage and morals laws aimed at rebuilding the old Italian elite.

The nuance is that integration did not stop; it was slowed and channeled. Provincial elites still rose through army service, the equestrian career, and local cult. Within a few generations Gauls sat in the Senate and Spaniards became emperors. Augustus did not close Caesar's door. He put a ticket booth in front of it.

## Image and information: a book versus an environment

Caesar persuaded Rome with a narrative starring himself. Augustus redesigned the environment so that nearly everything a Roman saw told his story without naming it as such.

**Caesar's medium** was the *Commentaries*: brisk, third-person dispatches that made the conquest feel inevitable and the author indispensable. It was brilliant political journalism, but it was still one man arguing his case, and it invited argument back.

**Augustus's medium** was everything:

- **Portraits.** His official likeness stayed a calm, idealized young man for forty years, on statues and coins across the empire. He never visibly aged.
- **Buildings.** Suetonius has him boasting that he found Rome a city of brick and left it marble. The Forum of Augustus, the Ara Pacis, temples restored by the dozen; Agrippa built the Pantheon's first version and public baths.
- **Literature.** Through Maecenas he patronized Virgil, Horace, and others. The *Aeneid* gave Rome a founding epic in which Augustus's family is the destination of history.
- **War framing.** He fought Antony by declaring war on Cleopatra, recasting a Roman civil war as a foreign one, and publicized Antony's will to make him look captured by Egypt.
- **The last word.** The *Res Gestae*, posted on bronze at his mausoleum and copied across the provinces, is a ledger of offices declined, money spent, and peace restored, with every rival unnamed.

The tonal difference matters. Caesar's self-presentation was charismatic and a little dangerous: speed, risk, brilliance. Augustus's was reassuring: piety, restoration, peace, old Roman virtue. Caesar invited Romans to admire him. Augustus invited them to feel safe.

## Security and succession

Caesar treated his own safety and his succession as afterthoughts. Augustus treated them as the main project of his reign.

**Personal security.** Caesar dismissed his Spanish bodyguard shortly before the Ides, reportedly preferring to die once than live in fear. Augustus kept a praetorian guard, wore a breastplate under his toga during the 18 BC review of the Senate, and dealt with several real or alleged conspiracies (Murena and Caepio around 23–22 BC, Egnatius Rufus in 19 BC) by trial and execution rather than pardon. He was unsentimental even about family: in 2 BC he exiled his own daughter Julia on charges of adultery that may have covered a political plot.

**Lifestyle as security.** He lived in a modest house on the Palatine, ate plainly, and Suetonius says he wore clothes woven by the women of his household. Caesar's spending advertised power; Augustus's frugality made his power look like service.

**Succession.** Caesar's "plan" was a will naming an eighteen-year-old great-nephew, and the result was civil war. Augustus spent four decades trying to engineer a handover, and kept being thwarted by deaths:

1. **Marcellus**, nephew and son-in-law, died 23 BC.
2. **Agrippa**, his partner and Julia's second husband, died 12 BC.
3. **Gaius and Lucius**, Julia's sons by Agrippa, adopted as his own, died AD 4 and AD 2.
4. **Tiberius**, his stepson and fourth choice, adopted in AD 4 and given shared tribunician power and command.

The method mattered more than the man. By sharing his formal powers with the designated heir while still alive, Augustus made the handover look like continuity rather than coronation. When he died in AD 14, power passed to Tiberius without a battle. That had not happened in Rome for more than sixty years.

## Side by side

| Dimension | Caesar | Augustus |
| --- | --- | --- |
| Route to power | Conquest of Gaul, then civil war | Inheritance of a name, then civil war |
| Sole rule | About 5 years (49–44 BC) | 44 years (30 BC–AD 14) |
| Title | Dictator for life | *Princeps*; refused the dictatorship |
| Mercy | Clemency during the civil war, to win it | Proscriptions during, clemency after |
| Fear | Performed and episodic (Uxellodunum) | Systematized early, then latent |
| The Senate | Packed with his men; humiliated | Purged to 600; flattered and given offices |
| Army | Personal, paid from plunder and promises | Professional, funded by a military treasury |
| Command | Led from the front himself | Outsourced to Agrippa and stepsons |
| Provinces | Ruled through personal clients | Census, salaried officials, imperial cult |
| Citizenship | Granted widely, Gauls into the Senate | Rationed; Italy first |
| Image | The *Commentaries*: brilliance and speed | Total environment: piety, peace, restoration |
| Lifestyle | Lavish, generous, convivial | Frugal and conspicuously modest |
| Security | Dismissed his bodyguard | Praetorian guard, armor, executions |
| Succession | A will | Forty years of engineering |
| How it ended | Stabbed in the Senate; 13 years of civil war | Died in bed; peaceful handover |

## Verdict: optimizing for winning versus lasting

Caesar optimized for winning, and his toolkit was superb at it: speed, charisma, generosity, and calibrated terror. Its weakness was that it ran on personal obligation, a ledger that had to be serviced continuously by one man and that his equals resented carrying.

Augustus optimized for lasting. He kept the same assets but moved them off his personal books: soldiers paid from a treasury, officials paid salaries, nobles given honors, provincials given a cult, Romans given a story. Tacitus put it cynically and accurately: he won over the soldiers with gifts, the people with grain, and everyone with the sweetness of peace.

Three honest caveats keep this from becoming a morality tale:

- **Augustus learned from Caesar's corpse.** He had a worked example of what not to do. Caesar had no such example.
- **He inherited a decimated opposition.** The civil wars and proscriptions had removed most of the men who might have resisted him, and he was the one who removed many of them.
- **Time is a confounder.** Caesar had five years; Augustus had forty-four. Some of what looks like superior design is simply survival long enough to finish. Augustus also completed many of Caesar's projects: the calendar, his Forum, the Senate house, the colonies.

The usable lesson, for anyone who thinks about power, is that Caesar's methods are how you take control and Augustus's are how you keep it. The first is about obligation; the second is about structure. Caesar made people owe him. Augustus made it unnecessary for anyone to choose.

## Further reading

- *Res Gestae Divi Augusti*, best read with Alison Cooley's edition and commentary (2009).
- Suetonius, *Life of Augustus*; Tacitus, *Annals* 1.1–15; Cassius Dio books 51–56.
- Ronald Syme, *The Roman Revolution* (1939). Still the great hostile reading: Augustus as a faction boss who won.
- Adrian Goldsworthy, *Augustus: First Emperor of Rome* (2014). The companion to his Caesar biography, and the best single modern life.
- Paul Zanker, *The Power of Images in the Age of Augustus* (1988). How the visual program actually worked.
- Barbara Levick, *Augustus: Image and Substance* (2010). Strong on the gap between the two.
- Tom Holland, *Rubicon* (2003). A readable bridge from Caesar to Augustus.

Figures and quotations above are from memory of the ancient sources, not freshly checked; treat specific numbers as approximate.`
    }
  ],

  diocletian: [
    {
      title: "Force, System, Blood: Three Answers to the Third-Century Crisis",
      dek: "Aurelian, Diocletian and Constantine inherited the same broken machine, an empire whose armies made and murdered its emperors, and tried three different repairs. What each fixed, what each could not, and why the repair that lasted was the one that cost the most inside the family.",
      date: "2026-10-08",
      also: ["aurelian", "constantine"],
      body: `## The short version

Between 235 and 284 the Roman empire had about twenty recognised emperors and many more usurpers, and most of them died violently. Barbarians, Persians and plague were all real, but the problem underneath them was a selection mechanism. The frontier armies chose emperors, and an army that could make an emperor this year could make another next year. Three men in turn tried to fix it.

**Aurelian (270–275) fixed it by force.** He was harder and faster than every rival, and in five years he reunited an empire that had broken into three. He left the mechanism alone, and it killed him.

**Diocletian (284–305) fixed it by system.** He multiplied emperors so that every army had one, split the state so that no single official could rebel with it, published the tax so the state stopped looting its own provinces, and wrapped the emperor in ceremony so that killing him became sacrilege. It worked for twenty-one years. It came apart within a year of his abdication, because the armies preferred emperors' sons to emperors' choices.

**Constantine (306–337) fixed it by blood and God.** He accepted what the soldiers wanted, a dynasty, and gave it new sacred backing in the Christian Church, which he bought into the state with money and privileges. His dynasty lasted until 363, his capital until 1453, his gold coin for seven centuries and his religion to this day. The price was paid by his family: his father-in-law, his brother-in-law, his eldest son and his wife in his lifetime, and his half-brothers and nephews in the months after his death.

Put crudely, Aurelian was the general who won the war, Diocletian the engineer who designed the peace, and Constantine the politician who made the peace inheritable. Each needed the one before.

**Sources.** All three are badly documented next to Caesar or Augustus. For Aurelian the only connected life is in the *Historia Augusta*, written in the late fourth century by one author posing as six, who invented documents freely. The solid evidence is Zosimus, the brief Latin summaries (Aurelius Victor, Eutropius, the *Epitome de Caesaribus*), coins and inscriptions. For Diocletian the key witness is Lactantius, a Christian rhetor at his court, who wrote *On the Deaths of the Persecutors* to show that persecutors die horribly. For Constantine the problem is the reverse: too much partisan evidence, from Eusebius's adoring *Life* to the pagan hostility of Zosimus and the emperor Julian, together with an unusual number of the emperor's own letters and laws. Numbers below are approximate, and motives are reconstructions.

## The problem they inherited

The third-century crisis is usually told as a list of disasters. In 235 the soldiers murdered Severus Alexander and made Maximinus Thrax emperor. In 260 the Persian king Shapur I captured the emperor Valerian, the only Roman emperor ever taken alive by a foreign enemy. In the same decade the empire split three ways. Postumus ran a breakaway Gallic Empire from the Rhine to Britain and Spain, and Odaenathus of Palmyra, followed by his widow Zenobia, took over the defence of the East and then Egypt. A pandemic, the Plague of Cyprian, ran from about 249 to 262. The silver coin, the antoninianus, fell from about half silver to a few per cent, and prices and requisitions rose with it.

Read through this atlas's frameworks, the list becomes one problem with three faces.

- **The selectorate.** The people who chose emperors were the soldiers under arms, and the people who mattered were a few dozen senior officers. Selectorate theory says a small winning coalition drawn from a large selectorate should be loyal, because each member can be replaced and has no reason to expect a place under a challenger. That logic failed here, because the challenger usually came from inside the coalition. An officer who killed the emperor kept his colleagues' places and his own, and gained the purple. Loyalty to any one ruler bought them nothing the next ruler would not also give.
- **Svolik's moral hazard.** The army was the regime's only instrument of force, and it knew it. Each crisis made the emperor more dependent on it, and each concession taught the soldiers what they could demand.
- **Olson's horizon.** An emperor who expected to last eighteen months behaved like an insecure ruler: he debased the coinage, requisitioned and confiscated, and paid the troops now with whatever came to hand. The debasement was rational for each emperor and ruinous for the empire.

The beginnings of a repair came from Gallienus (sole emperor 260–268). He stopped giving army commands to senators and opened the officer career to professionals from the ranks, most of them from the Danube provinces. He built a mobile cavalry force based in northern Italy, and he survived longer than anyone had a right to expect. In 268 his officers killed him. The men in that conspiracy, and the men they promoted, became the next two generations of emperors: Claudius II, Aurelian, Probus, Carus, and in time Diocletian and his colleagues. The atlas files them as an organisation, the Illyrian officer corps, because that is what they functioned as, a cadre that made and unmade rulers.

## Aurelian: restoration by force

Aurelian came out of that cadre. He was of obscure Balkan birth, commanded cavalry under Gallienus and Claudius, and some sources implicate him in the plot of 268. When Claudius died of plague in 270, the Senate recognised Claudius's brother Quintillus, and the Danube army acclaimed Aurelian. Quintillus was dead within weeks.

The next five years were one long campaign:

1. **Italy, 270–271.** The Juthungi crossed the Alps. Aurelian was beaten near Placentia and usurpers rose behind him, but he won at Fano and Pavia and destroyed the invaders. Rome had been badly frightened, and he began the wall of nearly nineteen kilometres that still rings the city. It was finished under Probus.
2. **Rome, 271.** The mint workers revolted under the finance official Felicissimus, almost certainly to cover their own fraud in a debased coinage. The fighting on the Caelian hill reportedly killed seven thousand of Aurelian's soldiers. Senators were executed afterwards.
3. **The East, 272–273.** He marched on Zenobia, who held Egypt, Syria and much of Anatolia in her son's name. He spared Tyana, won at Immae and Emesa, besieged Palmyra, and caught Zenobia at the Euphrates as she tried to reach Persia. When Palmyra rose again in 273, he came back and sacked it.
4. **Gaul, 274.** The Gallic emperor Tetricus was defeated near Châlons. The sources say he had already arranged to abandon his own army. The empire was whole again.
5. **Rome, 274.** A triumph with two captured rulers walking in it, and coins hailing him as Restitutor Orbis, Restorer of the World.

The restoration was not only military. He reformed the coinage, raising the silver content and marking the new coin so its value was visible. He gave up the province of Dacia north of the Danube and moved its people south of the river, a realistic trade of territory for a shorter line. He replaced the Roman grain dole with daily bread and added pork and oil. He raised Sol Invictus, the Unconquered Sun, to the head of the state cult, with a great temple in Rome paid for from Palmyra's treasure and a new college of senatorial pontiffs. The Sun was a soldier's god, already worshipped across the army, and making him the empire's patron gave a fractured army one divine backer behind one emperor. Some coins call Aurelian himself *deo et domino nato*, born god and lord, and the *Epitome* says he was the first emperor to wear a diadem. That is the beginning of the sacred monarchy Diocletian would complete.

The one problem he did not touch was selection. Aurelian ruled his officers the way he ruled his soldiers, through severity, and every account agrees he was feared. In 275, on the road to a war with Persia, a secretary (Eros in Zosimus, Mnestheus in the *Historia Augusta*) caught in a lie forged a list of officers Aurelian supposedly meant to execute and showed it to the men named. They killed him near Byzantium. In Svolik's terms, the allies struck first because they believed the ruler was about to become unremovable at their expense. The forgery only had to be believable.

What followed is the clearest sign the mechanism was broken. The army, perhaps ashamed, asked the Senate to choose. The elderly senator Tacitus lasted about seven months, Florianus, said to be his half-brother, about three, and Probus six years before his own troops killed him. Aurelian proved the empire could be put back together. He could not show how to keep it together after him.

## Diocletian: restoration by system

Diocletian was another product of the Danubian cadre, born Diocles in Dalmatia, probably the son of a freedman. He commanded the imperial bodyguard when the young emperor Numerian was found dead in his litter in November 284. Acclaimed by the army, he swore he had nothing to do with it and killed the praetorian prefect Aper, the obvious suspect, in front of the troops. In 285 he defeated Numerian's brother Carinus, whose own officers finished Carinus off. Diocletian's reign began exactly as the others had, by acclamation, murder and civil war, and he seems to have understood that it would end the same way unless the rules changed.

**More emperors.** In 285 he made his fellow officer Maximian Caesar, and in 286 Augustus, with the West as his share. In 293 he added two junior emperors, Constantius in the West and Galerius in the East, bound to their seniors by adoption and marriage. The logic was simple and new. Usurpers rose because a threatened frontier needed an emperor on the spot, and an army without one would make its own. With four emperors, each with his own court, capital, praetorian prefect and army, every major front had a legitimate ruler nearby. A usurper now faced four opponents rather than one. The usurpers who did appear (Carausius and Allectus in Britain, Domitianus and Achilleus in Egypt) were all defeated.

**Smaller provinces, split powers.** The provinces were roughly doubled to about a hundred and grouped into a dozen dioceses under vicars. Civil government and military command were increasingly given to different men. No governor now controlled enough troops and money to make a bid, and the bureaucracy grew to fill the new posts.

**A tax you could read.** Before Diocletian the armies were fed largely by requisition, seizing what they needed where they stood. He replaced that with a system: land and labour surveyed into fiscal units (*iugatio–capitatio*), and the rate per unit published every year in the indiction. The prefect of Egypt's edict of 297 explains to taxpayers how to work out what they owe. In Olson's terms, this was the stationary bandit's binding commitment in ancient form, a ruler announcing in advance what he will take. The take was heavy, and Lactantius complains that there were more people receiving taxes than paying them. But it was predictable, and predictability was what the third century had lost.

**Money and prices.** He reformed the coinage again in the 290s. When inflation continued, he issued the Edict on Maximum Prices in 301: legal ceilings, on pain of death, for more than a thousand goods and services, with a preamble that blamed the avarice of merchants. It failed. Goods disappeared from the markets, Lactantius says blood was shed over trifles, and within a few years the edict was ignored. A system can publish a tax. It cannot repeal the effects of its own coinage.

**The sacred emperor.** Diocletian took the name Jovius, from Jupiter, and gave Maximian the name Herculius. Visitors prostrated themselves and kissed the hem of his purple robe (*adoratio*). He appeared rarely and in silk and jewels. This was not vanity. The emperors of the third century had been comrades their soldiers could approach, and comrades could be killed. Distance was a security measure.

**Law.** Two private collections of imperial law, the Gregorian and Hermogenian codes, were compiled in his reign. About 1,200 of his rescripts, answers to private petitions, survive in Justinian's Code. The system answered its subjects' letters.

**The persecution.** The same machinery that published taxes could enforce conformity. A system that grounded the emperors' authority in the traditional gods could read the Christians' refusal to sacrifice as a structural flaw. In about 302 he moved against the Manichaeans as a Persian sect. On 23 February 303 the church at Nicomedia was demolished, and four edicts followed: scriptures surrendered, clergy imprisoned, and finally universal sacrifice on pain of death. Lactantius blames Galerius, and says Diocletian hesitated, consulted his council and the oracle of Apollo at Didyma, and wanted no bloodshed. The persecution was fiercest in Galerius's East and ended in failure. Galerius issued a grudging edict of toleration on his deathbed in 311.

**The exit.** On 1 May 305, after a serious illness, Diocletian abdicated at Nicomedia and made Maximian abdicate the same day in Milan. Constantius and Galerius became Augusti, and two new Caesars, Severus and Maximinus Daia, were appointed. Both were Galerius's men. Maxentius, Maximian's son, and Constantine, Constantius's son, were both adults with armies' affection and both were passed over.

The system did not survive this. In 306 the troops at York acclaimed Constantine on his father's death, and in Rome the Praetorian Guard and a city angry at being taxed for the first time made Maxentius emperor. Between 308 and 310 six men claimed the rank of Augustus. Diocletian was asked to come back and settle it, and he talked about his cabbages instead. He died around 311, after watching his statues pulled down. Licinius later put his wife and daughter to death.

**Why it failed.** Three reasons, in rising order of importance:

- **The keystone left.** The Tetrarchy worked while a senior emperor with unchallengeable authority arbitrated among the other three. Diocletian designed a system meant to make him unnecessary, and it failed at exactly the moment he was gone.
- **Merit looked like faction.** The 305 appointments looked to everyone outside Galerius's circle like Galerius stacking the college, so the merit principle lost its claim to fairness the first time it was used.
- **The soldiers wanted sons.** Armies had been loyal to dynasties since Augustus, and the acclamation of Constantine and Maxentius shows the old instinct winning at its first chance. Diocletian's succession by adoption asked the soldiers to love an abstraction.

## Constantine: restoration by blood and God

Constantine was the clearest beneficiary of that third failure. He grew up at Diocletian's court as half heir and half hostage, served under Galerius, and saw the persecution begin. After 306 he spent eighteen years removing every rival. Maximian, his father-in-law, rebelled and died in 310. Maxentius, his brother-in-law, was beaten at the Milvian Bridge in 312. Licinius, his eastern co-emperor and another brother-in-law, was beaten in 316 and 324, spared, and executed in 325.

**The god of victory.** Before the Milvian Bridge something happened that Constantine later described as a vision or dream of Christ's sign, and his soldiers fought with it on their shields. The accounts change over time (see his Temperament notes), and historians still argue about what he believed and when. Burckhardt's calculating sceptic, Barnes's sincere convert and Drake's coalition-builder are all serious readings. What is not in dispute is what he did. He gave the Church toleration with Licinius in 313 (the so-called Edict of Milan), then money, basilicas, grain allowances, exemption of clergy from civic duties, the right to receive legacies, and courts whose bishops' judgments the state enforced. He summoned councils and enforced their decisions: Arles in 314 against the Donatists, Nicaea in 325 against Arius. He kept pagans in high office and Sol on his coins until the 320s, banned some sacrifices and private divination, and confiscated temple treasures. In this atlas's terms he co-opted an empire-wide organisation that already had its own authority, its own loyalty and a presence in every city. The bishops became a second set of brokers between the throne and the cities, alongside the army and the officials. The cost showed at once: within ten years he had to stop town councillors from becoming clergy, because the exemption had turned ordination into a tax shelter.

**The state he kept.** Much of Constantine's administration was Diocletian's, completed. The praetorian prefects lost their troops and became regional civil ministers. The field armies (*comitatenses*) were put under new commanders, the magistri. The Praetorian Guard, which had fought for Maxentius, was abolished and replaced by palace regiments under his own officers. The gold solidus, struck at 72 to the pound, gave the empire a coin that held its value where the silver had failed, financed in part by the gold of the temples. Laws tying tenant farmers to the land and sons to their fathers' trades turned the tax base into hereditary obligation. Constantinople, refounded in 330, gave the East a capital with its own senate and grain dole.

**The succession.** This is where he broke with Diocletian most completely. Constantine named his sons Caesars: Crispus and Constantine II in 317, Constantius II in 324 and Constans in 333, with his nephew Dalmatius added in 335. Blood replaced adoption, which was the principle the soldiers had already chosen in 306. The danger of the principle showed in 326. Crispus, his eldest son, a Caesar and the admiral who had won the Hellespont two years earlier, was executed at Pola. Fausta, Constantine's wife, died soon afterwards in an overheated bath. No source gives a reason both sides accept. When Constantine died in May 337, baptised days earlier, the army refused to accept anyone but his sons. Over that summer his two half-brothers, two nephews and several officials were killed, with Constantius II at least complicit. Only two boys survived, Gallus and Julian. Three years later Constantine II died invading his brother Constans's territory.

Measured by what the soldiers cared about, it worked: a Constantinian ruled until Julian's death in 363. Measured by the third century's standard, a succession without civil war, it did not, but the war now happened inside one family instead of across the officer corps.

## Side by side

| | Aurelian | Diocletian | Constantine |
| --- | --- | --- | --- |
| Years | 270–275 | 284–305 | 306–337 |
| Route to power | Acclaimed by the Danube army against the Senate's choice | Acclaimed by the eastern army; killed Aper; beat Carinus | Acclaimed by his father's troops at York; eighteen years of civil war |
| Answer to usurpation | Be harder and faster than any rival | Multiply the emperors; split the commands | Eliminate the co-rulers; found a dynasty |
| Army | Personal, Danubian, ruled by fear | Enlarged; an emperor at every front | Field armies under new marshals; Praetorians abolished |
| Money | Coin reform of 274; plunder | Published land-and-head tax; Prices Edict | The gold solidus; temple gold; new levies on traders |
| Legitimacy | Sol Invictus; 'born god and lord' | Jupiter and Hercules; prostration at court | Christ; 'bishop of those outside' |
| Christians | Ruled on a disputed bishopric in Antioch; persecution planned | The Great Persecution | Patronage, councils, Nicaea |
| Capital | Rome walled, rarely visited | Nicomedia; his colleagues at Milan, Trier and Sirmium | Constantinople |
| Succession plan | None | Caesars chosen in advance by merit | Sons and nephews |
| How it ended | Killed by his officers | Abdicated; died at Split | Died in bed; family massacred |
| What lasted | Unity and the wall | The administrative state and the tax | The coin, the capital, the Church's place in the state |

## Through the atlas's lenses

- **Selectorate.** Aurelian ran a tiny winning coalition whose members could all replace him. Diocletian divided that coalition into four on purpose, breaking the Handbook's first rule. Constantine enlarged it, adding the bishops, an expanded senatorial order and thousands of new title-holders, and paid it in gold. The theory's prediction that small coalitions survive longer fails for Aurelian, for the reason above: here the challenger came from inside the coalition.
- **Svolik.** All three were dealing with the moral hazard of the armed agent. Aurelian ignored it, Diocletian diluted it, and Constantine tied it to his dynasty and subordinated the Guard. Only Constantine reached an established autocracy that no insider could threaten, and the insiders struck as soon as he was dead.
- **Olson.** Aurelian is the interesting anomaly, an insecure ruler who acted on a long horizon by fixing the coinage, walling the city and feeding Rome. Diocletian's published tax is the textbook move from requisition to taxation. Constantine's solidus is a long-horizon public good minted partly from confiscation, which is a roving act in the service of a stationary one.
- **Skowronek.** Diocletian is the clearest reconstructor in the ancient section: he repudiated the old order's premises and called it a return to ancient discipline, as Augustus had. Constantine reconstructed again, replacing the Tetrarchy's gods and succession while articulating its administration. Aurelian is the contested case, either the last of the crisis emperors or a reconstructor before his time.
- **Temperament.** Aurelian cannot be responsibly scored, because his only intimate portrait is the *Historia Augusta*'s fiction. Diocletian's profile has the rarest feature in the atlas, a ruler with very high drive who stopped. Constantine's has the widest Tender-Mindedness band of any ancient ruler here, because his laws and his killings point in opposite directions.
- **Simonton.** Diocletian's style profile is close to Augustus's, with Deliberative and Creative near the ceiling and Charismatic low. The two most durable institution-builders in Roman history both governed by hiding the emperor inside a system.

## Verdict: winning, designing, inheriting

Four lessons, from the most general to the most particular.

1. **Force restores but does not select.** Aurelian shows that a determined leader can repair almost any external damage in five years. He could not repair the rule that decides who leads next, and a restoration that leaves that rule alone has to be done again.
2. **A system designed to make its founder unnecessary has to be tested while he is alive.** The Tetrarchy's real test, the succession of 305, came the day Diocletian left. A founder who had stayed on as arbiter for a second succession might have caught the problem: the merit principle looked like Galerius's faction from outside.
3. **The design that fits beats the design that is better.** On paper Diocletian's succession by merit-adoption was a better rule than heredity. It ran against what the soldiers believed. Constantine's dynasty was a step back in design and a step forward in fit, routinising charisma in the oldest form, hereditary charisma, and giving it a new sacred source. It lasted.
4. **A second organisation can stabilise a regime or bind it.** The Church gave Constantine a network in every city that owed him its privileges. It also brought emperors into theological disputes for a century and, by 390, produced a bishop (Ambrose) who could make an emperor do public penance.

Three caveats keep this from becoming a neat story of progress:

- **One long reform, not three.** Many 'Diocletianic' reforms began under Gallienus and Aurelian and were finished under Constantine. Recent scholarship sees 260–337 as one long reconstruction carried out by a single officer class.
- **Survivorship.** Constantine looks wise partly because he won. Licinius, who co-signed the toleration of 313, made his son a Caesar and ran Diocletian's machine, might look much the same had he won at Adrianople.
- **The sources are Christian.** Lactantius and Eusebius wrote the story of a persecutor punished and a convert rewarded. Diocletian's reputation, and Constantine's, still carry that frame.

Augustus solved the same problem, an army that could choose its master, by disguising the monarchy as a republic. Diocletian solved it by building the monarchy openly. Constantine solved it by giving the monarchy a god who chose emperors through their fathers. The first and third lasted, and both relied on the soldiers' belief in a family.

## Further reading

- Lactantius, *On the Deaths of the Persecutors*, trans. J. L. Creed (1984). The inside view, hostile and indispensable.
- Eusebius, *Life of Constantine*, trans. Averil Cameron and Stuart G. Hall (1999). Read the commentary as carefully as the text.
- David S. Potter, *The Roman Empire at Bay, AD 180–395* (2004). The best modern narrative of the whole arc.
- Alaric Watson, *Aurelian and the Third Century* (1999). The reign without the *Historia Augusta*.
- Stephen Williams, *Diocletian and the Roman Recovery* (1985); Roger Rees, *Diocletian and the Tetrarchy* (2004); Simon Corcoran, *The Empire of the Tetrarchs* (1996).
- William Leadbetter, *Galerius and the Will of Diocletian* (2009). The succession of 305 from the other side.
- Timothy D. Barnes, *Constantine and Eusebius* (1981) and *Constantine: Dynasty, Religion and Power* (2011); H. A. Drake, *Constantine and the Bishops* (2000); Paul Stephenson, *Constantine: Unconquered Emperor, Christian Victor* (2009).
- Edward Gibbon, *Decline and Fall*, chapters 11–18. Still the most readable account of all three.

Figures and quotations above are from memory of the ancient sources and standard modern accounts, not freshly checked; treat specific numbers as approximate.`
    }
  ]

};
