var e=Object.defineProperty,t=(t,a)=>e(t,"name",{value:a,configurable:!0});import{G as a,a as r,t as o,b as s,D as i,c as n,d as l,e as c,T as d,f as h,g as p,h as u,i as g,j as b,N as m,k as v,l as f}from"./index-DVJC1220.js";import{w as _,x,y,z as w,A as $,G as k,H as S,J as C,K as R}from"./vendor-Djb7465o.js";import{V as E,R as L,D as T,E as D,a as A,b as j,o as O,k as z,i as M,c as I,C as G}from"./vendor-cm-CUNnyTb6.js";import{g as N}from"./vendor-antlr-BhUY6QBA.js";import"./vendor-math-DM08dv3T.js";import"./vendor-three-BBCA40AT.js";const P=_`
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
`;class F{static{t(this,"UiLanguageController")}host;languageService;unsubscribe;constructor(e){this.host=e,this.languageService=a.getInstance().resolve(r.LanguageService),e.addController(this)}hostConnected(){this.unsubscribe=this.languageService.subscribeUiListeners(()=>{this.host.requestUpdate()})}hostDisconnected(){this.unsubscribe&&this.unsubscribe()}}var W,U,B,K,V,H,Y,X,q,J,Z,Q,ee,te=Object.create,ae=Object.defineProperty,re=Object.getOwnPropertyDescriptor,oe=t((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$6"),se=t(e=>{throw TypeError(e)},"__typeError$6"),ie=t((e,t,a)=>t in e?ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$6"),ne=t((e,t)=>ae(e,"name",{value:t,configurable:!0}),"__name$6"),le=t(e=>[,,,te(e?.[oe("metadata")]??null)],"__decoratorStart$6"),ce=["class","method","getter","setter","accessor","field","value","get","set"],de=t(e=>void 0!==e&&"function"!=typeof e?se("Function expected"):e,"__expectFn$6"),he=t((e,a,r,o,s)=>({kind:ce[e],name:a,metadata:o,addInitializer:t(e=>r._?se("Already initialized"):s.push(de(e||null)),"addInitializer")}),"__decoratorContext$6"),pe=t((e,t)=>ie(t,oe("metadata"),e[3]),"__decoratorMetadata$6"),ue=t((e,t,a,r)=>{for(var o=0,s=e[t>>1],i=s&&s.length;o<i;o++)1&t?s[o].call(a):r=s[o].call(a,r);return r},"__runInitializers$6"),ge=t((e,t,a,r,o,s)=>{var i,n,l,c,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,b=ce[h+5],m=h>3&&(e[g-1]=[]),v=e[g]||(e[g]=[]),f=h&&(!u&&!p&&(o=o.prototype),h<5&&(h>3||!u)&&re(h<4?o:{get[a](){return fe(this,s)},set[a](e){return xe(this,s,e)}},a));h?u&&h<4&&ne(s,(h>2?"set ":h>1?"get ":"")+a):ne(o,a);for(var _=r.length-1;_>=0;_--)c=he(h,a,l={},e[3],v),h&&(c.static=p,c.private=u,d=c.access={has:u?e=>ve(o,e):e=>a in e},3^h&&(d.get=u?e=>(1^h?fe:ye)(e,o,4^h?s:f.get):e=>e[a]),h>2&&(d.set=u?(e,t)=>xe(e,o,t,4^h?s:f.set):(e,t)=>e[a]=t)),n=(0,r[_])(h?h<4?u?s:f[b]:h>4?void 0:{get:f.get,set:f.set}:o,c),l._=1,4^h||void 0===n?de(n)&&(h>4?m.unshift(n):h?u?s=n:f[b]=n:o=n):"object"!=typeof n||null===n?se("Object expected"):(de(i=n.get)&&(f.get=i),de(i=n.set)&&(f.set=i),de(i=n.init)&&m.unshift(i));return h||pe(e,o),f&&ae(o,a,f),u?4^h?s:f:o},"__decorateElement$6"),be=t((e,t,a)=>ie(e,"symbol"!=typeof t?t+"":t,a),"__publicField$5"),me=t((e,t,a)=>t.has(e)||se("Cannot "+a),"__accessCheck$5"),ve=t((e,t)=>Object(t)!==t?se('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$5"),fe=t((e,t,a)=>(me(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet$5"),_e=t((e,t,a)=>t.has(e)?se("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd$5"),xe=t((e,t,a,r)=>(me(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet$5"),ye=t((e,t,a)=>(me(e,t,"access private method"),a),"__privateMethod$5");Y=[k("gtn-toolbar")];class we extends(H=w,V=[S({type:String})],K=[S({type:String})],B=[S({type:String})],U=[S({type:String})],W=[S({type:String})],H){static{t(this,"GTNToolbar")}constructor(){super(),be(this,"langService"),be(this,"appState"),be(this,"langController",new F(this)),_e(this,q,ue(X,8,this,o(i))),ue(X,11,this),_e(this,J,ue(X,12,this,s(i))),ue(X,15,this),_e(this,Z,ue(X,16,this,n)),ue(X,19,this),_e(this,Q,ue(X,20,this,l)),ue(X,23,this),_e(this,ee,ue(X,24,this,"EDITOR")),ue(X,27,this);const e=a.getInstance();this.langService=e.resolve(r.LanguageService),this.appState=e.resolve(r.ApplicationState),this.currentUiLang=this.langService.getUiLanguage(),this.currentDslLang=this.langService.getDslLanguage(),this.appState.subscribe(()=>{this.currentMode=this.appState.mode,this.currentCamera=this.appState.cameraType})}handleRun(){this.dispatchEvent(new CustomEvent("run"))}handleClear(){this.dispatchEvent(new CustomEvent("clear"))}handleSave(){this.dispatchEvent(new CustomEvent("save-project"))}handleOpen(){this.dispatchEvent(new CustomEvent("open-project"))}async handleUiLangChange(e){const t=e.target,a=o(t.value);await this.langService.setUiLanguage(a),this.currentUiLang=a}async handleDslLangChange(e){const t=e.target,a=this.currentDslLang,r=s(t.value);this.dispatchEvent(new CustomEvent("dsl-lang-change",{detail:{oldLang:a,newLang:r},bubbles:!0,composed:!0})),await this.langService.setDslLanguage(r),this.currentDslLang=r}handleToggleMode(){this.appState.toggleMode()}handleToggleCamera(){this.appState.toggleCameraType()}handleViewChange(e){this.currentView=e,this.dispatchEvent(new CustomEvent("view-change",{detail:{view:e},bubbles:!0,composed:!0}))}render(){const e=t(e=>this.langService.translate(e),"t");return this.currentUiLang=this.langService.getUiLanguage(),this.currentDslLang=this.langService.getDslLanguage(),y`
      <div class="group">
        <span class="material-icons">school</span>
        <span class="title">${e("app.title")}</span>
      </div>

      <div
        class="group view-switcher"
        style="margin-left: 1rem; border-right: 1px solid #ccc; padding-right: 1rem;"
      >
        <button
          class=${x({active:"EDITOR"===this.currentView})}
          @click=${()=>this.handleViewChange("EDITOR")}
          title="${e("mode.editor")}"
        >
          <span class="material-icons">code</span>
        </button>
        <button
          class=${x({active:"SANDBOX"===this.currentView})}
          @click=${()=>this.handleViewChange("SANDBOX")}
          title="${e("mode.sandbox")}"
        >
          <span class="material-icons">touch_app</span>
        </button>
      </div>

      ${"EDITOR"===this.currentView?y`
            <div class="group">
              <button @click=${this.handleOpen} title="${e("toolbar.open_project")}">
                <span class="material-icons">folder_open</span>
              </button>
              <button @click=${this.handleSave} title="${e("toolbar.save_project")}">
                <span class="material-icons">save</span>
              </button>

              <div class="separator"></div>

              <button class="mode-badge" @click=${this.handleToggleMode} title="Toggle 2D/3D">
                ${this.currentMode}
              </button>

              ${"3D"===this.currentMode?y`
                    <button
                      @click=${this.handleToggleCamera}
                      title="Switch Camera"
                      style="font-size:0.8rem"
                    >
                      <span class="material-icons" style="font-size:1.1rem">videocam</span>
                      ${"PERSPECTIVE"===this.currentCamera?"PERSP":"ORTHO"}
                    </button>
                  `:""}

              <div class="separator"></div>

              <button class="primary" @click=${this.handleRun} title="Ctrl+Enter">
                <span class="material-icons">play_arrow</span> ${e("toolbar.run")}
              </button>
              <button class="danger" @click=${this.handleClear}>
                <span class="material-icons">delete</span> ${e("toolbar.clear")}
              </button>
            </div>
          `:y`
            <div class="group">
              <span style="font-size: 0.8rem; color: #666; font-style:italic;"
                >Mode Interactif</span
              >
            </div>
          `}

      <div class="group" style="margin-left: auto;">
        <button class="mode-badge" @click=${this.handleToggleMode} title="Toggle 2D/3D">
          ${this.currentMode}
        </button>
        ${"3D"===this.currentMode?y`
              <button @click=${this.handleToggleCamera} title="Switch Camera">
                <span class="material-icons">videocam</span>
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

        <div class="selector-wrapper">
          <label for="select-dsl" class="label">${e("toolbar.selector.dsl")}</label>
          <select id="select-dsl" @change=${this.handleDslLangChange} .value=${this.currentDslLang}>
            <option value="fr">${e("languages.fr")}</option>
            <option value="en">${e("languages.en")}</option>
          </select>
        </div>
      </div>
    `}}function $e(e,a){const r=e.getTokenStyleMap(),o=new d(a);return E.fromClass(class{decorations;constructor(e){this.decorations=this.buildDecorations(e)}update(e){(e.docChanged||e.viewportChanged)&&(this.decorations=this.buildDecorations(e.view))}buildDecorations(e){const t=new L,a=e.state.doc.toString(),s=N.fromString(a),i=new c(s);i.removeErrorListeners();const n=o.getRefinedTokens(()=>i.getAllTokens());for(const o of n){const e=r.get(o.type);e&&t.add(o.start,o.stop+1,T.mark({class:`cm-gt-${e}`}))}return t.finish()}},{decorations:t(e=>e.decorations,"decorations")})}X=le(H),q=new WeakMap,J=new WeakMap,Z=new WeakMap,Q=new WeakMap,ee=new WeakMap,ge(X,4,"currentUiLang",V,we,q),ge(X,4,"currentDslLang",K,we,J),ge(X,4,"currentMode",B,we,Z),ge(X,4,"currentCamera",U,we,Q),ge(X,4,"currentView",W,we,ee),we=ge(X,0,"GTNToolbar",Y,we),be(we,"styles",[P,_`
      ${$(":host{display:flex;justify-content:space-between;align-items:center;padding:0 1rem;background-color:#2c3e50;color:#fff;height:50px;box-shadow:0 2px 5px #0003}.group{display:flex;gap:10px;align-items:center}.label{font-size:.7rem;font-weight:600;color:#bdc3c7;margin-bottom:2px;text-transform:uppercase;letter-spacing:.5px}.selector-wrapper{display:flex;flex-direction:column;align-items:center}.separator{width:1px;height:25px;background:#46607a;margin:0 5px}button{background:#34495e;border:1px solid #46607a;color:#fff;padding:5px 12px;border-radius:4px;cursor:pointer;display:flex;align-items:center;gap:5px;font-size:.9rem;transition:background .2s}button:hover{background:#46607a}button.primary{background:#27ae60;border-color:#2ecc71}button.primary:hover{background:#2ecc71}button.danger{background:#c0392b;border-color:#e74c3c}select{background:#34495e;color:#fff;border:1px solid #46607a;padding:2px 5px;border-radius:4px;cursor:pointer;font-size:.85rem;min-width:50px}.title{font-weight:700;font-family:Inconsolata,monospace;font-size:1.2rem}.mode-badge{font-weight:900;color:#f1c40f;min-width:30px;justify-content:center}")}
      /* Add specific styles for the view switcher if not in SCSS */
      .view-switcher button.active {
        background-color: #e3f2fd; /* Light Blue highlight */
        color: #1565c0;
        border-bottom: 2px solid #1565c0;
      }
    `]),ue(X,1,we),t($e,"createAntlrHighlighter");const ke=D.baseTheme({".cm-gt-keyword":{color:"#c678dd",fontWeight:"bold"},".cm-gt-command":{color:"#61afef"},".cm-gt-number":{color:"#d19a66"},".cm-gt-string":{color:"#98c379"},".cm-gt-variable":{color:"#e06c75"},".cm-gt-comment":{color:"#5c6370",fontStyle:"italic"},".cm-gt-operator":{color:"#56b6c2"}});var Se,Ce,Re,Ee,Le,Te,De,Ae=Object.create,je=Object.defineProperty,Oe=Object.getOwnPropertyDescriptor,ze=t((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$5"),Me=t(e=>{throw TypeError(e)},"__typeError$5"),Ie=t((e,t,a)=>t in e?je(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$5"),Ge=t((e,t)=>je(e,"name",{value:t,configurable:!0}),"__name$5"),Ne=t(e=>[,,,Ae(e?.[ze("metadata")]??null)],"__decoratorStart$5"),Pe=["class","method","getter","setter","accessor","field","value","get","set"],Fe=t(e=>void 0!==e&&"function"!=typeof e?Me("Function expected"):e,"__expectFn$5"),We=t((e,a,r,o,s)=>({kind:Pe[e],name:a,metadata:o,addInitializer:t(e=>r._?Me("Already initialized"):s.push(Fe(e||null)),"addInitializer")}),"__decoratorContext$5"),Ue=t((e,t)=>Ie(t,ze("metadata"),e[3]),"__decoratorMetadata$5"),Be=t((e,t,a,r)=>{for(var o=0,s=e[t>>1],i=s&&s.length;o<i;o++)1&t?s[o].call(a):r=s[o].call(a,r);return r},"__runInitializers$5"),Ke=t((e,t,a,r,o,s)=>{var i,n,l,c,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,b=Pe[h+5],m=h>3&&(e[g-1]=[]),v=e[g]||(e[g]=[]),f=h&&(!u&&!p&&(o=o.prototype),h<5&&(h>3||!u)&&Oe(h<4?o:{get[a](){return Xe(this,s)},set[a](e){return Je(this,s,e)}},a));h?u&&h<4&&Ge(s,(h>2?"set ":h>1?"get ":"")+a):Ge(o,a);for(var _=r.length-1;_>=0;_--)c=We(h,a,l={},e[3],v),h&&(c.static=p,c.private=u,d=c.access={has:u?e=>Ye(o,e):e=>a in e},3^h&&(d.get=u?e=>(1^h?Xe:Ze)(e,o,4^h?s:f.get):e=>e[a]),h>2&&(d.set=u?(e,t)=>Je(e,o,t,4^h?s:f.set):(e,t)=>e[a]=t)),n=(0,r[_])(h?h<4?u?s:f[b]:h>4?void 0:{get:f.get,set:f.set}:o,c),l._=1,4^h||void 0===n?Fe(n)&&(h>4?m.unshift(n):h?u?s=n:f[b]=n:o=n):"object"!=typeof n||null===n?Me("Object expected"):(Fe(i=n.get)&&(f.get=i),Fe(i=n.set)&&(f.set=i),Fe(i=n.init)&&m.unshift(i));return h||Ue(e,o),f&&je(o,a,f),u?4^h?s:f:o},"__decorateElement$5"),Ve=t((e,t,a)=>Ie(e,"symbol"!=typeof t?t+"":t,a),"__publicField$4"),He=t((e,t,a)=>t.has(e)||Me("Cannot "+a),"__accessCheck$4"),Ye=t((e,t)=>Object(t)!==t?Me('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$4"),Xe=t((e,t,a)=>(He(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet$4"),qe=t((e,t,a)=>t.has(e)?Me("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd$4"),Je=t((e,t,a,r)=>(He(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet$4"),Ze=t((e,t,a)=>(He(e,t,"access private method"),a),"__privateMethod$4");Ee=[k("gtn-editor")];class Qe extends(Re=w,Ce=[S({type:String})],Se=[C("#editor-container")],Re){static{t(this,"GTNEditor")}constructor(){super(),qe(this,Te,Be(Le,8,this)),Be(Le,11,this),qe(this,De,Be(Le,12,this)),Be(Le,15,this),Ve(this,"editor"),Ve(this,"langService"),Ve(this,"langController",new F(this)),Ve(this,"languageCompartment",new G),Ve(this,"syntaxService");const e=a.getInstance();this.langService=e.resolve(r.LanguageService),this.syntaxService=e.resolve(r.SyntaxService),this.code=""}firstUpdated(){this.initEditor()}initEditor(){const e=$e(this.syntaxService,this.langService),t=A.create({doc:this.code,extensions:[j,z.of([M]),O,ke,e,this.languageCompartment.of([e]),D.updateListener.of(e=>{e.docChanged&&(this.code=e.state.doc.toString(),this.dispatchEvent(new CustomEvent("code-change",{detail:{code:this.code},bubbles:!0,composed:!0})))})]});this.editor=new D({state:t,parent:this.editorContainer}),this.updateLanguageFeatures()}updated(e){super.updated(e),this.updateLanguageFeatures(),this.translateCodeInEditor(e)}translateCodeInEditor(e){if(!e.has("code")||!this.editor)return;const t=this.editor.state.doc.toString();t!==this.code&&this.editor.dispatch({changes:{from:0,to:t.length,insert:this.code}})}updateLanguageFeatures(){if(!this.editor)return;const e=this.langService.getAllKeywords(),t=I({override:[t=>{const a=t.matchBefore(/\w*/);return!a||a.from===a.to&&!t.explicit?null:{from:a.from,options:e.map(e=>({label:e,type:"keyword"}))}}]});this.editor.dispatch({effects:this.languageCompartment.reconfigure([t,$e(this.syntaxService,this.langService)])})}disconnectedCallback(){super.disconnectedCallback(),this.editor?.destroy()}render(){return y`<div id="editor-container"></div>`}}Le=Ne(Re),Te=new WeakMap,De=new WeakMap,Ke(Le,4,"code",Ce,Qe,Te),Ke(Le,4,"editorContainer",Se,Qe,De),Qe=Ke(Le,0,"GTNEditor",Ee,Qe),Ve(Qe,"styles",_`
    ${$(":host{display:block;font-family:var(--font-code);height:100%;overflow:hidden;font-size:14px}#editor-container,.cm-editor{height:100%}.cm-editor .cm-scroller{font-family:inherit}")}
  `),Be(Le,1,Qe);var et,tt,at,rt,ot,st=Object.create,it=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,lt=t((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$4"),ct=t(e=>{throw TypeError(e)},"__typeError$4"),dt=t((e,t,a)=>t in e?it(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$4"),ht=t((e,t)=>it(e,"name",{value:t,configurable:!0}),"__name$4"),pt=t(e=>[,,,st(e?.[lt("metadata")]??null)],"__decoratorStart$4"),ut=["class","method","getter","setter","accessor","field","value","get","set"],gt=t(e=>void 0!==e&&"function"!=typeof e?ct("Function expected"):e,"__expectFn$4"),bt=t((e,a,r,o,s)=>({kind:ut[e],name:a,metadata:o,addInitializer:t(e=>r._?ct("Already initialized"):s.push(gt(e||null)),"addInitializer")}),"__decoratorContext$4"),mt=t((e,t)=>dt(t,lt("metadata"),e[3]),"__decoratorMetadata$4"),vt=t((e,t,a,r)=>{for(var o=0,s=e[t>>1],i=s&&s.length;o<i;o++)1&t?s[o].call(a):r=s[o].call(a,r);return r},"__runInitializers$4"),ft=t((e,t,a,r,o,s)=>{var i,n,l,c,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,b=ut[h+5],m=h>3&&(e[g-1]=[]),v=e[g]||(e[g]=[]),f=h&&(!u&&!p&&(o=o.prototype),h<5&&(h>3||!u)&&nt(h<4?o:{get[a](){return wt(this,s)},set[a](e){return kt(this,s,e)}},a));h?u&&h<4&&ht(s,(h>2?"set ":h>1?"get ":"")+a):ht(o,a);for(var _=r.length-1;_>=0;_--)c=bt(h,a,l={},e[3],v),h&&(c.static=p,c.private=u,d=c.access={has:u?e=>yt(o,e):e=>a in e},3^h&&(d.get=u?e=>(1^h?wt:St)(e,o,4^h?s:f.get):e=>e[a]),h>2&&(d.set=u?(e,t)=>kt(e,o,t,4^h?s:f.set):(e,t)=>e[a]=t)),n=(0,r[_])(h?h<4?u?s:f[b]:h>4?void 0:{get:f.get,set:f.set}:o,c),l._=1,4^h||void 0===n?gt(n)&&(h>4?m.unshift(n):h?u?s=n:f[b]=n:o=n):"object"!=typeof n||null===n?ct("Object expected"):(gt(i=n.get)&&(f.get=i),gt(i=n.set)&&(f.set=i),gt(i=n.init)&&m.unshift(i));return h||mt(e,o),f&&it(o,a,f),u?4^h?s:f:o},"__decorateElement$4"),_t=t((e,t,a)=>dt(e,"symbol"!=typeof t?t+"":t,a),"__publicField$3"),xt=t((e,t,a)=>t.has(e)||ct("Cannot "+a),"__accessCheck$3"),yt=t((e,t)=>Object(t)!==t?ct('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$3"),wt=t((e,t,a)=>(xt(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet$3"),$t=t((e,t,a)=>t.has(e)?ct("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd$3"),kt=t((e,t,a,r)=>(xt(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet$3"),St=t((e,t,a)=>(xt(e,t,"access private method"),a),"__privateMethod$3");at=[k("gtn-canvas")];class Ct extends(tt=w,et=[C("#render-container")],tt){static{t(this,"GTNCanvas")}constructor(){super(),$t(this,ot,vt(rt,8,this)),vt(rt,11,this),_t(this,"turtleRepo"),_t(this,"appState"),_t(this,"renderLoop"),_t(this,"renderer2D"),_t(this,"renderer3D"),_t(this,"currentRenderer",null),_t(this,"unsubscribeLoop",null);const e=a.getInstance();this.turtleRepo=e.resolve(r.TurtleRepository),this.appState=e.resolve(r.ApplicationState),this.renderLoop=e.resolve(r.RenderLoop),this.renderer2D=e.resolve(r.Renderer2D),this.renderer3D=e.resolve(r.Renderer3D)}firstUpdated(){this.syncRenderer(),this.appState.subscribe(()=>{this.syncRenderer()}),window.addEventListener("resize",()=>this.handleResize()),this.unsubscribeLoop=this.renderLoop.subscribe(()=>{this.currentRenderer&&this.currentRenderer.render(this.turtleRepo)}),this.renderLoop.start()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeLoop&&(this.unsubscribeLoop(),this.unsubscribeLoop=null),this.renderLoop.stop(),window.removeEventListener("resize",()=>this.handleResize()),this.currentRenderer&&this.currentRenderer.dispose()}syncRenderer(){const e=this.appState.mode,t=this.appState.cameraType,a="3D"===e;a===this.currentRenderer instanceof h&&this.currentRenderer||(this.currentRenderer&&this.currentRenderer.dispose(),this.currentRenderer="3D"===e?new h:new p,this.container&&this.currentRenderer.attach(this.container)),a&&this.currentRenderer instanceof h&&this.currentRenderer.setCameraType(t)}handleResize(){if(!this.currentRenderer||!this.container)return;const e=this.container.getBoundingClientRect();this.currentRenderer.resize(e.width,e.height)}render(){return y`<div id="render-container"></div>`}}ft(rt=pt(tt),4,"container",et,Ct,ot=new WeakMap),Ct=ft(rt,0,"GTNCanvas",at,Ct),_t(Ct,"styles",_`
    ${$(":host{display:block;width:100%;height:100%;overflow:hidden;background:#f0f0f0}#render-container{width:100%;height:100%}")}
  `),vt(rt,1,Ct);var Rt,Et,Lt,Tt=Object.create,Dt=Object.defineProperty,At=Object.getOwnPropertyDescriptor,jt=t((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$3"),Ot=t(e=>{throw TypeError(e)},"__typeError$3"),zt=t((e,t,a)=>t in e?Dt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$3"),Mt=t((e,t)=>Dt(e,"name",{value:t,configurable:!0}),"__name$3"),It=t(e=>[,,,Tt(e?.[jt("metadata")]??null)],"__decoratorStart$3"),Gt=["class","method","getter","setter","accessor","field","value","get","set"],Nt=t(e=>void 0!==e&&"function"!=typeof e?Ot("Function expected"):e,"__expectFn$3"),Pt=t((e,a,r,o,s)=>({kind:Gt[e],name:a,metadata:o,addInitializer:t(e=>r._?Ot("Already initialized"):s.push(Nt(e||null)),"addInitializer")}),"__decoratorContext$3"),Ft=t((e,t)=>zt(t,jt("metadata"),e[3]),"__decoratorMetadata$3"),Wt=t((e,t,a,r)=>{for(var o=0,s=e[t>>1],i=s&&s.length;o<i;o++)s[o].call(a);return r},"__runInitializers$3"),Ut=t((e,t,a,r,o,s)=>{var i,n,l,c=7&t,d=e[0]||(e[0]=[]),h=c&&(o=o.prototype,c<5&&(c>3||!0)&&At(o,a));Mt(o,a);for(var p=r.length-1;p>=0;p--)l=Pt(c,a,n={},e[3],d),i=(0,r[p])(o,l),n._=1,Nt(i)&&(o=i);return Ft(e,o),h&&Dt(o,a,h),o},"__decorateElement$3");Rt=[k("dev-reset-button")];class Bt extends(Lt=w){static{t(this,"DevResetButton")}static styles=_`
    ${$("button{background-color:#f44;color:#fff;border:none;padding:8px 16px;border-radius:4px;cursor:pointer;font-weight:700}button:hover{background-color:#c00}")}
  `;resetApp(){localStorage.clear(),sessionStorage.clear(),window.location.reload()}render(){return y` <button @click="${this.resetApp}">Reset Local Data & Reload</button> `}}Wt(Et=It(Lt),1,Bt=Ut(Et,0,"DevResetButton",Rt,Bt));var Kt,Vt,Ht,Yt,Xt,qt=Object.create,Jt=Object.defineProperty,Zt=Object.getOwnPropertyDescriptor,Qt=t((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$2"),ea=t(e=>{throw TypeError(e)},"__typeError$2"),ta=t((e,t,a)=>t in e?Jt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$2"),aa=t((e,t)=>Jt(e,"name",{value:t,configurable:!0}),"__name$2"),ra=t(e=>[,,,qt(e?.[Qt("metadata")]??null)],"__decoratorStart$2"),oa=["class","method","getter","setter","accessor","field","value","get","set"],sa=t(e=>void 0!==e&&"function"!=typeof e?ea("Function expected"):e,"__expectFn$2"),ia=t((e,a,r,o,s)=>({kind:oa[e],name:a,metadata:o,addInitializer:t(e=>r._?ea("Already initialized"):s.push(sa(e||null)),"addInitializer")}),"__decoratorContext$2"),na=t((e,t)=>ta(t,Qt("metadata"),e[3]),"__decoratorMetadata$2"),la=t((e,t,a,r)=>{for(var o=0,s=e[t>>1],i=s&&s.length;o<i;o++)1&t?s[o].call(a):r=s[o].call(a,r);return r},"__runInitializers$2"),ca=t((e,t,a,r,o,s)=>{var i,n,l,c,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,b=oa[h+5],m=h>3&&(e[g-1]=[]),v=e[g]||(e[g]=[]),f=h&&(!u&&!p&&(o=o.prototype),h<5&&(h>3||!u)&&Zt(h<4?o:{get[a](){return ua(this,s)},set[a](e){return ba(this,s,e)}},a));h?u&&h<4&&aa(s,(h>2?"set ":h>1?"get ":"")+a):aa(o,a);for(var _=r.length-1;_>=0;_--)c=ia(h,a,l={},e[3],v),h&&(c.static=p,c.private=u,d=c.access={has:u?e=>pa(o,e):e=>a in e},3^h&&(d.get=u?e=>(1^h?ua:ma)(e,o,4^h?s:f.get):e=>e[a]),h>2&&(d.set=u?(e,t)=>ba(e,o,t,4^h?s:f.set):(e,t)=>e[a]=t)),n=(0,r[_])(h?h<4?u?s:f[b]:h>4?void 0:{get:f.get,set:f.set}:o,c),l._=1,4^h||void 0===n?sa(n)&&(h>4?m.unshift(n):h?u?s=n:f[b]=n:o=n):"object"!=typeof n||null===n?ea("Object expected"):(sa(i=n.get)&&(f.get=i),sa(i=n.set)&&(f.set=i),sa(i=n.init)&&m.unshift(i));return h||na(e,o),f&&Jt(o,a,f),u?4^h?s:f:o},"__decorateElement$2"),da=t((e,t,a)=>ta(e,t+"",a),"__publicField$2"),ha=t((e,t,a)=>t.has(e)||ea("Cannot "+a),"__accessCheck$2"),pa=t((e,t)=>Object(t)!==t?ea('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$2"),ua=t((e,t,a)=>(ha(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet$2"),ga=t((e,t,a)=>t.has(e)?ea("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd$2"),ba=t((e,t,a,r)=>(ha(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet$2"),ma=t((e,t,a)=>(ha(e,t,"access private method"),a),"__privateMethod$2");Ht=[k("gtn-error-toast")];class va extends(Vt=w,Kt=[S({type:Array})],Vt){static{t(this,"GTNErrorToast")}constructor(){super(...arguments),ga(this,Xt,la(Yt,8,this,[])),la(Yt,11,this)}render(){return y`
      ${this.errors.map(e=>y`
          <div class="toast">
            <div class="header">
              <span>Syntax Error (Line ${e.line})</span>
            </div>
            <div class="msg">${e.message}</div>
          </div>
        `)}
    `}}ca(Yt=ra(Vt),4,"errors",Kt,va,Xt=new WeakMap),da(va=ca(Yt,0,"GTNErrorToast",Ht,va),"styles",_`
    ${$(":host{display:block;position:fixed;bottom:20px;right:20px;z-index:1000;max-width:350px}.toast{background:#fff5f5;border-left:5px solid #f56565;box-shadow:0 4px 6px #0000001a;padding:12px 16px;margin-top:8px;border-radius:4px;animation:slideIn .3s ease-out}.header{font-weight:700;color:#c53030;display:flex;justify-content:space-between;font-size:.9em}.msg{font-size:.85em;margin-top:4px;color:#2d3748}@keyframes slideIn{0%{transform:translate(100%);opacity:0}to{transform:translate(0);opacity:1}}")}
  `),la(Yt,1,va);var fa,_a,xa,ya,wa,$a,ka,Sa,Ca,Ra,Ea,La,Ta,Da=Object.create,Aa=Object.defineProperty,ja=Object.getOwnPropertyDescriptor,Oa=t((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol$1"),za=t(e=>{throw TypeError(e)},"__typeError$1"),Ma=t((e,t,a)=>t in e?Aa(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp$1"),Ia=t((e,t)=>Aa(e,"name",{value:t,configurable:!0}),"__name$1"),Ga=t(e=>[,,,Da(e?.[Oa("metadata")]??null)],"__decoratorStart$1"),Na=["class","method","getter","setter","accessor","field","value","get","set"],Pa=t(e=>void 0!==e&&"function"!=typeof e?za("Function expected"):e,"__expectFn$1"),Fa=t((e,a,r,o,s)=>({kind:Na[e],name:a,metadata:o,addInitializer:t(e=>r._?za("Already initialized"):s.push(Pa(e||null)),"addInitializer")}),"__decoratorContext$1"),Wa=t((e,t)=>Ma(t,Oa("metadata"),e[3]),"__decoratorMetadata$1"),Ua=t((e,t,a,r)=>{for(var o=0,s=e[t>>1],i=s&&s.length;o<i;o++)1&t?s[o].call(a):r=s[o].call(a,r);return r},"__runInitializers$1"),Ba=t((e,t,a,r,o,s)=>{var i,n,l,c,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,b=Na[h+5],m=h>3&&(e[g-1]=[]),v=e[g]||(e[g]=[]),f=h&&(!u&&!p&&(o=o.prototype),h<5&&(h>3||!u)&&ja(h<4?o:{get[a](){return Ya(this,s)},set[a](e){return qa(this,s,e)}},a));h?u&&h<4&&Ia(s,(h>2?"set ":h>1?"get ":"")+a):Ia(o,a);for(var _=r.length-1;_>=0;_--)c=Fa(h,a,l={},e[3],v),h&&(c.static=p,c.private=u,d=c.access={has:u?e=>Ha(o,e):e=>a in e},3^h&&(d.get=u?e=>(1^h?Ya:Ja)(e,o,4^h?s:f.get):e=>e[a]),h>2&&(d.set=u?(e,t)=>qa(e,o,t,4^h?s:f.set):(e,t)=>e[a]=t)),n=(0,r[_])(h?h<4?u?s:f[b]:h>4?void 0:{get:f.get,set:f.set}:o,c),l._=1,4^h||void 0===n?Pa(n)&&(h>4?m.unshift(n):h?u?s=n:f[b]=n:o=n):"object"!=typeof n||null===n?za("Object expected"):(Pa(i=n.get)&&(f.get=i),Pa(i=n.set)&&(f.set=i),Pa(i=n.init)&&m.unshift(i));return h||Wa(e,o),f&&Aa(o,a,f),u?4^h?s:f:o},"__decorateElement$1"),Ka=t((e,t,a)=>Ma(e,"symbol"!=typeof t?t+"":t,a),"__publicField$1"),Va=t((e,t,a)=>t.has(e)||za("Cannot "+a),"__accessCheck$1"),Ha=t((e,t)=>Object(t)!==t?za('Cannot use the "in" operator on this value'):e.has(t),"__privateIn$1"),Ya=t((e,t,a)=>(Va(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet$1"),Xa=t((e,t,a)=>t.has(e)?za("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd$1"),qa=t((e,t,a,r)=>(Va(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet$1"),Ja=t((e,t,a)=>(Va(e,t,"access private method"),a),"__privateMethod$1");ka=[k("gtn-sandbox")];class Za extends($a=w,wa=[R()],ya=[R()],xa=[R()],_a=[R()],fa=[R()],$a){static{t(this,"GtnSandbox")}constructor(){super(),Ka(this,"turtleRepo"),Ka(this,"langService"),Ka(this,"langController",new F(this)),Xa(this,Ca,Ua(Sa,8,this,50)),Ua(Sa,11,this),Xa(this,Ra,Ua(Sa,12,this,u(90))),Ua(Sa,15,this),Xa(this,Ea,Ua(Sa,16,this,[])),Ua(Sa,19,this),Xa(this,La,Ua(Sa,20,this,0)),Ua(Sa,23,this),Xa(this,Ta,Ua(Sa,24,this,!1)),Ua(Sa,27,this),Ka(this,"doForward",()=>{const e=this.getCmdName("GT_FORWARD");this.execute(e,[this.distanceStep],()=>{this.turtleRepo.getAll().forEach(e=>e.forward(this.distanceStep))})}),Ka(this,"doBackward",()=>{const e=this.getCmdName("GT_BACKWARD");this.execute(e,[this.distanceStep],()=>{this.turtleRepo.getAll().forEach(e=>e.backward(this.distanceStep))})}),Ka(this,"doLeft",()=>{const e=this.getCmdName("GT_LEFT");this.execute(e,[this.angleStep],()=>{this.turtleRepo.getAll().forEach(e=>e.left(this.angleStep))})}),Ka(this,"doRight",()=>{const e=this.getCmdName("GT_RIGHT");this.execute(e,[this.angleStep],()=>{this.turtleRepo.getAll().forEach(e=>e.right(this.angleStep))})}),Ka(this,"doForwardDist",e=>this.runMove("GT_FORWARD",e,(e,t)=>e.forward(t))),Ka(this,"doBackwardDist",e=>this.runMove("GT_BACKWARD",e,(e,t)=>e.backward(t))),Ka(this,"doLeftAngle",e=>this.runRotate("GT_LEFT",u(e),(e,t)=>e.left(t))),Ka(this,"doRightAngle",e=>this.runRotate("GT_RIGHT",u(e),(e,t)=>e.right(t))),Ka(this,"doPenUp",()=>{const e=this.getCmdName("GT_PEN_UP");this.execute(e,[],()=>{this.turtleRepo.getAll().forEach(e=>e.penUp())})}),Ka(this,"doPenDown",()=>{const e=this.getCmdName("GT_PEN_DOWN");this.execute(e,[],()=>{this.turtleRepo.getAll().forEach(e=>e.penDown())})}),Ka(this,"doShowTurtle",()=>this.runSimple("GT_SHOW_TURTLE",e=>e.setVisible(!0))),Ka(this,"doHideTurtle",()=>this.runSimple("GT_HIDE_TURTLE",e=>e.setVisible(!1))),Ka(this,"doClear",()=>{const e=this.getCmdName("GT_VG");this.execute(e,[],()=>{this.turtleRepo.clearAllLines()})}),Ka(this,"doReset",()=>{const e=this.getCmdName("GT_RZ");this.execute(e,[],()=>{this.turtleRepo.reset(),this.compassHeading=0,this.consoleLogs=[]})}),Ka(this,"doColor",e=>{const t=this.getCmdName("GT_PEN_COLOR");this.execute(t,[e],()=>{this.turtleRepo.getAll().forEach(t=>t.setPenColor(e))})}),Ka(this,"handleKeyDown",e=>{if(this.isKeyboardActive)switch(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key)&&e.preventDefault(),e.key){case"ArrowUp":case"w":return this.doForward();case"ArrowDown":case"s":return this.doBackward();case"ArrowLeft":case"a":return this.doLeft();case"ArrowRight":case"d":return this.doRight();case"Backspace":case"Delete":return this.doClear();case"Escape":return this.doReset()}}),Ka(this,"toggleKeyboard",()=>{this.isKeyboardActive=!this.isKeyboardActive});const e=a.getInstance();this.turtleRepo=e.resolve(r.TurtleRepository),this.langService=e.resolve(r.LanguageService)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.handleKeyDown)}t(e){return this.langService.translate(e)}getCmdName(e){return this.langService.getLocalizedKeyword(e,this.selectShortest).toUpperCase()}selectShortest(e){if(!(e.length<1))return e.reduce((e,t)=>t.length<e.length?t:e,e[0])}execute(e,t,a){a();const r=`${e} ${t.join(" ")}`.trim(),o=(new Date).toLocaleTimeString().split(" ")[0];this.consoleLogs=[`[${o}] ${r}`,...this.consoleLogs],this.updateCompass(),this.requestUpdate()}updateCompass(){const e=this.turtleRepo.getAll()[0];if(e){const t=e.state.rotation,a=2*(t.w*t.z+t.x*t.y),r=1-2*(t.y*t.y+t.z*t.z),o=g(Math.atan2(a,r));this.compassHeading=-b(o)}}runMove(e,t,a){const r=this.getCmdName(e);this.execute(r,[t],()=>{this.turtleRepo.getAll().forEach(e=>a(e,t))})}runRotate(e,t,a){const r=this.getCmdName(e);this.execute(r,[t],()=>{this.turtleRepo.getAll().forEach(e=>a(e,t))})}runSimple(e,t){const a=this.getCmdName(e);this.execute(a,[],()=>this.turtleRepo.getAll().forEach(e=>t(e)))}render(){const e=t(e=>this.t(e),"t"),a=e("commands.GT_FORWARD"),r=e("commands.GT_BACKWARD"),o=e("commands.GT_LEFT"),s=e("commands.GT_RIGHT"),i=t(e=>this.doColor(v(e)),"color");return y`
      <div class="sandbox-layout">
        <aside class="column left-column">
          <div class="panel compass-panel">
            <div class="compass">
              <div class="compass-dial">
                <span class="label-n">${e("compass.n")}</span>
                <span class="label-e">${e("compass.e")}</span>
                <span class="label-s">${e("compass.s")}</span>
                <span class="label-w">${e("compass.w")}</span>
              </div>
              <div
                class="compass-needle"
                style="transform: rotate(${Math.round(this.compassHeading)}deg)"
              ></div>
            </div>
            <div class="compass-value">${Math.round(this.compassHeading)}°</div>
          </div>

          <div class="panel controls">
            <div class="d-pad">
              <div></div>
              <button
                id="fdbtn"
                @click=${this.doForward}
                title="${e("sandbox.tooltip.forward")} (↑)"
              >
                ▲
              </button>
              <div></div>

              <button id="leftbtn" @click=${this.doLeft} title="${e("sandbox.tooltip.left")} (←)">
                ◀
              </button>
              <button
                id="bkbtn"
                @click=${this.doBackward}
                title="${e("sandbox.tooltip.backward")} (↓)"
              >
                ▼
              </button>
              <button
                id="rightbtn"
                @click=${this.doRight}
                title="${e("sandbox.tooltip.right")} (→)"
              >
                ▶
              </button>
            </div>

            <div class="tools-grid">
              <button class="danger" @click=${this.doClear}>${e("sandbox.btn.clear_graph")}</button>
              <button class="danger" @click=${this.doReset}>${e("sandbox.btn.reset")}</button>
            </div>
          </div>

          <div class="panel settings">
            <h3>${e("sandbox.settings_title")}</h3>
            <div class="input-group">
              <label>${e("sandbox.step")}</label>
              <input
                type="number"
                .value=${this.distanceStep}
                @change=${e=>this.distanceStep=Number(e.target.value)}
              />
            </div>
            <div class="input-group">
              <label>${e("sandbox.angle")}</label>
              <input
                type="number"
                .value=${this.angleStep}
                @change=${e=>this.angleStep=u(Number(e.target.value))}
              />
            </div>
            <button
              class="toggle-btn ${x({active:this.isKeyboardActive})}"
              @click=${this.toggleKeyboard}
            >
              ${this.isKeyboardActive?`⌨️ ${e("sandbox.keyboard_on")}`:`⌨️ ${e("sandbox.keyboard_off")}`}
            </button>
          </div>
        </aside>

        <main class="column center-column">
          <div class="canvas-wrapper">
            <slot></slot>
          </div>

          <div class="panel console">
            <h3>${e("sandbox.history_title")}</h3>
            <div class="console-output">
              ${0===this.consoleLogs.length?y`<span class="empty">${e("sandbox.history_empty")}</span>`:this.consoleLogs.map(e=>y`<div class="log-line">${e}</div>`)}
            </div>
          </div>
        </main>

        <aside class="column right-column">
          <div class="panel direct-cmds">
            <h3>COMMANDES</h3>

            <div class="cmd-row">
              <button @click=${()=>this.doForwardDist(10)}>${a} 10</button>
              <button @click=${()=>this.doForwardDist(25)}>${a} 25</button>
              <button @click=${()=>this.doForwardDist(100)}>${a} 100</button>
            </div>

            <div class="cmd-row">
              <button @click=${()=>this.doBackwardDist(10)}>${r} 10</button>
              <button @click=${()=>this.doBackwardDist(25)}>${r} 25</button>
              <button @click=${()=>this.doBackwardDist(100)}>${r} 100</button>
            </div>

            <div class="separator"></div>

            <div class="cmd-row">
              <button @click=${()=>this.doLeftAngle(30)}>${o} 30&nbsp;°</button>
              <button @click=${()=>this.doLeftAngle(45)}>${o} 45&nbsp;°</button>
              <button @click=${()=>this.doLeftAngle(90)}>${o} 90&nbsp;°</button>
            </div>

            <div class="cmd-row">
              <button @click=${()=>this.doRightAngle(30)}>${s} 30&nbsp;°</button>
              <button @click=${()=>this.doRightAngle(45)}>${s} 45&nbsp;°</button>
              <button @click=${()=>this.doRightAngle(90)}>${s} 90&nbsp;°</button>
            </div>

            <div class="separator"></div>

            <div class="tools-grid">
              <button @click=${this.doPenUp}>${e("sandbox.btn.penup")}</button>
              <button @click=${this.doPenDown}>${e("sandbox.btn.pendown")}</button>
              <button @click=${this.doHideTurtle}>${e("sandbox.btn.hideturtle")}</button>
              <button @click=${this.doShowTurtle}>${e("sandbox.btn.showturtle")}</button>
            </div>
          </div>

          <div class="panel colors">
            <h3>CRAYON</h3>
            <div class="color-grid">
              <button
                class="color-btn"
                style="background:black; color:white"
                @click=${()=>i(m.BLACK)}
                title="${e("sandbox.btn.colors.black")}"
              ></button>
              <button
                class="color-btn"
                style="background:red"
                @click=${()=>i(m.RED)}
                title="${e("sandbox.btn.colors."+m.RED)}"
              ></button>
              <button
                class="color-btn"
                style="background:blue"
                @click=${()=>i(m.BLUE)}
                title="${e("sandbox.btn.colors."+m.BLUE)}"
              ></button>
              <button
                class="color-btn"
                style="background:green"
                @click=${()=>i(m.GREEN)}
                title="${e("sandbox.btn.colors."+m.GREEN)}"
              ></button>
              <button
                class="color-btn"
                style="background:gold"
                @click=${()=>i(m.YELLOW)}
                title="${e("sandbox.btn.colors."+m.YELLOW)}"
              ></button>
              <button
                class="color-btn"
                style="background:orange"
                @click=${()=>i(m.ORANGE)}
                title="${e("sandbox.btn.colors."+m.ORANGE)}"
              ></button>
            </div>
          </div>
        </aside>
      </div>
    `}}Sa=Ga($a),Ca=new WeakMap,Ra=new WeakMap,Ea=new WeakMap,La=new WeakMap,Ta=new WeakMap,Ba(Sa,4,"distanceStep",wa,Za,Ca),Ba(Sa,4,"angleStep",ya,Za,Ra),Ba(Sa,4,"consoleLogs",xa,Za,Ea),Ba(Sa,4,"compassHeading",_a,Za,La),Ba(Sa,4,"isKeyboardActive",fa,Za,Ta),Za=Ba(Sa,0,"GtnSandbox",ka,Za),Ka(Za,"styles",_`
    ${$(':host{display:block;font-family:var(--font-ui);background:#f8f9fa;height:100%;width:100%;overflow:hidden;box-sizing:border-box}button,input,select,textarea{font-family:inherit;margin:0}.sandbox-layout{display:grid;grid-template-columns:250px 1fr 250px;grid-template-rows:100%;height:100%;gap:1rem;padding:1rem}.column{display:flex;flex-direction:column;gap:1rem;overflow-y:auto}.canvas-wrapper{flex:1;background:#fff;border-radius:8px;border:1px solid #e9ecef;overflow:hidden;position:relative;min-height:300px}::slotted(*){width:100%;height:100%;display:block}.panel{background:#fff;padding:.75rem;border-radius:8px;box-shadow:0 1px 3px #0000001a;border:1px solid #e9ecef;color:#212529}h3{margin:0 0 .5rem;font-size:.7rem;font-weight:700;text-transform:uppercase;color:#adb5bd;border-bottom:1px solid #f1f3f5;padding-bottom:4px}.compass-panel{display:flex;flex-direction:column;align-items:center}.compass{position:relative;width:80px;height:80px;border:2px solid #343a40;border-radius:50%;background:#fff;margin-bottom:.25rem}.compass-needle{position:absolute;top:0;left:0;width:100%;height:100%;transition:transform .3s ease}.compass-needle:after{content:"";position:absolute;top:10px;left:50%;transform:translate(-50%);border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:30px solid #e03131}.compass-dial span{position:absolute;font-size:9px;font-weight:700;color:#868e96}.label-n{top:2px;left:50%;transform:translate(-50%);color:#e03131!important}.label-s{bottom:2px;left:50%;transform:translate(-50%)}.label-e{right:4px;top:50%;transform:translateY(-50%)}.label-w{left:4px;top:50%;transform:translateY(-50%)}.compass-value{font-size:.8rem;font-weight:700;color:#495057}.d-pad{display:grid;grid-template-columns:repeat(3,1fr);gap:4px;margin-bottom:.75rem}.d-pad button{padding:10px 0;font-size:1.2rem;cursor:pointer;background:#e9ecef;border:1px solid #dee2e6;border-radius:4px;color:#495057}.d-pad button:hover{background:#dee2e6}.d-pad button:active{background:#ced4da;transform:translateY(1px)}.cmd-row{display:flex;align-items:center;gap:4px;margin-bottom:6px}.cmd-label{width:30px;font-size:.75rem;font-weight:700;color:#495057;text-align:right;margin-right:4px}.cmd-row button{flex:1;padding:6px 2px;font-size:.75rem;background:#fff;border:1px solid #ced4da;border-radius:4px;cursor:pointer}.cmd-row button:hover{background:#f1f3f5}.separator{height:1px;background:#e9ecef;margin:8px 0}.tools-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px}.tools-grid button{padding:6px;font-size:.75rem;background:#fff;border:1px solid #ced4da;border-radius:4px;cursor:pointer}.input-group{display:flex;justify-content:space-between;align-items:center;margin-bottom:.5rem;font-size:.85rem}input[type=number]{width:50px;padding:4px;border:1px solid #ced4da;border-radius:4px;text-align:right}.toggle-btn{width:100%;padding:6px;border:1px solid #ced4da;background:#f8f9fa;border-radius:4px;cursor:pointer;font-size:.85rem}.toggle-btn.active{background:#e6fcf5;color:#0ca678;border-color:#63e6be}button.danger{color:#e03131;border-color:#ffc9c9;background:#fff5f5}button.danger:hover{background:#ffe3e3}.color-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.color-btn{height:30px;border:1px solid rgba(0,0,0,.1);border-radius:4px;cursor:pointer;transition:transform .1s}.color-btn:hover{transform:scale(1.05)}.color-btn:active{transform:scale(.95)}.console-output{background:#212529;color:#51cf66;font-family:var(--font-code);padding:8px;height:120px;overflow-y:auto;border-radius:4px;font-size:.8rem;display:flex;flex-direction:column}.log-line{border-bottom:1px solid #343a40;padding:2px 0;white-space:nowrap}.empty{color:#868e96;font-style:italic}.console-output::-webkit-scrollbar{width:6px}.console-output::-webkit-scrollbar-track{background:#212529}.console-output::-webkit-scrollbar-thumb{background:#495057;border-radius:3px}')}
  `),Ua(Sa,1,Za);var Qa,er,tr,ar,rr,or,sr,ir,nr,lr=Object.create,cr=Object.defineProperty,dr=Object.getOwnPropertyDescriptor,hr=t((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol"),pr=t(e=>{throw TypeError(e)},"__typeError"),ur=t((e,t,a)=>t in e?cr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp"),gr=t((e,t)=>cr(e,"name",{value:t,configurable:!0}),"__name"),br=t(e=>[,,,lr(e?.[hr("metadata")]??null)],"__decoratorStart"),mr=["class","method","getter","setter","accessor","field","value","get","set"],vr=t(e=>void 0!==e&&"function"!=typeof e?pr("Function expected"):e,"__expectFn"),fr=t((e,a,r,o,s)=>({kind:mr[e],name:a,metadata:o,addInitializer:t(e=>r._?pr("Already initialized"):s.push(vr(e||null)),"addInitializer")}),"__decoratorContext"),_r=t((e,t)=>ur(t,hr("metadata"),e[3]),"__decoratorMetadata"),xr=t((e,t,a,r)=>{for(var o=0,s=e[t>>1],i=s&&s.length;o<i;o++)1&t?s[o].call(a):r=s[o].call(a,r);return r},"__runInitializers"),yr=t((e,t,a,r,o,s)=>{var i,n,l,c,d,h=7&t,p=!!(8&t),u=!!(16&t),g=h>3?e.length+1:h?p?1:2:0,b=mr[h+5],m=h>3&&(e[g-1]=[]),v=e[g]||(e[g]=[]),f=h&&(!u&&!p&&(o=o.prototype),h<5&&(h>3||!u)&&dr(h<4?o:{get[a](){return Sr(this,s)},set[a](e){return Rr(this,s,e)}},a));h?u&&h<4&&gr(s,(h>2?"set ":h>1?"get ":"")+a):gr(o,a);for(var _=r.length-1;_>=0;_--)c=fr(h,a,l={},e[3],v),h&&(c.static=p,c.private=u,d=c.access={has:u?e=>kr(o,e):e=>a in e},3^h&&(d.get=u?e=>(1^h?Sr:Er)(e,o,4^h?s:f.get):e=>e[a]),h>2&&(d.set=u?(e,t)=>Rr(e,o,t,4^h?s:f.set):(e,t)=>e[a]=t)),n=(0,r[_])(h?h<4?u?s:f[b]:h>4?void 0:{get:f.get,set:f.set}:o,c),l._=1,4^h||void 0===n?vr(n)&&(h>4?m.unshift(n):h?u?s=n:f[b]=n:o=n):"object"!=typeof n||null===n?pr("Object expected"):(vr(i=n.get)&&(f.get=i),vr(i=n.set)&&(f.set=i),vr(i=n.init)&&m.unshift(i));return h||_r(e,o),f&&cr(o,a,f),u?4^h?s:f:o},"__decorateElement"),wr=t((e,t,a)=>ur(e,"symbol"!=typeof t?t+"":t,a),"__publicField"),$r=t((e,t,a)=>t.has(e)||pr("Cannot "+a),"__accessCheck"),kr=t((e,t)=>Object(t)!==t?pr('Cannot use the "in" operator on this value'):e.has(t),"__privateIn"),Sr=t((e,t,a)=>($r(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet"),Cr=t((e,t,a)=>t.has(e)?pr("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd"),Rr=t((e,t,a,r)=>($r(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet"),Er=t((e,t,a)=>($r(e,t,"access private method"),a),"__privateMethod");const Lr={fr:"\ncrayon rouge;\npas := 36;\nrot := 360 / pas;\nrep 36 [\n  av rot;\n  td rot;\n]\n",en:"\ncolor red;\nstep := 36;\nrot := 360 / pas;\nrepeat 36 [\n  fd rot;\n  rt rot;\n]\n"};rr=[k("gtn-app")];class Tr extends(ar=w,tr=[R()],er=[R()],Qa=[R()],ar){static{t(this,"GTNApp")}constructor(){super(),Cr(this,sr,xr(or,8,this,"")),xr(or,11,this),Cr(this,ir,xr(or,12,this,[])),xr(or,15,this),Cr(this,nr,xr(or,16,this,"SANDBOX")),xr(or,19,this),wr(this,"interpreter"),wr(this,"langService"),wr(this,"turtleRepo"),wr(this,"projectService"),wr(this,"syntaxService"),wr(this,"uiUnsubscribe");const e=a.getInstance();this.interpreter=e.resolve(r.Interpreter),this.langService=e.resolve(r.LanguageService),this.turtleRepo=e.resolve(r.TurtleRepository),this.projectService=e.resolve(r.ProjectService),this.syntaxService=e.resolve(r.SyntaxService);const t=this.langService.getDslLanguage(),o=Lr[t]||"";this.code=o}connectedCallback(){super.connectedCallback(),this.uiUnsubscribe=this.langService.subscribeUiListeners(this.handleLanguageChange.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.uiUnsubscribe&&this.uiUnsubscribe()}handleLanguageChange(e){const t=this.syntaxService.validate(this.code);this.errors=[...t]}handleCodeChange(e){this.code=e.detail.code,this.errors=this.syntaxService.validate(this.code)}handleViewChange(e){this.viewMode=e.detail.view}async handleRun(){if(this.errors=this.syntaxService.validate(this.code),!(this.errors.length>0))try{await this.interpreter.execute(this.code)}catch(e){alert("Error executing GéoTortue commands")}}handleClear(){this.turtleRepo.clear();const e=a.getInstance(),t=e.resolve(r.GeometryService),o=e.resolve(r.TurtleRepository).getNextId(),s=new f(o,t);this.turtleRepo.save(s)}async handleSaveProject(){try{await this.projectService.saveProject(this.code),alert("Project saved!")}catch(e){alert("Failed to save project")}}async handleOpenProject(){try{const e=await this.projectService.loadProject();e&&(this.code=e),alert("Project loaded!")}catch(e){}}async handleDslChange(e){const{oldLang:t,newLang:a}=e.detail;try{const e=await this.langService.translateScript(this.code,a,t);this.code=e}catch(r){}}render(){return y`
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
        ${"EDITOR"===this.viewMode?y`
              <div class="editor-pane">
                <gtn-editor .code=${this.code} @code-change=${this.handleCodeChange}> </gtn-editor>
                <gtn-error-toast .errors=${this.errors}></gtn-error-toast>
              </div>
              <div class="canvas">
                <gtn-canvas></gtn-canvas>
              </div>
            `:y`
              <gtn-sandbox>
                <gtn-canvas></gtn-canvas>
              </gtn-sandbox>
            `}
      </main>

      ${""}
    `}}or=br(ar),sr=new WeakMap,ir=new WeakMap,nr=new WeakMap,yr(or,4,"code",tr,Tr,sr),yr(or,4,"errors",er,Tr,ir),yr(or,4,"viewMode",Qa,Tr,nr),Tr=yr(or,0,"GTNApp",rr,Tr),wr(Tr,"styles",_`
    ${$(":host{display:flex;flex-direction:column;height:100vh;width:100vw;overflow:hidden;background-color:#ecf0f1}.header{flex:0 0 auto;z-index:10}main{flex:1;display:flex;flex-direction:row;overflow:hidden}.editor-pane{width:400px;border-right:1px solid #bdc3c7;display:flex;flex-direction:column}.canvas{flex:1;position:relative;background:#e0e5ec;overflow:hidden}@media(max-width:800px){:host{display:block;height:100vh;width:100vw;overflow:hidden;background-color:#fff}.main{height:calc(100% - 60px);position:relative;flex-direction:column}.editor-pane{flex:1;border-right:none;border-bottom:1px solid #ccc}.canvas{flex:1}gtn-sandbox{height:100%;display:block}}")}
  `),xr(or,1,Tr);export{Tr as GTNApp};
//# sourceMappingURL=gtn-app-CWG1XfGs.js.map
