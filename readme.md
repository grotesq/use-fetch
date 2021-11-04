# useFetch

## 개요

HTTP 클라이언트인 [axios](https://github.com/axios/axios)와 데이터 캐싱 라이브러리인 [SWR](https://swr.vercel.app)의 템플릿 라이브러리입니다. 해당 라이브러리에 대한 이해도가 있다면 더욱 잘 활용할 수 있습니다. 

## 설치

```shell
# 의존성 패키지 설치
npm i axios swr
# 라이브러리 설치
npm i https://github.com/grotesq/use-fetch
```

## 사용법

```js
import useFetch from 'use-fetch';

function Component() {
    const { data, error } = useFetch( 'https://jsonplaceholder.typicode.com/todos/1' );

    if( error ) return <>{ JSON.stringify( error ) }</>;
    if( !data ) return <>Loading...</>;
    return <>{ JSON.stringify( data ) }</>;
}
```