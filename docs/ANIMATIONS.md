# Animation Guidelines

## Duration Tokens

Используйте стандартизированные значения для consistency:

- **--transition-fast (150ms)**: Микро-интерактивность (hover, focus)
- **--transition-base (200ms)**: Стандартные переходы (открытие dropdown, тултипы)
- **--transition-slow (300ms)**: Более сложные анимации (drawer, sheet)
- **--transition-slower (500ms)**: Переходы между страницами

```jsx
// ✅ Правильно
<div className="transition-all duration-base">...</div>

// ❌ Неправильно
<div className="transition-all duration-[250ms]">...</div>
```

## Easing Functions

- **ease-out**: Для элементов, входящих в viewport (анимация начинается быстро)
- **ease-in**: Для элементов, покидающих viewport (анимация заканчивается быстро)
- **ease-in-out**: Для двусторонних анимаций

```css
/* Определены в index.css */
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

## Tailwind Animations

Доступные встроенные анимации:

```jsx
<div className="animate-fade-in">Fade in</div>
<div className="animate-slide-in-from-bottom">Slide up</div>
<div className="animate-slide-in-from-right">Slide from right</div>
<div className="animate-zoom-in">Zoom in</div>
<div className="animate-accordion-down">Accordion down</div>
```

## Best Practices

### 1. Не анимируйте более 2 свойств одновременно
```jsx
// ✅ Правильно
<div className="transition-opacity duration-base">...</div>

// ⚠️ Будьте осторожны
<div className="transition-all duration-base">...</div>
```

### 2. Избегайте Layout Shifts
Анимируйте `transform` и `opacity` вместо `width`, `height`, `margin`:

```jsx
// ✅ Хорошо для производительности
<div className="transition-transform">...</div>

// ❌ Плохо для производительности
<div className="transition-all">...</div>
```

### 3. Используйте will-change с осторожностью
```css
/* Только для часто анимируемых элементов */
.animated-element {
  will-change: transform;
}
```

### 4. Респект к Reduced Motion
```jsx
// Пример компонента с поддержкой prefers-reduced-motion
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{
    duration: prefersReducedMotion ? 0.01 : 0.3
  }}
>
  Content
</motion.div>
```

## Animation Checklist

- [ ] Используются стандартные duration tokens
- [ ] Применены правильные easing функции
- [ ] Не более 2 свойств анимируются одновременно
- [ ] Используется `transform` вместо `top/left/width/height`
- [ ] Респект к `prefers-reduced-motion`
- [ ] Анимации не мешают usability
- [ ] Нет дрожания или флешинга контента
