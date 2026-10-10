const IMG={
 "bif_cover": "assets/bif_cover.jpg",
 "bif_research": "assets/bif_research.jpg",
 "bif_final": "assets/bif_final.jpg",
 "bif_grad": "assets/bif_grad.jpg",
 "tp_cover": "assets/tp_cover.jpg",
 "tp_ui": "assets/tp_ui.jpg",
 "tp_final": "assets/tp_final.jpg",
 "bses_cover": "assets/bses_cover.jpg",
 "bses_ba": "assets/bses_ba.jpg",
 "bses_pay": "assets/bses_pay.jpg",
 "j1": "assets/j1.jpg",
 "j2": "assets/j2.jpg",
 "j3": "assets/j3.jpg",
 "j4": "assets/j4.jpg",
 "j5": "assets/j5.jpg",
 "j6": "assets/j6.jpg",
 "j7": "assets/j7.jpg",
 "j8": "assets/j8.jpg",
 "j9": "assets/j9.jpg",
 "j10": "assets/j10.jpg",
 "p1": "assets/p1.jpg",
 "p2": "assets/p2.jpg",
 "p3": "assets/p3.jpg",
 "p4": "assets/p4.jpg",
 "p5": "assets/p5.jpg",
 "p6": "assets/p6.jpg",
 "p7": "assets/p7.jpg",
 "p8": "assets/p8.jpg",
 "p9": "assets/p9.jpg"
};
/* ADD NEW WORK: copy one object in P, set tag ('ux' or 'art'), cover (an IMG key or any image URL), meta, steps, out and gal. */
const P=[
{slug:'bias-in-focus',tag:'ux',title:'Bias in Focus',year:'2025',type:'Research-led interactive archive',cover:IMG.bif_cover,lay:'gr',
 intro:'A research-led archive that shows how generative AI embeds and amplifies visual bias. 200 images, tagged across 25 bias categories and 5 parameters, become a gesture-controlled gallery you explore with your hand.',
 meta:[['Role','Research, design, front-end build'],['Duration','8 months (5 research, 3 execution)'],['Tools','HTML, CSS, JavaScript, MediaPipe, Three.js'],['Deliverables','Website, AR posters, assessment cards']],
 facts:[['200','AI images tagged'],['25','bias categories'],['26','participants observed'],['8','AI experts interviewed']],
 h:'Approach',steps:[['The problem','In a 26-person study, everyone judged AI images on looks and missed the bias inside them.'],['Research','Expert interviews, a Stable Diffusion experiment and an affinity map of 38 bias categories shaped the framework.'],['Build','A single-page site with hand tracking, a live minimap, image cards with tagged biases and a raw versus labelled toggle.']],
 out:['Awarded "Design for Innovation" at the graduation show','Live website, five AR posters and bias assessment cards','Presented to industry experts and visitors'],links:[['Visit live site','https://biasinfocus.vercel.app/']],
 gal:[['bif_research','Research: observing participants, expert insights and a Stable Diffusion experiment on gender and colour bias.','f'],['bif_final','The final home page, where tags cluster images to reveal overlapping biases.'],['bif_grad','Presented at the graduation exhibition.']]},
{slug:'tasty-pixel',tag:'ux',title:'Tasty Pixel',year:'2024',type:'Live client website',cover:IMG.tp_cover,lay:'gr',
 intro:'End-to-end website for TastyPixel, a Veeba subsidiary selling convenient, flavour-led food to B2C and B2B users, delivered in a real client setting.',
 meta:[['Role','Research, UI design, prototype, client communication'],['Duration','4 weeks'],['Tools','Figma, Illustrator, Photoshop, Miro'],['Type','Live client project']],
 h:'Approach',steps:[['Research','Studied Veeba\'s brand voice and market patterns: real food photography, bold colour and clear categories build trust.'],['Structure','Mapped the pages and home page flow, then iterated layouts by hand before moving to Figma.'],['Interface','Tested icon against photo categories; the client chose colour blocks. Added sliding categories and hover tilts.']],
 out:['Site live at tastypixel.co','Development-ready Figma prototype','Managed client discussions and approvals'],links:[['Visit live site','https://tastypixel.co/']],
 gal:[['tp_ui','Interface design: category pages and the Our Range interaction.','f'],['tp_final','The final responsive website on desktop and mobile.','f']]},
{slug:'bses-redesign',tag:'ux',title:'BSES Redesign',year:'2024',type:'Self-initiated website redesign',cover:IMG.bses_cover,lay:'gr',
 intro:'A redesign of the website for BSES Rajdhani, a major Delhi electricity provider, to make payments and key services easier for residential, commercial and industrial users.',
 meta:[['Role','UX research, information architecture, UI design'],['Duration','1 month (15 days research, 12 design)'],['Tools','Figma, Illustrator, Photoshop, Miro'],['Type','Self-initiated project']],
 h:'Approach',steps:[['Research','Interviews, a site map audit, SWOT and MoSCoW prioritisation exposed repeated pages and clutter.'],['Architecture','Rebuilt the home page around six icon-led services instead of an overcrowded layout.'],['Design','Simplified payments with a billing cycle view, quick pay and consistent layouts.']],
 out:['Simplified navigation reduced content overload','Clear service categories improved task completion','Consistent layout improved readability'],links:[],
 gal:[['bses_ba','Before and after: from a crowded portal to a clear services page.','f'],['bses_pay','The payments flow with billing cycle and quick pay.','f']]},
{slug:'ahmedabad-journal',tag:'art',title:'Ahmedabad Journal',year:'2024',type:'Travel sketchbook',cover:IMG.j5,lay:'gr',
 intro:'A sketchbook kept on a heritage study trip across Gujarat: stepwells, sun temples, old-city pols and midnight street food, drawn and written the same day. Slow looking, with a pen in hand.',
 meta:[['Medium','Ink, pencil, markers, collage'],['Trip','Study trip, February 2024'],['Places','Adalaj, Modhera, Lothal, Ahmedabad'],['Role','Illustration and writing']],
 h:'How it was made',steps:[['Look closely','Carvings, pillars, balconies and doors drawn in ink and pencil to understand how each place is built.'],['Write alongside','Every drawing sits with a handwritten note: a guide\'s story, a legend, or how the place felt.'],['Collect the city','Old-city history, the pol system, wooden braces that help houses survive earthquakes, pressed flowers and food markets after dark.']],
 out:['A visual record of heritage, craft and everyday life in Ahmedabad','A habit of slow observation that carries into my research work'],links:[],
 gal:[['j1','Sun Temple signage, carved stone fragments and stories in the stones.','f'],['j2','The legend of Modheraa and the Chaulukya-style Sun Temple.'],['j3','The kund, and the carved Sabhamandapa ceiling.'],['j4','The Gufa by M.F. Husain and Doshi, with postcards and old-city windows.','f'],['j5','Manik Chowk after midnight, and flowers pressed from Sabarmati Ashram.','f'],['j6','Heritage walk, Mandir to Masjid, 26 February: chai, carved brackets and a stone-and-wood facade.'],['j7','Balconies, doors, the history of Ahmedabad and pol life.'],['j8','Warli-style art, Gujarati lettering, why wood sits inside walls, and Harkunvar Sethani ni Haveli.','f'],['j9','Pillar carvings and the five-storey depth of Adalaj stepwell.'],['j10','Floral motifs, the stepwell tombs and the legend of Rudabai.']]},
{slug:'okhla-frames',tag:'art',title:'Okhla Frames',year:'Delhi',type:'Black and white street photography',cover:IMG.p4,lay:'ms',
 intro:'Black and white portraits and street scenes from walks through Okhla in Delhi. The frames stay with people in the middle of their day: resting, working, playing, looking back.',
 meta:[['Location','Okhla, Delhi'],['Format','Black and white photography'],['Subject','People and everyday streets'],['Role','Photography and editing']],
 h:'Approach',steps:[['Walk slowly','Spend time in the neighbourhood before lifting the camera, so the street gets used to you.'],['Shoot at eye level','Most frames are level with the person, so they meet the viewer directly rather than being looked down on.'],['Edit in monochrome','Removing colour quiets signage and clutter, so expression, gesture and texture carry the picture.']],
 out:['A series of nine frames from Okhla','A reminder that good research starts with paying attention to people'],links:[],
 gal:[['p4','A man rests on a tree branch beside a truck.'],['p8','Neighbours on a charpai under a tree of tangled cables.'],['p6','Children gather against a weathered wall.'],['p2','A couple pause over a meal.'],['p1','A portrait in front of corrugated sheets.'],['p9','A woman watches from behind a balcony railing and leaves.'],['p3','A group walks down the road past a painted truck.'],['p7','Brick, tin and a motorbike in a narrow lane.'],['p5','Riders blur past a tunnel wall at speed.']]}];
