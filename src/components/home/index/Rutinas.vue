<template>

    
    <table class="table table-bordered table-hover"  >
        <thead class="table-dark" >
            <tr>
                <td>nombre</td>
                <td>IMC minimo</td>
                <td>IMC maximo</td>
                <td>Detalle</td>
              
            </tr>
        </thead>
        <tbody v-for="datos in data" :key="datos.id">
            <tr>
                <td>{{datos.nombre_rutina}}</td>
                <td>{{ datos.imc_recomendado_min }}</td>
                <td>{{ datos.imc_recomendado_max }}</td>
                <td style="font-size: 22px;text-align: center;color: blueviolet;cursor: pointer;" ><font-awesome-icon :icon="['fas', 'eye']" /></td>
                
            </tr>
           
        </tbody>
    </table>
</template>

<script>
import axios from 'axios';
export default {
    name:'Rutinas',
    data(){
        return{
            data:null
        }
    },

    mounted(){
        const headers = {
            "apikey":'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNicGRjcHNsbnlzenZhZXBsaXlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzMjI1NzcsImV4cCI6MjAwMTg5ODU3N30.hK68jPYXFIDV86TjlROSx2KTKkr2lFJuKBV2kVn3tMM'
        }
        axios.get('https://sbpdcpslnyszvaepliyp.supabase.co/rest/v1/Rutina?select=*',{headers})
        .then(response => {
          this.data = response.data;
        })
        
    }
}
</script>