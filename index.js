function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    const spy = string.toUpperCase()
    console.log(spy)
}
function logWhisper(string) {
    const spy = string.toLowerCase()
    console.log(spy)
}
function sayHiToHeadphonedRoommate(string) {
    if(string===string.toLowerCase()) { 
        return "I can't hear you!"
    }
    if(string===string.toUpperCase()) {
        return "YES INDEED!"
    }
    if(string==="Let's have dinner together!") {
        return "I would love to!"
    }
}
// if the string is passed into the funcation in all lower case it will return "I can't hear you!"
// if the string that is passed into the function is all uppercase, the function should return "YES INDEED!"
// if the string that is passed into the function is equal to "Let's have dinner together!" the function should return "I would love to!"
