# testcafe-error-ffmpeg

Example of TestCafe error with recording

1. run `npm install -g testcafe`
2. run `npm install --save @ffmpeg-installer/ffmpeg`
3. run `testcafe mptest1.js mptest2.js --video artifacts/videos`


Sometimes it works, sometimes it doesn't. The behavior I'm seeing is that it gets caught up and sits indefinitely after getting to `mptest2.js`.

