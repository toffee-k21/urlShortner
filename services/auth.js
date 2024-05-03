const sessionIdToUserMap = new Map();

function setUser(sessionId,user){
sessionIdToUserMap.set(sessionId,user)
}

function getUser(sessionId){
 return  sessionIdToUserMap.get(sessionId)

}
//***note: user agr ek sessionId se active hai toh woh sessionId can be used by another one as it is stored in Map ...but anyone remove its id sessionId will be vanished 
// object-tyype ???? create krta jyga add hota gya toh {sessioId,user}??????

module.exports = {getUser,setUser}