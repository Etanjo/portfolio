console.log('working')

let home = document.querySelector('#home')
let active = home
let about = document.querySelector('#about')
let games = document.querySelector('#games')
let design = document.querySelector('#design')

for(let dL of document.querySelectorAll(".dLink")){
dL.addEventListener('click',function(event){
  console.log('clicked!')
  active.classList.toggle('hidden')
  active = design
  design.classList.toggle('hidden')
})}

for(let gL of document.querySelectorAll(".gLink")){
gL.addEventListener('click',function(event){
  active.classList.toggle('hidden')
  active = games
  games.classList.toggle('hidden')
})}

for(let aL of document.querySelectorAll(".aLink")){
aL.addEventListener('click',function(event){
  console.log('clicked!')
  active.classList.toggle('hidden')
  active = about
  about.classList.toggle('hidden')
})}

for(let hL of document.querySelectorAll(".hLink")){
hL.addEventListener('click',function(event){
  console.log('clicked!')
  active.classList.toggle('hidden')
  active = home
  home.classList.toggle('hidden')
})}