<template>
  <div id="custom-home">
    <Hero />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero'

export default {
  name: 'home',
  components: {
    Hero
  },
  beforeCreate: function() {
    fetch(this.$store.state.apiUrl + '/api/user', {
      method: 'GET'
    })
    // .then(res => res.json())
    .then(res => console.log(res))
  }
}
</script>
