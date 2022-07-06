<template>
  <div id="app">
    <b-table :items="items" :fields="fields" striped responsive="sm">
      <template #cell(expandir_pai)="row">
        <b-form-checkbox
          v-model="row.detailsShowing"
          @change="row.toggleDetails"
        >
          {{ row.detailsShowing ? "Ocultar" : "Expandir" }}
<<<<<<< HEAD
        </b-button>
=======
        </b-form-checkbox>
>>>>>>> origin/lucas-dev
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

<<<<<<< HEAD
            <template #row-details="row">
              <b-card>
                <b-table :items="itemsanimal2" :fields="fields_teste2">
=======
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
>>>>>>> origin/lucas-dev
                  <template #cell(expandir_neto)="row">
                    <b-form-checkbox
                      v-model="row.detailsShowing"
                      @change="row.toggleDetails"
                    >
                      {{ row.detailsShowing ? "Ocultar" : "Expandir" }}
<<<<<<< HEAD
                    </b-button>
                  </template>
                  <template #row-details="row">
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
=======
                    </b-form-checkbox>
>>>>>>> origin/lucas-dev
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
<<<<<<< HEAD
      items: {
        dataDaAgenda: {
          cooperativa: {
            1111: {
              agencia: {
                5565: {
                  tipoDeTransacao: "Crédito",
                },
                9988: {
                  tipoDeTransacao: "Débito",
                },
              },
            },
            2222: {
              agencia: {
                5151: {
                  tipoDeTransacao: "Crédito",
                },
                5445: {
                  tipoDeTransacao: "Débito",
                },
              },
            },
            3333: {
              agencia: {
                5151: {
                  tipoDeTransacao: "Crédito",
                },
                5445: {
                  tipoDeTransacao: "Débito",
                },
              },
            },
          },
        },
      },
=======
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
>>>>>>> origin/lucas-dev
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
