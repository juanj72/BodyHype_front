<template>
    <h2>Rutina: {{ rutina.nombre_rutina }} </h2>
    <h3>Selecciona los ejercicios que deseas agregar a la rutina</h3>
    <div class="col" v-for="data in data" :key="data.id">
        <input type="checkbox" name="jpower" id="" :value="data.id" v-model="checkboxitem"> <span>{{ data.nombre }}</span>
    </div>
    <div class="row">
        <button class="btn "  style="background-color: blueviolet; color: aliceblue;" @click="ver()"> <font-awesome-icon
                    :icon="['fas', 'floppy-disk']" /> Guardar</button>
    </div>
</template>


<script>
import axios from 'axios';
import Swal from 'sweetalert2';
export default {
    name: 'listejercicios',
    props: {
        rutina: {
            type: Object
        }
    },
    mounted() {
        try {

            axios.defaults.headers.common['apikey'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNicGRjcHNsbnlzenZhZXBsaXlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzMjI1NzcsImV4cCI6MjAwMTg5ODU3N30.hK68jPYXFIDV86TjlROSx2KTKkr2lFJuKBV2kVn3tMM'
            axios.get('https://sbpdcpslnyszvaepliyp.supabase.co/rest/v1/ejercicio?select=*').then(response => {
               
                this.data = response.data;
                this.arr = response.data;

            })



        } catch {

        }
    },
    data() {
        return {
            data: '',
            checkboxitem: [],
            datarray: [],
            ejercicios_as_rut: [],
            arr: []
        }
    },
    methods: {
        ver() {



            if (this.checkboxitem.length > 0) {
                let datarray = [];
                this.datarray = datarray;

                for (let i in this.checkboxitem) {
                    let ruinas = {
                        "rutina_id": this.rutina.id,
                        "ejercicio_id": this.checkboxitem[i]
                    }
                    this.datarray.push(ruinas)
                }
                if (this.datarray.length > 7 - this.ejercicios_as_rut.length) {
                    Swal.fire({
                        icon: 'info',
                        title: 'Accion denegana',
                        text: 'No puedes agregar mas de ' + (7 - this.ejercicios_as_rut.length) + ' ejercicios a esta rutina'
                    })
                } else {
                    try {
                        for (let dato in this.datarray) {
                            console.log(dato)
                            axios.post('https://sbpdcpslnyszvaepliyp.supabase.co/rest/v1/rutina_ejercicio', this.datarray[dato]).then(response => {
                               
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Informacion procesada con exito',
                                    text: 'se han registrado los ejercicios a la rutina:'+this.rutina.nombre_rutina
                                })
                            })

                        }
                    } catch {

                    }
                }

            } else {

            }
        },

        cargar() {







            axios.defaults.headers.common['apikey'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNicGRjcHNsbnlzenZhZXBsaXlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzMjI1NzcsImV4cCI6MjAwMTg5ODU3N30.hK68jPYXFIDV86TjlROSx2KTKkr2lFJuKBV2kVn3tMM'
            axios.get('https://sbpdcpslnyszvaepliyp.supabase.co/rest/v1/rutina_ejercicio?rutina_id=eq.' + this.rutina.id + '&select=*').then(response => {
              
                this.ejercicios_as_rut = response.data

                this.data = this.arr.filter((elementA) => !this.ejercicios_as_rut.some((elementB) => elementA.id === elementB.ejercicio_id));
               
            })
        },

    },
    watch: {
        'rutina.id': 'cargar',
        //  'rutina.id':'updatedata'
    }

}

</script>