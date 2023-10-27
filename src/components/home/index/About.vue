<template>
    <button class="btn btn-success"> <b>+</b> Agregar</button>
    <hr>
    <table class="table table-bordered table-hover">
        <thead class="table-dark">
            <tr>
                <td>Nombre</td>
                <td>Categoía</td>
                <td>Ejemplo</td>
                <td>Detalle</td>
            </tr>
        </thead>
        <tbody v-for="datos in data" :key="datos.id">
            <tr>
                <td>{{ datos.nombre }}</td>
                <td>{{ datos.categoria_id }}</td>
                <td><img :src="datos.img" alt="" width="60"></td>
                <td style="font-size: 22px;text-align: center;color: blueviolet;cursor: pointer; margin-left: 2px;">
                    <font-awesome-icon :icon="['far', 'pen-to-square']"  data-bs-toggle="modal" data-bs-target="#modalrouter" @click="asignar(datos.id)" />

                </td>
            </tr>

        </tbody>
    </table>

    

    <!-- Modal -->
    <div class="modal fade" id="modalrouter" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Router</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <modalrouter :id="id" />
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import modalrouter from '../index/popups/modalRouter.vue'
export default {
    name: 'About',
    data() {
        return {
            data: null,
            id:''
        }
    }, mounted() {
        const headers = {
            "apikey": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNicGRjcHNsbnlzenZhZXBsaXlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzMjI1NzcsImV4cCI6MjAwMTg5ODU3N30.hK68jPYXFIDV86TjlROSx2KTKkr2lFJuKBV2kVn3tMM'
        }
        axios.get('https://sbpdcpslnyszvaepliyp.supabase.co/rest/v1/ejercicio?select=*', { headers })
            .then(response => {
                this.data = response.data;
            })

    },
    components:{
        modalrouter
    },
    methods:{
        asignar(dato){

            this.id = dato

        }
    }
}
</script>