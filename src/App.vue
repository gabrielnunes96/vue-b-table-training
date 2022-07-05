<template>
  <div id="app">
    <b-table :items="items" :fields="fields" striped responsive="sm">
      <template #cell(show_details)="row">
        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
          {{ row.detailsShowing ? "Ocultar" : "Expandir" }} 
        </b-button>
      </template>

      <template #row-details="row">
        <b-card>

          <b-table striped hover :items="itemsanimal" :fields="fields_teste"></b-table>

          <b-button size="sm" @click="row.toggleDetails">Ocultar</b-button>
        </b-card>
      </template>
    </b-table>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  data() {
    return {
      fields: ["primeiro_nome", "sobrenome", "show_details"],
      items: [
        {
          isActive: true,
          idade: 40,
          primeiro_nome: "Dickerson",
          sobrenome: "Macdonald",
        },
        { isActive: false, idade: 21, primeiro_nome: "Larsen", sobrenome: "Shaw" },
        {
          isActive: false,
          idade: 89,
          primeiro_nome: "Geneva",
          sobrenome: "Wilson",
          _showDetails: false,
        },
        { isActive: true, idade: 38, primeiro_nome: "Jami", sobrenome: "Carney" },
      ],
      fields_teste: ["nome_animal", "sexo"],
      itemsanimal: [
        {
          nome_animal: "Gabiru",
          sexo: "Macho",
        },
        {
          nome_animal: "Belinha",
          sexo: "Fêmea",
        },
      ],
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
