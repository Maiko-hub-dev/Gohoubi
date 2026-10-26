(function () {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) i(n);
  new MutationObserver((n) => {
    for (const a of n) if (a.type === "childList") for (const u of a.addedNodes) u.tagName === "LINK" && u.rel === "modulepreload" && i(u);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(n) {
    const a = {};
    return (n.integrity && (a.integrity = n.integrity), n.referrerPolicy && (a.referrerPolicy = n.referrerPolicy), n.crossOrigin === "use-credentials" ? (a.credentials = "include") : n.crossOrigin === "anonymous" ? (a.credentials = "omit") : (a.credentials = "same-origin"), a);
  }
  function i(n) {
    if (n.ep) return;
    n.ep = !0;
    const a = t(n);
    fetch(n.href, a);
  }
})();
function re(e = "") {
  return e
    .trim()
    .split(" ")
    .filter((s) => !!s.trim());
}
function ot(e) {
  Object.keys(e).forEach((s) => {
    try {
      e[s] = null;
    } catch {}
    try {
      delete e[s];
    } catch {}
  });
}
function he(e, s = 0) {
  return setTimeout(e, s);
}
function ee() {
  return Date.now();
}
function dt(e) {
  return window.getComputedStyle(e, null);
}
function Re(e, s = "x") {
  const t = dt(e),
    i = t.transform || t.webkitTransform;
  if (!i || i === "none") return 0;
  const n = new DOMMatrixReadOnly(i);
  return s === "x" ? n.m41 : n.m42;
}
function ye(e) {
  return typeof e == "object" && e !== null && e.constructor === Object && Object.prototype.toString.call(e).slice(8, -1) === "Object";
}
function ct(e) {
  return typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : !!e && typeof e == "object" && (e.nodeType === 1 || e.nodeType === 11);
}
function J(e, ...s) {
  const t = Object(e);
  for (let i = 0; i < s.length; i += 1) {
    const n = s[i];
    if (n == null || ct(n)) continue;
    const a = n,
      u = Object.keys(Object(a)).filter((d) => d !== "__proto__" && d !== "constructor" && d !== "prototype");
    for (const d of u) {
      const l = Object.getOwnPropertyDescriptor(a, d);
      if (!l || !l.enumerable) continue;
      const p = a[d];
      ye(t[d]) && ye(p) ? (p.__swiper__ ? (t[d] = p) : J(t[d], p)) : !ye(t[d]) && ye(p) ? ((t[d] = {}), p.__swiper__ ? (t[d] = p) : J(t[d], p)) : (t[d] = p);
    }
  }
  return t;
}
function oe(e, s, t) {
  e.style.setProperty(s, t);
}
function ce(e) {
  const s = e.querySelector(".swiper-slide-transform");
  if (s) return s;
  if (e.shadowRoot) {
    const t = e.shadowRoot.querySelector(".swiper-slide-transform");
    if (t) return t;
  }
  return e;
}
function U(e, s = "") {
  const t = [...e.children];
  return (e instanceof HTMLSlotElement && t.push(...e.assignedElements()), s ? t.filter((i) => i.matches(s)) : t);
}
function ft(e, s) {
  const t = [s];
  for (; t.length > 0;) {
    const i = t.shift();
    if (e === i) return !0;
    t.push(...i.children, ...(i.shadowRoot ? i.shadowRoot.children : []), ...(i.assignedElements ? i.assignedElements() : []));
  }
  return !1;
}
function ut(e, s) {
  let t = s.contains(e);
  return (!t && s instanceof HTMLSlotElement && ((t = [...s.assignedElements()].includes(e)), t || (t = ft(e, s))), t);
}
function Pe(e) {
  try {
    console.warn(e);
  } catch {}
}
function te(e, s = []) {
  const t = document.createElement(e);
  return (t.classList.add(...(Array.isArray(s) ? s : re(s))), t);
}
function Le(e) {
  const s = e.getBoundingClientRect();
  return { top: s.top + window.scrollY - (e.clientTop || 0), left: s.left + window.scrollX - (e.clientLeft || 0) };
}
function mt(e, s) {
  const t = [];
  let i = e.previousElementSibling;
  for (; i;) ((!s || i.matches(s)) && t.push(i), (i = i.previousElementSibling));
  return t;
}
function pt(e, s) {
  const t = [];
  let i = e.nextElementSibling;
  for (; i;) ((!s || i.matches(s)) && t.push(i), (i = i.nextElementSibling));
  return t;
}
function le(e, s) {
  return window.getComputedStyle(e, null).getPropertyValue(s);
}
function Se(e) {
  if (!(!e || !e.parentNode)) return [...e.parentNode.children].indexOf(e);
}
function de(e, s) {
  const t = [];
  let i = e.parentElement;
  for (; i;) ((!s || i.matches(s)) && t.push(i), (i = i.parentElement));
  return t;
}
function be(e, s) {
  s &&
    e.addEventListener(
      "transitionend",
      function (i) {
        i.target === e && s.call(e, i);
      },
      { once: !0 },
    );
}
function Ye(e, s, t) {
  {
    const i = window.getComputedStyle(e, null);
    return e[s === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getPropertyValue(s === "width" ? "margin-right" : "margin-top")) + parseFloat(i.getPropertyValue(s === "width" ? "margin-left" : "margin-bottom"));
  }
}
function _(e) {
  return (Array.isArray(e) ? e : [e]).filter((s) => !!s);
}
function Ie(e) {
  return (s) => (Math.abs(s) > 0 && e.browser && e.browser.need3dFix && Math.abs(s) % 90 === 0 ? s + 0.001 : s);
}
function ie(e, s = "") {
  const t = globalThis.trustedTypes;
  typeof t < "u" ? (e.innerHTML = t.createPolicy("html", { createHTML: (i) => i }).createHTML(s)) : (e.innerHTML = s);
}
let $e;
function ht() {
  return typeof window > "u" ? { touch: !1 } : { touch: "ontouchstart" in window || navigator.maxTouchPoints > 0 };
}
function tt() {
  return ($e || ($e = ht()), $e);
}
let Ge;
function gt({ userAgent: e } = {}) {
  if (typeof window > "u") return { ios: !1, android: !1 };
  const s = tt(),
    t = navigator.platform,
    i = e || navigator.userAgent,
    n = { ios: !1, android: !1 },
    a = /(Android);?[\s/]+([\d.]+)?/.test(i),
    u = /(iPhone\sOS|iOS|iPod)/.test(i),
    d = /iPad/.test(i),
    l = t === "MacIntel" && s.touch && navigator.maxTouchPoints > 1,
    p = d || l;
  return (a && !(t === "Win32") && ((n.os = "android"), (n.android = !0)), (p || u) && ((n.os = "ios"), (n.ios = !0)), n);
}
function st(e = {}) {
  return (Ge || (Ge = gt(e)), Ge);
}
let He;
function vt() {
  if (typeof window > "u") return { isSafari: !1, isWebView: !1, need3dFix: !1 };
  const e = st(),
    s = navigator.userAgent,
    t = s.toLowerCase(),
    i = t.includes("safari") && !t.includes("chrome") && !t.includes("android"),
    n = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(s),
    a = i || (n && e.ios);
  return { isSafari: i, isWebView: n, need3dFix: a };
}
function it() {
  return (He || (He = vt()), He);
}
const Ce = (e, s) => {
    if (!e || e.destroyed || !e.params) return;
    const t = () => (e.isElement ? "swiper-slide" : `.${e.params.slideClass}`),
      i = s.closest(t());
    if (i) {
      let n = i.querySelector(`.${e.params.lazyPreloaderClass}`);
      (!n &&
        e.isElement &&
        (i.shadowRoot
          ? (n = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              if (i.shadowRoot) {
                const a = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`);
                a && !a.lazyPreloaderManaged && a.remove();
              }
            })),
        n && !n.lazyPreloaderManaged && n.remove());
    }
  },
  Be = (e, s) => {
    if (!e.slides[s]) return;
    const t = e.slides[s].querySelector('[loading="lazy"]');
    t && t.removeAttribute("loading");
  },
  Ne = (e) => {
    if (!e || e.destroyed || !e.params) return;
    let s = e.params.lazyPreloadPrevNext;
    const t = e.slides.length;
    if (!t || !s || s < 0) return;
    s = Math.min(s, t);
    const i = e.params.slidesPerView === "auto" ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
      n = e.activeIndex;
    if (e.params.grid && (e.params.grid.rows ?? 1) > 1) {
      const u = n,
        d = [u - s];
      (d.push(...Array.from({ length: s }).map((l, p) => u + i + p)),
        e.slides.forEach((l, p) => {
          l.column !== void 0 && d.includes(l.column) && Be(e, p);
        }));
      return;
    }
    const a = n + i - 1;
    if (e.params.rewind || e.params.loop)
      for (let u = n - s; u <= a + s; u += 1) {
        const d = ((u % t) + t) % t;
        (d < n || d > a) && Be(e, d);
      }
    else for (let u = Math.max(n - s, 0); u <= Math.min(a + s, t - 1); u += 1) u !== n && (u > a || u < n) && Be(e, u);
  };
function yt(e, s = "window", t) {
  if (!e || (s === "container" && !t)) return;
  let i = !1;
  const n = s === "window" ? window.innerHeight : t.clientHeight,
    a = Object.keys(e).map((u) => {
      if (typeof u == "string" && u.indexOf("@") === 0) {
        const d = parseFloat(u.substr(1));
        return { value: n * d, point: u };
      }
      return { value: u, point: u };
    });
  a.sort((u, d) => parseInt(String(u.value), 10) - parseInt(String(d.value), 10));
  for (let u = 0; u < a.length; u += 1) {
    const { point: d, value: l } = a[u];
    s === "window" ? window.matchMedia(`(min-width: ${l}px)`).matches && (i = d) : l <= t.clientWidth && (i = d);
  }
  return i || "max";
}
const je = (e, s) => !!(e.grid && s.grid && s.grid.rows > 1);
function bt() {
  const e = this,
    { realIndex: s, initialized: t, params: i, el: n } = e,
    a = i.breakpoints;
  if (!a || (a && Object.keys(a).length === 0)) return;
  const u = i.breakpointsBase === "window" || !i.breakpointsBase ? i.breakpointsBase : "container",
    d = ["window", "container"].includes(i.breakpointsBase) || !i.breakpointsBase ? e.el : document.querySelector(i.breakpointsBase),
    l = e.getBreakpoint(a, u, d);
  if (!l || e.currentBreakpoint === l) return;
  const p = a,
    c = (l in p ? p[l] : void 0) || e.originalParams,
    v = je(e, i),
    o = je(e, c),
    r = e.params.grabCursor,
    g = c.grabCursor,
    b = i.enabled;
  (v && !o ? (n.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !v && o && (n.classList.add(`${i.containerModifierClass}grid`), ((c.grid.fill && c.grid.fill === "column") || (!c.grid.fill && i.grid.fill === "column")) && n.classList.add(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()), r && !g ? e.unsetGrabCursor() : !r && g && e.setGrabCursor());
  const S = (T, z) => T[z];
  ["navigation", "pagination", "scrollbar"].forEach((T) => {
    const z = S(c, T);
    if (typeof z > "u") return;
    const M = S(i, T),
      w = typeof M == "object" && M !== null && M.enabled,
      E = typeof z == "object" && z !== null && z.enabled,
      I = e[T];
    (w && !E && I?.disable?.(), !w && E && I?.enable?.());
  });
  const h = c.direction && c.direction !== i.direction,
    m = i.loop && (c.slidesPerView !== i.slidesPerView || h),
    y = i.loop;
  (h && t && e.changeDirection(), J(e.params, c));
  const x = e.params.enabled,
    A = e.params.loop;
  (Object.assign(e, { allowTouchMove: e.params.allowTouchMove, allowSlideNext: e.params.allowSlideNext, allowSlidePrev: e.params.allowSlidePrev }), b && !x ? e.disable() : !b && x && e.enable(), (e.currentBreakpoint = l), e.emit("_beforeBreakpoint", c), t && (m ? (e.loopDestroy(), e.loopCreate(s), e.updateSlides()) : !y && A ? (e.loopCreate(s), e.updateSlides()) : y && !A && e.loopDestroy()), e.emit("breakpoint", c));
}
var St = { setBreakpoint: bt, getBreakpoint: yt };
function Et() {
  const e = this,
    { isLocked: s, params: t } = e,
    { slidesOffsetBefore: i } = t;
  if (i) {
    const n = e.slides.length - 1,
      a = e.slidesGrid[n] + e.slidesSizesGrid[n] + i * 2;
    e.isLocked = e.size > a;
  } else e.isLocked = e.snapGrid.length === 1;
  (t.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked), t.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked), s && s !== e.isLocked && (e.isEnd = !1), s !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"));
}
var xt = { checkOverflow: Et };
function Tt(e, s) {
  const t = [];
  return (
    e.forEach((i) => {
      typeof i == "object"
        ? Object.keys(i).forEach((n) => {
            i[n] && t.push(s + n);
          })
        : typeof i == "string" && t.push(s + i);
    }),
    t
  );
}
function Mt() {
  const e = this,
    { classNames: s, params: t, rtl: i, el: n, device: a } = e,
    u = Tt(["initialized", t.direction, { "free-mode": e.params.freeMode && t.freeMode.enabled }, { autoheight: t.autoHeight }, { rtl: i }, { grid: t.grid && t.grid.rows > 1 }, { "grid-column": t.grid && t.grid.rows > 1 && t.grid.fill === "column" }, { android: a.android }, { ios: a.ios }, { "css-mode": t.cssMode }, { centered: t.cssMode && t.centeredSlides }, { "watch-progress": t.watchSlidesProgress }], t.containerModifierClass);
  (s.push(...u), n.classList.add(...s), e.emitContainerClasses());
}
function Ct() {
  const e = this,
    { el: s, classNames: t } = e;
  !s || typeof s == "string" || (s.classList.remove(...t), e.emitContainerClasses());
}
var Pt = { addClasses: Mt, removeClasses: Ct };
const nt = {
  init: !0,
  direction: "horizontal",
  oneWayMovement: !1,
  swiperElementNodeName: "SWIPER-CONTAINER",
  touchEventsTarget: "wrapper",
  initialSlide: 0,
  speed: 300,
  cssMode: !1,
  updateOnWindowResize: !0,
  resizeObserver: !0,
  nested: !1,
  createElements: !1,
  eventsPrefix: "swiper",
  enabled: !0,
  focusableElements: "input, select, option, textarea, button, video, label",
  width: null,
  height: null,
  preventInteractionOnTransition: !1,
  userAgent: null,
  url: null,
  edgeSwipeDetection: !1,
  edgeSwipeThreshold: 20,
  autoHeight: !1,
  setWrapperSize: !1,
  virtualTranslate: !1,
  effect: "slide",
  breakpoints: void 0,
  breakpointsBase: "window",
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: !1,
  centeredSlides: !1,
  centeredSlidesBounds: !1,
  slidesOffsetBefore: 0,
  slidesOffsetAfter: 0,
  normalizeSlideIndex: !0,
  centerInsufficientSlides: !1,
  snapToSlideEdge: !1,
  watchOverflow: !0,
  roundLengths: !1,
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: !0,
  shortSwipes: !0,
  longSwipes: !0,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: !0,
  allowTouchMove: !0,
  threshold: 5,
  touchMoveStopPropagation: !1,
  touchStartPreventDefault: !0,
  touchStartForcePreventDefault: !1,
  touchReleaseOnEdges: !1,
  uniqueNavElements: !0,
  resistance: !0,
  resistanceRatio: 0.85,
  watchSlidesProgress: !1,
  grabCursor: !1,
  preventClicks: !0,
  preventClicksPropagation: !0,
  slideToClickedSlide: !1,
  loop: !1,
  loopAddBlankSlides: !0,
  loopAdditionalSlides: 0,
  loopPreventsSliding: !0,
  rewind: !1,
  allowSlidePrev: !0,
  allowSlideNext: !0,
  swipeHandler: null,
  noSwiping: !0,
  noSwipingClass: "swiper-no-swiping",
  noSwipingSelector: null,
  passiveListeners: !0,
  maxBackfaceHiddenSlides: 10,
  containerModifierClass: "swiper-",
  slideClass: "swiper-slide",
  slideBlankClass: "swiper-slide-blank",
  slideActiveClass: "swiper-slide-active",
  slideVisibleClass: "swiper-slide-visible",
  slideFullyVisibleClass: "swiper-slide-fully-visible",
  slideNextClass: "swiper-slide-next",
  slidePrevClass: "swiper-slide-prev",
  wrapperClass: "swiper-wrapper",
  lazyPreloaderClass: "swiper-lazy-preloader",
  lazyPreloadPrevNext: 0,
  runCallbacksOnInit: !0,
  _emitClasses: !1,
};
var Lt = {
  on(e, s, t) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof s != "function") return i;
    const n = t ? "unshift" : "push";
    return (
      e.split(" ").forEach((a) => {
        (i.eventsListeners[a] || (i.eventsListeners[a] = []), i.eventsListeners[a][n](s));
      }),
      i
    );
  },
  once(e, s, t) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof s != "function") return i;
    const n = function (...u) {
      (i.off(e, n), n.__emitterProxy && delete n.__emitterProxy, s.apply(i, u));
    };
    return ((n.__emitterProxy = s), i.on(e, n, t));
  },
  onAny(e, s) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || typeof e != "function") return t;
    const i = s ? "unshift" : "push";
    return (t.eventsAnyListeners.indexOf(e) < 0 && t.eventsAnyListeners[i](e), t);
  },
  offAny(e) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || !s.eventsAnyListeners) return s;
    const t = s.eventsAnyListeners.indexOf(e);
    return (t >= 0 && s.eventsAnyListeners.splice(t, 1), s);
  },
  off(e, s) {
    const t = this;
    return (
      !t.eventsListeners ||
        t.destroyed ||
        !t.eventsListeners ||
        e.split(" ").forEach((i) => {
          typeof s > "u"
            ? (t.eventsListeners[i] = [])
            : t.eventsListeners[i] &&
              t.eventsListeners[i].forEach((n, a) => {
                (n === s || (n.__emitterProxy && n.__emitterProxy === s)) && t.eventsListeners[i].splice(a, 1);
              });
        }),
      t
    );
  },
  emit(...e) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || !s.eventsListeners) return s;
    let t, i, n;
    if (typeof e[0] == "string" || Array.isArray(e[0])) ((t = e[0]), (i = e.slice(1, e.length)), (n = s));
    else {
      const u = e[0];
      ((t = u.events), (i = u.data ?? []), (n = u.context || s));
    }
    return (
      i.unshift(n),
      (Array.isArray(t) ? t : t.split(" ")).forEach((u) => {
        (s.eventsAnyListeners &&
          s.eventsAnyListeners.length &&
          s.eventsAnyListeners.forEach((d) => {
            d.apply(n, [u, ...i]);
          }),
          s.eventsListeners &&
            s.eventsListeners[u] &&
            s.eventsListeners[u].forEach((d) => {
              d.apply(n, i);
            }));
      }),
      s
    );
  },
};
function It(e) {
  const s = this;
  s.destroyed || (s.enabled && (s.allowClick || (s.params.preventClicks && e.preventDefault(), s.params.preventClicksPropagation && s.animating && (e.stopPropagation(), e.stopImmediatePropagation()))));
}
function At() {
  const e = this;
  e.destroyed || e.documentTouchHandlerProceeded || ((e.documentTouchHandlerProceeded = !0), e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
}
function zt(e) {
  const s = this;
  s.destroyed || (Ce(s, e.target), !(s.params.cssMode || (s.params.slidesPerView !== "auto" && !s.params.autoHeight)) && s.update());
}
function Ot() {
  const e = this,
    { params: s, el: t } = e;
  if (t && t.offsetWidth === 0) return;
  s.breakpoints && e.setBreakpoint();
  const { allowSlideNext: i, allowSlidePrev: n, snapGrid: a } = e,
    u = e.virtual && e.params.virtual?.enabled;
  ((e.allowSlideNext = !0), (e.allowSlidePrev = !0), e.updateSize(), e.updateSlides(), e.updateSlidesClasses());
  const d = u && s.loop;
  if ((s.slidesPerView === "auto" || s.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides && !d) {
    const l = u ? e.virtual.slides.length : e.slides.length;
    e.slideTo(l - 1, 0, !1, !0);
  } else e.params.loop && !u ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
  if (e.autoplay && e.autoplay.running && e.autoplay.paused) {
    const l = e.autoplay;
    (clearTimeout(l.resizeTimeout),
      (l.resizeTimeout = setTimeout(() => {
        e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume();
      }, 500)));
  }
  ((e.allowSlidePrev = n), (e.allowSlideNext = i), e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow());
}
function wt() {
  const e = this;
  if (e.destroyed) return;
  const { wrapperEl: s, rtlTranslate: t, enabled: i } = e;
  if (!i) return;
  ((e.previousTranslate = e.translate), e.isHorizontal() ? (e.translate = -s.scrollLeft) : (e.translate = -s.scrollTop), e.translate === 0 && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses());
  let n;
  const a = e.maxTranslate() - e.minTranslate();
  (a === 0 ? (n = 0) : (n = (e.translate - e.minTranslate()) / a), n !== e.progress && e.updateProgress(t ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1));
}
function Dt(e) {
  const s = this;
  if (s.destroyed) return;
  const t = s.touchEventsData;
  let i = e.originalEvent ?? e;
  if (i.type === "touchend" || i.type === "touchcancel") {
    const x = [...i.changedTouches].find((A) => A.identifier === t.touchId);
    if (!x || x.identifier !== t.touchId) return;
  } else if (t.touchId !== null || i.pointerId !== t.pointerId) return;
  if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(i.type) && !(["pointercancel", "contextmenu"].includes(i.type) && (s.browser.isSafari || s.browser.isWebView))) return;
  ((t.pointerId = null), (t.touchId = null));
  const { params: a, touches: u, rtlTranslate: d, slidesGrid: l, enabled: p } = s;
  if (!p || (!a.simulateTouch && i.pointerType === "mouse")) return;
  if ((t.allowTouchCallbacks && s.emit("touchEnd", i), (t.allowTouchCallbacks = !1), !t.isTouched)) {
    (t.isMoved && a.grabCursor && s.setGrabCursor(!1), (t.isMoved = !1), (t.startMoving = !1));
    return;
  }
  a.grabCursor && t.isMoved && t.isTouched && (s.allowSlideNext === !0 || s.allowSlidePrev === !0) && s.setGrabCursor(!1);
  const f = ee(),
    c = f - t.touchStartTime;
  if (s.allowClick) {
    const y = i.path ?? (i.composedPath && i.composedPath());
    (s.updateClickedSlide(y && y[0], y), s.emit("tap click", i), c < 300 && f - t.lastClickTime < 300 && s.emit("doubleTap doubleClick", i));
  }
  if (
    ((t.lastClickTime = ee()),
    he(() => {
      s.destroyed || (s.allowClick = !0);
    }),
    !t.isTouched || !t.isMoved || !s.swipeDirection || (u.diff === 0 && !t.loopSwapReset) || (t.currentTranslate === t.startTranslate && !t.loopSwapReset))
  ) {
    ((t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1));
    return;
  }
  ((t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1));
  let v;
  if ((a.followFinger ? (v = d ? s.translate : -s.translate) : (v = -(t.currentTranslate ?? 0)), a.cssMode)) return;
  if (a.freeMode && a.freeMode.enabled) {
    s.freeMode.onTouchEnd({ currentPos: v });
    return;
  }
  const o = v >= -s.maxTranslate() && !s.params.loop;
  let r = 0,
    g = s.slidesSizesGrid[0];
  for (let y = 0; y < l.length; y += y < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
    const x = y < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
    typeof l[y + x] < "u" ? (o || (v >= l[y] && v < l[y + x])) && ((r = y), (g = l[y + x] - l[y])) : (o || v >= l[y]) && ((r = y), (g = l[l.length - 1] - l[l.length - 2]));
  }
  let b = null,
    S = null;
  a.rewind && (s.isBeginning ? (S = a.virtual?.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1) : s.isEnd && (b = 0));
  const h = (v - l[r]) / g,
    m = r < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
  if (c > a.longSwipesMs) {
    if (!a.longSwipes) {
      s.slideTo(s.activeIndex);
      return;
    }
    (s.swipeDirection === "next" && (h >= a.longSwipesRatio ? s.slideTo(a.rewind && s.isEnd ? b : r + m) : s.slideTo(r)), s.swipeDirection === "prev" && (h > 1 - a.longSwipesRatio ? s.slideTo(r + m) : S !== null && h < 0 && Math.abs(h) > a.longSwipesRatio ? s.slideTo(S) : s.slideTo(r)));
  } else {
    if (!a.shortSwipes) {
      s.slideTo(s.activeIndex);
      return;
    }
    s.navigation && (i.target === s.navigation.nextEl || i.target === s.navigation.prevEl) ? (i.target === s.navigation.nextEl ? s.slideTo(r + m) : s.slideTo(r)) : (s.swipeDirection === "next" && s.slideTo(b !== null ? b : r + m), s.swipeDirection === "prev" && s.slideTo(S !== null ? S : r));
  }
}
function kt(e) {
  const s = this;
  if (s.destroyed) return;
  const t = s.touchEventsData,
    { params: i, touches: n, rtlTranslate: a, enabled: u } = s;
  if (!u || (!i.simulateTouch && e.pointerType === "mouse")) return;
  const d = e,
    l = d.originalEvent ?? d;
  if (l.type === "pointermove" && (t.touchId !== null || l.pointerId !== t.pointerId)) return;
  let p;
  if (l.type === "touchmove") {
    const T = [...l.changedTouches].find((z) => z.identifier === t.touchId);
    if (!T || T.identifier !== t.touchId) return;
    p = T;
  } else p = l;
  if (!t.isTouched) {
    t.startMoving && t.isScrolling && s.emit("touchMoveOpposite", l);
    return;
  }
  const f = p.pageX,
    c = p.pageY;
  if (l.preventedByNestedSwiper) {
    ((n.startX = f), (n.startY = c));
    return;
  }
  if (!s.allowTouchMove) {
    (l.target.matches(t.focusableElements) || (s.allowClick = !1), t.isTouched && (Object.assign(n, { startX: f, startY: c, currentX: f, currentY: c }), (t.touchStartTime = ee())));
    return;
  }
  if (i.touchReleaseOnEdges && !i.loop)
    if (s.isVertical()) {
      if ((c < n.startY && s.translate <= s.maxTranslate()) || (c > n.startY && s.translate >= s.minTranslate())) {
        ((t.isTouched = !1), (t.isMoved = !1));
        return;
      }
    } else {
      if (a && ((f > n.startX && -s.translate <= s.maxTranslate()) || (f < n.startX && -s.translate >= s.minTranslate()))) return;
      if (!a && ((f < n.startX && s.translate <= s.maxTranslate()) || (f > n.startX && s.translate >= s.minTranslate()))) return;
    }
  if ((document.activeElement && document.activeElement.matches(t.focusableElements) && document.activeElement !== l.target && l.pointerType !== "mouse" && document.activeElement.blur(), document.activeElement && l.target === document.activeElement && l.target.matches(t.focusableElements))) {
    ((t.isMoved = !0), (s.allowClick = !1));
    return;
  }
  (t.allowTouchCallbacks && s.emit("touchMove", l), (n.previousX = n.currentX), (n.previousY = n.currentY), (n.currentX = f), (n.currentY = c));
  const v = n.currentX - n.startX,
    o = n.currentY - n.startY;
  if (s.params.threshold && Math.sqrt(v ** 2 + o ** 2) < s.params.threshold) return;
  if (typeof t.isScrolling > "u") {
    let A;
    (s.isHorizontal() && n.currentY === n.startY) || (s.isVertical() && n.currentX === n.startX) ? (t.isScrolling = !1) : v * v + o * o >= 25 && ((A = (Math.atan2(Math.abs(o), Math.abs(v)) * 180) / Math.PI), (t.isScrolling = s.isHorizontal() ? A > i.touchAngle : 90 - A > i.touchAngle));
  }
  if ((t.isScrolling && s.emit("touchMoveOpposite", l), typeof t.startMoving > "u" && (n.currentX !== n.startX || n.currentY !== n.startY) && (t.startMoving = !0), t.isScrolling || (l.type === "touchmove" && t.preventTouchMoveFromPointerMove))) {
    t.isTouched = !1;
    return;
  }
  if (!t.startMoving) return;
  ((s.allowClick = !1), !i.cssMode && l.cancelable && l.preventDefault(), i.touchMoveStopPropagation && !i.nested && l.stopPropagation());
  let r = s.isHorizontal() ? v : o,
    g = s.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
  (i.oneWayMovement && ((r = Math.abs(r) * (a ? 1 : -1)), (g = Math.abs(g) * (a ? 1 : -1))), (n.diff = r), (r *= i.touchRatio), a && ((r = -r), (g = -g)));
  const b = s.touchesDirection;
  ((s.swipeDirection = r > 0 ? "prev" : "next"), (s.touchesDirection = g > 0 ? "prev" : "next"));
  const S = s.params.loop && !i.cssMode,
    h = (s.touchesDirection === "next" && s.allowSlideNext) || (s.touchesDirection === "prev" && s.allowSlidePrev);
  if (!t.isMoved) {
    if ((S && h && s.loopFix({ direction: s.swipeDirection }), (t.startTranslate = s.getTranslate()), s.setTransition(0), s.animating)) {
      const A = new window.CustomEvent("transitionend", { bubbles: !0, cancelable: !0, detail: { bySwiperTouchMove: !0 } });
      s.wrapperEl.dispatchEvent(A);
    }
    ((t.allowMomentumBounce = !1), i.grabCursor && (s.allowSlideNext === !0 || s.allowSlidePrev === !0) && s.setGrabCursor(!0), s.emit("sliderFirstMove", l));
  }
  if ((new Date().getTime(), i._loopSwapReset !== !1 && t.isMoved && t.allowThresholdMove && b !== s.touchesDirection && S && h && Math.abs(r) >= 1)) {
    (Object.assign(n, { startX: f, startY: c, currentX: f, currentY: c, startTranslate: t.currentTranslate }), (t.loopSwapReset = !0), (t.startTranslate = t.currentTranslate));
    return;
  }
  (s.emit("sliderMove", l), (t.isMoved = !0));
  const m = t.startTranslate ?? 0;
  t.currentTranslate = r + m;
  let y = !0,
    x = i.resistanceRatio;
  if (
    (i.touchReleaseOnEdges && (x = 0),
    r > 0
      ? (S && h && t.allowThresholdMove && t.currentTranslate > (i.centeredSlides ? s.minTranslate() - s.slidesSizesGrid[s.activeIndex + 1] - (i.slidesPerView !== "auto" && s.slides.length - i.slidesPerView >= 2 ? s.slidesSizesGrid[s.activeIndex + 1] + s.params.spaceBetween : 0) - s.params.spaceBetween : s.minTranslate()) && s.loopFix({ direction: "prev", setTranslate: !0, activeSlideIndex: 0 }), t.currentTranslate > s.minTranslate() && ((y = !1), i.resistance && (t.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + m + r) ** x)))
      : r < 0 && (S && h && t.allowThresholdMove && t.currentTranslate < (i.centeredSlides ? s.maxTranslate() + s.slidesSizesGrid[s.slidesSizesGrid.length - 1] + s.params.spaceBetween + (i.slidesPerView !== "auto" && s.slides.length - i.slidesPerView >= 2 ? s.slidesSizesGrid[s.slidesSizesGrid.length - 1] + s.params.spaceBetween : 0) : s.maxTranslate()) && s.loopFix({ direction: "next", setTranslate: !0, activeSlideIndex: s.slides.length - (i.slidesPerView === "auto" ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(String(i.slidesPerView)))) }), t.currentTranslate < s.maxTranslate() && ((y = !1), i.resistance && (t.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - m - r) ** x))),
    y && (l.preventedByNestedSwiper = !0),
    !s.allowSlideNext && s.swipeDirection === "next" && (t.currentTranslate ?? 0) < m && (t.currentTranslate = m),
    !s.allowSlidePrev && s.swipeDirection === "prev" && (t.currentTranslate ?? 0) > m && (t.currentTranslate = m),
    !s.allowSlidePrev && !s.allowSlideNext && (t.currentTranslate = m),
    i.threshold > 0)
  )
    if (Math.abs(r) > i.threshold || t.allowThresholdMove) {
      if (!t.allowThresholdMove) {
        ((t.allowThresholdMove = !0), (n.startX = n.currentX), (n.startY = n.currentY), (t.currentTranslate = t.startTranslate), (n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY));
        return;
      }
    } else {
      t.currentTranslate = t.startTranslate;
      return;
    }
  !i.followFinger || i.cssMode || (((i.freeMode && i.freeMode.enabled && s.freeMode) || i.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), i.freeMode && i.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(t.currentTranslate), s.setTranslate(t.currentTranslate ?? 0));
}
function $t(e, s) {
  function t(i) {
    if (!i || i === document || i === window) return null;
    let n = i;
    n.assignedSlot && (n = n.assignedSlot);
    const a = n.closest(e);
    if (!a && !n.getRootNode) return null;
    const u = n.getRootNode();
    return a || t(u.host);
  }
  return t(s);
}
function Ue(e, s, t) {
  const { params: i } = e,
    n = i.edgeSwipeDetection,
    a = i.edgeSwipeThreshold;
  return n && (t <= a || t >= window.innerWidth - a) ? (n === "prevent" ? (s.preventDefault(), !0) : !1) : !0;
}
function Gt(e) {
  const s = this;
  if (s.destroyed) return;
  const t = e.originalEvent ?? e,
    i = s.touchEventsData;
  if (t.type === "pointerdown") {
    const h = t;
    if (i.pointerId !== null && i.pointerId !== h.pointerId) return;
    i.pointerId = h.pointerId;
  } else t.type === "touchstart" && t.targetTouches.length === 1 && (i.touchId = t.targetTouches[0].identifier);
  if (t.type === "touchstart") {
    Ue(s, t, t.targetTouches[0].pageX);
    return;
  }
  const { params: n, touches: a, enabled: u } = s;
  if (!u || (!n.simulateTouch && t.pointerType === "mouse") || (s.animating && n.preventInteractionOnTransition)) return;
  !s.animating && n.cssMode && n.loop && s.loopFix();
  let d = t.target;
  if (n.touchEventsTarget === "wrapper" && !ut(d, s.wrapperEl)) return;
  const l = t;
  if ((typeof l.which == "number" && l.which === 3) || (typeof l.button == "number" && l.button > 0) || (i.isTouched && i.isMoved)) return;
  const p = !!n.noSwipingClass && n.noSwipingClass !== "",
    f = t.composedPath ? t.composedPath() : t.path;
  p && t.target && t.target.shadowRoot && f && (d = f[0]);
  const c = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`,
    v = !!(t.target && t.target.shadowRoot);
  if (n.noSwiping && (v ? $t(c, d) : d.closest(c))) {
    s.allowClick = !0;
    return;
  }
  if (n.swipeHandler && typeof n.swipeHandler == "string" && !d.closest(n.swipeHandler)) return;
  const o = t;
  ((a.currentX = o.pageX), (a.currentY = o.pageY));
  const r = a.currentX,
    g = a.currentY;
  if (!Ue(s, t, r)) return;
  (Object.assign(i, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }), (a.startX = r), (a.startY = g), (i.touchStartTime = ee()), (s.allowClick = !0), s.updateSize(), (s.swipeDirection = void 0), n.threshold > 0 && (i.allowThresholdMove = !1));
  let b = !0;
  (d.matches(i.focusableElements) && ((b = !1), d.nodeName === "SELECT" && (i.isTouched = !1)), document.activeElement && document.activeElement.matches(i.focusableElements) && document.activeElement !== d && (o.pointerType === "mouse" || (o.pointerType !== "mouse" && !d.matches(i.focusableElements))) && document.activeElement.blur());
  const S = b && s.allowTouchMove && n.touchStartPreventDefault;
  ((n.touchStartForcePreventDefault || S) && !d.isContentEditable && t.preventDefault(), n.freeMode && n.freeMode.enabled && s.freeMode && s.animating && !n.cssMode && s.freeMode.onTouchStart(), s.emit("touchStart", t));
}
const at = (e, s) => {
  const { params: t, el: i, wrapperEl: n, device: a } = e,
    u = !!t.nested,
    d = s === "on" ? "addEventListener" : "removeEventListener",
    l = s;
  if (!i || typeof i == "string") return;
  (document[d]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: u }), i[d]("touchstart", e.onTouchStart, { passive: !1 }), i[d]("pointerdown", e.onTouchStart, { passive: !1 }), document[d]("touchmove", e.onTouchMove, { passive: !1, capture: u }), document[d]("pointermove", e.onTouchMove, { passive: !1, capture: u }), document[d]("touchend", e.onTouchEnd, { passive: !0 }), document[d]("pointerup", e.onTouchEnd, { passive: !0 }), document[d]("pointercancel", e.onTouchEnd, { passive: !0 }), document[d]("touchcancel", e.onTouchEnd, { passive: !0 }), document[d]("pointerout", e.onTouchEnd, { passive: !0 }), document[d]("pointerleave", e.onTouchEnd, { passive: !0 }), document[d]("contextmenu", e.onTouchEnd, { passive: !0 }), (t.preventClicks || t.preventClicksPropagation) && i[d]("click", e.onClick, !0), t.cssMode && n[d]("scroll", e.onScroll));
  const p = (f) => {
    e[l](f, Ot, !0);
  };
  (t.updateOnWindowResize ? p(a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate") : p("observerUpdate"), i[d]("load", e.onLoad, { capture: !0 }));
};
function Ht() {
  const e = this,
    { params: s } = e;
  ((e.onTouchStart = Gt.bind(e)), (e.onTouchMove = kt.bind(e)), (e.onTouchEnd = Dt.bind(e)), (e.onDocumentTouchStart = At.bind(e)), s.cssMode && (e.onScroll = wt.bind(e)), (e.onClick = It.bind(e)), (e.onLoad = zt.bind(e)), at(e, "on"));
}
function Bt() {
  at(this, "off");
}
var Xt = { attachEvents: Ht, detachEvents: Bt };
function Vt(e) {
  const s = this;
  if (!s.params.simulateTouch || (s.params.watchOverflow && s.isLocked) || s.params.cssMode) return;
  const t = s.params.touchEventsTarget === "container" ? s.el : s.wrapperEl;
  (s.isElement && (s.__preventObserver__ = !0),
    (t.style.cursor = "move"),
    (t.style.cursor = e ? "grabbing" : "grab"),
    s.isElement &&
      requestAnimationFrame(() => {
        s.__preventObserver__ = !1;
      }));
}
function Rt() {
  const e = this;
  (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e.isElement && (e.__preventObserver__ = !0),
    (e[e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = ""),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      }));
}
var Yt = { setGrabCursor: Vt, unsetGrabCursor: Rt };
function Nt(e, s) {
  const t = this,
    { params: i, slidesEl: n } = t;
  if (!i.loop || (t.virtual && t.params.virtual?.enabled)) return;
  const a = () => {
      U(n, `.${i.slideClass}, swiper-slide`).forEach((r, g) => {
        r.setAttribute("data-swiper-slide-index", String(g));
      });
    },
    u = () => {
      const o = U(n, `.${i.slideBlankClass}`);
      (o.forEach((r) => {
        r.remove();
      }),
        o.length > 0 && (t.recalcSlides(), t.updateSlides()));
    },
    d = t.grid && i.grid && i.grid.rows > 1;
  i.loopAddBlankSlides && (i.slidesPerGroup > 1 || d) && u();
  const l = i.slidesPerGroup * (d ? i.grid.rows : 1),
    p = t.slides.length % l !== 0,
    f = d && t.slides.length % i.grid.rows !== 0,
    c = (o) => {
      for (let r = 0; r < o; r += 1) {
        const g = t.isElement ? te("swiper-slide", [i.slideBlankClass]) : te("div", [i.slideClass, i.slideBlankClass]);
        t.slidesEl.append(g);
      }
    };
  if (p) {
    if (i.loopAddBlankSlides) {
      const o = l - (t.slides.length % l);
      (c(o), t.recalcSlides(), t.updateSlides());
    } else Pe("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    a();
  } else if (f) {
    if (i.loopAddBlankSlides) {
      const o = i.grid.rows - (t.slides.length % i.grid.rows);
      (c(o), t.recalcSlides(), t.updateSlides());
    } else Pe("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    a();
  } else a();
  const v = i.centeredSlides || !!i.slidesOffsetBefore || !!i.slidesOffsetAfter;
  t.loopFix({ slideRealIndex: e, direction: v ? void 0 : "next", initial: s });
}
function _t() {
  const e = this,
    { params: s, slidesEl: t } = e;
  if (!s.loop || !t || (e.virtual && e.params.virtual?.enabled)) return;
  e.recalcSlides();
  const i = [];
  (e.slides.forEach((n) => {
    const a = n,
      u = typeof a.swiperSlideIndex > "u" ? Number(n.getAttribute("data-swiper-slide-index")) : a.swiperSlideIndex;
    i[u] = n;
  }),
    e.slides.forEach((n) => {
      n.removeAttribute("data-swiper-slide-index");
    }),
    i.forEach((n) => {
      t.append(n);
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0));
}
function Ft(e = {}) {
  const { slideRealIndex: s, slideTo: t = !0, direction: i, setTranslate: n, activeSlideIndex: a, initial: u, byController: d, byMousewheel: l } = e;
  let p = a;
  const f = this;
  if (!f.params.loop) return;
  f.emit("beforeLoopFix");
  const { slides: c, allowSlidePrev: v, allowSlideNext: o, slidesEl: r, params: g } = f,
    { centeredSlides: b, slidesOffsetBefore: S, slidesOffsetAfter: h, initialSlide: m } = g,
    y = b || !!S || !!h;
  if (((f.allowSlidePrev = !0), (f.allowSlideNext = !0), f.virtual && g.virtual?.enabled)) {
    if (t) {
      const H = f.virtual.slides.length,
        R = f.virtual.slidesBefore ?? 0;
      !y && f.snapIndex === 0 ? f.slideTo(H, 0, !1, !0) : y && f.snapIndex < g.slidesPerView ? f.slideTo(H + f.snapIndex, 0, !1, !0) : f.snapIndex === f.snapGrid.length - 1 && f.slideTo(R, 0, !1, !0);
    }
    ((f.allowSlidePrev = v), (f.allowSlideNext = o), f.emit("loopFix"));
    return;
  }
  let x = g.slidesPerView;
  x === "auto" ? (x = f.slidesPerViewDynamic()) : ((x = Math.ceil(parseFloat(String(g.slidesPerView)))), y && x % 2 === 0 && (x = x + 1));
  const A = g.slidesPerGroupAuto ? x : g.slidesPerGroup;
  let T = y ? Math.max(A, Math.ceil(x / 2)) : A;
  (T % A !== 0 && (T += A - (T % A)), (T += g.loopAdditionalSlides), (f.loopedSlides = T));
  const z = f.grid && g.grid && g.grid.rows > 1;
  c.length < x + T || (f.params.effect === "cards" && c.length < x + T * 2) ? Pe("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : z && g.grid.fill === "row" && Pe("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
  const M = [],
    w = [],
    E = z ? Math.ceil(c.length / g.grid.rows) : c.length,
    I = u && E - m < x && !y;
  let L = I ? m : f.activeIndex;
  typeof p > "u" ? (p = f.getSlideIndex(c.find((H) => H.classList.contains(g.slideActiveClass)))) : (L = p);
  const C = i === "next" || !i,
    O = i === "prev" || !i;
  let P = 0,
    k = 0;
  const $ = (z ? (c[p].column ?? 0) : p) + (y && typeof n > "u" ? -x / 2 + 0.5 : 0);
  if ($ < T) {
    P = Math.max(T - $, A);
    for (let H = 0; H < T - $; H += 1) {
      const R = H - Math.floor(H / E) * E;
      if (z) {
        const F = E - R - 1;
        for (let D = c.length - 1; D >= 0; D -= 1) c[D].column === F && M.push(D);
      } else M.push(E - R - 1);
    }
  } else if ($ + x > E - T) {
    ((k = Math.max($ - (E - T * 2), A)), I && (k = Math.max(k, x - E + m + 1)));
    for (let H = 0; H < k; H += 1) {
      const R = H - Math.floor(H / E) * E;
      z
        ? c.forEach((F, D) => {
            F.column === R && w.push(D);
          })
        : w.push(R);
    }
  }
  if (
    ((f.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      f.__preventObserver__ = !1;
    }),
    f.params.effect === "cards" && c.length < x + T * 2 && (w.includes(p) && w.splice(w.indexOf(p), 1), M.includes(p) && M.splice(M.indexOf(p), 1)),
    O &&
      M.forEach((H) => {
        const R = c[H];
        ((R.swiperLoopMoveDOM = !0), r.prepend(R), (R.swiperLoopMoveDOM = !1));
      }),
    C &&
      w.forEach((H) => {
        const R = c[H];
        ((R.swiperLoopMoveDOM = !0), r.append(R), (R.swiperLoopMoveDOM = !1));
      }),
    f.recalcSlides(),
    g.slidesPerView === "auto"
      ? f.updateSlides()
      : z &&
        ((M.length > 0 && O) || (w.length > 0 && C)) &&
        f.slides.forEach((H, R) => {
          f.grid.updateSlide(R, H, f.slides);
        }),
    g.watchSlidesProgress && f.updateSlidesOffset(),
    t)
  ) {
    if (M.length > 0 && O) {
      if (typeof s > "u") {
        const H = f.slidesGrid[L],
          F = f.slidesGrid[L + P] - H;
        l ? f.setTranslate(f.translate - F) : (f.slideTo(L + Math.ceil(P), 0, !1, !0), n && ((f.touchEventsData.startTranslate = f.touchEventsData.startTranslate - F), (f.touchEventsData.currentTranslate = f.touchEventsData.currentTranslate - F)));
      } else if (n) {
        const H = z ? M.length / g.grid.rows : M.length;
        (f.slideTo(f.activeIndex + H, 0, !1, !0), (f.touchEventsData.currentTranslate = f.translate));
      }
    } else if (w.length > 0 && C)
      if (typeof s > "u") {
        const H = f.slidesGrid[L],
          F = f.slidesGrid[L - k] - H;
        l ? f.setTranslate(f.translate - F) : (f.slideTo(L - k, 0, !1, !0), n && ((f.touchEventsData.startTranslate = f.touchEventsData.startTranslate - F), (f.touchEventsData.currentTranslate = f.touchEventsData.currentTranslate - F)));
      } else {
        const H = z ? w.length / g.grid.rows : w.length;
        f.slideTo(f.activeIndex - H, 0, !1, !0);
      }
  }
  ((f.allowSlidePrev = v), (f.allowSlideNext = o));
  const V = f.controller?.control;
  if (V && !d) {
    const H = { slideRealIndex: s, direction: i, setTranslate: n, activeSlideIndex: p, byController: !0 };
    Array.isArray(V)
      ? V.forEach((R) => {
          !R.destroyed && R.params.loop && R.loopFix({ ...H, slideTo: R.params.slidesPerView === g.slidesPerView ? t : !1 });
        })
      : V instanceof f.constructor && V.params.loop && V.loopFix({ ...H, slideTo: V.params.slidesPerView === g.slidesPerView ? t : !1 });
  }
  f.emit("loopFix");
}
var Wt = { loopCreate: Nt, loopFix: Ft, loopDestroy: _t };
function qt(e, s) {
  return function (i = {}) {
    const n = Object.keys(i)[0],
      a = i[n];
    if (typeof a != "object" || a === null) {
      J(s, i);
      return;
    }
    if ((e[n] === !0 && (e[n] = { enabled: !0 }), n === "navigation" && e[n] && e[n].enabled && !e[n].prevEl && !e[n].nextEl && (e[n].auto = !0), ["pagination", "scrollbar"].indexOf(n) >= 0 && e[n] && e[n].enabled && !e[n].el && (e[n].auto = !0), !(n in e && "enabled" in a))) {
      J(s, i);
      return;
    }
    (typeof e[n] == "object" && !("enabled" in e[n]) && (e[n].enabled = !0), e[n] || (e[n] = { enabled: !1 }), J(s, i));
  };
}
const jt = ({ swiper: e, extendParams: s, on: t }) => {
    const i = [],
      n = (d, l = {}) => {
        const p = window.MutationObserver || window.WebkitMutationObserver;
        if (!p) return;
        const f = new p((c) => {
          if (e.__preventObserver__) return;
          if (c.length === 1) {
            e.emit("observerUpdate", c[0]);
            return;
          }
          const v = function () {
            e.emit("observerUpdate", c[0]);
          };
          window.requestAnimationFrame ? window.requestAnimationFrame(v) : window.setTimeout(v, 0);
        });
        (f.observe(d, { attributes: typeof l.attributes > "u" ? !0 : l.attributes, childList: e.isElement || (typeof l.childList > "u" ? !0 : l.childList), characterData: typeof l.characterData > "u" ? !0 : l.characterData }), i.push(f));
      },
      a = () => {
        if (e.params.observer) {
          if (e.params.observeParents) {
            const d = de(e.hostEl);
            for (let l = 0; l < d.length; l += 1) n(d[l]);
          }
          (n(e.hostEl, { childList: e.params.observeSlideChildren }), n(e.wrapperEl, { attributes: !1 }));
        }
      },
      u = () => {
        (i.forEach((d) => {
          d.disconnect();
        }),
          i.splice(0, i.length));
      };
    (s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }), t("init", a), t("destroy", u));
  },
  Ut = ({ swiper: e, on: s, emit: t }) => {
    let i = null,
      n = null;
    const a = () => {
        !e || e.destroyed || !e.initialized || (t("beforeResize"), t("resize"));
      },
      u = () => {
        !e ||
          e.destroyed ||
          !e.initialized ||
          ((i = new ResizeObserver((p) => {
            n = window.requestAnimationFrame(() => {
              const { width: f, height: c } = e;
              let v = f,
                o = c;
              (p.forEach(({ contentBoxSize: r, contentRect: g, target: b }) => {
                if (b && b !== e.el) return;
                const S = Array.isArray(r) ? r[0] : r;
                ((v = g ? g.width : S.inlineSize), (o = g ? g.height : S.blockSize));
              }),
                (v !== f || o !== c) && a());
            });
          })),
          i.observe(e.el));
      },
      d = () => {
        (n && window.cancelAnimationFrame(n), i && i.unobserve && e.el && (i.unobserve(e.el), (i = null)));
      },
      l = () => {
        !e || e.destroyed || !e.initialized || t("orientationchange");
      };
    (s("init", () => {
      if (e.params.resizeObserver && typeof window.ResizeObserver < "u") {
        u();
        return;
      }
      (window.addEventListener("resize", a), window.addEventListener("orientationchange", l));
    }),
      s("destroy", () => {
        (d(), window.removeEventListener("resize", a), window.removeEventListener("orientationchange", l));
      }));
  };
function Kt(e, s = !0, t) {
  const i = this,
    { enabled: n, params: a, animating: u } = i;
  if (!n || i.destroyed) return i;
  typeof e > "u" && (e = i.params.speed);
  let d = a.slidesPerGroup;
  a.slidesPerView === "auto" && a.slidesPerGroup === 1 && a.slidesPerGroupAuto && (d = Math.max(i.slidesPerViewDynamic("current", !0), 1));
  const l = i.activeIndex < a.slidesPerGroupSkip ? 1 : d,
    p = i.virtual && a.virtual?.enabled;
  if (a.loop) {
    if (u && !p && a.loopPreventsSliding) return !1;
    if ((i.loopFix({ direction: "next" }), (i._clientLeft = i.wrapperEl.clientLeft), i.activeIndex === i.slides.length - 1 && a.cssMode))
      return (
        requestAnimationFrame(() => {
          i.slideTo(i.activeIndex + l, e, s, t);
        }),
        !0
      );
  }
  return a.rewind && i.isEnd ? i.slideTo(0, e, s, t) : i.slideTo(i.activeIndex + l, e, s, t);
}
function Zt(e, s = !0, t) {
  const i = this,
    { params: n, snapGrid: a, slidesGrid: u, rtlTranslate: d, enabled: l, animating: p } = i;
  if (!l || i.destroyed) return i;
  typeof e > "u" && (e = i.params.speed);
  const f = i.virtual && n.virtual?.enabled;
  if (n.loop) {
    if (p && !f && n.loopPreventsSliding) return !1;
    (i.loopFix({ direction: "prev" }), (i._clientLeft = i.wrapperEl.clientLeft));
  }
  const c = d ? i.translate : -i.translate;
  function v(h) {
    return h < 0 ? -Math.floor(Math.abs(h)) : Math.floor(h);
  }
  const o = v(c),
    r = a.map((h) => v(h)),
    g = n.freeMode && n.freeMode.enabled;
  let b = a[r.indexOf(o) - 1];
  if (typeof b > "u" && (n.cssMode || g)) {
    let h;
    (a.forEach((m, y) => {
      o >= m && (h = y);
    }),
      typeof h < "u" && (b = g ? a[h] : a[h > 0 ? h - 1 : h]));
  }
  let S = 0;
  if ((typeof b < "u" && ((S = u.indexOf(b)), S < 0 && (S = i.activeIndex - 1), n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && ((S = S - i.slidesPerViewDynamic("previous", !0) + 1), (S = Math.max(S, 0)))), n.rewind && i.isBeginning)) {
    const h = i.params.virtual?.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
    return i.slideTo(h, e, s, t);
  } else if (n.loop && i.activeIndex === 0 && n.cssMode)
    return (
      requestAnimationFrame(() => {
        i.slideTo(S, e, s, t);
      }),
      !0
    );
  return i.slideTo(S, e, s, t);
}
function Qt(e, s = !0, t) {
  const i = this;
  if (!i.destroyed) return (typeof e > "u" && (e = i.params.speed), i.slideTo(i.activeIndex, e, s, t));
}
function Jt(e = 0, s, t = !0, i, n) {
  typeof e == "string" && (e = parseInt(e, 10));
  const a = this;
  let u = e;
  u < 0 && (u = 0);
  const { params: d, snapGrid: l, slidesGrid: p, previousIndex: f, activeIndex: c, rtlTranslate: v, wrapperEl: o, enabled: r } = a;
  if ((!r && !i && !n) || a.destroyed || (a.animating && d.preventInteractionOnTransition)) return !1;
  typeof s > "u" && (s = a.params.speed);
  const g = Math.min(a.params.slidesPerGroupSkip, u);
  let b = g + Math.floor((u - g) / a.params.slidesPerGroup);
  b >= l.length && (b = l.length - 1);
  const S = -l[b];
  if (d.normalizeSlideIndex)
    for (let T = 0; T < p.length; T += 1) {
      const z = -Math.floor(S * 100),
        M = Math.floor(p[T] * 100),
        w = Math.floor(p[T + 1] * 100);
      typeof p[T + 1] < "u" ? (z >= M && z < w - (w - M) / 2 ? (u = T) : z >= M && z < w && (u = T + 1)) : z >= M && (u = T);
    }
  if (a.initialized && u !== c && ((!a.allowSlideNext && (v ? S > a.translate && S > a.minTranslate() : S < a.translate && S < a.minTranslate())) || (!a.allowSlidePrev && S > a.translate && S > a.maxTranslate() && (c || 0) !== u))) return !1;
  (u !== (f || 0) && t && a.emit("beforeSlideChangeStart"), a.updateProgress(S));
  let h;
  u > c ? (h = "next") : u < c ? (h = "prev") : (h = "reset");
  const m = a.virtual && a.params.virtual?.enabled;
  if (!(m && n) && ((v && -S === a.translate) || (!v && S === a.translate))) return (a.updateActiveIndex(u), d.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), d.effect !== "slide" && a.setTranslate(S), h !== "reset" && (a.transitionStart(t, h), a.transitionEnd(t, h)), !1);
  if (d.cssMode) {
    const T = a.isHorizontal(),
      z = v ? S : -S;
    return (
      s === 0
        ? (m && ((a.wrapperEl.style.scrollSnapType = "none"), (a._immediateVirtual = !0)),
          m && !a._cssModeVirtualInitialSet && (a.params.initialSlide ?? 0) > 0
            ? ((a._cssModeVirtualInitialSet = !0),
              requestAnimationFrame(() => {
                o[T ? "scrollLeft" : "scrollTop"] = z;
              }))
            : (o[T ? "scrollLeft" : "scrollTop"] = z),
          m &&
            requestAnimationFrame(() => {
              ((a.wrapperEl.style.scrollSnapType = ""), (a._immediateVirtual = !1));
            }))
        : o.scrollTo({ [T ? "left" : "top"]: z, behavior: "smooth" }),
      !0
    );
  }
  const A = it().isSafari;
  return (
    m && !n && A && a.isElement && a.virtual.update(!1, !1, u),
    a.setTransition(s),
    a.setTranslate(S),
    a.updateActiveIndex(u),
    a.updateSlidesClasses(),
    a.emit("beforeTransitionStart", s, i),
    a.transitionStart(t, h),
    s === 0
      ? a.transitionEnd(t, h)
      : a.animating ||
        ((a.animating = !0),
        a.onSlideToWrapperTransitionEnd ||
          (a.onSlideToWrapperTransitionEnd = function (z) {
            !a || a.destroyed || (z.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), (a.onSlideToWrapperTransitionEnd = null), delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(t, h)));
          }),
        a.wrapperEl.addEventListener("transitionend", a.onSlideToWrapperTransitionEnd)),
    !0
  );
}
function es() {
  const e = this;
  if (e.destroyed) return;
  const { params: s, slidesEl: t, clickedSlide: i, clickedIndex: n } = e;
  if (i === void 0 || n === void 0) return;
  const a = s.slidesPerView === "auto" ? e.slidesPerViewDynamic() : s.slidesPerView;
  let u = e.getSlideIndexWhenGrid(n),
    d;
  const l = e.isElement ? "swiper-slide" : `.${s.slideClass}`,
    p = e.grid && e.params.grid && e.params.grid.rows > 1;
  if (s.loop) {
    if (e.animating) return;
    ((d = parseInt(i.getAttribute("data-swiper-slide-index"), 10)),
      s.centeredSlides
        ? e.slideToLoop(d)
        : u > (p ? (e.slides.length - a) / 2 - (e.params.grid.rows - 1) : e.slides.length - a)
          ? (e.loopFix(),
            (u = e.getSlideIndex(U(t, `${l}[data-swiper-slide-index="${d}"]`)[0])),
            he(() => {
              e.slideTo(u);
            }))
          : e.slideTo(u));
  } else e.slideTo(u);
}
function ts(e, s = !0, t, i = 0.5) {
  const n = this;
  if (n.destroyed) return;
  typeof e > "u" && (e = n.params.speed);
  let a = n.activeIndex;
  const u = Math.min(n.params.slidesPerGroupSkip, a),
    d = u + Math.floor((a - u) / n.params.slidesPerGroup),
    l = n.rtlTranslate ? n.translate : -n.translate;
  if (l >= n.snapGrid[d]) {
    const p = n.snapGrid[d],
      f = n.snapGrid[d + 1];
    l - p > (f - p) * i && (a += n.params.slidesPerGroup);
  } else {
    const p = n.snapGrid[d - 1],
      f = n.snapGrid[d];
    l - p <= (f - p) * i && (a -= n.params.slidesPerGroup);
  }
  return ((a = Math.max(a, 0)), (a = Math.min(a, n.slidesGrid.length - 1)), n.slideTo(a, e, s, t));
}
function ss(e = 0, s, t = !0, i) {
  typeof e == "string" && (e = parseInt(e, 10));
  const n = this;
  if (n.destroyed) return;
  typeof s > "u" && (s = n.params.speed);
  const a = n.grid && n.params.grid && n.params.grid.rows > 1;
  let u = e;
  if (n.params.loop)
    if (n.virtual && n.params.virtual?.enabled) u = u + (n.virtual.slidesBefore ?? 0);
    else {
      let d;
      if (a) {
        const g = u * n.params.grid.rows;
        d = n.slides.find((S) => Number(S.getAttribute("data-swiper-slide-index")) === g)?.column ?? 0;
      } else d = n.getSlideIndexByData(u);
      const l = a ? Math.ceil(n.slides.length / n.params.grid.rows) : n.slides.length,
        { centeredSlides: p, slidesOffsetBefore: f, slidesOffsetAfter: c } = n.params,
        v = p || !!f || !!c;
      let o;
      n.params.slidesPerView === "auto" ? (o = n.slidesPerViewDynamic()) : ((o = Math.ceil(parseFloat(String(n.params.slidesPerView)))), v && o % 2 === 0 && (o = o + 1));
      let r = l - d < o;
      if ((v && (r = r || d < Math.ceil(o / 2)), i && v && n.params.slidesPerView !== "auto" && !a && (r = !1), r)) {
        const g = v ? (d < n.activeIndex ? "prev" : "next") : d - n.activeIndex - 1 < n.params.slidesPerView ? "next" : "prev";
        n.loopFix({ direction: g, slideTo: !0, activeSlideIndex: g === "next" ? d + 1 : d - l + 1, slideRealIndex: g === "next" ? n.realIndex : void 0 });
      }
      if (a) {
        const g = u * n.params.grid.rows;
        u = n.slides.find((S) => Number(S.getAttribute("data-swiper-slide-index")) === g)?.column ?? 0;
      } else u = n.getSlideIndexByData(u);
    }
  return (
    requestAnimationFrame(() => {
      n.slideTo(u, s, t, i);
    }),
    n
  );
}
var is = { slideTo: Jt, slideToLoop: ss, slideNext: Kt, slidePrev: Zt, slideReset: Qt, slideToClosest: ts, slideToClickedSlide: es };
function ns(e, s) {
  const t = this;
  (t.params.cssMode || ((t.wrapperEl.style.transitionDuration = `${e}ms`), (t.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : "")), t.emit("setTransition", e, s));
}
function rt({ swiper: e, runCallbacks: s, direction: t, step: i }) {
  const { activeIndex: n, previousIndex: a } = e;
  let u = t;
  (u || (n > a ? (u = "next") : n < a ? (u = "prev") : (u = "reset")), e.emit(`transition${i}`), s && u === "reset" ? e.emit(`slideResetTransition${i}`) : s && n !== a && (e.emit(`slideChangeTransition${i}`), u === "next" ? e.emit(`slideNextTransition${i}`) : e.emit(`slidePrevTransition${i}`)));
}
function as(e = !0, s) {
  const t = this,
    { params: i } = t;
  ((t.animating = !1), !i.cssMode && (t.setTransition(0), rt({ swiper: t, runCallbacks: e, direction: s, step: "End" })));
}
function rs(e = !0, s) {
  const t = this,
    { params: i } = t;
  i.cssMode || (i.autoHeight && t.updateAutoHeight(), rt({ swiper: t, runCallbacks: e, direction: s, step: "Start" }));
}
var ls = { setTransition: ns, transitionStart: rs, transitionEnd: as };
function os(e = this.isHorizontal() ? "x" : "y") {
  const s = this,
    { params: t, rtlTranslate: i, translate: n, wrapperEl: a } = s;
  if (t.virtualTranslate) return i ? -n : n;
  if (t.cssMode) return n;
  let u = Re(a, e);
  return ((u += s.cssOverflowAdjustment()), i && (u = -u), u || 0);
}
function ds() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function cs() {
  return -this.snapGrid[0];
}
function fs(e, s) {
  const t = this,
    { rtlTranslate: i, params: n, wrapperEl: a, progress: u } = t;
  let d = 0,
    l = 0;
  const p = 0;
  (t.isHorizontal() ? (d = i ? -e : e) : (l = e), n.roundLengths && ((d = Math.floor(d)), (l = Math.floor(l))), (t.previousTranslate = t.translate), (t.translate = t.isHorizontal() ? d : l), n.cssMode ? (a[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal() ? -d : -l) : n.virtualTranslate || (t.isHorizontal() ? (d -= t.cssOverflowAdjustment()) : (l -= t.cssOverflowAdjustment()), (a.style.transform = `translate3d(${d}px, ${l}px, ${p}px)`)));
  let f;
  const c = t.maxTranslate() - t.minTranslate();
  (c === 0 ? (f = 0) : (f = (e - t.minTranslate()) / c), f !== u && t.updateProgress(e), t.emit("setTranslate", t.translate, s));
}
function us(e = 0, s = this.params.speed, t = !0, i = !0, n) {
  const a = this,
    { params: u, wrapperEl: d } = a;
  if (a.animating && u.preventInteractionOnTransition) return !1;
  const l = a.minTranslate(),
    p = a.maxTranslate();
  let f;
  if ((i && e > l ? (f = l) : i && e < p ? (f = p) : (f = e), a.updateProgress(f), u.cssMode)) {
    const c = a.isHorizontal();
    return (s === 0 ? (d[c ? "scrollLeft" : "scrollTop"] = -f) : d.scrollTo({ [c ? "left" : "top"]: -f, behavior: "smooth" }), !0);
  }
  return (
    s === 0
      ? (a.setTransition(0), a.setTranslate(f), t && (a.emit("beforeTransitionStart", s, n), a.emit("transitionEnd")))
      : (a.setTransition(s),
        a.setTranslate(f),
        t && (a.emit("beforeTransitionStart", s, n), a.emit("transitionStart")),
        a.animating ||
          ((a.animating = !0),
          a.onTranslateToWrapperTransitionEnd ||
            (a.onTranslateToWrapperTransitionEnd = function (v) {
              !a || a.destroyed || (v.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), (a.onTranslateToWrapperTransitionEnd = null), delete a.onTranslateToWrapperTransitionEnd, (a.animating = !1), t && a.emit("transitionEnd")));
            }),
          a.wrapperEl.addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd))),
    !0
  );
}
var ms = { getTranslate: os, setTranslate: fs, minTranslate: cs, maxTranslate: ds, translateTo: us };
function ps(e) {
  const { slidesGrid: s, params: t } = e,
    i = e.rtlTranslate ? e.translate : -e.translate;
  let n;
  for (let a = 0; a < s.length; a += 1) typeof s[a + 1] < "u" ? (i >= s[a] && i < s[a + 1] - (s[a + 1] - s[a]) / 2 ? (n = a) : i >= s[a] && i < s[a + 1] && (n = a + 1)) : i >= s[a] && (n = a);
  return (t.normalizeSlideIndex && (n < 0 || typeof n > "u") && (n = 0), n);
}
function hs(e) {
  const s = this,
    t = s.rtlTranslate ? s.translate : -s.translate,
    { snapGrid: i, params: n, activeIndex: a, realIndex: u, snapIndex: d } = s;
  let l = e,
    p;
  const f = (o) => {
    const r = s.virtual.slides;
    let g = o - (s.virtual.slidesBefore ?? 0);
    return (g < 0 && (g = r.length + g), g >= r.length && (g -= r.length), g);
  };
  if ((typeof l > "u" && (l = ps(s)), i.indexOf(t) >= 0)) p = i.indexOf(t);
  else {
    const o = Math.min(n.slidesPerGroupSkip, l);
    p = o + Math.floor((l - o) / n.slidesPerGroup);
  }
  if ((p >= i.length && (p = i.length - 1), l === a && !s.params.loop)) {
    p !== d && ((s.snapIndex = p), s.emit("snapIndexChange"));
    return;
  }
  if (l === a && s.params.loop && s.virtual && s.params.virtual?.enabled) {
    s.realIndex = f(l);
    return;
  }
  const c = s.grid && n.grid && n.grid.rows > 1;
  let v;
  if (s.virtual && n.virtual?.enabled) n.loop ? (v = f(l)) : (v = l);
  else if (c) {
    const o = s.slides.find((g) => g.column === l);
    let r = parseInt(o.getAttribute("data-swiper-slide-index"), 10);
    (Number.isNaN(r) && (r = Math.max(s.slides.indexOf(o), 0)), (v = Math.floor(r / n.grid.rows)));
  } else if (s.slides[l]) {
    const o = s.slides[l].getAttribute("data-swiper-slide-index");
    o ? (v = parseInt(o, 10)) : (v = l);
  } else v = l;
  (Object.assign(s, { previousSnapIndex: d, snapIndex: p, previousRealIndex: u, realIndex: v, previousIndex: a, activeIndex: l }), s.initialized && Ne(s), s.emit("activeIndexChange"), s.emit("snapIndexChange"), (s.initialized || s.params.runCallbacksOnInit) && (u !== v && s.emit("realIndexChange"), s.emit("slideChange")));
}
function gs(e) {
  const s = this,
    t = [],
    i = s.virtual && s.params.virtual?.enabled;
  let n = 0,
    a;
  typeof e == "number" ? s.setTransition(e) : e === !0 && s.setTransition(s.params.speed);
  const u = (d) => (i ? s.slides[s.getSlideIndexByData(d)] : s.slides[d]);
  if (s.params.slidesPerView !== "auto" && s.params.slidesPerView > 1)
    if (s.params.centeredSlides)
      (s.visibleSlides || []).forEach((d) => {
        t.push(d);
      });
    else
      for (a = 0; a < Math.ceil(s.params.slidesPerView); a += 1) {
        const d = s.activeIndex + a;
        if (d > s.slides.length && !i) break;
        const l = u(d);
        l && t.push(l);
      }
  else {
    const d = u(s.activeIndex);
    d && t.push(d);
  }
  for (a = 0; a < t.length; a += 1)
    if (typeof t[a] < "u") {
      const d = t[a].offsetHeight;
      n = d > n ? d : n;
    }
  (n || n === 0) && (s.wrapperEl.style.height = `${n}px`);
}
function vs(e, s) {
  const t = this,
    i = t.params;
  let n = e.closest(`.${i.slideClass}, swiper-slide`);
  !n &&
    t.isElement &&
    s &&
    s.length > 1 &&
    s.includes(e) &&
    [...s.slice(s.indexOf(e) + 1, s.length)].forEach((d) => {
      !n && d.matches && d.matches(`.${i.slideClass}, swiper-slide`) && (n = d);
    });
  let a = !1,
    u;
  if (n) {
    for (let d = 0; d < t.slides.length; d += 1)
      if (t.slides[d] === n) {
        ((a = !0), (u = d));
        break;
      }
  }
  if (n && a) ((t.clickedSlide = n), t.virtual && t.params.virtual?.enabled ? (t.clickedIndex = parseInt(n.getAttribute("data-swiper-slide-index"), 10)) : (t.clickedIndex = u));
  else {
    ((t.clickedSlide = void 0), (t.clickedIndex = void 0));
    return;
  }
  i.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
}
function ys(e) {
  const s = this;
  if (typeof e > "u") {
    const f = s.rtlTranslate ? -1 : 1;
    e = (s && s.translate && s.translate * f) || 0;
  }
  const t = s.params,
    i = s.maxTranslate() - s.minTranslate();
  let { progress: n, isBeginning: a, isEnd: u } = s,
    d = s.progressLoop;
  const l = a,
    p = u;
  if (i === 0) ((n = 0), (a = !0), (u = !0));
  else {
    n = (e - s.minTranslate()) / i;
    const f = Math.abs(e - s.minTranslate()) < 1,
      c = Math.abs(e - s.maxTranslate()) < 1;
    ((a = f || n <= 0), (u = c || n >= 1), f && (n = 0), c && (n = 1));
  }
  if (t.loop) {
    const f = s.getSlideIndexByData(0),
      c = s.getSlideIndexByData(s.slides.length - 1),
      v = s.slidesGrid[f],
      o = s.slidesGrid[c],
      r = s.slidesGrid[s.slidesGrid.length - 1],
      g = Math.abs(e);
    (g >= v ? (d = (g - v) / r) : (d = (g + r - o) / r), d > 1 && (d -= 1));
  }
  (Object.assign(s, { progress: n, progressLoop: d, isBeginning: a, isEnd: u }), (t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) && s.updateSlidesProgress(e), a && !l && s.emit("reachBeginning toEdge"), u && !p && s.emit("reachEnd toEdge"), ((l && !a) || (p && !u)) && s.emit("fromEdge"), s.emit("progress", n));
}
function bs() {
  const e = this;
  let s, t;
  const i = e.el;
  (typeof e.params.width < "u" && e.params.width !== null ? (s = e.params.width) : (s = i.clientWidth), typeof e.params.height < "u" && e.params.height !== null ? (t = e.params.height) : (t = i.clientHeight), !((s === 0 && e.isHorizontal()) || (t === 0 && e.isVertical())) && ((s = s - parseInt(le(i, "padding-left") || "0", 10) - parseInt(le(i, "padding-right") || "0", 10)), (t = t - parseInt(le(i, "padding-top") || "0", 10) - parseInt(le(i, "padding-bottom") || "0", 10)), Number.isNaN(s) && (s = 0), Number.isNaN(t) && (t = 0), Object.assign(e, { width: s, height: t, size: e.isHorizontal() ? s : t })));
}
function Ss() {
  const e = this;
  function s(E, I) {
    return parseFloat(E.getPropertyValue(e.getDirectionLabel(I)) || "0");
  }
  const t = e.params,
    { wrapperEl: i, slidesEl: n, rtlTranslate: a, wrongRTL: u } = e,
    d = !!(e.virtual && t.virtual?.enabled),
    l = d ? e.virtual.slides.length : e.slides.length,
    p = U(n, `.${e.params.slideClass}, swiper-slide`),
    f = d ? e.virtual.slides.length : p.length;
  let c = [];
  const v = [],
    o = [],
    r = (E) => (typeof E == "function" ? E.call(e) : E),
    g = r(t.slidesOffsetBefore),
    b = r(t.slidesOffsetAfter),
    S = e.snapGrid.length,
    h = e.slidesGrid.length,
    m = e.size - g - b;
  let y = t.spaceBetween,
    x = -g,
    A = 0,
    T = 0;
  if (typeof m > "u") return;
  (typeof y == "string" && y.indexOf("%") >= 0 ? (y = (parseFloat(y.replace("%", "")) / 100) * m) : typeof y == "string" && (y = parseFloat(y)),
    (e.virtualSize = -y - g - b),
    p.forEach((E) => {
      (a ? (E.style.marginLeft = "") : (E.style.marginRight = ""), (E.style.marginBottom = ""), (E.style.marginTop = ""));
    }),
    t.centeredSlides && t.cssMode && (oe(i, "--swiper-centered-offset-before", ""), oe(i, "--swiper-centered-offset-after", "")),
    t.cssMode && (oe(i, "--swiper-slides-offset-before", `${g}px`), oe(i, "--swiper-slides-offset-after", `${b}px`)));
  const z = t.grid && t.grid.rows > 1 && e.grid;
  z ? e.grid.initSlides(p) : e.grid && e.grid.unsetSlides();
  let M = 0;
  const w = t.slidesPerView === "auto" && t.breakpoints && Object.keys(t.breakpoints).filter((E) => typeof t.breakpoints[E]?.slidesPerView < "u").length > 0;
  for (let E = 0; E < f; E += 1) {
    M = 0;
    const I = p[E];
    if (!(I && (z && e.grid.updateSlide(E, I, p), le(I, "display") === "none"))) {
      if (d && t.slidesPerView === "auto") (t.virtual?.slidesPerViewAutoSlideSize && (M = t.virtual.slidesPerViewAutoSlideSize), M && I && (t.roundLengths && (M = Math.floor(M)), (I.style[e.getDirectionLabel("width")] = `${M}px`)));
      else if (t.slidesPerView === "auto") {
        w && (I.style[e.getDirectionLabel("width")] = "");
        const L = getComputedStyle(I),
          C = I.style.transform,
          O = I.style.webkitTransform;
        if ((C && (I.style.transform = "none"), O && (I.style.webkitTransform = "none"), t.roundLengths)) M = e.isHorizontal() ? Ye(I, "width") : Ye(I, "height");
        else {
          const P = s(L, "width"),
            k = s(L, "padding-left"),
            G = s(L, "padding-right"),
            $ = s(L, "margin-left"),
            V = s(L, "margin-right"),
            H = L.getPropertyValue("box-sizing");
          if (H && H === "border-box") M = P + $ + V;
          else {
            const { clientWidth: R, offsetWidth: F } = I;
            M = P + k + G + $ + V + (F - R);
          }
        }
        (C && (I.style.transform = C), O && (I.style.webkitTransform = O), t.roundLengths && (M = Math.floor(M)));
      } else ((M = (m - (t.slidesPerView - 1) * y) / t.slidesPerView), t.roundLengths && (M = Math.floor(M)), I && (I.style[e.getDirectionLabel("width")] = `${M}px`));
      (I && (I.swiperSlideSize = M), o.push(M), t.centeredSlides ? ((x = x + M / 2 + A / 2 + y), A === 0 && E !== 0 && (x = x - m / 2 - y), E === 0 && (x = x - m / 2 - y), Math.abs(x) < 1 / 1e3 && (x = 0), t.roundLengths && (x = Math.floor(x)), T % t.slidesPerGroup === 0 && c.push(x), v.push(x)) : (t.roundLengths && (x = Math.floor(x)), (T - Math.min(e.params.slidesPerGroupSkip, T)) % e.params.slidesPerGroup === 0 && c.push(x), v.push(x), (x = x + M + y)), (e.virtualSize += M + y), (A = M), (T += 1));
    }
  }
  if (((e.virtualSize = Math.max(e.virtualSize, m) + b), a && u && (t.effect === "slide" || t.effect === "coverflow") && (i.style.width = `${e.virtualSize + y}px`), t.setWrapperSize && (i.style[e.getDirectionLabel("width")] = `${e.virtualSize + y}px`), z && e.grid.updateWrapperSize(M, c), !t.centeredSlides)) {
    const E = t.slidesPerView !== "auto" && t.slidesPerView % 1 !== 0,
      I = t.snapToSlideEdge && !t.loop && (t.slidesPerView === "auto" || E);
    let L = c.length;
    if (I) {
      let O;
      if (t.slidesPerView === "auto") {
        O = 1;
        let P = 0;
        for (let k = o.length - 1; k >= 0 && ((P += o[k] + (k < o.length - 1 ? y : 0)), P <= m); k -= 1) O = o.length - k;
      } else O = Math.floor(t.slidesPerView);
      L = Math.max(f - O, 0);
    }
    const C = [];
    for (let O = 0; O < c.length; O += 1) {
      let P = c[O];
      (t.roundLengths && (P = Math.floor(P)), I ? O <= L && C.push(P) : c[O] <= e.virtualSize - m && C.push(P));
    }
    ((c = C), Math.floor(e.virtualSize - m) - Math.floor(c[c.length - 1]) > 1 && (I || c.push(e.virtualSize - m)));
  }
  if (d && t.loop) {
    const E = o[0] + y,
      I = e.virtual.slidesBefore ?? 0,
      L = e.virtual.slidesAfter ?? 0,
      C = I + L;
    if (t.slidesPerGroup > 1) {
      const O = Math.ceil(C / t.slidesPerGroup),
        P = E * t.slidesPerGroup;
      for (let k = 0; k < O; k += 1) c.push(c[c.length - 1] + P);
    }
    for (let O = 0; O < C; O += 1) (t.slidesPerGroup === 1 && c.push(c[c.length - 1] + E), v.push(v[v.length - 1] + E), (e.virtualSize += E));
  }
  if ((c.length === 0 && (c = [0]), y !== 0)) {
    const E = e.isHorizontal() && a ? "marginLeft" : e.getDirectionLabel("marginRight");
    p.filter((I, L) => (!t.cssMode || t.loop ? !0 : L !== p.length - 1)).forEach((I) => {
      I.style[E] = `${y}px`;
    });
  }
  if (t.centeredSlides && t.centeredSlidesBounds) {
    let E = 0;
    (o.forEach((L) => {
      E += L + (y || 0);
    }),
      (E -= y));
    const I = E > m ? E - m : 0;
    c = c.map((L) => (L <= 0 ? -g : L > I ? I + b : L));
  }
  if (t.centerInsufficientSlides) {
    let E = 0;
    if (
      (o.forEach((I) => {
        E += I + (y || 0);
      }),
      (E -= y),
      E < m)
    ) {
      const I = (m - E) / 2;
      (c.forEach((L, C) => {
        c[C] = L - I;
      }),
        v.forEach((L, C) => {
          v[C] = L + I;
        }));
    }
  }
  if ((Object.assign(e, { slides: p, snapGrid: c, slidesGrid: v, slidesSizesGrid: o }), t.centeredSlides && t.cssMode && !t.centeredSlidesBounds)) {
    (oe(i, "--swiper-centered-offset-before", `${-c[0]}px`), oe(i, "--swiper-centered-offset-after", `${e.size / 2 - o[o.length - 1] / 2}px`));
    const E = -e.snapGrid[0],
      I = -e.slidesGrid[0];
    ((e.snapGrid = e.snapGrid.map((L) => L + E)), (e.slidesGrid = e.slidesGrid.map((L) => L + I)));
  }
  if ((f !== l && e.emit("slidesLengthChange"), c.length !== S && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), v.length !== h && e.emit("slidesGridLengthChange"), t.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !d && !t.cssMode && (t.effect === "slide" || t.effect === "fade"))) {
    const E = `${t.containerModifierClass}backface-hidden`,
      I = e.el.classList.contains(E);
    f <= t.maxBackfaceHiddenSlides ? I || e.el.classList.add(E) : I && e.el.classList.remove(E);
  }
}
const Xe = (e, s, t) => {
  s && !e.classList.contains(t) ? e.classList.add(t) : !s && e.classList.contains(t) && e.classList.remove(t);
};
function Es() {
  const e = this,
    { slides: s, params: t, slidesEl: i, activeIndex: n } = e,
    a = !!(e.virtual && t.virtual?.enabled),
    u = e.grid && t.grid && t.grid.rows > 1,
    d = (c) => U(i, `.${t.slideClass}${c}, swiper-slide${c}`)[0];
  let l, p, f;
  if (a)
    if (t.loop) {
      const c = e.virtual.slides;
      let v = n - (e.virtual.slidesBefore ?? 0);
      (v < 0 && (v = c.length + v), v >= c.length && (v -= c.length), (l = d(`[data-swiper-slide-index="${v}"]`)));
    } else l = d(`[data-swiper-slide-index="${n}"]`);
  else u ? ((l = s.find((c) => c.column === n)), (f = s.find((c) => c.column === n + 1)), (p = s.find((c) => c.column === n - 1))) : (l = s[n]);
  (l && (u || ((f = pt(l, `.${t.slideClass}, swiper-slide`)[0]), t.loop && !f && (f = s[0]), (p = mt(l, `.${t.slideClass}, swiper-slide`)[0]), t.loop && !p === 0 && (p = s[s.length - 1]))),
    s.forEach((c) => {
      (Xe(c, c === l, t.slideActiveClass), Xe(c, c === f, t.slideNextClass), Xe(c, c === p, t.slidePrevClass));
    }),
    e.emitSlidesClasses());
}
function xs() {
  const e = this,
    s = e.slides,
    t = e.isElement ? (e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop) : 0;
  for (let i = 0; i < s.length; i += 1) s[i].swiperSlideOffset = (e.isHorizontal() ? s[i].offsetLeft : s[i].offsetTop) - t - e.cssOverflowAdjustment();
}
const Ke = (e, s, t) => {
  s && !e.classList.contains(t) ? e.classList.add(t) : !s && e.classList.contains(t) && e.classList.remove(t);
};
function Ts(e = (this && this.translate) || 0) {
  const s = this,
    t = s.params,
    { slides: i, rtlTranslate: n, snapGrid: a } = s;
  if (i.length === 0) return;
  typeof i[0].swiperSlideOffset > "u" && s.updateSlidesOffset();
  let u = -e;
  (n && (u = e), (s.visibleSlidesIndexes = []), (s.visibleSlides = []));
  let d = t.spaceBetween;
  typeof d == "string" && d.indexOf("%") >= 0 ? (d = (parseFloat(d.replace("%", "")) / 100) * s.size) : typeof d == "string" && (d = parseFloat(d));
  for (let l = 0; l < i.length; l += 1) {
    const p = i[l];
    let f = p.swiperSlideOffset ?? 0;
    t.cssMode && t.centeredSlides && (f -= i[0].swiperSlideOffset ?? 0);
    const c = p.swiperSlideSize ?? 0,
      v = (u + (t.centeredSlides ? s.minTranslate() : 0) - f) / (c + d),
      o = (u - a[0] + (t.centeredSlides ? s.minTranslate() : 0) - f) / (c + d),
      r = -(u - f),
      g = r + s.slidesSizesGrid[l],
      b = r >= 0 && r <= s.size - s.slidesSizesGrid[l],
      S = (r >= 0 && r < s.size - 1) || (g > 1 && g <= s.size) || (r <= 0 && g >= s.size);
    (S && (s.visibleSlides.push(p), s.visibleSlidesIndexes.push(l)), Ke(p, S, t.slideVisibleClass), Ke(p, b, t.slideFullyVisibleClass), (p.progress = n ? -v : v), (p.originalProgress = n ? -o : o));
  }
}
var Ms = { updateSize: bs, updateSlides: Ss, updateAutoHeight: gs, updateSlidesOffset: xs, updateSlidesProgress: Ts, updateProgress: ys, updateSlidesClasses: Es, updateActiveIndex: hs, updateClickedSlide: vs };
const Cs = { eventsEmitter: Lt, update: Ms, translate: ms, transition: ls, slide: is, loop: Wt, grabCursor: Yt, events: Xt, breakpoints: St, checkOverflow: xt, classes: Pt },
  _e = {};
