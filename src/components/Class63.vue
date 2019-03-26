<template>
  <div>
    <h1>{{ title }}</h1>
    <button @click="show">Show Paragraph</button>
    <p v-if="showParagraph">This is not always visible</p>
  </div>
</template>

<script>
export default {
  name: 'Class63',
  data() {
    return {
      title: 'The VueJS Instance',
      showParagraph: false
    };
  },
  methods:{
    show(){
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Update)')
    },
    updateTitle(title){
      this.title = title;
    },
  },
  computed:{
    lowercaseTitle(){
      return this.title.toLowerCase();
    }
  },
  watch:{
    title(value){
      alert('Title changed, new value: ' + value);
    }
  }
}
</script>

<style scoped>
</style>
