<template>
  <div class="login">
    <div class="loginLeft">
      <div class="header__nav container">
        <img src="../assets/logoPacha.svg" alt="" />
      </div>
      <div class="frasetop">
        <div class="frasetop__title">
          <p>¡Explota todo tu potencial tecnológico!</p>
        </div>
        <div class="frasetop__text">
          <p>Con nuestros programas de especialización</p>
        </div>
      </div>
      <div class="respaldoLogin">
        <div class="container">
          <p class="footerContent__title">Con el respaldo de:</p>
          <div class="footerContent__img">
            <img src="../assets/intercorpWhite.svg" alt="" />
            <img src="../assets/idatWhite.svg" alt="" />
            <img src="../assets/zegelWhite.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="loginRight tabs">
      <div class="loginRight__top">
        <div class="iniciarSesion">
          <input type="radio" name="tabs" id="tab1" checked />
          <label class="lblIniSesion"
            for="tab1"
            role="tab"
            aria-selected="true"
            aria-controls="panel1"
            tabindex="0"
            >Iniciar Sesión</label
          >
          <div
            class="loginRight__bottom tab-content"
            id="tab-content1"
            role="tabpanel"
            aria-labelledby="description"
            aria-hidden="false"
          >
            <form action="" class="formLogin" @submit.prevent="addLogin">
              <h3>Por favor ingrese su información personal</h3>
              <div class="form">
                <input class="txt" type="email" required v-model="newLogin.correo">
                <label class="lbl-nombre">
                  <span class="text-nomb">Correo electrónico</span>
                </label>
              </div>
              <div class="form bloquePassword">
                <input id="passwordIniSesion" class="txt" type="password" required v-model="newLogin.contrasena"/>
                <label class="lbl-nombre">
                  <span class="text-nomb">Contraseña</span>
                </label>
                <img v-on:click="trad1" class="eye" src="../assets/eye.png" alt="">
              </div>
              <input class="txt txtHidden" type="text"/>
              <input class="txt txtHidden" type="text"/>
              <div class="bloquechekbox txtHidden">
                <input type="checkbox" />
                <label class="bloquechekbox__label">Acepto <strong>terminos y condiciones.</strong></label
                >
              </div>
              <div>
                <input
                  class="btnIngresar"
                  type="submit"
                  value="Ingresar"
                />
              </div>
              <a href="#">¿Olvidaste tu contraseña?</a>
            </form>
          </div>
        </div>
        <div class="registrarse">
          <input type="radio" name="tabs" id="tab2" />
          <label class="lblRegistrarse" for="tab2" role="tab" aria-selected="false" aria-controls="panel2" tabindex="0">Registrarse</label>
          <div class="loginRight__bottom tab-content" id="tab-content2" role="tabpanel" aria-labelledby="specification" aria-hidden="true">
            <form action="" class="formLoginReg" @submit.prevent="addRegistro">
              <h3>Por favor ingrese su información personal</h3>
              <div class="form">
                <input class="txt" type="text" required v-model="newRegistro.nombreApellido"/>
                <label class="lbl-nombre">
                  <span class="text-nomb">Nombres y Apellidos</span>
                </label>
              </div>
              <div class="form">
                <input class="txt" type="email" required v-model="newRegistro.correo"/>
                <label class="lbl-nombre">
                  <span class="text-nomb">Correo electrónico</span>
                </label>
              </div>    
              <div class="form bloquePassword">
                <input id="passwordReg1" class="txt" type="password" required v-model="newRegistro.contrasena"/>
                <label class="lbl-nombre">
                  <span class="text-nomb">Contraseña</span>
                </label>
                <img v-on:click="trad2" class="eye" src="../assets/eye.png" alt="">
              </div>             
              <div class="form bloquePassword">
                <input id="passwordReg2" class="txt" type="password" required v-model="newRegistro.repcontrasena"/>
                <label class="lbl-nombre">
                  <span class="text-nomb">Repite contraseña</span>
                </label>
                <img v-on:click="trad3" class="eye" src="../assets/eye.png" alt="">
              </div> 
              <div class="bloquechekbox">
                <input type="checkbox" name="politicas" id="politicas" required/>
                <label class="bloquechekbox__label" for="politicas"
                  >Acepto &nbsp <u><strong> Terminos y Condiciones</strong></u></label
                >
              </div>
              <div>
                <input
                  class="btnRegistrarse"
                  type="submit"
                  value="Registrarse"
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <br style="clear: both" />
    </div>
  </div>
</template>

<script>
import FraseTop from "@/components/FraseTop.vue";
import firebase from 'firebase';


