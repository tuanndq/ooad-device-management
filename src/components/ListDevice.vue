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

        <md-button class="md-primary md-raised" @click="handleNewDevice"
          >Create New Device</md-button
        >

        <md-field md-clearable class="md-toolbar-section-end">
          <md-input
            placeholder="Search by name..."
            v-model="search"
            @input="searchOnTable"
          />
        </md-field>
      </md-table-toolbar>

      <md-table-empty-state md-label="No devices found"> </md-table-empty-state>

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
          <label for="deviceType">Device Type</label>
          <md-select
            v-model="newDevice.deviceType"
            name="deviceType"
            id="deviceType"
          >
            <md-option value="flightCar">Fight car</md-option>
            <md-option value="flightBike">Flight bike</md-option>
            <md-option value="drone">Drone</md-option>
            <md-option value="plane">plane</md-option>
          </md-select>
        </md-field>

        <md-field>
          <label for="status">Status</label>
          <md-select v-model="newDevice.status" name="status" id="status">
            <md-option value="1">Active</md-option>
            <md-option value="0">In-Active</md-option>
            <md-option value="2">Maintenance</md-option>
          </md-select>
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
          <label for="deviceType">Device Type</label>
          <md-select
            v-model="editDevice.deviceType"
            name="deviceType"
            id="deviceType"
          >
            <md-option value="flightCar">Fight car</md-option>
            <md-option value="flightBike">Flight bike</md-option>
            <md-option value="drone">Drone</md-option>
            <md-option value="plane">plane</md-option>
          </md-select>
        </md-field>

        <md-field>
          <label for="status">Status</label>
          <md-select v-model="editDevice.status" name="status" id="status">
            <md-option value="1">Active</md-option>
            <md-option value="0">In-Active</md-option>
            <md-option value="2">Maintenance</md-option>
          </md-select>
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
    deviceTypeOptions: [
      "Jim Halpert",
      "Dwight Schrute",
      "Michael Scott",
      "Pam Beesly",
      "Angela Martin",
      "Kelly Kapoor",
      "Ryan Howard",
      "Kevin Malone",
      "Creed Bratton",
      "Oscar Nunez",
      "Toby Flenderson",
      "Stanley Hudson",
      "Meredith Palmer",
      "Phyllis Lapin-Vance",
    ],
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
  }),
  methods: {
    searchOnTable() {
      this.searched = searchByName(this.devices, this.search);
    },

    /*************************************/
    /*             New device            */
    /* ***********************************/
    handleNewDevice() {
      this.showNewDeviceDialog = true;
    },

    createNewDevice() {
      this.$store.dispatch("createDevice", this.newDevice);
    },

    /*************************************/
    /*             Edit device           */
    /* ***********************************/
    handleEditDevice(item) {
      this.showEditDeviceDialog = true;
      console.log(item);
    },
  },
  computed: {
    devices() {
      return this.$store.getters["getDevices"];
    },
  },
  created() {
    this.searched = this.devices;
  },
  mounted() {
    this.$store.dispatch("getDevices");
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
