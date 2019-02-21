<template>
<div class="counter">

{{count}}
<i @click="increment()">+</i>
</div>
</template>
<script>

export default{
	
   data(){

    return {count :0}

   },methods:{
    
    increment(){
     
     this.count++

    }

   }


}





</script>