export default function phoneFormat(number) {
  const simpleNumber = number.replaceAll(/[/(/)\-\s]/g, '').replace(/\+/, '');
  if (simpleNumber.search(/^(89|7[9843])/) !== -1) {
    return `+${simpleNumber.replace(/^8/, '7')}`;
  }
  return `+${simpleNumber}`;
}
