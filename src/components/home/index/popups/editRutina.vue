<template>
    <form @submit.prevent="updaterutina">
        <div class="row">
            <div class="column">
                <label>Nombre:</label>
            </div>
            <div class="column">
                <input type="text" class="form-control" v-model="rutina.nombre_rutina">
            </div>
        </div>

        <div class="row">
            <div class="colum">
                <label>IMC minimo</label>
            </div>
            <div class="colum">
                <input type="number" step="any" v-model="rutina.imc_recomendado_min" class="form-control">
            </div>
        </div>
        <div class="ro">
            <div class="column">
                <label>IMC maximo</label>
            </div>
            <div class="column">
                <input type="number" step="any" v-model="rutina.imc_recomendado_max" class="form-control">
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
import Swal from 'sweetalert2';

export default {
    name: 'editrutina',
    props: {
        rutina: {
            type: Object
        }
    },
    methods: {
        updaterutina() {


            try {
                const rutinaupda = {
                    "nombre_rutina": this.rutina.nombre_rutina,
                    "imc_recomendado_min": this.rutina.imc_recomendado_min,
                    "imc_recomendado_max": this.rutina.imc_recomendado_max
                }
                axios.defaults.headers.common['apikey'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNicGRjcHNsbnlzenZhZXBsaXlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzMjI1NzcsImV4cCI6MjAwMTg5ODU3N30.hK68jPYXFIDV86TjlROSx2KTKkr2lFJuKBV2kVn3tMM'
                axios.patch('https://sbpdcpslnyszvaepliyp.supabase.co/rest/v1/Rutina?id=eq.' + this.rutina.id, rutinaupda).then(response => {
                    console.log(response.status);
                    if (response.status == 204) {
                        Swal.fire(
                            'Se han guardado cambios!',
                            'Solicitud procesada con exito',
                            'success'
                        )
                    }

                })
            } catch {

            }

        }
    }
}
</script>