import './App.css';

function App() {

  var change=0;
  var noofnotes=0;
  var reminder=0;
  var oparray=[];

  const notes = {
    "2000":0,
    "500":0,
    "200":0,
    "100":0,
    "50":0,
    "20":0,
    "10":0,
    "5":0,
    "1":0
  };
  var keylist=Object.keys(notes);
  function changegetter(){

    var billamount = document.getElementById("bill").value;
    var amount = document.getElementById("amount").value;
    var washplates = document.getElementById("washplates");
    
    if((parseInt(amount)<0 || parseInt(billamount)<0)){
      washplates.innerText ="Please enter postive values";
      return

    }

    // if amount >bill
    
    if(parseInt(amount)>=parseInt(billamount)){
    var change=parseInt(amount-billamount);
    washplates.innerText= `Return change: ${change} /-`;
    oparray=[];
    //algo
    keylist.sort((a,b)=>b-a);
    
    keylist.forEach(note => {
      parseInt(note);
      if(change>=note ){
      noofnotes = parseInt(change/note);
      oparray.push(noofnotes);
      reminder=change%note;
      change=reminder;

      }
      else{
        console.log("next note");
        oparray.push(0);
      } 
    })
    console.log(oparray);
    for(var i=0;i<oparray.length;i++){
      var td = "td";
      var display = td+i;
      document.getElementById(display).innerText = oparray[i];
    }
  }
  else{
    console.log("invalid bill")
    washplates.innerText="Cash paid cannot be lesser than the bill amount";
  }
  }
 


  return (
  <div className='parentContainer'>
    <h2>Cash Register Manager</h2>
    <div class="whitener">Enter the bill amount and cash given by the customer and know minimum number of notes to return.</div>
    <div class="bill">Bill Amount</div>
    <div><input id="bill" placeholder="Enter bill amount" /></div>
    <div class="cash">Cash paid</div>
    <div><input id="amount" placeholder="Enter amount paid"/></div>
    <div id="washplates"></div>

    <div><button onClick={changegetter}>Check</button></div>

    
    <table>
    <thead></thead>  
      <tbody>
        <tr>
          <td>2000</td><td>500</td><td>200</td><td>100</td>
          <td>50</td><td>20</td><td>10</td><td>5</td><td>1</td>  
        </tr>
        <tr>
        <td id='td0'>0</td><td id='td1'>0</td><td id='td2'>0</td>
        <td id='td3'>0</td><td id='td4'>0</td><td id='td5'>0</td>
        <td id='td6'>0</td><td id='td7'>0</td><td id='td8'>0</td>  
        </tr>
      </tbody> 
    </table>        

    </div>
  );
}

export default App;
