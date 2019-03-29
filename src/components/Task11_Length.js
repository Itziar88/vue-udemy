export const lengthAwareMixin = {
    computed:{
        lengthAwareMixin(){
          return this.secondText + ' (' + this.secondText.length + ')';
        }
      },
}
