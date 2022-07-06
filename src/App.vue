<template>
  <div id="app">
    <b-table :items="items" :fields="fields" striped responsive="sm">
      <template #cell(expandir_pai)="row">
        <b-form-checkbox
          v-model="row.detailsShowing"
          @change="row.toggleDetails"
        >
          {{ row.detailsShowing ? "Ocultar" : "Expandir" }}
        </b-form-checkbox>
      </template>
      <template #row-details="">
        <b-table :items="itemsanimal" :fields="fields_teste">
          <template #cell(expandir_filho)="row">
            <b-form-checkbox
              v-model="row.detailsShowing"
              @change="row.toggleDetails"
            >
              {{ row.detailsShowing ? "Ocultar" : "Expandir" }}
            </b-form-checkbox>
          </template>

          <template #row-details="">
            <b-table :items="itemsanimal2" :fields="fields_teste2">
              <template #cell(expandir_neto)="row">
                <b-form-checkbox
                  v-model="row.detailsShowing"
                  @change="row.toggleDetails"
                >
                  {{ row.detailsShowing ? "Ocultar" : "Expandir" }}
                </b-form-checkbox>
              </template>
              <template #row-details="">
                <b-table :items="itemsanimal3" :fields="fields_teste3">
                  <template #cell(expandir_neto)="row">
                    <b-form-checkbox
                      v-model="row.detailsShowing"
                      @change="row.toggleDetails"
                    >
                      {{ row.detailsShowing ? "Ocultar" : "Expandir" }}
                    </b-form-checkbox>
                  </template>
                </b-table>
              </template>
            </b-table>
          </template>
        </b-table>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      fields: ["expandir_pai", "primeiro_nome", "sobrenome", "idade"],
      items: [
        {
          temGato: false,
          idade: 21,
          primeiro_nome: "Barack",
          sobrenome: "Obama",
        },
      ],
      fields_teste: ["expandir_filho", "nome_animal", "sexo"],
      itemsanimal: [
        {
          nome_animal: "Gabiru",
          sexo: "Macho",
        },
      ],
      fields_teste2: ["expandir_neto", "cor_pelo", "brinquedo"],
      itemsanimal2: [
        {
          cor_pelo: "Preto",
          brinquedo: "Bola",
        },
      ],
      fields_teste3: ["cheiro_coco", "cor_caixa_areia"],
      itemsanimal3: [
        {
          cheiro_coco: "Fedido",
          cor_caixa_areia: "Azul",
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
