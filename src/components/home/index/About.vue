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
                <td style="font-size: 22px;text-align: center;color: blueviolet;cursor: pointer; margin-left: 2px;" ><font-awesome-icon :icon="['far', 'pen-to-square']"  />
                    
                </td>
            </tr>

        </tbody>
    </table>
</template>

<script>
import axios from 'axios';
export default {
    name: 'About',
    data() {
        return {
            data: null
        }
    }, mounted() {
        const headers = {
            "apikey": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNicGRjcHNsbnlzenZhZXBsaXlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzMjI1NzcsImV4cCI6MjAwMTg5ODU3N30.hK68jPYXFIDV86TjlROSx2KTKkr2lFJuKBV2kVn3tMM'
        }
        axios.get('https://sbpdcpslnyszvaepliyp.supabase.co/rest/v1/ejercicio?select=*', { headers })
            .then(response => {
                this.data = response.data;
            })

    }
}
</script>