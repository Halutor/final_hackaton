<template>
  <aside class="aside">
    <div class="aside__fondocelu">
      <div class="bloqueform">
        <p class="bloqueform__titleForm">
          Postula y obtén un 10% de descuento en el programa
        </p>
        <form class="bloqueform__form" action="" @submit.prevent="addWebsiteDescuento">
          <div class="form">
            <input class="txt" type="text" required v-model="newWebsiteDescuento.nombre">
            <label class="lbl-nombre">
              <span class="text-nomb">NOMBRE</span>
            </label>
          </div>
          <!-- <input class="txt" type="text" placeholder="NOMBRE" /> -->
          <div class="form">
            <input class="txt" type="text" required v-model="newWebsiteDescuento.celular">
            <label class="lbl-nombre">
              <span class="text-nomb">CELULAR</span>
            </label>
          </div>
          <!-- <input class="txt" type="text" placeholder="CELULAR" /> -->
          <div class="form">
            <input class="txt" type="text" required v-model="newWebsiteDescuento.correo">
            <label class="lbl-nombre">
              <span class="text-nomb">CORREO ELECTRÓNICO</span>
            </label>
          </div>
          <!-- <input class="txt" type="text" placeholder="CORREO ELECTRÓNICO" /> -->
          <div class="form">
            <input class="txt" type="text" required v-model="newWebsiteDescuento.programa">
            <label class="lbl-nombre">
              <span class="text-nomb">PROGRAMA</span>
            </label>
          </div>
          <!-- <input class="txt" type="text" placeholder="PROGRAMA" /> -->
          <div class="bloquechekbox">
            <input type="checkbox" name="politicas" id="politicas" />
            <label class="bloquechekbox__label" for="politicas">Acepto las Políticas de privacidad.</label>
          </div>
          <input class="btnForm" type="submit" value="Quiero Postular"/>
        </form>
      </div>
    </div>
  </aside>
</template>

<script>

import Firebase from 'firebase';
import config from '../config.js';


let app = Firebase.initializeApp(config);

let db = app.database();
let websitesRefDescuento = db.ref('websiteDescuento');

export default {
  
  name: 'App',
  firebase: {
    websitesDescuento: websitesRefDescuento
  },
  data() {
    return {
      newWebsiteDescuento: {
        nombre: '',
        celular: '',
        correo: '',
        programa:'',
        porcentaje: 10,
        cupon: 'AAAA0001'
      }
    }
  },
  methods: {
    addWebsiteDescuento() {
      // console.log(this.newWebsite);
      websitesRefDescuento.push(this.newWebsiteDescuento);
      
      Swal.fire(`<h2>${this.newWebsiteDescuento.nombre} ganaste 1 cupón de Dscto</h2>
    <p>Usa este código en tu próxima compra: ${this.newWebsiteDescuento.cupon}</p>`);
      this.newWebsiteDescuento.nombre='';
      this.newWebsiteDescuento.celular='';
      this.newWebsiteDescuento.correo='';
      this.newWebsiteDescuento.programa='';

      

      this.$router.push('/login')

    }
  }
};
</script>

<style scoped>
.aside{
  position: sticky; 
  top: 61px; 
  z-index: 90; 
  width: 100%;
  height: 608px
}

.aside__fondocelu{
    background: url('../assets/fondoCelular.svg');
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: bottom;
    height: 100%;
    display: flex;
    justify-content: center;
}

.bloqueform{
    width: 216px;
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    gap: 20px; 
}

.bloqueform__titleForm{
  color: #000425;
  font-size: 16px;
  margin: 0;
  padding: 0;
  text-align: start;
  font-weight: 500;
}

.bloqueform__form{
  display: flex; 
  flex-direction: column; 
  gap: 15px
}


.form{
		width: 100%;
		height: 50px;
		max-width: 400px;
		position: relative;
		overflow: hidden;
	}
	.form input{
		width: -webkit-fill-available;
		background: none;
		color: #222222;
		outline: 0px;
    padding-left: 14px;
	}
	.form .lbl-nombre{
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;		
    display: flex;
    align-items: center;
    font-size: 12px;
	}
	.text-nomb{
		position: absolute;
		left: 14px;
		transition: all 0.3s ease;
		color: #C4C4C4;
    font-family: Roboto;
	}
  .form input:focus + .lbl-nombre .text-nomb, .form input:valid + .lbl-nombre .text-nomb{
		transform: translateY(-115%);
		font-size: 10px;
		color: #C4C4C4;
    font-family: Roboto;
	}
	@media only screen and (min-width:280px) and (max-width:768px){
    .form {
      height: 52px;
    }
  }

.txt {
  height: 48px;
  border-radius: 5px;
  border: 1px solid #808080ad;
  padding: 0 10px;
  font-size: 12px;
}

.bloquechekbox{
  display: flex; 
  gap: 10px; 
  font-weight: bold;
  margin-top: 5px;
}

.bloquechekbox__label{
  color: #000425;
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  font-family: Roboto;
}

.btnForm{
  cursor: pointer;
  padding: 0px 52px;
  background: #5640ff;
  color: white;
  border-radius: 5px;
  margin-top: 23px; 
  border: none;
  font-size: 14px;
  font-weight: bold;
  transition: .5s background ease;
  height: 50px;
}

.btnForm:hover{
  background: #3e25fc;
}


input[type="checkbox"]:not(old) {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
}

input[type="checkbox"]:not(old) + label {
  cursor: pointer;
}

input[type="checkbox"]:not(old) + label:before {
  content: "";
  width: 15px;
  height: 15px;
  border: 2px double black;
  cursor: pointer;
  vertical-align: top;
  display: inline-block;
  margin-right: 10px;
  border-radius: 3px;
}

input[type="checkbox"]:not(old):checked + label:before {
  box-shadow: inset 0 0 1px 2px white;
  background: #5640ff;
}

@media(max-device-width: 500px){
  .aside__fondocelu {
    background: none;
    height: min-content;
  }
  .bloqueform{
    width: 100%;
  }
}
</style>