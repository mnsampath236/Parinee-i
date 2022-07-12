var $ = jQuery.noConflict();
$(document).ready(function(){
  		  $.validator.addMethod("customemail", 
    function(value, element) {
        return /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value);
    }, 
    "Sorry, I've enabled very strict email validation"
);
  var open_menu_item;
  $(document).on('click', '#menu ul li.has_child > .hc_cta', function(e){
    if($(window).width() < 1200){
      e.preventDefault();
      open_menu_item = $(this).parent('li');
      if(open_menu_item.hasClass('open')){
          open_menu_item.removeClass('open');
          open_menu_item.find('ul').slideUp(200);
      }else{
          open_menu_item.addClass('open');
          open_menu_item.find('ul').slideDown(200);
      }
    }
  });
  

 /* $('input[name^="phone"]' ).on("blur", function(){
        var mobNum = $(this).val();
        var filter = /^\d*(?:\.\d{1,2})?$/;

          if (filter.test(mobNum)) {
            if(mobNum.length==10){
                  alert("valid");
              $("#mobile-valid").removeClass("hidden");
              $("#folio-invalid").addClass("hidden");
             } else {
                alert('Please put 10  digit mobile number');
               $("#folio-invalid").removeClass("hidden");
               $("#mobile-valid").addClass("hidden");
                return false;
              }
            }
            else {
              alert('Not a valid number');
              $("#folio-invalid").removeClass("hidden");
              $("#mobile-valid").addClass("hidden");
              return false;
           }
 
}); */

      $('input[name^="user_name"]' ).keydown(function (e) {
		if (e.shiftKey || e.ctrlKey || e.altKey) {
		//e.preventDefault();
		} else {
		var key = e.keyCode;
		if (!((key == 8) || (key == 9) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
		e.preventDefault();
		}
		}
	});

  $('input[name^="firstname"]' ).keydown(function (e) {
		if (e.shiftKey || e.ctrlKey || e.altKey) {
		//e.preventDefault();
		} else {
		var key = e.keyCode;
		if (!((key == 8) || (key == 9) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
		e.preventDefault();
		}
		}
	});

  $('input[name^="lastname"]' ).keydown(function (e) {
		if (e.shiftKey || e.ctrlKey || e.altKey) {
		//e.preventDefault();
		} else {
		var key = e.keyCode;
		if (!((key == 8) || (key == 9) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
		e.preventDefault();
		}
		}
	});


  $('input[name^="acq_details[first_name][]"]' ).keydown(function (e) {
		if (e.shiftKey || e.ctrlKey || e.altKey) {
		//e.preventDefault();
		} else {
		var key = e.keyCode;
		if (!((key == 8) || (key == 9) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
		e.preventDefault();
		}
		}
	});

  $('input[name^="acq_details[last_name][]"]' ).keydown(function (e) {
		if (e.shiftKey || e.ctrlKey || e.altKey) {
		//e.preventDefault();
		} else {
		var key = e.keyCode;
		if (!((key == 8) || (key == 9) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
		e.preventDefault();
		}
		}
	});
      /*$('input[name^="phone"]' ).keypress(function (e) {
         var length = jQuery(this).val().length;
       if(length > 9) {
            return false;
       } else if(e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
       } else if((length == 0) && (e.which == 48)) {
            return false;
       }
      });*/
  

  $(document).on('click', '.partner_cta', function(){
      $('.pip_imgbox img').attr('src', $(this).data('image'))
      $('.pip_title').text($(this).data('name'));
      $('.pip_desc').html($(this).data('description'));
      $('.partner_info_popup').fadeIn(200);
  });

    if($('.our-partn-bx .txt-content').length > 0){
        partnerContentHeight();
    }

  $(document).on('click', '.pip_close', function(){
      $('.partner_info_popup').fadeOut(200);
  });

  $('.ret-hero-slideshow').each(function(){
      if($(this).find('.ret-hero-banner-block').length < 2){
          //$(this).find('.ret-hero-banner-overlay').addClass('mob_no_transform');
      }
  });

    if($('.fp-text-slider').length > 0){
        $('.fp-text-slider').each(function(){
            $(this).slick({
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: false,
                speed: 700,
                autoplay: false,
                dots:false,
                arrows:true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    }
                ]
            });
        });
        
    };

    if($('.terms_slider').length && $(window).innerWidth() > 1024){
        $('.terms_slider').slick({
            slidesToShow: 10,
            slidesToScroll: 10,
            infinite: false,
            speed: 700,
            autoplay: false,
            dots:false,
            arrows:true
        });
    };

  /* Completed project slider starts here */
  if($('.comp_proj_slideshow').length && $('.comp_proj_slide').length > 1){
    $('.comp_proj_slideshow').slick({
      dots: false,
      autoplay: true,
      autoplaySpeed: 10000,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      arrows:true
    });
  };
  /* Completed project slider ends here */

  if($('.hr-testimonial-slider').length && $('.hr-testimonial-slide').length > 1){
    $('.hr-testimonial-slider').slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 10000,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      arrows:false
    });
  };

  /* page_slider starts here */
  if($('.page_slider').length && $('.page_slide').length > 1){
    $('.page_slider').slick({
      dots: false,
      autoplay: true,
      autoplaySpeed: 10000,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      arrows:false
    });
  };
  /* page_slider ends here */

  /* floor_plan_slider starts here */
  if($('.floor_plan_slider').length && $('.floor_plan_slide').length > 1){
    $('.floor_plan_slider').slick({
      lazyLoad: 'progressive',
      dots: false,
      autoplay: true,
      autoplaySpeed: 10000,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      arrows:false
    });
  };
  /* floor_plan_slider ends here */

  if($('.ret-hero-slideshow .ret-hero-banner-block').length > 1){
    $('.ret-hero-slideshow').slick({
      lazyLoad: 'ondemand',
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      speed: 700,
      autoplay: false,
      autoplaySpeed: 10000,
      dots:true,
      arrows:false,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              arrows:true,
              dots: false
            }
          }
        ]
    });

    $(".ret-hero-slideshow").on("lazyLoaded", function(e, slick, image, imageSource) {
        parentSlide = $(image).parent(".imgbox");
        imageSource.src = image.attr("src"); //get source
        parentSlide.css("background-image", 'url("' + imageSource + '")').addClass("loaded"); //replace with background instead
        image.remove(); // remove source
    });

  };

    greenSlider();
    greenSlider01();
    //greenSlider1();
    if($('.news-slider').length){
      $('.news-slider').slick({
        lazyLoad: 'progressive',
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:true,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                  slidesToShow: 2
                }
              },
              {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1
            }
          },
          {
            breakpoint: 599,
            settings: {
              slidesToShow: 1,
              arrows:true,
            }
          }
        ]
      });
    };

    if($('.partner-slider').length && $('.partner-slider .logoimg-bx').length > 1){
      $('.partner-slider').slick({
        dots: false,
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 10000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:true,
        responsive: [
              {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 599,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      });
    };
    if($('.bnk-slider').length && $('.bnk-slider .logoimg-bx').length > 1){
      $('.bnk-slider').slick({
        dots: false,
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 10000,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows:true,
        responsive: [
              {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 599,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      });
    };
    if($('.cnsp-slider').length){
      $('.cnsp-slider').slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 10000,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        responsive: [
              {
            breakpoint: 1024,
            settings: {
              arrows:true,
            }
          }
        ]
      });
    };
    if($('.ret-seas-slider').length){
      $('.ret-seas-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        dots:false,
        arrows:true,
        vertical: true,
        verticalSwiping: true,
        asNavFor: '.cp-ov-slider',
        responsive: [
            {
          breakpoint: 1024,
          settings: {
            vertical: false,
             verticalSwiping: false,
          }
        }
      ]
      });
      $('.cp-ov-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.ret-seas-slider',
        dots: false,
        arrows:false,
        centerMode: false,
        focusOnSelect: true,
        fade: true,
        cssEase: 'linear',
        speed: 700,
        // vertical: true,
        // verticalSwiping: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              vertical: false,
              verticalSwiping: false,
            }
          }
        ]
      });
    };
    if($('.thoug-img-slider').length){
      $('.thoug-img-slider').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots:false,
        arrows:false,
        vertical: true,
        verticalSwiping: true,
        asNavFor: '.tho-slider',
        responsive: [
            {
          breakpoint: 1024,
          settings: {
            vertical: false,
            verticalSwiping: false,
            arrows: true
          }
        }
      ]
      });

      $(".thoug-img-slider").on("lazyLoaded", function(e, slick, image, imageSource) {
          parentSlide = $(image).parent(".imgbox");
          imageSource.src = image.attr("src"); //get source
          parentSlide.css("background-image", 'url("' + imageSource + '")').addClass("loaded"); //replace with background instead
          image.remove(); // remove source
      });

      $('.tho-slider').slick({
        lazyLoad: 'progressive',
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.thoug-img-slider',
        dots: false,
        arrows:false,
        centerMode: false,
        focusOnSelect: true,
        vertical: true,
        verticalSwiping: true/*,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              vertical: false,
              verticalSwiping: false,
            }
          }
        ]*/
      });
    };
    if($('.gt-commu-slider').length){
      $('.gt-commu-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 700,
        dots:false,
        arrows:true,
        vertical: true,
        verticalSwiping: true,
        asNavFor: '.gt-com-slider',
        responsive: [
            {
          breakpoint: 1024,
          settings: {
            vertical: false,
            verticalSwiping: false,
            arrows:false
          }
        }
      ]
      });
      $('.gt-com-slider').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          //fade: true,
          cssEase: 'linear',
          // autoplay: true,
          // autoplaySpeed: 5000,
          dots:false,
          arrows:false,
          /*vertical: true,
          verticalSwiping: true,*/
          asNavFor: '.gt-commu-slider',
          responsive: [
            {
            breakpoint: 1024,
            settings: {
            vertical: false,
            verticalSwiping: false,
            arrows:false,
            dots: true
          }
        }
      ]
      });
    };
    if($('.testm-slider').length){
      var $status = $('#pagingInfo4');
      var $slickElement = $('.testm-slider');

      $slickElement.on('init reInit', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.html('<span class="active-num">1</span><span class="dash">&#124;</span><span>' + slick.slideCount + '</span>');
      });
      $slickElement.on('afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('#pagingInfo4 .active-num').text(i);
      });

      
      $('.testm-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 700,
        infinite: true,
        dots:false,
        arrows:true,
        asNavFor: '.rt-slider',
        prevArrow: $("#prvarrow3"),
        nextArrow: $("#nxtarrow3"),
        // vertical: true,
        // verticalSwiping: true,
        responsive: [
            {
          breakpoint: 1024,
          settings: {
            vertical: false,
            verticalSwiping: false,
            arrows:false,
          }
        }
      ]
      });
      $('.rt-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.testm-slider',
        dots: false,
        infinite: true,
        arrows:false,
        centerMode: false,
        focusOnSelect: true,
        fade: true,
          cssEase: 'linear',
        /*vertical: true,
        verticalSwiping: true,*/
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                vertical: false,
                verticalSwiping: false,
                arrows:false,
              }
            }
          ]
      });
    };
    if($('.infra-doc-slider').length){
      var $status = $('#pagingInfo5');
      var $slickElement = $('.infra-doc-slider');
      $slickElement.on('init reInit', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.html("<span class='active-num'>1</span><span class='dash'>&#124;</span><span>" + slick.slideCount + "</span>");
        //$('#pagingInfo5 .active-num').text(i);
        //console.log(i);
      });

      $slickElement.on('afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        //$status.html("<span class='active-num'>" + i + '</span><span class="dash">&#124;</span><span>' + slick.slideCount + "</span>");
        $('#pagingInfo5 .active-num').text(i);
        //console.log(i);
      });

      $('.infra-doc-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 700,
        infinite: true,
        dots:false,
        arrows:true,
        prevArrow: $("#prvarrow4"),
        nextArrow: $("#nxtarrow4"),
        responsive: [
          {
            breakpoint: 600,
            settings: {
              dots:true,
            }
          }
        ]
      });
    };
    if($('.journ-lnc-slider').length){
      var $status = $('#pagingInfo1');
      var $slickElement = $('.journ-lnc-slider');

      $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      $status.html("<span>0" + i + '</span><span class="dash">&#8212;</span><span>' + "0" + slick.slideCount + "</span>");
      });
      $('.journ-lnc-slider').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          infinite: false,
          autoplay: true,
          autoplaySpeed: 10000,
          speed: 700,
          //fade: true,
          asNavFor: '.journ-nav-slider'
        });
        $('.journ-nav-slider').slick({
          slidesToShow: 8,
          slidesToScroll: 1,
          infinite: false,
          asNavFor: '.journ-lnc-slider',
          dots: false,
          arrows: true,
          focusOnSelect: true,
          prevArrow: $("#prvarrow1"),
          nextArrow: $("#nxtarrow1"),
          responsive: [
                {
              breakpoint: 1024,
              settings: {
                slidesToShow: 6
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 4
              }
            },
            {
              breakpoint: 560,
              settings: {
                slidesToShow: 3
              }
            }
          ]
        });
      };
      if($('.ament-slider').length){
        $('.ament-slider').slick({
          dots: false,
          speed: 700,
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '100px',
          arrows:true,
          autoplay: true,
          autoplaySpeed: 10000,
          responsive: [
                {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1
              }
            },
            {
              breakpoint: 599,
              settings: {
                slidesToShow: 1,
                centerPadding: '0px',
                arrows:true,
              }
            }
          ]
        });


        /*$('.ament-slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
            if(slick.slideCount <= 3){
                $('.ament-slider').slick('unslick');
            }
        });*/

      };
      if($('.gallery-thumb-slider').length){
        $('.gallery_tab_panel').each(function(){
            var $status = $(this).find('.pagingInfo3');
            var $mainParent = $(this);
            var $slickElement = $(this).find('.gallery-thumb-slider');

            $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
              var i = (currentSlide ? currentSlide : 0) + 1;
              $status.html("<span>0" + i + '</span><span class="dash">&#8212;</span><span>' + "0" + slick.slideCount + "</span>");
            });
            $slickElement.slick({
              dots: false,
              infinite: true,
              autoplay: true,
              autoplaySpeed: 10000,
              speed: 700,
              slidesToShow: 3,
              slidesToScroll: 1,
              prevArrow: $mainParent.find(".prvarrow2"),
              nextArrow: $mainParent.find(".nxtarrow2"),
              responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                  }
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 2,
                  }
                },
                {
                  breakpoint: 599,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]
            });
        });
        
      };

    if($('.rlts_blog_item_slider').length){
      $('.rlts_blog_item_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 10000,
        dots:false,
        arrows:false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                arrows:true,
              }
            },
            {
              breakpoint: 599,
              settings: {
                slidesToShow: 1,
                arrows:true,
              }
            }
          ]
      });
    };

    if($('.rg-thoug-wrap-slider').length){
      $('.rg-thoug-wrap-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 10000,
        dots:false,
        arrows:false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                arrows:true,
              }
            },
            {
              breakpoint: 599,
              settings: {
                slidesToShow: 1,
                arrows:true,
              }
            }
          ]
      });
    };

    if($('.img_content_slider').length){
      var $status = $('#pagingInfo6');
      var $slickElement = $('.img_content_slider');
      $slickElement.on('init reInit', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.html("<span class='active-num'>01</span><span class='dash'>&#8212;</span><span>0" + slick.slideCount + "</span>");
        //$('#pagingInfo5 .active-num').text(i);
        //console.log(i);
      });

      $slickElement.on('afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        //$status.html("<span class='active-num'>" + i + '</span><span class="dash">&#124;</span><span>' + slick.slideCount + "</span>");
        $('#pagingInfo6 .active-num').text('0'+i);
        //console.log(i);
      });

      $('.img_content_slider').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 700,
        infinite: true,
        dots:false,
        arrows:true,
        prevArrow: $("#prvarrow5"),
        nextArrow: $("#nxtarrow5"),
      });

      $(".img_content_slider").on("lazyLoaded", function(e, slick, image, imageSource) {
          parentSlide = $(image).parent(".ics_img");
          imageSource.src = image.attr("src"); //get source
          parentSlide.css("background-image", 'url("' + imageSource + '")').addClass("loaded"); //replace with background instead
          image.remove(); // remove source
      });

    };
    $('.wyrt_cryst_main_header ul li a.scrolllink').on('click', function (e) {
      // e.preventDefault();
      var target = this.hash,
          $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top-0
      }, 900, 'swing', function () {
      });
      return false;
  });
    $('.search-icon').click(function(){
        $(this).toggleClass('search-active');
        $('.search-form').slideToggle('slow');
        $('.search-form').toggleClass('active');
        if($('.search-form').hasClass('active')){
            $('.search-input').focus();
        } else {
            $('.search-input').blur();
        }
        if(window.innerWidth <= 1200){
            $('#menu').slideUp('slow');
            $('.close-icon').hide();
        }
    });
    $('.mobilemenu-icon').click(function(){
        $('body').addClass('menuactive');
        $('.close-icon').fadeIn(300);
        if(window.innerWidth >= 767){
            $('.search-form').slideUp('slow');
            $('.search-icon').removeClass('search-active');
        }
    });
    $('.close-icon').click(function(){
        $('body').removeClass('menuactive');
        $('.close-icon').fadeOut(300);
    });
    $('.more-btn a').click(function(){
        $('.more-btn').toggleClass('active');
        $(this).text($(this).text() == 'More' ? 'Less' : 'More' );
        $('.footer-wrap').slideToggle('slow');
    });

    $(document).on('click', '.disclaimer_cta', function(){
        if($('.disclaimer_toggle').hasClass('active')){
            $('.disclaimer_toggle').removeClass('active');
            $(this).text('Read more');
        }else{
            $('.disclaimer_toggle').addClass('active');
            $(this).text('Read less');
        }
    });
    $(document).on('click', '.property_details_cta', function(){
        if($('.property_details_toggle').hasClass('active')){
            $('.property_details_toggle').removeClass('active');
            $(this).text('Read more');
        }else{
            $('.property_details_toggle').addClass('active');
            $(this).text('Read less');
        }
    });

    $(document).on('click', '.c_overview_cta', function(){
        if($('#c_overview_text').hasClass('active')){
            $('#c_overview_text').removeClass('active');
            $(this).text('Read more');
        }else{
            $('#c_overview_text').addClass('active');
            $(this).text('Read less');
        }
    });

    $(document).on('click', '.pd_cta', function(){
        if($(this).siblings('.txt-content').hasClass('active')){
            $(this).siblings('.txt-content').removeClass('active');
            $(this).text('Read more');
        }else{
            $(this).siblings('.txt-content').addClass('active');
            $(this).text('Read less');
        }
    });

    $(document).on('click', '.open_cta_popup', function(e){
        if($(window).width() < 767){
            e.preventDefault();
            $('.yellow_cta_popup').fadeIn(200);
        }
    });

    $(document).on('click', '.ytp_close', function(){
        $('.yellow_cta_popup').fadeOut(200);
    });

    /*$(document).on('click', '.project_nav a', function(){
        $('.project_nav a').removeClass('active');
        $(this).addClass('active');
        $('html,body').animate({scrollTop: $('#' + $(this).data('ref')).offset().top - 83}, 1000);
    });*/
    var lastId,
     topMenu = $("#project_nav"),
     topMenuHeight = $('.header').height() + 80,
     // All list items
     menuItems = topMenu.find("a"),
     // Anchors corresponding to menu items
     scrollItems = menuItems.map(function(){
       var item = $($(this).attr("href"));
        if (item.length) { return item; }
     });

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.click(function(e){
      var href = $(this).attr("href"),
          offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
      $('html, body').stop().animate({ 
          scrollTop: offsetTop
      }, 850);
      e.preventDefault();
    });

    // Bind to scroll
    $(window).scroll(function(){
        /*if($(window).scrollTop() > 10){
            $('body').addClass('sticky_body');
        }else{
            $('body').removeClass('sticky_body');
        }*/
       // Get container scroll position
       var fromTop = $(this).scrollTop()+topMenuHeight;
       
       // Get id of current scroll item
       var cur = scrollItems.map(function(){
         if ($(this).offset().top < fromTop)
           return this;
       });
       // Get the id of the current element
       cur = cur[cur.length-1];
       var id = cur && cur.length ? cur[0].id : "";
       
       if (lastId !== id) {
           lastId = id;
           // Set/remove active class
           menuItems
             .parent().removeClass("active")
             .end().filter("[href=#"+id+"]").parent().addClass("active");
       }                   
    });

    $(document).on('click', '.close_popup', function(){
        $('.popup').fadeOut(200, function(){
            $('.popup_overlay').fadeOut(200);
        });
    });

    $(document).on('change', '#inventory_status', function(){
        $('.wing-item').hide();
        $('#'+$(this).val()).show();
    });

    $(document).on('change', '#gallery_type', function(){
      //console.log($(this).val());
        $('.gallery_tab_panel').hide();
        $('#'+$(this).val()).show();
        $('#'+$(this).val()).find('.gallery-thumb-slider').slick('refresh');

    });

    customSelectRender();

    /* EMI page */
    $(document).on('click', '.emi_faq_header', function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).siblings('.emi_faq_body').slideUp(300);
        }else{
            $(this).addClass('active');
            $(this).siblings('.emi_faq_body').slideDown(300);
        }
    });

    /* Loyalty popup */
    var a_add_more_html = '', l_row_cnt;
    $(document).on('click', '.l_add_more_cta', function(){
      //console.log();
      
      
       //$(".popup_row_clone").clone().appendTo(".loyalty_repeater_row");

     
        l_row_cnt = $('.loyalty_repeater_row').length + 1;
        console.log(l_row_cnt);
        //a_add_more_html = '<div class="loyalty_repeater_row clearfix"><div class="acq_row_cnt">'+l_row_cnt+'</div><a href="javascript:void(0)" class="lrr_remove"></a><div class="popup_row clearfix"><div class="popup_col popup_col_50"><input type="text" name="acq_details[first_name][]" class="black_input" placeholder="First Name" /></div><div class="popup_col popup_col_50"><input type="text" name="acq_details[last_name][]" class="black_input" placeholder="Last Name" /></div></div><div class="popup_row clearfix"><div class="popup_col popup_col_30"><select name="acq_details[country_code][]" class="black_select"><option value="+91">India +91</option><option value="+1">USA +1</option></select></div><div class="popup_col popup_col_70"><input type="number" name="acq_details[acq_phone][]" class="black_input" placeholder="Mob No.*" /></div></div>';
        a_add_more_html = '<div class="loyalty_repeater_row clearfix"><div class="acq_row_cnt">'+l_row_cnt+'</div><a href="javascript:void(0)" class="lrr_remove"></a><div class="popup_row clearfix"><div class="popup_col popup_col_50"><input type="text" name="acq_details[first_name][]" class="black_input" placeholder="First Name" /></div><div class="popup_col popup_col_50"><input type="text" name="acq_details[last_name][]" class="black_input" placeholder="Last Name" /></div></div><div class="popup_row clearfix"> <div class="popup_col cc_phone_wrap"><div class="inputwrap"><input type="number" name="acq_details[acq_phone][]" class="black_input cc_phone_input" id="rep_cc_phone_'+l_row_cnt+'" placeholder="Mobile No.*" /></div></div> </div>';
        /*<div class="popup_row clearfix"><div class="popup_col"> Existing Home Owner <input type="radio" name="acq_details[existing_owner]['+l_row_cnt+']" value="Yes"> Yes / <input type="radio" checked name="acq_details[existing_owner]['+l_row_cnt+']" value="No"> No</div></div></div> ';
        <div class="popup_row clearfix" ><div class="popup_col"><select name="acq_details[project_name_booked][]" class="no_select select_project" id="select_project_'+l_row_cnt+'" multiple>'+$(".popup_row_clone").html()+'</select>   </div> </div>*/
        //$(a_add_more_html).insertBefore('.lrr_end');
        $('.lr-list').append(a_add_more_html);
        $('#select_project_'+l_row_cnt).select2MultiCheckboxes({
            templateSelection: function(selected, total) {
                if(selected.length == 0){
                    return "Project Name Booked in";
                }else{
                    return "Selected " + selected.length + " of " + total;
                }
            }
        });
        customSelectRender();
        $('#rep_cc_phone_'+l_row_cnt).CcPicker({
            dataUrl: base_url+"assets/front/js/data.json",
            countryCode:"in"
        });
        if(l_row_cnt==10){
          $(".lrr_add_more").hide();
        }

        /*$('input[name="acq_details[first_name][]"]').each(function(){
            $(this).rules("add", {
                required: true
            });
        });*/
        $('[name*="first_name"]').each(function() {
            $(this).rules('add', {
                required: true,
                messages: {
                    required: "Please enter first name"
                }
            });
        });
        $('[name*="last_name"]').each(function() {
            $(this).rules('add', {
                required: true,
                messages: {
                    required: "Please enter first name"
                }
            });
        });
        $('[name*="acq_phone"]').each(function() {
            $(this).rules('add', {
                required: true,
                messages: {
                    required: "Please enter first name"
                }
            });
        });
        

    });

    $(document).on('click', '.lrr_remove', function(){
        $(this).parents('.loyalty_repeater_row').remove();
    });

    $(document).on('change', '.soa_select', function(){
        $('.soa_list_item').hide();
        $('#'+$(this).val()).show();
    });

    $(document).on("input", ".numeric", function() {
        this.value = this.value.replace(/\D/g,'');
    });

    $(document).on("keypress", ".numonly", function(event) {
        if (event.which > 31 && (event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
    });

    $(document).on('change', '.sdr_state', function(){
        $('.sdt_state').text($('.sdr_state option:selected').text());
        $('.sdt_per').text($('.sdr_state').val() + '%');
        sdrCalculator();
    });

    $(document).on('keyup', '.sdr_property_value', function(){
        $('.sdt_amount').text($(this).val());
        sdrCalculator();
    });

    if($('.commute_common_inputs').length){
        if($(window).width() < 1024){
            $('.commute_common_inputs').appendTo('.mobile_commute_inputs');
        }else{
            $('.commute_common_inputs').appendTo('.desktop_commute_inputs');
        }
    }
    $(document).on('change', '.di_select', function(){  
        $(this).parents('.di_content').find('.di_download').attr('href', $(this).val());  
    });

    $(document).on('click', '.di_download', function(){
        if($(this).parents('.di_content').find('.di_select').val() == ''){
            alert('Please select report.');
            return false;
        }
    });

    $(document).on('click', '.building_plus', function(){
        if($(this).siblings('.pres-block-item').hasClass('active')){
            $(this).siblings('.pres-block-item').removeClass('active');
        }else{
            $('.pres-block-item').removeClass('active');
            $(this).siblings('.pres-block-item').addClass('active');
        }
        
    });

    $(document).on('click', '.job-apply-now', function(){
        $('#job_inquiry_popup #applying-for').val($(this).data('ref'));
		$('#job_inquiry_popup #applying-for1').val($(this).data('ref'));
		$('#job_inquiry_popup #jobDepartment').val($(this).data('title'));
        $('.popup_overlay').fadeIn(200, function(){
            $('#job_inquiry_popup').fadeIn(200);
        });
    });

    /* Script for country code phone  */
    if($('.cc_phone_input').length > 0){
        $('.cc_phone_input').each(function(){
            $(this).CcPicker({
                dataUrl: base_url+"assets/front/js/data.json",
                countryCode:"in"
            });
        });
    }

    $('p').each(function() {
        var $this = $(this);
        if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
            $this.remove();
    });

    if($('.ppd-img-slider').length){
        $('.ppd-img-slider').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 8,
            slidesToScroll: 1,
            rows: 3,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 6,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 599,
                    settings: {
                        slidesToShow: 2,
                        rows: 4,
                    }
                }
            ]
        });
    }
    if($('.ppd-vds-slider').length){
        $('.ppd-vds-slider').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }

    if($('.multiselect_check').length){
        $('.multiselect_check').each(function(){
            $(this).select2({
                closeOnSelect : false,
                placeholder : "Select",
                allowHtml: true,
                allowClear: true,
                tags: true // создает новые опции на лету
            });
            /*$(this).select2MultiCheckboxes({
                templateSelection: function(selected, total) {
                    if(selected.length == 0){
                        return "Select";
                    }else{
                        return "Selected " + selected.length + " of " + total;
                    }
                }
            });*/
        });
    }

    $(document).on('click', '.helpButton', function(){
        var curr_location = window.location.href;
        var lead_num = "lead-"+getRandomNumber();
        var helpData = {"event":"event dl chat expert click","eventCategory":"floating cta","eventAction":"chat expert click","eventLabel":curr_location};
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push(helpData);
    });

});

