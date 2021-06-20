(this.webpackJsonpmobius=this.webpackJsonpmobius||[]).push([[0],{15:function(r,t,e){r.exports=e(22)},20:function(r,t,e){},21:function(r,t,e){},22:function(r,t,e){"use strict";e.r(t);var o,a,n,i,u=e(1),c=e.n(u),l=e(6),f=e.n(l),s=e(3),m=e(7),v=e(2),h=e(0),p=(e(20),String.raw),M=[1,.8,.5],x=[.75,.75,.75],d=[x,x,x,x],g=.1,T=Math.PI/36;function b(){var r=Object(u.useState)(0),t=Object(v.a)(r,2),e=t[0],l=t[1],f=Object(u.useState)(),m=Object(v.a)(f,2),d=m[0],b=m[1],A=Object(u.useState)(h.b.create()),_=Object(v.a)(A,2),F=_[0],L=_[1],U=Object(u.useRef)(null),O=Object(u.useRef)(null),S=Object(u.useRef)(null);Object(u.useEffect)((function(){var r,t=null===(r=S.current)||void 0===r?void 0:r.getContext("webgl");if(!t)throw new Error("Failed to get a WebGL context.");U.current=function(r){var t=p(n||(n=Object(s.a)(["\n    // Attributes\n    attribute vec4 ",";\n    attribute vec3 ",";\n    attribute vec4 ",";\n    attribute vec2 ",";\n    // Uniforms\n    uniform mat4 ",";\n    uniform mat4 ",";\n    uniform mat4 ",";\n    uniform mat4 ",";\n    uniform mat3 ",";\n    // Varyings\n    varying highp vec3 ",";\n    varying lowp vec4 ",";\n    varying highp vec3 ",";\n    // Program\n    void main(void) {\n      gl_Position = "," * "," * "," * ",";\n      "," = normalize("," * "," * vec4(",", 0)).xyz;\n      "," = ",";\n      "," = "," * vec3(",", 1);\n    }\n  "])),"aPosition","aNormal","aColor","aTextureCoords","uProjectionMatrix","uViewMatrix","uModelMatrix","uNormalMatrix","uTextureMatrix","vNormal","vColor","vTextureCoords","uProjectionMatrix","uViewMatrix","uModelMatrix","aPosition","vNormal","uViewMatrix","uNormalMatrix","aNormal","vColor","aColor","vTextureCoords","uTextureMatrix","aTextureCoords"),e=p(i||(i=Object(s.a)(["\n    // Varyings\n    varying highp vec3 ",";\n    varying lowp vec4 ",";\n    varying highp vec3 ",";\n    // Uniforms\n    uniform sampler2D ",";\n    // Program\n    void main(void) {\n      // Apply lighting\n      lowp vec3 Ca = vec3(0.3, 0.3, 0.3); // Ambient light color\n      lowp vec3 Cd = vec3(1, 1, 1); // Diffuse light color (white)\n      lowp vec3 Cs = vec3(1, 1, 1); // Specular light color (white)\n      highp vec3 u = normalize(vec3(0.85, 0.8, 0.75)); // Light direction\n      highp vec3 v = 2.0 * dot(u, ",") * "," - u; // Reflection direction\n      lowp float Id = max(0.0, (gl_FrontFacing ? +1.0 : -1.0) * dot(u, ",")); // Diffuse intensity\n      lowp float Is = v[2] < 0.0 ? 0.0 : pow(v[2], 10.0); // Specular intensity\n      lowp vec4 C = vec4(Ca + Id * Cd + Is * Cs, 1.0); // Total incident light color\n      gl_FragColor = C * "," * texture2D(",", ",".xy);\n    }\n  "])),"vNormal","vColor","vTextureCoords","uSampler","vNormal","vNormal","vNormal","vColor","uSampler","vTextureCoords"),o=I(r,t,e);return{program:o,attribs:{position:r.getAttribLocation(o,"aPosition"),color:r.getAttribLocation(o,"aColor"),normal:r.getAttribLocation(o,"aNormal"),textureCoords:r.getAttribLocation(o,"aTextureCoords")},uniforms:{sampler:N(r,o,"uSampler"),textureMatrix:N(r,o,"uTextureMatrix"),normalMatrix:N(r,o,"uNormalMatrix"),modelMatrix:N(r,o,"uModelMatrix"),viewMatrix:N(r,o,"uViewMatrix"),projectionMatrix:N(r,o,"uProjectionMatrix")}}}(t),O.current=function(r){var t=p(o||(o=Object(s.a)(["\n    // Uniforms\n    uniform mat4 ",";\n    uniform mat4 ",";\n    uniform mat4 ",";\n    uniform mat4 ",";\n    // Attributes\n    attribute vec4 ",";\n    attribute vec3 ",";\n    attribute vec4 ",";\n    // Varyings\n    varying highp vec3 ",";\n    varying lowp vec4 ",";\n    // Program\n    void main(void) {\n      "," = normalize("," * "," * vec4(",", 0)).xyz;\n      "," = ",";\n      gl_Position = "," * "," * "," * ",";\n    }\n  "])),"uModelMatrix","uNormalMatrix","uViewMatrix","uProjectionMatrix","aPosition","aNormal","aColor","vNormal","vColor","vNormal","uViewMatrix","uNormalMatrix","aNormal","vColor","aColor","uProjectionMatrix","uViewMatrix","uModelMatrix","aPosition"),e=p(a||(a=Object(s.a)(["\n    // Varyings\n    varying highp vec3 ",";\n    varying lowp vec4 ",";\n    // Program\n    void main(void) {\n      // Apply lighting\n      lowp vec3 Ca = vec3(0.3, 0.3, 0.3); // Ambient light color\n      lowp vec3 Cd = vec3(1, 1, 1); // Diffuse light color (white)\n      lowp vec3 Cs = vec3(1, 1, 1); // Specular light color (white)\n      highp vec3 u = normalize(vec3(0.85, 0.8, 0.75)); // Light direction\n      highp vec3 v = 2.0 * dot(u, ",") * "," - u; // Reflection direction\n      lowp float Id = max(0.0, (gl_FrontFacing ? +1.0 : -1.0) * dot(u, ",")); // Diffuse intensity\n      lowp float Is = v[2] < 0.0 ? 0.0 : pow(v[2], 10.0); // Specular intensity\n      lowp vec4 C = vec4(Ca + Id * Cd + Is * Cs, 1.0); // Total incident light color\n      gl_FragColor = C * ",";\n    }\n  "])),"vNormal","vColor","vNormal","vNormal","vNormal","vColor"),n=I(r,t,e);return{program:n,attribs:{position:r.getAttribLocation(n,"aPosition"),normal:r.getAttribLocation(n,"aNormal"),color:r.getAttribLocation(n,"aColor")},uniforms:{normalMatrix:N(r,n,"uNormalMatrix"),modelMatrix:N(r,n,"uModelMatrix"),viewMatrix:N(r,n,"uViewMatrix"),projectionMatrix:N(r,n,"uProjectionMatrix")}}}(t);for(var e=0,u=[t.TEXTURE0,t.TEXTURE1,t.TEXTURE2,t.TEXTURE3];e<u.length;e++){var c=u[e];E(t,c,"".concat("/mobius","/texture/hours").concat(c-t.TEXTURE0,".bmp"))}E(t,t.TEXTURE10,"".concat("/mobius","/texture/mobius.png")),t.enable(t.DEPTH_TEST),t.depthFunc(t.LEQUAL),t.clearDepth(1),t.clearColor(0,0,0,1),t.enable(t.CULL_FACE),t.cullFace(t.BACK);var f=requestAnimationFrame((function r(t){l(t/12e3*Math.PI),f=requestAnimationFrame(r)}));return function(){cancelAnimationFrame(f)}}),[]),Object(u.useEffect)((function(){var r,t=null===(r=S.current)||void 0===r?void 0:r.getContext("webgl");if(!t)throw new Error("Failed to get a WebGL context.");if(!U.current||!O.current)throw new Error("Missing shader program!");var o=U.current,a=o.program,n=o.attribs,i=o.uniforms,u=O.current,c=u.program,l=u.attribs,f=u.uniforms,s=h.b.perspective(h.b.create(),Math.PI/5,t.canvas.width/t.canvas.height,.1,100),m=h.b.fromTranslation(h.b.create(),[0,0,-4]),p=h.a.create();t.useProgram(c),t.uniformMatrix4fv(f.projectionMatrix,!1,s),t.uniformMatrix4fv(f.viewMatrix,!1,m);var d=function(r){var e=r.topology,o=r.positionBuffer,a=r.normalBuffer,n=r.colorBuffer;try{t.useProgram(c),w(t,e,l.position,o,l.color,n,l.normal,a)}finally{n&&t.deleteBuffer(n),a&&t.deleteBuffer(a),o&&t.deleteBuffer(o)}},b=function(r){var e=r.topology,o=r.positionBuffer,i=r.normalBuffer,u=r.colorBuffer,c=r.textureCoordBuffer;try{t.useProgram(a),w(t,e,n.position,o,n.color,u,n.normal,i,n.textureCoords,c)}finally{c&&t.deleteBuffer(c),u&&t.deleteBuffer(u),i&&t.deleteBuffer(i),o&&t.deleteBuffer(o)}};t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),t.cullFace(t.FRONT),t.useProgram(c),t.uniformMatrix4fv(f.modelMatrix,!1,h.b.scale(h.b.create(),F,[1.2,1.2,1])),t.uniformMatrix4fv(f.normalMatrix,!1,h.b.scale(h.b.create(),F,[1/1.2,1/1.2,1])),d(y(t)),t.cullFace(t.BACK),t.useProgram(a);var E=h.b.translate(h.b.create(),F,[0,0,-g]);t.uniformMatrix4fv(i.modelMatrix,!1,h.b.scale(h.b.create(),E,[1.199,1.199,1]));var A=h.a.scale(h.a.create(),h.a.translate(h.a.create(),p,[.5,.5]),[.75,-.75]);t.uniformMatrix4fv(i.normalMatrix,!1,h.b.scale(h.b.create(),E,[1/1.2,1/1.2,1])),t.uniformMatrix3fv(i.textureMatrix,!1,A),t.uniform1i(i.sampler,10),b(function(r){for(var t=[],e=[0,0,0],o=[].concat(x),a=[0,0,1],n=[0,0],i=0,u=1,c=0;c<2*Math.PI+.001;c+=T,u++){var l=1*Math.cos(c),f=1*Math.sin(c);e.push(l,f,0),a.push(0,0,1),o.push.apply(o,x),n.push(l/1,f/1)}return t.push({mode:r.TRIANGLE_FAN,first:i,count:u-i}),i=u,{topology:t,positionBuffer:R(r,e),normalBuffer:R(r,a),colorBuffer:R(r,o),textureCoordBuffer:R(r,n)}}(t)),t.useProgram(a),t.uniformMatrix4fv(i.projectionMatrix,!1,s),t.uniformMatrix4fv(i.viewMatrix,!1,m),t.uniformMatrix4fv(i.modelMatrix,!1,F),t.uniformMatrix3fv(i.textureMatrix,!1,p);for(var I=0;I<4;I++)t.uniform1i(i.sampler,I),b(P(t,e,I));var _=function(r,e,o,a){var n=function(r,t,e,o){return{topology:[{mode:r.TRIANGLE_STRIP,first:0,count:4}],positionBuffer:R(r,[-e,-.2*o,t,+e,-.2*o,t,-e,o,t,+e,o,t]),normalBuffer:R(r,[0,0,1,0,0,1,0,0,1,0,0,1]),colorBuffer:R(r,[].concat(x,x,x,x))}}(t,r,e,o),i=Object(v.a)(n.topology,1)[0],u=i.mode,s=i.first,m=i.count,p=n.positionBuffer,M=n.normalBuffer,d=n.colorBuffer;try{t.useProgram(c);var g=h.b.rotateZ(h.b.create(),F,-a);t.uniformMatrix4fv(f.modelMatrix,!1,g),t.uniformMatrix4fv(f.normalMatrix,!1,g),B(t,l.position,p,3,t.FLOAT),B(t,l.normal,M,3,t.FLOAT),B(t,l.color,d,3,t.FLOAT);try{t.drawArrays(u,s,m)}finally{C(t,l.color),C(t,l.normal),C(t,l.position)}}finally{t.deleteBuffer(d),t.deleteBuffer(M),t.deleteBuffer(p)}};_(.01,.02,.6,e),_(.02,.02,.8,12*e);var N=function(r,t){for(var e=.05,o=.01,a=Math.sqrt(e*e+o*o),n=e/a,i=o/a,u=[0,0,t+o],c=[0,0,1],l=[].concat(x),f=0;f<2*Math.PI;f+=Math.PI/30)u.push(e*Math.cos(f),e*Math.sin(f),t),c.push(i*Math.cos(f),i*Math.sin(f),n),l.push.apply(l,x);var s=u.length/3;return{topology:[{mode:r.TRIANGLE_FAN,first:0,count:s}],positionBuffer:R(r,u),normalBuffer:R(r,c),colorBuffer:R(r,l)}}(t,.03),L=Object(v.a)(N.topology,1)[0],D=L.mode,j=L.first,X=L.count,G=N.positionBuffer,V=N.normalBuffer,z=N.colorBuffer;try{t.useProgram(c),t.uniformMatrix4fv(f.modelMatrix,!1,F),t.uniformMatrix4fv(f.normalMatrix,!1,F),B(t,l.position,G,3,t.FLOAT),B(t,l.normal,V,3,t.FLOAT),B(t,l.color,z,3,t.FLOAT);try{t.drawArrays(D,j,X)}finally{C(t,l.position),C(t,l.color)}}finally{t.deleteBuffer(z),t.deleteBuffer(G)}var Y=h.b.rotateX(h.b.create(),h.b.translate(h.b.create(),F,[0,0,-g]),Math.PI);t.uniformMatrix4fv(f.modelMatrix,!1,h.b.scale(h.b.create(),Y,[1.2,1.2,.24])),t.uniformMatrix4fv(f.normalMatrix,!1,h.b.scale(h.b.create(),Y,[1/1.2,1/1.2,1/.24])),d(function(r){for(var t=[],e=[0,0,1],o=[0,0,1],a=[].concat(M),n=0,i=1,u=1*Math.sin(T),c=1*Math.cos(T),l=-Math.PI;l<Math.PI+.001;l+=T,i++){var f=u*Math.cos(l),s=u*Math.sin(l);e.push(f,s,c),o.push(f,s,c),a.push.apply(a,M)}t.push({mode:r.TRIANGLE_FAN,first:n,count:i-n}),n=i;for(var m=T;m<.5*Math.PI-.001;m+=T){for(var v=1*Math.sin(m),h=1*Math.sin(m+T),p=1*Math.cos(m),x=1*Math.cos(m+T),d=-Math.PI;d<Math.PI+.001;d+=T,i+=2){var g=v*Math.cos(d),b=h*Math.cos(d),E=v*Math.sin(d),A=h*Math.sin(d);e.push(g,E,p),o.push(g,E,p),a.push.apply(a,M),e.push(b,A,x),o.push(b,A,x),a.push.apply(a,M)}t.push({mode:r.TRIANGLE_STRIP,first:n,count:i-n}),n=i}return{topology:t,positionBuffer:R(r,e),normalBuffer:R(r,o),colorBuffer:R(r,a)}}(t)),t.uniformMatrix4fv(f.modelMatrix,!1,h.b.scale(h.b.create(),F,[1.2,1.2,1])),t.uniformMatrix4fv(f.normalMatrix,!1,h.b.scale(h.b.create(),F,[1/1.2,1/1.2,1])),d(y(t))}),[e,F]);return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("canvas",{width:"768px",height:"768px",ref:S,onPointerDown:function(r){var t=r.currentTarget,e=r.pointerId,o=r.clientX,a=r.clientY;t.setPointerCapture(e),b({x:o,y:a})},onPointerMove:function(r){var t=r.clientX,e=r.clientY;if(d){var o=t-d.x,a=e-d.y,n=Math.sqrt(o*o+a*a);if(n>0){var i=h.b.fromRotation(h.b.create(),.01*n,[a,o,0]);L(h.b.mul(h.b.create(),i,F)),b({x:t,y:e})}}},onPointerUp:function(r){var t=r.currentTarget,e=r.pointerId;b(null),t.releasePointerCapture(e)}}),c.a.createElement("p",null,"M\xf6bius Clock")))}function E(r,t,e){var o=r.createTexture();r.activeTexture(t),r.bindTexture(r.TEXTURE_2D,o),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,new Uint8Array([255,255,255,255]));var a=new Image;return a.onload=function(){r.activeTexture(t),r.bindTexture(r.TEXTURE_2D,o),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,a),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),A(a.width)&&A(a.height)?(r.generateMipmap(r.TEXTURE_2D),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR_MIPMAP_LINEAR)):r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR)},a.src=e,o}function A(r){return 0===(r&r-1)}function y(r){for(var t=[],e=[],o=[],a=[],n=0;n<2*Math.PI+.001;n+=T)e.push(1*Math.cos(n),1*Math.sin(n),.1),o.push(Math.cos(n),Math.sin(n),0),a.push.apply(a,M),e.push(1*Math.cos(n),1*Math.sin(n),-g),o.push(Math.cos(n),Math.sin(n),0),a.push.apply(a,M);return t.push({mode:r.TRIANGLE_STRIP,first:0,count:e.length/3}),{topology:t,positionBuffer:R(r,e),normalBuffer:R(r,o),colorBuffer:R(r,a)}}function P(r,t,e){var o=function(r,t){for(var e=[],o=[],a=[],n=[],i=0;i<1.001;i+=.033333){var u=(t+i)*Math.PI,c=1.5*(u-r),l=Math.cos(u),f=Math.sin(u),s=Math.cos(c),m=Math.sin(c),v=1+g*Math.cos(c),h=1-g*Math.cos(c);o.push(v*Math.sin(u),v*Math.cos(u),-g*Math.sin(c)),o.push(h*Math.sin(u),h*Math.cos(u),.1*Math.sin(c)),a.push(-f*m,-l*m,l*l*s+s*f*f),a.push(-f*m,-l*m,l*l*s+s*f*f);for(var p=[0,0,0],M=0;M<3;M++)p[M]=(1-i)*d[t][M]+i*d[(t+1)%d.length][M];n.push.apply(n,p.concat(p)),e.push(i,0,i,1)}return{positions:o,normals:a,colors:n,textureCoords:e}}(t,e),a=o.positions,n=o.normals,i=o.colors,u=o.textureCoords;return{topology:[{mode:r.TRIANGLE_STRIP,first:0,count:a.length/3}],positionBuffer:R(r,a),normalBuffer:R(r,n),colorBuffer:R(r,i),textureCoordBuffer:R(r,u)}}function R(r,t){var e=r.createBuffer();if(!e)throw new Error("Failed to create buffer.");return r.bindBuffer(r.ARRAY_BUFFER,e),r.bufferData(r.ARRAY_BUFFER,new Float32Array(t),r.STATIC_DRAW),e}function w(r,t,e,o,a,n,i,u,c,l){B(r,e,o,3,r.FLOAT),B(r,a,n,3,r.FLOAT),u&&"number"===typeof i&&B(r,i,u,3,r.FLOAT),l&&"number"===typeof c&&B(r,c,l,2,r.FLOAT);try{var f,s=Object(m.a)(t);try{for(s.s();!(f=s.n()).done;){var v=f.value,h=v.mode,p=v.first,M=v.count;r.drawArrays(h,p,M)}}catch(x){s.e(x)}finally{s.f()}}finally{l&&"number"===typeof c&&C(r,c),u&&"number"===typeof i&&C(r,i),C(r,a),C(r,e)}}function B(r,t,e,o,a){r.bindBuffer(r.ARRAY_BUFFER,e),r.vertexAttribPointer(t,o,a,!1,0,0),r.enableVertexAttribArray(t)}function C(r,t){r.disableVertexAttribArray(t)}function I(r,t,e){var o=r.createProgram();if(!o)throw new Error("Failed to create program.");if(r.attachShader(o,_(r,r.VERTEX_SHADER,t)),r.attachShader(o,_(r,r.FRAGMENT_SHADER,e)),r.linkProgram(o),!r.getProgramParameter(o,r.LINK_STATUS)){var a="Unable to initialize the shader program: ".concat(r.getProgramInfoLog(o));throw r.deleteProgram(o),new Error(a)}return o}function _(r,t,e){var o=r.createShader(t);if(!o)throw new Error("Failed to create shader.");if(r.shaderSource(o,e),r.compileShader(o),!r.getShaderParameter(o,r.COMPILE_STATUS)){var a="An error occurred compiling the shaders: ".concat(r.getShaderInfoLog(o));throw r.deleteShader(o),new Error(a)}return o}function N(r,t,e){return r.getUniformLocation(t,e)||function(r){throw new Error(r)}('No uniform named "'.concat(e,'" was found.'))}e(21);f.a.render(c.a.createElement(b,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f96df58f.chunk.js.map