<p align="center">
    <a href="http://ecomfe.github.io/fontmin/">
        <img height="128" width="128" src="https://raw.githubusercontent.com/ecomfe/fontmin/master/fontmin.png">
    </a>
</p>

label : NODE.JS, NPM

# FontMin
 
 정말 이번 Git Trend에 난해한 녀석중 하나. 월 822건을 다운 받을 정도의 프로젝트인데... 들어가보시면 알겠지만 난해한 프로젝트였습니다. 일단 홈페이지는 있으나 사실 만들어 놓은 페이지가 친절하거나 하지는 않습니다. 홈페이지는 한국어, 일본어, 중국어, 영어가 있으나 중국어를 잘하시는 분이 아니라면... 영어 페이지로 가세요. 번역이 친철하지 않습니다.

 정말 1시간정도를 이 페이지만 봤습니다. 대체 이게 뭘까? [TTF](http://yoon-talk.tistory.com/64)(True Type Font), glyph 이런게 익숙하지 않은 필자로써는 이해가 잘 되지 않는 내용들입니다. 

 실제 FontMin의 기능이 뭐냐하면 TTF로 되어 있는 문자를 [glyph](http://ko.wikipedia.org/wiki/%EC%9E%90%EC%B2%B4)(자체)를 이용해서 압축해서 보여준다는 의미입니다. 홈페이지를 가시면 다운로드되는 ZIP이 있을텐데 받으시면 Exe파일이 나타납니다. 실행을 시켰다. 느낀점은 해킹싸이트에서 악성 소프트웨어를 받은 느낌이었습니다. 실제 구동방법에 대해서도 의문이 아직 남습니다.. 솔직히 말씀드리면 정확히 못돌렸다는 의미죠.

 그외에도 글자를 ttf를 eot, woff, svg등으로 변환이 가능하다고 합니다. 
 
 또한 CSS 등에 있는 ttf에서 iconfont로도 전환이 가능하다고 합니다. 
 	  
 	var Fontmin = require('fontmin');

	var fontmin = new Fontmin()
	    .use(Fontmin.css({
	        fontPath: './',         // location of font file 
	        base64: true,           // inject base64 data:application/x-font-ttf; (gzip font with css). 
	                                // default = false
	        glyph: true,            // generate class for each glyph. default = false
	        iconPrefix: 'my-icon',  // class prefix, only work when glyph is `true`. default to "icon"
	        fontFamily: 'myfont',   // custom fontFamily, default to filename or get from analysed ttf file
	        asFileName: false       // rewrite fontFamily as filename force. default = false
	    }));

 폰뜨 때문에 불필요하게 이미지를 만들어야 하는 일이 줄어들 것으로 보여지는 대목이었습니다. 

 또한 CLI로도 fontmin을 적용할 수 있다고 하며,  [phantom-fetch-cli](https://www.npmjs.com/package/phantom-fetch-cli)를 통해서도 fontmin을 적용할 수 있다고 합니다. phantom-fetch는 phantomjs와 다르게 글짜만 찍어 내는 것 같네요.

 결론적으로 사용해 본 느낌은 실행, CLI, Web 적용 등으로 많은 준비를 해서 나온 프로젝트는 확실한 것 같지만, CSS에서 font를 적용할 수 있는 것 그리고 Font 관련해서 불필요한 낭비를 줄일 수 있다는 두가지 장점외에는 큰 장점을 느끼지 못한 것 같다. 
 

## Homepage

- [日本語](http://ecomfe.github.io/fontmin/jp)
- [한국어](http://ecomfe.github.io/fontmin/kr)
- [English](http://ecomfe.github.io/fontmin/en)  

##License 

  fontmin is licensed under the MIT License.

<div style="text-align:right">
 Written by: 강성동(Russell.Kang)
</div> 