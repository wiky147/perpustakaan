<template>
  <Layout>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 mb-3>
          <v-card color="transparent" class flat>
            <v-card-text class="pa-0 headline">Penerbit</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12>
          <v-card>
            <v-flex xs12 pa-3>
              <v-layout class="py-0 my-0">
                <v-flex xs12 md5 class="pr-3">
                  <v-text-field
                    class="search-field"
                    label="Cari"
                    append-icon="mdi-magnify"
                    single-line
                    solo
                    clearable
                    hide-details
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 md6>
                  <v-spacer></v-spacer>
                </v-flex>
                <v-flex xs2 md2 offset-md3>
                  <v-btn color="primary" to="/penerbit/add">Tambah</v-btn>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-data-table :headers="headers" :items="item" class="elevation-1">
              <template v-slot:item.action="{ item }">
                <v-icon class="mr-3" @click="editItem(item)">mdi-pencil</v-icon>
                <v-icon @click="deleteItem(item)">mdi-delete</v-icon>
              </template>
              <template v-slot:no-data>
                <v-btn color="primary" @click="initialize">Reset</v-btn>
              </template>
            </v-data-table>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </Layout>
</template>

<script>
import Layout from "../../layout/main";
export default {
  components: { Layout },
  data() {
    return {
      dialog: false,
      headers: [
        { text: "ID", align: "center", sortable: false, value: "id" },
        { text: "Penerbit", align: "center", sortable: false, value: "name" },
        { text: "Kota", align: "center", sortable: false, value: "city" },
        { text: "Telp", align: "center", sortable: false, value: "phone" },
        { text: "Email", align: "center", sortable: false, value: "email" },
        { text: "Action", align: "center", sortable: false, value: "action" }
      ],
      item: [
        {
          id: "PN0001",
          name: "Penerbit1",
          city: 'Jakarta',
          phone: "08000000000",
          email: "Penerbit1@mail.com"
        }
      ]
    };
  }
};
</script>

<style>
@import url(../../../design/style.css);
</style>
