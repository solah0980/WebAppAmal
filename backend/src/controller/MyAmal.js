const con = require('../config/config')
const dateFormat = require('dateformat');
const now = new Date();
const da =dateFormat(now, "mediumDate");

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

//คำนวณเปอร์เซนการทำอีบาดัร
function calData(data,sum){
    let pray=0
    let praysunnah =0
    let ebadat = 0
    data = JSON.parse(JSON.stringify(data)) 
    data[0].forEach((r)=>{
        pray=pray+r.point
    })
    data[1].forEach((r)=>{
        praysunnah=praysunnah+r.point
    })
    data[2].forEach((r)=>{
        ebadat=ebadat+r.point
    })
    console.log(pray,praysunnah,ebadat)
    return {
        pray:(pray*100)/sum,
        praysunnah:(praysunnah*100)/sum,
        ebadat:(ebadat*100)/sum
    }
}

module.exports={

    //บันทึกอามัล
   async saveAmal(req,res){
        try{
            con.query(`INSERT INTO myamal(studentId,date) VALUES("${req.body.stdId}","${da}")`,(err,result)=>{
                 addData(result.insertId,req.body.pray,req.body.praysunnah,req.body.ebadat)
                 res.send("Success")
            })
        }catch(err){
            console.log(err)
        }
    },

    //วิเคราะห์ข้อมูลการทำอีบาดัร
    showAmal(req,res){
        try{
            con.query(`SELECT amalId FROM myamal WHERE studentId = ${req.body.stdId} AND date LIKE "${req.body.month}%"`,(err,result)=>{
                let a = JSON.parse(JSON.stringify(result))
                let sum = 0 
                a.forEach((r)=>{
                    sum=sum+1
                })
                sum=sum*70
                let f = result.shift()
                let l = result.pop()
                let data = []
                let id = null
                if(result === undefined){
                    return console.log('ไม่เจอ')
                }
                
                con.query(`SELECT point FROM pray WHERE amalId BETWEEN ${f.amalId} AND ${l.amalId}`,(err,result)=>{
                   data.push(result)
                    con.query(`SELECT point FROM praysunnah WHERE amalId BETWEEN ${f.amalId} AND ${l.amalId}`,(err,result)=>{
                        data.push(result)
                        con.query(`SELECT point FROM ebadat WHERE amalId BETWEEN ${f.amalId} AND ${l.amalId}`,(err,result)=>{
                            data.push(result)
                            let {pray,praysunnah,ebadat}=calData(data,sum)
                            let d = {
                                pray:pray,
                                praysunnah:praysunnah,
                                ebadat:ebadat
                            }
                            console.log(d)
                            res.send(d)
                        })
                    })
                })
            })
        }catch(err){
            console.log(err)
        }
    }

}