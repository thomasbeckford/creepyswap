import random from 'lodash/random'
import { NODE } from '../constants'

// Array of available nodes to connect to
export const nodes = [NODE]

const getNodeUrl = () => {
  const randomIndex = random(0, nodes.length - 1)
  return nodes[randomIndex] || ''
}

export default getNodeUrl
