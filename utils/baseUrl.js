const baseUrl = process.env.NODE_ENV === "production" 
? 'https://velocitainfosys.com' 
: 'http://localhost:3000';

export default baseUrl;