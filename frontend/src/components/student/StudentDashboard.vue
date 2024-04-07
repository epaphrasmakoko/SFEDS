<template>
  <div class="dashboard">
    <Header />

    <div class="main">
      <Sidebar />

      <!-- Main content area -->
      <div class="content">
        <router-view></router-view>
        <div>
          <h1>Welcome Epaphras</h1>
          <!-- Embedding the video -->
          <video autoplay loop muted class="video">
            <source src="@/assets/Lock_video.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from '../HeaderPage.vue'
import Sidebar from '../SidebarPage.vue'
import Footer from '../FooterPage.vue'

export default {
  components: {
    Header,
    Sidebar,
    Footer
  }
}
</script>

<style scoped>
/* Dashboard styles here */
.dashboard {
  display: flex;
  flex-direction: column;
  min-height: 150vh;
  margin: 0px;
  color:bisque;
}

.main {
  display: flex;
  flex: 1;
}

.content {
  display: flex;
  justify-content: space-around;
  flex: 1;
  padding: 1rem;
}

/* Style adjustments for the video */
.video {
  width: 30rem;
  height: 500px;
  max-width: 100%;
}
</style>
