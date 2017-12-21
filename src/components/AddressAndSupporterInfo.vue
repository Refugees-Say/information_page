<template>
  <div class="main">
      <div class="address">
        <h3>Your new home is located at:</h3>
        <p>{{address}}</p>
      </div>
      <div class="support">
        <img class="personal-photo" alt="personal photo" v-bind:src="source">
        <p>{{support}}</p>
      </div>
      <div class="btn-container">
        <button class="btn">Reply to</button>
        <button class="btn">Show jobs near me</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'AddressAndSupporterInfo',
  data() {
    return {
      address: 'Loosi Plats 1a, 15165 Tallinn, Harju. Harju County is a region in north Estonia, including the capital, Tallinn. It is well connected and known for its beatiful coastal scenery.',
      support: 'Hello Samaira, My name is Liisa. I live in Harju and would like to offer to help you settle in.',
      source: '../assets/img_avatar.png',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main {
  display: flex;
  flex-flow: column;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  width: 100%;
  max-width: 650px;
  margin: auto;
  padding: 10px;
  align-items: center;
  justify-content: center;
  .address, .support {
    border: solid #8bd4da 1px;
    padding: 5px;
    border-radius: 5px;
    margin: 5px;
  }
  .personal-photo {
    float: right;
    width: 120px;
    height: auto;
    border-radius: 5px;
  }
  .btn-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    .btn {
      width: 120px;
      height: 70px;
      margin: 10px auto;
      padding: 15px 10px;
      background-color: #8bd4da;
      color: #fff;
      border-radius: 20px;
      font-size: 1.1rem;
      border: none;
      cursor: pointer;
    }
  }
}
</style>
