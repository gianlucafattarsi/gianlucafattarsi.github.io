import{c as q,m as Q,n as K}from"./chunk-43L6YCKE.js";import"./chunk-2DMGUU3E.js";import{d as R,e as J}from"./chunk-B5UG2X3D.js";import{a as W,b as U}from"./chunk-JD3NK2UN.js";import{U as O,ea as c,ja as z,ma as S,o as I}from"./chunk-XGXTPMMU.js";import{Db as r,Gb as y,Ha as w,Hb as _,K as m,L as g,Ma as $,Mb as H,Q as f,Ra as b,Sa as v,Ta as N,Ua as x,Vb as L,W as E,Wa as V,X as M,Z as u,ab as C,db as F,eb as d,fb as k,lb as i,mb as t,nb as a,rb as P,ub as h,wb as D,xb as T}from"./chunk-JADE7FVP.js";import"./chunk-7CGTOI24.js";var re=["*"],ae=({dt:e})=>`
.p-inputgroup,
.p-inputgroup .p-floatlabel,
.p-inputgroup .p-iftalabel {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-inputgroup .p-inputwrapper {
    flex: 1 1 auto;
    width: 1%;
}

.p-inputgroupaddon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${e("inputgroup.addon.padding")};
    background: ${e("inputgroup.addon.background")};
    color: ${e("inputgroup.addon.color")};
    border-block-start: 1px solid ${e("inputgroup.addon.border.color")};
    border-block-end: 1px solid ${e("inputgroup.addon.border.color")};
    min-width: ${e("inputgroup.addon.min.width")};
}

.p-inputgroupaddon:first-child,
.p-inputgroupaddon + .p-inputgroupaddon {
    border-inline-start: 1px solid ${e("inputgroup.addon.border.color")};
}

.p-inputgroupaddon:last-child {
    border-inline-end: 1px solid ${e("inputgroup.addon.border.color")};
}

.p-inputgroupaddon:has(.p-button) {
    padding: 0;
    overflow: hidden;
}

.p-inputgroupaddon .p-button {
    border-radius: 0;
}

.p-inputgroup > .p-component,
.p-inputgroup > .p-inputwrapper > .p-component,
.p-inputgroup:first-child > p-button > .p-button,
.p-inputgroup > .p-floatlabel > .p-component,
.p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel > .p-component,
.p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
    border-radius: 0;
    margin: 0;
}

.p-inputgroupaddon:first-child,
.p-inputgroup > .p-component:first-child,
.p-inputgroup > .p-inputwrapper:first-child > .p-component,
.p-inputgroup > .p-floatlabel:first-child > .p-component,
.p-inputgroup > .p-floatlabel:first-child > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel:first-child > .p-component,
.p-inputgroup > .p-iftalabel:first-child > .p-inputwrapper > .p-component {
    border-start-start-radius: ${e("inputgroup.addon.border.radius")};
    border-end-start-radius: ${e("inputgroup.addon.border.radius")};
}

.p-inputgroupaddon:last-child,
.p-inputgroup > .p-component:last-child,
.p-inputgroup > .p-inputwrapper:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-inputwrapper > .p-component {
    border-start-end-radius: ${e("inputgroup.addon.border.radius")};
    border-end-end-radius: ${e("inputgroup.addon.border.radius")};
}

.p-inputgroup .p-component:focus,
.p-inputgroup .p-component.p-focus,
.p-inputgroup .p-inputwrapper-focus,
.p-inputgroup .p-component:focus ~ label,
.p-inputgroup .p-component.p-focus ~ label,
.p-inputgroup .p-inputwrapper-focus ~ label {
    z-index: 1;
}

.p-inputgroup > .p-button:not(.p-button-icon-only) {
    width: auto;
}

/*For PrimeNG*/

.p-inputgroup p-button:first-child, .p-inputgroup p-button:last-child {
    display: inline-flex;
}

.p-inputgroup:has(> p-button:first-child) .p-button{
    border-start-start-radius: ${e("inputgroup.addon.border.radius")};
    border-end-start-radius: ${e("inputgroup.addon.border.radius")};
}

.p-inputgroup:has(> p-button:last-child) .p-button {
    border-start-end-radius: ${e("inputgroup.addon.border.radius")};
    border-end-end-radius: ${e("inputgroup.addon.border.radius")};
}
`,le={root:({props:e})=>["p-inputgroup",{"p-inputgroup-fluid":e.fluid}]},X=(()=>{class e extends z{name="inputgroup";theme=ae;classes=le;static \u0275fac=(()=>{let o;return function(n){return(o||(o=u(e)))(n||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var j=(()=>{class e extends S{style;styleClass;_componentStyle=f(X);static \u0275fac=(()=>{let o;return function(n){return(o||(o=u(e)))(n||e)}})();static \u0275cmp=b({type:e,selectors:[["p-inputgroup"],["p-inputGroup"],["p-input-group"]],hostAttrs:[1,"p-inputgroup"],hostVars:5,hostBindings:function(p,n){p&2&&(C("data-pc-name","inputgroup"),d(n.style),k(n.styleClass))},inputs:{style:"style",styleClass:"styleClass"},features:[y([X]),x],ngContentSelectors:re,decls:1,vars:0,template:function(p,n){p&1&&(D(),T(0))},dependencies:[I,c],encapsulation:2})}return e})(),Y=(()=>{class e{static \u0275fac=function(p){return new(p||e)};static \u0275mod=v({type:e});static \u0275inj=g({imports:[j,c,c]})}return e})();var de=["*"],se={root:"p-inputgroupaddon"},Z=(()=>{class e extends z{name="inputgroupaddon";classes=se;static \u0275fac=(()=>{let o;return function(n){return(o||(o=u(e)))(n||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})(),A=(()=>{class e extends S{style;styleClass;_componentStyle=f(Z);get hostStyle(){return this.style}static \u0275fac=(()=>{let o;return function(n){return(o||(o=u(e)))(n||e)}})();static \u0275cmp=b({type:e,selectors:[["p-inputgroup-addon"],["p-inputGroupAddon"]],hostVars:7,hostBindings:function(p,n){p&2&&(C("data-pc-name","inputgroupaddon"),d(n.hostStyle),k(n.styleClass),F("p-inputgroupaddon",!0))},inputs:{style:"style",styleClass:"styleClass"},features:[y([Z]),x],ngContentSelectors:de,decls:1,vars:0,template:function(p,n){p&1&&(D(),T(0))},dependencies:[I],encapsulation:2})}return e})(),ee=(()=>{class e{static \u0275fac=function(p){return new(p||e)};static \u0275mod=v({type:e});static \u0275inj=g({imports:[A,c,c]})}return e})();var me=({dt:e})=>`
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${e("inputtext.color")};
    background: ${e("inputtext.background")};
    padding-block: ${e("inputtext.padding.y")};
    padding-inline: ${e("inputtext.padding.x")};
    border: 1px solid ${e("inputtext.border.color")};
    transition: background ${e("inputtext.transition.duration")}, color ${e("inputtext.transition.duration")}, border-color ${e("inputtext.transition.duration")}, outline-color ${e("inputtext.transition.duration")}, box-shadow ${e("inputtext.transition.duration")};
    appearance: none;
    border-radius: ${e("inputtext.border.radius")};
    outline-color: transparent;
    box-shadow: ${e("inputtext.shadow")};
}

.p-inputtext.ng-invalid.ng-dirty {
    border-color: ${e("inputtext.invalid.border.color")};
}

.p-inputtext:enabled:hover {
    border-color: ${e("inputtext.hover.border.color")};
}

.p-inputtext:enabled:focus {
    border-color: ${e("inputtext.focus.border.color")};
    box-shadow: ${e("inputtext.focus.ring.shadow")};
    outline: ${e("inputtext.focus.ring.width")} ${e("inputtext.focus.ring.style")} ${e("inputtext.focus.ring.color")};
    outline-offset: ${e("inputtext.focus.ring.offset")};
}

.p-inputtext.p-invalid {
    border-color: ${e("inputtext.invalid.border.color")};
}

.p-inputtext.p-variant-filled {
    background: ${e("inputtext.filled.background")};
}
    
.p-inputtext.p-variant-filled:enabled:hover {
    background: ${e("inputtext.filled.hover.background")};
}

.p-inputtext.p-variant-filled:enabled:focus {
    background: ${e("inputtext.filled.focus.background")};
}

.p-inputtext:disabled {
    opacity: 1;
    background: ${e("inputtext.disabled.background")};
    color: ${e("inputtext.disabled.color")};
}

.p-inputtext::placeholder {
    color: ${e("inputtext.placeholder.color")};
}

.p-inputtext.ng-invalid.ng-dirty::placeholder {
    color: ${e("inputtext.invalid.placeholder.color")};
}

.p-inputtext-sm {
    font-size: ${e("inputtext.sm.font.size")};
    padding-block: ${e("inputtext.sm.padding.y")};
    padding-inline: ${e("inputtext.sm.padding.x")};
}

.p-inputtext-lg {
    font-size: ${e("inputtext.lg.font.size")};
    padding-block: ${e("inputtext.lg.padding.y")};
    padding-inline: ${e("inputtext.lg.padding.x")};
}

.p-inputtext-fluid {
    width: 100%;
}
`,ge={root:({instance:e,props:l})=>["p-inputtext p-component",{"p-filled":e.filled,"p-inputtext-sm":l.size==="small","p-inputtext-lg":l.size==="large","p-invalid":l.invalid,"p-variant-filled":l.variant==="filled","p-inputtext-fluid":l.fluid}]},te=(()=>{class e extends z{name="inputtext";theme=me;classes=ge;static \u0275fac=(()=>{let o;return function(n){return(o||(o=u(e)))(n||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var ie=(()=>{class e extends S{ngModel;variant;fluid;pSize;filled;_componentStyle=f(te);get hasFluid(){let p=this.el.nativeElement.closest("p-fluid");return O(this.fluid)?!!p:this.fluid}constructor(o){super(),this.ngModel=o}ngAfterViewInit(){super.ngAfterViewInit(),this.updateFilledState(),this.cd.detectChanges()}ngDoCheck(){this.updateFilledState()}onInput(){this.updateFilledState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length||this.ngModel&&this.ngModel.model}static \u0275fac=function(p){return new(p||e)($(Q,8))};static \u0275dir=N({type:e,selectors:[["","pInputText",""]],hostAttrs:[1,"p-inputtext","p-component"],hostVars:14,hostBindings:function(p,n){if(p&1&&h("input",function(pe){return n.onInput(pe)}),p&2){let s;F("p-filled",n.filled)("p-variant-filled",((s=n.variant)!==null&&s!==void 0?s:n.config.inputStyle()||n.config.inputVariant())==="filled")("p-inputtext-fluid",n.hasFluid)("p-inputtext-sm",n.pSize==="small")("p-inputfield-sm",n.pSize==="small")("p-inputtext-lg",n.pSize==="large")("p-inputfield-lg",n.pSize==="large")}},inputs:{variant:"variant",fluid:[2,"fluid","fluid",L],pSize:"pSize"},features:[y([te]),x]})}return e})(),ne=(()=>{class e{static \u0275fac=function(p){return new(p||e)};static \u0275mod=v({type:e});static \u0275inj=g({})}return e})();var be=["class","component ts"],G=()=>({overflow:"hidden",height:"100%"});function ve(e,l){e&1&&a(0,"img",25)}var oe=class e{constructor(l){this.router=l}ngOnInit(){}sendEmail(){document.location="mailto:gianluca.fattarsi@gmail.com"}goToLinkedIN(){window.open("//linkedin.com/in/gianluca-fattarsi","_blank")}goToGitHub(){window.open("//github.com/gianlucafattarsi","_blank")}static \u0275fac=function(o){return new(o||e)($(q))};static \u0275cmp=b({type:e,selectors:[["app-dashboard",8,"component","ts"]],attrs:be,decls:87,vars:9,consts:[["header",""],[1,"grid","grid-cols-12","gap-2"],[1,"col-span-12","order-2","md:col-span-8","xl:col-span-9","xl:order-1"],[1,"m-0"],[2,"list-style","disc","margin-left","1rem"],[1,"col-span-12","order-1","md:col-span-4","xl:col-span-3","xl:order-2"],["src","assets/images/avatar.png",1,"avatar"],[1,"justify-items-center",2,"position","relative","top","calc(-10%)"],[1,"m-0","text-center"],[1,"col-span-12","order-3","xl:order-3"],["for","name3",1,"flex","items-center","col-span-12","mb-2","md:col-span-2","md:mb-0","2xl:col-span-1"],[1,"flex","items-center","col-span-12","mb-2","md:col-span-4","md:mb-0","2xl:col-span-3"],[1,"pi","pi-phone",2,"color","var(--primary-color)"],["pInputText","","readonly","","value","3402883347"],[1,"pi","pi-envelope",2,"color","var(--primary-color)"],["pInputText","","readonly","","value","gianluca.fattarsi@gmail.com"],["icon","pi pi-external-link","severity","secondary","variant","text",3,"onClick"],[1,"pi","pi-linkedin",2,"color","var(--primary-color)"],["pInputText","","readonly","","value","https://www.linkedin.com/in/gianluca-fattarsi"],[1,"pi","pi-github",2,"color","var(--primary-color)"],["pInputText","","readonly","","value","https://github.com/gianlucafattarsi"],[1,"pi","pi-telegram",2,"color","var(--primary-color)"],["pInputText","","readonly","","value","@fattazzo"],[1,"pi","pi-whatsapp",2,"color","var(--primary-color)"],["pInputText","","readonly","","value","3402884347"],["src","assets/images/coding.jpg"]],template:function(o,p){if(o&1){let n=P();i(0,"div",1)(1,"p-card",2)(2,"h2"),r(3,"Biografia"),t(),i(4,"p",3),r(5," Mi chiamo Gianluca e ho sempre avuto la passione per il computer e la programmazione. Il primo computer mi \xE8 stato regalato quanto frequentavo il primo anno di scuola media e da l\xEC ho iniziato subito a studiare manuali e realizzare le prime applicazioni in Pascal e Turbo Pascal. "),t(),i(6,"p",3),r(7," Questa passione con gli anni \xE8 cresciuta sempre di pi\xF9 portandomi a frequentare l'istituto tecnico ITT G.Marconi ad indirizzo informatico, ampliando le mie conoscenze nel mondo dell'informatica, dell'analisi e dell'elettronica. "),t(),i(8,"p",3),r(9," Dopo aver conseguito il diploma di perito informatico, \xE8 iniziata subito la mia esperienza come programmatore nell'ambito lavorativo portandomi a conoscere nuovi linguaggi di programmazione come Delphi, Java, Typescript, Visual Basic, Groovy e Kotlin. "),t(),i(10,"p",3),r(11," Il linguaggio di programmazione pi\xF9 utilizzato e conosciuto \xE8 Java con il quale realizzo sia la parte che riguarda il Front-End sia quella che riguarda il Back-End. La mia esperienza comprende anche la gestione di database e la realizzazione di applicazioni web e mobile per Android. "),t(),i(12,"p",3),r(13," Nella vita extra lavorativa mi diverto a realizzare nuovi progetti per sperimentare e conoscere tutte le novit\xE0 in materia di framework, metodologie di sviluppo e tecnologie. Nel tempo libero amo dedicarmi alla lettura in particolare di genere Horror, Fantasy e Fantascienza. "),t(),i(14,"div")(15,"p"),r(16,"Attualmente lavoro come architetto e sviluppatore software con oltre 20 anni di esperienza nel settore informatico. Le mie capacit\xE0 e punti di forza sono:"),t(),i(17,"ul",4)(18,"li"),r(19,"Specializzato nella progettazione di architetture scalabili e manutenibili per applicazioni aziendali."),t(),i(20,"li"),r(21,"Esperienza nella gestione di team di sviluppo e coordinamento di progetti complessi."),t(),i(22,"li"),r(23,"Conoscenza avanzata di linguaggi di programmazione come Java, Typescrypt e SQL."),t(),i(24,"li"),r(25,"Passione per l'ottimizzazione delle performance e la sicurezza delle applicazioni."),t(),i(26,"li"),r(27,"Impegno costante nell'adozione delle migliori pratiche di sviluppo Agile e DevOps."),t(),i(28,"li"),r(29,"Capacit\xE0 di tradurre i requisiti del cliente in soluzioni tecniche efficaci e innovativi."),t()()()(),i(30,"p-card",5),V(31,ve,1,0,"ng-template",null,0,H),a(33,"img",6),i(34,"div",7)(35,"div",8),r(36,"Via di Bugno 12"),t(),i(37,"div",8),r(38,"38042 Baselga di Pin\xE8"),t(),i(39,"div",8),r(40,"Trentino - Italia"),t()()(),i(41,"p-card",9)(42,"h2"),r(43,"Contatti"),t(),i(44,"div",1)(45,"label",10),r(46,"Telefono"),t(),i(47,"p-inputgroup",11)(48,"p-inputgroup-addon"),a(49,"i",12),t(),a(50,"input",13),t(),i(51,"label",10),r(52,"Email"),t(),i(53,"p-inputgroup",11)(54,"p-inputgroup-addon"),a(55,"i",14),t(),a(56,"input",15),i(57,"p-inputgroup-addon")(58,"p-button",16),h("onClick",function(){return E(n),M(p.sendEmail())}),t()()(),i(59,"label",10),r(60,"LinkedIN"),t(),i(61,"p-inputgroup",11)(62,"p-inputgroup-addon"),a(63,"i",17),t(),a(64,"input",18),i(65,"p-inputgroup-addon")(66,"p-button",16),h("onClick",function(){return E(n),M(p.goToLinkedIN())}),t()()(),i(67,"label",10),r(68,"GitHub"),t(),i(69,"p-inputgroup",11)(70,"p-inputgroup-addon"),a(71,"i",19),t(),a(72,"input",20),i(73,"p-inputgroup-addon")(74,"p-button",16),h("onClick",function(){return E(n),M(p.goToGitHub())}),t()()(),i(75,"label",10),r(76,"Telegram"),t(),i(77,"p-inputgroup",11)(78,"p-inputgroup-addon"),a(79,"i",21),t(),a(80,"input",22),t(),i(81,"label",10),r(82,"WhatsApp"),t(),i(83,"p-inputgroup",11)(84,"p-inputgroup-addon"),a(85,"i",23),t(),a(86,"input",24),t()()()()}o&2&&(w(),d(_(6,G)),w(29),d(_(7,G)),w(11),d(_(8,G)))},dependencies:[U,W,Y,j,ee,A,J,R,ne,ie,I,K],styles:[".avatar[_ngcontent-%COMP%]{width:140px;height:140px;overflow:hidden;border-radius:50%;margin-right:5px;position:relative;top:-40%;left:calc(50% - 5rem)}"]})};export{oe as AboutComponent};
