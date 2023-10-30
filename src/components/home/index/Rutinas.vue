<template>
    <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#addrutina"> <b>+</b> Agregar</button>
    <hr>

    <table class="table table-bordered table-hover">
        <thead class="table-dark">
            <tr class="text-center">
                <td>Nombre</td>
                <td>IMC mínimo</td>
                <td>IMC máximo</td>
                <td>Detalle</td>

            </tr>
        </thead>
        <tbody v-for="datos in data" :key="datos.id">
            <tr class="text-center">
                <td>{{ datos.nombre_rutina }}</td>
                <td>{{ datos.imc_recomendado_min }}</td>
                <td>{{ datos.imc_recomendado_max }}</td>
                <td style="font-size: 22px;text-align: center;color: blueviolet;cursor: pointer;">
                    <font-awesome-icon :icon="['fas', 'eye']"  data-bs-toggle="modal" data-bs-target="#listaej" @click="sentData(datos)" />
                    <font-awesome-icon :icon="['far', 'pen-to-square']" data-bs-toggle="modal" data-bs-target="#editrutina"
                        @click="sentData(datos)" />

                    <font-awesome-icon :icon="['fas', 'weight-hanging']"  data-bs-toggle="modal" data-bs-target="#addejag"  @click="sentData(datos)" />

                </td>

            </tr>

        </tbody>
    </table>

    <!-- modales -->

    <div class="modal fade" id="editrutina" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Rutina </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <editrutina :rutina=rutinadata />
                </div>
                <div class="modal-footer">

                </div>
            </div>
        </div>
    </div>


    <div class="modal fade" id="addrutina" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">add rutina </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <addrutina @rutina-agregada="updatedata"  />
                </div>
                <div class="modal-footer">

                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="addejag" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Asignar ejercicios </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <listejercicios :rutina=rutinadata />
                </div>
                <div class="modal-footer">

                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="listaej" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Ejercicios asignados </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                   <listrutej :rutina=rutinadata />
                </div>
                <div class="modal-footer">

                </div>
            </div>
        </div>
    </div>


</template>



<script>
import axios from 'axios';
import addrutina from '../index/popups/addRutina.vue'
import editrutina from '../index/popups/editRutina.vue'
import listejercicios from '../index/popups/listejerutin.vue'
import listrutej from '../index/popups/verEjerrut.vue'
export default {
    name: 'Rutinas',
    data() {
        return {
            data: null,
            rutinadata: 1
        }
    },

    mounted() {
        const headers = {
            "apikey": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNicGRjcHNsbnlzenZhZXBsaXlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzMjI1NzcsImV4cCI6MjAwMTg5ODU3N30.hK68jPYXFIDV86TjlROSx2KTKkr2lFJuKBV2kVn3tMM'
        }
        axios.get('https://sbpdcpslnyszvaepliyp.supabase.co/rest/v1/Rutina?select=*', { headers })
            .then(response => {
                this.data = response.data;
            })

    },
    components: {
        addrutina,
        editrutina,
        listejercicios,
        listrutej
    },
    methods: {
        updatedata() {
            const headers = {
                "apikey": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNicGRjcHNsbnlzenZhZXBsaXlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzMjI1NzcsImV4cCI6MjAwMTg5ODU3N30.hK68jPYXFIDV86TjlROSx2KTKkr2lFJuKBV2kVn3tMM'
            }
            axios.get('https://sbpdcpslnyszvaepliyp.supabase.co/rest/v1/Rutina?select=*', { headers })
                .then(response => {
                    this.data = response.data;
                })

        },

        sentData(rutina) {
            this.rutinadata = rutina

        }


    },
    created() {

    }

}
</script>