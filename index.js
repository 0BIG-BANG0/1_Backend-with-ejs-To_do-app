import express from "express"
import ejsLayout from "express-layout"
import todoRouter from "./src/routes/todo.route.js"

const app = express()

//middleware
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.set("view engine", "ejs")
app.use(ejsLayout)

app.use("/",todoRouter)


export default app;