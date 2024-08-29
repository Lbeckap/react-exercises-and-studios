import React from 'react';
import classes from './HobbyLinks.module.css';

export default function HobbyLinks() {
    const hobbyLinks = ["https://www.tennis.com/", "https://www.pinterest.com/"];

    return (
        <div>
            <h3>Hobby Links</h3>
            <a className={classes.block} href = {hobbyLinks[0]}>www.tennis.com</a>
            <a className={classes.block}href = {hobbyLinks[1]}>www.pinterest.com</a>
        </div>
    );
}