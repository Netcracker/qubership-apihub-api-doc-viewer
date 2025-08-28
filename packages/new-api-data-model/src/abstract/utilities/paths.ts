import { ADV } from "../types/model";

// Вспомогательная функция для проверки, начинается ли массив a с массива b
const startsWith = (a: (string | number)[], b: (string | number)[]): boolean => {
  if (a.length < b.length) return false
  return b.every((val, i) => a[i] === val)
}

// Вспомогательная функция для проверки, является ли массив a префиксом массива b
const isPrefix = (a: (string | number)[], b: (string | number)[]): boolean => {
  if (a.length > b.length) return false
  return a.every((val, i) => val === b[i])
}

// Функция для поиска начальной позиции подпоследовательности в массиве
const findSubsequenceIndex = (arr: (string | number)[], subseq: (string | number)[]): number => {
  for (let i = 0; i <= arr.length - subseq.length; i++) {
    if (subseq.every((val, j) => arr[i + j] === val)) {
      return i
    }
  }
  return -1
}

// Функция для поиска всех позиций комбинеров (oneOf/anyOf) в пути
const findCombinerPositions = (arr: (string | number)[]): number[] => {
  const positions: number[] = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'oneOf' || arr[i] === 'anyOf') {
      positions.push(i)
    }
  }
  return positions
}

/**
 * Фильтрует список путей на основе выбранного пути choice
 *
 * @param paths - массив путей, где каждый путь это массив строк и чисел
 * @param choice - путь (массив строк и чисел) для фильтрации
 * @returns отфильтрованный массив путей
 */

export function filterPathsByChoice(
  paths: (string | number)[][],
  choice: (string | number)[]
): (string | number)[][] {
  // Проверяем, содержит ли choice комбинеры
  const hasCombiners = choice.some(item => item === 'oneOf' || item === 'anyOf')

  if (!hasCombiners) {
    // Используем оригинальную логику для случаев без комбинеров
    const basePath = choice.slice(0, -1)

    return paths.filter(path => {
      if (isPrefix(path, choice)) {
        return true
      }

      if (startsWith(path, choice)) {
        return true
      }

      if (basePath.length === 0) {
        return true
      }

      if (!startsWith(path, basePath)) {
        return true
      }

      return false
    })
  }

  // Находим позиции комбинеров в choice
  const choiceCombinerPositions = findCombinerPositions(choice)

  return paths.filter(path => {
    // Если в пути нет комбинеров, всегда включаем его
    if (!path.some(item => item === 'oneOf' || item === 'anyOf')) {
      return true
    }

    // Проверяем точные совпадения и префиксы
    if (isPrefix(path, choice) || startsWith(path, choice)) {
      return true
    }

    // Проверяем, содержит ли path полную последовательность choice
    const choiceIndex = findSubsequenceIndex(path, choice)
    if (choiceIndex >= 0) {
      // Проверяем, что это не конфликтующий выбор внутри другой ветки
      if (!hasConflictingChoiceInPath(path, choice, choiceIndex)) {
        return true
      }
    }

    // Ищем самый глубокий (правый) совпадающий комбинер в choice
    let bestMatch = null
    let bestMatchDepth = -1

    // Проходим по всем комбинерам в choice (начиная с самого глубокого)
    for (let i = choiceCombinerPositions.length - 1; i >= 0; i--) {
      const choiceCombinerPos = choiceCombinerPositions[i]
      const choicePrefix = choice.slice(0, choiceCombinerPos + 1)

      // Ищем этот префикс в path
      const prefixIndex = findSubsequenceIndex(path, choicePrefix)
      if (prefixIndex >= 0) {
        // Нашли совпадение на этой глубине
        bestMatch = {
          combinerIndex: i,
          combinerPos: choiceCombinerPos,
          pathMatchPoint: prefixIndex + choicePrefix.length,
          choiceMatchPoint: choiceCombinerPos + 1
        }
        bestMatchDepth = i
        break
      }
    }

    // Если не нашли совпадающих комбинеров
    if (!bestMatch) {
      // Проверяем, находится ли path в независимой области комбинеров
      // Для этого ищем общий префикс между choice и path до первого комбинера
      const firstChoiceCombiner = choiceCombinerPositions[0]
      const choiceBeforeFirstCombiner = choice.slice(0, firstChoiceCombiner)

      const pathCombinerPositions = findCombinerPositions(path)
      if (pathCombinerPositions.length > 0) {
        const firstPathCombiner = pathCombinerPositions[0]
        const pathBeforeFirstCombiner = path.slice(0, firstPathCombiner)

        // Если пути до первого комбинера не совпадают, это независимые области
        if (!startsWith(pathBeforeFirstCombiner, choiceBeforeFirstCombiner) &&
          !startsWith(choiceBeforeFirstCombiner, pathBeforeFirstCombiner)) {
          return true
        }
      }

      return false
    }

    // Проверяем соответствие после точки совпадения
    const remainingChoice = choice.slice(bestMatch.choiceMatchPoint)
    const remainingPath = path.slice(bestMatch.pathMatchPoint)

    if (remainingChoice.length === 0) {
      // Choice заканчивается на комбинере - включаем путь
      return true
    }

    if (remainingPath.length === 0) {
      // Path заканчивается, но choice продолжается
      // Включаем, если path является префиксом оставшейся части choice
      return isPrefix(remainingPath, remainingChoice)
    }

    // Сравниваем следующий элемент после комбинера
    if (remainingChoice[0] === remainingPath[0]) {
      // Если следующие элементы совпадают, нужно проверить дальше
      const nextChoiceItem = remainingChoice[0]

      // Находим, где заканчивается выбранный элемент в choice
      let nextCombinerInChoice = -1
      for (let j = 1; j < remainingChoice.length; j++) {
        if (remainingChoice[j] === 'oneOf' || remainingChoice[j] === 'anyOf') {
          nextCombinerInChoice = j
          break
        }
      }

      let nextCombinerInPath = -1
      for (let j = 1; j < remainingPath.length; j++) {
        if (remainingPath[j] === 'oneOf' || remainingPath[j] === 'anyOf') {
          nextCombinerInPath = j
          break
        }
      }

      // Если в choice есть следующий комбинер, но в path его нет на том же уровне
      if (nextCombinerInChoice > 0 && (nextCombinerInPath === -1 || nextCombinerInPath > nextCombinerInChoice)) {
        // Это может быть свойство объекта, которое не является комбинером
        // Проверяем, что путь начинается с выбранного элемента
        const selectedObjectPath = [nextChoiceItem]
        if (startsWith(remainingPath, selectedObjectPath)) {
          return true
        }
      }

      // Если оба пути продолжаются одинаково, проверяем рекурсивно
      if (nextCombinerInChoice === nextCombinerInPath) {
        return filterPathsByChoice([remainingPath], remainingChoice).length > 0
      }

      // Если в remainingChoice нет больше комбинеров, включаем все пути что начинаются с nextChoiceItem
      if (nextCombinerInChoice === -1) {
        return startsWith(remainingPath, [nextChoiceItem])
      }

      return true
    } else {
      // Элементы не совпадают - исключаем путь, если это альтернативы на том же уровне
      return false
    }
  })
}

