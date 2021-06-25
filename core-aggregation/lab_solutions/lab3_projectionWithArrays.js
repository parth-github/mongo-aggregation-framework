/* Core Aggregation - Combining Information
Solution for PROBLEM #1 - $slice, $size
*/

(A)

var pipeline = [{
        "$project": {
            "_id": 0,
            "examScore": {
                "$slice": ["$examScores", 1]
            }
        }
    }
]

(B)

var pipeline = [{
        "$project": {
            "_id": 0,
            "examScore": {
                "$slice": ["$examScores", -2]
            }
        }
    }
]

(C)

var pipeline = [{
        "$project": {
            "_id": 0,
            "examScore": {
                "$slice": ["$examScores", 2, 1]
            }
        }
    }
]

(D)

var pipeline = [{
        "$project": {
            "_id": 0,
            "examScore": {
                "$slice": ["$examScores", 1, 1]
            }
        }
    }
]

(E)

var pipeline = [{
        "$project": {
            "_id": 0,
            "num_of_scores": {
                "$size": "$examScores"
            }
        }
    }
]

/* Core Aggregation - Combining Information
Solution for PROBLEM #2 - $project, $filter
*/

var pipeline = [{
        "$project": {
            "_id": 0,
            "score": {
                "$filter": {
                    "input": "$examScores",
                    "as": "sc",
                    "cond": {
                        "$gt": ["$$sc.score", 60]
                    }
                }
            }
        }

    }
]

/* Core Aggregation - Combining Information
Solution for PROBLEM #3 - $project, $filter, $max, $unwind
*/

(A)

var pipeline = [{
        "$project": {
            "_id": 0,
            "score": {
                "$filter": {
                    "input": "$examScores",
                    "as": "sc",
                    "cond": {
                        "$eq": ["$$sc.score", {
                                "$max": "$examScores.score"
                            }
                        ]
                    }
                }
            }
        }
    }, {
        "$sort": {
            "score": 1
        }
    }
]

(B)

var pipeline = [{
        "$unwind": "$examScores"
    }, {
        "$project": {
            "_id": 1,
            "name": 1,
            "age": 1,
            "score": "$examScores.score"
        }
    }, {
        "$sort": {
            "score": -1
        }
    }, {
        "$group": {
            "_id": "$_id",
            "max_score": {
                "$max": "$score"
            }
        }
    }
]

// Calculate aggregate values for the data in a collection 'friends'
db.friends.aggregate(pipeline).pretty()

//Counts the number of documents remaining in a cursor.
db.friends.aggregate(pipeline).itcount()