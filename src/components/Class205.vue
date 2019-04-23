<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1 class="text-center">The Super Quiz</h1>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <transition name="flip" mode="out-in">
                    <component :is="mode" @answered="answered($event)" @confirmed="mode = 'app-question'"></component>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
import Question from './Class205_Question.vue'
import Answer from './Class205_Answer.vue'

export default {
    name: 'Class205',
    data() {
        return {
            mode: 'app-question',
        }
    },
    components: {
        appQuestion: Question,
        appAnswer: Answer,
    },
    methods: {
        answered(isCorrect){
            if(isCorrect){
                this.mode = 'app-answer';
            }else {
                this.mode = 'app-question';
                alert('Wrong, try again');
            }
        }
    }

}
</script>

<style>
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");
    .flip-enter-active {
        animation: flip-in 0.5s ease-out forwards;
    }
    .flip-leave-active {
        animation: flip-out 0.5s ease-out forwards;
    }
    @keyframes flip-out {
        from {
            transform: rotateY(0deg);
        }
        to {
            transform: translateY(90deg);
        }
    }
    @keyframes flip-in {
        from {
            transform: rotateY(90deg);
        }
        to {
            transform: translateY(0deg);
        }
    }
</style>
