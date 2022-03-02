<template>
  <div class="container px-4 px-lg-5 mt-5">
    <div class="row gx-4 gx-lg-5 justify-content-center" style="margin-top: 110px;">
      <div class="col-md-10 col-lg-8 col-xl-7">
        <h2 class="text-center">Dashboard</h2>
        <h4>Name: {{ authUser.name }}</h4>
        <small>Email: {{ authUser.email }}</small>
        <br />
        <small>
          <i>Joined: {{ authUser.created_at | timeformat }}</i>
        </small>
        <br />
        <small>
          <i>Total Post: {{ authUser.posts }}</i>
        </small>
        <br />
        <small>
          <button class="btn btn-danger btn-sm">Logout</button>
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
              <select
              id="category"
              class="form-control"
              v-model="formData.categories"
              multiple
              >
                <option
                  v-for="(category, index) in categories"
                  :key="index"
                  :value="category.id"
                >{{ category.name }}</option>
              </select>
              <div class="text-danger" v-if="formData.errors.has('categories')" v-html="formData.errors.get('categories')" />
            </div>
            <div class="form-floating">
              <input
                class="form-control"
                v-model="formData.name"
                id="category_self_create"
                type="text"
                placeholder="Enter a category name"
              />
              <label for="category_self_create">Category (<span class="text-danger">You can create your own category</span>)</label>
              <div class="text-danger" v-if="formData.errors.has('name')" v-html="formData.errors.get('name')" />
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
              <div class="text-danger" v-if="formData.errors.has('title')" v-html="formData.errors.get('title')" />
            </div>
            <div class="form-floating">
              <textarea
              class="form-control"
              id="post_details"
              v-model="formData.body"
              placeholder="Type here"
              ></textarea>
              <label for="post_details">Post Details</label>
              <div class="text-danger" v-if="formData.errors.has('body')" v-html="formData.errors.get('body')" />
            </div>
            <br />
            <button class="btn btn-primary text-uppercase" id="submitButton" type="submit">Save Post</button>
          </form>
        </div>
      </div>
    </div>
    <div class="row gx-4 gx-lg-5 justify-content-center" style="margin-top: 110px;">
      <div class="col-md-10 col-lg-8 col-xl-7">
        <!-- Post preview-->
        <div class="post-preview">
          <a href="post.html">
            <h2 class="post-title">Man must explore, and this is exploration at its greatest</h2>
            <h3 class="post-subtitle">Problems look mighty small from 150 miles up</h3>
          </a>
          <p class="post-meta">
            Posted by
            <a href="#!">Start Bootstrap</a>
            on September 24, 2021
          </p>
        </div>
        <!-- Divider-->
        <hr class="my-4" />
        <!-- Post preview-->
        <div class="post-preview">
          <a href="post.html">
            <h2
              class="post-title"
            >I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.</h2>
          </a>
          <p class="post-meta">
            Posted by
            <a href="#!">Start Bootstrap</a>
            on September 18, 2021
          </p>
        </div>
        <hr class="my-4" />
        <div class="post-preview">
          <a href="post.html">
            <h2 class="post-title">Science has not yet mastered prophecy</h2>
            <h3
              class="post-subtitle"
            >We predict too much for the next year and yet far too little for the next ten.</h3>
          </a>
          <p class="post-meta">
            Posted by
            <a href="#!">Start Bootstrap</a>
            on August 24, 2021
          </p>
        </div>
        <hr class="my-4" />
        <div class="post-preview">
          <a href="post.html">
            <h2 class="post-title">Failure is not an option</h2>
            <h3
              class="post-subtitle"
            >Many say exploration is part of our destiny, but it’s actually our duty to future generations.</h3>
          </a>
          <p class="post-meta">
            Posted by
            <a href="#!">Start Bootstrap</a>
            on July 8, 2021
          </p>
        </div>
        <hr class="my-4" />
        <div class="d-flex justify-content-end mb-4">
          <a class="btn btn-primary text-uppercase" href="#!">Older Posts →</a>
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
        this.authUser = response.data;
      });
    },
    fetchCategories() {
      axios.get("/api/categories").then(response => {
        this.categories = response.data.categories;
      });
    },
    storePost(){
        this.formData.post('/api/store-post')
        .then( () => {
            this.formData.reset();
        })
    }
  }
};
</script>
