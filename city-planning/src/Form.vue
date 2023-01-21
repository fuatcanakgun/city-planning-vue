<template>
    <h1>
        Şehir Ekleme Formu
    </h1>
    <footer>
        <ul>
            <li>{{ userInfo.name }}</li>
            <li>{{ userInfo.email }}</li>
            <li>{{ getDate() }}</li>
            <li>{{ getTimer() }}</li>
        </ul>
    </footer>
</template>

<script>
import getTime from "./time.js"
export default {
    name: "Form",
    data() {
        return {
            userInfo: JSON.parse(localStorage.getItem("user-info"))
        }
    },
    methods: {
        getDate() {
            const today = new Date()
            const date = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear()
            return date
        },
        getTimer() {
            return getTime()
        }
    }

}
</script>