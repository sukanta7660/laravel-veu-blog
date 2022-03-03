<template>
  <div class="container px-4 px-lg-5 mt-5">
    <div class="row gx-4 gx-lg-5 justify-content-center" style="margin-top: 110px;">
      <div class="col-md-4">
        <Sidebar />
      </div>
      <div class="col-md-8 col-lg-8 col-xl-7">
        <h2>Create your Own Post</h2>
        <div class="my-5">
          <form method="post" action="#" @submit.prevent="storePost">
            <div class>
              <label for="category">
                Category (
                <span class="text-danger">You can select multiple Category for a post</span>)
              </label>
              <select id="category" class="form-control" v-model="formData.categories" multiple>
                <option
                  v-for="(category, index) in categories"
                  :key="index"
                  :value="category.id"
                >{{ category.name }}</option>
              </select>
              <div
                class="text-danger"
                v-if="formData.errors.has('categories')"
                v-html="formData.errors.get('categories')"
              />
            </div>
            <div class="form-floating">
              <input
                class="form-control"
                v-model="formData.name"
                id="category_self_create"
                type="text"
                placeholder="Enter a category name"
              />
              <label for="category_self_create">
                Category (
                <span class="text-danger">You can create your own category</span>)
              </label>
              <div
                class="text-danger"
                v-if="formData.errors.has('name')"
                v-html="formData.errors.get('name')"
              />
            </div>
            <div class="form-floating">
              <input
                class="form-control"
                id="title"
                v-model="formData.title"
                type="text"
                placeholder="Enter a title"
              />
              <label for="title">Post Title</label>
              <div
                class="text-danger"
                v-if="formData.errors.has('title')"
                v-html="formData.errors.get('title')"
              />
            </div>
            <div class="form-floating">
              <textarea
                class="form-control"
                id="post_details"
                v-model="formData.body"
                placeholder="Type here"
              ></textarea>
              <label for="post_details">Post Details</label>
              <div
                class="text-danger"
                v-if="formData.errors.has('body')"
                v-html="formData.errors.get('body')"
              />
            </div>
            <br />
            <button class="btn btn-primary text-uppercase" id="submitButton" type="submit">Save Post</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Sidebar from "../shared/Sidebar.vue";
export default {
  name: "CreatePost",
  components: {
    Sidebar
  },
  data() {
    return {
      authUser: null,
      categories: null,
      formData: new Form({
        title: null,
        body: null,
        name: null,
        categories: null
      })
    };
  },
  mounted() {
    this.fetchAuthenticatedUser();
    this.fetchCategories();
  },
  methods: {
    fetchAuthenticatedUser() {
      axios.get("/api/user").then(response => {
        this.authUser = response.data.auth_user;
      });
    },
    fetchCategories() {
      axios.get("/api/categories").then(response => {
        this.categories = response.data.categories;
      });
    },
    storePost() {
      this.formData.post("/api/store-post").then(() => {
        this.formData.reset();
        this.$router.push({ name: "Posts" });
      });
    }
  }
};
</script>

