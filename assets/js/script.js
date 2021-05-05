const app = new Vue({

  el:'#app',
  data : {
    counter: 0,
    arrImage : [
      'assets/img/img1.jpg',
      'assets/img/img2.jpg',
      'assets/img/img3.jpg',
      'assets/img/img4.jpg'
    ]

  },
  methods : {
    nextImg(){
      this.counter ++

      if(this.counter === this.arrImage.length) this.counter=0;
    },

    prevImg(){
      this.counter --
    
      if(this.counter < 0) this.counter= this.arrImage.length-1;
    },

   
  }
});
