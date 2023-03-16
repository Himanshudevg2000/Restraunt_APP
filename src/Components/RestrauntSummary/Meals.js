import { Fragment } from "react";
import RestrauntMeals from "./RestrauntMeals";
import MealSummary from "./RestrauntSummary";

const Meals = ()=> {
    return (
        <Fragment>
            <MealSummary/>
            <RestrauntMeals/>
        </Fragment>
    );
};

export default Meals;