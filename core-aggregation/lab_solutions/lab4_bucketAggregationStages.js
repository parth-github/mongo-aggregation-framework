/* Core Aggregation - Categorize Information
Solution for PROBLEM #1 - $bucket
*/

var pipeline = [{
        "$bucket": {
            "groupBy": "$dob.age",
            "boundaries": [18, 36, 54, 72],
            "default": "Others",
            "output": {
                "count_of_people": {
                    "$sum": 1
                },
                "average_age": {
                    "$avg": "$dob.age"
                }
            }
        }
    }
]

/* Core Aggregation - Categorize Information
Solution for PROBLEM #2 - $bucket, $push
*/

var pipeline = [{
        "$bucket": {
            "groupBy": "$dob.age",
            "boundaries": [18, 36, 54, 72],
            "default": "Others",
            "output": {
                "count_of_people": {
                    "$sum": 1
                },
                "Persons": {
                    "$push": {
                        "name": {
                            "$concat": ["$name.first", " ", "$name.last"]
                        }
                    }
                }
            }
        }
    }
]

/* Core Aggregation - Categorize Information
Solution for PROBLEM #3 - $bucketAuto
*/

var pipeline = [{
        "$bucketAuto": {
            "groupBy": "$dob.age",
            "buckets": 4,
            "output": {
                "count_of_people": {
                    "$sum": 1
                },
                "average_age": {
                    "$avg": "$dob.age"
                }
            }
        }
    }
]

// Calculate aggregate values for the documents in 'persons' collection.
db.persons.aggregate(pipeline).pretty()