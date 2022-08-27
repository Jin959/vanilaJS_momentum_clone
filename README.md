vanilaJS_momentum_clone
=============
workspace for nomadcoder lesson : making clone web app   
[nomadcoder vanillaJS lesson](https://nomadcoders.co/javascript-for-beginners)    
with [vanillaJS Challenge](https://nomadcoders.co/challenges)                

### 학습기간
------------
> + 22.4.6 ~ 22.4.7
> + 22.4.11 ~ 22.4.23      
> + 22.4.24 CSS 제작      
         
### 기능들 / 배운 것
----------
> 1. 로컬 스토리지를 사용한 [로그인](https://github.com/Jin959/vanilaJS_momentum_clone/blob/main/js/greetings.js)   
>    - [document와 DOM객체](https://poiemaweb.com/js-dom#1-dom-document-object-model)  
>    - [DOM Query](https://poiemaweb.com/js-dom#3-dom-query--traversing-%EC%9A%94%EC%86%8C%EC%97%90%EC%9D%98-%EC%A0%91%EA%B7%BC) - ```querySelector, getElementById```  
>    - [DOM 어트리뷰트 노드 조작](https://poiemaweb.com/js-dom#42-%EC%96%B4%ED%8A%B8%EB%A6%AC%EB%B7%B0%ED%8A%B8-%EB%85%B8%EB%93%9C%EC%97%90%EC%9D%98-%EC%A0%91%EA%B7%BC%EC%88%98%EC%A0%95) - ```element.classList```  
>    - element.classList의 [메소드](https://developer.mozilla.org/ko/docs/Web/API/Element/classList#%EB%A9%94%EC%84%9C%EB%93%9C) - ```classList.add, remove, toggle```
>    - [addEventListener](https://poiemaweb.com/js-event#43-addeventlistener-%EB%A9%94%EC%86%8C%EB%93%9C-%EB%B0%A9%EC%8B%9D) 메소드 방식  
>    - [이벤트 객체](https://poiemaweb.com/js-event#7-event-%EA%B0%9D%EC%B2%B4)   
>    - 로그인 할 때 form 태그의 submit 이벤트 발생에 대한 [preventDefault](https://poiemaweb.com/js-event#91-eventpreventdefault)  
>    - [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage#examples)
>    - CSS [복합 셀렉터(Combinator)](https://poiemaweb.com/css3-selector#6-%EB%B3%B5%ED%95%A9-%EC%85%80%EB%A0%89%ED%84%B0-combinator)  
>    - HTML [\<form\> 태그](https://www.w3schools.com/html/html_forms.asp)
>   
> ----
> 2. Date Obj를 사용한 [실시간 시계](https://github.com/Jin959/vanilaJS_momentum_clone/blob/main/js/clock.js)  
>    - [Date Obj](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date)  
>    - 자바스크립트 [객체의 분류](https://poiemaweb.com/js-object#6-%EA%B0%9D%EC%B2%B4%EC%9D%98-%EB%B6%84%EB%A5%98)  
>    - 자바스크립트 [가비지 컬렉션](https://engineering.huiseoul.com/자바스크립트는-어떻게-작동하는가-메모리-관리-4가지-흔한-메모리-누수-대처법-5b0d217d788d)  
>    - 자바스크립트 [문자열 패딩](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#%EC%98%88%EC%8B%9C)
>    - 브라우져 [timer interrupt](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)를 사용한 시간 갱신 - ```setInterval()```
>   
> ----
> 3. 로컬 스토리지를 사용한 [To Do List](https://github.com/Jin959/vanilaJS_momentum_clone/blob/main/js/todo.js)  
>  
>    - 자바스크립트 배열고차함수  
>        * [arr.filter()](https://poiemaweb.com/js-array-higher-order-function#4-arrayprototypefiltercallback-value-t-index-number-array-array--any-thisarg-any-t--es5)  
>        * [array.forEach()](https://poiemaweb.com/js-array-higher-order-function#2-arrayprototypeforeachcallback-value-t-index-number-array-t--void-thisarg-any-void--es5)  
>    - paintToDo 함수에서 [노드생성](https://poiemaweb.com/js-dom#44-dom-%EC%A1%B0%EC%9E%91-%EB%B0%A9%EC%8B%9D) - ```createElement(), appendChild()```
>    - paintToDo 함수에서 노드추가 - [element.prepend()](https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend) 와 [element.append()](https://developer.mozilla.org/en-US/docs/Web/API/Element/append)  
>    - saveToDos 함수에서 Browser의 localstorage에 저장할 때 [JSON.stringify()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#%EC%84%A4%EB%AA%85) &   
>재접속 시 다시 로드할 때 [JSON.parse()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
>   
> ----
> 4. Math.random() 등을 이용한 [랜덤 배경 이미지](https://github.com/Jin959/vanilaJS_momentum_clone/blob/main/js/background.js)  
>   
> ----
> 5. Math.random() 등을 이용한 [랜덤 명언](https://github.com/Jin959/vanilaJS_momentum_clone/blob/main/js/quotes.js)   
>    - [innerHTML과 innerText의 차이점](https://hianna.tistory.com/480)  
>    - [HTML 컨텐츠 조작](https://poiemaweb.com/js-dom#43-html-%EC%BD%98%ED%85%90%EC%B8%A0-%EC%A1%B0%EC%9E%91manipulation) - ```innerHTML, innerText```   
>    - CSS [가상 선택자](https://poiemaweb.com/css3-selector#73-%EA%B5%AC%EC%A1%B0-%EA%B0%80%EC%83%81-%ED%81%B4%EB%9E%98%EC%8A%A4-%EC%85%80%EB%A0%89%ED%84%B0structural-pseudo-classes) - ```selector:pseudo-class```
>   
> ----
> 6. geolocation을 이용한 [날씨와 위치](https://github.com/Jin959/vanilaJS_momentum_clone/blob/main/js/weather.js)   
>    - [GPS 좌표 정보 가져오기](https://developer.mozilla.org/ko/docs/Web/API/Geolocation/getCurrentPosition) - ```geolocation.getCurrentPosition()```  
>    - [navigator](https://developer.mozilla.org/ko/docs/Web/API/Navigator/geolocation) - ```navigator.geolocation```