const CAP=[['Research and strategy','Interviews, observation, affinity mapping, SWOT and MoSCoW prioritisation. I use research to decide what not to build.','User interviews · site maps · competitor analysis · personas'],['Interaction and UI design','Flows, wireframes and high-fidelity interfaces with clear hierarchy, accessible contrast and responsive behaviour.','Figma · design systems · prototyping · usability'],['Brand and visual communication','Identity, campaigns, packaging, social content and storytelling that stay consistent across channels.','Adobe Creative Cloud · art direction · photography'],['Interactive prototyping','I prototype in Figma, and in code where an idea needs real interaction, like the hand-tracked interface in Bias in Focus.','Figma prototypes · motion and interaction · usability testing']];
const EXP=[['Graphic Designer, The Gutenberg','2025–26'],['Freelance Graphic Designer','2024–26'],['Graphic Design Intern, Anagram Digital','2024'],['Social Media Head, Harsahaimal Shiamlal Jewellers','2023–now'],['Graphic Design Intern, Creative Pujaari','2023'],['MA User Experience Design, LCC, UAL','2026–27'],['BA (Hons) Communication Design, Kingston University','2021–25']];
const SK=['User research','Wireframing','Interaction design','Visual design','Branding','Prototyping','Basic HTML and CSS','Figma','Adobe Creative Cloud','Photography','Illustration'];

