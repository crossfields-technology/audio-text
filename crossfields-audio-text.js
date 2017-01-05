Polymer({

  is: 'crossfields-audio-text',

  properties: {
    /** The textual content for converting to speech (length limited by 100KB) */
    text: {
      type: String,
      observer: 'playText'
    },

    /** The api key from voiceRSS */
    apiKey: {
      type: String
    },

    /** The language spoken from the automated audio. */
    language: {
      type: String,
      value: 'en-au'
    },

    /** The speech audio codec. Default value: mp3 */
    codec: {
      type: String,
      value: "mp3"
    },

    /** The speech audio formats. */
    format: {
      type: String,
      value: '44khz_16bit_stereo'
    },

    /** The speech rate (speed).
      *  Allows value from -10 (slowest speed) up to 10 (fastest speed).
      *  Default value 0 (normal speed).
      */
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
