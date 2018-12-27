<template>
    <div class="child">
        <button @click="clickMe">{{city1}}</button>
    </div>
</template>
<script>
export default {
    name: "child",
    props:{
        city1:{
            type: String
        }
    },
    data(){
        return {
            city: "河北"
        }
    },
    methods:{
        clickMe(){
            this.$emit("clickMe", this.city)
        }
    }
}
</script>