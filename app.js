const h1 = document.querySelector("h1");
const btn = document.querySelector("button");
const kurs = () => h1.innerText = "Kurs zakończony";
btn.addEventListener("click", kurs);