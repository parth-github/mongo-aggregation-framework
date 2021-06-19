/* Core Aggregation - Combining Information
Solution for PROBLEM #1 - $group and Accumulators
*/

var pipeline = [{
        $match: {
            "awards": {
                $regex: /Won \d{1,2} Oscars?/
            }
        }
    }, {
        "$group": {
            "_id": null,
            "count": {
                "$sum": 1
            },
            "highest_rating": {
                "$max": "$imdb.rating"
            },
            "lowest_rating": {
                "$min": "$imdb.rating"
            },
            "average_rating": {
                "$avg": "$imdb.rating"
            },
            "standard_deviation": {
                "$stdDevSamp": "$imdb.rating"
            }

        }
    }
]

// Aggregate the pipeline stages and pretty() print the output
db.movies.aggregate(pipeline).pretty()


/* Core Aggregation - Combining Information
Solution for PROBLEM #2 - $group and Accumulators
*/

var pipeline = [{
        "$match": {
            "dob.age": {
                "$gt": 50
            }
        }
    }, {
        "$group": {
            "_id": {
                "gender": "$gender"
            },
            "totalCount": {
                "$sum": 1
            },
            "averageAge": {
                "$avg": "$dob.age"
            }
        }
    }, {
        "$sort": {
            "totalCount": -1
        }
    }
]


// Calculate aggregate values for the data in a collection 'persons'

db.persons.aggregate(pipeline).pretty()

//Counts the number of documents remaining in a cursor.

db.persons.aggregate(pipeline).itcount()

