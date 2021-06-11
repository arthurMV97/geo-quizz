import React, {useEffect, useState} from 'react';
import './QuizzBox.scss'
import EndPopUp from "../EndPopUp/EndPopUp";
import { setRandomNum } from '../../Fonctions/DataFunctions';


const QuizzBox = ({countries}) => {

    const [score, setScore] = useState(null)
    const [countryArray, setCountryArray] = useState([])
    const [chosenCountry, setChosenCountry] = useState({})
    const [chosenQuestion, setChosenQuestion] = useState(null)
    const [chosenAnswers, setChosenAnswers] = useState([])
    const [goodAnswer, setGoodAnswer] = useState('')
    const [wrongAnswer, setWrongAnswer] = useState('')
    const [popUpBool, setPopUpBool] = useState(false)

    const keys = ["name", "capital", "subregion"]



    
    useEffect(() => {
    if (score >= 0) {
        extractCountryRdm(countries)
        chooseQuestionRdm()
    }

    }, [score])

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
        const key = keys[chosenQuestion]
        let answers = [chosenCountry[key]]

        while (answers.length !== 4) {
            const rdmNum = setRandomNum(countriesArr.length)
            const rdmSplice = setRandomNum(2)
            answers.splice(rdmSplice, 0, countriesArr[rdmNum][key])
            countriesArr = countriesArr.filter(elmt => elmt !== countriesArr[rdmNum])
            answers = [...new Set(answers)]; //For unique values
            answers = answers.filter(e => e.length > 0)
            console.log(answers)
        }
        answers.length === 4 && setChosenAnswers(answers)
    }

    const handleResponse = (response, index) => {
        if ((chosenQuestion === 0 && response === chosenCountry.name) || (chosenQuestion === 1 && response === chosenCountry.capital) || (chosenQuestion === 2 && response === chosenCountry.subregion) ) {
            setGoodAnswer(response)
            resetQuestions(true)
        } else   {
            setWrongAnswer(response)
            setGoodAnswer(chosenCountry[keys[chosenQuestion]])
            setTimeout(() => {setPopUpBool(true)}, 500)          
        }
    }

    const resetQuestions = (isCorrect) => {
        setTimeout(() => { 
            isCorrect ? setScore(score + 1) : setScore(score === 0 ? null : 0)
            setWrongAnswer('')
            setGoodAnswer('')
            setPopUpBool(false)
         }, 500);
            }


  


    return (
        <div id="quizz-box">
            <div id="question-container" data-test="question-container">
                {chosenQuestion === 0 && <div id="img-container"><img id="flag-img" src={chosenCountry.flag}/></div>}
                <p id="sentence" data-test="question">{chosenQuestion === 0 ? "Which country does this flag belong to ?" : chosenQuestion === 1 ? `The capital of ${chosenCountry.name} is:` : `Where ${chosenCountry.name} is located ?`}</p>
            </div>

            <div id="answers-container">
                {chosenAnswers.map((element, i) => 
                    <button className={`answers-btn ${goodAnswer === element && "good"} ${wrongAnswer === element && "wrong"}`}   key={i} onClick={() => handleResponse(element, i)}>{element} </button>
                )}
            </div>

            <EndPopUp score={score}  isOpen={popUpBool} retry={() => {resetQuestions(false)}} />
        </div>
    );
};

export default QuizzBox;