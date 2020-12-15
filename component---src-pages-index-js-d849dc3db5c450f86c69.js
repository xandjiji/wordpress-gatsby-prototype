(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{EcD2:function(n,e,t){"use strict";var a=t("q1tI"),r=t.n(a),i=t("Wbzz"),l=t("MUpH");function o(){var n=Object(l.a)(["\n    margin-top: 36px;\n    margin-left: 40px;\n    margin-right: 40px;\n\n    @media(min-width: 768px) {\n        margin-left: 80px;\n        margin-right: 80px;\n    }\n\n    @media(min-width: 1024px) {\n        margin-left: 140px;\n        margin-right: 140px;\n    }\n\n    @media(min-width: 1440px) {\n        margin-right: calc((100vw - 1200px) / 2);\n        margin-left: calc((100vw - 1200px) / 2);\n    }\n\n    @media(min-width: 1880px) {\n        margin-right: calc((100vw - 1600px) / 2);\n        margin-left: calc((100vw - 1600px) / 2);\n    }\n\n    display: flex;\n    align-items: center;\n    border-radius: 5px;\n    border: solid 1px #B4B4B4;\n    box-shadow: 2px 2px 4px 2px rgba(0,0,0,0.14);\n    overflow: hidden;\n\n    label {\n        position: absolute;\n        z-index: -1;\n    }\n\n    input {\n        padding: 6px 16px;\n        width: 100%;\n        box-sizing: border-box;\n        flex-grow: 1;\n        outline: none;\n        border: none;\n    }\n\n    a {\n        display: flex;\n        padding: 7px 12px;\n        background-color: #3F51B5;\n        font-size: 12px;\n        color: #fff;\n\n        svg {\n            margin-left: 6px;\n        }\n    }\n"]);return o=function(){return n},n}var c=t("vOnD").b.div(o()),s=t("jrv4"),p=t.n(s);e.a=function(n){var e=n.onChangeHook,t=Object(a.useState)(null),l=t[0],o=t[1];return r.a.createElement(c,null,r.a.createElement("label",{htmlFor:"term"},"test"),r.a.createElement("input",{id:"term",placeholder:"Search for keywords like: 'photo', 'selfie', 'post'",onChange:function(n){return function(n){o(n.target.value),e&&e(n.target.value)}(n)},onKeyDown:function(n){return function(n){"Enter"===n.key&&l&&Object(i.navigate)("/search?s="+l)}(n)}}),r.a.createElement(i.Link,{to:l?"/search?s="+l:"/"},"Search",r.a.createElement(p.a,null)))}},OkZq:function(n,e,t){"use strict";var a=t("q1tI"),r=t.n(a),i=t("slu5"),l=t("MUpH"),o=t("vOnD");function c(){var n=Object(l.a)(["\n    padding: 12px 6px;\n\n    .cursor {\n        width: 100%;\n        margin-bottom: 16px;\n        display: flex;\n        align-items: center;\n        justify-content: flex-end;\n        font-size: 12px;\n        letter-spacing: 1px;\n\n        button {\n            padding: 3px 8px;\n            margin-left: 6px;\n            border: none;\n            border-radius: 5px;\n            cursor: pointer;\n            outline: none;\n            box-shadow: 2px 2px 4px 2px rgba(0,0,0,0.14);\n            transition: opacity 0.2s ease-out;\n            transition: box-shadow 0.2s ease-out;\n            user-select: none;\n\n            &:hover {\n                box-shadow: 2px 2px 5px 3px rgba(0,0,0,0.14);\n            }\n\n            &:active {\n                box-shadow: inset 2px 2px rgba(0,0,0,0.14);\n            }\n\n            &.disabled {\n                opacity: 0;\n                pointer-events: none;\n            }\n        }\n    }\n\n    li:not(:last-child) {\n        margin-bottom: 36px;\n    }\n\n    .thumbnail {\n        height: 300px;\n    }\n\n    @media(min-width: 1024px) {\n\n        ul {\n            display: flex;\n            flex-wrap: wrap;\n            justify-content: space-between;\n\n            li {\n                width: calc(50% - 16px);\n\n                &:last-child {\n                    margin-bottom: 36px;\n                }\n\n                &:last-child:nth-child(2n - 1) {\n                    width: 100%;\n                }\n\n                > * {\n                    height: 100%;\n                }\n            }\n        }\n    }\n"]);return c=function(){return n},n}var s=o.b.div(c()),p=t("Wbzz"),u=t("9eSz"),m=t.n(u);function x(){var n=Object(l.a)(["\n    border-radius: 5px;\n    box-shadow: 2px 2px 4px 2px rgba(0,0,0,0.3);\n    overflow: hidden;\n    transition: box-shadow 0.2s ease-out;\n\n    &:hover {\n        box-shadow: 2px 2px 5px 3px rgba(0,0,0,0.4);\n    }\n\n    .thumbnail {\n        position: relative;\n        &::after {\n            content: '';\n            position: absolute;\n            top: 0;\n            left: 0;\n\n            width: 100%;\n            height: 100%;\n            background-color: rgba(0,0,0,0.39);\n        }\n    }\n\n    .post-card-body {\n        padding: 24px 16px;\n\n        .category-wrapper {\n            display: flex;\n            flex-wrap: wrap;\n\n            a {\n                span {\n                    display: block;\n                    padding: 13px 16px;\n                    margin-bottom: 8px;\n                    border-radius: 16px;\n                    background-color: #C5CAE9;\n\n                    font-size: 12px;\n                    color: #000000;\n\n                    transition: box-shadow 0.2s ease-out;\n\n                    &:hover {\n                        box-shadow: 2px 2px 4px 2px rgba(0,0,0,0.14);\n                    }\n                }\n                &:not(:last-child) {\n                    margin-right: 8px;\n                }\n            }\n        }\n\n        .title {\n            margin: 16px 0;\n            color: #3F51B5;\n            font-size: 24px;\n        }\n\n        .excerpt {\n            font-size: 16px;\n        }\n    }\n"]);return x=function(){return n},n}var d=o.b.div(x()),g=t("Yi6P"),f=function(n){var e=n.post,t=e.title,a=e.link,i=e.featured_media,l=e.categories,o=e.excerpt;return r.a.createElement(d,null,i?r.a.createElement(p.Link,{to:Object(g.getPathname)(a)},r.a.createElement(m.a,{className:"thumbnail",fluid:i.localFile.childImageSharp.fluid,title:i.title?i.title:t,alt:i.alt_text?i.alt_text:t})):null,r.a.createElement("div",{className:"post-card-body"},r.a.createElement("div",{className:"category-wrapper"},l?l.map((function(n){return r.a.createElement(p.Link,{to:Object(g.getPathname)(n.link),key:n.id},r.a.createElement("span",{className:"category-item"},n.name))})):null),r.a.createElement(p.Link,{to:Object(g.getPathname)(a)},r.a.createElement("h3",{className:"title"},t)),o?r.a.createElement("div",{className:"excerpt",dangerouslySetInnerHTML:{__html:o}}):null))};e.a=function(n){var e=n.title,t=n.itemArray,l=n.itemsPerPage;(l<1||void 0===l||l>t.length)&&(l=1);var o=function(n){return t.slice(n*l,n*l+l)},c=Object(a.useState)(0),p=c[0],u=c[1],m=Object(a.useState)(o(0)),x=m[0],d=m[1];Object(a.useEffect)((function(){d(o(p))}),[t]),Object(a.useEffect)((function(){d(o(p))}),[p]);var g=function(n){n>=0&&n<t.length/l&&u(n)};return r.a.createElement(i.a,{labelTag:e,container:!0},r.a.createElement(s,null,r.a.createElement("div",{className:"cursor"},p*l+x.length+" of "+t.length+" posts",r.a.createElement("button",{className:0===p?"disabled":"",onClick:function(){return g(p-1)}},"<"),r.a.createElement("button",{className:p+1===Math.ceil(t.length/l)?"disabled":"",onClick:function(){return g(p+1)}},">")),r.a.createElement("ul",null,x.map((function(n){var e,t=(e=n.node?n.node:n).id;return r.a.createElement("li",{key:t},r.a.createElement(f,{post:e}))})))))}},RXBc:function(n,e,t){"use strict";t.r(e);var a=t("q1tI"),r=t.n(a),i=t("Wbzz"),l=t("lhiq"),o=t("Sy0h"),c=t("EcD2"),s=t("OkZq");e.default=function(){var n=Object(i.useStaticQuery)("4060692508");return r.a.createElement(l.a,null,r.a.createElement(o.a,{text:"Home"}),r.a.createElement(c.a,null),r.a.createElement(s.a,{title:"Posts",itemArray:n.allWordpressPost.edges,itemsPerPage:2}))}},Sy0h:function(n,e,t){"use strict";var a=t("q1tI"),r=t.n(a),i=t("MUpH");function l(){var n=Object(i.a)(["\n    margin-top: 24px;\n\n    font-size: 32px;\n    text-align: center;\n    color: #3F51B5;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n"]);return l=function(){return n},n}var o=t("vOnD").b.h2(l());e.a=function(n){var e=n.text;return r.a.createElement(o,{className:"container"},e)}},jrv4:function(n,e,t){var a=t("q1tI");function r(n){return a.createElement("svg",n,a.createElement("g",null,[a.createElement("g",{key:0},a.createElement("g",null,a.createElement("path",{d:"M508.874,478.708L360.142,329.976c28.21-34.827,45.191-79.103,45.191-127.309c0-111.75-90.917-202.667-202.667-202.667    S0,90.917,0,202.667s90.917,202.667,202.667,202.667c48.206,0,92.482-16.982,127.309-45.191l148.732,148.732    c4.167,4.165,10.919,4.165,15.086,0l15.081-15.082C513.04,489.627,513.04,482.873,508.874,478.708z M202.667,362.667    c-88.229,0-160-71.771-160-160s71.771-160,160-160s160,71.771,160,160S290.896,362.667,202.667,362.667z",fill:"#ffffff","data-original":"#000000",style:{},className:""}))),a.createElement("g",{key:1}),a.createElement("g",{key:2}),a.createElement("g",{key:3}),a.createElement("g",{key:4}),a.createElement("g",{key:5}),a.createElement("g",{key:6}),a.createElement("g",{key:7}),a.createElement("g",{key:8}),a.createElement("g",{key:9}),a.createElement("g",{key:10}),a.createElement("g",{key:11}),a.createElement("g",{key:12}),a.createElement("g",{key:13}),a.createElement("g",{key:14}),a.createElement("g",{key:15})]))}r.defaultProps={version:"1.1",width:"14",height:"14",x:"0",y:"0",viewBox:"0 0 511.999 511.999",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve",className:""},n.exports=r,r.default=r}}]);
//# sourceMappingURL=component---src-pages-index-js-d849dc3db5c450f86c69.js.map