// UIForge: static explicit-pair contrast checker; no CSS crawler or compliance certification.
function parseHex(s){if(typeof s!=="string"||!/^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i.test(s))throw Error("expected opaque #RGB or #RRGGBB");if(s.length===4)s="#"+s.slice(1).split("").map(x=>x+x).join("");return [1,3,5].map(i=>parseInt(s.slice(i,i+2),16)/255)}
function luminance(rgb){return rgb.map(x=>x<=0.04045?x/12.92:((x+0.055)/1.055)**2.4).reduce((a,x,i)=>a+x*[0.2126,0.7152,0.0722][i],0)}
function measure(pair){const fg=parseHex(pair.foreground),base=parseHex(pair.background);let bg=base;if(pair.overlay!==undefined){const {color,alpha}=pair.overlay;if(typeof alpha!=="number"||!Number.isFinite(alpha)||alpha<0||alpha>1)throw Error("invalid alpha");bg=parseHex(color).map((x,i)=>x*alpha+base[i]*(1-alpha))}const l1=luminance(fg),l2=luminance(bg),ratio=(Math.max(l1,l2)+0.05)/(Math.min(l1,l2)+0.05);return {ratio:Number(ratio.toFixed(3)),pass:ratio>=4.5}}
function selftest(){const checks=[];const check=(name,fn)=>{if(!fn())throw Error("test failed "+name);checks.push(name)};const throws=fn=>{try{fn();return false}catch{return true}};
check("black-white-21",()=>measure({foreground:"#000",background:"#fff"}).ratio===21);
check("same-color-1",()=>measure({foreground:"#abc",background:"#aabbcc"}).ratio===1);
check("symmetry",()=>measure({foreground:"#000",background:"#fff"}).ratio===measure({foreground:"#fff",background:"#000"}).ratio);
check("threshold-pass",()=>measure({foreground:"#767676",background:"#fff"}).pass);
check("threshold-fail",()=>!measure({foreground:"#777777",background:"#fff"}).pass);
check("alpha-zero",()=>measure({foreground:"#000",background:"#fff",overlay:{color:"#000",alpha:0}}).ratio===21);
check("alpha-one",()=>measure({foreground:"#000",background:"#fff",overlay:{color:"#000",alpha:1}}).ratio===1);
check("half-overlay",()=>Math.abs(measure({foreground:"#000",background:"#fff",overlay:{color:"#000",alpha:.5}}).ratio-5.281)<.002);
check("reject-alpha",()=>throws(()=>measure({foreground:"#000",background:"#fff",overlay:{color:"#000",alpha:2}})));
check("reject-nonhex",()=>throws(()=>measure({foreground:"red",background:"#fff"})));
check("reject-transparent",()=>throws(()=>measure({foreground:"#1234",background:"#fff"})));
return checks}
export { measure, selftest };
