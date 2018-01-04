<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'app',
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  background-color: #eeefef;
  font-weight: 300;
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: "Open Sans", "sans-serif";
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  background-image: url(./assets/bg_photo.jpg);
  background-size: cover;
}
</style>
