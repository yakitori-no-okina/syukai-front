import React from "react";

const SelectLanguage = () => {
    const languageList = [
        { name: "Ruby", img: "" },
        { name: "Nuxt", img: "" },
        { name: "Vue", img: "" },
        { name: "Laravel", img: "" },
        { name: "Kotlin", img: "" },
    ]

    return (
      <div>
          <select size={3} className="" placeholder="Skillを追加しよう">
              {languageList.map(item => (
                  <option value={item.name}>{item.name}</option>
              ))}
          </select>
      </div>
    );
};

export default SelectLanguage;
