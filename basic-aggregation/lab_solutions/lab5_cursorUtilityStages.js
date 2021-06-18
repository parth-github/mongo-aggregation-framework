/* Basic Aggregation - - Utility Stages
Lab: Using Cursor-like Stages
*/

var favorites = [
    "Sandra Bullock",
    "Tom Hanks",
    "Julia Roberts",
    "Kevin Spacey",
    "George Clooney"]

var pipeline = [{
        "$match": {
            "tomatoes.viewer.rating": {
                "$gte": 3
            },
            "countries": "USA",
            "cast": {
                "$in": favorites
            }
        }
    }, {
        "$project": {
            "_id": 0,
            "title": 1,
            "tomatoes.viewer.rating": 1,
            "num_favs": {
                "$size": {
                    "$setIntersection": ["$cast", favorites]
                }
            }
        }
    }, {
        "$sort": {
            "num_favs": -1,
            "tomatoes.viewer.rating": -1,
            "title": -1
        }
    }, {
        "$skip": 24
    }, {
        "$limit": 1
    }
]

// Aggregate the pipeline stages and pretty() print the output
db.movies.aggregate(pipeline).pretty()