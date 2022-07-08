<template>
  <div id="app">
    <b-table
      :items="items"
      :fields="fields_cooperativa"
      striped
      responsive="sm"
    >
      <template #cell(expandir_cooperativa)="row">
        <b-button size="sm" @click="row.toggleDetails" class="cooperativa">
          {{ row.detailsShowing ? "Ocultar" : "Expandir" }}
        </b-button>
      </template>

      <template #row-details="row">
        <b-card>
          <b-table :items="items_agencia" :fields="fields_agencia">
            <template #cell(expandir_agencia)="row">
              <b-button size="sm" @click="row.toggleDetails" class="agencia">
                {{ row.detailsShowing ? "Ocultar" : "Expandir" }}
              </b-button>
            </template>

            <template #row-details="">
              <b-card>
                <b-table
                  :items="items_tipoDeTransacao"
                  :fields="fields_tipoDeTransacao"
                >
                  <template #cell(expandir_tipoDeTransacao)="row">
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
      items: [
        {
          data: "15/07/2022",
          listaCooperativas: {
            codCoop: {
              "0125": {
                listaAgencias: {
                  codAge: {
                    456: {
                      listaTransacoes: {
                        tipoTrans: {
                          compra: {},
                          chargeback: {},
                        },
                      },
                    },
                    556: {},
                    789: {},
                  },
                },
              },
              "65565": {
                listaAgencias: {
                  codAge: {
                    456: {
                      listaTransacoes: {
                        tipoTrans: {
                          compra: {},
                          chargeback: {},
                        },
                      },
                    },
                    556: {},
                    789: {},
                  },
                },
              },
            },
          },
        },
      ],
      fields_cooperativa: ["codCoop", "expandir_cooperativa"],
      fields_agencia: ["codAge", "expandir_agencia"],
      fields_tipoDeTransacao: [
        "tipoTrans",
        //"expandir_tipoDeTransacao"
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
