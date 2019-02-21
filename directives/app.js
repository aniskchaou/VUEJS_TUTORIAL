//creer une directive
let salut=Vue.directive('salut',{
  //lorsque attribut sera ajouter
bind:  function(el,binding,vnode){
console.log(el,binding)
el.value=binding.value
console.log('bind')
},

update :function(el,binding,vnode,oldnode){
  console.log('updated')
}             

})




//initialisation vue.js

new Vue(
//tableau d'options
{
  
  el: '#app' ,//sur quel élément on va grefer le js (élément qui a un id app)
  directives :{

    salut
  },
  //pour les données 
  data:{ 
  message :'hello'  ,
  valeur : 'directive personalisé'
  },
  methods: {
    demo :function() {
      console.log("hello !")
    }
  }

  

  
  
  

});