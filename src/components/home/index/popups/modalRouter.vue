<template>
 <div id="app2">
        <nav class="navbar2">
            <ul class="nav-list">
                <li class="nav-item">
                    <font-awesome-icon :icon="['fas', 'people-roof']" />
                    <RouterLink :to="{ name: 'homemodal',query:{valor:id}}"> home</RouterLink>
                </li>

                <li class="nav-item">
                    <font-awesome-icon :icon="['fas', 'people-roof']" />
                    <RouterLink :to="{ name: 'promej', query:{valor:id}}"> promedio de Ejercicios</RouterLink>
                </li>
             
            
            </ul>
        </nav>
    </div>
    <br>
    <section class="contenido text-center">
       
      


        <RouterView />
    </section>

</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
export default{
    name:'modalrouter',
    props:{
        id:{
            type:String
        }
    }
}
</script>

<style>
.navbar2 {
    background-color: #24022b;
    /* Color de fondo de la barra de navegación */
    color: #fff;
    /* Color del texto en la barra de navegación */
    display: flex;
    justify-content: center;
    padding: 10px 0;
    border-radius: 10px;
}

.nav-list2 {
    list-style: none;
    display: flex;
    padding: 0;

}

.nav-item2 {
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
}

</style>