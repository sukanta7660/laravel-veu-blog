<template>
  <div class="container px-4 px-lg-5 mt-5">
    <div class="row gx-4 gx-lg-5 justify-content-center" style="margin-top: 110px;">
      <div class="col-md-4">
        <sidebar />
      </div>
      <div class="col-md-8 col-lg-8 col-xl-7">
        <h2>Edit Category</h2>
        <hr />
        <div class="my-5">
          <form method="post" action="#" @submit.prevent="updateCategory">
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
                >Update Category</button>
              </div>
            </div>
          </form>
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
  name: "EditCategory",
  components: {
    Sidebar
  },
  data() {
    return {
      formData: new Form({
        id: null,
        name: null
      })
    };
  },

  mounted() {
    this.fetchCategoryInfo();
  },
  methods: {
    fetchCategoryInfo() {
      axios
        .get(
          `/api/single-category/${this.$route.params.categoryid}/${this.$route.params.categoryslug}`
        )
        .then(response => {
          this.formData.fill(response.data.category);
        });
    },

    updateCategory() {
      this.formData.post("/api/update-category").then(() => {
        swal.fire({
          position: "top-end",
          icon: "success",
          title: "Category updated successfully",
          showConfirmButton: false,
          timer: 1500
        });

        this.$router.push({ name: "Categories" });
      });
    }
  }
};
</script>
