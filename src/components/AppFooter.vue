<template>
    <div className="main-footer">
        <div className="container">
        <div className="row" id="main-div">
        <div id="icon">
            <ui className="list-unstyled">
              <li><img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Github-16.png"/></li>
              </ui>
              </div>
              <div id="icon" >
            <ui className="list-unstyled">
              <li><img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-16.png"/></li>
              </ui>
              </div>
              <div id="icon" >
            <ui className="list-unstyled">
              <li><img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-16.png"/></li>
              </ui>
              </div>
              <div id="icon">
            <ui className="list-unstyled">
              <li><img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter3_colored_svg-16.png"/></li>
              </ui>
              </div>
        
          </div>
          <div  id="Copyright" >
          <p id="footer-text" >
            &copy;{{new Date().getFullYear()}} @Copyrigth | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
        </div>
          
        </div>
    
</template>

<script>
export default {

}
</script>

<style scoped>
      
.main-footer {
    color: white;
    background-color:rgba(0,0,0,0.85);
    padding-top: 1em;
    position: absolute;
    bottom: 0px;
    width: 100%;
    margin-bottom: 0px;
    padding-bottom: 0px;
  }
  #icon{
      margin-right:20px;
      margin-bottom: 7px;
  }
  #main-div{
      display: flex;
      align-items: center;
      justify-content: center;
      
  }
  #Copyright{
      text-align: center;
      
  }
  #footer-text{
      font-size: 10px;
      margin-bottom: 0px;
  }

</style>
