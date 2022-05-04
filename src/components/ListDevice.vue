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
        <md-table-cell md-label="Type" md-sort-by="type">{{
          item.type
        }}</md-table-cell>
        <md-table-cell md-label="Maximum Guess" md-sort-by="maximumGuess">{{
          item.maximumGuess
        }}</md-table-cell>
        <md-table-cell md-label="Status" md-sort-by="status">{{
          item.status === 1
            ? "Active"
            : item.status === 0
            ? "In-Active"
            : "Maintenance"
        }}</md-table-cell>
        <md-table-cell md-label="Subcribe Time" md-sort-by="subcribeTime">{{
          new Date(item.subcribeTime).toLocaleDateString()
        }}</md-table-cell>
        <md-table-cell md-label="Expired Time" md-sort-by="expTime">{{
          new Date(item.expTime).toLocaleDateString()
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
          <md-select v-model="newDevice.type" name="deviceType" id="deviceType">
            <md-option value="flightCar">Fight car</md-option>
            <md-option value="flightBike">Flight bike</md-option>
            <md-option value="drone">Drone</md-option>
            <md-option value="plane">plane</md-option>
          </md-select>
        </md-field>

        <md-field>
          <label>Device Name</label>
          <md-input v-model="newDevice.name"></md-input>
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

        <md-datepicker v-model="newDevice.subcribeTime" md-immediately>
          <label>Subcribe Time</label>
        </md-datepicker>

        <md-datepicker v-model="newDevice.expTime" md-immediately>
          <label>Expired Time</label>
        </md-datepicker>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click="showNewDeviceDialog = false"
          >Close</md-button
        >
        <md-button class="md-primary" @click="createNewDevice">Save</md-button>
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
            v-model="editDevice.type"
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
          <label>Device Name</label>
          <md-input v-model="editDevice.name"></md-input>
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

        <md-datepicker v-model="editDevice.subcribeTime" md-immediately>
          <label>Subcribe Time</label>
        </md-datepicker>

        <md-datepicker v-model="editDevice.expTime" md-immediately>
          <label>Expired Time</label>
        </md-datepicker>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click="showEditDeviceDialog = false"
          >Close</md-button
        >
        <md-button class="md-primary" @click="onEditDevice">Update</md-button>
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
    devices: [],
    showNewDeviceDialog: false,
    showEditDeviceDialog: false,
    newDevice: {
      name: "",
      type: "",
      status: 0,
      maximumGuess: 0,
      subcribeTime: "",
      expTime: "",
    },
    editDevice: {
      id: null,
      name: "",
      type: "",
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

    async createNewDevice() {
      this.showNewDeviceDialog = false;
      const { type, name, status, maximumGuess, subcribeTime, expTime } =
        this.newDevice;
      const data = {
        type,
        name,
        status,
        maximumGuess,
        subcribeTime,
        expTime,
      };
      data.subcribeTime = new Date(this.newDevice.subcribeTime).toISOString();
      data.expTime = new Date(this.newDevice.expTime).toISOString();
      await this.$store.dispatch("createDevice", data);
    },

    /*************************************/
    /*             Edit device           */
    /* ***********************************/
    handleEditDevice(item) {
      this.showEditDeviceDialog = true;
      this.editDevice = {
        id: item.id,
        name: item.name,
        type: item.type,
        status: item.status,
        maximumGuess: item.maximumGuess,
        subcribeTime: item.subcribeTime,
        expTime: item.expTime,
      };
    },

    async onEditDevice() {
      await this.$store.dispatch("updateDevice", {
        deviceId: this.editDevice.id,
        data: this.editDevice,
      });
      this.showEditDeviceDialog = false;
    },
  },
  computed: {},
  created() {},
  async mounted() {
    await this.$store.dispatch("getDevices");
    const { devices } = this.$store.getters["getDevices"];
    this.devices = devices;
    this.searched = devices;
  },
};
</script>

<style scoped>
.body_dialog {
  width: 500px;
  overflow-y: hidden;
}
.md-field {
  max-width: 100%;
}
</style>
