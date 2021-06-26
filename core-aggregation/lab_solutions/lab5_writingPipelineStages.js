/* Core Aggregation - Writing Pipeline Stages Ino A New Collection.
Solution for PROBLEM #1 - $out
*/

var pipeline = [{
        "$match": {
            "dob.age": {
                "$gt": 32
            }
        }
    }, {
        "$project": {
            "_id": 0,
            "name": {
                "$concat": ["$name.title", " ", "$name.first", " ", "$name.last"]
            },
            "dob.age": 1,
            "Location": {
                "type": "Point",
                "coordinates": [{
                        "$convert": {
                            "input": "$location.coordinates.longitude",
                            "to": "double"
                        }
                    }, {
                        "$convert": {
                            "input": "$location.coordinates.latitude",
                            "to": "double"
                        }
                    }
                ]
            }
        }
    }, {
        "$sort": {
            "dob.age": -1
        }
    }, {
        "$out": "aggregatedResult"
    }
]

// Calculate aggregate values for the documents in 'persons' collection.
db.persons.aggregate(pipeline)

// List collections in 'analytics' database. One new collection 'aggregatedResult' will also be listed.
show collections
aggregatedResult
friends
persons

// Find documents in newly wriite 'aggregatedResult' collection.
db.aggregatedResult.find().pretty()