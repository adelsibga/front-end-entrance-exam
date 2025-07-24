(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();const _={profile:{imgUrl:"./images/profileImg.png",alt:"profileImg"},name:{pretitle:"Hello 👋🏻 I’m",title:"Karthik SR",subtitle:"UX/UI Designer"},languages:{title:"Languages",list:[{label:"English",level:100},{label:"Malayalam",level:100},{label:"Hindi",level:77}]},experience:{title:"Experience",list:[{date:"Sep. 2021 - Jun. 2023",position:"Legal Assistant",format:"Law Firm | Intern",description:["Provide administrative support to lawyer and enhance office effectiveness","Handle communication with clients, witnesses etc.","prepare case briefs and summarize depositions, interrogatories and testimony"]},{date:"2017 - Present",position:"Graphic / Web designer",format:"Freelance",description:["Development of internal projects from scratch, product design of brands","Landing page, webapps and hybrid apps","Coordinating with outside agencies, art services, web designer, marketing, printers, and colleagues as necessary."]},{date:"Jun. 2023 - Present",position:"Marketing Manager",format:"Pankayam | Full-time",description:["Strategy development and planning of campaigns that promote the business and generate genuine traffic","SEO Content Creation for Blogs, Website, Social media"]}]},tools:{title:"Tools",list:[{category:"design",icons:["logoFigma.svg","adobePhotoshop.svg","adobeIllustrator.svg","adobePremiere.svg","logoNotion.svg","logoMeet.svg"]},{category:"no-code",icons:["logoZapìer.svg","logoWebflow.svg","logoFramer.svg","logoWordpress.svg"]},{category:"artificial intelligence",icons:["logoChatGPT.svg","logoCopilot.svg","logoMidjourney.svg"]}]},education:{title:"Education",list:[{date:"2017",title:"Graphic design",tags:["branding","web","illustration","adobe"],place:"Coursera"},{date:"2017 - 2022",title:"Law",tags:["law","legalStudies","contracts","internationalLaws"],place:"University of Kerala"},{date:"2023",title:"UI/UX",tags:["UX","UI","research","DesignSystem","Ui","wireframing","figma","Ux"],place:"Coursera"}]},interests:{title:"Interests",list:["branding","design","photography","artificial intelligence","illustration","typography","social networks","research","dron pilot","games"]},contact:{title:"Let´s chat! I´m ready to work on exciting projects",email:"srkarthik.designscape@gmail.com"}};function v(){const e=document.querySelectorAll("[contenteditable]");e.forEach(o=>{const n=o.dataset.key,l=localStorage.getItem(n);l&&(o.innerHTML=l)}),e.forEach(o=>{o.addEventListener("blur",()=>{const n=o.dataset.key,l=o.innerHTML.trim();l?localStorage.setItem(n,l):localStorage.removeItem(n)}),o.addEventListener("keydown",n=>{n.key==="Enter"&&(n.preventDefault(),o.blur())})})}const $="modulepreload",w=function(e,o){return new URL(e,o).href},y={},h=function(o,n,l){let t=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),c=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));t=Promise.all(n.map(d=>{if(d=w(d,l),d in y)return;y[d]=!0;const a=d.endsWith(".css"),p=a?'[rel="stylesheet"]':"";if(!!l)for(let g=i.length-1;g>=0;g--){const u=i[g];if(u.href===d&&(!a||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${p}`))return;const r=document.createElement("link");if(r.rel=a?"stylesheet":$,a||(r.as="script",r.crossOrigin=""),r.href=d,c&&r.setAttribute("nonce",c),document.head.appendChild(r),a)return new Promise((g,u)=>{r.addEventListener("load",g),r.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${d}`)))})}))}return t.then(()=>o()).catch(i=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i})};async function k(e){const l=document.querySelector(e);l&&l.addEventListener("click",async()=>{try{const t=(await h(()=>import("./html2canvas.esm-w_6Qf1R6.js"),[],import.meta.url)).default,{jsPDF:i}=await h(()=>import("./jspdf.es.min-P9rsC9ga.js").then(b=>b.j),[],import.meta.url),s=document.getElementById("app"),c=s.scrollHeight,d={height:s.style.height,overflow:s.style.overflow};s.style.height=`${c}px`,s.style.overflow="hidden";const a=await t(s,{scale:2,logging:!0,useCORS:!0,allowTaint:!0,windowHeight:c,backgroundColor:"#ffffff"});s.style.height=d.height,s.style.overflow=d.overflow;const p=new i("p","mm","a4"),m=a.toDataURL("image/png"),r=210,g=a.height*r/a.width,u=297;let f=0;for(p.addImage(m,"PNG",0,-f,r,g);f+u<g;)f+=u,p.addPage(),p.addImage(m,"PNG",0,-f,r,g);p.save("resume.pdf")}catch(t){console.error("PDF Export Error:",t),alert(`PDF Export Failed: ${t.message}`)}})}function x(){return`
    <button id='save-pdf'>Save PDF</button>
  `}function E(e){return`
    <img
      class='profile block block_profile'
      src='${e.imgUrl}'
      alt='${e.alt}'
    >`}function I(e){return`
    <div class='name block block_name'>
      <p class='name__pretitle text-5 f-w-500' contenteditable data-key='name.pretitle'>
        ${e.pretitle}
      </p>
      <h1 class='name__title text-7 f-w-600' style='--line-clamp: 2' contenteditable data-key='name.title'>
          ${e.title}  
      </h1>
      <p class='name__subtitle text-6 f-w-500' style='--line-clamp: 2' contenteditable data-key='name.subtitle'>
        ${e.subtitle}
      </p>
    </div>`}function L(e){const o=e.list.map((n,l)=>`
      <li 
        class='languages__list-item'
      >
        <span 
          class='text-5 f-w-500' 
          contenteditable 
          data-key='${`languages.item.${l}`}.label'
        >
          ${n.label}
        </span>
        <div class='languages__list-item-level' style='--lang-level: ${n.level}'></div>
      </li>
    `).join("");return`
    <div class='languages block block_languages'>
      <h2 class='languages__title text-7 f-w-500' contenteditable data-key='languages.title'>
        ${e.title?e.title:"Languages"}
      </h2>
      <ul class='languages__list list-type-none'>
        ${o}
      </ul>
    </div>`}function S(e){var l;const n=((l=e==null?void 0:e.list)==null?void 0:l.length)>0?[...e.list].reverse().map((t,i)=>{var p,m,r,g;const s=Object.keys(t).length===0,c=i===0,a=`experience.item.${e.list.length-1-i}`;return s?"":`
          <li class='experience__list-item list-item ${c?"experience__list-item_recent":""}'>
            <div class='list-item__header header'>
              ${(p=t.date)!=null&&p.length?`
                <span class='header__date f-w-500 text-4' contenteditable data-key='${a}.date'>
                  ${t.date}
                </span>
              `:""}
              ${c?`
                <span class='header__badge f-w-500 text-4' contenteditable data-key='${a}.badge'>
                  most recent
                </span>
              `:""}
            </div>
            <div class='list-item__body body'>
              <div class='body__description-left'>
                ${(m=t.position)!=null&&m.length?`
                  <h3
                    class='body__position text-5 f-w-500'
                    contenteditable
                    data-key='${a}.position'
                    style='--line-clamp: 2'
                  >
                    ${t.position}
                  </h3>
                `:""}
                ${(r=t.format)!=null&&r.length?`
                  <p
                    class='body__format ${c?"body__format_recent":""} text-4 f-w-400'
                    contenteditable
                    data-key='${a}.format'
                    style='--line-clamp: 2'
                  >
                  ${t.format}
                </p>
                `:""}       
              </div>
              ${(g=t.description)!=null&&g.length?`
                <ul class='body__description-list'>
                  ${t.description.map((u,f)=>`
                    <li
                      class='body__description-list-item text-4 f-w-400'
                      contenteditable 
                      data-key='${a}.description.${f}'
                      style='--line-clamp: 10'
                    >
                      ${u}
                    </li>
                  `).join("")}
                </ul>
              `:""}
            </div>
          </li>
        `}).join(""):"<li class='experience__list-item experience__list-item_empty-experience'>No experience</li>";return`
    <div class='experience block block_experience'>
      <h2 
        class='experience__title text-7 f-w-500' 
        contenteditable 
        data-key='experience.title'
      >
        ${e.title?e.title:"Experience"}
      </h2>
      ${n?`
        <ul class='experience__list'>
          ${n}
        </ul>
      `:""}
    </div>
  `}function P(e){var t;const o="./images/tools/",n=(i,s)=>`
    <li class='tools__list-item'>
      <img class='tools__list-item-img' 
         src='${o}${i}' 
         alt='${i.replace(".svg","")} icon'
         loading='lazy'
         data-index='${s}'
       >  
    </li>
  `,l=(i,s)=>{const{category:c,icons:d=[]}=i;return`
      <div class='tools__list-wrapper'>
        ${c?`
          <p class='tools__list-category f-w-500' 
             contenteditable 
             data-key='tools.list.${s}.category'
          >
            ${c}
          </p>
        `:""}
        <ul class='list-type-none tools__list'>
          ${d.map((a,p)=>n(a,p)).join("")}
        </ul>
      </div>
    `};return`
    <div class='tools block block_tools'>
        <h2 
          class='tools__title text-7 f-w-500'
          contenteditable 
          data-key='tools.title'
        >
        ${e.title?e.title:"Tools"}
        </h2>
        <div class='tools__wrapper'>
          ${(t=e.list)!=null&&t.length?e.list.map((i,s)=>l(i,s)).join(""):'<p class="tools__empty text-4 f-w-500">No tools available</p>'}
      </div>
    </div>
  `}function C(e){var l;const n=((l=e==null?void 0:e.list)==null?void 0:l.length)>0?[...e.list].reverse().map((t,i)=>{var p,m,r,g;const s=Object.keys(t).length===0,c=i===0,a=`education.item.${e.list.length-1-i}`;return s?"":`
          <li class='education__list-item list-item ${c?"list-item_recent":""}'>
            ${(p=t.date)!=null&&p.length?`
              <span 
                class='list-item__date text-5 f-w-500 ${c?"list-item__date_recent":""}' 
                contenteditable 
                data-key='${a}.date'
              >
                ${t.date}
              </span>
            `:""}
            ${(m=t.title)!=null&&m.length?`
              <h3 
                class='list-item__title text-5 f-w-500'
                contenteditable
                data-key='${a}.title'
              >
                ${t.title}
              </h3>
            `:""}
            ${(r=t.tags)!=null&&r.length?`
              <ul class='list-item__tag-list tag-list list-type-none'>
                ${t.tags.map((u,f)=>`
                  <li 
                    class='tag-list__item text-4 f-w-400 ${c?"tag-list__item_recent":""}'
                    contenteditable
                    data-key='${a}.tags.${f}'
                  >
                    #${u}
                  </li>
                `).join("")}
              </ul>
            `:""}
            ${(g=t.place)!=null&&g.length?`
              <span 
                class='list-item__place text-4 f-w-400'
                contenteditable
                data-key='${a}.place'
              >
                ${t.place}
              </span>
            `:""}
          </li>
        `}).join(""):"<li class='education__list-item education__list-item_empty text-4 f-w-500'>No education</li>";return`
    <div class='education block block_education'>
      <h2
        class='education__title text-7 f-w-500'
        contenteditable 
        data-key='education.title'
      >
        ${e.title?e.title:"Education"}      
      </h2>
      ${n?`
        <ul class='education__list list-type-none'>
          ${n}
        </ul>
      `:""}
    </div>
  `}function T(e){var l;const o=((l=e==null?void 0:e.list)==null?void 0:l.length)>0,n=(t,i)=>`
      <li
        class='interests__list-item text-5 f-w-400'
        contenteditable
        data-key='interests.item.${i}'
      >
        ${t}
      </li>
    `;return`
    <div class='interests block block_interests'>
      <h2 class='interests__title text-7 f-w-500' contenteditable data-key='interests.title'>
        ${e.title?e.title:"Interests"}
      </h2>
      <ul class='interests__list list-type-none'>
      ${o?e.list.map((t,i)=>n(t,i)).join(""):'<li class="interests__list-item interests__list-item_empty text-5 f-w-400">No interests</li>'}
      </ul>
    </div>
  `}function D(e){return`
    <div class='contact block block_contact'>
      <h2 
        class='contact__title text-7 f-w-500'
        contenteditable
        data-key='contact.title'
        style='--line-clamp: 3;'
      >
        ${e.title?e.title:"Let´s chat! I´m ready to work on exciting projects"}
      </h2>
      ${e.email?`
        <span 
          class='contact__email text-5 f-w-400'
          contenteditable
          data-key='contact.email'
        >
          ${e.email}
        </span>
      `:""}
    </div>
  `}function H(){document.addEventListener("click",e=>{const o=e.target.closest("[contenteditable]");if(!o)return;const n=document.createElement("span");n.classList.add("ripple"),o.appendChild(n);const l=o.getBoundingClientRect(),t=Math.max(l.width,l.height),i=e.clientX-l.left-t/2,s=e.clientY-l.top-t/2;n.style.width=n.style.height=`${t}px`,n.style.left=`${i}px`,n.style.top=`${s}px`,n.style.setProperty("--scale","1"),n.style.opacity="0",setTimeout(()=>{n.remove()},300)})}document.addEventListener("DOMContentLoaded",()=>{document.querySelector("#menu").innerHTML=x(),document.querySelector("#app").innerHTML=[E(_.profile),I(_.name),L(_.languages),S(_.experience),P(_.tools),C(_.education),T(_.interests),D(_.contact)].join(""),H(),v(),k("#save-pdf")});export{h as _};
