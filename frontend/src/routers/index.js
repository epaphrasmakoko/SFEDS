// routers/index.js
import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../components/LoginPage.vue'
import RegistrationPage from '../components/RegistrationPage.vue'
import Dashboard from '../components/student/StudentDashboard.vue'
import EnrolledCourses from '../components/student/EnrolledCourses.vue'
import PersonalInformation from '../components/student/PersonalInformation.vue'
import StudentProfile from '../components/student/StudentProfile.vue'
import DocumentFolder from '../components/student/DocumentFolder.vue' // Import document folder component
import PictureFolder from '../components/student/PictureFolder.vue' // Import picture folder component
import MusicFolder from '../components/student/MusicFolder.vue' // Import music folder component
import VideoFolder from '../components/student/VideoFolder.vue' // Import video folder component
import SharedFolder from '../components/student/SharedFolder.vue' // Import shared folder component
import OtherFolder from '../components/student/OtherFolder.vue' // Import other folder component

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegistrationPage },
  {
    path: '/dashboard',
    component: Dashboard,
    children: [
      { path: '', redirect: '/dashboard/personal-information' },
      { path: 'personal-information/documents', component: DocumentFolder }, // Route for documents folder
      { path: 'personal-information', component: PersonalInformation },
      { path: 'personal-information/pictures', component: PictureFolder }, // Route for pictures folder
      { path: 'personal-information/music', component: MusicFolder }, // Route for music folder
      { path: 'personal-information/videos', component: VideoFolder }, // Route for videos folder
      { path: 'personal-information/shared', component: SharedFolder }, // Route for shared folder
      { path: 'personal-information/others', component: OtherFolder }, // Route for others folder
      { path: 'enrolled-courses', component: EnrolledCourses },
      { path: 'profile', component: StudentProfile }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
