
// React course Udemy
//import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
//import Expenseit from './components/ExpenseItem'
import Expense from './components/Cost/Expense';
import NewExpense from './components/NewExpense/NewExpense';
//import ExpensesFilter from './components/Cost/ExpenseFilter';
 //let name="Amshu";
const Dummy=[{id:"e1", tit:"Candle",amount:50, date:new Date(2021,1,8)},
 {id:"e2" ,tit:"Apple",amount:85, date:new Date(2022,2,8)},
 {id:"e3" ,tit:"Mango",amount:150, date:new Date(2021,8,8)},
 {id:"e4" ,tit:"Rice",amount:250, date:new Date(2019,3,8)},]

function App(props) {

  const [expenses,setExpenses]=useState(Dummy)

  const addNew = exp=>{
	//const a=[exp,...expenses];
	console.log(exp.tit)
	//expenses=props.onCheck
	setExpenses([exp,...expenses]);
};
  return (
    <>
    <nav className="s">
      <h1>Expense-Tracker </h1>
      <NewExpense  onAddNew={addNew}/>
	 

      <Expense exp={expenses} />
      

      

    </nav>
    </>

  );
}

export default App;
/////////////////////////////////////
/*import React from 'react';
import './App.css';
import exp1 from './components/NewExpense/yp1';
import Exp from './components/NewExpense/yp';

function App() {
  return (
	<div>
		<Exp first_name={exp1[0].first_name} last_name={exp1[0].last_name}email={exp1[0].email}avatar={exp1[0].avatar}gender={exp1[0].gender}
	 domain={exp1[0].domain} available={exp1[0].available}/>
		<Exp />





	

	</div>

  );
}

export default App;
*/
/*<exp first_name={exp1[0].first_name} last_name={exp1[0].last_name}email={exp1[0].email}avatar={exp1[0].avatar}gender={exp1[0].gender}
	 domain={exp1[0].domain} available={exp1[0].available}/>*/
//////////////////////////////////////////
// import React, { useState, useEffect } from 'react';
// import axios from 'axios'
// function App() {
// 	const [fileContent, setFileContent] = useState("");
  
// 	const handleButtonClick = async () => {
// 	  try {
// 		const response = await axios.get("/store");
// 		setFileContent(response.data);
// 	  } catch (error) {
// 		console.log(error);
// 	  }
// 	};
  
// 	return (
// 	  <div>
// 		<button onClick={handleButtonClick}>Display File Content</button>
// 		<pre>{fileContent}</pre>
// 	  </div>
// 	);
// }\
/*
import React, {useState} from "react";
import axios from "axios";

function Quotes() {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
function getQuote() {
    axios.get("http://localhost:5000/",  { crossdomain: true }).then(response => {
      setText(response.data.text);
      setAuthor(response.data.author);
    });
  }
return (
    <div>
      <button onClick={getQuote}>
        Download
      </button>
      <h1>{text}</h1>
      <h3>{"-" + author}</h3>
    </div>
  )
}
export default Quotes;

*/
//////////////////////////////////////////////////////////////////////////////////
/*import React, { useState } from "react";
import axios from "axios";

import FileList from './Fetch'
function App() {
  const [file, setFile] = useState(null);
  
  const [downloadUrl, setDownloadUrl] = useState("");
  //const [message, setMessage] = useState("");
  
  //const [fileContent, setFileContent] = useState("");

  //const handleDownloadClick = async () => {
  //  try {
  //    const response = await axios.get("/download");
  //    setFileContent(response.data);
  //  } catch (error) {
  //    console.error(error);
  //  }
  //};
  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setDownloadUrl(data.downloadUrl);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file1", file);

    axios.post("http://localhost:8080/", formData).then(
      (response) => {
		///const data = await response.json();
        //setDownloadUrl(data.downloadUrl);
        //setMessage(response.data.message);
		//console.log(setMessage(response.data.message));
        //setOutput({ fsm1: response.data.fsm1, fsm2: response.data.fsm2 });
      },
      (error) => {
        //setMessage(error.response.data.message);
      }
    );
  };

  //function handleOutput() {
  //  console.log(output.fsm1);
  //  console.log(output.fsm2);
  //}

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  

  const DownloadClick = () => {
	// using Java Script method to get PDF file
	fetch('http://localhost:8080/download').then(response => {
		response.blob().then(blob => {
			// Creating new object of PDF file
			const fileURL = window.URL.createObjectURL(blob);
			// Setting various property values
			let alink = document.createElement('a');
			alink.href = fileURL;
			alink.download = 'fsm1.pdf';
			alink.click();
		})
	})
}

  return (
    <div>
      <h1>FSM File Upload</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" name="file1" onChange={handleFileChange} />
        <input type="submit" value="Upload" onClick={handleUpload}/>
      </form>
	  <FileList/>
	  <a href={downloadUrl} download="fsm.txt">
            {downloadUrl}</a>

    </div>
  );
}

export default App;*/
//////////////////////////////////////////////////////////////////////////////////////////

 /*
 
	  <button onClick={handleDownloadClick}>Download file</button>
      {fileContent && <pre>{fileContent}</pre>}


	 <h1>File upload</h1>
	 <form action="/" method="POST" enctype="multipart/form-data">
		 <input type="file"name="file1" onChange={(value) => { setUserCode(value) }}/>
		 <input type="submit" onclick={()=>compile() }value="upload"/>
	 </form>
	 

      <button onClick={handleOutput}>Output</button>
      <div>{output.fsm1}</div>
      <div>{output.fsm2}</div>
	 */
