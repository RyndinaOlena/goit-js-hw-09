const t=document.querySelector("[data-start"),e=document.querySelector("[data-stop]");let r=null;t.addEventListener("click",(()=>{r=setInterval((()=>{document.querySelector("body").style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),e.addEventListener("click",(()=>{clearInterval(r)}));
//# sourceMappingURL=01-color-switcher.34561454.js.map
