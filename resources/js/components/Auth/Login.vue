<template>
  <div class="container h-100">
    <div class="row d-flex aligns-items-center justify-content-center" style="margin: 110px 0;">
      <div class="col-6">
        <div class="card">
          <div class="card-header">
            <h3>Login</h3>
            <small class="text-success">Create your own session</small>
          </div>
          <div class="card-body">
            <form action="#" @submit.prevent="handleLogin">
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" v-model="credential.email" id="email" />
                <div
                  class="text-danger"
                  v-if="credential.errors.has('email')"
                  v-html="credential.errors.get('email')"
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input
                  type="password"
                  v-model="credential.password"
                  class="form-control"
                  id="password"
                />
                <div
                  class="text-danger"
                  v-if="credential.errors.has('password')"
                  v-html="credential.errors.get('password')"
                />
              </div>
              <button type="submit" class="btn btn-primary">Login</button>
              <p>
                Dont have any account? please
                <router-link to="/register">register here</router-link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      credential: new Form({
        email: null,
        password: null
      })
    };
  },
  methods: {
    handleLogin() {
      axios.get("/sanctum/csrf-cookie").then(response => {
        this.credential.post("/api/auth/login").then(response => {
          this.credential.reset();
          this.$router.push({ name: "Dashboard" });
        });
      });
    }
  }
};
</script>
