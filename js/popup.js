document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("popupVisto")) {
    document.getElementById("popup").style.display = "flex";
  }
});

function fecharPopup() {
  document.getElementById("popup").style.display = "none";
  localStorage.setItem("popupVisto", "true");
}

