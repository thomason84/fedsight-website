<template>
  <div id="app">
    <div id="nav" class='container-fluid fedsightBlueBackground'>
      <img alt='Fedsight Logo' src='./assets/fedsight_consult_logo-white.svg' class='logo'>
      <div style='margin-left: auto;'>
        <router-link to="/" class='col-md-2 col-xs-3'>Home</router-link> |
        <router-link to="/about" class='col-md-2 col-xs-3'>About</router-link>
      </div>
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
#nav {
  padding: 1rem;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0rem;
  opacity: 0.8;
}

#nav a {
  font-weight: bold;
  color: #fff;
}

#nav a.router-link-exact-active {
  color: #F7D72A;
}

.logo{
    width: 25rem;
}
.st0 {
    fill: #fff;
}
</style>
