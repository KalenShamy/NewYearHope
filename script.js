var answers = [];

for (var a = 0; a < 10; a++) {
  for (var e = 3; e < 10; e++) { if ([a].indexOf(e) == -1) {
    console.log((a*10+e)/Math.pow(10,2) + "%");
    for (var h = 1; h < 10; h++) { if ([a,e].indexOf(h) == -1) {
      for (var n = 1; n < 10; n++) { if ([a,e,h].indexOf(n) == -1) {
        for (var o = 0; o < 10; o++) { if ([a,e,h,n].indexOf(o) == -1) {
          for (var p = 0; p < 10; p++) { if ([a,e,h,n,o].indexOf(p) == -1) {
            for (var r = 1; r < 10; r++) { if ([a,e,h,n,o,p].indexOf(r) == -1) {
              for (var w = 1; w < 10; w++) { if ([a,e,h,n,o,p,r].indexOf(w) == -1) {
                for (var y = 1; y < 9; y++) { if ([a,e,h,n,o,p,r,w].indexOf(y) == -1) {
                  var NEW = parseInt("" + n + e + w);
                  var YEAR = parseInt("" + y + e + a + r);
                  var HOPE = parseInt("" + h + o + p + e);

                  if (NEW + YEAR == HOPE) {
                    answers[answers.length] = [a, e, h, n, o, p, r, w, y];
                  }
                }}
              }}
            }}
          }}
        }}
      }}
    }}
  }}
}

for (var i = 0; i < answers.length; i++) {
    document.getElementById("copyText").innerHTML += "<a href=\"javascript:void(0)\" id=\"" + i + "\" onclick=\"viewer(" + i + ")\"style=\"text-decoration: none;color: black;\">" + (i+1) + ":&nbsp;&nbsp;&nbsp;&nbsp;" + "A:&nbsp;" + answers[i][0] + "&nbsp;&nbsp;E:&nbsp;" + answers[i][1] + "&nbsp;&nbsp;H:&nbsp;" + answers[i][2] + "&nbsp;&nbsp;N:&nbsp;" + answers[i][3] + "&nbsp;&nbsp;O:&nbsp;" + answers[i][4] + "&nbsp;&nbsp;P:&nbsp;" + answers[i][5] + "&nbsp;&nbsp;R:&nbsp;" + answers[i][6] + "&nbsp;&nbsp;W:&nbsp;" + answers[i][7] + "&nbsp;&nbsp;Y:&nbsp;" + answers[i][8] + "</a><br>";
}

var lastNum = 0;

function viewer(num) {
  document.getElementById(lastNum.toString()).style.fontWeight = "normal";
  document.getElementById(num.toString()).style.fontWeight = "bold";

  var A = answers[num][0];
  var E = answers[num][1];
  var H = answers[num][2];
  var N = answers[num][3];
  var O = answers[num][4];
  var P = answers[num][5];
  var R = answers[num][6];
  var W = answers[num][7];
  var Y = answers[num][8];

  document.getElementById("viewer").innerHTML = "&nbsp;&nbsp;&nbsp;" + N + E + W + "<br>+" + Y + E + A + R + "<br>=" + H + O + P + E;
  lastNum = num;
}
