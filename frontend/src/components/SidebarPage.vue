<!-- Sidebar.vue -->
<template>
    <aside class="sidebar">
      <ul>
        <hr><li><router-link to="/dashboard">Dashboard</router-link></li><hr>
        <li><router-link to="/dashboard/enrolled-courses">Upload</router-link></li><hr>
        <li><router-link to="/dashboard/profile">Profile</router-link></li><hr>
      </ul>
    </aside>
  </template>
  
  <script>
  export default {
    // Sidebar component logic here
  }
  </script>
  
  <style scoped>
  /* Sidebar styles here */
  .sidebar {
    background-color: #2e2d2d;
    color: #fff;
    padding: 40px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
  
  a {
    color: #fff;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>
  