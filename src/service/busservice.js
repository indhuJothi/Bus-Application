import busjson from '../bus.json'

export default function getbusdetails(from,to){
    let busdatas ={}
    busjson.bus.filter((element)=>{
       if((element.from===from) && (element.to===to)){
          console.log(element.from)
          console.log(element.to)
          busdatas = element
       }
    })
    console.log(busdatas)
    return busdatas

 }