<template>
  <div class="curso">
    <Header />
    <div class="navbar"></div>
    <div class="bloqueDetaCurso container">
        <div class="bloqueDetaCurso__retroceder">
            <router-link :to="`/`">
                <img class="arrowLeft" src="../assets/arrowLeft.png" alt="" />
            </router-link>
            <p>Detalle del Curso</p>
        </div>
        <div class="bloqueDetaCurso__info">
            <div class="imgCurso">
                <img src="../assets/DesarrolloFront-End.jpg" alt="" />
            </div>
            <div class="bloqueDetaCurso__detalleCurso">
                <div class="descripcion">
                    <img src="../assets/descripcion.png" alt="">
                    <div class="descripcion__text">
                        <p>Descripcion</p>
                        <p>Curso de desarrollo para Front-End</p>
                    </div>
                </div>
                <div class="docente">
                    <img src="../assets/docente.png" alt="">
                    <div class="docente__text"> 
                        <p>Docente</p>
                        <p>Diego Cueva</p>
                    </div>
                </div>
                <div class="duracion">
                    <img src="../assets/duracion.png" alt="">
                    <div class="duracion__text"> 
                        <p>Duración</p>
                        <div class="detalleDuracion">
                            <p>+6 meses</p>
                            <p>+2 semanas</p>
                            <p>Desarrollo del programa</p>
                            <p>Desarrollo y presentación del proyecto final</p>
                        </div>
                    </div>
                </div>
                <div class="modulos">
                    <img src="../assets/modulos.png" alt="">
                    <div class="modulos__text"> 
                        <p>Módulos</p>
                        <p>6 modulos</p>
                    </div>
                </div>
                <div class="modalidad">
                    <img src="../assets/modalidad.png" alt="">
                    <div class="modalidad__text"> 
                        <p>Modalidad</p>
                        <p>Clases en vivo 100% Virtuales</p>
                    </div>
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
    .curso{
        display: flex;  
        justify-content: center;
    }

    .bloqueDetaCurso__retroceder{
        margin-top: 96px;
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .bloqueDetaCurso__retroceder p{
        font-size: 20px;
        font-weight: bold;
    }

    .bloqueDetaCurso__info{
        display: flex;
        margin-top: 36px;
        gap: 40px;      
    }

    .bloqueDetaCurso__detalleCurso{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .bloqueDetaCurso__detalleCurso>*{
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .descripcion__text, .docente__text,
    .duracion__text, .modulos__text,
    .modalidad__text{
        display: flex;
        flex-direction: column;
        gap: 5px;        
    }

    .descripcion__text p, .docente__text p,
    .duracion__text p,.modulos__text p,
    .modalidad__text p{
        font-family: Roboto;
        font-size: 14px;        
    }
    
    .descripcion__text>p:nth-child(1), .docente__text>p:nth-child(1),
    .duracion__text>p:nth-child(1),.modulos__text>p:nth-child(1),
    .modalidad__text>p:nth-child(1){
        font-family: Roboto;
        font-size: 16px;
        font-weight: bold;
    }

    .detalleDuracion{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px){
        .imgCurso{
            display: flex;
            justify-content: center;
        }

        .bloqueDetaCurso__info{
            flex-direction: column;
        }

        .bloqueDetaCurso__detalleCurso{
            gap: 15px;
            margin-bottom: 40px;
        }
    }
</style>