<template>
    <div class="document-folder">
        <div class="arrow">
      <router-link to="/dashboard/personal-information" class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
        <img src="@/assets/arrow-92-256.png" alt="Back" class="back-icon ">Back
      </router-link>
      </div>
      <div>
      <h2>Shared</h2>
      </div>
      <div class="items">
      <ul>

      </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    // Add your component logic here
  }
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  .document-folder {
  }

  .arrow{
    width: 400px;
    display: flex;
    justify-content: left;
    text-align: left;
  }
  .items{
    text-align: left;
  }
  ul li{
    margin: 10px;
  }
  
  .back-icon {
    width: 30px; /* Adjust the width as needed */
    height: auto; /* Maintain aspect ratio */
  }
  </style>
  