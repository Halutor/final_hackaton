<template>
  <div class="consolidado">
    <Header />
    <div class="navbar"></div>
    <div class="bloqueConsolidado container">
      <div class="bloqueCompras">
        <div class="bloqueCompras__retroceder">
          <img class="arrowLeft" src="../assets/arrowLeft.png" alt="" />
          <p>Resumen de compras</p>
        </div>
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
            </div>
          </div>
        </div>
        <div class="bloqueCompras__precioFinal">
            <p>Precio final</p>
            <p>S/ 600.00</p>
        </div>
      </div>
      <div class="bloqueCompraExitosa">
        <div class="bloqueCompraExitosa__background">
          <div class="mensaje">
            <p>¡Compra exitosa!</p>
          </div>
          <div class="descripcion">
            <p>La boleta o factura solicitada será enviada a tu correo en unos momentos.</p>
          </div>
          <div class="bloqueBtnVolver">
            <router-link :to="`/`">
              <input type="button" value="Volver a mis cursos"/>
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
  name: "Consolidado",
  components: {
    Header,
  },
};
</script>

<style>
.consolidado {
  height: 100vh;
  background-color: #f8f8fa;
  display: flex;
  justify-content: center;
}

.bloqueConsolidado {
  padding-top: 61px;
  display: flex;
  gap: 60px;
}

/* BLOQUE COMPRAS */
.bloqueCompras {
  width: 100%;
  padding-top: 36px;
}

.bloqueCompras__retroceder {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding-bottom: 36px;
}

.bloqueCompras__retroceder p {
  font-weight: 800;
  margin: 0;
  font-size: 20px;
}

.bloqueCompras__info {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 40px;
  border-bottom: 1px solid #C4C4C4;
}

.bloqueInfoCompra {
  display: flex;
  align-items: center;
  gap: 20px;
}

.bloqueInfoCompra__detalleCompra {
  width: 100%;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  margin-top: -10px;
}

.nombreCostoProduct {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.descuento {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40px;
}

.descuento p:nth-child(2) {
  font-weight: 100;
  color: #222222;
}

.descuento p,
.bloqueBtnEliminar input {
  font-weight: 500;
}

.nombreCostoProduct p:nth-child(1),
.descuento p,
.regalo p {
  font-family: Roboto;
}

.bloqueBtnEliminar input {
  font-family: Poppins;
}

.nombreCostoProduct p:nth-child(1),
.descuento p,
.bloqueBtnEliminar input {
  font-weight: bold;
}

.nombreCostoProduct p:nth-child(2) {
  font-weight: bold;
}

.descuento p,
.bloqueBtnEliminar input {
  color: #5640ff;
}

.nombreCostoProduct p,
.descuento p,
.regalo p {
  margin: 0;
}

.descuento p {
  font-size: 14px;
}

.bloqueCompras__precioFinal{
    display: flex;
    justify-content: space-between;
    margin-top: 17px;
}

.bloqueCompras__precioFinal p{
    font-size: 20px;
    font-weight: bold;
    color: #5640FF;
    margin: 0;
}

/* ----------------------------------------------------------------- */

.bloqueCompraExitosa{
  width: auto;
    padding-top: 40px;  
}

.bloqueCompraExitosa__background{
  background-color: white;
  padding: 50px;
  box-shadow: 2px 2px 10px rgb(55 84 170 / 10%);
  border-radius: 5px;
}

.mensaje p{
    text-align: start;
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  color: #222222;
}

.descripcion{
    margin-top: 10px;
}

.descripcion p{
    font-family: Roboto;
    font-size: 14px;
}

.bloqueBtnVolver{
    margin-top: 30px;
    width: 333px;
}

.bloqueBtnVolver input{
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

@media (max-width: 1200px) {
  .bloqueConsolidado{
    flex-direction: column;
  }
  .bloqueCompraExitosa{
    width: 100%;
    display: flex;
    justify-content: center;
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
}

@media (max-device-width: 500px){
    .header__nav {
        margin-top: -61px;
    }

    .bloqueConsolidado{
        padding-left: 0;
        padding-right: 0;
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

    .bloqueCompraExitosa__background{
        width: -webkit-fill-available;
        position: absolute;
        left: 0;
        padding: 50px 20px;
        top: 612px;
        box-shadow: none;
    }

}
</style>