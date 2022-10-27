import React from 'react';

const Trailler = (props) => {
    return (
        <div>
          
            <div id="instructions">
                <video id="my_video_1" className="video-js vjs-default-skin" width="640px" height="267px" controls preload="none" poster="http://video-js.zencoder.com/oceans-clip.jpg" data-setup="{ &quot;aspectRatio&quot;:&quot;640:267&quot;, &quot;playbackRates&quot;: [1, 1.5, 2] }">
                    <source src="https://vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
                    <source src="https://vjs.zencdn.net/v/oceans.webm" type="video/webm" />
                </video>
            </div>
            <style dangerouslySetInnerHTML={{ __html: "\n#instructions { max-width: 640px; text-align: left; margin: 30px auto; }\n#instructions textarea { width: 100%; height: 100px; }\n\n/* Show the controls (hidden at the start by default) */\n.video-js .vjs-control-bar { \n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n/* Make the demo a little prettier */\nbody {\n  margin-top: 20px;\n  background: #222;\n  text-align: center; \n  color: #aaa;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  background: radial-gradient(#333, hsl(200,30%,6%) );\n}\n\na, a:hover, a:visited { color: #76DAFF; }\n" }} />
        </div>

    );
}

export default Trailler;
