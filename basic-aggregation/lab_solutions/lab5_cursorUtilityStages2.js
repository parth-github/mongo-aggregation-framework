/* Basic Aggregation - - Utility Stages
Lab: Bringing it all together
*/

var x_max = 1521105
var x_min = 5
var min = 1
var max = 10


var pipeline = [{
        "$match": {
            "languages": "English",
            "imdb.rating": {
                "$gte": 1
            },
            "imdb.votes": {
                "$gte": 1
            },
            "released": {
                "$gte": ISODate("1990-01-01T00:00:00Z")
            }
        }
    }, {
        "$addFields": {
            "scaled_votes": {
                "$add": [1, {
                        "$multiply": [9, {
                                "$divide": [{
                                        "$subtract": ["$imdb.votes", x_min]
                                    }, {
                                        "$subtract": [x_max, x_min]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    }, {
        "$project": {
            "_id": 0,
            "title": 1,
            "imdb.rating": 1,
            "scaled_votes": 1,
            "normalized_rating": {
                "$avg": ["$scaled_votes", "$imdb.rating"]
            }
        }
    }, {
        "$sort": {
            "normalized_rating": 1
        }
    }, {
        "$limit": 1
    }
]

// Aggregate the pipeline stages and pretty() print the output
db.movies.aggregate(pipeline).pretty()

