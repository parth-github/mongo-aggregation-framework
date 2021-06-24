### Dataset Folder Structure.

All sample datasets has database name as the folder name, and the collection name are same as respective *.json files inside each folders.

### How - To Import MongoDB datasets.

- Start MongoDB daemon process with the target ip address and port number.   

***mongod --bind_ip \<target-ip-address> --port \<target-port-number> --dbpath \<any-file-directory>\data\db --logpath \<same-file-directory-as-data-db>\log\mongod.log***  

***~~Example~~***  

> *mongod --bind_ip 127.0.0.1 --port 27017 --dbpath D:\MongoDB\Server\4.4\localhost\data\db --logpath D:\MongoDB\Server\4.4\localhost\log\mongod.log*  

*If authentication is required to connect to MongoDB then pass user credentials along with above command.*

> *mongod --bind_ip 127.0.0.1 --port 27017 --dbpath D:\MongoDB\Server\4.4\localhost\data\db --logpath D:\MongoDB\Server\4.4\localhost\log\mongod.log --authenticationDatabase admin -u \<your-username> -p \<your-password>*

- Once mongod started successfully, open another command prompt to Import CSV, TSV or JSON data into MongoDB.  

***mongoimport mongodb://127.0.0.1:27017 --db=\<database-name> --collection=\<collection-name> --file=\<file-path>\persons.json --drop***  

***~~Example~~***

> *mongoimport mongodb://127.0.0.1:27017 --db=analytics --collection=persons --file=D:\MongoDB\repository\mongo-aggregation-framework\sample_datasets\analytics\persons.json --drop*

