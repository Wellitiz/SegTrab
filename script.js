// // PASSAGEM DOS SLIDES
let time = 1;
document.getElementById("radio1");

setInterval(function () {
  nextImage();
}, 4500);

function nextImage() {
  time++;

  if (time > 3) {
    time = 1;
  }

  document.getElementById("radio" + time).checked = true;
};


for (let i = 1; i <= 6; i++) {
  document.getElementById(`PG${i}`).addEventListener("click", function() {
    window.open(`${["Medicina-e-Segurança-do-Trabalho", "Gestão-Ambiental", "Laudos", "AR", "Água", "Treinamentos"][i-1]}.html`, "_self");
  });
}