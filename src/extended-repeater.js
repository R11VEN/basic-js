const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatTimes;
  let separator;
  let separatorLength;
  let addition;
  let additionRepeatTimes;
  let additionSeparator;
  
  if('addition' in options && 'separator' in options && 'additionSeparator' in options) {
    separator = options.separator;
    addition = options.addition;
    additionSeparator = options.additionSeparator;
    return str + addition;
  }
  else if('addition' in options && 'additionRepeatTimes' in options && 'repeatTimes' in options && 'separator' in options){
    repeatTimes = options.repeatTimes;
    separator = options.separator;
    addition = options.addition;
    additionRepeatTimes = options.additionRepeatTimes;
    separatorLength = separator.length;
    return (str + (addition.repeat(additionRepeatTimes)) + separator).repeat(repeatTimes).slice(0, -separatorLength);
  }
  else if('repeatTimes' in options && 'separator' in options){
    repeatTimes = options.repeatTimes;
    separator = options.separator;
    separatorLength = separator.length;
    return (str + separator).repeat(repeatTimes).slice(0, -separatorLength);
  }
  else if('repeatTimes' in options) {
    repeatTimes = options.repeatTimes;
    return (str + '+').repeat(options.repeatTimes).slice(0, -1);
  }
  
  
  
  
    //return (str +((addition + additionSeparator).repeat(additionRepeatTimes).slice(0, -2)) + separator).repeat(repeatTimes).slice(0, -2);
}

module.exports = {
  repeater
};
