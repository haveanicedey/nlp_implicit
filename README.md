# NLP Demo - Implicit Commands

Hi!

Please make sure you have NodeJS and Git installed on your machine.

After you git clone this repository, navigate to the root directory and run the following on Terminal

```
node app.js
```

Then on your **Google Chrome** browser go to *https://localhost/* to try the demo. Also have your **VPN** on.

#### Important Things To Note

1. I used **annyang** library for speech recognition. (https://github.com/TalAter/annyang/blob/master/docs/README.md)
2. And I used **pos** library for parts of speech tagging on the server side. (https://www.npmjs.com/package/pos)
3. The demo takes in your voice command, analyzes a part of it, and outputs the keywords (adjectives and nouns) that can be used for searching our music catalog.

The commands currently being used are

```
'I am feeling *term':                                                        process_query,
'I feel *term':                                                              process_query,
'I am *term':                                                                process_query,
'I was *term':                                                               process_query,
'I want *term':                                                              process_query,
'I need *term':                                                              process_query,
'I will be *term play (me) (something)':                                     process_query,
'I am *term play (me) (something)':                                          process_query,
'I need to *term play (me) (something)':                                     process_query,
'I need (some) (music) (songs) to *term':                                    process_query,
'(Can you) (Will you) (Please) Play (some) (music) (songs) for *term':       process_query,
'(Can you) (Will you) (Please) Play (me) (any) *term (music) (songs)':       process_query,
'I (will) like (any) (to listen to) (some) *term (music) (songs)':           process_query,
'I feel like (any) (some) *term (music) (songs)':                            process_query,
'I feel like listening to (any) (some) *term (music) (songs)':               process_query,
'I want (to) (listen to) (any) (some) *term (music) (songs)':                process_query,
'I would like (to) (listen to) (any) (some) *term (music) (songs)':          process_query,
```