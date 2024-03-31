<template>
    <div class="Users">
        <h1>This is an Users page</h1>
        <button @click="LinkToFun">跳转到UserDetailsComponent页面</button>

    </div>
</template>
<script setup>
import { useRouter } from "vue-router"
let router = useRouter()

let LinkToFun=()=>{
    router.push("/UserDetailsComponent")
}
</script>
<style>
@media (min-width: 1024px) {
    .Users {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>
