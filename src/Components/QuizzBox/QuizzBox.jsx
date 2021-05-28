import React, {useEffect, useState} from 'react';
import './QuizzBox.scss'



const QuizzBox = ({countries}) => {

    const [countryArray, setCountryArray] = useState([])
    const [chosenCountry, setChosenCountry] = useState({})
    const [chosenQuestion, setChosenQuestion] = useState(null)
    const [chosenAnswers, setChosenAnswers] = useState([])



    
    useEffect(() => {
    extractCountryRdm(countries)
    chooseQuestionRdm()
    }, [])

    useEffect(() => {
        countryArray.length > 0 && chosenCountry && chosenQuestion !== null && getAnswersRandom()
        countryArray.length > 0 && chosenCountry && chosenQuestion !== null && console.log("hihi")
    },[countryArray, chosenCountry, chosenQuestion])

    

    const extractCountryRdm = (countriesArr) => {
        const rdm = setRandomNum(countriesArr.length); 
        setChosenCountry(countriesArr[rdm])
        const newArr = countriesArr.filter(elmt => elmt !== countriesArr[rdm])
        setCountryArray(newArr)
    }

    const chooseQuestionRdm = () => {
        const rdm = setRandomNum(3); 
        setChosenQuestion(rdm)

    }

    const getAnswersRandom = () => {
        let countriesArr = countryArray
        const key = chosenQuestion === 0 ? "name" : chosenQuestion === 1 ? "capital" : "subregion"
        let answers = [chosenCountry[key]]

        while (answers.length !== 4) {
            const rdmNum = setRandomNum(countriesArr.length)
            const rdmSplice = setRandomNum(2)
            answers.splice(rdmSplice, 0, countriesArr[rdmNum][key])
            countriesArr = countriesArr.filter(elmt => elmt !== countriesArr[rdmNum])
        }

        answers.length === 4 && setChosenAnswers(answers)
        
    }

    const setRandomNum = (num) => {
        return Math.floor(Math.random() * num);
    }

    return (
        <div id="quizz-box">
            <div id="question-container">
                {chosenQuestion === 0 && <div id="img-container"><img id="flag-img" src={chosenCountry.flag}/></div>}
                <p id="sentence">{chosenQuestion === 0 ? "Which country does this flag belong to ?" : chosenQuestion === 1 ? `The capital of ${chosenCountry.name} is:` : `Where ${chosenCountry.name} is located ?`}</p>
            </div>

            <div id="answers-container">
                {chosenAnswers.map((element, i) => 
                    <button className="answers-btn" key={i}>{element}</button>
                )}
            </div>
        </div>
    );
};

export default QuizzBox;