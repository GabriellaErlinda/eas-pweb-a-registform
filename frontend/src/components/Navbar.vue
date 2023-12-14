<!-- Navbar.vue -->
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container">
      <router-link to="/" class="navbar-brand">WhatsUp</router-link>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/home" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/channels" class="nav-link">Channels</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
// No script setup is needed for this component
</script>

<style scoped>
/* Add your custom styles for the Navbar */
.navbar-nav {
  display: flex;
  align-items: right;
}

.nav-link {
  margin: 0 15px;
}

</style>
