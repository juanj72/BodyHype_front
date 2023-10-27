<template>
    <div class="container" v-for="datos in data" :key="datos.id">
        <div class="row">
            <h1>Perfil</h1>
            <hr>
        </div>
        <div class="row text-center">
           
            <div>
                <img :src="datos.img" width="" alt="">
                
            </div>

        </div>
        <br>
        <div class="row">
            <div class="container text-center">
                <div class="row g-2">
                    <div class="col-6">
                        <div class="p-3">
                            <b>Nombre:</b> {{ datos.nombre }}
                        </div>
                        
                    </div>
                    <div class="col-6">
                        <div class="p-3">
                            <b>Apellido:</b> {{ datos.apellido }}
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="p-3">
                            <b>Fecha de nacimiento:</b> {{ datos.fecha_nacimiento }}
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="p-3">
                            <b>Rol:</b> {{ datos.Rol_id }}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <br><br><br>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Profile',
    mounted(){
        axios.defaults.headers.common['apikey'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNicGRjcHNsbnlzenZhZXBsaXlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzMjI1NzcsImV4cCI6MjAwMTg5ODU3N30.hK68jPYXFIDV86TjlROSx2KTKkr2lFJuKBV2kVn3tMM'
        axios.get('https://sbpdcpslnyszvaepliyp.supabase.co/rest/v1/Persona?correo=eq.'+localStorage.getItem('CORREO')+'&select=*').then(response=>{
            console.log(response.data)
            this.data = response.data
        })
    },
    data(){
        return {
            data:null
        }
    }

}
</script>

<style>
.row h1 {
    text-align: center;
    border-radius: 80px;
    border-color: blue;

}
.row img{
   border-radius: 400px;
    width: 60vh;
}

.p-3 {
    background-color: rgb(212, 166, 238);
}
</style>