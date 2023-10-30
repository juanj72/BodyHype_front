<template>
    <div class="container ">
        <form action="" @submit.prevent="add">
            <div class="row">
                <div class="column">
                    <label>Nombre de ejercicio:</label>
                </div>
                <div class="column">
                    <input type="text" class="form-control" v-model="nombre">
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <label>Descripción:</label>
                </div>
                <div class="column">
                    <input type="text" class="form-control" v-model="descripcion">
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <label>Series:</label>
                </div>
                <div class="column">
                    <input type="number" class="form-control" v-model="series">
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <label>Repeticiones:</label>
                </div>
                <div class="column">
                    <input type="number" class="form-control" v-model="repeticiones">
                </div>
            </div>


            <div class="row">
                <div class="column">
                    <label>Tipo:</label>
                </div>
                <div class="column">
                    <select name="" v-model="tipo_ejercicios" id="" class="form-control">
                        <option v-for="datos in tipos" :key="datos.id" :value="datos.id">{{ datos.descripcion }}
                        </option>
                    </select>
                </div>
            </div>


            <div class="row">
                <div class="column">
                    <label>Categoría:</label>
                </div>
                <div class="column">
                    <select name="" v-model="categoria" id="" class="form-control" placeholder="Selecciona una opción">

                        <option v-for="datos in categorias" :key="datos.id" :value="datos.id">{{ datos.descripcion }}
                        </option>


                    </select>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <label>Imagen (URL):</label>
                </div>
                <div class="column">
                    <img :src="img" alt="" width="10">
                </div>
                <div class="column">
                    <input type="text" class="form-control" v-model="img">
                </div>
            </div>
            <br>
            <div class="row">
                <button class="btn" style="background-color: blueviolet; color: aliceblue;" type="submit">Agregar</button>
            </div>
        </form>
    </div>
</template>


<script>
import Swal from 'sweetalert2';
import axios from 'axios';
export default {
    name: 'addejercicio',
    methods: {
        async add() {
            let ejercicioadd = {
                "nombre": this.nombre,
                "descripcion": this.descripcion,
                "series": this.series,
                "repeticiones": this.repeticiones,
                "tipo_ejercicio_id": this.tipo_ejercicios,
                "categoria_id": this.categoria,
                "img": this.img
            }

            console.log(ejercicioadd);

            try {

                axios.defaults.headers.common['apikey'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNicGRjcHNsbnlzenZhZXBsaXlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzMjI1NzcsImV4cCI6MjAwMTg5ODU3N30.hK68jPYXFIDV86TjlROSx2KTKkr2lFJuKBV2kVn3tMM'
                axios.post('https://sbpdcpslnyszvaepliyp.supabase.co/rest/v1/ejercicio', ejercicioadd).then(response => {
                    console.log(response.status);
                    if (response.status == 201) {
                        Swal.fire(
                            'Se han guardado cambios!',
                            'Solicitud procesada con exito',
                            'success'
                        )
                        this.$emit('ejercicio-agregado');

                        this.nombre = this.descripcion = this.series = this.repeticiones = this.tipo_ejercicios = this.categoria = this.img = ''
                    }
                })
            } catch {

            }
        }
    },
    data() {
        return {
            nombre: '',
            descripcion: '',
            series: '',
            repeticiones: '',
            tipo_ejercicios: '',
            categoria: '',
            img: '',
            categorias: Object,
            tipos: Object


        }
    },
    mounted() {

        try {
            axios.defaults.headers.common['apikey'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNicGRjcHNsbnlzenZhZXBsaXlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzMjI1NzcsImV4cCI6MjAwMTg5ODU3N30.hK68jPYXFIDV86TjlROSx2KTKkr2lFJuKBV2kVn3tMM'
            axios.get('https://sbpdcpslnyszvaepliyp.supabase.co/rest/v1/categoria?select=*').then(response => {
                console.log(response.status);
                this.categorias = response.data;
            })
            axios.get('https://sbpdcpslnyszvaepliyp.supabase.co/rest/v1/tipo_ejercicio?select=*').then(response => {
                console.log(response.status);
                this.tipos = response.data;
            })
        } catch {

        }
    }
}
</script>