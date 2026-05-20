/**
* @vue/shared v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Mi(i) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const t of i.split(",")) e[t] = 1;
  return (t) => t in e;
}
const we = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Fn = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], He = () => {
}, Yd = () => !1, dr = (i) => i.charCodeAt(0) === 111 && i.charCodeAt(1) === 110 && // uppercase letter
(i.charCodeAt(2) > 122 || i.charCodeAt(2) < 97), Us = (i) => i.startsWith("onUpdate:"), De = Object.assign, Bc = (i, e) => {
  const t = i.indexOf(e);
  t > -1 && i.splice(t, 1);
}, r0 = Object.prototype.hasOwnProperty, ue = (i, e) => r0.call(i, e), q = Array.isArray, On = (i) => pr(i) === "[object Map]", ll = (i) => pr(i) === "[object Set]", rf = (i) => pr(i) === "[object Date]", K = (i) => typeof i == "function", $e = (i) => typeof i == "string", Gt = (i) => typeof i == "symbol", ge = (i) => i !== null && typeof i == "object", Xc = (i) => (ge(i) || K(i)) && K(i.then) && K(i.catch), Kd = Object.prototype.toString, pr = (i) => Kd.call(i), Wc = (i) => pr(i).slice(8, -1), al = (i) => pr(i) === "[object Object]", Fc = (i) => $e(i) && i !== "NaN" && i[0] !== "-" && "" + parseInt(i, 10) === i, Ns = /* @__PURE__ */ Mi(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), o0 = /* @__PURE__ */ Mi(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), cl = (i) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (t) => e[t] || (e[t] = i(t));
}, l0 = /-\w/g, it = cl(
  (i) => i.replace(l0, (e) => e.slice(1).toUpperCase())
), a0 = /\B([A-Z])/g, At = cl(
  (i) => i.replace(a0, "-$1").toLowerCase()
), hl = cl((i) => i.charAt(0).toUpperCase() + i.slice(1)), an = cl(
  (i) => i ? `on${hl(i)}` : ""
), ui = (i, e) => !Object.is(i, e), _n = (i, ...e) => {
  for (let t = 0; t < i.length; t++)
    i[t](...e);
}, xo = (i, e, t, n = !1) => {
  Object.defineProperty(i, e, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: t
  });
}, fl = (i) => {
  const e = parseFloat(i);
  return isNaN(e) ? i : e;
}, of = (i) => {
  const e = $e(i) ? Number(i) : NaN;
  return isNaN(e) ? i : e;
};
let lf;
const mr = () => lf || (lf = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function qc(i) {
  if (q(i)) {
    const e = {};
    for (let t = 0; t < i.length; t++) {
      const n = i[t], s = $e(n) ? u0(n) : qc(n);
      if (s)
        for (const r in s)
          e[r] = s[r];
    }
    return e;
  } else if ($e(i) || ge(i))
    return i;
}
const c0 = /;(?![^(]*\))/g, h0 = /:([^]+)/, f0 = /\/\*[^]*?\*\//g;
function u0(i) {
  const e = {};
  return i.replace(f0, "").split(c0).forEach((t) => {
    if (t) {
      const n = t.split(h0);
      n.length > 1 && (e[n[0].trim()] = n[1].trim());
    }
  }), e;
}
function Hc(i) {
  let e = "";
  if ($e(i))
    e = i;
  else if (q(i))
    for (let t = 0; t < i.length; t++) {
      const n = Hc(i[t]);
      n && (e += n + " ");
    }
  else if (ge(i))
    for (const t in i)
      i[t] && (e += t + " ");
  return e.trim();
}
const d0 = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", p0 = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", m0 = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", g0 = /* @__PURE__ */ Mi(d0), O0 = /* @__PURE__ */ Mi(p0), b0 = /* @__PURE__ */ Mi(m0), y0 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", x0 = /* @__PURE__ */ Mi(y0);
function Zd(i) {
  return !!i || i === "";
}
function v0(i, e) {
  if (i.length !== e.length) return !1;
  let t = !0;
  for (let n = 0; t && n < i.length; n++)
    t = gr(i[n], e[n]);
  return t;
}
function gr(i, e) {
  if (i === e) return !0;
  let t = rf(i), n = rf(e);
  if (t || n)
    return t && n ? i.getTime() === e.getTime() : !1;
  if (t = Gt(i), n = Gt(e), t || n)
    return i === e;
  if (t = q(i), n = q(e), t || n)
    return t && n ? v0(i, e) : !1;
  if (t = ge(i), n = ge(e), t || n) {
    if (!t || !n)
      return !1;
    const s = Object.keys(i).length, r = Object.keys(e).length;
    if (s !== r)
      return !1;
    for (const o in i) {
      const l = i.hasOwnProperty(o), a = e.hasOwnProperty(o);
      if (l && !a || !l && a || !gr(i[o], e[o]))
        return !1;
    }
  }
  return String(i) === String(e);
}
function S0(i, e) {
  return i.findIndex((t) => gr(t, e));
}
const Jd = (i) => !!(i && i.__v_isRef === !0), Ze = (i) => $e(i) ? i : i == null ? "" : q(i) || ge(i) && (i.toString === Kd || !K(i.toString)) ? Jd(i) ? Ze(i.value) : JSON.stringify(i, ep, 2) : String(i), ep = (i, e) => Jd(e) ? ep(i, e.value) : On(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (t, [n, s], r) => (t[Vl(n, r) + " =>"] = s, t),
    {}
  )
} : ll(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((t) => Vl(t))
} : Gt(e) ? Vl(e) : ge(e) && !q(e) && !al(e) ? String(e) : e, Vl = (i, e = "") => {
  var t;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Gt(i) ? `Symbol(${(t = i.description) != null ? t : e})` : i
  );
};
/**
* @vue/reactivity v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function zt(i, ...e) {
  console.warn(`[Vue warn] ${i}`, ...e);
}
let Ke;
class w0 {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e = !1) {
    this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && Ke && (Ke.active ? (this.parent = Ke, this.index = (Ke.scopes || (Ke.scopes = [])).push(
      this
    ) - 1) : (this._active = !1, this._warnOnRun = !1));
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let e, t;
      if (this.scopes)
        for (e = 0, t = this.scopes.length; e < t; e++)
          this.scopes[e].pause();
      for (e = 0, t = this.effects.length; e < t; e++)
        this.effects[e].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let e, t;
      if (this.scopes)
        for (e = 0, t = this.scopes.length; e < t; e++)
          this.scopes[e].resume();
      for (e = 0, t = this.effects.length; e < t; e++)
        this.effects[e].resume();
    }
  }
  run(e) {
    if (this._active) {
      const t = Ke;
      try {
        return Ke = this, e();
      } finally {
        Ke = t;
      }
    } else process.env.NODE_ENV !== "production" && this._warnOnRun && zt("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ke, Ke = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Ke === this)
        Ke = this.prevScope;
      else {
        let e = Ke;
        for (; e; ) {
          if (e.prevScope === this) {
            e.prevScope = this.prevScope;
            break;
          }
          e = e.prevScope;
        }
      }
      this.prevScope = void 0;
    }
  }
  stop(e) {
    if (this._active) {
      this._active = !1;
      let t, n;
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].stop();
      for (this.effects.length = 0, t = 0, n = this.cleanups.length; t < n; t++)
        this.cleanups[t]();
      if (this.cleanups.length = 0, this.scopes) {
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !e) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function P0() {
  return Ke;
}
let Se;
const Ll = /* @__PURE__ */ new WeakSet();
class tp {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ke && (Ke.active ? Ke.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ll.has(this) && (Ll.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || np(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, af(this), sp(this);
    const e = Se, t = Ut;
    Se = this, Ut = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && Se !== this && zt(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), rp(this), Se = e, Ut = t, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep)
        zc(e);
      this.deps = this.depsTail = void 0, af(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ll.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Aa(this) && this.run();
  }
  get dirty() {
    return Aa(this);
  }
}
let ip = 0, Rs, _s;
function np(i, e = !1) {
  if (i.flags |= 8, e) {
    i.next = _s, _s = i;
    return;
  }
  i.next = Rs, Rs = i;
}
function Uc() {
  ip++;
}
function Gc() {
  if (--ip > 0)
    return;
  if (_s) {
    let e = _s;
    for (_s = void 0; e; ) {
      const t = e.next;
      e.next = void 0, e.flags &= -9, e = t;
    }
  }
  let i;
  for (; Rs; ) {
    let e = Rs;
    for (Rs = void 0; e; ) {
      const t = e.next;
      if (e.next = void 0, e.flags &= -9, e.flags & 1)
        try {
          e.trigger();
        } catch (n) {
          i || (i = n);
        }
      e = t;
    }
  }
  if (i) throw i;
}
function sp(i) {
  for (let e = i.deps; e; e = e.nextDep)
    e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function rp(i) {
  let e, t = i.depsTail, n = t;
  for (; n; ) {
    const s = n.prevDep;
    n.version === -1 ? (n === t && (t = s), zc(n), k0(n)) : e = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = s;
  }
  i.deps = e, i.depsTail = t;
}
function Aa(i) {
  for (let e = i.deps; e; e = e.nextDep)
    if (e.dep.version !== e.version || e.dep.computed && (op(e.dep.computed) || e.dep.version !== e.version))
      return !0;
  return !!i._dirty;
}
function op(i) {
  if (i.flags & 4 && !(i.flags & 16) || (i.flags &= -17, i.globalVersion === Gs) || (i.globalVersion = Gs, !i.isSSR && i.flags & 128 && (!i.deps && !i._dirty || !Aa(i))))
    return;
  i.flags |= 2;
  const e = i.dep, t = Se, n = Ut;
  Se = i, Ut = !0;
  try {
    sp(i);
    const s = i.fn(i._value);
    (e.version === 0 || ui(s, i._value)) && (i.flags |= 128, i._value = s, e.version++);
  } catch (s) {
    throw e.version++, s;
  } finally {
    Se = t, Ut = n, rp(i), i.flags &= -3;
  }
}
function zc(i, e = !1) {
  const { dep: t, prevSub: n, nextSub: s } = i;
  if (n && (n.nextSub = s, i.prevSub = void 0), s && (s.prevSub = n, i.nextSub = void 0), process.env.NODE_ENV !== "production" && t.subsHead === i && (t.subsHead = s), t.subs === i && (t.subs = n, !n && t.computed)) {
    t.computed.flags &= -5;
    for (let r = t.computed.deps; r; r = r.nextDep)
      zc(r, !0);
  }
  !e && !--t.sc && t.map && t.map.delete(t.key);
}
function k0(i) {
  const { prevDep: e, nextDep: t } = i;
  e && (e.nextDep = t, i.prevDep = void 0), t && (t.prevDep = e, i.nextDep = void 0);
}
let Ut = !0;
const lp = [];
function jt() {
  lp.push(Ut), Ut = !1;
}
function Yt() {
  const i = lp.pop();
  Ut = i === void 0 ? !0 : i;
}
function af(i) {
  const { cleanup: e } = i;
  if (i.cleanup = void 0, e) {
    const t = Se;
    Se = void 0;
    try {
      e();
    } finally {
      Se = t;
    }
  }
}
let Gs = 0;
class C0 {
  constructor(e, t) {
    this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class jc {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(e) {
    if (!Se || !Ut || Se === this.computed)
      return;
    let t = this.activeLink;
    if (t === void 0 || t.sub !== Se)
      t = this.activeLink = new C0(Se, this), Se.deps ? (t.prevDep = Se.depsTail, Se.depsTail.nextDep = t, Se.depsTail = t) : Se.deps = Se.depsTail = t, ap(t);
    else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
      const n = t.nextDep;
      n.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = n), t.prevDep = Se.depsTail, t.nextDep = void 0, Se.depsTail.nextDep = t, Se.depsTail = t, Se.deps === t && (Se.deps = n);
    }
    return process.env.NODE_ENV !== "production" && Se.onTrack && Se.onTrack(
      De(
        {
          effect: Se
        },
        e
      )
    ), t;
  }
  trigger(e) {
    this.version++, Gs++, this.notify(e);
  }
  notify(e) {
    Uc();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let t = this.subsHead; t; t = t.nextSub)
          t.sub.onTrigger && !(t.sub.flags & 8) && t.sub.onTrigger(
            De(
              {
                effect: t.sub
              },
              e
            )
          );
      for (let t = this.subs; t; t = t.prevSub)
        t.sub.notify() && t.sub.dep.notify();
    } finally {
      Gc();
    }
  }
}
function ap(i) {
  if (i.dep.sc++, i.sub.flags & 4) {
    const e = i.dep.computed;
    if (e && !i.dep.subs) {
      e.flags |= 20;
      for (let n = e.deps; n; n = n.nextDep)
        ap(n);
    }
    const t = i.dep.subs;
    t !== i && (i.prevSub = t, t && (t.nextSub = i)), process.env.NODE_ENV !== "production" && i.dep.subsHead === void 0 && (i.dep.subsHead = i), i.dep.subs = i;
  }
}
const $a = /* @__PURE__ */ new WeakMap(), bn = /* @__PURE__ */ Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), Da = /* @__PURE__ */ Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), zs = /* @__PURE__ */ Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function qe(i, e, t) {
  if (Ut && Se) {
    let n = $a.get(i);
    n || $a.set(i, n = /* @__PURE__ */ new Map());
    let s = n.get(t);
    s || (n.set(t, s = new jc()), s.map = n, s.key = t), process.env.NODE_ENV !== "production" ? s.track({
      target: i,
      type: e,
      key: t
    }) : s.track();
  }
}
function di(i, e, t, n, s, r) {
  const o = $a.get(i);
  if (!o) {
    Gs++;
    return;
  }
  const l = (a) => {
    a && (process.env.NODE_ENV !== "production" ? a.trigger({
      target: i,
      type: e,
      key: t,
      newValue: n,
      oldValue: s,
      oldTarget: r
    }) : a.trigger());
  };
  if (Uc(), e === "clear")
    o.forEach(l);
  else {
    const a = q(i), c = a && Fc(t);
    if (a && t === "length") {
      const h = Number(n);
      o.forEach((f, u) => {
        (u === "length" || u === zs || !Gt(u) && u >= h) && l(f);
      });
    } else
      switch ((t !== void 0 || o.has(void 0)) && l(o.get(t)), c && l(o.get(zs)), e) {
        case "add":
          a ? c && l(o.get("length")) : (l(o.get(bn)), On(i) && l(o.get(Da)));
          break;
        case "delete":
          a || (l(o.get(bn)), On(i) && l(o.get(Da)));
          break;
        case "set":
          On(i) && l(o.get(bn));
          break;
      }
  }
  Gc();
}
function Dn(i) {
  const e = /* @__PURE__ */ ne(i);
  return e === i ? e : (qe(e, "iterate", zs), /* @__PURE__ */ dt(i) ? e : e.map(Zt));
}
function ul(i) {
  return qe(i = /* @__PURE__ */ ne(i), "iterate", zs), i;
}
function fi(i, e) {
  return /* @__PURE__ */ Kt(i) ? is(/* @__PURE__ */ Gi(i) ? Zt(e) : e) : Zt(e);
}
const E0 = {
  __proto__: null,
  [Symbol.iterator]() {
    return Bl(this, Symbol.iterator, (i) => fi(this, i));
  },
  concat(...i) {
    return Dn(this).concat(
      ...i.map((e) => q(e) ? Dn(e) : e)
    );
  },
  entries() {
    return Bl(this, "entries", (i) => (i[1] = fi(this, i[1]), i));
  },
  every(i, e) {
    return Pi(this, "every", i, e, void 0, arguments);
  },
  filter(i, e) {
    return Pi(
      this,
      "filter",
      i,
      e,
      (t) => t.map((n) => fi(this, n)),
      arguments
    );
  },
  find(i, e) {
    return Pi(
      this,
      "find",
      i,
      e,
      (t) => fi(this, t),
      arguments
    );
  },
  findIndex(i, e) {
    return Pi(this, "findIndex", i, e, void 0, arguments);
  },
  findLast(i, e) {
    return Pi(
      this,
      "findLast",
      i,
      e,
      (t) => fi(this, t),
      arguments
    );
  },
  findLastIndex(i, e) {
    return Pi(this, "findLastIndex", i, e, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(i, e) {
    return Pi(this, "forEach", i, e, void 0, arguments);
  },
  includes(...i) {
    return Xl(this, "includes", i);
  },
  indexOf(...i) {
    return Xl(this, "indexOf", i);
  },
  join(i) {
    return Dn(this).join(i);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...i) {
    return Xl(this, "lastIndexOf", i);
  },
  map(i, e) {
    return Pi(this, "map", i, e, void 0, arguments);
  },
  pop() {
    return bs(this, "pop");
  },
  push(...i) {
    return bs(this, "push", i);
  },
  reduce(i, ...e) {
    return cf(this, "reduce", i, e);
  },
  reduceRight(i, ...e) {
    return cf(this, "reduceRight", i, e);
  },
  shift() {
    return bs(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(i, e) {
    return Pi(this, "some", i, e, void 0, arguments);
  },
  splice(...i) {
    return bs(this, "splice", i);
  },
  toReversed() {
    return Dn(this).toReversed();
  },
  toSorted(i) {
    return Dn(this).toSorted(i);
  },
  toSpliced(...i) {
    return Dn(this).toSpliced(...i);
  },
  unshift(...i) {
    return bs(this, "unshift", i);
  },
  values() {
    return Bl(this, "values", (i) => fi(this, i));
  }
};
function Bl(i, e, t) {
  const n = ul(i), s = n[e]();
  return n !== i && !/* @__PURE__ */ dt(i) && (s._next = s.next, s.next = () => {
    const r = s._next();
    return r.done || (r.value = t(r.value)), r;
  }), s;
}
const T0 = Array.prototype;
function Pi(i, e, t, n, s, r) {
  const o = ul(i), l = o !== i && !/* @__PURE__ */ dt(i), a = o[e];
  if (a !== T0[e]) {
    const f = a.apply(i, r);
    return l ? Zt(f) : f;
  }
  let c = t;
  o !== i && (l ? c = function(f, u) {
    return t.call(this, fi(i, f), u, i);
  } : t.length > 2 && (c = function(f, u) {
    return t.call(this, f, u, i);
  }));
  const h = a.call(o, c, n);
  return l && s ? s(h) : h;
}
function cf(i, e, t, n) {
  const s = ul(i), r = s !== i && !/* @__PURE__ */ dt(i);
  let o = t, l = !1;
  s !== i && (r ? (l = n.length === 0, o = function(c, h, f) {
    return l && (l = !1, c = fi(i, c)), t.call(this, c, fi(i, h), f, i);
  }) : t.length > 3 && (o = function(c, h, f) {
    return t.call(this, c, h, f, i);
  }));
  const a = s[e](o, ...n);
  return l ? fi(i, a) : a;
}
function Xl(i, e, t) {
  const n = /* @__PURE__ */ ne(i);
  qe(n, "iterate", zs);
  const s = n[e](...t);
  return (s === -1 || s === !1) && /* @__PURE__ */ vo(t[0]) ? (t[0] = /* @__PURE__ */ ne(t[0]), n[e](...t)) : s;
}
function bs(i, e, t = []) {
  jt(), Uc();
  const n = (/* @__PURE__ */ ne(i))[e].apply(i, t);
  return Gc(), Yt(), n;
}
const A0 = /* @__PURE__ */ Mi("__proto__,__v_isRef,__isVue"), cp = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((i) => i !== "arguments" && i !== "caller").map((i) => Symbol[i]).filter(Gt)
);
function $0(i) {
  Gt(i) || (i = String(i));
  const e = /* @__PURE__ */ ne(this);
  return qe(e, "has", i), e.hasOwnProperty(i);
}
class hp {
  constructor(e = !1, t = !1) {
    this._isReadonly = e, this._isShallow = t;
  }
  get(e, t, n) {
    if (t === "__v_skip") return e.__v_skip;
    const s = this._isReadonly, r = this._isShallow;
    if (t === "__v_isReactive")
      return !s;
    if (t === "__v_isReadonly")
      return s;
    if (t === "__v_isShallow")
      return r;
    if (t === "__v_raw")
      return n === (s ? r ? gp : mp : r ? pp : dp).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
    const o = q(e);
    if (!s) {
      let a;
      if (o && (a = E0[t]))
        return a;
      if (t === "hasOwnProperty")
        return $0;
    }
    const l = Reflect.get(
      e,
      t,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Xe(e) ? e : n
    );
    if ((Gt(t) ? cp.has(t) : A0(t)) || (s || qe(e, "get", t), r))
      return l;
    if (/* @__PURE__ */ Xe(l)) {
      const a = o && Fc(t) ? l : l.value;
      return s && ge(a) ? /* @__PURE__ */ Ra(a) : a;
    }
    return ge(l) ? s ? /* @__PURE__ */ Ra(l) : /* @__PURE__ */ Yc(l) : l;
  }
}
class fp extends hp {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, t, n, s) {
    let r = e[t];
    const o = q(e) && Fc(t);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Kt(r);
      if (!/* @__PURE__ */ dt(n) && !/* @__PURE__ */ Kt(n) && (r = /* @__PURE__ */ ne(r), n = /* @__PURE__ */ ne(n)), !o && /* @__PURE__ */ Xe(r) && !/* @__PURE__ */ Xe(n))
        return c ? (process.env.NODE_ENV !== "production" && zt(
          `Set operation on key "${String(t)}" failed: target is readonly.`,
          e[t]
        ), !0) : (r.value = n, !0);
    }
    const l = o ? Number(t) < e.length : ue(e, t), a = Reflect.set(
      e,
      t,
      n,
      /* @__PURE__ */ Xe(e) ? e : s
    );
    return e === /* @__PURE__ */ ne(s) && (l ? ui(n, r) && di(e, "set", t, n, r) : di(e, "add", t, n)), a;
  }
  deleteProperty(e, t) {
    const n = ue(e, t), s = e[t], r = Reflect.deleteProperty(e, t);
    return r && n && di(e, "delete", t, void 0, s), r;
  }
  has(e, t) {
    const n = Reflect.has(e, t);
    return (!Gt(t) || !cp.has(t)) && qe(e, "has", t), n;
  }
  ownKeys(e) {
    return qe(
      e,
      "iterate",
      q(e) ? "length" : bn
    ), Reflect.ownKeys(e);
  }
}
class up extends hp {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, t) {
    return process.env.NODE_ENV !== "production" && zt(
      `Set operation on key "${String(t)}" failed: target is readonly.`,
      e
    ), !0;
  }
  deleteProperty(e, t) {
    return process.env.NODE_ENV !== "production" && zt(
      `Delete operation on key "${String(t)}" failed: target is readonly.`,
      e
    ), !0;
  }
}
const D0 = /* @__PURE__ */ new fp(), N0 = /* @__PURE__ */ new up(), R0 = /* @__PURE__ */ new fp(!0), _0 = /* @__PURE__ */ new up(!0), Na = (i) => i, Ar = (i) => Reflect.getPrototypeOf(i);
function M0(i, e, t) {
  return function(...n) {
    const s = this.__v_raw, r = /* @__PURE__ */ ne(s), o = On(r), l = i === "entries" || i === Symbol.iterator && o, a = i === "keys" && o, c = s[i](...n), h = t ? Na : e ? is : Zt;
    return !e && qe(
      r,
      "iterate",
      a ? Da : bn
    ), De(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: f, done: u } = c.next();
          return u ? { value: f, done: u } : {
            value: l ? [h(f[0]), h(f[1])] : h(f),
            done: u
          };
        }
      }
    );
  };
}
function $r(i) {
  return function(...e) {
    if (process.env.NODE_ENV !== "production") {
      const t = e[0] ? `on key "${e[0]}" ` : "";
      zt(
        `${hl(i)} operation ${t}failed: target is readonly.`,
        /* @__PURE__ */ ne(this)
      );
    }
    return i === "delete" ? !1 : i === "clear" ? void 0 : this;
  };
}
function Q0(i, e) {
  const t = {
    get(s) {
      const r = this.__v_raw, o = /* @__PURE__ */ ne(r), l = /* @__PURE__ */ ne(s);
      i || (ui(s, l) && qe(o, "get", s), qe(o, "get", l));
      const { has: a } = Ar(o), c = e ? Na : i ? is : Zt;
      if (a.call(o, s))
        return c(r.get(s));
      if (a.call(o, l))
        return c(r.get(l));
      r !== o && r.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !i && qe(/* @__PURE__ */ ne(s), "iterate", bn), s.size;
    },
    has(s) {
      const r = this.__v_raw, o = /* @__PURE__ */ ne(r), l = /* @__PURE__ */ ne(s);
      return i || (ui(s, l) && qe(o, "has", s), qe(o, "has", l)), s === l ? r.has(s) : r.has(s) || r.has(l);
    },
    forEach(s, r) {
      const o = this, l = o.__v_raw, a = /* @__PURE__ */ ne(l), c = e ? Na : i ? is : Zt;
      return !i && qe(a, "iterate", bn), l.forEach((h, f) => s.call(r, c(h), c(f), o));
    }
  };
  return De(
    t,
    i ? {
      add: $r("add"),
      set: $r("set"),
      delete: $r("delete"),
      clear: $r("clear")
    } : {
      add(s) {
        const r = /* @__PURE__ */ ne(this), o = Ar(r), l = /* @__PURE__ */ ne(s), a = !e && !/* @__PURE__ */ dt(s) && !/* @__PURE__ */ Kt(s) ? l : s;
        return o.has.call(r, a) || ui(s, a) && o.has.call(r, s) || ui(l, a) && o.has.call(r, l) || (r.add(a), di(r, "add", a, a)), this;
      },
      set(s, r) {
        !e && !/* @__PURE__ */ dt(r) && !/* @__PURE__ */ Kt(r) && (r = /* @__PURE__ */ ne(r));
        const o = /* @__PURE__ */ ne(this), { has: l, get: a } = Ar(o);
        let c = l.call(o, s);
        c ? process.env.NODE_ENV !== "production" && hf(o, l, s) : (s = /* @__PURE__ */ ne(s), c = l.call(o, s));
        const h = a.call(o, s);
        return o.set(s, r), c ? ui(r, h) && di(o, "set", s, r, h) : di(o, "add", s, r), this;
      },
      delete(s) {
        const r = /* @__PURE__ */ ne(this), { has: o, get: l } = Ar(r);
        let a = o.call(r, s);
        a ? process.env.NODE_ENV !== "production" && hf(r, o, s) : (s = /* @__PURE__ */ ne(s), a = o.call(r, s));
        const c = l ? l.call(r, s) : void 0, h = r.delete(s);
        return a && di(r, "delete", s, void 0, c), h;
      },
      clear() {
        const s = /* @__PURE__ */ ne(this), r = s.size !== 0, o = process.env.NODE_ENV !== "production" ? On(s) ? new Map(s) : new Set(s) : void 0, l = s.clear();
        return r && di(
          s,
          "clear",
          void 0,
          void 0,
          o
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    t[s] = M0(s, i, e);
  }), t;
}
function dl(i, e) {
  const t = Q0(i, e);
  return (n, s, r) => s === "__v_isReactive" ? !i : s === "__v_isReadonly" ? i : s === "__v_raw" ? n : Reflect.get(
    ue(t, s) && s in n ? t : n,
    s,
    r
  );
}
const I0 = {
  get: /* @__PURE__ */ dl(!1, !1)
}, V0 = {
  get: /* @__PURE__ */ dl(!1, !0)
}, L0 = {
  get: /* @__PURE__ */ dl(!0, !1)
}, B0 = {
  get: /* @__PURE__ */ dl(!0, !0)
};
function hf(i, e, t) {
  const n = /* @__PURE__ */ ne(t);
  if (n !== t && e.call(i, n)) {
    const s = Wc(i);
    zt(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const dp = /* @__PURE__ */ new WeakMap(), pp = /* @__PURE__ */ new WeakMap(), mp = /* @__PURE__ */ new WeakMap(), gp = /* @__PURE__ */ new WeakMap();
function X0(i) {
  switch (i) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function W0(i) {
  return i.__v_skip || !Object.isExtensible(i) ? 0 : X0(Wc(i));
}
// @__NO_SIDE_EFFECTS__
function Yc(i) {
  return /* @__PURE__ */ Kt(i) ? i : pl(
    i,
    !1,
    D0,
    I0,
    dp
  );
}
// @__NO_SIDE_EFFECTS__
function F0(i) {
  return pl(
    i,
    !1,
    R0,
    V0,
    pp
  );
}
// @__NO_SIDE_EFFECTS__
function Ra(i) {
  return pl(
    i,
    !0,
    N0,
    L0,
    mp
  );
}
// @__NO_SIDE_EFFECTS__
function Oi(i) {
  return pl(
    i,
    !0,
    _0,
    B0,
    gp
  );
}
function pl(i, e, t, n, s) {
  if (!ge(i))
    return process.env.NODE_ENV !== "production" && zt(
      `value cannot be made ${e ? "readonly" : "reactive"}: ${String(
        i
      )}`
    ), i;
  if (i.__v_raw && !(e && i.__v_isReactive))
    return i;
  const r = W0(i);
  if (r === 0)
    return i;
  const o = s.get(i);
  if (o)
    return o;
  const l = new Proxy(
    i,
    r === 2 ? n : t
  );
  return s.set(i, l), l;
}
// @__NO_SIDE_EFFECTS__
function Gi(i) {
  return /* @__PURE__ */ Kt(i) ? /* @__PURE__ */ Gi(i.__v_raw) : !!(i && i.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Kt(i) {
  return !!(i && i.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function dt(i) {
  return !!(i && i.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function vo(i) {
  return i ? !!i.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ne(i) {
  const e = i && i.__v_raw;
  return e ? /* @__PURE__ */ ne(e) : i;
}
function q0(i) {
  return !ue(i, "__v_skip") && Object.isExtensible(i) && xo(i, "__v_skip", !0), i;
}
const Zt = (i) => ge(i) ? /* @__PURE__ */ Yc(i) : i, is = (i) => ge(i) ? /* @__PURE__ */ Ra(i) : i;
// @__NO_SIDE_EFFECTS__
function Xe(i) {
  return i ? i.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Qe(i) {
  return H0(i, !1);
}
function H0(i, e) {
  return /* @__PURE__ */ Xe(i) ? i : new U0(i, e);
}
class U0 {
  constructor(e, t) {
    this.dep = new jc(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ ne(e), this._value = t ? e : Zt(e), this.__v_isShallow = t;
  }
  get value() {
    return process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(e) {
    const t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ dt(e) || /* @__PURE__ */ Kt(e);
    e = n ? e : /* @__PURE__ */ ne(e), ui(e, t) && (this._rawValue = e, this._value = n ? e : Zt(e), process.env.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: e,
      oldValue: t
    }) : this.dep.trigger());
  }
}
function Et(i) {
  return /* @__PURE__ */ Xe(i) ? i.value : i;
}
const G0 = {
  get: (i, e, t) => e === "__v_raw" ? i : Et(Reflect.get(i, e, t)),
  set: (i, e, t, n) => {
    const s = i[e];
    return /* @__PURE__ */ Xe(s) && !/* @__PURE__ */ Xe(t) ? (s.value = t, !0) : Reflect.set(i, e, t, n);
  }
};
function Op(i) {
  return /* @__PURE__ */ Gi(i) ? i : new Proxy(i, G0);
}
class z0 {
  constructor(e, t, n) {
    this.fn = e, this.setter = t, this._value = void 0, this.dep = new jc(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Gs - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Se !== this)
      return np(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const e = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return op(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter ? this.setter(e) : process.env.NODE_ENV !== "production" && zt("Write operation failed: computed value is readonly");
  }
}
// @__NO_SIDE_EFFECTS__
function j0(i, e, t = !1) {
  let n, s;
  K(i) ? n = i : (n = i.get, s = i.set);
  const r = new z0(n, s, t);
  return process.env.NODE_ENV, r;
}
const Dr = {}, So = /* @__PURE__ */ new WeakMap();
let cn;
function Y0(i, e = !1, t = cn) {
  if (t) {
    let n = So.get(t);
    n || So.set(t, n = []), n.push(i);
  } else process.env.NODE_ENV !== "production" && !e && zt(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function K0(i, e, t = we) {
  const { immediate: n, deep: s, once: r, scheduler: o, augmentJob: l, call: a } = t, c = (v) => {
    (t.onWarn || zt)(
      "Invalid watch source: ",
      v,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, h = (v) => s ? v : /* @__PURE__ */ dt(v) || s === !1 || s === 0 ? Ai(v, 1) : Ai(v);
  let f, u, d, p, m = !1, g = !1;
  if (/* @__PURE__ */ Xe(i) ? (u = () => i.value, m = /* @__PURE__ */ dt(i)) : /* @__PURE__ */ Gi(i) ? (u = () => h(i), m = !0) : q(i) ? (g = !0, m = i.some((v) => /* @__PURE__ */ Gi(v) || /* @__PURE__ */ dt(v)), u = () => i.map((v) => {
    if (/* @__PURE__ */ Xe(v))
      return v.value;
    if (/* @__PURE__ */ Gi(v))
      return h(v);
    if (K(v))
      return a ? a(v, 2) : v();
    process.env.NODE_ENV !== "production" && c(v);
  })) : K(i) ? e ? u = a ? () => a(i, 2) : i : u = () => {
    if (d) {
      jt();
      try {
        d();
      } finally {
        Yt();
      }
    }
    const v = cn;
    cn = f;
    try {
      return a ? a(i, 3, [p]) : i(p);
    } finally {
      cn = v;
    }
  } : (u = He, process.env.NODE_ENV !== "production" && c(i)), e && s) {
    const v = u, T = s === !0 ? 1 / 0 : s;
    u = () => Ai(v(), T);
  }
  const b = P0(), x = () => {
    f.stop(), b && b.active && Bc(b.effects, f);
  };
  if (r && e) {
    const v = e;
    e = (...T) => {
      v(...T), x();
    };
  }
  let S = g ? new Array(i.length).fill(Dr) : Dr;
  const C = (v) => {
    if (!(!(f.flags & 1) || !f.dirty && !v))
      if (e) {
        const T = f.run();
        if (s || m || (g ? T.some((N, W) => ui(N, S[W])) : ui(T, S))) {
          d && d();
          const N = cn;
          cn = f;
          try {
            const W = [
              T,
              // pass undefined as the old value when it's changed for the first time
              S === Dr ? void 0 : g && S[0] === Dr ? [] : S,
              p
            ];
            S = T, a ? a(e, 3, W) : (
              // @ts-expect-error
              e(...W)
            );
          } finally {
            cn = N;
          }
        }
      } else
        f.run();
  };
  return l && l(C), f = new tp(u), f.scheduler = o ? () => o(C, !1) : C, p = (v) => Y0(v, !1, f), d = f.onStop = () => {
    const v = So.get(f);
    if (v) {
      if (a)
        a(v, 4);
      else
        for (const T of v) T();
      So.delete(f);
    }
  }, process.env.NODE_ENV !== "production" && (f.onTrack = t.onTrack, f.onTrigger = t.onTrigger), e ? n ? C(!0) : S = f.run() : o ? o(C.bind(null, !0), !0) : f.run(), x.pause = f.pause.bind(f), x.resume = f.resume.bind(f), x.stop = x, x;
}
function Ai(i, e = 1 / 0, t) {
  if (e <= 0 || !ge(i) || i.__v_skip || (t = t || /* @__PURE__ */ new Map(), (t.get(i) || 0) >= e))
    return i;
  if (t.set(i, e), e--, /* @__PURE__ */ Xe(i))
    Ai(i.value, e, t);
  else if (q(i))
    for (let n = 0; n < i.length; n++)
      Ai(i[n], e, t);
  else if (ll(i) || On(i))
    i.forEach((n) => {
      Ai(n, e, t);
    });
  else if (al(i)) {
    for (const n in i)
      Ai(i[n], e, t);
    for (const n of Object.getOwnPropertySymbols(i))
      Object.prototype.propertyIsEnumerable.call(i, n) && Ai(i[n], e, t);
  }
  return i;
}
/**
* @vue/runtime-core v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const yn = [];
function io(i) {
  yn.push(i);
}
function no() {
  yn.pop();
}
let Wl = !1;
function M(i, ...e) {
  if (Wl) return;
  Wl = !0, jt();
  const t = yn.length ? yn[yn.length - 1].component : null, n = t && t.appContext.config.warnHandler, s = Z0();
  if (n)
    us(
      n,
      t,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        i + e.map((r) => {
          var o, l;
          return (l = (o = r.toString) == null ? void 0 : o.call(r)) != null ? l : JSON.stringify(r);
        }).join(""),
        t && t.proxy,
        s.map(
          ({ vnode: r }) => `at <${vr(t, r.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const r = [`[Vue warn]: ${i}`, ...e];
    s.length && r.push(`
`, ...J0(s)), console.warn(...r);
  }
  Yt(), Wl = !1;
}
function Z0() {
  let i = yn[yn.length - 1];
  if (!i)
    return [];
  const e = [];
  for (; i; ) {
    const t = e[0];
    t && t.vnode === i ? t.recurseCount++ : e.push({
      vnode: i,
      recurseCount: 0
    });
    const n = i.component && i.component.parent;
    i = n && n.vnode;
  }
  return e;
}
function J0(i) {
  const e = [];
  return i.forEach((t, n) => {
    e.push(...n === 0 ? [] : [`
`], ...eb(t));
  }), e;
}
function eb({ vnode: i, recurseCount: e }) {
  const t = e > 0 ? `... (${e} recursive calls)` : "", n = i.component ? i.component.parent == null : !1, s = ` at <${vr(
    i.component,
    i.type,
    n
  )}`, r = ">" + t;
  return i.props ? [s, ...tb(i.props), r] : [s + r];
}
function tb(i) {
  const e = [], t = Object.keys(i);
  return t.slice(0, 3).forEach((n) => {
    e.push(...bp(n, i[n]));
  }), t.length > 3 && e.push(" ..."), e;
}
function bp(i, e, t) {
  return $e(e) ? (e = JSON.stringify(e), t ? e : [`${i}=${e}`]) : typeof e == "number" || typeof e == "boolean" || e == null ? t ? e : [`${i}=${e}`] : /* @__PURE__ */ Xe(e) ? (e = bp(i, /* @__PURE__ */ ne(e.value), !0), t ? e : [`${i}=Ref<`, e, ">"]) : K(e) ? [`${i}=fn${e.name ? `<${e.name}>` : ""}`] : (e = /* @__PURE__ */ ne(e), t ? e : [`${i}=`, e]);
}
const Kc = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function us(i, e, t, n) {
  try {
    return n ? i(...n) : i();
  } catch (s) {
    Or(s, e, t);
  }
}
function Si(i, e, t, n) {
  if (K(i)) {
    const s = us(i, e, t, n);
    return s && Xc(s) && s.catch((r) => {
      Or(r, e, t);
    }), s;
  }
  if (q(i)) {
    const s = [];
    for (let r = 0; r < i.length; r++)
      s.push(Si(i[r], e, t, n));
    return s;
  } else process.env.NODE_ENV !== "production" && M(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof i}`
  );
}
function Or(i, e, t, n = !0) {
  const s = e ? e.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = e && e.appContext.config || we;
  if (e) {
    let l = e.parent;
    const a = e.proxy, c = process.env.NODE_ENV !== "production" ? Kc[t] : `https://vuejs.org/error-reference/#runtime-${t}`;
    for (; l; ) {
      const h = l.ec;
      if (h) {
        for (let f = 0; f < h.length; f++)
          if (h[f](i, a, c) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      jt(), us(r, null, 10, [
        i,
        a,
        c
      ]), Yt();
      return;
    }
  }
  ib(i, t, s, n, o);
}
function ib(i, e, t, n = !0, s = !1) {
  if (process.env.NODE_ENV !== "production") {
    const r = Kc[e];
    if (t && io(t), M(`Unhandled error${r ? ` during execution of ${r}` : ""}`), t && no(), n)
      throw i;
    console.error(i);
  } else {
    if (s)
      throw i;
    console.error(i);
  }
}
const ht = [];
let hi = -1;
const qn = [];
let Bi = null, Mn = 0;
const yp = /* @__PURE__ */ Promise.resolve();
let wo = null;
const nb = 100;
function Zc(i) {
  const e = wo || yp;
  return i ? e.then(this ? i.bind(this) : i) : e;
}
function sb(i) {
  let e = hi + 1, t = ht.length;
  for (; e < t; ) {
    const n = e + t >>> 1, s = ht[n], r = js(s);
    r < i || r === i && s.flags & 2 ? e = n + 1 : t = n;
  }
  return e;
}
function ml(i) {
  if (!(i.flags & 1)) {
    const e = js(i), t = ht[ht.length - 1];
    !t || // fast path when the job id is larger than the tail
    !(i.flags & 2) && e >= js(t) ? ht.push(i) : ht.splice(sb(e), 0, i), i.flags |= 1, xp();
  }
}
function xp() {
  wo || (wo = yp.then(wp));
}
function vp(i) {
  q(i) ? qn.push(...i) : Bi && i.id === -1 ? Bi.splice(Mn + 1, 0, i) : i.flags & 1 || (qn.push(i), i.flags |= 1), xp();
}
function ff(i, e, t = hi + 1) {
  for (process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < ht.length; t++) {
    const n = ht[t];
    if (n && n.flags & 2) {
      if (i && n.id !== i.uid || process.env.NODE_ENV !== "production" && Jc(e, n))
        continue;
      ht.splice(t, 1), t--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Sp(i) {
  if (qn.length) {
    const e = [...new Set(qn)].sort(
      (t, n) => js(t) - js(n)
    );
    if (qn.length = 0, Bi) {
      Bi.push(...e);
      return;
    }
    for (Bi = e, process.env.NODE_ENV !== "production" && (i = i || /* @__PURE__ */ new Map()), Mn = 0; Mn < Bi.length; Mn++) {
      const t = Bi[Mn];
      process.env.NODE_ENV !== "production" && Jc(i, t) || (t.flags & 4 && (t.flags &= -2), t.flags & 8 || t(), t.flags &= -2);
    }
    Bi = null, Mn = 0;
  }
}
const js = (i) => i.id == null ? i.flags & 2 ? -1 : 1 / 0 : i.id;
function wp(i) {
  process.env.NODE_ENV !== "production" && (i = i || /* @__PURE__ */ new Map());
  const e = process.env.NODE_ENV !== "production" ? (t) => Jc(i, t) : He;
  try {
    for (hi = 0; hi < ht.length; hi++) {
      const t = ht[hi];
      if (t && !(t.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && e(t))
          continue;
        t.flags & 4 && (t.flags &= -2), us(
          t,
          t.i,
          t.i ? 15 : 14
        ), t.flags & 4 || (t.flags &= -2);
      }
    }
  } finally {
    for (; hi < ht.length; hi++) {
      const t = ht[hi];
      t && (t.flags &= -2);
    }
    hi = -1, ht.length = 0, Sp(i), wo = null, (ht.length || qn.length) && wp(i);
  }
}
function Jc(i, e) {
  const t = i.get(e) || 0;
  if (t > nb) {
    const n = e.i, s = n && lm(n.type);
    return Or(
      `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return i.set(e, t + 1), !1;
}
let $t = !1;
const uf = (i) => {
  try {
    return $t;
  } finally {
    $t = i;
  }
}, so = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (mr().__VUE_HMR_RUNTIME__ = {
  createRecord: Fl(Pp),
  rerender: Fl(lb),
  reload: Fl(ab)
});
const Pn = /* @__PURE__ */ new Map();
function rb(i) {
  const e = i.type.__hmrId;
  let t = Pn.get(e);
  t || (Pp(e, i.type), t = Pn.get(e)), t.instances.add(i);
}
function ob(i) {
  Pn.get(i.type.__hmrId).instances.delete(i);
}
function Pp(i, e) {
  return Pn.has(i) ? !1 : (Pn.set(i, {
    initialDef: Po(e),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Po(i) {
  return am(i) ? i.__vccOpts : i;
}
function lb(i, e) {
  const t = Pn.get(i);
  t && (t.initialDef.render = e, [...t.instances].forEach((n) => {
    e && (n.render = e, Po(n.type).render = e), n.renderCache = [], $t = !0, n.job.flags & 8 || n.update(), $t = !1;
  }));
}
function ab(i, e) {
  const t = Pn.get(i);
  if (!t) return;
  e = Po(e), df(t.initialDef, e);
  const n = [...t.instances];
  for (let s = 0; s < n.length; s++) {
    const r = n[s], o = Po(r.type);
    let l = so.get(o);
    l || (o !== t.initialDef && df(o, e), so.set(o, l = /* @__PURE__ */ new Set())), l.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (l.add(r), r.ceReload(e.styles), l.delete(r)) : r.parent ? ml(() => {
      r.job.flags & 8 || ($t = !0, r.parent.update(), $t = !1, l.delete(r));
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(o);
  }
  vp(() => {
    so.clear();
  });
}
function df(i, e) {
  De(i, e);
  for (const t in i)
    t !== "__file" && !(t in e) && delete i[t];
}
function Fl(i) {
  return (e, t) => {
    try {
      return i(e, t);
    } catch (n) {
      console.error(n), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Wt, Cs = [], _a = !1;
function br(i, ...e) {
  Wt ? Wt.emit(i, ...e) : _a || Cs.push({ event: i, args: e });
}
function eh(i, e) {
  var t, n;
  Wt = i, Wt ? (Wt.enabled = !0, Cs.forEach(({ event: s, args: r }) => Wt.emit(s, ...r)), Cs = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((n = (t = window.navigator) == null ? void 0 : t.userAgent) != null && n.includes("jsdom")) ? ((e.__VUE_DEVTOOLS_HOOK_REPLAY__ = e.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    eh(r, e);
  }), setTimeout(() => {
    Wt || (e.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, _a = !0, Cs = []);
  }, 3e3)) : (_a = !0, Cs = []);
}
function cb(i, e) {
  br("app:init", i, e, {
    Fragment: et,
    Text: yr,
    Comment: Rt,
    Static: lo
  });
}
function hb(i) {
  br("app:unmount", i);
}
const fb = /* @__PURE__ */ th(
  "component:added"
  /* COMPONENT_ADDED */
), kp = /* @__PURE__ */ th(
  "component:updated"
  /* COMPONENT_UPDATED */
), ub = /* @__PURE__ */ th(
  "component:removed"
  /* COMPONENT_REMOVED */
), db = (i) => {
  Wt && typeof Wt.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Wt.cleanupBuffer(i) && ub(i);
};
// @__NO_SIDE_EFFECTS__
function th(i) {
  return (e) => {
    br(
      i,
      e.appContext.app,
      e.uid,
      e.parent ? e.parent.uid : void 0,
      e
    );
  };
}
const pb = /* @__PURE__ */ Cp(
  "perf:start"
  /* PERFORMANCE_START */
), mb = /* @__PURE__ */ Cp(
  "perf:end"
  /* PERFORMANCE_END */
);
function Cp(i) {
  return (e, t, n) => {
    br(i, e.appContext.app, e.uid, e, t, n);
  };
}
function gb(i, e, t) {
  br(
    "component:emit",
    i.appContext.app,
    i,
    e,
    t
  );
}
let ut = null, Ep = null;
function ko(i) {
  const e = ut;
  return ut = i, Ep = i && i.type.__scopeId || null, e;
}
function Ob(i, e = ut, t) {
  if (!e || i._n)
    return i;
  const n = (...s) => {
    n._d && Tf(-1);
    const r = ko(e);
    let o;
    try {
      o = i(...s);
    } finally {
      ko(r), n._d && Tf(1);
    }
    return process.env.NODE_ENV !== "production" && kp(e), o;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Tp(i) {
  o0(i) && M("Do not use built-in directive ids as custom directive id: " + i);
}
function Co(i, e) {
  if (ut === null)
    return process.env.NODE_ENV !== "production" && M("withDirectives can only be used inside render functions."), i;
  const t = yl(ut), n = i.dirs || (i.dirs = []);
  for (let s = 0; s < e.length; s++) {
    let [r, o, l, a = we] = e[s];
    r && (K(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Ai(o), n.push({
      dir: r,
      instance: t,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }));
  }
  return i;
}
function rn(i, e, t, n) {
  const s = i.dirs, r = e && e.dirs;
  for (let o = 0; o < s.length; o++) {
    const l = s[o];
    r && (l.oldValue = r[o].value);
    let a = l.dir[n];
    a && (jt(), Si(a, t, 8, [
      i.el,
      l,
      i,
      e
    ]), Yt());
  }
}
function bb(i, e) {
  if (process.env.NODE_ENV !== "production" && (!We || We.isMounted) && M("provide() can only be used inside setup()."), We) {
    let t = We.provides;
    const n = We.parent && We.parent.provides;
    n === t && (t = We.provides = Object.create(n)), t[i] = e;
  }
}
function ro(i, e, t = !1) {
  const n = sm();
  if (n || Un) {
    let s = Un ? Un._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (s && i in s)
      return s[i];
    if (arguments.length > 1)
      return t && K(e) ? e.call(n && n.proxy) : e;
    process.env.NODE_ENV !== "production" && M(`injection "${String(i)}" not found.`);
  } else process.env.NODE_ENV !== "production" && M("inject() can only be used inside setup() or functional components.");
}
const yb = /* @__PURE__ */ Symbol.for("v-scx"), xb = () => {
  {
    const i = ro(yb);
    return i || process.env.NODE_ENV !== "production" && M(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), i;
  }
};
function Ms(i, e, t) {
  return process.env.NODE_ENV !== "production" && !K(e) && M(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Ap(i, e, t);
}
function Ap(i, e, t = we) {
  const { immediate: n, deep: s, flush: r, once: o } = t;
  process.env.NODE_ENV !== "production" && !e && (n !== void 0 && M(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && M(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && M(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = De({}, t);
  process.env.NODE_ENV !== "production" && (l.onWarn = M);
  const a = e && n || !e && r !== "post";
  let c;
  if (Ks) {
    if (r === "sync") {
      const d = xb();
      c = d.__watcherHandles || (d.__watcherHandles = []);
    } else if (!a) {
      const d = () => {
      };
      return d.stop = He, d.resume = He, d.pause = He, d;
    }
  }
  const h = We;
  l.call = (d, p, m) => Si(d, h, p, m);
  let f = !1;
  r === "post" ? l.scheduler = (d) => {
    mt(d, h && h.suspense);
  } : r !== "sync" && (f = !0, l.scheduler = (d, p) => {
    p ? d() : ml(d);
  }), l.augmentJob = (d) => {
    e && (d.flags |= 4), f && (d.flags |= 2, h && (d.id = h.uid, d.i = h));
  };
  const u = K0(i, e, l);
  return Ks && (c ? c.push(u) : a && u()), u;
}
function vb(i, e, t) {
  const n = this.proxy, s = $e(i) ? i.includes(".") ? $p(n, i) : () => n[i] : i.bind(n, n);
  let r;
  K(e) ? r = e : (r = e.handler, t = e);
  const o = xr(this), l = Ap(s, r.bind(n), t);
  return o(), l;
}
function $p(i, e) {
  const t = e.split(".");
  return () => {
    let n = i;
    for (let s = 0; s < t.length && n; s++)
      n = n[t[s]];
    return n;
  };
}
const Sb = /* @__PURE__ */ Symbol("_vte"), wb = (i) => i.__isTeleport, Pb = /* @__PURE__ */ Symbol("_leaveCb");
function ih(i, e) {
  i.shapeFlag & 6 && i.component ? (i.transition = e, ih(i.component.subTree, e)) : i.shapeFlag & 128 ? (i.ssContent.transition = e.clone(i.ssContent), i.ssFallback.transition = e.clone(i.ssFallback)) : i.transition = e;
}
// @__NO_SIDE_EFFECTS__
function kb(i, e) {
  return K(i) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    De({ name: i.name }, e, { setup: i })
  ) : i;
}
function Dp(i) {
  i.ids = [i.ids[0] + i.ids[2]++ + "-", 0, 0];
}
const pf = /* @__PURE__ */ new WeakSet();
function mf(i, e) {
  let t;
  return !!((t = Object.getOwnPropertyDescriptor(i, e)) && !t.configurable);
}
const Eo = /* @__PURE__ */ new WeakMap();
function Qs(i, e, t, n, s = !1) {
  if (q(i)) {
    i.forEach(
      (m, g) => Qs(
        m,
        e && (q(e) ? e[g] : e),
        t,
        n,
        s
      )
    );
    return;
  }
  if (Is(n) && !s) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Qs(i, e, t, n.component.subTree);
    return;
  }
  const r = n.shapeFlag & 4 ? yl(n.component) : n.el, o = s ? null : r, { i: l, r: a } = i;
  if (process.env.NODE_ENV !== "production" && !l) {
    M(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const c = e && e.r, h = l.refs === we ? l.refs = {} : l.refs, f = l.setupState, u = /* @__PURE__ */ ne(f), d = f === we ? Yd : (m) => process.env.NODE_ENV !== "production" && (ue(u, m) && !/* @__PURE__ */ Xe(u[m]) && M(
    `Template ref "${m}" used on a non-ref value. It will not work in the production build.`
  ), pf.has(u[m])) || mf(h, m) ? !1 : ue(u, m), p = (m, g) => !(process.env.NODE_ENV !== "production" && pf.has(m) || g && mf(h, g));
  if (c != null && c !== a) {
    if (gf(e), $e(c))
      h[c] = null, d(c) && (f[c] = null);
    else if (/* @__PURE__ */ Xe(c)) {
      const m = e;
      p(c, m.k) && (c.value = null), m.k && (h[m.k] = null);
    }
  }
  if (K(a))
    us(a, l, 12, [o, h]);
  else {
    const m = $e(a), g = /* @__PURE__ */ Xe(a);
    if (m || g) {
      const b = () => {
        if (i.f) {
          const x = m ? d(a) ? f[a] : h[a] : p(a) || !i.k ? a.value : h[i.k];
          if (s)
            q(x) && Bc(x, r);
          else if (q(x))
            x.includes(r) || x.push(r);
          else if (m)
            h[a] = [r], d(a) && (f[a] = h[a]);
          else {
            const S = [r];
            p(a, i.k) && (a.value = S), i.k && (h[i.k] = S);
          }
        } else m ? (h[a] = o, d(a) && (f[a] = o)) : g ? (p(a, i.k) && (a.value = o), i.k && (h[i.k] = o)) : process.env.NODE_ENV !== "production" && M("Invalid template ref type:", a, `(${typeof a})`);
      };
      if (o) {
        const x = () => {
          b(), Eo.delete(i);
        };
        x.id = -1, Eo.set(i, x), mt(x, t);
      } else
        gf(i), b();
    } else process.env.NODE_ENV !== "production" && M("Invalid template ref type:", a, `(${typeof a})`);
  }
}
function gf(i) {
  const e = Eo.get(i);
  e && (e.flags |= 8, Eo.delete(i));
}
mr().requestIdleCallback;
mr().cancelIdleCallback;
const Is = (i) => !!i.type.__asyncLoader, nh = (i) => i.type.__isKeepAlive;
function Cb(i, e) {
  Np(i, "a", e);
}
function Eb(i, e) {
  Np(i, "da", e);
}
function Np(i, e, t = We) {
  const n = i.__wdc || (i.__wdc = () => {
    let s = t;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return i();
  });
  if (gl(e, n, t), t) {
    let s = t.parent;
    for (; s && s.parent; )
      nh(s.parent.vnode) && Tb(n, e, t, s), s = s.parent;
  }
}
function Tb(i, e, t, n) {
  const s = gl(
    e,
    i,
    n,
    !0
    /* prepend */
  );
  _p(() => {
    Bc(n[e], s);
  }, t);
}
function gl(i, e, t = We, n = !1) {
  if (t) {
    const s = t[i] || (t[i] = []), r = e.__weh || (e.__weh = (...o) => {
      jt();
      const l = xr(t), a = Si(e, t, i, o);
      return l(), Yt(), a;
    });
    return n ? s.unshift(r) : s.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const s = an(Kc[i].replace(/ hook$/, ""));
    M(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Qi = (i) => (e, t = We) => {
  (!Ks || i === "sp") && gl(i, (...n) => e(...n), t);
}, Ab = Qi("bm"), sh = Qi("m"), $b = Qi(
  "bu"
), Db = Qi("u"), Rp = Qi(
  "bum"
), _p = Qi("um"), Nb = Qi(
  "sp"
), Rb = Qi("rtg"), _b = Qi("rtc");
function Mb(i, e = We) {
  gl("ec", i, e);
}
const Qb = /* @__PURE__ */ Symbol.for("v-ndc");
function Hn(i, e, t, n) {
  let s;
  const r = t, o = q(i);
  if (o || $e(i)) {
    const l = o && /* @__PURE__ */ Gi(i);
    let a = !1, c = !1;
    l && (a = !/* @__PURE__ */ dt(i), c = /* @__PURE__ */ Kt(i), i = ul(i)), s = new Array(i.length);
    for (let h = 0, f = i.length; h < f; h++)
      s[h] = e(
        a ? c ? is(Zt(i[h])) : Zt(i[h]) : i[h],
        h,
        void 0,
        r
      );
  } else if (typeof i == "number")
    if (process.env.NODE_ENV !== "production" && (!Number.isInteger(i) || i < 0))
      M(
        `The v-for range expects a positive integer value but got ${i}.`
      ), s = [];
    else {
      s = new Array(i);
      for (let l = 0; l < i; l++)
        s[l] = e(l + 1, l, void 0, r);
    }
  else if (ge(i))
    if (i[Symbol.iterator])
      s = Array.from(
        i,
        (l, a) => e(l, a, void 0, r)
      );
    else {
      const l = Object.keys(i);
      s = new Array(l.length);
      for (let a = 0, c = l.length; a < c; a++) {
        const h = l[a];
        s[a] = e(i[h], h, a, r);
      }
    }
  else
    s = [];
  return s;
}
const Ma = (i) => i ? rm(i) ? yl(i) : Ma(i.parent) : null, xn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ De(/* @__PURE__ */ Object.create(null), {
    $: (i) => i,
    $el: (i) => i.vnode.el,
    $data: (i) => i.data,
    $props: (i) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Oi(i.props) : i.props,
    $attrs: (i) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Oi(i.attrs) : i.attrs,
    $slots: (i) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Oi(i.slots) : i.slots,
    $refs: (i) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Oi(i.refs) : i.refs,
    $parent: (i) => Ma(i.parent),
    $root: (i) => Ma(i.root),
    $host: (i) => i.ce,
    $emit: (i) => i.emit,
    $options: (i) => Ip(i),
    $forceUpdate: (i) => i.f || (i.f = () => {
      ml(i.update);
    }),
    $nextTick: (i) => i.n || (i.n = Zc.bind(i.proxy)),
    $watch: (i) => vb.bind(i)
  })
), rh = (i) => i === "_" || i === "$", ql = (i, e) => i !== we && !i.__isScriptSetup && ue(i, e), Mp = {
  get({ _: i }, e) {
    if (e === "__v_skip")
      return !0;
    const { ctx: t, setupState: n, data: s, props: r, accessCache: o, type: l, appContext: a } = i;
    if (process.env.NODE_ENV !== "production" && e === "__isVue")
      return !0;
    if (e[0] !== "$") {
      const u = o[e];
      if (u !== void 0)
        switch (u) {
          case 1:
            return n[e];
          case 2:
            return s[e];
          case 4:
            return t[e];
          case 3:
            return r[e];
        }
      else {
        if (ql(n, e))
          return o[e] = 1, n[e];
        if (s !== we && ue(s, e))
          return o[e] = 2, s[e];
        if (ue(r, e))
          return o[e] = 3, r[e];
        if (t !== we && ue(t, e))
          return o[e] = 4, t[e];
        Qa && (o[e] = 0);
      }
    }
    const c = xn[e];
    let h, f;
    if (c)
      return e === "$attrs" ? (qe(i.attrs, "get", ""), process.env.NODE_ENV !== "production" && Ao()) : process.env.NODE_ENV !== "production" && e === "$slots" && qe(i, "get", e), c(i);
    if (
      // css module (injected by vue-loader)
      (h = l.__cssModules) && (h = h[e])
    )
      return h;
    if (t !== we && ue(t, e))
      return o[e] = 4, t[e];
    if (
      // global properties
      f = a.config.globalProperties, ue(f, e)
    )
      return f[e];
    process.env.NODE_ENV !== "production" && ut && (!$e(e) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    e.indexOf("__v") !== 0) && (s !== we && rh(e[0]) && ue(s, e) ? M(
      `Property ${JSON.stringify(
        e
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : i === ut && M(
      `Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: i }, e, t) {
    const { data: n, setupState: s, ctx: r } = i;
    return ql(s, e) ? (s[e] = t, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && ue(s, e) ? (M(`Cannot mutate <script setup> binding "${e}" from Options API.`), !1) : n !== we && ue(n, e) ? (n[e] = t, !0) : ue(i.props, e) ? (process.env.NODE_ENV !== "production" && M(`Attempting to mutate prop "${e}". Props are readonly.`), !1) : e[0] === "$" && e.slice(1) in i ? (process.env.NODE_ENV !== "production" && M(
      `Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && e in i.appContext.config.globalProperties ? Object.defineProperty(r, e, {
      enumerable: !0,
      configurable: !0,
      value: t
    }) : r[e] = t, !0);
  },
  has({
    _: { data: i, setupState: e, accessCache: t, ctx: n, appContext: s, props: r, type: o }
  }, l) {
    let a;
    return !!(t[l] || i !== we && l[0] !== "$" && ue(i, l) || ql(e, l) || ue(r, l) || ue(n, l) || ue(xn, l) || ue(s.config.globalProperties, l) || (a = o.__cssModules) && a[l]);
  },
  defineProperty(i, e, t) {
    return t.get != null ? i._.accessCache[e] = 0 : ue(t, "value") && this.set(i, e, t.value, null), Reflect.defineProperty(i, e, t);
  }
};
process.env.NODE_ENV !== "production" && (Mp.ownKeys = (i) => (M(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(i)));
function Ib(i) {
  const e = {};
  return Object.defineProperty(e, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => i
  }), Object.keys(xn).forEach((t) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      get: () => xn[t](i),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: He
    });
  }), e;
}
function Vb(i) {
  const {
    ctx: e,
    propsOptions: [t]
  } = i;
  t && Object.keys(t).forEach((n) => {
    Object.defineProperty(e, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.props[n],
      set: He
    });
  });
}
function Lb(i) {
  const { ctx: e, setupState: t } = i;
  Object.keys(/* @__PURE__ */ ne(t)).forEach((n) => {
    if (!t.__isScriptSetup) {
      if (rh(n[0])) {
        M(
          `setup() return property ${JSON.stringify(
            n
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(e, n, {
        enumerable: !0,
        configurable: !0,
        get: () => t[n],
        set: He
      });
    }
  });
}
function Of(i) {
  return q(i) ? i.reduce(
    (e, t) => (e[t] = null, e),
    {}
  ) : i;
}
function Bb() {
  const i = /* @__PURE__ */ Object.create(null);
  return (e, t) => {
    i[t] ? M(`${e} property "${t}" is already defined in ${i[t]}.`) : i[t] = e;
  };
}
let Qa = !0;
function Xb(i) {
  const e = Ip(i), t = i.proxy, n = i.ctx;
  Qa = !1, e.beforeCreate && bf(e.beforeCreate, i, "bc");
  const {
    // state
    data: s,
    computed: r,
    methods: o,
    watch: l,
    provide: a,
    inject: c,
    // lifecycle
    created: h,
    beforeMount: f,
    mounted: u,
    beforeUpdate: d,
    updated: p,
    activated: m,
    deactivated: g,
    beforeDestroy: b,
    beforeUnmount: x,
    destroyed: S,
    unmounted: C,
    render: v,
    renderTracked: T,
    renderTriggered: N,
    errorCaptured: W,
    serverPrefetch: U,
    // public API
    expose: se,
    inheritAttrs: Z,
    // assets
    components: F,
    directives: he,
    filters: fe
  } = e, oe = process.env.NODE_ENV !== "production" ? Bb() : null;
  if (process.env.NODE_ENV !== "production") {
    const [G] = i.propsOptions;
    if (G)
      for (const J in G)
        oe("Props", J);
  }
  if (c && Wb(c, n, oe), o)
    for (const G in o) {
      const J = o[G];
      K(J) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(n, G, {
        value: J.bind(t),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : n[G] = J.bind(t), process.env.NODE_ENV !== "production" && oe("Methods", G)) : process.env.NODE_ENV !== "production" && M(
        `Method "${G}" has type "${typeof J}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (s) {
    process.env.NODE_ENV !== "production" && !K(s) && M(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const G = s.call(t, t);
    if (process.env.NODE_ENV !== "production" && Xc(G) && M(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !ge(G))
      process.env.NODE_ENV !== "production" && M("data() should return an object.");
    else if (i.data = /* @__PURE__ */ Yc(G), process.env.NODE_ENV !== "production")
      for (const J in G)
        oe("Data", J), rh(J[0]) || Object.defineProperty(n, J, {
          configurable: !0,
          enumerable: !0,
          get: () => G[J],
          set: He
        });
  }
  if (Qa = !0, r)
    for (const G in r) {
      const J = r[G], xe = K(J) ? J.bind(t, t) : K(J.get) ? J.get.bind(t, t) : He;
      process.env.NODE_ENV !== "production" && xe === He && M(`Computed property "${G}" has no getter.`);
      const le = !K(J) && K(J.set) ? J.set.bind(t) : process.env.NODE_ENV !== "production" ? () => {
        M(
          `Write operation failed: computed property "${G}" is readonly.`
        );
      } : He, j = Gn({
        get: xe,
        set: le
      });
      Object.defineProperty(n, G, {
        enumerable: !0,
        configurable: !0,
        get: () => j.value,
        set: (te) => j.value = te
      }), process.env.NODE_ENV !== "production" && oe("Computed", G);
    }
  if (l)
    for (const G in l)
      Qp(l[G], n, t, G);
  if (a) {
    const G = K(a) ? a.call(t) : a;
    Reflect.ownKeys(G).forEach((J) => {
      bb(J, G[J]);
    });
  }
  h && bf(h, i, "c");
  function Oe(G, J) {
    q(J) ? J.forEach((xe) => G(xe.bind(t))) : J && G(J.bind(t));
  }
  if (Oe(Ab, f), Oe(sh, u), Oe($b, d), Oe(Db, p), Oe(Cb, m), Oe(Eb, g), Oe(Mb, W), Oe(_b, T), Oe(Rb, N), Oe(Rp, x), Oe(_p, C), Oe(Nb, U), q(se))
    if (se.length) {
      const G = i.exposed || (i.exposed = {});
      se.forEach((J) => {
        Object.defineProperty(G, J, {
          get: () => t[J],
          set: (xe) => t[J] = xe,
          enumerable: !0
        });
      });
    } else i.exposed || (i.exposed = {});
  v && i.render === He && (i.render = v), Z != null && (i.inheritAttrs = Z), F && (i.components = F), he && (i.directives = he), U && Dp(i);
}
function Wb(i, e, t = He) {
  q(i) && (i = Ia(i));
  for (const n in i) {
    const s = i[n];
    let r;
    ge(s) ? "default" in s ? r = ro(
      s.from || n,
      s.default,
      !0
    ) : r = ro(s.from || n) : r = ro(s), /* @__PURE__ */ Xe(r) ? Object.defineProperty(e, n, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : e[n] = r, process.env.NODE_ENV !== "production" && t("Inject", n);
  }
}
function bf(i, e, t) {
  Si(
    q(i) ? i.map((n) => n.bind(e.proxy)) : i.bind(e.proxy),
    e,
    t
  );
}
function Qp(i, e, t, n) {
  let s = n.includes(".") ? $p(t, n) : () => t[n];
  if ($e(i)) {
    const r = e[i];
    K(r) ? Ms(s, r) : process.env.NODE_ENV !== "production" && M(`Invalid watch handler specified by key "${i}"`, r);
  } else if (K(i))
    Ms(s, i.bind(t));
  else if (ge(i))
    if (q(i))
      i.forEach((r) => Qp(r, e, t, n));
    else {
      const r = K(i.handler) ? i.handler.bind(t) : e[i.handler];
      K(r) ? Ms(s, r, i) : process.env.NODE_ENV !== "production" && M(`Invalid watch handler specified by key "${i.handler}"`, r);
    }
  else process.env.NODE_ENV !== "production" && M(`Invalid watch option: "${n}"`, i);
}
function Ip(i) {
  const e = i.type, { mixins: t, extends: n } = e, {
    mixins: s,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = i.appContext, l = r.get(e);
  let a;
  return l ? a = l : !s.length && !t && !n ? a = e : (a = {}, s.length && s.forEach(
    (c) => To(a, c, o, !0)
  ), To(a, e, o)), ge(e) && r.set(e, a), a;
}
function To(i, e, t, n = !1) {
  const { mixins: s, extends: r } = e;
  r && To(i, r, t, !0), s && s.forEach(
    (o) => To(i, o, t, !0)
  );
  for (const o in e)
    if (n && o === "expose")
      process.env.NODE_ENV !== "production" && M(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = Fb[o] || t && t[o];
      i[o] = l ? l(i[o], e[o]) : e[o];
    }
  return i;
}
const Fb = {
  data: yf,
  props: xf,
  emits: xf,
  // objects
  methods: Es,
  computed: Es,
  // lifecycle
  beforeCreate: at,
  created: at,
  beforeMount: at,
  mounted: at,
  beforeUpdate: at,
  updated: at,
  beforeDestroy: at,
  beforeUnmount: at,
  destroyed: at,
  unmounted: at,
  activated: at,
  deactivated: at,
  errorCaptured: at,
  serverPrefetch: at,
  // assets
  components: Es,
  directives: Es,
  // watch
  watch: Hb,
  // provide / inject
  provide: yf,
  inject: qb
};
function yf(i, e) {
  return e ? i ? function() {
    return De(
      K(i) ? i.call(this, this) : i,
      K(e) ? e.call(this, this) : e
    );
  } : e : i;
}
function qb(i, e) {
  return Es(Ia(i), Ia(e));
}
function Ia(i) {
  if (q(i)) {
    const e = {};
    for (let t = 0; t < i.length; t++)
      e[i[t]] = i[t];
    return e;
  }
  return i;
}
function at(i, e) {
  return i ? [...new Set([].concat(i, e))] : e;
}
function Es(i, e) {
  return i ? De(/* @__PURE__ */ Object.create(null), i, e) : e;
}
function xf(i, e) {
  return i ? q(i) && q(e) ? [.../* @__PURE__ */ new Set([...i, ...e])] : De(
    /* @__PURE__ */ Object.create(null),
    Of(i),
    Of(e ?? {})
  ) : e;
}
function Hb(i, e) {
  if (!i) return e;
  if (!e) return i;
  const t = De(/* @__PURE__ */ Object.create(null), i);
  for (const n in e)
    t[n] = at(i[n], e[n]);
  return t;
}
function Vp() {
  return {
    app: null,
    config: {
      isNativeTag: Yd,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Ub = 0;
function Gb(i, e) {
  return function(n, s = null) {
    K(n) || (n = De({}, n)), s != null && !ge(s) && (process.env.NODE_ENV !== "production" && M("root props passed to app.mount() must be an object."), s = null);
    const r = Vp(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const c = r.app = {
      _uid: Ub++,
      _component: n,
      _props: s,
      _container: null,
      _context: r,
      _instance: null,
      version: Nf,
      get config() {
        return r.config;
      },
      set config(h) {
        process.env.NODE_ENV !== "production" && M(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(h, ...f) {
        return o.has(h) ? process.env.NODE_ENV !== "production" && M("Plugin has already been applied to target app.") : h && K(h.install) ? (o.add(h), h.install(c, ...f)) : K(h) ? (o.add(h), h(c, ...f)) : process.env.NODE_ENV !== "production" && M(
          'A plugin must either be a function or an object with an "install" function.'
        ), c;
      },
      mixin(h) {
        return r.mixins.includes(h) ? process.env.NODE_ENV !== "production" && M(
          "Mixin has already been applied to target app" + (h.name ? `: ${h.name}` : "")
        ) : r.mixins.push(h), c;
      },
      component(h, f) {
        return process.env.NODE_ENV !== "production" && Wa(h, r.config), f ? (process.env.NODE_ENV !== "production" && r.components[h] && M(`Component "${h}" has already been registered in target app.`), r.components[h] = f, c) : r.components[h];
      },
      directive(h, f) {
        return process.env.NODE_ENV !== "production" && Tp(h), f ? (process.env.NODE_ENV !== "production" && r.directives[h] && M(`Directive "${h}" has already been registered in target app.`), r.directives[h] = f, c) : r.directives[h];
      },
      mount(h, f, u) {
        if (a)
          process.env.NODE_ENV !== "production" && M(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && h.__vue_app__ && M(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const d = c._ceVNode || yt(n, s);
          return d.appContext = r, u === !0 ? u = "svg" : u === !1 && (u = void 0), process.env.NODE_ENV !== "production" && (r.reload = () => {
            const p = ji(d);
            p.el = null, i(p, h, u);
          }), i(d, h, u), a = !0, c._container = h, h.__vue_app__ = c, process.env.NODE_ENV !== "production" && (c._instance = d.component, cb(c, Nf)), yl(d.component);
        }
      },
      onUnmount(h) {
        process.env.NODE_ENV !== "production" && typeof h != "function" && M(
          `Expected function as first argument to app.onUnmount(), but got ${typeof h}`
        ), l.push(h);
      },
      unmount() {
        a ? (Si(
          l,
          c._instance,
          16
        ), i(null, c._container), process.env.NODE_ENV !== "production" && (c._instance = null, hb(c)), delete c._container.__vue_app__) : process.env.NODE_ENV !== "production" && M("Cannot unmount an app that is not mounted.");
      },
      provide(h, f) {
        return process.env.NODE_ENV !== "production" && h in r.provides && (ue(r.provides, h) ? M(
          `App already provides property with key "${String(h)}". It will be overwritten with the new value.`
        ) : M(
          `App already provides property with key "${String(h)}" inherited from its parent element. It will be overwritten with the new value.`
        )), r.provides[h] = f, c;
      },
      runWithContext(h) {
        const f = Un;
        Un = c;
        try {
          return h();
        } finally {
          Un = f;
        }
      }
    };
    return c;
  };
}
let Un = null;
const zb = (i, e) => e === "modelValue" || e === "model-value" ? i.modelModifiers : i[`${e}Modifiers`] || i[`${it(e)}Modifiers`] || i[`${At(e)}Modifiers`];
function jb(i, e, ...t) {
  if (i.isUnmounted) return;
  const n = i.vnode.props || we;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: h,
      propsOptions: [f]
    } = i;
    if (h)
      if (!(e in h))
        (!f || !(an(it(e)) in f)) && M(
          `Component emitted event "${e}" but it is neither declared in the emits option nor as an "${an(it(e))}" prop.`
        );
      else {
        const u = h[e];
        K(u) && (u(...t) || M(
          `Invalid event arguments: event validation failed for event "${e}".`
        ));
      }
  }
  let s = t;
  const r = e.startsWith("update:"), o = r && zb(n, e.slice(7));
  if (o && (o.trim && (s = t.map((h) => $e(h) ? h.trim() : h)), o.number && (s = t.map(fl))), process.env.NODE_ENV !== "production" && gb(i, e, s), process.env.NODE_ENV !== "production") {
    const h = e.toLowerCase();
    h !== e && n[an(h)] && M(
      `Event "${h}" is emitted in component ${vr(
        i,
        i.type
      )} but the handler is registered for "${e}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${At(
        e
      )}" instead of "${e}".`
    );
  }
  let l, a = n[l = an(e)] || // also try camelCase event handler (#2249)
  n[l = an(it(e))];
  !a && r && (a = n[l = an(At(e))]), a && Si(
    a,
    i,
    6,
    s
  );
  const c = n[l + "Once"];
  if (c) {
    if (!i.emitted)
      i.emitted = {};
    else if (i.emitted[l])
      return;
    i.emitted[l] = !0, Si(
      c,
      i,
      6,
      s
    );
  }
}
const Yb = /* @__PURE__ */ new WeakMap();
function Lp(i, e, t = !1) {
  const n = t ? Yb : e.emitsCache, s = n.get(i);
  if (s !== void 0)
    return s;
  const r = i.emits;
  let o = {}, l = !1;
  if (!K(i)) {
    const a = (c) => {
      const h = Lp(c, e, !0);
      h && (l = !0, De(o, h));
    };
    !t && e.mixins.length && e.mixins.forEach(a), i.extends && a(i.extends), i.mixins && i.mixins.forEach(a);
  }
  return !r && !l ? (ge(i) && n.set(i, null), null) : (q(r) ? r.forEach((a) => o[a] = null) : De(o, r), ge(i) && n.set(i, o), o);
}
function Ol(i, e) {
  return !i || !dr(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), ue(i, e[0].toLowerCase() + e.slice(1)) || ue(i, At(e)) || ue(i, e));
}
let Va = !1;
function Ao() {
  Va = !0;
}
function vf(i) {
  const {
    type: e,
    vnode: t,
    proxy: n,
    withProxy: s,
    propsOptions: [r],
    slots: o,
    attrs: l,
    emit: a,
    render: c,
    renderCache: h,
    props: f,
    data: u,
    setupState: d,
    ctx: p,
    inheritAttrs: m
  } = i, g = ko(i);
  let b, x;
  process.env.NODE_ENV !== "production" && (Va = !1);
  try {
    if (t.shapeFlag & 4) {
      const v = s || n, T = process.env.NODE_ENV !== "production" && d.__isScriptSetup ? new Proxy(v, {
        get(N, W, U) {
          return M(
            `Property '${String(
              W
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(N, W, U);
        }
      }) : v;
      b = Xt(
        c.call(
          T,
          v,
          h,
          process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Oi(f) : f,
          d,
          u,
          p
        )
      ), x = l;
    } else {
      const v = e;
      process.env.NODE_ENV !== "production" && l === f && Ao(), b = Xt(
        v.length > 1 ? v(
          process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Oi(f) : f,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return Ao(), /* @__PURE__ */ Oi(l);
            },
            slots: o,
            emit: a
          } : { attrs: l, slots: o, emit: a }
        ) : v(
          process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Oi(f) : f,
          null
        )
      ), x = e.props ? l : Kb(l);
    }
  } catch (v) {
    Vs.length = 0, Or(v, i, 1), b = yt(Rt);
  }
  let S = b, C;
  if (process.env.NODE_ENV !== "production" && b.patchFlag > 0 && b.patchFlag & 2048 && ([S, C] = Bp(b)), x && m !== !1) {
    const v = Object.keys(x), { shapeFlag: T } = S;
    if (v.length) {
      if (T & 7)
        r && v.some(Us) && (x = Zb(
          x,
          r
        )), S = ji(S, x, !1, !0);
      else if (process.env.NODE_ENV !== "production" && !Va && S.type !== Rt) {
        const N = Object.keys(l), W = [], U = [];
        for (let se = 0, Z = N.length; se < Z; se++) {
          const F = N[se];
          dr(F) ? Us(F) || W.push(F[2].toLowerCase() + F.slice(3)) : U.push(F);
        }
        U.length && M(
          `Extraneous non-props attributes (${U.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), W.length && M(
          `Extraneous non-emits event listeners (${W.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return t.dirs && (process.env.NODE_ENV !== "production" && !Sf(S) && M(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), S = ji(S, null, !1, !0), S.dirs = S.dirs ? S.dirs.concat(t.dirs) : t.dirs), t.transition && (process.env.NODE_ENV !== "production" && !Sf(S) && M(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), ih(S, t.transition)), process.env.NODE_ENV !== "production" && C ? C(S) : b = S, ko(g), b;
}
const Bp = (i) => {
  const e = i.children, t = i.dynamicChildren, n = oh(e, !1);
  if (n) {
    if (process.env.NODE_ENV !== "production" && n.patchFlag > 0 && n.patchFlag & 2048)
      return Bp(n);
  } else return [i, void 0];
  const s = e.indexOf(n), r = t ? t.indexOf(n) : -1, o = (l) => {
    e[s] = l, t && (r > -1 ? t[r] = l : l.patchFlag > 0 && (i.dynamicChildren = [...t, l]));
  };
  return [Xt(n), o];
};
function oh(i, e = !0) {
  let t;
  for (let n = 0; n < i.length; n++) {
    const s = i[n];
    if (bl(s)) {
      if (s.type !== Rt || s.children === "v-if") {
        if (t)
          return;
        if (t = s, process.env.NODE_ENV !== "production" && e && t.patchFlag > 0 && t.patchFlag & 2048)
          return oh(t.children);
      }
    } else
      return;
  }
  return t;
}
const Kb = (i) => {
  let e;
  for (const t in i)
    (t === "class" || t === "style" || dr(t)) && ((e || (e = {}))[t] = i[t]);
  return e;
}, Zb = (i, e) => {
  const t = {};
  for (const n in i)
    (!Us(n) || !(n.slice(9) in e)) && (t[n] = i[n]);
  return t;
}, Sf = (i) => i.shapeFlag & 7 || i.type === Rt;
function Jb(i, e, t) {
  const { props: n, children: s, component: r } = i, { props: o, children: l, patchFlag: a } = e, c = r.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (s || l) && $t || e.dirs || e.transition)
    return !0;
  if (t && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return n ? wf(n, o, c) : !!o;
    if (a & 8) {
      const h = e.dynamicProps;
      for (let f = 0; f < h.length; f++) {
        const u = h[f];
        if (Xp(o, n, u) && !Ol(c, u))
          return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable) ? !0 : n === o ? !1 : n ? o ? wf(n, o, c) : !0 : !!o;
  return !1;
}
function wf(i, e, t) {
  const n = Object.keys(e);
  if (n.length !== Object.keys(i).length)
    return !0;
  for (let s = 0; s < n.length; s++) {
    const r = n[s];
    if (Xp(e, i, r) && !Ol(t, r))
      return !0;
  }
  return !1;
}
function Xp(i, e, t) {
  const n = i[t], s = e[t];
  return t === "style" && ge(n) && ge(s) ? !gr(n, s) : n !== s;
}
function ey({ vnode: i, parent: e, suspense: t }, n) {
  for (; e; ) {
    const s = e.subTree;
    if (s.suspense && s.suspense.activeBranch === i && (s.suspense.vnode.el = s.el = n, i = s), s === i)
      (i = e.vnode).el = n, e = e.parent;
    else
      break;
  }
  t && t.activeBranch === i && (t.vnode.el = n);
}
const Wp = {}, Fp = () => Object.create(Wp), qp = (i) => Object.getPrototypeOf(i) === Wp;
function ty(i, e, t, n = !1) {
  const s = {}, r = Fp();
  i.propsDefaults = /* @__PURE__ */ Object.create(null), Hp(i, e, s, r);
  for (const o in i.propsOptions[0])
    o in s || (s[o] = void 0);
  process.env.NODE_ENV !== "production" && Gp(e || {}, s, i), t ? i.props = n ? s : /* @__PURE__ */ F0(s) : i.type.props ? i.props = s : i.props = r, i.attrs = r;
}
function iy(i) {
  for (; i; ) {
    if (i.type.__hmrId) return !0;
    i = i.parent;
  }
}
function ny(i, e, t, n) {
  const {
    props: s,
    attrs: r,
    vnode: { patchFlag: o }
  } = i, l = /* @__PURE__ */ ne(s), [a] = i.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && iy(i)) && (n || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const h = i.vnode.dynamicProps;
      for (let f = 0; f < h.length; f++) {
        let u = h[f];
        if (Ol(i.emitsOptions, u))
          continue;
        const d = e[u];
        if (a)
          if (ue(r, u))
            d !== r[u] && (r[u] = d, c = !0);
          else {
            const p = it(u);
            s[p] = La(
              a,
              l,
              p,
              d,
              i,
              !1
            );
          }
        else
          d !== r[u] && (r[u] = d, c = !0);
      }
    }
  } else {
    Hp(i, e, s, r) && (c = !0);
    let h;
    for (const f in l)
      (!e || // for camelCase
      !ue(e, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((h = At(f)) === f || !ue(e, h))) && (a ? t && // for camelCase
      (t[f] !== void 0 || // for kebab-case
      t[h] !== void 0) && (s[f] = La(
        a,
        l,
        f,
        void 0,
        i,
        !0
      )) : delete s[f]);
    if (r !== l)
      for (const f in r)
        (!e || !ue(e, f)) && (delete r[f], c = !0);
  }
  c && di(i.attrs, "set", ""), process.env.NODE_ENV !== "production" && Gp(e || {}, s, i);
}
function Hp(i, e, t, n) {
  const [s, r] = i.propsOptions;
  let o = !1, l;
  if (e)
    for (let a in e) {
      if (Ns(a))
        continue;
      const c = e[a];
      let h;
      s && ue(s, h = it(a)) ? !r || !r.includes(h) ? t[h] = c : (l || (l = {}))[h] = c : Ol(i.emitsOptions, a) || (!(a in n) || c !== n[a]) && (n[a] = c, o = !0);
    }
  if (r) {
    const a = /* @__PURE__ */ ne(t), c = l || we;
    for (let h = 0; h < r.length; h++) {
      const f = r[h];
      t[f] = La(
        s,
        a,
        f,
        c[f],
        i,
        !ue(c, f)
      );
    }
  }
  return o;
}
function La(i, e, t, n, s, r) {
  const o = i[t];
  if (o != null) {
    const l = ue(o, "default");
    if (l && n === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && K(a)) {
        const { propsDefaults: c } = s;
        if (t in c)
          n = c[t];
        else {
          const h = xr(s);
          n = c[t] = a.call(
            null,
            e
          ), h();
        }
      } else
        n = a;
      s.ce && s.ce._setProp(t, n);
    }
    o[
      0
      /* shouldCast */
    ] && (r && !l ? n = !1 : o[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === At(t)) && (n = !0));
  }
  return n;
}
const sy = /* @__PURE__ */ new WeakMap();
function Up(i, e, t = !1) {
  const n = t ? sy : e.propsCache, s = n.get(i);
  if (s)
    return s;
  const r = i.props, o = {}, l = [];
  let a = !1;
  if (!K(i)) {
    const h = (f) => {
      a = !0;
      const [u, d] = Up(f, e, !0);
      De(o, u), d && l.push(...d);
    };
    !t && e.mixins.length && e.mixins.forEach(h), i.extends && h(i.extends), i.mixins && i.mixins.forEach(h);
  }
  if (!r && !a)
    return ge(i) && n.set(i, Fn), Fn;
  if (q(r))
    for (let h = 0; h < r.length; h++) {
      process.env.NODE_ENV !== "production" && !$e(r[h]) && M("props must be strings when using array syntax.", r[h]);
      const f = it(r[h]);
      Pf(f) && (o[f] = we);
    }
  else if (r) {
    process.env.NODE_ENV !== "production" && !ge(r) && M("invalid props options", r);
    for (const h in r) {
      const f = it(h);
      if (Pf(f)) {
        const u = r[h], d = o[f] = q(u) || K(u) ? { type: u } : De({}, u), p = d.type;
        let m = !1, g = !0;
        if (q(p))
          for (let b = 0; b < p.length; ++b) {
            const x = p[b], S = K(x) && x.name;
            if (S === "Boolean") {
              m = !0;
              break;
            } else S === "String" && (g = !1);
          }
        else
          m = K(p) && p.name === "Boolean";
        d[
          0
          /* shouldCast */
        ] = m, d[
          1
          /* shouldCastTrue */
        ] = g, (m || ue(d, "default")) && l.push(f);
      }
    }
  }
  const c = [o, l];
  return ge(i) && n.set(i, c), c;
}
function Pf(i) {
  return i[0] !== "$" && !Ns(i) ? !0 : (process.env.NODE_ENV !== "production" && M(`Invalid prop name: "${i}" is a reserved property.`), !1);
}
function ry(i) {
  return i === null ? "null" : typeof i == "function" ? i.name || "" : typeof i == "object" && i.constructor && i.constructor.name || "";
}
function Gp(i, e, t) {
  const n = /* @__PURE__ */ ne(e), s = t.propsOptions[0], r = Object.keys(i).map((o) => it(o));
  for (const o in s) {
    let l = s[o];
    l != null && oy(
      o,
      n[o],
      l,
      process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Oi(n) : n,
      !r.includes(o)
    );
  }
}
function oy(i, e, t, n, s) {
  const { type: r, required: o, validator: l, skipCheck: a } = t;
  if (o && s) {
    M('Missing required prop: "' + i + '"');
    return;
  }
  if (!(e == null && !o)) {
    if (r != null && r !== !0 && !a) {
      let c = !1;
      const h = q(r) ? r : [r], f = [];
      for (let u = 0; u < h.length && !c; u++) {
        const { valid: d, expectedType: p } = ay(e, h[u]);
        f.push(p || ""), c = d;
      }
      if (!c) {
        M(cy(i, e, f));
        return;
      }
    }
    l && !l(e, n) && M('Invalid prop: custom validator check failed for prop "' + i + '".');
  }
}
const ly = /* @__PURE__ */ Mi(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function ay(i, e) {
  let t;
  const n = ry(e);
  if (n === "null")
    t = i === null;
  else if (ly(n)) {
    const s = typeof i;
    t = s === n.toLowerCase(), !t && s === "object" && (t = i instanceof e);
  } else n === "Object" ? t = ge(i) : n === "Array" ? t = q(i) : t = i instanceof e;
  return {
    valid: t,
    expectedType: n
  };
}
function cy(i, e, t) {
  if (t.length === 0)
    return `Prop type [] for prop "${i}" won't match anything. Did you mean to use type Array instead?`;
  let n = `Invalid prop: type check failed for prop "${i}". Expected ${t.map(hl).join(" | ")}`;
  const s = t[0], r = Wc(e), o = kf(e, s), l = kf(e, r);
  return t.length === 1 && Cf(s) && hy(s, r) && (n += ` with value ${o}`), n += `, got ${r} `, Cf(r) && (n += `with value ${l}.`), n;
}
function kf(i, e) {
  return Gt(i) ? i.toString() : e === "String" ? `"${i}"` : e === "Number" ? `${Number(i)}` : `${i}`;
}
function Cf(i) {
  return ["string", "number", "boolean"].some((t) => i.toLowerCase() === t);
}
function hy(...i) {
  return i.every((e) => {
    const t = e.toLowerCase();
    return t !== "boolean" && t !== "symbol";
  });
}
const lh = (i) => i === "_" || i === "_ctx" || i === "$stable", ah = (i) => q(i) ? i.map(Xt) : [Xt(i)], fy = (i, e, t) => {
  if (e._n)
    return e;
  const n = Ob((...s) => (process.env.NODE_ENV !== "production" && We && !(t === null && ut) && !(t && t.root !== We.root) && M(
    `Slot "${i}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), ah(e(...s))), t);
  return n._c = !1, n;
}, zp = (i, e, t) => {
  const n = i._ctx;
  for (const s in i) {
    if (lh(s)) continue;
    const r = i[s];
    if (K(r))
      e[s] = fy(s, r, n);
    else if (r != null) {
      process.env.NODE_ENV !== "production" && M(
        `Non-function value encountered for slot "${s}". Prefer function slots for better performance.`
      );
      const o = ah(r);
      e[s] = () => o;
    }
  }
}, jp = (i, e) => {
  process.env.NODE_ENV !== "production" && !nh(i.vnode) && M(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const t = ah(e);
  i.slots.default = () => t;
}, Ba = (i, e, t) => {
  for (const n in e)
    (t || !lh(n)) && (i[n] = e[n]);
}, uy = (i, e, t) => {
  const n = i.slots = Fp();
  if (i.vnode.shapeFlag & 32) {
    const s = e._;
    s ? (Ba(n, e, t), t && xo(n, "_", s, !0)) : zp(e, n);
  } else e && jp(i, e);
}, dy = (i, e, t) => {
  const { vnode: n, slots: s } = i;
  let r = !0, o = we;
  if (n.shapeFlag & 32) {
    const l = e._;
    l ? process.env.NODE_ENV !== "production" && $t ? (Ba(s, e, t), di(i, "set", "$slots")) : t && l === 1 ? r = !1 : Ba(s, e, t) : (r = !e.$stable, zp(e, s)), o = e;
  } else e && (jp(i, e), o = { default: 1 });
  if (r)
    for (const l in s)
      !lh(l) && o[l] == null && delete s[l];
};
let ys, Ci;
function Nn(i, e) {
  i.appContext.config.performance && $o() && Ci.mark(`vue-${e}-${i.uid}`), process.env.NODE_ENV !== "production" && pb(i, e, $o() ? Ci.now() : Date.now());
}
function Rn(i, e) {
  if (i.appContext.config.performance && $o()) {
    const t = `vue-${e}-${i.uid}`, n = t + ":end", s = `<${vr(i, i.type)}> ${e}`;
    Ci.mark(n), Ci.measure(s, t, n), Ci.clearMeasures(s), Ci.clearMarks(t), Ci.clearMarks(n);
  }
  process.env.NODE_ENV !== "production" && mb(i, e, $o() ? Ci.now() : Date.now());
}
function $o() {
  return ys !== void 0 || (typeof window < "u" && window.performance ? (ys = !0, Ci = window.performance) : ys = !1), ys;
}
function py() {
  const i = [];
  if (process.env.NODE_ENV !== "production" && i.length) {
    const e = i.length > 1;
    console.warn(
      `Feature flag${e ? "s" : ""} ${i.join(", ")} ${e ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const mt = yy;
function my(i) {
  return gy(i);
}
function gy(i, e) {
  py();
  const t = mr();
  t.__VUE__ = !0, process.env.NODE_ENV !== "production" && eh(t.__VUE_DEVTOOLS_GLOBAL_HOOK__, t);
  const {
    insert: n,
    remove: s,
    patchProp: r,
    createElement: o,
    createText: l,
    createComment: a,
    setText: c,
    setElementText: h,
    parentNode: f,
    nextSibling: u,
    setScopeId: d = He,
    insertStaticContent: p
  } = i, m = (O, y, w, D = null, E = null, A = null, Q = void 0, _ = null, R = process.env.NODE_ENV !== "production" && $t ? !1 : !!y.dynamicChildren) => {
    if (O === y)
      return;
    O && !xs(O, y) && (D = Tr(O), Pe(O, E, A, !0), O = null), y.patchFlag === -2 && (R = !1, y.dynamicChildren = null);
    const { type: $, ref: z, shapeFlag: V } = y;
    switch ($) {
      case yr:
        g(O, y, w, D);
        break;
      case Rt:
        b(O, y, w, D);
        break;
      case lo:
        O == null ? x(y, w, D, Q) : process.env.NODE_ENV !== "production" && S(O, y, w, Q);
        break;
      case et:
        he(
          O,
          y,
          w,
          D,
          E,
          A,
          Q,
          _,
          R
        );
        break;
      default:
        V & 1 ? T(
          O,
          y,
          w,
          D,
          E,
          A,
          Q,
          _,
          R
        ) : V & 6 ? fe(
          O,
          y,
          w,
          D,
          E,
          A,
          Q,
          _,
          R
        ) : V & 64 || V & 128 ? $.process(
          O,
          y,
          w,
          D,
          E,
          A,
          Q,
          _,
          R,
          gs
        ) : process.env.NODE_ENV !== "production" && M("Invalid VNode type:", $, `(${typeof $})`);
    }
    z != null && E ? Qs(z, O && O.ref, A, y || O, !y) : z == null && O && O.ref != null && Qs(O.ref, null, A, O, !0);
  }, g = (O, y, w, D) => {
    if (O == null)
      n(
        y.el = l(y.children),
        w,
        D
      );
    else {
      const E = y.el = O.el;
      y.children !== O.children && c(E, y.children);
    }
  }, b = (O, y, w, D) => {
    O == null ? n(
      y.el = a(y.children || ""),
      w,
      D
    ) : y.el = O.el;
  }, x = (O, y, w, D) => {
    [O.el, O.anchor] = p(
      O.children,
      y,
      w,
      D,
      O.el,
      O.anchor
    );
  }, S = (O, y, w, D) => {
    if (y.children !== O.children) {
      const E = u(O.anchor);
      v(O), [y.el, y.anchor] = p(
        y.children,
        w,
        E,
        D
      );
    } else
      y.el = O.el, y.anchor = O.anchor;
  }, C = ({ el: O, anchor: y }, w, D) => {
    let E;
    for (; O && O !== y; )
      E = u(O), n(O, w, D), O = E;
    n(y, w, D);
  }, v = ({ el: O, anchor: y }) => {
    let w;
    for (; O && O !== y; )
      w = u(O), s(O), O = w;
    s(y);
  }, T = (O, y, w, D, E, A, Q, _, R) => {
    if (y.type === "svg" ? Q = "svg" : y.type === "math" && (Q = "mathml"), O == null)
      N(
        y,
        w,
        D,
        E,
        A,
        Q,
        _,
        R
      );
    else {
      const $ = O.el && O.el._isVueCE ? O.el : null;
      try {
        $ && $._beginPatch(), se(
          O,
          y,
          E,
          A,
          Q,
          _,
          R
        );
      } finally {
        $ && $._endPatch();
      }
    }
  }, N = (O, y, w, D, E, A, Q, _) => {
    let R, $;
    const { props: z, shapeFlag: V, transition: H, dirs: ee } = O;
    if (R = O.el = o(
      O.type,
      A,
      z && z.is,
      z
    ), V & 8 ? h(R, O.children) : V & 16 && U(
      O.children,
      R,
      null,
      D,
      E,
      Hl(O, A),
      Q,
      _
    ), ee && rn(O, null, D, "created"), W(R, O, O.scopeId, Q, D), z) {
      for (const ve in z)
        ve !== "value" && !Ns(ve) && r(R, ve, null, z[ve], A, D);
      "value" in z && r(R, "value", null, z.value, A), ($ = z.onVnodeBeforeMount) && ri($, D, O);
    }
    process.env.NODE_ENV !== "production" && (xo(R, "__vnode", O, !0), xo(R, "__vueParentComponent", D, !0)), ee && rn(O, null, D, "beforeMount");
    const be = Oy(E, H);
    if (be && H.beforeEnter(R), n(R, y, w), ($ = z && z.onVnodeMounted) || be || ee) {
      const ve = process.env.NODE_ENV !== "production" && $t;
      mt(() => {
        let ke;
        process.env.NODE_ENV !== "production" && (ke = uf(ve));
        try {
          $ && ri($, D, O), be && H.enter(R), ee && rn(O, null, D, "mounted");
        } finally {
          process.env.NODE_ENV !== "production" && uf(ke);
        }
      }, E);
    }
  }, W = (O, y, w, D, E) => {
    if (w && d(O, w), D)
      for (let A = 0; A < D.length; A++)
        d(O, D[A]);
    if (E) {
      let A = E.subTree;
      if (process.env.NODE_ENV !== "production" && A.patchFlag > 0 && A.patchFlag & 2048 && (A = oh(A.children) || A), y === A || Zp(A.type) && (A.ssContent === y || A.ssFallback === y)) {
        const Q = E.vnode;
        W(
          O,
          Q,
          Q.scopeId,
          Q.slotScopeIds,
          E.parent
        );
      }
    }
  }, U = (O, y, w, D, E, A, Q, _, R = 0) => {
    for (let $ = R; $ < O.length; $++) {
      const z = O[$] = _ ? Ei(O[$]) : Xt(O[$]);
      m(
        null,
        z,
        y,
        w,
        D,
        E,
        A,
        Q,
        _
      );
    }
  }, se = (O, y, w, D, E, A, Q) => {
    const _ = y.el = O.el;
    process.env.NODE_ENV !== "production" && (_.__vnode = y);
    let { patchFlag: R, dynamicChildren: $, dirs: z } = y;
    R |= O.patchFlag & 16;
    const V = O.props || we, H = y.props || we;
    let ee;
    if (w && on(w, !1), (ee = H.onVnodeBeforeUpdate) && ri(ee, w, y, O), z && rn(y, O, w, "beforeUpdate"), w && on(w, !0), process.env.NODE_ENV !== "production" && $t && (R = 0, Q = !1, $ = null), (V.innerHTML && H.innerHTML == null || V.textContent && H.textContent == null) && h(_, ""), $ ? (Z(
      O.dynamicChildren,
      $,
      _,
      w,
      D,
      Hl(y, E),
      A
    ), process.env.NODE_ENV !== "production" && oo(O, y)) : Q || xe(
      O,
      y,
      _,
      null,
      w,
      D,
      Hl(y, E),
      A,
      !1
    ), R > 0) {
      if (R & 16)
        F(_, V, H, w, E);
      else if (R & 2 && V.class !== H.class && r(_, "class", null, H.class, E), R & 4 && r(_, "style", V.style, H.style, E), R & 8) {
        const be = y.dynamicProps;
        for (let ve = 0; ve < be.length; ve++) {
          const ke = be[ve], Be = V[ke], Ye = H[ke];
          (Ye !== Be || ke === "value") && r(_, ke, Be, Ye, E, w);
        }
      }
      R & 1 && O.children !== y.children && h(_, y.children);
    } else !Q && $ == null && F(_, V, H, w, E);
    ((ee = H.onVnodeUpdated) || z) && mt(() => {
      ee && ri(ee, w, y, O), z && rn(y, O, w, "updated");
    }, D);
  }, Z = (O, y, w, D, E, A, Q) => {
    for (let _ = 0; _ < y.length; _++) {
      const R = O[_], $ = y[_], z = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        R.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (R.type === et || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !xs(R, $) || // - In the case of a component, it could contain anything.
        R.shapeFlag & 198) ? f(R.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          w
        )
      );
      m(
        R,
        $,
        z,
        null,
        D,
        E,
        A,
        Q,
        !0
      );
    }
  }, F = (O, y, w, D, E) => {
    if (y !== w) {
      if (y !== we)
        for (const A in y)
          !Ns(A) && !(A in w) && r(
            O,
            A,
            y[A],
            null,
            E,
            D
          );
      for (const A in w) {
        if (Ns(A)) continue;
        const Q = w[A], _ = y[A];
        Q !== _ && A !== "value" && r(O, A, _, Q, E, D);
      }
      "value" in w && r(O, "value", y.value, w.value, E);
    }
  }, he = (O, y, w, D, E, A, Q, _, R) => {
    const $ = y.el = O ? O.el : l(""), z = y.anchor = O ? O.anchor : l("");
    let { patchFlag: V, dynamicChildren: H, slotScopeIds: ee } = y;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    ($t || V & 2048) && (V = 0, R = !1, H = null), ee && (_ = _ ? _.concat(ee) : ee), O == null ? (n($, w, D), n(z, w, D), U(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      y.children || [],
      w,
      z,
      E,
      A,
      Q,
      _,
      R
    )) : V > 0 && V & 64 && H && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    O.dynamicChildren && O.dynamicChildren.length === H.length ? (Z(
      O.dynamicChildren,
      H,
      w,
      E,
      A,
      Q,
      _
    ), process.env.NODE_ENV !== "production" ? oo(O, y) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (y.key != null || E && y === E.subTree) && oo(
        O,
        y,
        !0
        /* shallow */
      )
    )) : xe(
      O,
      y,
      w,
      z,
      E,
      A,
      Q,
      _,
      R
    );
  }, fe = (O, y, w, D, E, A, Q, _, R) => {
    y.slotScopeIds = _, O == null ? y.shapeFlag & 512 ? E.ctx.activate(
      y,
      w,
      D,
      Q,
      R
    ) : oe(
      y,
      w,
      D,
      E,
      A,
      Q,
      R
    ) : Oe(O, y, R);
  }, oe = (O, y, w, D, E, A, Q) => {
    const _ = O.component = Cy(
      O,
      D,
      E
    );
    if (process.env.NODE_ENV !== "production" && _.type.__hmrId && rb(_), process.env.NODE_ENV !== "production" && (io(O), Nn(_, "mount")), nh(O) && (_.ctx.renderer = gs), process.env.NODE_ENV !== "production" && Nn(_, "init"), Ty(_, !1, Q), process.env.NODE_ENV !== "production" && Rn(_, "init"), process.env.NODE_ENV !== "production" && $t && (O.el = null), _.asyncDep) {
      if (E && E.registerDep(_, G, Q), !O.el) {
        const R = _.subTree = yt(Rt);
        b(null, R, y, w), O.placeholder = R.el;
      }
    } else
      G(
        _,
        O,
        y,
        w,
        E,
        A,
        Q
      );
    process.env.NODE_ENV !== "production" && (no(), Rn(_, "mount"));
  }, Oe = (O, y, w) => {
    const D = y.component = O.component;
    if (Jb(O, y, w))
      if (D.asyncDep && !D.asyncResolved) {
        process.env.NODE_ENV !== "production" && io(y), J(D, y, w), process.env.NODE_ENV !== "production" && no();
        return;
      } else
        D.next = y, D.update();
    else
      y.el = O.el, D.vnode = y;
  }, G = (O, y, w, D, E, A, Q) => {
    const _ = () => {
      if (O.isMounted) {
        let { next: V, bu: H, u: ee, parent: be, vnode: ve } = O;
        {
          const ni = Yp(O);
          if (ni) {
            V && (V.el = ve.el, J(O, V, Q)), ni.asyncDep.then(() => {
              mt(() => {
                O.isUnmounted || $();
              }, E);
            });
            return;
          }
        }
        let ke = V, Be;
        process.env.NODE_ENV !== "production" && io(V || O.vnode), on(O, !1), V ? (V.el = ve.el, J(O, V, Q)) : V = ve, H && _n(H), (Be = V.props && V.props.onVnodeBeforeUpdate) && ri(Be, be, V, ve), on(O, !0), process.env.NODE_ENV !== "production" && Nn(O, "render");
        const Ye = vf(O);
        process.env.NODE_ENV !== "production" && Rn(O, "render");
        const ii = O.subTree;
        O.subTree = Ye, process.env.NODE_ENV !== "production" && Nn(O, "patch"), m(
          ii,
          Ye,
          // parent may have changed if it's in a teleport
          f(ii.el),
          // anchor may have changed if it's in a fragment
          Tr(ii),
          O,
          E,
          A
        ), process.env.NODE_ENV !== "production" && Rn(O, "patch"), V.el = Ye.el, ke === null && ey(O, Ye.el), ee && mt(ee, E), (Be = V.props && V.props.onVnodeUpdated) && mt(
          () => ri(Be, be, V, ve),
          E
        ), process.env.NODE_ENV !== "production" && kp(O), process.env.NODE_ENV !== "production" && no();
      } else {
        let V;
        const { el: H, props: ee } = y, { bm: be, m: ve, parent: ke, root: Be, type: Ye } = O, ii = Is(y);
        on(O, !1), be && _n(be), !ii && (V = ee && ee.onVnodeBeforeMount) && ri(V, ke, y), on(O, !0);
        {
          Be.ce && Be.ce._hasShadowRoot() && Be.ce._injectChildStyle(
            Ye,
            O.parent ? O.parent.type : void 0
          ), process.env.NODE_ENV !== "production" && Nn(O, "render");
          const ni = O.subTree = vf(O);
          process.env.NODE_ENV !== "production" && Rn(O, "render"), process.env.NODE_ENV !== "production" && Nn(O, "patch"), m(
            null,
            ni,
            w,
            D,
            O,
            E,
            A
          ), process.env.NODE_ENV !== "production" && Rn(O, "patch"), y.el = ni.el;
        }
        if (ve && mt(ve, E), !ii && (V = ee && ee.onVnodeMounted)) {
          const ni = y;
          mt(
            () => ri(V, ke, ni),
            E
          );
        }
        (y.shapeFlag & 256 || ke && Is(ke.vnode) && ke.vnode.shapeFlag & 256) && O.a && mt(O.a, E), O.isMounted = !0, process.env.NODE_ENV !== "production" && fb(O), y = w = D = null;
      }
    };
    O.scope.on();
    const R = O.effect = new tp(_);
    O.scope.off();
    const $ = O.update = R.run.bind(R), z = O.job = R.runIfDirty.bind(R);
    z.i = O, z.id = O.uid, R.scheduler = () => ml(z), on(O, !0), process.env.NODE_ENV !== "production" && (R.onTrack = O.rtc ? (V) => _n(O.rtc, V) : void 0, R.onTrigger = O.rtg ? (V) => _n(O.rtg, V) : void 0), $();
  }, J = (O, y, w) => {
    y.component = O;
    const D = O.vnode.props;
    O.vnode = y, O.next = null, ny(O, y.props, D, w), dy(O, y.children, w), jt(), ff(O), Yt();
  }, xe = (O, y, w, D, E, A, Q, _, R = !1) => {
    const $ = O && O.children, z = O ? O.shapeFlag : 0, V = y.children, { patchFlag: H, shapeFlag: ee } = y;
    if (H > 0) {
      if (H & 128) {
        j(
          $,
          V,
          w,
          D,
          E,
          A,
          Q,
          _,
          R
        );
        return;
      } else if (H & 256) {
        le(
          $,
          V,
          w,
          D,
          E,
          A,
          Q,
          _,
          R
        );
        return;
      }
    }
    ee & 8 ? (z & 16 && Li($, E, A), V !== $ && h(w, V)) : z & 16 ? ee & 16 ? j(
      $,
      V,
      w,
      D,
      E,
      A,
      Q,
      _,
      R
    ) : Li($, E, A, !0) : (z & 8 && h(w, ""), ee & 16 && U(
      V,
      w,
      D,
      E,
      A,
      Q,
      _,
      R
    ));
  }, le = (O, y, w, D, E, A, Q, _, R) => {
    O = O || Fn, y = y || Fn;
    const $ = O.length, z = y.length, V = Math.min($, z);
    let H;
    for (H = 0; H < V; H++) {
      const ee = y[H] = R ? Ei(y[H]) : Xt(y[H]);
      m(
        O[H],
        ee,
        w,
        null,
        E,
        A,
        Q,
        _,
        R
      );
    }
    $ > z ? Li(
      O,
      E,
      A,
      !0,
      !1,
      V
    ) : U(
      y,
      w,
      D,
      E,
      A,
      Q,
      _,
      R,
      V
    );
  }, j = (O, y, w, D, E, A, Q, _, R) => {
    let $ = 0;
    const z = y.length;
    let V = O.length - 1, H = z - 1;
    for (; $ <= V && $ <= H; ) {
      const ee = O[$], be = y[$] = R ? Ei(y[$]) : Xt(y[$]);
      if (xs(ee, be))
        m(
          ee,
          be,
          w,
          null,
          E,
          A,
          Q,
          _,
          R
        );
      else
        break;
      $++;
    }
    for (; $ <= V && $ <= H; ) {
      const ee = O[V], be = y[H] = R ? Ei(y[H]) : Xt(y[H]);
      if (xs(ee, be))
        m(
          ee,
          be,
          w,
          null,
          E,
          A,
          Q,
          _,
          R
        );
      else
        break;
      V--, H--;
    }
    if ($ > V) {
      if ($ <= H) {
        const ee = H + 1, be = ee < z ? y[ee].el : D;
        for (; $ <= H; )
          m(
            null,
            y[$] = R ? Ei(y[$]) : Xt(y[$]),
            w,
            be,
            E,
            A,
            Q,
            _,
            R
          ), $++;
      }
    } else if ($ > H)
      for (; $ <= V; )
        Pe(O[$], E, A, !0), $++;
    else {
      const ee = $, be = $, ve = /* @__PURE__ */ new Map();
      for ($ = be; $ <= H; $++) {
        const lt = y[$] = R ? Ei(y[$]) : Xt(y[$]);
        lt.key != null && (process.env.NODE_ENV !== "production" && ve.has(lt.key) && M(
          "Duplicate keys found during update:",
          JSON.stringify(lt.key),
          "Make sure keys are unique."
        ), ve.set(lt.key, $));
      }
      let ke, Be = 0;
      const Ye = H - be + 1;
      let ii = !1, ni = 0;
      const Os = new Array(Ye);
      for ($ = 0; $ < Ye; $++) Os[$] = 0;
      for ($ = ee; $ <= V; $++) {
        const lt = O[$];
        if (Be >= Ye) {
          Pe(lt, E, A, !0);
          continue;
        }
        let si;
        if (lt.key != null)
          si = ve.get(lt.key);
        else
          for (ke = be; ke <= H; ke++)
            if (Os[ke - be] === 0 && xs(lt, y[ke])) {
              si = ke;
              break;
            }
        si === void 0 ? Pe(lt, E, A, !0) : (Os[si - be] = $ + 1, si >= ni ? ni = si : ii = !0, m(
          lt,
          y[si],
          w,
          null,
          E,
          A,
          Q,
          _,
          R
        ), Be++);
      }
      const tf = ii ? by(Os) : Fn;
      for (ke = tf.length - 1, $ = Ye - 1; $ >= 0; $--) {
        const lt = be + $, si = y[lt], nf = y[lt + 1], sf = lt + 1 < z ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          nf.el || Kp(nf)
        ) : D;
        Os[$] === 0 ? m(
          null,
          si,
          w,
          sf,
          E,
          A,
          Q,
          _,
          R
        ) : ii && (ke < 0 || $ !== tf[ke] ? te(si, w, sf, 2) : ke--);
      }
    }
  }, te = (O, y, w, D, E = null) => {
    const { el: A, type: Q, transition: _, children: R, shapeFlag: $ } = O;
    if ($ & 6) {
      te(O.component.subTree, y, w, D);
      return;
    }
    if ($ & 128) {
      O.suspense.move(y, w, D);
      return;
    }
    if ($ & 64) {
      Q.move(O, y, w, gs);
      return;
    }
    if (Q === et) {
      n(A, y, w);
      for (let V = 0; V < R.length; V++)
        te(R[V], y, w, D);
      n(O.anchor, y, w);
      return;
    }
    if (Q === lo) {
      C(O, y, w);
      return;
    }
    if (D !== 2 && $ & 1 && _)
      if (D === 0)
        _.beforeEnter(A), n(A, y, w), mt(() => _.enter(A), E);
      else {
        const { leave: V, delayLeave: H, afterLeave: ee } = _, be = () => {
          O.ctx.isUnmounted ? s(A) : n(A, y, w);
        }, ve = () => {
          A._isLeaving && A[Pb](
            !0
            /* cancelled */
          ), V(A, () => {
            be(), ee && ee();
          });
        };
        H ? H(A, be, ve) : ve();
      }
    else
      n(A, y, w);
  }, Pe = (O, y, w, D = !1, E = !1) => {
    const {
      type: A,
      props: Q,
      ref: _,
      children: R,
      dynamicChildren: $,
      shapeFlag: z,
      patchFlag: V,
      dirs: H,
      cacheIndex: ee,
      memo: be
    } = O;
    if (V === -2 && (E = !1), _ != null && (jt(), Qs(_, null, w, O, !0), Yt()), ee != null && (y.renderCache[ee] = void 0), z & 256) {
      y.ctx.deactivate(O);
      return;
    }
    const ve = z & 1 && H, ke = !Is(O);
    let Be;
    if (ke && (Be = Q && Q.onVnodeBeforeUnmount) && ri(Be, y, O), z & 6)
      $n(O.component, w, D);
    else {
      if (z & 128) {
        O.suspense.unmount(w, D);
        return;
      }
      ve && rn(O, null, y, "beforeUnmount"), z & 64 ? O.type.remove(
        O,
        y,
        w,
        gs,
        D
      ) : $ && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !$.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (A !== et || V > 0 && V & 64) ? Li(
        $,
        y,
        w,
        !1,
        !0
      ) : (A === et && V & 384 || !E && z & 16) && Li(R, y, w), D && Pt(O);
    }
    const Ye = be != null && ee == null;
    (ke && (Be = Q && Q.onVnodeUnmounted) || ve || Ye) && mt(() => {
      Be && ri(Be, y, O), ve && rn(O, null, y, "unmounted"), Ye && (O.el = null);
    }, w);
  }, Pt = (O) => {
    const { type: y, el: w, anchor: D, transition: E } = O;
    if (y === et) {
      process.env.NODE_ENV !== "production" && O.patchFlag > 0 && O.patchFlag & 2048 && E && !E.persisted ? O.children.forEach((Q) => {
        Q.type === Rt ? s(Q.el) : Pt(Q);
      }) : Le(w, D);
      return;
    }
    if (y === lo) {
      v(O);
      return;
    }
    const A = () => {
      s(w), E && !E.persisted && E.afterLeave && E.afterLeave();
    };
    if (O.shapeFlag & 1 && E && !E.persisted) {
      const { leave: Q, delayLeave: _ } = E, R = () => Q(w, A);
      _ ? _(O.el, A, R) : R();
    } else
      A();
  }, Le = (O, y) => {
    let w;
    for (; O !== y; )
      w = u(O), s(O), O = w;
    s(y);
  }, $n = (O, y, w) => {
    process.env.NODE_ENV !== "production" && O.type.__hmrId && ob(O);
    const { bum: D, scope: E, job: A, subTree: Q, um: _, m: R, a: $ } = O;
    Ef(R), Ef($), D && _n(D), E.stop(), A && (A.flags |= 8, Pe(Q, O, y, w)), _ && mt(_, y), mt(() => {
      O.isUnmounted = !0;
    }, y), process.env.NODE_ENV !== "production" && db(O);
  }, Li = (O, y, w, D = !1, E = !1, A = 0) => {
    for (let Q = A; Q < O.length; Q++)
      Pe(O[Q], y, w, D, E);
  }, Tr = (O) => {
    if (O.shapeFlag & 6)
      return Tr(O.component.subTree);
    if (O.shapeFlag & 128)
      return O.suspense.next();
    const y = u(O.anchor || O.el), w = y && y[Sb];
    return w ? u(w) : y;
  };
  let Il = !1;
  const ef = (O, y, w) => {
    let D;
    O == null ? y._vnode && (Pe(y._vnode, null, null, !0), D = y._vnode.component) : m(
      y._vnode || null,
      O,
      y,
      null,
      null,
      null,
      w
    ), y._vnode = O, Il || (Il = !0, ff(D), Sp(), Il = !1);
  }, gs = {
    p: m,
    um: Pe,
    m: te,
    r: Pt,
    mt: oe,
    mc: U,
    pc: xe,
    pbc: Z,
    n: Tr,
    o: i
  };
  return {
    render: ef,
    hydrate: void 0,
    createApp: Gb(ef)
  };
}
function Hl({ type: i, props: e }, t) {
  return t === "svg" && i === "foreignObject" || t === "mathml" && i === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : t;
}
function on({ effect: i, job: e }, t) {
  t ? (i.flags |= 32, e.flags |= 4) : (i.flags &= -33, e.flags &= -5);
}
function Oy(i, e) {
  return (!i || i && !i.pendingBranch) && e && !e.persisted;
}
function oo(i, e, t = !1) {
  const n = i.children, s = e.children;
  if (q(n) && q(s))
    for (let r = 0; r < n.length; r++) {
      const o = n[r];
      let l = s[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[r] = Ei(s[r]), l.el = o.el), !t && l.patchFlag !== -2 && oo(o, l)), l.type === yr && (l.patchFlag === -1 && (l = s[r] = Ei(l)), l.el = o.el), l.type === Rt && !l.el && (l.el = o.el), process.env.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
    }
}
function by(i) {
  const e = i.slice(), t = [0];
  let n, s, r, o, l;
  const a = i.length;
  for (n = 0; n < a; n++) {
    const c = i[n];
    if (c !== 0) {
      if (s = t[t.length - 1], i[s] < c) {
        e[n] = s, t.push(n);
        continue;
      }
      for (r = 0, o = t.length - 1; r < o; )
        l = r + o >> 1, i[t[l]] < c ? r = l + 1 : o = l;
      c < i[t[r]] && (r > 0 && (e[n] = t[r - 1]), t[r] = n);
    }
  }
  for (r = t.length, o = t[r - 1]; r-- > 0; )
    t[r] = o, o = e[o];
  return t;
}
function Yp(i) {
  const e = i.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : Yp(e);
}
function Ef(i) {
  if (i)
    for (let e = 0; e < i.length; e++)
      i[e].flags |= 8;
}
function Kp(i) {
  if (i.placeholder)
    return i.placeholder;
  const e = i.component;
  return e ? Kp(e.subTree) : null;
}
const Zp = (i) => i.__isSuspense;
function yy(i, e) {
  e && e.pendingBranch ? q(i) ? e.effects.push(...i) : e.effects.push(i) : vp(i);
}
const et = /* @__PURE__ */ Symbol.for("v-fgt"), yr = /* @__PURE__ */ Symbol.for("v-txt"), Rt = /* @__PURE__ */ Symbol.for("v-cmt"), lo = /* @__PURE__ */ Symbol.for("v-stc"), Vs = [];
let Dt = null;
function de(i = !1) {
  Vs.push(Dt = i ? null : []);
}
function xy() {
  Vs.pop(), Dt = Vs[Vs.length - 1] || null;
}
let Ys = 1;
function Tf(i, e = !1) {
  Ys += i, i < 0 && Dt && e && (Dt.hasOnce = !0);
}
function Jp(i) {
  return i.dynamicChildren = Ys > 0 ? Dt || Fn : null, xy(), Ys > 0 && Dt && Dt.push(i), i;
}
function ye(i, e, t, n, s, r) {
  return Jp(
    re(
      i,
      e,
      t,
      n,
      s,
      r,
      !0
    )
  );
}
function em(i, e, t, n, s) {
  return Jp(
    yt(
      i,
      e,
      t,
      n,
      s,
      !0
    )
  );
}
function bl(i) {
  return i ? i.__v_isVNode === !0 : !1;
}
function xs(i, e) {
  if (process.env.NODE_ENV !== "production" && e.shapeFlag & 6 && i.component) {
    const t = so.get(e.type);
    if (t && t.has(i.component))
      return i.shapeFlag &= -257, e.shapeFlag &= -513, !1;
  }
  return i.type === e.type && i.key === e.key;
}
const vy = (...i) => im(
  ...i
), tm = ({ key: i }) => i ?? null, ao = ({
  ref: i,
  ref_key: e,
  ref_for: t
}) => (typeof i == "number" && (i = "" + i), i != null ? $e(i) || /* @__PURE__ */ Xe(i) || K(i) ? { i: ut, r: i, k: e, f: !!t } : i : null);
function re(i, e = null, t = null, n = 0, s = null, r = i === et ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: i,
    props: e,
    key: e && tm(e),
    ref: e && ao(e),
    scopeId: Ep,
    slotScopeIds: null,
    children: t,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: n,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: ut
  };
  return l ? (hh(a, t), r & 128 && i.normalize(a)) : t && (a.shapeFlag |= $e(t) ? 8 : 16), process.env.NODE_ENV !== "production" && a.key !== a.key && M("VNode created with invalid key (NaN). VNode type:", a.type), Ys > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Dt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Dt.push(a), a;
}
const yt = process.env.NODE_ENV !== "production" ? vy : im;
function im(i, e = null, t = null, n = 0, s = null, r = !1) {
  if ((!i || i === Qb) && (process.env.NODE_ENV !== "production" && !i && M(`Invalid vnode type when creating vnode: ${i}.`), i = Rt), bl(i)) {
    const l = ji(
      i,
      e,
      !0
      /* mergeRef: true */
    );
    return t && hh(l, t), Ys > 0 && !r && Dt && (l.shapeFlag & 6 ? Dt[Dt.indexOf(i)] = l : Dt.push(l)), l.patchFlag = -2, l;
  }
  if (am(i) && (i = i.__vccOpts), e) {
    e = Sy(e);
    let { class: l, style: a } = e;
    l && !$e(l) && (e.class = Hc(l)), ge(a) && (/* @__PURE__ */ vo(a) && !q(a) && (a = De({}, a)), e.style = qc(a));
  }
  const o = $e(i) ? 1 : Zp(i) ? 128 : wb(i) ? 64 : ge(i) ? 4 : K(i) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && o & 4 && /* @__PURE__ */ vo(i) && (i = /* @__PURE__ */ ne(i), M(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    i
  )), re(
    i,
    e,
    t,
    n,
    s,
    o,
    r,
    !0
  );
}
function Sy(i) {
  return i ? /* @__PURE__ */ vo(i) || qp(i) ? De({}, i) : i : null;
}
function ji(i, e, t = !1, n = !1) {
  const { props: s, ref: r, patchFlag: o, children: l, transition: a } = i, c = e ? wy(s || {}, e) : s, h = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: i.type,
    props: c,
    key: c && tm(c),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      t && r ? q(r) ? r.concat(ao(e)) : [r, ao(e)] : ao(e)
    ) : r,
    scopeId: i.scopeId,
    slotScopeIds: i.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && o === -1 && q(l) ? l.map(nm) : l,
    target: i.target,
    targetStart: i.targetStart,
    targetAnchor: i.targetAnchor,
    staticCount: i.staticCount,
    shapeFlag: i.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: e && i.type !== et ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: i.dynamicProps,
    dynamicChildren: i.dynamicChildren,
    appContext: i.appContext,
    dirs: i.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: i.component,
    suspense: i.suspense,
    ssContent: i.ssContent && ji(i.ssContent),
    ssFallback: i.ssFallback && ji(i.ssFallback),
    placeholder: i.placeholder,
    el: i.el,
    anchor: i.anchor,
    ctx: i.ctx,
    ce: i.ce
  };
  return a && n && ih(
    h,
    a.clone(h)
  ), h;
}
function nm(i) {
  const e = ji(i);
  return q(i.children) && (e.children = i.children.map(nm)), e;
}
function ch(i = " ", e = 0) {
  return yt(yr, null, i, e);
}
function Xi(i = "", e = !1) {
  return e ? (de(), em(Rt, null, i)) : yt(Rt, null, i);
}
function Xt(i) {
  return i == null || typeof i == "boolean" ? yt(Rt) : q(i) ? yt(
    et,
    null,
    // #3666, avoid reference pollution when reusing vnode
    i.slice()
  ) : bl(i) ? Ei(i) : yt(yr, null, String(i));
}
function Ei(i) {
  return i.el === null && i.patchFlag !== -1 || i.memo ? i : ji(i);
}
function hh(i, e) {
  let t = 0;
  const { shapeFlag: n } = i;
  if (e == null)
    e = null;
  else if (q(e))
    t = 16;
  else if (typeof e == "object")
    if (n & 65) {
      const s = e.default;
      s && (s._c && (s._d = !1), hh(i, s()), s._c && (s._d = !0));
      return;
    } else {
      t = 32;
      const s = e._;
      !s && !qp(e) ? e._ctx = ut : s === 3 && ut && (ut.slots._ === 1 ? e._ = 1 : (e._ = 2, i.patchFlag |= 1024));
    }
  else K(e) ? (e = { default: e, _ctx: ut }, t = 32) : (e = String(e), n & 64 ? (t = 16, e = [ch(e)]) : t = 8);
  i.children = e, i.shapeFlag |= t;
}
function wy(...i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = i[t];
    for (const s in n)
      if (s === "class")
        e.class !== n.class && (e.class = Hc([e.class, n.class]));
      else if (s === "style")
        e.style = qc([e.style, n.style]);
      else if (dr(s)) {
        const r = e[s], o = n[s];
        o && r !== o && !(q(r) && r.includes(o)) ? e[s] = r ? [].concat(r, o) : o : o == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Us(s) && (e[s] = o);
      } else s !== "" && (e[s] = n[s]);
  }
  return e;
}
function ri(i, e, t, n = null) {
  Si(i, e, 7, [
    t,
    n
  ]);
}
const Py = Vp();
let ky = 0;
function Cy(i, e, t) {
  const n = i.type, s = (e ? e.appContext : i.appContext) || Py, r = {
    uid: ky++,
    vnode: i,
    type: n,
    parent: e,
    appContext: s,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new w0(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: e ? e.provides : Object.create(s.provides),
    ids: e ? e.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Up(n, s),
    emitsOptions: Lp(n, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: we,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: we,
    data: we,
    props: we,
    attrs: we,
    slots: we,
    refs: we,
    setupState: we,
    setupContext: null,
    // suspense related
    suspense: t,
    suspenseId: t ? t.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return process.env.NODE_ENV !== "production" ? r.ctx = Ib(r) : r.ctx = { _: r }, r.root = e ? e.root : r, r.emit = jb.bind(null, r), i.ce && i.ce(r), r;
}
let We = null;
const sm = () => We || ut;
let Do, Xa;
{
  const i = mr(), e = (t, n) => {
    let s;
    return (s = i[t]) || (s = i[t] = []), s.push(n), (r) => {
      s.length > 1 ? s.forEach((o) => o(r)) : s[0](r);
    };
  };
  Do = e(
    "__VUE_INSTANCE_SETTERS__",
    (t) => We = t
  ), Xa = e(
    "__VUE_SSR_SETTERS__",
    (t) => Ks = t
  );
}
const xr = (i) => {
  const e = We;
  return Do(i), i.scope.on(), () => {
    i.scope.off(), Do(e);
  };
}, Af = () => {
  We && We.scope.off(), Do(null);
}, Ey = /* @__PURE__ */ Mi("slot,component");
function Wa(i, { isNativeTag: e }) {
  (Ey(i) || e(i)) && M(
    "Do not use built-in or reserved HTML elements as component id: " + i
  );
}
function rm(i) {
  return i.vnode.shapeFlag & 4;
}
let Ks = !1;
function Ty(i, e = !1, t = !1) {
  e && Xa(e);
  const { props: n, children: s } = i.vnode, r = rm(i);
  ty(i, n, r, e), uy(i, s, t || e);
  const o = r ? Ay(i, e) : void 0;
  return e && Xa(!1), o;
}
function Ay(i, e) {
  const t = i.type;
  if (process.env.NODE_ENV !== "production") {
    if (t.name && Wa(t.name, i.appContext.config), t.components) {
      const s = Object.keys(t.components);
      for (let r = 0; r < s.length; r++)
        Wa(s[r], i.appContext.config);
    }
    if (t.directives) {
      const s = Object.keys(t.directives);
      for (let r = 0; r < s.length; r++)
        Tp(s[r]);
    }
    t.compilerOptions && $y() && M(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  i.accessCache = /* @__PURE__ */ Object.create(null), i.proxy = new Proxy(i.ctx, Mp), process.env.NODE_ENV !== "production" && Vb(i);
  const { setup: n } = t;
  if (n) {
    jt();
    const s = i.setupContext = n.length > 1 ? Ny(i) : null, r = xr(i), o = us(
      n,
      i,
      0,
      [
        process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Oi(i.props) : i.props,
        s
      ]
    ), l = Xc(o);
    if (Yt(), r(), (l || i.sp) && !Is(i) && Dp(i), l) {
      if (o.then(Af, Af), e)
        return o.then((a) => {
          $f(i, a, e);
        }).catch((a) => {
          Or(a, i, 0);
        });
      if (i.asyncDep = o, process.env.NODE_ENV !== "production" && !i.suspense) {
        const a = vr(i, t);
        M(
          `Component <${a}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      $f(i, o, e);
  } else
    om(i, e);
}
function $f(i, e, t) {
  K(e) ? i.type.__ssrInlineRender ? i.ssrRender = e : i.render = e : ge(e) ? (process.env.NODE_ENV !== "production" && bl(e) && M(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (i.devtoolsRawSetupState = e), i.setupState = Op(e), process.env.NODE_ENV !== "production" && Lb(i)) : process.env.NODE_ENV !== "production" && e !== void 0 && M(
    `setup() should return an object. Received: ${e === null ? "null" : typeof e}`
  ), om(i, t);
}
const $y = () => !0;
function om(i, e, t) {
  const n = i.type;
  i.render || (i.render = n.render || He);
  {
    const s = xr(i);
    jt();
    try {
      Xb(i);
    } finally {
      Yt(), s();
    }
  }
  process.env.NODE_ENV !== "production" && !n.render && i.render === He && !e && (n.template ? M(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : M("Component is missing template or render function: ", n));
}
const Df = process.env.NODE_ENV !== "production" ? {
  get(i, e) {
    return Ao(), qe(i, "get", ""), i[e];
  },
  set() {
    return M("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return M("setupContext.attrs is readonly."), !1;
  }
} : {
  get(i, e) {
    return qe(i, "get", ""), i[e];
  }
};
function Dy(i) {
  return new Proxy(i.slots, {
    get(e, t) {
      return qe(i, "get", "$slots"), e[t];
    }
  });
}
function Ny(i) {
  const e = (t) => {
    if (process.env.NODE_ENV !== "production" && (i.exposed && M("expose() should be called only once per setup()."), t != null)) {
      let n = typeof t;
      n === "object" && (q(t) ? n = "array" : /* @__PURE__ */ Xe(t) && (n = "ref")), n !== "object" && M(
        `expose() should be passed a plain object, received ${n}.`
      );
    }
    i.exposed = t || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let t, n;
    return Object.freeze({
      get attrs() {
        return t || (t = new Proxy(i.attrs, Df));
      },
      get slots() {
        return n || (n = Dy(i));
      },
      get emit() {
        return (s, ...r) => i.emit(s, ...r);
      },
      expose: e
    });
  } else
    return {
      attrs: new Proxy(i.attrs, Df),
      slots: i.slots,
      emit: i.emit,
      expose: e
    };
}
function yl(i) {
  return i.exposed ? i.exposeProxy || (i.exposeProxy = new Proxy(Op(q0(i.exposed)), {
    get(e, t) {
      if (t in e)
        return e[t];
      if (t in xn)
        return xn[t](i);
    },
    has(e, t) {
      return t in e || t in xn;
    }
  })) : i.proxy;
}
const Ry = /(?:^|[-_])\w/g, _y = (i) => i.replace(Ry, (e) => e.toUpperCase()).replace(/[-_]/g, "");
function lm(i, e = !0) {
  return K(i) ? i.displayName || i.name : i.name || e && i.__name;
}
function vr(i, e, t = !1) {
  let n = lm(e);
  if (!n && e.__file) {
    const s = e.__file.match(/([^/\\]+)\.\w+$/);
    s && (n = s[1]);
  }
  if (!n && i) {
    const s = (r) => {
      for (const o in r)
        if (r[o] === e)
          return o;
    };
    n = s(i.components) || i.parent && s(
      i.parent.type.components
    ) || s(i.appContext.components);
  }
  return n ? _y(n) : t ? "App" : "Anonymous";
}
function am(i) {
  return K(i) && "__vccOpts" in i;
}
const Gn = (i, e) => {
  const t = /* @__PURE__ */ j0(i, e, Ks);
  if (process.env.NODE_ENV !== "production") {
    const n = sm();
    n && n.appContext.config.warnRecursiveComputed && (t._warnRecursive = !0);
  }
  return t;
};
function My() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const i = { style: "color:#3ba776" }, e = { style: "color:#1677ff" }, t = { style: "color:#f5222d" }, n = { style: "color:#eb2f96" }, s = {
    __vue_custom_formatter: !0,
    header(f) {
      if (!ge(f))
        return null;
      if (f.__isVue)
        return ["div", i, "VueInstance"];
      if (/* @__PURE__ */ Xe(f)) {
        jt();
        const u = f.value;
        return Yt(), [
          "div",
          {},
          ["span", i, h(f)],
          "<",
          l(u),
          ">"
        ];
      } else {
        if (/* @__PURE__ */ Gi(f))
          return [
            "div",
            {},
            ["span", i, /* @__PURE__ */ dt(f) ? "ShallowReactive" : "Reactive"],
            "<",
            l(f),
            `>${/* @__PURE__ */ Kt(f) ? " (readonly)" : ""}`
          ];
        if (/* @__PURE__ */ Kt(f))
          return [
            "div",
            {},
            ["span", i, /* @__PURE__ */ dt(f) ? "ShallowReadonly" : "Readonly"],
            "<",
            l(f),
            ">"
          ];
      }
      return null;
    },
    hasBody(f) {
      return f && f.__isVue;
    },
    body(f) {
      if (f && f.__isVue)
        return [
          "div",
          {},
          ...r(f.$)
        ];
    }
  };
  function r(f) {
    const u = [];
    f.type.props && f.props && u.push(o("props", /* @__PURE__ */ ne(f.props))), f.setupState !== we && u.push(o("setup", f.setupState)), f.data !== we && u.push(o("data", /* @__PURE__ */ ne(f.data)));
    const d = a(f, "computed");
    d && u.push(o("computed", d));
    const p = a(f, "inject");
    return p && u.push(o("injected", p)), u.push([
      "div",
      {},
      [
        "span",
        {
          style: n.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: f }]
    ]), u;
  }
  function o(f, u) {
    return u = De({}, u), Object.keys(u).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        f
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(u).map((d) => [
          "div",
          {},
          ["span", n, d + ": "],
          l(u[d], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(f, u = !0) {
    return typeof f == "number" ? ["span", e, f] : typeof f == "string" ? ["span", t, JSON.stringify(f)] : typeof f == "boolean" ? ["span", n, f] : ge(f) ? ["object", { object: u ? /* @__PURE__ */ ne(f) : f }] : ["span", t, String(f)];
  }
  function a(f, u) {
    const d = f.type;
    if (K(d))
      return;
    const p = {};
    for (const m in f.ctx)
      c(d, m, u) && (p[m] = f.ctx[m]);
    return p;
  }
  function c(f, u, d) {
    const p = f[d];
    if (q(p) && p.includes(u) || ge(p) && u in p || f.extends && c(f.extends, u, d) || f.mixins && f.mixins.some((m) => c(m, u, d)))
      return !0;
  }
  function h(f) {
    return /* @__PURE__ */ dt(f) ? "ShallowRef" : f.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
const Nf = "3.5.34", _t = process.env.NODE_ENV !== "production" ? M : He;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Fa;
const Rf = typeof window < "u" && window.trustedTypes;
if (Rf)
  try {
    Fa = /* @__PURE__ */ Rf.createPolicy("vue", {
      createHTML: (i) => i
    });
  } catch (i) {
    process.env.NODE_ENV !== "production" && _t(`Error creating trusted types policy: ${i}`);
  }
const cm = Fa ? (i) => Fa.createHTML(i) : (i) => i, Qy = "http://www.w3.org/2000/svg", Iy = "http://www.w3.org/1998/Math/MathML", ki = typeof document < "u" ? document : null, _f = ki && /* @__PURE__ */ ki.createElement("template"), Vy = {
  insert: (i, e, t) => {
    e.insertBefore(i, t || null);
  },
  remove: (i) => {
    const e = i.parentNode;
    e && e.removeChild(i);
  },
  createElement: (i, e, t, n) => {
    const s = e === "svg" ? ki.createElementNS(Qy, i) : e === "mathml" ? ki.createElementNS(Iy, i) : t ? ki.createElement(i, { is: t }) : ki.createElement(i);
    return i === "select" && n && n.multiple != null && s.setAttribute("multiple", n.multiple), s;
  },
  createText: (i) => ki.createTextNode(i),
  createComment: (i) => ki.createComment(i),
  setText: (i, e) => {
    i.nodeValue = e;
  },
  setElementText: (i, e) => {
    i.textContent = e;
  },
  parentNode: (i) => i.parentNode,
  nextSibling: (i) => i.nextSibling,
  querySelector: (i) => ki.querySelector(i),
  setScopeId(i, e) {
    i.setAttribute(e, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(i, e, t, n, s, r) {
    const o = t ? t.previousSibling : e.lastChild;
    if (s && (s === r || s.nextSibling))
      for (; e.insertBefore(s.cloneNode(!0), t), !(s === r || !(s = s.nextSibling)); )
        ;
    else {
      _f.innerHTML = cm(
        n === "svg" ? `<svg>${i}</svg>` : n === "mathml" ? `<math>${i}</math>` : i
      );
      const l = _f.content;
      if (n === "svg" || n === "mathml") {
        const a = l.firstChild;
        for (; a.firstChild; )
          l.appendChild(a.firstChild);
        l.removeChild(a);
      }
      e.insertBefore(l, t);
    }
    return [
      // first
      o ? o.nextSibling : e.firstChild,
      // last
      t ? t.previousSibling : e.lastChild
    ];
  }
}, Ly = /* @__PURE__ */ Symbol("_vtc");
function By(i, e, t) {
  const n = i[Ly];
  n && (e = (e ? [e, ...n] : [...n]).join(" ")), e == null ? i.removeAttribute("class") : t ? i.setAttribute("class", e) : i.className = e;
}
const Mf = /* @__PURE__ */ Symbol("_vod"), Xy = /* @__PURE__ */ Symbol("_vsh"), Wy = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Fy = /(?:^|;)\s*display\s*:/;
function qy(i, e, t) {
  const n = i.style, s = $e(t);
  let r = !1;
  if (t && !s) {
    if (e)
      if ($e(e))
        for (const o of e.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          t[l] == null && Ts(n, l, "");
        }
      else
        for (const o in e)
          t[o] == null && Ts(n, o, "");
    for (const o in t) {
      o === "display" && (r = !0);
      const l = t[o];
      l != null ? Gy(
        i,
        o,
        !$e(e) && e ? e[o] : void 0,
        l
      ) || Ts(n, o, l) : Ts(n, o, "");
    }
  } else if (s) {
    if (e !== t) {
      const o = n[Wy];
      o && (t += ";" + o), n.cssText = t, r = Fy.test(t);
    }
  } else e && i.removeAttribute("style");
  Mf in i && (i[Mf] = r ? n.display : "", i[Xy] && (n.display = "none"));
}
const Hy = /[^\\];\s*$/, Qf = /\s*!important$/;
function Ts(i, e, t) {
  if (q(t))
    t.forEach((n) => Ts(i, e, n));
  else if (t == null && (t = ""), process.env.NODE_ENV !== "production" && Hy.test(t) && _t(
    `Unexpected semicolon at the end of '${e}' style value: '${t}'`
  ), e.startsWith("--"))
    i.setProperty(e, t);
  else {
    const n = Uy(i, e);
    Qf.test(t) ? i.setProperty(
      At(n),
      t.replace(Qf, ""),
      "important"
    ) : i[n] = t;
  }
}
const If = ["Webkit", "Moz", "ms"], Ul = {};
function Uy(i, e) {
  const t = Ul[e];
  if (t)
    return t;
  let n = it(e);
  if (n !== "filter" && n in i)
    return Ul[e] = n;
  n = hl(n);
  for (let s = 0; s < If.length; s++) {
    const r = If[s] + n;
    if (r in i)
      return Ul[e] = r;
  }
  return e;
}
function Gy(i, e, t, n) {
  return i.tagName === "TEXTAREA" && (e === "width" || e === "height") && $e(n) && t === n;
}
const Vf = "http://www.w3.org/1999/xlink";
function Lf(i, e, t, n, s, r = x0(e)) {
  n && e.startsWith("xlink:") ? t == null ? i.removeAttributeNS(Vf, e.slice(6, e.length)) : i.setAttributeNS(Vf, e, t) : t == null || r && !Zd(t) ? i.removeAttribute(e) : i.setAttribute(
    e,
    r ? "" : Gt(t) ? String(t) : t
  );
}
function Bf(i, e, t, n, s) {
  if (e === "innerHTML" || e === "textContent") {
    t != null && (i[e] = e === "innerHTML" ? cm(t) : t);
    return;
  }
  const r = i.tagName;
  if (e === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const l = r === "OPTION" ? i.getAttribute("value") || "" : i.value, a = t == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      i.type === "checkbox" ? "on" : ""
    ) : String(t);
    (l !== a || !("_value" in i)) && (i.value = a), t == null && i.removeAttribute(e), i._value = t;
    return;
  }
  let o = !1;
  if (t === "" || t == null) {
    const l = typeof i[e];
    l === "boolean" ? t = Zd(t) : t == null && l === "string" ? (t = "", o = !0) : l === "number" && (t = 0, o = !0);
  }
  try {
    i[e] = t;
  } catch (l) {
    process.env.NODE_ENV !== "production" && !o && _t(
      `Failed setting prop "${e}" on <${r.toLowerCase()}>: value ${t} is invalid.`,
      l
    );
  }
  o && i.removeAttribute(s || e);
}
function fn(i, e, t, n) {
  i.addEventListener(e, t, n);
}
function zy(i, e, t, n) {
  i.removeEventListener(e, t, n);
}
const Xf = /* @__PURE__ */ Symbol("_vei");
function jy(i, e, t, n, s = null) {
  const r = i[Xf] || (i[Xf] = {}), o = r[e];
  if (n && o)
    o.value = process.env.NODE_ENV !== "production" ? Ff(n, e) : n;
  else {
    const [l, a] = Yy(e);
    if (n) {
      const c = r[e] = Jy(
        process.env.NODE_ENV !== "production" ? Ff(n, e) : n,
        s
      );
      fn(i, l, c, a);
    } else o && (zy(i, l, o, a), r[e] = void 0);
  }
}
const Wf = /(?:Once|Passive|Capture)$/;
function Yy(i) {
  let e;
  if (Wf.test(i)) {
    e = {};
    let n;
    for (; n = i.match(Wf); )
      i = i.slice(0, i.length - n[0].length), e[n[0].toLowerCase()] = !0;
  }
  return [i[2] === ":" ? i.slice(3) : At(i.slice(2)), e];
}
let Gl = 0;
const Ky = /* @__PURE__ */ Promise.resolve(), Zy = () => Gl || (Ky.then(() => Gl = 0), Gl = Date.now());
function Jy(i, e) {
  const t = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= t.attached)
      return;
    Si(
      ex(n, t.value),
      e,
      5,
      [n]
    );
  };
  return t.value = i, t.attached = Zy(), t;
}
function Ff(i, e) {
  return K(i) || q(i) ? i : (_t(
    `Wrong type passed as event handler to ${e} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof i}.`
  ), He);
}
function ex(i, e) {
  if (q(e)) {
    const t = i.stopImmediatePropagation;
    return i.stopImmediatePropagation = () => {
      t.call(i), i._stopped = !0;
    }, e.map(
      (n) => (s) => !s._stopped && n && n(s)
    );
  } else
    return e;
}
const qf = (i) => i.charCodeAt(0) === 111 && i.charCodeAt(1) === 110 && // lowercase letter
i.charCodeAt(2) > 96 && i.charCodeAt(2) < 123, tx = (i, e, t, n, s, r) => {
  const o = s === "svg";
  e === "class" ? By(i, n, o) : e === "style" ? qy(i, t, n) : dr(e) ? Us(e) || jy(i, e, t, n, r) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : ix(i, e, n, o)) ? (Bf(i, e, n), !i.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && Lf(i, e, n, o, r, e !== "value")) : /* #11081 force set props for possible async custom element */ i._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (nx(i, e) || // @ts-expect-error _def is private
  i._def.__asyncLoader && (/[A-Z]/.test(e) || !$e(n))) ? Bf(i, it(e), n, r, e) : (e === "true-value" ? i._trueValue = n : e === "false-value" && (i._falseValue = n), Lf(i, e, n, o));
};
function ix(i, e, t, n) {
  if (n)
    return !!(e === "innerHTML" || e === "textContent" || e in i && qf(e) && K(t));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "autocorrect" || e === "sandbox" && i.tagName === "IFRAME" || e === "form" || e === "list" && i.tagName === "INPUT" || e === "type" && i.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const s = i.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return qf(e) && $e(t) ? !1 : e in i;
}
function nx(i, e) {
  const t = (
    // @ts-expect-error _def is private
    i._def.props
  );
  if (!t)
    return !1;
  const n = it(e);
  return Array.isArray(t) ? t.some((s) => it(s) === n) : Object.keys(t).some((s) => it(s) === n);
}
const Hf = {};
// @__NO_SIDE_EFFECTS__
function sx(i, e, t) {
  let n = /* @__PURE__ */ kb(i, e);
  al(n) && (n = De({}, n, e));
  class s extends fh {
    constructor(o) {
      super(n, o, t);
    }
  }
  return s.def = n, s;
}
const rx = typeof HTMLElement < "u" ? HTMLElement : class {
};
class fh extends rx {
  constructor(e, t = {}, n = Zf) {
    super(), this._def = e, this._props = t, this._createApp = n, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._styleAnchors = /* @__PURE__ */ new WeakMap(), this._ob = null, this.shadowRoot && n !== Zf ? this._root = this.shadowRoot : (process.env.NODE_ENV !== "production" && this.shadowRoot && _t(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), e.shadowRoot !== !1 ? (this.attachShadow(
      De({}, e.shadowRootOptions, {
        mode: "open"
      })
    ), this._root = this.shadowRoot) : this._root = this);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let e = this;
    for (; e = e && // #12479 should check assignedSlot first to get correct parent
    (e.assignedSlot || e.parentNode || e.host); )
      if (e instanceof fh) {
        this._parent = e;
        break;
      }
    this._instance || (this._resolved ? this._mount(this._def) : e && e._pendingResolve ? this._pendingResolve = e._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(e = this._parent) {
    e && (this._instance.parent = e._instance, this._inheritParentContext(e));
  }
  _inheritParentContext(e = this._parent) {
    e && this._app && Object.setPrototypeOf(
      this._app._context.provides,
      e._instance.provides
    );
  }
  disconnectedCallback() {
    this._connected = !1, Zc(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null, this._teleportTargets && (this._teleportTargets.clear(), this._teleportTargets = void 0));
    });
  }
  _processMutations(e) {
    for (const t of e)
      this._setAttr(t.attributeName);
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let n = 0; n < this.attributes.length; n++)
      this._setAttr(this.attributes[n].name);
    this._ob = new MutationObserver(this._processMutations.bind(this)), this._ob.observe(this, { attributes: !0 });
    const e = (n, s = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: r, styles: o } = n;
      let l;
      if (r && !q(r))
        for (const a in r) {
          const c = r[a];
          (c === Number || c && c.type === Number) && (a in this._props && (this._props[a] = of(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[it(a)] = !0);
        }
      this._numberProps = l, this._resolveProps(n), this.shadowRoot ? this._applyStyles(o) : process.env.NODE_ENV !== "production" && o && _t(
        "Custom element style injection is not supported when using shadowRoot: false"
      ), this._mount(n);
    }, t = this._def.__asyncLoader;
    t ? this._pendingResolve = t().then((n) => {
      n.configureApp = this._def.configureApp, e(this._def = n, !0);
    }) : e(this._def);
  }
  _mount(e) {
    process.env.NODE_ENV !== "production" && !e.name && (e.name = "VueElement"), this._app = this._createApp(e), this._inheritParentContext(), e.configureApp && e.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const t = this._instance && this._instance.exposed;
    if (t)
      for (const n in t)
        ue(this, n) ? process.env.NODE_ENV !== "production" && _t(`Exposed property "${n}" already exists on custom element.`) : Object.defineProperty(this, n, {
          // unwrap ref to be consistent with public instance behavior
          get: () => Et(t[n])
        });
  }
  _resolveProps(e) {
    const { props: t } = e, n = q(t) ? t : Object.keys(t || {});
    for (const s of Object.keys(this))
      s[0] !== "_" && n.includes(s) && this._setProp(s, this[s]);
    for (const s of n.map(it))
      Object.defineProperty(this, s, {
        get() {
          return this._getProp(s);
        },
        set(r) {
          this._setProp(s, r, !0, !this._patching);
        }
      });
  }
  _setAttr(e) {
    if (e.startsWith("data-v-")) return;
    const t = this.hasAttribute(e);
    let n = t ? this.getAttribute(e) : Hf;
    const s = it(e);
    t && this._numberProps && this._numberProps[s] && (n = of(n)), this._setProp(s, n, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(e) {
    return this._props[e];
  }
  /**
   * @internal
   */
  _setProp(e, t, n = !0, s = !1) {
    if (t !== this._props[e] && (this._dirty = !0, t === Hf ? delete this._props[e] : (this._props[e] = t, e === "key" && this._app && (this._app._ceVNode.key = t)), s && this._instance && this._update(), n)) {
      const r = this._ob;
      r && (this._processMutations(r.takeRecords()), r.disconnect()), t === !0 ? this.setAttribute(At(e), "") : typeof t == "string" || typeof t == "number" ? this.setAttribute(At(e), t + "") : t || this.removeAttribute(At(e)), r && r.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const e = this._createVNode();
    this._app && (e.appContext = this._app._context), fx(e, this._root);
  }
  _createVNode() {
    const e = {};
    this.shadowRoot || (e.onVnodeMounted = e.onVnodeUpdated = this._renderSlots.bind(this));
    const t = yt(this._def, De(e, this._props));
    return this._instance || (t.ce = (n) => {
      this._instance = n, n.ce = this, n.isCE = !0, process.env.NODE_ENV !== "production" && (n.ceReload = (r) => {
        this._styles && (this._styles.forEach((o) => this._root.removeChild(o)), this._styles.length = 0), this._styleAnchors.delete(this._def), this._applyStyles(r), this._instance = null, this._update();
      });
      const s = (r, o) => {
        this.dispatchEvent(
          new CustomEvent(
            r,
            al(o[0]) ? De({ detail: o }, o[0]) : { detail: o }
          )
        );
      };
      n.emit = (r, ...o) => {
        s(r, o), At(r) !== r && s(At(r), o);
      }, this._setParent();
    }), t;
  }
  _applyStyles(e, t, n) {
    if (!e) return;
    if (t) {
      if (t === this._def || this._styleChildren.has(t))
        return;
      this._styleChildren.add(t);
    }
    const s = this._nonce, r = this.shadowRoot, o = n ? this._getStyleAnchor(n) || this._getStyleAnchor(this._def) : this._getRootStyleInsertionAnchor(r);
    let l = null;
    for (let a = e.length - 1; a >= 0; a--) {
      const c = document.createElement("style");
      if (s && c.setAttribute("nonce", s), c.textContent = e[a], r.insertBefore(c, l || o), l = c, a === 0 && (n || this._styleAnchors.set(this._def, c), t && this._styleAnchors.set(t, c)), process.env.NODE_ENV !== "production")
        if (t) {
          if (t.__hmrId) {
            this._childStyles || (this._childStyles = /* @__PURE__ */ new Map());
            let h = this._childStyles.get(t.__hmrId);
            h || this._childStyles.set(t.__hmrId, h = []), h.push(c);
          }
        } else
          (this._styles || (this._styles = [])).push(c);
    }
  }
  _getStyleAnchor(e) {
    if (!e)
      return null;
    const t = this._styleAnchors.get(e);
    return t && t.parentNode === this.shadowRoot ? t : (t && this._styleAnchors.delete(e), null);
  }
  _getRootStyleInsertionAnchor(e) {
    for (let t = 0; t < e.childNodes.length; t++) {
      const n = e.childNodes[t];
      if (!(n instanceof HTMLStyleElement))
        return n;
    }
    return null;
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const e = this._slots = {};
    let t;
    for (; t = this.firstChild; ) {
      const n = t.nodeType === 1 && t.getAttribute("slot") || "default";
      (e[n] || (e[n] = [])).push(t), this.removeChild(t);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const e = this._getSlots(), t = this._instance.type.__scopeId;
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = s.getAttribute("name") || "default", o = this._slots[r], l = s.parentNode;
      if (o)
        for (const a of o) {
          if (t && a.nodeType === 1) {
            const c = t + "-s", h = document.createTreeWalker(a, 1);
            a.setAttribute(c, "");
            let f;
            for (; f = h.nextNode(); )
              f.setAttribute(c, "");
          }
          l.insertBefore(a, s);
        }
      else
        for (; s.firstChild; ) l.insertBefore(s.firstChild, s);
      l.removeChild(s);
    }
  }
  /**
   * @internal
   */
  _getSlots() {
    const e = [this];
    this._teleportTargets && e.push(...this._teleportTargets);
    const t = /* @__PURE__ */ new Set();
    for (const n of e) {
      const s = n.querySelectorAll("slot");
      for (let r = 0; r < s.length; r++)
        t.add(s[r]);
    }
    return Array.from(t);
  }
  /**
   * @internal
   */
  _injectChildStyle(e, t) {
    this._applyStyles(e.styles, e, t);
  }
  /**
   * @internal
   */
  _beginPatch() {
    this._patching = !0, this._dirty = !1;
  }
  /**
   * @internal
   */
  _endPatch() {
    this._patching = !1, this._dirty && this._instance && this._update();
  }
  /**
   * @internal
   */
  _hasShadowRoot() {
    return this._def.shadowRoot !== !1;
  }
  /**
   * @internal
   */
  _removeChildStyle(e) {
    if (process.env.NODE_ENV !== "production" && (this._styleChildren.delete(e), this._styleAnchors.delete(e), this._childStyles && e.__hmrId)) {
      const t = this._childStyles.get(e.__hmrId);
      t && (t.forEach((n) => this._root.removeChild(n)), t.length = 0);
    }
  }
}
const No = (i) => {
  const e = i.props["onUpdate:modelValue"] || !1;
  return q(e) ? (t) => _n(e, t) : e;
};
function ox(i) {
  i.target.composing = !0;
}
function Uf(i) {
  const e = i.target;
  e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")));
}
const zn = /* @__PURE__ */ Symbol("_assign");
function Gf(i, e, t) {
  return e && (i = i.trim()), t && (i = fl(i)), i;
}
const zf = {
  created(i, { modifiers: { lazy: e, trim: t, number: n } }, s) {
    i[zn] = No(s);
    const r = n || s.props && s.props.type === "number";
    fn(i, e ? "change" : "input", (o) => {
      o.target.composing || i[zn](Gf(i.value, t, r));
    }), (t || r) && fn(i, "change", () => {
      i.value = Gf(i.value, t, r);
    }), e || (fn(i, "compositionstart", ox), fn(i, "compositionend", Uf), fn(i, "change", Uf));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(i, { value: e }) {
    i.value = e ?? "";
  },
  beforeUpdate(i, { value: e, oldValue: t, modifiers: { lazy: n, trim: s, number: r } }, o) {
    if (i[zn] = No(o), i.composing) return;
    const l = (r || i.type === "number") && !/^0\d/.test(i.value) ? fl(i.value) : i.value, a = e ?? "";
    if (l === a)
      return;
    const c = i.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === i && i.type !== "range" && (n && e === t || s && i.value.trim() === a) || (i.value = a);
  }
}, jf = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(i, { value: e, modifiers: { number: t } }, n) {
    const s = ll(e);
    fn(i, "change", () => {
      const r = Array.prototype.filter.call(i.options, (o) => o.selected).map(
        (o) => t ? fl(Ro(o)) : Ro(o)
      );
      i[zn](
        i.multiple ? s ? new Set(r) : r : r[0]
      ), i._assigning = !0, Zc(() => {
        i._assigning = !1;
      });
    }), i[zn] = No(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(i, { value: e }) {
    Yf(i, e);
  },
  beforeUpdate(i, e, t) {
    i[zn] = No(t);
  },
  updated(i, { value: e }) {
    i._assigning || Yf(i, e);
  }
};
function Yf(i, e) {
  const t = i.multiple, n = q(e);
  if (t && !n && !ll(e)) {
    process.env.NODE_ENV !== "production" && _t(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(e).slice(8, -1)}.`
    );
    return;
  }
  for (let s = 0, r = i.options.length; s < r; s++) {
    const o = i.options[s], l = Ro(o);
    if (t)
      if (n) {
        const a = typeof l;
        a === "string" || a === "number" ? o.selected = e.some((c) => String(c) === String(l)) : o.selected = S0(e, l) > -1;
      } else
        o.selected = e.has(l);
    else if (gr(Ro(o), e)) {
      i.selectedIndex !== s && (i.selectedIndex = s);
      return;
    }
  }
  !t && i.selectedIndex !== -1 && (i.selectedIndex = -1);
}
function Ro(i) {
  return "_value" in i ? i._value : i.value;
}
const lx = ["ctrl", "shift", "alt", "meta"], ax = {
  stop: (i) => i.stopPropagation(),
  prevent: (i) => i.preventDefault(),
  self: (i) => i.target !== i.currentTarget,
  ctrl: (i) => !i.ctrlKey,
  shift: (i) => !i.shiftKey,
  alt: (i) => !i.altKey,
  meta: (i) => !i.metaKey,
  left: (i) => "button" in i && i.button !== 0,
  middle: (i) => "button" in i && i.button !== 1,
  right: (i) => "button" in i && i.button !== 2,
  exact: (i, e) => lx.some((t) => i[`${t}Key`] && !e.includes(t))
}, cx = (i, e) => {
  if (!i) return i;
  const t = i._withMods || (i._withMods = {}), n = e.join(".");
  return t[n] || (t[n] = (s, ...r) => {
    for (let o = 0; o < e.length; o++) {
      const l = ax[e[o]];
      if (l && l(s, e)) return;
    }
    return i(s, ...r);
  });
}, hx = /* @__PURE__ */ De({ patchProp: tx }, Vy);
let Kf;
function hm() {
  return Kf || (Kf = my(hx));
}
const fx = (...i) => {
  hm().render(...i);
}, Zf = (...i) => {
  const e = hm().createApp(...i);
  process.env.NODE_ENV !== "production" && (dx(e), px(e));
  const { mount: t } = e;
  return e.mount = (n) => {
    const s = mx(n);
    if (!s) return;
    const r = e._component;
    !K(r) && !r.render && !r.template && (r.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const o = t(s, !1, ux(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), o;
  }, e;
};
function ux(i) {
  if (i instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && i instanceof MathMLElement)
    return "mathml";
}
function dx(i) {
  Object.defineProperty(i.config, "isNativeTag", {
    value: (e) => g0(e) || O0(e) || b0(e),
    writable: !1
  });
}
function px(i) {
  {
    const e = i.config.isCustomElement;
    Object.defineProperty(i.config, "isCustomElement", {
      get() {
        return e;
      },
      set() {
        _t(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const t = i.config.compilerOptions, n = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(i.config, "compilerOptions", {
      get() {
        return _t(n), t;
      },
      set() {
        _t(n);
      }
    });
  }
}
function mx(i) {
  if ($e(i)) {
    const e = document.querySelector(i);
    return process.env.NODE_ENV !== "production" && !e && _t(
      `Failed to mount app: mount target selector "${i}" returned null.`
    ), e;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && i instanceof window.ShadowRoot && i.mode === "closed" && _t(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), i;
}
/**
* vue v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function gx() {
  My();
}
process.env.NODE_ENV !== "production" && gx();
function zl(i, e = {}) {
  if (i == null || i === "") return e;
  if (typeof i == "object") return i;
  try {
    return JSON.parse(i);
  } catch {
    return e;
  }
}
function Ox(i) {
  const e = /* @__PURE__ */ Qe([]);
  function t(p) {
    e.value = Object.entries(p).map(([m, g]) => ({
      name: m,
      uri: g,
      active: !0
    }));
  }
  t(i);
  function n(p, m) {
    const g = e.value.find((b) => b.name === p);
    m ? g ? (g.uri = m, g.active = !0) : e.value.push({ name: p, uri: m, active: !0 }) : e.value = e.value.filter((b) => b.name !== p);
  }
  function s(p, m) {
    const g = e.value.find((b) => b.name === p);
    g && (g.active = m);
  }
  function r(p) {
    const m = new Set(p.map((g) => g.name));
    e.value.forEach((g) => {
      g.active = m.has(g.name);
    });
  }
  function o(p) {
    const [m] = c(p);
    return m.split(`
`).filter((x) => /prefix/i.test(x)).map((x) => {
      const S = x.split(/\@?prefix\s+/i);
      if (S.length < 2) return null;
      const C = S[1].match(/^\s*([\w\-]*)\s*:\s*<([^>]*)>\s*\.?\s*$/);
      return C ? { name: C[1], uri: C[2] } : null;
    }).filter(Boolean);
  }
  function l(p, m) {
    if (/\@?prefix\s/i.test(p))
      return o(p);
    if (m) {
      const g = Object.fromEntries(e.value.map((b) => [b.name, b.uri]));
      return m.map((b) => ({ name: b, uri: g[b] })).filter((b) => b.uri);
    }
    return e.value.filter((g) => g.active);
  }
  function a(p) {
    return p.map((m) => `prefix ${m.name}: <${m.uri}>`).join(`
`);
  }
  function c(p) {
    const m = (x) => /(^\s*\@?prefix)|(^\s*#)|(^\s*$)/i.test(x), g = p.split(`
`), b = [];
    for (; g.length && m(g[0]); )
      b.push(g.shift());
    return [b.join(`
`), g.join(`
`)];
  }
  function h(p) {
    return c(p)[1];
  }
  function f(p, m, g, b) {
    const x = b.split(`
`), S = new RegExp(`^prefix +${p}:`);
    let C = !1;
    for (let v = 0; !C && v < x.length; v++)
      C = S.test(x[v]), C && !g && x.splice(v, 1);
    if (!C && g) {
      for (let v = 0; v < x.length; v++)
        if (!/^prefix/i.test(x[v])) {
          x.splice(v, 0, `prefix ${p}: <${m}>`);
          break;
        }
    }
    return x.join(`
`);
  }
  function u() {
    return Object.fromEntries(e.value.map((p) => [p.name, p.uri]));
  }
  async function d(p) {
    const m = await fetch(`https://prefix.cc/${p}.file.json`);
    if (!m.ok) throw new Error(`prefix.cc lookup failed: ${m.status}`);
    return (await m.json())[p] || null;
  }
  return {
    prefixList: e,
    initPrefixes: t,
    addOrUpdatePrefix: n,
    setActive: s,
    syncPrefixButtonState: r,
    assemblePrefixes: l,
    assemblePrefixesFromQuery: o,
    renderPrefixes: a,
    queryLeader: c,
    stripLeader: h,
    updatePrefixDeclaration: f,
    parsedPrefixMap: u,
    lookupPrefixCC: d
  };
}
function bx() {
  const i = /* @__PURE__ */ Qe([]), e = /* @__PURE__ */ Qe(0), t = Gn(() => i.value[e.value] ?? null);
  async function n(l) {
    i.value = l.map((c) => ({ ...c }));
    const a = i.value.filter((c) => c.queryURL && !c.query).map((c) => s(c));
    await Promise.all(a);
  }
  async function s(l) {
    try {
      const a = await fetch(l.queryURL);
      l.query = a.ok ? await a.text() : `Not found: ${l.queryURL}`;
    } catch {
      l.query = `Not found: ${l.queryURL}`;
    }
  }
  function r(l) {
    e.value = l;
  }
  function o(l) {
    return l ? new URLSearchParams(window.location.search).get("query") : null;
  }
  return { examples: i, selectedExampleIndex: e, currentExample: t, initExamples: n, selectExample: r, checkForURLQuery: o };
}
function yx(i, e) {
  let t = e;
  t.startsWith("<") && (t = t.slice(1, -1));
  let n = e;
  for (const [s, r] of Object.entries(i))
    if (t.startsWith(r)) {
      const o = `${s}:${t.slice(r.length)}`;
      o.length < n.length && (n = o);
    }
  return n;
}
function xx(i, e) {
  if (typeof i == "number" || !isNaN(parseFloat(i)))
    return { type: "literal", value: String(parseFloat(i)) };
  const t = i.match(/^"*([^\\^"]*)"*\^\^<*(.*)>*$/m);
  if (t && i.includes("^^"))
    return { type: "typed", value: t[1], datatype: t[2] };
  const n = i.match(/^"(.*)"@([^@]*)$/);
  if (n)
    return { type: "langTagged", value: n[1], lang: n[2] };
  const s = yx(e, i);
  return i.match(/^<https?:/) ? { type: "uri", href: i.slice(1, -1), display: s.startsWith("<") ? s.slice(1, -1) : s } : { type: s === i ? "literal" : "qname", value: s.startsWith("<") ? s.slice(1, -1) : s };
}
function vx(i, e = {}) {
  const t = i.split(`
`).filter((r) => r.trim() !== "");
  if (t.length === 0) return { headers: [], rows: [], count: 0 };
  const n = t.shift().replace(/\?/g, "").split("	"), s = t.map(
    (r) => r.split("	").map((o) => xx(o.trim(), e))
  );
  return { headers: n, rows: s, count: s.length };
}
function Sx(i, e) {
  var s, r;
  if (e === "json") {
    let o, l;
    try {
      typeof i == "string" ? (o = JSON.parse(i), l = i) : (o = i, l = JSON.stringify(i, null, 2));
      const a = ((r = (s = o == null ? void 0 : o.results) == null ? void 0 : s.bindings) == null ? void 0 : r.length) ?? 1;
      return { data: l, mime: "application/json", count: a };
    } catch {
      return { data: String(i), mime: "application/json", count: 1 };
    }
  }
  if (e === "xml") {
    let o = typeof i == "string" ? i : new XMLSerializer().serializeToString(i), l = 1;
    try {
      const c = (typeof i == "string" ? new DOMParser().parseFromString(i, "application/xml") : i).querySelector("results");
      l = c ? c.children.length : 1;
    } catch {
    }
    return { data: o, mime: "application/xml", count: l };
  }
  const n = i.match(/^----/) ? i.split(`
`).length - 5 : 1;
  return { data: String(i), mime: "text/plain", count: n };
}
const wx = {
  tsv: "text/tab-separated-values",
  json: "application/sparql-results+json",
  xml: "application/sparql-results+xml",
  text: "text/plain"
};
function Px() {
  const i = /* @__PURE__ */ Qe(!1), e = /* @__PURE__ */ Qe(null), t = /* @__PURE__ */ Qe(null), n = /* @__PURE__ */ Qe(null), s = /* @__PURE__ */ Qe(null);
  function r(l, a) {
    if (a !== "tsv") return a;
    const c = l.match(/\@?prefix[^]*?\n+([\s\S]*)/), h = c ? c[1] : l;
    return /^\s*(describe|construct)\b/i.test(h.trim()) ? "text" : a;
  }
  async function o(l, a, c, h = {}, f = null) {
    i.value = !0, e.value = null, s.value = null, n.value = null;
    const u = performance.now();
    try {
      let d;
      if (f)
        d = await new Promise((S, C) => {
          f.execute(l, {
            url: a,
            format: c,
            success: (v) => S(typeof v.asText == "function" ? v._val : v),
            error: (v) => C(v)
          });
        });
      else {
        const S = new URLSearchParams({ query: l, output: c }), C = await fetch(a, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: wx[c] || "text/plain"
          },
          body: S
        });
        if (!C.ok) {
          const v = await C.text();
          throw new Error(v || `${C.status} ${C.statusText}`);
        }
        d = await C.text();
      }
      const p = performance.now() - u, m = Math.round(p), g = m % 1e3, b = Math.floor(m / 1e3) % 60, x = Math.floor(m / 6e4);
      if (t.value = `${x} min ${b}.${String(g).padStart(3, "0")} s`, c === "tsv") {
        const S = vx(d, h);
        n.value = S.count, s.value = { kind: "table", ...S };
      } else {
        const S = Sx(d, c);
        n.value = S.count, s.value = { kind: "code", ...S };
      }
    } catch (d) {
      const p = performance.now() - u, m = Math.round(p), g = m % 1e3, b = Math.floor(m / 1e3) % 60, x = Math.floor(m / 6e4);
      t.value = `${x} min ${b}.${String(g).padStart(3, "0")} s`, n.value = 0, e.value = d.message || String(d);
    } finally {
      i.value = !1;
    }
  }
  return { loading: i, error: e, executionTime: t, resultCount: n, result: s, execute: o, checkOutputFormat: r };
}
let qa = [], fm = [];
(() => {
  let i = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((e) => e ? parseInt(e, 36) : 1);
  for (let e = 0, t = 0; e < i.length; e++)
    (e % 2 ? fm : qa).push(t = t + i[e]);
})();
function kx(i) {
  if (i < 768) return !1;
  for (let e = 0, t = qa.length; ; ) {
    let n = e + t >> 1;
    if (i < qa[n]) t = n;
    else if (i >= fm[n]) e = n + 1;
    else return !0;
    if (e == t) return !1;
  }
}
function Jf(i) {
  return i >= 127462 && i <= 127487;
}
const eu = 8205;
function Cx(i, e, t = !0, n = !0) {
  return (t ? um : Ex)(i, e, n);
}
function um(i, e, t) {
  if (e == i.length) return e;
  e && dm(i.charCodeAt(e)) && pm(i.charCodeAt(e - 1)) && e--;
  let n = jl(i, e);
  for (e += tu(n); e < i.length; ) {
    let s = jl(i, e);
    if (n == eu || s == eu || t && kx(s))
      e += tu(s), n = s;
    else if (Jf(s)) {
      let r = 0, o = e - 2;
      for (; o >= 0 && Jf(jl(i, o)); )
        r++, o -= 2;
      if (r % 2 == 0) break;
      e += 2;
    } else
      break;
  }
  return e;
}
function Ex(i, e, t) {
  for (; e > 0; ) {
    let n = um(i, e - 2, t);
    if (n < e) return n;
    e--;
  }
  return 0;
}
function jl(i, e) {
  let t = i.charCodeAt(e);
  if (!pm(t) || e + 1 == i.length) return t;
  let n = i.charCodeAt(e + 1);
  return dm(n) ? (t - 55296 << 10) + (n - 56320) + 65536 : t;
}
function dm(i) {
  return i >= 56320 && i < 57344;
}
function pm(i) {
  return i >= 55296 && i < 56320;
}
function tu(i) {
  return i < 65536 ? 1 : 2;
}
class me {
  /**
  Get the line description around the given position.
  */
  lineAt(e) {
    if (e < 0 || e > this.length)
      throw new RangeError(`Invalid position ${e} in document of length ${this.length}`);
    return this.lineInner(e, !1, 1, 0);
  }
  /**
  Get the description for the given (1-based) line number.
  */
  line(e) {
    if (e < 1 || e > this.lines)
      throw new RangeError(`Invalid line number ${e} in ${this.lines}-line document`);
    return this.lineInner(e, !0, 1, 0);
  }
  /**
  Replace a range of the text with the given content.
  */
  replace(e, t, n) {
    [e, t] = ns(this, e, t);
    let s = [];
    return this.decompose(
      0,
      e,
      s,
      2
      /* Open.To */
    ), n.length && n.decompose(
      0,
      n.length,
      s,
      3
      /* Open.To */
    ), this.decompose(
      t,
      this.length,
      s,
      1
      /* Open.From */
    ), pi.from(s, this.length - (t - e) + n.length);
  }
  /**
  Append another document to this one.
  */
  append(e) {
    return this.replace(this.length, this.length, e);
  }
  /**
  Retrieve the text between the given points.
  */
  slice(e, t = this.length) {
    [e, t] = ns(this, e, t);
    let n = [];
    return this.decompose(e, t, n, 0), pi.from(n, t - e);
  }
  /**
  Test whether this text is equal to another instance.
  */
  eq(e) {
    if (e == this)
      return !0;
    if (e.length != this.length || e.lines != this.lines)
      return !1;
    let t = this.scanIdentical(e, 1), n = this.length - this.scanIdentical(e, -1), s = new Ls(this), r = new Ls(e);
    for (let o = t, l = t; ; ) {
      if (s.next(o), r.next(o), o = 0, s.lineBreak != r.lineBreak || s.done != r.done || s.value != r.value)
        return !1;
      if (l += s.value.length, s.done || l >= n)
        return !0;
    }
  }
  /**
  Iterate over the text. When `dir` is `-1`, iteration happens
  from end to start. This will return lines and the breaks between
  them as separate strings.
  */
  iter(e = 1) {
    return new Ls(this, e);
  }
  /**
  Iterate over a range of the text. When `from` > `to`, the
  iterator will run in reverse.
  */
  iterRange(e, t = this.length) {
    return new mm(this, e, t);
  }
  /**
  Return a cursor that iterates over the given range of lines,
  _without_ returning the line breaks between, and yielding empty
  strings for empty lines.
  
  When `from` and `to` are given, they should be 1-based line numbers.
  */
  iterLines(e, t) {
    let n;
    if (e == null)
      n = this.iter();
    else {
      t == null && (t = this.lines + 1);
      let s = this.line(e).from;
      n = this.iterRange(s, Math.max(s, t == this.lines + 1 ? this.length : t <= 1 ? 0 : this.line(t - 1).to));
    }
    return new gm(n);
  }
  /**
  Return the document as a string, using newline characters to
  separate lines.
  */
  toString() {
    return this.sliceString(0);
  }
  /**
  Convert the document to an array of lines (which can be
  deserialized again via [`Text.of`](https://codemirror.net/6/docs/ref/#state.Text^of)).
  */
  toJSON() {
    let e = [];
    return this.flatten(e), e;
  }
  /**
  @internal
  */
  constructor() {
  }
  /**
  Create a `Text` instance for the given array of lines.
  */
  static of(e) {
    if (e.length == 0)
      throw new RangeError("A document must have at least one line");
    return e.length == 1 && !e[0] ? me.empty : e.length <= 32 ? new Me(e) : pi.from(Me.split(e, []));
  }
}
class Me extends me {
  constructor(e, t = Tx(e)) {
    super(), this.text = e, this.length = t;
  }
  get lines() {
    return this.text.length;
  }
  get children() {
    return null;
  }
  lineInner(e, t, n, s) {
    for (let r = 0; ; r++) {
      let o = this.text[r], l = s + o.length;
      if ((t ? n : l) >= e)
        return new Ax(s, l, n, o);
      s = l + 1, n++;
    }
  }
  decompose(e, t, n, s) {
    let r = e <= 0 && t >= this.length ? this : new Me(iu(this.text, e, t), Math.min(t, this.length) - Math.max(0, e));
    if (s & 1) {
      let o = n.pop(), l = co(r.text, o.text.slice(), 0, r.length);
      if (l.length <= 32)
        n.push(new Me(l, o.length + r.length));
      else {
        let a = l.length >> 1;
        n.push(new Me(l.slice(0, a)), new Me(l.slice(a)));
      }
    } else
      n.push(r);
  }
  replace(e, t, n) {
    if (!(n instanceof Me))
      return super.replace(e, t, n);
    [e, t] = ns(this, e, t);
    let s = co(this.text, co(n.text, iu(this.text, 0, e)), t), r = this.length + n.length - (t - e);
    return s.length <= 32 ? new Me(s, r) : pi.from(Me.split(s, []), r);
  }
  sliceString(e, t = this.length, n = `
`) {
    [e, t] = ns(this, e, t);
    let s = "";
    for (let r = 0, o = 0; r <= t && o < this.text.length; o++) {
      let l = this.text[o], a = r + l.length;
      r > e && o && (s += n), e < a && t > r && (s += l.slice(Math.max(0, e - r), t - r)), r = a + 1;
    }
    return s;
  }
  flatten(e) {
    for (let t of this.text)
      e.push(t);
  }
  scanIdentical() {
    return 0;
  }
  static split(e, t) {
    let n = [], s = -1;
    for (let r of e)
      n.push(r), s += r.length + 1, n.length == 32 && (t.push(new Me(n, s)), n = [], s = -1);
    return s > -1 && t.push(new Me(n, s)), t;
  }
}
class pi extends me {
  constructor(e, t) {
    super(), this.children = e, this.length = t, this.lines = 0;
    for (let n of e)
      this.lines += n.lines;
  }
  lineInner(e, t, n, s) {
    for (let r = 0; ; r++) {
      let o = this.children[r], l = s + o.length, a = n + o.lines - 1;
      if ((t ? a : l) >= e)
        return o.lineInner(e, t, n, s);
      s = l + 1, n = a + 1;
    }
  }
  decompose(e, t, n, s) {
    for (let r = 0, o = 0; o <= t && r < this.children.length; r++) {
      let l = this.children[r], a = o + l.length;
      if (e <= a && t >= o) {
        let c = s & ((o <= e ? 1 : 0) | (a >= t ? 2 : 0));
        o >= e && a <= t && !c ? n.push(l) : l.decompose(e - o, t - o, n, c);
      }
      o = a + 1;
    }
  }
  replace(e, t, n) {
    if ([e, t] = ns(this, e, t), n.lines < this.lines)
      for (let s = 0, r = 0; s < this.children.length; s++) {
        let o = this.children[s], l = r + o.length;
        if (e >= r && t <= l) {
          let a = o.replace(e - r, t - r, n), c = this.lines - o.lines + a.lines;
          if (a.lines < c >> 4 && a.lines > c >> 6) {
            let h = this.children.slice();
            return h[s] = a, new pi(h, this.length - (t - e) + n.length);
          }
          return super.replace(r, l, a);
        }
        r = l + 1;
      }
    return super.replace(e, t, n);
  }
  sliceString(e, t = this.length, n = `
`) {
    [e, t] = ns(this, e, t);
    let s = "";
    for (let r = 0, o = 0; r < this.children.length && o <= t; r++) {
      let l = this.children[r], a = o + l.length;
      o > e && r && (s += n), e < a && t > o && (s += l.sliceString(e - o, t - o, n)), o = a + 1;
    }
    return s;
  }
  flatten(e) {
    for (let t of this.children)
      t.flatten(e);
  }
  scanIdentical(e, t) {
    if (!(e instanceof pi))
      return 0;
    let n = 0, [s, r, o, l] = t > 0 ? [0, 0, this.children.length, e.children.length] : [this.children.length - 1, e.children.length - 1, -1, -1];
    for (; ; s += t, r += t) {
      if (s == o || r == l)
        return n;
      let a = this.children[s], c = e.children[r];
      if (a != c)
        return n + a.scanIdentical(c, t);
      n += a.length + 1;
    }
  }
  static from(e, t = e.reduce((n, s) => n + s.length + 1, -1)) {
    let n = 0;
    for (let d of e)
      n += d.lines;
    if (n < 32) {
      let d = [];
      for (let p of e)
        p.flatten(d);
      return new Me(d, t);
    }
    let s = Math.max(
      32,
      n >> 5
      /* Tree.BranchShift */
    ), r = s << 1, o = s >> 1, l = [], a = 0, c = -1, h = [];
    function f(d) {
      let p;
      if (d.lines > r && d instanceof pi)
        for (let m of d.children)
          f(m);
      else d.lines > o && (a > o || !a) ? (u(), l.push(d)) : d instanceof Me && a && (p = h[h.length - 1]) instanceof Me && d.lines + p.lines <= 32 ? (a += d.lines, c += d.length + 1, h[h.length - 1] = new Me(p.text.concat(d.text), p.length + 1 + d.length)) : (a + d.lines > s && u(), a += d.lines, c += d.length + 1, h.push(d));
    }
    function u() {
      a != 0 && (l.push(h.length == 1 ? h[0] : pi.from(h, c)), c = -1, a = h.length = 0);
    }
    for (let d of e)
      f(d);
    return u(), l.length == 1 ? l[0] : new pi(l, t);
  }
}
me.empty = /* @__PURE__ */ new Me([""], 0);
function Tx(i) {
  let e = -1;
  for (let t of i)
    e += t.length + 1;
  return e;
}
function co(i, e, t = 0, n = 1e9) {
  for (let s = 0, r = 0, o = !0; r < i.length && s <= n; r++) {
    let l = i[r], a = s + l.length;
    a >= t && (a > n && (l = l.slice(0, n - s)), s < t && (l = l.slice(t - s)), o ? (e[e.length - 1] += l, o = !1) : e.push(l)), s = a + 1;
  }
  return e;
}
function iu(i, e, t) {
  return co(i, [""], e, t);
}
class Ls {
  constructor(e, t = 1) {
    this.dir = t, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [e], this.offsets = [t > 0 ? 1 : (e instanceof Me ? e.text.length : e.children.length) << 1];
  }
  nextInner(e, t) {
    for (this.done = this.lineBreak = !1; ; ) {
      let n = this.nodes.length - 1, s = this.nodes[n], r = this.offsets[n], o = r >> 1, l = s instanceof Me ? s.text.length : s.children.length;
      if (o == (t > 0 ? l : 0)) {
        if (n == 0)
          return this.done = !0, this.value = "", this;
        t > 0 && this.offsets[n - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((r & 1) == (t > 0 ? 0 : 1)) {
        if (this.offsets[n] += t, e == 0)
          return this.lineBreak = !0, this.value = `
`, this;
        e--;
      } else if (s instanceof Me) {
        let a = s.text[o + (t < 0 ? -1 : 0)];
        if (this.offsets[n] += t, a.length > Math.max(0, e))
          return this.value = e == 0 ? a : t > 0 ? a.slice(e) : a.slice(0, a.length - e), this;
        e -= a.length;
      } else {
        let a = s.children[o + (t < 0 ? -1 : 0)];
        e > a.length ? (e -= a.length, this.offsets[n] += t) : (t < 0 && this.offsets[n]--, this.nodes.push(a), this.offsets.push(t > 0 ? 1 : (a instanceof Me ? a.text.length : a.children.length) << 1));
      }
    }
  }
  next(e = 0) {
    return e < 0 && (this.nextInner(-e, -this.dir), e = this.value.length), this.nextInner(e, this.dir);
  }
}
class mm {
  constructor(e, t, n) {
    this.value = "", this.done = !1, this.cursor = new Ls(e, t > n ? -1 : 1), this.pos = t > n ? e.length : 0, this.from = Math.min(t, n), this.to = Math.max(t, n);
  }
  nextInner(e, t) {
    if (t < 0 ? this.pos <= this.from : this.pos >= this.to)
      return this.value = "", this.done = !0, this;
    e += Math.max(0, t < 0 ? this.pos - this.to : this.from - this.pos);
    let n = t < 0 ? this.pos - this.from : this.to - this.pos;
    e > n && (e = n), n -= e;
    let { value: s } = this.cursor.next(e);
    return this.pos += (s.length + e) * t, this.value = s.length <= n ? s : t < 0 ? s.slice(s.length - n) : s.slice(0, n), this.done = !this.value, this;
  }
  next(e = 0) {
    return e < 0 ? e = Math.max(e, this.from - this.pos) : e > 0 && (e = Math.min(e, this.to - this.pos)), this.nextInner(e, this.cursor.dir);
  }
  get lineBreak() {
    return this.cursor.lineBreak && this.value != "";
  }
}
class gm {
  constructor(e) {
    this.inner = e, this.afterBreak = !0, this.value = "", this.done = !1;
  }
  next(e = 0) {
    let { done: t, lineBreak: n, value: s } = this.inner.next(e);
    return t && this.afterBreak ? (this.value = "", this.afterBreak = !1) : t ? (this.done = !0, this.value = "") : n ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = s, this.afterBreak = !1), this;
  }
  get lineBreak() {
    return !1;
  }
}
typeof Symbol < "u" && (me.prototype[Symbol.iterator] = function() {
  return this.iter();
}, Ls.prototype[Symbol.iterator] = mm.prototype[Symbol.iterator] = gm.prototype[Symbol.iterator] = function() {
  return this;
});
class Ax {
  /**
  @internal
  */
  constructor(e, t, n, s) {
    this.from = e, this.to = t, this.number = n, this.text = s;
  }
  /**
  The length of the line (not including any line break after it).
  */
  get length() {
    return this.to - this.from;
  }
}
function ns(i, e, t) {
  return e = Math.max(0, Math.min(i.length, e)), [e, Math.max(e, Math.min(i.length, t))];
}
function ze(i, e, t = !0, n = !0) {
  return Cx(i, e, t, n);
}
function $x(i) {
  return i >= 56320 && i < 57344;
}
function Dx(i) {
  return i >= 55296 && i < 56320;
}
function gt(i, e) {
  let t = i.charCodeAt(e);
  if (!Dx(t) || e + 1 == i.length)
    return t;
  let n = i.charCodeAt(e + 1);
  return $x(n) ? (t - 55296 << 10) + (n - 56320) + 65536 : t;
}
function uh(i) {
  return i <= 65535 ? String.fromCharCode(i) : (i -= 65536, String.fromCharCode((i >> 10) + 55296, (i & 1023) + 56320));
}
function mi(i) {
  return i < 65536 ? 1 : 2;
}
const Ha = /\r\n?|\n/;
var ft = /* @__PURE__ */ function(i) {
  return i[i.Simple = 0] = "Simple", i[i.TrackDel = 1] = "TrackDel", i[i.TrackBefore = 2] = "TrackBefore", i[i.TrackAfter = 3] = "TrackAfter", i;
}(ft || (ft = {}));
class vi {
  // Sections are encoded as pairs of integers. The first is the
  // length in the current document, and the second is -1 for
  // unaffected sections, and the length of the replacement content
  // otherwise. So an insertion would be (0, n>0), a deletion (n>0,
  // 0), and a replacement two positive numbers.
  /**
  @internal
  */
  constructor(e) {
    this.sections = e;
  }
  /**
  The length of the document before the change.
  */
  get length() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2)
      e += this.sections[t];
    return e;
  }
  /**
  The length of the document after the change.
  */
  get newLength() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2) {
      let n = this.sections[t + 1];
      e += n < 0 ? this.sections[t] : n;
    }
    return e;
  }
  /**
  False when there are actual changes in this set.
  */
  get empty() {
    return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0;
  }
  /**
  Iterate over the unchanged parts left by these changes. `posA`
  provides the position of the range in the old document, `posB`
  the new position in the changed document.
  */
  iterGaps(e) {
    for (let t = 0, n = 0, s = 0; t < this.sections.length; ) {
      let r = this.sections[t++], o = this.sections[t++];
      o < 0 ? (e(n, s, r), s += r) : s += o, n += r;
    }
  }
  /**
  Iterate over the ranges changed by these changes. (See
  [`ChangeSet.iterChanges`](https://codemirror.net/6/docs/ref/#state.ChangeSet.iterChanges) for a
  variant that also provides you with the inserted text.)
  `fromA`/`toA` provides the extent of the change in the starting
  document, `fromB`/`toB` the extent of the replacement in the
  changed document.
  
  When `individual` is true, adjacent changes (which are kept
  separate for [position mapping](https://codemirror.net/6/docs/ref/#state.ChangeDesc.mapPos)) are
  reported separately.
  */
  iterChangedRanges(e, t = !1) {
    Ua(this, e, t);
  }
  /**
  Get a description of the inverted form of these changes.
  */
  get invertedDesc() {
    let e = [];
    for (let t = 0; t < this.sections.length; ) {
      let n = this.sections[t++], s = this.sections[t++];
      s < 0 ? e.push(n, s) : e.push(s, n);
    }
    return new vi(e);
  }
  /**
  Compute the combined effect of applying another set of changes
  after this one. The length of the document after this set should
  match the length before `other`.
  */
  composeDesc(e) {
    return this.empty ? e : e.empty ? this : Om(this, e);
  }
  /**
  Map this description, which should start with the same document
  as `other`, over another set of changes, so that it can be
  applied after it. When `before` is true, map as if the changes
  in `this` happened before the ones in `other`.
  */
  mapDesc(e, t = !1) {
    return e.empty ? this : Ga(this, e, t);
  }
  mapPos(e, t = -1, n = ft.Simple) {
    let s = 0, r = 0;
    for (let o = 0; o < this.sections.length; ) {
      let l = this.sections[o++], a = this.sections[o++], c = s + l;
      if (a < 0) {
        if (c > e)
          return r + (e - s);
        r += l;
      } else {
        if (n != ft.Simple && c >= e && (n == ft.TrackDel && s < e && c > e || n == ft.TrackBefore && s < e || n == ft.TrackAfter && c > e))
          return null;
        if (c > e || c == e && t < 0 && !l)
          return e == s || t < 0 ? r : r + a;
        r += a;
      }
      s = c;
    }
    if (e > s)
      throw new RangeError(`Position ${e} is out of range for changeset of length ${s}`);
    return r;
  }
  /**
  Check whether these changes touch a given range. When one of the
  changes entirely covers the range, the string `"cover"` is
  returned.
  */
  touchesRange(e, t = e) {
    for (let n = 0, s = 0; n < this.sections.length && s <= t; ) {
      let r = this.sections[n++], o = this.sections[n++], l = s + r;
      if (o >= 0 && s <= t && l >= e)
        return s < e && l > t ? "cover" : !0;
      s = l;
    }
    return !1;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let t = 0; t < this.sections.length; ) {
      let n = this.sections[t++], s = this.sections[t++];
      e += (e ? " " : "") + n + (s >= 0 ? ":" + s : "");
    }
    return e;
  }
  /**
  Serialize this change desc to a JSON-representable value.
  */
  toJSON() {
    return this.sections;
  }
  /**
  Create a change desc from its JSON representation (as produced
  by [`toJSON`](https://codemirror.net/6/docs/ref/#state.ChangeDesc.toJSON).
  */
  static fromJSON(e) {
    if (!Array.isArray(e) || e.length % 2 || e.some((t) => typeof t != "number"))
      throw new RangeError("Invalid JSON representation of ChangeDesc");
    return new vi(e);
  }
  /**
  @internal
  */
  static create(e) {
    return new vi(e);
  }
}
class Fe extends vi {
  constructor(e, t) {
    super(e), this.inserted = t;
  }
  /**
  Apply the changes to a document, returning the modified
  document.
  */
  apply(e) {
    if (this.length != e.length)
      throw new RangeError("Applying change set to a document with the wrong length");
    return Ua(this, (t, n, s, r, o) => e = e.replace(s, s + (n - t), o), !1), e;
  }
  mapDesc(e, t = !1) {
    return Ga(this, e, t, !0);
  }
  /**
  Given the document as it existed _before_ the changes, return a
  change set that represents the inverse of this set, which could
  be used to go from the document created by the changes back to
  the document as it existed before the changes.
  */
  invert(e) {
    let t = this.sections.slice(), n = [];
    for (let s = 0, r = 0; s < t.length; s += 2) {
      let o = t[s], l = t[s + 1];
      if (l >= 0) {
        t[s] = l, t[s + 1] = o;
        let a = s >> 1;
        for (; n.length < a; )
          n.push(me.empty);
        n.push(o ? e.slice(r, r + o) : me.empty);
      }
      r += o;
    }
    return new Fe(t, n);
  }
  /**
  Combine two subsequent change sets into a single set. `other`
  must start in the document produced by `this`. If `this` goes
  `docA` → `docB` and `other` represents `docB` → `docC`, the
  returned value will represent the change `docA` → `docC`.
  */
  compose(e) {
    return this.empty ? e : e.empty ? this : Om(this, e, !0);
  }
  /**
  Given another change set starting in the same document, maps this
  change set over the other, producing a new change set that can be
  applied to the document produced by applying `other`. When
  `before` is `true`, order changes as if `this` comes before
  `other`, otherwise (the default) treat `other` as coming first.
  
  Given two changes `A` and `B`, `A.compose(B.map(A))` and
  `B.compose(A.map(B, true))` will produce the same document. This
  provides a basic form of [operational
  transformation](https://en.wikipedia.org/wiki/Operational_transformation),
  and can be used for collaborative editing.
  */
  map(e, t = !1) {
    return e.empty ? this : Ga(this, e, t, !0);
  }
  /**
  Iterate over the changed ranges in the document, calling `f` for
  each, with the range in the original document (`fromA`-`toA`)
  and the range that replaces it in the new document
  (`fromB`-`toB`).
  
  When `individual` is true, adjacent changes are reported
  separately.
  */
  iterChanges(e, t = !1) {
    Ua(this, e, t);
  }
  /**
  Get a [change description](https://codemirror.net/6/docs/ref/#state.ChangeDesc) for this change
  set.
  */
  get desc() {
    return vi.create(this.sections);
  }
  /**
  @internal
  */
  filter(e) {
    let t = [], n = [], s = [], r = new Zs(this);
    e: for (let o = 0, l = 0; ; ) {
      let a = o == e.length ? 1e9 : e[o++];
      for (; l < a || l == a && r.len == 0; ) {
        if (r.done)
          break e;
        let h = Math.min(r.len, a - l);
        st(s, h, -1);
        let f = r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0;
        st(t, h, f), f > 0 && Hi(n, t, r.text), r.forward(h), l += h;
      }
      let c = e[o++];
      for (; l < c; ) {
        if (r.done)
          break e;
        let h = Math.min(r.len, c - l);
        st(t, h, -1), st(s, h, r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0), r.forward(h), l += h;
      }
    }
    return {
      changes: new Fe(t, n),
      filtered: vi.create(s)
    };
  }
  /**
  Serialize this change set to a JSON-representable value.
  */
  toJSON() {
    let e = [];
    for (let t = 0; t < this.sections.length; t += 2) {
      let n = this.sections[t], s = this.sections[t + 1];
      s < 0 ? e.push(n) : s == 0 ? e.push([n]) : e.push([n].concat(this.inserted[t >> 1].toJSON()));
    }
    return e;
  }
  /**
  Create a change set for the given changes, for a document of the
  given length, using `lineSep` as line separator.
  */
  static of(e, t, n) {
    let s = [], r = [], o = 0, l = null;
    function a(h = !1) {
      if (!h && !s.length)
        return;
      o < t && st(s, t - o, -1);
      let f = new Fe(s, r);
      l = l ? l.compose(f.map(l)) : f, s = [], r = [], o = 0;
    }
    function c(h) {
      if (Array.isArray(h))
        for (let f of h)
          c(f);
      else if (h instanceof Fe) {
        if (h.length != t)
          throw new RangeError(`Mismatched change set length (got ${h.length}, expected ${t})`);
        a(), l = l ? l.compose(h.map(l)) : h;
      } else {
        let { from: f, to: u = f, insert: d } = h;
        if (f > u || f < 0 || u > t)
          throw new RangeError(`Invalid change range ${f} to ${u} (in doc of length ${t})`);
        let p = d ? typeof d == "string" ? me.of(d.split(n || Ha)) : d : me.empty, m = p.length;
        if (f == u && m == 0)
          return;
        f < o && a(), f > o && st(s, f - o, -1), st(s, u - f, m), Hi(r, s, p), o = u;
      }
    }
    return c(e), a(!l), l;
  }
  /**
  Create an empty changeset of the given length.
  */
  static empty(e) {
    return new Fe(e ? [e, -1] : [], []);
  }
  /**
  Create a changeset from its JSON representation (as produced by
  [`toJSON`](https://codemirror.net/6/docs/ref/#state.ChangeSet.toJSON).
  */
  static fromJSON(e) {
    if (!Array.isArray(e))
      throw new RangeError("Invalid JSON representation of ChangeSet");
    let t = [], n = [];
    for (let s = 0; s < e.length; s++) {
      let r = e[s];
      if (typeof r == "number")
        t.push(r, -1);
      else {
        if (!Array.isArray(r) || typeof r[0] != "number" || r.some((o, l) => l && typeof o != "string"))
          throw new RangeError("Invalid JSON representation of ChangeSet");
        if (r.length == 1)
          t.push(r[0], 0);
        else {
          for (; n.length < s; )
            n.push(me.empty);
          n[s] = me.of(r.slice(1)), t.push(r[0], n[s].length);
        }
      }
    }
    return new Fe(t, n);
  }
  /**
  @internal
  */
  static createSet(e, t) {
    return new Fe(e, t);
  }
}
function st(i, e, t, n = !1) {
  if (e == 0 && t <= 0)
    return;
  let s = i.length - 2;
  s >= 0 && t <= 0 && t == i[s + 1] ? i[s] += e : s >= 0 && e == 0 && i[s] == 0 ? i[s + 1] += t : n ? (i[s] += e, i[s + 1] += t) : i.push(e, t);
}
function Hi(i, e, t) {
  if (t.length == 0)
    return;
  let n = e.length - 2 >> 1;
  if (n < i.length)
    i[i.length - 1] = i[i.length - 1].append(t);
  else {
    for (; i.length < n; )
      i.push(me.empty);
    i.push(t);
  }
}
function Ua(i, e, t) {
  let n = i.inserted;
  for (let s = 0, r = 0, o = 0; o < i.sections.length; ) {
    let l = i.sections[o++], a = i.sections[o++];
    if (a < 0)
      s += l, r += l;
    else {
      let c = s, h = r, f = me.empty;
      for (; c += l, h += a, a && n && (f = f.append(n[o - 2 >> 1])), !(t || o == i.sections.length || i.sections[o + 1] < 0); )
        l = i.sections[o++], a = i.sections[o++];
      e(s, c, r, h, f), s = c, r = h;
    }
  }
}
function Ga(i, e, t, n = !1) {
  let s = [], r = n ? [] : null, o = new Zs(i), l = new Zs(e);
  for (let a = -1; ; ) {
    if (o.done && l.len || l.done && o.len)
      throw new Error("Mismatched change set lengths");
    if (o.ins == -1 && l.ins == -1) {
      let c = Math.min(o.len, l.len);
      st(s, c, -1), o.forward(c), l.forward(c);
    } else if (l.ins >= 0 && (o.ins < 0 || a == o.i || o.off == 0 && (l.len < o.len || l.len == o.len && !t))) {
      let c = l.len;
      for (st(s, l.ins, -1); c; ) {
        let h = Math.min(o.len, c);
        o.ins >= 0 && a < o.i && o.len <= h && (st(s, 0, o.ins), r && Hi(r, s, o.text), a = o.i), o.forward(h), c -= h;
      }
      l.next();
    } else if (o.ins >= 0) {
      let c = 0, h = o.len;
      for (; h; )
        if (l.ins == -1) {
          let f = Math.min(h, l.len);
          c += f, h -= f, l.forward(f);
        } else if (l.ins == 0 && l.len < h)
          h -= l.len, l.next();
        else
          break;
      st(s, c, a < o.i ? o.ins : 0), r && a < o.i && Hi(r, s, o.text), a = o.i, o.forward(o.len - h);
    } else {
      if (o.done && l.done)
        return r ? Fe.createSet(s, r) : vi.create(s);
      throw new Error("Mismatched change set lengths");
    }
  }
}
function Om(i, e, t = !1) {
  let n = [], s = t ? [] : null, r = new Zs(i), o = new Zs(e);
  for (let l = !1; ; ) {
    if (r.done && o.done)
      return s ? Fe.createSet(n, s) : vi.create(n);
    if (r.ins == 0)
      st(n, r.len, 0, l), r.next();
    else if (o.len == 0 && !o.done)
      st(n, 0, o.ins, l), s && Hi(s, n, o.text), o.next();
    else {
      if (r.done || o.done)
        throw new Error("Mismatched change set lengths");
      {
        let a = Math.min(r.len2, o.len), c = n.length;
        if (r.ins == -1) {
          let h = o.ins == -1 ? -1 : o.off ? 0 : o.ins;
          st(n, a, h, l), s && h && Hi(s, n, o.text);
        } else o.ins == -1 ? (st(n, r.off ? 0 : r.len, a, l), s && Hi(s, n, r.textBit(a))) : (st(n, r.off ? 0 : r.len, o.off ? 0 : o.ins, l), s && !o.off && Hi(s, n, o.text));
        l = (r.ins > a || o.ins >= 0 && o.len > a) && (l || n.length > c), r.forward2(a), o.forward(a);
      }
    }
  }
}
class Zs {
  constructor(e) {
    this.set = e, this.i = 0, this.next();
  }
  next() {
    let { sections: e } = this.set;
    this.i < e.length ? (this.len = e[this.i++], this.ins = e[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0;
  }
  get done() {
    return this.ins == -2;
  }
  get len2() {
    return this.ins < 0 ? this.len : this.ins;
  }
  get text() {
    let { inserted: e } = this.set, t = this.i - 2 >> 1;
    return t >= e.length ? me.empty : e[t];
  }
  textBit(e) {
    let { inserted: t } = this.set, n = this.i - 2 >> 1;
    return n >= t.length && !e ? me.empty : t[n].slice(this.off, e == null ? void 0 : this.off + e);
  }
  forward(e) {
    e == this.len ? this.next() : (this.len -= e, this.off += e);
  }
  forward2(e) {
    this.ins == -1 ? this.forward(e) : e == this.ins ? this.next() : (this.ins -= e, this.off += e);
  }
}
class pn {
  constructor(e, t, n) {
    this.from = e, this.to = t, this.flags = n;
  }
  /**
  The anchor of the range—the side that doesn't move when you
  extend it.
  */
  get anchor() {
    return this.flags & 32 ? this.to : this.from;
  }
  /**
  The head of the range, which is moved when the range is
  [extended](https://codemirror.net/6/docs/ref/#state.SelectionRange.extend).
  */
  get head() {
    return this.flags & 32 ? this.from : this.to;
  }
  /**
  True when `anchor` and `head` are at the same position.
  */
  get empty() {
    return this.from == this.to;
  }
  /**
  If this is a cursor that is explicitly associated with the
  character on one of its sides, this returns the side. -1 means
  the character before its position, 1 the character after, and 0
  means no association.
  */
  get assoc() {
    return this.flags & 8 ? -1 : this.flags & 16 ? 1 : 0;
  }
  /**
  The bidirectional text level associated with this cursor, if
  any.
  */
  get bidiLevel() {
    let e = this.flags & 7;
    return e == 7 ? null : e;
  }
  /**
  The goal column (stored vertical offset) associated with a
  cursor. This is used to preserve the vertical position when
  [moving](https://codemirror.net/6/docs/ref/#view.EditorView.moveVertically) across
  lines of different length.
  */
  get goalColumn() {
    let e = this.flags >> 6;
    return e == 16777215 ? void 0 : e;
  }
  /**
  Map this range through a change, producing a valid range in the
  updated document.
  */
  map(e, t = -1) {
    let n, s;
    return this.empty ? n = s = e.mapPos(this.from, t) : (n = e.mapPos(this.from, 1), s = e.mapPos(this.to, -1)), n == this.from && s == this.to ? this : new pn(n, s, this.flags);
  }
  /**
  Extend this range to cover at least `from` to `to`.
  */
  extend(e, t = e, n = 0) {
    if (e <= this.anchor && t >= this.anchor)
      return P.range(e, t, void 0, void 0, n);
    let s = Math.abs(e - this.anchor) > Math.abs(t - this.anchor) ? e : t;
    return P.range(this.anchor, s, void 0, void 0, n);
  }
  /**
  Compare this range to another range.
  */
  eq(e, t = !1) {
    return this.anchor == e.anchor && this.head == e.head && this.goalColumn == e.goalColumn && (!t || !this.empty || this.assoc == e.assoc);
  }
  /**
  Return a JSON-serializable object representing the range.
  */
  toJSON() {
    return { anchor: this.anchor, head: this.head };
  }
  /**
  Convert a JSON representation of a range to a `SelectionRange`
  instance.
  */
  static fromJSON(e) {
    if (!e || typeof e.anchor != "number" || typeof e.head != "number")
      throw new RangeError("Invalid JSON representation for SelectionRange");
    return P.range(e.anchor, e.head);
  }
  /**
  @internal
  */
  static create(e, t, n) {
    return new pn(e, t, n);
  }
}
class P {
  constructor(e, t) {
    this.ranges = e, this.mainIndex = t;
  }
  /**
  Map a selection through a change. Used to adjust the selection
  position for changes.
  */
  map(e, t = -1) {
    return e.empty ? this : P.create(this.ranges.map((n) => n.map(e, t)), this.mainIndex);
  }
  /**
  Compare this selection to another selection. By default, ranges
  are compared only by position. When `includeAssoc` is true,
  cursor ranges must also have the same
  [`assoc`](https://codemirror.net/6/docs/ref/#state.SelectionRange.assoc) value.
  */
  eq(e, t = !1) {
    if (this.ranges.length != e.ranges.length || this.mainIndex != e.mainIndex)
      return !1;
    for (let n = 0; n < this.ranges.length; n++)
      if (!this.ranges[n].eq(e.ranges[n], t))
        return !1;
    return !0;
  }
  /**
  Get the primary selection range. Usually, you should make sure
  your code applies to _all_ ranges, by using methods like
  [`changeByRange`](https://codemirror.net/6/docs/ref/#state.EditorState.changeByRange).
  */
  get main() {
    return this.ranges[this.mainIndex];
  }
  /**
  Make sure the selection only has one range. Returns a selection
  holding only the main range from this selection.
  */
  asSingle() {
    return this.ranges.length == 1 ? this : new P([this.main], 0);
  }
  /**
  Extend this selection with an extra range.
  */
  addRange(e, t = !0) {
    return P.create([e].concat(this.ranges), t ? 0 : this.mainIndex + 1);
  }
  /**
  Replace a given range with another range, and then normalize the
  selection to merge and sort ranges if necessary.
  */
  replaceRange(e, t = this.mainIndex) {
    let n = this.ranges.slice();
    return n[t] = e, P.create(n, this.mainIndex);
  }
  /**
  Convert this selection to an object that can be serialized to
  JSON.
  */
  toJSON() {
    return { ranges: this.ranges.map((e) => e.toJSON()), main: this.mainIndex };
  }
  /**
  Create a selection from a JSON representation.
  */
  static fromJSON(e) {
    if (!e || !Array.isArray(e.ranges) || typeof e.main != "number" || e.main >= e.ranges.length)
      throw new RangeError("Invalid JSON representation for EditorSelection");
    return new P(e.ranges.map((t) => pn.fromJSON(t)), e.main);
  }
  /**
  Create a selection holding a single range.
  */
  static single(e, t = e) {
    return new P([P.range(e, t)], 0);
  }
  /**
  Sort and merge the given set of ranges, creating a valid
  selection.
  */
  static create(e, t = 0) {
    if (e.length == 0)
      throw new RangeError("A selection needs at least one range");
    for (let n = 0, s = 0; s < e.length; s++) {
      let r = e[s];
      if (r.empty ? r.from <= n : r.from < n)
        return P.normalized(e.slice(), t);
      n = r.to;
    }
    return new P(e, t);
  }
  /**
  Create a cursor selection range at the given position. You can
  safely ignore the optional arguments in most situations.
  */
  static cursor(e, t = 0, n, s) {
    return pn.create(e, e, (t == 0 ? 0 : t < 0 ? 8 : 16) | (n == null ? 7 : Math.min(6, n)) | (s ?? 16777215) << 6);
  }
  /**
  Create a selection range.
  */
  static range(e, t, n, s, r) {
    let o = (n ?? 16777215) << 6 | (s == null ? 7 : Math.min(6, s));
    return !r && e != t && (r = t < e ? 1 : -1), t < e ? pn.create(t, e, 48 | o) : pn.create(e, t, (r ? r < 0 ? 8 : 16 : 0) | o);
  }
  /**
  @internal
  */
  static normalized(e, t = 0) {
    let n = e[t];
    e.sort((s, r) => s.from - r.from), t = e.indexOf(n);
    for (let s = 1; s < e.length; s++) {
      let r = e[s], o = e[s - 1];
      if (r.empty ? r.from <= o.to : r.from < o.to) {
        let l = o.from, a = Math.max(r.to, o.to);
        s <= t && t--, e.splice(--s, 2, r.anchor > r.head ? P.range(a, l) : P.range(l, a));
      }
    }
    return new P(e, t);
  }
}
function bm(i, e) {
  for (let t of i.ranges)
    if (t.to > e)
      throw new RangeError("Selection points outside of document");
}
let dh = 0;
class L {
  constructor(e, t, n, s, r) {
    this.combine = e, this.compareInput = t, this.compare = n, this.isStatic = s, this.id = dh++, this.default = e([]), this.extensions = typeof r == "function" ? r(this) : r;
  }
  /**
  Returns a facet reader for this facet, which can be used to
  [read](https://codemirror.net/6/docs/ref/#state.EditorState.facet) it but not to define values for it.
  */
  get reader() {
    return this;
  }
  /**
  Define a new facet.
  */
  static define(e = {}) {
    return new L(e.combine || ((t) => t), e.compareInput || ((t, n) => t === n), e.compare || (e.combine ? (t, n) => t === n : ph), !!e.static, e.enables);
  }
  /**
  Returns an extension that adds the given value to this facet.
  */
  of(e) {
    return new ho([], this, 0, e);
  }
  /**
  Create an extension that computes a value for the facet from a
  state. You must take care to declare the parts of the state that
  this value depends on, since your function is only called again
  for a new state when one of those parts changed.
  
  In cases where your value depends only on a single field, you'll
  want to use the [`from`](https://codemirror.net/6/docs/ref/#state.Facet.from) method instead.
  */
  compute(e, t) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new ho(e, this, 1, t);
  }
  /**
  Create an extension that computes zero or more values for this
  facet from a state.
  */
  computeN(e, t) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new ho(e, this, 2, t);
  }
  from(e, t) {
    return t || (t = (n) => n), this.compute([e], (n) => t(n.field(e)));
  }
}
function ph(i, e) {
  return i == e || i.length == e.length && i.every((t, n) => t === e[n]);
}
class ho {
  constructor(e, t, n, s) {
    this.dependencies = e, this.facet = t, this.type = n, this.value = s, this.id = dh++;
  }
  dynamicSlot(e) {
    var t;
    let n = this.value, s = this.facet.compareInput, r = this.id, o = e[r] >> 1, l = this.type == 2, a = !1, c = !1, h = [];
    for (let f of this.dependencies)
      f == "doc" ? a = !0 : f == "selection" ? c = !0 : ((t = e[f.id]) !== null && t !== void 0 ? t : 1) & 1 || h.push(e[f.id]);
    return {
      create(f) {
        return f.values[o] = n(f), 1;
      },
      update(f, u) {
        if (a && u.docChanged || c && (u.docChanged || u.selection) || za(f, h)) {
          let d = n(f);
          if (l ? !nu(d, f.values[o], s) : !s(d, f.values[o]))
            return f.values[o] = d, 1;
        }
        return 0;
      },
      reconfigure: (f, u) => {
        let d, p = u.config.address[r];
        if (p != null) {
          let m = Mo(u, p);
          if (this.dependencies.every((g) => g instanceof L ? u.facet(g) === f.facet(g) : g instanceof rt ? u.field(g, !1) == f.field(g, !1) : !0) || (l ? nu(d = n(f), m, s) : s(d = n(f), m)))
            return f.values[o] = m, 0;
        } else
          d = n(f);
        return f.values[o] = d, 1;
      }
    };
  }
}
function nu(i, e, t) {
  if (i.length != e.length)
    return !1;
  for (let n = 0; n < i.length; n++)
    if (!t(i[n], e[n]))
      return !1;
  return !0;
}
function za(i, e) {
  let t = !1;
  for (let n of e)
    Bs(i, n) & 1 && (t = !0);
  return t;
}
function Nx(i, e, t) {
  let n = t.map((a) => i[a.id]), s = t.map((a) => a.type), r = n.filter((a) => !(a & 1)), o = i[e.id] >> 1;
  function l(a) {
    let c = [];
    for (let h = 0; h < n.length; h++) {
      let f = Mo(a, n[h]);
      if (s[h] == 2)
        for (let u of f)
          c.push(u);
      else
        c.push(f);
    }
    return e.combine(c);
  }
  return {
    create(a) {
      for (let c of n)
        Bs(a, c);
      return a.values[o] = l(a), 1;
    },
    update(a, c) {
      if (!za(a, r))
        return 0;
      let h = l(a);
      return e.compare(h, a.values[o]) ? 0 : (a.values[o] = h, 1);
    },
    reconfigure(a, c) {
      let h = za(a, n), f = c.config.facets[e.id], u = c.facet(e);
      if (f && !h && ph(t, f))
        return a.values[o] = u, 0;
      let d = l(a);
      return e.compare(d, u) ? (a.values[o] = u, 0) : (a.values[o] = d, 1);
    }
  };
}
const Nr = /* @__PURE__ */ L.define({ static: !0 });
class rt {
  constructor(e, t, n, s, r) {
    this.id = e, this.createF = t, this.updateF = n, this.compareF = s, this.spec = r, this.provides = void 0;
  }
  /**
  Define a state field.
  */
  static define(e) {
    let t = new rt(dh++, e.create, e.update, e.compare || ((n, s) => n === s), e);
    return e.provide && (t.provides = e.provide(t)), t;
  }
  create(e) {
    let t = e.facet(Nr).find((n) => n.field == this);
    return ((t == null ? void 0 : t.create) || this.createF)(e);
  }
  /**
  @internal
  */
  slot(e) {
    let t = e[this.id] >> 1;
    return {
      create: (n) => (n.values[t] = this.create(n), 1),
      update: (n, s) => {
        let r = n.values[t], o = this.updateF(r, s);
        return this.compareF(r, o) ? 0 : (n.values[t] = o, 1);
      },
      reconfigure: (n, s) => {
        let r = n.facet(Nr), o = s.facet(Nr), l;
        return (l = r.find((a) => a.field == this)) && l != o.find((a) => a.field == this) ? (n.values[t] = l.create(n), 1) : s.config.address[this.id] != null ? (n.values[t] = s.field(this), 0) : (n.values[t] = this.create(n), 1);
      }
    };
  }
  /**
  Returns an extension that enables this field and overrides the
  way it is initialized. Can be useful when you need to provide a
  non-default starting value for the field.
  */
  init(e) {
    return [this, Nr.of({ field: this, create: e })];
  }
  /**
  State field instances can be used as
  [`Extension`](https://codemirror.net/6/docs/ref/#state.Extension) values to enable the field in a
  given state.
  */
  get extension() {
    return this;
  }
}
const un = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function vs(i) {
  return (e) => new ym(e, i);
}
const An = {
  /**
  The highest precedence level, for extensions that should end up
  near the start of the precedence ordering.
  */
  highest: /* @__PURE__ */ vs(un.highest),
  /**
  A higher-than-default precedence, for extensions that should
  come before those with default precedence.
  */
  high: /* @__PURE__ */ vs(un.high),
  /**
  The default precedence, which is also used for extensions
  without an explicit precedence.
  */
  default: /* @__PURE__ */ vs(un.default),
  /**
  A lower-than-default precedence.
  */
  low: /* @__PURE__ */ vs(un.low),
  /**
  The lowest precedence level. Meant for things that should end up
  near the end of the extension order.
  */
  lowest: /* @__PURE__ */ vs(un.lowest)
};
class ym {
  constructor(e, t) {
    this.inner = e, this.prec = t;
  }
}
class xl {
  /**
  Create an instance of this compartment to add to your [state
  configuration](https://codemirror.net/6/docs/ref/#state.EditorStateConfig.extensions).
  */
  of(e) {
    return new ja(this, e);
  }
  /**
  Create an [effect](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) that
  reconfigures this compartment.
  */
  reconfigure(e) {
    return xl.reconfigure.of({ compartment: this, extension: e });
  }
  /**
  Get the current content of the compartment in the state, or
  `undefined` if it isn't present.
  */
  get(e) {
    return e.config.compartments.get(this);
  }
}
class ja {
  constructor(e, t) {
    this.compartment = e, this.inner = t;
  }
}
class _o {
  constructor(e, t, n, s, r, o) {
    for (this.base = e, this.compartments = t, this.dynamicSlots = n, this.address = s, this.staticValues = r, this.facets = o, this.statusTemplate = []; this.statusTemplate.length < n.length; )
      this.statusTemplate.push(
        0
        /* SlotStatus.Unresolved */
      );
  }
  staticFacet(e) {
    let t = this.address[e.id];
    return t == null ? e.default : this.staticValues[t >> 1];
  }
  static resolve(e, t, n) {
    let s = [], r = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ new Map();
    for (let u of Rx(e, t, o))
      u instanceof rt ? s.push(u) : (r[u.facet.id] || (r[u.facet.id] = [])).push(u);
    let l = /* @__PURE__ */ Object.create(null), a = [], c = [];
    for (let u of s)
      l[u.id] = c.length << 1, c.push((d) => u.slot(d));
    let h = n == null ? void 0 : n.config.facets;
    for (let u in r) {
      let d = r[u], p = d[0].facet, m = h && h[u] || [];
      if (d.every(
        (g) => g.type == 0
        /* Provider.Static */
      ))
        if (l[p.id] = a.length << 1 | 1, ph(m, d))
          a.push(n.facet(p));
        else {
          let g = p.combine(d.map((b) => b.value));
          a.push(n && p.compare(g, n.facet(p)) ? n.facet(p) : g);
        }
      else {
        for (let g of d)
          g.type == 0 ? (l[g.id] = a.length << 1 | 1, a.push(g.value)) : (l[g.id] = c.length << 1, c.push((b) => g.dynamicSlot(b)));
        l[p.id] = c.length << 1, c.push((g) => Nx(g, p, d));
      }
    }
    let f = c.map((u) => u(l));
    return new _o(e, o, f, l, a, r);
  }
}
function Rx(i, e, t) {
  let n = [[], [], [], [], []], s = /* @__PURE__ */ new Map();
  function r(o, l) {
    let a = s.get(o);
    if (a != null) {
      if (a <= l)
        return;
      let c = n[a].indexOf(o);
      c > -1 && n[a].splice(c, 1), o instanceof ja && t.delete(o.compartment);
    }
    if (s.set(o, l), Array.isArray(o))
      for (let c of o)
        r(c, l);
    else if (o instanceof ja) {
      if (t.has(o.compartment))
        throw new RangeError("Duplicate use of compartment in extensions");
      let c = e.get(o.compartment) || o.inner;
      t.set(o.compartment, c), r(c, l);
    } else if (o instanceof ym)
      r(o.inner, o.prec);
    else if (o instanceof rt)
      n[l].push(o), o.provides && r(o.provides, l);
    else if (o instanceof ho)
      n[l].push(o), o.facet.extensions && r(o.facet.extensions, un.default);
    else {
      let c = o.extension;
      if (!c)
        throw new Error(`Unrecognized extension value in extension set (${o}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
      r(c, l);
    }
  }
  return r(i, un.default), n.reduce((o, l) => o.concat(l));
}
function Bs(i, e) {
  if (e & 1)
    return 2;
  let t = e >> 1, n = i.status[t];
  if (n == 4)
    throw new Error("Cyclic dependency between fields and/or facets");
  if (n & 2)
    return n;
  i.status[t] = 4;
  let s = i.computeSlot(i, i.config.dynamicSlots[t]);
  return i.status[t] = 2 | s;
}
function Mo(i, e) {
  return e & 1 ? i.config.staticValues[e >> 1] : i.values[e >> 1];
}
const xm = /* @__PURE__ */ L.define(), Ya = /* @__PURE__ */ L.define({
  combine: (i) => i.some((e) => e),
  static: !0
}), vm = /* @__PURE__ */ L.define({
  combine: (i) => i.length ? i[0] : void 0,
  static: !0
}), Sm = /* @__PURE__ */ L.define(), wm = /* @__PURE__ */ L.define(), Pm = /* @__PURE__ */ L.define(), km = /* @__PURE__ */ L.define({
  combine: (i) => i.length ? i[0] : !1
});
class Ii {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.value = t;
  }
  /**
  Define a new type of annotation.
  */
  static define() {
    return new _x();
  }
}
class _x {
  /**
  Create an instance of this annotation.
  */
  of(e) {
    return new Ii(this, e);
  }
}
class Mx {
  /**
  @internal
  */
  constructor(e) {
    this.map = e;
  }
  /**
  Create a [state effect](https://codemirror.net/6/docs/ref/#state.StateEffect) instance of this
  type.
  */
  of(e) {
    return new ie(this, e);
  }
}
class ie {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.value = t;
  }
  /**
  Map this effect through a position mapping. Will return
  `undefined` when that ends up deleting the effect.
  */
  map(e) {
    let t = this.type.map(this.value, e);
    return t === void 0 ? void 0 : t == this.value ? this : new ie(this.type, t);
  }
  /**
  Tells you whether this effect object is of a given
  [type](https://codemirror.net/6/docs/ref/#state.StateEffectType).
  */
  is(e) {
    return this.type == e;
  }
  /**
  Define a new effect type. The type parameter indicates the type
  of values that his effect holds. It should be a type that
  doesn't include `undefined`, since that is used in
  [mapping](https://codemirror.net/6/docs/ref/#state.StateEffect.map) to indicate that an effect is
  removed.
  */
  static define(e = {}) {
    return new Mx(e.map || ((t) => t));
  }
  /**
  Map an array of effects through a change set.
  */
  static mapEffects(e, t) {
    if (!e.length)
      return e;
    let n = [];
    for (let s of e) {
      let r = s.map(t);
      r && n.push(r);
    }
    return n;
  }
}
ie.reconfigure = /* @__PURE__ */ ie.define();
ie.appendConfig = /* @__PURE__ */ ie.define();
class Ue {
  constructor(e, t, n, s, r, o) {
    this.startState = e, this.changes = t, this.selection = n, this.effects = s, this.annotations = r, this.scrollIntoView = o, this._doc = null, this._state = null, n && bm(n, t.newLength), r.some((l) => l.type == Ue.time) || (this.annotations = r.concat(Ue.time.of(Date.now())));
  }
  /**
  @internal
  */
  static create(e, t, n, s, r, o) {
    return new Ue(e, t, n, s, r, o);
  }
  /**
  The new document produced by the transaction. Contrary to
  [`.state`](https://codemirror.net/6/docs/ref/#state.Transaction.state)`.doc`, accessing this won't
  force the entire new state to be computed right away, so it is
  recommended that [transaction
  filters](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter) use this getter
  when they need to look at the new document.
  */
  get newDoc() {
    return this._doc || (this._doc = this.changes.apply(this.startState.doc));
  }
  /**
  The new selection produced by the transaction. If
  [`this.selection`](https://codemirror.net/6/docs/ref/#state.Transaction.selection) is undefined,
  this will [map](https://codemirror.net/6/docs/ref/#state.EditorSelection.map) the start state's
  current selection through the changes made by the transaction.
  */
  get newSelection() {
    return this.selection || this.startState.selection.map(this.changes);
  }
  /**
  The new state created by the transaction. Computed on demand
  (but retained for subsequent access), so it is recommended not to
  access it in [transaction
  filters](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter) when possible.
  */
  get state() {
    return this._state || this.startState.applyTransaction(this), this._state;
  }
  /**
  Get the value of the given annotation type, if any.
  */
  annotation(e) {
    for (let t of this.annotations)
      if (t.type == e)
        return t.value;
  }
  /**
  Indicates whether the transaction changed the document.
  */
  get docChanged() {
    return !this.changes.empty;
  }
  /**
  Indicates whether this transaction reconfigures the state
  (through a [configuration compartment](https://codemirror.net/6/docs/ref/#state.Compartment) or
  with a top-level configuration
  [effect](https://codemirror.net/6/docs/ref/#state.StateEffect^reconfigure).
  */
  get reconfigured() {
    return this.startState.config != this.state.config;
  }
  /**
  Returns true if the transaction has a [user
  event](https://codemirror.net/6/docs/ref/#state.Transaction^userEvent) annotation that is equal to
  or more specific than `event`. For example, if the transaction
  has `"select.pointer"` as user event, `"select"` and
  `"select.pointer"` will match it.
  */
  isUserEvent(e) {
    let t = this.annotation(Ue.userEvent);
    return !!(t && (t == e || t.length > e.length && t.slice(0, e.length) == e && t[e.length] == "."));
  }
}
Ue.time = /* @__PURE__ */ Ii.define();
Ue.userEvent = /* @__PURE__ */ Ii.define();
Ue.addToHistory = /* @__PURE__ */ Ii.define();
Ue.remote = /* @__PURE__ */ Ii.define();
function Qx(i, e) {
  let t = [];
  for (let n = 0, s = 0; ; ) {
    let r, o;
    if (n < i.length && (s == e.length || e[s] >= i[n]))
      r = i[n++], o = i[n++];
    else if (s < e.length)
      r = e[s++], o = e[s++];
    else
      return t;
    !t.length || t[t.length - 1] < r ? t.push(r, o) : t[t.length - 1] < o && (t[t.length - 1] = o);
  }
}
function Cm(i, e, t) {
  var n;
  let s, r, o;
  return t ? (s = e.changes, r = Fe.empty(e.changes.length), o = i.changes.compose(e.changes)) : (s = e.changes.map(i.changes), r = i.changes.mapDesc(e.changes, !0), o = i.changes.compose(s)), {
    changes: o,
    selection: e.selection ? e.selection.map(r) : (n = i.selection) === null || n === void 0 ? void 0 : n.map(s),
    effects: ie.mapEffects(i.effects, s).concat(ie.mapEffects(e.effects, r)),
    annotations: i.annotations.length ? i.annotations.concat(e.annotations) : e.annotations,
    scrollIntoView: i.scrollIntoView || e.scrollIntoView
  };
}
function Ka(i, e, t) {
  let n = e.selection, s = jn(e.annotations);
  return e.userEvent && (s = s.concat(Ue.userEvent.of(e.userEvent))), {
    changes: e.changes instanceof Fe ? e.changes : Fe.of(e.changes || [], t, i.facet(vm)),
    selection: n && (n instanceof P ? n : P.single(n.anchor, n.head)),
    effects: jn(e.effects),
    annotations: s,
    scrollIntoView: !!e.scrollIntoView
  };
}
function Em(i, e, t) {
  let n = Ka(i, e.length ? e[0] : {}, i.doc.length);
  e.length && e[0].filter === !1 && (t = !1);
  for (let r = 1; r < e.length; r++) {
    e[r].filter === !1 && (t = !1);
    let o = !!e[r].sequential;
    n = Cm(n, Ka(i, e[r], o ? n.changes.newLength : i.doc.length), o);
  }
  let s = Ue.create(i, n.changes, n.selection, n.effects, n.annotations, n.scrollIntoView);
  return Vx(t ? Ix(s) : s);
}
function Ix(i) {
  let e = i.startState, t = !0;
  for (let s of e.facet(Sm)) {
    let r = s(i);
    if (r === !1) {
      t = !1;
      break;
    }
    Array.isArray(r) && (t = t === !0 ? r : Qx(t, r));
  }
  if (t !== !0) {
    let s, r;
    if (t === !1)
      r = i.changes.invertedDesc, s = Fe.empty(e.doc.length);
    else {
      let o = i.changes.filter(t);
      s = o.changes, r = o.filtered.mapDesc(o.changes).invertedDesc;
    }
    i = Ue.create(e, s, i.selection && i.selection.map(r), ie.mapEffects(i.effects, r), i.annotations, i.scrollIntoView);
  }
  let n = e.facet(wm);
  for (let s = n.length - 1; s >= 0; s--) {
    let r = n[s](i);
    r instanceof Ue ? i = r : Array.isArray(r) && r.length == 1 && r[0] instanceof Ue ? i = r[0] : i = Em(e, jn(r), !1);
  }
  return i;
}
function Vx(i) {
  let e = i.startState, t = e.facet(Pm), n = i;
  for (let s = t.length - 1; s >= 0; s--) {
    let r = t[s](i);
    r && Object.keys(r).length && (n = Cm(n, Ka(e, r, i.changes.newLength), !0));
  }
  return n == i ? i : Ue.create(e, i.changes, i.selection, n.effects, n.annotations, n.scrollIntoView);
}
const Lx = [];
function jn(i) {
  return i == null ? Lx : Array.isArray(i) ? i : [i];
}
var Ne = /* @__PURE__ */ function(i) {
  return i[i.Word = 0] = "Word", i[i.Space = 1] = "Space", i[i.Other = 2] = "Other", i;
}(Ne || (Ne = {}));
const Bx = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let Za;
try {
  Za = /* @__PURE__ */ new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {
}
function Xx(i) {
  if (Za)
    return Za.test(i);
  for (let e = 0; e < i.length; e++) {
    let t = i[e];
    if (/\w/.test(t) || t > "" && (t.toUpperCase() != t.toLowerCase() || Bx.test(t)))
      return !0;
  }
  return !1;
}
function Wx(i) {
  return (e) => {
    if (!/\S/.test(e))
      return Ne.Space;
    if (Xx(e))
      return Ne.Word;
    for (let t = 0; t < i.length; t++)
      if (e.indexOf(i[t]) > -1)
        return Ne.Word;
    return Ne.Other;
  };
}
class pe {
  constructor(e, t, n, s, r, o) {
    this.config = e, this.doc = t, this.selection = n, this.values = s, this.status = e.statusTemplate.slice(), this.computeSlot = r, o && (o._state = this);
    for (let l = 0; l < this.config.dynamicSlots.length; l++)
      Bs(this, l << 1);
    this.computeSlot = null;
  }
  field(e, t = !0) {
    let n = this.config.address[e.id];
    if (n == null) {
      if (t)
        throw new RangeError("Field is not present in this state");
      return;
    }
    return Bs(this, n), Mo(this, n);
  }
  /**
  Create a [transaction](https://codemirror.net/6/docs/ref/#state.Transaction) that updates this
  state. Any number of [transaction specs](https://codemirror.net/6/docs/ref/#state.TransactionSpec)
  can be passed. Unless
  [`sequential`](https://codemirror.net/6/docs/ref/#state.TransactionSpec.sequential) is set, the
  [changes](https://codemirror.net/6/docs/ref/#state.TransactionSpec.changes) (if any) of each spec
  are assumed to start in the _current_ document (not the document
  produced by previous specs), and its
  [selection](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection) and
  [effects](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) are assumed to refer
  to the document created by its _own_ changes. The resulting
  transaction contains the combined effect of all the different
  specs. For [selection](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection), later
  specs take precedence over earlier ones.
  */
  update(...e) {
    return Em(this, e, !0);
  }
  /**
  @internal
  */
  applyTransaction(e) {
    let t = this.config, { base: n, compartments: s } = t;
    for (let l of e.effects)
      l.is(xl.reconfigure) ? (t && (s = /* @__PURE__ */ new Map(), t.compartments.forEach((a, c) => s.set(c, a)), t = null), s.set(l.value.compartment, l.value.extension)) : l.is(ie.reconfigure) ? (t = null, n = l.value) : l.is(ie.appendConfig) && (t = null, n = jn(n).concat(l.value));
    let r;
    t ? r = e.startState.values.slice() : (t = _o.resolve(n, s, this), r = new pe(t, this.doc, this.selection, t.dynamicSlots.map(() => null), (a, c) => c.reconfigure(a, this), null).values);
    let o = e.startState.facet(Ya) ? e.newSelection : e.newSelection.asSingle();
    new pe(t, e.newDoc, o, r, (l, a) => a.update(l, e), e);
  }
  /**
  Create a [transaction spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec) that
  replaces every selection range with the given content.
  */
  replaceSelection(e) {
    return typeof e == "string" && (e = this.toText(e)), this.changeByRange((t) => ({
      changes: { from: t.from, to: t.to, insert: e },
      range: P.cursor(t.from + e.length)
    }));
  }
  /**
  Create a set of changes and a new selection by running the given
  function for each range in the active selection. The function
  can return an optional set of changes (in the coordinate space
  of the start document), plus an updated range (in the coordinate
  space of the document produced by the call's own changes). This
  method will merge all the changes and ranges into a single
  changeset and selection, and return it as a [transaction
  spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec), which can be passed to
  [`update`](https://codemirror.net/6/docs/ref/#state.EditorState.update).
  */
  changeByRange(e) {
    let t = this.selection, n = e(t.ranges[0]), s = this.changes(n.changes), r = [n.range], o = jn(n.effects);
    for (let l = 1; l < t.ranges.length; l++) {
      let a = e(t.ranges[l]), c = this.changes(a.changes), h = c.map(s);
      for (let u = 0; u < l; u++)
        r[u] = r[u].map(h);
      let f = s.mapDesc(c, !0);
      r.push(a.range.map(f)), s = s.compose(h), o = ie.mapEffects(o, h).concat(ie.mapEffects(jn(a.effects), f));
    }
    return {
      changes: s,
      selection: P.create(r, t.mainIndex),
      effects: o
    };
  }
  /**
  Create a [change set](https://codemirror.net/6/docs/ref/#state.ChangeSet) from the given change
  description, taking the state's document length and line
  separator into account.
  */
  changes(e = []) {
    return e instanceof Fe ? e : Fe.of(e, this.doc.length, this.facet(pe.lineSeparator));
  }
  /**
  Using the state's [line
  separator](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator), create a
  [`Text`](https://codemirror.net/6/docs/ref/#state.Text) instance from the given string.
  */
  toText(e) {
    return me.of(e.split(this.facet(pe.lineSeparator) || Ha));
  }
  /**
  Return the given range of the document as a string.
  */
  sliceDoc(e = 0, t = this.doc.length) {
    return this.doc.sliceString(e, t, this.lineBreak);
  }
  /**
  Get the value of a state [facet](https://codemirror.net/6/docs/ref/#state.Facet).
  */
  facet(e) {
    let t = this.config.address[e.id];
    return t == null ? e.default : (Bs(this, t), Mo(this, t));
  }
  /**
  Convert this state to a JSON-serializable object. When custom
  fields should be serialized, you can pass them in as an object
  mapping property names (in the resulting object, which should
  not use `doc` or `selection`) to fields.
  */
  toJSON(e) {
    let t = {
      doc: this.sliceDoc(),
      selection: this.selection.toJSON()
    };
    if (e)
      for (let n in e) {
        let s = e[n];
        s instanceof rt && this.config.address[s.id] != null && (t[n] = s.spec.toJSON(this.field(e[n]), this));
      }
    return t;
  }
  /**
  Deserialize a state from its JSON representation. When custom
  fields should be deserialized, pass the same object you passed
  to [`toJSON`](https://codemirror.net/6/docs/ref/#state.EditorState.toJSON) when serializing as
  third argument.
  */
  static fromJSON(e, t = {}, n) {
    if (!e || typeof e.doc != "string")
      throw new RangeError("Invalid JSON representation for EditorState");
    let s = [];
    if (n) {
      for (let r in n)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
          let o = n[r], l = e[r];
          s.push(o.init((a) => o.spec.fromJSON(l, a)));
        }
    }
    return pe.create({
      doc: e.doc,
      selection: P.fromJSON(e.selection),
      extensions: t.extensions ? s.concat([t.extensions]) : s
    });
  }
  /**
  Create a new state. You'll usually only need this when
  initializing an editor—updated states are created by applying
  transactions.
  */
  static create(e = {}) {
    let t = _o.resolve(e.extensions || [], /* @__PURE__ */ new Map()), n = e.doc instanceof me ? e.doc : me.of((e.doc || "").split(t.staticFacet(pe.lineSeparator) || Ha)), s = e.selection ? e.selection instanceof P ? e.selection : P.single(e.selection.anchor, e.selection.head) : P.single(0);
    return bm(s, n.length), t.staticFacet(Ya) || (s = s.asSingle()), new pe(t, n, s, t.dynamicSlots.map(() => null), (r, o) => o.create(r), null);
  }
  /**
  The size (in columns) of a tab in the document, determined by
  the [`tabSize`](https://codemirror.net/6/docs/ref/#state.EditorState^tabSize) facet.
  */
  get tabSize() {
    return this.facet(pe.tabSize);
  }
  /**
  Get the proper [line-break](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator)
  string for this state.
  */
  get lineBreak() {
    return this.facet(pe.lineSeparator) || `
`;
  }
  /**
  Returns true when the editor is
  [configured](https://codemirror.net/6/docs/ref/#state.EditorState^readOnly) to be read-only.
  */
  get readOnly() {
    return this.facet(km);
  }
  /**
  Look up a translation for the given phrase (via the
  [`phrases`](https://codemirror.net/6/docs/ref/#state.EditorState^phrases) facet), or return the
  original string if no translation is found.
  
  If additional arguments are passed, they will be inserted in
  place of markers like `$1` (for the first value) and `$2`, etc.
  A single `$` is equivalent to `$1`, and `$$` will produce a
  literal dollar sign.
  */
  phrase(e, ...t) {
    for (let n of this.facet(pe.phrases))
      if (Object.prototype.hasOwnProperty.call(n, e)) {
        e = n[e];
        break;
      }
    return t.length && (e = e.replace(/\$(\$|\d*)/g, (n, s) => {
      if (s == "$")
        return "$";
      let r = +(s || 1);
      return !r || r > t.length ? n : t[r - 1];
    })), e;
  }
  /**
  Find the values for a given language data field, provided by the
  the [`languageData`](https://codemirror.net/6/docs/ref/#state.EditorState^languageData) facet.
  
  Examples of language data fields are...
  
  - [`"commentTokens"`](https://codemirror.net/6/docs/ref/#commands.CommentTokens) for specifying
    comment syntax.
  - [`"autocomplete"`](https://codemirror.net/6/docs/ref/#autocomplete.autocompletion^config.override)
    for providing language-specific completion sources.
  - [`"wordChars"`](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) for adding
    characters that should be considered part of words in this
    language.
  - [`"closeBrackets"`](https://codemirror.net/6/docs/ref/#autocomplete.CloseBracketConfig) controls
    bracket closing behavior.
  */
  languageDataAt(e, t, n = -1) {
    let s = [];
    for (let r of this.facet(xm))
      for (let o of r(this, t, n))
        Object.prototype.hasOwnProperty.call(o, e) && s.push(o[e]);
    return s;
  }
  /**
  Return a function that can categorize strings (expected to
  represent a single [grapheme cluster](https://codemirror.net/6/docs/ref/#state.findClusterBreak))
  into one of:
  
   - Word (contains an alphanumeric character or a character
     explicitly listed in the local language's `"wordChars"`
     language data, which should be a string)
   - Space (contains only whitespace)
   - Other (anything else)
  */
  charCategorizer(e) {
    let t = this.languageDataAt("wordChars", e);
    return Wx(t.length ? t[0] : "");
  }
  /**
  Find the word at the given position, meaning the range
  containing all [word](https://codemirror.net/6/docs/ref/#state.CharCategory.Word) characters
  around it. If no word characters are adjacent to the position,
  this returns null.
  */
  wordAt(e) {
    let { text: t, from: n, length: s } = this.doc.lineAt(e), r = this.charCategorizer(e), o = e - n, l = e - n;
    for (; o > 0; ) {
      let a = ze(t, o, !1);
      if (r(t.slice(a, o)) != Ne.Word)
        break;
      o = a;
    }
    for (; l < s; ) {
      let a = ze(t, l);
      if (r(t.slice(l, a)) != Ne.Word)
        break;
      l = a;
    }
    return o == l ? null : P.range(o + n, l + n);
  }
}
pe.allowMultipleSelections = Ya;
pe.tabSize = /* @__PURE__ */ L.define({
  combine: (i) => i.length ? i[0] : 4
});
pe.lineSeparator = vm;
pe.readOnly = km;
pe.phrases = /* @__PURE__ */ L.define({
  compare(i, e) {
    let t = Object.keys(i), n = Object.keys(e);
    return t.length == n.length && t.every((s) => i[s] == e[s]);
  }
});
pe.languageData = xm;
pe.changeFilter = Sm;
pe.transactionFilter = wm;
pe.transactionExtender = Pm;
xl.reconfigure = /* @__PURE__ */ ie.define();
function wi(i, e, t = {}) {
  let n = {};
  for (let s of i)
    for (let r of Object.keys(s)) {
      let o = s[r], l = n[r];
      if (l === void 0)
        n[r] = o;
      else if (!(l === o || o === void 0)) if (Object.hasOwnProperty.call(t, r))
        n[r] = t[r](l, o);
      else
        throw new Error("Config merge conflict for field " + r);
    }
  for (let s in e)
    n[s] === void 0 && (n[s] = e[s]);
  return n;
}
class Yi {
  /**
  Compare this value with another value. Used when comparing
  rangesets. The default implementation compares by identity.
  Unless you are only creating a fixed number of unique instances
  of your value type, it is a good idea to implement this
  properly.
  */
  eq(e) {
    return this == e;
  }
  /**
  Create a [range](https://codemirror.net/6/docs/ref/#state.Range) with this value.
  */
  range(e, t = e) {
    return Ja.create(e, t, this);
  }
}
Yi.prototype.startSide = Yi.prototype.endSide = 0;
Yi.prototype.point = !1;
Yi.prototype.mapMode = ft.TrackDel;
function mh(i, e) {
  return i == e || i.constructor == e.constructor && i.eq(e);
}
let Ja = class Tm {
  constructor(e, t, n) {
    this.from = e, this.to = t, this.value = n;
  }
  /**
  @internal
  */
  static create(e, t, n) {
    return new Tm(e, t, n);
  }
};
function ec(i, e) {
  return i.from - e.from || i.value.startSide - e.value.startSide;
}
class gh {
  constructor(e, t, n, s) {
    this.from = e, this.to = t, this.value = n, this.maxPoint = s;
  }
  get length() {
    return this.to[this.to.length - 1];
  }
  // Find the index of the given position and side. Use the ranges'
  // `from` pos when `end == false`, `to` when `end == true`.
  findIndex(e, t, n, s = 0) {
    let r = n ? this.to : this.from;
    for (let o = s, l = r.length; ; ) {
      if (o == l)
        return o;
      let a = o + l >> 1, c = r[a] - e || (n ? this.value[a].endSide : this.value[a].startSide) - t;
      if (a == o)
        return c >= 0 ? o : l;
      c >= 0 ? l = a : o = a + 1;
    }
  }
  between(e, t, n, s) {
    for (let r = this.findIndex(t, -1e9, !0), o = this.findIndex(n, 1e9, !1, r); r < o; r++)
      if (s(this.from[r] + e, this.to[r] + e, this.value[r]) === !1)
        return !1;
  }
  map(e, t) {
    let n = [], s = [], r = [], o = -1, l = -1;
    for (let a = 0; a < this.value.length; a++) {
      let c = this.value[a], h = this.from[a] + e, f = this.to[a] + e, u, d;
      if (h == f) {
        let p = t.mapPos(h, c.startSide, c.mapMode);
        if (p == null || (u = d = p, c.startSide != c.endSide && (d = t.mapPos(h, c.endSide), d < u)))
          continue;
      } else if (u = t.mapPos(h, c.startSide), d = t.mapPos(f, c.endSide), u > d || u == d && c.startSide > 0 && c.endSide <= 0)
        continue;
      (d - u || c.endSide - c.startSide) < 0 || (o < 0 && (o = u), c.point && (l = Math.max(l, d - u)), n.push(c), s.push(u - o), r.push(d - o));
    }
    return { mapped: n.length ? new gh(s, r, n, l) : null, pos: o };
  }
}
class ce {
  constructor(e, t, n, s) {
    this.chunkPos = e, this.chunk = t, this.nextLayer = n, this.maxPoint = s;
  }
  /**
  @internal
  */
  static create(e, t, n, s) {
    return new ce(e, t, n, s);
  }
  /**
  @internal
  */
  get length() {
    let e = this.chunk.length - 1;
    return e < 0 ? 0 : Math.max(this.chunkEnd(e), this.nextLayer.length);
  }
  /**
  The number of ranges in the set.
  */
  get size() {
    if (this.isEmpty)
      return 0;
    let e = this.nextLayer.size;
    for (let t of this.chunk)
      e += t.value.length;
    return e;
  }
  /**
  @internal
  */
  chunkEnd(e) {
    return this.chunkPos[e] + this.chunk[e].length;
  }
  /**
  Update the range set, optionally adding new ranges or filtering
  out existing ones.
  
  (Note: The type parameter is just there as a kludge to work
  around TypeScript variance issues that prevented `RangeSet<X>`
  from being a subtype of `RangeSet<Y>` when `X` is a subtype of
  `Y`.)
  */
  update(e) {
    let { add: t = [], sort: n = !1, filterFrom: s = 0, filterTo: r = this.length } = e, o = e.filter;
    if (t.length == 0 && !o)
      return this;
    if (n && (t = t.slice().sort(ec)), this.isEmpty)
      return t.length ? ce.of(t) : this;
    let l = new Am(this, null, -1).goto(0), a = 0, c = [], h = new Ni();
    for (; l.value || a < t.length; )
      if (a < t.length && (l.from - t[a].from || l.startSide - t[a].value.startSide) >= 0) {
        let f = t[a++];
        h.addInner(f.from, f.to, f.value) || c.push(f);
      } else l.rangeIndex == 1 && l.chunkIndex < this.chunk.length && (a == t.length || this.chunkEnd(l.chunkIndex) < t[a].from) && (!o || s > this.chunkEnd(l.chunkIndex) || r < this.chunkPos[l.chunkIndex]) && h.addChunk(this.chunkPos[l.chunkIndex], this.chunk[l.chunkIndex]) ? l.nextChunk() : ((!o || s > l.to || r < l.from || o(l.from, l.to, l.value)) && (h.addInner(l.from, l.to, l.value) || c.push(Ja.create(l.from, l.to, l.value))), l.next());
    return h.finishInner(this.nextLayer.isEmpty && !c.length ? ce.empty : this.nextLayer.update({ add: c, filter: o, filterFrom: s, filterTo: r }));
  }
  /**
  Map this range set through a set of changes, return the new set.
  */
  map(e) {
    if (e.empty || this.isEmpty)
      return this;
    let t = [], n = [], s = -1;
    for (let o = 0; o < this.chunk.length; o++) {
      let l = this.chunkPos[o], a = this.chunk[o], c = e.touchesRange(l, l + a.length);
      if (c === !1)
        s = Math.max(s, a.maxPoint), t.push(a), n.push(e.mapPos(l));
      else if (c === !0) {
        let { mapped: h, pos: f } = a.map(l, e);
        h && (s = Math.max(s, h.maxPoint), t.push(h), n.push(f));
      }
    }
    let r = this.nextLayer.map(e);
    return t.length == 0 ? r : new ce(n, t, r || ce.empty, s);
  }
  /**
  Iterate over the ranges that touch the region `from` to `to`,
  calling `f` for each. There is no guarantee that the ranges will
  be reported in any specific order. When the callback returns
  `false`, iteration stops.
  */
  between(e, t, n) {
    if (!this.isEmpty) {
      for (let s = 0; s < this.chunk.length; s++) {
        let r = this.chunkPos[s], o = this.chunk[s];
        if (t >= r && e <= r + o.length && o.between(r, e - r, t - r, n) === !1)
          return;
      }
      this.nextLayer.between(e, t, n);
    }
  }
  /**
  Iterate over the ranges in this set, in order, including all
  ranges that end at or after `from`.
  */
  iter(e = 0) {
    return Js.from([this]).goto(e);
  }
  /**
  @internal
  */
  get isEmpty() {
    return this.nextLayer == this;
  }
  /**
  Iterate over the ranges in a collection of sets, in order,
  starting from `from`.
  */
  static iter(e, t = 0) {
    return Js.from(e).goto(t);
  }
  /**
  Iterate over two groups of sets, calling methods on `comparator`
  to notify it of possible differences.
  */
  static compare(e, t, n, s, r = -1) {
    let o = e.filter((f) => f.maxPoint > 0 || !f.isEmpty && f.maxPoint >= r), l = t.filter((f) => f.maxPoint > 0 || !f.isEmpty && f.maxPoint >= r), a = su(o, l, n), c = new Ss(o, a, r), h = new Ss(l, a, r);
    n.iterGaps((f, u, d) => ru(c, f, h, u, d, s)), n.empty && n.length == 0 && ru(c, 0, h, 0, 0, s);
  }
  /**
  Compare the contents of two groups of range sets, returning true
  if they are equivalent in the given range.
  */
  static eq(e, t, n = 0, s) {
    s == null && (s = 999999999);
    let r = e.filter((h) => !h.isEmpty && t.indexOf(h) < 0), o = t.filter((h) => !h.isEmpty && e.indexOf(h) < 0);
    if (r.length != o.length)
      return !1;
    if (!r.length)
      return !0;
    let l = su(r, o), a = new Ss(r, l, 0).goto(n), c = new Ss(o, l, 0).goto(n);
    for (; ; ) {
      if (a.to != c.to || !tc(a.active, c.active) || a.point && (!c.point || !mh(a.point, c.point)))
        return !1;
      if (a.to > s)
        return !0;
      a.next(), c.next();
    }
  }
  /**
  Iterate over a group of range sets at the same time, notifying
  the iterator about the ranges covering every given piece of
  content. Returns the open count (see
  [`SpanIterator.span`](https://codemirror.net/6/docs/ref/#state.SpanIterator.span)) at the end
  of the iteration.
  */
  static spans(e, t, n, s, r = -1) {
    let o = new Ss(e, null, r).goto(t), l = t, a = o.openStart;
    for (; ; ) {
      let c = Math.min(o.to, n);
      if (o.point) {
        let h = o.activeForPoint(o.to), f = o.pointFrom < t ? h.length + 1 : o.point.startSide < 0 ? h.length : Math.min(h.length, a);
        s.point(l, c, o.point, h, f, o.pointRank), a = Math.min(o.openEnd(c), h.length);
      } else c > l && (s.span(l, c, o.active, a), a = o.openEnd(c));
      if (o.to > n)
        return a + (o.point && o.to > n ? 1 : 0);
      l = o.to, o.next();
    }
  }
  /**
  Create a range set for the given range or array of ranges. By
  default, this expects the ranges to be _sorted_ (by start
  position and, if two start at the same position,
  `value.startSide`). You can pass `true` as second argument to
  cause the method to sort them.
  */
  static of(e, t = !1) {
    let n = new Ni();
    for (let s of e instanceof Ja ? [e] : t ? Fx(e) : e)
      n.add(s.from, s.to, s.value);
    return n.finish();
  }
  /**
  Join an array of range sets into a single set.
  */
  static join(e) {
    if (!e.length)
      return ce.empty;
    let t = e[e.length - 1];
    for (let n = e.length - 2; n >= 0; n--)
      for (let s = e[n]; s != ce.empty; s = s.nextLayer)
        t = new ce(s.chunkPos, s.chunk, t, Math.max(s.maxPoint, t.maxPoint));
    return t;
  }
}
ce.empty = /* @__PURE__ */ new ce([], [], null, -1);
function Fx(i) {
  if (i.length > 1)
    for (let e = i[0], t = 1; t < i.length; t++) {
      let n = i[t];
      if (ec(e, n) > 0)
        return i.slice().sort(ec);
      e = n;
    }
  return i;
}
ce.empty.nextLayer = ce.empty;
class Ni {
  finishChunk(e) {
    this.chunks.push(new gh(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, e && (this.from = [], this.to = [], this.value = []);
  }
  /**
  Create an empty builder.
  */
  constructor() {
    this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null;
  }
  /**
  Add a range. Ranges should be added in sorted (by `from` and
  `value.startSide`) order.
  */
  add(e, t, n) {
    this.addInner(e, t, n) || (this.nextLayer || (this.nextLayer = new Ni())).add(e, t, n);
  }
  /**
  @internal
  */
  addInner(e, t, n) {
    let s = e - this.lastTo || n.startSide - this.last.endSide;
    if (s <= 0 && (e - this.lastFrom || n.startSide - this.last.startSide) < 0)
      throw new Error("Ranges must be added sorted by `from` position and `startSide`");
    return s < 0 ? !1 : (this.from.length == 250 && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = e), this.from.push(e - this.chunkStart), this.to.push(t - this.chunkStart), this.last = n, this.lastFrom = e, this.lastTo = t, this.value.push(n), n.point && (this.maxPoint = Math.max(this.maxPoint, t - e)), !0);
  }
  /**
  @internal
  */
  addChunk(e, t) {
    if ((e - this.lastTo || t.value[0].startSide - this.last.endSide) < 0)
      return !1;
    this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, t.maxPoint), this.chunks.push(t), this.chunkPos.push(e);
    let n = t.value.length - 1;
    return this.last = t.value[n], this.lastFrom = t.from[n] + e, this.lastTo = t.to[n] + e, !0;
  }
  /**
  Finish the range set. Returns the new set. The builder can't be
  used anymore after this has been called.
  */
  finish() {
    return this.finishInner(ce.empty);
  }
  /**
  @internal
  */
  finishInner(e) {
    if (this.from.length && this.finishChunk(!1), this.chunks.length == 0)
      return e;
    let t = ce.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(e) : e, this.setMaxPoint);
    return this.from = null, t;
  }
}
function su(i, e, t) {
  let n = /* @__PURE__ */ new Map();
  for (let r of i)
    for (let o = 0; o < r.chunk.length; o++)
      r.chunk[o].maxPoint <= 0 && n.set(r.chunk[o], r.chunkPos[o]);
  let s = /* @__PURE__ */ new Set();
  for (let r of e)
    for (let o = 0; o < r.chunk.length; o++) {
      let l = n.get(r.chunk[o]);
      l != null && (t ? t.mapPos(l) : l) == r.chunkPos[o] && !(t != null && t.touchesRange(l, l + r.chunk[o].length)) && s.add(r.chunk[o]);
    }
  return s;
}
class Am {
  constructor(e, t, n, s = 0) {
    this.layer = e, this.skip = t, this.minPoint = n, this.rank = s;
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  get endSide() {
    return this.value ? this.value.endSide : 0;
  }
  goto(e, t = -1e9) {
    return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(e, t, !1), this;
  }
  gotoInner(e, t, n) {
    for (; this.chunkIndex < this.layer.chunk.length; ) {
      let s = this.layer.chunk[this.chunkIndex];
      if (!(this.skip && this.skip.has(s) || this.layer.chunkEnd(this.chunkIndex) < e || s.maxPoint < this.minPoint))
        break;
      this.chunkIndex++, n = !1;
    }
    if (this.chunkIndex < this.layer.chunk.length) {
      let s = this.layer.chunk[this.chunkIndex].findIndex(e - this.layer.chunkPos[this.chunkIndex], t, !0);
      (!n || this.rangeIndex < s) && this.setRangeIndex(s);
    }
    this.next();
  }
  forward(e, t) {
    (this.to - e || this.endSide - t) < 0 && this.gotoInner(e, t, !0);
  }
  next() {
    for (; ; )
      if (this.chunkIndex == this.layer.chunk.length) {
        this.from = this.to = 1e9, this.value = null;
        break;
      } else {
        let e = this.layer.chunkPos[this.chunkIndex], t = this.layer.chunk[this.chunkIndex], n = e + t.from[this.rangeIndex];
        if (this.from = n, this.to = e + t.to[this.rangeIndex], this.value = t.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint)
          break;
      }
  }
  setRangeIndex(e) {
    if (e == this.layer.chunk[this.chunkIndex].value.length) {
      if (this.chunkIndex++, this.skip)
        for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]); )
          this.chunkIndex++;
      this.rangeIndex = 0;
    } else
      this.rangeIndex = e;
  }
  nextChunk() {
    this.chunkIndex++, this.rangeIndex = 0, this.next();
  }
  compare(e) {
    return this.from - e.from || this.startSide - e.startSide || this.rank - e.rank || this.to - e.to || this.endSide - e.endSide;
  }
}
class Js {
  constructor(e) {
    this.heap = e;
  }
  static from(e, t = null, n = -1) {
    let s = [];
    for (let r = 0; r < e.length; r++)
      for (let o = e[r]; !o.isEmpty; o = o.nextLayer)
        o.maxPoint >= n && s.push(new Am(o, t, n, r));
    return s.length == 1 ? s[0] : new Js(s);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(e, t = -1e9) {
    for (let n of this.heap)
      n.goto(e, t);
    for (let n = this.heap.length >> 1; n >= 0; n--)
      Yl(this.heap, n);
    return this.next(), this;
  }
  forward(e, t) {
    for (let n of this.heap)
      n.forward(e, t);
    for (let n = this.heap.length >> 1; n >= 0; n--)
      Yl(this.heap, n);
    (this.to - e || this.value.endSide - t) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0)
      this.from = this.to = 1e9, this.value = null, this.rank = -1;
    else {
      let e = this.heap[0];
      this.from = e.from, this.to = e.to, this.value = e.value, this.rank = e.rank, e.value && e.next(), Yl(this.heap, 0);
    }
  }
}
function Yl(i, e) {
  for (let t = i[e]; ; ) {
    let n = (e << 1) + 1;
    if (n >= i.length)
      break;
    let s = i[n];
    if (n + 1 < i.length && s.compare(i[n + 1]) >= 0 && (s = i[n + 1], n++), t.compare(s) < 0)
      break;
    i[n] = t, i[e] = s, e = n;
  }
}
class Ss {
  constructor(e, t, n) {
    this.minPoint = n, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = Js.from(e, t, n);
  }
  goto(e, t = -1e9) {
    return this.cursor.goto(e, t), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = e, this.endSide = t, this.openStart = -1, this.next(), this;
  }
  forward(e, t) {
    for (; this.minActive > -1 && (this.activeTo[this.minActive] - e || this.active[this.minActive].endSide - t) < 0; )
      this.removeActive(this.minActive);
    this.cursor.forward(e, t);
  }
  removeActive(e) {
    Rr(this.active, e), Rr(this.activeTo, e), Rr(this.activeRank, e), this.minActive = ou(this.active, this.activeTo);
  }
  addActive(e) {
    let t = 0, { value: n, to: s, rank: r } = this.cursor;
    for (; t < this.activeRank.length && (r - this.activeRank[t] || s - this.activeTo[t]) > 0; )
      t++;
    _r(this.active, t, n), _r(this.activeTo, t, s), _r(this.activeRank, t, r), e && _r(e, t, this.cursor.from), this.minActive = ou(this.active, this.activeTo);
  }
  // After calling this, if `this.point` != null, the next range is a
  // point. Otherwise, it's a regular range, covered by `this.active`.
  next() {
    let e = this.to, t = this.point;
    this.point = null;
    let n = this.openStart < 0 ? [] : null;
    for (; ; ) {
      let s = this.minActive;
      if (s > -1 && (this.activeTo[s] - this.cursor.from || this.active[s].endSide - this.cursor.startSide) < 0) {
        if (this.activeTo[s] > e) {
          this.to = this.activeTo[s], this.endSide = this.active[s].endSide;
          break;
        }
        this.removeActive(s), n && Rr(n, s);
      } else if (this.cursor.value)
        if (this.cursor.from > e) {
          this.to = this.cursor.from, this.endSide = this.cursor.startSide;
          break;
        } else {
          let r = this.cursor.value;
          if (!r.point)
            this.addActive(n), this.cursor.next();
          else if (t && this.cursor.to == this.to && this.cursor.from < this.cursor.to)
            this.cursor.next();
          else {
            this.point = r, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = r.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
            break;
          }
        }
      else {
        this.to = this.endSide = 1e9;
        break;
      }
    }
    if (n) {
      this.openStart = 0;
      for (let s = n.length - 1; s >= 0 && n[s] < e; s--)
        this.openStart++;
    }
  }
  activeForPoint(e) {
    if (!this.active.length)
      return this.active;
    let t = [];
    for (let n = this.active.length - 1; n >= 0 && !(this.activeRank[n] < this.pointRank); n--)
      (this.activeTo[n] > e || this.activeTo[n] == e && this.active[n].endSide >= this.point.endSide) && t.push(this.active[n]);
    return t.reverse();
  }
  openEnd(e) {
    let t = 0;
    for (let n = this.activeTo.length - 1; n >= 0 && this.activeTo[n] > e; n--)
      t++;
    return t;
  }
}
function ru(i, e, t, n, s, r) {
  i.goto(e), t.goto(n);
  let o = n + s, l = n, a = n - e, c = !!r.boundChange;
  for (let h = !1; ; ) {
    let f = i.to + a - t.to, u = f || i.endSide - t.endSide, d = u < 0 ? i.to + a : t.to, p = Math.min(d, o);
    if (i.point || t.point ? (i.point && t.point && mh(i.point, t.point) && tc(i.activeForPoint(i.to), t.activeForPoint(t.to)) || r.comparePoint(l, p, i.point, t.point), h = !1) : (h && r.boundChange(l), p > l && !tc(i.active, t.active) && r.compareRange(l, p, i.active, t.active), c && p < o && (f || i.openEnd(d) != t.openEnd(d)) && (h = !0)), d > o)
      break;
    l = d, u <= 0 && i.next(), u >= 0 && t.next();
  }
}
function tc(i, e) {
  if (i.length != e.length)
    return !1;
  for (let t = 0; t < i.length; t++)
    if (i[t] != e[t] && !mh(i[t], e[t]))
      return !1;
  return !0;
}
function Rr(i, e) {
  for (let t = e, n = i.length - 1; t < n; t++)
    i[t] = i[t + 1];
  i.pop();
}
function _r(i, e, t) {
  for (let n = i.length - 1; n >= e; n--)
    i[n + 1] = i[n];
  i[e] = t;
}
function ou(i, e) {
  let t = -1, n = 1e9;
  for (let s = 0; s < e.length; s++)
    (e[s] - n || i[s].endSide - i[t].endSide) < 0 && (t = s, n = e[s]);
  return t;
}
function ds(i, e, t = i.length) {
  let n = 0;
  for (let s = 0; s < t && s < i.length; )
    i.charCodeAt(s) == 9 ? (n += e - n % e, s++) : (n++, s = ze(i, s));
  return n;
}
function ic(i, e, t, n) {
  for (let s = 0, r = 0; ; ) {
    if (r >= e)
      return s;
    if (s == i.length)
      break;
    r += i.charCodeAt(s) == 9 ? t - r % t : 1, s = ze(i, s);
  }
  return n === !0 ? -1 : i.length;
}
const nc = "ͼ", lu = typeof Symbol > "u" ? "__" + nc : Symbol.for(nc), sc = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : Symbol("styleSet"), au = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {};
class Ki {
  // :: (Object<Style>, ?{finish: ?(string) → string})
  // Create a style module from the given spec.
  //
  // When `finish` is given, it is called on regular (non-`@`)
  // selectors (after `&` expansion) to compute the final selector.
  constructor(e, t) {
    this.rules = [];
    let { finish: n } = t || {};
    function s(o) {
      return /^@/.test(o) ? [o] : o.split(/,\s*/);
    }
    function r(o, l, a, c) {
      let h = [], f = /^@(\w+)\b/.exec(o[0]), u = f && f[1] == "keyframes";
      if (f && l == null) return a.push(o[0] + ";");
      for (let d in l) {
        let p = l[d];
        if (/&/.test(d))
          r(
            d.split(/,\s*/).map((m) => o.map((g) => m.replace(/&/, g))).reduce((m, g) => m.concat(g)),
            p,
            a
          );
        else if (p && typeof p == "object") {
          if (!f) throw new RangeError("The value of a property (" + d + ") should be a primitive value.");
          r(s(d), p, h, u);
        } else p != null && h.push(d.replace(/_.*/, "").replace(/[A-Z]/g, (m) => "-" + m.toLowerCase()) + ": " + p + ";");
      }
      (h.length || u) && a.push((n && !f && !c ? o.map(n) : o).join(", ") + " {" + h.join(" ") + "}");
    }
    for (let o in e) r(s(o), e[o], this.rules);
  }
  // :: () → string
  // Returns a string containing the module's CSS rules.
  getRules() {
    return this.rules.join(`
`);
  }
  // :: () → string
  // Generate a new unique CSS class name.
  static newName() {
    let e = au[lu] || 1;
    return au[lu] = e + 1, nc + e.toString(36);
  }
  // :: (union<Document, ShadowRoot>, union<[StyleModule], StyleModule>, ?{nonce: ?string})
  //
  // Mount the given set of modules in the given DOM root, which ensures
  // that the CSS rules defined by the module are available in that
  // context.
  //
  // Rules are only added to the document once per root.
  //
  // Rule order will follow the order of the modules, so that rules from
  // modules later in the array take precedence of those from earlier
  // modules. If you call this function multiple times for the same root
  // in a way that changes the order of already mounted modules, the old
  // order will be changed.
  //
  // If a Content Security Policy nonce is provided, it is added to
  // the `<style>` tag generated by the library.
  static mount(e, t, n) {
    let s = e[sc], r = n && n.nonce;
    s ? r && s.setNonce(r) : s = new qx(e, r), s.mount(Array.isArray(t) ? t : [t], e);
  }
}
let cu = /* @__PURE__ */ new Map();
class qx {
  constructor(e, t) {
    let n = e.ownerDocument || e, s = n.defaultView;
    if (!e.head && e.adoptedStyleSheets && s.CSSStyleSheet) {
      let r = cu.get(n);
      if (r) return e[sc] = r;
      this.sheet = new s.CSSStyleSheet(), cu.set(n, this);
    } else
      this.styleTag = n.createElement("style"), t && this.styleTag.setAttribute("nonce", t);
    this.modules = [], e[sc] = this;
  }
  mount(e, t) {
    let n = this.sheet, s = 0, r = 0;
    for (let o = 0; o < e.length; o++) {
      let l = e[o], a = this.modules.indexOf(l);
      if (a < r && a > -1 && (this.modules.splice(a, 1), r--, a = -1), a == -1) {
        if (this.modules.splice(r++, 0, l), n) for (let c = 0; c < l.rules.length; c++)
          n.insertRule(l.rules[c], s++);
      } else {
        for (; r < a; ) s += this.modules[r++].rules.length;
        s += l.rules.length, r++;
      }
    }
    if (n)
      t.adoptedStyleSheets.indexOf(this.sheet) < 0 && (t.adoptedStyleSheets = [this.sheet, ...t.adoptedStyleSheets]);
    else {
      let o = "";
      for (let a = 0; a < this.modules.length; a++)
        o += this.modules[a].getRules() + `
`;
      this.styleTag.textContent = o;
      let l = t.head || t;
      this.styleTag.parentNode != l && l.insertBefore(this.styleTag, l.firstChild);
    }
  }
  setNonce(e) {
    this.styleTag && this.styleTag.getAttribute("nonce") != e && this.styleTag.setAttribute("nonce", e);
  }
}
var Zi = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, er = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, Hx = typeof navigator < "u" && /Mac/.test(navigator.platform), Ux = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var tt = 0; tt < 10; tt++) Zi[48 + tt] = Zi[96 + tt] = String(tt);
for (var tt = 1; tt <= 24; tt++) Zi[tt + 111] = "F" + tt;
for (var tt = 65; tt <= 90; tt++)
  Zi[tt] = String.fromCharCode(tt + 32), er[tt] = String.fromCharCode(tt);
for (var Kl in Zi) er.hasOwnProperty(Kl) || (er[Kl] = Zi[Kl]);
function Gx(i) {
  var e = Hx && i.metaKey && i.shiftKey && !i.ctrlKey && !i.altKey || Ux && i.shiftKey && i.key && i.key.length == 1 || i.key == "Unidentified", t = !e && i.key || (i.shiftKey ? er : Zi)[i.keyCode] || i.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
function Ce() {
  var i = arguments[0];
  typeof i == "string" && (i = document.createElement(i));
  var e = 1, t = arguments[1];
  if (t && typeof t == "object" && t.nodeType == null && !Array.isArray(t)) {
    for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
      var s = t[n];
      typeof s == "string" ? i.setAttribute(n, s) : s != null && (i[n] = s);
    }
    e++;
  }
  for (; e < arguments.length; e++) $m(i, arguments[e]);
  return i;
}
function $m(i, e) {
  if (typeof e == "string")
    i.appendChild(document.createTextNode(e));
  else if (e != null) if (e.nodeType != null)
    i.appendChild(e);
  else if (Array.isArray(e))
    for (var t = 0; t < e.length; t++) $m(i, e[t]);
  else
    throw new RangeError("Unsupported child node: " + e);
}
let ct = typeof navigator < "u" ? navigator : { userAgent: "", vendor: "", platform: "" }, rc = typeof document < "u" ? document : { documentElement: { style: {} } };
const oc = /* @__PURE__ */ /Edge\/(\d+)/.exec(ct.userAgent), Dm = /* @__PURE__ */ /MSIE \d/.test(ct.userAgent), lc = /* @__PURE__ */ /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(ct.userAgent), vl = !!(Dm || lc || oc), hu = !vl && /* @__PURE__ */ /gecko\/(\d+)/i.test(ct.userAgent), Zl = !vl && /* @__PURE__ */ /Chrome\/(\d+)/.exec(ct.userAgent), fu = "webkitFontSmoothing" in rc.documentElement.style, ac = !vl && /* @__PURE__ */ /Apple Computer/.test(ct.vendor), uu = ac && (/* @__PURE__ */ /Mobile\/\w+/.test(ct.userAgent) || ct.maxTouchPoints > 2);
var B = {
  mac: uu || /* @__PURE__ */ /Mac/.test(ct.platform),
  windows: /* @__PURE__ */ /Win/.test(ct.platform),
  linux: /* @__PURE__ */ /Linux|X11/.test(ct.platform),
  ie: vl,
  ie_version: Dm ? rc.documentMode || 6 : lc ? +lc[1] : oc ? +oc[1] : 0,
  gecko: hu,
  gecko_version: hu ? +(/* @__PURE__ */ /Firefox\/(\d+)/.exec(ct.userAgent) || [0, 0])[1] : 0,
  chrome: !!Zl,
  chrome_version: Zl ? +Zl[1] : 0,
  ios: uu,
  android: /* @__PURE__ */ /Android\b/.test(ct.userAgent),
  webkit: fu,
  webkit_version: fu ? +(/* @__PURE__ */ /\bAppleWebKit\/(\d+)/.exec(ct.userAgent) || [0, 0])[1] : 0,
  safari: ac,
  safari_version: ac ? +(/* @__PURE__ */ /\bVersion\/(\d+(\.\d+)?)/.exec(ct.userAgent) || [0, 0])[1] : 0,
  tabSize: rc.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
};
function Oh(i, e) {
  for (let t in i)
    t == "class" && e.class ? e.class += " " + i.class : t == "style" && e.style ? e.style += ";" + i.style : e[t] = i[t];
  return e;
}
const Qo = /* @__PURE__ */ Object.create(null);
function bh(i, e, t) {
  if (i == e)
    return !0;
  i || (i = Qo), e || (e = Qo);
  let n = Object.keys(i), s = Object.keys(e);
  if (n.length - 0 != s.length - 0)
    return !1;
  for (let r of n)
    if (r != t && (s.indexOf(r) == -1 || i[r] !== e[r]))
      return !1;
  return !0;
}
function zx(i, e) {
  for (let t = i.attributes.length - 1; t >= 0; t--) {
    let n = i.attributes[t].name;
    e[n] == null && i.removeAttribute(n);
  }
  for (let t in e) {
    let n = e[t];
    t == "style" ? i.style.cssText = n : i.getAttribute(t) != n && i.setAttribute(t, n);
  }
}
function du(i, e, t) {
  let n = !1;
  if (e)
    for (let s in e)
      t && s in t || (n = !0, s == "style" ? i.style.cssText = "" : i.removeAttribute(s));
  if (t)
    for (let s in t)
      e && e[s] == t[s] || (n = !0, s == "style" ? i.style.cssText = t[s] : i.setAttribute(s, t[s]));
  return n;
}
function jx(i) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t = 0; t < i.attributes.length; t++) {
    let n = i.attributes[t];
    e[n.name] = n.value;
  }
  return e;
}
class Vi {
  /**
  Compare this instance to another instance of the same type.
  (TypeScript can't express this, but only instances of the same
  specific class will be passed to this method.) This is used to
  avoid redrawing widgets when they are replaced by a new
  decoration of the same type. The default implementation just
  returns `false`, which will cause new instances of the widget to
  always be redrawn.
  */
  eq(e) {
    return !1;
  }
  /**
  Update a DOM element created by a widget of the same type (but
  different, non-`eq` content) to reflect this widget. May return
  true to indicate that it could update, false to indicate it
  couldn't (in which case the widget will be redrawn). The default
  implementation just returns false.
  */
  updateDOM(e, t, n) {
    return !1;
  }
  /**
  @internal
  */
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  /**
  The estimated height this widget will have, to be used when
  estimating the height of content that hasn't been drawn. May
  return -1 to indicate you don't know. The default implementation
  returns -1.
  */
  get estimatedHeight() {
    return -1;
  }
  /**
  For inline widgets that are displayed inline (as opposed to
  `inline-block`) and introduce line breaks (through `<br>` tags
  or textual newlines), this must indicate the amount of line
  breaks they introduce. Defaults to 0.
  */
  get lineBreaks() {
    return 0;
  }
  /**
  Can be used to configure which kinds of events inside the widget
  should be ignored by the editor. The default is to ignore all
  events.
  */
  ignoreEvent(e) {
    return !0;
  }
  /**
  Override the way screen coordinates for positions at/in the
  widget are found. `pos` will be the offset into the widget, and
  `side` the side of the position that is being queried—less than
  zero for before, greater than zero for after, and zero for
  directly at that position.
  */
  coordsAt(e, t, n) {
    return null;
  }
  /**
  @internal
  */
  get isHidden() {
    return !1;
  }
  /**
  @internal
  */
  get editable() {
    return !1;
  }
  /**
  This is called when the an instance of the widget is removed
  from the editor view.
  */
  destroy(e) {
  }
}
var nt = /* @__PURE__ */ function(i) {
  return i[i.Text = 0] = "Text", i[i.WidgetBefore = 1] = "WidgetBefore", i[i.WidgetAfter = 2] = "WidgetAfter", i[i.WidgetRange = 3] = "WidgetRange", i;
}(nt || (nt = {}));
class Y extends Yi {
  constructor(e, t, n, s) {
    super(), this.startSide = e, this.endSide = t, this.widget = n, this.spec = s;
  }
  /**
  @internal
  */
  get heightRelevant() {
    return !1;
  }
  /**
  Create a mark decoration, which influences the styling of the
  content in its range. Nested mark decorations will cause nested
  DOM elements to be created. Nesting order is determined by
  precedence of the [facet](https://codemirror.net/6/docs/ref/#view.EditorView^decorations), with
  the higher-precedence decorations creating the inner DOM nodes.
  Such elements are split on line boundaries and on the boundaries
  of lower-precedence decorations.
  */
  static mark(e) {
    return new Sr(e);
  }
  /**
  Create a widget decoration, which displays a DOM element at the
  given position.
  */
  static widget(e) {
    let t = Math.max(-1e4, Math.min(1e4, e.side || 0)), n = !!e.block;
    return t += n && !e.inlineOrder ? t > 0 ? 3e8 : -4e8 : t > 0 ? 1e8 : -1e8, new kn(e, t, t, n, e.widget || null, !1);
  }
  /**
  Create a replace decoration which replaces the given range with
  a widget, or simply hides it.
  */
  static replace(e) {
    let t = !!e.block, n, s;
    if (e.isBlockGap)
      n = -5e8, s = 4e8;
    else {
      let { start: r, end: o } = Nm(e, t);
      n = (r ? t ? -3e8 : -1 : 5e8) - 1, s = (o ? t ? 2e8 : 1 : -6e8) + 1;
    }
    return new kn(e, n, s, t, e.widget || null, !0);
  }
  /**
  Create a line decoration, which can add DOM attributes to the
  line starting at the given position.
  */
  static line(e) {
    return new wr(e);
  }
  /**
  Build a [`DecorationSet`](https://codemirror.net/6/docs/ref/#view.DecorationSet) from the given
  decorated range or ranges. If the ranges aren't already sorted,
  pass `true` for `sort` to make the library sort them for you.
  */
  static set(e, t = !1) {
    return ce.of(e, t);
  }
  /**
  @internal
  */
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : !1;
  }
}
Y.none = ce.empty;
class Sr extends Y {
  constructor(e) {
    let { start: t, end: n } = Nm(e);
    super(t ? -1 : 5e8, n ? 1 : -6e8, null, e), this.tagName = e.tagName || "span", this.attrs = e.class && e.attributes ? Oh(e.attributes, { class: e.class }) : e.class ? { class: e.class } : e.attributes || Qo;
  }
  eq(e) {
    return this == e || e instanceof Sr && this.tagName == e.tagName && bh(this.attrs, e.attrs);
  }
  range(e, t = e) {
    if (e >= t)
      throw new RangeError("Mark decorations may not be empty");
    return super.range(e, t);
  }
}
Sr.prototype.point = !1;
class wr extends Y {
  constructor(e) {
    super(-2e8, -2e8, null, e);
  }
  eq(e) {
    return e instanceof wr && this.spec.class == e.spec.class && bh(this.spec.attributes, e.spec.attributes);
  }
  range(e, t = e) {
    if (t != e)
      throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(e, t);
  }
}
wr.prototype.mapMode = ft.TrackBefore;
wr.prototype.point = !0;
class kn extends Y {
  constructor(e, t, n, s, r, o) {
    super(t, n, r, e), this.block = s, this.isReplace = o, this.mapMode = s ? t <= 0 ? ft.TrackBefore : ft.TrackAfter : ft.TrackDel;
  }
  // Only relevant when this.block == true
  get type() {
    return this.startSide != this.endSide ? nt.WidgetRange : this.startSide <= 0 ? nt.WidgetBefore : nt.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(e) {
    return e instanceof kn && Yx(this.widget, e.widget) && this.block == e.block && this.startSide == e.startSide && this.endSide == e.endSide;
  }
  range(e, t = e) {
    if (this.isReplace && (e > t || e == t && this.startSide > 0 && this.endSide <= 0))
      throw new RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && t != e)
      throw new RangeError("Widget decorations can only have zero-length ranges");
    return super.range(e, t);
  }
}
kn.prototype.point = !0;
function Nm(i, e = !1) {
  let { inclusiveStart: t, inclusiveEnd: n } = i;
  return t == null && (t = i.inclusive), n == null && (n = i.inclusive), { start: t ?? e, end: n ?? e };
}
function Yx(i, e) {
  return i == e || !!(i && e && i.compare(e));
}
function Yn(i, e, t, n = 0) {
  let s = t.length - 1;
  s >= 0 && t[s] + n >= i ? t[s] = Math.max(t[s], e) : t.push(i, e);
}
class tr extends Yi {
  constructor(e, t, n) {
    super(), this.tagName = e, this.attributes = t, this.rank = n;
  }
  eq(e) {
    return e == this || e instanceof tr && this.tagName == e.tagName && bh(this.attributes, e.attributes);
  }
  /**
  Create a block wrapper object with the given tag name and
  attributes.
  */
  static create(e) {
    return new tr(e.tagName, e.attributes || Qo, e.rank == null ? 50 : Math.max(0, Math.min(e.rank, 100)));
  }
  /**
  Create a range set from the given block wrapper ranges.
  */
  static set(e, t = !1) {
    return ce.of(e, t);
  }
}
tr.prototype.startSide = tr.prototype.endSide = -1;
function ir(i) {
  let e;
  return i.nodeType == 11 ? e = i.getSelection ? i : i.ownerDocument : e = i, e.getSelection();
}
function cc(i, e) {
  return e ? i == e || i.contains(e.nodeType != 1 ? e.parentNode : e) : !1;
}
function Xs(i, e) {
  if (!e.anchorNode)
    return !1;
  try {
    return cc(i, e.anchorNode);
  } catch {
    return !1;
  }
}
function fo(i) {
  return i.nodeType == 3 ? nr(i, 0, i.nodeValue.length).getClientRects() : i.nodeType == 1 ? i.getClientRects() : [];
}
function Ws(i, e, t, n) {
  return t ? pu(i, e, t, n, -1) || pu(i, e, t, n, 1) : !1;
}
function Ji(i) {
  for (var e = 0; ; e++)
    if (i = i.previousSibling, !i)
      return e;
}
function Io(i) {
  return i.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(i.nodeName);
}
function pu(i, e, t, n, s) {
  for (; ; ) {
    if (i == t && e == n)
      return !0;
    if (e == (s < 0 ? 0 : Ri(i))) {
      if (i.nodeName == "DIV")
        return !1;
      let r = i.parentNode;
      if (!r || r.nodeType != 1)
        return !1;
      e = Ji(i) + (s < 0 ? 0 : 1), i = r;
    } else if (i.nodeType == 1) {
      if (i = i.childNodes[e + (s < 0 ? -1 : 0)], i.nodeType == 1 && i.contentEditable == "false")
        return !1;
      e = s < 0 ? Ri(i) : 0;
    } else
      return !1;
  }
}
function Ri(i) {
  return i.nodeType == 3 ? i.nodeValue.length : i.childNodes.length;
}
function Vo(i, e) {
  let t = e ? i.left : i.right;
  return { left: t, right: t, top: i.top, bottom: i.bottom };
}
function Kx(i) {
  let e = i.visualViewport;
  return e ? {
    left: 0,
    right: e.width,
    top: 0,
    bottom: e.height
  } : {
    left: 0,
    right: i.innerWidth,
    top: 0,
    bottom: i.innerHeight
  };
}
function Rm(i, e) {
  let t = e.width / i.offsetWidth, n = e.height / i.offsetHeight;
  return (t > 0.995 && t < 1.005 || !isFinite(t) || Math.abs(e.width - i.offsetWidth) < 1) && (t = 1), (n > 0.995 && n < 1.005 || !isFinite(n) || Math.abs(e.height - i.offsetHeight) < 1) && (n = 1), { scaleX: t, scaleY: n };
}
function Zx(i, e, t, n, s, r, o, l) {
  let a = i.ownerDocument, c = a.defaultView || window;
  for (let h = i, f = !1; h && !f; )
    if (h.nodeType == 1) {
      let u, d = h == a.body, p = 1, m = 1;
      if (d)
        u = Kx(c);
      else {
        if (/^(fixed|sticky)$/.test(getComputedStyle(h).position) && (f = !0), h.scrollHeight <= h.clientHeight && h.scrollWidth <= h.clientWidth) {
          h = h.assignedSlot || h.parentNode;
          continue;
        }
        let x = h.getBoundingClientRect();
        ({ scaleX: p, scaleY: m } = Rm(h, x)), u = {
          left: x.left,
          right: x.left + h.clientWidth * p,
          top: x.top,
          bottom: x.top + h.clientHeight * m
        };
      }
      let g = 0, b = 0;
      if (s == "nearest")
        e.top < u.top + o ? (b = e.top - (u.top + o), t > 0 && e.bottom > u.bottom + b && (b = e.bottom - u.bottom + o)) : e.bottom > u.bottom - o && (b = e.bottom - u.bottom + o, t < 0 && e.top - b < u.top && (b = e.top - (u.top + o)));
      else {
        let x = e.bottom - e.top, S = u.bottom - u.top;
        b = (s == "center" && x <= S ? e.top + x / 2 - S / 2 : s == "start" || s == "center" && t < 0 ? e.top - o : e.bottom - S + o) - u.top;
      }
      if (n == "nearest" ? e.left < u.left + r ? (g = e.left - (u.left + r), t > 0 && e.right > u.right + g && (g = e.right - u.right + r)) : e.right > u.right - r && (g = e.right - u.right + r, t < 0 && e.left < u.left + g && (g = e.left - (u.left + r))) : g = (n == "center" ? e.left + (e.right - e.left) / 2 - (u.right - u.left) / 2 : n == "start" == l ? e.left - r : e.right - (u.right - u.left) + r) - u.left, g || b)
        if (d)
          c.scrollBy(g, b);
        else {
          let x = 0, S = 0;
          if (b) {
            let C = h.scrollTop;
            h.scrollTop += b / m, S = (h.scrollTop - C) * m;
          }
          if (g) {
            let C = h.scrollLeft;
            h.scrollLeft += g / p, x = (h.scrollLeft - C) * p;
          }
          e = {
            left: e.left - x,
            top: e.top - S,
            right: e.right - x,
            bottom: e.bottom - S
          }, x && Math.abs(x - g) < 1 && (n = "nearest"), S && Math.abs(S - b) < 1 && (s = "nearest");
        }
      if (d)
        break;
      (e.top < u.top || e.bottom > u.bottom || e.left < u.left || e.right > u.right) && (e = {
        left: Math.max(e.left, u.left),
        right: Math.min(e.right, u.right),
        top: Math.max(e.top, u.top),
        bottom: Math.min(e.bottom, u.bottom)
      }), h = h.assignedSlot || h.parentNode;
    } else if (h.nodeType == 11)
      h = h.host;
    else
      break;
}
function _m(i, e = !0) {
  let t = i.ownerDocument, n = null, s = null;
  for (let r = i.parentNode; r && !(r == t.body || (!e || n) && s); )
    if (r.nodeType == 1)
      !s && r.scrollHeight > r.clientHeight && (s = r), e && !n && r.scrollWidth > r.clientWidth && (n = r), r = r.assignedSlot || r.parentNode;
    else if (r.nodeType == 11)
      r = r.host;
    else
      break;
  return { x: n, y: s };
}
class Jx {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  eq(e) {
    return this.anchorNode == e.anchorNode && this.anchorOffset == e.anchorOffset && this.focusNode == e.focusNode && this.focusOffset == e.focusOffset;
  }
  setRange(e) {
    let { anchorNode: t, focusNode: n } = e;
    this.set(t, Math.min(e.anchorOffset, t ? Ri(t) : 0), n, Math.min(e.focusOffset, n ? Ri(n) : 0));
  }
  set(e, t, n, s) {
    this.anchorNode = e, this.anchorOffset = t, this.focusNode = n, this.focusOffset = s;
  }
}
let hn = null;
B.safari && B.safari_version >= 26 && (hn = !1);
function Mm(i) {
  if (i.setActive)
    return i.setActive();
  if (hn)
    return i.focus(hn);
  let e = [];
  for (let t = i; t && (e.push(t, t.scrollTop, t.scrollLeft), t != t.ownerDocument); t = t.parentNode)
    ;
  if (i.focus(hn == null ? {
    get preventScroll() {
      return hn = { preventScroll: !0 }, !0;
    }
  } : void 0), !hn) {
    hn = !1;
    for (let t = 0; t < e.length; ) {
      let n = e[t++], s = e[t++], r = e[t++];
      n.scrollTop != s && (n.scrollTop = s), n.scrollLeft != r && (n.scrollLeft = r);
    }
  }
}
let mu;
function nr(i, e, t = e) {
  let n = mu || (mu = document.createRange());
  return n.setEnd(i, t), n.setStart(i, e), n;
}
function Kn(i, e, t, n) {
  let s = { key: e, code: e, keyCode: t, which: t, cancelable: !0 };
  n && ({ altKey: s.altKey, ctrlKey: s.ctrlKey, shiftKey: s.shiftKey, metaKey: s.metaKey } = n);
  let r = new KeyboardEvent("keydown", s);
  r.synthetic = !0, i.dispatchEvent(r);
  let o = new KeyboardEvent("keyup", s);
  return o.synthetic = !0, i.dispatchEvent(o), r.defaultPrevented || o.defaultPrevented;
}
function e1(i) {
  for (; i; ) {
    if (i && (i.nodeType == 9 || i.nodeType == 11 && i.host))
      return i;
    i = i.assignedSlot || i.parentNode;
  }
  return null;
}
function t1(i, e) {
  let t = e.focusNode, n = e.focusOffset;
  if (!t || e.anchorNode != t || e.anchorOffset != n)
    return !1;
  for (n = Math.min(n, Ri(t)); ; )
    if (n) {
      if (t.nodeType != 1)
        return !1;
      let s = t.childNodes[n - 1];
      s.contentEditable == "false" ? n-- : (t = s, n = Ri(t));
    } else {
      if (t == i)
        return !0;
      n = Ji(t), t = t.parentNode;
    }
}
function Qm(i) {
  return i instanceof Window ? i.pageYOffset > Math.max(0, i.document.documentElement.scrollHeight - i.innerHeight - 4) : i.scrollTop > Math.max(1, i.scrollHeight - i.clientHeight - 4);
}
function Im(i, e) {
  for (let t = i, n = e; ; ) {
    if (t.nodeType == 3 && n > 0)
      return { node: t, offset: n };
    if (t.nodeType == 1 && n > 0) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[n - 1], n = Ri(t);
    } else if (t.parentNode && !Io(t))
      n = Ji(t), t = t.parentNode;
    else
      return null;
  }
}
function Vm(i, e) {
  for (let t = i, n = e; ; ) {
    if (t.nodeType == 3 && n < t.nodeValue.length)
      return { node: t, offset: n };
    if (t.nodeType == 1 && n < t.childNodes.length) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[n], n = 0;
    } else if (t.parentNode && !Io(t))
      n = Ji(t) + 1, t = t.parentNode;
    else
      return null;
  }
}
class qt {
  constructor(e, t, n = !0) {
    this.node = e, this.offset = t, this.precise = n;
  }
  static before(e, t) {
    return new qt(e.parentNode, Ji(e), t);
  }
  static after(e, t) {
    return new qt(e.parentNode, Ji(e) + 1, t);
  }
}
var Te = /* @__PURE__ */ function(i) {
  return i[i.LTR = 0] = "LTR", i[i.RTL = 1] = "RTL", i;
}(Te || (Te = {}));
const Cn = Te.LTR, yh = Te.RTL;
function Lm(i) {
  let e = [];
  for (let t = 0; t < i.length; t++)
    e.push(1 << +i[t]);
  return e;
}
const i1 = /* @__PURE__ */ Lm("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), n1 = /* @__PURE__ */ Lm("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), hc = /* @__PURE__ */ Object.create(null), oi = [];
for (let i of ["()", "[]", "{}"]) {
  let e = /* @__PURE__ */ i.charCodeAt(0), t = /* @__PURE__ */ i.charCodeAt(1);
  hc[e] = t, hc[t] = -e;
}
function Bm(i) {
  return i <= 247 ? i1[i] : 1424 <= i && i <= 1524 ? 2 : 1536 <= i && i <= 1785 ? n1[i - 1536] : 1774 <= i && i <= 2220 ? 4 : 8192 <= i && i <= 8204 ? 256 : 64336 <= i && i <= 65023 ? 4 : 1;
}
const s1 = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class bi {
  /**
  The direction of this span.
  */
  get dir() {
    return this.level % 2 ? yh : Cn;
  }
  /**
  @internal
  */
  constructor(e, t, n) {
    this.from = e, this.to = t, this.level = n;
  }
  /**
  @internal
  */
  side(e, t) {
    return this.dir == t == e ? this.to : this.from;
  }
  /**
  @internal
  */
  forward(e, t) {
    return e == (this.dir == t);
  }
  /**
  @internal
  */
  static find(e, t, n, s) {
    let r = -1;
    for (let o = 0; o < e.length; o++) {
      let l = e[o];
      if (l.from <= t && l.to >= t) {
        if (l.level == n)
          return o;
        (r < 0 || (s != 0 ? s < 0 ? l.from < t : l.to > t : e[r].level > l.level)) && (r = o);
      }
    }
    if (r < 0)
      throw new RangeError("Index out of range");
    return r;
  }
}
function Xm(i, e) {
  if (i.length != e.length)
    return !1;
  for (let t = 0; t < i.length; t++) {
    let n = i[t], s = e[t];
    if (n.from != s.from || n.to != s.to || n.direction != s.direction || !Xm(n.inner, s.inner))
      return !1;
  }
  return !0;
}
const Ee = [];
function r1(i, e, t, n, s) {
  for (let r = 0; r <= n.length; r++) {
    let o = r ? n[r - 1].to : e, l = r < n.length ? n[r].from : t, a = r ? 256 : s;
    for (let c = o, h = a, f = a; c < l; c++) {
      let u = Bm(i.charCodeAt(c));
      u == 512 ? u = h : u == 8 && f == 4 && (u = 16), Ee[c] = u == 4 ? 2 : u, u & 7 && (f = u), h = u;
    }
    for (let c = o, h = a, f = a; c < l; c++) {
      let u = Ee[c];
      if (u == 128)
        c < l - 1 && h == Ee[c + 1] && h & 24 ? u = Ee[c] = h : Ee[c] = 256;
      else if (u == 64) {
        let d = c + 1;
        for (; d < l && Ee[d] == 64; )
          d++;
        let p = c && h == 8 || d < t && Ee[d] == 8 ? f == 1 ? 1 : 8 : 256;
        for (let m = c; m < d; m++)
          Ee[m] = p;
        c = d - 1;
      } else u == 8 && f == 1 && (Ee[c] = 1);
      h = u, u & 7 && (f = u);
    }
  }
}
function o1(i, e, t, n, s) {
  let r = s == 1 ? 2 : 1;
  for (let o = 0, l = 0, a = 0; o <= n.length; o++) {
    let c = o ? n[o - 1].to : e, h = o < n.length ? n[o].from : t;
    for (let f = c, u, d, p; f < h; f++)
      if (d = hc[u = i.charCodeAt(f)])
        if (d < 0) {
          for (let m = l - 3; m >= 0; m -= 3)
            if (oi[m + 1] == -d) {
              let g = oi[m + 2], b = g & 2 ? s : g & 4 ? g & 1 ? r : s : 0;
              b && (Ee[f] = Ee[oi[m]] = b), l = m;
              break;
            }
        } else {
          if (oi.length == 189)
            break;
          oi[l++] = f, oi[l++] = u, oi[l++] = a;
        }
      else if ((p = Ee[f]) == 2 || p == 1) {
        let m = p == s;
        a = m ? 0 : 1;
        for (let g = l - 3; g >= 0; g -= 3) {
          let b = oi[g + 2];
          if (b & 2)
            break;
          if (m)
            oi[g + 2] |= 2;
          else {
            if (b & 4)
              break;
            oi[g + 2] |= 4;
          }
        }
      }
  }
}
function l1(i, e, t, n) {
  for (let s = 0, r = n; s <= t.length; s++) {
    let o = s ? t[s - 1].to : i, l = s < t.length ? t[s].from : e;
    for (let a = o; a < l; ) {
      let c = Ee[a];
      if (c == 256) {
        let h = a + 1;
        for (; ; )
          if (h == l) {
            if (s == t.length)
              break;
            h = t[s++].to, l = s < t.length ? t[s].from : e;
          } else if (Ee[h] == 256)
            h++;
          else
            break;
        let f = r == 1, u = (h < e ? Ee[h] : n) == 1, d = f == u ? f ? 1 : 2 : n;
        for (let p = h, m = s, g = m ? t[m - 1].to : i; p > a; )
          p == g && (p = t[--m].from, g = m ? t[m - 1].to : i), Ee[--p] = d;
        a = h;
      } else
        r = c, a++;
    }
  }
}
function fc(i, e, t, n, s, r, o) {
  let l = n % 2 ? 2 : 1;
  if (n % 2 == s % 2)
    for (let a = e, c = 0; a < t; ) {
      let h = !0, f = !1;
      if (c == r.length || a < r[c].from) {
        let m = Ee[a];
        m != l && (h = !1, f = m == 16);
      }
      let u = !h && l == 1 ? [] : null, d = h ? n : n + 1, p = a;
      e: for (; ; )
        if (c < r.length && p == r[c].from) {
          if (f)
            break e;
          let m = r[c];
          if (!h)
            for (let g = m.to, b = c + 1; ; ) {
              if (g == t)
                break e;
              if (b < r.length && r[b].from == g)
                g = r[b++].to;
              else {
                if (Ee[g] == l)
                  break e;
                break;
              }
            }
          if (c++, u)
            u.push(m);
          else {
            m.from > a && o.push(new bi(a, m.from, d));
            let g = m.direction == Cn != !(d % 2);
            uc(i, g ? n + 1 : n, s, m.inner, m.from, m.to, o), a = m.to;
          }
          p = m.to;
        } else {
          if (p == t || (h ? Ee[p] != l : Ee[p] == l))
            break;
          p++;
        }
      u ? fc(i, a, p, n + 1, s, u, o) : a < p && o.push(new bi(a, p, d)), a = p;
    }
  else
    for (let a = t, c = r.length; a > e; ) {
      let h = !0, f = !1;
      if (!c || a > r[c - 1].to) {
        let m = Ee[a - 1];
        m != l && (h = !1, f = m == 16);
      }
      let u = !h && l == 1 ? [] : null, d = h ? n : n + 1, p = a;
      e: for (; ; )
        if (c && p == r[c - 1].to) {
          if (f)
            break e;
          let m = r[--c];
          if (!h)
            for (let g = m.from, b = c; ; ) {
              if (g == e)
                break e;
              if (b && r[b - 1].to == g)
                g = r[--b].from;
              else {
                if (Ee[g - 1] == l)
                  break e;
                break;
              }
            }
          if (u)
            u.push(m);
          else {
            m.to < a && o.push(new bi(m.to, a, d));
            let g = m.direction == Cn != !(d % 2);
            uc(i, g ? n + 1 : n, s, m.inner, m.from, m.to, o), a = m.from;
          }
          p = m.from;
        } else {
          if (p == e || (h ? Ee[p - 1] != l : Ee[p - 1] == l))
            break;
          p--;
        }
      u ? fc(i, p, a, n + 1, s, u, o) : p < a && o.push(new bi(p, a, d)), a = p;
    }
}
function uc(i, e, t, n, s, r, o) {
  let l = e % 2 ? 2 : 1;
  r1(i, s, r, n, l), o1(i, s, r, n, l), l1(s, r, n, l), fc(i, s, r, e, t, n, o);
}
function a1(i, e, t) {
  if (!i)
    return [new bi(0, 0, e == yh ? 1 : 0)];
  if (e == Cn && !t.length && !s1.test(i))
    return Wm(i.length);
  if (t.length)
    for (; i.length > Ee.length; )
      Ee[Ee.length] = 256;
  let n = [], s = e == Cn ? 0 : 1;
  return uc(i, s, s, t, 0, i.length, n), n;
}
function Wm(i) {
  return [new bi(0, i, 0)];
}
let Fm = "";
function c1(i, e, t, n, s) {
  var r;
  let o = n.head - i.from, l = bi.find(e, o, (r = n.bidiLevel) !== null && r !== void 0 ? r : -1, n.assoc), a = e[l], c = a.side(s, t);
  if (o == c) {
    let u = l += s ? 1 : -1;
    if (u < 0 || u >= e.length)
      return null;
    a = e[l = u], o = a.side(!s, t), c = a.side(s, t);
  }
  let h = ze(i.text, o, a.forward(s, t));
  (h < a.from || h > a.to) && (h = c), Fm = i.text.slice(Math.min(o, h), Math.max(o, h));
  let f = l == (s ? e.length - 1 : 0) ? null : e[l + (s ? 1 : -1)];
  return f && h == c && f.level + (s ? 0 : 1) < a.level ? P.cursor(f.side(!s, t) + i.from, f.forward(s, t) ? 1 : -1, f.level) : P.cursor(h + i.from, a.forward(s, t) ? -1 : 1, a.level);
}
function h1(i, e, t) {
  for (let n = e; n < t; n++) {
    let s = Bm(i.charCodeAt(n));
    if (s == 1)
      return Cn;
    if (s == 2 || s == 4)
      return yh;
  }
  return Cn;
}
const qm = /* @__PURE__ */ L.define(), Hm = /* @__PURE__ */ L.define(), Um = /* @__PURE__ */ L.define(), Gm = /* @__PURE__ */ L.define(), dc = /* @__PURE__ */ L.define(), zm = /* @__PURE__ */ L.define(), jm = /* @__PURE__ */ L.define(), xh = /* @__PURE__ */ L.define(), vh = /* @__PURE__ */ L.define(), Ym = /* @__PURE__ */ L.define({
  combine: (i) => i.some((e) => e)
}), Km = /* @__PURE__ */ L.define({
  combine: (i) => i.some((e) => e)
}), Zm = /* @__PURE__ */ L.define();
class Zn {
  constructor(e, t, n, s, r, o = !1) {
    this.range = e, this.y = t, this.x = n, this.yMargin = s, this.xMargin = r, this.isSnapshot = o;
  }
  map(e) {
    return e.empty ? this : new Zn(this.range.map(e), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
  clip(e) {
    return this.range.to <= e.doc.length ? this : new Zn(P.cursor(e.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
}
const Mr = /* @__PURE__ */ ie.define({ map: (i, e) => i.map(e) }), Jm = /* @__PURE__ */ ie.define();
function xt(i, e, t) {
  let n = i.facet(Gm);
  n.length ? n[0](e) : window.onerror && window.onerror(String(e), t, void 0, void 0, e) || (t ? console.error(t + ":", e) : console.error(e));
}
const $i = /* @__PURE__ */ L.define({ combine: (i) => i.length ? i[0] : !0 });
let f1 = 0;
const Ln = /* @__PURE__ */ L.define({
  combine(i) {
    return i.filter((e, t) => {
      for (let n = 0; n < t; n++)
        if (i[n].plugin == e.plugin)
          return !1;
      return !0;
    });
  }
});
class Ve {
  constructor(e, t, n, s, r) {
    this.id = e, this.create = t, this.domEventHandlers = n, this.domEventObservers = s, this.baseExtensions = r(this), this.extension = this.baseExtensions.concat(Ln.of({ plugin: this, arg: void 0 }));
  }
  /**
  Create an extension for this plugin with the given argument.
  */
  of(e) {
    return this.baseExtensions.concat(Ln.of({ plugin: this, arg: e }));
  }
  /**
  Define a plugin from a constructor function that creates the
  plugin's value, given an editor view.
  */
  static define(e, t) {
    const { eventHandlers: n, eventObservers: s, provide: r, decorations: o } = t || {};
    return new Ve(f1++, e, n, s, (l) => {
      let a = [];
      return o && a.push(Sl.of((c) => {
        let h = c.plugin(l);
        return h ? o(h) : Y.none;
      })), r && a.push(r(l)), a;
    });
  }
  /**
  Create a plugin for a class whose constructor takes a single
  editor view as argument.
  */
  static fromClass(e, t) {
    return Ve.define((n, s) => new e(n, s), t);
  }
}
class Jl {
  constructor(e) {
    this.spec = e, this.mustUpdate = null, this.value = null;
  }
  get plugin() {
    return this.spec && this.spec.plugin;
  }
  update(e) {
    if (this.value) {
      if (this.mustUpdate) {
        let t = this.mustUpdate;
        if (this.mustUpdate = null, this.value.update)
          try {
            this.value.update(t);
          } catch (n) {
            if (xt(t.state, n, "CodeMirror plugin crashed"), this.value.destroy)
              try {
                this.value.destroy();
              } catch {
              }
            this.deactivate();
          }
      }
    } else if (this.spec)
      try {
        this.value = this.spec.plugin.create(e, this.spec.arg);
      } catch (t) {
        xt(e.state, t, "CodeMirror plugin crashed"), this.deactivate();
      }
    return this;
  }
  destroy(e) {
    var t;
    if (!((t = this.value) === null || t === void 0) && t.destroy)
      try {
        this.value.destroy();
      } catch (n) {
        xt(e.state, n, "CodeMirror plugin crashed");
      }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
const eg = /* @__PURE__ */ L.define(), Sh = /* @__PURE__ */ L.define(), Sl = /* @__PURE__ */ L.define(), tg = /* @__PURE__ */ L.define(), wh = /* @__PURE__ */ L.define(), Pr = /* @__PURE__ */ L.define(), ig = /* @__PURE__ */ L.define();
function gu(i, e) {
  let t = i.state.facet(ig);
  if (!t.length)
    return t;
  let n = t.map((r) => r instanceof Function ? r(i) : r), s = [];
  return ce.spans(n, e.from, e.to, {
    point() {
    },
    span(r, o, l, a) {
      let c = r - e.from, h = o - e.from, f = s;
      for (let u = l.length - 1; u >= 0; u--, a--) {
        let d = l[u].spec.bidiIsolate, p;
        if (d == null && (d = h1(e.text, c, h)), a > 0 && f.length && (p = f[f.length - 1]).to == c && p.direction == d)
          p.to = h, f = p.inner;
        else {
          let m = { from: c, to: h, direction: d, inner: [] };
          f.push(m), f = m.inner;
        }
      }
    }
  }), s;
}
const ng = /* @__PURE__ */ L.define();
function Ph(i) {
  let e = 0, t = 0, n = 0, s = 0;
  for (let r of i.state.facet(ng)) {
    let o = r(i);
    o && (o.left != null && (e = Math.max(e, o.left)), o.right != null && (t = Math.max(t, o.right)), o.top != null && (n = Math.max(n, o.top)), o.bottom != null && (s = Math.max(s, o.bottom)));
  }
  return { left: e, right: t, top: n, bottom: s };
}
const As = /* @__PURE__ */ L.define();
class Qt {
  constructor(e, t, n, s) {
    this.fromA = e, this.toA = t, this.fromB = n, this.toB = s;
  }
  join(e) {
    return new Qt(Math.min(this.fromA, e.fromA), Math.max(this.toA, e.toA), Math.min(this.fromB, e.fromB), Math.max(this.toB, e.toB));
  }
  addToSet(e) {
    let t = e.length, n = this;
    for (; t > 0; t--) {
      let s = e[t - 1];
      if (!(s.fromA > n.toA)) {
        if (s.toA < n.fromA)
          break;
        n = n.join(s), e.splice(t - 1, 1);
      }
    }
    return e.splice(t, 0, n), e;
  }
  // Extend a set to cover all the content in `ranges`, which is a
  // flat array with each pair of numbers representing fromB/toB
  // positions. These pairs are generated in unchanged ranges, so the
  // offset between doc A and doc B is the same for their start and
  // end points.
  static extendWithRanges(e, t) {
    if (t.length == 0)
      return e;
    let n = [];
    for (let s = 0, r = 0, o = 0; ; ) {
      let l = s < e.length ? e[s].fromB : 1e9, a = r < t.length ? t[r] : 1e9, c = Math.min(l, a);
      if (c == 1e9)
        break;
      let h = c + o, f = c, u = h;
      for (; ; )
        if (r < t.length && t[r] <= f) {
          let d = t[r + 1];
          r += 2, f = Math.max(f, d);
          for (let p = s; p < e.length && e[p].fromB <= f; p++)
            o = e[p].toA - e[p].toB;
          u = Math.max(u, d + o);
        } else if (s < e.length && e[s].fromB <= f) {
          let d = e[s++];
          f = Math.max(f, d.toB), u = Math.max(u, d.toA), o = d.toA - d.toB;
        } else
          break;
      n.push(new Qt(h, u, c, f));
    }
    return n;
  }
}
class Lo {
  constructor(e, t, n) {
    this.view = e, this.state = t, this.transactions = n, this.flags = 0, this.startState = e.state, this.changes = Fe.empty(this.startState.doc.length);
    for (let r of n)
      this.changes = this.changes.compose(r.changes);
    let s = [];
    this.changes.iterChangedRanges((r, o, l, a) => s.push(new Qt(r, o, l, a))), this.changedRanges = s;
  }
  /**
  @internal
  */
  static create(e, t, n) {
    return new Lo(e, t, n);
  }
  /**
  Tells you whether the [viewport](https://codemirror.net/6/docs/ref/#view.EditorView.viewport) or
  [visible ranges](https://codemirror.net/6/docs/ref/#view.EditorView.visibleRanges) changed in this
  update.
  */
  get viewportChanged() {
    return (this.flags & 4) > 0;
  }
  /**
  Returns true when
  [`viewportChanged`](https://codemirror.net/6/docs/ref/#view.ViewUpdate.viewportChanged) is true
  and the viewport change is not just the result of mapping it in
  response to document changes.
  */
  get viewportMoved() {
    return (this.flags & 8) > 0;
  }
  /**
  Indicates whether the height of a block element in the editor
  changed in this update.
  */
  get heightChanged() {
    return (this.flags & 2) > 0;
  }
  /**
  Returns true when the document was modified or the size of the
  editor, or elements within the editor, changed.
  */
  get geometryChanged() {
    return this.docChanged || (this.flags & 18) > 0;
  }
  /**
  True when this update indicates a focus change.
  */
  get focusChanged() {
    return (this.flags & 1) > 0;
  }
  /**
  Whether the document changed in this update.
  */
  get docChanged() {
    return !this.changes.empty;
  }
  /**
  Whether the selection was explicitly set in this update.
  */
  get selectionSet() {
    return this.transactions.some((e) => e.selection);
  }
  /**
  @internal
  */
  get empty() {
    return this.flags == 0 && this.transactions.length == 0;
  }
}
const u1 = [];
class _e {
  constructor(e, t, n = 0) {
    this.dom = e, this.length = t, this.flags = n, this.parent = null, e.cmTile = this;
  }
  get breakAfter() {
    return this.flags & 1;
  }
  get children() {
    return u1;
  }
  isWidget() {
    return !1;
  }
  get isHidden() {
    return !1;
  }
  isComposite() {
    return !1;
  }
  isLine() {
    return !1;
  }
  isText() {
    return !1;
  }
  isBlock() {
    return !1;
  }
  get domAttrs() {
    return null;
  }
  sync(e) {
    if (this.flags |= 2, this.flags & 4) {
      this.flags &= -5;
      let t = this.domAttrs;
      t && zx(this.dom, t);
    }
  }
  toString() {
    return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "");
  }
  destroy() {
    this.parent = null;
  }
  setDOM(e) {
    this.dom = e, e.cmTile = this;
  }
  get posAtStart() {
    return this.parent ? this.parent.posBefore(this) : 0;
  }
  get posAtEnd() {
    return this.posAtStart + this.length;
  }
  posBefore(e, t = this.posAtStart) {
    let n = t;
    for (let s of this.children) {
      if (s == e)
        return n;
      n += s.length + s.breakAfter;
    }
    throw new RangeError("Invalid child in posBefore");
  }
  posAfter(e) {
    return this.posBefore(e) + e.length;
  }
  covers(e) {
    return !0;
  }
  coordsIn(e, t) {
    return null;
  }
  domPosFor(e, t) {
    let n = Ji(this.dom), s = this.length ? e > 0 : t > 0;
    return new qt(this.parent.dom, n + (s ? 1 : 0), e == 0 || e == this.length);
  }
  markDirty(e) {
    this.flags &= -3, e && (this.flags |= 4), this.parent && this.parent.flags & 2 && this.parent.markDirty(!1);
  }
  get overrideDOMText() {
    return null;
  }
  get root() {
    for (let e = this; e; e = e.parent)
      if (e instanceof Pl)
        return e;
    return null;
  }
  static get(e) {
    return e.cmTile;
  }
}
class wl extends _e {
  constructor(e) {
    super(e, 0), this._children = [];
  }
  isComposite() {
    return !0;
  }
  get children() {
    return this._children;
  }
  get lastChild() {
    return this.children.length ? this.children[this.children.length - 1] : null;
  }
  append(e) {
    this.children.push(e), e.parent = this;
  }
  sync(e) {
    if (this.flags & 2)
      return;
    super.sync(e);
    let t = this.dom, n = null, s, r = (e == null ? void 0 : e.node) == t ? e : null, o = 0;
    for (let l of this.children) {
      if (l.sync(e), o += l.length + l.breakAfter, s = n ? n.nextSibling : t.firstChild, r && s != l.dom && (r.written = !0), l.dom.parentNode == t)
        for (; s && s != l.dom; )
          s = Ou(s);
      else
        t.insertBefore(l.dom, s);
      n = l.dom;
    }
    for (s = n ? n.nextSibling : t.firstChild, r && s && (r.written = !0); s; )
      s = Ou(s);
    this.length = o;
  }
}
function Ou(i) {
  let e = i.nextSibling;
  return i.parentNode.removeChild(i), e;
}
class Pl extends wl {
  constructor(e, t) {
    super(t), this.view = e;
  }
  owns(e) {
    for (; e; e = e.parent)
      if (e == this)
        return !0;
    return !1;
  }
  isBlock() {
    return !0;
  }
  nearest(e) {
    for (; ; ) {
      if (!e)
        return null;
      let t = _e.get(e);
      if (t && this.owns(t))
        return t;
      e = e.parentNode;
    }
  }
  blockTiles(e) {
    for (let t = [], n = this, s = 0, r = 0; ; )
      if (s == n.children.length) {
        if (!t.length)
          return;
        n = n.parent, n.breakAfter && r++, s = t.pop();
      } else {
        let o = n.children[s++];
        if (o instanceof Di)
          t.push(s), n = o, s = 0;
        else {
          let l = r + o.length, a = e(o, r);
          if (a !== void 0)
            return a;
          r = l + o.breakAfter;
        }
      }
  }
  // Find the block at the given position. If side < -1, make sure to
  // stay before block widgets at that position, if side > 1, after
  // such widgets (used for selection drawing, which needs to be able
  // to get coordinates for positions that aren't valid cursor positions).
  resolveBlock(e, t) {
    let n, s = -1, r, o = -1;
    if (this.blockTiles((l, a) => {
      let c = a + l.length;
      if (e >= a && e <= c) {
        if (l.isWidget() && t >= -1 && t <= 1) {
          if (l.flags & 32)
            return !0;
          l.flags & 16 && (n = void 0);
        }
        (a < e || e == c && (t < -1 ? l.length : l.covers(1))) && (!n || !l.isWidget() && n.isWidget()) && (n = l, s = e - a), (c > e || e == a && (t > 1 ? l.length : l.covers(-1))) && (!r || !l.isWidget() && r.isWidget()) && (r = l, o = e - a);
      }
    }), !n && !r)
      throw new Error("No tile at position " + e);
    return n && t < 0 || !r ? { tile: n, offset: s } : { tile: r, offset: o };
  }
}
class Di extends wl {
  constructor(e, t) {
    super(e), this.wrapper = t;
  }
  isBlock() {
    return !0;
  }
  covers(e) {
    return this.children.length ? e < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1) : !1;
  }
  get domAttrs() {
    return this.wrapper.attributes;
  }
  static of(e, t) {
    let n = new Di(t || document.createElement(e.tagName), e);
    return t || (n.flags |= 4), n;
  }
}
class ss extends wl {
  constructor(e, t) {
    super(e), this.attrs = t;
  }
  isLine() {
    return !0;
  }
  static start(e, t, n) {
    let s = new ss(t || document.createElement("div"), e);
    return (!t || !n) && (s.flags |= 4), s;
  }
  get domAttrs() {
    return this.attrs;
  }
  // Find the tile associated with a given position in this line.
  resolveInline(e, t, n) {
    let s = null, r = -1, o = null, l = -1;
    function a(h, f) {
      for (let u = 0, d = 0; u < h.children.length && d <= f; u++) {
        let p = h.children[u], m = d + p.length;
        m >= f && (p.isComposite() ? a(p, f - d) : (!o || o.isHidden && (t > 0 || n && p1(o, p))) && (m > f || p.flags & 32) ? (o = p, l = f - d) : (d < f || p.flags & 16 && !p.isHidden) && (s = p, r = f - d)), d = m;
      }
    }
    a(this, e);
    let c = (t < 0 ? s : o) || s || o;
    return c ? { tile: c, offset: c == s ? r : l } : null;
  }
  coordsIn(e, t) {
    let n = this.resolveInline(e, t, !0);
    return n ? n.tile.coordsIn(Math.max(0, n.offset), t) : d1(this);
  }
  domIn(e, t) {
    let n = this.resolveInline(e, t);
    if (n) {
      let { tile: s, offset: r } = n;
      if (this.dom.contains(s.dom))
        return s.isText() ? new qt(s.dom, Math.min(s.dom.nodeValue.length, r)) : s.domPosFor(r, s.flags & 16 ? 1 : s.flags & 32 ? -1 : t);
      let o = n.tile.parent, l = !1;
      for (let a of o.children) {
        if (l)
          return new qt(a.dom, 0);
        a == n.tile && (l = !0);
      }
    }
    return new qt(this.dom, 0);
  }
}
function d1(i) {
  let e = i.dom.lastChild;
  if (!e)
    return i.dom.getBoundingClientRect();
  let t = fo(e);
  return t[t.length - 1] || null;
}
function p1(i, e) {
  let t = i.coordsIn(0, 1), n = e.coordsIn(0, 1);
  return t && n && n.top < t.bottom;
}
class bt extends wl {
  constructor(e, t) {
    super(e), this.mark = t;
  }
  get domAttrs() {
    return this.mark.attrs;
  }
  static of(e, t) {
    let n = new bt(t || document.createElement(e.tagName), e);
    return t || (n.flags |= 4), n;
  }
}
class mn extends _e {
  constructor(e, t) {
    super(e, t.length), this.text = t;
  }
  sync(e) {
    this.flags & 2 || (super.sync(e), this.dom.nodeValue != this.text && (e && e.node == this.dom && (e.written = !0), this.dom.nodeValue = this.text));
  }
  isText() {
    return !0;
  }
  toString() {
    return JSON.stringify(this.text);
  }
  coordsIn(e, t) {
    let n = this.dom.nodeValue.length;
    e > n && (e = n);
    let s = e, r = e, o = 0;
    e == 0 && t < 0 || e == n && t >= 0 ? B.chrome || B.gecko || (e ? (s--, o = 1) : r < n && (r++, o = -1)) : t < 0 ? s-- : r < n && r++;
    let l = nr(this.dom, s, r).getClientRects();
    if (!l.length)
      return null;
    let a = l[(o ? o < 0 : t >= 0) ? 0 : l.length - 1];
    return B.safari && !o && a.width == 0 && (a = Array.prototype.find.call(l, (c) => c.width) || a), o ? Vo(a, o < 0) : a || null;
  }
  static of(e, t) {
    let n = new mn(t || document.createTextNode(e), e);
    return t || (n.flags |= 2), n;
  }
}
class En extends _e {
  constructor(e, t, n, s) {
    super(e, t, s), this.widget = n;
  }
  isWidget() {
    return !0;
  }
  get isHidden() {
    return this.widget.isHidden;
  }
  covers(e) {
    return this.flags & 48 ? !1 : (this.flags & (e < 0 ? 64 : 128)) > 0;
  }
  coordsIn(e, t) {
    return this.coordsInWidget(e, t, !1);
  }
  coordsInWidget(e, t, n) {
    let s = this.widget.coordsAt(this.dom, e, t);
    if (s)
      return s;
    if (n)
      return Vo(this.dom.getBoundingClientRect(), this.length ? e == 0 : t <= 0);
    {
      let r = this.dom.getClientRects(), o = null;
      if (!r.length)
        return null;
      let l = this.flags & 16 ? !0 : this.flags & 32 ? !1 : e > 0;
      for (let a = l ? r.length - 1 : 0; o = r[a], !(e > 0 ? a == 0 : a == r.length - 1 || o.top < o.bottom); a += l ? -1 : 1)
        ;
      return Vo(o, !l);
    }
  }
  get overrideDOMText() {
    if (!this.length)
      return me.empty;
    let { root: e } = this;
    if (!e)
      return me.empty;
    let t = this.posAtStart;
    return e.view.state.doc.slice(t, t + this.length);
  }
  destroy() {
    super.destroy(), this.widget.destroy(this.dom);
  }
  static of(e, t, n, s, r) {
    return r || (r = e.toDOM(t), e.editable || (r.contentEditable = "false")), new En(r, n, e, s);
  }
}
class Bo extends _e {
  constructor(e) {
    let t = document.createElement("img");
    t.className = "cm-widgetBuffer", t.setAttribute("aria-hidden", "true"), super(t, 0, e);
  }
  get isHidden() {
    return !0;
  }
  get overrideDOMText() {
    return me.empty;
  }
  coordsIn(e) {
    return this.dom.getBoundingClientRect();
  }
}
class m1 {
  constructor(e) {
    this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = e;
  }
  // Advance by the given distance. If side is -1, stop leaving or
  // entering tiles, or skipping zero-length tiles, once the distance
  // has been traversed. When side is 1, leave, enter, or skip
  // everything at the end position.
  advance(e, t, n) {
    let { tile: s, index: r, beforeBreak: o, parents: l } = this;
    for (; e || t > 0; )
      if (s.isComposite())
        if (o) {
          if (!e)
            break;
          n && n.break(), e--, o = !1;
        } else if (r == s.children.length) {
          if (!e && !l.length)
            break;
          n && n.leave(s), o = !!s.breakAfter, { tile: s, index: r } = l.pop(), r++;
        } else {
          let a = s.children[r], c = a.breakAfter;
          (t > 0 ? a.length <= e : a.length < e) && (!n || n.skip(a, 0, a.length) !== !1 || !a.isComposite) ? (o = !!c, r++, e -= a.length) : (l.push({ tile: s, index: r }), s = a, r = 0, n && a.isComposite() && n.enter(a));
        }
      else if (r == s.length)
        o = !!s.breakAfter, { tile: s, index: r } = l.pop(), r++;
      else if (e) {
        let a = Math.min(e, s.length - r);
        n && n.skip(s, r, r + a), e -= a, r += a;
      } else
        break;
    return this.tile = s, this.index = r, this.beforeBreak = o, this;
  }
  get root() {
    return this.parents.length ? this.parents[0].tile : this.tile;
  }
}
class g1 {
  constructor(e, t, n, s) {
    this.from = e, this.to = t, this.wrapper = n, this.rank = s;
  }
}
class O1 {
  constructor(e, t, n) {
    this.cache = e, this.root = t, this.blockWrappers = n, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0;
  }
  addText(e, t, n, s) {
    var r;
    this.flushBuffer();
    let o = this.ensureMarks(t, n), l = o.lastChild;
    if (l && l.isText() && !(l.flags & 8) && l.length + e.length < 512) {
      this.cache.reused.set(
        l,
        2
        /* Reused.DOM */
      );
      let a = o.children[o.children.length - 1] = new mn(l.dom, l.text + e);
      a.parent = o;
    } else
      o.append(s || mn.of(e, (r = this.cache.find(mn)) === null || r === void 0 ? void 0 : r.dom));
    this.pos += e.length, this.afterWidget = null;
  }
  addComposition(e, t) {
    let n = this.curLine;
    n.dom != t.line.dom && (n.setDOM(this.cache.reused.has(t.line) ? ea(t.line.dom) : t.line.dom), this.cache.reused.set(
      t.line,
      2
      /* Reused.DOM */
    ));
    let s = n;
    for (let l = t.marks.length - 1; l >= 0; l--) {
      let a = t.marks[l], c = s.lastChild;
      if (c instanceof bt && c.mark.eq(a.mark))
        c.dom != a.dom && c.setDOM(ea(a.dom)), s = c;
      else {
        if (this.cache.reused.get(a)) {
          let f = _e.get(a.dom);
          f && f.setDOM(ea(a.dom));
        }
        let h = bt.of(a.mark, a.dom);
        s.append(h), s = h;
      }
      this.cache.reused.set(
        a,
        2
        /* Reused.DOM */
      );
    }
    let r = _e.get(e.text);
    r && this.cache.reused.set(
      r,
      2
      /* Reused.DOM */
    );
    let o = new mn(e.text, e.text.nodeValue);
    o.flags |= 8, this.pos = e.range.toB, s.append(o);
  }
  addInlineWidget(e, t, n) {
    let s = this.afterWidget && e.flags & 48 && (this.afterWidget.flags & 48) == (e.flags & 48);
    s || this.flushBuffer();
    let r = this.ensureMarks(t, n);
    !s && !(e.flags & 16) && r.append(this.getBuffer(1)), r.append(e), this.pos += e.length, this.afterWidget = e;
  }
  addMark(e, t, n) {
    this.flushBuffer(), this.ensureMarks(t, n).append(e), this.pos += e.length, this.afterWidget = null;
  }
  addBlockWidget(e) {
    this.getBlockPos().append(e), this.pos += e.length, this.lastBlock = e, this.endLine();
  }
  continueWidget(e) {
    let t = this.afterWidget || this.lastBlock;
    t.length += e, this.pos += e;
  }
  addLineStart(e, t) {
    var n;
    e || (e = sg);
    let s = ss.start(e, t || ((n = this.cache.find(ss)) === null || n === void 0 ? void 0 : n.dom), !!t);
    this.getBlockPos().append(this.lastBlock = this.curLine = s);
  }
  addLine(e) {
    this.getBlockPos().append(e), this.pos += e.length, this.lastBlock = e, this.endLine();
  }
  addBreak() {
    this.lastBlock.flags |= 1, this.endLine(), this.pos++;
  }
  addLineStartIfNotCovered(e) {
    this.blockPosCovered() || this.addLineStart(e);
  }
  ensureLine(e) {
    this.curLine || this.addLineStart(e);
  }
  ensureMarks(e, t) {
    var n;
    let s = this.curLine;
    for (let r = e.length - 1; r >= 0; r--) {
      let o = e[r], l;
      if (t > 0 && (l = s.lastChild) && l instanceof bt && l.mark.eq(o))
        s = l, t--;
      else {
        let a = bt.of(o, (n = this.cache.find(bt, (c) => c.mark.eq(o))) === null || n === void 0 ? void 0 : n.dom);
        s.append(a), s = a, t = 0;
      }
    }
    return s;
  }
  endLine() {
    if (this.curLine) {
      this.flushBuffer();
      let e = this.curLine.lastChild;
      (!e || !bu(this.curLine, !1) || e.dom.nodeName != "BR" && e.isWidget() && !(B.ios && bu(this.curLine, !0))) && this.curLine.append(this.cache.findWidget(
        ta,
        0,
        32
        /* TileFlag.After */
      ) || new En(
        ta.toDOM(),
        0,
        ta,
        32
        /* TileFlag.After */
      )), this.curLine = this.afterWidget = null;
    }
  }
  updateBlockWrappers() {
    this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
    for (let e = this.wrappers.length - 1; e >= 0; e--)
      this.wrappers[e].to < this.pos && this.wrappers.splice(e, 1);
    for (let e = this.blockWrappers; e.value && e.from <= this.pos; e.next())
      if (e.to >= this.pos) {
        let t = e.rank * 102 + e.value.rank, n = new g1(e.from, e.to, e.value, t), s = this.wrappers.length;
        for (; s > 0 && (this.wrappers[s - 1].rank - n.rank || this.wrappers[s - 1].to - n.to) < 0; )
          s--;
        this.wrappers.splice(s, 0, n);
      }
    this.wrapperPos = this.pos;
  }
  getBlockPos() {
    var e;
    this.updateBlockWrappers();
    let t = this.root;
    for (let n of this.wrappers) {
      let s = t.lastChild;
      if (n.from < this.pos && s instanceof Di && s.wrapper.eq(n.wrapper))
        t = s;
      else {
        let r = Di.of(n.wrapper, (e = this.cache.find(Di, (o) => o.wrapper.eq(n.wrapper))) === null || e === void 0 ? void 0 : e.dom);
        t.append(r), t = r;
      }
    }
    return t;
  }
  blockPosCovered() {
    let e = this.lastBlock;
    return e != null && !e.breakAfter && (!e.isWidget() || (e.flags & 160) > 0);
  }
  getBuffer(e) {
    let t = 2 | (e < 0 ? 16 : 32), n = this.cache.find(
      Bo,
      void 0,
      1
      /* Reused.Full */
    );
    return n && (n.flags = t), n || new Bo(t);
  }
  flushBuffer() {
    this.afterWidget && !(this.afterWidget.flags & 32) && (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null);
  }
}
class b1 {
  constructor(e) {
    this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = e.iter();
  }
  skip(e) {
    this.textOff + e <= this.text.length ? this.textOff += e : (this.skipCount += e - (this.text.length - this.textOff), this.text = "", this.textOff = 0);
  }
  next(e) {
    if (this.textOff == this.text.length) {
      let { value: s, lineBreak: r, done: o } = this.cursor.next(this.skipCount);
      if (this.skipCount = 0, o)
        throw new Error("Ran out of text content when drawing inline views");
      this.text = s;
      let l = this.textOff = Math.min(e, s.length);
      return r ? null : s.slice(0, l);
    }
    let t = Math.min(this.text.length, this.textOff + e), n = this.text.slice(this.textOff, t);
    return this.textOff = t, n;
  }
}
const Xo = [En, ss, mn, bt, Bo, Di, Pl];
for (let i = 0; i < Xo.length; i++)
  Xo[i].bucket = i;
class y1 {
  constructor(e) {
    this.view = e, this.buckets = Xo.map(() => []), this.index = Xo.map(() => 0), this.reused = /* @__PURE__ */ new Map();
  }
  // Put a tile in the cache.
  add(e) {
    let t = e.constructor.bucket, n = this.buckets[t];
    n.length < 6 ? n.push(e) : n[
      this.index[t] = (this.index[t] + 1) % 6
      /* C.Bucket */
    ] = e;
  }
  find(e, t, n = 2) {
    let s = e.bucket, r = this.buckets[s], o = this.index[s];
    for (let l = r.length - 1; l >= 0; l--) {
      let a = (l + o) % r.length, c = r[a];
      if ((!t || t(c)) && !this.reused.has(c))
        return r.splice(a, 1), a < o && this.index[s]--, this.reused.set(c, n), c;
    }
    return null;
  }
  findWidget(e, t, n) {
    let s = this.buckets[0];
    if (s.length)
      for (let r = 0, o = 0; ; r++) {
        if (r == s.length) {
          if (o)
            return null;
          o = 1, r = 0;
        }
        let l = s[r];
        if (!this.reused.has(l) && (o == 0 ? l.widget.compare(e) : l.widget.constructor == e.constructor && e.updateDOM(l.dom, this.view, l.widget)))
          return s.splice(r, 1), r < this.index[0] && this.index[0]--, l.widget == e && l.length == t && (l.flags & 497) == n ? (this.reused.set(
            l,
            1
            /* Reused.Full */
          ), l) : (this.reused.set(
            l,
            2
            /* Reused.DOM */
          ), new En(l.dom, t, e, l.flags & -498 | n));
      }
  }
  reuse(e) {
    return this.reused.set(
      e,
      1
      /* Reused.Full */
    ), e;
  }
  maybeReuse(e, t = 2) {
    if (!this.reused.has(e))
      return this.reused.set(e, t), e.dom;
  }
  clear() {
    for (let e = 0; e < this.buckets.length; e++)
      this.buckets[e].length = this.index[e] = 0;
  }
}
class x1 {
  constructor(e, t, n, s, r) {
    this.view = e, this.decorations = s, this.disallowBlockEffectsFor = r, this.openWidget = !1, this.openMarks = 0, this.cache = new y1(e), this.text = new b1(e.state.doc), this.builder = new O1(this.cache, new Pl(e, e.contentDOM), ce.iter(n)), this.cache.reused.set(
      t,
      2
      /* Reused.DOM */
    ), this.old = new m1(t), this.reuseWalker = {
      skip: (o, l, a) => {
        if (this.cache.add(o), o.isComposite())
          return !1;
      },
      enter: (o) => this.cache.add(o),
      leave: () => {
      },
      break: () => {
      }
    };
  }
  run(e, t) {
    let n = t && this.getCompositionContext(t.text);
    for (let s = 0, r = 0, o = 0; ; ) {
      let l = o < e.length ? e[o++] : null, a = l ? l.fromA : this.old.root.length;
      if (a > s) {
        let c = a - s;
        this.preserve(c, !o, !l), s = a, r += c;
      }
      if (!l)
        break;
      t && l.fromA <= t.range.fromA && l.toA >= t.range.toA ? (this.forward(l.fromA, t.range.fromA, t.range.fromA < t.range.toA ? 1 : -1), this.emit(r, t.range.fromB), this.cache.clear(), this.builder.addComposition(t, n), this.text.skip(t.range.toB - t.range.fromB), this.forward(t.range.fromA, l.toA), this.emit(t.range.toB, l.toB)) : (this.forward(l.fromA, l.toA), this.emit(r, l.toB)), r = l.toB, s = l.toA;
    }
    return this.builder.curLine && this.builder.endLine(), this.builder.root;
  }
  preserve(e, t, n) {
    let s = w1(this.old), r = this.openMarks;
    this.old.advance(e, n ? 1 : -1, {
      skip: (o, l, a) => {
        if (o.isWidget())
          if (this.openWidget)
            this.builder.continueWidget(a - l);
          else {
            let c = a > 0 || l < o.length ? En.of(o.widget, this.view, a - l, o.flags & 496, this.cache.maybeReuse(o)) : this.cache.reuse(o);
            c.flags & 256 ? (c.flags &= -2, this.builder.addBlockWidget(c)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(c, s, r), r = s.length);
          }
        else if (o.isText())
          this.builder.ensureLine(null), !l && a == o.length && !this.cache.reused.has(o) ? this.builder.addText(o.text, s, r, this.cache.reuse(o)) : (this.cache.add(o), this.builder.addText(o.text.slice(l, a), s, r)), r = s.length;
        else if (o.isLine())
          o.flags &= -2, this.cache.reused.set(
            o,
            1
            /* Reused.Full */
          ), this.builder.addLine(o);
        else if (o instanceof Bo)
          this.cache.add(o);
        else if (o instanceof bt)
          this.builder.ensureLine(null), this.builder.addMark(o, s, r), this.cache.reused.set(
            o,
            1
            /* Reused.Full */
          ), r = s.length;
        else
          return !1;
        this.openWidget = !1;
      },
      enter: (o) => {
        o.isLine() ? this.builder.addLineStart(o.attrs, this.cache.maybeReuse(o)) : (this.cache.add(o), o instanceof bt && s.unshift(o.mark)), this.openWidget = !1;
      },
      leave: (o) => {
        o.isLine() ? s.length && (s.length = r = 0) : o instanceof bt && (s.shift(), r = Math.min(r, s.length));
      },
      break: () => {
        this.builder.addBreak(), this.openWidget = !1;
      }
    }), this.text.skip(e);
  }
  emit(e, t) {
    let n = null, s = this.builder, r = 0, o = ce.spans(this.decorations, e, t, {
      point: (l, a, c, h, f, u) => {
        if (c instanceof kn) {
          if (this.disallowBlockEffectsFor[u]) {
            if (c.block)
              throw new RangeError("Block decorations may not be specified via plugins");
            if (a > this.view.state.doc.lineAt(l).to)
              throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
          }
          if (r = h.length, f > h.length)
            s.continueWidget(a - l);
          else {
            let d = c.widget || (c.block ? rs.block : rs.inline), p = v1(c), m = this.cache.findWidget(d, a - l, p) || En.of(d, this.view, a - l, p);
            c.block ? (c.startSide > 0 && s.addLineStartIfNotCovered(n), s.addBlockWidget(m)) : (s.ensureLine(n), s.addInlineWidget(m, h, f));
          }
          n = null;
        } else
          n = S1(n, c);
        a > l && this.text.skip(a - l);
      },
      span: (l, a, c, h) => {
        for (let f = l; f < a; ) {
          let u = this.text.next(Math.min(512, a - f));
          u == null ? (s.addLineStartIfNotCovered(n), s.addBreak(), f++) : (s.ensureLine(n), s.addText(u, c, f == l ? h : c.length), f += u.length), n = null;
        }
      }
    });
    s.addLineStartIfNotCovered(n), this.openWidget = o > r, this.openMarks = o;
  }
  forward(e, t, n = 1) {
    t - e <= 10 ? this.old.advance(t - e, n, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(t - e - 10, -1), this.old.advance(5, n, this.reuseWalker));
  }
  getCompositionContext(e) {
    let t = [], n = null;
    for (let s = e.parentNode; ; s = s.parentNode) {
      let r = _e.get(s);
      if (s == this.view.contentDOM)
        break;
      r instanceof bt ? t.push(r) : r != null && r.isLine() ? n = r : r instanceof Di || (s.nodeName == "DIV" && !n && s != this.view.contentDOM ? n = new ss(s, sg) : n || t.push(bt.of(new Sr({ tagName: s.nodeName.toLowerCase(), attributes: jx(s) }), s)));
    }
    return { line: n, marks: t };
  }
}
function bu(i, e) {
  let t = (n) => {
    for (let s of n.children)
      if ((e ? s.isText() : s.length) || t(s))
        return !0;
    return !1;
  };
  return t(i);
}
function v1(i) {
  let e = i.isReplace ? (i.startSide < 0 ? 64 : 0) | (i.endSide > 0 ? 128 : 0) : i.startSide > 0 ? 32 : 16;
  return i.block && (e |= 256), e;
}
const sg = { class: "cm-line" };
function S1(i, e) {
  let t = e.spec.attributes, n = e.spec.class;
  return !t && !n || (i || (i = { class: "cm-line" }), t && Oh(t, i), n && (i.class += " " + n)), i;
}
function w1(i) {
  let e = [];
  for (let t = i.parents.length; t > 1; t--) {
    let n = t == i.parents.length ? i.tile : i.parents[t].tile;
    n instanceof bt && e.push(n.mark);
  }
  return e;
}
function ea(i) {
  let e = _e.get(i);
  return e && e.setDOM(i.cloneNode()), i;
}
class rs extends Vi {
  constructor(e) {
    super(), this.tag = e;
  }
  eq(e) {
    return e.tag == this.tag;
  }
  toDOM() {
    return document.createElement(this.tag);
  }
  updateDOM(e) {
    return e.nodeName.toLowerCase() == this.tag;
  }
  get isHidden() {
    return !0;
  }
}
rs.inline = /* @__PURE__ */ new rs("span");
rs.block = /* @__PURE__ */ new rs("div");
const ta = /* @__PURE__ */ new class extends Vi {
  toDOM() {
    return document.createElement("br");
  }
  get isHidden() {
    return !0;
  }
  get editable() {
    return !0;
  }
}();
class yu {
  constructor(e) {
    this.view = e, this.decorations = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = Y.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new Pl(e, e.contentDOM), this.updateInner([new Qt(0, 0, 0, e.state.doc.length)], null);
  }
  // Update the document view to a given state.
  update(e) {
    var t;
    let n = e.changedRanges;
    this.minWidth > 0 && n.length && (n.every(({ fromA: h, toA: f }) => f < this.minWidthFrom || h > this.minWidthTo) ? (this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(e);
    let s = -1;
    this.view.inputState.composing >= 0 && !this.view.observer.editContext && (!((t = this.domChanged) === null || t === void 0) && t.newSel ? s = this.domChanged.newSel.head : !N1(e.changes, this.hasComposition) && !e.selectionSet && (s = e.state.selection.main.head));
    let r = s > -1 ? k1(this.view, e.changes, s) : null;
    if (this.domChanged = null, this.hasComposition) {
      let { from: h, to: f } = this.hasComposition;
      n = new Qt(h, f, e.changes.mapPos(h, -1), e.changes.mapPos(f, 1)).addToSet(n.slice());
    }
    this.hasComposition = r ? { from: r.range.fromB, to: r.range.toB } : null, (B.ie || B.chrome) && !r && e && e.state.doc.lines != e.startState.doc.lines && (this.forceSelection = !0);
    let o = this.decorations, l = this.blockWrappers;
    this.updateDeco();
    let a = T1(o, this.decorations, e.changes);
    a.length && (n = Qt.extendWithRanges(n, a));
    let c = $1(l, this.blockWrappers, e.changes);
    return c.length && (n = Qt.extendWithRanges(n, c)), r && !n.some((h) => h.fromA <= r.range.fromA && h.toA >= r.range.toA) && (n = r.range.addToSet(n.slice())), this.tile.flags & 2 && n.length == 0 ? !1 : (this.updateInner(n, r), e.transactions.length && (this.lastUpdate = Date.now()), !0);
  }
  // Used by update and the constructor do perform the actual DOM
  // update
  updateInner(e, t) {
    this.view.viewState.mustMeasureContent = !0;
    let { observer: n } = this.view;
    n.ignore(() => {
      if (t || e.length) {
        let o = this.tile, l = new x1(this.view, o, this.blockWrappers, this.decorations, this.dynamicDecorationMap);
        t && _e.get(t.text) && l.cache.reused.set(
          _e.get(t.text),
          2
          /* Reused.DOM */
        ), this.tile = l.run(e, t), pc(o, l.cache.reused);
      }
      this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let r = B.chrome || B.ios ? { node: n.selectionRange.focusNode, written: !1 } : void 0;
      this.tile.sync(r), r && (r.written || n.selectionRange.focusNode != r.node || !this.tile.dom.contains(r.node)) && (this.forceSelection = !0), this.tile.dom.style.height = "";
    });
    let s = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
      for (let r of this.tile.children)
        r.isWidget() && r.widget instanceof ia && s.push(r.dom);
    n.updateGaps(s);
  }
  updateEditContextFormatting(e) {
    this.editContextFormatting = this.editContextFormatting.map(e.changes);
    for (let t of e.transactions)
      for (let n of t.effects)
        n.is(Jm) && (this.editContextFormatting = n.value);
  }
  // Sync the DOM selection to this.state.selection
  updateSelection(e = !1, t = !1) {
    (e || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let { dom: n } = this.tile, s = this.view.root.activeElement, r = s == n, o = !r && !(this.view.state.facet($i) || n.tabIndex > -1) && Xs(n, this.view.observer.selectionRange) && !(s && n.contains(s));
    if (!(r || t || o))
      return;
    let l = this.forceSelection;
    this.forceSelection = !1;
    let a = this.view.state.selection.main, c, h;
    if (a.empty ? h = c = this.inlineDOMNearPos(a.anchor, a.assoc || 1) : (h = this.inlineDOMNearPos(a.head, a.head == a.from ? 1 : -1), c = this.inlineDOMNearPos(a.anchor, a.anchor == a.from ? 1 : -1)), B.gecko && a.empty && !this.hasComposition && P1(c)) {
      let u = document.createTextNode("");
      this.view.observer.ignore(() => c.node.insertBefore(u, c.node.childNodes[c.offset] || null)), c = h = new qt(u, 0), l = !0;
    }
    let f = this.view.observer.selectionRange;
    (l || !f.focusNode || (!Ws(c.node, c.offset, f.anchorNode, f.anchorOffset) || !Ws(h.node, h.offset, f.focusNode, f.focusOffset)) && !this.suppressWidgetCursorChange(f, a)) && (this.view.observer.ignore(() => {
      B.android && B.chrome && n.contains(f.focusNode) && D1(f.focusNode, n) && (n.blur(), n.focus({ preventScroll: !0 }));
      let u = ir(this.view.root);
      if (u) if (a.empty) {
        if (B.gecko) {
          let d = C1(c.node, c.offset);
          if (d && d != 3) {
            let p = (d == 1 ? Im : Vm)(c.node, c.offset);
            p && (c = new qt(p.node, p.offset));
          }
        }
        u.collapse(c.node, c.offset), a.bidiLevel != null && u.caretBidiLevel !== void 0 && (u.caretBidiLevel = a.bidiLevel);
      } else if (u.extend) {
        u.collapse(c.node, c.offset);
        try {
          u.extend(h.node, h.offset);
        } catch {
        }
      } else {
        let d = document.createRange();
        a.anchor > a.head && ([c, h] = [h, c]), d.setEnd(h.node, h.offset), d.setStart(c.node, c.offset), u.removeAllRanges(), u.addRange(d);
      }
      o && this.view.root.activeElement == n && (n.blur(), s && s.focus());
    }), this.view.observer.setSelectionRange(c, h)), this.impreciseAnchor = c.precise ? null : new qt(f.anchorNode, f.anchorOffset), this.impreciseHead = h.precise ? null : new qt(f.focusNode, f.focusOffset);
  }
  // If a zero-length widget is inserted next to the cursor during
  // composition, avoid moving it across it and disrupting the
  // composition.
  suppressWidgetCursorChange(e, t) {
    return this.hasComposition && t.empty && Ws(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset) && this.posFromDOM(e.focusNode, e.focusOffset) == t.head;
  }
  enforceCursorAssoc() {
    if (this.hasComposition)
      return;
    let { view: e } = this, t = e.state.selection.main, n = ir(e.root), { anchorNode: s, anchorOffset: r } = e.observer.selectionRange;
    if (!n || !t.empty || !t.assoc || !n.modify)
      return;
    let o = this.lineAt(t.head, t.assoc);
    if (!o)
      return;
    let l = o.posAtStart;
    if (t.head == l || t.head == l + o.length)
      return;
    let a = this.coordsAt(t.head, -1), c = this.coordsAt(t.head, 1);
    if (!a || !c || a.bottom > c.top)
      return;
    let h = this.domAtPos(t.head + t.assoc, t.assoc);
    n.collapse(h.node, h.offset), n.modify("move", t.assoc < 0 ? "forward" : "backward", "lineboundary"), e.observer.readSelectionRange();
    let f = e.observer.selectionRange;
    e.docView.posFromDOM(f.anchorNode, f.anchorOffset) != t.from && n.collapse(s, r);
  }
  posFromDOM(e, t) {
    let n = this.tile.nearest(e);
    if (!n)
      return this.tile.dom.compareDocumentPosition(e) & 2 ? 0 : this.view.state.doc.length;
    let s = n.posAtStart;
    if (n.isComposite()) {
      let r;
      if (e == n.dom)
        r = n.dom.childNodes[t];
      else {
        let o = Ri(e) == 0 ? 0 : t == 0 ? -1 : 1;
        for (; ; ) {
          let l = e.parentNode;
          if (l == n.dom)
            break;
          o == 0 && l.firstChild != l.lastChild && (e == l.firstChild ? o = -1 : o = 1), e = l;
        }
        o < 0 ? r = e : r = e.nextSibling;
      }
      if (r == n.dom.firstChild)
        return s;
      for (; r && !_e.get(r); )
        r = r.nextSibling;
      if (!r)
        return s + n.length;
      for (let o = 0, l = s; ; o++) {
        let a = n.children[o];
        if (a.dom == r)
          return l;
        l += a.length + a.breakAfter;
      }
    } else return n.isText() ? e == n.dom ? s + t : s + (t ? n.length : 0) : s;
  }
  domAtPos(e, t) {
    let { tile: n, offset: s } = this.tile.resolveBlock(e, t);
    return n.isWidget() ? n.domPosFor(e, t) : n.domIn(s, t);
  }
  inlineDOMNearPos(e, t) {
    let n, s = -1, r = !1, o, l = -1, a = !1;
    return this.tile.blockTiles((c, h) => {
      if (c.isWidget()) {
        if (c.flags & 32 && h >= e)
          return !0;
        c.flags & 16 && (r = !0);
      } else {
        let f = h + c.length;
        if (h <= e && (n = c, s = e - h, r = f < e), f >= e && !o && (o = c, l = e - h, a = h > e), h > e && o)
          return !0;
      }
    }), !n && !o ? this.domAtPos(e, t) : (r && o ? n = null : a && n && (o = null), n && t < 0 || !o ? n.domIn(s, t) : o.domIn(l, t));
  }
  coordsAt(e, t) {
    let { tile: n, offset: s } = this.tile.resolveBlock(e, t);
    return n.isWidget() ? n.widget instanceof ia ? null : n.coordsInWidget(s, t, !0) : n.coordsIn(s, t);
  }
  lineAt(e, t) {
    let { tile: n } = this.tile.resolveBlock(e, t);
    return n.isLine() ? n : null;
  }
  coordsForChar(e) {
    let { tile: t, offset: n } = this.tile.resolveBlock(e, 1);
    if (!t.isLine())
      return null;
    function s(r, o) {
      if (r.isComposite())
        for (let l of r.children) {
          if (l.length >= o) {
            let a = s(l, o);
            if (a)
              return a;
          }
          if (o -= l.length, o < 0)
            break;
        }
      else if (r.isText() && o < r.length) {
        let l = ze(r.text, o);
        if (l == o)
          return null;
        let a = nr(r.dom, o, l).getClientRects();
        for (let c = 0; c < a.length; c++) {
          let h = a[c];
          if (c == a.length - 1 || h.top < h.bottom && h.left < h.right)
            return h;
        }
      }
      return null;
    }
    return s(t, n);
  }
  measureVisibleLineHeights(e) {
    let t = [], { from: n, to: s } = e, r = this.view.contentDOM.clientWidth, o = r > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, l = -1, a = this.view.textDirection == Te.LTR, c = 0, h = (f, u, d) => {
      for (let p = 0; p < f.children.length && !(u > s); p++) {
        let m = f.children[p], g = u + m.length, b = m.dom.getBoundingClientRect(), { height: x } = b;
        if (d && !p && (c += b.top - d.top), m instanceof Di)
          g > n && h(m, u, b);
        else if (u >= n && (c > 0 && t.push(-c), t.push(x + c), c = 0, o)) {
          let S = m.dom.lastChild, C = S ? fo(S) : [];
          if (C.length) {
            let v = C[C.length - 1], T = a ? v.right - b.left : b.right - v.left;
            T > l && (l = T, this.minWidth = r, this.minWidthFrom = u, this.minWidthTo = g);
          }
        }
        d && p == f.children.length - 1 && (c += d.bottom - b.bottom), u = g + m.breakAfter;
      }
    };
    return h(this.tile, 0, null), t;
  }
  textDirectionAt(e) {
    let { tile: t } = this.tile.resolveBlock(e, 1);
    return getComputedStyle(t.dom).direction == "rtl" ? Te.RTL : Te.LTR;
  }
  measureTextSize() {
    let e = this.tile.blockTiles((o) => {
      if (o.isLine() && o.children.length && o.length <= 20) {
        let l = 0, a;
        for (let c of o.children) {
          if (!c.isText() || /[^ -~]/.test(c.text))
            return;
          let h = fo(c.dom);
          if (h.length != 1)
            return;
          l += h[0].width, a = h[0].height;
        }
        if (l)
          return {
            lineHeight: o.dom.getBoundingClientRect().height,
            charWidth: l / o.length,
            textHeight: a
          };
      }
    });
    if (e)
      return e;
    let t = document.createElement("div"), n, s, r;
    return t.className = "cm-line", t.style.width = "99999px", t.style.position = "absolute", t.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
      this.tile.dom.appendChild(t);
      let o = fo(t.firstChild)[0];
      n = t.getBoundingClientRect().height, s = o && o.width ? o.width / 27 : 7, r = o && o.height ? o.height : n, t.remove();
    }), { lineHeight: n, charWidth: s, textHeight: r };
  }
  computeBlockGapDeco() {
    let e = [], t = this.view.viewState;
    for (let n = 0, s = 0; ; s++) {
      let r = s == t.viewports.length ? null : t.viewports[s], o = r ? r.from - 1 : this.view.state.doc.length;
      if (o > n) {
        let l = (t.lineBlockAt(o).bottom - t.lineBlockAt(n).top) / this.view.scaleY;
        e.push(Y.replace({
          widget: new ia(l),
          block: !0,
          inclusive: !0,
          isBlockGap: !0
        }).range(n, o));
      }
      if (!r)
        break;
      n = r.to + 1;
    }
    return Y.set(e);
  }
  updateDeco() {
    let e = 1, t = this.view.state.facet(Sl).map((r) => (this.dynamicDecorationMap[e++] = typeof r == "function") ? r(this.view) : r), n = !1, s = this.view.state.facet(wh).map((r, o) => {
      let l = typeof r == "function";
      return l && (n = !0), l ? r(this.view) : r;
    });
    for (s.length && (this.dynamicDecorationMap[e++] = n, t.push(ce.join(s))), this.decorations = [
      this.editContextFormatting,
      ...t,
      this.computeBlockGapDeco(),
      this.view.viewState.lineGapDeco
    ]; e < this.decorations.length; )
      this.dynamicDecorationMap[e++] = !1;
    this.blockWrappers = this.view.state.facet(tg).map((r) => typeof r == "function" ? r(this.view) : r);
  }
  scrollIntoView(e) {
    var t;
    if (e.isSnapshot) {
      let h = this.view.viewState.lineBlockAt(e.range.head);
      this.view.scrollDOM.scrollTop = h.top - e.yMargin, this.view.scrollDOM.scrollLeft = e.xMargin;
      return;
    }
    for (let h of this.view.state.facet(Zm))
      try {
        if (h(this.view, e.range, e))
          return !0;
      } catch (f) {
        xt(this.view.state, f, "scroll handler");
      }
    let { range: n } = e, s = this.coordsAt(n.head, (t = n.assoc) !== null && t !== void 0 ? t : n.empty ? 0 : n.head > n.anchor ? -1 : 1), r;
    if (!s)
      return;
    !n.empty && (r = this.coordsAt(n.anchor, n.anchor > n.head ? -1 : 1)) && (s = {
      left: Math.min(s.left, r.left),
      top: Math.min(s.top, r.top),
      right: Math.max(s.right, r.right),
      bottom: Math.max(s.bottom, r.bottom)
    });
    let o = Ph(this.view), l = {
      left: s.left - o.left,
      top: s.top - o.top,
      right: s.right + o.right,
      bottom: s.bottom + o.bottom
    }, { offsetWidth: a, offsetHeight: c } = this.view.scrollDOM;
    if (Zx(this.view.scrollDOM, l, n.head < n.anchor ? -1 : 1, e.x, e.y, Math.max(Math.min(e.xMargin, a), -a), Math.max(Math.min(e.yMargin, c), -c), this.view.textDirection == Te.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (s.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || s.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
      let h = this.view.docView.lineAt(n.head, 1);
      h && h.dom.scrollIntoView({ block: "nearest" });
    }
  }
  lineHasWidget(e) {
    let t = (n) => n.isWidget() || n.children.some(t);
    return t(this.tile.resolveBlock(e, 1).tile);
  }
  destroy() {
    pc(this.tile);
  }
}
function pc(i, e) {
  let t = e == null ? void 0 : e.get(i);
  if (t != 1) {
    t == null && i.destroy();
    for (let n of i.children)
      pc(n, e);
  }
}
function P1(i) {
  return i.node.nodeType == 1 && i.node.firstChild && (i.offset == 0 || i.node.childNodes[i.offset - 1].contentEditable == "false") && (i.offset == i.node.childNodes.length || i.node.childNodes[i.offset].contentEditable == "false");
}
function rg(i, e) {
  let t = i.observer.selectionRange;
  if (!t.focusNode)
    return null;
  let n = Im(t.focusNode, t.focusOffset), s = Vm(t.focusNode, t.focusOffset), r = n || s;
  if (s && n && s.node != n.node) {
    let l = _e.get(s.node);
    if (!l || l.isText() && l.text != s.node.nodeValue)
      r = s;
    else if (i.docView.lastCompositionAfterCursor) {
      let a = _e.get(n.node);
      !a || a.isText() && a.text != n.node.nodeValue || (r = s);
    }
  }
  if (i.docView.lastCompositionAfterCursor = r != n, !r)
    return null;
  let o = e - r.offset;
  return { from: o, to: o + r.node.nodeValue.length, node: r.node };
}
function k1(i, e, t) {
  let n = rg(i, t);
  if (!n)
    return null;
  let { node: s, from: r, to: o } = n, l = s.nodeValue;
  if (/[\n\r]/.test(l) || i.state.doc.sliceString(n.from, n.to) != l)
    return null;
  let a = e.invertedDesc;
  return { range: new Qt(a.mapPos(r), a.mapPos(o), r, o), text: s };
}
function C1(i, e) {
  return i.nodeType != 1 ? 0 : (e && i.childNodes[e - 1].contentEditable == "false" ? 1 : 0) | (e < i.childNodes.length && i.childNodes[e].contentEditable == "false" ? 2 : 0);
}
let E1 = class {
  constructor() {
    this.changes = [];
  }
  compareRange(e, t) {
    Yn(e, t, this.changes);
  }
  comparePoint(e, t) {
    Yn(e, t, this.changes);
  }
  boundChange(e) {
    Yn(e, e, this.changes);
  }
};
function T1(i, e, t) {
  let n = new E1();
  return ce.compare(i, e, t, n), n.changes;
}
class A1 {
  constructor() {
    this.changes = [];
  }
  compareRange(e, t) {
    Yn(e, t, this.changes);
  }
  comparePoint() {
  }
  boundChange(e) {
    Yn(e, e, this.changes);
  }
}
function $1(i, e, t) {
  let n = new A1();
  return ce.compare(i, e, t, n), n.changes;
}
function D1(i, e) {
  for (let t = i; t && t != e; t = t.assignedSlot || t.parentNode)
    if (t.nodeType == 1 && t.contentEditable == "false")
      return !0;
  return !1;
}
function N1(i, e) {
  let t = !1;
  return e && i.iterChangedRanges((n, s) => {
    n < e.to && s > e.from && (t = !0);
  }), t;
}
class ia extends Vi {
  constructor(e) {
    super(), this.height = e;
  }
  toDOM() {
    let e = document.createElement("div");
    return e.className = "cm-gap", this.updateDOM(e), e;
  }
  eq(e) {
    return e.height == this.height;
  }
  updateDOM(e) {
    return e.style.height = this.height + "px", !0;
  }
  get editable() {
    return !0;
  }
  get estimatedHeight() {
    return this.height;
  }
  ignoreEvent() {
    return !1;
  }
}
function R1(i, e, t = 1) {
  let n = i.charCategorizer(e), s = i.doc.lineAt(e), r = e - s.from;
  if (s.length == 0)
    return P.cursor(e);
  r == 0 ? t = 1 : r == s.length && (t = -1);
  let o = r, l = r;
  t < 0 ? o = ze(s.text, r, !1) : l = ze(s.text, r);
  let a = n(s.text.slice(o, l));
  for (; o > 0; ) {
    let c = ze(s.text, o, !1);
    if (n(s.text.slice(c, o)) != a)
      break;
    o = c;
  }
  for (; l < s.length; ) {
    let c = ze(s.text, l);
    if (n(s.text.slice(l, c)) != a)
      break;
    l = c;
  }
  return P.range(o + s.from, l + s.from);
}
function _1(i, e, t, n, s) {
  let r = Math.round((n - e.left) * i.defaultCharacterWidth);
  if (i.lineWrapping && t.height > i.defaultLineHeight * 1.5) {
    let l = i.viewState.heightOracle.textHeight, a = Math.floor((s - t.top - (i.defaultLineHeight - l) * 0.5) / l);
    r += a * i.viewState.heightOracle.lineLength;
  }
  let o = i.state.sliceDoc(t.from, t.to);
  return t.from + ic(o, r, i.state.tabSize);
}
function mc(i, e, t) {
  let n = i.lineBlockAt(e);
  if (Array.isArray(n.type)) {
    let s;
    for (let r of n.type) {
      if (r.from > e)
        break;
      if (!(r.to < e)) {
        if (r.from < e && r.to > e)
          return r;
        (!s || r.type == nt.Text && (s.type != r.type || (t < 0 ? r.from < e : r.to > e))) && (s = r);
      }
    }
    return s || n;
  }
  return n;
}
function M1(i, e, t, n) {
  let s = mc(i, e.head, e.assoc || -1), r = !n || s.type != nt.Text || !(i.lineWrapping || s.widgetLineBreaks) ? null : i.coordsAtPos(e.assoc < 0 && e.head > s.from ? e.head - 1 : e.head);
  if (r) {
    let o = i.dom.getBoundingClientRect(), l = i.textDirectionAt(s.from), a = i.posAtCoords({
      x: t == (l == Te.LTR) ? o.right - 1 : o.left + 1,
      y: (r.top + r.bottom) / 2
    });
    if (a != null)
      return P.cursor(a, t ? -1 : 1);
  }
  return P.cursor(t ? s.to : s.from, t ? -1 : 1);
}
function xu(i, e, t, n) {
  let s = i.state.doc.lineAt(e.head), r = i.bidiSpans(s), o = i.textDirectionAt(s.from);
  for (let l = e, a = null; ; ) {
    let c = c1(s, r, o, l, t), h = Fm;
    if (!c) {
      if (s.number == (t ? i.state.doc.lines : 1))
        return l;
      h = `
`, s = i.state.doc.line(s.number + (t ? 1 : -1)), r = i.bidiSpans(s), c = i.visualLineSide(s, !t);
    }
    if (a) {
      if (!a(h))
        return l;
    } else {
      if (!n)
        return c;
      a = n(h);
    }
    l = c;
  }
}
function Q1(i, e, t) {
  let n = i.state.charCategorizer(e), s = n(t);
  return (r) => {
    let o = n(r);
    return s == Ne.Space && (s = o), s == o;
  };
}
function I1(i, e, t, n) {
  let s = e.head, r = t ? 1 : -1;
  if (s == (t ? i.state.doc.length : 0))
    return P.cursor(s, e.assoc);
  let o = e.goalColumn, l, a = i.contentDOM.getBoundingClientRect(), c = i.coordsAtPos(s, e.assoc || ((e.empty ? t : e.head == e.from) ? 1 : -1)), h = i.documentTop;
  if (c)
    o == null && (o = c.left - a.left), l = r < 0 ? c.top : c.bottom;
  else {
    let p = i.viewState.lineBlockAt(s);
    o == null && (o = Math.min(a.right - a.left, i.defaultCharacterWidth * (s - p.from))), l = (r < 0 ? p.top : p.bottom) + h;
  }
  let f = a.left + o, u = i.viewState.heightOracle.textHeight >> 1, d = n ?? u;
  for (let p = 0; ; p += u) {
    let m = l + (d + p) * r, g = gc(i, { x: f, y: m }, !1, r);
    if (t ? m > a.bottom : m < a.top)
      return P.cursor(g.pos, g.assoc);
    let b = i.coordsAtPos(g.pos, g.assoc), x = b ? (b.top + b.bottom) / 2 : 0;
    if (!b || (t ? x > l : x < l))
      return P.cursor(g.pos, g.assoc, void 0, o);
  }
}
function Fs(i, e, t) {
  for (; ; ) {
    let n = 0;
    for (let s of i)
      s.between(e - 1, e + 1, (r, o, l) => {
        if (e > r && e < o) {
          let a = n || t || (e - r < o - e ? -1 : 1);
          e = a < 0 ? r : o, n = a;
        }
      });
    if (!n)
      return e;
  }
}
function og(i, e) {
  let t = null;
  for (let n = 0; n < e.ranges.length; n++) {
    let s = e.ranges[n], r = null;
    if (s.empty) {
      let o = Fs(i, s.from, 0);
      o != s.from && (r = P.cursor(o, -1));
    } else {
      let o = Fs(i, s.from, -1), l = Fs(i, s.to, 1);
      (o != s.from || l != s.to) && (r = P.range(s.from == s.anchor ? o : l, s.from == s.head ? o : l));
    }
    r && (t || (t = e.ranges.slice()), t[n] = r);
  }
  return t ? P.create(t, e.mainIndex) : e;
}
function na(i, e, t) {
  let n = Fs(i.state.facet(Pr).map((s) => s(i)), t.from, e.head > t.from ? -1 : 1);
  return n == t.from ? t : P.cursor(n, n < t.from ? 1 : -1);
}
class gi {
  constructor(e, t) {
    this.pos = e, this.assoc = t;
  }
}
function gc(i, e, t, n) {
  let s = i.contentDOM.getBoundingClientRect(), r = s.top + i.viewState.paddingTop, { x: o, y: l } = e, a = l - r, c;
  for (; ; ) {
    if (a < 0)
      return new gi(0, 1);
    if (a > i.viewState.docHeight)
      return new gi(i.state.doc.length, -1);
    if (c = i.elementAtHeight(a), n == null)
      break;
    if (c.type == nt.Text) {
      if (n < 0 ? c.to < i.viewport.from : c.from > i.viewport.to)
        break;
      let u = i.docView.coordsAt(n < 0 ? c.from : c.to, n > 0 ? -1 : 1);
      if (u && (n < 0 ? u.top <= a + r : u.bottom >= a + r))
        break;
    }
    let f = i.viewState.heightOracle.textHeight / 2;
    a = n > 0 ? c.bottom + f : c.top - f;
  }
  if (i.viewport.from >= c.to || i.viewport.to <= c.from) {
    if (t)
      return null;
    if (c.type == nt.Text) {
      let f = _1(i, s, c, o, l);
      return new gi(f, f == c.from ? 1 : -1);
    }
  }
  if (c.type != nt.Text)
    return a < (c.top + c.bottom) / 2 ? new gi(c.from, 1) : new gi(c.to, -1);
  let h = i.docView.lineAt(c.from, 2);
  return (!h || h.length != c.length) && (h = i.docView.lineAt(c.from, -2)), new V1(i, o, l, i.textDirectionAt(c.from)).scanTile(h, c.from);
}
class V1 {
  constructor(e, t, n, s) {
    this.view = e, this.x = t, this.y = n, this.baseDir = s, this.line = null, this.spans = null;
  }
  bidiSpansAt(e) {
    return (!this.line || this.line.from > e || this.line.to < e) && (this.line = this.view.state.doc.lineAt(e), this.spans = this.view.bidiSpans(this.line)), this;
  }
  baseDirAt(e, t) {
    let { line: n, spans: s } = this.bidiSpansAt(e);
    return s[bi.find(s, e - n.from, -1, t)].level == this.baseDir;
  }
  dirAt(e, t) {
    let { line: n, spans: s } = this.bidiSpansAt(e);
    return s[bi.find(s, e - n.from, -1, t)].dir;
  }
  // Used to short-circuit bidi tests for content with a uniform direction
  bidiIn(e, t) {
    let { spans: n, line: s } = this.bidiSpansAt(e);
    return n.length > 1 || n.length && (n[0].level != this.baseDir || n[0].to + s.from < t);
  }
  // Scan through the rectangles for the content of a tile with inline
  // content, looking for one that overlaps the queried position
  // vertically andis
  // closest horizontally. The caller is responsible for dividing its
  // content into N pieces, and pass an array with N+1 positions
  // (including the position after the last piece). For a text tile,
  // these will be character clusters, for a composite tile, these
  // will be child tiles.
  scan(e, t, n = !1) {
    let s = 0, r = e.length - 1, o = /* @__PURE__ */ new Set(), l = this.bidiIn(e[0], e[r]), a, c, h = -1, f = 1e9, u;
    e: for (; s < r; ) {
      let p = r - s, m = s + r >> 1;
      t: if (o.has(m)) {
        let b = s + Math.floor(Math.random() * p);
        for (let x = 0; x < p; x++) {
          if (!o.has(b)) {
            m = b;
            break t;
          }
          b++, b == r && (b = s);
        }
        break e;
      }
      o.add(m);
      let g = t(m);
      if (g)
        for (let b = 0; b < g.length; b++) {
          let x = g[b], S = 0;
          if (!(x.width == 0 && g.length > 1)) {
            if (x.bottom < this.y)
              (!a || a.bottom < x.bottom) && (a = x), S = 1;
            else if (x.top > this.y)
              (!c || c.top > x.top) && (c = x), S = -1;
            else {
              let C = x.left > this.x ? this.x - x.left : x.right < this.x ? this.x - x.right : 0, v = Math.abs(C);
              v < f && (h = m, f = v, u = x), C && (S = C < 0 == (this.baseDir == Te.LTR) ? -1 : 1);
            }
            S == -1 && (!l || this.baseDirAt(e[m], 1)) ? r = m : S == 1 && (!l || this.baseDirAt(e[m + 1], -1)) && (s = m + 1);
          }
        }
    }
    if (!u) {
      let p = a && (!c || this.y - a.bottom < c.top - this.y) ? a : c;
      return this.y = (p.top + p.bottom) / 2, this.scan(e, t, !0);
    }
    if (f && !n) {
      let { top: p, bottom: m } = u;
      if (a && a.bottom > (p + p + m) / 3)
        return this.y = a.bottom - 1, this.scan(e, t, !0);
      if (c && c.top < (p + m + m) / 3)
        return this.y = c.top + 1, this.scan(e, t, !0);
    }
    let d = (l ? this.dirAt(e[h], 1) : this.baseDir) == Te.LTR;
    return {
      i: h,
      // Test whether x is closes to the start or end of this element
      after: this.x > (u.left + u.right) / 2 == d
    };
  }
  scanText(e, t) {
    let n = [];
    for (let r = 0; r < e.length; r = ze(e.text, r))
      n.push(t + r);
    n.push(t + e.length);
    let s = this.scan(n, (r) => {
      let o = n[r] - t, l = n[r + 1] - t;
      return nr(e.dom, o, l).getClientRects();
    });
    return s.after ? new gi(n[s.i + 1], -1) : new gi(n[s.i], 1);
  }
  scanTile(e, t) {
    if (!e.length)
      return new gi(t, 1);
    if (e.children.length == 1) {
      let l = e.children[0];
      if (l.isText())
        return this.scanText(l, t);
      if (l.isComposite())
        return this.scanTile(l, t);
    }
    let n = [t];
    for (let l = 0, a = t; l < e.children.length; l++)
      n.push(a += e.children[l].length);
    let s = this.scan(n, (l) => {
      let a = e.children[l];
      return a.flags & 48 ? null : (a.dom.nodeType == 1 ? a.dom : nr(a.dom, 0, a.length)).getClientRects();
    }), r = e.children[s.i], o = n[s.i];
    return r.isText() ? this.scanText(r, o) : r.isComposite() ? this.scanTile(r, o) : s.after ? new gi(n[s.i + 1], -1) : new gi(o, 1);
  }
}
const Qn = "￿";
class L1 {
  constructor(e, t) {
    this.points = e, this.view = t, this.text = "", this.lineSeparator = t.state.facet(pe.lineSeparator);
  }
  append(e) {
    this.text += e;
  }
  lineBreak() {
    this.text += Qn;
  }
  readRange(e, t) {
    if (!e)
      return this;
    let n = e.parentNode;
    for (let s = e; ; ) {
      this.findPointBefore(n, s);
      let r = this.text.length;
      this.readNode(s);
      let o = _e.get(s), l = s.nextSibling;
      if (l == t) {
        o != null && o.breakAfter && !l && n != this.view.contentDOM && this.lineBreak();
        break;
      }
      let a = _e.get(l);
      (o && a ? o.breakAfter : (o ? o.breakAfter : Io(s)) || Io(l) && (s.nodeName != "BR" || o != null && o.isWidget()) && this.text.length > r) && !X1(l, t) && this.lineBreak(), s = l;
    }
    return this.findPointBefore(n, t), this;
  }
  readTextNode(e) {
    let t = e.nodeValue;
    for (let n of this.points)
      n.node == e && (n.pos = this.text.length + Math.min(n.offset, t.length));
    for (let n = 0, s = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let r = -1, o = 1, l;
      if (this.lineSeparator ? (r = t.indexOf(this.lineSeparator, n), o = this.lineSeparator.length) : (l = s.exec(t)) && (r = l.index, o = l[0].length), this.append(t.slice(n, r < 0 ? t.length : r)), r < 0)
        break;
      if (this.lineBreak(), o > 1)
        for (let a of this.points)
          a.node == e && a.pos > this.text.length && (a.pos -= o - 1);
      n = r + o;
    }
  }
  readNode(e) {
    let t = _e.get(e), n = t && t.overrideDOMText;
    if (n != null) {
      this.findPointInside(e, n.length);
      for (let s = n.iter(); !s.next().done; )
        s.lineBreak ? this.lineBreak() : this.append(s.value);
    } else e.nodeType == 3 ? this.readTextNode(e) : e.nodeName == "BR" ? e.nextSibling && this.lineBreak() : e.nodeType == 1 && this.readRange(e.firstChild, null);
  }
  findPointBefore(e, t) {
    for (let n of this.points)
      n.node == e && e.childNodes[n.offset] == t && (n.pos = this.text.length);
  }
  findPointInside(e, t) {
    for (let n of this.points)
      (e.nodeType == 3 ? n.node == e : e.contains(n.node)) && (n.pos = this.text.length + (B1(e, n.node, n.offset) ? t : 0));
  }
}
function B1(i, e, t) {
  for (; ; ) {
    if (!e || t < Ri(e))
      return !1;
    if (e == i)
      return !0;
    t = Ji(e) + 1, e = e.parentNode;
  }
}
function X1(i, e) {
  let t;
  for (; !(i == e || !i); i = i.nextSibling) {
    let n = _e.get(i);
    if (!(n != null && n.isWidget()))
      return !1;
    n && (t || (t = [])).push(n);
  }
  if (t)
    for (let n of t) {
      let s = n.overrideDOMText;
      if (s != null && s.length)
        return !1;
    }
  return !0;
}
class vu {
  constructor(e, t) {
    this.node = e, this.offset = t, this.pos = -1;
  }
}
class W1 {
  constructor(e, t, n, s) {
    this.typeOver = s, this.bounds = null, this.text = "", this.domChanged = t > -1;
    let { impreciseHead: r, impreciseAnchor: o } = e.docView, l = e.state.selection;
    if (e.state.readOnly && t > -1)
      this.newSel = null;
    else if (t > -1 && (this.bounds = lg(e.docView.tile, t, n, 0))) {
      let a = r || o ? [] : q1(e), c = new L1(a, e);
      c.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = c.text, this.newSel = H1(a, this.bounds.from);
    } else {
      let a = e.observer.selectionRange, c = r && r.node == a.focusNode && r.offset == a.focusOffset || !cc(e.contentDOM, a.focusNode) ? l.main.head : e.docView.posFromDOM(a.focusNode, a.focusOffset), h = o && o.node == a.anchorNode && o.offset == a.anchorOffset || !cc(e.contentDOM, a.anchorNode) ? l.main.anchor : e.docView.posFromDOM(a.anchorNode, a.anchorOffset), f = e.viewport;
      if ((B.ios || B.chrome) && l.main.empty && c != h && (f.from > 0 || f.to < e.state.doc.length)) {
        let u = Math.min(c, h), d = Math.max(c, h), p = f.from - u, m = f.to - d;
        (p == 0 || p == 1 || u == 0) && (m == 0 || m == -1 || d == e.state.doc.length) && (c = 0, h = e.state.doc.length);
      }
      if (e.inputState.composing > -1 && l.ranges.length > 1)
        this.newSel = l.replaceRange(P.range(h, c));
      else if (e.lineWrapping && h == c && !(l.main.empty && l.main.head == c) && e.inputState.lastTouchTime > Date.now() - 100) {
        let u = e.coordsAtPos(c, -1), d = 0;
        u && (d = e.inputState.lastTouchY <= u.bottom ? -1 : 1), this.newSel = P.create([P.cursor(c, d)]);
      } else
        this.newSel = P.single(h, c);
    }
  }
}
function lg(i, e, t, n) {
  if (i.isComposite()) {
    let s = -1, r = -1, o = -1, l = -1;
    for (let a = 0, c = n, h = n; a < i.children.length; a++) {
      let f = i.children[a], u = c + f.length;
      if (c < e && u > t)
        return lg(f, e, t, c);
      if (u >= e && s == -1 && (s = a, r = c), c > t && f.dom.parentNode == i.dom) {
        o = a, l = h;
        break;
      }
      h = u, c = u + f.breakAfter;
    }
    return {
      from: r,
      to: l < 0 ? n + i.length : l,
      startDOM: (s ? i.children[s - 1].dom.nextSibling : null) || i.dom.firstChild,
      endDOM: o < i.children.length && o >= 0 ? i.children[o].dom : null
    };
  } else return i.isText() ? { from: n, to: n + i.length, startDOM: i.dom, endDOM: i.dom.nextSibling } : null;
}
function ag(i, e) {
  let t, { newSel: n } = e, { state: s } = i, r = s.selection.main, o = i.inputState.lastKeyTime > Date.now() - 100 ? i.inputState.lastKeyCode : -1;
  if (e.bounds) {
    let { from: l, to: a } = e.bounds, c = r.from, h = null;
    (o === 8 || B.android && e.text.length < a - l) && (c = r.to, h = "end");
    let f = s.doc.sliceString(l, a, Qn), u, d;
    !r.empty && r.from >= l && r.to <= a && (e.typeOver || f != e.text) && f.slice(0, r.from - l) == e.text.slice(0, r.from - l) && f.slice(r.to - l) == e.text.slice(u = e.text.length - (f.length - (r.to - l))) ? t = {
      from: r.from,
      to: r.to,
      insert: me.of(e.text.slice(r.from - l, u).split(Qn))
    } : (d = cg(f, e.text, c - l, h)) && (B.chrome && o == 13 && d.toB == d.from + 2 && e.text.slice(d.from, d.toB) == Qn + Qn && d.toB--, t = {
      from: l + d.from,
      to: l + d.toA,
      insert: me.of(e.text.slice(d.from, d.toB).split(Qn))
    });
  } else n && (!i.hasFocus && s.facet($i) || Wo(n, r)) && (n = null);
  if (!t && !n)
    return !1;
  if ((B.mac || B.android) && t && t.from == t.to && t.from == r.head - 1 && /^\. ?$/.test(t.insert.toString()) && i.contentDOM.getAttribute("autocorrect") == "off" ? (n && t.insert.length == 2 && (n = P.single(n.main.anchor - 1, n.main.head - 1)), t = { from: t.from, to: t.to, insert: me.of([t.insert.toString().replace(".", " ")]) }) : s.doc.lineAt(r.from).to < r.to && i.docView.lineHasWidget(r.to) && i.inputState.insertingTextAt > Date.now() - 50 ? t = {
    from: r.from,
    to: r.to,
    insert: s.toText(i.inputState.insertingText)
  } : B.chrome && t && t.from == t.to && t.from == r.head && t.insert.toString() == `
 ` && i.lineWrapping && (n && (n = P.single(n.main.anchor - 1, n.main.head - 1)), t = { from: r.from, to: r.to, insert: me.of([" "]) }), t)
    return kh(i, t, n, o);
  if (n && !Wo(n, r)) {
    let l = !1, a = "select";
    return i.inputState.lastSelectionTime > Date.now() - 50 && (i.inputState.lastSelectionOrigin == "select" && (l = !0), a = i.inputState.lastSelectionOrigin, a == "select.pointer" && (n = og(s.facet(Pr).map((c) => c(i)), n))), i.dispatch({ selection: n, scrollIntoView: l, userEvent: a }), !0;
  } else
    return !1;
}
function kh(i, e, t, n = -1) {
  if (B.ios && i.inputState.flushIOSKey(e))
    return !0;
  let s = i.state.selection.main;
  if (B.android && (e.to == s.to && // GBoard will sometimes remove a space it just inserted
  // after a completion when you press enter
  (e.from == s.from || e.from == s.from - 1 && i.state.sliceDoc(e.from, s.from) == " ") && e.insert.length == 1 && e.insert.lines == 2 && Kn(i.contentDOM, "Enter", 13) || (e.from == s.from - 1 && e.to == s.to && e.insert.length == 0 || n == 8 && e.insert.length < e.to - e.from && e.to > s.head) && Kn(i.contentDOM, "Backspace", 8) || e.from == s.from && e.to == s.to + 1 && e.insert.length == 0 && Kn(i.contentDOM, "Delete", 46)))
    return !0;
  let r = e.insert.toString();
  i.inputState.composing >= 0 && i.inputState.composing++;
  let o, l = () => o || (o = F1(i, e, t));
  return i.state.facet(zm).some((a) => a(i, e.from, e.to, r, l)) || i.dispatch(l()), !0;
}
function F1(i, e, t) {
  let n, s = i.state, r = s.selection.main, o = -1;
  if (e.from == e.to && e.from < r.from || e.from > r.to) {
    let a = e.from < r.from ? -1 : 1, c = a < 0 ? r.from : r.to, h = Fs(s.facet(Pr).map((f) => f(i)), c, a);
    e.from == h && (o = h);
  }
  if (o > -1)
    n = {
      changes: e,
      selection: P.cursor(e.from + e.insert.length, -1)
    };
  else if (e.from >= r.from && e.to <= r.to && e.to - e.from >= (r.to - r.from) / 3 && (!t || t.main.empty && t.main.from == e.from + e.insert.length) && i.inputState.composing < 0) {
    let a = r.from < e.from ? s.sliceDoc(r.from, e.from) : "", c = r.to > e.to ? s.sliceDoc(e.to, r.to) : "";
    n = s.replaceSelection(i.state.toText(a + e.insert.sliceString(0, void 0, i.state.lineBreak) + c));
  } else {
    let a = s.changes(e), c = t && t.main.to <= a.newLength ? t.main : void 0;
    if (s.selection.ranges.length > 1 && (i.inputState.composing >= 0 || i.inputState.compositionPendingChange) && e.to <= r.to + 10 && e.to >= r.to - 10) {
      let h = i.state.sliceDoc(e.from, e.to), f, u = t && rg(i, t.main.head);
      if (u) {
        let p = e.insert.length - (e.to - e.from);
        f = { from: u.from, to: u.to - p };
      } else
        f = i.state.doc.lineAt(r.head);
      let d = r.to - e.to;
      n = s.changeByRange((p) => {
        if (p.from == r.from && p.to == r.to)
          return { changes: a, range: c || p.map(a) };
        let m = p.to - d, g = m - h.length;
        if (i.state.sliceDoc(g, m) != h || // Unfortunately, there's no way to make multiple
        // changes in the same node work without aborting
        // composition, so cursors in the composition range are
        // ignored.
        m >= f.from && g <= f.to)
          return { range: p };
        let b = s.changes({ from: g, to: m, insert: e.insert }), x = p.to - r.to;
        return {
          changes: b,
          range: c ? P.range(Math.max(0, c.anchor + x), Math.max(0, c.head + x)) : p.map(b)
        };
      });
    } else
      n = {
        changes: a,
        selection: c && s.selection.replaceRange(c)
      };
  }
  let l = "input.type";
  return (i.composing || i.inputState.compositionPendingChange && i.inputState.compositionEndedAt > Date.now() - 50) && (i.inputState.compositionPendingChange = !1, l += ".compose", i.inputState.compositionFirstChange && (l += ".start", i.inputState.compositionFirstChange = !1)), s.update(n, { userEvent: l, scrollIntoView: !0 });
}
function cg(i, e, t, n) {
  let s = Math.min(i.length, e.length), r = 0;
  for (; r < s && i.charCodeAt(r) == e.charCodeAt(r); )
    r++;
  if (r == s && i.length == e.length)
    return null;
  let o = i.length, l = e.length;
  for (; o > 0 && l > 0 && i.charCodeAt(o - 1) == e.charCodeAt(l - 1); )
    o--, l--;
  if (n == "end") {
    let a = Math.max(0, r - Math.min(o, l));
    t -= o + a - r;
  }
  if (o < r && i.length < e.length) {
    let a = t <= r && t >= o ? r - t : 0;
    r -= a, l = r + (l - o), o = r;
  } else if (l < r) {
    let a = t <= r && t >= l ? r - t : 0;
    r -= a, o = r + (o - l), l = r;
  }
  return { from: r, toA: o, toB: l };
}
function q1(i) {
  let e = [];
  if (i.root.activeElement != i.contentDOM)
    return e;
  let { anchorNode: t, anchorOffset: n, focusNode: s, focusOffset: r } = i.observer.selectionRange;
  return t && (e.push(new vu(t, n)), (s != t || r != n) && e.push(new vu(s, r))), e;
}
function H1(i, e) {
  if (i.length == 0)
    return null;
  let t = i[0].pos, n = i.length == 2 ? i[1].pos : t;
  return t > -1 && n > -1 ? P.single(t + e, n + e) : null;
}
function Wo(i, e) {
  return e.head == i.main.head && e.anchor == i.main.anchor;
}
class U1 {
  setSelectionOrigin(e) {
    this.lastSelectionOrigin = e, this.lastSelectionTime = Date.now();
  }
  constructor(e) {
    this.view = e, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = /* @__PURE__ */ Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = e.hasFocus, B.safari && e.contentDOM.addEventListener("input", () => null), B.gecko && lv(e.contentDOM.ownerDocument);
  }
  handleEvent(e) {
    !ev(this.view, e) || this.ignoreDuringComposition(e) || e.type == "keydown" && this.keydown(e) || (this.view.updateState != 0 ? Promise.resolve().then(() => this.runHandlers(e.type, e)) : this.runHandlers(e.type, e));
  }
  runHandlers(e, t) {
    let n = this.handlers[e];
    if (n) {
      for (let s of n.observers)
        s(this.view, t);
      for (let s of n.handlers) {
        if (t.defaultPrevented)
          break;
        if (s(this.view, t)) {
          t.preventDefault();
          break;
        }
      }
    }
  }
  ensureHandlers(e) {
    let t = G1(e), n = this.handlers, s = this.view.contentDOM;
    for (let r in t)
      if (r != "scroll") {
        let o = !t[r].handlers.length, l = n[r];
        l && o != !l.handlers.length && (s.removeEventListener(r, this.handleEvent), l = null), l || s.addEventListener(r, this.handleEvent, { passive: o });
      }
    for (let r in n)
      r != "scroll" && !t[r] && s.removeEventListener(r, this.handleEvent);
    this.handlers = t;
  }
  keydown(e) {
    if (this.lastKeyCode = e.keyCode, this.lastKeyTime = Date.now(), e.keyCode == 9 && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode))
      return !0;
    if (this.tabFocusMode > 0 && e.keyCode != 27 && fg.indexOf(e.keyCode) < 0 && (this.tabFocusMode = -1), B.android && B.chrome && !e.synthetic && (e.keyCode == 13 || e.keyCode == 8))
      return this.view.observer.delayAndroidKey(e.key, e.keyCode), !0;
    let t;
    return B.ios && !e.synthetic && !e.altKey && !e.metaKey && !e.shiftKey && ((t = hg.find((n) => n.keyCode == e.keyCode)) && !e.ctrlKey || z1.indexOf(e.key) > -1 && e.ctrlKey) ? (this.pendingIOSKey = t || e, setTimeout(() => this.flushIOSKey(), 250), !0) : (e.keyCode != 229 && this.view.observer.forceFlush(), !1);
  }
  flushIOSKey(e) {
    let t = this.pendingIOSKey;
    return !t || t.key == "Enter" && e && e.from < e.to && /^\S+$/.test(e.insert.toString()) ? !1 : (this.pendingIOSKey = void 0, Kn(this.view.contentDOM, t.key, t.keyCode, t instanceof KeyboardEvent ? t : void 0));
  }
  ignoreDuringComposition(e) {
    return !/^key/.test(e.type) || e.synthetic ? !1 : this.composing > 0 ? !0 : B.safari && !B.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100 ? (this.compositionPendingKey = !1, !0) : !1;
  }
  startMouseSelection(e) {
    this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = e;
  }
  update(e) {
    this.view.observer.update(e), this.mouseSelection && this.mouseSelection.update(e), this.draggedContent && e.docChanged && (this.draggedContent = this.draggedContent.map(e.changes)), e.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
  }
  destroy() {
    this.mouseSelection && this.mouseSelection.destroy();
  }
}
function Su(i, e) {
  return (t, n) => {
    try {
      return e.call(i, n, t);
    } catch (s) {
      xt(t.state, s);
    }
  };
}
function G1(i) {
  let e = /* @__PURE__ */ Object.create(null);
  function t(n) {
    return e[n] || (e[n] = { observers: [], handlers: [] });
  }
  for (let n of i) {
    let s = n.spec, r = s && s.plugin.domEventHandlers, o = s && s.plugin.domEventObservers;
    if (r)
      for (let l in r) {
        let a = r[l];
        a && t(l).handlers.push(Su(n.value, a));
      }
    if (o)
      for (let l in o) {
        let a = o[l];
        a && t(l).observers.push(Su(n.value, a));
      }
  }
  for (let n in Jt)
    t(n).handlers.push(Jt[n]);
  for (let n in St)
    t(n).observers.push(St[n]);
  return e;
}
const hg = [
  { key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" },
  { key: "Enter", keyCode: 13, inputType: "insertParagraph" },
  { key: "Enter", keyCode: 13, inputType: "insertLineBreak" },
  { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }
], z1 = "dthko", fg = [16, 17, 18, 20, 91, 92, 224, 225], Qr = 6;
function Ir(i) {
  return Math.max(0, i) * 0.7 + 8;
}
function j1(i, e) {
  return Math.max(Math.abs(i.clientX - e.clientX), Math.abs(i.clientY - e.clientY));
}
class Y1 {
  constructor(e, t, n, s) {
    this.view = e, this.startEvent = t, this.style = n, this.mustSelect = s, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = t, this.scrollParents = _m(e.contentDOM), this.atoms = e.state.facet(Pr).map((o) => o(e));
    let r = e.contentDOM.ownerDocument;
    r.addEventListener("mousemove", this.move = this.move.bind(this)), r.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = t.shiftKey, this.multiple = e.state.facet(pe.allowMultipleSelections) && K1(e, t), this.dragging = J1(e, t) && pg(t) == 1 ? null : !1;
  }
  start(e) {
    this.dragging === !1 && this.select(e);
  }
  move(e) {
    if (e.buttons == 0)
      return this.destroy();
    if (this.dragging || this.dragging == null && j1(this.startEvent, e) < 10)
      return;
    this.select(this.lastEvent = e);
    let t = 0, n = 0, s = 0, r = 0, o = this.view.win.innerWidth, l = this.view.win.innerHeight;
    this.scrollParents.x && ({ left: s, right: o } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({ top: r, bottom: l } = this.scrollParents.y.getBoundingClientRect());
    let a = Ph(this.view);
    e.clientX - a.left <= s + Qr ? t = -Ir(s - e.clientX) : e.clientX + a.right >= o - Qr && (t = Ir(e.clientX - o)), e.clientY - a.top <= r + Qr ? n = -Ir(r - e.clientY) : e.clientY + a.bottom >= l - Qr && (n = Ir(e.clientY - l)), this.setScrollSpeed(t, n);
  }
  up(e) {
    this.dragging == null && this.select(this.lastEvent), this.dragging || e.preventDefault(), this.destroy();
  }
  destroy() {
    this.setScrollSpeed(0, 0);
    let e = this.view.contentDOM.ownerDocument;
    e.removeEventListener("mousemove", this.move), e.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null;
  }
  setScrollSpeed(e, t) {
    this.scrollSpeed = { x: e, y: t }, e || t ? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1);
  }
  scroll() {
    let { x: e, y: t } = this.scrollSpeed;
    e && this.scrollParents.x && (this.scrollParents.x.scrollLeft += e, e = 0), t && this.scrollParents.y && (this.scrollParents.y.scrollTop += t, t = 0), (e || t) && this.view.win.scrollBy(e, t), this.dragging === !1 && this.select(this.lastEvent);
  }
  select(e) {
    let { view: t } = this, n = og(this.atoms, this.style.get(e, this.extend, this.multiple));
    (this.mustSelect || !n.eq(t.state.selection, this.dragging === !1)) && this.view.dispatch({
      selection: n,
      userEvent: "select.pointer"
    }), this.mustSelect = !1;
  }
  update(e) {
    e.transactions.some((t) => t.isUserEvent("input.type")) ? this.destroy() : this.style.update(e) && setTimeout(() => this.select(this.lastEvent), 20);
  }
}
function K1(i, e) {
  let t = i.state.facet(qm);
  return t.length ? t[0](e) : B.mac ? e.metaKey : e.ctrlKey;
}
function Z1(i, e) {
  let t = i.state.facet(Hm);
  return t.length ? t[0](e) : B.mac ? !e.altKey : !e.ctrlKey;
}
function J1(i, e) {
  let { main: t } = i.state.selection;
  if (t.empty)
    return !1;
  let n = ir(i.root);
  if (!n || n.rangeCount == 0)
    return !0;
  let s = n.getRangeAt(0).getClientRects();
  for (let r = 0; r < s.length; r++) {
    let o = s[r];
    if (o.left <= e.clientX && o.right >= e.clientX && o.top <= e.clientY && o.bottom >= e.clientY)
      return !0;
  }
  return !1;
}
function ev(i, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let t = e.target, n; t != i.contentDOM; t = t.parentNode)
    if (!t || t.nodeType == 11 || (n = _e.get(t)) && n.isWidget() && !n.isHidden && n.widget.ignoreEvent(e))
      return !1;
  return !0;
}
const Jt = /* @__PURE__ */ Object.create(null), St = /* @__PURE__ */ Object.create(null), ug = B.ie && B.ie_version < 15 || B.ios && B.webkit_version < 604;
function tv(i) {
  let e = i.dom.parentNode;
  if (!e)
    return;
  let t = e.appendChild(document.createElement("textarea"));
  t.style.cssText = "position: fixed; left: -10000px; top: 10px", t.focus(), setTimeout(() => {
    i.focus(), t.remove(), dg(i, t.value);
  }, 50);
}
function kl(i, e, t) {
  for (let n of i.facet(e))
    t = n(t, i);
  return t;
}
function dg(i, e) {
  e = kl(i.state, xh, e);
  let { state: t } = i, n, s = 1, r = t.toText(e), o = r.lines == t.selection.ranges.length;
  if (Oc != null && t.selection.ranges.every((a) => a.empty) && Oc == r.toString()) {
    let a = -1;
    n = t.changeByRange((c) => {
      let h = t.doc.lineAt(c.from);
      if (h.from == a)
        return { range: c };
      a = h.from;
      let f = t.toText((o ? r.line(s++).text : e) + t.lineBreak);
      return {
        changes: { from: h.from, insert: f },
        range: P.cursor(c.from + f.length)
      };
    });
  } else o ? n = t.changeByRange((a) => {
    let c = r.line(s++);
    return {
      changes: { from: a.from, to: a.to, insert: c.text },
      range: P.cursor(a.from + c.length)
    };
  }) : n = t.replaceSelection(r);
  i.dispatch(n, {
    userEvent: "input.paste",
    scrollIntoView: !0
  });
}
St.scroll = (i) => {
  i.inputState.lastScrollTop = i.scrollDOM.scrollTop, i.inputState.lastScrollLeft = i.scrollDOM.scrollLeft;
};
St.wheel = St.mousewheel = (i) => {
  i.inputState.lastWheelEvent = Date.now();
};
Jt.keydown = (i, e) => (i.inputState.setSelectionOrigin("select"), e.keyCode == 27 && i.inputState.tabFocusMode != 0 && (i.inputState.tabFocusMode = Date.now() + 2e3), !1);
St.touchstart = (i, e) => {
  let t = i.inputState, n = e.targetTouches[0];
  t.lastTouchTime = Date.now(), n && (t.lastTouchX = n.clientX, t.lastTouchY = n.clientY), t.setSelectionOrigin("select.pointer");
};
St.touchmove = (i) => {
  i.inputState.setSelectionOrigin("select.pointer");
};
Jt.mousedown = (i, e) => {
  if (i.observer.flush(), i.inputState.lastTouchTime > Date.now() - 2e3)
    return !1;
  let t = null;
  for (let n of i.state.facet(Um))
    if (t = n(i, e), t)
      break;
  if (!t && e.button == 0 && (t = nv(i, e)), t) {
    let n = !i.hasFocus;
    i.inputState.startMouseSelection(new Y1(i, e, t, n)), n && i.observer.ignore(() => {
      Mm(i.contentDOM);
      let r = i.root.activeElement;
      r && !r.contains(i.contentDOM) && r.blur();
    });
    let s = i.inputState.mouseSelection;
    if (s)
      return s.start(e), s.dragging === !1;
  } else
    i.inputState.setSelectionOrigin("select.pointer");
  return !1;
};
function wu(i, e, t, n) {
  if (n == 1)
    return P.cursor(e, t);
  if (n == 2)
    return R1(i.state, e, t);
  {
    let s = i.docView.lineAt(e, t), r = i.state.doc.lineAt(s ? s.posAtEnd : e), o = s ? s.posAtStart : r.from, l = s ? s.posAtEnd : r.to;
    return l < i.state.doc.length && l == r.to && l++, P.range(o, l);
  }
}
const iv = B.ie && B.ie_version <= 11;
let Pu = null, ku = 0, Cu = 0;
function pg(i) {
  if (!iv)
    return i.detail;
  let e = Pu, t = Cu;
  return Pu = i, Cu = Date.now(), ku = !e || t > Date.now() - 400 && Math.abs(e.clientX - i.clientX) < 2 && Math.abs(e.clientY - i.clientY) < 2 ? (ku + 1) % 3 : 1;
}
function nv(i, e) {
  let t = i.posAndSideAtCoords({ x: e.clientX, y: e.clientY }, !1), n = pg(e), s = i.state.selection;
  return {
    update(r) {
      r.docChanged && (t.pos = r.changes.mapPos(t.pos), s = s.map(r.changes));
    },
    get(r, o, l) {
      let a = i.posAndSideAtCoords({ x: r.clientX, y: r.clientY }, !1), c, h = wu(i, a.pos, a.assoc, n);
      if (t.pos != a.pos && !o) {
        let f = wu(i, t.pos, t.assoc, n), u = Math.min(f.from, h.from), d = Math.max(f.to, h.to);
        h = u < h.from ? P.range(u, d, h.assoc) : P.range(d, u, h.assoc);
      }
      return o ? s.replaceRange(s.main.extend(h.from, h.to, h.assoc)) : l && n == 1 && s.ranges.length > 1 && (c = sv(s, a.pos)) ? c : l ? s.addRange(h) : P.create([h]);
    }
  };
}
function sv(i, e) {
  for (let t = 0; t < i.ranges.length; t++) {
    let { from: n, to: s } = i.ranges[t];
    if (n <= e && s >= e)
      return P.create(i.ranges.slice(0, t).concat(i.ranges.slice(t + 1)), i.mainIndex == t ? 0 : i.mainIndex - (i.mainIndex > t ? 1 : 0));
  }
  return null;
}
Jt.dragstart = (i, e) => {
  let { selection: { main: t } } = i.state;
  if (e.target.draggable) {
    let s = i.docView.tile.nearest(e.target);
    if (s && s.isWidget()) {
      let r = s.posAtStart, o = r + s.length;
      (r >= t.to || o <= t.from) && (t = P.range(r, o));
    }
  }
  let { inputState: n } = i;
  return n.mouseSelection && (n.mouseSelection.dragging = !0), n.draggedContent = t, e.dataTransfer && (e.dataTransfer.setData("Text", kl(i.state, vh, i.state.sliceDoc(t.from, t.to))), e.dataTransfer.effectAllowed = "copyMove"), !1;
};
Jt.dragend = (i) => (i.inputState.draggedContent = null, !1);
function Eu(i, e, t, n) {
  if (t = kl(i.state, xh, t), !t)
    return;
  let s = i.posAtCoords({ x: e.clientX, y: e.clientY }, !1), { draggedContent: r } = i.inputState, o = n && r && Z1(i, e) ? { from: r.from, to: r.to } : null, l = { from: s, insert: t }, a = i.state.changes(o ? [o, l] : l);
  i.focus(), i.dispatch({
    changes: a,
    selection: { anchor: a.mapPos(s, -1), head: a.mapPos(s, 1) },
    userEvent: o ? "move.drop" : "input.drop"
  }), i.inputState.draggedContent = null;
}
Jt.drop = (i, e) => {
  if (!e.dataTransfer)
    return !1;
  if (i.state.readOnly)
    return !0;
  let t = e.dataTransfer.files;
  if (t && t.length) {
    let n = Array(t.length), s = 0, r = () => {
      ++s == t.length && Eu(i, e, n.filter((o) => o != null).join(i.state.lineBreak), !1);
    };
    for (let o = 0; o < t.length; o++) {
      let l = new FileReader();
      l.onerror = r, l.onload = () => {
        /[\x00-\x08\x0e-\x1f]{2}/.test(l.result) || (n[o] = l.result), r();
      }, l.readAsText(t[o]);
    }
    return !0;
  } else {
    let n = e.dataTransfer.getData("Text");
    if (n)
      return Eu(i, e, n, !0), !0;
  }
  return !1;
};
Jt.paste = (i, e) => {
  if (i.state.readOnly)
    return !0;
  i.observer.flush();
  let t = ug ? null : e.clipboardData;
  return t ? (dg(i, t.getData("text/plain") || t.getData("text/uri-list")), !0) : (tv(i), !1);
};
function rv(i, e) {
  let t = i.dom.parentNode;
  if (!t)
    return;
  let n = t.appendChild(document.createElement("textarea"));
  n.style.cssText = "position: fixed; left: -10000px; top: 10px", n.value = e, n.focus(), n.selectionEnd = e.length, n.selectionStart = 0, setTimeout(() => {
    n.remove(), i.focus();
  }, 50);
}
function ov(i) {
  let e = [], t = [], n = !1;
  for (let s of i.selection.ranges)
    s.empty || (e.push(i.sliceDoc(s.from, s.to)), t.push(s));
  if (!e.length) {
    let s = -1;
    for (let { from: r } of i.selection.ranges) {
      let o = i.doc.lineAt(r);
      o.number > s && (e.push(o.text), t.push({ from: o.from, to: Math.min(i.doc.length, o.to + 1) })), s = o.number;
    }
    n = !0;
  }
  return { text: kl(i, vh, e.join(i.lineBreak)), ranges: t, linewise: n };
}
let Oc = null;
Jt.copy = Jt.cut = (i, e) => {
  if (!Xs(i.contentDOM, i.observer.selectionRange))
    return !1;
  let { text: t, ranges: n, linewise: s } = ov(i.state);
  if (!t && !s)
    return !1;
  Oc = s ? t : null, e.type == "cut" && !i.state.readOnly && i.dispatch({
    changes: n,
    scrollIntoView: !0,
    userEvent: "delete.cut"
  });
  let r = ug ? null : e.clipboardData;
  return r ? (r.clearData(), r.setData("text/plain", t), !0) : (rv(i, t), !1);
};
const mg = /* @__PURE__ */ Ii.define();
function gg(i, e) {
  let t = [];
  for (let n of i.facet(jm)) {
    let s = n(i, e);
    s && t.push(s);
  }
  return t.length ? i.update({ effects: t, annotations: mg.of(!0) }) : null;
}
function Og(i) {
  setTimeout(() => {
    let e = i.hasFocus;
    if (e != i.inputState.notifiedFocused) {
      let t = gg(i.state, e);
      t ? i.dispatch(t) : i.update([]);
    }
  }, 10);
}
St.focus = (i) => {
  i.inputState.lastFocusTime = Date.now(), !i.scrollDOM.scrollTop && (i.inputState.lastScrollTop || i.inputState.lastScrollLeft) && (i.scrollDOM.scrollTop = i.inputState.lastScrollTop, i.scrollDOM.scrollLeft = i.inputState.lastScrollLeft), Og(i);
};
St.blur = (i) => {
  i.observer.clearSelectionRange(), Og(i);
};
St.compositionstart = St.compositionupdate = (i) => {
  i.observer.editContext || (i.inputState.compositionFirstChange == null && (i.inputState.compositionFirstChange = !0), i.inputState.composing < 0 && (i.inputState.composing = 0));
};
St.compositionend = (i) => {
  i.observer.editContext || (i.inputState.composing = -1, i.inputState.compositionEndedAt = Date.now(), i.inputState.compositionPendingKey = !0, i.inputState.compositionPendingChange = i.observer.pendingRecords().length > 0, i.inputState.compositionFirstChange = null, B.chrome && B.android ? i.observer.flushSoon() : i.inputState.compositionPendingChange ? Promise.resolve().then(() => i.observer.flush()) : setTimeout(() => {
    i.inputState.composing < 0 && i.docView.hasComposition && i.update([]);
  }, 50));
};
St.contextmenu = (i) => {
  i.inputState.lastContextMenu = Date.now();
};
Jt.beforeinput = (i, e) => {
  var t, n;
  if ((e.inputType == "insertText" || e.inputType == "insertCompositionText") && (i.inputState.insertingText = e.data, i.inputState.insertingTextAt = Date.now()), e.inputType == "insertReplacementText" && i.observer.editContext) {
    let r = (t = e.dataTransfer) === null || t === void 0 ? void 0 : t.getData("text/plain"), o = e.getTargetRanges();
    if (r && o.length) {
      let l = o[0], a = i.posAtDOM(l.startContainer, l.startOffset), c = i.posAtDOM(l.endContainer, l.endOffset);
      return kh(i, { from: a, to: c, insert: i.state.toText(r) }, null), !0;
    }
  }
  let s;
  if (B.chrome && B.android && (s = hg.find((r) => r.inputType == e.inputType)) && (i.observer.delayAndroidKey(s.key, s.keyCode), s.key == "Backspace" || s.key == "Delete")) {
    let r = ((n = window.visualViewport) === null || n === void 0 ? void 0 : n.height) || 0;
    setTimeout(() => {
      var o;
      (((o = window.visualViewport) === null || o === void 0 ? void 0 : o.height) || 0) > r + 10 && i.hasFocus && (i.contentDOM.blur(), i.focus());
    }, 100);
  }
  return B.ios && e.inputType == "deleteContentForward" && i.observer.flushSoon(), B.safari && e.inputType == "insertText" && i.inputState.composing >= 0 && setTimeout(() => St.compositionend(i, e), 20), !1;
};
const Tu = /* @__PURE__ */ new Set();
function lv(i) {
  Tu.has(i) || (Tu.add(i), i.addEventListener("copy", () => {
  }), i.addEventListener("cut", () => {
  }));
}
const Au = ["pre-wrap", "normal", "pre-line", "break-spaces"];
let os = !1;
function $u() {
  os = !1;
}
class av {
  constructor(e) {
    this.lineWrapping = e, this.doc = me.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30;
  }
  heightForGap(e, t) {
    let n = this.doc.lineAt(t).number - this.doc.lineAt(e).number + 1;
    return this.lineWrapping && (n += Math.max(0, Math.ceil((t - e - n * this.lineLength * 0.5) / this.lineLength))), this.lineHeight * n;
  }
  heightForLine(e) {
    return this.lineWrapping ? (1 + Math.max(0, Math.ceil((e - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight : this.lineHeight;
  }
  setDoc(e) {
    return this.doc = e, this;
  }
  mustRefreshForWrapping(e) {
    return Au.indexOf(e) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(e) {
    let t = !1;
    for (let n = 0; n < e.length; n++) {
      let s = e[n];
      s < 0 ? n++ : this.heightSamples[Math.floor(s * 10)] || (t = !0, this.heightSamples[Math.floor(s * 10)] = !0);
    }
    return t;
  }
  refresh(e, t, n, s, r, o) {
    let l = Au.indexOf(e) > -1, a = Math.abs(t - this.lineHeight) > 0.3 || this.lineWrapping != l;
    if (this.lineWrapping = l, this.lineHeight = t, this.charWidth = n, this.textHeight = s, this.lineLength = r, a) {
      this.heightSamples = {};
      for (let c = 0; c < o.length; c++) {
        let h = o[c];
        h < 0 ? c++ : this.heightSamples[Math.floor(h * 10)] = !0;
      }
    }
    return a;
  }
}
class cv {
  constructor(e, t) {
    this.from = e, this.heights = t, this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class Ft {
  /**
  @internal
  */
  constructor(e, t, n, s, r) {
    this.from = e, this.length = t, this.top = n, this.height = s, this._content = r;
  }
  /**
  The type of element this is. When querying lines, this may be
  an array of all the blocks that make up the line.
  */
  get type() {
    return typeof this._content == "number" ? nt.Text : Array.isArray(this._content) ? this._content : this._content.type;
  }
  /**
  The end of the element as a document position.
  */
  get to() {
    return this.from + this.length;
  }
  /**
  The bottom position of the element.
  */
  get bottom() {
    return this.top + this.height;
  }
  /**
  If this is a widget block, this will return the widget
  associated with it.
  */
  get widget() {
    return this._content instanceof kn ? this._content.widget : null;
  }
  /**
  If this is a textblock, this holds the number of line breaks
  that appear in widgets inside the block.
  */
  get widgetLineBreaks() {
    return typeof this._content == "number" ? this._content : 0;
  }
  /**
  @internal
  */
  join(e) {
    let t = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(e._content) ? e._content : [e]);
    return new Ft(this.from, this.length + e.length, this.top, this.height + e.height, t);
  }
}
var Ae = /* @__PURE__ */ function(i) {
  return i[i.ByPos = 0] = "ByPos", i[i.ByHeight = 1] = "ByHeight", i[i.ByPosNoHeight = 2] = "ByPosNoHeight", i;
}(Ae || (Ae = {}));
const uo = 1e-3;
class pt {
  constructor(e, t, n = 2) {
    this.length = e, this.height = t, this.flags = n;
  }
  get outdated() {
    return (this.flags & 2) > 0;
  }
  set outdated(e) {
    this.flags = (e ? 2 : 0) | this.flags & -3;
  }
  setHeight(e) {
    this.height != e && (Math.abs(this.height - e) > uo && (os = !0), this.height = e);
  }
  // Base case is to replace a leaf node, which simply builds a tree
  // from the new nodes and returns that (HeightMapBranch and
  // HeightMapGap override this to actually use from/to)
  replace(e, t, n) {
    return pt.of(n);
  }
  // Again, these are base cases, and are overridden for branch and gap nodes.
  decomposeLeft(e, t) {
    t.push(this);
  }
  decomposeRight(e, t) {
    t.push(this);
  }
  applyChanges(e, t, n, s) {
    let r = this, o = n.doc;
    for (let l = s.length - 1; l >= 0; l--) {
      let { fromA: a, toA: c, fromB: h, toB: f } = s[l], u = r.lineAt(a, Ae.ByPosNoHeight, n.setDoc(t), 0, 0), d = u.to >= c ? u : r.lineAt(c, Ae.ByPosNoHeight, n, 0, 0);
      for (f += d.to - c, c = d.to; l > 0 && u.from <= s[l - 1].toA; )
        a = s[l - 1].fromA, h = s[l - 1].fromB, l--, a < u.from && (u = r.lineAt(a, Ae.ByPosNoHeight, n, 0, 0));
      h += u.from - a, a = u.from;
      let p = Ch.build(n.setDoc(o), e, h, f);
      r = Fo(r, r.replace(a, c, p));
    }
    return r.updateHeight(n, 0);
  }
  static empty() {
    return new Tt(0, 0, 0);
  }
  // nodes uses null values to indicate the position of line breaks.
  // There are never line breaks at the start or end of the array, or
  // two line breaks next to each other, and the array isn't allowed
  // to be empty (same restrictions as return value from the builder).
  static of(e) {
    if (e.length == 1)
      return e[0];
    let t = 0, n = e.length, s = 0, r = 0;
    for (; ; )
      if (t == n)
        if (s > r * 2) {
          let l = e[t - 1];
          l.break ? e.splice(--t, 1, l.left, null, l.right) : e.splice(--t, 1, l.left, l.right), n += 1 + l.break, s -= l.size;
        } else if (r > s * 2) {
          let l = e[n];
          l.break ? e.splice(n, 1, l.left, null, l.right) : e.splice(n, 1, l.left, l.right), n += 2 + l.break, r -= l.size;
        } else
          break;
      else if (s < r) {
        let l = e[t++];
        l && (s += l.size);
      } else {
        let l = e[--n];
        l && (r += l.size);
      }
    let o = 0;
    return e[t - 1] == null ? (o = 1, t--) : e[t] == null && (o = 1, n++), new fv(pt.of(e.slice(0, t)), o, pt.of(e.slice(n)));
  }
}
function Fo(i, e) {
  return i == e ? i : (i.constructor != e.constructor && (os = !0), e);
}
pt.prototype.size = 1;
const hv = /* @__PURE__ */ Y.replace({});
class bg extends pt {
  constructor(e, t, n) {
    super(e, t), this.deco = n, this.spaceAbove = 0;
  }
  mainBlock(e, t) {
    return new Ft(t, this.length, e + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0);
  }
  blockAt(e, t, n, s) {
    return this.spaceAbove && e < n + this.spaceAbove ? new Ft(s, 0, n, this.spaceAbove, hv) : this.mainBlock(n, s);
  }
  lineAt(e, t, n, s, r) {
    let o = this.mainBlock(s, r);
    return this.spaceAbove ? this.blockAt(0, n, s, r).join(o) : o;
  }
  forEachLine(e, t, n, s, r, o) {
    e <= r + this.length && t >= r && o(this.lineAt(0, Ae.ByPos, n, s, r));
  }
  setMeasuredHeight(e) {
    let t = e.heights[e.index++];
    t < 0 ? (this.spaceAbove = -t, t = e.heights[e.index++]) : this.spaceAbove = 0, this.setHeight(t);
  }
  updateHeight(e, t = 0, n = !1, s) {
    return s && s.from <= t && s.more && this.setMeasuredHeight(s), this.outdated = !1, this;
  }
  toString() {
    return `block(${this.length})`;
  }
}
class Tt extends bg {
  constructor(e, t, n) {
    super(e, t, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = n;
  }
  mainBlock(e, t) {
    return new Ft(t, this.length, e + this.spaceAbove, this.height - this.spaceAbove, this.breaks);
  }
  replace(e, t, n) {
    let s = n[0];
    return n.length == 1 && (s instanceof Tt || s instanceof Je && s.flags & 4) && Math.abs(this.length - s.length) < 10 ? (s instanceof Je ? s = new Tt(s.length, this.height, this.spaceAbove) : s.height = this.height, this.outdated || (s.outdated = !1), s) : pt.of(n);
  }
  updateHeight(e, t = 0, n = !1, s) {
    return s && s.from <= t && s.more ? this.setMeasuredHeight(s) : (n || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, e.heightForLine(this.length - this.collapsed)) + this.breaks * e.lineHeight)), this.outdated = !1, this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
}
class Je extends pt {
  constructor(e) {
    super(e, 0);
  }
  heightMetrics(e, t) {
    let n = e.doc.lineAt(t).number, s = e.doc.lineAt(t + this.length).number, r = s - n + 1, o, l = 0;
    if (e.lineWrapping) {
      let a = Math.min(this.height, e.lineHeight * r);
      o = a / r, this.length > r + 1 && (l = (this.height - a) / (this.length - r - 1));
    } else
      o = this.height / r;
    return { firstLine: n, lastLine: s, perLine: o, perChar: l };
  }
  blockAt(e, t, n, s) {
    let { firstLine: r, lastLine: o, perLine: l, perChar: a } = this.heightMetrics(t, s);
    if (t.lineWrapping) {
      let c = s + (e < t.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (e - n) / this.height)) * this.length)), h = t.doc.lineAt(c), f = l + h.length * a, u = Math.max(n, e - f / 2);
      return new Ft(h.from, h.length, u, f, 0);
    } else {
      let c = Math.max(0, Math.min(o - r, Math.floor((e - n) / l))), { from: h, length: f } = t.doc.line(r + c);
      return new Ft(h, f, n + l * c, l, 0);
    }
  }
  lineAt(e, t, n, s, r) {
    if (t == Ae.ByHeight)
      return this.blockAt(e, n, s, r);
    if (t == Ae.ByPosNoHeight) {
      let { from: d, to: p } = n.doc.lineAt(e);
      return new Ft(d, p - d, 0, 0, 0);
    }
    let { firstLine: o, perLine: l, perChar: a } = this.heightMetrics(n, r), c = n.doc.lineAt(e), h = l + c.length * a, f = c.number - o, u = s + l * f + a * (c.from - r - f);
    return new Ft(c.from, c.length, Math.max(s, Math.min(u, s + this.height - h)), h, 0);
  }
  forEachLine(e, t, n, s, r, o) {
    e = Math.max(e, r), t = Math.min(t, r + this.length);
    let { firstLine: l, perLine: a, perChar: c } = this.heightMetrics(n, r);
    for (let h = e, f = s; h <= t; ) {
      let u = n.doc.lineAt(h);
      if (h == e) {
        let p = u.number - l;
        f += a * p + c * (e - r - p);
      }
      let d = a + c * u.length;
      o(new Ft(u.from, u.length, f, d, 0)), f += d, h = u.to + 1;
    }
  }
  replace(e, t, n) {
    let s = this.length - t;
    if (s > 0) {
      let r = n[n.length - 1];
      r instanceof Je ? n[n.length - 1] = new Je(r.length + s) : n.push(null, new Je(s - 1));
    }
    if (e > 0) {
      let r = n[0];
      r instanceof Je ? n[0] = new Je(e + r.length) : n.unshift(new Je(e - 1), null);
    }
    return pt.of(n);
  }
  decomposeLeft(e, t) {
    t.push(new Je(e - 1), null);
  }
  decomposeRight(e, t) {
    t.push(null, new Je(this.length - e - 1));
  }
  updateHeight(e, t = 0, n = !1, s) {
    let r = t + this.length;
    if (s && s.from <= t + this.length && s.more) {
      let o = [], l = Math.max(t, s.from), a = -1;
      for (s.from > t && o.push(new Je(s.from - t - 1).updateHeight(e, t)); l <= r && s.more; ) {
        let h = e.doc.lineAt(l).length;
        o.length && o.push(null);
        let f = s.heights[s.index++], u = 0;
        f < 0 && (u = -f, f = s.heights[s.index++]), a == -1 ? a = f : Math.abs(f - a) >= uo && (a = -2);
        let d = new Tt(h, f, u);
        d.outdated = !1, o.push(d), l += h + 1;
      }
      l <= r && o.push(null, new Je(r - l).updateHeight(e, l));
      let c = pt.of(o);
      return (a < 0 || Math.abs(c.height - this.height) >= uo || Math.abs(a - this.heightMetrics(e, t).perLine) >= uo) && (os = !0), Fo(this, c);
    } else (n || this.outdated) && (this.setHeight(e.heightForGap(t, t + this.length)), this.outdated = !1);
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class fv extends pt {
  constructor(e, t, n) {
    super(e.length + t + n.length, e.height + n.height, t | (e.outdated || n.outdated ? 2 : 0)), this.left = e, this.right = n, this.size = e.size + n.size;
  }
  get break() {
    return this.flags & 1;
  }
  blockAt(e, t, n, s) {
    let r = n + this.left.height;
    return e < r ? this.left.blockAt(e, t, n, s) : this.right.blockAt(e, t, r, s + this.left.length + this.break);
  }
  lineAt(e, t, n, s, r) {
    let o = s + this.left.height, l = r + this.left.length + this.break, a = t == Ae.ByHeight ? e < o : e < l, c = a ? this.left.lineAt(e, t, n, s, r) : this.right.lineAt(e, t, n, o, l);
    if (this.break || (a ? c.to < l : c.from > l))
      return c;
    let h = t == Ae.ByPosNoHeight ? Ae.ByPosNoHeight : Ae.ByPos;
    return a ? c.join(this.right.lineAt(l, h, n, o, l)) : this.left.lineAt(l, h, n, s, r).join(c);
  }
  forEachLine(e, t, n, s, r, o) {
    let l = s + this.left.height, a = r + this.left.length + this.break;
    if (this.break)
      e < a && this.left.forEachLine(e, t, n, s, r, o), t >= a && this.right.forEachLine(e, t, n, l, a, o);
    else {
      let c = this.lineAt(a, Ae.ByPos, n, s, r);
      e < c.from && this.left.forEachLine(e, c.from - 1, n, s, r, o), c.to >= e && c.from <= t && o(c), t > c.to && this.right.forEachLine(c.to + 1, t, n, l, a, o);
    }
  }
  replace(e, t, n) {
    let s = this.left.length + this.break;
    if (t < s)
      return this.balanced(this.left.replace(e, t, n), this.right);
    if (e > this.left.length)
      return this.balanced(this.left, this.right.replace(e - s, t - s, n));
    let r = [];
    e > 0 && this.decomposeLeft(e, r);
    let o = r.length;
    for (let l of n)
      r.push(l);
    if (e > 0 && Du(r, o - 1), t < this.length) {
      let l = r.length;
      this.decomposeRight(t, r), Du(r, l);
    }
    return pt.of(r);
  }
  decomposeLeft(e, t) {
    let n = this.left.length;
    if (e <= n)
      return this.left.decomposeLeft(e, t);
    t.push(this.left), this.break && (n++, e >= n && t.push(null)), e > n && this.right.decomposeLeft(e - n, t);
  }
  decomposeRight(e, t) {
    let n = this.left.length, s = n + this.break;
    if (e >= s)
      return this.right.decomposeRight(e - s, t);
    e < n && this.left.decomposeRight(e, t), this.break && e < s && t.push(null), t.push(this.right);
  }
  balanced(e, t) {
    return e.size > 2 * t.size || t.size > 2 * e.size ? pt.of(this.break ? [e, null, t] : [e, t]) : (this.left = Fo(this.left, e), this.right = Fo(this.right, t), this.setHeight(e.height + t.height), this.outdated = e.outdated || t.outdated, this.size = e.size + t.size, this.length = e.length + this.break + t.length, this);
  }
  updateHeight(e, t = 0, n = !1, s) {
    let { left: r, right: o } = this, l = t + r.length + this.break, a = null;
    return s && s.from <= t + r.length && s.more ? a = r = r.updateHeight(e, t, n, s) : r.updateHeight(e, t, n), s && s.from <= l + o.length && s.more ? a = o = o.updateHeight(e, l, n, s) : o.updateHeight(e, l, n), a ? this.balanced(r, o) : (this.height = this.left.height + this.right.height, this.outdated = !1, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function Du(i, e) {
  let t, n;
  i[e] == null && (t = i[e - 1]) instanceof Je && (n = i[e + 1]) instanceof Je && i.splice(e - 1, 3, new Je(t.length + 1 + n.length));
}
const uv = 5;
class Ch {
  constructor(e, t) {
    this.pos = e, this.oracle = t, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = e;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(e, t) {
    if (this.lineStart > -1) {
      let n = Math.min(t, this.lineEnd), s = this.nodes[this.nodes.length - 1];
      s instanceof Tt ? s.length += n - this.pos : (n > this.pos || !this.isCovered) && this.nodes.push(new Tt(n - this.pos, -1, 0)), this.writtenTo = n, t > n && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = t;
  }
  point(e, t, n) {
    if (e < t || n.heightRelevant) {
      let s = n.widget ? n.widget.estimatedHeight : 0, r = n.widget ? n.widget.lineBreaks : 0;
      s < 0 && (s = this.oracle.lineHeight);
      let o = t - e;
      n.block ? this.addBlock(new bg(o, s, n)) : (o || r || s >= uv) && this.addLineDeco(s, r, o);
    } else t > e && this.span(e, t);
    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1)
      return;
    let { from: e, to: t } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = e, this.lineEnd = t, this.writtenTo < e && ((this.writtenTo < e - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, e - 1)), this.nodes.push(null)), this.pos > e && this.nodes.push(new Tt(this.pos - e, -1, 0)), this.writtenTo = this.pos;
  }
  blankContent(e, t) {
    let n = new Je(t - e);
    return this.oracle.doc.lineAt(e).to == t && (n.flags |= 4), n;
  }
  ensureLine() {
    this.enterLine();
    let e = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (e instanceof Tt)
      return e;
    let t = new Tt(0, -1, 0);
    return this.nodes.push(t), t;
  }
  addBlock(e) {
    this.enterLine();
    let t = e.deco;
    t && t.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(e), this.writtenTo = this.pos = this.pos + e.length, t && t.endSide > 0 && (this.covering = e);
  }
  addLineDeco(e, t, n) {
    let s = this.ensureLine();
    s.length += n, s.collapsed += n, s.widgetHeight = Math.max(s.widgetHeight, e), s.breaks += t, this.writtenTo = this.pos = this.pos + n;
  }
  finish(e) {
    let t = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
    this.lineStart > -1 && !(t instanceof Tt) && !this.isCovered ? this.nodes.push(new Tt(0, -1, 0)) : (this.writtenTo < this.pos || t == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let n = e;
    for (let s of this.nodes)
      s instanceof Tt && s.updateHeight(this.oracle, n), n += s ? s.length : 1;
    return this.nodes;
  }
  // Always called with a region that on both sides either stretches
  // to a line break or the end of the document.
  // The returned array uses null to indicate line breaks, but never
  // starts or ends in a line break, or has multiple line breaks next
  // to each other.
  static build(e, t, n, s) {
    let r = new Ch(n, e);
    return ce.spans(t, n, s, r, 0), r.finish(n);
  }
}
function dv(i, e, t) {
  let n = new pv();
  return ce.compare(i, e, t, n, 0), n.changes;
}
class pv {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(e, t, n, s) {
    (e < t || n && n.heightRelevant || s && s.heightRelevant) && Yn(e, t, this.changes, 5);
  }
}
function mv(i, e) {
  let t = i.getBoundingClientRect(), n = i.ownerDocument, s = n.defaultView || window, r = Math.max(0, t.left), o = Math.min(s.innerWidth, t.right), l = Math.max(0, t.top), a = Math.min(s.innerHeight, t.bottom);
  for (let c = i.parentNode; c && c != n.body; )
    if (c.nodeType == 1) {
      let h = c, f = window.getComputedStyle(h);
      if ((h.scrollHeight > h.clientHeight || h.scrollWidth > h.clientWidth) && f.overflow != "visible") {
        let u = h.getBoundingClientRect();
        r = Math.max(r, u.left), o = Math.min(o, u.right), l = Math.max(l, u.top), a = Math.min(c == i.parentNode ? s.innerHeight : a, u.bottom);
      }
      c = f.position == "absolute" || f.position == "fixed" ? h.offsetParent : h.parentNode;
    } else if (c.nodeType == 11)
      c = c.host;
    else
      break;
  return {
    left: r - t.left,
    right: Math.max(r, o) - t.left,
    top: l - (t.top + e),
    bottom: Math.max(l, a) - (t.top + e)
  };
}
function gv(i) {
  let e = i.getBoundingClientRect(), t = i.ownerDocument.defaultView || window;
  return e.left < t.innerWidth && e.right > 0 && e.top < t.innerHeight && e.bottom > 0;
}
function Ov(i, e) {
  let t = i.getBoundingClientRect();
  return {
    left: 0,
    right: t.right - t.left,
    top: e,
    bottom: t.bottom - (t.top + e)
  };
}
class sa {
  constructor(e, t, n, s) {
    this.from = e, this.to = t, this.size = n, this.displaySize = s;
  }
  static same(e, t) {
    if (e.length != t.length)
      return !1;
    for (let n = 0; n < e.length; n++) {
      let s = e[n], r = t[n];
      if (s.from != r.from || s.to != r.to || s.size != r.size)
        return !1;
    }
    return !0;
  }
  draw(e, t) {
    return Y.replace({
      widget: new bv(this.displaySize * (t ? e.scaleY : e.scaleX), t)
    }).range(this.from, this.to);
  }
}
class bv extends Vi {
  constructor(e, t) {
    super(), this.size = e, this.vertical = t;
  }
  eq(e) {
    return e.size == this.size && e.vertical == this.vertical;
  }
  toDOM() {
    let e = document.createElement("div");
    return this.vertical ? e.style.height = this.size + "px" : (e.style.width = this.size + "px", e.style.height = "2px", e.style.display = "inline-block"), e;
  }
  get estimatedHeight() {
    return this.vertical ? this.size : -1;
  }
}
class Nu {
  constructor(e, t) {
    this.view = e, this.state = t, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = Ru, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = Te.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1;
    let n = t.facet(Sh).some((s) => typeof s != "function" && s.class == "cm-lineWrapping");
    this.heightOracle = new av(n), this.stateDeco = _u(t), this.heightMap = pt.empty().applyChanges(this.stateDeco, me.empty, this.heightOracle.setDoc(t.doc), [new Qt(0, 0, 0, t.doc.length)]);
    for (let s = 0; s < 2 && (this.viewport = this.getViewport(0, null), !!this.updateForViewport()); s++)
      ;
    this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = Y.set(this.lineGaps.map((s) => s.draw(this, !1))), this.scrollParent = e.scrollDOM, this.computeVisibleRanges();
  }
  updateForViewport() {
    let e = [this.viewport], { main: t } = this.state.selection;
    for (let n = 0; n <= 1; n++) {
      let s = n ? t.head : t.anchor;
      if (!e.some(({ from: r, to: o }) => s >= r && s <= o)) {
        let { from: r, to: o } = this.lineBlockAt(s);
        e.push(new Vr(r, o));
      }
    }
    return this.viewports = e.sort((n, s) => n.from - s.from), this.updateScaler();
  }
  updateScaler() {
    let e = this.scaler;
    return this.scaler = this.heightMap.height <= 7e6 ? Ru : new Eh(this.heightOracle, this.heightMap, this.viewports), e.eq(this.scaler) ? 0 : 2;
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (e) => {
      this.viewportLines.push($s(e, this.scaler));
    });
  }
  update(e, t = null) {
    this.state = e.state;
    let n = this.stateDeco;
    this.stateDeco = _u(this.state);
    let s = e.changedRanges, r = Qt.extendWithRanges(s, dv(n, this.stateDeco, e ? e.changes : Fe.empty(this.state.doc.length))), o = this.heightMap.height, l = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
    $u(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, e.startState.doc, this.heightOracle.setDoc(this.state.doc), r), (this.heightMap.height != o || os) && (e.flags |= 2), l ? (this.scrollAnchorPos = e.changes.mapPos(l.from, -1), this.scrollAnchorHeight = l.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = o);
    let a = r.length ? this.mapViewport(this.viewport, e.changes) : this.viewport;
    (t && (t.range.head < a.from || t.range.head > a.to) || !this.viewportIsAppropriate(a)) && (a = this.getViewport(0, t));
    let c = a.from != this.viewport.from || a.to != this.viewport.to;
    this.viewport = a, e.flags |= this.updateForViewport(), (c || !e.changes.empty || e.flags & 2) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes))), e.flags |= this.computeVisibleRanges(e.changes), t && (this.scrollTarget = t), !this.mustEnforceCursorAssoc && (e.selectionSet || e.focusChanged) && e.view.lineWrapping && e.state.selection.main.empty && e.state.selection.main.assoc && !e.state.facet(Km) && (this.mustEnforceCursorAssoc = !0);
  }
  measure() {
    let { view: e } = this, t = e.contentDOM, n = window.getComputedStyle(t), s = this.heightOracle, r = n.whiteSpace;
    this.defaultTextDirection = n.direction == "rtl" ? Te.RTL : Te.LTR;
    let o = this.heightOracle.mustRefreshForWrapping(r) || this.mustMeasureContent === "refresh", l = t.getBoundingClientRect(), a = o || this.mustMeasureContent || this.contentDOMHeight != l.height;
    this.contentDOMHeight = l.height, this.mustMeasureContent = !1;
    let c = 0, h = 0;
    if (l.width && l.height) {
      let { scaleX: v, scaleY: T } = Rm(t, l);
      (v > 5e-3 && Math.abs(this.scaleX - v) > 5e-3 || T > 5e-3 && Math.abs(this.scaleY - T) > 5e-3) && (this.scaleX = v, this.scaleY = T, c |= 16, o = a = !0);
    }
    let f = (parseInt(n.paddingTop) || 0) * this.scaleY, u = (parseInt(n.paddingBottom) || 0) * this.scaleY;
    (this.paddingTop != f || this.paddingBottom != u) && (this.paddingTop = f, this.paddingBottom = u, c |= 18), this.editorWidth != e.scrollDOM.clientWidth && (s.lineWrapping && (a = !0), this.editorWidth = e.scrollDOM.clientWidth, c |= 16);
    let d = _m(this.view.contentDOM, !1).y;
    d != this.scrollParent && (this.scrollParent = d, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
    let p = this.getScrollOffset();
    this.scrollOffset != p && (this.scrollAnchorHeight = -1, this.scrollOffset = p), this.scrolledToBottom = Qm(this.scrollParent || e.win);
    let m = (this.printing ? Ov : mv)(t, this.paddingTop), g = m.top - this.pixelViewport.top, b = m.bottom - this.pixelViewport.bottom;
    this.pixelViewport = m;
    let x = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (x != this.inView && (this.inView = x, x && (a = !0)), !this.inView && !this.scrollTarget && !gv(e.dom))
      return 0;
    let S = l.width;
    if ((this.contentDOMWidth != S || this.editorHeight != e.scrollDOM.clientHeight) && (this.contentDOMWidth = l.width, this.editorHeight = e.scrollDOM.clientHeight, c |= 16), a) {
      let v = e.docView.measureVisibleLineHeights(this.viewport);
      if (s.mustRefreshForHeights(v) && (o = !0), o || s.lineWrapping && Math.abs(S - this.contentDOMWidth) > s.charWidth) {
        let { lineHeight: T, charWidth: N, textHeight: W } = e.docView.measureTextSize();
        o = T > 0 && s.refresh(r, T, N, W, Math.max(5, S / N), v), o && (e.docView.minWidth = 0, c |= 16);
      }
      g > 0 && b > 0 ? h = Math.max(g, b) : g < 0 && b < 0 && (h = Math.min(g, b)), $u();
      for (let T of this.viewports) {
        let N = T.from == this.viewport.from ? v : e.docView.measureVisibleLineHeights(T);
        this.heightMap = (o ? pt.empty().applyChanges(this.stateDeco, me.empty, this.heightOracle, [new Qt(0, 0, 0, e.state.doc.length)]) : this.heightMap).updateHeight(s, 0, o, new cv(T.from, N));
      }
      os && (c |= 2);
    }
    let C = !this.viewportIsAppropriate(this.viewport, h) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    return C && (c & 2 && (c |= this.updateScaler()), this.viewport = this.getViewport(h, this.scrollTarget), c |= this.updateForViewport()), (c & 2 || C) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(o ? [] : this.lineGaps, e)), c |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, e.docView.enforceCursorAssoc()), c;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(e, t) {
    let n = 0.5 - Math.max(-0.5, Math.min(0.5, e / 1e3 / 2)), s = this.heightMap, r = this.heightOracle, { visibleTop: o, visibleBottom: l } = this, a = new Vr(s.lineAt(o - n * 1e3, Ae.ByHeight, r, 0, 0).from, s.lineAt(l + (1 - n) * 1e3, Ae.ByHeight, r, 0, 0).to);
    if (t) {
      let { head: c } = t.range;
      if (c < a.from || c > a.to) {
        let h = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), f = s.lineAt(c, Ae.ByPos, r, 0, 0), u;
        t.y == "center" ? u = (f.top + f.bottom) / 2 - h / 2 : t.y == "start" || t.y == "nearest" && c < a.from ? u = f.top : u = f.bottom - h, a = new Vr(s.lineAt(u - 1e3 / 2, Ae.ByHeight, r, 0, 0).from, s.lineAt(u + h + 1e3 / 2, Ae.ByHeight, r, 0, 0).to);
      }
    }
    return a;
  }
  mapViewport(e, t) {
    let n = t.mapPos(e.from, -1), s = t.mapPos(e.to, 1);
    return new Vr(this.heightMap.lineAt(n, Ae.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(s, Ae.ByPos, this.heightOracle, 0, 0).to);
  }
  // Checks if a given viewport covers the visible part of the
  // document and not too much beyond that.
  viewportIsAppropriate({ from: e, to: t }, n = 0) {
    if (!this.inView)
      return !0;
    let { top: s } = this.heightMap.lineAt(e, Ae.ByPos, this.heightOracle, 0, 0), { bottom: r } = this.heightMap.lineAt(t, Ae.ByPos, this.heightOracle, 0, 0), { visibleTop: o, visibleBottom: l } = this;
    return (e == 0 || s <= o - Math.max(10, Math.min(
      -n,
      250
      /* VP.MaxCoverMargin */
    ))) && (t == this.state.doc.length || r >= l + Math.max(10, Math.min(
      n,
      250
      /* VP.MaxCoverMargin */
    ))) && s > o - 2 * 1e3 && r < l + 2 * 1e3;
  }
  mapLineGaps(e, t) {
    if (!e.length || t.empty)
      return e;
    let n = [];
    for (let s of e)
      t.touchesRange(s.from, s.to) || n.push(new sa(t.mapPos(s.from), t.mapPos(s.to), s.size, s.displaySize));
    return n;
  }
  // Computes positions in the viewport where the start or end of a
  // line should be hidden, trying to reuse existing line gaps when
  // appropriate to avoid unneccesary redraws.
  // Uses crude character-counting for the positioning and sizing,
  // since actual DOM coordinates aren't always available and
  // predictable. Relies on generous margins (see LG.Margin) to hide
  // the artifacts this might produce from the user.
  ensureLineGaps(e, t) {
    let n = this.heightOracle.lineWrapping, s = n ? 1e4 : 2e3, r = s >> 1, o = s << 1;
    if (this.defaultTextDirection != Te.LTR && !n)
      return [];
    let l = [], a = (h, f, u, d) => {
      if (f - h < r)
        return;
      let p = this.state.selection.main, m = [p.from];
      p.empty || m.push(p.to);
      for (let b of m)
        if (b > h && b < f) {
          a(h, b - 10, u, d), a(b + 10, f, u, d);
          return;
        }
      let g = xv(e, (b) => b.from >= u.from && b.to <= u.to && Math.abs(b.from - h) < r && Math.abs(b.to - f) < r && !m.some((x) => b.from < x && b.to > x));
      if (!g) {
        if (f < u.to && t && n && t.visibleRanges.some((S) => S.from <= f && S.to >= f)) {
          let S = t.moveToLineBoundary(P.cursor(f), !1, !0).head;
          S > h && (f = S);
        }
        let b = this.gapSize(u, h, f, d), x = n || b < 2e6 ? b : 2e6;
        g = new sa(h, f, b, x);
      }
      l.push(g);
    }, c = (h) => {
      if (h.length < o || h.type != nt.Text)
        return;
      let f = yv(h.from, h.to, this.stateDeco);
      if (f.total < o)
        return;
      let u = this.scrollTarget ? this.scrollTarget.range.head : null, d, p;
      if (n) {
        let m = s / this.heightOracle.lineLength * this.heightOracle.lineHeight, g, b;
        if (u != null) {
          let x = Br(f, u), S = ((this.visibleBottom - this.visibleTop) / 2 + m) / h.height;
          g = x - S, b = x + S;
        } else
          g = (this.visibleTop - h.top - m) / h.height, b = (this.visibleBottom - h.top + m) / h.height;
        d = Lr(f, g), p = Lr(f, b);
      } else {
        let m = f.total * this.heightOracle.charWidth, g = s * this.heightOracle.charWidth, b = 0;
        if (m > 2e6)
          for (let T of e)
            T.from >= h.from && T.from < h.to && T.size != T.displaySize && T.from * this.heightOracle.charWidth + b < this.pixelViewport.left && (b = T.size - T.displaySize);
        let x = this.pixelViewport.left + b, S = this.pixelViewport.right + b, C, v;
        if (u != null) {
          let T = Br(f, u), N = ((S - x) / 2 + g) / m;
          C = T - N, v = T + N;
        } else
          C = (x - g) / m, v = (S + g) / m;
        d = Lr(f, C), p = Lr(f, v);
      }
      d > h.from && a(h.from, d, h, f), p < h.to && a(p, h.to, h, f);
    };
    for (let h of this.viewportLines)
      Array.isArray(h.type) ? h.type.forEach(c) : c(h);
    return l;
  }
  gapSize(e, t, n, s) {
    let r = Br(s, n) - Br(s, t);
    return this.heightOracle.lineWrapping ? e.height * r : s.total * this.heightOracle.charWidth * r;
  }
  updateLineGaps(e) {
    sa.same(e, this.lineGaps) || (this.lineGaps = e, this.lineGapDeco = Y.set(e.map((t) => t.draw(this, this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges(e) {
    let t = this.stateDeco;
    this.lineGaps.length && (t = t.concat(this.lineGapDeco));
    let n = [];
    ce.spans(t, this.viewport.from, this.viewport.to, {
      span(r, o) {
        n.push({ from: r, to: o });
      },
      point() {
      }
    }, 20);
    let s = 0;
    if (n.length != this.visibleRanges.length)
      s = 12;
    else
      for (let r = 0; r < n.length && !(s & 8); r++) {
        let o = this.visibleRanges[r], l = n[r];
        (o.from != l.from || o.to != l.to) && (s |= 4, e && e.mapPos(o.from, -1) == l.from && e.mapPos(o.to, 1) == l.to || (s |= 8));
      }
    return this.visibleRanges = n, s;
  }
  lineBlockAt(e) {
    return e >= this.viewport.from && e <= this.viewport.to && this.viewportLines.find((t) => t.from <= e && t.to >= e) || $s(this.heightMap.lineAt(e, Ae.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(e) {
    return e >= this.viewportLines[0].top && e <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((t) => t.top <= e && t.bottom >= e) || $s(this.heightMap.lineAt(this.scaler.fromDOM(e), Ae.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  getScrollOffset() {
    return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY;
  }
  scrollAnchorAt(e) {
    let t = this.lineBlockAtHeight(e + 8);
    return t.from >= this.viewport.from || this.viewportLines[0].top - e > 200 ? t : this.viewportLines[0];
  }
  elementAtHeight(e) {
    return $s(this.heightMap.blockAt(this.scaler.fromDOM(e), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class Vr {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
}
function yv(i, e, t) {
  let n = [], s = i, r = 0;
  return ce.spans(t, i, e, {
    span() {
    },
    point(o, l) {
      o > s && (n.push({ from: s, to: o }), r += o - s), s = l;
    }
  }, 20), s < e && (n.push({ from: s, to: e }), r += e - s), { total: r, ranges: n };
}
function Lr({ total: i, ranges: e }, t) {
  if (t <= 0)
    return e[0].from;
  if (t >= 1)
    return e[e.length - 1].to;
  let n = Math.floor(i * t);
  for (let s = 0; ; s++) {
    let { from: r, to: o } = e[s], l = o - r;
    if (n <= l)
      return r + n;
    n -= l;
  }
}
function Br(i, e) {
  let t = 0;
  for (let { from: n, to: s } of i.ranges) {
    if (e <= s) {
      t += e - n;
      break;
    }
    t += s - n;
  }
  return t / i.total;
}
function xv(i, e) {
  for (let t of i)
    if (e(t))
      return t;
}
const Ru = {
  toDOM(i) {
    return i;
  },
  fromDOM(i) {
    return i;
  },
  scale: 1,
  eq(i) {
    return i == this;
  }
};
function _u(i) {
  let e = i.facet(Sl).filter((n) => typeof n != "function"), t = i.facet(wh).filter((n) => typeof n != "function");
  return t.length && e.push(ce.join(t)), e;
}
class Eh {
  constructor(e, t, n) {
    let s = 0, r = 0, o = 0;
    this.viewports = n.map(({ from: l, to: a }) => {
      let c = t.lineAt(l, Ae.ByPos, e, 0, 0).top, h = t.lineAt(a, Ae.ByPos, e, 0, 0).bottom;
      return s += h - c, { from: l, to: a, top: c, bottom: h, domTop: 0, domBottom: 0 };
    }), this.scale = (7e6 - s) / (t.height - s);
    for (let l of this.viewports)
      l.domTop = o + (l.top - r) * this.scale, o = l.domBottom = l.domTop + (l.bottom - l.top), r = l.bottom;
  }
  toDOM(e) {
    for (let t = 0, n = 0, s = 0; ; t++) {
      let r = t < this.viewports.length ? this.viewports[t] : null;
      if (!r || e < r.top)
        return s + (e - n) * this.scale;
      if (e <= r.bottom)
        return r.domTop + (e - r.top);
      n = r.bottom, s = r.domBottom;
    }
  }
  fromDOM(e) {
    for (let t = 0, n = 0, s = 0; ; t++) {
      let r = t < this.viewports.length ? this.viewports[t] : null;
      if (!r || e < r.domTop)
        return n + (e - s) / this.scale;
      if (e <= r.domBottom)
        return r.top + (e - r.domTop);
      n = r.bottom, s = r.domBottom;
    }
  }
  eq(e) {
    return e instanceof Eh ? this.scale == e.scale && this.viewports.length == e.viewports.length && this.viewports.every((t, n) => t.from == e.viewports[n].from && t.to == e.viewports[n].to) : !1;
  }
}
function $s(i, e) {
  if (e.scale == 1)
    return i;
  let t = e.toDOM(i.top), n = e.toDOM(i.bottom);
  return new Ft(i.from, i.length, t, n - t, Array.isArray(i._content) ? i._content.map((s) => $s(s, e)) : i._content);
}
const Xr = /* @__PURE__ */ L.define({ combine: (i) => i.join(" ") }), bc = /* @__PURE__ */ L.define({ combine: (i) => i.indexOf(!0) > -1 }), yc = /* @__PURE__ */ Ki.newName(), yg = /* @__PURE__ */ Ki.newName(), xg = /* @__PURE__ */ Ki.newName(), vg = { "&light": "." + yg, "&dark": "." + xg };
function xc(i, e, t) {
  return new Ki(e, {
    finish(n) {
      return /&/.test(n) ? n.replace(/&\w*/, (s) => {
        if (s == "&")
          return i;
        if (!t || !t[s])
          throw new RangeError(`Unsupported selector: ${s}`);
        return t[s];
      }) : i + " " + n;
    }
  });
}
const vv = /* @__PURE__ */ xc("." + yc, {
  "&": {
    position: "relative !important",
    boxSizing: "border-box",
    "&.cm-focused": {
      // Provide a simple default outline to make sure a focused
      // editor is visually distinct. Can't leave the default behavior
      // because that will apply to the content element, which is
      // inside the scrollable container and doesn't include the
      // gutters. We also can't use an 'auto' outline, since those
      // are, for some reason, drawn behind the element content, which
      // will cause things like the active line background to cover
      // the outline (#297).
      outline: "1px dotted #212121"
    },
    display: "flex !important",
    flexDirection: "column"
  },
  ".cm-scroller": {
    display: "flex !important",
    alignItems: "flex-start !important",
    fontFamily: "monospace",
    lineHeight: 1.4,
    height: "100%",
    overflowX: "auto",
    position: "relative",
    zIndex: 0,
    overflowAnchor: "none"
  },
  ".cm-content": {
    margin: 0,
    flexGrow: 2,
    flexShrink: 0,
    display: "block",
    whiteSpace: "pre",
    wordWrap: "normal",
    // Issue #456
    boxSizing: "border-box",
    minHeight: "100%",
    padding: "4px 0",
    outline: "none",
    "&[contenteditable=true]": {
      WebkitUserModify: "read-write-plaintext-only"
    }
  },
  ".cm-lineWrapping": {
    whiteSpace_fallback: "pre-wrap",
    // For IE
    whiteSpace: "break-spaces",
    wordBreak: "break-word",
    // For Safari, which doesn't support overflow-wrap: anywhere
    overflowWrap: "anywhere",
    flexShrink: 1
  },
  "&light .cm-content": { caretColor: "black" },
  "&dark .cm-content": { caretColor: "white" },
  ".cm-line": {
    display: "block",
    padding: "0 2px 0 6px"
  },
  ".cm-layer": {
    position: "absolute",
    left: 0,
    top: 0,
    contain: "size style",
    "& > *": {
      position: "absolute"
    }
  },
  "&light .cm-selectionBackground": {
    background: "#d9d9d9"
  },
  "&dark .cm-selectionBackground": {
    background: "#222"
  },
  "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "#d7d4f0"
  },
  "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "#233"
  },
  ".cm-cursorLayer": {
    pointerEvents: "none"
  },
  "&.cm-focused > .cm-scroller > .cm-cursorLayer": {
    animation: "steps(1) cm-blink 1.2s infinite"
  },
  // Two animations defined so that we can switch between them to
  // restart the animation without forcing another style
  // recomputation.
  "@keyframes cm-blink": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
  "@keyframes cm-blink2": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
  ".cm-cursor, .cm-dropCursor": {
    borderLeft: "1.2px solid black",
    marginLeft: "-0.6px",
    pointerEvents: "none"
  },
  ".cm-cursor": {
    display: "none"
  },
  "&dark .cm-cursor": {
    borderLeftColor: "#ddd"
  },
  ".cm-selectionHandle": {
    backgroundColor: "currentColor",
    width: "1.5px"
  },
  ".cm-selectionHandle-start::before, .cm-selectionHandle-end::before": {
    content: '""',
    backgroundColor: "inherit",
    borderRadius: "50%",
    width: "8px",
    height: "8px",
    position: "absolute",
    left: "-3.25px"
  },
  ".cm-selectionHandle-start::before": { top: "-8px" },
  ".cm-selectionHandle-end::before": { bottom: "-8px" },
  ".cm-dropCursor": {
    position: "absolute"
  },
  "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": {
    display: "block"
  },
  ".cm-iso": {
    unicodeBidi: "isolate"
  },
  ".cm-announced": {
    position: "fixed",
    top: "-10000px"
  },
  "@media print": {
    ".cm-announced": { display: "none" }
  },
  "&light .cm-activeLine": { backgroundColor: "#cceeff44" },
  "&dark .cm-activeLine": { backgroundColor: "#99eeff33" },
  "&light .cm-specialChar": { color: "red" },
  "&dark .cm-specialChar": { color: "#f78" },
  ".cm-gutters": {
    flexShrink: 0,
    display: "flex",
    height: "100%",
    boxSizing: "border-box",
    zIndex: 200
  },
  ".cm-gutters-before": { insetInlineStart: 0 },
  ".cm-gutters-after": { insetInlineEnd: 0 },
  "&light .cm-gutters": {
    backgroundColor: "#f5f5f5",
    color: "#6c6c6c",
    border: "0px solid #ddd",
    "&.cm-gutters-before": { borderRightWidth: "1px" },
    "&.cm-gutters-after": { borderLeftWidth: "1px" }
  },
  "&dark .cm-gutters": {
    backgroundColor: "#333338",
    color: "#ccc"
  },
  ".cm-gutter": {
    display: "flex !important",
    // Necessary -- prevents margin collapsing
    flexDirection: "column",
    flexShrink: 0,
    boxSizing: "border-box",
    minHeight: "100%",
    overflow: "hidden"
  },
  ".cm-gutterElement": {
    boxSizing: "border-box"
  },
  ".cm-lineNumbers .cm-gutterElement": {
    padding: "0 3px 0 5px",
    minWidth: "20px",
    textAlign: "right",
    whiteSpace: "nowrap"
  },
  "&light .cm-activeLineGutter": {
    backgroundColor: "#e2f2ff"
  },
  "&dark .cm-activeLineGutter": {
    backgroundColor: "#222227"
  },
  ".cm-panels": {
    boxSizing: "border-box",
    position: "sticky",
    left: 0,
    right: 0,
    zIndex: 300
  },
  "&light .cm-panels": {
    backgroundColor: "#f5f5f5",
    color: "black"
  },
  "&light .cm-panels-top": {
    borderBottom: "1px solid #ddd"
  },
  "&light .cm-panels-bottom": {
    borderTop: "1px solid #ddd"
  },
  "&dark .cm-panels": {
    backgroundColor: "#333338",
    color: "white"
  },
  ".cm-dialog": {
    padding: "2px 19px 4px 6px",
    position: "relative",
    "& label": { fontSize: "80%" }
  },
  ".cm-dialog-close": {
    position: "absolute",
    top: "3px",
    right: "4px",
    backgroundColor: "inherit",
    border: "none",
    font: "inherit",
    fontSize: "14px",
    padding: "0"
  },
  ".cm-tab": {
    display: "inline-block",
    overflow: "hidden",
    verticalAlign: "bottom"
  },
  ".cm-widgetBuffer": {
    verticalAlign: "text-top",
    height: "1em",
    width: 0,
    display: "inline"
  },
  ".cm-placeholder": {
    color: "#888",
    display: "inline-block",
    verticalAlign: "top",
    userSelect: "none"
  },
  ".cm-highlightSpace": {
    backgroundImage: "radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%)",
    backgroundPosition: "center"
  },
  ".cm-highlightTab": {
    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,
    backgroundSize: "auto 100%",
    backgroundPosition: "right 90%",
    backgroundRepeat: "no-repeat"
  },
  ".cm-trailingSpace": {
    backgroundColor: "#ff332255"
  },
  ".cm-button": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    padding: ".2em 1em",
    borderRadius: "1px"
  },
  "&light .cm-button": {
    backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)"
    }
  },
  "&dark .cm-button": {
    backgroundImage: "linear-gradient(#393939, #111)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#111, #333)"
    }
  },
  ".cm-textfield": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    border: "1px solid silver",
    padding: ".2em .5em"
  },
  "&light .cm-textfield": {
    backgroundColor: "white"
  },
  "&dark .cm-textfield": {
    border: "1px solid #555",
    backgroundColor: "inherit"
  }
}, vg), Sv = {
  childList: !0,
  characterData: !0,
  subtree: !0,
  attributes: !0,
  characterDataOldValue: !0
}, ra = B.ie && B.ie_version <= 11;
class wv {
  constructor(e) {
    this.view = e, this.active = !1, this.editContext = null, this.selectionRange = new Jx(), this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = e.contentDOM, this.observer = new MutationObserver((t) => {
      for (let n of t)
        this.queue.push(n);
      (B.ie && B.ie_version <= 11 || B.ios && e.composing) && t.some((n) => n.type == "childList" && n.removedNodes.length || n.type == "characterData" && n.oldValue.length > n.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), window.EditContext && B.android && e.constructor.EDIT_CONTEXT !== !1 && // Chrome <126 doesn't support inverted selections in edit context (#1392)
    !(B.chrome && B.chrome_version < 126) && (this.editContext = new kv(e), e.state.facet($i) && (e.contentDOM.editContext = this.editContext.editContext)), ra && (this.onCharData = (t) => {
      this.queue.push({
        target: t.target,
        type: "characterData",
        oldValue: t.prevValue
      }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this), this.onResize = this.onResize.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), typeof ResizeObserver == "function" && (this.resizeScroll = new ResizeObserver(() => {
      var t;
      ((t = this.view.docView) === null || t === void 0 ? void 0 : t.lastUpdate) < Date.now() - 75 && this.onResize();
    }), this.resizeScroll.observe(e.scrollDOM)), this.addWindowListeners(this.win = e.win), this.start(), typeof IntersectionObserver == "function" && (this.intersection = new IntersectionObserver((t) => {
      this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), t.length > 0 && t[t.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")));
    }, { threshold: [0, 1e-3] }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((t) => {
      t.length > 0 && t[t.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"));
    }, {})), this.listenForScroll(), this.readSelectionRange();
  }
  onScrollChanged(e) {
    this.view.inputState.runHandlers("scroll", e), this.intersecting && this.view.measure();
  }
  onScroll(e) {
    this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(e);
  }
  onResize() {
    this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout(() => {
      this.resizeTimeout = -1, this.view.requestMeasure();
    }, 50));
  }
  onPrint(e) {
    (e.type == "change" || !e.type) && !e.matches || (this.view.viewState.printing = !0, this.view.measure(), setTimeout(() => {
      this.view.viewState.printing = !1, this.view.requestMeasure();
    }, 500));
  }
  updateGaps(e) {
    if (this.gapIntersection && (e.length != this.gaps.length || this.gaps.some((t, n) => t != e[n]))) {
      this.gapIntersection.disconnect();
      for (let t of e)
        this.gapIntersection.observe(t);
      this.gaps = e;
    }
  }
  onSelectionChange(e) {
    let t = this.selectionChanged;
    if (!this.readSelectionRange() || this.delayedAndroidKey)
      return;
    let { view: n } = this, s = this.selectionRange;
    if (n.state.facet($i) ? n.root.activeElement != this.dom : !Xs(this.dom, s))
      return;
    let r = s.anchorNode && n.docView.tile.nearest(s.anchorNode);
    if (r && r.isWidget() && r.widget.ignoreEvent(e)) {
      t || (this.selectionChanged = !1);
      return;
    }
    (B.ie && B.ie_version <= 11 || B.android && B.chrome) && !n.state.selection.main.empty && // (Selection.isCollapsed isn't reliable on IE)
    s.focusNode && Ws(s.focusNode, s.focusOffset, s.anchorNode, s.anchorOffset) ? this.flushSoon() : this.flush(!1);
  }
  readSelectionRange() {
    let { view: e } = this, t = ir(e.root);
    if (!t)
      return !1;
    let n = B.safari && e.root.nodeType == 11 && e.root.activeElement == this.dom && Pv(this.view, t) || t;
    if (!n || this.selectionRange.eq(n))
      return !1;
    let s = Xs(this.dom, n);
    return s && !this.selectionChanged && e.inputState.lastFocusTime > Date.now() - 200 && e.inputState.lastTouchTime < Date.now() - 300 && t1(this.dom, n) ? (this.view.inputState.lastFocusTime = 0, e.docView.updateSelection(), !1) : (this.selectionRange.setRange(n), s && (this.selectionChanged = !0), !0);
  }
  setSelectionRange(e, t) {
    this.selectionRange.set(e.node, e.offset, t.node, t.offset), this.selectionChanged = !1;
  }
  clearSelectionRange() {
    this.selectionRange.set(null, 0, null, 0);
  }
  listenForScroll() {
    this.parentCheck = -1;
    let e = 0, t = null;
    for (let n = this.dom; n; )
      if (n.nodeType == 1)
        !t && e < this.scrollTargets.length && this.scrollTargets[e] == n ? e++ : t || (t = this.scrollTargets.slice(0, e)), t && t.push(n), n = n.assignedSlot || n.parentNode;
      else if (n.nodeType == 11)
        n = n.host;
      else
        break;
    if (e < this.scrollTargets.length && !t && (t = this.scrollTargets.slice(0, e)), t) {
      for (let n of this.scrollTargets)
        n.removeEventListener("scroll", this.onScroll);
      for (let n of this.scrollTargets = t)
        n.addEventListener("scroll", this.onScroll);
    }
  }
  ignore(e) {
    if (!this.active)
      return e();
    try {
      return this.stop(), e();
    } finally {
      this.start(), this.clear();
    }
  }
  start() {
    this.active || (this.observer.observe(this.dom, Sv), ra && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0);
  }
  stop() {
    this.active && (this.active = !1, this.observer.disconnect(), ra && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
  }
  // Throw away any pending changes
  clear() {
    this.processRecords(), this.queue.length = 0, this.selectionChanged = !1;
  }
  // Chrome Android, especially in combination with GBoard, not only
  // doesn't reliably fire regular key events, but also often
  // surrounds the effect of enter or backspace with a bunch of
  // composition events that, when interrupted, cause text duplication
  // or other kinds of corruption. This hack makes the editor back off
  // from handling DOM changes for a moment when such a key is
  // detected (via beforeinput or keydown), and then tries to flush
  // them or, if that has no effect, dispatches the given key.
  delayAndroidKey(e, t) {
    var n;
    if (!this.delayedAndroidKey) {
      let s = () => {
        let r = this.delayedAndroidKey;
        r && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = r.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && r.force && Kn(this.dom, r.key, r.keyCode));
      };
      this.flushingAndroidKey = this.view.win.requestAnimationFrame(s);
    }
    (!this.delayedAndroidKey || e == "Enter") && (this.delayedAndroidKey = {
      key: e,
      keyCode: t,
      // Only run the key handler when no changes are detected if
      // this isn't coming right after another change, in which case
      // it is probably part of a weird chain of updates, and should
      // be ignored if it returns the DOM to its previous state.
      force: this.lastChange < Date.now() - 50 || !!(!((n = this.delayedAndroidKey) === null || n === void 0) && n.force)
    });
  }
  clearDelayedAndroidKey() {
    this.win.cancelAnimationFrame(this.flushingAndroidKey), this.delayedAndroidKey = null, this.flushingAndroidKey = -1;
  }
  flushSoon() {
    this.delayedFlush < 0 && (this.delayedFlush = this.view.win.requestAnimationFrame(() => {
      this.delayedFlush = -1, this.flush();
    }));
  }
  forceFlush() {
    this.delayedFlush >= 0 && (this.view.win.cancelAnimationFrame(this.delayedFlush), this.delayedFlush = -1), this.flush();
  }
  pendingRecords() {
    for (let e of this.observer.takeRecords())
      this.queue.push(e);
    return this.queue;
  }
  processRecords() {
    let e = this.pendingRecords();
    e.length && (this.queue = []);
    let t = -1, n = -1, s = !1;
    for (let r of e) {
      let o = this.readMutation(r);
      o && (o.typeOver && (s = !0), t == -1 ? { from: t, to: n } = o : (t = Math.min(o.from, t), n = Math.max(o.to, n)));
    }
    return { from: t, to: n, typeOver: s };
  }
  readChange() {
    let { from: e, to: t, typeOver: n } = this.processRecords(), s = this.selectionChanged && Xs(this.dom, this.selectionRange);
    if (e < 0 && !s)
      return null;
    e > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
    let r = new W1(this.view, e, t, n);
    return this.view.docView.domChanged = { newSel: r.newSel ? r.newSel.main : null }, r;
  }
  // Apply pending changes, if any
  flush(e = !0) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey)
      return !1;
    e && this.readSelectionRange();
    let t = this.readChange();
    if (!t)
      return this.view.requestMeasure(), !1;
    let n = this.view.state, s = ag(this.view, t);
    return this.view.state == n && (t.domChanged || t.newSel && !Wo(this.view.state.selection, t.newSel.main)) && this.view.update([]), s;
  }
  readMutation(e) {
    let t = this.view.docView.tile.nearest(e.target);
    if (!t || t.isWidget())
      return null;
    if (t.markDirty(e.type == "attributes"), e.type == "childList") {
      let n = Mu(t, e.previousSibling || e.target.previousSibling, -1), s = Mu(t, e.nextSibling || e.target.nextSibling, 1);
      return {
        from: n ? t.posAfter(n) : t.posAtStart,
        to: s ? t.posBefore(s) : t.posAtEnd,
        typeOver: !1
      };
    } else return e.type == "characterData" ? { from: t.posAtStart, to: t.posAtEnd, typeOver: e.target.nodeValue == e.oldValue } : null;
  }
  setWindow(e) {
    e != this.win && (this.removeWindowListeners(this.win), this.win = e, this.addWindowListeners(this.win));
  }
  addWindowListeners(e) {
    e.addEventListener("resize", this.onResize), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : e.addEventListener("beforeprint", this.onPrint), e.addEventListener("scroll", this.onScroll), e.document.addEventListener("selectionchange", this.onSelectionChange);
  }
  removeWindowListeners(e) {
    e.removeEventListener("scroll", this.onScroll), e.removeEventListener("resize", this.onResize), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : e.removeEventListener("beforeprint", this.onPrint), e.document.removeEventListener("selectionchange", this.onSelectionChange);
  }
  update(e) {
    this.editContext && (this.editContext.update(e), e.startState.facet($i) != e.state.facet($i) && (e.view.contentDOM.editContext = e.state.facet($i) ? this.editContext.editContext : null));
  }
  destroy() {
    var e, t, n;
    this.stop(), (e = this.intersection) === null || e === void 0 || e.disconnect(), (t = this.gapIntersection) === null || t === void 0 || t.disconnect(), (n = this.resizeScroll) === null || n === void 0 || n.disconnect();
    for (let s of this.scrollTargets)
      s.removeEventListener("scroll", this.onScroll);
    this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy());
  }
}
function Mu(i, e, t) {
  for (; e; ) {
    let n = _e.get(e);
    if (n && n.parent == i)
      return n;
    let s = e.parentNode;
    e = s != i.dom ? s : t > 0 ? e.nextSibling : e.previousSibling;
  }
  return null;
}
function Qu(i, e) {
  let t = e.startContainer, n = e.startOffset, s = e.endContainer, r = e.endOffset, o = i.docView.domAtPos(i.state.selection.main.anchor, 1);
  return Ws(o.node, o.offset, s, r) && ([t, n, s, r] = [s, r, t, n]), { anchorNode: t, anchorOffset: n, focusNode: s, focusOffset: r };
}
function Pv(i, e) {
  if (e.getComposedRanges) {
    let s = e.getComposedRanges(i.root)[0];
    if (s)
      return Qu(i, s);
  }
  let t = null;
  function n(s) {
    s.preventDefault(), s.stopImmediatePropagation(), t = s.getTargetRanges()[0];
  }
  return i.contentDOM.addEventListener("beforeinput", n, !0), i.dom.ownerDocument.execCommand("indent"), i.contentDOM.removeEventListener("beforeinput", n, !0), t ? Qu(i, t) : null;
}
class kv {
  constructor(e) {
    this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = /* @__PURE__ */ Object.create(null), this.composing = null, this.resetRange(e.state);
    let t = this.editContext = new window.EditContext({
      text: e.state.doc.sliceString(this.from, this.to),
      selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, e.state.selection.main.anchor))),
      selectionEnd: this.toContextPos(e.state.selection.main.head)
    });
    this.handlers.textupdate = (n) => {
      let s = e.state.selection.main, { anchor: r, head: o } = s, l = this.toEditorPos(n.updateRangeStart), a = this.toEditorPos(n.updateRangeEnd);
      e.inputState.composing >= 0 && !this.composing && (this.composing = { contextBase: n.updateRangeStart, editorBase: l, drifted: !1 });
      let c = a - l > n.text.length;
      l == this.from && r < this.from ? l = r : a == this.to && r > this.to && (a = r);
      let h = cg(e.state.sliceDoc(l, a), n.text, (c ? s.from : s.to) - l, c ? "end" : null);
      if (!h) {
        let u = P.single(this.toEditorPos(n.selectionStart), this.toEditorPos(n.selectionEnd));
        Wo(u, s) || e.dispatch({ selection: u, userEvent: "select" });
        return;
      }
      let f = {
        from: h.from + l,
        to: h.toA + l,
        insert: me.of(n.text.slice(h.from, h.toB).split(`
`))
      };
      if ((B.mac || B.android) && f.from == o - 1 && /^\. ?$/.test(n.text) && e.contentDOM.getAttribute("autocorrect") == "off" && (f = { from: l, to: a, insert: me.of([n.text.replace(".", " ")]) }), this.pendingContextChange = f, !e.state.readOnly) {
        let u = this.to - this.from + (f.to - f.from + f.insert.length);
        kh(e, f, P.single(this.toEditorPos(n.selectionStart, u), this.toEditorPos(n.selectionEnd, u)));
      }
      this.pendingContextChange && (this.revertPending(e.state), this.setSelection(e.state)), f.from < f.to && !f.insert.length && e.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(t.text.slice(Math.max(0, n.updateRangeStart - 1), Math.min(t.text.length, n.updateRangeStart + 1))) && this.handlers.compositionend(n);
    }, this.handlers.characterboundsupdate = (n) => {
      let s = [], r = null;
      for (let o = this.toEditorPos(n.rangeStart), l = this.toEditorPos(n.rangeEnd); o < l; o++) {
        let a = e.coordsForChar(o);
        r = a && new DOMRect(a.left, a.top, a.right - a.left, a.bottom - a.top) || r || new DOMRect(), s.push(r);
      }
      t.updateCharacterBounds(n.rangeStart, s);
    }, this.handlers.textformatupdate = (n) => {
      let s = [];
      for (let r of n.getTextFormats()) {
        let o = r.underlineStyle, l = r.underlineThickness;
        if (!/none/i.test(o) && !/none/i.test(l)) {
          let a = this.toEditorPos(r.rangeStart), c = this.toEditorPos(r.rangeEnd);
          if (a < c) {
            let h = `text-decoration: underline ${/^[a-z]/.test(o) ? o + " " : o == "Dashed" ? "dashed " : o == "Squiggle" ? "wavy " : ""}${/thin/i.test(l) ? 1 : 2}px`;
            s.push(Y.mark({ attributes: { style: h } }).range(a, c));
          }
        }
      }
      e.dispatch({ effects: Jm.of(Y.set(s)) });
    }, this.handlers.compositionstart = () => {
      e.inputState.composing < 0 && (e.inputState.composing = 0, e.inputState.compositionFirstChange = !0);
    }, this.handlers.compositionend = () => {
      if (e.inputState.composing = -1, e.inputState.compositionFirstChange = null, this.composing) {
        let { drifted: n } = this.composing;
        this.composing = null, n && this.reset(e.state);
      }
    };
    for (let n in this.handlers)
      t.addEventListener(n, this.handlers[n]);
    this.measureReq = { read: (n) => {
      this.editContext.updateControlBounds(n.contentDOM.getBoundingClientRect());
      let s = ir(n.root);
      s && s.rangeCount && this.editContext.updateSelectionBounds(s.getRangeAt(0).getBoundingClientRect());
    } };
  }
  applyEdits(e) {
    let t = 0, n = !1, s = this.pendingContextChange;
    return e.changes.iterChanges((r, o, l, a, c) => {
      if (n)
        return;
      let h = c.length - (o - r);
      if (s && o >= s.to)
        if (s.from == r && s.to == o && s.insert.eq(c)) {
          s = this.pendingContextChange = null, t += h, this.to += h;
          return;
        } else
          s = null, this.revertPending(e.state);
      if (r += t, o += t, o <= this.from)
        this.from += h, this.to += h;
      else if (r < this.to) {
        if (r < this.from || o > this.to || this.to - this.from + c.length > 3e4) {
          n = !0;
          return;
        }
        this.editContext.updateText(this.toContextPos(r), this.toContextPos(o), c.toString()), this.to += h;
      }
      t += h;
    }), s && !n && this.revertPending(e.state), !n;
  }
  update(e) {
    let t = this.pendingContextChange, n = e.startState.selection.main;
    this.composing && (this.composing.drifted || !e.changes.touchesRange(n.from, n.to) && e.transactions.some((s) => !s.isUserEvent("input.type") && s.changes.touchesRange(this.from, this.to))) ? (this.composing.drifted = !0, this.composing.editorBase = e.changes.mapPos(this.composing.editorBase)) : !this.applyEdits(e) || !this.rangeIsValid(e.state) ? (this.pendingContextChange = null, this.reset(e.state)) : (e.docChanged || e.selectionSet || t) && this.setSelection(e.state), (e.geometryChanged || e.docChanged || e.selectionSet) && e.view.requestMeasure(this.measureReq);
  }
  resetRange(e) {
    let { head: t } = e.selection.main;
    this.from = Math.max(
      0,
      t - 1e4
      /* CxVp.Margin */
    ), this.to = Math.min(
      e.doc.length,
      t + 1e4
      /* CxVp.Margin */
    );
  }
  reset(e) {
    this.resetRange(e), this.editContext.updateText(0, this.editContext.text.length, e.doc.sliceString(this.from, this.to)), this.setSelection(e);
  }
  revertPending(e) {
    let t = this.pendingContextChange;
    this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(t.from), this.toContextPos(t.from + t.insert.length), e.doc.sliceString(t.from, t.to));
  }
  setSelection(e) {
    let { main: t } = e.selection, n = this.toContextPos(Math.max(this.from, Math.min(this.to, t.anchor))), s = this.toContextPos(t.head);
    (this.editContext.selectionStart != n || this.editContext.selectionEnd != s) && this.editContext.updateSelection(n, s);
  }
  rangeIsValid(e) {
    let { head: t } = e.selection.main;
    return !(this.from > 0 && t - this.from < 500 || this.to < e.doc.length && this.to - t < 500 || this.to - this.from > 1e4 * 3);
  }
  toEditorPos(e, t = this.to - this.from) {
    e = Math.min(e, t);
    let n = this.composing;
    return n && n.drifted ? n.editorBase + (e - n.contextBase) : e + this.from;
  }
  toContextPos(e) {
    let t = this.composing;
    return t && t.drifted ? t.contextBase + (e - t.editorBase) : e - this.from;
  }
  destroy() {
    for (let e in this.handlers)
      this.editContext.removeEventListener(e, this.handlers[e]);
  }
}
class X {
  /**
  The current editor state.
  */
  get state() {
    return this.viewState.state;
  }
  /**
  To be able to display large documents without consuming too much
  memory or overloading the browser, CodeMirror only draws the
  code that is visible (plus a margin around it) to the DOM. This
  property tells you the extent of the current drawn viewport, in
  document positions.
  */
  get viewport() {
    return this.viewState.viewport;
  }
  /**
  When there are, for example, large collapsed ranges in the
  viewport, its size can be a lot bigger than the actual visible
  content. Thus, if you are doing something like styling the
  content in the viewport, it is preferable to only do so for
  these ranges, which are the subset of the viewport that is
  actually drawn.
  */
  get visibleRanges() {
    return this.viewState.visibleRanges;
  }
  /**
  Returns false when the editor is entirely scrolled out of view
  or otherwise hidden.
  */
  get inView() {
    return this.viewState.inView;
  }
  /**
  Indicates whether the user is currently composing text via
  [IME](https://en.wikipedia.org/wiki/Input_method), and at least
  one change has been made in the current composition.
  */
  get composing() {
    return !!this.inputState && this.inputState.composing > 0;
  }
  /**
  Indicates whether the user is currently in composing state. Note
  that on some platforms, like Android, this will be the case a
  lot, since just putting the cursor on a word starts a
  composition there.
  */
  get compositionStarted() {
    return !!this.inputState && this.inputState.composing >= 0;
  }
  /**
  The document or shadow root that the view lives in.
  */
  get root() {
    return this._root;
  }
  /**
  @internal
  */
  get win() {
    return this.dom.ownerDocument.defaultView || window;
  }
  /**
  Construct a new view. You'll want to either provide a `parent`
  option, or put `view.dom` into your document after creating a
  view, so that the user can see the editor.
  */
  constructor(e = {}) {
    var t;
    this.plugins = [], this.pluginMap = /* @__PURE__ */ new Map(), this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), e.parent && e.parent.appendChild(this.dom);
    let { dispatch: n } = e;
    this.dispatchTransactions = e.dispatchTransactions || n && ((s) => s.forEach((r) => n(r, this))) || ((s) => this.update(s)), this.dispatch = this.dispatch.bind(this), this._root = e.root || e1(e.parent) || document, this.viewState = new Nu(this, e.state || pe.create(e)), e.scrollTo && e.scrollTo.is(Mr) && (this.viewState.scrollTarget = e.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(Ln).map((s) => new Jl(s));
    for (let s of this.plugins)
      s.update(this);
    this.observer = new wv(this), this.inputState = new U1(this), this.inputState.ensureHandlers(this.plugins), this.docView = new yu(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), !((t = document.fonts) === null || t === void 0) && t.ready && document.fonts.ready.then(() => {
      this.viewState.mustMeasureContent = "refresh", this.requestMeasure();
    });
  }
  dispatch(...e) {
    let t = e.length == 1 && e[0] instanceof Ue ? e : e.length == 1 && Array.isArray(e[0]) ? e[0] : [this.state.update(...e)];
    this.dispatchTransactions(t, this);
  }
  /**
  Update the view for the given array of transactions. This will
  update the visible document and selection to match the state
  produced by the transactions, and notify view plugins of the
  change. You should usually call
  [`dispatch`](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch) instead, which uses this
  as a primitive.
  */
  update(e) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
    let t = !1, n = !1, s, r = this.state;
    for (let u of e) {
      if (u.startState != r)
        throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
      r = u.state;
    }
    if (this.destroyed) {
      this.viewState.state = r;
      return;
    }
    let o = this.hasFocus, l = 0, a = null;
    e.some((u) => u.annotation(mg)) ? (this.inputState.notifiedFocused = o, l = 1) : o != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = o, a = gg(r, o), a || (l = 1));
    let c = this.observer.delayedAndroidKey, h = null;
    if (c ? (this.observer.clearDelayedAndroidKey(), h = this.observer.readChange(), (h && !this.state.doc.eq(r.doc) || !this.state.selection.eq(r.selection)) && (h = null)) : this.observer.clear(), r.facet(pe.phrases) != this.state.facet(pe.phrases))
      return this.setState(r);
    s = Lo.create(this, r, e), s.flags |= l;
    let f = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let u of e) {
        if (f && (f = f.map(u.changes)), u.scrollIntoView) {
          let { main: d } = u.state.selection, { x: p, y: m } = this.state.facet(X.cursorScrollMargin);
          f = new Zn(d.empty ? d : P.cursor(d.head, d.head > d.anchor ? -1 : 1), "nearest", "nearest", m, p);
        }
        for (let d of u.effects)
          d.is(Mr) && (f = d.value.clip(this.state));
      }
      this.viewState.update(s, f), this.bidiCache = qo.update(this.bidiCache, s.changes), s.empty || (this.updatePlugins(s), this.inputState.update(s)), t = this.docView.update(s), this.state.facet(As) != this.styleModules && this.mountStyles(), n = this.updateAttrs(), this.showAnnouncements(e), this.docView.updateSelection(t, e.some((u) => u.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (s.startState.facet(Xr) != s.state.facet(Xr) && (this.viewState.mustMeasureContent = !0), (t || n || f || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), t && this.docViewUpdate(), !s.empty)
      for (let u of this.state.facet(dc))
        try {
          u(s);
        } catch (d) {
          xt(this.state, d, "update listener");
        }
    (a || h) && Promise.resolve().then(() => {
      a && this.state == a.startState && this.dispatch(a), h && !ag(this, h) && c.force && Kn(this.contentDOM, c.key, c.keyCode);
    });
  }
  /**
  Reset the view to the given state. (This will cause the entire
  document to be redrawn and all view plugins to be reinitialized,
  so you should probably only use it when the new state isn't
  derived from the old state. Otherwise, use
  [`dispatch`](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch) instead.)
  */
  setState(e) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
    if (this.destroyed) {
      this.viewState.state = e;
      return;
    }
    this.updateState = 2;
    let t = this.hasFocus;
    try {
      for (let n of this.plugins)
        n.destroy(this);
      this.viewState = new Nu(this, e), this.plugins = e.facet(Ln).map((n) => new Jl(n)), this.pluginMap.clear();
      for (let n of this.plugins)
        n.update(this);
      this.docView.destroy(), this.docView = new yu(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    t && this.focus(), this.requestMeasure();
  }
  updatePlugins(e) {
    let t = e.startState.facet(Ln), n = e.state.facet(Ln);
    if (t != n) {
      let s = [];
      for (let r of n) {
        let o = t.indexOf(r);
        if (o < 0)
          s.push(new Jl(r));
        else {
          let l = this.plugins[o];
          l.mustUpdate = e, s.push(l);
        }
      }
      for (let r of this.plugins)
        r.mustUpdate != e && r.destroy(this);
      this.plugins = s, this.pluginMap.clear();
    } else
      for (let s of this.plugins)
        s.mustUpdate = e;
    for (let s = 0; s < this.plugins.length; s++)
      this.plugins[s].update(this);
    t != n && this.inputState.ensureHandlers(this.plugins);
  }
  docViewUpdate() {
    for (let e of this.plugins) {
      let t = e.value;
      if (t && t.docViewUpdate)
        try {
          t.docViewUpdate(this);
        } catch (n) {
          xt(this.state, n, "doc view update listener");
        }
    }
  }
  /**
  @internal
  */
  measure(e = !0) {
    if (this.destroyed)
      return;
    if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) {
      this.measureScheduled = -1, this.requestMeasure();
      return;
    }
    this.measureScheduled = 0, e && this.observer.forceFlush();
    let t = null, n = this.viewState.scrollParent, s = this.viewState.getScrollOffset(), { scrollAnchorPos: r, scrollAnchorHeight: o } = this.viewState;
    Math.abs(s - this.viewState.scrollOffset) > 1 && (o = -1), this.viewState.scrollAnchorHeight = -1;
    try {
      for (let l = 0; ; l++) {
        if (o < 0)
          if (Qm(n || this.win))
            r = -1, o = this.viewState.heightMap.height;
          else {
            let d = this.viewState.scrollAnchorAt(s);
            r = d.from, o = d.top;
          }
        this.updateState = 1;
        let a = this.viewState.measure();
        if (!a && !this.measureRequests.length && this.viewState.scrollTarget == null)
          break;
        if (l > 5) {
          console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
          break;
        }
        let c = [];
        a & 4 || ([this.measureRequests, c] = [c, this.measureRequests]);
        let h = c.map((d) => {
          try {
            return d.read(this);
          } catch (p) {
            return xt(this.state, p), Iu;
          }
        }), f = Lo.create(this, this.state, []), u = !1;
        f.flags |= a, t ? t.flags |= a : t = f, this.updateState = 2, f.empty || (this.updatePlugins(f), this.inputState.update(f), this.updateAttrs(), u = this.docView.update(f), u && this.docViewUpdate());
        for (let d = 0; d < c.length; d++)
          if (h[d] != Iu)
            try {
              let p = c[d];
              p.write && p.write(h[d], this);
            } catch (p) {
              xt(this.state, p);
            }
        if (u && this.docView.updateSelection(!0), !f.viewportChanged && this.measureRequests.length == 0) {
          if (this.viewState.editorHeight)
            if (this.viewState.scrollTarget) {
              this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, o = -1;
              continue;
            } else {
              let p = ((r < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(r).top) - o) / this.scaleY;
              if ((p > 1 || p < -1) && (n == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                s = s + p, n ? n.scrollTop += p : this.win.scrollBy(0, p), o = -1;
                continue;
              }
            }
          break;
        }
      }
    } finally {
      this.updateState = 0, this.measureScheduled = -1;
    }
    if (t && !t.empty)
      for (let l of this.state.facet(dc))
        l(t);
  }
  /**
  Get the CSS classes for the currently active editor themes.
  */
  get themeClasses() {
    return yc + " " + (this.state.facet(bc) ? xg : yg) + " " + this.state.facet(Xr);
  }
  updateAttrs() {
    let e = Vu(this, eg, {
      class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
    }), t = {
      spellcheck: "false",
      autocorrect: "off",
      autocapitalize: "off",
      writingsuggestions: "false",
      translate: "no",
      contenteditable: this.state.facet($i) ? "true" : "false",
      class: "cm-content",
      style: `${B.tabSize}: ${this.state.tabSize}`,
      role: "textbox",
      "aria-multiline": "true"
    };
    this.state.readOnly && (t["aria-readonly"] = "true"), Vu(this, Sh, t);
    let n = this.observer.ignore(() => {
      let s = du(this.contentDOM, this.contentAttrs, t), r = du(this.dom, this.editorAttrs, e);
      return s || r;
    });
    return this.editorAttrs = e, this.contentAttrs = t, n;
  }
  showAnnouncements(e) {
    let t = !0;
    for (let n of e)
      for (let s of n.effects)
        if (s.is(X.announce)) {
          t && (this.announceDOM.textContent = ""), t = !1;
          let r = this.announceDOM.appendChild(document.createElement("div"));
          r.textContent = s.value;
        }
  }
  mountStyles() {
    this.styleModules = this.state.facet(As);
    let e = this.state.facet(X.cspNonce);
    Ki.mount(this.root, this.styleModules.concat(vv).reverse(), e ? { nonce: e } : void 0);
  }
  readMeasured() {
    if (this.updateState == 2)
      throw new Error("Reading the editor layout isn't allowed during an update");
    this.updateState == 0 && this.measureScheduled > -1 && this.measure(!1);
  }
  /**
  Schedule a layout measurement, optionally providing callbacks to
  do custom DOM measuring followed by a DOM write phase. Using
  this is preferable reading DOM layout directly from, for
  example, an event handler, because it'll make sure measuring and
  drawing done by other components is synchronized, avoiding
  unnecessary DOM layout computations.
  */
  requestMeasure(e) {
    if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame(() => this.measure())), e) {
      if (this.measureRequests.indexOf(e) > -1)
        return;
      if (e.key != null) {
        for (let t = 0; t < this.measureRequests.length; t++)
          if (this.measureRequests[t].key === e.key) {
            this.measureRequests[t] = e;
            return;
          }
      }
      this.measureRequests.push(e);
    }
  }
  /**
  Get the value of a specific plugin, if present. Note that
  plugins that crash can be dropped from a view, so even when you
  know you registered a given plugin, it is recommended to check
  the return value of this method.
  */
  plugin(e) {
    let t = this.pluginMap.get(e);
    return (t === void 0 || t && t.plugin != e) && this.pluginMap.set(e, t = this.plugins.find((n) => n.plugin == e) || null), t && t.update(this).value;
  }
  /**
  The top position of the document, in screen coordinates. This
  may be negative when the editor is scrolled down. Points
  directly to the top of the first line, not above the padding.
  */
  get documentTop() {
    return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
  }
  /**
  Reports the padding above and below the document.
  */
  get documentPadding() {
    return { top: this.viewState.paddingTop, bottom: this.viewState.paddingBottom };
  }
  /**
  If the editor is transformed with CSS, this provides the scale
  along the X axis. Otherwise, it will just be 1. Note that
  transforms other than translation and scaling are not supported.
  */
  get scaleX() {
    return this.viewState.scaleX;
  }
  /**
  Provide the CSS transformed scale along the Y axis.
  */
  get scaleY() {
    return this.viewState.scaleY;
  }
  /**
  Find the text line or block widget at the given vertical
  position (which is interpreted as relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop)).
  */
  elementAtHeight(e) {
    return this.readMeasured(), this.viewState.elementAtHeight(e);
  }
  /**
  Find the line block (see
  [`lineBlockAt`](https://codemirror.net/6/docs/ref/#view.EditorView.lineBlockAt)) at the given
  height, again interpreted relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop).
  */
  lineBlockAtHeight(e) {
    return this.readMeasured(), this.viewState.lineBlockAtHeight(e);
  }
  /**
  Get the extent and vertical position of all [line
  blocks](https://codemirror.net/6/docs/ref/#view.EditorView.lineBlockAt) in the viewport. Positions
  are relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop);
  */
  get viewportLineBlocks() {
    return this.viewState.viewportLines;
  }
  /**
  Find the line block around the given document position. A line
  block is a range delimited on both sides by either a
  non-[hidden](https://codemirror.net/6/docs/ref/#view.Decoration^replace) line break, or the
  start/end of the document. It will usually just hold a line of
  text, but may be broken into multiple textblocks by block
  widgets.
  */
  lineBlockAt(e) {
    return this.viewState.lineBlockAt(e);
  }
  /**
  The editor's total content height.
  */
  get contentHeight() {
    return this.viewState.contentHeight;
  }
  /**
  Move a cursor position by [grapheme
  cluster](https://codemirror.net/6/docs/ref/#state.findClusterBreak). `forward` determines whether
  the motion is away from the line start, or towards it. In
  bidirectional text, the line is traversed in visual order, using
  the editor's [text direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection).
  When the start position was the last one on the line, the
  returned position will be across the line break. If there is no
  further line, the original position is returned.
  
  By default, this method moves over a single cluster. The
  optional `by` argument can be used to move across more. It will
  be called with the first cluster as argument, and should return
  a predicate that determines, for each subsequent cluster,
  whether it should also be moved over.
  */
  moveByChar(e, t, n) {
    return na(this, e, xu(this, e, t, n));
  }
  /**
  Move a cursor position across the next group of either
  [letters](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) or non-letter
  non-whitespace characters.
  */
  moveByGroup(e, t) {
    return na(this, e, xu(this, e, t, (n) => Q1(this, e.head, n)));
  }
  /**
  Get the cursor position visually at the start or end of a line.
  Note that this may differ from the _logical_ position at its
  start or end (which is simply at `line.from`/`line.to`) if text
  at the start or end goes against the line's base text direction.
  */
  visualLineSide(e, t) {
    let n = this.bidiSpans(e), s = this.textDirectionAt(e.from), r = n[t ? n.length - 1 : 0];
    return P.cursor(r.side(t, s) + e.from, r.forward(!t, s) ? 1 : -1);
  }
  /**
  Move to the next line boundary in the given direction. If
  `includeWrap` is true, line wrapping is on, and there is a
  further wrap point on the current line, the wrap point will be
  returned. Otherwise this function will return the start or end
  of the line.
  */
  moveToLineBoundary(e, t, n = !0) {
    return M1(this, e, t, n);
  }
  /**
  Move a cursor position vertically. When `distance` isn't given,
  it defaults to moving to the next line (including wrapped
  lines). Otherwise, `distance` should provide a positive distance
  in pixels.
  
  When `start` has a
  [`goalColumn`](https://codemirror.net/6/docs/ref/#state.SelectionRange.goalColumn), the vertical
  motion will use that as a target horizontal position. Otherwise,
  the cursor's own horizontal position is used. The returned
  cursor will have its goal column set to whichever column was
  used.
  */
  moveVertically(e, t, n) {
    return na(this, e, I1(this, e, t, n));
  }
  /**
  Find the DOM parent node and offset (child offset if `node` is
  an element, character offset when it is a text node) at the
  given document position.
  
  Note that for positions that aren't currently in
  `visibleRanges`, the resulting DOM position isn't necessarily
  meaningful (it may just point before or after a placeholder
  element).
  */
  domAtPos(e, t = 1) {
    return this.docView.domAtPos(e, t);
  }
  /**
  Find the document position at the given DOM node. Can be useful
  for associating positions with DOM events. Will raise an error
  when `node` isn't part of the editor content.
  */
  posAtDOM(e, t = 0) {
    return this.docView.posFromDOM(e, t);
  }
  posAtCoords(e, t = !0) {
    this.readMeasured();
    let n = gc(this, e, t);
    return n && n.pos;
  }
  posAndSideAtCoords(e, t = !0) {
    return this.readMeasured(), gc(this, e, t);
  }
  /**
  Get the screen coordinates at the given document position.
  `side` determines whether the coordinates are based on the
  element before (-1) or after (1) the position (if no element is
  available on the given side, the method will transparently use
  another strategy to get reasonable coordinates).
  */
  coordsAtPos(e, t = 1) {
    this.readMeasured();
    let n = this.docView.coordsAt(e, t);
    if (!n || n.left == n.right)
      return n;
    let s = this.state.doc.lineAt(e), r = this.bidiSpans(s), o = r[bi.find(r, e - s.from, -1, t)];
    return Vo(n, o.dir == Te.LTR == t > 0);
  }
  /**
  Return the rectangle around a given character. If `pos` does not
  point in front of a character that is in the viewport and
  rendered (i.e. not replaced, not a line break), this will return
  null. For space characters that are a line wrap point, this will
  return the position before the line break.
  */
  coordsForChar(e) {
    return this.readMeasured(), this.docView.coordsForChar(e);
  }
  /**
  The default width of a character in the editor. May not
  accurately reflect the width of all characters (given variable
  width fonts or styling of invididual ranges).
  */
  get defaultCharacterWidth() {
    return this.viewState.heightOracle.charWidth;
  }
  /**
  The default height of a line in the editor. May not be accurate
  for all lines.
  */
  get defaultLineHeight() {
    return this.viewState.heightOracle.lineHeight;
  }
  /**
  The text direction
  ([`direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/direction)
  CSS property) of the editor's content element.
  */
  get textDirection() {
    return this.viewState.defaultTextDirection;
  }
  /**
  Find the text direction of the block at the given position, as
  assigned by CSS. If
  [`perLineTextDirection`](https://codemirror.net/6/docs/ref/#view.EditorView^perLineTextDirection)
  isn't enabled, or the given position is outside of the viewport,
  this will always return the same as
  [`textDirection`](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection). Note that
  this may trigger a DOM layout.
  */
  textDirectionAt(e) {
    return !this.state.facet(Ym) || e < this.viewport.from || e > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(e));
  }
  /**
  Whether this editor [wraps lines](https://codemirror.net/6/docs/ref/#view.EditorView.lineWrapping)
  (as determined by the
  [`white-space`](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)
  CSS property of its content element).
  */
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping;
  }
  /**
  Returns the bidirectional text structure of the given line
  (which should be in the current document) as an array of span
  objects. The order of these spans matches the [text
  direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection)—if that is
  left-to-right, the leftmost spans come first, otherwise the
  rightmost spans come first.
  */
  bidiSpans(e) {
    if (e.length > Cv)
      return Wm(e.length);
    let t = this.textDirectionAt(e.from), n;
    for (let r of this.bidiCache)
      if (r.from == e.from && r.dir == t && (r.fresh || Xm(r.isolates, n = gu(this, e))))
        return r.order;
    n || (n = gu(this, e));
    let s = a1(e.text, t, n);
    return this.bidiCache.push(new qo(e.from, e.to, t, n, !0, s)), s;
  }
  /**
  Check whether the editor has focus.
  */
  get hasFocus() {
    var e;
    return (this.dom.ownerDocument.hasFocus() || B.safari && ((e = this.inputState) === null || e === void 0 ? void 0 : e.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
  }
  /**
  Put focus on the editor.
  */
  focus() {
    this.observer.ignore(() => {
      Mm(this.contentDOM), this.docView.updateSelection();
    });
  }
  /**
  Update the [root](https://codemirror.net/6/docs/ref/##view.EditorViewConfig.root) in which the editor lives. This is only
  necessary when moving the editor's existing DOM to a new window or shadow root.
  */
  setRoot(e) {
    this._root != e && (this._root = e, this.observer.setWindow((e.nodeType == 9 ? e : e.ownerDocument).defaultView || window), this.mountStyles());
  }
  /**
  Clean up this editor view, removing its element from the
  document, unregistering event handlers, and notifying
  plugins. The view instance can no longer be used after
  calling this.
  */
  destroy() {
    this.root.activeElement == this.contentDOM && this.contentDOM.blur();
    for (let e of this.plugins)
      e.destroy(this);
    this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0;
  }
  /**
  Returns an effect that can be
  [added](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) to a transaction to
  cause it to scroll the given position or range into view.
  */
  static scrollIntoView(e, t = {}) {
    var n, s, r, o;
    return Mr.of(new Zn(typeof e == "number" ? P.cursor(e) : e, (n = t.y) !== null && n !== void 0 ? n : "nearest", (s = t.x) !== null && s !== void 0 ? s : "nearest", (r = t.yMargin) !== null && r !== void 0 ? r : 5, (o = t.xMargin) !== null && o !== void 0 ? o : 5));
  }
  /**
  Return an effect that resets the editor to its current (at the
  time this method was called) scroll position. Note that this
  only affects the editor's own scrollable element, not parents.
  See also
  [`EditorViewConfig.scrollTo`](https://codemirror.net/6/docs/ref/#view.EditorViewConfig.scrollTo).
  
  The effect should be used with a document identical to the one
  it was created for. Failing to do so is not an error, but may
  not scroll to the expected position. You can
  [map](https://codemirror.net/6/docs/ref/#state.StateEffect.map) the effect to account for changes.
  */
  scrollSnapshot() {
    let { scrollTop: e, scrollLeft: t } = this.scrollDOM, n = this.viewState.scrollAnchorAt(e);
    return Mr.of(new Zn(P.cursor(n.from), "start", "start", n.top - e, t, !0));
  }
  /**
  Enable or disable tab-focus mode, which disables key bindings
  for Tab and Shift-Tab, letting the browser's default
  focus-changing behavior go through instead. This is useful to
  prevent trapping keyboard users in your editor.
  
  Without argument, this toggles the mode. With a boolean, it
  enables (true) or disables it (false). Given a number, it
  temporarily enables the mode until that number of milliseconds
  have passed or another non-Tab key is pressed.
  */
  setTabFocusMode(e) {
    e == null ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : typeof e == "boolean" ? this.inputState.tabFocusMode = e ? 0 : -1 : this.inputState.tabFocusMode != 0 && (this.inputState.tabFocusMode = Date.now() + e);
  }
  /**
  Returns an extension that can be used to add DOM event handlers.
  The value should be an object mapping event names to handler
  functions. For any given event, such functions are ordered by
  extension precedence, and the first handler to return true will
  be assumed to have handled that event, and no other handlers or
  built-in behavior will be activated for it. These are registered
  on the [content element](https://codemirror.net/6/docs/ref/#view.EditorView.contentDOM), except
  for `scroll` handlers, which will be called any time the
  editor's [scroll element](https://codemirror.net/6/docs/ref/#view.EditorView.scrollDOM) or one of
  its parent nodes is scrolled.
  */
  static domEventHandlers(e) {
    return Ve.define(() => ({}), { eventHandlers: e });
  }
  /**
  Create an extension that registers DOM event observers. Contrary
  to event [handlers](https://codemirror.net/6/docs/ref/#view.EditorView^domEventHandlers),
  observers can't be prevented from running by a higher-precedence
  handler returning true. They also don't prevent other handlers
  and observers from running when they return true, and should not
  call `preventDefault`.
  */
  static domEventObservers(e) {
    return Ve.define(() => ({}), { eventObservers: e });
  }
  /**
  Create a theme extension. The first argument can be a
  [`style-mod`](https://code.haverbeke.berlin/marijn/style-mod#documentation)
  style spec providing the styles for the theme. These will be
  prefixed with a generated class for the style.
  
  Because the selectors will be prefixed with a scope class, rule
  that directly match the editor's [wrapper
  element](https://codemirror.net/6/docs/ref/#view.EditorView.dom)—to which the scope class will be
  added—need to be explicitly differentiated by adding an `&` to
  the selector for that element—for example
  `&.cm-focused`.
  
  When `dark` is set to true, the theme will be marked as dark,
  which will cause the `&dark` rules from [base
  themes](https://codemirror.net/6/docs/ref/#view.EditorView^baseTheme) to be used (as opposed to
  `&light` when a light theme is active).
  */
  static theme(e, t) {
    let n = Ki.newName(), s = [Xr.of(n), As.of(xc(`.${n}`, e))];
    return t && t.dark && s.push(bc.of(!0)), s;
  }
  /**
  Create an extension that adds styles to the base theme. Like
  with [`theme`](https://codemirror.net/6/docs/ref/#view.EditorView^theme), use `&` to indicate the
  place of the editor wrapper element when directly targeting
  that. You can also use `&dark` or `&light` instead to only
  target editors with a dark or light theme.
  */
  static baseTheme(e) {
    return An.lowest(As.of(xc("." + yc, e, vg)));
  }
  /**
  Retrieve an editor view instance from the view's DOM
  representation.
  */
  static findFromDOM(e) {
    var t;
    let n = e.querySelector(".cm-content"), s = n && _e.get(n) || _e.get(e);
    return ((t = s == null ? void 0 : s.root) === null || t === void 0 ? void 0 : t.view) || null;
  }
}
X.styleModule = As;
X.inputHandler = zm;
X.clipboardInputFilter = xh;
X.clipboardOutputFilter = vh;
X.scrollHandler = Zm;
X.focusChangeEffect = jm;
X.perLineTextDirection = Ym;
X.exceptionSink = Gm;
X.updateListener = dc;
X.editable = $i;
X.mouseSelectionStyle = Um;
X.dragMovesSelection = Hm;
X.clickAddsSelectionRange = qm;
X.decorations = Sl;
X.blockWrappers = tg;
X.outerDecorations = wh;
X.atomicRanges = Pr;
X.bidiIsolatedRanges = ig;
X.cursorScrollMargin = /* @__PURE__ */ L.define({
  combine: (i) => {
    let e = 5, t = 5;
    for (let n of i)
      typeof n == "number" ? e = t = n : { x: e, y: t } = n;
    return { x: e, y: t };
  }
});
X.scrollMargins = ng;
X.darkTheme = bc;
X.cspNonce = /* @__PURE__ */ L.define({ combine: (i) => i.length ? i[0] : "" });
X.contentAttributes = Sh;
X.editorAttributes = eg;
X.lineWrapping = /* @__PURE__ */ X.contentAttributes.of({ class: "cm-lineWrapping" });
X.announce = /* @__PURE__ */ ie.define();
const Cv = 4096, Iu = {};
class qo {
  constructor(e, t, n, s, r, o) {
    this.from = e, this.to = t, this.dir = n, this.isolates = s, this.fresh = r, this.order = o;
  }
  static update(e, t) {
    if (t.empty && !e.some((r) => r.fresh))
      return e;
    let n = [], s = e.length ? e[e.length - 1].dir : Te.LTR;
    for (let r = Math.max(0, e.length - 10); r < e.length; r++) {
      let o = e[r];
      o.dir == s && !t.touchesRange(o.from, o.to) && n.push(new qo(t.mapPos(o.from, 1), t.mapPos(o.to, -1), o.dir, o.isolates, !1, o.order));
    }
    return n;
  }
}
function Vu(i, e, t) {
  for (let n = i.state.facet(e), s = n.length - 1; s >= 0; s--) {
    let r = n[s], o = typeof r == "function" ? r(i) : r;
    o && Oh(o, t);
  }
  return t;
}
const Ev = B.mac ? "mac" : B.windows ? "win" : B.linux ? "linux" : "key";
function Tv(i, e) {
  const t = i.split(/-(?!$)/);
  let n = t[t.length - 1];
  n == "Space" && (n = " ");
  let s, r, o, l;
  for (let a = 0; a < t.length - 1; ++a) {
    const c = t[a];
    if (/^(cmd|meta|m)$/i.test(c))
      l = !0;
    else if (/^a(lt)?$/i.test(c))
      s = !0;
    else if (/^(c|ctrl|control)$/i.test(c))
      r = !0;
    else if (/^s(hift)?$/i.test(c))
      o = !0;
    else if (/^mod$/i.test(c))
      e == "mac" ? l = !0 : r = !0;
    else
      throw new Error("Unrecognized modifier name: " + c);
  }
  return s && (n = "Alt-" + n), r && (n = "Ctrl-" + n), l && (n = "Meta-" + n), o && (n = "Shift-" + n), n;
}
function Wr(i, e, t) {
  return e.altKey && (i = "Alt-" + i), e.ctrlKey && (i = "Ctrl-" + i), e.metaKey && (i = "Meta-" + i), t !== !1 && e.shiftKey && (i = "Shift-" + i), i;
}
const Av = /* @__PURE__ */ An.default(/* @__PURE__ */ X.domEventHandlers({
  keydown(i, e) {
    return wg(Sg(e.state), i, e, "editor");
  }
})), Th = /* @__PURE__ */ L.define({ enables: Av }), Lu = /* @__PURE__ */ new WeakMap();
function Sg(i) {
  let e = i.facet(Th), t = Lu.get(e);
  return t || Lu.set(e, t = Nv(e.reduce((n, s) => n.concat(s), []))), t;
}
function $v(i, e, t) {
  return wg(Sg(i.state), e, i, t);
}
let qi = null;
const Dv = 4e3;
function Nv(i, e = Ev) {
  let t = /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ Object.create(null), s = (o, l) => {
    let a = n[o];
    if (a == null)
      n[o] = l;
    else if (a != l)
      throw new Error("Key binding " + o + " is used both as a regular binding and as a multi-stroke prefix");
  }, r = (o, l, a, c, h) => {
    var f, u;
    let d = t[o] || (t[o] = /* @__PURE__ */ Object.create(null)), p = l.split(/ (?!$)/).map((b) => Tv(b, e));
    for (let b = 1; b < p.length; b++) {
      let x = p.slice(0, b).join(" ");
      s(x, !0), d[x] || (d[x] = {
        preventDefault: !0,
        stopPropagation: !1,
        run: [(S) => {
          let C = qi = { view: S, prefix: x, scope: o };
          return setTimeout(() => {
            qi == C && (qi = null);
          }, Dv), !0;
        }]
      });
    }
    let m = p.join(" ");
    s(m, !1);
    let g = d[m] || (d[m] = {
      preventDefault: !1,
      stopPropagation: !1,
      run: ((u = (f = d._any) === null || f === void 0 ? void 0 : f.run) === null || u === void 0 ? void 0 : u.slice()) || []
    });
    a && g.run.push(a), c && (g.preventDefault = !0), h && (g.stopPropagation = !0);
  };
  for (let o of i) {
    let l = o.scope ? o.scope.split(" ") : ["editor"];
    if (o.any)
      for (let c of l) {
        let h = t[c] || (t[c] = /* @__PURE__ */ Object.create(null));
        h._any || (h._any = { preventDefault: !1, stopPropagation: !1, run: [] });
        let { any: f } = o;
        for (let u in h)
          h[u].run.push((d) => f(d, vc));
      }
    let a = o[e] || o.key;
    if (a)
      for (let c of l)
        r(c, a, o.run, o.preventDefault, o.stopPropagation), o.shift && r(c, "Shift-" + a, o.shift, o.preventDefault, o.stopPropagation);
  }
  return t;
}
let vc = null;
function wg(i, e, t, n) {
  vc = e;
  let s = Gx(e), r = gt(s, 0), o = mi(r) == s.length && s != " ", l = "", a = !1, c = !1, h = !1;
  qi && qi.view == t && qi.scope == n && (l = qi.prefix + " ", fg.indexOf(e.keyCode) < 0 && (c = !0, qi = null));
  let f = /* @__PURE__ */ new Set(), u = (g) => {
    if (g) {
      for (let b of g.run)
        if (!f.has(b) && (f.add(b), b(t)))
          return g.stopPropagation && (h = !0), !0;
      g.preventDefault && (g.stopPropagation && (h = !0), c = !0);
    }
    return !1;
  }, d = i[n], p, m;
  return d && (u(d[l + Wr(s, e, !o)]) ? a = !0 : o && (e.altKey || e.metaKey || e.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
  !(B.windows && e.ctrlKey && e.altKey) && // Alt-combinations on macOS tend to be typed characters
  !(B.mac && e.altKey && !(e.ctrlKey || e.metaKey)) && (p = Zi[e.keyCode]) && p != s ? (u(d[l + Wr(p, e, !0)]) || e.shiftKey && (m = er[e.keyCode]) != s && m != p && u(d[l + Wr(m, e, !1)])) && (a = !0) : o && e.shiftKey && u(d[l + Wr(s, e, !0)]) && (a = !0), !a && u(d._any) && (a = !0)), c && (a = !0), a && h && e.stopPropagation(), vc = null, a;
}
class vn {
  /**
  Create a marker with the given class and dimensions. If `width`
  is null, the DOM element will get no width style.
  */
  constructor(e, t, n, s, r) {
    this.className = e, this.left = t, this.top = n, this.width = s, this.height = r;
  }
  draw() {
    let e = document.createElement("div");
    return e.className = this.className, this.adjust(e), e;
  }
  update(e, t) {
    return t.className != this.className ? !1 : (this.adjust(e), !0);
  }
  adjust(e) {
    e.style.left = this.left + "px", e.style.top = this.top + "px", this.width != null && (e.style.width = this.width + "px"), e.style.height = this.height + "px";
  }
  eq(e) {
    return this.left == e.left && this.top == e.top && this.width == e.width && this.height == e.height && this.className == e.className;
  }
  /**
  Create a set of rectangles for the given selection range,
  assigning them theclass`className`. Will create a single
  rectangle for empty ranges, and a set of selection-style
  rectangles covering the range's content (in a bidi-aware
  way) for non-empty ones.
  */
  static forRange(e, t, n) {
    if (n.empty) {
      let s = e.coordsAtPos(n.head, n.assoc || 1);
      if (!s)
        return [];
      let r = Pg(e);
      return [new vn(t, s.left - r.left, s.top - r.top, null, s.bottom - s.top)];
    } else
      return Rv(e, t, n);
  }
}
function Pg(i) {
  let e = i.scrollDOM.getBoundingClientRect();
  return { left: (i.textDirection == Te.LTR ? e.left : e.right - i.scrollDOM.clientWidth * i.scaleX) - i.scrollDOM.scrollLeft * i.scaleX, top: e.top - i.scrollDOM.scrollTop * i.scaleY };
}
function Bu(i, e, t, n) {
  let s = i.coordsAtPos(e, t * 2);
  if (!s)
    return n;
  let r = i.dom.getBoundingClientRect(), o = (s.top + s.bottom) / 2, l = i.posAtCoords({ x: r.left + 1, y: o }), a = i.posAtCoords({ x: r.right - 1, y: o });
  return l == null || a == null ? n : { from: Math.max(n.from, Math.min(l, a)), to: Math.min(n.to, Math.max(l, a)) };
}
function Rv(i, e, t) {
  if (t.to <= i.viewport.from || t.from >= i.viewport.to)
    return [];
  let n = Math.max(t.from, i.viewport.from), s = Math.min(t.to, i.viewport.to), r = i.textDirection == Te.LTR, o = i.contentDOM, l = o.getBoundingClientRect(), a = Pg(i), c = o.querySelector(".cm-line"), h = c && window.getComputedStyle(c), f = l.left + (h ? parseInt(h.paddingLeft) + Math.min(0, parseInt(h.textIndent)) : 0), u = l.right - (h ? parseInt(h.paddingRight) : 0), d = mc(i, n, 1), p = mc(i, s, -1), m = d.type == nt.Text ? d : null, g = p.type == nt.Text ? p : null;
  if (m && (i.lineWrapping || d.widgetLineBreaks) && (m = Bu(i, n, 1, m)), g && (i.lineWrapping || p.widgetLineBreaks) && (g = Bu(i, s, -1, g)), m && g && m.from == g.from && m.to == g.to)
    return x(S(t.from, t.to, m));
  {
    let v = m ? S(t.from, null, m) : C(d, !1), T = g ? S(null, t.to, g) : C(p, !0), N = [];
    return (m || d).to < (g || p).from - (m && g ? 1 : 0) || d.widgetLineBreaks > 1 && v.bottom + i.defaultLineHeight / 2 < T.top ? N.push(b(f, v.bottom, u, T.top)) : v.bottom < T.top && i.elementAtHeight((v.bottom + T.top) / 2).type == nt.Text && (v.bottom = T.top = (v.bottom + T.top) / 2), x(v).concat(N).concat(x(T));
  }
  function b(v, T, N, W) {
    return new vn(e, v - a.left, T - a.top, Math.max(0, N - v), W - T);
  }
  function x({ top: v, bottom: T, horizontal: N }) {
    let W = [];
    for (let U = 0; U < N.length; U += 2)
      W.push(b(N[U], v, N[U + 1], T));
    return W;
  }
  function S(v, T, N) {
    let W = 1e9, U = -1e9, se = [];
    function Z(fe, oe, Oe, G, J) {
      let xe = i.coordsAtPos(fe, fe == N.to ? -2 : 2), le = i.coordsAtPos(Oe, Oe == N.from ? 2 : -2);
      !xe || !le || (W = Math.min(xe.top, le.top, W), U = Math.max(xe.bottom, le.bottom, U), J == Te.LTR ? se.push(r && oe ? f : xe.left, r && G ? u : le.right) : se.push(!r && G ? f : le.left, !r && oe ? u : xe.right));
    }
    let F = v ?? N.from, he = T ?? N.to;
    for (let fe of i.visibleRanges)
      if (fe.to > F && fe.from < he)
        for (let oe = Math.max(fe.from, F), Oe = Math.min(fe.to, he); ; ) {
          let G = i.state.doc.lineAt(oe);
          for (let J of i.bidiSpans(G)) {
            let xe = J.from + G.from, le = J.to + G.from;
            if (xe >= Oe)
              break;
            le > oe && Z(Math.max(xe, oe), v == null && xe <= F, Math.min(le, Oe), T == null && le >= he, J.dir);
          }
          if (oe = G.to + 1, oe >= Oe)
            break;
        }
    return se.length == 0 && Z(F, v == null, he, T == null, i.textDirection), { top: W, bottom: U, horizontal: se };
  }
  function C(v, T) {
    let N = l.top + (T ? v.top : v.bottom);
    return { top: N, bottom: N, horizontal: [] };
  }
}
function _v(i, e) {
  return i.constructor == e.constructor && i.eq(e);
}
class Mv {
  constructor(e, t) {
    this.view = e, this.layer = t, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = { read: this.measure.bind(this), write: this.draw.bind(this) }, this.dom = e.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), t.above && this.dom.classList.add("cm-layer-above"), t.class && this.dom.classList.add(t.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(e.state), e.requestMeasure(this.measureReq), t.mount && t.mount(this.dom, e);
  }
  update(e) {
    e.startState.facet(po) != e.state.facet(po) && this.setOrder(e.state), (this.layer.update(e, this.dom) || e.geometryChanged) && (this.scale(), e.view.requestMeasure(this.measureReq));
  }
  docViewUpdate(e) {
    this.layer.updateOnDocViewUpdate !== !1 && e.requestMeasure(this.measureReq);
  }
  setOrder(e) {
    let t = 0, n = e.facet(po);
    for (; t < n.length && n[t] != this.layer; )
      t++;
    this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - t);
  }
  measure() {
    return this.layer.markers(this.view);
  }
  scale() {
    let { scaleX: e, scaleY: t } = this.view;
    (e != this.scaleX || t != this.scaleY) && (this.scaleX = e, this.scaleY = t, this.dom.style.transform = `scale(${1 / e}, ${1 / t})`);
  }
  draw(e) {
    if (e.length != this.drawn.length || e.some((t, n) => !_v(t, this.drawn[n]))) {
      let t = this.dom.firstChild, n = 0;
      for (let s of e)
        s.update && t && s.constructor && this.drawn[n].constructor && s.update(t, this.drawn[n]) ? (t = t.nextSibling, n++) : this.dom.insertBefore(s.draw(), t);
      for (; t; ) {
        let s = t.nextSibling;
        t.remove(), t = s;
      }
      this.drawn = e, B.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none");
    }
  }
  destroy() {
    this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove();
  }
}
const po = /* @__PURE__ */ L.define();
function kg(i) {
  return [
    Ve.define((e) => new Mv(e, i)),
    po.of(i)
  ];
}
const ls = /* @__PURE__ */ L.define({
  combine(i) {
    return wi(i, {
      cursorBlinkRate: 1200,
      drawRangeCursor: !0,
      iosSelectionHandles: !0
    }, {
      cursorBlinkRate: (e, t) => Math.min(e, t),
      drawRangeCursor: (e, t) => e || t
    });
  }
});
function Qv(i = {}) {
  return [
    ls.of(i),
    Iv,
    Vv,
    Lv,
    Km.of(!0)
  ];
}
function Cg(i) {
  return i.startState.facet(ls) != i.state.facet(ls);
}
const Iv = /* @__PURE__ */ kg({
  above: !0,
  markers(i) {
    let { state: e } = i, t = e.facet(ls), n = [];
    for (let s of e.selection.ranges) {
      let r = s == e.selection.main;
      if (s.empty || t.drawRangeCursor && !(r && B.ios && t.iosSelectionHandles)) {
        let o = r ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary", l = s.empty ? s : P.cursor(s.head, s.assoc);
        for (let a of vn.forRange(i, o, l))
          n.push(a);
      }
    }
    return n;
  },
  update(i, e) {
    i.transactions.some((n) => n.selection) && (e.style.animationName = e.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink");
    let t = Cg(i);
    return t && Xu(i.state, e), i.docChanged || i.selectionSet || t;
  },
  mount(i, e) {
    Xu(e.state, i);
  },
  class: "cm-cursorLayer"
});
function Xu(i, e) {
  e.style.animationDuration = i.facet(ls).cursorBlinkRate + "ms";
}
const Vv = /* @__PURE__ */ kg({
  above: !1,
  markers(i) {
    let e = [], { main: t, ranges: n } = i.state.selection;
    for (let s of n)
      if (!s.empty)
        for (let r of vn.forRange(i, "cm-selectionBackground", s))
          e.push(r);
    if (B.ios && !t.empty && i.state.facet(ls).iosSelectionHandles) {
      for (let s of vn.forRange(i, "cm-selectionHandle cm-selectionHandle-start", P.cursor(t.from, 1)))
        e.push(s);
      for (let s of vn.forRange(i, "cm-selectionHandle cm-selectionHandle-end", P.cursor(t.to, 1)))
        e.push(s);
    }
    return e;
  },
  update(i, e) {
    return i.docChanged || i.selectionSet || i.viewportChanged || Cg(i);
  },
  class: "cm-selectionLayer"
}), Lv = /* @__PURE__ */ An.highest(/* @__PURE__ */ X.theme({
  ".cm-line": {
    "& ::selection, &::selection": { backgroundColor: "transparent !important" },
    caretColor: "transparent !important"
  },
  ".cm-content": {
    caretColor: "transparent !important",
    "& :focus": {
      caretColor: "initial !important",
      "&::selection, & ::selection": {
        backgroundColor: "Highlight !important"
      }
    }
  }
})), Eg = /* @__PURE__ */ ie.define({
  map(i, e) {
    return i == null ? null : e.mapPos(i);
  }
}), Ds = /* @__PURE__ */ rt.define({
  create() {
    return null;
  },
  update(i, e) {
    return i != null && (i = e.changes.mapPos(i)), e.effects.reduce((t, n) => n.is(Eg) ? n.value : t, i);
  }
}), Bv = /* @__PURE__ */ Ve.fromClass(class {
  constructor(i) {
    this.view = i, this.cursor = null, this.measureReq = { read: this.readPos.bind(this), write: this.drawCursor.bind(this) };
  }
  update(i) {
    var e;
    let t = i.state.field(Ds);
    t == null ? this.cursor != null && ((e = this.cursor) === null || e === void 0 || e.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (i.startState.field(Ds) != t || i.docChanged || i.geometryChanged) && this.view.requestMeasure(this.measureReq));
  }
  readPos() {
    let { view: i } = this, e = i.state.field(Ds), t = e != null && i.coordsAtPos(e);
    if (!t)
      return null;
    let n = i.scrollDOM.getBoundingClientRect();
    return {
      left: t.left - n.left + i.scrollDOM.scrollLeft * i.scaleX,
      top: t.top - n.top + i.scrollDOM.scrollTop * i.scaleY,
      height: t.bottom - t.top
    };
  }
  drawCursor(i) {
    if (this.cursor) {
      let { scaleX: e, scaleY: t } = this.view;
      i ? (this.cursor.style.left = i.left / e + "px", this.cursor.style.top = i.top / t + "px", this.cursor.style.height = i.height / t + "px") : this.cursor.style.left = "-100000px";
    }
  }
  destroy() {
    this.cursor && this.cursor.remove();
  }
  setDropPos(i) {
    this.view.state.field(Ds) != i && this.view.dispatch({ effects: Eg.of(i) });
  }
}, {
  eventObservers: {
    dragover(i) {
      this.setDropPos(this.view.posAtCoords({ x: i.clientX, y: i.clientY }));
    },
    dragleave(i) {
      (i.target == this.view.contentDOM || !this.view.contentDOM.contains(i.relatedTarget)) && this.setDropPos(null);
    },
    dragend() {
      this.setDropPos(null);
    },
    drop() {
      this.setDropPos(null);
    }
  }
});
function Xv() {
  return [Ds, Bv];
}
function Wu(i, e, t, n, s) {
  e.lastIndex = 0;
  for (let r = i.iterRange(t, n), o = t, l; !r.next().done; o += r.value.length)
    if (!r.lineBreak)
      for (; l = e.exec(r.value); )
        s(o + l.index, l);
}
function Wv(i, e) {
  let t = i.visibleRanges;
  if (t.length == 1 && t[0].from == i.viewport.from && t[0].to == i.viewport.to)
    return t;
  let n = [];
  for (let { from: s, to: r } of t)
    s = Math.max(i.state.doc.lineAt(s).from, s - e), r = Math.min(i.state.doc.lineAt(r).to, r + e), n.length && n[n.length - 1].to >= s ? n[n.length - 1].to = r : n.push({ from: s, to: r });
  return n;
}
class Fv {
  /**
  Create a decorator.
  */
  constructor(e) {
    const { regexp: t, decoration: n, decorate: s, boundary: r, maxLength: o = 1e3 } = e;
    if (!t.global)
      throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
    if (this.regexp = t, s)
      this.addMatch = (l, a, c, h) => s(h, c, c + l[0].length, l, a);
    else if (typeof n == "function")
      this.addMatch = (l, a, c, h) => {
        let f = n(l, a, c);
        f && h(c, c + l[0].length, f);
      };
    else if (n)
      this.addMatch = (l, a, c, h) => h(c, c + l[0].length, n);
    else
      throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
    this.boundary = r, this.maxLength = o;
  }
  /**
  Compute the full set of decorations for matches in the given
  view's viewport. You'll want to call this when initializing your
  plugin.
  */
  createDeco(e) {
    let t = new Ni(), n = t.add.bind(t);
    for (let { from: s, to: r } of Wv(e, this.maxLength))
      Wu(e.state.doc, this.regexp, s, r, (o, l) => this.addMatch(l, e, o, n));
    return t.finish();
  }
  /**
  Update a set of decorations for a view update. `deco` _must_ be
  the set of decorations produced by _this_ `MatchDecorator` for
  the view state before the update.
  */
  updateDeco(e, t) {
    let n = 1e9, s = -1;
    return e.docChanged && e.changes.iterChanges((r, o, l, a) => {
      a >= e.view.viewport.from && l <= e.view.viewport.to && (n = Math.min(l, n), s = Math.max(a, s));
    }), e.viewportMoved || s - n > 1e3 ? this.createDeco(e.view) : s > -1 ? this.updateRange(e.view, t.map(e.changes), n, s) : t;
  }
  updateRange(e, t, n, s) {
    for (let r of e.visibleRanges) {
      let o = Math.max(r.from, n), l = Math.min(r.to, s);
      if (l >= o) {
        let a = e.state.doc.lineAt(o), c = a.to < l ? e.state.doc.lineAt(l) : a, h = Math.max(r.from, a.from), f = Math.min(r.to, c.to);
        if (this.boundary) {
          for (; o > a.from; o--)
            if (this.boundary.test(a.text[o - 1 - a.from])) {
              h = o;
              break;
            }
          for (; l < c.to; l++)
            if (this.boundary.test(c.text[l - c.from])) {
              f = l;
              break;
            }
        }
        let u = [], d, p = (m, g, b) => u.push(b.range(m, g));
        if (a == c)
          for (this.regexp.lastIndex = h - a.from; (d = this.regexp.exec(a.text)) && d.index < f - a.from; )
            this.addMatch(d, e, d.index + a.from, p);
        else
          Wu(e.state.doc, this.regexp, h, f, (m, g) => this.addMatch(g, e, m, p));
        t = t.update({ filterFrom: h, filterTo: f, filter: (m, g) => m < h || g > f, add: u });
      }
    }
    return t;
  }
}
const Sc = /x/.unicode != null ? "gu" : "g", qv = /* @__PURE__ */ new RegExp(`[\0-\b
--­؜​‎‏\u2028\u2029‭‮⁦⁧⁩\uFEFF￹-￼]`, Sc), Hv = {
  0: "null",
  7: "bell",
  8: "backspace",
  10: "newline",
  11: "vertical tab",
  13: "carriage return",
  27: "escape",
  8203: "zero width space",
  8204: "zero width non-joiner",
  8205: "zero width joiner",
  8206: "left-to-right mark",
  8207: "right-to-left mark",
  8232: "line separator",
  8237: "left-to-right override",
  8238: "right-to-left override",
  8294: "left-to-right isolate",
  8295: "right-to-left isolate",
  8297: "pop directional isolate",
  8233: "paragraph separator",
  65279: "zero width no-break space",
  65532: "object replacement"
};
let oa = null;
function Uv() {
  var i;
  if (oa == null && typeof document < "u" && document.body) {
    let e = document.body.style;
    oa = ((i = e.tabSize) !== null && i !== void 0 ? i : e.MozTabSize) != null;
  }
  return oa || !1;
}
const mo = /* @__PURE__ */ L.define({
  combine(i) {
    let e = wi(i, {
      render: null,
      specialChars: qv,
      addSpecialChars: null
    });
    return (e.replaceTabs = !Uv()) && (e.specialChars = new RegExp("	|" + e.specialChars.source, Sc)), e.addSpecialChars && (e.specialChars = new RegExp(e.specialChars.source + "|" + e.addSpecialChars.source, Sc)), e;
  }
});
function Gv(i = {}) {
  return [mo.of(i), zv()];
}
let Fu = null;
function zv() {
  return Fu || (Fu = Ve.fromClass(class {
    constructor(i) {
      this.view = i, this.decorations = Y.none, this.decorationCache = /* @__PURE__ */ Object.create(null), this.decorator = this.makeDecorator(i.state.facet(mo)), this.decorations = this.decorator.createDeco(i);
    }
    makeDecorator(i) {
      return new Fv({
        regexp: i.specialChars,
        decoration: (e, t, n) => {
          let { doc: s } = t.state, r = gt(e[0], 0);
          if (r == 9) {
            let o = s.lineAt(n), l = t.state.tabSize, a = ds(o.text, l, n - o.from);
            return Y.replace({
              widget: new Zv((l - a % l) * this.view.defaultCharacterWidth / this.view.scaleX)
            });
          }
          return this.decorationCache[r] || (this.decorationCache[r] = Y.replace({ widget: new Kv(i, r) }));
        },
        boundary: i.replaceTabs ? void 0 : /[^]/
      });
    }
    update(i) {
      let e = i.state.facet(mo);
      i.startState.facet(mo) != e ? (this.decorator = this.makeDecorator(e), this.decorations = this.decorator.createDeco(i.view)) : this.decorations = this.decorator.updateDeco(i, this.decorations);
    }
  }, {
    decorations: (i) => i.decorations
  }));
}
const jv = "•";
function Yv(i) {
  return i >= 32 ? jv : i == 10 ? "␤" : String.fromCharCode(9216 + i);
}
class Kv extends Vi {
  constructor(e, t) {
    super(), this.options = e, this.code = t;
  }
  eq(e) {
    return e.code == this.code;
  }
  toDOM(e) {
    let t = Yv(this.code), n = e.state.phrase("Control character") + " " + (Hv[this.code] || "0x" + this.code.toString(16)), s = this.options.render && this.options.render(this.code, n, t);
    if (s)
      return s;
    let r = document.createElement("span");
    return r.textContent = t, r.title = n, r.setAttribute("aria-label", n), r.className = "cm-specialChar", r;
  }
  ignoreEvent() {
    return !1;
  }
}
class Zv extends Vi {
  constructor(e) {
    super(), this.width = e;
  }
  eq(e) {
    return e.width == this.width;
  }
  toDOM() {
    let e = document.createElement("span");
    return e.textContent = "	", e.className = "cm-tab", e.style.width = this.width + "px", e;
  }
  ignoreEvent() {
    return !1;
  }
}
function Jv() {
  return tS;
}
const eS = /* @__PURE__ */ Y.line({ class: "cm-activeLine" }), tS = /* @__PURE__ */ Ve.fromClass(class {
  constructor(i) {
    this.decorations = this.getDeco(i);
  }
  update(i) {
    (i.docChanged || i.selectionSet) && (this.decorations = this.getDeco(i.view));
  }
  getDeco(i) {
    let e = -1, t = [];
    for (let n of i.state.selection.ranges) {
      let s = i.lineBlockAt(n.head);
      s.from > e && (t.push(eS.range(s.from)), e = s.from);
    }
    return Y.set(t);
  }
}, {
  decorations: (i) => i.decorations
}), wc = 2e3;
function iS(i, e, t) {
  let n = Math.min(e.line, t.line), s = Math.max(e.line, t.line), r = [];
  if (e.off > wc || t.off > wc || e.col < 0 || t.col < 0) {
    let o = Math.min(e.off, t.off), l = Math.max(e.off, t.off);
    for (let a = n; a <= s; a++) {
      let c = i.doc.line(a);
      c.length <= l && r.push(P.range(c.from + o, c.to + l));
    }
  } else {
    let o = Math.min(e.col, t.col), l = Math.max(e.col, t.col);
    for (let a = n; a <= s; a++) {
      let c = i.doc.line(a), h = ic(c.text, o, i.tabSize, !0);
      if (h < 0)
        r.push(P.cursor(c.to));
      else {
        let f = ic(c.text, l, i.tabSize);
        r.push(P.range(c.from + h, c.from + f));
      }
    }
  }
  return r;
}
function nS(i, e) {
  let t = i.coordsAtPos(i.viewport.from);
  return t ? Math.round(Math.abs((t.left - e) / i.defaultCharacterWidth)) : -1;
}
function qu(i, e) {
  let t = i.posAtCoords({ x: e.clientX, y: e.clientY }, !1), n = i.state.doc.lineAt(t), s = t - n.from, r = s > wc ? -1 : s == n.length ? nS(i, e.clientX) : ds(n.text, i.state.tabSize, t - n.from);
  return { line: n.number, col: r, off: s };
}
function sS(i, e) {
  let t = qu(i, e), n = i.state.selection;
  return t ? {
    update(s) {
      if (s.docChanged) {
        let r = s.changes.mapPos(s.startState.doc.line(t.line).from), o = s.state.doc.lineAt(r);
        t = { line: o.number, col: t.col, off: Math.min(t.off, o.length) }, n = n.map(s.changes);
      }
    },
    get(s, r, o) {
      let l = qu(i, s);
      if (!l)
        return n;
      let a = iS(i.state, t, l);
      return a.length ? o ? P.create(a.concat(n.ranges)) : P.create(a) : n;
    }
  } : null;
}
function rS(i) {
  let e = (t) => t.altKey && t.button == 0;
  return X.mouseSelectionStyle.of((t, n) => e(n) ? sS(t, n) : null);
}
const oS = {
  Alt: [18, (i) => !!i.altKey],
  Control: [17, (i) => !!i.ctrlKey],
  Shift: [16, (i) => !!i.shiftKey],
  Meta: [91, (i) => !!i.metaKey]
}, lS = { style: "cursor: crosshair" };
function aS(i = {}) {
  let [e, t] = oS[i.key || "Alt"], n = Ve.fromClass(class {
    constructor(s) {
      this.view = s, this.isDown = !1;
    }
    set(s) {
      this.isDown != s && (this.isDown = s, this.view.update([]));
    }
  }, {
    eventObservers: {
      keydown(s) {
        this.set(s.keyCode == e || t(s));
      },
      keyup(s) {
        (s.keyCode == e || !t(s)) && this.set(!1);
      },
      mousemove(s) {
        this.set(t(s));
      }
    }
  });
  return [
    n,
    X.contentAttributes.of((s) => {
      var r;
      return !((r = s.plugin(n)) === null || r === void 0) && r.isDown ? lS : null;
    })
  ];
}
const Fr = "-10000px";
class Tg {
  constructor(e, t, n, s) {
    this.facet = t, this.createTooltipView = n, this.removeTooltipView = s, this.input = e.state.facet(t), this.tooltips = this.input.filter((o) => o);
    let r = null;
    this.tooltipViews = this.tooltips.map((o) => r = n(o, r));
  }
  update(e, t) {
    var n;
    let s = e.state.facet(this.facet), r = s.filter((a) => a);
    if (s === this.input) {
      for (let a of this.tooltipViews)
        a.update && a.update(e);
      return !1;
    }
    let o = [], l = t ? [] : null;
    for (let a = 0; a < r.length; a++) {
      let c = r[a], h = -1;
      if (c) {
        for (let f = 0; f < this.tooltips.length; f++) {
          let u = this.tooltips[f];
          u && u.create == c.create && (h = f);
        }
        if (h < 0)
          o[a] = this.createTooltipView(c, a ? o[a - 1] : null), l && (l[a] = !!c.above);
        else {
          let f = o[a] = this.tooltipViews[h];
          l && (l[a] = t[h]), f.update && f.update(e);
        }
      }
    }
    for (let a of this.tooltipViews)
      o.indexOf(a) < 0 && (this.removeTooltipView(a), (n = a.destroy) === null || n === void 0 || n.call(a));
    return t && (l.forEach((a, c) => t[c] = a), t.length = l.length), this.input = s, this.tooltips = r, this.tooltipViews = o, !0;
  }
}
function cS(i) {
  let e = i.dom.ownerDocument.documentElement;
  return { top: 0, left: 0, bottom: e.clientHeight, right: e.clientWidth };
}
const la = /* @__PURE__ */ L.define({
  combine: (i) => {
    var e, t, n;
    return {
      position: B.ios ? "absolute" : ((e = i.find((s) => s.position)) === null || e === void 0 ? void 0 : e.position) || "fixed",
      parent: ((t = i.find((s) => s.parent)) === null || t === void 0 ? void 0 : t.parent) || null,
      tooltipSpace: ((n = i.find((s) => s.tooltipSpace)) === null || n === void 0 ? void 0 : n.tooltipSpace) || cS
    };
  }
}), Hu = /* @__PURE__ */ new WeakMap(), Ah = /* @__PURE__ */ Ve.fromClass(class {
  constructor(i) {
    this.view = i, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
    let e = i.state.facet(la);
    this.position = e.position, this.parent = e.parent, this.classes = i.themeClasses, this.createContainer(), this.measureReq = { read: this.readMeasure.bind(this), write: this.writeMeasure.bind(this), key: this }, this.resizeObserver = typeof ResizeObserver == "function" ? new ResizeObserver(() => this.measureSoon()) : null, this.manager = new Tg(i, $h, (t, n) => this.createTooltip(t, n), (t) => {
      this.resizeObserver && this.resizeObserver.unobserve(t.dom), t.dom.remove();
    }), this.above = this.manager.tooltips.map((t) => !!t.above), this.intersectionObserver = typeof IntersectionObserver == "function" ? new IntersectionObserver((t) => {
      Date.now() > this.lastTransaction - 50 && t.length > 0 && t[t.length - 1].intersectionRatio < 1 && this.measureSoon();
    }, { threshold: [1] }) : null, this.observeIntersection(), i.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure();
  }
  createContainer() {
    this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom;
  }
  observeIntersection() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      for (let i of this.manager.tooltipViews)
        this.intersectionObserver.observe(i.dom);
    }
  }
  measureSoon() {
    this.measureTimeout < 0 && (this.measureTimeout = setTimeout(() => {
      this.measureTimeout = -1, this.maybeMeasure();
    }, 50));
  }
  update(i) {
    i.transactions.length && (this.lastTransaction = Date.now());
    let e = this.manager.update(i, this.above);
    e && this.observeIntersection();
    let t = e || i.geometryChanged, n = i.state.facet(la);
    if (n.position != this.position && !this.madeAbsolute) {
      this.position = n.position;
      for (let s of this.manager.tooltipViews)
        s.dom.style.position = this.position;
      t = !0;
    }
    if (n.parent != this.parent) {
      this.parent && this.container.remove(), this.parent = n.parent, this.createContainer();
      for (let s of this.manager.tooltipViews)
        this.container.appendChild(s.dom);
      t = !0;
    } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
    t && this.maybeMeasure();
  }
  createTooltip(i, e) {
    let t = i.create(this.view), n = e ? e.dom : null;
    if (t.dom.classList.add("cm-tooltip"), i.arrow && !t.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
      let s = document.createElement("div");
      s.className = "cm-tooltip-arrow", t.dom.appendChild(s);
    }
    return t.dom.style.position = this.position, t.dom.style.top = Fr, t.dom.style.left = "0px", this.container.insertBefore(t.dom, n), t.mount && t.mount(this.view), this.resizeObserver && this.resizeObserver.observe(t.dom), t;
  }
  destroy() {
    var i, e, t;
    this.view.win.removeEventListener("resize", this.measureSoon);
    for (let n of this.manager.tooltipViews)
      n.dom.remove(), (i = n.destroy) === null || i === void 0 || i.call(n);
    this.parent && this.container.remove(), (e = this.resizeObserver) === null || e === void 0 || e.disconnect(), (t = this.intersectionObserver) === null || t === void 0 || t.disconnect(), clearTimeout(this.measureTimeout);
  }
  readMeasure() {
    let i = 1, e = 1, t = !1;
    if (this.position == "fixed" && this.manager.tooltipViews.length) {
      let { dom: r } = this.manager.tooltipViews[0];
      if (B.safari) {
        let o = r.getBoundingClientRect();
        t = Math.abs(o.top + 1e4) > 1 || Math.abs(o.left) > 1;
      } else
        t = !!r.offsetParent && r.offsetParent != this.container.ownerDocument.body;
    }
    if (t || this.position == "absolute")
      if (this.parent) {
        let r = this.parent.getBoundingClientRect();
        r.width && r.height && (i = r.width / this.parent.offsetWidth, e = r.height / this.parent.offsetHeight);
      } else
        ({ scaleX: i, scaleY: e } = this.view.viewState);
    let n = this.view.scrollDOM.getBoundingClientRect(), s = Ph(this.view);
    return {
      visible: {
        left: n.left + s.left,
        top: n.top + s.top,
        right: n.right - s.right,
        bottom: n.bottom - s.bottom
      },
      parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
      pos: this.manager.tooltips.map((r, o) => {
        let l = this.manager.tooltipViews[o];
        return l.getCoords ? l.getCoords(r.pos) : this.view.coordsAtPos(r.pos);
      }),
      size: this.manager.tooltipViews.map(({ dom: r }) => r.getBoundingClientRect()),
      space: this.view.state.facet(la).tooltipSpace(this.view),
      scaleX: i,
      scaleY: e,
      makeAbsolute: t
    };
  }
  writeMeasure(i) {
    var e;
    if (i.makeAbsolute) {
      this.madeAbsolute = !0, this.position = "absolute";
      for (let l of this.manager.tooltipViews)
        l.dom.style.position = "absolute";
    }
    let { visible: t, space: n, scaleX: s, scaleY: r } = i, o = [];
    for (let l = 0; l < this.manager.tooltips.length; l++) {
      let a = this.manager.tooltips[l], c = this.manager.tooltipViews[l], { dom: h } = c, f = i.pos[l], u = i.size[l];
      if (!f || a.clip !== !1 && (f.bottom <= Math.max(t.top, n.top) || f.top >= Math.min(t.bottom, n.bottom) || f.right < Math.max(t.left, n.left) - 0.1 || f.left > Math.min(t.right, n.right) + 0.1)) {
        h.style.top = Fr;
        continue;
      }
      let d = a.arrow ? c.dom.querySelector(".cm-tooltip-arrow") : null, p = d ? 7 : 0, m = u.right - u.left, g = (e = Hu.get(c)) !== null && e !== void 0 ? e : u.bottom - u.top, b = c.offset || fS, x = this.view.textDirection == Te.LTR, S = u.width > n.right - n.left ? x ? n.left : n.right - u.width : x ? Math.max(n.left, Math.min(f.left - (d ? 14 : 0) + b.x, n.right - m)) : Math.min(Math.max(n.left, f.left - m + (d ? 14 : 0) - b.x), n.right - m), C = this.above[l];
      !a.strictSide && (C ? f.top - g - p - b.y < n.top : f.bottom + g + p + b.y > n.bottom) && C == n.bottom - f.bottom > f.top - n.top && (C = this.above[l] = !C);
      let v = (C ? f.top - n.top : n.bottom - f.bottom) - p;
      if (v < g && c.resize !== !1) {
        if (v < this.view.defaultLineHeight) {
          h.style.top = Fr;
          continue;
        }
        Hu.set(c, g), h.style.height = (g = v) / r + "px";
      } else h.style.height && (h.style.height = "");
      let T = C ? f.top - g - p - b.y : f.bottom + p + b.y, N = S + m;
      if (c.overlap !== !0)
        for (let W of o)
          W.left < N && W.right > S && W.top < T + g && W.bottom > T && (T = C ? W.top - g - 2 - p : W.bottom + p + 2);
      if (this.position == "absolute" ? (h.style.top = (T - i.parent.top) / r + "px", Uu(h, (S - i.parent.left) / s)) : (h.style.top = T / r + "px", Uu(h, S / s)), d) {
        let W = f.left + (x ? b.x : -b.x) - (S + 14 - 7);
        d.style.left = W / s + "px";
      }
      c.overlap !== !0 && o.push({ left: S, top: T, right: N, bottom: T + g }), h.classList.toggle("cm-tooltip-above", C), h.classList.toggle("cm-tooltip-below", !C), c.positioned && c.positioned(i.space);
    }
  }
  maybeMeasure() {
    if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
      for (let i of this.manager.tooltipViews)
        i.dom.style.top = Fr;
  }
}, {
  eventObservers: {
    scroll() {
      this.maybeMeasure();
    }
  }
});
function Uu(i, e) {
  let t = parseInt(i.style.left, 10);
  (isNaN(t) || Math.abs(e - t) > 1) && (i.style.left = e + "px");
}
const hS = /* @__PURE__ */ X.baseTheme({
  ".cm-tooltip": {
    zIndex: 500,
    boxSizing: "border-box"
  },
  "&light .cm-tooltip": {
    border: "1px solid #bbb",
    backgroundColor: "#f5f5f5"
  },
  "&light .cm-tooltip-section:not(:first-child)": {
    borderTop: "1px solid #bbb"
  },
  "&dark .cm-tooltip": {
    backgroundColor: "#333338",
    color: "white"
  },
  ".cm-tooltip-arrow": {
    height: "7px",
    width: `${7 * 2}px`,
    position: "absolute",
    zIndex: -1,
    overflow: "hidden",
    "&:before, &:after": {
      content: "''",
      position: "absolute",
      width: 0,
      height: 0,
      borderLeft: "7px solid transparent",
      borderRight: "7px solid transparent"
    },
    ".cm-tooltip-above &": {
      bottom: "-7px",
      "&:before": {
        borderTop: "7px solid #bbb"
      },
      "&:after": {
        borderTop: "7px solid #f5f5f5",
        bottom: "1px"
      }
    },
    ".cm-tooltip-below &": {
      top: "-7px",
      "&:before": {
        borderBottom: "7px solid #bbb"
      },
      "&:after": {
        borderBottom: "7px solid #f5f5f5",
        top: "1px"
      }
    }
  },
  "&dark .cm-tooltip .cm-tooltip-arrow": {
    "&:before": {
      borderTopColor: "#333338",
      borderBottomColor: "#333338"
    },
    "&:after": {
      borderTopColor: "transparent",
      borderBottomColor: "transparent"
    }
  }
}), fS = { x: 0, y: 0 }, $h = /* @__PURE__ */ L.define({
  enables: [Ah, hS]
}), Ho = /* @__PURE__ */ L.define({
  combine: (i) => i.reduce((e, t) => e.concat(t), [])
});
class Cl {
  // Needs to be static so that host tooltip instances always match
  static create(e) {
    return new Cl(e);
  }
  constructor(e) {
    this.view = e, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new Tg(e, Ho, (t, n) => this.createHostedView(t, n), (t) => t.dom.remove());
  }
  createHostedView(e, t) {
    let n = e.create(this.view);
    return n.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(n.dom, t ? t.dom.nextSibling : this.dom.firstChild), this.mounted && n.mount && n.mount(this.view), n;
  }
  mount(e) {
    for (let t of this.manager.tooltipViews)
      t.mount && t.mount(e);
    this.mounted = !0;
  }
  positioned(e) {
    for (let t of this.manager.tooltipViews)
      t.positioned && t.positioned(e);
  }
  update(e) {
    this.manager.update(e);
  }
  destroy() {
    var e;
    for (let t of this.manager.tooltipViews)
      (e = t.destroy) === null || e === void 0 || e.call(t);
  }
  passProp(e) {
    let t;
    for (let n of this.manager.tooltipViews) {
      let s = n[e];
      if (s !== void 0) {
        if (t === void 0)
          t = s;
        else if (t !== s)
          return;
      }
    }
    return t;
  }
  get offset() {
    return this.passProp("offset");
  }
  get getCoords() {
    return this.passProp("getCoords");
  }
  get overlap() {
    return this.passProp("overlap");
  }
  get resize() {
    return this.passProp("resize");
  }
}
const uS = /* @__PURE__ */ $h.compute([Ho], (i) => {
  let e = i.facet(Ho);
  return e.length === 0 ? null : {
    pos: Math.min(...e.map((t) => t.pos)),
    end: Math.max(...e.map((t) => {
      var n;
      return (n = t.end) !== null && n !== void 0 ? n : t.pos;
    })),
    create: Cl.create,
    above: e[0].above,
    arrow: e.some((t) => t.arrow)
  };
}), Ag = /* @__PURE__ */ L.define();
class dS {
  constructor(e, t, n, s, r, o) {
    this.view = e, this.source = t, this.field = n, this.locked = s, this.setHover = r, this.hoverTime = o, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = { x: 0, y: 0, target: e.dom, time: 0 }, this.checkHover = this.checkHover.bind(this), e.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), e.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this));
  }
  update(e) {
    this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout(() => this.startHover(), 20));
  }
  get active() {
    return this.view.state.field(this.field);
  }
  checkHover() {
    if (this.hoverTimeout = -1, this.active.length)
      return;
    let e = Date.now() - this.lastMove.time;
    e < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - e) : this.startHover();
  }
  startHover() {
    clearTimeout(this.restartTimeout);
    let { view: e, lastMove: t } = this, n = e.docView.tile.nearest(t.target);
    if (!n)
      return;
    let s, r = 1;
    if (n.isWidget())
      s = n.posAtStart;
    else {
      if (s = e.posAtCoords(t), s == null)
        return;
      let o = e.coordsAtPos(s);
      if (!o || t.y < o.top || t.y > o.bottom || t.x < o.left - e.defaultCharacterWidth || t.x > o.right + e.defaultCharacterWidth)
        return;
      let l = e.bidiSpans(e.state.doc.lineAt(s)).find((c) => c.from <= s && c.to >= s), a = l && l.dir == Te.RTL ? -1 : 1;
      r = t.x < o.left ? -a : a;
    }
    this.activateHover(e, s, r);
  }
  activateHover(e, t, n, s) {
    let r = this.source(e, t, n), o = (l) => {
      if (l && !(Array.isArray(l) && !l.length)) {
        let a = Array.isArray(l) ? l : [l];
        s && this.locked.set(a, s), e.dispatch({ effects: this.setHover.of(a) });
      }
    };
    if (r && "then" in r) {
      let l = this.pending = { pos: t };
      r.then((a) => {
        this.pending == l && (this.pending = null, o(a));
      }, (a) => xt(e.state, a, "hover tooltip"));
    } else
      o(r);
  }
  get tooltip() {
    let e = this.view.plugin(Ah), t = e ? e.manager.tooltips.findIndex((n) => n.create == Cl.create) : -1;
    return t > -1 ? e.manager.tooltipViews[t] : null;
  }
  mousemove(e) {
    var t, n;
    this.lastMove = { x: e.clientX, y: e.clientY, target: e.target, time: Date.now() }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
    let { active: s, tooltip: r } = this;
    if (s.length && !this.locked.has(s) && r && !pS(r.dom, e) || this.pending) {
      let { pos: o } = s[0] || this.pending, l = (n = (t = s[0]) === null || t === void 0 ? void 0 : t.end) !== null && n !== void 0 ? n : o;
      (o == l ? this.view.posAtCoords(this.lastMove) != o : !mS(this.view, o, l, e.clientX, e.clientY)) && (this.view.dispatch({ effects: this.setHover.of([]) }), this.pending = null);
    }
  }
  mouseleave(e) {
    clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
    let { active: t } = this;
    if (t.length && !this.locked.has(t)) {
      let { tooltip: n } = this;
      n && n.dom.contains(e.relatedTarget) ? this.watchTooltipLeave(n.dom) : this.view.dispatch({ effects: this.setHover.of([]) });
    }
  }
  watchTooltipLeave(e) {
    let t = (n) => {
      e.removeEventListener("mouseleave", t);
      let { active: s } = this;
      s.length && !this.locked.has(s) && !this.view.dom.contains(n.relatedTarget) && this.view.dispatch({ effects: this.setHover.of([]) });
    };
    e.addEventListener("mouseleave", t);
  }
  destroy() {
    clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove);
  }
}
const qr = 4;
function pS(i, e) {
  let { left: t, right: n, top: s, bottom: r } = i.getBoundingClientRect(), o;
  if (o = i.querySelector(".cm-tooltip-arrow")) {
    let l = o.getBoundingClientRect();
    s = Math.min(l.top, s), r = Math.max(l.bottom, r);
  }
  return e.clientX >= t - qr && e.clientX <= n + qr && e.clientY >= s - qr && e.clientY <= r + qr;
}
function mS(i, e, t, n, s, r) {
  let o = i.scrollDOM.getBoundingClientRect(), l = i.documentTop + i.documentPadding.top + i.contentHeight;
  if (o.left > n || o.right < n || o.top > s || Math.min(o.bottom, l) < s)
    return !1;
  let a = i.posAtCoords({ x: n, y: s }, !1);
  return a >= e && a <= t;
}
function gS(i, e = {}) {
  let t = ie.define(), n = /* @__PURE__ */ new WeakMap(), s = rt.define({
    create() {
      return [];
    },
    update(o, l) {
      let a = n.get(o);
      if (o.length && (e.hideOnChange && (l.docChanged || l.selection) ? o = [] : a && a(l) ? o = [] : e.hideOn && (o = o.filter((c) => !e.hideOn(l, c)))), l.docChanged && o.length) {
        let c = [];
        for (let h of o) {
          let f = l.changes.mapPos(h.pos, -1, ft.TrackDel);
          if (f != null) {
            let u = Object.assign(/* @__PURE__ */ Object.create(null), h);
            u.pos = f, u.end != null && (u.end = l.changes.mapPos(u.end)), c.push(u);
          }
        }
        o = c;
      }
      for (let c of l.effects)
        c.is(t) && (o = c.value, a = void 0), (c.is(bS) && !c.value || c.value == s) && (o = []);
      return o.length && a && n.set(o, a), o;
    },
    provide: (o) => Ho.from(o)
  });
  const r = Ve.define((o) => new dS(
    o,
    i,
    s,
    n,
    t,
    e.hoverTime || 300
    /* Hover.Time */
  ));
  return {
    active: s,
    extension: [
      s,
      r,
      Ag.of(r),
      uS
    ]
  };
}
function OS(i, e, t, n = {}) {
  var s;
  let r = i.state.facet(Ag).map((o) => i.plugin(o)).filter((o) => !!o);
  if (n.tooltip && n.tooltip.active) {
    let o = r.find((l) => l.field == n.tooltip.active);
    o && (r = [o]);
  }
  for (let o of r)
    o.activateHover(i, e, t, (s = n.until) !== null && s !== void 0 ? s : () => !1);
}
function $g(i, e) {
  let t = i.plugin(Ah);
  if (!t)
    return null;
  let n = t.manager.tooltips.indexOf(e);
  return n < 0 ? null : t.manager.tooltipViews[n];
}
const bS = /* @__PURE__ */ ie.define(), Gu = /* @__PURE__ */ L.define({
  combine(i) {
    let e, t;
    for (let n of i)
      e = e || n.topContainer, t = t || n.bottomContainer;
    return { topContainer: e, bottomContainer: t };
  }
});
function Dh(i, e) {
  let t = i.plugin(Dg), n = t ? t.specs.indexOf(e) : -1;
  return n > -1 ? t.panels[n] : null;
}
const Dg = /* @__PURE__ */ Ve.fromClass(class {
  constructor(i) {
    this.input = i.state.facet(sr), this.specs = this.input.filter((t) => t), this.panels = this.specs.map((t) => t(i));
    let e = i.state.facet(Gu);
    this.top = new Hr(i, !0, e.topContainer), this.bottom = new Hr(i, !1, e.bottomContainer), this.top.sync(this.panels.filter((t) => t.top)), this.bottom.sync(this.panels.filter((t) => !t.top));
    for (let t of this.panels)
      t.dom.classList.add("cm-panel"), t.mount && t.mount();
  }
  update(i) {
    let e = i.state.facet(Gu);
    this.top.container != e.topContainer && (this.top.sync([]), this.top = new Hr(i.view, !0, e.topContainer)), this.bottom.container != e.bottomContainer && (this.bottom.sync([]), this.bottom = new Hr(i.view, !1, e.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
    let t = i.state.facet(sr);
    if (t != this.input) {
      let n = t.filter((a) => a), s = [], r = [], o = [], l = [];
      for (let a of n) {
        let c = this.specs.indexOf(a), h;
        c < 0 ? (h = a(i.view), l.push(h)) : (h = this.panels[c], h.update && h.update(i)), s.push(h), (h.top ? r : o).push(h);
      }
      this.specs = n, this.panels = s, this.top.sync(r), this.bottom.sync(o);
      for (let a of l)
        a.dom.classList.add("cm-panel"), a.mount && a.mount();
    } else
      for (let n of this.panels)
        n.update && n.update(i);
  }
  destroy() {
    this.top.sync([]), this.bottom.sync([]);
  }
}, {
  provide: (i) => X.scrollMargins.of((e) => {
    let t = e.plugin(i);
    return t && { top: t.top.scrollMargin(), bottom: t.bottom.scrollMargin() };
  })
});
class Hr {
  constructor(e, t, n) {
    this.view = e, this.top = t, this.container = n, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses();
  }
  sync(e) {
    for (let t of this.panels)
      t.destroy && e.indexOf(t) < 0 && t.destroy();
    this.panels = e, this.syncDOM();
  }
  syncDOM() {
    if (this.panels.length == 0) {
      this.dom && (this.dom.remove(), this.dom = void 0);
      return;
    }
    if (!this.dom) {
      this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
      let t = this.container || this.view.dom;
      t.insertBefore(this.dom, this.top ? t.firstChild : null);
    }
    let e = this.dom.firstChild;
    for (let t of this.panels)
      if (t.dom.parentNode == this.dom) {
        for (; e != t.dom; )
          e = zu(e);
        e = e.nextSibling;
      } else
        this.dom.insertBefore(t.dom, e);
    for (; e; )
      e = zu(e);
  }
  scrollMargin() {
    return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top);
  }
  syncClasses() {
    if (!(!this.container || this.classes == this.view.themeClasses)) {
      for (let e of this.classes.split(" "))
        e && this.container.classList.remove(e);
      for (let e of (this.classes = this.view.themeClasses).split(" "))
        e && this.container.classList.add(e);
    }
  }
}
function zu(i) {
  let e = i.nextSibling;
  return i.remove(), e;
}
const sr = /* @__PURE__ */ L.define({
  enables: Dg
});
function yS(i, e) {
  let t, n = new Promise((o) => t = o), s = (o) => xS(o, e, t);
  i.state.field(aa, !1) ? i.dispatch({ effects: Ng.of(s) }) : i.dispatch({ effects: ie.appendConfig.of(aa.init(() => [s])) });
  let r = Rg.of(s);
  return { close: r, result: n.then((o) => ((i.win.queueMicrotask || ((a) => i.win.setTimeout(a, 10)))(() => {
    i.state.field(aa).indexOf(s) > -1 && i.dispatch({ effects: r });
  }), o)) };
}
const aa = /* @__PURE__ */ rt.define({
  create() {
    return [];
  },
  update(i, e) {
    for (let t of e.effects)
      t.is(Ng) ? i = [t.value].concat(i) : t.is(Rg) && (i = i.filter((n) => n != t.value));
    return i;
  },
  provide: (i) => sr.computeN([i], (e) => e.field(i))
}), Ng = /* @__PURE__ */ ie.define(), Rg = /* @__PURE__ */ ie.define();
function xS(i, e, t) {
  let n = e.content ? e.content(i, () => o(null)) : null;
  if (!n) {
    if (n = Ce("form"), e.input) {
      let l = Ce("input", e.input);
      /^(text|password|number|email|tel|url)$/.test(l.type) && l.classList.add("cm-textfield"), l.name || (l.name = "input"), n.appendChild(Ce("label", (e.label || "") + ": ", l));
    } else
      n.appendChild(document.createTextNode(e.label || ""));
    n.appendChild(document.createTextNode(" ")), n.appendChild(Ce("button", { class: "cm-button", type: "submit" }, e.submitLabel || "OK"));
  }
  let s = n.nodeName == "FORM" ? [n] : n.querySelectorAll("form");
  for (let l = 0; l < s.length; l++) {
    let a = s[l];
    a.addEventListener("keydown", (c) => {
      c.keyCode == 27 ? (c.preventDefault(), o(null)) : c.keyCode == 13 && (c.preventDefault(), o(a));
    }), a.addEventListener("submit", (c) => {
      c.preventDefault(), o(a);
    });
  }
  let r = Ce("div", n, Ce("button", {
    onclick: () => o(null),
    "aria-label": i.state.phrase("close"),
    class: "cm-dialog-close",
    type: "button"
  }, ["×"]));
  e.class && (r.className = e.class), r.classList.add("cm-dialog");
  function o(l) {
    r.contains(r.ownerDocument.activeElement) && i.focus(), t(l);
  }
  return {
    dom: r,
    top: e.top,
    mount: () => {
      if (e.focus) {
        let l;
        typeof e.focus == "string" ? l = n.querySelector(e.focus) : l = n.querySelector("input") || n.querySelector("button"), l && "select" in l ? l.select() : l && "focus" in l && l.focus();
      }
    }
  };
}
class _i extends Yi {
  /**
  @internal
  */
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  /**
  Compare this marker to another marker of the same type.
  */
  eq(e) {
    return !1;
  }
  /**
  Called if the marker has a `toDOM` method and its representation
  was removed from a gutter.
  */
  destroy(e) {
  }
}
_i.prototype.elementClass = "";
_i.prototype.toDOM = void 0;
_i.prototype.mapMode = ft.TrackBefore;
_i.prototype.startSide = _i.prototype.endSide = -1;
_i.prototype.point = !0;
const go = /* @__PURE__ */ L.define(), vS = /* @__PURE__ */ L.define(), SS = {
  class: "",
  renderEmptyElements: !1,
  elementStyle: "",
  markers: () => ce.empty,
  lineMarker: () => null,
  widgetMarker: () => null,
  lineMarkerChange: null,
  initialSpacer: null,
  updateSpacer: null,
  domEventHandlers: {},
  side: "before"
}, qs = /* @__PURE__ */ L.define();
function wS(i) {
  return [_g(), qs.of({ ...SS, ...i })];
}
const ju = /* @__PURE__ */ L.define({
  combine: (i) => i.some((e) => e)
});
function _g(i) {
  return [
    PS
  ];
}
const PS = /* @__PURE__ */ Ve.fromClass(class {
  constructor(i) {
    this.view = i, this.domAfter = null, this.prevViewport = i.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = i.state.facet(qs).map((e) => new Ku(i, e)), this.fixed = !i.state.facet(ju);
    for (let e of this.gutters)
      e.config.side == "after" ? this.getDOMAfter().appendChild(e.dom) : this.dom.appendChild(e.dom);
    this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), i.scrollDOM.insertBefore(this.dom, i.contentDOM);
  }
  getDOMAfter() {
    return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter;
  }
  update(i) {
    if (this.updateGutters(i)) {
      let e = this.prevViewport, t = i.view.viewport, n = Math.min(e.to, t.to) - Math.max(e.from, t.from);
      this.syncGutters(n < (t.to - t.from) * 0.8);
    }
    if (i.geometryChanged) {
      let e = this.view.contentHeight / this.view.scaleY + "px";
      this.dom.style.minHeight = e, this.domAfter && (this.domAfter.style.minHeight = e);
    }
    this.view.state.facet(ju) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = i.view.viewport;
  }
  syncGutters(i) {
    let e = this.dom.nextSibling;
    i && (this.dom.remove(), this.domAfter && this.domAfter.remove());
    let t = ce.iter(this.view.state.facet(go), this.view.viewport.from), n = [], s = this.gutters.map((r) => new kS(r, this.view.viewport, -this.view.documentPadding.top));
    for (let r of this.view.viewportLineBlocks)
      if (n.length && (n = []), Array.isArray(r.type)) {
        let o = !0;
        for (let l of r.type)
          if (l.type == nt.Text && o) {
            Pc(t, n, l.from);
            for (let a of s)
              a.line(this.view, l, n);
            o = !1;
          } else if (l.widget)
            for (let a of s)
              a.widget(this.view, l);
      } else if (r.type == nt.Text) {
        Pc(t, n, r.from);
        for (let o of s)
          o.line(this.view, r, n);
      } else if (r.widget)
        for (let o of s)
          o.widget(this.view, r);
    for (let r of s)
      r.finish();
    i && (this.view.scrollDOM.insertBefore(this.dom, e), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter));
  }
  updateGutters(i) {
    let e = i.startState.facet(qs), t = i.state.facet(qs), n = i.docChanged || i.heightChanged || i.viewportChanged || !ce.eq(i.startState.facet(go), i.state.facet(go), i.view.viewport.from, i.view.viewport.to);
    if (e == t)
      for (let s of this.gutters)
        s.update(i) && (n = !0);
    else {
      n = !0;
      let s = [];
      for (let r of t) {
        let o = e.indexOf(r);
        o < 0 ? s.push(new Ku(this.view, r)) : (this.gutters[o].update(i), s.push(this.gutters[o]));
      }
      for (let r of this.gutters)
        r.dom.remove(), s.indexOf(r) < 0 && r.destroy();
      for (let r of s)
        r.config.side == "after" ? this.getDOMAfter().appendChild(r.dom) : this.dom.appendChild(r.dom);
      this.gutters = s;
    }
    return n;
  }
  destroy() {
    for (let i of this.gutters)
      i.destroy();
    this.dom.remove(), this.domAfter && this.domAfter.remove();
  }
}, {
  provide: (i) => X.scrollMargins.of((e) => {
    let t = e.plugin(i);
    if (!t || t.gutters.length == 0 || !t.fixed)
      return null;
    let n = t.dom.offsetWidth * e.scaleX, s = t.domAfter ? t.domAfter.offsetWidth * e.scaleX : 0;
    return e.textDirection == Te.LTR ? { left: n, right: s } : { right: n, left: s };
  })
});
function Yu(i) {
  return Array.isArray(i) ? i : [i];
}
function Pc(i, e, t) {
  for (; i.value && i.from <= t; )
    i.from == t && e.push(i.value), i.next();
}
class kS {
  constructor(e, t, n) {
    this.gutter = e, this.height = n, this.i = 0, this.cursor = ce.iter(e.markers, t.from);
  }
  addElement(e, t, n) {
    let { gutter: s } = this, r = (t.top - this.height) / e.scaleY, o = t.height / e.scaleY;
    if (this.i == s.elements.length) {
      let l = new Mg(e, o, r, n);
      s.elements.push(l), s.dom.appendChild(l.dom);
    } else
      s.elements[this.i].update(e, o, r, n);
    this.height = t.bottom, this.i++;
  }
  line(e, t, n) {
    let s = [];
    Pc(this.cursor, s, t.from), n.length && (s = s.concat(n));
    let r = this.gutter.config.lineMarker(e, t, s);
    r && s.unshift(r);
    let o = this.gutter;
    s.length == 0 && !o.config.renderEmptyElements || this.addElement(e, t, s);
  }
  widget(e, t) {
    let n = this.gutter.config.widgetMarker(e, t.widget, t), s = n ? [n] : null;
    for (let r of e.state.facet(vS)) {
      let o = r(e, t.widget, t);
      o && (s || (s = [])).push(o);
    }
    s && this.addElement(e, t, s);
  }
  finish() {
    let e = this.gutter;
    for (; e.elements.length > this.i; ) {
      let t = e.elements.pop();
      e.dom.removeChild(t.dom), t.destroy();
    }
  }
}
class Ku {
  constructor(e, t) {
    this.view = e, this.config = t, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
    for (let n in t.domEventHandlers)
      this.dom.addEventListener(n, (s) => {
        let r = s.target, o;
        if (r != this.dom && this.dom.contains(r)) {
          for (; r.parentNode != this.dom; )
            r = r.parentNode;
          let a = r.getBoundingClientRect();
          o = (a.top + a.bottom) / 2;
        } else
          o = s.clientY;
        let l = e.lineBlockAtHeight(o - e.documentTop);
        t.domEventHandlers[n](e, l, s) && s.preventDefault();
      });
    this.markers = Yu(t.markers(e)), t.initialSpacer && (this.spacer = new Mg(e, 0, 0, [t.initialSpacer(e)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
  }
  update(e) {
    let t = this.markers;
    if (this.markers = Yu(this.config.markers(e.view)), this.spacer && this.config.updateSpacer) {
      let s = this.config.updateSpacer(this.spacer.markers[0], e);
      s != this.spacer.markers[0] && this.spacer.update(e.view, 0, 0, [s]);
    }
    let n = e.view.viewport;
    return !ce.eq(this.markers, t, n.from, n.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(e) : !1);
  }
  destroy() {
    for (let e of this.elements)
      e.destroy();
  }
}
class Mg {
  constructor(e, t, n, s) {
    this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(e, t, n, s);
  }
  update(e, t, n, s) {
    this.height != t && (this.height = t, this.dom.style.height = t + "px"), this.above != n && (this.dom.style.marginTop = (this.above = n) ? n + "px" : ""), CS(this.markers, s) || this.setMarkers(e, s);
  }
  setMarkers(e, t) {
    let n = "cm-gutterElement", s = this.dom.firstChild;
    for (let r = 0, o = 0; ; ) {
      let l = o, a = r < t.length ? t[r++] : null, c = !1;
      if (a) {
        let h = a.elementClass;
        h && (n += " " + h);
        for (let f = o; f < this.markers.length; f++)
          if (this.markers[f].compare(a)) {
            l = f, c = !0;
            break;
          }
      } else
        l = this.markers.length;
      for (; o < l; ) {
        let h = this.markers[o++];
        if (h.toDOM) {
          h.destroy(s);
          let f = s.nextSibling;
          s.remove(), s = f;
        }
      }
      if (!a)
        break;
      a.toDOM && (c ? s = s.nextSibling : this.dom.insertBefore(a.toDOM(e), s)), c && o++;
    }
    this.dom.className = n, this.markers = t;
  }
  destroy() {
    this.setMarkers(null, []);
  }
}
function CS(i, e) {
  if (i.length != e.length)
    return !1;
  for (let t = 0; t < i.length; t++)
    if (!i[t].compare(e[t]))
      return !1;
  return !0;
}
const ES = /* @__PURE__ */ L.define(), TS = /* @__PURE__ */ L.define(), Bn = /* @__PURE__ */ L.define({
  combine(i) {
    return wi(i, { formatNumber: String, domEventHandlers: {} }, {
      domEventHandlers(e, t) {
        let n = Object.assign({}, e);
        for (let s in t) {
          let r = n[s], o = t[s];
          n[s] = r ? (l, a, c) => r(l, a, c) || o(l, a, c) : o;
        }
        return n;
      }
    });
  }
});
class ca extends _i {
  constructor(e) {
    super(), this.number = e;
  }
  eq(e) {
    return this.number == e.number;
  }
  toDOM() {
    return document.createTextNode(this.number);
  }
}
function ha(i, e) {
  return i.state.facet(Bn).formatNumber(e, i.state);
}
const AS = /* @__PURE__ */ qs.compute([Bn], (i) => ({
  class: "cm-lineNumbers",
  renderEmptyElements: !1,
  markers(e) {
    return e.state.facet(ES);
  },
  lineMarker(e, t, n) {
    return n.some((s) => s.toDOM) ? null : new ca(ha(e, e.state.doc.lineAt(t.from).number));
  },
  widgetMarker: (e, t, n) => {
    for (let s of e.state.facet(TS)) {
      let r = s(e, t, n);
      if (r)
        return r;
    }
    return null;
  },
  lineMarkerChange: (e) => e.startState.facet(Bn) != e.state.facet(Bn),
  initialSpacer(e) {
    return new ca(ha(e, Zu(e.state.doc.lines)));
  },
  updateSpacer(e, t) {
    let n = ha(t.view, Zu(t.view.state.doc.lines));
    return n == e.number ? e : new ca(n);
  },
  domEventHandlers: i.facet(Bn).domEventHandlers,
  side: "before"
}));
function $S(i = {}) {
  return [
    Bn.of(i),
    _g(),
    AS
  ];
}
function Zu(i) {
  let e = 9;
  for (; e < i; )
    e = e * 10 + 9;
  return e;
}
const DS = /* @__PURE__ */ new class extends _i {
  constructor() {
    super(...arguments), this.elementClass = "cm-activeLineGutter";
  }
}(), NS = /* @__PURE__ */ go.compute(["selection"], (i) => {
  let e = [], t = -1;
  for (let n of i.selection.ranges) {
    let s = i.doc.lineAt(n.head).from;
    s > t && (t = s, e.push(DS.range(s)));
  }
  return ce.of(e);
});
function RS() {
  return NS;
}
const Qg = 1024;
let _S = 0;
class fa {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
}
class ae {
  /**
  Create a new node prop type.
  */
  constructor(e = {}) {
    this.id = _S++, this.perNode = !!e.perNode, this.deserialize = e.deserialize || (() => {
      throw new Error("This node type doesn't define a deserialize function");
    }), this.combine = e.combine || null;
  }
  /**
  This is meant to be used with
  [`NodeSet.extend`](#common.NodeSet.extend) or
  [`LRParser.configure`](#lr.ParserConfig.props) to compute
  prop values for each node type in the set. Takes a [match
  object](#common.NodeType^match) or function that returns undefined
  if the node type doesn't get this prop, and the prop's value if
  it does.
  */
  add(e) {
    if (this.perNode)
      throw new RangeError("Can't add per-node props to node types");
    return typeof e != "function" && (e = wt.match(e)), (t) => {
      let n = e(t);
      return n === void 0 ? null : [this, n];
    };
  }
}
ae.closedBy = new ae({ deserialize: (i) => i.split(" ") });
ae.openedBy = new ae({ deserialize: (i) => i.split(" ") });
ae.group = new ae({ deserialize: (i) => i.split(" ") });
ae.isolate = new ae({ deserialize: (i) => {
  if (i && i != "rtl" && i != "ltr" && i != "auto")
    throw new RangeError("Invalid value for isolate: " + i);
  return i || "auto";
} });
ae.contextHash = new ae({ perNode: !0 });
ae.lookAhead = new ae({ perNode: !0 });
ae.mounted = new ae({ perNode: !0 });
class Hs {
  constructor(e, t, n, s = !1) {
    this.tree = e, this.overlay = t, this.parser = n, this.bracketed = s;
  }
  /**
  @internal
  */
  static get(e) {
    return e && e.props && e.props[ae.mounted.id];
  }
}
const MS = /* @__PURE__ */ Object.create(null);
class wt {
  /**
  @internal
  */
  constructor(e, t, n, s = 0) {
    this.name = e, this.props = t, this.id = n, this.flags = s;
  }
  /**
  Define a node type.
  */
  static define(e) {
    let t = e.props && e.props.length ? /* @__PURE__ */ Object.create(null) : MS, n = (e.top ? 1 : 0) | (e.skipped ? 2 : 0) | (e.error ? 4 : 0) | (e.name == null ? 8 : 0), s = new wt(e.name || "", t, e.id, n);
    if (e.props) {
      for (let r of e.props)
        if (Array.isArray(r) || (r = r(s)), r) {
          if (r[0].perNode)
            throw new RangeError("Can't store a per-node prop on a node type");
          t[r[0].id] = r[1];
        }
    }
    return s;
  }
  /**
  Retrieves a node prop for this type. Will return `undefined` if
  the prop isn't present on this node.
  */
  prop(e) {
    return this.props[e.id];
  }
  /**
  True when this is the top node of a grammar.
  */
  get isTop() {
    return (this.flags & 1) > 0;
  }
  /**
  True when this node is produced by a skip rule.
  */
  get isSkipped() {
    return (this.flags & 2) > 0;
  }
  /**
  Indicates whether this is an error node.
  */
  get isError() {
    return (this.flags & 4) > 0;
  }
  /**
  When true, this node type doesn't correspond to a user-declared
  named node, for example because it is used to cache repetition.
  */
  get isAnonymous() {
    return (this.flags & 8) > 0;
  }
  /**
  Returns true when this node's name or one of its
  [groups](#common.NodeProp^group) matches the given string.
  */
  is(e) {
    if (typeof e == "string") {
      if (this.name == e)
        return !0;
      let t = this.prop(ae.group);
      return t ? t.indexOf(e) > -1 : !1;
    }
    return this.id == e;
  }
  /**
  Create a function from node types to arbitrary values by
  specifying an object whose property names are node or
  [group](#common.NodeProp^group) names. Often useful with
  [`NodeProp.add`](#common.NodeProp.add). You can put multiple
  names, separated by spaces, in a single property name to map
  multiple node names to a single value.
  */
  static match(e) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let n in e)
      for (let s of n.split(" "))
        t[s] = e[n];
    return (n) => {
      for (let s = n.prop(ae.group), r = -1; r < (s ? s.length : 0); r++) {
        let o = t[r < 0 ? n.name : s[r]];
        if (o)
          return o;
      }
    };
  }
}
wt.none = new wt(
  "",
  /* @__PURE__ */ Object.create(null),
  0,
  8
  /* NodeFlag.Anonymous */
);
class Nh {
  /**
  Create a set with the given types. The `id` property of each
  type should correspond to its position within the array.
  */
  constructor(e) {
    this.types = e;
    for (let t = 0; t < e.length; t++)
      if (e[t].id != t)
        throw new RangeError("Node type ids should correspond to array positions when creating a node set");
  }
  /**
  Create a copy of this set with some node properties added. The
  arguments to this method can be created with
  [`NodeProp.add`](#common.NodeProp.add).
  */
  extend(...e) {
    let t = [];
    for (let n of this.types) {
      let s = null;
      for (let r of e) {
        let o = r(n);
        if (o) {
          s || (s = Object.assign({}, n.props));
          let l = o[1], a = o[0];
          a.combine && a.id in s && (l = a.combine(s[a.id], l)), s[a.id] = l;
        }
      }
      t.push(s ? new wt(n.name, s, n.id, n.flags) : n);
    }
    return new Nh(t);
  }
}
const Ur = /* @__PURE__ */ new WeakMap(), Ju = /* @__PURE__ */ new WeakMap();
var Re;
(function(i) {
  i[i.ExcludeBuffers = 1] = "ExcludeBuffers", i[i.IncludeAnonymous = 2] = "IncludeAnonymous", i[i.IgnoreMounts = 4] = "IgnoreMounts", i[i.IgnoreOverlays = 8] = "IgnoreOverlays", i[i.EnterBracketed = 16] = "EnterBracketed";
})(Re || (Re = {}));
class Ie {
  /**
  Construct a new tree. See also [`Tree.build`](#common.Tree^build).
  */
  constructor(e, t, n, s, r) {
    if (this.type = e, this.children = t, this.positions = n, this.length = s, this.props = null, r && r.length) {
      this.props = /* @__PURE__ */ Object.create(null);
      for (let [o, l] of r)
        this.props[typeof o == "number" ? o : o.id] = l;
    }
  }
  /**
  @internal
  */
  toString() {
    let e = Hs.get(this);
    if (e && !e.overlay)
      return e.tree.toString();
    let t = "";
    for (let n of this.children) {
      let s = n.toString();
      s && (t && (t += ","), t += s);
    }
    return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (t.length ? "(" + t + ")" : "") : t;
  }
  /**
  Get a [tree cursor](#common.TreeCursor) positioned at the top of
  the tree. Mode can be used to [control](#common.IterMode) which
  nodes the cursor visits.
  */
  cursor(e = 0) {
    return new Cc(this.topNode, e);
  }
  /**
  Get a [tree cursor](#common.TreeCursor) pointing into this tree
  at the given position and side (see
  [`moveTo`](#common.TreeCursor.moveTo).
  */
  cursorAt(e, t = 0, n = 0) {
    let s = Ur.get(this) || this.topNode, r = new Cc(s);
    return r.moveTo(e, t), Ur.set(this, r._tree), r;
  }
  /**
  Get a [syntax node](#common.SyntaxNode) object for the top of the
  tree.
  */
  get topNode() {
    return new Lt(this, 0, 0, null);
  }
  /**
  Get the [syntax node](#common.SyntaxNode) at the given position.
  If `side` is -1, this will move into nodes that end at the
  position. If 1, it'll move into nodes that start at the
  position. With 0, it'll only enter nodes that cover the position
  from both sides.
  
  Note that this will not enter
  [overlays](#common.MountedTree.overlay), and you often want
  [`resolveInner`](#common.Tree.resolveInner) instead.
  */
  resolve(e, t = 0) {
    let n = rr(Ur.get(this) || this.topNode, e, t, !1);
    return Ur.set(this, n), n;
  }
  /**
  Like [`resolve`](#common.Tree.resolve), but will enter
  [overlaid](#common.MountedTree.overlay) nodes, producing a syntax node
  pointing into the innermost overlaid tree at the given position
  (with parent links going through all parent structure, including
  the host trees).
  */
  resolveInner(e, t = 0) {
    let n = rr(Ju.get(this) || this.topNode, e, t, !0);
    return Ju.set(this, n), n;
  }
  /**
  In some situations, it can be useful to iterate through all
  nodes around a position, including those in overlays that don't
  directly cover the position. This method gives you an iterator
  that will produce all nodes, from small to big, around the given
  position.
  */
  resolveStack(e, t = 0) {
    return VS(this, e, t);
  }
  /**
  Iterate over the tree and its children, calling `enter` for any
  node that touches the `from`/`to` region (if given) before
  running over such a node's children, and `leave` (if given) when
  leaving the node. When `enter` returns `false`, that node will
  not have its children iterated over (or `leave` called).
  */
  iterate(e) {
    let { enter: t, leave: n, from: s = 0, to: r = this.length } = e, o = e.mode || 0, l = (o & Re.IncludeAnonymous) > 0;
    for (let a = this.cursor(o | Re.IncludeAnonymous); ; ) {
      let c = !1;
      if (a.from <= r && a.to >= s && (!l && a.type.isAnonymous || t(a) !== !1)) {
        if (a.firstChild())
          continue;
        c = !0;
      }
      for (; c && n && (l || !a.type.isAnonymous) && n(a), !a.nextSibling(); ) {
        if (!a.parent())
          return;
        c = !0;
      }
    }
  }
  /**
  Get the value of the given [node prop](#common.NodeProp) for this
  node. Works with both per-node and per-type props.
  */
  prop(e) {
    return e.perNode ? this.props ? this.props[e.id] : void 0 : this.type.prop(e);
  }
  /**
  Returns the node's [per-node props](#common.NodeProp.perNode) in a
  format that can be passed to the [`Tree`](#common.Tree)
  constructor.
  */
  get propValues() {
    let e = [];
    if (this.props)
      for (let t in this.props)
        e.push([+t, this.props[t]]);
    return e;
  }
  /**
  Balance the direct children of this tree, producing a copy of
  which may have children grouped into subtrees with type
  [`NodeType.none`](#common.NodeType^none).
  */
  balance(e = {}) {
    return this.children.length <= 8 ? this : Mh(wt.none, this.children, this.positions, 0, this.children.length, 0, this.length, (t, n, s) => new Ie(this.type, t, n, s, this.propValues), e.makeTree || ((t, n, s) => new Ie(wt.none, t, n, s)));
  }
  /**
  Build a tree from a postfix-ordered buffer of node information,
  or a cursor over such a buffer.
  */
  static build(e) {
    return LS(e);
  }
}
Ie.empty = new Ie(wt.none, [], [], 0);
class Rh {
  constructor(e, t) {
    this.buffer = e, this.index = t;
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  get pos() {
    return this.index;
  }
  next() {
    this.index -= 4;
  }
  fork() {
    return new Rh(this.buffer, this.index);
  }
}
class en {
  /**
  Create a tree buffer.
  */
  constructor(e, t, n) {
    this.buffer = e, this.length = t, this.set = n;
  }
  /**
  @internal
  */
  get type() {
    return wt.none;
  }
  /**
  @internal
  */
  toString() {
    let e = [];
    for (let t = 0; t < this.buffer.length; )
      e.push(this.childString(t)), t = this.buffer[t + 3];
    return e.join(",");
  }
  /**
  @internal
  */
  childString(e) {
    let t = this.buffer[e], n = this.buffer[e + 3], s = this.set.types[t], r = s.name;
    if (/\W/.test(r) && !s.isError && (r = JSON.stringify(r)), e += 4, n == e)
      return r;
    let o = [];
    for (; e < n; )
      o.push(this.childString(e)), e = this.buffer[e + 3];
    return r + "(" + o.join(",") + ")";
  }
  /**
  @internal
  */
  findChild(e, t, n, s, r) {
    let { buffer: o } = this, l = -1;
    for (let a = e; a != t && !(Ig(r, s, o[a + 1], o[a + 2]) && (l = a, n > 0)); a = o[a + 3])
      ;
    return l;
  }
  /**
  @internal
  */
  slice(e, t, n) {
    let s = this.buffer, r = new Uint16Array(t - e), o = 0;
    for (let l = e, a = 0; l < t; ) {
      r[a++] = s[l++], r[a++] = s[l++] - n;
      let c = r[a++] = s[l++] - n;
      r[a++] = s[l++] - e, o = Math.max(o, c);
    }
    return new en(r, o, this.set);
  }
}
function Ig(i, e, t, n) {
  switch (i) {
    case -2:
      return t < e;
    case -1:
      return n >= e && t < e;
    case 0:
      return t < e && n > e;
    case 1:
      return t <= e && n > e;
    case 2:
      return n > e;
    case 4:
      return !0;
  }
}
function rr(i, e, t, n) {
  for (var s; i.from == i.to || (t < 1 ? i.from >= e : i.from > e) || (t > -1 ? i.to <= e : i.to < e); ) {
    let o = !n && i instanceof Lt && i.index < 0 ? null : i.parent;
    if (!o)
      return i;
    i = o;
  }
  let r = n ? 0 : Re.IgnoreOverlays;
  if (n)
    for (let o = i, l = o.parent; l; o = l, l = o.parent)
      o instanceof Lt && o.index < 0 && ((s = l.enter(e, t, r)) === null || s === void 0 ? void 0 : s.from) != o.from && (i = l);
  for (; ; ) {
    let o = i.enter(e, t, r);
    if (!o)
      return i;
    i = o;
  }
}
class Vg {
  cursor(e = 0) {
    return new Cc(this, e);
  }
  getChild(e, t = null, n = null) {
    let s = ed(this, e, t, n);
    return s.length ? s[0] : null;
  }
  getChildren(e, t = null, n = null) {
    return ed(this, e, t, n);
  }
  resolve(e, t = 0) {
    return rr(this, e, t, !1);
  }
  resolveInner(e, t = 0) {
    return rr(this, e, t, !0);
  }
  matchContext(e) {
    return kc(this.parent, e);
  }
  enterUnfinishedNodesBefore(e) {
    let t = this.childBefore(e), n = this;
    for (; t; ) {
      let s = t.lastChild;
      if (!s || s.to != t.to)
        break;
      s.type.isError && s.from == s.to ? (n = t, t = s.prevSibling) : t = s;
    }
    return n;
  }
  get node() {
    return this;
  }
  get next() {
    return this.parent;
  }
}
class Lt extends Vg {
  constructor(e, t, n, s) {
    super(), this._tree = e, this.from = t, this.index = n, this._parent = s;
  }
  get type() {
    return this._tree.type;
  }
  get name() {
    return this._tree.type.name;
  }
  get to() {
    return this.from + this._tree.length;
  }
  nextChild(e, t, n, s, r = 0) {
    for (let o = this; ; ) {
      for (let { children: l, positions: a } = o._tree, c = t > 0 ? l.length : -1; e != c; e += t) {
        let h = l[e], f = a[e] + o.from, u;
        if (!(!(r & Re.EnterBracketed && h instanceof Ie && (u = Hs.get(h)) && !u.overlay && u.bracketed && n >= f && n <= f + h.length) && !Ig(s, n, f, f + h.length))) {
          if (h instanceof en) {
            if (r & Re.ExcludeBuffers)
              continue;
            let d = h.findChild(0, h.buffer.length, t, n - f, s);
            if (d > -1)
              return new Ui(new QS(o, h, e, f), null, d);
          } else if (r & Re.IncludeAnonymous || !h.type.isAnonymous || _h(h)) {
            let d;
            if (!(r & Re.IgnoreMounts) && (d = Hs.get(h)) && !d.overlay)
              return new Lt(d.tree, f, e, o);
            let p = new Lt(h, f, e, o);
            return r & Re.IncludeAnonymous || !p.type.isAnonymous ? p : p.nextChild(t < 0 ? h.children.length - 1 : 0, t, n, s, r);
          }
        }
      }
      if (r & Re.IncludeAnonymous || !o.type.isAnonymous || (o.index >= 0 ? e = o.index + t : e = t < 0 ? -1 : o._parent._tree.children.length, o = o._parent, !o))
        return null;
    }
  }
  get firstChild() {
    return this.nextChild(
      0,
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  get lastChild() {
    return this.nextChild(
      this._tree.children.length - 1,
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  childAfter(e) {
    return this.nextChild(
      0,
      1,
      e,
      2
      /* Side.After */
    );
  }
  childBefore(e) {
    return this.nextChild(
      this._tree.children.length - 1,
      -1,
      e,
      -2
      /* Side.Before */
    );
  }
  prop(e) {
    return this._tree.prop(e);
  }
  enter(e, t, n = 0) {
    let s;
    if (!(n & Re.IgnoreOverlays) && (s = Hs.get(this._tree)) && s.overlay) {
      let r = e - this.from, o = n & Re.EnterBracketed && s.bracketed;
      for (let { from: l, to: a } of s.overlay)
        if ((t > 0 || o ? l <= r : l < r) && (t < 0 || o ? a >= r : a > r))
          return new Lt(s.tree, s.overlay[0].from + this.from, -1, this);
    }
    return this.nextChild(0, 1, e, t, n);
  }
  nextSignificantParent() {
    let e = this;
    for (; e.type.isAnonymous && e._parent; )
      e = e._parent;
    return e;
  }
  get parent() {
    return this._parent ? this._parent.nextSignificantParent() : null;
  }
  get nextSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(
      this.index + 1,
      1,
      0,
      4
      /* Side.DontCare */
    ) : null;
  }
  get prevSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(
      this.index - 1,
      -1,
      0,
      4
      /* Side.DontCare */
    ) : null;
  }
  get tree() {
    return this._tree;
  }
  toTree() {
    return this._tree;
  }
  /**
  @internal
  */
  toString() {
    return this._tree.toString();
  }
}
function ed(i, e, t, n) {
  let s = i.cursor(), r = [];
  if (!s.firstChild())
    return r;
  if (t != null) {
    for (let o = !1; !o; )
      if (o = s.type.is(t), !s.nextSibling())
        return r;
  }
  for (; ; ) {
    if (n != null && s.type.is(n))
      return r;
    if (s.type.is(e) && r.push(s.node), !s.nextSibling())
      return n == null ? r : [];
  }
}
function kc(i, e, t = e.length - 1) {
  for (let n = i; t >= 0; n = n.parent) {
    if (!n)
      return !1;
    if (!n.type.isAnonymous) {
      if (e[t] && e[t] != n.name)
        return !1;
      t--;
    }
  }
  return !0;
}
class QS {
  constructor(e, t, n, s) {
    this.parent = e, this.buffer = t, this.index = n, this.start = s;
  }
}
class Ui extends Vg {
  get name() {
    return this.type.name;
  }
  get from() {
    return this.context.start + this.context.buffer.buffer[this.index + 1];
  }
  get to() {
    return this.context.start + this.context.buffer.buffer[this.index + 2];
  }
  constructor(e, t, n) {
    super(), this.context = e, this._parent = t, this.index = n, this.type = e.buffer.set.types[e.buffer.buffer[n]];
  }
  child(e, t, n) {
    let { buffer: s } = this.context, r = s.findChild(this.index + 4, s.buffer[this.index + 3], e, t - this.context.start, n);
    return r < 0 ? null : new Ui(this.context, this, r);
  }
  get firstChild() {
    return this.child(
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  get lastChild() {
    return this.child(
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  childAfter(e) {
    return this.child(
      1,
      e,
      2
      /* Side.After */
    );
  }
  childBefore(e) {
    return this.child(
      -1,
      e,
      -2
      /* Side.Before */
    );
  }
  prop(e) {
    return this.type.prop(e);
  }
  enter(e, t, n = 0) {
    if (n & Re.ExcludeBuffers)
      return null;
    let { buffer: s } = this.context, r = s.findChild(this.index + 4, s.buffer[this.index + 3], t > 0 ? 1 : -1, e - this.context.start, t);
    return r < 0 ? null : new Ui(this.context, this, r);
  }
  get parent() {
    return this._parent || this.context.parent.nextSignificantParent();
  }
  externalSibling(e) {
    return this._parent ? null : this.context.parent.nextChild(
      this.context.index + e,
      e,
      0,
      4
      /* Side.DontCare */
    );
  }
  get nextSibling() {
    let { buffer: e } = this.context, t = e.buffer[this.index + 3];
    return t < (this._parent ? e.buffer[this._parent.index + 3] : e.buffer.length) ? new Ui(this.context, this._parent, t) : this.externalSibling(1);
  }
  get prevSibling() {
    let { buffer: e } = this.context, t = this._parent ? this._parent.index + 4 : 0;
    return this.index == t ? this.externalSibling(-1) : new Ui(this.context, this._parent, e.findChild(
      t,
      this.index,
      -1,
      0,
      4
      /* Side.DontCare */
    ));
  }
  get tree() {
    return null;
  }
  toTree() {
    let e = [], t = [], { buffer: n } = this.context, s = this.index + 4, r = n.buffer[this.index + 3];
    if (r > s) {
      let o = n.buffer[this.index + 1];
      e.push(n.slice(s, r, o)), t.push(0);
    }
    return new Ie(this.type, e, t, this.to - this.from);
  }
  /**
  @internal
  */
  toString() {
    return this.context.buffer.childString(this.index);
  }
}
function Lg(i) {
  if (!i.length)
    return null;
  let e = 0, t = i[0];
  for (let r = 1; r < i.length; r++) {
    let o = i[r];
    (o.from > t.from || o.to < t.to) && (t = o, e = r);
  }
  let n = t instanceof Lt && t.index < 0 ? null : t.parent, s = i.slice();
  return n ? s[e] = n : s.splice(e, 1), new IS(s, t);
}
class IS {
  constructor(e, t) {
    this.heads = e, this.node = t;
  }
  get next() {
    return Lg(this.heads);
  }
}
function VS(i, e, t) {
  let n = i.resolveInner(e, t), s = null;
  for (let r = n instanceof Lt ? n : n.context.parent; r; r = r.parent)
    if (r.index < 0) {
      let o = r.parent;
      (s || (s = [n])).push(o.resolve(e, t)), r = o;
    } else {
      let o = Hs.get(r.tree);
      if (o && o.overlay && o.overlay[0].from <= e && o.overlay[o.overlay.length - 1].to >= e) {
        let l = new Lt(o.tree, o.overlay[0].from + r.from, -1, r);
        (s || (s = [n])).push(rr(l, e, t, !1));
      }
    }
  return s ? Lg(s) : n;
}
class Cc {
  /**
  Shorthand for `.type.name`.
  */
  get name() {
    return this.type.name;
  }
  /**
  @internal
  */
  constructor(e, t = 0) {
    if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = t & ~Re.EnterBracketed, e instanceof Lt)
      this.yieldNode(e);
    else {
      this._tree = e.context.parent, this.buffer = e.context;
      for (let n = e._parent; n; n = n._parent)
        this.stack.unshift(n.index);
      this.bufferNode = e, this.yieldBuf(e.index);
    }
  }
  yieldNode(e) {
    return e ? (this._tree = e, this.type = e.type, this.from = e.from, this.to = e.to, !0) : !1;
  }
  yieldBuf(e, t) {
    this.index = e;
    let { start: n, buffer: s } = this.buffer;
    return this.type = t || s.set.types[s.buffer[e]], this.from = n + s.buffer[e + 1], this.to = n + s.buffer[e + 2], !0;
  }
  /**
  @internal
  */
  yield(e) {
    return e ? e instanceof Lt ? (this.buffer = null, this.yieldNode(e)) : (this.buffer = e.context, this.yieldBuf(e.index, e.type)) : !1;
  }
  /**
  @internal
  */
  toString() {
    return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
  }
  /**
  @internal
  */
  enterChild(e, t, n) {
    if (!this.buffer)
      return this.yield(this._tree.nextChild(e < 0 ? this._tree._tree.children.length - 1 : 0, e, t, n, this.mode));
    let { buffer: s } = this.buffer, r = s.findChild(this.index + 4, s.buffer[this.index + 3], e, t - this.buffer.start, n);
    return r < 0 ? !1 : (this.stack.push(this.index), this.yieldBuf(r));
  }
  /**
  Move the cursor to this node's first child. When this returns
  false, the node has no child, and the cursor has not been moved.
  */
  firstChild() {
    return this.enterChild(
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  /**
  Move the cursor to this node's last child.
  */
  lastChild() {
    return this.enterChild(
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  /**
  Move the cursor to the first child that ends after `pos`.
  */
  childAfter(e) {
    return this.enterChild(
      1,
      e,
      2
      /* Side.After */
    );
  }
  /**
  Move to the last child that starts before `pos`.
  */
  childBefore(e) {
    return this.enterChild(
      -1,
      e,
      -2
      /* Side.Before */
    );
  }
  /**
  Move the cursor to the child around `pos`. If side is -1 the
  child may end at that position, when 1 it may start there. This
  will also enter [overlaid](#common.MountedTree.overlay)
  [mounted](#common.NodeProp^mounted) trees unless `overlays` is
  set to false.
  */
  enter(e, t, n = this.mode) {
    return this.buffer ? n & Re.ExcludeBuffers ? !1 : this.enterChild(1, e, t) : this.yield(this._tree.enter(e, t, n));
  }
  /**
  Move to the node's parent node, if this isn't the top node.
  */
  parent() {
    if (!this.buffer)
      return this.yieldNode(this.mode & Re.IncludeAnonymous ? this._tree._parent : this._tree.parent);
    if (this.stack.length)
      return this.yieldBuf(this.stack.pop());
    let e = this.mode & Re.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
    return this.buffer = null, this.yieldNode(e);
  }
  /**
  @internal
  */
  sibling(e) {
    if (!this.buffer)
      return this._tree._parent ? this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + e, e, 0, 4, this.mode)) : !1;
    let { buffer: t } = this.buffer, n = this.stack.length - 1;
    if (e < 0) {
      let s = n < 0 ? 0 : this.stack[n] + 4;
      if (this.index != s)
        return this.yieldBuf(t.findChild(
          s,
          this.index,
          -1,
          0,
          4
          /* Side.DontCare */
        ));
    } else {
      let s = t.buffer[this.index + 3];
      if (s < (n < 0 ? t.buffer.length : t.buffer[this.stack[n] + 3]))
        return this.yieldBuf(s);
    }
    return n < 0 ? this.yield(this.buffer.parent.nextChild(this.buffer.index + e, e, 0, 4, this.mode)) : !1;
  }
  /**
  Move to this node's next sibling, if any.
  */
  nextSibling() {
    return this.sibling(1);
  }
  /**
  Move to this node's previous sibling, if any.
  */
  prevSibling() {
    return this.sibling(-1);
  }
  atLastNode(e) {
    let t, n, { buffer: s } = this;
    if (s) {
      if (e > 0) {
        if (this.index < s.buffer.buffer.length)
          return !1;
      } else
        for (let r = 0; r < this.index; r++)
          if (s.buffer.buffer[r + 3] < this.index)
            return !1;
      ({ index: t, parent: n } = s);
    } else
      ({ index: t, _parent: n } = this._tree);
    for (; n; { index: t, _parent: n } = n)
      if (t > -1)
        for (let r = t + e, o = e < 0 ? -1 : n._tree.children.length; r != o; r += e) {
          let l = n._tree.children[r];
          if (this.mode & Re.IncludeAnonymous || l instanceof en || !l.type.isAnonymous || _h(l))
            return !1;
        }
    return !0;
  }
  move(e, t) {
    if (t && this.enterChild(
      e,
      0,
      4
      /* Side.DontCare */
    ))
      return !0;
    for (; ; ) {
      if (this.sibling(e))
        return !0;
      if (this.atLastNode(e) || !this.parent())
        return !1;
    }
  }
  /**
  Move to the next node in a
  [pre-order](https://en.wikipedia.org/wiki/Tree_traversal#Pre-order,_NLR)
  traversal, going from a node to its first child or, if the
  current node is empty or `enter` is false, its next sibling or
  the next sibling of the first parent node that has one.
  */
  next(e = !0) {
    return this.move(1, e);
  }
  /**
  Move to the next node in a last-to-first pre-order traversal. A
  node is followed by its last child or, if it has none, its
  previous sibling or the previous sibling of the first parent
  node that has one.
  */
  prev(e = !0) {
    return this.move(-1, e);
  }
  /**
  Move the cursor to the innermost node that covers `pos`. If
  `side` is -1, it will enter nodes that end at `pos`. If it is 1,
  it will enter nodes that start at `pos`.
  */
  moveTo(e, t = 0) {
    for (; (this.from == this.to || (t < 1 ? this.from >= e : this.from > e) || (t > -1 ? this.to <= e : this.to < e)) && this.parent(); )
      ;
    for (; this.enterChild(1, e, t); )
      ;
    return this;
  }
  /**
  Get a [syntax node](#common.SyntaxNode) at the cursor's current
  position.
  */
  get node() {
    if (!this.buffer)
      return this._tree;
    let e = this.bufferNode, t = null, n = 0;
    if (e && e.context == this.buffer)
      e: for (let s = this.index, r = this.stack.length; r >= 0; ) {
        for (let o = e; o; o = o._parent)
          if (o.index == s) {
            if (s == this.index)
              return o;
            t = o, n = r + 1;
            break e;
          }
        s = this.stack[--r];
      }
    for (let s = n; s < this.stack.length; s++)
      t = new Ui(this.buffer, t, this.stack[s]);
    return this.bufferNode = new Ui(this.buffer, t, this.index);
  }
  /**
  Get the [tree](#common.Tree) that represents the current node, if
  any. Will return null when the node is in a [tree
  buffer](#common.TreeBuffer).
  */
  get tree() {
    return this.buffer ? null : this._tree._tree;
  }
  /**
  Iterate over the current node and all its descendants, calling
  `enter` when entering a node and `leave`, if given, when leaving
  one. When `enter` returns `false`, any children of that node are
  skipped, and `leave` isn't called for it.
  */
  iterate(e, t) {
    for (let n = 0; ; ) {
      let s = !1;
      if (this.type.isAnonymous || e(this) !== !1) {
        if (this.firstChild()) {
          n++;
          continue;
        }
        this.type.isAnonymous || (s = !0);
      }
      for (; ; ) {
        if (s && t && t(this), s = this.type.isAnonymous, !n)
          return;
        if (this.nextSibling())
          break;
        this.parent(), n--, s = !0;
      }
    }
  }
  /**
  Test whether the current node matches a given context—a sequence
  of direct parent node names. Empty strings in the context array
  are treated as wildcards.
  */
  matchContext(e) {
    if (!this.buffer)
      return kc(this.node.parent, e);
    let { buffer: t } = this.buffer, { types: n } = t.set;
    for (let s = e.length - 1, r = this.stack.length - 1; s >= 0; r--) {
      if (r < 0)
        return kc(this._tree, e, s);
      let o = n[t.buffer[this.stack[r]]];
      if (!o.isAnonymous) {
        if (e[s] && e[s] != o.name)
          return !1;
        s--;
      }
    }
    return !0;
  }
}
function _h(i) {
  return i.children.some((e) => e instanceof en || !e.type.isAnonymous || _h(e));
}
function LS(i) {
  var e;
  let { buffer: t, nodeSet: n, maxBufferLength: s = Qg, reused: r = [], minRepeatType: o = n.types.length } = i, l = Array.isArray(t) ? new Rh(t, t.length) : t, a = n.types, c = 0, h = 0;
  function f(v, T, N, W, U, se) {
    let { id: Z, start: F, end: he, size: fe } = l, oe = h, Oe = c;
    if (fe < 0)
      if (l.next(), fe == -1) {
        let j = r[Z];
        N.push(j), W.push(F - v);
        return;
      } else if (fe == -3) {
        c = Z;
        return;
      } else if (fe == -4) {
        h = Z;
        return;
      } else
        throw new RangeError(`Unrecognized record size: ${fe}`);
    let G = a[Z], J, xe, le = F - v;
    if (he - F <= s && (xe = g(l.pos - T, U))) {
      let j = new Uint16Array(xe.size - xe.skip), te = l.pos - xe.size, Pe = j.length;
      for (; l.pos > te; )
        Pe = b(xe.start, j, Pe);
      J = new en(j, he - xe.start, n), le = xe.start - v;
    } else {
      let j = l.pos - fe;
      l.next();
      let te = [], Pe = [], Pt = Z >= o ? Z : -1, Le = 0, $n = he;
      for (; l.pos > j; )
        Pt >= 0 && l.id == Pt && l.size >= 0 ? (l.end <= $n - s && (p(te, Pe, F, Le, l.end, $n, Pt, oe, Oe), Le = te.length, $n = l.end), l.next()) : se > 2500 ? u(F, j, te, Pe) : f(F, j, te, Pe, Pt, se + 1);
      if (Pt >= 0 && Le > 0 && Le < te.length && p(te, Pe, F, Le, F, $n, Pt, oe, Oe), te.reverse(), Pe.reverse(), Pt > -1 && Le > 0) {
        let Li = d(G, Oe);
        J = Mh(G, te, Pe, 0, te.length, 0, he - F, Li, Li);
      } else
        J = m(G, te, Pe, he - F, oe - he, Oe);
    }
    N.push(J), W.push(le);
  }
  function u(v, T, N, W) {
    let U = [], se = 0, Z = -1;
    for (; l.pos > T; ) {
      let { id: F, start: he, end: fe, size: oe } = l;
      if (oe > 4)
        l.next();
      else {
        if (Z > -1 && he < Z)
          break;
        Z < 0 && (Z = fe - s), U.push(F, he, fe), se++, l.next();
      }
    }
    if (se) {
      let F = new Uint16Array(se * 4), he = U[U.length - 2];
      for (let fe = U.length - 3, oe = 0; fe >= 0; fe -= 3)
        F[oe++] = U[fe], F[oe++] = U[fe + 1] - he, F[oe++] = U[fe + 2] - he, F[oe++] = oe;
      N.push(new en(F, U[2] - he, n)), W.push(he - v);
    }
  }
  function d(v, T) {
    return (N, W, U) => {
      let se = 0, Z = N.length - 1, F, he;
      if (Z >= 0 && (F = N[Z]) instanceof Ie) {
        if (!Z && F.type == v && F.length == U)
          return F;
        (he = F.prop(ae.lookAhead)) && (se = W[Z] + F.length + he);
      }
      return m(v, N, W, U, se, T);
    };
  }
  function p(v, T, N, W, U, se, Z, F, he) {
    let fe = [], oe = [];
    for (; v.length > W; )
      fe.push(v.pop()), oe.push(T.pop() + N - U);
    v.push(m(n.types[Z], fe, oe, se - U, F - se, he)), T.push(U - N);
  }
  function m(v, T, N, W, U, se, Z) {
    if (se) {
      let F = [ae.contextHash, se];
      Z = Z ? [F].concat(Z) : [F];
    }
    if (U > 25) {
      let F = [ae.lookAhead, U];
      Z = Z ? [F].concat(Z) : [F];
    }
    return new Ie(v, T, N, W, Z);
  }
  function g(v, T) {
    let N = l.fork(), W = 0, U = 0, se = 0, Z = N.end - s, F = { size: 0, start: 0, skip: 0 };
    e: for (let he = N.pos - v; N.pos > he; ) {
      let fe = N.size;
      if (N.id == T && fe >= 0) {
        F.size = W, F.start = U, F.skip = se, se += 4, W += 4, N.next();
        continue;
      }
      let oe = N.pos - fe;
      if (fe < 0 || oe < he || N.start < Z)
        break;
      let Oe = N.id >= o ? 4 : 0, G = N.start;
      for (N.next(); N.pos > oe; ) {
        if (N.size < 0)
          if (N.size == -3 || N.size == -4)
            Oe += 4;
          else
            break e;
        else N.id >= o && (Oe += 4);
        N.next();
      }
      U = G, W += fe, se += Oe;
    }
    return (T < 0 || W == v) && (F.size = W, F.start = U, F.skip = se), F.size > 4 ? F : void 0;
  }
  function b(v, T, N) {
    let { id: W, start: U, end: se, size: Z } = l;
    if (l.next(), Z >= 0 && W < o) {
      let F = N;
      if (Z > 4) {
        let he = l.pos - (Z - 4);
        for (; l.pos > he; )
          N = b(v, T, N);
      }
      T[--N] = F, T[--N] = se - v, T[--N] = U - v, T[--N] = W;
    } else Z == -3 ? c = W : Z == -4 && (h = W);
    return N;
  }
  let x = [], S = [];
  for (; l.pos > 0; )
    f(i.start || 0, i.bufferStart || 0, x, S, -1, 0);
  let C = (e = i.length) !== null && e !== void 0 ? e : x.length ? S[0] + x[0].length : 0;
  return new Ie(a[i.topID], x.reverse(), S.reverse(), C);
}
const td = /* @__PURE__ */ new WeakMap();
function Oo(i, e) {
  if (!i.isAnonymous || e instanceof en || e.type != i)
    return 1;
  let t = td.get(e);
  if (t == null) {
    t = 1;
    for (let n of e.children) {
      if (n.type != i || !(n instanceof Ie)) {
        t = 1;
        break;
      }
      t += Oo(i, n);
    }
    td.set(e, t);
  }
  return t;
}
function Mh(i, e, t, n, s, r, o, l, a) {
  let c = 0;
  for (let p = n; p < s; p++)
    c += Oo(i, e[p]);
  let h = Math.ceil(
    c * 1.5 / 8
    /* Balance.BranchFactor */
  ), f = [], u = [];
  function d(p, m, g, b, x) {
    for (let S = g; S < b; ) {
      let C = S, v = m[S], T = Oo(i, p[S]);
      for (S++; S < b; S++) {
        let N = Oo(i, p[S]);
        if (T + N >= h)
          break;
        T += N;
      }
      if (S == C + 1) {
        if (T > h) {
          let N = p[C];
          d(N.children, N.positions, 0, N.children.length, m[C] + x);
          continue;
        }
        f.push(p[C]);
      } else {
        let N = m[S - 1] + p[S - 1].length - v;
        f.push(Mh(i, p, m, C, S, v, N, null, a));
      }
      u.push(v + x - r);
    }
  }
  return d(e, t, n, s, 0), (l || a)(f, u, o);
}
class Sn {
  /**
  Construct a tree fragment. You'll usually want to use
  [`addTree`](#common.TreeFragment^addTree) and
  [`applyChanges`](#common.TreeFragment^applyChanges) instead of
  calling this directly.
  */
  constructor(e, t, n, s, r = !1, o = !1) {
    this.from = e, this.to = t, this.tree = n, this.offset = s, this.open = (r ? 1 : 0) | (o ? 2 : 0);
  }
  /**
  Whether the start of the fragment represents the start of a
  parse, or the end of a change. (In the second case, it may not
  be safe to reuse some nodes at the start, depending on the
  parsing algorithm.)
  */
  get openStart() {
    return (this.open & 1) > 0;
  }
  /**
  Whether the end of the fragment represents the end of a
  full-document parse, or the start of a change.
  */
  get openEnd() {
    return (this.open & 2) > 0;
  }
  /**
  Create a set of fragments from a freshly parsed tree, or update
  an existing set of fragments by replacing the ones that overlap
  with a tree with content from the new tree. When `partial` is
  true, the parse is treated as incomplete, and the resulting
  fragment has [`openEnd`](#common.TreeFragment.openEnd) set to
  true.
  */
  static addTree(e, t = [], n = !1) {
    let s = [new Sn(0, e.length, e, 0, !1, n)];
    for (let r of t)
      r.to > e.length && s.push(r);
    return s;
  }
  /**
  Apply a set of edits to an array of fragments, removing or
  splitting fragments as necessary to remove edited ranges, and
  adjusting offsets for fragments that moved.
  */
  static applyChanges(e, t, n = 128) {
    if (!t.length)
      return e;
    let s = [], r = 1, o = e.length ? e[0] : null;
    for (let l = 0, a = 0, c = 0; ; l++) {
      let h = l < t.length ? t[l] : null, f = h ? h.fromA : 1e9;
      if (f - a >= n)
        for (; o && o.from < f; ) {
          let u = o;
          if (a >= u.from || f <= u.to || c) {
            let d = Math.max(u.from, a) - c, p = Math.min(u.to, f) - c;
            u = d >= p ? null : new Sn(d, p, u.tree, u.offset + c, l > 0, !!h);
          }
          if (u && s.push(u), o.to > f)
            break;
          o = r < e.length ? e[r++] : null;
        }
      if (!h)
        break;
      a = h.toA, c = h.toA - h.toB;
    }
    return s;
  }
}
class Bg {
  /**
  Start a parse, returning a [partial parse](#common.PartialParse)
  object. [`fragments`](#common.TreeFragment) can be passed in to
  make the parse incremental.
  
  By default, the entire input is parsed. You can pass `ranges`,
  which should be a sorted array of non-empty, non-overlapping
  ranges, to parse only those ranges. The tree returned in that
  case will start at `ranges[0].from`.
  */
  startParse(e, t, n) {
    return typeof e == "string" && (e = new BS(e)), n = n ? n.length ? n.map((s) => new fa(s.from, s.to)) : [new fa(0, 0)] : [new fa(0, e.length)], this.createParse(e, t || [], n);
  }
  /**
  Run a full parse, returning the resulting tree.
  */
  parse(e, t, n) {
    let s = this.startParse(e, t, n);
    for (; ; ) {
      let r = s.advance();
      if (r)
        return r;
    }
  }
}
class BS {
  constructor(e) {
    this.string = e;
  }
  get length() {
    return this.string.length;
  }
  chunk(e) {
    return this.string.slice(e);
  }
  get lineChunks() {
    return !1;
  }
  read(e, t) {
    return this.string.slice(e, t);
  }
}
new ae({ perNode: !0 });
let XS = 0;
class Mt {
  /**
  @internal
  */
  constructor(e, t, n, s) {
    this.name = e, this.set = t, this.base = n, this.modified = s, this.id = XS++;
  }
  toString() {
    let { name: e } = this;
    for (let t of this.modified)
      t.name && (e = `${t.name}(${e})`);
    return e;
  }
  static define(e, t) {
    let n = typeof e == "string" ? e : "?";
    if (e instanceof Mt && (t = e), t != null && t.base)
      throw new Error("Can not derive from a modified tag");
    let s = new Mt(n, [], null, []);
    if (s.set.push(s), t)
      for (let r of t.set)
        s.set.push(r);
    return s;
  }
  /**
  Define a tag _modifier_, which is a function that, given a tag,
  will return a tag that is a subtag of the original. Applying the
  same modifier to a twice tag will return the same value (`m1(t1)
  == m1(t1)`) and applying multiple modifiers will, regardless or
  order, produce the same tag (`m1(m2(t1)) == m2(m1(t1))`).
  
  When multiple modifiers are applied to a given base tag, each
  smaller set of modifiers is registered as a parent, so that for
  example `m1(m2(m3(t1)))` is a subtype of `m1(m2(t1))`,
  `m1(m3(t1)`, and so on.
  */
  static defineModifier(e) {
    let t = new Uo(e);
    return (n) => n.modified.indexOf(t) > -1 ? n : Uo.get(n.base || n, n.modified.concat(t).sort((s, r) => s.id - r.id));
  }
}
let WS = 0;
class Uo {
  constructor(e) {
    this.name = e, this.instances = [], this.id = WS++;
  }
  static get(e, t) {
    if (!t.length)
      return e;
    let n = t[0].instances.find((l) => l.base == e && FS(t, l.modified));
    if (n)
      return n;
    let s = [], r = new Mt(e.name, s, e, t);
    for (let l of t)
      l.instances.push(r);
    let o = qS(t);
    for (let l of e.set)
      if (!l.modified.length)
        for (let a of o)
          s.push(Uo.get(l, a));
    return r;
  }
}
function FS(i, e) {
  return i.length == e.length && i.every((t, n) => t == e[n]);
}
function qS(i) {
  let e = [[]];
  for (let t = 0; t < i.length; t++)
    for (let n = 0, s = e.length; n < s; n++)
      e.push(e[n].concat(i[t]));
  return e.sort((t, n) => n.length - t.length);
}
function El(i) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in i) {
    let n = i[t];
    Array.isArray(n) || (n = [n]);
    for (let s of t.split(" "))
      if (s) {
        let r = [], o = 2, l = s;
        for (let f = 0; ; ) {
          if (l == "..." && f > 0 && f + 3 == s.length) {
            o = 1;
            break;
          }
          let u = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(l);
          if (!u)
            throw new RangeError("Invalid path: " + s);
          if (r.push(u[0] == "*" ? "" : u[0][0] == '"' ? JSON.parse(u[0]) : u[0]), f += u[0].length, f == s.length)
            break;
          let d = s[f++];
          if (f == s.length && d == "!") {
            o = 0;
            break;
          }
          if (d != "/")
            throw new RangeError("Invalid path: " + s);
          l = s.slice(f);
        }
        let a = r.length - 1, c = r[a];
        if (!c)
          throw new RangeError("Invalid path: " + s);
        let h = new or(n, o, a > 0 ? r.slice(0, a) : null);
        e[c] = h.sort(e[c]);
      }
  }
  return Xg.add(e);
}
const Xg = new ae({
  combine(i, e) {
    let t, n, s;
    for (; i || e; ) {
      if (!i || e && i.depth >= e.depth ? (s = e, e = e.next) : (s = i, i = i.next), t && t.mode == s.mode && !s.context && !t.context)
        continue;
      let r = new or(s.tags, s.mode, s.context);
      t ? t.next = r : n = r, t = r;
    }
    return n;
  }
});
class or {
  constructor(e, t, n, s) {
    this.tags = e, this.mode = t, this.context = n, this.next = s;
  }
  get opaque() {
    return this.mode == 0;
  }
  get inherit() {
    return this.mode == 1;
  }
  sort(e) {
    return !e || e.depth < this.depth ? (this.next = e, this) : (e.next = this.sort(e.next), e);
  }
  get depth() {
    return this.context ? this.context.length : 0;
  }
}
or.empty = new or([], 2, null);
function Wg(i, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let r of i)
    if (!Array.isArray(r.tag))
      t[r.tag.id] = r.class;
    else
      for (let o of r.tag)
        t[o.id] = r.class;
  let { scope: n, all: s = null } = e || {};
  return {
    style: (r) => {
      let o = s;
      for (let l of r)
        for (let a of l.set) {
          let c = t[a.id];
          if (c) {
            o = o ? o + " " + c : c;
            break;
          }
        }
      return o;
    },
    scope: n
  };
}
function HS(i, e) {
  let t = null;
  for (let n of i) {
    let s = n.style(e);
    s && (t = t ? t + " " + s : s);
  }
  return t;
}
function US(i, e, t, n = 0, s = i.length) {
  let r = new GS(n, Array.isArray(e) ? e : [e], t);
  r.highlightRange(i.cursor(), n, s, "", r.highlighters), r.flush(s);
}
class GS {
  constructor(e, t, n) {
    this.at = e, this.highlighters = t, this.span = n, this.class = "";
  }
  startSpan(e, t) {
    t != this.class && (this.flush(e), e > this.at && (this.at = e), this.class = t);
  }
  flush(e) {
    e > this.at && this.class && this.span(this.at, e, this.class);
  }
  highlightRange(e, t, n, s, r) {
    let { type: o, from: l, to: a } = e;
    if (l >= n || a <= t)
      return;
    o.isTop && (r = this.highlighters.filter((d) => !d.scope || d.scope(o)));
    let c = s, h = zS(e) || or.empty, f = HS(r, h.tags);
    if (f && (c && (c += " "), c += f, h.mode == 1 && (s += (s ? " " : "") + f)), this.startSpan(Math.max(t, l), c), h.opaque)
      return;
    let u = e.tree && e.tree.prop(ae.mounted);
    if (u && u.overlay) {
      let d = e.node.enter(u.overlay[0].from + l, 1), p = this.highlighters.filter((g) => !g.scope || g.scope(u.tree.type)), m = e.firstChild();
      for (let g = 0, b = l; ; g++) {
        let x = g < u.overlay.length ? u.overlay[g] : null, S = x ? x.from + l : a, C = Math.max(t, b), v = Math.min(n, S);
        if (C < v && m)
          for (; e.from < v && (this.highlightRange(e, C, v, s, r), this.startSpan(Math.min(v, e.to), c), !(e.to >= S || !e.nextSibling())); )
            ;
        if (!x || S > n)
          break;
        b = x.to + l, b > t && (this.highlightRange(d.cursor(), Math.max(t, x.from + l), Math.min(n, b), "", p), this.startSpan(Math.min(n, b), c));
      }
      m && e.parent();
    } else if (e.firstChild()) {
      u && (s = "");
      do
        if (!(e.to <= t)) {
          if (e.from >= n)
            break;
          this.highlightRange(e, t, n, s, r), this.startSpan(Math.min(n, e.to), c);
        }
      while (e.nextSibling());
      e.parent();
    }
  }
}
function zS(i) {
  let e = i.type.prop(Xg);
  for (; e && e.context && !i.matchContext(e.context); )
    e = e.next;
  return e || null;
}
const I = Mt.define, Gr = I(), Wi = I(), id = I(Wi), nd = I(Wi), Fi = I(), zr = I(Fi), ua = I(Fi), ci = I(), ln = I(ci), li = I(), ai = I(), Ec = I(), ws = I(Ec), jr = I(), k = {
  /**
  A comment.
  */
  comment: Gr,
  /**
  A line [comment](#highlight.tags.comment).
  */
  lineComment: I(Gr),
  /**
  A block [comment](#highlight.tags.comment).
  */
  blockComment: I(Gr),
  /**
  A documentation [comment](#highlight.tags.comment).
  */
  docComment: I(Gr),
  /**
  Any kind of identifier.
  */
  name: Wi,
  /**
  The [name](#highlight.tags.name) of a variable.
  */
  variableName: I(Wi),
  /**
  A type [name](#highlight.tags.name).
  */
  typeName: id,
  /**
  A tag name (subtag of [`typeName`](#highlight.tags.typeName)).
  */
  tagName: I(id),
  /**
  A property or field [name](#highlight.tags.name).
  */
  propertyName: nd,
  /**
  An attribute name (subtag of [`propertyName`](#highlight.tags.propertyName)).
  */
  attributeName: I(nd),
  /**
  The [name](#highlight.tags.name) of a class.
  */
  className: I(Wi),
  /**
  A label [name](#highlight.tags.name).
  */
  labelName: I(Wi),
  /**
  A namespace [name](#highlight.tags.name).
  */
  namespace: I(Wi),
  /**
  The [name](#highlight.tags.name) of a macro.
  */
  macroName: I(Wi),
  /**
  A literal value.
  */
  literal: Fi,
  /**
  A string [literal](#highlight.tags.literal).
  */
  string: zr,
  /**
  A documentation [string](#highlight.tags.string).
  */
  docString: I(zr),
  /**
  A character literal (subtag of [string](#highlight.tags.string)).
  */
  character: I(zr),
  /**
  An attribute value (subtag of [string](#highlight.tags.string)).
  */
  attributeValue: I(zr),
  /**
  A number [literal](#highlight.tags.literal).
  */
  number: ua,
  /**
  An integer [number](#highlight.tags.number) literal.
  */
  integer: I(ua),
  /**
  A floating-point [number](#highlight.tags.number) literal.
  */
  float: I(ua),
  /**
  A boolean [literal](#highlight.tags.literal).
  */
  bool: I(Fi),
  /**
  Regular expression [literal](#highlight.tags.literal).
  */
  regexp: I(Fi),
  /**
  An escape [literal](#highlight.tags.literal), for example a
  backslash escape in a string.
  */
  escape: I(Fi),
  /**
  A color [literal](#highlight.tags.literal).
  */
  color: I(Fi),
  /**
  A URL [literal](#highlight.tags.literal).
  */
  url: I(Fi),
  /**
  A language keyword.
  */
  keyword: li,
  /**
  The [keyword](#highlight.tags.keyword) for the self or this
  object.
  */
  self: I(li),
  /**
  The [keyword](#highlight.tags.keyword) for null.
  */
  null: I(li),
  /**
  A [keyword](#highlight.tags.keyword) denoting some atomic value.
  */
  atom: I(li),
  /**
  A [keyword](#highlight.tags.keyword) that represents a unit.
  */
  unit: I(li),
  /**
  A modifier [keyword](#highlight.tags.keyword).
  */
  modifier: I(li),
  /**
  A [keyword](#highlight.tags.keyword) that acts as an operator.
  */
  operatorKeyword: I(li),
  /**
  A control-flow related [keyword](#highlight.tags.keyword).
  */
  controlKeyword: I(li),
  /**
  A [keyword](#highlight.tags.keyword) that defines something.
  */
  definitionKeyword: I(li),
  /**
  A [keyword](#highlight.tags.keyword) related to defining or
  interfacing with modules.
  */
  moduleKeyword: I(li),
  /**
  An operator.
  */
  operator: ai,
  /**
  An [operator](#highlight.tags.operator) that dereferences something.
  */
  derefOperator: I(ai),
  /**
  Arithmetic-related [operator](#highlight.tags.operator).
  */
  arithmeticOperator: I(ai),
  /**
  Logical [operator](#highlight.tags.operator).
  */
  logicOperator: I(ai),
  /**
  Bit [operator](#highlight.tags.operator).
  */
  bitwiseOperator: I(ai),
  /**
  Comparison [operator](#highlight.tags.operator).
  */
  compareOperator: I(ai),
  /**
  [Operator](#highlight.tags.operator) that updates its operand.
  */
  updateOperator: I(ai),
  /**
  [Operator](#highlight.tags.operator) that defines something.
  */
  definitionOperator: I(ai),
  /**
  Type-related [operator](#highlight.tags.operator).
  */
  typeOperator: I(ai),
  /**
  Control-flow [operator](#highlight.tags.operator).
  */
  controlOperator: I(ai),
  /**
  Program or markup punctuation.
  */
  punctuation: Ec,
  /**
  [Punctuation](#highlight.tags.punctuation) that separates
  things.
  */
  separator: I(Ec),
  /**
  Bracket-style [punctuation](#highlight.tags.punctuation).
  */
  bracket: ws,
  /**
  Angle [brackets](#highlight.tags.bracket) (usually `<` and `>`
  tokens).
  */
  angleBracket: I(ws),
  /**
  Square [brackets](#highlight.tags.bracket) (usually `[` and `]`
  tokens).
  */
  squareBracket: I(ws),
  /**
  Parentheses (usually `(` and `)` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  paren: I(ws),
  /**
  Braces (usually `{` and `}` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  brace: I(ws),
  /**
  Content, for example plain text in XML or markup documents.
  */
  content: ci,
  /**
  [Content](#highlight.tags.content) that represents a heading.
  */
  heading: ln,
  /**
  A level 1 [heading](#highlight.tags.heading).
  */
  heading1: I(ln),
  /**
  A level 2 [heading](#highlight.tags.heading).
  */
  heading2: I(ln),
  /**
  A level 3 [heading](#highlight.tags.heading).
  */
  heading3: I(ln),
  /**
  A level 4 [heading](#highlight.tags.heading).
  */
  heading4: I(ln),
  /**
  A level 5 [heading](#highlight.tags.heading).
  */
  heading5: I(ln),
  /**
  A level 6 [heading](#highlight.tags.heading).
  */
  heading6: I(ln),
  /**
  A prose [content](#highlight.tags.content) separator (such as a horizontal rule).
  */
  contentSeparator: I(ci),
  /**
  [Content](#highlight.tags.content) that represents a list.
  */
  list: I(ci),
  /**
  [Content](#highlight.tags.content) that represents a quote.
  */
  quote: I(ci),
  /**
  [Content](#highlight.tags.content) that is emphasized.
  */
  emphasis: I(ci),
  /**
  [Content](#highlight.tags.content) that is styled strong.
  */
  strong: I(ci),
  /**
  [Content](#highlight.tags.content) that is part of a link.
  */
  link: I(ci),
  /**
  [Content](#highlight.tags.content) that is styled as code or
  monospace.
  */
  monospace: I(ci),
  /**
  [Content](#highlight.tags.content) that has a strike-through
  style.
  */
  strikethrough: I(ci),
  /**
  Inserted text in a change-tracking format.
  */
  inserted: I(),
  /**
  Deleted text.
  */
  deleted: I(),
  /**
  Changed text.
  */
  changed: I(),
  /**
  An invalid or unsyntactic element.
  */
  invalid: I(),
  /**
  Metadata or meta-instruction.
  */
  meta: jr,
  /**
  [Metadata](#highlight.tags.meta) that applies to the entire
  document.
  */
  documentMeta: I(jr),
  /**
  [Metadata](#highlight.tags.meta) that annotates or adds
  attributes to a given syntactic element.
  */
  annotation: I(jr),
  /**
  Processing instruction or preprocessor directive. Subtag of
  [meta](#highlight.tags.meta).
  */
  processingInstruction: I(jr),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates that a
  given element is being defined. Expected to be used with the
  various [name](#highlight.tags.name) tags.
  */
  definition: Mt.defineModifier("definition"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates that
  something is constant. Mostly expected to be used with
  [variable names](#highlight.tags.variableName).
  */
  constant: Mt.defineModifier("constant"),
  /**
  [Modifier](#highlight.Tag^defineModifier) used to indicate that
  a [variable](#highlight.tags.variableName) or [property
  name](#highlight.tags.propertyName) is being called or defined
  as a function.
  */
  function: Mt.defineModifier("function"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that can be applied to
  [names](#highlight.tags.name) to indicate that they belong to
  the language's standard environment.
  */
  standard: Mt.defineModifier("standard"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates a given
  [names](#highlight.tags.name) is local to some scope.
  */
  local: Mt.defineModifier("local"),
  /**
  A generic variant [modifier](#highlight.Tag^defineModifier) that
  can be used to tag language-specific alternative variants of
  some common tag. It is recommended for themes to define special
  forms of at least the [string](#highlight.tags.string) and
  [variable name](#highlight.tags.variableName) tags, since those
  come up a lot.
  */
  special: Mt.defineModifier("special")
};
for (let i in k) {
  let e = k[i];
  e instanceof Mt && (e.name = i);
}
Wg([
  { tag: k.link, class: "tok-link" },
  { tag: k.heading, class: "tok-heading" },
  { tag: k.emphasis, class: "tok-emphasis" },
  { tag: k.strong, class: "tok-strong" },
  { tag: k.keyword, class: "tok-keyword" },
  { tag: k.atom, class: "tok-atom" },
  { tag: k.bool, class: "tok-bool" },
  { tag: k.url, class: "tok-url" },
  { tag: k.labelName, class: "tok-labelName" },
  { tag: k.inserted, class: "tok-inserted" },
  { tag: k.deleted, class: "tok-deleted" },
  { tag: k.literal, class: "tok-literal" },
  { tag: k.string, class: "tok-string" },
  { tag: k.number, class: "tok-number" },
  { tag: [k.regexp, k.escape, k.special(k.string)], class: "tok-string2" },
  { tag: k.variableName, class: "tok-variableName" },
  { tag: k.local(k.variableName), class: "tok-variableName tok-local" },
  { tag: k.definition(k.variableName), class: "tok-variableName tok-definition" },
  { tag: k.special(k.variableName), class: "tok-variableName2" },
  { tag: k.definition(k.propertyName), class: "tok-propertyName tok-definition" },
  { tag: k.typeName, class: "tok-typeName" },
  { tag: k.namespace, class: "tok-namespace" },
  { tag: k.className, class: "tok-className" },
  { tag: k.macroName, class: "tok-macroName" },
  { tag: k.propertyName, class: "tok-propertyName" },
  { tag: k.operator, class: "tok-operator" },
  { tag: k.comment, class: "tok-comment" },
  { tag: k.meta, class: "tok-meta" },
  { tag: k.invalid, class: "tok-invalid" },
  { tag: k.punctuation, class: "tok-punctuation" }
]);
var da;
const Xn = /* @__PURE__ */ new ae();
function jS(i) {
  return L.define({
    combine: i ? (e) => e.concat(i) : void 0
  });
}
const YS = /* @__PURE__ */ new ae();
class Ht {
  /**
  Construct a language object. If you need to invoke this
  directly, first define a data facet with
  [`defineLanguageFacet`](https://codemirror.net/6/docs/ref/#language.defineLanguageFacet), and then
  configure your parser to [attach](https://codemirror.net/6/docs/ref/#language.languageDataProp) it
  to the language's outer syntax node.
  */
  constructor(e, t, n = [], s = "") {
    this.data = e, this.name = s, pe.prototype.hasOwnProperty("tree") || Object.defineProperty(pe.prototype, "tree", { get() {
      return je(this);
    } }), this.parser = t, this.extension = [
      tn.of(this),
      pe.languageData.of((r, o, l) => {
        let a = sd(r, o, l), c = a.type.prop(Xn);
        if (!c)
          return [];
        let h = r.facet(c), f = a.type.prop(YS);
        if (f) {
          let u = a.resolve(o - a.from, l);
          for (let d of f)
            if (d.test(u, r)) {
              let p = r.facet(d.facet);
              return d.type == "replace" ? p : p.concat(h);
            }
        }
        return h;
      })
    ].concat(n);
  }
  /**
  Query whether this language is active at the given position.
  */
  isActiveAt(e, t, n = -1) {
    return sd(e, t, n).type.prop(Xn) == this.data;
  }
  /**
  Find the document regions that were parsed using this language.
  The returned regions will _include_ any nested languages rooted
  in this language, when those exist.
  */
  findRegions(e) {
    let t = e.facet(tn);
    if ((t == null ? void 0 : t.data) == this.data)
      return [{ from: 0, to: e.doc.length }];
    if (!t || !t.allowsNesting)
      return [];
    let n = [], s = (r, o) => {
      if (r.prop(Xn) == this.data) {
        n.push({ from: o, to: o + r.length });
        return;
      }
      let l = r.prop(ae.mounted);
      if (l) {
        if (l.tree.prop(Xn) == this.data) {
          if (l.overlay)
            for (let a of l.overlay)
              n.push({ from: a.from + o, to: a.to + o });
          else
            n.push({ from: o, to: o + r.length });
          return;
        } else if (l.overlay) {
          let a = n.length;
          if (s(l.tree, l.overlay[0].from + o), n.length > a)
            return;
        }
      }
      for (let a = 0; a < r.children.length; a++) {
        let c = r.children[a];
        c instanceof Ie && s(c, r.positions[a] + o);
      }
    };
    return s(je(e), 0), n;
  }
  /**
  Indicates whether this language allows nested languages. The
  default implementation returns true.
  */
  get allowsNesting() {
    return !0;
  }
}
Ht.setState = /* @__PURE__ */ ie.define();
function sd(i, e, t) {
  let n = i.facet(tn), s = je(i).topNode;
  if (!n || n.allowsNesting)
    for (let r = s; r; r = r.enter(e, t, Re.ExcludeBuffers | Re.EnterBracketed))
      r.type.isTop && (s = r);
  return s;
}
class as extends Ht {
  constructor(e, t, n) {
    super(e, t, [], n), this.parser = t;
  }
  /**
  Define a language from a parser.
  */
  static define(e) {
    let t = jS(e.languageData);
    return new as(t, e.parser.configure({
      props: [Xn.add((n) => n.isTop ? t : void 0)]
    }), e.name);
  }
  /**
  Create a new instance of this language with a reconfigured
  version of its parser and optionally a new name.
  */
  configure(e, t) {
    return new as(this.data, this.parser.configure(e), t || this.name);
  }
  get allowsNesting() {
    return this.parser.hasWrappers();
  }
}
function je(i) {
  let e = i.field(Ht.state, !1);
  return e ? e.tree : Ie.empty;
}
class KS {
  /**
  Create an input object for the given document.
  */
  constructor(e) {
    this.doc = e, this.cursorPos = 0, this.string = "", this.cursor = e.iter();
  }
  get length() {
    return this.doc.length;
  }
  syncTo(e) {
    return this.string = this.cursor.next(e - this.cursorPos).value, this.cursorPos = e + this.string.length, this.cursorPos - this.string.length;
  }
  chunk(e) {
    return this.syncTo(e), this.string;
  }
  get lineChunks() {
    return !0;
  }
  read(e, t) {
    let n = this.cursorPos - this.string.length;
    return e < n || t >= this.cursorPos ? this.doc.sliceString(e, t) : this.string.slice(e - n, t - n);
  }
}
let Ps = null;
class Go {
  constructor(e, t, n = [], s, r, o, l, a) {
    this.parser = e, this.state = t, this.fragments = n, this.tree = s, this.treeLen = r, this.viewport = o, this.skipped = l, this.scheduleOn = a, this.parse = null, this.tempSkipped = [];
  }
  /**
  @internal
  */
  static create(e, t, n) {
    return new Go(e, t, [], Ie.empty, 0, n, [], null);
  }
  startParse() {
    return this.parser.startParse(new KS(this.state.doc), this.fragments);
  }
  /**
  @internal
  */
  work(e, t) {
    return t != null && t >= this.state.doc.length && (t = void 0), this.tree != Ie.empty && this.isDone(t ?? this.state.doc.length) ? (this.takeTree(), !0) : this.withContext(() => {
      var n;
      if (typeof e == "number") {
        let s = Date.now() + e;
        e = () => Date.now() > s;
      }
      for (this.parse || (this.parse = this.startParse()), t != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > t) && t < this.state.doc.length && this.parse.stopAt(t); ; ) {
        let s = this.parse.advance();
        if (s)
          if (this.fragments = this.withoutTempSkipped(Sn.addTree(s, this.fragments, this.parse.stoppedAt != null)), this.treeLen = (n = this.parse.stoppedAt) !== null && n !== void 0 ? n : this.state.doc.length, this.tree = s, this.parse = null, this.treeLen < (t ?? this.state.doc.length))
            this.parse = this.startParse();
          else
            return !0;
        if (e())
          return !1;
      }
    });
  }
  /**
  @internal
  */
  takeTree() {
    let e, t;
    this.parse && (e = this.parse.parsedPos) >= this.treeLen && ((this.parse.stoppedAt == null || this.parse.stoppedAt > e) && this.parse.stopAt(e), this.withContext(() => {
      for (; !(t = this.parse.advance()); )
        ;
    }), this.treeLen = e, this.tree = t, this.fragments = this.withoutTempSkipped(Sn.addTree(this.tree, this.fragments, !0)), this.parse = null);
  }
  withContext(e) {
    let t = Ps;
    Ps = this;
    try {
      return e();
    } finally {
      Ps = t;
    }
  }
  withoutTempSkipped(e) {
    for (let t; t = this.tempSkipped.pop(); )
      e = rd(e, t.from, t.to);
    return e;
  }
  /**
  @internal
  */
  changes(e, t) {
    let { fragments: n, tree: s, treeLen: r, viewport: o, skipped: l } = this;
    if (this.takeTree(), !e.empty) {
      let a = [];
      if (e.iterChangedRanges((c, h, f, u) => a.push({ fromA: c, toA: h, fromB: f, toB: u })), n = Sn.applyChanges(n, a), s = Ie.empty, r = 0, o = { from: e.mapPos(o.from, -1), to: e.mapPos(o.to, 1) }, this.skipped.length) {
        l = [];
        for (let c of this.skipped) {
          let h = e.mapPos(c.from, 1), f = e.mapPos(c.to, -1);
          h < f && l.push({ from: h, to: f });
        }
      }
    }
    return new Go(this.parser, t, n, s, r, o, l, this.scheduleOn);
  }
  /**
  @internal
  */
  updateViewport(e) {
    if (this.viewport.from == e.from && this.viewport.to == e.to)
      return !1;
    this.viewport = e;
    let t = this.skipped.length;
    for (let n = 0; n < this.skipped.length; n++) {
      let { from: s, to: r } = this.skipped[n];
      s < e.to && r > e.from && (this.fragments = rd(this.fragments, s, r), this.skipped.splice(n--, 1));
    }
    return this.skipped.length >= t ? !1 : (this.reset(), !0);
  }
  /**
  @internal
  */
  reset() {
    this.parse && (this.takeTree(), this.parse = null);
  }
  /**
  Notify the parse scheduler that the given region was skipped
  because it wasn't in view, and the parse should be restarted
  when it comes into view.
  */
  skipUntilInView(e, t) {
    this.skipped.push({ from: e, to: t });
  }
  /**
  Returns a parser intended to be used as placeholder when
  asynchronously loading a nested parser. It'll skip its input and
  mark it as not-really-parsed, so that the next update will parse
  it again.
  
  When `until` is given, a reparse will be scheduled when that
  promise resolves.
  */
  static getSkippingParser(e) {
    return new class extends Bg {
      createParse(t, n, s) {
        let r = s[0].from, o = s[s.length - 1].to;
        return {
          parsedPos: r,
          advance() {
            let a = Ps;
            if (a) {
              for (let c of s)
                a.tempSkipped.push(c);
              e && (a.scheduleOn = a.scheduleOn ? Promise.all([a.scheduleOn, e]) : e);
            }
            return this.parsedPos = o, new Ie(wt.none, [], [], o - r);
          },
          stoppedAt: null,
          stopAt() {
          }
        };
      }
    }();
  }
  /**
  @internal
  */
  isDone(e) {
    e = Math.min(e, this.state.doc.length);
    let t = this.fragments;
    return this.treeLen >= e && t.length && t[0].from == 0 && t[0].to >= e;
  }
  /**
  Get the context for the current parse, or `null` if no editor
  parse is in progress.
  */
  static get() {
    return Ps;
  }
}
function rd(i, e, t) {
  return Sn.applyChanges(i, [{ fromA: e, toA: t, fromB: e, toB: t }]);
}
class cs {
  constructor(e) {
    this.context = e, this.tree = e.tree;
  }
  apply(e) {
    if (!e.docChanged && this.tree == this.context.tree)
      return this;
    let t = this.context.changes(e.changes, e.state), n = this.context.treeLen == e.startState.doc.length ? void 0 : Math.max(e.changes.mapPos(this.context.treeLen), t.viewport.to);
    return t.work(20, n) || t.takeTree(), new cs(t);
  }
  static init(e) {
    let t = Math.min(3e3, e.doc.length), n = Go.create(e.facet(tn).parser, e, { from: 0, to: t });
    return n.work(20, t) || n.takeTree(), new cs(n);
  }
}
Ht.state = /* @__PURE__ */ rt.define({
  create: cs.init,
  update(i, e) {
    for (let t of e.effects)
      if (t.is(Ht.setState))
        return t.value;
    return e.startState.facet(tn) != e.state.facet(tn) ? cs.init(e.state) : i.apply(e);
  }
});
let Fg = (i) => {
  let e = setTimeout(
    () => i(),
    500
    /* Work.MaxPause */
  );
  return () => clearTimeout(e);
};
typeof requestIdleCallback < "u" && (Fg = (i) => {
  let e = -1, t = setTimeout(
    () => {
      e = requestIdleCallback(i, {
        timeout: 400
        /* Work.MinPause */
      });
    },
    100
    /* Work.MinPause */
  );
  return () => e < 0 ? clearTimeout(t) : cancelIdleCallback(e);
});
const pa = typeof navigator < "u" && (!((da = navigator.scheduling) === null || da === void 0) && da.isInputPending) ? () => navigator.scheduling.isInputPending() : null, ZS = /* @__PURE__ */ Ve.fromClass(class {
  constructor(e) {
    this.view = e, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
  }
  update(e) {
    let t = this.view.state.field(Ht.state).context;
    (t.updateViewport(e.view.viewport) || this.view.viewport.to > t.treeLen) && this.scheduleWork(), (e.docChanged || e.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(t);
  }
  scheduleWork() {
    if (this.working)
      return;
    let { state: e } = this.view, t = e.field(Ht.state);
    (t.tree != t.context.tree || !t.context.isDone(e.doc.length)) && (this.working = Fg(this.work));
  }
  work(e) {
    this.working = null;
    let t = Date.now();
    if (this.chunkEnd < t && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = t + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0)
      return;
    let { state: n, viewport: { to: s } } = this.view, r = n.field(Ht.state);
    if (r.tree == r.context.tree && r.context.isDone(
      s + 1e5
      /* Work.MaxParseAhead */
    ))
      return;
    let o = Date.now() + Math.min(this.chunkBudget, 100, e && !pa ? Math.max(25, e.timeRemaining() - 5) : 1e9), l = r.context.treeLen < s && n.doc.length > s + 1e3, a = r.context.work(() => pa && pa() || Date.now() > o, s + (l ? 0 : 1e5));
    this.chunkBudget -= Date.now() - t, (a || this.chunkBudget <= 0) && (r.context.takeTree(), this.view.dispatch({ effects: Ht.setState.of(new cs(r.context)) })), this.chunkBudget > 0 && !(a && !l) && this.scheduleWork(), this.checkAsyncSchedule(r.context);
  }
  checkAsyncSchedule(e) {
    e.scheduleOn && (this.workScheduled++, e.scheduleOn.then(() => this.scheduleWork()).catch((t) => xt(this.view.state, t)).then(() => this.workScheduled--), e.scheduleOn = null);
  }
  destroy() {
    this.working && this.working();
  }
  isWorking() {
    return !!(this.working || this.workScheduled > 0);
  }
}, {
  eventHandlers: { focus() {
    this.scheduleWork();
  } }
}), tn = /* @__PURE__ */ L.define({
  combine(i) {
    return i.length ? i[0] : null;
  },
  enables: (i) => [
    Ht.state,
    ZS,
    X.contentAttributes.compute([i], (e) => {
      let t = e.facet(i);
      return t && t.name ? { "data-language": t.name } : {};
    })
  ]
});
class Qh {
  /**
  Create a language support object.
  */
  constructor(e, t = []) {
    this.language = e, this.support = t, this.extension = [e, t];
  }
}
const JS = /* @__PURE__ */ L.define(), Ih = /* @__PURE__ */ L.define({
  combine: (i) => {
    if (!i.length)
      return "  ";
    let e = i[0];
    if (!e || /\S/.test(e) || Array.from(e).some((t) => t != e[0]))
      throw new Error("Invalid indent unit: " + JSON.stringify(i[0]));
    return e;
  }
});
function zo(i) {
  let e = i.facet(Ih);
  return e.charCodeAt(0) == 9 ? i.tabSize * e.length : e.length;
}
function lr(i, e) {
  let t = "", n = i.tabSize, s = i.facet(Ih)[0];
  if (s == "	") {
    for (; e >= n; )
      t += "	", e -= n;
    s = " ";
  }
  for (let r = 0; r < e; r++)
    t += s;
  return t;
}
function Vh(i, e) {
  i instanceof pe && (i = new Tl(i));
  for (let n of i.state.facet(JS)) {
    let s = n(i, e);
    if (s !== void 0)
      return s;
  }
  let t = je(i.state);
  return t.length >= e ? ew(i, t, e) : null;
}
class Tl {
  /**
  Create an indent context.
  */
  constructor(e, t = {}) {
    this.state = e, this.options = t, this.unit = zo(e);
  }
  /**
  Get a description of the line at the given position, taking
  [simulated line
  breaks](https://codemirror.net/6/docs/ref/#language.IndentContext.constructor^options.simulateBreak)
  into account. If there is such a break at `pos`, the `bias`
  argument determines whether the part of the line line before or
  after the break is used.
  */
  lineAt(e, t = 1) {
    let n = this.state.doc.lineAt(e), { simulateBreak: s, simulateDoubleBreak: r } = this.options;
    return s != null && s >= n.from && s <= n.to ? r && s == e ? { text: "", from: e } : (t < 0 ? s < e : s <= e) ? { text: n.text.slice(s - n.from), from: s } : { text: n.text.slice(0, s - n.from), from: n.from } : n;
  }
  /**
  Get the text directly after `pos`, either the entire line
  or the next 100 characters, whichever is shorter.
  */
  textAfterPos(e, t = 1) {
    if (this.options.simulateDoubleBreak && e == this.options.simulateBreak)
      return "";
    let { text: n, from: s } = this.lineAt(e, t);
    return n.slice(e - s, Math.min(n.length, e + 100 - s));
  }
  /**
  Find the column for the given position.
  */
  column(e, t = 1) {
    let { text: n, from: s } = this.lineAt(e, t), r = this.countColumn(n, e - s), o = this.options.overrideIndentation ? this.options.overrideIndentation(s) : -1;
    return o > -1 && (r += o - this.countColumn(n, n.search(/\S|$/))), r;
  }
  /**
  Find the column position (taking tabs into account) of the given
  position in the given string.
  */
  countColumn(e, t = e.length) {
    return ds(e, this.state.tabSize, t);
  }
  /**
  Find the indentation column of the line at the given point.
  */
  lineIndent(e, t = 1) {
    let { text: n, from: s } = this.lineAt(e, t), r = this.options.overrideIndentation;
    if (r) {
      let o = r(s);
      if (o > -1)
        return o;
    }
    return this.countColumn(n, n.search(/\S|$/));
  }
  /**
  Returns the [simulated line
  break](https://codemirror.net/6/docs/ref/#language.IndentContext.constructor^options.simulateBreak)
  for this context, if any.
  */
  get simulatedBreak() {
    return this.options.simulateBreak || null;
  }
}
const Lh = /* @__PURE__ */ new ae();
function ew(i, e, t) {
  let n = e.resolveStack(t), s = e.resolveInner(t, -1).resolve(t, 0).enterUnfinishedNodesBefore(t);
  if (s != n.node) {
    let r = [];
    for (let o = s; o && !(o.from < n.node.from || o.to > n.node.to || o.from == n.node.from && o.type == n.node.type); o = o.parent)
      r.push(o);
    for (let o = r.length - 1; o >= 0; o--)
      n = { node: r[o], next: n };
  }
  return qg(n, i, t);
}
function qg(i, e, t) {
  for (let n = i; n; n = n.next) {
    let s = iw(n.node);
    if (s)
      return s(Bh.create(e, t, n));
  }
  return 0;
}
function tw(i) {
  return i.pos == i.options.simulateBreak && i.options.simulateDoubleBreak;
}
function iw(i) {
  let e = i.type.prop(Lh);
  if (e)
    return e;
  let t = i.firstChild, n;
  if (t && (n = t.type.prop(ae.closedBy))) {
    let s = i.lastChild, r = s && n.indexOf(s.name) > -1;
    return (o) => ow(o, !0, 1, void 0, r && !tw(o) ? s.from : void 0);
  }
  return i.parent == null ? nw : null;
}
function nw() {
  return 0;
}
class Bh extends Tl {
  constructor(e, t, n) {
    super(e.state, e.options), this.base = e, this.pos = t, this.context = n;
  }
  /**
  The syntax tree node to which the indentation strategy
  applies.
  */
  get node() {
    return this.context.node;
  }
  /**
  @internal
  */
  static create(e, t, n) {
    return new Bh(e, t, n);
  }
  /**
  Get the text directly after `this.pos`, either the entire line
  or the next 100 characters, whichever is shorter.
  */
  get textAfter() {
    return this.textAfterPos(this.pos);
  }
  /**
  Get the indentation at the reference line for `this.node`, which
  is the line on which it starts, unless there is a node that is
  _not_ a parent of this node covering the start of that line. If
  so, the line at the start of that node is tried, again skipping
  on if it is covered by another such node.
  */
  get baseIndent() {
    return this.baseIndentFor(this.node);
  }
  /**
  Get the indentation for the reference line of the given node
  (see [`baseIndent`](https://codemirror.net/6/docs/ref/#language.TreeIndentContext.baseIndent)).
  */
  baseIndentFor(e) {
    let t = this.state.doc.lineAt(e.from);
    for (; ; ) {
      let n = e.resolve(t.from);
      for (; n.parent && n.parent.from == n.from; )
        n = n.parent;
      if (sw(n, e))
        break;
      t = this.state.doc.lineAt(n.from);
    }
    return this.lineIndent(t.from);
  }
  /**
  Continue looking for indentations in the node's parent nodes,
  and return the result of that.
  */
  continue() {
    return qg(this.context.next, this.base, this.pos);
  }
}
function sw(i, e) {
  for (let t = e; t; t = t.parent)
    if (i == t)
      return !0;
  return !1;
}
function rw(i) {
  let e = i.node, t = e.childAfter(e.from), n = e.lastChild;
  if (!t)
    return null;
  let s = i.options.simulateBreak, r = i.state.doc.lineAt(t.from), o = s == null || s <= r.from ? r.to : Math.min(r.to, s);
  for (let l = t.to; ; ) {
    let a = e.childAfter(l);
    if (!a || a == n)
      return null;
    if (!a.type.isSkipped) {
      if (a.from >= o)
        return null;
      let c = /^ */.exec(r.text.slice(t.to - r.from))[0].length;
      return { from: t.from, to: t.to + c };
    }
    l = a.to;
  }
}
function ow(i, e, t, n, s) {
  let r = i.textAfter, o = r.match(/^\s*/)[0].length, l = n && r.slice(o, o + n.length) == n || s == i.pos + o, a = rw(i);
  return a ? l ? i.column(a.from) : i.column(a.to) : i.baseIndent + (l ? 0 : i.unit * t);
}
function od({ except: i, units: e = 1 } = {}) {
  return (t) => {
    let n = i && i.test(t.textAfter);
    return t.baseIndent + (n ? 0 : e * t.unit);
  };
}
const lw = 200;
function aw() {
  return pe.transactionFilter.of((i) => {
    if (!i.docChanged || !i.isUserEvent("input.type") && !i.isUserEvent("input.complete"))
      return i;
    let e = i.startState.languageDataAt("indentOnInput", i.startState.selection.main.head);
    if (!e.length)
      return i;
    let t = i.newDoc, { head: n } = i.newSelection.main, s = t.lineAt(n);
    if (n > s.from + lw)
      return i;
    let r = t.sliceString(s.from, n);
    if (!e.some((c) => c.test(r)))
      return i;
    let { state: o } = i, l = -1, a = [];
    for (let { head: c } of o.selection.ranges) {
      let h = o.doc.lineAt(c);
      if (h.from == l)
        continue;
      l = h.from;
      let f = Vh(o, h.from);
      if (f == null)
        continue;
      let u = /^\s*/.exec(h.text)[0], d = lr(o, f);
      u != d && a.push({ from: h.from, to: h.from + u.length, insert: d });
    }
    return a.length ? [i, { changes: a, sequential: !0 }] : i;
  });
}
const cw = /* @__PURE__ */ L.define(), Al = /* @__PURE__ */ new ae();
function Tc(i) {
  let e = i.firstChild, t = i.lastChild;
  return e && e.to < t.from ? { from: e.to, to: t.type.isError ? i.to : t.from } : null;
}
function hw(i, e, t) {
  let n = je(i);
  if (n.length < t)
    return null;
  let s = n.resolveStack(t, 1), r = null;
  for (let o = s; o; o = o.next) {
    let l = o.node;
    if (l.to <= t || l.from > t)
      continue;
    if (r && l.from < e)
      break;
    let a = l.type.prop(Al);
    if (a && (l.to < n.length - 50 || n.length == i.doc.length || !fw(l))) {
      let c = a(l, i);
      c && c.from <= t && c.from >= e && c.to > t && (r = c);
    }
  }
  return r;
}
function fw(i) {
  let e = i.lastChild;
  return e && e.to == i.to && e.type.isError;
}
function jo(i, e, t) {
  for (let n of i.facet(cw)) {
    let s = n(i, e, t);
    if (s)
      return s;
  }
  return hw(i, e, t);
}
function Hg(i, e) {
  let t = e.mapPos(i.from, 1), n = e.mapPos(i.to, -1);
  return t >= n ? void 0 : { from: t, to: n };
}
const $l = /* @__PURE__ */ ie.define({ map: Hg }), kr = /* @__PURE__ */ ie.define({ map: Hg });
function Ug(i) {
  let e = [];
  for (let { head: t } of i.state.selection.ranges)
    e.some((n) => n.from <= t && n.to >= t) || e.push(i.lineBlockAt(t));
  return e;
}
const Tn = /* @__PURE__ */ rt.define({
  create() {
    return Y.none;
  },
  update(i, e) {
    e.isUserEvent("delete") && e.changes.iterChangedRanges((t, n) => i = ld(i, t, n)), i = i.map(e.changes);
    for (let t of e.effects)
      if (t.is($l) && !uw(i, t.value.from, t.value.to)) {
        let { preparePlaceholder: n } = e.state.facet(jg), s = n ? Y.replace({ widget: new yw(n(e.state, t.value)) }) : ad;
        i = i.update({ add: [s.range(t.value.from, t.value.to)] });
      } else t.is(kr) && (i = i.update({
        filter: (n, s) => t.value.from != n || t.value.to != s,
        filterFrom: t.value.from,
        filterTo: t.value.to
      }));
    return e.selection && (i = ld(i, e.selection.main.head)), i;
  },
  provide: (i) => X.decorations.from(i),
  toJSON(i, e) {
    let t = [];
    return i.between(0, e.doc.length, (n, s) => {
      t.push(n, s);
    }), t;
  },
  fromJSON(i) {
    if (!Array.isArray(i) || i.length % 2)
      throw new RangeError("Invalid JSON for fold state");
    let e = [];
    for (let t = 0; t < i.length; ) {
      let n = i[t++], s = i[t++];
      if (typeof n != "number" || typeof s != "number")
        throw new RangeError("Invalid JSON for fold state");
      e.push(ad.range(n, s));
    }
    return Y.set(e, !0);
  }
});
function ld(i, e, t = e) {
  let n = !1;
  return i.between(e, t, (s, r) => {
    s < t && r > e && (n = !0);
  }), n ? i.update({
    filterFrom: e,
    filterTo: t,
    filter: (s, r) => s >= t || r <= e
  }) : i;
}
function Yo(i, e, t) {
  var n;
  let s = null;
  return (n = i.field(Tn, !1)) === null || n === void 0 || n.between(e, t, (r, o) => {
    (!s || s.from > r) && (s = { from: r, to: o });
  }), s;
}
function uw(i, e, t) {
  let n = !1;
  return i.between(e, e, (s, r) => {
    s == e && r == t && (n = !0);
  }), n;
}
function Gg(i, e) {
  return i.field(Tn, !1) ? e : e.concat(ie.appendConfig.of(Yg()));
}
const dw = (i) => {
  for (let e of Ug(i)) {
    let t = jo(i.state, e.from, e.to);
    if (t)
      return i.dispatch({ effects: Gg(i.state, [$l.of(t), zg(i, t)]) }), !0;
  }
  return !1;
}, pw = (i) => {
  if (!i.state.field(Tn, !1))
    return !1;
  let e = [];
  for (let t of Ug(i)) {
    let n = Yo(i.state, t.from, t.to);
    n && e.push(kr.of(n), zg(i, n, !1));
  }
  return e.length && i.dispatch({ effects: e }), e.length > 0;
};
function zg(i, e, t = !0) {
  let n = i.state.doc.lineAt(e.from).number, s = i.state.doc.lineAt(e.to).number;
  return X.announce.of(`${i.state.phrase(t ? "Folded lines" : "Unfolded lines")} ${n} ${i.state.phrase("to")} ${s}.`);
}
const mw = (i) => {
  let { state: e } = i, t = [];
  for (let n = 0; n < e.doc.length; ) {
    let s = i.lineBlockAt(n), r = jo(e, s.from, s.to);
    r && t.push($l.of(r)), n = (r ? i.lineBlockAt(r.to) : s).to + 1;
  }
  return t.length && i.dispatch({ effects: Gg(i.state, t) }), !!t.length;
}, gw = (i) => {
  let e = i.state.field(Tn, !1);
  if (!e || !e.size)
    return !1;
  let t = [];
  return e.between(0, i.state.doc.length, (n, s) => {
    t.push(kr.of({ from: n, to: s }));
  }), i.dispatch({ effects: t }), !0;
}, Ow = [
  { key: "Ctrl-Shift-[", mac: "Cmd-Alt-[", run: dw },
  { key: "Ctrl-Shift-]", mac: "Cmd-Alt-]", run: pw },
  { key: "Ctrl-Alt-[", run: mw },
  { key: "Ctrl-Alt-]", run: gw }
], bw = {
  placeholderDOM: null,
  preparePlaceholder: null,
  placeholderText: "…"
}, jg = /* @__PURE__ */ L.define({
  combine(i) {
    return wi(i, bw);
  }
});
function Yg(i) {
  return [Tn, Sw];
}
function Kg(i, e) {
  let { state: t } = i, n = t.facet(jg), s = (o) => {
    let l = i.lineBlockAt(i.posAtDOM(o.target)), a = Yo(i.state, l.from, l.to);
    a && i.dispatch({ effects: kr.of(a) }), o.preventDefault();
  };
  if (n.placeholderDOM)
    return n.placeholderDOM(i, s, e);
  let r = document.createElement("span");
  return r.textContent = n.placeholderText, r.setAttribute("aria-label", t.phrase("folded code")), r.title = t.phrase("unfold"), r.className = "cm-foldPlaceholder", r.onclick = s, r;
}
const ad = /* @__PURE__ */ Y.replace({ widget: /* @__PURE__ */ new class extends Vi {
  toDOM(i) {
    return Kg(i, null);
  }
}() });
class yw extends Vi {
  constructor(e) {
    super(), this.value = e;
  }
  eq(e) {
    return this.value == e.value;
  }
  toDOM(e) {
    return Kg(e, this.value);
  }
}
const xw = {
  openText: "⌄",
  closedText: "›",
  markerDOM: null,
  domEventHandlers: {},
  foldingChanged: () => !1
};
class ma extends _i {
  constructor(e, t) {
    super(), this.config = e, this.open = t;
  }
  eq(e) {
    return this.config == e.config && this.open == e.open;
  }
  toDOM(e) {
    if (this.config.markerDOM)
      return this.config.markerDOM(this.open);
    let t = document.createElement("span");
    return t.textContent = this.open ? this.config.openText : this.config.closedText, t.title = e.state.phrase(this.open ? "Fold line" : "Unfold line"), t;
  }
}
function vw(i = {}) {
  let e = { ...xw, ...i }, t = new ma(e, !0), n = new ma(e, !1), s = Ve.fromClass(class {
    constructor(o) {
      this.from = o.viewport.from, this.markers = this.buildMarkers(o);
    }
    update(o) {
      (o.docChanged || o.viewportChanged || o.startState.facet(tn) != o.state.facet(tn) || o.startState.field(Tn, !1) != o.state.field(Tn, !1) || je(o.startState) != je(o.state) || e.foldingChanged(o)) && (this.markers = this.buildMarkers(o.view));
    }
    buildMarkers(o) {
      let l = new Ni();
      for (let a of o.viewportLineBlocks) {
        let c = Yo(o.state, a.from, a.to) ? n : jo(o.state, a.from, a.to) ? t : null;
        c && l.add(a.from, a.from, c);
      }
      return l.finish();
    }
  }), { domEventHandlers: r } = e;
  return [
    s,
    wS({
      class: "cm-foldGutter",
      markers(o) {
        var l;
        return ((l = o.plugin(s)) === null || l === void 0 ? void 0 : l.markers) || ce.empty;
      },
      initialSpacer() {
        return new ma(e, !1);
      },
      domEventHandlers: {
        ...r,
        click: (o, l, a) => {
          if (r.click && r.click(o, l, a))
            return !0;
          let c = Yo(o.state, l.from, l.to);
          if (c)
            return o.dispatch({ effects: kr.of(c) }), !0;
          let h = jo(o.state, l.from, l.to);
          return h ? (o.dispatch({ effects: $l.of(h) }), !0) : !1;
        }
      }
    }),
    Yg()
  ];
}
const Sw = /* @__PURE__ */ X.baseTheme({
  ".cm-foldPlaceholder": {
    backgroundColor: "#eee",
    border: "1px solid #ddd",
    color: "#888",
    borderRadius: ".2em",
    margin: "0 1px",
    padding: "0 1px",
    cursor: "pointer"
  },
  ".cm-foldGutter span": {
    padding: "0 1px",
    cursor: "pointer"
  }
});
class Dl {
  constructor(e, t) {
    this.specs = e;
    let n;
    function s(l) {
      let a = Ki.newName();
      return (n || (n = /* @__PURE__ */ Object.create(null)))["." + a] = l, a;
    }
    const r = typeof t.all == "string" ? t.all : t.all ? s(t.all) : void 0, o = t.scope;
    this.scope = o instanceof Ht ? (l) => l.prop(Xn) == o.data : o ? (l) => l == o : void 0, this.style = Wg(e.map((l) => ({
      tag: l.tag,
      class: l.class || s(Object.assign({}, l, { tag: null }))
    })), {
      all: r
    }).style, this.module = n ? new Ki(n) : null, this.themeType = t.themeType;
  }
  /**
  Create a highlighter style that associates the given styles to
  the given tags. The specs must be objects that hold a style tag
  or array of tags in their `tag` property, and either a single
  `class` property providing a static CSS class (for highlighter
  that rely on external styling), or a
  [`style-mod`](https://github.com/marijnh/style-mod#documentation)-style
  set of CSS properties (which define the styling for those tags).
  
  The CSS rules created for a highlighter will be emitted in the
  order of the spec's properties. That means that for elements that
  have multiple tags associated with them, styles defined further
  down in the list will have a higher CSS precedence than styles
  defined earlier.
  */
  static define(e, t) {
    return new Dl(e, t || {});
  }
}
const Ac = /* @__PURE__ */ L.define(), Zg = /* @__PURE__ */ L.define({
  combine(i) {
    return i.length ? [i[0]] : null;
  }
});
function ga(i) {
  let e = i.facet(Ac);
  return e.length ? e : i.facet(Zg);
}
function ww(i, e) {
  let t = [kw], n;
  return i instanceof Dl && (i.module && t.push(X.styleModule.of(i.module)), n = i.themeType), e != null && e.fallback ? t.push(Zg.of(i)) : n ? t.push(Ac.computeN([X.darkTheme], (s) => s.facet(X.darkTheme) == (n == "dark") ? [i] : [])) : t.push(Ac.of(i)), t;
}
class Pw {
  constructor(e) {
    this.markCache = /* @__PURE__ */ Object.create(null), this.tree = je(e.state), this.decorations = this.buildDeco(e, ga(e.state)), this.decoratedTo = e.viewport.to;
  }
  update(e) {
    let t = je(e.state), n = ga(e.state), s = n != ga(e.startState), { viewport: r } = e.view, o = e.changes.mapPos(this.decoratedTo, 1);
    t.length < r.to && !s && t.type == this.tree.type && o >= r.to ? (this.decorations = this.decorations.map(e.changes), this.decoratedTo = o) : (t != this.tree || e.viewportChanged || s) && (this.tree = t, this.decorations = this.buildDeco(e.view, n), this.decoratedTo = r.to);
  }
  buildDeco(e, t) {
    if (!t || !this.tree.length)
      return Y.none;
    let n = new Ni();
    for (let { from: s, to: r } of e.visibleRanges)
      US(this.tree, t, (o, l, a) => {
        n.add(o, l, this.markCache[a] || (this.markCache[a] = Y.mark({ class: a })));
      }, s, r);
    return n.finish();
  }
}
const kw = /* @__PURE__ */ An.high(/* @__PURE__ */ Ve.fromClass(Pw, {
  decorations: (i) => i.decorations
})), Cw = /* @__PURE__ */ Dl.define([
  {
    tag: k.meta,
    color: "#404740"
  },
  {
    tag: k.link,
    textDecoration: "underline"
  },
  {
    tag: k.heading,
    textDecoration: "underline",
    fontWeight: "bold"
  },
  {
    tag: k.emphasis,
    fontStyle: "italic"
  },
  {
    tag: k.strong,
    fontWeight: "bold"
  },
  {
    tag: k.strikethrough,
    textDecoration: "line-through"
  },
  {
    tag: k.keyword,
    color: "#708"
  },
  {
    tag: [k.atom, k.bool, k.url, k.contentSeparator, k.labelName],
    color: "#219"
  },
  {
    tag: [k.literal, k.inserted],
    color: "#164"
  },
  {
    tag: [k.string, k.deleted],
    color: "#a11"
  },
  {
    tag: [k.regexp, k.escape, /* @__PURE__ */ k.special(k.string)],
    color: "#e40"
  },
  {
    tag: /* @__PURE__ */ k.definition(k.variableName),
    color: "#00f"
  },
  {
    tag: /* @__PURE__ */ k.local(k.variableName),
    color: "#30a"
  },
  {
    tag: [k.typeName, k.namespace],
    color: "#085"
  },
  {
    tag: k.className,
    color: "#167"
  },
  {
    tag: [/* @__PURE__ */ k.special(k.variableName), k.macroName],
    color: "#256"
  },
  {
    tag: /* @__PURE__ */ k.definition(k.propertyName),
    color: "#00c"
  },
  {
    tag: k.comment,
    color: "#940"
  },
  {
    tag: k.invalid,
    color: "#f00"
  }
]), Ew = /* @__PURE__ */ X.baseTheme({
  "&.cm-focused .cm-matchingBracket": { backgroundColor: "#328c8252" },
  "&.cm-focused .cm-nonmatchingBracket": { backgroundColor: "#bb555544" }
}), Jg = 1e4, eO = "()[]{}", tO = /* @__PURE__ */ L.define({
  combine(i) {
    return wi(i, {
      afterCursor: !0,
      brackets: eO,
      maxScanDistance: Jg,
      renderMatch: $w
    });
  }
}), Tw = /* @__PURE__ */ Y.mark({ class: "cm-matchingBracket" }), Aw = /* @__PURE__ */ Y.mark({ class: "cm-nonmatchingBracket" });
function $w(i) {
  let e = [], t = i.matched ? Tw : Aw;
  return e.push(t.range(i.start.from, i.start.to)), i.end && e.push(t.range(i.end.from, i.end.to)), e;
}
function cd(i) {
  let e = [], t = i.facet(tO);
  for (let n of i.selection.ranges) {
    if (!n.empty)
      continue;
    let s = yi(i, n.head, -1, t) || n.head > 0 && yi(i, n.head - 1, 1, t) || t.afterCursor && (yi(i, n.head, 1, t) || n.head < i.doc.length && yi(i, n.head + 1, -1, t));
    s && (e = e.concat(t.renderMatch(s, i)));
  }
  return Y.set(e, !0);
}
const Dw = /* @__PURE__ */ Ve.fromClass(class {
  constructor(i) {
    this.paused = !1, this.decorations = cd(i.state);
  }
  update(i) {
    (i.docChanged || i.selectionSet || this.paused) && (i.view.composing ? (this.decorations = this.decorations.map(i.changes), this.paused = !0) : (this.decorations = cd(i.state), this.paused = !1));
  }
}, {
  decorations: (i) => i.decorations
}), Nw = [
  Dw,
  Ew
];
function Rw(i = {}) {
  return [tO.of(i), Nw];
}
const iO = /* @__PURE__ */ new ae();
function $c(i, e, t) {
  let n = i.prop(e < 0 ? ae.openedBy : ae.closedBy);
  if (n)
    return n;
  if (i.name.length == 1) {
    let s = t.indexOf(i.name);
    if (s > -1 && s % 2 == (e < 0 ? 1 : 0))
      return [t[s + e]];
  }
  return null;
}
function Dc(i) {
  let e = i.type.prop(iO);
  return e ? e(i.node) : i;
}
function yi(i, e, t, n = {}) {
  let s = n.maxScanDistance || Jg, r = n.brackets || eO, o = je(i), l = o.resolveInner(e, t);
  for (let a = l; a; a = a.parent) {
    let c = $c(a.type, t, r);
    if (c && a.from < a.to) {
      let h = Dc(a);
      if (h && (t > 0 ? e >= h.from && e < h.to : e > h.from && e <= h.to))
        return _w(i, e, t, a, h, c, r);
    }
  }
  return Mw(i, e, t, o, l.type, s, r);
}
function _w(i, e, t, n, s, r, o) {
  let l = n.parent, a = { from: s.from, to: s.to }, c = 0, h = l == null ? void 0 : l.cursor();
  if (h && (t < 0 ? h.childBefore(n.from) : h.childAfter(n.to)))
    do
      if (t < 0 ? h.to <= n.from : h.from >= n.to) {
        if (c == 0 && r.indexOf(h.type.name) > -1 && h.from < h.to) {
          let f = Dc(h);
          return { start: a, end: f ? { from: f.from, to: f.to } : void 0, matched: !0 };
        } else if ($c(h.type, t, o))
          c++;
        else if ($c(h.type, -t, o)) {
          if (c == 0) {
            let f = Dc(h);
            return {
              start: a,
              end: f && f.from < f.to ? { from: f.from, to: f.to } : void 0,
              matched: !1
            };
          }
          c--;
        }
      }
    while (t < 0 ? h.prevSibling() : h.nextSibling());
  return { start: a, matched: !1 };
}
function Mw(i, e, t, n, s, r, o) {
  if (t < 0 ? !e : e == i.doc.length)
    return null;
  let l = t < 0 ? i.sliceDoc(e - 1, e) : i.sliceDoc(e, e + 1), a = o.indexOf(l);
  if (a < 0 || a % 2 == 0 != t > 0)
    return null;
  let c = { from: t < 0 ? e - 1 : e, to: t > 0 ? e + 1 : e }, h = i.doc.iterRange(e, t > 0 ? i.doc.length : 0), f = 0;
  for (let u = 0; !h.next().done && u <= r; ) {
    let d = h.value;
    t < 0 && (u += d.length);
    let p = e + u * t;
    for (let m = t > 0 ? 0 : d.length - 1, g = t > 0 ? d.length : -1; m != g; m += t) {
      let b = o.indexOf(d[m]);
      if (!(b < 0 || n.resolveInner(p + m, 1).type != s))
        if (b % 2 == 0 == t > 0)
          f++;
        else {
          if (f == 1)
            return { start: c, end: { from: p + m, to: p + m + 1 }, matched: b >> 1 == a >> 1 };
          f--;
        }
    }
    t > 0 && (u += d.length);
  }
  return h.done ? { start: c, matched: !1 } : null;
}
const Qw = /* @__PURE__ */ Object.create(null), hd = [wt.none], fd = [], ud = /* @__PURE__ */ Object.create(null), Iw = /* @__PURE__ */ Object.create(null);
for (let [i, e] of [
  ["variable", "variableName"],
  ["variable-2", "variableName.special"],
  ["string-2", "string.special"],
  ["def", "variableName.definition"],
  ["tag", "tagName"],
  ["attribute", "attributeName"],
  ["type", "typeName"],
  ["builtin", "variableName.standard"],
  ["qualifier", "modifier"],
  ["error", "invalid"],
  ["header", "heading"],
  ["property", "propertyName"]
])
  Iw[i] = /* @__PURE__ */ Vw(Qw, e);
function Oa(i, e) {
  fd.indexOf(i) > -1 || (fd.push(i), console.warn(e));
}
function Vw(i, e) {
  let t = [];
  for (let l of e.split(" ")) {
    let a = [];
    for (let c of l.split(".")) {
      let h = i[c] || k[c];
      h ? typeof h == "function" ? a.length ? a = a.map(h) : Oa(c, `Modifier ${c} used at start of tag`) : a.length ? Oa(c, `Tag ${c} used as modifier`) : a = Array.isArray(h) ? h : [h] : Oa(c, `Unknown highlighting tag ${c}`);
    }
    for (let c of a)
      t.push(c);
  }
  if (!t.length)
    return 0;
  let n = e.replace(/ /g, "_"), s = n + " " + t.map((l) => l.id), r = ud[s];
  if (r)
    return r.id;
  let o = ud[s] = wt.define({
    id: hd.length,
    name: n,
    props: [El({ [n]: t })]
  });
  return hd.push(o), o.id;
}
Te.RTL, Te.LTR;
const Lw = (i) => {
  let { state: e } = i, t = e.doc.lineAt(e.selection.main.from), n = Wh(i.state, t.from);
  return n.line ? Bw(i) : n.block ? Ww(i) : !1;
};
function Xh(i, e) {
  return ({ state: t, dispatch: n }) => {
    if (t.readOnly)
      return !1;
    let s = i(e, t);
    return s ? (n(t.update(s)), !0) : !1;
  };
}
const Bw = /* @__PURE__ */ Xh(
  Hw,
  0
  /* CommentOption.Toggle */
), Xw = /* @__PURE__ */ Xh(
  nO,
  0
  /* CommentOption.Toggle */
), Ww = /* @__PURE__ */ Xh(
  (i, e) => nO(i, e, qw(e)),
  0
  /* CommentOption.Toggle */
);
function Wh(i, e) {
  let t = i.languageDataAt("commentTokens", e, 1);
  return t.length ? t[0] : {};
}
const ks = 50;
function Fw(i, { open: e, close: t }, n, s) {
  let r = i.sliceDoc(n - ks, n), o = i.sliceDoc(s, s + ks), l = /\s*$/.exec(r)[0].length, a = /^\s*/.exec(o)[0].length, c = r.length - l;
  if (r.slice(c - e.length, c) == e && o.slice(a, a + t.length) == t)
    return {
      open: { pos: n - l, margin: l && 1 },
      close: { pos: s + a, margin: a && 1 }
    };
  let h, f;
  s - n <= 2 * ks ? h = f = i.sliceDoc(n, s) : (h = i.sliceDoc(n, n + ks), f = i.sliceDoc(s - ks, s));
  let u = /^\s*/.exec(h)[0].length, d = /\s*$/.exec(f)[0].length, p = f.length - d - t.length;
  return h.slice(u, u + e.length) == e && f.slice(p, p + t.length) == t ? {
    open: {
      pos: n + u + e.length,
      margin: /\s/.test(h.charAt(u + e.length)) ? 1 : 0
    },
    close: {
      pos: s - d - t.length,
      margin: /\s/.test(f.charAt(p - 1)) ? 1 : 0
    }
  } : null;
}
function qw(i) {
  let e = [];
  for (let t of i.selection.ranges) {
    let n = i.doc.lineAt(t.from), s = t.to <= n.to ? n : i.doc.lineAt(t.to);
    s.from > n.from && s.from == t.to && (s = t.to == n.to + 1 ? n : i.doc.lineAt(t.to - 1));
    let r = e.length - 1;
    r >= 0 && e[r].to > n.from ? e[r].to = s.to : e.push({ from: n.from + /^\s*/.exec(n.text)[0].length, to: s.to });
  }
  return e;
}
function nO(i, e, t = e.selection.ranges) {
  let n = t.map((r) => Wh(e, r.from).block);
  if (!n.every((r) => r))
    return null;
  let s = t.map((r, o) => Fw(e, n[o], r.from, r.to));
  if (i != 2 && !s.every((r) => r))
    return { changes: e.changes(t.map((r, o) => s[o] ? [] : [{ from: r.from, insert: n[o].open + " " }, { from: r.to, insert: " " + n[o].close }])) };
  if (i != 1 && s.some((r) => r)) {
    let r = [];
    for (let o = 0, l; o < s.length; o++)
      if (l = s[o]) {
        let a = n[o], { open: c, close: h } = l;
        r.push({ from: c.pos - a.open.length, to: c.pos + c.margin }, { from: h.pos - h.margin, to: h.pos + a.close.length });
      }
    return { changes: r };
  }
  return null;
}
function Hw(i, e, t = e.selection.ranges) {
  let n = [], s = -1;
  e: for (let { from: r, to: o } of t) {
    let l = n.length, a = 1e9, c;
    for (let h = r; h <= o; ) {
      let f = e.doc.lineAt(h);
      if (c == null && (c = Wh(e, f.from).line, !c))
        continue e;
      if (f.from > s && (r == o || o > f.from)) {
        s = f.from;
        let u = /^\s*/.exec(f.text)[0].length, d = u == f.length, p = f.text.slice(u, u + c.length) == c ? u : -1;
        u < f.text.length && u < a && (a = u), n.push({ line: f, comment: p, token: c, indent: u, empty: d, single: !1 });
      }
      h = f.to + 1;
    }
    if (a < 1e9)
      for (let h = l; h < n.length; h++)
        n[h].indent < n[h].line.text.length && (n[h].indent = a);
    n.length == l + 1 && (n[l].single = !0);
  }
  if (i != 2 && n.some((r) => r.comment < 0 && (!r.empty || r.single))) {
    let r = [];
    for (let { line: l, token: a, indent: c, empty: h, single: f } of n)
      (f || !h) && r.push({ from: l.from + c, insert: a + " " });
    let o = e.changes(r);
    return { changes: o, selection: e.selection.map(o, 1) };
  } else if (i != 1 && n.some((r) => r.comment >= 0)) {
    let r = [];
    for (let { line: o, comment: l, token: a } of n)
      if (l >= 0) {
        let c = o.from + l, h = c + a.length;
        o.text[h - o.from] == " " && h++, r.push({ from: c, to: h });
      }
    return { changes: r };
  }
  return null;
}
const Nc = /* @__PURE__ */ Ii.define(), Uw = /* @__PURE__ */ Ii.define(), Gw = /* @__PURE__ */ L.define(), sO = /* @__PURE__ */ L.define({
  combine(i) {
    return wi(i, {
      minDepth: 100,
      newGroupDelay: 500,
      joinToEvent: (e, t) => t
    }, {
      minDepth: Math.max,
      newGroupDelay: Math.min,
      joinToEvent: (e, t) => (n, s) => e(n, s) || t(n, s)
    });
  }
}), rO = /* @__PURE__ */ rt.define({
  create() {
    return xi.empty;
  },
  update(i, e) {
    let t = e.state.facet(sO), n = e.annotation(Nc);
    if (n) {
      let a = vt.fromTransaction(e, n.selection), c = n.side, h = c == 0 ? i.undone : i.done;
      return a ? h = Ko(h, h.length, t.minDepth, a) : h = aO(h, e.startState.selection), new xi(c == 0 ? n.rest : h, c == 0 ? h : n.rest);
    }
    let s = e.annotation(Uw);
    if ((s == "full" || s == "before") && (i = i.isolate()), e.annotation(Ue.addToHistory) === !1)
      return e.changes.empty ? i : i.addMapping(e.changes.desc);
    let r = vt.fromTransaction(e), o = e.annotation(Ue.time), l = e.annotation(Ue.userEvent);
    return r ? i = i.addChanges(r, o, l, t, e) : e.selection && (i = i.addSelection(e.startState.selection, o, l, t.newGroupDelay)), (s == "full" || s == "after") && (i = i.isolate()), i;
  },
  toJSON(i) {
    return { done: i.done.map((e) => e.toJSON()), undone: i.undone.map((e) => e.toJSON()) };
  },
  fromJSON(i) {
    return new xi(i.done.map(vt.fromJSON), i.undone.map(vt.fromJSON));
  }
});
function zw(i = {}) {
  return [
    rO,
    sO.of(i),
    X.domEventHandlers({
      beforeinput(e, t) {
        let n = e.inputType == "historyUndo" ? oO : e.inputType == "historyRedo" ? Rc : null;
        return n ? (e.preventDefault(), n(t)) : !1;
      }
    })
  ];
}
function Nl(i, e) {
  return function({ state: t, dispatch: n }) {
    if (!e && t.readOnly)
      return !1;
    let s = t.field(rO, !1);
    if (!s)
      return !1;
    let r = s.pop(i, t, e);
    return r ? (n(r), !0) : !1;
  };
}
const oO = /* @__PURE__ */ Nl(0, !1), Rc = /* @__PURE__ */ Nl(1, !1), jw = /* @__PURE__ */ Nl(0, !0), Yw = /* @__PURE__ */ Nl(1, !0);
class vt {
  constructor(e, t, n, s, r) {
    this.changes = e, this.effects = t, this.mapped = n, this.startSelection = s, this.selectionsAfter = r;
  }
  setSelAfter(e) {
    return new vt(this.changes, this.effects, this.mapped, this.startSelection, e);
  }
  toJSON() {
    var e, t, n;
    return {
      changes: (e = this.changes) === null || e === void 0 ? void 0 : e.toJSON(),
      mapped: (t = this.mapped) === null || t === void 0 ? void 0 : t.toJSON(),
      startSelection: (n = this.startSelection) === null || n === void 0 ? void 0 : n.toJSON(),
      selectionsAfter: this.selectionsAfter.map((s) => s.toJSON())
    };
  }
  static fromJSON(e) {
    return new vt(e.changes && Fe.fromJSON(e.changes), [], e.mapped && vi.fromJSON(e.mapped), e.startSelection && P.fromJSON(e.startSelection), e.selectionsAfter.map(P.fromJSON));
  }
  // This does not check `addToHistory` and such, it assumes the
  // transaction needs to be converted to an item. Returns null when
  // there are no changes or effects in the transaction.
  static fromTransaction(e, t) {
    let n = It;
    for (let s of e.startState.facet(Gw)) {
      let r = s(e);
      r.length && (n = n.concat(r));
    }
    return !n.length && e.changes.empty ? null : new vt(e.changes.invert(e.startState.doc), n, void 0, t || e.startState.selection, It);
  }
  static selection(e) {
    return new vt(void 0, It, void 0, void 0, e);
  }
}
function Ko(i, e, t, n) {
  let s = e + 1 > t + 20 ? e - t - 1 : 0, r = i.slice(s, e);
  return r.push(n), r;
}
function Kw(i, e) {
  let t = [], n = !1;
  return i.iterChangedRanges((s, r) => t.push(s, r)), e.iterChangedRanges((s, r, o, l) => {
    for (let a = 0; a < t.length; ) {
      let c = t[a++], h = t[a++];
      l >= c && o <= h && (n = !0);
    }
  }), n;
}
function Zw(i, e) {
  return i.ranges.length == e.ranges.length && i.ranges.filter((t, n) => t.empty != e.ranges[n].empty).length === 0;
}
function lO(i, e) {
  return i.length ? e.length ? i.concat(e) : i : e;
}
const It = [], Jw = 200;
function aO(i, e) {
  if (i.length) {
    let t = i[i.length - 1], n = t.selectionsAfter.slice(Math.max(0, t.selectionsAfter.length - Jw));
    return n.length && n[n.length - 1].eq(e) ? i : (n.push(e), Ko(i, i.length - 1, 1e9, t.setSelAfter(n)));
  } else
    return [vt.selection([e])];
}
function eP(i) {
  let e = i[i.length - 1], t = i.slice();
  return t[i.length - 1] = e.setSelAfter(e.selectionsAfter.slice(0, e.selectionsAfter.length - 1)), t;
}
function ba(i, e) {
  if (!i.length)
    return i;
  let t = i.length, n = It;
  for (; t; ) {
    let s = tP(i[t - 1], e, n);
    if (s.changes && !s.changes.empty || s.effects.length) {
      let r = i.slice(0, t);
      return r[t - 1] = s, r;
    } else
      e = s.mapped, t--, n = s.selectionsAfter;
  }
  return n.length ? [vt.selection(n)] : It;
}
function tP(i, e, t) {
  let n = lO(i.selectionsAfter.length ? i.selectionsAfter.map((l) => l.map(e)) : It, t);
  if (!i.changes)
    return vt.selection(n);
  let s = i.changes.map(e), r = e.mapDesc(i.changes, !0), o = i.mapped ? i.mapped.composeDesc(r) : r;
  return new vt(s, ie.mapEffects(i.effects, e), o, i.startSelection.map(r), n);
}
const iP = /^(input\.type|delete)($|\.)/;
class xi {
  constructor(e, t, n = 0, s = void 0) {
    this.done = e, this.undone = t, this.prevTime = n, this.prevUserEvent = s;
  }
  isolate() {
    return this.prevTime ? new xi(this.done, this.undone) : this;
  }
  addChanges(e, t, n, s, r) {
    let o = this.done, l = o[o.length - 1];
    return l && l.changes && !l.changes.empty && e.changes && (!n || iP.test(n)) && (!l.selectionsAfter.length && t - this.prevTime < s.newGroupDelay && s.joinToEvent(r, Kw(l.changes, e.changes)) || // For compose (but not compose.start) events, always join with previous event
    n == "input.type.compose") ? o = Ko(o, o.length - 1, s.minDepth, new vt(e.changes.compose(l.changes), lO(ie.mapEffects(e.effects, l.changes), l.effects), l.mapped, l.startSelection, It)) : o = Ko(o, o.length, s.minDepth, e), new xi(o, It, t, n);
  }
  addSelection(e, t, n, s) {
    let r = this.done.length ? this.done[this.done.length - 1].selectionsAfter : It;
    return r.length > 0 && t - this.prevTime < s && n == this.prevUserEvent && n && /^select($|\.)/.test(n) && Zw(r[r.length - 1], e) ? this : new xi(aO(this.done, e), this.undone, t, n);
  }
  addMapping(e) {
    return new xi(ba(this.done, e), ba(this.undone, e), this.prevTime, this.prevUserEvent);
  }
  pop(e, t, n) {
    let s = e == 0 ? this.done : this.undone;
    if (s.length == 0)
      return null;
    let r = s[s.length - 1], o = r.selectionsAfter[0] || (r.startSelection ? r.startSelection.map(r.changes.invertedDesc, 1) : t.selection);
    if (n && r.selectionsAfter.length)
      return t.update({
        selection: r.selectionsAfter[r.selectionsAfter.length - 1],
        annotations: Nc.of({ side: e, rest: eP(s), selection: o }),
        userEvent: e == 0 ? "select.undo" : "select.redo",
        scrollIntoView: !0
      });
    if (r.changes) {
      let l = s.length == 1 ? It : s.slice(0, s.length - 1);
      return r.mapped && (l = ba(l, r.mapped)), t.update({
        changes: r.changes,
        selection: r.startSelection,
        effects: r.effects,
        annotations: Nc.of({ side: e, rest: l, selection: o }),
        filter: !1,
        userEvent: e == 0 ? "undo" : "redo",
        scrollIntoView: !0
      });
    } else
      return null;
  }
}
xi.empty = /* @__PURE__ */ new xi(It, It);
const nP = [
  { key: "Mod-z", run: oO, preventDefault: !0 },
  { key: "Mod-y", mac: "Mod-Shift-z", run: Rc, preventDefault: !0 },
  { linux: "Ctrl-Shift-z", run: Rc, preventDefault: !0 },
  { key: "Mod-u", run: jw, preventDefault: !0 },
  { key: "Alt-u", mac: "Mod-Shift-u", run: Yw, preventDefault: !0 }
];
function ps(i, e) {
  return P.create(i.ranges.map(e), i.mainIndex);
}
function ei(i, e) {
  return i.update({ selection: e, scrollIntoView: !0, userEvent: "select" });
}
function ti({ state: i, dispatch: e }, t) {
  let n = ps(i.selection, t);
  return n.eq(i.selection, !0) ? !1 : (e(ei(i, n)), !0);
}
function Rl(i, e) {
  return P.cursor(e ? i.to : i.from);
}
function cO(i, e) {
  return ti(i, (t) => t.empty ? i.moveByChar(t, e) : Rl(t, e));
}
function ot(i) {
  return i.textDirectionAt(i.state.selection.main.head) == Te.LTR;
}
const hO = (i) => cO(i, !ot(i)), fO = (i) => cO(i, ot(i));
function uO(i, e) {
  return ti(i, (t) => t.empty ? i.moveByGroup(t, e) : Rl(t, e));
}
const sP = (i) => uO(i, !ot(i)), rP = (i) => uO(i, ot(i));
function oP(i, e, t) {
  if (e.type.prop(t))
    return !0;
  let n = e.to - e.from;
  return n && (n > 2 || /[^\s,.;:]/.test(i.sliceDoc(e.from, e.to))) || e.firstChild;
}
function _l(i, e, t) {
  let n = je(i).resolveInner(e.head), s = t ? ae.closedBy : ae.openedBy;
  for (let a = e.head; ; ) {
    let c = t ? n.childAfter(a) : n.childBefore(a);
    if (!c)
      break;
    oP(i, c, s) ? n = c : a = t ? c.to : c.from;
  }
  let r = n.type.prop(s), o, l;
  return r && (o = t ? yi(i, n.from, 1) : yi(i, n.to, -1)) && o.matched ? l = t ? o.end.to : o.end.from : l = t ? n.to : n.from, P.cursor(l, t ? -1 : 1);
}
const lP = (i) => ti(i, (e) => _l(i.state, e, !ot(i))), aP = (i) => ti(i, (e) => _l(i.state, e, ot(i)));
function dO(i, e) {
  return ti(i, (t) => {
    if (!t.empty)
      return Rl(t, e);
    let n = i.moveVertically(t, e);
    return n.head != t.head ? n : i.moveToLineBoundary(t, e);
  });
}
const pO = (i) => dO(i, !1), mO = (i) => dO(i, !0);
function gO(i) {
  let e = i.scrollDOM.clientHeight < i.scrollDOM.scrollHeight - 2, t = 0, n = 0, s;
  if (e) {
    for (let r of i.state.facet(X.scrollMargins)) {
      let o = r(i);
      o != null && o.top && (t = Math.max(o == null ? void 0 : o.top, t)), o != null && o.bottom && (n = Math.max(o == null ? void 0 : o.bottom, n));
    }
    s = i.scrollDOM.clientHeight - t - n;
  } else
    s = (i.dom.ownerDocument.defaultView || window).innerHeight;
  return {
    marginTop: t,
    marginBottom: n,
    selfScroll: e,
    height: Math.max(i.defaultLineHeight, s - 5)
  };
}
function OO(i, e) {
  let t = gO(i), { state: n } = i, s = ps(n.selection, (o) => o.empty ? i.moveVertically(o, e, t.height) : Rl(o, e));
  if (s.eq(n.selection))
    return !1;
  let r;
  if (t.selfScroll) {
    let o = i.coordsAtPos(n.selection.main.head), l = i.scrollDOM.getBoundingClientRect(), a = l.top + t.marginTop, c = l.bottom - t.marginBottom;
    o && o.top > a && o.bottom < c && (r = X.scrollIntoView(s.main.head, { y: "start", yMargin: o.top - a }));
  }
  return i.dispatch(ei(n, s), { effects: r }), !0;
}
const dd = (i) => OO(i, !1), _c = (i) => OO(i, !0);
function sn(i, e, t) {
  let n = i.lineBlockAt(e.head), s = i.moveToLineBoundary(e, t);
  if (s.head == e.head && s.head != (t ? n.to : n.from) && (s = i.moveToLineBoundary(e, t, !1)), !t && s.head == n.from && n.length) {
    let r = /^\s*/.exec(i.state.sliceDoc(n.from, Math.min(n.from + 100, n.to)))[0].length;
    r && e.head != n.from + r && (s = P.cursor(n.from + r));
  }
  return s;
}
const cP = (i) => ti(i, (e) => sn(i, e, !0)), hP = (i) => ti(i, (e) => sn(i, e, !1)), fP = (i) => ti(i, (e) => sn(i, e, !ot(i))), uP = (i) => ti(i, (e) => sn(i, e, ot(i))), dP = (i) => ti(i, (e) => P.cursor(i.lineBlockAt(e.head).from, 1)), pP = (i) => ti(i, (e) => P.cursor(i.lineBlockAt(e.head).to, -1));
function mP(i, e, t) {
  let n = !1, s = ps(i.selection, (r) => {
    let o = yi(i, r.head, -1) || yi(i, r.head, 1) || r.head > 0 && yi(i, r.head - 1, 1) || r.head < i.doc.length && yi(i, r.head + 1, -1);
    if (!o || !o.end)
      return r;
    n = !0;
    let l = o.start.from == r.head ? o.end.to : o.end.from;
    return P.cursor(l);
  });
  return n ? (e(ei(i, s)), !0) : !1;
}
const gP = ({ state: i, dispatch: e }) => mP(i, e);
function Bt(i, e) {
  let t = ps(i.state.selection, (n) => {
    let s = e(n);
    return P.range(n.anchor, s.head, s.goalColumn, s.bidiLevel || void 0, s.assoc);
  });
  return t.eq(i.state.selection) ? !1 : (i.dispatch(ei(i.state, t)), !0);
}
function bO(i, e) {
  return Bt(i, (t) => i.moveByChar(t, e));
}
const yO = (i) => bO(i, !ot(i)), xO = (i) => bO(i, ot(i));
function vO(i, e) {
  return Bt(i, (t) => i.moveByGroup(t, e));
}
const OP = (i) => vO(i, !ot(i)), bP = (i) => vO(i, ot(i)), yP = (i) => Bt(i, (e) => _l(i.state, e, !ot(i))), xP = (i) => Bt(i, (e) => _l(i.state, e, ot(i)));
function SO(i, e) {
  return Bt(i, (t) => i.moveVertically(t, e));
}
const wO = (i) => SO(i, !1), PO = (i) => SO(i, !0);
function kO(i, e) {
  return Bt(i, (t) => i.moveVertically(t, e, gO(i).height));
}
const pd = (i) => kO(i, !1), md = (i) => kO(i, !0), vP = (i) => Bt(i, (e) => sn(i, e, !0)), SP = (i) => Bt(i, (e) => sn(i, e, !1)), wP = (i) => Bt(i, (e) => sn(i, e, !ot(i))), PP = (i) => Bt(i, (e) => sn(i, e, ot(i))), kP = (i) => Bt(i, (e) => P.cursor(i.lineBlockAt(e.head).from)), CP = (i) => Bt(i, (e) => P.cursor(i.lineBlockAt(e.head).to)), gd = ({ state: i, dispatch: e }) => (e(ei(i, { anchor: 0 })), !0), Od = ({ state: i, dispatch: e }) => (e(ei(i, { anchor: i.doc.length })), !0), bd = ({ state: i, dispatch: e }) => (e(ei(i, { anchor: i.selection.main.anchor, head: 0 })), !0), yd = ({ state: i, dispatch: e }) => (e(ei(i, { anchor: i.selection.main.anchor, head: i.doc.length })), !0), EP = ({ state: i, dispatch: e }) => (e(i.update({ selection: { anchor: 0, head: i.doc.length }, userEvent: "select" })), !0), TP = ({ state: i, dispatch: e }) => {
  let t = Ml(i).map(({ from: n, to: s }) => P.range(n, Math.min(s + 1, i.doc.length)));
  return e(i.update({ selection: P.create(t), userEvent: "select" })), !0;
}, AP = ({ state: i, dispatch: e }) => {
  let t = ps(i.selection, (n) => {
    let s = je(i), r = s.resolveStack(n.from, 1);
    if (n.empty) {
      let o = s.resolveStack(n.from, -1);
      o.node.from >= r.node.from && o.node.to <= r.node.to && (r = o);
    }
    for (let o = r; o; o = o.next) {
      let { node: l } = o;
      if ((l.from < n.from && l.to >= n.to || l.to > n.to && l.from <= n.from) && o.next)
        return P.range(l.to, l.from);
    }
    return n;
  });
  return t.eq(i.selection) ? !1 : (e(ei(i, t)), !0);
};
function CO(i, e) {
  let { state: t } = i, n = t.selection, s = t.selection.ranges.slice();
  for (let r of t.selection.ranges) {
    let o = t.doc.lineAt(r.head);
    if (e ? o.to < i.state.doc.length : o.from > 0)
      for (let l = r; ; ) {
        let a = i.moveVertically(l, e);
        if (a.head < o.from || a.head > o.to) {
          s.some((c) => c.head == a.head) || s.push(a);
          break;
        } else {
          if (a.head == l.head)
            break;
          l = a;
        }
      }
  }
  return s.length == n.ranges.length ? !1 : (i.dispatch(ei(t, P.create(s, s.length - 1))), !0);
}
const $P = (i) => CO(i, !1), DP = (i) => CO(i, !0), NP = ({ state: i, dispatch: e }) => {
  let t = i.selection, n = null;
  return t.ranges.length > 1 ? n = P.create([t.main]) : t.main.empty || (n = P.create([P.cursor(t.main.head)])), n ? (e(ei(i, n)), !0) : !1;
};
function Cr(i, e) {
  if (i.state.readOnly)
    return !1;
  let t = "delete.selection", { state: n } = i, s = n.changeByRange((r) => {
    let { from: o, to: l } = r;
    if (o == l) {
      let a = e(r);
      a < o ? (t = "delete.backward", a = Yr(i, a, !1)) : a > o && (t = "delete.forward", a = Yr(i, a, !0)), o = Math.min(o, a), l = Math.max(l, a);
    } else
      o = Yr(i, o, !1), l = Yr(i, l, !0);
    return o == l ? { range: r } : { changes: { from: o, to: l }, range: P.cursor(o, o < r.head ? -1 : 1) };
  });
  return s.changes.empty ? !1 : (i.dispatch(n.update(s, {
    scrollIntoView: !0,
    userEvent: t,
    effects: t == "delete.selection" ? X.announce.of(n.phrase("Selection deleted")) : void 0
  })), !0);
}
function Yr(i, e, t) {
  if (i instanceof X)
    for (let n of i.state.facet(X.atomicRanges).map((s) => s(i)))
      n.between(e, e, (s, r) => {
        s < e && r > e && (e = t ? r : s);
      });
  return e;
}
const EO = (i, e, t) => Cr(i, (n) => {
  let s = n.from, { state: r } = i, o = r.doc.lineAt(s), l, a;
  if (t && !e && s > o.from && s < o.from + 200 && !/[^ \t]/.test(l = o.text.slice(0, s - o.from))) {
    if (l[l.length - 1] == "	")
      return s - 1;
    let c = ds(l, r.tabSize), h = c % zo(r) || zo(r);
    for (let f = 0; f < h && l[l.length - 1 - f] == " "; f++)
      s--;
    a = s;
  } else
    a = ze(o.text, s - o.from, e, e) + o.from, a == s && o.number != (e ? r.doc.lines : 1) ? a += e ? 1 : -1 : !e && /[\ufe00-\ufe0f]/.test(o.text.slice(a - o.from, s - o.from)) && (a = ze(o.text, a - o.from, !1, !1) + o.from);
  return a;
}), Mc = (i) => EO(i, !1, !0), TO = (i) => EO(i, !0, !1), AO = (i, e) => Cr(i, (t) => {
  let n = t.head, { state: s } = i, r = s.doc.lineAt(n), o = s.charCategorizer(n);
  for (let l = null; ; ) {
    if (n == (e ? r.to : r.from)) {
      n == t.head && r.number != (e ? s.doc.lines : 1) && (n += e ? 1 : -1);
      break;
    }
    let a = ze(r.text, n - r.from, e) + r.from, c = r.text.slice(Math.min(n, a) - r.from, Math.max(n, a) - r.from), h = o(c);
    if (l != null && h != l)
      break;
    (c != " " || n != t.head) && (l = h), n = a;
  }
  return n;
}), $O = (i) => AO(i, !1), RP = (i) => AO(i, !0), _P = (i) => Cr(i, (e) => {
  let t = i.lineBlockAt(e.head).to;
  return e.head < t ? t : Math.min(i.state.doc.length, e.head + 1);
}), MP = (i) => Cr(i, (e) => {
  let t = i.moveToLineBoundary(e, !1).head;
  return e.head > t ? t : Math.max(0, e.head - 1);
}), QP = (i) => Cr(i, (e) => {
  let t = i.moveToLineBoundary(e, !0).head;
  return e.head < t ? t : Math.min(i.state.doc.length, e.head + 1);
}), IP = ({ state: i, dispatch: e }) => {
  if (i.readOnly)
    return !1;
  let t = i.changeByRange((n) => ({
    changes: { from: n.from, to: n.to, insert: me.of(["", ""]) },
    range: P.cursor(n.from)
  }));
  return e(i.update(t, { scrollIntoView: !0, userEvent: "input" })), !0;
}, VP = ({ state: i, dispatch: e }) => {
  if (i.readOnly)
    return !1;
  let t = i.changeByRange((n) => {
    if (!n.empty || n.from == 0 || n.from == i.doc.length)
      return { range: n };
    let s = n.from, r = i.doc.lineAt(s), o = s == r.from ? s - 1 : ze(r.text, s - r.from, !1) + r.from, l = s == r.to ? s + 1 : ze(r.text, s - r.from, !0) + r.from;
    return {
      changes: { from: o, to: l, insert: i.doc.slice(s, l).append(i.doc.slice(o, s)) },
      range: P.cursor(l)
    };
  });
  return t.changes.empty ? !1 : (e(i.update(t, { scrollIntoView: !0, userEvent: "move.character" })), !0);
};
function Ml(i) {
  let e = [], t = -1;
  for (let n of i.selection.ranges) {
    let s = i.doc.lineAt(n.from), r = i.doc.lineAt(n.to);
    if (!n.empty && n.to == r.from && (r = i.doc.lineAt(n.to - 1)), t >= s.number) {
      let o = e[e.length - 1];
      o.to = r.to, o.ranges.push(n);
    } else
      e.push({ from: s.from, to: r.to, ranges: [n] });
    t = r.number + 1;
  }
  return e;
}
function DO(i, e, t) {
  if (i.readOnly)
    return !1;
  let n = [], s = [];
  for (let r of Ml(i)) {
    if (t ? r.to == i.doc.length : r.from == 0)
      continue;
    let o = i.doc.lineAt(t ? r.to + 1 : r.from - 1), l = o.length + 1;
    if (t) {
      n.push({ from: r.to, to: o.to }, { from: r.from, insert: o.text + i.lineBreak });
      for (let a of r.ranges)
        s.push(P.range(Math.min(i.doc.length, a.anchor + l), Math.min(i.doc.length, a.head + l)));
    } else {
      n.push({ from: o.from, to: r.from }, { from: r.to, insert: i.lineBreak + o.text });
      for (let a of r.ranges)
        s.push(P.range(a.anchor - l, a.head - l));
    }
  }
  return n.length ? (e(i.update({
    changes: n,
    scrollIntoView: !0,
    selection: P.create(s, i.selection.mainIndex),
    userEvent: "move.line"
  })), !0) : !1;
}
const LP = ({ state: i, dispatch: e }) => DO(i, e, !1), BP = ({ state: i, dispatch: e }) => DO(i, e, !0);
function NO(i, e, t) {
  if (i.readOnly)
    return !1;
  let n = [];
  for (let r of Ml(i))
    t ? n.push({ from: r.from, insert: i.doc.slice(r.from, r.to) + i.lineBreak }) : n.push({ from: r.to, insert: i.lineBreak + i.doc.slice(r.from, r.to) });
  let s = i.changes(n);
  return e(i.update({
    changes: s,
    selection: i.selection.map(s, t ? 1 : -1),
    scrollIntoView: !0,
    userEvent: "input.copyline"
  })), !0;
}
const XP = ({ state: i, dispatch: e }) => NO(i, e, !1), WP = ({ state: i, dispatch: e }) => NO(i, e, !0), FP = (i) => {
  if (i.state.readOnly)
    return !1;
  let { state: e } = i, t = e.changes(Ml(e).map(({ from: s, to: r }) => (s > 0 ? s-- : r < e.doc.length && r++, { from: s, to: r }))), n = ps(e.selection, (s) => {
    let r;
    if (i.lineWrapping) {
      let o = i.lineBlockAt(s.head), l = i.coordsAtPos(s.head, s.assoc || 1);
      l && (r = o.bottom + i.documentTop - l.bottom + i.defaultLineHeight / 2);
    }
    return i.moveVertically(s, !0, r);
  }).map(t);
  return i.dispatch({ changes: t, selection: n, scrollIntoView: !0, userEvent: "delete.line" }), !0;
};
function qP(i, e) {
  if (/\(\)|\[\]|\{\}/.test(i.sliceDoc(e - 1, e + 1)))
    return { from: e, to: e };
  let t = je(i).resolveInner(e), n = t.childBefore(e), s = t.childAfter(e), r;
  return n && s && n.to <= e && s.from >= e && (r = n.type.prop(ae.closedBy)) && r.indexOf(s.name) > -1 && i.doc.lineAt(n.to).from == i.doc.lineAt(s.from).from && !/\S/.test(i.sliceDoc(n.to, s.from)) ? { from: n.to, to: s.from } : null;
}
const xd = /* @__PURE__ */ RO(!1), HP = /* @__PURE__ */ RO(!0);
function RO(i) {
  return ({ state: e, dispatch: t }) => {
    if (e.readOnly)
      return !1;
    let n = e.changeByRange((s) => {
      let { from: r, to: o } = s, l = e.doc.lineAt(r), a = !i && r == o && qP(e, r);
      i && (r = o = (o <= l.to ? l : e.doc.lineAt(o)).to);
      let c = new Tl(e, { simulateBreak: r, simulateDoubleBreak: !!a }), h = Vh(c, r);
      for (h == null && (h = ds(/^\s*/.exec(e.doc.lineAt(r).text)[0], e.tabSize)); o < l.to && /\s/.test(l.text[o - l.from]); )
        o++;
      a ? { from: r, to: o } = a : r > l.from && r < l.from + 100 && !/\S/.test(l.text.slice(0, r)) && (r = l.from);
      let f = ["", lr(e, h)];
      return a && f.push(lr(e, c.lineIndent(l.from, -1))), {
        changes: { from: r, to: o, insert: me.of(f) },
        range: P.cursor(r + 1 + f[1].length)
      };
    });
    return t(e.update(n, { scrollIntoView: !0, userEvent: "input" })), !0;
  };
}
function Fh(i, e) {
  let t = -1;
  return i.changeByRange((n) => {
    let s = [];
    for (let o = n.from; o <= n.to; ) {
      let l = i.doc.lineAt(o);
      l.number > t && (n.empty || n.to > l.from) && (e(l, s, n), t = l.number), o = l.to + 1;
    }
    let r = i.changes(s);
    return {
      changes: s,
      range: P.range(r.mapPos(n.anchor, 1), r.mapPos(n.head, 1))
    };
  });
}
const UP = ({ state: i, dispatch: e }) => {
  if (i.readOnly)
    return !1;
  let t = /* @__PURE__ */ Object.create(null), n = new Tl(i, { overrideIndentation: (r) => {
    let o = t[r];
    return o ?? -1;
  } }), s = Fh(i, (r, o, l) => {
    let a = Vh(n, r.from);
    if (a == null)
      return;
    /\S/.test(r.text) || (a = 0);
    let c = /^\s*/.exec(r.text)[0], h = lr(i, a);
    (c != h || l.from < r.from + c.length) && (t[r.from] = a, o.push({ from: r.from, to: r.from + c.length, insert: h }));
  });
  return s.changes.empty || e(i.update(s, { userEvent: "indent" })), !0;
}, GP = ({ state: i, dispatch: e }) => i.readOnly ? !1 : (e(i.update(Fh(i, (t, n) => {
  n.push({ from: t.from, insert: i.facet(Ih) });
}), { userEvent: "input.indent" })), !0), zP = ({ state: i, dispatch: e }) => i.readOnly ? !1 : (e(i.update(Fh(i, (t, n) => {
  let s = /^\s*/.exec(t.text)[0];
  if (!s)
    return;
  let r = ds(s, i.tabSize), o = 0, l = lr(i, Math.max(0, r - zo(i)));
  for (; o < s.length && o < l.length && s.charCodeAt(o) == l.charCodeAt(o); )
    o++;
  n.push({ from: t.from + o, to: t.from + s.length, insert: l.slice(o) });
}), { userEvent: "delete.dedent" })), !0), jP = (i) => (i.setTabFocusMode(), !0), YP = [
  { key: "Ctrl-b", run: hO, shift: yO, preventDefault: !0 },
  { key: "Ctrl-f", run: fO, shift: xO },
  { key: "Ctrl-p", run: pO, shift: wO },
  { key: "Ctrl-n", run: mO, shift: PO },
  { key: "Ctrl-a", run: dP, shift: kP },
  { key: "Ctrl-e", run: pP, shift: CP },
  { key: "Ctrl-d", run: TO },
  { key: "Ctrl-h", run: Mc },
  { key: "Ctrl-k", run: _P },
  { key: "Ctrl-Alt-h", run: $O },
  { key: "Ctrl-o", run: IP },
  { key: "Ctrl-t", run: VP },
  { key: "Ctrl-v", run: _c }
], KP = /* @__PURE__ */ [
  { key: "ArrowLeft", run: hO, shift: yO, preventDefault: !0 },
  { key: "Mod-ArrowLeft", mac: "Alt-ArrowLeft", run: sP, shift: OP, preventDefault: !0 },
  { mac: "Cmd-ArrowLeft", run: fP, shift: wP, preventDefault: !0 },
  { key: "ArrowRight", run: fO, shift: xO, preventDefault: !0 },
  { key: "Mod-ArrowRight", mac: "Alt-ArrowRight", run: rP, shift: bP, preventDefault: !0 },
  { mac: "Cmd-ArrowRight", run: uP, shift: PP, preventDefault: !0 },
  { key: "ArrowUp", run: pO, shift: wO, preventDefault: !0 },
  { mac: "Cmd-ArrowUp", run: gd, shift: bd },
  { mac: "Ctrl-ArrowUp", run: dd, shift: pd },
  { key: "ArrowDown", run: mO, shift: PO, preventDefault: !0 },
  { mac: "Cmd-ArrowDown", run: Od, shift: yd },
  { mac: "Ctrl-ArrowDown", run: _c, shift: md },
  { key: "PageUp", run: dd, shift: pd },
  { key: "PageDown", run: _c, shift: md },
  { key: "Home", run: hP, shift: SP, preventDefault: !0 },
  { key: "Mod-Home", run: gd, shift: bd },
  { key: "End", run: cP, shift: vP, preventDefault: !0 },
  { key: "Mod-End", run: Od, shift: yd },
  { key: "Enter", run: xd, shift: xd },
  { key: "Mod-a", run: EP },
  { key: "Backspace", run: Mc, shift: Mc, preventDefault: !0 },
  { key: "Delete", run: TO, preventDefault: !0 },
  { key: "Mod-Backspace", mac: "Alt-Backspace", run: $O, preventDefault: !0 },
  { key: "Mod-Delete", mac: "Alt-Delete", run: RP, preventDefault: !0 },
  { mac: "Mod-Backspace", run: MP, preventDefault: !0 },
  { mac: "Mod-Delete", run: QP, preventDefault: !0 }
].concat(/* @__PURE__ */ YP.map((i) => ({ mac: i.key, run: i.run, shift: i.shift }))), ZP = /* @__PURE__ */ [
  { key: "Alt-ArrowLeft", mac: "Ctrl-ArrowLeft", run: lP, shift: yP },
  { key: "Alt-ArrowRight", mac: "Ctrl-ArrowRight", run: aP, shift: xP },
  { key: "Alt-ArrowUp", run: LP },
  { key: "Shift-Alt-ArrowUp", run: XP },
  { key: "Alt-ArrowDown", run: BP },
  { key: "Shift-Alt-ArrowDown", run: WP },
  { key: "Mod-Alt-ArrowUp", run: $P },
  { key: "Mod-Alt-ArrowDown", run: DP },
  { key: "Escape", run: NP },
  { key: "Mod-Enter", run: HP },
  { key: "Alt-l", mac: "Ctrl-l", run: TP },
  { key: "Mod-i", run: AP, preventDefault: !0 },
  { key: "Mod-[", run: zP },
  { key: "Mod-]", run: GP },
  { key: "Mod-Alt-\\", run: UP },
  { key: "Shift-Mod-k", run: FP },
  { key: "Shift-Mod-\\", run: gP },
  { key: "Mod-/", run: Lw },
  { key: "Alt-A", run: Xw },
  { key: "Ctrl-m", mac: "Shift-Alt-m", run: jP }
].concat(KP), vd = typeof String.prototype.normalize == "function" ? (i) => i.normalize("NFKD") : (i) => i;
class hs {
  /**
  Create a text cursor. The query is the search string, `from` to
  `to` provides the region to search.
  
  When `normalize` is given, it will be called, on both the query
  string and the content it is matched against, before comparing.
  You can, for example, create a case-insensitive search by
  passing `s => s.toLowerCase()`.
  
  Text is always normalized with
  [`.normalize("NFKD")`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)
  (when supported).
  */
  constructor(e, t, n = 0, s = e.length, r, o) {
    this.test = o, this.value = { from: 0, to: 0, precise: !1 }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = e.iterRange(n, s), this.bufferStart = n, this.normalize = r ? (l) => r(vd(l)) : vd, this.query = this.normalize(t);
  }
  peek() {
    if (this.bufferPos == this.buffer.length) {
      if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done)
        return -1;
      this.bufferPos = 0, this.buffer = this.iter.value;
    }
    return gt(this.buffer, this.bufferPos);
  }
  /**
  Look for the next match. Updates the iterator's
  [`value`](https://codemirror.net/6/docs/ref/#search.SearchCursor.value) and
  [`done`](https://codemirror.net/6/docs/ref/#search.SearchCursor.done) properties. Should be called
  at least once before using the cursor.
  */
  next() {
    for (; this.matches.length; )
      this.matches.pop();
    return this.nextOverlapping();
  }
  /**
  The `next` method will ignore matches that partially overlap a
  previous match. This method behaves like `next`, but includes
  such matches.
  */
  nextOverlapping() {
    for (; ; ) {
      let e = this.peek();
      if (e < 0)
        return this.done = !0, this;
      let t = uh(e), n = this.bufferStart + this.bufferPos;
      this.bufferPos += mi(e);
      let s = this.normalize(t);
      if (s.length)
        for (let r = 0, o = n, l = !0; ; r++) {
          let a = s.charCodeAt(r), c = this.match(a, o, l, this.bufferPos + this.bufferStart, r == s.length - 1);
          if (c)
            return this.value = c, this;
          if (r == s.length - 1)
            break;
          l && r < t.length && t.charCodeAt(r) == a ? o++ : l = !1;
        }
    }
  }
  match(e, t, n, s, r) {
    let o = null;
    for (let l = 0; l < this.matches.length; ) {
      let a = this.matches[l], c = !1;
      this.query.charCodeAt(a.index) == e && (a.index == this.query.length - 1 ? o = { from: a.from, to: s, precise: r && a.precise } : (a.index++, c = !0)), c ? l++ : this.matches.splice(l, 1);
    }
    return this.query.charCodeAt(0) == e && (this.query.length == 1 ? o = { from: t, to: s, precise: n && r } : this.matches.push({ from: t, index: 1, precise: n })), o && this.test && !this.test(o.from, o.to, this.buffer, this.bufferStart) && (o = null), o;
  }
}
typeof Symbol < "u" && (hs.prototype[Symbol.iterator] = function() {
  return this;
});
const _O = { from: -1, to: -1, match: /* @__PURE__ */ /.*/.exec(""), precise: !0 }, qh = "gm" + (/x/.unicode == null ? "" : "u");
class MO {
  /**
  Create a cursor that will search the given range in the given
  document. `query` should be the raw pattern (as you'd pass it to
  `new RegExp`).
  */
  constructor(e, t, n, s = 0, r = e.length) {
    if (this.text = e, this.to = r, this.curLine = "", this.done = !1, this.value = _O, /\\[sWDnr]|\n|\r|\[\^/.test(t))
      return new QO(e, t, n, s, r);
    this.re = new RegExp(t, qh + (n != null && n.ignoreCase ? "i" : "")), this.test = n == null ? void 0 : n.test, this.iter = e.iter();
    let o = e.lineAt(s);
    this.curLineStart = o.from, this.matchPos = Zo(e, s), this.getLine(this.curLineStart);
  }
  getLine(e) {
    this.iter.next(e), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next());
  }
  nextLine() {
    this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0);
  }
  /**
  Move to the next match, if there is one.
  */
  next() {
    for (let e = this.matchPos - this.curLineStart; ; ) {
      this.re.lastIndex = e;
      let t = this.matchPos <= this.to && this.re.exec(this.curLine);
      if (t) {
        let n = this.curLineStart + t.index, s = n + t[0].length;
        if (this.matchPos = Zo(this.text, s + (n == s ? 1 : 0)), n == this.curLineStart + this.curLine.length && this.nextLine(), (n < s || n > this.value.to) && (!this.test || this.test(n, s, t)))
          return this.value = { from: n, to: s, precise: !0, match: t }, this;
        e = this.matchPos - this.curLineStart;
      } else if (this.curLineStart + this.curLine.length < this.to)
        this.nextLine(), e = 0;
      else
        return this.done = !0, this;
    }
  }
}
const ya = /* @__PURE__ */ new WeakMap();
class Jn {
  constructor(e, t) {
    this.from = e, this.text = t;
  }
  get to() {
    return this.from + this.text.length;
  }
  static get(e, t, n) {
    let s = ya.get(e);
    if (!s || s.from >= n || s.to <= t) {
      let l = new Jn(t, e.sliceString(t, n));
      return ya.set(e, l), l;
    }
    if (s.from == t && s.to == n)
      return s;
    let { text: r, from: o } = s;
    return o > t && (r = e.sliceString(t, o) + r, o = t), s.to < n && (r += e.sliceString(s.to, n)), ya.set(e, new Jn(o, r)), new Jn(t, r.slice(t - o, n - o));
  }
}
class QO {
  constructor(e, t, n, s, r) {
    this.text = e, this.to = r, this.done = !1, this.value = _O, this.matchPos = Zo(e, s), this.re = new RegExp(t, qh + (n != null && n.ignoreCase ? "i" : "")), this.test = n == null ? void 0 : n.test, this.flat = Jn.get(e, s, this.chunkEnd(
      s + 5e3
      /* Chunk.Base */
    ));
  }
  chunkEnd(e) {
    return e >= this.to ? this.to : this.text.lineAt(e).to;
  }
  next() {
    for (; ; ) {
      let e = this.re.lastIndex = this.matchPos - this.flat.from, t = this.re.exec(this.flat.text);
      if (t && !t[0] && t.index == e && (this.re.lastIndex = e + 1, t = this.re.exec(this.flat.text)), t) {
        let n = this.flat.from + t.index, s = n + t[0].length;
        if ((this.flat.to >= this.to || t.index + t[0].length <= this.flat.text.length - 10) && (!this.test || this.test(n, s, t)))
          return this.value = { from: n, to: s, precise: !0, match: t }, this.matchPos = Zo(this.text, s + (n == s ? 1 : 0)), this;
      }
      if (this.flat.to == this.to)
        return this.done = !0, this;
      this.flat = Jn.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + this.flat.text.length * 2));
    }
  }
}
typeof Symbol < "u" && (MO.prototype[Symbol.iterator] = QO.prototype[Symbol.iterator] = function() {
  return this;
});
function JP(i) {
  try {
    return new RegExp(i, qh), !0;
  } catch {
    return !1;
  }
}
function Zo(i, e) {
  if (e >= i.length)
    return e;
  let t = i.lineAt(e), n;
  for (; e < t.to && (n = t.text.charCodeAt(e - t.from)) >= 56320 && n < 57344; )
    e++;
  return e;
}
const ek = (i) => {
  let { state: e } = i, t = String(e.doc.lineAt(i.state.selection.main.head).number), { close: n, result: s } = yS(i, {
    label: e.phrase("Go to line"),
    input: { type: "text", name: "line", value: t },
    focus: !0,
    submitLabel: e.phrase("go")
  });
  return s.then((r) => {
    let o = r && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(r.elements.line.value);
    if (!o) {
      i.dispatch({ effects: n });
      return;
    }
    let l = e.doc.lineAt(e.selection.main.head), [, a, c, h, f] = o, u = h ? +h.slice(1) : 0, d = c ? +c : l.number;
    if (c && f) {
      let g = d / 100;
      a && (g = g * (a == "-" ? -1 : 1) + l.number / e.doc.lines), d = Math.round(e.doc.lines * g);
    } else c && a && (d = d * (a == "-" ? -1 : 1) + l.number);
    let p = e.doc.line(Math.max(1, Math.min(e.doc.lines, d))), m = P.cursor(p.from + Math.max(0, Math.min(u, p.length)));
    i.dispatch({
      effects: [n, X.scrollIntoView(m.from, { y: "center" })],
      selection: m
    });
  }), !0;
}, tk = {
  highlightWordAroundCursor: !1,
  minSelectionLength: 1,
  maxMatches: 100,
  wholeWords: !1
}, ik = /* @__PURE__ */ L.define({
  combine(i) {
    return wi(i, tk, {
      highlightWordAroundCursor: (e, t) => e || t,
      minSelectionLength: Math.min,
      maxMatches: Math.min
    });
  }
});
function nk(i) {
  return [ak, lk];
}
const sk = /* @__PURE__ */ Y.mark({ class: "cm-selectionMatch" }), rk = /* @__PURE__ */ Y.mark({ class: "cm-selectionMatch cm-selectionMatch-main" });
function Sd(i, e, t, n) {
  return (t == 0 || i(e.sliceDoc(t - 1, t)) != Ne.Word) && (n == e.doc.length || i(e.sliceDoc(n, n + 1)) != Ne.Word);
}
function ok(i, e, t, n) {
  return i(e.sliceDoc(t, t + 1)) == Ne.Word && i(e.sliceDoc(n - 1, n)) == Ne.Word;
}
const lk = /* @__PURE__ */ Ve.fromClass(class {
  constructor(i) {
    this.decorations = this.getDeco(i);
  }
  update(i) {
    (i.selectionSet || i.docChanged || i.viewportChanged) && (this.decorations = this.getDeco(i.view));
  }
  getDeco(i) {
    let e = i.state.facet(ik), { state: t } = i, n = t.selection;
    if (n.ranges.length > 1)
      return Y.none;
    let s = n.main, r, o = null;
    if (s.empty) {
      if (!e.highlightWordAroundCursor)
        return Y.none;
      let a = t.wordAt(s.head);
      if (!a)
        return Y.none;
      o = t.charCategorizer(s.head), r = t.sliceDoc(a.from, a.to);
    } else {
      let a = s.to - s.from;
      if (a < e.minSelectionLength || a > 200)
        return Y.none;
      if (e.wholeWords) {
        if (r = t.sliceDoc(s.from, s.to), o = t.charCategorizer(s.head), !(Sd(o, t, s.from, s.to) && ok(o, t, s.from, s.to)))
          return Y.none;
      } else if (r = t.sliceDoc(s.from, s.to), !r)
        return Y.none;
    }
    let l = [];
    for (let a of i.visibleRanges) {
      let c = new hs(t.doc, r, a.from, a.to);
      for (; !c.next().done; ) {
        let { from: h, to: f } = c.value;
        if ((!o || Sd(o, t, h, f)) && (s.empty && h <= s.from && f >= s.to ? l.push(rk.range(h, f)) : (h >= s.to || f <= s.from) && l.push(sk.range(h, f)), l.length > e.maxMatches))
          return Y.none;
      }
    }
    return Y.set(l);
  }
}, {
  decorations: (i) => i.decorations
}), ak = /* @__PURE__ */ X.baseTheme({
  ".cm-selectionMatch": { backgroundColor: "#99ff7780" },
  ".cm-searchMatch .cm-selectionMatch": { backgroundColor: "transparent" }
}), ck = ({ state: i, dispatch: e }) => {
  let { selection: t } = i, n = P.create(t.ranges.map((s) => i.wordAt(s.head) || P.cursor(s.head)), t.mainIndex);
  return n.eq(t) ? !1 : (e(i.update({ selection: n })), !0);
};
function hk(i, e) {
  let { main: t, ranges: n } = i.selection, s = i.wordAt(t.head), r = s && s.from == t.from && s.to == t.to;
  for (let o = !1, l = new hs(i.doc, e, n[n.length - 1].to); ; )
    if (l.next(), l.done) {
      if (o)
        return null;
      l = new hs(i.doc, e, 0, Math.max(0, n[n.length - 1].from - 1)), o = !0;
    } else {
      if (o && n.some((a) => a.from == l.value.from))
        continue;
      if (r) {
        let a = i.wordAt(l.value.from);
        if (!a || a.from != l.value.from || a.to != l.value.to)
          continue;
      }
      return l.value;
    }
}
const fk = ({ state: i, dispatch: e }) => {
  let { ranges: t } = i.selection;
  if (t.some((r) => r.from === r.to))
    return ck({ state: i, dispatch: e });
  let n = i.sliceDoc(t[0].from, t[0].to);
  if (i.selection.ranges.some((r) => i.sliceDoc(r.from, r.to) != n))
    return !1;
  let s = hk(i, n);
  return s ? (e(i.update({
    selection: i.selection.addRange(P.range(s.from, s.to), !1),
    effects: X.scrollIntoView(s.to)
  })), !0) : !1;
}, ms = /* @__PURE__ */ L.define({
  combine(i) {
    return wi(i, {
      top: !1,
      caseSensitive: !1,
      literal: !1,
      regexp: !1,
      wholeWord: !1,
      createPanel: (e) => new kk(e),
      scrollToMatch: (e) => X.scrollIntoView(e)
    });
  }
});
class IO {
  /**
  Create a query object.
  */
  constructor(e) {
    this.search = e.search, this.caseSensitive = !!e.caseSensitive, this.literal = !!e.literal, this.regexp = !!e.regexp, this.replace = e.replace || "", this.valid = !!this.search && (!this.regexp || JP(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!e.wholeWord, this.test = e.test;
  }
  /**
  @internal
  */
  unquote(e) {
    return this.literal ? e : e.replace(/\\([nrt\\])/g, (t, n) => n == "n" ? `
` : n == "r" ? "\r" : n == "t" ? "	" : "\\");
  }
  /**
  Compare this query to another query.
  */
  eq(e) {
    return this.search == e.search && this.replace == e.replace && this.caseSensitive == e.caseSensitive && this.regexp == e.regexp && this.wholeWord == e.wholeWord && this.test == e.test;
  }
  /**
  @internal
  */
  create() {
    return this.regexp ? new Ok(this) : new pk(this);
  }
  /**
  Get a search cursor for this query, searching through the given
  range in the given state.
  */
  getCursor(e, t = 0, n) {
    let s = e.doc ? e : pe.create({ doc: e });
    return n == null && (n = s.doc.length), this.regexp ? Vn(this, s, t, n) : In(this, s, t, n);
  }
}
class VO {
  constructor(e) {
    this.spec = e;
  }
}
function uk(i, e, t) {
  return (n, s, r, o) => {
    if (t && !t(n, s, r, o))
      return !1;
    let l = n >= o && s <= o + r.length ? r.slice(n - o, s - o) : e.doc.sliceString(n, s);
    return i(l, e, n, s);
  };
}
function In(i, e, t, n) {
  let s;
  return i.wholeWord && (s = dk(e.doc, e.charCategorizer(e.selection.main.head))), i.test && (s = uk(i.test, e, s)), new hs(e.doc, i.unquoted, t, n, i.caseSensitive ? void 0 : (r) => r.toLowerCase(), s);
}
function dk(i, e) {
  return (t, n, s, r) => ((r > t || r + s.length < n) && (r = Math.max(0, t - 2), s = i.sliceString(r, Math.min(i.length, n + 2))), (e(Jo(s, t - r)) != Ne.Word || e(el(s, t - r)) != Ne.Word) && (e(el(s, n - r)) != Ne.Word || e(Jo(s, n - r)) != Ne.Word));
}
class pk extends VO {
  constructor(e) {
    super(e);
  }
  nextMatch(e, t, n) {
    let s = In(this.spec, e, n, e.doc.length).nextOverlapping();
    if (s.done) {
      let r = Math.min(e.doc.length, t + this.spec.unquoted.length);
      s = In(this.spec, e, 0, r).nextOverlapping();
    }
    return s.done || s.value.from == t && s.value.to == n ? null : s.value;
  }
  // Searching in reverse is, rather than implementing an inverted search
  // cursor, done by scanning chunk after chunk forward.
  prevMatchInRange(e, t, n) {
    for (let s = n; ; ) {
      let r = Math.max(t, s - 1e4 - this.spec.unquoted.length), o = In(this.spec, e, r, s), l = null;
      for (; !o.nextOverlapping().done; )
        l = o.value;
      if (l)
        return l;
      if (r == t)
        return null;
      s -= 1e4;
    }
  }
  prevMatch(e, t, n) {
    let s = this.prevMatchInRange(e, 0, t);
    return s || (s = this.prevMatchInRange(e, Math.max(0, n - this.spec.unquoted.length), e.doc.length)), s && (s.from != t || s.to != n) ? s : null;
  }
  getReplacement(e) {
    return this.spec.unquote(this.spec.replace);
  }
  matchAll(e, t) {
    let n = In(this.spec, e, 0, e.doc.length), s = [];
    for (; !n.next().done; ) {
      if (s.length >= t)
        return null;
      s.push(n.value);
    }
    return s;
  }
  highlight(e, t, n, s) {
    let r = In(this.spec, e, Math.max(0, t - this.spec.unquoted.length), Math.min(n + this.spec.unquoted.length, e.doc.length));
    for (; !r.next().done; )
      s(r.value.from, r.value.to);
  }
}
function mk(i, e, t) {
  return (n, s, r) => (!t || t(n, s, r)) && i(r[0], e, n, s);
}
function Vn(i, e, t, n) {
  let s;
  return i.wholeWord && (s = gk(e.charCategorizer(e.selection.main.head))), i.test && (s = mk(i.test, e, s)), new MO(e.doc, i.search, { ignoreCase: !i.caseSensitive, test: s }, t, n);
}
function Jo(i, e) {
  return i.slice(ze(i, e, !1), e);
}
function el(i, e) {
  return i.slice(e, ze(i, e));
}
function gk(i) {
  return (e, t, n) => !n[0].length || (i(Jo(n.input, n.index)) != Ne.Word || i(el(n.input, n.index)) != Ne.Word) && (i(el(n.input, n.index + n[0].length)) != Ne.Word || i(Jo(n.input, n.index + n[0].length)) != Ne.Word);
}
class Ok extends VO {
  nextMatch(e, t, n) {
    let s = Vn(this.spec, e, n, e.doc.length).next();
    return s.done && (s = Vn(this.spec, e, 0, t).next()), s.done ? null : s.value;
  }
  prevMatchInRange(e, t, n) {
    for (let s = 1; ; s++) {
      let r = Math.max(
        t,
        n - s * 1e4
        /* FindPrev.ChunkSize */
      ), o = Vn(this.spec, e, r, n), l = null;
      for (; !o.next().done; )
        l = o.value;
      if (l && (r == t || l.from > r + 10))
        return l;
      if (r == t)
        return null;
    }
  }
  prevMatch(e, t, n) {
    return this.prevMatchInRange(e, 0, t) || this.prevMatchInRange(e, n, e.doc.length);
  }
  getReplacement(e) {
    return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, (t, n) => {
      if (n == "&")
        return e.match[0];
      if (n == "$")
        return "$";
      for (let s = n.length; s > 0; s--) {
        let r = +n.slice(0, s);
        if (r > 0 && r < e.match.length)
          return e.match[r] + n.slice(s);
      }
      return t;
    });
  }
  matchAll(e, t) {
    let n = Vn(this.spec, e, 0, e.doc.length), s = [];
    for (; !n.next().done; ) {
      if (s.length >= t)
        return null;
      s.push(n.value);
    }
    return s;
  }
  highlight(e, t, n, s) {
    let r = Vn(this.spec, e, Math.max(
      0,
      t - 250
      /* RegExp.HighlightMargin */
    ), Math.min(n + 250, e.doc.length));
    for (; !r.next().done; )
      s(r.value.from, r.value.to);
  }
}
const ar = /* @__PURE__ */ ie.define(), Hh = /* @__PURE__ */ ie.define(), zi = /* @__PURE__ */ rt.define({
  create(i) {
    return new xa(Qc(i).create(), null);
  },
  update(i, e) {
    for (let t of e.effects)
      t.is(ar) ? i = new xa(t.value.create(), i.panel) : t.is(Hh) && (i = new xa(i.query, t.value ? Uh : null));
    return i;
  },
  provide: (i) => sr.from(i, (e) => e.panel)
});
class xa {
  constructor(e, t) {
    this.query = e, this.panel = t;
  }
}
const bk = /* @__PURE__ */ Y.mark({ class: "cm-searchMatch" }), yk = /* @__PURE__ */ Y.mark({ class: "cm-searchMatch cm-searchMatch-selected" }), xk = /* @__PURE__ */ Ve.fromClass(class {
  constructor(i) {
    this.view = i, this.decorations = this.highlight(i.state.field(zi));
  }
  update(i) {
    let e = i.state.field(zi);
    (e != i.startState.field(zi) || i.docChanged || i.selectionSet || i.viewportChanged) && (this.decorations = this.highlight(e));
  }
  highlight({ query: i, panel: e }) {
    if (!e || !i.spec.valid)
      return Y.none;
    let { view: t } = this, n = new Ni();
    for (let s = 0, r = t.visibleRanges, o = r.length; s < o; s++) {
      let { from: l, to: a } = r[s];
      for (; s < o - 1 && a > r[s + 1].from - 2 * 250; )
        a = r[++s].to;
      i.highlight(t.state, l, a, (c, h) => {
        let f = t.state.selection.ranges.some((u) => u.from == c && u.to == h);
        n.add(c, h, f ? yk : bk);
      });
    }
    return n.finish();
  }
}, {
  decorations: (i) => i.decorations
});
function Er(i) {
  return (e) => {
    let t = e.state.field(zi, !1);
    return t && t.query.spec.valid ? i(e, t) : XO(e);
  };
}
const tl = /* @__PURE__ */ Er((i, { query: e }) => {
  let { to: t } = i.state.selection.main, n = e.nextMatch(i.state, t, t);
  if (!n)
    return !1;
  let s = P.single(n.from, n.to), r = i.state.facet(ms);
  return i.dispatch({
    selection: s,
    effects: [Gh(i, n), r.scrollToMatch(s.main, i)],
    userEvent: "select.search"
  }), BO(i), !0;
}), il = /* @__PURE__ */ Er((i, { query: e }) => {
  let { state: t } = i, { from: n } = t.selection.main, s = e.prevMatch(t, n, n);
  if (!s)
    return !1;
  let r = P.single(s.from, s.to), o = i.state.facet(ms);
  return i.dispatch({
    selection: r,
    effects: [Gh(i, s), o.scrollToMatch(r.main, i)],
    userEvent: "select.search"
  }), BO(i), !0;
}), vk = /* @__PURE__ */ Er((i, { query: e }) => {
  let t = e.matchAll(i.state, 1e3);
  return !t || !t.length ? !1 : (i.dispatch({
    selection: P.create(t.map((n) => P.range(n.from, n.to))),
    userEvent: "select.search.matches"
  }), !0);
}), Sk = ({ state: i, dispatch: e }) => {
  let t = i.selection;
  if (t.ranges.length > 1 || t.main.empty)
    return !1;
  let { from: n, to: s } = t.main, r = [], o = 0;
  for (let l = new hs(i.doc, i.sliceDoc(n, s)); !l.next().done; ) {
    if (r.length > 1e3)
      return !1;
    l.value.from == n && (o = r.length), r.push(P.range(l.value.from, l.value.to));
  }
  return e(i.update({
    selection: P.create(r, o),
    userEvent: "select.search.matches"
  })), !0;
}, wd = /* @__PURE__ */ Er((i, { query: e }) => {
  let { state: t } = i, { from: n, to: s } = t.selection.main;
  if (t.readOnly)
    return !1;
  let r = e.nextMatch(t, n, n);
  if (!r)
    return !1;
  let o = r, l = [], a, c, h = [];
  o.precise ? o.from == n && o.to == s && (c = t.toText(e.getReplacement(o)), l.push({ from: o.from, to: o.to, insert: c }), h.push(X.announce.of(t.phrase("replaced match on line $", t.doc.lineAt(n).number) + "."))) : o = e.nextMatch(t, o.from, o.to);
  let f = i.state.changes(l);
  return o && (a = P.single(o.from, o.to).map(f), h.push(Gh(i, o)), h.push(t.facet(ms).scrollToMatch(a.main, i))), i.dispatch({
    changes: f,
    selection: a,
    effects: h,
    userEvent: "input.replace"
  }), !0;
}), wk = /* @__PURE__ */ Er((i, { query: e }) => {
  if (i.state.readOnly)
    return !1;
  let t = [];
  for (let s of e.matchAll(i.state, 1e9)) {
    let { from: r, to: o, precise: l } = s;
    l && t.push({ from: r, to: o, insert: e.getReplacement(s) });
  }
  if (!t.length)
    return !1;
  let n = i.state.phrase("replaced $ matches", t.length) + ".";
  return i.dispatch({
    changes: t,
    effects: X.announce.of(n),
    userEvent: "input.replace.all"
  }), !0;
});
function Uh(i) {
  return i.state.facet(ms).createPanel(i);
}
function Qc(i, e) {
  var t, n, s, r, o;
  let l = i.selection.main, a = l.empty || l.to > l.from + 100 ? "" : i.sliceDoc(l.from, l.to);
  if (e && !a)
    return e;
  let c = i.facet(ms);
  return new IO({
    search: ((t = e == null ? void 0 : e.literal) !== null && t !== void 0 ? t : c.literal) ? a : a.replace(/\n/g, "\\n"),
    caseSensitive: (n = e == null ? void 0 : e.caseSensitive) !== null && n !== void 0 ? n : c.caseSensitive,
    literal: (s = e == null ? void 0 : e.literal) !== null && s !== void 0 ? s : c.literal,
    regexp: (r = e == null ? void 0 : e.regexp) !== null && r !== void 0 ? r : c.regexp,
    wholeWord: (o = e == null ? void 0 : e.wholeWord) !== null && o !== void 0 ? o : c.wholeWord
  });
}
function LO(i) {
  let e = Dh(i, Uh);
  return e && e.dom.querySelector("[main-field]");
}
function BO(i) {
  let e = LO(i);
  e && e == i.root.activeElement && e.select();
}
const XO = (i) => {
  let e = i.state.field(zi, !1);
  if (e && e.panel) {
    let t = LO(i);
    if (t && t != i.root.activeElement) {
      let n = Qc(i.state, e.query.spec);
      n.valid && i.dispatch({ effects: ar.of(n) }), t.focus(), t.select();
    }
  } else
    i.dispatch({ effects: [
      Hh.of(!0),
      e ? ar.of(Qc(i.state, e.query.spec)) : ie.appendConfig.of(Ek)
    ] });
  return !0;
}, WO = (i) => {
  let e = i.state.field(zi, !1);
  if (!e || !e.panel)
    return !1;
  let t = Dh(i, Uh);
  return t && t.dom.contains(i.root.activeElement) && i.focus(), i.dispatch({ effects: Hh.of(!1) }), !0;
}, Pk = [
  { key: "Mod-f", run: XO, scope: "editor search-panel" },
  { key: "F3", run: tl, shift: il, scope: "editor search-panel", preventDefault: !0 },
  { key: "Mod-g", run: tl, shift: il, scope: "editor search-panel", preventDefault: !0 },
  { key: "Escape", run: WO, scope: "editor search-panel" },
  { key: "Mod-Shift-l", run: Sk },
  { key: "Mod-Alt-g", run: ek },
  { key: "Mod-d", run: fk, preventDefault: !0 }
];
class kk {
  constructor(e) {
    this.view = e;
    let t = this.query = e.state.field(zi).query.spec;
    this.commit = this.commit.bind(this), this.searchField = Ce("input", {
      value: t.search,
      placeholder: kt(e, "Find"),
      "aria-label": kt(e, "Find"),
      class: "cm-textfield",
      name: "search",
      form: "",
      "main-field": "true",
      onchange: this.commit,
      onkeyup: this.commit
    }), this.replaceField = Ce("input", {
      value: t.replace,
      placeholder: kt(e, "Replace"),
      "aria-label": kt(e, "Replace"),
      class: "cm-textfield",
      name: "replace",
      form: "",
      onchange: this.commit,
      onkeyup: this.commit
    }), this.caseField = Ce("input", {
      type: "checkbox",
      name: "case",
      form: "",
      checked: t.caseSensitive,
      onchange: this.commit
    }), this.reField = Ce("input", {
      type: "checkbox",
      name: "re",
      form: "",
      checked: t.regexp,
      onchange: this.commit
    }), this.wordField = Ce("input", {
      type: "checkbox",
      name: "word",
      form: "",
      checked: t.wholeWord,
      onchange: this.commit
    });
    function n(s, r, o) {
      return Ce("button", { class: "cm-button", name: s, onclick: r, type: "button" }, o);
    }
    this.dom = Ce("div", { onkeydown: (s) => this.keydown(s), class: "cm-search" }, [
      this.searchField,
      n("next", () => tl(e), [kt(e, "next")]),
      n("prev", () => il(e), [kt(e, "previous")]),
      n("select", () => vk(e), [kt(e, "all")]),
      Ce("label", null, [this.caseField, kt(e, "match case")]),
      Ce("label", null, [this.reField, kt(e, "regexp")]),
      Ce("label", null, [this.wordField, kt(e, "by word")]),
      ...e.state.readOnly ? [] : [
        Ce("br"),
        this.replaceField,
        n("replace", () => wd(e), [kt(e, "replace")]),
        n("replaceAll", () => wk(e), [kt(e, "replace all")])
      ],
      Ce("button", {
        name: "close",
        onclick: () => WO(e),
        "aria-label": kt(e, "close"),
        type: "button"
      }, ["×"])
    ]);
  }
  commit() {
    let e = new IO({
      search: this.searchField.value,
      caseSensitive: this.caseField.checked,
      regexp: this.reField.checked,
      wholeWord: this.wordField.checked,
      replace: this.replaceField.value
    });
    e.eq(this.query) || (this.query = e, this.view.dispatch({ effects: ar.of(e) }));
  }
  keydown(e) {
    $v(this.view, e, "search-panel") ? e.preventDefault() : e.keyCode == 13 && e.target == this.searchField ? (e.preventDefault(), (e.shiftKey ? il : tl)(this.view)) : e.keyCode == 13 && e.target == this.replaceField && (e.preventDefault(), wd(this.view));
  }
  update(e) {
    for (let t of e.transactions)
      for (let n of t.effects)
        n.is(ar) && !n.value.eq(this.query) && this.setQuery(n.value);
  }
  setQuery(e) {
    this.query = e, this.searchField.value = e.search, this.replaceField.value = e.replace, this.caseField.checked = e.caseSensitive, this.reField.checked = e.regexp, this.wordField.checked = e.wholeWord;
  }
  mount() {
    this.searchField.select();
  }
  get pos() {
    return 80;
  }
  get top() {
    return this.view.state.facet(ms).top;
  }
}
function kt(i, e) {
  return i.state.phrase(e);
}
const Kr = 30, Zr = /[\s\.,:;?!]/;
function Gh(i, { from: e, to: t }) {
  let n = i.state.doc.lineAt(e), s = i.state.doc.lineAt(t).to, r = Math.max(n.from, e - Kr), o = Math.min(s, t + Kr), l = i.state.sliceDoc(r, o);
  if (r != n.from) {
    for (let a = 0; a < Kr; a++)
      if (!Zr.test(l[a + 1]) && Zr.test(l[a])) {
        l = l.slice(a);
        break;
      }
  }
  if (o != s) {
    for (let a = l.length - 1; a > l.length - Kr; a--)
      if (!Zr.test(l[a - 1]) && Zr.test(l[a])) {
        l = l.slice(0, a);
        break;
      }
  }
  return X.announce.of(`${i.state.phrase("current match")}. ${l} ${i.state.phrase("on line")} ${n.number}.`);
}
const Ck = /* @__PURE__ */ X.baseTheme({
  ".cm-panel.cm-search": {
    padding: "2px 6px 4px",
    position: "relative",
    "& [name=close]": {
      position: "absolute",
      top: "0",
      right: "4px",
      backgroundColor: "inherit",
      border: "none",
      font: "inherit",
      padding: 0,
      margin: 0
    },
    "& input, & button, & label": {
      margin: ".2em .6em .2em 0"
    },
    "& input[type=checkbox]": {
      marginRight: ".2em"
    },
    "& label": {
      fontSize: "80%",
      whiteSpace: "pre"
    }
  },
  "&light .cm-searchMatch": { backgroundColor: "#ffff0054" },
  "&dark .cm-searchMatch": { backgroundColor: "#00ffff8a" },
  "&light .cm-searchMatch-selected": { backgroundColor: "#ff6a0054" },
  "&dark .cm-searchMatch-selected": { backgroundColor: "#ff00ff8a" }
}), Ek = [
  zi,
  /* @__PURE__ */ An.low(xk),
  Ck
];
class FO {
  /**
  Create a new completion context. (Mostly useful for testing
  completion sources—in the editor, the extension will create
  these for you.)
  */
  constructor(e, t, n, s) {
    this.state = e, this.pos = t, this.explicit = n, this.view = s, this.abortListeners = [], this.abortOnDocChange = !1;
  }
  /**
  Get the extent, content, and (if there is a token) type of the
  token before `this.pos`.
  */
  tokenBefore(e) {
    let t = je(this.state).resolveInner(this.pos, -1);
    for (; t && e.indexOf(t.name) < 0; )
      t = t.parent;
    return t ? {
      from: t.from,
      to: this.pos,
      text: this.state.sliceDoc(t.from, this.pos),
      type: t.type
    } : null;
  }
  /**
  Get the match of the given expression directly before the
  cursor.
  */
  matchBefore(e) {
    let t = this.state.doc.lineAt(this.pos), n = Math.max(t.from, this.pos - 250), s = t.text.slice(n - t.from, this.pos - t.from), r = s.search(qO(e, !1));
    return r < 0 ? null : { from: n + r, to: this.pos, text: s.slice(r) };
  }
  /**
  Yields true when the query has been aborted. Can be useful in
  asynchronous queries to avoid doing work that will be ignored.
  */
  get aborted() {
    return this.abortListeners == null;
  }
  /**
  Allows you to register abort handlers, which will be called when
  the query is
  [aborted](https://codemirror.net/6/docs/ref/#autocomplete.CompletionContext.aborted).
  
  By default, running queries will not be aborted for regular
  typing or backspacing, on the assumption that they are likely to
  return a result with a
  [`validFor`](https://codemirror.net/6/docs/ref/#autocomplete.CompletionResult.validFor) field that
  allows the result to be used after all. Passing `onDocChange:
  true` will cause this query to be aborted for any document
  change.
  */
  addEventListener(e, t, n) {
    e == "abort" && this.abortListeners && (this.abortListeners.push(t), n && n.onDocChange && (this.abortOnDocChange = !0));
  }
}
function Pd(i) {
  let e = Object.keys(i).join(""), t = /\w/.test(e);
  return t && (e = e.replace(/\w/g, "")), `[${t ? "\\w" : ""}${e.replace(/[^\w\s]/g, "\\$&")}]`;
}
function Tk(i) {
  let e = /* @__PURE__ */ Object.create(null), t = /* @__PURE__ */ Object.create(null);
  for (let { label: s } of i) {
    e[s[0]] = !0;
    for (let r = 1; r < s.length; r++)
      t[s[r]] = !0;
  }
  let n = Pd(e) + Pd(t) + "*$";
  return [new RegExp("^" + n), new RegExp(n)];
}
function Ak(i) {
  let e = i.map((s) => typeof s == "string" ? { label: s } : s), [t, n] = e.every((s) => /^\w+$/.test(s.label)) ? [/\w*$/, /\w+$/] : Tk(e);
  return (s) => {
    let r = s.matchBefore(n);
    return r || s.explicit ? { from: r ? r.from : s.pos, options: e, validFor: t } : null;
  };
}
class kd {
  constructor(e, t, n, s) {
    this.completion = e, this.source = t, this.match = n, this.score = s;
  }
}
function wn(i) {
  return i.selection.main.from;
}
function qO(i, e) {
  var t;
  let { source: n } = i, s = e && n[0] != "^", r = n[n.length - 1] != "$";
  return !s && !r ? i : new RegExp(`${s ? "^" : ""}(?:${n})${r ? "$" : ""}`, (t = i.flags) !== null && t !== void 0 ? t : i.ignoreCase ? "i" : "");
}
const HO = /* @__PURE__ */ Ii.define();
function $k(i, e, t, n) {
  let { main: s } = i.selection, r = t - s.from, o = n - s.from;
  return {
    ...i.changeByRange((l) => {
      if (l != s && t != n && i.sliceDoc(l.from + r, l.from + o) != i.sliceDoc(t, n))
        return { range: l };
      let a = i.toText(e);
      return {
        changes: { from: l.from + r, to: n == s.from ? l.to : l.from + o, insert: a },
        range: P.cursor(l.from + r + a.length)
      };
    }),
    scrollIntoView: !0,
    userEvent: "input.complete"
  };
}
const Cd = /* @__PURE__ */ new WeakMap();
function Dk(i) {
  if (!Array.isArray(i))
    return i;
  let e = Cd.get(i);
  return e || Cd.set(i, e = Ak(i)), e;
}
const nl = /* @__PURE__ */ ie.define(), cr = /* @__PURE__ */ ie.define();
class Nk {
  constructor(e) {
    this.pattern = e, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
    for (let t = 0; t < e.length; ) {
      let n = gt(e, t), s = mi(n);
      this.chars.push(n);
      let r = e.slice(t, t + s), o = r.toUpperCase();
      this.folded.push(gt(o == r ? r.toLowerCase() : o, 0)), t += s;
    }
    this.astral = e.length != this.chars.length;
  }
  ret(e, t) {
    return this.score = e, this.matched = t, this;
  }
  // Matches a given word (completion) against the pattern (input).
  // Will return a boolean indicating whether there was a match and,
  // on success, set `this.score` to the score, `this.matched` to an
  // array of `from, to` pairs indicating the matched parts of `word`.
  //
  // The score is a number that is more negative the worse the match
  // is. See `Penalty` above.
  match(e) {
    if (this.pattern.length == 0)
      return this.ret(-100, []);
    if (e.length < this.pattern.length)
      return null;
    let { chars: t, folded: n, any: s, precise: r, byWord: o } = this;
    if (t.length == 1) {
      let x = gt(e, 0), S = mi(x), C = S == e.length ? 0 : -100;
      if (x != t[0]) if (x == n[0])
        C += -200;
      else
        return null;
      return this.ret(C, [0, S]);
    }
    let l = e.indexOf(this.pattern);
    if (l == 0)
      return this.ret(e.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
    let a = t.length, c = 0;
    if (l < 0) {
      for (let x = 0, S = Math.min(e.length, 200); x < S && c < a; ) {
        let C = gt(e, x);
        (C == t[c] || C == n[c]) && (s[c++] = x), x += mi(C);
      }
      if (c < a)
        return null;
    }
    let h = 0, f = 0, u = !1, d = 0, p = -1, m = -1, g = /[a-z]/.test(e), b = !0;
    for (let x = 0, S = Math.min(e.length, 200), C = 0; x < S && f < a; ) {
      let v = gt(e, x);
      l < 0 && (h < a && v == t[h] && (r[h++] = x), d < a && (v == t[d] || v == n[d] ? (d == 0 && (p = x), m = x + 1, d++) : d = 0));
      let T, N = v < 255 ? v >= 48 && v <= 57 || v >= 97 && v <= 122 ? 2 : v >= 65 && v <= 90 ? 1 : 0 : (T = uh(v)) != T.toLowerCase() ? 1 : T != T.toUpperCase() ? 2 : 0;
      (!x || N == 1 && g || C == 0 && N != 0) && (t[f] == v || n[f] == v && (u = !0) ? o[f++] = x : o.length && (b = !1)), C = N, x += mi(v);
    }
    return f == a && o[0] == 0 && b ? this.result(-100 + (u ? -200 : 0), o, e) : d == a && p == 0 ? this.ret(-200 - e.length + (m == e.length ? 0 : -100), [0, m]) : l > -1 ? this.ret(-700 - e.length, [l, l + this.pattern.length]) : d == a ? this.ret(-900 - e.length, [p, m]) : f == a ? this.result(-100 + (u ? -200 : 0) + -700 + (b ? 0 : -1100), o, e) : t.length == 2 ? null : this.result((s[0] ? -700 : 0) + -200 + -1100, s, e);
  }
  result(e, t, n) {
    let s = [], r = 0;
    for (let o of t) {
      let l = o + (this.astral ? mi(gt(n, o)) : 1);
      r && s[r - 1] == o ? s[r - 1] = l : (s[r++] = o, s[r++] = l);
    }
    return this.ret(e - n.length, s);
  }
}
class Rk {
  constructor(e) {
    this.pattern = e, this.matched = [], this.score = 0, this.folded = e.toLowerCase();
  }
  match(e) {
    if (e.length < this.pattern.length)
      return null;
    let t = e.slice(0, this.pattern.length), n = t == this.pattern ? 0 : t.toLowerCase() == this.folded ? -200 : null;
    return n == null ? null : (this.matched = [0, t.length], this.score = n + (e.length == this.pattern.length ? 0 : -100), this);
  }
}
const Ge = /* @__PURE__ */ L.define({
  combine(i) {
    return wi(i, {
      activateOnTyping: !0,
      activateOnCompletion: () => !1,
      activateOnTypingDelay: 100,
      selectOnOpen: !0,
      override: null,
      closeOnBlur: !0,
      maxRenderedOptions: 100,
      defaultKeymap: !0,
      tooltipClass: () => "",
      optionClass: () => "",
      aboveCursor: !1,
      icons: !0,
      addToOptions: [],
      positionInfo: _k,
      filterStrict: !1,
      compareCompletions: (e, t) => (e.sortText || e.label).localeCompare(t.sortText || t.label),
      interactionDelay: 75,
      updateSyncTime: 100
    }, {
      defaultKeymap: (e, t) => e && t,
      closeOnBlur: (e, t) => e && t,
      icons: (e, t) => e && t,
      tooltipClass: (e, t) => (n) => Ed(e(n), t(n)),
      optionClass: (e, t) => (n) => Ed(e(n), t(n)),
      addToOptions: (e, t) => e.concat(t),
      filterStrict: (e, t) => e || t
    });
  }
});
function Ed(i, e) {
  return i ? e ? i + " " + e : i : e;
}
function _k(i, e, t, n, s, r) {
  let o = i.textDirection == Te.RTL, l = o, a = !1, c = "top", h, f, u = e.left - s.left, d = s.right - e.right, p = n.right - n.left, m = n.bottom - n.top;
  if (l && u < Math.min(p, d) ? l = !1 : !l && d < Math.min(p, u) && (l = !0), p <= (l ? u : d))
    h = Math.max(s.top, Math.min(t.top, s.bottom - m)) - e.top, f = Math.min(400, l ? u : d);
  else {
    a = !0, f = Math.min(
      400,
      (o ? e.right : s.right - e.left) - 30
      /* Info.Margin */
    );
    let x = s.bottom - e.bottom;
    x >= m || x > e.top ? h = t.bottom - e.top : (c = "bottom", h = e.bottom - t.top);
  }
  let g = (e.bottom - e.top) / r.offsetHeight, b = (e.right - e.left) / r.offsetWidth;
  return {
    style: `${c}: ${h / g}px; max-width: ${f / b}px`,
    class: "cm-completionInfo-" + (a ? o ? "left-narrow" : "right-narrow" : l ? "left" : "right")
  };
}
const zh = /* @__PURE__ */ ie.define();
function Mk(i) {
  let e = i.addToOptions.slice();
  return i.icons && e.push({
    render(t) {
      let n = document.createElement("div");
      return n.classList.add("cm-completionIcon"), t.type && n.classList.add(...t.type.split(/\s+/g).map((s) => "cm-completionIcon-" + s)), n.setAttribute("aria-hidden", "true"), n;
    },
    position: 20
  }), e.push({
    render(t, n, s, r) {
      let o = document.createElement("span");
      o.className = "cm-completionLabel";
      let l = t.displayLabel || t.label, a = 0;
      for (let c = 0; c < r.length; ) {
        let h = r[c++], f = r[c++];
        h > a && o.appendChild(document.createTextNode(l.slice(a, h)));
        let u = o.appendChild(document.createElement("span"));
        u.appendChild(document.createTextNode(l.slice(h, f))), u.className = "cm-completionMatchedText", a = f;
      }
      return a < l.length && o.appendChild(document.createTextNode(l.slice(a))), o;
    },
    position: 50
  }, {
    render(t) {
      if (!t.detail)
        return null;
      let n = document.createElement("span");
      return n.className = "cm-completionDetail", n.textContent = t.detail, n;
    },
    position: 80
  }), e.sort((t, n) => t.position - n.position).map((t) => t.render);
}
function va(i, e, t) {
  if (i <= t)
    return { from: 0, to: i };
  if (e < 0 && (e = 0), e <= i >> 1) {
    let s = Math.floor(e / t);
    return { from: s * t, to: (s + 1) * t };
  }
  let n = Math.ceil((i - e) / t);
  return { from: i - n * t, to: i - (n - 1) * t };
}
class Qk {
  constructor(e, t, n) {
    this.view = e, this.stateField = t, this.applyCompletion = n, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
      read: () => this.measureInfo(),
      write: (a) => this.placeInfo(a),
      key: this
    }, this.space = null, this.currentClass = "";
    let s = e.state.field(t), { options: r, selected: o } = s.open, l = e.state.facet(Ge);
    this.optionContent = Mk(l), this.optionClass = l.optionClass, this.tooltipClass = l.tooltipClass, this.range = va(r.length, o, l.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(e.state), this.dom.addEventListener("mousedown", (a) => {
      let { options: c } = e.state.field(t).open;
      for (let h = a.target, f; h && h != this.dom; h = h.parentNode)
        if (h.nodeName == "LI" && (f = /-(\d+)$/.exec(h.id)) && +f[1] < c.length) {
          this.applyCompletion(e, c[+f[1]]), a.preventDefault();
          return;
        }
      if (a.target == this.list) {
        let h = this.list.classList.contains("cm-completionListIncompleteTop") && a.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && a.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
        h != null && (e.dispatch({ effects: zh.of(h) }), a.preventDefault());
      }
    }), this.dom.addEventListener("focusout", (a) => {
      let c = e.state.field(this.stateField, !1);
      c && c.tooltip && e.state.facet(Ge).closeOnBlur && a.relatedTarget != e.contentDOM && e.dispatch({ effects: cr.of(null) });
    }), this.showOptions(r, s.id);
  }
  mount() {
    this.updateSel();
  }
  showOptions(e, t) {
    this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(e, t, this.range)), this.list.addEventListener("scroll", () => {
      this.info && this.view.requestMeasure(this.placeInfoReq);
    });
  }
  update(e) {
    var t;
    let n = e.state.field(this.stateField), s = e.startState.field(this.stateField);
    if (this.updateTooltipClass(e.state), n != s) {
      let { options: r, selected: o, disabled: l } = n.open;
      (!s.open || s.open.options != r) && (this.range = va(r.length, o, e.state.facet(Ge).maxRenderedOptions), this.showOptions(r, n.id)), this.updateSel(), l != ((t = s.open) === null || t === void 0 ? void 0 : t.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!l);
    }
  }
  updateTooltipClass(e) {
    let t = this.tooltipClass(e);
    if (t != this.currentClass) {
      for (let n of this.currentClass.split(" "))
        n && this.dom.classList.remove(n);
      for (let n of t.split(" "))
        n && this.dom.classList.add(n);
      this.currentClass = t;
    }
  }
  positioned(e) {
    this.space = e, this.info && this.view.requestMeasure(this.placeInfoReq);
  }
  updateSel() {
    let e = this.view.state.field(this.stateField), t = e.open;
    (t.selected > -1 && t.selected < this.range.from || t.selected >= this.range.to) && (this.range = va(t.options.length, t.selected, this.view.state.facet(Ge).maxRenderedOptions), this.showOptions(t.options, e.id));
    let n = this.updateSelectedOption(t.selected);
    if (n) {
      this.destroyInfo();
      let { completion: s } = t.options[t.selected], { info: r } = s;
      if (!r)
        return;
      let o = typeof r == "string" ? document.createTextNode(r) : r(s);
      if (!o)
        return;
      "then" in o ? o.then((l) => {
        l && this.view.state.field(this.stateField, !1) == e && this.addInfoPane(l, s);
      }).catch((l) => xt(this.view.state, l, "completion info")) : (this.addInfoPane(o, s), n.setAttribute("aria-describedby", this.info.id));
    }
  }
  addInfoPane(e, t) {
    this.destroyInfo();
    let n = this.info = document.createElement("div");
    if (n.className = "cm-tooltip cm-completionInfo", n.id = "cm-completionInfo-" + Math.floor(Math.random() * 65535).toString(16), e.nodeType != null)
      n.appendChild(e), this.infoDestroy = null;
    else {
      let { dom: s, destroy: r } = e;
      n.appendChild(s), this.infoDestroy = r || null;
    }
    this.dom.appendChild(n), this.view.requestMeasure(this.placeInfoReq);
  }
  updateSelectedOption(e) {
    let t = null;
    for (let n = this.list.firstChild, s = this.range.from; n; n = n.nextSibling, s++)
      n.nodeName != "LI" || !n.id ? s-- : s == e ? n.hasAttribute("aria-selected") || (n.setAttribute("aria-selected", "true"), t = n) : n.hasAttribute("aria-selected") && (n.removeAttribute("aria-selected"), n.removeAttribute("aria-describedby"));
    return t && Vk(this.list, t), t;
  }
  measureInfo() {
    let e = this.dom.querySelector("[aria-selected]");
    if (!e || !this.info)
      return null;
    let t = this.dom.getBoundingClientRect(), n = this.info.getBoundingClientRect(), s = e.getBoundingClientRect(), r = this.space;
    if (!r) {
      let o = this.dom.ownerDocument.documentElement;
      r = { left: 0, top: 0, right: o.clientWidth, bottom: o.clientHeight };
    }
    return s.top > Math.min(r.bottom, t.bottom) - 10 || s.bottom < Math.max(r.top, t.top) + 10 ? null : this.view.state.facet(Ge).positionInfo(this.view, t, s, n, r, this.dom);
  }
  placeInfo(e) {
    this.info && (e ? (e.style && (this.info.style.cssText = e.style), this.info.className = "cm-tooltip cm-completionInfo " + (e.class || "")) : this.info.style.cssText = "top: -1e6px");
  }
  createListBox(e, t, n) {
    const s = document.createElement("ul");
    s.id = t, s.setAttribute("role", "listbox"), s.setAttribute("aria-expanded", "true"), s.setAttribute("aria-label", this.view.state.phrase("Completions")), s.addEventListener("mousedown", (o) => {
      o.target == s && o.preventDefault();
    });
    let r = null;
    for (let o = n.from; o < n.to; o++) {
      let { completion: l, match: a } = e[o], { section: c } = l;
      if (c) {
        let u = typeof c == "string" ? c : c.name;
        if (u != r && (o > n.from || n.from == 0))
          if (r = u, typeof c != "string" && c.header)
            s.appendChild(c.header(c));
          else {
            let d = s.appendChild(document.createElement("completion-section"));
            d.textContent = u;
          }
      }
      const h = s.appendChild(document.createElement("li"));
      h.id = t + "-" + o, h.setAttribute("role", "option");
      let f = this.optionClass(l);
      f && (h.className = f);
      for (let u of this.optionContent) {
        let d = u(l, this.view.state, this.view, a);
        d && h.appendChild(d);
      }
    }
    return n.from && s.classList.add("cm-completionListIncompleteTop"), n.to < e.length && s.classList.add("cm-completionListIncompleteBottom"), s;
  }
  destroyInfo() {
    this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null);
  }
  destroy() {
    this.destroyInfo();
  }
}
function Ik(i, e) {
  return (t) => new Qk(t, i, e);
}
function Vk(i, e) {
  let t = i.getBoundingClientRect(), n = e.getBoundingClientRect(), s = t.height / i.offsetHeight;
  n.top < t.top ? i.scrollTop -= (t.top - n.top) / s : n.bottom > t.bottom && (i.scrollTop += (n.bottom - t.bottom) / s);
}
function Td(i) {
  return (i.boost || 0) * 100 + (i.apply ? 10 : 0) + (i.info ? 5 : 0) + (i.type ? 1 : 0);
}
function Lk(i, e) {
  let t = [], n = null, s = null, r = (h) => {
    t.push(h);
    let { section: f } = h.completion;
    if (f) {
      n || (n = []);
      let u = typeof f == "string" ? f : f.name;
      n.some((d) => d.name == u) || n.push(typeof f == "string" ? { name: u } : f);
    }
  }, o = e.facet(Ge);
  for (let h of i)
    if (h.hasResult()) {
      let f = h.result.getMatch;
      if (h.result.filter === !1)
        for (let u of h.result.options)
          r(new kd(u, h.source, f ? f(u) : [], 1e9 - t.length));
      else {
        let u = e.sliceDoc(h.from, h.to), d, p = o.filterStrict ? new Rk(u) : new Nk(u);
        for (let m of h.result.options)
          if (d = p.match(m.label)) {
            let g = m.displayLabel ? f ? f(m, d.matched) : [] : d.matched, b = d.score + (m.boost || 0);
            if (r(new kd(m, h.source, g, b)), typeof m.section == "object" && m.section.rank === "dynamic") {
              let { name: x } = m.section;
              s || (s = /* @__PURE__ */ Object.create(null)), s[x] = Math.max(b, s[x] || -1e9);
            }
          }
      }
    }
  if (n) {
    let h = /* @__PURE__ */ Object.create(null), f = 0, u = (d, p) => (d.rank === "dynamic" && p.rank === "dynamic" ? s[p.name] - s[d.name] : 0) || (typeof d.rank == "number" ? d.rank : 1e9) - (typeof p.rank == "number" ? p.rank : 1e9) || (d.name < p.name ? -1 : 1);
    for (let d of n.sort(u))
      f -= 1e5, h[d.name] = f;
    for (let d of t) {
      let { section: p } = d.completion;
      p && (d.score += h[typeof p == "string" ? p : p.name]);
    }
  }
  let l = [], a = null, c = o.compareCompletions;
  for (let h of t.sort((f, u) => u.score - f.score || c(f.completion, u.completion))) {
    let f = h.completion;
    !a || a.label != f.label || a.detail != f.detail || a.type != null && f.type != null && a.type != f.type || a.apply != f.apply || a.boost != f.boost ? l.push(h) : Td(h.completion) > Td(a) && (l[l.length - 1] = h), a = h.completion;
  }
  return l;
}
class Wn {
  constructor(e, t, n, s, r, o) {
    this.options = e, this.attrs = t, this.tooltip = n, this.timestamp = s, this.selected = r, this.disabled = o;
  }
  setSelected(e, t) {
    return e == this.selected || e >= this.options.length ? this : new Wn(this.options, Ad(t, e), this.tooltip, this.timestamp, e, this.disabled);
  }
  static build(e, t, n, s, r, o) {
    if (s && !o && e.some((c) => c.isPending))
      return s.setDisabled();
    let l = Lk(e, t);
    if (!l.length)
      return s && e.some((c) => c.isPending) ? s.setDisabled() : null;
    let a = t.facet(Ge).selectOnOpen ? 0 : -1;
    if (s && s.selected != a && s.selected != -1) {
      let c = s.options[s.selected].completion;
      for (let h = 0; h < l.length; h++)
        if (l[h].completion == c) {
          a = h;
          break;
        }
    }
    return new Wn(l, Ad(n, a), {
      pos: e.reduce((c, h) => h.hasResult() ? Math.min(c, h.from) : c, 1e8),
      create: Hk,
      above: r.aboveCursor
    }, s ? s.timestamp : Date.now(), a, !1);
  }
  map(e) {
    return new Wn(this.options, this.attrs, { ...this.tooltip, pos: e.mapPos(this.tooltip.pos) }, this.timestamp, this.selected, this.disabled);
  }
  setDisabled() {
    return new Wn(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0);
  }
}
class sl {
  constructor(e, t, n) {
    this.active = e, this.id = t, this.open = n;
  }
  static start() {
    return new sl(Fk, "cm-ac-" + Math.floor(Math.random() * 2e6).toString(36), null);
  }
  update(e) {
    let { state: t } = e, n = t.facet(Ge), r = (n.override || t.languageDataAt("autocomplete", wn(t)).map(Dk)).map((a) => (this.active.find((h) => h.source == a) || new Vt(
      a,
      this.active.some(
        (h) => h.state != 0
        /* State.Inactive */
      ) ? 1 : 0
      /* State.Inactive */
    )).update(e, n));
    r.length == this.active.length && r.every((a, c) => a == this.active[c]) && (r = this.active);
    let o = this.open, l = e.effects.some((a) => a.is(jh));
    o && e.docChanged && (o = o.map(e.changes)), e.selection || r.some((a) => a.hasResult() && e.changes.touchesRange(a.from, a.to)) || !Bk(r, this.active) || l ? o = Wn.build(r, t, this.id, o, n, l) : o && o.disabled && !r.some((a) => a.isPending) && (o = null), !o && r.every((a) => !a.isPending) && r.some((a) => a.hasResult()) && (r = r.map((a) => a.hasResult() ? new Vt(
      a.source,
      0
      /* State.Inactive */
    ) : a));
    for (let a of e.effects)
      a.is(zh) && (o = o && o.setSelected(a.value, this.id));
    return r == this.active && o == this.open ? this : new sl(r, this.id, o);
  }
  get tooltip() {
    return this.open ? this.open.tooltip : null;
  }
  get attrs() {
    return this.open ? this.open.attrs : this.active.length ? Xk : Wk;
  }
}
function Bk(i, e) {
  if (i == e)
    return !0;
  for (let t = 0, n = 0; ; ) {
    for (; t < i.length && !i[t].hasResult(); )
      t++;
    for (; n < e.length && !e[n].hasResult(); )
      n++;
    let s = t == i.length, r = n == e.length;
    if (s || r)
      return s == r;
    if (i[t++].result != e[n++].result)
      return !1;
  }
}
const Xk = {
  "aria-autocomplete": "list"
}, Wk = {};
function Ad(i, e) {
  let t = {
    "aria-autocomplete": "list",
    "aria-haspopup": "listbox",
    "aria-controls": i
  };
  return e > -1 && (t["aria-activedescendant"] = i + "-" + e), t;
}
const Fk = [];
function UO(i, e) {
  if (i.isUserEvent("input.complete")) {
    let n = i.annotation(HO);
    if (n && e.activateOnCompletion(n))
      return 12;
  }
  let t = i.isUserEvent("input.type");
  return t && e.activateOnTyping ? 5 : t ? 1 : i.isUserEvent("delete.backward") ? 2 : i.selection ? 8 : i.docChanged ? 16 : 0;
}
class Vt {
  constructor(e, t, n = !1) {
    this.source = e, this.state = t, this.explicit = n;
  }
  hasResult() {
    return !1;
  }
  get isPending() {
    return this.state == 1;
  }
  update(e, t) {
    let n = UO(e, t), s = this;
    (n & 8 || n & 16 && this.touches(e)) && (s = new Vt(
      s.source,
      0
      /* State.Inactive */
    )), n & 4 && s.state == 0 && (s = new Vt(
      this.source,
      1
      /* State.Pending */
    )), s = s.updateFor(e, n);
    for (let r of e.effects)
      if (r.is(nl))
        s = new Vt(s.source, 1, r.value);
      else if (r.is(cr))
        s = new Vt(
          s.source,
          0
          /* State.Inactive */
        );
      else if (r.is(jh))
        for (let o of r.value)
          o.source == s.source && (s = o);
    return s;
  }
  updateFor(e, t) {
    return this.map(e.changes);
  }
  map(e) {
    return this;
  }
  touches(e) {
    return e.changes.touchesRange(wn(e.state));
  }
}
class es extends Vt {
  constructor(e, t, n, s, r, o) {
    super(e, 3, t), this.limit = n, this.result = s, this.from = r, this.to = o;
  }
  hasResult() {
    return !0;
  }
  updateFor(e, t) {
    var n;
    if (!(t & 3))
      return this.map(e.changes);
    let s = this.result;
    s.map && !e.changes.empty && (s = s.map(s, e.changes));
    let r = e.changes.mapPos(this.from), o = e.changes.mapPos(this.to, 1), l = wn(e.state);
    if (l > o || !s || t & 2 && (wn(e.startState) == this.from || l < this.limit))
      return new Vt(
        this.source,
        t & 4 ? 1 : 0
        /* State.Inactive */
      );
    let a = e.changes.mapPos(this.limit);
    return qk(s.validFor, e.state, r, o) ? new es(this.source, this.explicit, a, s, r, o) : s.update && (s = s.update(s, r, o, new FO(e.state, l, !1))) ? new es(this.source, this.explicit, a, s, s.from, (n = s.to) !== null && n !== void 0 ? n : wn(e.state)) : new Vt(this.source, 1, this.explicit);
  }
  map(e) {
    return e.empty ? this : (this.result.map ? this.result.map(this.result, e) : this.result) ? new es(this.source, this.explicit, e.mapPos(this.limit), this.result, e.mapPos(this.from), e.mapPos(this.to, 1)) : new Vt(
      this.source,
      0
      /* State.Inactive */
    );
  }
  touches(e) {
    return e.changes.touchesRange(this.from, this.to);
  }
}
function qk(i, e, t, n) {
  if (!i)
    return !1;
  let s = e.sliceDoc(t, n);
  return typeof i == "function" ? i(s, t, n, e) : qO(i, !0).test(s);
}
const jh = /* @__PURE__ */ ie.define({
  map(i, e) {
    return i.map((t) => t.map(e));
  }
}), Ot = /* @__PURE__ */ rt.define({
  create() {
    return sl.start();
  },
  update(i, e) {
    return i.update(e);
  },
  provide: (i) => [
    $h.from(i, (e) => e.tooltip),
    X.contentAttributes.from(i, (e) => e.attrs)
  ]
});
function Yh(i, e) {
  const t = e.completion.apply || e.completion.label;
  let n = i.state.field(Ot).active.find((s) => s.source == e.source);
  return n instanceof es ? (typeof t == "string" ? i.dispatch({
    ...$k(i.state, t, n.from, n.to),
    annotations: HO.of(e.completion)
  }) : t(i, e.completion, n.from, n.to), !0) : !1;
}
const Hk = /* @__PURE__ */ Ik(Ot, Yh);
function Jr(i, e = "option") {
  return (t) => {
    let n = t.state.field(Ot, !1);
    if (!n || !n.open || n.open.disabled || Date.now() - n.open.timestamp < t.state.facet(Ge).interactionDelay)
      return !1;
    let s = 1, r;
    e == "page" && (r = $g(t, n.open.tooltip)) && (s = Math.max(2, Math.floor(r.dom.offsetHeight / r.dom.querySelector("li").offsetHeight) - 1));
    let { length: o } = n.open.options, l = n.open.selected > -1 ? n.open.selected + s * (i ? 1 : -1) : i ? 0 : o - 1;
    return l < 0 ? l = e == "page" ? 0 : o - 1 : l >= o && (l = e == "page" ? o - 1 : 0), t.dispatch({ effects: zh.of(l) }), !0;
  };
}
const Uk = (i) => {
  let e = i.state.field(Ot, !1);
  return i.state.readOnly || !e || !e.open || e.open.selected < 0 || e.open.disabled || Date.now() - e.open.timestamp < i.state.facet(Ge).interactionDelay ? !1 : Yh(i, e.open.options[e.open.selected]);
}, Sa = (i) => i.state.field(Ot, !1) ? (i.dispatch({ effects: nl.of(!0) }), !0) : !1, Gk = (i) => {
  let e = i.state.field(Ot, !1);
  return !e || !e.active.some(
    (t) => t.state != 0
    /* State.Inactive */
  ) ? !1 : (i.dispatch({ effects: cr.of(null) }), !0);
};
class zk {
  constructor(e, t) {
    this.active = e, this.context = t, this.time = Date.now(), this.updates = [], this.done = void 0;
  }
}
const jk = 50, Yk = 1e3, Kk = /* @__PURE__ */ Ve.fromClass(class {
  constructor(i) {
    this.view = i, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
    for (let e of i.state.field(Ot).active)
      e.isPending && this.startQuery(e);
  }
  update(i) {
    let e = i.state.field(Ot), t = i.state.facet(Ge);
    if (!i.selectionSet && !i.docChanged && i.startState.field(Ot) == e)
      return;
    let n = i.transactions.some((r) => {
      let o = UO(r, t);
      return o & 8 || (r.selection || r.docChanged) && !(o & 3);
    });
    for (let r = 0; r < this.running.length; r++) {
      let o = this.running[r];
      if (n || o.context.abortOnDocChange && i.docChanged || o.updates.length + i.transactions.length > jk && Date.now() - o.time > Yk) {
        for (let l of o.context.abortListeners)
          try {
            l();
          } catch (a) {
            xt(this.view.state, a);
          }
        o.context.abortListeners = null, this.running.splice(r--, 1);
      } else
        o.updates.push(...i.transactions);
    }
    this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), i.transactions.some((r) => r.effects.some((o) => o.is(nl))) && (this.pendingStart = !0);
    let s = this.pendingStart ? 50 : t.activateOnTypingDelay;
    if (this.debounceUpdate = e.active.some((r) => r.isPending && !this.running.some((o) => o.active.source == r.source)) ? setTimeout(() => this.startUpdate(), s) : -1, this.composing != 0)
      for (let r of i.transactions)
        r.isUserEvent("input.type") ? this.composing = 2 : this.composing == 2 && r.selection && (this.composing = 3);
  }
  startUpdate() {
    this.debounceUpdate = -1, this.pendingStart = !1;
    let { state: i } = this.view, e = i.field(Ot);
    for (let t of e.active)
      t.isPending && !this.running.some((n) => n.active.source == t.source) && this.startQuery(t);
    this.running.length && e.open && e.open.disabled && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(Ge).updateSyncTime));
  }
  startQuery(i) {
    let { state: e } = this.view, t = wn(e), n = new FO(e, t, i.explicit, this.view), s = new zk(i, n);
    this.running.push(s), Promise.resolve(i.source(n)).then((r) => {
      s.context.aborted || (s.done = r || null, this.scheduleAccept());
    }, (r) => {
      this.view.dispatch({ effects: cr.of(null) }), xt(this.view.state, r);
    });
  }
  scheduleAccept() {
    this.running.every((i) => i.done !== void 0) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(Ge).updateSyncTime));
  }
  // For each finished query in this.running, try to create a result
  // or, if appropriate, restart the query.
  accept() {
    var i;
    this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
    let e = [], t = this.view.state.facet(Ge), n = this.view.state.field(Ot);
    for (let s = 0; s < this.running.length; s++) {
      let r = this.running[s];
      if (r.done === void 0)
        continue;
      if (this.running.splice(s--, 1), r.done) {
        let l = wn(r.updates.length ? r.updates[0].startState : this.view.state), a = Math.min(l, r.done.from + (r.active.explicit ? 0 : 1)), c = new es(r.active.source, r.active.explicit, a, r.done, r.done.from, (i = r.done.to) !== null && i !== void 0 ? i : l);
        for (let h of r.updates)
          c = c.update(h, t);
        if (c.hasResult()) {
          e.push(c);
          continue;
        }
      }
      let o = n.active.find((l) => l.source == r.active.source);
      if (o && o.isPending)
        if (r.done == null) {
          let l = new Vt(
            r.active.source,
            0
            /* State.Inactive */
          );
          for (let a of r.updates)
            l = l.update(a, t);
          l.isPending || e.push(l);
        } else
          this.startQuery(o);
    }
    (e.length || n.open && n.open.disabled) && this.view.dispatch({ effects: jh.of(e) });
  }
}, {
  eventHandlers: {
    blur(i) {
      let e = this.view.state.field(Ot, !1);
      if (e && e.tooltip && this.view.state.facet(Ge).closeOnBlur) {
        let t = e.open && $g(this.view, e.open.tooltip);
        (!t || !t.dom.contains(i.relatedTarget)) && setTimeout(() => this.view.dispatch({ effects: cr.of(null) }), 10);
      }
    },
    compositionstart() {
      this.composing = 1;
    },
    compositionend() {
      this.composing == 3 && setTimeout(() => this.view.dispatch({ effects: nl.of(!1) }), 20), this.composing = 0;
    }
  }
}), Zk = typeof navigator == "object" && /* @__PURE__ */ /Win/.test(navigator.platform), Jk = /* @__PURE__ */ An.highest(/* @__PURE__ */ X.domEventHandlers({
  keydown(i, e) {
    let t = e.state.field(Ot, !1);
    if (!t || !t.open || t.open.disabled || t.open.selected < 0 || i.key.length > 1 || i.ctrlKey && !(Zk && i.altKey) || i.metaKey)
      return !1;
    let n = t.open.options[t.open.selected], s = t.active.find((o) => o.source == n.source), r = n.completion.commitCharacters || s.result.commitCharacters;
    return r && r.indexOf(i.key) > -1 && Yh(e, n), !1;
  }
})), eC = /* @__PURE__ */ X.baseTheme({
  ".cm-tooltip.cm-tooltip-autocomplete": {
    "& > ul": {
      fontFamily: "monospace",
      whiteSpace: "nowrap",
      overflow: "hidden auto",
      maxWidth_fallback: "700px",
      maxWidth: "min(700px, 95vw)",
      minWidth: "250px",
      maxHeight: "10em",
      height: "100%",
      listStyle: "none",
      margin: 0,
      padding: 0,
      "& > li, & > completion-section": {
        padding: "1px 3px",
        lineHeight: 1.2
      },
      "& > li": {
        overflowX: "hidden",
        textOverflow: "ellipsis",
        cursor: "pointer"
      },
      "& > completion-section": {
        display: "list-item",
        borderBottom: "1px solid silver",
        paddingLeft: "0.5em",
        opacity: 0.7
      }
    }
  },
  "&light .cm-tooltip-autocomplete ul li[aria-selected]": {
    background: "#17c",
    color: "white"
  },
  "&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
    background: "#777"
  },
  "&dark .cm-tooltip-autocomplete ul li[aria-selected]": {
    background: "#347",
    color: "white"
  },
  "&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
    background: "#444"
  },
  ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": {
    content: '"···"',
    opacity: 0.5,
    display: "block",
    textAlign: "center",
    cursor: "pointer"
  },
  ".cm-tooltip.cm-completionInfo": {
    position: "absolute",
    padding: "3px 9px",
    width: "max-content",
    maxWidth: "400px",
    boxSizing: "border-box",
    whiteSpace: "pre-line"
  },
  ".cm-completionInfo.cm-completionInfo-left": { right: "100%" },
  ".cm-completionInfo.cm-completionInfo-right": { left: "100%" },
  ".cm-completionInfo.cm-completionInfo-left-narrow": { right: "30px" },
  ".cm-completionInfo.cm-completionInfo-right-narrow": { left: "30px" },
  "&light .cm-snippetField": { backgroundColor: "#00000022" },
  "&dark .cm-snippetField": { backgroundColor: "#ffffff22" },
  ".cm-snippetFieldPosition": {
    verticalAlign: "text-top",
    width: 0,
    height: "1.15em",
    display: "inline-block",
    margin: "0 -0.7px -.7em",
    borderLeft: "1.4px dotted #888"
  },
  ".cm-completionMatchedText": {
    textDecoration: "underline"
  },
  ".cm-completionDetail": {
    marginLeft: "0.5em",
    fontStyle: "italic"
  },
  ".cm-completionIcon": {
    fontSize: "90%",
    width: ".8em",
    display: "inline-block",
    textAlign: "center",
    paddingRight: ".6em",
    opacity: "0.6",
    boxSizing: "content-box"
  },
  ".cm-completionIcon-function, .cm-completionIcon-method": {
    "&:after": { content: "'ƒ'" }
  },
  ".cm-completionIcon-class": {
    "&:after": { content: "'○'" }
  },
  ".cm-completionIcon-interface": {
    "&:after": { content: "'◌'" }
  },
  ".cm-completionIcon-variable": {
    "&:after": { content: "'𝑥'" }
  },
  ".cm-completionIcon-constant": {
    "&:after": { content: "'𝐶'" }
  },
  ".cm-completionIcon-type": {
    "&:after": { content: "'𝑡'" }
  },
  ".cm-completionIcon-enum": {
    "&:after": { content: "'∪'" }
  },
  ".cm-completionIcon-property": {
    "&:after": { content: "'□'" }
  },
  ".cm-completionIcon-keyword": {
    "&:after": { content: "'🔑︎'" }
    // Disable emoji rendering
  },
  ".cm-completionIcon-namespace": {
    "&:after": { content: "'▢'" }
  },
  ".cm-completionIcon-text": {
    "&:after": { content: "'abc'", fontSize: "50%", verticalAlign: "middle" }
  }
}), hr = {
  brackets: ["(", "[", "{", "'", '"'],
  before: ")]}:;>",
  stringPrefixes: []
}, gn = /* @__PURE__ */ ie.define({
  map(i, e) {
    let t = e.mapPos(i, -1, ft.TrackAfter);
    return t ?? void 0;
  }
}), Kh = /* @__PURE__ */ new class extends Yi {
}();
Kh.startSide = 1;
Kh.endSide = -1;
const GO = /* @__PURE__ */ rt.define({
  create() {
    return ce.empty;
  },
  update(i, e) {
    if (i = i.map(e.changes), e.selection) {
      let t = e.state.doc.lineAt(e.selection.main.head);
      i = i.update({ filter: (n) => n >= t.from && n <= t.to });
    }
    for (let t of e.effects)
      t.is(gn) && (i = i.update({ add: [Kh.range(t.value, t.value + 1)] }));
    return i;
  }
});
function tC() {
  return [nC, GO];
}
const wa = "()[]{}<>«»»«［］｛｝";
function zO(i) {
  for (let e = 0; e < wa.length; e += 2)
    if (wa.charCodeAt(e) == i)
      return wa.charAt(e + 1);
  return uh(i < 128 ? i : i + 1);
}
function jO(i, e) {
  return i.languageDataAt("closeBrackets", e)[0] || hr;
}
const iC = typeof navigator == "object" && /* @__PURE__ */ /Android\b/.test(navigator.userAgent), nC = /* @__PURE__ */ X.inputHandler.of((i, e, t, n) => {
  if ((iC ? i.composing : i.compositionStarted) || i.state.readOnly)
    return !1;
  let s = i.state.selection.main;
  if (n.length > 2 || n.length == 2 && mi(gt(n, 0)) == 1 || e != s.from || t != s.to)
    return !1;
  let r = oC(i.state, n);
  return r ? (i.dispatch(r), !0) : !1;
}), sC = ({ state: i, dispatch: e }) => {
  if (i.readOnly)
    return !1;
  let n = jO(i, i.selection.main.head).brackets || hr.brackets, s = null, r = i.changeByRange((o) => {
    if (o.empty) {
      let l = lC(i.doc, o.head);
      for (let a of n)
        if (a == l && Ql(i.doc, o.head) == zO(gt(a, 0)))
          return {
            changes: { from: o.head - a.length, to: o.head + a.length },
            range: P.cursor(o.head - a.length)
          };
    }
    return { range: s = o };
  });
  return s || e(i.update(r, { scrollIntoView: !0, userEvent: "delete.backward" })), !s;
}, rC = [
  { key: "Backspace", run: sC }
];
function oC(i, e) {
  let t = jO(i, i.selection.main.head), n = t.brackets || hr.brackets;
  for (let s of n) {
    let r = zO(gt(s, 0));
    if (e == s)
      return r == s ? hC(i, s, n.indexOf(s + s + s) > -1, t) : aC(i, s, r, t.before || hr.before);
    if (e == r && YO(i, i.selection.main.from))
      return cC(i, s, r);
  }
  return null;
}
function YO(i, e) {
  let t = !1;
  return i.field(GO).between(0, i.doc.length, (n) => {
    n == e && (t = !0);
  }), t;
}
function Ql(i, e) {
  let t = i.sliceString(e, e + 2);
  return t.slice(0, mi(gt(t, 0)));
}
function lC(i, e) {
  let t = i.sliceString(e - 2, e);
  return mi(gt(t, 0)) == t.length ? t : t.slice(1);
}
function aC(i, e, t, n) {
  let s = null, r = i.changeByRange((o) => {
    if (!o.empty)
      return {
        changes: [{ insert: e, from: o.from }, { insert: t, from: o.to }],
        effects: gn.of(o.to + e.length),
        range: P.range(o.anchor + e.length, o.head + e.length)
      };
    let l = Ql(i.doc, o.head);
    return !l || /\s/.test(l) || n.indexOf(l) > -1 ? {
      changes: { insert: e + t, from: o.head },
      effects: gn.of(o.head + e.length),
      range: P.cursor(o.head + e.length)
    } : { range: s = o };
  });
  return s ? null : i.update(r, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function cC(i, e, t) {
  let n = null, s = i.changeByRange((r) => r.empty && Ql(i.doc, r.head) == t ? {
    changes: { from: r.head, to: r.head + t.length, insert: t },
    range: P.cursor(r.head + t.length)
  } : n = { range: r });
  return n ? null : i.update(s, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function hC(i, e, t, n) {
  let s = n.stringPrefixes || hr.stringPrefixes, r = null, o = i.changeByRange((l) => {
    if (!l.empty)
      return {
        changes: [{ insert: e, from: l.from }, { insert: e, from: l.to }],
        effects: gn.of(l.to + e.length),
        range: P.range(l.anchor + e.length, l.head + e.length)
      };
    let a = l.head, c = Ql(i.doc, a), h;
    if (c == e) {
      if ($d(i, a))
        return {
          changes: { insert: e + e, from: a },
          effects: gn.of(a + e.length),
          range: P.cursor(a + e.length)
        };
      if (YO(i, a)) {
        let u = t && i.sliceDoc(a, a + e.length * 3) == e + e + e ? e + e + e : e;
        return {
          changes: { from: a, to: a + u.length, insert: u },
          range: P.cursor(a + u.length)
        };
      }
    } else {
      if (t && i.sliceDoc(a - 2 * e.length, a) == e + e && (h = Dd(i, a - 2 * e.length, s)) > -1 && $d(i, h))
        return {
          changes: { insert: e + e + e + e, from: a },
          effects: gn.of(a + e.length),
          range: P.cursor(a + e.length)
        };
      if (i.charCategorizer(a)(c) != Ne.Word && Dd(i, a, s) > -1 && !fC(i, a, e, s))
        return {
          changes: { insert: e + e, from: a },
          effects: gn.of(a + e.length),
          range: P.cursor(a + e.length)
        };
    }
    return { range: r = l };
  });
  return r ? null : i.update(o, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function $d(i, e) {
  let t = je(i).resolveInner(e + 1);
  return t.parent && t.from == e;
}
function fC(i, e, t, n) {
  let s = je(i).resolveInner(e, -1), r = n.reduce((o, l) => Math.max(o, l.length), 0);
  for (let o = 0; o < 5; o++) {
    let l = i.sliceDoc(s.from, Math.min(s.to, s.from + t.length + r)), a = l.indexOf(t);
    if (!a || a > -1 && n.indexOf(l.slice(0, a)) > -1) {
      let h = s.firstChild;
      for (; h && h.from == s.from && h.to - h.from > t.length + a; ) {
        if (i.sliceDoc(h.to - t.length, h.to) == t)
          return !1;
        h = h.firstChild;
      }
      return !0;
    }
    let c = s.to == e && s.parent;
    if (!c)
      break;
    s = c;
  }
  return !1;
}
function Dd(i, e, t) {
  let n = i.charCategorizer(e);
  if (n(i.sliceDoc(e - 1, e)) != Ne.Word)
    return e;
  for (let s of t) {
    let r = e - s.length;
    if (i.sliceDoc(r, e) == s && n(i.sliceDoc(r - 1, r)) != Ne.Word)
      return r;
  }
  return -1;
}
function uC(i = {}) {
  return [
    Jk,
    Ot,
    Ge.of(i),
    Kk,
    dC,
    eC
  ];
}
const KO = [
  { key: "Ctrl-Space", run: Sa },
  { mac: "Alt-`", run: Sa },
  { mac: "Alt-i", run: Sa },
  { key: "Escape", run: Gk },
  { key: "ArrowDown", run: /* @__PURE__ */ Jr(!0) },
  { key: "ArrowUp", run: /* @__PURE__ */ Jr(!1) },
  { key: "PageDown", run: /* @__PURE__ */ Jr(!0, "page") },
  { key: "PageUp", run: /* @__PURE__ */ Jr(!1, "page") },
  { key: "Enter", run: Uk }
], dC = /* @__PURE__ */ An.highest(/* @__PURE__ */ Th.computeN([Ge], (i) => i.facet(Ge).defaultKeymap ? [KO] : []));
class Nd {
  constructor(e, t, n) {
    this.from = e, this.to = t, this.diagnostic = n;
  }
}
class dn {
  constructor(e, t, n) {
    this.diagnostics = e, this.panel = t, this.selected = n;
  }
  static init(e, t, n) {
    let s = n.facet(fr).markerFilter;
    s && (e = s(e, n));
    let r = e.slice().sort((d, p) => d.from - p.from || d.to - p.to), o = new Ni(), l = [], a = 0, c = n.doc.iter(), h = 0, f = n.doc.length;
    for (let d = 0; ; ) {
      let p = d == r.length ? null : r[d];
      if (!p && !l.length)
        break;
      let m, g;
      if (l.length)
        m = a, g = l.reduce((S, C) => Math.min(S, C.to), p && p.from > m ? p.from : 1e8);
      else {
        if (m = p.from, m > f)
          break;
        g = p.to, l.push(p), d++;
      }
      for (; d < r.length; ) {
        let S = r[d];
        if (S.from == m && (S.to > S.from || S.to == m))
          l.push(S), d++, g = Math.min(S.to, g);
        else {
          g = Math.min(S.from, g);
          break;
        }
      }
      g = Math.min(g, f);
      let b = !1;
      if (l.some((S) => S.from == m && (S.to == g || g == f)) && (b = m == g, !b && g - m < 10)) {
        let S = m - (h + c.value.length);
        S > 0 && (c.next(S), h = m);
        for (let C = m; ; ) {
          if (C >= g) {
            b = !0;
            break;
          }
          if (!c.lineBreak && h + c.value.length > C)
            break;
          C = h + c.value.length, h += c.value.length, c.next();
        }
      }
      let x = CC(l);
      if (b)
        o.add(m, m, Y.widget({
          widget: new SC(x),
          diagnostics: l.slice()
        }));
      else {
        let S = l.reduce((C, v) => v.markClass ? C + " " + v.markClass : C, "");
        o.add(m, g, Y.mark({
          class: "cm-lintRange cm-lintRange-" + x + S,
          diagnostics: l.slice(),
          inclusiveEnd: l.some((C) => C.to > g)
        }));
      }
      if (a = g, a == f)
        break;
      for (let S = 0; S < l.length; S++)
        l[S].to <= a && l.splice(S--, 1);
    }
    let u = o.finish();
    return new dn(u, t, nn(u));
  }
}
function nn(i, e = null, t = 0) {
  let n = null;
  return i.between(t, 1e9, (s, r, { spec: o }) => {
    if (!(e && o.diagnostics.indexOf(e) < 0))
      if (!n)
        n = new Nd(s, r, e || o.diagnostics[0]);
      else {
        if (o.diagnostics.indexOf(n.diagnostic) < 0)
          return !1;
        n = new Nd(n.from, r, n.diagnostic);
      }
  }), n;
}
function pC(i, e) {
  let t = e.pos, n = e.end || t, s = i.state.facet(fr).hideOn(i, t, n);
  if (s != null)
    return s;
  let r = i.startState.doc.lineAt(e.pos);
  return !!(i.effects.some((o) => o.is(ZO)) || i.changes.touchesRange(r.from, Math.max(r.to, n)));
}
function mC(i, e) {
  return i.field(Nt, !1) ? e : e.concat(ie.appendConfig.of(EC));
}
const ZO = /* @__PURE__ */ ie.define(), Zh = /* @__PURE__ */ ie.define(), JO = /* @__PURE__ */ ie.define(), Nt = /* @__PURE__ */ rt.define({
  create() {
    return new dn(Y.none, null, null);
  },
  update(i, e) {
    if (e.docChanged && i.diagnostics.size) {
      let t = i.diagnostics.map(e.changes), n = null, s = i.panel;
      if (i.selected) {
        let r = e.changes.mapPos(i.selected.from, 1);
        n = nn(t, i.selected.diagnostic, r) || nn(t, null, r);
      }
      !t.size && s && e.state.facet(fr).autoPanel && (s = null), i = new dn(t, s, n);
    }
    for (let t of e.effects)
      if (t.is(ZO)) {
        let n = e.state.facet(fr).autoPanel ? t.value.length ? ur.open : null : i.panel;
        i = dn.init(t.value, n, e.state);
      } else t.is(Zh) ? i = new dn(i.diagnostics, t.value ? ur.open : null, i.selected) : t.is(JO) && (i = new dn(i.diagnostics, i.panel, t.value));
    return i;
  },
  provide: (i) => [
    sr.from(i, (e) => e.panel),
    X.decorations.from(i, (e) => e.diagnostics)
  ]
}), gC = /* @__PURE__ */ Y.mark({ class: "cm-lintRange cm-lintRange-active" });
function OC(i, e, t) {
  let { diagnostics: n } = i.state.field(Nt), s, r = -1, o = -1;
  n.between(e - (t < 0 ? 1 : 0), e + (t > 0 ? 1 : 0), (a, c, { spec: h }) => {
    if (e >= a && e <= c && (a == c || (e > a || t > 0) && (e < c || t < 0)))
      return s = h.diagnostics, r = a, o = c, !1;
  });
  let l = i.state.facet(fr).tooltipFilter;
  return s && l && (s = l(s, i.state)), s ? {
    pos: r,
    end: o,
    above: i.state.doc.lineAt(r).to < o,
    create() {
      return { dom: bC(i, s) };
    }
  } : null;
}
function bC(i, e) {
  return Ce("ul", { class: "cm-tooltip-lint" }, e.map((t) => t0(i, t, !1)));
}
const yC = (i) => {
  let e = i.state.field(Nt, !1);
  (!e || !e.panel) && i.dispatch({ effects: mC(i.state, [Zh.of(!0)]) });
  let t = Dh(i, ur.open);
  return t && t.dom.querySelector(".cm-panel-lint ul").focus(), !0;
}, Rd = (i) => {
  let e = i.state.field(Nt, !1);
  return !e || !e.panel ? !1 : (i.dispatch({ effects: Zh.of(!1) }), !0);
}, xC = (i) => {
  let e = i.state.field(Nt, !1);
  if (!e)
    return !1;
  let t = i.state.selection.main, n = nn(e.diagnostics, null, t.to + 1);
  return !n && (n = nn(e.diagnostics, null, 0), !n || n.from == t.from && n.to == t.to) ? !1 : (i.dispatch({ selection: { anchor: n.from, head: n.to }, scrollIntoView: !0 }), OS(i, n.from, 1, {
    tooltip: i0,
    until: (s) => s.docChanged || s.newSelection.main.head < n.from || s.newSelection.main.head > n.to
  }), !0);
}, vC = [
  { key: "Mod-Shift-m", run: yC, preventDefault: !0 },
  { key: "F8", run: xC }
], fr = /* @__PURE__ */ L.define({
  combine(i) {
    return {
      sources: i.map((e) => e.source).filter((e) => e != null),
      ...wi(i.map((e) => e.config), {
        delay: 750,
        markerFilter: null,
        tooltipFilter: null,
        needsRefresh: null,
        hideOn: () => null
      }, {
        delay: Math.max,
        markerFilter: _d,
        tooltipFilter: _d,
        needsRefresh: (e, t) => e ? t ? (n) => e(n) || t(n) : e : t,
        hideOn: (e, t) => e ? t ? (n, s, r) => e(n, s, r) || t(n, s, r) : e : t,
        autoPanel: (e, t) => e || t
      })
    };
  }
});
function _d(i, e) {
  return i ? e ? (t, n) => e(i(t, n), n) : i : e;
}
function e0(i) {
  let e = [];
  if (i)
    e: for (let { name: t } of i) {
      for (let n = 0; n < t.length; n++) {
        let s = t[n];
        if (/[a-zA-Z]/.test(s) && !e.some((r) => r.toLowerCase() == s.toLowerCase())) {
          e.push(s);
          continue e;
        }
      }
      e.push("");
    }
  return e;
}
function t0(i, e, t) {
  var n;
  let s = t ? e0(e.actions) : [];
  return Ce("li", { class: "cm-diagnostic cm-diagnostic-" + e.severity }, Ce("span", { class: "cm-diagnosticText" }, e.renderMessage ? e.renderMessage(i) : e.message), (n = e.actions) === null || n === void 0 ? void 0 : n.map((r, o) => {
    let l = !1, a = (d) => {
      if (d.preventDefault(), l)
        return;
      l = !0;
      let p = nn(i.state.field(Nt).diagnostics, e);
      p && r.apply(i, p.from, p.to);
    }, { name: c } = r, h = s[o] ? c.indexOf(s[o]) : -1, f = h < 0 ? c : [
      c.slice(0, h),
      Ce("u", c.slice(h, h + 1)),
      c.slice(h + 1)
    ], u = r.markClass ? " " + r.markClass : "";
    return Ce("button", {
      type: "button",
      class: "cm-diagnosticAction" + u,
      onclick: a,
      onmousedown: a,
      "aria-label": ` Action: ${c}${h < 0 ? "" : ` (access key "${s[o]})"`}.`
    }, f);
  }), e.source && Ce("div", { class: "cm-diagnosticSource" }, e.source));
}
class SC extends Vi {
  constructor(e) {
    super(), this.sev = e;
  }
  eq(e) {
    return e.sev == this.sev;
  }
  toDOM() {
    return Ce("span", { class: "cm-lintPoint cm-lintPoint-" + this.sev });
  }
}
class Md {
  constructor(e, t) {
    this.diagnostic = t, this.id = "item_" + Math.floor(Math.random() * 4294967295).toString(16), this.dom = t0(e, t, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option");
  }
}
class ur {
  constructor(e) {
    this.view = e, this.items = [];
    let t = (s) => {
      if (!(s.ctrlKey || s.altKey || s.metaKey)) {
        if (s.keyCode == 27)
          Rd(this.view), this.view.focus();
        else if (s.keyCode == 38 || s.keyCode == 33)
          this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
        else if (s.keyCode == 40 || s.keyCode == 34)
          this.moveSelection((this.selectedIndex + 1) % this.items.length);
        else if (s.keyCode == 36)
          this.moveSelection(0);
        else if (s.keyCode == 35)
          this.moveSelection(this.items.length - 1);
        else if (s.keyCode == 13)
          this.view.focus();
        else if (s.keyCode >= 65 && s.keyCode <= 90 && this.selectedIndex >= 0) {
          let { diagnostic: r } = this.items[this.selectedIndex], o = e0(r.actions);
          for (let l = 0; l < o.length; l++)
            if (o[l].toUpperCase().charCodeAt(0) == s.keyCode) {
              let a = nn(this.view.state.field(Nt).diagnostics, r);
              a && r.actions[l].apply(e, a.from, a.to);
            }
        } else
          return;
        s.preventDefault();
      }
    }, n = (s) => {
      for (let r = 0; r < this.items.length; r++)
        this.items[r].dom.contains(s.target) && this.moveSelection(r);
    };
    this.list = Ce("ul", {
      tabIndex: 0,
      role: "listbox",
      "aria-label": this.view.state.phrase("Diagnostics"),
      onkeydown: t,
      onclick: n
    }), this.dom = Ce("div", { class: "cm-panel-lint" }, this.list, Ce("button", {
      type: "button",
      name: "close",
      "aria-label": this.view.state.phrase("close"),
      onclick: () => Rd(this.view)
    }, "×")), this.update();
  }
  get selectedIndex() {
    let e = this.view.state.field(Nt).selected;
    if (!e)
      return -1;
    for (let t = 0; t < this.items.length; t++)
      if (this.items[t].diagnostic == e.diagnostic)
        return t;
    return -1;
  }
  update() {
    let { diagnostics: e, selected: t } = this.view.state.field(Nt), n = 0, s = !1, r = null, o = /* @__PURE__ */ new Set();
    for (e.between(0, this.view.state.doc.length, (l, a, { spec: c }) => {
      for (let h of c.diagnostics) {
        if (o.has(h))
          continue;
        o.add(h);
        let f = -1, u;
        for (let d = n; d < this.items.length; d++)
          if (this.items[d].diagnostic == h) {
            f = d;
            break;
          }
        f < 0 ? (u = new Md(this.view, h), this.items.splice(n, 0, u), s = !0) : (u = this.items[f], f > n && (this.items.splice(n, f - n), s = !0)), t && u.diagnostic == t.diagnostic ? u.dom.hasAttribute("aria-selected") || (u.dom.setAttribute("aria-selected", "true"), r = u) : u.dom.hasAttribute("aria-selected") && u.dom.removeAttribute("aria-selected"), n++;
      }
    }); n < this.items.length && !(this.items.length == 1 && this.items[0].diagnostic.from < 0); )
      s = !0, this.items.pop();
    this.items.length == 0 && (this.items.push(new Md(this.view, {
      from: -1,
      to: -1,
      severity: "info",
      message: this.view.state.phrase("No diagnostics")
    })), s = !0), r ? (this.list.setAttribute("aria-activedescendant", r.id), this.view.requestMeasure({
      key: this,
      read: () => ({ sel: r.dom.getBoundingClientRect(), panel: this.list.getBoundingClientRect() }),
      write: ({ sel: l, panel: a }) => {
        let c = a.height / this.list.offsetHeight;
        l.top < a.top ? this.list.scrollTop -= (a.top - l.top) / c : l.bottom > a.bottom && (this.list.scrollTop += (l.bottom - a.bottom) / c);
      }
    })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), s && this.sync();
  }
  sync() {
    let e = this.list.firstChild;
    function t() {
      let n = e;
      e = n.nextSibling, n.remove();
    }
    for (let n of this.items)
      if (n.dom.parentNode == this.list) {
        for (; e != n.dom; )
          t();
        e = n.dom.nextSibling;
      } else
        this.list.insertBefore(n.dom, e);
    for (; e; )
      t();
  }
  moveSelection(e) {
    if (this.selectedIndex < 0)
      return;
    let t = this.view.state.field(Nt), n = nn(t.diagnostics, this.items[e].diagnostic);
    n && this.view.dispatch({
      selection: { anchor: n.from, head: n.to },
      scrollIntoView: !0,
      effects: JO.of(n)
    });
  }
  static open(e) {
    return new ur(e);
  }
}
function wC(i, e = 'viewBox="0 0 40 40"') {
  return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${e}>${encodeURIComponent(i)}</svg>')`;
}
function eo(i) {
  return wC(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${i}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"');
}
const PC = /* @__PURE__ */ X.baseTheme({
  ".cm-diagnostic": {
    padding: "3px 6px 3px 8px",
    marginLeft: "-1px",
    display: "block",
    whiteSpace: "pre-wrap"
  },
  ".cm-diagnostic-error": { borderLeft: "5px solid #d11" },
  ".cm-diagnostic-warning": { borderLeft: "5px solid orange" },
  ".cm-diagnostic-info": { borderLeft: "5px solid #999" },
  ".cm-diagnostic-hint": { borderLeft: "5px solid #66d" },
  ".cm-diagnosticAction": {
    font: "inherit",
    border: "none",
    padding: "2px 4px",
    backgroundColor: "#444",
    color: "white",
    borderRadius: "3px",
    marginLeft: "8px",
    cursor: "pointer"
  },
  ".cm-diagnosticSource": {
    fontSize: "70%",
    opacity: 0.7
  },
  ".cm-lintRange": {
    backgroundPosition: "left bottom",
    backgroundRepeat: "repeat-x",
    paddingBottom: "0.7px"
  },
  ".cm-lintRange-error": { backgroundImage: /* @__PURE__ */ eo("#f11") },
  ".cm-lintRange-warning": { backgroundImage: /* @__PURE__ */ eo("orange") },
  ".cm-lintRange-info": { backgroundImage: /* @__PURE__ */ eo("#999") },
  ".cm-lintRange-hint": { backgroundImage: /* @__PURE__ */ eo("#66d") },
  ".cm-lintRange-active": { backgroundColor: "#ffdd9980" },
  ".cm-tooltip-lint": {
    padding: 0,
    margin: 0
  },
  ".cm-lintPoint": {
    position: "relative",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: "-2px",
      borderLeft: "3px solid transparent",
      borderRight: "3px solid transparent",
      borderBottom: "4px solid #d11"
    }
  },
  ".cm-lintPoint-warning": {
    "&:after": { borderBottomColor: "orange" }
  },
  ".cm-lintPoint-info": {
    "&:after": { borderBottomColor: "#999" }
  },
  ".cm-lintPoint-hint": {
    "&:after": { borderBottomColor: "#66d" }
  },
  ".cm-panel.cm-panel-lint": {
    position: "relative",
    "& ul": {
      maxHeight: "100px",
      overflowY: "auto",
      "& [aria-selected]": {
        backgroundColor: "#ddd",
        "& u": { textDecoration: "underline" }
      },
      "&:focus [aria-selected]": {
        background_fallback: "#bdf",
        backgroundColor: "Highlight",
        color_fallback: "white",
        color: "HighlightText"
      },
      "& u": { textDecoration: "none" },
      padding: 0,
      margin: 0
    },
    "& [name=close]": {
      position: "absolute",
      top: "0",
      right: "2px",
      background: "inherit",
      border: "none",
      font: "inherit",
      padding: 0,
      margin: 0
    }
  },
  "&dark .cm-lintRange-active": { backgroundColor: "#86714a80" },
  "&dark .cm-panel.cm-panel-lint ul": {
    "& [aria-selected]": {
      backgroundColor: "#2e343e"
    }
  }
});
function kC(i) {
  return i == "error" ? 4 : i == "warning" ? 3 : i == "info" ? 2 : 1;
}
function CC(i) {
  let e = "hint", t = 1;
  for (let n of i) {
    let s = kC(n.severity);
    s > t && (t = s, e = n.severity);
  }
  return e;
}
const i0 = /* @__PURE__ */ gS(OC, { hideOn: pC }), EC = [
  Nt,
  /* @__PURE__ */ X.decorations.compute([Nt], (i) => {
    let { selected: e, panel: t } = i.field(Nt);
    return !e || !t || e.from == e.to ? Y.none : Y.set([
      gC.range(e.from, e.to)
    ]);
  }),
  i0,
  PC
], TC = [
  $S(),
  RS(),
  Gv(),
  zw(),
  vw(),
  Qv(),
  Xv(),
  pe.allowMultipleSelections.of(!0),
  aw(),
  ww(Cw, { fallback: !0 }),
  Rw(),
  tC(),
  uC(),
  rS(),
  aS(),
  Jv(),
  nk(),
  Th.of([
    ...rC,
    ...ZP,
    ...Pk,
    ...nP,
    ...Ow,
    ...KO,
    ...vC
  ])
];
class rl {
  /**
  @internal
  */
  constructor(e, t, n, s, r, o, l, a, c, h = 0, f) {
    this.p = e, this.stack = t, this.state = n, this.reducePos = s, this.pos = r, this.score = o, this.buffer = l, this.bufferBase = a, this.curContext = c, this.lookAhead = h, this.parent = f;
  }
  /**
  @internal
  */
  toString() {
    return `[${this.stack.filter((e, t) => t % 3 == 0).concat(this.state)}]@${this.pos}${this.score ? "!" + this.score : ""}`;
  }
  // Start an empty stack
  /**
  @internal
  */
  static start(e, t, n = 0) {
    let s = e.parser.context;
    return new rl(e, [], t, n, n, 0, [], 0, s ? new Qd(s, s.start) : null, 0, null);
  }
  /**
  The stack's current [context](#lr.ContextTracker) value, if
  any. Its type will depend on the context tracker's type
  parameter, or it will be `null` if there is no context
  tracker.
  */
  get context() {
    return this.curContext ? this.curContext.context : null;
  }
  // Push a state onto the stack, tracking its start position as well
  // as the buffer base at that point.
  /**
  @internal
  */
  pushState(e, t) {
    this.stack.push(this.state, t, this.bufferBase + this.buffer.length), this.state = e;
  }
  // Apply a reduce action
  /**
  @internal
  */
  reduce(e) {
    var t;
    let n = e >> 19, s = e & 65535, { parser: r } = this.p, o = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos), l = r.dynamicPrecedence(s);
    if (l && (this.score += l), n == 0) {
      s < r.minRepeatTerm && this.reducePos < this.pos && (this.reducePos = this.pos), this.pushState(r.getGoto(this.state, s, !0), this.reducePos), s < r.minRepeatTerm && this.storeNode(s, this.reducePos, this.reducePos, o ? 8 : 4, !0), this.reduceContext(s, this.reducePos);
      return;
    }
    let a = this.stack.length - (n - 1) * 3 - (e & 262144 ? 6 : 0), c = a ? this.stack[a - 2] : this.p.ranges[0].from;
    s < r.minRepeatTerm && c == this.reducePos && this.reducePos < this.pos && (this.reducePos = this.pos);
    let h = this.reducePos - c;
    h >= 2e3 && !(!((t = this.p.parser.nodeSet.types[s]) === null || t === void 0) && t.isAnonymous) && (c == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = h) : this.p.lastBigReductionSize < h && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = c, this.p.lastBigReductionSize = h));
    let f = a ? this.stack[a - 1] : 0, u = this.bufferBase + this.buffer.length - f;
    if (s < r.minRepeatTerm || e & 131072) {
      let d = r.stateFlag(
        this.state,
        1
        /* StateFlag.Skipped */
      ) ? this.pos : this.reducePos;
      this.storeNode(s, c, d, u + 4, !0);
    }
    if (e & 262144)
      this.state = this.stack[a];
    else {
      let d = this.stack[a - 3];
      this.state = r.getGoto(d, s, !0);
    }
    for (; this.stack.length > a; )
      this.stack.pop();
    this.reduceContext(s, c);
  }
  // Shift a value into the buffer
  /**
  @internal
  */
  storeNode(e, t, n, s = 4, r = !1) {
    if (e == 0 && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
      let o = this.buffer.length;
      if (o > 0 && this.buffer[o - 4] == 0 && this.buffer[o - 1] > -1) {
        if (t == n)
          return;
        if (this.buffer[o - 2] >= t) {
          this.buffer[o - 2] = n;
          return;
        }
      }
    }
    if (!r || this.pos == n)
      this.buffer.push(e, t, n, s);
    else {
      let o = this.buffer.length;
      if (o > 0 && (this.buffer[o - 4] != 0 || this.buffer[o - 1] < 0)) {
        let l = !1;
        for (let a = o; a > 0 && this.buffer[a - 2] > n; a -= 4)
          if (this.buffer[a - 1] >= 0) {
            l = !0;
            break;
          }
        if (l)
          for (; o > 0 && this.buffer[o - 2] > n; )
            this.buffer[o] = this.buffer[o - 4], this.buffer[o + 1] = this.buffer[o - 3], this.buffer[o + 2] = this.buffer[o - 2], this.buffer[o + 3] = this.buffer[o - 1], o -= 4, s > 4 && (s -= 4);
      }
      this.buffer[o] = e, this.buffer[o + 1] = t, this.buffer[o + 2] = n, this.buffer[o + 3] = s;
    }
  }
  // Apply a shift action
  /**
  @internal
  */
  shift(e, t, n, s) {
    if (e & 131072)
      this.pushState(e & 65535, this.pos);
    else if (e & 262144)
      this.pos = s, this.shiftContext(t, n), t <= this.p.parser.maxNode && this.buffer.push(t, n, s, 4);
    else {
      let r = e, { parser: o } = this.p;
      this.pos = s;
      let l = o.stateFlag(
        r,
        1
        /* StateFlag.Skipped */
      );
      !l && (s > n || t <= o.maxNode) && (this.reducePos = s), this.pushState(r, l ? n : Math.min(n, this.reducePos)), this.shiftContext(t, n), t <= o.maxNode && this.buffer.push(t, n, s, 4);
    }
  }
  // Apply an action
  /**
  @internal
  */
  apply(e, t, n, s) {
    e & 65536 ? this.reduce(e) : this.shift(e, t, n, s);
  }
  // Add a prebuilt (reused) node into the buffer.
  /**
  @internal
  */
  useNode(e, t) {
    let n = this.p.reused.length - 1;
    (n < 0 || this.p.reused[n] != e) && (this.p.reused.push(e), n++);
    let s = this.pos;
    this.reducePos = this.pos = s + e.length, this.pushState(t, s), this.buffer.push(
      n,
      s,
      this.reducePos,
      -1
      /* size == -1 means this is a reused value */
    ), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, e, this, this.p.stream.reset(this.pos - e.length)));
  }
  // Split the stack. Due to the buffer sharing and the fact
  // that `this.stack` tends to stay quite shallow, this isn't very
  // expensive.
  /**
  @internal
  */
  split() {
    let e = this, t = e.buffer.length;
    for (t && e.buffer[t - 4] == 0 && (t -= 4); t > 0 && e.buffer[t - 2] > e.reducePos; )
      t -= 4;
    let n = e.buffer.slice(t), s = e.bufferBase + t;
    for (; e && s == e.bufferBase; )
      e = e.parent;
    return new rl(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, n, s, this.curContext, this.lookAhead, e);
  }
  // Try to recover from an error by 'deleting' (ignoring) one token.
  /**
  @internal
  */
  recoverByDelete(e, t) {
    let n = e <= this.p.parser.maxNode;
    n && this.storeNode(e, this.pos, t, 4), this.storeNode(0, this.pos, t, n ? 8 : 4), this.pos = this.reducePos = t, this.score -= 190;
  }
  /**
  Check if the given term would be able to be shifted (optionally
  after some reductions) on this stack. This can be useful for
  external tokenizers that want to make sure they only provide a
  given token when it applies.
  */
  canShift(e) {
    for (let t = new AC(this); ; ) {
      let n = this.p.parser.stateSlot(
        t.state,
        4
        /* ParseState.DefaultReduce */
      ) || this.p.parser.hasAction(t.state, e);
      if (n == 0)
        return !1;
      if (!(n & 65536))
        return !0;
      t.reduce(n);
    }
  }
  // Apply up to Recover.MaxNext recovery actions that conceptually
  // inserts some missing token or rule.
  /**
  @internal
  */
  recoverByInsert(e) {
    if (this.stack.length >= 300)
      return [];
    let t = this.p.parser.nextStates(this.state);
    if (t.length > 8 || this.stack.length >= 120) {
      let s = [];
      for (let r = 0, o; r < t.length; r += 2)
        (o = t[r + 1]) != this.state && this.p.parser.hasAction(o, e) && s.push(t[r], o);
      if (this.stack.length < 120)
        for (let r = 0; s.length < 8 && r < t.length; r += 2) {
          let o = t[r + 1];
          s.some((l, a) => a & 1 && l == o) || s.push(t[r], o);
        }
      t = s;
    }
    let n = [];
    for (let s = 0; s < t.length && n.length < 4; s += 2) {
      let r = t[s + 1];
      if (r == this.state)
        continue;
      let o = this.split();
      o.pushState(r, this.pos), o.storeNode(0, o.pos, o.pos, 4, !0), o.shiftContext(t[s], this.pos), o.reducePos = this.pos, o.score -= 200, n.push(o);
    }
    return n;
  }
  // Force a reduce, if possible. Return false if that can't
  // be done.
  /**
  @internal
  */
  forceReduce() {
    let { parser: e } = this.p, t = e.stateSlot(
      this.state,
      5
      /* ParseState.ForcedReduce */
    );
    if (!(t & 65536))
      return !1;
    if (!e.validAction(this.state, t)) {
      let n = t >> 19, s = t & 65535, r = this.stack.length - n * 3;
      if (r < 0 || e.getGoto(this.stack[r], s, !1) < 0) {
        let o = this.findForcedReduction();
        if (o == null)
          return !1;
        t = o;
      }
      this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100;
    }
    return this.reducePos = this.pos, this.reduce(t), !0;
  }
  /**
  Try to scan through the automaton to find some kind of reduction
  that can be applied. Used when the regular ForcedReduce field
  isn't a valid action. @internal
  */
  findForcedReduction() {
    let { parser: e } = this.p, t = [], n = (s, r) => {
      if (!t.includes(s))
        return t.push(s), e.allActions(s, (o) => {
          if (!(o & 393216)) if (o & 65536) {
            let l = (o >> 19) - r;
            if (l > 1) {
              let a = o & 65535, c = this.stack.length - l * 3;
              if (c >= 0 && e.getGoto(this.stack[c], a, !1) >= 0)
                return l << 19 | 65536 | a;
            }
          } else {
            let l = n(o, r + 1);
            if (l != null)
              return l;
          }
        });
    };
    return n(this.state, 0);
  }
  /**
  @internal
  */
  forceAll() {
    for (; !this.p.parser.stateFlag(
      this.state,
      2
      /* StateFlag.Accepting */
    ); )
      if (!this.forceReduce()) {
        this.storeNode(0, this.pos, this.pos, 4, !0);
        break;
      }
    return this;
  }
  /**
  Check whether this state has no further actions (assumed to be a direct descendant of the
  top state, since any other states must be able to continue
  somehow). @internal
  */
  get deadEnd() {
    if (this.stack.length != 3)
      return !1;
    let { parser: e } = this.p;
    return e.data[e.stateSlot(
      this.state,
      1
      /* ParseState.Actions */
    )] == 65535 && !e.stateSlot(
      this.state,
      4
      /* ParseState.DefaultReduce */
    );
  }
  /**
  Restart the stack (put it back in its start state). Only safe
  when this.stack.length == 3 (state is directly below the top
  state). @internal
  */
  restart() {
    this.storeNode(0, this.pos, this.pos, 4, !0), this.state = this.stack[0], this.stack.length = 0;
  }
  /**
  @internal
  */
  sameState(e) {
    if (this.state != e.state || this.stack.length != e.stack.length)
      return !1;
    for (let t = 0; t < this.stack.length; t += 3)
      if (this.stack[t] != e.stack[t])
        return !1;
    return !0;
  }
  /**
  Get the parser used by this stack.
  */
  get parser() {
    return this.p.parser;
  }
  /**
  Test whether a given dialect (by numeric ID, as exported from
  the terms file) is enabled.
  */
  dialectEnabled(e) {
    return this.p.parser.dialect.flags[e];
  }
  shiftContext(e, t) {
    this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, e, this, this.p.stream.reset(t)));
  }
  reduceContext(e, t) {
    this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, e, this, this.p.stream.reset(t)));
  }
  /**
  @internal
  */
  emitContext() {
    let e = this.buffer.length - 1;
    (e < 0 || this.buffer[e] != -3) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3);
  }
  /**
  @internal
  */
  emitLookAhead() {
    let e = this.buffer.length - 1;
    (e < 0 || this.buffer[e] != -4) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4);
  }
  updateContext(e) {
    if (e != this.curContext.context) {
      let t = new Qd(this.curContext.tracker, e);
      t.hash != this.curContext.hash && this.emitContext(), this.curContext = t;
    }
  }
  /**
  @internal
  */
  setLookAhead(e) {
    return e <= this.lookAhead ? !1 : (this.emitLookAhead(), this.lookAhead = e, !0);
  }
  /**
  @internal
  */
  close() {
    this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead();
  }
}
class Qd {
  constructor(e, t) {
    this.tracker = e, this.context = t, this.hash = e.strict ? e.hash(t) : 0;
  }
}
class AC {
  constructor(e) {
    this.start = e, this.state = e.state, this.stack = e.stack, this.base = this.stack.length;
  }
  reduce(e) {
    let t = e & 65535, n = e >> 19;
    n == 0 ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= (n - 1) * 3;
    let s = this.start.p.parser.getGoto(this.stack[this.base - 3], t, !0);
    this.state = s;
  }
}
class ol {
  constructor(e, t, n) {
    this.stack = e, this.pos = t, this.index = n, this.buffer = e.buffer, this.index == 0 && this.maybeNext();
  }
  static create(e, t = e.bufferBase + e.buffer.length) {
    return new ol(e, t, t - e.bufferBase);
  }
  maybeNext() {
    let e = this.stack.parent;
    e != null && (this.index = this.stack.bufferBase - e.bufferBase, this.stack = e, this.buffer = e.buffer);
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  next() {
    this.index -= 4, this.pos -= 4, this.index == 0 && this.maybeNext();
  }
  fork() {
    return new ol(this.stack, this.pos, this.index);
  }
}
function to(i, e = Uint16Array) {
  if (typeof i != "string")
    return i;
  let t = null;
  for (let n = 0, s = 0; n < i.length; ) {
    let r = 0;
    for (; ; ) {
      let o = i.charCodeAt(n++), l = !1;
      if (o == 126) {
        r = 65535;
        break;
      }
      o >= 92 && o--, o >= 34 && o--;
      let a = o - 32;
      if (a >= 46 && (a -= 46, l = !0), r += a, l)
        break;
      r *= 46;
    }
    t ? t[s++] = r : t = new e(r);
  }
  return t;
}
class bo {
  constructor() {
    this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0;
  }
}
const Id = new bo();
class $C {
  /**
  @internal
  */
  constructor(e, t) {
    this.input = e, this.ranges = t, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = Id, this.rangeIndex = 0, this.pos = this.chunkPos = t[0].from, this.range = t[0], this.end = t[t.length - 1].to, this.readNext();
  }
  /**
  @internal
  */
  resolveOffset(e, t) {
    let n = this.range, s = this.rangeIndex, r = this.pos + e;
    for (; r < n.from; ) {
      if (!s)
        return null;
      let o = this.ranges[--s];
      r -= n.from - o.to, n = o;
    }
    for (; t < 0 ? r > n.to : r >= n.to; ) {
      if (s == this.ranges.length - 1)
        return null;
      let o = this.ranges[++s];
      r += o.from - n.to, n = o;
    }
    return r;
  }
  /**
  @internal
  */
  clipPos(e) {
    if (e >= this.range.from && e < this.range.to)
      return e;
    for (let t of this.ranges)
      if (t.to > e)
        return Math.max(e, t.from);
    return this.end;
  }
  /**
  Look at a code unit near the stream position. `.peek(0)` equals
  `.next`, `.peek(-1)` gives you the previous character, and so
  on.
  
  Note that looking around during tokenizing creates dependencies
  on potentially far-away content, which may reduce the
  effectiveness incremental parsing—when looking forward—or even
  cause invalid reparses when looking backward more than 25 code
  units, since the library does not track lookbehind.
  */
  peek(e) {
    let t = this.chunkOff + e, n, s;
    if (t >= 0 && t < this.chunk.length)
      n = this.pos + e, s = this.chunk.charCodeAt(t);
    else {
      let r = this.resolveOffset(e, 1);
      if (r == null)
        return -1;
      if (n = r, n >= this.chunk2Pos && n < this.chunk2Pos + this.chunk2.length)
        s = this.chunk2.charCodeAt(n - this.chunk2Pos);
      else {
        let o = this.rangeIndex, l = this.range;
        for (; l.to <= n; )
          l = this.ranges[++o];
        this.chunk2 = this.input.chunk(this.chunk2Pos = n), n + this.chunk2.length > l.to && (this.chunk2 = this.chunk2.slice(0, l.to - n)), s = this.chunk2.charCodeAt(0);
      }
    }
    return n >= this.token.lookAhead && (this.token.lookAhead = n + 1), s;
  }
  /**
  Accept a token. By default, the end of the token is set to the
  current stream position, but you can pass an offset (relative to
  the stream position) to change that.
  */
  acceptToken(e, t = 0) {
    let n = t ? this.resolveOffset(t, -1) : this.pos;
    if (n == null || n < this.token.start)
      throw new RangeError("Token end out of bounds");
    this.token.value = e, this.token.end = n;
  }
  /**
  Accept a token ending at a specific given position.
  */
  acceptTokenTo(e, t) {
    this.token.value = e, this.token.end = t;
  }
  getChunk() {
    if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
      let { chunk: e, chunkPos: t } = this;
      this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = e, this.chunk2Pos = t, this.chunkOff = this.pos - this.chunkPos;
    } else {
      this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
      let e = this.input.chunk(this.pos), t = this.pos + e.length;
      this.chunk = t > this.range.to ? e.slice(0, this.range.to - this.pos) : e, this.chunkPos = this.pos, this.chunkOff = 0;
    }
  }
  readNext() {
    return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff);
  }
  /**
  Move the stream forward N (defaults to 1) code units. Returns
  the new value of [`next`](#lr.InputStream.next).
  */
  advance(e = 1) {
    for (this.chunkOff += e; this.pos + e >= this.range.to; ) {
      if (this.rangeIndex == this.ranges.length - 1)
        return this.setDone();
      e -= this.range.to - this.pos, this.range = this.ranges[++this.rangeIndex], this.pos = this.range.from;
    }
    return this.pos += e, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext();
  }
  setDone() {
    return this.pos = this.chunkPos = this.end, this.range = this.ranges[this.rangeIndex = this.ranges.length - 1], this.chunk = "", this.next = -1;
  }
  /**
  @internal
  */
  reset(e, t) {
    if (t ? (this.token = t, t.start = e, t.lookAhead = e + 1, t.value = t.extended = -1) : this.token = Id, this.pos != e) {
      if (this.pos = e, e == this.end)
        return this.setDone(), this;
      for (; e < this.range.from; )
        this.range = this.ranges[--this.rangeIndex];
      for (; e >= this.range.to; )
        this.range = this.ranges[++this.rangeIndex];
      e >= this.chunkPos && e < this.chunkPos + this.chunk.length ? this.chunkOff = e - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext();
    }
    return this;
  }
  /**
  @internal
  */
  read(e, t) {
    if (e >= this.chunkPos && t <= this.chunkPos + this.chunk.length)
      return this.chunk.slice(e - this.chunkPos, t - this.chunkPos);
    if (e >= this.chunk2Pos && t <= this.chunk2Pos + this.chunk2.length)
      return this.chunk2.slice(e - this.chunk2Pos, t - this.chunk2Pos);
    if (e >= this.range.from && t <= this.range.to)
      return this.input.read(e, t);
    let n = "";
    for (let s of this.ranges) {
      if (s.from >= t)
        break;
      s.to > e && (n += this.input.read(Math.max(s.from, e), Math.min(s.to, t)));
    }
    return n;
  }
}
class ts {
  constructor(e, t) {
    this.data = e, this.id = t;
  }
  token(e, t) {
    let { parser: n } = t.p;
    DC(this.data, e, t, this.id, n.data, n.tokenPrecTable);
  }
}
ts.prototype.contextual = ts.prototype.fallback = ts.prototype.extend = !1;
ts.prototype.fallback = ts.prototype.extend = !1;
class n0 {
  /**
  Create a tokenizer. The first argument is the function that,
  given an input stream, scans for the types of tokens it
  recognizes at the stream's position, and calls
  [`acceptToken`](#lr.InputStream.acceptToken) when it finds
  one.
  */
  constructor(e, t = {}) {
    this.token = e, this.contextual = !!t.contextual, this.fallback = !!t.fallback, this.extend = !!t.extend;
  }
}
function DC(i, e, t, n, s, r) {
  let o = 0, l = 1 << n, { dialect: a } = t.p.parser;
  e: for (; l & i[o]; ) {
    let c = i[o + 1];
    for (let d = o + 3; d < c; d += 2)
      if ((i[d + 1] & l) > 0) {
        let p = i[d];
        if (a.allows(p) && (e.token.value == -1 || e.token.value == p || NC(p, e.token.value, s, r))) {
          e.acceptToken(p);
          break;
        }
      }
    let h = e.next, f = 0, u = i[o + 2];
    if (e.next < 0 && u > f && i[c + u * 3 - 3] == 65535) {
      o = i[c + u * 3 - 1];
      continue e;
    }
    for (; f < u; ) {
      let d = f + u >> 1, p = c + d + (d << 1), m = i[p], g = i[p + 1] || 65536;
      if (h < m)
        u = d;
      else if (h >= g)
        f = d + 1;
      else {
        o = i[p + 2], e.advance();
        continue e;
      }
    }
    break;
  }
}
function Vd(i, e, t) {
  for (let n = e, s; (s = i[n]) != 65535; n++)
    if (s == t)
      return n - e;
  return -1;
}
function NC(i, e, t, n) {
  let s = Vd(t, n, e);
  return s < 0 || Vd(t, n, i) < s;
}
const Ct = typeof process < "u" && process.env && /\bparse\b/.test(process.env.LOG);
let Pa = null;
function Ld(i, e, t) {
  let n = i.cursor(Re.IncludeAnonymous);
  for (n.moveTo(e); ; )
    if (!(t < 0 ? n.childBefore(e) : n.childAfter(e)))
      for (; ; ) {
        if ((t < 0 ? n.to < e : n.from > e) && !n.type.isError)
          return t < 0 ? Math.max(0, Math.min(
            n.to - 1,
            e - 25
            /* Lookahead.Margin */
          )) : Math.min(i.length, Math.max(
            n.from + 1,
            e + 25
            /* Lookahead.Margin */
          ));
        if (t < 0 ? n.prevSibling() : n.nextSibling())
          break;
        if (!n.parent())
          return t < 0 ? 0 : i.length;
      }
}
class RC {
  constructor(e, t) {
    this.fragments = e, this.nodeSet = t, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment();
  }
  nextFragment() {
    let e = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
    if (e) {
      for (this.safeFrom = e.openStart ? Ld(e.tree, e.from + e.offset, 1) - e.offset : e.from, this.safeTo = e.openEnd ? Ld(e.tree, e.to + e.offset, -1) - e.offset : e.to; this.trees.length; )
        this.trees.pop(), this.start.pop(), this.index.pop();
      this.trees.push(e.tree), this.start.push(-e.offset), this.index.push(0), this.nextStart = this.safeFrom;
    } else
      this.nextStart = 1e9;
  }
  // `pos` must be >= any previously given `pos` for this cursor
  nodeAt(e) {
    if (e < this.nextStart)
      return null;
    for (; this.fragment && this.safeTo <= e; )
      this.nextFragment();
    if (!this.fragment)
      return null;
    for (; ; ) {
      let t = this.trees.length - 1;
      if (t < 0)
        return this.nextFragment(), null;
      let n = this.trees[t], s = this.index[t];
      if (s == n.children.length) {
        this.trees.pop(), this.start.pop(), this.index.pop();
        continue;
      }
      let r = n.children[s], o = this.start[t] + n.positions[s];
      if (o > e)
        return this.nextStart = o, null;
      if (r instanceof Ie) {
        if (o == e) {
          if (o < this.safeFrom)
            return null;
          let l = o + r.length;
          if (l <= this.safeTo) {
            let a = r.prop(ae.lookAhead);
            if (!a || l + a < this.fragment.to)
              return r;
          }
        }
        this.index[t]++, o + r.length >= Math.max(this.safeFrom, e) && (this.trees.push(r), this.start.push(o), this.index.push(0));
      } else
        this.index[t]++, this.nextStart = o + r.length;
    }
  }
}
class _C {
  constructor(e, t) {
    this.stream = t, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = e.tokenizers.map((n) => new bo());
  }
  getActions(e) {
    let t = 0, n = null, { parser: s } = e.p, { tokenizers: r } = s, o = s.stateSlot(
      e.state,
      3
      /* ParseState.TokenizerMask */
    ), l = e.curContext ? e.curContext.hash : 0, a = 0;
    for (let c = 0; c < r.length; c++) {
      if (!(1 << c & o))
        continue;
      let h = r[c], f = this.tokens[c];
      if (!(n && !h.fallback) && ((h.contextual || f.start != e.pos || f.mask != o || f.context != l) && (this.updateCachedToken(f, h, e), f.mask = o, f.context = l), f.lookAhead > f.end + 25 && (a = Math.max(f.lookAhead, a)), f.value != 0)) {
        let u = t;
        if (f.extended > -1 && (t = this.addActions(e, f.extended, f.end, t)), t = this.addActions(e, f.value, f.end, t), !h.extend && (n = f, t > u))
          break;
      }
    }
    for (; this.actions.length > t; )
      this.actions.pop();
    return a && e.setLookAhead(a), !n && e.pos == this.stream.end && (n = new bo(), n.value = e.p.parser.eofTerm, n.start = n.end = e.pos, t = this.addActions(e, n.value, n.end, t)), this.mainToken = n, this.actions;
  }
  getMainToken(e) {
    if (this.mainToken)
      return this.mainToken;
    let t = new bo(), { pos: n, p: s } = e;
    return t.start = n, t.end = Math.min(n + 1, s.stream.end), t.value = n == s.stream.end ? s.parser.eofTerm : 0, t;
  }
  updateCachedToken(e, t, n) {
    let s = this.stream.clipPos(n.pos);
    if (t.token(this.stream.reset(s, e), n), e.value > -1) {
      let { parser: r } = n.p;
      for (let o = 0; o < r.specialized.length; o++)
        if (r.specialized[o] == e.value) {
          let l = r.specializers[o](this.stream.read(e.start, e.end), n);
          if (l >= 0 && n.p.parser.dialect.allows(l >> 1)) {
            l & 1 ? e.extended = l >> 1 : e.value = l >> 1;
            break;
          }
        }
    } else
      e.value = 0, e.end = this.stream.clipPos(s + 1);
  }
  putAction(e, t, n, s) {
    for (let r = 0; r < s; r += 3)
      if (this.actions[r] == e)
        return s;
    return this.actions[s++] = e, this.actions[s++] = t, this.actions[s++] = n, s;
  }
  addActions(e, t, n, s) {
    let { state: r } = e, { parser: o } = e.p, { data: l } = o;
    for (let a = 0; a < 2; a++)
      for (let c = o.stateSlot(
        r,
        a ? 2 : 1
        /* ParseState.Actions */
      ); ; c += 3) {
        if (l[c] == 65535)
          if (l[c + 1] == 1)
            c = Ti(l, c + 2);
          else {
            s == 0 && l[c + 1] == 2 && (s = this.putAction(Ti(l, c + 2), t, n, s));
            break;
          }
        l[c] == t && (s = this.putAction(Ti(l, c + 1), t, n, s));
      }
    return s;
  }
}
class MC {
  constructor(e, t, n, s) {
    this.parser = e, this.input = t, this.ranges = s, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new $C(t, s), this.tokens = new _C(e, this.stream), this.topTerm = e.top[1];
    let { from: r } = s[0];
    this.stacks = [rl.start(this, e.top[0], r)], this.fragments = n.length && this.stream.end - r > e.bufferLength * 4 ? new RC(n, e.nodeSet) : null;
  }
  get parsedPos() {
    return this.minStackPos;
  }
  // Move the parser forward. This will process all parse stacks at
  // `this.pos` and try to advance them to a further position. If no
  // stack for such a position is found, it'll start error-recovery.
  //
  // When the parse is finished, this will return a syntax tree. When
  // not, it returns `null`.
  advance() {
    let e = this.stacks, t = this.minStackPos, n = this.stacks = [], s, r;
    if (this.bigReductionCount > 300 && e.length == 1) {
      let [o] = e;
      for (; o.forceReduce() && o.stack.length && o.stack[o.stack.length - 2] >= this.lastBigReductionStart; )
        ;
      this.bigReductionCount = this.lastBigReductionSize = 0;
    }
    for (let o = 0; o < e.length; o++) {
      let l = e[o];
      for (; ; ) {
        if (this.tokens.mainToken = null, l.pos > t)
          n.push(l);
        else {
          if (this.advanceStack(l, n, e))
            continue;
          {
            s || (s = [], r = []), s.push(l);
            let a = this.tokens.getMainToken(l);
            r.push(a.value, a.end);
          }
        }
        break;
      }
    }
    if (!n.length) {
      let o = s && VC(s);
      if (o)
        return Ct && console.log("Finish with " + this.stackID(o)), this.stackToTree(o);
      if (this.parser.strict)
        throw Ct && s && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + t);
      this.recovering || (this.recovering = 5);
    }
    if (this.recovering && s) {
      let o = this.stoppedAt != null && s[0].pos > this.stoppedAt ? s[0] : this.runRecovery(s, r, n);
      if (o)
        return Ct && console.log("Force-finish " + this.stackID(o)), this.stackToTree(o.forceAll());
    }
    if (this.recovering) {
      let o = this.recovering == 1 ? 1 : this.recovering * 3;
      if (n.length > o)
        for (n.sort((l, a) => a.score - l.score); n.length > o; )
          n.pop();
      n.some((l) => l.reducePos > t) && this.recovering--;
    } else if (n.length > 1) {
      e: for (let o = 0; o < n.length - 1; o++) {
        let l = n[o];
        for (let a = o + 1; a < n.length; a++) {
          let c = n[a];
          if (l.sameState(c) || l.buffer.length > 500 && c.buffer.length > 500)
            if ((l.score - c.score || l.buffer.length - c.buffer.length) > 0)
              n.splice(a--, 1);
            else {
              n.splice(o--, 1);
              continue e;
            }
        }
      }
      n.length > 12 && (n.sort((o, l) => l.score - o.score), n.splice(
        12,
        n.length - 12
        /* Rec.MaxStackCount */
      ));
    }
    this.minStackPos = n[0].pos;
    for (let o = 1; o < n.length; o++)
      n[o].pos < this.minStackPos && (this.minStackPos = n[o].pos);
    return null;
  }
  stopAt(e) {
    if (this.stoppedAt != null && this.stoppedAt < e)
      throw new RangeError("Can't move stoppedAt forward");
    this.stoppedAt = e;
  }
  // Returns an updated version of the given stack, or null if the
  // stack can't advance normally. When `split` and `stacks` are
  // given, stacks split off by ambiguous operations will be pushed to
  // `split`, or added to `stacks` if they move `pos` forward.
  advanceStack(e, t, n) {
    let s = e.pos, { parser: r } = this, o = Ct ? this.stackID(e) + " -> " : "";
    if (this.stoppedAt != null && s > this.stoppedAt)
      return e.forceReduce() ? e : null;
    if (this.fragments) {
      let c = e.curContext && e.curContext.tracker.strict, h = c ? e.curContext.hash : 0;
      for (let f = this.fragments.nodeAt(s); f; ) {
        let u = this.parser.nodeSet.types[f.type.id] == f.type ? r.getGoto(e.state, f.type.id) : -1;
        if (u > -1 && f.length && (!c || (f.prop(ae.contextHash) || 0) == h))
          return e.useNode(f, u), Ct && console.log(o + this.stackID(e) + ` (via reuse of ${r.getName(f.type.id)})`), !0;
        if (!(f instanceof Ie) || f.children.length == 0 || f.positions[0] > 0)
          break;
        let d = f.children[0];
        if (d instanceof Ie && f.positions[0] == 0)
          f = d;
        else
          break;
      }
    }
    let l = r.stateSlot(
      e.state,
      4
      /* ParseState.DefaultReduce */
    );
    if (l > 0)
      return e.reduce(l), Ct && console.log(o + this.stackID(e) + ` (via always-reduce ${r.getName(
        l & 65535
        /* Action.ValueMask */
      )})`), !0;
    if (e.stack.length >= 8400)
      for (; e.stack.length > 6e3 && e.forceReduce(); )
        ;
    let a = this.tokens.getActions(e);
    for (let c = 0; c < a.length; ) {
      let h = a[c++], f = a[c++], u = a[c++], d = c == a.length || !n, p = d ? e : e.split(), m = this.tokens.mainToken;
      if (p.apply(h, f, m ? m.start : p.pos, u), Ct && console.log(o + this.stackID(p) + ` (via ${h & 65536 ? `reduce of ${r.getName(
        h & 65535
        /* Action.ValueMask */
      )}` : "shift"} for ${r.getName(f)} @ ${s}${p == e ? "" : ", split"})`), d)
        return !0;
      p.pos > s ? t.push(p) : n.push(p);
    }
    return !1;
  }
  // Advance a given stack forward as far as it will go. Returns the
  // (possibly updated) stack if it got stuck, or null if it moved
  // forward and was given to `pushStackDedup`.
  advanceFully(e, t) {
    let n = e.pos;
    for (; ; ) {
      if (!this.advanceStack(e, null, null))
        return !1;
      if (e.pos > n)
        return Bd(e, t), !0;
    }
  }
  runRecovery(e, t, n) {
    let s = null, r = !1;
    for (let o = 0; o < e.length; o++) {
      let l = e[o], a = t[o << 1], c = t[(o << 1) + 1], h = Ct ? this.stackID(l) + " -> " : "";
      if (l.deadEnd && (r || (r = !0, l.restart(), Ct && console.log(h + this.stackID(l) + " (restarted)"), this.advanceFully(l, n))))
        continue;
      let f = l.split(), u = h;
      for (let d = 0; d < 10 && f.forceReduce() && (Ct && console.log(u + this.stackID(f) + " (via force-reduce)"), !this.advanceFully(f, n)); d++)
        Ct && (u = this.stackID(f) + " -> ");
      for (let d of l.recoverByInsert(a))
        Ct && console.log(h + this.stackID(d) + " (via recover-insert)"), this.advanceFully(d, n);
      this.stream.end > l.pos ? (c == l.pos && (c++, a = 0), l.recoverByDelete(a, c), Ct && console.log(h + this.stackID(l) + ` (via recover-delete ${this.parser.getName(a)})`), Bd(l, n)) : (!s || s.score < f.score) && (s = f);
    }
    return s;
  }
  // Convert the stack's buffer to a syntax tree.
  stackToTree(e) {
    return e.close(), Ie.build({
      buffer: ol.create(e),
      nodeSet: this.parser.nodeSet,
      topID: this.topTerm,
      maxBufferLength: this.parser.bufferLength,
      reused: this.reused,
      start: this.ranges[0].from,
      length: e.pos - this.ranges[0].from,
      minRepeatType: this.parser.minRepeatTerm
    });
  }
  stackID(e) {
    let t = (Pa || (Pa = /* @__PURE__ */ new WeakMap())).get(e);
    return t || Pa.set(e, t = String.fromCodePoint(this.nextStackID++)), t + e;
  }
}
function Bd(i, e) {
  for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (n.pos == i.pos && n.sameState(i)) {
      e[t].score < i.score && (e[t] = i);
      return;
    }
  }
  e.push(i);
}
class QC {
  constructor(e, t, n) {
    this.source = e, this.flags = t, this.disabled = n;
  }
  allows(e) {
    return !this.disabled || this.disabled[e] == 0;
  }
}
const ka = (i) => i;
class IC {
  /**
  Define a context tracker.
  */
  constructor(e) {
    this.start = e.start, this.shift = e.shift || ka, this.reduce = e.reduce || ka, this.reuse = e.reuse || ka, this.hash = e.hash || (() => 0), this.strict = e.strict !== !1;
  }
}
class fs extends Bg {
  /**
  @internal
  */
  constructor(e) {
    if (super(), this.wrappers = [], e.version != 14)
      throw new RangeError(`Parser version (${e.version}) doesn't match runtime version (14)`);
    let t = e.nodeNames.split(" ");
    this.minRepeatTerm = t.length;
    for (let l = 0; l < e.repeatNodeCount; l++)
      t.push("");
    let n = Object.keys(e.topRules).map((l) => e.topRules[l][1]), s = [];
    for (let l = 0; l < t.length; l++)
      s.push([]);
    function r(l, a, c) {
      s[l].push([a, a.deserialize(String(c))]);
    }
    if (e.nodeProps)
      for (let l of e.nodeProps) {
        let a = l[0];
        typeof a == "string" && (a = ae[a]);
        for (let c = 1; c < l.length; ) {
          let h = l[c++];
          if (h >= 0)
            r(h, a, l[c++]);
          else {
            let f = l[c + -h];
            for (let u = -h; u > 0; u--)
              r(l[c++], a, f);
            c++;
          }
        }
      }
    this.nodeSet = new Nh(t.map((l, a) => wt.define({
      name: a >= this.minRepeatTerm ? void 0 : l,
      id: a,
      props: s[a],
      top: n.indexOf(a) > -1,
      error: a == 0,
      skipped: e.skippedNodes && e.skippedNodes.indexOf(a) > -1
    }))), e.propSources && (this.nodeSet = this.nodeSet.extend(...e.propSources)), this.strict = !1, this.bufferLength = Qg;
    let o = to(e.tokenData);
    this.context = e.context, this.specializerSpecs = e.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
    for (let l = 0; l < this.specializerSpecs.length; l++)
      this.specialized[l] = this.specializerSpecs[l].term;
    this.specializers = this.specializerSpecs.map(Xd), this.states = to(e.states, Uint32Array), this.data = to(e.stateData), this.goto = to(e.goto), this.maxTerm = e.maxTerm, this.tokenizers = e.tokenizers.map((l) => typeof l == "number" ? new ts(o, l) : l), this.topRules = e.topRules, this.dialects = e.dialects || {}, this.dynamicPrecedences = e.dynamicPrecedences || null, this.tokenPrecTable = e.tokenPrec, this.termNames = e.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]];
  }
  createParse(e, t, n) {
    let s = new MC(this, e, t, n);
    for (let r of this.wrappers)
      s = r(s, e, t, n);
    return s;
  }
  /**
  Get a goto table entry @internal
  */
  getGoto(e, t, n = !1) {
    let s = this.goto;
    if (t >= s[0])
      return -1;
    for (let r = s[t + 1]; ; ) {
      let o = s[r++], l = o & 1, a = s[r++];
      if (l && n)
        return a;
      for (let c = r + (o >> 1); r < c; r++)
        if (s[r] == e)
          return a;
      if (l)
        return -1;
    }
  }
  /**
  Check if this state has an action for a given terminal @internal
  */
  hasAction(e, t) {
    let n = this.data;
    for (let s = 0; s < 2; s++)
      for (let r = this.stateSlot(
        e,
        s ? 2 : 1
        /* ParseState.Actions */
      ), o; ; r += 3) {
        if ((o = n[r]) == 65535)
          if (n[r + 1] == 1)
            o = n[r = Ti(n, r + 2)];
          else {
            if (n[r + 1] == 2)
              return Ti(n, r + 2);
            break;
          }
        if (o == t || o == 0)
          return Ti(n, r + 1);
      }
    return 0;
  }
  /**
  @internal
  */
  stateSlot(e, t) {
    return this.states[e * 6 + t];
  }
  /**
  @internal
  */
  stateFlag(e, t) {
    return (this.stateSlot(
      e,
      0
      /* ParseState.Flags */
    ) & t) > 0;
  }
  /**
  @internal
  */
  validAction(e, t) {
    return !!this.allActions(e, (n) => n == t ? !0 : null);
  }
  /**
  @internal
  */
  allActions(e, t) {
    let n = this.stateSlot(
      e,
      4
      /* ParseState.DefaultReduce */
    ), s = n ? t(n) : void 0;
    for (let r = this.stateSlot(
      e,
      1
      /* ParseState.Actions */
    ); s == null; r += 3) {
      if (this.data[r] == 65535)
        if (this.data[r + 1] == 1)
          r = Ti(this.data, r + 2);
        else
          break;
      s = t(Ti(this.data, r + 1));
    }
    return s;
  }
  /**
  Get the states that can follow this one through shift actions or
  goto jumps. @internal
  */
  nextStates(e) {
    let t = [];
    for (let n = this.stateSlot(
      e,
      1
      /* ParseState.Actions */
    ); ; n += 3) {
      if (this.data[n] == 65535)
        if (this.data[n + 1] == 1)
          n = Ti(this.data, n + 2);
        else
          break;
      if (!(this.data[n + 2] & 1)) {
        let s = this.data[n + 1];
        t.some((r, o) => o & 1 && r == s) || t.push(this.data[n], s);
      }
    }
    return t;
  }
  /**
  Configure the parser. Returns a new parser instance that has the
  given settings modified. Settings not provided in `config` are
  kept from the original parser.
  */
  configure(e) {
    let t = Object.assign(Object.create(fs.prototype), this);
    if (e.props && (t.nodeSet = this.nodeSet.extend(...e.props)), e.top) {
      let n = this.topRules[e.top];
      if (!n)
        throw new RangeError(`Invalid top rule name ${e.top}`);
      t.top = n;
    }
    return e.tokenizers && (t.tokenizers = this.tokenizers.map((n) => {
      let s = e.tokenizers.find((r) => r.from == n);
      return s ? s.to : n;
    })), e.specializers && (t.specializers = this.specializers.slice(), t.specializerSpecs = this.specializerSpecs.map((n, s) => {
      let r = e.specializers.find((l) => l.from == n.external);
      if (!r)
        return n;
      let o = Object.assign(Object.assign({}, n), { external: r.to });
      return t.specializers[s] = Xd(o), o;
    })), e.contextTracker && (t.context = e.contextTracker), e.dialect && (t.dialect = this.parseDialect(e.dialect)), e.strict != null && (t.strict = e.strict), e.wrap && (t.wrappers = t.wrappers.concat(e.wrap)), e.bufferLength != null && (t.bufferLength = e.bufferLength), t;
  }
  /**
  Tells you whether any [parse wrappers](#lr.ParserConfig.wrap)
  are registered for this parser.
  */
  hasWrappers() {
    return this.wrappers.length > 0;
  }
  /**
  Returns the name associated with a given term. This will only
  work for all terms when the parser was generated with the
  `--names` option. By default, only the names of tagged terms are
  stored.
  */
  getName(e) {
    return this.termNames ? this.termNames[e] : String(e <= this.maxNode && this.nodeSet.types[e].name || e);
  }
  /**
  The eof term id is always allocated directly after the node
  types. @internal
  */
  get eofTerm() {
    return this.maxNode + 1;
  }
  /**
  The type of top node produced by the parser.
  */
  get topNode() {
    return this.nodeSet.types[this.top[1]];
  }
  /**
  @internal
  */
  dynamicPrecedence(e) {
    let t = this.dynamicPrecedences;
    return t == null ? 0 : t[e] || 0;
  }
  /**
  @internal
  */
  parseDialect(e) {
    let t = Object.keys(this.dialects), n = t.map(() => !1);
    if (e)
      for (let r of e.split(" ")) {
        let o = t.indexOf(r);
        o >= 0 && (n[o] = !0);
      }
    let s = null;
    for (let r = 0; r < t.length; r++)
      if (!n[r])
        for (let o = this.dialects[t[r]], l; (l = this.data[o++]) != 65535; )
          (s || (s = new Uint8Array(this.maxTerm + 1)))[l] = 1;
    return new QC(e, n, s);
  }
  /**
  Used by the output of the parser generator. Not available to
  user code. @hide
  */
  static deserialize(e) {
    return new fs(e);
  }
}
function Ti(i, e) {
  return i[e] | i[e + 1] << 16;
}
function VC(i) {
  let e = null;
  for (let t of i) {
    let n = t.p.stoppedAt;
    (t.pos == t.p.stream.end || n != null && t.pos > n) && t.p.parser.stateFlag(
      t.state,
      2
      /* StateFlag.Accepting */
    ) && (!e || e.score < t.score) && (e = t);
  }
  return e;
}
function Xd(i) {
  if (i.external) {
    let e = i.extend ? 1 : 0;
    return (t, n) => i.external(t, n) << 1 | e;
  }
  return i.get;
}
const LC = 1, BC = 2, XC = 3, WC = 4, FC = 5, qC = 6, HC = 7, UC = 8, GC = 9, zC = 10, jC = 11, YC = 12, KC = 13, ZC = 14, JC = 15, eE = 16, tE = 17, iE = 18, nE = 19, sE = 20, rE = 21, oE = 22, lE = 23, aE = 24, cE = 25, hE = 26, fE = 27, uE = 28, dE = 29, pE = 30, mE = 31, gE = 32, OE = 33, bE = 34, yE = 35, xE = 36, vE = 37, SE = 38, wE = 39, PE = 40, kE = 41, CE = 42, EE = 43, TE = 44, AE = 45, $E = 46, DE = 47, NE = 48, RE = 49, _E = 50, ME = 51, QE = 52, IE = 53, VE = 54, LE = 55, BE = 56, XE = 57, WE = 58, FE = 59, qE = 60, HE = 61, UE = 62, GE = 63, zE = 64, jE = 65, YE = 66, KE = 67, ZE = 68, JE = 69, eT = 70, tT = 71, iT = 72, nT = 73, sT = 74, rT = 75, oT = 76, lT = 77, aT = 78, cT = 79, hT = 80, fT = 81, uT = 82, dT = 83, pT = 84, mT = 85, gT = 86, OT = 87, bT = 88, yT = 89, xT = 90, vT = 91, ST = 92, wT = 93, PT = 94, kT = 95, CT = 96, ET = 97, TT = 98, AT = 99, $T = 100, DT = 101, NT = 102, RT = 103, _T = 104, MT = 105, QT = 106, IT = 107, VT = 108, LT = 109, BT = 110, XT = 111, WT = 112, FT = 113, qT = 114, HT = 115, UT = 116, GT = 117, zT = 118, jT = 119, YT = 120, KT = 121, ZT = 122, JT = 123, eA = 124, tA = 125, iA = 126, nA = 127, sA = 128, rA = 129, oA = 130, lA = 131, aA = 132, cA = 133, hA = 134, fA = 135, uA = 137, dA = 139, pA = 140, mA = 141, gA = 142, OA = 143, bA = 144, yA = 145, xA = 146, vA = 147, SA = 148, wA = 149, PA = 150, kA = 151, CA = 152, EA = 153, TA = 154, AA = 155, $A = 156, DA = 157, NA = 158, RA = 159, _A = 160, MA = 161, QA = 162, IA = 163, VA = 164, LA = 165, BA = 166, XA = 167, WA = 168, FA = 169, qA = 170, HA = 172, UA = 173, GA = 174, zA = 175, jA = 176, YA = 177, KA = 178, ZA = 179, JA = 180, e$ = 181, t$ = 182, i$ = 183, n$ = 184, s$ = 185, r$ = 186, o$ = 187, l$ = 188, a$ = 189, c$ = 190, h$ = 191, f$ = 192, u$ = 193, d$ = 194, p$ = 195, m$ = 196, g$ = 197, O$ = 198, b$ = 199, y$ = 200, x$ = 201, v$ = 202, S$ = 203, w$ = 204, P$ = 205, k$ = 206, C$ = 207, E$ = 208, T$ = 209, A$ = 210, $$ = 211, D$ = 212, N$ = 215, R$ = 216, _$ = 217, M$ = 218, Q$ = 219, I$ = 220, V$ = 221, L$ = 222, B$ = 223, X$ = 224, W$ = 225, F$ = 227, q$ = 228, H$ = 229, U$ = 230, G$ = 231, z$ = 232, j$ = 233, Y$ = 234, K$ = 235, Z$ = 236, J$ = 237, eD = 238, tD = 239, iD = 240, nD = 241, sD = 242, rD = 243, oD = 244, lD = 245, aD = 246, cD = 247, hD = 248, fD = 249, uD = 250, dD = 251, pD = 252, mD = 253, gD = 254, OD = 255, bD = 256, yD = 257, xD = 258, vD = 259, SD = 260, wD = 261, PD = 262, kD = 263, CD = 264, ED = 265, TD = 266, AD = 267, $D = 268, DD = 269, ND = 270, RD = 271, _D = 272;
var MD = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ABS: nE,
  ADD: NT,
  ALL: BT,
  AS: vT,
  ASC: lT,
  ASK: KC,
  AVG: GE,
  A_predicate: v$,
  Add: yD,
  AdditiveExpression: rA,
  Aggregate: fA,
  Anon: u$,
  ArgList: AA,
  AskQuery: fD,
  BASE: LC,
  BIND: xT,
  BNODE: tE,
  BOUND: ZC,
  BY: sT,
  BaseDecl: UT,
  Bind: Y$,
  BlankNode: h$,
  BlankNodePropertyList: V$,
  BlankNodePropertyListPath: N$,
  Blank_node_label: f$,
  BooleanLiteral: n$,
  BrackettedExpression: cA,
  BuiltInCall: hA,
  CEIL: sE,
  CLEAR: AT,
  COALESCE: RE,
  CONCAT: lE,
  CONSTRUCT: WC,
  CONTAINS: uE,
  COPY: _T,
  COUNT: FE,
  CREATE: DT,
  Clear: gD,
  Collection: I$,
  CollectionPath: D$,
  Comment: WT,
  ConditionalAndExpression: tA,
  ConditionalOrExpression: eA,
  Constraint: NA,
  ConstructQuery: sD,
  ConstructTemplate: rD,
  ConstructTriples: oD,
  Copy: SD,
  Create: wD,
  DATA: QT,
  DATATYPE: YC,
  DAY: yE,
  DEFAULT: LT,
  DELETE: IT,
  DESC: aT,
  DESCRIBE: FC,
  DISTINCT: HC,
  DROP: $T,
  DataBlock: BA,
  DataBlockValue: WA,
  DatasetClause: eD,
  Decimal: GA,
  DecimalNegative: t$,
  DecimalPositive: KA,
  DefaultGraphClause: tD,
  DeleteClause: ND,
  DeleteData: TD,
  DeleteWhere: AD,
  DescribeQuery: hD,
  Double: zA,
  DoubleNegative: i$,
  DoublePositive: ZA,
  Drop: bD,
  ENCODE_FOR_URI: fE,
  EXISTS: eT,
  ExistsFunc: bA,
  Expression: JT,
  ExpressionList: pA,
  FALSE: kT,
  FILTER: yT,
  FLOOR: rE,
  FROM: ST,
  Filter: j$,
  FunctionCall: kA,
  GRAPH: gT,
  GROUP: nT,
  GROUP_CONCAT: jE,
  GraphGraphPattern: G$,
  GraphNode: M$,
  GraphNodePath: A$,
  GraphOrDefault: xD,
  GraphPatternNotTriples: F$,
  GraphRef: mD,
  GraphRefAll: OD,
  GraphTerm: c$,
  GroupClause: wA,
  GroupCondition: PA,
  GroupGraphPattern: yA,
  GroupGraphPatternSub: r$,
  GroupOrUnionGraphPattern: q$,
  HAVING: rT,
  HOURS: xE,
  HavingClause: $A,
  HavingCondition: DA,
  IF: _E,
  IN: iT,
  INSERT: MT,
  INTO: ET,
  IRI: JC,
  ISBLANK: BE,
  ISIRI: VE,
  ISLITERAL: XE,
  ISNUMERIC: WE,
  ISURI: LE,
  InlineData: K$,
  InlineDataFull: s$,
  InlineDataOneVar: XA,
  InsertClause: RD,
  InsertData: PD,
  Integer: IA,
  IntegerNegative: e$,
  IntegerPositive: YA,
  Iri: CA,
  IriOrFunction: J$,
  IriRef: GT,
  Keyword: S$,
  LANG: zC,
  LANGMATCHES: jC,
  LCASE: hE,
  LIMIT: cT,
  LOAD: CT,
  Langtag: qA,
  LimitClause: QA,
  LimitOffsetClauses: MA,
  Load: pD,
  MAX: UE,
  MD5: TE,
  MIN: HE,
  MINUS: mT,
  MINUTES: vE,
  MONTH: bE,
  MOVE: RT,
  MinusGraphPattern: U$,
  Modify: DD,
  Move: vD,
  MultiplicativeExpression: oA,
  NAMED: wT,
  NOT: tT,
  NOW: kE,
  NamedGraphClause: nD,
  Nil: dA,
  NotExistsFunc: Z$,
  NumericExpression: sA,
  NumericLiteral: HA,
  NumericLiteralNegative: JA,
  NumericLiteralPositive: jA,
  NumericLiteralUnsigned: UA,
  OFFSET: hT,
  OPTIONAL: pT,
  ORDER: oT,
  Object: _$,
  ObjectList: R$,
  ObjectListPath: E$,
  ObjectPath: T$,
  OffsetClause: VA,
  OptionalGraphPattern: H$,
  OrderClause: RA,
  OrderCondition: _A,
  PREFIX: BC,
  Path: m$,
  PathAlternative: g$,
  PathElt: y$,
  PathEltOrInverse: b$,
  PathMod: k$,
  PathNegatedPropertySet: w$,
  PathOneInPropertySet: P$,
  PathPrimary: x$,
  PathSequence: O$,
  Pname_ln: TA,
  Pname_ns: jT,
  PrefixDecl: zT,
  PrefixedName: EA,
  PrimaryExpression: aA,
  Prologue: HT,
  PropertyList: aD,
  PropertyListNotEmpty: L$,
  PropertyListPath: W$,
  PropertyListPathNotEmpty: d$,
  QuadData: kD,
  QuadPattern: $D,
  Quads: CD,
  QuadsNotTriples: ED,
  Query: qT,
  RAND: iE,
  RDFLiteral: FA,
  REDUCED: UC,
  REGEX: JE,
  REPLACE: ZE,
  ROUND: oE,
  RegexExpression: OA,
  RelationalExpression: nA,
  SAMETERM: IE,
  SAMPLE: zE,
  SECONDS: SE,
  SELECT: XC,
  SEPARATOR: YE,
  SERVICE: OT,
  SHA1: AE,
  SHA256: $E,
  SHA384: DE,
  SHA512: NE,
  SILENT: bT,
  STR: GC,
  STRAFTER: gE,
  STRBEFORE: mE,
  STRDT: QE,
  STRENDS: pE,
  STRLANG: ME,
  STRLEN: aE,
  STRSTARTS: dE,
  STRUUID: EE,
  SUBSTR: KE,
  SUM: qE,
  SelectClause: KT,
  SelectQuery: YT,
  ServiceGraphPattern: z$,
  SolutionModifier: SA,
  SourceSelector: iD,
  StrReplaceExpression: gA,
  String: uA,
  SubSelect: xA,
  SubstringExpression: mA,
  TIMEZONE: wE,
  TO: TT,
  TRUE: PT,
  TZ: PE,
  TriplesBlock: o$,
  TriplesNode: Q$,
  TriplesNodePath: $$,
  TriplesSameSubject: lD,
  TriplesSameSubjectPath: l$,
  TriplesTemplate: cD,
  UCASE: cE,
  UNDEF: uT,
  UNION: dT,
  URI: eE,
  USING: XT,
  UUID: CE,
  UnaryExpression: lA,
  Unit: FT,
  Update: uD,
  Update1: dD,
  UsingClause: _D,
  VALUES: fT,
  ValueLogical: iA,
  ValuesClause: LA,
  Var: ZT,
  VarOrIri: X$,
  VarOrTerm: a$,
  Verb: B$,
  VerbPath: p$,
  VerbSimple: C$,
  WHERE: qC,
  WITH: VT,
  WhereClause: vA,
  YEAR: OE
});
const Wd = (i, e) => MD[i.toUpperCase()] || -1, QD = { __proto__: null, a: 634 }, ID = fs.deserialize({
  version: 14,
  states: "!A[O!TQPOOP!eOPOOO!jQPO'#EtO!oQPO'#EvOOQO'#IY'#IYO!tQPO'#EsO$pQPO'#HpQOQPOOPOOO'#IX'#IXP%QOPO)CDnOOQO,5;`,5;`O%XQPO,5;bOOQO-E<W-E<WO%^QPO'#EyO%oQPO'#ExO%zQPO'#HhO&VQPO'#HnO%oQPO'#HoO&hQPO,5;^O&pQPO'#HrO'OQPO'#HtO'aQPO'#HvO(TQPO'#HwO([QPO'#HyO(cQPO'#HzO(jQPO'#H{O(rQPO'#IVO(zQPO'#IUO)VQPO'#ITO)bQPO'#ITO&sQPO'#ITOOQO'#Hq'#HqO)jQPO,5>[POOO-E<V-E<VOOQO1G0|1G0|OOQO'#IZ'#IZO)rQPO'#IZO/[QPO,5;eOOQO,5;e,5;eO/mQPO,5;eOOQO'#Fe'#FeO%uQPO'#FeO1fQPO'#FcO2YQPO'#HdOOQO'#Is'#IsO%oQPO,5;dO2hQPO,5;dO3PQPO,5>SO4uQPO'#HiO%oQPO,5>SO4|QPO,5>SOOQO'#Fk'#FkOOQO'#Fj'#FjOOQO'#HU'#HUOOQO'#It'#ItO5RQPO,5>YO5lQPO,5>YO%oQPO,5>ZO2hQPO,5>ZO5yQPO'#FwOOQO1G0x1G0xO6UQPO,5>^O&sQPO,5>^O&sQPO'#HsOOQO'#Hu'#HuOOQO,5>`,5>`O6aQPO,5>`OOQO,5>b,5>bO6aQPO,5>bOOQO'#Hx'#HxO&sQPO'#HxO6oQPO,5>cO'rQPO,5>cO6tQPO,5>eO'rQPO,5>eO6yQPO,5>fO'rQPO,5>fOOQO,5>g,5>gO7OQPO,5>gO7TQPO,5>hO7YQPO'#ISOOQO,5>q,5>qO7TQPO,5>lO(uQPO,5>mOOQO,5>p,5>pO(uQPO'#IVO7dQPO'#IWOOQO'#Iv'#IvO7rQPO,5>oO%uQPO,5>oO7rQPO,5>oO7zQPO,5>oOYQPO1G3vO)rQPO'#FVOOQO'#FZ'#FZO8SQPO'#FXO8XQPO'#FXO8^QPO'#FXO8cQPO'#F_O8hQPO'#F`O8mQPO'#FaO9|QQO'#F{OOQO'#GP'#GPOOQO'#GS'#GSOOQO'#GW'#GWOOQO'#GO'#GOOOQO'#G['#G[O%uQPO'#FbO:jQPO'#HbOOQO'#FW'#FWO:oQPO'#FWO:tQPO'#FWO:yQPO'#FWO;OQPO'#FWO;WQPO'#FWO;]QPO'#FWO;eQPO'#FWO<tQQO'#HcOOQO'#FU'#FUO=bQPO'#FTOOQO'#FT'#FTOCoQQO'#FSOEZQQO'#FROOQO'#FQ'#FQOE}QQO'#FPOOQO'#FO'#FOOF{QPO'#E}OGaQPO'#E|OOQO'#E{'#E{OGrQPO,5>uOOQO-E<X-E<XOGwQPO1G1POOQO1G1P1G1POOQO,5<P,5<POHYQPO'#F{OJeQPO'#FdOOQO'#Gc'#GcOOQO'#Gb'#GbOOQO'#Ga'#GaO/xQPO'#GxOJmQPO'#G{OOQO'#Gw'#GwOJmQPO'#G`OKXQPO'#G`OK{QPO'#G_OLmQPO'#HYO%uQPO'#HZO%uQPO'#H[ON|QPO'#H]O! [QPO'#H^O! mQPO'#H_O!%zQPO'#H`O5yQPO'#HaOOQO'#HX'#HXO!&PQPO'#ImO!&sQPO'#G^O!&sQPO'#G^O!'bQPO,5;}OOQO'#Hf'#HfOOQO'#He'#HeO&sQPO'#HgOOQO,5>O,5>OOOQO-E<q-E<qO2hQPO1G1OO!'gQPO'#FgO! mQPO'#FnO!'lQPO'#FqO!'qQPO'#FtO!'qQPO'#FvO!'vQPO'#FsO!(UQPO'#FsOOQO'#Ff'#FfO!(dQPO'#FfO!(uQPO'#FfO!(|QPO'#FfOOQO1G1O1G1OO!)WQPO1G3nO3XQPO'#HQO!)]QPO'#HROOQO'#HP'#HPO!)]QPO'#HkO!)nQPO'#HkO!){QPO'#HjOOQO,5>T,5>TO!*TQPO,5>TO%oQPO1G3nO2hQPO1G3nO!*YQPO1G3nO5lQPO1G3tOOQO-E<r-E<rOOQO1G3t1G3tO2hQPO1G3tO2hQPO1G3uOOQO1G3u1G3uO!*aQPO'#FyO!*fQPO'#G]O!*kQPO'#G]OOQO'#Fx'#FxOOQO,5<c,5<cO7OQPO1G3xO!*sQPO1G3xOOQO,5>_,5>_OOQO1G3z1G3zOOQO1G3|1G3|OOQO,5>d,5>dO'rQPO1G3}O!+OQPO1G3}O'rQPO1G4PO!+TQPO1G4PO'rQPO1G4QO!+YQPO1G4QOOQO1G4R1G4RO7YQPO'#H}OOQO1G4S1G4SO!+_QPO'#HmON|QPO'#IPO!+jQPO'#IuO!+wQPO'#IOO!+wQPO'#IOO!,PQPO,5>nOOQO1G4W1G4WOOQO1G4X1G4XOOQO,5>r,5>rO&sQPO,5>rOOQO-E<t-E<tO%uQPO1G4ZOOQO1G4Z1G4ZO!,UQPO1G4ZO(uQPO'#IUO!,^QPO1G4ZO!,UQPO1G4ZO#{QPO'#HpOOQO7+)b7+)bO!,iQPO,5;qO!,nQPO,5;sO!,xQPO,5;sO!-PQPO,5;sO)rQPO,5;yO)rQPO,5;zO)rQPO,5;{OOQO,5<g,5<gO&sQPO,5<gOOQO,5;|,5;|O%uQPO,5=|O)rQPO,5;rO)rQPO,5;rO!-WQPO,5;rOOQO,5;r,5;rOOQO'#F^'#F^O)rQPO'#F^O)rQPO,5;rOOQO'#Fm'#FmO!-]QPO'#FmOOQO,5=},5=}OOQO,5;o,5;oO)rQPO'#IoO!.bQQO,5;nO)rQPO'#IpO!0SQQO'#IpO!1nQQO,5;mO!2bQPO,5;kO;]QPO,5;kO!2oQPO,5;kO)rQPO'#IqO!2tQPO,5;iO)rQPO'#IrO!3YQPO,5;hO!3kQPO1G4aO!4UQPO,5<OOOQO'#Ig'#IgO!4]QPO,5=dOOQO'#Gv'#GvOOQO'#Gn'#GnOOQO'#Gm'#GmO!4uQPO'#GmO!4|QPO'#GmO!5eQSO'#GlOOQO'#Gk'#GkO!7eQPO'#GkO!7yQSO'#GjO!9pQSO'#GiOOQO'#Gh'#GhOOQO'#Gg'#GgOOQO'#Gs'#GsO!;dQPO,5=gO/xQPO'#GfOOQO,5<z,5<zOOQO'#HV'#HVO!;iQPO,5<yO%uQPO'#InO!<YQPO,5=tOOQO,5=u,5=uOOQO,5=v,5=vO%uQPO,5=wO%uQPO,5=xON|QPO,5=xO!>iQPO'#FiOOQO'#Fp'#FpOOQO,5=y,5=yO)rQPO,5=zOOQO,5={,5={OOQO,5?X,5?XO!>qQPO,5?XOOQO-E<k-E<kO!?bQPO,5<xOOQO1G1i1G1iOOQO,5>R,5>ROOQO7+&j7+&jO!@PQPO,5<ROOQO'#Fo'#FoOOQO'#I^'#I^O!DaQPO,5<YO!DwQPO,5<]OOQO'#I`'#I`O!EUQPO,5<`O!EgQPO,5<bOOQO,5<_,5<_OOQO,5<Q,5<QO!ExQPO,5<QO!FZQPO,5<QO!FbQPO7+)YOOQO'#Ij'#IjO!FiQPO,5=lOOQO'#HO'#HOOOQO'#HT'#HTO3XQPO'#HSO!FpQPO,5=mOOQO,5>V,5>VOOQO'#Hl'#HlO!FuQPO,5>UOOQO1G3o1G3oO2hQPO7+)YOOQO7+)Y7+)YO!F|QPO7+)YOOQO7+)`7+)`O2hQPO7+)`OOQO7+)a7+)aO!H`QPO,5<eO!HgQPO,5<wOOQO'#Ib'#IbO!HrQPO,5<wO!HzQPO,5<wOOQO7+)d7+)dO7OQPO7+)dOOQO7+)i7+)iO'rQPO7+)iOOQO7+)k7+)kO'rQPO7+)kOOQO7+)l7+)lO'rQPO7+)lO!IPQPO,5>iO!IUQPO,5>XO!I`QPO,5>kOOQO,5?a,5?aO!IeQPO,5?aOOQO-E<s-E<sO!IoQPO,5>jOOQO1G4Y1G4YOOQO1G4^1G4^OOQO7+)u7+)uO%uQPO7+)uO!IwQPO7+)uO!IwQPO7+)uOOQO1G1]1G1]O!JPQPO1G1_O!JUQPO1G1_O)rQPO1G1_O!J]QPO1G1_O)rQPO1G1_O!JeQPO1G1eO!JjQPO1G1fO!JoQPO1G1gOOQO1G2R1G2ROOQO1G3h1G3hO!JtQPO1G1^O!JyQPO1G1^O!KOQPO,5;xO!KWQPO1G1^O!K]QPO,5<XO)rQPO,5<XOOQO,5?Z,5?ZOOQO-E<m-E<mOOQO,5?[,5?[O!LcQQO,5?[OOQO-E<n-E<nO;jQPO'#HcO!MVQPO'#FSO!MaQPO'#FROOQO1G1V1G1VO;]QPO1G1VOOQO,5?],5?]OOQO-E<o-E<oOOQO,5?^,5?^OOQO-E<p-E<pO!MkQPO7+){O!MpQPO1G1jOOQO-E<e-E<eOOQO1G3O1G3OOOQO'#Gq'#GqO!MxQPO'#GqOOQO'#Gp'#GpO!NWQPO'#GpOOQO,5=X,5=XO!N_QPO,5=XOOQO'#Gr'#GrOOQO,5=W,5=WOOQO,5=V,5=VO!4|QPO'#IeO!NdQSO,5=UO!4|QPO'#IfO#!ZQSO,5=TOOQO1G3R1G3ROOQO'#Gu'#GuO##}QPO'#GtO#$xQPO,5=QOOQO1G2e1G2eOOQO,5?Y,5?YOOQO-E<l-E<lOOQO1G3c1G3cOOQO1G3d1G3dO%uQPO1G3dOOQO,5<T,5<TO#%pQPO1G3fOOQO1G4s1G4sOOQO'#Fh'#FhO)rQPO'#FhOOQO'#I]'#I]O#%uQPO1G1mOOQO-E<[-E<[O!%uQPO'#FrOOQO'#Fr'#FrOOQO'#I_'#I_O#&`QPO1G1wOOQO-E<^-E<^OOQO1G1l1G1lO#&|QPO1G1lO2hQPO<<LtO#'_QPO<<LtOOQO-E<h-E<hOOQO1G3W1G3WO#'dQPO,5=nOOQO'#G}'#G}O#'uQPO'#G|OOQO1G3X1G3XOOQO1G3p1G3pOOQO<<Lt<<LtOOQO<<Lz<<LzOOQO'#Fz'#FzOOQO'#Ia'#IaO#(pQPO1G2POOQO1G2P1G2PO#(wQPO'#IcOOQO'#Ic'#IcO#)OQPO1G2cOOQO1G2c1G2cOOQO-E<`-E<`O#)ZQPO1G2cO#)OQPO1G2cOOQO<<MO<<MOOOQO<<MT<<MTOOQO<<MV<<MVOOQO<<MW<<MWOOQO1G4T1G4TOOQO1G3s1G3sO#)`QPO1G4VOOQO1G4{1G4{OOQO<<Ma<<MaO%uQPO<<MaO#)gQPO<<MaOOQO7+&y7+&yO#)oQPO7+&yO#)tQPO7+&yO#)yQPO7+&yO)rQPO7+'PO)rQPO7+'QO)rQPO7+'ROOQO7+&x7+&xO)rQPO7+&xO)rQPO'#I[O#*RQPO1G1dOOQO1G1d1G1dO)rQPO7+&xO#*ZQPO1G1sOOQO1G1s1G1sO#*ZQPO1G1sO#*cQPO,5;nO#*mQPO'#IpO#*wQPO,5;mOOQO7+&q7+&qOOQO<<Mg<<MgOOQO7+'U7+'UOOQO,5=],5=]OOQO,5=[,5=[O#+RQSO,5=[OOQO1G2s1G2sOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?Q,5?QOOQO-E<d-E<dO/xQPO'#IhO#+ZQPO,5=`O#,UQPO'#IiO#-OQPO1G2lOOQO7+)O7+)OO#-vQPO7+)QO#-{QPO,5<SOOQO-E<Z-E<ZOOQO,5<^,5<^OOQO-E<]-E<]OOQO7+'W7+'WOOQOANB`ANB`O2hQPOANB`O#.TQPO'#IkO#.hQPO1G3YO3XQPO'#IlO#.yQPO,5=hOOQO-E<_-E<_OOQO7+'k7+'kO#/tQPO,5>}OOQO,5>},5>}OOQO-E<a-E<aOOQO7+'}7+'}O#/{QPO7+'}O#/{QPO7+'}OOQO7+)q7+)qO#0WQPO7+)qOOQOANB{ANB{O%uQPOANB{OOQO<<Je<<JeO#0]QPO<<JeO#0bQPO<<JeO#0gQPO<<JkO#0oQPO<<JlO#0tQPO<<JmO#0|QPO<<JdOOQO,5>v,5>vOOQO-E<Y-E<YOOQO7+'O7+'OO#1RQPO<<JdOOQO7+'_7+'_O#1WQPO7+'_O#1`QPO,5?[O!4dQPO'#IdO#1jQSO1G2vOOQO1G2v1G2vOOQO,5?S,5?SOOQO-E<f-E<fO3XQPO,5?TOOQO-E<g-E<gO#1rQPO<<LlOOQO1G1n1G1nO#1wQPO1G1nOOQOG27zG27zO3XQPO,5?VOOQO-E<i-E<iOOQO,5?W,5?WOOQO-E<j-E<jOOQO1G4i1G4iO#1|QPO<<KiOOQO<<Ki<<KiOOQO<<M]<<M]OOQOG28gG28gO1WQPOAN@PO#2XQPOAN@POOQOAN@VAN@VO)rQPOAN@VO)rQPOAN@WOOQOAN@XAN@XO)rQPOAN@XOOQOAN@OAN@OO)rQPOAN@OOOQO<<Jy<<JyOOQO,5?O,5?OOOQO-E<b-E<bOOQO7+(b7+(bOOQO1G4o1G4oOOQOANBWANBWO#2^QPO7+'YOOQO1G4q1G4qOOQOANATANATO#2cQPOG25kO1WQPOG25kO#2hQPOG25qO#2mQPOG25rO#2uQPOG25sO#2zQPOG25jOOQO<<Jt<<JtOOQOLD+VLD+VO#3PQPOLD+VOOQOLD+]LD+]OOQOLD+^LD+^O)rQPOLD+^OOQOLD+_LD+_OOQOLD+ULD+UOOQO!$'Nq!$'NqO#3UQPO!$'NxOOQO!)9Dd!)9DdO=bQPO'#FTO!2bQPO'#IoO!2bQPO'#Ip",
  stateData: "#3q~O'mOS#dPQ~OPQOQRO#S#gP#V#gP#W#gP#X#gP#Y#gP#Z#gP#[#gP#]#gP#_#gP#`#gP'k#gP~OR#gPS#gPT#gP]#gP~PYO#dWO~O#iYO~O#kZO~OPQOQROR#gXS#gXT#gX]#gX#S#gX#V#gX#W#gX#X#gX#Y#gX#Z#gX#[#gX#]#gX#_#gX#`#gX'k#gX~O#ScO#VdO#WeO#XiO#YfO#ZgO#[hO#]jO#_kO#`nO'k&dX~OR]OS_OT`O]aO~P#{O#dWO~Q'l]#irO~OVwOWwO#nsO'ntO'qvO~OUyO#O{O'xzO~OU!SO#O{O'x!QO~O#i!UO#k!TO#n!VO$`!TO'q!YO~O!s!]O'k$kP~O!z!`O#i!UO#k!TO$`!TO~O!x!aO!z!dO#P!bO#a!bO#b!bO~O!x!aO!z!fO#P!bO#a!bO#b!bO~O!x!hO#a!gO#i!UO#k!TO$`!TO~O!z!jO~P'rO!z!lO~P'rO!z!nO~P'rO!x!aO!z!pO~O#^!qO'x!rO~OU!uO#^!tO'x!rO~OU!{O#]!wO#c!xO~OU!{O#c!xO~O#|#OO'k&da~OX#bOY#bOZ#cO[#bO^#dO_#bO`#bOa#eOb#fOc#bOd#bOe#bOf#bOg#gOh#bOi#bOj#bOk#bOl#cOm#cOn#cOo#cOp#cOq#bOr#bOs#bOt#bOu#bOv#bOw#bOx#bOy#fOz#fO{#fO|#bO}#bO!O#bO!P#bO!Q#bO!R#gO!S#hO!T#cO!U#cO!V#cO!W#bO!X#bO!Y#bO!Z#bO![#bO!]#RO!^#SO!_#SO!`#SO!a#SO!b#SO!c#TO!e#UO!f#VO!g#WO!h#_O!i#`O#Q#^O#R#^O#i!UO#k!TO#n#jO$`!TO$i#YO$t#YO$u#YO$w#ZO$x#ZO$y#ZO${#[O$|#[O$}#[O'n#PO'o#kO's#QO't#QO'u#QO'v#QO'}#kO(P#kO~O#nsO'ntOU#ma#O#ma'x#ma~O#nsO'ntO'q#xO~O#Q#^O#R#^O#i!UO#k!TO#n$OO$P#}O$`!TO$i#YO$t#YO$u#YO$w#ZO$x#ZO$y#ZO${#[O$|#[O$}#[O%W#|O%X#|O%n$QO'n$PO's#QO't#QO'u#QO'v#QO~OR]O!s$^O!v$WO!w$XO!x$YO!y$ZO!{$[O!|$]O'xzO'w%QP~P/xO#P$fO#i!UO#k!TO$`!TO~O!k$jO!m$kO!n$lO!q$mO!r$nO!s$YP'k$YP~OU$vO#O{O~O#Q#^O#R#^O#i!UO#k!TO#n$OO$P#}O$`!TO$i#YO$t#YO$u#YO$w#ZO$x#ZO$y#ZO${#[O$|#[O$}#[O%W#|O%X#|O%n$xO'n$wO's#QO't#QO'u#QO'v#QO~O'w$}O~P3XO'x%RO~OUyO#O{O#i!UO#k!TO#n!VO$`!TO'xzO~P2hOUyO#O{O'xzO~P2hO#n%YO$P%ZO'n%[O~O#T%_O#|&fa'k&fa~O!x!aO#P!bO#a!bO#b!bO~O#U%eO~O#U%gO~O#U%iO~O!x!aO~O'x%lO~O!x%oO'w&rP~P3XO#P%wO#i!UO#k!TO$`!TO~OU%yO#c!xO~O#]!wO#_%|O~O'n&SO~O'n&TO~O'n&UO~O'n&VO~O'n&WO~O'n&XO~O$p&YO$q&ZO!}$oX$w$oX$x$oX$y$oX${$oX$|$oX$}$oX'q$oX'}$oX(O$oX(P$oX(V$oX(W$oX'p$oX#|$oX$O$oX~O!i$oX!j$oX'r$oX(Q$oX(R$oX(S$oX(T$oX(U$oX~P8rO!h&]O~O'n&^O~O'n&_O~O'n&`O~O$P&aO'n&^O~O$P&aO~O$P&bO'n&cO~O'n&dO~O$P&eO'n&fO!}&VX$w&VX$x&VX$y&VX${&VX$|&VX$}&VX'q&VX'}&VX(O&VX(P&VX(V&VX(W&VX'p&VX#|&VX$O&VX~O!i&VX!j&VX'r&VX(Q&VX(R&VX(S&VX(T&VX(U&VX~P;jOX#bOY#bOZ#cO[#bO^#dO_#bO`#bOa#eOb#fOc#bOd#bOe#bOf#bOg#gOh#bOi#bOj#bOk#bOl#cOm#cOn#cOo#cOp#cOq#bOr#bOs#bOt#bOu#bOv#bOw#bOx#bOy#fOz#fO{#fO|#bO}#bO!O#bO!P#bO!Q#bO!R#gO!S#hO!T#cO!U#cO!V#cO!W#bO!X#bO!Y#bO!Z#bO![#bO!]#RO!^#SO!_#SO!`#SO!a#SO!b#SO!c#TO!e#UO!f#VO!g#WO!h#_O!i#`O#Q#^O#R#^O#i!UO#k!TO#n#jO$`!TO$i#YO$t#YO$u#YO$w#ZO$x#ZO$y#ZO${#[O$|#[O$}#[O'n#PO's#QO't#QO'u#QO'v#QO~O!}#vX$w#vX$x#vX$y#vX${#vX$|#vX$}#vX'}#vX(P#vX(V#vX(W#vX'p#vX#|#vX$O#vX~O'q&iO(O&iO!i#vX!j#vX'r#vX(Q#vX(R#vX(S#vX(T#vX(U#vX~PBqO$w#ZO$x#ZO$y#ZO${#[O$|#[O$}#[O!}#uX(V#uX(W#uX'p#uX#|#uX$O#uX~O'}&kO(P&kO!i#uX!j#uX'r#uX(Q#uX(R#uX(S#uX(T#uX(U#uX~PDcO!i&pO!j&oO'r&nO(Q&nO(R&nO(S&nO(T&nO(U&nO!}#sX(V#sX(W#sX'p#sX#|#sX$O#sX~O(V&qO!}#qX(W#qX'p#qX#|#qX$O#qX~O(W&sO!}#pX'p#pX#|#pX$O#pX~O!}&uO~O#nsO'ntOU#mi#O#mi'x#mi~O#i$oX#k$oX#n$oX$`$oX'n$oX'o$oX'y$oX'z$oX#Q$oX#R$oX$P$oX$i$oX$t$oX$u$oX%W$oX%X$oX%n$oX's$oX't$oX'u$oX'v$oX%m$oX!s$oX!v$oX!w$oX!x$oX!y$oX!{$oX!|$oX%z$oX'w$oX'x$oX!t$oX~P8rOUyO'xzO~O#i!UO#k!TO#n'VO$`!TO'n&}O'o&|O'y&zO'z'QO~O!s%yP!v%yP!w%yP!x%yP!y%yP!{%yP!|%yP%z%yP'w%yP'x%yP~PJmO%z'[O!s%RX!v%RX!w%RX!x%RX!y%RX!{%RX!|%RX'w%RX'x%RX~O!u']O!s%|X!v%|X!w%|X!x%|X!y%|X!{%|X!|%|X#Q%|X#R%|X#i%|X#k%|X#n%|X$P%|X$`%|X$i%|X$t%|X$u%|X$w%|X$x%|X$y%|X${%|X$|%|X$}%|X%W%|X%X%|X%n%|X%z%|X'n%|X's%|X't%|X'u%|X'v%|X'w%|X'x%|X~O#i!UO#k!TO#n!VO$`!TO~O!z'cO#i!UO#k!TO#n!VO$`!TO~OX#bOY#bOZ#cO[#bO^#dO_#bO`#bOa#eOb#fOc#bOd#bOe#bOf#bOg#gOh#bOi#bOj#bOk#bOl#cOm#cOn#cOo#cOp#cOq#bOr#bOs#bOt#bOu#bOv#bOw#bOx#bOy#fOz#fO{#fO|#bO}#bO!O#bO!P#bO!Q#bO!R#gO!S#hO!T#cO!U#cO!V#cO!W#bO!X#bO!Y#bO!Z#bO![#bO!]#RO!^#SO!_#SO!`#SO!a#SO!b#SO!c#TO!e#UO!f#VO!g#WO!h#_O!i#`O#i!UO#k!TO$`!TO'n#PO~O'n'gO~O%z'jO!s'aX!v'aX!w'aX!x'aX!y'aX!{'aX!|'aX'w'aX'x'aX~P/xO!s$^O!v$WO!w$XO!x$YO!y$ZO!{$[O!|$]O'xzO'w%QX~O'w'mO~O!l'pO~O!l'tO~O$i'uO~O!r$nO!s$gX'k$gX'w$gX~O!q$mO!s$gX'k$gX'w$gX~O!q$mO!r$nO!s$YX'k$YX'w$YX~O!n$lO~P!(dO!m$kO!n$lO~P!(dO'x'|O~O#i!UO#k!TO#n!VO$`!TO'y&zO~O%z&`P'w&`P!x&`P~P!)]O%z(VO'w&^X~O'w(WO~O'w(XO~P3XO'x(_O~O'x(`O~O#n(aO'p(cO~O#T(eO#|&fi'k&fi~O#U(gO~O#U(iO~O#U(kO~O%z(mO!x&aX'w&aX~O%z(pO!x'iX'w'iX~P3XO!x%oO'w&rX~O'w(sO~OU(vO#c!xO~OU(vO#]!wO#c!xO~O'p(yO~OV({O'q(zO~P)rOV(|O~P)rOV)OO~P)rO#n)UO~OV)ZO~P)rO!}#va$w#va$x#va$y#va${#va$|#va$}#va'}#va(P#va(V#va(W#va'p#va#|#va$O#va~O'q&iO(O&iO!i#va!j#va'r#va(Q#va(R#va(S#va(T#va(U#va~P!-dO!}'dX$w'dX$x'dX$y'dX${'dX$|'dX$}'dX'}'dX(P'dX(V'dX(W'dX'p'dX#|'dX$O'dX~O'q&iO(O&iO!i'dX!j'dX'r'dX(Q'dX(R'dX(S'dX(T'dX(U'dX~P!/UO$w#ZO$x#ZO$y#ZO${#[O$|#[O$}#[O!}#ua(V#ua(W#ua'p#ua#|#ua$O#ua~O'}&kO(P&kO!i#ua!j#ua'r#ua(Q#ua(R#ua(S#ua(T#ua(U#ua~P!0vO'o-}O'}-}O(P-}O~P=bO!j)eO~O(V&qO!}#qa(W#qa'p#qa#|#qa$O#qa~O(W&sO!}#pa'p#pa#|#pa$O#pa~O#n)jO~O!k$jO!m$kO!n$lO!q$mO!r$nO!s$YP~O'w$YP~P!3pO'p)mO~P/xO#i!UO#k!TO$`!TO'y&zO'z)oO~O'n)qO~P!4dO#i!UO#k!TO$`!TO'n&}O'o&|O'y&zO'z'QO~O'q)tO'|)tO'})tO#Q%`X#R%`X#i%`X#k%`X#n%`X$P%`X$`%`X$i%`X$t%`X$u%`X$w%`X$x%`X$y%`X${%`X$|%`X$}%`X%W%`X%X%`X%n%`X'n%`X's%`X't%`X'u%`X'v%`X'{%`X(O%`X'p%`X~O#i!UO#k!TO$`!TO'n&}O'o&|O'y&zO~O(O)wO#Q%^X#R%^X#i%^X#k%^X#n%^X$P%^X$`%^X$i%^X$t%^X$u%^X$w%^X$x%^X$y%^X${%^X$|%^X$}%^X%W%^X%X%^X%n%^X'n%^X's%^X't%^X'u%^X'v%^X'{%^X'p%^X~O'{)yO#Q%]X#R%]X#i%]X#k%]X#n%]X$P%]X$`%]X$i%]X$t%]X$u%]X$w%]X$x%]X$y%]X${%]X$|%]X$}%]X%W%]X%X%]X%n%]X'n%]X's%]X't%]X'u%]X'v%]X'p%]X~O%m){O~O!s%Ra!v%Ra!w%Ra!x%Ra!y%Ra!{%Ra!|%Ra'w%Ra'x%Ra~P/xO!u']O!s%|a!v%|a!w%|a!x%|a!y%|a!{%|a!|%|a#Q%|a#R%|a#i%|a#k%|a#n%|a$P%|a$`%|a$i%|a$t%|a$u%|a$w%|a$x%|a$y%|a${%|a$|%|a$}%|a%W%|a%X%|a%n%|a%z%|a'n%|a's%|a't%|a'u%|a'v%|a'w%|a'x%|a~O$P&eO'n&fO~O!s'aa!v'aa!w'aa!x'aa!y'aa!{'aa!|'aa'w'aa'x'aa~P/xO!s$^O!v$WO!w$XO!x$YO!y$ZO!{$[O!|$]O'xzO'w%Qa~OX#bOY#bOZ#cO[#bO^#dO_#bO`#bOa#eOb#fOc#bOd#bOe#bOf#bOg#gOh#bOi#bOj#bOk#bOl#cOm#cOn#cOo#cOp#cOq#bOr#bOs#bOt#bOu#bOv#bOw#bOx#bOy#fOz#fO{#fO|#bO}#bO!O#bO!P#bO!Q#bO!R#gO!S#hO!T#cO!U#cO!V#cO!W#bO!X#bO!Y#bO!Z#bO![#bO!]#RO!^#SO!_#SO!`#SO!a#SO!b#SO!c#TO!e#UO!f#VO!g#WO!h#_O!i#`O#i!UO#k!TO#n*YO$`!TO'n*ZO~O!n$ba!q$ba!r$ba!s$ba'k$ba'w$ba~P! mO!o*_O!p*_O#n*`O~P! mO$i'uO!r$ha!s$ha'k$ha'w$ha~O$i'uO!q$ja!s$ja'k$ja'w$ja~O!q$mO!r$nO!s$Ya'k$Ya'w$Ya~O!n$lO~P!ExO'w*fO~P3XO'p*iO~P3XO%m*mO~O'w&^a~P3XO'w*fO~O!t*qO#Q#^O#R#^O#i!UO#k!TO$`!TO$i#YO$t#YO$u#YO$w#ZO$x#ZO$y#ZO${#[O$|#[O$}#[O's#QO't#QO'u#QO'v#QO~O'w*tO~P!GRO$P*vO'n*uO'w*xO~O#n(aO'p*zO~O'x*{O~O'w+QO~O!x&aa'w&aa~P3XO'x+SO~O!x'ia'w'ia~P3XO!x%oO'w&ra~OU+VO#c!xO~O'p+XO~O'q+YO~P)rO#|+ZO'p+XO~O$O+]O~O$O+^O~O$O+_O~O'p+`O~O$O+aO~O$O+bO'p+dO~O$O+eO~O$O+bO'p+gO~O!}'da$w'da$x'da$y'da${'da$|'da$}'da'}'da(P'da(V'da(W'da'p'da#|'da$O'da~O'q&iO(O&iO!i'da!j'da'r'da(Q'da(R'da(S'da(T'da(U'da~P!KeO'q.OO(O.OO~PBqO'}.PO(P.PO~PDcO'p+mO~O!s!]O'w$kP~O#i!UO#k!TO$`!TO'y&zO~O'p+pO~P!4dO'p+rO~O(O)wO#Q%^a#R%^a#i%^a#k%^a#n%^a$P%^a$`%^a$i%^a$t%^a$u%^a$w%^a$x%^a$y%^a${%^a$|%^a$}%^a%W%^a%X%^a%n%^a'n%^a's%^a't%^a'u%^a'v%^a'{%^a'p%^a~O'{)yO#Q%]a#R%]a#i%]a#k%]a#n%]a$P%]a$`%]a$i%]a$t%]a$u%]a$w%]a$x%]a$y%]a${%]a$|%]a$}%]a%W%]a%X%]a%n%]a'n%]a's%]a't%]a'u%]a'v%]a'p%]a~O$O+wO#|%hX%m%hX!s%hX!v%hX!w%hX!x%hX!y%hX!{%hX!|%hX%z%hX'w%hX'x%hX~O#|+yO%m%Ya!s%Ya!v%Ya!w%Ya!x%Ya!y%Ya!{%Ya!|%Ya%z%Ya'w%Ya'x%Ya~O!}+|O~O!m$Zi!n$Zi!q$Zi!r$Zi!s$Zi'k$Zi'w$Zi~P!@PO!o*_O!p*_O#n*`O!q$ei!r$ei!s$ei'k$ei'w$ei~P! mO!q$mO!r$nO!s$Yi'k$Yi'w$Yi~O'w,TO~O#|,UO%m%va%z%va'w%va!x%va~O$O,WO#|%pX%m%pX%z%pX'w%pX!x%pX!s%pX!v%pX!w%pX!y%pX!{%pX!|%pX'x%pX~O'w,ZO~P!GRO'p,]O~P!GRO$P*vO'n*uO'w,_O~O'x,`O~O'w,bO~P3XOU,eO#c!xO~O'p,fO~O!d,gO~O#|,hO'p,fO~O$O+bO'p,oO~O$O+bO'p,qO~O'q.OO(O.OO~P!-dO'q.OO(O.OO~P!/UO'}.PO(P.PO~P!0vO'p,vO'{,tO~O$O+wO#|%ha%m%ha!s%ha!v%ha!w%ha!x%ha!y%ha!{%ha!|%ha%z%ha'w%ha'x%ha~O#|']X%m']X!s']X!v']X!w']X!x']X!y']X!{']X!|']X%z']X'w']X'x']X~PJmO#|+yO%m%Yi!s%Yi!v%Yi!w%Yi!x%Yi!y%Yi!{%Yi!|%Yi%z%Yi'w%Yi'x%Yi~O#n,{O~O!},}O'p,|O~O#|'_X%m'_X%z'_X'w'_X!x'_X~P!)]O#|,UO%m%vi%z%vi'w%vi!x%vi~O$O,WO#|%pa%m%pa%z%pa'w%pa!x%pa!s%pa!v%pa!w%pa!y%pa!{%pa!|%pa'x%pa~O'p-TO~P!GRO$P*vO'n*uO'w-VO~O'w-WO~O'r-YO~O!d-ZO~O$O-]O'p-[O~O$O-^O~O$O-`O'p-_O~O'p-aO~O$O-bO~O$O+bO'p-cO~O'q.OO(O.OO~P!KeO'p-fO'{,tO~O'p-hO~O#n-iO~O$P*vO'n*uO'w-kO~O'r-mO~O'p-rO~O'p-sO~O'p-uO~O$O-wO'p-vO~O'p-xO~O'p-yO~O'p-zO~O'p-|O~O$`#k%W%c$}$|${'m#n'|$y$x$w$u$t$i(P$x'}%z'}~",
  goto: "!-g'kPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP'l'o'uP'uP'z'}P(T)}*o+d,Y,|-s.h/c0`1]2b3hP4jPP6Z3h3h3h3h6d7r7u8c9Z9k3]9o=RP?o?v@Z@_@jARAVAsPB^BwB}CTCXC_PPC_DzPPFcPPPFcPPPC_CT7rHSH`HfIWIrPPJ^JgJoJxKPKZKfKrK|PLfLiLrJgLuLxMOMWMdPPMdMnMwNPNZNoNo! R! [! d! zP! }!!T!!T!!T!!T!!T!!T!!T!!T3h!!Z!#U!#c!#f!#c'z!#l!#o!#u!$T!$W'z'z!$n!$t!$x!$|!$x!%`!$x!$x!%l!$x!$x!$x!$x!&b!&h!&n!$x!$x!&u!$x!'Q!'X!'f!'r!'x!(P!(Z!(i!(o!(u!({!)V!)a!)g!)u!){!*R!*X!*_!*e!*k!*q!*w!*}!+X!+_!+q!+{!,R!,X!,p!,v!-RRVOQUOR&P#OVSOT#ORbUQ^UR#{zQ#utQ&R#PS(z&S&TQ(}&UQ)P&VQ)Q&WQ)R&XQ)U&^Q)V&_Q)W&cQ)X&dQ)Y&fQ*W'gS+Y({(|Q+[)OQ+h)ZQ+}*ZQ,i+]Q,j+^Q,k+_Q,l+aQ,m+bQ,p+eQ-n-]Q-o-^Q-p-`Q-q-bR-{-w!_#tt#P&S&T&U&V&W&X&^&_&c&d&f'g({(|)O)Z*Z+]+^+_+a+b+e-]-^-`-b-w!^#st#P&S&T&U&V&W&X&^&_&c&d&f'g({(|)O)Z*Z+]+^+_+a+b+e-]-^-`-b-wR)h&s!`#rt#P&S&T&U&V&W&X&^&_&c&d&f&s'g({(|)O)Z*Z+]+^+_+a+b+e-]-^-`-b-wR)f&q!c#qt#P&S&T&U&V&W&X&^&_&c&d&f&q&s'g({(|)O)Z*Z+]+^+_+a+b+e-]-^-`-b-w!b#pt#P&S&T&U&V&W&X&^&_&c&d&f&q&s'g({(|)O)Z*Z+]+^+_+a+b+e-]-^-`-b-wR)d&n!e#ot#P&S&T&U&V&W&X&^&_&c&d&f&n&q&s'g({(|)O)Z*Z+]+^+_+a+b+e-]-^-`-b-w!b#nt#P&S&T&U&V&W&X&^&_&c&d&f&q&s'g({(|)O)Z*Z+]+^+_+a+b+e-]-^-`-b-wS)^&k.PR)c&n!d#mt#P&S&T&U&V&W&X&^&_&c&d&f&k&q&s'g({(|)O)Z*Z+]+^+_+a+b+e-]-^-`-b-wS)[&i.OT)b&n.P!l#lt#P&S&T&U&V&W&X&^&_&c&d&f&i&k&n&q&s'g({(|)O)Z*Z+]+^+_+a+b+e-]-^-`-b-w.O.PT&h#k-}!p#jt#P#k&S&T&U&V&W&X&^&_&c&d&f&i&k&n&q&s'g({(|)O)Z*Z+]+^+_+a+b+e-]-^-`-b-w-}.O.PY'e$[$k's't*bR,P*_!p#jt#P#k&S&T&U&V&W&X&^&_&c&d&f&i&k&n&q&s'g({(|)O)Z*Z+]+^+_+a+b+e-]-^-`-b-w-}.O.PY'e$[$k's't*bT*Y'p*]#P#at#P#k$[$k&S&T&U&V&W&X&^&_&c&d&f&i&k&n&q&s'g'p's't({(|)O)Z*Z*]*b+]+^+_+a+b+e-]-^-`-b-w-}.O.P!h#Xt#P#k&S&T&U&V&W&X&^&_&c&d&f&i&k&q&s'g({(|)O)Z*Z+]+^+_+a+b+e-]-^-`-b-w!b#zz!Q!r$P$`$w%R%l%p&n&x'X'['j'|(O(R(V(_(m(p*s*u+S+w,W,[,y-P-}.O.PQ-l-YR-t-mQ&a#gQ)d&oR+l)edx^a}!R!X!Y!Z#{%P%SQ#yyW$Vz$a$b'lQ%z!{Q&[#_Q'_$WQ'`$XQ(u%yQ)T&]Q*Q']Q*S'aQ*T'bQ+U(vQ+{*UQ,d+VR-X,eR$czQ!O^Q![aQ$i}Q%Q!RS%V!X!YQ%W!ZQ&v#{Q(X%PR(]%SQ$u!OS%U!X!YQ%X![Q'o$iQ(Y%QS([%S%VQ(^%WQ)k&vQ*o(XQ*p(]Q,S*fR-O,Tm$t!O!X!Y![$i%Q%S%V%W&v(X(]*f,TT*['p*]d!V`!X$Y$Z$x$z${%o'c,UQ!_ch!gfgh!j!l!n%e%g%i(g(i(kQ!}n!h#it#P#k&S&T&U&V&W&X&^&_&c&d&f&i&k&q&s'g({(|)O)Z*Z+]+^+_+a+b+e-]-^-`-b-w!Q#}z!Q!r$P$`$w%R%l%p&x'X'['j'|(O(R(V(m(p+S+w,W,y-PS$d{$fQ%`!`Q%a!aQ%d!hQ%v!x`&{$Q$S$T&}'Q)w)y+y^'d$[$k'p's't*]*bQ(t%wQ)S&ZW)a&n-}.O.PU)n&|)q,tW*q(_*s*u,[R+o)o&V!U`cfghntz{!Q!X!`!a!h!j!l!n!r!x#P#k$P$Q$S$T$Y$Z$[$`$f$k$w$x$z${%R%e%g%i%l%o%p%w&S&T&U&V&W&X&Z&^&_&c&d&f&i&k&n&q&s&x&|&}'Q'X'['c'g'j'p's't'|(O(R(V(_(g(i(k(m(p({(|)O)Z)o)q)w)y*Z*]*b*s*u+S+]+^+_+a+b+e+w+y,U,W,[,t,y-P-]-^-`-b-w-}.O.PS&g#i)aR*V'dl$s!O!X!Y![$i%Q%S%V%W&v(X(]*f,TR'{$tT'r$k'sQ'f$[S'q$k'sT*`'t*bl$r!O!X!Y![$i%Q%S%V%W&v(X(]*f,TS'z$s$tR*e'{T*a't*bl$q!O!X!Y![$i%Q%S%V%W&v(X(]*f,TU'y$r$s$tS*d'z'{R,R*ex$o!O!X!Y![$i$r$s$t%Q%S%V%W&v'z'{(X(]*e*f,TR'x$px$p!O!X!Y![$i$r$s$t%Q%S%V%W&v'z'{(X(]*e*f,TR'x$oQ!^bR+n)kQ%^!]R'h$^T%]!]$^X*r(_*s*u,[!p#jt#P#k&S&T&U&V&W&X&^&_&c&d&f&i&k&n&q&s'g({(|)O)Z*Z+]+^+_+a+b+e-]-^-`-b-w-}.O.P!Q#}z!Q!r$P$`$w%R%l%p&x'X'['j'|(O(R(V(m(p+S+w,W,y-PX*q(_*s*u,[#{#]tz!Q!r#P#k$P$`$w%R%l%p&S&T&U&V&W&X&^&_&c&d&f&i&k&n&q&s&x'X'['g'j'|(O(R(V(_(m(p({(|)O)Z*Z*s*u+S+]+^+_+a+b+e+w,W,[,y-P-]-^-`-b-w-}.O.P#z#]tz!Q!r#P#k$P$`$w%R%l%p&S&T&U&V&W&X&^&_&c&d&f&i&k&n&q&s&x'X'['g'j'|(O(R(V(_(m(p({(|)O)Z*Z*s*u+S+]+^+_+a+b+e+w,W,[,y-P-]-^-`-b-w-}.O.PS&l#n&mT+j)c+kQ$bzQ'i$`Q*P'[R*X'jX$Uz$`'['jW$Sz$`'['jd$z!Q!r%R%l%p'|(V(m(p+SW&y$P&x'X+w](P$w(O(R,W,y-P!R$Oz!Q!r$P$`$w%R%l%p&x'X'['j'|(O(R(V(m(p+S+w,W,y-P!R#}z!Q!r$P$`$w%R%l%p&x'X'['j'|(O(R(V(m(p+S+w,W,y-PQ'W$QQ'Y$SR'Z$TU'X$Q$S$TR,y+yW'U$Q$S$T+yR)s&}Z'T$Q$S$T&}+yY'S$Q$S$T&}+yR+u)y['R$Q$S$T&})y+yR+s)w^'P$Q$S$T&})w)y+yR)v'Qa'O$Q$S$T&}'Q)w)y+y`&{$Q$S$T&}'Q)w)y+yW(Q$x$z${,UU)n&|)q,tR+o)oR)r&|Q)p&|Q+q)qR-d,tR)u'OR*O'XQ)}'XR,w+wS&w$P&xT)|'X+wW$Tz$`'['jX&y$P&x'X+wa$Rz$P$`&x'X'['j+wQ*j(RQ-g,yR-j-PU*l(R,y-PR-R,WS'}$w(OX*k(R,W,y-Pd${!Q!r%R%l%p'|(V(m(p+S](P$w(O(R,W,y-Pq$y!Q!r$w%R%l%p'|(O(R(V(m(p+S,W,y-PQ(S$xQ(T$zR(U${U(R$x$z${R-P,US!W`!XQ'a$YQ'b$ZW(Q$x$z${,UQ(n%oR*U'cR'Y$TX$`z$a$b'lX$_z$a$b'l!q#jt#P#k&S&T&U&V&W&X&^&_&c&d&f&i&k&n&q&s'g({(|)O)Z*Z+]+^+_+a+b+e-]-^-`-b-w-}.O.Pg|^_a}!P!R!X!Y!Z%P%SR$g{Q$e{R'n$fR!R_Q%O!QR*n(VS$|!Q(Va%n!r%R%l%p'|(m(p+SR(T${S%r!r%lQ(Z%RQ(o%pQ*g'|Q+R(mQ+T(pR,c+SQVOR&Q#OTpU&PToU&PW!bde!d!fQ!oiQ%k!pQ(d%_R*|(eQ!cdQ!eeQ%b!dR%c!fQ!ifQ!kgQ!mhQ%f!jQ%h!lQ%j!nQ(f%eQ(h%gQ(j%iQ*}(gQ+O(iR+P(kQ%m!qR%t!tQ%s!rR(l%lZ%p!r%l%q%r(rS!sj!wS!vk%|R%u!uSlU&PR%}!}SmU&PQ!|lQ&O!}R(x%}e!ylm!z!|%{%}&O(w(x+WQXPRqXSTO#OR[TQu]S#vu#wR#wwQ+c)WQ+f)YU,n+c+f,rR,r+hQ*]'pR,O*]Q's$kR*^'sQ*b'tR,Q*bQ'v$mQ'w$nT*c'v'wQ*s(_S,Y*s,[R,[*uQ(b%[R*y(bQ*w(`U,^*w,a-UQ,a*{R-U,`Q,u+qR-e,uQ)x'RR+t)xQ)z'SR+v)zQ&x$PR)l&xQ+x)}R,x+xQ+z*OR,z+zQ(O$wR*h(OQ,V*jR-Q,VQ,X*lR-S,XQ$azS'k$a'lR'l$bQ'^$VR*R'^Q&j#mW)]&j)_+i,sQ)_&lQ+i)bR,s+jQ&m#nS)`&m+kR+k)cQ&r#rR)g&rQ&t#sR)i&tQ}^Q!P_Q!ZaY$h}!P!Z%P%SQ%P!RT%S!X!YQ!X`R%T!XS%q!r%lS(q%q(rR(r%rS!zlmW%x!z%{(w+WQ%{!|S(w%}&OR+W(x",
  nodeNames: "⚠ BASE PREFIX SELECT CONSTRUCT DESCRIBE WHERE DISTINCT REDUCED STR LANG LANGMATCHES DATATYPE ASK BOUND IRI URI BNODE RAND ABS CEIL FLOOR ROUND CONCAT STRLEN UCASE LCASE ENCODE_FOR_URI CONTAINS STRSTARTS STRENDS STRBEFORE STRAFTER YEAR MONTH DAY HOURS MINUTES SECONDS TIMEZONE TZ NOW UUID STRUUID MD5 SHA1 SHA256 SHA384 SHA512 COALESCE IF STRLANG STRDT SAMETERM ISIRI ISURI ISBLANK ISLITERAL ISNUMERIC COUNT SUM MIN MAX AVG SAMPLE GROUP_CONCAT SEPARATOR SUBSTR REPLACE REGEX EXISTS NOT IN GROUP BY HAVING ORDER ASC DESC LIMIT OFFSET VALUES UNDEF UNION OPTIONAL MINUS GRAPH SERVICE SILENT FILTER BIND AS FROM NAMED TRUE FALSE LOAD INTO TO CLEAR DROP CREATE ADD MOVE COPY INSERT DATA DELETE WITH DEFAULT ALL USING Comment Unit Query Prologue BaseDecl IriRef PrefixDecl Pname_ns SelectQuery SelectClause Var Expression ConditionalOrExpression ConditionalAndExpression ValueLogical RelationalExpression NumericExpression AdditiveExpression MultiplicativeExpression UnaryExpression PrimaryExpression BrackettedExpression BuiltInCall Aggregate ; String , Nil ExpressionList SubstringExpression StrReplaceExpression RegexExpression ExistsFunc GroupGraphPattern SubSelect WhereClause SolutionModifier GroupClause GroupCondition FunctionCall Iri PrefixedName Pname_ln ArgList HavingClause HavingCondition Constraint OrderClause OrderCondition LimitOffsetClauses LimitClause Integer OffsetClause ValuesClause DataBlock InlineDataOneVar DataBlockValue RDFLiteral Langtag ^^ NumericLiteral NumericLiteralUnsigned Decimal Double NumericLiteralPositive IntegerPositive DecimalPositive DoublePositive NumericLiteralNegative IntegerNegative DecimalNegative DoubleNegative BooleanLiteral InlineDataFull GroupGraphPatternSub TriplesBlock TriplesSameSubjectPath VarOrTerm GraphTerm BlankNode Blank_node_label Anon PropertyListPathNotEmpty VerbPath Path PathAlternative PathSequence PathEltOrInverse PathElt PathPrimary A_predicate Keyword PathNegatedPropertySet PathOneInPropertySet PathMod VerbSimple ObjectListPath ObjectPath GraphNodePath TriplesNodePath CollectionPath ] [ BlankNodePropertyListPath ObjectList Object GraphNode TriplesNode Collection BlankNodePropertyList PropertyListNotEmpty Verb VarOrIri PropertyListPath . GraphPatternNotTriples GroupOrUnionGraphPattern OptionalGraphPattern MinusGraphPattern GraphGraphPattern ServiceGraphPattern Filter Bind InlineData NotExistsFunc IriOrFunction DatasetClause DefaultGraphClause SourceSelector NamedGraphClause ConstructQuery ConstructTemplate ConstructTriples TriplesSameSubject PropertyList TriplesTemplate DescribeQuery AskQuery Update Update1 Load GraphRef Clear GraphRefAll Drop Add GraphOrDefault Move Copy Create InsertData QuadData Quads QuadsNotTriples DeleteData DeleteWhere QuadPattern Modify DeleteClause InsertClause UsingClause",
  maxTerm: 330,
  nodeProps: [
    ["openedBy", 213, "["],
    ["closedBy", 214, "]"]
  ],
  skippedNodes: [0, 112, 203, 273],
  repeatNodeCount: 30,
  tokenData: "!.n~R![X^$wpq$wqr%lrs%yst.etu0avw2|wx3Xxy;syz<pz{<u{|<z|}>t}!O>y!O!P@s!P!QAu!Q![Az![!]Bi!]!^IY!^!_I_!_!`LO!`!aLT!a!bLb!b!cMi!c!}No!}#O!%}#P#Q!&z#Q#R!'P#R#S!'^#T#oNo#o#p!+y#p#q!,O#q#r!,]#y#z$w$f$g$w$g%W!%l%W%oNo%o%p!%l%p&aNo&a&b!%l&b&jNo&j1p!!i4U4d!!i4e#BY!!i#BY#BZ!,b#BZ$IS!!i$IS$I_$w$I`$Ib!!i$I|$JO$w$JT$JU$w$KV$KW$w$Kh%#t!!i&/x&Et!!i&FU&FV$w&FV;'S!!i;'S;:j!%f?&r?Ah!!i?BY?Mn!!i~$|Y'm~X^$wpq$w#y#z$w$f$g$w#BY#BZ$w$IS$I_$w$I|$JO$w$JT$JU$w$KV$KW$w&FU&FV$wR%qP'oP!_!`%tQ%yO(QQ~%|XOY&iZ]&i^r&irs)js#O&i#O#P'^#P;'S&i;'S;=`)d<%lO&i~&lXOY&iZ]&i^r&irs'Xs#O&i#O#P'^#P;'S&i;'S;=`)d<%lO&i~'^O't~~'aeOY&iZ]&i^r&irs(rsw&iwx&ix#O&i#O#P'^#P#U&i#U#V&i#V#Y&i#Y#Z&i#Z#b&i#b#c&i#c#f&i#f#g&i#g#h&i#h#i&i#i;'S&i;'S;=`)d<%lO&i~(wX't~OY&iZ]&i^r&irs'Xs#O&i#O#P'^#P;'S&i;'S;=`)d<%lO&i~)gP;=`<%l&i~)oP't~rs)r~)uVOr)rrs*[s#O)r#O#P+c#P;'S)r;'S;=`._<%lO)r~*_VOr)rrs*ts#O)r#O#P+c#P;'S)r;'S;=`._<%lO)r~*wVOr)rrs+^s#O)r#O#P+c#P;'S)r;'S;=`._<%lO)r~+cO'v~~+fcOr)rrs,qsw)rwx)rx#O)r#O#P+c#P#U)r#U#V)r#V#Y)r#Y#Z)r#Z#b)r#b#c)r#c#f)r#f#g)r#g#h)r#h#i)r#i;'S)r;'S;=`._<%lO)r~,tVOr)rrs-Zs#O)r#O#P+c#P;'S)r;'S;=`._<%lO)r~-^VOr)rrs-ss#O)r#O#P+c#P;'S)r;'S;=`._<%lO)r~-xV'v~Or)rrs+^s#O)r#O#P+c#P;'S)r;'S;=`._<%lO)r~.bP;=`<%l)r~.jV#d~OY.eYZ/PZs.est.et;'S.e;'S;=`0Z<%lO.e~/UP#d~st/X~/[VOY/qYZ/PZs/qst/Xt;'S/q;'S;=`0T<%lO/q~/tTOY/qYZ/PZ;'S/q;'S;=`0T<%lO/q~0WP;=`<%l/q~0^P;=`<%l.e~0d`!Q![1f!c!}1f#R#S1f#T#o1f%W%o1f%p&a1f&b1p1f4U4d1f4e$IS1f$I`$Ib1f$Kh%#t1f&/x&Et1f&FV;'S1f;'S;:j2v?&r?Ah1f?BY?Mn1f~1kc#n~!Q![1f!c!}1f#R#S1f#T#o1f$}%O1f%W%o1f%p&a1f&b1p1f1p4U1f4U4d1f4e$IS1f$I`$Ib1f$Je$Jg1f$Kh%#t1f&/x&Et1f&FV;'S1f;'S;:j2v?&r?Ah1f?BY?Mn1f~2yP;=`<%l1f~3PPvw3S~3XO(V~~3[XOY3wZ]3w^w3wwx6xx#O3w#O#P4l#P;'S3w;'S;=`6r<%lO3w~3zXOY3wZ]3w^w3wwx4gx#O3w#O#P4l#P;'S3w;'S;=`6r<%lO3w~4lO's~~4oeOY3wZ]3w^r3wrs3wsw3wwx6Qx#O3w#O#P4l#P#U3w#U#V3w#V#Y3w#Y#Z3w#Z#b3w#b#c3w#c#f3w#f#g3w#g#h3w#h#i3w#i;'S3w;'S;=`6r<%lO3w~6VX's~OY3wZ]3w^w3wwx4gx#O3w#O#P4l#P;'S3w;'S;=`6r<%lO3w~6uP;=`<%l3w~6}P's~wx7Q~7TVOw7Qwx7jx#O7Q#O#P8q#P;'S7Q;'S;=`;m<%lO7Q~7mVOw7Qwx8Sx#O7Q#O#P8q#P;'S7Q;'S;=`;m<%lO7Q~8VVOw7Qwx8lx#O7Q#O#P8q#P;'S7Q;'S;=`;m<%lO7Q~8qO'u~~8tcOr7Qrs7Qsw7Qwx:Px#O7Q#O#P8q#P#U7Q#U#V7Q#V#Y7Q#Y#Z7Q#Z#b7Q#b#c7Q#c#f7Q#f#g7Q#g#h7Q#h#i7Q#i;'S7Q;'S;=`;m<%lO7Q~:SVOw7Qwx:ix#O7Q#O#P8q#P;'S7Q;'S;=`;m<%lO7Q~:lVOw7Qwx;Rx#O7Q#O#P8q#P;'S7Q;'S;=`;m<%lO7Q~;WV'u~Ow7Qwx8lx#O7Q#O#P8q#P;'S7Q;'S;=`;m<%lO7Q~;pP;=`<%l7Q~;xT'n~XY<XYZ<X]^<Xpq<Xyz<k~<[TXY<XYZ<X]^<Xpq<Xyz<k~<pO$P~~<uO'p~~<zO'q~~=PQ'}~!O!P=V!Q![>V~=YP!Q![=]~=bR$x~!Q![=]!g!h=k#X#Y=k~=nR{|=w}!O=w!Q![=}~=zP!Q![=}~>SP$y~!Q![=}~>[S$w~!O!P>h!Q![>V!g!h=k#X#Y=k~>kR!Q![=]!g!h=k#X#Y=k~>yO$O~~?OQ(P~!O!P?U!Q![@U~?XP!Q![?[~?aR$|~!Q![?[!g!h?j#X#Y?j~?mR{|?v}!O?v!Q![?|~?yP!Q![?|~@RP$}~!Q![?|~@ZS${~!O!P@g!Q![@U!g!h?j#X#Y?j~@jR!Q![?[!g!h?j#X#Y?j~@xP%z~!Q![@{~AQR$t~!Q![@{!g!hAZ#X#YAZ~A^R{|Ag}!OAg!Q![Am~AjP!Q![Am~ArP$u~!Q![Am~AzO(O~~BPS$i~!O!PB]!Q![Az!g!hAZ#X#YAZ~B`R!Q![@{!g!hAZ#X#YAZ~Bnc#k~uvCy!Q![Dc![!]Dc!c!}Dc#O#PGq#R#SDc#T#oDc%W%oDc%p&aDc&b1pDc4U4dDc4e$ISDc$I`$IbDc$Kh%#tDc&/x&EtDc&FV;'SDc;'S;:jIS?&r?AhDc?BY?MnDc~C|R!Q![DV!c!iDV#T#ZDV~DYR!Q![Dc!c!iDc#T#ZDc~Dhh$`~uvCy}!ODc!O!PFS!Q![Dc![!]Dc!c!}Dc#O#PGq#R#SDc#T#oDc$}%ODc%W%oDc%p&aDc&b1pDc1p4UDc4U4dDc4e$ISDc$I`$IbDc$Je$JgDc$Kh%#tDc&/x&EtDc&FV;'SDc;'S;:jIS?&r?AhDc?BY?MnDc~FVhuvCy}!ODc!O!PFS!Q![Dc![!]Dc!c!}Dc#O#PGq#R#SDc#T#oDc$}%ODc%W%oDc%p&aDc&b1pDc1p4UDc4U4dDc4e$ISDc$I`$IbDc$Je$JgDc$Kh%#tDc&/x&EtDc&FV;'SDc;'S;:jIS?&r?AhDc?BY?MnDc~GtdqrDcstDctuDcuvDcvwDcwxDcxyDcyzDcz{Dc{|Dc|}Dc}!ODc!O!PDc!P!QDc!]!^Dc!_!`Dc!a!bDc!b!cDc#R#SDc#r#sDc~IVP;=`<%lDc~I_O#|~VIdZ(RQqrJVs!^JV!_!`KW!`!aJ{!a#OJV#P#QJV#R#SJV#T#oJV#r;'SJV;'S;=`KQ<%lOJVTJYZqrJVs!^JV!_!`JV!`!aJ{!a#OJV#P#QJV#R#SJV#T#oJV#r;'SJV;'S;=`KQ<%lOJVTKQO#iTTKTP;=`<%lJVVK]Z(TQqrJVs!^JV!_!`JV!`!aJ{!a#OJV#P#QJV#R#SJV#T#oJV#r;'SJV;'S;=`KQ<%lOJV~LTO'r~~LYP(S~!_!`L]~LbO(U~~Lg`'|~!Q![1f!c!}1f#R#S1f#T#o1f%W%o1f%p&a1f&b1p1f4U4d1f4e$IS1f$I`$Ib1f$Kh%#t1f&/x&Et1f&FV;'S1f;'S;:j2v?&r?Ah1f?BY?Mn1f~MlQ!c!}Mr#T#oMr~MwR$p~}!ONQ!c!}Mr#T#oMr~NTR!Q![N^!c!}N^#T#oN^~NcS$p~}!ONQ!Q![N^!c!}N^#T#oN^~Ntk%c~}!O!!i!O!P!$Q!Q![!!i![!]Bi!c!}No#R#SNo#T#oNo$g$}!%l$}%ONo%O%W!%l%W%oNo%o%p!%l%p&aNo&a&b!%l&b&jNo&j1p!!i1p4U!!i4U4d!!i4e$IS!!i$I`$Ib!!i$Je$Jg!!i$Kh%#t!!i&/x&Et!!i&FV;'S!!i;'S;:j!%f?&r?Ah!!i?BY?Mn!!i~!!lf}!O!!i!O!P!$Q!Q![!!i![!]Bi!c!}!!i#R#S!!i#T#o!!i$}%O!!i%W%o!!i%p&a!!i&b1p!!i1p4U!!i4U4d!!i4e$IS!!i$I`$Ib!!i$Je$Jg!!i$Kh%#t!!i&/x&Et!!i&FV;'S!!i;'S;:j!%f?&r?Ah!!i?BY?Mn!!i~!$Te}!O!!i!O!P!$Q!Q![!!i!c!}!!i#R#S!!i#T#o!!i$}%O!!i%W%o!!i%p&a!!i&b1p!!i1p4U!!i4U4d!!i4e$IS!!i$I`$Ib!!i$Je$Jg!!i$Kh%#t!!i&/x&Et!!i&FV;'S!!i;'S;:j!%f?&r?Ah!!i?BY?Mn!!i~!%iP;=`<%l!!i~!%qS%c~!c!}!%l#R#S!%l#T#o!%l$g&j!%l~!&ST%n~XY!&cYZ!&c]^!&cpq!&c#P#Q!&u~!&fTXY!&cYZ!&c]^!&cpq!&c#P#Q!&u~!&zO%X~~!'PO%m~~!'UP'z~#Q#R!'X~!'^O$q~~!'cT%c~![!]!'r!c!}!%l#R#S!%l#T#o!%l$g&j!%l~!'u`!Q![!(w!c!}!(w#R#S!(w#T#o!(w%W%o!(w%p&a!(w&b1p!(w4U4d!(w4e$IS!(w$I`$Ib!(w$Kh%#t!(w&/x&Et!(w&FV;'S!(w;'S;:j!+s?&r?Ah!(w?BY?Mn!(w~!(|e%W~}!O!(w!O!P!*_!Q![!(w!c!}!(w#R#S!(w#T#o!(w$}%O!(w%W%o!(w%p&a!(w&b1p!(w1p4U!(w4U4d!(w4e$IS!(w$I`$Ib!(w$Je$Jg!(w$Kh%#t!(w&/x&Et!(w&FV;'S!(w;'S;:j!+s?&r?Ah!(w?BY?Mn!(w~!*be}!O!(w!O!P!*_!Q![!(w!c!}!(w#R#S!(w#T#o!(w$}%O!(w%W%o!(w%p&a!(w&b1p!(w1p4U!(w4U4d!(w4e$IS!(w$I`$Ib!(w$Je$Jg!(w$Kh%#t!(w&/x&Et!(w&FV;'S!(w;'S;:j!+s?&r?Ah!(w?BY?Mn!(w~!+vP;=`<%l!(w~!,OO'x~V!,TP'{S#p#q!,WR!,]O(WR~!,bO'w~~!,gq'm~X^$wpq$w}!O!!i!O!P!$Q!Q![!!i![!]Bi!c!}!!i#R#S!!i#T#o!!i#y#z$w$f$g$w$}%O!!i%W%o!!i%p&a!!i&b1p!!i1p4U!!i4U4d!!i4e#BY!!i#BY#BZ!,b#BZ$IS!!i$IS$I_$w$I`$Ib!!i$I|$JO$w$JT$JU$w$Je$Jg!!i$KV$KW$w$Kh%#t!!i&/x&Et!!i&FU&FV$w&FV;'S!!i;'S;:j!%f?&r?Ah!!i?BY?Mn!!i",
  tokenizers: [0, 1, 2],
  topRules: { Unit: [0, 113] },
  specialized: [{ term: 203, get: (i, e) => Wd(i) << 1, external: Wd }, { term: 203, get: (i) => QD[i] || -1 }],
  tokenPrec: 5071
}), VD = as.define({
  parser: ID.configure({
    props: [
      El({
        Comment: k.comment,
        // Query type and clause keywords
        "BASE PREFIX SELECT CONSTRUCT DESCRIBE ASK WHERE DISTINCT REDUCED FROM NAMED": k.keyword,
        // Graph pattern keywords
        "UNION OPTIONAL MINUS GRAPH SERVICE SILENT FILTER BIND AS VALUES UNDEF": k.keyword,
        // Solution modifier keywords
        "GROUP BY HAVING ORDER ASC DESC LIMIT OFFSET": k.keyword,
        // Update operation keywords
        "LOAD INTO TO CLEAR DROP CREATE ADD MOVE COPY INSERT DATA DELETE WITH DEFAULT ALL USING": k.keyword,
        // Built-in function keywords
        "STR LANG LANGMATCHES DATATYPE BOUND IRI URI BNODE RAND ABS CEIL FLOOR ROUND": k.keyword,
        "CONCAT STRLEN UCASE LCASE ENCODE_FOR_URI CONTAINS STRSTARTS STRENDS STRBEFORE STRAFTER": k.keyword,
        "YEAR MONTH DAY HOURS MINUTES SECONDS TIMEZONE TZ NOW UUID STRUUID": k.keyword,
        "MD5 SHA1 SHA256 SHA384 SHA512 COALESCE IF STRLANG STRDT SAMETERM": k.keyword,
        "ISIRI ISURI ISBLANK ISLITERAL ISNUMERIC EXISTS NOT IN SUBSTR REPLACE REGEX": k.keyword,
        // Aggregate function keywords
        "COUNT SUM MIN MAX AVG SAMPLE GROUP_CONCAT SEPARATOR": k.keyword,
        "Var ObjectListPath/..": k.variableName,
        String: k.string,
        Integer: k.integer,
        "Double Decimal": k.float,
        "{ }": k.brace,
        Langstag: k.annotation,
        "TRUE FALSE": k.bool,
        "VerbPath Namespace IriRef": k.namespace,
        Iri: k.url,
        "RDFLiteral/Iri": k.typeName
      }),
      Al.add({
        GroupGraphPattern: Tc,
        QuadData: Tc,
        // +7 skips the leading keyword ("PREFIX " or "BASE   ") so the fold starts after it
        Prologue(i) {
          return { from: i.from + 7, to: i.to };
        }
      })
    ]
  })
});
function LD() {
  return new Qh(VD);
}
const BD = El({
  String: k.string,
  Number: k.number,
  "True False": k.bool,
  PropertyName: k.propertyName,
  Null: k.null,
  ", :": k.separator,
  "[ ]": k.squareBracket,
  "{ }": k.brace
}), XD = fs.deserialize({
  version: 14,
  states: "$bOVQPOOOOQO'#Cb'#CbOnQPO'#CeOvQPO'#ClOOQO'#Cr'#CrQOQPOOOOQO'#Cg'#CgO}QPO'#CfO!SQPO'#CtOOQO,59P,59PO![QPO,59PO!aQPO'#CuOOQO,59W,59WO!iQPO,59WOVQPO,59QOqQPO'#CmO!nQPO,59`OOQO1G.k1G.kOVQPO'#CnO!vQPO,59aOOQO1G.r1G.rOOQO1G.l1G.lOOQO,59X,59XOOQO-E6k-E6kOOQO,59Y,59YOOQO-E6l-E6l",
  stateData: "#O~OeOS~OQSORSOSSOTSOWQO_ROgPO~OVXOgUO~O^[O~PVO[^O~O]_OVhX~OVaO~O]bO^iX~O^dO~O]_OVha~O]bO^ia~O",
  goto: "!kjPPPPPPkPPkqwPPPPk{!RPPP!XP!e!hXSOR^bQWQRf_TVQ_Q`WRg`QcZRicQTOQZRQe^RhbRYQR]R",
  nodeNames: "⚠ JsonText True False Null Number String } { Object Property PropertyName : , ] [ Array",
  maxTerm: 25,
  nodeProps: [
    ["isolate", -2, 6, 11, ""],
    ["openedBy", 7, "{", 14, "["],
    ["closedBy", 8, "}", 15, "]"]
  ],
  propSources: [BD],
  skippedNodes: [0],
  repeatNodeCount: 2,
  tokenData: "(|~RaXY!WYZ!W]^!Wpq!Wrs!]|}$u}!O$z!Q!R%T!R![&c![!]&t!}#O&y#P#Q'O#Y#Z'T#b#c'r#h#i(Z#o#p(r#q#r(w~!]Oe~~!`Wpq!]qr!]rs!xs#O!]#O#P!}#P;'S!];'S;=`$o<%lO!]~!}Og~~#QXrs!]!P!Q!]#O#P!]#U#V!]#Y#Z!]#b#c!]#f#g!]#h#i!]#i#j#m~#pR!Q![#y!c!i#y#T#Z#y~#|R!Q![$V!c!i$V#T#Z$V~$YR!Q![$c!c!i$c#T#Z$c~$fR!Q![!]!c!i!]#T#Z!]~$rP;=`<%l!]~$zO]~~$}Q!Q!R%T!R![&c~%YRT~!O!P%c!g!h%w#X#Y%w~%fP!Q![%i~%nRT~!Q![%i!g!h%w#X#Y%w~%zR{|&T}!O&T!Q![&Z~&WP!Q![&Z~&`PT~!Q![&Z~&hST~!O!P%c!Q![&c!g!h%w#X#Y%w~&yO[~~'OO_~~'TO^~~'WP#T#U'Z~'^P#`#a'a~'dP#g#h'g~'jP#X#Y'm~'rOR~~'uP#i#j'x~'{P#`#a(O~(RP#`#a(U~(ZOS~~(^P#f#g(a~(dP#i#j(g~(jP#X#Y(m~(rOQ~~(wOW~~(|OV~",
  tokenizers: [0],
  topRules: { JsonText: [0, 1] },
  tokenPrec: 0
}), WD = /* @__PURE__ */ as.define({
  name: "json",
  parser: /* @__PURE__ */ XD.configure({
    props: [
      /* @__PURE__ */ Lh.add({
        Object: /* @__PURE__ */ od({ except: /^\s*\}/ }),
        Array: /* @__PURE__ */ od({ except: /^\s*\]/ })
      }),
      /* @__PURE__ */ Al.add({
        "Object Array": Tc
      })
    ]
  }),
  languageData: {
    closeBrackets: { brackets: ["[", "{", '"'] },
    indentOnInput: /^\s*[\}\]]$/
  }
});
function FD() {
  return new Qh(WD);
}
const Ic = 1, qD = 2, HD = 3, UD = 4, GD = 5, zD = 36, jD = 37, YD = 38, KD = 11, ZD = 13;
function JD(i) {
  return i == 45 || i == 46 || i == 58 || i >= 65 && i <= 90 || i == 95 || i >= 97 && i <= 122 || i >= 161;
}
function eN(i) {
  return i == 9 || i == 10 || i == 13 || i == 32;
}
let Fd = null, qd = null, Hd = 0;
function Vc(i, e) {
  let t = i.pos + e;
  if (qd == i && Hd == t) return Fd;
  for (; eN(i.peek(e)); ) e++;
  let n = "";
  for (; ; ) {
    let s = i.peek(e);
    if (!JD(s)) break;
    n += String.fromCharCode(s), e++;
  }
  return qd = i, Hd = t, Fd = n || null;
}
function Ud(i, e) {
  this.name = i, this.parent = e;
}
const tN = new IC({
  start: null,
  shift(i, e, t, n) {
    return e == Ic ? new Ud(Vc(n, 1) || "", i) : i;
  },
  reduce(i, e) {
    return e == KD && i ? i.parent : i;
  },
  reuse(i, e, t, n) {
    let s = e.type.id;
    return s == Ic || s == ZD ? new Ud(Vc(n, 1) || "", i) : i;
  },
  strict: !1
}), iN = new n0((i, e) => {
  if (i.next == 60) {
    if (i.advance(), i.next == 47) {
      i.advance();
      let t = Vc(i, 0);
      if (!t) return i.acceptToken(GD);
      if (e.context && t == e.context.name) return i.acceptToken(qD);
      for (let n = e.context; n; n = n.parent) if (n.name == t) return i.acceptToken(HD, -2);
      i.acceptToken(UD);
    } else if (i.next != 33 && i.next != 63)
      return i.acceptToken(Ic);
  }
}, { contextual: !0 });
function Jh(i, e) {
  return new n0((t) => {
    let n = 0, s = e.charCodeAt(0);
    e: for (; !(t.next < 0); t.advance(), n++)
      if (t.next == s) {
        for (let r = 1; r < e.length; r++)
          if (t.peek(r) != e.charCodeAt(r)) continue e;
        break;
      }
    n && t.acceptToken(i);
  });
}
const nN = Jh(zD, "-->"), sN = Jh(jD, "?>"), rN = Jh(YD, "]]>"), oN = El({
  Text: k.content,
  "StartTag StartCloseTag EndTag SelfCloseEndTag": k.angleBracket,
  TagName: k.tagName,
  "MismatchedCloseTag/TagName": [k.tagName, k.invalid],
  AttributeName: k.attributeName,
  AttributeValue: k.attributeValue,
  Is: k.definitionOperator,
  "EntityReference CharacterReference": k.character,
  Comment: k.blockComment,
  ProcessingInst: k.processingInstruction,
  DoctypeDecl: k.documentMeta,
  Cdata: k.special(k.string)
}), lN = fs.deserialize({
  version: 14,
  states: ",lOQOaOOOrOxO'#CfOzOpO'#CiO!tOaO'#CgOOOP'#Cg'#CgO!{OrO'#CrO#TOtO'#CsO#]OpO'#CtOOOP'#DT'#DTOOOP'#Cv'#CvQQOaOOOOOW'#Cw'#CwO#eOxO,59QOOOP,59Q,59QOOOO'#Cx'#CxO#mOpO,59TO#uO!bO,59TOOOP'#C|'#C|O$TOaO,59RO$[OpO'#CoOOOP,59R,59ROOOQ'#C}'#C}O$dOrO,59^OOOP,59^,59^OOOS'#DO'#DOO$lOtO,59_OOOP,59_,59_O$tOpO,59`O$|OpO,59`OOOP-E6t-E6tOOOW-E6u-E6uOOOP1G.l1G.lOOOO-E6v-E6vO%UO!bO1G.oO%UO!bO1G.oO%dOpO'#CkO%lO!bO'#CyO%zO!bO1G.oOOOP1G.o1G.oOOOP1G.w1G.wOOOP-E6z-E6zOOOP1G.m1G.mO&VOpO,59ZO&_OpO,59ZOOOQ-E6{-E6{OOOP1G.x1G.xOOOS-E6|-E6|OOOP1G.y1G.yO&gOpO1G.zO&gOpO1G.zOOOP1G.z1G.zO&oO!bO7+$ZO&}O!bO7+$ZOOOP7+$Z7+$ZOOOP7+$c7+$cO'YOpO,59VO'bOpO,59VO'mO!bO,59eOOOO-E6w-E6wO'{OpO1G.uO'{OpO1G.uOOOP1G.u1G.uO(TOpO7+$fOOOP7+$f7+$fO(]O!bO<<GuOOOP<<Gu<<GuOOOP<<G}<<G}O'bOpO1G.qO'bOpO1G.qO(hO#tO'#CnO(vO&jO'#CnOOOO1G.q1G.qO)UOpO7+$aOOOP7+$a7+$aOOOP<<HQ<<HQOOOPAN=aAN=aOOOPAN=iAN=iO'bOpO7+$]OOOO7+$]7+$]OOOO'#Cz'#CzO)^O#tO,59YOOOO,59Y,59YOOOO'#C{'#C{O)lO&jO,59YOOOP<<G{<<G{OOOO<<Gw<<GwOOOO-E6x-E6xOOOO1G.t1G.tOOOO-E6y-E6y",
  stateData: ")z~OPQOSVOTWOVWOWWOXWOiXOyPO!QTO!SUO~OvZOx]O~O^`Oz^O~OPQOQcOSVOTWOVWOWWOXWOyPO!QTO!SUO~ORdO~P!SOteO!PgO~OuhO!RjO~O^lOz^O~OvZOxoO~O^qOz^O~O[vO`sOdwOz^O~ORyO~P!SO^{Oz^O~OteO!P}O~OuhO!R!PO~O^!QOz^O~O[!SOz^O~O[!VO`sOd!WOz^O~Oa!YOz^O~Oz^O[mX`mXdmX~O[!VO`sOd!WO~O^!]Oz^O~O[!_Oz^O~O[!aOz^O~O[!cO`sOd!dOz^O~O[!cO`sOd!dO~Oa!eOz^O~Oz^O{!gO}!hO~Oz^O[ma`madma~O[!kOz^O~O[!lOz^O~O[!mO`sOd!nO~OW!qOX!qO{!sO|!qO~OW!tOX!tO}!sO!O!tO~O[!vOz^O~OW!qOX!qO{!yO|!qO~OW!tOX!tO}!yO!O!tO~O",
  goto: "%cxPPPPPPPPPPyyP!PP!VPP!`!jP!pyyyP!v!|#S$[$k$q$w$}%TPPPP%ZXWORYbXRORYb_t`qru!T!U!bQ!i!YS!p!e!fR!w!oQdRRybXSORYbQYORmYQ[PRn[Q_QQkVjp_krz!R!T!X!Z!^!`!f!j!oQr`QzcQ!RlQ!TqQ!XsQ!ZtQ!^{Q!`!QQ!f!YQ!j!]R!o!eQu`S!UqrU![u!U!bR!b!TQ!r!gR!x!rQ!u!hR!z!uQbRRxbQfTR|fQiUR!OiSXOYTaRb",
  nodeNames: "⚠ StartTag StartCloseTag MissingCloseTag StartCloseTag StartCloseTag Document Text EntityReference CharacterReference Cdata Element EndTag OpenTag TagName Attribute AttributeName Is AttributeValue CloseTag SelfCloseEndTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag DoctypeDecl",
  maxTerm: 50,
  context: tN,
  nodeProps: [
    ["closedBy", 1, "SelfCloseEndTag EndTag", 13, "CloseTag MissingCloseTag"],
    ["openedBy", 12, "StartTag StartCloseTag", 19, "OpenTag", 20, "StartTag"],
    ["isolate", -6, 13, 18, 19, 21, 22, 24, ""]
  ],
  propSources: [oN],
  skippedNodes: [0],
  repeatNodeCount: 9,
  tokenData: "!)v~R!YOX$qXY)iYZ)iZ]$q]^)i^p$qpq)iqr$qrs*vsv$qvw+fwx/ix}$q}!O0[!O!P$q!P!Q2z!Q![$q![!]4n!]!^$q!^!_8U!_!`!#t!`!a!$l!a!b!%d!b!c$q!c!}4n!}#P$q#P#Q!'W#Q#R$q#R#S4n#S#T$q#T#o4n#o%W$q%W%o4n%o%p$q%p&a4n&a&b$q&b1p4n1p4U$q4U4d4n4d4e$q4e$IS4n$IS$I`$q$I`$Ib4n$Ib$Kh$q$Kh%#t4n%#t&/x$q&/x&Et4n&Et&FV$q&FV;'S4n;'S;:j8O;:j;=`)c<%l?&r$q?&r?Ah4n?Ah?BY$q?BY?Mn4n?MnO$qi$zXVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_;'S$q;'S;=`)c<%lO$qa%nVVP!O`Ov%gwx&Tx!^%g!^!_&o!_;'S%g;'S;=`'W<%lO%gP&YTVPOv&Tw!^&T!_;'S&T;'S;=`&i<%lO&TP&lP;=`<%l&T`&tS!O`Ov&ox;'S&o;'S;=`'Q<%lO&o`'TP;=`<%l&oa'ZP;=`<%l%gX'eWVP|WOr'^rs&Tsv'^w!^'^!^!_'}!_;'S'^;'S;=`(i<%lO'^W(ST|WOr'}sv'}w;'S'};'S;=`(c<%lO'}W(fP;=`<%l'}X(lP;=`<%l'^h(vV|W!O`Or(ors&osv(owx'}x;'S(o;'S;=`)]<%lO(oh)`P;=`<%l(oi)fP;=`<%l$qo)t`VP|W!O`zUOX$qXY)iYZ)iZ]$q]^)i^p$qpq)iqr$qrs%gsv$qwx'^x!^$q!^!_(o!_;'S$q;'S;=`)c<%lO$qk+PV{YVP!O`Ov%gwx&Tx!^%g!^!_&o!_;'S%g;'S;=`'W<%lO%g~+iast,n![!]-r!c!}-r#R#S-r#T#o-r%W%o-r%p&a-r&b1p-r4U4d-r4e$IS-r$I`$Ib-r$Kh%#t-r&/x&Et-r&FV;'S-r;'S;:j/c?&r?Ah-r?BY?Mn-r~,qQ!Q![,w#l#m-V~,zQ!Q![,w!]!^-Q~-VOX~~-YR!Q![-c!c!i-c#T#Z-c~-fS!Q![-c!]!^-Q!c!i-c#T#Z-c~-ug}!O-r!O!P-r!Q![-r![!]-r!]!^/^!c!}-r#R#S-r#T#o-r$}%O-r%W%o-r%p&a-r&b1p-r1p4U-r4U4d-r4e$IS-r$I`$Ib-r$Je$Jg-r$Kh%#t-r&/x&Et-r&FV;'S-r;'S;:j/c?&r?Ah-r?BY?Mn-r~/cOW~~/fP;=`<%l-rk/rW}bVP|WOr'^rs&Tsv'^w!^'^!^!_'}!_;'S'^;'S;=`(i<%lO'^k0eZVP|W!O`Or$qrs%gsv$qwx'^x}$q}!O1W!O!^$q!^!_(o!_;'S$q;'S;=`)c<%lO$qk1aZVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_!`$q!`!a2S!a;'S$q;'S;=`)c<%lO$qk2_X!PQVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_;'S$q;'S;=`)c<%lO$qm3TZVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_!`$q!`!a3v!a;'S$q;'S;=`)c<%lO$qm4RXdSVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_;'S$q;'S;=`)c<%lO$qo4{!P`S^QVP|W!O`Or$qrs%gsv$qwx'^x}$q}!O4n!O!P4n!P!Q$q!Q![4n![!]4n!]!^$q!^!_(o!_!c$q!c!}4n!}#R$q#R#S4n#S#T$q#T#o4n#o$}$q$}%O4n%O%W$q%W%o4n%o%p$q%p&a4n&a&b$q&b1p4n1p4U4n4U4d4n4d4e$q4e$IS4n$IS$I`$q$I`$Ib4n$Ib$Je$q$Je$Jg4n$Jg$Kh$q$Kh%#t4n%#t&/x$q&/x&Et4n&Et&FV$q&FV;'S4n;'S;:j8O;:j;=`)c<%l?&r$q?&r?Ah4n?Ah?BY$q?BY?Mn4n?MnO$qo8RP;=`<%l4ni8]Y|W!O`Oq(oqr8{rs&osv(owx'}x!a(o!a!b!#U!b;'S(o;'S;=`)]<%lO(oi9S_|W!O`Or(ors&osv(owx'}x}(o}!O:R!O!f(o!f!g;e!g!}(o!}#ODh#O#W(o#W#XLp#X;'S(o;'S;=`)]<%lO(oi:YX|W!O`Or(ors&osv(owx'}x}(o}!O:u!O;'S(o;'S;=`)]<%lO(oi;OV!QP|W!O`Or(ors&osv(owx'}x;'S(o;'S;=`)]<%lO(oi;lX|W!O`Or(ors&osv(owx'}x!q(o!q!r<X!r;'S(o;'S;=`)]<%lO(oi<`X|W!O`Or(ors&osv(owx'}x!e(o!e!f<{!f;'S(o;'S;=`)]<%lO(oi=SX|W!O`Or(ors&osv(owx'}x!v(o!v!w=o!w;'S(o;'S;=`)]<%lO(oi=vX|W!O`Or(ors&osv(owx'}x!{(o!{!|>c!|;'S(o;'S;=`)]<%lO(oi>jX|W!O`Or(ors&osv(owx'}x!r(o!r!s?V!s;'S(o;'S;=`)]<%lO(oi?^X|W!O`Or(ors&osv(owx'}x!g(o!g!h?y!h;'S(o;'S;=`)]<%lO(oi@QY|W!O`Or?yrs@psv?yvwA[wxBdx!`?y!`!aCr!a;'S?y;'S;=`Db<%lO?ya@uV!O`Ov@pvxA[x!`@p!`!aAy!a;'S@p;'S;=`B^<%lO@pPA_TO!`A[!`!aAn!a;'SA[;'S;=`As<%lOA[PAsOiPPAvP;=`<%lA[aBQSiP!O`Ov&ox;'S&o;'S;=`'Q<%lO&oaBaP;=`<%l@pXBiX|WOrBdrsA[svBdvwA[w!`Bd!`!aCU!a;'SBd;'S;=`Cl<%lOBdXC]TiP|WOr'}sv'}w;'S'};'S;=`(c<%lO'}XCoP;=`<%lBdiC{ViP|W!O`Or(ors&osv(owx'}x;'S(o;'S;=`)]<%lO(oiDeP;=`<%l?yiDoZ|W!O`Or(ors&osv(owx'}x!e(o!e!fEb!f#V(o#V#WIr#W;'S(o;'S;=`)]<%lO(oiEiX|W!O`Or(ors&osv(owx'}x!f(o!f!gFU!g;'S(o;'S;=`)]<%lO(oiF]X|W!O`Or(ors&osv(owx'}x!c(o!c!dFx!d;'S(o;'S;=`)]<%lO(oiGPX|W!O`Or(ors&osv(owx'}x!v(o!v!wGl!w;'S(o;'S;=`)]<%lO(oiGsX|W!O`Or(ors&osv(owx'}x!c(o!c!dH`!d;'S(o;'S;=`)]<%lO(oiHgX|W!O`Or(ors&osv(owx'}x!}(o!}#OIS#O;'S(o;'S;=`)]<%lO(oiI]V|W!O`yPOr(ors&osv(owx'}x;'S(o;'S;=`)]<%lO(oiIyX|W!O`Or(ors&osv(owx'}x#W(o#W#XJf#X;'S(o;'S;=`)]<%lO(oiJmX|W!O`Or(ors&osv(owx'}x#T(o#T#UKY#U;'S(o;'S;=`)]<%lO(oiKaX|W!O`Or(ors&osv(owx'}x#h(o#h#iK|#i;'S(o;'S;=`)]<%lO(oiLTX|W!O`Or(ors&osv(owx'}x#T(o#T#UH`#U;'S(o;'S;=`)]<%lO(oiLwX|W!O`Or(ors&osv(owx'}x#c(o#c#dMd#d;'S(o;'S;=`)]<%lO(oiMkX|W!O`Or(ors&osv(owx'}x#V(o#V#WNW#W;'S(o;'S;=`)]<%lO(oiN_X|W!O`Or(ors&osv(owx'}x#h(o#h#iNz#i;'S(o;'S;=`)]<%lO(oi! RX|W!O`Or(ors&osv(owx'}x#m(o#m#n! n#n;'S(o;'S;=`)]<%lO(oi! uX|W!O`Or(ors&osv(owx'}x#d(o#d#e!!b#e;'S(o;'S;=`)]<%lO(oi!!iX|W!O`Or(ors&osv(owx'}x#X(o#X#Y?y#Y;'S(o;'S;=`)]<%lO(oi!#_V!SP|W!O`Or(ors&osv(owx'}x;'S(o;'S;=`)]<%lO(ok!$PXaQVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_;'S$q;'S;=`)c<%lO$qo!$wX[UVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_;'S$q;'S;=`)c<%lO$qk!%mZVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_!`$q!`!a!&`!a;'S$q;'S;=`)c<%lO$qk!&kX!RQVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_;'S$q;'S;=`)c<%lO$qk!'aZVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_#P$q#P#Q!(S#Q;'S$q;'S;=`)c<%lO$qk!(]ZVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_!`$q!`!a!)O!a;'S$q;'S;=`)c<%lO$qk!)ZXxQVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_;'S$q;'S;=`)c<%lO$q",
  tokenizers: [iN, nN, sN, rN, 0, 1, 2, 3, 4],
  topRules: { Document: [0, 6] },
  tokenPrec: 0
});
function yo(i, e) {
  let t = e && e.getChild("TagName");
  return t ? i.sliceString(t.from, t.to) : "";
}
function Ca(i, e) {
  let t = e && e.firstChild;
  return !t || t.name != "OpenTag" ? "" : yo(i, t);
}
function aN(i, e, t) {
  let n = e && e.getChildren("Attribute").find((r) => r.from <= t && r.to >= t), s = n && n.getChild("AttributeName");
  return s ? i.sliceString(s.from, s.to) : "";
}
function Ea(i) {
  for (let e = i && i.parent; e; e = e.parent)
    if (e.name == "Element")
      return e;
  return null;
}
function cN(i, e) {
  var t;
  let n = je(i).resolveInner(e, -1), s = null;
  for (let r = n; !s && r.parent; r = r.parent)
    (r.name == "OpenTag" || r.name == "CloseTag" || r.name == "SelfClosingTag" || r.name == "MismatchedCloseTag") && (s = r);
  if (s && (s.to > e || s.lastChild.type.isError)) {
    let r = s.parent;
    if (n.name == "TagName")
      return s.name == "CloseTag" || s.name == "MismatchedCloseTag" ? { type: "closeTag", from: n.from, context: r } : { type: "openTag", from: n.from, context: Ea(r) };
    if (n.name == "AttributeName")
      return { type: "attrName", from: n.from, context: s };
    if (n.name == "AttributeValue")
      return { type: "attrValue", from: n.from, context: s };
    let o = n == s || n.name == "Attribute" ? n.childBefore(e) : n;
    return (o == null ? void 0 : o.name) == "StartTag" ? { type: "openTag", from: e, context: Ea(r) } : (o == null ? void 0 : o.name) == "StartCloseTag" && o.to <= e ? { type: "closeTag", from: e, context: r } : (o == null ? void 0 : o.name) == "Is" ? { type: "attrValue", from: e, context: s } : o ? { type: "attrName", from: e, context: s } : null;
  } else if (n.name == "StartCloseTag")
    return { type: "closeTag", from: e, context: n.parent };
  for (; n.parent && n.to == e && !(!((t = n.lastChild) === null || t === void 0) && t.type.isError); )
    n = n.parent;
  return n.name == "Element" || n.name == "Text" || n.name == "Document" ? { type: "tag", from: e, context: n.name == "Element" ? n : Ea(n) } : null;
}
let hN = class {
  constructor(e, t, n) {
    this.attrs = t, this.attrValues = n, this.children = [], this.name = e.name, this.completion = Object.assign(Object.assign({ type: "type" }, e.completion || {}), { label: this.name }), this.openCompletion = Object.assign(Object.assign({}, this.completion), { label: "<" + this.name }), this.closeCompletion = Object.assign(Object.assign({}, this.completion), { label: "</" + this.name + ">", boost: 2 }), this.closeNameCompletion = Object.assign(Object.assign({}, this.completion), { label: this.name + ">" }), this.text = e.textContent ? e.textContent.map((s) => ({ label: s, type: "text" })) : [];
  }
};
const Ta = /^[:\-\.\w\u00b7-\uffff]*$/;
function Gd(i) {
  return Object.assign(Object.assign({ type: "property" }, i.completion || {}), { label: i.name });
}
function zd(i) {
  return typeof i == "string" ? { label: `"${i}"`, type: "constant" } : /^"/.test(i.label) ? i : Object.assign(Object.assign({}, i), { label: `"${i.label}"` });
}
function fN(i, e) {
  let t = [], n = [], s = /* @__PURE__ */ Object.create(null);
  for (let a of e) {
    let c = Gd(a);
    t.push(c), a.global && n.push(c), a.values && (s[a.name] = a.values.map(zd));
  }
  let r = [], o = [], l = /* @__PURE__ */ Object.create(null);
  for (let a of i) {
    let c = n, h = s;
    a.attributes && (c = c.concat(a.attributes.map((u) => typeof u == "string" ? t.find((d) => d.label == u) || { label: u, type: "property" } : (u.values && (h == s && (h = Object.create(h)), h[u.name] = u.values.map(zd)), Gd(u)))));
    let f = new hN(a, c, h);
    l[f.name] = f, r.push(f), a.top && o.push(f);
  }
  o.length || (o = r);
  for (let a = 0; a < r.length; a++) {
    let c = i[a], h = r[a];
    if (c.children)
      for (let f of c.children)
        l[f] && h.children.push(l[f]);
    else
      h.children = r;
  }
  return (a) => {
    var c;
    let { doc: h } = a.state, f = cN(a.state, a.pos);
    if (!f || f.type == "tag" && !a.explicit)
      return null;
    let { type: u, from: d, context: p } = f;
    if (u == "openTag") {
      let m = o, g = Ca(h, p);
      if (g) {
        let b = l[g];
        m = (b == null ? void 0 : b.children) || r;
      }
      return {
        from: d,
        options: m.map((b) => b.completion),
        validFor: Ta
      };
    } else if (u == "closeTag") {
      let m = Ca(h, p);
      return m ? {
        from: d,
        to: a.pos + (h.sliceString(a.pos, a.pos + 1) == ">" ? 1 : 0),
        options: [((c = l[m]) === null || c === void 0 ? void 0 : c.closeNameCompletion) || { label: m + ">", type: "type" }],
        validFor: Ta
      } : null;
    } else if (u == "attrName") {
      let m = l[yo(h, p)];
      return {
        from: d,
        options: (m == null ? void 0 : m.attrs) || n,
        validFor: Ta
      };
    } else if (u == "attrValue") {
      let m = aN(h, p, d);
      if (!m)
        return null;
      let g = l[yo(h, p)], b = ((g == null ? void 0 : g.attrValues) || s)[m];
      return !b || !b.length ? null : {
        from: d,
        to: a.pos + (h.sliceString(a.pos, a.pos + 1) == '"' ? 1 : 0),
        options: b,
        validFor: /^"[^"]*"?$/
      };
    } else if (u == "tag") {
      let m = Ca(h, p), g = l[m], b = [], x = p && p.lastChild;
      m && (!x || x.name != "CloseTag" || yo(h, x) != m) && b.push(g ? g.closeCompletion : { label: "</" + m + ">", type: "type", boost: 2 });
      let S = b.concat(((g == null ? void 0 : g.children) || (p ? r : o)).map((C) => C.openCompletion));
      if (p && (g != null && g.text.length)) {
        let C = p.firstChild;
        C.to > a.pos - 20 && !/\S/.test(a.state.sliceDoc(C.to, a.pos)) && (S = S.concat(g.text));
      }
      return {
        from: d,
        options: S,
        validFor: /^<\/?[:\-\.\w\u00b7-\uffff]*$/
      };
    } else
      return null;
  };
}
const Lc = /* @__PURE__ */ as.define({
  name: "xml",
  parser: /* @__PURE__ */ lN.configure({
    props: [
      /* @__PURE__ */ Lh.add({
        Element(i) {
          let e = /^\s*<\//.test(i.textAfter);
          return i.lineIndent(i.node.from) + (e ? 0 : i.unit);
        },
        "OpenTag CloseTag SelfClosingTag"(i) {
          return i.column(i.node.from) + i.unit;
        }
      }),
      /* @__PURE__ */ Al.add({
        Element(i) {
          let e = i.firstChild, t = i.lastChild;
          return !e || e.name != "OpenTag" ? null : { from: e.to, to: t.name == "CloseTag" ? t.from : i.to };
        }
      }),
      /* @__PURE__ */ iO.add({
        "OpenTag CloseTag": (i) => i.getChild("TagName")
      })
    ]
  }),
  languageData: {
    commentTokens: { block: { open: "<!--", close: "-->" } },
    indentOnInput: /^\s*<\/$/
  }
});
function uN(i = {}) {
  let e = [Lc.data.of({
    autocomplete: fN(i.elements || [], i.attributes || [])
  })];
  return i.autoCloseTags !== !1 && e.push(dN), new Qh(Lc, e);
}
function jd(i, e, t = i.length) {
  if (!e)
    return "";
  let n = e.firstChild, s = n && n.getChild("TagName");
  return s ? i.sliceString(s.from, Math.min(s.to, t)) : "";
}
const dN = /* @__PURE__ */ X.inputHandler.of((i, e, t, n, s) => {
  if (i.composing || i.state.readOnly || e != t || n != ">" && n != "/" || !Lc.isActiveAt(i.state, e, -1))
    return !1;
  let r = s(), { state: o } = r, l = o.changeByRange((a) => {
    var c, h, f;
    let { head: u } = a, d = o.doc.sliceString(u - 1, u) == n, p = je(o).resolveInner(u, -1), m;
    if (d && n == ">" && p.name == "EndTag") {
      let g = p.parent;
      if (((h = (c = g.parent) === null || c === void 0 ? void 0 : c.lastChild) === null || h === void 0 ? void 0 : h.name) != "CloseTag" && (m = jd(o.doc, g.parent, u))) {
        let b = u + (o.doc.sliceString(u, u + 1) === ">" ? 1 : 0), x = `</${m}>`;
        return { range: a, changes: { from: u, to: b, insert: x } };
      }
    } else if (d && n == "/" && p.name == "StartCloseTag") {
      let g = p.parent;
      if (p.from == u - 2 && ((f = g.lastChild) === null || f === void 0 ? void 0 : f.name) != "CloseTag" && (m = jd(o.doc, g, u))) {
        let b = u + (o.doc.sliceString(u, u + 1) === ">" ? 1 : 0), x = `${m}>`;
        return {
          range: P.cursor(u + x.length, -1),
          changes: { from: u, to: b, insert: x }
        };
      }
    }
    return { range: a };
  });
  return l.changes.empty ? !1 : (i.dispatch([
    r,
    o.update(l, {
      userEvent: "input.complete",
      scrollIntoView: !0
    })
  ]), !0);
}), s0 = {
  __name: "SparqlEditor",
  props: {
    modelValue: { type: String, default: "" },
    readonly: { type: Boolean, default: !1 },
    language: { type: String, default: "sparql" }
    // 'sparql' | 'json' | 'xml' | 'text'
  },
  emits: ["update:modelValue"],
  setup(i, { emit: e }) {
    const t = i, n = e, s = /* @__PURE__ */ Qe(null);
    let r = null;
    function o() {
      switch (t.language) {
        case "json":
          return FD();
        case "xml":
          return uN();
        default:
          return LD();
      }
    }
    return sh(() => {
      const l = [
        TC,
        o()
      ];
      t.readonly ? l.push(pe.readOnly.of(!0)) : l.push(
        X.updateListener.of((a) => {
          a.docChanged && n("update:modelValue", a.state.doc.toString());
        })
      ), r = new X({
        doc: t.modelValue,
        extensions: l,
        // Pass the shadow root so CM6 injects its styles inside the shadow DOM
        root: s.value.getRootNode(),
        parent: s.value
      });
    }), Ms(() => t.modelValue, (l) => {
      if (!r) return;
      const a = r.state.doc.toString();
      a !== l && r.dispatch({
        changes: { from: 0, to: a.length, insert: l }
      });
    }), Rp(() => r == null ? void 0 : r.destroy()), (l, a) => (de(), ye("div", {
      ref_key: "editorRef",
      ref: s,
      class: "sparql-editor"
    }, null, 512));
  }
}, pN = { class: "prefixes" }, mN = ["checked", "data-prefix", "value", "onChange"], gN = { class: "keep" }, ON = {
  __name: "PrefixList",
  props: {
    prefixes: { type: Array, default: () => [] }
  },
  emits: ["toggle", "open-add-dialog"],
  setup(i, { emit: e }) {
    const t = e;
    return (n, s) => (de(), ye("ul", pN, [
      (de(!0), ye(et, null, Hn(i.prefixes, (r) => (de(), ye("li", {
        key: r.name,
        class: "prefix"
      }, [
        re("label", null, [
          re("input", {
            type: "checkbox",
            checked: r.active,
            "data-prefix": r.name,
            value: r.uri,
            onChange: (o) => t("toggle", r.name, r.uri, o.target.checked)
          }, null, 40, mN),
          ch(" " + Ze(r.name === "" ? ":" : r.name), 1)
        ])
      ]))), 128)),
      re("li", gN, [
        re("button", {
          type: "button",
          class: "btn-add-prefix",
          title: "Add a SPARQL prefix",
          onClick: s[0] || (s[0] = (r) => t("open-add-dialog"))
        }, " + ")
      ])
    ]));
  }
}, bN = { class: "field-row" }, yN = ["disabled"], xN = { class: "field-row" }, vN = {
  key: 0,
  class: "lookup-error"
}, SN = { class: "dialog-buttons" }, wN = ["disabled"], PN = {
  __name: "AddPrefixModal",
  props: {
    show: { type: Boolean, default: !1 },
    lookupPrefix: { type: Function, required: !0 }
  },
  emits: ["close", "add-prefix"],
  setup(i, { emit: e }) {
    const t = i, n = e, s = /* @__PURE__ */ Qe(null), r = /* @__PURE__ */ Qe(""), o = /* @__PURE__ */ Qe(""), l = /* @__PURE__ */ Qe(""), a = /* @__PURE__ */ Qe(!1), c = /* @__PURE__ */ Qe(null);
    Ms(() => t.show, (d) => {
      var p, m;
      d ? (r.value = "", o.value = "", l.value = "", c.value = null, (p = s.value) == null || p.showModal()) : (m = s.value) == null || m.close();
    });
    async function h() {
      if (r.value) {
        a.value = !0, c.value = null;
        try {
          const d = await t.lookupPrefix(r.value);
          d ? o.value = d : c.value = `No match found for '${r.value}'`;
        } catch {
          c.value = `Lookup failed for '${r.value}'`;
        } finally {
          a.value = !1;
        }
      }
    }
    function f() {
      r.value && (n("add-prefix", { prefix: r.value.trim(), uri: o.value.trim() }), n("close"));
    }
    function u() {
      n("close");
    }
    return (d, p) => (de(), ye("dialog", {
      ref_key: "dialogRef",
      ref: s,
      class: "prefix-dialog",
      onClose: p[4] || (p[4] = (m) => n("close"))
    }, [
      re("form", {
        method: "dialog",
        onSubmit: p[3] || (p[3] = cx(() => {
        }, ["prevent"]))
      }, [
        p[7] || (p[7] = re("h4", null, "Add a SPARQL prefix", -1)),
        re("div", bN, [
          p[5] || (p[5] = re("label", { for: "qc-input-prefix" }, "Prefix", -1)),
          Co(re("input", {
            id: "qc-input-prefix",
            "onUpdate:modelValue": p[0] || (p[0] = (m) => r.value = m),
            type: "text",
            placeholder: "e.g. skos",
            autofocus: "",
            onInput: p[1] || (p[1] = (m) => l.value = r.value ? `'${r.value}'` : "")
          }, null, 544), [
            [zf, r.value]
          ]),
          re("button", {
            type: "button",
            onClick: h,
            disabled: !r.value || a.value
          }, " Lookup " + Ze(l.value) + " on prefix.cc ", 9, yN)
        ]),
        re("div", xN, [
          p[6] || (p[6] = re("label", { for: "qc-input-uri" }, "URI", -1)),
          Co(re("input", {
            id: "qc-input-uri",
            "onUpdate:modelValue": p[2] || (p[2] = (m) => o.value = m),
            type: "text",
            placeholder: "https://…"
          }, null, 512), [
            [zf, o.value]
          ])
        ]),
        c.value ? (de(), ye("div", vN, Ze(c.value), 1)) : Xi("", !0),
        re("div", SN, [
          re("button", {
            type: "button",
            onClick: u
          }, "Cancel"),
          re("button", {
            type: "button",
            class: "btn-primary",
            onClick: f,
            disabled: !r.value
          }, "Add prefix", 8, wN)
        ])
      ], 32)
    ], 544));
  }
}, kN = { class: "results-pane" }, CN = {
  key: 0,
  class: "results-meta"
}, EN = { key: 0 }, TN = { key: 1 }, AN = {
  key: 1,
  class: "results-loading",
  "aria-live": "polite"
}, $N = {
  key: 2,
  class: "results-error"
}, DN = {
  key: 0,
  class: "results-table-wrap"
}, NN = { class: "results-table" }, RN = ["onClick", "aria-sort"], _N = {
  class: "sort-indicator",
  "aria-hidden": "true"
}, MN = { key: 0 }, QN = ["colspan"], IN = ["href"], VN = ["title"], LN = ["title"], BN = { key: 3 }, XN = {
  __name: "ResultsPane",
  props: {
    result: { type: Object, default: null },
    loading: { type: Boolean, default: !1 },
    error: { type: String, default: null },
    executionTime: { type: String, default: null },
    resultCount: { type: Number, default: null }
  },
  setup(i) {
    const e = i, t = /* @__PURE__ */ Qe(null), n = /* @__PURE__ */ Qe(1);
    function s(l) {
      t.value === l ? n.value = n.value === 1 ? -1 : 1 : (t.value = l, n.value = 1);
    }
    const r = Gn(() => {
      var l;
      return (l = e.result) != null && l.rows ? t.value === null ? e.result.rows : [...e.result.rows].sort((a, c) => {
        var u, d, p, m;
        const h = ((u = a[t.value]) == null ? void 0 : u.value) ?? ((d = a[t.value]) == null ? void 0 : d.display) ?? "", f = ((p = c[t.value]) == null ? void 0 : p.value) ?? ((m = c[t.value]) == null ? void 0 : m.display) ?? "";
        return h.localeCompare(f, void 0, { numeric: !0 }) * n.value;
      }) : [];
    });
    function o(l) {
      return l === "application/json" ? "json" : l === "application/xml" ? "xml" : "text";
    }
    return (l, a) => (de(), ye("div", kN, [
      i.executionTime || i.resultCount !== null ? (de(), ye("div", CN, [
        i.resultCount !== null ? (de(), ye("span", EN, Ze(i.resultCount) + " result" + Ze(i.resultCount !== 1 ? "s" : ""), 1)) : Xi("", !0),
        i.executionTime ? (de(), ye("span", TN, " in " + Ze(i.executionTime), 1)) : Xi("", !0)
      ])) : Xi("", !0),
      i.loading ? (de(), ye("div", AN, "Running query…")) : i.error ? (de(), ye("pre", $N, Ze(i.error), 1)) : i.result ? (de(), ye(et, { key: 3 }, [
        i.result.kind === "table" ? (de(), ye("div", DN, [
          re("table", NN, [
            re("thead", null, [
              re("tr", null, [
                (de(!0), ye(et, null, Hn(i.result.headers, (c, h) => (de(), ye("th", {
                  key: h,
                  onClick: (f) => s(h),
                  "aria-sort": t.value === h ? n.value === 1 ? "ascending" : "descending" : "none"
                }, [
                  ch(Ze(c) + " ", 1),
                  re("span", _N, Ze(t.value === h ? n.value === 1 ? " ▲" : " ▼" : ""), 1)
                ], 8, RN))), 128))
              ])
            ]),
            re("tbody", null, [
              r.value.length === 0 ? (de(), ye("tr", MN, [
                re("td", {
                  colspan: i.result.headers.length,
                  class: "results-empty"
                }, " Query did not return any results. ", 8, QN)
              ])) : Xi("", !0),
              (de(!0), ye(et, null, Hn(r.value, (c, h) => (de(), ye("tr", { key: h }, [
                (de(!0), ye(et, null, Hn(c, (f, u) => (de(), ye("td", { key: u }, [
                  f.type === "uri" ? (de(), ye("a", {
                    key: 0,
                    href: f.href,
                    target: "_blank",
                    rel: "noopener"
                  }, Ze(f.display), 9, IN)) : f.type === "typed" ? (de(), ye("span", {
                    key: 1,
                    title: `Type: ${f.datatype}`
                  }, Ze(f.value), 9, VN)) : f.type === "langTagged" ? (de(), ye("span", {
                    key: 2,
                    title: `Language: ${f.lang}`
                  }, Ze(f.value), 9, LN)) : (de(), ye("span", BN, Ze(f.value), 1))
                ]))), 128))
              ]))), 128))
            ])
          ])
        ])) : i.result.kind === "code" ? (de(), em(s0, {
          key: 1,
          "model-value": i.result.data,
          language: o(i.result.mime),
          readonly: !0,
          class: "results-code"
        }, null, 8, ["model-value", "language"])) : Xi("", !0)
      ], 64)) : Xi("", !0)
    ]));
  }
}, WN = "*,*:before,*:after{box-sizing:border-box}.qonsole{font-family:sans-serif;font-size:14px;display:flex;flex-direction:column;gap:.75rem;color:var(--qonsole-color, #333)}.qonsole__section{display:flex;flex-direction:column;gap:.25rem}.qonsole__section label,.section-label{font-weight:700;font-size:.875rem}.qonsole__section select{padding:.3rem .5rem;border:1px solid #ccc;border-radius:3px;max-width:30rem}.qonsole__prefixes{flex-direction:row;align-items:center;flex-wrap:wrap;gap:.5rem}.qonsole__controls{display:flex;align-items:center;gap:.75rem;flex-wrap:wrap}.qonsole__controls label{font-weight:700;font-size:.875rem}.qonsole__controls select{padding:.3rem .5rem;border:1px solid #ccc;border-radius:3px}.btn-run{background:var(--qonsole-accent-color, #5cb85c);color:#fff;border:none;border-radius:3px;padding:.4rem 1rem;cursor:pointer;font-size:.9rem;font-weight:700}.btn-run:hover:not(:disabled){filter:brightness(.9)}.btn-run:disabled{opacity:.6;cursor:default}", FN = (i, e) => {
  const t = i.__vccOpts || i;
  for (const [n, s] of e)
    t[n] = s;
  return t;
}, qN = { class: "qonsole" }, HN = {
  key: 0,
  class: "qonsole__section"
}, UN = { class: "qonsole__section qonsole__prefixes" }, GN = { class: "qonsole__section" }, zN = { class: "qonsole__controls" }, jN = ["value"], YN = ["disabled"], KN = {
  __name: "Qonsole.ce",
  props: {
    endpoints: { type: String, default: "{}" },
    prefixes: { type: String, default: "{}" },
    queries: { type: String, default: "[]" },
    allowQueriesFromURL: { type: String, default: "false" },
    service: { type: Object, default: null }
  },
  setup(i, { expose: e }) {
    const t = i, n = Gn(() => zl(t.endpoints)), s = Gn(() => zl(t.prefixes)), r = Gn(() => zl(t.queries, [])), o = /* @__PURE__ */ Qe(null), l = /* @__PURE__ */ Qe("tsv"), a = /* @__PURE__ */ Qe(""), c = /* @__PURE__ */ Qe(!1), {
      prefixList: h,
      addOrUpdatePrefix: f,
      setActive: u,
      syncPrefixButtonState: d,
      assemblePrefixes: p,
      renderPrefixes: m,
      stripLeader: g,
      updatePrefixDeclaration: b,
      parsedPrefixMap: x,
      lookupPrefixCC: S
    } = Ox(s.value), { examples: C, initExamples: v, selectExample: T, checkForURLQuery: N } = bx(), { loading: W, error: U, executionTime: se, resultCount: Z, result: F, execute: he, checkOutputFormat: fe } = Px();
    function oe(le) {
      if (!le) return;
      const j = le.query ?? le, te = p(j, le.prefixes), Pe = m(te);
      a.value = Pe ? `${Pe}

${g(j)}` : g(j), d(te);
    }
    sh(async () => {
      const le = Object.values(n.value);
      o.value = le[0] ?? null, await v(r.value);
      const j = N(t.allowQueriesFromURL === "true");
      j ? a.value = j : C.value.length > 0 && oe(C.value[0]);
    });
    function Oe(le) {
      T(le), oe(C.value[le]);
    }
    function G(le, j, te) {
      u(le, te), a.value = b(le, j, te, a.value);
    }
    function J({ prefix: le, uri: j }) {
      const te = Object.fromEntries(h.value.map((Le) => [Le.name, Le.active]));
      f(le, j), h.value.forEach((Le) => {
        Le.name !== le && te[Le.name] !== void 0 && (Le.active = te[Le.name]);
      });
      const Pe = a.value.split(`
`).filter((Le) => !/^prefix\s/i.test(Le)), Pt = h.value.filter((Le) => Le.active);
      a.value = `${m(Pt)}
${Pe.join(`
`)}`;
    }
    async function xe() {
      const le = fe(a.value, l.value);
      l.value = le, await he(
        a.value,
        o.value,
        le,
        x(),
        t.service
      );
    }
    return e({
      currentQueryText: () => a.value,
      setCurrentQueryText: (le) => {
        a.value = le;
      }
    }), (le, j) => (de(), ye("div", qN, [
      Et(C).length > 0 ? (de(), ye("div", HN, [
        j[6] || (j[6] = re("label", { for: "qc-examples" }, "Example queries", -1)),
        re("select", {
          id: "qc-examples",
          onChange: j[0] || (j[0] = (te) => Oe(te.target.selectedIndex))
        }, [
          (de(!0), ye(et, null, Hn(Et(C), (te, Pe) => (de(), ye("option", { key: Pe }, Ze(te.name), 1))), 128))
        ], 32)
      ])) : Xi("", !0),
      re("div", UN, [
        j[7] || (j[7] = re("span", { class: "section-label" }, "Prefixes", -1)),
        yt(ON, {
          prefixes: Et(h),
          onToggle: G,
          onOpenAddDialog: j[1] || (j[1] = (te) => c.value = !0)
        }, null, 8, ["prefixes"])
      ]),
      re("div", GN, [
        yt(s0, {
          modelValue: a.value,
          "onUpdate:modelValue": j[2] || (j[2] = (te) => a.value = te),
          language: "sparql"
        }, null, 8, ["modelValue"])
      ]),
      re("div", zN, [
        j[9] || (j[9] = re("label", { for: "qc-endpoints" }, "SPARQL endpoint", -1)),
        Co(re("select", {
          id: "qc-endpoints",
          "onUpdate:modelValue": j[3] || (j[3] = (te) => o.value = te)
        }, [
          (de(!0), ye(et, null, Hn(n.value, (te, Pe) => (de(), ye("option", {
            key: Pe,
            value: te
          }, Ze(Pe), 9, jN))), 128))
        ], 512), [
          [jf, o.value]
        ]),
        j[10] || (j[10] = re("label", { for: "qc-format" }, "Results format", -1)),
        Co(re("select", {
          id: "qc-format",
          "onUpdate:modelValue": j[4] || (j[4] = (te) => l.value = te)
        }, [...j[8] || (j[8] = [
          re("option", { value: "tsv" }, "table", -1),
          re("option", { value: "text" }, "plain text", -1),
          re("option", { value: "json" }, "JSON", -1),
          re("option", { value: "xml" }, "XML", -1)
        ])], 512), [
          [jf, l.value]
        ]),
        re("button", {
          type: "button",
          class: "btn-run",
          disabled: Et(W) || !o.value,
          onClick: xe
        }, Ze(Et(W) ? "Running…" : "Perform query"), 9, YN)
      ]),
      yt(XN, {
        result: Et(F),
        loading: Et(W),
        error: Et(U),
        "execution-time": Et(se),
        "result-count": Et(Z)
      }, null, 8, ["result", "loading", "error", "execution-time", "result-count"]),
      yt(PN, {
        show: c.value,
        "lookup-prefix": Et(S),
        onClose: j[5] || (j[5] = (te) => c.value = !1),
        onAddPrefix: J
      }, null, 8, ["show", "lookup-prefix"])
    ]));
  }
}, ZN = /* @__PURE__ */ FN(KN, [["styles", [WN]]]), JN = /* @__PURE__ */ sx(ZN);
customElements.define("epi-qonsole", JN);
