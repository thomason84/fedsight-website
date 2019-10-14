<template>
    <div class="services spacer">
        <div class='container-fluid servicesHero d-flex align-items-center justify-content-center'>
            <p class='slogan internalHeader'>What We Deliver</p>
        </div>

        <div class='container mainParagraph'>
            <div class='row d-flex justify-content-center text-align-center'>
                <h1 class='fedsightGreen'>Working Through the Tough Problems Calls for Greater Insight</h1>
                <p>We deliver innovative management, technology solutions, and analytics services to drive improvement and sustainable change. We help your organization implement creative, agile answers that fit within your organizations operating environment and culture.</p>
            </div>
        </div>

        <div class='container m-auto'>
            <div class='row'>
                <div class='col-12 d-flex flex-column'>
                    <div class='d-inline-block stackedDiv fedsightBlueBackground'>
                        <div class='stackedBackground'><font-awesome-icon :icon="['fas', 'users']" /></div>
                        <div class='stackedForeground ml-auto' style='width: 60%;'>
                            <h3 class="stackedIcon"><font-awesome-icon :icon="['fas', 'users']" /> Management Consulting</h3>
                            <p></p>
                            <ul class='d-flex'>
                                <li class='listItem order1'><span class='check fedsightYellowBackground'><font-awesome-icon :icon="['fas', 'check']" /></span>Strategic Planning</li>
                                <li class='listItem order3'><span class='check fedsightYellowBackground'><font-awesome-icon :icon="['fas', 'check']" /></span>Organizational Transformation</li>
                                <li class='listItem order5'><span class='check fedsightYellowBackground'><font-awesome-icon :icon="['fas', 'check']" /></span>Change Management</li>
                                <li class='listItem order2'><span class='check fedsightYellowBackground'><font-awesome-icon :icon="['fas', 'check']" /></span>Business Process Reengineering</li>
                                <li class='listItem order4'><span class='check fedsightYellowBackground'><font-awesome-icon :icon="['fas', 'check']" /></span>Project Management</li>
                            </ul>
                        </div>
                    </div>
                    <div class='d-inline-block stackedDiv'>
                        <div class='stackedBackground d-flex ml-auto justify-content-end' style='color: #333;'><font-awesome-icon :icon="['fas', 'chart-pie']" /></div>
                        <div class='stackedForeground fedsightBlue mr-auto'  style='color: #333; width: 60%;'>
                            <h3 class="stackedIcon"><font-awesome-icon :icon="['fas', 'chart-pie']" /> Data Analytics</h3>
                            <p></p>
                            <ul class='d-flex'>
                                <li class='listItem order1'><span class='checkAlt fedsightGreenBackground'><font-awesome-icon :icon="['fas', 'check']" /></span>Digital Strategy</li>
                                <li class='listItem order3'><span class='checkAlt fedsightGreenBackground'><font-awesome-icon :icon="['fas', 'check']" /></span>Cost Analyses &AMP; Optimization</li>
                                <li class='listItem order2'><span class='checkAlt fedsightGreenBackground'><font-awesome-icon :icon="['fas', 'check']" /></span>Performance Assessments</li>
                                <li class='listItem order4'><span class='checkAlt fedsightGreenBackground'><font-awesome-icon :icon="['fas', 'check']" /></span>Data Visualization</li>
                            </ul>
                        </div>
                    </div>
                    <div class='d-inline-block stackedDiv fedsightBlueBackground'>
                        <div class='stackedBackground'><font-awesome-icon :icon="['fas', 'cloud']" /></div>
                        <div class='stackedForeground ml-auto' style='width: 60%;'>
                            <h3 class="stackedIcon"><font-awesome-icon :icon="['fas', 'cloud']" /> IT Solutions</h3>
                            <p></p>
                            <ul class='d-flex'>
                                <li class='listItem order1'><span class='check fedsightYellowBackground'><font-awesome-icon :icon="['fas', 'check']" /></span>System Development</li>
                                <li class='listItem order3'><span class='check fedsightYellowBackground'><font-awesome-icon :icon="['fas', 'check']" /></span>Business Process Automation</li>
                                <li class='listItem order5'><span class='check fedsightYellowBackground'><font-awesome-icon :icon="['fas', 'check']" /></span>IT Management</li>
                                <li class='listItem order2'><span class='check fedsightYellowBackground'><font-awesome-icon :icon="['fas', 'check']" /></span>Requirement Analysis</li>
                                <li class='listItem order4'><span class='check fedsightYellowBackground'><font-awesome-icon :icon="['fas', 'check']" /></span>SalesForce Development</li>
                                <li class='listItem order6'><span class='check fedsightYellowBackground'><font-awesome-icon :icon="['fas', 'check']" /></span>SharePoint Development</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class='container text-align-left mt-5 p-0 ourApproach'>
            <h2 class='fedsightGreen text-align-center'>Desire to do Work Differently </h2>
            <p>We developed Fedsight with a desire to do work differently by thinking holistically and innovatively. Our team brings experience from a multitude of federal agencies to deliver change to your organization.</p>

            <div class='d-flex align-items-left flex-column justify-content-center mr-auto ml-auto mt-5'>
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

       <!-- <section class="container d-flex flex-wrap">
            <div class="col-12 d-flex flex-wrap flipSection">
                <div class="col-md-4 d-inline-block cardContainer">
                    <div class="flip">
                    <div class="card"> 
                        <div class="face front fedsightBlueBackground"> 
                            <div class='whiteText d-flex flex-column justify-content-center h-100'>
                                <i class='cardIcon'><font-awesome-icon :icon="['fas', 'user-tie']" /></i>
                                <h3>Executive View</h3>
                            </div>
                        </div> 
                        <div class="face back"> 
                        <div class="inner text-center">
                            <-- <h3 class='cardheader fedsightBlue'>Some title here</h3> --
                            <p class='cardText'>We arm leadership with actionable data by enabling cross functional, organizational, and temporal comparison. Start questioning the data and finding the answers to drive positive change.</p>
                            <-- <button type="button" class="btn btn-primary cardButtons">Learn More</button> --
                        </div>
                        </div>
                    </div>	 
                    </div>
                </div>

               
                <div class="col-md-4 d-inline-block cardContainer">
                    <div class="flip">
                    <div class="card"> 
                        <div class="face front fedsightGreenBackground"> 
                        <div class="inner card2Inner h-100">   
                            <div class='whiteText d-flex flex-column justify-content-center h-100'>
                                <i class='cardIcon'><font-awesome-icon :icon="['fas', 'hand-holding-usd']" /></i>
                                <h3>Budget Management</h3>
                            </div>
                        </div>
                        </div> 
                        <div class="face back"> 
                        <div class="inner text-center">
                            <-- <h3 class='cardheader fedsightBlue'>Some title here</h3> --
                            <p class='cardText'>Examine the current status of the budget and model potential changes. We give budget analysts the tools to examine budget execution and allocate resources where they are needed most.</p>
                            <-- <button type="button" class="btn btn-primary cardButtons">Learn More</button> --
                        </div>
                        </div>
                    </div>	 
                    </div>
                </div>

                
                <div class="col-md-4 d-inline-block cardContainer">
                    <div class="flip">
                    <div class="card"> 
                        <div class="face front fedsightYellowBackground"> 
                        <div class="inner card3Inner h-100">  
                            <div class='fedsightBlue d-flex flex-column justify-content-center h-100'>
                                <i class='cardIcon'><font-awesome-icon :icon="['fas', 'user-friends']" /></i>
                                <h3>HR Solutions</h3>
                            </div>
                        </div>
                        </div> 
                        <div class="face back"> 
                        <div class="inner text-center">
                            <-- <h3 class='cardheader fedsightBlue'>Some title here</h3> --
                            <p class='cardText'>Grasp the make-up of your workforce, anticipate changes, and identify resource needs. Track and project the costs and flow of resources throughout the human capital lifecycle.</p>
                            <-- <button type="button" class="btn btn-primary cardButtons">Learn More</button> --
                        </div>
                        </div>
                    </div>	 
                    </div>
                </div>

                
                <div class="col-md-4 d-inline-block cardContainer">
                    <div class="flip">
                    <div class="card"> 
                        <div class="face front fedsightYellowBackground"> 
                        <div class="inner card4Inner h-100"> 
                            <div class='fedsightBlue d-flex flex-column justify-content-center h-100'>
                                <i class='cardIcon'><font-awesome-icon :icon="['fas', 'hdd']" /></i>
                                <h3>IT Solutions</h3>
                            </div>
                        </div>
                        </div> 
                        <div class="face back"> 
                        <div class="inner text-center">
                            <-- <h3 class='cardheader fedsightBlue'>Some title here</h3> --
                            <p class='cardText'>Visualize the alignment of all information technology (IT) investments across your organization. Optimize IT portfolio management and identify cost-reduction and consolidation opportunities.</p>
                            <-- <button type="button" class="btn btn-primary cardButtons">Learn More</button> --
                        </div>
                        </div>
                    </div>	 
                    </div>
                </div>

                
                <div class="col-md-4 d-inline-block cardContainer">
                    <div class="flip">
                    <div class="card"> 
                        <div class="face front fedsightBlueBackground"> 
                        <div class="inner card5Inner h-100">  
                            <div class='whiteText d-flex flex-column justify-content-center h-100'>
                                <i class='cardIcon'><font-awesome-icon :icon="['fas', 'building']" /></i>
                                <h3>Facilities Solutions</h3>
                            </div>
                        </div>
                        </div> 
                        <div class="face back"> 
                        <div class="inner text-center">
                            <-- <h3 class='cardheader fedsightBlue'>Some title here</h3> --
                            <p class='cardText'>Calculate total cost of operation and maintenance of all property holdings and leases. Compare against relevant benchmarks and assess utility and cost saving opportunities.</p>
                            <-- <button type="button" class="btn btn-primary cardButtons">Learn More</button> --
                        </div>
                        </div>
                    </div>	 
                    </div>
                </div>

                
                <div class="col-md-4 d-inline-block cardContainer">
                    <div class="flip">
                    <div class="card"> 
                        <div class="face front fedsightGreenBackground"> 
                        <div class="inner card6Inner h-100">   
                            <div class='whiteText d-flex flex-column justify-content-center h-100'>
                                <i class='cardIcon'><font-awesome-icon :icon="['fas', 'chart-bar']" /></i>
                                <h3>Performance View</h3>
                            </div>
                        </div>
                        </div> 
                        <div class="face back"> 
                        <div class="inner text-center">
                            <-- <h3 class='cardheader fedsightBlue'>Some title here</h3> --
                            <p class='cardText'>Manage and analyze performance across programmatic and administrative programs. Track against metrics and receive automatic updates from reports and scorecards.</p>
                            <-- <button type="button" class="btn btn-primary cardButtons">Learn More</button> --
                        </div>
                        </div>
                    </div>	 
                    </div>
                </div>

                
                <div class="col-md-4 d-inline-block cardContainer">
                    <div class="flip">
                    <div class="card"> 
                        <div class="face front fedsightGreenBackground"> 
                        <div class="inner card7Inner h-100">   
                            <div class='whiteText d-flex flex-column justify-content-center h-100'>
                                <i class='cardIcon'><font-awesome-icon :icon="['fas', 'user-cog']" /></i>
                                <h3>Program View</h3>
                            </div>
                        </div>
                        </div> 
                        <div class="face back"> 
                        <div class="inner text-center">
                            <-- <h3 class='cardheader fedsightBlue'>Some title here</h3> --
                            <p class='cardText'>Evaluate how existing and proposed projects align with program goals. Analyze program effectiveness with analytics supported by detailed spending and performance metrics.</p>
                            <-- <button type="button" class="btn btn-primary cardButtons">Learn More</button> --
                        </div>
                        </div>
                    </div>	 
                    </div>
                </div>

                
                <div class="col-md-4 d-inline-block cardContainer">
                    <div class="flip">
                    <div class="card"> 
                        <div class="face front fedsightYellowBackground"> 
                        <div class="inner card8Inner h-100">  
                            <div class='fedsightBlue d-flex flex-column justify-content-center h-100'>
                                <i class='cardIcon'><font-awesome-icon :icon="['fas', 'clipboard-list']" /></i>
                                <h3>Comparable View</h3>
                            </div>
                        </div>
                        </div> 
                        <div class="face back"> 
                        <div class="inner text-center">
                            <-- <h3 class='cardheader fedsightBlue'>Some title here</h3> --
                            <p class='cardText'>Identify and compare against similar organizations or between sub-organizations to attain greater understanding of how your performance compares with others.</p>
                            <-- <button type="button" class="btn btn-primary cardButtons">Learn More</button> --
                        </div>
                        </div>
                    </div>	 
                    </div>
                </div>

                
                <div class="col-md-4 d-inline-block cardContainer">
                    <div class="flip">
                    <div class="card"> 
                        <div class="face front fedsightBlueBackground"> 
                        <div class="inner card9Inner h-100">  
                            <div class='whiteText d-flex flex-column justify-content-center h-100'>
                                <i class='cardIcon'><font-awesome-icon :icon="['fas', 'handshake']" /></i>
                                <h3>Acquisitions View</h3>
                            </div>
                        </div>
                        </div> 
                        <div class="face back"> 
                        <div class="inner text-center">
                            <-- <h3 class='cardheader fedsightBlue'>Some title here</h3> --
                            <p class='cardText'>See the nature of administrative support in terms of staffing, contracts, and activities. Identify strategies and opportunities to reduce administrative workload and associated costs.</p>
                            <-- <button type="button" class="btn btn-primary cardButtons">Learn More</!--
                        </div>
                        </div>
                    </div>	 
                    </div>
                </div>
            </div>
        </section> -->
        
        <Footer />
        
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import closeMenu from '../mixins/closeMenu'
import flipper from '../mixins/flipper'

  export default {
    name: 'Services',
    components: {
        Footer
    },
    mixins: [flipper, closeMenu]
}
</script>

