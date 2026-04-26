import{a as f,S as m,i}from"./assets/vendor-D1AWmRWP.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const g="55602979-87695c273b240492dacb11b66",h="https://pixabay.com/api/";function y(o){return f.get(h,{params:{key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const l=document.querySelector(".gallery"),p=document.querySelector(".loader"),L=new m(".gallery a",{captionsData:"alt",captionDelay:250});function b(o){const r=o.map(({webformatURL:s,largeImageURL:a,tags:e,likes:t,views:n,comments:u,downloads:d})=>`
      <li class="gallery-item">
        <a href="${a}">
          <img src="${s}" alt="${e}" loading="lazy"/>
        </a>
        <div class="info">
          <p><span>${t}</span><span>Likes</span></p>
          <p><span>${n}</span><span>Views</span></p>
          <p><span>${u}</span><span>Comments</span></p>
          <p><span>${d}</span><span>Downloads</span></p>
        </div>
      </li>`).join("");l.insertAdjacentHTML("beforeend",r),L.refresh()}function v(){l.innerHTML=""}function S(){p.classList.add("is-visible")}function c(){p.classList.remove("is-visible")}const w=document.querySelector(".form");w.addEventListener("submit",o=>{o.preventDefault();const r=o.target["search-text"].value.trim();if(!r){i.warning({message:"Please enter a search term!",position:"topRight"});return}v(),S(),y(r).then(s=>{if(c(),s.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(s.hits)}).catch(s=>{c(),i.error({message:`Something went wrong: ${s.message}`,position:"topRight"})})});
//# sourceMappingURL=index.js.map
