   

<template>
  <div id='footer' class='container-fluid '>
    <div class='row' style='padding: 2rem 1rem;'>
        <div class='col-md-9 d-flex align-items-start'>
            <div class='col-md-3'>
                <ul class='footerList'>
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
            <div class='col-md-3'>
                <ul class='footerList'>
                    <h3 class='fedsightGreen'>Quick Links</h3>
                    <li><router-link to="/" class='col-xs-3'>Home</router-link></li>
                    <li><router-link to="/whatWeDo" class='col-xs-3'>What We Do</router-link></li>
                    <li><router-link to="/whoWeAre" class='col-xs-3'>Who We Are</router-link></li>
                    <li><router-link to="/about" class='col-xs-3'>About Us</router-link></li>
                    <li><router-link to="/whoWeServe" class='col-xs-3'>Who We Serve</router-link></li>
                    
                    
                    
                    
                    
                </ul>
            </div>
            <div class='col-md-3'>
                <ul class='footerList'>
                    <h3 class='fedsightGreen'></h3>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div class='col-md-3'>
                <ul class='footerList'>
                    <h3 class='fedsightGreen'></h3>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
        
        <div class='col-md-3'>
            <img class='certImg' src="@/assets/hubzone5-3-1080x675.jpg" alt="hubzone certification logo">
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
</style>
