export default (
  subtotal,
  offers,
) => { 
  
  const allOffersTotals = offers.map(({ type, value, sliceValue }) => {
    if (type === 'percentage') {
      return {
        type: 'percentage',
        value,
        total: subtotal - (subtotal * value / 100),
      };
    }
    else if (type === 'minus') {
      return {
        type: 'minus',
        value,
        total: subtotal - value,
      };
    }
    else if (subtotal >= sliceValue && type === 'slice') {
      return {
        type: 'slice',
        value,
        sliceValue,
        total: subtotal - (Math.floor(subtotal / sliceValue) * value)
      }
    }       
  }
).filter(offer => !!offer);

console.log(allOffersTotals)

const bestOffer = allOffersTotals.reduce((prev, curr) => prev.total < curr.total ? prev : curr);

return bestOffer;
}


