<template> <!--標籤內放的是此頁面的畫面-->
<v-container>
  <v-row> <!--portal-card1-->
    <v-col cols="12">
      <h1 class="text-center py-10">人員清單</h1>
    </v-col>
  </v-row>
  <v-row> <!--portal-card2-->
    <v-col md="4" cols="12">
      <v-card height="150px">
        <div>
          <h3 class="primary--text">
            <strong>王小明</strong>
          </h3>
          <h4 class="gray--text">男</h4>
        </div>
        <div>
          <span class="gray--text">2021062011493428</span>
        </div>
        <div>
          <v-icon left color="secondary">mdi-gmail</v-icon>
          <span class="secondary--text">Takmig001@takming.edu.tw</span>
        </div>
      </v-card>
    </v-col>
  </v-row>

</v-container>
</template>
<script> /*coding JS，可使用vue api()，是指vue提供的func()，data()其中之一*/
export default {
data() {
return {};
}
};
</script>
<style scoped> /*此頁面的css*/
</style>