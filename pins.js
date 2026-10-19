/* =========================================================
   AKT CLAN · ONE-TIME PAIRING CODES
   Owner: ZEUS (CLAN DEV)
   Push this file to your GitHub repo and reference it from
   index.html  ->  <script src="https://raw.githubusercontent.com/YOUR_USER/akt-clan/pins.js">
   Then DELETE the local `const PINS = [...]` in index.html
   to use the hosted copy (keeps codes off the public page).
   ========================================================= */
const PINS = [
  "849201","733198","650214","918337","524091","770563",
  "389410","601982","847256","958301","420678","661843",
  "175930","902618","538247","760481","319075","482916",
  "955173","268430","813956","697214","540839","712506",
  "396284","805147","623790","148563","977021","506834",
  "419270","684391","827560","350148","942607","731849",
  "208354","657920","489013"
];

// Optional: validate externally (used by backend / bot handler)
window.isAktpinValid = function(code){
  return typeof code === 'string' && PINS.includes(code.trim().toUpperCase());
};
