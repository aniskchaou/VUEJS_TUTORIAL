//initialisation vue.js

new Vue(
//tableau d'options
{
  
  el: '#app' ,//sur quel élément on va grefer le js (élément qui a un id app)
  
  //pour les données 
  data:{      //un grand tableau contient tous les variable qui nous souhaitant injecter
  message :'salut les gens !',
  link : 'http://www.google.com',
  linkTitle :'GOOGLE',
  success :true,
  persons : ['A','B','C'] //liste de personne 
  },
  

  //pour les methodes
  methods : {
    close :function() {
      // accés a la proprietes success
      this.success=false;
      //changer la valeur de message 
      this.message="fermé"
    },
    style:function() {
      if (this.success) {
         return {'color':'blue'}

      }else{
         return {'color':'green'}

      }
    }
  }
  
  

});