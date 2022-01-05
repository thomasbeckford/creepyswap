import BigNumber from 'bignumber.js'
import Numeral from 'numeral'

export const getBalanceNumber = (balance: BigNumber, decimals = 18) => {
  const displayBalance = new BigNumber(balance).dividedBy(
    new BigNumber(10).pow(decimals)
  )
  return displayBalance.toNumber()
}

export const getFullDisplayBalance = (balance: BigNumber, decimals = 18) =>
  balance.dividedBy(new BigNumber(10).pow(decimals)).toFixed()

export const formatLargeNumber = (num: any, digits = 2) => {
  const units: any = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ]

  let index
  for (index = units.length - 1; index > 0; index--) {
    if (num >= units[index].value) {
      break
    }
  }

  // 0.00, 1.25k, 222.35M
  return (num / units[index].value).toFixed(digits) + units[index].symbol
}
export const formatLNumber = (num: any, digits = 2) => {
  const units: any = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'B' },
    // { value: 1e12, symbol: 'T' },
    // { value: 1e15, symbol: 'P' },
    // { value: 1e18, symbol: 'E' },
  ]

  let index
  for (index = units.length - 1; index > 0; index--) {
    if (num >= units[index].value) {
      break
    }
  }

  // 0.00, 1.25k, 222.35M
  return (num / units[index].value).toFixed(digits) + units[index].symbol
}
export const formattedNum = (
  number: any,
  usd = false
  // acceptNegatives = false
) => {
  console.log(number)
  if (number.isNaN || number === '' || number === undefined) {
    return usd ? '$0' : 0
  }
  const num = parseFloat(number)

  if (num > 500000000) {
    return (usd ? '$' : '') + Numeral(num.toFixed(0)).format('0.[00]a')
  }

  if (num === 0) {
    if (usd) {
      return '$0'
    }
    return 0
  }

  if (num < 0.0001 && num > 0) {
    return usd ? '< $0.0001' : '< 0.0001'
  }

  if (num > 1000) {
    return usd
      ? // @ts-ignore
        `$${Number(parseFloat(num).toFixed(0)).toLocaleString()}`
      : // @ts-ignore

        `${Number(parseFloat(num).toFixed(0)).toLocaleString()}`
  }

  if (usd) {
    if (num < 0.1) {
      // @ts-ignore

      return `$${Number(parseFloat(num).toFixed(4))}`
    }
    if (num! < 0.1) {
      const priceFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
      })

      const usdString = priceFormatter.format(num)
      return `$${usdString.slice(1, usdString.length)}`
    }
  }
  // @ts-ignore

  return Number(parseFloat(num).toFixed(5))
}
