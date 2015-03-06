#  RegExpBuilder.js

페이지 링크: https://github.com/thebinarysearchtree/regexpbuilderjs

사용 언어: JavaScript

정규 표현식을 좀더 편하게 사용할 수 있도록 만들어진 스크립트입니다. 이는 GitHub의 Verbal expression에서 영향을 받은 것으로 보이네요. ([VerbalExpressionJS](https://github.com/VerbalExpressions/JSVerbalExpressions))
Java 버전도 제공하고 있습니다. ([RegExpBuilder java](https://github.com/thebinarysearchtree/regexpbuilderjava))

굉장히 직관적이고 쉽게 사용할수 있도록 짜여진 것 같습니다. wiki로 정리된 문서를 보면 사용하시는데 더 좋을 것 같습니다.
* [RegExpBuilder 문서](https://github.com/thebinarysearchtree/regexpbuilderjs/wiki)
* 사용 예시
* 
    var regex = new RegExpBuilder()
    .startOfLine()
    .then("Team SEGO is ")
    .max(3).of("really ")
    .then("gorgeous")
    .getRegExp();
    regex.test("Team SEGO is really really gorgeous")
