// Массив объектов с информацией о карточках автомобилей
const carsData = [
	{
		brand: 'Ford',
		model: 'Escape',
		type: 'Crossover',
		year: 2021,
		power: '180PS',
		fuelType: 'Petrol',
		mileage: "55'000 miles",
		currency: 'EUR',
		price: 12500,
		imageSrc: './img-cars/33001420917.jpg',
	},
	{
		brand: 'Mercedes',
		model: 'GLE',
		type: 'Crossover',
		year: 2023,
		power: '150PS',
		fuelType: 'Petrol',
		mileage: "33'270 miles",
		currency: 'EUR',
		price: 19250,
		imageSrc: './img-cars/33036143829.jpg',
	},
	{
		brand: 'BMW',
		model: 'X3',
		type: 'Crossover',
		year: 2023,
		power: '173PS',
		fuelType: 'Petrol',
		mileage: "78'100 miles",
		currency: 'EUR',
		price: 17350,
		imageSrc: './img-cars/33057548947.jpg',
	},
	{
		brand: 'KIA',
		model: 'Sorento',
		type: 'Crossover',
		year: 2023,
		power: '165PS',
		fuelType: 'Petrol',
		mileage: "32'900 miles",
		currency: 'EUR',
		price: 14200,
		imageSrc: './img-cars/33062412939.jpg',
	},
	{
		brand: 'Honda',
		model: 'CRV',
		type: 'Crossover',
		year: 2022,
		power: '166PS',
		fuelType: 'Petrol',
		mileage: '120100 miles',
		currency: 'EUR',
		price: 10350,
		imageSrc: './img-cars/33065395747.jpg',
	},
];

function displayCars() {
	// Найдем контейнер на странице, куда будем добавлять карточки автомобилей
	const container = document.querySelector('.saleSection');

	// Пройдемся по массиву carsData и для каждого объекта создадим HTML разметку карточки автомобиля
	carsData.forEach((car) => {
		// Создадим элементы для карточки автомобиля
		const card = document.createElement('div');
		card.classList.add('cardCar');

		const image = document.createElement('img');
		image.classList.add('cardCarImg');
		image.src = car.imageSrc;
		image.alt = 'auto na sprzedaż ' + car.brand + ' ' + car.model;

		const detail = document.createElement('div');
		detail.classList.add('detailCar');
		detail.innerHTML = `
            <h1 class="detailCar markModel">${car.brand} ${car.model}</h1>
            <h4 class="detailCar typeModel">${car.type}</h4>
            <h5 class="detailCar year">${car.year}</h5>
            <h5 class="detailCar power">${car.power}, ${car.fuelType}</h5>
            <h5 class="detailCar mileage">${car.mileage}</h5>
            <h5 class="detailCar currency">${car.currency}</h5>
            <h1 class="detailCar price">${car.price}</h1>
        `;

		// Добавим созданные элементы в карточку автомобиля
		card.appendChild(image);
		card.appendChild(detail);

		// Добавим карточку автомобиля в контейнер на странице
		container.appendChild(card);
	});
}

// Вызовем функцию displayCars(), чтобы отобразить карточки автомобилей на странице
displayCars();

function updateTotalPrice(car, selectedOptions) {
	let totalPrice = car.price;
	// Перебираем выбранные опции и добавляем их стоимость к общей стоимости
	selectedOptions.forEach((option) => {
		switch (option) {
			case 'windowTint':
				totalPrice += 200;
				break;
			case 'ledLights':
				totalPrice += 2000;
				break;
			case 'paintProtection':
				totalPrice += 1200;
				break;
			case 'customWheels':
				totalPrice += 4000;
				break;
			case 'roofRack':
				totalPrice += 800;
				break;
		}
	});
	// Выводим общую стоимость на странице
	const totalPriceElement = document.querySelector('.detailCar.price'); // По классу detailCar price
	totalPriceElement.textContent = totalPrice;
}

