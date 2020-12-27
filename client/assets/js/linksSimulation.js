$(function(){
  $(".logo a, .footer-logo a, a:contains('Home'), a:contains('Vimeo')").attr("href","index-vimeo.html");
  $("a:contains('Youtube Hero Video')").attr("href","index-youtube.html");
  $("a:contains('Youtube Hero Video Light')").attr("href","index-youtube-light.html");
  $("a:contains('Self')").attr("href","index-local-video-color.html");
  $("a:contains('Slideshow')").attr("href","index-slideshow.html");
  $("a:contains('Hero Image')").attr("href","index-image.html");
  $("a:contains('Hero Image Masked')").attr("href","index-image-masked.html");
  $("a:contains('Hero Image Dark')").attr("href","index-image-dark.html");
  $("a:contains('Hero Image Texture')").attr("href","index-image-texture.html");
  $("a:contains('Register')").attr("href","login-register.html");
  $("a:contains('Recover'), .login-forgot-password").attr("href","forgot-password.html");
  $("a:contains('About'), a:contains('How it Works')").attr("href","about.html");
  $("a:contains('Pricing'), .add-listing, a:contains('Add My Listing'), a:contains('Add Your Listing')").attr("href","pricing.html");
  $("a:contains('FAQ'), a:contains('Read the FAQ'), a:contains('Read the FAQ')").attr("href","faq.html");
  $("a:contains('Listings'), .cat-item a, .tags a, a:contains('Food'), .categories a, a:contains('See all'), a:contains('Restaurants'), a:contains('Grid 1'), .amenities a, .category-icon, .listing-category-name a, a.icon-icons").attr("href","listings-option-1.html");
  $("a:contains('Map View'), a.icon-list4").attr("href","listing-map.html");
  $("a:contains('Grid 2'), a.icon-list4").attr("href","listings-option-2.html");
  $("a:contains('Grid 3'), a.icon-enter-right2").attr("href","listings-option-3.html");
  $("a:contains('Grid 4'), a.icon-dial").attr("href","listings-option-4.html");
  $("a:contains('Grid 5'), a.icon-menu2").attr("href","listings-option-5.html");
  $("a:contains('Listing Detail'), .feat-post a, .listing-item-link, .listing-item-address, .maplink").attr("href","listing-detail.html");
  $("a:contains('Cities Option 1'), .go-more-cities").attr("href","cities-option-1.html");
  $("a:contains('Cities Option 2')").attr("href","cities-option-2.html");
  $("a:contains('Cities Option 3')").attr("href","cities-option-3.html");
  $("a:contains('Cities Option 4')").attr("href","cities-option-4.html");
  $("a:contains('404'), a:contains('Found')").attr("href","404.html");
  $("a:contains('Contact'), a:contains('Get in Touch')").attr("href","contact.html");
  $("a:contains('Support')").attr("href","support.html");
  $("a:contains('Blog'), .blog .category-icon, listing-category-name a, .news-categories a, .news-archive a, .widget.tags a, .blog .listing-category-name a, a:contains('Article'), .newest-posts a, .blog .listing-item-link").attr("href","blog-option-1.html");
  $("a:contains('Blog Grid 2')").attr("href","blog-option-2.html");
  $("a:contains('Blog Grid 3')").attr("href","blog-option-3.html");
  $("a:contains('Blog Grid 4')").attr("href","blog-option-4.html");
  $("a:contains('Single Article'), .newest-posts a, .blog .listing-item-link").attr("href","single-blog-option-1.html");
  $("a:contains('Single Article - No')").attr("href","single-blog-option-2.html");
  $("body").on("click", ".leaflet-div-icon", function(e){
    setTimeout(function(){
      $(".map-listing .maplink").attr("data-link","listing-detail.html").css("cursor","pointer").removeClass("no-hover");
    },200);
  });
  $("body").on("click", ".search-submit", function(e){
    e.preventDefault();
    e.stopPropagation();
    location.href = "listings-option-1.html";
  });
  var currentPage = location.href.split("/").slice(-1);
  $(".copyright").after('<div class="developer">Developed with Passion for Coding by <a href="https://themeforest.net/user/webdesigntrade" target="_blank">Webdesign Trade</a>.</div>');
  $("body").append('<div class="color-picker" style="position: fixed; bottom:6px;right: 6px; z-index:999; width: 50px; height: 50px;border-radius:50%;overflow: hidden;cursor:pointer;" title="Change Primary Color" data-toggle="tooltip" data-placement="left"><img src="assets/images/miscellaneous/color-picker.gif" style="width:100%;height:100%;border-radius:50%;overflow: hidden;"/></div>');
  $("body").append('<div class="color-menu" style="position:fixed;width:100%;height:100%;top:0;left:0;opacity:0;display:none;background:#fff;z-index:998;"></div>');
  $(".color-menu").append('<div class="template-colors"></div>');
  $(".template-colors").append('<a href="../Bright-Red/' + currentPage + '" style="background-color: rgba(255,77,85,1)" title="Bright Red" data-toggle="tooltip" data-placement="top"></a>');
  $(".template-colors").append('<a href="../Carmine-Pink/' + currentPage + '" style="background-color: rgba(220,118,175,1)" title="Carmine Pink" data-toggle="tooltip" data-placement="top"></a>');
  $(".template-colors").append('<a href="../Chiclets-Pink/' + currentPage + '" style="background-color: rgba(228,163,188,1)" title="Chiclets Pink" data-toggle="tooltip" data-placement="top"></a>');
  $(".template-colors").append('<a href="../Cian/' + currentPage + '" style="background-color: rgba(0,155,221,1)" title="Cian" data-toggle="tooltip" data-placement="top"></a>');
  $(".template-colors").append('<a href="../Coral/' + currentPage + '" style="background-color: rgba(223,102,94,1)" title="Coral" data-toggle="tooltip" data-placement="top"></a>');
  $(".template-colors").append('<a href="../Dark-Sugarcane-Green/' + currentPage + '" style="background-color: rgba(132,149,40,1)" title="Dark Sugarcane Green" data-toggle="tooltip" data-placement="top"></a>');
  $(".template-colors").append('<a href="../Default-Blue/' + currentPage + '" style="background-color: rgba(1,115,167,1)" title="Default Blue" data-toggle="tooltip" data-placement="top"></a>');
  $(".template-colors").append('<a href="../Default-Green/' + currentPage + '" style="background-color: rgba(24,157,2,1)" title="Default Green" data-toggle="tooltip" data-placement="top"></a>');
  $(".template-colors").append('<a href="../Fluorescent-Coral/' + currentPage + '" style="background-color: rgba(196,78,36,1)" title="Fluorescent Coral" data-toggle="tooltip" data-placement="top"></a>');
  $(".template-colors").append('<a href="../Fluorescent-Sugarcane-Green/' + currentPage + '" style="background-color: rgba(109,198,52,1)" title="Fluorescent Sugarcane Green" data-toggle="tooltip" data-placement="top"></a>');
  $(".template-colors").append('<a href="../Gold-Yellow/' + currentPage + '" style="background-color: rgba(212,171,0,1)" title="Gold Yellow" data-toggle="tooltip" data-placement="top"></a>');
  $(".template-colors").append('<a href="../Gray-Blue/' + currentPage + '" style="background-color: rgba(87,110,122,1)" title="Gray Blue" data-toggle="tooltip" data-placement="top"></a>');
  $(".template-colors").append('<a href="../Laguna-Green/' + currentPage + '" style="background-color: rgba(38,163,135,1)" title="Laguna Green" data-toggle="tooltip" data-placement="top"></a>');
  $(".template-colors").append('<a href="../Lavender-Purple/' + currentPage + '" style="background-color: rgba(160,147,195,1)" title="Lavender Purple" data-toggle="tooltip" data-placement="top"></a>');
  $(".template-colors").append('<a href="../Light-Bright-Red/' + currentPage + '" style="background-color: rgba(182,2,43,1)" title="Light Bright Red" data-toggle="tooltip" data-placement="top"></a>');
  $(".template-colors").append('<a href="../Light-Brown/' + currentPage + '" style="background-color: rgba(133,93,52,1)" title="Light Brown" data-toggle="tooltip" data-placement="top"></a>');
  $(".template-colors").append('<a href="../Light-Emerald-Green/' + currentPage + '" style="background-color: rgba(52,124,98,1)" title="Light Emerald Green" data-toggle="tooltip" data-placement="top"></a>');
  $(".template-colors").append('<a href="../Light-Fluorescent-Burgundy/' + currentPage + '" style="background-color: rgba(178,51,101,1)" title="Light Fluorescent Burgundy" data-toggle="tooltip" data-placement="top"></a>');
  $(".template-colors").append('<a href="../Light-Gray/' + currentPage + '" style="background-color: rgba(108,108,108,1)" title="Light Gray" data-toggle="tooltip" data-placement="top"></a>');
  $(".template-colors").append('<a href="../Light-Green/' + currentPage + '" style="background-color: rgba(83,120,78,1)" title="Light Green" data-toggle="tooltip" data-placement="top"></a>');
  $(".template-colors").append('<a href="../Light-Midnight-Blue/' + currentPage + '" style="background-color: rgba(103,121,137,1)" title="Light Midnight Blue" data-toggle="tooltip" data-placement="top"></a>');
  $(".template-colors").append('<a href="../Light-Moss-Green/' + currentPage + '" style="background-color: rgba(109,117,73,1)" title="Light Moss Green" data-toggle="tooltip" data-placement="top"></a>');
  $(".template-colors").append('<a href="../Light-Oil-Blue/' + currentPage + '" style="background-color: rgba(77,122,134,1)" title="Light Oil Blue" data-toggle="tooltip" data-placement="top"></a>');
  $(".template-colors").append('<a href="../Light-Opaque-Brown/' + currentPage + '" style="background-color: rgba(139,114,96,1)" title="Light Opaque Brown" data-toggle="tooltip" data-placement="top"></a>');
  $(".template-colors").append('<a href="../Light-Purple/' + currentPage + '" style="background-color: rgba(101,46,113,1)" title="Light Purple" data-toggle="tooltip" data-placement="top"></a>');
  $(".template-colors").append('<a href="../Magenta/' + currentPage + '" style="background-color: rgba(186,19,126,1)" title="Magenta" data-toggle="tooltip" data-placement="top"></a>');
  $(".template-colors").append('<a href="../Max-RGB-Blue/' + currentPage + '" style="background-color: rgba(0,0,255,1)" title="Max RGB Blue" data-toggle="tooltip" data-placement="top"></a>');
  $(".template-colors").append('<a href="../Max-RGB-Pink/' + currentPage + '" style="background-color: rgba(215,0,250,1)" title="Max RGB Pink" data-toggle="tooltip" data-placement="top"></a>');
  $(".template-colors").append('<a href="../Max-RGB-Red/' + currentPage + '" style="background-color: rgba(215,0,0,1)" title="Max RGB Red" data-toggle="tooltip" data-placement="top"></a>');
  $(".template-colors").append('<a href="../Medium-Violet/' + currentPage + '" style="background-color: rgba(94,78,159,1)" title="Medium Violet" data-toggle="tooltip" data-placement="top"></a>');
  $(".template-colors").append('<a href="../Oil-Blue/' + currentPage + '" style="background-color: rgba(0,98,126,1)" title="Oil Blue" data-toggle="tooltip" data-placement="top"></a>');
  $(".template-colors").append('<a href="../Olive-Green/' + currentPage + '" style="background-color: rgba(143,151,22,1)" title="Olive Green" data-toggle="tooltip" data-placement="top"></a>');
  $(".template-colors").append('<a href="../Royal-Blue/' + currentPage + '" style="background-color: rgba(0,74,198,1)" title="Royal Blue" data-toggle="tooltip" data-placement="top"></a>');
  $(".template-colors").append('<a href="../Turquoise-Blue/' + currentPage + '" style="background-color: rgba(2,151,157,1)" title="Turquoise Blue" data-toggle="tooltip" data-placement="top"></a>');
  $(".template-colors").append('<a href="../Very-Dark-Lime-Green/' + currentPage + '" style="background-color: rgba(46,166,26,1)" title="Very Dark Lime Green" data-toggle="tooltip" data-placement="top"></a>');
  $(".template-colors").append('<a href="../Very-Light-Gray/' + currentPage + '" style="background-color: rgba(150,150,150,1)" title="Very Light Gray" data-toggle="tooltip" data-placement="top"></a>');

  var colorMenuOpen = 0;
  $("body").on("click",".color-picker",function(){
    if(!colorMenuOpen){
      colorMenuOpen = 1;
      $(".color-menu").css("display","block").animate({opacity:1},{duration:1000});
    }
    else{
      colorMenuOpen = 0;
      $(".color-menu").animate({opacity:0},{duration:1000,complete:function(){
        $(".color-menu").css("display","none");
      }});
    }
  });
});
