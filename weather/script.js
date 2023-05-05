const fetchData = async () => {
	const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
	const options = {
	  method: 'GET',
	  headers: {
		'X-RapidAPI-Key': 'd83666bef7msh642fb3fa25b73a4p18f02djsne246f5195ba6',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	  }
	};
  
	const getWeather = async (city) => {
	  const cityName = document.getElementById('cityName');
	  cityName.innerHTML = city;
  
	  try {
		const response = await fetch(url + city, options);
		const result = await response.json();
  
		const cloud_pct = document.getElementById('cloud_pct');
		// const temp = document.getElementById('temp');
		const temp2 = document.getElementById('temp2');
		const feels_like = document.getElementById('feels_like');
		const humidity = document.getElementById('humidity');
		// const humidity2 = document.getElementById('humidity');
		const min_temp = document.getElementById('min_temp');
		const max_temp = document.getElementById('max_temp');
		const wind_speed = document.getElementById('wind_speed');
		// const wind_speed2 = document.getElementById('wind_speed');
		// const wind_degrees = document.getElementById('wind_degrees');
		const sunrise = document.getElementById('sunrise');
		const sunset = document.getElementById('sunset');
  
		cloud_pct.innerHTML = result.cloud_pct;
		temp.innerHTML = result.temp;
		temp2.innerHTML = result.temp;
		feels_like.innerHTML = result.feels_like;
		humidity.innerHTML = result.humidity;
		humidity2.innerHTML = result.humidity;
		min_temp.innerHTML = result.min_temp;
		max_temp.innerHTML = result.max_temp;
		wind_speed.innerHTML = result.wind_speed;
		wind_speed2.innerHTML = result.wind_speed;
		// wind_degrees.innerHTML = result.wind_degrees;
		sunrise.innerHTML = result.sunrise;
		sunset.innerHTML = result.sunset;
  
		console.log(result);
	  } catch (error) {
		console.error(error);
	  }
	};
	submit.addEventListener("click",(e)=>{
		e.preventDefault()
		getWeather(city.value);
	})
	getWeather("Ahmedabad")
  };
  
  fetchData();
  

  