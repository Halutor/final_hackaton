<template>
  <div class="pasarela">
    <Header />
    <div class="navbar"></div>
    <div class="pasarelaDePagos container">
      <div class="bloqueMetodoPagos">
        <div class="bloqueMetodoPagos__retroceder">
          <router-link :to="`/misCompras`">
            <img class="arrowLeft" src="../assets/arrowLeft.png" alt="" />
          </router-link>
          <p>Pasarela de Pagos</p>
        </div>
        <div class="bloqueMetodoPagos__info">
            <div class="selectMetodoPago">
                <div class="selectMetodoPago__title">
                    <p>Selecciona tu método de pago</p>
                </div>
                <div class="selectMetodoPago__options">
                    <input type="button" value="Tarjeta de crédito" disabled>
                    <input type="button" value="Tarjeta de débito" disabled>
                    <input class="btnPaypal" type="button" value="PayPal">
                </div>    
            </div>
            <div class="datosMetodoPago"></div>
            <div class="bloqueFinalizarCompra">
              <router-link :to="`/consolidado`">
                <input type="button" value="Finalizar compra">
              </router-link>
            </div>
        </div>
      </div>
      <div class="bloquePrecioFinal">
        <div class="bloquePrecioFinal__background">
          <div class="bloqueCompras__info">
            <div class="bloqueInfoCompra">
              <div class="bloqueInfoCompra__imgProduct">
                <img src="../assets/imgProductCarritoCompras.png" alt="" />
              </div>
              <div class="bloqueInfoCompra__detalleCompra">
                <div class="nombreCostoProduct">
                  <p>Gestión de Envases, Empaques y Embalajes</p>
                  <p>S/ 269.00</p>
                </div>
                <div class="descuento">
                  <p>Dto. 25%</p>
                  <p></p>
                </div>
                <div class="bloqueBtnEliminar">
                  <input type="button" value="Eliminar" />
                </div>
              </div>
            </div>
            <div class="bloqueInfoCompra">
              <div class="bloqueInfoCompra__imgProduct">
                <img src="../assets/imgProductCarritoCompras.png" alt="" />
              </div>
              <div class="bloqueInfoCompra__detalleCompra">
                <div class="nombreCostoProduct">
                  <p>Gestión de Envases, Empaques y Embalajes</p>
                  <p>S/ 269.00</p>
                </div>
                <div class="descuento">
                  <p>Dto. 10%</p>
                  <p></p>
                </div>

                <div class="bloqueBtnEliminar">
                  <input type="button" value="Eliminar" />
                </div>
              </div>
            </div>
            <div class="bloqueInfoCompra">
              <div class="bloqueInfoCompra__imgProduct">
                <img src="../assets/imgProductCarritoCompras.png" alt="" />
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
                  <input type="button" value="Eliminar" />
                </div>
              </div>
            </div>
          </div>
          <div class="codigoCupon">
            <img class="iconEnviar" src="../assets/iconSend.png" />
            <input type="text" placeholder="Agrega un código de descuento" />
          </div>
          <div class="precioFinal">
            <p>Precio final</p>
            <p>S/ 600.00</p>
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
body{
  height: 100%;
}

#app {
  height: 100%;
}

.pasarela {
  height: 100%;
  background-color: #f8f8fa;
  display: flex;
  justify-content: center;
}

.pasarelaDePagos {
  padding-top: 61px;
  display: flex;
  gap: 60px;
}

.bloqueMetodoPagos {
  width: 60%;
  padding-top: 36px;
}

.bloqueMetodoPagos__retroceder {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding-bottom: 36px;
}

.bloqueMetodoPagos__retroceder p {
  font-weight: 800;
  margin: 0;
  font-size: 20px;
}

.bloqueMetodoPagos__info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.selectMetodoPago__title{
  padding-bottom: 20px;
}

.selectMetodoPago__title p{
  font-weight: bold;
  margin: 0;
}

.selectMetodoPago__options{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
}

.selectMetodoPago__options input{
  background: #EFEFEF;
  border: none;
  width: 227px;
  border-radius: 5px;
}

.btnPaypal{
  background: #EFEFEF;
  border-radius: 2px;
  cursor: pointer;
  padding: 3px 23px;
  transition: background  .3s, color  .3s;
  font-weight: bold;
  width: 227px; 
  height: 50px
}

.btnPaypal:hover{
  background: #5640FF;
  color: white;
}

.bloquePrecioFinal {
  width: 40%;
  padding-top: 36px;
}

