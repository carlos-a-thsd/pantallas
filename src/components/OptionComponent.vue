<template>
    <div class="ms-5">
            <div class="col d-flex">
                <fa :icon="this.icon" class="fa-2x icon-color"/>
                <router-link :to="to" class="link">
                    <h5 class="mt-2 ms-2 link">{{ this.title }}</h5>
                </router-link>
            </div>
    </div>
</template>
<script>
export default {
    props:{
        to:{ type: String, required: true },
        icon:{ type: String, required: true },
        title:{ type: String, required: true }
        
    },
}
</script>
<style scoped>
.icon-color {
  color: #2F4858;
}
    .link{
        text-decoration: none;
        color: #1D1D35;
    }
</style>