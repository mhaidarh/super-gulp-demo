let human = {
  eat: (ENERGY = 100) => {
    console.log(`Eating...`)
    console.log(`-- Energy: +${ENERGY}%`)
  },
  drink: (SWEETNESS = 50) => {
    console.log(`Drinking...`)
    console.log(`-- Sweetness: +${SWEETNESS}%`)
  }
}

human
