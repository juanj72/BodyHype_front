<template >
    <form @submit.prevent="form">
        <div class="row">
            <font-awesome-icon :icon="['fas', 'hand-holding-dollar']"  style="color: blueviolet;font-size: 100px;" />
        </div>
        <div class="row">
            <label>Documento:</label>
            <input type="number" class="form-control" v-model="documento" >
        </div>
        <br>
        <div class="row">
            <label>Medio de pago:</label>
            <select name="" id="" class="form-control" v-model="plataforma">
                <option value="Efectivo">Efectivo</option>
                <option value="Tarjeta de credito">Tarjeta de credito</option>
                <option value="Transferencia">Transferencia</option>
            </select>

        </div>
        <br>
        <div class="row">
            <label>Monto:</label>
            <input type="number" class="form-control" v-model="monto">
        </div>
        <br>

        <div class="row">
            <button class="btn" style="background-color: blueviolet; color: aliceblue;">Agregar pago</button>
        </div>



    </form>
</template>


<script>
import Swal from 'sweetalert2';
import axios from 'axios';
export default {
    name: 'addpay',
    data(){
        return{
            documento:'',
            plataforma:'',
            monto:''
        }
    },
    methods:{
        form(){
            try{
                let pago = {
                    "documento":this.documento,
                    "plataforma":this.plataforma,
                    "monto":this.monto,
                    "tipo_usuario":"BodyHypeWeb"
                }


                axios.defaults.headers.common['apikey'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNicGRjcHNsbnlzenZhZXBsaXlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzMjI1NzcsImV4cCI6MjAwMTg5ODU3N30.hK68jPYXFIDV86TjlROSx2KTKkr2lFJuKBV2kVn3tMM'
                axios.post('https://sbpdcpslnyszvaepliyp.supabase.co/rest/v1/Pagos',pago).then(response=>{
                    console.log(response.status);
                    if(response.status==201){
                        this.$emit('add-pay');
                        Swal.fire({
                            icon:'success',
                            title:'Éxito',
                            text:'Se ha cargado el pago por un valor de : $ '+this.monto
                        })

                        this.monto =this.documento=this.plataforma = '';

                    }
                })
            }catch{

            }
        }
    }
}
</script>