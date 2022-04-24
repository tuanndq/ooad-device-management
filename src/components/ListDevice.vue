<template>
  <div :key="showNewDeviceDialog" class="container">
    <md-table
      v-model="searched"
      md-sort="name"
      md-sort-order="asc"
      md-card
      md-fixed-header
    >
      <md-table-toolbar>
        <div class="md-toolbar-section-start">
          <h1 class="md-title">Devices</h1>
        </div>

        <md-field md-clearable class="md-toolbar-section-end">
          <md-input
            placeholder="Search by name..."
            v-model="search"
            @input="searchOnTable"
          />
        </md-field>
      </md-table-toolbar>

      <md-table-empty-state md-label="No devices found">
        <md-button class="md-primary md-raised" @click="handleNewDevice"
          >Create New Device</md-button
        >
      </md-table-empty-state>

      <md-table-row
        slot="md-table-row"
        slot-scope="{ item }"
        md-selectable="single"
        @click="handleEditDevice(item)"
      >
        <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{
          item.id
        }}</md-table-cell>
        <md-table-cell md-label="Name" md-sort-by="name">{{
          item.name
        }}</md-table-cell>
        <md-table-cell md-label="Email" md-sort-by="email">{{
          item.email
        }}</md-table-cell>
        <md-table-cell md-label="Gender" md-sort-by="gender">{{
          item.gender
        }}</md-table-cell>
        <md-table-cell md-label="Job Title" md-sort-by="title">{{
          item.title
        }}</md-table-cell>
      </md-table-row>
    </md-table>

    <!-- ********************************************************* -->
    <!--                     Create New Device                     -->
    <!-- ********************************************************* -->

    <md-dialog :md-active.sync="showNewDeviceDialog">
      <md-dialog-title>Preferences</md-dialog-title>

      <md-dialog-content class="body_dialog">
        <md-field>
          <label>Device type</label>
          <md-input v-model="newDevice.deviceType"></md-input>
        </md-field>

        <md-field>
          <label>Status</label>
          <md-input v-model="newDevice.status"></md-input>
        </md-field>

        <md-field>
          <label>Maximum Guess</label>
          <md-input v-model="newDevice.maximumGuess"></md-input>
        </md-field>

        <md-field>
          <label>Subcribe Time</label>
          <md-input v-model="newDevice.subcribeTime"></md-input>
        </md-field>

        <md-field>
          <label>Expired Time</label>
          <md-input v-model="newDevice.expTime"></md-input>
        </md-field>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click="showNewDeviceDialog = false"
          >Close</md-button
        >
        <md-button class="md-primary" @click="showNewDeviceDialog = false"
          >Save</md-button
        >
      </md-dialog-actions>
    </md-dialog>

    <!-- ********************************************************* -->
    <!--                      Edit Device                          -->
    <!-- ********************************************************* -->

    <md-dialog :md-active.sync="showEditDeviceDialog">
      <md-dialog-title>Preferences</md-dialog-title>

      <md-dialog-content class="body_dialog">
        <md-field>
          <label>Device type</label>
          <md-input v-model="editDevice.deviceType"></md-input>
        </md-field>

        <md-field>
          <label>Status</label>
          <md-input v-model="editDevice.status"></md-input>
        </md-field>

        <md-field>
          <label>Maximum Guess</label>
          <md-input v-model="editDevice.maximumGuess"></md-input>
        </md-field>

        <md-field>
          <label>Subcribe Time</label>
          <md-input v-model="editDevice.subcribeTime"></md-input>
        </md-field>

        <md-field>
          <label>Expired Time</label>
          <md-input v-model="editDevice.expTime"></md-input>
        </md-field>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click="showEditDeviceDialog = false"
          >Close</md-button
        >
        <md-button class="md-primary" @click="showEditDeviceDialog = false"
          >Save</md-button
        >
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
const toLower = (text) => {
  return text.toString().toLowerCase();
};

const searchByName = (items, term) => {
  if (term) {
    return items.filter((item) => toLower(item.name).includes(toLower(term)));
  }
  return items;
};

