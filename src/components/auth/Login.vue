<template>
    <div class="login-wrap">
        <div class="login-html">
            <input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">Iniciar
                sesión</label>
            <input id="tab-2" type="radio" name="tab" class="sign-up"><label for="tab-2" class="tab">...</label>
            <div class="login-form">
                <div class="sign-in-htm">
                    <form action="" @submit.prevent="submitForm">
                        <div class="group">
                            <label for="user" class="label">Email</label>
                            <input id="user" type="text" class="input" v-model="email" required>
                        </div>
                        <div class="group">
                            <label for="pass" class="label">Password</label>
                            <input id="pass" type="password" v-model="password" class="input" data-type="password" required>
                        </div>

                        <div class="group">
                            <button class="button" type="submit">iniciar sesión</button>
                        </div>
                        <div class="hr"></div>

                        <img class="img-logo" src="/bh.png" alt="">


                    </form>


                </div>

            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
import Swal from 'sweetalert2';
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
            error: false
        }
    },
    mounted() {
        const token = localStorage.getItem('TOKEN')

        if (token) {
            this.$router.push('/');
        }


    },
    methods: {
        async submitForm() {
            try {
                const user = {
                    "email": this.email,
                    "password": this.password
                }


                axios.defaults.headers.common['apikey'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNicGRjcHNsbnlzenZhZXBsaXlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzMjI1NzcsImV4cCI6MjAwMTg5ODU3N30.hK68jPYXFIDV86TjlROSx2KTKkr2lFJuKBV2kVn3tMM'

                axios.post('https://sbpdcpslnyszvaepliyp.supabase.co/auth/v1/token?grant_type=password', user).then(response => {
                    localStorage.setItem('TOKEN', response.data.access_token);
                    localStorage.setItem('CORREO', response.data.user.email);
                    

                    axios.get('https://sbpdcpslnyszvaepliyp.supabase.co/rest/v1/Persona?correo=eq.' + localStorage.getItem('CORREO') + '&select=*').then(response => {
                        console.log(response.data[0].Rol_id)

                        if (response.data[0].Rol_id != 1) {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Al parecer no tienes permisos para acceder',

                            })
                            localStorage.removeItem('TOKEN');
                            localStorage.removeItem('CORREO')
                            // this.$router.push('/Login');

                        }else{
                            this.$router.push('/');

                        }
                    })

                });




                // Redirigir al login si el token no existe o es inválido



                // El token es válido, puedes realizar otras acciones necesarias




            } catch {
                alert('Ha ocurrido algo, verifica tus credenciales!')
            }
        }

    }
}
</script>


<style>
.img-logo {
    width: 250px;
    margin-left: 16%;




}

a {
    color: inherit;
    text-decoration: none;
}


.login-wrap {
    width: 100%;
    margin: auto;
    max-width: 525px;
    min-height: 670px;
    position: relative;
    box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),
        0 17px 50px 0 rgba(0, 0, 0, 0.19);
    background-color: #ffffff;
}

.login-html {
    width: 100%;
    height: 100%;
    position: absolute;
    padding: 90px 70px 50px 70px;
    background: #21193a;
}

.login-html .sign-in-htm,
.login-html .sign-up-htm {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    transform: rotateY(180deg);
    backface-visibility: hidden;
    transition: all 0.4s linear;
}

.login-html .sign-in,
.login-html .sign-up,
.login-form .group .check {
    display: none;
}

.login-html .tab,
.login-form .group .label,
.login-form .group .button {
    text-transform: uppercase;
}

.login-html .tab {
    font-size: 22px;
    margin-right: 15px;
    padding-bottom: 5px;
    margin: 0 15px 10px 0;
    display: inline-block;
    border-bottom: 2px solid transparent;
}

.login-html .sign-in:checked+.tab,
.login-html .sign-up:checked+.tab {
    color: #fff;
    border-color: #80BA27;
}

.login-form {
    min-height: 345px;
    position: relative;
    perspective: 1000px;
    transform-style: preserve-3d;
}

.login-form .group {
    margin-bottom: 15px;
}

.login-form .group .label,
.login-form .group .input,
.login-form .group .button {
    width: 100%;
    color: #fff;
    display: block;
}

.login-form .group .button:hover {
    background-color: #00ACC9;
    color: #000000;
}

.login-form .group .input,
.login-form .group .button {
    border: none;
    padding: 15px 20px;
    border-radius: 25px;
    background: rgba(255, 255, 255, 0.1);
}

.login-form .group input[data-type="password"] {
    text-security: circle;
    -webkit-text-security: circle;
}

.login-form .group .label {
    color: #ffffff;
    font-size: 12px;
}

.login-form .group .button {
    background: blueviolet;
}

.login-form .group label .icon {
    width: 15px;
    height: 15px;
    border-radius: 2px;
    position: relative;
    display: inline-block;
    background: rgba(255, 255, 255, 0.1);
}

.login-form .group label .icon:before,
.login-form .group label .icon:after {
    content: "";
    width: 10px;
    height: 2px;
    background: #fff;
    position: absolute;
    transition: all 0.2s ease-in-out 0s;
}

.login-form .group label .icon:before {
    left: 3px;
    width: 5px;
    bottom: 6px;
    transform: scale(0) rotate(0);
}

.login-form .group label .icon:after {
    top: 6px;
    right: 0;
    transform: scale(0) rotate(0);
}

.login-form .group .check:checked+label {
    color: #fff;
}

.login-form .group .check:checked+label .icon {
    background: #1161ee;
}

.login-form .group .check:checked+label .icon:before {
    transform: scale(1) rotate(45deg);
}

.login-form .group .check:checked+label .icon:after {
    transform: scale(1) rotate(-45deg);
}

.login-html .sign-in:checked+.tab+.sign-up+.tab+.login-form .sign-in-htm {
    transform: rotate(0);
}

.login-html .sign-up:checked+.tab+.login-form .sign-up-htm {
    transform: rotate(0);
}

.hr {
    height: 2px;
    margin: 60px 0 0px 0;
    background: rgba(255, 255, 255, 0.2);
}

.foot-lnk {
    text-align: center;
}
</style>