/**
 * CodeSnippet by csegundo
 * code.snippet.js
 * Copyright (c) 2021 [Carlos](https://github.com/csegundo)
 */

$(function(){
    // Paste this code into your page
    $('.html-code-snippet').on('click', '.copy', function(){
        var $temp = $('<input>');
        $('body').append($temp);
        $temp.val($('.html-code-snippet ccode').html().trim()).select();
        document.execCommand("copy");
        $temp.remove();
    });
});