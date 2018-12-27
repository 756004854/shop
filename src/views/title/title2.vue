<template lang="">
    <div>
        这是父组件：{{ city }}
        <child :city1="city" @clickMe="getChild" ></child>
        <router-view/> 
    </div>
</template>
<script>
import child from "@/components/childC.vue"
export default {
    data(){
        return{
            city: "北京",
            isMe: 222,
        }
    },
    components:{
        child
    },
    methods: {
        getChild(str){
            this.city = str
        }
    }
}
</script>