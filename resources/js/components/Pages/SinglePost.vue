<template>
  <div class="container px-4 px-lg-5 mt-5">
    <div class="row gx-4 gx-lg-5 justify-content-center" style="margin-top: 110px;">
      <div class="col-md-10 col-lg-8 col-xl-12">
        <h2>{{ post.title }}</h2>
        <hr />
        <div class="post-preview">
            <p class="post-subtitle">{{ post.body }}</p>
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
          <p class="post-meta">
              <router-link
                to="/"
                title="Go back to home"
                class="btn btn-danger btn-sm"
              >Go back to home</router-link>
            </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "SinglePost",
  components: {
    //
  },
  data() {
    return {
      post: null
    };
  },
  mounted() {
    axios
      .get(
        `/api/post-details/${this.$route.params.postid}/${this.$route.params.postslug}`
      )
      .then(response => {
        this.post = response.data.post
      });
  }
};
</script>

