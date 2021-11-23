<template>
  <div class="overflow-auto">
    <div class="main mb-1">
      <div>
        <b-button v-b-modal.modal-xl>Thêm +</b-button>
        <b-modal id="modal-xl" size="xl" title="Thông tin nhóm người dùng">
          Tên đăng nhập:<br><b-form-input
          class="w-50 mb-1"
            type="text"
            v-model="first_name"
            placeholder="First name..."
          ></b-form-input>
          Tên người dùng:<br><b-form-input class="w-50" type="text" v-model="last_name" placeholder="Last name..." />
          <b-button @click="addItem" class="mt-1">Thêm</b-button>
        </b-modal>
      </div>
      <div class="ml-5">
        <b-form-input
          type="text"
          v-model="text"
          class="w-100"
          placeholder="Search..."
        ></b-form-input>
      </div>
    </div>
    <b-table
      id="my-table"
      :items="itemSearch"
      :per-page="perPage"
      :current-page="currentPage"
      small
    ></b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
  </div>
</template>

<script>
import {
  BCard,
  BRow,
  BCol,
  BFormInput,
  BButton,
  BTable,
  BMedia,
  BAvatar,
  BLink,
  BBadge,
  BDropdown,
  BDropdownItem,
  BPagination,
  BTooltip,
} from "bootstrap-vue";
import vSelect from "vue-select";

export default {
  components: {
    BCard,
    BRow,
    BCol,
    BFormInput,
    BButton,
    BTable,
    BMedia,
    BAvatar,
    BLink,
    BBadge,
    BDropdown,
    BDropdownItem,
    BPagination,
    BTooltip,

    vSelect,
  },
  data() {
    return {
      first_name:'',
      last_name:'',
      text: "",
      perPage: 10,
      currentPage: 1,
      items: [
        { id: 1, username: "Fred", "Tên người dùng": "Flintstone" },
        { id: 2, username: "Wilma", "Tên người dùng": "Flintstone" },
        { id: 3, username: "Barney", "Tên người dùng": "Rubble" },
        { id: 4, username: "Betty", "Tên người dùng": "Rubble" },
        { id: 5, username: "Pebbles", "Tên người dùng": "Flintstone" },
        { id: 6, username: "Bamm Bamm", "Tên người dùng": "Rubble" },
        { id: 7, username: "The Great", "Tên người dùng": "Gazzoo" },
        { id: 8, username: "Rockhead", "Tên người dùng": "Slate" },
        { id: 9, username: "Pearl", "Tên người dùng": "Slaghoople" },
        { id: 4, username: "Betty", "Tên người dùng": "Rubble" },
        { id: 5, username: "Pebbles", "Tên người dùng": "Flintstone" },
        { id: 6, username: "Bamm Bamm", "Tên người dùng": "Rubble" },
        { id: 7, username: "The Great", "Tên người dùng": "Gazzoo" },
        { id: 8, username: "Rockhead", "Tên người dùng": "Slate" },
        { id: 9, username: "Pearl", "Tên người dùng": "Slaghoople" },
      ],
    };
  },
  methods: {
    changeModal() {
      console.log("fsadfasdfasdf", this.text);
    },
    addItem(){
      return this.items=[...this.items,{id:100,username:this.first_name,"Tên người dùng":this.last_name}]
    }
  },
  computed: {
    rows() {
      return this.items.length;
    },
    itemSearch() {
      if (this.text != "") {
        return this.items.filter((item) => {
          return this.text
            .toLowerCase()
            .split(" ")
            .every((v) => item.username.toLowerCase().includes(v));
        });
      } else {
        return this.items;
      }
    },
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
}
</style>

<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>
