<template>
  <div class="form-signin">
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="username"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

     <v-text-field
            :elevation=1
          ></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Item"
      required
    ></v-select>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>

    <v-btn
      color="success"
      class="mr-4"
      @click="handleSubmit"
    >
      Login
    </v-btn>
  </v-form>
  </div>
</template> 
<script>
export default {
    name: "Login",
    data() {
        return {
            username: "",
            password: ""
        }
    },
    methods: {
        handleSubmit(e){
            e.preventDefault()
            console.log("this is login")
            // localStorage.setItem('user', JSON.stringify({is_admin : 1}))
            // localStorage.setItem('jwt', "this is jwt")
            this.$store.dispatch("auth/login", {is_admin : 1})
            // if (this.$route.params.nextUrl != null) {
            //   this.$router.push(this.$route.params.nextUrl)
            // }
            // else {
            //     this.$router.push('admin')
            // }
        }
    }
}
</script>
<style scoped src="@/assets/css/login.css">
    
</style>