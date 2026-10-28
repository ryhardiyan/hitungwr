export function calculateWR(match: number, wr: number, target: number): { text: string; isError: boolean } {
  // Special case: 100% WR
  if (wr === 100 && target === 100) {
    return { text: `Kamu perlu <b>0</b> win tanpa lose untuk mendapatkan win rate <b>${target}%</b>`, isError: false }
  }
  
  // Target 100% is impossible
  if (target === 100) {
    return { text: `Yo ndak bisa, yang bisa cuman Monton 😅`, isError: true }
  }

  const currentWins = match * (wr / 100)
  const remainingLoses = match - currentWins
  
  // Formula: needed wins = (remainingLoses * 100 / (100 - target)) - match
  const needed = Math.round((remainingLoses * 100 / (100 - target)) - match)

  if (wr > target) {
    // Need loses to decrease WR
    const neededLoses = Math.abs(needed)
    return { 
      text: `Kamu perlu <b>${neededLoses}</b> lose tanpa win untuk mendapatkan win rate <b>${target}%</b>`, 
      isError: false 
    }
  }

  if (needed > 100000) {
    return { 
      text: `Kamu perlu lebih dari <b>100.000</b> win tanpa lose untuk mendapatkan win rate <b>${target}%</b>`, 
      isError: true 
    }
  }

  if (match === 0 && wr === 0 && target === 100) {
    return { text: `Kamu perlu <b>1</b> win tanpa lose untuk mendapatkan win rate <b>${target}%</b>`, isError: false }
  }

  return { 
    text: `Kamu perlu <b>${needed}</b> win tanpa lose untuk mendapatkan win rate <b>${target}%</b>`, 
    isError: false 
  }
}

export function calculateWinLose(match: number, wr: number): { text: string; isError: boolean } {
  const wins = Math.round(match * (wr / 100))
  const loses = match - wins

  return {
    text: `Total win: <b>${wins}</b> match<br>Total lose: <b>${loses}</b> match`,
    isError: false
  }
}

export function calculateLoseStreak(match: number, wr: number, streak: number): { text: string; isError: boolean } {
  const totalWins = (match * wr) / 100
  const newWR = (totalWins / (match + streak)) * 100

  return {
    text: `Jika anda losestreak sebanyak <b>${streak}</b> kali, maka winrate anda menjadi <b>${newWR.toFixed(1)}%</b>`,
    isError: false
  }
}
