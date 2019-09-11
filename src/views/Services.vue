<template>
    <div class="services spacer">
        <div class='container-fluid servicesHero d-flex align-items-center justify-content-center'>
            <h2 class='servicesHeader'>Services</h2>
        </div>

        <div class='container mainParagraph'>
            <div class='row d-flex justify-content-center text-align-center'>
                <h2 class='fedsightGreen'>Working Through the Tough Problems Calls for Greater Insight</h2>
                <p>Fedsight has the experience and knowledge to help you maneuver the challenge with agility and perspective. <span class='conditBreak'><br></span>We help solve problems to enhance efficiency, and ensure programs remain cost-effective, transparent, and well-organized.</p>
                <p>Fedisght has worked across the federal spectrum to solve problems at every organizational level. Our business promise is helping<span class='conditBreak'><br></span> you leverage challenges to serve as opportunities; to enhance decision making, and turn plans into  actionable solutions.</p>
            </div>
        </div>

        <div class='container-fluid'>
            <div class='row'>
                <div class='col-md-7 col-lg-6 d-flex flex-column'>
                    <div class='d-inline-block stackedDiv fedsightBlueBackground'>
                        <div class='stackedBackground'><font-awesome-icon :icon="['fas', 'users']" /></div>
                        <div class='stackedForeground'>
                            <h3><font-awesome-icon :icon="['fas', 'users']" /> Management Consulting</h3>
                            <p></p>
                            <ul class='d-flex'>
                                <li class='listItem order1'><span class='check fedsightYellowBackground'><font-awesome-icon :icon="['fas', 'check']" /></span>Strategic Planning</li>
                                <li class='listItem order3'><span class='check fedsightYellowBackground'><font-awesome-icon :icon="['fas', 'check']" /></span>Organizational Transformations</li>
                                <li class='listItem order5'><span class='check fedsightYellowBackground'><font-awesome-icon :icon="['fas', 'check']" /></span>Change Management</li>
                                <li class='listItem order2'><span class='check fedsightYellowBackground'><font-awesome-icon :icon="['fas', 'check']" /></span>Business Process Reengineering</li>
                                <li class='listItem order4'><span class='check fedsightYellowBackground'><font-awesome-icon :icon="['fas', 'check']" /></span>Project Management</li>
                            </ul>
                        </div>
                    </div>
                    <div class='d-inline-block stackedDiv'>
                        <div class='stackedBackground' style='color: #333;'><font-awesome-icon :icon="['fas', 'chart-pie']" /></div>
                        <div class='stackedForeground fedsightBlue'  style='color: #333;'>
                            <h3><font-awesome-icon :icon="['fas', 'chart-pie']" /> Data Analytics</h3>
                            <p></p>
                            <ul class='d-flex'>
                                <li class='listItem order1'><span class='checkAlt fedsightGreenBackground'><font-awesome-icon :icon="['fas', 'check']" /></span>Digital Strategy</li>
                                <li class='listItem order3'><span class='checkAlt fedsightGreenBackground'><font-awesome-icon :icon="['fas', 'check']" /></span>Cost Analyses/Optimization</li>
                                <li class='listItem order2'><span class='checkAlt fedsightGreenBackground'><font-awesome-icon :icon="['fas', 'check']" /></span>Performance Assessments</li>
                                <li class='listItem order4'><span class='checkAlt fedsightGreenBackground'><font-awesome-icon :icon="['fas', 'check']" /></span>Data Visualization</li>
                            </ul>
                        </div>
                    </div>
                    <div class='d-inline-block stackedDiv fedsightBlueBackground'>
                        <div class='stackedBackground'><font-awesome-icon :icon="['fas', 'cloud']" /></div>
                        <div class='stackedForeground'>
                            <h3><font-awesome-icon :icon="['fas', 'cloud']" /> IT Solutions</h3>
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
                <div class='col-md-5 col-lg-6 stackedDivRight'></div>
            </div>
        </div>

        
        <Footer />
        
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

  export default {
    name: 'Services',
    components: {
        Footer
    }
  }
</script>

<style scoped>
.servicesHero{
    height: 30rem;
    background-image: url(../assets/bigstock-Washington-Dc-By-Night-4142125.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.servicesHeader{
    color: #fff;
    font-size: 6rem;
}
.mainParagraph{
    padding: 8rem 1.5rem;
}
.stackedDiv{
    height: 30rem;
    position: relative;
}
.stackedDivRight{
    background-image: url(../assets/bigstock-Five-Businesspeople-At-Boardro-4132768.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
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
}
.stackedBackground > .svg-inline--fa {
    height: 100%;
    width: auto;
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
    padding: 3rem;
    justify-content: center;
    align-items: flex-start;
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
    padding: 0.3rem;
    border-radius: 50%;
    color: #333;
    margin-right: 0.5rem;
}
.checkAlt{
    padding: 0.3rem;
    border-radius: 50%;
    color: #fff;
    margin-right: 0.5rem;
}
  /****************  Media Queries *****************/
  @media only screen and (max-width: 1000px) {
    .conditBreak{
        display: none;
    }
  }
</style>