// Проверяет, содержится ли choice в path с конфликтующими выборами
function hasConflictingChoiceInPath(path: (string | number)[], choice: (string | number)[], choiceStartIndex: number): boolean {
  // Проверяем, есть ли конфликтующие выборы перед найденной последовательностью choice
  const pathBeforeChoice = path.slice(0, choiceStartIndex)
  const choiceCombinerPositions = findCombinerPositions(choice)

  if (choiceCombinerPositions.length === 0) {
    return false
  }

  // Ищем комбинеры в части пути перед choice
  const pathBeforeCombinerPositions = findCombinerPositions(pathBeforeChoice)

  for (let i = pathBeforeCombinerPositions.length - 1; i >= 0; i--) {
    const combinerPos = pathBeforeCombinerPositions[i]

    // Если есть элемент выбора после комбинера
    if (combinerPos + 1 < pathBeforeChoice.length) {
      const choiceElement = pathBeforeChoice[combinerPos + 1]

      // Проверяем, начинается ли наша последовательность choice с того же комбинера
      if (choice[0] === pathBeforeChoice[combinerPos]) {
        // Если choice начинается с того же комбинера, но выбираем другой элемент
        if (choice.length > 1 && choice[1] !== choiceElement) {
          return true // Это конфликтующий выбор
        }
      }
    }
  }

  return false
}
/**
 * Обновляет список путей на основе выбранного пути choice
 *
 * @param rows - массив путей, где каждый путь это массив строк и чисел
 * @param choice - путь (массив строк и чисел) для фильтрации
 * @returns обновленный массив путей (visible = true для тех путей, которые удовлетворяют условиям)
 */

