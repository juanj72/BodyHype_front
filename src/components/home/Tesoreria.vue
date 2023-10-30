<template>
  <h1>Tesoreria</h1>
  <hr>
  <div class="row text-center">
    <h3>Pagos</h3>

  </div>

  <div class=" text-left">
    <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#addpay"><font-awesome-icon
        :icon="['fas', 'hand-holding-dollar']" /> Agregar</button>

  </div>
  <br>
  <table class="table table-hover table-bordered">
    <thead class="table-dark">
      <tr class="text-center">
        <th>documento</th>
        <th>plataforma</th>
        <th>Medio de pago</th>
        <th>Monto</th>
        <th>Fecha</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="dato in data" :key="dato.id" class="text-center">
        <td>{{ dato.documento }}</td>
        <td>{{ dato.plataforma }}</td>
        <td>{{ dato.tipo_usuario }}</td>
        <td>$ {{ formater(dato.monto) }}</td>
        <td>{{ formatDate(dato.created_at) }}</td>
      </tr>
    </tbody>
  </table>






  <!-- Modal -->
  <div class="modal fade" id="addpay" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Pagos</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <addpay/>
        </div>
        <div class="modal-footer">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import addpay from '../home/Tesoreria/popups/addpay.vue'
export default {
  name: 'tesoreria',
  components: {
    addpay
  },
  mounted() {
    try {
      axios.defaults.headers.common['apikey'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNicGRjcHNsbnlzenZhZXBsaXlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzMjI1NzcsImV4cCI6MjAwMTg5ODU3N30.hK68jPYXFIDV86TjlROSx2KTKkr2lFJuKBV2kVn3tMM'
      axios.get('https://sbpdcpslnyszvaepliyp.supabase.co/rest/v1/Pagos?select=*').then(response => {
        console.log(response.status);
        this.data = response.data;
      })
    } catch {

    }
  },
  data() {
    return {
      data: ''
    }
  },
  methods: {
    updatedata() {
      try {
        axios.defaults.headers.common['apikey'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNicGRjcHNsbnlzenZhZXBsaXlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzMjI1NzcsImV4cCI6MjAwMTg5ODU3N30.hK68jPYXFIDV86TjlROSx2KTKkr2lFJuKBV2kVn3tMM'
        axios.get('https://sbpdcpslnyszvaepliyp.supabase.co/rest/v1/Pagos?select=*').then(response => {
          console.log(response.status);
          this.data = response.data;
        })
      } catch {

      }

    },
    formater(number) {
      return number.toLocaleString();

    },
    formatDate(date) {
      const fechaISO = date;
      const fecha = new Date(fechaISO);

      const opciones = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        
      };

      const fechaFormateada = fecha.toLocaleString(undefined, opciones);
      return fechaFormateada

    }
  }
}
</script>