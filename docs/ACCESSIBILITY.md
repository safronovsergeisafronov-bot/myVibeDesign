# Accessibility Guidelines

## Keyboard Navigation
- Все интерактивные элементы должны быть доступны с клавиатуры
- Используйте логичный порядок табуляции (tab order)
- `Esc` должен закрывать модальные окна и overlay элементы
- `Enter` и `Space` должны активировать кнопки
- Стрелки должны работать в списках и меню

## Focus States
- **Всегда используйте** `.focus-visible-ring` класс для интерактивных элементов
- Focus должен быть хорошо виден на всех элементах
- Используйте `focus-visible:` вместо `focus:` для лучшей доступности

```jsx
// ✅ Правильно
<button className="focus-visible-ring">Click me</button>

// ❌ Неправильно
<button>Click me</button>
```

## ARIA Attributes
- Используйте `aria-label` для иконочных кнопок
- `aria-describedby` для подсказок к формам
- `aria-labelledby` для связи заголовков с секциями
- `role="alert"` для важных уведомлений
- `aria-expanded` для раскрывающихся элементов
- `aria-selected` для выбранных элементов

## Color Contrast
- **Текст:** минимум 4.5:1 контраст
- **Крупный текст (18px+):** минимум 3:1
- **UI элементы:** минимум 3:1
- Не полагайтесь только на цвет для передачи информации

## Screen Readers
- Все изображения должны иметь `alt` текст
- Используйте семантические HTML элементы
- Скрытый текст для screen readers: `sr-only` класс
- Объявляйте динамические изменения через `role="status"` или `aria-live`

## Forms
- Все инпуты должны иметь связанные labels
- Ошибки валидации должны быть доступны через `aria-describedby`
- Используйте `required`, `aria-required`, `aria-invalid`

## Prefers Reduced Motion
- Уважайте настройки пользователя `prefers-reduced-motion`
- Отключайте анимации для пользователей с motion sensitivity

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```
