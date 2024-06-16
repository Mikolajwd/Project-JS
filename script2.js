document.addEventListener('DOMContentLoaded', function () {
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
		const container = document.querySelector('.saleSection');
		carsData.forEach((car) => {
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

			card.appendChild(image);
			card.appendChild(detail);
			container.appendChild(card);
		});
	}

	displayCars();

	function updateTotalPrice(car, selectedOptions) {
		let totalPrice = car.price;
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
		const totalPriceElement = document.querySelector('.detailCar.price');
		totalPriceElement.textContent = totalPrice;
	}

	function populateCheckoutSection(car, checkboxes) {
		const orderSelectedCarSection = document.querySelector('.orderSelectedCar');
		orderSelectedCarSection.innerHTML = `
			<h2>Place Your Order</h2>
			<form class="orderForm">
				<div>
					<label for="name">Full Name:</label>
					<input type="text" name="name" required />
				</div>
				<div>
					<label for="email">Email:</label>
					<input type="email" name="email" required />
				</div>
				<div>
					<label for="address">Physical Address:</label>
					<input type="text" name="address" required />
				</div>
				<div>
					<label for="deliveryDate">Delivery Date:</label>
					<input type="date" name="deliveryDate" id="deliveryDate" required />
				</div>
				<div>
					<label for="paymentMethod">Payment Method:</label>
					<select name="paymentMethod" required>
						<option value="" disabled selected>Select Payment Method</option>
						<option value="credit">Credit</option>
						<option value="leasing">Leasing</option>
						<option value="cash">Cash</option>
					</select>
				</div>
				<table class="selectedOptionsTable">
					<thead>
						<tr>
							<th>Option</th>
							<th>Cost</th>
						</tr>
					</thead>
					<tbody>
						${Array.from(checkboxes)
							.filter((cb) => cb.checked)
							.map((cb) => {
								let cost;
								switch (cb.value) {
									case 'windowTint':
										cost = 200;
										break;
									case 'ledLights':
										cost = 2000;
										break;
									case 'paintProtection':
										cost = 1200;
										break;
									case 'customWheels':
										cost = 4000;
										break;
									case 'roofRack':
										cost = 800;
										break;
								}
								return `
									<tr>
										<td>${cb.value}</td>
										<td>${cost} EUR</td>
									</tr>
								`;
							})
							.join('')}
					</tbody>
				</table>
				<button type="submit" class="placeOrderButton">Place Order</button>
			</form>
		`;
	}

	function showCarDetails(car) {
		const saleSection = document.querySelector('.saleSection');
		saleSection.style.display = 'none';
		const selectedCar = document.querySelector('.selectedCar');
		selectedCar.style.display = 'block';
		selectedCar.innerHTML = `
			<button class="goNextButton">Go Next</button>
			<button class="goBackButton">Go Back</button>
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

		const checkboxes = document.querySelectorAll('input[type="checkbox"]');
		checkboxes.forEach((checkbox) => {
			checkbox.addEventListener('change', function () {
				const selectedOptions = Array.from(checkboxes)
					.filter((cb) => cb.checked)
					.map((cb) => cb.value);
				updateTotalPrice(car, selectedOptions);
			});
		});

		const goNextButton = document.querySelector('.goNextButton');
		goNextButton.addEventListener('click', function () {
			const checkoutSection = document.querySelector('.checkoutSection');
			checkoutSection.style.display = 'block';
			selectedCar.style.display = 'none';
			populateCheckoutSection(car, checkboxes);
		});

		const goBackButton = document.querySelector('.goBackButton');
		goBackButton.addEventListener('click', function () {
			selectedCar.style.display = 'none';
			saleSection.style.display = 'block';
		});
	}

	const cardCars = document.querySelectorAll('.cardCar');
	cardCars.forEach((card, index) => {
		card.addEventListener('click', function () {
			showCarDetails(carsData[index]);
		});
	});
});
