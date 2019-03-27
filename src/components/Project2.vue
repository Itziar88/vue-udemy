<template>
  <div class="container">
    <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
    <app-new-quote
      @quoteAdded="newQuote"
    >
    </app-new-quote>
    <app-quote-grid
      :quotes="quotes"
      @quoteDeleted="deleteQuote"
    >
    </app-quote-grid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">
          Info: Click on a Quote to delete it!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import QuoteGrid from './Project2Files/Project2_QuoteGrid.vue';
  import NewQuote from './Project2Files/Project2_NewQuote.vue';
  import Header from './Project2Files/Project2_Header.vue';
  export default {
    name: 'Project2',
    data(){
      return{
        quotes: [
          'Just a quote to see'
        ],
        maxQuotes: 10
      }
    },
    methods:{
      newQuote(quote){
        if(this.quotes.length >= this.maxQuotes){
          return alert('Please delete Quotes first!');
        }
        this.quotes.push(quote);
      },
      deleteQuote(index){
        this.quotes.splice(index, 1);
      }
    },
    components: {
      appQuoteGrid: QuoteGrid,
      appNewQuote: NewQuote,
      appHeader: Header
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Arizonia');
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");

</style>
