<template>
  <div id="app">
    <b-table :items="items" :fields="fields" striped responsive="sm">
      <template #cell(expandir_pai)="row">
        <b-button size="sm" @click="row.toggleDetails" class="pai">
          {{ row.detailsShowing ? "Ocultar" : "Expandir" }}
        </b-button>

      </template>
      <template #row-details="row">
        <b-card>
          <b-table :items="itemsanimal" :fields="fields_teste">
            <template #cell(expandir_filho)="row">
              <b-button size="sm" @click="row.toggleDetails" class="filho">
                {{ row.detailsShowing ? "Ocultar" : "Expandir" }}
              </b-button>
            </template>

            <template #row-details="">
              <b-card>
                <b-table :items="itemsanimal2" :fields="fields_teste2">
                  <template #cell(expandir_neto)="row">
                    <b-button
                      size="sm"
                      @click="row.toggleDetails"
                      class="filho"
                    >
                      {{ row.detailsShowing ? "Ocultar" : "Expandir" }}
                    </b-button>
                  </template>
                  <template #row-details="">
                    <b-card>
                      <b-table :items="itemsanimal3" :fields="fields_teste3">
                        <template #cell(expandir_neto)="row">
                          <b-button
                            size="sm"
                            @click="row.toggleDetails"
                            class="filho"
                          >
                            {{ row.detailsShowing ? "Ocultar" : "Expandir" }}
                          </b-button>
                        </template>
                      </b-table>
                    </b-card>
                  </template>
                </b-table>
              </b-card>
            </template>
          </b-table>
          <b-button size="sm" @click="row.toggleDetails">Ocultar</b-button>
        </b-card>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      fields: ["primeiro_nome", "sobrenome", "idade", "expandir_pai"],
      items: [
        {
          temGato: false,
          idade: 21,
          primeiro_nome: "Barack",
          sobrenome: "Obama",
        },
      ],
      fields_teste: ["nome_animal", "sexo", "expandir_filho"],
      itemsanimal: [
        {
          nome_animal: "Gabiru",
          sexo: "Macho",
        },
      ],
      fields_teste2: ["cor_pelo", "brinquedo", "expandir_neto"],
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
