<template>


    <table class="table table-bordered table-hover"  >
        <thead class="table-dark" >
            <tr>
                <td>nombre</td>
                <td>apellido</td>
                <td>correo</td>
                <td>Fecha de nacimiento</td>
            </tr>
        </thead>
        <tbody v-for="datos in data" :key="datos.id">
            <tr>
                <td>{{datos.nombre}}</td>
                <td>{{ datos.apellido }}</td>
                <td>{{ datos.correo }}</td>
                <td>{{ datos.fecha_nacimiento }}</td>
            </tr>
           
        </tbody>
    </table>
</template>

<script>
 import axios from 'axios';
export default {
   
    name: 'Homeindex',
    data(){
        return{
            data: null
        }
    },
    mounted(){
        const headers = {
            "apikey":'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNicGRjcHNsbnlzenZhZXBsaXlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzMjI1NzcsImV4cCI6MjAwMTg5ODU3N30.hK68jPYXFIDV86TjlROSx2KTKkr2lFJuKBV2kVn3tMM'
        }
        axios.get('https://sbpdcpslnyszvaepliyp.supabase.co/rest/v1/Persona?select=*',{headers})
        .then(response => {
          this.data = response.data;
        })
        
    }
}

</script>