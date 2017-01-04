Polymer({

  is: 'crossfields-audio-text',

  properties: {
    text: {
      type: String,
      observer: 'playText'
    }
  },

});
