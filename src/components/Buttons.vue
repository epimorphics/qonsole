<template>
    <div>
        <button class="button" v-for="buttonFunction in buttonFunctions" 
            :key="buttonFunction" 
            v-bind:value="buttonFunction" 
            @click="onClick($event.target.value)"> {{ buttonFunction }} </button>
    </div>
</template>
<script>
export default {
    name: 'Buttons',
    props: ['language'], 
    data () {
        return {
            buttonFunctions: []
        }
    }, 
    methods: {
        onClick (buttonFunction) {
            this.$emit('buttonClicked', buttonFunction)
        }
    }, 
    mounted() {
        switch (this.language) {
            case 'sparql':
                this.buttonFunctions = ['Clear', 'Perform Query', 'Save Query']
                break; 
            case 'turtle':
                this.buttonFunctions = ['Clear', 'Load']
        }
    }
}
</script>
<style>
.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 7px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border: 1px solid green;
}
</style>