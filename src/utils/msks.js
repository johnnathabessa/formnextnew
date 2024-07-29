export function maskPhoneNumber(phoneNumber) {
    
    // let resultNumber = "";
    // for (let i = 0; i < phoneNumber.length; i++) {
    //     if (i === 0) {
    //         resultNumber += "(" + phoneNumber[i];
    //         continue;
    //     }
    //     if (i===1) {
    //         resultNumber += phoneNumber[i] + ") ";
    //         continue;
    //     }
    //     if (i===6) {
    //         resultNumber += phoneNumber[i] + "-";
    //         continue;
    //     }
    //     resultNumber += phoneNumber[i];
    // }
    return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7)}`;
}