const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],cl=(v,a,b)=>Math.min(b,Math.max(a,v));
const cs=$('#case'),root=document.documentElement;
$('#mq').innerHTML=('<span>UX design</span><b>✦</b><span>Visual identity</span><b>✦</b><span>Prototyping</span><b>✦</b><span>Research</span><b>✦</b><span>Illustration</span><b>✦</b><span>Photography</span><b>✦</b>').repeat(5);
/* hero physics */
let mode='repel',dragL=null,lastMove=0,cx0=0,cy0=0,lt=0,fps=60;
const LT=[];$$('#nm [data-split]').forEach(el=>{const t=el.textContent;el.textContent='';[...t].forEach(c=>{const s=document.createElement('span');s.textContent=c;el.append(s);LT.push({el:s,x:0,y:0,vx:0,vy:0,hx:0,hy:0,d:0})})});
const sel=$('#sel'),selt=$('#selt'),nmw=$('#nmw'),co=$('#collab');
setTimeout(()=>sel.classList.add('on'),1400);setTimeout(()=>sel.classList.remove('on'),4400);
addEventListener('pointermove',()=>{lastMove=performance.now()});
addEventListener('pointerdown',e=>{const s=e.target.closest&&e.target.closest('#nm span');if(s){dragL=LT.find(l=>l.el===s);dragL.d=1}});
addEventListener('pointerup',()=>{if(dragL){dragL.d=0;dragL=null}});
function phys(t,hr){const R=190;
 LT.forEach(l=>{const r=l.el.getBoundingClientRect(),px=r.left+r.width/2,py=r.top+r.height/2;l.hx=px-l.x;l.hy=py-l.y;
  if(l.d){const nx=mx-l.hx,ny=my-l.hy;l.vx=nx-l.x;l.vy=ny-l.y;l.x=nx;l.y=ny}
  else{let ax=-l.x*.07,ay=-l.y*.07;
   if(moved&&fine&&mode!=='calm'){const dx=px-mx,dy=py-my,d=Math.hypot(dx,dy)||1;if(d<R){const f=(1-d/R)**2*(mode==='attract'?-1.4:2.6);ax+=dx/d*f;ay+=dy/d*f}}
   l.vx=(l.vx+ax)*.84;l.vy=(l.vy+ay)*.84;l.x+=l.vx;l.y+=l.vy}
  const m=Math.hypot(l.x,l.y);l.el.style.transform=`translate(${l.x}px,${l.y}px) rotate(${l.x*.06}deg)`;l.el.style.fontVariationSettings=`'wght' ${Math.round(420+Math.min(380,m*5))}`;l.el.style.color=m>28?'var(--ac)':''});
 if(!(fc%15))selt.textContent=`Swarna Agarwal   ${nmw.offsetWidth} × ${nmw.offsetHeight}`;
 const idle=performance.now()-lastMove>1800,w=hr.width,h=hr.height;
 const gx=idle?w*(.5+.34*Math.sin(t*.00035)):mx-hr.left+60,gy=idle?h*(.5+.28*Math.sin(t*.0005+1)):my-hr.top+48;
 cx0+=(gx-cx0)*.045;cy0+=(gy-cy0)*.045;co.style.transform=`translate(${cx0}px,${cy0}px)`}
