//initialisation vue.js

new Vue(
//tableau d'options
{
  
  el: '#app' ,//sur quel élément on va grefer le js (élément qui a un id app)
  
  //pour les données 
  data:{      //un grand tableau contient tous les variable qui nous souhaitant injecter
  seconds : 0,
  persons : ['A','B','C'] //liste de personne 
  },
  

  //pour les methodes
  methods : {
    
    addPerson :function(){
     this.persons.push("hello ");
    }

  },
  //evenement mounted et beforeCreate
  mounted:function (){//lorque l'element est monté
      console.log(this.$el);
      setInterval(()=>{
        this.seconds++
      },1000)
    },
    beforeCreate :function(){
      console.log(this.$el);
    }
  destroyed :function(){
     console.log(this.$el);
  }  

  
  
  

});