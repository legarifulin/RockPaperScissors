const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const playerScoreSpan = document.querySelector('[data-player-score]')
const selectionss = [
    {
        name: 'paper',
        emoji: '✋',
        musa: 'rock'
    },
    {
        name: 'rock',
        emoji: '✊',
        musa: 'scissors'
    },
    {
        name: 'scissors',
        emoji: '🤞',
        musa: 'paper'
    }
]

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        const selection = selectionss.find(selection => selection.name === selectionName)
        makeSelection(selection)
    })
})

function makeSelection(selection) {
    const computerSelection = randomSelection()
    const yourWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)

    addSelectionResult(computerSelection, computerWinner)
    addSelectionResult(selection, yourWinner)

    if (yourWinner) increaseScore(playerScoreSpan)
    if (computerWinner) increaseScore(computerScoreSpan)
}

function increaseScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function addSelectionResult(selection, winner) {
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('result-selection')
    if (winner) div.classList.add('winner')
    finalColumn.after(div)
}

function isWinner(selection, opponentSelection) {
    return selection.musa === opponentSelection.name
}

function randomSelection() {
    const randomIndex = Math.floor(Math.random() * selectionss.length)
    return selectionss[randomIndex]
}