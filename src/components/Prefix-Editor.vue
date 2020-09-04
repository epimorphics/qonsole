<template>
    <div id="prefix-editor"> 
        <ul id="menu" style="padding: 20px;">
          <strong> Prefixes: </strong>
          <li v-for="(prefix, key) in prefixes" :key="key" class="sub tooltip">
              <input type="checkbox" 
                     :id="key" 
                     @change="updateSelectedPrefixes($event.target.checked, key, prefix)">
              <label :for="key" style="margin-right:5px;"> {{ key }} </label>
              <span class="tooltiptext"> {{ prefix }} </span>
          </li>
          <div class="dropdown" style="padding:0;">
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
          </div>
        </ul>
    </div>
</template>
<script>
import store from '@/store/store.js'
import {mapGetters} from 'vuex'

export default {
    name: 'PrefixEditor',
    store: store, 
    data () {
        return {
            searchInput: '', 
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
        }
    },
    mounted () {
        this.$store.dispatch('prefixEditorStore/getContextList')
    },
    computed: {
        ...mapGetters({
            prefixes: 'prefixEditorStore/prefixes',
        })
    }
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
.dropdown{
  position: absolute;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  z-index: 3; 
}
.dropdown-input, .dropdown-selected{
  width: 100%;
  padding: 10px 16px;
  border: 1px solid rgba(0,0,0, 0.1);
  background: #edf2f7;
  line-height: 1.5em;
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
</style>