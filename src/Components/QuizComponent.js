import React,{Component} from 'react';
import QuizQuestion from './QuizQuestionComponent';
import QuizEnd from './QuizEndComponent';


class Quiz extends Component{

    constructor(props){
        super(props);
        this.state={
            quiz_position:1,
            score:0
        }
    }

    handleScore(){
        this.setState({
            score:this.state.score+1
        });
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
      

        const isQuizEnd=this.state.quiz_position-1===this.props.TestQuestionsData.length;
        
   

        if(isQuizEnd){
            return(
                <div>
                    <QuizEnd resetClickHandler={this.handleResetClick.bind(this)}
                    score={this.state.score}
                    length={this.props.TestQuestionsData.length}/>
                </div>
            );
        }
        else{
           
            return(
                <div>
                    <QuizQuestion quiz_question={this.props.TestQuestionsData[this.state.quiz_position-1]}
                    showNextQuestionHandler={this.showNextQuestion.bind(this)} handleScore={this.handleScore.bind(this)} />
                </div>
            );
        }
    }
}
export default Quiz;