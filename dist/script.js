const menuMobile=document.querySelector("#menu-mobile"),overlay=document.querySelector("#overlay"),show=e=>function(){e.classList.add("visible"),e.classList.remove("hidden")},hide=e=>function(){e.classList.add("hidden"),e.classList.remove("visible")};document.querySelector("#toggle-mobile").addEventListener("click",show(overlay)),document.querySelector("#toggle-mobile").addEventListener("click",show(menuMobile)),document.querySelector("#hide-menu").addEventListener("click",hide(overlay)),document.querySelector("#hide-menu").addEventListener("click",hide(menuMobile));
//# sourceMappingURL=script.js.map