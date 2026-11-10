import{r as e,j as l}from"./index-CIaQ2zqW.js";import{R as E,C as A,u as p,A as C,V as z,S as j,a as P,b as R,M as d}from"./react-three-fiber.esm-CS8aYm08.js";const _=()=>parseInt(E.replace(/\D+/g,"")),F=_();class V extends P{constructor(){super({uniforms:{time:{value:0},fade:{value:1}},vertexShader:`
      uniform float time;
      attribute float size;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 0.5);
        gl_PointSize = size * (30.0 / -mvPosition.z) * (3.0 + sin(time + 100.0));
        gl_Position = projectionMatrix * mvPosition;
      }`,fragmentShader:`
      uniform sampler2D pointTexture;
      uniform float fade;
      varying vec3 vColor;
      void main() {
        float opacity = 1.0;
        if (fade == 1.0) {
          float d = distance(gl_PointCoord, vec2(0.5, 0.5));
          opacity = 1.0 / (1.0 + exp(16.0 * (d - 0.25)));
        }
        gl_FragColor = vec4(vColor, opacity);

        #include <tonemapping_fragment>
	      #include <${F>=154?"colorspace_fragment":"encodings_fragment"}>
      }`})}}const I=o=>new z().setFromSpherical(new j(o,Math.acos(1-Math.random()*2),Math.random()*2*Math.PI)),D=e.forwardRef(({radius:o=100,depth:n=50,count:r=5e3,saturation:t=0,factor:a=4,fade:v=!1,speed:g=1},h)=>{const c=e.useRef(),[w,x,y]=e.useMemo(()=>{const i=[],f=[],M=Array.from({length:r},()=>(.5+.5*Math.random())*a),s=new A;let m=o+n;const S=n/r;for(let u=0;u<r;u++)m-=S*Math.random(),i.push(...I(m).toArray()),s.setHSL(u/r,t,.9),f.push(s.r,s.g,s.b);return[new Float32Array(i),new Float32Array(f),new Float32Array(M)]},[r,n,a,o,t]);p(i=>c.current&&(c.current.uniforms.time.value=i.clock.elapsedTime*g));const[b]=e.useState(()=>new V);return e.createElement("points",{ref:h},e.createElement("bufferGeometry",null,e.createElement("bufferAttribute",{attach:"attributes-position",args:[w,3]}),e.createElement("bufferAttribute",{attach:"attributes-color",args:[x,3]}),e.createElement("bufferAttribute",{attach:"attributes-size",args:[y,1]})),e.createElement("primitive",{ref:c,object:b,attach:"material",blending:C,"uniforms-fade-value":v,depthWrite:!1,transparent:!0,vertexColors:!0}))});function L({count:o}){const n=e.useRef(null),r=e.useRef({x:0,y:0});return e.useEffect(()=>{const t=a=>{r.current.x=a.clientX/window.innerWidth*2-1,r.current.y=a.clientY/window.innerHeight*2-1};return window.addEventListener("mousemove",t),()=>window.removeEventListener("mousemove",t)},[]),p(()=>{const t=n.current;t&&(t.rotation.y+=4e-4,t.rotation.x=d.lerp(t.rotation.x,r.current.y*.06,.03),t.rotation.z=d.lerp(t.rotation.z,r.current.x*.04,.03))}),l.jsx("group",{ref:n,children:l.jsx(D,{radius:90,depth:50,count:o,factor:4,saturation:0,fade:!0,speed:.6})})}function T(){const o=typeof window<"u"&&window.innerWidth<768?1500:4e3;return l.jsx(R,{camera:{position:[0,0,10],fov:60},dpr:[1,1.5],gl:{alpha:!0,antialias:!1},style:{pointerEvents:"none"},children:l.jsx(L,{count:o})})}export{T as default};
