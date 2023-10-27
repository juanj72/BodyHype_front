<template>
    <div id="app">
        <div class="sidebar">
            <div class="logo">
                <img src="/bh.png" alt="" width="100">
            </div>
            <ul class="menu">
                <li><font-awesome-icon :icon="['fas', 'house']" />
                    <RouterLink :to="{ name: 'homeindex' }"> Home</RouterLink>
                </li>
                <li> <font-awesome-icon :icon="['fas', 'user']" />
                    <RouterLink :to="{ name: 'profile' }"> Profile</RouterLink>
                </li>
                <li><font-awesome-icon :icon="['fas', 'bell-concierge']" /><a href="#"> Servicios</a></li>
                <li><font-awesome-icon :icon="['fas', 'address-book']" /><a href="#"> Contacto</a></li>
                <li> <font-awesome-icon :icon="['fas', 'comments-dollar']" /><a href=""> Tesoreria</a> </li>
                <li><font-awesome-icon :icon="['fas', 'globe']" />
                    <RouterLink :to="{ name: 'homesite' }"> Ver sitio</RouterLink>
                </li>

            </ul>
        </div>
        <div class="content">
            <RouterView />
        </div>
    </div>
</template>


<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import { RouterLink, RouterView } from 'vue-router';
export default {
    name: 'Home',
    mounted() {
        const token = localStorage.getItem('TOKEN')

        if (!token || token === null) {
            // Redirigir al login si el token no existe o es inválido
            this.$router.push('/Login');


        }

        axios.defaults.headers.common['apikey'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNicGRjcHNsbnlzenZhZXBsaXlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzMjI1NzcsImV4cCI6MjAwMTg5ODU3N30.hK68jPYXFIDV86TjlROSx2KTKkr2lFJuKBV2kVn3tMM'
        axios.get('https://sbpdcpslnyszvaepliyp.supabase.co/rest/v1/Persona?correo=eq.' + localStorage.getItem('CORREO') + '&select=*').then(response => {
            console.log(response.data[0].Rol_id)

            if (response.data[0].Rol_id != 1) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Al parecer no tienes permisos para acceder',

                })
                localStorage.removeItem('TOKEN');
                localStorage.removeItem('CORREO')
                this.$router.push('/Login');

            }
        })



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

.menu li:hover {
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

.title {
    color: #d944df;
}
</style>