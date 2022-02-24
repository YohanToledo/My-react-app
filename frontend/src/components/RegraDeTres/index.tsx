import './styles.css';
import React, {useState, useEffect} from 'react';


function calcular(){
	alert("alert");
}

function RegraDeTres(){

	const [total, setTotal] = useState(0);
	const [value, setValue] = useState(0);
	const [result, setResult] = useState(0);
	

	function getTotal(event : any){
		setTotal(event.target.value);
		console.log(total);
	}
    function getValue(event : any){
		setValue(event.target.value);
		console.log(value);
	}

	useEffect(() => { 
		setResult(value * 100 / total);

	},[total, value]);


    return(
        <div className="container-fluid">
			
			<div className="row">
				<div className="content col-md-12">
					<div className="row">
						<div className="col-md-5">
							<h4>Regra de Tr&ecirc;s</h4>
						</div>
					</div>
				
					<div className="row" >
						<div className="col-md-5">    						
							<input className="form-control" type="number" placeholder="total" id="total" onChange={getTotal} />
						</div>
						<div className="col-md-2"> 
							
						</div>
						<div className="col-md-5">
							<fieldset disabled>						
								<input className="form-control" placeholder="100%" />
							</fieldset>
						</div>

					</div>
					
					<div className="row"  >
						<div className="col-md-5">    						
							<input className="form-control" type="number" id="valor" placeholder="valor" onChange={getValue}/>
						</div>
						<div className="col-md-2"> 
							
						</div>
						<div className="col-md-5">
							<fieldset disabled>						
								<input className="form-control" id="resultado" placeholder={Number.isNaN(result) ? "X%" : result.toFixed(2).toString() + "%"} />
							</fieldset>
						</div>
					</div>
					
					<div className="row" >
						<div className="col-md-12 pull-right">
							<button type="button" className="btn btn-primary" id="btn-calcular" onClick={calcular}>Calcular</button>
						</div>
					</div>
					
				</div>
				
			</div>
			
		
		</div>
    );
}

export default RegraDeTres;
