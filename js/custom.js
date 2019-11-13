$(document).ready(function() {

    $('.main__search-box').click(function(e) {
        e.stopPropagation();
        $('.main__search-panel').addClass('active');
    });
    $('.main__search-panel').click(function() {
        $('.main__search-panel').removeClass('active');
    });

    var sendMessage = function() {

        var message = $('.chatting__input-box>input').val();
        
        message = message.trim();
        
        if ( message == "" ) {
            $('.chatting__input-box>input').val('');
            $('.chatting__input-box>input').focus();
            return false;
        }
        
        var html = `
        <div class="chatting__sent-message">
            <div class="chatting__message">${message}</div>
            <span class="time">11:07 AM</span>
        </div>
        `;
        
        $('.main__chatting').append(html);

        $('.chatting__input-box>input').val('');
        
        $('html').scrollTop(99999999999);
        
        $('.chatting__input-box>input').focus();
    };
    
    $('.chatting__send').click(sendMessage);
    
    $('.chatting__input-box>input').keydown(function(e) {
        if ( e.keyCode == 13 ) {
            sendMessage();
        }
    });
});