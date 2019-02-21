//initialisation vue.js

new Vue(
//tableau d'options
{
  
  el: '#app' ,//sur quel élément on va grefer le js (élément qui a un id app)
  
  //pour les données 
  data:{ 
  firstname :"jean",
  lastname :"delatour",
  fullname :''   
 
  },
  //proprites qui depend d'autre proprietes
  computed:{
   fullname :  {
    get:function(){
      console.log("cls called")
    return this.firstname+' '+this.lastname

  },
  set:function(value){
  let parts=value.split(' ')
  this.firstname=parts[0]
  this.lastname=parts[1]
  }
   }
   //lorque une variabla a ete modifié
  watch :{
    fullname:function(value){
      console.log('watch ',value)
    }
  }
  }

  

  
  
  

});