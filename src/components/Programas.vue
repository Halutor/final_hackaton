<template>
  <div class="programas">
    <p class="programas__title">
      Conoce nuestros Programas de especialización
    </p>
    <div class="programas__groupImages">
      <div class="divImage">
        <img class="divImage__img" src="../assets/DesarrolloFront-End.jpg" alt="" />        
        <svg class="divImage__fondo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="344" height="320" viewBox="0 0 344 320">
          <defs>
            <linearGradient id="linear-gradient" x1="0.484" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
              <stop offset="0" stop-color="#000425" stop-opacity="0"/>
              <stop offset="1" stop-color="#000425"/>
            </linearGradient>
          </defs>
          <rect id="Rectángulo_5295" data-name="Rectángulo 5295" width="344" height="320" rx="10" fill="url(#linear-gradient)"/>
        </svg>
        <p class="txtDesaFront">Desarrollo Front-End</p>
        <div class="divImage__options">
          <img class="divImage__addCar" src="../assets/addCarrito.png" alt="" />
          <router-link :to="`/curso/1`">
            <img src="../assets/verMas.svg" alt="" />
          </router-link>
        </div>
      </div>
      <div class="divImage">
        <img class="divImage__img" src="../assets/DesarrolloBack-End.jpg" alt="" />
        <svg class="divImage__fondo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="344" height="320" viewBox="0 0 344 320">
          <defs>
            <linearGradient id="linear-gradient" x1="0.484" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
              <stop offset="0" stop-color="#000425" stop-opacity="0"/>
              <stop offset="1" stop-color="#000425"/>
            </linearGradient>
          </defs>
          <rect id="Rectángulo_5295" data-name="Rectángulo 5295" width="344" height="320" rx="10" fill="url(#linear-gradient)"/>
        </svg>
        <p class="txtDesaBack">Desarrollo Back-End</p>
        <div class="divImage__options">
          <img class="divImage__addCar" src="../assets/addCarrito.png" alt="" />
          <router-link :to="`/curso/1`">
            <img src="../assets/verMas.svg" alt="" />
          </router-link>
        </div>
      </div>
    </div>
    <div class="programas__groupImages">
      <div class="divImage">
        <img class="divImage__img" src="../assets/DesarrolloDeAplicativosMoviles.jpg" alt="" />
        <svg class="divImage__fondo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="344" height="320" viewBox="0 0 344 320">
          <defs>
            <linearGradient id="linear-gradient" x1="0.484" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
              <stop offset="0" stop-color="#000425" stop-opacity="0"/>
              <stop offset="1" stop-color="#000425"/>
            </linearGradient>
          </defs>
          <rect id="Rectángulo_5295" data-name="Rectángulo 5295" width="344" height="320" rx="10" fill="url(#linear-gradient)"/>
        </svg>
        <p class="txtDesaApli">Desarrollo de Aplicativos Móviles</p>
        <div class="divImage__options">
          <img class="divImage__addCar" src="../assets/addCarrito.png" alt="" />
          <router-link :to="`/curso/1`">
            <img src="../assets/verMas.svg" alt="" />
          </router-link>
        </div>
      </div>
      <div class="divImage">
        <img class="divImage__img" src="../assets/DiseñoDeExperienciaDeUsuario.jpg" alt="" />
        <svg class="divImage__fondo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="344" height="320" viewBox="0 0 344 320">
          <defs>
            <linearGradient id="linear-gradient" x1="0.484" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
              <stop offset="0" stop-color="#000425" stop-opacity="0"/>
              <stop offset="1" stop-color="#000425"/>
            </linearGradient>
          </defs>
          <rect id="Rectángulo_5295" data-name="Rectángulo 5295" width="344" height="320" rx="10" fill="url(#linear-gradient)"/>
        </svg>
        <p class="txtDiseUX">Diseño de Experiencia de Usuario</p>
        <div class="divImage__options">
          <img class="divImage__addCar" src="../assets/addCarrito.png" alt="" />
          <router-link :to="`/curso/1`">
            <img src="../assets/verMas.svg" alt="" />
          </router-link>
        </div>
      </div>
    </div>
    <div class="programas__groupImages">
      <div class="divImage">
        <img class="divImage__img" src="../assets/DesarrolloDeVideoJuegos.jpg" alt="" />
        <svg class="divImage__fondo" xmlns="http://www.w3.org/2000/svg" width="344" height="320" viewBox="0 0 344 320">
          <rect id="Rectángulo_5311" data-name="Rectángulo 5311" width="344" height="320" rx="10" fill="#090f3f" opacity="0.6" style="mix-blend-mode: multiply;isolation: isolate"/>
        </svg>
        <p class="txtDesaVideojuegos">Desarrollo de Videojuegos</p>
        <img class="divImage__prox" src="../assets/proximamente.svg" alt="" />
      </div>
      <div class="divImage">
        <img class="divImage__img" src="../assets/MarketingDigital.jpg" alt="" />
        <svg class="divImage__fondo" xmlns="http://www.w3.org/2000/svg" width="344" height="320" viewBox="0 0 344 320">
          <rect id="Rectángulo_5311" data-name="Rectángulo 5311" width="344" height="320" rx="10" fill="#090f3f" opacity="0.6" style="mix-blend-mode: multiply;isolation: isolate"/>
        </svg>
        <p class="txtMarkDigi">Marketing Digital</p>
        <img class="divImage__prox" src="../assets/proximamente.svg" alt="" />
      </div>
    </div>
    <div class="programas__groupImages">
      <div class="divImage">
        <img class="divImage__img" src="../assets/DataAnalytics.jpg" alt="" />
        <svg class="divImage__fondo" xmlns="http://www.w3.org/2000/svg" width="344" height="320" viewBox="0 0 344 320">
          <rect id="Rectángulo_5311" data-name="Rectángulo 5311" width="344" height="320" rx="10" fill="#090f3f" opacity="0.6" style="mix-blend-mode: multiply;isolation: isolate"/>
        </svg>
        <p class="txtDataAna">Data Analytics </p>
        <img class="divImage__prox" src="../assets/proximamente.svg" alt="" />
      </div>
      <div class="divImage">
        <img class="divImage__img" src="../assets/DesarrolloFrontEndAvanzado.jpg" alt="" />
        <svg class="divImage__fondo" xmlns="http://www.w3.org/2000/svg" width="344" height="320" viewBox="0 0 344 320">
          <rect id="Rectángulo_5311" data-name="Rectángulo 5311" width="344" height="320" rx="10" fill="#090f3f" opacity="0.6" style="mix-blend-mode: multiply;isolation: isolate"/>
        </svg>
        <p class="txtDesaFrontAvan">Desarrollo <br> Front-End Avanzado </p>
        <img class="divImage__prox" src="../assets/proximamente.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.programas{
  margin-top: 130px;
}

