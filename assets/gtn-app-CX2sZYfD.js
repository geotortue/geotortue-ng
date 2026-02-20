var e=Object.defineProperty,t=(t,a)=>e(t,"name",{value:a,configurable:!0});import{G as a,a as r,t as i,D as n,b as o,c as s,d as c,e as l,T as d,f as h,g as p,N as u,h as g}from"./index-5sCKruVG.js";import{w as b,x as _,y as m,z as v,A as f,G as T,H as y,J as w,K as x,L as $}from"./vendor-C1fvB01C.js";import{V as G,R as S,D as C,E as k,a as L,b as E,o as R,k as A,i as O,c as I,C as D}from"./vendor-cm-CWmDyyML.js";import{g as M}from"./vendor-antlr-BhUY6QBA.js";import"./vendor-math-DHYcPoV1.js";import"./vendor-three-BBCA40AT.js";var N=(e=>(e[e.GT_REP=1]="GT_REP",e[e.GT_WHILE=2]="GT_WHILE",e[e.GT_IF=3]="GT_IF",e[e.GT_THEN=4]="GT_THEN",e[e.GT_ELSE=5]="GT_ELSE",e[e.GT_FOR_EACH=6]="GT_FOR_EACH",e[e.GT_FROM=7]="GT_FROM",e[e.GT_TO=8]="GT_TO",e[e.GT_IN_LIST=9]="GT_IN_LIST",e[e.GT_FUN=10]="GT_FUN",e[e.GT_ASK_FOR=11]="GT_ASK_FOR",e[e.GT_ALL=12]="GT_ALL",e[e.GT_ASSIGN_KEY=13]="GT_ASSIGN_KEY",e[e.GT_RESTE=14]="GT_RESTE",e[e.GT_BINOM=15]="GT_BINOM",e[e.GT_ALEA=16]="GT_ALEA",e[e.GT_FORWARD=17]="GT_FORWARD",e[e.GT_BACKWARD=18]="GT_BACKWARD",e[e.GT_RIGHT=19]="GT_RIGHT",e[e.GT_LEFT=20]="GT_LEFT",e[e.GT_VG=21]="GT_VG",e[e.GT_RZ=22]="GT_RZ",e[e.GT_HIDE_TURTLE=23]="GT_HIDE_TURTLE",e[e.GT_SHOW_TURTLE=24]="GT_SHOW_TURTLE",e[e.GT_PEN_UP=25]="GT_PEN_UP",e[e.GT_PEN_DOWN=26]="GT_PEN_DOWN",e[e.GT_THICKNESS=27]="GT_THICKNESS",e[e.GT_FILL=28]="GT_FILL",e[e.GT_PVH=29]="GT_PVH",e[e.GT_PVB=30]="GT_PVB",e[e.GT_PVG=31]="GT_PVG",e[e.GT_PVD=32]="GT_PVD",e[e.GT_VISE=33]="GT_VISE",e[e.GT_TLP=34]="GT_TLP",e[e.GT_BOUSSOLE=35]="GT_BOUSSOLE",e[e.GT_MIMIC=36]="GT_MIMIC",e[e.GT_MIRROR=37]="GT_MIRROR",e[e.GT_PVXY=38]="GT_PVXY",e[e.GT_PVXZ=39]="GT_PVXZ",e[e.GT_PVYZ=40]="GT_PVYZ",e[e.GT_WRITE=41]="GT_WRITE",e[e.GT_SAY=42]="GT_SAY",e[e.GT_SNAPSHOT=43]="GT_SNAPSHOT",e[e.GT_PAUSE=44]="GT_PAUSE",e[e.GT_RETURN=45]="GT_RETURN",e[e.GT_STOP=46]="GT_STOP",e[e.GT_WAIT=47]="GT_WAIT",e[e.GT_CIRCLE=48]="GT_CIRCLE",e[e.GT_ARC=49]="GT_ARC",e[e.GT_POINT=50]="GT_POINT",e[e.GT_GLOBAL=51]="GT_GLOBAL",e[e.GT_EFF=52]="GT_EFF",e[e.GT_INIT=53]="GT_INIT",e[e.GT_AFF=54]="GT_AFF",e[e.GT_MG=55]="GT_MG",e[e.GT_PLAY=56]="GT_PLAY",e[e.GT_SCORE=57]="GT_SCORE",e[e.GT_CONCERT=58]="GT_CONCERT",e[e.GT_EXECUTE=59]="GT_EXECUTE",e[e.GT_UNDO=60]="GT_UNDO",e[e.GT_PEN_COLOR=61]="GT_PEN_COLOR",e[e.GT_ASSIGN=62]="GT_ASSIGN",e[e.GT_LBRACKET=63]="GT_LBRACKET",e[e.GT_RBRACKET=64]="GT_RBRACKET",e[e.GT_LPAREN=65]="GT_LPAREN",e[e.GT_RPAREN=66]="GT_RPAREN",e[e.GT_COMMA=67]="GT_COMMA",e[e.GT_SEMICOLON=68]="GT_SEMICOLON",e[e.GT_COLON=69]="GT_COLON",e[e.GT_PLUS=70]="GT_PLUS",e[e.GT_MINUS=71]="GT_MINUS",e[e.GT_MULT=72]="GT_MULT",e[e.GT_DIV=73]="GT_DIV",e[e.GT_POW=74]="GT_POW",e[e.GT_EQ=75]="GT_EQ",e[e.GT_NEQ=76]="GT_NEQ",e[e.GT_LT=77]="GT_LT",e[e.GT_LTE=78]="GT_LTE",e[e.GT_GT=79]="GT_GT",e[e.GT_GTE=80]="GT_GTE",e[e.GT_NUMBER=81]="GT_NUMBER",e[e.GT_STRING=82]="GT_STRING",e[e.GT_ID=83]="GT_ID",e[e.GT_WORD=84]="GT_WORD",e[e.GT_COMMENT=85]="GT_COMMENT",e[e.GT_BLOCK_COMMENT=86]="GT_BLOCK_COMMENT",e[e.GT_WS=87]="GT_WS",e))(N||{});const P={1:"GT_REP",2:"GT_WHILE",3:"GT_IF",4:"GT_THEN",5:"GT_ELSE",6:"GT_FOR_EACH",7:"GT_FROM",8:"GT_TO",9:"GT_IN_LIST",10:"GT_FUN",11:"GT_ASK_FOR",12:"GT_ALL",13:"GT_ASSIGN_KEY",14:"GT_RESTE",15:"GT_BINOM",16:"GT_ALEA",17:"GT_FORWARD",18:"GT_BACKWARD",19:"GT_RIGHT",20:"GT_LEFT",21:"GT_VG",22:"GT_RZ",23:"GT_HIDE_TURTLE",24:"GT_SHOW_TURTLE",25:"GT_PEN_UP",26:"GT_PEN_DOWN",27:"GT_THICKNESS",28:"GT_FILL",29:"GT_PVH",30:"GT_PVB",31:"GT_PVG",32:"GT_PVD",33:"GT_VISE",34:"GT_TLP",35:"GT_BOUSSOLE",36:"GT_MIMIC",37:"GT_MIRROR",38:"GT_PVXY",39:"GT_PVXZ",40:"GT_PVYZ",41:"GT_WRITE",42:"GT_SAY",43:"GT_SNAPSHOT",44:"GT_PAUSE",45:"GT_RETURN",46:"GT_STOP",47:"GT_WAIT",48:"GT_CIRCLE",49:"GT_ARC",50:"GT_POINT",51:"GT_GLOBAL",52:"GT_EFF",53:"GT_INIT",54:"GT_AFF",55:"GT_MG",56:"GT_PLAY",57:"GT_SCORE",58:"GT_CONCERT",59:"GT_EXECUTE",60:"GT_UNDO",61:"GT_PEN_COLOR",62:":=",63:"[",64:"]",65:"(",66:")",67:",",68:";",69:":",70:"+",71:"-",72:"*",73:"/",74:"^",75:"=",76:"!=",77:"<",78:"<=",79:">",80:">="};function F(e){return P[e]}t(F,"getLiteralName");const U=b`
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
`;class j{static{t(this,"UiLanguageController")}host;languageService;unsubscribe;constructor(e){this.host=e,this.languageService=a.getInstance().resolve(r.LanguageService),e.addController(this)}hostConnected(){this.unsubscribe=this.languageService.subscribeUiListeners(()=>{this.host.requestUpdate()})}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null)}}var z,K,W,B,H,q,V,Z,Y,Q,X,J,ee,te=Object.create,ae=Object.defineProperty,re=Object.getOwnPropertyDescriptor,ie=t((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$e"),ne=t(e=>{throw TypeError(e)},"__typeError$e"),oe=t((e,t,a)=>t in e?ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$e"),se=t((e,t)=>ae(e,"name",{value:t,configurable:!0}),"__name$e"),ce=t(e=>[,,,te(e?.[ie("metadata")]??null)],"__decoratorStart$e"),le=["class","method","getter","setter","accessor","field","value","get","set"],de=t(e=>void 0!==e&&"function"!=typeof e?ne("Function expected"):e,"__expectFn$e"),he=t((e,a,r,i,n)=>({kind:le[e],name:a,metadata:i,addInitializer:t(e=>r._?ne("Already initialized"):n.push(de(e||null)),"addInitializer")}),"__decoratorContext$e"),pe=t((e,t)=>oe(t,ie("metadata"),e[3]),"__decoratorMetadata$e"),ue=t((e,t,a,r)=>{for(var i=0,n=e[t>>1],o=n&&n.length;i<o;i++)1&t?n[i].call(a):r=n[i].call(a,r);return r},"__runInitializers$e"),ge=t((e,t,a,r,i,n)=>{var o,s,c,l,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,b=le[h+5],_=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(i=i.prototype),h<5&&(h>3||!u)&&re(h<4?i:{get[a](){return ve(this,n)},set[a](e){return Te(this,n,e)}},a));h?u&&h<4&&se(n,(h>2?"set ":h>1?"get ":"")+a):se(i,a);for(var f=r.length-1;f>=0;f--)l=he(h,a,c={},e[3],m),h&&(l.static=p,l.private=u,d=l.access={has:u?e=>me(i,e):e=>a in e},3^h&&(d.get=u?e=>(1^h?ve:ye)(e,i,4^h?n:v.get):e=>e[a]),h>2&&(d.set=u?(e,t)=>Te(e,i,t,4^h?n:v.set):(e,t)=>e[a]=t)),s=(0,r[f])(h?h<4?u?n:v[b]:h>4?void 0:{get:v.get,set:v.set}:i,l),c._=1,4^h||void 0===s?de(s)&&(h>4?_.unshift(s):h?u?n=s:v[b]=s:i=s):"object"!=typeof s||null===s?ne("Object expected"):(de(o=s.get)&&(v.get=o),de(o=s.set)&&(v.set=o),de(o=s.init)&&_.unshift(o));return h||pe(e,i),v&&ae(i,a,v),u?4^h?n:v:i},"__decorateElement$e"),be=t((e,t,a)=>oe(e,"symbol"!=typeof t?t+"":t,a),"__publicField$8"),_e=t((e,t,a)=>t.has(e)||ne("Cannot "+a),"__accessCheck$8"),me=t((e,t)=>Object(t)!==t?ne('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$8"),ve=t((e,t,a)=>(_e(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet$8"),fe=t((e,t,a)=>t.has(e)?ne("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd$8"),Te=t((e,t,a,r)=>(_e(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet$8"),ye=t((e,t,a)=>(_e(e,t,"access private method"),a),"__privateMethod$8");V=[T("gtn-toolbar")];class we extends(q=f,H=[y({type:String})],B=[y({type:String})],W=[y({type:String})],K=[y({type:String})],z=[y({type:String})],q){static{t(this,"GTNToolbar")}constructor(){super(),be(this,"langService"),be(this,"appState"),be(this,"langController",new j(this)),fe(this,Y,ue(Z,8,this,i(n))),ue(Z,11,this),fe(this,Q,ue(Z,12,this,o(n))),ue(Z,15,this),fe(this,X,ue(Z,16,this,s)),ue(Z,19,this),fe(this,J,ue(Z,20,this,c)),ue(Z,23,this),fe(this,ee,ue(Z,24,this,"EDITOR")),ue(Z,27,this);const e=a.getInstance();this.langService=e.resolve(r.LanguageService),this.appState=e.resolve(r.ApplicationState),this.currentUiLang=this.langService.getUiLanguage(),this.currentDslLang=this.langService.getDslLanguage(),this.appState.subscribe(()=>{this.currentMode=this.appState.mode,this.currentCamera=this.appState.cameraType})}handleRun(){this.dispatchEvent(new CustomEvent("run"))}handleClear(){this.dispatchEvent(new CustomEvent("clear"))}handleSave(){this.dispatchEvent(new CustomEvent("save-project"))}handleOpen(){this.dispatchEvent(new CustomEvent("open-project"))}async handleUiLangChange(e){const t=e.target,a=i(t.value);await this.langService.setUiLanguage(a),this.currentUiLang=a}async handleDslLangChange(e){const t=e.target,a=this.currentDslLang,r=o(t.value);await this.langService.setDslLanguage(r),this.currentDslLang=r,this.dispatchEvent(new CustomEvent("dsl-lang-change",{detail:{oldLang:a,newLang:r},bubbles:!0,composed:!0}))}handleToggleMode(){this.appState.toggleMode()}handleToggleCamera(){this.appState.toggleCameraType()}handleViewChange(e){this.currentView=e,this.dispatchEvent(new CustomEvent("view-change",{detail:{view:e},bubbles:!0,composed:!0}))}render(){const e=t(e=>this.langService.translate(e),"t");return this.currentUiLang=this.langService.getUiLanguage(),this.currentDslLang=this.langService.getDslLanguage(),v`
      <div class="group">
        <span class="material-icons">school</span>
        <span class="title">${e("app.title")}</span>
      </div>

      <div
        class="group view-switcher"
        style="margin-left: 1rem; border-right: 1px solid #ccc; padding-right: 1rem;"
      >
        <button
          class=${m({active:"EDITOR"===this.currentView})}
          @click=${()=>this.handleViewChange("EDITOR")}
          title="${e("mode.editor")}"
        >
          <span class="material-icons">code</span>
        </button>
        <button
          class=${m({active:"SANDBOX"===this.currentView})}
          @click=${()=>this.handleViewChange("SANDBOX")}
          title="${e("mode.sandbox")}"
        >
          <span class="material-icons">touch_app</span>
        </button>
      </div>

      ${"EDITOR"===this.currentView?v`
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
            </div>
          `:v`
            <div class="group">
              <span style="font-size: 0.8rem; color: #666; font-style:italic;"
                >Mode Interactif</span
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
        ${"3D"===this.currentMode?v`
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
        ${"EDITOR"===this.currentView?v`
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
    `}}function xe(e,a){const r=e.getTokenStyleMap(),i=new d(a);return G.fromClass(class{decorations;constructor(e){this.decorations=this.buildDecorations(e)}update(e){(e.docChanged||e.viewportChanged)&&(this.decorations=this.buildDecorations(e.view))}buildDecorations(e){const t=new S,a=e.state.doc.toString(),n=M.fromString(a),o=new l(n);o.removeErrorListeners();const s=i.getRefinedTokens(()=>o.getAllTokens());for(const i of s){const e=r.get(i.type);e&&t.add(i.start,i.stop+1,C.mark({class:`cm-gt-${e}`}))}return t.finish()}},{decorations:t(e=>e.decorations,"decorations")})}Z=ce(q),Y=new WeakMap,Q=new WeakMap,X=new WeakMap,J=new WeakMap,ee=new WeakMap,ge(Z,4,"currentUiLang",H,we,Y),ge(Z,4,"currentDslLang",B,we,Q),ge(Z,4,"currentMode",W,we,X),ge(Z,4,"currentCamera",K,we,J),ge(Z,4,"currentView",z,we,ee),we=ge(Z,0,"GTNToolbar",V,we),be(we,"styles",[U,b`
      ${_(":host{display:flex;justify-content:space-between;align-items:center;padding:0 1rem;background-color:#2c3e50;color:#fff;height:50px;box-shadow:0 2px 5px #0003}.group{display:flex;gap:10px;align-items:center}.label{font-size:.7rem;font-weight:600;color:#bdc3c7;margin-bottom:2px;text-transform:uppercase;letter-spacing:.5px}.selector-wrapper{display:flex;flex-direction:column;align-items:center}.separator{width:1px;height:25px;background:#46607a;margin:0 5px}button{background:#34495e;border:1px solid #46607a;color:#fff;padding:5px 12px;border-radius:4px;cursor:pointer;display:flex;align-items:center;gap:5px;font-size:.9rem;transition:background .2s}button:hover{background:#46607a}button.primary{background:#27ae60;border-color:#2ecc71}button.primary:hover{background:#2ecc71}button.danger{background:#c0392b;border-color:#e74c3c}select{background:#34495e;color:#fff;border:1px solid #46607a;padding:2px 5px;border-radius:4px;cursor:pointer;font-size:.85rem;min-width:50px}.title{font-weight:700;font-family:Inconsolata,monospace;font-size:1.2rem}.mode-badge{font-weight:900;color:#f1c40f;min-width:30px;justify-content:center}")}
      /* Add specific styles for the view switcher if not in SCSS */
      .view-switcher button.active {
        background-color: #e3f2fd; /* Light Blue highlight */
        color: #1565c0;
        border-bottom: 2px solid #1565c0;
      }
    `]),ue(Z,1,we),t(xe,"createAntlrHighlighter");const $e=k.baseTheme({".cm-gt-keyword":{color:"#c678dd",fontWeight:"bold"},".cm-gt-command":{color:"#61afef"},".cm-gt-number":{color:"#d19a66"},".cm-gt-string":{color:"#98c379"},".cm-gt-variable":{color:"#e06c75"},".cm-gt-comment":{color:"#5c6370",fontStyle:"italic"},".cm-gt-operator":{color:"#56b6c2"}});var Ge,Se,Ce,ke,Le,Ee,Re,Ae=Object.create,Oe=Object.defineProperty,Ie=Object.getOwnPropertyDescriptor,De=t((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$d"),Me=t(e=>{throw TypeError(e)},"__typeError$d"),Ne=t((e,t,a)=>t in e?Oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$d"),Pe=t((e,t)=>Oe(e,"name",{value:t,configurable:!0}),"__name$d"),Fe=t(e=>[,,,Ae(e?.[De("metadata")]??null)],"__decoratorStart$d"),Ue=["class","method","getter","setter","accessor","field","value","get","set"],je=t(e=>void 0!==e&&"function"!=typeof e?Me("Function expected"):e,"__expectFn$d"),ze=t((e,a,r,i,n)=>({kind:Ue[e],name:a,metadata:i,addInitializer:t(e=>r._?Me("Already initialized"):n.push(je(e||null)),"addInitializer")}),"__decoratorContext$d"),Ke=t((e,t)=>Ne(t,De("metadata"),e[3]),"__decoratorMetadata$d"),We=t((e,t,a,r)=>{for(var i=0,n=e[t>>1],o=n&&n.length;i<o;i++)1&t?n[i].call(a):r=n[i].call(a,r);return r},"__runInitializers$d"),Be=t((e,t,a,r,i,n)=>{var o,s,c,l,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,b=Ue[h+5],_=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(i=i.prototype),h<5&&(h>3||!u)&&Ie(h<4?i:{get[a](){return Ze(this,n)},set[a](e){return Qe(this,n,e)}},a));h?u&&h<4&&Pe(n,(h>2?"set ":h>1?"get ":"")+a):Pe(i,a);for(var f=r.length-1;f>=0;f--)l=ze(h,a,c={},e[3],m),h&&(l.static=p,l.private=u,d=l.access={has:u?e=>Ve(i,e):e=>a in e},3^h&&(d.get=u?e=>(1^h?Ze:Xe)(e,i,4^h?n:v.get):e=>e[a]),h>2&&(d.set=u?(e,t)=>Qe(e,i,t,4^h?n:v.set):(e,t)=>e[a]=t)),s=(0,r[f])(h?h<4?u?n:v[b]:h>4?void 0:{get:v.get,set:v.set}:i,l),c._=1,4^h||void 0===s?je(s)&&(h>4?_.unshift(s):h?u?n=s:v[b]=s:i=s):"object"!=typeof s||null===s?Me("Object expected"):(je(o=s.get)&&(v.get=o),je(o=s.set)&&(v.set=o),je(o=s.init)&&_.unshift(o));return h||Ke(e,i),v&&Oe(i,a,v),u?4^h?n:v:i},"__decorateElement$d"),He=t((e,t,a)=>Ne(e,"symbol"!=typeof t?t+"":t,a),"__publicField$7"),qe=t((e,t,a)=>t.has(e)||Me("Cannot "+a),"__accessCheck$7"),Ve=t((e,t)=>Object(t)!==t?Me('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$7"),Ze=t((e,t,a)=>(qe(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet$7"),Ye=t((e,t,a)=>t.has(e)?Me("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd$7"),Qe=t((e,t,a,r)=>(qe(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet$7"),Xe=t((e,t,a)=>(qe(e,t,"access private method"),a),"__privateMethod$7");ke=[T("gtn-editor")];class Je extends(Ce=f,Se=[y({type:String})],Ge=[w("#editor-container")],Ce){static{t(this,"GTNEditor")}constructor(){super(),Ye(this,Ee,We(Le,8,this)),We(Le,11,this),Ye(this,Re,We(Le,12,this)),We(Le,15,this),He(this,"editor"),He(this,"langService"),He(this,"langController",new j(this)),He(this,"languageCompartment",new D),He(this,"syntaxService");const e=a.getInstance();this.langService=e.resolve(r.LanguageService),this.syntaxService=e.resolve(r.SyntaxService),this.code=""}firstUpdated(){this.initEditor()}initEditor(){const e=xe(this.syntaxService,this.langService),t=L.create({doc:this.code,extensions:[E,A.of([O]),R,$e,e,this.languageCompartment.of([e]),k.updateListener.of(e=>{e.docChanged&&(this.code=e.state.doc.toString(),this.dispatchEvent(new CustomEvent("code-change",{detail:{code:this.code},bubbles:!0,composed:!0})))})]});this.editor=new k({state:t,parent:this.editorContainer}),this.updateLanguageFeatures()}updated(e){super.updated(e),this.updateLanguageFeatures(),this.translateCodeInEditor(e)}translateCodeInEditor(e){if(!e.has("code")||!this.editor)return;const t=this.editor.state.doc.toString();t!==this.code&&this.editor.dispatch({changes:{from:0,to:t.length,insert:this.code}})}updateLanguageFeatures(){if(!this.editor)return;const e=this.langService.getAllKeywords(),t=I({override:[t=>{const a=t.matchBefore(/\w*/);return!a||a.from===a.to&&!t.explicit?null:{from:a.from,options:e.map(e=>({label:e,type:"keyword"}))}}]});this.editor.dispatch({effects:this.languageCompartment.reconfigure([t,xe(this.syntaxService,this.langService)])})}disconnectedCallback(){super.disconnectedCallback(),this.editor?.destroy()}render(){return v`<div id="editor-container"></div>`}}Le=Fe(Ce),Ee=new WeakMap,Re=new WeakMap,Be(Le,4,"code",Se,Je,Ee),Be(Le,4,"editorContainer",Ge,Je,Re),Je=Be(Le,0,"GTNEditor",ke,Je),He(Je,"styles",b`
    ${_(":host{display:block;font-family:var(--font-code);height:100%;overflow:hidden;font-size:14px}#editor-container,.cm-editor{height:100%}.cm-editor .cm-scroller{font-family:inherit}")}
  `),We(Le,1,Je);var et,tt,at,rt,it,nt=Object.create,ot=Object.defineProperty,st=Object.getOwnPropertyDescriptor,ct=t((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$c"),lt=t(e=>{throw TypeError(e)},"__typeError$c"),dt=t((e,t,a)=>t in e?ot(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$c"),ht=t((e,t)=>ot(e,"name",{value:t,configurable:!0}),"__name$c"),pt=t(e=>[,,,nt(e?.[ct("metadata")]??null)],"__decoratorStart$c"),ut=["class","method","getter","setter","accessor","field","value","get","set"],gt=t(e=>void 0!==e&&"function"!=typeof e?lt("Function expected"):e,"__expectFn$c"),bt=t((e,a,r,i,n)=>({kind:ut[e],name:a,metadata:i,addInitializer:t(e=>r._?lt("Already initialized"):n.push(gt(e||null)),"addInitializer")}),"__decoratorContext$c"),_t=t((e,t)=>dt(t,ct("metadata"),e[3]),"__decoratorMetadata$c"),mt=t((e,t,a,r)=>{for(var i=0,n=e[t>>1],o=n&&n.length;i<o;i++)1&t?n[i].call(a):r=n[i].call(a,r);return r},"__runInitializers$c"),vt=t((e,t,a,r,i,n)=>{var o,s,c,l,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,b=ut[h+5],_=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(i=i.prototype),h<5&&(h>3||!u)&&st(h<4?i:{get[a](){return wt(this,n)},set[a](e){return $t(this,n,e)}},a));h?u&&h<4&&ht(n,(h>2?"set ":h>1?"get ":"")+a):ht(i,a);for(var f=r.length-1;f>=0;f--)l=bt(h,a,c={},e[3],m),h&&(l.static=p,l.private=u,d=l.access={has:u?e=>yt(i,e):e=>a in e},3^h&&(d.get=u?e=>(1^h?wt:Gt)(e,i,4^h?n:v.get):e=>e[a]),h>2&&(d.set=u?(e,t)=>$t(e,i,t,4^h?n:v.set):(e,t)=>e[a]=t)),s=(0,r[f])(h?h<4?u?n:v[b]:h>4?void 0:{get:v.get,set:v.set}:i,l),c._=1,4^h||void 0===s?gt(s)&&(h>4?_.unshift(s):h?u?n=s:v[b]=s:i=s):"object"!=typeof s||null===s?lt("Object expected"):(gt(o=s.get)&&(v.get=o),gt(o=s.set)&&(v.set=o),gt(o=s.init)&&_.unshift(o));return h||_t(e,i),v&&ot(i,a,v),u?4^h?n:v:i},"__decorateElement$c"),ft=t((e,t,a)=>dt(e,"symbol"!=typeof t?t+"":t,a),"__publicField$6"),Tt=t((e,t,a)=>t.has(e)||lt("Cannot "+a),"__accessCheck$6"),yt=t((e,t)=>Object(t)!==t?lt('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$6"),wt=t((e,t,a)=>(Tt(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet$6"),xt=t((e,t,a)=>t.has(e)?lt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd$6"),$t=t((e,t,a,r)=>(Tt(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet$6"),Gt=t((e,t,a)=>(Tt(e,t,"access private method"),a),"__privateMethod$6");at=[T("gtn-canvas")];class St extends(tt=f,et=[w("#render-container")],tt){static{t(this,"GTNCanvas")}constructor(){super(),xt(this,it,mt(rt,8,this)),mt(rt,11,this),ft(this,"turtleRepo"),ft(this,"appState"),ft(this,"renderLoop"),ft(this,"renderer2D"),ft(this,"renderer3D"),ft(this,"currentRenderer",null),ft(this,"unsubscribeLoop",null);const e=a.getInstance();this.turtleRepo=e.resolve(r.TurtleRepository),this.appState=e.resolve(r.ApplicationState),this.renderLoop=e.resolve(r.RenderLoop),this.renderer2D=e.resolve(r.Renderer2D),this.renderer3D=e.resolve(r.Renderer3D)}firstUpdated(){this.syncRenderer(),this.appState.subscribe(()=>{this.syncRenderer()}),window.addEventListener("resize",()=>this.handleResize()),this.unsubscribeLoop=this.renderLoop.subscribe(()=>{this.currentRenderer&&this.currentRenderer.render(this.turtleRepo)}),this.renderLoop.start()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeLoop&&(this.unsubscribeLoop(),this.unsubscribeLoop=null),this.renderLoop.stop(),window.removeEventListener("resize",()=>this.handleResize()),this.currentRenderer&&this.currentRenderer.dispose()}syncRenderer(){const e=this.appState.mode,t=this.appState.cameraType,a="3D"===e;a===this.currentRenderer instanceof h&&this.currentRenderer||(this.currentRenderer&&this.currentRenderer.dispose(),this.currentRenderer="3D"===e?new h:new p,this.container&&this.currentRenderer.attach(this.container)),a&&this.currentRenderer instanceof h&&this.currentRenderer.setCameraType(t)}handleResize(){if(!this.currentRenderer||!this.container)return;const e=this.container.getBoundingClientRect();this.currentRenderer.resize(e.width,e.height)}render(){return v`<div id="render-container"></div>`}}vt(rt=pt(tt),4,"container",et,St,it=new WeakMap),St=vt(rt,0,"GTNCanvas",at,St),ft(St,"styles",b`
    ${_(":host{display:block;width:100%;height:100%;overflow:hidden;background:#f0f0f0}#render-container{width:100%;height:100%}")}
  `),mt(rt,1,St);var Ct,kt,Lt,Et=Object.create,Rt=Object.defineProperty,At=Object.getOwnPropertyDescriptor,Ot=t((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$b"),It=t(e=>{throw TypeError(e)},"__typeError$b"),Dt=t((e,t,a)=>t in e?Rt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$b"),Mt=t((e,t)=>Rt(e,"name",{value:t,configurable:!0}),"__name$b"),Nt=t(e=>[,,,Et(e?.[Ot("metadata")]??null)],"__decoratorStart$b"),Pt=["class","method","getter","setter","accessor","field","value","get","set"],Ft=t(e=>void 0!==e&&"function"!=typeof e?It("Function expected"):e,"__expectFn$b"),Ut=t((e,a,r,i,n)=>({kind:Pt[e],name:a,metadata:i,addInitializer:t(e=>r._?It("Already initialized"):n.push(Ft(e||null)),"addInitializer")}),"__decoratorContext$b"),jt=t((e,t)=>Dt(t,Ot("metadata"),e[3]),"__decoratorMetadata$b"),zt=t((e,t,a,r)=>{for(var i=0,n=e[t>>1],o=n&&n.length;i<o;i++)n[i].call(a);return r},"__runInitializers$b"),Kt=t((e,t,a,r,i,n)=>{var o,s,c,l=7&t,d=e[0]||(e[0]=[]),h=l&&(i=i.prototype,l<5&&(l>3||!0)&&At(i,a));Mt(i,a);for(var p=r.length-1;p>=0;p--)c=Ut(l,a,s={},e[3],d),o=(0,r[p])(i,c),s._=1,Ft(o)&&(i=o);return jt(e,i),h&&Rt(i,a,h),i},"__decorateElement$b");Ct=[T("dev-reset-button")];class Wt extends(Lt=f){static{t(this,"DevResetButton")}static styles=b`
    ${_("button{background-color:#f44;color:#fff;border:none;padding:8px 16px;border-radius:4px;cursor:pointer;font-weight:700}button:hover{background-color:#c00}")}
  `;resetApp(){localStorage.clear(),sessionStorage.clear(),window.location.reload()}render(){return v` <button @click="${this.resetApp}">Reset Local Data & Reload</button> `}}zt(kt=Nt(Lt),1,Wt=Kt(kt,0,"DevResetButton",Ct,Wt));var Bt,Ht,qt,Vt,Zt,Yt=Object.create,Qt=Object.defineProperty,Xt=Object.getOwnPropertyDescriptor,Jt=t((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$a"),ea=t(e=>{throw TypeError(e)},"__typeError$a"),ta=t((e,t,a)=>t in e?Qt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$a"),aa=t((e,t)=>Qt(e,"name",{value:t,configurable:!0}),"__name$a"),ra=t(e=>[,,,Yt(e?.[Jt("metadata")]??null)],"__decoratorStart$a"),ia=["class","method","getter","setter","accessor","field","value","get","set"],na=t(e=>void 0!==e&&"function"!=typeof e?ea("Function expected"):e,"__expectFn$a"),oa=t((e,a,r,i,n)=>({kind:ia[e],name:a,metadata:i,addInitializer:t(e=>r._?ea("Already initialized"):n.push(na(e||null)),"addInitializer")}),"__decoratorContext$a"),sa=t((e,t)=>ta(t,Jt("metadata"),e[3]),"__decoratorMetadata$a"),ca=t((e,t,a,r)=>{for(var i=0,n=e[t>>1],o=n&&n.length;i<o;i++)1&t?n[i].call(a):r=n[i].call(a,r);return r},"__runInitializers$a"),la=t((e,t,a,r,i,n)=>{var o,s,c,l,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,b=ia[h+5],_=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(i=i.prototype),h<5&&(h>3||!u)&&Xt(h<4?i:{get[a](){return ua(this,n)},set[a](e){return ba(this,n,e)}},a));h?u&&h<4&&aa(n,(h>2?"set ":h>1?"get ":"")+a):aa(i,a);for(var f=r.length-1;f>=0;f--)l=oa(h,a,c={},e[3],m),h&&(l.static=p,l.private=u,d=l.access={has:u?e=>pa(i,e):e=>a in e},3^h&&(d.get=u?e=>(1^h?ua:_a)(e,i,4^h?n:v.get):e=>e[a]),h>2&&(d.set=u?(e,t)=>ba(e,i,t,4^h?n:v.set):(e,t)=>e[a]=t)),s=(0,r[f])(h?h<4?u?n:v[b]:h>4?void 0:{get:v.get,set:v.set}:i,l),c._=1,4^h||void 0===s?na(s)&&(h>4?_.unshift(s):h?u?n=s:v[b]=s:i=s):"object"!=typeof s||null===s?ea("Object expected"):(na(o=s.get)&&(v.get=o),na(o=s.set)&&(v.set=o),na(o=s.init)&&_.unshift(o));return h||sa(e,i),v&&Qt(i,a,v),u?4^h?n:v:i},"__decorateElement$a"),da=t((e,t,a)=>ta(e,t+"",a),"__publicField$5"),ha=t((e,t,a)=>t.has(e)||ea("Cannot "+a),"__accessCheck$5"),pa=t((e,t)=>Object(t)!==t?ea('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$5"),ua=t((e,t,a)=>(ha(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet$5"),ga=t((e,t,a)=>t.has(e)?ea("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd$5"),ba=t((e,t,a,r)=>(ha(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet$5"),_a=t((e,t,a)=>(ha(e,t,"access private method"),a),"__privateMethod$5");qt=[T("gtn-error-toast")];class ma extends(Ht=f,Bt=[y({type:Array})],Ht){static{t(this,"GTNErrorToast")}constructor(){super(...arguments),ga(this,Zt,ca(Vt,8,this,[])),ca(Vt,11,this)}render(){return v`
      ${this.errors.map(e=>v`
          <div class="toast">
            <div class="header">
              <span>Syntax Error (Line ${e.line})</span>
            </div>
            <div class="msg">${e.message}</div>
          </div>
        `)}
    `}}la(Vt=ra(Ht),4,"errors",Bt,ma,Zt=new WeakMap),da(ma=la(Vt,0,"GTNErrorToast",qt,ma),"styles",b`
    ${_(":host{display:block;position:fixed;bottom:20px;right:20px;z-index:1000;max-width:350px}.toast{background:#fff5f5;border-left:5px solid #f56565;box-shadow:0 4px 6px #0000001a;padding:12px 16px;margin-top:8px;border-radius:4px;animation:slideIn .3s ease-out}.header{font-weight:700;color:#c53030;display:flex;justify-content:space-between;font-size:.9em}.msg{font-size:.85em;margin-top:4px;color:#2d3748}@keyframes slideIn{0%{transform:translate(100%);opacity:0}to{transform:translate(0);opacity:1}}")}
  `),ca(Vt,1,ma);var va,fa,Ta,ya=Object.create,wa=Object.defineProperty,xa=Object.getOwnPropertyDescriptor,$a=t((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$9"),Ga=t(e=>{throw TypeError(e)},"__typeError$9"),Sa=t((e,t,a)=>t in e?wa(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$9"),Ca=t((e,t)=>wa(e,"name",{value:t,configurable:!0}),"__name$9"),ka=t(e=>[,,,ya(e?.[$a("metadata")]??null)],"__decoratorStart$9"),La=["class","method","getter","setter","accessor","field","value","get","set"],Ea=t(e=>void 0!==e&&"function"!=typeof e?Ga("Function expected"):e,"__expectFn$9"),Ra=t((e,a,r,i,n)=>({kind:La[e],name:a,metadata:i,addInitializer:t(e=>r._?Ga("Already initialized"):n.push(Ea(e||null)),"addInitializer")}),"__decoratorContext$9"),Aa=t((e,t)=>Sa(t,$a("metadata"),e[3]),"__decoratorMetadata$9"),Oa=t((e,t,a,r)=>{for(var i=0,n=e[t>>1],o=n&&n.length;i<o;i++)n[i].call(a);return r},"__runInitializers$9"),Ia=t((e,t,a,r,i,n)=>{var o,s,c,l=7&t,d=e[0]||(e[0]=[]),h=l&&(i=i.prototype,l<5&&(l>3||!0)&&xa(i,a));Ca(i,a);for(var p=r.length-1;p>=0;p--)c=Ra(l,a,s={},e[3],d),o=(0,r[p])(i,c),s._=1,Ea(o)&&(i=o);return Aa(e,i),h&&wa(i,a,h),i},"__decorateElement$9");va=[T("gtn-navigation-panel")];class Da extends(Ta=f){static{t(this,"GTNNavigationPanel")}static styles=b`
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
  `;langService;unsubscribeUiLang=null;constructor(){super(),this.langService=a.getInstance().resolve(r.LanguageService)}connectedCallback(){super.connectedCallback(),this.unsubscribeUiLang=this.langService.subscribeUiListeners(()=>{this.requestUpdate()})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeUiLang&&(this.unsubscribeUiLang(),this.unsubscribeUiLang=null)}emit(e){const t={action:e};this.dispatchEvent(new CustomEvent("move",{detail:t}))}render(){const e=t(e=>this.langService.translate(e),"t");return v`
      <div class="d-pad">
        <button class="center"></button>
        <button
          @click=${()=>this.emit(N.GT_FORWARD)}
          title="${e("sandbox.tooltip.forward")}"
        >
          ▲
        </button>
        <button class="center"></button>

        <button @click=${()=>this.emit(N.GT_LEFT)} title="${e("sandbox.tooltip.left")}">
          ◀
        </button>
        <button
          @click=${()=>this.emit(N.GT_BACKWARD)}
          title="${e("sandbox.tooltip.backward")}"
        >
          ▼
        </button>
        <button @click=${()=>this.emit(N.GT_RIGHT)} title="${e("sandbox.tooltip.right")}">
          ▶
        </button>
      </div>
    `}}Oa(fa=ka(Ta),1,Da=Ia(fa,0,"GTNNavigationPanel",va,Da));var Ma,Na,Pa,Fa,Ua,ja=Object.create,za=Object.defineProperty,Ka=Object.getOwnPropertyDescriptor,Wa=t((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$8"),Ba=t(e=>{throw TypeError(e)},"__typeError$8"),Ha=t((e,t,a)=>t in e?za(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$8"),qa=t((e,t)=>za(e,"name",{value:t,configurable:!0}),"__name$8"),Va=t(e=>[,,,ja(e?.[Wa("metadata")]??null)],"__decoratorStart$8"),Za=["class","method","getter","setter","accessor","field","value","get","set"],Ya=t(e=>void 0!==e&&"function"!=typeof e?Ba("Function expected"):e,"__expectFn$8"),Qa=t((e,a,r,i,n)=>({kind:Za[e],name:a,metadata:i,addInitializer:t(e=>r._?Ba("Already initialized"):n.push(Ya(e||null)),"addInitializer")}),"__decoratorContext$8"),Xa=t((e,t)=>Ha(t,Wa("metadata"),e[3]),"__decoratorMetadata$8"),Ja=t((e,t,a,r)=>{for(var i=0,n=e[t>>1],o=n&&n.length;i<o;i++)1&t?n[i].call(a):r=n[i].call(a,r);return r},"__runInitializers$8"),er=t((e,t,a,r,i,n)=>{var o,s,c,l,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,b=Za[h+5],_=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(i=i.prototype),h<5&&(h>3||!u)&&Ka(h<4?i:{get[a](){return ir(this,n)},set[a](e){return or(this,n,e)}},a));h?u&&h<4&&qa(n,(h>2?"set ":h>1?"get ":"")+a):qa(i,a);for(var f=r.length-1;f>=0;f--)l=Qa(h,a,c={},e[3],m),h&&(l.static=p,l.private=u,d=l.access={has:u?e=>rr(i,e):e=>a in e},3^h&&(d.get=u?e=>(1^h?ir:sr)(e,i,4^h?n:v.get):e=>e[a]),h>2&&(d.set=u?(e,t)=>or(e,i,t,4^h?n:v.set):(e,t)=>e[a]=t)),s=(0,r[f])(h?h<4?u?n:v[b]:h>4?void 0:{get:v.get,set:v.set}:i,l),c._=1,4^h||void 0===s?Ya(s)&&(h>4?_.unshift(s):h?u?n=s:v[b]=s:i=s):"object"!=typeof s||null===s?Ba("Object expected"):(Ya(o=s.get)&&(v.get=o),Ya(o=s.set)&&(v.set=o),Ya(o=s.init)&&_.unshift(o));return h||Xa(e,i),v&&za(i,a,v),u?4^h?n:v:i},"__decorateElement$8"),tr=t((e,t,a)=>Ha(e,"symbol"!=typeof t?t+"":t,a),"__publicField$4"),ar=t((e,t,a)=>t.has(e)||Ba("Cannot "+a),"__accessCheck$4"),rr=t((e,t)=>Object(t)!==t?Ba('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$4"),ir=t((e,t,a)=>(ar(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet$4"),nr=t((e,t,a)=>t.has(e)?Ba("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd$4"),or=t((e,t,a,r)=>(ar(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet$4"),sr=t((e,t,a)=>(ar(e,t,"access private method"),a),"__privateMethod$4");Pa=[T("gtn-compass-panel")];class cr extends(Na=f,Ma=[y({type:Number})],Na){static{t(this,"GTNCompassPanel")}constructor(){super(),nr(this,Ua,Ja(Fa,8,this,0)),Ja(Fa,11,this),tr(this,"langService"),tr(this,"unsubscribeUiLang",null),this.langService=a.getInstance().resolve(r.LanguageService)}connectedCallback(){super.connectedCallback(),this.unsubscribeUiLang=this.langService.subscribeUiListeners(()=>{this.requestUpdate()})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeUiLang&&(this.unsubscribeUiLang(),this.unsubscribeUiLang=null)}handleClick(e){const t=e.currentTarget.getBoundingClientRect(),a=t.width/2,r=t.height/2,i=e.clientX-t.left-a,n=e.clientY-t.top-r;let o=Math.atan2(n,i)*(180/Math.PI);o=(o+90+360)%360;const s=5*Math.round(o/5);this.dispatchEvent(new CustomEvent("heading-change",{detail:{heading:s}}))}render(){const e=`rotate(${this.heading}, 50, 50)`,a=t(e=>this.langService.translate(e),"t"),r=a("unit.degree");return v`
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
    `}}er(Fa=Va(Na),4,"heading",Ma,cr,Ua=new WeakMap),cr=er(Fa,0,"GTNCompassPanel",Pa,cr),tr(cr,"styles",b`
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
  `),Ja(Fa,1,cr);var lr,dr,hr,pr,ur,gr,br,_r,mr,vr=Object.create,fr=Object.defineProperty,Tr=Object.getOwnPropertyDescriptor,yr=t((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$7"),wr=t(e=>{throw TypeError(e)},"__typeError$7"),xr=t((e,t,a)=>t in e?fr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$7"),$r=t((e,t)=>fr(e,"name",{value:t,configurable:!0}),"__name$7"),Gr=t(e=>[,,,vr(e?.[yr("metadata")]??null)],"__decoratorStart$7"),Sr=["class","method","getter","setter","accessor","field","value","get","set"],Cr=t(e=>void 0!==e&&"function"!=typeof e?wr("Function expected"):e,"__expectFn$7"),kr=t((e,a,r,i,n)=>({kind:Sr[e],name:a,metadata:i,addInitializer:t(e=>r._?wr("Already initialized"):n.push(Cr(e||null)),"addInitializer")}),"__decoratorContext$7"),Lr=t((e,t)=>xr(t,yr("metadata"),e[3]),"__decoratorMetadata$7"),Er=t((e,t,a,r)=>{for(var i=0,n=e[t>>1],o=n&&n.length;i<o;i++)1&t?n[i].call(a):r=n[i].call(a,r);return r},"__runInitializers$7"),Rr=t((e,t,a,r,i,n)=>{var o,s,c,l,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,b=Sr[h+5],_=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(i=i.prototype),h<5&&(h>3||!u)&&Tr(h<4?i:{get[a](){return Dr(this,n)},set[a](e){return Nr(this,n,e)}},a));h?u&&h<4&&$r(n,(h>2?"set ":h>1?"get ":"")+a):$r(i,a);for(var f=r.length-1;f>=0;f--)l=kr(h,a,c={},e[3],m),h&&(l.static=p,l.private=u,d=l.access={has:u?e=>Ir(i,e):e=>a in e},3^h&&(d.get=u?e=>(1^h?Dr:Pr)(e,i,4^h?n:v.get):e=>e[a]),h>2&&(d.set=u?(e,t)=>Nr(e,i,t,4^h?n:v.set):(e,t)=>e[a]=t)),s=(0,r[f])(h?h<4?u?n:v[b]:h>4?void 0:{get:v.get,set:v.set}:i,l),c._=1,4^h||void 0===s?Cr(s)&&(h>4?_.unshift(s):h?u?n=s:v[b]=s:i=s):"object"!=typeof s||null===s?wr("Object expected"):(Cr(o=s.get)&&(v.get=o),Cr(o=s.set)&&(v.set=o),Cr(o=s.init)&&_.unshift(o));return h||Lr(e,i),v&&fr(i,a,v),u?4^h?n:v:i},"__decorateElement$7"),Ar=t((e,t,a)=>xr(e,"symbol"!=typeof t?t+"":t,a),"__publicField$3"),Or=t((e,t,a)=>t.has(e)||wr("Cannot "+a),"__accessCheck$3"),Ir=t((e,t)=>Object(t)!==t?wr('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$3"),Dr=t((e,t,a)=>(Or(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet$3"),Mr=t((e,t,a)=>t.has(e)?wr("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd$3"),Nr=t((e,t,a,r)=>(Or(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet$3"),Pr=t((e,t,a)=>(Or(e,t,"access private method"),a),"__privateMethod$3");const Fr=!0;ur=[T("gtn-settings-panel")];class Ur extends(pr=f,hr=[y({type:Number})],dr=[y({type:Number})],lr=[y({type:Boolean})],pr){static{t(this,"GTNSettingsPanel")}constructor(){super(),Mr(this,br,Er(gr,8,this,50)),Er(gr,11,this),Mr(this,_r,Er(gr,12,this,90)),Er(gr,15,this),Mr(this,mr,Er(gr,16,this,Fr)),Er(gr,19,this),Ar(this,"langService"),Ar(this,"unsubscribeUiLang",null),Ar(this,"toggleKeyboard",()=>{this.keyboardActive=!this.keyboardActive;const e={value:this.keyboardActive};this.dispatchEvent(new CustomEvent("keyboard-status",{detail:e}))}),this.langService=a.getInstance().resolve(r.LanguageService)}connectedCallback(){super.connectedCallback(),this.unsubscribeUiLang=this.langService.subscribeUiListeners(()=>{this.requestUpdate()})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeUiLang&&(this.unsubscribeUiLang(),this.unsubscribeUiLang=null)}handleInput(e,t){const a=parseInt(e.target.value,10)||0;this.dispatchEvent(new CustomEvent("setting-change",{detail:{type:t,value:a}}))}render(){const e=t(e=>this.langService.translate(e),"t");return v`
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
    `}}gr=Gr(pr),br=new WeakMap,_r=new WeakMap,mr=new WeakMap,Rr(gr,4,"step",hr,Ur,br),Rr(gr,4,"rotation",dr,Ur,_r),Rr(gr,4,"keyboardActive",lr,Ur,mr),Ur=Rr(gr,0,"GTNSettingsPanel",ur,Ur),Ar(Ur,"styles",b`
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
  `),Er(gr,1,Ur);const jr="0 -960 960 960",zr={check:{content:x`<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>`},close:{content:x`<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>`},menu:{content:x`<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>`},settings:{content:x`<path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.58 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>`},home:{content:x`<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>`},user:{content:x`<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>`},eye:{content:x`
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
    />`,viewBox:jr},editOff:{content:x`
    <path d="m622-453-56-56 82-82-57-57-82 82-56-56 195-195q12-12 26.5-17.5T705-840q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L622-453ZM200-200h57l195-195-28-29-29-28-195 195v57ZM792-56 509-338 290-120H120v-169l219-219L56-792l57-57 736 736-57 57Zm-32-648-56-56 56 56Zm-169 56 57 57-57-57ZM424-424l-29-28 57 57-28-29Z"
          fill="currentColor"
    />`,viewBox:jr},visibility:{content:x`
    <path d="M607.5-372.5Q660-425 660-500t-52.5-127.5Q555-680 480-680t-127.5 52.5Q300-575 300-500t52.5 127.5Q405-320 480-320t127.5-52.5Zm-204-51Q372-455 372-500t31.5-76.5Q435-608 480-608t76.5 31.5Q588-545 588-500t-31.5 76.5Q525-392 480-392t-76.5-31.5ZM214-281.5Q94-363 40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200q-146 0-266-81.5ZM480-500Zm207.5 160.5Q782-399 832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280q113 0 207.5-59.5Z"
          fill="currentColor"
    />`,viewBox:jr},visibilityOff:{content:x`
    <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"
          fill="currentColor"
    />`,viewBox:jr}};function Kr(e){return"string"==typeof e&&Object.prototype.hasOwnProperty.call(zr,e)}function Wr(e){if(Kr(e))return e}function Br(e){const t=Wr(e);if(!t)return;const a=zr[t];return{...a,viewBox:a.viewBox??"0 0 24 24"}}t(Kr,"isIconName"),t(Wr,"tryToIconName"),t(Br,"getIconFromName");var Hr,qr,Vr,Zr,Yr,Qr,Xr,Jr=Object.create,ei=Object.defineProperty,ti=Object.getOwnPropertyDescriptor,ai=t((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$6"),ri=t(e=>{throw TypeError(e)},"__typeError$6"),ii=t((e,t,a)=>t in e?ei(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$6"),ni=t((e,t)=>ei(e,"name",{value:t,configurable:!0}),"__name$6"),oi=t(e=>[,,,Jr(e?.[ai("metadata")]??null)],"__decoratorStart$6"),si=["class","method","getter","setter","accessor","field","value","get","set"],ci=t(e=>void 0!==e&&"function"!=typeof e?ri("Function expected"):e,"__expectFn$6"),li=t((e,a,r,i,n)=>({kind:si[e],name:a,metadata:i,addInitializer:t(e=>r._?ri("Already initialized"):n.push(ci(e||null)),"addInitializer")}),"__decoratorContext$6"),di=t((e,t)=>ii(t,ai("metadata"),e[3]),"__decoratorMetadata$6"),hi=t((e,t,a,r)=>{for(var i=0,n=e[t>>1],o=n&&n.length;i<o;i++)1&t?n[i].call(a):r=n[i].call(a,r);return r},"__runInitializers$6"),pi=t((e,t,a,r,i,n)=>{var o,s,c,l,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,b=si[h+5],_=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(i=i.prototype),h<5&&(h>3||!u)&&ti(h<4?i:{get[a](){return _i(this,n)},set[a](e){return vi(this,n,e)}},a));h?u&&h<4&&ni(n,(h>2?"set ":h>1?"get ":"")+a):ni(i,a);for(var f=r.length-1;f>=0;f--)l=li(h,a,c={},e[3],m),h&&(l.static=p,l.private=u,d=l.access={has:u?e=>bi(i,e):e=>a in e},3^h&&(d.get=u?e=>(1^h?_i:fi)(e,i,4^h?n:v.get):e=>e[a]),h>2&&(d.set=u?(e,t)=>vi(e,i,t,4^h?n:v.set):(e,t)=>e[a]=t)),s=(0,r[f])(h?h<4?u?n:v[b]:h>4?void 0:{get:v.get,set:v.set}:i,l),c._=1,4^h||void 0===s?ci(s)&&(h>4?_.unshift(s):h?u?n=s:v[b]=s:i=s):"object"!=typeof s||null===s?ri("Object expected"):(ci(o=s.get)&&(v.get=o),ci(o=s.set)&&(v.set=o),ci(o=s.init)&&_.unshift(o));return h||di(e,i),v&&ei(i,a,v),u?4^h?n:v:i},"__decorateElement$6"),ui=t((e,t,a)=>ii(e,t+"",a),"__publicField$2"),gi=t((e,t,a)=>t.has(e)||ri("Cannot "+a),"__accessCheck$2"),bi=t((e,t)=>Object(t)!==t?ri('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$2"),_i=t((e,t,a)=>(gi(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet$2"),mi=t((e,t,a)=>t.has(e)?ri("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd$2"),vi=t((e,t,a,r)=>(gi(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet$2"),fi=t((e,t,a)=>(gi(e,t,"access private method"),a),"__privateMethod$2");Zr=[T("gtn-icon")];class Ti extends(Vr=f,qr=[y({type:String})],Hr=[y({type:String})],Vr){static{t(this,"GtnIcon")}constructor(){super(...arguments),mi(this,Qr,hi(Yr,8,this)),hi(Yr,11,this),mi(this,Xr,hi(Yr,12,this)),hi(Yr,15,this)}render(){const e=Br(this.icon);return e?v`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="${e.viewBox}"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
        focusable="false"
      >
        ${e.content}
      </svg>
    `:v``}}Yr=oi(Vr),Qr=new WeakMap,Xr=new WeakMap,pi(Yr,4,"icon",qr,Ti,Qr),pi(Yr,4,"viewBox",Hr,Ti,Xr),ui(Ti=pi(Yr,0,"GtnIcon",Zr,Ti),"styles",b`
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
  `),hi(Yr,1,Ti);var yi,wi,xi,$i=Object.create,Gi=Object.defineProperty,Si=Object.getOwnPropertyDescriptor,Ci=t((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$5"),ki=t(e=>{throw TypeError(e)},"__typeError$5"),Li=t((e,t,a)=>t in e?Gi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$5"),Ei=t((e,t)=>Gi(e,"name",{value:t,configurable:!0}),"__name$5"),Ri=t(e=>[,,,$i(e?.[Ci("metadata")]??null)],"__decoratorStart$5"),Ai=["class","method","getter","setter","accessor","field","value","get","set"],Oi=t(e=>void 0!==e&&"function"!=typeof e?ki("Function expected"):e,"__expectFn$5"),Ii=t((e,a,r,i,n)=>({kind:Ai[e],name:a,metadata:i,addInitializer:t(e=>r._?ki("Already initialized"):n.push(Oi(e||null)),"addInitializer")}),"__decoratorContext$5"),Di=t((e,t)=>Li(t,Ci("metadata"),e[3]),"__decoratorMetadata$5"),Mi=t((e,t,a,r)=>{for(var i=0,n=e[t>>1],o=n&&n.length;i<o;i++)n[i].call(a);return r},"__runInitializers$5"),Ni=t((e,t,a,r,i,n)=>{var o,s,c,l=7&t,d=e[0]||(e[0]=[]),h=l&&(i=i.prototype,l<5&&(l>3||!0)&&Si(i,a));Ei(i,a);for(var p=r.length-1;p>=0;p--)c=Ii(l,a,s={},e[3],d),o=(0,r[p])(i,c),s._=1,Oi(o)&&(i=o);return Di(e,i),h&&Gi(i,a,h),i},"__decorateElement$5");yi=[T("gtn-commands-panel")];class Pi extends(xi=f){static{t(this,"GTNCommandsPanel")}static styles=b`
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
  `;langService;unsubscribeUiLang=null;constructor(){super(),this.langService=a.getInstance().resolve(r.LanguageService)}connectedCallback(){super.connectedCallback(),this.unsubscribeUiLang=this.langService.subscribeUiListeners(()=>{this.requestUpdate()})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeUiLang&&(this.unsubscribeUiLang(),this.unsubscribeUiLang=null)}emit(e,t){const a={action:e,value:t};this.dispatchEvent(new CustomEvent("command",{detail:a}))}render(){const e=t(e=>this.langService.translate(e),"t"),a=e("commands.GT_FORWARD"),r=e("commands.GT_BACKWARD"),i=e("commands.GT_LEFT"),n=e("commands.GT_RIGHT"),o=e("unit.degree");return v`
      <div class="cmd-row">
        <button @click=${()=>this.emit(N.GT_FORWARD,10)}>${a} 10</button>
        <button @click=${()=>this.emit(N.GT_FORWARD,25)}>${a} 25</button>
        <button @click=${()=>this.emit(N.GT_FORWARD,100)}>${a} 100</button>
      </div>

      <div class="cmd-row">
        <button @click=${()=>this.emit(N.GT_BACKWARD,10)}>${r} 10</button>
        <button @click=${()=>this.emit(N.GT_BACKWARD,25)}>${r} 25</button>
        <button @click=${()=>this.emit(N.GT_BACKWARD,100)}>${r} 100</button>
      </div>

      <div class="separator"></div>

      <div class="cmd-row">
        <button @click=${()=>this.emit(N.GT_LEFT,30)}>${i} 30${o}</button>
        <button @click=${()=>this.emit(N.GT_LEFT,45)}>${i} 45${o}</button>
        <button @click=${()=>this.emit(N.GT_LEFT,90)}>${i} 90${o}</button>
      </div>

      <div class="cmd-row">
        <button @click=${()=>this.emit(N.GT_RIGHT,30)}>${n} 30${o}</button>
        <button @click=${()=>this.emit(N.GT_RIGHT,45)}>${n} 45${o}</button>
        <button @click=${()=>this.emit(N.GT_RIGHT,90)}>${n} 90${o}</button>
      </div>

      <div class="separator"></div>

      <div class="tools-grid">
        <button @click=${()=>this.emit(N.GT_PEN_DOWN)}>
          <span class="icon"><gtn-icon icon="draw"></gtn-icon></span>${e("sandbox.btn.pendown")}
        </button>
        <button @click=${()=>this.emit(N.GT_PEN_UP)}>
          <span class="icon"><gtn-icon icon="editOff"></gtn-icon></span>${e("sandbox.btn.penup")}
        </button>
        <button @click=${()=>this.emit(N.GT_SHOW_TURTLE)}>
          <span class="icon"><gtn-icon icon="visibility"></gtn-icon></span>${e("sandbox.btn.showturtle")}
        </button>
        <button @click=${()=>this.emit(N.GT_HIDE_TURTLE)}>
          <span class="icon"><gtn-icon icon="visibilityOff"></gtn-icon></span>${e("sandbox.btn.hideturtle")}
        </button>
      </div>
    `}}Mi(wi=Ri(xi),1,Pi=Ni(wi,0,"GTNCommandsPanel",yi,Pi));var Fi,Ui,ji,zi=Object.create,Ki=Object.defineProperty,Wi=Object.getOwnPropertyDescriptor,Bi=t((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$4"),Hi=t(e=>{throw TypeError(e)},"__typeError$4"),qi=t((e,t,a)=>t in e?Ki(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$4"),Vi=t((e,t)=>Ki(e,"name",{value:t,configurable:!0}),"__name$4"),Zi=t(e=>[,,,zi(e?.[Bi("metadata")]??null)],"__decoratorStart$4"),Yi=["class","method","getter","setter","accessor","field","value","get","set"],Qi=t(e=>void 0!==e&&"function"!=typeof e?Hi("Function expected"):e,"__expectFn$4"),Xi=t((e,a,r,i,n)=>({kind:Yi[e],name:a,metadata:i,addInitializer:t(e=>r._?Hi("Already initialized"):n.push(Qi(e||null)),"addInitializer")}),"__decoratorContext$4"),Ji=t((e,t)=>qi(t,Bi("metadata"),e[3]),"__decoratorMetadata$4"),en=t((e,t,a,r)=>{for(var i=0,n=e[t>>1],o=n&&n.length;i<o;i++)n[i].call(a);return r},"__runInitializers$4"),tn=t((e,t,a,r,i,n)=>{var o,s,c,l=7&t,d=e[0]||(e[0]=[]),h=l&&(i=i.prototype,l<5&&(l>3||!0)&&Wi(i,a));Vi(i,a);for(var p=r.length-1;p>=0;p--)c=Xi(l,a,s={},e[3],d),o=(0,r[p])(i,c),s._=1,Qi(o)&&(i=o);return Ji(e,i),h&&Ki(i,a,h),i},"__decorateElement$4");const an=[u.BLACK,u.RED,u.BLUE,u.GREEN,u.YELLOW,u.ORANGE];Fi=[T("gtn-color-panel")];class rn extends(ji=f){static{t(this,"GTNColorPanel")}static styles=b`
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
  `;langService;unsubscribeUiLang=null;constructor(){super(),this.langService=a.getInstance().resolve(r.LanguageService)}connectedCallback(){super.connectedCallback(),this.unsubscribeUiLang=this.langService.subscribeUiListeners(()=>{this.requestUpdate()})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeUiLang&&(this.unsubscribeUiLang(),this.unsubscribeUiLang=null)}emit(e){const t={color:e};this.dispatchEvent(new CustomEvent("color-change",{detail:t}))}render(){const e=t(e=>this.langService.translate(e),"t");return v`
      <div class="palette">
        ${an.map(t=>v`
            <div
              class="swatch"
              style="background-color: ${t}"
              @click=${()=>this.emit(t)}
              title="${e("sandbox.btn.colors."+t)}"
            ></div>
          `)}
      </div>
    `}}en(Ui=Zi(ji),1,rn=tn(Ui,0,"GTNColorPanel",Fi,rn));var nn,on,sn,cn,ln=Object.create,dn=Object.defineProperty,hn=Object.getOwnPropertyDescriptor,pn=t((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$3"),un=t(e=>{throw TypeError(e)},"__typeError$3"),gn=t((e,t,a)=>t in e?dn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$3"),bn=t((e,t)=>dn(e,"name",{value:t,configurable:!0}),"__name$3"),_n=t(e=>[,,,ln(e?.[pn("metadata")]??null)],"__decoratorStart$3"),mn=["class","method","getter","setter","accessor","field","value","get","set"],vn=t(e=>void 0!==e&&"function"!=typeof e?un("Function expected"):e,"__expectFn$3"),fn=t((e,a,r,i,n)=>({kind:mn[e],name:a,metadata:i,addInitializer:t(e=>r._?un("Already initialized"):n.push(vn(e||null)),"addInitializer")}),"__decoratorContext$3"),Tn=t((e,t)=>gn(t,pn("metadata"),e[3]),"__decoratorMetadata$3"),yn=t((e,t,a,r)=>{for(var i=0,n=e[t>>1],o=n&&n.length;i<o;i++)n[i].call(a);return r},"__runInitializers$3"),wn=t((e,t,a,r,i,n)=>{var o,s,c,l=7&t,d=e[0]||(e[0]=[]),h=l&&(i=i.prototype,l<5&&(l>3||!0)&&hn(i,a));bn(i,a);for(var p=r.length-1;p>=0;p--)c=fn(l,a,s={},e[3],d),o=(0,r[p])(i,c),s._=1,vn(o)&&(i=o);return Tn(e,i),h&&dn(i,a,h),i},"__decorateElement$3");nn=[T("gtn-controls-panel")];class xn extends(sn=f){static{t(this,"GTNControlsPanel")}static styles=[U,b`
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
    `];langService;unsubscribeUiLang=null;constructor(){super(),this.langService=a.getInstance().resolve(r.LanguageService)}connectedCallback(){super.connectedCallback(),this.unsubscribeUiLang=this.langService.subscribeUiListeners(()=>{this.requestUpdate()})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeUiLang&&(this.unsubscribeUiLang(),this.unsubscribeUiLang=null)}render(){const e=t(e=>this.langService.translate(e),"t");return v`
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
    `}}yn(on=_n(sn),1,xn=wn(on,0,"GTNControlsPanel",nn,xn)),(e=>{var a,r;function i(e){return 1===e.length}(a=e.Keys||(e.Keys={})).Backspace="Backspace",a.Tab="Tab",a.Enter="Enter",a.Shift="Shift",a.Control="Control",a.Alt="Alt",a.Pause="Pause",a.CapsLock="CapsLock",a.Escape="Escape",a.Space=" ",a.PageUp="PageUp",a.PageDown="PageDown",a.End="End",a.Home="Home",a.ArrowLeft="ArrowLeft",a.ArrowUp="ArrowUp",a.ArrowRight="ArrowRight",a.ArrowDown="ArrowDown",a.PrintScreen="PrintScreen",a.Insert="Insert",a.Delete="Delete",a.Digit0="0",a.Digit1="1",a.Digit2="2",a.Digit3="3",a.Digit4="4",a.Digit5="5",a.Digit6="6",a.Digit7="7",a.Digit8="8",a.Digit9="9",a.A="A",a.B="B",a.C="C",a.D="D",a.E="E",a.F="F",a.G="G",a.H="H",a.I="I",a.J="J",a.K="K",a.L="L",a.M="M",a.N="N",a.O="O",a.P="P",a.Q="Q",a.R="R",a.S="S",a.T="T",a.U="U",a.V="V",a.W="W",a.X="X",a.Y="Y",a.Z="Z",a.a="a",a.b="b",a.c="c",a.d="d",a.e="e",a.f="f",a.g="g",a.h="h",a.i="i",a.j="j",a.k="k",a.l="l",a.m="m",a.n="n",a.o="o",a.p="p",a.q="q",a.r="r",a.s="s",a.t="t",a.u="u",a.v="v",a.w="w",a.x="x",a.y="y",a.z="z",a.Meta="Meta",a.ContextMenu="ContextMenu",a.AudioVolumeMute="AudioVolumeMute",a.AudioVolumeDown="AudioVolumeDown",a.AudioVolumeUp="AudioVolumeUp",a.F1="F1",a.F2="F2",a.F3="F3",a.F4="F4",a.F5="F5",a.F6="F6",a.F7="F7",a.F8="F8",a.F9="F9",a.F10="F10",a.F11="F11",a.F12="F12",a.NumLock="NumLock",a.ScrollLock="ScrollLock",a.Semicolon=";",a.Equal="=",a.Comma=",",a.Minus="-",a.Period=".",a.Slash="/",a.Backquote="`",a.BracketLeft="[",a.Backslash="\\",a.BracketRight="]",a.Quote="'",a.Tilde="~",a.Exclamation="!",a.At="@",a.Sharp="#",a.Dollar="$",a.Percent="%",a.Caret="^",a.Ampersand="&",a.Asterisk="*",a.ParenthesisLeft="(",a.ParenthesisRight=")",a.Underscore="_",a.Plus="+",a.OpenBrace="{",a.CloseBrace="}",a.Pipe="|",a.Colon=":",a.Quote2='"',a.AngleBracketLeft="<",a.AngleBracketRight=">",a.QuestionMark="?",(r=e.Codes||(e.Codes={})).Backspace="Backspace",r.Tab="Tab",r.Enter="Enter",r.ShiftLeft="ShiftLeft",r.ShiftRight="ShiftRight",r.ControlLeft="ControlLeft",r.ControlRight="ControlRight",r.AltLeft="AltLeft",r.AltRight="AltRight",r.Pause="Pause",r.CapsLock="CapsLock",r.Escape="Escape",r.Space="Space",r.PageUp="PageUp",r.PageDown="PageDown",r.End="End",r.Home="Home",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.PrintScreen="PrintScreen",r.Insert="Insert",r.Delete="Delete",r.Digit0="Digit0",r.Digit1="Digit1",r.Digit2="Digit2",r.Digit3="Digit3",r.Digit4="Digit4",r.Digit5="Digit5",r.Digit6="Digit6",r.Digit7="Digit7",r.Digit8="Digit8",r.Digit9="Digit9",r.AudioVolumeMute="AudioVolumeMute",r.AudioVolumeDown="AudioVolumeDown",r.AudioVolumeUp="AudioVolumeUp",r.KeyA="KeyA",r.KeyB="KeyB",r.KeyC="KeyC",r.KeyD="KeyD",r.KeyE="KeyE",r.KeyF="KeyF",r.KeyG="KeyG",r.KeyH="KeyH",r.KeyI="KeyI",r.KeyJ="KeyJ",r.KeyK="KeyK",r.KeyL="KeyL",r.KeyM="KeyM",r.KeyN="KeyN",r.KeyO="KeyO",r.KeyP="KeyP",r.KeyQ="KeyQ",r.KeyR="KeyR",r.KeyS="KeyS",r.KeyT="KeyT",r.KeyU="KeyU",r.KeyV="KeyV",r.KeyW="KeyW",r.KeyX="KeyX",r.KeyY="KeyY",r.KeyZ="KeyZ",r.MetaLeft="MetaLeft",r.MetaRight="MetaRight",r.ContextMenu="ContextMenu",r.Numpad0="Numpad0",r.Numpad1="Numpad1",r.Numpad2="Numpad2",r.Numpad3="Numpad3",r.Numpad4="Numpad4",r.Numpad5="Numpad5",r.Numpad6="Numpad6",r.Numpad7="Numpad7",r.Numpad8="Numpad8",r.Numpad9="Numpad9",r.NumpadMultiply="NumpadMultiply",r.NumpadAdd="NumpadAdd",r.NumpadSubtract="NumpadSubtract",r.NumpadDecimal="NumpadDecimal",r.NumpadDivide="NumpadDivide",r.F1="F1",r.F2="F2",r.F3="F3",r.F4="F4",r.F5="F5",r.F6="F6",r.F7="F7",r.F8="F8",r.F9="F9",r.F10="F10",r.F11="F11",r.F12="F12",r.NumLock="NumLock",r.ScrollLock="ScrollLock",r.Semicolon="Semicolon",r.Equal="Equal",r.Comma="Comma",r.Minus="Minus",r.Period="Period",r.Slash="Slash",r.Backquote="Backquote",r.BracketLeft="BracketLeft",r.Backslash="Backslash",r.BracketRight="BracketRight",r.Quote="Quote",t(i,"isTypingContent"),e.isTypingContent=i})(cn||(cn={})),cn.Codes;const $n={Enter:cn.Codes.Enter,Escape:cn.Codes.Escape,ArrowUp:cn.Codes.ArrowUp,ArrowDown:cn.Codes.ArrowDown,ArrowLeft:cn.Codes.ArrowLeft,ArrowRight:cn.Codes.ArrowRight,KeyUp:cn.Codes.KeyW,KeyDown:cn.Codes.KeyS,KeyLeft:cn.Codes.KeyA,KeyRight:cn.Codes.KeyD,Backspace:cn.Codes.Backspace,Delete:cn.Codes.Delete,Space:cn.Codes.Space};var Gn,Sn,Cn,kn,Ln,En,Rn,An,On,In,Dn,Mn,Nn,Pn=Object.create,Fn=Object.defineProperty,Un=Object.getOwnPropertyDescriptor,jn=t((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$2"),zn=t(e=>{throw TypeError(e)},"__typeError$2"),Kn=t((e,t,a)=>t in e?Fn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$2"),Wn=t((e,t)=>Fn(e,"name",{value:t,configurable:!0}),"__name$2"),Bn=t(e=>[,,,Pn(e?.[jn("metadata")]??null)],"__decoratorStart$2"),Hn=["class","method","getter","setter","accessor","field","value","get","set"],qn=t(e=>void 0!==e&&"function"!=typeof e?zn("Function expected"):e,"__expectFn$2"),Vn=t((e,a,r,i,n)=>({kind:Hn[e],name:a,metadata:i,addInitializer:t(e=>r._?zn("Already initialized"):n.push(qn(e||null)),"addInitializer")}),"__decoratorContext$2"),Zn=t((e,t)=>Kn(t,jn("metadata"),e[3]),"__decoratorMetadata$2"),Yn=t((e,t,a,r)=>{for(var i=0,n=e[t>>1],o=n&&n.length;i<o;i++)1&t?n[i].call(a):r=n[i].call(a,r);return r},"__runInitializers$2"),Qn=t((e,t,a,r,i,n)=>{var o,s,c,l,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,b=Hn[h+5],_=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(i=i.prototype),h<5&&(h>3||!u)&&Un(h<4?i:{get[a](){return to(this,n)},set[a](e){return ro(this,n,e)}},a));h?u&&h<4&&Wn(n,(h>2?"set ":h>1?"get ":"")+a):Wn(i,a);for(var f=r.length-1;f>=0;f--)l=Vn(h,a,c={},e[3],m),h&&(l.static=p,l.private=u,d=l.access={has:u?e=>eo(i,e):e=>a in e},3^h&&(d.get=u?e=>(1^h?to:io)(e,i,4^h?n:v.get):e=>e[a]),h>2&&(d.set=u?(e,t)=>ro(e,i,t,4^h?n:v.set):(e,t)=>e[a]=t)),s=(0,r[f])(h?h<4?u?n:v[b]:h>4?void 0:{get:v.get,set:v.set}:i,l),c._=1,4^h||void 0===s?qn(s)&&(h>4?_.unshift(s):h?u?n=s:v[b]=s:i=s):"object"!=typeof s||null===s?zn("Object expected"):(qn(o=s.get)&&(v.get=o),qn(o=s.set)&&(v.set=o),qn(o=s.init)&&_.unshift(o));return h||Zn(e,i),v&&Fn(i,a,v),u?4^h?n:v:i},"__decorateElement$2"),Xn=t((e,t,a)=>Kn(e,"symbol"!=typeof t?t+"":t,a),"__publicField$1"),Jn=t((e,t,a)=>t.has(e)||zn("Cannot "+a),"__accessCheck$1"),eo=t((e,t)=>Object(t)!==t?zn('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$1"),to=t((e,t,a)=>(Jn(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet$1"),ao=t((e,t,a)=>t.has(e)?zn("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd$1"),ro=t((e,t,a,r)=>(Jn(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet$1"),io=t((e,t,a)=>(Jn(e,t,"access private method"),a),"__privateMethod$1");const no=F(N.GT_SEMICOLON),oo=[$n.ArrowUp,$n.ArrowDown,$n.ArrowLeft,$n.ArrowRight];Rn=[T("gtn-sandbox")];class so extends(En=f,Ln=[$()],kn=[$()],Cn=[$()],Sn=[$()],Gn=[$()],En){static{t(this,"GtnSandbox")}constructor(){super(),Xn(this,"interpreter"),Xn(this,"langService"),Xn(this,"unsubscribeUiLang",null),ao(this,On,Yn(An,8,this,50)),Yn(An,11,this),ao(this,In,Yn(An,12,this,90)),Yn(An,15,this),ao(this,Dn,Yn(An,16,this,[])),Yn(An,19,this),ao(this,Mn,Yn(An,20,this,0)),Yn(An,23,this),ao(this,Nn,Yn(An,24,this,Fr)),Yn(An,27,this),Xn(this,"handleConsoleLogLanguageChange",async()=>{await this.retranslateLogs()}),Xn(this,"retranslateLogs",async()=>{if(0===this.consoleLogs.length)return;const e=o(this.langService.getUiLanguage()),t=await Promise.all(this.consoleLogs.map(async([t,a,r])=>[t,a,await this.langService.localizeScript(a,e)]));this.consoleLogs=t}),Xn(this,"handleKeyDown",e=>{if(!this.isKeyboardActive)return;const t=e.code;switch(oo.includes(t)&&e.preventDefault(),t){case $n.ArrowUp:case $n.KeyUp:return this.doHandleMove(N.GT_FORWARD);case $n.ArrowDown:case $n.KeyDown:return this.doHandleMove(N.GT_BACKWARD);case $n.ArrowLeft:case $n.KeyLeft:return this.doHandleMove(N.GT_LEFT);case $n.ArrowRight:case $n.KeyRight:return this.doHandleMove(N.GT_RIGHT);case $n.Backspace:case $n.Delete:return this.handleClear();case $n.Escape:return this.handleReset()}});const e=a.getInstance();this.interpreter=e.resolve(r.Interpreter),this.langService=e.resolve(r.LanguageService)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.handleKeyDown),this.unsubscribeUiLang=this.langService.subscribeUiListeners(()=>{this.handleConsoleLogLanguageChange(),this.requestUpdate()})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.handleKeyDown),this.unsubscribeUiLang&&(this.unsubscribeUiLang(),this.unsubscribeUiLang=null)}async execute(e){try{const t=(new Date).toLocaleTimeString().split(" ")[0]??"",a=o(this.langService.getUiLanguage()),r=await this.langService.localizeScript(e,a);this.consoleLogs=[[t,e,r],...this.consoleLogs],await this.interpreter.doExecute(e)}catch(t){}}handleMove(e){const{action:t}=e.detail;this.doHandleMove(t)}doHandleMove(e){let t;switch(e){case N.GT_FORWARD:case N.GT_BACKWARD:t=`${N[e]} ${this.step}`+no;break;case N.GT_LEFT:t=`${N[e]} ${this.angle}`+no,this.currentHeading=(this.currentHeading-this.angle+360)%360;break;case N.GT_RIGHT:t=`${N[e]} ${this.angle}`+no,this.currentHeading=(this.currentHeading+this.angle)%360;break;default:return}this.execute(t)}handleHeadingChange(e){const t=this.currentHeading,a=e.detail.heading;this.currentHeading=a;const r=a-t;this.execute(`${N[N.GT_RIGHT]} ${r}`+no)}handleSettingChange(e){const{type:t,value:a}=e.detail;"step"===t&&(this.step=a),"angle"===t&&(this.angle=a)}handleColorChange(e){const t=e.detail.color;this.execute(`${N[N.GT_PEN_COLOR]} "${t}"`+no)}handleCommand(e){const{action:t,value:a}=e.detail;if(![N.GT_FORWARD,N.GT_BACKWARD,N.GT_LEFT,N.GT_RIGHT,N.GT_PEN_UP,N.GT_PEN_DOWN,N.GT_SHOW_TURTLE,N.GT_HIDE_TURTLE].includes(t))return;const r=`${N[t]} ${a||""}`+no;this.execute(r)}handleReset(){const e=N[N.GT_VG]+no+N[N.GT_RZ]+no;this.execute(e),this.currentHeading=0}handleClear(){const e=N[N.GT_VG]+no;this.execute(e)}handleKeyboardStatus(e){this.isKeyboardActive=e.detail.value}render(){const e=t(e=>this.langService.translate(e),"t");return v`
      <div class="sandbox-container">
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
              ${0===this.consoleLogs.length?v`<span class="empty">${e("sandbox.history_empty")}</span>`:this.consoleLogs.map(e=>v`<div class="log-line">[${e[0]}] ${e[2]}</div>`)}
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
    `}}An=Bn(En),On=new WeakMap,In=new WeakMap,Dn=new WeakMap,Mn=new WeakMap,Nn=new WeakMap,Qn(An,4,"step",Ln,so,On),Qn(An,4,"angle",kn,so,In),Qn(An,4,"consoleLogs",Cn,so,Dn),Qn(An,4,"currentHeading",Sn,so,Mn),Qn(An,4,"isKeyboardActive",Gn,so,Nn),so=Qn(An,0,"GtnSandbox",Rn,so),Xn(so,"styles",b`
    ${_(":host{display:block;font-family:var(--font-ui);background:#adff2f;width:100%;height:100%;overflow:hidden}.sandbox-container{display:flex;flex-direction:row;width:100%;height:100%;background:#f8f9fa;gap:1rem;padding:1rem;box-sizing:border-box}.side-panel{width:250px;display:flex;flex-direction:column;gap:1rem;overflow-y:auto}.center-panel{display:flex;flex:1;min-width:0;flex-direction:column;gap:1rem;overflow:hidden;overflow-y:auto}.left-panel{flex:0 0 250px}.right-panel{width:300px;flex:0 0 300px}.canvas-area{flex:1;position:relative;overflow:hidden;background-color:#e0e5ec;box-shadow:inset 0 0 10px #0000000d}.panel-section{margin-bottom:1.5rem;background:#fff;padding:.75rem;border-radius:8px;box-shadow:0 1px 3px #0000001a;border:1px solid #e9ecef;color:#212529}.panel-section h3{margin:0 0 .8rem;font-size:.85rem;text-transform:uppercase;letter-spacing:.5px;color:#888;border-bottom:1px solid #eee;padding-bottom:4px}.console-output{background:#212529;color:#51cf66;font-family:var(--font-code);padding:8px;height:120px;overflow-y:auto;border-radius:4px;font-size:.8rem;display:flex;flex-direction:column}.log-line{border-bottom:1px solid #343a40;padding:2px 0;white-space:nowrap}.empty{color:#868e96;font-style:italic}.console-output::-webkit-scrollbar{width:6px}.console-output::-webkit-scrollbar-track{background:#212529}.console-output::-webkit-scrollbar-thumb{background:#495057;border-radius:3px}@media(max-width:800px){.sandbox-container{flex-direction:column}aside{width:100%;height:auto;max-height:150px;flex-direction:row;gap:20px;padding:10px;border:none;border-top:1px solid #ccc}.right-panel{order:3}.canvas-area{order:1;flex:1}}")}
  `),Yn(An,1,so);var co,lo,ho,po=Object.create,uo=Object.defineProperty,go=Object.getOwnPropertyDescriptor,bo=t((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$1"),_o=t(e=>{throw TypeError(e)},"__typeError$1"),mo=t((e,t,a)=>t in e?uo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$1"),vo=t((e,t)=>uo(e,"name",{value:t,configurable:!0}),"__name$1"),fo=t(e=>[,,,po(e?.[bo("metadata")]??null)],"__decoratorStart$1"),To=["class","method","getter","setter","accessor","field","value","get","set"],yo=t(e=>void 0!==e&&"function"!=typeof e?_o("Function expected"):e,"__expectFn$1"),wo=t((e,a,r,i,n)=>({kind:To[e],name:a,metadata:i,addInitializer:t(e=>r._?_o("Already initialized"):n.push(yo(e||null)),"addInitializer")}),"__decoratorContext$1"),xo=t((e,t)=>mo(t,bo("metadata"),e[3]),"__decoratorMetadata$1"),$o=t((e,t,a,r)=>{for(var i=0,n=e[t>>1],o=n&&n.length;i<o;i++)n[i].call(a);return r},"__runInitializers$1"),Go=t((e,t,a,r,i,n)=>{var o,s,c,l=7&t,d=e[0]||(e[0]=[]),h=l&&(i=i.prototype,l<5&&(l>3||!0)&&go(i,a));vo(i,a);for(var p=r.length-1;p>=0;p--)c=wo(l,a,s={},e[3],d),o=(0,r[p])(i,c),s._=1,yo(o)&&(i=o);return xo(e,i),h&&uo(i,a,h),i},"__decorateElement$1");co=[T("gtn-workbench")];class So extends(ho=f){static{t(this,"GTNWorkbench")}static styles=b`
    ${_(":host{display:block;width:100%;height:100%;overflow:hidden}.workbench-layout{display:flex;flex-direction:row;width:100%;height:100%;overflow:hidden}.sidebar{width:400px;min-width:300px;max-width:50vw;display:flex;flex-direction:column;border-right:1px solid #bdc3c7;background-color:#fff;z-index:5}.editor-area{flex:1;overflow:hidden;position:relative}.toast-area{flex:0 0 auto;max-height:40%;overflow-y:auto}.main-content{flex:1;position:relative;background:#e0e5ec;overflow:hidden}@media(max-width:800px){.workbench-layout{flex-direction:column}.sidebar{width:100%;max-width:none;flex:1;border-right:none;border-bottom:1px solid #bdc3c7}.main-content{flex:1}}")}
  `;render(){return v`
      <div class="workbench-layout">
        <aside class="sidebar">
          <div class="editor-area">
            <slot name="editor"></slot>
          </div>
          <div class="toast-area">
            <slot name="toast"></slot>
          </div>
        </aside>

        <section class="main-content">
          <slot name="canvas"></slot>
        </section>
      </div>
    `}}$o(lo=fo(ho),1,So=Go(lo,0,"GTNWorkbench",co,So));var Co,ko,Lo,Eo,Ro,Ao,Oo,Io,Do,Mo=Object.create,No=Object.defineProperty,Po=Object.getOwnPropertyDescriptor,Fo=t((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol"),Uo=t(e=>{throw TypeError(e)},"__typeError"),jo=t((e,t,a)=>t in e?No(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp"),zo=t((e,t)=>No(e,"name",{value:t,configurable:!0}),"__name"),Ko=t(e=>[,,,Mo(e?.[Fo("metadata")]??null)],"__decoratorStart"),Wo=["class","method","getter","setter","accessor","field","value","get","set"],Bo=t(e=>void 0!==e&&"function"!=typeof e?Uo("Function expected"):e,"__expectFn"),Ho=t((e,a,r,i,n)=>({kind:Wo[e],name:a,metadata:i,addInitializer:t(e=>r._?Uo("Already initialized"):n.push(Bo(e||null)),"addInitializer")}),"__decoratorContext"),qo=t((e,t)=>jo(t,Fo("metadata"),e[3]),"__decoratorMetadata"),Vo=t((e,t,a,r)=>{for(var i=0,n=e[t>>1],o=n&&n.length;i<o;i++)1&t?n[i].call(a):r=n[i].call(a,r);return r},"__runInitializers"),Zo=t((e,t,a,r,i,n)=>{var o,s,c,l,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,b=Wo[h+5],_=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),v=h&&(!u&&!p&&(i=i.prototype),h<5&&(h>3||!u)&&Po(h<4?i:{get[a](){return Jo(this,n)},set[a](e){return ts(this,n,e)}},a));h?u&&h<4&&zo(n,(h>2?"set ":h>1?"get ":"")+a):zo(i,a);for(var f=r.length-1;f>=0;f--)l=Ho(h,a,c={},e[3],m),h&&(l.static=p,l.private=u,d=l.access={has:u?e=>Xo(i,e):e=>a in e},3^h&&(d.get=u?e=>(1^h?Jo:as)(e,i,4^h?n:v.get):e=>e[a]),h>2&&(d.set=u?(e,t)=>ts(e,i,t,4^h?n:v.set):(e,t)=>e[a]=t)),s=(0,r[f])(h?h<4?u?n:v[b]:h>4?void 0:{get:v.get,set:v.set}:i,l),c._=1,4^h||void 0===s?Bo(s)&&(h>4?_.unshift(s):h?u?n=s:v[b]=s:i=s):"object"!=typeof s||null===s?Uo("Object expected"):(Bo(o=s.get)&&(v.get=o),Bo(o=s.set)&&(v.set=o),Bo(o=s.init)&&_.unshift(o));return h||qo(e,i),v&&No(i,a,v),u?4^h?n:v:i},"__decorateElement"),Yo=t((e,t,a)=>jo(e,"symbol"!=typeof t?t+"":t,a),"__publicField"),Qo=t((e,t,a)=>t.has(e)||Uo("Cannot "+a),"__accessCheck"),Xo=t((e,t)=>Object(t)!==t?Uo('Cannot use the "in" operator on this value'):e.has(t),"__privateIn"),Jo=t((e,t,a)=>(Qo(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet"),es=t((e,t,a)=>t.has(e)?Uo("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd"),ts=t((e,t,a,r)=>(Qo(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet"),as=t((e,t,a)=>(Qo(e,t,"access private method"),a),"__privateMethod");const rs={fr:"\ncrayon rouge;\npas := 36;\nrot := 360 / pas;\nrep 36 [\n  av rot;\n  td rot;\n]\n",en:"\ncolor red;\nstep := 36;\nrot := 360 / pas;\nrepeat 36 [\n  fd rot;\n  rt rot;\n]\n"};Ro=[T("gtn-app")];class is extends(Eo=f,Lo=[$()],ko=[$()],Co=[$()],Eo){static{t(this,"GTNApp")}constructor(){super(),es(this,Oo,Vo(Ao,8,this,"")),Vo(Ao,11,this),es(this,Io,Vo(Ao,12,this,[])),Vo(Ao,15,this),es(this,Do,Vo(Ao,16,this,"SANDBOX")),Vo(Ao,19,this),Yo(this,"interpreter"),Yo(this,"langService"),Yo(this,"turtleRepo"),Yo(this,"projectService"),Yo(this,"syntaxService"),Yo(this,"uiUnsubscribe");const e=a.getInstance();this.interpreter=e.resolve(r.Interpreter),this.langService=e.resolve(r.LanguageService),this.turtleRepo=e.resolve(r.TurtleRepository),this.projectService=e.resolve(r.ProjectService),this.syntaxService=e.resolve(r.SyntaxService);const t=this.langService.getDslLanguage(),i=rs[t]||"";this.code=i}connectedCallback(){super.connectedCallback(),this.uiUnsubscribe=this.langService.subscribeUiListeners(this.handleLanguageChange.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.uiUnsubscribe&&this.uiUnsubscribe()}handleLanguageChange(e){const t=this.syntaxService.validate(this.code);this.errors=[...t]}handleCodeChange(e){this.code=e.detail.code,this.errors=this.syntaxService.validate(this.code)}handleViewChange(e){this.viewMode=e.detail.view}async handleRun(){if(this.errors=this.syntaxService.validate(this.code),!(this.errors.length>0))try{await this.interpreter.execute(this.code)}catch(e){alert("Error executing GéoTortue commands")}}handleClear(){this.turtleRepo.clear();const e=a.getInstance(),t=e.resolve(r.GeometryService),i=e.resolve(r.TurtleRepository).getNextId(),n=new g(i,t);this.turtleRepo.save(n)}async handleSaveProject(){try{await this.projectService.saveProject(this.code),alert("Project saved!")}catch(e){alert("Failed to save project")}}async handleOpenProject(){try{const e=await this.projectService.loadProject();e&&(this.code=e),alert("Project loaded!")}catch(e){}}async handleDslChange(e){const{oldLang:t,newLang:a}=e.detail;try{const e=await this.langService.translateScript(this.code,a,t);this.code=e}catch(r){}}render(){return v`
      <div class="header">
        <gtn-toolbar
          .currentView=${this.viewMode}
          @view-change=${this.handleViewChange}
          @run=${this.handleRun}
          @clear=${this.handleClear}
          @save-project=${this.handleSaveProject}
          @open-project=${this.handleOpenProject}
          @dsl-lang-change=${this.handleDslChange}
        ></gtn-toolbar>
      </div>

      <main>
        ${"EDITOR"===this.viewMode?v`
              <gtn-workbench>
                <gtn-editor
                  slot="editor"
                  .code=${this.code}
                  @code-change=${this.handleCodeChange}
                ></gtn-editor>

                <gtn-error-toast slot="toast" .errors=${this.errors}></gtn-error-toast>

                <gtn-canvas slot="canvas"></gtn-canvas>
              </gtn-workbench>
            `:v`
              <gtn-sandbox>
                <gtn-canvas></gtn-canvas>
              </gtn-sandbox>
            `}
      </main>

      ${""}
    `}}Ao=Ko(Eo),Oo=new WeakMap,Io=new WeakMap,Do=new WeakMap,Zo(Ao,4,"code",Lo,is,Oo),Zo(Ao,4,"errors",ko,is,Io),Zo(Ao,4,"viewMode",Co,is,Do),is=Zo(Ao,0,"GTNApp",Ro,is),Yo(is,"styles",b`
    ${_(":host{display:flex;flex-direction:column;height:100vh;width:100vw;overflow:hidden;background-color:#ecf0f1}.header{flex:0 0 auto;z-index:10}main{flex:1;display:block;overflow:hidden;position:relative}@media(max-width:800px){:host{display:flex}}gtn-workbench,gtn-sandbox{display:block;height:100%;width:100%}")}
  `),Vo(Ao,1,is);export{is as GTNApp};
//# sourceMappingURL=gtn-app-CX2sZYfD.js.map
