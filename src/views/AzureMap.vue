<template>
    <AppHeader @trigger-search="notAllowed"/>
    <div>
        <div id="myMap" ref="azmap"> 
        </div>
    </div>
</template>

<script>
import * as atlas from 'azure-maps-control';
import AppHeader from '../components/AppHeader.vue'

export default {

     components: {
            AppHeader,
    },

    data() {
        return {
            latit: 0,
            longit: 0,
        }
    },

    methods: {

        InitMap() {
            console.log(this.$refs)
            let mlat = this.$route.params.lat 
            let mlong = this.$route.params.long
            let hlat = this.$route.params.plat
            let hlong = this.$route.params.plong



            var map = new atlas.Map(this.$refs["azmap"].id, {
                center: [hlat, hlong], // put position here actually long lat, acc to our data lat, long.
                zoom: 12,
                view: "Auto",
                language: 'en-US',
                authOptions: {
                    authType: 'subscriptionKey',
                    subscriptionKey: 'E-UlD5Yx_my1_tAM39Kxq-bCqmG_Z1bzho-3uZbM6vI'
                }
            });
            map.events.add('ready', () => {
                  mlat = this.latit
                  mlong = this.longit

                /*Create a data source and add it to the map*/
                var dataSource = new atlas.source.DataSource();
                map.sources.add(dataSource);
                var point = new atlas.Shape(new atlas.data.Point([mlong, mlat]));
                //Add the symbol to the data source.
                dataSource.add([point]);

                // set
                map.setTraffic({
                     flow: "relative"
                });

                //Add a layer for rendering the route lines and have it render under the map labels.
                map.layers.add(new atlas.layer.LineLayer(dataSource, null, {
                    strokeColor: 'blue',
                    strokeWidth: 20,
                    lineJoin: 'round',
                    lineCap: 'round'
                }), 'labels');

                 //Add a layer for rendering point data.
                map.layers.add(new atlas.layer.SymbolLayer(dataSource, null, {
                    iconOptions: {
                        image: ['get', 'icon'],
                        allowOverlap: true
                },
                    textOptions: {
                        textField: ['get', 'title'],
                        offset: [0, 1.2]
                    },
                    filter: ['any', ['==', ['geometry-type'], 'Point'], ['==', ['geometry-type'], 'MultiPoint']] //Only render Point or MultiPoints in this layer.
                }));


                var startPoint = new atlas.data.Feature(new atlas.data.Point([mlong, mlat]), {
                    title: "my-location",
                    icon: "pin-round-blue"
                });

                var endPoint = new atlas.data.Feature(new atlas.data.Point([hlat, hlong]), {
                    title: "hospital",
                    icon: "pin-red"
                });

                //Add the data to the data source.
                dataSource.add([startPoint, endPoint]);

                map.setCamera({
                    bounds: atlas.data.BoundingBox.fromData([startPoint, endPoint]),
                    padding: 200
                });


               


                //Create a symbol layer using the data source and add it to the map
                map.layers.add(new atlas.layer.SymbolLayer(dataSource, null));

                
        });



        },

        notAllowed() {
            alert('Not Allowed here.')
        },

        getLocation() {
            if (navigator.geolocation) {
                    navigator.geolocation.watchPosition(this.showPosition);
            } else { 
                console.log("Geolocation is not supported by this browser.")
             }
        },

        showPosition(position) {
            this.latit = position.coords.latitude 
            this.longit = position.coords.longitude
        }

    },

    mounted() {
        this.InitMap();
        this.getLocation();
        console.log(this.$route.params)
    },
  
}


</script>

<style scoped>

html, body {
    margin: 0;
}

#myMap {
    height: 100vh;
    width: 98vw;
    margin: 1rem auto;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    overflow: hidden;
}

</style>
