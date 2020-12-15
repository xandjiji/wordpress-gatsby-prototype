(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{EcD2:function(e,n,t){"use strict";var a=t("q1tI"),r=t.n(a),i=t("Wbzz"),o=t("MUpH");function c(){var e=Object(o.a)(["\n    margin-top: 36px;\n    margin-left: 40px;\n    margin-right: 40px;\n\n    @media(min-width: 768px) {\n        margin-left: 80px;\n        margin-right: 80px;\n    }\n\n    @media(min-width: 1024px) {\n        margin-left: 140px;\n        margin-right: 140px;\n    }\n\n    @media(min-width: 1440px) {\n        margin-right: calc((100vw - 1200px) / 2);\n        margin-left: calc((100vw - 1200px) / 2);\n    }\n\n    @media(min-width: 1880px) {\n        margin-right: calc((100vw - 1600px) / 2);\n        margin-left: calc((100vw - 1600px) / 2);\n    }\n\n    display: flex;\n    align-items: center;\n    border-radius: 5px;\n    border: solid 1px #B4B4B4;\n    box-shadow: 2px 2px 4px 2px rgba(0,0,0,0.14);\n    overflow: hidden;\n\n    label {\n        position: absolute;\n        z-index: -1;\n    }\n\n    input {\n        padding: 6px 16px;\n        width: 100%;\n        box-sizing: border-box;\n        flex-grow: 1;\n        outline: none;\n        border: none;\n    }\n\n    a {\n        display: flex;\n        padding: 7px 12px;\n        background-color: #3F51B5;\n        font-size: 12px;\n        color: #fff;\n\n        svg {\n            margin-left: 6px;\n        }\n    }\n"]);return c=function(){return e},e}var l=t("vOnD").b.div(c()),s=t("jrv4"),u=t.n(s);n.a=function(e){var n=e.onChangeHook,t=Object(a.useState)(null),o=t[0],c=t[1];return r.a.createElement(l,null,r.a.createElement("label",{htmlFor:"term"},"test"),r.a.createElement("input",{id:"term",placeholder:"Search for keywords like: 'photo', 'selfie', 'post'",onChange:function(e){return function(e){c(e.target.value),n&&n(e.target.value)}(e)},onKeyDown:function(e){return function(e){"Enter"===e.key&&o&&Object(i.navigate)("/search?s="+o)}(e)}}),r.a.createElement(i.Link,{to:o?"/search?s="+o:"/"},"Search",r.a.createElement(u.a,null)))}},MkfN:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),r=t.n(a),i=function(){function e(){}return e.prototype.expandToken=function(e){for(var n=[],t="",a=0,r=e.length;a<r;++a)t+=e.charAt(a),n.push(t);return n},e}(),o=function(){function e(){}return e.prototype.sanitize=function(e){return e?e.toLocaleLowerCase().trim():""},e}();function c(e,n){n=n||[];for(var t=e=e||{},a=0;a<n.length;a++)if(null==(t=t[n[a]]))return null;return t}var l=function(){function e(e){this._uidFieldName=e,this._tokenToIdfCache={},this._tokenMap={}}var n=e.prototype;return n.indexDocument=function(e,n,t){this._tokenToIdfCache={};var a,r=this._tokenMap;"object"!=typeof r[e]?r[e]=a={$numDocumentOccurrences:0,$totalNumOccurrences:1,$uidMap:{}}:(a=r[e]).$totalNumOccurrences++;var i=a.$uidMap;"object"!=typeof i[n]?(a.$numDocumentOccurrences++,i[n]={$document:t,$numTokenOccurrences:1}):i[n].$numTokenOccurrences++},n.search=function(e,n){for(var t={},a=0,r=e.length;a<r;a++){var i=e[a],o=this._tokenMap[i];if(!o)return[];if(0===a)for(var c=0,l=(s=Object.keys(o.$uidMap)).length;c<l;c++){t[u=s[c]]=o.$uidMap[u].$document}else{var s;for(c=0,l=(s=Object.keys(t)).length;c<l;c++){var u=s[c];"object"!=typeof o.$uidMap[u]&&delete t[u]}}}var d=[];for(var u in t)d.push(t[u]);var p=this._createCalculateTfIdf();return d.sort((function(t,a){return p(e,a,n)-p(e,t,n)}))},n._createCalculateIdf=function(){var e=this._tokenMap,n=this._tokenToIdfCache;return function(t,a){if(!n[t]){var r=void 0!==e[t]?e[t].$numDocumentOccurrences:0;n[t]=1+Math.log(a.length/(1+r))}return n[t]}},n._createCalculateTfIdf=function(){var e=this._tokenMap,n=this._uidFieldName,t=this._createCalculateIdf();return function(a,r,i){for(var o=0,l=0,s=a.length;l<s;++l){var u,d=a[l],p=t(d,i);p===1/0&&(p=0),u=n instanceof Array?r&&c(r,n):r&&r[n],o+=(void 0!==e[d]&&void 0!==e[d].$uidMap[u]?e[d].$uidMap[u].$numTokenOccurrences:0)*p}return o}},e}(),s=/[^a-zа-яё0-9\-']+/i,u=function(){function e(){}return e.prototype.tokenize=function(e){return e.split(s).filter((function(e){return e}))},e}();function d(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var p=function(){function e(e){if(!e)throw Error("js-search requires a uid field name constructor parameter");this._uidFieldName=e,this._indexStrategy=new i,this._searchIndex=new l(e),this._sanitizer=new o,this._tokenizer=new u,this._documents=[],this._searchableFields=[]}var n,t,a,r=e.prototype;return r.addDocument=function(e){this.addDocuments([e])},r.addDocuments=function(e){this._documents=this._documents.concat(e),this.indexDocuments_(e,this._searchableFields)},r.addIndex=function(e){this._searchableFields.push(e),this.indexDocuments_(this._documents,[e])},r.search=function(e){var n=this._tokenizer.tokenize(this._sanitizer.sanitize(e));return this._searchIndex.search(n,this._documents)},r.indexDocuments_=function(e,n){this._initialized=!0;for(var t=this._indexStrategy,a=this._sanitizer,r=this._searchIndex,i=this._tokenizer,o=this._uidFieldName,l=0,s=e.length;l<s;l++){var u,d=e[l];u=o instanceof Array?c(d,o):d[o];for(var p=0,f=n.length;p<f;p++){var h,m=n[p];if(null!=(h=m instanceof Array?c(d,m):d[m])&&"string"!=typeof h&&h.toString&&(h=h.toString()),"string"==typeof h)for(var x=i.tokenize(a.sanitize(h)),g=0,b=x.length;g<b;g++)for(var v=x[g],y=t.expandToken(v),k=0,E=y.length;k<E;k++){var w=y[k];r.indexDocument(w,u,d)}}}},n=e,(t=[{key:"indexStrategy",set:function(e){if(this._initialized)throw Error("IIndexStrategy cannot be set after initialization");this._indexStrategy=e},get:function(){return this._indexStrategy}},{key:"sanitizer",set:function(e){if(this._initialized)throw Error("ISanitizer cannot be set after initialization");this._sanitizer=e},get:function(){return this._sanitizer}},{key:"searchIndex",set:function(e){if(this._initialized)throw Error("ISearchIndex cannot be set after initialization");this._searchIndex=e},get:function(){return this._searchIndex}},{key:"tokenizer",set:function(e){if(this._initialized)throw Error("ITokenizer cannot be set after initialization");this._tokenizer=e},get:function(){return this._tokenizer}}])&&d(n.prototype,t),a&&d(n,a),e}(),f=t("lhiq"),h=t("Sy0h"),m=t("EcD2"),x=t("OkZq");n.default=function(e){var n=e.pageContext,t=Object(a.useState)(null),i=t[0],o=t[1],c=Object(a.useState)([]),l=c[0],s=c[1],u=Object(a.useState)(null),d=u[0],g=u[1];return Object(a.useEffect)((function(){var e=new URLSearchParams(document.location.search.substring(1)).get("s");o(e);var t=[];n.postData.allPosts.forEach((function(e){t.push(Object.assign({},e.node))}));var a=new p("id");a.addIndex("title"),a.addIndex("content"),a.addDocuments(t),g(a),s(a.search(i))}),[]),Object(a.useEffect)((function(){d&&s(d.search(i))}),[i,d]),r.a.createElement(f.a,null,r.a.createElement("section",null,r.a.createElement(h.a,{text:"Search"}),r.a.createElement(m.a,{onChangeHook:function(e){o(e)}}),r.a.createElement(x.a,{title:i?l.length+" results for '"+i+"'":"Search results",itemArray:l,itemsPerPage:2})))}},OkZq:function(e,n,t){"use strict";var a=t("q1tI"),r=t.n(a),i=t("slu5"),o=t("MUpH"),c=t("vOnD");function l(){var e=Object(o.a)(["\n    padding: 12px 6px;\n\n    .cursor {\n        width: 100%;\n        margin-bottom: 16px;\n        display: flex;\n        align-items: center;\n        justify-content: flex-end;\n        font-size: 12px;\n        letter-spacing: 1px;\n\n        button {\n            padding: 3px 8px;\n            margin-left: 6px;\n            border: none;\n            border-radius: 5px;\n            cursor: pointer;\n            outline: none;\n            box-shadow: 2px 2px 4px 2px rgba(0,0,0,0.14);\n            transition: opacity 0.2s ease-out;\n            transition: box-shadow 0.2s ease-out;\n            user-select: none;\n\n            &:hover {\n                box-shadow: 2px 2px 5px 3px rgba(0,0,0,0.14);\n            }\n\n            &:active {\n                box-shadow: inset 2px 2px rgba(0,0,0,0.14);\n            }\n\n            &.disabled {\n                opacity: 0;\n                pointer-events: none;\n            }\n        }\n    }\n\n    li:not(:last-child) {\n        margin-bottom: 36px;\n    }\n\n    .thumbnail {\n        height: 300px;\n    }\n\n    @media(min-width: 1024px) {\n\n        ul {\n            display: flex;\n            flex-wrap: wrap;\n            justify-content: space-between;\n\n            li {\n                width: calc(50% - 16px);\n\n                &:last-child {\n                    margin-bottom: 36px;\n                }\n\n                &:last-child:nth-child(2n - 1) {\n                    width: 100%;\n                }\n\n                > * {\n                    height: 100%;\n                }\n            }\n        }\n    }\n"]);return l=function(){return e},e}var s=c.b.div(l()),u=t("Wbzz"),d=t("9eSz"),p=t.n(d);function f(){var e=Object(o.a)(["\n    border-radius: 5px;\n    box-shadow: 2px 2px 4px 2px rgba(0,0,0,0.3);\n    overflow: hidden;\n    transition: box-shadow 0.2s ease-out;\n\n    &:hover {\n        box-shadow: 2px 2px 5px 3px rgba(0,0,0,0.4);\n    }\n\n    .thumbnail {\n        position: relative;\n        &::after {\n            content: '';\n            position: absolute;\n            top: 0;\n            left: 0;\n\n            width: 100%;\n            height: 100%;\n            background-color: rgba(0,0,0,0.39);\n        }\n    }\n\n    .post-card-body {\n        padding: 24px 16px;\n\n        .category-wrapper {\n            display: flex;\n            flex-wrap: wrap;\n\n            a {\n                span {\n                    display: block;\n                    padding: 13px 16px;\n                    margin-bottom: 8px;\n                    border-radius: 16px;\n                    background-color: #C5CAE9;\n\n                    font-size: 12px;\n                    color: #000000;\n\n                    transition: box-shadow 0.2s ease-out;\n\n                    &:hover {\n                        box-shadow: 2px 2px 4px 2px rgba(0,0,0,0.14);\n                    }\n                }\n                &:not(:last-child) {\n                    margin-right: 8px;\n                }\n            }\n        }\n\n        .title {\n            margin: 16px 0;\n            color: #3F51B5;\n            font-size: 24px;\n        }\n\n        .excerpt {\n            font-size: 16px;\n        }\n    }\n"]);return f=function(){return e},e}var h=c.b.div(f()),m=t("Yi6P"),x=function(e){var n=e.post,t=n.title,a=n.link,i=n.featured_media,o=n.categories,c=n.excerpt;return r.a.createElement(h,null,i?r.a.createElement(u.Link,{to:Object(m.getPathname)(a)},r.a.createElement(p.a,{className:"thumbnail",fluid:i.localFile.childImageSharp.fluid,title:i.title?i.title:t,alt:i.alt_text?i.alt_text:t})):null,r.a.createElement("div",{className:"post-card-body"},r.a.createElement("div",{className:"category-wrapper"},o?o.map((function(e){return r.a.createElement(u.Link,{to:Object(m.getPathname)(e.link),key:e.id},r.a.createElement("span",{className:"category-item"},e.name))})):null),r.a.createElement(u.Link,{to:Object(m.getPathname)(a)},r.a.createElement("h3",{className:"title"},t)),c?r.a.createElement("div",{className:"excerpt",dangerouslySetInnerHTML:{__html:c}}):null))};n.a=function(e){var n=e.title,t=e.itemArray,o=e.itemsPerPage;(o<1||void 0===o||o>t.length)&&(o=1);var c=function(e){return t.slice(e*o,e*o+o)},l=Object(a.useState)(0),u=l[0],d=l[1],p=Object(a.useState)(c(0)),f=p[0],h=p[1];Object(a.useEffect)((function(){h(c(u))}),[t]),Object(a.useEffect)((function(){h(c(u))}),[u]);var m=function(e){e>=0&&e<t.length/o&&d(e)};return r.a.createElement(i.a,{labelTag:n,container:!0},r.a.createElement(s,null,r.a.createElement("div",{className:"cursor"},u*o+f.length+" of "+t.length+" posts",r.a.createElement("button",{className:0===u?"disabled":"",onClick:function(){return m(u-1)}},"<"),r.a.createElement("button",{className:u+1===Math.ceil(t.length/o)?"disabled":"",onClick:function(){return m(u+1)}},">")),r.a.createElement("ul",null,f.map((function(e){var n,t=(n=e.node?e.node:e).id;return r.a.createElement("li",{key:t},r.a.createElement(x,{post:n}))})))))}},Sy0h:function(e,n,t){"use strict";var a=t("q1tI"),r=t.n(a),i=t("MUpH");function o(){var e=Object(i.a)(["\n    margin-top: 24px;\n\n    font-size: 32px;\n    text-align: center;\n    color: #3F51B5;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n"]);return o=function(){return e},e}var c=t("vOnD").b.h2(o());n.a=function(e){var n=e.text;return r.a.createElement(c,{className:"container"},n)}},jrv4:function(e,n,t){var a=t("q1tI");function r(e){return a.createElement("svg",e,a.createElement("g",null,[a.createElement("g",{key:0},a.createElement("g",null,a.createElement("path",{d:"M508.874,478.708L360.142,329.976c28.21-34.827,45.191-79.103,45.191-127.309c0-111.75-90.917-202.667-202.667-202.667    S0,90.917,0,202.667s90.917,202.667,202.667,202.667c48.206,0,92.482-16.982,127.309-45.191l148.732,148.732    c4.167,4.165,10.919,4.165,15.086,0l15.081-15.082C513.04,489.627,513.04,482.873,508.874,478.708z M202.667,362.667    c-88.229,0-160-71.771-160-160s71.771-160,160-160s160,71.771,160,160S290.896,362.667,202.667,362.667z",fill:"#ffffff","data-original":"#000000",style:{},className:""}))),a.createElement("g",{key:1}),a.createElement("g",{key:2}),a.createElement("g",{key:3}),a.createElement("g",{key:4}),a.createElement("g",{key:5}),a.createElement("g",{key:6}),a.createElement("g",{key:7}),a.createElement("g",{key:8}),a.createElement("g",{key:9}),a.createElement("g",{key:10}),a.createElement("g",{key:11}),a.createElement("g",{key:12}),a.createElement("g",{key:13}),a.createElement("g",{key:14}),a.createElement("g",{key:15})]))}r.defaultProps={version:"1.1",width:"14",height:"14",x:"0",y:"0",viewBox:"0 0 511.999 511.999",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve",className:""},e.exports=r,r.default=r}}]);
//# sourceMappingURL=component---src-templates-search-js-65b7b075fd38204df30b.js.map