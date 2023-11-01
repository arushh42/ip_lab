const fs = require ("fs");

fs.writeFile("message.txt", "Hello from node js", (err) => {
    if (err)
         throw err;
    console.log('file saved');
});

fs.readFile("message.txt", "utf8", (err, data)=> {
    if (err){
        console.log("error is:", err);
    }
    else {
        console.log("data is:", data);
    }
});

fs.writeFile("message.txt", "Updated content", (err)=> {
   if(err) throw err;
    console.log('file updated');
});

fs.rename("message.txt", "2message.txt", (err)=>{
    if (err){
        console.log("error renaming file");
    }
    else{
        console.log("succesfully renamed");
    }
});

fs.appendFile("message.txt", "\n Appended data", (err)=>{
    if (err){
        console.log("Error appending:", err);
    }
    else{
        console.log("Data appended successfully");
    }
});

fs.unlink("message.txt", (err)=>{
    if (err){
        console.log("Error deleting");
    }
    else{
        console.log("deleted");
    }
})