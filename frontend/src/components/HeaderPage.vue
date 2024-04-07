<!-- Header.vue -->
<template>
  <header class="header">
    <div class="logo">
      <figure>
        <img src="@/assets/secure-icon-png-4981.png" alt="Logo" class="logo">
        <figcaption><strong>SFEDS</strong></figcaption>
      </figure>
    </div>
    <div>
      <h3><strong>SECURE FILE ENCRYPTION AND DECRYPTION SYSTEM</strong></h3>
    </div>
    <div>
      <nav class="nav">
        <router-link to="/dashboard/profile" class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Profile</router-link>
        <router-link to="/" class="link-danger">Logout</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  // Header component logic here
}
</script>

<style scoped>
/* Header styles here */
.header {
  background-color: #2e2d2d;
  color: bisque;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  margin-left: 40px;
  max-width: 50px;
}
figcaption {
  margin-left: 40px;
}

.nav a {
  margin-right: 20px;
}

/* .profile {
    /* Styles for user profile section */
/*} */
</style>