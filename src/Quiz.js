import React,{Component} from 'react';
import QuizQuestion from './QuizQuestion.js';
import QuizEnd from './QuizEnd.js';
import {TestQuestions} from './shared/TestQuestions';
import {JavaQuestions} from './shared/JavaQuestions';


let quizData = require('./quiz_data.json');


class Quiz extends Component{

    constructor(props){
        super(props);
        this.state={
            quiz_position:1,
            TestQuestionsData:TestQuestions
        }
    }
    showNextQuestion(){
        this.setState({
            quiz_position:this.state.quiz_position+1
            }
        );
    }

    handleResetClick(){
        this.setState({
            quiz_position:1
        });
    }
   

    render(){
      

        const isQuizEnd=this.state.quiz_position-1===this.state.TestQuestionsData.length;
        
   

        if(isQuizEnd){
            return(
                <div>
                    <QuizEnd resetClickHandler={this.handleResetClick.bind(this)}/>
                </div>
            );
        }
        else{
           
            return(
                <div>
                    <QuizQuestion quiz_question={this.state.TestQuestionsData[this.state.quiz_position-1]}
                    showNextQuestionHandler={this.showNextQuestion.bind(this)} />
                </div>
            );
        }
    }
}
export default Quiz;