export default {
  name: "Login",
  components: {
    FraseTop,
  },
  data() {
    return{
    newRegistro: {
        nombreApellido: '',
        correo: '',
        contrasena: '',
        error: ''
      },
      newLogin: {
        correo: '',
        contrasena: '',
        error: ''
      }  
      
    }
  },
  
  methods:{
    trad1: function (event) {
      var tipo = document.getElementById("passwordIniSesion");
      if(tipo.type == "password"){
          tipo.type = "text";
      }else{
          tipo.type = "password";
      }
    },
    trad2: function (event) {
      var tipo = document.getElementById("passwordReg1");
      if(tipo.type == "password"){
          tipo.type = "text";
      }else{
          tipo.type = "password";
      }
    },
    trad3: function (event) {
      var tipo = document.getElementById("passwordReg2");
      if(tipo.type == "password"){
          tipo.type = "text";
      }else{
          tipo.type = "password";
      }
    },
    addRegistro() {
      this.newRegistro.error='';
      if (this.newRegistro.nombreApellido && this.newRegistro.correo && this.newRegistro.contrasena && this.newRegistro.repcontrasena) {
        //Enviamos formulario
      firebase.auth().createUserWithEmailAndPassword(this.newRegistro.correo, this.newRegistro.contrasena)
      .then(user => {
        this.newRegistro.nombreApellido='';
        this.newRegistro.correo='';
        this.newRegistro.contrasena='';
        this.newRegistro.repcontrasena='';

        this.newRegistro.error = 'Se registró de forma exitosa';
        Swal.fire(`${this.newRegistro.error}`);  
        this.$router.push('/')

      }).catch(err => {
        this.newRegistro.error = err.message; 
        Swal.fire(`${this.newRegistro.error}`);  
      })

        
      } else {
        this.newRegistro.error='Todos los campos son requeridos';
        Swal.fire(`${this.newRegistro.error}`);  
      }
    
    },

    addLogin() {
      this.newLogin.error='';
      if (this.newLogin.correo && this.newLogin.contrasena) {
        //Enviamos formulario
      firebase.auth().signInWithEmailAndPassword(this.newLogin.correo, this.newLogin.contrasena)

      .then(user => {
        this.newLogin.correo='';
        this.newLogin.contrasena='';
        
        this.newLogin.error = 'Inicio Exitoso';
        
        Swal.fire(`${this.newLogin.error}`);  
        this.$router.push('/')
        

      }).catch(err => {
        this.newLogin.error = err.message; 
        Swal.fire(`${this.newLogin.error}`);  
      })

        
      } else {
        this.newLogin.error='Todos los campos son requeridos';
        Swal.fire(`${this.newLogin.error}`);  
      }
    
    }
  }
};
</script>

<style scoped>
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
		transform: translateY(-54%);
		font-size: 10px;
		color: #C4C4C4;
    font-family: Roboto;
	}
	@media only screen and (min-width:280px) and (max-width:768px){
    .form {
      height: 52px;
    }
  }



@import url("https://fonts.googleapis.com/css?family=Lato");
.tabs {
  width: 650px;
  float: none;
  list-style: none;
  position: relative;
  text-align: left;
}
.tabs li {
  float: left;
  display: block;
}
.tabs input[type="radio"] {
  position: absolute;
  top: 0;
  left: -9999px;
}
.lblIniSesion, .lblRegistrarse {
  height: 60px;
  display: flex;
  justify-content: center;  
  align-items: center;
  border-radius: 0;
  font-size: 14px;
  font-weight: normal;
  cursor: pointer;
  position: relative;
  -moz-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  font-weight: bold;
  color: #222222;
}

.tabs .tab-content {
  z-index: 2;
  display: none;
  overflow: hidden;

  font-size: 17px;
  line-height: 25px;
  padding: 13px 35px 20px; 
  position: absolute;
  top: 60px;
  left: 0;
  width: -webkit-fill-available;
}
.tabs [id^="tab"]:checked + label {
  top: 0;
  
  color: #222222;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 -5px 0 #222222;
}
.tabs [id^="tab"]:checked ~ [id^="tab-content"] {
  display: flex;
}

