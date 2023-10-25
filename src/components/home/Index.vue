<template>
    <div id="app">
        <nav class="navbar">
            <ul class="nav-list">
                <li class="nav-item">
                    <font-awesome-icon :icon="['fas', 'people-roof']" />
                    <RouterLink :to="{ name: 'homeindex' }"> Personas</RouterLink>
                </li>
                <li class="nav-item">
                    <font-awesome-icon :icon="['fas', 'dumbbell']" />
                    <RouterLink :to="{ name: 'about_index' }">Ejercicios</RouterLink>
                </li>
                <li class="nav-item">
                    <font-awesome-icon :icon="['fas', 'repeat']" />
                    <RouterLink :to="{ name: 'rutinas' }"> Rutinas</RouterLink>
                </li>
                <li class="nav-item">
                    <a href="" data-bs-toggle="modal" data-bs-target="#exampleModal"><font-awesome-icon
                            :icon="['fas', 'arrow-right-from-bracket']" /> logout </a>

                </li>
            </ul>
        </nav>
    </div>
    <br>
    <section class="contenido">
        <!-- Button trigger modal -->
        <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> -->

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="logout" data-bs-dismiss="modal">Si, salir</button>
                    </div>
                </div>
            </div>
        </div>



        <RouterView />
    </section>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
    name: 'Index',
    methods:{
        logout(){
            localStorage.removeItem('TOKEN')
         
			this.$router.push('/Login')
        }
    }
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

.nav-item {
    padding: 10px;
}

.nav-item:hover {
    background-color: #6450A5;
    border-radius: 10px;
}

.contenido h2 {
    align-items: center;
}</style>