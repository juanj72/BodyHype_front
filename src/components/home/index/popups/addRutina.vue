<template>
    <form action="" @submit.prevent="addRutina">

        <div class="row">
            <div class="column">
                <label>Nombre Rutina </label>

            </div>
            <div class="column">
                <input type="text" v-model="nombre_rutina" class="form-control">

            </div>
        </div>
        <hr>
        <div class="row">
            <div class="column">
                <label>IMC minimo</label>

            </div>
            <div class="column">
                <input type="number" v-model="imcmin" class="form-control">

            </div>
        </div>
        <hr>
        <div class="row">
            <div class="column">
                <label>IMC maximo</label>

            </div>
            <div class="column">
                <input type="number" v-model="imcmax" class="form-control">

            </div>
        </div>

        <hr>
        <div class="row">
            <button class="btn btn-success" style="background-color: blueviolet;" type="submit"><font-awesome-icon
                    :icon="['fas', 'floppy-disk']" /> Guardar cambios</button>
        </div>


    </form>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2'
export default {
    name: 'addrutina',

    data() {
        return {
            nombre_rutina: '',
            imcmin: '',
            imcmax: ''
        }
    },
    methods: {
      async  addRutina() {
            try {
                const rutina = {
                    "nombre_rutina": this.nombre_rutina,
                    "imc_recomendado_min": this.imcmin,
                    "imc_recomendado_max": this.imcmax
                }
                axios.defaults.headers.common['apikey'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNicGRjcHNsbnlzenZhZXBsaXlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzMjI1NzcsImV4cCI6MjAwMTg5ODU3N30.hK68jPYXFIDV86TjlROSx2KTKkr2lFJuKBV2kVn3tMM'
                axios.post('https://sbpdcpslnyszvaepliyp.supabase.co/rest/v1/Rutina', rutina).then(response => {
                    console.log(response.status);
                    if(response.status==201){
                        Swal.fire(
                            'Se han guardado cambios!',
                            'Solicitud procesada con exito',
                            'success'
                        )
                        this.$emit('rutina-agregada');
                       
                    }
                })

                

            } catch {

            }
        }
    }
}
</script>