function customSelectRender(){
    $('select').each(function () {
      if(!$(this).hasClass('s-hidden') && !$(this).hasClass('no_select')){
        // Cache the number of options
        var $this = $(this),
            numberOfOptions = $(this).children('option').length;

        // Hides the select element
        $this.addClass('s-hidden');

        // Wrap the select element in a div
        $this.wrap('<div class="select"></div>');

        // Insert a styled div to sit over the top of the hidden select element
        $this.after('<div class="styledSelect"></div>');

        // Cache the styled div
        var $styledSelect = $this.next('div.styledSelect');

        // Show the first select option in the styled div
        $styledSelect.text($this.children('option').eq(0).text());

        // Insert an unordered list after the styled div and also cache the list
        var $list = $('<ul />', {
            'class': 'options'
        }).insertAfter($styledSelect);

        // Insert a list item into the unordered list for each select option
        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        // Cache the list items
        var $listItems = $list.children('li');

        // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
        $styledSelect.click(function (e) {
            e.stopPropagation();
            /*$('div.styledSelect.active').each(function () {
                $(this).removeClass('active').next('ul.options').hide();
            });*/
            if($(this).hasClass('active')){
                $(this).removeClass('active').next('ul.options').slideUp();
            }else{
                $('div.styledSelect.active').removeClass('active').next('ul.options').hide();
                $(this).addClass('active').next('ul.options').show();
            }
            
            
        });

        // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
        // Updates the select element to have the value of the equivalent option
        $listItems.click(function (e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            $this.trigger('change');
            /* alert($this.val()); Uncomment this for demonstration! */
        });

        // Hides the unordered list when clicking outside of it
        $(document).click(function () {
            $styledSelect.removeClass('active');
            $list.hide();
        });
      }

    });
}

