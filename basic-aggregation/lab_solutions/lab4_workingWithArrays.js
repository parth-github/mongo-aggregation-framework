/* Basic Aggregation - $match and $project
Lab - Expressions with $project - work with data within arrays
*/

var pipeline = [{
        "$match": {
            "writers": {
                $elemMatch: {
                    $exists: true
                }
            },
            "cast": {
                $elemMatch: {
                    $exists: true
                }
            },
            "directors": {
                $elemMatch: {
                    $exists: true
                }
            }
        }
    }, {
        "$project": {
            "writers": {
                "$map": {
                    input: "$writers",
                    as: "writer",
                    in: {
                        "$arrayElemAt": [{
                                "$split": ["$$writer", " ("]
                            },
                            0
                        ]
                    }
                }
            },
            "cast": 1,
            "directors": 1
        }
    }, {
        "$project": {
            "laboursOfLove": {
                "$gt": [{
                        "$size": {
                            "$setIntersection": ["$cast", "$directors", "$writers"]
                        }
                    }, 0]
            }
        }
    }, {
        "$match": {
            "laboursOfLove": true
        }
    }, {
        "$count": "laboursOfLove"
    }
]

// Print count of movies in our 'movies' collection which are a "labor of love"
db.movies.aggregate(pipeline)

// If $count stage is not used as a pipeline in above query then use 
db.movies.aggregate(pipeline).itcount()