

const searchFood = () => {

    const searchFeild = document.getElementById('search-Feild');
    const searchValue = searchFeild.value;
    searchFeild.value = "";

    if (searchValue == 0) {
        searchValue.innerText = 'please try later';
    }
    else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchAria(data.meals))

    }

};
const displaySearchAria = meals => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if (meals.length == 0) {
        searchResult.innerText = 'please type valo khabar'

    }
    else {
        // console.log('hoyse')
        meals.forEach(meal => {
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML =
                ` <div class="card h-100">
          <img  onclick="loadMealDetail(${meal.idMeal})" src="${meal.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
          </div>
        </div>`
            // console.log(meal);
            searchResult.appendChild(div);
        })
    }

}


const loadMealDetail = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data.meals[0]))
}
const displayMealDetail = meal => {
    console.log(meal)
    const mealDetail = document.getElementById('meal-detail');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
   
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
                <a href="${meal.strYoutube}" class="btn btn-primary">Recipy Vedio</a>
            </div>
       
    `
    mealDetail.appendChild(div);
}