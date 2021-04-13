<template>
    <div class="misCompras">
        <Header />
        <div class="navbar"></div>
        <div class="carritoDeCompras container">
          <div class="bloqueCompras">
            <div class="bloqueCompras__retroceder">
              <router-link :to="`/`">
                <img class="arrowLeft" src="../assets/arrowLeft.png" alt="">
              </router-link>
              <p>Carrito de compras</p>
            </div>
            <div class="bloqueCompras__info">
              <div class="bloqueInfoCompra">
                <div class="bloqueInfoCompra__imgProduct">
                  <img src="../assets/imgProductCarritoCompras.png" alt="">
                </div>
                <div class="bloqueInfoCompra__detalleCompra">
                  <div class="nombreCostoProduct">
                    <p>Gestión de Envases, Empaques y Embalajes</p>
                    <p>S/ 269.00</p>
                  </div>
                  <div class="descuento">
                    <p>Dto. 25%</p>
                    <p> </p>
                  </div>
                  <div class="bloqueBtnEliminar">
                    <input type="button" value="Eliminar">
                  </div>
                </div>
              </div>
              <div class="bloqueInfoCompra">
                <div class="bloqueInfoCompra__imgProduct">
                  <img src="../assets/imgProductCarritoCompras.png" alt="">
                </div>
                <div class="bloqueInfoCompra__detalleCompra">
                  <div class="nombreCostoProduct">
                    <p>Gestión de Envases, Empaques y Embalajes</p>
                    <p>S/ 269.00</p>
                  </div>
                  <div class="descuento">
                    <p>Dto. 10%</p>
                    <p> </p>                    
                  </div>

                  <div class="bloqueBtnEliminar">
                    <input type="button" value="Eliminar">
                  </div>
                </div>
              </div>
              <div class="bloqueInfoCompra">
                <div class="bloqueInfoCompra__imgProduct">
                  <img src="../assets/imgProductCarritoCompras.png" alt="">
                </div>
                <div class="bloqueInfoCompra__detalleCompra">
                  <div class="nombreCostoProduct">
                    <p>Gestión de Envases, Empaques y Embalajes</p>
                    <p>S/ 269.00</p>
                  </div>
                  <div class="descuento">
                    <p>Dto. 40%</p>
                    <p>Regalo para: panda@gmail.com</p>                    
                  </div>

                  <div class="bloqueBtnEliminar">
                    <input type="button" value="Eliminar">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bloqueCuponDesc">
            <div class="bloqueCuponDesc__background">
              <div class="subtotal">
                <p>Sub total</p>
                <p>S/ 600.00</p>
              </div>
              <div class="codigoCupon">
                <img class="iconEnviar" src="../assets/iconSend.png">
                <input type="text" placeholder="Agrega un código de descuento">
              </div>
              <div class="bloqueBtnContinuar">
                <!-- <input type="button" value="Continuar"> -->
                <router-link :to="`/pasarela`">
                  <input type="button" value="Continuar">
                </router-link>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "Home",
  components: {
    Header,
  },
};
</script>

<style>
.misCompras{
  height: 100vh;
  background-color: #F8F8FA;
  display: flex;
  justify-content: center;
}

.carritoDeCompras{
  padding-top: 61px;
  display: flex;
  gap: 60px;
}

.bloqueCompras{
  width: 60%;
  padding-top: 36px;
}

.bloqueCompras__retroceder{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding-bottom: 36px;
}

.bloqueCompras__retroceder p{
  font-weight: 800;
  margin: 0;
  font-size: 20px;
}

.bloqueCompras__info{
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.bloqueInfoCompra{
  display: flex;
  align-items: center;
  gap: 20px;
}

.bloqueInfoCompra__detalleCompra{
  width: 100%;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  margin-top: -10px;
}

.nombreCostoProduct{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.descuento{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40px;
}

.descuento p:nth-child(2){
  font-weight: 100;
  color: #222222;
}

.descuento p, .bloqueBtnEliminar input{
  font-weight: 500;
}

.nombreCostoProduct p:nth-child(1), .descuento p, .regalo p{
  font-family: Roboto;
}

.bloqueBtnEliminar input{
  font-family: Poppins;
}

.nombreCostoProduct p:nth-child(1), .descuento p, .bloqueBtnEliminar input{
  font-weight: bold;
}

.nombreCostoProduct p:nth-child(2){
  font-weight: bold;
}

.descuento p, .bloqueBtnEliminar input{
  color: #5640FF
}

.nombreCostoProduct p, .descuento p, .regalo p{
  margin: 0;
}

.descuento p{
  font-size: 14px;
}

.bloqueBtnEliminar{
  display: flex;
}

.bloqueBtnEliminar input{
  font-size: 12px;
  border: none;
  background: none;
  text-decoration: underline;
  padding: 0;
  cursor: pointer;
}

.bloqueCuponDesc{
  width: 40%;
  padding-top: 36px;
}

.bloqueCuponDesc__background{
  background-color: white;
  padding: 50px;
  margin-top: 64px;
  box-shadow: 2px 2px 10px rgb(55 84 170 / 10%);
  border-radius: 5px;
}

.subtotal{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.subtotal p{
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  color: #5640FF;
}

.codigoCupon{
  position: relative;
  margin-bottom: 35px;
  display: flex;
  align-items: center;
}

.iconEnviar{
  color: #e8e8e8;
  font-size: 15px;
  position: absolute;
  right: 25px;  
}

.codigoCupon input{
  width: -webkit-fill-available;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #C4C4C4;
  padding: 0 20px;
}

.codigoCupon input::placeholder{
  color: #C4C4C4; 
}

.bloqueBtnContinuar input{
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: #5640FF;
  color: white;
  font-weight: bold;
  font-size: 14px;
  font-family: Poppins;
  cursor: pointer;
}


@media(max-width: 1200px){
  .carritoDeCompras{
    flex-direction: column;
  }
  .bloqueCompras{
    width: 100%;
  }
  .bloqueCuponDesc{
    width: 100%;
  }
}

@media(max-width: 768px){
  .bloqueInfoCompra__detalleCompra{
    position: relative;
  }

  .nombreCostoProduct p:nth-child(1){
    font-size: 12px;
  }

  .nombreCostoProduct p:nth-child(2) {
    position: absolute;
    bottom: 0;
    right: 0px;
    font-size: 12px;
  }

  .descuento p {
    font-size: 12px;
  }

  .bloqueBtnEliminar input{
    font-size: 12px;
  }
}

@media(max-device-width: 500px){
  .header__nav{
    margin-top: -61px;
  }

  .carritoDeCompras{
    padding-right: 0;
    padding-left: 0;
  }

  .bloqueCompras__retroceder{
    position: fixed;
    padding-top: 15px;
    top: 0;
    z-index: 40;
  }

  .arrowLeft{
    content: url('../assets/arrowLeftWhite.png');
  }

  .bloqueCompras__retroceder p{
    color: white;
  }

  .bloqueCompras{
    padding-top: 50px;
  }

  .bloqueInfoCompra__detalleCompra{
    margin-top: 0px;
  }
  .nombreCostoProduct p:nth-child(2){
    bottom: 10px;
  }

  .bloqueCuponDesc__background{
    width: -webkit-fill-available;
    position: absolute;
    left: 0;
    padding: 50px 20px;
    top: 490px;
    box-shadow: none;
  }
}
</style>