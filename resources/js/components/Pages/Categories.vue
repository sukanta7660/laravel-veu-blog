<template>
  <div class="container px-4 px-lg-5 mt-5">
    <div class="row gx-4 gx-lg-5 justify-content-center" style="margin-top: 110px;">
      <div class="col-md-4">
        <Sidebar />
      </div>
      <div class="col-md-10 col-lg-8 col-xl-7">
        <h2>Category</h2>
        <div class="my-5">
          <form method="post" action="#" @submit.prevent="storeCategory">
            <div class="row">
              <div class="col-md-6">
                <div class="form-floating">
                  <input
                    class="form-control"
                    id="title"
                    v-model="formData.name"
                    type="text"
                    placeholder="Category name"
                  />
                  <label for="title">Category</label>
                  <div
                    class="text-danger"
                    v-if="formData.errors.has('name')"
                    v-html="formData.errors.get('name')"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <button
                  class="btn btn-primary btn-sm mt-4 text-uppercase"
                  id="submitButton"
                  type="submit"
                >Save Category</button>
              </div>
            </div>
          </form>
        </div>
        <div class="my-5">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">S/N</th>
                <th scope="col">Name</th>
                <th scope="col">Slug</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(category, index) in categories" :key="index">
                <th scope="row">{{ index+1 }}</th>
                <td>{{ category.name }}</td>
                <td>{{ category.slug }}</td>
                <td>
                  <router-link
                    :to="`/edit-category/${category.id}/${category.slug}`"
                    class="btn btn-sm btn-success"
                  >Edit</router-link>
                  <button
                    type="button"
                    @click.prevent="deleteCategory(category.id)"
                    class="btn btn-sm btn-danger"
                  >Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
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
  name: "Categories",
  components: {
    Sidebar
  },
  data() {
    return {
      categories: null,
      formData: new Form({
        name: null
      })
    };
  },
  mounted() {
    this.fetchCategories();
  },
  methods: {
    fetchCategories() {
      axios.get("/api/category-list").then(response => {
        this.categories = response.data.categories;
      });
    },
    storeCategory() {
      this.formData.post("/api/store-category").then(() => {
        this.formData.reset();

        swal.fire({
          position: "top-end",
          icon: "success",
          title: "Category Added successfully",
          showConfirmButton: false,
          timer: 1500
        });

        this.fetchCategories();
      });
    },
    deleteCategory(id) {
      axios
        .get("/api/delete-category/" + id)
        .then(() => {
          swal.fire({
            position: "top-end",
            icon: "success",
            title: "Category deleted successfully",
            showConfirmButton: false,
            timer: 1500
          });

          this.fetchCategories();
        })
        .catch(error => {
          swal.fire({
            position: "top-end",
            icon: "error",
            title: "Category has posts",
            showConfirmButton: false,
            timer: 1500
          });
        });
    }
  }
};
</script>
