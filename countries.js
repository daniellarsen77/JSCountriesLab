class Country {
    constructor(name, language, helloWorld) {
      this.name = name;
      this.language = language;
      this.helloWorld = helloWorld;
    }
  
    displayColors() {
      document.body.style.backgroundColor = this.getColor();
      document.body.style.color = this.getContrastColor();
    }
  
    getColor() {
// Returns the color based on country
      switch (this.name) {
        case 'USA':
          return 'red';
        case 'France':
          return 'blue';
        case 'Japan':
          return 'white';
        case 'Brazil':
          return 'green';
        case 'Australia':
          return 'yellow';
        default:
          return 'gray';
      }
    }
  
    getContrastColor() {
      // Return the contrast color based on the country
      // This function returns white or black, depending on the background color
      const color = this.getColor();
      const r = parseInt(color.substr(1, 2), 16);
      const g = parseInt(color.substr(3, 2), 16);
      const b = parseInt(color.substr(5, 2), 16);
      const brightness = Math.sqrt(
        (r * r * 0.241) +
        (g * g * 0.691) +
        (b * b * 0.068)
      );
      
      // Adjust the contrast color specifically for Japan
      if (this.name === 'Japan') {
        return '#000000';
      } else {
        return brightness > 130 ? '#000000' : '#ffffff';
      }
    }
  }
  
// Array with countries, there language, and saying Hello
  const countries = [
    new Country('USA', 'English', 'Hello, World!'),
    new Country('France', 'French', 'Bonjour, le monde !'),
    new Country('Japan', 'Japanese', 'こんにちは、世界！'),
    new Country('Brazil', 'Portuguese', 'Olá, mundo!'),
    new Country('Australia', 'English', 'Hello, mate!')
  ];
  
// Populates country dropdown
  const countrySelect = document.getElementById('country-select');
  countries.forEach(country => {
    const option = document.createElement('option');
    option.value = country.name;
    option.textContent = country.name;
    countrySelect.appendChild(option);
  });
  
  // Function to prompt the user for country selection and update the DOM
  function selectCountry() {
    const countryName = document.getElementById('country-select').value;
  
    // Find the selected country in the array
    const selectedCountry = countries.find(country =>
      country.name.toLowerCase() === countryName.toLowerCase()
    );
  
    if (selectedCountry) {
      // Repaint the DOM based on the selected country
      selectedCountry.displayColors();
  
      // Update the displayed country information
      document.getElementById('country-name').textContent = selectedCountry.name;
      document.getElementById('official-language').textContent = selectedCountry.language;
      document.getElementById('hello-world').textContent = selectedCountry.helloWorld;
    } else {
      alert('Invalid country name!');
    }
  }
  