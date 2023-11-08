<template>
  <q-page class="container bg-white flex">
<<<<<<< HEAD:src/pages/admin/reports/AutoRoomMaidPage.vue
    <page-subheading />
    <CardComponent class="card q-py-md">
      <div class="subbg"></div>
      <div class="bg">
      <div class="text">
        <p class="text-weight-medium text-center">
Room Boy Cleaning Sheet
        </p>
      </div>
      </div>
    <CardComponent class="wtext">
      <div class="text">
        <p>Number of Person: <input type="text"></p>
        <div class="loc1">
          <p>Location: <select>
            <option value="1"> </option>
            <option value="2">Pilihan</option>
            <option value="3">Pilihan</option>
          </select></p>
        <div class="loc2">
          <p>Location: <input type="text"></p>
      </div>
    </div>
  </div>
  <div class="ch">
  <q-icon name="select_check_box"/>
</div>
  <div class="icon">
  <q-icon name="print" />
</div>
 <table width="200%" height="20%">
  <th>Loc</th>
  <th>No</th>
  <th>Room No</th>
  <th>Person In Change</th>
  <th>CP</th>
  <th>Room Status</th>
  <th>Main Guest Name</th>
  <th>Arrival</th>
  <th>DepTime</th>
  <th>Net</th>
  <th>Remark</th>
  <tr>
          <td>#212121</td>
          <td>#2121</td>
          <td>10:00:02</td>
          <td>10:00:02</td>
          <td>Title<br>
            Subtitle
          </td>
          <td>Title<br>
            Subtitle
          </td>
          <td>Title<br>
            Subtitle
          </td>
          <td>Title<br>
            Subtitle
          </td>
          <td>Title<br>
            Subtitle
          </td>
          <td>Title<br>
            Subtitle</td>
            <td>Title<br>
            Subtitle</td>
        </tr>
<tr>
  <td>
  #001B3D
</td>
<td>#001B</td>
<td>Title<br>
            Subtitle
          </td>
          <td>Title<br>
            Subtitle
          </td>

          <td>Title<br>
            Subtitle
          </td>
          <td>Title<br>
            Subtitle
          </td>
          <td>Title<br>
            Subtitle
          </td>
          <td>Title<br>
            Subtitle
          </td>
          <td>Title<br>
            Subtitle
          </td>
          <td>Title<br>
            Subtitle</td>
            <td>Title<br>
            Subtitle</td>
</tr>
<tr>
  <td>#242424</td>
  <td>#2424</td>
  <td>Title<br>
            Subtitle
          </td>
          <td>Title<br>
            Subtitle
          </td>
          <td>Title<br>
            Subtitle
          </td>
          <td>Title<br>
            Subtitle
          </td>
          <td>Title<br>
            Subtitle
          </td>
          <td>Title<br>
            Subtitle
          </td>
          <td>Title<br>
            Subtitle
          </td>
          <td>Title<br>
            Subtitle</td>
            <td>Title<br>
            Subtitle</td>
</tr>
<tr>
  <td>
    #616161
  </td>
  <td>#6161</td>
  <td>Title<br>
            Subtitle
          </td>
          <td>Title<br>
            Subtitle
          </td>
          <td>Title<br>
            Subtitle
          </td>
          <td>Title<br>
            Subtitle
          </td>
          <td>Title<br>
            Subtitle
          </td>
          <td>Title<br>
            Subtitle
          </td>
          <td>Title<br>
            Subtitle
          </td>
          <td>Title<br>
            Subtitle</td>
            <td>Title<br>
            Subtitle</td>
            </tr>
 </table>
  </CardComponent>
  </CardComponent>
=======
    <h1 class="tw-text-4xl tw-font-bold">Auto Room Maid</h1>
>>>>>>> f74da66e8268fc6e49f2ee72acc668cdaefd8aa6:src/pages/dashboard/reports/AutoRoomMaidPage.vue
  </q-page>
</template>

<script lang="ts">
<<<<<<< HEAD:src/pages/admin/reports/AutoRoomMaidPage.vue
import PageSubheading from 'src/components/PageSubheading.vue';
=======
>>>>>>> f74da66e8268fc6e49f2ee72acc668cdaefd8aa6:src/pages/dashboard/reports/AutoRoomMaidPage.vue
export default {
  name: 'AutoRoomMaidPage',
};

</script>
<style>
div.text{
  position: relative;
  bottom: 18px;
  font-size: 10px;
}
.subbg {
 border-radius: 10px;
  position: relative;
  top:35%;
  left: 50px;
  height: 10%;
  width: 200%;
  height: 50px;
  background-color: rgb(177, 237, 198);
}
.bg{
  border-top-left-radius: 0px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: rgb(255, 252, 249);
  position: relative;
  top: 30%;
  left: 50px;
  height: 95%;
  width: 200%;
  box-shadow:0px 2px 0px rgb(139, 133, 133);
}
div.text{
  font-size: 13px;
  font-weight: bolder;
}
.loc1 {
  font-size: 13px;
  position: relative;
  left: 55px;
}
.loc2{
  position: relative;
  left: 240px;
  bottom: 83px;
}
select {
  width: 34%;
}
.wtext{
position: relative;
bottom: 60%;
left: 80px
}
th {
  background-color: rgba(6, 149, 80,1);
  color: white;
  padding: 7px;
}
tr {
  height: 70px;
  padding: 10px;
}
.icon {
  float: right;
  position: relative;
  left: 520px;
font-size: 35px;
color: rgba(6, 149, 80,1);
}
.ch {
  float: right;
  position: relative;
  left: 320px;
font-size: 35px;
color: rgba(6, 149, 80,1);
}
</style>


