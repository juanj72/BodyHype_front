<template>
    <form @submit.prevent="form">
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
                <img :src="ejercicio.img" style="width: 270px;" alt="" class="">
            </div>
        </div>
        <br>
        <div class="row">
            <button class="btn" style="background-color: blueviolet; color: aliceblue;" type="submit">Guardar</button>
        </div>

    </form>
</template>


<script>
import axios from 'axios';
import Swal from 'sweetalert2';
export default {
    name: 'editejercicio',
    props: {
        ejercicio: {
            type: Object
        }
    },
    methods: {
        form() {
            try {
                let ejercicioup = {
                    "nombre": this.ejercicio.nombre,
                    "descripcion": this.ejercicio.descripcion,
                    "series": this.ejercicio.series,
                    "repeticiones": this.ejercicio.repeticiones,
                    "img": this.ejercicio.img
                }



                axios.defaults.headers.common['apikey'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNicGRjcHNsbnlzenZhZXBsaXlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzMjI1NzcsImV4cCI6MjAwMTg5ODU3N30.hK68jPYXFIDV86TjlROSx2KTKkr2lFJuKBV2kVn3tMM'
                axios.patch('https://sbpdcpslnyszvaepliyp.supabase.co/rest/v1/ejercicio?id=eq.' + this.ejercicio.id, ejercicioup).then(response => {
                    console.log(response.status)
                    if (response.status == 204) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Exito!',
                            text: 'Se ha guardo correctamente la información'
                        })
                    }
                })
            } catch {

            }
        }
    }
}

</script>