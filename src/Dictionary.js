import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);
  function handleDictionResponse(response) {
    setResults(response.data[0]);
  }

function handlePexelResponse (response){

console.log(response);
setPhotos(response.data.photos);

}

  function search(){


   // documentation: https://dictionaryapi.dev/e
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionResponse);

let pexelsApiKey ="XAq19IdpgqDPP66R1ZOqybjQTLsRrf6noaLxCKM8JT3bYF17F9r0boye";

let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
let headers = { Authorization: `${pexelsApiKey}` };
axios.get(pexelsApiUrl, {headers: headers}).then(handlePexelResponse);


  }

  function handleSubmit(event) {
    event.preventDefault();
search();
 
  }

function load(){
setLoaded(true);
search();



}




  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  if (loaded) {
    
   

  return (
    <div className="Dictionary">
      <section>
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword} />
      </form>


      <div className="hint">

        Suggested Words: Wine,Yoga,Plants,Sunrise..
      </div>
</section>

      <Results results={results} />
       <Photos photos={photos} />
    </div>
  );

}else {
    load();
    return "Loading..."
  }

}