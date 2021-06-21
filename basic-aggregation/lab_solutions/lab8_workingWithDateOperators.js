/* Basic Aggregation - $match and $project
Solution for PROBLEM #1 - $project, $convert

Date - Timezones Url : https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
*/

var pipeline = [{
        "$match": {
            "dob.age": {
                "$gt": 29,
                "$lt": 62,
            }
        }
    }, {
        "$project": {
            "_id": 0,
            "dateOfBirth": {
                "$convert": {
                    "input": "$dob.date",
                    "to": "date",
                    "onError": "Unsupported date type",
                    "onNull": "null"
                }
            },
            "dob.age": 1
        }
    }
]

/* Basic Aggregation - $match and $project
Solution for PROBLEM #2 - $project, $convert, $dateToParts
*/

var pipeline = [{
        "$match": {
            "dob.age": {
                "$gt": 29,
                "$lt": 62,
            }
        }
    }, {
        "$project": {
            "_id": 0,
            "dateOfBirth": {
                "$convert": {
                    "input": "$dob.date",
                    "to": "date",
                    "onError": "Unsupported date type",
                    "onNull": "null"
                }
            },
            "dob.age": 1
        }
    }, {
        "$limit": 2
    }, {
        "$project": {
            "dob.age": 1,
            "detailed_birthDate": {
                "$dateToParts": {
                    "date": "$dateOfBirth"
                }
            }
        }
    }
]

OR,

var pipeline = [{
        "$match": {
            "dob.age": {
                "$gt": 29,
                "$lt": 62,
            }
        }
    }, {
        "$project": {
            "_id": 0,
            "dateOfBirth": {
                "$convert": {
                    "input": "$dob.date",
                    "to": "date",
                    "onError": "Unsupported date type",
                    "onNull": "null"
                }
            },
            "dob.age": 1
        }
    }, {
        "$limit": 2
    }, {
        "$project": {
            "dob.age": 1,
            "detailed_birthDate": {
                "$dateToParts": {
                    "date": "$dateOfBirth",
                    "timezone": "Asia/Kolkata",
                    "iso8601": true
                }
            }
        }
    }
]


/* Basic Aggregation - $match and $project
Solution for PROBLEM #3 - $project, $convert, $year, $month, $dayOfMonth. $hour, $minute, $second, $millisecond, $dayOfYear, $dayOfWeek,
						  $week, $isoWeek, $isoDayOfWeek.
*/

var pipeline = [{
        "$match": {
            "dob.age": {
                "$gt": 29,
                "$lt": 62,
            }
        }
    }, {
        "$project": {
            "_id": 0,
            "dateOfBirth": {
                "$convert": {
                    "input": "$dob.date",
                    "to": "date",
                    "onError": "Unsupported date type",
                    "onNull": "null"
                }
            },
            "dob.age": 1
        }
    }, {
        "$limit": 1
    }, {
        "$project": {
            "dateOfBirth": 1,
            "yearOfBirth": {
                "$year": {
                    "date": "$dateOfBirth",
                    "timezone": "Asia/Kolkata" // optional
                }
            },
            "monthOfBirth": {
                "$month": {
                    "date": "$dateOfBirth",
                    "timezone": "Asia/Kolkata" // optional
                }
            },
            "dayOfBirthMonth": {
                "$dayOfMonth": {
                    "date": "$dateOfBirth",
                    "timezone": "Asia/Kolkata" // optional
                }
            },
            "hourOfBirth": {
                "$hour": {
                    "date": "$dateOfBirth",
                    "timezone": "Asia/Kolkata" // optional
                }
            },
            "minutesOfBirth": {
                "$minute": {
                    "date": "$dateOfBirth",
                    "timezone": "Asia/Kolkata" // optional
                }
            },
            "secondsOfBirth": {
                "$second": {
                    "date": "$dateOfBirth",
                    "timezone": "Asia/Kolkata" // optional
                }
            },
            "milliseconds": {
                "$millisecond": {
                    "date": "$dateOfBirth",
                    "timezone": "Asia/Kolkata" // optional
                }
            },
            "dayOfYear": {
                "$dayOfYear": {
                    "date": "$dateOfBirth",
                    "timezone": "Asia/Kolkata" // optional
                }
            },
            "dayOfWeek": {
                "$dayOfWeek": {
                    "date": "$dateOfBirth",
                    "timezone": "Asia/Kolkata" // optional
                }
            },
            "week": {
                "$week": {
                    "date": "$dateOfBirth",
                    "timezone": "Asia/Kolkata" // optional
                }
            },
            "isoDayOfWeek": {
                "$isoDayOfWeek": {
                    "date": "$dateOfBirth",
                    "timezone": "Asia/Kolkata" // optional
                }
            },
            "isoWeek": {
                "$isoWeek": {
                    "date": "$dateOfBirth",
                    "timezone": "Asia/Kolkata" // optional
                }
            }

        }
    }
]

// Calculate aggregate values for the data in a collection 'persons'
db.persons.aggregate(pipeline).pretty()

//Counts the number of documents remaining in a cursor.
db.persons.aggregate(pipeline).itcount()