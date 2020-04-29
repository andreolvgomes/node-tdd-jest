// require("dotenv").config({
//     path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
// });

// module.exports = {
//     development: {
//         dialect: 'mysql',
//         host: 'localhost',
//         username: 'adm',
//         password: '123456',
//         database: 'dbjest',
//         operatorAliases: false,
//         define: {
//             timestamps: true,
//             underscored: true,
//             underscoredAll: true,
//         },
//     },
// };

module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'adm',
    password: '123456',
    database: 'dbjest',
    operatorAliases: false,
    logging: false,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    }
};