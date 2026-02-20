var e=Object.defineProperty,t=(t,a)=>e(t,"name",{value:a,configurable:!0});import{G as a,a as r,b as n}from"./index-usUr4259.js";import{w as s,x as i,y as o,z as c,A as l,G as h}from"./vendor-wb2Js_8p.js";import"./vendor-antlr-BhUY6QBA.js";import"./vendor-math-tLUilQGg.js";import"./vendor-three-BBCA40AT.js";var d,v,p,g,u,b,m,y,_,f=Object.create,w=Object.defineProperty,S=Object.getOwnPropertyDescriptor,j=t((e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),"__knownSymbol"),x=t(e=>{throw TypeError(e)},"__typeError"),C=t((e,t,a)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,"__defNormalProp"),k=t((e,t)=>w(e,"name",{value:t,configurable:!0}),"__name"),P=t(e=>[,,,f(e?.[j("metadata")]??null)],"__decoratorStart"),$=["class","method","getter","setter","accessor","field","value","get","set"],O=t(e=>void 0!==e&&"function"!=typeof e?x("Function expected"):e,"__expectFn"),I=t((e,a,r,n,s)=>({kind:$[e],name:a,metadata:n,addInitializer:t(e=>r._?x("Already initialized"):s.push(O(e||null)),"addInitializer")}),"__decoratorContext"),M=t((e,t)=>C(t,j("metadata"),e[3]),"__decoratorMetadata"),R=t((e,t,a,r)=>{for(var n=0,s=e[t>>1],i=s&&s.length;n<i;n++)1&t?s[n].call(a):r=s[n].call(a,r);return r},"__runInitializers"),G=t((e,t,a,r,n,s)=>{var i,o,c,l,h,d=7&t,v=!!(8&t),p=!!(16&t),g=d>3?e.length+1:d?v?1:2:0,u=$[d+5],b=d>3&&(e[g-1]=[]),m=e[g]||(e[g]=[]),y=d&&(!p&&!v&&(n=n.prototype),d<5&&(d>3||!p)&&S(d<4?n:{get[a](){return A(this,s)},set[a](e){return E(this,s,e)}},a));d?p&&d<4&&k(s,(d>2?"set ":d>1?"get ":"")+a):k(n,a);for(var _=r.length-1;_>=0;_--)l=I(d,a,c={},e[3],m),d&&(l.static=v,l.private=p,h=l.access={has:p?e=>z(n,e):e=>a in e},3^d&&(h.get=p?e=>(1^d?A:N)(e,n,4^d?s:y.get):e=>e[a]),d>2&&(h.set=p?(e,t)=>E(e,n,t,4^d?s:y.set):(e,t)=>e[a]=t)),o=(0,r[_])(d?d<4?p?s:y[u]:d>4?void 0:{get:y.get,set:y.set}:n,l),c._=1,4^d||void 0===o?O(o)&&(d>4?b.unshift(o):d?p?s=o:y[u]=o:n=o):"object"!=typeof o||null===o?x("Object expected"):(O(i=o.get)&&(y.get=i),O(i=o.set)&&(y.set=i),O(i=o.init)&&b.unshift(i));return d||M(e,n),y&&w(n,a,y),p?4^d?s:y:n},"__decorateElement"),L=t((e,t,a)=>C(e,"symbol"!=typeof t?t+"":t,a),"__publicField"),T=t((e,t,a)=>t.has(e)||x("Cannot "+a),"__accessCheck"),z=t((e,t)=>Object(t)!==t?x('Cannot use the "in" operator on this value'):e.has(t),"__privateIn"),A=t((e,t,a)=>(T(e,t,"read from private field"),a?a.call(e):t.get(e)),"__privateGet"),D=t((e,t,a)=>t.has(e)?x("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),"__privateAdd"),E=t((e,t,a,r)=>(T(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),"__privateSet"),N=t((e,t,a)=>(T(e,t,"access private method"),a),"__privateMethod");const U={fr:"\ncrayon rouge;\npas := 36;\nrot := 360 / pas;\nrep 36 [\n  av rot;\n  td rot;\n]\n",en:"\ncolor red;\nstep := 36;\nrot := 360 / pas;\nrepeat 36 [\n  fd rot;\n  rt rot;\n]\n"};u=[h("gtn-app")];class F extends(g=o,p=[s()],v=[s()],d=[s()],g){static{t(this,"GTNApp")}constructor(){super(),D(this,m,R(b,8,this,"")),R(b,11,this),D(this,y,R(b,12,this,[])),R(b,15,this),D(this,_,R(b,16,this,"SANDBOX")),R(b,19,this),L(this,"interpreter"),L(this,"langService"),L(this,"turtleRepo"),L(this,"projectService"),L(this,"syntaxService"),L(this,"uiUnsubscribe");const e=a.getInstance();this.interpreter=e.resolve(r.Interpreter),this.langService=e.resolve(r.LanguageService),this.turtleRepo=e.resolve(r.TurtleRepository),this.projectService=e.resolve(r.ProjectService),this.syntaxService=e.resolve(r.SyntaxService);const t=this.langService.getDslLanguage(),n=U[t]||"";this.code=n}connectedCallback(){super.connectedCallback(),this.uiUnsubscribe=this.langService.subscribeUiListeners(this.handleLanguageChange.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.uiUnsubscribe&&this.uiUnsubscribe()}handleLanguageChange(e){const t=this.syntaxService.validate(this.code);this.errors=[...t]}handleCodeChange(e){this.code=e.detail.code,this.errors=this.syntaxService.validate(this.code)}handleViewChange(e){this.viewMode=e.detail.view}async handleRun(){if(this.errors=this.syntaxService.validate(this.code),!(this.errors.length>0))try{await this.interpreter.execute(this.code)}catch(e){alert("Error executing GéoTortue commands")}}handleClear(){this.turtleRepo.clear();const e=a.getInstance(),t=e.resolve(r.GeometryService),s=e.resolve(r.TurtleRepository).getNextId(),i=new n(s,t);this.turtleRepo.save(i)}async handleSaveProject(){try{await this.projectService.saveProject(this.code),alert("Project saved!")}catch(e){alert("Failed to save project")}}async handleOpenProject(){try{const e=await this.projectService.loadProject();e&&(this.code=e),alert("Project loaded!")}catch(e){}}async handleDslChange(e){const{oldLang:t,newLang:a}=e.detail;try{const e=await this.langService.translateScript(this.code,a,t);this.code=e}catch(r){}}render(){return i`
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
        ${"EDITOR"===this.viewMode?i`
              <gtn-workbench>
                <gtn-editor
                  slot="editor"
                  .code=${this.code}
                  @code-change=${this.handleCodeChange}
                ></gtn-editor>

                <gtn-error-toast slot="toast" .errors=${this.errors}></gtn-error-toast>

                <gtn-canvas slot="canvas"></gtn-canvas>
              </gtn-workbench>
            `:i`
              <gtn-sandbox>
                <gtn-canvas></gtn-canvas>
              </gtn-sandbox>
            `}
      </main>

      ${""}
    `}}b=P(g),m=new WeakMap,y=new WeakMap,_=new WeakMap,G(b,4,"code",p,F,m),G(b,4,"errors",v,F,y),G(b,4,"viewMode",d,F,_),F=G(b,0,"GTNApp",u,F),L(F,"styles",l`
    ${c(":host{display:flex;flex-direction:column;height:100vh;width:100vw;overflow:hidden;background-color:#ecf0f1}.header{flex:0 0 auto;z-index:10}main{flex:1;display:block;overflow:hidden;position:relative}@media(max-width:800px){:host{display:flex}}gtn-workbench,gtn-sandbox{display:block;height:100%;width:100%}")}
  `),R(b,1,F);export{F as GTNApp};
//# sourceMappingURL=gtn-app-QrBNtu6o.js.map
