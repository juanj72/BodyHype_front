<template>


    <div id="app">
        <div class="sidebar">
            <div class="logo">
                <img src="/bh.png" alt="" width="100">
            </div>
            <ul class="menu">
                <li><font-awesome-icon :icon="['fas', 'house']" /> <RouterLink :to="{name:'index'}" > Home</RouterLink> </li>
                <li> <font-awesome-icon :icon="['fas', 'user']" /><RouterLink :to="{name:'profile'}" > Profile</RouterLink> </li>
                <li><font-awesome-icon :icon="['fas', 'bell-concierge']" /><a href="#"> Servicios</a></li>
                <li><font-awesome-icon :icon="['fas', 'address-book']" /><a href="#"> Contacto</a></li>
                <li> <font-awesome-icon :icon="['fas', 'comments-dollar']" /><a href=""> Tesoreria</a> </li>
                <li><font-awesome-icon :icon="['fas', 'globe']" /><RouterLink :to="{name:'homesite'}" > Ver sitio</RouterLink> </li>
               
            </ul>
        </div>
        <div class="content">
            <RouterView/>
        </div>
    </div>
</template>


<script>
import { RouterLink, RouterView } from 'vue-router';
export default {
    name: 'Home',
    mounted(){
        const token = localStorage.getItem('TOKEN')
             
                if (!token || token === null) {
                    // Redirigir al login si el token no existe o es inválido
                    this.$router.push('/Login');
                } 
    }

}
</script>


<style scoped>
/* Estilos de la barra lateral */
.sidebar {
    width: 250px;
    background-color: #21193a;
    /* Color de fondo de la barra lateral */
    color: #fff;
    /* Color del texto en la barra lateral */
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    padding: 20px;
    overflow-y: auto;
}

.logo {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    margin-left: 20%;
   border-left: #fff;
 
}

.menu {
    list-style: none;
    padding: 0;
    margin: 10%;
}

.menu li {
    margin-bottom: 10px;
    margin-top: 30%;
    padding: 5%;
 
}


.menu a {
    text-decoration: none;
    color: #fff;
    /* Color de enlaces en la barra lateral */
    font-size: 20px;
}
.menu li:hover{
    background-color: #440568;
    color: black;
    border-radius: 60px;
    font-size: 20px;
  
}

/* Estilos del contenido principal */
.content {
    margin-left: 270px;
    margin-right: 27px;
    /* Ancho de la barra lateral */
   
}
.title{
    color: #d944df;
}
</style>