$(document).ready(function () {
    $('nav ul p:eq(1)').click(function() {
        $('aside').slideUp()
        $('.container-service').fadeOut()
        $('.about').css({
            color: 'blue',
            transition: 'all .70s'
            
        })
        $('.skills').css({
            color: 'black'
        })
        $('.experience').css({
            color: 'black'
        })
        $('.education').css({
            color: 'black'
        })
        $('.blog').css({
            color: 'black'
        })
        $('.contact').css({
            color: 'black'
        })
        
    })
    $('nav ul p:eq(1)').click(function() {
        $('.about-me').slideDown()
        $('.container-service').fadeOut()
        $('.container-skills').slideUp()
        $('.container-experience').slideUp()
        $('.container-education').slideUp()
        $('.container-blog').slideUp()  
        $('.container-contact').slideUp()        
        $('.home').css({
            color: 'black',
            transition: 'all .70s'
        })
        $('.service').css({
            color: 'black'
        })  
        $('.skills').css({
            color: 'black'
        })
        $('.experience').css({
            color: 'black'
        })
        $('.education').css({
            color: 'black'
        })
        $('.blog').css({
            color: 'black'
        })
        $('.contact').css({
            color: 'black'
        })      
    })
    $('nav ul p:eq(0)').click(function() {
        $('aside').slideDown()
        $('.container-service').fadeOut()
        $('.container-skills').slideUp()
        $('.container-experience').slideUp()
        $('.container-education').slideUp()
        $('.container-blog').slideUp()  
        $('.container-contact').slideUp()        
        $('.about').css({
            color: 'black',
            transition: 'all .70s'
        })
        $('.service').css({
            color: 'black'
        })
        $('.skills').css({
            color: 'black'
        })
        $('.experience').css({
            color: 'black'
        })
        $('.education').css({
            color: 'black'
        })
        $('.blog').css({
            color: 'black'
        })
        $('.contact').css({
            color: 'black'
        })
    })
    $('nav ul p:eq(0)').click(function() {
        $('.about-me').fadeOut(1200)
        $('.home').css({
            color: 'blue',
            transition: 'all .70s'
        })
    })

    // container service
    $('nav ul p:eq(2)').click(function() {
      $('.container-service').slideDown()
      $('aside').slideUp()
      $('.about-me').slideUp()
      $('.container-experience').slideUp()
      $('.container-skills').slideUp()
      $('.container-education').slideUp()
      $('.container-blog').slideUp()  
      $('.container-contact').slideUp()        
      $('.home').css({
          color: 'black'
      })
      $('.about').css({
        color: 'black'
    })
    $('.skills').css({
        color: 'black'
    })
    $('.experience').css({
        color: 'black'
    })
    $('.education').css({
        color: 'black'
    })
    $('.blog').css({
        color: 'black'
    })
    $('.contact').css({
        color: 'black'
    })
      $('.service').css({
        color: 'blue'
    })
        
    })

    // container skills

    $('nav ul p:eq(3)').click(function(){
        $('.container-skills').fadeIn()
        $('aside').slideUp()
        $('.about-me').slideUp()
        $('.container-service').slideUp()
        $('.container-experience').slideUp()
        $('.container-education').slideUp()
        $('.container-blog').slideUp()  
        $('.container-contact').slideUp()        
        $('.home').css({
            color: 'black'
        })
        $('.about').css({
          color: 'black'
      })
       $('.service').css({
        color: 'black'
    })
    $('.skills').css({
        color: 'black'
    })
    $('.experience').css({
        color: 'black'
    })
    $('.education').css({
        color: 'black'
    })
    $('.blog').css({
        color: 'black'
    })
    $('.contact').css({
        color: 'black'
    })
    $('.skills').css({
        color: 'blue'
    })
    })

    //container-experience

    $('nav ul p:eq(4)').click(function(){
        $('.container-experience').fadeIn()
        $('aside').slideUp()
        $('.about-me').slideUp()
        $('.container-service').slideUp()
        $('.container-skills').slideUp()
        $('.container-education').slideUp()
        $('.container-blog').slideUp()  
        $('.container-contact').slideUp()         
        $('.home').css({
            color: 'black'
        })
        $('.about').css({
          color: 'black'
      })
       $('.service').css({
        color: 'black'
    })
    $('.skills').css({
        color: 'black'
    })
    $('.experience').css({
        color: 'black'
    })
    $('.education').css({
        color: 'black'
    })
    $('.blog').css({
        color: 'black'
    })
    $('.contact').css({
        color: 'black'
    })
    $('.experience').css({
        color: 'blue'
    })
    })
    // container education

    $('nav ul p:eq(5)').click(function(){
        $('.container-education').fadeIn()
        $('aside').slideUp()
        $('.about-me').slideUp()
        $('.container-service').slideUp()
        $('.container-skills').slideUp()
        $('.container-experience').slideUp()        
        $('.container-blog').slideUp()   
        $('.container-contact').slideUp()        

        $('.home').css({
            color: 'black'
        })
        $('.about').css({
          color: 'black'
      })
       $('.service').css({
        color: 'black'
    })
    $('.skills').css({
        color: 'black'
    })
    $('.experience').css({
        color: 'black'
    })
    $('.education').css({
        color: 'black'
    })
    $('.blog').css({
        color: 'black'
    })
    $('.contact').css({
        color: 'black'
    })
    $('.education').css({
        color: 'blue'
    })
    })

    //container blog

    $('nav ul p:eq(6)').click(function(){
        $('.container-blog').slideDown()
        $('aside').slideUp()
        $('.about-me').slideUp()
        $('.container-service').slideUp()
        $('.container-skills').slideUp()
        $('.container-experience').slideUp()        
        $('.container-contact').slideUp() 
        $('.container-education').slideUp()       
        $('.home').css({
            color: 'black'
        })
        $('.about').css({
          color: 'black'
      })
       $('.service').css({
        color: 'black'
    })
    $('.skills').css({
        color: 'black'
    })
    $('.experience').css({
        color: 'black'
    })
    $('.education').css({
        color: 'black'
    })
    $('.contact').css({
        color: 'black'
    })
    $('.blog').css({
        color: 'blue'
    })
    })

    //container contact

    $('nav ul p:eq(7)').click(function(){
        $('.container-contact').fadeIn()
        $('aside').slideUp()
        $('.about-me').slideUp()
        $('.container-service').slideUp()
        $('.container-skills').slideUp()
        $('.container-experience').slideUp()        
        $('.container-blog').slideUp()   
        $('.container-education').slideUp()     
        $('.home').css({
            color: 'black'
        })
        $('.about').css({
          color: 'black'
      })
       $('.service').css({
        color: 'black'
    })
    $('.skills').css({
        color: 'black'
    })
    $('.experience').css({
        color: 'black'
    })
    $('.education').css({
        color: 'black'
    })
    $('.blog').css({
        color: 'black'
    })
    $('.contact').css({
        color: 'blue'
    })
    })

    // form contact

    $('.grid-rs-email button').click(function(){
        $('#form-contact').slideToggle('slow')

    })

    $("#form-contact" ).focusin(function() {
        var tagName = this.tagName;
        var id = this.id;
        console.log("focusin:("+ tagName + " , # " + id + " ) ");
        });
    
})