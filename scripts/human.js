let human = {
  eat: (ENERGY = 100) => {
    return `[Eating...] Energy: +${ENERGY}%`
  },
  drink: (HIDRATION = 50) => {
    return `[Drinking...] Hidration: ${HIDRATION}%`
  }
}
human
