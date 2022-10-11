
// -------------  EXO 01  ------------- 
// window.onload = () => {
//     document.getElementById('boundary1').addEventListener('mouseover' , () => {
//       document.getElementById('boundary1').classList.add('youlose')
//     })
// };




// -------------  EXO 02  ------------- 
// window.onload = () => {
//     var x = document.getElementsByClassName('boundary')
//     for(var i =0; i<x.length ; i++ ){
//       x[i].addEventListener('mouseover' , () =>{
//         for(var j=0 ;j<x.length ; j++){
//           x[j].classList.add('youlose')
//         }
//       })
// };}

// -------------  EXO 03  ------------- 
// window.onload = () => {
//   var x = document.getElementsByClassName('boundary')
//   for(var i =0; i<x.length ; i++ ){
//     x[i].addEventListener('mouseover' , overBound)
//   };
//   document.getElementById('end').addEventListener('mouseover' , end)
// }

// function overBound() {
//   var x = document.getElementsByClassName('boundary')
//     for(var i=0 ;i<x.length ; i++){
//       x[i].classList.add("youlose")
//     }
  
// }
// function end(){
//   alert('you won !')
// }
// -------------  EXO 04  -------------
// var isOverBound = false 

// window.onload = () => {
//   var x = document.getElementsByClassName('boundary')
//   for(var i =0; i<x.length ; i++ ){
//     x[i].addEventListener('mouseover' , overBound)
//   };
//   document.getElementById('end').addEventListener('mouseover' , end)
//   document.getElementById('start').addEventListener('click' , start)
// }

// async function overBound() {
//   isOverBound= true
//   var x = document.getElementsByClassName('boundary')
//     for(var i=0 ;i<x.length ; i++){
//       x[i].classList.add("youlose")
      
//     }
//     alert('you lost')
  
// }
// function end(){
//   if(isOverBound){
//     alert('you lost dude try again')
//   }else{
//     alert('you won yaay!!')
//   }
// }
// function start(){
//   isOverBound= false
//   var x = document.getElementsByClassName('boundary')
//     for(var i=0 ;i<x.length ; i++){
//       x[i].classList.remove("youlose")
//     }
// }
//pushing existing code to github

//--------------------EXO6------------------
// var isOverBound = false 

// window.onload = () => {
//   var x = document.getElementsByClassName('boundary')
//   for(var i =0; i<x.length ; i++ ){
//     x[i].addEventListener('mouseover' , overBound)
//   };
//   document.getElementById('end').addEventListener('mouseover' , end)
//   document.getElementById('start').addEventListener('click' , start)
// }

// async function overBound() {
//   isOverBound= true
//   var x = document.getElementsByClassName('boundary')
//     for(var i=0 ;i<x.length ; i++){
//       x[i].classList.add("youlose")
      
//     }
//     document.getElementById('status').textContent='you passed the boundries'
  
// }
// function end(){
//   if(isOverBound){
//     document.getElementById('status').textContent='you lost dude try again'
//   }else{
//     document.getElementById('status').textContent='you won yaay!!'
//   }
// }
// function start(){
//   isOverBound= false
//   var x = document.getElementsByClassName('boundary')
//     for(var i=0 ;i<x.length ; i++){
//       x[i].classList.remove("youlose")
//     }
//     document.getElementById('status').textContent='Move your mouse over the "S" to begin.'
// }
// ------------------------EXO7--------------------
var isOverBound = false 
var isCheating = false
window.onload = () => {
  var x = document.getElementsByClassName('boundary')
  for(var i =0; i<x.length ; i++ ){
    x[i].addEventListener('mouseover' , overBound)
  };
  document.getElementById('end').addEventListener('mouseover' , end)
  document.getElementById('start').addEventListener('click' , start)
  document.getElementById('maze').addEventListener('mouseleave' , antiCheatEnging)
}

async function overBound() {
  isOverBound= true
  var x = document.getElementsByClassName('boundary')
    for(var i=0 ;i<x.length ; i++){
      x[i].classList.add("youlose")
      
    }
    end()
  
}
function end(){
  if(isOverBound){
    document.getElementById('status').textContent='you touched the bounderies you lost'
  }else{
      document.getElementById('status').textContent='you win congratulations'
    }
    if (isCheating) {
      document.getElementById('status').textContent='don\'t cheat son try again but play fair this time '
    }
  }

function start(){
  isOverBound= false
  isCheating = false
  var x = document.getElementsByClassName('boundary')
    for(var i=0 ;i<x.length ; i++){
      x[i].classList.remove("youlose")
    }
    document.getElementById('status').textContent='Move your mouse over the "S" to begin.'
}

function antiCheatEnging(){
  
  isCheating = true
  end()
}
