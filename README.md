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
If the username doesn't exist in the [`users`](#users) table or the password doesn't match, it will reject the request with a `401` HTTP status.

If successful, it will return a `200` HTTP status and will return a token:

```
{
"token":  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJoZXJva3UiLCJlbWFpbCI6Imhlcm9rdTEtQ      VtYWlsLmNvbSIsImlhdCI6MTU3ODM3MDM5OCwiZXhwIjoxNTc5NjY2Mzk4fQ.Za1xcMSiGtLvWteb8oX8P4OOdCkTWy1saNtpaSVhR5M"

}
```

### Registration

https://bw-chef-portfolio.herokuapp.com/api/auth/register

Expects an object with this format as the request body:

```
    header -- "Content-Type: application/json"
    data: 
{
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


### Visitors

https://bw-chef-portfolio.herokuapp.com/api/visitors 

No sign-in or object expected, will return list of all recipes in the database.



