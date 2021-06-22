<template>
    <div>
        <AppHeader @trigger-search="startSearch"/>
        <h2 id="heading"> List Of Hospitals</h2>
       <div class="loader" v-if="isLoading"></div>
        <HospitalCard v-for="item in hospitalList" :key="item.id" 
        :id="item.id"
        :imgSrc="item.image"
        :name="item.name"
        :type="item.type"
        :ratings="item.Ratings"
        :numBed="item.noOfBeds"
        :location="item.state"
        :lat="item.latitude"
        :long="item.longitude"
        :city="item.city"
        :pin="item.pincode"
        @render-details="navigateDetails"
        @render-map="navigateMap"
        />
     </div>
</template>

<script>
import HospitalCard from '../components/HospitalCard.vue'
import AppHeader from '../components/AppHeader.vue'

export default {

    components: {
        HospitalCard,
        AppHeader
    },

    data() {
        return {
            hospitalList: [],
            lat: 0,
            long: 0,
            isLoading: false,
            api: 'http://ec2-54-173-214-92.compute-1.amazonaws.com:8080',
            endpoint1: [],
            endpoint2:[],
            endpoint3:[],
            endpoint4:[],
        }
    },

    methods: {
        fetchData() {
            this.isLoading = true
            fetch(this.api + '/data/').then((res) => {
                return res.json()
            }).then((data) => {
                this.hospitalList = data.filter((v) => v.type == "Private")
                this.isLoading = false
            })
        },

        async startSearch(searchq) {
            console.log(searchq)
            // var endpoint2 = []
            // var endpoint3 = []
            // var endpoint4 = []
            // State
            this.hospitalList = []
            this.isLoading = true
            
            if (searchq == "") {
                this.fetchData()
                return
            }

            const res = await fetch(this.api + "/data/" + searchq + '/')
            const new_res = await res.json()
            this.endpoint1 = await new_res.filter((v) => v.type == "Private")

            // endpoint3 for city
            const res2 = await fetch(this.api + "/data/")
            const new_res2 = await res2.json()
            const new_gov = await new_res2.filter((v) => v.type == "Private")
            this.endpoint3 = await new_gov.filter((v) => v.city == searchq)

            this.endpoint2 = await new_res2.filter((v) => v.name == searchq)     

            console.log(this.endpoint1)

            try {
                parseInt(searchq)
            // endpoint 4
            this.endpoint4 = await new_gov.filter((v) => v.pincode == parseInt(searchq))
            

            } catch(e) {
                console.log("Not a number")
            }
            // // Name
            // const res1 = await fetch(this.api + "/search/" + searchq + '/')
            // const new_res1 = await res1.json()
            // this.endpoint2 = await new_res1

            const conc1 = await this.endpoint1.concat(this.endpoint2);
            const conc2 = await conc1.concat(this.endpoint3)
            this.hospitalList = await conc2.concat(this.endpoint4)

            // endpoint 3 for city




            this.searchq = ""
            this.isLoading = false
        },

        navigateDetails(id) {
            console.log(id)
            // find the corresponding element with given id
            let myobj = this.hospitalList.filter((v) => v.id == id)[0]
            console.log(this.myObj)
            this.$router.push({name: 'HospitalDetails', params: {
                name: myobj.name,
                rating: myobj.Ratings,
                type: myobj.type,
                city: myobj.city,
                state: myobj.state,
                pincode: myobj.pincode,
                nBed: myobj.noOfBeds,
                nDoc: myobj.noOfDoctors,
                disease: myobj.diseases,
                treatment: myobj.treatments,
                link: myobj.link,
                image: myobj.image,
            }});
        },

        navigateMap(lat, long) {
            console.log(lat.split(" ")[0])
            let nlat = Number(lat.split(" ")[0])
            let nlong = Number(long.split(" ")[0]) 
            console.log(long.split(" ")[0])

            this.getLocation()

            this.$router.push({name: 'Azuremaps', params:{
                plat: nlat,
                plong: nlong,
                lat: this.lat,
                long: this.long,
            }})
        },

        getLocation() {
            if (navigator.geolocation) {
                    navigator.geolocation.watchPosition(this.showPosition);
            } else { 
                console.log("Geolocation is not supported by this browser.")
             }
        },

        showPosition(position) {
            this.lat = position.coords.latitude 
            this.long = position.coords.longitude
        }
    },

    created() {
        this.getLocation();
        this.fetchData()
    }

}

</script>

<style scoped>

#heading{
    margin: 1rem auto;
    justify-content: center;
    align-items: center;
    font-family:monospace;
    font-weight:bold;
    font-size:2.5rem;
    text-align: center;
    background-image: linear-gradient(to left, #BFFFFB, #80FFF7);
    width: 58%;
    padding: 1rem;
    color: #00847b;
    border-radius: 6px;
}

.loader {
 border: 10px solid #f3f3f3;
  border-radius: 50%;
  border-top: 10px solid limegreen;
  width: 30px;
  height: 30px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;

   margin: 0;
  position: absolute;
  top: 60%;
  left: 50%;
  -ms-transform: translate(-50%, -60%);
  transform: translate(-50%, -60%);
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>
