class LightboxStore {
  constructor () {
    this.state = {
      images: [],
      index: false,
    }
  }
  addImage (url) {
    return this.state.images.push(url) - 1;
  }
   open (url) {
     this.state.index = this.state.images.findIndex(image => image === url);
   }
   close () {
     this.state.index = false;
   }
   next () {
     this.state.index++;
     if (this.state.index >= this.state.images.length) {
       this.state.index = 0;
     }
   }
   prev () {
     this.state.index--;
     if (this.state.index < 0) {
       this.state.index = this.state.images.length - 1;
     }
   }
   remove (url) {
     this.state.images = this.state.images.filter(image => image !== url)
   }
}

export default new LightboxStore()
