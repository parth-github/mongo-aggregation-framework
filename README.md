### mongo-aggregation-framework
Mongo Database Aggregation practice examples.

### Project Structure  
* ../lab_assignment - tasks/operations to practice MongoDB Aggregation Operations.
* ../lab_solutions - solutions (*.js files) for the tasks.

### Sample Dataset Source
Datasets have been provided by [MongoDB University](https://university.mongodb.com/) and other MongoDB tutorials available free of cost,  
to be used for learning purposes only.  
The database name used in examples is same as folder name, and collection name as *.json files inside each dataset folder.

### Load Sample Dataset
1. Unzip the zipped folder in your local directory.  
2. Run 'mongoimport' tool from command-line to load the datasets into MongoDB.

> *mongoexport --uri=mongodb://127.0.0.1:27017 --db=aggregations --collection=stocks --out=<your-file-location>\sample_datasets\stocks.json --type json*

### Summary Of Repository
- **basic-aggregation** - examples related to basic aggregation and utility stages using below operators.

> *$match, $project, $gte, $nin, $in, $all, $concat, $toUpper, $substrCP, $strLenCP, $type, $size, $split*
> *$elemMatch, $exists, $arrayElemAt, $map, $setIntersection, $count, $sort, $limit, $skip, $addFields*  
> *$add, $subtract, $multiply, $divide, $convert, $dateToParts, $year, $month, $dayOfMonth. $hour, $minute,* 
> *$second, $millisecond, $dayOfYear, $dayOfWeek,$week, $isoWeek, $isoDayOfWeek*

- **core-aggregation** - examples related to accumulators ($group) stages using below operators.

> *$sum, $min, $max, $stdDevSamp (sample standard deviation), $regex, $unwind, $push, $addToSet*
> *$truncat, $slice, $filter, $first, $bucket, $bucketAuto, $auto*

### Contributing
Pull requests are welcome. For major changes, please drop a message to discuss what you would like to change.