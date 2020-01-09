const router = require('express').Router();

const Users = require('../users/users-model');
const Recipes = require('./recipes-model');
const Auth = require('../auth/auth-middleware');


router.get('/', (req, res) => {
    Recipes.find()
    .then(recipe => {
    res.status(200).json( recipe);
    })
.catch(error => {
    console.log('error from get/ in recipes', error)
    res.status(404).json({ errorMessage: "The recipe information could not be retrieved."})
})
});


router.get('/:id', Auth,  (req, res) => {
    const id = req.params.id
    Recipes.findById(id)
    .then(recipe => {
        !recipe ? res.status(500).json({ message: "The recipe with the specified ID does not exist." }) : res.status(200).json(recipe);
    })
    .catch(error => {
        console.log('error from get/:id', error);
        res.status(500).json({ error: "Could not get recipes, please see administrator" })
    })
})

router.get('/:id/recipes',   (req, res) => {
    Recipes.getUserRecipes(req.params.id)
    .then(recipes =>{
    !recipes ? res.status(500).json({ message: "The recipes with the specified ID does not exist." }) : res.status(200).json(recipes);
})
.catch(error => {
    console.log('error from get/:id/recipes', error)
    res.status(500).json({ error: "There was an error while fetching the recipe from the database" })
});
});

router.post('/:id', Auth, (req, res) => {
    const id = req.params.id;
    const {title, meal_type, description, ingredient_name, instructions,user_id } = req.body

    Users.findById(id)
    .then( recipe => {
    !recipe.length ? Recipes.add({
        title: title, 
        meal_type: meal_type,
        description: description,
        ingredient_name: ingredient_name,
        instructions: instructions,
        user_id: user_id
    }).then( () => {
    res.status(201).json({message: req.body});
    })
    .catch(error => {
        console.log('error from promise in post/:id/recipes', error)
    res.status(500).json({ message: 'Error creating new recipe post'})
    }) :
    res.status(404).json({
    message: "The recipe with the specified ID does not exist."
    });
})
.catch(error => {
    console.log('error from post/:id/recipes', error)
    res.status(500).json({errorMessage: "The recipe could not be saved." })
})
});

router.put('/:id', Auth, (req, res) => {
    const changes = req.body;
    const id = req.params.id;
    const { recipe } = id;

    recipe ? res.status(400).json({ errorMessage: " Please provide recipe name and description." }) :

    Recipes.update(id, changes)
    .then( update => {
        update === 0 ? res.status(404).json({ message: "This recipes does not exist." }) : res.status(200).json(changes);
    })
    .catch(error => {
        console.log('error from put/:id', error)
    res.status(500).json({ error: "There was an error while saving the recipe information" });
});
});



router.delete('/:id', (req, res) => {
    Recipes.remove(req.params.id)
    .then(removed => {
        removed > 0 ? res.status(200).json({ message: 'recipe successfully deleted' }) : res.status(404).json({ message: "The specified recipe does not exist." });
    })
    .catch(error => {
        console.log('error from delete/:id/recipes/:id', error)
        res.status(500).json({ error: "The recipe could not be removed" })
    })
});








module.exports = router;