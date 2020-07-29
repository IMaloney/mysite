(function(){
    var nav = $('nav'),
        menu = $('.hamburger'),
        main = $('main'),
        open = false,
        hover = false;

    menu.on('click', function() {
        open = !open ? true : false;
        nav.toggleClass('menu-active');
        main.toggleClass('menu-active');
        menu.toggleClass('close');
        nav.removeClass('menu-hover');
        main.removeClass('menu-hover');
    });

    menu.hover(function() {
        if (!open) {
            nav.addClass('menu-hover');
            main.addClass('menu-hover');
        }
    }, function() {
            nav.removeClass('menu-hover');
            main.removeClass('menu-hover');
    });
})();