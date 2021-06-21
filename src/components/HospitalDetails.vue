<template>
    
<div>

  <AppHeader @trigger-search="notAllowed"/>

  <div class="Top-part" :style="{ 'background-image': 'url(' + image + ')' }">
    <h1>Hospitals Are About Healing</h1>
    <h6>-IRWIN RENDLER</h6>
  </div>
  <div class="Container">
    <div class="Main-part">
      <div class="feild">
        <h2>{{name}}</h2>
      </div>
      <div class="feild" id="text">Ratings : 
        <span v-for="x in rating" :key="x">  &#11088; </span>
      </div>
      <div class="feild" id="text">Type : {{type}}</div>
      <div class="feild">
        <h3><i>Location : {{city}}, {{state}}, {{parseInt(pincode)}}</i></h3>
      </div>
      <div class="feild">
          <a :href="link" target="blank" @click="debug"> &#128279; click to visit hospital's webpage...</a>
      </div>
    </div>
    <div class="Details-part">
      <span id="details">
        <h4>&#10024; DETAILS</h4>
      </span>
      <ul type=square>
        <li>Number of Beds : {{nBed}}</li>
        <li>Number of Doctors : {{nDoc}}</li>
      </ul>
      <span id="disease">
        <h4>🌡️ Diseases</h4>
      </span>
      <ul type=Square>
        <li v-for="(obj, index) in disease" :key="index">
          {{obj.disease}} : <span class="cost">{{obj.price}}</span>
        </li>
      </ul>
      <span id="treatment">
        <h4> 💉 Treatment</h4>
      </span>
      <ul type=square>
        <li v-for="(el, index) in treatment" :key="index">
          {{el}}
        </li>
      </ul>
    </div>
  </div>

</div>
</template>

<script>
import AppHeader from './AppHeader.vue'

export default {

  components: {
    AppHeader
  },

    data() {
      return {
        name: "",
        rating: 0,
        type: "",
        city: "",
        state: "",
        pincode: 0,
        nDoc: 0,
        nBed: 0,
        disease: [],
        treatment: [],
        link: "",
        image: "",
        l1: "http://www.google.com"
      }
    },

    methods: {
      debug(event) {
        console.log(event.target.href)
      },

      notAllowed() {
        alert("This method not allowed here.")
      }
    },

    created() {
      this.name = this.$route.params.name
      this.rating = this.$route.params.rating
      this.type = this.$route.params.type
      this.city = this.$route.params.city
      this.state = this.$route.params.state
      this.pincode = this.$route.params.pincode
      this.nDoc = this.$route.params.nDoc
      this.nBed = this.$route.params.nBed
      this.disease = this.$route.params.disease
      this.treatment = this.$route.params.treatment
      this.link = "http://" + this.$route.params.link
      this.image = this.$route.params.image

      // make treatment to object
      this.treatment = this.treatment.replaceAll("[", "")
      this.treatment = this.treatment.replaceAll("]", "")
      this.treatment = this.treatment.replaceAll("'", "")
      this.treatment = this.treatment.replaceAll("\"", "")
      this.treatment = this.treatment.replaceAll(",", "")
      this.treatment = this.treatment.split("  ")

      // processing disease string
      this.disease = this.disease.replaceAll("[", "")
      this.disease = this.disease.replaceAll("]", "")
      this.disease = this.disease.replaceAll("'", "")
      this.disease = this.disease.replaceAll("\"", "")
      this.disease = this.disease.replaceAll(",", "")
      this.disease = this.disease.replaceAll(":", "")
      this.disease = this.disease.split("  ")
      var newArr = []
      for (var i = 0; i < this.disease.length; i+=2) {
        newArr.push({disease:this.disease[i], price:this.disease[i+1]})
      }
      this.disease = newArr

      console.log(this.name)
      console.log(this.rating)
      console.log(this.type)
      console.log(this.city)
      console.log(this.state)
      console.log(this.pincode)
      console.log(this.nDoc)
      console.log(this.nBed)
      console.log(this.treatment)
      console.log(this.disease)
     
      console.log(this.treatment)
      console.log(this.link)
      console.log(this.$route.params.image)
    }
}  
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Raleway:300&display=swap');

* {
  margin: 0;
  padding: 0;
  font-family:monospace;
}

a {
    font-size: 1rem;
    font-family: monospace;
    text-decoration: none;

}

h1, h6 {
    font-family: monospace;
}

h4 {
    font-size: 1.3rem;
    margin-bottom: 0.3rem;
}

li{
  margin-left: 5%;
  padding-left: 1%;
  text-align: left;
  color: white;
}
.Top-part {
  margin-right: auto;
  margin-left: auto;
  height: 40vh;
  width: 99vw;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
}

h1, h6 {
  font-family: 'Raleway', sans-serif;
  line-height: 2.5rem;
  color:black;
}
.Container{
  display: flex;
  flex-direction:row;
 
}
.Main-part{
  width:50%;
  margin-top: 3%;
  margin-left:2.4%;
  background-color:#F8EDED;
  overflow-wrap: break-word;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 8px;
  background-image: linear-gradient(to left, dodgerblue, blueviolet);
  color: black;
}
.feild{
  padding-top: 3%;
  padding-left:2%;
  font-size: 130%;
  text-align: left;
  color: white;
 
}
#text{
  font-size: 1.4em;
}
.Details-part{
  padding-top:1%;
  padding-left: 1%;
  margin-left: 2%;
  width: 50%;
  margin-top: 3%;
  margin-right: 2%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 8px;
  background-image: linear-gradient(to right, blueviolet, dodgerblue);
}
#details, #treatment, #disease {
  color:red;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: left;
}
</style>
