Polymer({

  is: 'crossfields-audio-text',

  properties: {
    text: {
      type: String,
      observer: 'playText'
    },

    apiKey: {
      type: String,
      value: '6a663a11b30e46988b3e49baad605e9f'
    },

    language: {
      type: String,
      value: 'en-au'
    },

    format: {
      type: String,
      value: 'mp3'
    }
  },

  playText: function() {
    try {
      VoiceRSS.speech({
        key: this.apiKey,
        src: this.text,
        hl: this.language,
        r: 0,
        c: this.format,
        f: '44khz_16bit_stereo',
        ssml: false
      });
    } catch (e) {
      console.log(e);
    }
  }

});
