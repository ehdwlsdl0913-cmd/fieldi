/* FIELDI 도면 편집기(js/dwg.js)의 작업 스레드: DWG 파일 → DXF 글로 바꿈.
   LibreDWG(GPL-3.0)를 웹어셈블리로 만든 @mlightcad/libredwg-web 0.8.8의 wasm 파일(libredwg-web.js · libredwg-web.wasm)을 고치지 않고 그대로 부름.
   이 파일은 그 프로그램에 DWG를 건네고 DXF를 받아 오는 일만 함(별도 프로그램처럼 작업 스레드에서 돌림). */
import createModule from './libredwg-web.js';
self.onmessage=async e=>{
 let M=null;
 try{
  M=await createModule({locateFile:f=>new URL(f,import.meta.url).href,print:()=>{},printErr:()=>{}});
  M.FS.writeFile('/in.dwg',new Uint8Array(e.data.buf));
  let code=0;try{code=M.dwg_write_dxf('/in.dwg','/out.dxf')}catch(err){code=-1}
  let out=null;try{out=M.FS.readFile('/out.dxf')}catch(_){}
  if(!out||!out.length){self.postMessage({ok:false,error:'DWG를 읽지 못했어요 (LibreDWG 오류 '+code+')'});return}
  const b=out.slice().buffer;self.postMessage({ok:true,dxf:b,code},[b]);
 }catch(err){self.postMessage({ok:false,error:String(err&&err.message||err)})}
};
