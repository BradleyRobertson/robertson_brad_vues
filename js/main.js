const vm = new Vue({
  el : "#app",

  data : {
    title : "Vue and Video",
    mainmessage : "welcome to my vue video app",

    videodata : [
      { name: "Star Wars the Force Awakens", thumb: "forceawakens.jpg", vidsource: "forceawakens.mp4", description: "yet another star wars movie"},

        { name: "Stranger Things", thumb: "strangerthings.jpg", vidsource: "strangerthings.mp4", description: "upside down ayyyy"},

          { name: "Marvel's the Avengers", thumb: "avengers.jpg", vidsource: "avengers.mp4", description: "avengers movie"}
    ],

  videotitle : "title goes here",
  videoDescription : "description goes here",
  videoSource : ""

},

  methods : {
loadMovie(e) {
  e.preventDefault();

  datakey = e.currentTarget.href.substring(e.currentTarget.href.lastIndexOf('/') +1 );

  currentData = this.videodata.filter((video) => video.vidsource === datakey);

  this.videoTitle = currentData[0].name;
    this.videoDescription = currentData[0].description;
    this.videoSource = datakey;

}

  }
});
