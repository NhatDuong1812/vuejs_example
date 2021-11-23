<template lang="">
<div class="root_main">
  <div class="logout">
          <b-dropdown-item
      link-class="d-flex align-items-center"
      @click="logout"
    >
      <feather-icon
        size="16"
        icon="LogOutIcon"
        color="#fff"
        class="mr-50"
      />
      <span style="color:#fff;cursor: pointer">Logout</span>
    </b-dropdown-item>
    </div>
  <div class="w-50 ml-0 mr-0 mx-auto text-center main">
      <div class="text-center hta" @click="login1">
        <div class="icon_hta">
            <book-open-icon size="1.5x" class="custom-class"></book-open-icon>
        </div>
        <div class="text_hta">
          <span>Phần mềm quản lý và điều khiển thiết bị từ các trạm quan trắc</span>
        </div>
  </div>
  <div class="text-center mt-1 hta" @click="login2">
      <div class="icon_hta">
            <clipboard-icon size="1.5x" class="custom-class"></clipboard-icon>
        </div>
      <div class="text_hta">
        <span>Phần mềm quản lý, giám sát và khai thác số liệu</span>
      </div>
  </div>
  <div class="text-center mt-1 hta">

      <div class="icon_hta">
            <command-icon size="1.5x" class="custom-class"></command-icon>  
        </div>
      <div class="text_hta">
            <span>Phần mềm tích hợp dữ liệu</span>
      </div>
  </div>
  <div class="text-center mt-1 hta">
      
            <div class="icon_hta">
            <folder-icon size="1.5x" class="custom-class"></folder-icon>
        </div>
      <div class="text_hta">
            <span>Phần mềm giám sát điều hành hồ chứa</span>
      </div>
  </div>
  </div>
  </div>
</template>
<script>
import { BookOpenIcon } from "vue-feather-icons";
import { ClipboardIcon } from "vue-feather-icons";
import { CommandIcon } from "vue-feather-icons";
import { FolderIcon } from "vue-feather-icons";
import useJwt from "@/auth/jwt/useJwt";
import { initialAbility } from "@/libs/acl/config";

// import core from '../../../assets/images/pages/login-v2-dark.svg'
export default {
  components: {
    BookOpenIcon,
    ClipboardIcon,
    CommandIcon,
    FolderIcon,
  },
  methods: {
    logout() {
      // Remove userData from localStorage
      // ? You just removed token from localStorage. If you like, you can also make API call to backend to blacklist used token
      localStorage.removeItem(useJwt.jwtConfig.storageTokenKeyName);
      localStorage.removeItem(useJwt.jwtConfig.storageRefreshTokenKeyName);

      // Remove userData from localStorage
      localStorage.removeItem("userData");

      // Reset ability
      this.$ability.update(initialAbility);

      // Redirect to login page
      
      if(confirm('Bạn chắc chắn muốn đăng xuất !')){
        return this.$router.push({ name: "auth-login" });
      }
    },
    login1(){
      let routeData=this.$router.resolve({ name: "dashboard-ecommerce" });
      window.open(routeData.href)
    },
    login2(){
      let routeData=this.$router.resolve({ name: "error-404" });
      window.open(routeData.href)
    }
  },
};
</script>

<style lang="scss">
.main {
  position: relative;
  top: 25%;
  left: 5%;
}
.hta {
  display: flex;
  width: 550px;
  height: 60px;
  font-weight: 500;
  border: 2px solid #fff;
  border-radius: 5px;
  // background-color: #fff;
  box-shadow:0 4px 24px 0 rgb(34 41 47 / 10%)
}
.icon_hta {
  padding: 0px 20px;
  line-height: 60px;
  border-right: 2px solid #fff;
  color: #fff;
}
.text_hta {
  line-height: 60px;
  padding-left: 10px;
  color: #fff;
}
.text_hta:hover {
  color: black;
  font-weight: 500;
}
.hta:hover {
  margin-left: 20px;
  cursor: pointer;
  color: black;
  .icon_hta {
    color: black;
  }
}
.logout {
  position: absolute;
  top: 10px;
  right: 50px;
}
.root_main {
  background-image: url("https://lgsp.monre.gov.vn/static/media/007_Vectordepvn_trongdong-02.55d18e0f.svg");
  background-position: center center;
  background-repeat: no-repeat;
  background-color: #539335;
  height: 100vh;
}
</style>