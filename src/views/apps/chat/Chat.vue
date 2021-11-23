<template>
  <div>
    <div>
      <div class="main">
        <div class="main1">
          <p>Tên menu</p>
          <p>
            <b-form-input
              v-model="name"
              placeholder="Nhập tên menu"
              class=""
            ></b-form-input>
          </p>
        </div>
        <div class="main1">
          <p>Độ ưu tiên</p>
          <p>
            <b-form-input
              v-model="displayOrder"
              placeholder="Độ ưu tiên"
              class=""
            ></b-form-input>
          </p>
        </div>
      </div>
      <div class="main">
        <div class="main1">
          <p>Icon</p>
          <p>
            <select class="form-control" v-model="pictureFile">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </p>
        </div>
        <div class="main1">
          <p>Đường dẫn</p>
          <p>
            <b-form-input placeholder="Nhập đường dẫn" class=""></b-form-input>
          </p>
        </div>
      </div>
      <div class="main">
        <div class="main1">
          <p>Menu Cha</p>
          <p>
            <select class="form-control" v-model="parentId">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </p>
        </div>
        <div class="main1">
          <p>Trạng Thái</p>
          <p>
            <select class="form-control" v-model="publish">
              <option value="1">Có hiệu lực</option>
              <option value="2">Vô hiệu hóa</option>
            </select>
          </p>
        </div>
      </div>
      <div class="main23">
        <b-button @click="addMenu" variant="success" class="ml-1"
          >Thêm</b-button
        >
        <b-button @click="editMenu" class="ml-1">Sửa</b-button>
        <b-button @click="deleteMenu" variant="success" class="ml-1">
          Xóa</b-button
        >
        <b-button variant="success" class="ml-1"
          >Sao chép</b-button>
      </div>
    </div>
    <div class="flex111 mt-1">
      <p class="textp">Danh sách lịch sử tác động hệ thống</p>
      <div>
        <table class="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Tên menu</th>
              <th>Độ ưu tiên</th>
              <th>Icon</th>
              <th>Đường dẫn</th>
              <th>Cấp</th>
              <th>Menu cha</th>
              <th>Ngày tạo</th>
              <th>Ngày sửa</th>
              <th>Người tạo</th>
              <th>Người sửa</th>
              <th>Hệ Thống"></th>
              <th>Trạng Thái</th>
            </tr>
          </thead>
          <tbody v-for="(item, index) in menus" :key="index">
            <tr>
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.publish }}</td>
              <td>{{ item.pictureFile }}</td>
              <td>{{ item.menuLevel }}</td>
              <td></td>
              <td>{{ item.parentId }}</td>
              <td>{{ item.createdDate }}</td>
              <td>{{ item.modifiedDate }}</td>
              <td>{{ item.createdUser }}</td>
              <td>{{ item.modifiedUser }}</td>
              <td>{{ item.sysId }}</td>
              <td>{{ item.status }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
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

import { mapState } from "vuex";
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
      items: [
        {
          "#": "",
          ID: "",
          "Tên thiết bị": "",
          "Độ ưu tiên": "",
          Icon: "",
          "Đường dẫn": "",
          Cấp: "",
          "Menu cha": "",
          "Ngày tạo": "",
          "Ngày sửa": "",
          "Người tạo": "",
          "Người sửa": "",
          "Hệ thông": "",
        },
      ],
      id: "",
      name: "",
      displayOrder: "",
      pictureFile: "",
      detailFile: "",
      parentId: "",
      publish: "",
      checked: false,
      dataTest: {},
      abc: null,
    };
  },
  computed: {
    ...mapState({
      menus: (state) => state.menu.menus,
    }),
  },
  mounted() {
    this.getMenu();
    console.log(this.menus);
  },
  methods: {
    getMenu() {
      this.$store.dispatch("menu/getMenu");
    },
    deleteMenu(){
      var axios = require('axios');
var data = JSON.stringify({
  id: this.id
});

var config = {
  method: 'delete',
  url: 'http://10.252.10.155:8090/api/v1/menu-manage/delete-menu',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
    },
    addMenu() {
      var axios = require("axios");
      var data = JSON.stringify({
        name: this.name,
        displayOrder: this.displayOrder,
        pictureFile: "far fa-circle",
        detailFile: this.detailFile,
        parentId: this.parentId,
        publish: this.publish,
      });

      var config = {
        method: "post",
        url: "http://10.252.10.155:8090/api/v1/menu-manage/create-menu",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    bindValue(menu) {
      this.checked = false ? this.checked = true : this.checked = false;
        this.name = menu.name;
        this.id = menu.id;
        this.pictureFile = menu.pictureFile;
        this.displayOrder = menu.displayOrder;
        this.parentId = menu.parentId;
        this.publish = menu.publish;
    },
    editMenu (  ){
      var axios = require('axios');
var data = JSON.stringify({
  "id": this.id,
  "name": "aleeso",
  "displayOrder": 1,
  "pictureFile": "far fa-circle",
  "detailFile": null,
  "parentId": 671,
  "publish": 1
});

var config = {
  method: 'put',
  url: 'http://10.252.10.155:8090/api/v1/menu-manage/edit-menu',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

    }

  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.main1 {
  width: 49%;
}

.flex111 {
  border: 1px solid gainsboro;
  padding: 10px;
}

.main23 {
  display: flex;
  justify-content: center;
}

.textp {
  font-weight: 600;
}
</style>

<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>
