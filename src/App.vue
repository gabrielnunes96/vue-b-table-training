<template>
  <div id="app">
    <b-table :items="items" :fields="fields" striped responsive="sm">
      <template #cell(expandir_cooperativa)="row">
        <b-button size="sm" @click="row.toggleDetails" class="cooperativa">
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

            <template #row-details="row">
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
      fields: ["cooperativa", "agencia", "nomeDaCooperativa", "expandir_cooperativa"],
      items: [
        {
          cooperativa: "0555",
          agencia: "teste1",
          nomeDaCooperativa: "Unicred"
        },
      ],
    };
  },
};
</script>

<style>


</style>
