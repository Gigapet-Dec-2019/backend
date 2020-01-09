# Back-End

***Chef Portfolio*** 

https://bw-chef-portfolio.herokuapp.com/ - You should see text: 'Up and running!'

To run server: npm start

> **Sections**
- [Tables](#Tables)
- [API Endpoints](#API-Endpoints)


## Tables 
<hr/>

- Users
- Recipes
- Ingredients
- Instructions

### Users

| Name     | Type   | Required | Unique | Notes |
| -------- | ------ | -------- | ------ | ----- |
| id       | integer| yes      | yes    | User's id |
| full_name | string | yes      | no    | User's full name |
| username | string | yes      | yes    | User's username |
| password | string | yes      | no     | User's hashed password |
| email    | string | yes      | yes    | User's email |
| location | string | no      | no    | User's email |
| business_phone | string | no      | yes    | User's business phone |
| business_email | string | no     | yes    | User's business email |

### Recipes

| Name     | Type   | Required | Unique | Notes |
| -------- | ------ | -------- | ------ | ----- |
| id       | integer| yes      | yes    | Recipe Id |
| title | string | yes     | no    | Recipe Name |
| meal_type | string | yes     | no     | Meal Type |
| description    | string | yes      | no    | Recipe Description |
| ingredient_name    | string | yes      | no    | Ingredients |
| instructions    | string | yes      | no    | Recipes Instructions |
| user_id    | integer | yes      | yes    | User's Id |

### Ingredients

| Name     | Type   | Required | Unique | Notes |
| -------- | ------ | -------- | ------ | ----- |
| ingredient_id   | integer| yes      | yes    | Ingredient id |
| ingredient_name | string | yes      | no   | Ingredient Name |


### Instructions

| Name     | Type   | Required | Unique | Notes |
| -------- | ------ | -------- | ------ | ----- |
| instructions_id       | integer| yes      | yes    | instructions id |
| instructions | string | yes      | no    | Recipe Instructions |



## API Endpoints 
<hr/>

Endpoints Content:
- [Login](#Login)
- [Logout](#Logout)
- [Registration](#Registration)
- [Recipes](#Recipes)
- [Visitors](#Visitors)



### Login

https://bw-chef-portfolio.herokuapp.com/api/auth/login


Expects an object with this format as the request body:
```
{
  "username": "User1",   //string
  "password": "password" //string
}
```
If the username doesn't exist in the [`users`](#users) table or the password doesn't match, it will reject the request with a `401` HTTP status "Invalid Credentials"

If successful, it will return a `200` HTTP status and will return a token:

```
{
  "id": 1 //integer
  "message": "Welcome username"
"token":  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJoZXJva3UiLCJlbWFpbCI6Imhlcm9rdTEtQ      VtYWlsLmNvbSIsImlhdCI6MTU3ODM3MDM5OCwiZXhwIjoxNTc5NjY2Mzk4fQ.Za1xcMSiGtLvWteb8oX8P4OOdCkTWy1saNtpaSVhR5M"

}
```

## Logout

https://bw-chef-portfolio.herokuapp.com/api/auth/logout

If logout successful, it will return `200` HTTP status "Logged Out"

If error encountered during logout it will return `500` HTTP Status "error logging out"

### Registration

https://bw-chef-portfolio.herokuapp.com/api/auth/register

Expects an object with this format as the request body:

```
    header -- "Content-Type: application/json"
    data: 
{
   
    "full_name": "user name", //string
    "username": "user", //string
    "email": "email@test.com", //string
    "password": "password3", //string
    "location": "Austin, TX", //string
    "business_phone": "(304) 456-2323", //string
    "business_email": "business@email.com", //string
}
```

If any of the required fields are missing, it will reject the request with a `400` HTTP status.

If successful, it will return with a `200` HTTP status.

## Recipes

https://bw-chef-portfolio.herokuapp.com/api/recipes 

No sign-in or object expected, will return list of all recipes in the database.


***GET, EDIT, DELETE Single Recipe by Recipe Id***

https://bw-chef-portfolio.herokuapp.com/api/recipes/:id

 - Must be logged in for methods to work


> GET will return an object such as: 

```
    header -- "Content-Type: application/json"
    data: 
{
  "id": 1,
  "title": "Garlic-Butter Steak",
  "meal_type": "Dinner",
  "description": "This quick-and-easy steak skillet entree",
  "ingredient_name": "4oz NY Strip Steak",
  "instructions": "sear steak"
}
```

> EDIT 

Expects an object with the following parameters:

```
header -- "Content-Type: application/json"
    data: 
{ 

  "title": "Garlic-Butter Steak",
  "meal_type": "Dinner",
  "description": "This quick-and-easy steak skillet entree",
  "ingredient_name": "4oz NY Strip Steak",
  "instructions": "sear steak",
  "user_id": 1
}

```

> DELETE

If Delete successful, it will return `200` HTTP Status "Recipe successfully deleted"

If Recipes doesn't exist, it will return `404` HTTP Status  "The specified recipe does not exist."

***ADD Recipe by User Id***

https://bw-chef-portfolio.herokuapp.com/api/recipes/:id

Must be logged in for endpoint to work

Expects an object with the following parameters:

```
    header -- "Content-Type: application/json"
    data: 

 {  
    "title": "test",
    "meal_type": "test",
    "description": "test",
	"ingredient_name": "test",
	"instructions": "sear steak",
	"user_id": 1
 }

 ```

 If Update successful, it will return `201` HTTP Status

 If Update Error, it will return `500` HTTP Status "The recipe could not be saved."
 

***GET all recipes by User Id***

https://bw-chef-portfolio.herokuapp.com/api/recipes/:id/recipes

Must be logged in for endpoint to work

Will return a  of list objects for the specified user: 

```
    header -- "Content-Type: application/json"
    data: 
{
  "id": 1,
  "title": "Garlic-Butter Steak",
  "meal_type": "Dinner",
  "description": "This quick-and-easy steak skillet entree",
  "ingredient_name": "4oz NY Strip Steak",
  "instructions": "sear steak"
}

{
  "id": 1,
  "title": "Test Recipe",
  "meal_type": "Dinner",
  "description": "Test Description",
  "ingredient_name": "Test Ingredient,
  "instructions": "Test Instructions"
}
```


### Visitors

https://bw-chef-portfolio.herokuapp.com/api/visitors 

No sign-in or object expected, will return list of all recipes in the database.



