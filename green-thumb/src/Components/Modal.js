import React,{Component} from 'react'
//import { Navigate } from 'react-router-dom'
//import { Navigate } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom';
import NavigateBuy from './NavBuy'
//import { BrowserRouter as Router, Route,Switch, Redirect} from 'react-router-dom'

import Buy from './Buy'


export default class Modal extends Component{
  
    render(){
        let modelStyle ={
            display: 'block',
            backgroundColor: 'rgba(0,0,0,0.8)',
        }
      
        return(
            <div className="modal show fade" style={modelStyle}>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">{this.props.name}</h5>
        <button type="button" className="btn-close" onClick={this.props.hide}></button>
      </div>
      <div className="modal-body">
        <img src={this.props.cover} className="img-fluid" alt=''/>
        <p>{this.props.desc}</p>
      </div>
      <div className="modal-footer">
        <button type="button" class="btn btn-outline-success" onClick={NavigateBuy}>Buy</button>
        <Routes>
          <Route path="/buy" element={<Buy/>}></Route>
        </Routes>
      </div>
      
    </div>
  </div>
</div>
        )
    }
}