function readout(){}
/* playground and theme */
let dark=matchMedia('(prefers-color-scheme:dark)').matches;
const setTheme=d=>{dark=d;root.dataset.theme=d?'dark':'light'};setTheme(dark);
$('#tg').onclick=$('#tg2').onclick=()=>setTheme(!dark);
const SW=[['Default',''],['Cobalt','#5a86ff','90,134,255'],['Mint','#2fd6a1','47,214,161'],['Amber','#ffb23f','255,178,63']];
$('#sw').innerHTML=SW.map((s,i)=>`<button aria-label="${s[0]}" data-i="${i}" style="background:${s[1]||'var(--ac)'}"></button>`).join('');
$('#sw').onclick=e=>{const b=e.target.closest('button');if(!b)return;const s=SW[b.dataset.i];if(s[1]){root.style.setProperty('--ac',s[1]);root.style.setProperty('--acrgb',s[2])}else{root.style.removeProperty('--ac');root.style.removeProperty('--acrgb')}};
/* work stack */
$('#stack').innerHTML=P.map((p,i)=>`<article class="wk" style="--i:${i}"><a class="wc" href="#/work/${p.slug}" data-cur="Open"><div class="wt"><div><span class="wn">${String(i+1).padStart(2,'0')} / ${String(P.length).padStart(2,'0')}</span><h3>${p.title}</h3><p>${p.intro}</p></div><div><ul class="tg">${[p.type,p.year,p.meta[0][1]].map(x=>`<li>${x}</li>`).join('')}</ul><span class="go">View case study<svg viewBox="0 0 24 24"><path d="M6 18L18 6M9 6h9v9"/></svg></span></div></div><div class="wp"><img src="${p.cover}" alt="${p.title}"></div></a></article>`).join('');
$('#cap').innerHTML=CAP.map(c=>`<div class="ac rv"><div tabindex="0" role="button" aria-expanded="false"><h3>${c[0]}</h3><u></u></div><div class="ap"><div><p>${c[1]}</p><small>${c[2]}</small></div></div></div>`).join('');
$$('.ac').forEach(a=>{const b=a.firstElementChild,t=()=>{const o=a.classList.toggle('open');b.setAttribute('aria-expanded',o)};b.onclick=t;b.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();t()}}});$('.ac').classList.add('open');
const BEY=['j5','p4','j2','p6','j3','p8','j6','p2','j9','p9'];
const cap=k=>{for(const p of P){const g=p.gal.find(x=>x[0]===k);if(g)return [g[1],p.slug]}return['','']};
$('#tr').innerHTML=BEY.map(k=>`<figure><a href="#/work/${cap(k)[1]}" data-cur="View"><img src="${IMG[k]}" alt="${cap(k)[0]}"></a><figcaption>${cap(k)[0]}</figcaption></figure>`).join('');
$('#ex').innerHTML=EXP.map(e=>`<div><b>${e[0]}</b><span>${e[1]}</span></div>`).join('');
$('#sk').innerHTML=SK.map(s=>`<span>${s}</span>`).join('');

$('#stmt').innerHTML=$('#stmt').textContent.split(' ').map(w=>`<span>${w}</span> `).join('');