.programas__title{
  text-align: start;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 30px;
  color: #222222;
}

.programas__groupImages {
  display: flex;
  gap: 30px;
}

.divImage{  
  margin-bottom: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.divImage__img{
  width: inherit;
}

.divImage__fondo{
  position: absolute;  
}

.divImage p{
  position: absolute;
  color: white;
  bottom: 64px;
  left: 20px;
  font-weight: 500;
  text-align: start;
  font-size: 20px;
}

.txtDesaFront, .txtDesaBack{
  width: 102px;
}

.txtDesaApli{
  width: 197px;  
}

.txtDiseUX{
  width: 252px;
}

.txtDesaVideojuegos{
  width: 134px;
}

.txtMarkDigi{
  width: 102px;
}

.txtDataAna{
  width: 98px;
}

.txtDesaFrontAvan{
  width: 212px;
}

.divImage__options{
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0 20px 20px 0;
  display: flex;
  gap: 30px;
  align-items: flex-start;
}

.divImage__options img{
  cursor: pointer;
}

.divImage__prox{
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0 20px 20px 0;
}

.divImage__addCar{
  filter: invert(100%);
}

@media(max-width: 831px){
  .programas__groupImages{
    flex-direction: column;
  }
}

@media(max-device-width: 500px){
  .programas{
    margin-top: 61px
  }

  .divImage__img {
    width: 100%;
    border-radius: 10px;
  }

  .divImage .divImage__fondo {    
    left: unset;
    width: 100%;
    height: auto;
  }
}

@media (max-device-width: 320px){
  .programas {
    margin-top: 10px;
  }
}
</style>