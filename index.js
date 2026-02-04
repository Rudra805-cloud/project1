import express from "express"
import users from "./MOCK_DATA.json" with { type: "json" }
const app=express();
const PORT=8000;
//routes
app.get("/api/users",(req,res)=>{
    return res.json(users);
})
app.get("/users",(req,res)=>{
    const html=`
    <ul>
        ${users.map((user)=>`<li>${user.first_name} </li>`).join("")}
    </ul>
    `
    res.send(html);
})
/* app.get("/api/users/:id",(req,res)=>{
    const id=Number(req.params.id)//paramas=>url ke andar parameter me variable hai usko access karne ke liye
    //const user=users.find((user)=>user.id===id)    //we dont have to return inside function;
    //return res.send(user);
})
app.post("/api/users/:id",(req,res)=>{
    //add user
    return res.send("status:pending")
})
app.patch("/api/users/:id",(req,res)=>{
    //edit user
    return res.send("status:pending")
})
app.delete("/api/users/:id",(req,res)=>{
    //delete user
    return res.send("status:pending")
})
*/
// When we have to do multiple task on same route we do in suchh way 

app
.route("/api/users/:id")
.get((req,res)=>{
     const id=Number(req.params.id)
    const user=users.find((user)=>user.id==id);
    if(!user){
       return res.status(404).send("User not found");
    }
   return res.send(user)
})
.post((req,res)=>{
    //add user
    return res.send("status:pending")
})

.patch((req,res)=>{
    //edit user
    return res.send("status:pending")
})
.delete((req,res)=>{
    //delete user
    return res.send("status:pending")
})



















app.listen(PORT,()=>console.log(`Server started at port ${PORT}`))