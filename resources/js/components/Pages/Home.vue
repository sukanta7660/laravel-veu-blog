<template>
  <div class="container px-4 px-lg-5 mt-5">
    <div class="row gx-4 gx-lg-5 justify-content-center" style="margin-top: 110px;">
      <div class="col-md-10 col-lg-8 col-xl-7" v-if="posts.length">
        <div class="view_posts" v-for="(post, index) in posts" :key="index">
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
              <router-link to="#!">{{ post.user.name }}</router-link>
              on {{ post.created_at | dateFormat }}
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
  },
  methods: {
    fetchAllPosts() {
      axios.get("/api/all-posts").then(response => {
        this.posts = response.data.posts;
      });
    }
  }
};
</script>
