$(document).ready(function() {


    $('form').on('submit', function(e) {
        e.preventDefault();
        const insereTxt = $('#txt').val();
        const novoItem = $('<li></li>');
        $(`<li>${insereTxt}</li>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('li').click(function(){
            $(this).css('text-decoration', 'line-through');
        });
        $('#txt').val('');
        
    });
});