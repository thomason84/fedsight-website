<template>
  <div id="app">
    <!-- <div id="nav" class='container-fluid fedsightBlueBackground'>
      <img alt='Fedsight Logo' src='./assets/fedsight_consult_logo-white.svg' class='logo'>
      <div class='' style='margin-left: auto;'>
        <router-link to="/" class='col-md-2 col-xs-3'>Home</router-link> |
        <router-link to="/about" class='col-md-2 col-xs-3'>About</router-link>
      </div>
    </div> -->

    <div>
  <b-navbar toggleable="lg"  class='fedsightBlueBackground'>
    <b-navbar-brand href="#"><img alt='Fedsight Logo' src='./assets/fedsight_consult_logo-white.svg' class='logo'></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <div class='ml-auto nav-links'>
          <router-link to="/" class='col-md-2 col-xs-3'>Home</router-link> |
          <router-link to="/about" class='col-md-2 col-xs-3'>About</router-link>
        </div>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
    <router-view/>
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
.nav-links > a{
  color: #fff;
}
.nav-links > a:hover{
  color: #F7D72A;
}
a.router-link-exact-active {
  color: #F7D72A;
}
.logo{
    width: 25rem;
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
