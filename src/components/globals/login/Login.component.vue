<template>
<v-container fluid fill-height class="wrapper-lg d-flex">
    <v-card class="wrapper-card-lg" width="50%">
        <strong>ログイン</strong>
        <div class="input-container ip-email">
          <img src="@/assets/images/icEmail.svg" class="icon"/>
          <v-text-field
            :type="text"
            name="email"
            class="ma-0 pa-0"
            :placeholder="$t('users.email')"
            single-line
            solo
            flat
            hide-details
          ></v-text-field>
        </div>

        <div class="input-container">
          <img src="@/assets/images/icPassword.svg" class="icon"/>
          <v-text-field
            :type="show3 ? 'text' : 'password'"
            name="password"
            value="wqfasds"
            class="ma-0 pa-0"
            :placeholder="$t('users.password')"
            single-line
            solo
            flat
            hide-details
          >
          <template slot="append">
            <v-icon :class="!show3 ? 'd-none': 'd-block'" @click="show3 = !show3" size="18">mdi-eye</v-icon>
            <v-icon :class="show3 ? 'd-none': 'd-block'" @click="show3 = !show3" size="18">mdi-eye-off</v-icon>
          </template>
          </v-text-field>
        </div>
        
        <label>パスワードをお忘れの方はこちら</label>
        <button
          class="btn-login"
          @click="handleSubmit"
        >
          {{ $t('users.login') }}
        </button>
    </v-card>
</v-container>
</template> 
<script>
import LayoutDefault from '../../../layouts/LayoutDefault.vue'
export default {
    name: "Login",
    data() {
        return {
            email: "",
            password: "",
            show3: false,
        }
    },
     created() {
      this.$emit('update:layout', LayoutDefault);
    },
    methods: {
        handleSubmit(e){
            e.preventDefault()
            console.log("this is login")
            // localStorage.setItem('user', JSON.stringify({is_admin : 1}))
            // localStorage.setItem('jwt', "this is jwt")
            // this.$store.dispatch("auth/login", {is_admin : 1})
            // if (this.$route.params.nextUrl != null) {
            //   this.$router.push(this.$route.params.nextUrl)
            // }
            // else {
            //     this.$router.push('admin')
            // }
            this.$messages.label = "Login successfully"
        }
    }
}
</script>
<style lang="scss">
    @import "../../../commons/common.style.scss";
    @import "./Login.style.scss";
</style>