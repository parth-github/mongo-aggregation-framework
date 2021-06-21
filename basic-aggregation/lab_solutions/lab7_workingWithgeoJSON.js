/* Basic Aggregation - $match and $project stages
Lab - $project, $convert
*/

var pipeline = [{
        "$project": {
            "_id": 0,
            "name.first": 1,
            "email": 1,
            "location": {
                "type": "Point",
                "coordinates": [{
                        "$convert": {
                            "input": "$location.coordinates.longitude",
                            "to": "double",
                            "onError": "Unsupported Type Conversion",
                            "onNull": 0
                        }
                    }, {
                        "$convert": {
                            "input": "$location.coordinates.latitude",
                            "to": "double",
                            "onError": "Unsupported Type Conversion",
                            "onNull": 0
                        }
                    }
                ]
            }
        }
    }
]

// Aggregate the pipeline stages and pretty() print the output
db.persons.aggregate(pipeline).pretty()