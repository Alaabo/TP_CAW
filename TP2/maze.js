
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
var isOverBound = false 

window.onload = () => {
  var x = document.getElementsByClassName('boundary')
  for(var i =0; i<x.length ; i++ ){
    x[i].addEventListener('mouseover' , overBound)
  };
  document.getElementById('end').addEventListener('mouseover' , end)
  document.getElementById('start').addEventListener('click' , start)
}

async function overBound() {
  isOverBound= true
  var x = document.getElementsByClassName('boundary')
    for(var i=0 ;i<x.length ; i++){
      x[i].classList.add("youlose")
      
    }
    alert('you lost')
  
}
function end(){
  if(isOverBound){
    alert('you lost dude try again')
  }else{
    alert('you won yaay!!')
  }
}
function start(){
  isOverBound= false
  var x = document.getElementsByClassName('boundary')
    for(var i=0 ;i<x.length ; i++){
      x[i].classList.remove("youlose")
    }
}
//pushing existing code to github