/* cursor */
let mx=innerWidth/2,my=innerHeight/2,rx=mx,ry=my,moved=false;
const fine=matchMedia('(hover:hover) and (pointer:fine)').matches;if(fine)document.body.classList.add('fx');
addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY;moved=true});
document.addEventListener('pointerover',e=>{const t=e.target.closest('[data-cur]');$('#ring').classList.toggle('big',!!t);$('#ring').textContent=t?(t.dataset.cur||'View'):''});
/* loop */
const hero=$('#hero'),hd=$('#hd'),stmt=$$('#stmt span'),hs=$('#hs'),tr=$('#tr'),letters=$$('#nm span'),wk=$$('.wk'),cvs=$('#dots'),cx=cvs.getContext('2d'),body=document.body;
let ly=0,fc=0,inkc='234,238,251',acc='255,90,82',dw=0,dh=0,tx=0,ty=0;
function rsz(){const d=Math.min(devicePixelRatio,2);dw=hero.offsetWidth;dh=hero.offsetHeight;cvs.width=dw*d;cvs.height=dh*d;cx.setTransform(d,0,0,d,0,0)}rsz();addEventListener('resize',rsz);
function dots(t,px,py){cx.clearRect(0,0,dw,dh);const sp=30,R=180;for(let y=sp/2;y<dh;y+=sp)for(let x=sp/2;x<dw;x+=sp){const dx=x-px,dy=y-py,d=Math.hypot(dx,dy)||1,k=Math.max(0,1-d/R),w=Math.sin(x*.011+y*.013+t*.0012)*.5+.5;cx.fillStyle=k>.03?`rgba(${acc},${.3+k*.7})`:`rgba(${inkc},${.1+w*.1})`;cx.beginPath();cx.arc(x+dx/d*k*7,y+dy/d*k*7,.9+k*2.2+w*.4,0,6.3);cx.fill()}}
function tick(t){
 rx+=(mx-rx)*.18;ry+=(my-ry)*.18;
 $('#cur').style.transform=`translate(${mx}px,${my}px)`;$('#ring').style.transform=`translate(${rx}px,${ry}px)`;
 body.style.setProperty('--mx',mx+'px');body.style.setProperty('--my',my+'px');
 if(!(fc++%30)){const s=getComputedStyle(root);inkc=s.getPropertyValue('--inkrgb').trim();acc=s.getPropertyValue('--acrgb').trim()}
 const hr=hero.getBoundingClientRect();
 if(hr.bottom>0){dots(t,mx-hr.left,my-hr.top);phys(t,hr)}
 fps+=(1000/((t-lt)||16)-fps)*.1;lt=t;if(!(fc%8))readout();
 const sy=scrollY;hd.classList.toggle('hide',sy>ly&&sy>200);ly=sy;
 const sr=$('#stmt').getBoundingClientRect(),p=cl((innerHeight*.8-sr.top)/(sr.height+innerHeight*.3),0,1);stmt.forEach((w,i)=>w.classList.toggle('on',p*stmt.length*1.25>i));
 $$('.wp img').forEach(im=>{const r=im.parentNode.getBoundingClientRect();if(r.bottom>0&&r.top<innerHeight){const q=cl((r.top+r.height/2-innerHeight/2)/innerHeight,-1,1);im.style.transform=`translateY(${q*-5}%)`}});
 if(innerWidth>860){const tops=wk.map(e=>e.getBoundingClientRect().top);wk.forEach((e,i)=>{let n=0;for(let j=i+1;j<wk.length;j++)if(tops[j]<=84+j*18+4)n++;const c=e.firstElementChild;c.style.transform=`scale(${1-n*.04})`;c.style.filter=n?`brightness(${1-n*.15})`:''})}
 if(innerWidth>860){const r=hs.getBoundingClientRect(),tt=hs.offsetHeight-innerHeight,pr=cl(-r.top/tt,0,1);tr.style.transform=`translateX(${-pr*(tr.scrollWidth-innerWidth)}px)`}else tr.style.transform='';
 if(cs.classList.contains('open')){const u=$('#pg');if(u)u.style.width=(cs.scrollTop/(cs.scrollHeight-cs.clientHeight||1)*100)+'%'}
 requestAnimationFrame(tick)}
