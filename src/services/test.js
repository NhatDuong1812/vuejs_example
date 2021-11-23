import http from "../AppConfig";

class Test {
    getDataTest(body) {
      return http.get(`menu-manage/get-all-menu`);
    }
    
  }
  
  export default new Test();