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


/* Basic Aggregation - $match and $project
Solution for PROBLEM #2 - Computing Fields
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


// Calculate aggregate values for the data in a collection 'movies'

db.persons.aggregate(pipeline).pretty()

//Counts the number of documents remaining in a cursor.

db.persons.aggregate(pipeline).itcount()