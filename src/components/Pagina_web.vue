<template>
    <nav class="navbarpage">
        <div class="navbar-logo">
            <img src="/bh.png" alt="Logo">
        </div>
        <ul class="navbar-menu">
            <li class="navbar-item"><a href="#">Inicio</a></li>
            <li class="navbar-item"><a href="#">Acerca de</a></li>
            <li class="navbar-item"><a href="#">Servicios</a></li>
            <li class="navbar-item"><a href="#">Contacto</a></li>
            <li class="navbar-item"> <RouterLink :to="{name:'homeindex'}" >Panel</RouterLink> </li>
        </ul>
    </nav>
    <section>
        <RouterView/>
    </section>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
    name: 'site_web'
}

</script>

<style>
.navbarpage {
    background-color: #33063b;
    /* Color morado agradable */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
}

.navbar-logo img {
    width: 50px;
    height: 50px;
}

.navbar-menu {
    list-style: none;
    display: flex;
    gap: 20px;
}

.navbar-item a {
    text-decoration: none;
    color: #fff;
    font-weight: 600;
}


.navbar-item :hover {
   
    background-color: black;
    border-radius: 10px;
}
</style>