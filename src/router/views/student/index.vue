<template>
  <Layout>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 mb-3>
          <v-card color="transparent" class flat>
            <v-card-text class="pa-0 headline">Siswa</v-card-text>
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
                <v-flex xs12 md2 offset-md3>
                  <v-btn color="primary">Tambah</v-btn>
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
        { text: "NIS", align: "center", sortable: false, value: "nis" },
        { text: "Nama", align: "center", sortable: false, value: "name" },
        { text: "Kelas", align: "center", sortable: false, value: "class" },
        { text: "Email", align: "center", sortable: false, value: "email" },
        { text: "Ponsel", align: "center", sortable: false, value: "phone" },
        { text: "Action", align: "center", sortable: false, value: "action" }
      ],
      item: [
        {
          nis: "171110000",
          name: "Super Siswa",
          class: "Super Siswa",
          email: "SuperSiswa@mail.com",
          phone: "08000000000"
        }
      ]
    };
  }
};
</script>

<style>
@import url(../../../design/style.css);
</style>
