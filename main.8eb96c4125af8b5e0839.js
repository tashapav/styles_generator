!function(){"use strict";var t,o={1137:function(t,o,e){var n,r=e(5638);function i(t){var o,e,i,c=t.font_size,a=t.offset_x,l=t.offset_y,s=t.blur,f=t.opacity,u=t.color,v=t.text_color,x=u[1]+""+u[2],p=u[3]+""+u[4],b=u[5]+""+u[6],d=a+"px "+l+"px "+s+"px "+("rgba("+parseInt(x,16)+", "+parseInt(p,16)+", "+parseInt(b,16)+", "+f+")");r("h1").css("text-shadow",d),r("#gradient").is(":checked")?(o=r("#corner").val(),e=r("#color-box1").val(),i=r("#color-box2").val(),n="linear-gradient("+o+"deg, "+e+", "+i+")",r("h1").css({background:n,"-webkit-background-clip":"text","-webkit-text-fill-color":"transparent"}),r("#result").val("font-size: "+c+"px;\nbackground: "+n+";\n-webkit-background-clip: text;\n-webkit-text-fill-color: transparent;\ntext-shadow: "+d+";")):(r("h1").css("color",v),r("h1").css({background:"","-webkit-background-clip":"","-webkit-text-fill-color":""}),r("#result").val("font-size: "+c+"px;\ncolor: "+v+";\ntext-shadow: "+d+";"))}i({font_size:50,offset_x:4,offset_y:-1,blur:5,opacity:1,color:"#00ff00",text_color:"#000000"}),r(document).on("input change","input",(function(){var t=r("#font-size").val(),o=r("#offset_x").val(),e=r("#offset_y").val(),n=r("#blur").val(),c=r("#opacity").val(),a=r("#color-box").val(),l=r("#text-color").val();r("#gradient").is(":checked")?r(".hidden-gradient").css("visibility","visible"):r(".hidden-gradient").css("visibility","hidden"),r("h1").css("font-size",t+"px"),i({font_size:t,offset_x:o,offset_y:e,blur:n,opacity:c,color:a,text_color:l})})),r(".btn-text").on("click",(function(){var t=r("#main-text").val();""===t?r("#tryOnText").text("Text generator"):(r("#tryOnText").text(t),r("#main-text").val(""))}))}},e={};function n(t){var r=e[t];if(void 0!==r)return r.exports;var i=e[t]={exports:{}};return o[t].call(i.exports,i,i.exports,n),i.exports}n.m=o,t=[],n.O=function(o,e,r,i){if(!e){var c=1/0;for(f=0;f<t.length;f++){e=t[f][0],r=t[f][1],i=t[f][2];for(var a=!0,l=0;l<e.length;l++)(!1&i||c>=i)&&Object.keys(n.O).every((function(t){return n.O[t](e[l])}))?e.splice(l--,1):(a=!1,i<c&&(c=i));if(a){t.splice(f--,1);var s=r();void 0!==s&&(o=s)}}return o}i=i||0;for(var f=t.length;f>0&&t[f-1][2]>i;f--)t[f]=t[f-1];t[f]=[e,r,i]},n.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},function(){var t={179:0};n.O.j=function(o){return 0===t[o]};var o=function(o,e){var r,i,c=e[0],a=e[1],l=e[2],s=0;if(c.some((function(o){return 0!==t[o]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(l)var f=l(n)}for(o&&o(e);s<c.length;s++)i=c[s],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(f)},e=self.webpackChunk=self.webpackChunk||[];e.forEach(o.bind(null,0)),e.push=o.bind(null,e.push.bind(e))}(),n.O(void 0,[453],(function(){return n(1202)}));var r=n.O(void 0,[453],(function(){return n(1137)}));r=n.O(r)}();