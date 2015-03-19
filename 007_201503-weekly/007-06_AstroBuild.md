# AstroBuild

- 페이지 링크: https://github.com/lhartikk/AstroBuild



이건 지구와 행성간의 정렬을 계산해주는 스크립트같네요

지구를 중심으로 한 각 행성들의 경도를 계산하고 가장 가까운 정수로 반올림해줍니다.



사용법은 아래와 같습니다.


 capistrano  를 미리 설치해야합니다.(https://github.com/capistrano/capistrano)


		 > cap production deploy


		INFO [dfe36319] Running /usr/bin/env python astro_build.py as lhartikk@188.166.5.240

		DEBUG [dfe36319] Command: python astro_build.py

		DEBUG [dfe36319]BUILD FAILED

		DEBUG [dfe36319]PLANETS ALIGNED: ['Mercury', 'Jupiter']

		DEBUG [dfe36319]ALIGNMENT: 149 degrees

		(Backtrace restricted to imported tasks)

		cap aborted!


살짝 코드를 보면 아래와 같습니다.




사용법
AstroBuild 은 간단한 python 스크립트로 되어있습니다.