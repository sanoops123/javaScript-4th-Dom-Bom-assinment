
/*function myFunction() {
    const list = document.getElementById("colorSelect");
    list.removeChild(list.firstElementChild);
}*/

document.getElementById('Action').addEventListener('click',function(){
     document.getElementById('colorSelect').removeChild(document.getElementById('colorSelect').lastElementChild)
})
