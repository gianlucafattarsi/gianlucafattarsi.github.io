import{b as X,c as Y}from"./chunk-O6PENT5Q.js";import"./chunk-2DMGUU3E.js";import{a as Z,b as ee}from"./chunk-JD3NK2UN.js";import{da as U,ea as M,ja as K,k as V,l as k,ma as W,n as G,o as z}from"./chunk-XGXTPMMU.js";import{Ab as h,Bb as b,Cb as J,Da as I,Ea as w,Gb as L,Ha as r,Ib as u,Jb as q,K as O,L as S,Mb as y,Q as D,Ra as T,Sa as j,Ua as P,Wa as p,Z as E,ab as v,bb as a,db as B,eb as x,fb as f,hb as A,jb as Q,kb as N,lb as m,mb as c,nb as s,ob as R,pb as H,qb as C,vb as d,yb as _}from"./chunk-JADE7FVP.js";import"./chunk-7CGTOI24.js";var re=["content"],le=["opposite"],pe=["marker"],F=e=>({$implicit:e});function me(e,i){e&1&&C(0)}function ce(e,i){e&1&&C(0)}function se(e,i){if(e&1&&(R(0),p(1,ce,1,0,"ng-container",4),H()),e&2){let t=d().$implicit,o=d();r(),a("ngTemplateOutlet",o.markerTemplate||o._markerTemplate)("ngTemplateOutletContext",u(2,F,t))}}function de(e,i){e&1&&s(0,"div",9),e&2&&v("data-pc-section","marker")}function ge(e,i){e&1&&s(0,"div",10)}function ve(e,i){e&1&&C(0)}function ue(e,i){if(e&1&&(m(0,"div",2)(1,"div",3),p(2,me,1,0,"ng-container",4),c(),m(3,"div",5),p(4,se,2,4,"ng-container",6)(5,de,1,1,"ng-template",null,0,y)(7,ge,1,0,"div",7),c(),m(8,"div",8),p(9,ve,1,0,"ng-container",4),c()()),e&2){let t=i.$implicit,o=i.last,n=J(6),l=d();v("data-pc-section","event"),r(),v("data-pc-section","opposite"),r(),a("ngTemplateOutlet",l.oppositeTemplate||l._oppositeTemplate)("ngTemplateOutletContext",u(11,F,t)),r(),v("data-pc-section","separator"),r(),a("ngIf",l.markerTemplate||l._markerTemplate)("ngIfElse",n),r(3),a("ngIf",!o),r(),v("data-pc-section","content"),r(),a("ngTemplateOutlet",l.contentTemplate||l._contentTemplate)("ngTemplateOutletContext",u(13,F,t))}}var fe=({dt:e})=>`
.p-timeline {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    direction: ltr;
}

.p-timeline-left .p-timeline-event-opposite {
    text-align: right;
}

.p-timeline-left .p-timeline-event-content {
    text-align: left;
}

.p-timeline-right .p-timeline-event {
    flex-direction: row-reverse;
}

.p-timeline-right .p-timeline-event-opposite {
    text-align: left;
}

.p-timeline-right .p-timeline-event-content {
    text-align: right;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
    flex-direction: row-reverse;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
    text-align: right;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
    text-align: left;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
    text-align: left;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
    text-align: right;
}

.p-timeline-vertical .p-timeline-event-opposite,
.p-timeline-vertical .p-timeline-event-content {
    padding: ${e("timeline.vertical.event.content.padding")};
}

.p-timeline-vertical .p-timeline-event-connector {
    width: ${e("timeline.event.connector.size")};
}

.p-timeline-event {
    display: flex;
    position: relative;
    min-height: ${e("timeline.event.min.height")};
}

.p-timeline-event:last-child {
    min-height: 0;
}

.p-timeline-event-opposite {
    flex: 1;
}

.p-timeline-event-content {
    flex: 1;
}

.p-timeline-event-separator {
    flex: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.p-timeline-event-marker {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    align-self: baseline;
    border-width: ${e("timeline.event.marker.border.width")};
    border-style: solid;
    border-color: ${e("timeline.event.marker.border.color")};
    border-radius: ${e("timeline.event.marker.border.radius")};
    width: ${e("timeline.event.marker.size")};
    height: ${e("timeline.event.marker.size")};
    background: ${e("timeline.event.marker.background")};
}

.p-timeline-event-marker::before {
    content: " ";
    border-radius: ${e("timeline.event.marker.content.border.radius")};
    width: ${e("timeline.event.marker.content.size")};
    height:${e("timeline.event.marker.content.size")};
    background: ${e("timeline.event.marker.content.background")};
}

.p-timeline-event-marker::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${e("timeline.event.marker.border.radius")};
    box-shadow: ${e("timeline.event.marker.content.inset.shadow")};
}

.p-timeline-event-connector {
    flex-grow: 1;
    background: ${e("timeline.event.connector.color")};
}

.p-timeline-horizontal {
    flex-direction: row;
}

.p-timeline-horizontal .p-timeline-event {
    flex-direction: column;
    flex: 1;
}

.p-timeline-horizontal .p-timeline-event:last-child {
    flex: 0;
}

.p-timeline-horizontal .p-timeline-event-separator {
    flex-direction: row;
}

.p-timeline-horizontal .p-timeline-event-connector {
    width: 100%;
    height: ${e("timeline.event.connector.size")};
}

.p-timeline-horizontal .p-timeline-event-opposite,
.p-timeline-horizontal .p-timeline-event-content {
    padding: ${e("timeline.horizontal.event.content.padding")};
}

.p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
    flex-direction: column-reverse;
}

.p-timeline-bottom .p-timeline-event {
    flex-direction: column-reverse;
}
`,_e={root:({props:e})=>["p-timeline p-component","p-timeline-"+e.align,"p-timeline-"+e.layout],event:"p-timeline-event",eventOpposite:"p-timeline-event-opposite",eventSeparator:"p-timeline-event-separator",eventMarker:"p-timeline-event-marker",eventConnector:"p-timeline-event-connector",eventContent:"p-timeline-event-content"},te=(()=>{class e extends K{name="timeline";theme=fe;classes=_e;static \u0275fac=(()=>{let t;return function(n){return(t||(t=E(e)))(n||e)}})();static \u0275prov=O({token:e,factory:e.\u0275fac})}return e})();var $=(()=>{class e extends W{value;style;styleClass;align="left";layout="vertical";contentTemplate;oppositeTemplate;markerTemplate;templates;_contentTemplate;_oppositeTemplate;_markerTemplate;_componentStyle=D(te);get hostClass(){return this.styleClass}getBlockableElement(){return this.el.nativeElement.children[0]}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"opposite":this._oppositeTemplate=t.template;break;case"marker":this._markerTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=E(e)))(n||e)}})();static \u0275cmp=T({type:e,selectors:[["p-timeline"]],contentQueries:function(o,n,l){if(o&1&&(_(l,re,4),_(l,le,4),_(l,pe,4),_(l,U,4)),o&2){let g;h(g=b())&&(n.contentTemplate=g.first),h(g=b())&&(n.oppositeTemplate=g.first),h(g=b())&&(n.markerTemplate=g.first),h(g=b())&&(n.templates=g)}},hostVars:24,hostBindings:function(o,n){o&2&&(v("data-pc-section","root")("data-pc-name","timeline"),x(n.style),f(n.hostClass),B("p-timeline",!0)("p-component",!0)("p-timeline-left",n.align==="left")("p-timeline-right",n.align==="right")("p-timeline-top",n.align==="top")("p-timeline-bottom",n.align==="bottom")("p-timeline-alternate",n.align==="alternate")("p-timeline-vertical",n.layout==="vertical")("p-timeline-horizontal",n.layout==="horizontal"))},inputs:{value:"value",style:"style",styleClass:"styleClass",align:"align",layout:"layout"},features:[L([te]),P],decls:1,vars:1,consts:[["marker",""],["class","p-timeline-event",4,"ngFor","ngForOf"],[1,"p-timeline-event"],[1,"p-timeline-event-opposite"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-timeline-event-separator"],[4,"ngIf","ngIfElse"],["class","p-timeline-event-connector",4,"ngIf"],[1,"p-timeline-event-content"],[1,"p-timeline-event-marker"],[1,"p-timeline-event-connector"]],template:function(o,n){o&1&&p(0,ue,10,15,"div",1),o&2&&a("ngForOf",n.value)},dependencies:[z,V,k,G,M],encapsulation:2,changeDetection:0})}return e})(),ie=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=j({type:e});static \u0275inj=S({imports:[$,M,M]})}return e})();var be=e=>({"background-color":e}),ye=(e,i)=>[e,i];function Te(e,i){if(e&1&&(m(0,"span",5),s(1,"fa-icon",6),c()),e&2){let t=i.$implicit;x(u(3,be,t.color)),r(),a("icon",q(5,ye,t.iconpack,t.icon))}}function xe(e,i){if(e&1&&s(0,"img",9),e&2){let t=d().$implicit;f(t.imageclass),a("src","assets/images/"+t.image,w)}}function Ce(e,i){if(e&1&&s(0,"p",10),e&2){let t=d().$implicit;a("innerHTML",t.text,I)}}function ke(e,i){if(e&1&&(m(0,"p-card",4),p(1,xe,1,3,"img",7)(2,Ce,1,1,"p",8),c()),e&2){let t=i.$implicit;a("header",t.status)("subheader",t.date),r(),a("ngIf",t.image),r(),a("ngIf",t.text)}}function ze(e,i){if(e&1&&s(0,"img",9),e&2){let t=d().$implicit;f(t.imageclass),a("src","assets/images/"+t.image,w)}}function Me(e,i){if(e&1&&s(0,"p",10),e&2){let t=d().$implicit;a("innerHTML",t.text,I)}}function Ee(e,i){if(e&1&&(m(0,"p-card",4),p(1,ze,1,3,"img",7)(2,Me,1,1,"p",8),c()),e&2){let t=i.$implicit;a("header",t.status)("subheader",t.date),r(),a("ngIf",t.image),r(),a("ngIf",t.text)}}var ne=class e{events;constructor(){this.events=[{status:"Software architect e developer",date:"05 Marzo 2002 - Oggi",iconpack:"fas",icon:"laptop",color:"#607D8B",imageclass:"image-left",image:"software-engineer.png",text:`<b>Europa Computer S.r.l.</b><br>
               Via Don Luigi Guetti 36 38121 Trento<br><br>
                - Progettazione di architetture scalabili e manutenibili per applicazioni aziendali<br>
                - Gestione di team di sviluppo e coordinamento di progetti complessi<br>
                - Ottimizzazione delle performance e la sicurezza delle applicazioni<br><br>`},{status:"Java - Formazione tecnica",date:"08/11/2004 \u2013 25/02/2005",iconpack:"fab",icon:"java",color:"#607D8B",imageclass:"image-right",image:"java.png",text:`Formazione in tecnologia java<br>
               <b>Europa Computer S.r.l. - Provincia Autonoma di Trento</b><br><br>
               Introduzione alla piattaforma j2ee/j2se - <br>
               Java base - <br>
               Java avanzato - <br>
               Swing - <br>
               Java enterprise - web - <br>
               Java enterprise - ejb - `},{status:"Attestato progettazione grafica CAD",date:"18/04/2002",iconpack:"fas",icon:"keyboard",color:"#FF9800",image:"cad.jpg",imageclass:"image-left",text:`<b>Centro Tecnologie Aziendali Srl</b><br><br>
               Servizi Informatica Verona<br>
                - Introduzione ambiente CAD<br>
                - Basi programmazione CAD`},{status:"Operaio",date:"12001 - Febbraio 2002",iconpack:"fas",icon:"building",color:"#673AB7",image:"tama.png",imageclass:"image-right",text:`<b>Tama S.p.a.</b><br><br>via dell'industria, 11, 38012 Mollaro, Predaia TN<br><br>
               Rifinitura parti grezze dei filtri di depurazione<br><br>
               Area: Unit\xE0 filtranti e componenti per la depurazione dell\u2019aria`},{status:"Diploma di Perito Informatico",date:"1996/1997 \u2013 2000/2001",iconpack:"fas",icon:"user-graduate",color:"#9C27B0",image:"marconi.jpg",imageclass:"image-left",text:`<b>ITT \u201CG. Marconi\u201D</b> - Rovereto<br><br>
               Indirizzo: Informatica<br><br>
                - Informatica<br>
                - Elettronica`}]}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=T({type:e,selectors:[["app-education"]],decls:9,vars:1,consts:[["marker",""],["content",""],["align","alternate","styleClass","customized-timeline",1,"template-desktop",3,"value"],[1,"template-mobile","gap-2"],[3,"header","subheader"],[1,"flex","w-12","h-12","items-center","justify-center","text-white","rounded-full","z-10","shadow-sm"],[2,"font-size","1.5rem",3,"icon"],["width","400",3,"src","class",4,"ngIf"],[3,"innerHTML",4,"ngIf"],["width","400",3,"src"],[3,"innerHTML"]],template:function(t,o){t&1&&(m(0,"p-card")(1,"p-timeline",2),p(2,Te,2,8,"ng-template",null,0,y)(4,ke,3,4,"ng-template",null,1,y),c(),m(6,"div",3),Q(7,Ee,3,4,"p-card",4,A),c()()),t&2&&(r(),a("value",o.events),r(6),N(o.events))},dependencies:[z,k,ee,Z,ie,$,Y,X],styles:[".image-right[_ngcontent-%COMP%]{justify-self:right}[_nghost-%COMP%]     .p-card-content{display:grid}.template-desktop[_ngcontent-%COMP%]{display:flex}.template-mobile[_ngcontent-%COMP%]{display:none}@media (max-width: 891px){.template-desktop[_ngcontent-%COMP%]{display:none}.template-mobile[_ngcontent-%COMP%]{display:grid}.image-right[_ngcontent-%COMP%]{justify-self:left}}"]})};export{ne as EducationComponent};
