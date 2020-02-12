import React from 'react';
import axios from 'axios';
import AuthContext from '../context/Auth';
const url = "http://54.180.174.253:8888/";
const ApiDefault = axios.create({ baseURL : url });

export default ApiDefault;