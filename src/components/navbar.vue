<template>
  <div>
    <v-app-bar fixed app dense color="primary" class="white--text">
      <v-app-bar-nav-icon color="white" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Perpustakaan</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-menu offset-y>
          <template slot="activator">
            <v-btn text icon color="white">
              <v-icon>mdi-settings</v-icon>
            </v-btn>
          </template>
          <v-list-tile @click="logout">
            <v-list-tile-content>
              <v-list-tile-title>Logout</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon flat>mdi-logout</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-menu>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-toolbar color="primary" dense>
        <img src="../assets/logo.svg" alt="Perpustakaan" width="30" height="30" />
      </v-toolbar>
      <v-list dense>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      items: [
        {
          icon: "mdi-trending-up",
          title: "Dashboard",
          to: "/"
        },
        {
          icon: "mdi-book-open-variant",
          title: "Daftar Buku",
          to: "/buku"
        },
        {
          icon: "mdi-account",
          title: "Pustakawan",
          to: "/pustakawan"
        },
        {
          icon: "mdi-factory",
          title: "Penerbit",
          to: "/penerbit"
        },
        {
          icon: "mdi-school",
          title: "Siswa",
          to: "/siswa"
        }
      ]
    };
  }
};
</script>
