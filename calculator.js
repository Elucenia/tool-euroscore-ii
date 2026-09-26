/* tool-euroscore-ii · ELUCENIA · https://github.com/Elucenia/tool-euroscore-ii
   Copyright (c) 2026 ELUCENIA · Felipe Guedes (fgxdev.com). Licensed under the Apache License 2.0: keep this notice and the NOTICE file, and mark your changes.
   Standalone integration. Package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"euroscore-ii","title":"EuroSCORE II","fields":[["idade","Idade","num",{"min":18,"max":100,"unit":"anos","ph":"65"}],["sexo","Sexo","radio",{"opts":{"F":"Feminino","M":"Masculino"}}],["renal","Função renal (clearance de creatinina, Cockcroft-Gault)","sel",{"opts":{"0":"Normal (&gt; 85 mL/min)","1":"Moderadamente reduzida (50 a 85 mL/min)","2":"Gravemente reduzida (&lt; 50 mL/min)","3":"Diálise (qualquer clearance)"}}],["arteriopatia","Arteriopatia extracardíaca (claudicação, carótida ≥ 50%, amputação, cirurgia aórtica/periférica)","chk",[]],["mobilidade","Mobilidade muito reduzida (doença musculoesquelética ou neurológica)","chk",[]],["cir_prev","Cirurgia cardíaca prévia com abertura do pericárdio","chk",[]],["pulmonar","Doença pulmonar crônica (uso prolongado de broncodilatador ou corticoide)","chk",[]],["endocardite","Endocardite ativa (ainda em antibioticoterapia)","chk",[]],["critico","Estado pré-operatório crítico (TV/FV, massagem, VM, inotrópico, BIA ou IRA oligúrica)","chk",[]],["insulina","Diabetes em uso de insulina","chk",[]],["nyha","Classe funcional NYHA","radio",{"opts":{"1":"I","2":"II","3":"III","4":"IV"}}],["ccs4","Angina CCS classe 4 (angina em repouso)","chk",[]],["fe","Função do VE (fração de ejeção)","sel",{"opts":{"0":"Boa (&gt; 50%)","1":"Moderada (31 a 50%)","2":"Ruim (21 a 30%)","3":"Muito ruim (≤ 20%)"}}],["iam","IAM recente (≤ 90 dias)","chk",[]],["hp","Pressão sistólica da artéria pulmonar","radio",{"opts":{"0":"≤ 30 mmHg","1":"31 a 55 mmHg","2":"&gt; 55 mmHg"}}],["urgencia","Urgência da operação","sel",{"opts":{"0":"Eletiva","1":"Urgente (não pode ter alta sem operar)","2":"Emergência (antes do próximo dia útil)","3":"Salvamento (RCP a caminho do centro cirúrgico)"}}],["proc","Peso da intervenção","sel",{"opts":{"0":"Revascularização isolada","1":"1 procedimento que não é revascularização","2":"2 procedimentos","3":"3 ou mais procedimentos"}}],["aorta","Cirurgia da aorta torácica","chk",[]]],"config":null,"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* ELUCENIA arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);

(function(a){'use strict';
var e=a.h;
var o=e.br;
var i=e.yes;
a.def("euroscore-ii",function(a){var e=+a.idade,r=.0285181*(e<=60?1:e-59)-5.324537;"F"===a.sexo&&(r+=.2196434),r+=[0,.303553,.8592256,.6421508][+a.renal||0];var t={arteriopatia:.5360268,mobilidade:.2407181,cir_prev:1.118599,pulmonar:.1886564,endocardite:.6194522,critico:1.086517,insulina:.3542749,ccs4:.2226147,iam:.1528943,aorta:.6527205};for(var n in t)i(a[n])&&(r+=t[n]);r+=[0,.1070545,.2958358,.5597929][(+a.nyha||1)-1],r+=[0,.3150652,.8084096,.9346919][+a.fe||0],r+=[0,.1788899,.3491475][+a.hp||0],r+=[0,.3174673,.7039121,1.362947][+a.urgencia||0],r+=[0,.0062118,.5521478,.9724533][+a.proc||0];var s=Math.exp(r)/(1+Math.exp(r))*100,d=s<4?["low","Risco cirúrgico baixo (&lt; 4%)"]:s<8?["mid","Risco cirúrgico aumentado (4 a 8%)"]:["high","Risco cirúrgico alto (≥ 8%)"];return{main:[o(s,2),"%"],label:"Mortalidade hospitalar prevista (EuroSCORE II)",level:d[0],verdict:d[1],rows:[["Soma logística (β₀ + Σβ)",o(r,3)]],note:e>90?"Poucos pacientes acima de 90 anos na base do EuroSCORE II: interprete com cautela.":"",raw:{p:s,x:r}}});
})(window.CALC);
function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
