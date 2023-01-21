<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import Login from "./Login.vue"
import Form from "./Form.vue"
export default {
  name: "App",
  components: {
    Login,
    Form
  }
}
</script>