const moreClearSideBar = () => {
    document.querySelector('#steps-description').value = "";
    document.querySelector('#recipe-title').value = "";
    document.querySelector('#recipe-description').value = "";
    document.querySelector('#recipe-portion').value = 1;
    document.querySelector('#time').value = 1;
    document.querySelector('#difficulty').value = 1;
    document.querySelector('#unit-selector-id').value = "unit";
    document.querySelector('#number-id').value = "";
    document.querySelector('#number-id').value = "";
    document.querySelector('#ingredient-id').value = "";
};


document.querySelector('.save-button').onclick = function () {
    const recipeList = document.querySelector('.recipes-list-items');
    const recipeNewDiv = document.createElement('div');
    recipeNewDiv.className = 'recipe-item';

    const titleTag = document.createElement('h4');
    const text = document.createTextNode(document.querySelector('#recipe-title').value);
    if ("" === text.data) {
        window.alert("We're sorry.You must complete the title!");
    } else {
        titleTag.appendChild(text);
        recipeNewDiv.appendChild(titleTag);

        const aboutRecipeTag = document.createElement('p');
        const aboutText = document.createTextNode(document.getElementById('recipe-description').value);
        aboutRecipeTag.appendChild(aboutText);
        recipeNewDiv.appendChild(aboutRecipeTag);

        const recipeItemAboutDetailsDiv = document.createElement('div');
        recipeItemAboutDetailsDiv.className = 'recipe-item-about-details';
        recipeNewDiv.appendChild(recipeItemAboutDetailsDiv);

        const recipeItemAboutTag = [];
        for (let i = 0; i < 3; i++) {
            recipeItemAboutTag.push(document.createElement('span'));
            recipeItemAboutTag[i].innerHTML = "<style> span{ margin-right:5px;}</style>";
        }
        for (let i = 0; i < 3; i++) {
            recipeItemAboutDetailsDiv.appendChild(recipeItemAboutTag[i]);
        }

        const portions = document.createTextNode(`${document.getElementById('recipe-portion').value} Portion(s)`);
        recipeItemAboutTag[0].appendChild(portions);

        const time = document.createTextNode(`${document.getElementById('time').value} min(s)`);
        recipeItemAboutTag[1].appendChild(time);

        const difficulty = document.createTextNode(`${document.getElementById('difficulty').value} Difficulty`);
        recipeItemAboutTag[2].appendChild(difficulty);

        const recipeListSelector = document.querySelector('#recipe-selector-label');
        const recipeListTag = document.createElement('option');
        recipeListSelector.appendChild(recipeListTag);
        const titleList = document.createTextNode(document.querySelector('#recipe-title').value);
        recipeListTag.appendChild(titleList);

        const recipeIngredientsContainer=document.createElement('div');
        recipeIngredientsContainer.className='recipe-item-ingredients';
        const recipeIngredientsList=document.createElement('ul');
        const recipeIngredientsElement=document.createElement('li');
        const recipeIngredientsElementIcon=document.createElement('i');
        recipeIngredientsElementIcon.className='fas fa-angle-double-right';

        const quantity=document.querySelector('#number-id').value;
        const unit=document.querySelector('#unit-selector-id').value;
        const ingredient=document.querySelector('#ingredient-id').value;
        const recipeIngredientsElementText=document.createTextNode(`${quantity} ${unit} of ${ingredient}`);
        recipeIngredientsElement.appendChild(recipeIngredientsElementIcon);
        recipeIngredientsElement.appendChild(recipeIngredientsElementText);
        recipeIngredientsList.append(recipeIngredientsElement);
        recipeIngredientsContainer.append(recipeIngredientsList);

        recipeNewDiv.append(recipeIngredientsContainer);


        const recipeItemStepsDiv = document.createElement('div');
        recipeItemStepsDiv.className = 'recipe-item-steps';
        recipeNewDiv.appendChild(recipeItemStepsDiv);

        const recipeItemStepsTag = document.createElement('ol');
        const recipeItemStepsText = document.createTextNode(document.getElementById('steps-description').value);
        const recipeItemStepsArray = recipeItemStepsText.textContent.split('.');
        const recipeItemStepsLiTag = [];

        for (let i = 0; i < recipeItemStepsArray.length; i++) {
            recipeItemStepsLiTag.push(document.createElement('li'));
            recipeItemStepsLiTag[i].innerHTML = "<style> li{ margin:10px 0;}</style>";
            recipeItemStepsTag.appendChild(recipeItemStepsLiTag[i]);
        }

        for (let i = 0; i < recipeItemStepsArray.length; i++) {
            recipeItemStepsLiTag[i].innerText = recipeItemStepsArray[i];
        }

        recipeNewDiv.appendChild(recipeItemStepsTag);



        recipeList.appendChild(recipeNewDiv);
    }
    moreClearSideBar();

}


document.querySelector('.cancel-button').onclick = function () {
    moreClearSideBar();
}


