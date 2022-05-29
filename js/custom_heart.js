!(function (e, t, a) {
  function n() {
    c(
      ".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"
    ),
      o(),
      r();
  }
  function r() {
    for (var e = 0; e < d.length; e++)
      d[e].alpha <= 0
        ? (t.body.removeChild(d[e].el), d.splice(e, 1))
        : (d[e].y--,
          (d[e].scale += 0.004),
          (d[e].alpha -= 0.013),
          (d[e].el.style.cssText =
            "left:" +
            d[e].x +
            "px;top:" +
            d[e].y +
            "px;opacity:" +
            d[e].alpha +
            ";transform:scale(" +
            d[e].scale +
            "," +
            d[e].scale +
            ") rotate(45deg);background:" +
            d[e].color +
            ";z-index:99999"));
    requestAnimationFrame(r);
  }
  function o() {
    var t = "function" == typeof e.onclick && e.onclick;
    e.onclick = function (e) {
      t && t(), i(e);
    };
  }
  function i(e) {
    var a = t.createElement("div");
    (a.className = "heart"),
      d.push({
        el: a,
        x: e.clientX - 5,
        y: e.clientY - 5,
        scale: 1,
        alpha: 1,
        color: s(),
      }),
      t.body.appendChild(a);
  }
  function c(e) {
    var a = t.createElement("style");
    a.type = "text/css";
    try {
      a.appendChild(t.createTextNode(e));
    } catch (t) {
      a.styleSheet.cssText = e;
    }
    t.getElementsByTagName("head")[0].appendChild(a);
  }
  function s() {
    return (
      "rgb(" +
      ~~(255 * Math.random()) +
      "," +
      ~~(255 * Math.random()) +
      "," +
      ~~(255 * Math.random()) +
      ")"
    );
  }

  // var d = [];
  // (e.requestAnimationFrame = (function () {
  //   return (
  //     e.requestAnimationFrame ||
  //     e.webkitRequestAnimationFrame ||
  //     e.mozRequestAnimationFrame ||
  //     e.oRequestAnimationFrame ||
  //     e.msRequestAnimationFrame ||
  //     function (e) {
  //       setTimeout(e, 1e3 / 60);
  //     }
  //   );
  // })()),
  //   n();

  // 随机颜色
  function color() {
    let colorElements = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f",
      colorArray = colorElements.split(","),
      color = "#";
    for (var i = 0; i < 6; i++) {
      color += colorArray[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  // 鼠标点击浮动文字
  function floatFont(model, e, a_idx) {
    /*这个数组中的每一个字符是你要浮动显示的词或句子，每次点击鼠标后按顺序出现*/
    let a = model.floatFont,
      $i = $("<span/>").html(
        '<img src="data:image/gif;base64,R0lGODlhFgAWAPf/AP/qffLSYv/109inAdSjAP/ssv/pqN2oJv/77v/55v/Ybe29C+W2FeSvBNmqCeCzPu3IRtmhCv/67P/11P/yzP/zyv/yyP/wxv/uv+K1Gf/ynOzEP//re3NDIf/z0v/ww//wvf/vu//sr//xlv/wk//nif/jiv/lgdedDuDJtf/WG+e0CfXSSf/nYv/65v/gPv///6NmBt2pE9aoMP/qc//dLf/tg793BP/kUP/76P/wkP7+/P379v/ttOKsCf/0qo1NKf/kk+e+H+rRnXlRQP3TGZJZQe7ZoP/gY752BHVIKbN8AP/dTPbq1tOlP5tyU/nOFf/TEua0Bv/ll/7stv/fgu++Gv/ni/rpkNyrNPffes6WCffXQf/ib9CfLeazBciRFf/87v/gZv/TGP/33//ha/rQF+7AR+3HRKNmDOfHWf/omufIXvbis//YPuG2OfLEFv/nmPTRQP/2xt6rAfzRGP/ideu8EOOzG9KjNrR/BP/cWO3FPvv27f/hiuWwBf/rp//nnf/klf/jj14oAP/bUdWgHP/nZP/WRv/++duxTum1CP/qrf/gRf/XL//YJ8eOD+7KSN2mCv/oZ9ehJu2/TNqlKNysKOW3LeK4KtKZAee3Dmw6F/vpjv/oj//54//YWf/eYu3Unfrlhf/jhf/pouGtHv/soPK/Ev/jkfbnyezDPPbJEuvUpeKvENaxavLHH9qoAdmpBP/iet6sA+zFLv/nbP/OC//QFv/XY+3GQ//bQf/ZRd25Y//dasecUezHXN+yFKVpCv/88tmyVP/eXvfXP//yxPDbrP/zx//22f/vvv/ljNiiAPTs5NasTv/fQ/nOWv/pnv/ssP/bdf3nm+izB//mm+GtJZ94WvXRcvfps/bddv/utf/mcv3xzNOnSPvqlOm5FNeZC//43vTs4/bt4LyIDtanNv/reP/sjP/vjvfMFf/fWue4IdWkAffNW/bMXv/edf/deP/65/v37+a4JP/21reDDr93Bfboy6RlGf/qpf/qm+GuCf///yH5BAEAAP8ALAAAAAAWABYAAAj/AP/9Y7GChcCDCA+y2GDwIAMoCxomVNiAlTuEdIqYkeJjFTcsP36E04LGxxd2KmghjFVnka5RGkaQ0KGDxAgNnSBYKxIL4bs/EAAU82ajKAcke5AAWBepAQGEzfhwOEGhBI2rXY4lAFGGRjo+zRDimdRiQgJ6h1q0IDcMQYIKaifZCyYwQC0hsgY4UMMFB45tbBzoFWIMh5w3AiNkOMIDBhElGV68yMTYMWTJkgS6kjFkBwwjQGTUqMHZM2jRNRgI3AQHxY0k+SgFsNUIluskN8ahGqPijsAVvNzceqQuh/E50KLgEtOvW48TTBYIxBSCwocrLrJnP+VJwIRkIQCVw2gnTuClaRc8JKjXgVOHPok+TagAQsQaO7v8CdxSDQMFMuU8QUg2zoRxjwXL9MAPM6E4oolAigAjwgceNJHCPimYowyCPRgQxyyFWIHOQYZI00MbraiShj7fiPJKAQZcQ4oviESAUC8PlELFLzH0GIMwyMRogjygmEJMQnk8EIgACDSJgASMTGHCPLlg48VE/zyThTapBCFIEIP4UQU10RzgBJYCzQCGJZXEo4AC8JxxACQzoInQDPjoscQS54BT50QBAQA7" >&nbsp;' +
          a[a_idx]
      ),
      x = e.pageX,
      y = e.pageY;
    a_idx = (a_idx + 1) % a.length;
    $i.css({
      "z-index": 999999999,
      top: y - 20,
      left: x,
      position: "absolute",
      "font-weight": "bold",
      color: color(),
    });
    $("body").append($i);
    $i.animate(
      {
        top: y - 180,
        opacity: 0,
      },
      1500,
      function () {
        $i.remove();
      }
    );
    return a_idx;
  }
  // 监控页面点击
  function clickEvent() {
    let a_idx = 0;
    let model = {
      floatFont: [
        "爱国",
        "富强",
        "民主",
        "自由",
        "平等",
        "公正",
        "法治",
        "敬业",
        "诚信",
        "文明",
        "和谐",
        "友善",
        "奥利给",
        "Hello,基佬一辈子",
        "深圳",
        "小傅",
        "坤爷",
        "++",
        "思涵",
        "+Y",
        "成都",
        "培根",
        "小春",
        "蕊涵",
        "广汉",
        "如果·可以",
        "红色的海",
        "星灵",
      ],
    };
    $("body").on("click", (e) => {
      a_idx = floatFont(model, e, a_idx);
      return;
    });
  }
  clickEvent();
})(window, document);
