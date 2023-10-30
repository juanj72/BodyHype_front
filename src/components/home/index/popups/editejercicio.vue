<template>
    <form>
        <div class="row">
            <label>Nombre:</label>
            <input type="text" v-model="ejercicio.nombre" class="form-control">
        </div>

        <div class="row">
            <label>Descripción:</label>
            <input type="text" v-model="ejercicio.descripcion" class="form-control">
        </div>

        <div class="row">
            <label>Series:</label>
            <input type="number" v-model="ejercicio.series" class="form-control">
        </div>

        <div class="row">
            <label>Repeticiones:</label>
            <input type="number" v-model="ejercicio.repeticiones" class="form-control">
        </div>

        <div class="row text-center">
            <label>Img:</label>
            <input type="text" v-model="ejercicio.img" class="form-control">
            <div class="row text-center">
                <img :src="ejercicio.img" style="width: 270px;"  alt="" class="">
            </div>
        </div>
        <br>
        <div class="row">
            <button class="btn" style="background-color: blueviolet; color: aliceblue;">Guardar</button>
        </div>

    </form>
</template>


<script>
export default {
    name: 'editejercicio',
    props: {
        ejercicio: {
            type: Object
        }
    }
}

</script>