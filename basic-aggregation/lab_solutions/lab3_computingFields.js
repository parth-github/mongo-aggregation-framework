/* Basic Aggregation - $match and $project
Solution for PROBLEM #1 - Computing Fields
*/

var pipeline = [{
        "$match": {
            "title": {
                "$type": "string"
            }
        }
    }, {
        "$project": {
            "title": {
                "$split": ["$title", " "]
            },
            "_id": 0
        }
    }, {
        "$match": {
            "title": {
                "$size": 1
            }
        }
    }
]

// Calculate aggregate values for the data in a collection 'movies'
db.movies.aggregate(pipeline).pretty()

//Counts the number of documents remaining in a cursor.
db.movies.aggregate(pipeline).itcount()