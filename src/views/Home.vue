<template>
  <div class="home spacer">
    <section class='heroSection d-flex align-items-center justify-content-center container-fluid'>
      <div class='row'>
        <div class='container-fluid'>
          <div class='row'>
            <p class='slogan col-md-12 ml-auto text-align-left'>Imagine What’s Possible</p>
          </div>
        </div>
      </div>
    </section>

    <section class='mainParagraph container'>
      <div class='row' style='height: 100%;'>
        <div class='container d-flex align-content-center justify-content-center flex-wrap'>
          <h1 class='fedsightGreen'>We Assess Problems and Create Innovative Solutions for Federal Agencies </h1>
          <p>We integrate strategy, development, and analytics to optimize operations and program performance.
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
        <div class='fedsightBlueBackground d-flex align-items-center justify-content-center flex-column boxSectionItem' style='height: 100%; width: 100%; min-height: 30rem;'>
          <h2 class='fedsightYellow'>Our Business Successes</h2>
          <p class='whiteText text-left' style='padding: 1rem;'>Fedsight has worked across the federal spectrum to solve problems at every organizational level. Please see our record of helping public sector organizations transform their operations.</p>
        </div>
      </div>
    </section>
      
    <section class="container d-flex flex-wrap">
      <div class="col-12 d-flex flex-wrap flipSection">
          <div class="col-md-4 d-inline-block cardContainer">
            <div class="flip">
              <div class="card"> 
                <div class="face front fedsightBlueBackground"> 
                  <div class="inner card1Inner d-flex justify-content-center align-items-center">   
                    <font-awesome-icon :icon="['fas', 'file-contract']" />
                    <div class='cardTextArea d-flex align-items-center justify-content-center'>
                      <h3 class='fedsightGreen'>Contract Vehicles</h3>
                    </div>
                  </div>
                </div> 
                <div class="face back d-flex align-items-center"> 
                  <div class="inner text-center">
                    <div class='contractLink' @click='openInfo()' style='margin-top: 0rem;'>
                      <h3 class='cardheader contractLinkText fedsightBlue'>GSA INFORMATION TECHNOLOGY SCHEDULE 70: 47QTCA19D007S</h3>
                    </div>
                    <div class='contractLink' @click='openProfessional()'>
                      <h3 class='cardheader contractLinkText fedsightBlue'>GSA Professional Services Schedule: 47QRAA19D005V</h3>
                    </div>                    
                    <router-link to="/WhoWeServe" class='col-xs-3'><button type="button" class="btn btn-primary cardButtons">Learn More</button></router-link>
                  </div>
                </div>
              </div>	 
            </div>
          </div>

          <div class="col-md-4 d-inline-block cardContainer">
            <div class="flip">
              <div class="card"> 
                <div class="face front fedsightBlueBackground"> 
                  <div class="inner card2Inner d-flex justify-content-center align-items-center"> 
                    <font-awesome-icon :icon="['fas', 'atom']" />
                    <div class='cardTextArea d-flex align-items-center justify-content-center'>
                      <h3 class='fedsightGreen' style='text-'>Capabilities</h3>
                    </div>
                  </div>
                </div> 
                <div class="face back d-flex align-items-center"> 
                  <div class="inner text-center"> 
                    <h3 class='cardheader fedsightBlue'>Download a PDF copy of our capabilities summary</h3>
                    <button @click="downloadFile" class="btn btn-primary cardButtons"><font-awesome-icon :icon="['fas', 'download']" /> Download</button>
                  </div>
                </div>
              </div>	 
            </div>
          </div>
          <div class="col-md-4 d-inline-block cardContainer">
            <div class="flip">
              <div class="card"> 
                <div class="face front fedsightBlueBackground"> 
                  <div class="inner card3Inner d-flex justify-content-center align-items-center">   
                    <font-awesome-icon :icon="['fas', 'users']" />
                    <div class='cardTextArea d-flex align-items-center justify-content-center'>
                      <h3 class='fedsightGreen'>Clients</h3>
                    </div>
                  </div>
                </div> 
                <div class="face back d-flex align-items-center"> 
                  <div class="inner text-center"> 
                    <h2 class='cardheader fedsightGreen'>Who we serve</h2>
                    <p class=''>Check out a short list of some of our largest clients.</p>
                    
                    <router-link to="/WhoWeServe" class='col-xs-3'><button type="button" class="btn btn-primary cardButtons">View List</button></router-link>
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
// @ is an alias to /src
import Carousel from '@/components/Carousel.vue'
import Footer from '@/components/Footer.vue'
import closeMenu from '../mixins/closeMenu'
import flipper from '../mixins/flipper'


