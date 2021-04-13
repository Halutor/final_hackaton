<template>
  <div class="frasetop">
    <div>
      <p class="frasetop__title">
        ¡Explota todo tu potencial tecnológico!
      </p>
    </div>
    <div>
      <p class="frasetop__text">
        Con nuestros programas de especialización
      </p> 
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.frasetop{
  margin-top: 203px;
  z-index: 60;
}

.frasetop__title{
  text-align: start; 
  font-size: 54px; 
  font-weight: bold;
  color: white;
  line-height: 1.4;
}

.frasetop__text{
  text-align: start;
  color: white;
  font-size: 20px;
  font-weight: 500;
  margin-top: 40px;
}

@media(max-width: 628px){
  .frasetop__title {
    font-size: 3rem;
  }
}

@media(max-device-width: 500px){
  .frasetop__title {
    font-size: 26px;
  }
  .frasetop__text {
    font-size: 16px;
    width: 203px;
    margin-top: 20px;
  }
  .frasetop {
    margin-top: 127px;
  }
}

@media(max-device-width: 320px){
  .frasetop__title {
    font-size: 1.2rem;
    font-weight: 900;
  }
  .frasetop__text {
    font-weight: 100;
  }
  .frasetop {
    margin-top: 60px;
  }
}
</style>