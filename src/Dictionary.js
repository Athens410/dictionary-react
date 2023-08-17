
import React, {useState} from "react";
import axios from "axios";
import './Dictionary.css';
export default function Dictionary(){
let [keyword, setKeyword] = useState("");



function handleResponse(response){
console.log(response.data[0]);


}

function search(event){

event.preventDefault();

let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
console.log(apiUrl);
axios.get(apiUrl).then(handleResponse);
}

function handlesetKeyword (event){
setKeyword(event.target.value);



}

    return(

    <div class="dictionary">

<form onSubmit={search}>
<input type="search"  onChange={handlesetKeyword} /> 

</form>


    </div>

    );
}