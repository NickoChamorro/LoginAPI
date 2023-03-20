import  {Sequelize} from "sequelize"
import { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER, DIALECT } from "../config/config.js"


// initialize database connection
const db = new Sequelize (DB_NAME, DB_USER, DB_PASS,{  //"prode2022", "root",""
    host: DB_HOST, //"localhost"
    dialect: DIALECT, //"mysql"
    port: DB_PORT //3306
})
export default db