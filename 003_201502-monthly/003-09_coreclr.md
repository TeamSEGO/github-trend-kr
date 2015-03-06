# 9.coreclr

페이지 링크 : https://github.com/dotnet/coreclr

지난 주에 이어 coreclr이 또 깃헙 트랜드에 올라왔습니다.주 coreclr을 오픈소스화 한 것이 계속해서 이슈화 되는 것 같습니다.

[.NET framework blog](http://blogs.msdn.com/b/dotnet/archive/2015/02/03/coreclr-is-now-open-source.aspx)에 들어가보시면 coreclr에 대한 정보를 확인 할 수 있습니다.

--- 지난 주 ---

이 프로젝트를 위해서는 몇가지 백그라운드를 알아야 합니다.  /dotnet/ 디렉토리 하위의 프로젝트에서 많은 부분들이 눈치채셨겠지만, MS의 닷넷의 coreclr이 오픈 소스로 announce 되고 개발되고 있습니다.

http://www.dotnetfoundation.org 사이트를 방문해 보시면 이 닷넷 파운데이션은 어떤 일을 하는지 어떻게 진행되는지 한눈에 확인하실 수 있습니다.

관련된 테크 크런치 기사는 http://techcrunch.com/2014/04/03/microsoft-launches-net-foundation-to-foster-the-net-open-source-ecosystem/ 와 같이 확인할 수 있는데요.

닷넷 오픈소스 하위프로젝트로는 roslyn, corefx, orleans.. 등등이 있네요.
coreclr의 contributor 들을 살펴보면 예상대로 대부분의 핵심 커미터들은 전부 MS 개발자네요. 

coreCLR은 닷넷 core runtime 의 줄임말로(?) Java Runtime 처럼 생각하시면 될 듯 합니다. 

ASP.net 5의 한 부분이며 .net framework의 서브셋이네요.

일단 컨트리뷰션하는 방법은 버그를 찾고 커뮤니케이션을 하자라고 적혀 있네요

![이미지1](../img/002$03.png)