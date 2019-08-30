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
    <section style='height: 20vh;'>
      <div class='row'>
        <div class='container'>
          <h2 class='fedsightGreen'>We Assess Problems and Tailor Solutions for Federal Agencies</h2>
          <p>As an insight based consulting firm, we are acutely aware of the admission and programmatic nuances of government agencies.  This is why our approach results in sophisticated outcomes.
          </p>
        </div>
      </div>
    </section>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
  .home{
    height: 100vh;
  }
  .heroSection{
    height: 80vh;
  }
  .slogan{
    font-weight:normal;
    font-style:normal;
    font-size: 3.5vw;
    max-width: 100%;
  }
  .mainCTA{
    height: 5rem;
    width: 22rem;
    font-size: 2rem;
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