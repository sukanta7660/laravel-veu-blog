<template>
  <div class="container px-4 px-lg-5 mt-5">
    <div class="row gx-4 gx-lg-5 justify-content-center" style="margin-top: 110px;">
      <div class="col-md-10 col-lg-8 col-xl-7" v-if="posts.length">
        <div class="view_posts" v-for="(post, index) in posts" :key="index">
          <div class="post-preview">
            <a href="#">
              <h2 class="post-title">{{ post.title }}</h2>
              <h3 class="post-subtitle">{{ post.body }}</h3>
            </a>
            <p class="post-meta">
              Posted by
              <a href="#!">{{ post.user.name }}</a>
              on {{ post.created_at | dateFormat }}
            </p>
            <div v-if="authUser" class="checker">
              <p v-if="authUser.id == post.user_id" class="post-meta">
                <button title="edit" class="btn btn-info btn-sm">Edit</button>
                <button
                  @click.prevent="deletePost(post.id)"
                  title="delete"
                  class="btn btn-danger btn-sm"
                >delete</button>
              </p>
            </div>
          </div>
          <hr class="my-4" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      posts: null,
      authUser: null
    };
  },
  mounted() {
    this.fetchAllPosts();
    this.fetchAuthenticatedUser();
  },
  methods: {
    fetchAuthenticatedUser() {
      axios.get("/api/user").then(response => {
        this.authUser = response.data.auth_user;
      });
    },
    fetchAllPosts() {
      axios.get("/api/all-posts").then(response => {
        this.posts = response.data.posts;
      });
    },
    deletePost(id) {
      axios.get("/api/delete-post/" + id).then(() => {
        this.fetchAllPosts();
        this.fetchAuthenticatedUser();
      });
    }
  }
};
</script>
