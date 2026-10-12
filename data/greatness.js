// ============================================================
// GREATNESS — expert rankings, and Simonton's predictors
// ============================================================
// Two things live here. First, the most recent expert rankings of
// U.S. presidents and British prime ministers, each checked rank by
// rank against the survey's own publication. Second, for the
// presidents, the five facts of record that Dean Keith Simonton found
// "postdict" those rankings — so the Greatness view can refit his
// model against any survey, live.
//
// THE SURVEYS (GREATNESS_SURVEYS). A rank is the survey's own
// published overall rank; 1 = best. A survey that did not rate a
// person simply has no key in that person's `ranks`.
//   siena2022  Siena College Research Institute, seventh survey of
//              presidential scholars (released 22 June 2022). Rates
//              all 45 presidents, Biden included in his second year.
//              Checked against Siena's "Presidents Rank Over Time" PDF.
//   cspan2021  C-SPAN's fourth Historians Survey of Presidential
//              Leadership (30 June 2021). Rates the 44 former
//              presidents; Biden was not rated. Trump (total 312.0) and
//              Pierce (311.8) differ only in the decimal; C-SPAN ranks
//              them 41st and 42nd. Checked against C-SPAN's press
//              release and an independent copy of its overall list.
//   pgp2024    Presidential Greatness Project expert survey, by Brandon
//              Rottinghaus and Justin Vaughn, fielded 15 November–31
//              December 2023 and released in February 2024. Rates all
//              45. Wikipedia's tables call it "APSA 2024" because the
//              experts were drawn from the American Political Science
//              Association's Presidents & Executive Politics section; it
//              is the authors' survey, not an APSA one. They report 154
//              usable responses from 525 invited (a University of
//              Houston release said 191 completed). John Adams and Biden
//              both averaged 62.66 and are published as 13th and 14th.
//              Checked against the authors' own table (LSE blog).
//   leeds2004  MORI / University of Leeds survey of the 20 prime
//              ministers since 1900 (27 September–5 November 2004).
//              Churchill is rated on both premierships; Salisbury is
//              listed for 1895–1902 only; Blair was rated in office.
//   leeds2016  University of Leeds / Woodnewton Associates survey of
//              the 13 post-war prime ministers, Attlee to Cameron
//              (September 2016). Churchill is rated on 1951–55 only.
//   leeds2021  The same series, 1–16 June 2021: 14 prime ministers,
//              Attlee to May (Theakston and Gill). Published with ties:
//              Major, Churchill and Callaghan share 7th (5.1) and Eden
//              and May share 13th (2.3). Stored the way the table
//              prints them — 7, 7, 7, then 10; 13, 13 — so there is no
//              8th, 9th or 14th. These are the only ties in the file.
//
// Left out, and why:
//   - Earlier editions of the same series (Siena 2018, C-SPAN 2017,
//     the 2015 and 2018 Greatness Project surveys): superseded.
//   - Leeds 2010 (12 post-war PMs): verified rank by rank in the
//     authors' own comparison table, but left out to keep three UK
//     columns. Its order is 2016's without Cameron and with Major 8th
//     rather than 6th.
//   - BBC Radio 4, 1999: 20 historians, politicians and commentators,
//     not an academic survey. Francis Beckett, 2006: one historian's
//     marks. The Royal Holloway surveys (2013, 2023) asked MPs.
//   - The British Politics Group poll of 2000 drew 22 replies; I could
//     not find its full rank order.
//   - No academic survey ranks the eighteenth- and nineteenth-century
//     prime ministers. The rankings that reach back to Walpole are
//     journalists' (The Times 2010, Iain Dale 2020) or one author's
//     (Anthony Seldon's top ten, 2016; the tiers in Seldon et al., The
//     Impossible Office?, 2024). So Walpole, Pitt, Liverpool, Grey,
//     Peel, Palmerston, Disraeli and Gladstone have no rank here.
//   - Public opinion polls (Gallup, YouGov and the like): not expert.
//
// THE PREDICTORS (GREATNESS_US only). Simonton ("Presidential
// greatness: the historical consensus and its psychological
// significance", Political Psychology 1986; Why Presidents Succeed,
// 1987) screened over 200 variables against 13 greatness ratings.
// Five held up across all of them and across eras. In his order of
// generality: years in office, years as a wartime commander-in-chief,
// administration scandal, assassination, and entering office as a
// national war hero.
// His six-variable model adds intellectual brilliance; it is left out
// here because it is a rating rather than a fact of record, and his
// estimates stop at G. W. Bush. As reported by McCann (Journal of
// Personality and Social Psychology 62, 1992), the five-variable
// equation predicts the standardised Murray–Blessing rating as
//     .17 years + .26 war − 1.70 scandal + .89 killed + .82 hero − 1.24
// and accounts for 78% of its variance. Higher means greater; the
// ranks here run 1 = best, so a refit against raw rank should find
// the opposite signs (or refit against n + 1 − rank).
//
// Simonton's own coding, as McCann reports it, anchors every rule:
//   war heroes    Washington, Jackson, W. H. Harrison, Taylor, Grant,
//                 T. Roosevelt, Eisenhower
//   scandal       Grant, Harding, Nixon
//   assassinated  Lincoln, Garfield, McKinley, Kennedy
//   war years     whole numbers, any part of a year counted as a year:
//                 J. Adams 3, Jefferson 4, Madison 3, Polk 3, Lincoln 4,
//                 McKinley 1, Wilson 2, F. Roosevelt 4, Truman 4,
//                 Eisenhower 0, L. Johnson 5, Nixon 4; everyone else 0
//
// Per-president fields:
//   from, to  years of first taking and last leaving office
//   inAtlas   true when `id` is a leader in this atlas
//   ranks     { surveyKey: rank }, 1 = best
//   years     time in office, to one decimal: days from taking office
//             (or a predecessor's death) to leaving it, ÷ 365.24.
//             Cleveland's two terms are added together. Trump: first
//             term only (4.0) — the second, from January 2025, is
//             unfinished and no survey here rated it. Biden: his full
//             term (4.0), though both surveys that rated him did so
//             while he was in office.
//   war       years, to one decimal, of the president's time in office
//             during which the United States was fighting one of the
//             wars below. Simonton used whole numbers; this uses the
//             actual overlap of dates, as McCann did. Overlapping wars
//             (Afghanistan and Iraq) are not double-counted.
//               Quasi-War with France     7 Jul 1798 – 30 Sep 1800
//               First Barbary War        10 May 1801 – 4 Jun 1805
//               War of 1812              18 Jun 1812 – 17 Feb 1815
//               Mexican–American War     25 Apr 1846 – 2 Feb 1848
//               Civil War                12 Apr 1861 – 9 Apr 1865 (Appomattox)
//               Spanish–American War     21 Apr 1898 – 13 Aug 1898
//               First World War (U.S.)    6 Apr 1917 – 11 Nov 1918
//               Second World War (U.S.)   7 Dec 1941 – 2 Sep 1945
//               Korean War               25 Jun 1950 – 27 Jul 1953 (armistice)
//               Vietnam War (U.S.)        7 Aug 1964 (Gulf of Tonkin
//                                         Resolution) – 27 Jan 1973 (Paris
//                                         Peace Accords)
//               Gulf War                 17 Jan 1991 – 28 Feb 1991
//               Afghanistan               7 Oct 2001 – 28 Dec 2014 (end of
//                                         the U.S. and NATO combat mission)
//               Iraq                     20 Mar 2003 – 31 Aug 2010 (end of
//                                         the U.S. combat mission)
//             The first eight are the wars behind Simonton's codes. Not
//             counted, because his codes leave out their kind (Jackson
//             0, McKinley 1, Wilson 2): wars against Native American
//             nations; the Second Barbary War (weeks in 1815); the
//             Philippine–American War (1899–1902) and the Boxer
//             expedition; Veracruz (1914) and the Punitive Expedition
//             into Mexico (1916–17); the Caribbean occupations. Not
//             counted, as brief interventions, air campaigns or advisory
//             missions rather than sustained U.S. ground wars: Lebanon
//             (1958, 1982–84), the Dominican Republic (1965), Grenada
//             (1983), Panama (1989), Somalia (1992–94), Bosnia and
//             Kosovo (1995, 1999), Libya (2011), the campaign against
//             Islamic State (from 2014), and the advisory and
//             counter-terrorism missions in Iraq after August 2010 and
//             Afghanistan after 2014. So Obama's war years stop at 28
//             December 2014 (5.9), and Trump and Biden get 0. Counting
//             Afghanistan to the final withdrawal on 30 August 2021
//             instead would give Obama 8.0, Trump 4.0 and Biden 0.6 —
//             the obvious sensitivity test. Where the decimals and
//             Simonton's whole numbers differ most: Polk 1.8 (his 3),
//             Truman 3.0 (4), Eisenhower 0.5 (0), McKinley 0.3 (1).
//   scandal   1 when the administration was marked by a scandal of
//             corruption, criminal conduct or abuse of office — not a
//             policy or constitutional quarrel — that reached the
//             president or a cabinet secretary and produced at least
//             one of: articles of impeachment against the president
//             adopted by the House; the president's resignation; or the
//             impeachment, indictment or conviction of a cabinet
//             secretary for conduct in office. A cabinet secretary is
//             the head of an executive department, the attorney-general
//             included; White House staff, agency heads and the
//             vice-president do not count. A scandal belongs to the
//             administration in which the misconduct happened, not the
//             one in which it surfaced: Teapot Dome is Harding's, not
//             Coolidge's; Iran–Contra is Reagan's, not G. H. W. Bush's.
//             This is Simonton's "cabinet-level scandal" made explicit.
//             It gives Buchanan, Grant, Harding, Nixon, Reagan, Clinton
//             and Trump: his three, three later presidents, and one
//             departure from his coding (Buchanan; see the row note).
//   killed    1 when the president died in office from an assassin's
//             attack: Lincoln, Garfield, McKinley, Kennedy. Being
//             wounded (Reagan in 1981) does not count.
//   hero      1 when, before taking office, he was a national figure
//             chiefly because of his record in war: a general famous
//             for a victory (Washington, Jackson, W. H. Harrison,
//             Taylor, Grant, Eisenhower) or — the one junior case —
//             Theodore Roosevelt, whom the Rough Riders' charge of 1898
//             made a celebrity. Service alone, even a general's rank or
//             a decorated combat record, does not count. This is exactly
//             Simonton's list, which leaves out Pierce, Hayes, Garfield,
//             B. Harrison, McKinley and Kennedy; by the same test G. H.
//             W. Bush is 0.
//   note      present where a value is a judgement, or where the
//             obvious reading of the record differs from the code
//
// British rows carry ranks only: Simonton's model is about presidents.
// ============================================================

