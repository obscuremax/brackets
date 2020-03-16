module.exports = function check(str, bracketsConfig) {
    let result = false

    while(!result) {
        let strLength = str.length
        for(let i=0; i<bracketsConfig.length; i++) {
            str = str.replace(`${bracketsConfig[i][0]}${bracketsConfig[i][1]}`,"")
        }
        if (strLength === str.length) {
            result = true
        }
    }
    str.length === 0? result=true:result=false

    return result
}