$.fn.equalHeights = function(){
    var max_height = 0;
    $(this).each(function(){
        max_height = Math.max($(this).height(), max_height);
    });
    $(this).each(function(){
        $(this).height(max_height);
    });
 };

 var a = 0;
 $(window).scroll(function () {

    if($('.project_menu_point').length > 0){
        if($(window).scrollTop() >= $('.project_menu_point').offset().top - $('.header').height()){
            $('body').addClass('project_sticky');
        }else{
            $('body').removeClass('project_sticky');
        }
    }

    if($('.wyrt_menu_point').length > 0){
        if($(window).scrollTop() >= $('.wyrt_menu_point').offset().top - $('.header').height()){
            $('body').addClass('project_sticky');
        }else{
            $('body').removeClass('project_sticky');
        }
    }

    if($('.search-form').length > 0){
        if($(window).scrollTop() >= 200){
            $('body').addClass('showsearch');
        }else{
            $('body').removeClass('showsearch');
        }
    }
        

    if($(window).scrollTop() > 10){
        $('body').addClass('header_sticky');
    }else{
        $('body').removeClass('header_sticky');
    }

    if($('.est-value-top-wrap').length){
        var oTop = $('.est-value-top-wrap').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.counter-value').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                },
                    {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                        }
                    });
            });
            a = 1;
        }
    }
});

