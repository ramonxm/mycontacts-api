
# MyContacts

Creation of a Rest API using NodeJS, Express, Docker, Postgresql for manipulations of a contact list.



## API Reference

#### Get all contacts

```http
  GET /contacts
```

 | Type     | 
 | :------- | 
 | `string` |  

#### Get contact

```http
  GET /contacts/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Error**. User not found|


## How to use

```shell
$ npm install 
// or yarn
```

```shell
$ npm run dev
// or yarn dev
```

  
## Authors

- [@ramonxm](https://github.com/ramonxm)

  
