import express from "express"


const todoRouter = express.Router()

todoRouter.get("/",(req,res)=>{
res.send("Welcome to todo")
})

export default todoRouter;