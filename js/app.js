const mouthElement = document.querySelector('#mouth');
const emotionElements = document.querySelectorAll('.raiting-container div');

console.log(emotionElements)

const selectEmotion = (e) => {
    mouthElement.classList.remove('happy-mouth', 'indifferent-mouth', 'sad-mouth');
    const chosenEmotion = e.target.id;
    if (chosenEmotion === 'bad') {
        mouthElement.classList.add('sad-mouth');
    }

    if (chosenEmotion === 'okay') {
        mouthElement.classList.add('indifferent-mouth');
    }

    if (chosenEmotion === 'good') {
        mouthElement.classList.add('happy-mouth');
    }
}

emotionElements.forEach(emotionElement => {
    emotionElement.addEventListener('click', selectEmotion)
})
