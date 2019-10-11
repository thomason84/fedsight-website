<template>
  <div class="about spacer">
        <section class='container-fluid serveHero d-flex align-items-center justify-content-center'>
            <h2 class='serveHeader internalHeader'>Our Customers</h2>
        </section>

        <section class='clientList fedsightBlueBackground'>
            <div class='container-fluid'>
                <div class='row'>
                    <!-- <h2 class='fedsightYellow col-12 clientHeader'>Our Clients Include</h2> -->
                    <div class='col-md-4 logoDiv'>
                        <img class='logo' src="../assets/gsa.png" alt="logo for GSA">
                    </div>
                    <div class='col-md-4 logoDiv'>
                        <img class='logo' src="../assets/uscg.png" alt="logo for USCG">
                    </div>
                    <div class='col-md-4 logoDiv'>
                        <img class='logo' src="../assets/epa.png" alt="logo for EPA">
                    </div>
                    <div class='col-md-4 logoDiv doe'>
                        <img class='logo' src="../assets/doe.png" alt="logo for DOE">
                    </div>
                    <div class='col-md-4 logoDiv'>
                        <img class='logo' src="../assets/dhs.png" alt="logo for DHS">
                    </div>
                    <div class='col-md-4 logoDiv'>
                        <img class='logo' src="../assets/uscbp.png" alt="logo for USCBP">
                    </div>
                </div>
            </div>
        </section>
            
        <section class='fedsightGreenBackground whiteText d-flex align-items-center' style='height: 10rem'>
            <h2>Contract Vehicles We Support</h2>
        </section>

        <section>
            <div class='triangle-down-green m-auto'></div>
            <div class='container-fluid mt-5'>
                <div class='row'>
                    <div class='col-md-4 text-align-left pr-5 pl-1'>
                        <h2 class='fedsightGreen'>GSA Professional Services Schedule</h2>
                        <p><b>Contract #: </b>47QRAA19D005V</p>
                    </div>
                    <div class='col-md-8 text-align-left pr-1 pl-1'>
                        <p>Fedsight offers management consulting and administrative support services through the General Services Administration (GSA) Professional Services Schedule (PSS). Awarded Special Item Numbers (SINs) include SIN 874-1-Integrated Consulting Services; SIN 520-13 – Complementary Financial Management Services, SIN 874-7 – Integrated Business Program Support Services. For a detailed description of services, labor categories, and labor rates, please see <b>Fedsight’s GSA PSS Contract# 47QRAA19D005V</b></p>
                    </div>
                    <hr class='m-3'>
                    <div class='col-md-4 text-align-left pr-5 pl-1 mobileSpacer'>
                        <h2 class='fedsightGreen'>GSA Information Technology Schedule 70</h2>
                        <p><b>Contract #: </b>47QTCA19D007S</p>
                    </div>
                    <div class='col-md-8 text-align-left pr-1 pl-1'>
                        <p>Fedsight offers information technology services through the General Services Administration (GSA) Information Technology Schedule (IT) 70. Awarded Special Item Numbers (SINs) include SIN 132-51 – Information Technology Professional Services which encompasses systems development, systems analysis, IT strategy and architecture, IT security, and other IT services. For a detailed description of services, labor categories, and labor rates, please see <b>Fedsight’s GSA IT70 Contract # 47QTCA19D007S</b></p>
                    </div>
                    <hr class='m-3'>
                    <div class='col-md-4 text-align-left pr-5 pl-1 mobileSpacer'>
                        <h2 class='fedsightGreen'>Cross-government Subcontracts</h2>
                    </div>
                    <div class='col-md-8 text-align-left pr-1 pl-1'>
                        <p>Fedsight has access to numerous agency vehicles and Governmentwide Acquisition Contracts (GWACs) through our extensive network of teaming partners. Specific Agency contracts include the Environmental Protection Agency, U.S. Coast Guard, U.S. Customs and Border Protection, General Services Administration, U.S. Housing and Urban Development, Department of Homeland Security, and Department of Energy.</p>
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
.serveHero{
    height: 30rem;
    background-image: url(../assets/bigstock-Us-Capitol-North-Side-Fountain-306150373.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.serveHeader{
    color: #fff;
    font-size: 6rem;
}
.mainParagraph{
    padding: 8rem 1.5rem;
    max-width: 80rem;
    margin: auto;
}
.logoDiv{
    padding: 4rem 0rem;
    display: flex;
    align-items: center;
    height: 20rem;
}
.clientHeader{
    padding-top: 3rem;
    font-size: 2.5rem;
}
.logo{
    max-height: 8rem;
    width: auto;
    max-width: 90%;
    margin: auto;
}
.triangle-down-green {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-top: 30px solid #579C5F;
}
hr{
    width: 90%;
}

@media (max-width: 767px) {
    .logoDiv {
        height: 10rem;
        padding: 1rem;
    } 
    .logo{
        max-height: 70%;
    }
    .doe{
        height: 18rem;
    }
    .mobileSpacer{
        padding-top: 3rem;
    }
}
</style>