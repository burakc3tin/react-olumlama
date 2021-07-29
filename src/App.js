import './App.css';
import React, { Component } from 'react';
import data from './test1.json'
import music from './deneme.mp3'
class App extends Component {

  constructor(props) {
    super(props);
    

    
  
  
  
  }

  state = {
    liste :data,
    sayac:Math.floor(Math.random()*444)
  }

  
  degistir=()=>{
   this.setState({sayac:Math.floor(Math.random()*444)})
 
  }

  render() {
    return (
      <div>
        <div className="topButton">
        <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#exampleModal">
  Olumlama nedir?
</button>
        </div>
      <div className="main">
      <h4>{this.state.liste[this.state.sayac]} </h4>
      <input className="btn btn-warning col-md-3" onClick={this.degistir.bind(this)}  type="button" value="Değiştir"/>
    </div>
    
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Olumlama nedir?</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">X</span>
        </button>
      </div>
      <div class="modal-body">
       
      Kullandığımız her bir sözcük, evrene verilmiş bir mesaj gibidir. Çünkü cümlelerimiz, duygu ve düşüncelerimizin sesle ifade edilmiş biçimidir. Mesela; her şeyden şikayet eden, hep mutsuz olan insanlara bakarsanız o kronik mutsuzların sürekli olumsuz cümleler kullandığını, hep en kötüye odaklandığını ve başlarına da hep mutsuz olunacak şeyler geldiğini rahatlıkla görebilirsiniz.
      
      Olumlama gerçekleşmesi istenen bir şeyin gerçekleştiğine kalpten inanarak, bilinçaltında o pozitif imgeyi yaratmaktır. Olumlama cümlesini belirli bir süre boyunca alçak ya da yüksek sesle kullanmaktır.



      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-warning" data-dismiss="modal">Kapat</button>
       </div>
    </div>
  </div>
</div>

    </div>
    );
  }
}

export default App;