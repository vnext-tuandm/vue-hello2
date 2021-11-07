<template>
    <v-alert type="success" :value="this.alert" class="wrapper-mg">
      {{messages}}
    </v-alert>
</template>
<script>
export default {
    name: "Messages",
    props: ['messages'],
    data() {
        return {
            alert: false
        };
    },
    watch: { 
        messages: {
            handler: function(newVal, oldVal) {
                if(newVal){
                    var self = this
                    console.log('Prop changed: ', newVal, ' | was: ', oldVal)
                    this.alert = true
                    setTimeout(()=>{
                        self.alert = false
                        self.$messages.label = ""
                    },2000)
                }
            },
            deep: true
        }
    },
    created(){
        setTimeout(()=>{
            this.alert = false
            this.$messages.label = ""
        },2000)
    }
}
</script>
<style lang="scss">
    .wrapper-mg{
        position: absolute !important;
        top: 100px;
        right: 10px;
    }
</style>