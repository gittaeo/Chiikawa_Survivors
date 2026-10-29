import {mkdir,readFile,writeFile,rename,rm} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {CAST} from '../chiikawa-content.mjs';

const revision='bb96582f525fbdf88a236b4703433ae92bfd5888';
const source=`https://raw.githubusercontent.com/heelee912/chiikawa-dots-pets/${revision}`;
const root=new URL('../assets/chiikawa/',import.meta.url);
const checkOnly=process.argv.includes('--check');
function validate(bytes,id){
 if(bytes.length<24||!Buffer.from(bytes).subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10])))throw new Error(`${id}: not a PNG`);
 const b=Buffer.from(bytes);if(b.readUInt32BE(16)!==1536||b.readUInt32BE(20)!==2288)throw new Error(`${id}: unexpected sprite dimensions`);
}
console.log('Source: heelee912/chiikawa-dots-pets (unofficial fan art).');
console.log('Local fan use only. Upstream does not permit commercial use or redistribution.');
console.log('Do not commit or publicly host the downloaded sprite sheets. See docs/ASSETS.md.');
await mkdir(root,{recursive:true});
let missing=0;
for(const id of Object.keys(CAST)){
 const file=new URL(`${id}.png`,root);
 try{validate(await readFile(file),id);console.log(`OK ${id}`);continue;}catch(error){if(error.code!=='ENOENT')throw error;}
 if(checkOnly){console.error(`MISSING ${id}`);missing++;continue;}
 const response=await fetch(`${source}/pets/${id}/spritesheet.png`);
 if(!response.ok)throw new Error(`Download failed for ${id}: HTTP ${response.status}`);
 const bytes=Buffer.from(await response.arrayBuffer());validate(bytes,id);
 const temporary=new URL(`${id}.png.partial`,root);
 try{await writeFile(temporary,bytes);await rename(temporary,file);}catch(error){await rm(temporary,{force:true});throw error;}
 console.log(`Downloaded ${id} (${bytes.length} bytes)`);
}
if(missing){console.error(`${missing} sheets missing. Run node scripts/fetch-assets.mjs for local setup.`);process.exitCode=1;}
else console.log(`All ${Object.keys(CAST).length} sprite sheets verified: ${fileURLToPath(root)}`);