window.GREATNESS_SURVEYS = [
  { key: "siena2022", office: "us", name: "Siena College Research Institute, 7th survey", short: "Siena 2022", year: 2022,
    raters: "141 presidential scholars, historians and political scientists", n: 45,
    method: "Each expert rated every president from 1 (poor) to 5 (excellent) on twenty attributes, abilities and accomplishments; the overall rank weights the twenty equally.",
    url: "https://sri.siena.edu/2022/06/22/american-presidents-greatest-and-worst/" },
  { key: "cspan2021", office: "us", name: "C-SPAN Presidential Historians Survey, 4th survey", short: "C-SPAN 2021", year: 2021,
    raters: "142 historians and professional observers of the presidency", n: 44,
    method: "Each participant rated every former president from 1 (not effective) to 10 (very effective) on ten qualities of leadership; the averages are added into a score out of 1,000, which sets the rank.",
    url: "https://www.c-span.org/presidentsurvey2021/?page=overall" },
  { key: "pgp2024", office: "us", name: "Presidential Greatness Project expert survey (Rottinghaus & Vaughn)", short: "PGP 2024", year: 2024,
    raters: "154 political scientists who study the presidency", n: 45,
    method: "Each expert rated every president from 0 (failure) through 50 (average) to 100 (great) for overall greatness; presidents are ranked by their mean rating.",
    url: "https://blogs.lse.ac.uk/usappblog/2024/02/19/who-experts-consider-to-be-the-greatest-president-is-changing-with-the-times" },
  { key: "leeds2004", office: "uk", name: "MORI / University of Leeds survey of 20th-century prime ministers", short: "Leeds–MORI 2004", year: 2004,
    raters: "139 academics in 20th-century British history and politics", n: 20,
    method: "Each academic rated every prime minister since 1900 from 0 (highly unsuccessful) to 10 (highly successful) in office; ranked by mean score.",
    url: "https://www.ipsos.com/en-uk/rating-british-prime-ministers" },
  { key: "leeds2016", office: "uk", name: "University of Leeds / Woodnewton Associates survey of post-war prime ministers", short: "Leeds 2016", year: 2016,
    raters: "82 academics in post-1945 British politics and history", n: 13,
    method: "Each academic rated every post-war prime minister, Attlee to Cameron, from 0 to 10 (highly successful) for performance in office; ranked by mean score.",
    url: "https://www.leeds.ac.uk/news/article/3930/britains_post-war_prime_ministers_ranked_by_politics_experts" },
  { key: "leeds2021", office: "uk", name: "University of Leeds / Woodnewton Associates survey of post-war prime ministers (Theakston & Gill)", short: "Leeds 2021", year: 2021,
    raters: "93 academics at 44 UK universities", n: 14,
    method: "Each academic rated every post-war prime minister, Attlee to May, from 0 (highly unsuccessful) to 10 (highly successful); ranked by mean score, with ties as published.",
    url: "https://theconversation.com/theresa-may-joint-worst-post-war-prime-minister-say-historians-and-politics-professors-in-new-survey-163912" }
];

