<template>
  <!-- 彈出視窗 -->
  <v-dialog v-model="dialog" width="535">
    <v-card height="445">
      <v-container class="d-flex flex-column pa-5" fluid style="height:100%">
        <div class="flex-grow-0 pb-8">
          <v-row no-gutters>
            <v-col cols="12">
              <h3 class="primary--text">
                <strong>王小明</strong>
              </h3>
            </v-col>
            <v-col cols="12">
              <p class="gray--text">2021062011553350</p>
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
              <h5>男</h5>
            </v-col>
          </v-row>
          <v-row class="mb-2" no-gutters>
            <v-col cols="3">
              <h5>行動電話</h5>
            </v-col>
            <v-col cols="9">
              <h5>0987654321</h5>
            </v-col>
          </v-row>
          <v-row class="mb-2" no-gutters>
            <v-col cols="3">
              <h5>電子信箱</h5>
            </v-col>
            <v-col cols="9">
              <h5>Takming001@takming.edu.tw</h5>
            </v-col>
          </v-row>
          <v-row class="mb-1" no-gutters>
            <v-col cols="3">
              <h5>通訊地址</h5>
            </v-col>
            <v-col cols="9" class="d-flex">
              <h5 class="mr-1">114</h5>
              <h5>台北市內湖區環山路一段56號</h5>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12" class="gray--text">
              <small class="mr-3">加入時間</small>
              <small>2021-06-20 11:49:17</small>
            </v-col>
          </v-row>
        </div>
        <div class="flex-grow-0">
          <v-row no-gutters>
            <v-col cols="12" class="gray--text">
              <small class="mr-3">最後更新時間</small>
              <small>2021-06-20 11:49:17</small>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-card>
  </v-dialog>
</template>