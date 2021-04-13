<template>
  <div class="home">
    <Header />
    <img class="fondoPagHome" src="../assets/fondoPagHome.jpeg" alt="">
    <div class="navbar"></div>
    <div class="escuela container">
      <main class="main">
        <FraseTop />
        <div class="respaldo">
          <p class="respaldo__title">Con el respaldo de:</p>
          <div class="respaldo__img">
            <img src="../assets/intercorp.svg" alt="" />
            <img src="../assets/idat.svg" alt="" />
            <img src="../assets/zegel.svg" alt="" />
            <img src="../assets/arrowhead-down.png" alt="" />
          </div>
        </div>
        <Programas />
        <div class="bloqueWhite">
          <div class="bloqueInformativo">
            <div class="bloqueInformativo__content">
              <img class="imgGirl" src="../assets/estudiante.svg" alt=""/>
              <div class="textInformativo">
                <p class="textInformativo__title">
                  Sé parte de la comunidad
                </p>
                <p>
                  Programas semi-presenciales para el desarrollo de habilidades de
                  programación a lo largo de todo el Stack tecnológico.
                  <br />
                  <br />
                  Al finalizar sabrás cómo crear una página web y desarrollar la
                  lógica detrás del funcionamiento de una aplicación, así como
                  formar parte de una gran comunidad de desarrolladores.
                </p>
              </div>
            </div>
          </div>
          <Beneficios />
        </div>
      </main>
      <FormCelular />
    </div>
    <footer class="footer">
      <div class="footer__background">
        <div class="footerContent container">
          <p class="footerContent__title">
            Con el respaldo de:
          </p>
          <div class="footerContent__img">
            <img src="../assets/intercorpWhite.svg" alt="" />
            <img src="../assets/idatWhite.svg" alt="" />
            <img src="../assets/zegelWhite.svg" alt="" />
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import FraseTop from "@/components/FraseTop.vue";
import Programas from "@/components/Programas.vue";
import Beneficios from "@/components/Beneficios.vue";
import FormCelular from "@/components/FormCelular.vue";

export default {
  name: "Home",
  components: {
    Header,
    FraseTop,
    Programas,
    Beneficios,
    FormCelular,
  },
};
</script>

<style>
:focus { 
    outline-color: transparent; 
    outline-style: none;
}

.home{
  display: flex;
  justify-content: center;
  background: linear-gradient(#F2F3F5 70%, white 30%);
  position: relative;
}

h3 {
  color: black;
}

h5 {
  color: black;
}

p{
  margin: 0;
}

.fondoPagHome{
  width: 100%;
  height: 500px;
  position: absolute;
  left: 0;
  z-index: 40;
  object-fit: cover;
}

.container,
.container-fluid,
.container-xxl,
.container-xl,
.container-lg,
.container-md,
.container-sm {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container-sm, .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container-md, .container-sm, .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container-lg, .container-md, .container-sm, .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container-xl, .container-lg, .container-md, .container-sm, .container {
    max-width: 1186px;
  }
}
@media (min-width: 1400px) {
  .container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container {
    max-width: 1320px;
  }
}


.escuela{
  display: flex; 
  justify-content: space-between;
  gap: 86px;
}

.main{
  display: flex; 
  flex-direction: column; 
  width: 100%;
}

.respaldo{
  margin-top: 128px;
}

.respaldo__title{
  font-family: sans-serif;
  font-size: 11px;
  text-align: start;
  font-weight: bold;
  color: #000425;
  margin-bottom: 3px;
}

.respaldo__img{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 30.5px;
}

.respaldo__img img:nth-child(4){
  margin-left: 258.5px;
}

.bloqueInformativo{
  height: 282px;
  margin-top: 119px;
}

.bloqueInformativo__content{
  background: linear-gradient(#3015FD 0%, rgba(48,21,223,0.8));
  display: flex;
  height: 282px;
  position: absolute;
  left: 0px;
}

.imgGirl{
  height: max-content;
  position: relative;
  top: -100px;
  left: -115px;
}

.textInformativo{
  display: flex;
  flex-direction: column;
  text-align: start;
  color: white;
  padding: 0 32% 0 0;
  position: relative;
  left: -110px;
}

.textInformativo__title{
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 22px;
  margin-top: 60px;
}

.textInformativo p:nth-child(2){
  font-family: Roboto;
  font-size: 14px;
  line-height: 1.2;
}

.navbar {
  position: fixed;
  width: 100%;
  z-index: 20;
  background: #000425;
  height: 61px;
}
.navbar.sticky {
  background: #1b1b1b;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
}

.footer{
  position: absolute;
  height: 102px;
  width: 100%;
  bottom: 0;
}

.footer__background{
  width: 100%;
  background: rgb(0, 4, 37);
  bottom: 0;
  position: sticky;  
  height: 100%;
}

.footerContent{
  padding: 20px 0;
}

.footerContent__title{
  text-align: start;
  color: white;
  font-family: sans-serif;
  font-size: 11px;
  font-weight: 600;
}

.footerContent__img{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 31px;
} 

@media(max-width: 831px){
  .groupImages{
    flex-direction: column;
  }

  .bloqueInformativo {
    margin-top: 100px;
    height: 100%;
  }

  .bloqueInformativo__content {
    width: calc(100vw - 17px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .imgGirl{
    top: -100px;
    left: 0;
  }
  .textInformativo {
    padding: 0 50px 0;
    margin-top: -100px;
  }
}

@media(max-width: 628px){
  .container {
    max-width: 100%;
    margin-right: 20px;
    margin-left: 20px;
    padding-top: 0;
  }
}

@media(max-device-width: 500px){
  .header__nav{
    margin-right: 10px;
    margin-left: 10px;
  }

  .escuela{
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0 10px;
    gap: 0;
  }

  .respaldo{
    margin-top: 70px;
  }

  .respaldo__img img:nth-child(4){
    display: none;
  }

  .programas__groupImages{
    gap: 15px;
    margin-bottom: 15px;
  }

  .divImage{
    margin-bottom: 0;
  }

  .imgGirl{
    width: 241px;
    height: 311px;
  }

  .textInformativo__title{
    font-size: 16px;
    margin-top: 40px;
  }

  .bloqueInformativo{
    height: 516px;
  }

  .beneficios{
    margin-top: 40px;
    margin-bottom: 60px;
  }

  .beneficios__title{
    margin-bottom: 26px;
  }

  .beneficios__section{
    gap: 20px;
  }

  .footer{
    margin-top: 100px;
    height: 80px;
  }

  .footerContent{
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    margin: 0;
    padding: 0 10px;
    width: auto;
  }

  .footerContent__img{
    width: min-content;
  }

  .footerContent__title{
    width: fit-content;
  }

  .textInformativo{
    left: -20px;
    padding: 0;
  }

  .textInformativo p:nth-child(2){
    width: 323px;
  }

  .navbar{
    width: 100%;
  }
  .bloqueInformativo__content {
    width: 100vw;
    height: 516px;
  } 
  .fondoPagHome{
    content: url('../assets/fondoPagHomeMovil.png');
    height: auto;
  }
}

@media (max-device-width: 320px){
  .respaldo{
    margin-top: 0;
  }
  .imgGirl {
      width: -webkit-fill-available;
  }
  .footer__background{
    bottom: 0;
  }
}

</style>
