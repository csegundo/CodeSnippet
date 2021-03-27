/**
 * CodeSnippet by csegundo
 * code.snippet.v2.js
 * Copyright (c) 2021 [Carlos](https://github.com/csegundo/CodeSnippet)
 */

$(function(){
    // Paste this code into your page
    var _cs = $('.html-code-snippet');
    $.each(_cs, function(i, item){
        var code = $(item).html();
        $(item).html('<span class="copy"></span><ccode>' + code + '</ccode>')
    });

    $('.html-code-snippet').on('click', '.copy', function(){
        var $temp = $('<textarea></textarea>');
        $('body').append($temp);
        $temp.html($('.html-code-snippet ccode').html().trim()).select();
        document.execCommand("copy");
        $temp.remove();
    });
});