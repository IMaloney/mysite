$(window).scroll(function(){
    var scroll = $(window).scrollTop(),
    doc_h = $(document).height(),
    w_h = $(window).height(),
    sp = (scroll / (doc_h - w_h)) * 100;
    $('#progressbar').css('height', sp + '%');
    console.log(sp);
})