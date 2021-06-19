/* Core Aggregation - Combining Information
Lab - $group and Accumulators
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

