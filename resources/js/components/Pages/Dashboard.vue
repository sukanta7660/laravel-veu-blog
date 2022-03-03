<template>
  <div class="container px-4 px-lg-5 mt-5">
    <div class="row gx-4 gx-lg-5 justify-content-center" style="margin-top: 110px;">
      <div class="col-md-10 col-lg-8 col-xl-7">
        <h2 class="text-center">Dashboard</h2>
        <h4>Name: {{ authUser.name }}</h4>
        <small>Email: {{ authUser.email }}</small>
        <br />
        <small>
          <i>Joined: {{ authUser.created_at | dateFormat }}</i>
        </small>
        <br />
        <small>
          <button @click.prevent="logoutHandaler" class="btn btn-danger btn-sm">Logout</button>
        </small>
      </div>
    </div>
    <div class="row gx-4 gx-lg-5 justify-content-center" style="margin-top: 110px;">
      <div class="col-md-10 col-lg-8 col-xl-7">
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
    <div class="row gx-4 gx-lg-5 justify-content-center" style="margin-top: 50px;">
      <div class="col-md-10 col-lg-8 col-xl-7" v-if="posts.length">
        <div class="post_view" v-for="(post, index) in posts" :key="index">
          <div class="post-preview">
            <a href="#">
              <h2 class="post-title">{{ post.title }}</h2>
              <h3
                class="post-subtitle"
              >{{ post.body }}</h3>
            </a>
            <p class="post-meta">
              Posted by
              <a href="#!">{{ post.user.name }}</a>
              on {{ post.created_at | dateFormat }}
            </p>
            <p class="post-meta">
              <button title="edit" class="btn btn-info btn-sm">Edit</button>
              <button @click.prevent="deletePost(post.id)" title="delete" class="btn btn-danger btn-sm">delete</button>
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
  name: "Dashboard",
  data() {
    return {
      authUser: null,
      categories: null,
      posts: null,
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
    logoutHandaler(){
        axios.post('/api/auth/logout').then( () => {
            this.$router.push({ name: "Home" });
        })
    },
    fetchAuthenticatedUser() {
      axios.get("/api/user").then(response => {
        this.authUser = response.data.auth_user;
        this.posts = response.data.posts;
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
        this.fetchAuthenticatedUser();
      });
    },
    deletePost( id ){
        axios.get('/api/delete-post/'+id).then( () => {
            this.fetchAuthenticatedUser();
        })
    }
  }
};
</script>
