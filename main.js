var nm = document.getElementById('nm');

function doc(){

var age = prompt(' Kindly enter your age : ');
console.log(age);

if (age < 18) 
{
    window.location.href = "index2.html";
}
else {
    window.location.href = "docs.html";


}
return false;

}