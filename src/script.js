
//const [input1, input2] = document.querySelectorAll("input");//usando descostrução 
//console.log(input1, input2) 
const testeInput = document.querySelectorAll("input"); // usando nodelist
const img = document.querySelector("img");


/* input3.addEventListener('input', handleChange)
 */
/* function handleChange(){
    if(input1.value && input2.value.length >= 6){
        input3.removeAttribute("disabled");
    }else{
        input3.setAttribute("disabled", "");
    }
}  */ 

img.classList.add("photo");

function mudarInput(){
     //desconstrução dentro da função, usar isso com node list
     const [input1, input2] = testeInput
    if(input1.value && input2.value.length >= 6){
        img.classList.remove("photo");
        img.classList.add("mudanca");
         img.setAttribute('src', 'https://blog.betway.com/pt/media/width1220/23124/design-sem-nome-34.jpg')
   }else{
        img.classList.add("photo");
        img.classList.remove("mudanca");

    }

}

//[input, input]

 testeInput.forEach(function(input){
input.addEventListener('input', mudarInput) 
}) 
// usando nodelist
/* input1.addEventListener("input", mudarInput);
input2.addEventListener("input", mudarInput); */ // usando desconstruido




//Crie um evento de click através do javaScript sem usar o atributo onclick, e ao clicar no botão ativa uma classe que da estilo e forma a uma div


//agora crie um input que ao ter mais de 6 letras torne visivel um texto.