class K {
  static extendedDefaults;
  static defaults;
  constructor(...s) {
    let t, i;
    if ((s.length === 1 && s[0] !== null && typeof s[0] == "object" && Object.prototype.toString.call(s[0]).slice(8, -1) === "Object" ? (i = s[0]) : ([t, i] = s), i || (i = {}), (i = J({}, i)), t && !i.el && (i.el = t), i.el && typeof i.el == "string" && typeof document < "u" && document.querySelectorAll(i.el).length > 1)) {
      const d = [];
      return (
        document.querySelectorAll(i.el).forEach((l) => {
          const p = J({}, i, { el: l });
          d.push(new K(p));
        }),
        d
      );
    }
    const n = this;
    ((n.__swiper__ = !0),
      (n.support = tt()),
      (n.device = st({ userAgent: i.userAgent ?? void 0 })),
      (n.browser = it()),
      (n.eventsListeners = {}),
      (n.eventsAnyListeners = []),
      (n.modules = [...(n.__modules__ || [])]),
      i.modules &&
        Array.isArray(i.modules) &&
        i.modules.forEach((d) => {
          const l = d;
          typeof l == "function" && n.modules.indexOf(l) < 0 && n.modules.push(l);
        }));
    const a = {};
    n.modules.forEach((d) => {
      d({ params: i, swiper: n, extendParams: qt(i, a), on: n.on.bind(n), once: n.once.bind(n), off: n.off.bind(n), emit: n.emit.bind(n) });
    });
    const u = J({}, nt, a);
    if (((n.params = J({}, u, _e, i)), (n.originalParams = J({}, n.params)), (n.passedParams = J({}, i)), n.params && n.params.on)) {
      const d = n.params.on;
      Object.keys(d).forEach((l) => {
        const p = d[l];
        p && n.on(l, p);
      });
    }
    return (
      n.params && n.params.onAny && n.onAny(n.params.onAny),
      Object.assign(n, {
        enabled: n.params.enabled,
        el: t,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return n.params.direction === "horizontal";
        },
        isVertical() {
          return n.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: n.params.allowSlideNext,
        allowSlidePrev: n.params.allowSlidePrev,
        touchEventsData: { isTouched: void 0, isMoved: void 0, allowTouchCallbacks: void 0, touchStartTime: void 0, isScrolling: void 0, currentTranslate: void 0, startTranslate: void 0, allowThresholdMove: void 0, focusableElements: n.params.focusableElements, lastClickTime: 0, clickTimeout: void 0, velocities: [], allowMomentumBounce: void 0, startMoving: void 0, pointerId: null, touchId: null },
        allowClick: !0,
        allowTouchMove: n.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      n.emit("_swiper"),
      n.params.init && n.init(),
      n
    );
  }
  getDirectionLabel(s) {
    return this.isHorizontal() ? s : { width: "height", "margin-top": "margin-left", "margin-bottom ": "margin-right", "margin-left": "margin-top", "margin-right": "margin-bottom", "padding-left": "padding-top", "padding-right": "padding-bottom", marginRight: "marginBottom" }[s];
  }
  isHorizontal() {
    return this.params.direction === "horizontal";
  }
  isVertical() {
    return this.params.direction === "vertical";
  }
  cssOverflowAdjustment() {
    return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
  }
  getSlideIndex(s) {
    const { slidesEl: t, params: i } = this,
      n = U(t, `.${i.slideClass}, swiper-slide`),
      a = Se(n[0]);
    return Se(s) - (a ?? 0);
  }
  getSlideIndexByData(s) {
    return this.getSlideIndex(this.slides.find((t) => Number(t.getAttribute("data-swiper-slide-index")) === s));
  }
  getSlideIndexWhenGrid(s) {
    return (this.grid && this.params.grid && this.params.grid.rows > 1 && (this.params.grid.fill === "column" ? (s = Math.floor(s / this.params.grid.rows)) : this.params.grid.fill === "row" && (s = s % Math.ceil(this.slides.length / this.params.grid.rows))), s);
  }
  recalcSlides() {
    const { slidesEl: s, params: t } = this;
    this.slides = U(s, `.${t.slideClass}, swiper-slide`);
  }
  enable() {
    this.enabled || ((this.enabled = !0), this.params.grabCursor && this.setGrabCursor(), this.emit("enable"));
  }
  disable() {
    this.enabled && ((this.enabled = !1), this.params.grabCursor && this.unsetGrabCursor(), this.emit("disable"));
  }
  setProgress(s, t) {
    s = Math.min(Math.max(s, 0), 1);
    const i = this.minTranslate(),
      a = (this.maxTranslate() - i) * s + i;
    (this.translateTo(a, typeof t > "u" ? 0 : t), this.updateActiveIndex(), this.updateSlidesClasses());
  }
  emitContainerClasses() {
    if (!this.params._emitClasses || !this.el) return;
    const s = this.el.className.split(" ").filter((t) => t.indexOf("swiper") === 0 || t.indexOf(this.params.containerModifierClass) === 0);
    this.emit("_containerClasses", s.join(" "));
  }
  getSlideClasses(s) {
    return this.destroyed
      ? ""
      : s.className
          .split(" ")
          .filter((t) => t.indexOf("swiper-slide") === 0 || t.indexOf(this.params.slideClass) === 0)
          .join(" ");
  }
  emitSlidesClasses() {
    if (!this.params._emitClasses || !this.el) return;
    const s = [];
    (this.slides.forEach((t) => {
      const i = this.getSlideClasses(t);
      (s.push({ slideEl: t, classNames: i }), this.emit("_slideClass", t, i));
    }),
      this.emit("_slideClasses", s));
  }
  slidesPerViewDynamic(s = "current", t = !1) {
    const { params: i, slides: n, slidesGrid: a, slidesSizesGrid: u, size: d, activeIndex: l } = this;
    let p = 1;
    if (typeof i.slidesPerView == "number") return i.slidesPerView;
    if (i.centeredSlides) {
      let f = n[l] ? Math.ceil(n[l].swiperSlideSize ?? 0) : 0,
        c = !1;
      for (let v = l + 1; v < n.length; v += 1) n[v] && !c && ((f += Math.ceil(n[v].swiperSlideSize ?? 0)), (p += 1), f > d && (c = !0));
      for (let v = l - 1; v >= 0; v -= 1) n[v] && !c && ((f += n[v].swiperSlideSize ?? 0), (p += 1), f > d && (c = !0));
    } else if (s === "current") for (let f = l + 1; f < n.length; f += 1) (t ? a[f] + u[f] - a[l] < d : a[f] - a[l] < d) && (p += 1);
    else for (let f = l - 1; f >= 0; f -= 1) a[l] - a[f] < d && (p += 1);
    return p;
  }
  update() {
    const s = this;
    if (!s || s.destroyed) return;
    const { snapGrid: t, params: i } = s;
    (i.breakpoints && s.setBreakpoint(),
      [...s.el.querySelectorAll('[loading="lazy"]')].forEach((u) => {
        u.complete && Ce(s, u);
      }),
      s.updateSize(),
      s.updateSlides(),
      s.updateProgress(),
      s.updateSlidesClasses());
    function n() {
      const u = s.rtlTranslate ? s.translate * -1 : s.translate,
        d = Math.min(Math.max(u, s.maxTranslate()), s.minTranslate());
      (s.setTranslate(d), s.updateActiveIndex(), s.updateSlidesClasses());
    }
    let a;
    if (i.freeMode?.enabled && !i.cssMode) (n(), i.autoHeight && s.updateAutoHeight());
    else {
      if ((i.slidesPerView === "auto" || i.slidesPerView > 1) && s.isEnd && !i.centeredSlides) {
        const u = s.virtual && i.virtual?.enabled ? s.virtual.slides.length : s.slides.length;
        a = s.slideTo(u - 1, 0, !1, !0);
      } else a = s.slideTo(s.activeIndex, 0, !1, !0);
      a || n();
    }
    (i.watchOverflow && t !== s.snapGrid && s.checkOverflow(), s.emit("update"));
  }
  changeDirection(s, t = !0) {
    const i = this,
      n = i.params.direction;
    return (
      s || (s = n === "horizontal" ? "vertical" : "horizontal"),
      s === n ||
        (s !== "horizontal" && s !== "vertical") ||
        (i.el.classList.remove(`${i.params.containerModifierClass}${n}`),
        i.el.classList.add(`${i.params.containerModifierClass}${s}`),
        i.emitContainerClasses(),
        (i.params.direction = s),
        i.slides.forEach((a) => {
          s === "vertical" ? (a.style.width = "") : (a.style.height = "");
        }),
        i.emit("changeDirection"),
        t && i.update()),
      i
    );
  }
  changeLanguageDirection(s) {
    const t = this;
    (t.rtl && s === "rtl") || (!t.rtl && s === "ltr") || ((t.rtl = s === "rtl"), (t.rtlTranslate = t.params.direction === "horizontal" && t.rtl), t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), (t.el.dir = "rtl")) : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), (t.el.dir = "ltr")), t.update());
  }
  mount(s) {
    const t = this;
    if (t.mounted) return !0;
    if (typeof document > "u") return !1;
    const i = s ?? t.params.el;
    let n = null;
    if ((typeof i == "string" ? (n = document.querySelector(i)) : i instanceof HTMLElement && (n = i), !n)) return !1;
    n.swiper = t;
    const a = n.parentNode;
    a && a.host && a.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
    const u = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let l = n && n.shadowRoot ? n.shadowRoot.querySelector(u()) : U(n, u())[0];
    !l &&
      t.params.createElements &&
      ((l = te("div", t.params.wrapperClass)),
      n.append(l),
      U(n, `.${t.params.slideClass}`).forEach((f) => {
        l.append(f);
      }));
    const p = t.isElement ? n.parentNode.host : null;
    return (Object.assign(t, { el: n, wrapperEl: l, slidesEl: t.isElement && !p.slideSlots ? p : l, hostEl: t.isElement ? p : n, mounted: !0, rtl: n.dir.toLowerCase() === "rtl" || le(n, "direction") === "rtl", rtlTranslate: t.params.direction === "horizontal" && (n.dir.toLowerCase() === "rtl" || le(n, "direction") === "rtl"), wrongRTL: le(l, "display") === "-webkit-box" }), !0);
  }
  init(s) {
    const t = this;
    if (t.initialized || t.mount(s) === !1) return t;
    (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual?.enabled ? t.slideTo((t.params.initialSlide ?? 0) + (t.virtual.slidesBefore ?? 0), 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(void 0, !0), t.attachEvents());
    const n = [...t.el.querySelectorAll('[loading="lazy"]')];
    return (
      t.isElement && n.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
      n.forEach((a) => {
        a.complete
          ? Ce(t, a)
          : a.addEventListener("load", (u) => {
              Ce(t, u.target);
            });
      }),
      Ne(t),
      (t.initialized = !0),
      Ne(t),
      t.emit("init"),
      t.emit("afterInit"),
      t
    );
  }
  destroy(s = !0, t = !0) {
    const i = this,
      { params: n, el: a, wrapperEl: u, slides: d } = i;
    return (
      typeof i.params > "u" ||
        i.destroyed ||
        (i.emit("beforeDestroy"),
        (i.initialized = !1),
        i.detachEvents(),
        n.loop && i.loopDestroy(),
        t &&
          (i.removeClasses(),
          a && typeof a != "string" && a.removeAttribute("style"),
          u && u.removeAttribute("style"),
          d &&
            d.length &&
            d.forEach((l) => {
              (l.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass), l.removeAttribute("style"), l.removeAttribute("data-swiper-slide-index"));
            })),
        i.emit("destroy"),
        Object.keys(i.eventsListeners).forEach((l) => {
          i.off(l);
        }),
        s !== !1 && (i.el && typeof i.el != "string" && (i.el.swiper = null), ot(i)),
        (i.destroyed = !0)),
      null
    );
  }
  static extendDefaults(s) {
    J(_e, s);
  }
  static installModule(s) {
    K.prototype.__modules__ || (K.prototype.__modules__ = []);
    const t = K.prototype.__modules__;
    typeof s == "function" && t.indexOf(s) < 0 && t.push(s);
  }
  static use(s) {
    return Array.isArray(s) ? (s.forEach((t) => K.installModule(t)), K) : (K.installModule(s), K);
  }
}
Object.defineProperty(K, "extendedDefaults", {
  get() {
    return _e;
  },
});
Object.defineProperty(K, "defaults", {
  get() {
    return nt;
  },
});
const Ze = Cs,
  Ps = K.prototype;
