<template>
  <div class="container">
    <div class="row" style=" width: 200px; margin-left: 28%;border-radius: 90px;">
      <img :src="id.img" alt="">
    </div>
    <div class="row">
      <h3> <b>Nombre:</b> {{ id.nombre }} </h3>
    </div>
    <div class="row">
      <h3> <b>Apellido:</b> {{ id.apellido }} </h3>
    </div>
    <div class="row">
      <h3> <b>Correo:</b> {{ id.correo }} </h3>
    </div>
    <div class="row">
      <h3> <b>Documento:</b> {{ id.documento }} </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'personapup',
  props: {
    id: {
      type: Object
    }
  }
}
</script>

<style scoped>
.row {
  text-align: center;
}
</style>