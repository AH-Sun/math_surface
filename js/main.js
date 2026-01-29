"use strict";
console.clear();
import * as THREE from "https://esm.sh/three";
import { OrbitControls as t } from "https://esm.sh/three/addons/controls/OrbitControls.js";
import { ParametricGeometry as e } from "https://esm.sh/three/addons/geometries/ParametricGeometry.js";
import * as BufferGeometryUtils from "https://esm.sh/three/addons/utils/BufferGeometryUtils.js";

!(function () {
  let a,
    n,
    s,
    i,
    h,
    r,
    o,
    M = [],
    c = [];
  (r = new THREE.MeshNormalMaterial({ side: THREE.DoubleSide, wireframe: !1 })),
    ((a = new THREE.PerspectiveCamera(50, 1, 1, 10)).position.z = 3);
  function l(t, e) {
    t.preventDefault();
    let a = null;
    t.target && t.target.dataset.index && (a = t.target.dataset.index),
      a && (M[a].children[0].material.wireframe = e);
  }
  function m(t, a, e) {
    (t *= 2 * Math.PI), (a *= 2 * Math.PI);
    var s = 0.5 * ((Math.cos(a) ** 20 + Math.sin(a) ** 20) ** 0.05),
      h = (4 + s * Math.cos(a + 3 * t)) * Math.cos(t),
      n = (4 + s * Math.cos(a + 3 * t)) * Math.sin(t),
      M = s * Math.sin(a + 3 * t);
    return e.set(h, n, M);
}
  
  function I(t, a, e) {
    (t = 2 * Math.PI * t), (a = 2 * Math.PI * a);
    let s = Math.sin(7 * t) + 2,
      h = 0.5 * (
        8 * Math.cos(t) -
        Math.cos(8 * t) -
        (7 / 8) * s * Math.sin((9 * t) / 2) * Math.cos(a)),
      n = 0.5 * s * Math.sin(a),
      M = 0.5 * (
        8 * Math.sin(t) -
        Math.sin(8 * t) +
        (7 / 8) * s * Math.cos((9 * t) / 2) * Math.cos(a));
    return e.set(h, n, M);
  }
  function Q(t, a, e) {
    (t *= 2 * Math.PI), (a *= 2 * Math.PI);
    var s = 0.6 * ((Math.cos(a) ** 4 + Math.sin(a) ** 4) ** 0.5),
      h = (4 + s * Math.cos(a + 3 * t)) * Math.cos(t),
      n = (4 + s * Math.cos(a + 3 * t)) * Math.sin(t),
      M = s * Math.sin(a + 3 * t);
    return e.set(h, n, M);
  }
  function w(t, a, e) {
    (t *= 2 * Math.PI), (a *= 2 * Math.PI);
    var s = 0.5 * ((Math.cos(a) ** 4 + Math.sin(a) ** 4) ** -0.5),
      h = (4 + s * Math.cos(a + 3 * t)) * Math.cos(t),
      n = (4 + s * Math.cos(a + 3 * t)) * Math.sin(t),
      M = s * Math.sin(a + 3 * t);
    return e.set(h, n, M);
  }
  function T(t, a, e) {
    (t *= 2 * Math.PI), (a *= 2 * Math.PI);
    var s = 0.6 * ((Math.cos(a) ** 20 + Math.sin(a) ** 20) ** 0.03),
      h = (4 + s * Math.cos(a + 3 * t)) * Math.cos(t),
      n = (4 + s * Math.cos(a + 3 * t)) * Math.sin(t),
      M = s * Math.sin(a + 3 * t);
    return e.set(h, n, M);
  }
  function k(t, a, e) {
    (t = t * Math.PI * 2), (a = a * Math.PI * 2);
    let s = Math.cos(a) * (5 - (5 + Math.cos(4 * t)) * Math.cos(t - 4 * a)),
      h = Math.sin(a) * (5 - (5 + Math.cos(4 * t)) * Math.cos(t - 4 * a)),
      n = 5 + Math.sin(4 * t);
    return e.set(s, h, n);
  }
  function g(t, a, e) {
    (t = t * Math.PI * 2), (a = a * Math.PI * 2);
    let s = Math.cos(a) * (6 - (2 + Math.sin(4 * t))),
      h = Math.sin(a) * (6 - (2 + Math.sin(4 * t))),
      n = -Math.cos(t - 4 * a) * (2 + Math.sin(4 * t));
    return e.set(s, h, n);
  }
  function d(t, a, e) {
    (t = t * Math.PI * 2), (a = a * Math.PI * 2);
    let s = Math.cos(a) * (6 - (2 + 0.5 * Math.sin(4 * t))),
      h = Math.sin(a) * (6 - (2 + 0.5 * Math.sin(4 * t))),
      n = -Math.cos(t - 4 * a) * (2 + 0.5 * Math.sin(4 * t));
    return e.set(s, h, n);
  }
  function a1(t, e, a) {
    (t *= Math.PI), (e = e * Math.PI * 2);
    var d = 1.3 * (1 + 0.2 * (Math.abs( Math.sin(4*e + 8*t)*Math.cos(2*t))-1))*(Math.cos(Math.sin(4*t))),
      n = d * Math.atan((Math.sin(t))**2)* Math.cos(e),
      s = d * Math.atan((Math.sin(t))**2)* Math.sin(e),
      i = 1/8 * Math.cos(7*t) * Math.sin(3*t);
    return a.set(n, s, i);
  }
  function a2(t, e, a) {
    (t *= Math.PI), (e = e * Math.PI * 2);
    var d = 1.3 * (1 + 0.2 * (Math.abs( Math.sin(4*e + 4*t))-1))*(Math.cos(Math.cos(5*t))),
      n = d * Math.atan((Math.sin(t))**2)* Math.cos(e),
      s = d * Math.atan((Math.sin(t))**2)* Math.sin(e),
      i = 1/8 * Math.cos(9*t) * Math.sin(5*t);
    return a.set(n, s, i);
  }
  function a3(t, e, a) {
    (t *= Math.PI), (e = e * Math.PI * 2);
    var d = 0.7 * (1 + 0.2 * (Math.abs( Math.sin(4*e + 4*t))-1))*(Math.cos(Math.cos(5*t))),
      n = d * Math.atan((Math.cos(t))**(-2))* Math.cos(e),
      s = d * Math.atan((Math.cos(t))**(-2))* Math.sin(e),
      i = 1/8 * Math.cos(9*t) * Math.sin(5*t);
    return a.set(n, s, i);
  }
  function a4(t, e, a) {
    (t *= Math.PI), (e = e * Math.PI * 2);
    var d = 1.4 * (1 + 0.2 * (Math.abs( Math.sin(4*e + 1*t))-1))*(Math.cos(Math.cos(5*t))),
      n = d * Math.atan((Math.cos(t))**(3))* Math.cos(e),
      s = d * Math.atan((Math.cos(t))**(3))* Math.sin(e),
      i = 1/8 * Math.cos(9*t) * Math.sin(5*t);
    return a.set(n, s, i);
  }
  function a5(t, e, a) {
    (t *= Math.PI), (e = e * Math.PI * 2);
    var d = 0.7 * (1 + 0.2 * (Math.abs( Math.sin(4*e + 1*t))-1))*(Math.cos(Math.cos(5*t))),
      n = d * Math.atan((Math.tan(t))**(4))* Math.cos(e),
      s = d * Math.atan((Math.tan(t))**(4))* Math.sin(e),
      i = 1/8 * Math.cos(9*t) * Math.sin(5*t);
    return a.set(n, s, i);
  }
  function a6(t, e, a) {
    (t *= Math.PI), (e = e * Math.PI * 2);
    var d = 0.7 * (1 + 0.2 * (Math.abs( Math.sin(4*e + 1*t))-1))*(Math.cos(Math.cos(5*t))),
      n = d * Math.atan((Math.tan(t))**(-3))* Math.cos(e),
      s = d * Math.atan((Math.tan(t))**(-3))* Math.sin(e),
      i = 1/8 * Math.cos(9*t) * Math.sin(5*t);
    return a.set(n, s, i);
  }
  function a7(t, e, a) {
    (t *= Math.PI), (e = e * Math.PI * 2);
    var d = 0.7 * (1 + 0.2 * (Math.abs( Math.sin(4*e + 1*t))-1))*(Math.cos(Math.cos(3*t))),
      n = d * Math.atan((Math.cos(t))**(-4))* Math.cos(e),
      s = d * Math.atan((Math.cos(t))**(-4))* Math.sin(e),
      i = 1/8 * Math.cos(9*t) * Math.sin(5*t);
    return a.set(n, s, i);
  }
  function p(t, a, e) {
    (t *= 2 * Math.PI), (a *= 2 * Math.PI);
    var s = 0.6 * ((Math.cos(a) ** 12 + Math.sin(a) ** 12) ** 0.5),
      h = (4 + s * Math.cos(a + 3 * t)) * Math.cos(t),
      n = (4 + s * Math.cos(a + 3 * t)) * Math.sin(t),
      M = s * Math.sin(a + 3 * t);
    return e.set(h, n, M);
  }
  
  (a.fov = 2 * Math.atan(2 / (2 * a.position.z)) * (180 / Math.PI)),
    (o = document.getElementById("c")),
    (s = new THREE.WebGLRenderer({
      canvas: o,
      antialias: !0,
      alpha: !0
    })).setPixelRatio(window.devicePixelRatio),

    
    (h = new e(a6, 50, 100)).rotateZ(Math.PI / 2),
    (h.userData.title = "NO. S116"),
    c.push(h),
    (h = new e(a7, 50, 100)).rotateZ(Math.PI / 2),
    (h.userData.title = "NO. S115"),
    c.push(h),
    (h = new e(a5, 50, 100)).rotateZ(Math.PI / 2),
    (h.userData.title = "NO. S114"),
    c.push(h),
    (h = new e(a4, 50, 100)).rotateZ(Math.PI / 2),
    (h.userData.title = "NO. S113"),
    c.push(h),
    (h = new e(a2, 50, 100)).rotateZ(Math.PI / 2),
    (h.userData.title = "NO. S112"),
    c.push(h),
    (h = new e(a3, 50, 100)).rotateZ(Math.PI / 2),
    (h.userData.title = "NO. S111"),
    c.push(h),
    (h = new e(a1, 50, 100)).rotateZ(Math.PI / 2),
    (h.userData.title = "NO. S110"),
    c.push(h),
    (h = new e(k, 50, 100)).rotateZ(Math.PI / 2),
    (h.userData.title = "NO. S109"),
    h.scale(0.1, 0.1, 0.1),
    c.push(h),
    (h = new e(p, 100, 30)).rotateZ(Math.PI / 2),
    h.scale(0.23, 0.23, 0.23),
    (h.userData.title = "NO. S108"),
    c.push(h),
    (h = new e(g, 50, 100)).rotateZ(Math.PI / 2),
    (h.userData.title = "NO. S107"),
    h.scale(0.2, 0.2, 0.05),
    c.push(h),
    (h = new e(d, 50, 100)).rotateZ(Math.PI / 2),
    (h.userData.title = "NO. S106"),
    h.scale(0.22, 0.22, 0.05),
    c.push(h),
    (h = new e(T, 50, 100)).rotateZ(Math.PI / 2),
    (h.userData.title = "NO. S105"),
    h.scale(0.23, 0.23, 0.23),
    c.push(h),
    (h = new e(I, 100, 30)).rotateX(Math.PI / 2),
    h.scale(0.2, 0.2, 0.2),
    (h.userData.title = "NO. S104"),
    c.push(h),
    (h = new e(Q, 50, 100)).rotateZ(Math.PI / 2),
    (h.userData.title = "NO. S103"),
    h.scale(0.23, 0.23, 0.23),
    c.push(h),
    (h = new e(w, 50, 100)).rotateZ(Math.PI / 2),
    (h.userData.title = "NO. S102"),
    h.scale(0.23, 0.23, 0.23),
    c.push(h),
    (h = new e(m, 100, 30)).rotateZ(Math.PI / 2),
    h.scale(0.23, 0.23, 0.23),
    (h.userData.title = "NO. S101"),
    c.push(h),

    (function () {
      const e = document.getElementById("gallery"),
        s = new IntersectionObserver((t) => {
          for (const e of t)
            e.isIntersecting
              ? (e.target.dataset.inView = !0)
              : (e.target.dataset.inView = !1);
        });
      for (let o = 0; o < c.length; o++) {
        n = new THREE.Scene();
        const u = document.createElement("article");
        u.className = "card";
        const d = document.createElement("div");
        (d.className = "geo"),
          (d.dataset.index = o),
          (d.dataset.inView = !0),
          u.appendChild(d);
        const m = document.createElement("div");
        (m.className = "title"),
          (m.innerText = "Parametric surface " + (o + 1)),
          u.appendChild(m),
          (n.userData.element = d),
          e.appendChild(u),
          (a = a.clone()),
          (n.userData.camera = a),
          ((i = new t(n.userData.camera, n.userData.element)).minDistance = 2),
          (i.maxDistance = 10),
          (i.enablePan = !1),
          (i.enableZoom = !1),
          (n.userData.controls = i),
          (h = c[c.length - o - 1]),
          (h = BufferGeometryUtils.mergeVertices(h)).computeBoundingSphere(),
          h.computeVertexNormals(),
          h.center(),
          (r = r.clone()),
          n.add(new THREE.Mesh(h, r)),
          h.userData.title && (m.innerHTML = h.userData.title),
          n.add(new THREE.HemisphereLight(11184810, 4473924, 3));
        const P = new THREE.DirectionalLight(16777215, 1.5);
        P.position.set(1, 1, 1),
          n.add(P),
          M.push(n),
          d.addEventListener(
            "pointerenter",
            (t) => {
              l(t, !0);
            },
            !1
          ),
          d.addEventListener(
            "pointerleave",
            (t) => {
              l(t, !1);
            },
            !1
          ),
          d.addEventListener(
            "pointerout",
            (t) => {
              l(t, !1);
            },
            !1
          ),
          d.addEventListener(
            "pointercancel",
            (t) => {
              l(t, !1);
            },
            !1
          ),
          s.observe(d);
      }
    })(),
    (function t() {
      requestAnimationFrame(t);
      (function () {
        const t = o.clientWidth,
          e = o.clientHeight;
        (o.width === t && o.height === e) || s.setSize(t, e, !1);
      })(),
        s.setScissorTest(!1),
        s.clear(),
        s.setScissorTest(!0),
        M.forEach(function (t) {
          const e = t.userData.element,
            a = e.getBoundingClientRect();
          if ("false" == e.dataset.inView) return;
          t.children[0].rotation.y = 2e-4 * Date.now();
          let n = a.width,
            i = a.height;
          (n = Math.ceil(n)), (i = Math.ceil(i));
          let h = a.left,
            r =
              document.documentElement.offsetHeight -
              a.bottom -
              (document.documentElement.offsetHeight -
                s.domElement.getBoundingClientRect().bottom);
          (h = Math.ceil(h)),
            (r = Math.ceil(r)),
            s.setViewport(h, r, n, i),
            s.setScissor(h, r, n, i);
          const o = t.userData.camera;
          s.render(t, o);
        });
    })();
})();
const a = new Lenis();
function n(t) {
  a.raf(t), requestAnimationFrame(n);
}
requestAnimationFrame(n);
