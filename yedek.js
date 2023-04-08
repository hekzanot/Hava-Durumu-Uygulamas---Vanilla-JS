// Google Developer Console'dan API Key alınacak
// fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`)
//   .then(response => response.json())
//   .then(data => {
//     if (data.status === "OK") {
//       const address = data.results[0].formatted_address;
//       // Adres bilgisini input alanına ekleyin
//       input.value = address;
//     } else {
//       console.log("Adres bilgisi alınamadı");
//     }
//   })
//   .catch(error => console.error(error));

// locationButton.addEventListener('click', () => {
//     if (navigator.permissions) {
//       navigator.permissions.query({name:'geolocation'}).then((result) => {
//         if (result.state === 'granted') {
//           navigator.geolocation.getCurrentPosition((position) => {
//             const latitude = position.coords.latitude;
//             const longitude = position.coords.longitude;
//             fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${APIKey}&lang=tr`)
//             .then(response => response.json())
//             .then(json => {
//                 const image = document.querySelector('.weather-box img');
//                 const temperature = document.querySelector('.weather-box .temperature');
//                 const description = document.querySelector('.weather-box .description');
//                 const humidity = document.querySelector('.weather-details .humidity span');
//                 const wind = document.querySelector('.weather-details .wind span');

//                 switch (json.weather[0].main) {
//                     case 'Clear':
//                         image.src = 'img/clear.png';
//                         break;
//                     case 'Rain':
//                         image.src = 'img/rain.png';
//                         break;
//                     case 'Snow':
//                         image.src = 'img/snow.png';
//                         break;
//                     case 'Clouds':
//                         image.src = 'img/cloud.png';
//                         break;
//                     case 'Haze':
//                         image.src = 'img/mist.png';
//                         break;
//                     default:
//                         image.src = '';
//                 }

//                 temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
//                 description.innerHTML = `${json.weather[0].description}`;
//                 humidity.innerHTML = `${json.main.humidity}%`;
//                 wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

//                 weatherBox.style.display = '';
//                 weatherDetails.style.display = '';
//                 weatherBox.classList.add('fadeIn');
//                 weatherDetails.classList.add('fadeIn');
//                 container.style.height = '590px';
//             });
//           });
//         } else if (result.state === 'prompt') {
//           // izin isteği kutusu gösterilir
//           navigator.geolocation.getCurrentPosition((position) => {
//             const latitude = position.coords.latitude;
//             const longitude = position.coords.longitude;
//             fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${APIKey}&lang=tr`)
//             .then(response => response.json())
//             .then(json => {
//                 const image = document.querySelector('.weather-box img');
//                 const temperature = document.querySelector('.weather-box .temperature');
//                 const description = document.querySelector('.weather-box .description');
//                 const humidity = document.querySelector('.weather-details .humidity span');
//                 const wind = document.querySelector('.weather-details .wind span');

//                 switch (json.weather[0].main) {
//                     case 'Clear':
//                         image.src = 'img/clear.png';
//                         break;
//                     case 'Rain':
//                         image.src = 'img/rain.png';
//                         break;
//                     case 'Snow':
//                         image.src = 'img/snow.png';
//                         break;
//                     case 'Clouds':
//                         image.src = 'img/cloud.png';
//                         break;
//                     case 'Haze':
//                         image.src = 'img/mist.png';
//                         break;
//                     default:
//                         image.src = '';
//                 }

//                 temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
//                 description.innerHTML = `${json.weather[0].description}`;
//                 humidity.innerHTML = `${json.main.humidity}%`;
//                 wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

//                 weatherBox.style.display = '';
//                 weatherDetails.style.display = '';
//                 weatherBox.classList.add('fadeIn');
//                 weatherDetails.classList.add('fadeIn');
//                 container.style.height = '590px';
//             });
//           });
//         } else {
//           alert('Konum paylaşımı engellendi');
//         }
//       });
//     } else {
//       alert('Tarayıcınız konum paylaşmayı desteklemiyor.');
//     }
//   });