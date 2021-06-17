/* Basic Aggregation - $match and $project
Lab - $match
*/

var pipeline = [{
        "$match": {
            "imdb.rating": {
                "$gte": 7
            },
            "genres": {
                "$nin": ["Crime", "Horror"]
            },
            "rated": {
                "$in": ["PG", "G"]
            },
            "languages": {
                "$all": ["English", "Japanese"]
            }
        }
    }, {
        "$project": {
            "_id": 0,
            "imdb.rating": 1,
            "genres": 1,
            "rated": 1,
            "languages": 1
        }
    }
]

// Calculate aggregate values for the data in a collection 'movies'

db.movies.aggregate(pipeline).pretty()

//Counts the number of documents remaining in a cursor.

db.movies.aggregate(pipeline).itcount()

// Load validateLab1.js into mongo shell

load('<your-directory-path>\\validateLab1.js')

// Run validateLab1 validation method

validateLab1(pipeline)