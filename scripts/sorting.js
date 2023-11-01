// function hideShowDiv(val)
// {
//   if(val==1)
//     {
//     var elems=document.getElementsByClassName('all');

// for(var i=0; i<elems.length; i++)elems[i].style.display='block';}

//   if(val==2)
//     {
//     var elems=document.getElementsByClassName('ru');

// for(var i=0; i<elems.length; i++)elems[i].style.display='none';

// var elems=document.getElementsByClassName('kz');

// for(var i=0; i<elems.length; i++)elems[i].style.display='block';

// } 
// if(val==3)
//   {
//     var elems=document.getElementsByClassName('kz');

//     for(var i=0; i<elems.length; i++)elems[i].style.display='none';

//     var elems=document.getElementsByClassName('ru');

// for(var i=0; i<elems.length; i++)elems[i].style.display='block';

// }
// }






// butt.onclick = function() {
//   let penis = 50000;
//   var val_min = document.getElementById('inp-min').value;
//   var val_max = document.getElementById('inp-max').value;
//   document.getElementById('str').innerHTML="Вы ввели: "+val_min + " и " +val_max;
//   if (penis >= +val_min && penis <= +val_max){
//     alert('В диапозоне')
//   } else {
//     alert ('не в диапозоне')
//   }
// };





// butt.onclick = function() {
//   var val_min = document.getElementById('inp-min').value;
//   var val_max = document.getElementById('inp-max').value;

//   if (+val_min >= 10000 && +val_max <= 50000){
//   var elems = document.getElementsByClassName('20-30k');
//   for (var i=0; i<elems.length; i+=1){elems[i].style.display = 'block';} 
  
//   var elems_2 = document.getElementsByClassName('30-40k');
//   for (var i=0; i<elems.length; i+=1) {elems_2[i].style.display = 'block';}
  
//   var elems_3 = document.getElementsByClassName('10-20k');
//   for (var i=0; i<elems.length; i+=1) {elems_3[i].style.display = 'block';}
    
//   } 
//   if (+val_min >= 10000 && +val_max <= 20000){
// var elems = document.getElementsByClassName('20-30k');
// for (var i=0; i<elems.length; i+=1){elems[i].style.display = 'none';} 

// var elems_2 = document.getElementsByClassName('30-40k');
// for (var i=0; i<elems_2.length; i+=1) {elems_2[i].style.display = 'none';}

// var elems_3 = document.getElementsByClassName('10-20k');
// for (var i=0; i<elems_3.length; i+=1) {elems_3[i].style.display = 'block';}

// } else if (+val_min >= 20000 && +val_max <= 30000) {
// var elems = document.getElementsByClassName('10-20k');
// for (var i=0; i<elems.length; i+=1){elems[i].style.display = 'none';} 

// var elems_2 = document.getElementsByClassName('30-40k');
// for (var i=0; i<elems_2.length; i+=1) {elems_2[i].style.display = 'none';}

// var elems_3 = document.getElementsByClassName('20-30k');
// for (var i=0; i<elems_3.length; i+=1) {elems_3[i].style.display = 'block';}

// } else if (+val_min >= 30000 && +val_max <= 40000) {
// var elems = document.getElementsByClassName('10-20k');
// for (var i=0; i<elems.length; i+=1){elems[i].style.display = 'none';} 

// var elems_2 = document.getElementsByClassName('20-30k');
// for (var i=0; i<elems_2.length; i+=1) {elems_2[i].style.display = 'none';}

// var elems_3 = document.getElementsByClassName('30-40k');
// for (var i=0; i<elems_3.length; i+=1) {elems_3[i].style.display = 'block';
// } 
// } else if (+val_min >= 10000 && +val_max <= 50000){
//   var elems = document.getElementsByClassName('10-20k');
// for (var i=0; i<elems.length; i+=1){elems[i].style.display = 'block';} 

// var elems_2 = document.getElementsByClassName('20-30k');
// for (var i=0; i<elems_2.length; i+=1) {elems_2[i].style.display = 'block';}

// var elems_3 = document.getElementsByClassName('30-40k');
// for (var i=0; i<elems_3.length; i+=1) {elems_3[i].style.display = 'block';
// }
// }
// }


// const f1 = () => {
//   let dir2 = document.getElementsByClassName('dir2');
//   for(let i = 0; i < dir2.length; i++){
//     dir2.style.display='none';
//   }
// };

// const dir1 = document.querySelector('dir1');











const button1 = document.getElementById('div1');

button1.onclick = function Div(){
  document.getElementById("kek").style.display = "block";
};



function Div(val){

  if(val==1)
    {
      var elems=document.getElementsByClassName('mathematic');

      for(var i=0; i<elems.length; i++)elems[i].style.display='none';
      
      var elems=document.getElementsByClassName('obshestvo');
      
      for(var i=0; i<elems.length; i++)elems[i].style.display='none';
      
      var elems=document.getElementsByClassName('biology');
      
      for(var i=0; i<elems.length; i++)elems[i].style.display='block';

  } 

  if(val==2)
  {
  var elems=document.getElementsByClassName('obshestvo');

for(var i=0; i<elems.length; i++)elems[i].style.display='none';

var elems=document.getElementsByClassName('biology');

for(var i=0; i<elems.length; i++)elems[i].style.display='none';

var elems=document.getElementsByClassName('mathematic');

for(var i=0; i<elems.length; i++)elems[i].style.display='block';

} 


if(val==3)
{
  var elems=document.getElementsByClassName('mathematic');

  for(var i=0; i<elems.length; i++)elems[i].style.display='none';
  
  var elems=document.getElementsByClassName('biology');
  
  for(var i=0; i<elems.length; i++)elems[i].style.display='none';
  
  var elems=document.getElementsByClassName('obshestvo');
  
  for(var i=0; i<elems.length; i++)elems[i].style.display='block';

} 
}