////////////////////////////////////////////////////

////////////////////////////////////////////////

// FSM design//
/*
import { useState } from 'react';
import './App.css';
import Editor from "@monaco-editor/react";
import Navbar from './components/Navbar';
import Axios from 'axios';
import fileDownload from 'js-file-download';

import Go from './components/table';
import spinner from './spinner.png';


function App() {

// State variable to set users source code
const [userCode, setUserCode] = useState(``);

// State variable to set editors default language
const [userLang, setUserLang] = useState("c++");

// State variable to set editors default theme
const [userTheme, setUserTheme] = useState("vs-dark");

// State variable to set editors default font size
const [fontSize, setFontSize] = useState(20);

// State variable to set users input
const [userInput, setUserInput] = useState("");

// State variable to set users output
const [userOutput, setUserOutput] = useState("");

// Loading state variable to show spinner
// while fetching data
const [loading, setLoading] = useState(false);

const options = {
	fontSize: fontSize
}

// Function to call the compile endpoint
function compile() {
	setLoading(true);
	if (userCode === ``) {
	return
	}

	// Post request to compile endpoint
	Axios.post(`http://localhost:8080/compile`, {
	code: userCode,
	language: userLang,
	input: userInput }).then((res) => {
		console.log(res);
	setUserOutput(res.data);
	}).then(() => {
	setLoading(false);
	})
}

// Function to clear the output screen
function clearOutput() {
	setUserOutput("");
}

function changecode(content){
	console.log(content);
	setUserCode(content);
}

const Handler = () => {
	let fileReader;
	
	const handleFileRead = (e) => {
	  const content = fileReader.result;
	  console.log("sent?");
	  //setUserCode(content);
	  //Editor.onChange(content);
	  changecode(content);
	  console.log(userCode.value);
	  // … do something with the 'content' …
	};
	
	const handleFileChosen = (file) => {
	  fileReader = new FileReader();
	  fileReader.onloadend = handleFileRead;
	  fileReader.readAsText(file);
	};
	

	const handleDownload = (url, filename) => {
		Axios.get(url, {
		  responseType: 'blob',
		})
		.then((res) => {
		  fileDownload(res.data, filename)
		})
	}
	  
	return <div className='upload-expense'>
	  <input
		type='file'
		id='file'
		className='input-file'
		accept='.csv'
		onChange={e => handleDownload( URL ,e.target.files[0])}
	  />
	</div>;

};



return (
	<div className="App">
	<Go/>
	<Navbar
		userLang={userLang} setUserLang={setUserLang}
		userTheme={userTheme} setUserTheme={setUserTheme}
		fontSize={fontSize} setFontSize={setFontSize}
	/>
	<div className="main">
		<div className="left-container">
		<Editor
			options={options}
			height="calc(100vh - 50px)"
			width="100%"
			theme={userTheme}
			language={userLang}
			defaultLanguage="python"
			defaultValue="# Enter your code here"
			onChange={(value) => { setUserCode(value) }}
		/>
		<button className="run-btn" onClick={() => compile()}>
			Run
		</button>
		</div>
		<div className="right-container">
		<h4>Input:</h4>
		<div className="input-box">
			<textarea id="code-inp" onChange=
			{(e) => setUserInput(e.target.value)}>
			</textarea>
		</div>
		<h4>Output:</h4>
		{loading ? (
			<div className="spinner-box">
			<img src={spinner} alt="Loading..." />
			</div>
		) : (
			<div className="output-box">
			<pre>{userOutput}</pre>
			<button onClick={() => { clearOutput() }}
				className="clear-btn">
				Clear
			</button>
			</div>
		)}
		</div>
	</div>
	</div>
);
}

export default App;

*/