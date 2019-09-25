   

<template>
    <div id='footer' class='container-fluid'>
        <div class='row'>
            <div class='col-6 col-md-3'>
                <ul class='footerList m-auto d-inline-block'>
                    <h3 class='fedsightGreen'>Contact Us</h3>
                    <li>
                        215 Depot Court SE <br>
                        2nd Floor #249 <br>
                        Leesburg, VA 20175
                    </li>
                    <li><strong>Phone:</strong> </li>
                    <li><strong>Email:</strong> </li>
                </ul>
            </div>
            <div class='col-6 col-md-3'>
                <ul class='footerList m-auto d-inline-block'>
                    <h3 class='fedsightGreen'>Quick Links</h3>
                    <li><router-link to="/" class='col-xs-3'>Home</router-link></li>
                    <li><router-link to="/services" class='col-xs-3'>Services</router-link></li>
                    <li><router-link to="/ourApproach" class='col-xs-3'>Our Approach</router-link></li>
                    <li><router-link to="/about" class='col-xs-3'>About Us</router-link></li>
                    <li><router-link to="/whoWeServe" class='col-xs-3'>Who We Serve</router-link></li>
                </ul>
            </div>
            <!-- <div class='col-xs-6 col-md-3'>
                <ul class='footerList'>
                    <h3 class='fedsightGreen'>Something Else</h3>
                    <li>Interesting Stuff</li>
                    <li>Cool Link</li>
                    <li>Brag about something</li>
                </ul>
            </div> -->
            
            <div class='col-12 col-md-6'>
                <img class='certImg' src="@/assets/hubzone5-3-1080x675.jpg" alt="hubzone certification logo">
            </div>

            <div class='col-12 fedsightBlueBackground footerBar d-flex justify-content-between align-items-center'>
                <p><font-awesome-icon :icon="['fas', 'copyright']" /> Fedsight Consulting</p>
                <a href='https://www.linkedin.com/company/fedsight-llc' target='_blank' rel="noreferrer" aria-label='Link to Fedsights LinkedIn profile' class='linkedInIcon'><font-awesome-icon :icon="['fab', 'linkedin-in']" /></a>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#footer{
    padding: 3rem 1.5rem 0rem;
    margin-top: 8rem;
}
.footerBar{
    color: #fff;
    margin-top: 2rem;
}
.footerBar > p,
.footerBar > a{
    margin: 0rem;
    padding: 2rem;
}
.certImg{
    width: 100%;
    max-width: 20rem;
    margin: auto;
}
.footerList{
    padding: 0rem 1rem;
    text-align: left;
}
.footerList > li{
    list-style-type: none;
    font-size: 1.4rem;
    padding: 0.2rem 0rem;
}
.footerList > li > a{
    text-decoration: none;
    color: #333;
}
.footerList > li > a:hover{
    color: #579C5F;
}
.linkedInIcon{
    padding-right: 1rem;
    color: #fff;
}
.linkedInIcon:hover{
    color: #ddd;
}
</style>
