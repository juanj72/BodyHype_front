<template>
    <form action="" @submit.prevent="updateperson">

        <div class="row">
            <div class="column">
                <label>Nombre: </label>

            </div>
            <div class="column">
                <input v-model="persona.nombre" type="text" class="form-control">

            </div>
        </div>
        <hr>
        <div class="row">
            <div class="column">
                <label>Apellido:</label>

            </div>
            <div class="column">
                <input type="text" v-model="persona.apellido" class="form-control">

            </div>
        </div>
        <hr>
        <div class="row">
            <div class="column">
                <label>Fecha de nacimiento:</label>

            </div>
            <div class="column">
                <input type="date" v-model="persona.fecha_nacimiento" class="form-control">

            </div>
        </div>
        <hr>
        <div class="row">
            <div class="column">



                <div class="row">
                    <label>imagen de perfil:</label>
                </div>
                <div class="row">
                    <img :src="persona.img" style="width: 60px; margin: 2%;" alt="">
                </div>
                <div class="row">
                    <span style="font-size: 12px;">Ingresa la url de la imagen que quieras poner como perfil de la
                        persona</span>

                </div>

            </div>
            <div class="column">
                <input type="text" v-model="persona.img" class="form-control">

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
    name: 'editperson',
    props: {
        persona: Object
    },
    methods: {


        updateperson() {

            const personajson = {
                "nombre": this.persona.nombre,
                "apellido": this.persona.apellido,
                "fecha_nacimiento": this.persona.fecha_nacimiento,
                "img": this.persona.img

            }
            try {
                axios.defaults.headers.common['apikey'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNicGRjcHNsbnlzenZhZXBsaXlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzMjI1NzcsImV4cCI6MjAwMTg5ODU3N30.hK68jPYXFIDV86TjlROSx2KTKkr2lFJuKBV2kVn3tMM'
                axios.patch('https://sbpdcpslnyszvaepliyp.supabase.co/rest/v1/Persona?id=eq.' + this.persona.id, personajson).then(response => {
                    console.log(response.status);


                    if (response.status == 204) {
                        Swal.fire(
                            'Se han guardado cambios!',
                            'Solicitud procesada con exito',
                            'success'
                        )

                    } else {

                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Parece que ha ocurrido algo, intentalo mas tarde',

                        })

                    }

                })

            } catch {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Parece que ha ocurrido algo, intentalo mas tarde',

                })

            }


        }
    },
    data() {
        return {
            nombre: '',
            apellido: '',
            fecha_nacimiento: '',
            img: ''

        }

    }
}
</script>