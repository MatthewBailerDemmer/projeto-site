var z = window.document.querySelector('input#calcular')
var s = window.document.querySelector('input#calcular')
var f = window.document.querySelector('input#calcular')
z.addEventListener('click',clicar)

var c4 = 0
var c5 =0


function clicar(){
    var a1 = window.document.querySelector('input#coefa')
    var b1 = window.document.querySelector('input#coefb')
    var c1 = window.document.querySelector('input#coefc')
    var img5 = window.document.getElementById('imagem');
        var a = Number.parseInt(a1.value)
        var b = Number.parseInt(b1.value)
        var c = Number.parseInt(c1.value)
    var delta = (b**2 - 4*a*c)**(1/2)
  
    var x1 = Number.parseFloat((-b) + delta)/(2*a) // -b + delta
    var x2 = Number.parseFloat((-b) - delta)/(2*a) // -b - delta
   
var x = window.document.querySelector('p#res')
 
 console.log(delta)
   c4++
console.log(` c4 = ${c4}`)
 
 if (c4 < 5) {
    
        if(delta > 0){
            x.innerHTML += `${c4}. S={${x1},${x2}}<br>`
        }else {
            x.innerHTML += `${c4}. Conjunto solucão vazio dentro dos reais!<br>`
        }   
}else if(c4 == 5){
    if(delta > 0){
        x.innerHTML += `${c4}. S={${x1},${x2}}<br>`
    }else {
        x.innerHTML += `${c4}. Conjunto solucão vazio dentro dos reais!<br>`
    }   
    z.value = "Limpar"
    
} else{
    x.innerHTML = " "
    c4 = 0
    z.value="calcular"
}                  
           
      c5++
      if(c5 == 5) {
        img5.setAttribute('src','calfoto.jpg');
      }     
        
 
 
}
 









   