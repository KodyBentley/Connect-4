var playbtn = this.game.add.button(0, 0, 'play-btn');
playbtn.inputEnabled = true;
playbtn.onInputDown.add(() => {
  console.log("INPUT! Calling Facebook login...");
  FB.login(() => {
    var response = FB.getAuthResponse();
    console.log(response);
    /* REST OF LOGIN CODE */
  }, {scope: 'public_profile, email', return_scopes: true});
}, this);