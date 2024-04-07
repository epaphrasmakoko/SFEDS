<template>
  <div class="personal-information">
    <h2><u>Personal Files</u></h2>
    <!-- Add six folders, split into top and bottom groups -->
    <div class="folders">
      <div class="top-folders">
        <router-link :to="`${baseRoute}/documents`" class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
          <div class="folder-item">
            <img src="@/assets/documents-512.png" alt="folder" class="folder">
            <span class="folder-name">Documents</span>
          </div>
        </router-link>
        <router-link :to="`${baseRoute}/pictures`" class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
          <div class="folder-item">
            <img src="@/assets/pictures-512.png" alt="folder" class="folder">
            <span class="folder-name">Pictures</span>
          </div>
        </router-link>
        <router-link :to="`${baseRoute}/others`" class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
          <div class="folder-item">
            <img src="@/assets/folder-3-512.png" alt="folder" class="folder">
            <span class="folder-name">Others</span>
          </div>
        </router-link>
      </div>
      <div class="bottom-folders">
        <router-link :to="`${baseRoute}/videos`" class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
          <div class="folder-item">
            <img src="@/assets/movies-512.png" alt="folder" class="folder">
            <span class="folder-name">Videos</span>
          </div>
        </router-link>
        <router-link :to="`${baseRoute}/music`" class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
          <div class="folder-item">
            <img src="@/assets/music-512.png" alt="folder" class="folder">
            <span class="folder-name">Music</span>
          </div>
        </router-link>
        <router-link :to="`${baseRoute}/shared`" class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
          <div class="folder-item">
            <img src="@/assets/full-folder-512.png" alt="folder" class="folder">
            <span class="folder-name">Shared</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fullName: String,
    registrationNumber: String,
    email: String,
    phoneNumber: String
  },
  data() {
    return {
      baseRoute: '/dashboard/personal-information'
    };
  }
};
</script>

<style scoped>
.personal-information {
  text-align: left;
  margin-bottom: 20px;
}

.personal-information > h2 {
  margin-bottom: 50px;
}

/* Adjust the size of the folders */
.folders {
  display: flex;
  flex-direction: column; /* Align folders vertically */
  align-items: center; /* Center folders horizontally */
}

/* Separate top and bottom folders */
.top-folders,
.bottom-folders {
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between; /* Add space between folder items */
}

.folder-item {
  margin-right: 50px;
  display: flex;
  flex-direction: column; /* Align folder and name vertically */
  align-items: center; /* Center folder and name horizontally */
}

.folder {
  width: 100px; /* Set the width of each folder */
  height: auto; /* Maintain aspect ratio */
  margin-bottom: 10px; /* Add some space between folders */
}

.folder-name {
  margin-top: 1px; /* Add space between folder and its name */
}
</style>
