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
                <div class='col-md-6 d-flex flex-column'>
                    <div class='d-inline-block stackedDiv fedsightBlueBackground'>
                        <div class='stackedBackground'><font-awesome-icon :icon="['fas', 'users']" /></div>
                        <div class='stackedForeground'>
                            <h3><font-awesome-icon :icon="['fas', 'users']" /></h3>
                        </div>
                    </div>
                    <div class='d-inline-block stackedDiv'>
                        <div class='stackedBackground'><font-awesome-icon :icon="['fas', 'chart-pie']" /></div>
                        <div class='stackedForeground'>
                            <h3><font-awesome-icon :icon="['fas', 'chart-pie']" /></h3>
                        </div>
                    </div>
                    <div class='d-inline-block stackedDiv fedsightBlueBackground'>
                        <div class='stackedBackground'><font-awesome-icon :icon="['fas', 'cloud']" /></div>
                        <div class='stackedForeground'>
                            <h3><font-awesome-icon :icon="['fas', 'cloud']" /></h3>
                        </div>
                    </div>
                </div>
                <div class='col-md-6 stackedDivRight'></div>
            </div>
        </div>

        
        
        
    </div>
</template>

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

}
  /****************  Media Queries *****************/
  @media only screen and (max-width: 1000px) {
    .conditBreak{
        display: none;
    }
  }
</style>