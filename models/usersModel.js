import db from "../database/db.js"

import DataTypes from "sequelize"

const UsersModel = db.define("users",{
    idUser: {type:DataTypes.INTEGER, primaryKey:true, autoIncrement: true, allowNull: false},
    uidNumber: {type:DataTypes.INTEGER},
    email: {type:DataTypes.STRING, allowNull: false},
    emailVerified: {type:DataTypes.TINYINT},
    pass: {type:DataTypes.STRING, allowNull: false},
    name: {type:DataTypes.STRING},
    phone: {type:DataTypes.STRING},
    login: {type:DataTypes.TINYINT}
}, { timestamps: false },
)

export default UsersModel