

jQuery(document).ready(function ($) {

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Stick the header at top on scroll
  $("#header").sticky({
    topSpacing: 0,
    zIndex: '50'
  });

  // Intro background carousel
  $("#intro-carousel").owlCarousel({
    autoplay: true,
    dots: false,
    loop: true,
    animateOut: 'fadeOut',
    items: 1
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });
  
  function createMobileNav() {
    // Verifica si existe el contenedor del menú
    if ($('#nav-menu-container').length) {
        // Clona el menú y asigna un nuevo ID
        var $mobile_nav = $('#nav-menu-container').clone().prop({
            id: 'mobile-nav'
        });

        // Elimina la clase y asigna un nuevo ID al primer nivel de la lista
        $mobile_nav.find('> ul').attr({
            'class': '',
            'id': 'mobile-nav-ul'
        });


        // Agrega el menú móvil al encabezado (o cualquier otro contenedor que prefieras)
        $('header').append($mobile_nav);

        // Agrega el botón de toggle al principio del body
        $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');

        // Agrega un overlay al final del body
        $('body').append('<div id="mobile-body-overly"></div>');

        // Agrega flechas de despliegue a los elementos con submenús
        $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

        // Maneja los eventos de clic en los íconos de flecha para mostrar/ocultar submenús
        $(document).on('click', '.menu-has-children i', function(e) {
            $(this).next().toggleClass('menu-item-active');
            $(this).nextAll('ul').eq(0).slideToggle();
            $(this).toggleClass("fa-chevron-up fa-chevron-down");
        });

        // Maneja el evento de clic en el botón de toggle para mostrar/ocultar el menú móvil
        $(document).on('click', '#mobile-nav-toggle', function(e) {
            $('body').toggleClass('mobile-nav-active');
            $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
            $('#mobile-body-overly').toggle();
        });

        // Maneja el evento de clic en el enlace "Change Language" dentro del menú móvil
      

        // Maneja el evento de clic fuera del menú para cerrarlo
        $(document).click(function(e) {
            var container = $("#mobile-nav, #mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                    $('#mobile-body-overly').fadeOut();
                }
            }
        });
    } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
        // Oculta el menú móvil si no existe el contenedor del menú
        $("#mobile-nav, #mobile-nav-toggle").hide();
    }
}






  // Llama a la función cuando el documento esté completamente cargado
  $(document).ready(function() {
    createMobileNav();
  });
  
  
  // Smooth scroll for the menu and links with .scrollto classes
  $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (!$('#header').hasClass('header-fixed')) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });


  // Porfolio - uses the magnific popup jQuery plugin
  $('.portfolio-popup').magnificPopup({
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-fade',
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300,
      easing: 'ease-in-out',
      opener: function (openerElement) {
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

  // Clients carousel (uses the Owl Carousel library)
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 4
      },
      900: {
        items: 6
      }
    }
  });


});


function printMenuClasses() {
  // Espera a que el documento esté listo
  $(document).ready(function() {
    // Espera a que el menú móvil esté listo
    $(document).on('click', '#mobile-nav-toggle', function() {
      // Itera sobre todos los elementos del menú y muestra sus clases
      $('#mobile-nav').find('*').each(function() {
        var classes = $(this).attr('class');
        if (classes) {
          console.log("Clases del elemento:", classes);
        }
      });
    });
  });
}

// Llama a la función cuando el documento esté listo
printMenuClasses();




