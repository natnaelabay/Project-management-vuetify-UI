<template>
  <div class="dashboard">
    <h1 class="subheading ma-4 grey--text">Dashboard</h1>

    <v-container class="my-15">
      <v-layout row class="mb-4">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="sortBy('title')"
              small
              slot="activator"
              text
              color="grey"
              v-bind="attrs"
              v-on="on"
              ><v-icon left small>folder</v-icon>
              <span class="caption text-lowercase">By project name</span></v-btn
            >
          </template>
          <span>Person name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="sortBy('person')"
              small
              slot="activator"
              text
              color="grey"
              v-bind="attrs"
              v-on="on"
              ><v-icon left small>folder</v-icon>
              <span class="caption text-lowercase">By project name</span></v-btn
            >
          </template>
          <span>Project name</span>
        </v-tooltip>
      </v-layout>

      <v-card flat v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="right">
              <v-chip
                small
                :color="project_status(`${project.status}`)"
                class="white--text my-2 caption"
                >{{ project.status }}</v-chip
              >
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  methods: {
    project_status(project) {
      if (project === "complete") {
        // console.log(project.status)
        return "green";
      } else if (project === "ongoing") return "yellow";
      return "red";
    },
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },
  data() {
    return {
      projects: [
        {
          title: "Design a new website",
          person: "Natnael ",
          due: "1st Jan 2019",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Code up the homepage",
          person: "Kebede ",
          due: "10th Jan 2019",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Design video thumbnails",
          person: "Chala",
          due: "20th Dec 2018",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Create a community forum",
          person: "Alemu",
          due: "20th Oct 2018",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
      ],
    };
  },
  name: "Home",
  components: {},
};
</script>
<style scoped>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid #ffaa2c;
}
.project.overdue {
  border-left: 4px solid #f83e70;
}
.v-chip.complete {
  background: #3cd1c2;
}
.v-chip.ongoing {
  background: #ffaa2c;
}
.v-chip.overdue {
  background: #f83e70;
}
</style>
