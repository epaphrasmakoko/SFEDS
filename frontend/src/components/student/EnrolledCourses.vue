<template>
  <div class="enrolled-courses">
    <h2><strong><u>Upload File</u></strong></h2>
    <!-- File upload form -->
    <form @submit.prevent="uploadFile" class="upload-form">
      <!-- File input -->
      <div class="form-group upload">
        <input type="file" id="file"
          accept="image/*, video/*, audio/*, .pdf, .doc, .docx, .txt, .zip, .rar, .csv, .xls, .xlsx, .ppt, .pptx, .mp3, .wav, .ogg, .mp4, .mov, .avi"
          ref="fileInput" class="form-control" required @change="handleFileChange">
      </div>

      <!-- Description input -->
      <div class="form-group upload">
        <textarea id="description" v-model="description" class="form-control" required
          placeholder="Describe the File"></textarea>
      </div>

      <!-- Encryption method choice -->
      <label class="radioTitle"><u><strong>Choose Encryption Method:</strong></u></label>
      <div class="form-group methods">
        <div>
          <label>
            <input type="radio" v-model="encryptionMethod" value="generatedKey" checked> Encrypt using auto-generated Key
          </label>
        </div>
        <div>
          <label>
            <input type="radio" v-model="encryptionMethod" value="passphrase"> Encrypt using passphrase
          </label>
        </div>
      </div>
      <hr>

      <!-- Passphrase input -->
      <div v-if="encryptionMethod === 'passphrase'">
        <label for="passphrase">Passphrase:</label>
        <input type="password" id="passphrase" v-model="passphrase" class="form-control" required >
      </div>

      <button type="submit" class="btn btn-secondary upload">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      description: '',
      file: null,
      encryptionMethod: '', // Initialize encryptionMethod variable
      passphrase: '' // Initialize passphrase variable
    };
  },
  methods: {
    uploadFile() {
      // Validate form inputs
      if (!this.description || !this.file || !this.encryptionMethod) {
        alert('Please fill in all fields.');
        return;
      }
      
      // If passphrase method selected, validate passphrase
      if (this.encryptionMethod === 'passphrase' && !this.passphrase) {
        alert('Please enter passphrase.');
        return;
      }

      // Perform file upload logic here
      console.log('Uploading file:', this.$refs.fileInput.files[0]);
      console.log('Description:', this.description);
      console.log('Encryption Method:', this.encryptionMethod);
      console.log('Passphrase:', this.passphrase);
      
      // Reset the form after uploading
      this.$refs.fileInput.value = null;
      this.description = '';
      this.encryptionMethod = '';
      this.passphrase = '';
    },
    handleFileChange(event) {
      // Update the file data
      this.file = event.target.files[0];
    }
  }
};
</script>

<style scoped>
.radioTitle {
  margin-bottom: 10px;
}
.methods {
  text-align: left;
  margin-left: 20px;
}
.enrolled-courses {
  margin-bottom: 20px;
}
.upload-form {
  display: flex;
  flex-direction: column;
}
.upload {
  margin: 20px;
}
</style>
