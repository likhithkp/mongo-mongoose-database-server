/**
 * Data Storage
 * --------------
 *  In simple words as per the definiton, its a place where we store data which can be of any type(Video, Binary etc).
 *
 * Types of DBS
 * ----------------
 *  SQL & NoSQL
 *  ---------------------
 *  SQL: Structured query language
 *  -------------------------------------
 *  Data is stored in a structured format, mainly in table format. It has rows and columns.
 *  Users Collection
 *  Ex:
 *  +---------------------------------------------------------------+
    | user_id  | name      | email          | password  | address   |
    |---------------------------------------------------------------|
    | String   | String    | String         | String    | Object    |
    |---------------------------------------------------------------|
    | Address Object:                                               |
    |---------------------------------------------------------------|
    | street   | city      | state          | zip       | country   |
    |---------------------------------------------------------------|
    | String   | String    | String         | String    | String    |
    +---------------------------------------------------------------+
 *
 *  NoSQL:
 *  -----------------
 *  Data is stored in object format.
 *  Ex:
 *  {
 *      "name" : "Likhith",
 *      "age"  : 23,
 *      "gender" : "male"
 *  }
 *
 * What and Why
 * --------------
 * Terminologies - collection, documents, schmas, keys, models
 * 
 * Backend Architetcure
 * ----------------------
 * Basically the backend has 2 parts application server and a DB server.
 * 
 * In case of NoSQL DB, the whole storage which holds all the data is a database, but within a database there will be different groups of
 * data, ad each data will have collections of different data.
 * Ex:
 * Google DB--(DB)
 *           |
 *  Sales, Engineering, Marketing.(Collection in DB)
 * 
 *  +---------------------------------------------------------------+
    |                               |                               |
    |       Application server      |       Database server         |
    |     ------------------------  |     --------------------      |
    |   Handles all the tasks like  |  Handles all the query        |
    |   auth, authorization, routes |  requests from the backned    |
    |   and other logic tasks except|                               |
    |   data.                       |                               |
    +---------------------------------------------------------------+
 */

// Summary:
// Database -> Collections -> Document(Single element in each collection, similar to each row in SQL table)

/**
 * CODE                ACTION
 * --------------------------------------------
 * mongoose.connect -> database creation.
 * model create     -> collection creation.
 * CREATE           -> document creation.
 *  */ 

