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

