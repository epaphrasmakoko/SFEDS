<template>
    <div class="modal" v-if="showModal">
      <div class="modal-content">
        <h2>Encrypt before Upload</h2>
        <p>Choose encryption method:</p>
        <button @click="encryptWithPassphrase">Encrypt using passphrase</button>
        <button @click="encryptWithGeneratedKey">Encrypt using auto-generated Key</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      showModal: Boolean
    },
    methods: {
      encryptWithPassphrase() {
        // Emit event to parent component to handle encryption with passphrase
        this.$emit('encrypt-with-passphrase');
      },
      encryptWithGeneratedKey() {
        // Emit event to parent component to handle encryption with auto-generated key
        this.$emit('encrypt-with-generated-key');
      }
    }
  };
  </script>
  
  <style scoped>
  .modal {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
  }
  
  .modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border-radius: 8px;
  }
  </style>
  