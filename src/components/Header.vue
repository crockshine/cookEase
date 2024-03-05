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

  .bg-images{
    background-image: url("/images/тарелка с тенью.jpg");
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 100vh;
    background-repeat: no-repeat;
    min-width: 500px;
  }

  .wrapper {
    position: absolute;
    height: 100vh;
    width: 100%;
    background-color: black;
    opacity: 30%;
    z-index: 0;
  }

.steams{
  display: flex;
  justify-content: center;
  align-items: center;
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

  .header-text {
    position: absolute;
    width: 100%;
    top: 12%;
  }

  .title{
    text-align: center;
    font-size: 10vh;
    color: #d7e8ff;

  }

  .paragraph{
    color: #d7e8ff;
    font-size: 4vh;
    text-align: center;
    margin-top: 20px;
  }

</style>