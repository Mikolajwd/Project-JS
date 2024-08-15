document.addEventListener("DOMContentLoaded", function() {
    const orderSection = document.querySelector(".orderSection");
    const successSection = document.querySelector(".successSection");
    const selectedCar = document.querySelector(".selectedCar");
    const selectedCarImg = document.querySelector(".selectedCarImg");
    const selectedCarDetails = document.querySelector(".selectedCarDetails");
    const orderForm = document.querySelector(".orderForm");
    const goBackButton = document.querySelector(".goBackButton");

    const cardCars = document.querySelectorAll(".cardCar");

    // cardCars.forEach(function(cardCar) {
    //     cardCar.addEventListener("click", function(event) {
    //         // Скрыть карточки автомобилей
    //         cardCars.forEach(function(card) {
    //             card.style.display = "none";
    //         });

    //         // Показать форму заказа
    //         orderSection.style.display = "block";

    //         // Отобразить выбранный автомобиль
    //         const carImg = cardCar.querySelector(".cardCarImg");
    //         const carDetails = cardCar.querySelector(".detailCar").cloneNode(true);
    //         selectedCarImg.src = carImg.src;
    //         selectedCarDetails.innerHTML = carDetails.innerHTML;
    //     });

        document.addEventListener("DOMContentLoaded", function() {
            // Массив объектов, представляющих каждый автомобиль
            const carsData = [
                {
                    markModel: "Ford Escape",
                    typeModel: "Crossover",
                    year: 2021,
                    power: "180PS, Petrol",
                    mileage: "55'000 miles",
                    currency: "EUR",
                    price: 12500,
                    imgSrc: "./img-cars/33001420917.jpg"
                },
                {
                    markModel: "Mercedes GLE",
                    typeModel: "Crossover",
                    year: 2023,
                    power: "150PS, Petrol",
                    mileage: "33'270 miles",
                    currency: "EUR",
                    price: 19250,
                    imgSrc: "./img-cars/33036143829.jpg"
                },
                // Добавьте остальные автомобили по аналогии
            ];
        
            // Функция для создания таблицы с данными автомобилей
            function generateCarsTable() {
                const tableBody = document.getElementById("carsTableBody");
        
                carsData.forEach(function(car) {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td><img src="${car.imgSrc}" alt="${car.markModel}" width="100"></td>
                        <td>${car.markModel}</td>
                        <td>${car.typeModel}</td>
                        <td>${car.year}</td>
                        <td>${car.power}</td>
                        <td>${car.mileage}</td>
                        <td>${car.currency}</td>
                        <td>${car.price}</td>
                    `;
                    tableBody.appendChild(row);
                });
            }
        
            // Вызов функции для создания таблицы при загрузке страницы
            generateCarsTable();
        });
    });



    goBackButton.addEventListener("click", function(event) {
        // Показать карточки автомобилей и скрыть форму заказа
        cardCars.forEach(function(card) {
            card.style.display = "block";
        });
        orderSection.style.display = "none";
    });
    
    
    orderForm.addEventListener("submit", function(event) {
        event.preventDefault();
        // Отправка формы, обработка заказа и т.д.

        // Показать секцию успешного заказа
        successSection.style.display = "block";
    });

});



// Wniesienie korekt w główny plik sk
// dodatkowe sprawdzenie czy działąmy z gitem