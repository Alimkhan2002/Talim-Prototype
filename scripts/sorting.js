function hideShowDiv(val)
{
  if(val==1)
  {
    var elems=document.getElementsByClassName('all');
for(var i=0; i<elems.length; i++)elems[i].style.display='block';
  }
  if(val==2)
  {
    var elems=document.getElementsByClassName('ru');
for(var i=0; i<elems.length; i++)elems[i].style.display='none';
var elems=document.getElementsByClassName('kz');
for(var i=0; i<elems.length; i++)elems[i].style.display='block';
} 
if(val==3)
{
    var elems=document.getElementsByClassName('kz');
    for(var i=0; i<elems.length; i++)elems[i].style.display='none';
    var elems=document.getElementsByClassName('ru');
for(var i=0; i<elems.length; i++)elems[i].style.display='block';
}
}