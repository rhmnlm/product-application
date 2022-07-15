# Product Catalog UI

UI for Product Spring boot Rest API

## Description

UI for Product Spring boot Rest API. Some of functions available get listings, add new product, and update a product.

## Getting Started

### Dependencies
* Node.js
* PostgreSQL 11
* Spring boot Application

### Installing

* Clone from https://github.com/rhmnlm/product-application-sboot
* write ``mvn clean install`` in terminal to install all dependencies
* Set up postgres db and configure setting in spring boot application's application.yml file

### Executing program

* Run the program by simply type in
```
mvn spring-boot:run
```

### APIs

#### /api/products?pageNum={}&pageSize={}
* Method: GET
* Params: int pageNum, int pageSize
* Return: Page< Product >

#### /api/products/{code}
* Method: GET
* Path Variable: String code
* Return: Page< Product >

#### /api/products
* Method: POST
* RequestBody: Product
* Return: Product

#### /api/products/{code}
* Method: PUT
* Path Variable: String code
* RequestBody: Product
* Return: Product

#### /api/products/{code}
* Method: DELETE
* Path Variable: String code
* RequestBody: Product
* void

## Help

Any advise for common problems or issues.
```
contact https://github.com/rhmnlm
```