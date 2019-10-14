<template>
  <div class="about spacer">
      <section class='container-fluid aboutUsHero d-flex align-items-center justify-content-center'>
            <p class='aboutUsHeader internalHeader'>Who We Are</p>
        </section>

        <section class='mainParagraph'>
            <div class='container'>
                <h1 class='fedsightGreen'>Working Through the Tough Problems Calls for Greater Insight</h1>
                <p>We are a team of management consultants, solution developers, and functional experts all dedicated to creating lasting value. We work differently by thinking holistically and using our experience and insight gained through commercial and federal projects.</p>
            </div>
        </section>

        <section>
          <div class='container m-auto'>
            <div class='row'>
              <div class='col-md-6 backgroundSettings imageDiv1 aboutSquare order-1 order-md-1'>
              </div>
              <div class='col-md-6 aboutSquare fedsightBlueBackground d-flex align-content-center order-2 order-md-2'>
                <div class='contentContainer text-align-left'>
                  <h3 class='fedsightYellow'>Expertise</h3>
                  <p class='aboutText whiteText'>Fedsight has expertise in business functions across the spectrum and is ready to support your organization. Our proven experience in rapidly responding to complex problems means we can help your organization thrive no matter the challenge.</p>
                </div>
              </div>
              <div class='col-md-6 aboutSquare fedsightBlueBackground d-flex align-content-center order-4 order-md-3'>
                <div class='contentContainer text-align-left'>
                  <h3 class='fedsightYellow'>Team</h3>
                  <p class='aboutText whiteText'>Fedsight has a team of exceptional professionals who are committed to enhancing your operational effectiveness. We recruit, develop, and retain the best talent by fostering continuous growth and learning. By solving your problems today, we adaptively plan for the challenges ahead.</p>
                </div>
              </div>
              <div class='col-md-6 backgroundSettings imageDiv2 aboutSquare order-3 order-md-4'>
              </div>
              <div class='col-md-6 backgroundSettings imageDiv3 aboutSquare order-5 order-md-5'>
              </div>
              <div class='col-md-6 aboutSquare fedsightBlueBackground d-flex align-content-center order-6 order-md-6'>
                <div class='contentContainer text-align-left'>
                  <h3 class='fedsightYellow'>Versatility</h3>
                  <p class='aboutText whiteText'>Whether its management consulting or data analytics, we help organizations gain insight into specific areas by operating across the entire project lifecycle. Everything Fedsight does is performed with a commitment to deliver comprehensive and enduring solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import closeMenu from '../mixins/closeMenu'


export default {
    name: 'ourApproach',
    components: {
        Footer
    },
    mixins: [closeMenu]
}

</script>

<style scoped>
.aboutUsHero{
    height: 30rem;
    background-image: url(../assets/bigstock-Washington-DC-at-Twilight-7819467.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.aboutUsHeader{
    color: #fff;
    font-size: 6rem;
}
.mainParagraph{
    padding: 8rem 1.5rem;
    max-width: 80rem;
    margin: auto;
}
.aboutSquare{
  height: 40rem;
}
.contentContainer{
  width: 70%;
  margin: auto;
}
.aboutHeader{
    font-size: 3rem;
    margin: 0rem;
}
.text-align-left{
    text-align: left;
}
.imageDiv1{
  background-image: url('../assets/bigstock-Successful-business-people-dis-287596642.jpg');
}
.imageDiv2{
  background-image: url('../assets/bigstock-Business-Team-On-A-Morning-Bri-240972481.jpg');
}
.imageDiv3{
  background-image: url('../assets/bigstock-Lincoln-Memorial-77108864.jpg');
}
.backgroundSettings{
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>