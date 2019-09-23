<template>
    <div class="ourApproach spacer">
        <section class='container-fluid ourApproachHero d-flex align-items-center justify-content-center'>
            <h2 class='ourApproachHeader'>Our Approach</h2>
        </section>

        <section class='mainParagraph'>
            <div class='container'>
                <h2 class='fedsightGreen'>Desire to do Work Differently </h2>
                <p>We developed Fedsight with a desire to do work differently by thinking holistically and innovatively. Our team brings experience from a multitude of federal agencies to deliver change to your organization.</p>
            </div>
        </section>

        <section class='graphicSection fedsightBlueBackground'>
            <div class='container-fluid'>
                <div class='row'>
                    <div class='col-md-6 col-xs-12'>
                        <h2 class='approachHeader fedsightYellow'>Our Approach</h2>
                        <img class='graphic' src="../assets/fedsight-arrow-graphic-wtext.svg" alt="circular graphic that shows our approach: plan, build, evaluate, monitor, and run all in a circle with arrows pointing to the next one">
                    </div>
                    <div class='col-md-6 col-9 text-align-left d-flex align-items-left flex-column justify-content-center m-auto'>
                        <h3 class='fedsightGreen'>How Do We Do It?</h3>
                        <i class='approachIcon'><font-awesome-icon :icon="['fas', 'eye']" /></i>
                        <h3>Perspective</h3>
                        <p class='approachText'>We understand the solutions underpinning your path forward.</p>
                        <i class='approachIcon'><font-awesome-icon :icon="['fas', 'rocket']" /></i>
                        <h3>Accountability</h3>
                        <p class='approachText'>Our mission is to serve you first. We raise the bar on operational integrity.</p>
                        <i class='approachIcon'><font-awesome-icon :icon="['fas', 'chart-bar']" /></i>
                        <h3>Tangible Results</h3>
                        <p>We take pride in the measured progress you can identify and trace back to our support.</p>
                    </div>
                </div>
            </div>
        </section>

        <Footer />
    </div>
</template>

<script>
import JQuery from 'jquery'
let $ = JQuery
import Footer from '@/components/Footer.vue'


export default {
  name: 'ourApproach',
  components: {
    Footer
  },
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

</script>

<style scoped>
.ourApproachHero{
    height: 30rem;
    background-image: url(../assets/bigstock-Washington-DC-at-Twilight-7819467.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.ourApproachHeader{
    color: #fff;
    font-size: 6rem;
}
.mainParagraph{
    padding: 8rem 1.5rem;
    max-width: 80rem;
    margin: auto;
}
.graphicSection{
    padding: 2rem 0rem;
    color: white;
}
.graphic{
    width: 100%;
    max-width: 60rem;
}
.approachHeader{
    font-size: 3rem;
    margin: 0rem;
}
.approachIcon{
    color: #F7D72A;
    font-size: 3rem;
}
.approachText{
    margin-bottom: 2rem;
}
.text-align-left{
    text-align: left;
}
</style>