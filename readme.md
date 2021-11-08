# useFetch

## 개요

HTTP 클라이언트인 [axios](https://github.com/axios/axios)와 데이터 캐싱 라이브러리인 [SWR](https://swr.vercel.app)의 템플릿 라이브러리입니다. 해당 라이브러리에 대한 이해도가 있다면 더욱 잘 활용할 수 있습니다.

코드만 참조하고 axios 대신 다른 라이브러를 사용하고 싶거나, 패키지 설치 없이 코드를 사용하려면 [/src/index.ts](/src/index.ts) 파일의 복사해서 사용하세요.

## 설치

```shell
# 의존성 패키지 설치
npm i axios swr
# 라이브러리 설치
npm i @grotesq/use-fetch
```

## 사용법

### useFetch

데이터를 불러오고 캐싱합니다.

```js
import useFetch from 'use-fetch';

function Component() {
    const { data, error } = useFetch( 'https://jsonplaceholder.typicode.com/todos/1' );

    if( error ) return <>{ JSON.stringify( error ) }</>;
    if( !data ) return <>Loading...</>;
    return <>{ JSON.stringify( data ) }</>;
}
```

### fetcher

캐싱 없이 단일 데이터 호출만 수행합니다.

```js
import { fetcher } from 'use-fetch';

fetcher( 'https://jsonplaceholder.typicode.com/todos/1' )
  .then( data => console.log( data ) )
  .catch( console.warn );
```

### prefetch

prefetch, refresh, revalidate 등을 목적으로 사용됩니다.

```js
import { prefetch } from 'use-fetch';

function Component() {
    return(
        <button onClick={ () => prefetch( 'https://jsonplaceholder.typicode.com/todos/1' )}>Refresh</button>
    )
}
```

## 자주 묻는 질문

### 왜 의존성 패키지는 따로 설치해야 하나요?
본 패키지의 용량을 줄이려고 그랬습니다.
