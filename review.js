document.querySelectorAll(".stars").forEach(el=>{
let rating=parseInt(el.dataset.rating);
let stars="";
for(let i=0;i<rating;i++){
stars+="★";
}
el.innerHTML=stars;
});