requestAnimationFrame(tick);
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
const obs=()=>$$('.rv:not(.in)').forEach(e=>io.observe(e));obs();
const clk=()=>{const t='London '+new Date().toLocaleTimeString('en-GB',{timeZone:'Europe/London',hour:'2-digit',minute:'2-digit'});$('#clk').textContent=t;$('#clk2').textContent=t};clk();setInterval(clk,30000);
/* lightbox */
let LB=[],li=0;const lb=$('#lb'),lbi=lb.querySelector('img');
const openLB=i=>{li=(i+LB.length)%LB.length;lbi.src=LB[li];lb.classList.add('on')};
lb.onclick=e=>{if(e.target!==lbi)lb.classList.remove('on');else openLB(li+1)};
addEventListener('keydown',e=>{if(lb.classList.contains('on')){if(e.key==='Escape')lb.classList.remove('on');if(e.key==='ArrowRight')openLB(li+1);if(e.key==='ArrowLeft')openLB(li-1)}else if(e.key==='Escape'&&cs.classList.contains('open'))location.hash='#work'});
/* case studies */
function show(slug){
 const i=P.findIndex(p=>p.slug===slug);if(i<0){cs.classList.remove('open');document.body.style.overflow='';return}
 const p=P[i],n=P[(i+1)%P.length];LB=p.gal.map(g=>IMG[g[0]]);
 cs.innerHTML=`<div class="ct"><b>${p.title}</b><button class="xb" id="x" data-cur="Close">Close</button><div class="pg"><u id="pg"></u></div></div><div class="cx"><p class="cl">${p.type}, ${p.year}</p><h1>${p.title}</h1><p class="lead">${p.intro}</p>
 <div class="mt">${p.meta.map(m=>`<div><small>${m[0]}</small><b>${m[1]}</b></div>`).join('')}</div>
 <div class="cv rv"><img src="${p.cover}" alt="${p.title}"></div>
 ${p.facts?`<div class="fc rv">${p.facts.map(f=>`<div><b>${f[0]}</b><small>${f[1]}</small></div>`).join('')}</div>`:''}
 <div class="sc rv"><h2>${p.h}</h2><ol>${p.steps.map(s=>`<li><b>${s[0]}.</b> ${s[1]}</li>`).join('')}</ol></div>
 <div class="gal ${p.lay}">${p.gal.map((g,k)=>`<figure class="rv ${g[2]||''}"><img data-i="${k}" src="${IMG[g[0]]}" alt="${g[1]}" loading="lazy"><figcaption>${g[1]}</figcaption></figure>`).join('')}</div>
 <div class="sc rv"><h2>Outcome</h2><div><ul>${p.out.map(o=>`<li>${o}</li>`).join('')}</ul>${p.links.map(l=>`<a class="btn" target="_blank" rel="noopener" href="${l[1]}">${l[0]}</a>`).join('')}</div></div>
 <a class="nx" href="#/work/${n.slug}" data-cur="Next"><small>Next project</small><h2>${n.title}</h2></a></div>`;
 cs.scrollTop=0;cs.classList.add('open');document.body.style.overflow='hidden';
 $('#x').onclick=()=>{location.hash='#work'};$$('.gal img').forEach(m=>m.onclick=()=>openLB(+m.dataset.i));obs()}
