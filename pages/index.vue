<template>
  <div class="container">
    <h1>userland</h1>
    <ul id="example-1">
      <li v-for="user in users" :key="user.Twitter">
        {{ user.Name }}, {{ user.Twitter }}
      </li>
    </ul>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo,
  },
  data() {
    return {
      users: [],
    };
  },
  async fetch() {
    this.users = await fetch("http://localhost:3000/api/sheets")
      .then((res) => res.json())
      .then((data) => data.body);
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
