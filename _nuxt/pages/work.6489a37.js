(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{191:function(t,e,o){var content=o(200);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(48).default)("c31577de",content,!0,{sourceMap:!1})},192:function(t,e,o){"use strict";o.r(e);var r={props:["pageTitle"],data:function(){return{name:"Kyle"}}},n=(o(199),o(40)),component=Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"heading",attrs:{id:"fix-head"}},[e("h3",[this._v(this._s(this.pageTitle))]),this._v(" "),e("div",{staticClass:"line"})])}),[],!1,null,null,null);e.default=component.exports},197:function(t,e,o){var content=o(210);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(48).default)("7ad87997",content,!0,{sourceMap:!1})},199:function(t,e,o){"use strict";var r=o(191);o.n(r).a},200:function(t,e,o){(e=o(47)(!1)).push([t.i,"#fix-head{position:fixed;top:5vh;left:3vw}h3{font-size:2.2rem;font-weight:400}.heading{color:#6e0dcf}.line{background-color:#6e0dcf;height:5px;border-radius:10px;width:90px}",""]),t.exports=e},201:function(t,e,o){"use strict";o.r(e);var r={data:function(){return{}},methods:{showNext:function(){this.$emit("clicked",1)}}},n=(o(209),o(40)),l=o(64),c=o.n(l),d=o(226),component=Object(n.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("v-icon",{attrs:{id:"right-mid"},on:{click:this.showNext}},[this._v("mdi-chevron-right")])}),[],!1,null,null,null);e.default=component.exports;c()(component,{VIcon:d.a})},209:function(t,e,o){"use strict";var r=o(197);o.n(r).a},210:function(t,e,o){(e=o(47)(!1)).push([t.i,"#right-mid{position:fixed;top:40vh;right:7vw;color:#6e0dcf;font-size:6rem}",""]),t.exports=e},218:function(t,e,o){var content=o(305);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(48).default)("359c64d2",content,!0,{sourceMap:!1})},219:function(t,e,o){var content=o(307);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(48).default)("0a82143a",content,!0,{sourceMap:!1})},238:function(t,e,o){t.exports=o.p+"img/projectset.dab114d.png"},239:function(t,e,o){t.exports=o.p+"img/yoga.d92f2f8.png"},240:function(t,e,o){t.exports=o.p+"img/schooley.e921e96.png"},242:function(t,e,o){"use strict";o.r(e);var r={components:{MobileNav:o(194).default},props:["work"],data:function(){return{pageTitle:"Explore My Work"}},methods:{showNext:function(t){var e=t.target.id;"left"===e&&this.$emit("clicked",-1),"right"===e&&this.$emit("clicked",1)}}},n=(o(304),o(40)),l=o(64),c=o.n(l),d=o(323),h=o(226),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mobile-work"},[r("div",{staticClass:"color-block"},[r("h3",[t._v("Explore My Work")]),t._v(" "),r("div",{staticClass:"slide-show"},[r("v-icon",{staticClass:"mr-4f",attrs:{id:"left"},on:{click:t.showNext}},[t._v("mdi-chevron-left")]),t._v(" "),r("v-icon",{staticClass:"ml-4",attrs:{id:"right"},on:{click:t.showNext}},[t._v("mdi-chevron-right")])],1),t._v(" "),"Project Set"===t.work.title?r("img",{staticClass:"img-move",attrs:{src:o(238),alt:""}}):t._e(),t._v(" "),"Ten Sleep Yoga"===t.work.title?r("img",{staticClass:"img-move",attrs:{src:o(239),alt:""}}):t._e(),t._v(" "),"Schooley and Sons Tackle"===t.work.title?r("img",{staticClass:"img-move",attrs:{src:o(240),alt:""}}):t._e()]),t._v(" "),r("div",{staticClass:"project-info"},[t.work.link.length>1?r("v-btn",{staticClass:"btn",attrs:{depressed:"",height:"55px",color:"#6E0DCF"}},[r("a",{attrs:{target:"_blank",href:t.work.link}},[t._v("Visit Site")])]):t._e(),t._v(" "),r("v-btn",{staticClass:"btn",attrs:{depressed:"",height:"55px",color:"#6E0DCF"}},[r("a",{attrs:{target:"_blank",href:t.work.code}},[t._v("View Code")])]),t._v(" "),r("h3",[t._v(t._s(t.work.title))]),t._v(" "),r("p",[t._v(t._s(t.work.description))])],1),t._v(" "),r("MobileNav")],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{MobileNav:o(194).default}),c()(component,{VBtn:d.a,VIcon:h.a})},243:function(t,e,o){"use strict";o.r(e);var r={data:function(){return{pageTitle:"Explore My Work"}},props:["work"]},n=o(40),l=o(64),c=o.n(l),d=o(323),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"grid-container"},[r("div",{staticClass:"top-left"},[r("Heading",{attrs:{pageTitle:t.pageTitle}})],1),t._v(" "),r("div",{staticClass:"top-right"},[r("div",[r("Nav")],1),t._v(" "),r("div",{staticClass:"work-area"},[r("p",{staticClass:"work-name"},[t._v(t._s(t.work.title))]),t._v(" "),t.work.link.length>1?r("v-btn",{staticClass:"btn",attrs:{depressed:"",height:"55px",color:"#6E0DCF"}},[r("a",{attrs:{target:"_blank",href:t.work.link}},[t._v("Visit Site")])]):t._e(),t._v(" "),r("v-btn",{staticClass:"btn",attrs:{depressed:"",height:"55px",color:"#6E0DCF"}},[r("a",{attrs:{target:"_blank",href:t.work.code}},[t._v("View Code")])])],1)]),t._v(" "),r("div",{staticClass:"footer"},["Project Set"===t.work.title?r("img",{staticClass:"img-move",attrs:{src:o(238),alt:""}}):t._e(),t._v(" "),"Ten Sleep Yoga"===t.work.title?r("img",{staticClass:"img-move",attrs:{src:o(239),alt:""}}):t._e(),t._v(" "),"Schooley and Sons Tackle"===t.work.title?r("img",{staticClass:"img-move",attrs:{src:o(240),alt:""}}):t._e()]),t._v(" "),r("div",{staticClass:"desc"},[r("p",[t._v(t._s(t.work.description))])])])}),[],!1,null,null,null);e.default=component.exports;c()(component,{Heading:o(192).default,Nav:o(193).default}),c()(component,{VBtn:d.a})},303:function(t,e,o){"use strict";var r=o(3),n=o(137)(6),l="findIndex",c=!0;l in[]&&Array(1)[l]((function(){c=!1})),r(r.P+r.F*c,"Array",{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),o(67)(l)},304:function(t,e,o){"use strict";var r=o(218);o.n(r).a},305:function(t,e,o){(e=o(47)(!1)).push([t.i,".slide-show{text-align:center;position:relative;top:2vh}.slide-show #left,.slide-show #right{color:#fff;font-size:3rem}.mobile-work{width:100%}.mobile-work .project-info{margin-bottom:150px;text-align:center;color:#6e0dcf}.mobile-work .project-info .btn{color:#fff;margin-top:15vh;margin-bottom:3vh}.mobile-work .project-info h3{font-size:2.3rem}.mobile-work .project-info p{font-size:1.7rem;width:90vw;padding:20px;border-radius:5px;text-align:center;margin:0 auto;background-color:#fffdf8}.color-block{position:relative;width:100%;background-color:#6e0dcf;height:40vh}.color-block h3{color:#fff;padding-top:5vh;text-align:center}.color-block .img-move{width:90vw;position:absolute;margin-left:5vw;bottom:-10vh}.color-block .heading h3{color:#fff}.color-block .heading .line{background-color:#fff}",""]),t.exports=e},306:function(t,e,o){"use strict";var r=o(219);o.n(r).a},307:function(t,e,o){var r=o(47),n=o(203),l=o(204);e=r(!1);var c=n(l);e.push([t.i,'.mobile-work{display:none}.btn a{color:#fff;width:100%;text-decoration:none}.grid-container{display:grid;grid-template-columns:50% 50%;grid-template-rows:auto 40%;grid-template-areas:"heading main-nav" "footer desc"}.grid-container .top-left{grid-area:heading;position:relative;left:5vw}.grid-container .top-right{display:grid;grid-template-rows:70% auto;grid-area:main-nav}.grid-container .top-right .work-area{color:#6e0dcf;font-size:1.5rem;margin-left:2vw}.grid-container .top-right .work-area .work-name{font-size:3rem}.grid-container .top-right .work-area .btn{color:#fff;width:10vw}.grid-container .footer{background-color:#6e0dcf;grid-area:footer}.grid-container .footer .img-move{width:40vw;position:relative;left:5vw;bottom:20vh;border-radius:7px}.grid-container .desc{grid-area:desc;background-color:#6e0dcf;color:#fff;font-size:1.5rem}.grid-container .desc p{margin-top:3rem;margin-left:2vw;margin-right:20vw}@media only screen and (max-width:1000px){.grid-container{display:none}.mobile-work{display:inline;display:initial}#right-mid{display:none}}@media only screen and (max-width:900px){.header{display:none}.bg-img{background-image:url('+c+");background-size:cover}.discover{top:25vh}.mobile{background-color:#6e0dcf;position:fixed;width:100vw;display:flex;bottom:0;justify-content:space-around;color:#fff;font-size:1.3rem}}",""]),t.exports=e},322:function(t,e,o){"use strict";o.r(e);o(303);var r=o(9),n=o(243),l=(o(242),o(201)),c={data:function(){var t;return{workSlide:[(t={title:"Project Set",source:"/ nuxt/assets/projectset.png",code:"https://github.com/LarsenKyle/Project-Set"},Object(r.a)(t,"code","https://github.com/LarsenKyle/Project-Set"),Object(r.a)(t,"link",""),Object(r.a)(t,"description","Built with Vue and Firebase Project Set is a simple solution for managing route setting programs in a climbing gym "),t),{title:"Ten Sleep Yoga",source:"../assets/yoga.png",link:"https://geoapp-a5e8c.firebaseapp.com/",code:"https://github.com/LarsenKyle/WorlandYoga",description:"This web application is built with Vue. Built for a yoga studio in Tensleep this application keeps track of class attendance and clients. This application generates monthley and tracks yoga passes. Check out the demo version and play around if you like, click the link above "},{title:"Schooley and Sons Tackle",source:"../assets/schooley.png",link:"https://schooleyicetackle.com/",code:"https://github.com/LarsenKyle/schooleyicetackle",description:"An E-commerce website designed for a small tackle company in northern Michigan. This is update to an old site now makes is responsive and much simpler to navigate and purchase. "}],activeSlide:{title:"Project Set",source:"../assets/projectset.png",code:"https://github.com/LarsenKyle/Project-Set",link:"",description:"Built with Vue and Firebase Project Set is a simple solution for managing route setting programs in a climbing gym "}}},components:{WorkShowcase:n.default,Next:l.default},methods:{showNext:function(t){var e=this,o=this.workSlide.length,r=this.workSlide.findIndex((function(t){return t.title===e.activeSlide.title}));o===(r+=t)&&(r=0),-1===r&&(r=2),this.activeSlide=this.workSlide[r]}}},d=(o(306),o(40)),h=o(64),f=o.n(h),v=o(318),component=Object(d.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-layout",[e("WorkShowcase",{key:this.activeSlide.title,attrs:{work:this.activeSlide}}),this._v(" "),e("MobileWork",{attrs:{work:this.activeSlide},on:{clicked:this.showNext}}),this._v(" "),e("Next",{on:{clicked:this.showNext}})],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{WorkShowcase:o(243).default,MobileWork:o(242).default,Next:o(201).default}),f()(component,{VLayout:v.a})}}]);