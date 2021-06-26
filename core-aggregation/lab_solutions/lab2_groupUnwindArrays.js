/* Core Aggregation - Combining Information
Solution for PROBLEM #1 - $group, $unwind, $push
*/

var pipeline = [{
        "$unwind": "$hobbies"
    }, {
        "$group": {
            "_id": {
                "age": "$age"
            },
            "count": {
                "$sum": 1
            },
            "allHobbies": {
                "$push": "$hobbies"
            }
        }
    }
]

/* Core Aggregation - Combining Information
Solution for PROBLEM #2 - $group, $unwind, $push, $addToSet
*/

var pipeline = [{
        "$unwind": "$hobbies"
    }, {
        "$group": {
            "_id": {
                "age": "$age"
            },
            "count": {
                "$sum": 1
            },
            "allHobbies": {
                "$addToSet": "$hobbies"
            }
        }
    }
]

// Calculate aggregate values for the data in a collection 'friends'
db.friends.aggregate(pipeline).pretty()

//Counts the number of documents remaining in a cursor.
db.friends.aggregate(pipeline).itcount()

/* Core Aggregation - Combining Information
Solution for PROBLEM #3 - $group, $unwind, $truncat, $match, $project ,$sort, $skip
*/

var pipeline = [{
        "$match": {
            "cast": {
                "$exists": true,
                "$ne": []
            },
            "languages": {
                "$exists": true,
                "$in": ["English"]
            }
        }
    }, {
        "$project": {
            "_id": 0,
            "cast": 1,
            "imdb.rating": 1
        }
    }, {
        "$unwind": "$cast"
    }, {
        "$group": {
            "_id": "$cast",
            "numFilms": {
                "$sum": 1
            },
            "average": {
                "$avg": "$imdb.rating"
            }
        }
    }, {
        "$project": {
            "numFilms": 1,
            "average": {
                "$divide": [{
                        "$trunc": {
                            "$multiply": ["$average", 10]
                        }
                    }, 10
                ]
            }
        }
    }, {
        "$sort": {
            "numFilms": -1
        }
    }, {
        "$limit": 1
    }
]

// Calculate aggregate values for the data in a collection 'movies'
db.movies.aggregate(pipeline).pretty()

//Counts the number of documents remaining in a cursor.
db.movies.aggregate(pipeline).itcount()