mongoose  =  require('mongoose');

const  MONGO_URI  =  'mongodb://localhost:27017/Week8';
mongoose.connect(MONGO_URI,  {useUnifiedTopology:  true,useNewUrlParser:  true})
 ; const  db  =  mongoose.connection;
 
db.on('error',  function(err)
 
{console.log("Error  occured  during  connection"+err)
}
);
 
db.once('connected',  function()    {
console.log(`Connected  to  ${MONGO_URI}`);
});

const  PersonScheme  =  new mongoose.Schema({ name: {
type:  String, required:  true
},
age:  Number, Gender:String, Salary:Number
});
 
const  person_doc  =  mongoose.model('modelname',  PersonScheme,'personCollection');

const  doc1  =  new  person_doc({  name:  'Nand',age:36,Gender:"Male",Salary:3000000}
);

doc1
    .save()
    .then((doc1) => {
        console.log("New Article Has been Added Into Your DataBase.",doc1);
    })
    .catch((err) => {
        console.error(err);  
    });

manypersons=[{  name:  'Deep',age:42,Gender:"Male",Salary:3456 }
    ,{  name:  'Nisha',age:23,Gender:"Female",Salary:1000  }
    ,{  name:  'Raj',age:27,Gender:"Female",Salary:5402    
    },
    {  name:  'Mike',age:40,Gender:"Male",Salary:4519   }
    ]
    person_doc.insertMany(manypersons).then(function(){  
    console.log("Data inserted")  // Success  
    }).catch(function(error){  
    console.log(error)      
    // Failure  
    });
 
person_doc.find({})
      .sort({Salary:1})
      .select('name Salary age')
      .limit(10)
      .exec()
      .then(docs => {
        console.log("showing multiple documents")
        docs.forEach(fuction(Doc))
        {
            console.log(Doc.age,Doc.name);
        }
         })
        .catch(err=> {
            console.error(err)
        })
   
var givenage= 30
person_doc.find({Gender:"Female",age:{$gte:givenage}})
       .sort({Salary:1})
       .select('name Salary age')
       .limit(10)
       .exec()
       .then(docs => {
        console.log("showing age greater than 15",givenage)
        docs.forEach(fuction(Doc))
        {
            console.log(Doc.age,Doc.name)
        }
    })
 
        .catch(err=>{
            console.error(err)})
       
person_doc.countDocuments().exec()
        .then(count => {
               console.log("Total documents Count:",count)
        }) .catch(err=> {
            console.error(err)
        })

person_doc.deleteMany({age:{$gte:25}})
    .exec()
    .then(docs=>{
        console.log("delected documents are:",docs);
    }) .catch(function(error){
        console.log(error);
    });

person_doc.updateMany({Gender:"Female"},{Salary:5555})
            .exec()
            .then(docs=>{
                console.log("update")
            })