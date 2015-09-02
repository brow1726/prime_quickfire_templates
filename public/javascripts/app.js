$(document).ready(function() {
    $content= $('#content');
    $newLi = $('<li>');

    $('form').on('submit', function (e) {
        var $this = $(this);
        e.preventDefault();
        var input = $this.serializeArray()[0];
        console.log(input);
        var data = {firstName: input.value};

    $.ajax({
        url: '/students',
        type: 'POST',
        data: data
    }).done(function(response, textStatus, jqXHR){
        console.log('success');
        console.log(data);
        var name = data.firstName;
        $newLi.append(name);
        console.log($newLi);
        $(this).children().last().append($newLi);
            console.log(this);
    }).fail(function( jqXHR, textStatus, errorThrown){
        console.log(jqXHR, textStatus, errorThrown);
    }).always(function(){
        console.log('AJAX complete');
    })
    });
});