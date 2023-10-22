<template>
    <div id="app">
        <nav class="navbar">
            <ul class="nav-list">
                <li class="nav-item">
                    <font-awesome-icon :icon="['fas', 'people-roof']" /> <RouterLink :to="{name:'homeindex'}" > Personas</RouterLink>
                </li>
                <li class="nav-item">
                    <font-awesome-icon :icon="['fas', 'dumbbell']" /> <RouterLink :to="{name:'about_index'}" >Ejercicios</RouterLink>
                </li>
                <li class="nav-item">
                    <font-awesome-icon :icon="['fas', 'repeat']" /><RouterLink :to="{name:'rutinas'}" > Rutinas</RouterLink>
                </li>
            </ul>
        </nav>
    </div>
    <br>
    <section class="contenido">
        <RouterView/>
    </section>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
    name: 'Index'
}


</script>

<style>
/* Estilos de la barra de navegación */
.navbar {
    background-color: #76008d;
    /* Color de fondo de la barra de navegación */
    color: #fff;
    /* Color del texto en la barra de navegación */
    display: flex;
    justify-content: center;
    padding: 10px 0;
    border-radius: 10px;
}

.nav-list {
    list-style: none;
    display: flex;
    padding: 0;

}

.nav-item {
    margin-right: 20px;

}

.nav-item:last-child {
    margin-right: 0;
}

.nav-item a {
    text-decoration: none;
    color: #fff;
    /* Color del texto de los elementos de la barra de navegación */
    font-size: 18px;
}
.nav-item{
    padding: 10px;
}
.nav-item:hover{
    background-color: #6450A5;
    border-radius: 10px;
}
.contenido h2{
align-items: center;
}
</style>