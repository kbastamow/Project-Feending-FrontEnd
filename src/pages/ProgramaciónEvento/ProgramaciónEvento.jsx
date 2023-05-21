import React, { useState } from 'react'
import {HiOutlineTrash, HiOutlineCheck, HiOutlinePaintBrush, HiClock, HiChevronDown, HiPlusSmall, HiPlus} from "react-icons/hi2"
import "./KatForm.scss"
import "../../sass/input.scss"
import BtnAddActivity from '../Buttons/BtnAddActivity';
import BtnSave from '../Buttons/BtnSave';
import BtnNext from '../Buttons/BtnNext';
import InputGroup from '../ActivityInputGroup/ActivityInputGroup';


const KatForm = () => {
  
  const [inputGroups, setInputGroups] = useState([
    { input1: '', input2: '', input3: '' }
  ]);

  const handleAddInputGroup = () => {
    setInputGroups([...inputGroups, { input1: '', input2: '', input3: '' }]);
  };


  const handleInputChange = (index, inputName, value) => {
    const updatedGroups = [...inputGroups];
    updatedGroups[index][inputName] = value;
    setInputGroups(updatedGroups);
  };


  //The input can be converted to text by clicking the check icon
  
  const handleConvertToText = (index) => {
    const updatedGroups = [...inputGroups];
    const group = updatedGroups[index];
    const convertedGroup = {
      input1: group.input1 ? group.input1 : '00:00',
      input2: group.input2 ? group.input2 : '00:00',
      input3: group.input3 ? group.input3 : 'N/A',
      showText: true
    };
    updatedGroups[index] = convertedGroup;
    setInputGroups(updatedGroups);
  };
  
//It can be converted back to input fields:

  const handleConvertToInput = (index) => {
    const updatedGroups = [...inputGroups];
    const group = updatedGroups[index];
    updatedGroups[index] = { ...group, showText: false };
    setInputGroups(updatedGroups);
  };
  


  const deleteActivity = (index) => {
    const updatedGroups = [...inputGroups];
    updatedGroups.splice(index, 1);
    setInputGroups(updatedGroups);
  };
  
  const handleSave = (e) =>{
    e.preventDefault();
    console.log(inputGroups)
  }
  
  // Another component prints the actual form. Passing values
  const renderInputGroups = () => {
    return inputGroups.map((group, index) => (
      <InputGroup
      key={index}
      group={group}
      index={index}
      handleInputChange={handleInputChange}
      handleConvertToText={handleConvertToText}
      handleConvertToInput={handleConvertToInput}
      deleteActivity={deleteActivity}
    />
  ));
};


  return (
    <>

      <div className="main-background">
        <h3>Programación del evento</h3>

        <div className="tab">
          <button className="btn-tab-day" >DÍA 1</button>
          <button className="btn-tab-day">DÍA 2</button>
          <button className="btn-tab-day" >DÍA 3</button>
          <button className="btn-tab-plus" onClick={addDay}><span><HiPlusSmall /></span></button>
        </div>

        <div className="activity-form">

          <span className="inputs-div title">
            <span className="clock-text">Hora inicio</span>
            <span className="clock-text">Hora final</span>
            <span className="activity-text">Descripción de la actividad</span>
          </span>

          {renderInputGroups()}

          <div className="addbutton-div">

            <BtnAddActivity handleClick={handleAddInputGroup} />
          </div>

        </div >

        <span className="savebutton-div">
          <BtnSave onClick={handleSave}></BtnSave>
        </span>

      </div>

      <div className="next-recinto-container">
        <p className="steps">2 Pasos de 3 Completados</p>
        <p className="points">● ● &#x25CB;</p>
        <div className="btns">
          <BtnNext></BtnNext>
        </div>
      </div>

    </>
  )
}

export default KatForm