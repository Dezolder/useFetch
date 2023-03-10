#### Профессия Middle Frontend-разработчик 
### Модуль 3. React 
## Урок 4. Свой Хук
# Задание #1


Реализуй хук  ***useFetch()***, который можно будет использовать следующим образом:

```js
import { useFetch } from './useFetch';

function Demo() {
  const {
    data,
    isLoading,
    error,
    refetch
  } = useFetch('https://jsonplaceholder.typicode.com/posts');
	
  return (
    <div>
      <div>
        <button onClick={() => refetch({
          params: {
            _limit: 3
          }
        })}>
          Перезапросить
        </button>
      </div>
      {isLoading && 'Загрузка...'}
      {error && 'Произошла ошибка'}
      {data && !isLoading && data.map(item => <div key={item.id}>{item.title}</div>) }
    </div>
  );
}
```

----

Порядок действий:

1. В Компоненте Demo добавить состояния для data, isLoading, error.
2. Реализовать useEffect c запросом через axios.
3. Реализовать функцию refetch.
4. Убедиться что всё работает.
5. Перенести в кастомный Хук useFetch.

---

Оценка времени:
- Планировал: 2 часа
- Потратил: 5 часов