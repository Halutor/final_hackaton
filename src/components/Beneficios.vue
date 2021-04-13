<template>
  <div class="beneficios">
    <div class="beneficios__title">
      <p>Beneficios</p>
    </div>
    <section class="beneficios__section">
      <div class="beneficiosItems">
        <div class="beneficiosItems__img">
          <img src="../assets/iconExpertos.svg" alt="" />
        </div>
        <div class="beneficiosItems__text">
          <div>
            <p class="itemTitle">Aprende de Expertos</p>
          </div>
          <div>
            <p class="itemText">
              Aprende directamente de expertos del mercado a través del análisis
              y solución de problemas de programación. Utilizando los frameworks
              y herramientas de mayor relevancia dentro del mundo del coding.
            </p>
          </div>
        </div>
      </div>
      <div class="beneficiosItems">
        <div class="beneficiosItems__img">
          <img src="../assets/iconClases.svg" alt="" />
        </div>
        <div class="beneficiosItems__text">
          <div>
            <p class="itemTitle">Clases Virtuales</p>
          </div>
          <div>
            <p class="itemText">
              Aprovecha tu tiempo al máximo en nuestras clases virtuales y
              participa presencialmente de nuestras hackathones semanales para
              conocer y participar de la comunidad profesional que liderará la
              transformación tecnológica del Perú.
            </p>
          </div>
        </div>
      </div>
      <div class="beneficiosItems">
        <div class="beneficiosItems__img">
          <img src="../assets/iconEmpleos.svg" alt="" />
        </div>
        <div class="beneficiosItems__text">
          <div>
            <p class="itemTitle">Empleabilidad</p>
          </div>
          <div>
            <p class="itemText">
              Al finalizar el programa y certificarte a nombre de IDAT, podrás
              acceder a ofertas laborales especialmente identificadas para la
              comunidad PachaQTec, a través de nuestra plataforma de
              empleabilidad IDAT JOB.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style>
.beneficios{
  margin: 139px 0 182px 0;
}

.beneficios__title{
  margin-bottom: 30px;
}

.beneficios__title p{
  color: #222222;
  text-align: start;
  font-size: 20px;
  font-weight: bold;
}

.beneficios__section{
  display: flex; 
  flex-direction: column; 
  gap: 30px
}

.beneficiosItems{
  display: flex; 
  background: #f8f8fa; 
  border-radius: 10px;
  height: 160px;
}

.beneficiosItems__img{
  display: flex; 
  align-items: center; 
  padding: 50px
}

.beneficiosItems__text{
  padding: 30px 40px 30px 0;
  text-align: start;
  border-radius: 10px;
}

.itemTitle{
  color: #000425;
  font-weight: 500;
  margin-bottom: 20px;
}

.itemText{
  color: #000425;
  font-family: Roboto;
  font-size: 14px;
}


@media(max-device-width: 500px){
  .beneficiosItems__text {
    display: flex;
    align-items: center;
    padding: 40px 0px 40px 0;
  }

  .itemText{
    display: none;
  }

  .beneficiosItems{
    height: 108px;
  }

  .itemTitle{
    margin-bottom: 0;
  }
}
</style>