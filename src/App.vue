<template>
  <div id="app">
    <tree-table
      :data="data"
      :columns="columns"
      :is-fold="props.isFold"
      :expand-type="false"
    >
    </tree-table>
  </div>
</template>

<script>
import dados from '@/resources/dados';

export default {
  name: "App",
  components: {},
  data() {
    return {

      data: dados.data,
      columns: dados.columns,

      props: {
        isFold: false,
        expandType: false,
        selectable: false,
      },
      
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
