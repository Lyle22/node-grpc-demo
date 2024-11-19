const client = require("../client.js");

client.getAllNews({}, (err, response) => {
    console.log("Gets data : " + JSON.stringify(response.news))
    console.log("Error : " + JSON.stringify(err))
});

const new_table = {
    "name": "NENS",
    "fields": [
        {
            "fieldName": "name",
            "dataType": "VARCHAR:255",
            "required": "true",
            "unique": "false"
        },
        {
            "fieldName": "code",
            "dataType": "VARCHAR:255",
            "required": "true",
            "unique": "true"
        },
        {
            "fieldName": "price",
            "dataType": "decimal",
            "required": "false",
            "unique": "false"
        },
        {
            "fieldName": "storage",
            "dataType": "bigint",
            "required": "false",
            "unique": "false"
        },
        {
            "fieldName": "age",
            "dataType": "decimal",
            "required": "false",
            "unique": "false"
        },
        {
            "fieldName": "description",
            "dataType": "varchar:4000",
            "required": "false",
            "unique": "false"
        },
        {
            "fieldName": "state",
            "dataType": "boolean",
            "required": "false",
            "unique": "false"
        },
        {
            "fieldName": "id",
            "dataType": "VARCHAR:255",
            "required": "true",
            "unique": "true",
            "primaryKey": "true"
        },
        {
            "fieldName": "created_date",
            "dataType": "timestamp",
            "required": "false",
            "unique": "false"
        },
        {
            "fieldName": "modified_date",
            "dataType": "timestamp",
            "required": "false",
            "unique": "false"
        },
        {
            "fieldName": "created_by",
            "dataType": "VARCHAR:255",
            "required": "false",
            "unique": "false"
        },
        {
            "fieldName": "modified_by",
            "dataType": "VARCHAR:255",
            "required": "false",
            "unique": "false"
        },
        {
            "fieldName": "status",
            "dataType": "boolean",
            "required": "false",
            "unique": "false"
        }
    ]
}

client.MT_Client.createTable(new_table, (err, response) => {
    console.log("CreateTable data : " + JSON.stringify(response.news))
    console.log("Error : " + JSON.stringify(err))
})