#!/bin/bash

# Цвета для вывода
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🔍 Начинаю полную проверку проекта myVibeDesign...${NC}\n"

# Проверка существования node_modules
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}⚠️  node_modules не найден. Запускаю npm install...${NC}"
    npm install
fi

# Счётчики
ERRORS=0
WARNINGS=0

# 1. Проверка сборки
echo -e "${BLUE}📦 Шаг 1/5: Проверка сборки...${NC}"
npm run build > build.log 2>&1
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Сборка успешна${NC}"
else
    echo -e "${RED}❌ Сборка с ошибками${NC}"
    echo -e "${YELLOW}Посмотрите build.log для деталей${NC}"
    ERRORS=$((ERRORS+1))
fi

# 2. Проверка размера бандла
echo -e "\n${BLUE}📊 Шаг 2/5: Анализ размера бандла...${NC}"
if [ -d "dist/assets" ]; then
    MAIN_JS=$(find dist/assets -name "index-*.js" -print0 | xargs -0 ls -lh 2>/dev/null | head -1 | awk '{print $5}')
    MAIN_CSS=$(find dist/assets -name "index-*.css" -print0 | xargs -0 ls -lh 2>/dev/null | head -1 | awk '{print $5}')

    echo -e "Основной JS:  ${YELLOW}$MAIN_JS${NC}"
    echo -e "Основной CSS: ${YELLOW}$MAIN_CSS${NC}"

    # Проверка размера JS (должен быть < 1MB)
    MAIN_JS_BYTES=$(find dist/assets -name "index-*.js" -print0 | xargs -0 ls -l 2>/dev/null | head -1 | awk '{print $5}')
    if [ "$MAIN_JS_BYTES" -gt 1048576 ]; then
        echo -e "${YELLOW}⚠️  JS бандл > 1MB. Рекомендуется оптимизация${NC}"
        WARNINGS=$((WARNINGS+1))
    else
        echo -e "${GREEN}✅ Размер бандла в норме${NC}"
    fi
else
    echo -e "${RED}❌ dist/assets не найден${NC}"
    ERRORS=$((ERRORS+1))
fi

# 3. Проверка файловой структуры компонентов
echo -e "\n${BLUE}🗂️  Шаг 3/5: Проверка файловой структуры...${NC}"

# Проверка наличия критических файлов
CRITICAL_FILES=(
    "src/components/ui/index.js"
    "src/components/ui/form.jsx"
    "src/components/ui/form-group.jsx"
    "src/pages/DesignSystemPage.jsx"
    "src/pages/NewComponentsPage.jsx"
    "src/App.jsx"
    "tailwind.config.js"
    "vite.config.js"
)

for file in "${CRITICAL_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✅ $file${NC}"
    else
        echo -e "${RED}❌ $file не найден${NC}"
        ERRORS=$((ERRORS+1))
    fi
done

# 4. Проверка наличия новых компонентов из аудита
echo -e "\n${BLUE}🎨 Шаг 4/5: Проверка новых компонентов после аудита...${NC}"

NEW_COMPONENTS=(
    "src/components/ui/date-picker.jsx"
    "src/components/ui/time-picker.jsx"
    "src/components/ui/data-table.jsx"
    "src/components/ui/combobox.jsx"
    "src/components/ui/multi-select.jsx"
    "src/components/ui/number-input.jsx"
    "src/components/ui/charts/line-chart.jsx"
    "src/components/ui/charts/bar-chart.jsx"
    "src/components/ui/charts/pie-chart.jsx"
    "src/components/ui/charts/area-chart.jsx"
    "src/components/ui/metric-widget.jsx"
    "src/components/ui/filter-panel.jsx"
    "src/components/ui/search-bar.jsx"
    "src/components/ui/notification-center.jsx"
    "src/components/ui/course-card.jsx"
    "src/components/ui/lesson-card.jsx"
    "src/components/ui/student-profile-card.jsx"
    "src/components/ui/teacher-profile-card.jsx"
    "src/components/ui/quiz-card.jsx"
    "src/components/ui/attendance-tracker.jsx"
    "src/components/ui/timetable.jsx"
    "src/components/ui/achievement-badge.jsx"
    "src/components/ui/context-menu.jsx"
    "src/components/ui/tree-view.jsx"
    "src/components/ui/drawer.jsx"
    "src/components/ui/sheet.jsx"
    "src/components/ui/command.jsx"
    "src/components/ui/confirm-dialog.jsx"
    "src/components/ui/loading-overlay.jsx"
    "src/components/ui/error-boundary.jsx"
)

