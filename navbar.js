(function(){
    var nav = $('nav'),
        menu = $('nav h1'),
        main = $('main'),
        open = false,
        hover = false;

    menu.on('click', function() {
        open = !open ? true : false;
        nav.toggleClass('menu-active');
        main.toggleClass('menu-active');
        nav.removeClass('menu-hover');
        main.removeClass('menu-hover');
        console.log(open);
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

($(window).scroll(function(){
    var scroll = $(window).scrollTop(),
    doc_h = $(document).height(),
    w_h = $(window).height(),
    sp = (scroll / (doc_h - w_h)) * 100;
    $('#progressbar').css('height', sp + '%');
    console.log(sp);
}));