$slickGreen = false;
function greenSlider() {
    //if (window.innerWidth > 767) {
    if($('.our-prop-slider').length && $('.our-prop-block').length >= 3 && $(window).width() > 767){
        if (!$slickGreen) {
            var $status = $('#pagingInfo2');
            var $slickElement = $('.our-prop-slider');

            $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
                var i = (currentSlide ? currentSlide : 0) + 1;
                if(i < 10){
                    $status.html("<span>0" + i + '</span><span class="dash">&#8212;</span><span>' + (slick.slideCount < 10 ? ("0" + slick.slideCount) : slick.slideCount) + "</span>");
                }else{
                    $status.html("<span>" + i + '</span><span class="dash">&#8212;</span><span>' + (slick.slideCount < 10 ? ("0" + slick.slideCount) : slick.slideCount) + "</span>");
                }
                
            });
            $(".our-prop-slider").slick({
                lazyLoad: 'ondemand',
                dots: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 10000,
                speed: 700,
                slidesToShow: 3,
                slidesToScroll: 1,
                prevArrow: $("#prvarrow"),
                nextArrow: $("#nxtarrow"),
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                        slidesToShow: 2
                        }
                    },
                    {
                    breakpoint: 1024,
                    settings: {
                    slidesToShow: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                    slidesToShow: 1
                    }
                }
                ]
            });
            $slickGreen = true;
        }
    }
    /*} else if (window.innerWidth > 767) {
        if ($slickGreen) {
            $('.our-prop-slider').slick('unslick');
            $slickGreen = false;
        };
    }*/
};

