import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Customers from '../Pages/Costumers'
import Dashboard from '../Pages/Dashboard'
import GetDemo from '../Pages/GetDemo'
import Login from '../Pages/Login'
import Partners from '../Pages/Partners'
import Pricing from '../Pages/Pricing'
import Products from '../Pages/Products'
import Resource from '../Pages/Resource'
import Solutions from '../Pages/Solutions'
// import DashBoard from './../../../../../MASAI/Ayush_fw14_388/unit-4/sprint-3/day-3/assignments/routing2/src/Route/pages/DashBoard';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path ='/'  element={<Dashboard/>}/>
        <Route path ='/product'  element={<Products/>}/>
        <Route path ='/pricing'  element={<Pricing/>}/>
        <Route path ='/solutions'  element={<Solutions/>}/>
        <Route path ='/customers'  element={<Customers/>}/>
        <Route path ='/resources'  element={<Resource/>}/>
        <Route path ='/partners'  element={<Partners/>}/>
        <Route path ='/login'  element={<Login/>}/>
        <Route path ='/demo'  element={<GetDemo/>}/>
        


      </Routes>
    </div>
  )
}

export default AllRoutes