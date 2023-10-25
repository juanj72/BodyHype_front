<template>
    <form action="">

        <div class="row">
            <div class="column">
                <label>Nombre: </label>

            </div>
            <div class="column">
                <input v-model="persona.nombre" type="text" class="form-control"  >

            </div>
        </div>
        <hr>
        <div class="row">
            <div class="column">
                <label>Apellido:</label>

            </div>
            <div class="column">
                <input type="text" v-model="persona.apellido" class="form-control"  >

            </div>
        </div>
        <hr>
        <div class="row">
            <div class="column">
                <label>Fecha de nacimiento:</label>

            </div>
            <div class="column">
                <input type="date" v-model="persona.fecha_nacimiento" class="form-control"  >

            </div>
        </div>
        <hr>
        <div class="row">
            <div class="column">



                <div class="row">
                    <label>imagen de perfil:</label>
                </div>
                <div class="row">
                    <img :src="persona.img" style="width: 60px; margin: 2%;" alt="">
                </div>
                <div class="row">
                    <span style="font-size: 12px;">Ingresa la url de la imagen que quieras poner como perfil de la
                        persona</span>

                </div>

            </div>
            <div class="column">
                <input type="text" v-model="persona.img" class="form-control"  >

            </div>
        </div>
        <hr>
        <div class="row">
            <button class="btn btn-success" style="background-color: blueviolet;" @click="updateperson()" ><font-awesome-icon
                    :icon="['fas', 'floppy-disk']" /> Guardar cambios</button>
        </div>


    </form>
</template>

<script>
export default {
    name: 'editperson',
    props: {
        persona: Object
    },
    methods: {
        updateperson() {


            alert('esta es la url de la imagen'+this.persona.nombre);

        }
    },
    data(){
        return{
            nombre:'',
            apellido:'',
            fecha_nacimiento:'',
            img:''

        }

    }
}
</script>