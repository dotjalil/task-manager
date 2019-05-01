<template>
    <div class="jumbotron custom-bg-dark">
        <h1 class="display-4">Task Manager App</h1>
        <p class="lead">A MEVN Stack App built with MongoDB, ExpressJS, VueJS, and NodeJS technologies.</p>
        <hr class="my-4">
        <p>Click below to begin managing tasks for users.</p>
        <router-link class="btn btn-success btn-lg" to="/tasks">
        View Tasks
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Hero'
}
</script>
