# \<crossfields-audio-text\>

Audio element using text to speech api.

### Audio Codecs

The API allows convert textual content to audio format in the following codecs:

Codecs |
-------|
mp3    |
wav    |
aac    |
ogg    |
caf    |

### Languages

The API allows convert textual content to audio format in the following languages:

Language Code    | Language Name            |
------|--------------------------|
ca-es	| Catalan                  |
zh-cn	| Chinese (China)          |
zh-hk	| Chinese (Hong Kong)      |
zh-tw	| Chinese (Taiwan)         |
da-dk	| Danish                   |
nl-nl	| Dutch                    |
en-au	| English (Australia)      |
en-ca	| English (Canada)         |
en-gb	| English (Great Britain)  |
en-in	| English (India)          |
en-us	| English (United States)  |
fi-fi	| Finnish                  |
fr-ca	| French (Canada)          |
fr-fr	| French (France)          |
de-de	| German                   |
it-it	| Italian                  |
ja-jp	| Japanese                 |
ko-kr	| Korean                   |
nb-no	| Norwegian                |
pl-pl	| Polish                   |
pt-br	| Portuguese (Brazil)      |
pt-pt	| Portuguese (Portugal)    |
ru-ru	| Russian                  |
es-mx	| Spanish (Mexico)         |
es-es	| Spanish (Spain)          |
sv-se	| Swedish (Sweden)         |

### Audio formats

The API allows convert textual content to audio format in the following formats:

Audio format code | Audio format description |
------------------|--------------------------|
8khz_8bit_mono    | 8 kHz, 8 Bit, Mono       |
8khz_8bit_stereo	| 8 kHz, 8 Bit, Stereo     |
8khz_16bit_mono	  | 8 kHz, 16 Bit, Mono      |
8khz_16bit_stereo	| 8 kHz, 16 Bit, Stereo    |
11khz_8bit_mono	  | 11 kHz, 8 Bit, Mono      |
11khz_8bit_stereo	| 11 kHz, 8 Bit, Stereo    |
11khz_16bit_mono	| 11 kHz, 16 Bit, Mono     |
11khz_16bit_stereo|	11 kHz, 16 Bit, Stereo   |
12khz_8bit_mono	  | 12 kHz, 8 Bit, Mono      |
12khz_8bit_stereo	| 12 kHz, 8 Bit, Stereo    |
12khz_16bit_mono	| 12 kHz, 16 Bit, Mono     |
12khz_16bit_stereo|	12 kHz, 16 Bit, Stereo   |
16khz_8bit_mono	  | 16 kHz, 8 Bit, Mono      |
16khz_8bit_stereo	| 16 kHz, 8 Bit, Stereo    |
16khz_16bit_mono	| 16 kHz, 16 Bit, Mono     |
16khz_16bit_stereo|	16 kHz, 16 Bit, Stereo   |
22khz_8bit_mono	  | 22 kHz, 8 Bit, Mono      |
22khz_8bit_stereo	| 22 kHz, 8 Bit, Stereo    |
22khz_16bit_mono	| 22 kHz, 16 Bit, Mono     |
22khz_16bit_stereo|	22 kHz, 16 Bit, Stereo   |
24khz_8bit_mono	  | 24 kHz, 8 Bit, Mono      |
24khz_8bit_stereo	| 24 kHz, 8 Bit, Stereo    |
24khz_16bit_mono	| 24 kHz, 16 Bit, Mono     |
24khz_16bit_stereo|	24 kHz, 16 Bit, Stereo   |
32khz_8bit_mono	  | 32 kHz, 8 Bit, Mono      |
32khz_8bit_stereo	| 32 kHz, 8 Bit, Stereo    |
32khz_16bit_mono	| 32 kHz, 16 Bit, Mono     |
32khz_16bit_stereo|	32 kHz, 16 Bit, Stereo   |
44khz_8bit_mono	  | 44 kHz, 8 Bit, Mono      |
44khz_8bit_stereo	| 44 kHz, 8 Bit, Stereo    |
44khz_16bit_mono	| 44 kHz, 16 Bit, Mono     |
44khz_16bit_stereo|	44 kHz, 16 Bit, Stereo   |
48khz_8bit_mono	  | 48 kHz, 8 Bit, Mono      |
48khz_8bit_stereo	| 48 kHz, 8 Bit, Stereo    |
48khz_16bit_mono	| 48 kHz, 16 Bit, Mono     |
48khz_16bit_stereo|	48 kHz, 16 Bit, Stereo   |
alaw_8khz_mono	  | ALaw, 8 kHz, Mono        |
alaw_8khz_stereo	| ALaw, 8 kHz, Stereo      |
alaw_11khz_mono	  | ALaw, 11 kHz, Mono       |
alaw_11khz_stereo	| ALaw, 11 kHz, Stereo     |
alaw_22khz_mono	  | ALaw, 22 kHz, Mono       |
alaw_22khz_stereo	| ALaw, 22 kHz, Stereo     |
alaw_44khz_mono	  | ALaw, 44 kHz, Mono       |
alaw_44khz_stereo	| ALaw, 44 kHz, Stereo     |
ulaw_8khz_mono	  | uLaw, 8 kHz, Mono        |
ulaw_8khz_stereo	| uLaw, 8 kHz, Stereo      |
ulaw_11khz_mono	  | uLaw, 11 kHz, Mono       |
ulaw_11khz_stereo	| uLaw, 11 kHz, Stereo     |
ulaw_22khz_mono	  | uLaw, 22 kHz, Mono       |
ulaw_22khz_stereo	| uLaw, 22 kHz, Stereo     |
ulaw_44khz_mono	  | uLaw, 44 kHz, Mono       |
ulaw_44khz_stereo	| uLaw, 44 kHz, Stereo     |

### Errors

The Text-To-Speech API returns the following errors:

Error Description |
------------------|
The subscription is expired or requests count limitation is exceeded! |
The request content length is too large!                              |
The language does not support!                                        |
The language is not specified!                                        |
The text is not specified!                                            |
The API key is not available!                                         |
The API key is not specified!                                         |
The subscription does not support SSML!                               |

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your application locally.

## Viewing Your Application

```
$ polymer serve
```

## Building Your Application

```
$ polymer build
```

This will create a `build/` folder with `bundled/` and `unbundled/` sub-folders
containing a bundled (Vulcanized) and unbundled builds, both run through HTML,
CSS, and JS optimizers.

You can serve the built versions by giving `polymer serve` a folder to serve
from:

```
$ polymer serve build/bundled
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.
