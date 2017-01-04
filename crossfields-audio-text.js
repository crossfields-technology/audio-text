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

    codec: {
      type: String,
      value: "mp3"
    },

    format: {
      type: String,
      value: '44khz_16bit_stereo'
    },

    rate: {
      type: Number,
      value: 0
    }
  },

  playText: function() {
    try {
      VoiceRSS.speech({
        key: this.apiKey,
        src: this.text,
        hl: this.language,
        r: this.rate,
        c: this.codec,
        f: this.format,
        ssml: false
      });
    } catch (e) {
      console.log(e);
    }
  }

});
