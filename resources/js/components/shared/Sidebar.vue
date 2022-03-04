<template>
  <ul class="list-group">
    <li class="list-group-item">
      <router-link to="/dashboard">Dashboard</router-link>
    </li>
    <li class="list-group-item">
      <router-link to="/create-post">Create Post</router-link>
    </li>
    <li class="list-group-item">
      <router-link to="/posts">Posts</router-link>
    </li>
    <li class="list-group-item">
      <router-link to="/categories">Categories</router-link>
    </li>
    <li class="list-group-item">
      <a href="#" @click.prevent="logoutHandaler" class="text-danger">Logout</a>
    </li>
  </ul>
</template>
<script>
import swal from "sweetalert2";
export default {
  name: "SideBar",

  data() {
    return {
      //
    };
  },

  methods: {
    logoutHandaler() {
      axios.post("/api/auth/logout").then(() => {

        swal.fire({
          position: "top-end",
          icon: "success",
          title: "You are successfully logged out",
          showConfirmButton: false,
          timer: 1500
        });

        this.$router.push({ name: "Home" });
      });
    }
  }
};
</script>
