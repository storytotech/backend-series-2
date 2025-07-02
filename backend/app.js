import express from "express"

const app = express()

const port = process.env.PORT || 3000

app.get("/",(req,res)=>{
    res.send("hello")
})

const datasets = [
    { id: 1, name: "Dataset One", description: "This is the first dataset." },
    { id: 2, name: "Dataset Two", description: "This is the second dataset." },
    { id: 3, name: "Dataset Three", description: "This is the third dataset." },
    { id: 4, name: "Dataset Four", description: "This is the fourth dataset." },
    { id: 5, name: "Dataset Five", description: "This is the fifth dataset." }
];
app.get("/jokes",(req,res)=>{
res.json(datasets)
})

app.get("/datasets", (req, res) => {
    res.json(datasets);
});
app.listen(port,()=>{
    console.log(`the server is running on the port of ${port}`);
    
})