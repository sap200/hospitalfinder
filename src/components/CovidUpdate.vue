<template>
    <div id="covidcontainer">
        <div id="Recovered">
            Total Confirmed:
            <br><br>
            <span id="number">{{confirm}} </span>
        </div>
        <div id="deaths">
            Total Deaths:
            <br><br>
            <span id="number">{{deaths}}</span>
        </div>
    </div>
    
</template>

<script>
export default {

    data() {
        return {
            deaths: 0,
            confirm: 0,
        }
    },

    methods: {
        async getDC() {
            try{
                const res=await fetch('https://api.covid19api.com/summary');
                const actualdata=await res.json();
                this.confirm = await actualdata.Global.TotalConfirmed
                this.deaths = await actualdata.Global.TotalDeaths
                console.log(this.confirm)
                console.log(this.deaths)
            }catch(error){
                console.log(error);
            }

        }
    },

    created() {
        setInterval(() => this.getDC(), 60000);
        this.getDC()
    }

}
</script>

<style scoped>
#covidcontainer{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    position:absolute;
    top:30%;
    margin-left: 60%;
    
    height:20vh;
    width:30%;
    background-image: linear-gradient(to right, aqua, skyblue);
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1em;
}
#Recovered{
    position: relative;
    
    text-align: center;
    font-size: 1em;
    width:40%;
    height:fit-content;
    background-image: linear-gradient(to right, red, darkred);
    color: white;
    padding: 1rem;
    border-radius: 8px;
    margin-right: 2rem;
}
#deaths{
    position: relative;
    height:fit-content;

    text-align: center;
    font-size: 1em;
    width:40%;
    background-image: linear-gradient(to left, red, darkred);
    color: white;
    border-radius: 8px;
    padding: 1rem;
}
</style>
