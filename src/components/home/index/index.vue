<template>
    <table class="table table-bordered table-hover">
        <thead class="table-dark">
            <tr>
                <td>nombre</td>
                <td>apellido</td>
                <td>correo</td>
                <td>Fecha de nacimiento</td>
                <td>Detalle</td>
            </tr>
        </thead>
        <tbody v-for="datos in data" :key="datos.id">
            <tr>
                <td>{{ datos.nombre }}</td>
                <td>{{ datos.apellido }}</td>
                <td>{{ datos.correo }}</td>
                <td>{{ datos.fecha_nacimiento }}</td>
                <td @click="asignar(datos)"  data-bs-toggle="modal" data-bs-target="#modalpersona"
                    style="font-size: 22px;text-align: center;color: blueviolet;cursor: pointer;"><font-awesome-icon
                        :icon="['fas', 'eye']" /></td>
            </tr>



        </tbody>
    </table>

    <div class="modal fade" id="modalpersona" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Persona </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <personapup :id=persona />
                </div>
                <div class="modal-footer">
                 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import personapup from '../index/popups/Persona.vue'
export default {

    name: 'Homeindex',
    data() {
        return {
            data: null,
            persona:1,
        }
    },
    mounted() {
        const headers = {
            "apikey": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNicGRjcHNsbnlzenZhZXBsaXlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzMjI1NzcsImV4cCI6MjAwMTg5ODU3N30.hK68jPYXFIDV86TjlROSx2KTKkr2lFJuKBV2kVn3tMM'
        }
        axios.get('https://sbpdcpslnyszvaepliyp.supabase.co/rest/v1/Persona?select=*', { headers })
            .then(response => {
                this.data = response.data;
            })

    },
    components: { personapup },
    methods:{
        asignar(persona){
            this.persona = persona;
            console.log(persona);
        }
    }

}

</script>