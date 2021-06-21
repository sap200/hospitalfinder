<template>
<div>
    <header>
        <div class="header">

            <img id="logo" src="https://img.icons8.com/pastel-glyph/2x/ffffff/stethoscope.png" alt="logo">
            <a href="#default" class="logo"><span class="Logo-text">Finder</span></a>
            <div class="header-right">
                <router-link class="active" to="/">Home</router-link>
                <router-link to="/government">Government Hospitals</router-link>
                <router-link to="/privatehos"> Private Hospitals</router-link>
            </div>
        </div>
        <div class="search">
            <div class="field1">
                <input type="text" name="search" id="search" placeholder="Hospital/Pharmacy" v-model="searchText">
            </div>
            <div class="field2">
                <button type="submit" class="find" @click="search">
                    <img class="img" src="https://img.icons8.com/android/2x/ffffff/search.png">
                </button>
            </div>
        </div>
    </header>
</div>
</template>

<script>
export default {

    data() {
        return {
             searchText: ""
        }
    },

    emits: ['trigger-search'],

    methods: {
        search() {
            this.$emit('trigger-search', this.searchText)
        }
    }
    
}
</script>


<style scoped>
/* Style the header with a grey background and some padding */
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Philosopher&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

*{
    padding: 0;
    margin: 0;
}

.header {
    overflow: hidden;
    background-color:#343A40;
    padding: 5px 10px;
    max-height: 3rem;
    display: flex;
  }

  #logo{
    height: 55px;
    width: 60px;
  }
  
  /* Style the header links */
  .header a {
    float: left;
    color: white;
    text-align: center;
    padding: 12px;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    line-height: 25px;
   
  }
  .logo .Logo-text{
    font-family: 'Philosopher', sans-serif;
    font-weight:lighter;
    font-size: xx-large;
    
    
  }
  .img{
    width: 2em;
  }
  .find{
    background-color: #343a4077;
    background: 343a4077;
    border: none;
    cursor: pointer;
    margin-right: 8vw;
    margin-left: 20px;
  }
  #search{
  background-color:#303335;
  color: white;
  padding: 3% 10px 3% 10px;
  min-width: 400px;
  border: none;
  outline: none;
  font-size: 20px;
  }

  #search:focus{
    border-bottom-style: solid;
    /* background-color: #363636; */
  }
  .search{
    position: relative;
    top: -3.6rem;
    float: right;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  

  /* Change the background color on mouse-over */
  .header a:hover {
    color:rgb(117, 245, 238);
    text-decoration-line: none;
 
  }
  
  
  
  /* Float the link section to the right */
  .header-right {
    float: right;
  }
  
  /* Add media queries for responsiveness - when the screen is 500px wide or less, stack the links on top of each other */
  @media screen and (max-width: 500px) {
    .header a {
      float: none;
      display: block;
      text-align: left;
    }
    .header-right {
      float: none;
    }
  }
</style>