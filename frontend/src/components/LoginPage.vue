<template>
  <div class="login-page">
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col-md-5">
          <figure>
            <figcaption><h5><strong>SECURE FILE ENCRYPTION AND DECRYPTION SYSTEM</strong></h5></figcaption>
            <img src="@/assets/secure-icon-png-4981.png" alt="Logo" class="logo">
          </figure>
          <div class="card form1">
            <div class="card-body">
              <form @submit.prevent="login" class="login-form">
                <h2 class="card-title">Login</h2>
                <div class="form-group">
                  <input type="email" id="email" v-model="email" class="form-control" required placeholder="Email">
                </div>
                <div class="form-group">
                  <input type="password" id="password" v-model="password" class="form-control" required placeholder="Password">
                </div>
                <div class="form-group form-check">
                  <input type="checkbox" id="rememberMe" v-model="rememberMe" class="form-check-input">
                  <label for="rememberMe" class="form-check-label">Remember Me</label>
                </div>
                <button type="submit" class="btn btn-dark btn-block">Login</button>
                <div class="mt-3">
                  <a href="#" class="forgot-password link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Forgot Password?</a>
                </div>
              </form>
              <div class="mt-3">
                <p>Don't have an account? <router-link to="/register" class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Sign Up</router-link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false
    };
  },
  methods: {
    login() {
      // Validate inputs
      if (!this.validateInputs()) {
        return;
      }
      // Perform login logic here
      console.log('Logging in with email:', this.email, 'and password:', this.password);
      // Redirect to dashboard after successful login
      this.$router.push('/dashboard');
    },
    validateInputs() {
      // Simple validation for demonstration purposes
      if (!this.email || !this.password) {
        alert('Please enter email and password.');
        return false;
      }
      return true;
    }
  }
};
</script>

<style scoped>
.card-body{
  background-color: black;
}
.mt-3{
  color: bisque;
}


.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: black;
  color: bisque;
}

.login-form {
  width: 100%;
  padding: 40px;
  background-color: bisque;
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

.form1 {
  border: 0cap;
}

.logo {
  max-width: 150px; /* Adjust the max-width value as needed */
  margin-bottom: 40px; /* Optional: Add some margin below the logo */
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
}

button {
  width: 100%;
  padding: 10px;
}

</style>