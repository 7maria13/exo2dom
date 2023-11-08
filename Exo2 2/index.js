// 1
const elemen = document.querySelectorAll(".red")
console.log(elemen);
for (let i = 0; i < elemen.length; i++) {
  console.log( elemen[i]);
    elemen[i].classList.remove('red')
}
// 2
const refrains = document.querySelectorAll(".refrain")
refrains.forEach(refrain => {
  refrain.setAttribute("style","font-Style: italic;");
}) 
// 3
const bleu = document.getElementsByTagName("p")
console.log(bleu);
for (let i = 0; i < bleu.length; i++) {
    bleu[i].classList.add('blue')
    bleu[i].style.backgroundColor = `#8A2BE2`
    
}
//4
const paragraphe = document.getElementsByTagName("p")
for (let i = 0; i < paragraphe.length; i++) {
  paragraphe[i].style.margin = "0";
}