.bloquePrecioFinal__background {
  background-color: white;
  padding: 50px;
  box-shadow: 2px 2px 10px rgb(55 84 170 / 10%);
  border-radius: 5px;
}

/* ------------------------------------------------------ */

.bloqueCompras__info{
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 30px;
}

.bloqueInfoCompra{
  display: flex;
  align-items: center;
  gap: 20px;
  height: 100px;
}

.bloqueInfoCompra__detalleCompra{
  width: 100%;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  position: relative;
  gap: 5px;
}

.datosMetodoPago{
  height: 512px;
}

.bloqueFinalizarCompra{
  display: flex;
  justify-content: flex-end;
  margin-bottom: 36px;
}

.bloqueFinalizarCompra input{
  background: #5640FF;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  padding: 3px 23px;
  transition: background .3s;
  color: white;
  font-weight: bold;
  font-family: Poppins;
  font-size: 14px;
  width: 330px; 
  height: 50px
}

.bloqueFinalizarCompra input:hover{
  background: #3e25fc;
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

.nombreCostoProduct p:nth-child(1), .descuento p, .bloqueBtnEliminar input{
  font-weight: bold;
}

.nombreCostoProduct p:nth-child(1) {
  font-size: 12px;
}

.nombreCostoProduct p:nth-child(2){
  position: absolute;
  bottom: 10px;
  right: 0px;
  font-size: 12px;
  font-weight: bold;
}

.descuento p, .bloqueBtnEliminar input{
  color: #5640FF
}

.nombreCostoProduct p, .descuento p, .regalo p{
  margin: 0;
}

.descuento p{
  font-size: 12px;
}

.bloqueBtnEliminar{
  display: flex;
}

.bloqueBtnEliminar input{
  font-family: Poppins;
  font-size: 12px;
  border: none;
  background: none;
  text-decoration: underline;
  padding: 0;
  cursor: pointer;
  font-size: 12px;
}

/* -------------------------------------------------- */

.precioFinal {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
}

.precioFinal p {
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  color: #5640ff;
}

.codigoCupon {
  position: relative;
  padding-bottom: 30px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #C4C4C4;
}

.iconEnviar {
  color: #e8e8e8;
  font-size: 15px;
  position: absolute;
  right: 25px;
}

.codigoCupon input {
  width: -webkit-fill-available;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  padding: 0 20px;
}

.codigoCupon input::placeholder {
  color: #c4c4c4;
}


@media (min-width: 1400px) {
  body{
    height: 100vh;
  }
}

@media (max-width: 1200px) {
  .pasarelaDePagos {
    flex-direction: column-reverse;
  }
  .bloqueMetodoPagos {
    width: 100%;
  }
  .bloquePrecioFinal {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .selectMetodoPago__options input{
    width: 168px;
  }
}

@media (max-width: 563px) {
  .selectMetodoPago__options input{
    width: 139px;
  }
}

@media (max-device-width: 500px) {
  .header__nav {
    margin-top: -61px;
  }

  .pasarelaDePagos {
    padding-right: 0;
    padding-left: 0;
  }

  .bloqueMetodoPagos {
    padding-top: 50px;
  }
  
  .bloqueMetodoPagos__retroceder {
    position: fixed;
    padding-top: 15px;
    top: 0;
    z-index: 40;
    margin: 0 20px;
  }

  .arrowLeft {
    content: url("../assets/arrowLeftWhite.png");
  }

  .bloqueMetodoPagos__retroceder p {
    color: white;
  }

  .bloqueInfoCompra__imgProduct{
    height: 100%;
  }

  .bloqueInfoCompra__detalleCompra {
    margin-top: 0px;
    height: 100%;
  }
  .nombreCostoProduct p:nth-child(2) {
    bottom: 0;
  }

  .bloquePrecioFinal__background {
    width: -webkit-fill-available;
    position: absolute;
    left: 0;
    padding: 50px 20px;
    top: 61px;
    box-shadow: none;
  }

  .selectMetodoPago__title{
    margin: 0 20px;
  }

  .selectMetodoPago__options{
    margin: 0 20px;
  }

  .selectMetodoPago__options input{
    width: 110px;
    white-space: normal;
  }

  .bloqueMetodoPagos__info {
    margin-top: 500px;
  }

  .bloqueFinalizarCompra{
    justify-content: center;
  }
}

@media(max-device-width: 320px){
  .selectMetodoPago__options input {
    width: 90px;
    font-size: 12px;
  }

  .bloqueFinalizarCompra input{
    margin: 0 20px;
  }
}
</style>