const moreClearSideBar = ()=>{
    document.getElementById('steps-description').value = "";
    document.getElementById('recipe-title').value = "";
    document.getElementById('recipe-description').value = "";
    document.getElementById('recipe-portion').value =1;
    document.getElementById('time').value =1;
    document.getElementById('difficulty').value =1;
    document.getElementById('unit-selector-id').value ="unit";
    document.getElementById('number-id').value ="";
    document.getElementById('number-id').value ="";
    document.getElementById('ingredient-id').value ="";

};




        const functionality=document.querySelector('.save-button').onclick=function () {
            const recipeList=document.querySelector('.recipes-list-items');
            const recipeNewDiv=document.createElement('div');
            recipeNewDiv.className='recipe-item';

            //titlu
            const titleTag=document.createElement('h4');
            const text=document.createTextNode(document.querySelector('#recipe-title').value);
            if("" === text.data){
                window.alert("We're sorry.You must complete the title!");
            }
            else {
                titleTag.appendChild(text);
                recipeNewDiv.appendChild(titleTag);

                //about
                const aboutRecipeTag = document.createElement('p');
                const aboutText = document.createTextNode(document.getElementById('recipe-description').value);
                aboutRecipeTag.appendChild(aboutText);
                recipeNewDiv.appendChild(aboutRecipeTag);

                const recipeItemAboutDetailsDiv = document.createElement('div');
                recipeItemAboutDetailsDiv.className = 'recipe-item-about-details';
                recipeNewDiv.appendChild(recipeItemAboutDetailsDiv);


                //
                // for(let i=0;i<3;i++){
                //     recipe_item_about_text.push(document.createTextNode(document.getElementById('recipe-portion').value));
                // }
                // for(let i=0;i<3;i++){
                //     recipe_item_about_tag[i].appendChild(recipe_item_about_text[i]);
                // }

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

                // const recipeItemIngredientsDiv=document.createElement('div');
                // recipeItemIngredientsDiv.className='new-recipe-item-ingredients';
                // recipeNewDiv.appendChild(recipeItemIngredientsDiv);

                const recipeItemStepsDiv = document.createElement('div');
                recipeItemStepsDiv.className = 'recipe-item-steps';
                recipeNewDiv.appendChild(recipeItemStepsDiv);

                // steps
                const recipeItemStepsTag = document.createElement('ol');
                const recipeItemStepsText = document.createTextNode(document.getElementById('steps-description').value);
                const recipeItemStepsArray = recipeItemStepsText.textContent.split('.');
                const recipeItemStepsLiTag = [];
                for (let i = 0; i < recipeItemStepsArray.length; i++) {
                    recipeItemStepsLiTag.push(document.createElement('li'));
                    recipeItemStepsLiTag[i].innerHTML = "<style> li{ margin:10px 0;}</style>";
                    recipeItemStepsTag.appendChild(recipeItemStepsLiTag[i]);
                }
                // for (let i=0;i<recipeItemStepsArray.len;i++){
                //         recipeItemStepsLiTag[i].appendChild(recipeItemStepsArray[i]);
                // }
                for (let i = 0; i < recipeItemStepsArray.length; i++) {
                    recipeItemStepsLiTag[i].innerText = recipeItemStepsArray[i];
                }

                const recipeItemStepsElement = document.querySelector('.recipe-item-steps');
                recipeNewDiv.appendChild(recipeItemStepsTag);
                // const selectionBar=document.querySelector('#recipe-selector-label');
                // const newRecipeSelection=document.createElement('option');
                const recipeListSelector = document.getElementById('recipe-selector-label');
                const recipeListTag = document.createElement('option');
                recipeListSelector.appendChild(recipeListTag);
                const titleList = document.createTextNode(document.querySelector('#recipe-title').value);
                recipeListTag.appendChild(titleList);

                recipeList.appendChild(recipeNewDiv);
            }
            moreClearSideBar();

    }


    document.querySelector('.cancel-button').onclick=function () {


            moreClearSideBar();

    }
    document.getElementById('add-ingredients').onclick=function(){
            const recipeList=document.querySelector('.recipes-list-items');
            const recipeNewDiv=document.createElement('div');
            recipeNewDiv.className='recipe-item';
            const recipeListTag=document.createElement('ul');
            recipeNewDiv.append(recipeListTag);
            const recipeListLiTag=document.createElement('li');
            recipeListTag.appendChild(recipeListLiTag);
            recipeListLiTag.innerHTML="<style>li{margin:10px 0;}</style>";
            const quantity=document.createTextNode(document.getElementById('number-id').value);
            recipeListLiTag.appendChild(quantity);
            const unit=document.createTextNode(document.getElementById('unit-selector-id').value);
            recipeListLiTag.appendChild(unit);
            const ingredient=document.createTextNode(document.getElementById('ingredient-id').value);
            recipeListLiTag.appendChild(ingredient);
            recipeList.append(recipeNewDiv);



    }

    //make save recipe button disabled until all sidebar fields are completed.