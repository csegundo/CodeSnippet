/**
 * CodeSnippet by csegundo
 * code.snippet.js
 * Copyright (c) 2021 [Carlos](https://github.com/csegundo/CodeSnippet)
 */

$(function(){
    // Paste this code into your page
    $('.html-code-snippet').on('click', '.copy', function(){
        var $temp = $('<textarea></textarea>');
        $('body').append($temp);
        $temp.html($('.html-code-snippet ccode').html().trim()).select();
        document.execCommand("copy");
        $temp.remove();
    });
});