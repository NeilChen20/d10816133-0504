<template>  <!--標籤內放的是此頁面的畫面-->
  <v-container>
    <v-row>  <!--portal-card1標題-->
      <v-col cols="12">
        <h1 class="text-center py-10">人員清單</h1>
      </v-col>
    </v-row>
    <v-row>  <!--portal-card2資料-->
      <v-col md="4" cols="12" v-for="user in currentUsers" :key="user.UID">
        <v-card height="150px" 
      class="d-flex flex-column px-5 py-3 rounded-lg"> <!--rounded-lg調整v-card圓角-->
          <div class="d-flex align-center flex-grow-0"> <!--name&sex--> <!--flex-grow比例分配--> <!--align-center水平對齊-置中-->
            <h3 class="primary--text">
              <strong>{{user.name}}</strong>
            </h3>
            <h4 class="gray--text ml-auto">{{handleGender(user.gender)}}</h4> <!--將handleGender方法寫入h4-->
          </div>
          <div class="flex-grow-0"> <!--num-->
            <span class="gray--text">{{user.UID}}</span>
          </div>
          <div class="d-flex align-end flex-grow-1"> <!--mail--> <!--align-end水平置中-下-->
            <v-icon left color="secondary">mdi-gmail</v-icon>
            <span class="secondary--text">{{user.email}}</span>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mt-8">  <!--換頁選單--> <!--mt-x頁數與上列資料的距離-->
      <v-col cols="12">
        <v-pagination v-model="page" :length="totalPages"/>
      </v-col>
    </v-row>

  </v-container>
</template>
<script>  /*coding JS，可使用vue api()，是指vue提供的func()，data()是其一*/
import admin from "../assets/admin.json";
export default {
  data() {
    return {
      users: [],  /*使用者們資訊*/
      page:1,  /*目前頁數(預設第1頁)*/
    };
  },
  created() {  /*進入畫面前獲取資料*/
    this.getUsers();
  },
  methods: {  /*執行獲取資料並將資料放入*/
    getUsers() {  /*從admin.json放入資料*/
      this.users = admin.data.user;
    },
    handleGender(type) {  /*性別判斷*/
      if (type === "M") return "男";
      if (type === "W") return "女";
      return "其他";
    }
  },
  computed: { /*換頁改變資料呈現*/
    totalPages() {  /*計算總頁數*/
      return Math.ceil(this.users.length / 9);
    },
    currentUsers() {  /*計算目前頁面使用者們*/
      const begin = (this.page -1) * 9;
      const end = begin + 9;
      return this.users.slice(begin, end);
    }
  },

};
</script>
<style scoped> /*此頁面的css*/
</style>