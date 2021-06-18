# mongo-aggregation-framework
Mongo Database Aggregation sample and examples.

## Project Structure
* ../lab_assignment - tasks/operations to perform to get the required output from Mongo Database.
* ../lab_solutions - solutions (*.js files) for the tasks.


## Sample Dataset Source

Datasets have been provided by [MongoDB University](https://university.mongodb.com/) free of cost and to used for 
learning purpose only. The database name used in examples is 'aggregations' and all collections (*.json files) are 
created/restored inside the mentioned database.

### Sample Datasets

Zipped Folder 'sample_datasets/aggregations.zip' contains sample databasets (*.json files ).

### Load Sample Dataset
1) Extract the zipped folder(aggregations.zip) in your local machine.
2) Run 'mongoimport' tool from command line to load database into current mongo database server.

mongoexport --uri=mongodb://127.0.0.1:27017 --db=aggregations --collection=stocks --out=<your-file-location>\sample_datasets\stocks.json --type json

OR,

3) The datasets can be restored by using MongoDB Compass tool.


## Summary Of Repository

(1) basic-aggregation - examples related to $match, Sproject, $map ,$setIntersection, $arrayElemAt, $split and other utility stages ($addFields, $skip,$count,$limit).

## Contributing
Pull requests are welcome. For major changes, please drop message to discuss what you would like to change.

