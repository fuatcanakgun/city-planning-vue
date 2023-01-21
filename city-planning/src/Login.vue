<template>
    <h1>Giriş Sayfası</h1>
    <input type="text" v-model="name" placeholder="Enter Full Name" />
    <input type="text" v-model="email" placeholder="Enter Email Address" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button v-on:click="login">Giriş</button>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            name: "",
            email: "",
            password: ""
        }
    },
    methods: {
        login() {
            localStorage.setItem("user-info", JSON.stringify({email: this.email, name: this.name, password: this.password}))
            this.$router.push({ name: "Form" })
        }
    }
}
</script>