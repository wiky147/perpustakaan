<template>
  <Layout>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 mb-3>
          <v-card color="transparent" class flat>
            <v-card-text class="pa-0 headline">Tambah Penerbit</v-card-text>
          </v-card>
        </v-flex>
        <v-flex>
          <v-card>
            <v-flex pa-5>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-layout row wrap>
                  <v-flex xs12 md6>
                    <v-select
                      v-model="name"
                      :items="items"
                      :rules="[v => !!v || 'Item is required']"
                      label="Penerbit"
                      required
                    ></v-select>
                  </v-flex>
                  <v-flex xs12 md6>
                    <v-text-field
                      v-model="city"
                      :counter="20"
                      :rules="cityRules"
                      label="Kota"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 md6>
                    <v-text-field
                      v-model="phone"
                      type="phone"
                      :rules="phoneRules"
                      label="Telp"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 md6>
                    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
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
                    <v-btn color="error" to="/penerbit">Batal</v-btn>
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
    name: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    city: "",
    cityRules: [
      v => !!v || "City is required",
      v => (v && v.length <= 20) || "City must be less than 20 characters"
    ],
    phone: "",
    phoneRules: [v => !!v || "Phone is required"],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ]
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

