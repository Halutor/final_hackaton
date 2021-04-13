<template>
    <div class="header__nav container">
      <img src="../assets/logoPacha.svg" alt="" />


      <div id="mySidenav" class="sidenav" >
        <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav">&times;</a>
        <a id="logueado" href="Login">Login</a>
        <a href="MisCompras">Mis Compras</a>
        <a href="">Home</a>
        <a id="deslogueado" href="#" @click="logout" >Logout</a>
      </div>
      <span style="font-size:20px;cursor:pointer" v-on:click="openNav">&#9776;</span>
      <router-view/>
    </div>
    
</template>

<script>
import firebase from 'firebase';



export default {

  data() {
    return{
    newLogout: {
       error: ''
      }
             
    }
  },
  methods:{
    openNav() {
      document.getElementById("mySidenav").style.width = "250px";

      firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        document.getElementById("logueado").style.display = "none";
        document.getElementById("deslogueado").style.display = "flex";
      } else {
        document.getElementById("logueado").style.display = "flex";
        document.getElementById("deslogueado").style.display = "none";
      }
    });

    },

    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    },
    logout() {
      this.newLogout.error='';
      
        //Enviamos formulario
      
      firebase.auth().signOut().then(() => {
        this.newLogout.error = 'Cerró Sesión';
        Swal.fire(`${this.newLogout.error}`); 

      }).catch(err => {
        // this.newLogin.error = err.message; 
        // Swal.fire(`${this.newLogin.error}`);
      })

    
    }
  }
};



</script>

<style scoped>
.header__nav {
  position: fixed;
  display: flex;
  justify-content: space-between;
  height: 61px;
  width: 100%;
  z-index: 100;
  align-items: center;
  padding: 0;
}

.header__nav span{
  color: white;
}


.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background: url('../assets/sidebar.jpg');
  background-size: auto 100vh;
  background-position: top;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: flex;
  justify-content: center;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
  background-color: rgba(86,64,255,.5);
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 36px;
  padding: 0 16px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}

@media(max-device-width: 500px){
  .header__nav{
    width: -webkit-fill-available;
  }
}

@media(max-device-width: 320px){
  .header__nav{
    width: -webkit-fill-available;
  }
}
</style>