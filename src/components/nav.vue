<template>
  <nav>
    <v-app-bar flat app>
      <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text color="primary" dark v-bind="attrs" v-on="on">
            <v-icon> expand_more</v-icon>
            <span>menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(link , index) in links" :key="index" router :to="link.route">
            <v-list-item-title> <v-icon left small>{{link.icon}}</v-icon> {{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      

      <v-btn text color="grey">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app class="primary">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img class="text-lg-center" src="/avatar-1.png" />
          </v-avatar>
          <p class="white--text subheading mt-1">The Net Ninja</p>
        </v-flex>
        <v-flex class="mt-4 mb-3"> </v-flex>
      </v-layout>
      <v-list>
        <v-list-item
          v-for="(link, index) in links"
          v-bind:key="index"
          router
          :to="link.route"
        >
          <v-list-item-action>
            <v-icon class="white--text">
              {{ link.icon }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{
              link.text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
      drawer: false,
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
        { icon: "folder", text: "My Projects", route: "/projects" },
        { icon: "person", text: "Team", route: "/team" },
      ],
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    };
  },
};
</script>
