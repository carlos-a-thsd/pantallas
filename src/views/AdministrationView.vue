<template>
    <div class="col d-flex align-items-center">
        <fa icon="arrow-left" class="me-2 ms-2 fa-2x" @click="$router.go(-1)"/>
        <h1 class="m-0">Administración</h1>
    </div>
    <div class="mt-5">
        <h3 class="ms-5">Equipo</h3>
        <div class="row mt-5">
            <div class="col-3">
                <OptionComponent to="/about" title="Gestión de Usuarios" icon="user"/>
            </div>
            <div class="col-3">
                <OptionComponent to="/about" title="Permisos" icon="lock"/>
            </div>
            <div class="col-3">
                <OptionComponent to="/about" title="Grupos" icon="users"/>
            </div>
        </div>
    </div>
</template>
<script setup>
import OptionComponent from '../components/OptionComponent.vue';
</script>
<style></style>