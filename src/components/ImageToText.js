import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import placeholder from '../assets/images/imagePlaceholder.svg';
import Loader from './Loader';
import Tesseract from 'tesseract.js';
import { Animated } from "react-animated-css";

const ImageToText = () => {

    const [imageSrc, setImageSrc] = useState(placeholder);
    const [ocrLang, setOcrLang] = useState('');
    const [ocrResult, setOcrResult] = useState('...');
    const [loaderDiv, setLoaderDiv] = useState('d-none');

    const fileOnChange = (event) => {
        const imageFile = event.target.files[0]
        const reader = new FileReader();
        reader.onload = (e) => {
            setImageSrc(e.target.result);
        }
        reader.readAsDataURL(imageFile);
    }

    const languageOnChange = (event) => {
        const language = event.target.value;
        setOcrLang(language);
    }

    const doOCR = () => {
        const image = imageSrc;
        const language = ocrLang;
        if (image && language) {
            setLoaderDiv('d-block');
            Tesseract.recognize(image, language)
                .then((result) => {
                    const Result = result['data']['text'];
                    setOcrResult(Result);
                    setLoaderDiv('d-none');
                })
                .catch((error) => {
                    setLoaderDiv('d-none');
                    alert("Request Fail");
                })
        }
        else {
            alert('Chosse Image and Language Properly');
        }
    }

    return (
        <>
            <Container>
                <Row className='d-flex justify-content-center mt-5'>
                    <Col md={6} lg={6} sm={12}>
                        <Animated animationInDelay={400} animationInDuration={400} animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
                            <div className="input-div">
                                <img className="preview-img" src={imageSrc} alt="not-found" />
                                <div className="input-group">
                                    <input onChange={fileOnChange} type="file" className="form-control app-input m-1 form-control-file" />
                                    <select onChange={languageOnChange} className="form-control m-1 app-input">
                                        <option value="">Choose Langugae</option>
                                        <option value="afr">Afrikaans</option>
                                        <option value="amh">Amharic</option>
                                        <option value="ara">Arabic</option>
                                        <option value="asm">Assamese</option>
                                        <option value="aze">Azerbaijani</option>
                                        <option value="aze_cyrl">Azerbaijani-Cyrillic</option>
                                        <option value="bel">Belarusian</option>
                                        <option value="ben">Bengali</option>
                                        <option value="bod">Tibetan</option>
                                        <option value="bos">Bosnian</option>
                                        <option value="bul">Bulgarian</option>
                                        <option value="cat">Catalan; Valencian</option>
                                        <option value="ceb">Cebuano</option>
                                        <option value="ces">Czech</option>
                                        <option value="chi_sim">Chinese - Simplified</option>
                                        <option value="chi_tra">Chinese - Traditional</option>
                                        <option value="chr">Cherokee</option>
                                        <option value="cym">Welsh</option>
                                        <option value="dan">Danish</option>
                                        <option value="deu">German</option>
                                        <option value="dzo">Dzongkha</option>
                                        <option value="ell">Greek,Modern (1453-)</option>
                                        <option value="eng">English</option>
                                        <option value="enm">English,Middle (1100-1500)</option>
                                        <option value="epo">Esperanto</option>
                                        <option value="est">Estonian</option>
                                        <option value="eus">Basque</option>
                                        <option value="fas">Persian</option>
                                        <option value="fin">Finnish</option>
                                        <option value="fra">French</option>
                                        <option value="frk">German Fraktur</option>
                                        <option value="frm">French,Middle(ca. 1400-1600)</option>
                                        <option value="gle">Irish</option>
                                        <option value="glg">Galician</option>
                                        <option value="grc">Greek,Ancient (-1453)</option>
                                        <option value="guj">Gujarati</option>
                                        <option value="hat">Haitian;Haitian Creole</option>
                                        <option value="heb">Hebrew</option>
                                        <option value="hin">Hindi</option>
                                        <option value="hrv">Croatian</option>
                                        <option value="hun">Hungarian</option>
                                        <option value="iku">Inuktitut</option>
                                        <option value="ind">Indonesian</option>
                                        <option value="isl">Icelandic</option>
                                        <option value="ita">Italian</option>
                                        <option value="ita_old">Italian - Old</option>
                                        <option value="jav">Javanese</option>
                                        <option value="jpn">Japanese</option>
                                        <option value="kan">Kannada</option>
                                        <option value="kat">Georgian</option>
                                        <option value="kat_old">Georgian - Old </option>
                                        <option value="kaz">Kazakh</option>
                                        <option value="khm">Central Khmer</option>
                                        <option value="kir">Kirghiz; Kyrgyz</option>
                                        <option value="kor">Korean</option>
                                        <option value="kur">Kurdish</option>
                                        <option value="lao">Lao</option>
                                        <option value="lat">Latin</option>
                                        <option value="lav">Latvian</option>
                                        <option value="lit">Lithuanian</option>
                                        <option value="mal">Malayalam</option>
                                        <option value="mar">Marathi</option>
                                        <option value="mkd">Macedonian</option>
                                        <option value="mlt">Maltese</option>
                                        <option value="msa">Malay</option>
                                        <option value="mya">Burmese</option>
                                        <option value="nep">Nepali</option>
                                        <option value="nld">Dutch; Flemish</option>
                                        <option value="nor">Norwegian</option>
                                        <option value="ori">Oriya</option>
                                        <option value="pan">Panjabi; Punjabi</option>
                                        <option value="pol">Polish</option>
                                        <option value="por">Portuguese </option>
                                        <option value="pus">Pushto;Pashto</option>
                                        <option value="ron">Romanian;Moldavian;Moldovan</option>
                                        <option value="rus">Russian</option>
                                        <option value="san">Sanskrit</option>
                                        <option value="sin">Sinhala;Sinhalese</option>
                                        <option value="slk ">Slovak</option>
                                        <option value="slv">Slovenian</option>
                                        <option value="spa">Spanish;Castilian</option>
                                        <option value="spa_old">Spanish; Castilian-Old</option>
                                        <option value="sqi">Albanian</option>
                                        <option value="srp">Serbian</option>
                                        <option value="srp_latn">Serbian-Latin</option>
                                        <option value="swa">Swahili</option>
                                        <option value="swe">Swedish</option>
                                        <option value="syr">Syriac</option>
                                        <option value="tam">Tamil</option>
                                        <option value="tel">Telugu</option>
                                        <option value="tgk">Tajik</option>
                                        <option value="tgl">Tagalog</option>
                                        <option value="tha">Thai</option>
                                        <option value="tir">Tigrinya</option>
                                        <option value="tur">Turkish</option>
                                        <option value="uig">Uighur;Uyghur</option>
                                        <option value="ukr">Ukrainian</option>
                                        <option value="urd">Urdu</option>
                                        <option value="uzb">Uzbek</option>
                                        <option value="uzb_cyrl">Uzbek-Cyrillic</option>
                                        <option value="vie">Vietnamese</option>
                                        <option value="yid">Yiddish</option>
                                    </select>
                                    <button onClick={doOCR} className="btn btn-danger m-1">Do OCR</button>
                                </div>
                            </div>
                        </Animated>
                    </Col>

                    <Col md={6} lg={6} sm={12}>
                        <Animated animationInDelay={400} animationInDuration={400} animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
                            <div className="ocr-div">
                                <p className='text-white'>{ocrResult}</p>
                            </div>
                        </Animated>
                    </Col>
                </Row>
            </Container>
            <div className={loaderDiv}>
                <Loader />
            </div>
        </>
    );
};

export default ImageToText;