$slickGreen01 = false;
function greenSlider01() {
    if (window.innerWidth > 767) {
        if (!$slickGreen01) {
          $('.dreamz_our_services_slider').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: false,
            autoplay: true,
            autoplaySpeed: 10000,
            speed: 700,
            dots:false,
            arrows:true,
            responsive: [
                {
                  breakpoint: 1480,
                  settings: {
                    slidesToShow: 4
                  }
                },
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 4
                  }
                }
              ]
          });
            $slickGreen01 = true;
        }
    } else if (window.innerWidth > 767) {
        if ($slickGreen01) {
            $('.dreamz_our_services_slider').slick('unslick');
            $slickGreen01 = false;
        };
    }
};
/*$slickGreen1 = false;
function greenSlider1() {
    if (window.innerWidth > 767) {
        if (!$slickGreen1) {
          $('.corp-overly-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            // autoplay: true,
            // autoplaySpeed: 5000,
            dots:false,
            arrows:true,
            vertical: true,
            verticalSwiping: true,
            responsive: [
                {
              breakpoint: 1024,
              settings: {
                vertical: false,
                 verticalSwiping: false,
              }
            },
                {
              breakpoint: 767,
              settings: {
                arrows:false,
                vertical: false,
                 verticalSwiping: false,
              }
            }
          ]
          });
            $slickGreen1 = true;
        }
    } else if (window.innerWidth > 767) {
        if ($slickGreen1) {
            $('.corp-overly-slider').slick('unslick');
            $slickGreen1 = false;
        };
    }
};*/

