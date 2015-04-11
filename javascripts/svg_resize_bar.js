window.onload = function () {
  bar = document.getElementById("bar");
  bar.onchange = function() {
    val = this.value;
    lbl = document.getElementById("lbl");
    lbl.innerHTML = val;
    obj = document.getElementById("obj");
    obj.height = val;
    obj.width = val;
  }
}
