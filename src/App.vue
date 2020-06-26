<template>
  <div id="app">
    <table-view :entity="User" :data="data"/>
  </div>
</template>

<script>
  import TableView from "@/components/TableView";
  import User from "@/models/User";

  export default {
  name: 'App',
  components: {TableView},
  data() {
    return {
      User,
      data: null
    };
  },
  mounted() {
    const fromServer = [
      {id: 1, email: 'mail1@domain.com'},
      {id: 2, email: 'mail2@domain.com'},
    ];
    this.data = fromServer.map((dataEntity) => {
      return new User(dataEntity);
    });
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
table {
  border: 1px solid black;
}
</style>
