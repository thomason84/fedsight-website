import JQuery from 'jquery'
let $ = JQuery

export default{
    mounted() {
        $('.flip').hover(function(){
            $(this).find('.card').toggleClass('flipped');
        })
    }
}