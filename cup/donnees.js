/* =====================================================================
   NINETEEN CUP : TABLEAU EN COURS, lu par nineteensociety.com/cup/ et /en/cup/.
   Hébergé sur links.nineteensociety.com (GitHub Pages, gratuit et sans limite) :
   modifier ce fichier met le site à jour SANS mise en ligne Netlify.
   Délai d'affichage : jusqu'à 10 minutes (cache GitHub Pages).

   NOUVEAU TOURNOI : changer les textes de CUP_TEXTES, puis remplacer les
   matchs de TABLEAU_OCT (le nom reste, c'est le tableau en cours, quel que
   soit le mois). Pas de consolante : CONSOLANTE_OCT = [].
   Aucun tournoi en cours : masquer: true dans fr et en.

   Mode d'emploi des matchs : p('Prénom N.', 'handicap', 1 si tête de série),
   TBD = inconnu, w = 'a' ou 'b' (vainqueur), s = score ('2 up', '4&3', '19e'),
   recv / strokes = coups reçus, date 'AAAA-MM-JJ' et time 'HH:MM'.
   Tours : r = 'r16', 'qf', 'sf', 'f' ; from / to = dates du tour.
   Si ce fichier ne charge pas, le site affiche la copie de secours de tableau.js.
   ===================================================================== */

var CUP_TEXTES = {
  fr: {
    masquer: false,
    label: "En cours · Tournoi d'octobre",
    titre: "Le tableau d'octobre.",
    lead: "16 joueurs, tous en net, sur Augusta Municipal. 4 têtes de série (★). Les coups reçus correspondent aux 3/4 de la différence de handicap. Finale entre le 16 et le 22 novembre."
  },
  en: {
    masquer: false,
    label: "In progress · October tournament",
    titre: "The October draw.",
    lead: "16 players, all net, on Augusta Municipal. 4 seeds (★). Strokes received are 3/4 of the handicap difference. Final between 16 and 22 November."
  }
};

var TABLEAU_OCT = [
  {r:'r16', from:'2026-10-26', to:'2026-10-31', m:[
    {a:p('Guillaume H.','+2,2',1), b:p('Julien S.','16,2'), w:'b', s:'19e', recv:'b', strokes:14, date:'2026-10-28', time:'17:00'},
    {a:p('Guy B.','26,6'), b:p('Antoine H.','16,2'), w:'a', s:'2 up', recv:'a', strokes:8, date:'2026-10-30', time:'13:30'},
    {a:p('Vincent V.','21,5'), b:p('Wouter L.','22'), w:'a', s:'', recv:null, strokes:0, date:'2026-10-29', time:'16:00'},
    {a:p('Barbara D.','12'), b:p('Kevin A.','5',1), w:'a', s:'4&3', recv:'a', strokes:5, date:'2026-11-04', time:'13:30'},
    {a:p('Vincent G.','6,6',1), b:p('Gauthier D.','13,2'), w:'a', s:'1 up', recv:'b', strokes:5, date:'2026-11-04', time:'19:00'},
    {a:p('Julie M.','7,6'), b:p('Serge L.','36'), w:'a', s:'', recv:'b', strokes:21, date:'2026-10-30', time:'19:00'},
    {a:p('Thierry P.','24,3'), b:p('Romain H.','27,7'), w:'a', s:'', recv:'b', strokes:3, date:'2026-10-29', time:'19:00'},
    {a:p('Silvio P.','12,7'), b:p('Gregory E.','4,6',1), w:'a', s:'', recv:'a', strokes:6, date:'2026-11-01', time:'13:30'}
  ]},
  {r:'qf', from:'2026-11-01', to:'2026-11-06', m:[
    {a:p('Julien S.','16,2'), b:p('Guy B.','26,6'), w:'a', s:'5&4', recv:'b', strokes:8, date:'2026-11-04', time:'16:00'},
    {a:p('Vincent V.','21,5'), b:p('Barbara D.','12'), w:'a', s:'4&3', recv:'a', strokes:7},
    {a:p('Vincent G.','6,6',1), b:p('Julie M.','7,6'), w:'b', s:'6 up', recv:'b', strokes:1, date:'2026-11-11', time:'11:00'},
    {a:p('Thierry P.','24,3'), b:p('Silvio P.','12,7'), w:'a', s:'', recv:'a', strokes:9, date:'2026-11-08', time:'18:00'}
  ]},
  {r:'sf', from:'2026-11-07', to:'2026-11-15', m:[
    {a:p('Julien S.','16,2'), b:p('Vincent V.','21,5'), w:'a', s:'1 up', recv:'b', strokes:4},
    {a:p('Julie M.','7,6'), b:p('Thierry P.','24,3'), w:null, date:null}
  ]},
  {r:'f', from:'2026-11-16', to:'2026-11-22', m:[ {a:p('Julien S.','16,2'), b:TBD, w:null} ]}
];

var CONSOLANTE_OCT = [
  {r:'qf', from:'2026-11-01', to:'2026-11-06', m:[
    {a:p('Guillaume H.','+2,2',1), b:p('Antoine H.','16,2'), w:'a', s:'', recv:'b', strokes:14, date:'2026-11-06', time:'17:30'},
    {a:p('Wouter L.','22'), b:p('Kevin A.','5',1), w:'a', s:'', recv:'a', strokes:13, date:'2026-11-12', time:'18:00'},
    {a:p('Gauthier D.','13,2'), b:p('Serge L.','36'), w:null, s:'', recv:'b', strokes:17, date:null},
    {a:p('Romain H.','27,7'), b:p('Gregory E.','4,6',1), w:'a', s:'', recv:'a', strokes:17, date:'2026-11-12', time:'14:00'}
  ]},
  {r:'sf', from:'2026-11-07', to:'2026-11-15', m:[ {a:p('Guillaume H.','+2,2',1), b:p('Wouter L.','22'), w:null, date:null}, {a:TBD, b:p('Romain H.','27,7'), w:null} ]},
  {r:'f', from:'2026-11-16', to:'2026-11-22', m:[ {a:TBD, b:TBD, w:null} ]}
];

