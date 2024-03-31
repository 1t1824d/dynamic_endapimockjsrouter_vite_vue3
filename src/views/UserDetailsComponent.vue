<template>
    <div class="UserDetails">
        <h1>This is an UserDetailsComponent page</h1>
        <button @click="LinkToFun">跳转到User页面</button>
    </div>
</template>
<script setup>
import { useRouter } from "vue-router"
let router = useRouter()

let LinkToFun = () => {
    router.push("/UsersView")
}
</script>
<style>


</style>
