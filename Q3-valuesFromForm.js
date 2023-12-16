
/*
function getFormvalue()
{
  var result=document.getElementById("form1");
  for (var i=0;i<result.length;i++){
    if (result.elements[i].value!='Submit')
    {  
      console.log(result.elements[i].value);
     }  
   }
}
*/


function getNames(){
  var firstName = document.getElementById('form1').elements['fname'].value;
  var secondName = document.getElementById('form1').elements['lname'].value;

  console.log(firstName);
  console.log(secondName);
} 

