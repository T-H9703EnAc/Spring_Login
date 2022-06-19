<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6 col-md-offset-3">
                <p class="text-center text-danger">{{ errorMessage }}</p>
                <div class="m-5">
                    <label for="email1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email1" v-model="email">
                </div>
                <div class="m-5">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password"  v-model="password">
                </div>
                <div class="m-5">
                    <button class="btn btn-primary" @click="login()">ログイン</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import router from '../../router/router';

export default {
    data(){
        return{
            email: '',
            password: '',
            errorMessage: ''
        }
    },
    methods: {
        login (){
            axios
            .post(
                'http://localhost:8080/login',
                {email: this.email,password: this.password}
            )
            .then(
                response => {
                    router.push({name:'Home'})
                } 
            ).catch(
                error => {
                    this.errorMessage = 'ログインに失敗しました。';
                }
            );
        }
    }
}
</script>