FOUND=0
MISSING=0

for component in "${NEW_COMPONENTS[@]}"; do
    if [ -f "$component" ]; then
        FOUND=$((FOUND+1))
    else
        echo -e "${RED}❌ $component отсутствует${NC}"
        MISSING=$((MISSING+1))
        ERRORS=$((ERRORS+1))
    fi
done

echo -e "${GREEN}✅ Найдено компонентов: $FOUND${NC}"
if [ $MISSING -gt 0 ]; then
    echo -e "${RED}❌ Отсутствует компонентов: $MISSING${NC}"
fi

# 5. Проверка зависимостей
echo -e "\n${BLUE}📚 Шаг 5/5: Проверка зависимостей...${NC}"

REQUIRED_DEPS=(
    "react-hook-form"
    "zod"
    "@hookform/resolvers"
    "recharts"
    "react-day-picker"
    "date-fns"
    "@tanstack/react-table"
    "cmdk"
    "vaul"
)

for dep in "${REQUIRED_DEPS[@]}"; do
    if npm list "$dep" > /dev/null 2>&1; then
        echo -e "${GREEN}✅ $dep установлен${NC}"
    else
        echo -e "${RED}❌ $dep не установлен${NC}"
        ERRORS=$((ERRORS+1))
    fi
done

# 6. Проверка импортов в index.js
echo -e "\n${BLUE}🔗 Дополнительно: Проверка экспортов...${NC}"
if grep -q "export { FormGroup }" src/components/ui/index.js; then
    echo -e "${GREEN}✅ FormGroup экспортируется${NC}"
else
    echo -e "${RED}❌ FormGroup не экспортируется${NC}"
    WARNINGS=$((WARNINGS+1))
fi

if grep -q "export { DataTable }" src/components/ui/index.js; then
    echo -e "${GREEN}✅ DataTable экспортируется${NC}"
else
    echo -e "${RED}❌ DataTable не экспортируется${NC}"
    WARNINGS=$((WARNINGS+1))
fi

if grep -q "export { LineChart, BarChart, PieChart, AreaChart }" src/components/ui/index.js; then
    echo -e "${GREEN}✅ Графики экспортируются${NC}"
else
    echo -e "${RED}❌ Графики не экспортируются${NC}"
    WARNINGS=$((WARNINGS+1))
fi

# Итоговый отчёт
echo -e "\n${BLUE}═══════════════════════════════════════${NC}"
echo -e "${BLUE}         ИТОГОВЫЙ ОТЧЁТ${NC}"
echo -e "${BLUE}═══════════════════════════════════════${NC}"

if [ $ERRORS -eq 0 ] && [ $WARNINGS -eq 0 ]; then
    echo -e "${GREEN}✅ Все проверки пройдены успешно!${NC}"
    echo -e "${GREEN}Проект готов к использованию 🚀${NC}"
    exit 0
elif [ $ERRORS -eq 0 ]; then
    echo -e "${YELLOW}⚠️  Найдено предупреждений: $WARNINGS${NC}"
    echo -e "${GREEN}Критических ошибок: 0${NC}"
    echo -e "${YELLOW}Проект работает, но рекомендуется исправить предупреждения${NC}"
    exit 0
else
    echo -e "${RED}❌ Найдено критических ошибок: $ERRORS${NC}"
    echo -e "${YELLOW}⚠️  Найдено предупреждений: $WARNINGS${NC}"
    echo -e "${RED}Проект требует исправлений${NC}"
    echo -e "\n${YELLOW}Рекомендации:${NC}"
    echo -e "1. Проверьте build.log для деталей ошибок сборки"
    echo -e "2. Убедитесь, что все зависимости установлены: npm install"
    echo -e "3. Проверьте отсутствующие компоненты выше"
    exit 1
fi