Object.keys(Ze).forEach((e) => {
  const s = Ze[e];
  Object.keys(s).forEach((t) => {
    Ps[t] = s[t];
  });
});
K.use([Ut, jt]);
const Ls = ({ swiper: e, extendParams: s, on: t, emit: i }) => {
    s({ virtual: { enabled: !1, slides: [], cache: !0, slidesPerViewAutoSlideSize: 320, renderSlide: null, renderExternal: null, renderExternalUpdate: !0, addSlidesBefore: 0, addSlidesAfter: 0 } });
    let n;
    e.virtual = { cache: {}, from: 0, to: 0, slides: [], offset: 0, slidesGrid: [] };
    function a() {
      return e.params.virtual;
    }
    let u;
    const d = () => (u ??= document.createElement("div"));
    function l(r, g) {
      const b = a();
      if (b.cache && e.virtual.cache[g]) return e.virtual.cache[g];
      let S;
      if (b.renderSlide) {
        const h = b.renderSlide.call(e, r, g);
        if (typeof h == "string") {
          const m = d();
          (ie(m, h), (S = m.children[0]));
        } else S = h;
      } else e.isElement ? (S = te("swiper-slide")) : (S = te("div", e.params.slideClass));
      return (S.setAttribute("data-swiper-slide-index", String(g)), b.renderSlide || ie(S, r), b.cache && (e.virtual.cache[g] = S), S);
    }
    function p(r, g, b) {
      const { slidesPerGroup: S, centeredSlides: h, slidesPerView: m, loop: y, initialSlide: x } = e.params;
      if (g && !y && (x ?? 0) > 0) return;
      const { addSlidesBefore: A, addSlidesAfter: T, slidesPerViewAutoSlideSize: z } = a(),
        { from: M, to: w, slides: E, slidesGrid: I, offset: L } = e.virtual;
      e.params.cssMode || e.updateActiveIndex();
      const C = typeof b > "u" ? e.activeIndex || 0 : b;
      let O;
      e.rtlTranslate ? (O = "right") : (O = e.isHorizontal() ? "left" : "top");
      let P;
      if (m === "auto")
        if (z) {
          let N = e.size;
          (N || (N = e.isHorizontal() ? e.el.getBoundingClientRect().width : e.el.getBoundingClientRect().height), (P = Math.max(1, Math.ceil(N / z))));
        } else P = 1;
      else P = m ?? 1;
      const k = S ?? 1;
      let G, $;
      h ? ((G = Math.floor(P / 2) + k + T), ($ = Math.floor(P / 2) + k + A)) : ((G = P + (k - 1) + T), ($ = (y ? P : k) + A));
      let V = C - $,
        H = C + G;
      y || ((V = Math.max(V, 0)), (H = Math.min(H, E.length - 1)));
      let R = (e.slidesGrid[V] || 0) - (e.slidesGrid[0] || 0);
      (y && C >= $ ? ((V -= $), h || (R += e.slidesGrid[0])) : y && C < $ && ((V = -$), h && (R += e.slidesGrid[0])), Object.assign(e.virtual, { from: V, to: H, offset: R, slidesGrid: e.slidesGrid, slidesBefore: $, slidesAfter: G }));
      function F() {
        (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), i("virtualUpdate"));
      }
      if (M === V && w === H && !r) {
        (e.slidesGrid !== I &&
          R !== L &&
          e.slides.forEach((N) => {
            N.style.setProperty(O, `${R - Math.abs(e.cssOverflowAdjustment())}px`);
          }),
          e.updateProgress(),
          i("virtualUpdate"));
        return;
      }
      const D = a();
      if (D.renderExternal) {
        const N = [];
        for (let W = V; W <= H; W += 1) N.push(E[W]);
        (D.renderExternal.call(e, { offset: R, from: V, to: H, slides: N }), D.renderExternalUpdate ? F() : i("virtualUpdate"));
        return;
      }
      const B = [],
        X = [],
        Y = (N) => {
          let W = N;
          return (N < 0 ? (W = E.length + N) : W >= E.length && (W = W - E.length), W);
        };
      if (r)
        e.slides
          .filter((N) => N.matches(`.${e.params.slideClass}, swiper-slide`))
          .forEach((N) => {
            N.remove();
          });
      else
        for (let N = M; N <= w; N += 1)
          if (N < V || N > H) {
            const W = Y(N);
            e.slides
              .filter((Z) => Z.matches(`.${e.params.slideClass}[data-swiper-slide-index="${W}"], swiper-slide[data-swiper-slide-index="${W}"]`))
              .forEach((Z) => {
                Z.remove();
              });
          }
      const q = y ? -E.length : 0,
        se = y ? E.length * 2 : E.length;
      for (let N = q; N < se; N += 1)
        if (N >= V && N <= H) {
          const W = Y(N);
          typeof w > "u" || r ? X.push(W) : (N > w && X.push(W), N < M && B.push(W));
        }
      if (
        (X.forEach((N) => {
          e.slidesEl.append(l(E[N], N));
        }),
        y)
      )
        for (let N = B.length - 1; N >= 0; N -= 1) {
          const W = B[N];
          e.slidesEl.prepend(l(E[W], W));
        }
      else
        (B.sort((N, W) => W - N),
          B.forEach((N) => {
            e.slidesEl.prepend(l(E[N], N));
          }));
      (U(e.slidesEl, ".swiper-slide, swiper-slide").forEach((N) => {
        N.style.setProperty(O, `${R - Math.abs(e.cssOverflowAdjustment())}px`);
      }),
        F());
    }
    function f(r) {
      if (r !== null && typeof r == "object" && "length" in r) {
        const g = r;
        for (let b = 0; b < g.length; b += 1) g[b] && e.virtual.slides.push(g[b]);
      } else e.virtual.slides.push(r);
      p(!0);
    }
    function c(r) {
      const g = e.activeIndex;
      let b = g + 1,
        S = 1;
      if (Array.isArray(r)) {
        for (let h = 0; h < r.length; h += 1) r[h] && e.virtual.slides.unshift(r[h]);
        ((b = g + r.length), (S = r.length));
      } else e.virtual.slides.unshift(r);
      if (a().cache) {
        const h = e.virtual.cache,
          m = {};
        (Object.keys(h).forEach((y) => {
          const x = h[Number(y)],
            A = x.getAttribute("data-swiper-slide-index");
          (A && x.setAttribute("data-swiper-slide-index", String(parseInt(A, 10) + S)), (m[parseInt(y, 10) + S] = x));
        }),
          (e.virtual.cache = m));
      }
      (p(!0), e.slideTo(b, 0));
    }
    function v(r) {
      if (typeof r > "u" || r === null) return;
      let g = e.activeIndex;
      const b = (S) => {
        Object.keys(e.virtual.cache).forEach((h) => {
          const m = Number(h);
          if (m > S) {
            const y = e.virtual.cache[m];
            ((e.virtual.cache[m - 1] = y), y.setAttribute("data-swiper-slide-index", String(m - 1)), delete e.virtual.cache[m]);
          }
        });
      };
      if (Array.isArray(r)) for (let S = r.length - 1; S >= 0; S -= 1) (a().cache && (delete e.virtual.cache[r[S]], b(r[S])), e.virtual.slides.splice(r[S], 1), r[S] < g && (g -= 1), (g = Math.max(g, 0)));
      else (a().cache && (delete e.virtual.cache[r], b(r)), e.virtual.slides.splice(r, 1), r < g && (g -= 1), (g = Math.max(g, 0)));
      (p(!0), e.slideTo(g, 0));
    }
    function o() {
      ((e.virtual.slides = []), a().cache && (e.virtual.cache = {}), p(!0), e.slideTo(0, 0));
    }
    (t("beforeInit", () => {
      if (!a().enabled) return;
      let r = !1;
      const g = e.passedParams.virtual;
      if (!g || typeof g != "object" || g.slides === void 0) {
        const S = [...e.slidesEl.children].filter((h) => h.matches(`.${e.params.slideClass}, swiper-slide`));
        S &&
          S.length &&
          ((e.virtual.slides = [...S]),
          (r = !0),
          S.forEach((h, m) => {
            (h.setAttribute("data-swiper-slide-index", String(m)), (e.virtual.cache[m] = h), h.remove());
          }));
      }
      (r || (e.virtual.slides = a().slides), e.classNames.push(`${e.params.containerModifierClass}virtual`), (e.params.watchSlidesProgress = !0), (e.originalParams.watchSlidesProgress = !0), p(!1, !0));
    }),
      t("setTranslate", () => {
        a().enabled &&
          (e.params.cssMode && !e._immediateVirtual
            ? (clearTimeout(n),
              (n = setTimeout(() => {
                p();
              }, 100)))
            : p());
      }),
      t("init update resize", () => {
        a().enabled && e.params.cssMode && oe(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`);
      }),
      Object.assign(e.virtual, { appendSlide: f, prependSlide: c, removeSlide: v, removeAllSlides: o, update: p }));
  },
  Is = ({ swiper: e, extendParams: s, on: t, emit: i }) => {
    s({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0, speed: void 0 } });
    function n() {
      return e.params.keyboard;
    }
    function a(l) {
      if (!e.enabled) return;
      const { rtlTranslate: p } = e,
        f = "originalEvent" in l && l.originalEvent ? l.originalEvent : l,
        c = f.keyCode || f.charCode,
        v = n(),
        o = !!v.pageUpDown,
        r = o && c === 33,
        g = o && c === 34,
        b = c === 37,
        S = c === 39,
        h = c === 38,
        m = c === 40;
      if ((!e.allowSlideNext && ((e.isHorizontal() && S) || (e.isVertical() && m) || g)) || (!e.allowSlidePrev && ((e.isHorizontal() && b) || (e.isVertical() && h) || r))) return !1;
      if (f.shiftKey || f.altKey || f.ctrlKey || f.metaKey) return;
      const y = document.activeElement;
      if (y && (y.isContentEditable || (y.nodeName && (y.nodeName.toLowerCase() === "input" || y.nodeName.toLowerCase() === "textarea")))) return;
      if (v.onlyInViewport && (r || g || b || S || h || m)) {
        let A = !1;
        if (de(e.el, `.${e.params.slideClass}, swiper-slide`).length > 0 && de(e.el, `.${e.params.slideActiveClass}`).length === 0) return;
        const T = e.el,
          z = T.clientWidth,
          M = T.clientHeight,
          w = window.innerWidth,
          E = window.innerHeight,
          I = Le(T);
        p && (I.left -= T.scrollLeft);
        const L = [
          [I.left, I.top],
          [I.left + z, I.top],
          [I.left, I.top + M],
          [I.left + z, I.top + M],
        ];
        for (let C = 0; C < L.length; C += 1) {
          const O = L[C];
          if (O[0] >= 0 && O[0] <= w && O[1] >= 0 && O[1] <= E) {
            if (O[0] === 0 && O[1] === 0) continue;
            A = !0;
          }
        }
        if (!A) return;
      }
      const x = v.speed;
      (e.isHorizontal() ? ((r || g || b || S) && f.cancelable && f.preventDefault(), (((g || S) && !p) || ((r || b) && p)) && e.slideNext(x), (((r || b) && !p) || ((g || S) && p)) && e.slidePrev(x)) : ((r || g || h || m) && f.cancelable && f.preventDefault(), (g || m) && e.slideNext(x), (r || h) && e.slidePrev(x)), i("keyPress", c));
    }
    function u() {
      e.keyboard.enabled || (document.addEventListener("keydown", a), (e.keyboard.enabled = !0));
    }
    function d() {
      e.keyboard.enabled && (document.removeEventListener("keydown", a), (e.keyboard.enabled = !1));
    }
    ((e.keyboard = { enabled: !1, enable: u, disable: d }),
      t("init", () => {
        n().enabled && u();
      }),
      t("destroy", () => {
        e.keyboard.enabled && d();
      }));
  },
  As = ({ swiper: e, extendParams: s, on: t, emit: i }) => {
    s({ mousewheel: { enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarget: "container", thresholdDelta: null, thresholdTime: null, noMousewheelClass: "swiper-no-mousewheel" } });
    let n,
      a = ee(),
      u,
      d = !1;
    const l = [];
    function p() {
      return e.params.mousewheel;
    }
    function f(m) {
      const T = m;
      let z = 0,
        M = 0,
        w = 0,
        E = 0;
      return (T.detail !== void 0 && (M = T.detail), T.wheelDelta !== void 0 && (M = -T.wheelDelta / 120), T.wheelDeltaY !== void 0 && (M = -T.wheelDeltaY / 120), T.wheelDeltaX !== void 0 && (z = -T.wheelDeltaX / 120), T.axis !== void 0 && T.HORIZONTAL_AXIS !== void 0 && T.axis === T.HORIZONTAL_AXIS && ((z = M), (M = 0)), (w = z * 10), (E = M * 10), T.deltaY !== void 0 && (E = T.deltaY), T.deltaX !== void 0 && (w = T.deltaX), T.shiftKey && !w && ((w = E), (E = 0)), (w || E) && T.deltaMode && (T.deltaMode === 1 ? ((w *= 40), (E *= 40)) : ((w *= 800), (E *= 800))), w && !z && (z = w < 1 ? -1 : 1), E && !M && (M = E < 1 ? -1 : 1), { spinX: z, spinY: M, pixelX: w, pixelY: E });
    }
    function c() {
      e.enabled && (d = !0);
    }
    function v() {
      e.enabled && (d = !1);
    }
    function o(m) {
      const y = p();
      return (y.thresholdDelta && m.delta < y.thresholdDelta) || (y.thresholdTime && ee() - a < y.thresholdTime) ? !1 : m.delta >= 6 && ee() - a < 60 ? !0 : (m.direction < 0 ? (!e.isEnd || e.params.loop) && !e.animating && (e.slideNext(), i("scroll", m.raw)) : (!e.isBeginning || e.params.loop) && !e.animating && (e.slidePrev(), i("scroll", m.raw)), (a = new window.Date().getTime()), !1);
    }
    function r(m) {
      const y = p();
      if (m.direction < 0) {
        if (e.isEnd && !e.params.loop && y.releaseOnEdges) return !0;
      } else if (e.isBeginning && !e.params.loop && y.releaseOnEdges) return !0;
      return !1;
    }
    function g(m) {
      let y = "originalEvent" in m && m.originalEvent ? m.originalEvent : m,
        x = !0;
      if (!e.enabled) return !1;
      const A = p();
      if (m.target.closest(`.${A.noMousewheelClass}`)) return !1;
      e.params.cssMode && y.preventDefault();
      let T = e.el;
      A.eventsTarget !== "container" && (T = document.querySelector(A.eventsTarget));
      const z = T && T.contains(y.target);
      if (!d && !z && !A.releaseOnEdges) return !0;
      let M = 0;
      const w = e.rtlTranslate ? -1 : 1,
        E = f(y);
      if (A.forceToAxis)
        if (e.isHorizontal())
          if (Math.abs(E.pixelX) > Math.abs(E.pixelY)) M = -E.pixelX * w;
          else return !0;
        else if (Math.abs(E.pixelY) > Math.abs(E.pixelX)) M = -E.pixelY;
        else return !0;
      else M = Math.abs(E.pixelX) > Math.abs(E.pixelY) ? -E.pixelX * w : -E.pixelY;
      if (M === 0) return !0;
      A.invert && (M = -M);
      let I = e.getTranslate() + M * (A.sensitivity ?? 1);
      (I >= e.minTranslate() && (I = e.minTranslate()), I <= e.maxTranslate() && (I = e.maxTranslate()), (x = e.params.loop ? !0 : !(I === e.minTranslate() || I === e.maxTranslate())), x && e.params.nested && y.stopPropagation());
      const L = e.params.freeMode;
      if (!e.params.freeMode || !L?.enabled) {
        const C = { time: ee(), delta: Math.abs(M), direction: Math.sign(M), raw: m };
        l.length >= 2 && l.shift();
        const O = l.length ? l[l.length - 1] : void 0;
        if ((l.push(C), O ? (C.direction !== O.direction || C.delta > O.delta || C.time > O.time + 150) && o(C) : o(C), r(C))) return !0;
      } else {
        const C = { time: ee(), delta: Math.abs(M), direction: Math.sign(M) },
          O = u && C.time < u.time + 500 && C.delta <= u.delta && C.direction === u.direction;
        if (!O) {
          u = void 0;
          let P = e.getTranslate() + M * (A.sensitivity ?? 1);
          const k = e.isBeginning,
            G = e.isEnd;
          if ((P >= e.minTranslate() && (P = e.minTranslate()), P <= e.maxTranslate() && (P = e.maxTranslate()), e.setTransition(0), e.setTranslate(P), e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses(), ((!k && e.isBeginning) || (!G && e.isEnd)) && e.updateSlidesClasses(), e.params.loop && e.loopFix({ direction: C.direction < 0 ? "next" : "prev", byMousewheel: !0 }), L?.sticky)) {
            (clearTimeout(n), (n = void 0), l.length >= 15 && l.shift());
            const V = l.length ? l[l.length - 1] : void 0,
              H = l[0];
            if ((l.push(C), V && (C.delta > V.delta || C.direction !== V.direction))) l.splice(0);
            else if (l.length >= 15 && H && C.time - H.time < 500 && H.delta - C.delta >= 1 && C.delta <= 6) {
              const R = M > 0 ? 0.8 : 0.2;
              ((u = C),
                l.splice(0),
                (n = he(() => {
                  e.destroyed || !e.params || e.slideToClosest(e.params.speed, !0, void 0, R);
                }, 0)));
            }
            n ||
              (n = he(() => {
                if (e.destroyed || !e.params) return;
                const R = 0.5;
                ((u = C), l.splice(0), e.slideToClosest(e.params.speed, !0, void 0, R));
              }, 500));
          }
          O || i("scroll", y);
          const $ = e.params.autoplay;
          if ((e.params.autoplay && $?.disableOnInteraction && e.autoplay.stop(), A.releaseOnEdges && (P === e.minTranslate() || P === e.maxTranslate()))) return !0;
        }
      }
      return (y.cancelable && y.preventDefault(), !1);
    }
    function b(m) {
      const y = p();
      let x = e.el;
      (y.eventsTarget !== "container" && (x = document.querySelector(y.eventsTarget)), x[m]("mouseenter", c), x[m]("mouseleave", v), x[m]("wheel", g));
    }
    function S() {
      return e.params.cssMode ? (e.wrapperEl.removeEventListener("wheel", g), !0) : e.mousewheel.enabled ? !1 : (b("addEventListener"), (e.mousewheel.enabled = !0), !0);
    }
    function h() {
      return e.params.cssMode ? (e.wrapperEl.addEventListener("wheel", g), !0) : e.mousewheel.enabled ? (b("removeEventListener"), (e.mousewheel.enabled = !1), !0) : !1;
    }
    (t("init", () => {
      const m = p();
      (!m.enabled && e.params.cssMode && h(), m.enabled && S());
    }),
      (e.mousewheel = { enabled: !1, enable: S, disable: h }),
      t("destroy", () => {
        (e.params.cssMode && S(), e.mousewheel.enabled && h());
      }));
  };
function Fe(e, s, t, i) {
  const n = t ?? {},
    a = s ?? {};
  return (
    e.params.createElements &&
      Object.keys(i).forEach((u) => {
        if (!n[u] && n.auto === !0) {
          let d = U(e.el, `.${i[u]}`)[0];
          (d || ((d = te("div", i[u])), (d.className = i[u]), e.el.append(d)), (n[u] = d), (a[u] = d));
        }
      }),
    n
  );
}
const Qe = '<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>',
  zs = ({ swiper: e, extendParams: s, on: t, emit: i }) => {
    (s({ navigation: { nextEl: null, prevEl: null, addIcons: !0, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock", navigationDisabledClass: "swiper-navigation-disabled" } }), (e.navigation = { nextEl: null, prevEl: null, arrowSvg: Qe }));
    function n() {
      return e.params.navigation;
    }
    function a(r) {
      let g;
      return r && typeof r == "string" && e.isElement && ((g = e.el.querySelector(r) || e.hostEl.querySelector(r)), g) ? g : (r && (typeof r == "string" && (g = [...document.querySelectorAll(r)]), e.params.uniqueNavElements && typeof r == "string" && g && g.length > 1 && e.el.querySelectorAll(r).length === 1 ? (g = e.el.querySelector(r)) : g && g.length === 1 && (g = g[0])), r && !g ? r : g);
    }
    function u(r, g) {
      const b = n();
      _(r).forEach((h) => {
        h && (h.classList[g ? "add" : "remove"](...b.disabledClass.split(" ")), h.tagName === "BUTTON" && (h.disabled = g), e.params.watchOverflow && e.enabled && h.classList[e.isLocked ? "add" : "remove"](b.lockClass));
      });
    }
    function d() {
      const { nextEl: r, prevEl: g } = e.navigation;
      if (e.params.loop) {
        (u(g, !1), u(r, !1));
        return;
      }
      (u(g, e.isBeginning && !e.params.rewind), u(r, e.isEnd && !e.params.rewind));
    }
    function l(r) {
      (r.preventDefault(), !(e.isBeginning && !e.params.loop && !e.params.rewind) && (e.slidePrev(), i("navigationPrev")));
    }
    function p(r) {
      (r.preventDefault(), !(e.isEnd && !e.params.loop && !e.params.rewind) && (e.slideNext(), i("navigationNext")));
    }
    function f() {
      e.params.navigation = Fe(e, e.originalParams.navigation, e.params.navigation, { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" });
      const r = n();
      if (!(r.nextEl || r.prevEl)) return;
      const g = a(r.nextEl),
        b = a(r.prevEl);
      Object.assign(e.navigation, { nextEl: g, prevEl: b });
      const S = _(g),
        h = _(b),
        m = (y, x) => {
          if (y) {
            if (r.addIcons && y.matches(".swiper-button-next,.swiper-button-prev") && !y.querySelector("svg")) {
              const A = document.createElement("div");
              ie(A, Qe);
              const T = A.querySelector("svg");
              (T && y.appendChild(T), A.remove());
            }
            y.addEventListener("click", x === "next" ? p : l);
          }
          !e.enabled && y && y.classList.add(...r.lockClass.split(" "));
        };
      (S.forEach((y) => m(y, "next")), h.forEach((y) => m(y, "prev")));
    }
    function c() {
      const r = n(),
        { nextEl: g, prevEl: b } = e.navigation,
        S = _(g),
        h = _(b),
        m = (y, x) => {
          (y.removeEventListener("click", x === "next" ? p : l), y.classList.remove(...r.disabledClass.split(" ")));
        };
      (S.forEach((y) => m(y, "next")), h.forEach((y) => m(y, "prev")));
    }
    (t("init", () => {
      n().enabled === !1 ? o() : (f(), d());
    }),
      t("toEdge fromEdge lock unlock", () => {
        d();
      }),
      t("destroy", () => {
        c();
      }),
      t("enable disable", () => {
        const r = n(),
          { nextEl: g, prevEl: b } = e.navigation,
          S = _(g),
          h = _(b);
        if (e.enabled) {
          d();
          return;
        }
        [...S, ...h].filter((m) => !!m).forEach((m) => m.classList.add(r.lockClass));
      }),
      t("click", (r, g) => {
        const b = n(),
          { nextEl: S, prevEl: h } = e.navigation,
          m = _(S),
          y = _(h),
          x = g.target;
        let A = y.includes(x) || m.includes(x);
        if (e.isElement && !A) {
          const T = g.composedPath ? g.composedPath() : [];
          T.length && (A = T.find((z) => m.includes(z) || y.includes(z)));
        }
        if (b.hideOnClick && !A) {
          if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === x || e.pagination.el.contains(x))) return;
          let T;
          (m.length ? (T = m[0].classList.contains(b.hiddenClass)) : y.length && (T = y[0].classList.contains(b.hiddenClass)), i(T === !0 ? "navigationShow" : "navigationHide"), [...m, ...y].filter((z) => !!z).forEach((z) => z.classList.toggle(b.hiddenClass)));
        }
      }));
    const v = () => {
        const r = n();
        (e.el.classList.remove(...r.navigationDisabledClass.split(" ")), f(), d());
      },
      o = () => {
        const r = n();
        (e.el.classList.add(...r.navigationDisabledClass.split(" ")), c());
      };
    Object.assign(e.navigation, { enable: v, disable: o, update: d, init: f, destroy: c });
  };
function ae(e = "") {
  return `.${e
    .trim()
    .replace(/([.:!+/()[\]#>~*^$|=,'"@{}\\])/g, "\\$1")
    .replace(/ /g, ".")}`;
}
const Je = (e) => !!e.virtual && !!e.params.virtual?.enabled,
  Os = (e) => !!e.params.freeMode?.enabled,
  ws = ({ swiper: e, extendParams: s, on: t, emit: i }) => {
    const n = "swiper-pagination";
    (s({ pagination: { el: null, bulletElement: "span", clickable: !1, hideOnClick: !1, renderBullet: null, renderProgressbar: null, renderFraction: null, renderCustom: null, progressbarOpposite: !1, type: "bullets", dynamicBullets: !1, dynamicMainBullets: 1, formatFractionCurrent: (h) => h, formatFractionTotal: (h) => h, bulletClass: `${n}-bullet`, bulletActiveClass: `${n}-bullet-active`, modifierClass: `${n}-`, currentClass: `${n}-current`, totalClass: `${n}-total`, hiddenClass: `${n}-hidden`, progressbarFillClass: `${n}-progressbar-fill`, progressbarOppositeClass: `${n}-progressbar-opposite`, clickableClass: `${n}-clickable`, lockClass: `${n}-lock`, horizontalClass: `${n}-horizontal`, verticalClass: `${n}-vertical`, paginationDisabledClass: `${n}-disabled` } }), (e.pagination = { el: null, bullets: [] }));
    let a,
      u = 0;
    function d() {
      return e.params.pagination;
    }
    function l() {
      return !d().el || !e.pagination.el || (Array.isArray(e.pagination.el) && e.pagination.el.length === 0);
    }
    function p(h, m) {
      const { bulletActiveClass: y } = d();
      if (!h) return;
      let x = h[`${m === "prev" ? "previous" : "next"}ElementSibling`];
      x && (x.classList.add(`${y}-${m}`), (x = x[`${m === "prev" ? "previous" : "next"}ElementSibling`]), x && x.classList.add(`${y}-${m}-${m}`));
    }
    function f(h, m, y) {
      if (((h = h % y), (m = m % y), m === h + 1)) return "next";
      if (m === h - 1) return "previous";
    }
    function c(h) {
      const y = h.target.closest(ae(d().bulletClass));
      if (!y) return;
      h.preventDefault();
      const x = (Se(y) ?? 0) * (e.params.slidesPerGroup ?? 1);
      if (e.params.loop) {
        if (e.realIndex === x) return;
        const A = f(e.realIndex, x, e.slides.length);
        A === "next" ? e.slideNext() : A === "previous" ? e.slidePrev() : e.slideToLoop(x);
      } else e.slideTo(x);
    }
    function v() {
      const h = e.rtl,
        m = d();
      if (l()) return;
      const y = _(e.pagination.el);
      let x, A;
      const T = Je(e) ? e.virtual.slides.length : e.slides.length,
        z = e.params.loop ? Math.ceil(T / (e.params.slidesPerGroup ?? 1)) : e.snapGrid.length;
      if ((e.params.loop ? ((A = e.previousRealIndex || 0), (x = (e.params.slidesPerGroup ?? 1) > 1 ? Math.floor(e.realIndex / (e.params.slidesPerGroup ?? 1)) : e.realIndex)) : typeof e.snapIndex < "u" ? ((x = e.snapIndex), (A = e.previousSnapIndex)) : ((A = e.previousIndex || 0), (x = e.activeIndex || 0)), m.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0)) {
        const M = e.pagination.bullets;
        let w = 0,
          E = 0,
          I = 0;
        if (m.dynamicBullets) {
          a = Ye(M[0], e.isHorizontal() ? "width" : "height");
          const L = e.isHorizontal() ? "width" : "height";
          (y.forEach((C) => {
            C.style[L] = `${(a ?? 0) * (m.dynamicMainBullets + 4)}px`;
          }),
            m.dynamicMainBullets > 1 && A !== void 0 && ((u += x - (A || 0)), u > m.dynamicMainBullets - 1 ? (u = m.dynamicMainBullets - 1) : u < 0 && (u = 0)),
            (w = Math.max(x - u, 0)),
            (E = w + (Math.min(M.length, m.dynamicMainBullets) - 1)),
            (I = (E + w) / 2));
        }
        if (
          (M.forEach((L) => {
            const C = ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((O) => `${m.bulletActiveClass}${O}`).flatMap((O) => (typeof O == "string" && O.includes(" ") ? O.split(" ") : [O]));
            L.classList.remove(...C);
          }),
          y.length > 1)
        )
          M.forEach((L) => {
            const C = Se(L);
            (C === x ? L.classList.add(...m.bulletActiveClass.split(" ")) : e.isElement && L.setAttribute("part", "bullet"), m.dynamicBullets && C !== void 0 && (C >= w && C <= E && L.classList.add(...`${m.bulletActiveClass}-main`.split(" ")), C === w && p(L, "prev"), C === E && p(L, "next")));
          });
        else {
          const L = M[x];
          if (
            (L && L.classList.add(...m.bulletActiveClass.split(" ")),
            e.isElement &&
              M.forEach((C, O) => {
                C.setAttribute("part", O === x ? "bullet-active" : "bullet");
              }),
            m.dynamicBullets)
          ) {
            const C = M[w],
              O = M[E];
            for (let P = w; P <= E; P += 1) M[P] && M[P].classList.add(...`${m.bulletActiveClass}-main`.split(" "));
            (p(C, "prev"), p(O, "next"));
          }
        }
        if (m.dynamicBullets) {
          const L = Math.min(M.length, m.dynamicMainBullets + 4),
            C = ((a ?? 0) * L - (a ?? 0)) / 2 - I * (a ?? 0),
            O = h ? "right" : "left",
            P = e.isHorizontal() ? O : "top";
          M.forEach((k) => {
            k.style[P] = `${C}px`;
          });
        }
      }
      y.forEach((M, w) => {
        if (
          (m.type === "fraction" &&
            (M.querySelectorAll(ae(m.currentClass)).forEach((E) => {
              E.textContent = String(m.formatFractionCurrent(x + 1));
            }),
            M.querySelectorAll(ae(m.totalClass)).forEach((E) => {
              E.textContent = String(m.formatFractionTotal(z));
            })),
          m.type === "progressbar")
        ) {
          let E;
          m.progressbarOpposite ? (E = e.isHorizontal() ? "vertical" : "horizontal") : (E = e.isHorizontal() ? "horizontal" : "vertical");
          const I = (x + 1) / z;
          let L = 1,
            C = 1;
          (E === "horizontal" ? (L = I) : (C = I),
            M.querySelectorAll(ae(m.progressbarFillClass)).forEach((O) => {
              ((O.style.transform = `translate3d(0,0,0) scaleX(${L}) scaleY(${C})`), (O.style.transitionDuration = `${e.params.speed}ms`));
            }));
        }
        (m.type === "custom" && m.renderCustom ? (ie(M, m.renderCustom(e, x + 1, z)), w === 0 && i("paginationRender", M)) : (w === 0 && i("paginationRender", M), i("paginationUpdate", M)), e.params.watchOverflow && e.enabled && M.classList[e.isLocked ? "add" : "remove"](m.lockClass));
      });
    }
    function o() {
      const h = d();
      if (l()) return;
      const m = e.params.grid,
        y = Je(e) ? e.virtual.slides.length : e.grid && m?.rows && m.rows > 1 ? e.slides.length / Math.ceil(m.rows) : e.slides.length,
        x = _(e.pagination.el);
      let A = "";
      if (h.type === "bullets") {
        let T = e.params.loop ? Math.ceil(y / (e.params.slidesPerGroup ?? 1)) : e.snapGrid.length;
        e.params.freeMode && Os(e) && T > y && (T = y);
        for (let z = 0; z < T; z += 1) h.renderBullet ? (A += h.renderBullet.call(e, z, h.bulletClass)) : (A += `<${h.bulletElement} ${e.isElement ? 'part="bullet"' : ""} class="${h.bulletClass}"></${h.bulletElement}>`);
      }
      (h.type === "fraction" && (h.renderFraction ? (A = h.renderFraction.call(e, h.currentClass, h.totalClass)) : (A = `<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`)),
        h.type === "progressbar" && (h.renderProgressbar ? (A = h.renderProgressbar.call(e, h.progressbarFillClass)) : (A = `<span class="${h.progressbarFillClass}"></span>`)),
        (e.pagination.bullets = []),
        x.forEach((T) => {
          (h.type !== "custom" && ie(T, A || ""), h.type === "bullets" && e.pagination.bullets.push(...Array.from(T.querySelectorAll(ae(h.bulletClass)))));
        }),
        h.type !== "custom" && i("paginationRender", x[0]));
    }
    function r() {
      e.params.pagination = Fe(e, e.originalParams.pagination, e.params.pagination, { el: "swiper-pagination" });
      const h = d();
      if (!h.el) return;
      let m;
      if ((typeof h.el == "string" && e.isElement && (m = e.el.querySelector(h.el)), !m && typeof h.el == "string" && (m = [...document.querySelectorAll(h.el)]), m || (m = h.el), !m || (Array.isArray(m) && m.length === 0))) return;
      if (e.params.uniqueNavElements && typeof h.el == "string" && Array.isArray(m) && m.length > 1 && ((m = [...e.el.querySelectorAll(h.el)]), m.length > 1)) {
        const x = m.find((A) => de(A, ".swiper")[0] === e.el);
        x && (m = x);
      }
      (Array.isArray(m) && m.length === 1 && (m = m[0]),
        Object.assign(e.pagination, { el: m }),
        _(m).forEach((x) => {
          (h.type === "bullets" && h.clickable && x.classList.add(...(h.clickableClass || "").split(" ")), x.classList.add(h.modifierClass + h.type), x.classList.add(e.isHorizontal() ? h.horizontalClass : h.verticalClass), h.type === "bullets" && h.dynamicBullets && (x.classList.add(`${h.modifierClass}${h.type}-dynamic`), (u = 0), h.dynamicMainBullets < 1 && (h.dynamicMainBullets = 1)), h.type === "progressbar" && h.progressbarOpposite && x.classList.add(h.progressbarOppositeClass), h.clickable && x.addEventListener("click", c), e.enabled || x.classList.add(h.lockClass));
        }));
    }
    function g() {
      const h = d();
      if (l()) return;
      const m = e.pagination.el;
      (m &&
        _(m).forEach((x) => {
          (x.classList.remove(h.hiddenClass), x.classList.remove(h.modifierClass + h.type), x.classList.remove(e.isHorizontal() ? h.horizontalClass : h.verticalClass), h.clickable && (x.classList.remove(...(h.clickableClass || "").split(" ")), x.removeEventListener("click", c)));
        }),
        e.pagination.bullets && e.pagination.bullets.forEach((y) => y.classList.remove(...h.bulletActiveClass.split(" "))));
    }
    (t("changeDirection", () => {
      if (!e.pagination || !e.pagination.el) return;
      const h = d();
      _(e.pagination.el).forEach((y) => {
        (y.classList.remove(h.horizontalClass, h.verticalClass), y.classList.add(e.isHorizontal() ? h.horizontalClass : h.verticalClass));
      });
    }),
      t("init", () => {
        d().enabled === !1 ? S() : (r(), o(), v());
      }),
      t("activeIndexChange", () => {
        typeof e.snapIndex > "u" && v();
      }),
      t("snapIndexChange", () => {
        v();
      }),
      t("snapGridLengthChange", () => {
        (o(), v());
      }),
      t("destroy", () => {
        g();
      }),
      t("enable disable", () => {
        const { el: h } = e.pagination;
        if (h) {
          const m = d();
          _(h).forEach((x) => x.classList[e.enabled ? "remove" : "add"](m.lockClass));
        }
      }),
      t("lock unlock", () => {
        v();
      }),
      t("click", (h, m) => {
        const y = m.target,
          x = _(e.pagination.el),
          A = d();
        if (A.el && A.hideOnClick && x && x.length > 0 && !y.classList.contains(A.bulletClass)) {
          if (e.navigation && ((e.navigation.nextEl && y === e.navigation.nextEl) || (e.navigation.prevEl && y === e.navigation.prevEl))) return;
          const T = x[0].classList.contains(A.hiddenClass);
          (i(T === !0 ? "paginationShow" : "paginationHide"), x.forEach((z) => z.classList.toggle(A.hiddenClass)));
        }
      }));
    const b = () => {
        const h = d();
        e.el.classList.remove(h.paginationDisabledClass);
        const { el: m } = e.pagination;
        (m && _(m).forEach((x) => x.classList.remove(h.paginationDisabledClass)), r(), o(), v());
      },
      S = () => {
        const h = d();
        e.el.classList.add(h.paginationDisabledClass);
        const { el: m } = e.pagination;
        (m && _(m).forEach((x) => x.classList.add(h.paginationDisabledClass)), g());
      };
    Object.assign(e.pagination, { enable: b, disable: S, render: o, update: v, init: r, destroy: g });
  },
  Ds = ({ swiper: e, extendParams: s, on: t, emit: i }) => {
    let n = !1,
      a = null,
      u = null,
      d = 0,
      l = 0,
      p = 0,
      f = 0;
    (s({ scrollbar: { el: null, dragSize: "auto", hide: !1, draggable: !1, snapOnRelease: !0, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag", scrollbarDisabledClass: "swiper-scrollbar-disabled", horizontalClass: "swiper-scrollbar-horizontal", verticalClass: "swiper-scrollbar-vertical" } }), (e.scrollbar = { el: null, dragEl: null }));
    function c() {
      return e.params.scrollbar;
    }
    function v() {
      const E = c();
      if (!E.el || !e.scrollbar.el) return;
      const { scrollbar: I, rtlTranslate: L } = e,
        { dragEl: C, el: O } = I,
        P = e.params.loop ? (e.progressLoop ?? 0) : e.progress;
      let k = l,
        G = (p - l) * P;
      (L ? ((G = -G), G > 0 ? ((k = l - G), (G = 0)) : -G + l > p && (k = p + G)) : G < 0 ? ((k = l + G), (G = 0)) : G + l > p && (k = p - G),
        e.isHorizontal() ? ((C.style.transform = `translate3d(${G}px, 0, 0)`), (C.style.width = `${k}px`)) : ((C.style.transform = `translate3d(0px, ${G}px, 0)`), (C.style.height = `${k}px`)),
        E.hide &&
          (a && clearTimeout(a),
          (O.style.opacity = "1"),
          (a = setTimeout(() => {
            ((O.style.opacity = "0"), (O.style.transitionDuration = "400ms"));
          }, 1e3))));
    }
    function o(E) {
      !c().el || !e.scrollbar.el || (e.scrollbar.dragEl.style.transitionDuration = `${E}ms`);
    }
    function r() {
      const E = c();
      if (!E.el || !e.scrollbar.el) return;
      const { scrollbar: I } = e,
        { dragEl: L, el: C } = I;
      ((L.style.width = ""), (L.style.height = ""), (p = e.isHorizontal() ? C.offsetWidth : C.offsetHeight), (f = e.size / (e.virtualSize + (e.params.slidesOffsetBefore ?? 0) - (e.params.centeredSlides ? e.snapGrid[0] : 0))), E.dragSize === "auto" ? (l = p * f) : (l = parseInt(String(E.dragSize), 10)), e.isHorizontal() ? (L.style.width = `${l}px`) : (L.style.height = `${l}px`), f >= 1 ? (C.style.display = "none") : (C.style.display = ""), E.hide && (C.style.opacity = "0"), e.params.watchOverflow && e.enabled && I.el.classList[e.isLocked ? "add" : "remove"](E.lockClass));
    }
    function g(E) {
      return e.isHorizontal() ? (E.clientX ?? E.touches?.[0]?.clientX ?? 0) : (E.clientY ?? E.touches?.[0]?.clientY ?? 0);
    }
    function b(E) {
      const { scrollbar: I, rtlTranslate: L } = e,
        { el: C } = I;
      let O;
      ((O = (g(E) - Le(C)[e.isHorizontal() ? "left" : "top"] - (d !== null ? d : l / 2)) / (p - l)), (O = Math.max(Math.min(O, 1), 0)), L && (O = 1 - O));
      const P = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * O;
      (e.updateProgress(P), e.setTranslate(P), e.updateActiveIndex(), e.updateSlidesClasses());
    }
    function S(E) {
      const I = c(),
        { scrollbar: L, wrapperEl: C } = e,
        { el: O, dragEl: P } = L;
      ((n = !0), (d = E.target === P ? g(E) - E.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"] : null), E.preventDefault(), E.stopPropagation(), (C.style.transitionDuration = "100ms"), (P.style.transitionDuration = "100ms"), b(E), u && clearTimeout(u), (O.style.transitionDuration = "0ms"), I.hide && (O.style.opacity = "1"), e.params.cssMode && (e.wrapperEl.style.scrollSnapType = "none"), i("scrollbarDragStart", E));
    }
    function h(E) {
      const { scrollbar: I, wrapperEl: L } = e,
        { el: C, dragEl: O } = I;
      n && (E.cancelable && E.preventDefault(), b(E), (L.style.transitionDuration = "0ms"), (C.style.transitionDuration = "0ms"), (O.style.transitionDuration = "0ms"), i("scrollbarDragMove", E));
    }
    function m(E) {
      const I = c(),
        { scrollbar: L, wrapperEl: C } = e,
        { el: O } = L;
      n &&
        ((n = !1),
        e.params.cssMode && ((e.wrapperEl.style.scrollSnapType = ""), (C.style.transitionDuration = "")),
        I.hide &&
          (u && clearTimeout(u),
          (u = he(() => {
            ((O.style.opacity = "0"), (O.style.transitionDuration = "400ms"));
          }, 1e3))),
        i("scrollbarDragEnd", E),
        I.snapOnRelease && e.slideToClosest());
    }
    function y(E) {
      const { scrollbar: I, params: L } = e,
        C = I.el;
      if (!C) return;
      const O = L.passiveListeners ? { passive: !1, capture: !1 } : !1,
        P = L.passiveListeners ? { passive: !0, capture: !1 } : !1,
        k = E === "on" ? "addEventListener" : "removeEventListener";
      (C[k]("pointerdown", S, O), document[k]("pointermove", h, O), document[k]("pointerup", m, P));
    }
    function x() {
      !c().el || !e.scrollbar.el || y("on");
    }
    function A() {
      !c().el || !e.scrollbar.el || y("off");
    }
    function T() {
      const { scrollbar: E, el: I } = e;
      e.params.scrollbar = Fe(e, e.originalParams.scrollbar, e.params.scrollbar, { el: "swiper-scrollbar" });
      const L = c();
      if (!L.el) return;
      let C;
      if ((typeof L.el == "string" && e.isElement ? (C = e.el.querySelector(L.el)) : (C = L.el), !C && typeof L.el == "string")) {
        if (((C = document.querySelectorAll(L.el)), !C.length)) return;
      } else C || (C = L.el);
      (e.params.uniqueNavElements && typeof L.el == "string" && C.length > 1 && I.querySelectorAll(L.el).length === 1 && (C = I.querySelector(L.el)), C.length > 0 && (C = C[0]));
      const O = C;
      O.classList.add(e.isHorizontal() ? L.horizontalClass : L.verticalClass);
      let P = null;
      (O && ((P = O.querySelector(ae(L.dragClass))), P || ((P = te("div", L.dragClass)), O.append(P))), Object.assign(E, { el: O, dragEl: P }), L.draggable && x(), O && O.classList[e.enabled ? "remove" : "add"](...re(L.lockClass)));
    }
    function z() {
      const E = c(),
        I = e.scrollbar.el;
      (I && I.classList.remove(...re(e.isHorizontal() ? E.horizontalClass : E.verticalClass)), A());
    }
    (t("changeDirection", () => {
      if (!e.scrollbar || !e.scrollbar.el) return;
      const E = c();
      _(e.scrollbar.el).forEach((L) => {
        (L.classList.remove(E.horizontalClass, E.verticalClass), L.classList.add(e.isHorizontal() ? E.horizontalClass : E.verticalClass));
      });
    }),
      t("init", () => {
        c().enabled === !1 ? w() : (T(), r(), v());
      }),
      t("update resize observerUpdate lock unlock changeDirection", () => {
        r();
      }),
      t("setTranslate", () => {
        v();
      }),
      t("setTransition", (E, I) => {
        o(I);
      }),
      t("enable disable", () => {
        const { el: E } = e.scrollbar;
        E && E.classList[e.enabled ? "remove" : "add"](...re(c().lockClass));
      }),
      t("destroy", () => {
        z();
      }));
    const M = () => {
        const E = c();
        (e.el.classList.remove(...re(E.scrollbarDisabledClass)), e.scrollbar.el && e.scrollbar.el.classList.remove(...re(E.scrollbarDisabledClass)), T(), r(), v());
      },
      w = () => {
        const E = c();
        (e.el.classList.add(...re(E.scrollbarDisabledClass)), e.scrollbar.el && e.scrollbar.el.classList.add(...re(E.scrollbarDisabledClass)), z());
      };
    Object.assign(e.scrollbar, { enable: M, disable: w, updateSize: r, setTranslate: v, init: T, destroy: z });
  },
  ks = ({ swiper: e, extendParams: s, on: t }) => {
    s({ parallax: { enabled: !1 } });
    function i() {
      return e.params.parallax;
    }
    const n = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
      a = (l, p) => {
        const { rtl: f } = e,
          c = f ? -1 : 1,
          v = l.getAttribute("data-swiper-parallax") || "0";
        let o = l.getAttribute("data-swiper-parallax-x"),
          r = l.getAttribute("data-swiper-parallax-y");
        const g = l.getAttribute("data-swiper-parallax-scale"),
          b = l.getAttribute("data-swiper-parallax-opacity"),
          S = l.getAttribute("data-swiper-parallax-rotate");
        if ((o || r ? ((o = o || "0"), (r = r || "0")) : e.isHorizontal() ? ((o = v), (r = "0")) : ((r = v), (o = "0")), o.indexOf("%") >= 0 ? (o = `${parseInt(o, 10) * p * c}%`) : (o = `${Number(o) * p * c}px`), r.indexOf("%") >= 0 ? (r = `${parseInt(r, 10) * p}%`) : (r = `${Number(r) * p}px`), typeof b < "u" && b !== null)) {
          const m = Number(b),
            y = m - (m - 1) * (1 - Math.abs(p));
          l.style.opacity = String(y);
        }
        let h = `translate3d(${o}, ${r}, 0px)`;
        if (typeof g < "u" && g !== null) {
          const m = Number(g),
            y = m - (m - 1) * (1 - Math.abs(p));
          h += ` scale(${y})`;
        }
        if (S && typeof S < "u" && S !== null) {
          const m = Number(S) * p * -1;
          h += ` rotate(${m}deg)`;
        }
        l.style.transform = h;
      },
      u = () => {
        const { el: l, slides: p, progress: f, snapGrid: c } = e,
          v = U(l, n);
        (e.isElement && v.push(...U(e.hostEl, n)),
          v.forEach((o) => {
            a(o, f);
          }),
          p.forEach((o, r) => {
            let g = o.progress ?? 0;
            ((e.params.slidesPerGroup ?? 1) > 1 && e.params.slidesPerView !== "auto" && (g += Math.ceil(r / 2) - f * (c.length - 1)),
              (g = Math.min(Math.max(g, -1), 1)),
              o.querySelectorAll(`${n}, [data-swiper-parallax-rotate]`).forEach((S) => {
                a(S, g);
              }));
          }));
      },
      d = (l = e.params.speed ?? 300) => {
        const { el: p, hostEl: f } = e,
          c = [...p.querySelectorAll(n)];
        (e.isElement && c.push(...f.querySelectorAll(n)),
          c.forEach((v) => {
            const o = v.getAttribute("data-swiper-parallax-duration");
            let r = (o ? parseInt(o, 10) : 0) || l;
            (l === 0 && (r = 0), (v.style.transitionDuration = `${r}ms`));
          }));
      };
    (t("beforeInit", () => {
      i().enabled && ((e.params.watchSlidesProgress = !0), (e.originalParams.watchSlidesProgress = !0));
    }),
      t("init", () => {
        i().enabled && u();
      }),
      t("setTranslate", () => {
        i().enabled && u();
      }),
      t("setTransition", (l, p) => {
        i().enabled && d(p);
      }));
  },
  $s = ({ swiper: e, extendParams: s, on: t, emit: i }) => {
    (s({ zoom: { enabled: !1, limitToOriginalSize: !1, maxRatio: 3, minRatio: 1, panOnMouseMove: !1, toggle: !0, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } }), (e.zoom = { enabled: !1 }));
    function n() {
      return e.params.zoom;
    }
    let a = 1,
      u = !1,
      d = !1,
      l = { x: 0, y: 0 };
    const p = -3;
    let f = !1,
      c = !1;
    const v = [],
      o = { originX: 0, originY: 0, slideEl: void 0, slideWidth: void 0, slideHeight: void 0, imageEl: void 0, imageWrapEl: void 0, maxRatio: 3 },
      r = { isTouched: void 0, isMoved: void 0, currentX: void 0, currentY: void 0, minX: void 0, minY: void 0, maxX: void 0, maxY: void 0, width: void 0, height: void 0, startX: void 0, startY: void 0, touchesStart: {}, touchesCurrent: {} },
      g = { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 };
    let b = 1;
    Object.defineProperty(e.zoom, "scale", {
      get() {
        return b;
      },
      set(D) {
        if (b !== D) {
          const B = o.imageEl,
            X = o.slideEl;
          i("zoomChange", D, B, X);
        }
        b = D;
      },
    });
    function S() {
      if (v.length < 2) return 1;
      const D = v[0].pageX,
        B = v[0].pageY,
        X = v[1].pageX,
        Y = v[1].pageY;
      return Math.sqrt((X - D) ** 2 + (Y - B) ** 2);
    }
    function h() {
      const D = n(),
        B = o.imageWrapEl?.getAttribute("data-swiper-zoom"),
        X = B != null ? Number(B) : D.maxRatio,
        Y = o.imageEl;
      if (D.limitToOriginalSize && Y && Y.naturalWidth) {
        const q = Y.naturalWidth / Y.offsetWidth;
        return Math.min(q, X);
      }
      return X;
    }
    function m() {
      if (v.length < 2 || !o.imageEl) return [null, null];
      const D = o.imageEl.getBoundingClientRect();
      return [(v[0].pageX + (v[1].pageX - v[0].pageX) / 2 - D.x - window.scrollX) / a, (v[0].pageY + (v[1].pageY - v[0].pageY) / 2 - D.y - window.scrollY) / a];
    }
    function y() {
      return e.isElement ? "swiper-slide" : `.${e.params.slideClass}`;
    }
    function x(D) {
      const B = y(),
        X = D.target;
      return X ? !!(X.matches(B) || e.slides.filter((Y) => Y.contains(X)).length > 0) : !1;
    }
    function A(D) {
      const B = `.${n().containerClass}`,
        X = D.target;
      return X ? !!(X.matches(B) || [...e.hostEl.querySelectorAll(B)].filter((Y) => Y.contains(X)).length > 0) : !1;
    }
    function T(D) {
      if ((D.pointerType === "mouse" && v.splice(0, v.length), !x(D))) return;
      const B = n();
      if (((f = !1), (c = !1), v.push(D), !(v.length < 2))) {
        if (((f = !0), (o.scaleStart = S()), !o.slideEl)) {
          const X = D.target;
          ((o.slideEl = X?.closest(`.${e.params.slideClass}, swiper-slide`) ?? void 0), o.slideEl || (o.slideEl = e.slides[e.activeIndex]));
          let Y = o.slideEl?.querySelector(`.${B.containerClass}`) ?? null;
          if ((Y && (Y = Y.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0] ?? null), (o.imageEl = Y ?? void 0), Y ? (o.imageWrapEl = de(Y, `.${B.containerClass}`)[0] ?? void 0) : (o.imageWrapEl = void 0), !o.imageWrapEl)) {
            o.imageEl = void 0;
            return;
          }
          o.maxRatio = h();
        }
        if (o.imageEl) {
          const [X, Y] = m();
          ((o.originX = X ?? 0), (o.originY = Y ?? 0), (o.imageEl.style.transitionDuration = "0ms"));
        }
        u = !0;
      }
    }
    function z(D) {
      if (!x(D)) return;
      const B = n(),
        X = e.zoom,
        Y = v.findIndex((q) => q.pointerId === D.pointerId);
      (Y >= 0 && (v[Y] = D), !(v.length < 2) && ((c = !0), (o.scaleMove = S()), o.imageEl && ((X.scale = (o.scaleMove / (o.scaleStart ?? 1)) * a), X.scale > o.maxRatio && (X.scale = o.maxRatio - 1 + (X.scale - o.maxRatio + 1) ** 0.5), X.scale < B.minRatio && (X.scale = B.minRatio + 1 - (B.minRatio - X.scale + 1) ** 0.5), (o.imageEl.style.transform = `translate3d(0,0,0) scale(${X.scale})`))));
    }
    function M(D) {
      if (!x(D) || (D.pointerType === "mouse" && D.type === "pointerout")) return;
      const B = n(),
        X = e.zoom,
        Y = v.findIndex((q) => q.pointerId === D.pointerId);
      (Y >= 0 && v.splice(Y, 1), !(!f || !c) && ((f = !1), (c = !1), o.imageEl && ((X.scale = Math.max(Math.min(X.scale, o.maxRatio), B.minRatio)), (o.imageEl.style.transitionDuration = `${e.params.speed}ms`), (o.imageEl.style.transform = `translate3d(0,0,0) scale(${X.scale})`), (a = X.scale), (u = !1), X.scale > 1 && o.slideEl ? o.slideEl.classList.add(`${B.zoomedSlideClass}`) : X.scale <= 1 && o.slideEl && o.slideEl.classList.remove(`${B.zoomedSlideClass}`), X.scale === 1 && ((o.originX = 0), (o.originY = 0), (o.slideEl = void 0)))));
    }
    let w;
    function E() {
      e.touchEventsData.preventTouchMoveFromPointerMove = !1;
    }
    function I() {
      (w !== void 0 && clearTimeout(w),
        (e.touchEventsData.preventTouchMoveFromPointerMove = !0),
        (w = setTimeout(() => {
          e.destroyed || E();
        })));
    }
    function L(D) {
      const B = e.device;
      if (!o.imageEl || r.isTouched) return;
      (B.android && D.cancelable && D.preventDefault(), (r.isTouched = !0));
      const X = v.length > 0 ? v[0] : D;
      ((r.touchesStart.x = X.pageX), (r.touchesStart.y = X.pageY));
    }
    function C(D) {
      const X = D.pointerType === "mouse" && n().panOnMouseMove;
      if (!x(D) || !A(D)) return;
      const Y = e.zoom;
      if (!o.imageEl) return;
      if (!r.isTouched || !o.slideEl) {
        X && k(D);
        return;
      }
      if (X) {
        k(D);
        return;
      }
      r.isMoved || ((r.width = o.imageEl.offsetWidth || o.imageEl.clientWidth), (r.height = o.imageEl.offsetHeight || o.imageEl.clientHeight), (r.startX = Re(o.imageWrapEl, "x") || 0), (r.startY = Re(o.imageWrapEl, "y") || 0), (o.slideWidth = o.slideEl.offsetWidth), (o.slideHeight = o.slideEl.offsetHeight), (o.imageWrapEl.style.transitionDuration = "0ms"));
      const q = r.width * Y.scale,
        se = r.height * Y.scale;
      ((r.minX = Math.min(o.slideWidth / 2 - q / 2, 0)), (r.maxX = -r.minX), (r.minY = Math.min(o.slideHeight / 2 - se / 2, 0)), (r.maxY = -r.minY), (r.touchesCurrent.x = v.length > 0 ? v[0].pageX : D.pageX), (r.touchesCurrent.y = v.length > 0 ? v[0].pageY : D.pageY), Math.max(Math.abs(r.touchesCurrent.x - (r.touchesStart.x ?? 0)), Math.abs(r.touchesCurrent.y - (r.touchesStart.y ?? 0))) > 5 && (e.allowClick = !1));
      const W = r.startX ?? 0,
        Z = r.startY ?? 0;
      if (!r.isMoved && !u) {
        if (e.isHorizontal() && ((Math.floor(r.minX) === Math.floor(W) && r.touchesCurrent.x < (r.touchesStart.x ?? 0)) || (Math.floor(r.maxX) === Math.floor(W) && r.touchesCurrent.x > (r.touchesStart.x ?? 0)))) {
          ((r.isTouched = !1), E());
          return;
        }
        if (!e.isHorizontal() && ((Math.floor(r.minY) === Math.floor(Z) && r.touchesCurrent.y < (r.touchesStart.y ?? 0)) || (Math.floor(r.maxY) === Math.floor(Z) && r.touchesCurrent.y > (r.touchesStart.y ?? 0)))) {
          ((r.isTouched = !1), E());
          return;
        }
      }
      (D.cancelable && D.preventDefault(), D.stopPropagation(), I(), (r.isMoved = !0));
      const j = (Y.scale - a) / (o.maxRatio - n().minRatio),
        { originX: Q, originY: ne } = o;
      ((r.currentX = r.touchesCurrent.x - (r.touchesStart.x ?? 0) + W + j * (r.width - Q * 2)),
        (r.currentY = r.touchesCurrent.y - (r.touchesStart.y ?? 0) + Z + j * (r.height - ne * 2)),
        r.currentX < r.minX && (r.currentX = r.minX + 1 - (r.minX - r.currentX + 1) ** 0.8),
        r.currentX > r.maxX && (r.currentX = r.maxX - 1 + (r.currentX - r.maxX + 1) ** 0.8),
        r.currentY < r.minY && (r.currentY = r.minY + 1 - (r.minY - r.currentY + 1) ** 0.8),
        r.currentY > r.maxY && (r.currentY = r.maxY - 1 + (r.currentY - r.maxY + 1) ** 0.8),
        g.prevPositionX || (g.prevPositionX = r.touchesCurrent.x),
        g.prevPositionY || (g.prevPositionY = r.touchesCurrent.y),
        g.prevTime || (g.prevTime = Date.now()),
        (g.x = (r.touchesCurrent.x - g.prevPositionX) / (Date.now() - g.prevTime) / 2),
        (g.y = (r.touchesCurrent.y - g.prevPositionY) / (Date.now() - g.prevTime) / 2),
        Math.abs(r.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0),
        Math.abs(r.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0),
        (g.prevPositionX = r.touchesCurrent.x),
        (g.prevPositionY = r.touchesCurrent.y),
        (g.prevTime = Date.now()),
        (o.imageWrapEl.style.transform = `translate3d(${r.currentX}px, ${r.currentY}px,0)`));
    }
    function O() {
      const D = e.zoom;
      if (((v.length = 0), !o.imageEl)) return;
      if (!r.isTouched || !r.isMoved) {
        ((r.isTouched = !1), (r.isMoved = !1));
        return;
      }
      ((r.isTouched = !1), (r.isMoved = !1));
      let B = 300,
        X = 300;
      const Y = g.x ?? 0,
        q = g.y ?? 0,
        se = Y * B,
        N = r.currentX + se,
        W = q * X,
        Z = r.currentY + W;
      (Y !== 0 && (B = Math.abs((N - r.currentX) / Y)), q !== 0 && (X = Math.abs((Z - r.currentY) / q)));
      const j = Math.max(B, X);
      ((r.currentX = N), (r.currentY = Z));
      const Q = r.width * D.scale,
        ne = r.height * D.scale;
      ((r.minX = Math.min(o.slideWidth / 2 - Q / 2, 0)), (r.maxX = -r.minX), (r.minY = Math.min(o.slideHeight / 2 - ne / 2, 0)), (r.maxY = -r.minY), (r.currentX = Math.max(Math.min(r.currentX, r.maxX), r.minX)), (r.currentY = Math.max(Math.min(r.currentY, r.maxY), r.minY)), (o.imageWrapEl.style.transitionDuration = `${j}ms`), (o.imageWrapEl.style.transform = `translate3d(${r.currentX}px, ${r.currentY}px,0)`));
    }
    function P() {
      const D = e.zoom;
      o.slideEl && e.activeIndex !== e.slides.indexOf(o.slideEl) && (o.imageEl && (o.imageEl.style.transform = "translate3d(0,0,0) scale(1)"), o.imageWrapEl && (o.imageWrapEl.style.transform = "translate3d(0,0,0)"), o.slideEl.classList.remove(`${n().zoomedSlideClass}`), (D.scale = 1), (a = 1), (o.slideEl = void 0), (o.imageEl = void 0), (o.imageWrapEl = void 0), (o.originX = 0), (o.originY = 0));
    }
    function k(D) {
      if (a <= 1 || !o.imageWrapEl || !x(D) || !A(D)) return;
      const B = window.getComputedStyle(o.imageWrapEl).transform,
        X = new window.DOMMatrix(B);
      if (!d) {
        ((d = !0), (l.x = D.clientX), (l.y = D.clientY), (r.startX = X.e), (r.startY = X.f), (r.width = o.imageEl.offsetWidth || o.imageEl.clientWidth), (r.height = o.imageEl.offsetHeight || o.imageEl.clientHeight), (o.slideWidth = o.slideEl.offsetWidth), (o.slideHeight = o.slideEl.offsetHeight));
        return;
      }
      const Y = (D.clientX - l.x) * p,
        q = (D.clientY - l.y) * p,
        se = r.width * a,
        N = r.height * a,
        W = o.slideWidth,
        Z = o.slideHeight,
        j = Math.min(W / 2 - se / 2, 0),
        Q = -j,
        ne = Math.min(Z / 2 - N / 2, 0),
        xe = -ne,
        fe = Math.max(Math.min(r.startX + Y, Q), j),
        ue = Math.max(Math.min(r.startY + q, xe), ne);
      ((o.imageWrapEl.style.transitionDuration = "0ms"), (o.imageWrapEl.style.transform = `translate3d(${fe}px, ${ue}px, 0)`), (l.x = D.clientX), (l.y = D.clientY), (r.startX = fe), (r.startY = ue), (r.currentX = fe), (r.currentY = ue));
    }
    function G(D) {
      const B = e.zoom,
        X = n();
      if (!o.slideEl) {
        if ((D && typeof D != "number" && "target" in D && D.target && (o.slideEl = D.target.closest(`.${e.params.slideClass}, swiper-slide`) ?? void 0), !o.slideEl)) {
          const qe = e.params.virtual;
          qe && qe.enabled && e.virtual ? (o.slideEl = U(e.slidesEl, `.${e.params.slideActiveClass}`)[0] ?? void 0) : (o.slideEl = e.slides[e.activeIndex]);
        }
        let pe = o.slideEl?.querySelector(`.${X.containerClass}`) ?? null;
        (pe && (pe = pe.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0] ?? null), (o.imageEl = pe ?? void 0), pe ? (o.imageWrapEl = de(pe, `.${X.containerClass}`)[0] ?? void 0) : (o.imageWrapEl = void 0));
      }
      if (!o.imageEl || !o.imageWrapEl || !o.slideEl) return;
      ((o.maxRatio = h()), e.params.cssMode && ((e.wrapperEl.style.overflow = "hidden"), (e.wrapperEl.style.touchAction = "none")), o.slideEl.classList.add(`${X.zoomedSlideClass}`));
      let Y, q, se, N, W, Z, j, Q, ne, xe, fe, ue, Te, Me, ze, Oe, we, De;
      const lt = D && typeof D != "number";
      typeof r.touchesStart.x > "u" && lt ? ((Y = D.pageX), (q = D.pageY)) : ((Y = r.touchesStart.x), (q = r.touchesStart.y));
      const ke = a,
        me = typeof D == "number" ? D : null;
      a === 1 && me && ((Y = void 0), (q = void 0), (r.touchesStart.x = void 0), (r.touchesStart.y = void 0));
      const We = h();
      ((B.scale = me || We),
        (a = me || We),
        D && !(a === 1 && me) ? ((we = o.slideEl.offsetWidth), (De = o.slideEl.offsetHeight), (se = Le(o.slideEl).left + window.scrollX), (N = Le(o.slideEl).top + window.scrollY), (W = se + we / 2 - (Y ?? 0)), (Z = N + De / 2 - (q ?? 0)), (ne = o.imageEl.offsetWidth || o.imageEl.clientWidth), (xe = o.imageEl.offsetHeight || o.imageEl.clientHeight), (fe = ne * B.scale), (ue = xe * B.scale), (Te = Math.min(we / 2 - fe / 2, 0)), (Me = Math.min(De / 2 - ue / 2, 0)), (ze = -Te), (Oe = -Me), ke > 0 && me && typeof r.currentX == "number" && typeof r.currentY == "number" ? ((j = (r.currentX * B.scale) / ke), (Q = (r.currentY * B.scale) / ke)) : ((j = W * B.scale), (Q = Z * B.scale)), j < Te && (j = Te), j > ze && (j = ze), Q < Me && (Q = Me), Q > Oe && (Q = Oe)) : ((j = 0), (Q = 0)),
        me && B.scale === 1 && ((o.originX = 0), (o.originY = 0)),
        (r.currentX = j),
        (r.currentY = Q),
        (o.imageWrapEl.style.transitionDuration = "300ms"),
        (o.imageWrapEl.style.transform = `translate3d(${j}px, ${Q}px,0)`),
        (o.imageEl.style.transitionDuration = "300ms"),
        (o.imageEl.style.transform = `translate3d(0,0,0) scale(${B.scale})`));
    }
    function $() {
      const D = e.zoom,
        B = n();
      if (!o.slideEl) {
        const X = e.params.virtual;
        X && X.enabled && e.virtual ? (o.slideEl = U(e.slidesEl, `.${e.params.slideActiveClass}`)[0] ?? void 0) : (o.slideEl = e.slides[e.activeIndex]);
        let Y = o.slideEl?.querySelector(`.${B.containerClass}`) ?? null;
        (Y && (Y = Y.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0] ?? null), (o.imageEl = Y ?? void 0), Y ? (o.imageWrapEl = de(Y, `.${B.containerClass}`)[0] ?? void 0) : (o.imageWrapEl = void 0));
      }
      !o.imageEl || !o.imageWrapEl || !o.slideEl || ((o.maxRatio = h()), e.params.cssMode && ((e.wrapperEl.style.overflow = ""), (e.wrapperEl.style.touchAction = "")), (D.scale = 1), (a = 1), (r.currentX = void 0), (r.currentY = void 0), (r.touchesStart.x = void 0), (r.touchesStart.y = void 0), (o.imageWrapEl.style.transitionDuration = "300ms"), (o.imageWrapEl.style.transform = "translate3d(0,0,0)"), (o.imageEl.style.transitionDuration = "300ms"), (o.imageEl.style.transform = "translate3d(0,0,0) scale(1)"), o.slideEl.classList.remove(`${B.zoomedSlideClass}`), (o.slideEl = void 0), (o.originX = 0), (o.originY = 0), B.panOnMouseMove && ((l = { x: 0, y: 0 }), d && ((d = !1), (r.startX = 0), (r.startY = 0))));
    }
    function V(D) {
      const B = e.zoom;
      B.scale && B.scale !== 1 ? $() : G(D);
    }
    function H() {
      const D = e.params.passiveListeners ? { passive: !0, capture: !1 } : !1,
        B = e.params.passiveListeners ? { passive: !1, capture: !0 } : !0;
      return { passiveListener: D, activeListenerWithCapture: B };
    }
    function R() {
      const D = e.zoom;
      if (D.enabled) return;
      D.enabled = !0;
      const { passiveListener: B, activeListenerWithCapture: X } = H();
      (e.wrapperEl.addEventListener("pointerdown", T, B),
        e.wrapperEl.addEventListener("pointermove", z, X),
        ["pointerup", "pointercancel", "pointerout"].forEach((Y) => {
          e.wrapperEl.addEventListener(Y, M, B);
        }),
        e.wrapperEl.addEventListener("pointermove", C, X));
    }
    function F() {
      const D = e.zoom;
      if (!D.enabled) return;
      D.enabled = !1;
      const { passiveListener: B, activeListenerWithCapture: X } = H();
      (e.wrapperEl.removeEventListener("pointerdown", T, B),
        e.wrapperEl.removeEventListener("pointermove", z, X),
        ["pointerup", "pointercancel", "pointerout"].forEach((Y) => {
          e.wrapperEl.removeEventListener(Y, M, B);
        }),
        e.wrapperEl.removeEventListener("pointermove", C, X));
    }
    (t("init", () => {
      n().enabled && R();
    }),
      t("destroy", () => {
        F();
      }),
      t("touchStart", (D, B) => {
        e.zoom.enabled && L(B);
      }),
      t("touchEnd", () => {
        e.zoom.enabled && O();
      }),
      t("doubleTap", (D, B) => {
        !e.animating && n().enabled && e.zoom.enabled && n().toggle && V(B);
      }),
      t("transitionEnd", () => {
        e.zoom.enabled && n().enabled && P();
      }),
      t("slideChange", () => {
        e.zoom.enabled && n().enabled && e.params.cssMode && P();
      }),
      Object.assign(e.zoom, { enable: R, disable: F, in: G, out: $, toggle: V }));
  };
class et {
  x;
  y;
  lastIndex;
  binarySearch;
  constructor(s, t) {
    let i, n, a;
    ((this.binarySearch = (u, d) => {
      for (n = -1, i = u.length; i - n > 1;) ((a = (i + n) >> 1), u[a] <= d ? (n = a) : (i = a));
      return i;
    }),
      (this.x = s),
      (this.y = t),
      (this.lastIndex = s.length - 1));
  }
  interpolate(s) {
    if (!s) return 0;
    const t = this.binarySearch(this.x, s),
      i = t - 1;
    return ((s - this.x[i]) * (this.y[t] - this.y[i])) / (this.x[t] - this.x[i]) + this.y[i];
  }
}
const Gs = ({ swiper: e, extendParams: s, on: t }) => {
    (s({ controller: { control: void 0, inverse: !1, by: "slide" } }), (e.controller = { control: void 0 }));
    function i() {
      return e.params.controller;
    }
    function n(l) {
      e.controller.spline = e.params.loop ? new et(e.slidesGrid, l.slidesGrid) : new et(e.snapGrid, l.snapGrid);
    }
    function a(l, p) {
      const f = e.controller.control;
      let c, v;
      const o = e.constructor;
      function r(g) {
        if (g.destroyed) return;
        const b = e.rtlTranslate ? -e.translate : e.translate,
          S = i();
        (S.by === "slide" ? (n(g), (v = -e.controller.spline.interpolate(-b))) : (v = 0), (!v || S.by === "container") && ((c = (g.maxTranslate() - g.minTranslate()) / (e.maxTranslate() - e.minTranslate())), (Number.isNaN(c) || !Number.isFinite(c)) && (c = 1), (v = (b - e.minTranslate()) * c + g.minTranslate())), S.inverse && (v = g.maxTranslate() - v), g.updateProgress(v), g.setTranslate(v, e), g.updateActiveIndex(), g.updateSlidesClasses());
      }
      if (Array.isArray(f))
        for (let g = 0; g < f.length; g += 1) {
          const b = f[g];
          b && b !== p && b instanceof o && r(b);
        }
      else f instanceof o && p !== f && r(f);
    }
    function u(l, p) {
      const f = e.constructor,
        c = e.controller.control;
      function v(o) {
        o.destroyed ||
          (o.setTransition(l, e),
          l !== 0 &&
            (o.transitionStart(),
            o.params.autoHeight &&
              he(() => {
                o.updateAutoHeight();
              }),
            be(o.wrapperEl, () => {
              c && o.transitionEnd();
            })));
      }
      if (Array.isArray(c))
        for (let o = 0; o < c.length; o += 1) {
          const r = c[o];
          r && r !== p && r instanceof f && v(r);
        }
      else c instanceof f && p !== c && v(c);
    }
    function d() {
      e.controller.control && e.controller.spline && ((e.controller.spline = void 0), delete e.controller.spline);
    }
    (t("beforeInit", () => {
      const l = i().control;
      if (typeof window < "u" && (typeof l == "string" || l instanceof HTMLElement)) {
        (typeof l == "string" ? [...document.querySelectorAll(l)] : [l]).forEach((f) => {
          e.controller.control || (e.controller.control = []);
          const c = e.controller.control;
          if (f && f.swiper) c.push(f.swiper);
          else if (f) {
            const v = `${e.params.eventsPrefix}init`,
              o = (r) => {
                const g = r.detail;
                (g && g[0] && c.push(g[0]), e.update(), f.removeEventListener(v, o));
              };
            f.addEventListener(v, o);
          }
        });
        return;
      }
      e.controller.control = l;
    }),
      t("update", () => {
        d();
      }),
      t("resize", () => {
        d();
      }),
      t("observerUpdate", () => {
        d();
      }),
      t("setTranslate", (l, p, f) => {
        e.controller.control && ((!Array.isArray(e.controller.control) && e.controller.control.destroyed) || e.controller.setTranslate(p, f));
      }),
      t("setTransition", (l, p, f) => {
        e.controller.control && ((!Array.isArray(e.controller.control) && e.controller.control.destroyed) || e.controller.setTransition(p, f));
      }),
      Object.assign(e.controller, { setTranslate: a, setTransition: u }));
  },
  Hs = (e) => !!e.virtual && !!e.params.virtual?.enabled,
  Bs = ({ swiper: e, extendParams: s, on: t }) => {
    (s({ a11y: { enabled: !0, notificationClass: "swiper-notification", prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}", slideLabelMessage: "{{index}} / {{slidesLength}}", containerMessage: null, containerRoleDescriptionMessage: null, containerRole: null, itemRoleDescriptionMessage: null, slideRole: "group", id: null, scrollOnFocus: !0, wrapperLiveRegion: !0 } }), (e.a11y = { clicked: !1 }));
    let i = null,
      n = !1,
      a,
      u = new Date().getTime();
    function d() {
      return e.params.a11y;
    }
    function l(P) {
      const k = i;
      !k || !P || ie(k, P);
    }
    function p(P = 16) {
      const k = () => Math.round(16 * Math.random()).toString(16);
      return "x".repeat(P).replace(/x/g, k);
    }
    function f(P) {
      _(P).forEach((G) => {
        G.setAttribute("tabIndex", "0");
      });
    }
    function c(P) {
      _(P).forEach((G) => {
        G.setAttribute("tabIndex", "-1");
      });
    }
    function v(P, k) {
      _(P).forEach(($) => {
        $.setAttribute("role", k);
      });
    }
    function o(P, k) {
      _(P).forEach(($) => {
        $.setAttribute("aria-roledescription", k);
      });
    }
    function r(P, k) {
      _(P).forEach(($) => {
        $.setAttribute("aria-label", k);
      });
    }
    function g(P, k) {
      _(P).forEach(($) => {
        $.setAttribute("id", k);
      });
    }
    function b(P, k) {
      _(P).forEach(($) => {
        $.setAttribute("aria-live", k);
      });
    }
    function S(P) {
      _(P).forEach((G) => {
        G.setAttribute("aria-disabled", "true");
      });
    }
    function h(P) {
      _(P).forEach((G) => {
        G.removeAttribute("aria-disabled");
      });
    }
    function m(P) {
      if (P.keyCode !== 13 && P.keyCode !== 32) return;
      const k = d(),
        G = e.params.pagination,
        $ = P.target;
      if (!(e.pagination && e.pagination.el && ($ === e.pagination.el || e.pagination.el.contains($)) && !$.matches(ae(G?.bulletClass)))) {
        if (e.navigation && e.navigation.prevEl && e.navigation.nextEl) {
          const V = _(e.navigation.prevEl);
          (_(e.navigation.nextEl).includes($) && ((e.isEnd && !e.params.loop) || e.slideNext(), e.isEnd ? l(k.lastSlideMessage) : l(k.nextSlideMessage)), V.includes($) && ((e.isBeginning && !e.params.loop) || e.slidePrev(), e.isBeginning ? l(k.firstSlideMessage) : l(k.prevSlideMessage)));
        }
        e.pagination && $.matches(ae(G?.bulletClass)) && $.click();
      }
    }
    function y() {
      if (e.params.loop || e.params.rewind || !e.navigation) return;
      const { nextEl: P, prevEl: k } = e.navigation;
      (k && (e.isBeginning ? (S(k), c(k)) : (h(k), f(k))), P && (e.isEnd ? (S(P), c(P)) : (h(P), f(P))));
    }
    function x() {
      return !!(e.pagination && e.pagination.bullets && e.pagination.bullets.length);
    }
    function A() {
      const P = e.params.pagination;
      return x() && !!P?.clickable;
    }
    function T() {
      const P = d();
      if (!x()) return;
      const k = e.params.pagination;
      e.pagination.bullets.forEach((G) => {
        (k.clickable && (f(G), k.renderBullet || (v(G, "button"), r(G, P.paginationBulletMessage.replace(/\{\{index\}\}/, String((Se(G) ?? 0) + 1))))), G.matches(ae(k.bulletActiveClass)) ? G.setAttribute("aria-current", "true") : G.removeAttribute("aria-current"));
      });
    }
    const z = (P, k, G) => {
        (f(P), P.tagName !== "BUTTON" && (v(P, "button"), P.addEventListener("keydown", m)), r(P, G));
      },
      M = (P) => {
        (a && a !== P.target && !a.contains(P.target) && (n = !0), (e.a11y.clicked = !0));
      },
      w = () => {
        ((n = !1),
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              e.destroyed || (e.a11y.clicked = !1);
            });
          }));
      },
      E = (P) => {
        u = new Date().getTime();
      },
      I = (P) => {
        const k = d();
        if (e.a11y.clicked || !k.scrollOnFocus || new Date().getTime() - u < 100) return;
        const $ = P.target.closest(`.${e.params.slideClass}, swiper-slide`);
        if (!$ || !e.slides.includes($)) return;
        a = $;
        const V = Hs(e),
          H = (V ? parseInt($.getAttribute("data-swiper-slide-index") || "0", 10) : e.slides.indexOf($)) === e.activeIndex,
          R = e.params.watchSlidesProgress && e.visibleSlides && e.visibleSlides.includes($);
        if (H || R) return;
        const F = P.sourceCapabilities;
        (F && F.firesTouchEvents) ||
          (e.isHorizontal() ? (e.el.scrollLeft = 0) : (e.el.scrollTop = 0),
          requestAnimationFrame(() => {
            n || (e.params.loop ? e.slideToLoop(e.getSlideIndexWhenGrid(parseInt($.getAttribute("data-swiper-slide-index") || "0", 10)), 0) : V ? e.slideTo(e.getSlideIndexWhenGrid(parseInt($.getAttribute("data-swiper-slide-index") || "0", 10)), 0) : e.slideTo(e.getSlideIndexWhenGrid(e.slides.indexOf($)), 0), (n = !1));
          }));
      },
      L = () => {
        const P = d();
        (P.itemRoleDescriptionMessage && o(e.slides, P.itemRoleDescriptionMessage), P.slideRole && v(e.slides, P.slideRole));
        const k = e.slides.length,
          G = P.slideLabelMessage;
        G &&
          e.slides.forEach(($, V) => {
            const H = e.params.loop ? parseInt($.getAttribute("data-swiper-slide-index") || "0", 10) : V,
              R = G.replace(/\{\{index\}\}/, String(H + 1)).replace(/\{\{slidesLength\}\}/, String(k));
            r($, R);
          });
      },
      C = () => {
        const P = d();
        i && e.el.append(i);
        const k = e.el;
        (P.containerRoleDescriptionMessage && o(k, P.containerRoleDescriptionMessage), P.containerMessage && r(k, P.containerMessage), P.containerRole && v(k, P.containerRole));
        const G = e.wrapperEl,
          $ = String(P.id || G.getAttribute("id") || `swiper-wrapper-${p(16)}`);
        if ((g(G, $), P.wrapperLiveRegion)) {
          const F = e.params.autoplay,
            D = e.params.autoplay && F?.enabled ? "off" : "polite";
          b(G, D);
        }
        L();
        const V = e.navigation ? e.navigation : { nextEl: void 0, prevEl: void 0 },
          H = _(V.nextEl),
          R = _(V.prevEl);
        (H && H.forEach((F) => z(F, $, P.nextSlideMessage)),
          R && R.forEach((F) => z(F, $, P.prevSlideMessage)),
          A() &&
            _(e.pagination.el).forEach((D) => {
              D.addEventListener("keydown", m);
            }),
          document.addEventListener("visibilitychange", E),
          e.el.addEventListener("focus", I, !0),
          e.el.addEventListener("pointerdown", M, !0),
          e.el.addEventListener("pointerup", w, !0));
      };
    function O() {
      i && i.remove();
      const P = e.navigation ? e.navigation : { nextEl: void 0, prevEl: void 0 },
        k = _(P.nextEl),
        G = _(P.prevEl);
      (k && k.forEach(($) => $.removeEventListener("keydown", m)),
        G && G.forEach(($) => $.removeEventListener("keydown", m)),
        A() &&
          _(e.pagination.el).forEach((V) => {
            V.removeEventListener("keydown", m);
          }),
        document.removeEventListener("visibilitychange", E),
        e.el && typeof e.el != "string" && (e.el.removeEventListener("focus", I, !0), e.el.removeEventListener("pointerdown", M, !0), e.el.removeEventListener("pointerup", w, !0)));
    }
    (t("beforeInit", () => {
      ((i = te("span", d().notificationClass)), i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"));
    }),
      t("afterInit", () => {
        d().enabled && C();
      }),
      t("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
        d().enabled && L();
      }),
      t("fromEdge toEdge afterInit lock unlock", () => {
        d().enabled && y();
      }),
      t("paginationUpdate", () => {
        d().enabled && T();
      }),
      t("destroy", () => {
        d().enabled && O();
      }));
  },
  Xs = ({ swiper: e, extendParams: s, on: t }) => {
    s({ history: { enabled: !1, root: "", replaceState: !1, key: "slides", keepQuery: !1 } });
    let i = !1,
      n = { key: void 0, value: void 0 };
    function a() {
      return e.params.history;
    }
    const u = (o) =>
        o
          .toString()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, "")
          .replace(/--+/g, "-")
          .replace(/^-+/, "")
          .replace(/-+$/, ""),
      d = (o) => {
        let r;
        o ? (r = new URL(o)) : (r = window.location);
        const g = r.pathname
            .slice(1)
            .split("/")
            .filter((m) => m !== ""),
          b = g.length,
          S = g[b - 2],
          h = g[b - 1];
        return { key: S, value: h };
      },
      l = (o, r) => {
        const g = a();
        if (!i || !g.enabled) return;
        let b;
        e.params.url ? (b = new URL(e.params.url)) : (b = window.location);
        const S = !!e.params.virtual?.enabled,
          h = e.virtual && S ? e.slidesEl.querySelector(`[data-swiper-slide-index="${r}"]`) : e.slides[r];
        if (!h) return;
        let m = u(h.getAttribute("data-history") || "");
        const y = g.root;
        (y.length > 0 ? (m = `${y[y.length - 1] === "/" ? y.slice(0, y.length - 1) : y}/${o ? `${o}/` : ""}${m}`) : b.pathname.includes(o || "") || (m = `${o ? `${o}/` : ""}${m}`), g.keepQuery && (m += b.search));
        const x = window.history.state;
        (x && x.value === m) || (g.replaceState ? window.history.replaceState({ value: m }, "", m) : window.history.pushState({ value: m }, "", m));
      },
      p = (o, r, g) => {
        if (r)
          for (let b = 0, S = e.slides.length; b < S; b += 1) {
            const h = e.slides[b];
            if (u(h.getAttribute("data-history") || "") === r) {
              const y = e.getSlideIndex(h);
              e.slideTo(y, o, g);
            }
          }
        else e.slideTo(0, o, g);
      },
      f = () => {
        ((n = d(e.params.url)), p(e.params.speed, n.value, !1));
      },
      c = () => {
        const o = e.params.history;
        if (o) {
          if (!window.history || !window.history.pushState) {
            o.enabled = !1;
            const r = e.params.hashNavigation;
            r && (r.enabled = !0);
            return;
          }
          if (((i = !0), (n = d(e.params.url)), !n.key && !n.value)) {
            o.replaceState || window.addEventListener("popstate", f);
            return;
          }
          (p(0, n.value, e.params.runCallbacksOnInit), o.replaceState || window.addEventListener("popstate", f));
        }
      },
      v = () => {
        a().replaceState || window.removeEventListener("popstate", f);
      };
    (t("init", () => {
      a().enabled && c();
    }),
      t("destroy", () => {
        a().enabled && v();
      }),
      t("transitionEnd _freeModeNoMomentumRelease", () => {
        i && l(a().key, e.activeIndex);
      }),
      t("slideChange", () => {
        i && e.params.cssMode && l(a().key, e.activeIndex);
      }));
  },
  Ve = (e) => !!e.virtual && !!e.params.virtual?.enabled,
  Vs = ({ swiper: e, extendParams: s, emit: t, on: i }) => {
    let n = !1;
    s({
      hashNavigation: {
        enabled: !1,
        replaceState: !1,
        watchState: !1,
        getSlideIndex(f, c) {
          if (Ve(e)) {
            const o = e.slides.find((g) => g.getAttribute("data-hash") === c);
            return o ? parseInt(o.getAttribute("data-swiper-slide-index") || "0", 10) : 0;
          }
          const v = U(e.slidesEl, `.${e.params.slideClass}[data-hash="${c}"], swiper-slide[data-hash="${c}"]`)[0];
          return v ? e.getSlideIndex(v) : 0;
        },
      },
    });
    function a() {
      return e.params.hashNavigation;
    }
    const u = () => {
        t("hashChange");
        const f = document.location.hash.replace("#", ""),
          c = Ve(e) ? e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`) : e.slides[e.activeIndex],
          v = c ? c.getAttribute("data-hash") : "";
        if (f !== v) {
          const o = a().getSlideIndex(e, f);
          if (typeof o > "u" || Number.isNaN(o)) return;
          e.slideTo(o);
        }
      },
      d = () => {
        const f = a();
        if (!n || !f.enabled) return;
        const c = Ve(e) ? e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`) : e.slides[e.activeIndex],
          v = c ? c.getAttribute("data-hash") || c.getAttribute("data-history") : "";
        f.replaceState && window.history && window.history.replaceState ? (window.history.replaceState(null, "", `#${v}` || ""), t("hashSet")) : ((document.location.hash = v || ""), t("hashSet"));
      },
      l = () => {
        const f = a(),
          c = e.params.history;
        if (!f.enabled || (c && c.enabled)) return;
        n = !0;
        const v = document.location.hash.replace("#", "");
        if (v) {
          const r = f.getSlideIndex(e, v);
          e.slideTo(r || 0, 0, e.params.runCallbacksOnInit, !0);
        }
        f.watchState && window.addEventListener("hashchange", u);
      },
      p = () => {
        a().watchState && window.removeEventListener("hashchange", u);
      };
    (i("init", () => {
      a().enabled && l();
    }),
      i("destroy", () => {
        a().enabled && p();
      }),
      i("transitionEnd _freeModeNoMomentumRelease", () => {
        n && d();
      }),
      i("slideChange", () => {
        n && e.params.cssMode && d();
      }));
  },
  Rs = ({ swiper: e, extendParams: s, on: t, emit: i, params: n }) => {
    ((e.autoplay = { running: !1, paused: !1, timeLeft: 0 }), s({ autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !1, stopOnLastSlide: !1, reverseDirection: !1, pauseOnMouseEnter: !1 } }));
    function a() {
      return e.params.autoplay;
    }
    const u = typeof n.autoplay == "object" && n.autoplay && typeof n.autoplay.delay == "number" ? n.autoplay.delay : 3e3;
    let d,
      l,
      p = u,
      f = u,
      c = 0,
      v = new Date().getTime(),
      o = !1,
      r = !1,
      g = !1,
      b,
      S = !1,
      h = !1;
    function m($) {
      if (!e || e.destroyed || !e.wrapperEl || $.target !== e.wrapperEl) return;
      e.wrapperEl.removeEventListener("transitionend", m);
      const V = $.detail;
      h || (V && V.bySwiperTouchMove) || E();
    }
    const y = () => {
        if (e.destroyed || !e.autoplay.running) return;
        e.autoplay.paused ? (o = !0) : o && ((f = c), (o = !1));
        const $ = e.autoplay.paused ? c : v + f - new Date().getTime();
        ((e.autoplay.timeLeft = $),
          i("autoplayTimeLeft", $, $ / p),
          (l = requestAnimationFrame(() => {
            y();
          })));
      },
      x = () => {
        let $;
        const V = !!e.params.virtual?.enabled;
        if ((e.virtual && V ? ($ = e.slides.find((R) => R.classList.contains("swiper-slide-active"))) : ($ = e.slides[e.activeIndex]), !$)) return;
        const H = $.getAttribute("data-swiper-autoplay");
        if (H != null) return parseInt(H, 10);
      },
      A = () => {
        let $ = a().delay;
        const V = x();
        return (typeof V == "number" && !Number.isNaN(V) && V > 0 && ($ = V), $);
      },
      T = ($) => {
        if (e.destroyed || !e.autoplay.running) return 0;
        (l !== void 0 && cancelAnimationFrame(l), y());
        let V = $;
        (typeof V > "u" && ((V = A()), (p = V), (f = V)), (c = V));
        const H = e.params.speed,
          R = () => {
            if (!e || e.destroyed) return;
            const F = a();
            (F.reverseDirection ? (!e.isBeginning || e.params.loop || e.params.rewind ? (e.slidePrev(H, !0, !0), i("autoplay")) : F.stopOnLastSlide || (e.slideTo(e.slides.length - 1, H, !0, !0), i("autoplay"))) : !e.isEnd || e.params.loop || e.params.rewind ? (e.slideNext(H, !0, !0), i("autoplay")) : F.stopOnLastSlide || (e.slideTo(0, H, !0, !0), i("autoplay")),
              e.params.cssMode &&
                ((v = new Date().getTime()),
                requestAnimationFrame(() => {
                  T();
                })));
          };
        return (
          V > 0
            ? (d !== void 0 && clearTimeout(d),
              (d = setTimeout(() => {
                R();
              }, V)))
            : requestAnimationFrame(() => {
                R();
              }),
          V
        );
      },
      z = () => ((v = new Date().getTime()), (e.autoplay.running = !0), T(), i("autoplayStart"), !0),
      M = () => ((e.autoplay.running = !1), d !== void 0 && clearTimeout(d), l !== void 0 && cancelAnimationFrame(l), i("autoplayStop"), !0),
      w = ($, V) => {
        if (e.destroyed || !e.autoplay.running) return;
        (d !== void 0 && clearTimeout(d), $ || (S = !0));
        const H = () => {
          (i("autoplayPause"), a().waitForTransition ? e.wrapperEl.addEventListener("transitionend", m) : E());
        };
        if (((e.autoplay.paused = !0), V)) {
          H();
          return;
        }
        ((c = (c || a().delay) - (new Date().getTime() - v)), !(e.isEnd && c < 0 && !e.params.loop) && (c < 0 && (c = 0), H()));
      },
      E = () => {
        (e.isEnd && c < 0 && !e.params.loop) || e.destroyed || !e.autoplay.running || ((v = new Date().getTime()), S ? ((S = !1), T(c)) : T(), (e.autoplay.paused = !1), i("autoplayResume"));
      },
      I = () => {
        e.destroyed || !e.autoplay.running || (document.visibilityState === "hidden" && ((S = !0), w(!0)), document.visibilityState === "visible" && E());
      },
      L = ($) => {
        $.pointerType === "mouse" && ((S = !0), (h = !0), !(e.animating || e.autoplay.paused) && w(!0));
      },
      C = ($) => {
        $.pointerType === "mouse" && ((h = !1), e.autoplay.paused && E());
      },
      O = () => {
        a().pauseOnMouseEnter && (e.el.addEventListener("pointerenter", L), e.el.addEventListener("pointerleave", C));
      },
      P = () => {
        e.el && typeof e.el != "string" && (e.el.removeEventListener("pointerenter", L), e.el.removeEventListener("pointerleave", C));
      },
      k = () => {
        document.addEventListener("visibilitychange", I);
      },
      G = () => {
        document.removeEventListener("visibilitychange", I);
      };
    (t("init", () => {
      a().enabled && (O(), k(), z());
    }),
      t("destroy", () => {
        (P(), G(), e.autoplay.running && M());
      }),
      t("_freeModeStaticRelease", () => {
        (g || S) && E();
      }),
      t("_freeModeNoMomentumRelease", () => {
        a().disableOnInteraction ? M() : w(!0, !0);
      }),
      t("beforeTransitionStart", ($, V, H) => {
        e.destroyed || !e.autoplay.running || (H || !a().disableOnInteraction ? w(!0, !0) : M());
      }),
      t("sliderFirstMove", () => {
        if (!(e.destroyed || !e.autoplay.running)) {
          if (a().disableOnInteraction) {
            M();
            return;
          }
          ((r = !0),
            (g = !1),
            (S = !1),
            (b = setTimeout(() => {
              ((S = !0), (g = !0), w(!0));
            }, 200)));
        }
      }),
      t("touchEnd", () => {
        if (!(e.destroyed || !e.autoplay.running || !r)) {
          if ((b !== void 0 && clearTimeout(b), d !== void 0 && clearTimeout(d), a().disableOnInteraction)) {
            ((g = !1), (r = !1));
            return;
          }
          (g && e.params.cssMode && E(), (g = !1), (r = !1));
        }
      }),
      t("slideChange", () => {
        e.destroyed || !e.autoplay.running || (e.autoplay.paused && ((c = A()), (p = A())));
      }),
      Object.assign(e.autoplay, { start: z, stop: M, pause: w, resume: E }));
  },
  Ys = ({ swiper: e, extendParams: s, on: t }) => {
    s({ thumbs: { swiper: null, multipleActiveThumbs: !0, autoScrollOffset: 0, slideThumbActiveClass: "swiper-slide-thumb-active", thumbsContainerClass: "swiper-thumbs" } });
    let i = !1,
      n = !1;
    e.thumbs = { swiper: null };
    function a() {
      return e.params.thumbs;
    }
    function u() {
      const c = e.thumbs.swiper;
      if (!c || c.destroyed) return !1;
      const v = c.params.virtual;
      return !!v && !!v.enabled;
    }
    function d() {
      const c = e.thumbs.swiper;
      if (!c || c.destroyed) return;
      const v = c.clickedIndex,
        o = c.clickedSlide,
        r = a();
      if ((o && o.classList.contains(r.slideThumbActiveClass)) || typeof v > "u" || v === null) return;
      let g;
      if (c.params.loop) {
        const b = c.clickedSlide?.getAttribute("data-swiper-slide-index");
        g = b == null ? v : parseInt(b, 10);
      } else g = v;
      e.params.loop ? e.slideToLoop(g) : e.slideTo(g);
    }
    function l() {
      const c = a();
      if (i) return !1;
      i = !0;
      const v = e.constructor;
      if (c.swiper instanceof v) {
        if (c.swiper.destroyed) return ((i = !1), !1);
        const r = c.swiper;
        ((e.thumbs.swiper = r), Object.assign(r.originalParams, { watchSlidesProgress: !0, slideToClickedSlide: !1 }), Object.assign(r.params, { watchSlidesProgress: !0, slideToClickedSlide: !1 }), r.update());
      } else if (ye(c.swiper)) {
        const r = Object.assign({}, c.swiper);
        (Object.assign(r, { watchSlidesProgress: !0, slideToClickedSlide: !1 }), (e.thumbs.swiper = new v(r)), (n = !0));
      }
      const o = e.thumbs.swiper;
      return o
        ? (o.el.classList.add(c.thumbsContainerClass),
          o.on("tap", d),
          u() &&
            o.on("virtualUpdate", () => {
              p(!1, { autoScroll: !1 });
            }),
          !0)
        : !1;
    }
    function p(c, v) {
      const o = e.thumbs.swiper;
      if (!o || o.destroyed) return;
      let r = 1;
      const g = a(),
        b = g.slideThumbActiveClass,
        S = e.params.slidesPerView;
      if ((typeof S == "number" && S > 1 && !e.params.centeredSlides && (r = S), g.multipleActiveThumbs || (r = 1), (r = Math.floor(r)), o.slides.forEach((h) => h.classList.remove(b)), o.params.loop || u()))
        for (let h = 0; h < r; h += 1)
          U(o.slidesEl, `[data-swiper-slide-index="${e.realIndex + h}"]`).forEach((m) => {
            m.classList.add(b);
          });
      else
        for (let h = 0; h < r; h += 1) {
          const m = o.slides[e.realIndex + h];
          m && m.classList.add(b);
        }
      (v?.autoScroll ?? !0) && f(c ? 0 : void 0);
    }
    function f(c) {
      const v = e.thumbs.swiper;
      if (!v || v.destroyed) return;
      const o = v.params.slidesPerView,
        r = o === "auto" ? v.slidesPerViewDynamic() : (o ?? 1),
        g = a().autoScrollOffset,
        b = g && !v.params.loop;
      if (e.realIndex !== v.realIndex || b) {
        const S = v.activeIndex;
        let h, m;
        if (v.params.loop) {
          const y = v.slides.find((x) => x.getAttribute("data-swiper-slide-index") === `${e.realIndex}`);
          ((h = y ? v.slides.indexOf(y) : -1), (m = e.activeIndex > e.previousIndex ? "next" : "prev"));
        } else ((h = e.realIndex), (m = h > e.previousIndex ? "next" : "prev"));
        (b && (h += m === "next" ? g : -1 * g), v.visibleSlidesIndexes && v.visibleSlidesIndexes.indexOf(h) < 0 && (v.params.centeredSlides ? (h > S ? (h = h - Math.floor(r / 2) + 1) : (h = h + Math.floor(r / 2) - 1)) : h > S && v.params.slidesPerGroup, v.slideTo(h, c)));
      }
    }
    (t("beforeInit", () => {
      const c = e.params.thumbs;
      if (!(!c || !c.swiper))
        if (typeof c.swiper == "string" || c.swiper instanceof HTMLElement) {
          const v = () => {
              const r = typeof c.swiper == "string" ? document.querySelector(c.swiper) : c.swiper;
              if (r && r.swiper) ((c.swiper = r.swiper), l(), p(!0));
              else if (r) {
                const g = `${e.params.eventsPrefix}init`,
                  b = (S) => {
                    const h = S.detail;
                    ((c.swiper = h[0]), r.removeEventListener(g, b), l(), p(!0), c.swiper.update(), e.update());
                  };
                r.addEventListener(g, b);
              }
              return r;
            },
            o = () => {
              if (e.destroyed) return;
              v() || requestAnimationFrame(o);
            };
          requestAnimationFrame(o);
        } else (l(), p(!0));
    }),
      t("slideChange update resize observerUpdate", () => {
        p();
      }),
      t("setTransition", (c, v) => {
        const o = e.thumbs.swiper;
        !o || o.destroyed || o.setTransition(v);
      }),
      t("beforeDestroy", () => {
        const c = e.thumbs.swiper;
        !c || c.destroyed || (n && c.destroy());
      }),
      Object.assign(e.thumbs, { init: l, update: p }));
  },
  Ns = ({ swiper: e, extendParams: s, emit: t, once: i }) => {
    s({ freeMode: { enabled: !1, momentum: !0, momentumRatio: 1, momentumBounce: !0, momentumBounceRatio: 1, momentumVelocityRatio: 1, sticky: !1, minimumVelocity: 0.02 } });
    function n() {
      return e.params.freeMode;
    }
    function a() {
      if (e.params.cssMode) return;
      const l = e.getTranslate();
      (e.setTranslate(l), e.setTransition(0), (e.touchEventsData.velocities.length = 0), e.freeMode.onTouchEnd({ currentPos: e.rtl ? e.translate : -e.translate }));
    }
    function u() {
      if (e.params.cssMode) return;
      const { touchEventsData: l, touches: p } = e;
      (l.velocities.length === 0 && l.velocities.push({ position: p[e.isHorizontal() ? "startX" : "startY"], time: l.touchStartTime ?? ee() }), l.velocities.push({ position: p[e.isHorizontal() ? "currentX" : "currentY"], time: ee() }));
    }
    function d({ currentPos: l }) {
      if (e.params.cssMode) return;
      const { wrapperEl: p, rtlTranslate: f, snapGrid: c, touchEventsData: v } = e,
        o = e.params,
        r = n(),
        g = ee(),
        b = g - (v.touchStartTime ?? g);
      if (l < -e.minTranslate()) {
        e.slideTo(e.activeIndex);
        return;
      }
      if (l > -e.maxTranslate()) {
        e.slides.length < c.length ? e.slideTo(c.length - 1) : e.slideTo(e.slides.length - 1);
        return;
      }
      if (r.momentum) {
        if (v.velocities.length > 1) {
          const z = v.velocities.pop(),
            M = v.velocities.pop(),
            w = z.position - M.position,
            E = z.time - M.time;
          ((e.velocity = w / E), (e.velocity /= 2), Math.abs(e.velocity) < r.minimumVelocity && (e.velocity = 0), (E > 150 || ee() - z.time > 300) && (e.velocity = 0));
        } else e.velocity = 0;
        ((e.velocity *= r.momentumVelocityRatio), (v.velocities.length = 0));
        let S = 1e3 * r.momentumRatio;
        const h = e.velocity * S;
        let m = e.translate + h;
        f && (m = -m);
        let y = !1,
          x;
        const A = Math.abs(e.velocity) * 20 * r.momentumBounceRatio;
        let T = !1;
        if (m < e.maxTranslate()) (r.momentumBounce ? (m + e.maxTranslate() < -A && (m = e.maxTranslate() - A), (x = e.maxTranslate()), (y = !0), (v.allowMomentumBounce = !0)) : (m = e.maxTranslate()), o.loop && o.centeredSlides && (T = !0));
        else if (m > e.minTranslate()) (r.momentumBounce ? (m - e.minTranslate() > A && (m = e.minTranslate() + A), (x = e.minTranslate()), (y = !0), (v.allowMomentumBounce = !0)) : (m = e.minTranslate()), o.loop && o.centeredSlides && (T = !0));
        else if (r.sticky) {
          let z = 0;
          for (let M = 0; M < c.length; M += 1)
            if (c[M] > -m) {
              z = M;
              break;
            }
          (Math.abs(c[z] - m) < Math.abs((c[z - 1] ?? c[z]) - m) || e.swipeDirection === "next" ? (m = c[z]) : (m = c[z - 1]), (m = -m));
        }
        if (
          (T &&
            i("transitionEnd", () => {
              e.loopFix();
            }),
          e.velocity !== 0)
        ) {
          if ((f ? (S = Math.abs((-m - e.translate) / e.velocity)) : (S = Math.abs((m - e.translate) / e.velocity)), r.sticky)) {
            const z = Math.abs((f ? -m : m) - e.translate),
              M = e.slidesSizesGrid[e.activeIndex],
              w = o.speed;
            z < M ? (S = w) : z < 2 * M ? (S = w * 1.5) : (S = w * 2.5);
          }
        } else if (r.sticky) {
          e.slideToClosest();
          return;
        }
        (r.momentumBounce && y && x !== void 0
          ? (e.updateProgress(x),
            e.setTransition(S),
            e.setTranslate(m),
            e.transitionStart(!0, e.swipeDirection),
            (e.animating = !0),
            be(p, () => {
              !e ||
                e.destroyed ||
                !v.allowMomentumBounce ||
                (t("momentumBounce"),
                e.setTransition(o.speed),
                setTimeout(() => {
                  (e.setTranslate(x),
                    be(p, () => {
                      !e || e.destroyed || e.transitionEnd();
                    }));
                }, 0));
            }))
          : e.velocity
            ? (t("_freeModeNoMomentumRelease"),
              e.updateProgress(m),
              e.setTransition(S),
              e.setTranslate(m),
              e.transitionStart(!0, e.swipeDirection),
              e.animating ||
                ((e.animating = !0),
                be(p, () => {
                  !e || e.destroyed || e.transitionEnd();
                })))
            : e.updateProgress(m),
          e.updateActiveIndex(),
          e.updateSlidesClasses());
      } else if (r.sticky) {
        e.slideToClosest();
        return;
      } else t("_freeModeNoMomentumRelease");
      (!r.momentum || b >= o.longSwipesMs) && (t("_freeModeStaticRelease"), e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses());
    }
    e.freeMode = { onTouchStart: a, onTouchMove: u, onTouchEnd: d };
  },
  _s = ({ swiper: e, extendParams: s, on: t }) => {
    s({ grid: { rows: 1, fill: "column" } });
    function i() {
      return e.params.grid;
    }
    let n, a, u, d;
    const l = () => {
        let b = e.params.spaceBetween ?? 0;
        return (typeof b == "string" && b.indexOf("%") >= 0 ? (b = (parseFloat(b.replace("%", "")) / 100) * e.size) : typeof b == "string" && (b = parseFloat(b)), b);
      },
      p = () => {
        const b = e.params.virtual;
        return !!e.virtual && typeof b == "object" && b !== null && !!b.enabled;
      },
      f = (b) => {
        const { slidesPerView: S } = e.params,
          { rows: h, fill: m } = i(),
          y = p() ? e.virtual.slides.length : b.length;
        ((u = Math.floor(y / h)), Math.floor(y / h) === y / h ? (n = y) : (n = Math.ceil(y / h) * h), S !== "auto" && m === "row" && (n = Math.max(n, Math.floor(S ?? 1) * h)), (a = n / h));
      },
      c = () => {
        e.slides &&
          e.slides.forEach((b) => {
            b.swiperSlideGridSet && ((b.style.height = ""), b.style.setProperty(e.getDirectionLabel("margin-top"), ""));
          });
      },
      v = (b, S, h) => {
        const { slidesPerGroup: m } = e.params,
          y = l(),
          { rows: x, fill: A } = i(),
          T = p() ? e.virtual.slides.length : h.length;
        let z, M, w;
        if (A === "row" && (m ?? 1) > 1) {
          const I = m ?? 1,
            L = Math.floor(b / (I * x)),
            C = b - x * I * L,
            O = L === 0 ? I : Math.min(Math.ceil((T - L * x * I) / x), I);
          ((w = Math.floor(C / O)), (M = C - w * O + L * I), (z = M + (w * n) / x), (S.style.order = String(z)));
        } else A === "column" ? ((M = Math.floor(b / x)), (w = b - M * x), (M > u || (M === u && w === x - 1)) && ((w += 1), w >= x && ((w = 0), (M += 1)))) : ((w = Math.floor(b / a)), (M = b - w * a));
        const E = S;
        ((E.row = w), (E.column = M), (S.style.height = `calc((100% - ${(x - 1) * y}px) / ${x})`), S.style.setProperty(e.getDirectionLabel("margin-top"), w !== 0 && y ? `${y}px` : ""), (E.swiperSlideGridSet = !0));
      },
      o = (b, S) => {
        const { centeredSlides: h, roundLengths: m } = e.params,
          y = l(),
          { rows: x } = i();
        if (((e.virtualSize = (b + y) * n), (e.virtualSize = Math.ceil(e.virtualSize / x) - y), e.params.cssMode || e.wrapperEl.style.setProperty(e.getDirectionLabel("width"), `${e.virtualSize + y}px`), h)) {
          const A = [];
          for (let T = 0; T < S.length; T += 1) {
            let z = S[T];
            (m && (z = Math.floor(z)), S[T] < e.virtualSize + S[0] && A.push(z));
          }
          (S.splice(0, S.length), S.push(...A));
        }
      },
      r = () => {
        const b = e.params.grid;
        d = !!(b && (b.rows ?? 1) > 1);
      },
      g = () => {
        const { params: b, el: S } = e,
          h = b.grid,
          m = !!(h && (h.rows ?? 1) > 1);
        (d && !m ? (S.classList.remove(`${b.containerModifierClass}grid`, `${b.containerModifierClass}grid-column`), (u = 1), e.emitContainerClasses()) : !d && m && (S.classList.add(`${b.containerModifierClass}grid`), h.fill === "column" && S.classList.add(`${b.containerModifierClass}grid-column`), e.emitContainerClasses()), (d = m));
      };
    (t("init", r), t("update", g), (e.grid = { initSlides: f, unsetSlides: c, updateSlide: v, updateWrapperSize: o }));
  };
function Fs(e, s) {
  const t = this,
    { params: i, activeIndex: n, slidesEl: a } = t;
  let u = n;
  i.loop && ((u -= t.loopedSlides ?? 0), t.loopDestroy(), t.recalcSlides());
  const d = t.slides.length;
  if (e <= 0) {
    t.prependSlide(s);
    return;
  }
  if (e >= d) {
    t.appendSlide(s);
    return;
  }
  let l = u > e ? u + 1 : u;
  const p = [];
  for (let f = d - 1; f >= e; f -= 1) {
    const c = t.slides[f];
    c && (c.remove(), p.unshift(c));
  }
  if (Array.isArray(s)) {
    for (let f = 0; f < s.length; f += 1) {
      const c = s[f];
      c && a.append(c);
    }
    l = u > e ? u + s.length : u;
  } else a.append(s);
  for (let f = 0; f < p.length; f += 1) a.append(p[f]);
  (t.recalcSlides(), i.loop && t.loopCreate(), (!i.observer || t.isElement) && t.update(), i.loop ? t.slideTo(l + (t.loopedSlides ?? 0), 0, !1) : t.slideTo(l, 0, !1));
}
function Ws(e) {
  const s = this,
    { params: t, slidesEl: i } = s;
  t.loop && s.loopDestroy();
  const n = (a) => {
    if (typeof a == "string") {
      const u = document.createElement("div");
      ie(u, a);
      const d = u.children[0];
      (d && i.append(d), ie(u, ""));
    } else i.append(a);
  };
  if (Array.isArray(e))
    for (let a = 0; a < e.length; a += 1) {
      const u = e[a];
      u && n(u);
    }
  else n(e);
  (s.recalcSlides(), t.loop && s.loopCreate(), (!t.observer || s.isElement) && s.update());
}
function qs(e) {
  const s = this,
    { params: t, activeIndex: i, slidesEl: n } = s;
  t.loop && s.loopDestroy();
  let a = i + 1;
  const u = (d) => {
    if (typeof d == "string") {
      const l = document.createElement("div");
      ie(l, d);
      const p = l.children[0];
      (p && n.prepend(p), ie(l, ""));
    } else n.prepend(d);
  };
  if (Array.isArray(e)) {
    for (let d = 0; d < e.length; d += 1) {
      const l = e[d];
      l && u(l);
    }
    a = i + e.length;
  } else u(e);
  (s.recalcSlides(), t.loop && s.loopCreate(), (!t.observer || s.isElement) && s.update(), s.slideTo(a, 0, !1));
}
function js() {
  const e = this,
    s = [];
  for (let t = 0; t < e.slides.length; t += 1) s.push(t);
  e.removeSlide(s);
}
function Us(e) {
  const s = this,
    { params: t, activeIndex: i } = s;
  let n = i;
  t.loop && ((n -= s.loopedSlides ?? 0), s.loopDestroy());
  let a = n;
  if (Array.isArray(e)) {
    for (let u = 0; u < e.length; u += 1) {
      const d = e[u];
      (s.slides[d] && s.slides[d].remove(), d < a && (a -= 1));
    }
    a = Math.max(a, 0);
  } else {
    const u = e;
    (s.slides[u] && s.slides[u].remove(), u < a && (a -= 1), (a = Math.max(a, 0)));
  }
  (s.recalcSlides(), t.loop && s.loopCreate(), (!t.observer || s.isElement) && s.update(), t.loop ? s.slideTo(a + (s.loopedSlides ?? 0), 0, !1) : s.slideTo(a, 0, !1));
}
const Ks = ({ swiper: e }) => {
  Object.assign(e, { appendSlide: Ws.bind(e), prependSlide: qs.bind(e), addSlide: Fs.bind(e), removeSlide: Us.bind(e), removeAllSlides: js.bind(e) });
};
function ve(e) {
  const { effect: s, swiper: t, on: i, setTranslate: n, setTransition: a, overwriteParams: u, perspective: d, recreateShadows: l, getEffectParams: p } = e;
  (i("beforeInit", () => {
    if (t.params.effect !== s) return;
    (t.classNames.push(`${t.params.containerModifierClass}${s}`), d && d() && t.classNames.push(`${t.params.containerModifierClass}3d`));
    const c = u ? u() : {};
    (Object.assign(t.params, c), Object.assign(t.originalParams, c));
  }),
    i("setTranslate _virtualUpdated", () => {
      t.params.effect === s && n();
    }),
    i("setTransition", (c, v) => {
      t.params.effect === s && a(v);
    }),
    i("transitionEnd", () => {
      if (t.params.effect === s && l) {
        const c = p ? p() : void 0;
        if (!c || !c.slideShadows) return;
        (t.slides.forEach((v) => {
          v.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((o) => o.remove());
        }),
          l());
      }
    }));
  let f = !1;
  i("virtualUpdate", () => {
    t.params.effect === s &&
      (t.slides.length || (f = !0),
      requestAnimationFrame(() => {
        f && t.slides && t.slides.length && (n(), (f = !1));
      }));
  });
}
function Ee(e, s) {
  const t = ce(s);
  return (t !== s && ((t.style.backfaceVisibility = "hidden"), t.style.setProperty("-webkit-backface-visibility", "hidden")), t);
}
function Ae({ swiper: e, duration: s, transformElements: t, allSlides: i }) {
  const { activeIndex: n } = e,
    a = (u) => {
      if (!u.parentElement) return e.slides.find((d) => d.shadowRoot && d.shadowRoot === u.parentNode);
      if (u.parentElement instanceof HTMLElement) return u.parentElement;
    };
  if (e.params.virtualTranslate && s !== 0) {
    let u = !1,
      d;
    (i
      ? (d = t)
      : (d = t.filter((l) => {
          const p = l.classList.contains("swiper-slide-transform") ? a(l) : l;
          return !!p && e.getSlideIndex(p) === n;
        })),
      d.forEach((l) => {
        be(l, () => {
          if (u || !e || e.destroyed) return;
          ((u = !0), (e.animating = !1));
          const p = new CustomEvent("transitionend", { bubbles: !0, cancelable: !0 });
          e.wrapperEl.dispatchEvent(p);
        });
      }));
  }
}
const Zs = ({ swiper: e, extendParams: s, on: t }) => {
    s({ fadeEffect: { crossFade: !1 } });
    function i() {
      return e.params.fadeEffect;
    }
    ve({
      effect: "fade",
      swiper: e,
      on: t,
      setTranslate: () => {
        const { slides: u } = e,
          d = i();
        for (let l = 0; l < u.length; l += 1) {
          const p = u[l];
          let c = -(p.swiperSlideOffset ?? 0);
          e.params.virtualTranslate || (c -= e.translate);
          let v = 0;
          e.isHorizontal() || ((v = c), (c = 0));
          const o = p.progress ?? 0,
            r = d.crossFade ? Math.max(1 - Math.abs(o), 0) : 1 + Math.min(Math.max(o, -1), 0),
            g = Ee(d, p);
          ((g.style.opacity = String(r)), (g.style.transform = `translate3d(${c}px, ${v}px, 0px)`));
        }
      },
      setTransition: (u) => {
        const d = e.slides.map((l) => ce(l));
        (d.forEach((l) => {
          l.style.transitionDuration = `${u}ms`;
        }),
          Ae({ swiper: e, duration: u, transformElements: d, allSlides: !0 }));
      },
      overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !e.params.cssMode }),
    });
  },
  Qs = ({ swiper: e, extendParams: s, on: t }) => {
    s({ cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: 0.94 } });
    function i() {
      return e.params.cubeEffect;
    }
    const n = (l, p, f) => {
      let c = f ? l.querySelector(".swiper-slide-shadow-left") : l.querySelector(".swiper-slide-shadow-top"),
        v = f ? l.querySelector(".swiper-slide-shadow-right") : l.querySelector(".swiper-slide-shadow-bottom");
      (c || ((c = te("div", `swiper-slide-shadow-cube swiper-slide-shadow-${f ? "left" : "top"}`.split(" "))), l.append(c)), v || ((v = te("div", `swiper-slide-shadow-cube swiper-slide-shadow-${f ? "right" : "bottom"}`.split(" "))), l.append(v)), c && (c.style.opacity = String(Math.max(-p, 0))), v && (v.style.opacity = String(Math.max(p, 0))));
    };
    ve({
      effect: "cube",
      swiper: e,
      on: t,
      setTranslate: () => {
        const { el: l, wrapperEl: p, slides: f, width: c, height: v, rtlTranslate: o, size: r } = e,
          g = Ie(e),
          b = i(),
          S = e.isHorizontal(),
          h = !!(e.virtual && e.params.virtual?.enabled);
        let m = 0,
          y = null;
        b.shadow && (S ? ((y = e.wrapperEl.querySelector(".swiper-cube-shadow")), y || ((y = te("div", "swiper-cube-shadow")), e.wrapperEl.append(y)), (y.style.height = `${c}px`)) : ((y = l.querySelector(".swiper-cube-shadow")), y || ((y = te("div", "swiper-cube-shadow")), l.append(y))));
        for (let x = 0; x < f.length; x += 1) {
          const A = f[x];
          let T = x;
          h && (T = parseInt(A.getAttribute("data-swiper-slide-index") ?? "0", 10));
          let z = T * 90,
            M = Math.floor(z / 360);
          o && ((z = -z), (M = Math.floor(-z / 360)));
          const w = Math.max(Math.min(A.progress ?? 0, 1), -1);
          let E = 0,
            I = 0,
            L = 0;
          (T % 4 === 0 ? ((E = -M * 4 * r), (L = 0)) : (T - 1) % 4 === 0 ? ((E = 0), (L = -M * 4 * r)) : (T - 2) % 4 === 0 ? ((E = r + M * 4 * r), (L = r)) : (T - 3) % 4 === 0 && ((E = -r), (L = 3 * r + r * 4 * M)), o && (E = -E), S || ((I = E), (E = 0)));
          const C = `rotateX(${g(S ? 0 : -z)}deg) rotateY(${g(S ? z : 0)}deg) translate3d(${E}px, ${I}px, ${L}px)`;
          (w <= 1 && w > -1 && ((m = T * 90 + w * 90), o && (m = -T * 90 - w * 90)), (A.style.transform = C), b.slideShadows && n(A, w, S));
        }
        if (((p.style.transformOrigin = `50% 50% -${r / 2}px`), p.style.setProperty("-webkit-transform-origin", `50% 50% -${r / 2}px`), b.shadow && y))
          if (S) y.style.transform = `translate3d(0px, ${c / 2 + b.shadowOffset}px, ${-c / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${b.shadowScale})`;
          else {
            const x = Math.abs(m) - Math.floor(Math.abs(m) / 90) * 90,
              A = 1.5 - (Math.sin((x * 2 * Math.PI) / 360) / 2 + Math.cos((x * 2 * Math.PI) / 360) / 2),
              T = b.shadowScale,
              z = b.shadowScale / A,
              M = b.shadowOffset;
            y.style.transform = `scale3d(${T}, 1, ${z}) translate3d(0px, ${v / 2 + M}px, ${-v / 2 / z}px) rotateX(-89.99deg)`;
          }
        ((p.style.transform = `translate3d(0px,0,0px) rotateX(${g(e.isHorizontal() ? 0 : m)}deg) rotateY(${g(e.isHorizontal() ? -m : 0)}deg)`), p.style.setProperty("--swiper-cube-translate-z", "0px"));
      },
      setTransition: (l) => {
        const { el: p, slides: f } = e;
        if (
          (f.forEach((c) => {
            ((c.style.transitionDuration = `${l}ms`),
              c.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((v) => {
                v.style.transitionDuration = `${l}ms`;
              }));
          }),
          e.params.cubeEffect?.shadow && !e.isHorizontal())
        ) {
          const c = p.querySelector(".swiper-cube-shadow");
          c && (c.style.transitionDuration = `${l}ms`);
        }
      },
      recreateShadows: () => {
        const l = e.isHorizontal();
        e.slides.forEach((p) => {
          const f = Math.max(Math.min(p.progress ?? 0, 1), -1);
          n(p, f, l);
        });
      },
      getEffectParams: () => e.params.cubeEffect,
      perspective: () => !0,
      overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0 }),
    });
  };