export function mapPathsByChoice(
  rows: ADV.Row[],
  choice: (string | number)[]
): ADV.Row[] {
  // Проверяем, содержит ли choice комбинеры
  const hasCombiners = choice.some(item => item === 'oneOf' || item === 'anyOf' || item === 'union')
  if (!hasCombiners) {
    // Используем оригинальную логику для случаев без комбинеров
    const basePath = choice.slice(0, -1)

    return rows.map(row => {
      // Приводим path к нужному типу для совместимости
      const path = row.path as (string | number)[]

      if (isPrefix(path, choice)) {
        row.visible = true
        return row
      }

      if (startsWith(path, choice)) {
        row.visible = true
        return row
      }

      if (basePath.length === 0) {
        row.visible = true
        return row
      }

      if (!startsWith(path, basePath)) {
        row.visible = true
        return row
      }

      row.visible = false
      return row
    })
  }

  // Находим позиции комбинеров в choice
  const choiceCombinerPositions = findCombinerPositions(choice)

  return rows.map(row => {
    // Приводим path к нужному типу для совместимости
    const path = row.path as (string | number)[]

    // Если в пути нет комбинеров, всегда включаем его
    if (!path.some(item => item === 'oneOf' || item === 'anyOf' || item === 'union')) {
      row.visible = true
      return row
    }

    // Проверяем точные совпадения и префиксы
    if (isPrefix(path, choice) || startsWith(path, choice)) {
      row.visible = true
      return row
    }


    // Проверяем, содержит ли path полную последовательность choice
    const choiceIndex = findSubsequenceIndex(path, choice)
    if (choiceIndex >= 0) {
      // Проверяем, что это не конфликтующий выбор внутри другой ветки
      if (!hasConflictingChoiceInPath(path, choice, choiceIndex)) {
        row.visible = true
        return row
      }
    }

    // Ищем самый глубокий (правый) совпадающий комбинер в choice
    let bestMatch = null
    let bestMatchDepth = -1

    // Проходим по всем комбинерам в choice (начиная с самого глубокого)
    for (let i = choiceCombinerPositions.length - 1; i >= 0; i--) {
      const choiceCombinerPos = choiceCombinerPositions[i]
      const choicePrefix = choice.slice(0, choiceCombinerPos + 1)

      // Ищем этот префикс в path
      const prefixIndex = findSubsequenceIndex(path, choicePrefix)
      if (prefixIndex >= 0) {
        // Нашли совпадение на этой глубине
        bestMatch = {
          combinerIndex: i,
          combinerPos: choiceCombinerPos,
          pathMatchPoint: prefixIndex + choicePrefix.length,
          choiceMatchPoint: choiceCombinerPos + 1
        }
        bestMatchDepth = i
        break
      }
    }

    // Если не нашли совпадающих комбинеров
    if (!bestMatch) {
      // Проверяем, находится ли path в независимой области комбинеров
      // Для этого ищем общий префикс между choice и path до первого комбинера
      const firstChoiceCombiner = choiceCombinerPositions[0]
      const choiceBeforeFirstCombiner = choice.slice(0, firstChoiceCombiner)

      const pathCombinerPositions = findCombinerPositions(path)
      if (pathCombinerPositions.length > 0) {
        const firstPathCombiner = pathCombinerPositions[0]
        const pathBeforeFirstCombiner = path.slice(0, firstPathCombiner)

        // Если пути до первого комбинера не совпадают, это независимые области
        if (!startsWith(pathBeforeFirstCombiner, choiceBeforeFirstCombiner) &&
          !startsWith(choiceBeforeFirstCombiner, pathBeforeFirstCombiner)) {
          row.visible = true
          return row
        }
      }

      row.visible = false
      return row
    }

    // Проверяем соответствие после точки совпадения
    const remainingChoice = choice.slice(bestMatch.choiceMatchPoint)
    const remainingPath = path.slice(bestMatch.pathMatchPoint)

    if (remainingChoice.length === 0) {
      // Choice заканчивается на комбинере - включаем путь
      row.visible = true
      return row
    }

    if (remainingPath.length === 0) {
      // Path заканчивается, но choice продолжается
      // Включаем, если path является префиксом оставшейся части choice
      row.visible = isPrefix(remainingPath, remainingChoice)
      return row
    }

    // Сравниваем следующий элемент после комбинера
    if (remainingChoice[0] === remainingPath[0]) {
      // Если следующие элементы совпадают, нужно проверить дальше
      const nextChoiceItem = remainingChoice[0]

      // Находим, где заканчивается выбранный элемент в choice
      let nextCombinerInChoice = -1
      for (let j = 1; j < remainingChoice.length; j++) {
        if (remainingChoice[j] === 'oneOf' || remainingChoice[j] === 'anyOf' || remainingChoice[j] === 'union') {
          nextCombinerInChoice = j
          break
        }
      }

      let nextCombinerInPath = -1
      for (let j = 1; j < remainingPath.length; j++) {
        if (remainingPath[j] === 'oneOf' || remainingPath[j] === 'anyOf' || remainingPath[j] === 'union') {
          nextCombinerInPath = j
          break
        }
      }

      // Если в choice есть следующий комбинер, но в path его нет на том же уровне
      if (nextCombinerInChoice > 0 && (nextCombinerInPath === -1 || nextCombinerInPath > nextCombinerInChoice)) {
        // Это может быть свойство объекта, которое не является комбинером
        // Проверяем, что путь начинается с выбранного элемента
        const selectedObjectPath = [nextChoiceItem]
        if (startsWith(remainingPath, selectedObjectPath)) {
          row.visible = true
          return row
        }
      }

      // Если оба пути продолжаются одинаково, проверяем рекурсивно
      if (nextCombinerInChoice === nextCombinerInPath) {
        // Создаем временные rows для рекурсивного вызова
        const tempRows = [{ ...row, path: remainingPath }]
        const recursiveResult = mapPathsByChoice(tempRows, remainingChoice)
        row.visible = recursiveResult.length > 0 && recursiveResult[0].visible
        return row
      }

      // Если в remainingChoice нет больше комбинеров, включаем все пути что начинаются с nextChoiceItem
      if (nextCombinerInChoice === -1) {
        row.visible = startsWith(remainingPath, [nextChoiceItem])
        return row
      }

      row.visible = true
      return row
    } else {
      // Элементы не совпадают - исключаем путь, если это альтернативы на том же уровне
      row.visible = false
      return row
    }
  })
}