window.GREATNESS_US = [
  { id: "washington", name: "George Washington", from: 1789, to: 1797, inAtlas: true,
    ranks: { siena2022: 3, cspan2021: 2, pgp2024: 3 },
    years: 7.8, war: 0, scandal: 0, killed: 0, hero: 1 },
  { id: "jadams", name: "John Adams", from: 1797, to: 1801, inAtlas: false,
    ranks: { siena2022: 16, cspan2021: 15, pgp2024: 13 },
    years: 4.0, war: 2.2, scandal: 0, killed: 0, hero: 0 },
  { id: "jefferson", name: "Thomas Jefferson", from: 1801, to: 1809, inAtlas: true,
    ranks: { siena2022: 5, cspan2021: 7, pgp2024: 5 },
    years: 8.0, war: 4.1, scandal: 0, killed: 0, hero: 0 },
  { id: "madison", name: "James Madison", from: 1809, to: 1817, inAtlas: false,
    ranks: { siena2022: 10, cspan2021: 16, pgp2024: 11 },
    years: 8.0, war: 2.7, scandal: 0, killed: 0, hero: 0 },
  { id: "monroe", name: "James Monroe", from: 1817, to: 1825, inAtlas: false,
    ranks: { siena2022: 12, cspan2021: 12, pgp2024: 18 },
    years: 8.0, war: 0, scandal: 0, killed: 0, hero: 0,
    note: "Wounded at Trenton as a young officer, but not a national war hero in Simonton's sense. The First Seminole War (1817–18) is not counted." },
  { id: "jqadams", name: "John Quincy Adams", from: 1825, to: 1829, inAtlas: false,
    ranks: { siena2022: 17, cspan2021: 17, pgp2024: 20 },
    years: 4.0, war: 0, scandal: 0, killed: 0, hero: 0 },
  { id: "jackson", name: "Andrew Jackson", from: 1829, to: 1837, inAtlas: true,
    ranks: { siena2022: 23, cspan2021: 22, pgp2024: 21 },
    years: 8.0, war: 0, scandal: 0, killed: 0, hero: 1,
    note: "Hero for New Orleans (1815). The Black Hawk War and the Second Seminole War are not counted as war years, following Simonton's 0." },
  { id: "vanburen", name: "Martin Van Buren", from: 1837, to: 1841, inAtlas: false,
    ranks: { siena2022: 29, cspan2021: 34, pgp2024: 28 },
    years: 4.0, war: 0, scandal: 0, killed: 0, hero: 0 },
  { id: "whharrison", name: "William Henry Harrison", from: 1841, to: 1841, inAtlas: false,
    ranks: { siena2022: 40, cspan2021: 40, pgp2024: 41 },
    years: 0.1, war: 0, scandal: 0, killed: 0, hero: 1,
    note: "Hero for Tippecanoe (1811) and the Thames (1813). Died after 31 days in office." },
  { id: "tyler", name: "John Tyler", from: 1841, to: 1845, inAtlas: false,
    ranks: { siena2022: 39, cspan2021: 39, pgp2024: 37 },
    years: 3.9, war: 0, scandal: 0, killed: 0, hero: 0 },
  { id: "polk", name: "James K. Polk", from: 1845, to: 1849, inAtlas: false,
    ranks: { siena2022: 15, cspan2021: 18, pgp2024: 25 },
    years: 4.0, war: 1.8, scandal: 0, killed: 0, hero: 0,
    note: "War counted from the first clash (25 April 1846) to the Treaty of Guadalupe Hidalgo; Simonton's whole-number code was 3." },
  { id: "taylor", name: "Zachary Taylor", from: 1849, to: 1850, inAtlas: false,
    ranks: { siena2022: 36, cspan2021: 35, pgp2024: 38 },
    years: 1.3, war: 0, scandal: 0, killed: 0, hero: 1 },
  { id: "fillmore", name: "Millard Fillmore", from: 1850, to: 1853, inAtlas: false,
    ranks: { siena2022: 38, cspan2021: 38, pgp2024: 39 },
    years: 2.7, war: 0, scandal: 0, killed: 0, hero: 0 },
  { id: "pierce", name: "Franklin Pierce", from: 1853, to: 1857, inAtlas: false,
    ranks: { siena2022: 41, cspan2021: 42, pgp2024: 42 },
    years: 4.0, war: 0, scandal: 0, killed: 0, hero: 0,
    note: "A brigadier general in the Mexican War, but not celebrated for it; Simonton coded him 0." },
  { id: "buchanan", name: "James Buchanan", from: 1857, to: 1861, inAtlas: false,
    ranks: { siena2022: 44, cspan2021: 44, pgp2024: 44 },
    years: 4.0, war: 0, scandal: 1, killed: 0, hero: 0,
    note: "Scandal 1 departs from Simonton, who coded 0. His Secretary of War, John B. Floyd, was indicted for conspiracy and fraud in January 1861 over the abstracted Indian trust bonds (the indictment was later quashed), and the Covode Committee had already investigated charges of bribery against the administration." },
  { id: "lincoln", name: "Abraham Lincoln", from: 1861, to: 1865, inAtlas: true,
    ranks: { siena2022: 2, cspan2021: 1, pgp2024: 1 },
    years: 4.1, war: 4.0, scandal: 0, killed: 1, hero: 0 },
  { id: "ajohnson", name: "Andrew Johnson", from: 1865, to: 1869, inAtlas: false,
    ranks: { siena2022: 45, cspan2021: 43, pgp2024: 43 },
    years: 3.9, war: 0, scandal: 0, killed: 0, hero: 0,
    note: "Impeached in 1868 and acquitted by one vote — but over his removal of Secretary of War Stanton under the Tenure of Office Act, a constitutional fight over Reconstruction rather than corruption. So scandal 0, as Simonton coded him; recoding him as 1 is the obvious test. The Civil War is counted only to Appomattox, so his war years are 0." },
  { id: "grant", name: "Ulysses S. Grant", from: 1869, to: 1877, inAtlas: false,
    ranks: { siena2022: 21, cspan2021: 20, pgp2024: 17 },
    years: 8.0, war: 0, scandal: 1, killed: 0, hero: 1 },
  { id: "hayes", name: "Rutherford B. Hayes", from: 1877, to: 1881, inAtlas: false,
    ranks: { siena2022: 31, cspan2021: 33, pgp2024: 29 },
    years: 4.0, war: 0, scandal: 0, killed: 0, hero: 0,
    note: "A brevet major general in the Civil War, wounded several times; Simonton coded him 0 as a war hero." },
  { id: "garfield", name: "James A. Garfield", from: 1881, to: 1881, inAtlas: false,
    ranks: { siena2022: 27, cspan2021: 27, pgp2024: 30 },
    years: 0.5, war: 0, scandal: 0, killed: 1, hero: 0,
    note: "A Union major general before he went to Congress; Simonton coded him 0 as a war hero. The Star Route frauds reached Post Office officials below cabinet level." },
  { id: "arthur", name: "Chester A. Arthur", from: 1881, to: 1885, inAtlas: false,
    ranks: { siena2022: 33, cspan2021: 30, pgp2024: 33 },
    years: 3.5, war: 0, scandal: 0, killed: 0, hero: 0 },
  { id: "cleveland", name: "Grover Cleveland", from: 1885, to: 1897, inAtlas: false,
    ranks: { siena2022: 26, cspan2021: 25, pgp2024: 26 },
    years: 8.0, war: 0, scandal: 0, killed: 0, hero: 0,
    note: "Two non-consecutive terms (1885–89 and 1893–97). Each survey ranks him once; years adds both terms." },
  { id: "bharrison", name: "Benjamin Harrison", from: 1889, to: 1893, inAtlas: false,
    ranks: { siena2022: 34, cspan2021: 32, pgp2024: 31 },
    years: 4.0, war: 0, scandal: 0, killed: 0, hero: 0,
    note: "A brevet brigadier general in the Civil War; Simonton coded him 0 as a war hero." },
  { id: "mckinley", name: "William McKinley", from: 1897, to: 1901, inAtlas: true,
    ranks: { siena2022: 22, cspan2021: 14, pgp2024: 24 },
    years: 4.5, war: 0.3, scandal: 0, killed: 1, hero: 0,
    note: "War counts the Spanish–American War only; the Philippine–American War (1899–1902) is not counted, as in Simonton's code of 1. A brevet major in the Civil War, not a war hero." },
  { id: "troosevelt", name: "Theodore Roosevelt", from: 1901, to: 1909, inAtlas: true,
    ranks: { siena2022: 4, cspan2021: 4, pgp2024: 4 },
    years: 7.5, war: 0, scandal: 0, killed: 0, hero: 1,
    note: "Hero 1 for the Rough Riders at San Juan Hill (1898), as Simonton coded him. The Philippine–American War, which ran into 1902, is not counted." },
  { id: "taft", name: "William Howard Taft", from: 1909, to: 1913, inAtlas: true,
    ranks: { siena2022: 25, cspan2021: 23, pgp2024: 23 },
    years: 4.0, war: 0, scandal: 0, killed: 0, hero: 0 },
  { id: "wilson", name: "Woodrow Wilson", from: 1913, to: 1921, inAtlas: true,
    ranks: { siena2022: 13, cspan2021: 13, pgp2024: 15 },
    years: 8.0, war: 1.6, scandal: 0, killed: 0, hero: 0,
    note: "War counts U.S. belligerency in the First World War. Veracruz (1914) and the Punitive Expedition into Mexico (1916–17) are not counted, consistent with Simonton's 2." },
  { id: "harding", name: "Warren G. Harding", from: 1921, to: 1923, inAtlas: true,
    ranks: { siena2022: 42, cspan2021: 37, pgp2024: 40 },
    years: 2.4, war: 0, scandal: 1, killed: 0, hero: 0 },
  { id: "coolidge", name: "Calvin Coolidge", from: 1923, to: 1929, inAtlas: true,
    ranks: { siena2022: 32, cspan2021: 24, pgp2024: 34 },
    years: 5.6, war: 0, scandal: 0, killed: 0, hero: 0,
    note: "Teapot Dome came to light and was prosecuted on his watch, but the misconduct was under Harding, so it is scored to Harding." },
  { id: "hoover", name: "Herbert Hoover", from: 1929, to: 1933, inAtlas: true,
    ranks: { siena2022: 37, cspan2021: 36, pgp2024: 36 },
    years: 4.0, war: 0, scandal: 0, killed: 0, hero: 0 },
  { id: "fdr", name: "Franklin D. Roosevelt", from: 1933, to: 1945, inAtlas: true,
    ranks: { siena2022: 1, cspan2021: 3, pgp2024: 2 },
    years: 12.1, war: 3.3, scandal: 0, killed: 0, hero: 0 },
  { id: "truman", name: "Harry S. Truman", from: 1945, to: 1953, inAtlas: true,
    ranks: { siena2022: 7, cspan2021: 6, pgp2024: 6 },
    years: 7.8, war: 3.0, scandal: 0, killed: 0, hero: 0,
    note: "Influence-peddling cases reached his appointments secretary, Matthew Connelly (convicted 1956), and he dismissed Attorney-General McGrath in 1952, but no cabinet secretary was impeached or charged: scandal 0, as Simonton coded him." },
  { id: "eisenhower", name: "Dwight D. Eisenhower", from: 1953, to: 1961, inAtlas: true,
    ranks: { siena2022: 6, cspan2021: 5, pgp2024: 8 },
    years: 8.0, war: 0.5, scandal: 0, killed: 0, hero: 1,
    note: "War 0.5 is the last six months of the Korean War, to the July 1953 armistice; Simonton coded 0. His chief of staff, Sherman Adams, resigned in 1958 over gifts, but White House staff fall outside the scandal rule." },
  { id: "jfk", name: "John F. Kennedy", from: 1961, to: 1963, inAtlas: true,
    ranks: { siena2022: 9, cspan2021: 8, pgp2024: 10 },
    years: 2.8, war: 0, scandal: 0, killed: 1, hero: 0,
    note: "PT-109 made him a celebrated junior officer, but Simonton coded him 0 as a war hero. The advisory war in Vietnam before August 1964 is not counted." },
  { id: "lbj", name: "Lyndon B. Johnson", from: 1963, to: 1969, inAtlas: true,
    ranks: { siena2022: 8, cspan2021: 11, pgp2024: 9 },
    years: 5.2, war: 4.5, scandal: 0, killed: 0, hero: 0,
    note: "War runs from the Gulf of Tonkin Resolution (7 August 1964). His Silver Star, for a single 1942 bomber mission flown as an observer, does not make him a war hero." },
  { id: "nixon", name: "Richard Nixon", from: 1969, to: 1974, inAtlas: true,
    ranks: { siena2022: 28, cspan2021: 31, pgp2024: 35 },
    years: 5.5, war: 4.0, scandal: 1, killed: 0, hero: 0 },
  { id: "ford", name: "Gerald Ford", from: 1974, to: 1977, inAtlas: true,
    ranks: { siena2022: 30, cspan2021: 28, pgp2024: 27 },
    years: 2.5, war: 0, scandal: 0, killed: 0, hero: 0,
    note: "The 1975 evacuation of Saigon and the Mayaguez rescue are not counted as war." },
  { id: "carter", name: "Jimmy Carter", from: 1977, to: 1981, inAtlas: true,
    ranks: { siena2022: 24, cspan2021: 26, pgp2024: 22 },
    years: 4.0, war: 0, scandal: 0, killed: 0, hero: 0,
    note: "Bert Lance, his budget director, resigned in 1977 and was later indicted for bank fraud — but over his banking career before office, and the budget director is not a department head: scandal 0." },
  { id: "reagan", name: "Ronald Reagan", from: 1981, to: 1989, inAtlas: true,
    ranks: { siena2022: 18, cspan2021: 9, pgp2024: 16 },
    years: 8.0, war: 0, scandal: 1, killed: 0, hero: 0,
    note: "Iran–Contra: Secretary of Defense Caspar Weinberger was indicted in 1992 (and pardoned that December); national security adviser Robert McFarlane pleaded guilty, and his successor John Poindexter was convicted (overturned on appeal). Simonton coded Reagan 0 in 1987, before the prosecutions. Lebanon, Grenada and the 1986 Libya raid are not counted as war." },
  { id: "ghwbush", name: "George H. W. Bush", from: 1989, to: 1993, inAtlas: true,
    ranks: { siena2022: 20, cspan2021: 21, pgp2024: 19 },
    years: 4.0, war: 0.1, scandal: 0, killed: 0, hero: 0,
    note: "War 0.1 is the six weeks of Desert Storm; Panama (1989) and Somalia (from December 1992) are not counted. A decorated naval pilot (Distinguished Flying Cross), but by Simonton's test — he coded Kennedy 0 — not a war hero." },
  { id: "clinton", name: "Bill Clinton", from: 1993, to: 2001, inAtlas: true,
    ranks: { siena2022: 14, cspan2021: 19, pgp2024: 12 },
    years: 8.0, war: 0, scandal: 1, killed: 0, hero: 0,
    note: "Impeached in 1998 for perjury and obstruction of justice; Agriculture Secretary Mike Espy was also indicted (1997) and acquitted. Somalia, Bosnia and Kosovo are not counted as war." },
  { id: "gwbush", name: "George W. Bush", from: 2001, to: 2009, inAtlas: true,
    ranks: { siena2022: 35, cspan2021: 29, pgp2024: 32 },
    years: 8.0, war: 7.3, scandal: 0, killed: 0, hero: 0,
    note: "War runs from the invasion of Afghanistan (7 October 2001). Scandal 0 is a judgement: Lewis Libby, the vice-president's chief of staff, was convicted in 2007 and Attorney-General Gonzales resigned amid the U.S. attorneys affair, but no cabinet secretary was impeached or charged." },
  { id: "obama", name: "Barack Obama", from: 2009, to: 2017, inAtlas: true,
    ranks: { siena2022: 11, cspan2021: 10, pgp2024: 7 },
    years: 8.0, war: 5.9, scandal: 0, killed: 0, hero: 0,
    note: "War counts Afghanistan (and Iraq to August 2010) to the end of the U.S. combat mission on 28 December 2014. Libya (2011) and the campaign against Islamic State are not counted. Counting Afghanistan to the 2021 withdrawal would give 8.0." },
  { id: "trump", name: "Donald Trump", from: 2017, to: 2021, inAtlas: true,
    ranks: { siena2022: 43, cspan2021: 41, pgp2024: 45 },
    years: 4.0, war: 0, scandal: 1, killed: 0, hero: 0,
    note: "This row is his first term (2017–21), the one every survey here rated; his second term began in January 2025 and is not counted. Impeached in 2019 and 2021. War 0: the post-2014 mission in Afghanistan and the campaign against Islamic State are not counted; to the 2021 withdrawal it would be 4.0." },
  { id: "biden", name: "Joe Biden", from: 2021, to: 2025, inAtlas: true,
    ranks: { siena2022: 19, pgp2024: 14 },
    years: 4.0, war: 0, scandal: 0, killed: 0, hero: 0,
    note: "Rated while in office: by Siena in 2022, his second year, and by the Greatness Project at the end of 2023. C-SPAN's 2021 survey covered former presidents only. The House's 2023 impeachment inquiry adopted no articles; the 2021 Kabul evacuation is not counted as war." }
];

