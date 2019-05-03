<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top custom-bg-dark">
        <router-link to="/" class="navbar-brand">
            <img alt="Vue logo" style="max-height: 25px" src="../assets/logo.png">
            Task Manager
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <router-link to="/" class="nav-link" exact>
                    Home
                </router-link>
            </li>
            <li v-if="$store.state.isLoggedIn" class="nav-item">
                <router-link to="/tasks" class="nav-link" exact>
                    Tasks
                </router-link>
            </li>
            <li v-if="!$store.state.isLoggedIn" class="nav-item">
                <router-link to="/register" class="nav-link" exact>
                    Register
                </router-link>
            </li>
            <li v-if="!$store.state.isLoggedIn" class="nav-item">
                <router-link to="/login" class="nav-link" exact>
                    Login
                </router-link>
            </li>
            <li v-if="$store.state.isLoggedIn" class="nav-item">
                <a href="#" class="nav-link" v-on:click.prevent="logout()">
                    Logout
                </a>
            </li>
            <li class="nav-item">
                <router-link to="/" class="nav-link" exact>
                    {{ this.$store.state.username }}
                </router-link>
            </li>
        </ul>
        
        </div>
    </nav>
    </header>
</template>

<script>
import * as auth from '../services/AuthService'
export default {
  name: '',
  methods: {
    logout() {
        auth.logout()
        this.$router.push({ name: 'home' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