export default {
  name: 'home',
  components: {
    Carousel,
    Footer
  },
  data(){
    return{
      capabilities: '/files/Fedsight_Capabilities_Statement.pdf'
    }
  },
  methods: {
    
    forceFileDownload(response){
      const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'Fedsight_Capabilities_Statement.pdf') //or any other extension
      document.body.appendChild(link)
      link.click()
    },
    
    downloadFile() {
      this.$http({
        method: 'get',
        url: this.capabilities,
        responseType: 'arraybuffer'
      })
      .then(response => {
        this.forceFileDownload(response)  
      })
      .catch(() => console.log('error occured'))
    },

    openInfo(){
      window.open("https://www.gsaadvantage.gov/ref_text/47QTCA19D007S/0UC2T6.3PJUJG_47QTCA19D007S_FEDSIGHTIT70SUMMARY2019V5.PDF", "_blank");
    },

    openProfessional(){
      window.open("https://www.gsaadvantage.gov/ref_text/47QRAA19D005V/0UAGGC.3PGO0O_47QRAA19D005V_FEDSIGHTPSSSUMMARY.PDF", "_blank");
    }
  },
    mixins: [flipper, closeMenu]
}


</script>

<style scoped>
  svg.svg-inline--fa {
    color: white;
  }
  .home{
    height: 100vh;
  }
  .heroSection{
    height: 70vh;
    min-height: 50rem;
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
    font-size: 6rem;
    max-width: 100%;
    color: white;
  }
  .mainCTAText{
    font-size: 2.2rem;
  }
  a:hover {
    text-decoration: none;
  }
  .mainCTA{
    border-bottom: 2px solid #fff;
    font-family: 'Open Sans', sans-serif;
    text-decoration: none;
    margin: 0rem 0.5rem;
  }
  .mainCTA:hover{
    font-weight: bold;
  }
  .boxSection{
    min-height: 30rem;
    margin-top: 8rem;
  }
  .boxSectionItem{
    height: 30rem;
  }
  .sectionImg{
    width: 100%;
    height: 100%;
  }
  .contractLink{
    margin: 2rem 0rem;
    text-align: left;
    cursor: pointer;
  }
  .contractLinkText{
    margin: 0rem !important;
    padding: 0rem !important;
  }
  .contractLinkText:hover{
    color: #579C5F !important;
  }

  /**************  Flipper ****************/
  .flipSection{
    background-color: #eee;
    padding: 3rem 0rem;
  }
  .cardContainer{
    padding: 1.5rem !important;
    height: 43rem;
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
    padding: 1rem;
  }
  .cardImage{
    width: 100%;
    height: 100%;
  }
  .card1Inner,
  .card2Inner,
  .card3Inner{
    height: 100%;
    width: 100%;
    font-size: 15rem;
    color: #132631;
  }
  /*.card1Inner{
    height: 100%;
    width: 100%;
    background-image: url(../assets/bigstock-Teamwork-Concept-Collaboratio-306924817-s.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .card2Inner{
    height: 100%;
    width: 100%;
    background-image: url(../assets/bigstock-Smiling-business-team-working--209395762-s.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover; 
  }
  .card3Inner{
    height: 100%;
    width: 100%;
    background-image: url(../assets/bigstock-Closeup-of-a-stock-market-brok-269676226-s.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover; 
  }*/
  .cardTextArea{
    background-color: #fff;
    width: 100%;
    height: 8rem;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0.5rem;
  }
  .cardButtons{
    padding: 2rem;
    width: 100%;
    max-width: 20rem;
    font-size: 2rem;
    margin-top: 1rem;
  }
  .cardheader{
    padding: 0rem 0rem 1rem;
  }
  .cardText{
    font-size: 1.3rem;
    text-align: left;
  }
  /****************  Media Queries *****************/
  
  /* Small devices (landscape phones, 576px and up) */
  @media (max-width: 576px) { 
    .slogan {
      font-size: 3.5rem;
    }
    .heroSection{
      background-image: url(../assets/home-hero-small.jpg);
      max-height: 38rem;
      min-height: 38rem !important;
      background-position: center;
    }
  }

  @media (min-width: 576px) { 
    .heroSection{
      background-image: url(../assets/home-hero-small.jpg);
      max-height: 38rem;
      min-height: 38rem !important;
      background-position: center;
    }
  }

  @media (max-width: 768px) { 
    .slogan{
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }
    .heroSection{
      justify-content: center !important;
    }
  }

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) { 
    .heroSection{
      background-image: url(../assets/home-hero-medium.jpg);
      max-height: 50rem;
      min-height: 50rem !important;
    }
  }

  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) { 
    .heroSection{
      background-image: url(../assets/home-hero-medium.jpg);
      max-height: 50rem;
      min-height: 50rem !important;
    }
  }

  /* Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) { 
    .heroSection{
      background-image: url(../assets/home-hero-large.jpg);
      max-height: 60rem;
      min-height: 60rem !important;
    }
    .slogan {
      font-size: 9rem;
    }
  }
</style>