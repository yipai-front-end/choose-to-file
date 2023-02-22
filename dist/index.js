const p = (t = {
  multiple: !0,
  accept: null
}) => new Promise((l, e) => {
  if (document.readyState != "complete")
    throw new Error("dom loading exception, please ensure that the dom is fully loaded before using");
  let n = !0, { input: u } = r({
    multiple: t.multiple,
    accept: t.accept
  });
  window.addEventListener("focus", o), u.onchange = (c) => {
    n = !1;
    let { files: i } = c.target;
    return l(t.multiple ? i : i[0]);
  };
  function o() {
    setTimeout(() => {
      n && (window.removeEventListener("focus", o), e("upload canceled"));
    }, 500);
  }
});
function r({ multiple: t, accept: l }) {
  let e = document.createElement("input");
  return e.type = "file", e.style.position = "absolute", e.style.top = "0", e.style.opacity = "0", e.style.zIndex = "-9999", e.multiple = t, l && (e.accept = l), e.click(), {
    input: e
  };
}
export {
  p as chooseToFile
};
