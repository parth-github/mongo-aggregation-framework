/* Basic Aggregation - $match and $project
Solution for PROBLEM #1 - $project
*/

var pipeline = [{
        "$match": {
            "imdb.rating": {
                "$gte": 7
            },
            "genres": {
                "$nin": ["Crime", "Horror"]
            },
            "rated": {
                "$in": ["PG", "G"]
            },
            "languages": {
                "$all": ["English", "Japanese"]
            }
        }
    }, {
        "$project": {
            "_id": 0,
            "title": 1,
            "rated": 1
        }
    }
]

// Calculate aggregate values for the data in a collection 'movies'

db.movies.aggregate(pipeline).pretty()

//Counts the number of documents remaining in a cursor.

db.movies.aggregate(pipeline).itcount()

// Load validateLab1.js into mongo shell

load('<your-directory-path>\\validateLab2.js')

// Run validateLab1 validation method

validateLab2(pipeline)



/* Basic Aggregation - $match and $project
Solution for PROBLEM #2 - $project, $toUpper
*/

var pipeline = [{
        "$project": {
            "_id": 0,
            "gender": 1,
            "Full Name": {
                "$toUpper": {
                    "$concat": ["$name.title", " ", "$name.first", " ", "$name.last"]
                }
            }
        }
    }
]


OR,

var pipeline = [{
        "$project": {
            "_id": 0,
            "gender": 1,
            "Full Name": {
                "$concat": [{
                        "$toUpper": "$name.title"
                    }, " ", {
                        "$toUpper": "$name.first"
                    }, " ", {
                        "$toUpper": "$name.last"
                    }
                ]
            }
        }
    }
]


/* Basic Aggregation - $match and $project
Solution for PROBLEM #3 - $project, $concat, $strLenCP, $substrCP, $subtract
*/

var pipeline = [{
        "$project": {
            "_id": 0,
            "gender": 1,
            "Full Name": {
                "$concat": [{
                        "$toUpper": {
                            "$substrCP": ["$name.title", 0, 1]
                        }
                    }, {
                        "$substrCP": ["$name.title", 1, {
                                "$subtract": [{
                                        "$strLenCP": "$name.title"
                                    }, 1]
                            }
                        ]
                    }, " ", {
                        "$toUpper": {
                            "$substrCP": ["$name.first", 0, 1]
                        }
                    }, {
                        "$substrCP": ["$name.first", 1, {
                                "$subtract": [{
                                        "$strLenCP": "$name.first"
                                    }, 1]
                            }
                        ]
                    }, " ", {
                        "$toUpper": {
                            "$substrCP": ["$name.last", 0, 1]
                        }
                    }, {
                        "$substrCP": ["$name.last", 1, {
                                "$subtract": [{
                                        "$strLenCP": "$name.last"
                                    }, 1]
                            }
                        ]
                    }
                ]
            }
        }
    }
]


// Calculate aggregate values for the data in a collection - 'persons'
db.persons.aggregate(pipeline).pretty()

//Counts the number of documents remaining in a cursor.
db.persons.aggregate(pipeline).itcount()