var e=Object.defineProperty,t=(t,a)=>e(t,"name",{value:a,configurable:!0});import{G as a,a as r,t as i,D as n,b as o,c as s,d as c,e as l,T as d,f as h,g as p,N as u,h as g}from"./index-Cow1TfU6.js";import{w as _,x as b,y as m,z as v,A as f,G as T,H as y,J as x,K as w}from"./vendor-ibwglsix.js";import{D as C,V as S,R as E,E as G,a as $,b as L,o as k,k as R,i as A,c as O,C as I}from"./vendor-cm-jNKSuljA.js";import{g as N}from"./vendor-antlr-BWa_sbJI.js";import"./vendor-math-DHrQFY6m.js";import"./vendor-three-BBCA40AT.js";var D=(e=>(e[e.GT_FORWARD=1]="GT_FORWARD",e[e.GT_BACKWARD=2]="GT_BACKWARD",e[e.GT_TURN_RIGHT=3]="GT_TURN_RIGHT",e[e.GT_TURN_LEFT=4]="GT_TURN_LEFT",e[e.GT_CLEAR_GRAPHICS=5]="GT_CLEAR_GRAPHICS",e[e.GT_RESET=6]="GT_RESET",e[e.GT_UNDO_DRAWING=7]="GT_UNDO_DRAWING",e[e.GT_HIDE_TURTLE=8]="GT_HIDE_TURTLE",e[e.GT_SHOW_TURTLE=9]="GT_SHOW_TURTLE",e[e.GT_PEN_UP=10]="GT_PEN_UP",e[e.GT_PEN_DOWN=11]="GT_PEN_DOWN",e[e.GT_PEN_COLOR=12]="GT_PEN_COLOR",e[e.GT_PEN_THICKNESS=13]="GT_PEN_THICKNESS",e[e.GT_DRAW_POINT=14]="GT_DRAW_POINT",e[e.GT_MIRROR=15]="GT_MIRROR",e[e.GT_TELEPORT=16]="GT_TELEPORT",e[e.GT_COMPASS=17]="GT_COMPASS",e[e.GT_AIM=18]="GT_AIM",e[e.GT_MIMIC=19]="GT_MIMIC",e[e.GT_ROLL_RIGHT=20]="GT_ROLL_RIGHT",e[e.GT_ROLL_LEFT=21]="GT_ROLL_LEFT",e[e.GT_PITCH_UP=22]="GT_PITCH_UP",e[e.GT_PITCH_DOWN=23]="GT_PITCH_DOWN",e[e.GT_ROTATE_XY=24]="GT_ROTATE_XY",e[e.GT_ROTATE_XZ=25]="GT_ROTATE_XZ",e[e.GT_ROTATE_YZ=26]="GT_ROTATE_YZ",e[e.GT_DRAW_CIRCLE=27]="GT_DRAW_CIRCLE",e[e.GT_DRAW_ARC=28]="GT_DRAW_ARC",e[e.GT_PLAY=29]="GT_PLAY",e[e.GT_SCORE=30]="GT_SCORE",e[e.GT_CONCERT=31]="GT_CONCERT",e[e.GT_FILL=32]="GT_FILL",e[e.GT_WRITE=33]="GT_WRITE",e[e.GT_SAY=34]="GT_SAY",e[e.GT_INIT=35]="GT_INIT",e[e.GT_WAIT=36]="GT_WAIT",e[e.GT_PAUSE=37]="GT_PAUSE",e[e.GT_STOP=38]="GT_STOP",e[e.GT_RETURN=39]="GT_RETURN",e[e.GT_MANIPULATE_GRAPH=40]="GT_MANIPULATE_GRAPH",e[e.GT_SNAPSHOT=41]="GT_SNAPSHOT",e[e.GT_EXECUTE=42]="GT_EXECUTE",e[e.GT_DELETE=43]="GT_DELETE",e[e.GT_GLOBAL=44]="GT_GLOBAL",e[e.GT_DISPLAY=45]="GT_DISPLAY",e[e.GT_REPEAT=46]="GT_REPEAT",e[e.GT_WHILE=47]="GT_WHILE",e[e.GT_FOR_EACH=48]="GT_FOR_EACH",e[e.GT_FROM=49]="GT_FROM",e[e.GT_TO=50]="GT_TO",e[e.GT_IN_LIST=51]="GT_IN_LIST",e[e.GT_IF=52]="GT_IF",e[e.GT_THEN=53]="GT_THEN",e[e.GT_ELSE=54]="GT_ELSE",e[e.GT_SELECT=55]="GT_SELECT",e[e.GT_FUNCTION_DEF=56]="GT_FUNCTION_DEF",e[e.GT_ASK_FOR_VALUE=57]="GT_ASK_FOR_VALUE",e[e.GT_PROCEDURE_START=58]="GT_PROCEDURE_START",e[e.GT_PROCEDURE_END=59]="GT_PROCEDURE_END",e[e.GT_IDENTIFIER=60]="GT_IDENTIFIER",e[e.GT_WORD=61]="GT_WORD",e[e.GT_INTEGER_LITERAL=62]="GT_INTEGER_LITERAL",e[e.GT_FLOATING_POINT_LITERAL=63]="GT_FLOATING_POINT_LITERAL",e[e.GT_STRING_LITERAL=64]="GT_STRING_LITERAL",e[e.GT_STATEMENT_SEPARATOR=65]="GT_STATEMENT_SEPARATOR",e[e.GT_ASSIGN=66]="GT_ASSIGN",e[e.GT_COMMA=67]="GT_COMMA",e[e.GT_LEFT_SQUARE_BRACKET=68]="GT_LEFT_SQUARE_BRACKET",e[e.GT_RIGHT_SQUARE_BRACKET=69]="GT_RIGHT_SQUARE_BRACKET",e[e.GT_LEFT_PARENTHESIS=70]="GT_LEFT_PARENTHESIS",e[e.GT_RIGHT_PARENTHESIS=71]="GT_RIGHT_PARENTHESIS",e[e.GT_COLON=72]="GT_COLON",e[e.GT_GREATER_THAN=73]="GT_GREATER_THAN",e[e.GT_LESS_THAN=74]="GT_LESS_THAN",e[e.GT_EQUAL=75]="GT_EQUAL",e[e.GT_LESS_OR_EQUAL=76]="GT_LESS_OR_EQUAL",e[e.GT_GREATER_OR_EQUAL=77]="GT_GREATER_OR_EQUAL",e[e.GT_NOT_EQUAL=78]="GT_NOT_EQUAL",e[e.GT_LOGICAL_AND=79]="GT_LOGICAL_AND",e[e.GT_LOGICAL_OR=80]="GT_LOGICAL_OR",e[e.GT_PLUS=81]="GT_PLUS",e[e.GT_MINUS=82]="GT_MINUS",e[e.GT_MULTIPLY=83]="GT_MULTIPLY",e[e.GT_DOT=84]="GT_DOT",e[e.GT_DIVIDE=85]="GT_DIVIDE",e[e.GT_MODULO=86]="GT_MODULO",e[e.GT_LOGICAL_NOT=87]="GT_LOGICAL_NOT",e[e.GT_POWER=88]="GT_POWER",e[e.GT_CROSS_PRODUCT=89]="GT_CROSS_PRODUCT",e[e.GT_NEW_LINE=90]="GT_NEW_LINE",e[e.GT_HORIZONTAL_WHITESPACE=91]="GT_HORIZONTAL_WHITESPACE",e[e.GT_LINE_COMMENT_HASH=92]="GT_LINE_COMMENT_HASH",e[e.GT_LINE_COMMENT_SLASH=93]="GT_LINE_COMMENT_SLASH",e[e.GT_BLOCK_COMMENT=94]="GT_BLOCK_COMMENT",e[e.GT_ROLL_UP=95]="GT_ROLL_UP",e[e.GT_ROLL_DOWN=96]="GT_ROLL_DOWN",e))(D||{});const P={1:"GT_FORWARD",2:"GT_BACKWARD",3:"GT_TURN_RIGHT",4:"GT_TURN_LEFT",5:"GT_CLEAR_GRAPHICS",6:"GT_RESET",7:"GT_UNDO_DRAWING",8:"GT_HIDE_TURTLE",9:"GT_SHOW_TURTLE",10:"GT_PEN_UP",11:"GT_PEN_DOWN",12:"GT_PEN_COLOR",13:"GT_PEN_THICKNESS",14:"GT_DRAW_POINT",15:"GT_MIRROR",16:"GT_TELEPORT",17:"GT_COMPASS",18:"GT_AIM",19:"GT_MIMIC",20:"GT_ROLL_RIGHT",21:"GT_ROLL_LEFT",22:"GT_ROLL_UP",23:"GT_ROLL_DOWN",24:"GT_ROTATE_XY",25:"GT_ROTATE_XZ",26:"GT_ROTATE_YZ",27:"GT_DRAW_CIRCLE",28:"GT_DRAW_ARC",29:"GT_PLAY",30:"GT_SCORE",31:"GT_CONCERT",32:"GT_FILL",33:"GT_WRITE",34:"GT_SAY",35:"GT_INIT",36:"GT_WAIT",37:"GT_PAUSE",38:"GT_STOP",39:"GT_RETURN",40:"GT_MANIPULATE_GRAPH",41:"GT_SNAPSHOT",42:"GT_EXECUTE",43:"GT_DELETE",44:"GT_GLOBAL",45:"GT_DISPLAY",46:"GT_REPEAT",47:"GT_WHILE",48:"GT_FOR_EACH",49:"GT_FROM",50:"GT_TO",51:"GT_IN_LIST",52:"GT_IF",53:"GT_THEN",54:"GT_ELSE",55:"GT_SELECT",56:"GT_FUNCTION_DEF",57:"GT_ASK_FOR_VALUE",58:"GT_PROCEDURE_START",59:"GT_PROCEDURE_END",65:";",66:":=",67:",",68:"[",69:"]",70:"(",71:")",72:":",73:">",74:"<",75:"=",76:"<=",77:">=",78:"!=",79:"&&",80:"||",81:"+",82:"-",83:"*",84:".",85:"/",86:"%",87:"!",88:"^",89:"^^"};function U(e){return P[e]}t(U,"getLiteralName");const M=_`
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,F=_`
  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;

    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;

    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;

    /* Support for IE. */
    font-feature-settings: 'liga';
  }
`;class z{static{t(this,"UiLanguageController")}host;languageService;unsubscribe;constructor(e){this.host=e,this.languageService=a.getInstance().resolve(r.LanguageService),e.addController(this)}hostConnected(){this.unsubscribe=this.languageService.subscribeUiListeners(()=>{this.host.requestUpdate()})}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null)}}var j,W,K,H,B,q,V,Z,Y,Q,X,J,ee,te=Object.create,ae=Object.defineProperty,re=Object.getOwnPropertyDescriptor,ie=t((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$f"),ne=t(e=>{throw TypeError(e)},"__typeError$f"),oe=t((e,t,a)=>t in e?ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$f"),se=t((e,t)=>ae(e,"name",{value:t,configurable:!0}),"__name$f"),ce=t(e=>[,,,te(e?.[ie("metadata")]??null)],"__decoratorStart$f"),le=["class","method","getter","setter","accessor","field","value","get","set"],de=t(e=>void 0!==e&&"function"!=typeof e?ne("Function expected"):e,"__expectFn$f"),he=t((e,a,r,i,n)=>({kind:le[e],name:a,metadata:i,addInitializer:t(e=>r._?ne("Already initialized"):n.push(de(e||null)),"addInitializer")}),"__decoratorContext$f"),pe=t((e,t)=>oe(t,ie("metadata"),e[3]),"__decoratorMetadata$f"),ue=t((e,t,a,r)=>{for(var i=0,n=e[t>>1],o=n&&n.length;i<o;i++)1&t?n[i].call(a):r=n[i].call(a,r);return r},"__runInitializers$f"),ge=t((e,t,a,r,i,n)=>{var o,s,c,l,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,_=le[h+5],b=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(i=i.prototype),h<5&&(h>3||!u)&&re(h<4?i:{get[a](){return ve(this,n)},set[a](e){return Te(this,n,e)}},a));h?u&&h<4&&se(n,(h>2?"set ":h>1?"get ":"")+a):se(i,a);for(var f=r.length-1;f>=0;f--)l=he(h,a,c={},e[3],m),h&&(l.static=p,l.private=u,d=l.access={has:u?e=>me(i,e):e=>a in e},3^h&&(d.get=u?e=>(1^h?ve:ye)(e,i,4^h?n:v.get):e=>e[a]),h>2&&(d.set=u?(e,t)=>Te(e,i,t,4^h?n:v.set):(e,t)=>e[a]=t)),s=(0,r[f])(h?h<4?u?n:v[_]:h>4?void 0:{get:v.get,set:v.set}:i,l),c._=1,4^h||void 0===s?de(s)&&(h>4?b.unshift(s):h?u?n=s:v[_]=s:i=s):"object"!=typeof s||null===s?ne("Object expected"):(de(o=s.get)&&(v.get=o),de(o=s.set)&&(v.set=o),de(o=s.init)&&b.unshift(o));return h||pe(e,i),v&&ae(i,a,v),u?4^h?n:v:i},"__decorateElement$f"),_e=t((e,t,a)=>oe(e,"symbol"!=typeof t?t+"":t,a),"__publicField$9"),be=t((e,t,a)=>t.has(e)||ne("Cannot "+a),"__accessCheck$9"),me=t((e,t)=>Object(t)!==t?ne('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$9"),ve=t((e,t,a)=>(be(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet$9"),fe=t((e,t,a)=>t.has(e)?ne("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd$9"),Te=t((e,t,a,r)=>(be(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet$9"),ye=t((e,t,a)=>(be(e,t,"access private method"),a),"__privateMethod$9");V=[f("gtn-toolbar")];class xe extends(q=v,B=[T({type:String})],H=[T({type:String})],K=[T({type:String})],W=[T({type:String})],j=[T({type:String})],q){static{t(this,"GTNToolbar")}constructor(){super(),_e(this,"langService"),_e(this,"appState"),_e(this,"langController",new z(this)),fe(this,Y,ue(Z,8,this,i(n))),ue(Z,11,this),fe(this,Q,ue(Z,12,this,o(n))),ue(Z,15,this),fe(this,X,ue(Z,16,this,s)),ue(Z,19,this),fe(this,J,ue(Z,20,this,c)),ue(Z,23,this),fe(this,ee,ue(Z,24,this,"SANDBOX")),ue(Z,27,this);const e=a.getInstance();this.langService=e.resolve(r.LanguageService),this.appState=e.resolve(r.ApplicationState),this.currentUiLang=this.langService.getUiLanguage(),this.currentDslLang=this.langService.getDslLanguage(),this.appState.subscribe(()=>{this.currentMode=this.appState.mode,this.currentCamera=this.appState.cameraType})}handleRun(){this.dispatchEvent(new CustomEvent("run"))}handleClear(){this.dispatchEvent(new CustomEvent("clear"))}handleSave(){this.dispatchEvent(new CustomEvent("save-project"))}handleOpen(){this.dispatchEvent(new CustomEvent("open-project"))}async handleUiLangChange(e){const t=e.target,a=i(t.value);await this.langService.setUiLanguage(a),this.currentUiLang=a}async handleDslLangChange(e){const t=e.target,a=this.currentDslLang,r=o(t.value);await this.langService.setDslLanguage(r),this.currentDslLang=r,this.dispatchEvent(new CustomEvent("dsl-lang-change",{detail:{oldLang:a,newLang:r},bubbles:!0,composed:!0}))}handleToggleMode(){this.appState.toggleMode()}handleToggleCamera(){this.appState.toggleCameraType()}handleViewChange(e){this.currentView=e,this.dispatchEvent(new CustomEvent("view-change",{detail:{view:e},bubbles:!0,composed:!0}))}render(){const e=t(e=>this.langService.translate(e),"t");return this.currentUiLang=this.langService.getUiLanguage(),this.currentDslLang=this.langService.getDslLanguage(),m`
      <div class="toolbar-wrapper" role="toolbar" aria-label="Workspace Controls">
        <div class="group" aria-hidden="true" data-tooltip="${e("app.subtitle")}">
          <img src="/src/assets/icons/icon-128.png" alt="GéoTortue Logo" class="toolbar-icon" />
          <span class="title">${e("app.title")}</span>
        </div>

        <div
          class="group view-switcher"
          role="group"
          aria-label="View Modes"
          style="margin-left: 1rem; border-right: 1px solid #ccc; padding-right: 1rem;"
        >
          <button
            aria-pressed=${"EDITOR"===this.currentView}
            @click=${()=>this.handleViewChange("EDITOR")}
            title="${e("mode.editor")}"
          >
            <span class="material-icons">code</span>
            ${e("mode.editor")}
          </button>
          <button
            aria-pressed=${"SANDBOX"===this.currentView}
            @click=${()=>this.handleViewChange("SANDBOX")}
            title="${e("mode.sandbox")}"
          >
            <span class="material-icons">touch_app</span>
            ${e("mode.sandbox")}
          </button>
        </div>

        ${"EDITOR"===this.currentView?m`
              <div class="group">
                <button @click=${this.handleOpen} title="${e("toolbar.open_project")}">
                  <span class="material-icons">folder_open</span>
                </button>
                <button @click=${this.handleSave} title="${e("toolbar.save_project")}">
                  <span class="material-icons">save</span>
                </button>

                <div class="separator"></div>

                <button class="primary" @click=${this.handleRun} title="Ctrl+Enter">
                  <span class="material-icons">play_arrow</span> ${e("toolbar.run")}
                </button>
                <button class="danger" @click=${this.handleClear}>
                  <span class="material-icons">delete</span> ${e("toolbar.clear")}
                </button>
                <span style="font-size: 0.8rem; color: #666; font-style:italic;"
                  >${e("mode.editor.description")}</span
                >
              </div>
            `:m`
              <div class="group">
                <span style="font-size: 0.8rem; color: #666; font-style:italic;"
                  >${e("mode.sandbox.description")}</span
                >
              </div>
            `}

        <div class="group" style="margin-left: auto;">
          <button
            class="mode-badge"
            @click=${this.handleToggleMode}
            title="${e("toolbar.toggle.dim")}"
          >
            ${"3D"===this.currentMode?e("toolbar.toggle.dim.3d"):e("toolbar.toggle.dim.2d")}
          </button>
          ${"3D"===this.currentMode?m`
                <button
                  @click=${this.handleToggleCamera}
                  title="${e("toolbar.toggle.cam")}"
                  style="font-size:0.8rem"
                >
                  <span class="material-icons" style="font-size:1.1rem">videocam</span>
                  ${"PERSPECTIVE"===this.currentCamera?e("toolbar.toggle.cam.perspective"):e("toolbar.toggle.cam.orthographic")}
                </button>
              `:""}

          <div class="separator"></div>

          <span class="material-icons">translate</span>

          <span class="label">${e("toolbar.language")}</span>

          <div class="selector-wrapper">
            <label for="select-ui" class="label">${e("toolbar.selector.ui")}</label>
            <select id="select-ui" @change=${this.handleUiLangChange} .value=${this.currentUiLang}>
              <option value="fr">${e("languages.fr")}</option>
              <option value="en">${e("languages.en")}</option>
            </select>
          </div>
          ${"EDITOR"===this.currentView?m`
                <div class="selector-wrapper">
                  <label for="select-dsl" class="label">${e("toolbar.selector.dsl")}</label>
                  <select
                    id="select-dsl"
                    @change=${this.handleDslLangChange}
                    .value=${this.currentDslLang}
                  >
                    <option value="fr">${e("languages.fr")}</option>
                    <option value="en">${e("languages.en")}</option>
                  </select>
                </div>
              `:""}
        </div>
      </div>
    `}}function we(e,a){const r=e.getTokenStyleMap(),i=new d(a),n=C.mark({class:"cm-gt-user-procedure"});return S.fromClass(class{decorations;constructor(e){this.decorations=this.buildDecorations(e)}update(e){(e.docChanged||e.viewportChanged)&&(this.decorations=this.buildDecorations(e.view))}buildDecorations(t){const a=new E,o=t.state.doc.toString(),s=new Set(e.getExtractedProcedures().map(e=>e.toLowerCase())),c=N.fromString(o),d=new l(c);d.removeErrorListeners();const h=i.getRefinedTokens(()=>d.getAllTokens());for(const e of h){const t=e.text?.toLowerCase()||"";if(t&&s.has(t)){a.add(e.start,e.stop+1,n);continue}const i=r.get(e.type);i&&a.add(e.start,e.stop+1,C.mark({class:`cm-gt-${i}`}))}return a.finish()}},{decorations:t(e=>e.decorations,"decorations")})}Z=ce(q),Y=new WeakMap,Q=new WeakMap,X=new WeakMap,J=new WeakMap,ee=new WeakMap,ge(Z,4,"currentUiLang",B,xe,Y),ge(Z,4,"currentDslLang",H,xe,Q),ge(Z,4,"currentMode",K,xe,X),ge(Z,4,"currentCamera",W,xe,J),ge(Z,4,"currentView",j,xe,ee),xe=ge(Z,0,"GTNToolbar",V,xe),_e(xe,"styles",[F,_`
      ${b(":host{display:block;width:100%;height:50px;z-index:100}.toolbar-wrapper{display:flex;justify-content:space-between;align-items:center;padding:0 1rem;background-color:#2c3e50;color:#fff;height:100%;box-shadow:0 2px 5px #0003;overflow:visible}.group{display:flex;gap:10px;align-items:center;overflow:visible;position:relative}.group .toolbar-icon{width:42px;height:42px;object-fit:contain}[data-tooltip]{position:relative}[data-tooltip]:after{content:attr(data-tooltip);position:absolute;top:100%;left:50%;transform:translate(-50%) translateY(8px);padding:10px 16px;font-size:.9rem;border-radius:6px;background-color:#333;color:#fff;white-space:nowrap;z-index:1000;box-shadow:0 2px 8px #0000004d;opacity:0;display:none;visibility:hidden;transition:opacity .2s ease;pointer-events:none}[data-tooltip]:hover:after{display:block;opacity:1;visibility:visible;transform:translate(-50%) translateY(4px)}.label{font-size:.7rem;font-weight:600;color:#bdc3c7;margin-bottom:2px;text-transform:uppercase;letter-spacing:.5px}.selector-wrapper{display:flex;flex-direction:column;align-items:center;position:relative;overflow:visible}.separator{width:1px;height:25px;background:#46607a;margin:0 5px}button{background:#34495e;border:1px solid #46607a;color:#fff;padding:5px 12px;border-radius:4px;cursor:pointer;display:flex;align-items:center;gap:5px;font-size:.9rem;transition:all .1s cubic-bezier(.4,0,.2,1)}button:hover{background:#46607a}button.primary{background:#27ae60;border-color:#2ecc71}button.primary:hover{background:#2ecc71}button.danger{background:#c0392b;border-color:#e74c3c}button:active{transform:translateY(1px);box-shadow:inset 0 3px 6px #0006;background:#2c3e50;border-color:#1a252f}button.primary:active{transform:translateY(1px);box-shadow:inset 0 3px 6px #0000004d;background:#1e8449;border-color:#145a32}button.danger:active{transform:translateY(1px);box-shadow:inset 0 3px 6px #0000004d;background:#922b21;border-color:#641e16}select{background:#34495e;color:#fff;border:1px solid #46607a;padding:2px 5px;border-radius:4px;cursor:pointer;font-size:.85rem;min-width:50px;position:relative;z-index:10}.title{font-weight:700;font-family:Inconsolata,monospace;font-size:1.2rem}.mode-badge{font-weight:900;color:#f1c40f;min-width:30px;justify-content:center}")}

      // .view-switcher button.active {
      //   background-color: #e3f2fd; /* Light Blue highlight */
      //   color: #1565c0;
      //   border-bottom: 2px solid #1565c0;
      // }

      .view-switcher button {
        // background: var(--gtn-btn-bg, #eee);
        // color: var(--gtn-text, #333);
        // border: 1px solid #ccc;
        transition: all 0.1s ease;
      }

      .view-switcher button[aria-pressed='true'],
      .view-switcher button.active {
        background: #1a252f;
        color: #3498db;
        border-color: #0f171e;
        box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.6);
        transform: translateY(1px);
      }
    `]),ue(Z,1,xe),t(we,"createAntlrHighlighter");const Ce=G.baseTheme({".cm-gt-keyword":{color:"#c678dd",fontWeight:"bold"},".cm-gt-command":{color:"#61afef"},".cm-gt-number":{color:"#d19a66"},".cm-gt-string":{color:"#98c379"},".cm-gt-variable":{color:"#e06c75"},".cm-gt-comment":{color:"#5c6370",fontStyle:"italic"},".cm-gt-operator":{color:"#56b6c2"},".cm-gt-user-procedure":{color:"#c678dd",fontWeight:"bold"}});var Se,Ee,Ge,$e,Le,ke,Re,Ae=Object.create,Oe=Object.defineProperty,Ie=Object.getOwnPropertyDescriptor,Ne=t((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$e"),De=t(e=>{throw TypeError(e)},"__typeError$e"),Pe=t((e,t,a)=>t in e?Oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$e"),Ue=t((e,t)=>Oe(e,"name",{value:t,configurable:!0}),"__name$e"),Me=t(e=>[,,,Ae(e?.[Ne("metadata")]??null)],"__decoratorStart$e"),Fe=["class","method","getter","setter","accessor","field","value","get","set"],ze=t(e=>void 0!==e&&"function"!=typeof e?De("Function expected"):e,"__expectFn$e"),je=t((e,a,r,i,n)=>({kind:Fe[e],name:a,metadata:i,addInitializer:t(e=>r._?De("Already initialized"):n.push(ze(e||null)),"addInitializer")}),"__decoratorContext$e"),We=t((e,t)=>Pe(t,Ne("metadata"),e[3]),"__decoratorMetadata$e"),Ke=t((e,t,a,r)=>{for(var i=0,n=e[t>>1],o=n&&n.length;i<o;i++)1&t?n[i].call(a):r=n[i].call(a,r);return r},"__runInitializers$e"),He=t((e,t,a,r,i,n)=>{var o,s,c,l,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,_=Fe[h+5],b=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(i=i.prototype),h<5&&(h>3||!u)&&Ie(h<4?i:{get[a](){return Ze(this,n)},set[a](e){return Qe(this,n,e)}},a));h?u&&h<4&&Ue(n,(h>2?"set ":h>1?"get ":"")+a):Ue(i,a);for(var f=r.length-1;f>=0;f--)l=je(h,a,c={},e[3],m),h&&(l.static=p,l.private=u,d=l.access={has:u?e=>Ve(i,e):e=>a in e},3^h&&(d.get=u?e=>(1^h?Ze:Xe)(e,i,4^h?n:v.get):e=>e[a]),h>2&&(d.set=u?(e,t)=>Qe(e,i,t,4^h?n:v.set):(e,t)=>e[a]=t)),s=(0,r[f])(h?h<4?u?n:v[_]:h>4?void 0:{get:v.get,set:v.set}:i,l),c._=1,4^h||void 0===s?ze(s)&&(h>4?b.unshift(s):h?u?n=s:v[_]=s:i=s):"object"!=typeof s||null===s?De("Object expected"):(ze(o=s.get)&&(v.get=o),ze(o=s.set)&&(v.set=o),ze(o=s.init)&&b.unshift(o));return h||We(e,i),v&&Oe(i,a,v),u?4^h?n:v:i},"__decorateElement$e"),Be=t((e,t,a)=>Pe(e,"symbol"!=typeof t?t+"":t,a),"__publicField$8"),qe=t((e,t,a)=>t.has(e)||De("Cannot "+a),"__accessCheck$8"),Ve=t((e,t)=>Object(t)!==t?De('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$8"),Ze=t((e,t,a)=>(qe(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet$8"),Ye=t((e,t,a)=>t.has(e)?De("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd$8"),Qe=t((e,t,a,r)=>(qe(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet$8"),Xe=t((e,t,a)=>(qe(e,t,"access private method"),a),"__privateMethod$8");$e=[f("gtn-editor")];class Je extends(Ge=v,Ee=[T({type:String})],Se=[y("#editor-container")],Ge){static{t(this,"GTNEditor")}constructor(){super(),Ye(this,ke,Ke(Le,8,this)),Ke(Le,11,this),Ye(this,Re,Ke(Le,12,this)),Ke(Le,15,this),Be(this,"editor"),Be(this,"langService"),Be(this,"langController",new z(this)),Be(this,"languageCompartment",new I),Be(this,"syntaxService");const e=a.getInstance();this.langService=e.resolve(r.LanguageService),this.syntaxService=e.resolve(r.SyntaxService),this.code=""}firstUpdated(){this.initEditor()}disconnectedCallback(){super.disconnectedCallback(),this.editor?.destroy()}initEditor(){const e=we(this.syntaxService,this.langService),t=$.create({doc:this.code,extensions:[L,R.of([A]),k,Ce,e,this.languageCompartment.of([e]),G.updateListener.of(e=>{e.docChanged&&(this.code=e.state.doc.toString(),this.onEditorChange(this.code))})]});this.editor=new G({state:t,parent:this.editorContainer}),this.updateLanguageFeatures()}onEditorChange(e){this.dispatchEvent(new CustomEvent("code-change",{detail:{code:e},bubbles:!0,composed:!0}))}updated(e){super.updated(e),this.updateLanguageFeatures(),this.translateCodeInEditor(e)}translateCodeInEditor(e){if(!e.has("code")||!this.editor)return;const t=this.editor.state.doc.toString();t!==this.code&&this.editor.dispatch({changes:{from:0,to:t.length,insert:this.code}})}updateLanguageFeatures(){if(!this.editor)return;const e=this.langService.getAllKeywords(),t=O({override:[t=>{const a=t.matchBefore(/\w*/);return!a||a.from===a.to&&!t.explicit?null:{from:a.from,options:e.map(e=>({label:e,type:"keyword"}))}}]});this.editor.dispatch({effects:this.languageCompartment.reconfigure([t,we(this.syntaxService,this.langService)])})}render(){return m`<div id="editor-container"></div>`}}Le=Me(Ge),ke=new WeakMap,Re=new WeakMap,He(Le,4,"code",Ee,Je,ke),He(Le,4,"editorContainer",Se,Je,Re),Je=He(Le,0,"GTNEditor",$e,Je),Be(Je,"styles",_`
    ${b(":host{display:block;font-family:var(--font-code);height:100%;overflow:hidden;font-size:14px}#editor-container,.cm-editor{height:100%}.cm-editor .cm-scroller{font-family:inherit}")}
  `),Ke(Le,1,Je);var et,tt,at,rt,it,nt=Object.create,ot=Object.defineProperty,st=Object.getOwnPropertyDescriptor,ct=t((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$d"),lt=t(e=>{throw TypeError(e)},"__typeError$d"),dt=t((e,t,a)=>t in e?ot(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$d"),ht=t((e,t)=>ot(e,"name",{value:t,configurable:!0}),"__name$d"),pt=t(e=>[,,,nt(e?.[ct("metadata")]??null)],"__decoratorStart$d"),ut=["class","method","getter","setter","accessor","field","value","get","set"],gt=t(e=>void 0!==e&&"function"!=typeof e?lt("Function expected"):e,"__expectFn$d"),_t=t((e,a,r,i,n)=>({kind:ut[e],name:a,metadata:i,addInitializer:t(e=>r._?lt("Already initialized"):n.push(gt(e||null)),"addInitializer")}),"__decoratorContext$d"),bt=t((e,t)=>dt(t,ct("metadata"),e[3]),"__decoratorMetadata$d"),mt=t((e,t,a,r)=>{for(var i=0,n=e[t>>1],o=n&&n.length;i<o;i++)1&t?n[i].call(a):r=n[i].call(a,r);return r},"__runInitializers$d"),vt=t((e,t,a,r,i,n)=>{var o,s,c,l,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,_=ut[h+5],b=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(i=i.prototype),h<5&&(h>3||!u)&&st(h<4?i:{get[a](){return xt(this,n)},set[a](e){return Ct(this,n,e)}},a));h?u&&h<4&&ht(n,(h>2?"set ":h>1?"get ":"")+a):ht(i,a);for(var f=r.length-1;f>=0;f--)l=_t(h,a,c={},e[3],m),h&&(l.static=p,l.private=u,d=l.access={has:u?e=>yt(i,e):e=>a in e},3^h&&(d.get=u?e=>(1^h?xt:St)(e,i,4^h?n:v.get):e=>e[a]),h>2&&(d.set=u?(e,t)=>Ct(e,i,t,4^h?n:v.set):(e,t)=>e[a]=t)),s=(0,r[f])(h?h<4?u?n:v[_]:h>4?void 0:{get:v.get,set:v.set}:i,l),c._=1,4^h||void 0===s?gt(s)&&(h>4?b.unshift(s):h?u?n=s:v[_]=s:i=s):"object"!=typeof s||null===s?lt("Object expected"):(gt(o=s.get)&&(v.get=o),gt(o=s.set)&&(v.set=o),gt(o=s.init)&&b.unshift(o));return h||bt(e,i),v&&ot(i,a,v),u?4^h?n:v:i},"__decorateElement$d"),ft=t((e,t,a)=>dt(e,"symbol"!=typeof t?t+"":t,a),"__publicField$7"),Tt=t((e,t,a)=>t.has(e)||lt("Cannot "+a),"__accessCheck$7"),yt=t((e,t)=>Object(t)!==t?lt('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$7"),xt=t((e,t,a)=>(Tt(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet$7"),wt=t((e,t,a)=>t.has(e)?lt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd$7"),Ct=t((e,t,a,r)=>(Tt(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet$7"),St=t((e,t,a)=>(Tt(e,t,"access private method"),a),"__privateMethod$7");at=[f("gtn-canvas")];class Et extends(tt=v,et=[y("#render-container")],tt){static{t(this,"GTNCanvas")}constructor(){super(),wt(this,it,mt(rt,8,this)),mt(rt,11,this),ft(this,"turtleRepo"),ft(this,"appState"),ft(this,"renderLoop"),ft(this,"renderer2D"),ft(this,"renderer3D"),ft(this,"currentRenderer",null),ft(this,"unsubscribeLoop",null);const e=a.getInstance();this.turtleRepo=e.resolve(r.TurtleRepository),this.appState=e.resolve(r.ApplicationState),this.renderLoop=e.resolve(r.RenderLoop),this.renderer2D=e.resolve(r.Renderer2D),this.renderer3D=e.resolve(r.Renderer3D)}firstUpdated(){this.syncRenderer(),this.appState.subscribe(()=>{this.syncRenderer()}),window.addEventListener("resize",()=>this.handleResize()),this.unsubscribeLoop=this.renderLoop.subscribe(()=>{this.currentRenderer&&this.currentRenderer.render(this.turtleRepo)}),this.renderLoop.start()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeLoop&&(this.unsubscribeLoop(),this.unsubscribeLoop=null),this.renderLoop.stop(),window.removeEventListener("resize",()=>this.handleResize()),this.currentRenderer&&this.currentRenderer.dispose()}syncRenderer(){const e=this.appState.mode,t=this.appState.cameraType,a="3D"===e;a===this.currentRenderer instanceof h&&this.currentRenderer||(this.currentRenderer&&this.currentRenderer.dispose(),this.currentRenderer="3D"===e?new h:new p,this.container&&this.currentRenderer.attach(this.container)),a&&this.currentRenderer instanceof h&&this.currentRenderer.setCameraType(t)}handleResize(){if(!this.currentRenderer||!this.container)return;const e=this.container.getBoundingClientRect();this.currentRenderer.resize(e.width,e.height)}render(){return m`<div id="render-container"></div>`}}vt(rt=pt(tt),4,"container",et,Et,it=new WeakMap),Et=vt(rt,0,"GTNCanvas",at,Et),ft(Et,"styles",_`
    ${b(":host{display:block;width:100%;height:100%;overflow:hidden;background:#f0f0f0}#render-container{width:100%;height:100%}")}
  `),mt(rt,1,Et);var Gt,$t,Lt,kt=Object.create,Rt=Object.defineProperty,At=Object.getOwnPropertyDescriptor,Ot=t((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$c"),It=t(e=>{throw TypeError(e)},"__typeError$c"),Nt=t((e,t,a)=>t in e?Rt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$c"),Dt=t((e,t)=>Rt(e,"name",{value:t,configurable:!0}),"__name$c"),Pt=t(e=>[,,,kt(e?.[Ot("metadata")]??null)],"__decoratorStart$c"),Ut=["class","method","getter","setter","accessor","field","value","get","set"],Mt=t(e=>void 0!==e&&"function"!=typeof e?It("Function expected"):e,"__expectFn$c"),Ft=t((e,a,r,i,n)=>({kind:Ut[e],name:a,metadata:i,addInitializer:t(e=>r._?It("Already initialized"):n.push(Mt(e||null)),"addInitializer")}),"__decoratorContext$c"),zt=t((e,t)=>Nt(t,Ot("metadata"),e[3]),"__decoratorMetadata$c"),jt=t((e,t,a,r)=>{for(var i=0,n=e[t>>1],o=n&&n.length;i<o;i++)n[i].call(a);return r},"__runInitializers$c"),Wt=t((e,t,a,r,i,n)=>{var o,s,c,l=7&t,d=e[0]||(e[0]=[]),h=l&&(i=i.prototype,l<5&&(l>3||!0)&&At(i,a));Dt(i,a);for(var p=r.length-1;p>=0;p--)c=Ft(l,a,s={},e[3],d),o=(0,r[p])(i,c),s._=1,Mt(o)&&(i=o);return zt(e,i),h&&Rt(i,a,h),i},"__decorateElement$c");Gt=[f("dev-reset-button")];class Kt extends(Lt=v){static{t(this,"DevResetButton")}static styles=_`
    ${b("button{background-color:#f44;color:#fff;border:none;padding:8px 16px;border-radius:4px;cursor:pointer;font-weight:700}button:hover{background-color:#c00}")}
  `;resetApp(){localStorage.clear(),sessionStorage.clear(),window.location.reload()}render(){return m` <button @click="${this.resetApp}">Reset Local Data & Reload</button> `}}jt($t=Pt(Lt),1,Kt=Wt($t,0,"DevResetButton",Gt,Kt));var Ht,Bt,qt,Vt,Zt,Yt=Object.create,Qt=Object.defineProperty,Xt=Object.getOwnPropertyDescriptor,Jt=t((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$b"),ea=t(e=>{throw TypeError(e)},"__typeError$b"),ta=t((e,t,a)=>t in e?Qt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$b"),aa=t((e,t)=>Qt(e,"name",{value:t,configurable:!0}),"__name$b"),ra=t(e=>[,,,Yt(e?.[Jt("metadata")]??null)],"__decoratorStart$b"),ia=["class","method","getter","setter","accessor","field","value","get","set"],na=t(e=>void 0!==e&&"function"!=typeof e?ea("Function expected"):e,"__expectFn$b"),oa=t((e,a,r,i,n)=>({kind:ia[e],name:a,metadata:i,addInitializer:t(e=>r._?ea("Already initialized"):n.push(na(e||null)),"addInitializer")}),"__decoratorContext$b"),sa=t((e,t)=>ta(t,Jt("metadata"),e[3]),"__decoratorMetadata$b"),ca=t((e,t,a,r)=>{for(var i=0,n=e[t>>1],o=n&&n.length;i<o;i++)1&t?n[i].call(a):r=n[i].call(a,r);return r},"__runInitializers$b"),la=t((e,t,a,r,i,n)=>{var o,s,c,l,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,_=ia[h+5],b=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(i=i.prototype),h<5&&(h>3||!u)&&Xt(h<4?i:{get[a](){return ua(this,n)},set[a](e){return _a(this,n,e)}},a));h?u&&h<4&&aa(n,(h>2?"set ":h>1?"get ":"")+a):aa(i,a);for(var f=r.length-1;f>=0;f--)l=oa(h,a,c={},e[3],m),h&&(l.static=p,l.private=u,d=l.access={has:u?e=>pa(i,e):e=>a in e},3^h&&(d.get=u?e=>(1^h?ua:ba)(e,i,4^h?n:v.get):e=>e[a]),h>2&&(d.set=u?(e,t)=>_a(e,i,t,4^h?n:v.set):(e,t)=>e[a]=t)),s=(0,r[f])(h?h<4?u?n:v[_]:h>4?void 0:{get:v.get,set:v.set}:i,l),c._=1,4^h||void 0===s?na(s)&&(h>4?b.unshift(s):h?u?n=s:v[_]=s:i=s):"object"!=typeof s||null===s?ea("Object expected"):(na(o=s.get)&&(v.get=o),na(o=s.set)&&(v.set=o),na(o=s.init)&&b.unshift(o));return h||sa(e,i),v&&Qt(i,a,v),u?4^h?n:v:i},"__decorateElement$b"),da=t((e,t,a)=>ta(e,t+"",a),"__publicField$6"),ha=t((e,t,a)=>t.has(e)||ea("Cannot "+a),"__accessCheck$6"),pa=t((e,t)=>Object(t)!==t?ea('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$6"),ua=t((e,t,a)=>(ha(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet$6"),ga=t((e,t,a)=>t.has(e)?ea("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd$6"),_a=t((e,t,a,r)=>(ha(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet$6"),ba=t((e,t,a)=>(ha(e,t,"access private method"),a),"__privateMethod$6");qt=[f("gtn-error-toast")];class ma extends(Bt=v,Ht=[T({type:Array})],Bt){static{t(this,"GTNErrorToast")}constructor(){super(...arguments),ga(this,Zt,ca(Vt,8,this,[])),ca(Vt,11,this)}render(){return m`
      ${this.errors.map(e=>m`
          <div class="toast">
            <div class="header">
              <span>Syntax Error (Line ${e.line})</span>
            </div>
            <div class="msg">${e.message}</div>
          </div>
        `)}
    `}}la(Vt=ra(Bt),4,"errors",Ht,ma,Zt=new WeakMap),da(ma=la(Vt,0,"GTNErrorToast",qt,ma),"styles",_`
    ${b(":host{display:block;position:fixed;bottom:20px;right:20px;max-width:350px}.toast{background:#fff5f5;border-left:5px solid #f56565;box-shadow:0 4px 6px #0000001a;padding:12px 16px;margin-top:8px;border-radius:4px;animation:slideIn .3s ease-out}.header{font-weight:700;color:#c53030;display:flex;justify-content:space-between;font-size:.9em}.msg{font-size:.85em;margin-top:4px;color:#2d3748}@keyframes slideIn{0%{transform:translate(100%);opacity:0}to{transform:translate(0);opacity:1}}")}
  `),ca(Vt,1,ma);var va,fa,Ta,ya=Object.create,xa=Object.defineProperty,wa=Object.getOwnPropertyDescriptor,Ca=t((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$a"),Sa=t(e=>{throw TypeError(e)},"__typeError$a"),Ea=t((e,t,a)=>t in e?xa(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$a"),Ga=t((e,t)=>xa(e,"name",{value:t,configurable:!0}),"__name$a"),$a=t(e=>[,,,ya(e?.[Ca("metadata")]??null)],"__decoratorStart$a"),La=["class","method","getter","setter","accessor","field","value","get","set"],ka=t(e=>void 0!==e&&"function"!=typeof e?Sa("Function expected"):e,"__expectFn$a"),Ra=t((e,a,r,i,n)=>({kind:La[e],name:a,metadata:i,addInitializer:t(e=>r._?Sa("Already initialized"):n.push(ka(e||null)),"addInitializer")}),"__decoratorContext$a"),Aa=t((e,t)=>Ea(t,Ca("metadata"),e[3]),"__decoratorMetadata$a"),Oa=t((e,t,a,r)=>{for(var i=0,n=e[t>>1],o=n&&n.length;i<o;i++)n[i].call(a);return r},"__runInitializers$a"),Ia=t((e,t,a,r,i,n)=>{var o,s,c,l=7&t,d=e[0]||(e[0]=[]),h=l&&(i=i.prototype,l<5&&(l>3||!0)&&wa(i,a));Ga(i,a);for(var p=r.length-1;p>=0;p--)c=Ra(l,a,s={},e[3],d),o=(0,r[p])(i,c),s._=1,ka(o)&&(i=o);return Aa(e,i),h&&xa(i,a,h),i},"__decorateElement$a");va=[f("gtn-navigation-panel")];class Na extends(Ta=v){static{t(this,"GTNNavigationPanel")}static styles=_`
    :host {
      display: block;
      margin-bottom: 1rem;
    }
    .d-pad {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 5px;
      // max-width: 120px;
      margin: 0 auto;

      button {
        padding: 10px;
        cursor: pointer;
        background: #e9ecef;
        border: 1px solid #dee2e6;
        border-radius: 4px;
        font-size: 1.2rem;
        color: #495057;
      }

      button:hover {
        background: #dee2e6;
      }

      button:active {
        background: #ced4da;
        transform: translateY(1px);
      }
    }

    .center {
      visibility: hidden;
    }
  `;langService;unsubscribeUiLang=null;constructor(){super(),this.langService=a.getInstance().resolve(r.LanguageService)}connectedCallback(){super.connectedCallback(),this.unsubscribeUiLang=this.langService.subscribeUiListeners(()=>{this.requestUpdate()})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeUiLang&&(this.unsubscribeUiLang(),this.unsubscribeUiLang=null)}emit(e){const t={action:e};this.dispatchEvent(new CustomEvent("move",{detail:t}))}render(){const e=t(e=>this.langService.translate(e),"t");return m`
      <div class="d-pad">
        <button class="center"></button>
        <button
          @click=${()=>this.emit(D.GT_FORWARD)}
          title="${e("sandbox.tooltip.forward")}"
        >
          ▲
        </button>
        <button class="center"></button>

        <button
          @click=${()=>this.emit(D.GT_TURN_LEFT)}
          title="${e("sandbox.tooltip.left")}"
        >
          ◀
        </button>
        <button
          @click=${()=>this.emit(D.GT_BACKWARD)}
          title="${e("sandbox.tooltip.backward")}"
        >
          ▼
        </button>
        <button
          @click=${()=>this.emit(D.GT_TURN_RIGHT)}
          title="${e("sandbox.tooltip.right")}"
        >
          ▶
        </button>
      </div>
    `}}Oa(fa=$a(Ta),1,Na=Ia(fa,0,"GTNNavigationPanel",va,Na));var Da,Pa,Ua,Ma,Fa,za=Object.create,ja=Object.defineProperty,Wa=Object.getOwnPropertyDescriptor,Ka=t((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$9"),Ha=t(e=>{throw TypeError(e)},"__typeError$9"),Ba=t((e,t,a)=>t in e?ja(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$9"),qa=t((e,t)=>ja(e,"name",{value:t,configurable:!0}),"__name$9"),Va=t(e=>[,,,za(e?.[Ka("metadata")]??null)],"__decoratorStart$9"),Za=["class","method","getter","setter","accessor","field","value","get","set"],Ya=t(e=>void 0!==e&&"function"!=typeof e?Ha("Function expected"):e,"__expectFn$9"),Qa=t((e,a,r,i,n)=>({kind:Za[e],name:a,metadata:i,addInitializer:t(e=>r._?Ha("Already initialized"):n.push(Ya(e||null)),"addInitializer")}),"__decoratorContext$9"),Xa=t((e,t)=>Ba(t,Ka("metadata"),e[3]),"__decoratorMetadata$9"),Ja=t((e,t,a,r)=>{for(var i=0,n=e[t>>1],o=n&&n.length;i<o;i++)1&t?n[i].call(a):r=n[i].call(a,r);return r},"__runInitializers$9"),er=t((e,t,a,r,i,n)=>{var o,s,c,l,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,_=Za[h+5],b=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(i=i.prototype),h<5&&(h>3||!u)&&Wa(h<4?i:{get[a](){return ir(this,n)},set[a](e){return or(this,n,e)}},a));h?u&&h<4&&qa(n,(h>2?"set ":h>1?"get ":"")+a):qa(i,a);for(var f=r.length-1;f>=0;f--)l=Qa(h,a,c={},e[3],m),h&&(l.static=p,l.private=u,d=l.access={has:u?e=>rr(i,e):e=>a in e},3^h&&(d.get=u?e=>(1^h?ir:sr)(e,i,4^h?n:v.get):e=>e[a]),h>2&&(d.set=u?(e,t)=>or(e,i,t,4^h?n:v.set):(e,t)=>e[a]=t)),s=(0,r[f])(h?h<4?u?n:v[_]:h>4?void 0:{get:v.get,set:v.set}:i,l),c._=1,4^h||void 0===s?Ya(s)&&(h>4?b.unshift(s):h?u?n=s:v[_]=s:i=s):"object"!=typeof s||null===s?Ha("Object expected"):(Ya(o=s.get)&&(v.get=o),Ya(o=s.set)&&(v.set=o),Ya(o=s.init)&&b.unshift(o));return h||Xa(e,i),v&&ja(i,a,v),u?4^h?n:v:i},"__decorateElement$9"),tr=t((e,t,a)=>Ba(e,"symbol"!=typeof t?t+"":t,a),"__publicField$5"),ar=t((e,t,a)=>t.has(e)||Ha("Cannot "+a),"__accessCheck$5"),rr=t((e,t)=>Object(t)!==t?Ha('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$5"),ir=t((e,t,a)=>(ar(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet$5"),nr=t((e,t,a)=>t.has(e)?Ha("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd$5"),or=t((e,t,a,r)=>(ar(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet$5"),sr=t((e,t,a)=>(ar(e,t,"access private method"),a),"__privateMethod$5");Ua=[f("gtn-compass-panel")];class cr extends(Pa=v,Da=[T({type:Number})],Pa){static{t(this,"GTNCompassPanel")}constructor(){super(),nr(this,Fa,Ja(Ma,8,this,0)),Ja(Ma,11,this),tr(this,"langService"),tr(this,"unsubscribeUiLang",null),this.langService=a.getInstance().resolve(r.LanguageService)}connectedCallback(){super.connectedCallback(),this.unsubscribeUiLang=this.langService.subscribeUiListeners(()=>{this.requestUpdate()})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeUiLang&&(this.unsubscribeUiLang(),this.unsubscribeUiLang=null)}handleClick(e){const t=e.currentTarget.getBoundingClientRect(),a=t.width/2,r=t.height/2,i=e.clientX-t.left-a,n=e.clientY-t.top-r;let o=Math.atan2(n,i)*(180/Math.PI);o=(o+90+360)%360;const s=5*Math.round(o/5);this.dispatchEvent(new CustomEvent("heading-change",{detail:{heading:s}}))}render(){const e=`rotate(${this.heading}, 50, 50)`,a=t(e=>this.langService.translate(e),"t"),r=a("unit.degree");return m`
      <div class="compass-container" @click=${this.handleClick} title="${a("compass.set.heading")}">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="#f8f9fa" stroke="#ccc" stroke-width="2" />

          <text x="50" y="15" text-anchor="middle">${a("compass.n")}</text>
          <text x="85" y="54" text-anchor="middle">${a("compass.e")}</text>
          <text x="50" y="92" text-anchor="middle">${a("compass.s")}</text>
          <text x="15" y="54" text-anchor="middle">${a("compass.w")}</text>

          <line x1="50" y1="5" x2="50" y2="10" stroke="#ccc" />
          <line x1="50" y1="90" x2="50" y2="95" stroke="#ccc" />
          <line x1="5" y1="50" x2="10" y2="50" stroke="#ccc" />
          <line x1="90" y1="50" x2="95" y2="50" stroke="#ccc" />

          <g transform="${e}">
            <path d="M50 20 L55 50 L45 50 Z" fill="red" />
            <!--                <path d="M50 80 L55 50 L45 50 Z" fill="#666" /> -->
            <!--                <circle cx="50" cy="50" r="3" fill="#333" /> -->
          </g>
        </svg>
      </div>
      <div style="font-size:0.8rem; color:#666; margin-top:5px">
        ${Math.round(this.heading)}${r}
      </div>
    `}}er(Ma=Va(Pa),4,"heading",Da,cr,Fa=new WeakMap),cr=er(Ma,0,"GTNCompassPanel",Ua,cr),tr(cr,"styles",_`
    :host {
      display: block;
      margin-bottom: 1rem;
      text-align: center;
    }
    .compass-container {
      position: relative;
      width: 100px;
      height: 100px;
      margin: 0 auto;
      cursor: pointer;
    }
    .compass-container:hover circle {
      stroke: #1976d2;
    }
    text {
      font-family: sans-serif;
      font-size: 10px;
      fill: #666;
      user-select: none;
    }
  `),Ja(Ma,1,cr);var lr,dr,hr,pr,ur,gr,_r,br,mr,vr=Object.create,fr=Object.defineProperty,Tr=Object.getOwnPropertyDescriptor,yr=t((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$8"),xr=t(e=>{throw TypeError(e)},"__typeError$8"),wr=t((e,t,a)=>t in e?fr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$8"),Cr=t((e,t)=>fr(e,"name",{value:t,configurable:!0}),"__name$8"),Sr=t(e=>[,,,vr(e?.[yr("metadata")]??null)],"__decoratorStart$8"),Er=["class","method","getter","setter","accessor","field","value","get","set"],Gr=t(e=>void 0!==e&&"function"!=typeof e?xr("Function expected"):e,"__expectFn$8"),$r=t((e,a,r,i,n)=>({kind:Er[e],name:a,metadata:i,addInitializer:t(e=>r._?xr("Already initialized"):n.push(Gr(e||null)),"addInitializer")}),"__decoratorContext$8"),Lr=t((e,t)=>wr(t,yr("metadata"),e[3]),"__decoratorMetadata$8"),kr=t((e,t,a,r)=>{for(var i=0,n=e[t>>1],o=n&&n.length;i<o;i++)1&t?n[i].call(a):r=n[i].call(a,r);return r},"__runInitializers$8"),Rr=t((e,t,a,r,i,n)=>{var o,s,c,l,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,_=Er[h+5],b=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(i=i.prototype),h<5&&(h>3||!u)&&Tr(h<4?i:{get[a](){return Nr(this,n)},set[a](e){return Pr(this,n,e)}},a));h?u&&h<4&&Cr(n,(h>2?"set ":h>1?"get ":"")+a):Cr(i,a);for(var f=r.length-1;f>=0;f--)l=$r(h,a,c={},e[3],m),h&&(l.static=p,l.private=u,d=l.access={has:u?e=>Ir(i,e):e=>a in e},3^h&&(d.get=u?e=>(1^h?Nr:Ur)(e,i,4^h?n:v.get):e=>e[a]),h>2&&(d.set=u?(e,t)=>Pr(e,i,t,4^h?n:v.set):(e,t)=>e[a]=t)),s=(0,r[f])(h?h<4?u?n:v[_]:h>4?void 0:{get:v.get,set:v.set}:i,l),c._=1,4^h||void 0===s?Gr(s)&&(h>4?b.unshift(s):h?u?n=s:v[_]=s:i=s):"object"!=typeof s||null===s?xr("Object expected"):(Gr(o=s.get)&&(v.get=o),Gr(o=s.set)&&(v.set=o),Gr(o=s.init)&&b.unshift(o));return h||Lr(e,i),v&&fr(i,a,v),u?4^h?n:v:i},"__decorateElement$8"),Ar=t((e,t,a)=>wr(e,"symbol"!=typeof t?t+"":t,a),"__publicField$4"),Or=t((e,t,a)=>t.has(e)||xr("Cannot "+a),"__accessCheck$4"),Ir=t((e,t)=>Object(t)!==t?xr('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$4"),Nr=t((e,t,a)=>(Or(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet$4"),Dr=t((e,t,a)=>t.has(e)?xr("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd$4"),Pr=t((e,t,a,r)=>(Or(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet$4"),Ur=t((e,t,a)=>(Or(e,t,"access private method"),a),"__privateMethod$4");const Mr=!0;ur=[f("gtn-settings-panel")];class Fr extends(pr=v,hr=[T({type:Number})],dr=[T({type:Number})],lr=[T({type:Boolean})],pr){static{t(this,"GTNSettingsPanel")}constructor(){super(),Dr(this,_r,kr(gr,8,this,50)),kr(gr,11,this),Dr(this,br,kr(gr,12,this,90)),kr(gr,15,this),Dr(this,mr,kr(gr,16,this,Mr)),kr(gr,19,this),Ar(this,"langService"),Ar(this,"unsubscribeUiLang",null),Ar(this,"toggleKeyboard",()=>{this.keyboardActive=!this.keyboardActive;const e={value:this.keyboardActive};this.dispatchEvent(new CustomEvent("keyboard-status",{detail:e}))}),this.langService=a.getInstance().resolve(r.LanguageService)}connectedCallback(){super.connectedCallback(),this.unsubscribeUiLang=this.langService.subscribeUiListeners(()=>{this.requestUpdate()})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeUiLang&&(this.unsubscribeUiLang(),this.unsubscribeUiLang=null)}handleInput(e,t){const a=parseInt(e.target.value,10)||0;this.dispatchEvent(new CustomEvent("setting-change",{detail:{type:t,value:a}}))}render(){const e=t(e=>this.langService.translate(e),"t");return m`
      <div class="field">
        <label>${e("sandbox.step")}</label>
        <input
          type="number"
          .value=${String(this.step)}
          @change=${e=>this.handleInput(e,"step")}
        />
      </div>
      <div class="field">
        <label>${e("sandbox.angle")}</label>
        <input
          type="number"
          .value=${String(this.rotation)}
          @change=${e=>this.handleInput(e,"angle")}
        />
      </div>
      <label class="toggle-switch">
        <div>
          <span class="label-icon">⌨️</span>
          <span class="label-text">
            ${this.keyboardActive?e("sandbox.keyboard_on"):e("sandbox.keyboard_off")}
          </span>
        </div>
        <div class="switch-track">
          <input
            type="checkbox"
            role="switch"
            .checked=${this.keyboardActive}
            @change=${this.toggleKeyboard}
            aria-checked=${this.keyboardActive?"true":"false"}
          />
          <span class="slider"></span>
        </div>
      </label>
    `}}gr=Sr(pr),_r=new WeakMap,br=new WeakMap,mr=new WeakMap,Rr(gr,4,"step",hr,Fr,_r),Rr(gr,4,"rotation",dr,Fr,br),Rr(gr,4,"keyboardActive",lr,Fr,mr),Fr=Rr(gr,0,"GTNSettingsPanel",ur,Fr),Ar(Fr,"styles",_`
    :host {
      display: block;
      margin-bottom: 1rem;
    }
    .field {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
    }
    input {
      width: 50px;
      padding: 4px;
      text-align: center;
    }
    label {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      font-size: 0.9rem;
      color: #555;

      .label-icon {
        font-size: 24px;
      }
    }
    /* Container for the whole switch + text */
    .toggle-switch {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      font-size: 0.85rem;
      user-select: none;
    }
    /* The structural wrapper for the pill */
    .switch-track {
      position: relative;
      width: 36px;
      height: 20px;
      display: inline-block;
    }
    /* Hide the default HTML checkbox */
    .switch-track input {
      opacity: 0;
      width: 0;
      height: 0;
      position: absolute;
    }
    /* The pill background */
    .slider {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      border-radius: 20px;
      transition: background-color 0.3s ease;
    }
    /* The sliding circle */
    .slider::before {
      content: '';
      position: absolute;
      height: 16px;
      width: 16px;
      left: 2px;
      bottom: 2px;
      background-color: white;
      border-radius: 50%;
      transition: transform 0.3s ease;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
    /* --- ACTIVE STATE --- */
    .switch-track input:checked + .slider {
      background-color: #007bff; /* Change this to your primary theme color */
    }
    .switch-track input:checked + .slider::before {
      transform: translateX(16px);
    }
    /* --- ACCESSIBILITY / FOCUS --- */
    .switch-track input:focus-visible + .slider {
      outline: 2px solid #007bff;
      outline-offset: 2px;
    }
  `),kr(gr,1,Fr);const zr="0 -960 960 960",jr={check:{content:x`<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>`},close:{content:x`<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>`},menu:{content:x`<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>`},settings:{content:x`<path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.58 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>`},home:{content:x`<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>`},user:{content:x`<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>`},eye:{content:x`
    <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    </path>
    <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    </path>
  `},eyeSlash:{content:x`
    <path d="M2.99902 3L20.999 21M9.8433 9.91364C9.32066 10.4536 8.99902 11.1892 8.99902 12C8.99902 13.6569 10.3422 15 11.999 15C12.8215 15 13.5667 14.669 14.1086 14.133M6.49902 6.64715C4.59972 7.90034 3.15305 9.78394 2.45703 12C3.73128 16.0571 7.52159 19 11.9992 19C13.9881 19 15.8414 18.4194 17.3988 17.4184M10.999 5.04939C11.328 5.01673 11.6617 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C21.2607 12.894 20.8577 13.7338 20.3522 14.5"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    </path>`},pen:{content:x`
    <path d="M15.4998 5.49994L18.3282 8.32837M3 20.9997L3.04745 20.6675C3.21536 19.4922 3.29932 18.9045 3.49029 18.3558C3.65975 17.8689 3.89124 17.4059 4.17906 16.9783C4.50341 16.4963 4.92319 16.0765 5.76274 15.237L17.4107 3.58896C18.1918 2.80791 19.4581 2.80791 20.2392 3.58896C21.0202 4.37001 21.0202 5.63634 20.2392 6.41739L8.37744 18.2791C7.61579 19.0408 7.23497 19.4216 6.8012 19.7244C6.41618 19.9932 6.00093 20.2159 5.56398 20.3879C5.07171 20.5817 4.54375 20.6882 3.48793 20.9012L3 20.9997Z"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`},penSlash:{content:x`
    <path d="M15.4998 5.50067L18.3282 8.3291M13.3254 7.67502L17.4107 3.58969C18.1918 2.80865 19.4581 2.80864 20.2392 3.58969C21.0202 4.37074 21.0202 5.63707 20.2392 6.41812L16.1538 10.5034M3 3L10.5002 10.5002M21 21L13.3286 13.3286M13.3286 13.3286L8.37744 18.2798C7.61579 19.0415 7.23497 19.4223 6.8012 19.7252C6.41618 19.994 6.00093 20.2167 5.56398 20.3887C5.07171 20.5824 4.54375 20.6889 3.48793 20.902L3 21.0004L3.04745 20.6683C3.21536 19.4929 3.29932 18.9052 3.49029 18.3565C3.65975 17.8697 3.89124 17.4067 4.17906 16.979C4.50341 16.497 4.92319 16.0772 5.76274 15.2377L10.5002 10.5002M13.3286 13.3286L10.5002 10.5002"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`},draw:{content:x`
    <path d="M160-120v-170l527-526q12-12 27-18t30-6q16 0 30.5 6t25.5 18l56 56q12 11 18 25.5t6 30.5q0 15-6 30t-18 27L330-120H160Zm80-80h56l393-392-28-29-29-28-392 393v56Zm560-503-57-57 57 57Zm-139 82-29-28 57 57-28-29ZM560-120q74 0 137-37t63-103q0-36-19-62t-51-45l-59 59q23 10 36 22t13 26q0 23-36.5 41.5T560-200q-17 0-28.5 11.5T520-160q0 17 11.5 28.5T560-120ZM183-426l60-60q-20-8-31.5-16.5T200-520q0-12 18-24t76-37q88-38 117-69t29-70q0-55-44-87.5T280-840q-45 0-80.5 16T145-785q-11 13-9 29t15 26q13 11 29 9t27-13q14-14 31-20t42-6q41 0 60.5 12t19.5 28q0 14-17.5 25.5T262-654q-80 35-111 63.5T120-520q0 32 17 54.5t46 39.5Z"
          fill="currentColor"
    />`,viewBox:zr},editOff:{content:x`
    <path d="m622-453-56-56 82-82-57-57-82 82-56-56 195-195q12-12 26.5-17.5T705-840q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L622-453ZM200-200h57l195-195-28-29-29-28-195 195v57ZM792-56 509-338 290-120H120v-169l219-219L56-792l57-57 736 736-57 57Zm-32-648-56-56 56 56Zm-169 56 57 57-57-57ZM424-424l-29-28 57 57-28-29Z"
          fill="currentColor"
    />`,viewBox:zr},visibility:{content:x`
    <path d="M607.5-372.5Q660-425 660-500t-52.5-127.5Q555-680 480-680t-127.5 52.5Q300-575 300-500t52.5 127.5Q405-320 480-320t127.5-52.5Zm-204-51Q372-455 372-500t31.5-76.5Q435-608 480-608t76.5 31.5Q588-545 588-500t-31.5 76.5Q525-392 480-392t-76.5-31.5ZM214-281.5Q94-363 40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200q-146 0-266-81.5ZM480-500Zm207.5 160.5Q782-399 832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280q113 0 207.5-59.5Z"
          fill="currentColor"
    />`,viewBox:zr},visibilityOff:{content:x`
    <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"
          fill="currentColor"
    />`,viewBox:zr}};function Wr(e){return"string"==typeof e&&Object.prototype.hasOwnProperty.call(jr,e)}function Kr(e){if(Wr(e))return e}function Hr(e){const t=Kr(e);if(!t)return;const a=jr[t];return{...a,viewBox:a.viewBox??"0 0 24 24"}}t(Wr,"isIconName"),t(Kr,"tryToIconName"),t(Hr,"getIconFromName");var Br,qr,Vr,Zr,Yr,Qr,Xr,Jr=Object.create,ei=Object.defineProperty,ti=Object.getOwnPropertyDescriptor,ai=t((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$7"),ri=t(e=>{throw TypeError(e)},"__typeError$7"),ii=t((e,t,a)=>t in e?ei(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$7"),ni=t((e,t)=>ei(e,"name",{value:t,configurable:!0}),"__name$7"),oi=t(e=>[,,,Jr(e?.[ai("metadata")]??null)],"__decoratorStart$7"),si=["class","method","getter","setter","accessor","field","value","get","set"],ci=t(e=>void 0!==e&&"function"!=typeof e?ri("Function expected"):e,"__expectFn$7"),li=t((e,a,r,i,n)=>({kind:si[e],name:a,metadata:i,addInitializer:t(e=>r._?ri("Already initialized"):n.push(ci(e||null)),"addInitializer")}),"__decoratorContext$7"),di=t((e,t)=>ii(t,ai("metadata"),e[3]),"__decoratorMetadata$7"),hi=t((e,t,a,r)=>{for(var i=0,n=e[t>>1],o=n&&n.length;i<o;i++)1&t?n[i].call(a):r=n[i].call(a,r);return r},"__runInitializers$7"),pi=t((e,t,a,r,i,n)=>{var o,s,c,l,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,_=si[h+5],b=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(i=i.prototype),h<5&&(h>3||!u)&&ti(h<4?i:{get[a](){return bi(this,n)},set[a](e){return vi(this,n,e)}},a));h?u&&h<4&&ni(n,(h>2?"set ":h>1?"get ":"")+a):ni(i,a);for(var f=r.length-1;f>=0;f--)l=li(h,a,c={},e[3],m),h&&(l.static=p,l.private=u,d=l.access={has:u?e=>_i(i,e):e=>a in e},3^h&&(d.get=u?e=>(1^h?bi:fi)(e,i,4^h?n:v.get):e=>e[a]),h>2&&(d.set=u?(e,t)=>vi(e,i,t,4^h?n:v.set):(e,t)=>e[a]=t)),s=(0,r[f])(h?h<4?u?n:v[_]:h>4?void 0:{get:v.get,set:v.set}:i,l),c._=1,4^h||void 0===s?ci(s)&&(h>4?b.unshift(s):h?u?n=s:v[_]=s:i=s):"object"!=typeof s||null===s?ri("Object expected"):(ci(o=s.get)&&(v.get=o),ci(o=s.set)&&(v.set=o),ci(o=s.init)&&b.unshift(o));return h||di(e,i),v&&ei(i,a,v),u?4^h?n:v:i},"__decorateElement$7"),ui=t((e,t,a)=>ii(e,t+"",a),"__publicField$3"),gi=t((e,t,a)=>t.has(e)||ri("Cannot "+a),"__accessCheck$3"),_i=t((e,t)=>Object(t)!==t?ri('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$3"),bi=t((e,t,a)=>(gi(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet$3"),mi=t((e,t,a)=>t.has(e)?ri("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd$3"),vi=t((e,t,a,r)=>(gi(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet$3"),fi=t((e,t,a)=>(gi(e,t,"access private method"),a),"__privateMethod$3");Zr=[f("gtn-icon")];class Ti extends(Vr=v,qr=[T({type:String})],Br=[T({type:String})],Vr){static{t(this,"GtnIcon")}constructor(){super(...arguments),mi(this,Qr,hi(Yr,8,this)),hi(Yr,11,this),mi(this,Xr,hi(Yr,12,this)),hi(Yr,15,this)}render(){const e=Hr(this.icon);return e?m`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="${e.viewBox}"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
        focusable="false"
      >
        ${e.content}
      </svg>
    `:m``}}Yr=oi(Vr),Qr=new WeakMap,Xr=new WeakMap,pi(Yr,4,"icon",qr,Ti,Qr),pi(Yr,4,"viewBox",Br,Ti,Xr),ui(Ti=pi(Yr,0,"GtnIcon",Zr,Ti),"styles",_`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      vertical-align: middle;
      width: 1em;
      height: 1em;
      color: currentColor;
      font-size: 24px; /* Base size if not inherited */
    }
    svg {
      display: block;
      width: 100%;
      height: 100%;
      pointer-events: none; /* Let clicks pass through to parent button */
      stroke: currentColor;
      fill: none;
      // stroke: none;
    }

    /* If the icon has a stroke-width attribute, we adjust */
    // svg[stroke-width] {
    //   stroke: currentColor;
    // }
  `),hi(Yr,1,Ti);var yi,xi,wi,Ci=Object.create,Si=Object.defineProperty,Ei=Object.getOwnPropertyDescriptor,Gi=t((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$6"),$i=t(e=>{throw TypeError(e)},"__typeError$6"),Li=t((e,t,a)=>t in e?Si(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$6"),ki=t((e,t)=>Si(e,"name",{value:t,configurable:!0}),"__name$6"),Ri=t(e=>[,,,Ci(e?.[Gi("metadata")]??null)],"__decoratorStart$6"),Ai=["class","method","getter","setter","accessor","field","value","get","set"],Oi=t(e=>void 0!==e&&"function"!=typeof e?$i("Function expected"):e,"__expectFn$6"),Ii=t((e,a,r,i,n)=>({kind:Ai[e],name:a,metadata:i,addInitializer:t(e=>r._?$i("Already initialized"):n.push(Oi(e||null)),"addInitializer")}),"__decoratorContext$6"),Ni=t((e,t)=>Li(t,Gi("metadata"),e[3]),"__decoratorMetadata$6"),Di=t((e,t,a,r)=>{for(var i=0,n=e[t>>1],o=n&&n.length;i<o;i++)n[i].call(a);return r},"__runInitializers$6"),Pi=t((e,t,a,r,i,n)=>{var o,s,c,l=7&t,d=e[0]||(e[0]=[]),h=l&&(i=i.prototype,l<5&&(l>3||!0)&&Ei(i,a));ki(i,a);for(var p=r.length-1;p>=0;p--)c=Ii(l,a,s={},e[3],d),o=(0,r[p])(i,c),s._=1,Oi(o)&&(i=o);return Ni(e,i),h&&Si(i,a,h),i},"__decorateElement$6");yi=[f("gtn-commands-panel")];class Ui extends(wi=v){static{t(this,"GTNCommandsPanel")}static styles=_`
    :host {
      display: block;
      margin-bottom: 1rem;
    }
    // .grid {
    //   display: flex;
    //   flex-direction: column;
    //   gap: 5px;
    // }
    button {
      padding: 8px;
      font-size: 0.85rem;
      cursor: pointer;
      background: #fff;
      border: 1px solid #ccc;
      border-radius: 4px;
      text-align: center;
    }
    button:hover {
      background: #f0f0f0;
    }
    .icon {
      margin-right: 8px;
      width: 20px;
      text-align: center;
      display: inline-block;

      gtn-icon {
        font-size: 16px;
      }
    }
    /* Direct Cmds */
    .cmd-row {
      display: flex;
      align-items: center;
      gap: 4px;
      margin-bottom: 6px;
    }
    .cmd-row button {
      flex: 1;
      padding: 6px 2px;
      font-size: 0.75rem;
      background: white;
      border: 1px solid #ced4da;
      border-radius: 4px;
      cursor: pointer;
    }
    .cmd-row button:hover {
      background: #f1f3f5;
    }
    .separator {
      height: 1px;
      background: #e9ecef;
      margin: 8px 0;
    }
    /* Tools */
    .tools-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px;
    }
    .tools-grid button {
      padding: 6px;
      font-size: 0.75rem;
      background: white;
      border: 1px solid #ced4da;
      border-radius: 4px;
      cursor: pointer;
    }
  `;langService;unsubscribeUiLang=null;constructor(){super(),this.langService=a.getInstance().resolve(r.LanguageService)}connectedCallback(){super.connectedCallback(),this.unsubscribeUiLang=this.langService.subscribeUiListeners(()=>{this.requestUpdate()})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeUiLang&&(this.unsubscribeUiLang(),this.unsubscribeUiLang=null)}emit(e,t){const a={action:e,value:t};this.dispatchEvent(new CustomEvent("command",{detail:a}))}render(){const e=t(e=>this.langService.translate(e),"t"),a=e("commands.GT_FORWARD"),r=e("commands.GT_BACKWARD"),i=e("commands.GT_TURN_LEFT"),n=e("commands.GT_TURN_RIGHT"),o=e("unit.degree");return m`
      <div class="cmd-row">
        <button @click=${()=>this.emit(D.GT_FORWARD,10)}>${a} 10</button>
        <button @click=${()=>this.emit(D.GT_FORWARD,25)}>${a} 25</button>
        <button @click=${()=>this.emit(D.GT_FORWARD,100)}>${a} 100</button>
      </div>

      <div class="cmd-row">
        <button @click=${()=>this.emit(D.GT_BACKWARD,10)}>${r} 10</button>
        <button @click=${()=>this.emit(D.GT_BACKWARD,25)}>${r} 25</button>
        <button @click=${()=>this.emit(D.GT_BACKWARD,100)}>${r} 100</button>
      </div>

      <div class="separator"></div>

      <div class="cmd-row">
        <button @click=${()=>this.emit(D.GT_TURN_LEFT,30)}>${i} 30${o}</button>
        <button @click=${()=>this.emit(D.GT_TURN_LEFT,45)}>${i} 45${o}</button>
        <button @click=${()=>this.emit(D.GT_TURN_LEFT,90)}>${i} 90${o}</button>
      </div>

      <div class="cmd-row">
        <button @click=${()=>this.emit(D.GT_TURN_RIGHT,30)}>${n} 30${o}</button>
        <button @click=${()=>this.emit(D.GT_TURN_RIGHT,45)}>${n} 45${o}</button>
        <button @click=${()=>this.emit(D.GT_TURN_RIGHT,90)}>${n} 90${o}</button>
      </div>

      <div class="separator"></div>

      <div class="tools-grid">
        <button @click=${()=>this.emit(D.GT_PEN_DOWN)}>
          <span class="icon"><gtn-icon icon="draw"></gtn-icon></span>${e("sandbox.btn.pendown")}
        </button>
        <button @click=${()=>this.emit(D.GT_PEN_UP)}>
          <span class="icon"><gtn-icon icon="editOff"></gtn-icon></span>${e("sandbox.btn.penup")}
        </button>
        <button @click=${()=>this.emit(D.GT_SHOW_TURTLE)}>
          <span class="icon"><gtn-icon icon="visibility"></gtn-icon></span>${e("sandbox.btn.showturtle")}
        </button>
        <button @click=${()=>this.emit(D.GT_HIDE_TURTLE)}>
          <span class="icon"><gtn-icon icon="visibilityOff"></gtn-icon></span>${e("sandbox.btn.hideturtle")}
        </button>
      </div>
    `}}Di(xi=Ri(wi),1,Ui=Pi(xi,0,"GTNCommandsPanel",yi,Ui));var Mi,Fi,zi,ji=Object.create,Wi=Object.defineProperty,Ki=Object.getOwnPropertyDescriptor,Hi=t((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$5"),Bi=t(e=>{throw TypeError(e)},"__typeError$5"),qi=t((e,t,a)=>t in e?Wi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$5"),Vi=t((e,t)=>Wi(e,"name",{value:t,configurable:!0}),"__name$5"),Zi=t(e=>[,,,ji(e?.[Hi("metadata")]??null)],"__decoratorStart$5"),Yi=["class","method","getter","setter","accessor","field","value","get","set"],Qi=t(e=>void 0!==e&&"function"!=typeof e?Bi("Function expected"):e,"__expectFn$5"),Xi=t((e,a,r,i,n)=>({kind:Yi[e],name:a,metadata:i,addInitializer:t(e=>r._?Bi("Already initialized"):n.push(Qi(e||null)),"addInitializer")}),"__decoratorContext$5"),Ji=t((e,t)=>qi(t,Hi("metadata"),e[3]),"__decoratorMetadata$5"),en=t((e,t,a,r)=>{for(var i=0,n=e[t>>1],o=n&&n.length;i<o;i++)n[i].call(a);return r},"__runInitializers$5"),tn=t((e,t,a,r,i,n)=>{var o,s,c,l=7&t,d=e[0]||(e[0]=[]),h=l&&(i=i.prototype,l<5&&(l>3||!0)&&Ki(i,a));Vi(i,a);for(var p=r.length-1;p>=0;p--)c=Xi(l,a,s={},e[3],d),o=(0,r[p])(i,c),s._=1,Qi(o)&&(i=o);return Ji(e,i),h&&Wi(i,a,h),i},"__decorateElement$5");const an=[u.BLACK,u.RED,u.BLUE,u.GREEN,u.YELLOW,u.ORANGE];Mi=[f("gtn-color-panel")];class rn extends(zi=v){static{t(this,"GTNColorPanel")}static styles=_`
    :host {
      display: block;
    }
    .palette {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 5px;
    }
    .swatch {
      height: 30px;
      border-radius: 4px;
      cursor: pointer;
      border: 1px solid rgba(0, 0, 0, 0.1);
      transition: transform 0.1s;
    }
    .swatch:hover {
      transform: scale(1.05);
      border-color: #000;
    }
  `;langService;unsubscribeUiLang=null;constructor(){super(),this.langService=a.getInstance().resolve(r.LanguageService)}connectedCallback(){super.connectedCallback(),this.unsubscribeUiLang=this.langService.subscribeUiListeners(()=>{this.requestUpdate()})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeUiLang&&(this.unsubscribeUiLang(),this.unsubscribeUiLang=null)}emit(e){const t={color:e};this.dispatchEvent(new CustomEvent("color-change",{detail:t}))}render(){const e=t(e=>this.langService.translate(e),"t");return m`
      <div class="palette">
        ${an.map(t=>m`
            <div
              class="swatch"
              style="background-color: ${t}"
              @click=${()=>this.emit(t)}
              title="${e("sandbox.btn.colors."+t)}"
            ></div>
          `)}
      </div>
    `}}en(Fi=Zi(zi),1,rn=tn(Fi,0,"GTNColorPanel",Mi,rn));var nn,on,sn,cn,ln=Object.create,dn=Object.defineProperty,hn=Object.getOwnPropertyDescriptor,pn=t((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$4"),un=t(e=>{throw TypeError(e)},"__typeError$4"),gn=t((e,t,a)=>t in e?dn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$4"),_n=t((e,t)=>dn(e,"name",{value:t,configurable:!0}),"__name$4"),bn=t(e=>[,,,ln(e?.[pn("metadata")]??null)],"__decoratorStart$4"),mn=["class","method","getter","setter","accessor","field","value","get","set"],vn=t(e=>void 0!==e&&"function"!=typeof e?un("Function expected"):e,"__expectFn$4"),fn=t((e,a,r,i,n)=>({kind:mn[e],name:a,metadata:i,addInitializer:t(e=>r._?un("Already initialized"):n.push(vn(e||null)),"addInitializer")}),"__decoratorContext$4"),Tn=t((e,t)=>gn(t,pn("metadata"),e[3]),"__decoratorMetadata$4"),yn=t((e,t,a,r)=>{for(var i=0,n=e[t>>1],o=n&&n.length;i<o;i++)n[i].call(a);return r},"__runInitializers$4"),xn=t((e,t,a,r,i,n)=>{var o,s,c,l=7&t,d=e[0]||(e[0]=[]),h=l&&(i=i.prototype,l<5&&(l>3||!0)&&hn(i,a));_n(i,a);for(var p=r.length-1;p>=0;p--)c=fn(l,a,s={},e[3],d),o=(0,r[p])(i,c),s._=1,vn(o)&&(i=o);return Tn(e,i),h&&dn(i,a,h),i},"__decorateElement$4");nn=[f("gtn-controls-panel")];class wn extends(sn=v){static{t(this,"GTNControlsPanel")}static styles=[F,_`
      :host {
        display: block;
        margin-top: auto;
        padding-top: 1rem; /* border-top: 1px solid #eee;*/
      }

      .actions {
        display: flex;
        flex-direction: row;
        gap: 8px;
      }

      button {
        padding: 8px;
        cursor: pointer;
        width: 100%;
        background: #fff;
        border: 1px solid #ccc;
        border-radius: 4px;
      }

      button:hover {
        background-color: #f8f9fa;
      }
      .danger {
        color: #d32f2f;
        border-color: #d32f2f;
      }
      .danger:hover {
        background-color: #ffebee;
      }
    `];langService;unsubscribeUiLang=null;constructor(){super(),this.langService=a.getInstance().resolve(r.LanguageService)}connectedCallback(){super.connectedCallback(),this.unsubscribeUiLang=this.langService.subscribeUiListeners(()=>{this.requestUpdate()})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeUiLang&&(this.unsubscribeUiLang(),this.unsubscribeUiLang=null)}render(){const e=t(e=>this.langService.translate(e),"t");return m`
      <div class="actions">
        <button class="danger" @click=${()=>this.dispatchEvent(new CustomEvent("home"))}>
          <span class="material-icons" style="font-size:16px; vertical-align:text-bottom"
            >home</span
          >
          ${e("sandbox.btn.reset")}
        </button>
        <button class="danger" @click=${()=>this.dispatchEvent(new CustomEvent("clear"))}>
          <span class="material-icons" style="font-size:16px; vertical-align:text-bottom"
            >delete</span
          >
          ${e("sandbox.btn.clear_graph")}
        </button>
      </div>
    `}}yn(on=bn(sn),1,wn=xn(on,0,"GTNControlsPanel",nn,wn)),(e=>{var a,r;function i(e){return 1===e.length}(a=e.Keys||(e.Keys={})).Backspace="Backspace",a.Tab="Tab",a.Enter="Enter",a.Shift="Shift",a.Control="Control",a.Alt="Alt",a.Pause="Pause",a.CapsLock="CapsLock",a.Escape="Escape",a.Space=" ",a.PageUp="PageUp",a.PageDown="PageDown",a.End="End",a.Home="Home",a.ArrowLeft="ArrowLeft",a.ArrowUp="ArrowUp",a.ArrowRight="ArrowRight",a.ArrowDown="ArrowDown",a.PrintScreen="PrintScreen",a.Insert="Insert",a.Delete="Delete",a.Digit0="0",a.Digit1="1",a.Digit2="2",a.Digit3="3",a.Digit4="4",a.Digit5="5",a.Digit6="6",a.Digit7="7",a.Digit8="8",a.Digit9="9",a.A="A",a.B="B",a.C="C",a.D="D",a.E="E",a.F="F",a.G="G",a.H="H",a.I="I",a.J="J",a.K="K",a.L="L",a.M="M",a.N="N",a.O="O",a.P="P",a.Q="Q",a.R="R",a.S="S",a.T="T",a.U="U",a.V="V",a.W="W",a.X="X",a.Y="Y",a.Z="Z",a.a="a",a.b="b",a.c="c",a.d="d",a.e="e",a.f="f",a.g="g",a.h="h",a.i="i",a.j="j",a.k="k",a.l="l",a.m="m",a.n="n",a.o="o",a.p="p",a.q="q",a.r="r",a.s="s",a.t="t",a.u="u",a.v="v",a.w="w",a.x="x",a.y="y",a.z="z",a.Meta="Meta",a.ContextMenu="ContextMenu",a.AudioVolumeMute="AudioVolumeMute",a.AudioVolumeDown="AudioVolumeDown",a.AudioVolumeUp="AudioVolumeUp",a.F1="F1",a.F2="F2",a.F3="F3",a.F4="F4",a.F5="F5",a.F6="F6",a.F7="F7",a.F8="F8",a.F9="F9",a.F10="F10",a.F11="F11",a.F12="F12",a.NumLock="NumLock",a.ScrollLock="ScrollLock",a.Semicolon=";",a.Equal="=",a.Comma=",",a.Minus="-",a.Period=".",a.Slash="/",a.Backquote="`",a.BracketLeft="[",a.Backslash="\\",a.BracketRight="]",a.Quote="'",a.Tilde="~",a.Exclamation="!",a.At="@",a.Sharp="#",a.Dollar="$",a.Percent="%",a.Caret="^",a.Ampersand="&",a.Asterisk="*",a.ParenthesisLeft="(",a.ParenthesisRight=")",a.Underscore="_",a.Plus="+",a.OpenBrace="{",a.CloseBrace="}",a.Pipe="|",a.Colon=":",a.Quote2='"',a.AngleBracketLeft="<",a.AngleBracketRight=">",a.QuestionMark="?",(r=e.Codes||(e.Codes={})).Backspace="Backspace",r.Tab="Tab",r.Enter="Enter",r.ShiftLeft="ShiftLeft",r.ShiftRight="ShiftRight",r.ControlLeft="ControlLeft",r.ControlRight="ControlRight",r.AltLeft="AltLeft",r.AltRight="AltRight",r.Pause="Pause",r.CapsLock="CapsLock",r.Escape="Escape",r.Space="Space",r.PageUp="PageUp",r.PageDown="PageDown",r.End="End",r.Home="Home",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.PrintScreen="PrintScreen",r.Insert="Insert",r.Delete="Delete",r.Digit0="Digit0",r.Digit1="Digit1",r.Digit2="Digit2",r.Digit3="Digit3",r.Digit4="Digit4",r.Digit5="Digit5",r.Digit6="Digit6",r.Digit7="Digit7",r.Digit8="Digit8",r.Digit9="Digit9",r.AudioVolumeMute="AudioVolumeMute",r.AudioVolumeDown="AudioVolumeDown",r.AudioVolumeUp="AudioVolumeUp",r.KeyA="KeyA",r.KeyB="KeyB",r.KeyC="KeyC",r.KeyD="KeyD",r.KeyE="KeyE",r.KeyF="KeyF",r.KeyG="KeyG",r.KeyH="KeyH",r.KeyI="KeyI",r.KeyJ="KeyJ",r.KeyK="KeyK",r.KeyL="KeyL",r.KeyM="KeyM",r.KeyN="KeyN",r.KeyO="KeyO",r.KeyP="KeyP",r.KeyQ="KeyQ",r.KeyR="KeyR",r.KeyS="KeyS",r.KeyT="KeyT",r.KeyU="KeyU",r.KeyV="KeyV",r.KeyW="KeyW",r.KeyX="KeyX",r.KeyY="KeyY",r.KeyZ="KeyZ",r.MetaLeft="MetaLeft",r.MetaRight="MetaRight",r.ContextMenu="ContextMenu",r.Numpad0="Numpad0",r.Numpad1="Numpad1",r.Numpad2="Numpad2",r.Numpad3="Numpad3",r.Numpad4="Numpad4",r.Numpad5="Numpad5",r.Numpad6="Numpad6",r.Numpad7="Numpad7",r.Numpad8="Numpad8",r.Numpad9="Numpad9",r.NumpadMultiply="NumpadMultiply",r.NumpadAdd="NumpadAdd",r.NumpadSubtract="NumpadSubtract",r.NumpadDecimal="NumpadDecimal",r.NumpadDivide="NumpadDivide",r.F1="F1",r.F2="F2",r.F3="F3",r.F4="F4",r.F5="F5",r.F6="F6",r.F7="F7",r.F8="F8",r.F9="F9",r.F10="F10",r.F11="F11",r.F12="F12",r.NumLock="NumLock",r.ScrollLock="ScrollLock",r.Semicolon="Semicolon",r.Equal="Equal",r.Comma="Comma",r.Minus="Minus",r.Period="Period",r.Slash="Slash",r.Backquote="Backquote",r.BracketLeft="BracketLeft",r.Backslash="Backslash",r.BracketRight="BracketRight",r.Quote="Quote",t(i,"isTypingContent"),e.isTypingContent=i})(cn||(cn={})),cn.Codes;const Cn={Enter:cn.Codes.Enter,Escape:cn.Codes.Escape,ArrowUp:cn.Codes.ArrowUp,ArrowDown:cn.Codes.ArrowDown,ArrowLeft:cn.Codes.ArrowLeft,ArrowRight:cn.Codes.ArrowRight,KeyUp:cn.Codes.KeyW,KeyDown:cn.Codes.KeyS,KeyLeft:cn.Codes.KeyA,KeyRight:cn.Codes.KeyD,Backspace:cn.Codes.Backspace,Delete:cn.Codes.Delete,Space:cn.Codes.Space};var Sn,En,Gn,$n,Ln,kn,Rn,An,On,In,Nn,Dn,Pn,Un=Object.create,Mn=Object.defineProperty,Fn=Object.getOwnPropertyDescriptor,zn=t((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$3"),jn=t(e=>{throw TypeError(e)},"__typeError$3"),Wn=t((e,t,a)=>t in e?Mn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$3"),Kn=t((e,t)=>Mn(e,"name",{value:t,configurable:!0}),"__name$3"),Hn=t(e=>[,,,Un(e?.[zn("metadata")]??null)],"__decoratorStart$3"),Bn=["class","method","getter","setter","accessor","field","value","get","set"],qn=t(e=>void 0!==e&&"function"!=typeof e?jn("Function expected"):e,"__expectFn$3"),Vn=t((e,a,r,i,n)=>({kind:Bn[e],name:a,metadata:i,addInitializer:t(e=>r._?jn("Already initialized"):n.push(qn(e||null)),"addInitializer")}),"__decoratorContext$3"),Zn=t((e,t)=>Wn(t,zn("metadata"),e[3]),"__decoratorMetadata$3"),Yn=t((e,t,a,r)=>{for(var i=0,n=e[t>>1],o=n&&n.length;i<o;i++)1&t?n[i].call(a):r=n[i].call(a,r);return r},"__runInitializers$3"),Qn=t((e,t,a,r,i,n)=>{var o,s,c,l,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,_=Bn[h+5],b=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(i=i.prototype),h<5&&(h>3||!u)&&Fn(h<4?i:{get[a](){return to(this,n)},set[a](e){return ro(this,n,e)}},a));h?u&&h<4&&Kn(n,(h>2?"set ":h>1?"get ":"")+a):Kn(i,a);for(var f=r.length-1;f>=0;f--)l=Vn(h,a,c={},e[3],m),h&&(l.static=p,l.private=u,d=l.access={has:u?e=>eo(i,e):e=>a in e},3^h&&(d.get=u?e=>(1^h?to:io)(e,i,4^h?n:v.get):e=>e[a]),h>2&&(d.set=u?(e,t)=>ro(e,i,t,4^h?n:v.set):(e,t)=>e[a]=t)),s=(0,r[f])(h?h<4?u?n:v[_]:h>4?void 0:{get:v.get,set:v.set}:i,l),c._=1,4^h||void 0===s?qn(s)&&(h>4?b.unshift(s):h?u?n=s:v[_]=s:i=s):"object"!=typeof s||null===s?jn("Object expected"):(qn(o=s.get)&&(v.get=o),qn(o=s.set)&&(v.set=o),qn(o=s.init)&&b.unshift(o));return h||Zn(e,i),v&&Mn(i,a,v),u?4^h?n:v:i},"__decorateElement$3"),Xn=t((e,t,a)=>Wn(e,"symbol"!=typeof t?t+"":t,a),"__publicField$2"),Jn=t((e,t,a)=>t.has(e)||jn("Cannot "+a),"__accessCheck$2"),eo=t((e,t)=>Object(t)!==t?jn('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$2"),to=t((e,t,a)=>(Jn(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet$2"),ao=t((e,t,a)=>t.has(e)?jn("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd$2"),ro=t((e,t,a,r)=>(Jn(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet$2"),io=t((e,t,a)=>(Jn(e,t,"access private method"),a),"__privateMethod$2");const no=U(D.GT_STATEMENT_SEPARATOR),oo=[Cn.ArrowUp,Cn.ArrowDown,Cn.ArrowLeft,Cn.ArrowRight];Rn=[f("gtn-sandbox")];class so extends(kn=v,Ln=[w()],$n=[w()],Gn=[w()],En=[w()],Sn=[w()],kn){static{t(this,"GtnSandbox")}constructor(){super(),Xn(this,"interpreter"),Xn(this,"langService"),Xn(this,"unsubscribeUiLang",null),ao(this,On,Yn(An,8,this,50)),Yn(An,11,this),ao(this,In,Yn(An,12,this,90)),Yn(An,15,this),ao(this,Nn,Yn(An,16,this,[])),Yn(An,19,this),ao(this,Dn,Yn(An,20,this,0)),Yn(An,23,this),ao(this,Pn,Yn(An,24,this,Mr)),Yn(An,27,this),Xn(this,"handleConsoleLogLanguageChange",async()=>{await this.retranslateLogs()}),Xn(this,"retranslateLogs",async()=>{if(0===this.consoleLogs.length)return;const e=o(this.langService.getUiLanguage()),t=await Promise.all(this.consoleLogs.map(async([t,a,r])=>[t,a,await this.langService.localizeScript(a,e)]));this.consoleLogs=t}),Xn(this,"handleKeyDown",e=>{if(!this.isKeyboardActive)return;const t=e.code;switch(oo.includes(t)&&e.preventDefault(),t){case Cn.ArrowUp:case Cn.KeyUp:return this.doHandleMove(D.GT_FORWARD);case Cn.ArrowDown:case Cn.KeyDown:return this.doHandleMove(D.GT_BACKWARD);case Cn.ArrowLeft:case Cn.KeyLeft:return this.doHandleMove(D.GT_TURN_LEFT);case Cn.ArrowRight:case Cn.KeyRight:return this.doHandleMove(D.GT_TURN_RIGHT);case Cn.Backspace:case Cn.Delete:return this.handleClear();case Cn.Escape:return this.handleReset()}});const e=a.getInstance();this.interpreter=e.resolve(r.Interpreter),this.langService=e.resolve(r.LanguageService)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.handleKeyDown),this.unsubscribeUiLang=this.langService.subscribeUiListeners(()=>{this.handleConsoleLogLanguageChange(),this.requestUpdate()})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.handleKeyDown),this.unsubscribeUiLang&&(this.unsubscribeUiLang(),this.unsubscribeUiLang=null)}async execute(e){try{const t=(new Date).toLocaleTimeString().split(" ")[0]??"",a=o(this.langService.getUiLanguage()),r=await this.langService.localizeScript(e,a);this.consoleLogs=[[t,e,r],...this.consoleLogs],await this.interpreter.canonicalExecute(e)}catch(t){}}handleMove(e){const{action:t}=e.detail;this.doHandleMove(t)}doHandleMove(e){let t;switch(e){case D.GT_FORWARD:case D.GT_BACKWARD:t=`${D[e]} ${this.step}`+no;break;case D.GT_TURN_LEFT:t=`${D[e]} ${this.angle}`+no,this.currentHeading=(this.currentHeading-this.angle+360)%360;break;case D.GT_TURN_RIGHT:t=`${D[e]} ${this.angle}`+no,this.currentHeading=(this.currentHeading+this.angle)%360;break;default:return}this.execute(t)}handleHeadingChange(e){const t=this.currentHeading,a=e.detail.heading;this.currentHeading=a;const r=a-t;this.execute(`${D[D.GT_TURN_RIGHT]} ${r}`+no)}handleSettingChange(e){const{type:t,value:a}=e.detail;"step"===t&&(this.step=a),"angle"===t&&(this.angle=a)}handleColorChange(e){const t=e.detail.color;this.execute(`${D[D.GT_PEN_COLOR]} "${t}"`+no)}handleCommand(e){const{action:t,value:a}=e.detail;if(![D.GT_FORWARD,D.GT_BACKWARD,D.GT_TURN_LEFT,D.GT_TURN_RIGHT,D.GT_PEN_UP,D.GT_PEN_DOWN,D.GT_SHOW_TURTLE,D.GT_HIDE_TURTLE].includes(t))return;const r=`${D[t]} ${a||""}`+no;this.execute(r)}handleReset(){const e=D[D.GT_CLEAR_GRAPHICS]+no+D[D.GT_RESET]+no;this.execute(e),this.currentHeading=0}handleClear(){const e=D[D.GT_CLEAR_GRAPHICS]+no;this.execute(e)}handleKeyboardStatus(e){this.isKeyboardActive=e.detail.value}render(){const e=t(e=>this.langService.translate(e),"t");return m`
      <div class="sandbox-container">
        <h2 class="sr-only">${e("mode.sandbox")}</h2>
        <aside class="side-panel left-panel">
          <div class="panel-section">
            <h3>${e("sandbox.compass.title")}</h3>
            <gtn-compass-panel
              .heading=${this.currentHeading}
              @heading-change=${this.handleHeadingChange}
            ></gtn-compass-panel>
          </div>

          <div class="panel-section">
            <h3>${e("sandbox.navigation.title")}</h3>
            <gtn-navigation-panel
              .keyboardActive=${this.isKeyboardActive}
              @move=${this.handleMove}
            ></gtn-navigation-panel>
          </div>

          <div class="panel-section">
            <h3>${e("sandbox.settings.title")}</h3>
            <gtn-settings-panel
              .step=${this.step}
              .rotation=${this.angle}
              .keyboardActive=${this.isKeyboardActive}
              @setting-change=${this.handleSettingChange}
              @keyboard-status=${this.handleKeyboardStatus}
            ></gtn-settings-panel>
          </div>
        </aside>

        <main class="center-panel">
          <div class="canvas-area">
            <slot></slot>
          </div>
          <div class="panel-section console">
            <h3>${e("sandbox.history_title")}</h3>
            <div class="console-output">
              ${0===this.consoleLogs.length?m`<span class="empty">${e("sandbox.history_empty")}</span>`:this.consoleLogs.map(e=>m`<div class="log-line">[${e[0]}] ${e[2]}</div>`)}
            </div>
          </div>
        </main>

        <aside class="side-panel right-panel">
          <div class="panel-section">
            <h3>${e("sandbox.commands.title")}</h3>
            <gtn-commands-panel @command=${this.handleCommand}></gtn-commands-panel>
          </div>

          <div class="panel-section">
            <h3>${e("sandbox.color.title")}</h3>
            <gtn-color-panel @color-change=${this.handleColorChange}></gtn-color-panel>
          </div>

          <div class="panel-section">
            <h3>${e("sandbox.controls.title")}</h3>
            <gtn-controls-panel
              @home=${this.handleReset}
              @clear=${this.handleClear}
            ></gtn-controls-panel>
          </div>
        </aside>
      </div>
    `}}An=Hn(kn),On=new WeakMap,In=new WeakMap,Nn=new WeakMap,Dn=new WeakMap,Pn=new WeakMap,Qn(An,4,"step",Ln,so,On),Qn(An,4,"angle",$n,so,In),Qn(An,4,"consoleLogs",Gn,so,Nn),Qn(An,4,"currentHeading",En,so,Dn),Qn(An,4,"isKeyboardActive",Sn,so,Pn),so=Qn(An,0,"GtnSandbox",Rn,so),Xn(so,"styles",[M,_`
      ${b(":host{display:block;font-family:var(--font-ui);background:#adff2f;width:100%;height:100%;overflow:hidden}.sandbox-container{display:flex;flex-direction:row;width:100%;height:100%;background:#f8f9fa;gap:1rem;padding:1rem;box-sizing:border-box}.side-panel{width:250px;display:flex;flex-direction:column;gap:1rem;overflow-y:auto}.center-panel{display:flex;flex:1;min-width:0;flex-direction:column;gap:1rem;overflow:hidden;overflow-y:auto}.left-panel{flex:0 0 250px}.right-panel{width:300px;flex:0 0 300px}.canvas-area{flex:1;position:relative;overflow:hidden;background-color:#e0e5ec;box-shadow:inset 0 0 10px #0000000d}.panel-section{margin-bottom:1.5rem;background:#fff;padding:.75rem;border-radius:8px;box-shadow:0 1px 3px #0000001a;border:1px solid #e9ecef;color:#212529}.panel-section h3{margin:0 0 .8rem;font-size:.85rem;text-transform:uppercase;letter-spacing:.5px;color:#888;border-bottom:1px solid #eee;padding-bottom:4px}.console-output{background:#212529;color:#51cf66;font-family:var(--font-code);padding:8px;height:120px;overflow-y:auto;border-radius:4px;font-size:.8rem;display:flex;flex-direction:column}.log-line{border-bottom:1px solid #343a40;padding:2px 0;white-space:nowrap}.empty{color:#868e96;font-style:italic}.console-output::-webkit-scrollbar{width:6px}.console-output::-webkit-scrollbar-track{background:#212529}.console-output::-webkit-scrollbar-thumb{background:#495057;border-radius:3px}@media(max-width:800px){.sandbox-container{flex-direction:column}aside{width:100%;height:auto;max-height:150px;flex-direction:row;gap:20px;padding:10px;border:none;border-top:1px solid #ccc}.right-panel{order:3}.canvas-area{order:1;flex:1}}")}
    `]),Yn(An,1,so);var co,lo,ho,po=Object.create,uo=Object.defineProperty,go=Object.getOwnPropertyDescriptor,_o=t((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$2"),bo=t(e=>{throw TypeError(e)},"__typeError$2"),mo=t((e,t,a)=>t in e?uo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$2"),vo=t((e,t)=>uo(e,"name",{value:t,configurable:!0}),"__name$2"),fo=t(e=>[,,,po(e?.[_o("metadata")]??null)],"__decoratorStart$2"),To=["class","method","getter","setter","accessor","field","value","get","set"],yo=t(e=>void 0!==e&&"function"!=typeof e?bo("Function expected"):e,"__expectFn$2"),xo=t((e,a,r,i,n)=>({kind:To[e],name:a,metadata:i,addInitializer:t(e=>r._?bo("Already initialized"):n.push(yo(e||null)),"addInitializer")}),"__decoratorContext$2"),wo=t((e,t)=>mo(t,_o("metadata"),e[3]),"__decoratorMetadata$2"),Co=t((e,t,a,r)=>{for(var i=0,n=e[t>>1],o=n&&n.length;i<o;i++)n[i].call(a);return r},"__runInitializers$2"),So=t((e,t,a,r,i,n)=>{var o,s,c,l=7&t,d=e[0]||(e[0]=[]),h=l&&(i=i.prototype,l<5&&(l>3||!0)&&go(i,a));vo(i,a);for(var p=r.length-1;p>=0;p--)c=xo(l,a,s={},e[3],d),o=(0,r[p])(i,c),s._=1,yo(o)&&(i=o);return wo(e,i),h&&uo(i,a,h),i},"__decorateElement$2");co=[f("gtn-workbench")];class Eo extends(ho=v){static{t(this,"GTNWorkbench")}static styles=[M,_`
      ${b(":host{display:block;width:100%;height:100%;overflow:hidden}.workbench-layout{display:grid;grid-template-columns:300px 1fr 300px;height:100%;width:100%;overflow:hidden}.sidebar{display:flex;flex-direction:column;height:100%;background:var(--gtn-panel-bg, #fcfcfc)}.left-sidebar{border-right:1px solid var(--gtn-border-color, #e0e0e0)}.right-sidebar{border-left:1px solid var(--gtn-border-color, #e0e0e0)}.editor-area,.procedures-area{flex:1;overflow:hidden;display:flex;flex-direction:column}.toast-area{flex-shrink:0}::slotted(*){width:100%;height:100%}.main-content{position:relative;height:100%;width:100%;overflow:hidden;background:var(--gtn-canvas-bg, #ffffff)}@media(max-width:800px){.workbench-layout{flex-direction:column}.sidebar{width:100%;max-width:none;flex:1;border-right:none;border-bottom:1px solid #bdc3c7}.main-content{flex:1}}")}
    `];langService;constructor(){super();const e=a.getInstance();this.langService=e.resolve(r.LanguageService)}render(){return m`
      <div class="workbench-layout">
        <h2 class="sr-only">${t(e=>this.langService.translate(e),"t")("mode.workbench")}</h2>
        <aside class="sidebar left-sidebar" aria-label="Command Editor">
          <div class="editor-area">
            <slot name="editor"></slot>
          </div>
          <div class="toast-area">
            <slot name="toast"></slot>
          </div>
        </aside>

        <section class="main-content" aria-label="Turtle Graphics Canvas">
          <slot name="canvas"></slot>
        </section>

        <aside class="sidebar right-sidebar" aria-label="Named Procedures Library">
          <div class="procedures-area">
            <slot name="procedures"></slot>
          </div>
        </aside>
      </div>
    `}}Co(lo=fo(ho),1,Eo=So(lo,0,"GTNWorkbench",co,Eo));var Go,$o,Lo,ko,Ro,Ao,Oo,Io=Object.create,No=Object.defineProperty,Do=Object.getOwnPropertyDescriptor,Po=t((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$1"),Uo=t(e=>{throw TypeError(e)},"__typeError$1"),Mo=t((e,t,a)=>t in e?No(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$1"),Fo=t((e,t)=>No(e,"name",{value:t,configurable:!0}),"__name$1"),zo=t(e=>[,,,Io(e?.[Po("metadata")]??null)],"__decoratorStart$1"),jo=["class","method","getter","setter","accessor","field","value","get","set"],Wo=t(e=>void 0!==e&&"function"!=typeof e?Uo("Function expected"):e,"__expectFn$1"),Ko=t((e,a,r,i,n)=>({kind:jo[e],name:a,metadata:i,addInitializer:t(e=>r._?Uo("Already initialized"):n.push(Wo(e||null)),"addInitializer")}),"__decoratorContext$1"),Ho=t((e,t)=>Mo(t,Po("metadata"),e[3]),"__decoratorMetadata$1"),Bo=t((e,t,a,r)=>{for(var i=0,n=e[t>>1],o=n&&n.length;i<o;i++)1&t?n[i].call(a):r=n[i].call(a,r);return r},"__runInitializers$1"),qo=t((e,t,a,r,i,n)=>{var o,s,c,l,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,_=jo[h+5],b=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(i=i.prototype),h<5&&(h>3||!u)&&Do(h<4?i:{get[a](){return Qo(this,n)},set[a](e){return Jo(this,n,e)}},a));h?u&&h<4&&Fo(n,(h>2?"set ":h>1?"get ":"")+a):Fo(i,a);for(var f=r.length-1;f>=0;f--)l=Ko(h,a,c={},e[3],m),h&&(l.static=p,l.private=u,d=l.access={has:u?e=>Yo(i,e):e=>a in e},3^h&&(d.get=u?e=>(1^h?Qo:es)(e,i,4^h?n:v.get):e=>e[a]),h>2&&(d.set=u?(e,t)=>Jo(e,i,t,4^h?n:v.set):(e,t)=>e[a]=t)),s=(0,r[f])(h?h<4?u?n:v[_]:h>4?void 0:{get:v.get,set:v.set}:i,l),c._=1,4^h||void 0===s?Wo(s)&&(h>4?b.unshift(s):h?u?n=s:v[_]=s:i=s):"object"!=typeof s||null===s?Uo("Object expected"):(Wo(o=s.get)&&(v.get=o),Wo(o=s.set)&&(v.set=o),Wo(o=s.init)&&b.unshift(o));return h||Ho(e,i),v&&No(i,a,v),u?4^h?n:v:i},"__decorateElement$1"),Vo=t((e,t,a)=>Mo(e,"symbol"!=typeof t?t+"":t,a),"__publicField$1"),Zo=t((e,t,a)=>t.has(e)||Uo("Cannot "+a),"__accessCheck$1"),Yo=t((e,t)=>Object(t)!==t?Uo('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$1"),Qo=t((e,t,a)=>(Zo(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet$1"),Xo=t((e,t,a)=>t.has(e)?Uo("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd$1"),Jo=t((e,t,a,r)=>(Zo(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet$1"),es=t((e,t,a)=>(Zo(e,t,"access private method"),a),"__privateMethod$1");ko=[f("gtn-procedures-panel")];class ts extends(Lo=v,$o=[T({type:String})],Go=[y(".editor-container")],Lo){static{t(this,"GTNProceduresPanel")}constructor(){super(),Xo(this,Ao,Bo(Ro,8,this)),Bo(Ro,11,this),Xo(this,Oo,Bo(Ro,12,this)),Bo(Ro,15,this),Vo(this,"editorView"),Vo(this,"langService"),Vo(this,"languageCompartment",new I),Vo(this,"syntaxService");const e=a.getInstance();this.langService=e.resolve(r.LanguageService),this.syntaxService=e.resolve(r.SyntaxService),this.code=""}firstUpdated(){this.initEditor()}disconnectedCallback(){super.disconnectedCallback(),this.editorView?.destroy()}initEditor(){if(!this.editorContainer)return;const e=we(this.syntaxService,this.langService),t=$.create({doc:this.code,extensions:[L,R.of([A]),k,Ce,e,this.languageCompartment.of([e]),G.updateListener.of(e=>{if(!e.docChanged)return;const t=e.state.doc.toString();this.code=t,this.onEditorChange(t)})]});this.editorView=new G({state:t,parent:this.editorContainer}),this.updateLanguageFeatures()}onEditorChange(e){this.dispatchEvent(new CustomEvent("procedures-change",{detail:{code:e},bubbles:!0,composed:!0}))}updated(e){super.updated(e),this.updateLanguageFeatures(),this.translateCodeInEditor(e)}translateCodeInEditor(e){if(!e.has("code")||!this.editorView)return;const t=this.editorView.state.doc.toString();t!==this.code&&this.editorView.dispatch({changes:{from:0,to:t.length,insert:this.code}})}updateLanguageFeatures(){if(!this.editorView)return;const e=this.langService.getAllKeywords(),t=O({override:[t=>{const a=t.matchBefore(/\w*/);return!a||a.from===a.to&&!t.explicit?null:{from:a.from,options:e.map(e=>({label:e,type:"keyword"}))}}]});this.editorView.dispatch({effects:this.languageCompartment.reconfigure([t,we(this.syntaxService,this.langService)])})}render(){return m`
      <div class="header">
        <span>${t(e=>this.langService.translate(e),"t")("workbench.procedures.title")}</span>
      </div>
      <div class="editor-container"></div>
    `}}Ro=zo(Lo),Ao=new WeakMap,Oo=new WeakMap,qo(Ro,4,"code",$o,ts,Ao),qo(Ro,4,"editorContainer",Go,ts,Oo),ts=qo(Ro,0,"GTNProceduresPanel",ko,ts),Vo(ts,"styles",_`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      border-left: 1px solid var(--gtn-border-color, #ccc);
      // border: 1px solid var(--gtn-border-color, #ccc);
      // border-radius: 8px;
      overflow: hidden;
      background: var(--gtn-bg-color, #fff);
    }
    .header {
      background: var(--gtn-panel-bg, #f8f9fa);
      color: #333;
      padding: 8px 12px;
      font-size: 0.85rem;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      border-bottom: 1px solid var(--gtn-border-color, #ccc);
      display: flex;
      justify-content: space-between;
      flex: 0 0 auto;
    }
    .editor-container {
      flex: 1;
      overflow: hidden;
      /* Ensure CodeMirror stretches to fill the container */
      display: flex;
      flex-direction: column;
      min-height: 0; // flexbox must allow CodeMirror to scroll
    }
    /* Deep selector to force CodeMirror to take full height inside the Shadow DOM */
    .editor-container > .cm-editor {
      height: 100%;
      flex: 1;
    }
  `),Bo(Ro,1,ts);var as,rs,is,ns,os,ss,cs,ls,ds,hs,ps,us,gs,_s=Object.create,bs=Object.defineProperty,ms=Object.getOwnPropertyDescriptor,vs=t((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol"),fs=t(e=>{throw TypeError(e)},"__typeError"),Ts=t((e,t,a)=>t in e?bs(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp"),ys=t((e,t)=>bs(e,"name",{value:t,configurable:!0}),"__name"),xs=t(e=>[,,,_s(e?.[vs("metadata")]??null)],"__decoratorStart"),ws=["class","method","getter","setter","accessor","field","value","get","set"],Cs=t(e=>void 0!==e&&"function"!=typeof e?fs("Function expected"):e,"__expectFn"),Ss=t((e,a,r,i,n)=>({kind:ws[e],name:a,metadata:i,addInitializer:t(e=>r._?fs("Already initialized"):n.push(Cs(e||null)),"addInitializer")}),"__decoratorContext"),Es=t((e,t)=>Ts(t,vs("metadata"),e[3]),"__decoratorMetadata"),Gs=t((e,t,a,r)=>{for(var i=0,n=e[t>>1],o=n&&n.length;i<o;i++)1&t?n[i].call(a):r=n[i].call(a,r);return r},"__runInitializers"),$s=t((e,t,a,r,i,n)=>{var o,s,c,l,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,_=ws[h+5],b=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(i=i.prototype),h<5&&(h>3||!u)&&ms(h<4?i:{get[a](){return As(this,n)},set[a](e){return Is(this,n,e)}},a));h?u&&h<4&&ys(n,(h>2?"set ":h>1?"get ":"")+a):ys(i,a);for(var f=r.length-1;f>=0;f--)l=Ss(h,a,c={},e[3],m),h&&(l.static=p,l.private=u,d=l.access={has:u?e=>Rs(i,e):e=>a in e},3^h&&(d.get=u?e=>(1^h?As:Ns)(e,i,4^h?n:v.get):e=>e[a]),h>2&&(d.set=u?(e,t)=>Is(e,i,t,4^h?n:v.set):(e,t)=>e[a]=t)),s=(0,r[f])(h?h<4?u?n:v[_]:h>4?void 0:{get:v.get,set:v.set}:i,l),c._=1,4^h||void 0===s?Cs(s)&&(h>4?b.unshift(s):h?u?n=s:v[_]=s:i=s):"object"!=typeof s||null===s?fs("Object expected"):(Cs(o=s.get)&&(v.get=o),Cs(o=s.set)&&(v.set=o),Cs(o=s.init)&&b.unshift(o));return h||Es(e,i),v&&bs(i,a,v),u?4^h?n:v:i},"__decorateElement"),Ls=t((e,t,a)=>Ts(e,"symbol"!=typeof t?t+"":t,a),"__publicField"),ks=t((e,t,a)=>t.has(e)||fs("Cannot "+a),"__accessCheck"),Rs=t((e,t)=>Object(t)!==t?fs('Cannot use the "in" operator on this value'):e.has(t),"__privateIn"),As=t((e,t,a)=>(ks(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet"),Os=t((e,t,a)=>t.has(e)?fs("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd"),Is=t((e,t,a,r)=>(ks(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet"),Ns=t((e,t,a)=>(ks(e,t,"access private method"),a),"__privateMethod");const Ds={fr:'\ncrayon rouge;\npas := 36;\nrot := 360 / pas;\nrep 36 [\n  av rot;\n  td rot;\n]\ncrayon "vert"\npetitcarre\n',en:"\ncolor red;\nstep := 36;\nrot := 360 / pas;\nrepeat 36 [\n  fd rot;\n  rt rot;\n]\ncolor green\nlittlesquare\n"},Ps={fr:"pour petitcarre\n  rep 4 [\n    av 50\n    td 90\n  ]\nfin",en:"def littlesquare\n  repeat 4 [\n    fw 50\n    rt 90\n  ]\nend"};cs=[f("gtn-app")];class Us extends(ss=v,os=[w()],ns=[w()],is=[w()],rs=[w()],as=[w()],ss){static{t(this,"GTNApp")}constructor(){super(),Os(this,ds,Gs(ls,8,this,"")),Gs(ls,11,this),Os(this,hs,Gs(ls,12,this,"")),Gs(ls,15,this),Os(this,ps,Gs(ls,16,this,[])),Gs(ls,19,this),Os(this,us,Gs(ls,20,this,"SANDBOX")),Gs(ls,23,this),Os(this,gs,Gs(ls,24,this,[])),Gs(ls,27,this),Ls(this,"interpreter"),Ls(this,"langService"),Ls(this,"turtleRepo"),Ls(this,"projectService"),Ls(this,"syntaxService"),Ls(this,"uiUnsubscribe");const e=a.getInstance();this.interpreter=e.resolve(r.Interpreter),this.langService=e.resolve(r.LanguageService),this.turtleRepo=e.resolve(r.TurtleRepository),this.projectService=e.resolve(r.ProjectService),this.syntaxService=e.resolve(r.SyntaxService);const t=this.langService.getDslLanguage(),i=Ds[t]||"",n=Ps[t]||"";this.code=i,this.proceduresCode=n}connectedCallback(){super.connectedCallback(),this.uiUnsubscribe=this.langService.subscribeUiListeners(this.handleLanguageChange.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.uiUnsubscribe&&this.uiUnsubscribe()}firstUpdated(){super.firstUpdated(new Map),this.initializeLanguageAndProcedures()}async initializeLanguageAndProcedures(){try{await this.langService.initialize(),this.userProcedures=this.syntaxService.extractProcedures(this.proceduresCode),this.validateCombinedCode(),this.requestUpdate()}catch(e){}}handleLanguageChange(e){this.validateCombinedCode()}handleCodeChange(e){this.code=e.detail.code,this.validateCombinedCode()}handleProceduresChange(e){this.proceduresCode=e.detail.code,this.userProcedures=this.syntaxService.extractProcedures(this.proceduresCode),this.validateCombinedCode()}validateCombinedCode(){const e=`${this.proceduresCode}\n${this.code}`;this.errors=this.syntaxService.validate(e)}handleViewChange(e){this.viewMode=e.detail.view}async handleRun(){if(this.validateCombinedCode(),!(this.errors.length>0))try{await this.interpreter.execute(this.code,this.proceduresCode)}catch(e){alert("Error executing GéoTortue commands")}}handleClear(){this.turtleRepo.clear();const e=a.getInstance(),t=e.resolve(r.GeometryService),i=e.resolve(r.TurtleRepository).getNextId();e.resolve(r.ProcedureRegistry).clear();const n=new g(i,t);this.turtleRepo.save(n)}async handleSaveProject(){try{await this.projectService.saveProject({code:this.code,procedures:[this.proceduresCode]}),alert("Project saved!")}catch(e){alert("Failed to save project")}}async handleOpenProject(){try{const{code:e,procedures:t}=await this.projectService.loadProject();e&&(this.code=e,this.proceduresCode=t?.[0]??""),alert("Project loaded!")}catch(e){}}async handleDslChange(e){const{oldLang:t,newLang:a}=e.detail;try{const e=await this.langService.translateScript(this.code,t,a);this.code=e;const r=await this.langService.translateScript(this.proceduresCode,t,a);this.proceduresCode=r}catch(r){}}render(){return m`
      <header class="header">
        <h1 class="sr-only">${t(e=>this.langService.translate(e),"t")("app.title")}</h1>
        <gtn-toolbar
          .currentView=${this.viewMode}
          @view-change=${this.handleViewChange}
          @run=${this.handleRun}
          @clear=${this.handleClear}
          @save-project=${this.handleSaveProject}
          @open-project=${this.handleOpenProject}
          @dsl-lang-change=${this.handleDslChange}
        ></gtn-toolbar>
      </header>

      <main>
        ${"EDITOR"===this.viewMode?m`
              <gtn-workbench>
                <gtn-editor
                  slot="editor"
                  .code=${this.code}
                  @code-change=${this.handleCodeChange}
                ></gtn-editor>

                <gtn-error-toast slot="toast" .errors=${this.errors}></gtn-error-toast>

                <gtn-canvas slot="canvas"></gtn-canvas>

                <gtn-procedures-panel
                  slot="procedures"
                  .code=${this.proceduresCode}
                  @procedures-change=${this.handleProceduresChange}
                ></gtn-procedures-panel>
              </gtn-workbench>
            `:m`
              <gtn-sandbox>
                <gtn-canvas></gtn-canvas>
              </gtn-sandbox>
            `}
      </main>

      ${""}
    `}}ls=xs(ss),ds=new WeakMap,hs=new WeakMap,ps=new WeakMap,us=new WeakMap,gs=new WeakMap,$s(ls,4,"code",os,Us,ds),$s(ls,4,"proceduresCode",ns,Us,hs),$s(ls,4,"errors",is,Us,ps),$s(ls,4,"viewMode",rs,Us,us),$s(ls,4,"userProcedures",as,Us,gs),Us=$s(ls,0,"GTNApp",cs,Us),Ls(Us,"styles",[M,_`
      ${b(":host{display:flex;flex-direction:column;height:100vh;width:100vw;overflow:hidden;background-color:#ecf0f1}.header{flex:0 0 auto;position:relative;z-index:1000}main{flex:1;display:block;overflow:hidden;position:relative;z-index:1}@media(max-width:800px){:host{display:flex}}gtn-workbench,gtn-sandbox{display:block;height:100%;width:100%}")}
    `]),Gs(ls,1,Us);export{Us as GTNApp};
//# sourceMappingURL=gtn-app-BhYqxwyS.js.map
