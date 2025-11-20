// 4.1 Gör om följande funktion till en arrow-funktion

const getRandomColor = function () {
    const colors = ["red", "green", "blue", "yellow", "pink"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };
  
  // Skriv funktionen getRandomColor som arrow-funktion här:
  
  
  
  //4.2  Gör om följande funktion till en arrow-funktion:
  function isGreaterThanTen(number) {
    return number > 10;
  }
  
  // Skriv funktionen isGreaterThanTen som arrow-funktion här:
  
  
  
  
  //4.3  Gör om följande funktion till en arrow-funktion:
  const numbers = [1, 2, 3, 4, 5, 6];
  
  const evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
  });
  
  // Skriv funktionen evenNumbers som arrow-funktion här:

  
  
  
  
  // 4.4  Skriv om följande funktion (och callback-funktionen) till arrow-funktioner:
  function greetLater() {
    setTimeout(function () {
      console.log("Hello there!");
    }, 3000);
  }
  
  // Skriv setTimeout som arrow-funktion här:

  
  
  
  
  // Test
  console.log(getRandomColor()); // Ska logga en slumpmässig färg
  console.log(isGreaterThanTen(15)); // Ska logga true
  console.log(evenNumbers); // Ska logga alla jämna tal i listan
  greetLater(); // Ska logga "Hello there!" efter 3 sekunder
  