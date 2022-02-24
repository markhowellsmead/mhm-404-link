/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/block.js ***!
  \**********************/
document.addEventListener("DOMContentLoaded", () => {
  const blocks = document.querySelectorAll(".wp-block-mhm-link-404");

  if (!!blocks && blocks.length) {
    blocks.forEach(block => {
      const link_holder = block.querySelector(".wp-block-mhm-link-404__linkholder");

      if (!!link_holder) {
        const domain = link_holder.dataset.domain.replace(/\/$/, ""),
              link = document.createElement("a");
        link.classList.add("wp-block-mhm-link-404__link");
        const url = window.location.href.replace(window.location.origin, domain, window.location.href);
        link.textContent = url;
        link.setAttribute("href", url);
        link_holder.appendChild(link);
      }
    });
  }
});
/******/ })()
;
//# sourceMappingURL=block.js.map