$(window).load(function(){
    $('.site-preloader').fadeOut(200);
    $('#searchform').submit(function(){
        if($('#s').val() == ''){
            return false;
        }
    }); 
	 if($('.ret-hero-banner-block').length > 0){
		 $('.ret-hero-banner-block').addClass('loaded');
	} 
    eq_height_setup();

});

var cachedWidth = $(window).width();
$(window).resize(function(){
    var newWidth1 = $(window).width();
    if(newWidth1 !== cachedWidth){
        if (window.innerWidth <= 1200) {
            $('body').removeClass('menuactive');
            $('.close-icon').hide();
        } else if (window.innerWidth >= 1200){
            $('body').addClass('menuactive');
        }
        if(window.innerWidth >= 767){
            $('.search-form').slideUp('slow');
            $('.search-icon').removeClass('search-active');
        }
        if($('.val_eq').length &&  window.innerWidth >= 1024){
            $('.val_eq').equalHeights();
        }
        greenSlider();
        cachedWidth = newWidth1;
    }

    if($('.our-partn-bx .txt-content').length > 0){
        partnerContentHeight();
    }
    eq_height_setup();
});

function openPopup(popupID){
    $('.popup_overlay').fadeIn(200, function(){
        $('#'+popupID).fadeIn(200);
    });
}

