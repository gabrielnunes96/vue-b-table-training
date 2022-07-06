<template>
  <div id="app">
    <b-table :items="items_cooperativa" :fields="fields_cooperativa" striped responsive="sm">
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
                <b-table :items="items_tipoDeTransacao" :fields="fields_tipoDeTransacao">
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
      fields_cooperativa: [
        "cooperativa",
        "nomeDaCooperativa",
        "expandir_cooperativa",
      ],
      items_cooperativa: [
        {
          cooperativa: "0555",
          nomeDaCooperativa: "Unicred",
        },
      ],
      fields_agencia: [
        "agencia",
        "nomeDaAgencia",
        "cidadeDaAgencia",
        "expandir_agencia"
      ],
      items_agencia: [
        {
          agencia: "teste1",
          nomeDaAgencia: "Banco do Brasil 222",
          cidadeDaAgencia: "Goiânia - GO",
        },
      ],
      fields_tipoDeTransacao: [
        "visaCredito",
        "visaDebito",
        "dataDoClearing",
        //"expandir_tipoDeTransacao"
      ],
      items_tipoDeTransacao: [
        {
          visaCredito: "true",
          visaDebito: "false",
          dataDoClearing: "05/07/2022",
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
