<template> <!--標籤內放的是此頁面的畫面-->
<v-container>
  <v-row> <!--portal-card標題-->
    <v-col cols="12">
      <h1 class="text-center py-10">人員清單</h1>
    </v-col>
  </v-row>
  <v-row> <!--portal-card資料-->
    <v-col md="4" cols="12">
      <v-card height="150px" 
      class="d-flex flex-column px-5 py-3 rounded-lg"> <!--rounded-lg調整v-card圓角-->
        <div class="d-flex align-center flex-grow-0"> <!--name&sex--> <!--flex-grow比例分配--> <!--align-center水平對齊-置中-->
          <h3 class="primary--text">
            <strong>{{user.name}}</strong>
          </h3>
          <h4 class="gray--text ml-auto">{{user.gender}}</h4>
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

</v-container>
</template>
<script> /*coding JS，可使用vue api()，是指vue提供的func()，data()是其一*/
export default {
data() {
return {
  user: {
    UID: "2021062011493428",
    SID: "ROOT",
    CID: "",
    name: "王小小",
    phone: "0980700344",
    gender: "Male",
    email: "Takming001@takming.edu.tw",
    zip: 100,
    address: "臺北市內湖區環山路一段56號",
    createTime: "2022-06-02 23:35:37",
    updateTime: "2022-06-02 23:35:37",
    isDelete: null
  }
};
}
};
</script>
<style scoped> /*此頁面的css*/
</style>