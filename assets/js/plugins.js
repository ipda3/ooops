$(document).ready(function() {

    // Make Header Full Screen

    $('.header-content').css('padding-top', ($('header').height() - $('.header-content').height()) / 2 - 80);

    // Years Of Cars

    for(i = 2010; i < 2019; i++) {
        const option = '<option id ="year" value="' + i + '">' + i + '</option>';
        $('#years').append(option);
    }

    // Slick Plugin 
});