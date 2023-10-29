<template>
    <h2>{{ rutina.nombre_rutina }}</h2>

    <table class="table table-hover table-bordered">
        <thead class="" >
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>series</th>
            <th>repeticiones</th>
        </thead>
        <tbody>
            <tr v-for="data in data" :key="data.id" >
                <td>{{ data.nombre }}</td>
                <td>{{ data.descripcion }}</td>
                <td>{{data.series }}</td>
                <td>{{ data.repeticiones }}</td>
            </tr>
        </tbody>
    </table>
</template>


<script>
import axios from 'axios';
export default {
    name: 'listrutej',
    props: {
        rutina: {
            type: Object
        }
    },
    data(){
        return{
            data:''
        }
    },
    mounted() {
     

    },
    methods:{
        cargar(){
            let rutparam = {
            "rutparam": this.rutina.id
        }
        axios.defaults.headers.common['apikey'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNicGRjcHNsbnlzenZhZXBsaXlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzMjI1NzcsImV4cCI6MjAwMTg5ODU3N30.hK68jPYXFIDV86TjlROSx2KTKkr2lFJuKBV2kVn3tMM'
        axios.post('https://sbpdcpslnyszvaepliyp.supabase.co/rest/v1/rpc/ejercicios_rutina', rutparam).then(response => {
            
            this.data=response.data
        })
        }
    },
    watch:{
        'rutina.id':'cargar'
    }
}
</script>