/* Core Aggregation - Combining Information
Solution for PROBLEM #1 - $lookup
*/

var pipeline = [{
        "$lookup": {
            "from": "air_airlines",
            "localField": "airlines",
            "foreignField": "name",
            "as": "airlines"
        }
    }
]

// Aggregate the pipeline stage on air_alliances collection
db.air_alliances.aggregate(pipeline).pretty()

/* Core Aggregation - Combining Information
Solution for PROBLEM #1 - $lookup
*/

var pipeline = [{
        "$match": {
            "airplane": /747|380/
        }
    }, {
        "$lookup": {
            "from": "air_alliances",
            "localField": "airline.name",
            "foreignField": "airlines",
            "as": "alliance"
        }
    }, {
        "$unwind": "$alliance"
    }, {
        "$group": {
            "_id": "$alliance.name",
            "count": {
                "$sum": 1
            }
        }
    }, {
        "$sort": {
            "count": -1
        }
    }
]

// Aggregate the pipeline stage on air_routes collection
db.air_routes.aggregate(pipeline).pretty()