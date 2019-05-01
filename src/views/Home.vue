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
  }
}
</script>
