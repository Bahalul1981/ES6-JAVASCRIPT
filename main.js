
//1. VARIABLE: ALWAYS TRY TO USE CONST VARIABLE OR LET VARIABLE. THIS TOW ARE SCOP VARIABLE.

let me="Arvid dawn amn"
const myfamily= ['Me','Farhana yasmin','Arvid dewan']



//2. TEMPLATE TUTORIAL

let mynewname="Arvid dawn amin "

console.log(`My name is: ${mynewname}`)



//3. DESTRACTING

const Myfamily={
    mom:"farhana yasmin",
    dad:"Arvid dawn amin",
    son:"Alvin Dewan"
}

const{mom,dad,son}=Myfamily

console.log(mom,dad,son)


// .4 ARROW FUNCTION

const myoldname=(e)=>{
 console.log(`My oldname is ${e}`)
}

myoldname("Dawn Amin Ahmed")


// .5 LOOPS

// forEach
 const favouritefruits=["mango","lichi","jackfruits","papaya","guava"]

 favouritefruits.forEach((item,index)=>{
     console.log(`${index}: ${item}`)
 })

//  map

const newlist= favouritefruits.map((nwitem)=>{

    console.log("Hello: "+nwitem)

})



// filter

const newfilter=favouritefruits.filter((myfilt=> (myfilt==="lichi")))
console.log(newfilter)


const notin =favouritefruits.filter(notinlist=> notinlist!=="lichi")
console.log(notin)


// .6 CLASS CONSTRACTOR













// .7 PROMISS