function ge(e, s, t) {
  const i = `swiper-slide-shadow${t ? `-${t}` : ""}${e ? ` swiper-slide-shadow-${e}` : ""}`,
    n = ce(s),
    a = `.${i.split(" ").join(".")}`,
    u = n.querySelector(a);
  if (u) return u;
  const d = te("div", i.split(" "));
  return (n.append(d), d);
}
const Js = ({ swiper: e, extendParams: s, on: t }) => {
    s({ flipEffect: { slideShadows: !0, limitRotation: !0 } });
    function i() {
      return e.params.flipEffect;
    }
    const n = (l, p) => {
      let f = e.isHorizontal() ? l.querySelector(".swiper-slide-shadow-left") : l.querySelector(".swiper-slide-shadow-top"),
        c = e.isHorizontal() ? l.querySelector(".swiper-slide-shadow-right") : l.querySelector(".swiper-slide-shadow-bottom");
      (f || (f = ge("flip", l, e.isHorizontal() ? "left" : "top")), c || (c = ge("flip", l, e.isHorizontal() ? "right" : "bottom")), f && (f.style.opacity = String(Math.max(-p, 0))), c && (c.style.opacity = String(Math.max(p, 0))));
    };
    ve({
      effect: "flip",
      swiper: e,
      on: t,
      setTranslate: () => {
        const { slides: l, rtlTranslate: p } = e,
          f = i(),
          c = Ie(e);
        for (let v = 0; v < l.length; v += 1) {
          const o = l[v];
          let r = o.progress ?? 0;
          f.limitRotation && (r = Math.max(Math.min(r, 1), -1));
          const g = o.swiperSlideOffset ?? 0;
          let S = -180 * r,
            h = 0,
            m = e.params.cssMode ? -g - e.translate : -g,
            y = 0;
          (e.isHorizontal() ? p && (S = -S) : ((y = m), (m = 0), (h = -S), (S = 0)), (o.style.zIndex = String(-Math.abs(Math.round(r)) + l.length)), f.slideShadows && n(o, r));
          const x = `translate3d(${m}px, ${y}px, 0px) rotateX(${c(h)}deg) rotateY(${c(S)}deg)`,
            A = Ee(f, o);
          A.style.transform = x;
        }
      },
      setTransition: (l) => {
        const p = e.slides.map((f) => ce(f));
        (p.forEach((f) => {
          ((f.style.transitionDuration = `${l}ms`),
            f.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((c) => {
              c.style.transitionDuration = `${l}ms`;
            }));
        }),
          Ae({ swiper: e, duration: l, transformElements: p }));
      },
      recreateShadows: () => {
        const l = i();
        e.slides.forEach((p) => {
          let f = p.progress ?? 0;
          (l.limitRotation && (f = Math.max(Math.min(f, 1), -1)), n(p, f));
        });
      },
      getEffectParams: () => e.params.flipEffect,
      perspective: () => !0,
      overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !e.params.cssMode }),
    });
  },
  ei = ({ swiper: e, extendParams: s, on: t }) => {
    s({ coverflowEffect: { rotate: 50, stretch: 0, depth: 100, scale: 1, modifier: 1, slideShadows: !0 } });
    function i() {
      return e.params.coverflowEffect;
    }
    ve({
      effect: "coverflow",
      swiper: e,
      on: t,
      setTranslate: () => {
        const { width: u, height: d, slides: l, slidesSizesGrid: p } = e,
          f = i(),
          c = e.isHorizontal(),
          v = e.translate,
          o = c ? -v + u / 2 : -v + d / 2,
          r = c ? f.rotate : -f.rotate,
          g = f.depth,
          b = Ie(e);
        for (let S = 0, h = l.length; S < h; S += 1) {
          const m = l[S],
            y = p[S],
            x = m.swiperSlideOffset ?? 0,
            A = (o - x - y / 2) / y,
            T = typeof f.modifier == "function" ? f.modifier(A) : A * f.modifier;
          let z = c ? r * T : 0,
            M = c ? 0 : r * T,
            w = -g * Math.abs(T),
            E = typeof f.stretch == "string" && f.stretch.indexOf("%") !== -1 ? (parseFloat(f.stretch) / 100) * y : f.stretch,
            I = c ? 0 : E * T,
            L = c ? E * T : 0,
            C = 1 - (1 - f.scale) * Math.abs(T);
          (Math.abs(L) < 0.001 && (L = 0), Math.abs(I) < 0.001 && (I = 0), Math.abs(w) < 0.001 && (w = 0), Math.abs(z) < 0.001 && (z = 0), Math.abs(M) < 0.001 && (M = 0), Math.abs(C) < 0.001 && (C = 0));
          const O = `translate3d(${L}px,${I}px,${w}px)  rotateX(${b(M)}deg) rotateY(${b(z)}deg) scale(${C})`,
            P = Ee(f, m);
          if (((P.style.transform = O), (m.style.zIndex = String(-Math.abs(Math.round(T)) + 1)), f.slideShadows)) {
            let k = c ? m.querySelector(".swiper-slide-shadow-left") : m.querySelector(".swiper-slide-shadow-top"),
              G = c ? m.querySelector(".swiper-slide-shadow-right") : m.querySelector(".swiper-slide-shadow-bottom");
            (k || (k = ge("coverflow", m, c ? "left" : "top")), G || (G = ge("coverflow", m, c ? "right" : "bottom")), k && (k.style.opacity = String(T > 0 ? T : 0)), G && (G.style.opacity = String(-T > 0 ? -T : 0)));
          }
        }
      },
      setTransition: (u) => {
        e.slides
          .map((l) => ce(l))
          .forEach((l) => {
            ((l.style.transitionDuration = `${u}ms`),
              l.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((p) => {
                p.style.transitionDuration = `${u}ms`;
              }));
          });
      },
      perspective: () => !0,
      overwriteParams: () => ({ watchSlidesProgress: !0 }),
    });
  },
  ti = ({ swiper: e, extendParams: s, on: t }) => {
    s({ creativeEffect: { limitProgress: 1, shadowPerProgress: !1, progressMultiplier: 1, perspective: !0, prev: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 }, next: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 } } });
    function i() {
      return e.params.creativeEffect;
    }
    const n = (d) => (typeof d == "string" ? d : `${d}px`);
    ve({
      effect: "creative",
      swiper: e,
      on: t,
      setTranslate: () => {
        const { slides: d, wrapperEl: l, slidesSizesGrid: p } = e,
          f = i(),
          { progressMultiplier: c } = f,
          v = e.params.centeredSlides,
          o = Ie(e);
        if (v) {
          const r = p[0] / 2 - (e.params.slidesOffsetBefore ?? 0);
          l.style.transform = `translateX(calc(50% - ${r}px))`;
        }
        for (let r = 0; r < d.length; r += 1) {
          const g = d[r],
            b = g.progress ?? 0,
            S = Math.min(Math.max(b, -f.limitProgress), f.limitProgress);
          let h = S;
          v || (h = Math.min(Math.max(g.originalProgress ?? 0, -f.limitProgress), f.limitProgress));
          const m = g.swiperSlideOffset ?? 0,
            y = [e.params.cssMode ? -m - e.translate : -m, 0, 0],
            x = [0, 0, 0];
          let A = !1;
          e.isHorizontal() || ((y[1] = y[0]), (y[0] = 0));
          let T = { translate: [0, 0, 0], rotate: [0, 0, 0], scale: 1, opacity: 1 };
          (S < 0 ? ((T = f.next), (A = !0)) : S > 0 && ((T = f.prev), (A = !0)),
            y.forEach((C, O) => {
              y[O] = `calc(${C}px + (${n(T.translate[O])} * ${Math.abs(S * c)}))`;
            }),
            x.forEach((C, O) => {
              x[O] = T.rotate[O] * Math.abs(S * c);
            }),
            (g.style.zIndex = String(-Math.abs(Math.round(b)) + d.length)));
          const z = y.join(", "),
            M = `rotateX(${o(x[0])}deg) rotateY(${o(x[1])}deg) rotateZ(${o(x[2])}deg)`,
            w = h < 0 ? `scale(${1 + (1 - T.scale) * h * c})` : `scale(${1 - (1 - T.scale) * h * c})`,
            E = h < 0 ? 1 + (1 - T.opacity) * h * c : 1 - (1 - T.opacity) * h * c,
            I = `translate3d(${z}) ${M} ${w}`;
          if ((A && T.shadow) || !A) {
            let C = g.querySelector(".swiper-slide-shadow");
            if ((!C && T.shadow && (C = ge("creative", g)), C)) {
              const O = f.shadowPerProgress ? S * (1 / f.limitProgress) : S;
              C.style.opacity = String(Math.min(Math.max(Math.abs(O), 0), 1));
            }
          }
          const L = Ee(f, g);
          ((L.style.transform = I), (L.style.opacity = String(E)), T.origin && (L.style.transformOrigin = T.origin));
        }
      },
      setTransition: (d) => {
        const l = e.slides.map((p) => ce(p));
        (l.forEach((p) => {
          ((p.style.transitionDuration = `${d}ms`),
            p.querySelectorAll(".swiper-slide-shadow").forEach((f) => {
              f.style.transitionDuration = `${d}ms`;
            }));
        }),
          Ae({ swiper: e, duration: d, transformElements: l, allSlides: !0 }));
      },
      perspective: () => i().perspective,
      overwriteParams: () => ({ watchSlidesProgress: !0, virtualTranslate: !e.params.cssMode }),
    });
  },
  si = ({ swiper: e, extendParams: s, on: t }) => {
    s({ cardsEffect: { slideShadows: !0, rotate: !0, perSlideRotate: 2, perSlideOffset: 8 } });
    function i() {
      return e.params.cardsEffect;
    }
    ve({
      effect: "cards",
      swiper: e,
      on: t,
      setTranslate: () => {
        const { slides: u, activeIndex: d, rtlTranslate: l } = e,
          p = i(),
          { startTranslate: f, isTouched: c } = e.touchEventsData,
          v = l ? -e.translate : e.translate;
        for (let o = 0; o < u.length; o += 1) {
          const r = u[o],
            g = r.progress ?? 0,
            b = Math.min(Math.max(g, -4), 4);
          let S = r.swiperSlideOffset ?? 0;
          (e.params.centeredSlides && !e.params.cssMode && (e.wrapperEl.style.transform = `translateX(${e.minTranslate()}px)`), e.params.centeredSlides && e.params.cssMode && (S -= u[0].swiperSlideOffset ?? 0));
          let h = e.params.cssMode ? -S - e.translate : -S,
            m = 0;
          const y = -100 * Math.abs(b);
          let x = 1,
            A = -p.perSlideRotate * b,
            T = p.perSlideOffset - Math.abs(b) * 0.75;
          const z = e.virtual && e.params.virtual?.enabled ? e.virtual.from + o : o,
            M = (z === d || z === d - 1) && b > 0 && b < 1 && (c || e.params.cssMode) && (v ?? 0) < (f ?? 0),
            w = (z === d || z === d + 1) && b < 0 && b > -1 && (c || e.params.cssMode) && (v ?? 0) > (f ?? 0);
          if (M || w) {
            const C = (1 - Math.abs((Math.abs(b) - 0.5) / 0.5)) ** 0.5;
            ((A += -28 * b * C), (x += -0.5 * C), (T += 96 * C), (m = `${(p.rotate || e.isHorizontal() ? -25 : 0) * C * Math.abs(b)}%`));
          }
          if ((b < 0 ? (h = `calc(${h}px ${l ? "-" : "+"} (${T * Math.abs(b)}%))`) : b > 0 ? (h = `calc(${h}px ${l ? "-" : "+"} (-${T * Math.abs(b)}%))`) : (h = `${h}px`), !e.isHorizontal())) {
            const C = m;
            ((m = h), (h = C));
          }
          const E = b < 0 ? `${1 + (1 - x) * b}` : `${1 - (1 - x) * b}`,
            I = `
        translate3d(${h}, ${m}, ${y}px)
        rotateZ(${p.rotate ? (l ? -A : A) : 0}deg)
        scale(${E})
      `;
          if (p.slideShadows) {
            let C = r.querySelector(".swiper-slide-shadow");
            (C || (C = ge("cards", r)), C && (C.style.opacity = String(Math.min(Math.max((Math.abs(b) - 0.5) / 0.5, 0), 1))));
          }
          r.style.zIndex = String(-Math.abs(Math.round(g)) + u.length);
          const L = Ee(p, r);
          L.style.transform = I;
        }
      },
      setTransition: (u) => {
        const d = e.slides.map((l) => ce(l));
        (d.forEach((l) => {
          ((l.style.transitionDuration = `${u}ms`),
            l.querySelectorAll(".swiper-slide-shadow").forEach((p) => {
              p.style.transitionDuration = `${u}ms`;
            }));
        }),
          Ae({ swiper: e, duration: u, transformElements: d }));
      },
      perspective: () => !0,
      overwriteParams: () => ({ _loopSwapReset: !1, watchSlidesProgress: !0, loopAdditionalSlides: i().rotate ? 3 : 2, centeredSlides: !0, virtualTranslate: !e.params.cssMode }),
    });
  },
  ii = [Ls, Is, As, zs, ws, Ds, ks, $s, Gs, Bs, Xs, Vs, Rs, Ys, Ns, _s, Ks, Zs, Qs, Js, ei, ti, si];
