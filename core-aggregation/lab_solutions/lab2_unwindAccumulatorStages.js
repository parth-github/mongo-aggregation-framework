/* Core Aggregation - Combining Information
Lab - $unwind
*/

var pipeline = [{
        "$match": {
            "languages": "English",
        }
    }, {
        "$unwind": "$cast"
    }
]

// Aggregate the pipeline stages and pretty() print the output
db.movies.aggregate(pipeline).pretty()

