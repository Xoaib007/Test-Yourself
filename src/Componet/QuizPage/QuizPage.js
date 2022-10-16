import { useLoaderData } from "react-router-dom";
import './QuizPage.css';
import { Form } from "react-bootstrap";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
// import { Toast } from "react-bootstrap";
// import Toast from 'react-bootstrap/Toast';

const QuizPage = () => {
    const quizData= useLoaderData();
    const {questions} = quizData.data; 

    
    const handleClick = (e, p) => {
        if(e === p.correctAnswer){
            toast.success(`Correct✔️`) 
            // return(
            //     <div>
            //     <Toast>
            //         <Toast.Header>
            //         <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
            //         <strong className="me-auto">Bootstrap</strong>
            //         <small>11 mins ago</small>
            //         </Toast.Header>
            //         <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
            //     </Toast>
            //     </div>
            // )
        }
        else{
            toast.warning('oooops, you picked the wrong answer❌')
        }
    };
    return (
        <div>
            <h1>Quiz: {quizData.data.name}</h1>
            <div className="quizbox">
                {
                    questions.map((ques , index) => {
                       return (
                        <div className="question" key={index+1}>
                            <p>Q {index+1}: {ques.question}</p>,

                            {
                                ques.options.map((option , index) => {
                                    
                                    return(
                                        <Form>
                                            {['radio'].map((type) => (
                                                <div className="mb-3 option-container">    
                                                    <div className="option">
                                                        <Form.Check 
                                                        onClick={()=> handleClick(option, ques)}
                                                        name="option"
                                                        key={`${option.toString()}`}
                                                        type={type}
                                                        id={`${index+1}`}
                                                        label={`${option}`}
                                                        />
                                                        <ToastContainer />
                                                    </div>
                                                    
                                                </div>
                                            ))}
                                        </Form>
                                )})
                            }
                        </div>
                    )})
                }
            </div>
        </div>
    );
};



export default QuizPage;