K.use(ii);
jQuery(function (e) {
  window.addEventListener("load", () => {
    const p = document.querySelector(".js-loading"),
      f = document.querySelector(".first-view");
    (setTimeout(() => {
      (p.classList.add("is-hidden"), f.classList.add("is-visible"));
    }, 1500),
      document.body.classList.add("is-loaded"));
    let c = e(".js-first-view").outerHeight(),
      v = e(".pagetop");
    const o = e(".footer");
    (v.hide(),
      e(window).on("scroll resize", function () {
        const r = e(window).scrollTop(),
          g = e(window).height(),
          b = o.offset().top;
        r > c ? v.fadeIn() : v.fadeOut();
        const S = a.matches ? o.outerHeight() + 20 : o.outerHeight() + 13,
          h = window.innerWidth >= 1024 ? "7%" : "2px";
        r + g > b ? v.css({ position: "absolute", bottom: S }) : v.css({ position: "fixed", bottom: h });
      }),
      v.click(function () {
        return (e("body,html").animate({ scrollTop: 0 }, 300, "swing"), !1);
      }),
      new K(".swiper", { loop: !0, slidesPerView: "auto", navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }, effect: "fade", autoplay: { duration: 1e4, delay: 4e3, disableOnInteraction: !1 }, speed: 2e3 }),
      new K(".swiper2", { loop: !0, speed: 500, navigation: { nextEl: ".campaign-button-next", prevEl: ".campaign-button-prev" }, slidesPerView: "auto", spaceBetween: 24, autoplay: { delay: 3e3, disableOnInteraction: !1 }, breakpoints: { 767: { slidesPerView: "auto", spaceBetween: 40 } } }));
  });
  function s() {
    (e(".js-drawer").removeClass("active"), e(".header").removeClass("active"), e(".sp-nav").removeClass("active"));
  }
  (e(".js-drawer").on("click", function () {
    (e(this).toggleClass("active"), e(".header").toggleClass("active"), e(".sp-nav").toggleClass("active"));
  }),
    e(".sp-nav a").on("click", function () {
      (s(), e(".js-hamberger").remove("active"));
    }),
    e(".sp-nav").on("click", function () {
      (s(), e(".js-hamberger").toggleClass("active"));
    }),
    e(".sp-nav").on("click", function () {
      (s(), e(".js-hamberger").removeClass("active"));
    }));
  const t = 700,
    i = new IntersectionObserver((p) => {
      p.forEach((f) => {
        if (!f.isIntersecting) return;
        const c = e(f.target),
          v = c.find(".info-colorbox"),
          o = c.find(".info-color-image, picture img");
        (v.stop(!0, !0).css({ width: 0, right: 0, left: "auto" }),
          o.css({ opacity: 0 }),
          v.animate({ width: "100%" }, t, function () {
            (o.animate({ opacity: 1 }, 200), v.css({ left: 0, right: "auto" }), v.animate({ width: 0 }, t));
          }),
          i.unobserve(f.target));
      });
    });
  (e(".js-color-slide").each(function () {
    const p = e(this).find(".info-colorbox");
    (e(this).find(".info-color-image, .price__images img").css({ opacity: 0 }), p.css({ width: 0, right: 0, left: "auto" }), i.observe(this));
  }),
    e(".js-hamberger").on("click", function () {
      (e(this).toggleClass("active"), e(".sp-nav").toggleClass("active"));
    }));
  function n(p) {
    return new Promise((f) => setTimeout(f, p));
  }
  window.addEventListener("load", async () => {
    (e("#splash").delay(1500).fadeOut("slow"), e("#splash_logo").delay(1200).fadeOut("slow"));
    const p = document.getElementById("splash"),
      f = document.querySelector(".c-loading");
    document.querySelector("#splash_logo");
    const c = document.querySelector(".first-view");
    (await n(2500), f.classList.add("is-hidden"), await n(1e3), f.classList.add("is-slide"), await n(3e3), p.classList.add("is-hidden"), await n(1500), c.classList.add("is-visible"));
  });
  const a = window.matchMedia("(min-width: 1024px)"),
    u = document.querySelector(".header__nav"),
    d = document.querySelector(".header__btns");
  function l(p) {
    p.matches ? (u.classList.add("is-active"), (d.style.display = "none")) : (u.classList.remove("is-active"), (d.style.display = "block"));
  }
  (l(a), a.addEventListener("change", l));
});
