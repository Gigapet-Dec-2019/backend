const router = require('express').Router();

const Users = require('./users-model');
const Recipes = require('../visitors/visitors-model')

router.get('/', (req, res) => {
    Recipes.get()
    .then(user => {
    res.status(200).json( user);
    })
.catch(error => {
    console.log(`error on GET/api/user/recipes`, error);
    res.status(500).json({ errorMessage: "The users information could not be retrieved."})
})
});


// router.get('/:id',  (req, res) => {
//     const id = req.params;
//     Users.findById(id)
//     .then(recipeById => {
//         recipeById ? res.status(200).json(recipeById) : res.status(404).json({ message: "This recipe does not exist." });
//     })
// .catch(error => {
//     console.log(error);
//     res.status(500).json({ error: "The recipe information could not be retrieved." });
//     });
// });

//add recipes by user---WORKING!!!
router.post('/:id', (req, res) => {
    const id = req.params.id;
    const { recipe_name, description } = req.body
    Users.findById(id)
    .then( recipeId => {
    !recipeId.length ? Recipes.add({
        recipe_name: recipe_name, 
        description: description,
    }).then( () => {
    res.status(201).json({ message: req.body});
    })
    .catch(error => {
    console.log(error);
    res.status(500).json({ message: 'Error creating new recipe post'})
    }) :
    res.status(404).json({
    message: "The recipe with the specified ID does not exist."
    });
})
.catch(error => {
    console.log(error);
    res.status(500).json({errorMessage: "The recipe could not be saved." })
})
});


//Update recipe by user ---WORKING!!!!
router.put('/:id',  (req, res) => {
    const changes = req.body;
    const id = req.params.id;
    const { recipe } = id;
  
    recipe ? res.status(400).json({ errorMessage: " Please provide recipe name and description." }) :

    Recipes.update(id, changes)
    .then( update => {
        update === 0 ? res.status(404).json({ message: "This recipes does not exist." }) : res.status(200).json(changes);
    })
    .catch(error => {
    console.log(error);
    res.status(500).json({ error: "There was an error while saving the recipe information" });
});
});


//delete recipe by user---WORKING!!!
router.delete('/:id',  (req, res) => {
    Recipes.remove(req.params.id)
    .then(removed => {
        removed > 0 ? res.status(200).json({ message: 'recipe successfully deleted' }) : res.status(404).json({ message: "The specified recipe does not exist." });
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ error: "The recipe could not be removed" })
    })
});








module.exports = router;