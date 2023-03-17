import React, {Fragment} from "react";

import mealsImage from "../../../Assests/mealsImage.jpg"
import HeaderCartButton from "../../Layout/HeaderCartButton/HeaderCartButton";
import classes from './Header.module.css';

const Header = ()=> {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='Table full of Food' />
            </div>
        </Fragment>
    )
}

export default Header;