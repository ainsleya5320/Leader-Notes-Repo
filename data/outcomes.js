// ============================================================
// OUTCOMES — the dependent variables, keyed by leader id
// ============================================================
// Every other vector in the atlas describes HOW a leader led.
// These two fields record WHAT HAPPENED, so the Patterns view
// can test hypotheses (does hub-and-spoke predict succession
// crises? do coercive leaders leave voluntarily?).
//
//   exit        how their hold on power ended:
//                 voluntary    stepped down freely (retired, declined to run, abdicated)
//                 defeated     lost an election
//                 termlimit    left because the rules required it
//                 died         died in office (natural causes, illness, battle)
//                 assassinated killed in office
//                 deposed      overthrown, dismissed, forced to resign, or defeated in war
//                 incumbent    still in power
//   succession  what followed:
//                 orderly      power passed without civil war, collapse, or a purge-fight
//                 crisis       wars of succession, state collapse, coup, or contested purge
//                 na           not applicable (incumbent, or not a head of state)
//
// These are judgment calls — edit them per-leader in the ✎ form.
// ============================================================

window.OUTCOMES = {
  // ancients
  hammurabi:      { exit: "died",         succession: "orderly" },
  ramesses2:      { exit: "died",         succession: "orderly" },
  cyrus:          { exit: "died",         succession: "orderly" },
  darius1:        { exit: "died",         succession: "orderly" },
  pericles:       { exit: "died",         succession: "orderly" },
  alexander:      { exit: "died",         succession: "crisis" },
  chandragupta:   { exit: "voluntary",    succession: "orderly" },
  ashoka:         { exit: "died",         succession: "crisis" },
  qinshihuang:    { exit: "died",         succession: "crisis" },
  hannibal:       { exit: "deposed",      succession: "na" },
  jcaesar:        { exit: "assassinated", succession: "crisis" },
  augustus:       { exit: "died",         succession: "orderly" },
  marcusaurelius: { exit: "died",         succession: "orderly" },
  cleopatra:      { exit: "deposed",      succession: "crisis" },
  // warlords
  caocao:         { exit: "died",         succession: "orderly" },
  attila:         { exit: "died",         succession: "crisis" },
  genghis:        { exit: "died",         succession: "orderly" },
  kublai:         { exit: "died",         succession: "orderly" },
  timur:          { exit: "died",         succession: "crisis" },
  nobunaga:       { exit: "assassinated", succession: "crisis" },
  shaka:          { exit: "assassinated", succession: "crisis" },
  // medieval
  justinian:      { exit: "died",         succession: "orderly" },
  charlemagne:    { exit: "died",         succession: "orderly" },
  harun:          { exit: "died",         succession: "crisis" },
  alfred:         { exit: "died",         succession: "orderly" },
  william1:       { exit: "died",         succession: "crisis" },
  eleanor:        { exit: "died",         succession: "na" },
  saladin:        { exit: "died",         succession: "crisis" },
  frederick2:     { exit: "died",         succession: "crisis" },
  louis9:         { exit: "died",         succession: "orderly" },
  mansamusa:      { exit: "died",         succession: "orderly" },
  // renaissance
  mehmed2:        { exit: "died",         succession: "crisis" },
  lorenzo:        { exit: "died",         succession: "crisis" },
  cesareborgia:   { exit: "deposed",      succession: "crisis" },
  isabella:       { exit: "died",         succession: "orderly" },
  henry8:         { exit: "died",         succession: "orderly" },
  suleiman:       { exit: "died",         succession: "orderly" },
  charles5:       { exit: "voluntary",    succession: "orderly" },
  elizabeth1:     { exit: "died",         succession: "orderly" },
  // early modern
  akbar:          { exit: "died",         succession: "orderly" },
  ieyasu:         { exit: "voluntary",    succession: "orderly" },
  richelieu:      { exit: "died",         succession: "orderly" },
  cromwell:       { exit: "died",         succession: "crisis" },
  louis14:        { exit: "died",         succession: "orderly" },
  kangxi:         { exit: "died",         succession: "crisis" },
  peter1:         { exit: "died",         succession: "crisis" },
  frederick2p:    { exit: "died",         succession: "orderly" },
  mariatheresa:   { exit: "died",         succession: "orderly" },
  catherine2:     { exit: "died",         succession: "orderly" },
  // colonial
  nzinga:         { exit: "died",         succession: "orderly" },
  washington:     { exit: "voluntary",    succession: "orderly" },
  jefferson:      { exit: "voluntary",    succession: "orderly" },
  toussaint:      { exit: "deposed",      succession: "crisis" },
  bolivar:        { exit: "deposed",      succession: "crisis" },
  sanmartin:      { exit: "voluntary",    succession: "orderly" },
  // 19th century
  napoleon:       { exit: "deposed",      succession: "crisis" },
  jackson:        { exit: "voluntary",    succession: "orderly" },
  victoria:       { exit: "died",         succession: "orderly" },
  lincoln:        { exit: "assassinated", succession: "orderly" },
  juarez:         { exit: "died",         succession: "orderly" },
  bismarck:       { exit: "deposed",      succession: "orderly" },
  walpole:        { exit: "deposed",      succession: "orderly" },
  pittyounger:    { exit: "died",         succession: "orderly" },
  liverpool:      { exit: "voluntary",    succession: "orderly" },
  grey:           { exit: "voluntary",    succession: "orderly" },
  peel:           { exit: "deposed",      succession: "orderly" },
  disraeli:       { exit: "defeated",     succession: "orderly" },
  palmerston:     { exit: "died",         succession: "orderly" },
  gladstone:      { exit: "voluntary",    succession: "orderly" },
  salisbury:      { exit: "voluntary",    succession: "orderly" },
  cavour:         { exit: "died",         succession: "orderly" },
  cixi:           { exit: "died",         succession: "crisis" },
  meiji:          { exit: "died",         succession: "orderly" },
  menelik2:       { exit: "died",         succession: "crisis" },
  // 20th century
  mckinley:       { exit: "assassinated", succession: "orderly" },
  troosevelt:     { exit: "voluntary",    succession: "orderly" },
  taft:           { exit: "defeated",     succession: "orderly" },
  wilson:         { exit: "voluntary",    succession: "orderly" },
  harding:        { exit: "died",         succession: "orderly" },
  coolidge:       { exit: "voluntary",    succession: "orderly" },
  hoover:         { exit: "defeated",     succession: "orderly" },
  lenin:          { exit: "died",         succession: "crisis" },
  ataturk:        { exit: "died",         succession: "orderly" },
  stalin:         { exit: "died",         succession: "crisis" },
  fdr:            { exit: "died",         succession: "orderly" },
  hitler:         { exit: "deposed",      succession: "crisis" },
  churchill:      { exit: "voluntary",    succession: "orderly" },
  degaulle:       { exit: "voluntary",    succession: "orderly" },
  mao:            { exit: "died",         succession: "crisis" },
  hochiminh:      { exit: "died",         succession: "orderly" },
  bengurion:      { exit: "voluntary",    succession: "orderly" },
  nasser:         { exit: "died",         succession: "orderly" },
  nkrumah:        { exit: "deposed",      succession: "crisis" },
  leekuanyew:     { exit: "voluntary",    succession: "orderly" },
  tito:           { exit: "died",         succession: "crisis" },
  jfk:            { exit: "assassinated", succession: "orderly" },
  lbj:            { exit: "voluntary",    succession: "orderly" },
  goldameir:      { exit: "deposed",      succession: "orderly" },
  indira:         { exit: "assassinated", succession: "orderly" },
  deng:           { exit: "voluntary",    succession: "orderly" },
  thatcher:       { exit: "deposed",      succession: "orderly" },
  reagan:         { exit: "termlimit",    succession: "orderly" },
  gorbachev:      { exit: "deposed",      succession: "crisis" },
  mandela:        { exit: "voluntary",    succession: "orderly" },
  castro:         { exit: "voluntary",    succession: "orderly" },
  truman:         { exit: "voluntary",    succession: "orderly" },
  eisenhower:     { exit: "termlimit",    succession: "orderly" },
  nixon:          { exit: "deposed",      succession: "orderly" },
  ford:           { exit: "defeated",     succession: "orderly" },
  carter:         { exit: "defeated",     succession: "orderly" },
  ghwbush:        { exit: "defeated",     succession: "orderly" },
  clinton:        { exit: "termlimit",    succession: "orderly" },
  // 21st century
  gwbush:         { exit: "termlimit",    succession: "orderly" },
  putin:          { exit: "incumbent",    succession: "na" },
  obama:          { exit: "termlimit",    succession: "orderly" },
  xi:             { exit: "incumbent",    succession: "na" },
  merkel:         { exit: "voluntary",    succession: "orderly" },
  erdogan:        { exit: "incumbent",    succession: "na" },
  abe:            { exit: "voluntary",    succession: "orderly" },
  modi:           { exit: "incumbent",    succession: "na" },
  trump:          { exit: "incumbent",    succession: "na" },
  ardern:         { exit: "voluntary",    succession: "orderly" },
  zelensky:       { exit: "incumbent",    succession: "na" },
  lula:           { exit: "incumbent",    succession: "na" },
  biden:          { exit: "voluntary",    succession: "orderly" },
  // added from the reading index
  taizong:        { exit: "died",         succession: "orderly" },
  robertbruce:    { exit: "died",         succession: "crisis" },
  chiang:         { exit: "died",         succession: "orderly" },
  hueylong:       { exit: "assassinated", succession: "crisis" },
  rjdaley:        { exit: "died",         succession: "crisis" },
  suharto:        { exit: "deposed",      succession: "orderly" },
  parkchunghee:   { exit: "assassinated", succession: "crisis" },
  mussolini:      { exit: "deposed",      succession: "crisis" },
  franco:         { exit: "died",         succession: "orderly" },
  salazar:        { exit: "died",         succession: "orderly" },
  pinochet:       { exit: "defeated",     succession: "orderly" },
  peron:          { exit: "died",         succession: "crisis" },
  asquith:        { exit: "deposed",      succession: "orderly" },
  lloydgeorge:    { exit: "deposed",      succession: "orderly" },
  baldwin:        { exit: "voluntary",    succession: "orderly" },
  attlee:         { exit: "defeated",     succession: "orderly" },
  macmillan:      { exit: "voluntary",    succession: "orderly" },
  haroldwilson:   { exit: "voluntary",    succession: "orderly" },
  heath:          { exit: "defeated",     succession: "orderly" },
  blair:          { exit: "voluntary",    succession: "orderly" },
  goh:            { exit: "voluntary",    succession: "orderly" },
  berlusconi:     { exit: "deposed",      succession: "orderly" },
  kissinger:      { exit: "defeated",     succession: "na" }
};
