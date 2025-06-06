import{b as U,c as K}from"./chunk-4VBS6B4Z.js";import"./chunk-6737QISA.js";import{a as W,b as X}from"./chunk-F6MER3GD.js";import{da as L,ea as w,ja as V,k as J,l as k,ma as G,n as q,o as z}from"./chunk-VFSEOUIK.js";import{Ab as _,Bb as P,Da as D,Ea as O,Fb as R,Ha as r,Hb as u,Ib as H,K as F,L as $,Lb as y,Q as S,Ra as b,Sa as j,Ua as B,Wa as m,Z as M,ab as d,bb as o,db as A,eb as T,fb as x,kb as c,lb as s,mb as v,nb as Q,ob as N,pb as C,ub as g,xb as f,zb as h}from"./chunk-N3IZS5X7.js";import"./chunk-7CGTOI24.js";var ne=["content"],ae=["opposite"],oe=["marker"],I=e=>({$implicit:e});function re(e,n){e&1&&C(0)}function le(e,n){e&1&&C(0)}function me(e,n){if(e&1&&(Q(0),m(1,le,1,0,"ng-container",4),N()),e&2){let t=g().$implicit,a=g();r(),o("ngTemplateOutlet",a.markerTemplate||a._markerTemplate)("ngTemplateOutletContext",u(2,I,t))}}function pe(e,n){e&1&&v(0,"div",9),e&2&&d("data-pc-section","marker")}function ce(e,n){e&1&&v(0,"div",10)}function se(e,n){e&1&&C(0)}function de(e,n){if(e&1&&(c(0,"div",2)(1,"div",3),m(2,re,1,0,"ng-container",4),s(),c(3,"div",5),m(4,me,2,4,"ng-container",6)(5,pe,1,1,"ng-template",null,0,y)(7,ce,1,0,"div",7),s(),c(8,"div",8),m(9,se,1,0,"ng-container",4),s()()),e&2){let t=n.$implicit,a=n.last,i=P(6),l=g();d("data-pc-section","event"),r(),d("data-pc-section","opposite"),r(),o("ngTemplateOutlet",l.oppositeTemplate||l._oppositeTemplate)("ngTemplateOutletContext",u(11,I,t)),r(),d("data-pc-section","separator"),r(),o("ngIf",l.markerTemplate||l._markerTemplate)("ngIfElse",i),r(3),o("ngIf",!a),r(),d("data-pc-section","content"),r(),o("ngTemplateOutlet",l.contentTemplate||l._contentTemplate)("ngTemplateOutletContext",u(13,I,t))}}var ve=({dt:e})=>`
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
`,ge={root:({props:e})=>["p-timeline p-component","p-timeline-"+e.align,"p-timeline-"+e.layout],event:"p-timeline-event",eventOpposite:"p-timeline-event-opposite",eventSeparator:"p-timeline-event-separator",eventMarker:"p-timeline-event-marker",eventConnector:"p-timeline-event-connector",eventContent:"p-timeline-event-content"},Y=(()=>{class e extends V{name="timeline";theme=ve;classes=ge;static \u0275fac=(()=>{let t;return function(i){return(t||(t=M(e)))(i||e)}})();static \u0275prov=F({token:e,factory:e.\u0275fac})}return e})();var E=(()=>{class e extends G{value;style;styleClass;align="left";layout="vertical";contentTemplate;oppositeTemplate;markerTemplate;templates;_contentTemplate;_oppositeTemplate;_markerTemplate;_componentStyle=S(Y);get hostClass(){return this.styleClass}getBlockableElement(){return this.el.nativeElement.children[0]}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"opposite":this._oppositeTemplate=t.template;break;case"marker":this._markerTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=M(e)))(i||e)}})();static \u0275cmp=b({type:e,selectors:[["p-timeline"]],contentQueries:function(a,i,l){if(a&1&&(f(l,ne,4),f(l,ae,4),f(l,oe,4),f(l,L,4)),a&2){let p;h(p=_())&&(i.contentTemplate=p.first),h(p=_())&&(i.oppositeTemplate=p.first),h(p=_())&&(i.markerTemplate=p.first),h(p=_())&&(i.templates=p)}},hostVars:24,hostBindings:function(a,i){a&2&&(d("data-pc-section","root")("data-pc-name","timeline"),T(i.style),x(i.hostClass),A("p-timeline",!0)("p-component",!0)("p-timeline-left",i.align==="left")("p-timeline-right",i.align==="right")("p-timeline-top",i.align==="top")("p-timeline-bottom",i.align==="bottom")("p-timeline-alternate",i.align==="alternate")("p-timeline-vertical",i.layout==="vertical")("p-timeline-horizontal",i.layout==="horizontal"))},inputs:{value:"value",style:"style",styleClass:"styleClass",align:"align",layout:"layout"},features:[R([Y]),B],decls:1,vars:1,consts:[["marker",""],["class","p-timeline-event",4,"ngFor","ngForOf"],[1,"p-timeline-event"],[1,"p-timeline-event-opposite"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-timeline-event-separator"],[4,"ngIf","ngIfElse"],["class","p-timeline-event-connector",4,"ngIf"],[1,"p-timeline-event-content"],[1,"p-timeline-event-marker"],[1,"p-timeline-event-connector"]],template:function(a,i){a&1&&m(0,de,10,15,"div",1),a&2&&o("ngForOf",i.value)},dependencies:[z,J,k,q,w],encapsulation:2,changeDetection:0})}return e})(),Z=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275mod=j({type:e});static \u0275inj=$({imports:[E,w,w]})}return e})();var fe=e=>({"background-color":e}),he=(e,n)=>[e,n];function _e(e,n){if(e&1&&(c(0,"span",3),v(1,"fa-icon",4),s()),e&2){let t=n.$implicit;T(u(3,fe,t.color)),r(),o("icon",H(5,he,t.iconpack,t.icon))}}function ye(e,n){if(e&1&&v(0,"img",8),e&2){let t=g().$implicit;x(t.imageclass),o("src","assets/images/"+t.image,O)("alt",t.name)}}function be(e,n){if(e&1&&v(0,"p",9),e&2){let t=g().$implicit;o("innerHTML",t.text,D)}}function Te(e,n){if(e&1&&(c(0,"p-card",5),m(1,ye,1,4,"img",6)(2,be,1,1,"p",7),s()),e&2){let t=n.$implicit;o("header",t.status)("subheader",t.date),r(),o("ngIf",t.image),r(),o("ngIf",t.text)}}var ee=class e{events;constructor(){this.events=[{status:"Diploma di Perito Informatico",date:"1996/1997 \u2013 2000/2001",iconpack:"fas",icon:"user-graduate",color:"#9C27B0",image:"marconi.jpg",imageclass:"image-left",text:"<b>ITT \u201CG. Marconi\u201D</b> - Rovereto<br>Indirizzo: Informatica<br><ul><li>Informatica</li><li>Elettronica</li></ul>"},{status:"Operaio",date:"12001 - Febbraio 2002",iconpack:"fas",icon:"building",color:"#673AB7",image:"tama.png",imageclass:"image-right",text:`Tama S.p.a. via dell'industria, 11, 38012 Mollaro, Predaia TN<br>
               Rifinitura parti grezze dei filtri di depurazione<br>
               Area: Unit\xE0 filtranti e componenti per la depurazione dell\u2019aria`},{status:"Attestato progettazione grafica CAD",date:"18/04/2002",iconpack:"fas",icon:"building",color:"#FF9800",image:"cad.jpg",imageclass:"image-left",text:`Centro Tecnologie Aziendali Srl<br>
               Servizi Informatica Verona<br>
               Introduzione ambiente CAD<br>
               Basi programmazione CAD`},{status:"Java - Formazione tecnica",date:"08/11/2004 \u2013 25/02/2005",iconpack:"fab",icon:"java",color:"#607D8B",imageclass:"image-right",image:"java.png",text:`Formazione in tecnologia java<br>
               Europa Computer S.r.l. - Provincia Autonoma di Trento<br>
               Introduzione alla piattaforma j2ee \u2013 j2se<br>
               Java base<br>
               Java avanzato<br>
               Swing<br>
               Java enterprise - web<br>
               Java enterprise - ejb`},{status:"Software developer",date:"05 Marzo 2002 - Oggi",iconpack:"fas",icon:"building",color:"#607D8B",imageclass:"image-left",image:"software-engineer.png",text:`Europa Computer S.r.l. via Don Luigi Guetti 36 38121 Trento<br>
               Software developer<br>
               Software engineer<br>
               Customer service<br><br>
               Area: Hardware - Software`}]}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=b({type:e,selectors:[["app-education"]],decls:6,vars:1,consts:[["marker",""],["content",""],["align","alternate","styleClass","customized-timeline",3,"value"],[1,"flex","w-12","h-12","items-center","justify-center","text-white","rounded-full","z-10","shadow-sm"],[2,"font-size","1.5rem",3,"icon"],[3,"header","subheader"],["width","200",3,"src","alt","class",4,"ngIf"],[3,"innerHTML",4,"ngIf"],["width","200",3,"src","alt"],[3,"innerHTML"]],template:function(t,a){t&1&&(c(0,"p-card")(1,"p-timeline",2),m(2,_e,2,8,"ng-template",null,0,y)(4,Te,3,4,"ng-template",null,1,y),s()()),t&2&&(r(),o("value",a.events))},dependencies:[z,k,X,W,Z,E,K,U],styles:[".image-right[_ngcontent-%COMP%]{justify-self:right}[_nghost-%COMP%]     .p-card-content{display:grid}"]})};export{ee as EducationComponent};
