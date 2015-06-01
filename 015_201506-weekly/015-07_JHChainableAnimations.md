#JHChainableAnimations

페이지 링크 - https://github.com/jhurray/JHChainableAnimations

누군가 얘기했드시, 게으름이 더 좋은걸(영어에서는 어썸이라고 하나요? )만들어내나 봅니다. 
이번에 소개드릴 것은 ios에서 연속되는 애니메이션을 표현할 때, 아주 유용해 보이는 프로젝트 입니다. 

UIView에서 제공하는 애니메이션은 막강한 기능이 있지만, 다중으로 연속되는 애니메이션을 표현하려면 아주 복잡합니다. 
말할 필요도 없이, 그런 코드를 읽는 것도 매우 어렵죠. 

ReadMe 페이지에서 든 예를 보면, "50픽셀을 오른쪽으로 회전하면서 이동하고 이동이 완료 되면 배경색을 천천히 바꿔라. "라는 
조건이 있을때, 

#### 예전 방식을 보면
```
[UIView animateWithDuration:1.0
                          delay:0.0
         usingSpringWithDamping:0.8
          initialSpringVelocity:1.0
                        options:0 animations:^{
                            CGPoint newPosition = self.myView.frame.origin;
                            newPosition.x += 50;
                            self.myView.frame.origin = newPosition;
    } completion:^(BOOL finished) {
        [UIView animateWithDuration:0.5
                              delay:0.0
                            options:UIViewAnimationOptionCurveEaseIn
                         animations:^{
            self.myView.backgroundColor = [UIColor purpleColor];
        } completion:nil];
    }];
```

#### 하지만 JHChainableAnimations 프로젝트를 적용하면 

```
self.myView.moveX(50).spring.thenAfter(1.0).makeBackground([UIColor purpleColor]).easeIn.animate(0.5);
```

짠!! 

코드도 짧아졌을 뿐 아니라, 읽기도 쉬워졌네요. RBBAnimation이나 DCAnimationKit, PMTween 같은 것들도 있지만
JHChainableAnimations는 연속된 애니메이션에 강점을 가지고 읽고 쓰기가 더 쉽다고 주장합니다. 코드만 봐도 
그 말에 어느정도 수긍이 됩니다. 


스위프트와 함께쓰는것도 가능하고, 기본 레이아웃을 가지고 사용하는 것도 물론 가능합니다. ReadMe 페이지를 읽어보면
다양한 예제와 사용법에 대한 자세한 설명이 되어 있으니, ios에서 뭔가 애니메이션을 넣고자 하시는 분들은 사용해 보시면 도움이 될것 같습니다.
