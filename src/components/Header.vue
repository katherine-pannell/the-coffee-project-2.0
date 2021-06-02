<template>
    <header class="header">
        <h1 class="title">{{title}}</h1>
    </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String
  }
}
</script>

<style scoped>
.header {
width: 100%;
top: 0;
left: 0;
margin: auto;
overflow: auto;
height: auto;
padding: 10px;
background: #be9b7b;
position: fixed;
}

.title {
  text-align: center;
  margin: auto;
  color: #8b5f48;
  width: 100%;
  top: 0;
  font-size: 30px;
}

</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->