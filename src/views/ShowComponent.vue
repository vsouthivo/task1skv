<template>
  <div class="showInformation">
    <v-list-subheader>Show Information</v-list-subheader>
    <v-row no-gutters>
      <v-col cols="12" sm="1">
        <div class="caption ma-2 pa-2">ID</div>
      </v-col>
      <v-col cols="12" sm="3">
        <div class="caption ma-2 pa-2">Avatar</div>
      </v-col>
      <v-col cols="12" sm="2">
        <div class="caption ma-2 pa-2">First Name</div>
      </v-col>
      <v-col cols="12" sm="2">
        <div class="caption ma-2 pa-2">Last Name</div>
      </v-col>
      <v-col cols="12" sm="2">
        <div class="caption ma-2 pa-2">Email</div>
      </v-col>
      <v-col cols="12" sm="1">
        <div class="caption ma-2 pa-2">Edit</div>
      </v-col><v-col cols="12" sm="1">
        <div class="caption ma-2 pa-2">Delete</div>
      </v-col>
    </v-row>

    <!-- Show API Information -->
    
    <v-row no-gutters v-for="info in information" :key="info.id">
      <v-col cols="12" sm="2">
        <div class="caption ma-2 pa-2">{{info.id}}</div>
      </v-col>
      <v-col cols="12" sm="4">
        <v-responsive class="caption ma-2 pa-2">
          <img :src="info.avatar" alt="">
        </v-responsive>
      </v-col>
      <v-col cols="12" sm="2">
        <div class="caption ma-2 pa-2">{{info.first_name}}</div>
      </v-col>
      <v-col cols="12" sm="2">
        <div class="caption ma-2 pa-2">{{info.last_name}}</div>
      </v-col>
      <v-col cols="12" sm="2">
        <div class="caption ma-2 pa-2">{{info.email}}</div>
      </v-col>
      <v-col cols="12" sm="1">
        <div class="caption ma-2 pa-2">
          <v-btn><router-link :to="{name: 'edit', params: {id:info._id}}"></router-link></v-btn>
        </div>
      </v-col><v-col cols="12" sm="1">
        <div class="caption ma-2 pa-2">
          <v-btn><router-link @click.prevent="deleteInformation(info._id)"></router-link></v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      information: {}
    }
  },
  created() {
    let apiURL = 'https://reqres.in/api/users';
    axios.get(apiURL).then(res =>{
      this.information = res.data
    })
  },
  methods: {
    deleteInformation(id){
      let apiURL =`https://reqres.in/api/users/${id}`;
      let indexOfArrayItem = this.information.findIndex(i => i._id===id);
      
      if(window.confirm("Do you really want to delete")){
        axios.delete(apiURL).then(()=>{
          this.information.splice(indexOfArrayItem,1)
        }) 
      }
    }
  },
};
</script>

<style>
</style>


