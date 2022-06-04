<template>  <!--標籤內放的是此頁面的畫面-->
  <div>
    <v-container>  <!--使用者選單-->
      <v-row>  <!--portal-card1標題-->
        <v-col cols="12">
        <h1 class="text-center py-10">人員清單</h1>
        </v-col>
      </v-row>
      <v-row>  <!--portal-card2資料-->
        <v-col md="4" cols="12" v-for="user in currentUsers" :key="user.UID">
          <v-card height="150px" 
        class="d-flex flex-column px-5 py-3 rounded-lg" @click="triggerPortalCard(user)"> <!--rounded-lg調整v-card圓角--> <!--點擊卡片觸發triggerPortalCard()這項功能 也是方法-->
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
    <v-dialog v-model="dialog" width="535">  <!--彈出視窗-->
      <v-card height="445">
        <v-container class="d-flex flex-column pa-5" fluid style="height:100%">
          <div class="flex-grow-0 pb-8">
            <v-row no-gutters>
              <v-col cols="12">
                <h3 class="primary--text">
                  <strong>{{currentUser.name}}</strong>
                </h3>
              </v-col>
              <v-col cols="12">
                <p class="gray--text">{{currentUser.UID}}</p>
              </v-col>
            </v-row>
          </div>
          <div class="flex-grow-1">
            <v-row class="mb-1" no-gutters>
              <v-col cols="12">
                <h6 class="secondary--text">個人詳細資訊</h6>
              </v-col>
            </v-row>
            <v-row class="mb-2" no-gutters>
              <v-col cols="3">
                <h5>性別</h5>
              </v-col>
              <v-col cols="9">
                <h5>{{handleGender(currentUser.gender)}}</h5>
              </v-col>
            </v-row>
            <v-row class="mb-2" no-gutters>
              <v-col cols="3">
                <h5>行動電話</h5>
              </v-col>
              <v-col cols="9">
                <h5>{{currentUser.phone}}</h5>
              </v-col>
            </v-row>
            <v-row class="mb-2" no-gutters>
              <v-col cols="3">
                <h5>電子信箱</h5>
              </v-col>
              <v-col cols="9">
                <h5>{{currentUser.email}}</h5>
              </v-col>
            </v-row>
            <v-row class="mb-1" no-gutters>
              <v-col cols="3">
                <h5>通訊地址</h5>
              </v-col>
              <v-col cols="9" class="d-flex">
                <h5 class="mr-1">114</h5>
                <h5>{{currentUser.address}}</h5>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="12" class="gray--text">
                <small class="mr-3">加入時間</small>
                <small>{{currentUser.createTime}}</small>
              </v-col>
            </v-row>
          </div>
          <div class="flex-grow-0">
            <v-row no-gutters>
              <v-col cols="12" class="gray--text">
                <small class="mr-3">最後更新時間</small>
                <small>{{currentUser.updateTime}}</small>
              </v-col>
            </v-row>
          </div>
        </v-container>
      </v-card>
    </v-dialog>
  </div>

</template>
<script>  /*coding JS，可使用vue api()，是指vue提供的func()，data()是其一*/
import admin from "../assets/admin.json";
export default {
  data() {
    return {
      users: [],  /*使用者們資訊*/
      page:1,  /*目前頁數(預設第1頁)*/
      dialog: false,
      currentUser: {}  /*記錄目前操作中的使用者*/
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
    },
    triggerPortalCard(user) {
      Object.assign(this.currentUser, user);  /*將傳進來的user複製給currentUser*/
      this.dialog = true;
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