window.GREATNESS_UK = [
  { id: "salisbury", name: "Lord Salisbury", from: 1885, to: 1902, inAtlas: true,
    ranks: { leeds2004: 10 },
    note: "The 2004 survey covered prime ministers since 1900 and listed Salisbury for 1895–1902, so the rank reflects his last government." },
  { id: "balfour", name: "Arthur Balfour", from: 1902, to: 1905, inAtlas: false,
    ranks: { leeds2004: 18 } },
  { id: "campbellbannerman", name: "Henry Campbell-Bannerman", from: 1905, to: 1908, inAtlas: false,
    ranks: { leeds2004: 11 } },
  { id: "asquith", name: "H. H. Asquith", from: 1908, to: 1916, inAtlas: true,
    ranks: { leeds2004: 7 } },
  { id: "lloydgeorge", name: "David Lloyd George", from: 1916, to: 1922, inAtlas: true,
    ranks: { leeds2004: 3 } },
  { id: "bonarlaw", name: "Bonar Law", from: 1922, to: 1923, inAtlas: false,
    ranks: { leeds2004: 16 } },
  { id: "baldwin", name: "Stanley Baldwin", from: 1923, to: 1937, inAtlas: true,
    ranks: { leeds2004: 8 } },
  { id: "macdonald", name: "Ramsay MacDonald", from: 1924, to: 1935, inAtlas: false,
    ranks: { leeds2004: 14 } },
  { id: "nchamberlain", name: "Neville Chamberlain", from: 1937, to: 1940, inAtlas: false,
    ranks: { leeds2004: 17 } },
  { id: "churchill", name: "Winston Churchill", from: 1940, to: 1955, inAtlas: true,
    ranks: { leeds2004: 2, leeds2016: 7, leeds2021: 7 },
    note: "The 2004 survey rated both premierships; the 2016 and 2021 surveys of post-war prime ministers rated only his 1951–55 government, which is why he falls to mid-table." },
  { id: "attlee", name: "Clement Attlee", from: 1945, to: 1951, inAtlas: true,
    ranks: { leeds2004: 1, leeds2016: 1, leeds2021: 1 } },
  { id: "eden", name: "Anthony Eden", from: 1955, to: 1957, inAtlas: false,
    ranks: { leeds2004: 20, leeds2016: 13, leeds2021: 13 } },
  { id: "macmillan", name: "Harold Macmillan", from: 1957, to: 1963, inAtlas: true,
    ranks: { leeds2004: 5, leeds2016: 4, leeds2021: 5 } },
  { id: "douglashome", name: "Alec Douglas-Home", from: 1963, to: 1964, inAtlas: false,
    ranks: { leeds2004: 19, leeds2016: 12, leeds2021: 12 } },
  { id: "haroldwilson", name: "Harold Wilson", from: 1964, to: 1976, inAtlas: true,
    ranks: { leeds2004: 9, leeds2016: 5, leeds2021: 4 } },
  { id: "heath", name: "Edward Heath", from: 1970, to: 1974, inAtlas: true,
    ranks: { leeds2004: 13, leeds2016: 9, leeds2021: 10 } },
  { id: "callaghan", name: "James Callaghan", from: 1976, to: 1979, inAtlas: false,
    ranks: { leeds2004: 12, leeds2016: 8, leeds2021: 7 } },
  { id: "thatcher", name: "Margaret Thatcher", from: 1979, to: 1990, inAtlas: true,
    ranks: { leeds2004: 4, leeds2016: 2, leeds2021: 2 } },
  { id: "major", name: "John Major", from: 1990, to: 1997, inAtlas: false,
    ranks: { leeds2004: 15, leeds2016: 6, leeds2021: 7 } },
  { id: "blair", name: "Tony Blair", from: 1997, to: 2007, inAtlas: true,
    ranks: { leeds2004: 6, leeds2016: 3, leeds2021: 3 },
    note: "Rated in 2004 while still in office, in his seventh year." },
  { id: "brown", name: "Gordon Brown", from: 2007, to: 2010, inAtlas: false,
    ranks: { leeds2016: 10, leeds2021: 6 } },
  { id: "cameron", name: "David Cameron", from: 2010, to: 2016, inAtlas: false,
    ranks: { leeds2016: 11, leeds2021: 11 } },
  { id: "may", name: "Theresa May", from: 2016, to: 2019, inAtlas: false,
    ranks: { leeds2021: 13 } }
];
