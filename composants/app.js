//crrer un composant

let message={
//transferer des parametres  
props:{
  'type':{type:String,default:'success'}
  ,
  'message':String
},
template:'<div class="alert alert-":class="type" >Salut {{message}}</div>'


};

let counter={
  //generer un nouveau state a chaque fois
  data:function(){
    return {count:0}
  },
  props:{
  start:{type:Number,default:0}
  },
  methods:{
    increment:function(){
      this.count++
    }
  },
  template :'<div><span>{{total}}</span><button @click="increment">increment</button></div>'
  ,computed:{
    total:function()
    {
      return this.start+this.count
    }


  }
}


//initialisation vue.js

new Vue(
//tableau d'options
{
  
  el: '#app' ,//sur quel élément on va grefer le js (élément qui a un id app)
  components:{message,counter},
  //pour les données 
  data:{      //un grand tableau contient tous les variable qui nous souhaitant injecter
  message:'hello'
  },
  

  //pour les methodes
  methods : {
    
    addPerson :function(){
     this.persons.push("hello ");
    }

  }
 

  
  
  

});