<template>
  <div class="container px-4 px-lg-5 mt-5">
    <div class="row gx-4 gx-lg-5 justify-content-center" style="margin-top: 110px;">
      <div class="col-md-4">
        <Sidebar/>
      </div>
      <div class="col-md-10 col-lg-8 col-xl-7">
      <h2>Dashboard</h2>
      <hr>
      <h4>Name: {{ authUser.name }}</h4>
        <small>Email: {{ authUser.email }}</small>
        <br />
        <small>
          <i>Joined: {{ authUser.created_at | dateFormat }}</i>
        </small>
        <br />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Sidebar from '../shared/Sidebar.vue'
export default {
  name: "Dashboard",
  components: {
      Sidebar
  },
  data() {
    return {
      authUser: null,
    };
  },
  mounted() {
    this.fetchAuthenticatedUser();
  },
  methods: {

    fetchAuthenticatedUser() {
      axios.get("/api/user").then(response => {
        this.authUser = response.data.auth_user;
      });
    }

  }
};
</script>