const route=()=>{const m=location.hash.match(/^#\/work\/(.+)$/);show(m?m[1]:'')};
addEventListener('hashchange',route);

let c=0;const iv=setInterval(()=>{c+=Math.ceil(Math.random()*9);if(c>=100){c=100;clearInterval(iv);setTimeout(()=>{$('#pre').classList.add('go');route()},250)}$('#pn').textContent=c},40);

(function(){
const cv=$('#gm'),c=cv.getContext('2d'),sc=$('#gs'),bs=$('#gb'),ov=$('#go');
let W=0,H=0;
function rs(){const D=Math.min(devicePixelRatio,2);W=cv.clientWidth;H=cv.clientHeight;cv.width=W*D;cv.height=H*D;c.setTransform(D,0,0,D,0,0)}rs();addEventListener('resize',rs);
let best=0;try{best=+localStorage.getItem('dd-best')||0}catch(e){}bs.textContent=best;
let on=false,score=0,life=3,px=W/2,tx=W/2,items=[],spawn=0,shake=0,keys={};
const GOOD=['dot','Aa','pen','grid'],BAD=['Lorem ipsum','Comic Sans'];
cv.addEventListener('pointermove',e=>{tx=e.clientX-cv.getBoundingClientRect().left});
addEventListener('keydown',e=>{const k=e.key;if(['ArrowLeft','ArrowRight','a','d','A','D'].includes(k)){if(on)e.preventDefault();keys[k==='ArrowLeft'||k==='a'||k==='A'?'l':'r']=1}});
addEventListener('keyup',e=>{const k=e.key;keys[k==='ArrowLeft'||k==='a'||k==='A'?'l':'r']=0});
function start(){on=true;score=0;life=3;items=[];spawn=0;sc.textContent=0;ov.classList.add('off')}
function end(){on=false;if(score>best){best=score;bs.textContent=best;try{localStorage.setItem('dd-best',best)}catch(e){}}$('#gt').textContent='Round over: '+score;$('#gd').textContent=score>=best&&score>0?'A new best. Nicely done.':'Best so far: '+best+'. One more go?';$('#gp').textContent='Play again';ov.classList.remove('off')}
$('#gp').onclick=start;
function drawItem(i){c.save();c.translate(i.x,i.y);c.rotate(Math.sin(i.r)*.3);
 if(i.bad){c.font="600 14px 'Instrument Sans'";const w=c.measureText(i.g).width+24;c.fillStyle=`rgb(${acc})`;c.beginPath();c.roundRect(-w/2,-14,w,28,14);c.fill();c.fillStyle='#fff';c.textAlign='center';c.textBaseline='middle';c.fillText(i.g,0,1)}
 else if(i.g==='dot'){c.fillStyle='#5a86ff';c.beginPath();c.arc(0,0,13,0,6.3);c.fill()}
 else if(i.g==='Aa'){c.fillStyle=`rgb(${inkc})`;c.font="700 26px 'Bricolage Grotesque'";c.textAlign='center';c.textBaseline='middle';c.fillText('Aa',0,0)}
 else if(i.g==='pen'){c.fillStyle=`rgb(${inkc})`;c.beginPath();c.moveTo(0,-15);c.lineTo(10,8);c.lineTo(0,3);c.lineTo(-10,8);c.closePath();c.fill()}
 else{c.strokeStyle=`rgb(${inkc})`;c.lineWidth=1.6;for(let a=-1;a<1;a++)for(let b=-1;b<1;b++)c.strokeRect(a*11+1,b*11+1,9,9)}
 c.restore()}
function draw(){const sx=shake?(Math.random()-.5)*shake:0;shake*=.85;if(shake<.3)shake=0;
 c.clearRect(0,0,W,H);c.save();c.translate(sx,0);
 c.fillStyle=`rgba(${inkc},.1)`;for(let y=14;y<H;y+=28)for(let x=14;x<W;x+=28){c.fillRect(x,y,1.5,1.5)}
 items.forEach(drawItem);
 const y=H-70,w=104,h=36;c.strokeStyle='#5a86ff';c.lineWidth=1.5;c.strokeRect(px-w/2,y,w,h);c.fillStyle=c.strokeStyle;
 [[-w/2,y],[w/2,y],[-w/2,y+h],[w/2,y+h]].forEach(p=>{c.fillStyle='#5a86ff';c.fillRect(px+p[0]-4,p[1]-4,8,8)});
 c.font="600 11px 'Instrument Sans'";const tw=c.measureText('Swarna').width+16;c.fillStyle='#5a86ff';c.beginPath();c.roundRect(px-tw/2,y+h+10,tw,20,5);c.fill();c.fillStyle='#fff';c.textAlign='center';c.textBaseline='middle';c.fillText('Swarna',px,y+h+20);
 for(let i=0;i<3;i++){c.fillStyle=i<life?`rgb(${acc})`:`rgba(${inkc},.2)`;c.beginPath();c.arc(W-24-i*20,24,6,0,6.3);c.fill()}
 c.restore()}
let last=0;
function loop(t){requestAnimationFrame(loop);const r=cv.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight){last=t;return}
 const dt=Math.min(32,t-(last||t));last=t;
 if(keys.l)tx-=.55*dt;if(keys.r)tx+=.55*dt;tx=cl(tx,52,W-52);px+=(tx-px)*.28;
 if(on){spawn-=dt;if(spawn<=0){spawn=Math.max(300,900-score*16);const bad=Math.random()<.3;items.push({x:24+Math.random()*(W-48),y:-24,v:.13+Math.min(.24,score*.005)+Math.random()*.06,bad,g:bad?BAD[Math.random()*BAD.length|0]:GOOD[Math.random()*GOOD.length|0],r:Math.random()*6})}
  items.forEach(i=>{i.y+=i.v*dt;i.r+=.003*dt});
  for(const i of items){if(!i.d&&i.y>H-84&&i.y<H-30&&Math.abs(i.x-px)<(i.bad?72:58)){i.d=1;if(i.bad){life--;shake=14;if(life<=0)end()}else{score++;sc.textContent=score}}}
  items=items.filter(i=>!i.d&&i.y<H+30)}
 draw()}
requestAnimationFrame(loop);
})();
