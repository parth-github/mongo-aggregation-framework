# mongo-aggregation-framework
Mongo Database Aggregation sample and examples.

## Project Structure
* ../lab_assignment - tasks/operations to perform to get the required output from Mongo Database.
* ../lab_solutions - solutions (*.js files) for the tasks.


## Sample Dataset Source

Datasets have been provided by [MongoDB University](https://university.mongodb.com/) and other MongoDB tutorials available free of cost, to be used for 
learning purposes only. 
The database name used in examples is 'aggregations' and the collections (*.json files) can be created/restored inside the mentioned database.

### Sample Datasets

Zipped Folder 'sample_datasets/aggregations.zip' contains sample databasets (*.json files ).

### Load Sample Dataset
1) Extract the zipped folder(aggregations.zip) in your local machine.
2) Run 'mongoimport' tool from the command line to load the database into the current mongo database server.

mongoexport --uri=mongodb://127.0.0.1:27017 --db=aggregations --collection=stocks --out=<your-file-location>\sample_datasets\stocks.json --type json

OR,

3) The datasets can be restored by using the MongoDB Compass tool.


## Summary Of Repository

(1) basic-aggregation - examples related to basic aggregation and utility stages using below operators.

* $match, $project, $gte, $nin, $in, $all, $concat, $toUpper, $substrCP, $strLenCP, $type, $size, $split
* $elemMatch, $exists, $arrayElemAt, $map, $setIntersection, $count, $sort, $limit, $skip, $addFields
* $add, $subtract, $multiply, $divide, $convert, $dateToParts, $year, $month, $dayOfMonth. $hour, $minute, 
* $second, $millisecond, $dayOfYear, $dayOfWeek,$week, $isoWeek, $isoDayOfWeek

(2) core-aggregation - examples related to accumulators ($group) stages using below operators.

* $sum, $min, $max, $stdDevSamp (sample standard deviation), $regex

## Contributing
Pull requests are welcome. For major changes, please drop a message to discuss what you would like to change.

