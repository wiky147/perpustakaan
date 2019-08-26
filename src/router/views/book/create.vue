<template>
  <Layout>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 mb-3>
          <v-card color="transparent" class flat>
            <v-card-text class="pa-0 headline">Tambah Buku</v-card-text>
          </v-card>
        </v-flex>
        <v-flex>
          <v-card>
            <v-flex pa-5>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-layout row wrap>
                  <v-flex xs12 md6>
                    <v-select
                      v-model="publisher"
                      :items="items"
                      :rules="[v => !!v || 'Item is required']"
                      label="Penerbit"
                      required
                    ></v-select>
                  </v-flex>
                  <v-flex xs12 md6>
                    <v-text-field
                      v-model="title"
                      :counter="100"
                      :rules="titleRules"
                      label="Judul"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 md6>
                    <v-text-field
                      v-model="author"
                      :counter="30"
                      :rules="authorRules"
                      label="Pengarang"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 md6>
                    <v-file-input
                      class="file"
                      accept="image/*"
                      label="Cover"
                      :rules="coverRules"
                      append-icon="mdi-camera"
                    ></v-file-input>
                  </v-flex>
                  <v-flex xs12 md6>
                    <v-text-field
                      v-model="prices"
                      type="number"
                      :rules="pricesRules"
                      label="Harga"
                      prefix="Rp."
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 md6>
                    <v-text-field
                      v-model="stocks"
                      type="number"
                      :rules="stocksRules"
                      label="Jumlah"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout class="py-0 my-0">
                  <v-flex xs12 md6>
                    <v-btn color="error" @click="reset">Reset</v-btn>
                  </v-flex>
                  <v-flex xs12 md6>
                    <v-spacer></v-spacer>
                  </v-flex>
                  <v-flex xs12 md6 offset-md4>
                    <v-btn :disabled="!valid" color="primary" class="mr-4 ml-5" @click="add">Tambah</v-btn>
                    <v-btn color="error" to="/buku">Batal</v-btn>
                  </v-flex>
                </v-layout>
              </v-form>
            </v-flex>
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
  data: () => ({
    valid: true,
    publisher: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    title: "",
    titleRules: [
      v => !!v || "Title is required",
      v => (v && v.length <= 100) || "Title must be less than 100 characters"
    ],
    author: "",
    authorRules: [
      v => !!v || "Author is required",
      v => (v && v.length <= 30) || "Author must be less than 30 characters"
    ],
    cover: "",
    coverRules: [
      v => !v || v.size < 2000000 || "Cover size should be less than 2 MB!"
    ],
    prices: "",
    pricesRules: [v => !!v || "Price is required"],
    stocks: "",
    stocksRules: [v => !!v || "Stock is required"]
  }),

  methods: {
    add() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style>
.file .v-input__prepend-outer {
  display: none;
}
</style>
