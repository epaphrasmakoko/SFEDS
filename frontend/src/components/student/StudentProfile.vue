<template>
    <div class="profile-settings">
      <h2><u><strong>Profile Settings</strong></u></h2>
      <form @submit.prevent="updateProfile">
        <div class="form-group">
          <label for="fullName">Full Name</label>
          <input type="text" id="fullName" v-model="fullName" class="form-control" disabled>
        </div>
        <div class="form-group">
          <label for="phoneNumber">Email</label>
          <input type="email" id="email" v-model="email" class="form-control" disabled>
        </div>
        <div class="form-group">
          <label for="phoneNumber">Phone Number</label>
          <input type="tel" id="phoneNumber" v-model="phoneNumber" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="profilePicture">Profile Picture</label><br>
          <input class="btn btn-secondary" type="file" id="profilePicture" @change="handleFileUpload" accept="image/*">
        </div>
        <button type="submit" class="btn btn-dark">Save Changes</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        fullName: 'Epaphras Makoko', // Set default full name
        email: 'epa@gmail.com',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        profilePicture: null
      };
    },
    methods: {
      updateProfile() {
        if (this.password !== this.confirmPassword) {
          alert('Passwords do not match');
          return;
        }
        
        // Perform logic to update user profile
        console.log('Updating profile...');
        console.log('Full Name:', this.fullName);
        console.log('Phone Number:', this.phoneNumber);
        console.log('Password:', this.password);
        console.log('Profile Picture:', this.profilePicture);
      },
      handleFileUpload(event) {
        this.profilePicture = event.target.files[0];
      }
    }
  };
  </script>
  
  <style scoped>
  .profile-settings > h2 {
    margin-bottom: 50px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="tel"],
  input[type="password"],
  input[type="email"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ced4da;
    border-radius: 5px;
    background-color: #ced4da;
  }
  #email {
    background-color: bisque;
  }
  #fullName {
    background-color: bisque;
  }
  
  </style>
  