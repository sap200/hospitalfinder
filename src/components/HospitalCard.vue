<template>
    <div>
         <div class="container-fluid mt-5">
             <div id= "container" class="column text-center">
                 <div id="image-box">
                    <img id="hospital" :src="imgSrc" />
                </div>
                 <div id="content-box" >
                    <p class="elm" id="name" @click="renderDetails"><span style="color:#00BCB0;"><strong> {{name}} </strong></span><span style="color: tomato;"> ({{type}}) </span></p>
                    <p class="elm"> 
                        <span v-for="x in Number(ratings)" :key="x" > &#11088; </span>
                    </p>
                    <p class="elm" id="nbed"><span>🛏️ Beds: {{numBed}} </span></p>
                    <p class="elm" @click="renderMaps" id="loc"> &#128204; <i> {{city}}, {{location}}, <span style="color:blueviolet;">{{parseInt(pin)}}</span> </i> </p>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {

    props: {
        id: Number,
        imgSrc: String,
        name: String,
        type: String,
        ratings: Number,
        numBed: Number,
        location: String,
        lat: String,
        long: String,
        city:String,
        pin: String,
    },

    data() {
        return {
            rateNum: Number(this.ratings),
        }
    },

    emits: ['render-details', 'render-map'],

    methods: {
        renderDetails() {
            this.$emit('render-details', this.id)
            
        },

        renderMaps() {
            this.$emit('render-map', this.lat, this.long)
        }
    }
}
</script>

<style scoped>
#heading{
   text-align: center;
}


#container{
 display:flex;
  margin-right: auto;
  margin-left: auto;
  width: 60%;
  box-sizing: border-box;
  background-color:white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin-bottom: 2.8em ;
  border-radius: 12px;
}

.elm {
   font-family:monospace;
    margin-bottom: 30px;
    font-size: 5rem;
}

#name {
    font-size: 20px;
    margin-bottom: 30px;
    font-weight: bold;
}

#nbed {
    margin-top: 30px;
    font-size: 30px;
}

#name:hover {
    font-size: 1.1rem;
    cursor: pointer;
}

#loc:hover {
    font-size: 1.1rem;
    cursor: pointer;
}

#container:hover {
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.26);
}

#image-box{
    width:30%;
    margin-right:0px;
}
#hospital{
    position: relative;
    margin-top: 0.7em;
    border-radius: 4px;
    margin-bottom: 0.3em;
    width:250px; 
    height:170px;
}
#content-box{
    margin-top: 1.5em;

    text-align: left;
    
}
#content-box p{
    font-size: 1em;
    line-height:0.3em;
    font-weight: 500;
    position: relative;
    
}

/* #content-box p:last-child{
    padding-top: 0.7em;
    color: green;
} */


</style>
