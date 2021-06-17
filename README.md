# mongo-aggregation-framework
Mongo Database Aggregation sample and examples.

## Sample Datasets to use for executing MongoDB aggregation commands.

Zipped Folder 'sample_datasets/aggregations.zip' contains sample databasets (*.json files ).

## Dataset Provider

Datasets have been provided by [MongoDB University](https://university.mongodb.com/) free of charge and to used for 
learning purpose only. The database name used in examples is 'aggregations' and all collections (*.json files) are 
created/restored inside the mentioned database.

## Load Sample Dataset
1) Extract the zipped folder(aggregations.zip) in your local machine.
2) Run 'mongoimport' tool from command line to load database into current mongo database server.

mongoexport --uri=mongodb://127.0.0.1:27017 --db=aggregations --collection=stocks --out=<your-file-location>\sample_datasets\stocks.json --type json

2) The datasets can be restored also by using tool - MongoDB Compass.


## Contributing
Pull requests are welcome. For major changes, please drop message to discuss what you would like to change.

## Summary

(1) basic-aggregation : basic examples for mongo database .agrgregation