<template>
  <div class="container h-100">
    <div class="row d-flex aligns-items-center justify-content-center" style="margin: 110px 0;">
      <div class="col-6">
        <div class="card">
          <div class="card-header">
            <h3>Login</h3>
            <small class="text-danger">Create your own session</small>
          </div>
          <div class="card-body">
            <form action="#" @submit.prevent="handleLogin">
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" v-model="credential.email" id="email" />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input
                  type="password"
                  v-model="credential.password"
                  class="form-control"
                  id="password"
                />
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
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
      credential: {
        email: null,
        password: null
      }
    };
  },
  methods: {
    handleLogin() {
      axios.get("/sanctum/csrf-cookie").then(response => {
        axios.post("/api/auth/login", this.credential).then(response => {
          console.log(response);
        });
      });
    }
  }
};
</script>
