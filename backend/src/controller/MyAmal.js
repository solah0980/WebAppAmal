const con = require('../config/config')
const dateFormat = require('dateformat');
const now = new Date();
const da =dateFormat("Jun 9 2007", "mediumDate");
function addData(id,pray,praysunnah,ebadat){
    console.log(pray)
    for(let i = 0; i<5; i++){
       con.query(`INSERT INTO pray(amalId,name,point) VALUES("${id}","${pray[i].name}",${parseInt(pray[i].point)})`,(err,result)=>{
       }) 
    }
    for(let i = 0; i<3; i++){
        con.query(`INSERT INTO praysunnah(amalId,name,point) VALUES("${id}","${praysunnah[i].name}",
             ${parseInt(praysunnah[i].point)})`,(err,result)=>{
        }) 
     }
     for(let i = 0; i<6; i++){
        con.query(`INSERT INTO ebadat(amalId,name,point) VALUES("${id}","${ebadat[i].name}",
             ${parseInt(ebadat[i].point)})`,(err,result)=>{
        }) 
     }
    
}

module.exports={
   async saveAmal(req,res){
        try{
            con.query(`INSERT INTO myamal(studentId,date) VALUES("${req.body.stdId}","${da}")`,(err,result)=>{
                 addData(result.insertId,req.body.pray,req.body.praysunnah,req.body.ebadat)
                 res.send("Success")
            })
        }catch(err){
            console.log(err)
        }
    }

}