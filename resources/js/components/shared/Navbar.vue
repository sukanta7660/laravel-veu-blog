<template>
  <!-- Navigation-->
        <nav class="navbar navbar-expand-lg" style="background: #111;" id="mainNav">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="index.html">Bloggo</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto py-4 py-lg-0">
                        <li class="nav-item">
                            <router-link class="nav-link px-lg-3 py-3 py-lg-4" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                        <router-link class="nav-link px-lg-3 py-3 py-lg-4" to="/dashboard">Dashboard</router-link>
                        </li>
                        <li class="nav-item">
                        <router-link class="nav-link px-lg-3 py-3 py-lg-4" to="/login">Login</router-link>
                        </li>
                        <li class="nav-item">
                        <router-link class="nav-link px-lg-3 py-3 py-lg-4" to="/register">Register</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {};
  }
};
</script>
