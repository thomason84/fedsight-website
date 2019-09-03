<template>
  <div class='container'>
    <div class='container-fluid'>
      <div class='row'>
        <div class='col-4 fedsightBlueBackground whiteText carouselHeader'>Strategize</div>
        <div class='col-4 fedsightGreenBackground whiteText carouselHeader'>Develop</div>
        <div class='col-4 fedsightYellowBackground carouselHeader'>Manage</div>
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
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Slide 1 -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="@/assets/bigstock-Teamwork-Concept-Collaboratio-306924817.jpg"
      ></b-carousel-slide>

      <!-- Slide 2 -->
      <b-carousel-slide
        caption="Second slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="@/assets/bigstock--202433170.jpg"
      >
      </b-carousel-slide>

      <!-- Slide 3 -->
      <b-carousel-slide
        caption="Third slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="@/assets/bigstock-Smiling-business-team-working--209395762.jpg"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
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
        console.log(slide)
      },
      onSlideEnd(slide) {
        this.sliding = false
        console.log(slide)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carouselHeader{
  padding: 2rem 0rem;
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
  z-index: 1;
  width: 100%;
}
</style>
