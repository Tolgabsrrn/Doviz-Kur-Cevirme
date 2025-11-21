import React, { useState } from 'react'
import './css/Currency.css' // CSS DOSYASINI EKRANDA GÖSTERMEK İÇİN ÇAĞIRDIK
import { FaArrowAltCircleDown } from "react-icons/fa"; // icon çağırdım buttona
import axios from 'axios' // terminalde yükledikten sonra import ediyoruz

//siteden çekmek için tanımlıyoruz site: https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_FJ3Z82Q2AfWGqU3gHC3wVM9YtaCAnagteMqT44EQ&base_currency=EUR

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest" // soru işaretine kadar
let API_KEY = "fca_live_FJ3Z82Q2AfWGqU3gHC3wVM9YtaCAnagteMqT44EQ" // apiden sonra & işaretine kadar


// app.css e arka plan resmi ekledik ve css verdik
// şimdi ana ekranda görselimizi stunlarımı oluşturalım
// 1. olarak classname veriyoruz
// ilk başta imput atmamız gerekiyor Bir yazılımın etkileşimli olabilmesi için kullanıcıdan veri alması gerekir.
// İnput kutucuk açma
// selection kullanıyoruz
// başlık verdim yeni div de onada isim vererek css dosyada css verdim



//PARA BİRİMLERİNİ FUNC İLE RETURN ARASINA steteleri TANIMLAMAM LAZIM 
//1.const state değişecek para birimi 
//2.const state kur from kullanıyorum çünkü şundan şuna demek
//3.const state kur to şu para birimine demek
//4.const State sonucu ekranda gösterebilmek için


function Currency() {

const [amount, setAmount] = useState (1);
const [fromCurrency, setFromCurrency] = useState('USD'); 
const [toCurrency, setToCurrency] = useState('TRY'); 
const [result, setResult] = useState ("");

 /* sıra sıra inputlara değerlerini vericez aşağıda */

/* beklemesi gerektiği için async ve await yazmak zorundayız ve muhakkak const response yaz */
 const exchange = async () => {
 const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`)
 setResult (((response.data.data[toCurrency]) * amount).toFixed(2)) ; /* en son bütün değerleri buraya yazıyoruz ve girilenle kuru çarpıyoruz */
    }

  return (
    <div className='currency-div'>
      <div>
        <h3 className="currency-title">DÖVİZ KURU UYGULAMASI</h3>
      </div>


      <input 
      value={amount}
      onChange={(e) => setAmount(e.target.value)} /*içine yazdığımız değer onu alacak setamount adındaki tanımladığımız yukarıda setlemiş olacak. */ 
      type="number" className='amount' />



      <select onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option'>
        <option>🇺🇸 USD</option>
        <option>🇪🇺 EUR</option>
        <option>🇹🇷 TRY </option>
        </select>


<button
onClick={exchange}
 className="swap-btn"><FaArrowAltCircleDown />
</button>



<select onChange={(e)=> setToCurrency(e.target.value)} className='to-currency-option'>
       <option>🇹🇷 TRY</option>
        <option>🇺🇸 USD</option>
        <option>🇪🇺 EUR</option>
      </select>

<input 
value={result}
onChange={(e) => setResult(e.target.value)}
 type="number" className='result' />

    </div>
  )
}

export default Currency