function showCarDetails(car) {
	// Скроем список всех карточек автомобилей
	const saleSection = document.querySelector('.saleSection');
	saleSection.style.display = 'none';

	// Создадим элементы для карточки автомобиля
	const selectedCar = document.querySelector('.selectedCar');
	selectedCar.style.display = 'block';
	selectedCar.innerHTML = `
    <button class="goBackButton"> Go Back </button>
    <button class="goNextButton"> Go next </button>
    <img class="selectedCarImg" style="width:550px" src="${car.imageSrc}" alt="${car.brand} ${car.model}" />
    <div class="selectedCarDetails">
    <h1 class="detailCar markModel">${car.brand} ${car.model}</h1>
    <h4 class="detailCar typeModel">${car.type}</h4>
    <h5 class="detailCar year">${car.year}</h5>
    <h5 class="detailCar power">${car.power}, ${car.fuelType}</h5>
    <h5 class="detailCar mileage">${car.mileage}</h5>
    <h5 class="detailCar currency">${car.currency}</h5>
    <h1 class="detailCar price">${car.price}</h1>
    <h2>Additional Options:</h2>
    <label><input type="checkbox" name="option" value="windowTint"> Window Tint (+200 EUR)</label><br>
    <label><input type="checkbox" name="option" value="ledLights"> LED Lights (+2000 EUR)</label><br>
    <label><input type="checkbox" name="option" value="paintProtection"> Paint Protection (+1200 EUR)</label><br>
    <label><input type="checkbox" name="option" value="customWheels"> Custom Wheels (+4000 EUR)</label><br>
    <label><input type="checkbox" name="option" value="roofRack"> Roof Rack (+800 EUR)</label><br>
    </div>
    `;

	// обработчик события на чекбоксы внутри функции
	const checkboxes = document.querySelectorAll('input[type="checkbox"]');
	checkboxes.forEach((checkbox) => {
		checkbox.addEventListener('change', function () {
			const selectedOptions = Array.from(checkboxes)
				.filter((cb) => cb.checked)
				.map((cb) => cb.value);
			// Обновляем стоимость при изменении выбранных опций
			updateTotalPrice(car, selectedOptions); // Передаем объект car
		});
	});

	// Покажем карточку выбранного автомобиля
	selectedCar.style.display = 'block';
	console.log(selectedCar);

const checkoutSection = document.querySelector('.checkoutSection')


	// обработчик событий для кнопки вперед
	const goNextButton = document.querySelector('.goNextButton');
	goNextButton.addEventListener('click', function () {
		console.log('click go next');
		checkoutSection.style.display = 'block';
		selectedCar.style.display = 'none';
	});
	
	
	function goBack () {
		console.log('click go back');
		
		saleSection.style.display = 'block';
		selectedCar.style.display = 'none';
	};
	
	// обработчик событий для кнопки назад
	const goBackButton = document.querySelector('.goBackButton');
	goBackButton.addEventListener('click', goBack);
	
	const btnCancel = document.querySelector('.btn.cancel')
	btnCancel.addEventListener("click", () => {
		goBack();
		console.log('click cancel');
		checkoutSection.style.display = 'none';
		
	})

}
	
	
// Добавим обработчики событий для карточек автомобилей
const btnAddOptions = document.querySelector('.btn.addOptions')
const cardCars = document.querySelectorAll('.cardCar');
cardCars.forEach((card, index) => {
	card.addEventListener('click', function () {
		console.log('Clicked card index:', index); // Выводим индекс карточки в консоль
		// Отобразим детали выбранного автомобиля
		showCarDetails(carsData[index]);
	});

	
	btnAddOptions.addEventListener("click", () => {
		console.log('click add option');
		showCarDetails(carsData[index]);
	})
});





const btnAccept = document.querySelector('.btn.accept');
btnAccept.addEventListener("click", () => {
	console.log('click accept');
})


