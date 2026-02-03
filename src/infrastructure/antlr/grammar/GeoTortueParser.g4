parser grammar GeoTortueParser;

options {
  tokenVocab = GeoTortueLexer;
  superClass = antlr.Parser;
}

program
  : statement* EOF
  ;

statement
  : command GT_SEMICOLON
  | structure
  ;

structure
  : repeatBlock
  | whileBlock
  | ifBlock
  | forEachBlock
  | functionDef
  ;

command
  : primitive
  | assignment # VarAssignment
  | identifier expr* # ProcedureCall
  ;

primitive
  : GT_FORWARD expr # MoveForward
  | GT_BACKWARD expr # MoveBackward
  | GT_RIGHT expr # TurnRight
  | GT_LEFT expr # TurnLeft
  | GT_VG # ClearGraphics
  | GT_RZ # ClearScreen
  | GT_CT # HideTurtle
  | GT_MT # ShowTurtle
  | GT_PEN_UP # PenUp
  | GT_PEN_DOWN # PenDown
  | GT_THICKNESS expr # SetThickness
  | GT_PEN_COLOR expr # SetColor
  | GT_FILL block # Fill
  | GT_PVH expr # PitchUp
  | GT_PVB expr # PitchDown
  | GT_PVG expr # RollLeft
  | GT_PVD expr # RollRight
  | GT_VISE expr # Aim
  | GT_TLP expr+ # Teleport
  | GT_BOUSSOLE # Home
  | GT_MIMIC expr # Mimic
  | GT_MIRROR # Mirror
  | GT_PVXY expr # RotateXY
  | GT_PVXZ expr # RotateXZ
  | GT_PVYZ expr # RotateYZ
  | GT_WRITE expr+ # Write
  | GT_SAY expr+ # Say
  | GT_SNAPSHOT expr # Snapshot
  | GT_PAUSE expr # Pause
  | GT_RETURN expr # Return
  | GT_STOP # Stop
  | GT_WAIT # Wait
  | GT_CIRCLE expr # Circle
  | GT_ARC expr expr # Arc
  | GT_POINT # Point
  | GT_GLOBAL expr+ # DeclareGlobal
  | GT_EFF expr+ # EraseVar
  | GT_INIT # Init
  | GT_AFF expr+ # ShowVar
  | GT_MG expr+ # ManipulateGraph
  | GT_PLAY expr+ # PlayMusic
  | GT_SCORE expr+ # Score
  | GT_CONCERT expr+ # Concert
  | GT_EXECUTE expr+ # Execute
  | GT_UNDO # Undo
  | GT_ASK_FOR expr expr? # AskFor
  ;

assignment
  : identifier GT_ASSIGN expr
  ;

repeatBlock
  : GT_REP expr block
  ;

whileBlock
  : GT_WHILE expr block
  ;

ifBlock
  : GT_IF expr GT_THEN? block (GT_ELSE block)?
  ;

forEachBlock
  : GT_FOR_EACH identifier GT_IN_LIST expr block
  | GT_FOR_EACH identifier GT_FROM expr GT_TO expr block
  ;

functionDef
  : GT_FUN identifier GT_LPAREN (identifier (GT_COMMA identifier)*)? GT_RPAREN GT_ASSIGN expr
  ;

block
  : GT_LBRACKET statement* GT_RBRACKET
  ;

expr
  : GT_LPAREN expr GT_RPAREN                        # ParenExpr
  | GT_MINUS expr                                   # UnaryMinusExpr
  | expr GT_POW expr                                # PowerExpr
  | expr (GT_MULT | GT_DIV | GT_RESTE) expr         # MultDivModExpr
  | expr (GT_PLUS | GT_MINUS) expr                  # AddSubExpr
  | expr (GT_LT | GT_LTE | GT_GT | GT_GTE) expr     # RelationalExpr
  | expr (GT_EQ | GT_NEQ) expr                      # EqualityExpr
  | GT_BINOM GT_LPAREN expr GT_COMMA expr GT_RPAREN # BinomExpr
  | GT_ALEA expr                                    # RandomExpr
  | atom                                            # AtomExpr
  ;

atom
  : GT_NUMBER
  | GT_STRING
  | identifier
  ;

identifier
  : GT_ID
  | GT_WORD
  ;
