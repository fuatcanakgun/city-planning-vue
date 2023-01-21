import Login from "./Login.vue";
import Form from "./Form.vue";
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        name: "Login",
        component: Login,
        path: "/"
    },
    {
        name: "Form",
        component: Form,
        path: "/form"
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router