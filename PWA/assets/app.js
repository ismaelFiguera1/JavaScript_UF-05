const d = document,
  contador = d.querySelector(".contador"),
  boto = d.querySelector(".botoIncrementar");

console.log(contador);
console.log(boto);

let valor = 0;

d.addEventListener("click", (e) => {
  console.log(e.target);

  if (e.target === boto) {
    console.log("He clicat el boto");
    valor++;
    contador.textContent = valor;
  }
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("sw.js")
      .then((reg) => console.log("S'ha registrat el service worker", reg.scope))
      .catch((err) =>
        console.error("Error al registrar el service worker", err)
      );
  });
}