function openPopupProject(popupID,projectName,projectLoc){
	$("#project_name").val(projectName);
	$("#project_location").val(projectLoc);
    $('.popup_overlay').fadeIn(200, function(){
        $('#'+popupID).fadeIn(200);
    });
}

function openPopupPrice(popupID, price_title){
    $('.popup_overlay').fadeIn(200, function(){
        $('#'+popupID).fadeIn(200);
        $('#detailed_pricing_form #url_source_form').val(price_title);
    });
}

var sdr_duty = 0;
function sdrCalculator(){
  if($('#sdr_state').val() == '' || $('#sdr_property_value').val() == ''){
      return;
  }else{
      sdr_duty = parseFloat($('#sdr_state').val()) * parseFloat(parseInt($('#sdr_property_value').val()) / 100);
      $('.sdt_amount').text(sdr_duty);
  }
}

function eq_height_setup(){
  if($(window).height() < 768 || $(window).innerWidth() < 1024){
    if($('.eq_height_1').length){
        $('.eq_height_1').equalHeights();
    }
    if($('.eq_height_2').length){
        $('.eq_height_2').equalHeights();
    }
    if($('.eq_height_3').length){
        $('.eq_height_3').equalHeights();
    }
    if($('.eq_height_4').length){
        $('.eq_height_4').equalHeights();
    }
    
  }

  if($('.val_eq').length && window.innerWidth > 1024){
      $('.val_eq').equalHeights();
  }
  if($('.near_loc_block').length && window.innerWidth > 1024){
      $('.near_loc_block').equalHeights();
  }
  if($('.commute_col').length &&  window.innerWidth > 1024){
      $('.commute_col').equalHeights();
  }
  if($('.eq_row').length && window.innerWidth > 1024){
      $('.eq_row').each(function(){
          $(this).find('.eq_col').equalHeights();
      });
  }
  if($('.award_col').length && window.innerWidth > 768){
      $('.award_col').equalHeights();
  }
  if($('.eq_height_1_desk').length && window.innerWidth > 1024){
      $('.eq_height_1_desk').equalHeights();
  }
}

