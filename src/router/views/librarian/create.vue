<template>
  <Layout>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 mb-3>
          <v-card color="transparent" class flat>
            <v-card-text class="pa-0 headline">Tambah Pustakawan</v-card-text>
          </v-card>
        </v-flex>
        <v-flex>
          <v-card>
            <v-flex pa-5>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-layout row wrap>
                  <v-flex xs12 md6>
                    <v-text-field
                      v-model="username"
                      :counter="10"
                      :rules="usernameRules"
                      label="Username"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 md6>
                    <v-select
                      v-model="level"
                      :items="items"
                      :rules="[v => !!v || 'Level is required']"
                      label="Level"
                      required
                    ></v-select>
                  </v-flex>
                  <v-flex xs12 md6>
                    <v-text-field
                      v-model="name"
                      :counter="50"
                      :rules="nameRules"
                      label="Nama"
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
                    <v-btn color="error" to="/pustakawan">Batal</v-btn>
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
    
    username: "",
    usernameRules: [
      v => !!v || "Username is required",
      v => (v && v.length <= 10) || "Username must be less than 10 characters"
    ],
    level: null,
    items: ["Admin", "Global Admin"],
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 50) || "Name must be less than 50 characters"
    ],
    phone: '',
    phoneRules: [(v) => !!v || 'Phone is required'],
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
