import React,{Component, Fragment} from 'react';
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'
class Xiaojiejie extends Component{
    constructor(props){
        console.log('props', props)
        super(props);
        this.state = {
            inputValue:"",
            list:['吃饭','睡觉']
        }
    }
    render(){
        return  (
            // 注释
            <Fragment>
                {/*注释 */}
                {
                    // sds
                }
                <div>
                    <h2>todoList</h2>
                    <label htmlFor='focusInput'>加入：</label>
                    <input id='focusInput' className='inputSty' value={this.state.inputValue} onChange={this.inputChang.bind(this)}/> 
                    <button onClick={this.addList.bind(this)}> 增加服务 </button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            {/*
                            // return ( <li key={index+item} onClick={this.deleteItem.bind(this, index)}>{item}</li> )                             
                            */}
                            {/**
                            return (<li key={index+item} onClick={this.deleteItem.bind(this, index)} dangerouslySetInnerHTML={{__html:item}}></li>)                             
                            
                            */}
                            return (
                                
                                    <XiaojiejieItem 
                                    key={index+item}
                                    content={item} 
                                    index={index}
                                    deleteItem={this.deleteItem.bind(this)}
                                    />
                             
                            )
                        })
                    }
                </ul> 
            </Fragment>
        )
    }
    inputChang(e){
        console.log(e,e.target.value)
        e.preventDefault()
        e.persist()
        this.setState({inputValue: e.target.value})
    }
    addList(){
        // 不为空才可以添加
        if (this.state.inputValue !== '') {
            this.setState({
                list:[...this.state.list, this.state.inputValue],
                inputValue:''
            })
        }
        
    }
    deleteItem(index){
        console.log(index)
        let list = this.state.list
        list.splice(index, 1)
        this.setState({list:list})
    }
}
export default Xiaojiejie