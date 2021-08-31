import React, { useEffect, useState } from "react";
import "./App.css";
import { Drink, DrinkAPIResponse, TransformedDrink } from "./types";
import { Drinks } from "./components/Drinks";
import { Button } from "./components/UI/Buttons";

const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

function App() {
  const [drinks, setDrinks] = useState<TransformedDrink[]>([]);

  function fetchDrinkHandler() {
    fetch(API_URL, { //--- THIS OBJECT IS THE FETCH CONFIGURATION FOR THE REQUEST
      referrerPolicy: "strict-origin-when-cross-origin", 
      method: "GET",
      mode: "cors",
      credentials: "omit",
    })
      .then((drinkPromise: Response) => {
        return drinkPromise.json(); //---- return of promise
      })
      .then((response: DrinkAPIResponse) => { //--- to capture JSON data -  
        const transformedDrinks: TransformedDrink[] = response.drinks.map((drinkData) => { //---resolver
          return {
            id: drinkData.idDrink,
            name: drinkData.strDrink,
            category: drinkData.strCategory,
            alternateName: drinkData.strDrinkAlternate,
            alcohol: drinkData.strAlcoholic,
            drinkThumb: drinkData.strDrinkThumb,
            glass: drinkData.strGlass,
            iba: drinkData.strIBA,
            video: drinkData.strVideo,
            instructions: drinkData.strInstructions,
            ingredient1: drinkData.strIngredient1,
            ingredient2: drinkData.strIngredient2,
            ingredient3: drinkData.strIngredient3,
            ingredient4: drinkData.strIngredient4,
            ingredient5: drinkData.strIngredient5,
            ingredient6: drinkData.strIngredient6,
            ingredient7: drinkData.strIngredient7,
            ingredient8: drinkData.strIngredient8,
            ingredient9: drinkData.strIngredient9,
            ingredient10: drinkData.strIngredient10,
            ingredient11: drinkData.strIngredient11,
            ingredient12: drinkData.strIngredient12,
            ingredient13: drinkData.strIngredient13,
            ingredient14: drinkData.strIngredient14,
            ingredient15: drinkData.strIngredient15,
            measure1: drinkData.strMeasure1,
            measure2: drinkData.strMeasure2,
            measure3: drinkData.strMeasure3,
            measure4: drinkData.strMeasure4,
            measure5: drinkData.strMeasure5,
            measure6: drinkData.strMeasure6,
            measure7: drinkData.strMeasure7,
            measure8: drinkData.strMeasure8,
            measure9: drinkData.strMeasure9,
            measure10: drinkData.strMeasure10,
            measure11: drinkData.strMeasure11,
            measure12: drinkData.strMeasure12,
            measure13: drinkData.strMeasure13,
            measure14: drinkData.strMeasure14,
            measure15: drinkData.strMeasure15,
          };
        });
        setDrinks(transformedDrinks);
      });
  }

  useEffect(() => {
    fetchDrinkHandler();
  }, []);
  console.log(drinks);

  return (
    <Layout>
      <MainDisplay>
        <Drinks drinks={drinks} fetchDrinkHandler={fetchDrinkHandler}></Drinks>
      </MainDisplay>
    </Layout>
  );
}

const Layout: React.FC = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        background: "#F92DB2",
      }}
    >
      {children}
    </div>
  );
};
const MainDisplay: React.FC = ({ children }) => {
  return (
    <div
      style={{
        height: "100vh",
        width: '60vw',
        background: "#2DB2F9",
      }}
    >
      {children}
    </div>
  );
};



export default App;
