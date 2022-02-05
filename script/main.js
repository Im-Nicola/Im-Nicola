
    var porcentHtml = document.querySelector(".html-porcentagem h6")
    var nivelHtml = document.querySelector(".nivel-html")

    var cont = 4

    var  loadHtml = setInterval(animateHtml, 200)

    function animateHtml(){
        if(cont == 90){
            // nivelHtml.parentElement.removeChild(nivelHtml)
            clearInterval(loadHtml)
        }else{
            cont = cont +1
            porcentHtml.textContent = cont + '%'
        }
    }
    