import React from 'react'
import { Drink, TransformedDrink } from '../types'
import { Button } from './UI/Buttons';

export const Drinks: React.FC<{drinks: TransformedDrink[], fetchDrinkHandler: () => void}> = ({drinks, fetchDrinkHandler}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "gray",
        margin: "2",
      }}
    >
      <h1>Welcome to Drink Roulette</h1>
      <Button onClick={fetchDrinkHandler}>Press</Button>
      {drinks.map((drink, drinkIndex) => {
        const {
          id,
          name,
          category,
          alternateName,
          alcohol,
          drinkThumb,
          glass,
          iba,
          video,
          instructions,
          ...ingredientsAndMeasures
        } = drink;

        const ingredientAndMeasureKeys = Object.keys(ingredientsAndMeasures);

        const ingredientKeys = ingredientAndMeasureKeys.filter((key) =>
          /ingredient/.test(key)
        );

        const measureKeys = ingredientAndMeasureKeys.filter((key) =>
          /measure/.test(key)
        );

        const ingredients: { name: string; measure: string }[] = ingredientKeys
          .map((ingredientKey, ingredientKeyIndex) => {
            return {
              name: (
                ingredientsAndMeasures as unknown as { [index: string]: string }
              )[ingredientKey],
              measure: (
                ingredientsAndMeasures as unknown as { [index: string]: string }
              )[measureKeys[ingredientKeyIndex]],
            };
          })
          .filter((ingredient) => Boolean(ingredient.name));

        const multilineInstructions = instructions.split(". ");

        return (
          <ul key={drink.id}>
            <img style={{ height: 100 }} src={drinkThumb} />
            <h2>{name}</h2>
            <h3>{category}</h3>
            <h3>{alternateName}</h3>
            <h3>{glass}</h3>
            <h3>{iba}</h3>
            <h3>{video}</h3>
            <div>
              <ul>
                <h3>Ingredients:</h3>
                {ingredients.map((ingredient) => {
                  return (
                    <li>
                      {ingredient.name}
                      {ingredient.measure ? ": " + ingredient.measure : null}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <ul>
                <h3>Instructions:</h3>
                {multilineInstructions.map((instruction) => {
                  return <li>{instruction}</li>;
                })}
              </ul>
            </div>
          </ul>
        );
      })}
    </div>
  );
};