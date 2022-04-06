
function findMatching(names,str) {
    
return  names.filter(function(item){
return item.toUpperCase() == str.toUpperCase()
})
    
}

const fuzzyMatch = (driver,str) =>{
 
 return driver.filter(function(driver){
     
     return driver.substring(0,str.length)==str
     
 }
 )}
 function matchName(driver,string){
     return driver.filter(function(driver,hometown){
         return driver.name == string
     }

     )}