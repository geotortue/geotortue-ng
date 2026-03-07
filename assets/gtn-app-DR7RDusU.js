var e=Object.defineProperty,__name=(t,a)=>e(t,"name",{value:a,configurable:!0});import{w as t,x as a,y as r,z as n,A as o,G as i,H as s,J as c,K as l}from"./vendor-CL6rGXZr.js";import{G as d,a as h,t as p,D as u,b as g,c as _,d as b,e as m,f as v,g as T,T as f,h as y,i as G,N as x,j as C}from"./index-CdLXtZ8d.js";import{D as w,V as S,R as E,E as $,a as L,b as R,o as k,k as A,i as N,c as O,C as I}from"./vendor-cm-DF5fFDHi.js";import{g as P}from"./vendor-antlr-DgrtpJlV.js";import"./vendor-math-lvIOcdGD.js";import"./vendor-three-DQZ8GlD2.js";var D=(e=>(e[e.GT_FORWARD=1]="GT_FORWARD",e[e.GT_BACKWARD=2]="GT_BACKWARD",e[e.GT_TURN_RIGHT=3]="GT_TURN_RIGHT",e[e.GT_TURN_LEFT=4]="GT_TURN_LEFT",e[e.GT_CLEAR_GRAPHICS=5]="GT_CLEAR_GRAPHICS",e[e.GT_RESET=6]="GT_RESET",e[e.GT_UNDO_DRAWING=7]="GT_UNDO_DRAWING",e[e.GT_HIDE_TURTLE=8]="GT_HIDE_TURTLE",e[e.GT_SHOW_TURTLE=9]="GT_SHOW_TURTLE",e[e.GT_PEN_UP=10]="GT_PEN_UP",e[e.GT_PEN_DOWN=11]="GT_PEN_DOWN",e[e.GT_PEN_COLOR=12]="GT_PEN_COLOR",e[e.GT_PEN_THICKNESS=13]="GT_PEN_THICKNESS",e[e.GT_DRAW_POINT=14]="GT_DRAW_POINT",e[e.GT_MIRROR=15]="GT_MIRROR",e[e.GT_TELEPORT=16]="GT_TELEPORT",e[e.GT_COMPASS=17]="GT_COMPASS",e[e.GT_AIM=18]="GT_AIM",e[e.GT_MIMIC=19]="GT_MIMIC",e[e.GT_ROTATE_RIGHT=20]="GT_ROTATE_RIGHT",e[e.GT_ROTATE_LEFT=21]="GT_ROTATE_LEFT",e[e.GT_ROTATE_UP=22]="GT_ROTATE_UP",e[e.GT_ROTATE_DOWN=23]="GT_ROTATE_DOWN",e[e.GT_ROTATE_XY=24]="GT_ROTATE_XY",e[e.GT_ROTATE_XZ=25]="GT_ROTATE_XZ",e[e.GT_ROTATE_YZ=26]="GT_ROTATE_YZ",e[e.GT_DRAW_CIRCLE=27]="GT_DRAW_CIRCLE",e[e.GT_DRAW_ARC=28]="GT_DRAW_ARC",e[e.GT_PLAY=29]="GT_PLAY",e[e.GT_SCORE=30]="GT_SCORE",e[e.GT_CONCERT=31]="GT_CONCERT",e[e.GT_FILL=32]="GT_FILL",e[e.GT_WRITE=33]="GT_WRITE",e[e.GT_SAY=34]="GT_SAY",e[e.GT_INIT=35]="GT_INIT",e[e.GT_WAIT=36]="GT_WAIT",e[e.GT_PAUSE=37]="GT_PAUSE",e[e.GT_STOP=38]="GT_STOP",e[e.GT_RETURN=39]="GT_RETURN",e[e.GT_MANIPULATE_GRAPH=40]="GT_MANIPULATE_GRAPH",e[e.GT_SNAPSHOT=41]="GT_SNAPSHOT",e[e.GT_EXECUTE=42]="GT_EXECUTE",e[e.GT_DELETE=43]="GT_DELETE",e[e.GT_GLOBAL=44]="GT_GLOBAL",e[e.GT_DISPLAY=45]="GT_DISPLAY",e[e.GT_WRAP=46]="GT_WRAP",e[e.GT_WINDOW=47]="GT_WINDOW",e[e.GT_FENCE=48]="GT_FENCE",e[e.GT_REPEAT=49]="GT_REPEAT",e[e.GT_WHILE=50]="GT_WHILE",e[e.GT_FOR_EACH=51]="GT_FOR_EACH",e[e.GT_FROM=52]="GT_FROM",e[e.GT_TO=53]="GT_TO",e[e.GT_IN_LIST=54]="GT_IN_LIST",e[e.GT_IF=55]="GT_IF",e[e.GT_THEN=56]="GT_THEN",e[e.GT_ELSE=57]="GT_ELSE",e[e.GT_SELECT=58]="GT_SELECT",e[e.GT_FUNCTION_DEF=59]="GT_FUNCTION_DEF",e[e.GT_ASK_FOR_VALUE=60]="GT_ASK_FOR_VALUE",e[e.GT_PROCEDURE_START=61]="GT_PROCEDURE_START",e[e.GT_PROCEDURE_END=62]="GT_PROCEDURE_END",e[e.GT_IDENTIFIER=63]="GT_IDENTIFIER",e[e.GT_WORD=64]="GT_WORD",e[e.GT_INTEGER_LITERAL=65]="GT_INTEGER_LITERAL",e[e.GT_FLOATING_POINT_LITERAL=66]="GT_FLOATING_POINT_LITERAL",e[e.GT_STRING_LITERAL=67]="GT_STRING_LITERAL",e[e.GT_STATEMENT_SEPARATOR=68]="GT_STATEMENT_SEPARATOR",e[e.GT_ASSIGN=69]="GT_ASSIGN",e[e.GT_COMMA=70]="GT_COMMA",e[e.GT_LEFT_SQUARE_BRACKET=71]="GT_LEFT_SQUARE_BRACKET",e[e.GT_RIGHT_SQUARE_BRACKET=72]="GT_RIGHT_SQUARE_BRACKET",e[e.GT_LEFT_PARENTHESIS=73]="GT_LEFT_PARENTHESIS",e[e.GT_RIGHT_PARENTHESIS=74]="GT_RIGHT_PARENTHESIS",e[e.GT_COLON=75]="GT_COLON",e[e.GT_GREATER_THAN=76]="GT_GREATER_THAN",e[e.GT_LESS_THAN=77]="GT_LESS_THAN",e[e.GT_EQUAL=78]="GT_EQUAL",e[e.GT_LESS_OR_EQUAL=79]="GT_LESS_OR_EQUAL",e[e.GT_GREATER_OR_EQUAL=80]="GT_GREATER_OR_EQUAL",e[e.GT_NOT_EQUAL=81]="GT_NOT_EQUAL",e[e.GT_LOGICAL_AND=82]="GT_LOGICAL_AND",e[e.GT_LOGICAL_OR=83]="GT_LOGICAL_OR",e[e.GT_PLUS=84]="GT_PLUS",e[e.GT_MINUS=85]="GT_MINUS",e[e.GT_MULTIPLY=86]="GT_MULTIPLY",e[e.GT_DOT=87]="GT_DOT",e[e.GT_DIVIDE=88]="GT_DIVIDE",e[e.GT_MODULO=89]="GT_MODULO",e[e.GT_LOGICAL_NOT=90]="GT_LOGICAL_NOT",e[e.GT_POWER=91]="GT_POWER",e[e.GT_CROSS_PRODUCT=92]="GT_CROSS_PRODUCT",e[e.GT_NEW_LINE=93]="GT_NEW_LINE",e[e.GT_HORIZONTAL_WHITESPACE=94]="GT_HORIZONTAL_WHITESPACE",e[e.GT_LINE_COMMENT_HASH=95]="GT_LINE_COMMENT_HASH",e[e.GT_LINE_COMMENT_SLASH=96]="GT_LINE_COMMENT_SLASH",e[e.GT_BLOCK_COMMENT=97]="GT_BLOCK_COMMENT",e))(D||{});const M={1:"GT_FORWARD",2:"GT_BACKWARD",3:"GT_TURN_RIGHT",4:"GT_TURN_LEFT",5:"GT_CLEAR_GRAPHICS",6:"GT_RESET",7:"GT_UNDO_DRAWING",8:"GT_HIDE_TURTLE",9:"GT_SHOW_TURTLE",10:"GT_PEN_UP",11:"GT_PEN_DOWN",12:"GT_PEN_COLOR",13:"GT_PEN_THICKNESS",14:"GT_DRAW_POINT",15:"GT_MIRROR",16:"GT_TELEPORT",17:"GT_COMPASS",18:"GT_AIM",19:"GT_MIMIC",20:"GT_ROTATE_RIGHT",21:"GT_ROTATE_LEFT",22:"GT_ROTATE_UP",23:"GT_ROTATE_DOWN",24:"GT_ROTATE_XY",25:"GT_ROTATE_XZ",26:"GT_ROTATE_YZ",27:"GT_DRAW_CIRCLE",28:"GT_DRAW_ARC",29:"GT_PLAY",30:"GT_SCORE",31:"GT_CONCERT",32:"GT_FILL",33:"GT_WRITE",34:"GT_SAY",35:"GT_INIT",36:"GT_WAIT",37:"GT_PAUSE",38:"GT_STOP",39:"GT_RETURN",40:"GT_MANIPULATE_GRAPH",41:"GT_SNAPSHOT",42:"GT_EXECUTE",43:"GT_DELETE",44:"GT_GLOBAL",45:"GT_DISPLAY",46:"GT_WRAP",47:"GT_WINDOW",48:"GT_FENCE",49:"GT_REPEAT",50:"GT_WHILE",51:"GT_FOR_EACH",52:"GT_FROM",53:"GT_TO",54:"GT_IN_LIST",55:"GT_IF",56:"GT_THEN",57:"GT_ELSE",58:"GT_SELECT",59:"GT_FUNCTION_DEF",60:"GT_ASK_FOR_VALUE",61:"GT_PROCEDURE_START",62:"GT_PROCEDURE_END",68:";",69:":=",70:",",71:"[",72:"]",73:"(",74:")",75:":",76:">",77:"<",78:"=",79:"<=",80:">=",81:"!=",82:"&&",83:"||",84:"+",85:"-",86:"*",87:".",88:"/",89:"%",90:"!",91:"^",92:"^^"};function getLiteralName(e){return M[e]}__name(getLiteralName,"getLiteralName");const U=t`
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
`,F=t`
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
`;class UiLanguageController{static{__name(this,"UiLanguageController")}host;languageService;unsubscribe;constructor(e){this.host=e,this.languageService=d.getInstance().resolve(h.LanguageService),e.addController(this)}hostConnected(){this.unsubscribe=this.languageService.subscribeUiListeners(()=>{this.host.requestUpdate()})}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null)}}var z,W,j,H,K,B,q,V,Z,Q,Y,X,J,ee,te,ae=Object.create,re=Object.defineProperty,ne=Object.getOwnPropertyDescriptor,oe=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$f"),ie=__name(e=>{throw TypeError(e)},"__typeError$f"),se=__name((e,t,a)=>t in e?re(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$f"),ce=__name((e,t)=>re(e,"name",{value:t,configurable:!0}),"__name$f"),le=__name(e=>[,,,ae(e?.[oe("metadata")]??null)],"__decoratorStart$f"),de=["class","method","getter","setter","accessor","field","value","get","set"],he=__name(e=>void 0!==e&&"function"!=typeof e?ie("Function expected"):e,"__expectFn$f"),pe=__name((e,t,a,r,n)=>({kind:de[e],name:t,metadata:r,addInitializer:__name(e=>a._?ie("Already initialized"):n.push(he(e||null)),"addInitializer")}),"__decoratorContext$f"),ue=__name((e,t)=>se(t,oe("metadata"),e[3]),"__decoratorMetadata$f"),ge=__name((e,t,a,r)=>{for(var n=0,o=e[t>>1],i=o&&o.length;n<i;n++)1&t?o[n].call(a):r=o[n].call(a,r);return r},"__runInitializers$f"),_e=__name((e,t,a,r,n,o)=>{var i,s,c,l,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,_=de[h+5],b=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(n=n.prototype),h<5&&(h>3||!u)&&ne(h<4?n:{get[a](){return Te(this,o)},set[a](e){return ye(this,o,e)}},a));h?u&&h<4&&ce(o,(h>2?"set ":h>1?"get ":"")+a):ce(n,a);for(var T=r.length-1;T>=0;T--)l=pe(h,a,c={},e[3],m),h&&(l.static=p,l.private=u,d=l.access={has:u?e=>ve(n,e):e=>a in e},3^h&&(d.get=u?e=>(1^h?Te:Ge)(e,n,4^h?o:v.get):e=>e[a]),h>2&&(d.set=u?(e,t)=>ye(e,n,t,4^h?o:v.set):(e,t)=>e[a]=t)),s=(0,r[T])(h?h<4?u?o:v[_]:h>4?void 0:{get:v.get,set:v.set}:n,l),c._=1,4^h||void 0===s?he(s)&&(h>4?b.unshift(s):h?u?o=s:v[_]=s:n=s):"object"!=typeof s||null===s?ie("Object expected"):(he(i=s.get)&&(v.get=i),he(i=s.set)&&(v.set=i),he(i=s.init)&&b.unshift(i));return h||ue(e,n),v&&re(n,a,v),u?4^h?o:v:n},"__decorateElement$f"),be=__name((e,t,a)=>se(e,"symbol"!=typeof t?t+"":t,a),"__publicField$9"),me=__name((e,t,a)=>t.has(e)||ie("Cannot "+a),"__accessCheck$9"),ve=__name((e,t)=>Object(t)!==t?ie('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$9"),Te=__name((e,t,a)=>(me(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet$9"),fe=__name((e,t,a)=>t.has(e)?ie("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd$9"),ye=__name((e,t,a,r)=>(me(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet$9"),Ge=__name((e,t,a)=>(me(e,t,"access private method"),a),"__privateMethod$9");V=[o("gtn-toolbar")];class GTNToolbar extends(q=n,B=[i({type:String})],K=[i({type:String})],H=[i({type:String})],j=[i({type:String})],W=[i({type:String})],z=[i({type:String})],q){static{__name(this,"GTNToolbar")}constructor(){super(),be(this,"langService"),be(this,"appState"),be(this,"langController",new UiLanguageController(this)),fe(this,Q,ge(Z,8,this,p(u))),ge(Z,11,this),fe(this,Y,ge(Z,12,this,g(u))),ge(Z,15,this),fe(this,X,ge(Z,16,this,b)),ge(Z,19,this),fe(this,J,ge(Z,20,this,m)),ge(Z,23,this),fe(this,ee,ge(Z,24,this,"SANDBOX")),ge(Z,27,this),fe(this,te,ge(Z,28,this,v)),ge(Z,31,this);const e=d.getInstance();this.langService=e.resolve(h.LanguageService),this.appState=e.resolve(h.ApplicationState),this.currentUiLang=this.langService.getUiLanguage(),this.currentDslLang=this.langService.getDslLanguage(),this.appState.subscribe(()=>{this.currentMode=this.appState.mode,this.currentCamera=this.appState.cameraType})}handleRun(){this.dispatchEvent(new CustomEvent("run"))}handleClear(){this.dispatchEvent(new CustomEvent("clear"))}handleSave(){this.dispatchEvent(new CustomEvent("save-project"))}handleOpen(){this.dispatchEvent(new CustomEvent("open-project"))}async handleUiLangChange(e){const t=e.target,a=p(t.value);await this.langService.setUiLanguage(a),this.currentUiLang=a}async handleDslLangChange(e){const t=e.target,a=this.currentDslLang,r=g(t.value);await this.langService.setDslLanguage(r),this.currentDslLang=r,this.dispatchEvent(new CustomEvent("dsl-lang-change",{detail:{oldLang:a,newLang:r},bubbles:!0,composed:!0}))}handleToggleMode(){this.appState.toggleMode()}handleToggleCamera(){this.appState.toggleCameraType()}handleViewChange(e){this.currentView=e,this.dispatchEvent(new CustomEvent("view-change",{detail:{view:e},bubbles:!0,composed:!0}))}handleBoundaryModeChange(e){const t=e.target.value;this.currentBoundaryMode=t,this.dispatchEvent(new CustomEvent("boundary-mode-change",{detail:{mode:t},bubbles:!0,composed:!0}))}render(){const e=__name(e=>this.langService.translate(e),"t");return this.currentUiLang=this.langService.getUiLanguage(),this.currentDslLang=this.langService.getDslLanguage(),r`
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
          <div class="separator"></div>

          <div class="selector-wrapper">
            <label for="select-boundary" class="label">${e("boundary.mode")}</label>
            <select
              id="select-boundary"
              @change=${this.handleBoundaryModeChange}
              .value=${this.currentBoundaryMode}
            >
              ${_.map(t=>r`<option value=${t}>${e(`boundary.${t.toLowerCase()}`)}</option>`)}
            </select>
          </div>
        </div>
      </div>
    `}}function createAntlrHighlighter(e,t){const a=e.getTokenStyleMap(),r=new f(t),n=w.mark({class:"cm-gt-user-procedure"});return S.fromClass(class{decorations;constructor(e){this.decorations=this.buildDecorations(e)}update(e){(e.docChanged||e.viewportChanged)&&(this.decorations=this.buildDecorations(e.view))}buildDecorations(t){const o=new E,i=t.state.doc.toString(),s=new Set(e.getExtractedProcedures().map(e=>e.toLowerCase())),c=P.fromString(i),l=new T(c);l.removeErrorListeners();const d=r.getRefinedTokens(()=>l.getAllTokens());for(const e of d){const t=e.text?.toLowerCase()||"";if(t&&s.has(t)){o.add(e.start,e.stop+1,n);continue}const r=a.get(e.type);r&&o.add(e.start,e.stop+1,w.mark({class:`cm-gt-${r}`}))}return o.finish()}},{decorations:__name(e=>e.decorations,"decorations")})}Z=le(q),Q=new WeakMap,Y=new WeakMap,X=new WeakMap,J=new WeakMap,ee=new WeakMap,te=new WeakMap,_e(Z,4,"currentUiLang",B,GTNToolbar,Q),_e(Z,4,"currentDslLang",K,GTNToolbar,Y),_e(Z,4,"currentMode",H,GTNToolbar,X),_e(Z,4,"currentCamera",j,GTNToolbar,J),_e(Z,4,"currentView",W,GTNToolbar,ee),_e(Z,4,"currentBoundaryMode",z,GTNToolbar,te),GTNToolbar=_e(Z,0,"GTNToolbar",V,GTNToolbar),be(GTNToolbar,"styles",[F,t`
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
    `]),ge(Z,1,GTNToolbar),__name(createAntlrHighlighter,"createAntlrHighlighter");const xe=$.baseTheme({".cm-gt-keyword":{color:"#c678dd",fontWeight:"bold"},".cm-gt-command":{color:"#61afef"},".cm-gt-number":{color:"#d19a66"},".cm-gt-string":{color:"#98c379"},".cm-gt-variable":{color:"#e06c75"},".cm-gt-comment":{color:"#5c6370",fontStyle:"italic"},".cm-gt-operator":{color:"#56b6c2"},".cm-gt-user-procedure":{color:"#c678dd",fontWeight:"bold"}});var Ce,we,Se,Ee,$e,Le,Re,ke=Object.create,Ae=Object.defineProperty,Ne=Object.getOwnPropertyDescriptor,Oe=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$e"),Ie=__name(e=>{throw TypeError(e)},"__typeError$e"),Pe=__name((e,t,a)=>t in e?Ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$e"),De=__name((e,t)=>Ae(e,"name",{value:t,configurable:!0}),"__name$e"),Me=__name(e=>[,,,ke(e?.[Oe("metadata")]??null)],"__decoratorStart$e"),Ue=["class","method","getter","setter","accessor","field","value","get","set"],Fe=__name(e=>void 0!==e&&"function"!=typeof e?Ie("Function expected"):e,"__expectFn$e"),ze=__name((e,t,a,r,n)=>({kind:Ue[e],name:t,metadata:r,addInitializer:__name(e=>a._?Ie("Already initialized"):n.push(Fe(e||null)),"addInitializer")}),"__decoratorContext$e"),We=__name((e,t)=>Pe(t,Oe("metadata"),e[3]),"__decoratorMetadata$e"),je=__name((e,t,a,r)=>{for(var n=0,o=e[t>>1],i=o&&o.length;n<i;n++)1&t?o[n].call(a):r=o[n].call(a,r);return r},"__runInitializers$e"),He=__name((e,t,a,r,n,o)=>{var i,s,c,l,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,_=Ue[h+5],b=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(n=n.prototype),h<5&&(h>3||!u)&&Ne(h<4?n:{get[a](){return Ve(this,o)},set[a](e){return Qe(this,o,e)}},a));h?u&&h<4&&De(o,(h>2?"set ":h>1?"get ":"")+a):De(n,a);for(var T=r.length-1;T>=0;T--)l=ze(h,a,c={},e[3],m),h&&(l.static=p,l.private=u,d=l.access={has:u?e=>qe(n,e):e=>a in e},3^h&&(d.get=u?e=>(1^h?Ve:Ye)(e,n,4^h?o:v.get):e=>e[a]),h>2&&(d.set=u?(e,t)=>Qe(e,n,t,4^h?o:v.set):(e,t)=>e[a]=t)),s=(0,r[T])(h?h<4?u?o:v[_]:h>4?void 0:{get:v.get,set:v.set}:n,l),c._=1,4^h||void 0===s?Fe(s)&&(h>4?b.unshift(s):h?u?o=s:v[_]=s:n=s):"object"!=typeof s||null===s?Ie("Object expected"):(Fe(i=s.get)&&(v.get=i),Fe(i=s.set)&&(v.set=i),Fe(i=s.init)&&b.unshift(i));return h||We(e,n),v&&Ae(n,a,v),u?4^h?o:v:n},"__decorateElement$e"),Ke=__name((e,t,a)=>Pe(e,"symbol"!=typeof t?t+"":t,a),"__publicField$8"),Be=__name((e,t,a)=>t.has(e)||Ie("Cannot "+a),"__accessCheck$8"),qe=__name((e,t)=>Object(t)!==t?Ie('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$8"),Ve=__name((e,t,a)=>(Be(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet$8"),Ze=__name((e,t,a)=>t.has(e)?Ie("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd$8"),Qe=__name((e,t,a,r)=>(Be(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet$8"),Ye=__name((e,t,a)=>(Be(e,t,"access private method"),a),"__privateMethod$8");Ee=[o("gtn-editor")];class GTNEditor extends(Se=n,we=[i({type:String})],Ce=[s("#editor-container")],Se){static{__name(this,"GTNEditor")}constructor(){super(),Ze(this,Le,je($e,8,this)),je($e,11,this),Ze(this,Re,je($e,12,this)),je($e,15,this),Ke(this,"editor"),Ke(this,"langService"),Ke(this,"langController",new UiLanguageController(this)),Ke(this,"languageCompartment",new I),Ke(this,"syntaxService");const e=d.getInstance();this.langService=e.resolve(h.LanguageService),this.syntaxService=e.resolve(h.SyntaxService),this.code=""}firstUpdated(){this.initEditor()}disconnectedCallback(){super.disconnectedCallback(),this.editor?.destroy()}initEditor(){const e=createAntlrHighlighter(this.syntaxService,this.langService),t=L.create({doc:this.code,extensions:[R,A.of([N]),k,xe,e,this.languageCompartment.of([e]),$.updateListener.of(e=>{e.docChanged&&(this.code=e.state.doc.toString(),this.onEditorChange(this.code))})]});this.editor=new $({state:t,parent:this.editorContainer}),this.updateLanguageFeatures()}onEditorChange(e){this.dispatchEvent(new CustomEvent("code-change",{detail:{code:e},bubbles:!0,composed:!0}))}updated(e){super.updated(e),this.updateLanguageFeatures(),this.translateCodeInEditor(e)}translateCodeInEditor(e){if(!e.has("code")||!this.editor)return;const t=this.editor.state.doc.toString();t!==this.code&&this.editor.dispatch({changes:{from:0,to:t.length,insert:this.code}})}updateLanguageFeatures(){if(!this.editor)return;const e=this.langService.getAllKeywords(),t=O({override:[t=>{const a=t.matchBefore(/\w*/);return!a||a.from===a.to&&!t.explicit?null:{from:a.from,options:e.map(e=>({label:e,type:"keyword"}))}}]});this.editor.dispatch({effects:this.languageCompartment.reconfigure([t,createAntlrHighlighter(this.syntaxService,this.langService)])})}render(){return r`<div id="editor-container"></div>`}}$e=Me(Se),Le=new WeakMap,Re=new WeakMap,He($e,4,"code",we,GTNEditor,Le),He($e,4,"editorContainer",Ce,GTNEditor,Re),GTNEditor=He($e,0,"GTNEditor",Ee,GTNEditor),Ke(GTNEditor,"styles",t`
    ${a(":host{display:block;font-family:var(--font-code);height:100%;overflow:hidden;font-size:14px}#editor-container,.cm-editor{height:100%}.cm-editor .cm-scroller{font-family:inherit}")}
  `),je($e,1,GTNEditor);var Xe,Je,et,tt,at,rt=Object.create,nt=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,it=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$d"),st=__name(e=>{throw TypeError(e)},"__typeError$d"),ct=__name((e,t,a)=>t in e?nt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$d"),lt=__name((e,t)=>nt(e,"name",{value:t,configurable:!0}),"__name$d"),dt=__name(e=>[,,,rt(e?.[it("metadata")]??null)],"__decoratorStart$d"),ht=["class","method","getter","setter","accessor","field","value","get","set"],pt=__name(e=>void 0!==e&&"function"!=typeof e?st("Function expected"):e,"__expectFn$d"),ut=__name((e,t,a,r,n)=>({kind:ht[e],name:t,metadata:r,addInitializer:__name(e=>a._?st("Already initialized"):n.push(pt(e||null)),"addInitializer")}),"__decoratorContext$d"),gt=__name((e,t)=>ct(t,it("metadata"),e[3]),"__decoratorMetadata$d"),_t=__name((e,t,a,r)=>{for(var n=0,o=e[t>>1],i=o&&o.length;n<i;n++)1&t?o[n].call(a):r=o[n].call(a,r);return r},"__runInitializers$d"),bt=__name((e,t,a,r,n,o)=>{var i,s,c,l,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,_=ht[h+5],b=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(n=n.prototype),h<5&&(h>3||!u)&&ot(h<4?n:{get[a](){return ft(this,o)},set[a](e){return Gt(this,o,e)}},a));h?u&&h<4&&lt(o,(h>2?"set ":h>1?"get ":"")+a):lt(n,a);for(var T=r.length-1;T>=0;T--)l=ut(h,a,c={},e[3],m),h&&(l.static=p,l.private=u,d=l.access={has:u?e=>Tt(n,e):e=>a in e},3^h&&(d.get=u?e=>(1^h?ft:xt)(e,n,4^h?o:v.get):e=>e[a]),h>2&&(d.set=u?(e,t)=>Gt(e,n,t,4^h?o:v.set):(e,t)=>e[a]=t)),s=(0,r[T])(h?h<4?u?o:v[_]:h>4?void 0:{get:v.get,set:v.set}:n,l),c._=1,4^h||void 0===s?pt(s)&&(h>4?b.unshift(s):h?u?o=s:v[_]=s:n=s):"object"!=typeof s||null===s?st("Object expected"):(pt(i=s.get)&&(v.get=i),pt(i=s.set)&&(v.set=i),pt(i=s.init)&&b.unshift(i));return h||gt(e,n),v&&nt(n,a,v),u?4^h?o:v:n},"__decorateElement$d"),mt=__name((e,t,a)=>ct(e,"symbol"!=typeof t?t+"":t,a),"__publicField$7"),vt=__name((e,t,a)=>t.has(e)||st("Cannot "+a),"__accessCheck$7"),Tt=__name((e,t)=>Object(t)!==t?st('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$7"),ft=__name((e,t,a)=>(vt(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet$7"),yt=__name((e,t,a)=>t.has(e)?st("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd$7"),Gt=__name((e,t,a,r)=>(vt(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet$7"),xt=__name((e,t,a)=>(vt(e,t,"access private method"),a),"__privateMethod$7");et=[o("gtn-canvas")];class GTNCanvas extends(Je=n,Xe=[s("#render-container")],Je){static{__name(this,"GTNCanvas")}constructor(){super(),yt(this,at,_t(tt,8,this)),_t(tt,11,this),mt(this,"turtleRepo"),mt(this,"appState"),mt(this,"renderLoop"),mt(this,"renderer2D"),mt(this,"renderer3D"),mt(this,"currentRenderer",null),mt(this,"unsubscribeLoop",null);const e=d.getInstance();this.turtleRepo=e.resolve(h.TurtleRepository),this.appState=e.resolve(h.ApplicationState),this.renderLoop=e.resolve(h.RenderLoop),this.renderer2D=e.resolve(h.Renderer2D),this.renderer3D=e.resolve(h.Renderer3D)}firstUpdated(){this.syncRenderer(),this.appState.subscribe(()=>{this.syncRenderer()}),window.addEventListener("resize",()=>this.handleResize()),this.unsubscribeLoop=this.renderLoop.subscribe(()=>{this.currentRenderer&&this.currentRenderer.render(this.turtleRepo)}),this.renderLoop.start()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeLoop&&(this.unsubscribeLoop(),this.unsubscribeLoop=null),this.renderLoop.stop(),window.removeEventListener("resize",()=>this.handleResize()),this.currentRenderer&&this.currentRenderer.dispose()}syncRenderer(){const e=this.appState.mode,t=this.appState.cameraType,a="3D"===e;if((a!==this.currentRenderer instanceof y||!this.currentRenderer)&&(this.currentRenderer&&this.currentRenderer.dispose(),this.currentRenderer="3D"===e?new y:new G,this.container)){this.currentRenderer.attach(this.container);const e=this.container.getBoundingClientRect();this.turtleRepo.setViewportSize(e.width,e.height)}a&&this.currentRenderer instanceof y&&this.currentRenderer.setCameraType(t)}handleResize(){if(!this.currentRenderer||!this.container)return;const e=this.container.getBoundingClientRect();this.currentRenderer.resize(e.width,e.height),this.turtleRepo.setViewportSize(e.width,e.height)}render(){return r`<div id="render-container"></div>`}}bt(tt=dt(Je),4,"container",Xe,GTNCanvas,at=new WeakMap),GTNCanvas=bt(tt,0,"GTNCanvas",et,GTNCanvas),mt(GTNCanvas,"styles",t`
    ${a(":host{display:block;width:100%;height:100%;overflow:hidden;background:#f0f0f0}#render-container{width:100%;height:100%}")}
  `),_t(tt,1,GTNCanvas);var Ct,wt,St,Et=Object.create,$t=Object.defineProperty,Lt=Object.getOwnPropertyDescriptor,Rt=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$c"),kt=__name(e=>{throw TypeError(e)},"__typeError$c"),At=__name((e,t,a)=>t in e?$t(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$c"),Nt=__name((e,t)=>$t(e,"name",{value:t,configurable:!0}),"__name$c"),Ot=__name(e=>[,,,Et(e?.[Rt("metadata")]??null)],"__decoratorStart$c"),It=["class","method","getter","setter","accessor","field","value","get","set"],Pt=__name(e=>void 0!==e&&"function"!=typeof e?kt("Function expected"):e,"__expectFn$c"),Dt=__name((e,t,a,r,n)=>({kind:It[e],name:t,metadata:r,addInitializer:__name(e=>a._?kt("Already initialized"):n.push(Pt(e||null)),"addInitializer")}),"__decoratorContext$c"),Mt=__name((e,t)=>At(t,Rt("metadata"),e[3]),"__decoratorMetadata$c"),Ut=__name((e,t,a,r)=>{for(var n=0,o=e[t>>1],i=o&&o.length;n<i;n++)o[n].call(a);return r},"__runInitializers$c"),Ft=__name((e,t,a,r,n,o)=>{var i,s,c,l=7&t,d=e[0]||(e[0]=[]),h=l&&(n=n.prototype,l<5&&(l>3||!0)&&Lt(n,a));Nt(n,a);for(var p=r.length-1;p>=0;p--)c=Dt(l,a,s={},e[3],d),i=(0,r[p])(n,c),s._=1,Pt(i)&&(n=i);return Mt(e,n),h&&$t(n,a,h),n},"__decorateElement$c");Ct=[o("dev-reset-button")];class DevResetButton extends(St=n){static{__name(this,"DevResetButton")}static styles=t`
    ${a("button{background-color:#f44;color:#fff;border:none;padding:8px 16px;border-radius:4px;cursor:pointer;font-weight:700}button:hover{background-color:#c00}")}
  `;resetApp(){localStorage.clear(),sessionStorage.clear(),window.location.reload()}render(){return r` <button @click="${this.resetApp}">Reset Local Data & Reload</button> `}}Ut(wt=Ot(St),1,DevResetButton=Ft(wt,0,"DevResetButton",Ct,DevResetButton));var zt,Wt,jt,Ht,Kt,Bt=Object.create,qt=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,Zt=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$b"),Qt=__name(e=>{throw TypeError(e)},"__typeError$b"),Yt=__name((e,t,a)=>t in e?qt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$b"),Xt=__name((e,t)=>qt(e,"name",{value:t,configurable:!0}),"__name$b"),Jt=__name(e=>[,,,Bt(e?.[Zt("metadata")]??null)],"__decoratorStart$b"),ea=["class","method","getter","setter","accessor","field","value","get","set"],ta=__name(e=>void 0!==e&&"function"!=typeof e?Qt("Function expected"):e,"__expectFn$b"),aa=__name((e,t,a,r,n)=>({kind:ea[e],name:t,metadata:r,addInitializer:__name(e=>a._?Qt("Already initialized"):n.push(ta(e||null)),"addInitializer")}),"__decoratorContext$b"),ra=__name((e,t)=>Yt(t,Zt("metadata"),e[3]),"__decoratorMetadata$b"),na=__name((e,t,a,r)=>{for(var n=0,o=e[t>>1],i=o&&o.length;n<i;n++)1&t?o[n].call(a):r=o[n].call(a,r);return r},"__runInitializers$b"),oa=__name((e,t,a,r,n,o)=>{var i,s,c,l,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,_=ea[h+5],b=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(n=n.prototype),h<5&&(h>3||!u)&&Vt(h<4?n:{get[a](){return la(this,o)},set[a](e){return ha(this,o,e)}},a));h?u&&h<4&&Xt(o,(h>2?"set ":h>1?"get ":"")+a):Xt(n,a);for(var T=r.length-1;T>=0;T--)l=aa(h,a,c={},e[3],m),h&&(l.static=p,l.private=u,d=l.access={has:u?e=>ca(n,e):e=>a in e},3^h&&(d.get=u?e=>(1^h?la:pa)(e,n,4^h?o:v.get):e=>e[a]),h>2&&(d.set=u?(e,t)=>ha(e,n,t,4^h?o:v.set):(e,t)=>e[a]=t)),s=(0,r[T])(h?h<4?u?o:v[_]:h>4?void 0:{get:v.get,set:v.set}:n,l),c._=1,4^h||void 0===s?ta(s)&&(h>4?b.unshift(s):h?u?o=s:v[_]=s:n=s):"object"!=typeof s||null===s?Qt("Object expected"):(ta(i=s.get)&&(v.get=i),ta(i=s.set)&&(v.set=i),ta(i=s.init)&&b.unshift(i));return h||ra(e,n),v&&qt(n,a,v),u?4^h?o:v:n},"__decorateElement$b"),ia=__name((e,t,a)=>Yt(e,t+"",a),"__publicField$6"),sa=__name((e,t,a)=>t.has(e)||Qt("Cannot "+a),"__accessCheck$6"),ca=__name((e,t)=>Object(t)!==t?Qt('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$6"),la=__name((e,t,a)=>(sa(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet$6"),da=__name((e,t,a)=>t.has(e)?Qt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd$6"),ha=__name((e,t,a,r)=>(sa(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet$6"),pa=__name((e,t,a)=>(sa(e,t,"access private method"),a),"__privateMethod$6");jt=[o("gtn-error-toast")];class GTNErrorToast extends(Wt=n,zt=[i({type:Array})],Wt){static{__name(this,"GTNErrorToast")}constructor(){super(...arguments),da(this,Kt,na(Ht,8,this,[])),na(Ht,11,this)}render(){return r`
      ${this.errors.map(e=>r`
          <div class="toast">
            <div class="header">
              <span>Syntax Error (Line ${e.line})</span>
            </div>
            <div class="msg">${e.message}</div>
          </div>
        `)}
    `}}oa(Ht=Jt(Wt),4,"errors",zt,GTNErrorToast,Kt=new WeakMap),ia(GTNErrorToast=oa(Ht,0,"GTNErrorToast",jt,GTNErrorToast),"styles",t`
    ${a(":host{display:block;position:fixed;bottom:20px;right:20px;max-width:350px}.toast{background:#fff5f5;border-left:5px solid #f56565;box-shadow:0 4px 6px #0000001a;padding:12px 16px;margin-top:8px;border-radius:4px;animation:slideIn .3s ease-out}.header{font-weight:700;color:#c53030;display:flex;justify-content:space-between;font-size:.9em}.msg{font-size:.85em;margin-top:4px;color:#2d3748}@keyframes slideIn{0%{transform:translate(100%);opacity:0}to{transform:translate(0);opacity:1}}")}
  `),na(Ht,1,GTNErrorToast);var ua,ga,_a,ba=Object.create,ma=Object.defineProperty,va=Object.getOwnPropertyDescriptor,Ta=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$a"),fa=__name(e=>{throw TypeError(e)},"__typeError$a"),ya=__name((e,t,a)=>t in e?ma(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$a"),Ga=__name((e,t)=>ma(e,"name",{value:t,configurable:!0}),"__name$a"),xa=__name(e=>[,,,ba(e?.[Ta("metadata")]??null)],"__decoratorStart$a"),Ca=["class","method","getter","setter","accessor","field","value","get","set"],wa=__name(e=>void 0!==e&&"function"!=typeof e?fa("Function expected"):e,"__expectFn$a"),Sa=__name((e,t,a,r,n)=>({kind:Ca[e],name:t,metadata:r,addInitializer:__name(e=>a._?fa("Already initialized"):n.push(wa(e||null)),"addInitializer")}),"__decoratorContext$a"),Ea=__name((e,t)=>ya(t,Ta("metadata"),e[3]),"__decoratorMetadata$a"),$a=__name((e,t,a,r)=>{for(var n=0,o=e[t>>1],i=o&&o.length;n<i;n++)o[n].call(a);return r},"__runInitializers$a"),La=__name((e,t,a,r,n,o)=>{var i,s,c,l=7&t,d=e[0]||(e[0]=[]),h=l&&(n=n.prototype,l<5&&(l>3||!0)&&va(n,a));Ga(n,a);for(var p=r.length-1;p>=0;p--)c=Sa(l,a,s={},e[3],d),i=(0,r[p])(n,c),s._=1,wa(i)&&(n=i);return Ea(e,n),h&&ma(n,a,h),n},"__decorateElement$a");ua=[o("gtn-navigation-panel")];class GTNNavigationPanel extends(_a=n){static{__name(this,"GTNNavigationPanel")}static styles=t`
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
    `}}$a(ga=xa(_a),1,GTNNavigationPanel=La(ga,0,"GTNNavigationPanel",ua,GTNNavigationPanel));var Ra,ka,Aa,Na,Oa,Ia=Object.create,Pa=Object.defineProperty,Da=Object.getOwnPropertyDescriptor,Ma=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$9"),Ua=__name(e=>{throw TypeError(e)},"__typeError$9"),Fa=__name((e,t,a)=>t in e?Pa(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$9"),za=__name((e,t)=>Pa(e,"name",{value:t,configurable:!0}),"__name$9"),Wa=__name(e=>[,,,Ia(e?.[Ma("metadata")]??null)],"__decoratorStart$9"),ja=["class","method","getter","setter","accessor","field","value","get","set"],Ha=__name(e=>void 0!==e&&"function"!=typeof e?Ua("Function expected"):e,"__expectFn$9"),Ka=__name((e,t,a,r,n)=>({kind:ja[e],name:t,metadata:r,addInitializer:__name(e=>a._?Ua("Already initialized"):n.push(Ha(e||null)),"addInitializer")}),"__decoratorContext$9"),Ba=__name((e,t)=>Fa(t,Ma("metadata"),e[3]),"__decoratorMetadata$9"),qa=__name((e,t,a,r)=>{for(var n=0,o=e[t>>1],i=o&&o.length;n<i;n++)1&t?o[n].call(a):r=o[n].call(a,r);return r},"__runInitializers$9"),Va=__name((e,t,a,r,n,o)=>{var i,s,c,l,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,_=ja[h+5],b=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(n=n.prototype),h<5&&(h>3||!u)&&Da(h<4?n:{get[a](){return Xa(this,o)},set[a](e){return er(this,o,e)}},a));h?u&&h<4&&za(o,(h>2?"set ":h>1?"get ":"")+a):za(n,a);for(var T=r.length-1;T>=0;T--)l=Ka(h,a,c={},e[3],m),h&&(l.static=p,l.private=u,d=l.access={has:u?e=>Ya(n,e):e=>a in e},3^h&&(d.get=u?e=>(1^h?Xa:tr)(e,n,4^h?o:v.get):e=>e[a]),h>2&&(d.set=u?(e,t)=>er(e,n,t,4^h?o:v.set):(e,t)=>e[a]=t)),s=(0,r[T])(h?h<4?u?o:v[_]:h>4?void 0:{get:v.get,set:v.set}:n,l),c._=1,4^h||void 0===s?Ha(s)&&(h>4?b.unshift(s):h?u?o=s:v[_]=s:n=s):"object"!=typeof s||null===s?Ua("Object expected"):(Ha(i=s.get)&&(v.get=i),Ha(i=s.set)&&(v.set=i),Ha(i=s.init)&&b.unshift(i));return h||Ba(e,n),v&&Pa(n,a,v),u?4^h?o:v:n},"__decorateElement$9"),Za=__name((e,t,a)=>Fa(e,"symbol"!=typeof t?t+"":t,a),"__publicField$5"),Qa=__name((e,t,a)=>t.has(e)||Ua("Cannot "+a),"__accessCheck$5"),Ya=__name((e,t)=>Object(t)!==t?Ua('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$5"),Xa=__name((e,t,a)=>(Qa(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet$5"),Ja=__name((e,t,a)=>t.has(e)?Ua("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd$5"),er=__name((e,t,a,r)=>(Qa(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet$5"),tr=__name((e,t,a)=>(Qa(e,t,"access private method"),a),"__privateMethod$5");Aa=[o("gtn-compass-panel")];class GTNCompassPanel extends(ka=n,Ra=[i({type:Number})],ka){static{__name(this,"GTNCompassPanel")}constructor(){super(),Ja(this,Oa,qa(Na,8,this,0)),qa(Na,11,this),Za(this,"langService"),Za(this,"unsubscribeUiLang",null),this.langService=d.getInstance().resolve(h.LanguageService)}connectedCallback(){super.connectedCallback(),this.unsubscribeUiLang=this.langService.subscribeUiListeners(()=>{this.requestUpdate()})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeUiLang&&(this.unsubscribeUiLang(),this.unsubscribeUiLang=null)}handleClick(e){const t=e.currentTarget.getBoundingClientRect(),a=t.width/2,r=t.height/2,n=e.clientX-t.left-a,o=e.clientY-t.top-r;let i=Math.atan2(o,n)*(180/Math.PI);i=(i+90+360)%360;const s=5*Math.round(i/5);this.dispatchEvent(new CustomEvent("heading-change",{detail:{heading:s}}))}render(){const e=`rotate(${this.heading}, 50, 50)`,t=__name(e=>this.langService.translate(e),"t"),a=t("unit.degree");return r`
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
    `}}Va(Na=Wa(ka),4,"heading",Ra,GTNCompassPanel,Oa=new WeakMap),GTNCompassPanel=Va(Na,0,"GTNCompassPanel",Aa,GTNCompassPanel),Za(GTNCompassPanel,"styles",t`
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
  `),qa(Na,1,GTNCompassPanel);var ar,rr,nr,or,ir,sr,cr,lr,dr,hr=Object.create,pr=Object.defineProperty,ur=Object.getOwnPropertyDescriptor,gr=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$8"),_r=__name(e=>{throw TypeError(e)},"__typeError$8"),br=__name((e,t,a)=>t in e?pr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$8"),mr=__name((e,t)=>pr(e,"name",{value:t,configurable:!0}),"__name$8"),vr=__name(e=>[,,,hr(e?.[gr("metadata")]??null)],"__decoratorStart$8"),Tr=["class","method","getter","setter","accessor","field","value","get","set"],fr=__name(e=>void 0!==e&&"function"!=typeof e?_r("Function expected"):e,"__expectFn$8"),yr=__name((e,t,a,r,n)=>({kind:Tr[e],name:t,metadata:r,addInitializer:__name(e=>a._?_r("Already initialized"):n.push(fr(e||null)),"addInitializer")}),"__decoratorContext$8"),Gr=__name((e,t)=>br(t,gr("metadata"),e[3]),"__decoratorMetadata$8"),xr=__name((e,t,a,r)=>{for(var n=0,o=e[t>>1],i=o&&o.length;n<i;n++)1&t?o[n].call(a):r=o[n].call(a,r);return r},"__runInitializers$8"),Cr=__name((e,t,a,r,n,o)=>{var i,s,c,l,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,_=Tr[h+5],b=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(n=n.prototype),h<5&&(h>3||!u)&&ur(h<4?n:{get[a](){return $r(this,o)},set[a](e){return Rr(this,o,e)}},a));h?u&&h<4&&mr(o,(h>2?"set ":h>1?"get ":"")+a):mr(n,a);for(var T=r.length-1;T>=0;T--)l=yr(h,a,c={},e[3],m),h&&(l.static=p,l.private=u,d=l.access={has:u?e=>Er(n,e):e=>a in e},3^h&&(d.get=u?e=>(1^h?$r:kr)(e,n,4^h?o:v.get):e=>e[a]),h>2&&(d.set=u?(e,t)=>Rr(e,n,t,4^h?o:v.set):(e,t)=>e[a]=t)),s=(0,r[T])(h?h<4?u?o:v[_]:h>4?void 0:{get:v.get,set:v.set}:n,l),c._=1,4^h||void 0===s?fr(s)&&(h>4?b.unshift(s):h?u?o=s:v[_]=s:n=s):"object"!=typeof s||null===s?_r("Object expected"):(fr(i=s.get)&&(v.get=i),fr(i=s.set)&&(v.set=i),fr(i=s.init)&&b.unshift(i));return h||Gr(e,n),v&&pr(n,a,v),u?4^h?o:v:n},"__decorateElement$8"),wr=__name((e,t,a)=>br(e,"symbol"!=typeof t?t+"":t,a),"__publicField$4"),Sr=__name((e,t,a)=>t.has(e)||_r("Cannot "+a),"__accessCheck$4"),Er=__name((e,t)=>Object(t)!==t?_r('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$4"),$r=__name((e,t,a)=>(Sr(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet$4"),Lr=__name((e,t,a)=>t.has(e)?_r("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd$4"),Rr=__name((e,t,a,r)=>(Sr(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet$4"),kr=__name((e,t,a)=>(Sr(e,t,"access private method"),a),"__privateMethod$4");const Ar=!0;ir=[o("gtn-settings-panel")];class GTNSettingsPanel extends(or=n,nr=[i({type:Number})],rr=[i({type:Number})],ar=[i({type:Boolean})],or){static{__name(this,"GTNSettingsPanel")}constructor(){super(),Lr(this,cr,xr(sr,8,this,50)),xr(sr,11,this),Lr(this,lr,xr(sr,12,this,90)),xr(sr,15,this),Lr(this,dr,xr(sr,16,this,Ar)),xr(sr,19,this),wr(this,"langService"),wr(this,"unsubscribeUiLang",null),wr(this,"toggleKeyboard",()=>{this.keyboardActive=!this.keyboardActive;const e={value:this.keyboardActive};this.dispatchEvent(new CustomEvent("keyboard-status",{detail:e}))}),this.langService=d.getInstance().resolve(h.LanguageService)}connectedCallback(){super.connectedCallback(),this.unsubscribeUiLang=this.langService.subscribeUiListeners(()=>{this.requestUpdate()})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeUiLang&&(this.unsubscribeUiLang(),this.unsubscribeUiLang=null)}handleInput(e,t){const a=parseInt(e.target.value,10)||0;this.dispatchEvent(new CustomEvent("setting-change",{detail:{type:t,value:a}}))}render(){const e=__name(e=>this.langService.translate(e),"t");return r`
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
    `}}sr=vr(or),cr=new WeakMap,lr=new WeakMap,dr=new WeakMap,Cr(sr,4,"step",nr,GTNSettingsPanel,cr),Cr(sr,4,"rotation",rr,GTNSettingsPanel,lr),Cr(sr,4,"keyboardActive",ar,GTNSettingsPanel,dr),GTNSettingsPanel=Cr(sr,0,"GTNSettingsPanel",ir,GTNSettingsPanel),wr(GTNSettingsPanel,"styles",t`
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
  `),xr(sr,1,GTNSettingsPanel);const Nr="0 -960 960 960",Or={check:{content:c`<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>`},close:{content:c`<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>`},menu:{content:c`<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>`},settings:{content:c`<path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.58 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>`},home:{content:c`<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>`},user:{content:c`<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>`},eye:{content:c`
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
    />`,viewBox:Nr},editOff:{content:c`
    <path d="m622-453-56-56 82-82-57-57-82 82-56-56 195-195q12-12 26.5-17.5T705-840q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L622-453ZM200-200h57l195-195-28-29-29-28-195 195v57ZM792-56 509-338 290-120H120v-169l219-219L56-792l57-57 736 736-57 57Zm-32-648-56-56 56 56Zm-169 56 57 57-57-57ZM424-424l-29-28 57 57-28-29Z"
          fill="currentColor"
    />`,viewBox:Nr},visibility:{content:c`
    <path d="M607.5-372.5Q660-425 660-500t-52.5-127.5Q555-680 480-680t-127.5 52.5Q300-575 300-500t52.5 127.5Q405-320 480-320t127.5-52.5Zm-204-51Q372-455 372-500t31.5-76.5Q435-608 480-608t76.5 31.5Q588-545 588-500t-31.5 76.5Q525-392 480-392t-76.5-31.5ZM214-281.5Q94-363 40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200q-146 0-266-81.5ZM480-500Zm207.5 160.5Q782-399 832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280q113 0 207.5-59.5Z"
          fill="currentColor"
    />`,viewBox:Nr},visibilityOff:{content:c`
    <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"
          fill="currentColor"
    />`,viewBox:Nr}};function isIconName(e){return"string"==typeof e&&Object.prototype.hasOwnProperty.call(Or,e)}function tryToIconName(e){if(isIconName(e))return e}function getIconFromName(e){const t=tryToIconName(e);if(!t)return void console.warn(`[GtnIcon] Icon not found: "${e}"`);const a=Or[t];return{...a,viewBox:a.viewBox??"0 0 24 24"}}__name(isIconName,"isIconName"),__name(tryToIconName,"tryToIconName"),__name(getIconFromName,"getIconFromName");var Ir,Pr,Dr,Mr,Ur,Fr,zr,Wr=Object.create,jr=Object.defineProperty,Hr=Object.getOwnPropertyDescriptor,Kr=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$7"),Br=__name(e=>{throw TypeError(e)},"__typeError$7"),qr=__name((e,t,a)=>t in e?jr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$7"),Vr=__name((e,t)=>jr(e,"name",{value:t,configurable:!0}),"__name$7"),Zr=__name(e=>[,,,Wr(e?.[Kr("metadata")]??null)],"__decoratorStart$7"),Qr=["class","method","getter","setter","accessor","field","value","get","set"],Yr=__name(e=>void 0!==e&&"function"!=typeof e?Br("Function expected"):e,"__expectFn$7"),Xr=__name((e,t,a,r,n)=>({kind:Qr[e],name:t,metadata:r,addInitializer:__name(e=>a._?Br("Already initialized"):n.push(Yr(e||null)),"addInitializer")}),"__decoratorContext$7"),Jr=__name((e,t)=>qr(t,Kr("metadata"),e[3]),"__decoratorMetadata$7"),en=__name((e,t,a,r)=>{for(var n=0,o=e[t>>1],i=o&&o.length;n<i;n++)1&t?o[n].call(a):r=o[n].call(a,r);return r},"__runInitializers$7"),tn=__name((e,t,a,r,n,o)=>{var i,s,c,l,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,_=Qr[h+5],b=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(n=n.prototype),h<5&&(h>3||!u)&&Hr(h<4?n:{get[a](){return on(this,o)},set[a](e){return cn(this,o,e)}},a));h?u&&h<4&&Vr(o,(h>2?"set ":h>1?"get ":"")+a):Vr(n,a);for(var T=r.length-1;T>=0;T--)l=Xr(h,a,c={},e[3],m),h&&(l.static=p,l.private=u,d=l.access={has:u?e=>nn(n,e):e=>a in e},3^h&&(d.get=u?e=>(1^h?on:ln)(e,n,4^h?o:v.get):e=>e[a]),h>2&&(d.set=u?(e,t)=>cn(e,n,t,4^h?o:v.set):(e,t)=>e[a]=t)),s=(0,r[T])(h?h<4?u?o:v[_]:h>4?void 0:{get:v.get,set:v.set}:n,l),c._=1,4^h||void 0===s?Yr(s)&&(h>4?b.unshift(s):h?u?o=s:v[_]=s:n=s):"object"!=typeof s||null===s?Br("Object expected"):(Yr(i=s.get)&&(v.get=i),Yr(i=s.set)&&(v.set=i),Yr(i=s.init)&&b.unshift(i));return h||Jr(e,n),v&&jr(n,a,v),u?4^h?o:v:n},"__decorateElement$7"),an=__name((e,t,a)=>qr(e,t+"",a),"__publicField$3"),rn=__name((e,t,a)=>t.has(e)||Br("Cannot "+a),"__accessCheck$3"),nn=__name((e,t)=>Object(t)!==t?Br('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$3"),on=__name((e,t,a)=>(rn(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet$3"),sn=__name((e,t,a)=>t.has(e)?Br("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd$3"),cn=__name((e,t,a,r)=>(rn(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet$3"),ln=__name((e,t,a)=>(rn(e,t,"access private method"),a),"__privateMethod$3");Mr=[o("gtn-icon")];class GtnIcon extends(Dr=n,Pr=[i({type:String})],Ir=[i({type:String})],Dr){static{__name(this,"GtnIcon")}constructor(){super(...arguments),sn(this,Fr,en(Ur,8,this)),en(Ur,11,this),sn(this,zr,en(Ur,12,this)),en(Ur,15,this)}render(){const e=getIconFromName(this.icon);return e?r`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="${e.viewBox}"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
        focusable="false"
      >
        ${e.content}
      </svg>
    `:r``}}Ur=Zr(Dr),Fr=new WeakMap,zr=new WeakMap,tn(Ur,4,"icon",Pr,GtnIcon,Fr),tn(Ur,4,"viewBox",Ir,GtnIcon,zr),an(GtnIcon=tn(Ur,0,"GtnIcon",Mr,GtnIcon),"styles",t`
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
  `),en(Ur,1,GtnIcon);var dn,hn,pn,un=Object.create,gn=Object.defineProperty,_n=Object.getOwnPropertyDescriptor,bn=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$6"),mn=__name(e=>{throw TypeError(e)},"__typeError$6"),vn=__name((e,t,a)=>t in e?gn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$6"),Tn=__name((e,t)=>gn(e,"name",{value:t,configurable:!0}),"__name$6"),fn=__name(e=>[,,,un(e?.[bn("metadata")]??null)],"__decoratorStart$6"),yn=["class","method","getter","setter","accessor","field","value","get","set"],Gn=__name(e=>void 0!==e&&"function"!=typeof e?mn("Function expected"):e,"__expectFn$6"),xn=__name((e,t,a,r,n)=>({kind:yn[e],name:t,metadata:r,addInitializer:__name(e=>a._?mn("Already initialized"):n.push(Gn(e||null)),"addInitializer")}),"__decoratorContext$6"),Cn=__name((e,t)=>vn(t,bn("metadata"),e[3]),"__decoratorMetadata$6"),wn=__name((e,t,a,r)=>{for(var n=0,o=e[t>>1],i=o&&o.length;n<i;n++)o[n].call(a);return r},"__runInitializers$6"),Sn=__name((e,t,a,r,n,o)=>{var i,s,c,l=7&t,d=e[0]||(e[0]=[]),h=l&&(n=n.prototype,l<5&&(l>3||!0)&&_n(n,a));Tn(n,a);for(var p=r.length-1;p>=0;p--)c=xn(l,a,s={},e[3],d),i=(0,r[p])(n,c),s._=1,Gn(i)&&(n=i);return Cn(e,n),h&&gn(n,a,h),n},"__decorateElement$6");dn=[o("gtn-commands-panel")];class GTNCommandsPanel extends(pn=n){static{__name(this,"GTNCommandsPanel")}static styles=t`
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
  `;langService;unsubscribeUiLang=null;constructor(){super(),this.langService=d.getInstance().resolve(h.LanguageService)}connectedCallback(){super.connectedCallback(),this.unsubscribeUiLang=this.langService.subscribeUiListeners(()=>{this.requestUpdate()})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeUiLang&&(this.unsubscribeUiLang(),this.unsubscribeUiLang=null)}emit(e,t){const a={action:e,value:t};this.dispatchEvent(new CustomEvent("command",{detail:a}))}render(){const e=__name(e=>this.langService.translate(e),"t"),t=e("commands.GT_FORWARD"),a=e("commands.GT_BACKWARD"),n=e("commands.GT_TURN_LEFT"),o=e("commands.GT_TURN_RIGHT"),i=e("unit.degree");return r`
      <div class="cmd-row">
        <button @click=${()=>this.emit(D.GT_FORWARD,10)}>${t} 10</button>
        <button @click=${()=>this.emit(D.GT_FORWARD,25)}>${t} 25</button>
        <button @click=${()=>this.emit(D.GT_FORWARD,100)}>${t} 100</button>
      </div>

      <div class="cmd-row">
        <button @click=${()=>this.emit(D.GT_BACKWARD,10)}>${a} 10</button>
        <button @click=${()=>this.emit(D.GT_BACKWARD,25)}>${a} 25</button>
        <button @click=${()=>this.emit(D.GT_BACKWARD,100)}>${a} 100</button>
      </div>

      <div class="separator"></div>

      <div class="cmd-row">
        <button @click=${()=>this.emit(D.GT_TURN_LEFT,30)}>${n} 30${i}</button>
        <button @click=${()=>this.emit(D.GT_TURN_LEFT,45)}>${n} 45${i}</button>
        <button @click=${()=>this.emit(D.GT_TURN_LEFT,90)}>${n} 90${i}</button>
      </div>

      <div class="cmd-row">
        <button @click=${()=>this.emit(D.GT_TURN_RIGHT,30)}>${o} 30${i}</button>
        <button @click=${()=>this.emit(D.GT_TURN_RIGHT,45)}>${o} 45${i}</button>
        <button @click=${()=>this.emit(D.GT_TURN_RIGHT,90)}>${o} 90${i}</button>
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
    `}}wn(hn=fn(pn),1,GTNCommandsPanel=Sn(hn,0,"GTNCommandsPanel",dn,GTNCommandsPanel));var En,$n,Ln,Rn=Object.create,kn=Object.defineProperty,An=Object.getOwnPropertyDescriptor,Nn=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$5"),On=__name(e=>{throw TypeError(e)},"__typeError$5"),In=__name((e,t,a)=>t in e?kn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$5"),Pn=__name((e,t)=>kn(e,"name",{value:t,configurable:!0}),"__name$5"),Dn=__name(e=>[,,,Rn(e?.[Nn("metadata")]??null)],"__decoratorStart$5"),Mn=["class","method","getter","setter","accessor","field","value","get","set"],Un=__name(e=>void 0!==e&&"function"!=typeof e?On("Function expected"):e,"__expectFn$5"),Fn=__name((e,t,a,r,n)=>({kind:Mn[e],name:t,metadata:r,addInitializer:__name(e=>a._?On("Already initialized"):n.push(Un(e||null)),"addInitializer")}),"__decoratorContext$5"),zn=__name((e,t)=>In(t,Nn("metadata"),e[3]),"__decoratorMetadata$5"),Wn=__name((e,t,a,r)=>{for(var n=0,o=e[t>>1],i=o&&o.length;n<i;n++)o[n].call(a);return r},"__runInitializers$5"),jn=__name((e,t,a,r,n,o)=>{var i,s,c,l=7&t,d=e[0]||(e[0]=[]),h=l&&(n=n.prototype,l<5&&(l>3||!0)&&An(n,a));Pn(n,a);for(var p=r.length-1;p>=0;p--)c=Fn(l,a,s={},e[3],d),i=(0,r[p])(n,c),s._=1,Un(i)&&(n=i);return zn(e,n),h&&kn(n,a,h),n},"__decorateElement$5");const Hn=[x.BLACK,x.RED,x.BLUE,x.GREEN,x.YELLOW,x.ORANGE];En=[o("gtn-color-panel")];class GTNColorPanel extends(Ln=n){static{__name(this,"GTNColorPanel")}static styles=t`
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
        ${Hn.map(t=>r`
            <div
              class="swatch"
              style="background-color: ${t}"
              @click=${()=>this.emit(t)}
              title="${e("sandbox.btn.colors."+t)}"
            ></div>
          `)}
      </div>
    `}}Wn($n=Dn(Ln),1,GTNColorPanel=jn($n,0,"GTNColorPanel",En,GTNColorPanel));var Kn,Bn,qn,Vn,Zn=Object.create,Qn=Object.defineProperty,Yn=Object.getOwnPropertyDescriptor,Xn=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$4"),Jn=__name(e=>{throw TypeError(e)},"__typeError$4"),eo=__name((e,t,a)=>t in e?Qn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$4"),to=__name((e,t)=>Qn(e,"name",{value:t,configurable:!0}),"__name$4"),ao=__name(e=>[,,,Zn(e?.[Xn("metadata")]??null)],"__decoratorStart$4"),ro=["class","method","getter","setter","accessor","field","value","get","set"],no=__name(e=>void 0!==e&&"function"!=typeof e?Jn("Function expected"):e,"__expectFn$4"),oo=__name((e,t,a,r,n)=>({kind:ro[e],name:t,metadata:r,addInitializer:__name(e=>a._?Jn("Already initialized"):n.push(no(e||null)),"addInitializer")}),"__decoratorContext$4"),io=__name((e,t)=>eo(t,Xn("metadata"),e[3]),"__decoratorMetadata$4"),so=__name((e,t,a,r)=>{for(var n=0,o=e[t>>1],i=o&&o.length;n<i;n++)o[n].call(a);return r},"__runInitializers$4"),co=__name((e,t,a,r,n,o)=>{var i,s,c,l=7&t,d=e[0]||(e[0]=[]),h=l&&(n=n.prototype,l<5&&(l>3||!0)&&Yn(n,a));to(n,a);for(var p=r.length-1;p>=0;p--)c=oo(l,a,s={},e[3],d),i=(0,r[p])(n,c),s._=1,no(i)&&(n=i);return io(e,n),h&&Qn(n,a,h),n},"__decorateElement$4");Kn=[o("gtn-controls-panel")];class GTNControlsPanel extends(qn=n){static{__name(this,"GTNControlsPanel")}static styles=[F,t`
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
    `}}so(Bn=ao(qn),1,GTNControlsPanel=co(Bn,0,"GTNControlsPanel",Kn,GTNControlsPanel)),(e=>{var t,a;function isTypingContent(e){return 1===e.length}(t=e.Keys||(e.Keys={})).Backspace="Backspace",t.Tab="Tab",t.Enter="Enter",t.Shift="Shift",t.Control="Control",t.Alt="Alt",t.Pause="Pause",t.CapsLock="CapsLock",t.Escape="Escape",t.Space=" ",t.PageUp="PageUp",t.PageDown="PageDown",t.End="End",t.Home="Home",t.ArrowLeft="ArrowLeft",t.ArrowUp="ArrowUp",t.ArrowRight="ArrowRight",t.ArrowDown="ArrowDown",t.PrintScreen="PrintScreen",t.Insert="Insert",t.Delete="Delete",t.Digit0="0",t.Digit1="1",t.Digit2="2",t.Digit3="3",t.Digit4="4",t.Digit5="5",t.Digit6="6",t.Digit7="7",t.Digit8="8",t.Digit9="9",t.A="A",t.B="B",t.C="C",t.D="D",t.E="E",t.F="F",t.G="G",t.H="H",t.I="I",t.J="J",t.K="K",t.L="L",t.M="M",t.N="N",t.O="O",t.P="P",t.Q="Q",t.R="R",t.S="S",t.T="T",t.U="U",t.V="V",t.W="W",t.X="X",t.Y="Y",t.Z="Z",t.a="a",t.b="b",t.c="c",t.d="d",t.e="e",t.f="f",t.g="g",t.h="h",t.i="i",t.j="j",t.k="k",t.l="l",t.m="m",t.n="n",t.o="o",t.p="p",t.q="q",t.r="r",t.s="s",t.t="t",t.u="u",t.v="v",t.w="w",t.x="x",t.y="y",t.z="z",t.Meta="Meta",t.ContextMenu="ContextMenu",t.AudioVolumeMute="AudioVolumeMute",t.AudioVolumeDown="AudioVolumeDown",t.AudioVolumeUp="AudioVolumeUp",t.F1="F1",t.F2="F2",t.F3="F3",t.F4="F4",t.F5="F5",t.F6="F6",t.F7="F7",t.F8="F8",t.F9="F9",t.F10="F10",t.F11="F11",t.F12="F12",t.NumLock="NumLock",t.ScrollLock="ScrollLock",t.Semicolon=";",t.Equal="=",t.Comma=",",t.Minus="-",t.Period=".",t.Slash="/",t.Backquote="`",t.BracketLeft="[",t.Backslash="\\",t.BracketRight="]",t.Quote="'",t.Tilde="~",t.Exclamation="!",t.At="@",t.Sharp="#",t.Dollar="$",t.Percent="%",t.Caret="^",t.Ampersand="&",t.Asterisk="*",t.ParenthesisLeft="(",t.ParenthesisRight=")",t.Underscore="_",t.Plus="+",t.OpenBrace="{",t.CloseBrace="}",t.Pipe="|",t.Colon=":",t.Quote2='"',t.AngleBracketLeft="<",t.AngleBracketRight=">",t.QuestionMark="?",(a=e.Codes||(e.Codes={})).Backspace="Backspace",a.Tab="Tab",a.Enter="Enter",a.ShiftLeft="ShiftLeft",a.ShiftRight="ShiftRight",a.ControlLeft="ControlLeft",a.ControlRight="ControlRight",a.AltLeft="AltLeft",a.AltRight="AltRight",a.Pause="Pause",a.CapsLock="CapsLock",a.Escape="Escape",a.Space="Space",a.PageUp="PageUp",a.PageDown="PageDown",a.End="End",a.Home="Home",a.ArrowLeft="ArrowLeft",a.ArrowUp="ArrowUp",a.ArrowRight="ArrowRight",a.ArrowDown="ArrowDown",a.PrintScreen="PrintScreen",a.Insert="Insert",a.Delete="Delete",a.Digit0="Digit0",a.Digit1="Digit1",a.Digit2="Digit2",a.Digit3="Digit3",a.Digit4="Digit4",a.Digit5="Digit5",a.Digit6="Digit6",a.Digit7="Digit7",a.Digit8="Digit8",a.Digit9="Digit9",a.AudioVolumeMute="AudioVolumeMute",a.AudioVolumeDown="AudioVolumeDown",a.AudioVolumeUp="AudioVolumeUp",a.KeyA="KeyA",a.KeyB="KeyB",a.KeyC="KeyC",a.KeyD="KeyD",a.KeyE="KeyE",a.KeyF="KeyF",a.KeyG="KeyG",a.KeyH="KeyH",a.KeyI="KeyI",a.KeyJ="KeyJ",a.KeyK="KeyK",a.KeyL="KeyL",a.KeyM="KeyM",a.KeyN="KeyN",a.KeyO="KeyO",a.KeyP="KeyP",a.KeyQ="KeyQ",a.KeyR="KeyR",a.KeyS="KeyS",a.KeyT="KeyT",a.KeyU="KeyU",a.KeyV="KeyV",a.KeyW="KeyW",a.KeyX="KeyX",a.KeyY="KeyY",a.KeyZ="KeyZ",a.MetaLeft="MetaLeft",a.MetaRight="MetaRight",a.ContextMenu="ContextMenu",a.Numpad0="Numpad0",a.Numpad1="Numpad1",a.Numpad2="Numpad2",a.Numpad3="Numpad3",a.Numpad4="Numpad4",a.Numpad5="Numpad5",a.Numpad6="Numpad6",a.Numpad7="Numpad7",a.Numpad8="Numpad8",a.Numpad9="Numpad9",a.NumpadMultiply="NumpadMultiply",a.NumpadAdd="NumpadAdd",a.NumpadSubtract="NumpadSubtract",a.NumpadDecimal="NumpadDecimal",a.NumpadDivide="NumpadDivide",a.F1="F1",a.F2="F2",a.F3="F3",a.F4="F4",a.F5="F5",a.F6="F6",a.F7="F7",a.F8="F8",a.F9="F9",a.F10="F10",a.F11="F11",a.F12="F12",a.NumLock="NumLock",a.ScrollLock="ScrollLock",a.Semicolon="Semicolon",a.Equal="Equal",a.Comma="Comma",a.Minus="Minus",a.Period="Period",a.Slash="Slash",a.Backquote="Backquote",a.BracketLeft="BracketLeft",a.Backslash="Backslash",a.BracketRight="BracketRight",a.Quote="Quote",__name(isTypingContent,"isTypingContent"),e.isTypingContent=isTypingContent})(Vn||(Vn={})),Vn.Codes;const lo={Enter:Vn.Codes.Enter,Escape:Vn.Codes.Escape,ArrowUp:Vn.Codes.ArrowUp,ArrowDown:Vn.Codes.ArrowDown,ArrowLeft:Vn.Codes.ArrowLeft,ArrowRight:Vn.Codes.ArrowRight,KeyUp:Vn.Codes.KeyW,KeyDown:Vn.Codes.KeyS,KeyLeft:Vn.Codes.KeyA,KeyRight:Vn.Codes.KeyD,Backspace:Vn.Codes.Backspace,Delete:Vn.Codes.Delete,Space:Vn.Codes.Space};var ho,po,uo,go,_o,bo,mo,vo,To,fo,yo,Go,xo,Co=Object.create,wo=Object.defineProperty,So=Object.getOwnPropertyDescriptor,Eo=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$3"),$o=__name(e=>{throw TypeError(e)},"__typeError$3"),Lo=__name((e,t,a)=>t in e?wo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$3"),Ro=__name((e,t)=>wo(e,"name",{value:t,configurable:!0}),"__name$3"),ko=__name(e=>[,,,Co(e?.[Eo("metadata")]??null)],"__decoratorStart$3"),Ao=["class","method","getter","setter","accessor","field","value","get","set"],No=__name(e=>void 0!==e&&"function"!=typeof e?$o("Function expected"):e,"__expectFn$3"),Oo=__name((e,t,a,r,n)=>({kind:Ao[e],name:t,metadata:r,addInitializer:__name(e=>a._?$o("Already initialized"):n.push(No(e||null)),"addInitializer")}),"__decoratorContext$3"),Io=__name((e,t)=>Lo(t,Eo("metadata"),e[3]),"__decoratorMetadata$3"),Po=__name((e,t,a,r)=>{for(var n=0,o=e[t>>1],i=o&&o.length;n<i;n++)1&t?o[n].call(a):r=o[n].call(a,r);return r},"__runInitializers$3"),Do=__name((e,t,a,r,n,o)=>{var i,s,c,l,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,_=Ao[h+5],b=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(n=n.prototype),h<5&&(h>3||!u)&&So(h<4?n:{get[a](){return zo(this,o)},set[a](e){return jo(this,o,e)}},a));h?u&&h<4&&Ro(o,(h>2?"set ":h>1?"get ":"")+a):Ro(n,a);for(var T=r.length-1;T>=0;T--)l=Oo(h,a,c={},e[3],m),h&&(l.static=p,l.private=u,d=l.access={has:u?e=>Fo(n,e):e=>a in e},3^h&&(d.get=u?e=>(1^h?zo:Ho)(e,n,4^h?o:v.get):e=>e[a]),h>2&&(d.set=u?(e,t)=>jo(e,n,t,4^h?o:v.set):(e,t)=>e[a]=t)),s=(0,r[T])(h?h<4?u?o:v[_]:h>4?void 0:{get:v.get,set:v.set}:n,l),c._=1,4^h||void 0===s?No(s)&&(h>4?b.unshift(s):h?u?o=s:v[_]=s:n=s):"object"!=typeof s||null===s?$o("Object expected"):(No(i=s.get)&&(v.get=i),No(i=s.set)&&(v.set=i),No(i=s.init)&&b.unshift(i));return h||Io(e,n),v&&wo(n,a,v),u?4^h?o:v:n},"__decorateElement$3"),Mo=__name((e,t,a)=>Lo(e,"symbol"!=typeof t?t+"":t,a),"__publicField$2"),Uo=__name((e,t,a)=>t.has(e)||$o("Cannot "+a),"__accessCheck$2"),Fo=__name((e,t)=>Object(t)!==t?$o('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$2"),zo=__name((e,t,a)=>(Uo(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet$2"),Wo=__name((e,t,a)=>t.has(e)?$o("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd$2"),jo=__name((e,t,a,r)=>(Uo(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet$2"),Ho=__name((e,t,a)=>(Uo(e,t,"access private method"),a),"__privateMethod$2");const Ko=getLiteralName(D.GT_STATEMENT_SEPARATOR),Bo=[lo.ArrowUp,lo.ArrowDown,lo.ArrowLeft,lo.ArrowRight];mo=[o("gtn-sandbox")];class GtnSandbox extends(bo=n,_o=[l()],go=[l()],uo=[l()],po=[l()],ho=[l()],bo){static{__name(this,"GtnSandbox")}constructor(){super(),Mo(this,"interpreter"),Mo(this,"langService"),Mo(this,"unsubscribeUiLang",null),Wo(this,To,Po(vo,8,this,50)),Po(vo,11,this),Wo(this,fo,Po(vo,12,this,90)),Po(vo,15,this),Wo(this,yo,Po(vo,16,this,[])),Po(vo,19,this),Wo(this,Go,Po(vo,20,this,0)),Po(vo,23,this),Wo(this,xo,Po(vo,24,this,Ar)),Po(vo,27,this),Mo(this,"handleConsoleLogLanguageChange",async()=>{await this.retranslateLogs()}),Mo(this,"retranslateLogs",async()=>{if(0===this.consoleLogs.length)return;const e=g(this.langService.getUiLanguage()),t=await Promise.all(this.consoleLogs.map(async([t,a,r])=>[t,a,await this.langService.localizeScript(a,e)]));this.consoleLogs=t}),Mo(this,"handleKeyDown",e=>{if(!this.isKeyboardActive)return;const t=e.code;switch(Bo.includes(t)&&e.preventDefault(),t){case lo.ArrowUp:case lo.KeyUp:return this.doHandleMove(D.GT_FORWARD);case lo.ArrowDown:case lo.KeyDown:return this.doHandleMove(D.GT_BACKWARD);case lo.ArrowLeft:case lo.KeyLeft:return this.doHandleMove(D.GT_TURN_LEFT);case lo.ArrowRight:case lo.KeyRight:return this.doHandleMove(D.GT_TURN_RIGHT);case lo.Backspace:case lo.Delete:return this.handleClear();case lo.Escape:return this.handleReset()}});const e=d.getInstance();this.interpreter=e.resolve(h.Interpreter),this.langService=e.resolve(h.LanguageService)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.handleKeyDown),this.unsubscribeUiLang=this.langService.subscribeUiListeners(()=>{this.handleConsoleLogLanguageChange(),this.requestUpdate()})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.handleKeyDown),this.unsubscribeUiLang&&(this.unsubscribeUiLang(),this.unsubscribeUiLang=null)}async execute(e){try{const t=(new Date).toLocaleTimeString().split(" ")[0]??"",a=g(this.langService.getUiLanguage()),r=await this.langService.localizeScript(e,a);this.consoleLogs=[[t,e,r],...this.consoleLogs],await this.interpreter.canonicalExecute(e)}catch(t){console.error(t)}}handleMove(e){const{action:t}=e.detail;this.doHandleMove(t)}doHandleMove(e){let t;switch(e){case D.GT_FORWARD:case D.GT_BACKWARD:t=`${D[e]} ${this.step}`+Ko;break;case D.GT_TURN_LEFT:t=`${D[e]} ${this.angle}`+Ko,this.currentHeading=(this.currentHeading-this.angle+360)%360;break;case D.GT_TURN_RIGHT:t=`${D[e]} ${this.angle}`+Ko,this.currentHeading=(this.currentHeading+this.angle)%360;break;default:return}this.execute(t)}handleHeadingChange(e){const t=this.currentHeading,a=e.detail.heading;this.currentHeading=a;const r=a-t;this.execute(`${D[D.GT_TURN_RIGHT]} ${r}`+Ko)}handleSettingChange(e){const{type:t,value:a}=e.detail;"step"===t&&(this.step=a),"angle"===t&&(this.angle=a)}handleColorChange(e){const t=e.detail.color;this.execute(`${D[D.GT_PEN_COLOR]} "${t}"`+Ko)}handleCommand(e){const{action:t,value:a}=e.detail;if(![D.GT_FORWARD,D.GT_BACKWARD,D.GT_TURN_LEFT,D.GT_TURN_RIGHT,D.GT_PEN_UP,D.GT_PEN_DOWN,D.GT_SHOW_TURTLE,D.GT_HIDE_TURTLE].includes(t))return;const r=`${D[t]} ${a||""}`+Ko;this.execute(r)}handleReset(){const e=D[D.GT_CLEAR_GRAPHICS]+Ko+D[D.GT_RESET]+Ko;this.execute(e),this.currentHeading=0}handleClear(){const e=D[D.GT_CLEAR_GRAPHICS]+Ko;this.execute(e)}handleKeyboardStatus(e){this.isKeyboardActive=e.detail.value}render(){const e=__name(e=>this.langService.translate(e),"t");return r`
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
    `}}vo=ko(bo),To=new WeakMap,fo=new WeakMap,yo=new WeakMap,Go=new WeakMap,xo=new WeakMap,Do(vo,4,"step",_o,GtnSandbox,To),Do(vo,4,"angle",go,GtnSandbox,fo),Do(vo,4,"consoleLogs",uo,GtnSandbox,yo),Do(vo,4,"currentHeading",po,GtnSandbox,Go),Do(vo,4,"isKeyboardActive",ho,GtnSandbox,xo),GtnSandbox=Do(vo,0,"GtnSandbox",mo,GtnSandbox),Mo(GtnSandbox,"styles",[U,t`
      ${a(":host{display:block;font-family:var(--font-ui);background:#adff2f;width:100%;height:100%;overflow:hidden}.sandbox-container{display:flex;flex-direction:row;width:100%;height:100%;background:#f8f9fa;gap:1rem;padding:1rem;box-sizing:border-box}.side-panel{width:250px;display:flex;flex-direction:column;gap:1rem;overflow-y:auto}.center-panel{display:flex;flex:1;min-width:0;flex-direction:column;gap:1rem;overflow:hidden;overflow-y:auto}.left-panel{flex:0 0 250px}.right-panel{width:300px;flex:0 0 300px}.canvas-area{flex:1;position:relative;overflow:hidden;background-color:#e0e5ec;box-shadow:inset 0 0 10px #0000000d}.panel-section{margin-bottom:1.5rem;background:#fff;padding:.75rem;border-radius:8px;box-shadow:0 1px 3px #0000001a;border:1px solid #e9ecef;color:#212529}.panel-section h3{margin:0 0 .8rem;font-size:.85rem;text-transform:uppercase;letter-spacing:.5px;color:#888;border-bottom:1px solid #eee;padding-bottom:4px}.console-output{background:#212529;color:#51cf66;font-family:var(--font-code);padding:8px;height:120px;overflow-y:auto;border-radius:4px;font-size:.8rem;display:flex;flex-direction:column}.log-line{border-bottom:1px solid #343a40;padding:2px 0;white-space:nowrap}.empty{color:#868e96;font-style:italic}.console-output::-webkit-scrollbar{width:6px}.console-output::-webkit-scrollbar-track{background:#212529}.console-output::-webkit-scrollbar-thumb{background:#495057;border-radius:3px}@media(max-width:800px){.sandbox-container{flex-direction:column}aside{width:100%;height:auto;max-height:150px;flex-direction:row;gap:20px;padding:10px;border:none;border-top:1px solid #ccc}.right-panel{order:3}.canvas-area{order:1;flex:1}}")}
    `]),Po(vo,1,GtnSandbox);var qo,Vo,Zo,Qo=Object.create,Yo=Object.defineProperty,Xo=Object.getOwnPropertyDescriptor,Jo=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$2"),ei=__name(e=>{throw TypeError(e)},"__typeError$2"),ti=__name((e,t,a)=>t in e?Yo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$2"),ai=__name((e,t)=>Yo(e,"name",{value:t,configurable:!0}),"__name$2"),ri=__name(e=>[,,,Qo(e?.[Jo("metadata")]??null)],"__decoratorStart$2"),ni=["class","method","getter","setter","accessor","field","value","get","set"],oi=__name(e=>void 0!==e&&"function"!=typeof e?ei("Function expected"):e,"__expectFn$2"),ii=__name((e,t,a,r,n)=>({kind:ni[e],name:t,metadata:r,addInitializer:__name(e=>a._?ei("Already initialized"):n.push(oi(e||null)),"addInitializer")}),"__decoratorContext$2"),si=__name((e,t)=>ti(t,Jo("metadata"),e[3]),"__decoratorMetadata$2"),ci=__name((e,t,a,r)=>{for(var n=0,o=e[t>>1],i=o&&o.length;n<i;n++)o[n].call(a);return r},"__runInitializers$2"),li=__name((e,t,a,r,n,o)=>{var i,s,c,l=7&t,d=e[0]||(e[0]=[]),h=l&&(n=n.prototype,l<5&&(l>3||!0)&&Xo(n,a));ai(n,a);for(var p=r.length-1;p>=0;p--)c=ii(l,a,s={},e[3],d),i=(0,r[p])(n,c),s._=1,oi(i)&&(n=i);return si(e,n),h&&Yo(n,a,h),n},"__decorateElement$2");qo=[o("gtn-workbench")];class GTNWorkbench extends(Zo=n){static{__name(this,"GTNWorkbench")}static styles=[U,t`
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
    `}}ci(Vo=ri(Zo),1,GTNWorkbench=li(Vo,0,"GTNWorkbench",qo,GTNWorkbench));var di,hi,pi,ui,gi,_i,bi,mi=Object.create,vi=Object.defineProperty,Ti=Object.getOwnPropertyDescriptor,fi=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$1"),yi=__name(e=>{throw TypeError(e)},"__typeError$1"),Gi=__name((e,t,a)=>t in e?vi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$1"),xi=__name((e,t)=>vi(e,"name",{value:t,configurable:!0}),"__name$1"),Ci=__name(e=>[,,,mi(e?.[fi("metadata")]??null)],"__decoratorStart$1"),wi=["class","method","getter","setter","accessor","field","value","get","set"],Si=__name(e=>void 0!==e&&"function"!=typeof e?yi("Function expected"):e,"__expectFn$1"),Ei=__name((e,t,a,r,n)=>({kind:wi[e],name:t,metadata:r,addInitializer:__name(e=>a._?yi("Already initialized"):n.push(Si(e||null)),"addInitializer")}),"__decoratorContext$1"),$i=__name((e,t)=>Gi(t,fi("metadata"),e[3]),"__decoratorMetadata$1"),Li=__name((e,t,a,r)=>{for(var n=0,o=e[t>>1],i=o&&o.length;n<i;n++)1&t?o[n].call(a):r=o[n].call(a,r);return r},"__runInitializers$1"),Ri=__name((e,t,a,r,n,o)=>{var i,s,c,l,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,_=wi[h+5],b=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(n=n.prototype),h<5&&(h>3||!u)&&Ti(h<4?n:{get[a](){return Oi(this,o)},set[a](e){return Pi(this,o,e)}},a));h?u&&h<4&&xi(o,(h>2?"set ":h>1?"get ":"")+a):xi(n,a);for(var T=r.length-1;T>=0;T--)l=Ei(h,a,c={},e[3],m),h&&(l.static=p,l.private=u,d=l.access={has:u?e=>Ni(n,e):e=>a in e},3^h&&(d.get=u?e=>(1^h?Oi:Di)(e,n,4^h?o:v.get):e=>e[a]),h>2&&(d.set=u?(e,t)=>Pi(e,n,t,4^h?o:v.set):(e,t)=>e[a]=t)),s=(0,r[T])(h?h<4?u?o:v[_]:h>4?void 0:{get:v.get,set:v.set}:n,l),c._=1,4^h||void 0===s?Si(s)&&(h>4?b.unshift(s):h?u?o=s:v[_]=s:n=s):"object"!=typeof s||null===s?yi("Object expected"):(Si(i=s.get)&&(v.get=i),Si(i=s.set)&&(v.set=i),Si(i=s.init)&&b.unshift(i));return h||$i(e,n),v&&vi(n,a,v),u?4^h?o:v:n},"__decorateElement$1"),ki=__name((e,t,a)=>Gi(e,"symbol"!=typeof t?t+"":t,a),"__publicField$1"),Ai=__name((e,t,a)=>t.has(e)||yi("Cannot "+a),"__accessCheck$1"),Ni=__name((e,t)=>Object(t)!==t?yi('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$1"),Oi=__name((e,t,a)=>(Ai(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet$1"),Ii=__name((e,t,a)=>t.has(e)?yi("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd$1"),Pi=__name((e,t,a,r)=>(Ai(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet$1"),Di=__name((e,t,a)=>(Ai(e,t,"access private method"),a),"__privateMethod$1");ui=[o("gtn-procedures-panel")];class GTNProceduresPanel extends(pi=n,hi=[i({type:String})],di=[s(".editor-container")],pi){static{__name(this,"GTNProceduresPanel")}constructor(){super(),Ii(this,_i,Li(gi,8,this)),Li(gi,11,this),Ii(this,bi,Li(gi,12,this)),Li(gi,15,this),ki(this,"editorView"),ki(this,"langService"),ki(this,"langController",new UiLanguageController(this)),ki(this,"languageCompartment",new I),ki(this,"syntaxService");const e=d.getInstance();this.langService=e.resolve(h.LanguageService),this.syntaxService=e.resolve(h.SyntaxService),this.code=""}firstUpdated(){this.initEditor()}disconnectedCallback(){super.disconnectedCallback(),this.editorView?.destroy()}initEditor(){if(!this.editorContainer)return;const e=createAntlrHighlighter(this.syntaxService,this.langService),t=L.create({doc:this.code,extensions:[R,A.of([N]),k,xe,e,this.languageCompartment.of([e]),$.updateListener.of(e=>{if(!e.docChanged)return;const t=e.state.doc.toString();this.code=t,this.onEditorChange(t)})]});this.editorView=new $({state:t,parent:this.editorContainer}),this.updateLanguageFeatures()}onEditorChange(e){this.dispatchEvent(new CustomEvent("procedures-change",{detail:{code:e},bubbles:!0,composed:!0}))}updated(e){super.updated(e),this.updateLanguageFeatures(),this.translateCodeInEditor(e)}translateCodeInEditor(e){if(!e.has("code")||!this.editorView)return;const t=this.editorView.state.doc.toString();t!==this.code&&this.editorView.dispatch({changes:{from:0,to:t.length,insert:this.code}})}updateLanguageFeatures(){if(!this.editorView)return;const e=this.langService.getAllKeywords(),t=O({override:[t=>{const a=t.matchBefore(/\w*/);return!a||a.from===a.to&&!t.explicit?null:{from:a.from,options:e.map(e=>({label:e,type:"keyword"}))}}]});this.editorView.dispatch({effects:this.languageCompartment.reconfigure([t,createAntlrHighlighter(this.syntaxService,this.langService)])})}render(){return r`
      <div class="header">
        <span>${__name(e=>this.langService.translate(e),"t")("workbench.procedures.title")}</span>
      </div>
      <div class="editor-container"></div>
    `}}gi=Ci(pi),_i=new WeakMap,bi=new WeakMap,Ri(gi,4,"code",hi,GTNProceduresPanel,_i),Ri(gi,4,"editorContainer",di,GTNProceduresPanel,bi),GTNProceduresPanel=Ri(gi,0,"GTNProceduresPanel",ui,GTNProceduresPanel),ki(GTNProceduresPanel,"styles",t`
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
  `),Li(gi,1,GTNProceduresPanel);var Mi,Ui,Fi,zi,Wi,ji,Hi,Ki,Bi,qi,Vi,Zi,Qi,Yi,Xi,Ji=Object.create,es=Object.defineProperty,ts=Object.getOwnPropertyDescriptor,as=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol"),rs=__name(e=>{throw TypeError(e)},"__typeError"),ns=__name((e,t,a)=>t in e?es(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp"),os=__name((e,t)=>es(e,"name",{value:t,configurable:!0}),"__name"),is=__name(e=>[,,,Ji(e?.[as("metadata")]??null)],"__decoratorStart"),ss=["class","method","getter","setter","accessor","field","value","get","set"],cs=__name(e=>void 0!==e&&"function"!=typeof e?rs("Function expected"):e,"__expectFn"),ls=__name((e,t,a,r,n)=>({kind:ss[e],name:t,metadata:r,addInitializer:__name(e=>a._?rs("Already initialized"):n.push(cs(e||null)),"addInitializer")}),"__decoratorContext"),ds=__name((e,t)=>ns(t,as("metadata"),e[3]),"__decoratorMetadata"),hs=__name((e,t,a,r)=>{for(var n=0,o=e[t>>1],i=o&&o.length;n<i;n++)1&t?o[n].call(a):r=o[n].call(a,r);return r},"__runInitializers"),ps=__name((e,t,a,r,n,o)=>{var i,s,c,l,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,_=ss[h+5],b=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(n=n.prototype),h<5&&(h>3||!u)&&ts(h<4?n:{get[a](){return bs(this,o)},set[a](e){return vs(this,o,e)}},a));h?u&&h<4&&os(o,(h>2?"set ":h>1?"get ":"")+a):os(n,a);for(var T=r.length-1;T>=0;T--)l=ls(h,a,c={},e[3],m),h&&(l.static=p,l.private=u,d=l.access={has:u?e=>_s(n,e):e=>a in e},3^h&&(d.get=u?e=>(1^h?bs:Ts)(e,n,4^h?o:v.get):e=>e[a]),h>2&&(d.set=u?(e,t)=>vs(e,n,t,4^h?o:v.set):(e,t)=>e[a]=t)),s=(0,r[T])(h?h<4?u?o:v[_]:h>4?void 0:{get:v.get,set:v.set}:n,l),c._=1,4^h||void 0===s?cs(s)&&(h>4?b.unshift(s):h?u?o=s:v[_]=s:n=s):"object"!=typeof s||null===s?rs("Object expected"):(cs(i=s.get)&&(v.get=i),cs(i=s.set)&&(v.set=i),cs(i=s.init)&&b.unshift(i));return h||ds(e,n),v&&es(n,a,v),u?4^h?o:v:n},"__decorateElement"),us=__name((e,t,a)=>ns(e,"symbol"!=typeof t?t+"":t,a),"__publicField"),gs=__name((e,t,a)=>t.has(e)||rs("Cannot "+a),"__accessCheck"),_s=__name((e,t)=>Object(t)!==t?rs('Cannot use the "in" operator on this value'):e.has(t),"__privateIn"),bs=__name((e,t,a)=>(gs(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet"),ms=__name((e,t,a)=>t.has(e)?rs("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd"),vs=__name((e,t,a,r)=>(gs(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet"),Ts=__name((e,t,a)=>(gs(e,t,"access private method"),a),"__privateMethod");const fs={fr:'\ncrayon rouge;\npas := 36;\nrot := 360 / pas;\nrep 36 [\n  av rot;\n  td rot;\n]\ncrayon "vert"\npetitcarre\n',en:"\ncolor red;\nstep := 36;\nrot := 360 / pas;\nrepeat 36 [\n  fd rot;\n  rt rot;\n]\ncolor green\nlittlesquare\n"},ys={fr:"pour petitcarre\n  rep 4 [\n    av 50\n    td 90\n  ]\nfin",en:"def littlesquare\n  repeat 4 [\n    fd 50\n    rt 90\n  ]\nend"};Ki=[o("gtn-app")];class GTNApp extends(Hi=n,ji=[l()],Wi=[l()],zi=[l()],Fi=[l()],Ui=[l()],Mi=[l()],Hi){static{__name(this,"GTNApp")}constructor(){super(),ms(this,qi,hs(Bi,8,this,"")),hs(Bi,11,this),ms(this,Vi,hs(Bi,12,this,"")),hs(Bi,15,this),ms(this,Zi,hs(Bi,16,this,[])),hs(Bi,19,this),ms(this,Qi,hs(Bi,20,this,"SANDBOX")),hs(Bi,23,this),ms(this,Yi,hs(Bi,24,this,[])),hs(Bi,27,this),ms(this,Xi,hs(Bi,28,this,"WRAP")),hs(Bi,31,this),us(this,"interpreter"),us(this,"langService"),us(this,"turtleRepo"),us(this,"projectService"),us(this,"syntaxService"),us(this,"appState"),us(this,"uiUnsubscribe"),us(this,"appStateUnsubscribe");const e=d.getInstance();this.interpreter=e.resolve(h.Interpreter),this.langService=e.resolve(h.LanguageService),this.turtleRepo=e.resolve(h.TurtleRepository),this.projectService=e.resolve(h.ProjectService),this.syntaxService=e.resolve(h.SyntaxService),this.appState=e.resolve(h.ApplicationState),this.currentBoundaryMode=this.appState.boundaryMode,this.turtleRepo.setBoundaryMode(this.currentBoundaryMode);const t=this.langService.getDslLanguage(),a=fs[t]||"",r=ys[t]||"";this.code=a,this.proceduresCode=r}connectedCallback(){super.connectedCallback(),this.uiUnsubscribe=this.langService.subscribeUiListeners(this.handleLanguageChange.bind(this)),this.appStateUnsubscribe=this.appState.subscribe(()=>{const e=this.appState.boundaryMode;this.currentBoundaryMode=e,this.turtleRepo.setBoundaryMode(e)})}disconnectedCallback(){super.disconnectedCallback(),this.uiUnsubscribe&&this.uiUnsubscribe(),this.appStateUnsubscribe&&this.appStateUnsubscribe()}firstUpdated(){super.firstUpdated(new Map),this.initializeLanguageAndProcedures()}async initializeLanguageAndProcedures(){try{await this.langService.initialize(),this.userProcedures=this.syntaxService.extractProcedures(this.proceduresCode),this.validateCombinedCode(),this.requestUpdate()}catch(e){console.error("Failed to initialize DSL resources:",e)}}handleLanguageChange(e){this.validateCombinedCode()}handleCodeChange(e){this.code=e.detail.code,this.validateCombinedCode()}handleProceduresChange(e){this.proceduresCode=e.detail.code,this.userProcedures=this.syntaxService.extractProcedures(this.proceduresCode),this.validateCombinedCode()}validateCombinedCode(){const e=`${this.proceduresCode}\n${this.code}`;this.errors=this.syntaxService.validate(e)}handleViewChange(e){this.viewMode=e.detail.view}handleBoundaryModeChange(e){const{mode:t}=e.detail;this.appState.setBoundaryMode(t)}async handleRun(){if(this.validateCombinedCode(),this.errors.length>0)console.warn("Cannot run code with syntax errors: ",this.errors);else try{await this.interpreter.execute(this.code,this.proceduresCode)}catch(e){console.error("[GéoTortue NG] Execution error:",e),alert("Error executing GéoTortue commands")}}handleClear(){this.turtleRepo.clear();const e=d.getInstance(),t=e.resolve(h.GeometryService),a=e.resolve(h.TurtleRepository).getNextId();e.resolve(h.ProcedureRegistry).clear();const r=new C(a,t);this.turtleRepo.save(r)}async handleSaveProject(){try{await this.projectService.saveProject({code:this.code,procedures:[this.proceduresCode]}),alert("Project saved!")}catch(e){console.error(e),alert("Failed to save project")}}async handleOpenProject(){try{const{code:e,procedures:t}=await this.projectService.loadProject();e&&(this.code=e,this.proceduresCode=t?.[0]??""),alert("Project loaded!")}catch(e){console.error(e)}}async handleDslChange(e){const{oldLang:t,newLang:a}=e.detail;try{const e=await this.langService.translateScript(this.code,t,a);this.code=e;const r=await this.langService.translateScript(this.proceduresCode,t,a);this.proceduresCode=r}catch(r){console.error("Failed to translate DSL:",r)}}render(){return r`
      <header class="header">
        <h1 class="sr-only">${__name(e=>this.langService.translate(e),"t")("app.title")}</h1>
        <gtn-toolbar
          .currentView=${this.viewMode}
          .currentBoundaryMode=${this.currentBoundaryMode}
          @view-change=${this.handleViewChange}
          @run=${this.handleRun}
          @clear=${this.handleClear}
          @save-project=${this.handleSaveProject}
          @open-project=${this.handleOpenProject}
          @dsl-lang-change=${this.handleDslChange}
          @boundary-mode-change=${this.handleBoundaryModeChange}
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
    `}}Bi=is(Hi),qi=new WeakMap,Vi=new WeakMap,Zi=new WeakMap,Qi=new WeakMap,Yi=new WeakMap,Xi=new WeakMap,ps(Bi,4,"code",ji,GTNApp,qi),ps(Bi,4,"proceduresCode",Wi,GTNApp,Vi),ps(Bi,4,"errors",zi,GTNApp,Zi),ps(Bi,4,"viewMode",Fi,GTNApp,Qi),ps(Bi,4,"userProcedures",Ui,GTNApp,Yi),ps(Bi,4,"currentBoundaryMode",Mi,GTNApp,Xi),GTNApp=ps(Bi,0,"GTNApp",Ki,GTNApp),us(GTNApp,"styles",[U,t`
      ${a(":host{display:flex;flex-direction:column;height:100vh;width:100vw;overflow:hidden;background-color:#ecf0f1}.header{flex:0 0 auto;position:relative;z-index:1000}main{flex:1;display:block;overflow:hidden;position:relative;z-index:1}@media(max-width:800px){:host{display:flex}}gtn-workbench,gtn-sandbox{display:block;height:100%;width:100%}")}
    `]),hs(Bi,1,GTNApp);export{GTNApp};
//# sourceMappingURL=gtn-app-DR7RDusU.js.map
