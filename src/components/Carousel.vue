<template>
  <div class='container'>
    <div class='container-fluid'>
      <div class='row'>
        <div @click='slide = 0' class='col-4 fedsightBlueBackground whiteText carouselHeader'>Strategy</div>
        <div @click='slide = 1' class='col-4 fedsightGreenBackground whiteText carouselHeader'>Development</div>
        <div @click='slide = 2' class='col-4 fedsightYellowBackground carouselHeader'>Operations</div>
      </div>
    </div>
    <div class='container-fluid relative'>
      <div class='row triangleSection'>
        <div v-if ='slide == 0' class='col-4 d-flex justify-content-center'>
          <div class='triangle-down-blue'></div>
        </div>
        <div v-else-if ='slide == 1' class='col-4 d-flex justify-content-center m-auto'>
          <div class='triangle-down-green'></div>
        </div>
        <div v-else-if ='slide == 2' class='col-4 d-flex justify-content-center ml-auto'>
          <div class='triangle-down-yellow'></div>
        </div>
      </div>
    </div>
    
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="5000"
      indicators
      background="#ababab"
      img-width="1024"
      img-height="350"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Slide 1 -->
      <b-carousel-slide
        caption=""
        text-tag='div'
        text-html="
        <ul class='slideList' style='text-align: left; list-style-type: disc;font-size: 2rem'>
          <li>Strategic planning</li>
          <li>Forecasting</li>
          <li>Early-stage product development planning</li>
        </ul>
        <div class='flipCardButton fedsightYellowBackground'>Learn More</div>
        "
        img-src="@/assets/strategy-medium.jpg"
      ></b-carousel-slide>

      <!-- Slide 2 -->
      <b-carousel-slide
        caption=""
        text-tag='div'
        text-html="
        <ul class='slideList' style='text-align: left; list-style-type: disc;font-size: 2rem'>
          <li>Business Process Reengineering</li>
          <li>Computer Systems Design</li>
          <li>Business Process Automation</li>
          <li>Work Force Development</li>
          <li>SharePoint Development</li>
        </ul>
        <div class='flipCardButton fedsightYellowBackground'>Learn More</div>
        "
        img-src="@/assets/development-medium.jpg"
      >
      </b-carousel-slide>

      <!-- Slide 3 -->
      <b-carousel-slide class='slide3'
        caption=""
        text-tag='div'
        text-html="
        <ul class='slideList' style='text-align: left; list-style-type: disc;font-size: 2rem'>
          <li>Digital Strategy</li>
          <li>Performance Assessments</li>
          <li>Cost Analyses/Optimization</li>
          <li>Data Visualization</li>
          <li>Project Management</li>
          <li>Performance Assessments</li>
          <li>Cost Analyses/Optimization</li>
        </ul>
        <div class='flipCardButton fedsightYellowBackground'>Learn More</div>
        "
        img-src="@/assets/operations-medium.jpg"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
  /* eslint-disable */
  export default {
    name: 'Carousel',
    data() {
      return {
        slide: 0,
        show: true,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
        //console.log(slide)
      },
      onSlideEnd(slide) {
        this.sliding = false
        //console.log(slide)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carouselHeader{
  padding: 2rem 0rem;
  cursor: pointer;
  font-size: 2.5rem;
}
.carousel-item{
    height: 100%;
    max-height: 35rem;
}
.carousel-item > img{
    height: 100%;
}
 .triangle-down-blue {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-top: 30px solid #132631;
}
.triangle-down-green {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-top: 30px solid #579C5F;
}
.triangle-down-yellow {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-top: 30px solid #F7D72A;
}
.relative{
  position: relative;
}
.triangleSection{
  position: absolute;
  z-index: 11;
  width: 100%;
}



@media (max-width: 768px) { 
  .carouselHeader{
    font-size: 2rem;
  }
}

@media (max-width: 576px) { 
  .carouselHeader{
    font-size: 1.8rem;
  }
}
</style>
