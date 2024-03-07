<script setup>

</script>

<template>
  <div class="header">
    <div class="wrapper"></div>
    <div class="bg-images"></div>

    <div class="steams">
      <div class="steam first"></div>
      <div class="steam second"></div>
      <div class="steam third"></div>
    </div>

    <div class="header-text">
      <h1 class="title">Готовить? <span style="background-color: #669655; color: white;">Легко!</span></h1>
      <p class="paragraph"><b>Выбирай блюдо и <br>рассчитывай ингредиенты </b></p>
    </div>
  </div>
</template>

<style scoped>

.header{
  width: 100vw;
  overflow: hidden;
}

.bg-images{
  background-image: url("/images/тарелка с тенью.jpg");
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
}

.wrapper {
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: black;
  opacity: 30%;
  z-index: 0;
}

.steams{
  display: flex;
  justify-content: center;
  align-items: center;
}
.header-text {
  position: absolute;
  width: 100vw;
  top: 15%;
}

.title{
  text-align: center;
  font-size: 6vw;
  color: #d7e8ff;
  font-family: "Unbounded";
}

.paragraph{
  color: #d7e8ff;
  font-size: 2vw;
  text-align: center;
  margin-top: 20px;
  font-family: "Unbounded Light";
  margin-top: 3vh;
}

@media screen and (max-width: 768px) {
  .title {
    font-size: 11vw;
  }
  .paragraph{
    font-size: 3vw;
  }
  .header-text{
    top: 25%;
  }
}



.steam{
  position: absolute;
  bottom: 42vh;
  transform: translateX(-50%);
  width: 80px;
  height: 100px;
  background-image: url('/images/дым.png');
  animation: steam 3s ease-in-out infinite;
  z-index: 1;
  background-repeat: no-repeat;
  background-size: cover;

}
.first{
  max-width: 100%;
  max-height: 100%;
  margin-right: 20%;
}
.second{
  max-width: 100%;
  max-height: 100%;
}
.third{
  max-width: 100%;
  max-height: 100%;
  margin-left: 20%;
}


@keyframes steam {
  0% { opacity: 0; transform: translateY(50px); }
  30% { opacity: 0.5;  }
  100% { opacity: 0; transform: translateY(-50px); }
}



</style>