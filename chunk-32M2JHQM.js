import{c as L,m as K}from"./chunk-43L6YCKE.js";import"./chunk-2DMGUU3E.js";import{d as R,e as J}from"./chunk-B5UG2X3D.js";import{a as Q,b as W}from"./chunk-JD3NK2UN.js";import{U as O,ea as c,ja as I,ma as w,o as _}from"./chunk-XGXTPMMU.js";import{Db as r,Gb as y,Ha as $,Hb as T,K as m,L as g,Ma as E,Mb as P,Q as f,Ra as b,Sa as v,Ta as N,Ua as x,Vb as q,W as M,Wa as V,X as S,Z as u,ab as C,db as z,eb as d,fb as F,lb as p,mb as o,nb as a,rb as H,ub as h,wb as k,xb as D}from"./chunk-JADE7FVP.js";import"./chunk-7CGTOI24.js";var pt=["*"],rt=({dt:t})=>`
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
    padding: ${t("inputgroup.addon.padding")};
    background: ${t("inputgroup.addon.background")};
    color: ${t("inputgroup.addon.color")};
    border-block-start: 1px solid ${t("inputgroup.addon.border.color")};
    border-block-end: 1px solid ${t("inputgroup.addon.border.color")};
    min-width: ${t("inputgroup.addon.min.width")};
}

.p-inputgroupaddon:first-child,
.p-inputgroupaddon + .p-inputgroupaddon {
    border-inline-start: 1px solid ${t("inputgroup.addon.border.color")};
}

.p-inputgroupaddon:last-child {
    border-inline-end: 1px solid ${t("inputgroup.addon.border.color")};
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
    border-start-start-radius: ${t("inputgroup.addon.border.radius")};
    border-end-start-radius: ${t("inputgroup.addon.border.radius")};
}

.p-inputgroupaddon:last-child,
.p-inputgroup > .p-component:last-child,
.p-inputgroup > .p-inputwrapper:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-inputwrapper > .p-component {
    border-start-end-radius: ${t("inputgroup.addon.border.radius")};
    border-end-end-radius: ${t("inputgroup.addon.border.radius")};
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
    border-start-start-radius: ${t("inputgroup.addon.border.radius")};
    border-end-start-radius: ${t("inputgroup.addon.border.radius")};
}

.p-inputgroup:has(> p-button:last-child) .p-button {
    border-start-end-radius: ${t("inputgroup.addon.border.radius")};
    border-end-end-radius: ${t("inputgroup.addon.border.radius")};
}
`,at={root:({props:t})=>["p-inputgroup",{"p-inputgroup-fluid":t.fluid}]},U=(()=>{class t extends I{name="inputgroup";theme=rt;classes=at;static \u0275fac=(()=>{let i;return function(e){return(i||(i=u(t)))(e||t)}})();static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})();var j=(()=>{class t extends w{style;styleClass;_componentStyle=f(U);static \u0275fac=(()=>{let i;return function(e){return(i||(i=u(t)))(e||t)}})();static \u0275cmp=b({type:t,selectors:[["p-inputgroup"],["p-inputGroup"],["p-input-group"]],hostAttrs:[1,"p-inputgroup"],hostVars:5,hostBindings:function(n,e){n&2&&(C("data-pc-name","inputgroup"),d(e.style),F(e.styleClass))},inputs:{style:"style",styleClass:"styleClass"},features:[y([U]),x],ngContentSelectors:pt,decls:1,vars:0,template:function(n,e){n&1&&(k(),D(0))},dependencies:[_,c],encapsulation:2})}return t})(),X=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=v({type:t});static \u0275inj=g({imports:[j,c,c]})}return t})();var ut=["*"],dt={root:"p-inputgroupaddon"},Y=(()=>{class t extends I{name="inputgroupaddon";classes=dt;static \u0275fac=(()=>{let i;return function(e){return(i||(i=u(t)))(e||t)}})();static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})(),A=(()=>{class t extends w{style;styleClass;_componentStyle=f(Y);get hostStyle(){return this.style}static \u0275fac=(()=>{let i;return function(e){return(i||(i=u(t)))(e||t)}})();static \u0275cmp=b({type:t,selectors:[["p-inputgroup-addon"],["p-inputGroupAddon"]],hostVars:7,hostBindings:function(n,e){n&2&&(C("data-pc-name","inputgroupaddon"),d(e.hostStyle),F(e.styleClass),z("p-inputgroupaddon",!0))},inputs:{style:"style",styleClass:"styleClass"},features:[y([Y]),x],ngContentSelectors:ut,decls:1,vars:0,template:function(n,e){n&1&&(k(),D(0))},dependencies:[_],encapsulation:2})}return t})(),Z=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=v({type:t});static \u0275inj=g({imports:[A,c,c]})}return t})();var ct=({dt:t})=>`
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${t("inputtext.color")};
    background: ${t("inputtext.background")};
    padding-block: ${t("inputtext.padding.y")};
    padding-inline: ${t("inputtext.padding.x")};
    border: 1px solid ${t("inputtext.border.color")};
    transition: background ${t("inputtext.transition.duration")}, color ${t("inputtext.transition.duration")}, border-color ${t("inputtext.transition.duration")}, outline-color ${t("inputtext.transition.duration")}, box-shadow ${t("inputtext.transition.duration")};
    appearance: none;
    border-radius: ${t("inputtext.border.radius")};
    outline-color: transparent;
    box-shadow: ${t("inputtext.shadow")};
}

.p-inputtext.ng-invalid.ng-dirty {
    border-color: ${t("inputtext.invalid.border.color")};
}

.p-inputtext:enabled:hover {
    border-color: ${t("inputtext.hover.border.color")};
}

.p-inputtext:enabled:focus {
    border-color: ${t("inputtext.focus.border.color")};
    box-shadow: ${t("inputtext.focus.ring.shadow")};
    outline: ${t("inputtext.focus.ring.width")} ${t("inputtext.focus.ring.style")} ${t("inputtext.focus.ring.color")};
    outline-offset: ${t("inputtext.focus.ring.offset")};
}

.p-inputtext.p-invalid {
    border-color: ${t("inputtext.invalid.border.color")};
}

.p-inputtext.p-variant-filled {
    background: ${t("inputtext.filled.background")};
}
    
.p-inputtext.p-variant-filled:enabled:hover {
    background: ${t("inputtext.filled.hover.background")};
}

.p-inputtext.p-variant-filled:enabled:focus {
    background: ${t("inputtext.filled.focus.background")};
}

.p-inputtext:disabled {
    opacity: 1;
    background: ${t("inputtext.disabled.background")};
    color: ${t("inputtext.disabled.color")};
}

.p-inputtext::placeholder {
    color: ${t("inputtext.placeholder.color")};
}

.p-inputtext.ng-invalid.ng-dirty::placeholder {
    color: ${t("inputtext.invalid.placeholder.color")};
}

.p-inputtext-sm {
    font-size: ${t("inputtext.sm.font.size")};
    padding-block: ${t("inputtext.sm.padding.y")};
    padding-inline: ${t("inputtext.sm.padding.x")};
}

.p-inputtext-lg {
    font-size: ${t("inputtext.lg.font.size")};
    padding-block: ${t("inputtext.lg.padding.y")};
    padding-inline: ${t("inputtext.lg.padding.x")};
}

.p-inputtext-fluid {
    width: 100%;
}
`,mt={root:({instance:t,props:l})=>["p-inputtext p-component",{"p-filled":t.filled,"p-inputtext-sm":l.size==="small","p-inputtext-lg":l.size==="large","p-invalid":l.invalid,"p-variant-filled":l.variant==="filled","p-inputtext-fluid":l.fluid}]},tt=(()=>{class t extends I{name="inputtext";theme=ct;classes=mt;static \u0275fac=(()=>{let i;return function(e){return(i||(i=u(t)))(e||t)}})();static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})();var et=(()=>{class t extends w{ngModel;variant;fluid;pSize;filled;_componentStyle=f(tt);get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return O(this.fluid)?!!n:this.fluid}constructor(i){super(),this.ngModel=i}ngAfterViewInit(){super.ngAfterViewInit(),this.updateFilledState(),this.cd.detectChanges()}ngDoCheck(){this.updateFilledState()}onInput(){this.updateFilledState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length||this.ngModel&&this.ngModel.model}static \u0275fac=function(n){return new(n||t)(E(K,8))};static \u0275dir=N({type:t,selectors:[["","pInputText",""]],hostAttrs:[1,"p-inputtext","p-component"],hostVars:14,hostBindings:function(n,e){if(n&1&&h("input",function(ot){return e.onInput(ot)}),n&2){let s;z("p-filled",e.filled)("p-variant-filled",((s=e.variant)!==null&&s!==void 0?s:e.config.inputStyle()||e.config.inputVariant())==="filled")("p-inputtext-fluid",e.hasFluid)("p-inputtext-sm",e.pSize==="small")("p-inputfield-sm",e.pSize==="small")("p-inputtext-lg",e.pSize==="large")("p-inputfield-lg",e.pSize==="large")}},inputs:{variant:"variant",fluid:[2,"fluid","fluid",q],pSize:"pSize"},features:[y([tt]),x]})}return t})(),it=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=v({type:t});static \u0275inj=g({})}return t})();var ft=["class","component ts"],G=()=>({overflow:"hidden",height:"100%"});function bt(t,l){t&1&&a(0,"img",24)}var nt=class t{constructor(l){this.router=l}ngOnInit(){}sendEmail(){document.location="mailto:gianluca.fattarsi@gmail.com"}goToLinkedIN(){window.open("//linkedin.com/in/gianluca-fattarsi","_blank")}goToGitHub(){window.open("//github.com/gianlucafattarsi","_blank")}static \u0275fac=function(i){return new(i||t)(E(L))};static \u0275cmp=b({type:t,selectors:[["app-dashboard",8,"component","ts"]],attrs:ft,decls:71,vars:9,consts:[["header",""],[1,"grid","grid-cols-12","gap-2"],[1,"col-span-12","order-2","md:col-span-8","xl:col-span-9","xl:order-1"],[1,"m-0"],[1,"col-span-12","order-1","md:col-span-4","xl:col-span-3","xl:order-2"],["src","assets/images/avatar.png",1,"avatar"],[1,"justify-items-center",2,"position","relative","top","calc(-10%)"],[1,"m-0","text-center"],[1,"col-span-12","order-3","xl:order-3"],["for","name3",1,"flex","items-center","col-span-12","mb-2","md:col-span-2","md:mb-0","2xl:col-span-1"],[1,"flex","items-center","col-span-12","mb-2","md:col-span-4","md:mb-0","2xl:col-span-3"],[1,"pi","pi-phone",2,"color","var(--primary-color)"],["pInputText","","readonly","","value","3402883347"],[1,"pi","pi-envelope",2,"color","var(--primary-color)"],["pInputText","","readonly","","value","gianluca.fattarsi@gmail.com"],["icon","pi pi-external-link","severity","secondary","variant","text",3,"onClick"],[1,"pi","pi-linkedin",2,"color","var(--primary-color)"],["pInputText","","readonly","","value","https://www.linkedin.com/in/gianluca-fattarsi"],[1,"pi","pi-github",2,"color","var(--primary-color)"],["pInputText","","readonly","","value","https://github.com/gianlucafattarsi"],[1,"pi","pi-telegram",2,"color","var(--primary-color)"],["pInputText","","readonly","","value","@fattazzo"],[1,"pi","pi-whatsapp",2,"color","var(--primary-color)"],["pInputText","","readonly","","value","3402884347"],["src","assets/images/coding.jpg"]],template:function(i,n){if(i&1){let e=H();p(0,"div",1)(1,"p-card",2)(2,"h2"),r(3,"Biografia"),o(),p(4,"p",3),r(5," Mi chiamo Gianluca e ho sempre avuto la passione per il computer e la programmazione. Il primo computer mi \xE8 stato regalato quanto frequentavo il primo anno di scuola media e da l\xEC ho iniziato subito a studiare manuali e realizzare le prime applicazioni in Pascal e Turbo Pascal. "),o(),p(6,"p",3),r(7," Questa passione con gli anni \xE8 cresciuta sempre di pi\xF9 portandomi a frequentare l'istituto tecnico ITT G.Marconi ad indirizzo informatico, ampliando le mie conoscenze nel mondo dell'informatica, dell'analisi e dell'elettronica. "),o(),p(8,"p",3),r(9," Dopo aver conseguito il diploma di perito informatico, \xE8 iniziata subito la mia esperienza come programmatore nell'ambito lavorativo portandomi a conoscere nuovi linguaggi di programmazione come Delphi, Java, Typescript, Visual Basic, Groovy e Kotlin. "),o(),p(10,"p",3),r(11," Il linguaggio di programmazione pi\xF9 utilizzato e conosciuto \xE8 Java con il quale realizzo sia la parte che riguarda il Front-End sia quella che riguarda il Back-End. La mia esperienza comprende anche la gestione di database e la realizzazione di applicazioni web e mobile per Android. "),o(),p(12,"p",3),r(13," Nella vita extra lavorativa mi diverto a realizzare nuovi progetti per sperimentare e conoscere tutte le novit\xE0 in materia di framework, metodologie di sviluppo e tecnologie. Nel tempo libero amo dedicarmi alla lettura in particolare di genere Horror, Fantasy e Fantascienza. "),o()(),p(14,"p-card",4),V(15,bt,1,0,"ng-template",null,0,P),a(17,"img",5),p(18,"div",6)(19,"div",7),r(20,"Via di Bugno 12"),o(),p(21,"div",7),r(22,"38042 Baselga di Pin\xE8"),o(),p(23,"div",7),r(24,"Trentino - Italia"),o()()(),p(25,"p-card",8)(26,"h2"),r(27,"Contatti"),o(),p(28,"div",1)(29,"label",9),r(30,"Telefono"),o(),p(31,"p-inputgroup",10)(32,"p-inputgroup-addon"),a(33,"i",11),o(),a(34,"input",12),o(),p(35,"label",9),r(36,"Email"),o(),p(37,"p-inputgroup",10)(38,"p-inputgroup-addon"),a(39,"i",13),o(),a(40,"input",14),p(41,"p-inputgroup-addon")(42,"p-button",15),h("onClick",function(){return M(e),S(n.sendEmail())}),o()()(),p(43,"label",9),r(44,"LinkedIN"),o(),p(45,"p-inputgroup",10)(46,"p-inputgroup-addon"),a(47,"i",16),o(),a(48,"input",17),p(49,"p-inputgroup-addon")(50,"p-button",15),h("onClick",function(){return M(e),S(n.goToLinkedIN())}),o()()(),p(51,"label",9),r(52,"GitHub"),o(),p(53,"p-inputgroup",10)(54,"p-inputgroup-addon"),a(55,"i",18),o(),a(56,"input",19),p(57,"p-inputgroup-addon")(58,"p-button",15),h("onClick",function(){return M(e),S(n.goToGitHub())}),o()()(),p(59,"label",9),r(60,"Telegram"),o(),p(61,"p-inputgroup",10)(62,"p-inputgroup-addon"),a(63,"i",20),o(),a(64,"input",21),o(),p(65,"label",9),r(66,"WhatsApp"),o(),p(67,"p-inputgroup",10)(68,"p-inputgroup-addon"),a(69,"i",22),o(),a(70,"input",23),o()()()()}i&2&&($(),d(T(6,G)),$(13),d(T(7,G)),$(11),d(T(8,G)))},dependencies:[W,Q,X,j,Z,A,J,R,it,et],styles:[".avatar[_ngcontent-%COMP%]{width:140px;height:140px;overflow:hidden;border-radius:50%;margin-right:5px;position:relative;top:-40%;left:calc(50% - 5rem)}"]})};export{nt as AboutComponent};
