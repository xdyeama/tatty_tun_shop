import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTk0NTc0MTcwZDIwMWFmMzc1NmZkYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzAwNDU3MywiZXhwIjoxNjQzMjYzNzczfQ.6SICzJWsiMPDxBqGz98YIbKBzWP8qnkucQFMGLKNjNg"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header:{token: `Bearer ${TOKEN}`}
})