function partnerContentHeight(){
    $('.our-partn-bx .txt-content').each(function(){ 
        if($(this).find('p').outerHeight() > 100){
            $(this).siblings('.pd_cta').show();
        }else{
            $(this).siblings('.pd_cta').hide();
        }
        //console.log($(this).outerHeight()); 
    });
}

function sendDataLayerLead(jsonData, is_parse){
    window.dataLayer = window.dataLayer || [];
    if(is_parse){
        var data = JSON.parse(jsonData);
        window.dataLayer.push({
            'event': data.event,
            'eventCategory': data.eventCategory,
            'eventAction': data.eventAction,
            'eventLabel': data.eventLabel,
            'cd-leadid': data.leadid,
            'cd-projectStatus': data.projectStatus,
            'cd-ctaPosition': data.ctaPosition
        });
    }else{
        window.dataLayer.push({
            'event': jsonData.event,
            'eventCategory': jsonData.eventCategory,
            'eventAction': jsonData.eventAction,
            'eventLabel': jsonData.eventLabel,
            'cd-leadid': jsonData.leadid,
            'cd-projectStatus': jsonData.projectStatus,
            'cd-ctaPosition': jsonData.ctaPosition
        });
    }
    
    
    //window.dataLayer.push(data);
    /*window.dataLayer.push({
        'event': 'custom event name',
        'eventCategory': 'custom category name',
        'eventAction': 'custom action name',
        'eventLabel': 'custom label name',
        'cd-leadid': 'custom unique id',
        'cd-projectStatus': 'custom unique id',
        'cd-ctaPosition': 'custom unique id'
    });*/
}

function getRandomNumber(){
    return Math.floor(Math.random() * 1000000000);
}