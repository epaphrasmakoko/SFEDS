<template>
  <div class="registration-page vh-100 ">
    <div class="container">
      <div class="row justify-content-center ">
        <div class="col-md-6">
          <img src="@/assets/secure_folder_logo.png" alt="Logo" class="logo">
          <div class="card form1">
            <h2 class="card-title">Register to use SFEDS</h2><br>
            <div class="card-body scrollable-card-body">
              <form @submit.prevent="register" class="registration-form">
                <div class="form-group">
                  <input type="text" id="firstName" v-model="firstName" class="form-control" required
                    placeholder="First Name">
                </div>
                <div class="form-group">
                  <input type="text" id="lastName" v-model="lastName" class="form-control" required
                    placeholder="Last Name">
                </div>
                <div class="form-group">
                  <input type="tel" id="phoneNumber" v-model="phoneNumber" class="form-control" required
                    placeholder="Phone Number">
                </div>
                <div class="form-group">
                  <input type="email" id="email" v-model="email" class="form-control" required placeholder="Email">
                </div>
                <div class="form-group">
                  <input type="password" id="password" v-model="password" class="form-control" required
                    placeholder="Password">
                </div>
                <div class="form-group">
                  <input type="password" id="confirmPassword" v-model="confirmPassword" class="form-control" required
                    placeholder="Confirm Password">
                </div>
                <div class="form-group form-check">
                  <input type="checkbox" id="terms" v-model="agreeTerms" class="form-check-input" required>
                  <label for="terms" class="form-check-label">I agree to the <a
                      class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                      href="/terms">Terms of Service</a> and <a
                      class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                      href="/privacy">Privacy Policy</a></label>
                </div>
                <button type="submit" class="btn btn-dark btn-block">Register</button>
              </form>
            </div>
            <div class="mt-3">
              <p>Already have an account? <router-link
                  class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                  to="/login">Back to Login</router-link></p>
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
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
      agreeTerms: false
    };
  },
  methods: {
    register() {
      // Validate inputs
      if (!this.validateInputs()) {
        return;
      }
      // Perform registration logic here
      console.log('Registering with first name:', this.firstName, 'last name:', this.lastName, 'phone number:', this.phoneNumber, 'email:', this.email, 'password:', this.password);
      // Redirect to dashboard after successful registration
      this.$router.push('/');
    },
    validateInputs() {
      // Simple validation for demonstration purposes
      if (!this.firstName || !this.lastName || !this.email || !this.phoneNumber || !this.password || !this.confirmPassword) {
        alert('Please fill in all fields.');
        return false;
      }
      if (this.password !== this.confirmPassword) {
        alert('Passwords do not match.');
        return false;
      }
      if (!this.agreeTerms) {
        alert('Please agree to the Terms of Service and Privacy Policy.');
        return false;
      }
      return true;
    }
  }
};
</script>

<style scoped>
.scrollable-card-body {
  max-height: 75vh;
  /* Set a maximum height for the card body */
  overflow-y: auto;
  /* Enable vertical scrolling if content overflows */
}

.logo {
  padding-top: 5px;
  max-width: 80px;
}

.registration-form {
  width: 100%;
  padding: 40px;
  background-color: bisque;
  color: black;
  border-radius: 10px;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 30px;
}

label {
  display: block;
  font-weight: bold;
}

button {
  width: 100%;
  padding: 10px;
}

.form1 {
  color: bisque;
  background-color: black;
  border: 0cap;
}
</style>
