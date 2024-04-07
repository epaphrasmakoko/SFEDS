<template>
    <div class="modal">
      <div class="modal-content">
        <input type="password" v-model="passphrase" placeholder="Enter passphrase">
        <button @click="submitPassphrase">Submit</button>
        <button @click="cancel">Cancel</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        passphrase: ''
      };
    },
    methods: {
      submitPassphrase() {
        // Passphrase validation logic goes here
        // For simplicity, let's assume the passphrase is correct
        this.$emit('passphrase-entered', this.passphrase);
        this.passphrase = ''; // Clear passphrase after submission
      },
      cancel() {
        // Close the modal without further action
        this.$emit('cancel');
        this.passphrase = ''; // Clear passphrase on cancel
      }
    }
  };
  </script>
  
  <style scoped>
  /* Modal styles here */
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
  }
  </style>
  