<template>
    <div id="prefix-editor"> 
        <ul id="menu" style="padding: 20px;">
          <strong> Prefixes: </strong>
          <li v-for="(prefix, key) in prefixes" :key="key" class="sub tooltip" @contextmenu.prevent="$refs.contextMenu.open($event, {name: key, url: prefix})">
              <input type="checkbox" 
                     :id="key" 
                     @change="updateSelectedPrefixes($event.target.checked, key, prefix)">
              <label :for="key" style="margin-right:5px;"> {{ key }} </label>
              <span class="tooltiptext"> {{ prefix }} </span>
          </li>
        </ul>
        
        <div v-show="editPrefix">
          <transition name="modal">
            <div class="modal-mask">
              <div class="modal-wrapper">
                <div class="modal-container">
                  <div class="modal-body">
                    <input type="text" v-model="newPayload.name" :placeholder="payload.name">
                    <input type="text" v-model="newPayload.url" :placeholder="payload.url">
                    <button :disabled="newPayload.name==''||newPayload.url==''" class="modal-default-button" 
                            @click="updatePrefix"> Save </button>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>

        <v-row class="dropdown" style="padding:0px 20px; display: inline-block;" align="center" justify="space-around">
          <input class="dropdown-input" 
                  type="text" 
                  placeholder="Search for Prefix" 
                  v-model="searchInput"/>

          <div v-show="searchInput" class="dropdown-list">
            <div v-for="(name, key) in this.$store.getters['prefixEditorStore/contextList']" 
                    v-show="checkList(key)"
                    :key="key" class="dropdown-item"
                    @click="addToPrefixes(name, key)">
                    {{ key }}
            </div>
          </div>

          <v-btn style="margin:5px;" v-show="!showManualBool" @click="showManual"> Add Prefix Manually </v-btn>

          <div style="display: inline-block;" v-show="showManualBool">
            <input class="prefix-input" type="text" placeholder="Prefix Name" v-model="prefixName" />
            <input class="prefix-input" type="text" placeholder="Prefix URL" v-model="prefixURL" />
            <v-btn @click="addToPrefixes(prefixName, prefixURL)"
                  :disabled="prefixName==''||prefixURL==''"> Add prefix </v-btn>
          </div>

          <v-btn style="margin: 5px;" v-show="showManualBool" @click="hideManual"> Hide </v-btn>

        </v-row>

        <vue-context ref="contextMenu" v-slot="{data}">
          <li>
            <a href="#" @click.prevent="editPrefix=true; payload=data"> Edit </a>
          </li>
          <li>
            <a href="#" @click.prevent="deleteFromPrefixes(data)"> Delete </a>
          </li>
        </vue-context>
    </div>
</template>
<script>
import store from '@/store/store.js'
import {mapGetters} from 'vuex'
import VueContext from 'vue-context'
import 'vue-context/src/sass/vue-context.scss';

export default {
    name: 'PrefixEditor',
    components: {
      VueContext,
    },
    store: store, 
    data () {
        return {
          searchInput: '', 
          prefixName: '',
          prefixURL: '',
          showManualBool: false, 
          editPrefix: false, 
          payload: {name:'', url:''},
          newPayload: {name: '', url:''} 
        }
    }, 
    methods: {
        updateSelectedPrefixes(checked, key, prefix) {
          if (checked) {
              this.$store.dispatch('prefixEditorStore/addToSelectedPrefixes', {name: key, url: prefix})
          } else {
              this.$store.dispatch('prefixEditorStore/deleteFromSelectedPrefixes', {name: key, url: prefix})
          }
        },
        checkList(key) {
          return key.includes(this.searchInput)
        },
        addToPrefixes(name, key) {          
          this.$store.dispatch('prefixEditorStore/addToPrefixes', {name: key, url: name})
          this.searchInput = '' 
          this.prefixName = ''
          this.prefixURL = ''
        },
        deleteFromPrefixes(payload) {
          this.$store.dispatch('prefixEditorStore/deleteFromPrefixes', payload)
        }, 
        showManual() {
          this.showManualBool = true 
        },
        hideManual() {
          this.showManualBool = false 
        },
        updatePrefix() {
          this.editPrefix = false
          console.log(this.payload)
          this.$store.dispatch('prefixEditorStore/updatePrefix', {old: this.payload, new: this.newPayload})
        }
    },
    mounted () {
        this.$store.dispatch('prefixEditorStore/getContextList')
    },
    computed: {
      ...mapGetters({
          prefixes: 'prefixEditorStore/prefixes',
      })
    },
}
</script>
<style>

#prefix-editor {
    border-style: solid;
    border-color: #ccc;
    border-width: 1px 1px 1px 1px;
    height: 120px; 
    text-align: left;
}
#menu > li.sub ul {
  list-style: none;
  position: absolute;
  top: -1000em;
  left: 0px;
}
#menu{
  text-align: left;  
}
li{
  display:inline-block;
}
.dropdown {
  position: absolute;
  width: 100%;
  /* max-width: 200px; */
  margin: 0 auto;
  z-index: 3; 
}
.dropdown-input, .dropdown-selected {
  /* width: 100%; */
  padding: 10px 16px;
  border: 1px solid rgba(0,0,0, 0.1);
  background: #edf2f7;
  line-height: 1em;
  outline: none;
  border-radius: 8px;
}
.dropdown-input:focus, .dropdown-selected:hover{
  background: #fff;
  border-color: #e2e8f0;
}
.dropdown-input::placeholder{
  opacity: 0.7;
}
.dropdown-selected{
  font-weight: bold;
  cursor: pointer;
}
.dropdown-list{
  position: absolute;
  width: 100%;
  max-height: 500px;
  margin-top: 4px;
  overflow-y: auto;
  background: #ffffff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
}
.dropdown-item{
  display: flex;
  width: 100%;
  padding: 11px 16px;
  cursor: pointer;
}
.dropdown-item:hover{
  background: #edf2f7;
}
/* Tooltip container */
.tooltip {
  position: relative;
  display: inline-block;
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: auto;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
 
  /* Position the tooltip text - see examples below! */
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -60px;
  z-index: 4;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
}

.prefix-input {
  background: #edf2f7;
  margin: 5px;
  border: 1px solid rgba(0,0,0, 0.1);  
  border-radius: 8px;
  height: 35px;
  padding: 10px;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>