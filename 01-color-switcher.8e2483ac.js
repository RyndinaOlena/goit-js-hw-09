const e=document.querySelector("[data-start"),t=document.querySelector("[data-stop]");let d=null;function a(){t.setAttribute("disabled","disabled")}a(),e.addEventListener("click",(()=>{e.setAttribute("disabled","disabled"),t.removeAttribute("disabled","disabled"),d=setInterval((()=>{document.querySelector("body").style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),t.addEventListener("click",(()=>{clearInterval(d),a(),e.removeAttribute("disabled","disabled")}));
//# sourceMappingURL=01-color-switcher.8e2483ac.js.map