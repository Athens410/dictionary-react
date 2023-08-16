
import React, {useState} from "react";
import './Dictionary.css';
export default function Dictionary(){
let [keyword, setKeyword] = useState("");


function search(event){

event.preventDefault();
alert(`searching for ${keyword}`);
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