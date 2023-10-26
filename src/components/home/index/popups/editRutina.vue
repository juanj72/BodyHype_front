<template>
<div class="row">
    <div class="column">
        <label >Nombre:</label>
    </div>
    <div class="column">
        <input type="text" class="form-control" v-model="rutina.nombre_rutina">
    </div>
</div>

<div class="row">
    <div class="colum">
        <label >IMC minimo</label>
    </div>
    <div class="colum">
        <input type="number" v-model="rutina.imc_recomendado_min" class="form-control">
    </div>
</div>
<div class="ro">
    <div class="column">
        <label >IMC maximo</label>
    </div>
    <div class="column">
        <input type="number" v-model="rutina.imc_recomendado_max" class="form-control">
    </div>
</div>


</template>

<script>
export default {
    name:'editrutina',
    props:{
        rutina:{
            type:Object
        }
    }
}
</script>