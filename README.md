# singolo

| Крайний срок сдачи | Имя проекта |
|--------------------|-------------|
| 23.02.2020 23:59 | Singolo. Part 1 |

#### 1. **Header** (`<header>` содержит только логотип и панель навигации):
- Интерактивная панель навигации.
- Логотип содержит 2 разных текстовых элемента, белый и красный.
- На странице обязательно должен присутствовать один элемент `<h1>`. Расположите его на свое усмотрение.
- Внизу есть небольшая линия другого цвета, будьте внимательны.

#### 2. Блок **Slider**
- Стрелки должны быть интерактивными. При нажатии ничего происходить не должно (слайды могу не листаться).

- Картинки в слайдере можно реализовать тремя способами. Выберите один из них:
  1. Создайте изображения наложением нескольких слоев, используя `z-index`. Элементы должны быть в `position: absolute`. Изображения телефонов так же могут быть сделаны средствами CSS.
  2. Создайте полные изображения вертикального и горизонтального телефонов с помощью графического редактора (фотошоп или аналог), объединив все слои.
  3. Объедините оба предыдущих варианта и создайте изображения трёх отдельных элементов: тень, контейнер телефона, внутреннее изображение на экране. В таком случае одно и то же изображение телефона и тени можно использовать для обеих картинок, просто повернув их на 90 градусов и 180 градусов. Тень можно сделать с помощью CSS.

- Внизу есть небольшая линия другого цвета, будьте внимательны.

#### 3\. Блок **Our Services**
- Трёхколоночный макет снизу. Лучше использовать [flexbox](https://habr.com/ru/post/467049/) или [grid](https://tuhub.ru/posts/css-grid-complete-guide). Float использовать можно. `<table>` - нельзя!
- Изображения можно экспортировать как иконки вместе с кругами. Другой вариант - экспортировать только сами иконки, а круги добавить свойством `border-radius`.
- Если в текстовой ячейке больше текста, чем она вмещает, и текст начинает выходить за границы элемента, то выступающая часть должна быть скрыта.
- Внизу есть небольшая линия другого цвета, будьте внимательны.

| Крайний срок сдачи | Имя проекта |
|--------------------|-------------|
| 01.03.2020 23:59 | Singolo. Part 2 |

## Технические требования

«Интерактивный» означает, что у элемента появляется визуальный эффект или анимация при каких-либо действиях пользователя, например, при наведении курсора или нажатии. Обычно такой эффект реализуют при помощи следующих свойств:
- `pointer: cursor`,
- `background`,
- `text-decoration: underline`,
- `color`.


#### 1. Блок **Portfolio**
- Интерактивные кнопки навигации.
- Четырех колоночный макет с изображениями.
- Если в сетку добавить больше элементов с изображениями (например, 15) - то следющие за 12-м не должны показываться (т.е. 13, 14, 15 не видны).
- Внизу есть небольшая линия другого цвета, будьте внимательны.

#### 2. Блок **About Us**
- Трёхколоночный макет снизу.
- Имя, если оно очень большое, все равно должно занимать ровно одну строку.
- Интерактивные социальные конки.
- Внизу есть небольшая линия другого цвета, будьте внимательны.

| Крайний срок сдачи | Имя проекта |
|--------------------|-------------|
| 08.03.2020 23:59 | Singolo. Part 3 |

## Технические требования

«Интерактивный» означает, что у элемента появляется визуальный эффект или анимация при каких-либо действиях пользователя, например, при наведении курсора или нажатии. Обычно такой эффект реализуют при помощи следующих свойств:
- `pointer: cursor`,
- `background`,
- `text-decoration: underline`,
- `color`.


#### 1. Блок **Get a Quote**
- Все элементы ввода - часть формы
- Форма должна быть интерактивной, а именно иметь возможность отправлять запрос. Добавьте кнопку 'Submit' куда-либо на ваше усмотрение. Кнопка должна находиться внутри формы.
- 2 поля помечены как (Required). Это значит, что должна быть хотя бы базовая валидация на text и на email.
- На всех полях должен быть placeholder.
- Указатель на номер телефона - должен быть ссылкой типа tel.
- Указатель на email - должен быть ссылкой типа mail.
- Внизу есть небольшая линия другого цвета, будьте внимательны.

#### 2. **Footer** (`<footer>` - это серая панель снизу):
- Интерактивные иконки