<style scoped>
.servicesHero{
    height: 30rem;
    background-image: url(../assets/bigstock-Washington-Dc-By-Night-4142125.jpg);
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: cover;
}
.mainParagraph{
    padding: 8rem 1.5rem;
}
.stackedDiv{
    height: 30rem;
    position: relative;
}
.fa-chart-pie {
    margin-left: auto;
}
.stackedBackground{
    background-color: transparent;
    color: #687b86;
    position: absolute;
    z-index: 1;
    opacity: 0.2;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    font-size: 15vw;
    text-align: left;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    flex-direction: column;
    padding: 3rem;
}
.stackedBackground > .svg-inline--fa {
    height: 100%;
    width: auto;
}
.stackedIcon,
.stackedIcon > svg{
    font-size: 2.2rem !important;
}
.stackedForeground{
    background-color: transparent;
    color: #fff;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 3rem;
}
.stackedForeground > ul{
    margin: 0rem;
    padding: 0rem;
    flex-wrap: wrap;
    text-align: left;
}
.stackedForeground > ul > li{
    padding: 0.5rem 0rem;
}
.listItem{
    display: inline-block;
    width: 50%;
}
.order1{
    order: 1;
}
.order2{
    order: 2;
}
.order3{
    order: 3;
}
.order4{
    order: 4;
}
.order5{
    order: 5;
}
.check{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    color: #333;
    margin-right: 0.5rem;
}
.checkAlt{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    color: #fff;
    margin-right: 0.5rem;
}
.cardIcon{
    font-size: 6rem;
}
.stackedForeground > h3,
.fedsightBlue > h3{
    font-size: 2.2rem;
}

