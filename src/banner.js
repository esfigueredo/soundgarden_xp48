const banner = document.querySelector(".text-center");

array1 = new Array ("/img/show1.jpg", "/img/show2.jpg", "/img/show3.jpg");

function comeco(){
document.getElementById('imgId').src = array1[0]
// setTimeout("mais()", 3000)
document.form.texto.value="0"
}

function mais(){
document.form.texto.value = Math.floor (1+ 1 - 2 + (document.form.texto.value) * 1 + 1)
if (document.form.texto.value > 2)
// setTimeout("menos()", 3000)
{document.form.texto.value = 0}
}

function menos(){
document.form.texto.value = Math.floor (1+ 1 - 2 + (document.form.texto.value) * 1 -1)
if (document.form.texto.value < 0)
// setTimeout("comeco()", 3000)
{document.form.texto.value = 2}
}

function regular(){
document.getElementById('imgId').src = array1[document.form.texto.value];
setTimeout("regular()", 1)
}





