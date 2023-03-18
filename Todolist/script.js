let ultasks = $("#ultasks");
let inpnewTask = $("#inpnewTask");
let btnAdd = $("#btnAdd");
let btnreset = $("#btnreset");
let addtocom = $("#addtocom");
let btnsort = $("#btnsort");
let comultasks = $("#comultasks");

inpnewTask.keypress((e) => {
  if (e.which == 13) {                         //e.which gives the keycode of the key pressed
    if (inpnewTask.val() == "") return;
    additem();
  } 
});
btnAdd.click(() => {
  if (inpnewTask.val() == "") return;
  additem();
});
btnreset.click(() => {
  inpnewTask.val("");
  togglebuttons();
});
addtocom.click(addtocomplete);
btnsort.click(() => {
  $("#ultasks .done").appendTo(ultasks);
});
inpnewTask.on("input", (e) => {
  togglebuttons();
});
function additem() {
  let listitem = $("<li>", {
    class: "list-group-item",
    text: inpnewTask.val(),
  });
  listitem.click(() => {
    listitem.toggleClass("done");
  });
  ultasks.append(listitem);
  inpnewTask.val("");
  togglebuttons();
}
function addtocomplete() {
  $("#ultasks .done").appendTo(comultasks);
}
function togglebuttons() {
  btnreset.prop("disabled", inpnewTask.val() == "");
  btnAdd.prop("disabled", inpnewTask.val() == "");
}
