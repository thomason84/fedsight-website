<template>
  <div class="home">
    <section class='heroSection d-flex align-items-center justify-content-center container-fluid'>
      <div class='row'>
        <div class='container'>
          <div class='row'>
            <h1 class='slogan col-md-12'>Identify What Matters</h1>
            <div class='mainCTA fedsightYellowBackground m-auto d-flex align-items-center justify-content-center'>Let Us Show You
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class='mainParagraph'>
      <div class='row' style='height: 100%;'>
        <div class='container d-flex align-content-center justify-content-center flex-wrap'>
          <h2 class='fedsightGreen'>We Assess Problems and Tailor Solutions for Federal Agencies</h2>
          <p>As an insight based consulting firm, we are acutely aware of the admission and programmatic nuances of government agencies.  This is why our approach results in sophisticated outcomes.
          </p>
        </div>
      </div>
    </section>
    
    <Carousel msg="Welcome to Your Vue.js App"/>

    <section class='container boxSection d-flex flex-wrap'>
      <div class='col-xs-12 col-md-6' >
        <img class='sectionImg boxSectionItem' src="../assets/bigstock-Businessmen-and-businesswomen--267296758.jpg" alt="people in a meeting looking at printed documents">
      </div>
      <div class='col-xs-12 col-md-6' >
        <div class='fedsightGreenBackground d-flex align-items-center justify-content-center flex-column boxSectionItem' style='height: 100%; width: 100%; min-height: 30rem;'>
          <h2 class='fedsightYellow'>Our Business Successes</h2>
          <p class='whiteText'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>
    </section>
      
    <section class="container-fluid d-flex flex-wrap" style='padding: 0rem;'>
      <div class="col-12 d-flex flex-wrap flipSection">
          <div class="col-md-4 d-inline-block cardContainer">
            <div class="flip">
              <div class="card"> 
                <div class="face front"> 
                  <div class="inner card1Inner">   
                    <div class='cardTextArea'>
                      <h3 class='fedsightGreen'>Contract Vehicle Overview</h3>
                      <p>Tell me something about this</p>
                    </div>
                  </div>
                </div> 
                <div class="face back"> 
                  <div class="inner text-center"> 
                    <h3>Improved efficiency through automation</h3>
                    <button type="button" class="btn btn-primary">Learn More</button>
                  </div>
                </div>
              </div>	 
            </div>
          </div>

          <div class="col-md-4 d-inline-block cardContainer">
            <div class="flip">
              <div class="card"> 
                <div class="face front"> 
                  <div class="inner card2Inner">   
                    <div class='cardTextArea'>
                      <h3 class='fedsightGreen'>Capabilities Overview</h3>
                      <p>Tell me something about this</p>
                    </div>
                  </div>
                </div> 
                <div class="face back"> 
                  <div class="inner text-center"> 
                    <h3>Improved efficiency through automation</h3>
                    <button type="button" class="btn btn-primary">Learn More</button>
                  </div>
                </div>
              </div>	 
            </div>
          </div>

          <div class="col-md-4 d-inline-block cardContainer">
            <div class="flip">
              <div class="card"> 
                <div class="face front"> 
                  <div class="inner card3Inner">   
                    <div class='cardTextArea'>
                      <h3 class='fedsightGreen'>Driving Excellent Performance</h3>
                      <p>Tell me something about this</p>
                    </div>
                  </div>
                </div> 
                <div class="face back"> 
                  <div class="inner text-center"> 
                    <h3>Improved efficiency through automation</h3>
                    <button type="button" class="btn btn-primary">Learn More</button>
                  </div>
                </div>
              </div>	 
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
// @ is an alias to /src
import Carousel from '@/components/Carousel.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    Carousel,
    Footer
  },
  mounted() {
        $('.flip').hover(function(){
        $(this).find('.card').toggleClass('flipped');
        });
        $('.flip').touch(function(){
        $(this).find('.card').toggleClass('flipped');
        });
      }
}


</script>

<style scoped>
  .home{
    height: 100vh;
  }
  .heroSection{
    height: 70vh;
    min-height: 50rem;
    background-image: url(../assets/bigstock-The-Capitol-Building-at-night--97098275.jpg);
    background-repeat: no-repeat;
    background-size: cover;
  }
  .mainParagraph{
    height: 30vh;
    min-height: 20rem;
  }
  .slogan{
    font-weight:normal;
    font-style:normal;
    font-size: 3.5vw;
    max-width: 100%;
    color: white;
  }
  .mainCTA{
    height: 5rem;
    width: 22rem;
    font-size: 2rem;
  }
  .boxSection{
    min-height: 30rem;
  }
  .boxSectionItem{
    height: 30rem;
  }
  .sectionImg{
    width: 100%;
    height: 100%;
  }

  /**************  Flipper ****************/
  .flipSection{
    background-color: #eee;
    padding: 3rem 0rem;
  }
  .cardContainer{
    padding: 1.5rem !important;
    height: 40rem;
    max-width: 38rem;
    margin: 1rem auto;
  }
  .flip {
    -webkit-perspective: 800;   
            perspective: 800;
            position: relative;
            text-align: center;
  }
  .flip .card.flipped {
    -webkit-transform: rotatey(-180deg);
            transform: rotatey(-180deg);
  }
  .flip .card {
      width: 100%;
      height: 40rem;
      max-width: 38rem;
      margin: auto;
      -webkit-transform-style: preserve-3d;
      -webkit-transition: 0.5s;
      transform-style: preserve-3d;
      transition: 0.5s;
      background-color: #fff;
    
  }
  .flip .card .face {
    -webkit-backface-visibility: hidden ;
      backface-visibility: hidden ;
    z-index: 2;
  }
  .flip .card .front {
    position: absolute;
    width: 100%;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 40rem;
    max-width: 38rem;
    margin: auto;
  }
  .flip .card .front img{
    width: 100%;
    height: 100%;
  }
  .flip .card .img {
    position: relaitve;
    width: 100%;
    height: 100%;
    z-index: 1;
    border: 2px solid #000;
  }
  .flip .card .back {
    padding-top: 10%;
    -webkit-transform: rotatey(-180deg);
            transform: rotatey(-180deg);
    position: absolute;
    z-index: 3;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .card.flipped{
    background: transparent !important;
  }
  .face.back{
    background-color: #fff;
  }
  .inner{
    margin:0px !important;
    width: 100%;
  }
  .cardImage{
    width: 100%;
    height: 100%;
  }
  .card1Inner{
    height: 100%;
    width: 100%;
    background-image: url(../assets/bigstock-Teamwork-Concept-Collaboratio-306924817.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .card2Inner{
    height: 100%;
    width: 100%;
    background-image: url(../assets/bigstock-Smiling-business-team-working--209395762.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .card3Inner{
    height: 100%;
    width: 100%;
    background-image: url(../assets/bigstock-Closeup-of-a-stock-market-brok-269676226.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .cardTextArea{
    background-color: #fff;
    width: 100%;
    height: 10rem;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0.5rem;
  }
  /****************  Media Queries *****************/
  @media only screen and (max-width: 60rem) {
  .slogan {
      font-size: 3rem;
    }
  }
  @media only screen and (min-width: 150rem) {
  .slogan {
      font-size: 9rem;
    }
  }
</style>