export default {
  name: "ListDevice",
  components: {},
  data: () => ({
    search: null,
    searched: [],
    showNewDeviceDialog: false,
    showEditDeviceDialog: false,
    newDevice: {
      deviceType: "",
      status: 0,
      maximumGuess: 0,
      subcribeTime: "",
      expTime: "",
    },
    editDevice: {
      deviceType: "",
      status: 0,
      maximumGuess: 0,
      subcribeTime: "",
      expTime: "",
    },
    devices: [
      {
        id: 1,
        name: "Shawna Dubbin",
        email: "sdubbin0@geocities.com",
        gender: "Male",
        title: "Assistant Media Planner",
      },
      {
        id: 2,
        name: "Odette Demageard",
        email: "odemageard1@spotify.com",
        gender: "Female",
        title: "Account Coordinator",
      },
      {
        id: 3,
        name: "Vera Taleworth",
        email: "vtaleworth2@google.ca",
        gender: "Male",
        title: "Community Outreach Specialist",
      },
      {
        id: 4,
        name: "Lonnie Izkovitz",
        email: "lizkovitz3@youtu.be",
        gender: "Female",
        title: "Operator",
      },
      {
        id: 5,
        name: "Thatcher Stave",
        email: "tstave4@reference.com",
        gender: "Male",
        title: "Software Test Engineer III",
      },
      {
        id: 6,
        name: "Karim Chipping",
        email: "kchipping5@scribd.com",
        gender: "Female",
        title: "Safety Technician II",
      },
      {
        id: 7,
        name: "Helge Holyard",
        email: "hholyard6@howstuffworks.com",
        gender: "Female",
        title: "Internal Auditor",
      },
      {
        id: 8,
        name: "Rod Titterton",
        email: "rtitterton7@nydailynews.com",
        gender: "Male",
        title: "Technical Writer",
      },
      {
        id: 9,
        name: "Gawen Applewhite",
        email: "gapplewhite8@reverbnation.com",
        gender: "Female",
        title: "GIS Technical Architect",
      },
      {
        id: 10,
        name: "Nero Mulgrew",
        email: "nmulgrew9@plala.or.jp",
        gender: "Female",
        title: "Staff Scientist",
      },
      {
        id: 11,
        name: "Cybill Rimington",
        email: "crimingtona@usnews.com",
        gender: "Female",
        title: "Assistant Professor",
      },
      {
        id: 12,
        name: "Maureene Eggleson",
        email: "megglesonb@elpais.com",
        gender: "Male",
        title: "Recruiting Manager",
      },
      {
        id: 13,
        name: "Cortney Caulket",
        email: "ccaulketc@cbsnews.com",
        gender: "Male",
        title: "Safety Technician IV",
      },
      {
        id: 14,
        name: "Selig Swynfen",
        email: "sswynfend@cpanel.net",
        gender: "Female",
        title: "Environmental Specialist",
      },
      {
        id: 15,
        name: "Ingar Raggles",
        email: "iragglese@cbc.ca",
        gender: "Female",
        title: "VP Sales",
      },
      {
        id: 16,
        name: "Karmen Mines",
        email: "kminesf@topsy.com",
        gender: "Male",
        title: "Administrative Officer",
      },
      {
        id: 17,
        name: "Salome Judron",
        email: "sjudrong@jigsy.com",
        gender: "Male",
        title: "Staff Scientist",
      },
      {
        id: 18,
        name: "Clarinda Marieton",
        email: "cmarietonh@theatlantic.com",
        gender: "Male",
        title: "Paralegal",
      },
    ],
  }),
  methods: {
    searchOnTable() {
      this.searched = searchByName(this.devices, this.search);
    },
    handleNewDevice() {
      this.showNewDeviceDialog = true;
    },
    handleEditDevice(item) {
      this.showEditDeviceDialog = true;
      console.log(item);
    },
  },
  computed: {},
  created() {
    this.searched = this.devices;
  },
};
</script>

<style scoped>
.md-field {
  max-width: 300px;
}
.body_dialog {
  width: 500px;
}
.md-field {
  max-width: 100%;
}
</style>
