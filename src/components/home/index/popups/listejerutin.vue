<template>

    <h3>Selecciona los ejercicios que deseas agregar a la rutina</h3>
    <div class="col" v-for="data in data" :key="data.id">
        <input type="checkbox" name="jpower" id="" :value="data.id" v-model="checkboxitem" > <span>{{data.nombre}}</span>
    </div>
    <div class="row">
        <button class="btn btn-primary" @click="ver()" >imprimir</button>
    </div>
</template>


<script>
import axios from 'axios';
export default{
    name:'listejercicios',
    mounted(){
        try{
            axios.defaults.headers.common['apikey'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNicGRjcHNsbnlzenZhZXBsaXlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzMjI1NzcsImV4cCI6MjAwMTg5ODU3N30.hK68jPYXFIDV86TjlROSx2KTKkr2lFJuKBV2kVn3tMM'
            axios.get('https://sbpdcpslnyszvaepliyp.supabase.co/rest/v1/ejercicio?select=*').then(response=>{
                console.log(response.status);
                this.data = response.data;
            })
        }catch{

        }
    },
    data(){
        return{
            data:'',
            checkboxitem:[]
        }
    },
    methods:{
        ver(){
            if(this.checkboxitem.length >0){
                alert(this.checkboxitem.join(', '))
            }else{
                alert('no hay datos')
            }
        }
    }
}

</script>