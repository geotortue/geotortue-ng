var e=Object.defineProperty,__name=(t,n)=>e(t,"name",{value:n,configurable:!0});import{w as t,x as n,y as a,z as r,A as o,G as i,H as s,J as l,K as c,L as d,M as h}from"./vendor-K3vxh6Ug.js";import{G as p,a as u,t as g,D as b,b as _,c as m,d as v,e as T,f,g as y,T as x,h as w,i as G,N as C,j as k}from"./index-C4BV7tMW.js";import{D as S,V as E,R as L,E as $,a as A,b as R,o as N,k as F,i as M,c as I,C as O}from"./vendor-cm-BNW14fJ8.js";import{g as P}from"./vendor-antlr-DgrtpJlV.js";import"./vendor-math-q9_GgMwA.js";import"./vendor-three-DQZ8GlD2.js";var D=(e=>(e[e.GT_FORWARD=1]="GT_FORWARD",e[e.GT_BACKWARD=2]="GT_BACKWARD",e[e.GT_TURN_RIGHT=3]="GT_TURN_RIGHT",e[e.GT_TURN_LEFT=4]="GT_TURN_LEFT",e[e.GT_CLEAR_GRAPHICS=5]="GT_CLEAR_GRAPHICS",e[e.GT_RESET=6]="GT_RESET",e[e.GT_UNDO_DRAWING=7]="GT_UNDO_DRAWING",e[e.GT_HIDE_TURTLE=8]="GT_HIDE_TURTLE",e[e.GT_SHOW_TURTLE=9]="GT_SHOW_TURTLE",e[e.GT_PEN_UP=10]="GT_PEN_UP",e[e.GT_PEN_DOWN=11]="GT_PEN_DOWN",e[e.GT_PEN_COLOR=12]="GT_PEN_COLOR",e[e.GT_PEN_THICKNESS=13]="GT_PEN_THICKNESS",e[e.GT_DRAW_POINT=14]="GT_DRAW_POINT",e[e.GT_MIRROR=15]="GT_MIRROR",e[e.GT_TELEPORT=16]="GT_TELEPORT",e[e.GT_COMPASS=17]="GT_COMPASS",e[e.GT_AIM=18]="GT_AIM",e[e.GT_MIMIC=19]="GT_MIMIC",e[e.GT_ROTATE_RIGHT=20]="GT_ROTATE_RIGHT",e[e.GT_ROTATE_LEFT=21]="GT_ROTATE_LEFT",e[e.GT_ROTATE_UP=22]="GT_ROTATE_UP",e[e.GT_ROTATE_DOWN=23]="GT_ROTATE_DOWN",e[e.GT_ROTATE_XY=24]="GT_ROTATE_XY",e[e.GT_ROTATE_XZ=25]="GT_ROTATE_XZ",e[e.GT_ROTATE_YZ=26]="GT_ROTATE_YZ",e[e.GT_DRAW_CIRCLE=27]="GT_DRAW_CIRCLE",e[e.GT_DRAW_ARC=28]="GT_DRAW_ARC",e[e.GT_PLAY=29]="GT_PLAY",e[e.GT_SCORE=30]="GT_SCORE",e[e.GT_CONCERT=31]="GT_CONCERT",e[e.GT_FILL=32]="GT_FILL",e[e.GT_WRITE=33]="GT_WRITE",e[e.GT_SAY=34]="GT_SAY",e[e.GT_INIT=35]="GT_INIT",e[e.GT_WAIT=36]="GT_WAIT",e[e.GT_PAUSE=37]="GT_PAUSE",e[e.GT_STOP=38]="GT_STOP",e[e.GT_RETURN=39]="GT_RETURN",e[e.GT_MANIPULATE_GRAPH=40]="GT_MANIPULATE_GRAPH",e[e.GT_SNAPSHOT=41]="GT_SNAPSHOT",e[e.GT_EXECUTE=42]="GT_EXECUTE",e[e.GT_DELETE=43]="GT_DELETE",e[e.GT_GLOBAL=44]="GT_GLOBAL",e[e.GT_DISPLAY=45]="GT_DISPLAY",e[e.GT_WRAP=46]="GT_WRAP",e[e.GT_WINDOW=47]="GT_WINDOW",e[e.GT_FENCE=48]="GT_FENCE",e[e.GT_REPEAT=49]="GT_REPEAT",e[e.GT_WHILE=50]="GT_WHILE",e[e.GT_FOR_EACH=51]="GT_FOR_EACH",e[e.GT_FROM=52]="GT_FROM",e[e.GT_TO=53]="GT_TO",e[e.GT_IN_LIST=54]="GT_IN_LIST",e[e.GT_IF=55]="GT_IF",e[e.GT_THEN=56]="GT_THEN",e[e.GT_ELSE=57]="GT_ELSE",e[e.GT_SELECT=58]="GT_SELECT",e[e.GT_FUNCTION_DEF=59]="GT_FUNCTION_DEF",e[e.GT_ASK_FOR_VALUE=60]="GT_ASK_FOR_VALUE",e[e.GT_PROCEDURE_START=61]="GT_PROCEDURE_START",e[e.GT_PROCEDURE_END=62]="GT_PROCEDURE_END",e[e.GT_IDENTIFIER=63]="GT_IDENTIFIER",e[e.GT_WORD=64]="GT_WORD",e[e.GT_INTEGER_LITERAL=65]="GT_INTEGER_LITERAL",e[e.GT_FLOATING_POINT_LITERAL=66]="GT_FLOATING_POINT_LITERAL",e[e.GT_STRING_LITERAL=67]="GT_STRING_LITERAL",e[e.GT_STATEMENT_SEPARATOR=68]="GT_STATEMENT_SEPARATOR",e[e.GT_ASSIGN=69]="GT_ASSIGN",e[e.GT_COMMA=70]="GT_COMMA",e[e.GT_LEFT_SQUARE_BRACKET=71]="GT_LEFT_SQUARE_BRACKET",e[e.GT_RIGHT_SQUARE_BRACKET=72]="GT_RIGHT_SQUARE_BRACKET",e[e.GT_LEFT_PARENTHESIS=73]="GT_LEFT_PARENTHESIS",e[e.GT_RIGHT_PARENTHESIS=74]="GT_RIGHT_PARENTHESIS",e[e.GT_COLON=75]="GT_COLON",e[e.GT_GREATER_THAN=76]="GT_GREATER_THAN",e[e.GT_LESS_THAN=77]="GT_LESS_THAN",e[e.GT_EQUAL=78]="GT_EQUAL",e[e.GT_LESS_OR_EQUAL=79]="GT_LESS_OR_EQUAL",e[e.GT_GREATER_OR_EQUAL=80]="GT_GREATER_OR_EQUAL",e[e.GT_NOT_EQUAL=81]="GT_NOT_EQUAL",e[e.GT_LOGICAL_AND=82]="GT_LOGICAL_AND",e[e.GT_LOGICAL_OR=83]="GT_LOGICAL_OR",e[e.GT_PLUS=84]="GT_PLUS",e[e.GT_MINUS=85]="GT_MINUS",e[e.GT_MULTIPLY=86]="GT_MULTIPLY",e[e.GT_DOT=87]="GT_DOT",e[e.GT_DIVIDE=88]="GT_DIVIDE",e[e.GT_MODULO=89]="GT_MODULO",e[e.GT_LOGICAL_NOT=90]="GT_LOGICAL_NOT",e[e.GT_POWER=91]="GT_POWER",e[e.GT_CROSS_PRODUCT=92]="GT_CROSS_PRODUCT",e[e.GT_NEW_LINE=93]="GT_NEW_LINE",e[e.GT_HORIZONTAL_WHITESPACE=94]="GT_HORIZONTAL_WHITESPACE",e[e.GT_LINE_COMMENT_HASH=95]="GT_LINE_COMMENT_HASH",e[e.GT_LINE_COMMENT_SLASH=96]="GT_LINE_COMMENT_SLASH",e[e.GT_BLOCK_COMMENT=97]="GT_BLOCK_COMMENT",e))(D||{});const U={1:"GT_FORWARD",2:"GT_BACKWARD",3:"GT_TURN_RIGHT",4:"GT_TURN_LEFT",5:"GT_CLEAR_GRAPHICS",6:"GT_RESET",7:"GT_UNDO_DRAWING",8:"GT_HIDE_TURTLE",9:"GT_SHOW_TURTLE",10:"GT_PEN_UP",11:"GT_PEN_DOWN",12:"GT_PEN_COLOR",13:"GT_PEN_THICKNESS",14:"GT_DRAW_POINT",15:"GT_MIRROR",16:"GT_TELEPORT",17:"GT_COMPASS",18:"GT_AIM",19:"GT_MIMIC",20:"GT_ROTATE_RIGHT",21:"GT_ROTATE_LEFT",22:"GT_ROTATE_UP",23:"GT_ROTATE_DOWN",24:"GT_ROTATE_XY",25:"GT_ROTATE_XZ",26:"GT_ROTATE_YZ",27:"GT_DRAW_CIRCLE",28:"GT_DRAW_ARC",29:"GT_PLAY",30:"GT_SCORE",31:"GT_CONCERT",32:"GT_FILL",33:"GT_WRITE",34:"GT_SAY",35:"GT_INIT",36:"GT_WAIT",37:"GT_PAUSE",38:"GT_STOP",39:"GT_RETURN",40:"GT_MANIPULATE_GRAPH",41:"GT_SNAPSHOT",42:"GT_EXECUTE",43:"GT_DELETE",44:"GT_GLOBAL",45:"GT_DISPLAY",46:"GT_WRAP",47:"GT_WINDOW",48:"GT_FENCE",49:"GT_REPEAT",50:"GT_WHILE",51:"GT_FOR_EACH",52:"GT_FROM",53:"GT_TO",54:"GT_IN_LIST",55:"GT_IF",56:"GT_THEN",57:"GT_ELSE",58:"GT_SELECT",59:"GT_FUNCTION_DEF",60:"GT_ASK_FOR_VALUE",61:"GT_PROCEDURE_START",62:"GT_PROCEDURE_END",68:";",69:":=",70:",",71:"[",72:"]",73:"(",74:")",75:":",76:">",77:"<",78:"=",79:"<=",80:">=",81:"!=",82:"&&",83:"||",84:"+",85:"-",86:"*",87:".",88:"/",89:"%",90:"!",91:"^",92:"^^"};function getLiteralName(e){return U[e]}__name(getLiteralName,"getLiteralName");const z=t`
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
`,H=t`
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
`;class UiLanguageController{static{__name(this,"UiLanguageController")}host;languageService;unsubscribe;constructor(e){this.host=e,this.languageService=p.getInstance().resolve(u.LanguageService),e.addController(this)}hostConnected(){this.unsubscribe=this.languageService.subscribeUiListeners(()=>{this.host.requestUpdate()})}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null)}}var j,W,B,K,q,Z,V,Q,Y,X,J,ee,te,ne,ae,re=Object.create,oe=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,se=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$f"),le=__name(e=>{throw TypeError(e)},"__typeError$f"),ce=__name((e,t,n)=>t in e?oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,"__defNormalProp$f"),de=__name((e,t)=>oe(e,"name",{value:t,configurable:!0}),"__name$f"),he=__name(e=>[,,,re(e?.[se("metadata")]??null)],"__decoratorStart$f"),pe=["class","method","getter","setter","accessor","field","value","get","set"],ue=__name(e=>void 0!==e&&"function"!=typeof e?le("Function expected"):e,"__expectFn$f"),ge=__name((e,t,n,a,r)=>({kind:pe[e],name:t,metadata:a,addInitializer:__name(e=>n._?le("Already initialized"):r.push(ue(e||null)),"addInitializer")}),"__decoratorContext$f"),be=__name((e,t)=>ce(t,se("metadata"),e[3]),"__decoratorMetadata$f"),_e=__name((e,t,n,a)=>{for(var r=0,o=e[t>>1],i=o&&o.length;r<i;r++)1&t?o[r].call(n):a=o[r].call(n,a);return a},"__runInitializers$f"),me=__name((e,t,n,a,r,o)=>{var i,s,l,c,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,b=pe[h+5],_=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(r=r.prototype),h<5&&(h>3||!u)&&ie(h<4?r:{get[n](){return ye(this,o)},set[n](e){return we(this,o,e)}},n));h?u&&h<4&&de(o,(h>2?"set ":h>1?"get ":"")+n):de(r,n);for(var T=a.length-1;T>=0;T--)c=ge(h,n,l={},e[3],m),h&&(c.static=p,c.private=u,d=c.access={has:u?e=>fe(r,e):e=>n in e},3^h&&(d.get=u?e=>(1^h?ye:Ge)(e,r,4^h?o:v.get):e=>e[n]),h>2&&(d.set=u?(e,t)=>we(e,r,t,4^h?o:v.set):(e,t)=>e[n]=t)),s=(0,a[T])(h?h<4?u?o:v[b]:h>4?void 0:{get:v.get,set:v.set}:r,c),l._=1,4^h||void 0===s?ue(s)&&(h>4?_.unshift(s):h?u?o=s:v[b]=s:r=s):"object"!=typeof s||null===s?le("Object expected"):(ue(i=s.get)&&(v.get=i),ue(i=s.set)&&(v.set=i),ue(i=s.init)&&_.unshift(i));return h||be(e,r),v&&oe(r,n,v),u?4^h?o:v:r},"__decorateElement$f"),ve=__name((e,t,n)=>ce(e,"symbol"!=typeof t?t+"":t,n),"__publicField$9"),Te=__name((e,t,n)=>t.has(e)||le("Cannot "+n),"__accessCheck$9"),fe=__name((e,t)=>Object(t)!==t?le('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$9"),ye=__name((e,t,n)=>(Te(e,t,"read from private field"),n?n.call(e):t.get(e)),"__privateGet$9"),xe=__name((e,t,n)=>t.has(e)?le("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),"__privateAdd$9"),we=__name((e,t,n,a)=>(Te(e,t,"write to private field"),a?a.call(e,n):t.set(e,n),n),"__privateSet$9"),Ge=__name((e,t,n)=>(Te(e,t,"access private method"),n),"__privateMethod$9");Q=[i("gtn-toolbar")];class GTNToolbar extends(V=o,Z=[s({type:String})],q=[s({type:String})],K=[s({type:String})],B=[s({type:String})],W=[s({type:String})],j=[s({type:String})],V){static{__name(this,"GTNToolbar")}constructor(){super(),ve(this,"langService"),ve(this,"appState"),ve(this,"langController",new UiLanguageController(this)),xe(this,X,_e(Y,8,this,g(b))),_e(Y,11,this),xe(this,J,_e(Y,12,this,_(b))),_e(Y,15,this),xe(this,ee,_e(Y,16,this,v)),_e(Y,19,this),xe(this,te,_e(Y,20,this,T)),_e(Y,23,this),xe(this,ne,_e(Y,24,this,"SANDBOX")),_e(Y,27,this),xe(this,ae,_e(Y,28,this,f)),_e(Y,31,this);const e=p.getInstance();this.langService=e.resolve(u.LanguageService),this.appState=e.resolve(u.ApplicationState),this.currentUiLang=this.langService.getUiLanguage(),this.currentDslLang=this.langService.getDslLanguage(),this.appState.subscribe(()=>{this.currentMode=this.appState.mode,this.currentCamera=this.appState.cameraType})}handleRun(){this.dispatchEvent(new CustomEvent("run"))}handleClear(){this.dispatchEvent(new CustomEvent("clear"))}handleSave(){this.dispatchEvent(new CustomEvent("save-project"))}handleOpen(){this.dispatchEvent(new CustomEvent("open-project"))}async handleUiLangChange(e){const t=e.target,n=g(t.value);await this.langService.setUiLanguage(n),this.currentUiLang=n}async handleDslLangChange(e){const t=e.target,n=this.currentDslLang,a=_(t.value);await this.langService.setDslLanguage(a),this.currentDslLang=a,this.dispatchEvent(new CustomEvent("dsl-lang-change",{detail:{oldLang:n,newLang:a},bubbles:!0,composed:!0}))}handleToggleMode(){this.appState.toggleMode()}handleToggleCamera(){this.appState.toggleCameraType()}handleViewChange(e){this.currentView=e,this.dispatchEvent(new CustomEvent("view-change",{detail:{view:e},bubbles:!0,composed:!0}))}handleBoundaryModeChange(e){const t=e.target.value;this.currentBoundaryMode=t,this.dispatchEvent(new CustomEvent("boundary-mode-change",{detail:{mode:t},bubbles:!0,composed:!0}))}render(){const e=__name(e=>this.langService.translate(e),"t"),t="EDITOR"===this.currentView,n="SANDBOX"===this.currentView;return this.currentUiLang=this.langService.getUiLanguage(),this.currentDslLang=this.langService.getDslLanguage(),r`
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
            class=${a({active:t})}
            aria-pressed=${t}
            @click=${()=>this.handleViewChange("EDITOR")}
            title="${e("mode.editor")}"
          >
            <gtn-icon icon="coding-wand-vibrant"></gtn-icon>
            ${e("mode.editor")}
          </button>
          <button
            class=${a({active:n})}
            aria-pressed=${n}
            @click=${()=>this.handleViewChange("SANDBOX")}
            title="${e("mode.sandbox")}"
          >
            <gtn-icon icon="sandbox-beach-ball-vibrant"></gtn-icon>
            ${e("mode.sandbox")}
          </button>
        </div>

        ${t?r`
              <div class="group">
                <button @click=${this.handleOpen} title="${e("toolbar.open_project")}">
                  <span class="material-icons">folder_open</span>
                </button>
                <button @click=${this.handleSave} title="${e("toolbar.save_project")}">
                  <span class="material-icons">save</span>
                </button>

                <div class="separator"></div>

                <button class="primary" @click=${this.handleRun} title="Ctrl+Enter">
                  <gtn-icon icon="media-playback-run-vibrant"></gtn-icon> ${e("toolbar.run")}
                </button>
                <button class="danger" @click=${this.handleClear}>
                  <gtn-icon icon="edit-clear-all-vibrant"></gtn-icon> ${e("toolbar.clear")}
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

          <span class="language">
            <span class="icon"
              ><gtn-icon icon="preferences-workbench-locale-vibrant"></gtn-icon
            ></span>
            <span class="label">${e("toolbar.language")}</span>
          </span>

          <div class="selector-wrapper">
            <label for="select-ui" class="label">${e("toolbar.selector.ui")}</label>
            <select id="select-ui" @change=${this.handleUiLangChange} .value=${this.currentUiLang}>
              <option value="fr">${e("languages.fr")}</option>
              <option value="en">${e("languages.en")}</option>
            </select>
          </div>
          ${t?r`
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
              ${m.map(t=>r`<option value=${t}>${e(`boundary.${t.toLowerCase()}`)}</option>`)}
            </select>
          </div>
        </div>
      </div>
    `}}function createAntlrHighlighter(e,t){const n=e.getTokenStyleMap(),a=new x(t),r=S.mark({class:"cm-gt-user-procedure"});return E.fromClass(class{decorations;constructor(e){this.decorations=this.buildDecorations(e)}update(e){(e.docChanged||e.viewportChanged)&&(this.decorations=this.buildDecorations(e.view))}buildDecorations(t){const o=new L,i=t.state.doc.toString(),s=new Set(e.getExtractedProcedures().map(e=>e.toLowerCase())),l=P.fromString(i),c=new y(l);c.removeErrorListeners();const d=a.getRefinedTokens(()=>c.getAllTokens());for(const e of d){const t=e.text?.toLowerCase()||"";if(t&&s.has(t)){o.add(e.start,e.stop+1,r);continue}const a=n.get(e.type);a&&o.add(e.start,e.stop+1,S.mark({class:`cm-gt-${a}`}))}return o.finish()}},{decorations:__name(e=>e.decorations,"decorations")})}Y=he(V),X=new WeakMap,J=new WeakMap,ee=new WeakMap,te=new WeakMap,ne=new WeakMap,ae=new WeakMap,me(Y,4,"currentUiLang",Z,GTNToolbar,X),me(Y,4,"currentDslLang",q,GTNToolbar,J),me(Y,4,"currentMode",K,GTNToolbar,ee),me(Y,4,"currentCamera",B,GTNToolbar,te),me(Y,4,"currentView",W,GTNToolbar,ne),me(Y,4,"currentBoundaryMode",j,GTNToolbar,ae),GTNToolbar=me(Y,0,"GTNToolbar",Q,GTNToolbar),ve(GTNToolbar,"styles",[H,t`
      ${n(":host{display:block;width:100%;height:50px;z-index:100}.toolbar-wrapper{display:flex;justify-content:space-between;align-items:center;padding:0 1rem;background-color:#2c3e50;color:#fff;height:100%;box-shadow:0 2px 5px #0003;overflow:visible}.group{display:flex;gap:10px;align-items:center;overflow:visible;position:relative}.group .toolbar-icon{width:42px;height:42px;object-fit:contain}.group[data-tooltip]{position:relative}.group[data-tooltip]:after{content:attr(data-tooltip);position:absolute;transform:translateY(48px);margin-left:8px;padding:10px 16px;font-size:.9rem;border-radius:6px;background-color:#333;color:#fff;white-space:nowrap;z-index:1000;box-shadow:0 2px 8px #0000004d;opacity:0;display:none;visibility:hidden;transition:opacity .2s ease;pointer-events:none}.group[data-tooltip]:before{left:20px;transform:none}.group[data-tooltip]:hover:after{display:block;opacity:1;visibility:visible}.label{font-size:.7rem;font-weight:600;color:#bdc3c7;margin-bottom:2px;text-transform:uppercase;letter-spacing:.5px}.selector-wrapper{display:flex;flex-direction:column;align-items:center;position:relative;overflow:visible}.separator{width:1px;height:25px;background:#46607a;margin:0 5px}button{background:#34495e;border:1px solid #46607a;color:#fff;padding:5px 12px;border-radius:4px;cursor:pointer;display:flex;align-items:center;gap:5px;font-size:.9rem;transition:all .1s cubic-bezier(.4,0,.2,1)}button.primary{background:#1b5e20;border:2px solid #2E7D32;border-radius:8px;padding:8px;cursor:pointer;transition:transform .1s ease}button.primary:hover,button.primary:active{transform:scale(.95);background:#144317}button.primary:active{transform:translateY(1px);box-shadow:inset 0 3px 6px #0000004d;background:#1e8449;border-color:#145a32}button:active{transform:translateY(1px);box-shadow:inset 0 3px 6px #0006;background:#2c3e50;border-color:#1a252f}button.danger{background:#b71c1c;border:2px solid #D32F2F;border-radius:8px;padding:8px;color:#fff}button.danger:active{transform:translateY(1px);box-shadow:inset 0 3px 6px #0006;background:#7f0000;border-color:#560000}select{background:#34495e;color:#fff;border:1px solid #46607a;padding:2px 5px;border-radius:4px;cursor:pointer;font-size:.85rem;min-width:50px;position:relative;z-index:10}.title{font-weight:700;font-family:Inconsolata,monospace;font-size:1.2rem}.mode-badge{font-weight:900;color:#f1c40f;min-width:30px;justify-content:center}")}

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

      .language {
        gap: 2px;
      }

      .icon {
        // margin-right: 8px;
        // width: 20px;
        // width: 18px;
        text-align: center;
        display: inline-block;

        gtn-icon {
          // font-size: 16px;
        }
      }
    `]),_e(Y,1,GTNToolbar),__name(createAntlrHighlighter,"createAntlrHighlighter");const Ce=$.baseTheme({".cm-gt-keyword":{color:"#c678dd",fontWeight:"bold"},".cm-gt-command":{color:"#61afef"},".cm-gt-number":{color:"#d19a66"},".cm-gt-string":{color:"#98c379"},".cm-gt-variable":{color:"#e06c75"},".cm-gt-comment":{color:"#5c6370",fontStyle:"italic"},".cm-gt-operator":{color:"#56b6c2"},".cm-gt-user-procedure":{color:"#c678dd",fontWeight:"bold"}});var ke,Se,Ee,Le,$e,Ae,Re,Ne=Object.create,Fe=Object.defineProperty,Me=Object.getOwnPropertyDescriptor,Ie=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$e"),Oe=__name(e=>{throw TypeError(e)},"__typeError$e"),Pe=__name((e,t,n)=>t in e?Fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,"__defNormalProp$e"),De=__name((e,t)=>Fe(e,"name",{value:t,configurable:!0}),"__name$e"),Ue=__name(e=>[,,,Ne(e?.[Ie("metadata")]??null)],"__decoratorStart$e"),ze=["class","method","getter","setter","accessor","field","value","get","set"],He=__name(e=>void 0!==e&&"function"!=typeof e?Oe("Function expected"):e,"__expectFn$e"),je=__name((e,t,n,a,r)=>({kind:ze[e],name:t,metadata:a,addInitializer:__name(e=>n._?Oe("Already initialized"):r.push(He(e||null)),"addInitializer")}),"__decoratorContext$e"),We=__name((e,t)=>Pe(t,Ie("metadata"),e[3]),"__decoratorMetadata$e"),Be=__name((e,t,n,a)=>{for(var r=0,o=e[t>>1],i=o&&o.length;r<i;r++)1&t?o[r].call(n):a=o[r].call(n,a);return a},"__runInitializers$e"),Ke=__name((e,t,n,a,r,o)=>{var i,s,l,c,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,b=ze[h+5],_=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(r=r.prototype),h<5&&(h>3||!u)&&Me(h<4?r:{get[n](){return Qe(this,o)},set[n](e){return Xe(this,o,e)}},n));h?u&&h<4&&De(o,(h>2?"set ":h>1?"get ":"")+n):De(r,n);for(var T=a.length-1;T>=0;T--)c=je(h,n,l={},e[3],m),h&&(c.static=p,c.private=u,d=c.access={has:u?e=>Ve(r,e):e=>n in e},3^h&&(d.get=u?e=>(1^h?Qe:Je)(e,r,4^h?o:v.get):e=>e[n]),h>2&&(d.set=u?(e,t)=>Xe(e,r,t,4^h?o:v.set):(e,t)=>e[n]=t)),s=(0,a[T])(h?h<4?u?o:v[b]:h>4?void 0:{get:v.get,set:v.set}:r,c),l._=1,4^h||void 0===s?He(s)&&(h>4?_.unshift(s):h?u?o=s:v[b]=s:r=s):"object"!=typeof s||null===s?Oe("Object expected"):(He(i=s.get)&&(v.get=i),He(i=s.set)&&(v.set=i),He(i=s.init)&&_.unshift(i));return h||We(e,r),v&&Fe(r,n,v),u?4^h?o:v:r},"__decorateElement$e"),qe=__name((e,t,n)=>Pe(e,"symbol"!=typeof t?t+"":t,n),"__publicField$8"),Ze=__name((e,t,n)=>t.has(e)||Oe("Cannot "+n),"__accessCheck$8"),Ve=__name((e,t)=>Object(t)!==t?Oe('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$8"),Qe=__name((e,t,n)=>(Ze(e,t,"read from private field"),n?n.call(e):t.get(e)),"__privateGet$8"),Ye=__name((e,t,n)=>t.has(e)?Oe("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),"__privateAdd$8"),Xe=__name((e,t,n,a)=>(Ze(e,t,"write to private field"),a?a.call(e,n):t.set(e,n),n),"__privateSet$8"),Je=__name((e,t,n)=>(Ze(e,t,"access private method"),n),"__privateMethod$8");Le=[i("gtn-editor")];class GTNEditor extends(Ee=o,Se=[s({type:String})],ke=[l("#editor-container")],Ee){static{__name(this,"GTNEditor")}constructor(){super(),Ye(this,Ae,Be($e,8,this)),Be($e,11,this),Ye(this,Re,Be($e,12,this)),Be($e,15,this),qe(this,"editor"),qe(this,"langService"),qe(this,"langController",new UiLanguageController(this)),qe(this,"languageCompartment",new O),qe(this,"syntaxService");const e=p.getInstance();this.langService=e.resolve(u.LanguageService),this.syntaxService=e.resolve(u.SyntaxService),this.code=""}firstUpdated(){this.initEditor()}disconnectedCallback(){super.disconnectedCallback(),this.editor?.destroy()}initEditor(){const e=createAntlrHighlighter(this.syntaxService,this.langService),t=A.create({doc:this.code,extensions:[R,F.of([M]),N,Ce,e,this.languageCompartment.of([e]),$.updateListener.of(e=>{e.docChanged&&(this.code=e.state.doc.toString(),this.onEditorChange(this.code))})]});this.editor=new $({state:t,parent:this.editorContainer}),this.updateLanguageFeatures()}onEditorChange(e){this.dispatchEvent(new CustomEvent("code-change",{detail:{code:e},bubbles:!0,composed:!0}))}updated(e){super.updated(e),this.updateLanguageFeatures(),this.translateCodeInEditor(e)}translateCodeInEditor(e){if(!e.has("code")||!this.editor)return;const t=this.editor.state.doc.toString();t!==this.code&&this.editor.dispatch({changes:{from:0,to:t.length,insert:this.code}})}updateLanguageFeatures(){if(!this.editor)return;const e=this.langService.getAllKeywords(),t=I({override:[t=>{const n=t.matchBefore(/\w*/);return!n||n.from===n.to&&!t.explicit?null:{from:n.from,options:e.map(e=>({label:e,type:"keyword"}))}}]});this.editor.dispatch({effects:this.languageCompartment.reconfigure([t,createAntlrHighlighter(this.syntaxService,this.langService)])})}render(){return r`<div id="editor-container"></div>`}}$e=Ue(Ee),Ae=new WeakMap,Re=new WeakMap,Ke($e,4,"code",Se,GTNEditor,Ae),Ke($e,4,"editorContainer",ke,GTNEditor,Re),GTNEditor=Ke($e,0,"GTNEditor",Le,GTNEditor),qe(GTNEditor,"styles",t`
    ${n(":host{display:block;font-family:var(--font-code);height:100%;overflow:hidden;font-size:14px}#editor-container,.cm-editor{height:100%}.cm-editor .cm-scroller{font-family:inherit}")}
  `),Be($e,1,GTNEditor);var et,tt,nt,at,rt,ot=Object.create,it=Object.defineProperty,st=Object.getOwnPropertyDescriptor,lt=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$d"),ct=__name(e=>{throw TypeError(e)},"__typeError$d"),dt=__name((e,t,n)=>t in e?it(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,"__defNormalProp$d"),ht=__name((e,t)=>it(e,"name",{value:t,configurable:!0}),"__name$d"),pt=__name(e=>[,,,ot(e?.[lt("metadata")]??null)],"__decoratorStart$d"),ut=["class","method","getter","setter","accessor","field","value","get","set"],gt=__name(e=>void 0!==e&&"function"!=typeof e?ct("Function expected"):e,"__expectFn$d"),bt=__name((e,t,n,a,r)=>({kind:ut[e],name:t,metadata:a,addInitializer:__name(e=>n._?ct("Already initialized"):r.push(gt(e||null)),"addInitializer")}),"__decoratorContext$d"),_t=__name((e,t)=>dt(t,lt("metadata"),e[3]),"__decoratorMetadata$d"),mt=__name((e,t,n,a)=>{for(var r=0,o=e[t>>1],i=o&&o.length;r<i;r++)1&t?o[r].call(n):a=o[r].call(n,a);return a},"__runInitializers$d"),vt=__name((e,t,n,a,r,o)=>{var i,s,l,c,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,b=ut[h+5],_=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(r=r.prototype),h<5&&(h>3||!u)&&st(h<4?r:{get[n](){return xt(this,o)},set[n](e){return Gt(this,o,e)}},n));h?u&&h<4&&ht(o,(h>2?"set ":h>1?"get ":"")+n):ht(r,n);for(var T=a.length-1;T>=0;T--)c=bt(h,n,l={},e[3],m),h&&(c.static=p,c.private=u,d=c.access={has:u?e=>yt(r,e):e=>n in e},3^h&&(d.get=u?e=>(1^h?xt:Ct)(e,r,4^h?o:v.get):e=>e[n]),h>2&&(d.set=u?(e,t)=>Gt(e,r,t,4^h?o:v.set):(e,t)=>e[n]=t)),s=(0,a[T])(h?h<4?u?o:v[b]:h>4?void 0:{get:v.get,set:v.set}:r,c),l._=1,4^h||void 0===s?gt(s)&&(h>4?_.unshift(s):h?u?o=s:v[b]=s:r=s):"object"!=typeof s||null===s?ct("Object expected"):(gt(i=s.get)&&(v.get=i),gt(i=s.set)&&(v.set=i),gt(i=s.init)&&_.unshift(i));return h||_t(e,r),v&&it(r,n,v),u?4^h?o:v:r},"__decorateElement$d"),Tt=__name((e,t,n)=>dt(e,"symbol"!=typeof t?t+"":t,n),"__publicField$7"),ft=__name((e,t,n)=>t.has(e)||ct("Cannot "+n),"__accessCheck$7"),yt=__name((e,t)=>Object(t)!==t?ct('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$7"),xt=__name((e,t,n)=>(ft(e,t,"read from private field"),n?n.call(e):t.get(e)),"__privateGet$7"),wt=__name((e,t,n)=>t.has(e)?ct("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),"__privateAdd$7"),Gt=__name((e,t,n,a)=>(ft(e,t,"write to private field"),a?a.call(e,n):t.set(e,n),n),"__privateSet$7"),Ct=__name((e,t,n)=>(ft(e,t,"access private method"),n),"__privateMethod$7");nt=[i("gtn-canvas")];class GTNCanvas extends(tt=o,et=[l("#render-container")],tt){static{__name(this,"GTNCanvas")}constructor(){super(),wt(this,rt,mt(at,8,this)),mt(at,11,this),Tt(this,"turtleRepo"),Tt(this,"appState"),Tt(this,"renderLoop"),Tt(this,"renderer2D"),Tt(this,"renderer3D"),Tt(this,"currentRenderer",null),Tt(this,"unsubscribeLoop",null);const e=p.getInstance();this.turtleRepo=e.resolve(u.TurtleRepository),this.appState=e.resolve(u.ApplicationState),this.renderLoop=e.resolve(u.RenderLoop),this.renderer2D=e.resolve(u.Renderer2D),this.renderer3D=e.resolve(u.Renderer3D)}firstUpdated(){this.syncRenderer(),this.appState.subscribe(()=>{this.syncRenderer()}),window.addEventListener("resize",()=>this.handleResize()),this.unsubscribeLoop=this.renderLoop.subscribe(()=>{this.currentRenderer&&this.currentRenderer.render(this.turtleRepo)}),this.renderLoop.start()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeLoop&&(this.unsubscribeLoop(),this.unsubscribeLoop=null),this.renderLoop.stop(),window.removeEventListener("resize",()=>this.handleResize()),this.currentRenderer&&this.currentRenderer.dispose()}syncRenderer(){const e=this.appState.mode,t=this.appState.cameraType,n="3D"===e;if((n!==this.currentRenderer instanceof w||!this.currentRenderer)&&(this.currentRenderer&&this.currentRenderer.dispose(),this.currentRenderer="3D"===e?new w:new G,this.container)){this.currentRenderer.attach(this.container);const e=this.container.getBoundingClientRect();this.turtleRepo.setViewportSize(e.width,e.height)}n&&this.currentRenderer instanceof w&&this.currentRenderer.setCameraType(t)}handleResize(){if(!this.currentRenderer||!this.container)return;const e=this.container.getBoundingClientRect();this.currentRenderer.resize(e.width,e.height),this.turtleRepo.setViewportSize(e.width,e.height)}render(){return r`<div id="render-container"></div>`}}vt(at=pt(tt),4,"container",et,GTNCanvas,rt=new WeakMap),GTNCanvas=vt(at,0,"GTNCanvas",nt,GTNCanvas),Tt(GTNCanvas,"styles",t`
    ${n(":host{display:block;width:100%;height:100%;overflow:hidden;background:#f0f0f0}#render-container{width:100%;height:100%}")}
  `),mt(at,1,GTNCanvas);var kt,St,Et,Lt=Object.create,$t=Object.defineProperty,At=Object.getOwnPropertyDescriptor,Rt=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$c"),Nt=__name(e=>{throw TypeError(e)},"__typeError$c"),Ft=__name((e,t,n)=>t in e?$t(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,"__defNormalProp$c"),Mt=__name((e,t)=>$t(e,"name",{value:t,configurable:!0}),"__name$c"),It=__name(e=>[,,,Lt(e?.[Rt("metadata")]??null)],"__decoratorStart$c"),Ot=["class","method","getter","setter","accessor","field","value","get","set"],Pt=__name(e=>void 0!==e&&"function"!=typeof e?Nt("Function expected"):e,"__expectFn$c"),Dt=__name((e,t,n,a,r)=>({kind:Ot[e],name:t,metadata:a,addInitializer:__name(e=>n._?Nt("Already initialized"):r.push(Pt(e||null)),"addInitializer")}),"__decoratorContext$c"),Ut=__name((e,t)=>Ft(t,Rt("metadata"),e[3]),"__decoratorMetadata$c"),zt=__name((e,t,n,a)=>{for(var r=0,o=e[t>>1],i=o&&o.length;r<i;r++)o[r].call(n);return a},"__runInitializers$c"),Ht=__name((e,t,n,a,r,o)=>{var i,s,l,c=7&t,d=e[0]||(e[0]=[]),h=c&&(r=r.prototype,c<5&&(c>3||!0)&&At(r,n));Mt(r,n);for(var p=a.length-1;p>=0;p--)l=Dt(c,n,s={},e[3],d),i=(0,a[p])(r,l),s._=1,Pt(i)&&(r=i);return Ut(e,r),h&&$t(r,n,h),r},"__decorateElement$c");kt=[i("dev-reset-button")];class DevResetButton extends(Et=o){static{__name(this,"DevResetButton")}static styles=t`
    ${n("button{background-color:#f44;color:#fff;border:none;padding:8px 16px;border-radius:4px;cursor:pointer;font-weight:700}button:hover{background-color:#c00}")}
  `;resetApp(){localStorage.clear(),sessionStorage.clear(),window.location.reload()}render(){return r` <button @click="${this.resetApp}">Reset Local Data & Reload</button> `}}zt(St=It(Et),1,DevResetButton=Ht(St,0,"DevResetButton",kt,DevResetButton));var jt,Wt,Bt,Kt,qt,Zt=Object.create,Vt=Object.defineProperty,Qt=Object.getOwnPropertyDescriptor,Yt=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$b"),Xt=__name(e=>{throw TypeError(e)},"__typeError$b"),Jt=__name((e,t,n)=>t in e?Vt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,"__defNormalProp$b"),en=__name((e,t)=>Vt(e,"name",{value:t,configurable:!0}),"__name$b"),tn=__name(e=>[,,,Zt(e?.[Yt("metadata")]??null)],"__decoratorStart$b"),nn=["class","method","getter","setter","accessor","field","value","get","set"],an=__name(e=>void 0!==e&&"function"!=typeof e?Xt("Function expected"):e,"__expectFn$b"),rn=__name((e,t,n,a,r)=>({kind:nn[e],name:t,metadata:a,addInitializer:__name(e=>n._?Xt("Already initialized"):r.push(an(e||null)),"addInitializer")}),"__decoratorContext$b"),on=__name((e,t)=>Jt(t,Yt("metadata"),e[3]),"__decoratorMetadata$b"),sn=__name((e,t,n,a)=>{for(var r=0,o=e[t>>1],i=o&&o.length;r<i;r++)1&t?o[r].call(n):a=o[r].call(n,a);return a},"__runInitializers$b"),ln=__name((e,t,n,a,r,o)=>{var i,s,l,c,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,b=nn[h+5],_=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(r=r.prototype),h<5&&(h>3||!u)&&Qt(h<4?r:{get[n](){return pn(this,o)},set[n](e){return gn(this,o,e)}},n));h?u&&h<4&&en(o,(h>2?"set ":h>1?"get ":"")+n):en(r,n);for(var T=a.length-1;T>=0;T--)c=rn(h,n,l={},e[3],m),h&&(c.static=p,c.private=u,d=c.access={has:u?e=>hn(r,e):e=>n in e},3^h&&(d.get=u?e=>(1^h?pn:bn)(e,r,4^h?o:v.get):e=>e[n]),h>2&&(d.set=u?(e,t)=>gn(e,r,t,4^h?o:v.set):(e,t)=>e[n]=t)),s=(0,a[T])(h?h<4?u?o:v[b]:h>4?void 0:{get:v.get,set:v.set}:r,c),l._=1,4^h||void 0===s?an(s)&&(h>4?_.unshift(s):h?u?o=s:v[b]=s:r=s):"object"!=typeof s||null===s?Xt("Object expected"):(an(i=s.get)&&(v.get=i),an(i=s.set)&&(v.set=i),an(i=s.init)&&_.unshift(i));return h||on(e,r),v&&Vt(r,n,v),u?4^h?o:v:r},"__decorateElement$b"),cn=__name((e,t,n)=>Jt(e,t+"",n),"__publicField$6"),dn=__name((e,t,n)=>t.has(e)||Xt("Cannot "+n),"__accessCheck$6"),hn=__name((e,t)=>Object(t)!==t?Xt('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$6"),pn=__name((e,t,n)=>(dn(e,t,"read from private field"),n?n.call(e):t.get(e)),"__privateGet$6"),un=__name((e,t,n)=>t.has(e)?Xt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),"__privateAdd$6"),gn=__name((e,t,n,a)=>(dn(e,t,"write to private field"),a?a.call(e,n):t.set(e,n),n),"__privateSet$6"),bn=__name((e,t,n)=>(dn(e,t,"access private method"),n),"__privateMethod$6");Bt=[i("gtn-error-toast")];class GTNErrorToast extends(Wt=o,jt=[s({type:Array})],Wt){static{__name(this,"GTNErrorToast")}constructor(){super(...arguments),un(this,qt,sn(Kt,8,this,[])),sn(Kt,11,this)}render(){return r`
      ${this.errors.map(e=>r`
          <div class="toast">
            <div class="header">
              <span>Syntax Error (Line ${e.line})</span>
            </div>
            <div class="msg">${e.message}</div>
          </div>
        `)}
    `}}ln(Kt=tn(Wt),4,"errors",jt,GTNErrorToast,qt=new WeakMap),cn(GTNErrorToast=ln(Kt,0,"GTNErrorToast",Bt,GTNErrorToast),"styles",t`
    ${n(":host{display:block;position:fixed;bottom:20px;right:20px;max-width:350px}.toast{background:#fff5f5;border-left:5px solid #f56565;box-shadow:0 4px 6px #0000001a;padding:12px 16px;margin-top:8px;border-radius:4px;animation:slideIn .3s ease-out}.header{font-weight:700;color:#c53030;display:flex;justify-content:space-between;font-size:.9em}.msg{font-size:.85em;margin-top:4px;color:#2d3748}@keyframes slideIn{0%{transform:translate(100%);opacity:0}to{transform:translate(0);opacity:1}}")}
  `),sn(Kt,1,GTNErrorToast);var _n,mn,vn,Tn=Object.create,fn=Object.defineProperty,yn=Object.getOwnPropertyDescriptor,xn=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$a"),wn=__name(e=>{throw TypeError(e)},"__typeError$a"),Gn=__name((e,t,n)=>t in e?fn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,"__defNormalProp$a"),Cn=__name((e,t)=>fn(e,"name",{value:t,configurable:!0}),"__name$a"),kn=__name(e=>[,,,Tn(e?.[xn("metadata")]??null)],"__decoratorStart$a"),Sn=["class","method","getter","setter","accessor","field","value","get","set"],En=__name(e=>void 0!==e&&"function"!=typeof e?wn("Function expected"):e,"__expectFn$a"),Ln=__name((e,t,n,a,r)=>({kind:Sn[e],name:t,metadata:a,addInitializer:__name(e=>n._?wn("Already initialized"):r.push(En(e||null)),"addInitializer")}),"__decoratorContext$a"),$n=__name((e,t)=>Gn(t,xn("metadata"),e[3]),"__decoratorMetadata$a"),An=__name((e,t,n,a)=>{for(var r=0,o=e[t>>1],i=o&&o.length;r<i;r++)o[r].call(n);return a},"__runInitializers$a"),Rn=__name((e,t,n,a,r,o)=>{var i,s,l,c=7&t,d=e[0]||(e[0]=[]),h=c&&(r=r.prototype,c<5&&(c>3||!0)&&yn(r,n));Cn(r,n);for(var p=a.length-1;p>=0;p--)l=Ln(c,n,s={},e[3],d),i=(0,a[p])(r,l),s._=1,En(i)&&(r=i);return $n(e,r),h&&fn(r,n,h),r},"__decorateElement$a");_n=[i("gtn-navigation-panel")];class GTNNavigationPanel extends(vn=o){static{__name(this,"GTNNavigationPanel")}static styles=t`
    :host {
      display: block;
      margin-bottom: 1rem;
    }
    .d-pad {
      display: grid;
      grid-template-columns: repeat(3, 48px); /* Fixed size for circular/square alignment */
      grid-template-rows: repeat(2, 48px);
      gap: 8px;
      margin: 10px auto;
      justify-content: center;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 48px;
        cursor: pointer;
        background: #3498db; /* Vibrant Blue */
        border: none;
        border-bottom: 4px solid #2980b9; /* 3D "Depth" shadow */
        border-radius: 12px;
        transition: all 0.1s ease;
        padding: 0;
      }

      button:hover {
        background: #5dade2;
        transform: translateY(-1px);
        border-bottom-width: 5px;
      }

      /* Tactile "Pressed" state */
      button:active {
        background: #2980b9;
        transform: translateY(3px);
        border-bottom-width: 1px;
        margin-bottom: 3px;
      }

      .center {
        visibility: hidden;
      }
    }
  `;langService;unsubscribeUiLang=null;constructor(){super(),this.langService=p.getInstance().resolve(u.LanguageService)}connectedCallback(){super.connectedCallback(),this.unsubscribeUiLang=this.langService.subscribeUiListeners(()=>{this.requestUpdate()})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeUiLang&&(this.unsubscribeUiLang(),this.unsubscribeUiLang=null)}emit(e){const t={action:e};this.dispatchEvent(new CustomEvent("move",{detail:t}))}render(){const e=__name(e=>this.langService.translate(e),"t");return r`
      <div class="d-pad">
        <div class="center"></div>
        <button
          @click=${()=>this.emit(D.GT_FORWARD)}
          title="${e("sandbox.tooltip.forward")}"
          aria-label="${e("sandbox.tooltip.forward")}"
        >
          <gtn-icon icon="go-up-vibrant"></gtn-icon>
        </button>
        <div class="center"></div>

        <button
          @click=${()=>this.emit(D.GT_TURN_LEFT)}
          title="${e("sandbox.tooltip.left")}"
          aria-label="${e("sandbox.tooltip.left")}"
        >
          <gtn-icon icon="go-left-vibrant"></gtn-icon>
        </button>
        <button
          @click=${()=>this.emit(D.GT_BACKWARD)}
          title="${e("sandbox.tooltip.backward")}"
          aria-label="${e("sandbox.tooltip.backward")}"
        >
          <gtn-icon icon="go-down-vibrant"></gtn-icon>
        </button>
        <button
          @click=${()=>this.emit(D.GT_TURN_RIGHT)}
          title="${e("sandbox.tooltip.right")}"
          aria-label="${e("sandbox.tooltip.right")}"
        >
          <gtn-icon icon="go-right-vibrant"></gtn-icon>
        </button>
      </div>
    `}}An(mn=kn(vn),1,GTNNavigationPanel=Rn(mn,0,"GTNNavigationPanel",_n,GTNNavigationPanel));var Nn,Fn,Mn,In,On,Pn=Object.create,Dn=Object.defineProperty,Un=Object.getOwnPropertyDescriptor,zn=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$9"),Hn=__name(e=>{throw TypeError(e)},"__typeError$9"),jn=__name((e,t,n)=>t in e?Dn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,"__defNormalProp$9"),Wn=__name((e,t)=>Dn(e,"name",{value:t,configurable:!0}),"__name$9"),Bn=__name(e=>[,,,Pn(e?.[zn("metadata")]??null)],"__decoratorStart$9"),Kn=["class","method","getter","setter","accessor","field","value","get","set"],qn=__name(e=>void 0!==e&&"function"!=typeof e?Hn("Function expected"):e,"__expectFn$9"),Zn=__name((e,t,n,a,r)=>({kind:Kn[e],name:t,metadata:a,addInitializer:__name(e=>n._?Hn("Already initialized"):r.push(qn(e||null)),"addInitializer")}),"__decoratorContext$9"),Vn=__name((e,t)=>jn(t,zn("metadata"),e[3]),"__decoratorMetadata$9"),Qn=__name((e,t,n,a)=>{for(var r=0,o=e[t>>1],i=o&&o.length;r<i;r++)1&t?o[r].call(n):a=o[r].call(n,a);return a},"__runInitializers$9"),Yn=__name((e,t,n,a,r,o)=>{var i,s,l,c,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,b=Kn[h+5],_=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(r=r.prototype),h<5&&(h>3||!u)&&Un(h<4?r:{get[n](){return ta(this,o)},set[n](e){return aa(this,o,e)}},n));h?u&&h<4&&Wn(o,(h>2?"set ":h>1?"get ":"")+n):Wn(r,n);for(var T=a.length-1;T>=0;T--)c=Zn(h,n,l={},e[3],m),h&&(c.static=p,c.private=u,d=c.access={has:u?e=>ea(r,e):e=>n in e},3^h&&(d.get=u?e=>(1^h?ta:ra)(e,r,4^h?o:v.get):e=>e[n]),h>2&&(d.set=u?(e,t)=>aa(e,r,t,4^h?o:v.set):(e,t)=>e[n]=t)),s=(0,a[T])(h?h<4?u?o:v[b]:h>4?void 0:{get:v.get,set:v.set}:r,c),l._=1,4^h||void 0===s?qn(s)&&(h>4?_.unshift(s):h?u?o=s:v[b]=s:r=s):"object"!=typeof s||null===s?Hn("Object expected"):(qn(i=s.get)&&(v.get=i),qn(i=s.set)&&(v.set=i),qn(i=s.init)&&_.unshift(i));return h||Vn(e,r),v&&Dn(r,n,v),u?4^h?o:v:r},"__decorateElement$9"),Xn=__name((e,t,n)=>jn(e,"symbol"!=typeof t?t+"":t,n),"__publicField$5"),Jn=__name((e,t,n)=>t.has(e)||Hn("Cannot "+n),"__accessCheck$5"),ea=__name((e,t)=>Object(t)!==t?Hn('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$5"),ta=__name((e,t,n)=>(Jn(e,t,"read from private field"),n?n.call(e):t.get(e)),"__privateGet$5"),na=__name((e,t,n)=>t.has(e)?Hn("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),"__privateAdd$5"),aa=__name((e,t,n,a)=>(Jn(e,t,"write to private field"),a?a.call(e,n):t.set(e,n),n),"__privateSet$5"),ra=__name((e,t,n)=>(Jn(e,t,"access private method"),n),"__privateMethod$5");Mn=[i("gtn-compass-panel")];class GTNCompassPanel extends(Fn=o,Nn=[s({type:Number})],Fn){static{__name(this,"GTNCompassPanel")}constructor(){super(),na(this,On,Qn(In,8,this,0)),Qn(In,11,this),Xn(this,"langService"),Xn(this,"unsubscribeUiLang",null),this.langService=p.getInstance().resolve(u.LanguageService)}connectedCallback(){super.connectedCallback(),this.unsubscribeUiLang=this.langService.subscribeUiListeners(()=>{this.requestUpdate()})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeUiLang&&(this.unsubscribeUiLang(),this.unsubscribeUiLang=null)}handleClick(e){const t=e.currentTarget.getBoundingClientRect(),n=t.width/2,a=t.height/2,r=e.clientX-t.left-n,o=e.clientY-t.top-a;let i=Math.atan2(o,r)*(180/Math.PI);i=(i+90+360)%360;const s=5*Math.round(i/5);this.dispatchEvent(new CustomEvent("heading-change",{detail:{heading:s}}))}render(){const e=`rotate(${this.heading}, 50, 50)`,t=__name(e=>this.langService.translate(e),"t"),n=t("unit.degree");return r`
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
        ${Math.round(this.heading)}${n}
      </div>
    `}}Yn(In=Bn(Fn),4,"heading",Nn,GTNCompassPanel,On=new WeakMap),GTNCompassPanel=Yn(In,0,"GTNCompassPanel",Mn,GTNCompassPanel),Xn(GTNCompassPanel,"styles",t`
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
  `),Qn(In,1,GTNCompassPanel);var oa,ia,sa,la,ca,da,ha,pa,ua,ga=Object.create,ba=Object.defineProperty,_a=Object.getOwnPropertyDescriptor,ma=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$8"),va=__name(e=>{throw TypeError(e)},"__typeError$8"),Ta=__name((e,t,n)=>t in e?ba(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,"__defNormalProp$8"),fa=__name((e,t)=>ba(e,"name",{value:t,configurable:!0}),"__name$8"),ya=__name(e=>[,,,ga(e?.[ma("metadata")]??null)],"__decoratorStart$8"),xa=["class","method","getter","setter","accessor","field","value","get","set"],wa=__name(e=>void 0!==e&&"function"!=typeof e?va("Function expected"):e,"__expectFn$8"),Ga=__name((e,t,n,a,r)=>({kind:xa[e],name:t,metadata:a,addInitializer:__name(e=>n._?va("Already initialized"):r.push(wa(e||null)),"addInitializer")}),"__decoratorContext$8"),Ca=__name((e,t)=>Ta(t,ma("metadata"),e[3]),"__decoratorMetadata$8"),ka=__name((e,t,n,a)=>{for(var r=0,o=e[t>>1],i=o&&o.length;r<i;r++)1&t?o[r].call(n):a=o[r].call(n,a);return a},"__runInitializers$8"),Sa=__name((e,t,n,a,r,o)=>{var i,s,l,c,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,b=xa[h+5],_=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(r=r.prototype),h<5&&(h>3||!u)&&_a(h<4?r:{get[n](){return Aa(this,o)},set[n](e){return Na(this,o,e)}},n));h?u&&h<4&&fa(o,(h>2?"set ":h>1?"get ":"")+n):fa(r,n);for(var T=a.length-1;T>=0;T--)c=Ga(h,n,l={},e[3],m),h&&(c.static=p,c.private=u,d=c.access={has:u?e=>$a(r,e):e=>n in e},3^h&&(d.get=u?e=>(1^h?Aa:Fa)(e,r,4^h?o:v.get):e=>e[n]),h>2&&(d.set=u?(e,t)=>Na(e,r,t,4^h?o:v.set):(e,t)=>e[n]=t)),s=(0,a[T])(h?h<4?u?o:v[b]:h>4?void 0:{get:v.get,set:v.set}:r,c),l._=1,4^h||void 0===s?wa(s)&&(h>4?_.unshift(s):h?u?o=s:v[b]=s:r=s):"object"!=typeof s||null===s?va("Object expected"):(wa(i=s.get)&&(v.get=i),wa(i=s.set)&&(v.set=i),wa(i=s.init)&&_.unshift(i));return h||Ca(e,r),v&&ba(r,n,v),u?4^h?o:v:r},"__decorateElement$8"),Ea=__name((e,t,n)=>Ta(e,"symbol"!=typeof t?t+"":t,n),"__publicField$4"),La=__name((e,t,n)=>t.has(e)||va("Cannot "+n),"__accessCheck$4"),$a=__name((e,t)=>Object(t)!==t?va('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$4"),Aa=__name((e,t,n)=>(La(e,t,"read from private field"),n?n.call(e):t.get(e)),"__privateGet$4"),Ra=__name((e,t,n)=>t.has(e)?va("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),"__privateAdd$4"),Na=__name((e,t,n,a)=>(La(e,t,"write to private field"),a?a.call(e,n):t.set(e,n),n),"__privateSet$4"),Fa=__name((e,t,n)=>(La(e,t,"access private method"),n),"__privateMethod$4");const Ma=!0;ca=[i("gtn-settings-panel")];class GTNSettingsPanel extends(la=o,sa=[s({type:Number})],ia=[s({type:Number})],oa=[s({type:Boolean})],la){static{__name(this,"GTNSettingsPanel")}constructor(){super(),Ra(this,ha,ka(da,8,this,50)),ka(da,11,this),Ra(this,pa,ka(da,12,this,90)),ka(da,15,this),Ra(this,ua,ka(da,16,this,Ma)),ka(da,19,this),Ea(this,"langService"),Ea(this,"unsubscribeUiLang",null),Ea(this,"toggleKeyboard",()=>{this.keyboardActive=!this.keyboardActive;const e={value:this.keyboardActive};this.dispatchEvent(new CustomEvent("keyboard-status",{detail:e}))}),this.langService=p.getInstance().resolve(u.LanguageService)}connectedCallback(){super.connectedCallback(),this.unsubscribeUiLang=this.langService.subscribeUiListeners(()=>{this.requestUpdate()})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeUiLang&&(this.unsubscribeUiLang(),this.unsubscribeUiLang=null)}handleInput(e,t){const n=parseInt(e.target.value,10)||0;this.dispatchEvent(new CustomEvent("setting-change",{detail:{type:t,value:n}}))}render(){const e=__name(e=>this.langService.translate(e),"t");return r`
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
          <span class="label-icon">
            <gtn-icon icon="input-keyboard-vibrant"></gtn-icon>
          </span>
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
    `}}da=ya(la),ha=new WeakMap,pa=new WeakMap,ua=new WeakMap,Sa(da,4,"step",sa,GTNSettingsPanel,ha),Sa(da,4,"rotation",ia,GTNSettingsPanel,pa),Sa(da,4,"keyboardActive",oa,GTNSettingsPanel,ua),GTNSettingsPanel=Sa(da,0,"GTNSettingsPanel",ca,GTNSettingsPanel),Ea(GTNSettingsPanel,"styles",t`
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
      align-items: center;
      width: 100%;
      height: auto;
      font-size: 0.9rem;
      color: #555;

      .label-icon {
        vertical-align: bottom;
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
  `),ka(da,1,GTNSettingsPanel);const Ia="0 -960 960 960",Oa={"edit-undo-eraser-vibrant":{content:'\n      <path d="M 6 18 L 18 11 L 20 7 L 16 4 L 4 11 L 2 15 Z"\n            fill="#FFFFFF"\n            stroke="#FFFFFF"\n            stroke-width="2"\n            stroke-linejoin="round" />\n\n      <g stroke-linejoin="round">\n\n        <path d="M 6 18 L 2 15 L 4 11 L 8 14 Z"\n              fill="#D32F2F" stroke="#D32F2F" stroke-width="0.5" />\n\n\n        <path d="M 6 18 L 11.5 14.8 L 13.5 10.8 L 8 14 Z"\n              fill="#F44336" stroke="#F44336" stroke-width="0.5" />\n\n        <path d="M 11.5 14.8 L 12.5 14.2 L 14.5 10.2 L 13.5 10.8 Z"\n              fill="#F5F5F5" stroke="#F5F5F5" stroke-width="0.5" />\n\n        <path d="M 12.5 14.2 L 18 11 L 20 7 L 14.5 10.2 Z"\n              fill="#2196F3" stroke="#2196F3" stroke-width="0.5" />\n\n\n        <path d="M 8 14 L 13.5 10.8 L 9.5 7.8 L 4 11 Z"\n              fill="#FF8A80" stroke="#FF8A80" stroke-width="0.5" />\n\n        <path d="M 13.5 10.8 L 14.5 10.2 L 10.5 7.2 L 9.5 7.8 Z"\n              fill="#FFFFFF" stroke="#FFFFFF" stroke-width="0.5" />\n\n        <path d="M 14.5 10.2 L 20 7 L 16 4 L 10.5 7.2 Z"\n              fill="#64B5F6" stroke="#64B5F6" stroke-width="0.5" />\n      </g>\n\n      <path d="M 4 11.2 L 8.2 14.2 L 19.8 7.2"\n            stroke="#FFFFFF" stroke-width="0.8" stroke-linecap="round" opacity="0.5" fill="none" />\n    '},"input-keyboard-vibrant":{content:'\n      <rect x="1" y="8" width="22" height="11" rx="2" fill="#37474F" />\n      <rect x="1" y="8" width="22" height="9" rx="2" fill="#546E7A" />\n\n      <g fill="#FFEB3B">\n        <rect x="2.5" y="10" width="2.5" height="2.5" rx="0.5" />\n        <rect x="6" y="10" width="2.5" height="2.5" rx="0.5" />\n        <rect x="9.5" y="10" width="2.5" height="2.5" rx="0.5" />\n        <rect x="13" y="10" width="2.5" height="2.5" rx="0.5" />\n        <rect x="16.5" y="10" width="5" height="2.5" rx="0.5" fill="#00BCD4" />\n      </g>\n\n      <g fill="#FFEB3B">\n        <rect x="4.25" y="13.5" width="2.5" height="2.5" rx="0.5" />\n        <rect x="7.75" y="13.5" width="2.5" height="2.5" rx="0.5" />\n        <rect x="11.25" y="13.5" width="2.5" height="2.5" rx="0.5" />\n        <rect x="14.75" y="13.5" width="2.5" height="2.5" rx="0.5" />\n        <rect x="18.25" y="13.5" width="2.5" height="2.5" rx="0.5" />\n      </g>\n\n      <rect x="7" y="17" width="10" height="1.5" rx="0.75" fill="#00BCD4" />\n\n      <path d="M 2.5 12.5 H 21.5 M 4.25 16 H 20.75 M 7 18.5 H 17"\n            stroke="#263238" stroke-width="0.5" opacity="0.4" fill="none" />\n    '},"go-up-vibrant":{content:'\n    <path d="M 12 3 L 3 13 Q 12 11 21 13 Z" fill="#F57F17" />\n    <path d="M 12 4.5 L 5 12 Q 12 10.5 19 12 Z" fill="#FFEB3B" />\n    <path d="M 12 4.5 L 5 12 Q 12 10.5 19 12 Z" stroke="#FFFFFF" stroke-width="0.5" fill="none" />\n  '},"go-down-vibrant":{content:'\n    <path d="M 12 21 L 3 11 Q 12 13 21 11 Z" fill="#F57F17" />\n    <path d="M 12 19.5 L 5 12 Q 12 13.5 19 12 Z" fill="#FFEB3B" />\n    <path d="M 12 19.5 L 5 12 Q 12 13.5 19 12 Z" stroke="#FFFFFF" stroke-width="0.5" fill="none" />\n  '},"go-left-vibrant":{content:'\n    <path d="M 3 12 L 13 3 Q 11 12 13 21 Z" fill="#F57F17" />\n    <path d="M 4.5 12 L 12 5 Q 10.5 12 12 19 Z" fill="#FFEB3B" />\n    <path d="M 4.5 12 L 12 5 Q 10.5 12 12 19 Z" stroke="#FFFFFF" stroke-width="0.5" fill="none" />\n  '},"go-right-vibrant":{content:'\n    <path d="M 21 12 L 11 3 Q 13 12 11 21 Z" fill="#F57F17" />\n    <path d="M 19.5 12 L 12 5 Q 13.5 12 12 19 Z" fill="#FFEB3B" />\n    <path d="M 19.5 12 L 12 5 Q 13.5 12 12 19 Z" stroke="#FFFFFF" stroke-width="0.5" fill="none" />\n  '},"media-playback-run-vibrant":{content:'\n      <g stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round">\n        <line x1="1" y1="8" x2="5" y2="8" />\n        <line x1="0" y1="12" x2="6" y2="12" />\n      </g>\n\n      <g stroke="#FFFFFF" stroke-width="1.8" fill="none" stroke-linejoin="round" stroke-linecap="round">\n        <path d="M 12 17 L 8 10 L 16 10 L 12 17 Z" />\n        <path d="M 16 10 L 18 6 L 20 6" />\n        <path d="M 8 10 L 7 7 L 9 7" />\n      </g>\n\n      <g stroke="#80DEEA" stroke-width="2.2" fill="none">\n        <circle cx="7" cy="17" r="4" />\n        <circle cx="17" cy="17" r="4" />\n      </g>\n\n      <circle cx="12" cy="17" r="1.5" fill="#FFEB3B" />\n  '},"edit-clear-all-vibrant":{content:'\n      <path d="M 3 15 A 7.5 7.5 0 0 0 10 22" fill="none" stroke="#80DEEA" stroke-width="2" stroke-linecap="round" />\n\n      <line x1="19" y1="5" x2="13" y2="11" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" />\n\n      <path d="M 11.5 10.5 L 14.5 13.5" stroke="#00BCD4" stroke-width="2.5" stroke-linecap="round" />\n\n      <path d="M 12 12 L 6 16.5 C 4.5 18.5 6 21 9 21 C 12 21 16 17.5 13.5 13.5 Z" fill="#FFEB3B" stroke="#FFFFFF" stroke-width="1" stroke-linejoin="round" />\n\n      <path d="M 10.5 13.5 L 7 17 M 12.5 15 L 9 18.5" stroke="#F57F17" stroke-width="1.2" stroke-linecap="round" />\n    '},"preferences-workbench-locale-vibrant":{content:'\n      <g stroke="#2979FF" stroke-width="1.2" fill="none" stroke-linecap="round">\n        <circle cx="8.5" cy="8.5" r="7.5" />\n        <ellipse cx="8.5" cy="8.5" rx="3.5" ry="7.5" />\n        <path d="M 1.5 5 L 15.5 5" />\n        <path d="M 1.5 12 L 15.5 12" />\n      </g>\n\n      <path d="M 10.5 17 Q 13.5 15 16.5 17 Q 13.5 19 10.5 17 Z" stroke="#FF5252" stroke-width="1.2" fill="none" stroke-linejoin="round" />\n\n      <g stroke="#00E676" stroke-width="1.2" fill="none" stroke-linecap="round">\n        <path d="M 17.5 15 A 2 2 0 0 1 17.5 19" />\n        <path d="M 19.5 13.5 A 3.5 3.5 0 0 1 19.5 20.5" />\n      </g>\n    '},"coding-wand-vibrant":{content:'\n      <line x1="4" y1="20" x2="17" y2="7" stroke="#00BCD4" stroke-width="4.5" stroke-linecap="round" />\n\n      <circle cx="17" cy="7" r="3.5" fill="#FF9800" />\n\n      <path fill="#FFEB3B" d="M 8 3 Q 8 6.5 11.5 6.5 Q 8 6.5 8 10 Q 8 6.5 4.5 6.5 Q 8 6.5 8 3 Z" />\n\n      <path stroke="#00E676" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" d="M 15 15 L 18 17.5 L 15 20" />\n      <line x1="19" y1="20" x2="23" y2="20" stroke="#00E676" stroke-width="2.5" stroke-linecap="round" />\n    '},"sandbox-beach-ball-vibrant":{content:'\n    <defs>\n      <clipPath id="beach-ball-clip">\n        <circle cx="12" cy="12" r="10" />\n      </clipPath>\n    </defs>\n\n    <circle cx="12" cy="12" r="10" fill="#FFFFFF" />\n\n    <g clip-path="url(#beach-ball-clip)">\n      <path fill="#FF5252" d="M 9 9 Q 10 0 12 -2 L 26 -2 L 26 6 Q 18 2 9 9 Z" />\n      <path fill="#FFEB3B" d="M 9 9 Q 18 14 20 26 L 8 26 Q 10 16 9 9 Z" />\n      <path fill="#448AFF" d="M 9 9 Q 4 14 -2 16 L -2 0 Q 4 4 9 9 Z" />\n    </g>\n\n    <circle cx="9" cy="9" r="2.5" fill="#E0E0E0" />\n    '},"media-playback-start-symbolic":{content:'\n      <path\n        fill="currentColor"\n        stroke="none"\n        d="M 7 4 L 7 20 L 20 12 L 7 4 z"\n      />\n    '},"edit-clear-all-symbolic":{content:'\n      <path\n        fill="currentColor"\n        stroke="none"\n        d="M18.5 2.5a1.4 1.4 0 0 0-2 .2L10.2 10.8c-1.1-.6-2.3-1-3.6-1.4-1-.3-2 .3-2.1 1.3l8.5 5.5c.5-.3 1.2-.5 1.5-1 .5-.8-.2-1.8-1-2.2l-2-.9 5.2-7.5c.5-.8-.1-1.9-1.2-1.9zM6.5 13c-1.8.6-3 2.8-2.5 4.6.5 1.8 2.5 3 4.5 3.5 2.5.5 5 .3 7.5.4h1.2c-1.2-.3-2.8-.8-3.2-2-.4-.9.3-2 1.2-2.3l-8.7-4.2z"\n      />\n    '},"text-x-script-symbolic":{content:'\n      <path\n        fill="currentColor"\n        stroke="none"\n        d="M13 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V9l-7-7zM6 4h6v6h6v10H6V4zm2 7v2h8v-2H8zm0 4v2h5v-2H8z"\n      />\n    '},"applications-games-symbolic":{content:'\n      <path\n        fill="currentColor"\n        stroke="none"\n        d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5c0-1.4-1.1-2.5-2.5-2.5S8 2.1 8 3.5V5H4c-1.1 0-2 .9-2 2v4h1.5c1.4 0 2.5 1.1 2.5 2.5S4.9 16 3.5 16H2v4c0 1.1.9 2 2 2h4v-1.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5V22h4c1.1 0 2-.9 2-2v-4h1.5c1.4 0 2.5-1.1 2.5-2.5S21.9 11 20.5 11z"\n      />\n    '},"preferences-desktop-locale-symbolic":{content:'\n      <path\n        fill="currentColor"\n        stroke="none"\n        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A8.03 8.03 0 0 1 5.08 16zm2.95-8H5.08a8.03 8.03 0 0 1 3.84-3.56A15.65 15.65 0 0 0 7.54 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.34.16-2h4.68c.09.66.16 1.32.16 2 0 .68-.07 1.34-.16 2zm1.18 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"\n      />\n    '},"view-reveal-symbolic":{content:'\n    <path\n      fill="currentColor"\n      stroke="none"\n      d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"\n    />\n  '},"view-conceal-symbolic":{content:'\n    <path\n      fill="currentColor"\n      stroke="none"\n      d="M12 16.5c-3.4 0-6.6-1.5-8.8-4.2-.4-.5-.3-1.2.2-1.6.5-.4 1.2-.3 1.6.2 1.8 2.2 4.3 3.4 7 3.4 2.7 0 5.2-1.2 7-3.4.4-.5 1.1-.6 1.6-.2.5.4.6 1.1.2 1.6-2.2 2.7-5.4 4.2-8.8 4.2z"\n    />\n    <path\n      fill="currentColor"\n      stroke="none"\n      d="M12 17v2.5c0 .6.4 1 1 1s1-.4 1-1V17c0-.6-.4-1-1-1s-1 .4-1 1zm-5.7-1.4l-1.8 1.8c-.4.4-.4 1 0 1.4s1 .4 1.4 0l1.8-1.8c.4-.4.4-1 0-1.4s-1-.4-1.4 0zm11.4 0c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.8 1.8c.4.4 1 .4 1.4 0s.4-1 0-1.4l-1.8-1.8z"\n    />\n  '},penDown:{content:'\n    <defs>\n      <mask id="halo-down">\n        <rect width="24" height="24" fill="white" stroke="none" />\n        <path d="M 18 23 L 12 16 H 16 V 11 H 20 V 16 H 24 Z" fill="black" stroke="black" stroke-width="2" stroke-linejoin="round"/>\n      </mask>\n    </defs>\n\n    <path mask="url(#halo-down)"\n          fill="currentColor"\n          stroke="none"\n          d="M19.06 3.53a1.5 1.5 0 0 0-2.12 0l-1.54 1.54 5.53 5.53 1.54-1.54a1.5 1.5 0 0 0 0-2.12l-3.41-3.41zM13.98 6.48l-9.5 9.5-.47 3.55a.5.5 0 0 0 .58.58l3.55-.47 9.5-9.5-3.66-3.66z"/>\n\n    <path d="M 18 23 L 12 16 H 16 V 11 H 20 V 16 H 24 Z" />\n    '},penUp:{content:'\n    <defs>\n      <mask id="halo-up">\n        <rect width="24" height="24" fill="white" stroke="none" />\n        <path d="M 18 11 L 12 18 H 16 V 23 H 20 V 18 H 24 Z" fill="black" stroke="black" stroke-width="2" stroke-linejoin="round"/>\n      </mask>\n    </defs>\n\n    <path mask="url(#halo-up)"\n          fill="currentColor"\n          stroke="none"\n          d="M19.06 3.53a1.5 1.5 0 0 0-2.12 0l-1.54 1.54 5.53 5.53 1.54-1.54a1.5 1.5 0 0 0 0-2.12l-3.41-3.41zM13.98 6.48l-9.5 9.5-.47 3.55a.5.5 0 0 0 .58.58l3.55-.47 9.5-9.5-3.66-3.66z"/>\n\n    <path d="M 18 11 L 12 18 H 16 V 23 H 20 V 18 H 24 Z" />\n    '},check:{content:'<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>'},close:{content:'<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>'},menu:{content:'<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>'},settings:{content:'<path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.58 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>'},home:{content:'<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>'},user:{content:'<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>'},eye:{content:'\n    <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"\n          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n    </path>\n    <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"\n          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n    </path>\n  '},eyeSlash:{content:'\n    <path d="M2.99902 3L20.999 21M9.8433 9.91364C9.32066 10.4536 8.99902 11.1892 8.99902 12C8.99902 13.6569 10.3422 15 11.999 15C12.8215 15 13.5667 14.669 14.1086 14.133M6.49902 6.64715C4.59972 7.90034 3.15305 9.78394 2.45703 12C3.73128 16.0571 7.52159 19 11.9992 19C13.9881 19 15.8414 18.4194 17.3988 17.4184M10.999 5.04939C11.328 5.01673 11.6617 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C21.2607 12.894 20.8577 13.7338 20.3522 14.5"\n          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n    </path>'},pen:{content:'\n    <path d="M15.4998 5.49994L18.3282 8.32837M3 20.9997L3.04745 20.6675C3.21536 19.4922 3.29932 18.9045 3.49029 18.3558C3.65975 17.8689 3.89124 17.4059 4.17906 16.9783C4.50341 16.4963 4.92319 16.0765 5.76274 15.237L17.4107 3.58896C18.1918 2.80791 19.4581 2.80791 20.2392 3.58896C21.0202 4.37001 21.0202 5.63634 20.2392 6.41739L8.37744 18.2791C7.61579 19.0408 7.23497 19.4216 6.8012 19.7244C6.41618 19.9932 6.00093 20.2159 5.56398 20.3879C5.07171 20.5817 4.54375 20.6882 3.48793 20.9012L3 20.9997Z"\n          stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'},penSlash:{content:'\n    <path d="M15.4998 5.50067L18.3282 8.3291M13.3254 7.67502L17.4107 3.58969C18.1918 2.80865 19.4581 2.80864 20.2392 3.58969C21.0202 4.37074 21.0202 5.63707 20.2392 6.41812L16.1538 10.5034M3 3L10.5002 10.5002M21 21L13.3286 13.3286M13.3286 13.3286L8.37744 18.2798C7.61579 19.0415 7.23497 19.4223 6.8012 19.7252C6.41618 19.994 6.00093 20.2167 5.56398 20.3887C5.07171 20.5824 4.54375 20.6889 3.48793 20.902L3 21.0004L3.04745 20.6683C3.21536 19.4929 3.29932 18.9052 3.49029 18.3565C3.65975 17.8697 3.89124 17.4067 4.17906 16.979C4.50341 16.497 4.92319 16.0772 5.76274 15.2377L10.5002 10.5002M13.3286 13.3286L10.5002 10.5002"\n          stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'},draw:{content:'\n    <path d="M160-120v-170l527-526q12-12 27-18t30-6q16 0 30.5 6t25.5 18l56 56q12 11 18 25.5t6 30.5q0 15-6 30t-18 27L330-120H160Zm80-80h56l393-392-28-29-29-28-392 393v56Zm560-503-57-57 57 57Zm-139 82-29-28 57 57-28-29ZM560-120q74 0 137-37t63-103q0-36-19-62t-51-45l-59 59q23 10 36 22t13 26q0 23-36.5 41.5T560-200q-17 0-28.5 11.5T520-160q0 17 11.5 28.5T560-120ZM183-426l60-60q-20-8-31.5-16.5T200-520q0-12 18-24t76-37q88-38 117-69t29-70q0-55-44-87.5T280-840q-45 0-80.5 16T145-785q-11 13-9 29t15 26q13 11 29 9t27-13q14-14 31-20t42-6q41 0 60.5 12t19.5 28q0 14-17.5 25.5T262-654q-80 35-111 63.5T120-520q0 32 17 54.5t46 39.5Z"\n          fill="currentColor"\n    />',viewBox:Ia},editOff:{content:'\n    <path d="m622-453-56-56 82-82-57-57-82 82-56-56 195-195q12-12 26.5-17.5T705-840q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L622-453ZM200-200h57l195-195-28-29-29-28-195 195v57ZM792-56 509-338 290-120H120v-169l219-219L56-792l57-57 736 736-57 57Zm-32-648-56-56 56 56Zm-169 56 57 57-57-57ZM424-424l-29-28 57 57-28-29Z"\n          fill="currentColor"\n    />',viewBox:Ia},visibility:{content:'\n    <path d="M607.5-372.5Q660-425 660-500t-52.5-127.5Q555-680 480-680t-127.5 52.5Q300-575 300-500t52.5 127.5Q405-320 480-320t127.5-52.5Zm-204-51Q372-455 372-500t31.5-76.5Q435-608 480-608t76.5 31.5Q588-545 588-500t-31.5 76.5Q525-392 480-392t-76.5-31.5ZM214-281.5Q94-363 40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200q-146 0-266-81.5ZM480-500Zm207.5 160.5Q782-399 832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280q113 0 207.5-59.5Z"\n          fill="currentColor"\n    />',viewBox:Ia},visibilityOff:{content:'\n    <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"\n          fill="currentColor"\n    />',viewBox:Ia}};function isIconName(e){return"string"==typeof e&&Object.hasOwn(Oa,e)}function tryToIconName(e){if(isIconName(e))return e}function getIconFromName(e){const t=tryToIconName(e);if(!t)return void console.warn(`[GtnIcon] Icon not found: "${e}"`);const n=Oa[t];return{content:d`${c(n.content)}`,viewBox:n.viewBox??"0 0 24 24"}}__name(isIconName,"isIconName"),__name(tryToIconName,"tryToIconName"),__name(getIconFromName,"getIconFromName");var Pa,Da,Ua,za,Ha,ja,Wa,Ba=Object.create,Ka=Object.defineProperty,qa=Object.getOwnPropertyDescriptor,Za=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$7"),Va=__name(e=>{throw TypeError(e)},"__typeError$7"),Qa=__name((e,t,n)=>t in e?Ka(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,"__defNormalProp$7"),Ya=__name((e,t)=>Ka(e,"name",{value:t,configurable:!0}),"__name$7"),Xa=__name(e=>[,,,Ba(e?.[Za("metadata")]??null)],"__decoratorStart$7"),Ja=["class","method","getter","setter","accessor","field","value","get","set"],er=__name(e=>void 0!==e&&"function"!=typeof e?Va("Function expected"):e,"__expectFn$7"),tr=__name((e,t,n,a,r)=>({kind:Ja[e],name:t,metadata:a,addInitializer:__name(e=>n._?Va("Already initialized"):r.push(er(e||null)),"addInitializer")}),"__decoratorContext$7"),nr=__name((e,t)=>Qa(t,Za("metadata"),e[3]),"__decoratorMetadata$7"),ar=__name((e,t,n,a)=>{for(var r=0,o=e[t>>1],i=o&&o.length;r<i;r++)1&t?o[r].call(n):a=o[r].call(n,a);return a},"__runInitializers$7"),rr=__name((e,t,n,a,r,o)=>{var i,s,l,c,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,b=Ja[h+5],_=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(r=r.prototype),h<5&&(h>3||!u)&&qa(h<4?r:{get[n](){return lr(this,o)},set[n](e){return dr(this,o,e)}},n));h?u&&h<4&&Ya(o,(h>2?"set ":h>1?"get ":"")+n):Ya(r,n);for(var T=a.length-1;T>=0;T--)c=tr(h,n,l={},e[3],m),h&&(c.static=p,c.private=u,d=c.access={has:u?e=>sr(r,e):e=>n in e},3^h&&(d.get=u?e=>(1^h?lr:hr)(e,r,4^h?o:v.get):e=>e[n]),h>2&&(d.set=u?(e,t)=>dr(e,r,t,4^h?o:v.set):(e,t)=>e[n]=t)),s=(0,a[T])(h?h<4?u?o:v[b]:h>4?void 0:{get:v.get,set:v.set}:r,c),l._=1,4^h||void 0===s?er(s)&&(h>4?_.unshift(s):h?u?o=s:v[b]=s:r=s):"object"!=typeof s||null===s?Va("Object expected"):(er(i=s.get)&&(v.get=i),er(i=s.set)&&(v.set=i),er(i=s.init)&&_.unshift(i));return h||nr(e,r),v&&Ka(r,n,v),u?4^h?o:v:r},"__decorateElement$7"),or=__name((e,t,n)=>Qa(e,t+"",n),"__publicField$3"),ir=__name((e,t,n)=>t.has(e)||Va("Cannot "+n),"__accessCheck$3"),sr=__name((e,t)=>Object(t)!==t?Va('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$3"),lr=__name((e,t,n)=>(ir(e,t,"read from private field"),n?n.call(e):t.get(e)),"__privateGet$3"),cr=__name((e,t,n)=>t.has(e)?Va("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),"__privateAdd$3"),dr=__name((e,t,n,a)=>(ir(e,t,"write to private field"),a?a.call(e,n):t.set(e,n),n),"__privateSet$3"),hr=__name((e,t,n)=>(ir(e,t,"access private method"),n),"__privateMethod$3");za=[i("gtn-icon")];class GtnIcon extends(Ua=o,Da=[s({type:String})],Pa=[s({type:String})],Ua){static{__name(this,"GtnIcon")}constructor(){super(...arguments),cr(this,ja,ar(Ha,8,this)),ar(Ha,11,this),cr(this,Wa,ar(Ha,12,this)),ar(Ha,15,this)}render(){const e=getIconFromName(this.icon);return e?r`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="${e.viewBox}"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
        focusable="false"
      >
        ${e.content}
      </svg>
    `:r``}}Ha=Xa(Ua),ja=new WeakMap,Wa=new WeakMap,rr(Ha,4,"icon",Da,GtnIcon,ja),rr(Ha,4,"viewBox",Pa,GtnIcon,Wa),or(GtnIcon=rr(Ha,0,"GtnIcon",za,GtnIcon),"styles",t`
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
  `),ar(Ha,1,GtnIcon);var pr,ur,gr,br=Object.create,_r=Object.defineProperty,mr=Object.getOwnPropertyDescriptor,vr=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$6"),Tr=__name(e=>{throw TypeError(e)},"__typeError$6"),fr=__name((e,t,n)=>t in e?_r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,"__defNormalProp$6"),yr=__name((e,t)=>_r(e,"name",{value:t,configurable:!0}),"__name$6"),xr=__name(e=>[,,,br(e?.[vr("metadata")]??null)],"__decoratorStart$6"),wr=["class","method","getter","setter","accessor","field","value","get","set"],Gr=__name(e=>void 0!==e&&"function"!=typeof e?Tr("Function expected"):e,"__expectFn$6"),Cr=__name((e,t,n,a,r)=>({kind:wr[e],name:t,metadata:a,addInitializer:__name(e=>n._?Tr("Already initialized"):r.push(Gr(e||null)),"addInitializer")}),"__decoratorContext$6"),kr=__name((e,t)=>fr(t,vr("metadata"),e[3]),"__decoratorMetadata$6"),Sr=__name((e,t,n,a)=>{for(var r=0,o=e[t>>1],i=o&&o.length;r<i;r++)o[r].call(n);return a},"__runInitializers$6"),Er=__name((e,t,n,a,r,o)=>{var i,s,l,c=7&t,d=e[0]||(e[0]=[]),h=c&&(r=r.prototype,c<5&&(c>3||!0)&&mr(r,n));yr(r,n);for(var p=a.length-1;p>=0;p--)l=Cr(c,n,s={},e[3],d),i=(0,a[p])(r,l),s._=1,Gr(i)&&(r=i);return kr(e,r),h&&_r(r,n,h),r},"__decorateElement$6");pr=[i("gtn-commands-panel")];class GTNCommandsPanel extends(gr=o){static{__name(this,"GTNCommandsPanel")}static styles=t`
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
  `;langService;unsubscribeUiLang=null;constructor(){super(),this.langService=p.getInstance().resolve(u.LanguageService)}connectedCallback(){super.connectedCallback(),this.unsubscribeUiLang=this.langService.subscribeUiListeners(()=>{this.requestUpdate()})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeUiLang&&(this.unsubscribeUiLang(),this.unsubscribeUiLang=null)}emit(e,t){const n={action:e,value:t};this.dispatchEvent(new CustomEvent("command",{detail:n}))}render(){const e=__name(e=>this.langService.translate(e),"t"),t=e("commands.GT_FORWARD"),n=e("commands.GT_BACKWARD"),a=e("commands.GT_TURN_LEFT"),o=e("commands.GT_TURN_RIGHT"),i=e("unit.degree");return r`
      <div class="cmd-row">
        <button @click=${()=>this.emit(D.GT_FORWARD,10)}>${t} 10</button>
        <button @click=${()=>this.emit(D.GT_FORWARD,25)}>${t} 25</button>
        <button @click=${()=>this.emit(D.GT_FORWARD,100)}>${t} 100</button>
      </div>

      <div class="cmd-row">
        <button @click=${()=>this.emit(D.GT_BACKWARD,10)}>${n} 10</button>
        <button @click=${()=>this.emit(D.GT_BACKWARD,25)}>${n} 25</button>
        <button @click=${()=>this.emit(D.GT_BACKWARD,100)}>${n} 100</button>
      </div>

      <div class="separator"></div>

      <div class="cmd-row">
        <button @click=${()=>this.emit(D.GT_TURN_LEFT,30)}>${a} 30${i}</button>
        <button @click=${()=>this.emit(D.GT_TURN_LEFT,45)}>${a} 45${i}</button>
        <button @click=${()=>this.emit(D.GT_TURN_LEFT,90)}>${a} 90${i}</button>
      </div>

      <div class="cmd-row">
        <button @click=${()=>this.emit(D.GT_TURN_RIGHT,30)}>${o} 30${i}</button>
        <button @click=${()=>this.emit(D.GT_TURN_RIGHT,45)}>${o} 45${i}</button>
        <button @click=${()=>this.emit(D.GT_TURN_RIGHT,90)}>${o} 90${i}</button>
      </div>

      <div class="separator"></div>

      <div class="tools-grid">
        <button @click=${()=>this.emit(D.GT_PEN_DOWN)}>
          <span class="icon"><gtn-icon icon="penDown"></gtn-icon></span>${e("sandbox.btn.pendown")}
        </button>
        <button @click=${()=>this.emit(D.GT_PEN_UP)}>
          <span class="icon"><gtn-icon icon="penUp"></gtn-icon></span>${e("sandbox.btn.penup")}
        </button>
        <button @click=${()=>this.emit(D.GT_SHOW_TURTLE)}>
          <span class="icon"><gtn-icon icon="view-reveal-symbolic"></gtn-icon></span>${e("sandbox.btn.showturtle")}
        </button>
        <button @click=${()=>this.emit(D.GT_HIDE_TURTLE)}>
          <span class="icon"><gtn-icon icon="view-conceal-symbolic"></gtn-icon></span>${e("sandbox.btn.hideturtle")}
        </button>
      </div>
    `}}Sr(ur=xr(gr),1,GTNCommandsPanel=Er(ur,0,"GTNCommandsPanel",pr,GTNCommandsPanel));var Lr,$r,Ar,Rr=Object.create,Nr=Object.defineProperty,Fr=Object.getOwnPropertyDescriptor,Mr=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$5"),Ir=__name(e=>{throw TypeError(e)},"__typeError$5"),Or=__name((e,t,n)=>t in e?Nr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,"__defNormalProp$5"),Pr=__name((e,t)=>Nr(e,"name",{value:t,configurable:!0}),"__name$5"),Dr=__name(e=>[,,,Rr(e?.[Mr("metadata")]??null)],"__decoratorStart$5"),Ur=["class","method","getter","setter","accessor","field","value","get","set"],zr=__name(e=>void 0!==e&&"function"!=typeof e?Ir("Function expected"):e,"__expectFn$5"),Hr=__name((e,t,n,a,r)=>({kind:Ur[e],name:t,metadata:a,addInitializer:__name(e=>n._?Ir("Already initialized"):r.push(zr(e||null)),"addInitializer")}),"__decoratorContext$5"),jr=__name((e,t)=>Or(t,Mr("metadata"),e[3]),"__decoratorMetadata$5"),Wr=__name((e,t,n,a)=>{for(var r=0,o=e[t>>1],i=o&&o.length;r<i;r++)o[r].call(n);return a},"__runInitializers$5"),Br=__name((e,t,n,a,r,o)=>{var i,s,l,c=7&t,d=e[0]||(e[0]=[]),h=c&&(r=r.prototype,c<5&&(c>3||!0)&&Fr(r,n));Pr(r,n);for(var p=a.length-1;p>=0;p--)l=Hr(c,n,s={},e[3],d),i=(0,a[p])(r,l),s._=1,zr(i)&&(r=i);return jr(e,r),h&&Nr(r,n,h),r},"__decorateElement$5");const Kr=[C.BLACK,C.RED,C.BLUE,C.GREEN,C.YELLOW,C.ORANGE];Lr=[i("gtn-color-panel")];class GTNColorPanel extends(Ar=o){static{__name(this,"GTNColorPanel")}static styles=t`
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
  `;langService;unsubscribeUiLang=null;constructor(){super(),this.langService=p.getInstance().resolve(u.LanguageService)}connectedCallback(){super.connectedCallback(),this.unsubscribeUiLang=this.langService.subscribeUiListeners(()=>{this.requestUpdate()})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeUiLang&&(this.unsubscribeUiLang(),this.unsubscribeUiLang=null)}emit(e){const t={color:e};this.dispatchEvent(new CustomEvent("color-change",{detail:t}))}render(){const e=__name(e=>this.langService.translate(e),"t");return r`
      <div class="palette">
        ${Kr.map(t=>r`
            <div
              class="swatch"
              style="background-color: ${t}"
              @click=${()=>this.emit(t)}
              title="${e("sandbox.btn.colors."+t)}"
            ></div>
          `)}
      </div>
    `}}Wr($r=Dr(Ar),1,GTNColorPanel=Br($r,0,"GTNColorPanel",Lr,GTNColorPanel));var qr,Zr,Vr,Qr,Yr=Object.create,Xr=Object.defineProperty,Jr=Object.getOwnPropertyDescriptor,eo=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$4"),to=__name(e=>{throw TypeError(e)},"__typeError$4"),no=__name((e,t,n)=>t in e?Xr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,"__defNormalProp$4"),ao=__name((e,t)=>Xr(e,"name",{value:t,configurable:!0}),"__name$4"),ro=__name(e=>[,,,Yr(e?.[eo("metadata")]??null)],"__decoratorStart$4"),oo=["class","method","getter","setter","accessor","field","value","get","set"],io=__name(e=>void 0!==e&&"function"!=typeof e?to("Function expected"):e,"__expectFn$4"),so=__name((e,t,n,a,r)=>({kind:oo[e],name:t,metadata:a,addInitializer:__name(e=>n._?to("Already initialized"):r.push(io(e||null)),"addInitializer")}),"__decoratorContext$4"),lo=__name((e,t)=>no(t,eo("metadata"),e[3]),"__decoratorMetadata$4"),co=__name((e,t,n,a)=>{for(var r=0,o=e[t>>1],i=o&&o.length;r<i;r++)o[r].call(n);return a},"__runInitializers$4"),ho=__name((e,t,n,a,r,o)=>{var i,s,l,c=7&t,d=e[0]||(e[0]=[]),h=c&&(r=r.prototype,c<5&&(c>3||!0)&&Jr(r,n));ao(r,n);for(var p=a.length-1;p>=0;p--)l=so(c,n,s={},e[3],d),i=(0,a[p])(r,l),s._=1,io(i)&&(r=i);return lo(e,r),h&&Xr(r,n,h),r},"__decorateElement$4");qr=[i("gtn-controls-panel")];class GTNControlsPanel extends(Vr=o){static{__name(this,"GTNControlsPanel")}static styles=[H,t`
      :host {
        display: block;
        margin-top: auto;
        padding-top: 1rem;
      }

      .actions {
        display: flex;
        flex-direction: row;
        gap: 12px; /* Increased gap for better touch targets */
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 10px 16px;
        cursor: pointer;
        width: 100%;
        font-weight: 600;
        border-radius: 8px; /* Softer, more child-friendly corners */
        transition: all 0.1s ease;
        border: none;
      }

      /* High-Contrast Danger Style (Optimized for Vibrant Icons) */
      .danger {
        background-color: #b71c1c; /* Deep Red for WCAG AA background contrast */
        color: #ffffff; /* White text for 11.4:1 contrast ratio */
        border-bottom: 4px solid #7f0000; /* Skeuomorphic 3D depth */
      }

      .danger:hover {
        background-color: #c62828;
        transform: translateY(-1px);
        border-bottom-width: 5px;
      }

      .danger:active {
        background-color: #8e0000;
        transform: translateY(3px);
        border-bottom-width: 1px;
        margin-bottom: 3px; /* Prevents layout shift during the 3D press */
      }

      /* Ensure icons inside buttons scale appropriately */
      gtn-icon {
        display: flex;
        align-items: center;
        width: 20px;
        height: 20px;
      }
    `];langService;unsubscribeUiLang=null;constructor(){super(),this.langService=p.getInstance().resolve(u.LanguageService)}connectedCallback(){super.connectedCallback(),this.unsubscribeUiLang=this.langService.subscribeUiListeners(()=>{this.requestUpdate()})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeUiLang&&(this.unsubscribeUiLang(),this.unsubscribeUiLang=null)}render(){const e=__name(e=>this.langService.translate(e),"t");return r`
      <div class="actions">
        <button
          class="danger"
          @click=${()=>this.dispatchEvent(new CustomEvent("home"))}
          aria-label="${e("sandbox.btn.reset")}"
        >
          <gtn-icon icon="edit-clear-all-vibrant"></gtn-icon>
          ${e("sandbox.btn.reset")}
        </button>
        <button
          class="danger"
          @click=${()=>this.dispatchEvent(new CustomEvent("clear"))}
          aria-label="${e("sandbox.btn.clear_graph")}"
        >
          <gtn-icon icon="edit-undo-eraser-vibrant"></gtn-icon>
          ${e("sandbox.btn.clear_graph")}
        </button>
      </div>
    `}}co(Zr=ro(Vr),1,GTNControlsPanel=ho(Zr,0,"GTNControlsPanel",qr,GTNControlsPanel)),(e=>{var t,n;function isTypingContent(e){return 1===e.length}(t=e.Keys||(e.Keys={})).Backspace="Backspace",t.Tab="Tab",t.Enter="Enter",t.Shift="Shift",t.Control="Control",t.Alt="Alt",t.Pause="Pause",t.CapsLock="CapsLock",t.Escape="Escape",t.Space=" ",t.PageUp="PageUp",t.PageDown="PageDown",t.End="End",t.Home="Home",t.ArrowLeft="ArrowLeft",t.ArrowUp="ArrowUp",t.ArrowRight="ArrowRight",t.ArrowDown="ArrowDown",t.PrintScreen="PrintScreen",t.Insert="Insert",t.Delete="Delete",t.Digit0="0",t.Digit1="1",t.Digit2="2",t.Digit3="3",t.Digit4="4",t.Digit5="5",t.Digit6="6",t.Digit7="7",t.Digit8="8",t.Digit9="9",t.A="A",t.B="B",t.C="C",t.D="D",t.E="E",t.F="F",t.G="G",t.H="H",t.I="I",t.J="J",t.K="K",t.L="L",t.M="M",t.N="N",t.O="O",t.P="P",t.Q="Q",t.R="R",t.S="S",t.T="T",t.U="U",t.V="V",t.W="W",t.X="X",t.Y="Y",t.Z="Z",t.a="a",t.b="b",t.c="c",t.d="d",t.e="e",t.f="f",t.g="g",t.h="h",t.i="i",t.j="j",t.k="k",t.l="l",t.m="m",t.n="n",t.o="o",t.p="p",t.q="q",t.r="r",t.s="s",t.t="t",t.u="u",t.v="v",t.w="w",t.x="x",t.y="y",t.z="z",t.Meta="Meta",t.ContextMenu="ContextMenu",t.AudioVolumeMute="AudioVolumeMute",t.AudioVolumeDown="AudioVolumeDown",t.AudioVolumeUp="AudioVolumeUp",t.F1="F1",t.F2="F2",t.F3="F3",t.F4="F4",t.F5="F5",t.F6="F6",t.F7="F7",t.F8="F8",t.F9="F9",t.F10="F10",t.F11="F11",t.F12="F12",t.NumLock="NumLock",t.ScrollLock="ScrollLock",t.Semicolon=";",t.Equal="=",t.Comma=",",t.Minus="-",t.Period=".",t.Slash="/",t.Backquote="`",t.BracketLeft="[",t.Backslash="\\",t.BracketRight="]",t.Quote="'",t.Tilde="~",t.Exclamation="!",t.At="@",t.Sharp="#",t.Dollar="$",t.Percent="%",t.Caret="^",t.Ampersand="&",t.Asterisk="*",t.ParenthesisLeft="(",t.ParenthesisRight=")",t.Underscore="_",t.Plus="+",t.OpenBrace="{",t.CloseBrace="}",t.Pipe="|",t.Colon=":",t.Quote2='"',t.AngleBracketLeft="<",t.AngleBracketRight=">",t.QuestionMark="?",(n=e.Codes||(e.Codes={})).Backspace="Backspace",n.Tab="Tab",n.Enter="Enter",n.ShiftLeft="ShiftLeft",n.ShiftRight="ShiftRight",n.ControlLeft="ControlLeft",n.ControlRight="ControlRight",n.AltLeft="AltLeft",n.AltRight="AltRight",n.Pause="Pause",n.CapsLock="CapsLock",n.Escape="Escape",n.Space="Space",n.PageUp="PageUp",n.PageDown="PageDown",n.End="End",n.Home="Home",n.ArrowLeft="ArrowLeft",n.ArrowUp="ArrowUp",n.ArrowRight="ArrowRight",n.ArrowDown="ArrowDown",n.PrintScreen="PrintScreen",n.Insert="Insert",n.Delete="Delete",n.Digit0="Digit0",n.Digit1="Digit1",n.Digit2="Digit2",n.Digit3="Digit3",n.Digit4="Digit4",n.Digit5="Digit5",n.Digit6="Digit6",n.Digit7="Digit7",n.Digit8="Digit8",n.Digit9="Digit9",n.AudioVolumeMute="AudioVolumeMute",n.AudioVolumeDown="AudioVolumeDown",n.AudioVolumeUp="AudioVolumeUp",n.KeyA="KeyA",n.KeyB="KeyB",n.KeyC="KeyC",n.KeyD="KeyD",n.KeyE="KeyE",n.KeyF="KeyF",n.KeyG="KeyG",n.KeyH="KeyH",n.KeyI="KeyI",n.KeyJ="KeyJ",n.KeyK="KeyK",n.KeyL="KeyL",n.KeyM="KeyM",n.KeyN="KeyN",n.KeyO="KeyO",n.KeyP="KeyP",n.KeyQ="KeyQ",n.KeyR="KeyR",n.KeyS="KeyS",n.KeyT="KeyT",n.KeyU="KeyU",n.KeyV="KeyV",n.KeyW="KeyW",n.KeyX="KeyX",n.KeyY="KeyY",n.KeyZ="KeyZ",n.MetaLeft="MetaLeft",n.MetaRight="MetaRight",n.ContextMenu="ContextMenu",n.Numpad0="Numpad0",n.Numpad1="Numpad1",n.Numpad2="Numpad2",n.Numpad3="Numpad3",n.Numpad4="Numpad4",n.Numpad5="Numpad5",n.Numpad6="Numpad6",n.Numpad7="Numpad7",n.Numpad8="Numpad8",n.Numpad9="Numpad9",n.NumpadMultiply="NumpadMultiply",n.NumpadAdd="NumpadAdd",n.NumpadSubtract="NumpadSubtract",n.NumpadDecimal="NumpadDecimal",n.NumpadDivide="NumpadDivide",n.F1="F1",n.F2="F2",n.F3="F3",n.F4="F4",n.F5="F5",n.F6="F6",n.F7="F7",n.F8="F8",n.F9="F9",n.F10="F10",n.F11="F11",n.F12="F12",n.NumLock="NumLock",n.ScrollLock="ScrollLock",n.Semicolon="Semicolon",n.Equal="Equal",n.Comma="Comma",n.Minus="Minus",n.Period="Period",n.Slash="Slash",n.Backquote="Backquote",n.BracketLeft="BracketLeft",n.Backslash="Backslash",n.BracketRight="BracketRight",n.Quote="Quote",__name(isTypingContent,"isTypingContent"),e.isTypingContent=isTypingContent})(Qr||(Qr={})),Qr.Codes;const po={Enter:Qr.Codes.Enter,Escape:Qr.Codes.Escape,ArrowUp:Qr.Codes.ArrowUp,ArrowDown:Qr.Codes.ArrowDown,ArrowLeft:Qr.Codes.ArrowLeft,ArrowRight:Qr.Codes.ArrowRight,KeyUp:Qr.Codes.KeyW,KeyDown:Qr.Codes.KeyS,KeyLeft:Qr.Codes.KeyA,KeyRight:Qr.Codes.KeyD,Backspace:Qr.Codes.Backspace,Delete:Qr.Codes.Delete,Space:Qr.Codes.Space};var uo,go,bo,_o,mo,vo,To,fo,yo,xo,wo,Go,Co,ko=Object.create,So=Object.defineProperty,Eo=Object.getOwnPropertyDescriptor,Lo=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$3"),$o=__name(e=>{throw TypeError(e)},"__typeError$3"),Ao=__name((e,t,n)=>t in e?So(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,"__defNormalProp$3"),Ro=__name((e,t)=>So(e,"name",{value:t,configurable:!0}),"__name$3"),No=__name(e=>[,,,ko(e?.[Lo("metadata")]??null)],"__decoratorStart$3"),Fo=["class","method","getter","setter","accessor","field","value","get","set"],Mo=__name(e=>void 0!==e&&"function"!=typeof e?$o("Function expected"):e,"__expectFn$3"),Io=__name((e,t,n,a,r)=>({kind:Fo[e],name:t,metadata:a,addInitializer:__name(e=>n._?$o("Already initialized"):r.push(Mo(e||null)),"addInitializer")}),"__decoratorContext$3"),Oo=__name((e,t)=>Ao(t,Lo("metadata"),e[3]),"__decoratorMetadata$3"),Po=__name((e,t,n,a)=>{for(var r=0,o=e[t>>1],i=o&&o.length;r<i;r++)1&t?o[r].call(n):a=o[r].call(n,a);return a},"__runInitializers$3"),Do=__name((e,t,n,a,r,o)=>{var i,s,l,c,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,b=Fo[h+5],_=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(r=r.prototype),h<5&&(h>3||!u)&&Eo(h<4?r:{get[n](){return jo(this,o)},set[n](e){return Bo(this,o,e)}},n));h?u&&h<4&&Ro(o,(h>2?"set ":h>1?"get ":"")+n):Ro(r,n);for(var T=a.length-1;T>=0;T--)c=Io(h,n,l={},e[3],m),h&&(c.static=p,c.private=u,d=c.access={has:u?e=>Ho(r,e):e=>n in e},3^h&&(d.get=u?e=>(1^h?jo:Ko)(e,r,4^h?o:v.get):e=>e[n]),h>2&&(d.set=u?(e,t)=>Bo(e,r,t,4^h?o:v.set):(e,t)=>e[n]=t)),s=(0,a[T])(h?h<4?u?o:v[b]:h>4?void 0:{get:v.get,set:v.set}:r,c),l._=1,4^h||void 0===s?Mo(s)&&(h>4?_.unshift(s):h?u?o=s:v[b]=s:r=s):"object"!=typeof s||null===s?$o("Object expected"):(Mo(i=s.get)&&(v.get=i),Mo(i=s.set)&&(v.set=i),Mo(i=s.init)&&_.unshift(i));return h||Oo(e,r),v&&So(r,n,v),u?4^h?o:v:r},"__decorateElement$3"),Uo=__name((e,t,n)=>Ao(e,"symbol"!=typeof t?t+"":t,n),"__publicField$2"),zo=__name((e,t,n)=>t.has(e)||$o("Cannot "+n),"__accessCheck$2"),Ho=__name((e,t)=>Object(t)!==t?$o('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$2"),jo=__name((e,t,n)=>(zo(e,t,"read from private field"),n?n.call(e):t.get(e)),"__privateGet$2"),Wo=__name((e,t,n)=>t.has(e)?$o("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),"__privateAdd$2"),Bo=__name((e,t,n,a)=>(zo(e,t,"write to private field"),a?a.call(e,n):t.set(e,n),n),"__privateSet$2"),Ko=__name((e,t,n)=>(zo(e,t,"access private method"),n),"__privateMethod$2");const qo=getLiteralName(D.GT_STATEMENT_SEPARATOR),Zo=[po.ArrowUp,po.ArrowDown,po.ArrowLeft,po.ArrowRight];To=[i("gtn-sandbox")];class GtnSandbox extends(vo=o,mo=[h()],_o=[h()],bo=[h()],go=[h()],uo=[h()],vo){static{__name(this,"GtnSandbox")}constructor(){super(),Uo(this,"interpreter"),Uo(this,"langService"),Uo(this,"unsubscribeUiLang",null),Wo(this,yo,Po(fo,8,this,50)),Po(fo,11,this),Wo(this,xo,Po(fo,12,this,90)),Po(fo,15,this),Wo(this,wo,Po(fo,16,this,[])),Po(fo,19,this),Wo(this,Go,Po(fo,20,this,0)),Po(fo,23,this),Wo(this,Co,Po(fo,24,this,Ma)),Po(fo,27,this),Uo(this,"handleConsoleLogLanguageChange",async()=>{await this.retranslateLogs()}),Uo(this,"retranslateLogs",async()=>{if(0===this.consoleLogs.length)return;const e=_(this.langService.getUiLanguage()),t=await Promise.all(this.consoleLogs.map(async([t,n,a])=>[t,n,await this.langService.localizeScript(n,e)]));this.consoleLogs=t}),Uo(this,"handleKeyDown",e=>{if(!this.isKeyboardActive)return;const t=e.code;switch(Zo.includes(t)&&e.preventDefault(),t){case po.ArrowUp:case po.KeyUp:return this.doHandleMove(D.GT_FORWARD);case po.ArrowDown:case po.KeyDown:return this.doHandleMove(D.GT_BACKWARD);case po.ArrowLeft:case po.KeyLeft:return this.doHandleMove(D.GT_TURN_LEFT);case po.ArrowRight:case po.KeyRight:return this.doHandleMove(D.GT_TURN_RIGHT);case po.Backspace:case po.Delete:return this.handleClear();case po.Escape:return this.handleReset()}});const e=p.getInstance();this.interpreter=e.resolve(u.Interpreter),this.langService=e.resolve(u.LanguageService)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.handleKeyDown),this.unsubscribeUiLang=this.langService.subscribeUiListeners(()=>{this.handleConsoleLogLanguageChange(),this.requestUpdate()})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.handleKeyDown),this.unsubscribeUiLang&&(this.unsubscribeUiLang(),this.unsubscribeUiLang=null)}async execute(e){try{const t=(new Date).toLocaleTimeString().split(" ")[0]??"",n=_(this.langService.getUiLanguage()),a=await this.langService.localizeScript(e,n);this.consoleLogs=[[t,e,a],...this.consoleLogs],await this.interpreter.canonicalExecute(e)}catch(t){console.error(t)}}handleMove(e){const{action:t}=e.detail;this.doHandleMove(t)}doHandleMove(e){let t;switch(e){case D.GT_FORWARD:case D.GT_BACKWARD:t=`${D[e]} ${this.step}`+qo;break;case D.GT_TURN_LEFT:t=`${D[e]} ${this.angle}`+qo,this.currentHeading=(this.currentHeading-this.angle+360)%360;break;case D.GT_TURN_RIGHT:t=`${D[e]} ${this.angle}`+qo,this.currentHeading=(this.currentHeading+this.angle)%360;break;default:return}this.execute(t)}handleHeadingChange(e){const t=this.currentHeading,n=e.detail.heading;this.currentHeading=n;const a=n-t;this.execute(`${D[D.GT_TURN_RIGHT]} ${a}`+qo)}handleSettingChange(e){const{type:t,value:n}=e.detail;"step"===t&&(this.step=n),"angle"===t&&(this.angle=n)}handleColorChange(e){const t=e.detail.color;this.execute(`${D[D.GT_PEN_COLOR]} "${t}"`+qo)}handleCommand(e){const{action:t,value:n}=e.detail;if(![D.GT_FORWARD,D.GT_BACKWARD,D.GT_TURN_LEFT,D.GT_TURN_RIGHT,D.GT_PEN_UP,D.GT_PEN_DOWN,D.GT_SHOW_TURTLE,D.GT_HIDE_TURTLE].includes(t))return;const a=`${D[t]} ${n||""}`+qo;this.execute(a)}handleReset(){const e=D[D.GT_CLEAR_GRAPHICS]+qo+D[D.GT_RESET]+qo;this.execute(e),this.currentHeading=0}handleClear(){const e=D[D.GT_CLEAR_GRAPHICS]+qo;this.execute(e)}handleKeyboardStatus(e){this.isKeyboardActive=e.detail.value}render(){const e=__name(e=>this.langService.translate(e),"t");return r`
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
    `}}fo=No(vo),yo=new WeakMap,xo=new WeakMap,wo=new WeakMap,Go=new WeakMap,Co=new WeakMap,Do(fo,4,"step",mo,GtnSandbox,yo),Do(fo,4,"angle",_o,GtnSandbox,xo),Do(fo,4,"consoleLogs",bo,GtnSandbox,wo),Do(fo,4,"currentHeading",go,GtnSandbox,Go),Do(fo,4,"isKeyboardActive",uo,GtnSandbox,Co),GtnSandbox=Do(fo,0,"GtnSandbox",To,GtnSandbox),Uo(GtnSandbox,"styles",[z,t`
      ${n(":host{display:block;font-family:var(--font-ui);background:#adff2f;width:100%;height:100%;overflow:hidden}.sandbox-container{display:flex;flex-direction:row;width:100%;height:100%;background:#f8f9fa;gap:1rem;padding:1rem;box-sizing:border-box}.side-panel{width:250px;display:flex;flex-direction:column;gap:1rem;overflow-y:auto}.center-panel{display:flex;flex:1;min-width:0;flex-direction:column;gap:1rem;overflow:hidden;overflow-y:auto}.left-panel{flex:0 0 250px}.right-panel{width:300px;flex:0 0 300px}.canvas-area{flex:1;position:relative;overflow:hidden;background-color:#e0e5ec;box-shadow:inset 0 0 10px #0000000d}.panel-section{margin-bottom:1.5rem;background:#fff;padding:.75rem;border-radius:8px;box-shadow:0 1px 3px #0000001a;border:1px solid #e9ecef;color:#212529}.panel-section h3{margin:0 0 .8rem;font-size:.85rem;text-transform:uppercase;letter-spacing:.5px;color:#888;border-bottom:1px solid #eee;padding-bottom:4px}.console-output{background:#212529;color:#51cf66;font-family:var(--font-code);padding:8px;height:120px;overflow-y:auto;border-radius:4px;font-size:.8rem;display:flex;flex-direction:column}.log-line{border-bottom:1px solid #343a40;padding:2px 0;white-space:nowrap}.empty{color:#868e96;font-style:italic}.console-output::-webkit-scrollbar{width:6px}.console-output::-webkit-scrollbar-track{background:#212529}.console-output::-webkit-scrollbar-thumb{background:#495057;border-radius:3px}@media(max-width:800px){.sandbox-container{flex-direction:column}aside{width:100%;height:auto;max-height:150px;flex-direction:row;gap:20px;padding:10px;border:none;border-top:1px solid #ccc}.right-panel{order:3}.canvas-area{order:1;flex:1}}")}
    `]),Po(fo,1,GtnSandbox);var Vo,Qo,Yo,Xo=Object.create,Jo=Object.defineProperty,ei=Object.getOwnPropertyDescriptor,ti=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$2"),ni=__name(e=>{throw TypeError(e)},"__typeError$2"),ai=__name((e,t,n)=>t in e?Jo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,"__defNormalProp$2"),ri=__name((e,t)=>Jo(e,"name",{value:t,configurable:!0}),"__name$2"),oi=__name(e=>[,,,Xo(e?.[ti("metadata")]??null)],"__decoratorStart$2"),ii=["class","method","getter","setter","accessor","field","value","get","set"],si=__name(e=>void 0!==e&&"function"!=typeof e?ni("Function expected"):e,"__expectFn$2"),li=__name((e,t,n,a,r)=>({kind:ii[e],name:t,metadata:a,addInitializer:__name(e=>n._?ni("Already initialized"):r.push(si(e||null)),"addInitializer")}),"__decoratorContext$2"),ci=__name((e,t)=>ai(t,ti("metadata"),e[3]),"__decoratorMetadata$2"),di=__name((e,t,n,a)=>{for(var r=0,o=e[t>>1],i=o&&o.length;r<i;r++)o[r].call(n);return a},"__runInitializers$2"),hi=__name((e,t,n,a,r,o)=>{var i,s,l,c=7&t,d=e[0]||(e[0]=[]),h=c&&(r=r.prototype,c<5&&(c>3||!0)&&ei(r,n));ri(r,n);for(var p=a.length-1;p>=0;p--)l=li(c,n,s={},e[3],d),i=(0,a[p])(r,l),s._=1,si(i)&&(r=i);return ci(e,r),h&&Jo(r,n,h),r},"__decorateElement$2");Vo=[i("gtn-workbench")];class GTNWorkbench extends(Yo=o){static{__name(this,"GTNWorkbench")}static styles=[z,t`
      ${n(":host{display:block;width:100%;height:100%;overflow:hidden}.workbench-layout{display:grid;grid-template-columns:300px 1fr 300px;height:100%;width:100%;overflow:hidden}.sidebar{display:flex;flex-direction:column;height:100%;background:var(--gtn-panel-bg, #fcfcfc)}.left-sidebar{border-right:1px solid var(--gtn-border-color, #e0e0e0)}.right-sidebar{border-left:1px solid var(--gtn-border-color, #e0e0e0)}.editor-area,.procedures-area{flex:1;overflow:hidden;display:flex;flex-direction:column}.toast-area{flex-shrink:0}::slotted(*){width:100%;height:100%}.main-content{position:relative;height:100%;width:100%;overflow:hidden;background:var(--gtn-canvas-bg, #ffffff)}@media(max-width:800px){.workbench-layout{flex-direction:column}.sidebar{width:100%;max-width:none;flex:1;border-right:none;border-bottom:1px solid #bdc3c7}.main-content{flex:1}}")}
    `];langService;constructor(){super();const e=p.getInstance();this.langService=e.resolve(u.LanguageService)}render(){return r`
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
    `}}di(Qo=oi(Yo),1,GTNWorkbench=hi(Qo,0,"GTNWorkbench",Vo,GTNWorkbench));var pi,ui,gi,bi,_i,mi,vi,Ti=Object.create,fi=Object.defineProperty,yi=Object.getOwnPropertyDescriptor,xi=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$1"),wi=__name(e=>{throw TypeError(e)},"__typeError$1"),Gi=__name((e,t,n)=>t in e?fi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,"__defNormalProp$1"),Ci=__name((e,t)=>fi(e,"name",{value:t,configurable:!0}),"__name$1"),ki=__name(e=>[,,,Ti(e?.[xi("metadata")]??null)],"__decoratorStart$1"),Si=["class","method","getter","setter","accessor","field","value","get","set"],Ei=__name(e=>void 0!==e&&"function"!=typeof e?wi("Function expected"):e,"__expectFn$1"),Li=__name((e,t,n,a,r)=>({kind:Si[e],name:t,metadata:a,addInitializer:__name(e=>n._?wi("Already initialized"):r.push(Ei(e||null)),"addInitializer")}),"__decoratorContext$1"),$i=__name((e,t)=>Gi(t,xi("metadata"),e[3]),"__decoratorMetadata$1"),Ai=__name((e,t,n,a)=>{for(var r=0,o=e[t>>1],i=o&&o.length;r<i;r++)1&t?o[r].call(n):a=o[r].call(n,a);return a},"__runInitializers$1"),Ri=__name((e,t,n,a,r,o)=>{var i,s,l,c,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,b=Si[h+5],_=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(r=r.prototype),h<5&&(h>3||!u)&&yi(h<4?r:{get[n](){return Ii(this,o)},set[n](e){return Pi(this,o,e)}},n));h?u&&h<4&&Ci(o,(h>2?"set ":h>1?"get ":"")+n):Ci(r,n);for(var T=a.length-1;T>=0;T--)c=Li(h,n,l={},e[3],m),h&&(c.static=p,c.private=u,d=c.access={has:u?e=>Mi(r,e):e=>n in e},3^h&&(d.get=u?e=>(1^h?Ii:Di)(e,r,4^h?o:v.get):e=>e[n]),h>2&&(d.set=u?(e,t)=>Pi(e,r,t,4^h?o:v.set):(e,t)=>e[n]=t)),s=(0,a[T])(h?h<4?u?o:v[b]:h>4?void 0:{get:v.get,set:v.set}:r,c),l._=1,4^h||void 0===s?Ei(s)&&(h>4?_.unshift(s):h?u?o=s:v[b]=s:r=s):"object"!=typeof s||null===s?wi("Object expected"):(Ei(i=s.get)&&(v.get=i),Ei(i=s.set)&&(v.set=i),Ei(i=s.init)&&_.unshift(i));return h||$i(e,r),v&&fi(r,n,v),u?4^h?o:v:r},"__decorateElement$1"),Ni=__name((e,t,n)=>Gi(e,"symbol"!=typeof t?t+"":t,n),"__publicField$1"),Fi=__name((e,t,n)=>t.has(e)||wi("Cannot "+n),"__accessCheck$1"),Mi=__name((e,t)=>Object(t)!==t?wi('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$1"),Ii=__name((e,t,n)=>(Fi(e,t,"read from private field"),n?n.call(e):t.get(e)),"__privateGet$1"),Oi=__name((e,t,n)=>t.has(e)?wi("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),"__privateAdd$1"),Pi=__name((e,t,n,a)=>(Fi(e,t,"write to private field"),a?a.call(e,n):t.set(e,n),n),"__privateSet$1"),Di=__name((e,t,n)=>(Fi(e,t,"access private method"),n),"__privateMethod$1");bi=[i("gtn-procedures-panel")];class GTNProceduresPanel extends(gi=o,ui=[s({type:String})],pi=[l(".editor-container")],gi){static{__name(this,"GTNProceduresPanel")}constructor(){super(),Oi(this,mi,Ai(_i,8,this)),Ai(_i,11,this),Oi(this,vi,Ai(_i,12,this)),Ai(_i,15,this),Ni(this,"editorView"),Ni(this,"langService"),Ni(this,"langController",new UiLanguageController(this)),Ni(this,"languageCompartment",new O),Ni(this,"syntaxService");const e=p.getInstance();this.langService=e.resolve(u.LanguageService),this.syntaxService=e.resolve(u.SyntaxService),this.code=""}firstUpdated(){this.initEditor()}disconnectedCallback(){super.disconnectedCallback(),this.editorView?.destroy()}initEditor(){if(!this.editorContainer)return;const e=createAntlrHighlighter(this.syntaxService,this.langService),t=A.create({doc:this.code,extensions:[R,F.of([M]),N,Ce,e,this.languageCompartment.of([e]),$.updateListener.of(e=>{if(!e.docChanged)return;const t=e.state.doc.toString();this.code=t,this.onEditorChange(t)})]});this.editorView=new $({state:t,parent:this.editorContainer}),this.updateLanguageFeatures()}onEditorChange(e){this.dispatchEvent(new CustomEvent("procedures-change",{detail:{code:e},bubbles:!0,composed:!0}))}updated(e){super.updated(e),this.updateLanguageFeatures(),this.translateCodeInEditor(e)}translateCodeInEditor(e){if(!e.has("code")||!this.editorView)return;const t=this.editorView.state.doc.toString();t!==this.code&&this.editorView.dispatch({changes:{from:0,to:t.length,insert:this.code}})}updateLanguageFeatures(){if(!this.editorView)return;const e=this.langService.getAllKeywords(),t=I({override:[t=>{const n=t.matchBefore(/\w*/);return!n||n.from===n.to&&!t.explicit?null:{from:n.from,options:e.map(e=>({label:e,type:"keyword"}))}}]});this.editorView.dispatch({effects:this.languageCompartment.reconfigure([t,createAntlrHighlighter(this.syntaxService,this.langService)])})}render(){return r`
      <div class="header">
        <span>${__name(e=>this.langService.translate(e),"t")("workbench.procedures.title")}</span>
      </div>
      <div class="editor-container"></div>
    `}}_i=ki(gi),mi=new WeakMap,vi=new WeakMap,Ri(_i,4,"code",ui,GTNProceduresPanel,mi),Ri(_i,4,"editorContainer",pi,GTNProceduresPanel,vi),GTNProceduresPanel=Ri(_i,0,"GTNProceduresPanel",bi,GTNProceduresPanel),Ni(GTNProceduresPanel,"styles",t`
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
  `),Ai(_i,1,GTNProceduresPanel);var Ui,zi,Hi,ji,Wi,Bi,Ki,qi,Zi,Vi,Qi,Yi,Xi,Ji,es,ts=Object.create,ns=Object.defineProperty,as=Object.getOwnPropertyDescriptor,rs=__name((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol"),os=__name(e=>{throw TypeError(e)},"__typeError"),is=__name((e,t,n)=>t in e?ns(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,"__defNormalProp"),ss=__name((e,t)=>ns(e,"name",{value:t,configurable:!0}),"__name"),ls=__name(e=>[,,,ts(e?.[rs("metadata")]??null)],"__decoratorStart"),cs=["class","method","getter","setter","accessor","field","value","get","set"],ds=__name(e=>void 0!==e&&"function"!=typeof e?os("Function expected"):e,"__expectFn"),hs=__name((e,t,n,a,r)=>({kind:cs[e],name:t,metadata:a,addInitializer:__name(e=>n._?os("Already initialized"):r.push(ds(e||null)),"addInitializer")}),"__decoratorContext"),ps=__name((e,t)=>is(t,rs("metadata"),e[3]),"__decoratorMetadata"),us=__name((e,t,n,a)=>{for(var r=0,o=e[t>>1],i=o&&o.length;r<i;r++)1&t?o[r].call(n):a=o[r].call(n,a);return a},"__runInitializers"),gs=__name((e,t,n,a,r,o)=>{var i,s,l,c,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,b=cs[h+5],_=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(r=r.prototype),h<5&&(h>3||!u)&&as(h<4?r:{get[n](){return vs(this,o)},set[n](e){return fs(this,o,e)}},n));h?u&&h<4&&ss(o,(h>2?"set ":h>1?"get ":"")+n):ss(r,n);for(var T=a.length-1;T>=0;T--)c=hs(h,n,l={},e[3],m),h&&(c.static=p,c.private=u,d=c.access={has:u?e=>ms(r,e):e=>n in e},3^h&&(d.get=u?e=>(1^h?vs:ys)(e,r,4^h?o:v.get):e=>e[n]),h>2&&(d.set=u?(e,t)=>fs(e,r,t,4^h?o:v.set):(e,t)=>e[n]=t)),s=(0,a[T])(h?h<4?u?o:v[b]:h>4?void 0:{get:v.get,set:v.set}:r,c),l._=1,4^h||void 0===s?ds(s)&&(h>4?_.unshift(s):h?u?o=s:v[b]=s:r=s):"object"!=typeof s||null===s?os("Object expected"):(ds(i=s.get)&&(v.get=i),ds(i=s.set)&&(v.set=i),ds(i=s.init)&&_.unshift(i));return h||ps(e,r),v&&ns(r,n,v),u?4^h?o:v:r},"__decorateElement"),bs=__name((e,t,n)=>is(e,"symbol"!=typeof t?t+"":t,n),"__publicField"),_s=__name((e,t,n)=>t.has(e)||os("Cannot "+n),"__accessCheck"),ms=__name((e,t)=>Object(t)!==t?os('Cannot use the "in" operator on this value'):e.has(t),"__privateIn"),vs=__name((e,t,n)=>(_s(e,t,"read from private field"),n?n.call(e):t.get(e)),"__privateGet"),Ts=__name((e,t,n)=>t.has(e)?os("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),"__privateAdd"),fs=__name((e,t,n,a)=>(_s(e,t,"write to private field"),a?a.call(e,n):t.set(e,n),n),"__privateSet"),ys=__name((e,t,n)=>(_s(e,t,"access private method"),n),"__privateMethod");const xs={fr:'\ncrayon rouge;\npas := 36;\nrot := 360 / pas;\nrep 36 [\n  av rot;\n  td rot;\n]\ncrayon "vert"\npetitcarre\n',en:"\ncolor red;\nstep := 36;\nrot := 360 / pas;\nrepeat 36 [\n  fd rot;\n  rt rot;\n]\ncolor green\nlittlesquare\n"},ws={fr:"pour petitcarre\n  rep 4 [\n    av 50\n    td 90\n  ]\nfin",en:"def littlesquare\n  repeat 4 [\n    fd 50\n    rt 90\n  ]\nend"};qi=[i("gtn-app")];class GTNApp extends(Ki=o,Bi=[h()],Wi=[h()],ji=[h()],Hi=[h()],zi=[h()],Ui=[h()],Ki){static{__name(this,"GTNApp")}constructor(){super(),Ts(this,Vi,us(Zi,8,this,"")),us(Zi,11,this),Ts(this,Qi,us(Zi,12,this,"")),us(Zi,15,this),Ts(this,Yi,us(Zi,16,this,[])),us(Zi,19,this),Ts(this,Xi,us(Zi,20,this,"SANDBOX")),us(Zi,23,this),Ts(this,Ji,us(Zi,24,this,[])),us(Zi,27,this),Ts(this,es,us(Zi,28,this,"WRAP")),us(Zi,31,this),bs(this,"interpreter"),bs(this,"langService"),bs(this,"turtleRepo"),bs(this,"projectService"),bs(this,"syntaxService"),bs(this,"appState"),bs(this,"uiUnsubscribe"),bs(this,"appStateUnsubscribe");const e=p.getInstance();this.interpreter=e.resolve(u.Interpreter),this.langService=e.resolve(u.LanguageService),this.turtleRepo=e.resolve(u.TurtleRepository),this.projectService=e.resolve(u.ProjectService),this.syntaxService=e.resolve(u.SyntaxService),this.appState=e.resolve(u.ApplicationState),this.currentBoundaryMode=this.appState.boundaryMode,this.turtleRepo.setBoundaryMode(this.currentBoundaryMode);const t=this.langService.getDslLanguage(),n=xs[t]||"",a=ws[t]||"";this.code=n,this.proceduresCode=a}connectedCallback(){super.connectedCallback(),this.uiUnsubscribe=this.langService.subscribeUiListeners(this.handleLanguageChange.bind(this)),this.appStateUnsubscribe=this.appState.subscribe(()=>{const e=this.appState.boundaryMode;this.currentBoundaryMode=e,this.turtleRepo.setBoundaryMode(e)})}disconnectedCallback(){super.disconnectedCallback(),this.uiUnsubscribe&&this.uiUnsubscribe(),this.appStateUnsubscribe&&this.appStateUnsubscribe()}firstUpdated(){super.firstUpdated(new Map),this.initializeLanguageAndProcedures()}async initializeLanguageAndProcedures(){try{await this.langService.initialize(),this.userProcedures=this.syntaxService.extractProcedures(this.proceduresCode),this.validateCombinedCode(),this.requestUpdate()}catch(e){console.error("Failed to initialize DSL resources:",e)}}handleLanguageChange(e){this.validateCombinedCode()}handleCodeChange(e){this.code=e.detail.code,this.validateCombinedCode()}handleProceduresChange(e){this.proceduresCode=e.detail.code,this.userProcedures=this.syntaxService.extractProcedures(this.proceduresCode),this.validateCombinedCode()}validateCombinedCode(){const e=`${this.proceduresCode}\n${this.code}`;this.errors=this.syntaxService.validate(e)}handleViewChange(e){this.viewMode=e.detail.view}handleBoundaryModeChange(e){const{mode:t}=e.detail;this.appState.setBoundaryMode(t)}async handleRun(){if(this.validateCombinedCode(),this.errors.length>0)console.warn("Cannot run code with syntax errors: ",this.errors);else try{await this.interpreter.execute(this.code,this.proceduresCode)}catch(e){console.error("[GéoTortue NG] Execution error:",e),alert("Error executing GéoTortue commands")}}handleClear(){this.turtleRepo.clear();const e=p.getInstance(),t=e.resolve(u.GeometryService),n=e.resolve(u.TurtleRepository).getNextId();e.resolve(u.ProcedureRegistry).clear();const a=new k(n,t);this.turtleRepo.save(a)}async handleSaveProject(){try{await this.projectService.saveProject({code:this.code,procedures:[this.proceduresCode]}),alert("Project saved!")}catch(e){console.error(e),alert("Failed to save project")}}async handleOpenProject(){try{const{code:e,procedures:t}=await this.projectService.loadProject();e&&(this.code=e,this.proceduresCode=t?.[0]??""),alert("Project loaded!")}catch(e){console.error(e)}}async handleDslChange(e){const{oldLang:t,newLang:n}=e.detail;try{const e=await this.langService.translateScript(this.code,t,n);this.code=e;const a=await this.langService.translateScript(this.proceduresCode,t,n);this.proceduresCode=a}catch(a){console.error("Failed to translate DSL:",a)}}render(){return r`
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
    `}}Zi=ls(Ki),Vi=new WeakMap,Qi=new WeakMap,Yi=new WeakMap,Xi=new WeakMap,Ji=new WeakMap,es=new WeakMap,gs(Zi,4,"code",Bi,GTNApp,Vi),gs(Zi,4,"proceduresCode",Wi,GTNApp,Qi),gs(Zi,4,"errors",ji,GTNApp,Yi),gs(Zi,4,"viewMode",Hi,GTNApp,Xi),gs(Zi,4,"userProcedures",zi,GTNApp,Ji),gs(Zi,4,"currentBoundaryMode",Ui,GTNApp,es),GTNApp=gs(Zi,0,"GTNApp",qi,GTNApp),bs(GTNApp,"styles",[z,t`
      ${n(":host{display:flex;flex-direction:column;height:100vh;width:100vw;overflow:hidden;background-color:#ecf0f1}.header{flex:0 0 auto;position:relative;z-index:1000}main{flex:1;display:block;overflow:hidden;position:relative;z-index:1}@media(max-width:800px){:host{display:flex}}gtn-workbench,gtn-sandbox{display:block;height:100%;width:100%}")}
    `]),us(Zi,1,GTNApp);export{GTNApp};
//# sourceMappingURL=gtn-app-SljslUZ1.js.map