/**************  Flipper ****************/
  .flipSection{
    background-color: #eee;
    padding: 3rem 0rem;
  }
  .cardContainer{
    padding: 1.5rem !important;
    height: 30rem;
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
      height: 30rem;
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
    height: 30rem;
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
    padding: 1rem;
  }
  .cardImage{
    width: 100%;
    height: 100%;
  }
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
    font-size: 1.6rem;
    text-align: left;
  }
   




  /****************  Media Queries *****************/
  @media only screen and (max-width: 1000px) {
    .conditBreak{
        display: none;
    }
  }

  /* Small devices (landscape phones, 576px and up) */
  @media (max-width: 576px) { 
    .slogan {
      font-size: 3.5rem;
    }
    .servicesHero{
      background-image: url(../assets/services-hero-small.jpg);
    }
    .listItem {
        width: 100%;
    }
  }

  @media (min-width: 576px) { 
    .servicesHero{
      background-image: url(../assets/services-hero-small.jpg);
    }
  }

  @media (max-width: 768px) { 
    .slogan{
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }
    .servicesHero{
      justify-content: center !important;
      background-position: left bottom;
    }
  }

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) { 
    .servicesHero{
      background-image: url(../assets/services-hero-medium.jpg);
    }
  }

  @media (max-width: 992px){
    .stackedForeground{
        width: 100% !important;
        max-width: 60rem;
        margin-left: auto !important;
        margin-right: auto !important;
    }
    .fa-chart-pie,
    .fa-users,
    .fa-cloud{
        margin: auto;
    }
    .container{
        padding: 1.5rem !important;
    }
  }

  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) { 
    .servicesHero{
      background-image: url(../assets/services-hero-medium.jpg);
    }
  }

  /* Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) { 
    .servicesHero{
      background-image: url(../assets/services-hero-large.jpg);
    }
    .slogan {
      font-size: 9rem;
    }
  }
</style>