<template>
  <div id="app">
    <div id='navbar'>
      <b-navbar toggleable="lg"  class=''>
        <b-navbar-brand href="#"><img alt='Fedsight Logo' src='./assets/fedsight_consult_logo-white.svg' class='logo'></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <div class='d-flex ml-auto nav-links'>
              <router-link to="/" class='col-xs-3'>Home</router-link>
              <router-link to="/services" class='col-xs-3'>Services</router-link>
              <router-link to="/about" class='col-xs-3'>About Us</router-link>
              <router-link to="/whoWeServe" class='col-xs-3'>Clients</router-link>
            </div>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <router-view />

  </div>
</template>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#navbar{
    position: fixed;
    top: 0rem;
    left: 0rem;
    right: 0rem;
    z-index: 99999;
    background-color: #132631;
    background-color: rgba(19,38,49, 0.9);
}
.nav-links > a{
  color: #fff;
  text-decoration: none;
  display: inline-block;
  padding: 1rem;
}
.nav-links > a:hover{
  color: #F7D72A;
  text-decoration: none;
}
a.router-link-exact-active {
  color: #F7D72A;
  text-decoration: none;
}
.logo{
    width: 100%;
    max-width: 25rem;
}
button.navbar-toggler {
  background-color: #fff;
  border: 1px solid #transparent;
}
button.navbar-toggler:active,
button.navbar-toggler:focus,
button.navbar-toggler:focus-within {
  border: 1px solid transparent;
}
</style>
