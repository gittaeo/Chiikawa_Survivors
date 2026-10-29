import {RescueRun,newProfile,RANK_CAPS,RUN_SECONDS} from '../rescue-engine.mjs';
const results=[];
for(const [hero,seed]of [['usagi',21],['hachiware',32],['chiikawa',43]]){
 let n=seed;const random=()=>{n=(Math.imul(n,1664525)+1013904223)>>>0;return n/4294967296;};const p=newProfile();p.hero=hero;const r=new RescueRun(p,random);let peak=0,choices=0;
 const goals=[['weapon',8],['power',3],['multi',6],['rapid',3],['unique',5],['orbit',6],['picnic',3],['spin',6],['speed',3],['shock',6],['reach',3]];
 for(let i=0;i<25000&&!['lost','won'].includes(r.mode);i++){
  if(r.mode==='upgrade'){const target=goals.find(([id,rank])=>r.ranks[id]<rank)?.[0];const priority=['weapon','power','multi','rapid','unique','orbit','picnic','spin','speed','shock','reach','heal'];const offered=r.offers.find(s=>s.id===target)||[...r.offers].sort((a,b)=>priority.indexOf(a.id)-priority.indexOf(b.id))[0];r.chooseSkill(offered.id);choices++;continue;}
  const player=r.player,unlit=r.beacons.filter(b=>!b.lit),boss=r.enemies.find(e=>e.final)||r.enemies.find(e=>e.type==='boss');let targets=[];
  if(r.chests.length)targets=r.chests;else if(boss)targets=[boss];else if(unlit.length)targets=r.followers.length>=3?unlit:r.spirits;else targets=r.gems;
  let t=targets.length?targets.reduce((a,b)=>Math.hypot(a.x-player.x,a.y-player.y)<Math.hypot(b.x-player.x,b.y-player.y)?a:b):{x:550+Math.cos(r.time*.05)*180,y:700+Math.sin(r.time*.05)*180};let dx=t.x-player.x,dy=t.y-player.y,d=Math.hypot(dx,dy)||1;dx/=d;dy/=d;if(t===boss&&d<115){dx=-dx;dy=-dy;}
  let danger=0;for(const e of r.enemies){const ed=Math.hypot(e.x-player.x,e.y-player.y);if(ed<70){dx+=(player.x-e.x)/Math.max(1,ed)*1.5;dy+=(player.y-e.y)/Math.max(1,ed)*1.5;danger++;if(ed<40)r.dash(dx,dy);}}
  if(danger>2||boss&&d<250)r.special();r.tick(.05,{x:dx,y:dy});peak=Math.max(peak,r.enemies.length);
 }
 results.push({hero,status:r.mode,time:Math.round(r.time),level:r.level,choices,kills:r.kills,evolved:r.evolved,final:r.finalDefeated,hp:Math.round(r.player.hp),peakEnemies:peak});
}
console.log(JSON.stringify(results,null,2));
if(!results.some(x=>x.status==='won'))process.exitCode=1;
