import React, { useState } from "react";
import Autosuggest from "react-autosuggest";

const suggestions = [
  { name: "Adana" },
  { name: "Adıyaman" },
  { name: "Afyonkarahisar" },
  { name: "Ağrı" },
  { name: "Aksaray" },
  { name: "Amasya" },
  { name: "Ankara" },
  { name: "Antalya" },
  { name: "Ardahan" },
  { name: "Artvin" },
  { name: "Aydın" },
  { name: "Balıkesir" },
  { name: "Bartın" },
  { name: "Batman" },
  { name: "Bayburt" },
  { name: "Bilecik" },
  { name: "Bingöl" },
  { name: "Bitlis" },
  { name: "Bolu" },
  { name: "Burdur" },
  { name: "Bursa" },
  { name: "Çanakkale" },
  { name: "Çankırı" },
  { name: "Çorum" },
  { name: "Denizli" },
  { name: "Diyarbakır" },
  { name: "Düzce" },
  { name: "Edirne" },
  { name: "Elazığ" },
  { name: "Erzincan" },
  { name: "Erzurum" },
  { name: "Eskişehir" },
  { name: "Gaziantep" },
  { name: "Giresun" },
  { name: "Gümüşhane" },
  { name: "Hakkâri" },
  { name: "Hatay" },
  { name: "Iğdır" },
  { name: "Isparta" },
  { name: "İstanbul" },
  { name: "İzmir" },
  { name: "Kahramanmaraş" },
  { name: "Karabük" },
  { name: "Karaman" },
  { name: "Kars" },
  { name: "Kastamonu" },
  { name: "Kayseri" },
  { name: "Kilis" },
  { name: "Kırıkkale" },
  { name: "Kırklareli" },
  { name: "Kırşehir" },
  { name: "Kocaeli" },
  { name: "Konya" },
  { name: "Kütahya" },
  { name: "Malatya" },
  { name: "Manisa" },
  { name: "Mardin" },
  { name: "Mersin" },
  { name: "Muğla" },
  { name: "Muş" },
  { name: "Nevşehir" },
  { name: "Niğde" },
  { name: "Ordu" },
  { name: "Osmaniye" },
  { name: "Rize" },
  { name: "Sakarya" },
  { name: "Samsun" },
  { name: "Şanlıurfa" },
  { name: "Siirt" },
  { name: "Sinop" },
  { name: "Sivas" },
  { name: "Şırnak" },
  { name: "Tekirdağ" },
  { name: "Tokat" },
  { name: "Trabzon" },
  { name: "Tunceli" },
  { name: "Uşak" },
  { name: "Van" },
  { name: "Yalova" },
  { name: "Yozgat" },
  { name: "Zonguldak" },
];

const AutoCompleteInput = ({ setMessage, setCity }) => {
  const [value, setValue] = useState("");
  const [suggestionsList, setSuggestionsList] = useState([]);

  const onChange = (event, { newValue }) => {
    setValue(newValue);
    setMessage(newValue);
  };

  const getSuggestions = (inputValue) => {
    return suggestions.filter(
      (suggestion) =>
        suggestion.name.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
    );
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestionsList(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestionsList([]);
  };

  const getSuggestionValue = (suggestion) => suggestion.name;

  const renderSuggestion = (suggestion) => <div>{suggestion.name}</div>;

  const inputProps = {
    placeholder: "Şehir seçin",
    value,
    onChange: onChange,
  };

  return (
    <Autosuggest
      suggestions={suggestionsList}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  );
};

export default AutoCompleteInput;
