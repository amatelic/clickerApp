import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    generateCode(userID) {
      let code = this.generateCodeSnippet(userID);
      this.$('#code-form').html(code);

    },
  },

  generateCodeSnippet(id) {
    return this.generatorTemplate(id);
  },

  generatorTemplate(userID) {
    return `(function () {
      /* Configuration*/
      var config = {
        data: [],
        userId: '${userID}',
        time: createUrl(),
      };
      /*Execution code*/
      function saveClickData(e){config.data.push({x:e.clientX,y:e.clientY})}function createUrl(){return(new Date).getTime()}function makeRequest(e,t){var n;return(n=new XMLHttpRequest)?(n.open("POST",e),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),n.setRequestHeader("Access-Control-Allow-Origin","*"),void n.send("userID="+t.userId+"&time="+t.time+"&data="+JSON.stringify(t.data))):(console.error("Request with clickApp not working!"),!1)}var body=document.querySelector("body");body.addEventListener("click",saveClickData,!1),setInterval(function(){makeRequest("http://localhost:3000/data",config),config.data=[]},5e3);
      })();`;
  },

});
