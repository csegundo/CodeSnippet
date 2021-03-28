/**
 * CodeSnippet by csegundo
 * ccode.snippet.js
 * Copyright (c) 2021 [Carlos](https://github.com/csegundo/CodeSnippet)
 */

$(function(){
    // Paste this code into your page
    var _cs = $('.html-code-snippet');
    $.each(_cs, function(i, item){
        var code    = $(item).html(),
            elems   = '';
        
        if($(item).hasClass('copy')){
            elems += '<span class="copy"></span>';
            $(item).removeClass('copy')
        }
        if($(item).hasClass('download')){
            elems += '<span class="download"></span>';
            $(item).removeClass('download')
        }

        if(elems){
            elems = '<div class="actions">' + elems + '</div>';
        }
        
        $(item).html(elems + '<ccode>' + code + '</ccode>');
    });

    $('.html-code-snippet').on('click', '.copy', function(){
        var $temp = $('<textarea></textarea>');
        $('body').append($temp);
        $temp.html($(this).parents('.html-code-snippet').find('ccode').html().trim()).select();
        document.execCommand("copy");
        $temp.remove();
    });

    $('.html-code-snippet').on('click', '.download', function(){
        var $temp = $('<a></a>'),
            $temp_ = $('<textarea></textarea>');
        $temp_.html($(this).parents('.html-code-snippet').find('ccode').html().trim());
        $temp_.hide();
        $('body').append($temp_);
        $temp.attr('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent($temp_.val().trim()));
        $temp.attr('download', 'ccode');
        $temp.hide();
        $('body').append($temp);
        $temp.get(0).click(); // jQuery ignores href when click() ==> native DOM method not
        $temp.remove();
        $temp_.remove();
    });
});