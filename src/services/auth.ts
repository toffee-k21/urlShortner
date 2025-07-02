const sessionIdToUserMap = new Map<string, string>();

export const setUser = (sessionId:string,user:string) => {
sessionIdToUserMap.set(sessionId,user)
}

export const getUser = (sessionId:string) => {
 return  sessionIdToUserMap.get(sessionId)

}
