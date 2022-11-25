<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <v-text-field
            v-model="info.first_name"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="12">
          <v-text-field
            v-model="info.last_name"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="12">
          <v-text-field
            v-model="info.email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="12">
          <v-text-field
            v-model="info.picture_link"
            :rules="emailRules"
            label="Picture Link"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      info: {
        first_name: "",
        last_name: "",
        email: "",
        picture_link: "",
      },
    };
  },
  created() {
    let apiURL = `https://reqres.in/api/users/${this.$route.params.id}`
    axios.get(apiURL).then((res) => {
      this.info = res.data
    })
  },
  methods: {
    handleUpdateForm(){
      let apiURL = `https://reqres.in/api/users/${this.$route.params.id}`

      axios.put(apiURL,this.Info).then((res)=>{
        console.log(res);
        this.$route.push('/view')
      })
    }
  },
}
</script>

<style>
</style>
