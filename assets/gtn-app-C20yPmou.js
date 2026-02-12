var e=Object.defineProperty,t=(t,a)=>e(t,"name",{value:a,configurable:!0});import{G as a,a as r,b as i}from"./index-CpQFLV7H.js";import{r as n,g as s,h as o,j as c,k as d,m as l}from"./vendor-ezl6hfun.js";import"./vendor-antlr-BhUY6QBA.js";import"./vendor-math-DMLlu0FX.js";import"./vendor-three-BBCA40AT.js";var h,v,p,g,u,b,m,f,x,y=Object.create,_=Object.defineProperty,w=Object.getOwnPropertyDescriptor,S=t((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol"),j=t(e=>{throw TypeError(e)},"__typeError"),C=t((e,t,a)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp"),k=t((e,t)=>_(e,"name",{value:t,configurable:!0}),"__name"),P=t(e=>[,,,y(e?.[S("metadata")]??null)],"__decoratorStart"),$=["class","method","getter","setter","accessor","field","value","get","set"],O=t(e=>void 0!==e&&"function"!=typeof e?j("Function expected"):e,"__expectFn"),I=t((e,a,r,i,n)=>({kind:$[e],name:a,metadata:i,addInitializer:t(e=>r._?j("Already initialized"):n.push(O(e||null)),"addInitializer")}),"__decoratorContext"),M=t((e,t)=>C(t,S("metadata"),e[3]),"__decoratorMetadata"),R=t((e,t,a,r)=>{for(var i=0,n=e[t>>1],s=n&&n.length;i<s;i++)1&t?n[i].call(a):r=n[i].call(a,r);return r},"__runInitializers"),L=t((e,t,a,r,i,n)=>{var s,o,c,d,l,h=7&t,v=!!(8&t),p=!!(16&t),g=h>3?e.length+1:h?v?1:2:0,u=$[h+5],b=h>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),f=h&&(!p&&!v&&(i=i.prototype),h<5&&(h>3||!p)&&w(h<4?i:{get[a](){return G(this,n)},set[a](e){return A(this,n,e)}},a));h?p&&h<4&&k(n,(h>2?"set ":h>1?"get ":"")+a):k(i,a);for(var x=r.length-1;x>=0;x--)d=I(h,a,c={},e[3],m),h&&(d.static=v,d.private=p,l=d.access={has:p?e=>E(i,e):e=>a in e},3^h&&(l.get=p?e=>(1^h?G:N)(e,i,4^h?n:f.get):e=>e[a]),h>2&&(l.set=p?(e,t)=>A(e,i,t,4^h?n:f.set):(e,t)=>e[a]=t)),o=(0,r[x])(h?h<4?p?n:f[u]:h>4?void 0:{get:f.get,set:f.set}:i,d),c._=1,4^h||void 0===o?O(o)&&(h>4?b.unshift(o):h?p?n=o:f[u]=o:i=o):"object"!=typeof o||null===o?j("Object expected"):(O(s=o.get)&&(f.get=s),O(s=o.set)&&(f.set=s),O(s=o.init)&&b.unshift(s));return h||M(e,i),f&&_(i,a,f),p?4^h?n:f:i},"__decorateElement"),T=t((e,t,a)=>C(e,"symbol"!=typeof t?t+"":t,a),"__publicField"),D=t((e,t,a)=>t.has(e)||j("Cannot "+a),"__accessCheck"),E=t((e,t)=>Object(t)!==t?j('Cannot use the "in" operator on this value'):e.has(t),"__privateIn"),G=t((e,t,a)=>(D(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet"),z=t((e,t,a)=>t.has(e)?j("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd"),A=t((e,t,a,r)=>(D(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet"),N=t((e,t,a)=>(D(e,t,"access private method"),a),"__privateMethod");const U={fr:"\ncrayon rouge;\npas := 36;\nrot := 360 / pas;\nrep 36 [\n  av rot;\n  td rot;\n]\n",en:"\ncolor red;\nstep := 36;\nrot := 360 / pas;\nrepeat 36 [\n  fd rot;\n  rt rot;\n]\n"};u=[l("gtn-app")];class F extends(g=o,p=[n()],v=[n()],h=[n()],g){static{t(this,"GTNApp")}constructor(){super(),z(this,m,R(b,8,this,"")),R(b,11,this),z(this,f,R(b,12,this,[])),R(b,15,this),z(this,x,R(b,16,this,"SANDBOX")),R(b,19,this),T(this,"interpreter"),T(this,"langService"),T(this,"turtleRepo"),T(this,"projectService"),T(this,"syntaxService"),T(this,"uiUnsubscribe");const e=a.getInstance();this.interpreter=e.resolve(r.Interpreter),this.langService=e.resolve(r.LanguageService),this.turtleRepo=e.resolve(r.TurtleRepository),this.projectService=e.resolve(r.ProjectService),this.syntaxService=e.resolve(r.SyntaxService);const t=this.langService.getDslLanguage(),i=U[t]||"";this.code=i}connectedCallback(){super.connectedCallback(),this.uiUnsubscribe=this.langService.subscribeUiListeners(this.handleLanguageChange.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.uiUnsubscribe&&this.uiUnsubscribe()}handleLanguageChange(e){const t=this.syntaxService.validate(this.code);this.errors=[...t]}handleCodeChange(e){this.code=e.detail.code,this.errors=this.syntaxService.validate(this.code)}handleViewChange(e){this.viewMode=e.detail.view}async handleRun(){if(this.errors=this.syntaxService.validate(this.code),!(this.errors.length>0))try{await this.interpreter.execute(this.code)}catch(e){alert("Error executing GéoTortue commands")}}handleClear(){this.turtleRepo.clear();const e=a.getInstance(),t=e.resolve(r.GeometryService),n=e.resolve(r.TurtleRepository).getNextId(),s=new i(n,t);this.turtleRepo.save(s)}async handleSaveProject(){try{await this.projectService.saveProject(this.code),alert("Project saved!")}catch(e){alert("Failed to save project")}}async handleOpenProject(){try{const e=await this.projectService.loadProject();e&&(this.code=e),alert("Project loaded!")}catch(e){}}async handleDslChange(e){const{oldLang:t,newLang:a}=e.detail;try{const e=await this.langService.translateScript(this.code,a,t);this.code=e}catch(r){}}render(){return s`
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
        ${"EDITOR"===this.viewMode?s`
              <div class="editor-pane">
                <gtn-editor .code=${this.code} @code-change=${this.handleCodeChange}> </gtn-editor>
                <gtn-error-toast .errors=${this.errors}></gtn-error-toast>
              </div>
              <div class="canvas">
                <gtn-canvas></gtn-canvas>
              </div>
            `:s`
              <gtn-sandbox>
                <gtn-canvas></gtn-canvas>
              </gtn-sandbox>
            `}
      </main>

      ${""}
    `}}b=P(g),m=new WeakMap,f=new WeakMap,x=new WeakMap,L(b,4,"code",p,F,m),L(b,4,"errors",v,F,f),L(b,4,"viewMode",h,F,x),F=L(b,0,"GTNApp",u,F),T(F,"styles",d`
    ${c(":host{display:flex;flex-direction:column;height:100vh;width:100vw;overflow:hidden;background-color:#ecf0f1}.header{flex:0 0 auto;z-index:10}main{flex:1;display:flex;flex-direction:row;overflow:hidden}.editor-pane{width:400px;border-right:1px solid #bdc3c7;display:flex;flex-direction:column}.canvas{flex:1;position:relative;background:#e0e5ec;overflow:hidden}@media(max-width:800px){.main{flex-direction:column}.editor-pane{flex:1;border-right:none;border-bottom:1px solid #ccc}.canvas{flex:1}}")}
    /* Ensure the sandbox fills the sidebar pane area */
    gtn-sandbox {
      height: 100%;
      display: block;
    }
  `),R(b,1,F);export{F as GTNApp};
//# sourceMappingURL=gtn-app-C20yPmou.js.map