p.link {
  clear: both;
  margin: 380px 0 0 15px;
}
p.link a {
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  color: #fff;
  padding: 5px 10px;
  margin: 0 5px;
  background-color: #612e76;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}
p.link a:hover {
  background-color: #5640ff;
}

/*------------------------------------ */

.login {
  background-image: url("../assets/fondoPagLogin.jpg");
  background-size: 100% 100%;
  height: 100vh;
  z-index: 3;
  display: flex;
}

.respaldoLogin {
  padding-bottom: 30px;
  margin-left: 85px;
  margin-top: 163px;
}

.loginLeft {
  width: 70%;
  display: flex;
  flex-direction: column;
}

.header__nav{
  display: flex;
  padding-top: 24px;
  margin-left: 85px;
}

.frasetop {  
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 76px;
  margin-top: 202px;  
}

.frasetop__title {
  text-align: end;
  font-size: 26px;
  font-weight: bold;
  color: white;
  width: 50%;
  margin-bottom: 20px;
}

.frasetop__text {
  text-align: end;
  color: white;
  font-weight: 500;
  width: 203px;
  font-size: 16px;
}

.loginRight {
  background: white;
  width: 30%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  z-index: 10;
}

.loginRight__top {
  display: flex;
  justify-content: space-evenly;
  box-shadow: 5px 0px 3px 0px grey;
  padding: 0 37px;
  height: 60px;
}

.iniciarSesion {
  width: 50%;
  transition: 0.5s ease;  
}

.registrarse {
  width: 50%;
  transition: 0.5s ease;  
}

.loginRight__bottom {
  display: flex;
  justify-content: center;
  align-items: center;
}

.formLogin, .formLoginReg {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

.formInput{
  width: 100%;
  height: 50px;
  max-width: 400px;
  position: relative;
  overflow: hidden;
}

.formLogin h3, .formLoginReg h3{
  text-align: center;
}


.iniciarSesion .formLogin a, .formLoginReg a{
  display: flex;
  justify-content: center;
  margin-top: -20px;
  font-size: 12px;
  font-weight: bold;
  color: #5640FF;
}

::-webkit-input-placeholder {
  color: #c4c4c4;
  font-size: 12px;
  font-family: Roboto;
  font-weight: 100;
}

.tab-content > .active {
  display: block;
}
.tab-content > .tab-pane {
  display: none;
}
.fade.show {
  opacity: 1;
}
.fade {
  opacity: 0;
  transition: opacity 0.15s linear;
}

.txt {
  padding: 0 10px;
  font-size: 12px;
  font-family: Roboto;
  font-weight: bold;
  height: 48px;
  border-radius: 5px;
  border: 1px solid #808080ad;
}

.txtHidden{
  visibility: hidden;
}

.bloquePassword{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
}

.bloquePassword input{
  width: 100%;
}
.eye{
  width: min-content;
  position: absolute;
  right: 16px;
  cursor: pointer;
}

.bloquechekbox{
  position: relative;
}

.bloquechekbox__label{
  font-family: Montserrat;
  margin-bottom: 22px;
  display: flex;
  align-items: center;
  font-size: 12px;
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
  width: 20px;
  height: 20px;
  border: 1px double #222222;
  cursor: pointer;
  vertical-align: top;
  display: inline-block;
  margin-right: 10px;
  border-radius: 3px;  
}

input[type="checkbox"]:not(old):checked + label:before {
  box-shadow: inset 0px 0px 0px 3.5px white;
  background: #222222;
}

.btnIngresar, .btnRegistrarse {
  height: 50px;
  width: 100%;  
  font-family: Poppins;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background: #5640ff;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: .5s background ease;
  margin-bottom: 19px;
}

.btnIngresar:hover, .btnRegistrarse:hover {
  background: #3e25fc;
}

@media (max-width: 1163px){
  .loginLeft{
    width: 60%;
  }
  .loginRight{
    width: 40%;
  }
  .frasetop__title{
    width: 70%;
  }
  .frasetop__text{
    width: 50%;
  }
}

@media (max-width: 873px){
  .loginLeft{
    width: 50%;
  }
  .loginRight{
    width: 50%;
  }
  .frasetop__title{
    width: 100%;    
    text-align: center;
  }
  .frasetop__text{
    width: 100%;
    text-align: center;
  }
  .header__nav{
    margin: 0 auto;
  }
  .respaldoLogin .container{
    margin: 0 auto;
  }
  .footerContent__img{
    justify-content: space-between;
  }
}

@media (max-width: 698px){
  .loginLeft{
    width: 0;
  }
  .loginRight{
    width: 100%;
  }
}

@media (max-width: 500px){
  .loginLeft {    
    display: none;
  } 
  .tabs .tab-content{
    top: auto; 
    padding: 0;
  }
  .formLogin, .formLoginReg {
    gap: 15px;
    padding: 20px;
  }
  .txt {
    height: 50px;
  }
  .iniciarSesion .formLogin a, .formLoginReg a {
    margin-top: 0;
  }
  .btnIngresar, .btnRegistrarse {
    padding: 15px;
  }
  .lblIniSesion, .lblRegistrarse {
    font-size: 15px;
  }
  .bloquechekbox__label{
    font-size: 15px;
  }
}
</style>