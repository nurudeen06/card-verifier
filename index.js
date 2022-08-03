
/**
 * 
 * @param {*} card_number 
 * @returns 
 * 
 * This simple library is developed to ease the workload of verifying Credit Card
 * 
 * Author : Nurudeen Ahmed
 * WhatsApp : +2348122647016
 */

import Verifier from "./src/verifier";
const cardVerifier = (number) => {
    return Verifier(number)
}
export default cardVerifier;