<template>
    <v-alert :type="this.types ? 'success': 'error'" :value="this.alert" class="wrapper-mg">
      {{messages}}
    </v-alert>
</template>
<script>
export default {
    name: "Messages",
    props: ['messages', 'types'],
    data() {
        return {
            alert: false,
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
                        self.$messages.types = false
                    },2000)
                }
            },
            deep: true
        },
        types:{
            handler: function(newVal, oldVal) {
                console.log('Prop changed: ', newVal, ' | was: ', oldVal)
            },
            deep: true
        }
    },
    created(){
        setTimeout(()=>{
            this.alert = false
            this.$messages.label = ""
            this.$messages.types = false
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