<template>
    <div id="logo">
        <h2>
            <span> <img src="../assets/logo.png" style="width: 50px; height: 40px;"/> </span>
             <span id="red">Hospital</span><span id="duct">Finder</span> <span style="font-size: 1.3rem; color: white;">[<i>A Healthcare solution designed by <span style="color: orange;">team finder </span></i>]</span> 
        </h2>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>
#red {
    color: green;
}

#duct {
    color: blueviolet;
}

#logo {
    background-image: linear-gradient(to right, lightgray, blueviolet, dodgerblue);
    padding: 0.2rem;
    margin: 1rem auto;
    margin-top: 0rem;
    margin-bottom: 1rem;
    width: 100%;
    text-align: left;
    font-size: 1.7rem;
    font-family:monospace;
}
</style>