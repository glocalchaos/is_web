const categories = {'Перчатки': 1, 
                    'Защита': 1,
                    'Шлемы' : 1, 
                    'Горнолыжные рюкзаки' : 2, 
                    'Рации' : 3,
                    'Лавинное снаряжение' : 3,
                    'Крепления' : 1,
                    'Ботинки' : 1,
                    'Очки' : 1,
                    'Термобелье' : 2,
                    'Одежда' : 1}
function getTable(sportType, skillLevel, height, weight, discountNumber) {
    var results = []
    if (sportType == "ski") {
        results.push(["Лыжи", 30 / discountNumber, "Рекомендованная длина: " + recommendSize(height, weight, sportType)])
    }
    else {
        results.push(["Сноуборд", 30 / discountNumber, "Рекомендованная длина: " + recommendSize(height, weight, sportType)])
    }

    var levelNumber = convertLevelToNumber(skillLevel)
    var selectedCategories = getRandomKeys(categories, levelNumber, discountNumber - 1)
    
    for (var category in selectedCategories) {
        results.push([selectedCategories[category], 30 / discountNumber, ""])
    }

    return results;
}

function recommendSize(height, weight, sport) {
    let recommendedSize;
  
    if (sport === 'snowboard') {
      if (height < 150) {
        recommendedSize = '140-145 cм';
      } else if (height >= 150 && height < 160) {
        recommendedSize = '145-150 cм';
      } else if (height >= 160 && height < 170) {
        recommendedSize = '150-155 cм';
      } else if (height >= 170 && height < 180) {
        recommendedSize = '155-160 cм';
      } else {
        recommendedSize = '160+ cм';
      }
    } else if (sport === 'ski') {
      if (weight < 50) {
        recommendedSize = '140-150 cм';
      } else if (weight >= 50 && weight < 60) {
        recommendedSize = '150-160 cм';
      } else if (weight >= 60 && weight < 70) {
        recommendedSize = '160-170 cм';
      } else if (weight >= 70 && weight < 80) {
        recommendedSize = '170-180 cм';
      } else {
        recommendedSize = '180+ cм';
      }
    }
  
    return recommendedSize;
  }

function convertLevelToNumber(level) {
    let number;

    switch (level) {
        case 'junior':
        number = 1;
        break;
        case 'middle':
        number = 2;
        break;
        case 'senior':
        number = 3;
        break;
        default:
        number = -1;
        break;
    }

    return number;
}


function getRandomKeys(dictionary, n, k) {
    let keys = [];
  
    for (let key in dictionary) {
      if (dictionary[key] >= n) {
        // console.log(key + " key");
        // console.log(dictionary[key] + " value");
        keys.push(key);
      }
    }
    
    //console.log(keys);

    if (keys.length <= k) {
      return keys;
    }
  
    let randomKeys = [];
    while (randomKeys.length < k) {
      let randomIndex = Math.floor(Math.random() * keys.length);
      let randomKey = keys[randomIndex];
      if (!randomKeys.includes(randomKey)) {
        randomKeys.push(randomKey);
      }
    }
    return randomKeys;
  }


// print(getTable("snowboard", "senior", "190", "90", "1"));

export {getTable};