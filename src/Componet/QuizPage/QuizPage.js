import { useLoaderData } from "react-router-dom";
import './QuizPage.css';
import { Form } from "react-bootstrap";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const QuizPage = () => {
    const quizData= useLoaderData();
    const {questions} = quizData.data; 

    
    const handleOptionClick = (e, p) => {
        if(e === p.correctAnswer){
            toast.success(`Correct✔️`, {position: "top-center"})
        }
        else{
            toast.warning('oooops, you picked the wrong answer❌', {position: "top-center"})
        }
    };
    const handleCorrectAnswer = e => {
        toast.success(`Correct answer is - ${e.correctAnswer}`, {position: "top-center"})
    }

    
    
    return (
        <div>
            <h1>Quiz Topic: {quizData.data.name}</h1>
            <div className="quizbox">
                {
                    questions.map((ques , index) => {
                       return (
                        <div className="question" key={index+1}>
                            <p>Q {index+1}: {ques.question}</p>
                            
                            {
                                ques.options.map((option , index) => {
                                    
                                    return(
                                        <Form>
                                            {['radio'].map((type) => (
                                                <div className="mb-3 option-container">    
                                                    <div className="option">
                                                        <Form.Check 
                                                        onClick={()=> handleOptionClick(option, ques)}
                                                        name="option"
                                                        key={`${option.toString()}`}
                                                        type={type}
                                                        id={`${ques.id}`+`${index+1}`}
                                                        label={`${option}`}
                                                        />
                                                        <ToastContainer />
                                                    </div>
                                                    
                                                </div>
                                            ))}
                                        </Form>
                                )})
                            }
                            <button onClick={() => handleCorrectAnswer(ques)} className="correct-answer">
                                <FontAwesomeIcon icon={faEye} />
                            </button>
                        </div>
                    )})
                }
            </div>
        </div>
    );
};



export default QuizPage;