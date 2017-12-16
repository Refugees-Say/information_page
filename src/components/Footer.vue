<template>
  <footer>
    <div class="footerLogos">
      <img class="logo" src="../assets/refsay_logo.png" alt="Refugee say logo">
      <img class="logo" src="../assets/ml_logo.png" alt="MIT media logo">
      <img class="logo" src="../assets/oxford_logo.png" alt="Oxford logo">
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  display: flex;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: 200px;
  align-items: center;
  justify-content: center;
}

.footerLogos {
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  width: 25%;
  height: auto;
  display: inline-block;
}
</style>
