import { FilterProps } from "@/types";
import dotenv from "dotenv";
dotenv.config();

export async function fetchCars(filters: FilterProps) {
    // const { manufacturer, year, model, limit, fuel } = filters;
  
    const headers: HeadersInit = {
      "X-RapidAPI-Key": process.env.RAPIDAPI_KEY || "",
      "X-RapidAPI-Host": process.env.RAPIDAPI_HOST || "",
    };
  
    const response = await fetch(
      'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
      {
        headers: headers,
      }
    );
  
    const result = await response.json();
  
    return result;
  }

  export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; 
    const mileageFactor = 0.1; 
    const ageFactor = 0.05; 
  
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };