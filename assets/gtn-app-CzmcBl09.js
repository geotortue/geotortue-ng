var e=Object.defineProperty,__name=(t,a)=>e(t,"name",{value:a,configurable:!0});import{w as t,x as a,y as r,z as n,A as i,G as o,H as s,J as c,K as l}from"./vendor-CrrZO_fa.js";import{G as d,a as h,t as p,D as u,b as g,c as _,d as b,e as m,T as v,f as T,g as f,N as y,h as G}from"./index-FZ-U3lEG.js";import{D as x,V as C,R as w,E as S,a as E,b as $,o as L,k,i as R,c as N,C as A}from"./vendor-cm-DIb5KOP0.js";import{g as I}from"./vendor-antlr-DgrtpJlV.js";import"./vendor-math-DK0nzFxn.js";import"./vendor-three-DQZ8GlD2.js";var O=(e=>(e[e.GT_FORWARD=1]="GT_FORWARD",e[e.GT_BACKWARD=2]="GT_BACKWARD",e[e.GT_TURN_RIGHT=3]="GT_TURN_RIGHT",e[e.GT_TURN_LEFT=4]="GT_TURN_LEFT",e[e.GT_CLEAR_GRAPHICS=5]="GT_CLEAR_GRAPHICS",e[e.GT_RESET=6]="GT_RESET",e[e.GT_UNDO_DRAWING=7]="GT_UNDO_DRAWING",e[e.GT_HIDE_TURTLE=8]="GT_HIDE_TURTLE",e[e.GT_SHOW_TURTLE=9]="GT_SHOW_TURTLE",e[e.GT_PEN_UP=10]="GT_PEN_UP",e[e.GT_PEN_DOWN=11]="GT_PEN_DOWN",e[e.GT_PEN_COLOR=12]="GT_PEN_COLOR",e[e.GT_PEN_THICKNESS=13]="GT_PEN_THICKNESS",e[e.GT_DRAW_POINT=14]="GT_DRAW_POINT",e[e.GT_MIRROR=15]="GT_MIRROR",e[e.GT_TELEPORT=16]="GT_TELEPORT",e[e.GT_COMPASS=17]="GT_COMPASS",e[e.GT_AIM=18]="GT_AIM",e[e.GT_MIMIC=19]="GT_MIMIC",e[e.GT_ROLL_RIGHT=20]="GT_ROLL_RIGHT",e[e.GT_ROLL_LEFT=21]="GT_ROLL_LEFT",e[e.GT_PITCH_UP=22]="GT_PITCH_UP",e[e.GT_PITCH_DOWN=23]="GT_PITCH_DOWN",e[e.GT_ROTATE_XY=24]="GT_ROTATE_XY",e[e.GT_ROTATE_XZ=25]="GT_ROTATE_XZ",e[e.GT_ROTATE_YZ=26]="GT_ROTATE_YZ",e[e.GT_DRAW_CIRCLE=27]="GT_DRAW_CIRCLE",e[e.GT_DRAW_ARC=28]="GT_DRAW_ARC",e[e.GT_PLAY=29]="GT_PLAY",e[e.GT_SCORE=30]="GT_SCORE",e[e.GT_CONCERT=31]="GT_CONCERT",e[e.GT_FILL=32]="GT_FILL",e[e.GT_WRITE=33]="GT_WRITE",e[e.GT_SAY=34]="GT_SAY",e[e.GT_INIT=35]="GT_INIT",e[e.GT_WAIT=36]="GT_WAIT",e[e.GT_PAUSE=37]="GT_PAUSE",e[e.GT_STOP=38]="GT_STOP",e[e.GT_RETURN=39]="GT_RETURN",e[e.GT_MANIPULATE_GRAPH=40]="GT_MANIPULATE_GRAPH",e[e.GT_SNAPSHOT=41]="GT_SNAPSHOT",e[e.GT_EXECUTE=42]="GT_EXECUTE",e[e.GT_DELETE=43]="GT_DELETE",e[e.GT_GLOBAL=44]="GT_GLOBAL",e[e.GT_DISPLAY=45]="GT_DISPLAY",e[e.GT_REPEAT=46]="GT_REPEAT",e[e.GT_WHILE=47]="GT_WHILE",e[e.GT_FOR_EACH=48]="GT_FOR_EACH",e[e.GT_FROM=49]="GT_FROM",e[e.GT_TO=50]="GT_TO",e[e.GT_IN_LIST=51]="GT_IN_LIST",e[e.GT_IF=52]="GT_IF",e[e.GT_THEN=53]="GT_THEN",e[e.GT_ELSE=54]="GT_ELSE",e[e.GT_SELECT=55]="GT_SELECT",e[e.GT_FUNCTION_DEF=56]="GT_FUNCTION_DEF",e[e.GT_ASK_FOR_VALUE=57]="GT_ASK_FOR_VALUE",e[e.GT_PROCEDURE_START=58]="GT_PROCEDURE_START",e[e.GT_PROCEDURE_END=59]="GT_PROCEDURE_END",e[e.GT_IDENTIFIER=60]="GT_IDENTIFIER",e[e.GT_WORD=61]="GT_WORD",e[e.GT_INTEGER_LITERAL=62]="GT_INTEGER_LITERAL",e[e.GT_FLOATING_POINT_LITERAL=63]="GT_FLOATING_POINT_LITERAL",e[e.GT_STRING_LITERAL=64]="GT_STRING_LITERAL",e[e.GT_STATEMENT_SEPARATOR=65]="GT_STATEMENT_SEPARATOR",e[e.GT_ASSIGN=66]="GT_ASSIGN",e[e.GT_COMMA=67]="GT_COMMA",e[e.GT_LEFT_SQUARE_BRACKET=68]="GT_LEFT_SQUARE_BRACKET",e[e.GT_RIGHT_SQUARE_BRACKET=69]="GT_RIGHT_SQUARE_BRACKET",e[e.GT_LEFT_PARENTHESIS=70]="GT_LEFT_PARENTHESIS",e[e.GT_RIGHT_PARENTHESIS=71]="GT_RIGHT_PARENTHESIS",e[e.GT_COLON=72]="GT_COLON",e[e.GT_GREATER_THAN=73]="GT_GREATER_THAN",e[e.GT_LESS_THAN=74]="GT_LESS_THAN",e[e.GT_EQUAL=75]="GT_EQUAL",e[e.GT_LESS_OR_EQUAL=76]="GT_LESS_OR_EQUAL",e[e.GT_GREATER_OR_EQUAL=77]="GT_GREATER_OR_EQUAL",e[e.GT_NOT_EQUAL=78]="GT_NOT_EQUAL",e[e.GT_LOGICAL_AND=79]="GT_LOGICAL_AND",e[e.GT_LOGICAL_OR=80]="GT_LOGICAL_OR",e[e.GT_PLUS=81]="GT_PLUS",e[e.GT_MINUS=82]="GT_MINUS",e[e.GT_MULTIPLY=83]="GT_MULTIPLY",e[e.GT_DOT=84]="GT_DOT",e[e.GT_DIVIDE=85]="GT_DIVIDE",e[e.GT_MODULO=86]="GT_MODULO",e[e.GT_LOGICAL_NOT=87]="GT_LOGICAL_NOT",e[e.GT_POWER=88]="GT_POWER",e[e.GT_CROSS_PRODUCT=89]="GT_CROSS_PRODUCT",e[e.GT_NEW_LINE=90]="GT_NEW_LINE",e[e.GT_HORIZONTAL_WHITESPACE=91]="GT_HORIZONTAL_WHITESPACE",e[e.GT_LINE_COMMENT_HASH=92]="GT_LINE_COMMENT_HASH",e[e.GT_LINE_COMMENT_SLASH=93]="GT_LINE_COMMENT_SLASH",e[e.GT_BLOCK_COMMENT=94]="GT_BLOCK_COMMENT",e[e.GT_ROLL_UP=95]="GT_ROLL_UP",e[e.GT_ROLL_DOWN=96]="GT_ROLL_DOWN",e))(O||{});const P={1:"GT_FORWARD",2:"GT_BACKWARD",3:"GT_TURN_RIGHT",4:"GT_TURN_LEFT",5:"GT_CLEAR_GRAPHICS",6:"GT_RESET",7:"GT_UNDO_DRAWING",8:"GT_HIDE_TURTLE",9:"GT_SHOW_TURTLE",10:"GT_PEN_UP",11:"GT_PEN_DOWN",12:"GT_PEN_COLOR",13:"GT_PEN_THICKNESS",14:"GT_DRAW_POINT",15:"GT_MIRROR",16:"GT_TELEPORT",17:"GT_COMPASS",18:"GT_AIM",19:"GT_MIMIC",20:"GT_ROLL_RIGHT",21:"GT_ROLL_LEFT",22:"GT_ROLL_UP",23:"GT_ROLL_DOWN",24:"GT_ROTATE_XY",25:"GT_ROTATE_XZ",26:"GT_ROTATE_YZ",27:"GT_DRAW_CIRCLE",28:"GT_DRAW_ARC",29:"GT_PLAY",30:"GT_SCORE",31:"GT_CONCERT",32:"GT_FILL",33:"GT_WRITE",34:"GT_SAY",35:"GT_INIT",36:"GT_WAIT",37:"GT_PAUSE",38:"GT_STOP",39:"GT_RETURN",40:"GT_MANIPULATE_GRAPH",41:"GT_SNAPSHOT",42:"GT_EXECUTE",43:"GT_DELETE",44:"GT_GLOBAL",45:"GT_DISPLAY",46:"GT_REPEAT",47:"GT_WHILE",48:"GT_FOR_EACH",49:"GT_FROM",50:"GT_TO",51:"GT_IN_LIST",52:"GT_IF",53:"GT_THEN",54:"GT_ELSE",55:"GT_SELECT",56:"GT_FUNCTION_DEF",57:"GT_ASK_FOR_VALUE",58:"GT_PROCEDURE_START",59:"GT_PROCEDURE_END",65:";",66:":=",67:",",68:"[",69:"]",70:"(",71:")",72:":",73:">",74:"<",75:"=",76:"<=",77:">=",78:"!=",79:"&&",80:"||",81:"+",82:"-",83:"*",84:".",85:"/",86:"%",87:"!",88:"^",89:"^^"};function getLiteralName(e){return P[e]}__name(getLiteralName,"getLiteralName");const D=t`
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
`,U=t`
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
`;class UiLanguageController{static{__name(this,"UiLanguageController")}host;languageService;unsubscribe;constructor(e){this.host=e,this.languageService=d.getInstance().resolve(h.LanguageService),e.addController(this)}hostConnected(){this.unsubscribe=this.languageService.subscribeUiListeners(()=>{this.host.requestUpdate()})}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null)}}var M,F,z,j,W,H,K,B,q,V,Z,Q,Y,X=Object.create,J=Object.defineProperty,ee=Object.getOwnPropertyDescriptor,te=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$f"),ae=__name(e=>{throw TypeError(e)},"__typeError$f"),re=__name((e,t,a)=>t in e?J(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$f"),ne=__name((e,t)=>J(e,"name",{value:t,configurable:!0}),"__name$f"),ie=__name(e=>[,,,X(e?.[te("metadata")]??null)],"__decoratorStart$f"),oe=["class","method","getter","setter","accessor","field","value","get","set"],se=__name(e=>void 0!==e&&"function"!=typeof e?ae("Function expected"):e,"__expectFn$f"),ce=__name((e,t,a,r,n)=>({kind:oe[e],name:t,metadata:r,addInitializer:__name(e=>a._?ae("Already initialized"):n.push(se(e||null)),"addInitializer")}),"__decoratorContext$f"),le=__name((e,t)=>re(t,te("metadata"),e[3]),"__decoratorMetadata$f"),de=__name((e,t,a,r)=>{for(var n=0,i=e[t>>1],o=i&&i.length;n<o;n++)1&t?i[n].call(a):r=i[n].call(a,r);return r},"__runInitializers$f"),he=__name((e,t,a,r,n,i)=>{var o,s,c,l,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,_=oe[h+5],b=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(n=n.prototype),h<5&&(h>3||!u)&&ee(h<4?n:{get[a](){return _e(this,i)},set[a](e){return me(this,i,e)}},a));h?u&&h<4&&ne(i,(h>2?"set ":h>1?"get ":"")+a):ne(n,a);for(var T=r.length-1;T>=0;T--)l=ce(h,a,c={},e[3],m),h&&(l.static=p,l.private=u,d=l.access={has:u?e=>ge(n,e):e=>a in e},3^h&&(d.get=u?e=>(1^h?_e:ve)(e,n,4^h?i:v.get):e=>e[a]),h>2&&(d.set=u?(e,t)=>me(e,n,t,4^h?i:v.set):(e,t)=>e[a]=t)),s=(0,r[T])(h?h<4?u?i:v[_]:h>4?void 0:{get:v.get,set:v.set}:n,l),c._=1,4^h||void 0===s?se(s)&&(h>4?b.unshift(s):h?u?i=s:v[_]=s:n=s):"object"!=typeof s||null===s?ae("Object expected"):(se(o=s.get)&&(v.get=o),se(o=s.set)&&(v.set=o),se(o=s.init)&&b.unshift(o));return h||le(e,n),v&&J(n,a,v),u?4^h?i:v:n},"__decorateElement$f"),pe=__name((e,t,a)=>re(e,"symbol"!=typeof t?t+"":t,a),"__publicField$9"),ue=__name((e,t,a)=>t.has(e)||ae("Cannot "+a),"__accessCheck$9"),ge=__name((e,t)=>Object(t)!==t?ae('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$9"),_e=__name((e,t,a)=>(ue(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet$9"),be=__name((e,t,a)=>t.has(e)?ae("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd$9"),me=__name((e,t,a,r)=>(ue(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet$9"),ve=__name((e,t,a)=>(ue(e,t,"access private method"),a),"__privateMethod$9");K=[i("gtn-toolbar")];class GTNToolbar extends(H=n,W=[o({type:String})],j=[o({type:String})],z=[o({type:String})],F=[o({type:String})],M=[o({type:String})],H){static{__name(this,"GTNToolbar")}constructor(){super(),pe(this,"langService"),pe(this,"appState"),pe(this,"langController",new UiLanguageController(this)),be(this,q,de(B,8,this,p(u))),de(B,11,this),be(this,V,de(B,12,this,g(u))),de(B,15,this),be(this,Z,de(B,16,this,_)),de(B,19,this),be(this,Q,de(B,20,this,b)),de(B,23,this),be(this,Y,de(B,24,this,"SANDBOX")),de(B,27,this);const e=d.getInstance();this.langService=e.resolve(h.LanguageService),this.appState=e.resolve(h.ApplicationState),this.currentUiLang=this.langService.getUiLanguage(),this.currentDslLang=this.langService.getDslLanguage(),this.appState.subscribe(()=>{this.currentMode=this.appState.mode,this.currentCamera=this.appState.cameraType})}handleRun(){this.dispatchEvent(new CustomEvent("run"))}handleClear(){this.dispatchEvent(new CustomEvent("clear"))}handleSave(){this.dispatchEvent(new CustomEvent("save-project"))}handleOpen(){this.dispatchEvent(new CustomEvent("open-project"))}async handleUiLangChange(e){const t=e.target,a=p(t.value);await this.langService.setUiLanguage(a),this.currentUiLang=a}async handleDslLangChange(e){const t=e.target,a=this.currentDslLang,r=g(t.value);await this.langService.setDslLanguage(r),this.currentDslLang=r,this.dispatchEvent(new CustomEvent("dsl-lang-change",{detail:{oldLang:a,newLang:r},bubbles:!0,composed:!0}))}handleToggleMode(){this.appState.toggleMode()}handleToggleCamera(){this.appState.toggleCameraType()}handleViewChange(e){this.currentView=e,this.dispatchEvent(new CustomEvent("view-change",{detail:{view:e},bubbles:!0,composed:!0}))}render(){const e=__name(e=>this.langService.translate(e),"t");return this.currentUiLang=this.langService.getUiLanguage(),this.currentDslLang=this.langService.getDslLanguage(),r`
      <div class="toolbar-wrapper" role="toolbar" aria-label="Workspace Controls">
        <div class="group" aria-hidden="true" data-tooltip="${e("app.subtitle")}">
          <img src="${"/assets/icon-128-DL_wwLNj.png"}" alt="GéoTortue Logo" class="toolbar-icon" />
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

        ${"EDITOR"===this.currentView?r`
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
            `:r`
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
          ${"3D"===this.currentMode?r`
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
          ${"EDITOR"===this.currentView?r`
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
    `}}function createAntlrHighlighter(e,t){const a=e.getTokenStyleMap(),r=new v(t),n=x.mark({class:"cm-gt-user-procedure"});return C.fromClass(class{decorations;constructor(e){this.decorations=this.buildDecorations(e)}update(e){(e.docChanged||e.viewportChanged)&&(this.decorations=this.buildDecorations(e.view))}buildDecorations(t){const i=new w,o=t.state.doc.toString(),s=new Set(e.getExtractedProcedures().map(e=>e.toLowerCase())),c=I.fromString(o),l=new m(c);l.removeErrorListeners();const d=r.getRefinedTokens(()=>l.getAllTokens());for(const e of d){const t=e.text?.toLowerCase()||"";if(t&&s.has(t)){i.add(e.start,e.stop+1,n);continue}const r=a.get(e.type);r&&i.add(e.start,e.stop+1,x.mark({class:`cm-gt-${r}`}))}return i.finish()}},{decorations:__name(e=>e.decorations,"decorations")})}B=ie(H),q=new WeakMap,V=new WeakMap,Z=new WeakMap,Q=new WeakMap,Y=new WeakMap,he(B,4,"currentUiLang",W,GTNToolbar,q),he(B,4,"currentDslLang",j,GTNToolbar,V),he(B,4,"currentMode",z,GTNToolbar,Z),he(B,4,"currentCamera",F,GTNToolbar,Q),he(B,4,"currentView",M,GTNToolbar,Y),GTNToolbar=he(B,0,"GTNToolbar",K,GTNToolbar),pe(GTNToolbar,"styles",[U,t`
      ${a(":host{display:block;width:100%;height:50px;z-index:100}.toolbar-wrapper{display:flex;justify-content:space-between;align-items:center;padding:0 1rem;background-color:#2c3e50;color:#fff;height:100%;box-shadow:0 2px 5px #0003;overflow:visible}.group{display:flex;gap:10px;align-items:center;overflow:visible;position:relative}.group .toolbar-icon{width:42px;height:42px;object-fit:contain}.group[data-tooltip]{position:relative}.group[data-tooltip]:after{content:attr(data-tooltip);position:absolute;transform:translateY(48px);margin-left:8px;padding:10px 16px;font-size:.9rem;border-radius:6px;background-color:#333;color:#fff;white-space:nowrap;z-index:1000;box-shadow:0 2px 8px #0000004d;opacity:0;display:none;visibility:hidden;transition:opacity .2s ease;pointer-events:none}.group[data-tooltip]:before{left:20px;transform:none}.group[data-tooltip]:hover:after{display:block;opacity:1;visibility:visible}.label{font-size:.7rem;font-weight:600;color:#bdc3c7;margin-bottom:2px;text-transform:uppercase;letter-spacing:.5px}.selector-wrapper{display:flex;flex-direction:column;align-items:center;position:relative;overflow:visible}.separator{width:1px;height:25px;background:#46607a;margin:0 5px}button{background:#34495e;border:1px solid #46607a;color:#fff;padding:5px 12px;border-radius:4px;cursor:pointer;display:flex;align-items:center;gap:5px;font-size:.9rem;transition:all .1s cubic-bezier(.4,0,.2,1)}button:hover{background:#46607a}button.primary{background:#27ae60;border-color:#2ecc71}button.primary:hover{background:#2ecc71}button.danger{background:#c0392b;border-color:#e74c3c}button:active{transform:translateY(1px);box-shadow:inset 0 3px 6px #0006;background:#2c3e50;border-color:#1a252f}button.primary:active{transform:translateY(1px);box-shadow:inset 0 3px 6px #0000004d;background:#1e8449;border-color:#145a32}button.danger:active{transform:translateY(1px);box-shadow:inset 0 3px 6px #0000004d;background:#922b21;border-color:#641e16}select{background:#34495e;color:#fff;border:1px solid #46607a;padding:2px 5px;border-radius:4px;cursor:pointer;font-size:.85rem;min-width:50px;position:relative;z-index:10}.title{font-weight:700;font-family:Inconsolata,monospace;font-size:1.2rem}.mode-badge{font-weight:900;color:#f1c40f;min-width:30px;justify-content:center}")}

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
    `]),de(B,1,GTNToolbar),__name(createAntlrHighlighter,"createAntlrHighlighter");const Te=S.baseTheme({".cm-gt-keyword":{color:"#c678dd",fontWeight:"bold"},".cm-gt-command":{color:"#61afef"},".cm-gt-number":{color:"#d19a66"},".cm-gt-string":{color:"#98c379"},".cm-gt-variable":{color:"#e06c75"},".cm-gt-comment":{color:"#5c6370",fontStyle:"italic"},".cm-gt-operator":{color:"#56b6c2"},".cm-gt-user-procedure":{color:"#c678dd",fontWeight:"bold"}});var fe,ye,Ge,xe,Ce,we,Se,Ee=Object.create,$e=Object.defineProperty,Le=Object.getOwnPropertyDescriptor,ke=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$e"),Re=__name(e=>{throw TypeError(e)},"__typeError$e"),Ne=__name((e,t,a)=>t in e?$e(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$e"),Ae=__name((e,t)=>$e(e,"name",{value:t,configurable:!0}),"__name$e"),Ie=__name(e=>[,,,Ee(e?.[ke("metadata")]??null)],"__decoratorStart$e"),Oe=["class","method","getter","setter","accessor","field","value","get","set"],Pe=__name(e=>void 0!==e&&"function"!=typeof e?Re("Function expected"):e,"__expectFn$e"),De=__name((e,t,a,r,n)=>({kind:Oe[e],name:t,metadata:r,addInitializer:__name(e=>a._?Re("Already initialized"):n.push(Pe(e||null)),"addInitializer")}),"__decoratorContext$e"),Ue=__name((e,t)=>Ne(t,ke("metadata"),e[3]),"__decoratorMetadata$e"),Me=__name((e,t,a,r)=>{for(var n=0,i=e[t>>1],o=i&&i.length;n<o;n++)1&t?i[n].call(a):r=i[n].call(a,r);return r},"__runInitializers$e"),Fe=__name((e,t,a,r,n,i)=>{var o,s,c,l,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,_=Oe[h+5],b=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(n=n.prototype),h<5&&(h>3||!u)&&Le(h<4?n:{get[a](){return He(this,i)},set[a](e){return Be(this,i,e)}},a));h?u&&h<4&&Ae(i,(h>2?"set ":h>1?"get ":"")+a):Ae(n,a);for(var T=r.length-1;T>=0;T--)l=De(h,a,c={},e[3],m),h&&(l.static=p,l.private=u,d=l.access={has:u?e=>We(n,e):e=>a in e},3^h&&(d.get=u?e=>(1^h?He:qe)(e,n,4^h?i:v.get):e=>e[a]),h>2&&(d.set=u?(e,t)=>Be(e,n,t,4^h?i:v.set):(e,t)=>e[a]=t)),s=(0,r[T])(h?h<4?u?i:v[_]:h>4?void 0:{get:v.get,set:v.set}:n,l),c._=1,4^h||void 0===s?Pe(s)&&(h>4?b.unshift(s):h?u?i=s:v[_]=s:n=s):"object"!=typeof s||null===s?Re("Object expected"):(Pe(o=s.get)&&(v.get=o),Pe(o=s.set)&&(v.set=o),Pe(o=s.init)&&b.unshift(o));return h||Ue(e,n),v&&$e(n,a,v),u?4^h?i:v:n},"__decorateElement$e"),ze=__name((e,t,a)=>Ne(e,"symbol"!=typeof t?t+"":t,a),"__publicField$8"),je=__name((e,t,a)=>t.has(e)||Re("Cannot "+a),"__accessCheck$8"),We=__name((e,t)=>Object(t)!==t?Re('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$8"),He=__name((e,t,a)=>(je(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet$8"),Ke=__name((e,t,a)=>t.has(e)?Re("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd$8"),Be=__name((e,t,a,r)=>(je(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet$8"),qe=__name((e,t,a)=>(je(e,t,"access private method"),a),"__privateMethod$8");xe=[i("gtn-editor")];class GTNEditor extends(Ge=n,ye=[o({type:String})],fe=[s("#editor-container")],Ge){static{__name(this,"GTNEditor")}constructor(){super(),Ke(this,we,Me(Ce,8,this)),Me(Ce,11,this),Ke(this,Se,Me(Ce,12,this)),Me(Ce,15,this),ze(this,"editor"),ze(this,"langService"),ze(this,"langController",new UiLanguageController(this)),ze(this,"languageCompartment",new A),ze(this,"syntaxService");const e=d.getInstance();this.langService=e.resolve(h.LanguageService),this.syntaxService=e.resolve(h.SyntaxService),this.code=""}firstUpdated(){this.initEditor()}disconnectedCallback(){super.disconnectedCallback(),this.editor?.destroy()}initEditor(){const e=createAntlrHighlighter(this.syntaxService,this.langService),t=E.create({doc:this.code,extensions:[$,k.of([R]),L,Te,e,this.languageCompartment.of([e]),S.updateListener.of(e=>{e.docChanged&&(this.code=e.state.doc.toString(),this.onEditorChange(this.code))})]});this.editor=new S({state:t,parent:this.editorContainer}),this.updateLanguageFeatures()}onEditorChange(e){this.dispatchEvent(new CustomEvent("code-change",{detail:{code:e},bubbles:!0,composed:!0}))}updated(e){super.updated(e),this.updateLanguageFeatures(),this.translateCodeInEditor(e)}translateCodeInEditor(e){if(!e.has("code")||!this.editor)return;const t=this.editor.state.doc.toString();t!==this.code&&this.editor.dispatch({changes:{from:0,to:t.length,insert:this.code}})}updateLanguageFeatures(){if(!this.editor)return;const e=this.langService.getAllKeywords(),t=N({override:[t=>{const a=t.matchBefore(/\w*/);return!a||a.from===a.to&&!t.explicit?null:{from:a.from,options:e.map(e=>({label:e,type:"keyword"}))}}]});this.editor.dispatch({effects:this.languageCompartment.reconfigure([t,createAntlrHighlighter(this.syntaxService,this.langService)])})}render(){return r`<div id="editor-container"></div>`}}Ce=Ie(Ge),we=new WeakMap,Se=new WeakMap,Fe(Ce,4,"code",ye,GTNEditor,we),Fe(Ce,4,"editorContainer",fe,GTNEditor,Se),GTNEditor=Fe(Ce,0,"GTNEditor",xe,GTNEditor),ze(GTNEditor,"styles",t`
    ${a(":host{display:block;font-family:var(--font-code);height:100%;overflow:hidden;font-size:14px}#editor-container,.cm-editor{height:100%}.cm-editor .cm-scroller{font-family:inherit}")}
  `),Me(Ce,1,GTNEditor);var Ve,Ze,Qe,Ye,Xe,Je=Object.create,et=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,at=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$d"),rt=__name(e=>{throw TypeError(e)},"__typeError$d"),nt=__name((e,t,a)=>t in e?et(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$d"),it=__name((e,t)=>et(e,"name",{value:t,configurable:!0}),"__name$d"),ot=__name(e=>[,,,Je(e?.[at("metadata")]??null)],"__decoratorStart$d"),st=["class","method","getter","setter","accessor","field","value","get","set"],ct=__name(e=>void 0!==e&&"function"!=typeof e?rt("Function expected"):e,"__expectFn$d"),lt=__name((e,t,a,r,n)=>({kind:st[e],name:t,metadata:r,addInitializer:__name(e=>a._?rt("Already initialized"):n.push(ct(e||null)),"addInitializer")}),"__decoratorContext$d"),dt=__name((e,t)=>nt(t,at("metadata"),e[3]),"__decoratorMetadata$d"),ht=__name((e,t,a,r)=>{for(var n=0,i=e[t>>1],o=i&&i.length;n<o;n++)1&t?i[n].call(a):r=i[n].call(a,r);return r},"__runInitializers$d"),pt=__name((e,t,a,r,n,i)=>{var o,s,c,l,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,_=st[h+5],b=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(n=n.prototype),h<5&&(h>3||!u)&&tt(h<4?n:{get[a](){return bt(this,i)},set[a](e){return vt(this,i,e)}},a));h?u&&h<4&&it(i,(h>2?"set ":h>1?"get ":"")+a):it(n,a);for(var T=r.length-1;T>=0;T--)l=lt(h,a,c={},e[3],m),h&&(l.static=p,l.private=u,d=l.access={has:u?e=>_t(n,e):e=>a in e},3^h&&(d.get=u?e=>(1^h?bt:Tt)(e,n,4^h?i:v.get):e=>e[a]),h>2&&(d.set=u?(e,t)=>vt(e,n,t,4^h?i:v.set):(e,t)=>e[a]=t)),s=(0,r[T])(h?h<4?u?i:v[_]:h>4?void 0:{get:v.get,set:v.set}:n,l),c._=1,4^h||void 0===s?ct(s)&&(h>4?b.unshift(s):h?u?i=s:v[_]=s:n=s):"object"!=typeof s||null===s?rt("Object expected"):(ct(o=s.get)&&(v.get=o),ct(o=s.set)&&(v.set=o),ct(o=s.init)&&b.unshift(o));return h||dt(e,n),v&&et(n,a,v),u?4^h?i:v:n},"__decorateElement$d"),ut=__name((e,t,a)=>nt(e,"symbol"!=typeof t?t+"":t,a),"__publicField$7"),gt=__name((e,t,a)=>t.has(e)||rt("Cannot "+a),"__accessCheck$7"),_t=__name((e,t)=>Object(t)!==t?rt('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$7"),bt=__name((e,t,a)=>(gt(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet$7"),mt=__name((e,t,a)=>t.has(e)?rt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd$7"),vt=__name((e,t,a,r)=>(gt(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet$7"),Tt=__name((e,t,a)=>(gt(e,t,"access private method"),a),"__privateMethod$7");Qe=[i("gtn-canvas")];class GTNCanvas extends(Ze=n,Ve=[s("#render-container")],Ze){static{__name(this,"GTNCanvas")}constructor(){super(),mt(this,Xe,ht(Ye,8,this)),ht(Ye,11,this),ut(this,"turtleRepo"),ut(this,"appState"),ut(this,"renderLoop"),ut(this,"renderer2D"),ut(this,"renderer3D"),ut(this,"currentRenderer",null),ut(this,"unsubscribeLoop",null);const e=d.getInstance();this.turtleRepo=e.resolve(h.TurtleRepository),this.appState=e.resolve(h.ApplicationState),this.renderLoop=e.resolve(h.RenderLoop),this.renderer2D=e.resolve(h.Renderer2D),this.renderer3D=e.resolve(h.Renderer3D)}firstUpdated(){this.syncRenderer(),this.appState.subscribe(()=>{this.syncRenderer()}),window.addEventListener("resize",()=>this.handleResize()),this.unsubscribeLoop=this.renderLoop.subscribe(()=>{this.currentRenderer&&this.currentRenderer.render(this.turtleRepo)}),this.renderLoop.start()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeLoop&&(this.unsubscribeLoop(),this.unsubscribeLoop=null),this.renderLoop.stop(),window.removeEventListener("resize",()=>this.handleResize()),this.currentRenderer&&this.currentRenderer.dispose()}syncRenderer(){const e=this.appState.mode,t=this.appState.cameraType,a="3D"===e;a===this.currentRenderer instanceof T&&this.currentRenderer||(this.currentRenderer&&this.currentRenderer.dispose(),this.currentRenderer="3D"===e?new T:new f,this.container&&this.currentRenderer.attach(this.container)),a&&this.currentRenderer instanceof T&&this.currentRenderer.setCameraType(t)}handleResize(){if(!this.currentRenderer||!this.container)return;const e=this.container.getBoundingClientRect();this.currentRenderer.resize(e.width,e.height)}render(){return r`<div id="render-container"></div>`}}pt(Ye=ot(Ze),4,"container",Ve,GTNCanvas,Xe=new WeakMap),GTNCanvas=pt(Ye,0,"GTNCanvas",Qe,GTNCanvas),ut(GTNCanvas,"styles",t`
    ${a(":host{display:block;width:100%;height:100%;overflow:hidden;background:#f0f0f0}#render-container{width:100%;height:100%}")}
  `),ht(Ye,1,GTNCanvas);var ft,yt,Gt,xt=Object.create,Ct=Object.defineProperty,wt=Object.getOwnPropertyDescriptor,St=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$c"),Et=__name(e=>{throw TypeError(e)},"__typeError$c"),$t=__name((e,t,a)=>t in e?Ct(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$c"),Lt=__name((e,t)=>Ct(e,"name",{value:t,configurable:!0}),"__name$c"),kt=__name(e=>[,,,xt(e?.[St("metadata")]??null)],"__decoratorStart$c"),Rt=["class","method","getter","setter","accessor","field","value","get","set"],Nt=__name(e=>void 0!==e&&"function"!=typeof e?Et("Function expected"):e,"__expectFn$c"),At=__name((e,t,a,r,n)=>({kind:Rt[e],name:t,metadata:r,addInitializer:__name(e=>a._?Et("Already initialized"):n.push(Nt(e||null)),"addInitializer")}),"__decoratorContext$c"),It=__name((e,t)=>$t(t,St("metadata"),e[3]),"__decoratorMetadata$c"),Ot=__name((e,t,a,r)=>{for(var n=0,i=e[t>>1],o=i&&i.length;n<o;n++)i[n].call(a);return r},"__runInitializers$c"),Pt=__name((e,t,a,r,n,i)=>{var o,s,c,l=7&t,d=e[0]||(e[0]=[]),h=l&&(n=n.prototype,l<5&&(l>3||!0)&&wt(n,a));Lt(n,a);for(var p=r.length-1;p>=0;p--)c=At(l,a,s={},e[3],d),o=(0,r[p])(n,c),s._=1,Nt(o)&&(n=o);return It(e,n),h&&Ct(n,a,h),n},"__decorateElement$c");ft=[i("dev-reset-button")];class DevResetButton extends(Gt=n){static{__name(this,"DevResetButton")}static styles=t`
    ${a("button{background-color:#f44;color:#fff;border:none;padding:8px 16px;border-radius:4px;cursor:pointer;font-weight:700}button:hover{background-color:#c00}")}
  `;resetApp(){localStorage.clear(),sessionStorage.clear(),window.location.reload()}render(){return r` <button @click="${this.resetApp}">Reset Local Data & Reload</button> `}}Ot(yt=kt(Gt),1,DevResetButton=Pt(yt,0,"DevResetButton",ft,DevResetButton));var Dt,Ut,Mt,Ft,zt,jt=Object.create,Wt=Object.defineProperty,Ht=Object.getOwnPropertyDescriptor,Kt=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$b"),Bt=__name(e=>{throw TypeError(e)},"__typeError$b"),qt=__name((e,t,a)=>t in e?Wt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$b"),Vt=__name((e,t)=>Wt(e,"name",{value:t,configurable:!0}),"__name$b"),Zt=__name(e=>[,,,jt(e?.[Kt("metadata")]??null)],"__decoratorStart$b"),Qt=["class","method","getter","setter","accessor","field","value","get","set"],Yt=__name(e=>void 0!==e&&"function"!=typeof e?Bt("Function expected"):e,"__expectFn$b"),Xt=__name((e,t,a,r,n)=>({kind:Qt[e],name:t,metadata:r,addInitializer:__name(e=>a._?Bt("Already initialized"):n.push(Yt(e||null)),"addInitializer")}),"__decoratorContext$b"),Jt=__name((e,t)=>qt(t,Kt("metadata"),e[3]),"__decoratorMetadata$b"),ea=__name((e,t,a,r)=>{for(var n=0,i=e[t>>1],o=i&&i.length;n<o;n++)1&t?i[n].call(a):r=i[n].call(a,r);return r},"__runInitializers$b"),ta=__name((e,t,a,r,n,i)=>{var o,s,c,l,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,_=Qt[h+5],b=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(n=n.prototype),h<5&&(h>3||!u)&&Ht(h<4?n:{get[a](){return ia(this,i)},set[a](e){return sa(this,i,e)}},a));h?u&&h<4&&Vt(i,(h>2?"set ":h>1?"get ":"")+a):Vt(n,a);for(var T=r.length-1;T>=0;T--)l=Xt(h,a,c={},e[3],m),h&&(l.static=p,l.private=u,d=l.access={has:u?e=>na(n,e):e=>a in e},3^h&&(d.get=u?e=>(1^h?ia:ca)(e,n,4^h?i:v.get):e=>e[a]),h>2&&(d.set=u?(e,t)=>sa(e,n,t,4^h?i:v.set):(e,t)=>e[a]=t)),s=(0,r[T])(h?h<4?u?i:v[_]:h>4?void 0:{get:v.get,set:v.set}:n,l),c._=1,4^h||void 0===s?Yt(s)&&(h>4?b.unshift(s):h?u?i=s:v[_]=s:n=s):"object"!=typeof s||null===s?Bt("Object expected"):(Yt(o=s.get)&&(v.get=o),Yt(o=s.set)&&(v.set=o),Yt(o=s.init)&&b.unshift(o));return h||Jt(e,n),v&&Wt(n,a,v),u?4^h?i:v:n},"__decorateElement$b"),aa=__name((e,t,a)=>qt(e,t+"",a),"__publicField$6"),ra=__name((e,t,a)=>t.has(e)||Bt("Cannot "+a),"__accessCheck$6"),na=__name((e,t)=>Object(t)!==t?Bt('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$6"),ia=__name((e,t,a)=>(ra(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet$6"),oa=__name((e,t,a)=>t.has(e)?Bt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd$6"),sa=__name((e,t,a,r)=>(ra(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet$6"),ca=__name((e,t,a)=>(ra(e,t,"access private method"),a),"__privateMethod$6");Mt=[i("gtn-error-toast")];class GTNErrorToast extends(Ut=n,Dt=[o({type:Array})],Ut){static{__name(this,"GTNErrorToast")}constructor(){super(...arguments),oa(this,zt,ea(Ft,8,this,[])),ea(Ft,11,this)}render(){return r`
      ${this.errors.map(e=>r`
          <div class="toast">
            <div class="header">
              <span>Syntax Error (Line ${e.line})</span>
            </div>
            <div class="msg">${e.message}</div>
          </div>
        `)}
    `}}ta(Ft=Zt(Ut),4,"errors",Dt,GTNErrorToast,zt=new WeakMap),aa(GTNErrorToast=ta(Ft,0,"GTNErrorToast",Mt,GTNErrorToast),"styles",t`
    ${a(":host{display:block;position:fixed;bottom:20px;right:20px;max-width:350px}.toast{background:#fff5f5;border-left:5px solid #f56565;box-shadow:0 4px 6px #0000001a;padding:12px 16px;margin-top:8px;border-radius:4px;animation:slideIn .3s ease-out}.header{font-weight:700;color:#c53030;display:flex;justify-content:space-between;font-size:.9em}.msg{font-size:.85em;margin-top:4px;color:#2d3748}@keyframes slideIn{0%{transform:translate(100%);opacity:0}to{transform:translate(0);opacity:1}}")}
  `),ea(Ft,1,GTNErrorToast);var la,da,ha,pa=Object.create,ua=Object.defineProperty,ga=Object.getOwnPropertyDescriptor,_a=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$a"),ba=__name(e=>{throw TypeError(e)},"__typeError$a"),ma=__name((e,t,a)=>t in e?ua(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$a"),va=__name((e,t)=>ua(e,"name",{value:t,configurable:!0}),"__name$a"),Ta=__name(e=>[,,,pa(e?.[_a("metadata")]??null)],"__decoratorStart$a"),fa=["class","method","getter","setter","accessor","field","value","get","set"],ya=__name(e=>void 0!==e&&"function"!=typeof e?ba("Function expected"):e,"__expectFn$a"),Ga=__name((e,t,a,r,n)=>({kind:fa[e],name:t,metadata:r,addInitializer:__name(e=>a._?ba("Already initialized"):n.push(ya(e||null)),"addInitializer")}),"__decoratorContext$a"),xa=__name((e,t)=>ma(t,_a("metadata"),e[3]),"__decoratorMetadata$a"),Ca=__name((e,t,a,r)=>{for(var n=0,i=e[t>>1],o=i&&i.length;n<o;n++)i[n].call(a);return r},"__runInitializers$a"),wa=__name((e,t,a,r,n,i)=>{var o,s,c,l=7&t,d=e[0]||(e[0]=[]),h=l&&(n=n.prototype,l<5&&(l>3||!0)&&ga(n,a));va(n,a);for(var p=r.length-1;p>=0;p--)c=Ga(l,a,s={},e[3],d),o=(0,r[p])(n,c),s._=1,ya(o)&&(n=o);return xa(e,n),h&&ua(n,a,h),n},"__decorateElement$a");la=[i("gtn-navigation-panel")];class GTNNavigationPanel extends(ha=n){static{__name(this,"GTNNavigationPanel")}static styles=t`
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
  `;langService;unsubscribeUiLang=null;constructor(){super(),this.langService=d.getInstance().resolve(h.LanguageService)}connectedCallback(){super.connectedCallback(),this.unsubscribeUiLang=this.langService.subscribeUiListeners(()=>{this.requestUpdate()})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeUiLang&&(this.unsubscribeUiLang(),this.unsubscribeUiLang=null)}emit(e){const t={action:e};this.dispatchEvent(new CustomEvent("move",{detail:t}))}render(){const e=__name(e=>this.langService.translate(e),"t");return r`
      <div class="d-pad">
        <button class="center"></button>
        <button
          @click=${()=>this.emit(O.GT_FORWARD)}
          title="${e("sandbox.tooltip.forward")}"
        >
          ▲
        </button>
        <button class="center"></button>

        <button
          @click=${()=>this.emit(O.GT_TURN_LEFT)}
          title="${e("sandbox.tooltip.left")}"
        >
          ◀
        </button>
        <button
          @click=${()=>this.emit(O.GT_BACKWARD)}
          title="${e("sandbox.tooltip.backward")}"
        >
          ▼
        </button>
        <button
          @click=${()=>this.emit(O.GT_TURN_RIGHT)}
          title="${e("sandbox.tooltip.right")}"
        >
          ▶
        </button>
      </div>
    `}}Ca(da=Ta(ha),1,GTNNavigationPanel=wa(da,0,"GTNNavigationPanel",la,GTNNavigationPanel));var Sa,Ea,$a,La,ka,Ra=Object.create,Na=Object.defineProperty,Aa=Object.getOwnPropertyDescriptor,Ia=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$9"),Oa=__name(e=>{throw TypeError(e)},"__typeError$9"),Pa=__name((e,t,a)=>t in e?Na(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$9"),Da=__name((e,t)=>Na(e,"name",{value:t,configurable:!0}),"__name$9"),Ua=__name(e=>[,,,Ra(e?.[Ia("metadata")]??null)],"__decoratorStart$9"),Ma=["class","method","getter","setter","accessor","field","value","get","set"],Fa=__name(e=>void 0!==e&&"function"!=typeof e?Oa("Function expected"):e,"__expectFn$9"),za=__name((e,t,a,r,n)=>({kind:Ma[e],name:t,metadata:r,addInitializer:__name(e=>a._?Oa("Already initialized"):n.push(Fa(e||null)),"addInitializer")}),"__decoratorContext$9"),ja=__name((e,t)=>Pa(t,Ia("metadata"),e[3]),"__decoratorMetadata$9"),Wa=__name((e,t,a,r)=>{for(var n=0,i=e[t>>1],o=i&&i.length;n<o;n++)1&t?i[n].call(a):r=i[n].call(a,r);return r},"__runInitializers$9"),Ha=__name((e,t,a,r,n,i)=>{var o,s,c,l,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,_=Ma[h+5],b=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(n=n.prototype),h<5&&(h>3||!u)&&Aa(h<4?n:{get[a](){return Va(this,i)},set[a](e){return Qa(this,i,e)}},a));h?u&&h<4&&Da(i,(h>2?"set ":h>1?"get ":"")+a):Da(n,a);for(var T=r.length-1;T>=0;T--)l=za(h,a,c={},e[3],m),h&&(l.static=p,l.private=u,d=l.access={has:u?e=>qa(n,e):e=>a in e},3^h&&(d.get=u?e=>(1^h?Va:Ya)(e,n,4^h?i:v.get):e=>e[a]),h>2&&(d.set=u?(e,t)=>Qa(e,n,t,4^h?i:v.set):(e,t)=>e[a]=t)),s=(0,r[T])(h?h<4?u?i:v[_]:h>4?void 0:{get:v.get,set:v.set}:n,l),c._=1,4^h||void 0===s?Fa(s)&&(h>4?b.unshift(s):h?u?i=s:v[_]=s:n=s):"object"!=typeof s||null===s?Oa("Object expected"):(Fa(o=s.get)&&(v.get=o),Fa(o=s.set)&&(v.set=o),Fa(o=s.init)&&b.unshift(o));return h||ja(e,n),v&&Na(n,a,v),u?4^h?i:v:n},"__decorateElement$9"),Ka=__name((e,t,a)=>Pa(e,"symbol"!=typeof t?t+"":t,a),"__publicField$5"),Ba=__name((e,t,a)=>t.has(e)||Oa("Cannot "+a),"__accessCheck$5"),qa=__name((e,t)=>Object(t)!==t?Oa('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$5"),Va=__name((e,t,a)=>(Ba(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet$5"),Za=__name((e,t,a)=>t.has(e)?Oa("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd$5"),Qa=__name((e,t,a,r)=>(Ba(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet$5"),Ya=__name((e,t,a)=>(Ba(e,t,"access private method"),a),"__privateMethod$5");$a=[i("gtn-compass-panel")];class GTNCompassPanel extends(Ea=n,Sa=[o({type:Number})],Ea){static{__name(this,"GTNCompassPanel")}constructor(){super(),Za(this,ka,Wa(La,8,this,0)),Wa(La,11,this),Ka(this,"langService"),Ka(this,"unsubscribeUiLang",null),this.langService=d.getInstance().resolve(h.LanguageService)}connectedCallback(){super.connectedCallback(),this.unsubscribeUiLang=this.langService.subscribeUiListeners(()=>{this.requestUpdate()})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeUiLang&&(this.unsubscribeUiLang(),this.unsubscribeUiLang=null)}handleClick(e){const t=e.currentTarget.getBoundingClientRect(),a=t.width/2,r=t.height/2,n=e.clientX-t.left-a,i=e.clientY-t.top-r;let o=Math.atan2(i,n)*(180/Math.PI);o=(o+90+360)%360;const s=5*Math.round(o/5);this.dispatchEvent(new CustomEvent("heading-change",{detail:{heading:s}}))}render(){const e=`rotate(${this.heading}, 50, 50)`,t=__name(e=>this.langService.translate(e),"t"),a=t("unit.degree");return r`
      <div class="compass-container" @click=${this.handleClick} title="${t("compass.set.heading")}">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="#f8f9fa" stroke="#ccc" stroke-width="2" />

          <text x="50" y="15" text-anchor="middle">${t("compass.n")}</text>
          <text x="85" y="54" text-anchor="middle">${t("compass.e")}</text>
          <text x="50" y="92" text-anchor="middle">${t("compass.s")}</text>
          <text x="15" y="54" text-anchor="middle">${t("compass.w")}</text>

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
        ${Math.round(this.heading)}${a}
      </div>
    `}}Ha(La=Ua(Ea),4,"heading",Sa,GTNCompassPanel,ka=new WeakMap),GTNCompassPanel=Ha(La,0,"GTNCompassPanel",$a,GTNCompassPanel),Ka(GTNCompassPanel,"styles",t`
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
  `),Wa(La,1,GTNCompassPanel);var Xa,Ja,er,tr,ar,rr,nr,ir,or,sr=Object.create,cr=Object.defineProperty,lr=Object.getOwnPropertyDescriptor,dr=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$8"),hr=__name(e=>{throw TypeError(e)},"__typeError$8"),pr=__name((e,t,a)=>t in e?cr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$8"),ur=__name((e,t)=>cr(e,"name",{value:t,configurable:!0}),"__name$8"),gr=__name(e=>[,,,sr(e?.[dr("metadata")]??null)],"__decoratorStart$8"),_r=["class","method","getter","setter","accessor","field","value","get","set"],br=__name(e=>void 0!==e&&"function"!=typeof e?hr("Function expected"):e,"__expectFn$8"),mr=__name((e,t,a,r,n)=>({kind:_r[e],name:t,metadata:r,addInitializer:__name(e=>a._?hr("Already initialized"):n.push(br(e||null)),"addInitializer")}),"__decoratorContext$8"),vr=__name((e,t)=>pr(t,dr("metadata"),e[3]),"__decoratorMetadata$8"),Tr=__name((e,t,a,r)=>{for(var n=0,i=e[t>>1],o=i&&i.length;n<o;n++)1&t?i[n].call(a):r=i[n].call(a,r);return r},"__runInitializers$8"),fr=__name((e,t,a,r,n,i)=>{var o,s,c,l,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,_=_r[h+5],b=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(n=n.prototype),h<5&&(h>3||!u)&&lr(h<4?n:{get[a](){return Cr(this,i)},set[a](e){return Sr(this,i,e)}},a));h?u&&h<4&&ur(i,(h>2?"set ":h>1?"get ":"")+a):ur(n,a);for(var T=r.length-1;T>=0;T--)l=mr(h,a,c={},e[3],m),h&&(l.static=p,l.private=u,d=l.access={has:u?e=>xr(n,e):e=>a in e},3^h&&(d.get=u?e=>(1^h?Cr:Er)(e,n,4^h?i:v.get):e=>e[a]),h>2&&(d.set=u?(e,t)=>Sr(e,n,t,4^h?i:v.set):(e,t)=>e[a]=t)),s=(0,r[T])(h?h<4?u?i:v[_]:h>4?void 0:{get:v.get,set:v.set}:n,l),c._=1,4^h||void 0===s?br(s)&&(h>4?b.unshift(s):h?u?i=s:v[_]=s:n=s):"object"!=typeof s||null===s?hr("Object expected"):(br(o=s.get)&&(v.get=o),br(o=s.set)&&(v.set=o),br(o=s.init)&&b.unshift(o));return h||vr(e,n),v&&cr(n,a,v),u?4^h?i:v:n},"__decorateElement$8"),yr=__name((e,t,a)=>pr(e,"symbol"!=typeof t?t+"":t,a),"__publicField$4"),Gr=__name((e,t,a)=>t.has(e)||hr("Cannot "+a),"__accessCheck$4"),xr=__name((e,t)=>Object(t)!==t?hr('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$4"),Cr=__name((e,t,a)=>(Gr(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet$4"),wr=__name((e,t,a)=>t.has(e)?hr("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd$4"),Sr=__name((e,t,a,r)=>(Gr(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet$4"),Er=__name((e,t,a)=>(Gr(e,t,"access private method"),a),"__privateMethod$4");const $r=!0;ar=[i("gtn-settings-panel")];class GTNSettingsPanel extends(tr=n,er=[o({type:Number})],Ja=[o({type:Number})],Xa=[o({type:Boolean})],tr){static{__name(this,"GTNSettingsPanel")}constructor(){super(),wr(this,nr,Tr(rr,8,this,50)),Tr(rr,11,this),wr(this,ir,Tr(rr,12,this,90)),Tr(rr,15,this),wr(this,or,Tr(rr,16,this,$r)),Tr(rr,19,this),yr(this,"langService"),yr(this,"unsubscribeUiLang",null),yr(this,"toggleKeyboard",()=>{this.keyboardActive=!this.keyboardActive;const e={value:this.keyboardActive};this.dispatchEvent(new CustomEvent("keyboard-status",{detail:e}))}),this.langService=d.getInstance().resolve(h.LanguageService)}connectedCallback(){super.connectedCallback(),this.unsubscribeUiLang=this.langService.subscribeUiListeners(()=>{this.requestUpdate()})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeUiLang&&(this.unsubscribeUiLang(),this.unsubscribeUiLang=null)}handleInput(e,t){const a=parseInt(e.target.value,10)||0;this.dispatchEvent(new CustomEvent("setting-change",{detail:{type:t,value:a}}))}render(){const e=__name(e=>this.langService.translate(e),"t");return r`
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
    `}}rr=gr(tr),nr=new WeakMap,ir=new WeakMap,or=new WeakMap,fr(rr,4,"step",er,GTNSettingsPanel,nr),fr(rr,4,"rotation",Ja,GTNSettingsPanel,ir),fr(rr,4,"keyboardActive",Xa,GTNSettingsPanel,or),GTNSettingsPanel=fr(rr,0,"GTNSettingsPanel",ar,GTNSettingsPanel),yr(GTNSettingsPanel,"styles",t`
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
  `),Tr(rr,1,GTNSettingsPanel);const Lr="0 -960 960 960",kr={check:{content:c`<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>`},close:{content:c`<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>`},menu:{content:c`<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>`},settings:{content:c`<path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.58 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>`},home:{content:c`<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>`},user:{content:c`<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>`},eye:{content:c`
    <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    </path>
    <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    </path>
  `},eyeSlash:{content:c`
    <path d="M2.99902 3L20.999 21M9.8433 9.91364C9.32066 10.4536 8.99902 11.1892 8.99902 12C8.99902 13.6569 10.3422 15 11.999 15C12.8215 15 13.5667 14.669 14.1086 14.133M6.49902 6.64715C4.59972 7.90034 3.15305 9.78394 2.45703 12C3.73128 16.0571 7.52159 19 11.9992 19C13.9881 19 15.8414 18.4194 17.3988 17.4184M10.999 5.04939C11.328 5.01673 11.6617 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C21.2607 12.894 20.8577 13.7338 20.3522 14.5"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    </path>`},pen:{content:c`
    <path d="M15.4998 5.49994L18.3282 8.32837M3 20.9997L3.04745 20.6675C3.21536 19.4922 3.29932 18.9045 3.49029 18.3558C3.65975 17.8689 3.89124 17.4059 4.17906 16.9783C4.50341 16.4963 4.92319 16.0765 5.76274 15.237L17.4107 3.58896C18.1918 2.80791 19.4581 2.80791 20.2392 3.58896C21.0202 4.37001 21.0202 5.63634 20.2392 6.41739L8.37744 18.2791C7.61579 19.0408 7.23497 19.4216 6.8012 19.7244C6.41618 19.9932 6.00093 20.2159 5.56398 20.3879C5.07171 20.5817 4.54375 20.6882 3.48793 20.9012L3 20.9997Z"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`},penSlash:{content:c`
    <path d="M15.4998 5.50067L18.3282 8.3291M13.3254 7.67502L17.4107 3.58969C18.1918 2.80865 19.4581 2.80864 20.2392 3.58969C21.0202 4.37074 21.0202 5.63707 20.2392 6.41812L16.1538 10.5034M3 3L10.5002 10.5002M21 21L13.3286 13.3286M13.3286 13.3286L8.37744 18.2798C7.61579 19.0415 7.23497 19.4223 6.8012 19.7252C6.41618 19.994 6.00093 20.2167 5.56398 20.3887C5.07171 20.5824 4.54375 20.6889 3.48793 20.902L3 21.0004L3.04745 20.6683C3.21536 19.4929 3.29932 18.9052 3.49029 18.3565C3.65975 17.8697 3.89124 17.4067 4.17906 16.979C4.50341 16.497 4.92319 16.0772 5.76274 15.2377L10.5002 10.5002M13.3286 13.3286L10.5002 10.5002"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`},draw:{content:c`
    <path d="M160-120v-170l527-526q12-12 27-18t30-6q16 0 30.5 6t25.5 18l56 56q12 11 18 25.5t6 30.5q0 15-6 30t-18 27L330-120H160Zm80-80h56l393-392-28-29-29-28-392 393v56Zm560-503-57-57 57 57Zm-139 82-29-28 57 57-28-29ZM560-120q74 0 137-37t63-103q0-36-19-62t-51-45l-59 59q23 10 36 22t13 26q0 23-36.5 41.5T560-200q-17 0-28.5 11.5T520-160q0 17 11.5 28.5T560-120ZM183-426l60-60q-20-8-31.5-16.5T200-520q0-12 18-24t76-37q88-38 117-69t29-70q0-55-44-87.5T280-840q-45 0-80.5 16T145-785q-11 13-9 29t15 26q13 11 29 9t27-13q14-14 31-20t42-6q41 0 60.5 12t19.5 28q0 14-17.5 25.5T262-654q-80 35-111 63.5T120-520q0 32 17 54.5t46 39.5Z"
          fill="currentColor"
    />`,viewBox:Lr},editOff:{content:c`
    <path d="m622-453-56-56 82-82-57-57-82 82-56-56 195-195q12-12 26.5-17.5T705-840q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L622-453ZM200-200h57l195-195-28-29-29-28-195 195v57ZM792-56 509-338 290-120H120v-169l219-219L56-792l57-57 736 736-57 57Zm-32-648-56-56 56 56Zm-169 56 57 57-57-57ZM424-424l-29-28 57 57-28-29Z"
          fill="currentColor"
    />`,viewBox:Lr},visibility:{content:c`
    <path d="M607.5-372.5Q660-425 660-500t-52.5-127.5Q555-680 480-680t-127.5 52.5Q300-575 300-500t52.5 127.5Q405-320 480-320t127.5-52.5Zm-204-51Q372-455 372-500t31.5-76.5Q435-608 480-608t76.5 31.5Q588-545 588-500t-31.5 76.5Q525-392 480-392t-76.5-31.5ZM214-281.5Q94-363 40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200q-146 0-266-81.5ZM480-500Zm207.5 160.5Q782-399 832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280q113 0 207.5-59.5Z"
          fill="currentColor"
    />`,viewBox:Lr},visibilityOff:{content:c`
    <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"
          fill="currentColor"
    />`,viewBox:Lr}};function isIconName(e){return"string"==typeof e&&Object.prototype.hasOwnProperty.call(kr,e)}function tryToIconName(e){if(isIconName(e))return e}function getIconFromName(e){const t=tryToIconName(e);if(!t)return void console.warn(`[GtnIcon] Icon not found: "${e}"`);const a=kr[t];return{...a,viewBox:a.viewBox??"0 0 24 24"}}__name(isIconName,"isIconName"),__name(tryToIconName,"tryToIconName"),__name(getIconFromName,"getIconFromName");var Rr,Nr,Ar,Ir,Or,Pr,Dr,Ur=Object.create,Mr=Object.defineProperty,Fr=Object.getOwnPropertyDescriptor,zr=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$7"),jr=__name(e=>{throw TypeError(e)},"__typeError$7"),Wr=__name((e,t,a)=>t in e?Mr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$7"),Hr=__name((e,t)=>Mr(e,"name",{value:t,configurable:!0}),"__name$7"),Kr=__name(e=>[,,,Ur(e?.[zr("metadata")]??null)],"__decoratorStart$7"),Br=["class","method","getter","setter","accessor","field","value","get","set"],qr=__name(e=>void 0!==e&&"function"!=typeof e?jr("Function expected"):e,"__expectFn$7"),Vr=__name((e,t,a,r,n)=>({kind:Br[e],name:t,metadata:r,addInitializer:__name(e=>a._?jr("Already initialized"):n.push(qr(e||null)),"addInitializer")}),"__decoratorContext$7"),Zr=__name((e,t)=>Wr(t,zr("metadata"),e[3]),"__decoratorMetadata$7"),Qr=__name((e,t,a,r)=>{for(var n=0,i=e[t>>1],o=i&&i.length;n<o;n++)1&t?i[n].call(a):r=i[n].call(a,r);return r},"__runInitializers$7"),Yr=__name((e,t,a,r,n,i)=>{var o,s,c,l,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,_=Br[h+5],b=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(n=n.prototype),h<5&&(h>3||!u)&&Fr(h<4?n:{get[a](){return tn(this,i)},set[a](e){return rn(this,i,e)}},a));h?u&&h<4&&Hr(i,(h>2?"set ":h>1?"get ":"")+a):Hr(n,a);for(var T=r.length-1;T>=0;T--)l=Vr(h,a,c={},e[3],m),h&&(l.static=p,l.private=u,d=l.access={has:u?e=>en(n,e):e=>a in e},3^h&&(d.get=u?e=>(1^h?tn:nn)(e,n,4^h?i:v.get):e=>e[a]),h>2&&(d.set=u?(e,t)=>rn(e,n,t,4^h?i:v.set):(e,t)=>e[a]=t)),s=(0,r[T])(h?h<4?u?i:v[_]:h>4?void 0:{get:v.get,set:v.set}:n,l),c._=1,4^h||void 0===s?qr(s)&&(h>4?b.unshift(s):h?u?i=s:v[_]=s:n=s):"object"!=typeof s||null===s?jr("Object expected"):(qr(o=s.get)&&(v.get=o),qr(o=s.set)&&(v.set=o),qr(o=s.init)&&b.unshift(o));return h||Zr(e,n),v&&Mr(n,a,v),u?4^h?i:v:n},"__decorateElement$7"),Xr=__name((e,t,a)=>Wr(e,t+"",a),"__publicField$3"),Jr=__name((e,t,a)=>t.has(e)||jr("Cannot "+a),"__accessCheck$3"),en=__name((e,t)=>Object(t)!==t?jr('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$3"),tn=__name((e,t,a)=>(Jr(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet$3"),an=__name((e,t,a)=>t.has(e)?jr("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd$3"),rn=__name((e,t,a,r)=>(Jr(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet$3"),nn=__name((e,t,a)=>(Jr(e,t,"access private method"),a),"__privateMethod$3");Ir=[i("gtn-icon")];class GtnIcon extends(Ar=n,Nr=[o({type:String})],Rr=[o({type:String})],Ar){static{__name(this,"GtnIcon")}constructor(){super(...arguments),an(this,Pr,Qr(Or,8,this)),Qr(Or,11,this),an(this,Dr,Qr(Or,12,this)),Qr(Or,15,this)}render(){const e=getIconFromName(this.icon);return e?r`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="${e.viewBox}"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
        focusable="false"
      >
        ${e.content}
      </svg>
    `:r``}}Or=Kr(Ar),Pr=new WeakMap,Dr=new WeakMap,Yr(Or,4,"icon",Nr,GtnIcon,Pr),Yr(Or,4,"viewBox",Rr,GtnIcon,Dr),Xr(GtnIcon=Yr(Or,0,"GtnIcon",Ir,GtnIcon),"styles",t`
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
  `),Qr(Or,1,GtnIcon);var on,sn,cn,ln=Object.create,dn=Object.defineProperty,hn=Object.getOwnPropertyDescriptor,pn=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$6"),un=__name(e=>{throw TypeError(e)},"__typeError$6"),gn=__name((e,t,a)=>t in e?dn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$6"),_n=__name((e,t)=>dn(e,"name",{value:t,configurable:!0}),"__name$6"),bn=__name(e=>[,,,ln(e?.[pn("metadata")]??null)],"__decoratorStart$6"),mn=["class","method","getter","setter","accessor","field","value","get","set"],vn=__name(e=>void 0!==e&&"function"!=typeof e?un("Function expected"):e,"__expectFn$6"),Tn=__name((e,t,a,r,n)=>({kind:mn[e],name:t,metadata:r,addInitializer:__name(e=>a._?un("Already initialized"):n.push(vn(e||null)),"addInitializer")}),"__decoratorContext$6"),fn=__name((e,t)=>gn(t,pn("metadata"),e[3]),"__decoratorMetadata$6"),yn=__name((e,t,a,r)=>{for(var n=0,i=e[t>>1],o=i&&i.length;n<o;n++)i[n].call(a);return r},"__runInitializers$6"),Gn=__name((e,t,a,r,n,i)=>{var o,s,c,l=7&t,d=e[0]||(e[0]=[]),h=l&&(n=n.prototype,l<5&&(l>3||!0)&&hn(n,a));_n(n,a);for(var p=r.length-1;p>=0;p--)c=Tn(l,a,s={},e[3],d),o=(0,r[p])(n,c),s._=1,vn(o)&&(n=o);return fn(e,n),h&&dn(n,a,h),n},"__decorateElement$6");on=[i("gtn-commands-panel")];class GTNCommandsPanel extends(cn=n){static{__name(this,"GTNCommandsPanel")}static styles=t`
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
  `;langService;unsubscribeUiLang=null;constructor(){super(),this.langService=d.getInstance().resolve(h.LanguageService)}connectedCallback(){super.connectedCallback(),this.unsubscribeUiLang=this.langService.subscribeUiListeners(()=>{this.requestUpdate()})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeUiLang&&(this.unsubscribeUiLang(),this.unsubscribeUiLang=null)}emit(e,t){const a={action:e,value:t};this.dispatchEvent(new CustomEvent("command",{detail:a}))}render(){const e=__name(e=>this.langService.translate(e),"t"),t=e("commands.GT_FORWARD"),a=e("commands.GT_BACKWARD"),n=e("commands.GT_TURN_LEFT"),i=e("commands.GT_TURN_RIGHT"),o=e("unit.degree");return r`
      <div class="cmd-row">
        <button @click=${()=>this.emit(O.GT_FORWARD,10)}>${t} 10</button>
        <button @click=${()=>this.emit(O.GT_FORWARD,25)}>${t} 25</button>
        <button @click=${()=>this.emit(O.GT_FORWARD,100)}>${t} 100</button>
      </div>

      <div class="cmd-row">
        <button @click=${()=>this.emit(O.GT_BACKWARD,10)}>${a} 10</button>
        <button @click=${()=>this.emit(O.GT_BACKWARD,25)}>${a} 25</button>
        <button @click=${()=>this.emit(O.GT_BACKWARD,100)}>${a} 100</button>
      </div>

      <div class="separator"></div>

      <div class="cmd-row">
        <button @click=${()=>this.emit(O.GT_TURN_LEFT,30)}>${n} 30${o}</button>
        <button @click=${()=>this.emit(O.GT_TURN_LEFT,45)}>${n} 45${o}</button>
        <button @click=${()=>this.emit(O.GT_TURN_LEFT,90)}>${n} 90${o}</button>
      </div>

      <div class="cmd-row">
        <button @click=${()=>this.emit(O.GT_TURN_RIGHT,30)}>${i} 30${o}</button>
        <button @click=${()=>this.emit(O.GT_TURN_RIGHT,45)}>${i} 45${o}</button>
        <button @click=${()=>this.emit(O.GT_TURN_RIGHT,90)}>${i} 90${o}</button>
      </div>

      <div class="separator"></div>

      <div class="tools-grid">
        <button @click=${()=>this.emit(O.GT_PEN_DOWN)}>
          <span class="icon"><gtn-icon icon="draw"></gtn-icon></span>${e("sandbox.btn.pendown")}
        </button>
        <button @click=${()=>this.emit(O.GT_PEN_UP)}>
          <span class="icon"><gtn-icon icon="editOff"></gtn-icon></span>${e("sandbox.btn.penup")}
        </button>
        <button @click=${()=>this.emit(O.GT_SHOW_TURTLE)}>
          <span class="icon"><gtn-icon icon="visibility"></gtn-icon></span>${e("sandbox.btn.showturtle")}
        </button>
        <button @click=${()=>this.emit(O.GT_HIDE_TURTLE)}>
          <span class="icon"><gtn-icon icon="visibilityOff"></gtn-icon></span>${e("sandbox.btn.hideturtle")}
        </button>
      </div>
    `}}yn(sn=bn(cn),1,GTNCommandsPanel=Gn(sn,0,"GTNCommandsPanel",on,GTNCommandsPanel));var xn,Cn,wn,Sn=Object.create,En=Object.defineProperty,$n=Object.getOwnPropertyDescriptor,Ln=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$5"),kn=__name(e=>{throw TypeError(e)},"__typeError$5"),Rn=__name((e,t,a)=>t in e?En(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$5"),Nn=__name((e,t)=>En(e,"name",{value:t,configurable:!0}),"__name$5"),An=__name(e=>[,,,Sn(e?.[Ln("metadata")]??null)],"__decoratorStart$5"),In=["class","method","getter","setter","accessor","field","value","get","set"],On=__name(e=>void 0!==e&&"function"!=typeof e?kn("Function expected"):e,"__expectFn$5"),Pn=__name((e,t,a,r,n)=>({kind:In[e],name:t,metadata:r,addInitializer:__name(e=>a._?kn("Already initialized"):n.push(On(e||null)),"addInitializer")}),"__decoratorContext$5"),Dn=__name((e,t)=>Rn(t,Ln("metadata"),e[3]),"__decoratorMetadata$5"),Un=__name((e,t,a,r)=>{for(var n=0,i=e[t>>1],o=i&&i.length;n<o;n++)i[n].call(a);return r},"__runInitializers$5"),Mn=__name((e,t,a,r,n,i)=>{var o,s,c,l=7&t,d=e[0]||(e[0]=[]),h=l&&(n=n.prototype,l<5&&(l>3||!0)&&$n(n,a));Nn(n,a);for(var p=r.length-1;p>=0;p--)c=Pn(l,a,s={},e[3],d),o=(0,r[p])(n,c),s._=1,On(o)&&(n=o);return Dn(e,n),h&&En(n,a,h),n},"__decorateElement$5");const Fn=[y.BLACK,y.RED,y.BLUE,y.GREEN,y.YELLOW,y.ORANGE];xn=[i("gtn-color-panel")];class GTNColorPanel extends(wn=n){static{__name(this,"GTNColorPanel")}static styles=t`
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
  `;langService;unsubscribeUiLang=null;constructor(){super(),this.langService=d.getInstance().resolve(h.LanguageService)}connectedCallback(){super.connectedCallback(),this.unsubscribeUiLang=this.langService.subscribeUiListeners(()=>{this.requestUpdate()})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeUiLang&&(this.unsubscribeUiLang(),this.unsubscribeUiLang=null)}emit(e){const t={color:e};this.dispatchEvent(new CustomEvent("color-change",{detail:t}))}render(){const e=__name(e=>this.langService.translate(e),"t");return r`
      <div class="palette">
        ${Fn.map(t=>r`
            <div
              class="swatch"
              style="background-color: ${t}"
              @click=${()=>this.emit(t)}
              title="${e("sandbox.btn.colors."+t)}"
            ></div>
          `)}
      </div>
    `}}Un(Cn=An(wn),1,GTNColorPanel=Mn(Cn,0,"GTNColorPanel",xn,GTNColorPanel));var zn,jn,Wn,Hn,Kn=Object.create,Bn=Object.defineProperty,qn=Object.getOwnPropertyDescriptor,Vn=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$4"),Zn=__name(e=>{throw TypeError(e)},"__typeError$4"),Qn=__name((e,t,a)=>t in e?Bn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$4"),Yn=__name((e,t)=>Bn(e,"name",{value:t,configurable:!0}),"__name$4"),Xn=__name(e=>[,,,Kn(e?.[Vn("metadata")]??null)],"__decoratorStart$4"),Jn=["class","method","getter","setter","accessor","field","value","get","set"],ei=__name(e=>void 0!==e&&"function"!=typeof e?Zn("Function expected"):e,"__expectFn$4"),ti=__name((e,t,a,r,n)=>({kind:Jn[e],name:t,metadata:r,addInitializer:__name(e=>a._?Zn("Already initialized"):n.push(ei(e||null)),"addInitializer")}),"__decoratorContext$4"),ai=__name((e,t)=>Qn(t,Vn("metadata"),e[3]),"__decoratorMetadata$4"),ri=__name((e,t,a,r)=>{for(var n=0,i=e[t>>1],o=i&&i.length;n<o;n++)i[n].call(a);return r},"__runInitializers$4"),ni=__name((e,t,a,r,n,i)=>{var o,s,c,l=7&t,d=e[0]||(e[0]=[]),h=l&&(n=n.prototype,l<5&&(l>3||!0)&&qn(n,a));Yn(n,a);for(var p=r.length-1;p>=0;p--)c=ti(l,a,s={},e[3],d),o=(0,r[p])(n,c),s._=1,ei(o)&&(n=o);return ai(e,n),h&&Bn(n,a,h),n},"__decorateElement$4");zn=[i("gtn-controls-panel")];class GTNControlsPanel extends(Wn=n){static{__name(this,"GTNControlsPanel")}static styles=[U,t`
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
    `];langService;unsubscribeUiLang=null;constructor(){super(),this.langService=d.getInstance().resolve(h.LanguageService)}connectedCallback(){super.connectedCallback(),this.unsubscribeUiLang=this.langService.subscribeUiListeners(()=>{this.requestUpdate()})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeUiLang&&(this.unsubscribeUiLang(),this.unsubscribeUiLang=null)}render(){const e=__name(e=>this.langService.translate(e),"t");return r`
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
    `}}ri(jn=Xn(Wn),1,GTNControlsPanel=ni(jn,0,"GTNControlsPanel",zn,GTNControlsPanel)),(e=>{var t,a;function isTypingContent(e){return 1===e.length}(t=e.Keys||(e.Keys={})).Backspace="Backspace",t.Tab="Tab",t.Enter="Enter",t.Shift="Shift",t.Control="Control",t.Alt="Alt",t.Pause="Pause",t.CapsLock="CapsLock",t.Escape="Escape",t.Space=" ",t.PageUp="PageUp",t.PageDown="PageDown",t.End="End",t.Home="Home",t.ArrowLeft="ArrowLeft",t.ArrowUp="ArrowUp",t.ArrowRight="ArrowRight",t.ArrowDown="ArrowDown",t.PrintScreen="PrintScreen",t.Insert="Insert",t.Delete="Delete",t.Digit0="0",t.Digit1="1",t.Digit2="2",t.Digit3="3",t.Digit4="4",t.Digit5="5",t.Digit6="6",t.Digit7="7",t.Digit8="8",t.Digit9="9",t.A="A",t.B="B",t.C="C",t.D="D",t.E="E",t.F="F",t.G="G",t.H="H",t.I="I",t.J="J",t.K="K",t.L="L",t.M="M",t.N="N",t.O="O",t.P="P",t.Q="Q",t.R="R",t.S="S",t.T="T",t.U="U",t.V="V",t.W="W",t.X="X",t.Y="Y",t.Z="Z",t.a="a",t.b="b",t.c="c",t.d="d",t.e="e",t.f="f",t.g="g",t.h="h",t.i="i",t.j="j",t.k="k",t.l="l",t.m="m",t.n="n",t.o="o",t.p="p",t.q="q",t.r="r",t.s="s",t.t="t",t.u="u",t.v="v",t.w="w",t.x="x",t.y="y",t.z="z",t.Meta="Meta",t.ContextMenu="ContextMenu",t.AudioVolumeMute="AudioVolumeMute",t.AudioVolumeDown="AudioVolumeDown",t.AudioVolumeUp="AudioVolumeUp",t.F1="F1",t.F2="F2",t.F3="F3",t.F4="F4",t.F5="F5",t.F6="F6",t.F7="F7",t.F8="F8",t.F9="F9",t.F10="F10",t.F11="F11",t.F12="F12",t.NumLock="NumLock",t.ScrollLock="ScrollLock",t.Semicolon=";",t.Equal="=",t.Comma=",",t.Minus="-",t.Period=".",t.Slash="/",t.Backquote="`",t.BracketLeft="[",t.Backslash="\\",t.BracketRight="]",t.Quote="'",t.Tilde="~",t.Exclamation="!",t.At="@",t.Sharp="#",t.Dollar="$",t.Percent="%",t.Caret="^",t.Ampersand="&",t.Asterisk="*",t.ParenthesisLeft="(",t.ParenthesisRight=")",t.Underscore="_",t.Plus="+",t.OpenBrace="{",t.CloseBrace="}",t.Pipe="|",t.Colon=":",t.Quote2='"',t.AngleBracketLeft="<",t.AngleBracketRight=">",t.QuestionMark="?",(a=e.Codes||(e.Codes={})).Backspace="Backspace",a.Tab="Tab",a.Enter="Enter",a.ShiftLeft="ShiftLeft",a.ShiftRight="ShiftRight",a.ControlLeft="ControlLeft",a.ControlRight="ControlRight",a.AltLeft="AltLeft",a.AltRight="AltRight",a.Pause="Pause",a.CapsLock="CapsLock",a.Escape="Escape",a.Space="Space",a.PageUp="PageUp",a.PageDown="PageDown",a.End="End",a.Home="Home",a.ArrowLeft="ArrowLeft",a.ArrowUp="ArrowUp",a.ArrowRight="ArrowRight",a.ArrowDown="ArrowDown",a.PrintScreen="PrintScreen",a.Insert="Insert",a.Delete="Delete",a.Digit0="Digit0",a.Digit1="Digit1",a.Digit2="Digit2",a.Digit3="Digit3",a.Digit4="Digit4",a.Digit5="Digit5",a.Digit6="Digit6",a.Digit7="Digit7",a.Digit8="Digit8",a.Digit9="Digit9",a.AudioVolumeMute="AudioVolumeMute",a.AudioVolumeDown="AudioVolumeDown",a.AudioVolumeUp="AudioVolumeUp",a.KeyA="KeyA",a.KeyB="KeyB",a.KeyC="KeyC",a.KeyD="KeyD",a.KeyE="KeyE",a.KeyF="KeyF",a.KeyG="KeyG",a.KeyH="KeyH",a.KeyI="KeyI",a.KeyJ="KeyJ",a.KeyK="KeyK",a.KeyL="KeyL",a.KeyM="KeyM",a.KeyN="KeyN",a.KeyO="KeyO",a.KeyP="KeyP",a.KeyQ="KeyQ",a.KeyR="KeyR",a.KeyS="KeyS",a.KeyT="KeyT",a.KeyU="KeyU",a.KeyV="KeyV",a.KeyW="KeyW",a.KeyX="KeyX",a.KeyY="KeyY",a.KeyZ="KeyZ",a.MetaLeft="MetaLeft",a.MetaRight="MetaRight",a.ContextMenu="ContextMenu",a.Numpad0="Numpad0",a.Numpad1="Numpad1",a.Numpad2="Numpad2",a.Numpad3="Numpad3",a.Numpad4="Numpad4",a.Numpad5="Numpad5",a.Numpad6="Numpad6",a.Numpad7="Numpad7",a.Numpad8="Numpad8",a.Numpad9="Numpad9",a.NumpadMultiply="NumpadMultiply",a.NumpadAdd="NumpadAdd",a.NumpadSubtract="NumpadSubtract",a.NumpadDecimal="NumpadDecimal",a.NumpadDivide="NumpadDivide",a.F1="F1",a.F2="F2",a.F3="F3",a.F4="F4",a.F5="F5",a.F6="F6",a.F7="F7",a.F8="F8",a.F9="F9",a.F10="F10",a.F11="F11",a.F12="F12",a.NumLock="NumLock",a.ScrollLock="ScrollLock",a.Semicolon="Semicolon",a.Equal="Equal",a.Comma="Comma",a.Minus="Minus",a.Period="Period",a.Slash="Slash",a.Backquote="Backquote",a.BracketLeft="BracketLeft",a.Backslash="Backslash",a.BracketRight="BracketRight",a.Quote="Quote",__name(isTypingContent,"isTypingContent"),e.isTypingContent=isTypingContent})(Hn||(Hn={})),Hn.Codes;const ii={Enter:Hn.Codes.Enter,Escape:Hn.Codes.Escape,ArrowUp:Hn.Codes.ArrowUp,ArrowDown:Hn.Codes.ArrowDown,ArrowLeft:Hn.Codes.ArrowLeft,ArrowRight:Hn.Codes.ArrowRight,KeyUp:Hn.Codes.KeyW,KeyDown:Hn.Codes.KeyS,KeyLeft:Hn.Codes.KeyA,KeyRight:Hn.Codes.KeyD,Backspace:Hn.Codes.Backspace,Delete:Hn.Codes.Delete,Space:Hn.Codes.Space};var oi,si,ci,li,di,hi,pi,ui,gi,_i,bi,mi,vi,Ti=Object.create,fi=Object.defineProperty,yi=Object.getOwnPropertyDescriptor,Gi=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$3"),xi=__name(e=>{throw TypeError(e)},"__typeError$3"),Ci=__name((e,t,a)=>t in e?fi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$3"),wi=__name((e,t)=>fi(e,"name",{value:t,configurable:!0}),"__name$3"),Si=__name(e=>[,,,Ti(e?.[Gi("metadata")]??null)],"__decoratorStart$3"),Ei=["class","method","getter","setter","accessor","field","value","get","set"],$i=__name(e=>void 0!==e&&"function"!=typeof e?xi("Function expected"):e,"__expectFn$3"),Li=__name((e,t,a,r,n)=>({kind:Ei[e],name:t,metadata:r,addInitializer:__name(e=>a._?xi("Already initialized"):n.push($i(e||null)),"addInitializer")}),"__decoratorContext$3"),ki=__name((e,t)=>Ci(t,Gi("metadata"),e[3]),"__decoratorMetadata$3"),Ri=__name((e,t,a,r)=>{for(var n=0,i=e[t>>1],o=i&&i.length;n<o;n++)1&t?i[n].call(a):r=i[n].call(a,r);return r},"__runInitializers$3"),Ni=__name((e,t,a,r,n,i)=>{var o,s,c,l,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,_=Ei[h+5],b=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(n=n.prototype),h<5&&(h>3||!u)&&yi(h<4?n:{get[a](){return Pi(this,i)},set[a](e){return Ui(this,i,e)}},a));h?u&&h<4&&wi(i,(h>2?"set ":h>1?"get ":"")+a):wi(n,a);for(var T=r.length-1;T>=0;T--)l=Li(h,a,c={},e[3],m),h&&(l.static=p,l.private=u,d=l.access={has:u?e=>Oi(n,e):e=>a in e},3^h&&(d.get=u?e=>(1^h?Pi:Mi)(e,n,4^h?i:v.get):e=>e[a]),h>2&&(d.set=u?(e,t)=>Ui(e,n,t,4^h?i:v.set):(e,t)=>e[a]=t)),s=(0,r[T])(h?h<4?u?i:v[_]:h>4?void 0:{get:v.get,set:v.set}:n,l),c._=1,4^h||void 0===s?$i(s)&&(h>4?b.unshift(s):h?u?i=s:v[_]=s:n=s):"object"!=typeof s||null===s?xi("Object expected"):($i(o=s.get)&&(v.get=o),$i(o=s.set)&&(v.set=o),$i(o=s.init)&&b.unshift(o));return h||ki(e,n),v&&fi(n,a,v),u?4^h?i:v:n},"__decorateElement$3"),Ai=__name((e,t,a)=>Ci(e,"symbol"!=typeof t?t+"":t,a),"__publicField$2"),Ii=__name((e,t,a)=>t.has(e)||xi("Cannot "+a),"__accessCheck$2"),Oi=__name((e,t)=>Object(t)!==t?xi('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$2"),Pi=__name((e,t,a)=>(Ii(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet$2"),Di=__name((e,t,a)=>t.has(e)?xi("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd$2"),Ui=__name((e,t,a,r)=>(Ii(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet$2"),Mi=__name((e,t,a)=>(Ii(e,t,"access private method"),a),"__privateMethod$2");const Fi=getLiteralName(O.GT_STATEMENT_SEPARATOR),zi=[ii.ArrowUp,ii.ArrowDown,ii.ArrowLeft,ii.ArrowRight];pi=[i("gtn-sandbox")];class GtnSandbox extends(hi=n,di=[l()],li=[l()],ci=[l()],si=[l()],oi=[l()],hi){static{__name(this,"GtnSandbox")}constructor(){super(),Ai(this,"interpreter"),Ai(this,"langService"),Ai(this,"unsubscribeUiLang",null),Di(this,gi,Ri(ui,8,this,50)),Ri(ui,11,this),Di(this,_i,Ri(ui,12,this,90)),Ri(ui,15,this),Di(this,bi,Ri(ui,16,this,[])),Ri(ui,19,this),Di(this,mi,Ri(ui,20,this,0)),Ri(ui,23,this),Di(this,vi,Ri(ui,24,this,$r)),Ri(ui,27,this),Ai(this,"handleConsoleLogLanguageChange",async()=>{await this.retranslateLogs()}),Ai(this,"retranslateLogs",async()=>{if(0===this.consoleLogs.length)return;const e=g(this.langService.getUiLanguage()),t=await Promise.all(this.consoleLogs.map(async([t,a,r])=>[t,a,await this.langService.localizeScript(a,e)]));this.consoleLogs=t}),Ai(this,"handleKeyDown",e=>{if(!this.isKeyboardActive)return;const t=e.code;switch(zi.includes(t)&&e.preventDefault(),t){case ii.ArrowUp:case ii.KeyUp:return this.doHandleMove(O.GT_FORWARD);case ii.ArrowDown:case ii.KeyDown:return this.doHandleMove(O.GT_BACKWARD);case ii.ArrowLeft:case ii.KeyLeft:return this.doHandleMove(O.GT_TURN_LEFT);case ii.ArrowRight:case ii.KeyRight:return this.doHandleMove(O.GT_TURN_RIGHT);case ii.Backspace:case ii.Delete:return this.handleClear();case ii.Escape:return this.handleReset()}});const e=d.getInstance();this.interpreter=e.resolve(h.Interpreter),this.langService=e.resolve(h.LanguageService)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.handleKeyDown),this.unsubscribeUiLang=this.langService.subscribeUiListeners(()=>{this.handleConsoleLogLanguageChange(),this.requestUpdate()})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.handleKeyDown),this.unsubscribeUiLang&&(this.unsubscribeUiLang(),this.unsubscribeUiLang=null)}async execute(e){try{const t=(new Date).toLocaleTimeString().split(" ")[0]??"",a=g(this.langService.getUiLanguage()),r=await this.langService.localizeScript(e,a);this.consoleLogs=[[t,e,r],...this.consoleLogs],await this.interpreter.canonicalExecute(e)}catch(t){console.error(t)}}handleMove(e){const{action:t}=e.detail;this.doHandleMove(t)}doHandleMove(e){let t;switch(e){case O.GT_FORWARD:case O.GT_BACKWARD:t=`${O[e]} ${this.step}`+Fi;break;case O.GT_TURN_LEFT:t=`${O[e]} ${this.angle}`+Fi,this.currentHeading=(this.currentHeading-this.angle+360)%360;break;case O.GT_TURN_RIGHT:t=`${O[e]} ${this.angle}`+Fi,this.currentHeading=(this.currentHeading+this.angle)%360;break;default:return}this.execute(t)}handleHeadingChange(e){const t=this.currentHeading,a=e.detail.heading;this.currentHeading=a;const r=a-t;this.execute(`${O[O.GT_TURN_RIGHT]} ${r}`+Fi)}handleSettingChange(e){const{type:t,value:a}=e.detail;"step"===t&&(this.step=a),"angle"===t&&(this.angle=a)}handleColorChange(e){const t=e.detail.color;this.execute(`${O[O.GT_PEN_COLOR]} "${t}"`+Fi)}handleCommand(e){const{action:t,value:a}=e.detail;if(![O.GT_FORWARD,O.GT_BACKWARD,O.GT_TURN_LEFT,O.GT_TURN_RIGHT,O.GT_PEN_UP,O.GT_PEN_DOWN,O.GT_SHOW_TURTLE,O.GT_HIDE_TURTLE].includes(t))return;const r=`${O[t]} ${a||""}`+Fi;this.execute(r)}handleReset(){const e=O[O.GT_CLEAR_GRAPHICS]+Fi+O[O.GT_RESET]+Fi;this.execute(e),this.currentHeading=0}handleClear(){const e=O[O.GT_CLEAR_GRAPHICS]+Fi;this.execute(e)}handleKeyboardStatus(e){this.isKeyboardActive=e.detail.value}render(){const e=__name(e=>this.langService.translate(e),"t");return r`
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
              ${0===this.consoleLogs.length?r`<span class="empty">${e("sandbox.history_empty")}</span>`:this.consoleLogs.map(e=>r`<div class="log-line">[${e[0]}] ${e[2]}</div>`)}
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
    `}}ui=Si(hi),gi=new WeakMap,_i=new WeakMap,bi=new WeakMap,mi=new WeakMap,vi=new WeakMap,Ni(ui,4,"step",di,GtnSandbox,gi),Ni(ui,4,"angle",li,GtnSandbox,_i),Ni(ui,4,"consoleLogs",ci,GtnSandbox,bi),Ni(ui,4,"currentHeading",si,GtnSandbox,mi),Ni(ui,4,"isKeyboardActive",oi,GtnSandbox,vi),GtnSandbox=Ni(ui,0,"GtnSandbox",pi,GtnSandbox),Ai(GtnSandbox,"styles",[D,t`
      ${a(":host{display:block;font-family:var(--font-ui);background:#adff2f;width:100%;height:100%;overflow:hidden}.sandbox-container{display:flex;flex-direction:row;width:100%;height:100%;background:#f8f9fa;gap:1rem;padding:1rem;box-sizing:border-box}.side-panel{width:250px;display:flex;flex-direction:column;gap:1rem;overflow-y:auto}.center-panel{display:flex;flex:1;min-width:0;flex-direction:column;gap:1rem;overflow:hidden;overflow-y:auto}.left-panel{flex:0 0 250px}.right-panel{width:300px;flex:0 0 300px}.canvas-area{flex:1;position:relative;overflow:hidden;background-color:#e0e5ec;box-shadow:inset 0 0 10px #0000000d}.panel-section{margin-bottom:1.5rem;background:#fff;padding:.75rem;border-radius:8px;box-shadow:0 1px 3px #0000001a;border:1px solid #e9ecef;color:#212529}.panel-section h3{margin:0 0 .8rem;font-size:.85rem;text-transform:uppercase;letter-spacing:.5px;color:#888;border-bottom:1px solid #eee;padding-bottom:4px}.console-output{background:#212529;color:#51cf66;font-family:var(--font-code);padding:8px;height:120px;overflow-y:auto;border-radius:4px;font-size:.8rem;display:flex;flex-direction:column}.log-line{border-bottom:1px solid #343a40;padding:2px 0;white-space:nowrap}.empty{color:#868e96;font-style:italic}.console-output::-webkit-scrollbar{width:6px}.console-output::-webkit-scrollbar-track{background:#212529}.console-output::-webkit-scrollbar-thumb{background:#495057;border-radius:3px}@media(max-width:800px){.sandbox-container{flex-direction:column}aside{width:100%;height:auto;max-height:150px;flex-direction:row;gap:20px;padding:10px;border:none;border-top:1px solid #ccc}.right-panel{order:3}.canvas-area{order:1;flex:1}}")}
    `]),Ri(ui,1,GtnSandbox);var ji,Wi,Hi,Ki=Object.create,Bi=Object.defineProperty,qi=Object.getOwnPropertyDescriptor,Vi=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$2"),Zi=__name(e=>{throw TypeError(e)},"__typeError$2"),Qi=__name((e,t,a)=>t in e?Bi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$2"),Yi=__name((e,t)=>Bi(e,"name",{value:t,configurable:!0}),"__name$2"),Xi=__name(e=>[,,,Ki(e?.[Vi("metadata")]??null)],"__decoratorStart$2"),Ji=["class","method","getter","setter","accessor","field","value","get","set"],eo=__name(e=>void 0!==e&&"function"!=typeof e?Zi("Function expected"):e,"__expectFn$2"),to=__name((e,t,a,r,n)=>({kind:Ji[e],name:t,metadata:r,addInitializer:__name(e=>a._?Zi("Already initialized"):n.push(eo(e||null)),"addInitializer")}),"__decoratorContext$2"),ao=__name((e,t)=>Qi(t,Vi("metadata"),e[3]),"__decoratorMetadata$2"),ro=__name((e,t,a,r)=>{for(var n=0,i=e[t>>1],o=i&&i.length;n<o;n++)i[n].call(a);return r},"__runInitializers$2"),no=__name((e,t,a,r,n,i)=>{var o,s,c,l=7&t,d=e[0]||(e[0]=[]),h=l&&(n=n.prototype,l<5&&(l>3||!0)&&qi(n,a));Yi(n,a);for(var p=r.length-1;p>=0;p--)c=to(l,a,s={},e[3],d),o=(0,r[p])(n,c),s._=1,eo(o)&&(n=o);return ao(e,n),h&&Bi(n,a,h),n},"__decorateElement$2");ji=[i("gtn-workbench")];class GTNWorkbench extends(Hi=n){static{__name(this,"GTNWorkbench")}static styles=[D,t`
      ${a(":host{display:block;width:100%;height:100%;overflow:hidden}.workbench-layout{display:grid;grid-template-columns:300px 1fr 300px;height:100%;width:100%;overflow:hidden}.sidebar{display:flex;flex-direction:column;height:100%;background:var(--gtn-panel-bg, #fcfcfc)}.left-sidebar{border-right:1px solid var(--gtn-border-color, #e0e0e0)}.right-sidebar{border-left:1px solid var(--gtn-border-color, #e0e0e0)}.editor-area,.procedures-area{flex:1;overflow:hidden;display:flex;flex-direction:column}.toast-area{flex-shrink:0}::slotted(*){width:100%;height:100%}.main-content{position:relative;height:100%;width:100%;overflow:hidden;background:var(--gtn-canvas-bg, #ffffff)}@media(max-width:800px){.workbench-layout{flex-direction:column}.sidebar{width:100%;max-width:none;flex:1;border-right:none;border-bottom:1px solid #bdc3c7}.main-content{flex:1}}")}
    `];langService;constructor(){super();const e=d.getInstance();this.langService=e.resolve(h.LanguageService)}render(){return r`
      <div class="workbench-layout">
        <h2 class="sr-only">${__name(e=>this.langService.translate(e),"t")("mode.workbench")}</h2>
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
    `}}ro(Wi=Xi(Hi),1,GTNWorkbench=no(Wi,0,"GTNWorkbench",ji,GTNWorkbench));var io,oo,so,co,lo,ho,po,uo=Object.create,go=Object.defineProperty,_o=Object.getOwnPropertyDescriptor,bo=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$1"),mo=__name(e=>{throw TypeError(e)},"__typeError$1"),vo=__name((e,t,a)=>t in e?go(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$1"),To=__name((e,t)=>go(e,"name",{value:t,configurable:!0}),"__name$1"),fo=__name(e=>[,,,uo(e?.[bo("metadata")]??null)],"__decoratorStart$1"),yo=["class","method","getter","setter","accessor","field","value","get","set"],Go=__name(e=>void 0!==e&&"function"!=typeof e?mo("Function expected"):e,"__expectFn$1"),xo=__name((e,t,a,r,n)=>({kind:yo[e],name:t,metadata:r,addInitializer:__name(e=>a._?mo("Already initialized"):n.push(Go(e||null)),"addInitializer")}),"__decoratorContext$1"),Co=__name((e,t)=>vo(t,bo("metadata"),e[3]),"__decoratorMetadata$1"),wo=__name((e,t,a,r)=>{for(var n=0,i=e[t>>1],o=i&&i.length;n<o;n++)1&t?i[n].call(a):r=i[n].call(a,r);return r},"__runInitializers$1"),So=__name((e,t,a,r,n,i)=>{var o,s,c,l,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,_=yo[h+5],b=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(n=n.prototype),h<5&&(h>3||!u)&&_o(h<4?n:{get[a](){return ko(this,i)},set[a](e){return No(this,i,e)}},a));h?u&&h<4&&To(i,(h>2?"set ":h>1?"get ":"")+a):To(n,a);for(var T=r.length-1;T>=0;T--)l=xo(h,a,c={},e[3],m),h&&(l.static=p,l.private=u,d=l.access={has:u?e=>Lo(n,e):e=>a in e},3^h&&(d.get=u?e=>(1^h?ko:Ao)(e,n,4^h?i:v.get):e=>e[a]),h>2&&(d.set=u?(e,t)=>No(e,n,t,4^h?i:v.set):(e,t)=>e[a]=t)),s=(0,r[T])(h?h<4?u?i:v[_]:h>4?void 0:{get:v.get,set:v.set}:n,l),c._=1,4^h||void 0===s?Go(s)&&(h>4?b.unshift(s):h?u?i=s:v[_]=s:n=s):"object"!=typeof s||null===s?mo("Object expected"):(Go(o=s.get)&&(v.get=o),Go(o=s.set)&&(v.set=o),Go(o=s.init)&&b.unshift(o));return h||Co(e,n),v&&go(n,a,v),u?4^h?i:v:n},"__decorateElement$1"),Eo=__name((e,t,a)=>vo(e,"symbol"!=typeof t?t+"":t,a),"__publicField$1"),$o=__name((e,t,a)=>t.has(e)||mo("Cannot "+a),"__accessCheck$1"),Lo=__name((e,t)=>Object(t)!==t?mo('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$1"),ko=__name((e,t,a)=>($o(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet$1"),Ro=__name((e,t,a)=>t.has(e)?mo("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd$1"),No=__name((e,t,a,r)=>($o(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet$1"),Ao=__name((e,t,a)=>($o(e,t,"access private method"),a),"__privateMethod$1");co=[i("gtn-procedures-panel")];class GTNProceduresPanel extends(so=n,oo=[o({type:String})],io=[s(".editor-container")],so){static{__name(this,"GTNProceduresPanel")}constructor(){super(),Ro(this,ho,wo(lo,8,this)),wo(lo,11,this),Ro(this,po,wo(lo,12,this)),wo(lo,15,this),Eo(this,"editorView"),Eo(this,"langService"),Eo(this,"languageCompartment",new A),Eo(this,"syntaxService");const e=d.getInstance();this.langService=e.resolve(h.LanguageService),this.syntaxService=e.resolve(h.SyntaxService),this.code=""}firstUpdated(){this.initEditor()}disconnectedCallback(){super.disconnectedCallback(),this.editorView?.destroy()}initEditor(){if(!this.editorContainer)return;const e=createAntlrHighlighter(this.syntaxService,this.langService),t=E.create({doc:this.code,extensions:[$,k.of([R]),L,Te,e,this.languageCompartment.of([e]),S.updateListener.of(e=>{if(!e.docChanged)return;const t=e.state.doc.toString();this.code=t,this.onEditorChange(t)})]});this.editorView=new S({state:t,parent:this.editorContainer}),this.updateLanguageFeatures()}onEditorChange(e){this.dispatchEvent(new CustomEvent("procedures-change",{detail:{code:e},bubbles:!0,composed:!0}))}updated(e){super.updated(e),this.updateLanguageFeatures(),this.translateCodeInEditor(e)}translateCodeInEditor(e){if(!e.has("code")||!this.editorView)return;const t=this.editorView.state.doc.toString();t!==this.code&&this.editorView.dispatch({changes:{from:0,to:t.length,insert:this.code}})}updateLanguageFeatures(){if(!this.editorView)return;const e=this.langService.getAllKeywords(),t=N({override:[t=>{const a=t.matchBefore(/\w*/);return!a||a.from===a.to&&!t.explicit?null:{from:a.from,options:e.map(e=>({label:e,type:"keyword"}))}}]});this.editorView.dispatch({effects:this.languageCompartment.reconfigure([t,createAntlrHighlighter(this.syntaxService,this.langService)])})}render(){return r`
      <div class="header">
        <span>${__name(e=>this.langService.translate(e),"t")("workbench.procedures.title")}</span>
      </div>
      <div class="editor-container"></div>
    `}}lo=fo(so),ho=new WeakMap,po=new WeakMap,So(lo,4,"code",oo,GTNProceduresPanel,ho),So(lo,4,"editorContainer",io,GTNProceduresPanel,po),GTNProceduresPanel=So(lo,0,"GTNProceduresPanel",co,GTNProceduresPanel),Eo(GTNProceduresPanel,"styles",t`
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
  `),wo(lo,1,GTNProceduresPanel);var Io,Oo,Po,Do,Uo,Mo,Fo,zo,jo,Wo,Ho,Ko,Bo,qo=Object.create,Vo=Object.defineProperty,Zo=Object.getOwnPropertyDescriptor,Qo=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol"),Yo=__name(e=>{throw TypeError(e)},"__typeError"),Xo=__name((e,t,a)=>t in e?Vo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp"),Jo=__name((e,t)=>Vo(e,"name",{value:t,configurable:!0}),"__name"),es=__name(e=>[,,,qo(e?.[Qo("metadata")]??null)],"__decoratorStart"),ts=["class","method","getter","setter","accessor","field","value","get","set"],as=__name(e=>void 0!==e&&"function"!=typeof e?Yo("Function expected"):e,"__expectFn"),rs=__name((e,t,a,r,n)=>({kind:ts[e],name:t,metadata:r,addInitializer:__name(e=>a._?Yo("Already initialized"):n.push(as(e||null)),"addInitializer")}),"__decoratorContext"),ns=__name((e,t)=>Xo(t,Qo("metadata"),e[3]),"__decoratorMetadata"),is=__name((e,t,a,r)=>{for(var n=0,i=e[t>>1],o=i&&i.length;n<o;n++)1&t?i[n].call(a):r=i[n].call(a,r);return r},"__runInitializers"),os=__name((e,t,a,r,n,i)=>{var o,s,c,l,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,_=ts[h+5],b=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(n=n.prototype),h<5&&(h>3||!u)&&Zo(h<4?n:{get[a](){return ds(this,i)},set[a](e){return ps(this,i,e)}},a));h?u&&h<4&&Jo(i,(h>2?"set ":h>1?"get ":"")+a):Jo(n,a);for(var T=r.length-1;T>=0;T--)l=rs(h,a,c={},e[3],m),h&&(l.static=p,l.private=u,d=l.access={has:u?e=>ls(n,e):e=>a in e},3^h&&(d.get=u?e=>(1^h?ds:us)(e,n,4^h?i:v.get):e=>e[a]),h>2&&(d.set=u?(e,t)=>ps(e,n,t,4^h?i:v.set):(e,t)=>e[a]=t)),s=(0,r[T])(h?h<4?u?i:v[_]:h>4?void 0:{get:v.get,set:v.set}:n,l),c._=1,4^h||void 0===s?as(s)&&(h>4?b.unshift(s):h?u?i=s:v[_]=s:n=s):"object"!=typeof s||null===s?Yo("Object expected"):(as(o=s.get)&&(v.get=o),as(o=s.set)&&(v.set=o),as(o=s.init)&&b.unshift(o));return h||ns(e,n),v&&Vo(n,a,v),u?4^h?i:v:n},"__decorateElement"),ss=__name((e,t,a)=>Xo(e,"symbol"!=typeof t?t+"":t,a),"__publicField"),cs=__name((e,t,a)=>t.has(e)||Yo("Cannot "+a),"__accessCheck"),ls=__name((e,t)=>Object(t)!==t?Yo('Cannot use the "in" operator on this value'):e.has(t),"__privateIn"),ds=__name((e,t,a)=>(cs(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet"),hs=__name((e,t,a)=>t.has(e)?Yo("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd"),ps=__name((e,t,a,r)=>(cs(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet"),us=__name((e,t,a)=>(cs(e,t,"access private method"),a),"__privateMethod");const gs={fr:'\ncrayon rouge;\npas := 36;\nrot := 360 / pas;\nrep 36 [\n  av rot;\n  td rot;\n]\ncrayon "vert"\npetitcarre\n',en:"\ncolor red;\nstep := 36;\nrot := 360 / pas;\nrepeat 36 [\n  fd rot;\n  rt rot;\n]\ncolor green\nlittlesquare\n"},_s={fr:"pour petitcarre\n  rep 4 [\n    av 50\n    td 90\n  ]\nfin",en:"def littlesquare\n  repeat 4 [\n    fd 50\n    rt 90\n  ]\nend"};Fo=[i("gtn-app")];class GTNApp extends(Mo=n,Uo=[l()],Do=[l()],Po=[l()],Oo=[l()],Io=[l()],Mo){static{__name(this,"GTNApp")}constructor(){super(),hs(this,jo,is(zo,8,this,"")),is(zo,11,this),hs(this,Wo,is(zo,12,this,"")),is(zo,15,this),hs(this,Ho,is(zo,16,this,[])),is(zo,19,this),hs(this,Ko,is(zo,20,this,"SANDBOX")),is(zo,23,this),hs(this,Bo,is(zo,24,this,[])),is(zo,27,this),ss(this,"interpreter"),ss(this,"langService"),ss(this,"turtleRepo"),ss(this,"projectService"),ss(this,"syntaxService"),ss(this,"uiUnsubscribe");const e=d.getInstance();this.interpreter=e.resolve(h.Interpreter),this.langService=e.resolve(h.LanguageService),this.turtleRepo=e.resolve(h.TurtleRepository),this.projectService=e.resolve(h.ProjectService),this.syntaxService=e.resolve(h.SyntaxService);const t=this.langService.getDslLanguage(),a=gs[t]||"",r=_s[t]||"";this.code=a,this.proceduresCode=r}connectedCallback(){super.connectedCallback(),this.uiUnsubscribe=this.langService.subscribeUiListeners(this.handleLanguageChange.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.uiUnsubscribe&&this.uiUnsubscribe()}firstUpdated(){super.firstUpdated(new Map),this.initializeLanguageAndProcedures()}async initializeLanguageAndProcedures(){try{await this.langService.initialize(),this.userProcedures=this.syntaxService.extractProcedures(this.proceduresCode),this.validateCombinedCode(),this.requestUpdate()}catch(e){console.error("Failed to initialize DSL resources:",e)}}handleLanguageChange(e){this.validateCombinedCode()}handleCodeChange(e){this.code=e.detail.code,this.validateCombinedCode()}handleProceduresChange(e){this.proceduresCode=e.detail.code,this.userProcedures=this.syntaxService.extractProcedures(this.proceduresCode),this.validateCombinedCode()}validateCombinedCode(){const e=`${this.proceduresCode}\n${this.code}`;this.errors=this.syntaxService.validate(e)}handleViewChange(e){this.viewMode=e.detail.view}async handleRun(){if(this.validateCombinedCode(),this.errors.length>0)console.warn("Cannot run code with syntax errors: ",this.errors);else try{await this.interpreter.execute(this.code,this.proceduresCode)}catch(e){console.error("[GéoTortue NG] Execution error:",e),alert("Error executing GéoTortue commands")}}handleClear(){this.turtleRepo.clear();const e=d.getInstance(),t=e.resolve(h.GeometryService),a=e.resolve(h.TurtleRepository).getNextId();e.resolve(h.ProcedureRegistry).clear();const r=new G(a,t);this.turtleRepo.save(r)}async handleSaveProject(){try{await this.projectService.saveProject({code:this.code,procedures:[this.proceduresCode]}),alert("Project saved!")}catch(e){console.error(e),alert("Failed to save project")}}async handleOpenProject(){try{const{code:e,procedures:t}=await this.projectService.loadProject();e&&(this.code=e,this.proceduresCode=t?.[0]??""),alert("Project loaded!")}catch(e){console.error(e)}}async handleDslChange(e){const{oldLang:t,newLang:a}=e.detail;try{const e=await this.langService.translateScript(this.code,t,a);this.code=e;const r=await this.langService.translateScript(this.proceduresCode,t,a);this.proceduresCode=r}catch(r){console.error("Failed to translate DSL:",r)}}render(){return r`
      <header class="header">
        <h1 class="sr-only">${__name(e=>this.langService.translate(e),"t")("app.title")}</h1>
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
        ${"EDITOR"===this.viewMode?r`
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
            `:r`
              <gtn-sandbox>
                <gtn-canvas></gtn-canvas>
              </gtn-sandbox>
            `}
      </main>

      ${""}
    `}}zo=es(Mo),jo=new WeakMap,Wo=new WeakMap,Ho=new WeakMap,Ko=new WeakMap,Bo=new WeakMap,os(zo,4,"code",Uo,GTNApp,jo),os(zo,4,"proceduresCode",Do,GTNApp,Wo),os(zo,4,"errors",Po,GTNApp,Ho),os(zo,4,"viewMode",Oo,GTNApp,Ko),os(zo,4,"userProcedures",Io,GTNApp,Bo),GTNApp=os(zo,0,"GTNApp",Fo,GTNApp),ss(GTNApp,"styles",[D,t`
      ${a(":host{display:flex;flex-direction:column;height:100vh;width:100vw;overflow:hidden;background-color:#ecf0f1}.header{flex:0 0 auto;position:relative;z-index:1000}main{flex:1;display:block;overflow:hidden;position:relative;z-index:1}@media(max-width:800px){:host{display:flex}}gtn-workbench,gtn-sandbox{display:block;height:100%;width:100%}")}
    `]),is(zo,1,GTNApp);export{GTNApp};
//# sourceMappingURL=gtn-app-CzmcBl09.js.map
