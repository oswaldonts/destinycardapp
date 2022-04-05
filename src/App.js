import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

import Card from './components/Card';
import CardModal from './CardModal';
import CardIcon from './CardIcon';

import weaponsData from './data/weapons.json';
import titanArmorData from './data/titanArmor.json';
import hunterArmorData from './data/hunterArmor.json';
import warlockArmorData from './data/warlockArmor.json';

function App() {
  const urlBase = "https://www.bungie.net";

  const emptyItem = {
    "name": "",
    "icon": "",
    "screenshot": "",
    "text": "",
    "tier": "",
    "ammoType": {
      "name": "",
      "icon": ""
    },
    "type": "",
    "subType": "",
    "class": "",
    "damageType": {
      "name": "",
      "icon": ""
    }
  }

  const titanClass = {
    ...emptyItem,
    type: "Guardian",
    name: "Titan",
    tier: "Trinity Shader",
    icon: "/common/destiny2_content/icons/8956751663b4394cd41076f93d2dd0d6.png"
  };

  const hunterClass = {
    ...emptyItem,
    type: "Guardian",
    name: "Hunter",
    tier: "Trinity Shader",
    icon: "/common/destiny2_content/icons/e7324e8c29c5314b8bce166ff167859d.png"
  };

  const warlockClass = {
    ...emptyItem,
    type: "Guardian",
    name: "Warlock",
    tier: "Trinity Shader",
    icon: "/common/destiny2_content/icons/bf7b2848d2f5fbebbf350d418b8ec148.png"
  };

  const classes = [];
  classes.push(titanClass, hunterClass, warlockClass);

  const [isVisibleModal, setVisibleModal] = useState(false);
  const [weapons, setWeapons] = useState([]);
  const [titanArmors, setTitanArmors] = useState([]);
  const [hunterArmors, setHunterArmors] = useState([]);
  const [warlockArmors, setWarlockArmors] = useState([]);
  const [item, setItem] = useState(emptyItem);

  useEffect(() => {
    async function fetchData() {
      // const weapons = 
      //   await axios.get('http://localhost:3002/inventoryItems?itemType=3&classType=3')
      //     .then(res => res.data)
      //     .catch(error => {
      //       console.log(error);
      //       alert("could not load the items");

      //       return [];
      //     });

      //     console.log(weapons);

      // const titanArmor = 
      //   await axios.get('http://localhost:3002/inventoryItems?itemType=2&classType=0')
      //     .then(res => res.data)
      //     .catch(error => {
      //       console.log(error);
      //       alert("could not load the items");

      //       return [];
      //     });

      // const hunterArmor = 
      //   await axios.get('http://localhost:3002/inventoryItems?itemType=2&classType=1')
      //     .then(res => res.data)
      //     .catch(error => {
      //       console.log(error);
      //       alert("could not load the items");

      //       return [];
      //     });

      // const warlockArmor = 
      //   await axios.get('http://localhost:3002/inventoryItems?itemType=2&classType=2')
      //     .then(res => res.data)
      //     .catch(error => {
      //       console.log(error);
      //       alert("could not load the items");

      //       return [];
      //     });
      
      setWeapons(weaponsData);
      setTitanArmors(titanArmorData);
      setHunterArmors(hunterArmorData);
      setWarlockArmors(warlockArmorData);
    }

    fetchData();
  }, [])

  function showCard(item) {
    setItem(item);
    
    setVisibleModal(!isVisibleModal);
  }

  function hideCard() {
    setVisibleModal(!isVisibleModal);
  }

  return (
    <React.Fragment>
      <div className="min-h-screen bg-gray-500">
        <div className="container mx-auto">

            <img src="https://www.bungie.net/common/destiny2_content/icons/4c3341f3c0d94e3b01b3d48cd1422924.jpg" alt="" />
            <h6 className="text-3xl text-center text-slate-200 flex items-center justify-center">Destiny Card Info</h6>

            <div className="flex py-6 justify-center">
              <div className="grid grid-cols-3 gap-4">
                {classes.map((item, index) => {
                  return <CardIcon key={index} item={item} showCard={showCard} urlBase={urlBase} />
                })}
              </div>
            </div>

            <div className="flex py-6 justify-center">
              <div className="grid grid-cols-12 gap-4">
                {weapons.map((item, index) => {
                  return <CardIcon key={index} item={item} showCard={showCard} urlBase={urlBase} />
                })}
              </div>
            </div>
            
            <div className="flex py-6 justify-center">
              <div className="grid grid-cols-3 gap-16">
                <div className="grid grid-cols-5 gap-4">
                  {titanArmors.map((item, index) => {
                    return <CardIcon key={index} item={item} showCard={showCard} urlBase={urlBase} />
                  })}
                </div>
                <div className="grid grid-cols-5 gap-4">
                  {hunterArmors.map((item, index) => {
                    return <CardIcon key={index} item={item} showCard={showCard} urlBase={urlBase} />
                  })}
                </div>
                <div className="grid grid-cols-5 gap-4">
                  {warlockArmors.map((item, index) => {
                    return <CardIcon key={index} item={item} showCard={showCard} urlBase={urlBase} />
                  })}
                </div>
              </div>
            </div>
            
            
            
            <CardModal isVisibleModal={isVisibleModal} hideCard={hideCard}>
              <Card item={item} urlBase={urlBase} />
            </CardModal>
          
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
