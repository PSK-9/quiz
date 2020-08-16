import React,{Component} from 'react';
import {TestQuestions} from '../shared/TestQuestions'
import {JavaQuestions} from '../shared/JavaQuestions';
import Home from './HomeComponent';
import Quiz from './QuizComponent';
import {Switch,Route,Redirect,withRouter, Router} from 'react-router-dom';
import QuizQuestion from './QuizQuestionComponent';
class Main extends Component{

    constructor(props){
        super(props);
        this.state={
             TestQuestionsData:TestQuestions,
             JavaQuestionsData:JavaQuestions   
        }
    }

    render(){
        return(

            <div className="container">
                <Switch>
               <Route path='/home' component={Home}/>
               <Route exact path='/java' component={()=><Quiz TestQuestionsData={this.state.JavaQuestionsData}/>}/>
               <Route exact path='/test' component={()=><Quiz TestQuestionsData={this.state.TestQuestionsData}/>}/>
               <Redirect to='/home'/>
                </Switch>
            </div>
        /*    <div className="container">
                <Quiz TestQuestionsData={this.state.JavaQuestionsData} />
            </div>*/
        );
    }
}

export default Main;