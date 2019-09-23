import JQuery from 'jquery'
let $ = JQuery

export default{
    mounted() {
        if($('.navbar-toggler').attr('aria-expanded') === 'true' ){
            $('.navbar-toggler').click();
        }

        window.document.body.onscroll = function() {
            if($('.navbar-toggler').attr('aria-expanded') === 'true' ){
                $('.navbar-toggler').click();
            }
        }
    }
}