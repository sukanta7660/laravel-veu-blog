<template>
  <div class="container px-4 px-lg-5 mt-5">
    <div class="row gx-4 gx-lg-5 justify-content-center" style="margin-top: 110px;">
      <div class="col-md-4">
        <Sidebar />
      </div>
      <div class="col-md-10 col-lg-8 col-xl-7">
        <h2>Your Posts</h2>
        <hr />
        <div class="post_view" v-for="(post, index) in posts" :key="index">
          <div class="post-preview">
            <router-link :to="`/post-details/${post.id}/${post.slug}`">
              <h2 class="post-title">{{ post.title }}</h2>
              <h3 class="post-subtitle">{{ post.body | sortlength(150, "...") }}</h3>
            </router-link>
            <p class="post-meta">
              Categories:
              <span
                class="badge bg-success"
                style="margin-right:10px;"
                v-for="(category, index) in post.categories"
                :key="index"
              >{{ category.name }}</span>
            </p>
            <p class="post-meta">
              Posted by
              <a href="#!">{{ post.user.name }}</a>
              on {{ post.created_at | dateFormat }}
            </p>
            <p class="post-meta">
              <router-link
                :to="`/edit-post/${post.id}/${post.slug}`"
                title="edit"
                class="btn btn-info btn-sm"
              >Edit</router-link>
              <button
                @click.prevent="deletePost(post.id)"
                title="delete"
                class="btn btn-danger btn-sm"
              >delete</button>
            </p>
          </div>
          <hr class="my-4" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import swal from "sweetalert2";
import Sidebar from "../shared/Sidebar.vue";
export default {
  name: "Posts",
  components: {
    Sidebar
  },
  data() {
    return {
      authUser: null,
      posts: null
    };
  },
  mounted() {
    this.fetchAuthenticatedUser();
  },
  methods: {
    fetchAuthenticatedUser() {
      axios.get("/api/user").then(response => {
        this.authUser = response.data.auth_user;
        this.posts = response.data.posts;
      });
    },
    deletePost(id) {
      axios.get("/api/delete-post/" + id).then(() => {
        swal.fire({
          position: "top-end",
          icon: "success",
          title: "Post Deleted successfully",
          showConfirmButton: false,
          timer: 1500
        });
        this.fetchAuthenticatedUser();
      });
    }
  }
};
</script>
