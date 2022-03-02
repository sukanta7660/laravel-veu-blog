<template>
  <div class="container h-100">
    <div class="row d-flex aligns-items-center justify-content-center" style="margin: 110px 0;">
      <div class="col-6">
        <div class="card">
          <div class="card-header">
            <h3>Register</h3>
            <small class="text-danger">Be a honarable member of our sites</small>
          </div>
          <div class="card-body">
            <form action="#" @submit.prevent="handleRegister">
              <div class="mb-3">
                <label for="name" class="form-label">name</label>
                <input type="name" class="form-control" v-model="credential.name" id="name" />
                <div class="text-danger" v-if="credential.errors.has('name')" v-html="credential.errors.get('name')" />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" v-model="credential.email" id="email" />
                <div class="text-danger" v-if="credential.errors.has('email')" v-html="credential.errors.get('email')" />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input
                  type="password"
                  v-model="credential.password"
                  class="form-control"
                  id="password"
                />
                <div class="text-danger" v-if="credential.errors.has('password')" v-html="credential.errors.get('password')" />
              </div>
              <div class="mb-3">
                <label for="confirm_password" class="form-label">Confirm Password</label>
                <input
                  type="password"
                  v-model="credential.password_confirmation"
                  class="form-control"
                  id="confirm_password"
                />
              </div>
              <button type="submit" class="btn btn-primary" :disabled="credential.busy">Submit</button>
              <p>
                Already have an account? please
                <router-link to="/login">login</router-link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Form from 'vform'
export default {
  name: "Register",
  data() {
    return {
      credential: new Form({
        name: null,
        email: null,
        password: null,
        password_confirmation: null
      })
    };
  },
  methods: {
    handleRegister() {
      axios.get("/sanctum/csrf-cookie").then(response => {
        this.credential.post("/api/auth/register").then(response => {
          console.log(response);
        });
      });
    }
  }
};
</script>
