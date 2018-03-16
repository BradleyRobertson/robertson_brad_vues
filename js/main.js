const vm = new Vue({
  el : "#app",

  data : {
    welcomeMessage : "Gibe me caffiene",

    veggiesonFarm : [
      { name : "corn", flavour: "tasty"},
      { name : "blueberries", flavour: "good"},
      { name : "hotpeppers", flavour: "hot"},
      { name : "grapes", flavour: "tasty"},
      { name : "honey", flavour: "sweet"}
    ],

    hasVue : true,

    bigMessage : "Me me big boi"
  },

  methods : {
    logClicked(e) {
console.log(e.currentTarget, this);

    }
  }
});
