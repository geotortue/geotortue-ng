lexer grammar GeoTortueLexer;

options {
  superClass = antlr.Lexer;
}

// --- Structure Tokens ---
GT_REP: 'GT_REP';
GT_WHILE: 'GT_WHILE';
GT_IF: 'GT_IF';
GT_THEN: 'GT_THEN';
GT_ELSE: 'GT_ELSE'; // ex GT_SINON
GT_FOR_EACH: 'GT_FOR_EACH';
GT_FROM: 'GT_FROM';
GT_TO: 'GT_TO';
GT_IN_LIST: 'GT_IN_LIST';
GT_FUN: 'GT_FUN';
GT_ASK_FOR: 'GT_ASK_FOR';
GT_ALL: 'GT_ALL';
GT_ASSIGN_KEY: 'GT_ASSIGN_KEY'; // For 'prend_la_valeur' if needed, though := is used

// --- Math Extensions ---
GT_RESTE: 'GT_RESTE';
GT_BINOM: 'GT_BINOM';
GT_ALEA: 'GT_ALEA';

// --- Commands ---
GT_FORWARD: 'GT_FORWARD'; // ex GT_AV
GT_BACKWARD: 'GT_BACKWARD'; // ex GT_RE
GT_RIGHT: 'GT_RIGHT'; // ex GT_TD
GT_LEFT: 'GT_LEFT'; // ex GT_TG
GT_VG: 'GT_VG';
GT_RZ: 'GT_RZ';
GT_CT: 'GT_CT';
GT_MT: 'GT_MT';
GT_PEN_UP: 'GT_PEN_UP'; // ex GT_LC
GT_PEN_DOWN: 'GT_PEN_DOWN'; // ex GT_BC
GT_THICKNESS: 'GT_THICKNESS';
GT_FILL: 'GT_FILL'; // ex GT_REMPLIS
GT_PVH: 'GT_PVH';
GT_PVB: 'GT_PVB';
GT_PVG: 'GT_PVG';
GT_PVD: 'GT_PVD';
GT_VISE: 'GT_VISE';
GT_TLP: 'GT_TLP';
GT_BOUSSOLE: 'GT_BOUSSOLE';
GT_MIMIC: 'GT_MIMIC'; // ex GT_IMITE
GT_MIRROR: 'GT_MIRROR'; // ex GT_MIROIR
GT_PVXY: 'GT_PVXY';
GT_PVXZ: 'GT_PVXZ';
GT_PVYZ: 'GT_PVYZ';
GT_WRITE: 'GT_WRITE'; // ex. GT_ECRIS
GT_SAY: 'GT_SAY'; // ex GT_DIS
GT_SNAPSHOT: 'GT_SNAPSHOT'; // ex GT_PHOTO
GT_PAUSE: 'GT_PAUSE';
GT_RETURN: 'GT_RETURN'; // ex GT_RETOURNE
GT_STOP: 'GT_STOP';
GT_WAIT: 'GT_WAIT';
GT_CIRCLE: 'GT_CIRCLE'; // ex GT_CERCLE
GT_ARC: 'GT_ARC';
GT_POINT: 'GT_POINT';
GT_GLOBAL: 'GT_GLOBAL';
GT_EFF: 'GT_EFF';
GT_INIT: 'GT_INIT';
GT_AFF: 'GT_AFF';
GT_MG: 'GT_MG';
GT_PLAY: 'GT_PLAY';
GT_SCORE: 'GT_SCORE';
GT_CONCERT: 'GT_CONCERT';
GT_EXECUTE: 'GT_EXECUTE';
GT_UNDO: 'GT_UNDO';

// --- Colors ---
GT_PEN_COLOR : 'GT_PEN_COLOR'; // ex GT_CRAYON

// --- Symbols ---
GT_ASSIGN: ':=';
GT_LBRACKET: '[';
GT_RBRACKET: ']';
GT_LPAREN: '(';
GT_RPAREN: ')';
GT_COMMA: ',';
GT_SEMICOLON: ';';
GT_COLON: ':';

// --- Math Operators ---
GT_PLUS: '+';
GT_MINUS: '-';
GT_MULT: '*';
GT_DIV: '/';
GT_POW: '^';
GT_EQ: '=';
GT_NEQ: '!=';
GT_LT: '<';
GT_LTE: '<=';
GT_GT: '>';
GT_GTE: '>=';

// --- Literals ---
GT_NUMBER: [0-9]+ ('.' [0-9]+)? ([eE] [+-]? [0-9]+)?;
GT_STRING: '"' (~["])* '"' | '\'' (~['])* '\'';

// --- Identifiers (Strict ASCII for internal vars, Extended for commands matching) ---
// We match both here. The token source will refine.
// Strict regex: [a-zA-Z_] [a-zA-Z0-9_]*
GT_ID: [a-zA-Z_] [a-zA-Z0-9_]*;

// Extended word for accented commands (like écris)
// If it matches ID, ID takes precedence if listed first? No, ANTLR matches longest.
// If same length, first rule wins. We put GT_ID first.
// Any command that fails GT_ID (accents) will be GT_WORD.
GT_WORD: [a-zA-Z_\u00C0-\u00FF][a-zA-Z0-9_\u00C0-\u00FF]*;

// --- Comments & Whitespace ---
GT_COMMENT: '//' ~[\r\n]* -> skip;
GT_BLOCK_COMMENT: '/*' .*? '*/' -> skip;
GT_WS: [ \t\r\n]+ -> skip;
